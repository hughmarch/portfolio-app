import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  preprocess: vitePreprocess(),
  kit: {
    // Adjust the paths.base property
    paths: {
      base: '/portfolio-app/',
    },
    // other configuration settings
  },
};
