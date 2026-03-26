import type { FastifyInstance } from "fastify";

import { requireActor } from "../../auth/actor.js";
import { artifactRepository } from "../../data/repository.js";

export async function registerInstallerRoutes(app: FastifyInstance): Promise<void> {
  app.get("/installer/:slug/plan", async (request, reply) => {
    const actor = await requireActor(request, reply);
    if (!actor) {
      return;
    }

    const { slug } = request.params as { slug: string };
    const { agent = "cursor" } = request.query as { agent?: string };
    const artifact = await artifactRepository.getArtifactBySlug(slug);

    if (!artifact) {
      return reply.code(404).send({ message: `Artifact ${slug} not found` });
    }

    const plan = {
      artifactId: artifact.id,
      slug: artifact.slug,
      version: artifact.currentVersion,
      targetAgent: agent,
      dependencies: artifact.manifest.dependencies.map((dependency) => dependency.target),
      steps: [
        `Download package for ${artifact.slug}@${artifact.currentVersion}`,
        `Validate checksums and security policy`,
        `Render local adapter files for ${agent}`,
        `Write artifact references into the local workspace`
      ]
    };

    return await artifactRepository.saveInstallPlan(plan);
  });
}
