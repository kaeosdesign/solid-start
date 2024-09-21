// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/favicon.ico",
    "/_build/server-functions-manifest.json",
    "/assets/auth-5VKwSiTq.js",
    "/assets/auth-5VKwSiTq.js.br",
    "/assets/auth-5VKwSiTq.js.gz",
    "/assets/client-CMZyFppd.js",
    "/assets/client-CMZyFppd.js.br",
    "/assets/client-CMZyFppd.js.gz",
    "/assets/index-CrM3W-L8.js",
    "/assets/index-CrM3W-L8.js.br",
    "/assets/index-CrM3W-L8.js.gz",
    "/assets/routing-bDZhm0Q2.js",
    "/assets/routing-bDZhm0Q2.js.br",
    "/assets/routing-bDZhm0Q2.js.gz",
    "/assets/ssr-BKBk4KIp.css",
    "/assets/utils-Cz4PRbC3.js",
    "/assets/utils-Cz4PRbC3.js.br",
    "/assets/utils-Cz4PRbC3.js.gz",
    "/_build/.vite/manifest.json",
    "/_build/.vite/manifest.json.br",
    "/_build/.vite/manifest.json.gz",
    "/_build/assets/_...404_-0fZBRhDp.js",
    "/_build/assets/client-BKBk4KIp.css",
    "/_build/assets/client-C1GYr_Eu.js",
    "/_build/assets/client-C1GYr_Eu.js.br",
    "/_build/assets/client-C1GYr_Eu.js.gz",
    "/_build/assets/client-CcV6Y21W.js",
    "/_build/assets/client-CcV6Y21W.js.br",
    "/_build/assets/client-CcV6Y21W.js.gz",
    "/_build/assets/index-_FEB4ok9.js",
    "/_build/assets/index-_FEB4ok9.js.br",
    "/_build/assets/index-_FEB4ok9.js.gz",
    "/_build/assets/protected-Ca01e5qM.js",
    "/_build/assets/routing-tKwY40Eo.js",
    "/_build/assets/routing-tKwY40Eo.js.br",
    "/_build/assets/routing-tKwY40Eo.js.gz",
    "/_build/assets/web-Dhx91zgx.js",
    "/_build/assets/web-Dhx91zgx.js.br",
    "/_build/assets/web-Dhx91zgx.js.gz",
    "/_server/assets/app-BKBk4KIp.css"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/.wrangler/tmp/pages-9PkRin/bundledWorker-0.8279507538354902.mjs";
import { isRoutingRuleMatch } from "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/.wrangler/tmp/pages-9PkRin/bundledWorker-0.8279507538354902.mjs";
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
//# sourceMappingURL=jmnyaj5rreg.js.map
