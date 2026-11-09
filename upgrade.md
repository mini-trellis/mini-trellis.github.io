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

After upgrading, refresh project scripts and skills. Existing OpenCode V1 projects keep their entry. To switch to V2, run `mini-trellis refresh --opencode --opencode-version 2 --dry-run`, review the changes, then repeat without `--dry-run`. Add CodeBuddy with `mini-trellis init --codebuddy -y`.

[v0.3.7](/releases/v0.3.7/) adds ZCode and improves multibyte and partial-history reading. Add ZCode to an existing project with `mini-trellis init --zcode -y`, review and trust the project hook in the host, then start a new session. Use [history organizing](/using/#turn-selected-chats-into-project-knowledge) to turn selected sessions and text exports into project docs.

`mini-trellis uninstall` removes `.trellis/`, including those notes. Read `mini-trellis uninstall --help` before running it.

A Trellis project should go through [Migrate from Trellis](/migration/) rather than `init` on top of the old files.
