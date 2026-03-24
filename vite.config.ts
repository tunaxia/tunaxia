import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [tailwindcss(), Sitemap({
    hostname: 'https://www.tunaxia.com',
    readable: true,
    generateRobotsTxt: true,
  }), cloudflare()],
})