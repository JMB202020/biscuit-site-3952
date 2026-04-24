import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/3952',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
