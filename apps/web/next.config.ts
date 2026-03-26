import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@agentx/sdk", "@agentx/ui"]
};

export default nextConfig;
