---
layout: default
title: 笔记怎么写
parent: mini-trellis
nav_order: 4
lang: zh
---

# 笔记怎么写

以后的会话没有这条会做错，才写下来。已经有同主题文件，就改那个文件。

## 项目现状

已有 README、docs 或 spec 就维护原文件，保持原文语言，没有合适文件才新建短 spec。已实现能力核对代码或测试；确认决定和未使用常量不证明实现。已确认但未实现的约定与愿景单独写。改名同步修正符号和路径引用，仅改名或排版不新增 journal。

journal 的主题链接也支持根目录 `README*.md`、`docs/` 或 `doc/` 下的 Markdown。已有项目需升级 CLI 并执行 `mini-trellis refresh`。具体用法见[维护项目现状](/zh/using/#维护项目现状)。

## 约定

`.trellis/spec/` 放下次还要遵守的规则，写短。每个目录有一份 `index.md`，文章从 index 链出去。SessionStart 只报告可用 spec index 的数量，相关正文由 `mem recall` 按需查找。

```markdown
# 回调

每个回调带幂等键。重复请求返回第一次的结果。
```

约定写边界。怎么查到这条，写在调研里。

## 调研

`.trellis/research/<topic>.md` 一个文件一个主题。该目录下的 `README.md` 不是主题。

写下结论、条件和查过的文档。放弃的做法留在同一篇里，标明否决。

```markdown
# 服务商重试

服务商最多重试两次，而且回调必须已经幂等。
来源：服务商回调文档，2026-04-02。

否决：在入账前去重。对账因此错了。
```

主题做完或过期，用 `git mv` 挪到 `.trellis/research/archive/`。SessionStart 不列出 `archive/`。

只有这条边界以后还要遵守，才收进 `.trellis/spec/`，并从对应的 `index.md` 链过去。

## 日志

`.trellis/workspace/<你>/` 记这次会话：改了什么，以及实际主题路径。正文保留在主题文件里，也可以是原本就在维护的 README 或 docs。

`remember` 写这条日志。新安装不会自动提交。自动提交由 [命令](/zh/commands/) 页里的 `session_auto_commit` 控制。

## 整篇被换掉

只改了一节，就改那一节。新笔记替换旧笔记时，旧文件留在原地：

```markdown
---
status: superseded
superseded_by: .trellis/research/new-topic.md
---
```

`superseded_by` 是相对仓库根的路径。召回会顺着短链走到现行笔记，并可以带一句现行摘录。`mem read` 给出这条路径，不贴出后继正文。目标缺失、路径跑出项目、指向自己、成环、或链太长，都会报出来，旧笔记不当作现行规则。文件时间更新本身不会把整篇标成历史。

命令在[命令](/zh/commands/)。一次查询会返回什么，在 [recall 会返回什么](/zh/recall/)。
