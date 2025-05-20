import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "cloudflare_pages",
    compatibilityDate: "2025-04-02",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        compatibility_date: "2025-04-02"
      }
    },

    rollupConfig: {
      external: ["__STATIC_CONTENT_MANIFEST", "async_hooks"]
    }
  },
  vite: {
    ssr: { external: ["drizzle-orm"] }
  }
});
