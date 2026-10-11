import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works on Netlify, Vercel, or GitHub Pages sub-paths
  base: "/ember-oak-cafe",
});
