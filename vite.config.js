import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    /* Subresource Integrity — adds integrity="sha384-…" to every
       <script> and <link> in the production index.html so the browser
       rejects any tampered bundle served by a compromised CDN. */
    ssrManifest: false,
  },
})
