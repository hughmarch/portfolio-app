import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  base: '/portfolio-app/', // Adjust this base path
  plugins: [svelte()],
});
