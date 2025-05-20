// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/favicon.ico",
    "/assets/index-B64JFNGz.js.br",
    "/assets/index-B64JFNGz.js.gz",
    "/assets/ssr-rN2XJZw8.css",
    "/_build/.vite/manifest.json",
    "/_build/.vite/manifest.json.br",
    "/_build/.vite/manifest.json.gz",
    "/_build/assets/_...404_-dua6DiWa.js",
    "/_build/assets/client-Dc-Tua0f.js",
    "/_build/assets/client-Dc-Tua0f.js.br",
    "/_build/assets/client-Dc-Tua0f.js.gz",
    "/_build/assets/client-rN2XJZw8.css",
    "/_build/assets/index-DSajY67n.js",
    "/_build/assets/index-DSajY67n.js.br",
    "/_build/assets/index-DSajY67n.js.gz",
    "/_build/assets/index-Js0Seij8.js",
    "/_build/assets/index-Js0Seij8.js.br",
    "/_build/assets/index-Js0Seij8.js.gz",
    "/_build/assets/login-Cs7fDAsq.js",
    "/_build/assets/login-Cs7fDAsq.js.br",
    "/_build/assets/login-Cs7fDAsq.js.gz",
    "/_build/assets/web-KYKOfUcb.js",
    "/_build/assets/web-KYKOfUcb.js.br",
    "/_build/assets/web-KYKOfUcb.js.gz",
    "/_server/assets/app-B2XfqFCO.js.br",
    "/_server/assets/app-B2XfqFCO.js.gz",
    "/_server/assets/app-rN2XJZw8.css",
    "/_server/assets/index-DcGoOrg_.js.br",
    "/_server/assets/index-DcGoOrg_.js.gz",
    "/_server/assets/server-B-YuvM1W.js.br",
    "/_server/assets/server-B-YuvM1W.js.gz",
    "/_server/assets/server-fns-CD-uTy4t.js.br",
    "/_server/assets/server-fns-CD-uTy4t.js.gz"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/Home/Developer/GitHub/solid-start/examples/with-drizzle/.wrangler/tmp/pages-OWD7nV/bundledWorker-0.5005543169419815.mjs";
import { isRoutingRuleMatch } from "/Users/Home/Developer/GitHub/solid-start/examples/with-drizzle/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/Home/Developer/GitHub/solid-start/examples/with-drizzle/.wrangler/tmp/pages-OWD7nV/bundledWorker-0.5005543169419815.mjs";
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
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=cohu5xnd3nm.js.map
