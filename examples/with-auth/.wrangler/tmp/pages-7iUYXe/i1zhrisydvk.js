// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/favicon.ico",
    "/_build/server-functions-manifest.json",
    "/assets/index-CW85aRig.js",
    "/assets/index-CW85aRig.js.br",
    "/assets/index-CW85aRig.js.gz",
    "/assets/ssr-DK2sKxCa.css",
    "/assets/ssr-DK2sKxCa.css.br",
    "/assets/ssr-DK2sKxCa.css.gz",
    "/_build/.vite/manifest.json",
    "/_build/.vite/manifest.json.br",
    "/_build/.vite/manifest.json.gz",
    "/_build/assets/_...404_-BhV6neIA.js",
    "/_build/assets/about-Bz-YQ_D-.js",
    "/_build/assets/client-CtjwUMax.js",
    "/_build/assets/client-CtjwUMax.js.br",
    "/_build/assets/client-CtjwUMax.js.gz",
    "/_build/assets/client-DK2sKxCa.css",
    "/_build/assets/client-DK2sKxCa.css.br",
    "/_build/assets/client-DK2sKxCa.css.gz",
    "/_build/assets/index-76sbc7Fz.js",
    "/_build/assets/index-76sbc7Fz.js.br",
    "/_build/assets/index-76sbc7Fz.js.gz",
    "/_build/assets/index-Dg2R-_Vj.js",
    "/_build/assets/index-Dg2R-_Vj.js.br",
    "/_build/assets/index-Dg2R-_Vj.js.gz",
    "/_build/assets/login-BnuTWnH4.js",
    "/_build/assets/login-BnuTWnH4.js.br",
    "/_build/assets/login-BnuTWnH4.js.gz",
    "/_build/assets/web-C6mMHEeS.js",
    "/_build/assets/web-C6mMHEeS.js.br",
    "/_build/assets/web-C6mMHEeS.js.gz",
    "/_server/assets/app-DK2sKxCa.css",
    "/_server/assets/app-DK2sKxCa.css.br",
    "/_server/assets/app-DK2sKxCa.css.gz"
  ]
};

// ../../node_modules/.pnpm/wrangler@3.78.4/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/.wrangler/tmp/pages-7iUYXe/bundledWorker-0.9456143383571711.mjs";
import { isRoutingRuleMatch } from "/Users/k.orban/Developer/GitHub/solid-start/node_modules/.pnpm/wrangler@3.78.4/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/.wrangler/tmp/pages-7iUYXe/bundledWorker-0.9456143383571711.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=i1zhrisydvk.js.map
