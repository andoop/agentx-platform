import type { PropsWithChildren, ReactNode } from "react";

export function PageShell({ title, subtitle, children }: PropsWithChildren<{ title: string; subtitle?: string }>) {
  return (
    <main style={{ fontFamily: "sans-serif", margin: "0 auto", maxWidth: 1120, padding: 32 }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>{title}</h1>
        {subtitle ? <p style={{ color: "#666", margin: 0 }}>{subtitle}</p> : null}
      </header>
      {children}
    </main>
  );
}

export function SectionCard({
  title,
  action,
  children
}: PropsWithChildren<{ title: string; action?: ReactNode }>) {
  return (
    <section
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        background: "#fff"
      }}
    >
      <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 style={{ fontSize: 18, margin: 0 }}>{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export function Badge({ children }: PropsWithChildren) {
  return (
    <span
      style={{
        background: "#eff6ff",
        borderRadius: 999,
        color: "#1d4ed8",
        display: "inline-block",
        fontSize: 12,
        fontWeight: 600,
        padding: "4px 10px"
      }}
    >
      {children}
    </span>
  );
}
