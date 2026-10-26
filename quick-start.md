---
layout: default
title: "Quick start"
nav_order: 3
---
[中文](/zh/quick-start/)

Requires **Node.js ≥ 18.17**, **Python ≥ 3.9**, and Git.

### 1. Install and initialize

Run in your project root:

```bash
npm install -g mini-trellis
mini-trellis init -u your-name --claude
```

Choose or combine flags for the agents you use (`--claude`, `--cursor`, `--codex`, `--opencode`, `--pi`, `--dsh`). You can also hand this prompt directly to your agent to install or migrate from Trellis:

```text
Install or migrate mini-trellis in this project. If the command is missing, run npm install -g mini-trellis first.
If this project has legacy workflow files (for example .trellis/workflow.md, .trellis/scripts/task.py, or inject-*.py), run mini-trellis migrate --dry-run, show me the plan, and run mini-trellis migrate -y after I confirm.
If this is a new project, run mini-trellis init -u <name> -y with only the tools I actually use (--claude, --codex, --opencode, --pi, --dsh, --cursor).
Then run mini-trellis doctor and report the result. Do not delete .trellis/spec, .trellis/research, or .trellis/workspace.
```

### 2. Record a decision worth keeping

Start a new agent session. For routine edits, just write code. Once you reach a decision or root-cause fix that a future session should know about, ask the agent to save it and run its `remember` command (for example `/mini-trellis:remember` in Claude Code):

```text
Confirmed: every callback must carry an idempotency key, and transient failures retry up to 4 attempts total (upstream confirmed idempotency).
Update the relevant spec or research note, then run remember for this session.
```

The agent updates `.trellis/spec/` or `.trellis/research/` and writes a short entry in `.trellis/workspace/<you>/` linking to that note.

### 3. Recall it in a later session

When a later session touches that area—or when you want to check prior reasoning from the terminal—run `recall` to search project Markdown and local conversation history together:

```bash
mini-trellis mem recall "callback retries"
```

`recall` returns short excerpts, source paths, and `<ref>` handles generated for your project:

```text
[doc] .trellis/spec/backend/callback-retries.md:1  § Callback retries  strong
  ref: <ref-from-recall>
  Transient failures retry up to 4 attempts total (including the initial attempt) after upstream confirmed idempotency; permanent failures run once.

[session] claude:a8f2c104  strong
  ref: <ref-from-recall>
  Updated transient callback max_attempts from 2 to 4 after upstream confirmed idempotency guarantees.
```

**Usually the short excerpt is enough to proceed.** Only when you need the full section or original conversation turns, copy the `<ref>` printed by `recall` into `read`:

```bash
mini-trellis mem read "<ref>"
```

---
