---
layout: default
title: 中文
nav_order: 20
has_children: true
permalink: /zh/
---

# mini-trellis

mini-trellis 把下次会话还要找的约定、调研和开发记录写进仓库里的 Markdown。`mem recall` 同时查这些文件和这台机器上已有的 Agent 对话，先返回短摘录。

[English](/)

```bash
npm install -g mini-trellis
mini-trellis init -u your-name --claude
```

需要 Node.js ≥ 18.17、Python ≥ 3.9 和 Git。参数和第一次 `doctor` 在[安装](/zh/install/)。之后记什么、怎么查，在[日常使用](/zh/using/)。

![约定、研究结论和验证记录留在项目 Markdown 里，后面的会话再拿来用。](/assets/knowledge-zh.svg)

## 一条记录放哪

| | 路径 | 什么时候写在这里 |
| --- | --- | --- |
| 约定 | `.trellis/spec/` | 下次改相关代码还要遵守。先读该目录的 `index.md`。 |
| 调研 | `.trellis/research/` | 查过的结论，包括试过然后放弃的做法。过期主题可以挪到 `archive/`。 |
| 日志 | `.trellis/workspace/<你>/` | 这次改了哪些文件、检查过没有。 |
| 对话 | Agent 本机会话目录 | 要看当时怎么说的。`mem recall` 在原处查，不另做一份库。 |

mini-trellis 不建立任务目录，也不按阶段往下推。规划、改代码和审查仍然由你决定。

## 和别的做法比

| | 手写 `CLAUDE.md` | 向量库 / RAG 记忆 | 分阶段工作流（Trellis） | mini-trellis |
| --- | --- | --- | --- | --- |
| 启动和每一轮 | 文件越写越长，每次会话整份载入 | 看插件；索引和网络会加延迟 | 启动约 8.6k 字符，之后每轮再注入状态，子代理还要再读一遍 | 启动约 1.1k 字符，后面的轮次不再注入 |
| 规范怎么读到 | 整份都在上下文里 | 按相似度切块，精确约束容易漏 | 子代理冷启动后重复读规范 | `mem recall` 给摘录，不够再 `mem read` |
| 以前的对话 | 关掉窗口就没了 | 要先同步进外部存储 | 靠任务目录里的文件 | 直接查本机的 Claude、Codex、OpenCode、Pi 会话 |
| 规则改了 | 手改；旧句子常常还在 | 新旧结论挤在同一个索引里 | 散在各个归档任务目录 | 旧笔记用 `superseded` 指向新笔记，召回时现行的排在前面 |
| 要跑什么 | 一个文件，不能搜 | 数据库、向量和 API key | 阶段门和子代理模板 | Git 里的 Markdown，加一个小 CLI |

## 一组同条件实测

Claude Code 2.1.306，同一项目、同一份 `.trellis` 知识、同一个模型。mini-trellis v0.3.1 对 Trellis v0.7.0-beta.4，6 组任务各跑 3 次：累计耗时少 38.4%，处理 token 少 40.1%。处理 token 含缓存读取。题目在 [v0.3.1 说明](/releases/v0.3.1/)。
