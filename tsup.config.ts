import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    index: "src/index.ts",
    components: "src/components.ts",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  splitting: false,
})