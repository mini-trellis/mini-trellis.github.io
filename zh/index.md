---
layout: default
title: "中文"
nav_order: 20
has_children: true
---
只要跨会话记忆，不要笨重的工作流。

[English](/)

为 AI 编程 Agent 留住架构约定、调研结论与排查经验，并在本机检索历史对话。

- **约定与经验跨会话延续。** 接口规范（`spec`）、方案调研（`research`）和开发日志（`workspace`）写在仓库里的 Markdown 中。
- **文档和本地对话一起查。** `mini-trellis mem recall` 先返回短摘录。摘录不够时，再用 `mem read` 打开原文。
- **本机优先。** 不需要向量数据库、Embedding API，也不需要后台服务。

```bash
npm install -g mini-trellis
mini-trellis init -u your-name --claude
```

需要 Node.js ≥ 18.17、Python ≥ 3.9 和 Git。

在 Claude Code 上，同一项目、同一份知识和同一个模型下，mini-trellis v0.3.1 比 Trellis v0.7.0-beta.4 **耗时少 38.4%**，**处理 token 少 40.1%**。条件和分项数字在 [v0.3.1 说明](/releases/v0.3.1/)。

![开发中的约定、研究结论与验证记录沉淀为项目知识。](/assets/knowledge-zh.svg)

## 接着读

- [为什么选择 mini-trellis](/zh/why/)
- [快速开始](/zh/quick-start/)
- [开发时怎么用](/zh/using/)
- [知识留在哪里](/zh/memory/)
- [支持的工具](/zh/agents/)
- [从 Trellis 迁移](/zh/migration/)
