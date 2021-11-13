import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../backend/public',
    // Max file size in bytes of assets (imgs) that vite will inline with base64 encoding, 4096 default
    // Not sure if its worth serving the small ~2kb icons so the get 304 cached, or inlining.
    // Base64 isnt efficient, but it saves on ~500 bytes for each 304 request.
    assetsInlineLimit: 512,
  },
  assetsInclude: ['**/*.webp'],
});
