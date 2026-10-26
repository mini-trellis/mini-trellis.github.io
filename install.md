---
layout: default
title: Install
parent: mini-trellis
nav_order: 1
---

[中文](/zh/install/)

# Install

```bash
npm install -g mini-trellis
```

Node.js ≥ 18.17, Python ≥ 3.9, and Git.

From the project root, name yourself and pass the tools you use. `your-name` is the directory under `.trellis/workspace/`.

```bash
mini-trellis init -u your-name --claude
```

Flags: `--claude`, `--cursor`, `--codex`, `--opencode`, `--pi`, `--dsh`. Combine them when you use more than one. `-y` skips the prompts. Init writes `.trellis/` and the host files. It does not create a Git commit.

```bash
mini-trellis doctor
```

Doctor reports the files and the last hook result it can see. A passing doctor does not mean the model followed the notes.

You can hand the install to the agent:

```text
Install or migrate mini-trellis in this project. If the command is missing, run npm install -g mini-trellis first.
If this project has legacy workflow files (for example .trellis/workflow.md, .trellis/scripts/task.py, or inject-*.py), run mini-trellis migrate --dry-run, show me the plan, and run mini-trellis migrate -y after I confirm.
If this is a new project, run mini-trellis init -u <name> -y with only the tools I actually use (--claude, --codex, --opencode, --pi, --dsh, --cursor).
Then run mini-trellis doctor and report the result. Do not delete .trellis/spec, .trellis/research, or .trellis/workspace.
```

A project that already has Trellis should use [Migrate from Trellis](/migration/), not a second install beside it. After init, [Day to day](/using/) covers recall, what to write down, and compact.
