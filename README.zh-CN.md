# AgentX

[English](./README.md) | [简体中文](./README.zh-CN.md)

![状态：Alpha](https://img.shields.io/badge/status-alpha-f59e0b)
![许可证：Apache--2.0](https://img.shields.io/badge/license-Apache--2.0-2563eb)
![文档：EN/ZH](https://img.shields.io/badge/docs-EN%20%7C%20ZH-16a34a)
![npm](https://img.shields.io/npm/v/agentc?color=cb3837)
![GitHub Release](https://img.shields.io/github/v/release/andoop/agentx-platform?color=7c3aed)

快速入口：
[5 分钟体验](#5-分钟体验) |
[CLI 安装](#cli-安装) |
[文档总览](./docs/README.zh-CN.md) |
[更新日志](./CHANGELOG.md) |
[参与贡献](./CONTRIBUTING.zh-CN.md) |
[安全策略](./SECURITY.zh-CN.md)

AgentX 是一个面向团队的开源 AI Agent 制品注册与分发平台。

它把下面三类资源统一放到一个地方进行发布、审核、批准、版本管理和安装：

- `MCP Server`
- `Skill`
- `Command`

AgentX 当前包含 Web 管理台、Registry API、可打包分发的 CLI，以及面向 Cursor 和 Claude Code 的本地适配器。

## 当前状态

AgentX 目前处于 `alpha` 阶段。

当前已经可用：

- 统一的 `mcp_server`、`skill`、`command` 资源模型
- Web 目录、发布、审核、设置页面
- 基于 JWT 的鉴权与角色权限控制
- 默认文件持久化，可选 Prisma + Postgres
- 资源包上传与分发
- Cursor 与 Claude Code 安装适配

仍在持续完善：

- CLI 首个公开 npm 版本发布流程
- 基于 Docker 的快速部署体验
- 更完整的自动化测试覆盖
- 更丰富的搜索、治理与资源生命周期能力

## 为什么做 AgentX

团队在引入 AI 工具后，通常会遇到资源分散的问题：

- MCP server 在一个仓库里
- prompt 和 skill 在另一个仓库里
- slash command 靠手工复制到各个项目
- 审批、归属和审计记录不统一

AgentX 试图把这条链路统一起来：

1. 编写一个 artifact
2. 发布到 registry
3. 走审核和批准流程
4. 分发到本地 agent 运行环境

## 核心能力

- 统一的 `MCP Server`、`Skill`、`Command` Schema
- 面向目录浏览、发布、审核、管理操作的 Web 控制台
- 支持登录、发布、审核、安装、导出、导入、备份的 CLI 工作流
- 支持“manifest + 真实资源文件”一起发布的资源包分发模型
- 本地安装目标支持 Cursor 和 Claude Code
- 审计日志、成员管理、基于角色的治理能力
- 默认文件持久化，适合低门槛本地开发和演示

## 5 分钟体验

最快的体验方式是使用 Docker Compose：

```bash
cp .env.docker.example .env
docker compose up --build
```

然后打开：

- `http://localhost:3000/login`

默认服务包括：

- `web`：端口 `3000`
- `api`：端口 `4000`
- `postgres`：端口 `5432`

如果这些端口已被占用，可以在启动前修改 `.env`：

```bash
AGENTX_WEB_PORT=3003
AGENTX_API_PORT=4010
POSTGRES_PORT=5433
```

如果你更想从源码运行，可以安装依赖后分别启动 API 和 Web：

```bash
npm install
npm run dev:api
npm run dev:web
```

默认演示账号：

- `alice@internal` / `agentx123`
- `bob@internal` / `agentx123`

建议试一下这条流程：

1. 使用 `alice@internal` 登录
2. 打开 `/publish`
3. 创建一个 `command` 或 `skill`
4. 打开 `/review`
5. 批准刚提交的审核请求
6. 用 CLI 把 artifact 安装到本地项目

## CLI 安装

CLI 已经发布到 npm，可以直接安装：

```bash
npm install -g agentc
agentc --help
```

旧的 `agentx` 命令仍然保留，作为兼容别名：

```bash
agentx --help
```

如果你想在发布前测试本地构建，也仍然可以手动打包：

```bash
npm install
npm run pack:cli
```

然后全局安装生成的 tarball：

```bash
npm install -g ./apps/cli/agentc-0.1.1.tgz
agentc --help
```

如果你在做本地开发，也仍然可以继续源码运行：

```bash
npm --workspace agentc run dev -- login --api-url http://localhost:4000 --email alice@internal --password agentx123

npm --workspace agentc run dev -- publish artifact.example.yaml
npm --workspace agentc run dev -- publish artifact.skill.example.yaml
npm --workspace agentc run dev -- publish artifact.command.example.yaml

npm --workspace agentc run dev -- reviews
npm --workspace agentc run dev -- review <review_id> --decision approved --notes "looks good"

npm --workspace agentc run dev -- install github-mcp --agent cursor --dir /path/to/your/project
npm --workspace agentc run dev -- install review-playbook --agent cursor --dir /path/to/your/project
npm --workspace agentc run dev -- install release-summary --agent cursor --dir /path/to/your/project
```

## 分发模型

AgentX 同时支持只包含 manifest 的资源，以及带资源包的资源。

当某个 artifact 携带资源包时：

- 资源包会和 manifest 一起上传
- AgentX 按 `slug + version` 存储资源包
- `install` 和 `sync` 会把资源包解压到 `.agentx/packages/<slug>/<version>/`
- 本地适配器再基于这些内容生成目标 agent 的配置文件

当前安装目标：

- `mcp_server`
  - Cursor: `.cursor/mcp.json`
  - Claude Code: `.mcp.json`
- `skill`
  - Cursor: `.cursor/rules/<slug>.mdc`
  - Claude Code: `.claude/skills/<slug>/SKILL.md`
- `command`
  - Cursor: `.cursor/commands/<slug>.md`
  - Claude Code: `.claude/commands/<slug>.md`

V1 资源包约定：

- `skill` 资源包可包含 `cursor/<slug>.mdc` 和 `claude/SKILL.md`
- `command` 资源包可包含 `cursor/<slug>.md` 和 `claude/<slug>.md`
- `mcp_server` 资源包可包含 `spec.entrypoint` 指向的真实脚本或二进制

## 持久化

默认情况下，API 使用文件持久化：

- 数据文件：`apps/api/.data/agentx.json`
- 备份目录：`apps/api/.data/backups`

这意味着本地开发不依赖外部数据库。

如果你想覆盖默认文件路径：

```bash
AGENTX_DATA_FILE=/absolute/path/agentx.json npm run dev:api
```

如果你想切换到 Prisma + Postgres：

```bash
cp apps/api/.env.example apps/api/.env
npm --workspace @agentx/api run prisma:generate
npm --workspace @agentx/api run db:push
npm run dev:api
```

健康检查接口会报告当前使用的 repository 模式：

- `GET /health`

## Docker Demo

AgentX 提供了一个适合本地评估的自托管演示栈。

快速启动：

```bash
cp .env.docker.example .env
docker compose up --build
```

或者使用 npm 包装命令：

```bash
npm run docker:up
npm run docker:down
```

默认服务：

- Web：`http://localhost:3000`
- API：`http://localhost:4000`
- Postgres：`localhost:5432`

Compose 栈会自动：

- 启动 Postgres
- 等待数据库就绪
- 在 API 启动前执行 `prisma db push`
- 在 API 健康后再启动 Web

## 鉴权与角色

AgentX 使用基于 JWT 的鉴权机制。

- API 客户端使用 Bearer Token
- Web 使用 HttpOnly Cookie 存储登录态
- CLI 会把会话写入 `~/.agentx/session.json`

默认角色：

- `viewer`
- `publisher`
- `reviewer`
- `admin`

当前管理员能力包括：

- 创建成员
- 修改团队与角色
- 重置密码
- 禁用和启用成员
- 防止移除最后一个活跃管理员

## Web 控制台

当前页面：

- `/login`
- `/catalog`
- `/publish`
- `/review`
- `/settings`

Web 发布页当前支持：

- 按资源类型动态切换字段
- 上传资源包目录
- 内联表单校验与状态反馈

## 工作区结构

- `apps/web`：Next.js 管理台
- `apps/api`：Fastify Registry API
- `apps/cli`：Node.js CLI
- `packages/schema`：共享领域模型与校验
- `packages/config`：`artifact.yaml` 解析与模板
- `packages/sdk`：API Client SDK
- `packages/ui`：共享 Web UI 组件
- `docs/architecture`：架构说明

## 开发

常用命令：

```bash
npm run typecheck
npm run build
npm run test
npm run test:api
npm run test:cli
npm run test:web
npm run dev:api
npm run dev:web
npm run dev:cli
```

持久化管理命令：

```bash
npm --workspace agentc run dev -- export --out ./agentx-export.json
npm --workspace agentc run dev -- import ./agentx-export.json
npm --workspace agentc run dev -- backup --label before-migration
```

## 架构文档

建议先看：

- `docs/zh-CN/architecture/overview.md`
- `docs/zh-CN/architecture/mvp.md`

运行时流程：

1. 通过 Web 或 CLI 发布 artifact
2. 创建审核请求
3. 通过治理流程执行批准或驳回
4. 通过统一 repository 层持久化 artifact、review、audit 状态
5. 通过 CLI 安装到本地 agent 运行环境

## 当前限制

- CLI 已具备标准打包能力，但首个公开 npm 发布流程还未完成
- 目前已有 smoke 测试，但更深入的契约、异常路径和适配器兼容性测试仍有限
- Web 端资源包上传依赖浏览器对目录上传的支持
- 项目仍处于早期阶段，API 仍可能演进

## 路线图

- 将已打包的 CLI 正式发布到 npm
- 继续瘦身并加固生产 Docker 镜像
- 改进搜索与资源发现体验
- 增强资源包生命周期与来源元数据能力
- 在 smoke 之外继续扩展 API、CLI、Web 自动化测试
- 持续完善多语言文档

## 参与贡献

建议阅读：

- `CONTRIBUTING.md` / `CONTRIBUTING.zh-CN.md`
- `CODE_OF_CONDUCT.md` / `CODE_OF_CONDUCT.zh-CN.md`
- `SECURITY.md` / `SECURITY.zh-CN.md`

欢迎贡献的方向：

- 文档
- 适配器
- 治理工作流
- 资源包生命周期
- 测试与 CI

## 许可证

Apache-2.0，详见 `LICENSE`。
