---
layout: default
title: 升级
parent: mini-trellis
nav_order: 10
lang: zh
---
# 升级

`refresh` 之前先备份 `.trellis/`、`AGENTS.md` 和已配置的 Agent 目录，包括被 Git 忽略的文件。

```bash
mini-trellis upgrade
mini-trellis refresh --dry-run
mini-trellis refresh
mini-trellis doctor
```

`upgrade` 更新全局 CLI。`refresh` 重写你没有改过的受管文件，规范、调研和日志留在原地。`platforms` 列出这个项目初始化过的工具。

升级后刷新项目脚本与技能。已有 OpenCode V1 项目保留原入口；切换到 V2 时先运行 `mini-trellis refresh --opencode --opencode-version 2 --dry-run`，确认后去掉 `--dry-run`。新增 CodeBuddy 使用 `mini-trellis init --codebuddy -y`。

[v0.3.7](/zh/releases/v0.3.7/) 新增 ZCode 接入，并改进中文与截断历史读取。已有项目运行 `mini-trellis init --zcode -y` 添加 ZCode，在宿主中审查并信任项目 hook 后开启新会话。选定会话与文本导出可继续通过[历史整理](/zh/using/#把选定聊天整理成项目知识)写入项目文档。

`mini-trellis uninstall` 会删掉整个 `.trellis/`，里面的笔记也一起删。先看 `mini-trellis uninstall --help`。

Trellis 项目走[从 Trellis 迁移](/zh/migration/)，不要在旧文件上再跑一遍 `init`。
