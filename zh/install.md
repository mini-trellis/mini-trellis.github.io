---
layout: default
title: 安装
parent: 中文
nav_order: 1
---

[English](/install/)

# 安装

```bash
npm install -g mini-trellis
```

需要 Node.js ≥ 18.17、Python ≥ 3.9 和 Git。

在项目根目录执行。`your-name` 会变成 `.trellis/workspace/your-name/`。

```bash
mini-trellis init -u your-name --claude
```

参数：`--claude`、`--cursor`、`--codex`、`--opencode`、`--pi`、`--dsh`。用几个就写几个。`-y` 跳过提问。`init` 会写下 `.trellis/` 和对应宿主的文件，不会自己做 Git 提交。

```bash
mini-trellis doctor
```

`doctor` 检查文件和它能看到的上一次 hook 结果。检查通过，不等于模型照着笔记做了。

也可以把下面这段交给当前的 Agent：

```text
请在当前项目安装或迁移 mini-trellis。若还没有命令，先执行 npm install -g mini-trellis。
如果项目里已有旧版工作流文件（例如 .trellis/workflow.md、.trellis/scripts/task.py，或 inject-*.py），先运行 mini-trellis migrate --dry-run，把计划给我看，确认后再执行 mini-trellis migrate -y。
如果是新项目，运行 mini-trellis init -u <name> -y，并只加上我实际使用的工具参数（--claude、--codex、--opencode、--pi、--dsh、--cursor）。
最后运行 mini-trellis doctor，并说明结果。不要删除 .trellis/spec、.trellis/research 或 .trellis/workspace。
```

已经装了 Trellis 的仓库走[从 Trellis 迁移](/zh/migration/)，不要两套一起留着。装完之后，查、记、compact，看[日常使用](/zh/using/)。
