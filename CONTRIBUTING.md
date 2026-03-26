# Contributing to AgentX

[English](./CONTRIBUTING.md) | [简体中文](./CONTRIBUTING.zh-CN.md)

Thanks for your interest in contributing to AgentX.

We are building AgentX as an open-source platform for managing and distributing AI agent artifacts such as `MCP Server`, `Skill`, and `Command`.

## Before You Start

- Read `README.md` for the product overview and current project status.
- Read `CODE_OF_CONDUCT.md` before participating in issues, discussions, or pull requests.
- If you are reporting a security issue, do not open a public issue. Follow `SECURITY.md` instead.
- If you are preparing a package or project release, follow `docs/releasing.md`.

## Development Setup

Requirements:

- Node.js `>= 20`
- npm `>= 10`

Install dependencies:

```bash
npm install
```

Run the main apps:

```bash
npm run dev:api
npm run dev:web
```

Useful checks:

```bash
npm run typecheck
npm run build
```

## Project Layout

- `apps/api`: Fastify Registry API
- `apps/web`: Next.js management console
- `apps/cli`: packaged CLI
- `packages/schema`: shared domain model and validation
- `packages/config`: manifest parsing and template helpers
- `packages/sdk`: API client
- `packages/ui`: shared UI components

## Contribution Areas

We especially welcome contributions in:

- documentation and examples
- artifact schema improvements
- Web console UX
- CLI workflows
- Cursor / Claude adapters
- governance and review flows
- automated testing and CI
- deployment and self-hosting

## Pull Request Guidelines

Please keep pull requests focused.

Good pull requests usually:

- solve one problem well
- include clear reasoning in the description
- keep naming and behavior consistent with the existing codebase
- update docs when behavior changes
- include tests when practical

Before opening a pull request:

```bash
npm run typecheck
npm run build
```

## Coding Expectations

- Prefer TypeScript-first changes.
- Keep behavior explicit and easy to review.
- Avoid breaking public behavior without documenting it.
- If you introduce user-facing workflow changes, update `README.md`.
- If a new behavior affects contributors or operators, update docs under `docs/`.

## Issues And Discussions

When opening an issue, please include:

- what you expected to happen
- what actually happened
- reproduction steps
- environment details if relevant

Feature requests are most helpful when they include:

- the target user
- the current pain point
- the desired workflow
- why existing behavior is insufficient

## Contributor License

By submitting a contribution, you agree that your contribution may be distributed under the repository license.
