---
layout: default
title: Upgrade
nav_order: 5
lang: en
---
# Upgrade and refresh

With npm, update the CLI and then refresh this project:

```bash
npm install -g mini-trellis@latest
mini-trellis refresh
```

From mini-trellis 0.3.8 onward, `mini-trellis upgrade` performs both steps for the current initialized project. An upgrade started by 0.3.7 or earlier still needs the manual refresh afterward.

Normal updates to recorded templates run directly. When local edits or missing previous-version records cause a content conflict, refresh lists the files and asks once `[y/N]`. Enter `Y` to replace the listed files and complete the update. `N`, Enter or EOF leaves the project unchanged. Shared JSON settings are merged, `AGENTS.md` keeps instructions outside the managed block, and project knowledge stays in place. A missing or damaged manifest can be rebuilt through the same confirmation.

`refresh --dry-run` previews the changes. For replacements requiring confirmation, `--json` and non-interactive runs report the affected files and return exit code 1; run `mini-trellis refresh` in a terminal to confirm and complete those replacements. Updates without content conflicts complete directly.


[v0.3.8 release notes](/releases/v0.3.8/). Start a new agent session after refreshing. Run `mini-trellis refresh` separately in other projects.
