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

[v0.3.4](/zh/releases/v0.3.4/) 的 README/docs 主题路径与 Cursor 配置检查，需要同时升级 CLI 并刷新已有项目的脚本和技能。本地改过的文件先按 conflict 详情处理，不要直接覆盖。完成后新开 Agent 会话。

`mini-trellis uninstall` 会删掉整个 `.trellis/`，里面的笔记也一起删。先看 `mini-trellis uninstall --help`。

Trellis 项目走[从 Trellis 迁移](/zh/migration/)，不要在旧文件上再跑一遍 `init`。
