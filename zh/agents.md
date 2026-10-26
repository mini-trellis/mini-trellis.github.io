---
layout: default
title: 支持的工具
nav_order: 9
parent: mini-trellis
lang: zh
---
# 支持的工具

支持单个或组合安装（例如 `mini-trellis init -u your-name --claude --cursor`）：

| Agent 工具 | 初始化参数 | 记录当前会话 | 项目知识与历史检索支持 |
| --- | --- | --- | --- |
| **Claude Code** | `--claude` | `/mini-trellis:remember` | `SessionStart` 注入短入口；支持项目文档与 `~/.claude/projects` 本地历史检索 |
| **Cursor** | `--cursor` | `mini-trellis-remember` | 安装 `.cursor/skills/`；本地会话通过 `sessionStart` 注入短入口（云端 Agent 不运行该 Hook） |
| **Codex** | `--codex` | `$mini-trellis-remember` | 支持项目 Hook 注入与本地会话历史检索 |
| **OpenCode** | `--opencode` | `/mini-trellis:remember` | 支持启动入口与本地会话检索（含 `--include-children` 子代理会话合并） |
| **Pi** | `--pi` | `/mini-trellis-remember` | 支持启动入口与本地会话检索 |
| **DeepSeek Harness** | `--dsh` | `mini-trellis-remember` | 安装 `.dsh/skills/`，无项目级 `SessionStart`，由模型按需调用 `mem recall` / `mem read` |

<details>
<summary><strong>查看 Codex 信任配置与各宿主边界说明</strong></summary>

- **Codex 首次启用步骤**：
  1. 在项目目录运行 `codex`，确认项目信任提示（若项目配置被禁用，按提示在 `~/.codex/config.toml` 中信任解析后的项目路径）。
  2. 打开 `/hooks` 审核并批准项目 Hook（项目信任与 Hook 信任分别检查，`untrusted` 状态不会生效）。
  3. 如当前版本要求显式开启，在用户配置的 `[features]` 下设置 `hooks = true`。
  4. 运行 `mini-trellis doctor`，随后开启新会话。
- **宿主边界说明**：
  - DeepSeek Harness 无项目级 `SessionStart` 注入点，不解析 `~/.dsh/sessions` 压缩转录本；
  - Cursor 本地支持 `sessionStart` 注入，云端 Agent 仅随仓库携带 `.cursor/skills/`，不解析 Cursor 本地对话历史；
  - OpenCode 与 Pi 支持列出会话与检索，暂无精确 compact 边界恢复。详见 [v0.3.1 版本说明](/releases/v0.3.1/)。

</details>

---
