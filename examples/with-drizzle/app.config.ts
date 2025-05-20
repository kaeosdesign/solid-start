import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "cloudflare_pages",
    compatibilityDate: "2025-04-02",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        compatibility_date: "2025-04-02",
        d1_databases: [
          {
            binding: "DB",
            database_name: "solid-drizzle-db",
            database_id: "deb3c5a5-0e39-499d-ae4d-fef017c933ec",
            migrations_dir: "drizzle/migrations"
          }
        ]
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
