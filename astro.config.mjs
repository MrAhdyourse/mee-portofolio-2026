// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: project site → https://<user>.github.io/<repo>/
const repo = 'mee-portofolio-2026';

// https://astro.build/config
export default defineConfig({
  site: 'https://mrahdyourse.github.io',
  base: `/${repo}`,
  vite: {
    plugins: [tailwindcss()]
  }
});