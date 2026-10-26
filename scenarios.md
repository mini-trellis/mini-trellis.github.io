---
layout: default
title: Scenarios
parent: mini-trellis
nav_order: 5
lang: en
---

# Scenarios

Each one is a situation, a prompt you can hand to the agent, and what done looks like. The mechanisms are on [Day to day](/using/) and [Writing notes](/writing-notes/).

## 1. Empty repository

Nothing under `.trellis/` yet. You use Claude Code.

```text
Run mini-trellis init -u <name> -y --claude.
Then mini-trellis doctor.
Do not commit.
```

Done: `.trellis/spec/`, `research/`, and `workspace/<name>/` exist. Doctor does not report `memory-layer` or `instructions`. No git commit was created.

## 2. A Trellis project

The repo already has Trellis workflow files, and the spec and journals should stay.

```text
Run mini-trellis migrate --dry-run and show me the plan.
After I confirm, run mini-trellis migrate -y.
Do not delete .trellis/spec, .trellis/research, or .trellis/workspace.
```

Done: the dry-run was shown before any write. Spec, research, and workspace are still there. `.trellis/tasks/` has been folded into research. Doctor does not report `legacy-trellis`. Details are on [Migrate from Trellis](/migration/).

## 3. A bug that will happen again

Repeated callbacks charged twice. The fix is in, and the next session must not drop the idempotency key.

```text
Confirmed: every callback carries an idempotency key, and a repeat returns the first result.
Deduplicating before the ledger was tried and broke reconciliation. Label that rejected.
Update the existing spec, add the provider doc link to the research note, then run remember.
```

Done: the rule is in the existing spec, linked from that directory's `index.md`. The rejected approach is in the research note, not in the spec. The journal links to those paths. `mini-trellis mem recall "idempotency key"` returns the spec excerpt.

## 4. After compact

Claude Code compacted the session. The hint printed a session id, and you still need the limit that was stated before compact.

```text
Run the mem context command from the compact hint, with --platform claude.
Then mem recall for the project note. Do not paste a compaction summary as the rule.
```

Done: `mem context` shows turns from before the latest compaction boundary. The rule you keep comes from the spec or research hit, not from the compaction summary. If the history file is not on disk yet, the command exits `session not found` and you use the project note only.
