---
layout: default
title: "升级与卸载"
nav_order: 8
parent: "中文"
---
[English](/upgrade/)

已有 `Trellis` 的项目可以通过 `migrate` 转换（两者共用 `.trellis/`，请通过迁移替换已有集成，避免两套指令同时生效）：

```bash
mini-trellis migrate --dry-run   # 先预览迁移计划
mini-trellis migrate             # 确认后执行迁移
```

- **保留全部沉淀知识**：原 `.trellis/spec/`、`.trellis/research/` 和 `.trellis/workspace/` 完整保留；
- **收敛旧任务目录**：将 `.trellis/tasks/` 中的研究内容提取为 research 主题，其余任务文件默认归档到 `legacy/`，并替换 Trellis 专用流程文件与脚本。

<details>
<summary><strong>查看日常升级（upgrade / refresh）与卸载说明</strong></summary>

迁移或更新前请先备份 `.trellis/`、`AGENTS.md` 及已配置的 Agent 目录（包含被 Git 忽略的文件）。

```bash
mini-trellis upgrade             # 更新全局 CLI
mini-trellis refresh --dry-run   # 预览受管文件更新
mini-trellis refresh             # 仅更新未被本地修改的受管文件，保留知识与自定义配置
mini-trellis doctor              # 检查当前项目集成状态
```

- 查看已配置工具：`mini-trellis platforms`
- 卸载提醒：执行 `mini-trellis uninstall` 会移除 `.trellis/` 目录（含其中的知识文件），请先备份。路径映射与冲突处理见 [《迁移指南》](/zh/migration/)。

</details>

---
