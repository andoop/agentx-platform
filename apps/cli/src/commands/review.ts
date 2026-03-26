import { AgentXClient } from "@agentx/sdk";

import { loadSession } from "../lib/session.js";

export async function reviewCommand(
  reviewId: string,
  options: { decision: string; reviewer?: string; notes?: string }
) {
  if (options.decision !== "approved" && options.decision !== "rejected") {
    throw new Error("decision must be approved or rejected");
  }

  const session = await loadSession();
  const client = new AgentXClient(session.apiBaseUrl, session.token);
  const result = await client.decideReview(reviewId, {
    decision: options.decision,
    reviewer: options.reviewer,
    notes: options.notes
  });

  console.log(`Review ${result.review.id} -> ${result.review.status}`);
}
