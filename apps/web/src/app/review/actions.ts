"use server";

import { revalidatePath } from "next/cache";

import { decideReview } from "../../lib/api";

function readValue(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

export async function decideReviewAction(formData: FormData) {
  const reviewId = readValue(formData, "reviewId");
  const decision = readValue(formData, "decision") as "approved" | "rejected";
  const notes = readValue(formData, "notes");

  await decideReview(reviewId, { decision, notes });
  revalidatePath("/review");
  revalidatePath("/catalog");
}
