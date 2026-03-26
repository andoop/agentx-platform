# AgentX

[English](./README.md) | [简体中文](./README.zh-CN.md)

![Status: Alpha](https://img.shields.io/badge/status-alpha-f59e0b)
![License: Apache--2.0](https://img.shields.io/badge/license-Apache--2.0-2563eb)
![Docs: EN/ZH](https://img.shields.io/badge/docs-EN%20%7C%20ZH-16a34a)

Quick Links:
[5-Minute Trial](#5-minute-trial) |
[CLI Installation](#cli-installation) |
[Docs Index](./docs/README.md) |
[Contributing](./CONTRIBUTING.md) |
[Security](./SECURITY.md)

AgentX is an open-source registry platform for managing and distributing AI agent artifacts across teams.

It gives you one place to publish, review, approve, version, and install:

- `MCP Server`
- `Skill`
- `Command`

AgentX ships with a Web console, Registry API, packaged CLI tooling, and local adapters for Cursor and Claude Code.

## Status

AgentX is currently `alpha`.

What works today:

- unified artifact model for `mcp_server`, `skill`, and `command`
- Web catalog, publish, review, and settings pages
- JWT auth with role-based access control
- file persistence by default, Postgres via Prisma optionally
- package bundle upload and distribution
- install adapters for Cursor and Claude Code

What is still evolving:

- the first public npm release process for the CLI
- Docker-based quick deployment
- broader automated test coverage
- richer search, governance, and package lifecycle workflows

## Why AgentX

Teams adopting AI tools usually end up with fragmented assets:

- MCP servers live in one repo
- prompts and skills live in another
- slash commands are copied manually between projects
- approval, ownership, and audit trails are inconsistent

AgentX provides a single workflow for:

1. authoring an artifact
2. publishing it to a registry
3. reviewing and approving it
4. distributing it to local agent runtimes

## Core Features

- Unified schema for `MCP Server`, `Skill`, and `Command`
- Web console for catalog browsing, publishing, review, and admin operations
- CLI workflows for login, publish, review, install, export, import, and backup
- Package-aware distribution: publish a manifest plus real artifact files together
- Local install targets for Cursor and Claude Code
- Audit logs, member management, and role-based governance
- File-based persistence by default for low-friction local development

## 5-Minute Trial

The fastest way to try AgentX is Docker Compose:

```bash
cp .env.docker.example .env
docker compose up --build
```

Then open:

- `http://localhost:3000/login`

The stack includes:

- `web` on port `3000`
- `api` on port `4000`
- `postgres` on port `5432`

If those ports are already in use, change them in `.env` before starting Compose:

```bash
AGENTX_WEB_PORT=3003
AGENTX_API_PORT=4010
POSTGRES_PORT=5433
```

If you prefer running from source, install dependencies and start the API and Web app:

```bash
npm install
npm run dev:api
npm run dev:web
```

Use the default demo credentials:

- `alice@internal` / `agentx123`
- `bob@internal` / `agentx123`

Then try this flow:

1. Sign in as `alice@internal`
2. Open `/publish`
3. Create a `command` or `skill`
4. Open `/review`
5. Approve the submitted review request
6. Install the artifact into a local project with the CLI

## CLI Installation

The CLI is now packaged as a standard npm CLI.

Until the first public npm release is published, you can build and pack it locally:

```bash
npm install
npm run pack:cli
```

Then install the generated tarball globally:

```bash
npm install -g ./apps/cli/agentc-0.1.1.tgz
agentc --help
```

The legacy `agentx` command remains available as a compatibility alias.

For local development, you can still run it from source:

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

## Distribution Model

AgentX supports both manifest-only artifacts and package-backed artifacts.

When an artifact includes a package bundle:

- the package is uploaded together with the manifest
- AgentX stores the package per `slug + version`
- `install` and `sync` extract the package into `.agentx/packages/<slug>/<version>/`
- local adapters then generate the target agent files

Current install targets:

- `mcp_server`
  - Cursor: `.cursor/mcp.json`
  - Claude Code: `.mcp.json`
- `skill`
  - Cursor: `.cursor/rules/<slug>.mdc`
  - Claude Code: `.claude/skills/<slug>/SKILL.md`
- `command`
  - Cursor: `.cursor/commands/<slug>.md`
  - Claude Code: `.claude/commands/<slug>.md`

Package conventions in V1:

- `skill` packages may include `cursor/<slug>.mdc` and `claude/SKILL.md`
- `command` packages may include `cursor/<slug>.md` and `claude/<slug>.md`
- `mcp_server` packages may include the real script or binary referenced by `spec.entrypoint`

## Persistence

By default, the API uses file persistence:

- data file: `apps/api/.data/agentx.json`
- backup directory: `apps/api/.data/backups`

This means local development works without any external database.

To override the file location:

```bash
AGENTX_DATA_FILE=/absolute/path/agentx.json npm run dev:api
```

To use Postgres with Prisma:

```bash
cp apps/api/.env.example apps/api/.env
npm --workspace @agentx/api run prisma:generate
npm --workspace @agentx/api run db:push
npm run dev:api
```

The health endpoint reports the active repository mode:

- `GET /health`

## Docker Demo

AgentX includes a self-hosted demo stack for local evaluation.

Quick start:

```bash
cp .env.docker.example .env
docker compose up --build
```

Or use the npm helpers:

```bash
npm run docker:up
npm run docker:down
```

Default services:

- Web: `http://localhost:3000`
- API: `http://localhost:4000`
- Postgres: `localhost:5432`

The Compose stack automatically:

- starts Postgres
- waits for database readiness
- runs `prisma db push` before starting the API
- starts the Web app after the API becomes healthy

## Auth And Roles

AgentX uses JWT-based auth.

- API clients use Bearer tokens
- the Web app stores auth in an HttpOnly cookie
- the CLI stores session data in `~/.agentx/session.json`

Default roles:

- `viewer`
- `publisher`
- `reviewer`
- `admin`

Admin capabilities currently include:

- create members
- update teams and roles
- reset passwords
- disable and enable members
- prevent removal of the last active admin

## Web Console

Current pages:

- `/login`
- `/catalog`
- `/publish`
- `/review`
- `/settings`

The Web publish page supports:

- type-specific artifact fields
- package directory upload
- inline form validation and status feedback

## Workspace Layout

- `apps/web`: Next.js management console
- `apps/api`: Fastify Registry API
- `apps/cli`: Node.js CLI
- `packages/schema`: shared domain schema and validation
- `packages/config`: `artifact.yaml` parsing and templating
- `packages/sdk`: API client SDK
- `packages/ui`: shared Web UI components
- `docs/architecture`: architecture notes

## Development

Common commands:

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

Persistence admin commands:

```bash
npm --workspace agentc run dev -- export --out ./agentx-export.json
npm --workspace agentc run dev -- import ./agentx-export.json
npm --workspace agentc run dev -- backup --label before-migration
```

## Architecture

Start with:

- `docs/en/architecture/overview.md`
- `docs/en/architecture/mvp.md`

Runtime flow:

1. publish an artifact from Web or CLI
2. create a review request
3. approve or reject it through governance workflows
4. store artifact state through a unified repository layer
5. install the approved artifact into local agent runtimes

## Limitations

- CLI packaging is ready, but the first public npm release process is still pending
- smoke coverage exists, but deeper contract, failure-mode, and adapter compatibility tests are still limited
- package upload in the Web UI depends on browser directory-upload support
- the project is still early and APIs may evolve

## Roadmap

- publish the packaged CLI as a public npm release
- slim and harden Docker images for production deployment
- improve search and artifact discovery
- add stronger package lifecycle rules and provenance metadata
- expand automated API, CLI, and Web test coverage beyond smoke paths
- improve multi-language documentation

## Contributing

Please read:

- `CONTRIBUTING.md` / `CONTRIBUTING.zh-CN.md`
- `CODE_OF_CONDUCT.md` / `CODE_OF_CONDUCT.zh-CN.md`
- `SECURITY.md` / `SECURITY.zh-CN.md`

Contributions are welcome for:

- docs
- adapters
- governance workflows
- artifact package lifecycle
- testing and CI

## License

Apache-2.0. See `LICENSE`.
