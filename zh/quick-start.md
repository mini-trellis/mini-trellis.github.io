---
layout: default
title: "快速开始"
nav_order: 3
parent: "中文"
---
[English](/quick-start/)

需要 **Node.js ≥ 18.17**、**Python ≥ 3.9** 与 Git。

### 1. 安装与初始化

在项目根目录执行：

```bash
npm install -g mini-trellis
mini-trellis init -u your-name --claude
```

按你实际使用的工具选择或组合参数（`--claude`、`--cursor`、`--codex`、`--opencode`、`--pi`、`--dsh`）。也可以直接把下面这段话发给正在使用的 Agent，让它完成安装或从 Trellis 迁移：

```text
请在当前项目安装或迁移 mini-trellis。若还没有命令，先执行 npm install -g mini-trellis。
如果项目里已有旧版工作流文件（例如 .trellis/workflow.md、.trellis/scripts/task.py，或 inject-*.py），先运行 mini-trellis migrate --dry-run，把计划给我看，确认后再执行 mini-trellis migrate -y。
如果是新项目，运行 mini-trellis init -u <name> -y，并只加上我实际使用的工具参数（--claude、--codex、--opencode、--pi、--dsh、--cursor）。
最后运行 mini-trellis doctor，并说明结果。不要删除 .trellis/spec、.trellis/research 或 .trellis/workspace。
```

### 2. 记录一条决定

开启新的 Agent 会话。日常写代码不需要额外操作；当你在开发中确认了一条后续会话还要用到的规则或排查结论时，让 Agent 保存并执行它的 `remember` 命令（例如在 Claude Code 中执行 `/mini-trellis:remember`）：

```text
这次确认：回调必须携带幂等键，transient 失败最多尝试 4 次（上游已确认幂等保障）。
请更新对应的规范或研究笔记，然后执行 remember 记录本次会话。
```

Agent 会把规则写入 `.trellis/spec/` 或 `.trellis/research/`，并在 `.trellis/workspace/<你>/` 的开发日志里留下简短记录与文件链接。

### 3. 在后续会话按需找回

下次新开会话改到相关模块、或者你想在终端查证当时的决定时，用 `recall` 同时检索项目 Markdown 和本地对话历史：

```bash
mini-trellis mem recall "回调 重试"
```

`recall` 会返回几条短摘录、来源路径以及对应的 `<ref>` 标识：

```text
[doc] .trellis/spec/backend/callback-retries.md:1  § 回调重试规则  strong
  ref: <ref-from-recall>
  transient 失败总共最多尝试 4 次（含首次），上游已确认幂等保障；permanent 失败只尝试 1 次。

[session] claude:a8f2c104  strong
  ref: <ref-from-recall>
  确认把 transient 回调总尝试次数改为 4 次，保留变更原因：上游已经确认幂等保障。
```

**多数时候看短摘录就够直接改代码了**。只有当摘录不够、需要查看完整段落或当时对话的上下文时，才把上面输出里的真实 `<ref>` 复制给 `read`：

```bash
mini-trellis mem read "<ref>"
```

---
