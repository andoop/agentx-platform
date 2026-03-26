# MVP Delivery

[English](./mvp.md) | [简体中文](../../zh-CN/architecture/mvp.md)

## Milestone 1

- finish `artifact.yaml` and the Zod schema
- build Registry API modules for `catalog / publisher / governance / installer / authz`
- produce the initial PostgreSQL table design
- integrate the Prisma schema and the repository model that prefers database when configured and falls back to file persistence by default

## Milestone 2

- add CLI support for `login / search / info / install / publish / validate / sync / doctor / reviews / review`
- generate local adapter files for Cursor and Claude

## Milestone 3

- provide catalog, detail, publish form, review console, and settings page in the Web app
- expose the role matrix, audit entry points, and governance rules in the console
