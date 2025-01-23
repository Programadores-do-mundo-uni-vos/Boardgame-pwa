import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Meu App PWA',
        short_name: 'MeuPWA',
        description: 'Meu aplicativo como um Progressive Web App.',
        theme_color: '#1976D2',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/icons/printPwa.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/icons/printPwa.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/printPwa.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: '/icons/printPwa.png',
            sizes: '1280x720',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: '/icons/printPwa.png',
            sizes: '1080x1920',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
