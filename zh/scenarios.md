---
layout: default
title: 四段场景
parent: mini-trellis
nav_order: 5
lang: zh
---

# 四段场景

每段是一个情况、一句可以交给 Agent 的话，以及做完是什么样。查和记的步骤在[日常使用](/zh/using/)和[笔记怎么写](/zh/writing-notes/)。

## 1. 空仓库

还没有 `.trellis/`。你用 Claude Code。

```text
运行 mini-trellis init -u <name> -y --claude。
然后运行 mini-trellis doctor。
不要提交。
```

做完：`.trellis/spec/`、`research/` 和 `workspace/<name>/` 都在。doctor 不报 `memory-layer` 或 `instructions`。没有产生 Git 提交。

## 2. 已有 Trellis

仓库里还有 Trellis 的流程文件。规范和日志要留下。

```text
先运行 mini-trellis migrate --dry-run，把计划给我看。
我确认后再运行 mini-trellis migrate -y。
不要删除 .trellis/spec、.trellis/research 或 .trellis/workspace。
```

做完：写文件之前先看过 dry-run。spec、research、workspace 还在。`.trellis/tasks/` 已折进 research。doctor 不报 `legacy-trellis`。文件级说明在[从 Trellis 迁移](/zh/migration/)。

## 3. 会再犯的 bug

重复回调造成了重复扣款。修复已经在代码里。下次会话不能把幂等键丢掉。

```text
确认：每个回调带幂等键，重复请求返回第一次的结果。
入账前去重试过，对账因此错了。把那条标成否决。
更新已有的 spec，把服务商文档链接写进调研笔记，然后执行 remember。
```

做完：规则在已有 spec 里，并从该目录的 `index.md` 链出。否决的做法在调研笔记里，不在 spec 里。日志链到这些路径。`mini-trellis mem recall "幂等键"` 能返回 spec 摘录。

## 4. compact 之后

Claude Code 压缩了这场会话。提示里有会话 id。压缩前说过的那条限制还要用。

```text
按 compact 提示运行 mem context，加上 --platform claude。
再对项目笔记跑 mem recall。不要把压缩摘要当成规则。
```

做完：`mem context` 显示最近一次压缩边界之前的轮次。留下的规则来自 spec 或 research 的命中，不来自压缩摘要。历史文件还没落盘时，命令以 `session not found` 退出，这时只用项目笔记。
