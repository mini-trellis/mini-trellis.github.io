# mini-trellis documentation website

Bilingual homepage and documentation for [mini-trellis](https://github.com/Tiger-zzZ/mini-trellis), built with Jekyll 3.10.0 and hosted on [GitHub Pages](https://mini-trellis.github.io/). The site uses local layouts, CSS, and JavaScript; it has no remote theme or external font dependency.

## Content ownership

- **Guides and contribution pages:** edit the paired Markdown files in the main mini-trellis repository. Generated pages identify their original file with `source_path`.
- **Homepage and presentation:** edit `index.md`, `zh/index.md`, `_layouts/`, and `assets/site.*` here.
- **Historical releases:** maintain the versioned pages in `releases/` and `zh/releases/`. Keep measurements tied to their tested version.
- **Navigation and version:** generated into `_data/` by the synchronization command.
- **Brand assets:** maintain `docs/assets/logo.svg` and `wordmark-*.svg` in the main repository. The synchronization command copies them here and uses the same logo for `assets/favicon.svg`.

From the main repository, synchronize an explicit website checkout:

```bash
python3 scripts/sync-docs-site.py --site /path/to/mini-trellis.github.io
python3 scripts/sync-docs-site.py --site /path/to/mini-trellis.github.io --check
```

The command writes known guide and asset paths. It does not delete files, invoke Git, or publish.

## Build and preview

With Ruby and Bundler installed, use the versions in `Gemfile.lock`:

```bash
bundle install --path vendor/bundle
bundle exec jekyll build
python3 scripts/check-site.py
bundle exec jekyll serve --host 127.0.0.1
```

Python 3.9+ is used for the source-sync and link checks. Open the localhost URL printed by Jekyll. Deployment continues to use the existing GitHub Pages repository configuration.

## Verify a change

- Check source synchronization from the main repository.
- Build the site and run `scripts/check-site.py`: local links, assets, fragments, duplicate IDs, and the search index.
- Review one homepage and one document in desktop and mobile viewports.
- Check both languages, search results, code copy, example tabs, keyboard interaction, and the mobile documentation menu.
- Run `git diff --check` in both repositories.

Search reads the generated `search.json` and filters by the current language. Core content and navigation remain available without JavaScript. Existing guide URLs are retained; historical section links in the day-to-day guide lead to their new reference pages.

The homepage loads its npm download badge from Shields.io. If the image is unavailable or JavaScript is disabled, the npm link remains readable. Star History links to the interactive service; the site does not embed access tokens.

[Maintenance and release workflow](https://github.com/Tiger-zzZ/mini-trellis/blob/main/docs/maintenance-workflow.md).
