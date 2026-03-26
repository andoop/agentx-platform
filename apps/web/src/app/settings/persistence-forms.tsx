"use client";

import { getMessages } from "../../lib/i18n";
import { useLocale } from "../locale-provider";
import { backupPersistenceAction, importPersistenceAction } from "./actions";

const inputStyle = {
  border: "1px solid #d1d5db",
  borderRadius: 10,
  fontSize: 14,
  padding: "10px 12px",
  width: "100%"
} as const;

export function PersistenceBackupForm() {
  const locale = useLocale();
  const t = getMessages(locale);

  return (
    <form action={backupPersistenceAction} style={{ display: "grid", gap: 10 }}>
      <label htmlFor="backup-label">{t.settings.backupLabel}</label>
      <input id="backup-label" name="label" placeholder="before-migration" style={inputStyle} />
      <button
        type="submit"
        style={{
          background: "#111827",
          border: "none",
          borderRadius: 10,
          color: "#fff",
          cursor: "pointer",
          padding: "10px 14px"
        }}
      >
        {t.settings.createBackupAction}
      </button>
    </form>
  );
}

export function PersistenceImportForm() {
  const locale = useLocale();
  const t = getMessages(locale);

  return (
    <form action={importPersistenceAction} style={{ display: "grid", gap: 10 }}>
      <label htmlFor="import-payload">{t.settings.importJson}</label>
      <textarea
        id="import-payload"
        name="payload"
        placeholder='{"artifacts":[],"reviews":[],"installs":[],"auditLogs":[],"members":[]}'
        rows={12}
        style={inputStyle}
      />
      <button
        type="submit"
        style={{
          background: "#1d4ed8",
          border: "none",
          borderRadius: 10,
          color: "#fff",
          cursor: "pointer",
          padding: "10px 14px"
        }}
      >
        {t.settings.importStateAction}
      </button>
    </form>
  );
}

export function PersistenceExportLink() {
  const locale = useLocale();
  const t = getMessages(locale);

  return (
    <a
      href="/settings/export"
      style={{
        background: "#047857",
        borderRadius: 10,
        color: "#fff",
        display: "inline-block",
        padding: "10px 14px",
        textDecoration: "none"
      }}
    >
      {t.settings.downloadExportJson}
    </a>
  );
}
