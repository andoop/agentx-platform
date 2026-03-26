import { Badge, PageShell, SectionCard } from "@agentx/ui";

import { getReviewQueue, requireCurrentActorFor } from "../../lib/api";
import { formatDateTime, getMessages, translateStatus } from "../../lib/i18n";
import { getLocale } from "../../lib/i18n-server";
import { ReviewDecisionForm } from "./review-decision-form";

export default async function ReviewPage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const current = await requireCurrentActorFor("/review");
  if (!current.permissions.canReview) {
    return (
      <PageShell title={t.review.title} subtitle={t.review.subtitle}>
        <SectionCard title={t.review.noAccess}>{t.review.noPermission}</SectionCard>
      </PageShell>
    );
  }

  const queue = await getReviewQueue();

  return (
    <PageShell title={t.review.title} subtitle={t.review.subtitle}>
      <SectionCard title={t.review.count(queue.length)}>
        <div style={{ display: "grid", gap: 16 }}>
          {queue.map((review) => (
            <div
              key={review.id}
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: 16
              }}
            >
              <div style={{ alignItems: "center", display: "flex", gap: 12, marginBottom: 8 }}>
                <strong>{review.artifactId}</strong>
                <Badge>{translateStatus(review.status, locale)}</Badge>
              </div>
              <div>
                {t.common.version}: {review.version}
              </div>
              <div>
                {t.common.submittedBy}: {review.submittedBy}
              </div>
              <div>
                {t.common.submittedAt}: {formatDateTime(review.submittedAt, locale)}
              </div>
              <ReviewDecisionForm reviewId={review.id} />
            </div>
          ))}
        </div>
      </SectionCard>
    </PageShell>
  );
}
