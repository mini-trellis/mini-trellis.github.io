---
layout: default
title: Upgrade
nav_order: 5
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

For the [v0.3.4](/releases/v0.3.4/) README/docs topic paths and Cursor configuration checks, existing projects need both the new CLI and refreshed project scripts and skills. Review conflicts from locally edited files rather than overwriting them. Then start a new agent session.

`mini-trellis uninstall` removes `.trellis/`, including those notes. Read `mini-trellis uninstall --help` before running it.

A Trellis project should go through [Migrate from Trellis](/migration/) rather than `init` on top of the old files.
