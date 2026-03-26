# AgentX Architecture

[简体中文](./overview.md) | [English](./overview.en.md)

Canonical path: `docs/en/architecture/overview.md`

## Goals

- unify the artifact model for `MCP Server`, `Skill`, and `Command`
- connect the full distribution path across `Web + API + CLI + Local Adapter`
- provide versioning, review, access control, and audit governance for internal teams

## Monorepo Layout

- `apps/api`: Fastify Registry API
- `apps/web`: Next.js management console
- `apps/cli`: command-line workflows
- `packages/schema`: Zod schema and domain types
- `packages/config`: `artifact.yaml` parsing and templates
- `packages/sdk`: shared API client
- `packages/ui`: shared management console components

## Persistence

- lowdb file repository is the default so local development and demos work without a database and survive restarts
- the default data file path is `apps/api/.data/agentx.json`
- export, import, and backup are available through API and CLI
- when `DATABASE_URL` is configured, the repository switches to Prisma/Postgres
- the Prisma schema lives at `apps/api/prisma/schema.prisma`
- the runtime still uses the same `ArtifactRepository` interface so business logic stays storage-agnostic

## Runtime Flow

1. A publisher creates `artifact.yaml` through CLI or Web.
2. The Registry API validates the schema and creates a review request.
3. A reviewer changes artifact status through Web or CLI.
4. The API repository manages artifact, review, and audit state through a unified interface.
5. A developer uses the CLI to build an install plan and sync files into the local agent directory.
