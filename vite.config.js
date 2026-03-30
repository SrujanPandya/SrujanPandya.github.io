import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: './' ensures assets use relative paths, which is required for
  // GitHub Pages when the repo is NOT username.github.io (i.e. a project repo).
  // If you deploy to username.github.io, you can set this to '/'.
  base: './',
});
