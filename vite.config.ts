import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages serves the site from /React/.
  base: "/React/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    target: "es2019",
    cssTarget: "safari13",
    sourcemap: false,
  },
});
