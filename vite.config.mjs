import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";

export default defineConfig({
  base: process.env.VERCEL || process.env.NETLIFY ? "/" : "/azyron-tech/",
  build: {
    rollupOptions: {
      input: "src-index.html"
    },
    emptyOutDir: true
  },
  plugins: [
    react(),
    {
      name: "copy-react-entry",
      closeBundle() {
        fs.copyFileSync("dist/src-index.html", "dist/index.html");
      }
    }
  ]
});
