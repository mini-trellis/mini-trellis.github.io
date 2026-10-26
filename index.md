---
layout: default
title: mini-trellis
nav_order: 1
has_children: true
permalink: /
lang: en
---
# mini-trellis

mini-trellis stores the conventions, research, and session notes you want a later coding session to find. Those files are Markdown in the repo. `mem recall` searches them together with the agent transcripts already on this machine.

```bash
npm install -g mini-trellis
mini-trellis init -u your-name --claude
```

Node.js ≥ 18.17, Python ≥ 3.9, and Git. Flags and the first `doctor` run are on [Install](/install/). What to write down after that is [Day to day](/using/).

![Conventions, research, and verified fixes stay in project Markdown and get reused later.](/assets/knowledge-en.svg)

## Where a note goes

| | Path | Put it here when |
| --- | --- | --- |
| Spec | `.trellis/spec/` | A later change should still follow this rule. Read that directory's `index.md` first. |
| Research | `.trellis/research/` | You checked something, including an approach you dropped. Old topics can move under `archive/`. |
| Journal | `.trellis/workspace/<you>/` | You want the files touched in this session, and whether the check passed. |
| Transcripts | the agent's local session store | You need the conversation itself. `mem recall` reads it where it already is. |

mini-trellis does not create a task directory and does not advance a phase list. Planning, editing, and review stay with you.

## Compared with other ways of keeping context

| | `CLAUDE.md` by hand | Vector DB / RAG memory | Phase-gated workflow (Trellis) | mini-trellis |
| --- | --- | --- | --- | --- |
| Startup and each turn | The file grows and is loaded every session | Depends on the plugin; indexing and network add latency | ~8.6k characters at startup, plus per-turn state, plus sub-agent re-injection | ~1.1k characters at startup, nothing on later turns |
| How a spec is loaded | The whole file, relevant or not | Similarity chunks; an exact constraint is easy to miss | Sub-agents re-read specs from a cold start | `mem recall` returns an excerpt; `mem read` opens the rest |
| Past chats | Gone when the window closes | Chats have to be copied into the store | Task-directory artifacts | Claude, Codex, OpenCode, and Pi sessions are searched in place |
| When a rule changes | Edit by hand; old lines tend to stay | Old and new decisions sit in the same index | Notes are spread across archived task folders | A `superseded` note points at the current one, and recall prefers the current one |
| What you run | A file, no search | A database, embeddings, and API keys | Phase gates and sub-agent templates | Git Markdown and a small CLI |

## One measured comparison

On Claude Code 2.1.306, the same project, the same `.trellis` knowledge, and the same model, mini-trellis v0.3.1 against Trellis v0.7.0-beta.4: across 6 tasks × 3 runs, total wall time was 38.4% lower and processed tokens were 40.1% lower. Processed tokens include cache reads. The task list is in the [v0.3.1 notes](/releases/v0.3.1/).
