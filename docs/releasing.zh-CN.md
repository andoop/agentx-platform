# AgentX 发布指南

[English](./releasing.md) | [简体中文](./releasing.zh-CN.md)

## 范围

这份文档说明 AgentX 当前采用的轻量发布流程：

- CLI 的 npm 包发布
- GitHub Release 创建
- 更新日志维护

## 发布检查清单

1. 确保工作区干净。
2. 运行以下验证命令：

```bash
npm run typecheck
npm run build
npm run test
```

3. 更新 `CHANGELOG.md`。
4. 提交并推送本次发布相关改动。
5. 发布 CLI 包：

```bash
cd apps/cli
npm publish --access public --registry=https://registry.npmjs.org/
```

6. 为对应版本创建 GitHub Release。

## CLI 打包说明

- 发布到 npm 的包名是 `agentc`
- 主 CLI 命令是 `agentc`
- `agentx` 保留为兼容别名

## 建议验证

发布后建议验证：

```bash
npm view agentc version --registry=https://registry.npmjs.org/
npm install -g agentc
agentc --help
agentx --help
```

## 后续可继续完善

- 自动生成 changelog
- 自动化 npm 发布与 GitHub Release 创建
- 如有需要，为 release 附加制品或校验信息
