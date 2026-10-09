import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Enhancement: this repository is the root GitHub Pages site (SrujanPandya.github.io), so '/' is the correct base.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
