---
layout: default
title: How it works
parent: mini-trellis
nav_order: 2
---

[中文](/zh/how-it-works/)

# How it works

A session starts with a short entry, about 1.1k characters. Later turns do not get another injection. When a change depends on an older decision, you search. When a session produces a rule or a fix worth keeping, you write it into the existing note and record the session.

## The four places

Take a billing service where repeated callbacks charged twice. After the fix, the rule stays in the repo.

| What | Where | Example | A later session uses it when |
| --- | --- | --- | --- |
| Spec | `.trellis/spec/` | Every callback carries an idempotency key. Read `index.md` first. | The callback handler or its contract changes. |
| Research | `.trellis/research/` | Retry limits, options you rejected, the provider doc. Old topics go under `archive/`. | The provider changes its API and you need the original reason. |
| Journal | `.trellis/workspace/<you>/` | The duplicate charge, the files changed, the test that passed. | A similar report shows up and you want the earlier investigation. |
| Transcripts | the agent's local logs | The discussion, via `mini-trellis mem`. | You need to tell a rejected idea from the decision you kept. |

## What to record

Routine edits just get written. You do not open a task first, and you do not have to run `remember` at the end of every chat.

Run `mem recall` when the rule or the earlier decision is not in front of you. If the excerpt is enough, stop. If it is not, `mem read "<ref>"`. For conversations only, `mem search` and `mem context <session-id>`.

Write a note when a later session would need it. If a file already covers the topic, edit that file. `mini-trellis-update-spec` is how a lasting boundary gets into `spec`. `remember` then links the session from the journal. New installs write the files and do not commit them.

The command sequence for one change is [Day to day](/using/).
