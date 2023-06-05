import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(
    {
      workbox: {
        globPatterns: ["**/*"],
      },
      includeAssets: ["**/*"],
      manifest: {
        name: "moviesdb-pwa",
        short_name: "moviesdb-pwa",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",

          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon"
          },
          {
            src: "/masked-icon.svg",
            sizes: "512x512",
            type: "image/svg",
            purpose: "any maskable"
          },
          {
            src: "/logo192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logo256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "/logo384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "/logo512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    }
  )],
})

