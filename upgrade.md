---
layout: default
title: Upgrade
nav_order: 3
lang: en
---
# Upgrade

Back up `.trellis/`, `AGENTS.md`, and the configured agent directories before refreshing, including files Git ignores.

```bash
mini-trellis upgrade
mini-trellis refresh --dry-run
mini-trellis refresh
mini-trellis doctor
```

`upgrade` updates the global CLI. `refresh` rewrites managed files you have not edited, and leaves spec, research, and journals in place. `platforms` lists the tools this project was initialized for.

`mini-trellis uninstall` removes `.trellis/`, including those notes. Read `mini-trellis uninstall --help` before running it.

A Trellis project should go through [Migrate from Trellis](/migration/) rather than `init` on top of the old files.
