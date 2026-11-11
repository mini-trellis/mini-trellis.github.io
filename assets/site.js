(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const zh = document.body.dataset.lang === 'zh';
  const text = (en, cn) => zh ? cn : en;

  document.querySelectorAll('[data-badge-src]').forEach(link => {
    const badge = new Image();
    badge.alt = link.textContent.trim();
    badge.height = 20;
    badge.addEventListener('load', () => link.replaceChildren(badge), {once: true});
    badge.src = link.dataset.badgeSrc;
  });

  const menu = document.getElementById('docs-menu-button');
  const sidebar = document.getElementById('docs-sidebar');
  if (menu && sidebar) {
    menu.hidden = false;
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      sidebar.classList.toggle('is-open', open);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && sidebar.classList.contains('is-open')) {
        menu.setAttribute('aria-expanded', 'false');
        sidebar.classList.remove('is-open');
        menu.focus();
      }
    });
  }

  const tabs = [...document.querySelectorAll('.demo-tabs [role="tab"]')];
  function selectTab(tab, focus = false) {
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', event => {
      const positions = {ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1};
      if (event.key in positions) {
        event.preventDefault();
        selectTab(tabs[positions[event.key]], true);
      }
    });
  });

  document.querySelectorAll('.prose table').forEach(table => {
    const wrap = document.createElement('div');
    wrap.className = 'table-scroll';
    wrap.tabIndex = 0;
    wrap.setAttribute('role', 'region');
    wrap.setAttribute('aria-label', text('Scrollable table', '可横向滚动的表格'));
    table.before(wrap);
    wrap.append(table);
  });

  document.querySelectorAll('.prose pre, .install-example pre').forEach(pre => {
    const content = pre.querySelector('code')?.textContent ?? pre.textContent;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-button';
    button.textContent = text('Copy', '复制');
    button.setAttribute('aria-label', text('Copy code', '复制代码'));
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(content);
        button.textContent = text('Copied', '已复制');
      } catch {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(pre.querySelector('code') || pre);
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = text('Select & copy', '请复制选中文本');
      }
      setTimeout(() => { button.textContent = text('Copy', '复制'); }, 2000);
    });
    pre.append(button);
  });

  const toc = document.getElementById('page-toc-links');
  if (toc) {
    const headings = [...document.querySelectorAll('.prose h2[id]')];
    headings.forEach(heading => {
      const label = heading.textContent;
      const link = document.createElement('a');
      link.href = '#' + encodeURIComponent(heading.id);
      link.textContent = label;
      toc.append(link);
      const anchor = link.cloneNode();
      anchor.className = 'anchor-link';
      anchor.textContent = '#';
      anchor.setAttribute('aria-label', text('Link to ', '链接到：') + label);
      heading.append(anchor);
    });
    toc.closest('aside').hidden = headings.length === 0;
  }

  const dialog = document.getElementById('search-dialog');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  let indexPromise;
  let searchRequest = 0;
  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(document.body.dataset.searchUrl)
        .then(response => {
          if (!response.ok) throw new Error('Search index unavailable');
          return response.json();
        })
        .then(items => items.filter(item => item.lang === document.body.dataset.lang))
        .catch(error => { indexPromise = undefined; throw error; });
    }
    return indexPromise;
  }
  async function search() {
    const request = ++searchRequest;
    const query = input.value.trim().toLocaleLowerCase();
    results.replaceChildren();
    if (!query) {
      status.textContent = text('Search commands, platforms, or questions.', '输入命令、平台名称或问题关键词。');
      return;
    }
    status.textContent = text('Searching…', '搜索中…');
    try {
      const items = await loadIndex();
      if (request !== searchRequest) return;
      const terms = query.split(/\s+/);
      const matches = items.map(item => {
        const title = item.title.toLocaleLowerCase();
        const body = item.text.toLocaleLowerCase();
        const combined = title + ' ' + body;
        if (!terms.every(term => combined.includes(term))) return null;
        const score = terms.reduce((sum, term) => sum + (title.includes(term) ? 10 : 1), 0);
        return {item, score};
      }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 10);
      status.textContent = matches.length ? text(`${matches.length} results`, `${matches.length} 条结果`) : text('No matching documents. Try a command or another keyword.', '未找到匹配文档，试试命令名称或其他关键词。');
      matches.forEach(({item}) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        const title = document.createElement('strong');
        title.textContent = item.title;
        const snippet = document.createElement('p');
        const at = item.text.toLocaleLowerCase().indexOf(terms[0]);
        const start = Math.max(0, at - 35);
        snippet.textContent = (start ? '…' : '') + item.text.slice(start, start + 155) + '…';
        a.append(title, snippet);
        li.append(a);
        results.append(li);
      });
    } catch {
      if (request === searchRequest) status.textContent = text('Search could not load. Try again or use the documentation navigation.', '搜索索引加载失败，请重试或使用文档目录。');
    }
  }
  if (dialog && typeof dialog.showModal === 'function') {
    function openSearch() {
      if (!dialog.open) dialog.showModal();
      input.focus();
      search();
    }
    document.querySelectorAll('[data-search-open]').forEach(button => {
      button.hidden = false;
      button.addEventListener('click', openSearch);
    });
    document.querySelector('[data-search-close]').addEventListener('click', () => dialog.close());
    input.addEventListener('input', search);
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && dialog.open) {
        event.preventDefault();
        dialog.close();
        return;
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openSearch();
      }
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
  }
})();
