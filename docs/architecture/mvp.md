# MVP Delivery

[简体中文](./mvp.md) | [English](./mvp.en.md)

Canonical path: `docs/zh-CN/architecture/mvp.md`

## Milestone 1

- 完成 `artifact.yaml` 与 Zod schema
- 建立 Registry API 的 `catalog / publisher / governance / installer / authz` 模块
- 输出 PostgreSQL 初版表结构
- 接入 Prisma schema 与数据库优先、文件默认持久化的 repository

## Milestone 2

- CLI 支持 `login / search / info / install / publish / validate / sync / doctor / reviews / review`
- 支持生成 Cursor 与 Claude 本地适配文件

## Milestone 3

- Web 管理台提供目录、详情、发布表单、审核台、设置页
- 完成角色矩阵、审计入口和治理规则展示
