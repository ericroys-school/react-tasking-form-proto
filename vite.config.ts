/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
  },
  server: {
    // port: 5173,
    // open: true,
    proxy: {
      '/api': 'http://localhost:9001',
      // '/api': {
      //   target: 'http://localhost:9001',
      //   changeOrigin: true,
      //   secure: false,
      //   ws: true,
      //   configure: (proxy, _options) => {
      //     proxy.on('error', (err, _req, _res) => {
      //       console.log('proxy error', err);
      //     });
      //     proxy.on('proxyReq', (proxyReq, req, _res) => {
      //       console.log('Sending Request to the Target:', req.method, req.url);
      //     });
      //     proxy.on('proxyRes', (proxyRes, req, _res) => {
      //       console.log(
      //         'Received Response from the Target:',
      //         proxyRes.statusCode,
      //         req.url
      //       );
      //     });
      //   },
      // },
    },
  },
});
