---
layout: default
title: Agents
nav_order: 4
lang: en
---
# Agents

Pass one flag or several (`mini-trellis init -u your-name --claude --cursor`):

| Agent | Init flag | Record a session | Knowledge & history support |
| --- | --- | --- | --- |
| **Claude Code** | `--claude` | `/mini-trellis:remember` | `SessionStart` injects the short entry; searches project docs and `~/.claude/projects` history |
| **Cursor** | `--cursor` | `mini-trellis-remember` | Installs `.cursor/skills/` and a local `sessionStart` entry, verified on Cursor 3.27.22. Uses `AGENTS.md` and `mem recall` for project knowledge. Cursor-managed cloud agents do not run `sessionStart`. Conversation history is not parsed |
| **Codex** | `--codex` | `$mini-trellis-remember` | Project hook injection and local session history search |
| **OpenCode** | `--opencode` | `/mini-trellis:remember` | V2 by default; existing V1 projects preserved. Project knowledge recall; local conversation search for V1 |
| **Pi** | `--pi` | `/mini-trellis-remember` | Startup entry and local session search |
| **DeepSeek Harness** | `--dsh` | `mini-trellis-remember` | Installs `.dsh/skills/`; no project `SessionStart` hook—the model calls `mem recall` / `mem read` when needed |
| **CodeBuddy CLI / IDE** | `--codebuddy` | `mini-trellis-remember`; CLI also `/mini-trellis:remember` | Shared project settings, skills and startup entry; project knowledge recall |

<details>
<summary><strong>Codex trust setup &amp; host-specific boundaries</strong></summary>

- **Codex first-time setup**:
  1. Run `codex` in the project and review the project trust prompt. If project-local configuration is disabled, trust the resolved project path in `~/.codex/config.toml`.
  2. Open `/hooks` to review and approve the project hook (`untrusted` hooks stay inactive).
  3. If required by your Codex version, set `hooks = true` under `[features]` in the user config.
  4. Run `mini-trellis doctor`, then start a new session.
- **Host boundaries**:
  - DeepSeek Harness has no project-level `SessionStart` hook and does not parse compressed transcripts in `~/.dsh/sessions`;
  - Cursor's generated local `sessionStart` entry is verified on Cursor 3.27.22. A successful hook log alone does not prove model delivery or use. Use `AGENTS.md`, the `mini-trellis-remember` skill, and `mini-trellis mem recall`. Cursor-managed cloud agents do not run `sessionStart`; self-hosted machines remain unverified. Cursor conversation history is not parsed;
  - OpenCode V1 and Pi support session listing and search without precise compact boundary recovery. See the [v0.3.1 release notes](/releases/v0.3.1/).

</details>

---
