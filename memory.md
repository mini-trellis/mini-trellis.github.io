---
layout: default
title: "What to keep"
nav_order: 5
---
[中文](/zh/memory/)

Consider a billing service where repeated callbacks caused duplicate charges. Once fixed, the rule and its rationale stay in the project for future sessions:

| What to keep | Location | Example | When a future session uses it |
| --- | --- | --- | --- |
| **Project conventions (`spec`)** | `.trellis/spec/` | Every callback must carry an idempotency key (read `index.md` first) | Before changing the callback handler or boundary contract |
| **Research & evidence (`research`)** | `.trellis/research/` | Retry conditions, alternatives considered, and provider docs (archive old topics under `archive/`) | When the provider changes its API and you need the original rationale |
| **Development notes (`workspace`)** | `.trellis/workspace/<you>/` | Root cause of the duplicate charge, files changed, and verifying tests | When a similar bug report arrives and you want the prior investigation |
| **Local chat history (`mem`)** | Agent's local session store | Original discussion turns, searched in place with `mini-trellis mem` | When distinguishing a rejected proposal from the final agreed decision |

### On-demand, not a mandatory ceremony

- **Just code for routine changes.** You do not create a task before editing, and you do not have to run `remember` at the end of every chat.
- **Look up only when context is missing.** Run `mem recall` when touching unfamiliar rules or prior decisions; stop at the excerpt if it answers your question, and run `mem read "<ref>"` only when you need the full text. For conversation-only search, use `mem search` and `mem context <session-id>`.
- **Record only what future sessions need.** Update an existing topic note when rules evolve, promote lasting boundaries with `mini-trellis-update-spec`, and run `remember` when a session produced a reusable conclusion. New installations write files without auto-committing to Git.

> Walk through a concrete change in [During a change](/using/).

---
