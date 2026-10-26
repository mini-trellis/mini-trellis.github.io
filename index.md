---
layout: default
title: "Home"
nav_order: 1
---
Cross-session memory for AI coding agents, without a phase-gated workflow.

[中文](/zh/)

Keep architectural conventions, research conclusions, and verified fixes in plain Markdown, and search local agent conversations in place.

- **Carry decisions across sessions.** Interface contracts (`spec`), technical investigations (`research`), and session journals (`workspace`) stay in the repository.
- **Look up docs and past chats together.** `mini-trellis mem recall` returns a short excerpt first. Open the full note with `mem read` only when the excerpt is not enough.
- **Local-first.** No vector database, no embedding API, and no background daemon.

```bash
npm install -g mini-trellis
mini-trellis init -u your-name --claude
```

Node.js ≥ 18.17, Python ≥ 3.9, and Git are required.

On Claude Code, with the same project, the same knowledge base, and the same model, mini-trellis v0.3.1 used **38.4% less wall time** and **40.1% fewer processed tokens** than Trellis v0.7.0-beta.4. The setup and per-task numbers are in the [v0.3.1 notes](/releases/v0.3.1/).

![Conventions, research and verified fixes accumulate in project Markdown.](/assets/knowledge-en.svg)

## Read next

- [Why mini-trellis](/why/)
- [Quick start](/quick-start/)
- [During a change](/using/)
- [What to keep](/memory/)
- [Supported agents](/agents/)
- [Migrate from Trellis](/migration/)
