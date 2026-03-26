# 参与贡献 AgentX

[English](./CONTRIBUTING.md) | [简体中文](./CONTRIBUTING.zh-CN.md)

感谢你关注 AgentX。

我们正在把 AgentX 打造成一个用于管理和分发 AI Agent 制品的开源平台，覆盖 `MCP Server`、`Skill`、`Command` 等资源。

## 开始之前

- 先阅读 `README.md` 或 `README.zh-CN.md`，了解产品定位和当前项目状态。
- 在参与 issue、discussion、pull request 之前，请先阅读 `CODE_OF_CONDUCT.md` 或 `CODE_OF_CONDUCT.zh-CN.md`。
- 如果你要报告安全问题，请不要提交公开 issue，而应遵循 `SECURITY.md` 或 `SECURITY.zh-CN.md`。

## 开发环境

要求：

- Node.js `>= 20`
- npm `>= 10`

安装依赖：

```bash
npm install
```

运行主要应用：

```bash
npm run dev:api
npm run dev:web
```

常用检查：

```bash
npm run typecheck
npm run build
npm run test
```

## 项目结构

- `apps/api`：Fastify Registry API
- `apps/web`：Next.js 管理台
- `apps/cli`：可打包分发的 CLI
- `packages/schema`：共享领域模型与校验
- `packages/config`：manifest 解析和模板辅助
- `packages/sdk`：API Client
- `packages/ui`：共享 UI 组件

## 欢迎贡献的方向

我们尤其欢迎以下方向的贡献：

- 文档和示例
- artifact schema 改进
- Web 控制台体验
- CLI 工作流
- Cursor / Claude 适配器
- 治理和审核流程
- 自动化测试与 CI
- 部署与自托管能力

## Pull Request 指南

请尽量让每个 Pull Request 聚焦。

一个好的 PR 通常应当：

- 解决一个明确问题
- 在描述中说明清楚设计原因
- 命名和行为与现有代码风格保持一致
- 当行为变更时同步更新文档
- 条件允许时附带测试

在提交 PR 前，建议先运行：

```bash
npm run typecheck
npm run build
npm run test
```

## 编码约定

- 优先使用 TypeScript。
- 保持行为显式，便于 review。
- 不要在未记录说明的情况下破坏对外行为。
- 如果你修改了用户可见的工作流，请同步更新 `README.md` 和 `README.zh-CN.md`。
- 如果新行为会影响贡献者或运维人员，请同步更新 `docs/` 下相关文档。

## Issues 与 Discussions

提 issue 时，请尽量包含：

- 你预期发生什么
- 实际发生了什么
- 复现步骤
- 如有需要，附上环境信息

功能建议若能包含以下信息，会更有帮助：

- 目标用户是谁
- 当前痛点是什么
- 期望的工作流是什么
- 现有行为为什么不够用

## 贡献许可

当你提交贡献时，表示你同意该贡献可以按照仓库当前许可证进行分发。
