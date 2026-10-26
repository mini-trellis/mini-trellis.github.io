---
layout: default
title: "Upgrade and uninstall"
nav_order: 8
---
[中文](/zh/upgrade/)

Existing `Trellis` projects can be converted in place with `migrate` (both tools share `.trellis/`, so migrate rather than installing both side by side):

```bash
mini-trellis migrate --dry-run   # Preview the migration plan
mini-trellis migrate             # Apply after confirmation
```

- **Retains existing knowledge**: Keeps `.trellis/spec/`, `.trellis/research/`, and `.trellis/workspace/` journals intact.
- **Folds task directories cleanly**: Moves task research into `.trellis/research/`, archives other task artifacts under `legacy/` by default, and replaces Trellis workflow files and scripts with `mini-trellis`.

<details>
<summary><strong>Upgrading (`upgrade` / `refresh`) &amp; uninstalling</strong></summary>

Back up `.trellis/`, `AGENTS.md`, and configured agent directories (including Git-ignored files) before migrating or refreshing:

```bash
mini-trellis upgrade             # Update the global CLI
mini-trellis refresh --dry-run   # Preview managed asset updates
mini-trellis refresh             # Update unmodified managed files while preserving knowledge
mini-trellis doctor              # Check installation status
```

- Inspect configured tools with `mini-trellis platforms`.
- Before running `mini-trellis uninstall`, check `mini-trellis uninstall --help`: uninstall removes `.trellis/`, including knowledge files. See the [migration guide](/migration/) for path mappings and conflict handling.

</details>

---
