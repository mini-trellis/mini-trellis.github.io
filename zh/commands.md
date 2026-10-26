---
layout: default
title: 命令
parent: mini-trellis
nav_order: 7
lang: zh
---

# 命令

在项目根目录执行。完整参数见 `mini-trellis mem help`。

## 项目

| 命令 | 作用 |
| --- | --- |
| `mini-trellis init -u <name> --claude` | 建立 `.trellis/` 和宿主文件。只用到的工具就写哪个参数。`-y` 跳过提问。`-f` 覆盖。`-s` 跳过已有文件。不提交。 |
| `mini-trellis migrate --dry-run` | 列出 Trellis 迁移计划。不写文件。 |
| `mini-trellis migrate` | 执行迁移。`-y` 把任务文件归档到 `<topic>/legacy/`。 |
| `mini-trellis upgrade` | 更新全局 CLI。`--dry-run` 只打印 npm 命令。`--tag <tag>` 指定 dist-tag 或版本。 |
| `mini-trellis refresh --dry-run` | 预览受管文件更新。可用 `--claude`、`--codex`、`--opencode`、`--pi`、`--dsh`、`--cursor` 限定宿主。 |
| `mini-trellis refresh` | 重写你没有改过的受管文件。 |
| `mini-trellis doctor` | 检查文件和上一次 hook 结果。`--json` 打同一份报告。 |
| `mini-trellis platforms` | 列出本项目初始化过的宿主。`--json` 带路径。 |
| `mini-trellis uninstall --dry-run` | 列出卸载会删什么。 |
| `mini-trellis uninstall` | 删除 `.trellis/`，含约定、调研和日志。`-y` 跳过确认。 |

`doctor` 各项含义在[日常使用](/zh/using/#排障)。

## mem

`recall` 同时查项目 Markdown 和本机对话。下面其余子命令只查对话。`--platform` 取 `claude`、`codex`、`opencode`、`pi` 或 `all`。不带 `--global` 或 `--cwd` 时，list 和 context 停在当前项目。

| 命令 | 作用 |
| --- | --- |
| `mini-trellis mem recall "<query>"` | 文档和对话。默认 3 条。每条有摘录、路径和 `ref`。 |
| `mini-trellis mem read "<ref>"` | 打开从 recall 抄来的 ref。 |
| `mini-trellis mem list` | 本项目的会话。`--since YYYY-MM-DD` 和 `--until YYYY-MM-DD` 限定日期。 |
| `mini-trellis mem search "<keyword>"` | 正文匹配的会话。只查对话。 |
| `mini-trellis mem context <session-id>` | 命中的轮次和相邻轮次。`--grep` 过滤。`--turns` 默认 3，`--around` 默认 1。 |
| `mini-trellis mem extract <session-id>` | 整理后的对话。`--grep` 只留匹配的轮次。 |
| `mini-trellis mem projects` | 项目目录和会话数。把其中一条当作另一个项目的 `--cwd`。 |

`--include-children` 在 `search` 和 `context` 里把 OpenCode 子代理会话并进父会话。这些命令都可以加 `--json`。

## remember

| 宿主 | 怎么记这次会话 |
| --- | --- |
| Claude Code、OpenCode | `/mini-trellis:remember` |
| Codex | `$mini-trellis-remember` |
| Pi | `/mini-trellis-remember` |
| Cursor、DeepSeek Harness | `mini-trellis-remember` |

## 配置

`.trellis/config.yaml` 覆盖默认值。新安装只写文件，不提交。

| 键 | 默认 | 含义 |
| --- | --- | --- |
| `session_auto_commit` | `false` | `true` 时，`add_session.py` 之后提交日志。 |
| `session_commit_message` | `[mini-trellis] journal` | 自动提交时用的说明。 |
| `max_journal_lines` | `2000` | 日志超过这个行数就换下一个文件。 |
| `packages` | 不设置 | 可选。SessionStart 可以按包路径过滤 spec index。 |
| `default_package` | 不设置 | 一条路径对上多个包时用哪一个。 |
