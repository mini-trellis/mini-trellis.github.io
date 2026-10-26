---
layout: default
title: What recall returns
nav_order: 3
lang: en
---

# What recall returns

SessionStart injects a short entry: the active journal path, the spec `index.md` paths, and the research topic files. It does not list individual spec articles. It does not list `.trellis/research/archive/`. Later turns receive no further injection.

```bash
mini-trellis mem recall "callback retries"
```

The default is 3 hits. Each hit is a short excerpt, a path, and a `ref`. When the excerpt is enough, stop there.

```bash
mini-trellis mem read "<ref>"
```

`read` opens that ref. On a superseded note it names the current path and does not paste the successor. See [Writing notes](/writing-notes/#when-the-whole-note-is-replaced).

`mem search` searches conversations only. `mem list` and `mem context` stay in this project unless you pass `--global` or `--cwd`. A full id from another project is not used. If the same full id matches more than one session in scope, the command does not pick one.

`--platform` is `claude`, `codex`, `opencode`, `pi`, or `all`.

If nothing matches, change the code. You do not create a task first.

## By host

| Host | At session start | Transcripts |
| --- | --- | --- |
| Claude Code | SessionStart injects the short entry | Searches `~/.claude/projects` |
| Codex | Project hook, after you trust the project and the hook | Local sessions. The compact hint arrives on the next user message |
| OpenCode | Startup entry | Local sessions. `--include-children` merges sub-agent sessions. No precise compact boundary |
| Pi | Startup entry | Local sessions. No precise compact boundary |
| Cursor, local | `sessionStart` injects the short entry | Cursor conversation history is not parsed |
| Cursor, cloud | The hook does not run | Repo skills are present. History is not parsed |
| DeepSeek Harness | No project SessionStart. Call `mem recall` when you need the notes | Compressed transcripts in `~/.dsh/sessions` are not parsed |

Codex trust steps are on [Agents](/agents/).

## After compact

On Claude Code and Codex, the hint after compact names the session id. Run the command it prints:

```bash
mini-trellis mem context <session-id> --platform claude
```

With no query, that reads a bounded window of turns before the latest compaction boundary. Compaction summaries are left out of keyword hits and neighboring excerpts. `--grep "<keyword>"` finds an older condition.

Three failures stay separate. No session id: the hint stays generic. The history file is not on disk yet: the command warns and exits `session not found` (`session-history-missing`). The file cannot be read: `session-history-unreadable`.

OpenCode and Pi do not name the current session id at startup. Use `mem list --platform opencode` or `--platform pi`, then `mem context` with the full id from that list.
