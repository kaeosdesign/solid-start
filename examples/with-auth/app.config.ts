import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
// // In case you need middleware you must specify it here
//   middleware: "./src/lib/middleware.ts",
  server: {
    preset: "cloudflare-pages",
    
     // We will need to enable CF Pages node compatiblity
     // https://developers.cloudflare.com/workers/runtime-apis/nodejs/asynclocalstorage/
    
    rollupConfig: {
      external: ["__STATIC_CONTENT_MANIFEST", "node:async_hooks", "node:fs/promises", "node:fs/readFile"],
    },
  },
});
