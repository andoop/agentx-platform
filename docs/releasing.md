# Releasing AgentX

[English](./releasing.md) | [简体中文](./releasing.zh-CN.md)

## Scope

This guide covers the lightweight release process currently used for AgentX:

- npm package release for the CLI
- GitHub release creation
- changelog update

## Release Checklist

1. Make sure the working tree is clean.
2. Run the verification commands:

```bash
npm run typecheck
npm run build
npm run test
```

3. Update `CHANGELOG.md`.
4. Commit and push the release-related changes.
5. Publish the CLI package:

```bash
cd apps/cli
npm publish --access public --registry=https://registry.npmjs.org/
```

6. Create a GitHub release for the matching version tag.

## CLI Packaging Notes

- The published npm package is `agentc`.
- The primary CLI command is `agentc`.
- `agentx` is kept as a compatibility alias.

## Suggested Verification

After publishing, verify:

```bash
npm view agentc version --registry=https://registry.npmjs.org/
npm install -g agentc
agentc --help
agentx --help
```

## Future Improvements

- automate changelog generation
- automate npm publish and GitHub release creation
- attach release artifacts or checksums if needed
