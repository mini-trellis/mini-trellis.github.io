---
layout: default
title: Commands
nav_order: 2
lang: en
---

# Commands

Run these from the project root. `mini-trellis mem help` prints the full flag list.

## Project

| Command | Effect |
| --- | --- |
| `mini-trellis init -u <name> --claude` | Create `.trellis/` and the host files. Add only the tools you use. `-y` skips prompts. `-f` overwrites. `-s` skips existing files. Does not commit. |
| `mini-trellis migrate --dry-run` | Show the Trellis migration plan. Does not write. |
| `mini-trellis migrate` | Apply it. `-y` archives task files under `<topic>/legacy/`. |
| `mini-trellis upgrade` | Update the global CLI. `--dry-run` prints the npm command. `--tag <tag>` picks a dist-tag or version. |
| `mini-trellis refresh --dry-run` | Preview managed-file updates. Pass `--claude`, `--codex`, `--opencode`, `--pi`, `--dsh`, or `--cursor` to limit the host. |
| `mini-trellis refresh` | Rewrite managed files you have not edited. |
| `mini-trellis doctor` | Check files and the last hook result. `--json` prints the same report. |
| `mini-trellis platforms` | List hosts initialized in this project. `--json` for the paths. |
| `mini-trellis uninstall --dry-run` | List what uninstall would remove. |
| `mini-trellis uninstall` | Remove `.trellis/`, including spec, research, and journals. `-y` skips the prompt. |

Doctor checks are listed on [Day to day](/using/#when-something-looks-wrong).

## mem

`recall` searches project Markdown and local transcripts. The others below are transcript commands. `--platform` is `claude`, `codex`, `opencode`, `pi`, or `all`. List and context stay in this project unless you pass `--global` or `--cwd`.

| Command | Effect |
| --- | --- |
| `mini-trellis mem recall "<query>"` | Docs and dialogue. Default 3 hits. Each hit has an excerpt, a path, and a `ref`. |
| `mini-trellis mem read "<ref>"` | Open refs copied from recall. |
| `mini-trellis mem list` | Sessions for this project. `--since YYYY-MM-DD` and `--until YYYY-MM-DD` bound the dates. |
| `mini-trellis mem search "<keyword>"` | Sessions whose text matches. Dialogue only. |
| `mini-trellis mem context <session-id>` | Hit turns and neighbors. `--grep` filters turns. `--turns` defaults to 3, `--around` to 1. |
| `mini-trellis mem extract <session-id>` | Cleaned dialogue. `--grep` keeps matching turns. |
| `mini-trellis mem projects` | Project directories and session counts. Use one as `--cwd` for another project. |

`--include-children` merges OpenCode sub-agent sessions into the parent for `search` and `context`. `--json` is available on these commands.

## remember

| Host | How you record the session |
| --- | --- |
| Claude Code, OpenCode | `/mini-trellis:remember` |
| Codex | `$mini-trellis-remember` |
| Pi | `/mini-trellis-remember` |
| Cursor, DeepSeek Harness | `mini-trellis-remember` |

## Config

`.trellis/config.yaml` overrides defaults. New installs write files and do not commit them.

| Key | Default | Meaning |
| --- | --- | --- |
| `session_auto_commit` | `false` | `true` commits the journal after `add_session.py`. |
| `session_commit_message` | `[mini-trellis] journal` | Message used when auto-commit is on. |
| `max_journal_lines` | `2000` | Rotate to the next journal file after this many lines. |
| `packages` | unset | Optional. SessionStart can filter spec indexes by package path. |
| `default_package` | unset | Package used when a path matches more than one. |
