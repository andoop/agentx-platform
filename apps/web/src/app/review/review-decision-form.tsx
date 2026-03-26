"use client";

import { getMessages } from "../../lib/i18n";
import { useLocale } from "../locale-provider";
import { decideReviewAction } from "./actions";

export function ReviewDecisionForm({ reviewId }: { reviewId: string }) {
  const locale = useLocale();
  const t = getMessages(locale);

  return (
    <form action={decideReviewAction} style={{ display: "grid", gap: 10, marginTop: 12 }}>
      <input type="hidden" name="reviewId" value={reviewId} />
      <textarea
        name="notes"
        placeholder={t.review.notesPlaceholder}
        rows={3}
        style={{
          border: "1px solid #d1d5db",
          borderRadius: 10,
          fontSize: 14,
          padding: "10px 12px",
          width: "100%"
        }}
      />
      <div style={{ display: "flex", gap: 10 }}>
        <button
          type="submit"
          name="decision"
          value="approved"
          style={{
            background: "#166534",
            border: "none",
            borderRadius: 10,
            color: "#fff",
            cursor: "pointer",
            padding: "10px 14px"
          }}
        >
          {t.review.approve}
        </button>
        <button
          type="submit"
          name="decision"
          value="rejected"
          style={{
            background: "#991b1b",
            border: "none",
            borderRadius: 10,
            color: "#fff",
            cursor: "pointer",
            padding: "10px 14px"
          }}
        >
          {t.review.reject}
        </button>
      </div>
    </form>
  );
}
