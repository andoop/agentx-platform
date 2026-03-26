import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"],
  target: "node20",
  platform: "node",
  bundle: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  outExtension() {
    return {
      js: ".cjs"
    };
  },
  noExternal: [/.*/]
});
