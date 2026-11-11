#!/usr/bin/env python3
"""Check a Jekyll build for local link/asset targets, fragments, and duplicate IDs."""
import argparse
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.duplicates = []
        self.links = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            if attrs['id'] in self.ids:
                self.duplicates.append(attrs['id'])
            self.ids.add(attrs['id'])
        for key in ('href', 'src'):
            if attrs.get(key):
                self.links.append(attrs[key])

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('directory', type=Path, nargs='?', default=Path('_site'))
    args = parser.parse_args()
    root = args.directory.resolve()
    if not (root / 'index.html').is_file():
        parser.error('Build directory must contain index.html')
    pages = {}
    for file in root.rglob('*.html'):
        page = Page()
        page.feed(file.read_text())
        pages[file] = page
    errors = []
    count = 0
    for file, page in pages.items():
        for duplicate in page.duplicates:
            errors.append(f'{file.relative_to(root)}: duplicate id #{duplicate}')
        for href in page.links:
            count += 1
            url = urlsplit(href)
            if url.scheme or url.netloc:
                continue
            path = unquote(url.path)
            dest = root / path.lstrip('/') if path.startswith('/') else file.parent / path
            if not path:
                dest = file
            dest = dest.resolve()
            if not dest.is_relative_to(root):
                errors.append(f'{file.relative_to(root)}: escapes build: {href}')
                continue
            if dest.is_dir():
                dest /= 'index.html'
            if not dest.is_file():
                errors.append(f'{file.relative_to(root)}: missing target {href}')
            elif url.fragment and dest in pages and unquote(url.fragment) not in pages[dest].ids:
                errors.append(f'{file.relative_to(root)}: missing fragment {href}')
    index = json.loads((root / 'search.json').read_text())
    for item in index:
        path = root / item['url'].lstrip('/') / 'index.html'
        if path not in pages or item['lang'] not in ('en', 'zh'):
            errors.append(f'Invalid search entry: {item["url"]}')
    for error in errors:
        print(error)
    print(f'{len(pages)} pages, {count} links/assets, {len(index)} search entries, {len(errors)} errors')
    return bool(errors)

if __name__ == '__main__':
    raise SystemExit(main())
