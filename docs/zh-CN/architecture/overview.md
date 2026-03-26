# AgentX 架构

[English](../../en/architecture/overview.md) | [简体中文](./overview.md)

## 目标

- 统一 `MCP Server`、`Skill`、`Command` 的资源模型
- 打通 `Web + API + CLI + Local Adapter` 的分发链路
- 在团队内部实现版本、审核、权限和审计治理

## Monorepo 结构

- `apps/api`：Fastify Registry API
- `apps/web`：Next.js 管理台
- `apps/cli`：命令行工作流
- `packages/schema`：Zod schema 与领域类型
- `packages/config`：`artifact.yaml` 解析与模板
- `packages/sdk`：统一 API client
- `packages/ui`：管理台共享组件

## 持久化

- 默认使用 lowdb 文件 repository，保证无数据库时也能开发、演示并在重启后保留数据
- 默认文件路径是 `apps/api/.data/agentx.json`
- 支持通过 API / CLI 做 export、import 和 backup
- 配置 `DATABASE_URL` 后切换到 Prisma/Postgres repository
- Prisma schema 位于 `apps/api/prisma/schema.prisma`
- 运行时仍复用同一套 `ArtifactRepository` 接口，避免业务层感知存储实现

## 运行时流程

1. Publisher 通过 CLI 或 Web 创建 `artifact.yaml`
2. Registry API 校验 schema 并生成 review request
3. Reviewer 在 Web 或 CLI 审核后切换资源状态
4. API repository 统一管理 artifact、review、audit 的状态读写
5. Developer 通过 CLI 生成安装计划并同步到本地 agent 目录
