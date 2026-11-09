---
layout: default
title: 日常使用
parent: mini-trellis
nav_order: 3
lang: zh
---
# 日常使用

新项目的安装在[安装](/zh/install/)。命令在项目根目录执行。Claude Code 和 OpenCode 用 `/mini-trellis:remember`，Codex/ZCode 用 `$mini-trellis-remember`，Pi 用 `/mini-trellis-remember`。DeepSeek Harness、Cursor 和 CodeBuddy 用技能 `mini-trellis-remember`。

## 从零安装

```bash
npm install -g mini-trellis
mini-trellis init -u 你的名字 --claude
```

只加上实际使用的宿主：`--claude`、`--codex`、`--opencode`、`--pi`、`--dsh`、`--cursor`、`--codebuddy`、`--zcode`。加上 `-y` 会跳过提问。init 写入 `.trellis/` 和宿主文件，不创建 Git 提交。DeepSeek 没有 SessionStart，需要时自己调用 `mem recall`。Cursor 会装上技能和本地 `sessionStart`；Cursor 托管云端不跑这个 hook，本地 hook 跑过也不等于 Agent 提示里收到了 `additional_context`。两边都不解析本机对话。OpenCode 和 Pi 没有精确 compact。

## OpenCode V1 与 V2

新项目默认 V2：

```bash
mini-trellis init -u your-name --opencode -y
```

旧版宿主加 `--opencode-version 1`。已有项目升级或普通刷新时保留原协议。两种协议共用项目知识和技能，每个项目使用一个入口。

切换到 V2 前先预览：

```bash
mini-trellis refresh --opencode --opencode-version 2 --dry-run
mini-trellis refresh --opencode --opencode-version 2
```

改为 `1` 可以切回。更新保留用户插件、SDK 版本和依赖；遇到本地修改冲突时按提示处理。OpenCode V2 支持项目知识召回；原始对话历史检索支持 V1。

## CodeBuddy CLI 与 IDE

```bash
mini-trellis init -u your-name --codebuddy -y
```

两端共用 `.codebuddy/settings.json` 和 `.codebuddy/skills/`，只需安装一次。使用 `mini-trellis-remember` 技能记录已确认的结论；CLI 也可用 `/mini-trellis:remember`。优先更新已有主题，用 `mem recall` 查询项目知识，摘录不足时用 `mem read` 展开。

安装和刷新保留用户 hook、环境与权限。在 CodeBuddy 中按提示完成登录和项目信任，配置后开启新会话。支持已保存的项目知识，不解析 CodeBuddy 原始对话历史。

<a id="zcode-zai"></a>

## ZCode（智谱/Z.ai）

安装与 Codex 共用的 `.agents/skills/` 三项项目技能，并在 `.zcode/config.json` 注册 SessionStart hook：

```bash
mini-trellis init -u 你的名字 --zcode -y
```

桌面版启动 ZCode App，在「设置 → 钩子」选择当前项目，审查 `.zcode/hooks/session-start.py` 后点击「信任」，随后开启新会话，载入项目知识入口。

独立 ZCode CLI 使用宿主显示的工作区路径运行：

```bash
zcode skills list --cwd . --json
zcode hooks trust review --workspace . --json
```

审查命令与脚本，再授予返回的 `hookDeclarationDigest` 并检查结果：

```bash
zcode hooks trust grant --workspace . --hook-digest <审查到的-hookDeclarationDigest>
zcode hooks trust status --workspace . --json
mini-trellis doctor
```

使用 `$mini-trellis-remember` 或同名技能记录已确认的决定。已有主题沿用原语言，journal 链接指向更新后的文件。`mini-trellis-session-insight` 通过 `mem recall`/`mem read` 找回项目知识，也可将提供的 Markdown/文本整理为项目文档。

compact 后，`AGENTS.md` 引导 Agent 继续读取同一份已保存知识与技能。ZCode 桌面 3.17.2 / core 0.17.1 在新会话启动时执行入口，compact 后沿用宿主提供的项目指引。

init 和 refresh 保留用户配置、hook 和其他技能。刷新改变 hook 声明后，在 ZCode 中重新审查。若 `.zcode/skills/` 已有同名技能，先移动或改名，再安装共享技能。`doctor` 显示项目注册与最近观察到的执行；信任状态通过 ZCode 钩子面板或 `trust status` 查看。

## 在 Cursor 里

```bash
mini-trellis init -u 你的名字 --cursor -y
```

init 会写入 `AGENTS.md` 里的托管说明、`.cursor/skills/` 下的三个技能，以及只注册 `sessionStart` 的 `.cursor/hooks.json`。记录用技能 `mini-trellis-remember`。找回用 `mini-trellis mem recall`，摘录缺条件时再 `mem read`。

Cursor 本地 `sessionStart` 短入口已在 3.27.22 验证。hook 日志成功本身不能证明模型收到或使用内容。短入口不可用时，也可以使用 `AGENTS.md` 和 `mem recall`。Cursor 托管云端不运行 `sessionStart`，自托管机器仍未验证。不解析 Cursor 对话历史。

第一次这样走：

1. 在项目根执行上面的 init。
2. 新开一个本地 Agent 对话。`mini-trellis doctor` 里 `cursor` 和 `cursor-trigger` 应为 ok。hook 还没在磁盘留下记录时，`cursor-runtime` 是 unknown。
3. 确认一条规则。让 Agent 更新已有主题；没有合适文件时再写一篇短 spec，然后使用 `mini-trellis-remember`。核对主题正文、journal 链接和 index。
4. 再开一个对话，对这条规则执行 `mem recall`。摘录里要还在条件和来源。

再次 init 或 refresh 会保留 `.cursor/hooks.json` 里不相干的 hook，也会保留用户写的 `version`。文件不是合法 JSON 或 hook 结构无效时，init 打印 `Skipped .cursor/hooks.json` 并留下原文件，refresh 停在 conflict。`doctor` 会对这些错误以及缺失的 mini-trellis `sessionStart` 注册报告 `cursor-config`。

| 看到什么 | 怎么处理 |
| --- | --- |
| Hooks 日志里没有加载项目 `sessionStart` | 打开的是含 `.cursor/hooks.json` 的项目根。 |
| `cursor-runtime` 为 unknown | 还没有成功的 hook 记录。开一轮本地 Agent 对话，再看 `.trellis/.runtime/hooks/cursor.json`。 |
| hook 成功了，模型却没有 recall 说明 | 看 `AGENTS.md`，直接说 `mini-trellis mem recall`。日志里的 merged 不是送达。 |
| `cursor-config` 警告 | 按详情处理：先修正 JSON 或 hook 结构错误；缺少注册时运行 `init --cursor` 补回。用户 hook 会保留。 |
| Cursor 托管云端 Agent | 不跑 `sessionStart`。仓库里的笔记还在，需要时自己 recall。 |

## 从 Trellis 迁过来

迁移前请备份项目知识和自定义配置，包括被 Git 忽略的文件。迁移命令不会自动创建备份。

```bash
mini-trellis migrate --dry-run
mini-trellis migrate
```

`--dry-run` 只列出会改什么。迁移会换掉 Trellis 的说明入口，重写 mini-trellis 的脚本，并把 `.trellis/tasks/` 收进 research。`.trellis/spec/`、`research/`、`workspace/` 保留。缺少 `.trellis/.gitignore` 时会补上，让本地身份与运行状态保持在 Git 之外；已有用户规则会保留。`-y` 跳过提问，并把任务文件归档到 `<topic>/legacy/`。迁完之后，项目现状的维护和新项目一样，见[维护项目现状](#维护项目现状)。

## 改代码之前先查

```bash
mini-trellis mem recall "回调 重试"
```

输出是几条短摘录，每条带路径和 `ref`。摘录够用就按它改。要看完整笔记或当时的对话：

```bash
mini-trellis mem read "<ref>"
```

`mem search` 只搜对话。`mem list` 列出当前项目的会话。文本列表会缩短 id，JSON 里是完整 id。

```bash
mini-trellis mem search "回调 重试"
mini-trellis mem list --platform claude
mini-trellis mem context <session-id> --platform claude
```

`--platform` 可以是 `claude`、`codex`、`opencode`、`pi` 或 `all`。不加 `--global` 时，list 和 context 停在当前项目。另一个项目的完整 id 不会被用上。同一范围内同一个完整 id 命中多场时，命令不会挑一场。

没有命中就直接改。不必为了走流程先建任务。

## 把选定聊天整理成项目知识

[v0.3.6](/zh/releases/v0.3.6/) 支持整理选定历史。让 **mini-trellis-session-insight** 整理选定会话或 Markdown/文本导出：

```text
请用 mini-trellis-session-insight 整理 exports/callback-chat.md，更新已有项目文档。
保留确认结论、纠正、例外和来源；存在冲突的决定集中向我提问。
```

使用本地会话时，先用 `mini-trellis mem list --platform claude --json --limit 10` 选择完整 id，再以平台和 id 替换导出路径。原始会话读取支持 Claude Code、Codex、OpenCode V1 和 Pi；其他宿主使用 Markdown/文本导出。

Agent 阅读选定材料，核对相关项目文档和代码，沿用原语言更新已有 README、docs、spec 或 research 主题。已确认需求、已实现行为和建议分别标明状态，结论旁保留来源。核对保存的主题后，以 `--no-commit` 记录 journal 链接；材料没有新知识时，主题和日志保持原样。

在新会话中，直接使用这些知识：

```text
请用 mini-trellis mem recall 找回回调规则，再补一条重试上限测试，保留记录中的条件与例外。
```

## 开发过程中记什么

值得留下的只有以后还会用到的结论。

| 发生了什么 | 记在哪里 | 怎么说 |
| --- | --- | --- |
| 定下「回调必须带幂等键」 | `.trellis/spec/` | 对 Agent 说：把这条写成项目约定，并更新已有的 spec。 |
| 查了支付平台文档，重试最多两次 | `.trellis/research/` | 对 Agent 说：按这个主题更新研究笔记，写上结论、条件和文档链接。 |
| 试过先去重再记账，对账对不上，放弃了 | 同一篇研究笔记 | 标明这是 rejected，不要写成当前规则。 |
| 这次改了哪个文件、测试是否通过 | `.trellis/workspace/<你>/` 的 journal | 会话结束前执行对应宿主的 `remember`。 |

journal 只记过程和主题路径。正文保留在已有主题文件里，也可以是原本就在维护的 README 或 docs；没有合适文件时再写入 spec 或 research。

## 维护项目现状

项目今天是什么，只留一份说明。已经写在 README、docs 或 spec 里的，改那一处。没有合适的文件时，再写一篇短 spec。不要把同一段说明复制成第二份。

可以对 Agent 说：

```text
根据当前代码更新项目说明，保留已经确认的能力、架构和约束；不确定的部分标明待核实。
```

说明里写清用途、已实现能力、主要模块和约束。已实现能力要核对当前代码或测试：已确认的决定、常量或配置值本身不能证明行为已经实现。已约定或规划中的行为要与已实现能力分开。只改相关章节。普通改名或排版不重写整篇说明，也不记一条 journal；如果文中引用的符号或路径因此过时，仍要同步修正。

中文讨论去改一篇英文旧说明时，正文保持英文，含义、限额和否定不变。确认之后，现行说明和 journal 里的链接一致。下一轮用 `mem recall` 找回的是更新后的内容，旧 journal 仍可查，但不代替现行说明。

已经装过的项目要先 `mini-trellis refresh`，`--topic` 才接受根目录的 `README*.md`，以及 `docs/`、`doc/` 下的 Markdown。

对 Agent 可以直接说：

```text
这次确认：回调必须带幂等键，重复回调直接返回第一次的结果。
先去重再记账已经试过，对账对不上，标成 rejected。
把约定写入现有 spec，研究笔记补上支付平台文档链接，然后执行 remember。
```

`remember` 会先改主题文件，再在 journal 里留下链接。

## 决定变了

只改一个章节时，改那一节。整篇笔记被替换时，留下旧笔记并指向新笔记：

```markdown
---
status: superseded
superseded_by: .trellis/research/new-topic.md
---
```

`superseded_by` 是相对仓库根的路径。召回会沿短链走到最后一篇现行笔记，并可以带上它的一小段摘录。`mem read` 给出同一条路径，不贴后继正文。目标缺失、路径越出项目或文档来源、指向自己、成环，或链太长，都会标明，不会当成现行结论。更新的文件时间、旁边的源码变化、嵌套的元数据，都不会把整篇标成过时。

## compact 之后怎么定位

Claude Code 和 Codex 在 compact 之后的启动提示里，会写上宿主送来的会话 id。在当前项目里执行它打印的命令：

```bash
mini-trellis mem context <session-id> --platform claude
```

Codex/ZCode 用 `--platform codex`。不加查询时，读的是最近一次压缩边界之前的有限轮次。前面的长回复不会把最后一条短限制挤掉。`mem recall` 仍用来查项目笔记，`mem read` 展开 `session:v1` 引用。

要找更早的条件，可以加 `--grep "<关键词>"` 定位原始轮次；压缩摘要不会作为关键词命中或相邻摘录返回。Codex 的 compact 提示会在下一条用户消息开始时交付。

三种失败分开说。没有会话 id 时，提示保持通用，不改绑另一场。历史文件还没落盘时，命令警告这场会话没有可读历史，然后以 `session not found` 退出。文件不可读时，警告写明读不了这场会话。这两条警告分别是 `session-history-missing` 和 `session-history-unreadable`。

OpenCode 和 Pi 还没有这种精确会话恢复。它们的启动文案不会点名当前会话 id。查笔记用 `mem recall` 和 `mem read`。要看 OpenCode V1 或 Pi 历史文件时，用 `mem list --platform opencode` 或 `--platform pi`，再用列表里的完整 id 调 `mem context`。

## 排障

```bash
mini-trellis doctor
```

`--json` 打出同样的检查。doctor 只报告它看得到的文件和最近一次 hook 结果，不能说明模型已经遵守规则。

| 检查 | 含义 |
| --- | --- |
| `legacy-trellis` | 还留着 Trellis 工作流。先跑 `mini-trellis migrate --dry-run`。 |
| `memory-layer` | 缺少 `.trellis` 或 `add_session.py`。跑 `mini-trellis init`。 |
| `instructions` | `AGENTS.md` 没有托管块。再跑一次 init。 |
| `platforms` | 没有发现宿主。加上 `--claude`、`--codex`、`--opencode`、`--pi`、`--dsh`、`--cursor` 或 `--codebuddy`、`--zcode`。 |
| `<host>-runtime` 为 unknown | 还没有一次真实 hook 记录。开一轮宿主会话。Codex 要先信任项目 hook。Cursor 还要分开看：hook 记录出现，也不等于短入口进了模型提示。 |
| `cursor-config` | `.cursor/hooks.json` 无效或 mini-trellis 启动 hook 没有注册。按详情处理；无效配置会保留。 |
| `<host>-runtime` 为 warn | 最近一次 hook 没有干净结束。明细里有状态和错误类别。 |
