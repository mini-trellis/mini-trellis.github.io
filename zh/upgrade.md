---
layout: default
title: 升级
parent: mini-trellis
nav_order: 10
lang: zh
---
# 升级与刷新

通过 npm 更新时，先安装新版 CLI，再刷新当前项目：

```bash
npm install -g mini-trellis@latest
mini-trellis refresh
```

从 mini-trellis 0.3.8 开始，`mini-trellis upgrade` 会在当前已初始化项目中完成这两步。从 0.3.7 或更早版本启动的升级，仍需随后手动执行一次 refresh。

已记录的旧模板正常更新时直接完成。本地改动或缺失旧版本记录导致内容冲突时，refresh 列出文件并统一询问 `[y/N]`。输入 `Y` 覆盖列出的文件并完成更新；输入 `N`、直接回车或遇到 EOF，项目保持原样。共享 JSON 配置按结构合并，`AGENTS.md` 保留托管区块之外的说明，项目知识继续保留。清单缺失或损坏时，也可通过同一次确认重新生成。

`refresh --dry-run` 预览更新。需要确认覆盖时，`--json` 或非交互运行会列出相关文件并返回退出码 1；在终端运行 `mini-trellis refresh` 即可确认并完成这些更新。没有内容冲突的更新直接完成。


[v0.3.8 版本说明](/zh/releases/v0.3.8/)。刷新后开启新的 Agent 会话。其他项目按需分别运行 `mini-trellis refresh`。
