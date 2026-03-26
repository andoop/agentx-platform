import type { FastifyInstance } from "fastify";

import { requireRole } from "../../auth/actor.js";
import { artifactRepository } from "../../data/repository.js";

export async function registerGovernanceRoutes(app: FastifyInstance): Promise<void> {
  app.get("/governance/reviews", async (request, reply) => {
    const actor = await requireRole(request, reply, "reviewer");
    if (!actor) {
      return;
    }

    return await artifactRepository.listReviews();
  });

  app.post("/governance/reviews/:id/decision", async (request, reply) => {
    const actor = await requireRole(request, reply, "reviewer");
    if (!actor) {
      return;
    }

    const { id } = request.params as { id: string };
    const { decision, reviewer = actor.email, notes } = request.body as {
      decision: "approved" | "rejected";
      reviewer?: string;
      notes?: string;
    };

    try {
      const result = await artifactRepository.decideReview({
        reviewId: id,
        decision,
        reviewer,
        notes
      });
      return { ok: true, review: result.review };
    } catch (error) {
      return reply.code(404).send({
        message: error instanceof Error ? error.message : `Review ${id} not found`
      });
    }
  });

  app.get("/governance/audit-logs", async (request, reply) => {
    const actor = await requireRole(request, reply, "admin");
    if (!actor) {
      return;
    }

    return await artifactRepository.listAuditLogs();
  });
}
