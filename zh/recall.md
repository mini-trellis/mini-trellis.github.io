---
layout: default
title: recall 会返回什么
parent: mini-trellis
nav_order: 8
lang: zh
---

# recall 会返回什么

SessionStart 注入一段短入口：当前日志路径、spec 的 `index.md` 路径、调研主题文件。不列出单篇 spec 文章。不列出 `.trellis/research/archive/`。后面的轮次不再注入。

```bash
mini-trellis mem recall "回调 重试"
```

默认 3 条。每条是短摘录、路径和 `ref`。摘录够了就停。

```bash
mini-trellis mem read "<ref>"
```

`read` 打开这个 ref。笔记被 `superseded` 替换时，它给出现行路径，不贴后继正文。见[笔记怎么写](/zh/writing-notes/#整篇被换掉)。

`mem search` 只查对话。`mem list` 和 `mem context` 停在当前项目，除非加上 `--global` 或 `--cwd`。别的项目的完整 id 不会被拿来用。同一个完整 id 在范围内对上多场会话时，命令不替你选一场。

`--platform` 取 `claude`、`codex`、`opencode`、`pi` 或 `all`。

没有命中就改代码。不用先建任务。

## 自 0.3.2 起

2026-11-01 发布。提示词没有加长。排序变化有召回回归测试。完整边界在 [v0.3.2 说明](/releases/v0.3.2/)。

用户原话如果只是在重复查询，不再把写下规则的笔记挤出默认结果。后面再加「写出路径」这类请求，仍算在重复问题。问题里的 `TASK-4419` 这类编号也仍按提问处理。原话里多出来的事实保留检索资格：没有「确认」二字的纠正、带数字的纠正、中文否决。

正文写了规则的现行笔记，排在标题重复查询的归档任务前面，包括归档正文自己也写了这个主题。第一个标题不算正文。标题下只有 TODO 的现行笔记，不能排到正文写了规则的归档前面。用完整路径或唯一标识仍能找到归档。已声明的 `superseded` 关系没有改。

查询里只有一个共有的普通词，不足以让现行笔记压过归档。单个查询词，包括没有空格的中文词，可以用正文证据判断。

## 按宿主

| 宿主 | 会话开始 | 对话记录 |
| --- | --- | --- |
| Claude Code | SessionStart 注入短入口 | 查 `~/.claude/projects` |
| Codex | 项目 hook。先信任项目和 hook | 本机会话。compact 提示在下一条用户消息时到达 |
| OpenCode | 启动入口 | 本机会话。`--include-children` 合并子代理会话。没有精确 compact 边界 |
| Pi | 启动入口 | 本机会话。没有精确 compact 边界 |
| Cursor 本地 | `sessionStart` 短入口，已在 Cursor 3.27.22 验证 | 不解析 Cursor 对话 |
| Cursor 托管云端 | 不运行 `sessionStart` | 仓库里的技能还在。不解析对话 |
| DeepSeek Harness | 没有项目级 SessionStart。需要笔记时自己跑 `mem recall` | 不解析 `~/.dsh/sessions` 里的压缩转录 |

Codex 的信任步骤在[支持的工具](/zh/agents/)。

## compact 之后

Claude Code 和 Codex 在 compact 之后的提示里带有这场会话的 id。运行它打印的命令：

```bash
mini-trellis mem context <session-id> --platform claude
```

不带查询时，读最近一次压缩边界之前的一段轮次。压缩摘要不进入关键词命中，也不进入相邻摘录。更早的条件用 `--grep "<keyword>"`。

三种失败分开。没有会话 id：提示保持笼统。历史文件还没落盘：命令警告并以 `session not found` 退出（`session-history-missing`）。文件读不了：`session-history-unreadable`。

OpenCode 和 Pi 的启动文本不带当前会话 id。先 `mem list --platform opencode` 或 `--platform pi`，再用列表里的完整 id 跑 `mem context`。
