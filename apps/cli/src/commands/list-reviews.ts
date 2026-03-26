import { AgentXClient } from "@agentx/sdk";

import { loadSession } from "../lib/session.js";

export async function listReviewsCommand() {
  const session = await loadSession();
  const client = new AgentXClient(session.apiBaseUrl, session.token);
  const reviews = await client.listReviewQueue();

  for (const review of reviews) {
    console.log(`${review.id} artifact=${review.artifactId}`);
    console.log(`  version=${review.version} submittedBy=${review.submittedBy} status=${review.status}`);
    if (review.notes) {
      console.log(`  notes=${review.notes}`);
    }
  }
}
