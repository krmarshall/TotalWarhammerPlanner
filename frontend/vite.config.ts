import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br', compressionOptions: { level: 11 } }),
    viteCompression({ algorithm: 'gzip', ext: '.gz', compressionOptions: { level: 9 } }),
  ],
  build: {
    outDir: '../backend/public',
  },
});
