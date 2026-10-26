---
layout: default
title: Writing notes
parent: mini-trellis
nav_order: 4
lang: en
---

# Writing notes

Write a note when a later session would do the wrong thing without it. If a file already covers the topic, edit that file.

## Spec

`.trellis/spec/` holds a rule that should still hold next time. Keep it short. Each directory has an `index.md`. SessionStart lists those index files. Link the article from the index.

```markdown
# Callbacks

Every callback carries an idempotency key. A repeat returns the first result.
```

The spec states the boundary. The search that led there belongs in research.

## Research

`.trellis/research/<topic>.md` is one topic. `README.md` in that directory is not a topic.

Write the conclusion, the conditions, and the document you checked. A rejected approach stays in the same file, labeled rejected.

```markdown
# Provider retries

The provider allows at most two retries, and only after the callback is idempotent.
Source: provider callback docs, 2026-04-02.

Rejected: deduplicating before the ledger. That made reconciliation wrong.
```

When the topic is finished or stale, move it with `git mv` to `.trellis/research/archive/`. SessionStart does not list `archive/`.

Promote a research conclusion into `.trellis/spec/` only when the boundary should still hold, then link it from the matching `index.md`.

## Journal

`.trellis/workspace/<you>/` records the session: what changed, and the path of the spec or research note. The rule stays in spec or research.

`remember` writes that journal entry. A new install does not commit it. Auto-commit is `session_auto_commit` in [config](/commands/#config).

## When the whole note is replaced

Edit the section when only that section changed. When a new note replaces the old one, leave the old file in place:

```markdown
---
status: superseded
superseded_by: .trellis/research/new-topic.md
---
```

`superseded_by` is a path from the repository root. Recall follows a short chain and can show a short excerpt of the current note. `mem read` names that path and does not paste the successor. A missing target, a path outside the project, a self pointer, a cycle, or a chain that is too long is reported, and the old note is not treated as the current rule. A newer file time does not by itself mark a note historical.

The command list is on [Commands](/commands/). What a search returns is on [What recall returns](/recall/).
