---
layout: default
title: "Why mini-trellis"
nav_order: 2
---
[中文](/zh/why/)

| Dimension | Hand-maintained `CLAUDE.md` | Vector DB / RAG Memory MCP | Phase-Gated Workflow (Trellis) | **mini-trellis** |
| --- | --- | --- | --- | --- |
| **Startup & per-turn injection** | Grows unbounded; loaded into every session | Plugin-dependent; extra indexing & network latency | ~8.6k chars at startup + per-turn state + sub-agent re-injection | **~1.1k chars at startup; 0 per-turn injection** |
| **How specs & notes are loaded** | Always in context, even when irrelevant | Opaque similarity chunks; easy to miss exact contracts | Cold-start sub-agents re-read specs repeatedly | **On-demand `mem recall` excerpts; `mem read` only when needed** |
| **Past conversation lookup** | None—lost when the chat closes | Requires syncing chats into an external store | Relies on manual task directory artifacts | **Searches local Claude / Codex / OpenCode / Pi sessions in place** |
| **Knowledge evolution** | Manual pruning; stale rules linger | Old and updated decisions collide in vector space | Scattered across archived task folders | **Built-in `superseded` lineage lifts current rules above old ones** |
| **Infrastructure & ceremony** | Plain file, no search | Database, embeddings, and service config | Mandatory phase gates and sub-agent templates | **Plain Git-friendly Markdown + lightweight CLI; no forced workflow** |

---
