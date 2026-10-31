
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      injectRegister: 'inline', 
      registerType: 'autoUpdate',

      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },

      includeAssets: ['favicon.svg', 'icons.svg'],

      manifest: {
        name: 'My App',
        short_name: 'My App',
        description: 'My App description',
        scope: '/',
        start_url: '/',
        display: 'standalone',
        theme_color: '#000000',

        icons: [
          {
            src: 'favicon.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    }),

    visualizer({
      filename: './stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ]
});
