---
layout: home
home: true
title: mini-trellis
lang: zh
lang_peer: /
permalink: /zh/
description: "让项目知识延续到下一次开发。保存约定、调研与开发记录，检索项目文档和本地对话。"
---
<section class="hero section-wrap">
  <div class="hero-copy"><a class="release-pill" href="/zh/releases/v{{ site.data.docs.version }}/"><span class="status-dot"></span>v{{ site.data.docs.version }}<span class="pill-separator">/</span>版本说明 <span aria-hidden="true">↗</span></a><p class="eyebrow">PROJECT MEMORY · 项目知识</p><h1>下一次开发，<br>从已有<span>知识</span>开始。</h1><p class="hero-lead">把架构约定、调研结论和开发记录留在项目里。<br class="desktop-break">让编程 Agent 找到依据，接着往下做。</p><div class="hero-actions"><a class="button primary" href="/zh/install/">开始使用 <span aria-hidden="true">↗</span></a><a class="text-link" href="/zh/docs/">阅读文档 <span aria-hidden="true">→</span></a></div><p class="hero-fine">本地 Markdown · 按需检索 · 多 Agent 共享</p><div class="project-links"><a href="https://www.npmjs.com/package/mini-trellis" data-badge-src="https://img.shields.io/npm/dm/mini-trellis?style=flat-square&amp;logo=npm&amp;logoColor=white&amp;label=downloads&amp;labelColor=173f35&amp;color=28785e">npm · 月下载量 ↗</a><a class="docs-link" href="/zh/docs/"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 5v15M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Z"/></svg>文档 ↗</a><a href="https://www.star-history.com/?repos=Tiger-zzZ%2Fmini-trellis&amp;type=date&amp;legend=top-left">Star History ↗</a></div></div>
  <div class="hero-example"><div class="example-label">使用示例</div><div class="terminal"><div class="terminal-bar"><span class="terminal-dots" aria-hidden="true">● ● ●</span><span>mini-trellis</span><span>~/project</span></div><div class="demo-tabs" role="tablist" aria-label="使用步骤"><button type="button" role="tab" id="step-0" aria-controls="panel-0" aria-selected="false" tabindex="-1">01 记录决定</button><button type="button" role="tab" id="step-1" aria-controls="panel-1" aria-selected="true" tabindex="0">02 查找依据</button><button type="button" role="tab" id="step-2" aria-controls="panel-2" aria-selected="false" tabindex="-1">03 继续开发</button></div><div role="tabpanel" id="panel-0" aria-labelledby="step-0" tabindex="0" hidden><pre><span class="terminal-comment"># 在 Agent 中记录一条已确认的决定</span>
把回调幂等规则更新到已有规范，
使用 mini-trellis-remember 记录主题链接。</pre></div><div role="tabpanel" id="panel-1" aria-labelledby="step-1" tabindex="0"><pre><span class="terminal-comment"># 在新会话中查找来源</span>
<span class="terminal-prompt">$</span> mini-trellis mem recall "回调 幂等"

<span class="terminal-result">[doc]</span> .trellis/spec/backend/callbacks.md
每个回调携带幂等键…
<span class="terminal-comment">ref: &lt;ref-from-recall&gt;</span></pre></div><div role="tabpanel" id="panel-2" aria-labelledby="step-2" tabindex="0" hidden><pre><span class="terminal-comment"># 需要完整条件时展开原文</span>
<span class="terminal-prompt">$</span> mini-trellis mem read "&lt;ref-from-recall&gt;"

依据当前约定修改代码，
验证结果后更新同一篇笔记。</pre></div></div><div class="source-note"><div class="note-path"><span aria-hidden="true">↳</span> .trellis/spec/backend/callbacks.md</div><h2>回调幂等</h2><p>每个回调携带幂等键。重复投递返回第一次的结果。</p><div class="note-footer"><span class="status-dot"></span>项目约定 · 随代码维护</div></div></div>
</section>
<section class="continuity section-wrap"><div class="section-heading"><div><p class="eyebrow">01 / CONTINUITY</p><h2>有用的结论，<br>留在项目中。</h2></div><p>代码会变化，决定也会更新。把当前约定与当时的依据写清楚，后续开发就有资料可循。</p></div><ol class="steps"><li><span class="step-number">01</span><h3>保存</h3><p>更新已有主题，用日志链接这次修改与验证。</p></li><li><span class="step-number">02</span><h3>查找</h3><p>在文档和已支持的本地对话中检索，先读短摘录。</p></li><li><span class="step-number">03</span><h3>更新</h3><p>沿用当前规则，结论变化时修改原文档。</p></li></ol></section>
<section class="repository-section"><div class="section-wrap repository-inner"><div><p class="eyebrow">02 / YOUR REPOSITORY</p><h2>文档在原处，<br>知识在手边。</h2><p>继续维护已有 README、docs 和项目规范。Markdown 可以编辑、审阅，也能通过 Git 分享给团队。</p><a class="text-link" href="/zh/how-it-works/">了解工作原理 →</a></div><div class="repo-tree"><div class="tree-label">~/your-project</div><pre><span class="tree-muted">├──</span> README.md
<span class="tree-muted">├──</span> docs/
<span class="tree-muted">└──</span> .trellis/
    <span class="tree-muted">├──</span> <span class="tree-accent">spec/</span>       <span class="tree-comment">项目约定</span>
    <span class="tree-muted">├──</span> <span class="tree-accent">research/</span>   <span class="tree-comment">调研与依据</span>
    <span class="tree-muted">└──</span> <span class="tree-accent">workspace/</span>  <span class="tree-comment">开发日志</span></pre></div></div></section>
<section class="get-started section-wrap"><div><p class="eyebrow">03 / GET STARTED</p><h2>从一条值得留下的决定开始。</h2><p>安装、记录，再到新会话里找回。</p><a class="text-link" href="/zh/install/">开始使用 →</a></div><div class="install-example"><pre><code>npm install -g mini-trellis
mini-trellis init -u your-name --claude
mini-trellis doctor</code></pre><p>Node.js ≥ 18.17 · Python ≥ 3.9 · Git</p></div></section>
<section class="platforms section-wrap"><h2>在你使用的 Agent 中继续</h2><ul><li>Claude Code</li><li>Codex</li><li>Cursor</li><li>OpenCode</li><li>Pi</li><li>OMP</li><li>Kiro</li><li>DeepSeek Harness</li><li>CodeBuddy</li><li>ZCode</li></ul><a class="text-link" href="/zh/agents/">查看平台能力与配置 →</a></section>
<section class="guides section-wrap"><div class="section-heading compact"><h2>从上手到日常维护</h2><a class="text-link" href="/zh/docs/">完整文档 →</a></div><div class="guide-links"><a href="/zh/install/"><span class="guide-arrow" aria-hidden="true">↗</span><h3>开始使用</h3><p>安装与第一次记录</p></a><a href="/zh/history/"><span class="guide-arrow" aria-hidden="true">↗</span><h3>整理历史</h3><p>从聊天到项目文档</p></a><a href="/zh/commands/"><span class="guide-arrow" aria-hidden="true">↗</span><h3>命令参考</h3><p>参数、技能与配置</p></a><a href="/zh/troubleshooting/"><span class="guide-arrow" aria-hidden="true">↗</span><h3>故障排查</h3><p>从现象找到下一步</p></a></div></section><section class="home-faq section-wrap"><div><p class="eyebrow">FAQ</p><h2>你可能想知道</h2><a class="text-link" href="/zh/faq/">查看全部问题 →</a></div><div><details><summary>已有 README 和 AGENTS.md，还能直接使用吗？<span aria-hidden="true">+</span></summary><p>可以。已有文档继续在原处维护，mini-trellis 为这些资料提供检索入口，并帮助 Agent 更新主题和记录结论。</p></details><details><summary>需要手动保存每次聊天吗？<span aria-hidden="true">+</span></summary><p>保存后续还会用到的决定、调研和修复经验即可。选定历史对话可以用 session-insight 整理成项目文档。</p></details><details><summary>支持哪些本地对话记录？<span aria-hidden="true">+</span></summary><p>v{{ site.data.docs.version }} 读取 Claude Code、Codex、OpenCode V1 和 Pi 的原始历史。其他已接入 Agent 可以使用项目文档，或整理明确提供的文本导出。</p></details><details><summary>从 Trellis 迁移时会保留什么？<span aria-hidden="true">+</span></summary><p>迁移保留 spec、research 和 workspace，将旧任务材料整理到 research。执行前预览计划并备份自定义配置，具体文件处理见迁移指南。</p></details></div></section><section class="benchmark-link section-wrap"><a href="/zh/benchmarks/"><div><h2>实测与方法</h2><p>查看指定版本下的任务耗时、处理 Token 与注入字符测量。</p></div><span aria-hidden="true">↗</span></a></section>
