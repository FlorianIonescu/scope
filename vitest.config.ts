import { defineConfig } from "vitest/config"
import path from "path"

export default defineConfig({
  test: {
    include: ["src/**/*.spec.ts"],
  },
  resolve: {
    alias: {
      $src: path.resolve(__dirname, "./src"),
    },
  },
})
