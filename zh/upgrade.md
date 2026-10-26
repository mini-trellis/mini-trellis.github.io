---
layout: default
title: 升级
parent: 中文
nav_order: 6
---

[English](/upgrade/)

# 升级

`refresh` 之前先备份 `.trellis/`、`AGENTS.md` 和已配置的 Agent 目录，包括被 Git 忽略的文件。

```bash
mini-trellis upgrade
mini-trellis refresh --dry-run
mini-trellis refresh
mini-trellis doctor
```

`upgrade` 更新全局 CLI。`refresh` 重写你没有改过的受管文件，规范、调研和日志留在原地。`platforms` 列出这个项目初始化过的工具。

`mini-trellis uninstall` 会删掉整个 `.trellis/`，里面的笔记也一起删。先看 `mini-trellis uninstall --help`。

Trellis 项目走[从 Trellis 迁移](/zh/migration/)，不要在旧文件上再跑一遍 `init`。
