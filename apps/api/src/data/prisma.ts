import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../generated/prisma/client.js";

let prismaClient: PrismaClient | undefined;

export function getPrismaClient(): PrismaClient | undefined {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    return undefined;
  }

  if (!prismaClient) {
    const adapter = new PrismaPg({ connectionString });
    prismaClient = new PrismaClient({ adapter });
  }

  return prismaClient;
}
