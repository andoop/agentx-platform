# Security Policy

[English](./SECURITY.md) | [简体中文](./SECURITY.zh-CN.md)

## Supported Versions

AgentX is still in early development.

At the moment, only the latest development line is considered supported for security fixes:

| Version | Supported |
| --- | --- |
| `0.1.x` | Yes |
| `< 0.1.0` | No |

## Reporting A Vulnerability

Please do not report security vulnerabilities through public GitHub issues.

Instead, please use one of these private channels:

- GitHub private vulnerability reporting, if enabled for the repository
- direct contact with the repository maintainers through a private channel

When reporting a vulnerability, please include:

- affected component or feature
- reproduction steps or proof of concept
- impact assessment
- any suggested remediation if available

We will try to:

- acknowledge the report promptly
- validate the issue
- determine severity and scope
- prepare and ship a fix when appropriate
- disclose the fix responsibly once users have time to update

## Scope

Security reports are especially helpful for issues involving:

- authentication and authorization
- JWT handling and session behavior
- package upload and extraction
- local install path handling
- arbitrary command execution
- persistence import and export flows
- dependency or supply-chain risks

## Development Notes

This project currently ships with demo credentials and local development defaults for convenience. They are documented for local testing only and must not be treated as production-safe defaults.

Production deployments should, at minimum, set:

```bash
AGENTX_JWT_SECRET="change-me-in-production"
AGENTX_DEMO_PASSWORD="replace-demo-password"
```
