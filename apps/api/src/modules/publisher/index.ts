import { randomUUID } from "node:crypto";
import type { FastifyInstance } from "fastify";
import { artifactManifestSchema, artifactPackageBundleSchema } from "@agentx/schema";
import { z } from "zod";

import { requireRole } from "../../auth/actor.js";
import { ArtifactPackageStore } from "../../data/package-store.js";
import { artifactRepository } from "../../data/repository.js";

export async function registerPublisherRoutes(app: FastifyInstance): Promise<void> {
  const packageStore = new ArtifactPackageStore();

  app.post("/publisher/artifacts", async (request, reply) => {
    const actor = await requireRole(request, reply, "publisher");
    if (!actor) {
      return;
    }

    const payload = z
      .object({
        manifest: artifactManifestSchema,
        artifactPackage: artifactPackageBundleSchema.optional()
      })
      .safeParse(request.body);

    const manifest = payload.success ? payload.data.manifest : artifactManifestSchema.parse(request.body);
    const artifactPackage = payload.success ? payload.data.artifactPackage : undefined;
    const normalizedManifest = {
      ...manifest,
      metadata: {
        ...manifest.metadata,
        id: manifest.metadata.id ?? randomUUID(),
        createdBy: manifest.metadata.createdBy ?? actor.email,
        updatedBy: manifest.metadata.updatedBy ?? actor.email
      },
      distribution: {
        ...manifest.distribution,
        packageUri: artifactPackage ? `agentx://${manifest.metadata.slug}/${manifest.version}/package` : manifest.distribution.packageUri
      }
    };

    if (artifactPackage) {
      await packageStore.saveBundle(normalizedManifest.metadata.slug, normalizedManifest.version, artifactPackage);
    }

    const { artifact, review } = await artifactRepository.saveSubmittedArtifact(normalizedManifest);

    return reply.code(201).send({ id: artifact.id, version: artifact.currentVersion, reviewId: review.id });
  });
}
