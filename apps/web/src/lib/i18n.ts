export const localeCookieName = "agentx_locale";

export type Locale = "zh" | "en";

const messages = {
  zh: {
    nav: {
      docs: "文档",
      catalog: "目录",
      publish: "发布",
      review: "审核",
      settings: "设置"
    },
    language: {
      label: "语言",
      zh: "中文",
      en: "English"
    },
    common: {
      login: "登录",
      logout: "退出登录",
      loading: "处理中...",
      none: "无",
      yes: "是",
      no: "否",
      active: "启用中",
      disabled: "已禁用",
      version: "版本",
      submittedBy: "提交人",
      submittedAt: "提交时间",
      role: "角色",
      permissions: "权限",
      bytes: "字节"
    },
    home: {
      title: "AgentX 平台",
      subtitle: "统一管理团队内部的 MCP Server、Skill 和 Command。",
      heroBadge: "开源 AI Agent Artifact Registry",
      heroSummary: "把资源建模、审核治理、版本管理、分发安装和本地适配放进一条统一工作流。",
      primaryCta: "进入文档中心",
      secondaryCta: "浏览资源目录",
      overviewTitle: "平台概览",
      overviewBody: "这是 AgentX 的统一入口，支持用中英文查看界面，并覆盖目录、发布、审核和治理流程。",
      entryTitle: "核心入口",
      currentIdentity: "当前身份",
      browseCatalog: "浏览资源目录",
      publishArtifact: "发布新资源",
      reviewQueue: "处理审核队列",
      openSettings: "查看权限与审计",
      notLoggedIn: "尚未登录，请先进入登录页。",
      goLogin: "前往登录",
      languageDocsTitle: "语言与文档",
      languageDocsSubtitle: "界面和文档入口都支持中英文切换。",
      currentLanguage: "当前界面语言",
      docsLanguageSupport: "仓库文档提供英文与简体中文入口，适合外部开源访客和内部团队同时使用。",
      docsIndex: "查看文档总览",
      docsChinese: "查看中文文档入口",
      docsEnglish: "查看英文文档入口",
      switchLanguageHint: "你也可以使用顶部导航中的语言切换按钮立即切换界面语言。",
      quickStartTitle: "快速开始",
      quickStartSteps: [
        "登录工作台或直接浏览说明文档",
        "从目录里查看现有 MCP、Skill 和 Command",
        "通过发布页提交新资源并上传资源包",
        "在审核台完成批准，再用 CLI 安装到本地 agent"
      ],
      artifactTypesTitle: "统一管理的资源类型",
      artifactTypes: [
        {
          name: "MCP Server",
          description: "管理 stdio、HTTP、SSE 等 MCP 服务定义，并生成本地 agent 配置。"
        },
        {
          name: "Skill",
          description: "统一维护规则、提示词和技能说明，并下发到 Cursor / Claude Code。"
        },
        {
          name: "Command",
          description: "把 slash command、模板命令和工作流命令纳入版本和审核体系。"
        }
      ],
      featureTitle: "核心能力",
      featureCards: [
        {
          title: "统一 Registry",
          description: "用同一份 schema 和治理流程管理 MCP、Skill、Command。"
        },
        {
          title: "发布与审核",
          description: "从提交、审核到批准形成完整闭环，并记录审计日志。"
        },
        {
          title: "资源包分发",
          description: "manifest 和真实文件可以一起上传、存储、下载和安装。"
        },
        {
          title: "本地适配",
          description: "将批准后的资源落地到 Cursor 和 Claude Code 的真实目录结构。"
        }
      ]
    },
    docsPage: {
      title: "文档入口",
      subtitle: "统一查看仓库中的中英文说明文档和架构索引。",
      languageTitle: "语言切换",
      languageBody: "Web 界面支持中英文切换，仓库文档也提供中英文入口页。",
      docsHubTitle: "文档索引",
      docsHubBody: "建议从以下入口开始浏览仓库文档：",
      architectureTitle: "架构文档",
      architectureBody: "当前架构文档同时提供中文原文和英文镜像。",
      coreDocs: "核心文档",
      languageHubs: "语言入口",
      architectureDocs: "架构文档",
      audienceTitle: "按角色阅读",
      audienceCards: [
        {
          title: "首次了解项目",
          description: "先看 README 和语言入口页，快速理解产品定位、运行方式和文档结构。"
        },
        {
          title: "准备参与贡献",
          description: "重点查看 CONTRIBUTING、CODE_OF_CONDUCT、SECURITY 以及架构索引。"
        },
        {
          title: "准备自托管或二次开发",
          description: "优先查看架构文档、开发命令、持久化模型和 Docker Demo。"
        }
      ],
      nextStepsTitle: "建议阅读路径",
      nextSteps: [
        "先根据语言选择 English 或 简体中文入口",
        "再进入 README 了解整体能力和快速启动方式",
        "之后根据角色进入贡献、安全或架构文档"
      ],
      repoNoteTitle: "仓库说明",
      repoNoteBody: "当前 Web 文档中心主要充当导航页，实际详细文档仍维护在仓库 Markdown 文件中。"
    },
    identity: {
      demoLoginAlice: "演示登录 Alice",
      login: "登录",
      logout: "退出登录"
    },
    login: {
      title: "登录 AgentX",
      subtitle: "使用成员账号登录后访问目录、发布、审核和设置能力。",
      sectionTitle: "账号密码登录",
      email: "邮箱",
      password: "密码",
      login: "登录",
      loggingIn: "登录中...",
      loginAsAlice: "以 Alice 登录",
      loginAsBob: "以 Bob 登录",
      demoLoginFailed: "演示登录失败",
      loginFailed: "登录失败"
    },
    catalog: {
      title: "资源目录",
      subtitle: "统一查看团队内的 MCP、Skill 和 Command。",
      count: (count: number) => `已收录 ${count} 个资源`,
      version: "版本"
    },
    artifact: {
      overview: "概览",
      currentVersion: "当前版本",
      ownerTeam: "所属团队",
      reviewStatus: "审核状态",
      compatibility: "兼容性",
      dependenciesAndSecurity: "依赖与安全",
      dependencies: "依赖",
      risk: "风险",
      requiresApprovalToRun: "运行前审批",
      spec: "规格"
    },
    publish: {
      title: "发布向导",
      subtitle: "把 Skill、Command 或 MCP Server 提交到内部平台。",
      noAccess: "无权限访问",
      noPermission: "当前账号没有 `publisher` 权限，不能提交新资源。",
      flow: "发布流程",
      submitOnline: "在线提交",
      packageGuide: "资源包目录约定",
      template: "artifact.yaml 模板",
      steps: [
        "填写 artifact 基础信息和兼容性矩阵",
        "上传资源包目录，保留 skill、command 或 mcp 的真实内容",
        "声明依赖、风险级别和审批要求",
        "提交审核并进入审核队列"
      ],
      packageHints: [
        "`skill` 建议包含 `cursor/<slug>.mdc`、`claude/SKILL.md`。",
        "`command` 建议包含 `cursor/<slug>.md`、`claude/<slug>.md`。",
        "`mcp_server` 建议包含 `spec.entrypoint` 指向的脚本或二进制，例如 `bin/server.js`。"
      ],
      form: {
        submit: "提交审核",
        submitting: "提交中...",
        submitFailed: "提交失败，请重试",
        basicInfo: "基础信息",
        compatibilityAndSecurity: "兼容性与安全",
        artifactType: "资源类型",
        name: "名称",
        slug: "Slug",
        summary: "摘要",
        description: "描述",
        entrypoint: "入口文件",
        version: "版本",
        ownerTeam: "所属团队",
        visibility: "可见性",
        tags: "标签",
        labels: "标签键值",
        agents: "Agents",
        os: "操作系统",
        arch: "架构",
        riskLevel: "风险级别",
        allowedHosts: "允许访问的 Hosts",
        requiredSecrets: "必需 Secrets",
        requiresReview: "需要审核",
        requiresApprovalToRun: "运行前审批",
        skillConfig: "Skill 配置",
        skillConfigDescription: "逗号分隔的列表会被解析成数组。",
        skillFormat: "格式",
        skillTriggers: "触发方式",
        skillRequiredContext: "必需上下文",
        skillOutputTargets: "输出目标",
        commandConfig: "Command 配置",
        commandConfigDescription: "参数 schema 请输入 JSON 对象。",
        commandType: "命令类型",
        runtime: "运行时",
        executionMode: "执行模式",
        argumentsSchema: "参数 Schema",
        outputTemplate: "输出模板",
        mcpConfig: "MCP 配置",
        mcpConfigDescription: "环境变量请按每行一个 `KEY=value` 填写，参数列表使用逗号分隔。",
        transport: "传输方式",
        installMethod: "安装方式",
        startupArgs: "启动参数",
        envSchema: "环境变量 Schema",
        tools: "Tools",
        resources: "Resources",
        prompts: "Prompts",
        authType: "认证方式",
        authInstructions: "认证说明",
        healthcheck: "健康检查",
        package: "资源包",
        packageDirectory: "资源包目录",
        packageEmpty: "未上传资源包，平台将只保存 manifest 元数据。",
        packageSelected: (count: number) => `已选择 ${count} 个文件，发布时会作为资源包一起上传。`,
        uploadList: "上传清单"
      }
    },
    review: {
      title: "审核台",
      subtitle: "审批待发布资源，查看版本和风险。",
      noAccess: "无权限访问",
      noPermission: "当前账号没有 `reviewer` 权限。",
      count: (count: number) => `待处理 ${count} 条审核请求`,
      notesPlaceholder: "审批备注",
      approve: "批准",
      reject: "驳回"
    },
    settings: {
      title: "平台设置",
      subtitle: "查看角色模型、审计范围与治理策略。",
      noAccess: "无权限访问",
      noPermission: "当前账号没有 `admin` 权限。",
      roleMatrix: "角色矩阵",
      governance: "默认治理策略",
      governanceRules: [
        "所有资源先提交审核再发布",
        "包含本地执行的 command 需要更高审批级别",
        "skill 引用 shell command 时自动生成风险提示",
        "所有发布、审批、安装动作进入审计日志"
      ],
      memberManagement: "成员管理",
      changePassword: "修改我的密码",
      newMember: "新成员",
      existingMembers: "现有成员",
      memberDisabledAt: (value: string) => `已禁用：${value}`,
      memberStatus: (value: string) => `状态：${value}`,
      persistence: "持久化管理",
      persistenceUnavailable: "当前运行模式不支持持久化管理，只有文件模式可用。",
      dataFile: "数据文件",
      backupDir: "备份目录",
      createBackup: "创建备份",
      downloadExport: "下载导出",
      importState: "导入状态",
      backups: "备份列表",
      noBackups: "暂无备份",
      exportPreview: "导出快照预览",
      auditLogs: "最近审计记录",
      noAuditLogs: "暂无审计记录",
      createMember: "创建成员",
      creatingMember: "创建中...",
      updateMember: "更新成员",
      updatingMember: "更新中...",
      resetPassword: "重置密码",
      resettingPassword: "重置中...",
      enableMember: "启用成员",
      enablingMember: "启用中...",
      disableMember: "禁用成员",
      disablingMember: "禁用中...",
      currentPassword: "当前密码",
      newPassword: "新密码",
      changeMyPassword: "修改我的密码",
      emailPlaceholder: "charlie@internal",
      teamPlaceholder: "platform",
      rolesPlaceholder: "viewer,publisher",
      tempPasswordPlaceholder: "临时密码",
      newPasswordPlaceholder: "新密码",
      backupLabel: "备份标签",
      createBackupAction: "创建备份",
      importJson: "导入 JSON",
      importStateAction: "导入状态",
      downloadExportJson: "下载导出 JSON",
      memberCreated: "成员已创建",
      createMemberFailed: "创建成员失败",
      memberUpdated: "成员信息已更新",
      updateMemberFailed: "更新成员失败",
      passwordReset: "成员密码已重置",
      passwordResetFailed: "重置密码失败",
      memberDisabled: "成员已禁用",
      memberEnabled: "成员已启用",
      updateMemberStatusFailed: "更新成员状态失败",
      ownPasswordUpdated: "你的密码已更新",
      changePasswordFailed: "修改密码失败",
      importPayloadRequired: "必须填写导入内容"
    }
  },
  en: {
    nav: {
      docs: "Docs",
      catalog: "Catalog",
      publish: "Publish",
      review: "Review",
      settings: "Settings"
    },
    language: {
      label: "Language",
      zh: "中文",
      en: "English"
    },
    common: {
      login: "Login",
      logout: "Logout",
      loading: "Working...",
      none: "None",
      yes: "Yes",
      no: "No",
      active: "Active",
      disabled: "Disabled",
      version: "Version",
      submittedBy: "Submitted by",
      submittedAt: "Submitted at",
      role: "Role",
      permissions: "Permissions",
      bytes: "bytes"
    },
    home: {
      title: "AgentX Platform",
      subtitle: "A unified place to manage internal MCP servers, skills, and commands.",
      heroBadge: "Open-source AI Agent Artifact Registry",
      heroSummary: "Bring resource modeling, governance review, versioning, package distribution, and local adapters into one workflow.",
      primaryCta: "Open docs center",
      secondaryCta: "Browse catalog",
      overviewTitle: "Platform Overview",
      overviewBody: "This is the main AgentX landing page, with a bilingual UI and direct access to catalog, publishing, review, and governance flows.",
      entryTitle: "Main Entry Points",
      currentIdentity: "Current identity",
      browseCatalog: "Browse catalog",
      publishArtifact: "Publish a resource",
      reviewQueue: "Review pending requests",
      openSettings: "Open settings and audit",
      notLoggedIn: "You are not signed in yet. Please open the login page first.",
      goLogin: "Go to login",
      languageDocsTitle: "Language And Docs",
      languageDocsSubtitle: "Both the interface and documentation entry points support English and Simplified Chinese.",
      currentLanguage: "Current interface language",
      docsLanguageSupport:
        "Repository documentation now exposes both English and Simplified Chinese entry points for open-source visitors and internal teams.",
      docsIndex: "Open docs index",
      docsChinese: "Open Chinese docs hub",
      docsEnglish: "Open English docs hub",
      switchLanguageHint: "You can also switch the interface language immediately with the language buttons in the top navigation.",
      quickStartTitle: "Quick Start",
      quickStartSteps: [
        "Sign in to the console or start from the documentation hubs",
        "Browse existing MCPs, skills, and commands in the catalog",
        "Submit a new artifact and upload its package from the publish page",
        "Approve it in the review console, then install it locally with the CLI"
      ],
      artifactTypesTitle: "Artifact Types",
      artifactTypes: [
        {
          name: "MCP Server",
          description: "Manage stdio, HTTP, and SSE MCP definitions and generate local agent configuration."
        },
        {
          name: "Skill",
          description: "Maintain rules, prompts, and skill instructions and distribute them to Cursor and Claude Code."
        },
        {
          name: "Command",
          description: "Bring slash commands, templates, and workflow commands under versioning and review."
        }
      ],
      featureTitle: "Core Capabilities",
      featureCards: [
        {
          title: "Unified Registry",
          description: "Manage MCPs, skills, and commands with one schema and one governance path."
        },
        {
          title: "Publish And Review",
          description: "Move from submission to approval with a full audit trail."
        },
        {
          title: "Package Distribution",
          description: "Upload, store, download, and install manifests together with real artifact files."
        },
        {
          title: "Local Adapters",
          description: "Materialize approved artifacts into the real directory layout for Cursor and Claude Code."
        }
      ]
    },
    docsPage: {
      title: "Docs Entry",
      subtitle: "Browse the bilingual repository docs and architecture indexes from one place.",
      languageTitle: "Language Switching",
      languageBody: "The Web interface supports English and Simplified Chinese, and the repository docs now expose bilingual entry pages as well.",
      docsHubTitle: "Documentation Indexes",
      docsHubBody: "Start from these repository documentation entry points:",
      architectureTitle: "Architecture Docs",
      architectureBody: "The current architecture docs ship with Chinese originals and English mirrors.",
      coreDocs: "Core docs",
      languageHubs: "Language hubs",
      architectureDocs: "Architecture docs",
      audienceTitle: "Read By Role",
      audienceCards: [
        {
          title: "First-time visitors",
          description: "Start with the README and the language hubs to understand the product, runtime flow, and documentation layout."
        },
        {
          title: "Contributors",
          description: "Focus on CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, and the architecture indexes."
        },
        {
          title: "Operators and builders",
          description: "Prioritize architecture docs, development commands, persistence notes, and the Docker demo."
        }
      ],
      nextStepsTitle: "Suggested Reading Path",
      nextSteps: [
        "Choose the English or Simplified Chinese documentation hub first",
        "Then read the README for product scope and quick start guidance",
        "Move into contribution, security, or architecture docs based on your role"
      ],
      repoNoteTitle: "Repository Note",
      repoNoteBody: "The Web docs center currently acts as a navigation layer. The detailed docs remain maintained as Markdown files in the repository."
    },
    identity: {
      demoLoginAlice: "Demo login as Alice",
      login: "Login",
      logout: "Logout"
    },
    login: {
      title: "Sign in to AgentX",
      subtitle: "Sign in with a member account to access catalog, publish, review, and settings.",
      sectionTitle: "Email and password",
      email: "Email",
      password: "Password",
      login: "Sign in",
      loggingIn: "Signing in...",
      loginAsAlice: "Sign in as Alice",
      loginAsBob: "Sign in as Bob",
      demoLoginFailed: "Demo sign-in failed",
      loginFailed: "Sign-in failed"
    },
    catalog: {
      title: "Catalog",
      subtitle: "Browse MCPs, skills, and commands across the workspace.",
      count: (count: number) => `${count} resources indexed`,
      version: "Version"
    },
    artifact: {
      overview: "Overview",
      currentVersion: "Current version",
      ownerTeam: "Owner team",
      reviewStatus: "Review status",
      compatibility: "Compatibility",
      dependenciesAndSecurity: "Dependencies and security",
      dependencies: "Dependencies",
      risk: "Risk",
      requiresApprovalToRun: "Requires approval to run",
      spec: "Spec"
    },
    publish: {
      title: "Publishing Guide",
      subtitle: "Submit a skill, command, or MCP server to the internal platform.",
      noAccess: "Access denied",
      noPermission: "The current account does not have the `publisher` permission.",
      flow: "Publishing flow",
      submitOnline: "Online submission",
      packageGuide: "Package layout guide",
      template: "artifact.yaml template",
      steps: [
        "Fill in basic artifact information and the compatibility matrix",
        "Upload the package directory with the real skill, command, or MCP content",
        "Declare dependencies, risk level, and approval requirements",
        "Submit for review and enter the review queue"
      ],
      packageHints: [
        "`skill` should usually include `cursor/<slug>.mdc` and `claude/SKILL.md`.",
        "`command` should usually include `cursor/<slug>.md` and `claude/<slug>.md`.",
        "`mcp_server` should include the script or binary referenced by `spec.entrypoint`, such as `bin/server.js`."
      ],
      form: {
        submit: "Submit for review",
        submitting: "Submitting...",
        submitFailed: "Submission failed. Please try again.",
        basicInfo: "Basic information",
        compatibilityAndSecurity: "Compatibility and security",
        artifactType: "Artifact type",
        name: "Name",
        slug: "Slug",
        summary: "Summary",
        description: "Description",
        entrypoint: "Entrypoint",
        version: "Version",
        ownerTeam: "Owner team",
        visibility: "Visibility",
        tags: "Tags",
        labels: "Labels",
        agents: "Agents",
        os: "OS",
        arch: "Arch",
        riskLevel: "Risk level",
        allowedHosts: "Allowed hosts",
        requiredSecrets: "Required secrets",
        requiresReview: "Requires review",
        requiresApprovalToRun: "Approval before run",
        skillConfig: "Skill configuration",
        skillConfigDescription: "Comma-separated lists are parsed into arrays.",
        skillFormat: "Format",
        skillTriggers: "Triggers",
        skillRequiredContext: "Required context",
        skillOutputTargets: "Output targets",
        commandConfig: "Command configuration",
        commandConfigDescription: "Arguments schema must be a JSON object.",
        commandType: "Command type",
        runtime: "Runtime",
        executionMode: "Execution mode",
        argumentsSchema: "Arguments schema",
        outputTemplate: "Output template",
        mcpConfig: "MCP configuration",
        mcpConfigDescription: "Environment variables should use one `KEY=value` per line. Lists use commas.",
        transport: "Transport",
        installMethod: "Install method",
        startupArgs: "Startup args",
        envSchema: "Environment variable schema",
        tools: "Tools",
        resources: "Resources",
        prompts: "Prompts",
        authType: "Auth type",
        authInstructions: "Auth instructions",
        healthcheck: "Healthcheck",
        package: "Package",
        packageDirectory: "Package directory",
        packageEmpty: "No package uploaded. Only manifest metadata will be saved.",
        packageSelected: (count: number) => `${count} files selected and will be uploaded with the artifact.`,
        uploadList: "Upload list"
      }
    },
    review: {
      title: "Review Console",
      subtitle: "Review pending submissions and inspect version and risk.",
      noAccess: "Access denied",
      noPermission: "The current account does not have the `reviewer` permission.",
      count: (count: number) => `${count} review requests pending`,
      notesPlaceholder: "Review notes",
      approve: "Approve",
      reject: "Reject"
    },
    settings: {
      title: "Platform Settings",
      subtitle: "Inspect the role model, audit scope, and governance policy.",
      noAccess: "Access denied",
      noPermission: "The current account does not have the `admin` permission.",
      roleMatrix: "Role matrix",
      governance: "Default governance policy",
      governanceRules: [
        "All resources must go through review before publishing",
        "Commands with local execution require a higher approval level",
        "A risk warning is generated automatically when a skill references a shell command",
        "All publish, review, and install actions are recorded in the audit log"
      ],
      memberManagement: "Member management",
      changePassword: "Change my password",
      newMember: "New member",
      existingMembers: "Existing members",
      memberDisabledAt: (value: string) => `Disabled at: ${value}`,
      memberStatus: (value: string) => `Status: ${value}`,
      persistence: "Persistence",
      persistenceUnavailable: "Persistence admin is unavailable in the current runtime mode. File mode is required.",
      dataFile: "Data file",
      backupDir: "Backup directory",
      createBackup: "Create backup",
      downloadExport: "Download export",
      importState: "Import state",
      backups: "Backups",
      noBackups: "No backups yet",
      exportPreview: "Export preview",
      auditLogs: "Recent audit logs",
      noAuditLogs: "No audit logs yet",
      createMember: "Create member",
      creatingMember: "Creating...",
      updateMember: "Update member",
      updatingMember: "Updating...",
      resetPassword: "Reset password",
      resettingPassword: "Resetting...",
      enableMember: "Enable member",
      enablingMember: "Enabling...",
      disableMember: "Disable member",
      disablingMember: "Disabling...",
      currentPassword: "Current password",
      newPassword: "New password",
      changeMyPassword: "Change my password",
      emailPlaceholder: "charlie@internal",
      teamPlaceholder: "platform",
      rolesPlaceholder: "viewer,publisher",
      tempPasswordPlaceholder: "temporary-password",
      newPasswordPlaceholder: "new-password",
      backupLabel: "Backup label",
      createBackupAction: "Create backup",
      importJson: "Import JSON",
      importStateAction: "Import state",
      downloadExportJson: "Download export JSON",
      memberCreated: "Member created",
      createMemberFailed: "Failed to create member",
      memberUpdated: "Member updated",
      updateMemberFailed: "Failed to update member",
      passwordReset: "Member password reset",
      passwordResetFailed: "Failed to reset password",
      memberDisabled: "Member disabled",
      memberEnabled: "Member enabled",
      updateMemberStatusFailed: "Failed to update member status",
      ownPasswordUpdated: "Your password has been updated",
      changePasswordFailed: "Failed to change password",
      importPayloadRequired: "Import payload is required"
    }
  }
} as const;

export function normalizeLocale(value?: string | null): Locale {
  return value === "en" ? "en" : "zh";
}

export function getMessages(locale: Locale) {
  return messages[locale];
}

export function translateArtifactKind(kind: string, locale: Locale): string {
  const zh: Record<string, string> = {
    skill: "技能",
    command: "命令",
    mcp_server: "MCP 服务"
  };
  const en: Record<string, string> = {
    skill: "Skill",
    command: "Command",
    mcp_server: "MCP Server"
  };

  return (locale === "zh" ? zh : en)[kind] ?? kind;
}

export function translateVisibility(value: string, locale: Locale): string {
  const zh: Record<string, string> = {
    workspace: "工作区可见",
    private: "私有"
  };
  const en: Record<string, string> = {
    workspace: "Workspace",
    private: "Private"
  };

  return (locale === "zh" ? zh : en)[value] ?? value;
}

export function translateRiskLevel(value: string, locale: Locale): string {
  const zh: Record<string, string> = {
    low: "低",
    medium: "中",
    high: "高",
    restricted: "受限"
  };
  const en: Record<string, string> = {
    low: "Low",
    medium: "Medium",
    high: "High",
    restricted: "Restricted"
  };

  return (locale === "zh" ? zh : en)[value] ?? value;
}

export function translateStatus(status: string, locale: Locale): string {
  const zh: Record<string, string> = {
    draft: "草稿",
    pending: "待审核",
    approved: "已批准",
    rejected: "已驳回",
    active: "启用中",
    deprecated: "已弃用"
  };
  const en: Record<string, string> = {
    draft: "Draft",
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    active: "Active",
    deprecated: "Deprecated"
  };

  return (locale === "zh" ? zh : en)[status] ?? status;
}

export function translateRoleName(role: string, locale: Locale): string {
  const zh: Record<string, string> = {
    viewer: "查看者",
    publisher: "发布者",
    reviewer: "审核者",
    admin: "管理员"
  };
  const en: Record<string, string> = {
    viewer: "Viewer",
    publisher: "Publisher",
    reviewer: "Reviewer",
    admin: "Admin"
  };

  return (locale === "zh" ? zh : en)[role] ?? role;
}

export function translateRole(role: string, locale: Locale): string {
  const zh: Record<string, string> = {
    viewer: "查看目录、详情和安装说明",
    publisher: "创建草稿、提交版本并查看自己的发布记录",
    reviewer: "审批和驳回审核请求",
    admin: "管理权限、弃用资源并查看审计日志"
  };
  const en: Record<string, string> = {
    viewer: "Browse catalog, details, and install instructions",
    publisher: "Create drafts, submit versions, and view owned releases",
    reviewer: "Approve and reject review requests",
    admin: "Manage permissions, deprecate resources, and inspect audit logs"
  };

  return (locale === "zh" ? zh : en)[role] ?? role;
}

export function translateCommandType(value: string, locale: Locale): string {
  const zh: Record<string, string> = {
    slash: "斜杠命令",
    template: "模板",
    workflow: "工作流"
  };
  const en: Record<string, string> = {
    slash: "Slash",
    template: "Template",
    workflow: "Workflow"
  };

  return (locale === "zh" ? zh : en)[value] ?? value;
}

export function translateSkillTrigger(value: string, locale: Locale): string {
  const zh: Record<string, string> = {
    manual: "手动",
    rule_match: "规则匹配",
    recommended: "推荐"
  };
  const en: Record<string, string> = {
    manual: "Manual",
    rule_match: "Rule match",
    recommended: "Recommended"
  };

  return (locale === "zh" ? zh : en)[value] ?? value;
}

export function translateRuntime(value: string, locale: Locale): string {
  const zh: Record<string, string> = {
    none: "无",
    shell: "Shell",
    node: "Node.js",
    python: "Python",
    http: "HTTP"
  };
  const en: Record<string, string> = {
    none: "None",
    shell: "Shell",
    node: "Node.js",
    python: "Python",
    http: "HTTP"
  };

  return (locale === "zh" ? zh : en)[value] ?? value;
}

export function translateExecutionMode(value: string, locale: Locale): string {
  const zh: Record<string, string> = {
    readonly: "只读",
    executable: "可执行",
    local_exec: "本地执行",
    approval_required: "需要审批"
  };
  const en: Record<string, string> = {
    readonly: "Read-only",
    executable: "Executable",
    local_exec: "Local exec",
    approval_required: "Approval required"
  };

  return (locale === "zh" ? zh : en)[value] ?? value;
}

export function translateTransport(value: string, locale: Locale): string {
  const zh: Record<string, string> = {
    stdio: "标准输入输出",
    http: "HTTP",
    sse: "SSE"
  };
  const en: Record<string, string> = {
    stdio: "stdio",
    http: "HTTP",
    sse: "SSE"
  };

  return (locale === "zh" ? zh : en)[value] ?? value;
}

export function translateInstallMethod(value: string, locale: Locale): string {
  const zh: Record<string, string> = {
    npm: "npm",
    docker: "Docker",
    python: "Python",
    binary: "二进制",
    custom: "自定义"
  };
  const en: Record<string, string> = {
    npm: "npm",
    docker: "Docker",
    python: "Python",
    binary: "Binary",
    custom: "Custom"
  };

  return (locale === "zh" ? zh : en)[value] ?? value;
}

export function translateAuthType(value: string, locale: Locale): string {
  const zh: Record<string, string> = {
    none: "无",
    api_key: "API Key",
    oauth: "OAuth",
    custom: "自定义"
  };
  const en: Record<string, string> = {
    none: "None",
    api_key: "API Key",
    oauth: "OAuth",
    custom: "Custom"
  };

  return (locale === "zh" ? zh : en)[value] ?? value;
}

export function formatDateTime(value: string, locale: Locale): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

export function formatNumber(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "zh" ? "zh-CN" : "en-US").format(value);
}

export function translateBoolean(value: boolean, locale: Locale): string {
  const t = getMessages(locale);
  return value ? t.common.yes : t.common.no;
}

export function translateAuditAction(action: string, locale: Locale): string {
  const zh: Record<string, string> = {
    "artifact.submitted": "资源已提交",
    "artifact.install_plan.generated": "已生成安装计划",
    "review.approved": "审核已批准",
    "review.rejected": "审核已驳回",
    "member.created": "成员已创建",
    "member.updated": "成员已更新",
    "member.password_reset": "成员密码已重置",
    "member.password_changed": "成员密码已修改",
    "member.disabled": "成员已禁用",
    "member.enabled": "成员已启用",
    "auth.login.failed": "登录失败",
    "auth.login.succeeded": "登录成功"
  };
  const en: Record<string, string> = {
    "artifact.submitted": "Artifact submitted",
    "artifact.install_plan.generated": "Install plan generated",
    "review.approved": "Review approved",
    "review.rejected": "Review rejected",
    "member.created": "Member created",
    "member.updated": "Member updated",
    "member.password_reset": "Member password reset",
    "member.password_changed": "Password changed",
    "member.disabled": "Member disabled",
    "member.enabled": "Member enabled",
    "auth.login.failed": "Login failed",
    "auth.login.succeeded": "Login succeeded"
  };

  return (locale === "zh" ? zh : en)[action] ?? action;
}

export function translateApiErrorMessage(message: string, locale: Locale): string {
  const memberExists = message.match(/^Member (.+) already exists$/);
  if (memberExists) {
    return locale === "zh" ? `成员 ${memberExists[1]} 已存在` : `Member ${memberExists[1]} already exists`;
  }

  const memberNotFound = message.match(/^Member (.+) not found$/);
  if (memberNotFound) {
    return locale === "zh" ? `成员 ${memberNotFound[1]} 不存在` : `Member ${memberNotFound[1]} not found`;
  }

  const reviewNotFound = message.match(/^Review (.+) not found$/);
  if (reviewNotFound) {
    return locale === "zh" ? `审核请求 ${reviewNotFound[1]} 不存在` : `Review ${reviewNotFound[1]} not found`;
  }

  const requestFailed = message.match(/^Request failed with status (\d+)$/);
  if (requestFailed) {
    return locale === "zh" ? `请求失败，状态码 ${requestFailed[1]}` : `Request failed with status ${requestFailed[1]}`;
  }

  const unsafePackage = message.match(/^Unsafe package path: (.+)$/);
  if (unsafePackage) {
    return locale === "zh" ? `资源包路径不安全：${unsafePackage[1]}` : `Unsafe package path: ${unsafePackage[1]}`;
  }

  const mustBeJsonObject = message.match(/^(.+) 必须是 JSON object$/);
  if (mustBeJsonObject) {
    return locale === "zh" ? `${mustBeJsonObject[1]} 必须是 JSON 对象` : `${mustBeJsonObject[1]} must be a JSON object`;
  }

  const mustBeKeyValue = message.match(/^(.+) 的每一行都必须是 KEY=value$/);
  if (mustBeKeyValue) {
    return locale === "zh"
      ? `${mustBeKeyValue[1]} 的每一行都必须是 KEY=value`
      : `Each line in ${mustBeKeyValue[1]} must use KEY=value`;
  }

  const exactMessages =
    locale === "zh"
      ? {
          "At least one admin member must remain": "至少需要保留一名管理员成员",
          "At least one active admin member must remain": "至少需要保留一名启用中的管理员成员",
          "Disabled members cannot change password": "已禁用成员不能修改密码",
          "Current password is incorrect": "当前密码不正确",
          "Persistence admin endpoints are only available in file mode": "持久化管理接口仅在文件模式下可用",
          "Uploaded package file metadata is inconsistent": "上传的资源包文件元数据不一致"
        }
      : {
          "At least one admin member must remain": "At least one admin member must remain",
          "At least one active admin member must remain": "At least one active admin member must remain",
          "Disabled members cannot change password": "Disabled members cannot change password",
          "Current password is incorrect": "Current password is incorrect",
          "Persistence admin endpoints are only available in file mode":
            "Persistence admin endpoints are only available in file mode",
          "Uploaded package file metadata is inconsistent": "Uploaded package file metadata is inconsistent"
        };

  return exactMessages[message as keyof typeof exactMessages] ?? message;
}

export function localizeDisplayData(
  value: unknown,
  locale: Locale,
  key?: string,
  parentKey?: string
): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => localizeDisplayData(item, locale, key, parentKey));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([childKey, childValue]) => [
        childKey,
        localizeDisplayData(childValue, locale, childKey, key)
      ])
    );
  }

  if (typeof value === "boolean") {
    if (key === "requiresReview" || key === "requiresApprovalToRun" || key === "disabled") {
      return translateBoolean(value, locale);
    }
    return value;
  }

  if (typeof value !== "string") {
    return value;
  }

  if (key === "kind") {
    return translateArtifactKind(value, locale);
  }

  if (key === "type") {
    if (parentKey === "auth") {
      return translateAuthType(value, locale);
    }
    return translateArtifactKind(value, locale);
  }

  if (key === "status" || key === "decision") {
    return translateStatus(value, locale);
  }

  if (key === "visibility") {
    return translateVisibility(value, locale);
  }

  if (key === "riskLevel") {
    return translateRiskLevel(value, locale);
  }

  if (key === "action") {
    return translateAuditAction(value, locale);
  }

  if (key === "commandType") {
    return translateCommandType(value, locale);
  }

  if (key === "runtime") {
    return translateRuntime(value, locale);
  }

  if (key === "executionMode") {
    return translateExecutionMode(value, locale);
  }

  if (key === "transport") {
    return translateTransport(value, locale);
  }

  if (key === "installMethod") {
    return translateInstallMethod(value, locale);
  }

  if (key === "format") {
    return value === "custom" ? (locale === "zh" ? "自定义" : "Custom") : value;
  }

  if (key === "triggers") {
    return translateSkillTrigger(value, locale);
  }

  if (key === "roles") {
    return translateRoleName(value, locale);
  }

  return value;
}
