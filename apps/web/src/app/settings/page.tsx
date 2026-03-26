import { PageShell, SectionCard } from "@agentx/ui";

import {
  exportPersistenceState,
  getAuditLogs,
  getMembers,
  getPersistenceBackups,
  getPersistenceInfo,
  requireCurrentActorFor
} from "../../lib/api";
import {
  formatDateTime,
  formatNumber,
  getMessages,
  localizeDisplayData,
  translateAuditAction,
  translateRole,
  translateRoleName
} from "../../lib/i18n";
import { getLocale } from "../../lib/i18n-server";
import { ChangeOwnPasswordForm, MemberCreateForm, MemberDisableForm, MemberResetPasswordForm, MemberUpdateForm } from "./member-forms";
import { PersistenceBackupForm, PersistenceExportLink, PersistenceImportForm } from "./persistence-forms";

export default async function SettingsPage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const current = await requireCurrentActorFor("/settings");
  if (!current.permissions.canAdmin) {
    return (
      <PageShell title={t.settings.title} subtitle={t.settings.subtitle}>
        <SectionCard title={t.settings.noAccess}>{t.settings.noPermission}</SectionCard>
      </PageShell>
    );
  }

  const auditLogs = await getAuditLogs();
  const members = await getMembers();
  const persistenceInfo = await getPersistenceInfo();
  const exportState = await exportPersistenceState();
  const backups = await getPersistenceBackups();
  const previewState = {
    ...exportState,
    members: exportState.members.map((member) =>
      typeof member === "object" && member !== null && "passwordHash" in member
        ? Object.fromEntries(Object.entries(member).filter(([key]) => key !== "passwordHash"))
        : member
    )
  };
  const localizedPreviewState = localizeDisplayData(previewState, locale);

  return (
    <PageShell title={t.settings.title} subtitle={t.settings.subtitle}>
      <SectionCard title={t.settings.roleMatrix}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th align="left">{t.common.role}</th>
              <th align="left">{t.common.permissions}</th>
            </tr>
          </thead>
          <tbody>
            {["viewer", "publisher", "reviewer", "admin"].map((role) => (
              <tr key={role}>
                <td style={{ borderTop: "1px solid #e5e7eb", padding: "10px 0" }}>{translateRoleName(role, locale)}</td>
                <td style={{ borderTop: "1px solid #e5e7eb", padding: "10px 0" }}>{translateRole(role, locale)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>

      <SectionCard title={t.settings.governance}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {t.settings.governanceRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title={t.settings.memberManagement}>
        <div style={{ display: "grid", gap: 16 }}>
          <div style={{ fontWeight: 600 }}>{t.settings.changePassword}</div>
          <ChangeOwnPasswordForm />
          <div style={{ fontWeight: 600 }}>{t.settings.newMember}</div>
          <MemberCreateForm />
          <div style={{ fontWeight: 600, marginTop: 8 }}>{t.settings.existingMembers}</div>
          {members.map((member) => (
            <div
              key={member.email}
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                display: "grid",
                gap: 12,
                padding: 14
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{member.email}</div>
                <div>{member.team}</div>
                <div>{member.roles.map((role) => translateRoleName(role, locale)).join(", ")}</div>
                <div>
                  {member.disabledAt
                    ? t.settings.memberDisabledAt(formatDateTime(member.disabledAt, locale))
                    : t.settings.memberStatus(t.common.active)}
                </div>
              </div>
              <MemberUpdateForm email={member.email} team={member.team} roles={member.roles} />
              <MemberResetPasswordForm email={member.email} />
              <MemberDisableForm email={member.email} disabled={Boolean(member.disabledAt)} />
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title={t.settings.persistence}>
        <div style={{ display: "grid", gap: 12 }}>
          <div>
            {t.settings.dataFile}: {persistenceInfo.dataFilePath}
          </div>
          <div>
            {t.settings.backupDir}: {persistenceInfo.backupDirectory}
          </div>
          <div>
            {locale === "zh"
              ? `资源 ${persistenceInfo.artifactCount} 个，审核 ${persistenceInfo.reviewCount} 条`
              : `${persistenceInfo.artifactCount} artifacts, ${persistenceInfo.reviewCount} reviews`}
          </div>
        </div>
      </SectionCard>

      <SectionCard title={t.settings.createBackup}>
        <PersistenceBackupForm />
      </SectionCard>

      <SectionCard title={t.settings.downloadExport}>
        <PersistenceExportLink />
      </SectionCard>

      <SectionCard title={t.settings.importState}>
        <PersistenceImportForm />
      </SectionCard>

      <SectionCard title={t.settings.backups}>
        <div style={{ display: "grid", gap: 12 }}>
          {backups.length === 0 ? (
            <div>{t.settings.noBackups}</div>
          ) : (
            backups.map((backup) => (
              <div
                key={backup.fileName}
                style={{
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: 14
                }}
              >
                <div style={{ fontWeight: 600 }}>{backup.fileName}</div>
                <div>{formatDateTime(backup.createdAt, locale)}</div>
                <div>
                  {formatNumber(backup.sizeBytes, locale)} {t.common.bytes}
                </div>
                <div>{backup.backupPath}</div>
              </div>
            ))
          )}
        </div>
      </SectionCard>

      <SectionCard title={t.settings.exportPreview}>
        <pre
          style={{
            background: "#111827",
            borderRadius: 12,
            color: "#f9fafb",
            maxHeight: 320,
            overflow: "auto",
            padding: 16
          }}
        >
          {JSON.stringify(localizedPreviewState, null, 2)}
        </pre>
      </SectionCard>

      <SectionCard title={t.settings.auditLogs}>
        <div style={{ display: "grid", gap: 12 }}>
          {auditLogs.length === 0 ? (
            <div>{t.settings.noAuditLogs}</div>
          ) : (
            auditLogs.slice(0, 10).map((log) => (
              <div
                key={log.id}
                style={{
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: 14
                }}
              >
                <div style={{ fontWeight: 600 }}>{translateAuditAction(log.action, locale)}</div>
                <div>{log.actor}</div>
                <div>{formatDateTime(log.createdAt, locale)}</div>
              </div>
            ))
          )}
        </div>
      </SectionCard>
    </PageShell>
  );
}
