var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// .wrangler/tmp/bundle-1S1dzv/checked-fetch.js
function checkURL(request, init2) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init2) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-1S1dzv/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init2] = argArray;
        checkURL(request, init2);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/_...404_.mjs
var __exports = {};
__export(__exports, {
  default: () => n
});
import "node:async_hooks";
function n() {
  return ssr(s, ssrHydrationKey());
}
var s;
var init__ = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/_...404_.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    s = ["<main", ' class="w-full p-4 space-y-2"><h1 class="font-bold text-xl">Page Not Found</h1></main>'];
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/utils.mjs
function R(t3) {
  const s4 = new URL("http://localhost:3000/api/auth");
  t3 && !t3.toString().startsWith("http") && (t3 = `https://${t3}`);
  const e = new URL(t3 ?? s4), o4 = ("/" === e.pathname ? s4.pathname : e.pathname).replace(/\/$/, ""), r3 = `${e.origin}${o4}`;
  return { origin: e.origin, host: e.host, path: o4, base: r3, toString: () => r3 };
}
function T() {
  return Math.floor(Date.now() / 1e3);
}
function c(t3, o4) {
  setEnvDefaults(t3, o4), o4.trustHost ??= ki, o4.basePath = u();
}
var o, p, _, u;
var init_utils = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/utils.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    o = { BASE_URL: "/_server", CWD: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs", DEV: false, DEVTOOLS: false, MANIFEST: globalThis.MANIFEST, MODE: "production", PROD: true, ROUTERS: ["public", "ssr", "client", "server-fns"], ROUTER_HANDLER: "../../node_modules/.pnpm/@solidjs+start@1.0.6_@testing-library+jest-dom@6.4.5_vitest@1.6.0_@types+node@20.12.12_@vites_g7q73gmexpgjyzdyyqrs7p6bee/node_modules/@solidjs/start/dist/runtime/server-handler.js", ROUTER_NAME: "server-fns", ROUTER_TYPE: "http", SERVER_BASE_URL: "", SSR: true, START_APP: "./src/app.tsx", START_DEV_OVERLAY: true, START_ISLANDS: false, START_SSR: true };
    p = (s4) => typeof At < "u" && typeof At.env < "u" && !s4.startsWith("VITE_") ? At.env[s4] : s4.startsWith("VITE_") ? o[s4] : void 0;
    _ = (...t3) => {
      for (const s4 of t3) {
        const t4 = p(s4);
        if (t4)
          return t4;
      }
    };
    u = () => _("AUTH_URL_INTERNAL", "VITE_AUTH_PATH") ?? "/api/auth";
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/client.mjs
function H() {
  return useContext(U);
}
function C(s4) {
  const o4 = getRequestEvent();
  l._session = o4?.locals?.session;
  const [r3, { refetch: i3 }] = createResource(async (s5, e) => {
    const t3 = e?.refetching?.event;
    return "init" === t3 || void 0 === t3 || "storage" === t3 || void 0 === l._session ? (l._lastSync = T(), l._session = await d(o4), l._session) : (!t3 || null === l._session || T() < l._lastSync || (l._lastSync = T(), l._session = await d(o4)), l._session);
  }, { initialValue: l._session });
  return createComponent(U.Provider, { value: r3, get children() {
    return s4.children;
  } });
}
var l, U, d;
var init_client = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/client.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_utils();
    l = { baseUrl: R(_("AUTH_URL", "VERCEL_URL")).origin, basePath: R(p("AUTH_URL")).path, baseUrlServer: R(_("AUTH_URL_INTERNAL", "AUTH_URL", "VERCEL_URL")).origin, basePathServer: R(_("AUTH_URL_INTERNAL", "AUTH_URL")).path, _lastSync: 0, _session: void 0, _getSession: () => {
    } };
    U = createContext(void 0);
    d = async (s4) => {
      let e;
      if (s4?.request) {
        const t4 = s4.request.headers.get("cookie");
        t4 && (e = { headers: { cookie: t4 } });
      }
      const t3 = await fetch(((s5) => `${l.baseUrlServer}${s5}`)(`${u()}/session`), e);
      if (s4?.request && s4?.response) {
        const e2 = t3.headers.get("set-cookie");
        if (e2)
          try {
            s4.response.headers.append("set-cookie", e2 ?? "");
          } catch {
          }
      }
      const n3 = await t3.json();
      if (!t3.ok)
        throw new Error(n3.error);
      return n3 && 0 !== Object.keys(n3).length ? n3 : null;
    };
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/routing.mjs
function E(e, t3 = false) {
  const r3 = e.replace(g, "$1");
  return r3 ? t3 || /^[?#]/.test(r3) ? r3 : "/" + r3 : "";
}
function F(e, t3, r3) {
  if (m.test(t3))
    return;
  const o4 = E(e), a = r3 && E(r3);
  let s4 = "";
  return s4 = !a || t3.startsWith("/") ? o4 : 0 !== a.toLowerCase().indexOf(o4.toLowerCase()) ? o4 + a : a, (s4 || "/") + E(t3, !s4);
}
function ve(e, t3) {
  return E(e).replace(/\/*(\*.*)?$/g, "") + E(t3);
}
function G(e) {
  const t3 = {};
  return e.searchParams.forEach((e2, r3) => {
    t3[r3] = e2;
  }), t3;
}
function we(e, t3, r3) {
  const [o4, a] = e.split("/*", 2), s4 = o4.split("/").filter(Boolean), i3 = s4.length;
  return (e2) => {
    const o5 = e2.split("/").filter(Boolean), l6 = o5.length - i3;
    if (l6 < 0 || l6 > 0 && void 0 === a && !t3)
      return null;
    const c3 = { path: i3 ? "" : "/", params: {} }, y7 = (e3) => void 0 === r3 ? void 0 : r3[e3];
    for (let e3 = 0; e3 < i3; e3++) {
      const t4 = s4[e3], r4 = o5[e3], a2 = ":" === t4[0], i4 = a2 ? t4.slice(1) : t4;
      if (a2 && $(r4, y7(i4)))
        c3.params[i4] = r4;
      else if (a2 || !$(r4, t4))
        return null;
      c3.path += `/${r4}`;
    }
    if (a) {
      const e3 = l6 ? o5.slice(-l6).join("/") : "";
      if (!$(e3, y7(a)))
        return null;
      c3.params[a] = e3;
    }
    return c3;
  };
}
function $(e, t3) {
  const n3 = (t4) => 0 === t4.localeCompare(e, void 0, { sensitivity: "base" });
  return void 0 === t3 || ("string" == typeof t3 ? n3(t3) : "function" == typeof t3 ? t3(e) : Array.isArray(t3) ? t3.some(n3) : t3 instanceof RegExp && t3.test(e));
}
function Re(e) {
  const [t3, r3] = e.pattern.split("/*", 2), o4 = t3.split("/").filter(Boolean);
  return o4.reduce((e2, t4) => e2 + (t4.startsWith(":") ? 2 : 3), o4.length - (void 0 === r3 ? 0 : 1));
}
function J(e) {
  const t3 = /* @__PURE__ */ new Map(), r3 = getOwner();
  return new Proxy({}, { get: (a, s4) => (t3.has(s4) || runWithOwner(r3, () => t3.set(s4, createMemo(() => e()[s4]))), t3.get(s4)()), getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }), ownKeys: () => Reflect.ownKeys(e()) });
}
function Q(e) {
  let t3 = /(\/?\:[^\/]+)\?/.exec(e);
  if (!t3)
    return [e];
  let r3 = e.slice(0, t3.index), o4 = e.slice(t3.index + t3[0].length);
  const a = [r3, r3 += t3[1]];
  for (; t3 = /^(\/\:[^\/]+)\?/.exec(o4); )
    a.push(r3 += t3[1]), o4 = o4.slice(t3[0].length);
  return Q(o4).reduce((e2, t4) => [...e2, ...a.map((e3) => e3 + t4)], []);
}
function Ee(e, t3 = "") {
  const { component: r3, preload: o4, load: a, children: s4, info: i3 } = e, l6 = !s4 || Array.isArray(s4) && !s4.length, c3 = { key: e, component: r3, preload: o4 || a, info: i3 };
  return Y(e.path).reduce((r4, o5) => {
    for (const a2 of Q(o5)) {
      const s5 = ve(t3, a2);
      let i4 = l6 ? s5 : s5.split("/*", 1)[0];
      i4 = i4.split("/").map((e2) => e2.startsWith(":") || e2.startsWith("*") ? e2 : encodeURIComponent(e2)).join("/"), r4.push({ ...c3, originalPath: o5, pattern: i4, matcher: we(i4, !l6, e.matchFilters) });
    }
    return r4;
  }, []);
}
function Ce(e, t3 = 0) {
  return { routes: e, score: 1e4 * Re(e[e.length - 1]) - t3, matcher(t4) {
    const r3 = [];
    for (let o4 = e.length - 1; o4 >= 0; o4--) {
      const a = e[o4], s4 = a.matcher(t4);
      if (!s4)
        return null;
      r3.unshift({ ...s4, route: a });
    }
    return r3;
  } };
}
function Y(e) {
  return Array.isArray(e) ? e : [e];
}
function Se(e, t3 = "", r3 = [], o4 = []) {
  const a = Y(e);
  for (let e2 = 0, s4 = a.length; e2 < s4; e2++) {
    const s5 = a[e2];
    if (s5 && "object" == typeof s5) {
      s5.hasOwnProperty("path") || (s5.path = "");
      const e3 = Ee(s5, t3);
      for (const t4 of e3) {
        r3.push(t4);
        const e4 = Array.isArray(s5.children) && 0 === s5.children.length;
        if (s5.children && !e4)
          Se(s5.children, t4.pattern, r3, o4);
        else {
          const e5 = Ce([...r3], o4.length);
          o4.push(e5);
        }
        r3.pop();
      }
    }
  }
  return r3.length ? o4 : o4.sort((e2, t4) => t4.score - e2.score);
}
function k(e, t3) {
  for (let r3 = 0, o4 = e.length; r3 < o4; r3++) {
    const o5 = e[r3].matcher(t3);
    if (o5)
      return o5;
  }
  return [];
}
function $e() {
  return P;
}
function ke(t3, h6, f5, d7 = {}) {
  const { signal: [m11, g6], utils: w6 = {} } = t3, R4 = w6.parsePath || ((e) => e), A3 = w6.renderPath || ((e) => e), x2 = w6.beforeLeave || function() {
    let e = /* @__PURE__ */ new Set(), t4 = false;
    return { subscribe: function(t5) {
      return e.add(t5), () => e.delete(t5);
    }, confirm: function(r3, o4) {
      if (t4)
        return !(t4 = false);
      const a = { to: r3, options: o4, defaultPrevented: false, preventDefault: () => a.defaultPrevented = true };
      for (const s4 of e)
        s4.listener({ ...a, from: s4.location, retry: (e2) => {
          e2 && (t4 = true), s4.navigate(r3, { ...o4, resolve: false });
        } });
      return !a.defaultPrevented;
    } };
  }(), j4 = F("", d7.base || "");
  if (void 0 === j4)
    throw new Error(`${j4} is not a valid base path`);
  j4 && !m11().value && g6({ value: j4, replace: true, scroll: false });
  const [C4, L3] = createSignal(false);
  let D2;
  const [S6, U3] = createSignal(m11().value), [B2, O2] = createSignal(m11().state), W2 = function(e, t4) {
    const r3 = new URL(v), a = createMemo((t5) => {
      const o4 = e();
      try {
        return new URL(o4, r3);
      } catch {
        return console.error(`Invalid path ${o4}`), t5;
      }
    }, r3), i3 = createMemo(() => a().pathname), l6 = createMemo(() => a().search, true), c3 = createMemo(() => a().hash);
    return { get pathname() {
      return i3();
    }, get search() {
      return l6();
    }, get hash() {
      return c3();
    }, get state() {
      return t4();
    }, get key() {
      return "";
    }, query: J(on(l6, () => G(a()))) };
  }(S6, B2), q3 = [], z2 = createSignal(function() {
    const e = getRequestEvent();
    return e && e.router && e.router.submission ? [e.router.submission] : [];
  }()), I2 = createMemo(() => "function" == typeof d7.transformUrl ? k(h6(), d7.transformUrl(W2.pathname)) : k(h6(), W2.pathname)), K3 = J(() => {
    const e = I2(), t4 = {};
    for (let r3 = 0; r3 < e.length; r3++)
      Object.assign(t4, e[r3].params);
    return t4;
  }), H3 = { pattern: j4, path: () => j4, outlet: () => null, resolvePath: (e) => F(j4, e) };
  return createRenderEffect(on(m11, (e) => ((e2, t4) => {
    t4.value === S6() && t4.state === B2() || (void 0 === D2 && L3(true), P = e2, D2 = t4, startTransition(() => {
      D2 === t4 && (U3(D2.value), O2(D2.state));
    }).finally(() => {
      D2 === t4 && batch(() => {
        P = void 0, L3(false), D2 = void 0;
      });
    }));
  })("native", e), { defer: true })), { base: H3, location: W2, params: K3, isRouting: C4, renderPath: A3, parsePath: R4, navigatorFactory: function(t4) {
    return t4 = t4 || useContext(b) || H3, (e, r3) => function(e2, t5, r4) {
      rn(() => {
        if ("number" == typeof t5)
          return void (t5 && (w6.go ? w6.go(t5) : console.warn("Router integration does not support relative routing")));
        const { replace: o4, resolve: a, scroll: s4, state: i3 } = { replace: false, resolve: true, scroll: true, ...r4 }, c3 = a ? e2.resolvePath(t5) : F("", t5);
        if (void 0 === c3)
          throw new Error(`Path '${t5}' is not a routable path`);
        if (q3.length >= 100)
          throw new Error("Too many redirects");
        if (c3 !== S6() || i3 !== B2()) {
          const e3 = getRequestEvent();
          e3 && (e3.response = { status: 302, headers: new Headers({ Location: c3 }) }), g6({ value: c3, replace: o4, scroll: s4, state: i3 });
        }
      });
    }(t4, e, r3);
  }, matches: I2, beforeLeave: x2, preloadRoute: function(e, t4 = {}) {
    const r3 = k(h6(), e.pathname), o4 = P;
    P = "preload";
    for (let o5 in r3) {
      const { route: a, params: s4 } = r3[o5];
      a.component && a.component.preload && a.component.preload();
      const { preload: l6 } = a;
      t4.preloadData && l6 && runWithOwner(f5(), () => l6({ params: s4, location: { pathname: e.pathname, search: e.search, hash: e.hash, query: G(e), state: null, key: "" }, intent: "preload" }));
    }
    P = o4;
  }, singleFlight: void 0 === d7.singleFlight || d7.singleFlight, submissions: z2 };
}
function De(e, t3, r3, a) {
  const { base: s4, location: i3, params: l6 } = e, { pattern: c3, component: u4, preload: p6 } = a().route, f5 = createMemo(() => a().path);
  u4 && u4.preload && u4.preload();
  const d7 = p6 ? p6({ params: l6, location: i3, intent: P || "initial" }) : void 0;
  return { parent: t3, pattern: c3, path: f5, outlet: () => u4 ? createComponent(u4, { params: l6, location: i3, data: d7, get children() {
    return r3();
  } }) : r3(), resolvePath: (e2) => F(s4.path(), e2, f5()) };
}
var m, g, v, w, b, V, je, _e, P;
var init_routing = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/routing.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    m = /^(?:[a-z0-9]+:)?\/\//i;
    g = /^\/+|(\/)\/+$/g;
    v = "http://sr";
    w = createContext();
    b = createContext();
    V = () => function(e, t3) {
      if (null == e)
        throw new Error(t3);
      return e;
    }(useContext(w), "<A> and 'use' router primitives can be only used inside a Route.");
    je = () => V().navigatorFactory();
    _e = () => V().location;
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/index.mjs
var build_exports = {};
__export(build_exports, {
  default: () => N
});
import "node:async_hooks";
function h(e) {
  const t3 = je(), n3 = _e(), { href: r3, state: a } = e;
  return t3("function" == typeof r3 ? r3({ navigate: t3, location: n3 }) : r3, { replace: true, state: a }), null;
}
function N() {
  const c3 = H(), [u4, g6] = createSignal(3), d7 = setInterval(() => {
    g6((e) => e - 1);
  }, 1e3);
  return onCleanup(() => clearInterval(d7)), ssr(p2, ssrHydrationKey(), escape(createComponent(Show, { get when() {
    return c3();
  }, get fallback() {
    return [ssr(l2, ssrHydrationKey()), ssr(f, ssrHydrationKey())];
  }, get children() {
    return [ssr(m2, ssrHydrationKey(), escape(u4())), createComponent(Show, { get when() {
      return u4() <= 0;
    }, get children() {
      return createComponent(h, { href: "/protected" });
    } })];
  } })));
}
var m2, p2, l2, f;
var init_build = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/index.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_client();
    init_routing();
    init_utils();
    m2 = ["<span", ">Redirecting to protected page in <!--$-->", "<!--/--> seconds...</span>"];
    p2 = ["<main", "><h1>Home</h1><!--$-->", "<!--/--></main>"];
    l2 = ["<span", ">You are not signed in.</span>"];
    f = ["<button", ">Sign In</button>"];
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/protected.mjs
var protected_exports = {};
__export(protected_exports, {
  default: () => y
});
import "node:async_hooks";
var i, m3, u2, y;
var init_protected = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/protected.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_client();
    init_utils();
    i = ["<p", ">Only shown for logged in users</p>"];
    m3 = ["<main", "><h1>Protected</h1><!--$-->", "<!--/--><span>Hey there <!--$-->", "<!--/-->! You are signed in!</span><button>Sign Out</button></main>"];
    u2 = ["<img", ">"];
    y = () => {
      const c3 = H();
      return createComponent(Show, { get when() {
        return c3();
      }, get fallback() {
        return ssr(i, ssrHydrationKey());
      }, keyed: true, children: (e) => ssr(m3, ssrHydrationKey(), e.user?.image ? ssr(u2, ssrHydrationKey() + ssrAttribute("src", escape(e.user?.image, true), false)) : escape(null), escape(e.user?.name)) });
    };
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/_/discord.mjs
function defaultCookies(e) {
  const t3 = e ? "__Secure-" : "";
  return { sessionToken: { name: `${t3}authjs.session-token`, options: { httpOnly: true, sameSite: "lax", path: "/", secure: e } }, callbackUrl: { name: `${t3}authjs.callback-url`, options: { httpOnly: true, sameSite: "lax", path: "/", secure: e } }, csrfToken: { name: (e ? "__Host-" : "") + "authjs.csrf-token", options: { httpOnly: true, sameSite: "lax", path: "/", secure: e } }, pkceCodeVerifier: { name: `${t3}authjs.pkce.code_verifier`, options: { httpOnly: true, sameSite: "lax", path: "/", secure: e, maxAge: 900 } }, state: { name: `${t3}authjs.state`, options: { httpOnly: true, sameSite: "lax", path: "/", secure: e, maxAge: 900 } }, nonce: { name: `${t3}authjs.nonce`, options: { httpOnly: true, sameSite: "lax", path: "/", secure: e } }, webauthnChallenge: { name: `${t3}authjs.challenge`, options: { httpOnly: true, sameSite: "lax", path: "/", secure: e, maxAge: 900 } } };
}
function isValidHttpUrl(e, t3) {
  try {
    return /^https?:/.test(new URL(e, e.startsWith("/") ? t3 : void 0).protocol);
  } catch {
    return false;
  }
}
function normalizeUint8Array(e, t3) {
  if ("string" == typeof e)
    return new TextEncoder().encode(e);
  if (!(e instanceof Uint8Array))
    throw new TypeError(`"${t3}"" must be an instance of Uint8Array or a string`);
  return e;
}
async function hkdf(e, t3, r3, n3, i3) {
  return derive(function(e2) {
    switch (e2) {
      case "sha256":
      case "sha384":
      case "sha512":
      case "sha1":
        return e2;
      default:
        throw new TypeError('unsupported "digest" value');
    }
  }(e), function(e2) {
    const t4 = normalizeUint8Array(e2, "ikm");
    if (!t4.byteLength)
      throw new TypeError('"ikm" must be at least one byte in length');
    return t4;
  }(t3), normalizeUint8Array(r3, "salt"), function(e2) {
    const t4 = normalizeUint8Array(e2, "info");
    if (t4.byteLength > 1024)
      throw TypeError('"info" must not contain more than 1024 bytes');
    return t4;
  }(n3), function(e2, t4) {
    if ("number" != typeof e2 || !Number.isInteger(e2) || e2 < 1)
      throw new TypeError('"keylen" must be a positive integer');
    if (e2 > 255 * (parseInt(t4.substr(3), 10) >> 3 || 20))
      throw new TypeError('"keylen" too large');
    return e2;
  }(i3, e));
}
function concat(...e) {
  const t3 = e.reduce((e2, { length: t4 }) => e2 + t4, 0), r3 = new Uint8Array(t3);
  let n3 = 0;
  for (const t4 of e)
    r3.set(t4, n3), n3 += t4.length;
  return r3;
}
function writeUInt32BE(e, t3, r3) {
  if (t3 < 0 || t3 >= ue)
    throw new RangeError(`value must be >= 0 and <= ${ue - 1}. Received ${t3}`);
  e.set([t3 >>> 24, t3 >>> 16, t3 >>> 8, 255 & t3], r3);
}
function uint64be(e) {
  const t3 = Math.floor(e / ue), r3 = e % ue, n3 = new Uint8Array(8);
  return writeUInt32BE(n3, t3, 0), writeUInt32BE(n3, r3, 4), n3;
}
function uint32be(e) {
  const t3 = new Uint8Array(4);
  return writeUInt32BE(t3, e), t3;
}
function lengthAndInput(e) {
  return concat(uint32be(e.length), e);
}
function bitLength$1(e) {
  switch (e) {
    case "A128GCM":
    case "A128GCMKW":
    case "A192GCM":
    case "A192GCMKW":
    case "A256GCM":
    case "A256GCMKW":
      return 96;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      return 128;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${e}`);
  }
}
function unusable(e, t3 = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${t3} must be ${e}`);
}
function isAlgorithm(e, t3) {
  return e.name === t3;
}
function checkEncCryptoKey(e, t3, ...r3) {
  switch (t3) {
    case "A128GCM":
    case "A192GCM":
    case "A256GCM": {
      if (!isAlgorithm(e.algorithm, "AES-GCM"))
        throw unusable("AES-GCM");
      const r4 = parseInt(t3.slice(1, 4), 10);
      if (e.algorithm.length !== r4)
        throw unusable(r4, "algorithm.length");
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (!isAlgorithm(e.algorithm, "AES-KW"))
        throw unusable("AES-KW");
      const r4 = parseInt(t3.slice(1, 4), 10);
      if (e.algorithm.length !== r4)
        throw unusable(r4, "algorithm.length");
      break;
    }
    case "ECDH":
      switch (e.algorithm.name) {
        case "ECDH":
        case "X25519":
        case "X448":
          break;
        default:
          throw unusable("ECDH, X25519, or X448");
      }
      break;
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      if (!isAlgorithm(e.algorithm, "PBKDF2"))
        throw unusable("PBKDF2");
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (!isAlgorithm(e.algorithm, "RSA-OAEP"))
        throw unusable("RSA-OAEP");
      const r4 = parseInt(t3.slice(9), 10) || 1;
      if ((n3 = e.algorithm.hash, parseInt(n3.name.slice(4), 10)) !== r4)
        throw unusable(`SHA-${r4}`, "algorithm.hash");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  var n3;
  !function(e2, t4) {
    if (t4.length && !t4.some((t5) => e2.usages.includes(t5))) {
      let e3 = "CryptoKey does not support this operation, its usages must include ";
      if (t4.length > 2) {
        const r4 = t4.pop();
        e3 += `one of ${t4.join(", ")}, or ${r4}.`;
      } else
        2 === t4.length ? e3 += `one of ${t4[0]} or ${t4[1]}.` : e3 += `${t4[0]}.`;
      throw new TypeError(e3);
    }
  }(e, r3);
}
function message(e, t3, ...r3) {
  if (r3.length > 2) {
    const t4 = r3.pop();
    e += `one of type ${r3.join(", ")}, or ${t4}.`;
  } else
    2 === r3.length ? e += `one of type ${r3[0]} or ${r3[1]}.` : e += `of type ${r3[0]}.`;
  return null == t3 ? e += ` Received ${t3}` : "function" == typeof t3 && t3.name ? e += ` Received function ${t3.name}` : "object" == typeof t3 && null != t3 && t3.constructor?.name && (e += ` Received an instance of ${t3.constructor.name}`), e;
}
function withAlg(e, t3, ...r3) {
  return message(`Key for the ${e} algorithm must be `, t3, ...r3);
}
async function cbcDecrypt(e, t3, r3, n3, i3, a) {
  if (!(t3 instanceof Uint8Array))
    throw new TypeError(invalidKeyInput(t3, "Uint8Array"));
  const c3 = parseInt(e.slice(1, 4), 10), u4 = await ce.subtle.importKey("raw", t3.subarray(c3 >> 3), "AES-CBC", false, ["decrypt"]), m11 = await ce.subtle.importKey("raw", t3.subarray(0, c3 >> 3), { hash: "SHA-" + (c3 << 1), name: "HMAC" }, false, ["sign"]), g6 = concat(a, n3, r3, uint64be(a.length << 3)), b5 = new Uint8Array((await ce.subtle.sign("HMAC", m11, g6)).slice(0, c3 >> 3));
  let E4, A3;
  try {
    E4 = ((e2, t4) => {
      if (!(e2 instanceof Uint8Array))
        throw new TypeError("First argument must be a buffer");
      if (!(t4 instanceof Uint8Array))
        throw new TypeError("Second argument must be a buffer");
      if (e2.length !== t4.length)
        throw new TypeError("Input buffers must have the same length");
      const r4 = e2.length;
      let n4 = 0, i4 = -1;
      for (; ++i4 < r4; )
        n4 |= e2[i4] ^ t4[i4];
      return 0 === n4;
    })(i3, b5);
  } catch {
  }
  if (!E4)
    throw new JWEDecryptionFailed();
  try {
    A3 = new Uint8Array(await ce.subtle.decrypt({ iv: n3, name: "AES-CBC" }, u4, r3));
  } catch {
  }
  if (!A3)
    throw new JWEDecryptionFailed();
  return A3;
}
function isObject$1(e) {
  if ("object" != typeof (t3 = e) || null === t3 || "[object Object]" !== Object.prototype.toString.call(e))
    return false;
  var t3;
  if (null === Object.getPrototypeOf(e))
    return true;
  let r3 = e;
  for (; null !== Object.getPrototypeOf(r3); )
    r3 = Object.getPrototypeOf(r3);
  return Object.getPrototypeOf(e) === r3;
}
function checkKeySize(e, t3) {
  if (e.algorithm.length !== parseInt(t3.slice(1, 4), 10))
    throw new TypeError(`Invalid key size for alg: ${t3}`);
}
function getCryptoKey$1(e, t3, r3) {
  if (isCryptoKey$1(e))
    return checkEncCryptoKey(e, t3, r3), e;
  if (e instanceof Uint8Array)
    return ce.subtle.importKey("raw", e, "AES-KW", true, [r3]);
  throw new TypeError(invalidKeyInput(e, ...he, "Uint8Array"));
}
async function deriveKey$1(e, t3, r3, n3, i3 = new Uint8Array(0), a = new Uint8Array(0)) {
  if (!isCryptoKey$1(e))
    throw new TypeError(invalidKeyInput(e, ...he));
  if (checkEncCryptoKey(e, "ECDH"), !isCryptoKey$1(t3))
    throw new TypeError(invalidKeyInput(t3, ...he));
  checkEncCryptoKey(t3, "ECDH", "deriveBits");
  const c3 = concat(lengthAndInput(de.encode(r3)), lengthAndInput(i3), lengthAndInput(a), uint32be(n3));
  let u4;
  u4 = "X25519" === e.algorithm.name ? 256 : "X448" === e.algorithm.name ? 448 : Math.ceil(parseInt(e.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
  return async function(e2, t4, r4) {
    const n4 = Math.ceil((t4 >> 3) / 32), i4 = new Uint8Array(32 * n4);
    for (let t5 = 0; t5 < n4; t5++) {
      const n5 = new Uint8Array(4 + e2.length + r4.length);
      n5.set(uint32be(t5 + 1)), n5.set(e2, 4), n5.set(r4, 4 + e2.length), i4.set(await digest("sha256", n5), 32 * t5);
    }
    return i4.slice(0, t4 >> 3);
  }(new Uint8Array(await ce.subtle.deriveBits({ name: e.algorithm.name, public: e }, t3, u4)), n3, c3);
}
function ecdhAllowed(e) {
  if (!isCryptoKey$1(e))
    throw new TypeError(invalidKeyInput(e, ...he));
  return ["P-256", "P-384", "P-521"].includes(e.algorithm.namedCurve) || "X25519" === e.algorithm.name || "X448" === e.algorithm.name;
}
async function deriveKey(e, t3, r3, n3) {
  !function(e2) {
    if (!(e2 instanceof Uint8Array) || e2.length < 8)
      throw new JWEInvalid("PBES2 Salt Input must be 8 or more octets");
  }(e);
  const i3 = function(e2, t4) {
    return concat(de.encode(e2), new Uint8Array([0]), t4);
  }(t3, e), a = parseInt(t3.slice(13, 16), 10), c3 = { hash: `SHA-${t3.slice(8, 11)}`, iterations: r3, name: "PBKDF2", salt: i3 }, u4 = { length: a, name: "AES-KW" }, m11 = await function(e2, t4) {
    if (e2 instanceof Uint8Array)
      return ce.subtle.importKey("raw", e2, "PBKDF2", false, ["deriveBits"]);
    if (isCryptoKey$1(e2))
      return checkEncCryptoKey(e2, t4, "deriveBits", "deriveKey"), e2;
    throw new TypeError(invalidKeyInput(e2, ...he, "Uint8Array"));
  }(n3, t3);
  if (m11.usages.includes("deriveBits"))
    return new Uint8Array(await ce.subtle.deriveBits(c3, m11, a));
  if (m11.usages.includes("deriveKey"))
    return ce.subtle.deriveKey(c3, m11, u4, false, ["wrapKey", "unwrapKey"]);
  throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
}
function subtleRsaEs(e) {
  switch (e) {
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      return "RSA-OAEP";
    default:
      throw new JOSENotSupported(`alg ${e} is not supported either by JOSE or your javascript runtime`);
  }
}
function bitLength(e) {
  switch (e) {
    case "A128GCM":
      return 128;
    case "A192GCM":
      return 192;
    case "A256GCM":
    case "A128CBC-HS256":
      return 256;
    case "A192CBC-HS384":
      return 384;
    case "A256CBC-HS512":
      return 512;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${e}`);
  }
}
async function decryptKeyManagement(e, t3, r3, n3, i3) {
  switch (checkKeyType(e, t3, "decrypt"), e) {
    case "dir":
      if (void 0 !== r3)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
      return t3;
    case "ECDH-ES":
      if (void 0 !== r3)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!isObject$1(n3.epk))
        throw new JWEInvalid('JOSE Header "epk" (Ephemeral Public Key) missing or invalid');
      if (!ecdhAllowed(t3))
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      const i4 = await async function(e2, t4) {
        if (!isObject$1(e2))
          throw new TypeError("JWK must be an object");
        switch (t4 || (t4 = e2.alg), e2.kty) {
          case "oct":
            if ("string" != typeof e2.k || !e2.k)
              throw new TypeError('missing "k" (Key Value) Parameter value');
            return decode$3(e2.k);
          case "RSA":
            if (void 0 !== e2.oth)
              throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
          case "EC":
          case "OKP":
            return parse$1({ ...e2, alg: t4 });
          default:
            throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
        }
      }(n3.epk, e);
      let a, c3;
      if (void 0 !== n3.apu) {
        if ("string" != typeof n3.apu)
          throw new JWEInvalid('JOSE Header "apu" (Agreement PartyUInfo) invalid');
        try {
          a = decode$3(n3.apu);
        } catch {
          throw new JWEInvalid("Failed to base64url decode the apu");
        }
      }
      if (void 0 !== n3.apv) {
        if ("string" != typeof n3.apv)
          throw new JWEInvalid('JOSE Header "apv" (Agreement PartyVInfo) invalid');
        try {
          c3 = decode$3(n3.apv);
        } catch {
          throw new JWEInvalid("Failed to base64url decode the apv");
        }
      }
      const u4 = await deriveKey$1(i4, t3, "ECDH-ES" === e ? n3.enc : e, "ECDH-ES" === e ? bitLength(n3.enc) : parseInt(e.slice(-5, -2), 10), a, c3);
      if ("ECDH-ES" === e)
        return u4;
      if (void 0 === r3)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap$1(e.slice(-6), u4, r3);
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      if (void 0 === r3)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return decrypt(e, t3, r3);
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      if (void 0 === r3)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if ("number" != typeof n3.p2c)
        throw new JWEInvalid('JOSE Header "p2c" (PBES2 Count) missing or invalid');
      const a = i3?.maxPBES2Count || 1e4;
      if (n3.p2c > a)
        throw new JWEInvalid('JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds');
      if ("string" != typeof n3.p2s)
        throw new JWEInvalid('JOSE Header "p2s" (PBES2 Salt) missing or invalid');
      let c3;
      try {
        c3 = decode$3(n3.p2s);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the p2s");
      }
      return decrypt$1(e, t3, r3, n3.p2c, c3);
    }
    case "A128KW":
    case "A192KW":
    case "A256KW":
      if (void 0 === r3)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap$1(e, t3, r3);
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      if (void 0 === r3)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if ("string" != typeof n3.iv)
        throw new JWEInvalid('JOSE Header "iv" (Initialization Vector) missing or invalid');
      if ("string" != typeof n3.tag)
        throw new JWEInvalid('JOSE Header "tag" (Authentication Tag) missing or invalid');
      let i4, a;
      try {
        i4 = decode$3(n3.iv);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the iv");
      }
      try {
        a = decode$3(n3.tag);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the tag");
      }
      return async function(e2, t4, r4, n4, i5) {
        const a2 = e2.slice(0, 7);
        return decrypt$2(a2, t4, r4, n4, i5, new Uint8Array(0));
      }(e, t3, r3, i4, a);
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
  }
}
function validateCrit(e, t3, r3, n3, i3) {
  if (void 0 !== i3.crit && void 0 === n3?.crit)
    throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
  if (!n3 || void 0 === n3.crit)
    return /* @__PURE__ */ new Set();
  if (!Array.isArray(n3.crit) || 0 === n3.crit.length || n3.crit.some((e2) => "string" != typeof e2 || 0 === e2.length))
    throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  let a;
  a = void 0 !== r3 ? new Map([...Object.entries(r3), ...t3.entries()]) : t3;
  for (const t4 of n3.crit) {
    if (!a.has(t4))
      throw new JOSENotSupported(`Extension Header Parameter "${t4}" is not recognized`);
    if (void 0 === i3[t4])
      throw new e(`Extension Header Parameter "${t4}" is missing`);
    if (a.get(t4) && void 0 === n3[t4])
      throw new e(`Extension Header Parameter "${t4}" MUST be integrity protected`);
  }
  return new Set(n3.crit);
}
async function compactDecrypt(e, t3, r3) {
  if (e instanceof Uint8Array && (e = le.decode(e)), "string" != typeof e)
    throw new JWEInvalid("Compact JWE must be a string or Uint8Array");
  const { 0: n3, 1: i3, 2: a, 3: c3, 4: u4, length: m11 } = e.split(".");
  if (5 !== m11)
    throw new JWEInvalid("Invalid Compact JWE");
  const g6 = await async function(e2, t4, r4) {
    if (!isObject$1(e2))
      throw new JWEInvalid("Flattened JWE must be an object");
    if (void 0 === e2.protected && void 0 === e2.header && void 0 === e2.unprotected)
      throw new JWEInvalid("JOSE Header missing");
    if (void 0 !== e2.iv && "string" != typeof e2.iv)
      throw new JWEInvalid("JWE Initialization Vector incorrect type");
    if ("string" != typeof e2.ciphertext)
      throw new JWEInvalid("JWE Ciphertext missing or incorrect type");
    if (void 0 !== e2.tag && "string" != typeof e2.tag)
      throw new JWEInvalid("JWE Authentication Tag incorrect type");
    if (void 0 !== e2.protected && "string" != typeof e2.protected)
      throw new JWEInvalid("JWE Protected Header incorrect type");
    if (void 0 !== e2.encrypted_key && "string" != typeof e2.encrypted_key)
      throw new JWEInvalid("JWE Encrypted Key incorrect type");
    if (void 0 !== e2.aad && "string" != typeof e2.aad)
      throw new JWEInvalid("JWE AAD incorrect type");
    if (void 0 !== e2.header && !isObject$1(e2.header))
      throw new JWEInvalid("JWE Shared Unprotected Header incorrect type");
    if (void 0 !== e2.unprotected && !isObject$1(e2.unprotected))
      throw new JWEInvalid("JWE Per-Recipient Unprotected Header incorrect type");
    let n4;
    if (e2.protected)
      try {
        const t5 = decode$3(e2.protected);
        n4 = JSON.parse(le.decode(t5));
      } catch {
        throw new JWEInvalid("JWE Protected Header is invalid");
      }
    if (!isDisjoint(n4, e2.header, e2.unprotected))
      throw new JWEInvalid("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
    const i4 = { ...n4, ...e2.header, ...e2.unprotected };
    if (validateCrit(JWEInvalid, /* @__PURE__ */ new Map(), r4?.crit, n4, i4), void 0 !== i4.zip)
      throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
    const { alg: a2, enc: c4 } = i4;
    if ("string" != typeof a2 || !a2)
      throw new JWEInvalid("missing JWE Algorithm (alg) in JWE Header");
    if ("string" != typeof c4 || !c4)
      throw new JWEInvalid("missing JWE Encryption Algorithm (enc) in JWE Header");
    const u5 = r4 && validateAlgorithms("keyManagementAlgorithms", r4.keyManagementAlgorithms), m12 = r4 && validateAlgorithms("contentEncryptionAlgorithms", r4.contentEncryptionAlgorithms);
    if (u5 && !u5.has(a2) || !u5 && a2.startsWith("PBES2"))
      throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
    if (m12 && !m12.has(c4))
      throw new JOSEAlgNotAllowed('"enc" (Encryption Algorithm) Header Parameter value not allowed');
    let g7;
    if (void 0 !== e2.encrypted_key)
      try {
        g7 = decode$3(e2.encrypted_key);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the encrypted_key");
      }
    let b6, E4, A3, _3 = false;
    "function" == typeof t4 && (t4 = await t4(n4, e2), _3 = true);
    try {
      b6 = await decryptKeyManagement(a2, t4, g7, i4, r4);
    } catch (e3) {
      if (e3 instanceof TypeError || e3 instanceof JWEInvalid || e3 instanceof JOSENotSupported)
        throw e3;
      b6 = generateCek(c4);
    }
    if (void 0 !== e2.iv)
      try {
        E4 = decode$3(e2.iv);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the iv");
      }
    if (void 0 !== e2.tag)
      try {
        A3 = decode$3(e2.tag);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the tag");
      }
    const T6 = de.encode(e2.protected ?? "");
    let C4, x2;
    C4 = void 0 !== e2.aad ? concat(T6, de.encode("."), de.encode(e2.aad)) : T6;
    try {
      x2 = decode$3(e2.ciphertext);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the ciphertext");
    }
    const U3 = { plaintext: await decrypt$2(c4, b6, x2, E4, A3, C4) };
    if (void 0 !== e2.protected && (U3.protectedHeader = n4), void 0 !== e2.aad)
      try {
        U3.additionalAuthenticatedData = decode$3(e2.aad);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the aad");
      }
    return void 0 !== e2.unprotected && (U3.sharedUnprotectedHeader = e2.unprotected), void 0 !== e2.header && (U3.unprotectedHeader = e2.header), _3 ? { ...U3, key: t4 } : U3;
  }({ ciphertext: c3, iv: a || void 0, protected: n3, tag: u4 || void 0, encrypted_key: i3 || void 0 }, t3, r3), b5 = { plaintext: g6.plaintext, protectedHeader: g6.protectedHeader };
  return "function" == typeof t3 ? { ...b5, key: g6.key } : b5;
}
async function encryptKeyManagement(e, t3, r3, n3, i3 = {}) {
  let a, c3, u4;
  switch (checkKeyType(e, r3, "encrypt"), e) {
    case "dir":
      u4 = r3;
      break;
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!ecdhAllowed(r3))
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      const { apu: m11, apv: g6 } = i3;
      let { epk: b5 } = i3;
      b5 || (b5 = (await async function(e2) {
        if (!isCryptoKey$1(e2))
          throw new TypeError(invalidKeyInput(e2, ...he));
        return ce.subtle.generateKey(e2.algorithm, true, ["deriveBits"]);
      }(r3)).privateKey);
      const { x: E4, y: A3, crv: _3, kty: T6 } = await async function(e2) {
        return keyToJWK(e2);
      }(b5), C4 = await deriveKey$1(r3, b5, "ECDH-ES" === e ? t3 : e, "ECDH-ES" === e ? bitLength(t3) : parseInt(e.slice(-5, -2), 10), m11, g6);
      if (c3 = { epk: { x: E4, crv: _3, kty: T6 } }, "EC" === T6 && (c3.epk.y = A3), m11 && (c3.apu = encode$3(m11)), g6 && (c3.apv = encode$3(g6)), "ECDH-ES" === e) {
        u4 = C4;
        break;
      }
      u4 = n3 || generateCek(t3);
      const x2 = e.slice(-6);
      a = await wrap$1(x2, C4, u4);
      break;
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      u4 = n3 || generateCek(t3), a = await (async (e2, t4, r4) => {
        if (!isCryptoKey$1(t4))
          throw new TypeError(invalidKeyInput(t4, ...he));
        if (checkEncCryptoKey(t4, e2, "encrypt", "wrapKey"), checkKeyLength(e2, t4), t4.usages.includes("encrypt"))
          return new Uint8Array(await ce.subtle.encrypt(subtleRsaEs(e2), t4, r4));
        if (t4.usages.includes("wrapKey")) {
          const n4 = await ce.subtle.importKey("raw", r4, ...fe);
          return new Uint8Array(await ce.subtle.wrapKey("raw", n4, t4, subtleRsaEs(e2)));
        }
        throw new TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');
      })(e, r3, u4);
      break;
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      u4 = n3 || generateCek(t3);
      const { p2c: m11, p2s: g6 } = i3;
      ({ encryptedKey: a, ...c3 } = await (async (e2, t4, r4, n4 = 2048, i4 = pe(new Uint8Array(16))) => {
        const a2 = await deriveKey(i4, e2, n4, t4);
        return { encryptedKey: await wrap$1(e2.slice(-6), a2, r4), p2c: n4, p2s: encode$3(i4) };
      })(e, r3, u4, m11, g6));
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW":
      u4 = n3 || generateCek(t3), a = await wrap$1(e, r3, u4);
      break;
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      u4 = n3 || generateCek(t3);
      const { iv: m11 } = i3;
      ({ encryptedKey: a, ...c3 } = await async function(e2, t4, r4, n4) {
        const i4 = e2.slice(0, 7), a2 = await encrypt(i4, r4, t4, n4, new Uint8Array(0));
        return { encryptedKey: a2.ciphertext, iv: encode$3(a2.iv), tag: encode$3(a2.tag) };
      }(e, r3, u4, m11));
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
  }
  return { cek: u4, encryptedKey: a, parameters: c3 };
}
function validateInput(e, t3) {
  if (!Number.isFinite(t3))
    throw new TypeError(`Invalid ${e} input`);
  return t3;
}
async function calculateJwkThumbprint(e, t3) {
  if (!isObject$1(e))
    throw new TypeError("JWK must be an object");
  if (t3 ?? (t3 = "sha256"), "sha256" !== t3 && "sha384" !== t3 && "sha512" !== t3)
    throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
  let r3;
  switch (e.kty) {
    case "EC":
      check(e.crv, '"crv" (Curve) Parameter'), check(e.x, '"x" (X Coordinate) Parameter'), check(e.y, '"y" (Y Coordinate) Parameter'), r3 = { crv: e.crv, kty: e.kty, x: e.x, y: e.y };
      break;
    case "OKP":
      check(e.crv, '"crv" (Subtype of Key Pair) Parameter'), check(e.x, '"x" (Public Key) Parameter'), r3 = { crv: e.crv, kty: e.kty, x: e.x };
      break;
    case "RSA":
      check(e.e, '"e" (Exponent) Parameter'), check(e.n, '"n" (Modulus) Parameter'), r3 = { e: e.e, kty: e.kty, n: e.n };
      break;
    case "oct":
      check(e.k, '"k" (Key Value) Parameter'), r3 = { k: e.k, kty: e.kty };
      break;
    default:
      throw new JOSENotSupported('"kty" (Key Type) Parameter missing or unsupported');
  }
  const n3 = de.encode(JSON.stringify(r3));
  return encode$3(await digest(t3, n3));
}
function decode$1(e) {
  return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e;
}
function encode$1(e) {
  return encodeURIComponent(e);
}
function tryDecode(e, t3) {
  try {
    return t3(e);
  } catch (t4) {
    return e;
  }
}
async function encode(e) {
  const { token: t3 = {}, secret: r3, maxAge: n3 = Ee2, salt: i3 } = e, a = Array.isArray(r3) ? r3 : [r3], c3 = await getDerivedEncryptionKey(Se2, a[0], i3), u4 = await calculateJwkThumbprint({ kty: "oct", k: ge(c3) }, "sha" + (c3.byteLength << 3));
  return await new EncryptJWT(t3).setProtectedHeader({ alg: Ae, enc: Se2, kid: u4 }).setIssuedAt().setExpirationTime(now() + n3).setJti(crypto.randomUUID()).encrypt(c3);
}
async function decode(e) {
  const { token: t3, secret: r3, salt: n3 } = e, i3 = Array.isArray(r3) ? r3 : [r3];
  if (!t3)
    return null;
  const { payload: a } = await async function(e2, t4, r4) {
    const n4 = await compactDecrypt(e2, t4, r4), i4 = jwtPayload(n4.protectedHeader, n4.plaintext, r4), { protectedHeader: a2 } = n4;
    if (void 0 !== a2.iss && a2.iss !== i4.iss)
      throw new JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', "iss", "mismatch");
    if (void 0 !== a2.sub && a2.sub !== i4.sub)
      throw new JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', "sub", "mismatch");
    if (void 0 !== a2.aud && JSON.stringify(a2.aud) !== JSON.stringify(i4.aud))
      throw new JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', "aud", "mismatch");
    const c3 = { payload: i4, protectedHeader: a2 };
    return "function" == typeof t4 ? { ...c3, key: n4.key } : c3;
  }(t3, async ({ kid: e2, enc: t4 }) => {
    for (const r4 of i3) {
      const i4 = await getDerivedEncryptionKey(t4, r4, n3);
      if (void 0 === e2)
        return i4;
      if (e2 === await calculateJwkThumbprint({ kty: "oct", k: ge(i4) }, "sha" + (i4.byteLength << 3)))
        return i4;
    }
    throw new Error("no matching decryption secret");
  }, { clockTolerance: 15, keyManagementAlgorithms: [Ae], contentEncryptionAlgorithms: [Se2, "A256GCM"] });
  return a;
}
async function getDerivedEncryptionKey(e, t3, r3) {
  let n3;
  switch (e) {
    case "A256CBC-HS512":
      n3 = 64;
      break;
    case "A256GCM":
      n3 = 32;
      break;
    default:
      throw new Error("Unsupported JWT Content Encryption Algorithm");
  }
  return await hkdf("sha256", t3, r3, `Auth.js Generated Encryption Key (${r3})`, n3);
}
function isAuthAction(e) {
  return _e2.includes(e);
}
async function getBody(e) {
  if (!("body" in e) || !e.body || "POST" !== e.method)
    return;
  const t3 = e.headers.get("content-type");
  if (t3?.includes("application/json"))
    return await e.json();
  if (t3?.includes("application/x-www-form-urlencoded")) {
    const t4 = new URLSearchParams(await e.text());
    return Object.fromEntries(t4);
  }
}
async function toInternalRequest(e, t3) {
  try {
    if ("GET" !== e.method && "POST" !== e.method)
      throw new UnknownAction("Only GET and POST requests are supported.");
    t3.basePath ?? (t3.basePath = "/auth");
    const r3 = new URL(e.url), { action: n3, providerId: i3 } = function(e2, t4) {
      const r4 = e2.match(new RegExp(`^${t4}(.+)`));
      if (null === r4)
        throw new UnknownAction(`Cannot parse action at ${e2}`);
      const [n4, i4] = r4, a = i4.replace(/^\//, "").split("/");
      if (1 !== a.length && 2 !== a.length)
        throw new UnknownAction(`Cannot parse action at ${e2}`);
      const [c3, u4] = a;
      if (!isAuthAction(c3))
        throw new UnknownAction(`Cannot parse action at ${e2}`);
      if (u4 && !["signin", "callback", "webauthn-options"].includes(c3))
        throw new UnknownAction(`Cannot parse action at ${e2}`);
      return { action: c3, providerId: u4 };
    }(r3.pathname, t3.basePath);
    return { url: r3, action: n3, providerId: i3, method: e.method, headers: Object.fromEntries(e.headers), body: e.body ? await getBody(e) : void 0, cookies: parse_1(e.headers.get("cookie") ?? "") ?? {}, error: r3.searchParams.get("error") ?? void 0, query: Object.fromEntries(r3.searchParams) };
  } catch (t4) {
    ka.error(t4), ka.debug("request", e);
  }
}
function toRequest(e) {
  return new Request(e.url, { headers: e.headers, method: e.method, body: "POST" === e.method ? JSON.stringify(e.body ?? {}) : void 0 });
}
function toResponse(e) {
  const t3 = new Headers(e.headers);
  e.cookies?.forEach((e2) => {
    const { name: r4, value: n4, options: i4 } = e2, a = serialize_1(r4, n4, i4);
    t3.has("Set-Cookie") ? t3.append("Set-Cookie", a) : t3.set("Set-Cookie", a);
  });
  let r3 = e.body;
  "application/json" === t3.get("content-type") ? r3 = JSON.stringify(e.body) : "application/x-www-form-urlencoded" === t3.get("content-type") && (r3 = new URLSearchParams(e.body).toString());
  const n3 = e.redirect ? 302 : e.status ?? 200, i3 = new Response(r3, { headers: t3, status: n3 });
  return e.redirect && i3.headers.set("Location", e.redirect), i3;
}
async function createHash(e) {
  const t3 = new TextEncoder().encode(e), r3 = await crypto.subtle.digest("SHA-256", t3);
  return Array.from(new Uint8Array(r3)).map((e2) => e2.toString(16).padStart(2, "0")).join("").toString();
}
function randomString(e) {
  const t3 = crypto.getRandomValues(new Uint8Array(e));
  return Array.from(t3).reduce((e2, t4) => e2 + ((e3) => ("0" + e3.toString(16)).slice(-2))(t4), "");
}
function validateCSRF(e, t3) {
  if (!t3)
    throw new MissingCSRF(`CSRF token was missing during an action ${e}`);
}
function isObject(e) {
  return e && "object" == typeof e && !Array.isArray(e);
}
function merge(e, ...t3) {
  if (!t3.length)
    return e;
  const r3 = t3.shift();
  if (isObject(e) && isObject(r3))
    for (const t4 in r3)
      isObject(r3[t4]) ? (e[t4] || Object.assign(e, { [t4]: {} }), merge(e[t4], r3[t4])) : Object.assign(e, { [t4]: r3[t4] });
  return merge(e, ...t3);
}
function parseProviders(e) {
  const { providerId: t3, options: r3 } = e, n3 = new URL(r3.basePath ?? "/auth", e.url.origin), i3 = e.providers.map((e2) => {
    const t4 = "function" == typeof e2 ? e2() : e2, { options: i4, ...a } = t4, c3 = i4?.id ?? a.id, u4 = merge(a, i4, { signinUrl: `${n3}/signin/${c3}`, callbackUrl: `${n3}/callback/${c3}` });
    return "oauth" === t4.type || "oidc" === t4.type ? (u4.redirectProxyUrl ?? (u4.redirectProxyUrl = r3.redirectProxyUrl), function(e3) {
      e3.issuer && (e3.wellKnown ?? (e3.wellKnown = `${e3.issuer}/.well-known/openid-configuration`));
      const t5 = normalizeEndpoint(e3.authorization, e3.issuer);
      t5 && !t5.url?.searchParams.has("scope") && t5.url.searchParams.set("scope", "openid profile email");
      const r4 = normalizeEndpoint(e3.token, e3.issuer), n4 = normalizeEndpoint(e3.userinfo, e3.issuer), i5 = e3.checks ?? ["pkce"];
      e3.redirectProxyUrl && (i5.includes("state") || i5.push("state"), e3.redirectProxyUrl = `${e3.redirectProxyUrl}/callback/${e3.id}`);
      return { ...e3, authorization: t5, token: r4, checks: i5, userinfo: n4, profile: e3.profile ?? defaultProfile, account: e3.account ?? defaultAccount };
    }(u4)) : u4;
  });
  return { providers: i3, provider: i3.find(({ id: e2 }) => e2 === t3) };
}
function stripUndefined(e) {
  const t3 = {};
  for (let [r3, n3] of Object.entries(e))
    void 0 !== n3 && (t3[r3] = n3);
  return t3;
}
function normalizeEndpoint(e, t3) {
  if (!e && t3)
    return;
  if ("string" == typeof e)
    return { url: new URL(e) };
  const r3 = new URL(e?.url ?? "https://authjs.dev");
  if (null != e?.params)
    for (let [t4, n3] of Object.entries(e.params))
      "claims" === t4 && (n3 = JSON.stringify(n3)), r3.searchParams.set(t4, String(n3));
  return { url: r3, request: e?.request, conform: e?.conform };
}
async function init({ authOptions: e, providerId: t3, action: r3, url: n3, cookies: i3, callbackUrl: a, csrfToken: c3, csrfDisabled: u4, isPost: m11 }) {
  const { providers: g6, provider: b5 } = parseProviders({ providers: e.providers, url: n3, providerId: t3, options: e }), E4 = 2592e3;
  let A3 = false;
  if (("oauth" === b5?.type || "oidc" === b5?.type) && b5.redirectProxyUrl)
    try {
      A3 = new URL(b5.redirectProxyUrl).origin === n3.origin;
    } catch {
      throw new TypeError(`redirectProxyUrl must be a valid URL. Received: ${b5.redirectProxyUrl}`);
    }
  const T6 = { debug: false, pages: {}, theme: { colorScheme: "auto", logo: "", brandColor: "", buttonText: "" }, ...e, url: n3, action: r3, provider: b5, cookies: merge(defaultCookies(e.useSecureCookies ?? "https:" === n3.protocol), e.cookies), providers: g6, session: { strategy: e.adapter ? "database" : "jwt", maxAge: E4, updateAge: 86400, generateSessionToken: () => crypto.randomUUID(), ...e.session }, jwt: { secret: e.secret, maxAge: e.session?.maxAge ?? E4, encode, decode, ...e.jwt }, events: eventsErrorHandler(e.events ?? {}, ka), adapter: adapterErrorHandler(e.adapter, ka), callbacks: { ...Te, ...e.callbacks }, logger: ka, callbackUrl: n3.origin, isOnRedirectProxy: A3, experimental: { ...e.experimental } }, C4 = [];
  if (u4)
    T6.csrfTokenVerified = true;
  else {
    const { csrfToken: e2, cookie: t4, csrfTokenVerified: r4 } = await async function({ options: e3, cookieValue: t5, isPost: r5, bodyValue: n4 }) {
      if (t5) {
        const [i5, a2] = t5.split("|");
        if (a2 === await createHash(`${i5}${e3.secret}`))
          return { csrfTokenVerified: r5 && i5 === n4, csrfToken: i5 };
      }
      const i4 = randomString(32);
      return { cookie: `${i4}|${await createHash(`${i4}${e3.secret}`)}`, csrfToken: i4 };
    }({ options: T6, cookieValue: i3?.[T6.cookies.csrfToken.name], isPost: m11, bodyValue: c3 });
    T6.csrfToken = e2, T6.csrfTokenVerified = r4, t4 && C4.push({ name: T6.cookies.csrfToken.name, value: t4, options: T6.cookies.csrfToken.options });
  }
  const { callbackUrl: x2, callbackUrlCookie: U3 } = await async function({ options: e2, paramValue: t4, cookieValue: r4 }) {
    const { url: n4, callbacks: i4 } = e2;
    let a2 = n4.origin;
    return t4 ? a2 = await i4.redirect({ url: t4, baseUrl: n4.origin }) : r4 && (a2 = await i4.redirect({ url: r4, baseUrl: n4.origin })), { callbackUrl: a2, callbackUrlCookie: a2 !== r4 ? a2 : void 0 };
  }({ options: T6, cookieValue: i3?.[T6.cookies.callbackUrl.name], paramValue: a });
  return T6.callbackUrl = x2, U3 && C4.push({ name: T6.cookies.callbackUrl.name, value: U3, options: T6.cookies.callbackUrl.options }), { options: T6, cookies: C4 };
}
function eventsErrorHandler(e, t3) {
  return Object.keys(e).reduce((r3, n3) => (r3[n3] = async (...r4) => {
    try {
      const t4 = e[n3];
      return await t4(...r4);
    } catch (e2) {
      t3.error(new EventError(e2));
    }
  }, r3), {});
}
function adapterErrorHandler(e, t3) {
  if (e)
    return Object.keys(e).reduce((r3, n3) => (r3[n3] = async (...r4) => {
      try {
        t3.debug(`adapter_${n3}`, { args: r4 });
        const i3 = e[n3];
        return await i3(...r4);
      } catch (e2) {
        const r5 = new AdapterError(e2);
        throw t3.error(r5), r5;
      }
    }, r3), {});
}
function p$1(e) {
  return e.children;
}
function l3(e) {
  if (false === Oe.test(e += ""))
    return e;
  for (var t3 = 0, r3 = 0, n3 = "", i3 = ""; r3 < e.length; r3++) {
    switch (e.charCodeAt(r3)) {
      case 34:
        i3 = "&quot;";
        break;
      case 38:
        i3 = "&amp;";
        break;
      case 60:
        i3 = "&lt;";
        break;
      default:
        continue;
    }
    r3 !== t3 && (n3 += e.slice(t3, r3)), n3 += i3, t3 = r3 + 1;
  }
  return r3 !== t3 && (n3 += e.slice(t3, r3)), n3;
}
function p3(e) {
  var t3 = "";
  for (var r3 in e) {
    var n3 = e[r3];
    null != n3 && "" !== n3 && (t3 && (t3 += " "), t3 += "-" == r3[0] ? r3 : Re2[r3] || (Re2[r3] = r3.replace(Je, "-$1").toLowerCase()), t3 = "number" == typeof n3 && false === xe.test(r3) ? t3 + ": " + n3 + "px;" : t3 + ": " + n3 + ";");
  }
  return t3 || void 0;
}
function _$1(e, t3) {
  return Array.isArray(t3) ? t3.reduce(_$1, e) : null != t3 && false !== t3 && e.push(t3), e;
}
function d2() {
  this.__d = true;
}
function v2(e, t3) {
  return { __v: e, context: t3, props: e.props, setState: d2, forceUpdate: d2, __d: true, __h: [] };
}
function h2(e, t3) {
  var r3 = e.contextType, n3 = r3 && t3[r3.__c];
  return null != r3 ? n3 ? n3.props.value : r3.__ : t3;
}
function y2(e, t3, r3, n3, i3, a) {
  if (null == e || "boolean" == typeof e)
    return "";
  if ("object" != typeof e)
    return l3(e);
  var c3 = r3.pretty, u4 = c3 && "string" == typeof c3 ? c3 : "	";
  if (Array.isArray(e)) {
    for (var m11 = "", g6 = 0; g6 < e.length; g6++)
      c3 && g6 > 0 && (m11 += "\n"), m11 += y2(e[g6], t3, r3, n3, i3, a);
    return m11;
  }
  var b5, E4 = e.type, A3 = e.props, _3 = false;
  if ("function" == typeof E4) {
    if (_3 = true, !r3.shallow || !n3 && false !== r3.renderRootComponent) {
      if (E4 === p$1) {
        var T6 = [];
        return _$1(T6, e.props.children), y2(T6, t3, r3, false !== r3.shallowHighOrder, i3, a);
      }
      var C4, x2 = e.__c = v2(e, t3);
      Ce2.__b && Ce2.__b(e);
      var U3 = Ce2.__r;
      if (E4.prototype && "function" == typeof E4.prototype.render) {
        var I2 = h2(E4, t3);
        (x2 = e.__c = new E4(A3, I2)).__v = e, x2._dirty = x2.__d = true, x2.props = A3, null == x2.state && (x2.state = {}), null == x2._nextState && null == x2.__s && (x2._nextState = x2.__s = x2.state), x2.context = I2, E4.getDerivedStateFromProps ? x2.state = Object.assign({}, x2.state, E4.getDerivedStateFromProps(x2.props, x2.state)) : x2.componentWillMount && (x2.componentWillMount(), x2.state = x2._nextState !== x2.state ? x2._nextState : x2.__s !== x2.state ? x2.__s : x2.state), U3 && U3(e), C4 = x2.render(x2.props, x2.state, x2.context);
      } else
        for (var P5 = h2(E4, t3), O2 = 0; x2.__d && O2++ < 25; )
          x2.__d = false, U3 && U3(e), C4 = E4.call(e.__c, A3, P5);
      return x2.getChildContext && (t3 = Object.assign({}, t3, x2.getChildContext())), Ce2.diffed && Ce2.diffed(e), y2(C4, t3, r3, false !== r3.shallowHighOrder, i3, a);
    }
    E4 = (b5 = E4).displayName || b5 !== Function && b5.name || function(e2) {
      var t4 = (Function.prototype.toString.call(e2).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t4) {
        for (var r4 = -1, n4 = We.length; n4--; )
          if (We[n4] === e2) {
            r4 = n4;
            break;
          }
        r4 < 0 && (r4 = We.push(e2) - 1), t4 = "UnnamedComponent" + r4;
      }
      return t4;
    }(b5);
  }
  var R4, J3, W2 = "<" + E4;
  if (A3) {
    var $5 = Object.keys(A3);
    r3 && true === r3.sortAttributes && $5.sort();
    for (var H3 = 0; H3 < $5.length; H3++) {
      var K3 = $5[H3], D2 = A3[K3];
      if ("children" !== K3) {
        if (!Ie.test(K3) && (r3 && r3.allAttributes || "key" !== K3 && "ref" !== K3 && "__self" !== K3 && "__source" !== K3)) {
          if ("defaultValue" === K3)
            K3 = "value";
          else if ("defaultChecked" === K3)
            K3 = "checked";
          else if ("defaultSelected" === K3)
            K3 = "selected";
          else if ("className" === K3) {
            if (void 0 !== A3.class)
              continue;
            K3 = "class";
          } else
            i3 && Pe.test(K3) && (K3 = K3.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if ("htmlFor" === K3) {
            if (A3.for)
              continue;
            K3 = "for";
          }
          "style" === K3 && D2 && "object" == typeof D2 && (D2 = p3(D2)), "a" === K3[0] && "r" === K3[1] && "boolean" == typeof D2 && (D2 = String(D2));
          var N4 = r3.attributeHook && r3.attributeHook(K3, D2, t3, r3, _3);
          if (N4 || "" === N4)
            W2 += N4;
          else if ("dangerouslySetInnerHTML" === K3)
            J3 = D2 && D2.__html;
          else if ("textarea" === E4 && "value" === K3)
            R4 = D2;
          else if ((D2 || 0 === D2 || "" === D2) && "function" != typeof D2) {
            if (!(true !== D2 && "" !== D2 || (D2 = K3, r3 && r3.xml))) {
              W2 = W2 + " " + K3;
              continue;
            }
            if ("value" === K3) {
              if ("select" === E4) {
                a = D2;
                continue;
              }
              "option" === E4 && a == D2 && void 0 === A3.selected && (W2 += " selected");
            }
            W2 = W2 + " " + K3 + '="' + l3(D2) + '"';
          }
        }
      } else
        R4 = D2;
    }
  }
  if (c3) {
    var L3 = W2.replace(/\n\s*/, " ");
    L3 === W2 || ~L3.indexOf("\n") ? c3 && ~W2.indexOf("\n") && (W2 += "\n") : W2 = L3;
  }
  if (W2 += ">", Ie.test(E4))
    throw new Error(E4 + " is not a valid HTML tag name in " + W2);
  var M2, B2 = Ue.test(E4) || r3.voidElements && r3.voidElements.test(E4), F3 = [];
  if (J3)
    c3 && f2(J3) && (J3 = "\n" + u4 + s2(J3, u4)), W2 += J3;
  else if (null != R4 && _$1(M2 = [], R4).length) {
    for (var z2 = c3 && ~W2.indexOf("\n"), V5 = false, q3 = 0; q3 < M2.length; q3++) {
      var G4 = M2[q3];
      if (null != G4 && false !== G4) {
        var X3 = y2(G4, t3, r3, true, "svg" === E4 || "foreignObject" !== E4 && i3, a);
        if (c3 && !z2 && f2(X3) && (z2 = true), X3)
          if (c3) {
            var Y4 = X3.length > 0 && "<" != X3[0];
            V5 && Y4 ? F3[F3.length - 1] += X3 : F3.push(X3), V5 = Y4;
          } else
            F3.push(X3);
      }
    }
    if (c3 && z2)
      for (var Z3 = F3.length; Z3--; )
        F3[Z3] = "\n" + u4 + s2(F3[Z3], u4);
  }
  if (F3.length || J3)
    W2 += F3.join("");
  else if (r3 && r3.xml)
    return W2.substring(0, W2.length - 1) + " />";
  return !B2 || M2 || J3 ? (c3 && ~W2.indexOf("\n") && (W2 += "\n"), W2 = W2 + "</" + E4 + ">") : W2 = W2.replace(/>$/, " />"), W2;
}
function k2(e, t3, r3) {
  t3 = t3 || {};
  var n3, i3 = Ce2.__s;
  return Ce2.__s = true, n3 = r3 && (r3.pretty || r3.voidElements || r3.sortAttributes || r3.shallow || r3.allAttributes || r3.xml || r3.attributeHook) ? y2(e, t3, r3) : j(e, t3, false, void 0), Ce2.__c && Ce2.__c(e, He), Ce2.__s = i3, He.length = 0, n3;
}
function S(e, t3) {
  return "className" === e ? "class" : "htmlFor" === e ? "for" : "defaultValue" === e ? "value" : "defaultChecked" === e ? "checked" : "defaultSelected" === e ? "selected" : t3 && Pe.test(e) ? e.toLowerCase().replace(/^xlink:?/, "xlink:") : e;
}
function w2(e, t3) {
  return "style" === e && null != t3 && "object" == typeof t3 ? p3(t3) : "a" === e[0] && "r" === e[1] && "boolean" == typeof t3 ? String(t3) : t3;
}
function j(e, t3, r3, n3) {
  if (null == e || true === e || false === e || "" === e)
    return "";
  if ("object" != typeof e)
    return l3(e);
  if (Ke(e)) {
    for (var i3 = "", a = 0; a < e.length; a++)
      i3 += j(e[a], t3, r3, n3);
    return i3;
  }
  Ce2.__b && Ce2.__b(e);
  var c3 = e.type, u4 = e.props;
  if ("function" == typeof c3) {
    if (c3 === p$1)
      return j(e.props.children, t3, r3, n3);
    var m11;
    m11 = c3.prototype && "function" == typeof c3.prototype.render ? function(e2, t4) {
      var r4 = e2.type, n4 = h2(r4, t4), i4 = new r4(e2.props, n4);
      e2.__c = i4, i4.__v = e2, i4.__d = true, i4.props = e2.props, null == i4.state && (i4.state = {}), null == i4.__s && (i4.__s = i4.state), i4.context = n4, r4.getDerivedStateFromProps ? i4.state = je2({}, i4.state, r4.getDerivedStateFromProps(i4.props, i4.state)) : i4.componentWillMount && (i4.componentWillMount(), i4.state = i4.__s !== i4.state ? i4.__s : i4.state);
      var a2 = Ce2.__r;
      return a2 && a2(e2), i4.render(i4.props, i4.state, i4.context);
    }(e, t3) : function(e2, t4) {
      var r4, n4 = v2(e2, t4), i4 = h2(e2.type, t4);
      e2.__c = n4;
      for (var a2 = Ce2.__r, c4 = 0; n4.__d && c4++ < 25; )
        n4.__d = false, a2 && a2(e2), r4 = e2.type.call(n4, e2.props, i4);
      return r4;
    }(e, t3);
    var g6 = e.__c;
    g6.getChildContext && (t3 = je2({}, t3, g6.getChildContext()));
    var b5 = j(m11, t3, r3, n3);
    return Ce2.diffed && Ce2.diffed(e), b5;
  }
  var E4, A3, _3 = "<";
  if (_3 += c3, u4)
    for (var T6 in E4 = u4.children, u4) {
      var C4 = u4[T6];
      if (!("key" === T6 || "ref" === T6 || "__self" === T6 || "__source" === T6 || "children" === T6 || "className" === T6 && "class" in u4 || "htmlFor" === T6 && "for" in u4 || Ie.test(T6))) {
        if (C4 = w2(T6 = S(T6, r3), C4), "dangerouslySetInnerHTML" === T6)
          A3 = C4 && C4.__html;
        else if ("textarea" === c3 && "value" === T6)
          E4 = C4;
        else if ((C4 || 0 === C4 || "" === C4) && "function" != typeof C4) {
          if (true === C4 || "" === C4) {
            C4 = T6, _3 = _3 + " " + T6;
            continue;
          }
          if ("value" === T6) {
            if ("select" === c3) {
              n3 = C4;
              continue;
            }
            "option" !== c3 || n3 != C4 || "selected" in u4 || (_3 += " selected");
          }
          _3 = _3 + " " + T6 + '="' + l3(C4) + '"';
        }
      }
    }
  var x2 = _3;
  if (_3 += ">", Ie.test(c3))
    throw new Error(c3 + " is not a valid HTML tag name in " + _3);
  var U3 = "", I2 = false;
  if (A3)
    U3 += A3, I2 = true;
  else if ("string" == typeof E4)
    U3 += l3(E4), I2 = true;
  else if (Ke(E4))
    for (var P5 = 0; P5 < E4.length; P5++) {
      var O2 = E4[P5];
      if (null != O2 && false !== O2) {
        var R4 = j(O2, t3, "svg" === c3 || "foreignObject" !== c3 && r3, n3);
        R4 && (U3 += R4, I2 = true);
      }
    }
  else if (null != E4 && false !== E4 && true !== E4) {
    var J3 = j(E4, t3, "svg" === c3 || "foreignObject" !== c3 && r3, n3);
    J3 && (U3 += J3, I2 = true);
  }
  if (Ce2.diffed && Ce2.diffed(e), I2)
    _3 += U3;
  else if (Ue.test(c3))
    return x2 + " />";
  return _3 + "</" + c3 + ">";
}
function o2(e, t3, r3, n3, i3) {
  var a, c3, u4 = {};
  for (c3 in t3)
    "ref" == c3 ? a = t3[c3] : u4[c3] = t3[c3];
  var m11 = { type: e, props: u4, key: r3, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --De2, __source: i3, __self: n3 };
  if ("function" == typeof e && (a = e.defaultProps))
    for (c3 in a)
      void 0 === u4[c3] && (u4[c3] = a[c3]);
  return Ce2.vnode && Ce2.vnode(m11), m11;
}
function ErrorPage(e) {
  const { url: t3, error: r3 = "default", theme: n3 } = e, i3 = `${t3}/signin`, a = { default: { status: 200, heading: "Error", message: o2("p", { children: o2("a", { className: "site", href: t3?.origin, children: t3?.host }) }) }, Configuration: { status: 500, heading: "Server error", message: o2("div", { children: [o2("p", { children: "There is a problem with the server configuration." }), o2("p", { children: "Check the server logs for more information." })] }) }, AccessDenied: { status: 403, heading: "Access Denied", message: o2("div", { children: [o2("p", { children: "You do not have permission to sign in." }), o2("p", { children: o2("a", { className: "button", href: i3, children: "Sign in" }) })] }) }, Verification: { status: 403, heading: "Unable to sign in", message: o2("div", { children: [o2("p", { children: "The sign in link is no longer valid." }), o2("p", { children: "It may have been used already or it may have expired." })] }), signin: o2("a", { className: "button", href: i3, children: "Sign in" }) } }, { status: c3, heading: u4, message: m11, signin: g6 } = a[r3] ?? a.default;
  return { status: c3, html: o2("div", { className: "error", children: [n3?.brandColor && o2("style", { dangerouslySetInnerHTML: { __html: `
        :root {
          --brand-color: ${n3?.brandColor}
        }
      ` } }), o2("div", { className: "card", children: [n3?.logo && o2("img", { src: n3?.logo, alt: "Logo", className: "logo" }), o2("h1", { children: u4 }), o2("div", { className: "message", children: m11 }), g6] })] }) };
}
async function webauthnScript(e, t3) {
  const r3 = window.SimpleWebAuthnBrowser;
  async function fetchOptions(r4) {
    const n3 = new URL(`${e}/webauthn-options/${t3}`);
    r4 && n3.searchParams.append("action", r4);
    getFormFields().forEach((e2) => {
      n3.searchParams.append(e2.name, e2.value);
    });
    const i3 = await fetch(n3);
    if (i3.ok)
      return i3.json();
    console.error("Failed to fetch options", i3);
  }
  function getForm() {
    const e2 = `#${t3}-form`, r4 = document.querySelector(e2);
    if (!r4)
      throw new Error(`Form '${e2}' not found`);
    return r4;
  }
  function getFormFields() {
    const e2 = getForm();
    return Array.from(e2.querySelectorAll("input[data-form-field]"));
  }
  async function submitForm(e2, t4) {
    const r4 = getForm();
    if (e2) {
      const t5 = document.createElement("input");
      t5.type = "hidden", t5.name = "action", t5.value = e2, r4.appendChild(t5);
    }
    if (t4) {
      const e3 = document.createElement("input");
      e3.type = "hidden", e3.name = "data", e3.value = JSON.stringify(t4), r4.appendChild(e3);
    }
    return r4.submit();
  }
  async function authenticationFlow(e2, t4) {
    const n3 = await r3.startAuthentication(e2, t4);
    return await submitForm("authenticate", n3);
  }
  !async function() {
    const e2 = getForm();
    r3.browserSupportsWebAuthn() ? e2 && e2.addEventListener("submit", async (e3) => {
      e3.preventDefault();
      const t4 = await fetchOptions(void 0);
      if (t4) {
        if ("authenticate" === t4.action)
          try {
            await authenticationFlow(t4.options, false);
          } catch (e4) {
            console.error(e4);
          }
        else if ("register" === t4.action)
          try {
            await async function(e4) {
              getFormFields().forEach((e5) => {
                if (e5.required && !e5.value)
                  throw new Error(`Missing required field: ${e5.name}`);
              });
              const t5 = await r3.startRegistration(e4);
              return await submitForm("register", t5);
            }(t4.options);
          } catch (e4) {
            console.error(e4);
          }
      } else
        console.error("Failed to fetch options for form submission");
    }) : e2.style.display = "none";
  }(), async function() {
    if (!r3.browserSupportsWebAuthnAutofill())
      return;
    const e2 = await fetchOptions("authenticate");
    if (e2)
      try {
        await authenticationFlow(e2.options, true);
      } catch (e3) {
        console.error(e3);
      }
    else
      console.error("Failed to fetch option for autofill authentication");
  }();
}
function hexToRgba(e, t3 = 1) {
  if (!e)
    return;
  3 === (e = e.replace(/^#/, "")).length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
  const r3 = parseInt(e, 16);
  return `rgba(${r3 >> 16 & 255}, ${r3 >> 8 & 255}, ${255 & r3}, ${t3 = Math.min(Math.max(t3, 0), 1)})`;
}
function SigninPage(e) {
  const { csrfToken: t3, providers: r3 = [], callbackUrl: n3, theme: i3, email: a, error: c3 } = e;
  "undefined" != typeof document && i3?.brandColor && document.documentElement.style.setProperty("--brand-color", i3.brandColor), "undefined" != typeof document && i3?.buttonText && document.documentElement.style.setProperty("--button-text-color", i3.buttonText);
  const u4 = c3 && (Ne[c3] ?? Ne.default), m11 = "https://authjs.dev/img/providers", g6 = r3.find((e2) => "webauthn" === e2.type && e2.enableConditionalUI)?.id;
  return o2("div", { className: "signin", children: [i3?.brandColor && o2("style", { dangerouslySetInnerHTML: { __html: `:root {--brand-color: ${i3.brandColor}}` } }), i3?.buttonText && o2("style", { dangerouslySetInnerHTML: { __html: `
        :root {
          --button-text-color: ${i3.buttonText}
        }
      ` } }), o2("div", { className: "card", children: [u4 && o2("div", { className: "error", children: o2("p", { children: u4 }) }), i3?.logo && o2("img", { src: i3.logo, alt: "Logo", className: "logo" }), r3.map((e2, i4) => {
    let c4, u5, g7, b6, E4, A3;
    return "oauth" !== e2.type && "oidc" !== e2.type || ({ bg: c4 = "", text: u5 = "", logo: g7 = `${m11}/${e2.id}.svg`, bgDark: E4 = c4, textDark: A3 = u5, logoDark: b6 = `${m11}/${e2.id}.svg` } = e2.style ?? {}), o2("div", { className: "provider", children: ["oauth" === e2.type || "oidc" === e2.type ? o2("form", { action: e2.signinUrl, method: "POST", children: [o2("input", { type: "hidden", name: "csrfToken", value: t3 }), n3 && o2("input", { type: "hidden", name: "callbackUrl", value: n3 }), o2("button", { type: "submit", className: "button", style: { "--provider-bg": c4, "--provider-dark-bg": E4, "--provider-color": u5, "--provider-dark-color": A3, "--provider-bg-hover": hexToRgba(c4, 0.8), "--provider-dark-bg-hover": hexToRgba(E4, 0.8) }, tabIndex: 0, children: [g7 && o2("img", { loading: "lazy", height: 24, width: 24, id: "provider-logo", src: g7 }), b6 && o2("img", { loading: "lazy", height: 24, width: 24, id: "provider-logo-dark", src: b6 }), o2("span", { children: ["Sign in with ", e2.name] })] })] }) : null, ("email" === e2.type || "credentials" === e2.type || "webauthn" === e2.type) && i4 > 0 && "email" !== r3[i4 - 1].type && "credentials" !== r3[i4 - 1].type && "webauthn" !== r3[i4 - 1].type && o2("hr", {}), "email" === e2.type && o2("form", { action: e2.signinUrl, method: "POST", children: [o2("input", { type: "hidden", name: "csrfToken", value: t3 }), o2("label", { className: "section-header", htmlFor: `input-email-for-${e2.id}-provider`, children: "Email" }), o2("input", { id: `input-email-for-${e2.id}-provider`, autoFocus: true, type: "email", name: "email", value: a, placeholder: "email@example.com", required: true }), o2("button", { id: "submitButton", type: "submit", tabIndex: 0, children: ["Sign in with ", e2.name] })] }), "credentials" === e2.type && o2("form", { action: e2.callbackUrl, method: "POST", children: [o2("input", { type: "hidden", name: "csrfToken", value: t3 }), Object.keys(e2.credentials).map((t4) => o2("div", { children: [o2("label", { className: "section-header", htmlFor: `input-${t4}-for-${e2.id}-provider`, children: e2.credentials[t4].label ?? t4 }), o2("input", { name: t4, id: `input-${t4}-for-${e2.id}-provider`, type: e2.credentials[t4].type ?? "text", placeholder: e2.credentials[t4].placeholder ?? "", ...e2.credentials[t4] })] }, `input-group-${e2.id}`)), o2("button", { id: "submitButton", type: "submit", tabIndex: 0, children: ["Sign in with ", e2.name] })] }), "webauthn" === e2.type && o2("form", { action: e2.callbackUrl, method: "POST", id: `${e2.id}-form`, children: [o2("input", { type: "hidden", name: "csrfToken", value: t3 }), Object.keys(e2.formFields).map((t4) => o2("div", { children: [o2("label", { className: "section-header", htmlFor: `input-${t4}-for-${e2.id}-provider`, children: e2.formFields[t4].label ?? t4 }), o2("input", { name: t4, "data-form-field": true, id: `input-${t4}-for-${e2.id}-provider`, type: e2.formFields[t4].type ?? "text", placeholder: e2.formFields[t4].placeholder ?? "", ...e2.formFields[t4] })] }, `input-group-${e2.id}`)), o2("button", { id: `submitButton-${e2.id}`, type: "submit", tabIndex: 0, children: ["Sign in with ", e2.name] })] }), ("email" === e2.type || "credentials" === e2.type || "webauthn" === e2.type) && i4 + 1 < r3.length && o2("hr", {})] }, e2.id);
  })] }), g6 && (b5 = g6, o2(p$1, { children: o2("script", { dangerouslySetInnerHTML: { __html: `
const currentURL = window.location.href;
const authURL = currentURL.substring(0, currentURL.lastIndexOf('/'));
(${webauthnScript})(authURL, "${b5}");
` } }) }))] });
  var b5;
}
function SignoutPage(e) {
  const { url: t3, csrfToken: r3, theme: n3 } = e;
  return o2("div", { className: "signout", children: [n3?.brandColor && o2("style", { dangerouslySetInnerHTML: { __html: `
        :root {
          --brand-color: ${n3.brandColor}
        }
      ` } }), n3?.buttonText && o2("style", { dangerouslySetInnerHTML: { __html: `
        :root {
          --button-text-color: ${n3.buttonText}
        }
      ` } }), o2("div", { className: "card", children: [n3?.logo && o2("img", { src: n3.logo, alt: "Logo", className: "logo" }), o2("h1", { children: "Signout" }), o2("p", { children: "Are you sure you want to sign out?" }), o2("form", { action: t3?.toString(), method: "POST", children: [o2("input", { type: "hidden", name: "csrfToken", value: r3 }), o2("button", { id: "submitButton", type: "submit", children: "Sign out" })] })] })] });
}
function VerifyRequestPage(e) {
  const { url: t3, theme: r3 } = e;
  return o2("div", { className: "verify-request", children: [r3.brandColor && o2("style", { dangerouslySetInnerHTML: { __html: `
        :root {
          --brand-color: ${r3.brandColor}
        }
      ` } }), o2("div", { className: "card", children: [r3.logo && o2("img", { src: r3.logo, alt: "Logo", className: "logo" }), o2("h1", { children: "Check your email" }), o2("p", { children: "A sign in link has been sent to your email address." }), o2("p", { children: o2("a", { className: "site", href: t3.origin, children: t3.host }) })] })] });
}
function send({ html: e, title: t3, status: r3, cookies: n3, theme: i3, headTags: a }) {
  return { cookies: n3, status: r3, headers: { "Content-Type": "text/html" }, body: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${Le}</style><title>${t3}</title>${a ?? ""}</head><body class="__next-auth-theme-${i3?.colorScheme ?? "auto"}"><div class="page">${k2(e)}</div></body></html>` };
}
function renderPage(e) {
  const { url: t3, theme: r3, query: n3, cookies: i3, pages: a, providers: c3 } = e;
  return { csrf: (e2, t4, r4) => e2 ? (t4.logger.warn("csrf-disabled"), r4.push({ name: t4.cookies.csrfToken.name, value: "", options: { ...t4.cookies.csrfToken.options, maxAge: 0 } }), { status: 404, cookies: r4 }) : { headers: { "Content-Type": "application/json" }, body: { csrfToken: t4.csrfToken }, cookies: r4 }, providers: (e2) => ({ headers: { "Content-Type": "application/json" }, body: e2.reduce((e3, { id: t4, name: r4, type: n4, signinUrl: i4, callbackUrl: a2 }) => (e3[t4] = { id: t4, name: r4, type: n4, signinUrl: i4, callbackUrl: a2 }, e3), {}) }), signin(t4, u4) {
    if (t4)
      throw new UnknownAction("Unsupported action");
    if (a?.signIn) {
      let t5 = `${a.signIn}${a.signIn.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl: e.callbackUrl ?? "/" })}`;
      return u4 && (t5 = `${t5}&${new URLSearchParams({ error: u4 })}`), { redirect: t5, cookies: i3 };
    }
    const m11 = c3?.find((e2) => "webauthn" === e2.type && e2.enableConditionalUI && !!e2.simpleWebAuthnBrowserVersion);
    let g6 = "";
    if (m11) {
      const { simpleWebAuthnBrowserVersion: e2 } = m11;
      g6 = `<script src="https://unpkg.com/@simplewebauthn/browser@${e2}/dist/bundle/index.umd.min.js" crossorigin="anonymous"><\/script>`;
    }
    return send({ cookies: i3, theme: r3, html: SigninPage({ csrfToken: e.csrfToken, providers: e.providers?.filter((e2) => ["email", "oauth", "oidc"].includes(e2.type) || "credentials" === e2.type && e2.credentials || "webauthn" === e2.type && e2.formFields || false), callbackUrl: e.callbackUrl, theme: e.theme, error: u4, ...n3 }), title: "Sign In", headTags: g6 });
  }, signout: () => a?.signOut ? { redirect: a.signOut, cookies: i3 } : send({ cookies: i3, theme: r3, html: SignoutPage({ csrfToken: e.csrfToken, url: t3, theme: r3 }), title: "Sign Out" }), verifyRequest: (e2) => a?.verifyRequest ? { redirect: a.verifyRequest, cookies: i3 } : send({ cookies: i3, theme: r3, html: VerifyRequestPage({ url: t3, theme: r3, ...e2 }), title: "Verify Request" }), error: (e2) => a?.error ? { redirect: `${a.error}${a.error.includes("?") ? "&" : "?"}error=${e2}`, cookies: i3 } : send({ cookies: i3, theme: r3, ...ErrorPage({ url: t3, theme: r3, error: e2 }), title: "Error" }) };
}
function fromDate(e, t3 = Date.now()) {
  return new Date(t3 + 1e3 * e);
}
async function handleLoginOrRegister(e, t3, r3, n3) {
  if (!r3?.providerAccountId || !r3.type)
    throw new Error("Missing or invalid provider account");
  if (!["email", "oauth", "oidc", "webauthn"].includes(r3.type))
    throw new Error("Provider not supported");
  const { adapter: i3, jwt: a, events: c3, session: { strategy: u4, generateSessionToken: m11 } } = n3;
  if (!i3)
    return { user: t3, account: r3 };
  const g6 = t3;
  let b5 = r3;
  const { createUser: E4, updateUser: A3, getUser: _3, getUserByAccount: T6, getUserByEmail: C4, linkAccount: x2, createSession: P5, getSessionAndUser: O2, deleteSession: R4 } = i3;
  let J3 = null, W2 = null, $5 = false;
  const H3 = "jwt" === u4;
  if (e)
    if (H3)
      try {
        const t4 = n3.cookies.sessionToken.name;
        J3 = await a.decode({ ...a, token: e, salt: t4 }), J3 && "sub" in J3 && J3.sub && (W2 = await _3(J3.sub));
      } catch {
      }
    else {
      const t4 = await O2(e);
      t4 && (J3 = t4.session, W2 = t4.user);
    }
  if ("email" === b5.type) {
    const t4 = await C4(g6.email);
    return t4 ? (W2?.id !== t4.id && !H3 && e && await R4(e), W2 = await A3({ id: t4.id, emailVerified: /* @__PURE__ */ new Date() }), await c3.updateUser?.({ user: W2 })) : (W2 = await E4({ ...g6, emailVerified: /* @__PURE__ */ new Date() }), await c3.createUser?.({ user: W2 }), $5 = true), J3 = H3 ? {} : await P5({ sessionToken: m11(), userId: W2.id, expires: fromDate(n3.session.maxAge) }), { session: J3, user: W2, isNewUser: $5 };
  }
  if ("webauthn" === b5.type) {
    const e2 = await T6({ providerAccountId: b5.providerAccountId, provider: b5.provider });
    if (e2) {
      if (W2) {
        if (e2.id === W2.id) {
          return { session: J3, user: W2, isNewUser: $5, account: { ...b5, userId: W2.id } };
        }
        throw new AccountNotLinked("The account is already associated with another user", { provider: b5.provider });
      }
      J3 = H3 ? {} : await P5({ sessionToken: m11(), userId: e2.id, expires: fromDate(n3.session.maxAge) });
      return { session: J3, user: e2, isNewUser: $5, account: { ...b5, userId: e2.id } };
    }
    if (W2) {
      await x2({ ...b5, userId: W2.id }), await c3.linkAccount?.({ user: W2, account: b5, profile: g6 });
      return { session: J3, user: W2, isNewUser: $5, account: { ...b5, userId: W2.id } };
    }
    if (g6.email ? await C4(g6.email) : null)
      throw new AccountNotLinked("Another account already exists with the same e-mail address", { provider: b5.provider });
    W2 = await E4({ ...g6 }), await c3.createUser?.({ user: W2 }), await x2({ ...b5, userId: W2.id }), await c3.linkAccount?.({ user: W2, account: b5, profile: g6 }), J3 = H3 ? {} : await P5({ sessionToken: m11(), userId: W2.id, expires: fromDate(n3.session.maxAge) });
    return { session: J3, user: W2, isNewUser: true, account: { ...b5, userId: W2.id } };
  }
  const K3 = await T6({ providerAccountId: b5.providerAccountId, provider: b5.provider });
  if (K3) {
    if (W2) {
      if (K3.id === W2.id)
        return { session: J3, user: W2, isNewUser: $5 };
      throw new OAuthAccountNotLinked("The account is already associated with another user", { provider: b5.provider });
    }
    return J3 = H3 ? {} : await P5({ sessionToken: m11(), userId: K3.id, expires: fromDate(n3.session.maxAge) }), { session: J3, user: K3, isNewUser: $5 };
  }
  {
    const { provider: e2 } = n3, { type: t4, provider: r4, providerAccountId: i4, userId: a2, ...u5 } = b5, A4 = { providerAccountId: i4, provider: r4, type: t4, userId: a2 };
    if (b5 = Object.assign(e2.account(u5) ?? {}, A4), W2)
      return await x2({ ...b5, userId: W2.id }), await c3.linkAccount?.({ user: W2, account: b5, profile: g6 }), { session: J3, user: W2, isNewUser: $5 };
    const _4 = g6.email ? await C4(g6.email) : null;
    if (_4) {
      const e3 = n3.provider;
      if (!e3?.allowDangerousEmailAccountLinking)
        throw new OAuthAccountNotLinked("Another account already exists with the same e-mail address", { provider: b5.provider });
      W2 = _4;
    } else
      W2 = await E4({ ...g6, emailVerified: null });
    return await c3.createUser?.({ user: W2 }), await x2({ ...b5, userId: W2.id }), await c3.linkAccount?.({ user: W2, account: b5, profile: g6 }), J3 = H3 ? {} : await P5({ sessionToken: m11(), userId: W2.id, expires: fromDate(n3.session.maxAge) }), { session: J3, user: W2, isNewUser: true };
  }
}
function looseInstanceOf(e, t3) {
  if (null == e)
    return false;
  try {
    return e instanceof t3 || Object.getPrototypeOf(e)[Symbol.toStringTag] === t3.prototype[Symbol.toStringTag];
  } catch {
    return false;
  }
}
function buf(e) {
  return "string" == typeof e ? Ve.encode(e) : qe.decode(e);
}
function b64u(e) {
  return "string" == typeof e ? function(e2) {
    try {
      const t3 = atob(e2.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "")), r3 = new Uint8Array(t3.length);
      for (let e3 = 0; e3 < t3.length; e3++)
        r3[e3] = t3.charCodeAt(e3);
      return r3;
    } catch (e3) {
      throw new Xe("The input to be decoded is not correctly encoded.", { cause: e3 });
    }
  }(e) : function(e2) {
    e2 instanceof ArrayBuffer && (e2 = new Uint8Array(e2));
    const t3 = [];
    for (let r3 = 0; r3 < e2.byteLength; r3 += Ge)
      t3.push(String.fromCharCode.apply(null, e2.subarray(r3, r3 + Ge)));
    return btoa(t3.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }(e);
}
function isCryptoKey(e) {
  return e instanceof CryptoKey;
}
function isPrivateKey(e) {
  return isCryptoKey(e) && "private" === e.type;
}
function processDpopNonce(e) {
  try {
    const t3 = e.headers.get("dpop-nonce");
    t3 && Ye.set(new URL(e.url).origin, t3);
  } catch {
  }
  return e;
}
function isJsonObject(e) {
  return null !== e && "object" == typeof e && !Array.isArray(e);
}
function prepareHeaders(e) {
  looseInstanceOf(e, Headers) && (e = Object.fromEntries(e.entries()));
  const t3 = new Headers(e);
  if (Me && !t3.has("user-agent") && t3.set("user-agent", Me), t3.has("authorization"))
    throw new TypeError('"options.headers" must not include the "authorization" header name');
  if (t3.has("dpop"))
    throw new TypeError('"options.headers" must not include the "dpop" header name');
  return t3;
}
function signal(e) {
  if ("function" == typeof e && (e = e()), !(e instanceof AbortSignal))
    throw new TypeError('"options.signal" must return or be an instance of AbortSignal');
  return e;
}
async function discoveryRequest(e, t3) {
  if (!(e instanceof URL))
    throw new TypeError('"issuerIdentifier" must be an instance of URL');
  if ("https:" !== e.protocol && "http:" !== e.protocol)
    throw new TypeError('"issuer.protocol" must be "https:" or "http:"');
  const r3 = new URL(e.href);
  switch (t3?.algorithm) {
    case void 0:
    case "oidc":
      r3.pathname = `${r3.pathname}/.well-known/openid-configuration`.replace("//", "/");
      break;
    case "oauth2":
      "/" === r3.pathname ? r3.pathname = ".well-known/oauth-authorization-server" : r3.pathname = `.well-known/oauth-authorization-server/${r3.pathname}`.replace("//", "/");
      break;
    default:
      throw new TypeError('"options.algorithm" must be "oidc" (default), or "oauth2"');
  }
  const n3 = prepareHeaders(t3?.headers);
  return n3.set("accept", "application/json"), (t3?.[ze] || fetch)(r3.href, { headers: Object.fromEntries(n3.entries()), method: "GET", redirect: "manual", signal: t3?.signal ? signal(t3.signal) : null }).then(processDpopNonce);
}
function validateString(e) {
  return "string" == typeof e && 0 !== e.length;
}
async function processDiscoveryResponse(e, t3) {
  if (!(e instanceof URL))
    throw new TypeError('"expectedIssuer" must be an instance of URL');
  if (!looseInstanceOf(t3, Response))
    throw new TypeError('"response" must be an instance of Response');
  if (200 !== t3.status)
    throw new Xe('"response" is not a conform Authorization Server Metadata response');
  let r3;
  assertReadableResponse(t3);
  try {
    r3 = await t3.json();
  } catch (e2) {
    throw new Xe('failed to parse "response" body as JSON', { cause: e2 });
  }
  if (!isJsonObject(r3))
    throw new Xe('"response" body must be a top level object');
  if (!validateString(r3.issuer))
    throw new Xe('"response" body "issuer" property must be a non-empty string');
  if (new URL(r3.issuer).href !== e.href)
    throw new Xe('"response" body "issuer" does not match "expectedIssuer"');
  return r3;
}
function randomBytes() {
  return b64u(crypto.getRandomValues(new Uint8Array(32)));
}
function formUrlEncode(e) {
  return encodeURIComponent(e).replace(/%20/g, "+");
}
function keyToJws(e) {
  switch (e.algorithm.name) {
    case "RSA-PSS":
      return function(e2) {
        switch (e2.algorithm.hash.name) {
          case "SHA-256":
            return "PS256";
          case "SHA-384":
            return "PS384";
          case "SHA-512":
            return "PS512";
          default:
            throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name");
        }
      }(e);
    case "RSASSA-PKCS1-v1_5":
      return function(e2) {
        switch (e2.algorithm.hash.name) {
          case "SHA-256":
            return "RS256";
          case "SHA-384":
            return "RS384";
          case "SHA-512":
            return "RS512";
          default:
            throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name");
        }
      }(e);
    case "ECDSA":
      return function(e2) {
        switch (e2.algorithm.namedCurve) {
          case "P-256":
            return "ES256";
          case "P-384":
            return "ES384";
          case "P-521":
            return "ES512";
          default:
            throw new UnsupportedOperationError("unsupported EcKeyAlgorithm namedCurve");
        }
      }(e);
    case "Ed25519":
    case "Ed448":
      return "EdDSA";
    default:
      throw new UnsupportedOperationError("unsupported CryptoKey algorithm name");
  }
}
function getClockSkew(e) {
  const t3 = e?.[Be];
  return "number" == typeof t3 && Number.isFinite(t3) ? t3 : 0;
}
function getClockTolerance(e) {
  const t3 = e?.[Fe];
  return "number" == typeof t3 && Number.isFinite(t3) && -1 !== Math.sign(t3) ? t3 : 30;
}
function epochTime() {
  return Math.floor(Date.now() / 1e3);
}
async function privateKeyJwt(e, t3, r3, n3) {
  return jwt({ alg: keyToJws(r3), kid: n3 }, function(e2, t4) {
    const r4 = epochTime() + getClockSkew(t4);
    return { jti: randomBytes(), aud: [e2.issuer, e2.token_endpoint], exp: r4 + 60, iat: r4, nbf: r4, iss: t4.client_id, sub: t4.client_id };
  }(e, t3), r3);
}
function assertAs(e) {
  if ("object" != typeof e || null === e)
    throw new TypeError('"as" must be an object');
  if (!validateString(e.issuer))
    throw new TypeError('"as.issuer" property must be a non-empty string');
  return true;
}
function assertClient(e) {
  if ("object" != typeof e || null === e)
    throw new TypeError('"client" must be an object');
  if (!validateString(e.client_id))
    throw new TypeError('"client.client_id" property must be a non-empty string');
  return true;
}
function assertClientSecret(e) {
  if (!validateString(e))
    throw new TypeError('"client.client_secret" property must be a non-empty string');
  return e;
}
function assertNoClientPrivateKey(e, t3) {
  if (void 0 !== t3)
    throw new TypeError(`"options.clientPrivateKey" property must not be provided when ${e} client authentication method is used.`);
}
function assertNoClientSecret(e, t3) {
  if (void 0 !== t3)
    throw new TypeError(`"client.client_secret" property must not be provided when ${e} client authentication method is used.`);
}
async function clientAuthentication(e, t3, r3, n3, i3) {
  switch (r3.delete("client_secret"), r3.delete("client_assertion_type"), r3.delete("client_assertion"), t3.token_endpoint_auth_method) {
    case void 0:
    case "client_secret_basic":
      assertNoClientPrivateKey("client_secret_basic", i3), n3.set("authorization", function(e2, t4) {
        const r4 = formUrlEncode(e2), n4 = formUrlEncode(t4);
        return `Basic ${btoa(`${r4}:${n4}`)}`;
      }(t3.client_id, assertClientSecret(t3.client_secret)));
      break;
    case "client_secret_post":
      assertNoClientPrivateKey("client_secret_post", i3), r3.set("client_id", t3.client_id), r3.set("client_secret", assertClientSecret(t3.client_secret));
      break;
    case "private_key_jwt": {
      if (assertNoClientSecret("private_key_jwt", t3.client_secret), void 0 === i3)
        throw new TypeError('"options.clientPrivateKey" must be provided when "client.token_endpoint_auth_method" is "private_key_jwt"');
      const { key: n4, kid: a } = function(e2) {
        if (e2 instanceof CryptoKey)
          return { key: e2 };
        if (!(e2?.key instanceof CryptoKey))
          return {};
        if (void 0 !== e2.kid && !validateString(e2.kid))
          throw new TypeError('"kid" must be a non-empty string');
        return { key: e2.key, kid: e2.kid };
      }(i3);
      if (!isPrivateKey(n4))
        throw new TypeError('"options.clientPrivateKey.key" must be a private CryptoKey');
      r3.set("client_id", t3.client_id), r3.set("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer"), r3.set("client_assertion", await privateKeyJwt(e, t3, n4, a));
      break;
    }
    case "tls_client_auth":
    case "self_signed_tls_client_auth":
    case "none":
      assertNoClientSecret(t3.token_endpoint_auth_method, t3.client_secret), assertNoClientPrivateKey(t3.token_endpoint_auth_method, i3), r3.set("client_id", t3.client_id);
      break;
    default:
      throw new UnsupportedOperationError("unsupported client token_endpoint_auth_method");
  }
}
async function jwt(e, t3, r3) {
  if (!r3.usages.includes("sign"))
    throw new TypeError('CryptoKey instances used for signing assertions must include "sign" in their "usages"');
  const n3 = `${b64u(buf(JSON.stringify(e)))}.${b64u(buf(JSON.stringify(t3)))}`;
  return `${n3}.${b64u(await crypto.subtle.sign(keyToSubtle(r3), r3, buf(n3)))}`;
}
async function dpopProofJwt(e, t3, r3, n3, i3, a) {
  const { privateKey: c3, publicKey: u4, nonce: m11 = Ye.get(r3.origin) } = t3;
  if (!isPrivateKey(c3))
    throw new TypeError('"DPoP.privateKey" must be a private CryptoKey');
  if (!isCryptoKey(g6 = u4) || "public" !== g6.type)
    throw new TypeError('"DPoP.publicKey" must be a public CryptoKey');
  var g6;
  if (void 0 !== m11 && !validateString(m11))
    throw new TypeError('"DPoP.nonce" must be a non-empty string or undefined');
  if (!u4.extractable)
    throw new TypeError('"DPoP.publicKey.extractable" must be true');
  const b5 = epochTime() + i3, E4 = await jwt({ alg: keyToJws(c3), typ: "dpop+jwt", jwk: await publicJwk(u4) }, { iat: b5, jti: randomBytes(), htm: n3, nonce: m11, htu: `${r3.origin}${r3.pathname}`, ath: a ? b64u(await crypto.subtle.digest("SHA-256", buf(a))) : void 0 }, c3);
  e.set("dpop", E4);
}
async function publicJwk(e) {
  return Ze || (Ze = /* @__PURE__ */ new WeakMap()), Ze.get(e) || async function(e2) {
    const { kty: t3, e: r3, n: n3, x: i3, y: a, crv: c3 } = await crypto.subtle.exportKey("jwk", e2), u4 = { kty: t3, e: r3, n: n3, x: i3, y: a, crv: c3 };
    return Ze.set(e2, u4), u4;
  }(e);
}
function resolveEndpoint(e, t3, r3) {
  return function(e2, t4, r4) {
    if ("string" != typeof e2)
      throw new TypeError(`"as.${t4}" must be a string`);
    return new URL(e2);
  }(e[t3], t3);
}
function isOAuth2Error(e) {
  const t3 = e;
  return "object" == typeof t3 && !Array.isArray(t3) && null !== t3 && void 0 !== t3.error;
}
function parseWwwAuthenticateChallenges(e) {
  if (!looseInstanceOf(e, Response))
    throw new TypeError('"response" must be an instance of Response');
  const t3 = e.headers.get("www-authenticate");
  if (null === t3)
    return;
  const r3 = [];
  for (const { 1: e2, index: n4 } of t3.matchAll(et))
    r3.push([e2, n4]);
  if (!r3.length)
    return;
  const n3 = r3.map(([e2, r4], n4, i3) => {
    const a = i3[n4 + 1];
    let c3;
    return c3 = a ? t3.slice(r4, a[1]) : t3.slice(r4), function(e3, t4) {
      const r5 = t4.split(Qe).slice(1);
      if (!r5.length)
        return { scheme: e3.toLowerCase(), parameters: {} };
      r5[r5.length - 1] = r5[r5.length - 1].replace(/,$/, "");
      const n5 = {};
      for (let e4 = 1; e4 < r5.length; e4 += 2) {
        const t5 = e4;
        if ('"' === r5[t5][0])
          for (; '"' !== r5[t5].slice(-1) && ++e4 < r5.length; )
            r5[t5] += r5[e4];
        n5[r5[t5 - 1].replace(/^(?:, ?)|=$/g, "").toLowerCase()] = (i4 = r5[t5]).length >= 2 && '"' === i4[0] && '"' === i4[i4.length - 1] ? i4.slice(1, -1) : i4;
      }
      var i4;
      return { scheme: e3.toLowerCase(), parameters: n5 };
    }(e2, c3);
  });
  return n3;
}
async function userInfoRequest(e, t3, r3, n3) {
  assertAs(e), assertClient(t3);
  const i3 = resolveEndpoint(e, "userinfo_endpoint"), a = prepareHeaders(n3?.headers);
  return t3.userinfo_signed_response_alg ? a.set("accept", "application/jwt") : (a.set("accept", "application/json"), a.append("accept", "application/jwt")), async function(e2, t4, r4, n4, i4, a2) {
    if (!validateString(e2))
      throw new TypeError('"accessToken" must be a non-empty string');
    if (!(r4 instanceof URL))
      throw new TypeError('"url" must be an instance of URL');
    return n4 = prepareHeaders(n4), void 0 === a2?.DPoP ? n4.set("authorization", `Bearer ${e2}`) : (await dpopProofJwt(n4, a2.DPoP, r4, "GET", getClockSkew({ [Be]: a2?.[Be] }), e2), n4.set("authorization", `DPoP ${e2}`)), (a2?.[ze] || fetch)(r4.href, { body: i4, headers: Object.fromEntries(n4.entries()), method: t4, redirect: "manual", signal: a2?.signal ? signal(a2.signal) : null }).then(processDpopNonce);
  }(r3, "GET", i3, a, null, { ...n3, [Be]: getClockSkew(t3) });
}
async function tokenEndpointRequest(e, t3, r3, n3, i3) {
  const a = resolveEndpoint(e, "token_endpoint");
  n3.set("grant_type", r3);
  const c3 = prepareHeaders(i3?.headers);
  return c3.set("accept", "application/json"), async function(e2, t4, r4, n4, i4, a2, c4) {
    return await clientAuthentication(e2, t4, i4, a2, c4?.clientPrivateKey), a2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), (c4?.[ze] || fetch)(n4.href, { body: i4, headers: Object.fromEntries(a2.entries()), method: r4, redirect: "manual", signal: c4?.signal ? signal(c4.signal) : null }).then(processDpopNonce);
  }(e, t3, "POST", a, n3, c3, i3);
}
function getValidatedIdTokenClaims(e) {
  if (!e.id_token)
    return;
  const t3 = tt.get(e);
  if (!t3)
    throw new TypeError('"ref" was already garbage collected or did not resolve from the proper sources');
  return t3;
}
async function processGenericAccessTokenResponse(e, t3, r3, n3 = false, i3 = false) {
  if (assertAs(e), assertClient(t3), !looseInstanceOf(r3, Response))
    throw new TypeError('"response" must be an instance of Response');
  if (200 !== r3.status) {
    let e2;
    if (e2 = await async function(e3) {
      if (e3.status > 399 && e3.status < 500) {
        assertReadableResponse(e3);
        try {
          const t4 = await e3.json();
          if (isJsonObject(t4) && "string" == typeof t4.error && t4.error.length)
            return void 0 !== t4.error_description && "string" != typeof t4.error_description && delete t4.error_description, void 0 !== t4.error_uri && "string" != typeof t4.error_uri && delete t4.error_uri, void 0 !== t4.algs && "string" != typeof t4.algs && delete t4.algs, void 0 !== t4.scope && "string" != typeof t4.scope && delete t4.scope, t4;
        } catch {
        }
      }
      return;
    }(r3))
      return e2;
    throw new Xe('"response" is not a conform Token Endpoint response');
  }
  let a;
  assertReadableResponse(r3);
  try {
    a = await r3.json();
  } catch (e2) {
    throw new Xe('failed to parse "response" body as JSON', { cause: e2 });
  }
  if (!isJsonObject(a))
    throw new Xe('"response" body must be a top level object');
  if (!validateString(a.access_token))
    throw new Xe('"response" body "access_token" property must be a non-empty string');
  if (!validateString(a.token_type))
    throw new Xe('"response" body "token_type" property must be a non-empty string');
  if (a.token_type = a.token_type.toLowerCase(), "dpop" !== a.token_type && "bearer" !== a.token_type)
    throw new UnsupportedOperationError("unsupported `token_type` value");
  if (void 0 !== a.expires_in && ("number" != typeof a.expires_in || a.expires_in <= 0))
    throw new Xe('"response" body "expires_in" property must be a positive number');
  if (!i3 && void 0 !== a.refresh_token && !validateString(a.refresh_token))
    throw new Xe('"response" body "refresh_token" property must be a non-empty string');
  if (void 0 !== a.scope && "string" != typeof a.scope)
    throw new Xe('"response" body "scope" property must be a string');
  if (!n3) {
    if (void 0 !== a.id_token && !validateString(a.id_token))
      throw new Xe('"response" body "id_token" property must be a non-empty string');
    if (a.id_token) {
      const { claims: r4 } = await async function(e2, t4, r5, n4, i4) {
        const { 0: a2, 1: c3, 2: u4, length: m11 } = e2.split(".");
        if (5 === m11)
          throw new UnsupportedOperationError("JWE structure JWTs are not supported");
        if (3 !== m11)
          throw new Xe("Invalid JWT");
        let g6;
        try {
          g6 = JSON.parse(buf(b64u(a2)));
        } catch (e3) {
          throw new Xe("failed to parse JWT Header body as base64url encoded JSON", { cause: e3 });
        }
        if (!isJsonObject(g6))
          throw new Xe("JWT Header must be a top level object");
        if (t4(g6), void 0 !== g6.crit)
          throw new Xe('unexpected JWT "crit" header parameter');
        const b5 = b64u(u4);
        let E4, A3;
        if (r5 !== at) {
          E4 = await r5(g6);
          const e3 = `${a2}.${c3}`;
          if (!await crypto.subtle.verify(keyToSubtle(E4), E4, b5, buf(e3)))
            throw new Xe("JWT signature verification failed");
        }
        try {
          A3 = JSON.parse(buf(b64u(c3)));
        } catch (e3) {
          throw new Xe("failed to parse JWT Payload body as base64url encoded JSON", { cause: e3 });
        }
        if (!isJsonObject(A3))
          throw new Xe("JWT Payload must be a top level object");
        const _3 = epochTime() + n4;
        if (void 0 !== A3.exp) {
          if ("number" != typeof A3.exp)
            throw new Xe('unexpected JWT "exp" (expiration time) claim type');
          if (A3.exp <= _3 - i4)
            throw new Xe('unexpected JWT "exp" (expiration time) claim value, timestamp is <= now()');
        }
        if (void 0 !== A3.iat && "number" != typeof A3.iat)
          throw new Xe('unexpected JWT "iat" (issued at) claim type');
        if (void 0 !== A3.iss && "string" != typeof A3.iss)
          throw new Xe('unexpected JWT "iss" (issuer) claim type');
        if (void 0 !== A3.nbf) {
          if ("number" != typeof A3.nbf)
            throw new Xe('unexpected JWT "nbf" (not before) claim type');
          if (A3.nbf > _3 + i4)
            throw new Xe('unexpected JWT "nbf" (not before) claim value, timestamp is > now()');
        }
        if (void 0 !== A3.aud && "string" != typeof A3.aud && !Array.isArray(A3.aud))
          throw new Xe('unexpected JWT "aud" (audience) claim type');
        return { header: g6, claims: A3, signature: b5, key: E4 };
      }(a.id_token, checkSigningAlgorithm.bind(void 0, t3.id_token_signed_response_alg, e.id_token_signing_alg_values_supported), at, getClockSkew(t3), getClockTolerance(t3)).then(validatePresence.bind(void 0, ["aud", "exp", "iat", "iss", "sub"])).then(validateIssuer.bind(void 0, e.issuer)).then(validateAudience.bind(void 0, t3.client_id));
      if (Array.isArray(r4.aud) && 1 !== r4.aud.length && r4.azp !== t3.client_id)
        throw new Xe('unexpected ID Token "azp" (authorized party) claim value');
      if (t3.require_auth_time && "number" != typeof r4.auth_time)
        throw new Xe('unexpected ID Token "auth_time" (authentication time) claim value');
      tt.set(a, r4);
    }
  }
  return a;
}
function validateAudience(e, t3) {
  if (Array.isArray(t3.claims.aud)) {
    if (!t3.claims.aud.includes(e))
      throw new Xe('unexpected JWT "aud" (audience) claim value');
  } else if (t3.claims.aud !== e)
    throw new Xe('unexpected JWT "aud" (audience) claim value');
  return t3;
}
function validateIssuer(e, t3) {
  if (t3.claims.iss !== e)
    throw new Xe('unexpected JWT "iss" (issuer) claim value');
  return t3;
}
function validatePresence(e, t3) {
  for (const r3 of e)
    if (void 0 === t3.claims[r3])
      throw new Xe(`JWT "${r3}" (${nt[r3]}) claim missing`);
  return t3;
}
function assertReadableResponse(e) {
  if (e.bodyUsed)
    throw new TypeError('"response" body has been used already');
}
function checkRsaKeyAlgorithm(e) {
  if ("number" != typeof e.modulusLength || e.modulusLength < 2048)
    throw new Xe(`${e.name} modulusLength must be at least 2048 bits`);
}
function ecdsaHashName(e) {
  switch (e) {
    case "P-256":
      return "SHA-256";
    case "P-384":
      return "SHA-384";
    case "P-521":
      return "SHA-512";
    default:
      throw new UnsupportedOperationError();
  }
}
function keyToSubtle(e) {
  switch (e.algorithm.name) {
    case "ECDSA":
      return { name: e.algorithm.name, hash: ecdsaHashName(e.algorithm.namedCurve) };
    case "RSA-PSS":
      switch (checkRsaKeyAlgorithm(e.algorithm), e.algorithm.hash.name) {
        case "SHA-256":
        case "SHA-384":
        case "SHA-512":
          return { name: e.algorithm.name, saltLength: parseInt(e.algorithm.hash.name.slice(-3), 10) >> 3 };
        default:
          throw new UnsupportedOperationError();
      }
    case "RSASSA-PKCS1-v1_5":
      return checkRsaKeyAlgorithm(e.algorithm), e.algorithm.name;
    case "Ed448":
    case "Ed25519":
      return e.algorithm.name;
  }
  throw new UnsupportedOperationError();
}
function checkSigningAlgorithm(e, t3, r3) {
  if (void 0 === e) {
    if (Array.isArray(t3)) {
      if (!t3.includes(r3.alg))
        throw new Xe('unexpected JWT "alg" header parameter');
    } else if ("RS256" !== r3.alg)
      throw new Xe('unexpected JWT "alg" header parameter');
  } else if (r3.alg !== e)
    throw new Xe('unexpected JWT "alg" header parameter');
}
function getURLSearchParameter(e, t3) {
  const { 0: r3, length: n3 } = e.getAll(t3);
  if (n3 > 1)
    throw new Xe(`"${t3}" parameter must be provided only once`);
  return r3;
}
function validateAuthResponse(e, t3, r3, n3) {
  if (assertAs(e), assertClient(t3), r3 instanceof URL && (r3 = r3.searchParams), !(r3 instanceof URLSearchParams))
    throw new TypeError('"parameters" must be an instance of URLSearchParams, or URL');
  if (getURLSearchParameter(r3, "response"))
    throw new Xe('"parameters" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()');
  const i3 = getURLSearchParameter(r3, "iss"), a = getURLSearchParameter(r3, "state");
  if (!i3 && e.authorization_response_iss_parameter_supported)
    throw new Xe('response parameter "iss" (issuer) missing');
  if (i3 && i3 !== e.issuer)
    throw new Xe('unexpected "iss" (issuer) response parameter value');
  switch (n3) {
    case void 0:
    case ct:
      if (void 0 !== a)
        throw new Xe('unexpected "state" response parameter encountered');
      break;
    case st:
      break;
    default:
      if (!validateString(n3))
        throw new Xe('"expectedState" must be a non-empty string');
      if (void 0 === a)
        throw new Xe('response parameter "state" missing');
      if (a !== n3)
        throw new Xe('unexpected "state" response parameter value');
  }
  const c3 = getURLSearchParameter(r3, "error");
  if (c3)
    return { error: c3, error_description: getURLSearchParameter(r3, "error_description"), error_uri: getURLSearchParameter(r3, "error_uri") };
  const u4 = getURLSearchParameter(r3, "id_token"), m11 = getURLSearchParameter(r3, "token");
  if (void 0 !== u4 || void 0 !== m11)
    throw new UnsupportedOperationError("implicit and hybrid flows are not supported");
  return g6 = new URLSearchParams(r3), rt.add(g6), g6;
  var g6;
}
async function signCookie(e, t3, r3, n3, i3) {
  const { cookies: a, logger: c3 } = n3;
  c3.debug(`CREATE_${e.toUpperCase()}`, { value: t3, maxAge: r3 });
  const u4 = /* @__PURE__ */ new Date();
  u4.setTime(u4.getTime() + 1e3 * r3);
  const m11 = { value: t3 };
  "state" === e && i3 && (m11.data = i3);
  const g6 = a[e].name;
  return { name: g6, value: await encode({ ...n3.jwt, maxAge: r3, token: m11, salt: g6 }), options: { ...a[e].options, expires: u4 } };
}
function decodeState(e) {
  try {
    const t3 = new TextDecoder();
    return JSON.parse(t3.decode(be(e)));
  } catch {
  }
}
async function handleOAuth(e, t3, r3, n3) {
  const { logger: i3, provider: a } = r3;
  let c3;
  const { token: u4, userinfo: m11 } = a;
  if (u4?.url && "authjs.dev" !== u4.url.host || m11?.url && "authjs.dev" !== m11.url.host)
    c3 = { issuer: a.issuer ?? "https://authjs.dev", token_endpoint: u4?.url.toString(), userinfo_endpoint: m11?.url.toString() };
  else {
    const e2 = new URL(a.issuer), t4 = await discoveryRequest(e2), r4 = await processDiscoveryResponse(e2, t4);
    if (!r4.token_endpoint)
      throw new TypeError("TODO: Authorization server did not provide a token endpoint.");
    if (!r4.userinfo_endpoint)
      throw new TypeError("TODO: Authorization server did not provide a userinfo endpoint.");
    c3 = r4;
  }
  const g6 = { client_id: a.clientId, client_secret: a.clientSecret, ...a.client }, b5 = [], E4 = await lt.use(t3, b5, r3, n3), A3 = validateAuthResponse(c3, g6, new URLSearchParams(e), a.checks.includes("state") ? E4 : st);
  if (isOAuth2Error(A3)) {
    const e2 = { providerId: a.id, ...A3 };
    throw i3.debug("OAuthCallbackError", e2), new OAuthCallbackError("OAuth Provider returned an error", e2);
  }
  const _3 = await dt.use(t3, b5, r3);
  let T6 = a.callbackUrl;
  !r3.isOnRedirectProxy && a.redirectProxyUrl && (T6 = a.redirectProxyUrl);
  let C4, x2 = await async function(e2, t4, r4, n4, i4, a2) {
    if (assertAs(e2), assertClient(t4), !rt.has(r4))
      throw new TypeError('"callbackParameters" must be an instance of URLSearchParams obtained from "validateAuthResponse()", or "validateJwtAuthResponse()');
    if (!validateString(n4))
      throw new TypeError('"redirectUri" must be a non-empty string');
    if (!validateString(i4))
      throw new TypeError('"codeVerifier" must be a non-empty string');
    const c4 = getURLSearchParameter(r4, "code");
    if (!c4)
      throw new Xe('no authorization code in "callbackParameters"');
    const u5 = new URLSearchParams(a2?.additionalParameters);
    return u5.set("redirect_uri", n4), u5.set("code_verifier", i4), u5.set("code", c4), tokenEndpointRequest(e2, t4, "authorization_code", u5, a2);
  }(c3, g6, A3, T6, _3 ?? "auth");
  if (a.token?.conform && (x2 = await a.token.conform(x2.clone()) ?? x2), C4 = parseWwwAuthenticateChallenges(x2)) {
    for (const e2 of C4)
      console.log("challenge", e2);
    throw new Error("TODO: Handle www-authenticate challenges as needed");
  }
  let U3, I2 = {};
  if ("oidc" === a.type) {
    const e2 = await ut.use(t3, b5, r3), n4 = await async function(e3, t4, r4, n5, i4) {
      const a2 = await processGenericAccessTokenResponse(e3, t4, r4);
      if (isOAuth2Error(a2))
        return a2;
      if (!validateString(a2.id_token))
        throw new Xe('"response" body "id_token" property must be a non-empty string');
      i4 ?? (i4 = t4.default_max_age ?? it);
      const c4 = getValidatedIdTokenClaims(a2);
      if ((t4.require_auth_time || i4 !== it) && void 0 === c4.auth_time)
        throw new Xe('ID Token "auth_time" (authentication time) claim missing');
      if (i4 !== it) {
        if ("number" != typeof i4 || i4 < 0)
          throw new TypeError('"options.max_age" must be a non-negative number');
        const e4 = epochTime() + getClockSkew(t4), r5 = getClockTolerance(t4);
        if (c4.auth_time + i4 < e4 - r5)
          throw new Xe("too much time has elapsed since the last End-User authentication");
      }
      switch (n5) {
        case void 0:
        case ot:
          if (void 0 !== c4.nonce)
            throw new Xe('unexpected ID Token "nonce" claim value');
          break;
        default:
          if (!validateString(n5))
            throw new TypeError('"expectedNonce" must be a non-empty string');
          if (void 0 === c4.nonce)
            throw new Xe('ID Token "nonce" claim missing');
          if (c4.nonce !== n5)
            throw new Xe('unexpected ID Token "nonce" claim value');
      }
      return a2;
    }(c3, g6, x2, e2 ?? ot);
    if (isOAuth2Error(n4))
      throw console.log("error", n4), new Error("TODO: Handle OIDC response body error");
    I2 = getValidatedIdTokenClaims(n4), U3 = n4;
  } else {
    if (U3 = await async function(e2, t4, r4) {
      const n4 = await processGenericAccessTokenResponse(e2, t4, r4, true);
      if (isOAuth2Error(n4))
        return n4;
      if (void 0 !== n4.id_token) {
        if ("string" == typeof n4.id_token && n4.id_token.length)
          throw new Xe("Unexpected ID Token returned, use processAuthorizationCodeOpenIDResponse() for OpenID Connect callback processing");
        delete n4.id_token;
      }
      return n4;
    }(c3, g6, x2), isOAuth2Error(U3))
      throw console.log("error", U3), new Error("TODO: Handle OAuth 2.0 response body error");
    if (m11?.request) {
      const e2 = await m11.request({ tokens: U3, provider: a });
      e2 instanceof Object && (I2 = e2);
    } else {
      if (!m11?.url)
        throw new TypeError("No userinfo endpoint configured");
      {
        const e2 = await userInfoRequest(c3, g6, U3.access_token);
        I2 = await e2.json();
      }
    }
  }
  U3.expires_in && (U3.expires_at = Math.floor(Date.now() / 1e3) + Number(U3.expires_in));
  const P5 = await async function(e2, t4, r4, n4) {
    try {
      const n5 = await t4.profile(e2, r4);
      return { user: { ...n5, id: crypto.randomUUID(), email: n5.email?.toLowerCase() }, account: { ...r4, provider: t4.id, type: t4.type, providerAccountId: n5.id ?? crypto.randomUUID() } };
    } catch (r5) {
      n4.debug("getProfile error details", e2), n4.error(new OAuthProfileParseError(r5, { provider: t4.id }));
    }
  }(I2, a, U3, i3);
  return { ...P5, profile: I2, cookies: b5 };
}
async function getRegistrationResponse(e, t3, r3, n3) {
  const i3 = await async function(e2, t4, r4) {
    const { provider: n4, adapter: i4 } = e2, a2 = r4.id ? await i4.listAuthenticatorsByUserId(r4.id) : null, c3 = randomString(32), u4 = n4.getRelayingParty(e2, t4);
    return await n4.simpleWebAuthn.generateRegistrationOptions({ ...n4.registrationOptions, userID: c3, userName: r4.email, userDisplayName: r4.name ?? void 0, rpID: u4.id, rpName: u4.name, excludeCredentials: a2?.map((e3) => ({ id: fromBase64(e3.credentialID), type: "public-key", transports: stringToTransports(e3.transports) })) });
  }(e, t3, r3), { cookie: a } = await pt.create(e, i3.challenge, r3);
  return { status: 200, cookies: [...n3 ?? [], a], body: { action: "register", options: i3 }, headers: { "Content-Type": "application/json" } };
}
async function getAuthenticationResponse(e, t3, r3, n3) {
  const i3 = await async function(e2, t4, r4) {
    const { provider: n4, adapter: i4 } = e2, a2 = r4 && r4.id ? await i4.listAuthenticatorsByUserId(r4.id) : null, c3 = n4.getRelayingParty(e2, t4);
    return await n4.simpleWebAuthn.generateAuthenticationOptions({ ...n4.authenticationOptions, rpID: c3.id, allowCredentials: a2?.map((e3) => ({ id: fromBase64(e3.credentialID), type: "public-key", transports: stringToTransports(e3.transports) })) });
  }(e, t3, r3), { cookie: a } = await pt.create(e, i3.challenge);
  return { status: 200, cookies: [...n3 ?? [], a], body: { action: "authenticate", options: i3 }, headers: { "Content-Type": "application/json" } };
}
function assertInternalOptionsWebAuthn(e) {
  const { provider: t3, adapter: r3 } = e;
  if (!r3)
    throw new MissingAdapter("An adapter is required for the WebAuthn provider");
  if (!t3 || "webauthn" !== t3.type)
    throw new InvalidProvider("Provider must be WebAuthn");
  return { ...e, provider: t3, adapter: r3 };
}
function fromAdapterAuthenticator(e) {
  return { ...e, credentialDeviceType: e.credentialDeviceType, transports: stringToTransports(e.transports), credentialID: fromBase64(e.credentialID), credentialPublicKey: fromBase64(e.credentialPublicKey) };
}
function fromBase64(e) {
  return new Uint8Array(M.from(e, "base64"));
}
function toBase64(e) {
  return M.from(e).toString("base64");
}
function stringToTransports(e) {
  return e ? e.split(",") : void 0;
}
async function callback(e, t3, r3, n3) {
  if (!t3.provider)
    throw new InvalidProvider("Callback route called without provider");
  const { query: a, body: c3, method: u4, headers: m11 } = e, { provider: g6, adapter: b5, url: E4, callbackUrl: A3, pages: _3, jwt: T6, events: C4, callbacks: U3, session: { strategy: I2, maxAge: O2 }, logger: R4 } = t3, $5 = "jwt" === I2;
  try {
    if ("oauth" === g6.type || "oidc" === g6.type) {
      const { proxyRedirect: i3, randomState: c4 } = function(e2, t4, r4) {
        let n4, i4;
        if (t4.redirectProxyUrl && !e2?.state)
          throw new InvalidCheck("Missing state in query, but required for redirect proxy");
        const a2 = decodeState(e2?.state);
        if (n4 = a2?.random, r4) {
          if (!a2?.origin)
            return { randomState: n4 };
          i4 = `${a2.origin}?${new URLSearchParams(e2)}`;
        }
        return { randomState: n4, proxyRedirect: i4 };
      }(a, g6, t3.isOnRedirectProxy);
      if (i3)
        return R4.debug("proxy redirect", { proxyRedirect: i3, randomState: c4 }), { redirect: i3 };
      const u5 = await handleOAuth(a, e.cookies, t3, c4);
      u5.cookies.length && n3.push(...u5.cookies), R4.debug("authorization result", u5);
      const { user: m12, account: x2, profile: I3 } = u5;
      if (!m12 || !x2 || !I3)
        return { redirect: `${E4}/signin`, cookies: n3 };
      let J3;
      if (b5) {
        const { getUserByAccount: e2 } = b5;
        J3 = await e2({ providerAccountId: x2.providerAccountId, provider: g6.id });
      }
      const W2 = await handleAuthorized({ user: J3 ?? m12, account: x2, profile: I3 }, t3);
      if (W2)
        return { redirect: W2, cookies: n3 };
      const { user: H3, session: K3, isNewUser: D2 } = await handleLoginOrRegister(r3.value, m12, x2, t3);
      if ($5) {
        const e2 = { name: H3.name, email: H3.email, picture: H3.image, sub: H3.id?.toString() }, i4 = await U3.jwt({ token: e2, user: H3, account: x2, profile: I3, isNewUser: D2, trigger: D2 ? "signUp" : "signIn" });
        if (null === i4)
          n3.push(...r3.clean());
        else {
          const e3 = t3.cookies.sessionToken.name, a2 = await T6.encode({ ...T6, token: i4, salt: e3 }), c5 = /* @__PURE__ */ new Date();
          c5.setTime(c5.getTime() + 1e3 * O2);
          const u6 = r3.chunk(a2, { expires: c5 });
          n3.push(...u6);
        }
      } else
        n3.push({ name: t3.cookies.sessionToken.name, value: K3.sessionToken, options: { ...t3.cookies.sessionToken.options, expires: K3.expires } });
      return await C4.signIn?.({ user: H3, account: x2, profile: I3, isNewUser: D2 }), D2 && _3.newUser ? { redirect: `${_3.newUser}${_3.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl: A3 })}`, cookies: n3 } : { redirect: A3, cookies: n3 };
    }
    if ("email" === g6.type) {
      const e2 = a?.token, i3 = a?.email;
      if (!e2 || !i3) {
        const t4 = new TypeError("Missing token or email. The sign-in URL was manually opened without token/identifier or the link was not sent correctly in the email.", { cause: { hasToken: !!e2, hasEmail: !!i3 } });
        throw t4.name = "Configuration", t4;
      }
      const c4 = g6.secret ?? t3.secret, u5 = await b5.useVerificationToken({ identifier: i3, token: await createHash(`${e2}${c4}`) }), m12 = !!u5, E5 = u5 ? u5.expires.valueOf() < Date.now() : void 0;
      if (!m12 || E5)
        throw new Verification({ hasInvite: m12, expired: E5 });
      const x2 = await b5.getUserByEmail(i3) ?? { id: crypto.randomUUID(), email: i3, emailVerified: null }, I3 = { providerAccountId: x2.email, userId: x2.id, type: "email", provider: g6.id }, P5 = await handleAuthorized({ user: x2, account: I3 }, t3);
      if (P5)
        return { redirect: P5, cookies: n3 };
      const { user: R5, session: J3, isNewUser: W2 } = await handleLoginOrRegister(r3.value, x2, I3, t3);
      if ($5) {
        const e3 = { name: R5.name, email: R5.email, picture: R5.image, sub: R5.id?.toString() }, i4 = await U3.jwt({ token: e3, user: R5, account: I3, isNewUser: W2, trigger: W2 ? "signUp" : "signIn" });
        if (null === i4)
          n3.push(...r3.clean());
        else {
          const e4 = t3.cookies.sessionToken.name, a2 = await T6.encode({ ...T6, token: i4, salt: e4 }), c5 = /* @__PURE__ */ new Date();
          c5.setTime(c5.getTime() + 1e3 * O2);
          const u6 = r3.chunk(a2, { expires: c5 });
          n3.push(...u6);
        }
      } else
        n3.push({ name: t3.cookies.sessionToken.name, value: J3.sessionToken, options: { ...t3.cookies.sessionToken.options, expires: J3.expires } });
      return await C4.signIn?.({ user: R5, account: I3, isNewUser: W2 }), W2 && _3.newUser ? { redirect: `${_3.newUser}${_3.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl: A3 })}`, cookies: n3 } : { redirect: A3, cookies: n3 };
    }
    if ("credentials" === g6.type && "POST" === u4) {
      const e2 = c3 ?? {};
      Object.entries(a ?? {}).forEach(([e3, t4]) => E4.searchParams.set(e3, t4));
      const i3 = await g6.authorize(e2, new Request(E4, { headers: m11, method: u4, body: JSON.stringify(c3) }));
      if (!i3)
        throw new CredentialsSignin();
      i3.id = i3.id?.toString() ?? crypto.randomUUID();
      const b6 = { providerAccountId: i3.id, type: "credentials", provider: g6.id }, _4 = await handleAuthorized({ user: i3, account: b6, credentials: e2 }, t3);
      if (_4)
        return { redirect: _4, cookies: n3 };
      const x2 = { name: i3.name, email: i3.email, picture: i3.image, sub: i3.id }, I3 = await U3.jwt({ token: x2, user: i3, account: b6, isNewUser: false, trigger: "signIn" });
      if (null === I3)
        n3.push(...r3.clean());
      else {
        const e3 = t3.cookies.sessionToken.name, i4 = await T6.encode({ ...T6, token: I3, salt: e3 }), a2 = /* @__PURE__ */ new Date();
        a2.setTime(a2.getTime() + 1e3 * O2);
        const c4 = r3.chunk(i4, { expires: a2 });
        n3.push(...c4);
      }
      return await C4.signIn?.({ user: i3, account: b6 }), { redirect: A3, cookies: n3 };
    }
    if ("webauthn" === g6.type && "POST" === u4) {
      const a2 = e.body?.action;
      if ("string" != typeof a2 || "authenticate" !== a2 && "register" !== a2)
        throw new AuthError("Invalid action parameter");
      const c4 = assertInternalOptionsWebAuthn(t3);
      let u5, m12, g7;
      switch (a2) {
        case "authenticate": {
          const t4 = await async function(e2, t5, r4) {
            const { adapter: n4, provider: a3 } = e2, c5 = t5.body && "string" == typeof t5.body.data ? JSON.parse(t5.body.data) : void 0;
            if (!c5 || "object" != typeof c5 || !("id" in c5) || "string" != typeof c5.id)
              throw new AuthError("Invalid WebAuthn Authentication response");
            const u6 = toBase64(fromBase64(c5.id)), m13 = await n4.getAuthenticator(u6);
            if (!m13)
              throw new AuthError(`WebAuthn authenticator not found in database: ${JSON.stringify({ credentialID: u6 })}`);
            const { challenge: g8 } = await pt.use(e2, t5.cookies, r4);
            let b7;
            try {
              const r5 = a3.getRelayingParty(e2, t5);
              b7 = await a3.simpleWebAuthn.verifyAuthenticationResponse({ ...a3.verifyAuthenticationOptions, expectedChallenge: g8, response: c5, authenticator: fromAdapterAuthenticator(m13), expectedOrigin: r5.origin, expectedRPID: r5.id });
            } catch (e3) {
              throw new WebAuthnVerificationError(e3);
            }
            const { verified: E6, authenticationInfo: A4 } = b7;
            if (!E6)
              throw new WebAuthnVerificationError("WebAuthn authentication response could not be verified.");
            try {
              const { newCounter: e3 } = A4;
              await n4.updateAuthenticatorCounter(m13.credentialID, e3);
            } catch (e3) {
              throw new AdapterError(`Failed to update authenticator counter. This may cause future authentication attempts to fail. ${JSON.stringify({ credentialID: u6, oldCounter: m13.counter, newCounter: A4.newCounter })}`, e3);
            }
            const _4 = await n4.getAccount(m13.providerAccountId, a3.id);
            if (!_4)
              throw new AuthError(`WebAuthn account not found in database: ${JSON.stringify({ credentialID: u6, providerAccountId: m13.providerAccountId })}`);
            const T7 = await n4.getUser(_4.userId);
            if (!T7)
              throw new AuthError(`WebAuthn user not found in database: ${JSON.stringify({ credentialID: u6, providerAccountId: m13.providerAccountId, userID: _4.userId })}`);
            return { account: _4, user: T7 };
          }(c4, e, n3);
          u5 = t4.user, m12 = t4.account;
          break;
        }
        case "register": {
          const r4 = await async function(e2, t4, r5) {
            const { provider: n4 } = e2, a3 = t4.body && "string" == typeof t4.body.data ? JSON.parse(t4.body.data) : void 0;
            if (!a3 || "object" != typeof a3 || !("id" in a3) || "string" != typeof a3.id)
              throw new AuthError("Invalid WebAuthn Registration response");
            const { challenge: c5, registerData: u6 } = await pt.use(e2, t4.cookies, r5);
            if (!u6)
              throw new AuthError("Missing user registration data in WebAuthn challenge cookie");
            let m13;
            try {
              const r6 = n4.getRelayingParty(e2, t4);
              m13 = await n4.simpleWebAuthn.verifyRegistrationResponse({ ...n4.verifyRegistrationOptions, expectedChallenge: c5, response: a3, expectedOrigin: r6.origin, expectedRPID: r6.id });
            } catch (e3) {
              throw new WebAuthnVerificationError(e3);
            }
            if (!m13.verified || !m13.registrationInfo)
              throw new WebAuthnVerificationError("WebAuthn registration response could not be verified");
            const g8 = { providerAccountId: toBase64(m13.registrationInfo.credentialID), provider: e2.provider.id, type: n4.type };
            var b7;
            return { user: u6, account: g8, authenticator: { providerAccountId: g8.providerAccountId, counter: m13.registrationInfo.counter, credentialID: toBase64(m13.registrationInfo.credentialID), credentialPublicKey: toBase64(m13.registrationInfo.credentialPublicKey), credentialBackedUp: m13.registrationInfo.credentialBackedUp, credentialDeviceType: m13.registrationInfo.credentialDeviceType, transports: (b7 = a3.response.transports, b7?.join(",")) } };
          }(t3, e, n3);
          u5 = r4.user, m12 = r4.account, g7 = r4.authenticator;
          break;
        }
      }
      await handleAuthorized({ user: u5, account: m12 }, t3);
      const { user: b6, isNewUser: E5, session: I3, account: P5 } = await handleLoginOrRegister(r3.value, u5, m12, t3);
      if (!P5)
        throw new AuthError("Error creating or finding account");
      if (g7 && b6.id && await c4.adapter.createAuthenticator({ ...g7, userId: b6.id }), $5) {
        const e2 = { name: b6.name, email: b6.email, picture: b6.image, sub: b6.id?.toString() }, i3 = await U3.jwt({ token: e2, user: b6, account: P5, isNewUser: E5, trigger: E5 ? "signUp" : "signIn" });
        if (null === i3)
          n3.push(...r3.clean());
        else {
          const e3 = t3.cookies.sessionToken.name, a3 = await T6.encode({ ...T6, token: i3, salt: e3 }), c5 = /* @__PURE__ */ new Date();
          c5.setTime(c5.getTime() + 1e3 * O2);
          const u6 = r3.chunk(a3, { expires: c5 });
          n3.push(...u6);
        }
      } else
        n3.push({ name: t3.cookies.sessionToken.name, value: I3.sessionToken, options: { ...t3.cookies.sessionToken.options, expires: I3.expires } });
      return await C4.signIn?.({ user: b6, account: P5, isNewUser: E5 }), E5 && _3.newUser ? { redirect: `${_3.newUser}${_3.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl: A3 })}`, cookies: n3 } : { redirect: A3, cookies: n3 };
    }
    throw new InvalidProvider(`Callback for provider type (${g6.type}) is not supported`);
  } catch (e2) {
    if (e2 instanceof AuthError)
      throw e2;
    const t4 = new CallbackRouteError(e2, { provider: g6.id });
    throw R4.debug("callback route error details", { method: u4, query: a, body: c3 }), t4;
  }
}
async function handleAuthorized(e, t3) {
  let r3;
  const { signIn: n3, redirect: a } = t3.callbacks;
  try {
    r3 = await n3(e);
  } catch (e2) {
    if (e2 instanceof AuthError)
      throw e2;
    throw new AccessDenied(e2);
  }
  if (!r3)
    throw new AccessDenied("AccessDenied");
  if ("string" == typeof r3)
    return await a({ url: r3, baseUrl: t3.url.origin });
}
async function session(e, t3, r3, n3, i3) {
  const { adapter: a, jwt: c3, events: u4, callbacks: m11, logger: g6, session: { strategy: b5, maxAge: E4 } } = e, A3 = { body: null, headers: { "Content-Type": "application/json" }, cookies: r3 }, _3 = t3.value;
  if (!_3)
    return A3;
  if ("jwt" === b5) {
    try {
      const r4 = e.cookies.sessionToken.name, a2 = await c3.decode({ ...c3, token: _3, salt: r4 });
      if (!a2)
        throw new Error("Invalid JWT");
      const g7 = await m11.jwt({ token: a2, ...n3 && { trigger: "update" }, session: i3 }), b6 = fromDate(E4);
      if (null !== g7) {
        const e2 = { user: { name: g7.name, email: g7.email, image: g7.picture }, expires: b6.toISOString() }, n4 = await m11.session({ session: e2, token: g7 });
        A3.body = n4;
        const i4 = await c3.encode({ ...c3, token: g7, salt: r4 }), a3 = t3.chunk(i4, { expires: b6 });
        A3.cookies?.push(...a3), await u4.session?.({ session: n4, token: g7 });
      } else
        A3.cookies?.push(...t3.clean());
    } catch (e2) {
      g6.error(new JWTSessionError(e2)), A3.cookies?.push(...t3.clean());
    }
    return A3;
  }
  try {
    const { getSessionAndUser: r4, deleteSession: c4, updateSession: g7 } = a;
    let b6 = await r4(_3);
    if (b6 && b6.session.expires.valueOf() < Date.now() && (await c4(_3), b6 = null), b6) {
      const { user: t4, session: r5 } = b6, a2 = e.session.updateAge, c5 = r5.expires.valueOf() - 1e3 * E4 + 1e3 * a2, T6 = fromDate(E4);
      c5 <= Date.now() && await g7({ sessionToken: _3, expires: T6 });
      const C4 = await m11.session({ session: { ...r5, user: t4 }, user: t4, newSession: i3, ...n3 ? { trigger: "update" } : {} });
      A3.body = C4, A3.cookies?.push({ name: e.cookies.sessionToken.name, value: _3, options: { ...e.cookies.sessionToken.options, expires: T6 } }), await u4.session?.({ session: C4 });
    } else
      _3 && A3.cookies?.push(...t3.clean());
  } catch (e2) {
    g6.error(new SessionTokenError(e2));
  }
  return A3;
}
function defaultNormalizer(e) {
  if (!e)
    throw new Error("Missing email from request body.");
  let [t3, r3] = e.toLowerCase().trim().split("@");
  return r3 = r3.split(",")[0], `${t3}@${r3}`;
}
async function signIn(e, t3, r3) {
  const n3 = `${r3.url.origin}${r3.basePath}/signin`;
  if (!r3.provider)
    return { redirect: n3, cookies: t3 };
  switch (r3.provider.type) {
    case "oauth":
    case "oidc": {
      const { redirect: n4, cookies: i3 } = await async function(e2, t4) {
        const { logger: r4, provider: n5 } = t4;
        let i4 = n5.authorization?.url;
        if (!i4 || "authjs.dev" === i4.host) {
          const e3 = new URL(n5.issuer), t5 = await discoveryRequest(e3), r5 = await processDiscoveryResponse(e3, t5);
          if (!r5.authorization_endpoint)
            throw new TypeError("Authorization server did not provide an authorization endpoint.");
          i4 = new URL(r5.authorization_endpoint);
        }
        const a = i4.searchParams;
        let c3, u4 = n5.callbackUrl;
        !t4.isOnRedirectProxy && n5.redirectProxyUrl && (u4 = n5.redirectProxyUrl, c3 = { origin: n5.callbackUrl }, r4.debug("using redirect proxy", { redirect_uri: u4, data: c3 }));
        const m11 = Object.assign({ response_type: "code", client_id: n5.clientId, redirect_uri: u4, ...n5.authorization?.params }, Object.fromEntries(n5.authorization?.url.searchParams ?? []), e2);
        for (const e3 in m11)
          a.set(e3, m11[e3]);
        const g6 = [], b5 = await lt.create(t4, c3);
        if (b5 && (a.set("state", b5.value), g6.push(b5.cookie)), n5.checks?.includes("pkce")) {
          const { value: e3, cookie: r5 } = await dt.create(t4);
          a.set("code_challenge", e3), a.set("code_challenge_method", "S256"), g6.push(r5);
        }
        const E4 = await ut.create(t4);
        return E4 && (a.set("nonce", E4.value), g6.push(E4.cookie)), "oidc" !== n5.type || i4.searchParams.has("scope") || i4.searchParams.set("scope", "openid profile email"), r4.debug("authorization url is ready", { url: i4, cookies: g6, provider: n5 }), { redirect: i4.toString(), cookies: g6 };
      }(e.query, r3);
      return i3 && t3.push(...i3), { redirect: n4, cookies: t3 };
    }
    case "email": {
      const n4 = await async function(e2, t4) {
        const { body: r4 } = e2, { provider: n5, callbacks: i3, adapter: a } = t4, c3 = (n5.normalizeIdentifier ?? defaultNormalizer)(r4?.email), u4 = { id: crypto.randomUUID(), email: c3, emailVerified: null }, m11 = await a.getUserByEmail(c3) ?? u4, g6 = { providerAccountId: c3, userId: m11.id, type: "email", provider: n5.id };
        let b5;
        try {
          b5 = await i3.signIn({ user: m11, account: g6, email: { verificationRequest: true } });
        } catch (e3) {
          throw new AccessDenied(e3);
        }
        if (!b5)
          throw new AccessDenied("AccessDenied");
        if ("string" == typeof b5)
          return { redirect: await i3.redirect({ url: b5, baseUrl: t4.url.origin }) };
        const { callbackUrl: E4, theme: A3 } = t4, _3 = await n5.generateVerificationToken?.() ?? randomString(32), T6 = new Date(Date.now() + 1e3 * (n5.maxAge ?? 86400)), C4 = n5.secret ?? t4.secret, x2 = new URL(t4.basePath, t4.url.origin), U3 = n5.sendVerificationRequest({ identifier: c3, token: _3, expires: T6, url: `${x2}/callback/${n5.id}?${new URLSearchParams({ callbackUrl: E4, token: _3, email: c3 })}`, provider: n5, theme: A3, request: toRequest(e2) }), I2 = a.createVerificationToken?.({ identifier: c3, token: await createHash(`${_3}${C4}`), expires: T6 });
        return await Promise.all([U3, I2]), { redirect: `${x2}/verify-request?${new URLSearchParams({ provider: n5.id, type: n5.type })}` };
      }(e, r3);
      return { ...n4, cookies: t3 };
    }
    default:
      return { redirect: n3, cookies: t3 };
  }
}
async function AuthInternal(e, t3) {
  const { action: r3, providerId: n3, error: i3, method: a } = e, c3 = t3.skipCSRFCheck === ht, { options: u4, cookies: m11 } = await init({ authOptions: t3, action: r3, providerId: n3, url: e.url, callbackUrl: e.body?.callbackUrl ?? e.query?.callbackUrl, csrfToken: e.body?.csrfToken, cookies: e.cookies, isPost: "POST" === a, csrfDisabled: c3 }), g6 = new SessionStore(u4.cookies.sessionToken, e.cookies, u4.logger);
  if ("GET" === a) {
    const t4 = renderPage({ ...u4, query: e.query, cookies: m11 });
    switch (r3) {
      case "callback":
        return await callback(e, u4, g6, m11);
      case "csrf":
        return t4.csrf(c3, u4, m11);
      case "error":
        return t4.error(i3);
      case "providers":
        return t4.providers(u4.providers);
      case "session":
        return await session(u4, g6, m11);
      case "signin":
        return t4.signin(n3, i3);
      case "signout":
        return t4.signout();
      case "verify-request":
        return t4.verifyRequest();
      case "webauthn-options":
        return await async function(e2, t5, r4, n4) {
          const i4 = assertInternalOptionsWebAuthn(t5), { provider: a2 } = i4, { action: c4 } = e2.query ?? {};
          if ("register" !== c4 && "authenticate" !== c4 && void 0 !== c4)
            return { status: 400, body: { error: "Invalid action" }, cookies: n4, headers: { "Content-Type": "application/json" } };
          const u5 = await async function(e3, t6) {
            const { adapter: r5, jwt: n5, session: { strategy: i5 } } = e3, a3 = t6.value;
            if (!a3)
              return null;
            if ("jwt" === i5) {
              const t7 = e3.cookies.sessionToken.name, r6 = await n5.decode({ ...n5, token: a3, salt: t7 });
              if (r6 && r6.sub)
                return { id: r6.sub, name: r6.name, email: r6.email, image: r6.picture };
            } else {
              const e4 = await r5?.getSessionAndUser(a3);
              if (e4)
                return e4.user;
            }
            return null;
          }(t5, r4), m12 = u5 ? { user: u5, exists: true } : await a2.getUserInfo(t5, e2), g7 = m12?.user, b5 = function(e3, t6, r5) {
            const { user: n5, exists: i5 = false } = r5 ?? {};
            switch (e3) {
              case "authenticate":
                return "authenticate";
              case "register":
                if (n5 && t6 === i5)
                  return "register";
                break;
              case void 0:
                if (!t6)
                  return n5 ? i5 ? "authenticate" : "register" : "authenticate";
            }
            return null;
          }(c4, !!u5, m12);
          switch (b5) {
            case "authenticate":
              return getAuthenticationResponse(i4, e2, g7, n4);
            case "register":
              if ("string" == typeof g7?.email)
                return getRegistrationResponse(i4, e2, g7, n4);
            default:
              return { status: 400, body: { error: "Invalid request" }, cookies: n4, headers: { "Content-Type": "application/json" } };
          }
        }(e, u4, g6, m11);
    }
  } else {
    const { csrfTokenVerified: t4 } = u4;
    switch (r3) {
      case "callback":
        return "credentials" === u4.provider.type && validateCSRF(r3, t4), await callback(e, u4, g6, m11);
      case "session":
        return validateCSRF(r3, t4), await session(u4, g6, m11, true, e.body?.data);
      case "signin":
        return validateCSRF(r3, t4), await signIn(e, m11, u4);
      case "signout":
        return validateCSRF(r3, t4), await async function(e2, t5, r4) {
          const { jwt: n4, events: i4, callbackUrl: a2, logger: c4, session: u5 } = r4, m12 = t5.value;
          if (!m12)
            return { redirect: a2, cookies: e2 };
          try {
            if ("jwt" === u5.strategy) {
              const e3 = r4.cookies.sessionToken.name, t6 = await n4.decode({ ...n4, token: m12, salt: e3 });
              await i4.signOut?.({ token: t6 });
            } else {
              const e3 = await r4.adapter?.deleteSession(m12);
              await i4.signOut?.({ session: e3 });
            }
          } catch (e3) {
            c4.error(new SignOutError(e3));
          }
          return e2.push(...t5.clean()), { redirect: a2, cookies: e2 };
        }(m11, g6, u4);
    }
  }
  throw new UnknownAction(`Cannot handle action: ${r3}`);
}
async function Auth(A3, T6) {
  setLogger(T6.logger, T6.debug);
  const C4 = await toInternalRequest(A3, T6);
  if (!C4)
    return Response.json("Bad request.", { status: 400 });
  const x2 = function(A4, _3) {
    const { url: T7 } = A4, C5 = [];
    if (!te && _3.debug && C5.push("debug-enabled"), !_3.trustHost)
      return new UntrustedHost(`Host must be trusted. URL was: ${A4.url}`);
    if (!_3.secret)
      return new MissingSecret("Please define a `secret`.");
    const x3 = A4.query?.callbackUrl;
    if (x3 && !isValidHttpUrl(x3, T7.origin))
      return new InvalidCallbackUrl(`Invalid callback URL. Received: ${x3}`);
    const { callbackUrl: U4 } = defaultCookies(_3.useSecureCookies ?? "https:" === T7.protocol), I3 = A4.cookies?.[_3.cookies?.callbackUrl?.name ?? U4.name];
    if (I3 && !isValidHttpUrl(I3, T7.origin))
      return new InvalidCallbackUrl(`Invalid callback URL. Received: ${I3}`);
    let P5 = false;
    for (const e of _3.providers) {
      const t3 = "function" == typeof e ? e() : e;
      if (("oauth" === t3.type || "oidc" === t3.type) && !(t3.issuer ?? t3.options?.issuer)) {
        const { authorization: e2, token: r3, userinfo: i3 } = t3;
        let a;
        if ("string" == typeof e2 || e2?.url ? "string" == typeof r3 || r3?.url ? "string" == typeof i3 || i3?.url || (a = "userinfo") : a = "token" : a = "authorization", a)
          return new InvalidEndpoints(`Provider "${t3.id}" is missing both \`issuer\` and \`${a}\` endpoint config. At least one of them is required.`);
      }
      if ("credentials" === t3.type)
        re = true;
      else if ("email" === t3.type)
        ne = true;
      else if ("webauthn" === t3.type) {
        if (oe = true, t3.simpleWebAuthnBrowserVersion && (O2 = t3.simpleWebAuthnBrowserVersion, !/^v\d+(?:\.\d+){0,2}$/.test(O2)))
          return new AuthError(`Invalid provider config for "${t3.id}": simpleWebAuthnBrowserVersion "${t3.simpleWebAuthnBrowserVersion}" must be a valid semver string.`);
        if (t3.enableConditionalUI) {
          if (P5)
            return new DuplicateConditionalUI("Multiple webauthn providers have 'enableConditionalUI' set to True. Only one provider can have this option enabled at a time.");
          P5 = true;
          const e2 = Object.values(t3.formFields).some((e3) => e3.autocomplete && e3.autocomplete.toString().indexOf("webauthn") > -1);
          if (!e2)
            return new MissingWebAuthnAutocomplete(`Provider "${t3.id}" has 'enableConditionalUI' set to True, but none of its formFields have 'webauthn' in their autocomplete param.`);
        }
      }
    }
    var O2;
    if (re) {
      const e = "database" === _3.session?.strategy, t3 = !_3.providers.some((e2) => "credentials" !== ("function" == typeof e2 ? e2() : e2).type);
      if (e && t3)
        return new UnsupportedStrategy("Signing in with credentials only supported if JWT strategy is enabled");
      const r3 = _3.providers.some((e2) => {
        const t4 = "function" == typeof e2 ? e2() : e2;
        return "credentials" === t4.type && !t4.authorize;
      });
      if (r3)
        return new MissingAuthorize("Must define an authorize() handler to use credentials authentication provider");
    }
    const { adapter: R4, session: J3 } = _3;
    let W2 = [];
    if (ne || "database" === J3?.strategy || !J3?.strategy && R4)
      if (ne) {
        if (!R4)
          return new MissingAdapter("Email login requires an adapter.");
        W2.push(...ie);
      } else {
        if (!R4)
          return new MissingAdapter("Database session requires an adapter.");
        W2.push(...ae);
      }
    if (oe) {
      if (!_3.experimental?.enableWebAuthn)
        return new ExperimentalFeatureNotEnabled("WebAuthn is an experimental feature. To enable it, set `experimental.enableWebAuthn` to `true` in your config.");
      if (C5.push("experimental-webauthn"), !R4)
        return new MissingAdapter("WebAuthn requires an adapter.");
      W2.push(...se);
    }
    if (R4) {
      const e = W2.filter((e2) => !(e2 in R4));
      if (e.length)
        return new MissingAdapterMethods(`Required adapter methods were missing: ${e.join(", ")}`);
    }
    return te || (te = true), C5;
  }(C4, T6);
  if (Array.isArray(x2))
    x2.forEach(ka.warn);
  else if (x2) {
    ka.error(x2);
    if (!(/* @__PURE__ */ new Set(["signin", "signout", "error", "verify-request"])).has(C4.action) || "GET" !== C4.method) {
      const e2 = "There was a problem with the server configuration. Check the server logs for more information.";
      return Response.json({ message: e2 }, { status: 500 });
    }
    const { pages: e, theme: t3 } = T6, r3 = e?.error && C4.url.searchParams.get("callbackUrl")?.startsWith(e.error);
    if (!e?.error || r3) {
      r3 && ka.error(new ErrorPageLoop(`The error page ${e?.error} should not require authentication`));
      return toResponse(renderPage({ theme: t3 }).error("Configuration"));
    }
    return Response.redirect(`${e.error}?error=Configuration`);
  }
  const U3 = A3.headers?.has("X-Auth-Return-Redirect"), I2 = T6.raw === ft;
  try {
    const e = await AuthInternal(C4, T6);
    if (I2)
      return e;
    const t3 = toResponse(e), r3 = t3.headers.get("Location");
    return U3 && r3 ? Response.json({ url: r3 }, { headers: t3.headers }) : t3;
  } catch (e) {
    const t3 = e;
    ka.error(t3);
    const r3 = t3 instanceof AuthError;
    if (r3 && I2 && !U3)
      throw t3;
    if ("POST" === A3.method && "session" === C4.action)
      return Response.json(null, { status: 400 });
    const n3 = isClientError(t3) ? t3.type : "Configuration", a = new URLSearchParams({ error: n3 });
    t3 instanceof CredentialsSignin && a.set("code", t3.code);
    const c3 = r3 && t3.kind || "error", u4 = T6.pages?.[c3] ?? `${T6.basePath}/${c3.toLowerCase()}`, m11 = `${C4.url.origin}${u4}?${a}`;
    return U3 ? Response.json({ url: m11 }) : Response.redirect(m11);
  }
}
function Discord(e) {
  return { id: "discord", name: "Discord", type: "oauth", authorization: "https://discord.com/api/oauth2/authorize?scope=identify+email", token: "https://discord.com/api/oauth2/token", userinfo: "https://discord.com/api/users/@me", profile(e2) {
    if (null === e2.avatar) {
      const t3 = "0" === e2.discriminator ? Number(BigInt(e2.id) >> BigInt(22)) % 6 : parseInt(e2.discriminator) % 5;
      e2.image_url = `https://cdn.discordapp.com/embed/avatars/${t3}.png`;
    } else {
      const t3 = e2.avatar.startsWith("a_") ? "gif" : "png";
      e2.image_url = `https://cdn.discordapp.com/avatars/${e2.id}/${e2.avatar}.${t3}`;
    }
    return { id: e2.id, name: e2.global_name ?? e2.username, email: e2.email, image: e2.image_url };
  }, style: { bg: "#5865F2", text: "#fff" }, options: e };
}
var q, G2, X, Y2, Z, Q2, __classPrivateFieldSet, __classPrivateFieldGet, ee, SessionStore, te, re, ne, oe, ie, ae, se, derive, ce, isCryptoKey$1, digest, de, le, ue, encode$3, decode$3, JOSEError, JWTClaimValidationFailed, JWTExpired, JOSEAlgNotAllowed, JOSENotSupported, JWEDecryptionFailed, JWEInvalid, JWTInvalid, JWKInvalid, pe, checkIvLength, checkCekLength, invalidKeyInput, isKeyLike, he, decrypt$2, isDisjoint, fe, wrap$1, unwrap$1, decrypt$1, checkKeyLength, decrypt, generateCek, parse$1, checkKeyType, encrypt, validateAlgorithms, keyToJWK, ye, FlattenedEncrypt, epoch, we2, me, secs, normalizeTyp, jwtPayload, CompactEncrypt, ProduceJWT, EncryptJWT, check, ge, be, parse_1, serialize_1, ve2, ke2, Ee2, now, Ae, Se2, _e2, defaultProfile, defaultAccount, Te, Ce2, xe, Ue, Ie, Pe, Oe, s2, f2, Re2, Je, We, $e2, He, Ke, je2, De2, Ne, Le, Me, Be, Fe, ze, Ve, qe, Ge, UnsupportedOperationError, OperationProcessingError, Xe, Ye, Ze, Qe, et, tt, rt, nt, ot, it, at, st, ct, dt, lt, ut, pt, ht, ft;
var init_discord = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/_/discord.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    __classPrivateFieldSet = function(e, t3, r3, n3, i3) {
      if ("m" === n3)
        throw new TypeError("Private method is not writable");
      if ("a" === n3 && !i3)
        throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof t3 ? e !== t3 || !i3 : !t3.has(e))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === n3 ? i3.call(e, r3) : i3 ? i3.value = r3 : t3.set(e, r3), r3;
    };
    __classPrivateFieldGet = function(e, t3, r3, n3) {
      if ("a" === r3 && !n3)
        throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof t3 ? e !== t3 || !n3 : !t3.has(e))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === r3 ? n3 : "a" === r3 ? n3.call(e) : n3 ? n3.value : t3.get(e);
    };
    ee = 3936;
    SessionStore = class {
      constructor(e, t3, r3) {
        if (q.add(this), G2.set(this, {}), X.set(this, void 0), Y2.set(this, void 0), __classPrivateFieldSet(this, Y2, r3, "f"), __classPrivateFieldSet(this, X, e, "f"), !t3)
          return;
        const { name: n3 } = e;
        for (const [e2, r4] of Object.entries(t3))
          e2.startsWith(n3) && r4 && (__classPrivateFieldGet(this, G2, "f")[e2] = r4);
      }
      get value() {
        const e = Object.keys(__classPrivateFieldGet(this, G2, "f")).sort((e2, t3) => parseInt(e2.split(".").pop() || "0") - parseInt(t3.split(".").pop() || "0"));
        return e.map((e2) => __classPrivateFieldGet(this, G2, "f")[e2]).join("");
      }
      chunk(e, t3) {
        const r3 = __classPrivateFieldGet(this, q, "m", Q2).call(this), n3 = __classPrivateFieldGet(this, q, "m", Z).call(this, { name: __classPrivateFieldGet(this, X, "f").name, value: e, options: { ...__classPrivateFieldGet(this, X, "f").options, ...t3 } });
        for (const e2 of n3)
          r3[e2.name] = e2;
        return Object.values(r3);
      }
      clean() {
        return Object.values(__classPrivateFieldGet(this, q, "m", Q2).call(this));
      }
    };
    G2 = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), Y2 = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakSet(), Z = function(e) {
      const t3 = Math.ceil(e.value.length / ee);
      if (1 === t3)
        return __classPrivateFieldGet(this, G2, "f")[e.name] = e.value, [e];
      const r3 = [];
      for (let n3 = 0; n3 < t3; n3++) {
        const t4 = `${e.name}.${n3}`, i3 = e.value.substr(n3 * ee, ee);
        r3.push({ ...e, name: t4, value: i3 }), __classPrivateFieldGet(this, G2, "f")[t4] = i3;
      }
      return __classPrivateFieldGet(this, Y2, "f").debug("CHUNKING_SESSION_COOKIE", { message: "Session cookie exceeds allowed 4096 bytes.", emptyCookieSize: 160, valueSize: e.value.length, chunks: r3.map((e2) => e2.value.length + 160) }), r3;
    }, Q2 = function() {
      const e = {};
      for (const t3 in __classPrivateFieldGet(this, G2, "f"))
        delete __classPrivateFieldGet(this, G2, "f")?.[t3], e[t3] = { name: t3, value: "", options: { ...__classPrivateFieldGet(this, X, "f").options, maxAge: 0 } };
      return e;
    };
    te = false;
    re = false;
    ne = false;
    oe = false;
    ie = ["createVerificationToken", "useVerificationToken", "getUserByEmail"];
    ae = ["createUser", "getUser", "getUserByEmail", "getUserByAccount", "updateUser", "linkAccount", "createSession", "getSessionAndUser", "updateSession", "deleteSession"];
    se = ["createUser", "getUser", "linkAccount", "getAccount", "getAuthenticator", "createAuthenticator", "listAuthenticatorsByUserId", "updateAuthenticatorCounter"];
    derive = async (e, t3, r3, n3, i3) => {
      const { crypto: { subtle: a } } = (() => {
        if ("undefined" != typeof globalThis)
          return globalThis;
        if ("undefined" != typeof self)
          return self;
        throw new Error("unable to locate global object");
      })();
      return new Uint8Array(await a.deriveBits({ name: "HKDF", hash: `SHA-${e.substr(3)}`, salt: r3, info: n3 }, await a.importKey("raw", t3, "HKDF", false, ["deriveBits"]), i3 << 3));
    };
    ce = crypto;
    isCryptoKey$1 = (e) => e instanceof CryptoKey;
    digest = async (e, t3) => {
      const r3 = `SHA-${e.slice(-3)}`;
      return new Uint8Array(await ce.subtle.digest(r3, t3));
    };
    de = new TextEncoder();
    le = new TextDecoder();
    ue = 2 ** 32;
    encode$3 = (e) => ((e2) => {
      let t3 = e2;
      "string" == typeof t3 && (t3 = de.encode(t3));
      const r3 = [];
      for (let e3 = 0; e3 < t3.length; e3 += 32768)
        r3.push(String.fromCharCode.apply(null, t3.subarray(e3, e3 + 32768)));
      return btoa(r3.join(""));
    })(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    decode$3 = (e) => {
      let t3 = e;
      t3 instanceof Uint8Array && (t3 = le.decode(t3)), t3 = t3.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
      try {
        return ((e2) => {
          const t4 = atob(e2), r3 = new Uint8Array(t4.length);
          for (let e3 = 0; e3 < t4.length; e3++)
            r3[e3] = t4.charCodeAt(e3);
          return r3;
        })(t3);
      } catch {
        throw new TypeError("The input to be decoded is not correctly encoded.");
      }
    };
    JOSEError = class extends Error {
      static get code() {
        return "ERR_JOSE_GENERIC";
      }
      constructor(e) {
        super(e), this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor);
      }
    };
    JWTClaimValidationFailed = class extends JOSEError {
      static get code() {
        return "ERR_JWT_CLAIM_VALIDATION_FAILED";
      }
      constructor(e, t3 = "unspecified", r3 = "unspecified") {
        super(e), this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED", this.claim = t3, this.reason = r3;
      }
    };
    JWTExpired = class extends JOSEError {
      static get code() {
        return "ERR_JWT_EXPIRED";
      }
      constructor(e, t3 = "unspecified", r3 = "unspecified") {
        super(e), this.code = "ERR_JWT_EXPIRED", this.claim = t3, this.reason = r3;
      }
    };
    JOSEAlgNotAllowed = class extends JOSEError {
      constructor() {
        super(...arguments), this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
      }
      static get code() {
        return "ERR_JOSE_ALG_NOT_ALLOWED";
      }
    };
    JOSENotSupported = class extends JOSEError {
      constructor() {
        super(...arguments), this.code = "ERR_JOSE_NOT_SUPPORTED";
      }
      static get code() {
        return "ERR_JOSE_NOT_SUPPORTED";
      }
    };
    JWEDecryptionFailed = class extends JOSEError {
      constructor() {
        super(...arguments), this.code = "ERR_JWE_DECRYPTION_FAILED", this.message = "decryption operation failed";
      }
      static get code() {
        return "ERR_JWE_DECRYPTION_FAILED";
      }
    };
    JWEInvalid = class extends JOSEError {
      constructor() {
        super(...arguments), this.code = "ERR_JWE_INVALID";
      }
      static get code() {
        return "ERR_JWE_INVALID";
      }
    };
    JWTInvalid = class extends JOSEError {
      constructor() {
        super(...arguments), this.code = "ERR_JWT_INVALID";
      }
      static get code() {
        return "ERR_JWT_INVALID";
      }
    };
    JWKInvalid = class extends JOSEError {
      constructor() {
        super(...arguments), this.code = "ERR_JWK_INVALID";
      }
      static get code() {
        return "ERR_JWK_INVALID";
      }
    };
    pe = ce.getRandomValues.bind(ce);
    checkIvLength = (e, t3) => {
      if (t3.length << 3 !== bitLength$1(e))
        throw new JWEInvalid("Invalid Initialization Vector length");
    };
    checkCekLength = (e, t3) => {
      const r3 = e.byteLength << 3;
      if (r3 !== t3)
        throw new JWEInvalid(`Invalid Content Encryption Key length. Expected ${t3} bits, got ${r3} bits`);
    };
    invalidKeyInput = (e, ...t3) => message("Key must be ", e, ...t3);
    isKeyLike = (e) => isCryptoKey$1(e);
    he = ["CryptoKey"];
    decrypt$2 = async (e, t3, r3, n3, i3, a) => {
      if (!(isCryptoKey$1(t3) || t3 instanceof Uint8Array))
        throw new TypeError(invalidKeyInput(t3, ...he, "Uint8Array"));
      if (!n3)
        throw new JWEInvalid("JWE Initialization Vector missing");
      if (!i3)
        throw new JWEInvalid("JWE Authentication Tag missing");
      switch (checkIvLength(e, n3), e) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          return t3 instanceof Uint8Array && checkCekLength(t3, parseInt(e.slice(-3), 10)), cbcDecrypt(e, t3, r3, n3, i3, a);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          return t3 instanceof Uint8Array && checkCekLength(t3, parseInt(e.slice(1, 4), 10)), async function(e2, t4, r4, n4, i4, a2) {
            let c3;
            t4 instanceof Uint8Array ? c3 = await ce.subtle.importKey("raw", t4, "AES-GCM", false, ["decrypt"]) : (checkEncCryptoKey(t4, e2, "decrypt"), c3 = t4);
            try {
              return new Uint8Array(await ce.subtle.decrypt({ additionalData: a2, iv: n4, name: "AES-GCM", tagLength: 128 }, c3, concat(r4, i4)));
            } catch {
              throw new JWEDecryptionFailed();
            }
          }(e, t3, r3, n3, i3, a);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    isDisjoint = (...e) => {
      const t3 = e.filter(Boolean);
      if (0 === t3.length || 1 === t3.length)
        return true;
      let r3;
      for (const e2 of t3) {
        const t4 = Object.keys(e2);
        if (r3 && 0 !== r3.size)
          for (const e3 of t4) {
            if (r3.has(e3))
              return false;
            r3.add(e3);
          }
        else
          r3 = new Set(t4);
      }
      return true;
    };
    fe = [{ hash: "SHA-256", name: "HMAC" }, true, ["sign"]];
    wrap$1 = async (e, t3, r3) => {
      const n3 = await getCryptoKey$1(t3, e, "wrapKey");
      checkKeySize(n3, e);
      const i3 = await ce.subtle.importKey("raw", r3, ...fe);
      return new Uint8Array(await ce.subtle.wrapKey("raw", i3, n3, "AES-KW"));
    };
    unwrap$1 = async (e, t3, r3) => {
      const n3 = await getCryptoKey$1(t3, e, "unwrapKey");
      checkKeySize(n3, e);
      const i3 = await ce.subtle.unwrapKey("raw", r3, n3, "AES-KW", ...fe);
      return new Uint8Array(await ce.subtle.exportKey("raw", i3));
    };
    decrypt$1 = async (e, t3, r3, n3, i3) => {
      const a = await deriveKey(i3, e, n3, t3);
      return unwrap$1(e.slice(-6), a, r3);
    };
    checkKeyLength = (e, t3) => {
      if (e.startsWith("RS") || e.startsWith("PS")) {
        const { modulusLength: r3 } = t3.algorithm;
        if ("number" != typeof r3 || r3 < 2048)
          throw new TypeError(`${e} requires key modulusLength to be 2048 bits or larger`);
      }
    };
    decrypt = async (e, t3, r3) => {
      if (!isCryptoKey$1(t3))
        throw new TypeError(invalidKeyInput(t3, ...he));
      if (checkEncCryptoKey(t3, e, "decrypt", "unwrapKey"), checkKeyLength(e, t3), t3.usages.includes("decrypt"))
        return new Uint8Array(await ce.subtle.decrypt(subtleRsaEs(e), t3, r3));
      if (t3.usages.includes("unwrapKey")) {
        const n3 = await ce.subtle.unwrapKey("raw", r3, t3, subtleRsaEs(e), ...fe);
        return new Uint8Array(await ce.subtle.exportKey("raw", n3));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');
    };
    generateCek = (e) => pe(new Uint8Array(bitLength(e) >> 3));
    parse$1 = async (e) => {
      if (!e.alg)
        throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
      const { algorithm: t3, keyUsages: r3 } = function(e2) {
        let t4, r4;
        switch (e2.kty) {
          case "RSA":
            switch (e2.alg) {
              case "PS256":
              case "PS384":
              case "PS512":
                t4 = { name: "RSA-PSS", hash: `SHA-${e2.alg.slice(-3)}` }, r4 = e2.d ? ["sign"] : ["verify"];
                break;
              case "RS256":
              case "RS384":
              case "RS512":
                t4 = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${e2.alg.slice(-3)}` }, r4 = e2.d ? ["sign"] : ["verify"];
                break;
              case "RSA-OAEP":
              case "RSA-OAEP-256":
              case "RSA-OAEP-384":
              case "RSA-OAEP-512":
                t4 = { name: "RSA-OAEP", hash: `SHA-${parseInt(e2.alg.slice(-3), 10) || 1}` }, r4 = e2.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
                break;
              default:
                throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
            }
            break;
          case "EC":
            switch (e2.alg) {
              case "ES256":
                t4 = { name: "ECDSA", namedCurve: "P-256" }, r4 = e2.d ? ["sign"] : ["verify"];
                break;
              case "ES384":
                t4 = { name: "ECDSA", namedCurve: "P-384" }, r4 = e2.d ? ["sign"] : ["verify"];
                break;
              case "ES512":
                t4 = { name: "ECDSA", namedCurve: "P-521" }, r4 = e2.d ? ["sign"] : ["verify"];
                break;
              case "ECDH-ES":
              case "ECDH-ES+A128KW":
              case "ECDH-ES+A192KW":
              case "ECDH-ES+A256KW":
                t4 = { name: "ECDH", namedCurve: e2.crv }, r4 = e2.d ? ["deriveBits"] : [];
                break;
              default:
                throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
            }
            break;
          case "OKP":
            switch (e2.alg) {
              case "EdDSA":
                t4 = { name: e2.crv }, r4 = e2.d ? ["sign"] : ["verify"];
                break;
              case "ECDH-ES":
              case "ECDH-ES+A128KW":
              case "ECDH-ES+A192KW":
              case "ECDH-ES+A256KW":
                t4 = { name: e2.crv }, r4 = e2.d ? ["deriveBits"] : [];
                break;
              default:
                throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
            }
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
        }
        return { algorithm: t4, keyUsages: r4 };
      }(e), n3 = [t3, e.ext ?? false, e.key_ops ?? r3], i3 = { ...e };
      return delete i3.alg, delete i3.use, ce.subtle.importKey("jwk", i3, ...n3);
    };
    checkKeyType = (e, t3, r3) => {
      e.startsWith("HS") || "dir" === e || e.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(e) ? ((e2, t4) => {
        if (!(t4 instanceof Uint8Array)) {
          if (!isKeyLike(t4))
            throw new TypeError(withAlg(e2, t4, ...he, "Uint8Array"));
          if ("secret" !== t4.type)
            throw new TypeError(`${he.join(" or ")} instances for symmetric algorithms must be of type "secret"`);
        }
      })(e, t3) : ((e2, t4, r4) => {
        if (!isKeyLike(t4))
          throw new TypeError(withAlg(e2, t4, ...he));
        if ("secret" === t4.type)
          throw new TypeError(`${he.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
        if ("sign" === r4 && "public" === t4.type)
          throw new TypeError(`${he.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
        if ("decrypt" === r4 && "public" === t4.type)
          throw new TypeError(`${he.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
        if (t4.algorithm && "verify" === r4 && "private" === t4.type)
          throw new TypeError(`${he.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
        if (t4.algorithm && "encrypt" === r4 && "private" === t4.type)
          throw new TypeError(`${he.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`);
      })(e, t3, r3);
    };
    encrypt = async (e, t3, r3, n3, i3) => {
      if (!(isCryptoKey$1(r3) || r3 instanceof Uint8Array))
        throw new TypeError(invalidKeyInput(r3, ...he, "Uint8Array"));
      switch (n3 ? checkIvLength(e, n3) : n3 = ((e2) => pe(new Uint8Array(bitLength$1(e2) >> 3)))(e), e) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          return r3 instanceof Uint8Array && checkCekLength(r3, parseInt(e.slice(-3), 10)), async function(e2, t4, r4, n4, i4) {
            if (!(r4 instanceof Uint8Array))
              throw new TypeError(invalidKeyInput(r4, "Uint8Array"));
            const a = parseInt(e2.slice(1, 4), 10), c3 = await ce.subtle.importKey("raw", r4.subarray(a >> 3), "AES-CBC", false, ["encrypt"]), u4 = await ce.subtle.importKey("raw", r4.subarray(0, a >> 3), { hash: "SHA-" + (a << 1), name: "HMAC" }, false, ["sign"]), m11 = new Uint8Array(await ce.subtle.encrypt({ iv: n4, name: "AES-CBC" }, c3, t4)), g6 = concat(i4, n4, m11, uint64be(i4.length << 3));
            return { ciphertext: m11, tag: new Uint8Array((await ce.subtle.sign("HMAC", u4, g6)).slice(0, a >> 3)), iv: n4 };
          }(e, t3, r3, n3, i3);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          return r3 instanceof Uint8Array && checkCekLength(r3, parseInt(e.slice(1, 4), 10)), async function(e2, t4, r4, n4, i4) {
            let a;
            r4 instanceof Uint8Array ? a = await ce.subtle.importKey("raw", r4, "AES-GCM", false, ["encrypt"]) : (checkEncCryptoKey(r4, e2, "encrypt"), a = r4);
            const c3 = new Uint8Array(await ce.subtle.encrypt({ additionalData: i4, iv: n4, name: "AES-GCM", tagLength: 128 }, a, t4)), u4 = c3.slice(-16);
            return { ciphertext: c3.slice(0, -16), tag: u4, iv: n4 };
          }(e, t3, r3, n3, i3);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    validateAlgorithms = (e, t3) => {
      if (void 0 !== t3 && (!Array.isArray(t3) || t3.some((e2) => "string" != typeof e2)))
        throw new TypeError(`"${e}" option must be an array of strings`);
      if (t3)
        return new Set(t3);
    };
    keyToJWK = async (e) => {
      if (e instanceof Uint8Array)
        return { kty: "oct", k: encode$3(e) };
      if (!isCryptoKey$1(e))
        throw new TypeError(invalidKeyInput(e, ...he, "Uint8Array"));
      if (!e.extractable)
        throw new TypeError("non-extractable CryptoKey cannot be exported as a JWK");
      const { ext: t3, key_ops: r3, alg: n3, use: i3, ...a } = await ce.subtle.exportKey("jwk", e);
      return a;
    };
    ye = Symbol();
    FlattenedEncrypt = class {
      constructor(e) {
        if (!(e instanceof Uint8Array))
          throw new TypeError("plaintext must be an instance of Uint8Array");
        this._plaintext = e;
      }
      setKeyManagementParameters(e) {
        if (this._keyManagementParameters)
          throw new TypeError("setKeyManagementParameters can only be called once");
        return this._keyManagementParameters = e, this;
      }
      setProtectedHeader(e) {
        if (this._protectedHeader)
          throw new TypeError("setProtectedHeader can only be called once");
        return this._protectedHeader = e, this;
      }
      setSharedUnprotectedHeader(e) {
        if (this._sharedUnprotectedHeader)
          throw new TypeError("setSharedUnprotectedHeader can only be called once");
        return this._sharedUnprotectedHeader = e, this;
      }
      setUnprotectedHeader(e) {
        if (this._unprotectedHeader)
          throw new TypeError("setUnprotectedHeader can only be called once");
        return this._unprotectedHeader = e, this;
      }
      setAdditionalAuthenticatedData(e) {
        return this._aad = e, this;
      }
      setContentEncryptionKey(e) {
        if (this._cek)
          throw new TypeError("setContentEncryptionKey can only be called once");
        return this._cek = e, this;
      }
      setInitializationVector(e) {
        if (this._iv)
          throw new TypeError("setInitializationVector can only be called once");
        return this._iv = e, this;
      }
      async encrypt(e, t3) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader)
          throw new JWEInvalid("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
        if (!isDisjoint(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader))
          throw new JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
        const r3 = { ...this._protectedHeader, ...this._unprotectedHeader, ...this._sharedUnprotectedHeader };
        if (validateCrit(JWEInvalid, /* @__PURE__ */ new Map(), t3?.crit, this._protectedHeader, r3), void 0 !== r3.zip)
          throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
        const { alg: n3, enc: i3 } = r3;
        if ("string" != typeof n3 || !n3)
          throw new JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        if ("string" != typeof i3 || !i3)
          throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        let a, c3, u4, m11, g6;
        if (this._cek && ("dir" === n3 || "ECDH-ES" === n3))
          throw new TypeError(`setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${n3}`);
        {
          let r4;
          ({ cek: c3, encryptedKey: a, parameters: r4 } = await encryptKeyManagement(n3, i3, e, this._cek, this._keyManagementParameters)), r4 && (t3 && ye in t3 ? this._unprotectedHeader ? this._unprotectedHeader = { ...this._unprotectedHeader, ...r4 } : this.setUnprotectedHeader(r4) : this._protectedHeader ? this._protectedHeader = { ...this._protectedHeader, ...r4 } : this.setProtectedHeader(r4));
        }
        m11 = this._protectedHeader ? de.encode(encode$3(JSON.stringify(this._protectedHeader))) : de.encode(""), this._aad ? (g6 = encode$3(this._aad), u4 = concat(m11, de.encode("."), de.encode(g6))) : u4 = m11;
        const { ciphertext: b5, tag: E4, iv: A3 } = await encrypt(i3, this._plaintext, c3, this._iv, u4), _3 = { ciphertext: encode$3(b5) };
        return A3 && (_3.iv = encode$3(A3)), E4 && (_3.tag = encode$3(E4)), a && (_3.encrypted_key = encode$3(a)), g6 && (_3.aad = g6), this._protectedHeader && (_3.protected = le.decode(m11)), this._sharedUnprotectedHeader && (_3.unprotected = this._sharedUnprotectedHeader), this._unprotectedHeader && (_3.header = this._unprotectedHeader), _3;
      }
    };
    epoch = (e) => Math.floor(e.getTime() / 1e3);
    we2 = 86400;
    me = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
    secs = (e) => {
      const t3 = me.exec(e);
      if (!t3 || t3[4] && t3[1])
        throw new TypeError("Invalid time period format");
      const r3 = parseFloat(t3[2]);
      let n3;
      switch (t3[3].toLowerCase()) {
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
          n3 = Math.round(r3);
          break;
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
          n3 = Math.round(60 * r3);
          break;
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
          n3 = Math.round(3600 * r3);
          break;
        case "day":
        case "days":
        case "d":
          n3 = Math.round(r3 * we2);
          break;
        case "week":
        case "weeks":
        case "w":
          n3 = Math.round(604800 * r3);
          break;
        default:
          n3 = Math.round(31557600 * r3);
      }
      return "-" === t3[1] || "ago" === t3[4] ? -n3 : n3;
    };
    normalizeTyp = (e) => e.toLowerCase().replace(/^application\//, "");
    jwtPayload = (e, t3, r3 = {}) => {
      const { typ: n3 } = r3;
      if (n3 && ("string" != typeof e.typ || normalizeTyp(e.typ) !== normalizeTyp(n3)))
        throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', "typ", "check_failed");
      let i3;
      try {
        i3 = JSON.parse(le.decode(t3));
      } catch {
      }
      if (!isObject$1(i3))
        throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
      const { requiredClaims: a = [], issuer: c3, subject: u4, audience: m11, maxTokenAge: g6 } = r3, b5 = [...a];
      void 0 !== g6 && b5.push("iat"), void 0 !== m11 && b5.push("aud"), void 0 !== u4 && b5.push("sub"), void 0 !== c3 && b5.push("iss");
      for (const e2 of new Set(b5.reverse()))
        if (!(e2 in i3))
          throw new JWTClaimValidationFailed(`missing required "${e2}" claim`, e2, "missing");
      if (c3 && !(Array.isArray(c3) ? c3 : [c3]).includes(i3.iss))
        throw new JWTClaimValidationFailed('unexpected "iss" claim value', "iss", "check_failed");
      if (u4 && i3.sub !== u4)
        throw new JWTClaimValidationFailed('unexpected "sub" claim value', "sub", "check_failed");
      if (m11 && (E4 = i3.aud, A3 = "string" == typeof m11 ? [m11] : m11, !("string" == typeof E4 ? A3.includes(E4) : Array.isArray(E4) && A3.some(Set.prototype.has.bind(new Set(E4))))))
        throw new JWTClaimValidationFailed('unexpected "aud" claim value', "aud", "check_failed");
      var E4, A3;
      let _3;
      switch (typeof r3.clockTolerance) {
        case "string":
          _3 = secs(r3.clockTolerance);
          break;
        case "number":
          _3 = r3.clockTolerance;
          break;
        case "undefined":
          _3 = 0;
          break;
        default:
          throw new TypeError("Invalid clockTolerance option type");
      }
      const { currentDate: T6 } = r3, C4 = epoch(T6 || /* @__PURE__ */ new Date());
      if ((void 0 !== i3.iat || g6) && "number" != typeof i3.iat)
        throw new JWTClaimValidationFailed('"iat" claim must be a number', "iat", "invalid");
      if (void 0 !== i3.nbf) {
        if ("number" != typeof i3.nbf)
          throw new JWTClaimValidationFailed('"nbf" claim must be a number', "nbf", "invalid");
        if (i3.nbf > C4 + _3)
          throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', "nbf", "check_failed");
      }
      if (void 0 !== i3.exp) {
        if ("number" != typeof i3.exp)
          throw new JWTClaimValidationFailed('"exp" claim must be a number', "exp", "invalid");
        if (i3.exp <= C4 - _3)
          throw new JWTExpired('"exp" claim timestamp check failed', "exp", "check_failed");
      }
      if (g6) {
        const e2 = C4 - i3.iat;
        if (e2 - _3 > ("number" == typeof g6 ? g6 : secs(g6)))
          throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
        if (e2 < 0 - _3)
          throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed");
      }
      return i3;
    };
    CompactEncrypt = class {
      constructor(e) {
        this._flattened = new FlattenedEncrypt(e);
      }
      setContentEncryptionKey(e) {
        return this._flattened.setContentEncryptionKey(e), this;
      }
      setInitializationVector(e) {
        return this._flattened.setInitializationVector(e), this;
      }
      setProtectedHeader(e) {
        return this._flattened.setProtectedHeader(e), this;
      }
      setKeyManagementParameters(e) {
        return this._flattened.setKeyManagementParameters(e), this;
      }
      async encrypt(e, t3) {
        const r3 = await this._flattened.encrypt(e, t3);
        return [r3.protected, r3.encrypted_key, r3.iv, r3.ciphertext, r3.tag].join(".");
      }
    };
    ProduceJWT = class {
      constructor(e = {}) {
        if (!isObject$1(e))
          throw new TypeError("JWT Claims Set MUST be an object");
        this._payload = e;
      }
      setIssuer(e) {
        return this._payload = { ...this._payload, iss: e }, this;
      }
      setSubject(e) {
        return this._payload = { ...this._payload, sub: e }, this;
      }
      setAudience(e) {
        return this._payload = { ...this._payload, aud: e }, this;
      }
      setJti(e) {
        return this._payload = { ...this._payload, jti: e }, this;
      }
      setNotBefore(e) {
        return "number" == typeof e ? this._payload = { ...this._payload, nbf: validateInput("setNotBefore", e) } : e instanceof Date ? this._payload = { ...this._payload, nbf: validateInput("setNotBefore", epoch(e)) } : this._payload = { ...this._payload, nbf: epoch(/* @__PURE__ */ new Date()) + secs(e) }, this;
      }
      setExpirationTime(e) {
        return "number" == typeof e ? this._payload = { ...this._payload, exp: validateInput("setExpirationTime", e) } : e instanceof Date ? this._payload = { ...this._payload, exp: validateInput("setExpirationTime", epoch(e)) } : this._payload = { ...this._payload, exp: epoch(/* @__PURE__ */ new Date()) + secs(e) }, this;
      }
      setIssuedAt(e) {
        return void 0 === e ? this._payload = { ...this._payload, iat: epoch(/* @__PURE__ */ new Date()) } : e instanceof Date ? this._payload = { ...this._payload, iat: validateInput("setIssuedAt", epoch(e)) } : this._payload = "string" == typeof e ? { ...this._payload, iat: validateInput("setIssuedAt", epoch(/* @__PURE__ */ new Date()) + secs(e)) } : { ...this._payload, iat: validateInput("setIssuedAt", e) }, this;
      }
    };
    EncryptJWT = class extends ProduceJWT {
      setProtectedHeader(e) {
        if (this._protectedHeader)
          throw new TypeError("setProtectedHeader can only be called once");
        return this._protectedHeader = e, this;
      }
      setKeyManagementParameters(e) {
        if (this._keyManagementParameters)
          throw new TypeError("setKeyManagementParameters can only be called once");
        return this._keyManagementParameters = e, this;
      }
      setContentEncryptionKey(e) {
        if (this._cek)
          throw new TypeError("setContentEncryptionKey can only be called once");
        return this._cek = e, this;
      }
      setInitializationVector(e) {
        if (this._iv)
          throw new TypeError("setInitializationVector can only be called once");
        return this._iv = e, this;
      }
      replicateIssuerAsHeader() {
        return this._replicateIssuerAsHeader = true, this;
      }
      replicateSubjectAsHeader() {
        return this._replicateSubjectAsHeader = true, this;
      }
      replicateAudienceAsHeader() {
        return this._replicateAudienceAsHeader = true, this;
      }
      async encrypt(e, t3) {
        const r3 = new CompactEncrypt(de.encode(JSON.stringify(this._payload)));
        return this._replicateIssuerAsHeader && (this._protectedHeader = { ...this._protectedHeader, iss: this._payload.iss }), this._replicateSubjectAsHeader && (this._protectedHeader = { ...this._protectedHeader, sub: this._payload.sub }), this._replicateAudienceAsHeader && (this._protectedHeader = { ...this._protectedHeader, aud: this._payload.aud }), r3.setProtectedHeader(this._protectedHeader), this._iv && r3.setInitializationVector(this._iv), this._cek && r3.setContentEncryptionKey(this._cek), this._keyManagementParameters && r3.setKeyManagementParameters(this._keyManagementParameters), r3.encrypt(e, t3);
      }
    };
    check = (e, t3) => {
      if ("string" != typeof e || !e)
        throw new JWKInvalid(`${t3} missing or invalid`);
    };
    ge = encode$3;
    be = decode$3;
    parse_1 = function(e, t3) {
      if ("string" != typeof e)
        throw new TypeError("argument str must be a string");
      var r3 = {}, n3 = (t3 || {}).decode || decode$1, i3 = 0;
      for (; i3 < e.length; ) {
        var a = e.indexOf("=", i3);
        if (-1 === a)
          break;
        var c3 = e.indexOf(";", i3);
        if (-1 === c3)
          c3 = e.length;
        else if (c3 < a) {
          i3 = e.lastIndexOf(";", a - 1) + 1;
          continue;
        }
        var u4 = e.slice(i3, a).trim();
        if (void 0 === r3[u4]) {
          var m11 = e.slice(a + 1, c3).trim();
          34 === m11.charCodeAt(0) && (m11 = m11.slice(1, -1)), r3[u4] = tryDecode(m11, n3);
        }
        i3 = c3 + 1;
      }
      return r3;
    };
    serialize_1 = function(e, t3, r3) {
      var n3 = r3 || {}, i3 = n3.encode || encode$1;
      if ("function" != typeof i3)
        throw new TypeError("option encode is invalid");
      if (!ke2.test(e))
        throw new TypeError("argument name is invalid");
      var a = i3(t3);
      if (a && !ke2.test(a))
        throw new TypeError("argument val is invalid");
      var c3 = e + "=" + a;
      if (null != n3.maxAge) {
        var u4 = n3.maxAge - 0;
        if (isNaN(u4) || !isFinite(u4))
          throw new TypeError("option maxAge is invalid");
        c3 += "; Max-Age=" + Math.floor(u4);
      }
      if (n3.domain) {
        if (!ke2.test(n3.domain))
          throw new TypeError("option domain is invalid");
        c3 += "; Domain=" + n3.domain;
      }
      if (n3.path) {
        if (!ke2.test(n3.path))
          throw new TypeError("option path is invalid");
        c3 += "; Path=" + n3.path;
      }
      if (n3.expires) {
        var m11 = n3.expires;
        if (!function(e2) {
          return "[object Date]" === ve2.call(e2) || e2 instanceof Date;
        }(m11) || isNaN(m11.valueOf()))
          throw new TypeError("option expires is invalid");
        c3 += "; Expires=" + m11.toUTCString();
      }
      n3.httpOnly && (c3 += "; HttpOnly");
      n3.secure && (c3 += "; Secure");
      n3.partitioned && (c3 += "; Partitioned");
      if (n3.priority) {
        switch ("string" == typeof n3.priority ? n3.priority.toLowerCase() : n3.priority) {
          case "low":
            c3 += "; Priority=Low";
            break;
          case "medium":
            c3 += "; Priority=Medium";
            break;
          case "high":
            c3 += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (n3.sameSite) {
        switch ("string" == typeof n3.sameSite ? n3.sameSite.toLowerCase() : n3.sameSite) {
          case true:
            c3 += "; SameSite=Strict";
            break;
          case "lax":
            c3 += "; SameSite=Lax";
            break;
          case "strict":
            c3 += "; SameSite=Strict";
            break;
          case "none":
            c3 += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return c3;
    };
    ve2 = Object.prototype.toString;
    ke2 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    Ee2 = 2592e3;
    now = () => Date.now() / 1e3 | 0;
    Ae = "dir";
    Se2 = "A256CBC-HS512";
    _e2 = ["providers", "session", "csrf", "signin", "signout", "callback", "verify-request", "error", "webauthn-options"];
    defaultProfile = (e) => stripUndefined({ id: e.sub ?? e.id ?? crypto.randomUUID(), name: e.name ?? e.nickname ?? e.preferred_username, email: e.email, image: e.picture });
    defaultAccount = (e) => stripUndefined({ access_token: e.access_token, id_token: e.id_token, refresh_token: e.refresh_token, expires_at: e.expires_at, scope: e.scope, token_type: e.token_type, session_state: e.session_state });
    Te = { signIn: () => true, redirect: ({ url: e, baseUrl: t3 }) => e.startsWith("/") ? `${t3}${e}` : new URL(e).origin === t3 ? e : t3, session: ({ session: e }) => ({ user: { name: e.user?.name, email: e.user?.email, image: e.user?.image }, expires: e.expires?.toISOString?.() ?? e.expires }), jwt: ({ token: e }) => e };
    Ce2 = { __e: function(e, t3, r3, n3) {
      for (var i3, a, c3; t3 = t3.__; )
        if ((i3 = t3.__c) && !i3.__)
          try {
            if ((a = i3.constructor) && null != a.getDerivedStateFromError && (i3.setState(a.getDerivedStateFromError(e)), c3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(e, n3 || {}), c3 = i3.__d), c3)
              return i3.__E = i3;
          } catch (t4) {
            e = t4;
          }
      throw e;
    } };
    xe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
    Ue = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
    Ie = /[\s\n\\/='"\0<>]/;
    Pe = /^xlink:?./;
    Oe = /["&<]/;
    s2 = function(e, t3) {
      return String(e).replace(/(\n+)/g, "$1" + (t3 || "	"));
    };
    f2 = function(e, t3, r3) {
      return String(e).length > 40 || -1 !== String(e).indexOf("\n") || -1 !== String(e).indexOf("<");
    };
    Re2 = {};
    Je = /([A-Z])/g;
    We = [];
    $e2 = { shallow: true };
    k2.render = k2;
    He = [];
    Ke = Array.isArray;
    je2 = Object.assign;
    k2.shallowRender = function(e, t3) {
      return k2(e, t3, $e2);
    };
    De2 = 0;
    Ne = { default: "Unable to sign in.", Signin: "Try signing in with a different account.", OAuthSignin: "Try signing in with a different account.", OAuthCallbackError: "Try signing in with a different account.", OAuthCreateAccount: "Try signing in with a different account.", EmailCreateAccount: "Try signing in with a different account.", Callback: "Try signing in with a different account.", OAuthAccountNotLinked: "To confirm your identity, sign in with the same account you used originally.", EmailSignin: "The e-mail could not be sent.", CredentialsSignin: "Sign in failed. Check the details you provided are correct.", SessionRequired: "Please sign in to access this page." };
    Le = ':root {\n  --border-width: 1px;\n  --border-radius: 0.5rem;\n  --color-error: #c94b4b;\n  --color-info: #157efb;\n  --color-info-hover: #0f6ddb;\n  --color-info-text: #fff;\n}\n\n.__next-auth-theme-auto,\n.__next-auth-theme-light {\n  --color-background: #ececec;\n  --color-background-hover: rgba(236, 236, 236, 0.8);\n  --color-background-card: #fff;\n  --color-text: #000;\n  --color-primary: #444;\n  --color-control-border: #bbb;\n  --color-button-active-background: #f9f9f9;\n  --color-button-active-border: #aaa;\n  --color-separator: #ccc;\n}\n\n.__next-auth-theme-dark {\n  --color-background: #161b22;\n  --color-background-hover: rgba(22, 27, 34, 0.8);\n  --color-background-card: #0d1117;\n  --color-text: #fff;\n  --color-primary: #ccc;\n  --color-control-border: #555;\n  --color-button-active-background: #060606;\n  --color-button-active-border: #666;\n  --color-separator: #444;\n}\n\n@media (prefers-color-scheme: dark) {\n  .__next-auth-theme-auto {\n    --color-background: #161b22;\n    --color-background-hover: rgba(22, 27, 34, 0.8);\n    --color-background-card: #0d1117;\n    --color-text: #fff;\n    --color-primary: #ccc;\n    --color-control-border: #555;\n    --color-button-active-background: #060606;\n    --color-button-active-border: #666;\n    --color-separator: #444;\n  }\n\n  button,\n  a.button {\n    color: var(--provider-dark-color, var(--color-primary));\n    background-color: var(--provider-dark-bg, var(--color-background));\n  }\n    :is(button,a.button):hover {\n      background-color: var(\n        --provider-dark-bg-hover,\n        var(--color-background-hover)\n      ) !important;\n    }\n  #provider-logo {\n    display: none !important;\n  }\n  #provider-logo-dark {\n    width: 25px;\n    display: block !important;\n  }\n}\nhtml {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--color-background);\n  margin: 0;\n  padding: 0;\n  font-family:\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol",\n    "Noto Color Emoji";\n}\n\nh1 {\n  margin-bottom: 1.5rem;\n  padding: 0 1rem;\n  font-weight: 400;\n  color: var(--color-text);\n}\n\np {\n  margin-bottom: 1.5rem;\n  padding: 0 1rem;\n  color: var(--color-text);\n}\n\nform {\n  margin: 0;\n  padding: 0;\n}\n\nlabel {\n  font-weight: 500;\n  text-align: left;\n  margin-bottom: 0.25rem;\n  display: block;\n  color: var(--color-text);\n}\n\ninput[type] {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  padding: 0.5rem 1rem;\n  border: var(--border-width) solid var(--color-control-border);\n  background: var(--color-background-card);\n  font-size: 1rem;\n  border-radius: var(--border-radius);\n  color: var(--color-text);\n}\n\ninput[type]:focus {\n    box-shadow: none;\n  }\n\np {\n  font-size: 1.1rem;\n  line-height: 2rem;\n}\n\na.button {\n  text-decoration: none;\n  line-height: 1rem;\n}\n\na.button:link,\n  a.button:visited {\n    background-color: var(--color-background);\n    color: var(--color-primary);\n  }\n\nbutton span {\n  flex-grow: 1;\n}\n\nbutton,\na.button {\n  padding: 0.75rem 1rem;\n  color: var(--provider-color, var(--color-primary));\n  background-color: var(--provider-bg);\n  font-size: 1.1rem;\n  min-height: 62px;\n  border-color: rgba(0, 0, 0, 0.1);\n  border-radius: var(--border-radius);\n  transition: all 0.1s ease-in-out;\n  font-weight: 500;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n:is(button,a.button):hover {\n    background-color: var(--provider-bg-hover, var(--color-background-hover));\n    cursor: pointer;\n  }\n\n:is(button,a.button):active {\n    cursor: pointer;\n  }\n\n:is(button,a.button) #provider-logo {\n    width: 25px;\n    display: block;\n  }\n\n:is(button,a.button) #provider-logo-dark {\n    display: none;\n  }\n\n#submitButton {\n  color: var(--button-text-color, var(--color-info-text));\n  background-color: var(--brand-color, var(--color-info));\n  width: 100%;\n}\n\n#submitButton:hover {\n    background-color: var(\n      --button-hover-bg,\n      var(--color-info-hover)\n    ) !important;\n  }\n\na.site {\n  color: var(--color-primary);\n  text-decoration: none;\n  font-size: 1rem;\n  line-height: 2rem;\n}\n\na.site:hover {\n    text-decoration: underline;\n  }\n\n.page {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  place-items: center;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.page > div {\n    text-align: center;\n  }\n\n.error a.button {\n    padding-left: 2rem;\n    padding-right: 2rem;\n    margin-top: 0.5rem;\n  }\n\n.error .message {\n    margin-bottom: 1.5rem;\n  }\n\n.signin input[type="text"] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n\n.signin hr {\n    display: block;\n    border: 0;\n    border-top: 1px solid var(--color-separator);\n    margin: 2rem auto 1rem auto;\n    overflow: visible;\n  }\n\n.signin hr::before {\n      content: "or";\n      background: var(--color-background-card);\n      color: #888;\n      padding: 0 0.4rem;\n      position: relative;\n      top: -0.7rem;\n    }\n\n.signin .error {\n    background: #f5f5f5;\n    font-weight: 500;\n    border-radius: 0.3rem;\n    background: var(--color-error);\n  }\n\n.signin .error p {\n      text-align: left;\n      padding: 0.5rem 1rem;\n      font-size: 0.9rem;\n      line-height: 1.2rem;\n      color: var(--color-info-text);\n    }\n\n.signin > div,\n  .signin form {\n    display: block;\n  }\n\n.signin > div input[type], .signin form input[type] {\n      margin-bottom: 0.5rem;\n    }\n\n.signin > div button, .signin form button {\n      width: 100%;\n    }\n\n.signin .provider + .provider {\n    margin-top: 1rem;\n  }\n\n.logo {\n  display: inline-block;\n  max-width: 150px;\n  margin: 1.25rem 0;\n  max-height: 70px;\n}\n\n.card {\n  background-color: var(--color-background-card);\n  border-radius: 2rem;\n  padding: 1.25rem 2rem;\n}\n\n.card .header {\n    color: var(--color-primary);\n  }\n\n.section-header {\n  color: var(--color-text);\n}\n\n@media screen and (min-width: 450px) {\n  .card {\n    margin: 2rem 0;\n    width: 368px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .card {\n    margin: 1rem 0;\n    width: 343px;\n  }\n}\n';
    if ("undefined" == typeof navigator || !"Cloudflare-Workers"?.startsWith?.("Mozilla/5.0 ")) {
      Me = `${"oauth4webapi"}/${"v2.10.4"}`;
    }
    Be = Symbol();
    Fe = Symbol();
    ze = Symbol();
    Ve = new TextEncoder();
    qe = new TextDecoder();
    Ge = 32768;
    UnsupportedOperationError = class extends Error {
      constructor(e) {
        super(e ?? "operation not supported"), this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor);
      }
    };
    OperationProcessingError = class extends Error {
      constructor(e, t3) {
        super(e, t3), this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor);
      }
    };
    Xe = OperationProcessingError;
    Ye = new class {
      constructor(e) {
        this.cache = /* @__PURE__ */ new Map(), this._cache = /* @__PURE__ */ new Map(), this.maxSize = e;
      }
      get(e) {
        let t3 = this.cache.get(e);
        return t3 || ((t3 = this._cache.get(e)) ? (this.update(e, t3), t3) : void 0);
      }
      has(e) {
        return this.cache.has(e) || this._cache.has(e);
      }
      set(e, t3) {
        return this.cache.has(e) ? this.cache.set(e, t3) : this.update(e, t3), this;
      }
      delete(e) {
        return this.cache.has(e) ? this.cache.delete(e) : !!this._cache.has(e) && this._cache.delete(e);
      }
      update(e, t3) {
        this.cache.set(e, t3), this.cache.size >= this.maxSize && (this._cache = this.cache, this.cache = /* @__PURE__ */ new Map());
      }
    }(100);
    Qe = /((?:,|, )?[0-9a-zA-Z!#$%&'*+-.^_`|~]+=)/;
    et = /(?:^|, ?)([0-9a-zA-Z!#$%&'*+\-.^_`|~]+)(?=$|[ ,])/g;
    tt = /* @__PURE__ */ new WeakMap();
    rt = /* @__PURE__ */ new WeakSet();
    nt = { aud: "audience", c_hash: "code hash", client_id: "client id", exp: "expiration time", iat: "issued at", iss: "issuer", jti: "jwt id", nonce: "nonce", s_hash: "state hash", sub: "subject", ath: "access token hash", htm: "http method", htu: "http uri", cnf: "confirmation" };
    ot = Symbol();
    it = Symbol();
    at = Symbol();
    st = Symbol();
    ct = Symbol();
    dt = { async create(e) {
      const t3 = randomBytes(), r3 = await async function(e2) {
        if (!validateString(e2))
          throw new TypeError('"codeVerifier" must be a non-empty string');
        return b64u(await crypto.subtle.digest("SHA-256", buf(e2)));
      }(t3);
      return { cookie: await signCookie("pkceCodeVerifier", t3, 900, e), value: r3 };
    }, async use(e, t3, r3) {
      const { provider: n3 } = r3;
      if (!n3?.checks?.includes("pkce"))
        return;
      const i3 = e?.[r3.cookies.pkceCodeVerifier.name];
      if (!i3)
        throw new InvalidCheck("PKCE code_verifier cookie was missing.");
      const a = await decode({ ...r3.jwt, token: i3, salt: r3.cookies.pkceCodeVerifier.name });
      if (!a?.value)
        throw new InvalidCheck("PKCE code_verifier value could not be parsed.");
      return t3.push({ name: r3.cookies.pkceCodeVerifier.name, value: "", options: { ...r3.cookies.pkceCodeVerifier.options, maxAge: 0 } }), a.value;
    } };
    lt = { async create(e, t3) {
      const { provider: r3 } = e;
      if (!r3.checks.includes("state")) {
        if (t3)
          throw new InvalidCheck("State data was provided but the provider is not configured to use state.");
        return;
      }
      const n3 = ge(JSON.stringify({ ...t3, random: randomBytes() }));
      return { cookie: await signCookie("state", n3, 900, e, t3), value: n3 };
    }, async use(e, t3, r3, n3) {
      const { provider: i3 } = r3;
      if (!i3.checks.includes("state"))
        return;
      const a = e?.[r3.cookies.state.name];
      if (!a)
        throw new InvalidCheck("State cookie was missing.");
      const c3 = await decode({ ...r3.jwt, token: a, salt: r3.cookies.state.name });
      if (!c3?.value)
        throw new InvalidCheck("State (cookie) value could not be parsed.");
      const u4 = decodeState(c3.value);
      if (!u4)
        throw new InvalidCheck("State (encoded) value could not be parsed.");
      if (u4.random !== n3)
        throw new InvalidCheck(`Random state values did not match. Expected: ${u4.random}. Got: ${n3}`);
      return t3.push({ name: r3.cookies.state.name, value: "", options: { ...r3.cookies.state.options, maxAge: 0 } }), c3.value;
    } };
    ut = { async create(e) {
      if (!e.provider.checks.includes("nonce"))
        return;
      const t3 = randomBytes();
      return { cookie: await signCookie("nonce", t3, 900, e), value: t3 };
    }, async use(e, t3, r3) {
      const { provider: n3 } = r3;
      if (!n3?.checks?.includes("nonce"))
        return;
      const i3 = e?.[r3.cookies.nonce.name];
      if (!i3)
        throw new InvalidCheck("Nonce cookie was missing.");
      const a = await decode({ ...r3.jwt, token: i3, salt: r3.cookies.nonce.name });
      if (!a?.value)
        throw new InvalidCheck("Nonce value could not be parsed.");
      return t3.push({ name: r3.cookies.nonce.name, value: "", options: { ...r3.cookies.nonce.options, maxAge: 0 } }), a.value;
    } };
    pt = { async create(e, t3, r3) {
      const n3 = { challenge: t3, registerData: r3 };
      return { cookie: await signCookie("webauthnChallenge", JSON.stringify(n3), 900, e) };
    }, async use(e, t3, r3) {
      const n3 = t3?.[e.cookies.webauthnChallenge.name];
      if (!n3)
        throw new InvalidCheck("Challenge cookie missing.");
      const i3 = await decode({ ...e.jwt, token: n3, salt: e.cookies.webauthnChallenge.name });
      if (!i3?.value)
        throw new InvalidCheck("Challenge value could not be parsed.");
      const a = { name: e.cookies.webauthnChallenge.name, value: "", options: { ...e.cookies.webauthnChallenge.options, maxAge: 0 } };
      return r3.push(a), JSON.parse(i3.value);
    } };
    ht = Symbol("skip-csrf-check");
    ft = Symbol("return-type-raw");
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/auth.mjs
import { AsyncLocalStorage as f3 } from "node:async_hooks";
function P2(e) {
  return "string" == typeof e && !!e.trim();
}
function $2(e, t3) {
  var n3 = e.split(";").filter(P2), s4 = function(e2) {
    var t4 = "", n4 = "", s5 = e2.split("=");
    return s5.length > 1 ? (t4 = s5.shift(), n4 = s5.join("=")) : n4 = e2, { name: t4, value: n4 };
  }(n3.shift()), o4 = s4.name, a = s4.value;
  t3 = t3 ? Object.assign({}, m4, t3) : m4;
  try {
    a = t3.decodeValues ? decodeURIComponent(a) : a;
  } catch (e2) {
    console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + a + "'. Set options.decodeValues to false to disable this feature.", e2);
  }
  var i3 = { name: o4, value: a };
  return n3.forEach(function(e2) {
    var t4 = e2.split("="), n4 = t4.shift().trimLeft().toLowerCase(), s5 = t4.join("=");
    "expires" === n4 ? i3.expires = new Date(s5) : "max-age" === n4 ? i3.maxAge = parseInt(s5, 10) : "secure" === n4 ? i3.secure = true : "httponly" === n4 ? i3.httpOnly = true : "samesite" === n4 ? i3.sameSite = s5 : i3[n4] = s5;
  }), i3;
}
function T2(e, t3) {
  if (t3 = t3 ? Object.assign({}, m4, t3) : m4, !e)
    return t3.map ? {} : [];
  if (e.headers)
    if ("function" == typeof e.headers.getSetCookie)
      e = e.headers.getSetCookie();
    else if (e.headers["set-cookie"])
      e = e.headers["set-cookie"];
    else {
      var n3 = e.headers[Object.keys(e.headers).find(function(e2) {
        return "set-cookie" === e2.toLowerCase();
      })];
      !n3 && e.headers.cookie && !t3.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e = n3;
    }
  if (Array.isArray(e) || (e = [e]), (t3 = t3 ? Object.assign({}, m4, t3) : m4).map) {
    return e.filter(P2).reduce(function(e2, n4) {
      var s4 = $2(n4, t3);
      return e2[s4.name] = s4, e2;
    }, {});
  }
  return e.filter(P2).map(function(e2) {
    return $2(e2, t3);
  });
}
function V2() {
  return es("nitro-app", { asyncContext: !!globalThis.app.config.server.experimental?.asyncContext, AsyncLocalStorage: f3 }).use().event;
}
function se2(n3) {
  const r3 = async (s4) => {
    const o4 = "object" == typeof n3 ? n3 : await n3(s4);
    c(At.env, o4);
    const { request: i3 } = s4, c3 = new URL(i3.url);
    s4.locals.auth ??= () => async function(n4, s5) {
      c(At.env, s5), s5.trustHost ??= true;
      const { request: o5 } = n4, { protocol: i4 } = new URL(o5.url), c4 = createActionURL("session", i4, o5.headers, At.env, s5.basePath), l7 = new Request(c4, { headers: { cookie: o5.headers.get("cookie") ?? "" } }), p6 = await Auth(l7, s5), f5 = g2(p6.headers.get("set-cookie") ?? "");
      for (const e of f5) {
        const { name: t3, value: s6, ...o6 } = e;
        n4.response.headers.append("set-cookie", `${t3}=${s6}; Path=/; ${o6.httpOnly ? "HttpOnly;" : ""} ${o6.secure ? "Secure;" : ""} ${o6.sameSite ? `SameSite=${o6.sameSite};` : ""}`);
      }
      const { status: d7 = 200 } = p6, m11 = await p6.json();
      if (!m11 || !Object.keys(m11).length)
        return null;
      if (200 === d7)
        return m11;
      throw new Error(m11.message);
    }(s4, o4), s4.locals.getSession ??= s4.locals.auth;
    const l6 = c3.pathname.slice(o4.basePath.length + 1).split("/")[0];
    return isAuthAction(l6) && c3.pathname.startsWith(o4.basePath + "/") ? Auth(i3, o4) : new Response("Not Found", { status: 404 });
  };
  return { signIn: async (s4) => {
    const { request: o4 } = s4, l6 = "object" == typeof n3 ? n3 : await n3(s4);
    c(At.env, l6);
    const p6 = await o4.formData(), { providerId: f5, ...d7 } = Object.fromEntries(p6);
    let m11 = {}, g6 = {};
    for (const e in d7)
      e.startsWith(S2) ? m11[e.slice(20)] = d7[e] : g6[e] = d7[e];
    await async function(n4, s5 = {}, o5, l7, p7) {
      const { request: f6 } = p7, { protocol: h6 } = new URL(f6.url), d8 = new Headers(f6.headers), { redirect: m12 = true, redirectTo: g7, ...v6 } = s5 instanceof FormData ? Object.fromEntries(s5) : s5, y7 = g7?.toString() ?? d8.get("Referer") ?? "/", S6 = createActionURL("signin", h6, d8, At.env, l7.basePath);
      if (!n4) {
        const e = `${S6}?${new URLSearchParams({ callbackUrl: y7 })}`;
        return m12 && w3(p7.nativeEvent, e, 302), e;
      }
      let b5, k4 = `${S6}/${n4}?${new URLSearchParams(o5)}`;
      for (const e of l7.providers) {
        const { id: t3 } = "function" == typeof e ? e() : e;
        if (t3 === n4) {
          b5 = t3;
          break;
        }
      }
      if (!b5) {
        const e = `${S6}?${new URLSearchParams({ callbackUrl: y7 })}`;
        return m12 && w3(p7.nativeEvent, e, 302), e;
      }
      "credentials" === b5 && (k4 = k4.replace("signin", "callback")), d8.set("Content-Type", "application/x-www-form-urlencoded");
      const C4 = new URLSearchParams({ ...v6, callbackUrl: y7 }), O2 = new Request(k4, { method: "POST", headers: d8, body: C4 }), R4 = await Auth(O2, { ...l7, raw: ft, skipCSRFCheck: ht });
      for (const e of R4?.cookies ?? [])
        p7.response.headers.append("set-cookie", `${e.name}=${e.value}; Path=/; ${e.options?.httpOnly ? "HttpOnly;" : ""} ${e.options?.secure ? "Secure;" : ""} ${e.options?.sameSite ? `SameSite=${e.options.sameSite};` : ""}`);
      return m12 ? w3(p7.nativeEvent, R4.redirect, 302) : R4.redirect;
    }(f5, g6, m11, l6, s4);
  }, signOut: async (s4) => {
    const o4 = "object" == typeof n3 ? n3 : await n3(s4);
    c(At.env, o4);
    const l6 = Object.fromEntries(await s4.request.formData());
    await async function(n4, s5, o5) {
      const { request: l7 } = o5, { protocol: p6 } = new URL(l7.url), f5 = new Headers(l7.headers);
      f5.set("Content-Type", "application/x-www-form-urlencoded");
      const h6 = createActionURL("signout", p6, f5, At.env, s5.basePath), d7 = n4?.redirectTo ?? f5.get("Referer") ?? "/", m11 = new URLSearchParams({ callbackUrl: d7 }), g6 = new Request(h6, { method: "POST", headers: f5, body: m11 }), v6 = await Auth(g6, { ...s5, raw: ft, skipCSRFCheck: ht });
      for (const e of v6?.cookies ?? [])
        o5.response.headers.append("set-cookie", `${e.name}=${e.value}; Path=/; ${e.options?.httpOnly ? "HttpOnly;" : ""} ${e.options?.secure ? "Secure;" : ""} ${e.options?.sameSite ? `SameSite=${e.options.sameSite};` : ""}`);
      return n4?.redirect ?? 1 ? w3(o5.nativeEvent, v6.redirect, 302) : v6;
    }(l6, o4, s4);
  }, GET: r3, POST: r3 };
}
var d3, m4, g2, v3, w3, y3, S2, b2;
var init_auth = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/auth.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_discord();
    init_utils();
    d3 = { exports: {} };
    m4 = { decodeValues: true, map: false, silent: false };
    d3.exports = T2;
    g2 = d3.exports.parse = T2;
    d3.exports.parseString = $2, d3.exports.splitCookiesString = function(e) {
      if (Array.isArray(e))
        return e;
      if ("string" != typeof e)
        return [];
      var t3, n3, s4, o4, a, i3 = [], c3 = 0;
      function u4() {
        for (; c3 < e.length && /\s/.test(e.charAt(c3)); )
          c3 += 1;
        return c3 < e.length;
      }
      for (; c3 < e.length; ) {
        for (t3 = c3, a = false; u4(); )
          if ("," === (n3 = e.charAt(c3))) {
            for (s4 = c3, c3 += 1, u4(), o4 = c3; c3 < e.length && "=" !== (n3 = e.charAt(c3)) && ";" !== n3 && "," !== n3; )
              c3 += 1;
            c3 < e.length && "=" === e.charAt(c3) ? (a = true, c3 = o4, i3.push(e.substring(t3, s4)), t3 = c3) : c3 = s4 + 1;
          } else
            c3 += 1;
        (!a || c3 >= e.length) && i3.push(e.substring(t3, e.length));
      }
      return i3;
    };
    v3 = Symbol("$HTTPEvent");
    w3 = (y3 = sendRedirect, function(...e) {
      let t3 = e[0];
      if (function(e2) {
        return "object" == typeof e2 && (e2 instanceof H3Event || e2?.[v3] instanceof H3Event || true === e2?.__is_event__);
      }(t3))
        e[0] = t3 instanceof H3Event || t3.__is_event__ ? t3 : t3[v3];
      else {
        if (!globalThis.app.config.server.experimental?.asyncContext)
          throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
        if (t3 = V2(), !t3)
          throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
        e.unshift(t3);
      }
      return y3(...e);
    });
    S2 = "authorizationParams-";
    b2 = { providers: [Discord({ clientId: At.env.DISCORD_CLIENT_ID, clientSecret: At.env.DISCORD_CLIENT_SECRET })] };
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/_...solidauth_.mjs
var solidauth_exports = {};
__export(solidauth_exports, {
  GET: () => m5,
  POST: () => t
});
import "node:async_hooks";
var m5, t;
var init_solidauth = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/_...solidauth_.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_auth();
    init_runtime();
    init_discord();
    init_utils();
    ({ GET: m5, POST: t } = se2(b2));
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/_...solidauth_2.mjs
var solidauth_2_exports = {};
__export(solidauth_2_exports, {
  GET: () => m6,
  POST: () => t2
});
import "node:async_hooks";
var m6, t2;
var init_solidauth_2 = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/_...solidauth_2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_auth();
    init_runtime();
    init_discord();
    init_utils();
    ({ GET: m6, POST: t2 } = se2(b2));
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/app.mjs
var app_exports = {};
__export(app_exports, {
  default: () => _e3
});
import "node:async_hooks";
function he2(e) {
  const r3 = e.routerState.location, n3 = e.routerState.params, a = createMemo(() => e.preload && rn(() => {
    e.preload({ params: n3, location: r3, intent: $e() || "initial" });
  }));
  return createComponent(Show, { get when() {
    return e.root;
  }, keyed: true, get fallback() {
    return e.children;
  }, children: (o4) => createComponent(o4, { params: n3, location: r3, get data() {
    return a();
  }, get children() {
    return e.children;
  } }) });
}
function pe2(t3) {
  {
    const e2 = getRequestEvent();
    if (e2 && e2.router && e2.router.dataOnly)
      return void function(t4, e3, r4) {
        const n4 = new URL(t4.request.url), a = k(r4, new URL(t4.router.previousUrl || t4.request.url).pathname), o4 = k(r4, n4.pathname);
        for (let r5 = 0; r5 < o4.length; r5++) {
          (!a[r5] || o4[r5].route !== a[r5].route) && (t4.router.dataOnly = true);
          const { route: n5, params: s4 } = o4[r5];
          n5.preload && n5.preload({ params: s4, location: e3.location, intent: "preload" });
        }
      }(e2, t3.routerState, t3.branches);
    e2 && ((e2.router || (e2.router = {})).matches || (e2.router.matches = t3.routerState.matches().map(({ route: t4, path: e3, params: r4 }) => ({ path: t4.originalPath, pattern: t4.pattern, match: e3, params: r4, info: t4.info }))));
  }
  const e = [];
  let r3;
  const n3 = createMemo(on(t3.routerState.matches, (a, o4, s4) => {
    let i3 = o4 && a.length === o4.length;
    const c3 = [];
    for (let r4 = 0, l6 = a.length; r4 < l6; r4++) {
      const l7 = o4 && o4[r4], u4 = a[r4];
      s4 && l7 && u4.route.key === l7.route.key ? c3[r4] = s4[r4] : (i3 = false, e[r4] && e[r4](), createRoot((a2) => {
        e[r4] = a2, c3[r4] = De(t3.routerState, c3[r4 - 1] || t3.routerState.base, j2(() => n3()[r4 + 1]), () => t3.routerState.matches()[r4]);
      }));
    }
    return e.splice(a.length).forEach((t4) => t4()), s4 && i3 ? s4 : (r3 = c3[0], c3);
  }));
  return j2(() => n3() && r3)();
}
function Ce3(t3) {
  let e;
  const r3 = t3.url || (e = getRequestEvent()) && function(t4) {
    const e2 = new URL(t4);
    return e2.pathname + e2.search;
  }(e.request.url) || "", n3 = { value: t3.transformUrl ? t3.transformUrl(r3) : r3 };
  return K({ signal: [() => n3, (t4) => Object.assign(n3, t4)] })(t3);
}
function Ae2(t3) {
  return Ce3(t3);
}
function Oe2() {
  const t3 = [];
  return useAssets(() => ssr(function(t4) {
    return t4.map((t5) => {
      const e = Object.keys(t5.props).map((e2) => "children" === e2 ? "" : ` ${e2}="${escape(t5.props[e2], true)}"`).join("");
      let r3 = t5.props.children;
      return Array.isArray(r3) && (r3 = r3.join("")), t5.setting?.close ? `<${t5.tag} data-sm="${t5.id}"${e}>${t5.setting?.escape ? escape(r3) : r3 || ""}</${t5.tag}>` : `<${t5.tag} data-sm="${t5.id}"${e}/>`;
    }).join("");
  }(t3))), { addTag(e) {
    if (-1 !== L.indexOf(e.tag)) {
      const r3 = "title" === e.tag ? T3 : C2, n3 = S3(e, r3), a = t3.findIndex((t4) => t4.tag === e.tag && S3(t4, r3) === n3);
      -1 !== a && t3.splice(a, 1);
    }
    return t3.push(e), t3.length;
  }, removeTag(t4, e) {
  } };
}
function _e3() {
  return createComponent(Ae2, { root: (a) => createComponent(Te2, { get children() {
    return [createComponent(Ue2, { children: "SolidStart - Basic" }), ssr(E2, ssrHydrationKey()), ssr(R2, ssrHydrationKey()), createComponent(Suspense, { get children() {
      return createComponent(C, { get children() {
        return [a.children, " "];
      } });
    } })];
  } }), get children() {
    return createComponent(ti, {});
  } });
}
var K, j2, A, L, T3, C2, S3, Te2, ke3, Ue2, E2, R2;
var init_app = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/app.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_client();
    init_routing();
    init_utils();
    K = (e) => (r3) => {
      const { base: n3 } = r3, a = children(() => r3.children), o4 = createMemo(() => Se(a(), r3.base || ""));
      let s4;
      const i3 = ke(e, o4, () => s4, { base: n3, singleFlight: r3.singleFlight, transformUrl: r3.transformUrl });
      return e.create && e.create(i3), createComponent(w.Provider, { value: i3, get children() {
        return createComponent(he2, { routerState: i3, get root() {
          return r3.root;
        }, get preload() {
          return r3.rootPreload || r3.rootLoad;
        }, get children() {
          return [(s4 = getOwner()) && null, createComponent(pe2, { routerState: i3, get branches() {
            return o4();
          } })];
        } });
      } });
    };
    j2 = (e) => () => createComponent(Show, { get when() {
      return e();
    }, keyed: true, children: (e2) => createComponent(b.Provider, { value: e2, get children() {
      return e2.outlet();
    } }) });
    A = createContext();
    L = ["title", "meta"];
    T3 = [];
    C2 = ["name", "http-equiv", "content", "charset", "media"].concat(["property"]);
    S3 = (t3, e) => {
      const r3 = Object.fromEntries(Object.entries(t3.props).filter(([t4]) => e.includes(t4)).sort());
      return (Object.hasOwn(r3, "name") || Object.hasOwn(r3, "property")) && (r3.name = r3.name || r3.property, delete r3.property), t3.tag + JSON.stringify(r3);
    };
    Te2 = (e) => {
      const r3 = Oe2();
      return createComponent(A.Provider, { value: r3, get children() {
        return e.children;
      } });
    };
    ke3 = (t3, e, r3) => (function(t4) {
      const e2 = useContext(A);
      if (!e2)
        throw new Error("<MetaProvider /> should be in the tree");
      createRenderEffect(() => {
        const r4 = e2.addTag(t4);
        onCleanup(() => e2.removeTag(t4, r4));
      });
    }({ tag: t3, props: e, setting: r3, id: createUniqueId(), get name() {
      return e.name || e.property;
    } }), null);
    Ue2 = (t3) => ke3("title", t3, { escape: true, close: true });
    E2 = ["<a", ' href="/">Index</a>'];
    R2 = ["<a", ' href="/protected">Protected</a>'];
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/_...404_2.mjs
var __exports2 = {};
__export(__exports2, {
  default: () => n2
});
import "node:async_hooks";
function n2() {
  return ssr(s3, ssrHydrationKey());
}
var s3;
var init__2 = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/_...404_2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    s3 = ["<main", ' class="w-full p-4 space-y-2"><h1 class="font-bold text-xl">Page Not Found</h1></main>'];
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/index2.mjs
var index2_exports = {};
__export(index2_exports, {
  default: () => N2
});
import "node:async_hooks";
function h3(e) {
  const n3 = je3(), t3 = _e4(), { href: a, state: r3 } = e;
  return n3("function" == typeof a ? a({ navigate: n3, location: t3 }) : a, { replace: true, state: r3 }), null;
}
function N2() {
  const i3 = H2(), [u4, f5] = createSignal(3), x2 = setInterval(() => {
    f5((e) => e - 1);
  }, 1e3);
  return onCleanup(() => clearInterval(x2)), ssr(p4, ssrHydrationKey(), escape(createComponent(Show, { get when() {
    return i3();
  }, get fallback() {
    return [ssr(g3, ssrHydrationKey()), ssr(d4, ssrHydrationKey())];
  }, get children() {
    return [ssr(l4, ssrHydrationKey(), escape(u4())), createComponent(Show, { get when() {
      return u4() <= 0;
    }, get children() {
      return createComponent(h3, { href: "/protected" });
    } })];
  } })));
}
var l4, p4, g3, d4;
var init_index2 = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/index2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    l4 = ["<span", ">Redirecting to protected page in <!--$-->", "<!--/--> seconds...</span>"];
    p4 = ["<main", "><h1>Home</h1><!--$-->", "<!--/--></main>"];
    g3 = ["<span", ">You are not signed in.</span>"];
    d4 = ["<button", ">Sign In</button>"];
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/protected2.mjs
var protected2_exports = {};
__export(protected2_exports, {
  default: () => y4
});
import "node:async_hooks";
var u3, i2, l5, y4;
var init_protected2 = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/protected2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    u3 = ["<p", ">Only shown for logged in users</p>"];
    i2 = ["<main", "><h1>Protected</h1><!--$-->", "<!--/--><span>Hey there <!--$-->", "<!--/-->! You are signed in!</span><button>Sign Out</button></main>"];
    l5 = ["<img", ">"];
    y4 = () => {
      const c3 = H2();
      return createComponent(Show, { get when() {
        return c3();
      }, get fallback() {
        return ssr(u3, ssrHydrationKey());
      }, keyed: true, children: (e) => {
        var n3, o4, u4;
        return ssr(i2, ssrHydrationKey(), (null == (n3 = e.user) ? void 0 : n3.image) ? ssr(l5, ssrHydrationKey() + ssrAttribute("src", escape(null == (o4 = e.user) ? void 0 : o4.image, true), false)) : escape(null), escape(null == (u4 = e.user) ? void 0 : u4.name));
      } });
    };
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/auth-5VKwSiTq.mjs
import { AsyncLocalStorage as h4 } from "node:async_hooks";
function P3(e) {
  return "string" == typeof e && !!e.trim();
}
function $3(e, t3) {
  var n3 = e.split(";").filter(P3), o4 = function(e2) {
    var t4 = "", n4 = "", o5 = e2.split("=");
    return o5.length > 1 ? (t4 = o5.shift(), n4 = o5.join("=")) : n4 = e2, { name: t4, value: n4 };
  }(n3.shift()), s4 = o4.name, a = o4.value;
  t3 = t3 ? Object.assign({}, v4, t3) : v4;
  try {
    a = t3.decodeValues ? decodeURIComponent(a) : a;
  } catch (e2) {
    console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + a + "'. Set options.decodeValues to false to disable this feature.", e2);
  }
  var i3 = { name: s4, value: a };
  return n3.forEach(function(e2) {
    var t4 = e2.split("="), n4 = t4.shift().trimLeft().toLowerCase(), o5 = t4.join("=");
    "expires" === n4 ? i3.expires = new Date(o5) : "max-age" === n4 ? i3.maxAge = parseInt(o5, 10) : "secure" === n4 ? i3.secure = true : "httponly" === n4 ? i3.httpOnly = true : "samesite" === n4 ? i3.sameSite = o5 : i3[n4] = o5;
  }), i3;
}
function T4(e, t3) {
  if (t3 = t3 ? Object.assign({}, v4, t3) : v4, !e)
    return t3.map ? {} : [];
  if (e.headers)
    if ("function" == typeof e.headers.getSetCookie)
      e = e.headers.getSetCookie();
    else if (e.headers["set-cookie"])
      e = e.headers["set-cookie"];
    else {
      var n3 = e.headers[Object.keys(e.headers).find(function(e2) {
        return "set-cookie" === e2.toLowerCase();
      })];
      !n3 && e.headers.cookie && !t3.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e = n3;
    }
  if (Array.isArray(e) || (e = [e]), (t3 = t3 ? Object.assign({}, v4, t3) : v4).map) {
    return e.filter(P3).reduce(function(e2, n4) {
      var o4 = $3(n4, t3);
      return e2[o4.name] = o4, e2;
    }, {});
  }
  return e.filter(P3).map(function(e2) {
    return $3(e2, t3);
  });
}
function V3() {
  return x("nitro-app", { asyncContext: !!(null == (e = globalThis.app.config.server.experimental) ? void 0 : e.asyncContext), AsyncLocalStorage: h4 }).use().event;
  var e;
}
function se3(o4) {
  const r3 = async (s4) => {
    var a, c3;
    const l6 = "object" == typeof o4 ? o4 : await o4(s4);
    f$2(At.env, l6);
    const { request: p6 } = s4, h6 = new URL(p6.url);
    null != (a = s4.locals).auth || (a.auth = () => async function(o5, s5) {
      var a2, c4;
      f$2(At.env, s5), null != s5.trustHost || (s5.trustHost = true);
      const { request: l7 } = o5, { protocol: p7 } = new URL(l7.url), f5 = createActionURL("session", p7, l7.headers, At.env, s5.basePath), h7 = new Request(f5, { headers: { cookie: null != (a2 = l7.headers.get("cookie")) ? a2 : "" } }), d8 = await Auth(h7, s5), v6 = m7(null != (c4 = d8.headers.get("set-cookie")) ? c4 : "");
      for (const e of v6) {
        const { name: t3, value: n3, ...s6 } = e;
        o5.response.headers.append("set-cookie", `${t3}=${n3}; Path=/; ${s6.httpOnly ? "HttpOnly;" : ""} ${s6.secure ? "Secure;" : ""} ${s6.sameSite ? `SameSite=${s6.sameSite};` : ""}`);
      }
      const { status: g6 = 200 } = d8, w6 = await d8.json();
      if (!w6 || !Object.keys(w6).length)
        return null;
      if (200 === g6)
        return w6;
      throw new Error(w6.message);
    }(s4, l6)), null != (c3 = s4.locals).getSession || (c3.getSession = s4.locals.auth);
    const d7 = h6.pathname.slice(l6.basePath.length + 1).split("/")[0];
    return isAuthAction(d7) && h6.pathname.startsWith(l6.basePath + "/") ? Auth(p6, l6) : new Response("Not Found", { status: 404 });
  };
  return { signIn: async (s4) => {
    const { request: a } = s4, p6 = "object" == typeof o4 ? o4 : await o4(s4);
    f$2(At.env, p6);
    const f5 = await a.formData(), { providerId: h6, ...d7 } = Object.fromEntries(f5);
    let v6 = {}, m11 = {};
    for (const e in d7)
      e.startsWith(S4) ? v6[e.slice(20)] = d7[e] : m11[e] = d7[e];
    await async function(e, o5 = {}, s5, a2, p7) {
      var f6, h7, d8, v7, m12, g6;
      const { request: y7 } = p7, { protocol: S6 } = new URL(y7.url), b5 = new Headers(y7.headers), { redirect: k4 = true, redirectTo: C4, ...O2 } = o5 instanceof FormData ? Object.fromEntries(o5) : o5, R4 = null != (h7 = null != (f6 = null == C4 ? void 0 : C4.toString()) ? f6 : b5.get("Referer")) ? h7 : "/", x2 = createActionURL("signin", S6, b5, At.env, a2.basePath);
      if (!e) {
        const e2 = `${x2}?${new URLSearchParams({ callbackUrl: R4 })}`;
        return k4 && w4(p7.nativeEvent, e2, 302), e2;
      }
      let E4, j4 = `${x2}/${e}?${new URLSearchParams(s5)}`;
      for (const t3 of a2.providers) {
        const { id: n3 } = "function" == typeof t3 ? t3() : t3;
        if (n3 === e) {
          E4 = n3;
          break;
        }
      }
      if (!E4) {
        const e2 = `${x2}?${new URLSearchParams({ callbackUrl: R4 })}`;
        return k4 && w4(p7.nativeEvent, e2, 302), e2;
      }
      "credentials" === E4 && (j4 = j4.replace("signin", "callback")), b5.set("Content-Type", "application/x-www-form-urlencoded");
      const L3 = new URLSearchParams({ ...O2, callbackUrl: R4 }), _3 = new Request(j4, { method: "POST", headers: b5, body: L3 }), U3 = await Auth(_3, { ...a2, raw: ft, skipCSRFCheck: ht });
      for (const e2 of null != (d8 = null == U3 ? void 0 : U3.cookies) ? d8 : [])
        p7.response.headers.append("set-cookie", `${e2.name}=${e2.value}; Path=/; ${(null == (v7 = e2.options) ? void 0 : v7.httpOnly) ? "HttpOnly;" : ""} ${(null == (m12 = e2.options) ? void 0 : m12.secure) ? "Secure;" : ""} ${(null == (g6 = e2.options) ? void 0 : g6.sameSite) ? `SameSite=${e2.options.sameSite};` : ""}`);
      return k4 ? w4(p7.nativeEvent, U3.redirect, 302) : U3.redirect;
    }(h6, m11, v6, p6, s4);
  }, signOut: async (s4) => {
    const a = "object" == typeof o4 ? o4 : await o4(s4);
    f$2(At.env, a);
    const p6 = Object.fromEntries(await s4.request.formData());
    await async function(e, o5, s5) {
      var a2, p7, f5, h6, d7, v6, m11;
      const { request: g6 } = s5, { protocol: y7 } = new URL(g6.url), S6 = new Headers(g6.headers);
      S6.set("Content-Type", "application/x-www-form-urlencoded");
      const b5 = createActionURL("signout", y7, S6, At.env, o5.basePath), k4 = null != (p7 = null != (a2 = null == e ? void 0 : e.redirectTo) ? a2 : S6.get("Referer")) ? p7 : "/", C4 = new URLSearchParams({ callbackUrl: k4 }), O2 = new Request(b5, { method: "POST", headers: S6, body: C4 }), R4 = await Auth(O2, { ...o5, raw: ft, skipCSRFCheck: ht });
      for (const e2 of null != (f5 = null == R4 ? void 0 : R4.cookies) ? f5 : [])
        s5.response.headers.append("set-cookie", `${e2.name}=${e2.value}; Path=/; ${(null == (h6 = e2.options) ? void 0 : h6.httpOnly) ? "HttpOnly;" : ""} ${(null == (d7 = e2.options) ? void 0 : d7.secure) ? "Secure;" : ""} ${(null == (v6 = e2.options) ? void 0 : v6.sameSite) ? `SameSite=${e2.options.sameSite};` : ""}`);
      return null == (m11 = null == e ? void 0 : e.redirect) || m11 ? w4(s5.nativeEvent, R4.redirect, 302) : R4;
    }(p6, a, s4);
  }, GET: r3, POST: r3 };
}
var d5, v4, m7, g4, w4, y5, S4, b3;
var init_auth_5VKwSiTq = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/auth-5VKwSiTq.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_discord();
    d5 = { exports: {} };
    v4 = { decodeValues: true, map: false, silent: false };
    d5.exports = T4;
    m7 = d5.exports.parse = T4;
    d5.exports.parseString = $3, d5.exports.splitCookiesString = function(e) {
      if (Array.isArray(e))
        return e;
      if ("string" != typeof e)
        return [];
      var t3, n3, o4, s4, a, i3 = [], c3 = 0;
      function u4() {
        for (; c3 < e.length && /\s/.test(e.charAt(c3)); )
          c3 += 1;
        return c3 < e.length;
      }
      for (; c3 < e.length; ) {
        for (t3 = c3, a = false; u4(); )
          if ("," === (n3 = e.charAt(c3))) {
            for (o4 = c3, c3 += 1, u4(), s4 = c3; c3 < e.length && "=" !== (n3 = e.charAt(c3)) && ";" !== n3 && "," !== n3; )
              c3 += 1;
            c3 < e.length && "=" === e.charAt(c3) ? (a = true, c3 = s4, i3.push(e.substring(t3, o4)), t3 = c3) : c3 = o4 + 1;
          } else
            c3 += 1;
        (!a || c3 >= e.length) && i3.push(e.substring(t3, e.length));
      }
      return i3;
    };
    g4 = Symbol("$HTTPEvent");
    w4 = (y5 = sendRedirect, function(...e) {
      var t3;
      let n3 = e[0];
      if (function(e2) {
        return "object" == typeof e2 && (e2 instanceof H3Event || (null == e2 ? void 0 : e2[g4]) instanceof H3Event || true === (null == e2 ? void 0 : e2.__is_event__));
      }(n3))
        e[0] = n3 instanceof H3Event || n3.__is_event__ ? n3 : n3[g4];
      else {
        if (!(null == (t3 = globalThis.app.config.server.experimental) ? void 0 : t3.asyncContext))
          throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
        if (n3 = V3(), !n3)
          throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
        e.unshift(n3);
      }
      return y5(...e);
    });
    S4 = "authorizationParams-";
    b3 = { providers: [Discord({ clientId: At.env.DISCORD_CLIENT_ID, clientSecret: At.env.DISCORD_CLIENT_SECRET })] };
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/_...solidauth_3.mjs
var solidauth_3_exports = {};
__export(solidauth_3_exports, {
  GET: () => m8,
  POST: () => r
});
import "node:async_hooks";
var m8, r;
var init_solidauth_3 = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/_...solidauth_3.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_auth_5VKwSiTq();
    init_runtime();
    init_discord();
    ({ GET: m8, POST: r } = se3(b3));
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/build/_...solidauth_22.mjs
var solidauth_22_exports = {};
__export(solidauth_22_exports, {
  GET: () => m9,
  POST: () => r2
});
import "node:async_hooks";
var m9, r2;
var init_solidauth_22 = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/build/_...solidauth_22.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_auth_5VKwSiTq();
    init_runtime();
    init_discord();
    ({ GET: m9, POST: r2 } = se3(b3));
  }
});

// .wrangler/tmp/pages-9PkRin/chunks/runtime.mjs
import { AsyncLocalStorage as o3 } from "node:async_hooks";
function createNotImplementedError$1(o4) {
  throw new Error(`[unenv] ${o4} is not implemented yet!`);
}
function notImplemented$1(o4) {
  return Object.assign(() => {
    throw createNotImplementedError$1(o4);
  }, { __unenv__: true });
}
function toByteArray(o4) {
  let d7;
  const b5 = function(o5) {
    const d8 = o5.length;
    if (d8 % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    let f5 = o5.indexOf("=");
    return -1 === f5 && (f5 = d8), [f5, f5 === d8 ? 0 : 4 - f5 % 4];
  }(o4), w6 = b5[0], E4 = b5[1], S6 = new v5(function(o5, d8, f5) {
    return 3 * (d8 + f5) / 4 - f5;
  }(0, w6, E4));
  let _3 = 0;
  const A3 = E4 > 0 ? w6 - 4 : w6;
  let I2;
  for (I2 = 0; I2 < A3; I2 += 4)
    d7 = f4[o4.charCodeAt(I2)] << 18 | f4[o4.charCodeAt(I2 + 1)] << 12 | f4[o4.charCodeAt(I2 + 2)] << 6 | f4[o4.charCodeAt(I2 + 3)], S6[_3++] = d7 >> 16 & 255, S6[_3++] = d7 >> 8 & 255, S6[_3++] = 255 & d7;
  return 2 === E4 && (d7 = f4[o4.charCodeAt(I2)] << 2 | f4[o4.charCodeAt(I2 + 1)] >> 4, S6[_3++] = 255 & d7), 1 === E4 && (d7 = f4[o4.charCodeAt(I2)] << 10 | f4[o4.charCodeAt(I2 + 1)] << 4 | f4[o4.charCodeAt(I2 + 2)] >> 2, S6[_3++] = d7 >> 8 & 255, S6[_3++] = 255 & d7), S6;
}
function encodeChunk(o4, f5, v6) {
  let b5;
  const w6 = [];
  for (let S6 = f5; S6 < v6; S6 += 3)
    b5 = (o4[S6] << 16 & 16711680) + (o4[S6 + 1] << 8 & 65280) + (255 & o4[S6 + 2]), w6.push(d6[(E4 = b5) >> 18 & 63] + d6[E4 >> 12 & 63] + d6[E4 >> 6 & 63] + d6[63 & E4]);
  var E4;
  return w6.join("");
}
function fromByteArray(o4) {
  let f5;
  const v6 = o4.length, b5 = v6 % 3, w6 = [], E4 = 16383;
  for (let d7 = 0, f6 = v6 - b5; d7 < f6; d7 += E4)
    w6.push(encodeChunk(o4, d7, d7 + E4 > f6 ? f6 : d7 + E4));
  return 1 === b5 ? (f5 = o4[v6 - 1], w6.push(d6[f5 >> 2] + d6[f5 << 4 & 63] + "==")) : 2 === b5 && (f5 = (o4[v6 - 2] << 8) + o4[v6 - 1], w6.push(d6[f5 >> 10] + d6[f5 >> 4 & 63] + d6[f5 << 2 & 63] + "=")), w6.join("");
}
function read(o4, d7, f5, v6, b5) {
  let w6, E4;
  const S6 = 8 * b5 - v6 - 1, _3 = (1 << S6) - 1, A3 = _3 >> 1;
  let I2 = -7, M2 = f5 ? b5 - 1 : 0;
  const L3 = f5 ? -1 : 1;
  let U3 = o4[d7 + M2];
  for (M2 += L3, w6 = U3 & (1 << -I2) - 1, U3 >>= -I2, I2 += S6; I2 > 0; )
    w6 = 256 * w6 + o4[d7 + M2], M2 += L3, I2 -= 8;
  for (E4 = w6 & (1 << -I2) - 1, w6 >>= -I2, I2 += v6; I2 > 0; )
    E4 = 256 * E4 + o4[d7 + M2], M2 += L3, I2 -= 8;
  if (0 === w6)
    w6 = 1 - A3;
  else {
    if (w6 === _3)
      return E4 ? Number.NaN : (U3 ? -1 : 1) * Number.POSITIVE_INFINITY;
    E4 += Math.pow(2, v6), w6 -= A3;
  }
  return (U3 ? -1 : 1) * E4 * Math.pow(2, w6 - v6);
}
function write(o4, d7, f5, v6, b5, w6) {
  let E4, S6, _3, A3 = 8 * w6 - b5 - 1;
  const I2 = (1 << A3) - 1, M2 = I2 >> 1, L3 = 23 === b5 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  let U3 = v6 ? 0 : w6 - 1;
  const N4 = v6 ? 1 : -1, q3 = d7 < 0 || 0 === d7 && 1 / d7 < 0 ? 1 : 0;
  for (d7 = Math.abs(d7), Number.isNaN(d7) || d7 === Number.POSITIVE_INFINITY ? (S6 = Number.isNaN(d7) ? 1 : 0, E4 = I2) : (E4 = Math.floor(Math.log2(d7)), d7 * (_3 = Math.pow(2, -E4)) < 1 && (E4--, _3 *= 2), (d7 += E4 + M2 >= 1 ? L3 / _3 : L3 * Math.pow(2, 1 - M2)) * _3 >= 2 && (E4++, _3 /= 2), E4 + M2 >= I2 ? (S6 = 0, E4 = I2) : E4 + M2 >= 1 ? (S6 = (d7 * _3 - 1) * Math.pow(2, b5), E4 += M2) : (S6 = d7 * Math.pow(2, M2 - 1) * Math.pow(2, b5), E4 = 0)); b5 >= 8; )
    o4[f5 + U3] = 255 & S6, U3 += N4, S6 /= 256, b5 -= 8;
  for (E4 = E4 << b5 | S6, A3 += b5; A3 > 0; )
    o4[f5 + U3] = 255 & E4, U3 += N4, E4 /= 256, A3 -= 8;
  o4[f5 + U3 - N4] |= 128 * q3;
}
function createBuffer(o4) {
  if (o4 > E3)
    throw new RangeError('The value "' + o4 + '" is invalid for option "size"');
  const d7 = new Uint8Array(o4);
  return Object.setPrototypeOf(d7, Buffer$1.prototype), d7;
}
function Buffer$1(o4, d7, f5) {
  if ("number" == typeof o4) {
    if ("string" == typeof d7)
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return allocUnsafe(o4);
  }
  return from(o4, d7, f5);
}
function from(o4, d7, f5) {
  if ("string" == typeof o4)
    return function(o5, d8) {
      "string" == typeof d8 && "" !== d8 || (d8 = "utf8");
      if (!Buffer$1.isEncoding(d8))
        throw new TypeError("Unknown encoding: " + d8);
      const f6 = 0 | byteLength(o5, d8);
      let v7 = createBuffer(f6);
      const b6 = v7.write(o5, d8);
      b6 !== f6 && (v7 = v7.slice(0, b6));
      return v7;
    }(o4, d7);
  if (ArrayBuffer.isView(o4))
    return function(o5) {
      if (isInstance(o5, Uint8Array)) {
        const d8 = new Uint8Array(o5);
        return fromArrayBuffer(d8.buffer, d8.byteOffset, d8.byteLength);
      }
      return fromArrayLike(o5);
    }(o4);
  if (null == o4)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o4);
  if (isInstance(o4, ArrayBuffer) || o4 && isInstance(o4.buffer, ArrayBuffer))
    return fromArrayBuffer(o4, d7, f5);
  if ("undefined" != typeof SharedArrayBuffer && (isInstance(o4, SharedArrayBuffer) || o4 && isInstance(o4.buffer, SharedArrayBuffer)))
    return fromArrayBuffer(o4, d7, f5);
  if ("number" == typeof o4)
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  const v6 = o4.valueOf && o4.valueOf();
  if (null != v6 && v6 !== o4)
    return Buffer$1.from(v6, d7, f5);
  const b5 = function(o5) {
    if (Buffer$1.isBuffer(o5)) {
      const d8 = 0 | checked(o5.length), f6 = createBuffer(d8);
      return 0 === f6.length || o5.copy(f6, 0, 0, d8), f6;
    }
    if (void 0 !== o5.length)
      return "number" != typeof o5.length || numberIsNaN(o5.length) ? createBuffer(0) : fromArrayLike(o5);
    if ("Buffer" === o5.type && Array.isArray(o5.data))
      return fromArrayLike(o5.data);
  }(o4);
  if (b5)
    return b5;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof o4[Symbol.toPrimitive])
    return Buffer$1.from(o4[Symbol.toPrimitive]("string"), d7, f5);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o4);
}
function assertSize(o4) {
  if ("number" != typeof o4)
    throw new TypeError('"size" argument must be of type number');
  if (o4 < 0)
    throw new RangeError('The value "' + o4 + '" is invalid for option "size"');
}
function allocUnsafe(o4) {
  return assertSize(o4), createBuffer(o4 < 0 ? 0 : 0 | checked(o4));
}
function fromArrayLike(o4) {
  const d7 = o4.length < 0 ? 0 : 0 | checked(o4.length), f5 = createBuffer(d7);
  for (let v6 = 0; v6 < d7; v6 += 1)
    f5[v6] = 255 & o4[v6];
  return f5;
}
function fromArrayBuffer(o4, d7, f5) {
  if (d7 < 0 || o4.byteLength < d7)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (o4.byteLength < d7 + (f5 || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  let v6;
  return v6 = void 0 === d7 && void 0 === f5 ? new Uint8Array(o4) : void 0 === f5 ? new Uint8Array(o4, d7) : new Uint8Array(o4, d7, f5), Object.setPrototypeOf(v6, Buffer$1.prototype), v6;
}
function checked(o4) {
  if (o4 >= E3)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + E3.toString(16) + " bytes");
  return 0 | o4;
}
function byteLength(o4, d7) {
  if (Buffer$1.isBuffer(o4))
    return o4.length;
  if (ArrayBuffer.isView(o4) || isInstance(o4, ArrayBuffer))
    return o4.byteLength;
  if ("string" != typeof o4)
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof o4);
  const f5 = o4.length, v6 = arguments.length > 2 && true === arguments[2];
  if (!v6 && 0 === f5)
    return 0;
  let b5 = false;
  for (; ; )
    switch (d7) {
      case "ascii":
      case "latin1":
      case "binary":
        return f5;
      case "utf8":
      case "utf-8":
        return utf8ToBytes(o4).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * f5;
      case "hex":
        return f5 >>> 1;
      case "base64":
        return base64ToBytes(o4).length;
      default:
        if (b5)
          return v6 ? -1 : utf8ToBytes(o4).length;
        d7 = ("" + d7).toLowerCase(), b5 = true;
    }
}
function slowToString(o4, d7, f5) {
  let v6 = false;
  if ((void 0 === d7 || d7 < 0) && (d7 = 0), d7 > this.length)
    return "";
  if ((void 0 === f5 || f5 > this.length) && (f5 = this.length), f5 <= 0)
    return "";
  if ((f5 >>>= 0) <= (d7 >>>= 0))
    return "";
  for (o4 || (o4 = "utf8"); ; )
    switch (o4) {
      case "hex":
        return hexSlice(this, d7, f5);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, d7, f5);
      case "ascii":
        return asciiSlice(this, d7, f5);
      case "latin1":
      case "binary":
        return latin1Slice(this, d7, f5);
      case "base64":
        return base64Slice(this, d7, f5);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, d7, f5);
      default:
        if (v6)
          throw new TypeError("Unknown encoding: " + o4);
        o4 = (o4 + "").toLowerCase(), v6 = true;
    }
}
function swap(o4, d7, f5) {
  const v6 = o4[d7];
  o4[d7] = o4[f5], o4[f5] = v6;
}
function bidirectionalIndexOf(o4, d7, f5, v6, b5) {
  if (0 === o4.length)
    return -1;
  if ("string" == typeof f5 ? (v6 = f5, f5 = 0) : f5 > 2147483647 ? f5 = 2147483647 : f5 < -2147483648 && (f5 = -2147483648), numberIsNaN(f5 = +f5) && (f5 = b5 ? 0 : o4.length - 1), f5 < 0 && (f5 = o4.length + f5), f5 >= o4.length) {
    if (b5)
      return -1;
    f5 = o4.length - 1;
  } else if (f5 < 0) {
    if (!b5)
      return -1;
    f5 = 0;
  }
  if ("string" == typeof d7 && (d7 = Buffer$1.from(d7, v6)), Buffer$1.isBuffer(d7))
    return 0 === d7.length ? -1 : arrayIndexOf(o4, d7, f5, v6, b5);
  if ("number" == typeof d7)
    return d7 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? b5 ? Uint8Array.prototype.indexOf.call(o4, d7, f5) : Uint8Array.prototype.lastIndexOf.call(o4, d7, f5) : arrayIndexOf(o4, [d7], f5, v6, b5);
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(o4, d7, f5, v6, b5) {
  let w6, E4 = 1, S6 = o4.length, _3 = d7.length;
  if (void 0 !== v6 && ("ucs2" === (v6 = String(v6).toLowerCase()) || "ucs-2" === v6 || "utf16le" === v6 || "utf-16le" === v6)) {
    if (o4.length < 2 || d7.length < 2)
      return -1;
    E4 = 2, S6 /= 2, _3 /= 2, f5 /= 2;
  }
  function read2(o5, d8) {
    return 1 === E4 ? o5[d8] : o5.readUInt16BE(d8 * E4);
  }
  if (b5) {
    let v7 = -1;
    for (w6 = f5; w6 < S6; w6++)
      if (read2(o4, w6) === read2(d7, -1 === v7 ? 0 : w6 - v7)) {
        if (-1 === v7 && (v7 = w6), w6 - v7 + 1 === _3)
          return v7 * E4;
      } else
        -1 !== v7 && (w6 -= w6 - v7), v7 = -1;
  } else
    for (f5 + _3 > S6 && (f5 = S6 - _3), w6 = f5; w6 >= 0; w6--) {
      let f6 = true;
      for (let v7 = 0; v7 < _3; v7++)
        if (read2(o4, w6 + v7) !== read2(d7, v7)) {
          f6 = false;
          break;
        }
      if (f6)
        return w6;
    }
  return -1;
}
function hexWrite(o4, d7, f5, v6) {
  f5 = Number(f5) || 0;
  const b5 = o4.length - f5;
  v6 ? (v6 = Number(v6)) > b5 && (v6 = b5) : v6 = b5;
  const w6 = d7.length;
  let E4;
  for (v6 > w6 / 2 && (v6 = w6 / 2), E4 = 0; E4 < v6; ++E4) {
    const v7 = Number.parseInt(d7.slice(2 * E4, 2 * E4 + 2), 16);
    if (numberIsNaN(v7))
      return E4;
    o4[f5 + E4] = v7;
  }
  return E4;
}
function utf8Write(o4, d7, f5, v6) {
  return blitBuffer(utf8ToBytes(d7, o4.length - f5), o4, f5, v6);
}
function asciiWrite(o4, d7, f5, v6) {
  return blitBuffer(function(o5) {
    const d8 = [];
    for (let f6 = 0; f6 < o5.length; ++f6)
      d8.push(255 & o5.charCodeAt(f6));
    return d8;
  }(d7), o4, f5, v6);
}
function base64Write(o4, d7, f5, v6) {
  return blitBuffer(base64ToBytes(d7), o4, f5, v6);
}
function ucs2Write(o4, d7, f5, v6) {
  return blitBuffer(function(o5, d8) {
    let f6, v7, b5;
    const w6 = [];
    for (let E4 = 0; E4 < o5.length && !((d8 -= 2) < 0); ++E4)
      f6 = o5.charCodeAt(E4), v7 = f6 >> 8, b5 = f6 % 256, w6.push(b5, v7);
    return w6;
  }(d7, o4.length - f5), o4, f5, v6);
}
function base64Slice(o4, d7, f5) {
  return 0 === d7 && f5 === o4.length ? fromByteArray(o4) : fromByteArray(o4.slice(d7, f5));
}
function utf8Slice(o4, d7, f5) {
  f5 = Math.min(o4.length, f5);
  const v6 = [];
  let b5 = d7;
  for (; b5 < f5; ) {
    const d8 = o4[b5];
    let w6 = null, E4 = d8 > 239 ? 4 : d8 > 223 ? 3 : d8 > 191 ? 2 : 1;
    if (b5 + E4 <= f5) {
      let f6, v7, S6, _3;
      switch (E4) {
        case 1:
          d8 < 128 && (w6 = d8);
          break;
        case 2:
          f6 = o4[b5 + 1], 128 == (192 & f6) && (_3 = (31 & d8) << 6 | 63 & f6, _3 > 127 && (w6 = _3));
          break;
        case 3:
          f6 = o4[b5 + 1], v7 = o4[b5 + 2], 128 == (192 & f6) && 128 == (192 & v7) && (_3 = (15 & d8) << 12 | (63 & f6) << 6 | 63 & v7, _3 > 2047 && (_3 < 55296 || _3 > 57343) && (w6 = _3));
          break;
        case 4:
          f6 = o4[b5 + 1], v7 = o4[b5 + 2], S6 = o4[b5 + 3], 128 == (192 & f6) && 128 == (192 & v7) && 128 == (192 & S6) && (_3 = (15 & d8) << 18 | (63 & f6) << 12 | (63 & v7) << 6 | 63 & S6, _3 > 65535 && _3 < 1114112 && (w6 = _3));
      }
    }
    null === w6 ? (w6 = 65533, E4 = 1) : w6 > 65535 && (w6 -= 65536, v6.push(w6 >>> 10 & 1023 | 55296), w6 = 56320 | 1023 & w6), v6.push(w6), b5 += E4;
  }
  return function(o5) {
    const d8 = o5.length;
    if (d8 <= S5)
      return String.fromCharCode.apply(String, o5);
    let f6 = "", v7 = 0;
    for (; v7 < d8; )
      f6 += String.fromCharCode.apply(String, o5.slice(v7, v7 += S5));
    return f6;
  }(v6);
}
function asciiSlice(o4, d7, f5) {
  let v6 = "";
  f5 = Math.min(o4.length, f5);
  for (let b5 = d7; b5 < f5; ++b5)
    v6 += String.fromCharCode(127 & o4[b5]);
  return v6;
}
function latin1Slice(o4, d7, f5) {
  let v6 = "";
  f5 = Math.min(o4.length, f5);
  for (let b5 = d7; b5 < f5; ++b5)
    v6 += String.fromCharCode(o4[b5]);
  return v6;
}
function hexSlice(o4, d7, f5) {
  const v6 = o4.length;
  (!d7 || d7 < 0) && (d7 = 0), (!f5 || f5 < 0 || f5 > v6) && (f5 = v6);
  let b5 = "";
  for (let v7 = d7; v7 < f5; ++v7)
    b5 += I[o4[v7]];
  return b5;
}
function utf16leSlice(o4, d7, f5) {
  const v6 = o4.slice(d7, f5);
  let b5 = "";
  for (let o5 = 0; o5 < v6.length - 1; o5 += 2)
    b5 += String.fromCharCode(v6[o5] + 256 * v6[o5 + 1]);
  return b5;
}
function checkOffset(o4, d7, f5) {
  if (o4 % 1 != 0 || o4 < 0)
    throw new RangeError("offset is not uint");
  if (o4 + d7 > f5)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(o4, d7, f5, v6, b5, w6) {
  if (!Buffer$1.isBuffer(o4))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (d7 > b5 || d7 < w6)
    throw new RangeError('"value" argument is out of bounds');
  if (f5 + v6 > o4.length)
    throw new RangeError("Index out of range");
}
function wrtBigUInt64LE(o4, d7, f5, v6, b5) {
  checkIntBI(d7, v6, b5, o4, f5, 7);
  let w6 = Number(d7 & BigInt(4294967295));
  o4[f5++] = w6, w6 >>= 8, o4[f5++] = w6, w6 >>= 8, o4[f5++] = w6, w6 >>= 8, o4[f5++] = w6;
  let E4 = Number(d7 >> BigInt(32) & BigInt(4294967295));
  return o4[f5++] = E4, E4 >>= 8, o4[f5++] = E4, E4 >>= 8, o4[f5++] = E4, E4 >>= 8, o4[f5++] = E4, f5;
}
function wrtBigUInt64BE(o4, d7, f5, v6, b5) {
  checkIntBI(d7, v6, b5, o4, f5, 7);
  let w6 = Number(d7 & BigInt(4294967295));
  o4[f5 + 7] = w6, w6 >>= 8, o4[f5 + 6] = w6, w6 >>= 8, o4[f5 + 5] = w6, w6 >>= 8, o4[f5 + 4] = w6;
  let E4 = Number(d7 >> BigInt(32) & BigInt(4294967295));
  return o4[f5 + 3] = E4, E4 >>= 8, o4[f5 + 2] = E4, E4 >>= 8, o4[f5 + 1] = E4, E4 >>= 8, o4[f5] = E4, f5 + 8;
}
function checkIEEE754(o4, d7, f5, v6, b5, w6) {
  if (f5 + v6 > o4.length)
    throw new RangeError("Index out of range");
  if (f5 < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(o4, d7, f5, v6, b5) {
  return d7 = +d7, f5 >>>= 0, b5 || checkIEEE754(o4, 0, f5, 4), write(o4, d7, f5, v6, 23, 4), f5 + 4;
}
function writeDouble(o4, d7, f5, v6, b5) {
  return d7 = +d7, f5 >>>= 0, b5 || checkIEEE754(o4, 0, f5, 8), write(o4, d7, f5, v6, 52, 8), f5 + 8;
}
function E$5(o4, d7, f5) {
  _2[o4] = class extends f5 {
    constructor() {
      super(), Object.defineProperty(this, "message", { value: Reflect.apply(d7, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${o4}]`, this.stack, delete this.name;
    }
    get code() {
      return o4;
    }
    set code(o5) {
      Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: o5, writable: true });
    }
    toString() {
      return `${this.name} [${o4}]: ${this.message}`;
    }
  };
}
function addNumericalSeparator(o4) {
  let d7 = "", f5 = o4.length;
  const v6 = "-" === o4[0] ? 1 : 0;
  for (; f5 >= v6 + 4; f5 -= 3)
    d7 = `_${o4.slice(f5 - 3, f5)}${d7}`;
  return `${o4.slice(0, f5)}${d7}`;
}
function checkIntBI(o4, d7, f5, v6, b5, w6) {
  if (o4 > f5 || o4 < d7) {
    const f6 = "bigint" == typeof d7 ? "n" : "";
    let v7;
    throw v7 = 0 === d7 || d7 === BigInt(0) ? `>= 0${f6} and < 2${f6} ** ${8 * (w6 + 1)}${f6}` : `>= -(2${f6} ** ${8 * (w6 + 1) - 1}${f6}) and < 2 ** ${8 * (w6 + 1) - 1}${f6}`, new _2.ERR_OUT_OF_RANGE("value", v7, o4);
  }
  !function(o5, d8, f6) {
    validateNumber(d8, "offset"), void 0 !== o5[d8] && void 0 !== o5[d8 + f6] || boundsError(d8, o5.length - (f6 + 1));
  }(v6, b5, w6);
}
function validateNumber(o4, d7) {
  if ("number" != typeof o4)
    throw new _2.ERR_INVALID_ARG_TYPE(d7, "number", o4);
}
function boundsError(o4, d7, f5) {
  if (Math.floor(o4) !== o4)
    throw validateNumber(o4, f5), new _2.ERR_OUT_OF_RANGE("offset", "an integer", o4);
  if (d7 < 0)
    throw new _2.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new _2.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${d7}`, o4);
}
function utf8ToBytes(o4, d7) {
  let f5;
  d7 = d7 || Number.POSITIVE_INFINITY;
  const v6 = o4.length;
  let b5 = null;
  const w6 = [];
  for (let E4 = 0; E4 < v6; ++E4) {
    if (f5 = o4.charCodeAt(E4), f5 > 55295 && f5 < 57344) {
      if (!b5) {
        if (f5 > 56319) {
          (d7 -= 3) > -1 && w6.push(239, 191, 189);
          continue;
        }
        if (E4 + 1 === v6) {
          (d7 -= 3) > -1 && w6.push(239, 191, 189);
          continue;
        }
        b5 = f5;
        continue;
      }
      if (f5 < 56320) {
        (d7 -= 3) > -1 && w6.push(239, 191, 189), b5 = f5;
        continue;
      }
      f5 = 65536 + (b5 - 55296 << 10 | f5 - 56320);
    } else
      b5 && (d7 -= 3) > -1 && w6.push(239, 191, 189);
    if (b5 = null, f5 < 128) {
      if ((d7 -= 1) < 0)
        break;
      w6.push(f5);
    } else if (f5 < 2048) {
      if ((d7 -= 2) < 0)
        break;
      w6.push(f5 >> 6 | 192, 63 & f5 | 128);
    } else if (f5 < 65536) {
      if ((d7 -= 3) < 0)
        break;
      w6.push(f5 >> 12 | 224, f5 >> 6 & 63 | 128, 63 & f5 | 128);
    } else {
      if (!(f5 < 1114112))
        throw new Error("Invalid code point");
      if ((d7 -= 4) < 0)
        break;
      w6.push(f5 >> 18 | 240, f5 >> 12 & 63 | 128, f5 >> 6 & 63 | 128, 63 & f5 | 128);
    }
  }
  return w6;
}
function base64ToBytes(o4) {
  return toByteArray(function(o5) {
    if ((o5 = (o5 = o5.split("=")[0]).trim().replace(A2, "")).length < 2)
      return "";
    for (; o5.length % 4 != 0; )
      o5 += "=";
    return o5;
  }(o4));
}
function blitBuffer(o4, d7, f5, v6) {
  let b5;
  for (b5 = 0; b5 < v6 && !(b5 + f5 >= d7.length || b5 >= o4.length); ++b5)
    d7[b5 + f5] = o4[b5];
  return b5;
}
function isInstance(o4, d7) {
  return o4 instanceof d7 || null != o4 && null != o4.constructor && null != o4.constructor.name && o4.constructor.name === d7.name;
}
function numberIsNaN(o4) {
  return o4 != o4;
}
function defineBigIntMethod(o4) {
  return "undefined" == typeof BigInt ? BufferBigIntNotDefined : o4;
}
function BufferBigIntNotDefined() {
  throw new Error("BigInt not supported");
}
function notImplemented(o4) {
  return Object.assign(() => {
    throw function(o5) {
      return new Error(`[unenv] ${o5} is not implemented yet!`);
    }(o4);
  }, { __unenv__: true });
}
function noop$1() {
  return _t;
}
function encodeQueryValue(o4) {
  return (d7 = "string" == typeof o4 ? o4 : JSON.stringify(o4), encodeURI("" + d7).replace(Bt, "|")).replace(Tt, "%2B").replace(Mt, "+").replace($t, "%23").replace(kt, "%26").replace(Ot, "`").replace(Ct, "^").replace(zt, "%2F");
  var d7;
}
function encodeQueryKey(o4) {
  return encodeQueryValue(o4).replace(jt, "%3D");
}
function decode$12(o4 = "") {
  try {
    return decodeURIComponent("" + o4);
  } catch {
    return "" + o4;
  }
}
function decodeQueryValue(o4) {
  return decode$12(o4.replace(Tt, " "));
}
function parseQuery(o4 = "") {
  const d7 = {};
  "?" === o4[0] && (o4 = o4.slice(1));
  for (const f5 of o4.split("&")) {
    const o5 = f5.match(/([^=]+)=?(.*)/) || [];
    if (o5.length < 2)
      continue;
    const v6 = decode$12(o5[1].replace(Tt, " "));
    if ("__proto__" === v6 || "constructor" === v6)
      continue;
    const b5 = decodeQueryValue(o5[2] || "");
    void 0 === d7[v6] ? d7[v6] = b5 : Array.isArray(d7[v6]) ? d7[v6].push(b5) : d7[v6] = [d7[v6], b5];
  }
  return d7;
}
function stringifyQuery(o4) {
  return Object.keys(o4).filter((d7) => void 0 !== o4[d7]).map((d7) => {
    return f5 = d7, "number" != typeof (v6 = o4[d7]) && "boolean" != typeof v6 || (v6 = String(v6)), v6 ? Array.isArray(v6) ? v6.map((o5) => `${encodeQueryKey(f5)}=${encodeQueryValue(o5)}`).join("&") : `${encodeQueryKey(f5)}=${encodeQueryValue(v6)}` : encodeQueryKey(f5);
    var f5, v6;
  }).filter(Boolean).join("&");
}
function hasProtocol(o4, d7 = {}) {
  return "boolean" == typeof d7 && (d7 = { acceptRelative: d7 }), d7.strict ? Nt.test(o4) : Ft.test(o4) || !!d7.acceptRelative && Dt.test(o4);
}
function withoutTrailingSlash(o4 = "", d7) {
  return (function(o5 = "", d8) {
    return o5.endsWith("/");
  }(o4) ? o4.slice(0, -1) : o4) || "/";
}
function withTrailingSlash(o4 = "", d7) {
  return o4.endsWith("/") ? o4 : o4 + "/";
}
function withoutBase(o4, d7) {
  if (isEmptyURL(d7))
    return o4;
  const f5 = withoutTrailingSlash(d7);
  if (!o4.startsWith(f5))
    return o4;
  const v6 = o4.slice(f5.length);
  return "/" === v6[0] ? v6 : "/" + v6;
}
function withQuery(o4, d7) {
  const f5 = parseURL(o4), v6 = { ...parseQuery(f5.search), ...d7 };
  return f5.search = stringifyQuery(v6), function(o5) {
    const d8 = o5.pathname || "", f6 = o5.search ? (o5.search.startsWith("?") ? "" : "?") + o5.search : "", v7 = o5.hash || "", b5 = o5.auth ? o5.auth + "@" : "", w6 = o5.host || "", E4 = o5.protocol || o5[qt] ? (o5.protocol || "") + "//" : "";
    return E4 + b5 + w6 + d8 + f6 + v7;
  }(f5);
}
function getQuery(o4) {
  return parseQuery(parseURL(o4).search);
}
function isEmptyURL(o4) {
  return !o4 || "/" === o4;
}
function joinURL(o4, ...d7) {
  let f5 = o4 || "";
  for (const o5 of d7.filter((o6) => function(o7) {
    return o7 && "/" !== o7;
  }(o6)))
    if (f5) {
      const d8 = o5.replace(Ht, "");
      f5 = withTrailingSlash(f5) + d8;
    } else
      f5 = o5;
  return f5;
}
function parseURL(o4 = "", d7) {
  const f5 = o4.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (f5) {
    const [, o5, d8 = ""] = f5;
    return { protocol: o5.toLowerCase(), pathname: d8, href: o5 + d8, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(o4, { acceptRelative: true }))
    return d7 ? parseURL(d7 + o4) : parsePath(o4);
  const [, v6 = "", b5, w6 = ""] = o4.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, E4 = "", S6 = ""] = w6.match(/([^#/?]*)(.*)?/) || [], { pathname: _3, search: A3, hash: I2 } = parsePath(S6.replace(/\/(?=[A-Za-z]:)/, ""));
  return { protocol: v6.toLowerCase(), auth: b5 ? b5.slice(0, Math.max(0, b5.length - 1)) : "", host: E4, pathname: _3, search: A3, hash: I2, [qt]: !v6 };
}
function parsePath(o4 = "") {
  const [d7 = "", f5 = "", v6 = ""] = (o4.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: d7, search: f5, hash: v6 };
}
function parse(o4, d7) {
  if ("string" != typeof o4)
    throw new TypeError("argument str must be a string");
  const f5 = {}, v6 = {}.decode || decode2;
  let b5 = 0;
  for (; b5 < o4.length; ) {
    const d8 = o4.indexOf("=", b5);
    if (-1 === d8)
      break;
    let w6 = o4.indexOf(";", b5);
    if (-1 === w6)
      w6 = o4.length;
    else if (w6 < d8) {
      b5 = o4.lastIndexOf(";", d8 - 1) + 1;
      continue;
    }
    const E4 = o4.slice(b5, d8).trim();
    if (void 0 === f5[E4]) {
      let b6 = o4.slice(d8 + 1, w6).trim();
      34 === b6.codePointAt(0) && (b6 = b6.slice(1, -1)), f5[E4] = tryDecode2(b6, v6);
    }
    b5 = w6 + 1;
  }
  return f5;
}
function serialize(o4, d7, f5) {
  const v6 = f5 || {}, b5 = v6.encode || encode2;
  if ("function" != typeof b5)
    throw new TypeError("option encode is invalid");
  if (!Wt.test(o4))
    throw new TypeError("argument name is invalid");
  const w6 = b5(d7);
  if (w6 && !Wt.test(w6))
    throw new TypeError("argument val is invalid");
  let E4 = o4 + "=" + w6;
  if (void 0 !== v6.maxAge && null !== v6.maxAge) {
    const o5 = v6.maxAge - 0;
    if (Number.isNaN(o5) || !Number.isFinite(o5))
      throw new TypeError("option maxAge is invalid");
    E4 += "; Max-Age=" + Math.floor(o5);
  }
  if (v6.domain) {
    if (!Wt.test(v6.domain))
      throw new TypeError("option domain is invalid");
    E4 += "; Domain=" + v6.domain;
  }
  if (v6.path) {
    if (!Wt.test(v6.path))
      throw new TypeError("option path is invalid");
    E4 += "; Path=" + v6.path;
  }
  if (v6.expires) {
    if (S6 = v6.expires, !("[object Date]" === Object.prototype.toString.call(S6) || S6 instanceof Date) || Number.isNaN(v6.expires.valueOf()))
      throw new TypeError("option expires is invalid");
    E4 += "; Expires=" + v6.expires.toUTCString();
  }
  var S6;
  if (v6.httpOnly && (E4 += "; HttpOnly"), v6.secure && (E4 += "; Secure"), v6.priority) {
    switch ("string" == typeof v6.priority ? v6.priority.toLowerCase() : v6.priority) {
      case "low":
        E4 += "; Priority=Low";
        break;
      case "medium":
        E4 += "; Priority=Medium";
        break;
      case "high":
        E4 += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (v6.sameSite) {
    switch ("string" == typeof v6.sameSite ? v6.sameSite.toLowerCase() : v6.sameSite) {
      case true:
        E4 += "; SameSite=Strict";
        break;
      case "lax":
        E4 += "; SameSite=Lax";
        break;
      case "strict":
        E4 += "; SameSite=Strict";
        break;
      case "none":
        E4 += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return v6.partitioned && (E4 += "; Partitioned"), E4;
}
function tryDecode2(o4, d7) {
  try {
    return d7(o4);
  } catch {
    return o4;
  }
}
function decode2(o4) {
  return o4.includes("%") ? decodeURIComponent(o4) : o4;
}
function encode2(o4) {
  return encodeURIComponent(o4);
}
function objectHash(o4, d7) {
  const f5 = createHasher(d7 = d7 ? { ...Kt, ...d7 } : Kt);
  return f5.dispatch(o4), f5.toString();
}
function createHasher(o4) {
  let d7 = "", f5 = /* @__PURE__ */ new Map();
  const write2 = (o5) => {
    d7 += o5;
  };
  return { toString: () => d7, getContext: () => f5, dispatch(d8) {
    o4.replacer && (d8 = o4.replacer(d8));
    return this[null === d8 ? "null" : typeof d8](d8);
  }, object(d8) {
    if (d8 && "function" == typeof d8.toJSON)
      return this.object(d8.toJSON());
    const v6 = Object.prototype.toString.call(d8);
    let b5 = "";
    const w6 = v6.length;
    b5 = w6 < 10 ? "unknown:[" + v6 + "]" : v6.slice(8, w6 - 1), b5 = b5.toLowerCase();
    let E4 = null;
    if (void 0 !== (E4 = f5.get(d8)))
      return this.dispatch("[CIRCULAR:" + E4 + "]");
    if (f5.set(d8, f5.size), void 0 !== M && M.isBuffer && M.isBuffer(d8))
      return write2("buffer:"), write2(d8.toString("utf8"));
    if ("object" !== b5 && "function" !== b5 && "asyncfunction" !== b5)
      this[b5] ? this[b5](d8) : o4.ignoreUnknown || this.unkown(d8, b5);
    else {
      let f6 = Object.keys(d8);
      o4.unorderedObjects && (f6 = f6.sort());
      let v7 = [];
      false === o4.respectType || isNativeFunction(d8) || (v7 = Yt), o4.excludeKeys && (f6 = f6.filter((d9) => !o4.excludeKeys(d9)), v7 = v7.filter((d9) => !o4.excludeKeys(d9))), write2("object:" + (f6.length + v7.length) + ":");
      const dispatchForKey = (f7) => {
        this.dispatch(f7), write2(":"), o4.excludeValues || this.dispatch(d8[f7]), write2(",");
      };
      for (const o5 of f6)
        dispatchForKey(o5);
      for (const o5 of v7)
        dispatchForKey(o5);
    }
  }, array(d8, v6) {
    if (v6 = void 0 === v6 ? false !== o4.unorderedArrays : v6, write2("array:" + d8.length + ":"), !v6 || d8.length <= 1) {
      for (const o5 of d8)
        this.dispatch(o5);
      return;
    }
    const b5 = /* @__PURE__ */ new Map(), w6 = d8.map((d9) => {
      const f6 = createHasher(o4);
      f6.dispatch(d9);
      for (const [o5, d10] of f6.getContext())
        b5.set(o5, d10);
      return f6.toString();
    });
    return f5 = b5, w6.sort(), this.array(w6, false);
  }, date: (o5) => write2("date:" + o5.toJSON()), symbol: (o5) => write2("symbol:" + o5.toString()), unkown(o5, d8) {
    if (write2(d8), o5)
      return write2(":"), o5 && "function" == typeof o5.entries ? this.array(Array.from(o5.entries()), true) : void 0;
  }, error: (o5) => write2("error:" + o5.toString()), boolean: (o5) => write2("bool:" + o5), string(o5) {
    write2("string:" + o5.length + ":"), write2(o5);
  }, function(d8) {
    write2("fn:"), isNativeFunction(d8) ? this.dispatch("[native]") : this.dispatch(d8.toString()), false !== o4.respectFunctionNames && this.dispatch("function-name:" + String(d8.name)), o4.respectFunctionProperties && this.object(d8);
  }, number: (o5) => write2("number:" + o5), xml: (o5) => write2("xml:" + o5.toString()), null: () => write2("Null"), undefined: () => write2("Undefined"), regexp: (o5) => write2("regex:" + o5.toString()), uint8array(o5) {
    return write2("uint8array:"), this.dispatch(Array.prototype.slice.call(o5));
  }, uint8clampedarray(o5) {
    return write2("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(o5));
  }, int8array(o5) {
    return write2("int8array:"), this.dispatch(Array.prototype.slice.call(o5));
  }, uint16array(o5) {
    return write2("uint16array:"), this.dispatch(Array.prototype.slice.call(o5));
  }, int16array(o5) {
    return write2("int16array:"), this.dispatch(Array.prototype.slice.call(o5));
  }, uint32array(o5) {
    return write2("uint32array:"), this.dispatch(Array.prototype.slice.call(o5));
  }, int32array(o5) {
    return write2("int32array:"), this.dispatch(Array.prototype.slice.call(o5));
  }, float32array(o5) {
    return write2("float32array:"), this.dispatch(Array.prototype.slice.call(o5));
  }, float64array(o5) {
    return write2("float64array:"), this.dispatch(Array.prototype.slice.call(o5));
  }, arraybuffer(o5) {
    return write2("arraybuffer:"), this.dispatch(new Uint8Array(o5));
  }, url: (o5) => write2("url:" + o5.toString()), map(d8) {
    write2("map:");
    const f6 = [...d8];
    return this.array(f6, false !== o4.unorderedSets);
  }, set(d8) {
    write2("set:");
    const f6 = [...d8];
    return this.array(f6, false !== o4.unorderedSets);
  }, file(o5) {
    return write2("file:"), this.dispatch([o5.name, o5.size, o5.type, o5.lastModfied]);
  }, blob() {
    if (o4.ignoreUnknown)
      return write2("[blob]");
    throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
  }, domwindow: () => write2("domwindow"), bigint: (o5) => write2("bigint:" + o5.toString()), process: () => write2("process"), timer: () => write2("timer"), pipe: () => write2("pipe"), tcp: () => write2("tcp"), udp: () => write2("udp"), tty: () => write2("tty"), statwatcher: () => write2("statwatcher"), securecontext: () => write2("securecontext"), connection: () => write2("connection"), zlib: () => write2("zlib"), context: () => write2("context"), nodescript: () => write2("nodescript"), httpparser: () => write2("httpparser"), dataview: () => write2("dataview"), signal: () => write2("signal"), fsevent: () => write2("fsevent"), tlswrap: () => write2("tlswrap") };
}
function isNativeFunction(o4) {
  return "function" == typeof o4 && Function.prototype.toString.call(o4).slice(-Jt) === Qt;
}
function hash(o4, d7 = {}) {
  const f5 = "string" == typeof o4 ? o4 : objectHash(o4, d7);
  return (v6 = f5, new SHA256().finalize(v6).toString(tr)).slice(0, 10);
  var v6;
}
function createRouter$1(o4 = {}) {
  const d7 = { options: o4, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = (d8) => o4.strictTrailingSlash ? d8 : d8.replace(/\/$/, "") || "/";
  if (o4.routes)
    for (const f5 in o4.routes)
      insert(d7, normalizeTrailingSlash(f5), o4.routes[f5]);
  return { ctx: d7, lookup: (o5) => function(o6, d8) {
    const f5 = o6.staticRoutesMap[d8];
    if (f5)
      return f5.data;
    const v6 = d8.split("/"), b5 = {};
    let w6 = false, E4 = null, S6 = o6.rootNode, _3 = null;
    for (let o7 = 0; o7 < v6.length; o7++) {
      const d9 = v6[o7];
      null !== S6.wildcardChildNode && (E4 = S6.wildcardChildNode, _3 = v6.slice(o7).join("/"));
      const f6 = S6.children.get(d9);
      if (void 0 === f6) {
        if (S6 && S6.placeholderChildren.length > 1) {
          const d10 = v6.length - o7;
          S6 = S6.placeholderChildren.find((o8) => o8.maxDepth === d10) || null;
        } else
          S6 = S6.placeholderChildren[0] || null;
        if (!S6)
          break;
        S6.paramName && (b5[S6.paramName] = d9), w6 = true;
      } else
        S6 = f6;
    }
    null !== S6 && null !== S6.data || null === E4 || (S6 = E4, b5[S6.paramName || "_"] = _3, w6 = true);
    if (!S6)
      return null;
    if (w6)
      return { ...S6.data, params: w6 ? b5 : void 0 };
    return S6.data;
  }(d7, normalizeTrailingSlash(o5)), insert: (o5, f5) => insert(d7, normalizeTrailingSlash(o5), f5), remove: (o5) => function(o6, d8) {
    let f5 = false;
    const v6 = d8.split("/");
    let b5 = o6.rootNode;
    for (const o7 of v6)
      if (b5 = b5.children.get(o7), !b5)
        return f5;
    if (b5.data) {
      const o7 = v6.at(-1) || "";
      b5.data = null, 0 === Object.keys(b5.children).length && b5.parent && (b5.parent.children.delete(o7), b5.parent.wildcardChildNode = null, b5.parent.placeholderChildren = []), f5 = true;
    }
    return f5;
  }(d7, normalizeTrailingSlash(o5)) };
}
function insert(o4, d7, f5) {
  let v6 = true;
  const b5 = d7.split("/");
  let w6 = o4.rootNode, E4 = 0;
  const S6 = [w6];
  for (const o5 of b5) {
    let d8;
    if (d8 = w6.children.get(o5))
      w6 = d8;
    else {
      const f6 = getNodeType(o5);
      d8 = createRadixNode({ type: f6, parent: w6 }), w6.children.set(o5, d8), f6 === ur.PLACEHOLDER ? (d8.paramName = "*" === o5 ? "_" + E4++ : o5.slice(1), w6.placeholderChildren.push(d8), v6 = false) : f6 === ur.WILDCARD && (w6.wildcardChildNode = d8, d8.paramName = o5.slice(3) || "_", v6 = false), S6.push(d8), w6 = d8;
    }
  }
  for (const [o5, d8] of S6.entries())
    d8.maxDepth = Math.max(S6.length - o5, d8.maxDepth || 0);
  return w6.data = f5, true === v6 && (o4.staticRoutesMap[d7] = w6), w6;
}
function createRadixNode(o4 = {}) {
  return { type: o4.type || ur.NORMAL, maxDepth: 0, parent: o4.parent || null, children: /* @__PURE__ */ new Map(), data: o4.data || null, paramName: o4.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(o4) {
  return o4.startsWith("**") ? ur.WILDCARD : ":" === o4[0] || "*" === o4 ? ur.PLACEHOLDER : ur.NORMAL;
}
function toRouteMatcher(o4) {
  return function(o5, d7) {
    return { ctx: { table: o5 }, matchAll: (f5) => _matchRoutes(f5, o5, d7) };
  }(_routerNodeToTable("", o4.ctx.rootNode), o4.ctx.options.strictTrailingSlash);
}
function _matchRoutes(o4, d7, f5) {
  true !== f5 && o4.endsWith("/") && (o4 = o4.slice(0, -1) || "/");
  const v6 = [];
  for (const [f6, b6] of _sortRoutesMap(d7.wildcard))
    (o4 === f6 || o4.startsWith(f6 + "/")) && v6.push(b6);
  for (const [f6, b6] of _sortRoutesMap(d7.dynamic))
    if (o4.startsWith(f6 + "/")) {
      const d8 = "/" + o4.slice(f6.length).split("/").splice(2).join("/");
      v6.push(..._matchRoutes(d8, b6));
    }
  const b5 = d7.static.get(o4);
  return b5 && v6.push(b5), v6.filter(Boolean);
}
function _sortRoutesMap(o4) {
  return [...o4.entries()].sort((o5, d7) => o5[0].length - d7[0].length);
}
function _routerNodeToTable(o4, d7) {
  const f5 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return function _addNode(o5, d8) {
    if (o5)
      if (d8.type !== ur.NORMAL || o5.includes("*") || o5.includes(":")) {
        if (d8.type === ur.WILDCARD)
          f5.wildcard.set(o5.replace("/**", ""), d8.data);
        else if (d8.type === ur.PLACEHOLDER) {
          const v6 = _routerNodeToTable("", d8);
          return d8.data && v6.static.set("/", d8.data), void f5.dynamic.set(o5.replace(/\/\*|\/:\w+/, ""), v6);
        }
      } else
        d8.data && f5.static.set(o5, d8.data);
    for (const [f6, v6] of d8.children.entries())
      _addNode(`${o5}/${f6}`.replace("//", "/"), v6);
  }(o4, d7), f5;
}
function jsonParseTransform(o4, d7) {
  if (!("__proto__" === o4 || "constructor" === o4 && d7 && "object" == typeof d7 && "prototype" in d7))
    return d7;
  !function(o5) {
    console.warn(`[destr] Dropping "${o5}" key to prevent prototype pollution.`);
  }(o4);
}
function destr(o4, d7 = {}) {
  if ("string" != typeof o4)
    return o4;
  const f5 = o4.trim();
  if ('"' === o4[0] && o4.endsWith('"') && !o4.includes("\\"))
    return f5.slice(1, -1);
  if (f5.length <= 9) {
    const o5 = f5.toLowerCase();
    if ("true" === o5)
      return true;
    if ("false" === o5)
      return false;
    if ("undefined" === o5)
      return;
    if ("null" === o5)
      return null;
    if ("nan" === o5)
      return Number.NaN;
    if ("infinity" === o5)
      return Number.POSITIVE_INFINITY;
    if ("-infinity" === o5)
      return Number.NEGATIVE_INFINITY;
  }
  if (!fr.test(o4)) {
    if (d7.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return o4;
  }
  try {
    if (dr.test(o4) || hr.test(o4)) {
      if (d7.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(o4, jsonParseTransform);
    }
    return JSON.parse(o4);
  } catch (f6) {
    if (d7.strict)
      throw f6;
    return o4;
  }
}
function isPlainObject$1(o4) {
  if (null === o4 || "object" != typeof o4)
    return false;
  const d7 = Object.getPrototypeOf(o4);
  return (null === d7 || d7 === Object.prototype || null === Object.getPrototypeOf(d7)) && (!(Symbol.iterator in o4) && (!(Symbol.toStringTag in o4) || "[object Module]" === Object.prototype.toString.call(o4)));
}
function _defu$1(o4, d7, f5 = ".", v6) {
  if (!isPlainObject$1(d7))
    return _defu$1(o4, {}, f5, v6);
  const b5 = Object.assign({}, d7);
  for (const d8 in o4) {
    if ("__proto__" === d8 || "constructor" === d8)
      continue;
    const w6 = o4[d8];
    null != w6 && (v6 && v6(b5, d8, w6, f5) || (Array.isArray(w6) && Array.isArray(b5[d8]) ? b5[d8] = [...w6, ...b5[d8]] : isPlainObject$1(w6) && isPlainObject$1(b5[d8]) ? b5[d8] = _defu$1(w6, b5[d8], (f5 ? `${f5}.` : "") + d8.toString(), v6) : b5[d8] = w6));
  }
  return b5;
}
function _addListener(o4, d7, f5, v6) {
  _checkListener(f5), void 0 !== o4._events.newListener && o4.emit("newListener", d7, f5.listener || f5), o4._events[d7] || (o4._events[d7] = []), v6 ? o4._events[d7].unshift(f5) : o4._events[d7].push(f5);
  const b5 = _getMaxListeners(o4);
  if (b5 > 0 && o4._events[d7].length > b5 && !o4._events[d7].warned) {
    o4._events[d7].warned = true;
    const f6 = new Error(`[unenv] Possible EventEmitter memory leak detected. ${o4._events[d7].length} ${d7} listeners added. Use emitter.setMaxListeners() to increase limit`);
    f6.name = "MaxListenersExceededWarning", f6.emitter = o4, f6.type = d7, f6.count = o4._events[d7]?.length, console.warn(f6);
  }
  return o4;
}
function _wrapOnce(o4, d7, f5) {
  let v6 = false;
  const wrapper = (...b5) => {
    if (!v6)
      return o4.removeListener(d7, wrapper), v6 = true, 0 === b5.length ? f5.call(o4) : f5.apply(o4, b5);
  };
  return wrapper.listener = f5, wrapper;
}
function _getMaxListeners(o4) {
  return o4._maxListeners ?? mr.defaultMaxListeners;
}
function _listeners(o4, d7, f5) {
  let v6 = o4._events[d7];
  return "function" == typeof v6 && (v6 = [v6]), f5 ? v6.map((o5) => o5.listener || o5) : v6;
}
function _checkListener(o4) {
  if ("function" != typeof o4)
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof o4);
}
function getDuplex() {
  return Object.assign(wr.prototype, vr.prototype), Object.assign(wr.prototype, br.prototype), wr;
}
function _distinct(o4) {
  const d7 = {};
  for (const [f5, v6] of Object.entries(o4))
    f5 && (d7[f5] = (Array.isArray(v6) ? v6 : [v6]).filter(Boolean));
  return d7;
}
function hasProp(o4, d7) {
  try {
    return d7 in o4;
  } catch {
    return false;
  }
}
function createError(o4) {
  if ("string" == typeof o4)
    return new H3Error(o4);
  if (isError(o4))
    return o4;
  const d7 = new H3Error(o4.message ?? o4.statusMessage ?? "", { cause: o4.cause || o4 });
  if (hasProp(o4, "stack"))
    try {
      Object.defineProperty(d7, "stack", { get: () => o4.stack });
    } catch {
      try {
        d7.stack = o4.stack;
      } catch {
      }
    }
  if (o4.data && (d7.data = o4.data), o4.statusCode ? d7.statusCode = sanitizeStatusCode(o4.statusCode, d7.statusCode) : o4.status && (d7.statusCode = sanitizeStatusCode(o4.status, d7.statusCode)), o4.statusMessage ? d7.statusMessage = o4.statusMessage : o4.statusText && (d7.statusMessage = o4.statusText), d7.statusMessage) {
    const o5 = d7.statusMessage;
    sanitizeStatusMessage(d7.statusMessage) !== o5 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== o4.fatal && (d7.fatal = o4.fatal), void 0 !== o4.unhandled && (d7.unhandled = o4.unhandled), d7;
}
function isError(o4) {
  return true === o4?.constructor?.__h3_error__;
}
function getRequestHeaders(o4) {
  const d7 = {};
  for (const f5 in o4.node.req.headers) {
    const v6 = o4.node.req.headers[f5];
    d7[f5] = Array.isArray(v6) ? v6.filter(Boolean).join(", ") : v6;
  }
  return d7;
}
function getRequestHeader(o4, d7) {
  return getRequestHeaders(o4)[d7.toLowerCase()];
}
function getRequestURL(o4, d7 = {}) {
  const f5 = function(o5, d8 = {}) {
    if (d8.xForwardedHost) {
      const d9 = o5.node.req.headers["x-forwarded-host"];
      if (d9)
        return d9;
    }
    return o5.node.req.headers.host || "localhost";
  }(o4, d7), v6 = function(o5, d8 = {}) {
    return false !== d8.xForwardedProto && "https" === o5.node.req.headers["x-forwarded-proto"] || o5.node.req.connection?.encrypted ? "https" : "http";
  }(o4), b5 = (o4.node.req.originalUrl || o4.path).replace(/^[/\\]+/g, "/");
  return new URL(b5, `${v6}://${f5}`);
}
function getRequestIP(o4, d7 = {}) {
  if (o4.context.clientAddress)
    return o4.context.clientAddress;
  if (d7.xForwardedFor) {
    const d8 = getRequestHeader(o4, "x-forwarded-for")?.split(",").shift()?.trim();
    if (d8)
      return d8;
  }
  return o4.node.req.socket.remoteAddress ? o4.node.req.socket.remoteAddress : void 0;
}
function readRawBody(o4, d7 = "utf8") {
  !function(o5, d8, f6) {
    if (!function(o6, d9, f7) {
      if ("string" == typeof d9) {
        if (o6.method === d9)
          return true;
      } else if (d9.includes(o6.method))
        return true;
      return false;
    }(o5, d8))
      throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }(o4, zr);
  const f5 = o4._requestBody || o4.web?.request?.body || o4.node.req[Ir] || o4.node.req.rawBody || o4.node.req.body;
  if (f5) {
    const o5 = Promise.resolve(f5).then((o6) => M.isBuffer(o6) ? o6 : "function" == typeof o6.pipeTo ? new Promise((d8, f6) => {
      const v7 = [];
      o6.pipeTo(new WritableStream({ write(o7) {
        v7.push(o7);
      }, close() {
        d8(M.concat(v7));
      }, abort(o7) {
        f6(o7);
      } })).catch(f6);
    }) : "function" == typeof o6.pipe ? new Promise((d8, f6) => {
      const v7 = [];
      o6.on("data", (o7) => {
        v7.push(o7);
      }).on("end", () => {
        d8(M.concat(v7));
      }).on("error", f6);
    }) : o6.constructor === Object ? M.from(JSON.stringify(o6)) : M.from(o6));
    return d7 ? o5.then((o6) => o6.toString(d7)) : o5;
  }
  if (!Number.parseInt(o4.node.req.headers["content-length"] || ""))
    return Promise.resolve(void 0);
  const v6 = o4.node.req[Ir] = new Promise((d8, f6) => {
    const v7 = [];
    o4.node.req.on("error", (o5) => {
      f6(o5);
    }).on("data", (o5) => {
      v7.push(o5);
    }).on("end", () => {
      d8(M.concat(v7));
    });
  });
  return d7 ? v6.then((o5) => o5.toString(d7)) : v6;
}
function getRequestWebStream(o4) {
  if (!zr.includes(o4.method))
    return;
  const d7 = o4.web?.request?.body || o4._requestBody;
  if (d7)
    return d7;
  return Ir in o4.node.req || "rawBody" in o4.node.req || "body" in o4.node.req || "__unenv__" in o4.node.req ? new ReadableStream({ async start(d8) {
    const f5 = await readRawBody(o4, false);
    f5 && d8.enqueue(f5), d8.close();
  } }) : new ReadableStream({ start: (d8) => {
    o4.node.req.on("data", (o5) => {
      d8.enqueue(o5);
    }), o4.node.req.on("end", () => {
      d8.close();
    }), o4.node.req.on("error", (o5) => {
      d8.error(o5);
    });
  } });
}
function handleCacheHeaders(o4, d7) {
  const f5 = ["public", ...d7.cacheControls || []];
  let v6 = false;
  if (void 0 !== d7.maxAge && f5.push("max-age=" + +d7.maxAge, "s-maxage=" + +d7.maxAge), d7.modifiedTime) {
    const f6 = new Date(d7.modifiedTime), b5 = o4.node.req.headers["if-modified-since"];
    o4.node.res.setHeader("last-modified", f6.toUTCString()), b5 && new Date(b5) >= d7.modifiedTime && (v6 = true);
  }
  if (d7.etag) {
    o4.node.res.setHeader("etag", d7.etag);
    o4.node.req.headers["if-none-match"] === d7.etag && (v6 = true);
  }
  return o4.node.res.setHeader("cache-control", f5.join(", ")), !!v6 && (o4.node.res.statusCode = 304, o4.handled || o4.node.res.end(), true);
}
function sanitizeStatusMessage(o4 = "") {
  return o4.replace(Tr, "");
}
function sanitizeStatusCode(o4, d7 = 200) {
  return o4 ? ("string" == typeof o4 && (o4 = Number.parseInt(o4, 10)), o4 < 100 || o4 > 999 ? d7 : o4) : d7;
}
function getCookie(o4, d7) {
  return function(o5) {
    return parse(o5.node.req.headers.cookie || "");
  }(o4)[d7];
}
function setCookie(o4, d7, f5, v6) {
  const b5 = serialize(d7, f5, v6 = { path: "/", ...v6 });
  let w6 = o4.node.res.getHeader("set-cookie");
  Array.isArray(w6) || (w6 = [w6]);
  const E4 = objectHash(v6);
  w6 = w6.filter((o5) => o5 && E4 !== objectHash(parse(o5))), o4.node.res.setHeader("set-cookie", [...w6, b5]);
}
function splitCookiesString(o4) {
  if (Array.isArray(o4))
    return o4.flatMap((o5) => splitCookiesString(o5));
  if ("string" != typeof o4)
    return [];
  const d7 = [];
  let f5, v6, b5, w6, E4, S6 = 0;
  const skipWhitespace = () => {
    for (; S6 < o4.length && /\s/.test(o4.charAt(S6)); )
      S6 += 1;
    return S6 < o4.length;
  };
  for (; S6 < o4.length; ) {
    for (f5 = S6, E4 = false; skipWhitespace(); )
      if (v6 = o4.charAt(S6), "," === v6) {
        for (b5 = S6, S6 += 1, skipWhitespace(), w6 = S6; S6 < o4.length && (v6 = o4.charAt(S6), "=" !== v6 && ";" !== v6 && "," !== v6); )
          S6 += 1;
        S6 < o4.length && "=" === o4.charAt(S6) ? (E4 = true, S6 = w6, d7.push(o4.slice(f5, b5)), f5 = S6) : S6 = b5 + 1;
      } else
        S6 += 1;
    (!E4 || S6 >= o4.length) && d7.push(o4.slice(f5, o4.length));
  }
  return d7;
}
function send2(o4, d7, f5) {
  return f5 && function(o5, d8) {
    d8 && 304 !== o5.node.res.statusCode && !o5.node.res.getHeader("content-type") && o5.node.res.setHeader("content-type", d8);
  }(o4, f5), new Promise((f6) => {
    Pr(() => {
      o4.handled || o4.node.res.end(d7), f6();
    });
  });
}
function setResponseStatus(o4, d7, f5) {
  d7 && (o4.node.res.statusCode = sanitizeStatusCode(d7, o4.node.res.statusCode)), f5 && (o4.node.res.statusMessage = sanitizeStatusMessage(f5));
}
function getResponseStatus(o4) {
  return o4.node.res.statusCode;
}
function getResponseStatusText(o4) {
  return o4.node.res.statusMessage;
}
function sendRedirect(o4, d7, f5 = 302) {
  o4.node.res.statusCode = sanitizeStatusCode(f5, o4.node.res.statusCode), o4.node.res.setHeader("location", d7);
  return send2(o4, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${d7.replace(/"/g, "%22")}"></head></html>`, jr.html);
}
function getResponseHeaders(o4) {
  return o4.node.res.getHeaders();
}
function getResponseHeader(o4, d7) {
  return o4.node.res.getHeader(d7);
}
function setResponseHeader(o4, d7, f5) {
  o4.node.res.setHeader(d7, f5);
}
function appendResponseHeader(o4, d7, f5) {
  let v6 = o4.node.res.getHeader(d7);
  v6 ? (Array.isArray(v6) || (v6 = [v6.toString()]), o4.node.res.setHeader(d7, [...v6, f5])) : o4.node.res.setHeader(d7, f5);
}
function removeResponseHeader(o4, d7) {
  return o4.node.res.removeHeader(d7);
}
function sendStream(o4, d7) {
  if (!d7 || "object" != typeof d7)
    throw new Error("[h3] Invalid stream provided.");
  if (o4.node.res._data = d7, !o4.node.res.socket)
    return o4._handled = true, Promise.resolve();
  if (hasProp(d7, "pipeTo") && "function" == typeof d7.pipeTo)
    return d7.pipeTo(new WritableStream({ write(d8) {
      o4.node.res.write(d8);
    } })).then(() => {
      o4.node.res.end();
    });
  if (hasProp(d7, "pipe") && "function" == typeof d7.pipe)
    return new Promise((f5, v6) => {
      d7.pipe(o4.node.res), d7.on && (d7.on("end", () => {
        o4.node.res.end(), f5();
      }), d7.on("error", (o5) => {
        v6(o5);
      })), o4.node.res.on("close", () => {
        d7.abort && d7.abort();
      });
    });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(o4, d7) {
  for (const [f5, v6] of d7.headers)
    "set-cookie" === f5 ? o4.node.res.appendHeader(f5, splitCookiesString(v6)) : o4.node.res.setHeader(f5, v6);
  if (d7.status && (o4.node.res.statusCode = sanitizeStatusCode(d7.status, o4.node.res.statusCode)), d7.statusText && (o4.node.res.statusMessage = sanitizeStatusMessage(d7.statusText)), d7.redirected && o4.node.res.setHeader("location", d7.url), d7.body)
    return sendStream(o4, d7.body);
  o4.node.res.end();
}
async function proxyRequest(o4, d7, f5 = {}) {
  let v6, b5;
  Br.has(o4.method) && (f5.streamRequest ? (v6 = getRequestWebStream(o4), b5 = "half") : v6 = await readRawBody(o4, false).catch(() => {
  }));
  const w6 = f5.fetchOptions?.method || o4.method, E4 = function(o5, ...d8) {
    const f6 = d8.filter(Boolean);
    if (0 === f6.length)
      return o5;
    const v7 = new Headers(o5);
    for (const o6 of f6)
      for (const [d9, f7] of Object.entries(o6))
        void 0 !== f7 && v7.set(d9, f7);
    return v7;
  }(getProxyRequestHeaders(o4), f5.fetchOptions?.headers, f5.headers);
  return async function(o5, d8, f6 = {}) {
    const v7 = await _getFetch(f6.fetch)(d8, { headers: f6.headers, ignoreResponseError: true, ...f6.fetchOptions });
    o5.node.res.statusCode = sanitizeStatusCode(v7.status, o5.node.res.statusCode), o5.node.res.statusMessage = sanitizeStatusMessage(v7.statusText);
    const b6 = [];
    for (const [d9, f7] of v7.headers.entries())
      "content-encoding" !== d9 && "content-length" !== d9 && ("set-cookie" !== d9 ? o5.node.res.setHeader(d9, f7) : b6.push(...splitCookiesString(f7)));
    b6.length > 0 && o5.node.res.setHeader("set-cookie", b6.map((o6) => (f6.cookieDomainRewrite && (o6 = rewriteCookieProperty(o6, f6.cookieDomainRewrite, "domain")), f6.cookiePathRewrite && (o6 = rewriteCookieProperty(o6, f6.cookiePathRewrite, "path")), o6)));
    f6.onResponse && await f6.onResponse(o5, v7);
    if (void 0 !== v7._data)
      return v7._data;
    if (o5.handled)
      return;
    if (false === f6.sendStream) {
      const d9 = new Uint8Array(await v7.arrayBuffer());
      return o5.node.res.end(d9);
    }
    if (v7.body)
      for await (const d9 of v7.body)
        o5.node.res.write(d9);
    return o5.node.res.end();
  }(o4, d7, { ...f5, fetchOptions: { method: w6, body: v6, duplex: b5, ...f5.fetchOptions, headers: E4 } });
}
function getProxyRequestHeaders(o4) {
  const d7 = /* @__PURE__ */ Object.create(null), f5 = getRequestHeaders(o4);
  for (const o5 in f5)
    Mr.has(o5) || (d7[o5] = f5[o5]);
  return d7;
}
function fetchWithEvent(o4, d7, f5, v6) {
  return _getFetch(v6?.fetch)(d7, { ...f5, context: f5?.context || o4.context, headers: { ...getProxyRequestHeaders(o4), ...f5?.headers } });
}
function _getFetch(o4) {
  if (o4)
    return o4;
  if (globalThis.fetch)
    return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(o4, d7, f5) {
  const v6 = "string" == typeof d7 ? { "*": d7 } : d7;
  return o4.replace(new RegExp(`(;\\s*${f5}=)([^;]+)`, "gi"), (o5, d8, f6) => {
    let b5;
    if (f6 in v6)
      b5 = v6[f6];
    else {
      if (!("*" in v6))
        return o5;
      b5 = v6["*"];
    }
    return b5 ? d8 + b5 : "";
  });
}
function isEvent(o4) {
  return hasProp(o4, "__is_event__");
}
function createEvent(o4, d7) {
  return new H3Event(o4, d7);
}
function defineEventHandler(o4) {
  if ("function" == typeof o4)
    return o4.__is_handler__ = true, o4;
  const d7 = { onRequest: _normalizeArray(o4.onRequest), onBeforeResponse: _normalizeArray(o4.onBeforeResponse) }, _handler = (f5) => async function(o5, d8, f6) {
    if (f6.onRequest) {
      for (const d9 of f6.onRequest)
        if (await d9(o5), o5.handled)
          return;
    }
    const v6 = await d8(o5), b5 = { body: v6 };
    if (f6.onBeforeResponse)
      for (const d9 of f6.onBeforeResponse)
        await d9(o5, b5);
    return b5.body;
  }(f5, o4.handler, d7);
  return _handler.__is_handler__ = true, _handler.__resolve__ = o4.handler.__resolve__, _handler.__websocket__ = o4.websocket, _handler;
}
function _normalizeArray(o4) {
  return o4 ? Array.isArray(o4) ? o4 : [o4] : void 0;
}
function isEventHandler(o4) {
  return hasProp(o4, "__is_handler__");
}
function toEventHandler(o4, d7, f5) {
  return isEventHandler(o4) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", f5 && "/" !== f5 ? `
     Route: ${f5}` : "", `
     Handler: ${o4}`), o4;
}
function createApp(o4 = {}) {
  const d7 = [], f5 = function(o5, d8) {
    const f6 = d8.debug ? 2 : void 0;
    return Ur(async (v7) => {
      v7.node.req.originalUrl = v7.node.req.originalUrl || v7.node.req.url || "/";
      const b6 = v7._path || v7.node.req.url || "/";
      let w7;
      d8.onRequest && await d8.onRequest(v7);
      for (const E4 of o5) {
        if (E4.route.length > 1) {
          if (!b6.startsWith(E4.route))
            continue;
          w7 = b6.slice(E4.route.length) || "/";
        } else
          w7 = b6;
        if (E4.match && !E4.match(w7, v7))
          continue;
        v7._path = w7, v7.node.req.url = w7;
        const o6 = await E4.handler(v7), S6 = void 0 === o6 ? void 0 : await o6;
        if (void 0 !== S6) {
          const o7 = { body: S6 };
          return d8.onBeforeResponse && await d8.onBeforeResponse(v7, o7), await handleHandlerResponse(v7, o7.body, f6), void (d8.onAfterResponse && await d8.onAfterResponse(v7, o7));
        }
        if (v7.handled)
          return void (d8.onAfterResponse && await d8.onAfterResponse(v7, void 0));
      }
      if (!v7.handled)
        throw createError({ statusCode: 404, statusMessage: `Cannot find any path matching ${v7.path || "/"}.` });
      d8.onAfterResponse && await d8.onAfterResponse(v7, void 0);
    });
  }(d7, o4), v6 = function(o5) {
    return async (d8) => {
      let f6;
      for (const v7 of o5) {
        if ("/" === v7.route && !v7.handler.__resolve__)
          continue;
        if (!d8.startsWith(v7.route))
          continue;
        if (f6 = d8.slice(v7.route.length) || "/", v7.match && !v7.match(f6, void 0))
          continue;
        let o6 = { route: v7.route, handler: v7.handler };
        if (o6.handler.__resolve__) {
          const d9 = await o6.handler.__resolve__(f6);
          if (!d9)
            continue;
          o6 = { ...o6, ...d9, route: joinURL(o6.route || "/", d9.route || "/") };
        }
        return o6;
      }
    };
  }(d7);
  f5.__resolve__ = v6;
  const b5 = function(o5) {
    let d8;
    return () => (d8 || (d8 = o5()), d8);
  }(() => {
    return d8 = v6, { ...o4.websocket, async resolve(o5) {
      const { pathname: f6 } = parseURL(o5.url || "/"), v7 = await d8(f6);
      return v7?.handler?.__websocket__ || {};
    } };
    var d8;
  }), w6 = { use: (o5, d8, f6) => use(w6, o5, d8, f6), resolve: v6, handler: f5, stack: d7, options: o4, get websocket() {
    return b5();
  } };
  return w6;
}
function use(o4, d7, f5, v6) {
  if (Array.isArray(d7))
    for (const b5 of d7)
      use(o4, b5, f5, v6);
  else if (Array.isArray(f5))
    for (const b5 of f5)
      use(o4, d7, b5, v6);
  else
    "string" == typeof d7 ? o4.stack.push(normalizeLayer({ ...v6, route: d7, handler: f5 })) : "function" == typeof d7 ? o4.stack.push(normalizeLayer({ ...f5, handler: d7 })) : o4.stack.push(normalizeLayer({ ...d7 }));
  return o4;
}
function normalizeLayer(o4) {
  let d7 = o4.handler;
  return d7.handler && (d7 = d7.handler), o4.lazy ? d7 = lazyEventHandler(d7) : isEventHandler(d7) || (d7 = toEventHandler(d7, 0, o4.route)), { route: withoutTrailingSlash(o4.route), match: o4.match, handler: d7 };
}
function handleHandlerResponse(o4, d7, f5) {
  if (null === d7)
    return function(o5, d8) {
      if (o5.handled)
        return;
      d8 || 200 === o5.node.res.statusCode || (d8 = o5.node.res.statusCode);
      const f6 = sanitizeStatusCode(d8, 204);
      204 === f6 && o5.node.res.removeHeader("content-length"), o5.node.res.writeHead(f6), o5.node.res.end();
    }(o4);
  if (d7) {
    if (v6 = d7, "undefined" != typeof Response && v6 instanceof Response)
      return sendWebResponse(o4, d7);
    if (function(o5) {
      if (!o5 || "object" != typeof o5)
        return false;
      if ("function" == typeof o5.pipe) {
        if ("function" == typeof o5._read)
          return true;
        if ("function" == typeof o5.abort)
          return true;
      }
      return "function" == typeof o5.pipeTo;
    }(d7))
      return sendStream(o4, d7);
    if (d7.buffer)
      return send2(o4, d7);
    if (d7.arrayBuffer && "function" == typeof d7.arrayBuffer)
      return d7.arrayBuffer().then((f6) => send2(o4, M.from(f6), d7.type));
    if (d7 instanceof Error)
      throw createError(d7);
    if ("function" == typeof d7.end)
      return true;
  }
  var v6;
  const b5 = typeof d7;
  if ("string" === b5)
    return send2(o4, d7, jr.html);
  if ("object" === b5 || "boolean" === b5 || "number" === b5)
    return send2(o4, JSON.stringify(d7, void 0, f5), jr.json);
  if ("bigint" === b5)
    return send2(o4, d7.toString(), jr.json);
  throw createError({ statusCode: 500, statusMessage: `[h3] Cannot send ${b5} as response.` });
}
function toNodeListener(o4) {
  return async function(d7, f5) {
    const v6 = createEvent(d7, f5);
    try {
      await o4.handler(v6);
    } catch (d8) {
      const f6 = createError(d8);
      if (isError(d8) || (f6.unhandled = true), o4.options.onError && await o4.options.onError(f6, v6), v6.handled)
        return;
      (f6.unhandled || f6.fatal) && console.error("[h3]", f6.fatal ? "[fatal]" : "[unhandled]", f6), await function(o5, d9, f7) {
        if (o5.handled)
          return;
        const v7 = isError(d9) ? d9 : createError(d9), b5 = { statusCode: v7.statusCode, statusMessage: v7.statusMessage, stack: [], data: v7.data };
        if (f7 && (b5.stack = (v7.stack || "").split("\n").map((o6) => o6.trim())), o5.handled)
          return;
        setResponseStatus(o5, Number.parseInt(v7.statusCode), v7.statusMessage), o5.node.res.setHeader("content-type", jr.json), o5.node.res.end(JSON.stringify(b5, void 0, 2));
      }(v6, f6, !!o4.options.debug);
    }
  };
}
function defaultSetTimeout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function runTimeout(o4) {
  if (Dr === setTimeout)
    return setTimeout(o4, 0);
  if ((Dr === defaultSetTimeout || !Dr) && setTimeout)
    return Dr = setTimeout, setTimeout(o4, 0);
  try {
    return Dr(o4, 0);
  } catch {
    try {
      return Dr.call(null, o4, 0);
    } catch {
      return Dr.call(this, o4, 0);
    }
  }
}
function cleanUpNextTick() {
  Vr && qr && (Vr = false, qr.length > 0 ? Wr = [...qr, ...Wr] : Kr = -1, Wr.length > 0 && drainQueue());
}
function drainQueue() {
  if (Vr)
    return;
  const o4 = runTimeout(cleanUpNextTick);
  Vr = true;
  let d7 = Wr.length;
  for (; d7; ) {
    for (qr = Wr, Wr = []; ++Kr < d7; )
      qr && qr[Kr].run();
    Kr = -1, d7 = Wr.length;
  }
  qr = null, Vr = false, function(o5) {
    if (Hr === clearTimeout)
      return clearTimeout(o5);
    if ((Hr === defaultClearTimeout || !Hr) && clearTimeout)
      return Hr = clearTimeout, clearTimeout(o5);
    try {
      return Hr(o5);
    } catch {
      try {
        return Hr.call(null, o5);
      } catch {
        return Hr.call(this, o5);
      }
    }
  }(o4);
}
function Item(o4, d7) {
  this.fun = o4, this.array = d7;
}
function noop() {
  return Fr;
}
function isPayloadMethod(o4 = "GET") {
  return Xr.has(o4.toUpperCase());
}
function mergeFetchOptions(o4, d7, f5 = globalThis.Headers) {
  const v6 = { ...d7, ...o4 };
  if (d7?.params && o4?.params && (v6.params = { ...d7?.params, ...o4?.params }), d7?.query && o4?.query && (v6.query = { ...d7?.query, ...o4?.query }), d7?.headers && o4?.headers) {
    v6.headers = new f5(d7?.headers || {});
    for (const [d8, b5] of new f5(o4?.headers || {}))
      v6.headers.set(d8, b5);
  }
  return v6;
}
function createFetch$1(o4 = {}) {
  const { fetch: d7 = globalThis.fetch, Headers: f5 = globalThis.Headers, AbortController: v6 = globalThis.AbortController } = o4;
  async function onError(o5) {
    const d8 = o5.error && "AbortError" === o5.error.name && !o5.options.timeout || false;
    if (false !== o5.options.retry && !d8) {
      let d9;
      d9 = "number" == typeof o5.options.retry ? o5.options.retry : isPayloadMethod(o5.options.method) ? 0 : 1;
      const f7 = o5.response && o5.response.status || 500;
      if (d9 > 0 && (Array.isArray(o5.options.retryStatusCodes) ? o5.options.retryStatusCodes.includes(f7) : is.has(f7))) {
        const f8 = o5.options.retryDelay || 0;
        return f8 > 0 && await new Promise((o6) => setTimeout(o6, f8)), $fetchRaw(o5.request, { ...o5.options, retry: d9 - 1 });
      }
    }
    const f6 = function(o6) {
      const d9 = o6.error?.message || o6.error?.toString() || "", f7 = o6.request?.method || o6.options?.method || "GET", v7 = o6.request?.url || String(o6.request) || "/", b5 = `[${f7}] ${JSON.stringify(v7)}`, w6 = o6.response ? `${o6.response.status} ${o6.response.statusText}` : "<no response>", E4 = new FetchError(`${b5}: ${w6}${d9 ? ` ${d9}` : ""}`, o6.error ? { cause: o6.error } : void 0);
      for (const d10 of ["request", "options", "response"])
        Object.defineProperty(E4, d10, { get: () => o6[d10] });
      for (const [d10, f8] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(E4, d10, { get: () => o6.response && o6.response[f8] });
      return E4;
    }(o5);
    throw Error.captureStackTrace && Error.captureStackTrace(f6, $fetchRaw), f6;
  }
  const $fetchRaw = async function(b5, w6 = {}) {
    const E4 = { request: b5, options: mergeFetchOptions(w6, o4.defaults, f5), response: void 0, error: void 0 };
    let S6;
    if (E4.options.method = E4.options.method?.toUpperCase(), E4.options.onRequest && await E4.options.onRequest(E4), "string" == typeof E4.request && (E4.options.baseURL && (E4.request = function(o5, d8) {
      if (isEmptyURL(d8) || hasProtocol(o5))
        return o5;
      const f6 = withoutTrailingSlash(d8);
      return o5.startsWith(f6) ? o5 : joinURL(f6, o5);
    }(E4.request, E4.options.baseURL)), (E4.options.query || E4.options.params) && (E4.request = withQuery(E4.request, { ...E4.options.params, ...E4.options.query }))), E4.options.body && isPayloadMethod(E4.options.method) && (!function(o5) {
      if (void 0 === o5)
        return false;
      const d8 = typeof o5;
      return "string" === d8 || "number" === d8 || "boolean" === d8 || null === d8 || "object" === d8 && (!!Array.isArray(o5) || !o5.buffer && (o5.constructor && "Object" === o5.constructor.name || "function" == typeof o5.toJSON));
    }(E4.options.body) ? ("pipeTo" in E4.options.body && "function" == typeof E4.options.body.pipeTo || "function" == typeof E4.options.body.pipe) && ("duplex" in E4.options || (E4.options.duplex = "half")) : (E4.options.body = "string" == typeof E4.options.body ? E4.options.body : JSON.stringify(E4.options.body), E4.options.headers = new f5(E4.options.headers || {}), E4.options.headers.has("content-type") || E4.options.headers.set("content-type", "application/json"), E4.options.headers.has("accept") || E4.options.headers.set("accept", "application/json"))), !E4.options.signal && E4.options.timeout) {
      const o5 = new v6();
      S6 = setTimeout(() => o5.abort(), E4.options.timeout), E4.options.signal = o5.signal;
    }
    try {
      E4.response = await d7(E4.request, E4.options);
    } catch (o5) {
      return E4.error = o5, E4.options.onRequestError && await E4.options.onRequestError(E4), await onError(E4);
    } finally {
      S6 && clearTimeout(S6);
    }
    if (E4.response.body && !os.has(E4.response.status) && "HEAD" !== E4.options.method) {
      const o5 = (E4.options.parseResponse ? "json" : E4.options.responseType) || function(o6 = "") {
        if (!o6)
          return "json";
        const d8 = o6.split(";").shift() || "";
        return ns.test(d8) ? "json" : rs.has(d8) || d8.startsWith("text/") ? "text" : "blob";
      }(E4.response.headers.get("content-type") || "");
      switch (o5) {
        case "json": {
          const o6 = await E4.response.text(), d8 = E4.options.parseResponse || destr;
          E4.response._data = d8(o6);
          break;
        }
        case "stream":
          E4.response._data = E4.response.body;
          break;
        default:
          E4.response._data = await E4.response[o5]();
      }
    }
    return E4.options.onResponse && await E4.options.onResponse(E4), !E4.options.ignoreResponseError && E4.response.status >= 400 && E4.response.status < 600 ? (E4.options.onResponseError && await E4.options.onResponseError(E4), await onError(E4)) : E4.response;
  }, $fetch = async function(o5, d8) {
    return (await $fetchRaw(o5, d8))._data;
  };
  return $fetch.raw = $fetchRaw, $fetch.native = (...o5) => d7(...o5), $fetch.create = (d8 = {}) => createFetch$1({ ...o4, defaults: { ...o4.defaults, ...d8 } }), $fetch;
}
function flatHooks(o4, d7 = {}, f5) {
  for (const v6 in o4) {
    const b5 = o4[v6], w6 = f5 ? `${f5}:${v6}` : v6;
    "object" == typeof b5 && null !== b5 ? flatHooks(b5, d7, w6) : "function" == typeof b5 && (d7[w6] = b5);
  }
  return d7;
}
function serialTaskCaller(o4, d7) {
  const f5 = d7.shift(), v6 = fs(f5);
  return o4.reduce((o5, f6) => o5.then(() => v6.run(() => f6(...d7))), Promise.resolve());
}
function parallelTaskCaller(o4, d7) {
  const f5 = d7.shift(), v6 = fs(f5);
  return Promise.all(o4.map((o5) => v6.run(() => o5(...d7))));
}
function callEachWith(o4, d7) {
  for (const f5 of [...o4])
    f5(d7);
}
function klona(o4) {
  if ("object" != typeof o4)
    return o4;
  var d7, f5, v6 = Object.prototype.toString.call(o4);
  if ("[object Object]" === v6) {
    if (o4.constructor !== Object && "function" == typeof o4.constructor)
      for (d7 in f5 = new o4.constructor(), o4)
        o4.hasOwnProperty(d7) && f5[d7] !== o4[d7] && (f5[d7] = klona(o4[d7]));
    else
      for (d7 in f5 = {}, o4)
        "__proto__" === d7 ? Object.defineProperty(f5, d7, { value: klona(o4[d7]), configurable: true, enumerable: true, writable: true }) : f5[d7] = klona(o4[d7]);
    return f5;
  }
  if ("[object Array]" === v6) {
    for (d7 = o4.length, f5 = Array(d7); d7--; )
      f5[d7] = klona(o4[d7]);
    return f5;
  }
  return "[object Set]" === v6 ? (f5 = /* @__PURE__ */ new Set(), o4.forEach(function(o5) {
    f5.add(klona(o5));
  }), f5) : "[object Map]" === v6 ? (f5 = /* @__PURE__ */ new Map(), o4.forEach(function(o5, d8) {
    f5.set(klona(d8), klona(o5));
  }), f5) : "[object Date]" === v6 ? /* @__PURE__ */ new Date(+o4) : "[object RegExp]" === v6 ? ((f5 = new RegExp(o4.source, o4.flags)).lastIndex = o4.lastIndex, f5) : "[object DataView]" === v6 ? new o4.constructor(klona(o4.buffer)) : "[object ArrayBuffer]" === v6 ? o4.slice(0) : "Array]" === v6.slice(-6) ? new o4.constructor(o4) : o4;
}
function isUppercase(o4 = "") {
  if (!ps.test(o4))
    return o4 !== o4.toLowerCase();
}
function kebabCase(o4, d7) {
  return o4 ? (Array.isArray(o4) ? o4 : function(o5, d8) {
    const f5 = gs, v6 = [];
    if (!o5 || "string" != typeof o5)
      return v6;
    let b5, w6, E4 = "";
    for (const d9 of o5) {
      const o6 = f5.includes(d9);
      if (true === o6) {
        v6.push(E4), E4 = "", b5 = void 0;
        continue;
      }
      const S6 = isUppercase(d9);
      if (false === w6) {
        if (false === b5 && true === S6) {
          v6.push(E4), E4 = d9, b5 = S6;
          continue;
        }
        if (true === b5 && false === S6 && E4.length > 1) {
          const o7 = E4.at(-1);
          v6.push(E4.slice(0, Math.max(0, E4.length - 1))), E4 = o7 + d9, b5 = S6;
          continue;
        }
      }
      E4 += d9, b5 = S6, w6 = o6;
    }
    return v6.push(E4), v6;
  }(o4)).map((o5) => o5.toLowerCase()).join(d7) : "";
}
function getEnv(o4, d7) {
  const f5 = (v6 = o4, kebabCase(v6 || "", "_")).toUpperCase();
  var v6;
  return destr(Jr.env[d7.prefix + f5] ?? Jr.env[d7.altPrefix + f5]);
}
function _isObject(o4) {
  return "object" == typeof o4 && !Array.isArray(o4);
}
function isPlainObject(o4) {
  if (null === o4 || "object" != typeof o4)
    return false;
  const d7 = Object.getPrototypeOf(o4);
  return (null === d7 || d7 === Object.prototype || null === Object.getPrototypeOf(d7)) && (!(Symbol.iterator in o4) && (!(Symbol.toStringTag in o4) || "[object Module]" === Object.prototype.toString.call(o4)));
}
function _defu(o4, d7, f5 = ".", v6) {
  if (!isPlainObject(d7))
    return _defu(o4, {}, f5, v6);
  const b5 = Object.assign({}, d7);
  for (const d8 in o4) {
    if ("__proto__" === d8 || "constructor" === d8)
      continue;
    const w6 = o4[d8];
    null != w6 && (v6 && v6(b5, d8, w6, f5) || (Array.isArray(w6) && Array.isArray(b5[d8]) ? b5[d8] = [...w6, ...b5[d8]] : isPlainObject(w6) && isPlainObject(b5[d8]) ? b5[d8] = _defu(w6, b5[d8], (f5 ? `${f5}.` : "") + d8.toString(), v6) : b5[d8] = w6));
  }
  return b5;
}
function useRuntimeConfig(o4) {
  return Ss;
}
function _deepFreeze(o4) {
  const d7 = Object.getOwnPropertyNames(o4);
  for (const f5 of d7) {
    const d8 = o4[f5];
    d8 && "object" == typeof d8 && _deepFreeze(d8);
  }
  return Object.freeze(o4);
}
function asyncCall(o4, ...d7) {
  try {
    return (f5 = o4(...d7)) && "function" == typeof f5.then ? f5 : Promise.resolve(f5);
  } catch (o5) {
    return Promise.reject(o5);
  }
  var f5;
}
function stringify(o4) {
  if (function(o5) {
    const d7 = typeof o5;
    return null === o5 || "object" !== d7 && "function" !== d7;
  }(o4))
    return String(o4);
  if (function(o5) {
    const d7 = Object.getPrototypeOf(o5);
    return !d7 || d7.isPrototypeOf(Object);
  }(o4) || Array.isArray(o4))
    return JSON.stringify(o4);
  if ("function" == typeof o4.toJSON)
    return stringify(o4.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (void 0 === typeof M)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
function normalizeKey$1(o4) {
  return o4 ? o4.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function joinKeys(...o4) {
  return normalizeKey$1(o4.join(":"));
}
function normalizeBaseKey(o4) {
  return (o4 = normalizeKey$1(o4)) ? o4 + ":" : "";
}
function watch(o4, d7, f5) {
  return o4.watch ? o4.watch((o5, v6) => d7(o5, f5 + v6)) : () => {
  };
}
async function dispose(o4) {
  "function" == typeof o4.dispose && await asyncCall(o4.dispose);
}
function useStorage(o4 = "") {
  return o4 ? function(o5, d7) {
    if (!(d7 = normalizeBaseKey(d7)))
      return o5;
    const f5 = { ...o5 };
    for (const v6 of Rs)
      f5[v6] = (f6 = "", ...b5) => o5[v6](d7 + f6, ...b5);
    return f5.getKeys = (f6 = "", ...v6) => o5.getKeys(d7 + f6, ...v6).then((o6) => o6.map((o7) => o7.slice(d7.length))), f5;
  }(js, o4) : js;
}
function getKey(...o4) {
  return o4.length > 0 ? hash(o4, {}) : "";
}
function escapeKey(o4) {
  return String(o4).replace(/\W/g, "");
}
function cloneWithProxy(o4, d7) {
  return new Proxy(o4, { get: (o5, f5, v6) => f5 in d7 ? d7[f5] : Reflect.get(o5, f5, v6), set: (o5, f5, v6, b5) => f5 in d7 ? (d7[f5] = v6, true) : Reflect.set(o5, f5, v6, b5) });
}
function createRouteRulesHandler(o4) {
  return Ur((d7) => {
    const f5 = function(o5) {
      o5.context._nitro = o5.context._nitro || {}, o5.context._nitro.routeRules || (o5.context._nitro.routeRules = getRouteRulesForPath(withoutBase(o5.path.split("?")[0], useRuntimeConfig().app.baseURL)));
      return o5.context._nitro.routeRules;
    }(d7);
    if (f5.headers && setHeaders(d7, f5.headers), f5.redirect) {
      let o5 = f5.redirect.to;
      if (o5.endsWith("/**")) {
        let v6 = d7.path;
        const b5 = f5.redirect._redirectStripBase;
        b5 && (v6 = withoutBase(v6, b5)), o5 = joinURL(o5.slice(0, -3), v6);
      } else if (d7.path.includes("?")) {
        o5 = withQuery(o5, getQuery(d7.path));
      }
      return sendRedirect(d7, o5, f5.redirect.statusCode);
    }
    if (f5.proxy) {
      let v6 = f5.proxy.to;
      if (v6.endsWith("/**")) {
        let o5 = d7.path;
        const b5 = f5.proxy._proxyStripBase;
        b5 && (o5 = withoutBase(o5, b5)), v6 = joinURL(v6.slice(0, -3), o5);
      } else if (d7.path.includes("?")) {
        v6 = withQuery(v6, getQuery(d7.path));
      }
      return proxyRequest(d7, v6, { fetch: o4.localFetch, ...f5.proxy });
    }
  });
}
function getRouteRulesForPath(o4) {
  return defu({}, ...Cs.matchAll(o4).reverse());
}
function invariant(o4, d7) {
  if (!o4)
    throw new InvariantError(d7);
}
function virtualId(o4) {
  return `virtual:${o4}`;
}
function handlerModule(o4) {
  return o4.handler?.endsWith(".html") ? isAbsolute(o4.handler) ? o4.handler : join(o4.root, o4.handler) : `$vinxi/handler/${o4.name}`;
}
function findAssetsInViteManifest(o4, d7, f5 = /* @__PURE__ */ new Map(), v6 = []) {
  if (v6.includes(d7))
    return [];
  const b5 = f5.get(d7);
  if (b5)
    return b5;
  const w6 = o4[d7];
  if (!w6)
    return [];
  const E4 = [...w6.assets?.filter(Boolean) || [], ...w6.css?.filter(Boolean) || []];
  if (w6.imports) {
    v6.push(d7);
    for (let d8 = 0, b6 = w6.imports.length; d8 < b6; d8++)
      E4.push(...findAssetsInViteManifest(o4, w6.imports[d8], f5, v6));
    v6.pop();
  }
  E4.push(w6.file);
  const S6 = Array.from(new Set(E4));
  return f5.set(d7, S6), S6;
}
function createHtmlTagsForAssets(o4, d7, f5) {
  return f5.filter((o5) => o5.endsWith(".css") || o5.endsWith(".js") || o5.endsWith(".mjs")).map((f6) => ({ tag: "link", attrs: { href: joinURL(d7.config.server.baseURL ?? "/", o4.base, f6), key: join(d7.config.server.baseURL ?? "", o4.base, f6), ...f6.endsWith(".css") ? { rel: "stylesheet", fetchPriority: "high" } : { rel: "modulepreload" } } }));
}
function castError(o4) {
  return o4 instanceof Error ? o4 : new Error("string" == typeof o4 ? o4 : "Unknown error", { cause: o4 });
}
function handleError(o4, d7 = tn) {
  const f5 = d7 && d7.context && d7.context[Xs], v6 = castError(o4);
  if (!f5)
    throw v6;
  try {
    for (const o5 of f5)
      o5(v6);
  } catch (o5) {
    handleError(o5, d7 && d7.owner || null);
  }
}
function createOwner() {
  const o4 = { owner: tn, context: tn ? tn.context : null, owned: null, cleanups: null };
  return tn && (tn.owned ? tn.owned.push(o4) : tn.owned = [o4]), o4;
}
function createRoot(o4, d7) {
  const f5 = tn, v6 = f5, b5 = 0 === o4.length ? en : { context: v6 ? v6.context : null, owner: v6, owned: null, cleanups: null };
  let w6;
  tn = b5;
  try {
    w6 = o4(0 === o4.length ? () => {
    } : () => cleanNode(b5));
  } catch (o5) {
    handleError(o5);
  } finally {
    tn = f5;
  }
  return w6;
}
function createSignal(o4, d7) {
  return [() => o4, (d8) => o4 = "function" == typeof d8 ? d8(o4) : d8];
}
function createMemo(o4, d7) {
  let f5;
  tn = createOwner();
  try {
    f5 = o4(d7);
  } catch (o5) {
    handleError(o5);
  } finally {
    tn = tn.owner;
  }
  return () => f5;
}
function batch(o4) {
  return o4();
}
function on(o4, d7, f5 = {}) {
  const v6 = Array.isArray(o4), b5 = f5.defer;
  return () => {
    if (b5)
      return;
    let f6;
    if (v6) {
      f6 = [];
      for (let d8 = 0; d8 < o4.length; d8++)
        f6.push(o4[d8]());
    } else
      f6 = o4();
    return d7(f6);
  };
}
function onCleanup(o4) {
  return tn && (tn.cleanups ? tn.cleanups.push(o4) : tn.cleanups = [o4]), o4;
}
function cleanNode(o4) {
  if (o4.owned) {
    for (let d7 = 0; d7 < o4.owned.length; d7++)
      cleanNode(o4.owned[d7]);
    o4.owned = null;
  }
  if (o4.cleanups) {
    for (let d7 = 0; d7 < o4.cleanups.length; d7++)
      o4.cleanups[d7]();
    o4.cleanups = null;
  }
}
function catchError(o4, d7) {
  const f5 = createOwner();
  f5.context = { ...f5.context, [Xs]: [d7] }, tn = f5;
  try {
    return o4();
  } catch (o5) {
    handleError(o5);
  } finally {
    tn = tn.owner;
  }
}
function createContext(o4) {
  const d7 = Symbol("context");
  return { id: d7, Provider: createProvider(d7), defaultValue: o4 };
}
function useContext(o4) {
  return tn && tn.context && void 0 !== tn.context[o4.id] ? tn.context[o4.id] : o4.defaultValue;
}
function getOwner() {
  return tn;
}
function children(o4) {
  const d7 = createMemo(() => resolveChildren(o4()));
  return d7.toArray = () => {
    const o5 = d7();
    return Array.isArray(o5) ? o5 : null != o5 ? [o5] : [];
  }, d7;
}
function runWithOwner(o4, d7) {
  const f5 = tn;
  tn = o4;
  try {
    return d7();
  } catch (o5) {
    handleError(o5);
  } finally {
    tn = f5;
  }
}
function resolveChildren(o4) {
  if ("function" == typeof o4 && !o4.length)
    return resolveChildren(o4());
  if (Array.isArray(o4)) {
    const d7 = [];
    for (let f5 = 0; f5 < o4.length; f5++) {
      const v6 = resolveChildren(o4[f5]);
      Array.isArray(v6) ? d7.push.apply(d7, v6) : d7.push(v6);
    }
    return d7;
  }
  return o4;
}
function createProvider(o4) {
  return function(d7) {
    return createMemo(() => (tn.context = { ...tn.context, [o4]: d7.value }, children(() => d7.children)));
  };
}
function resolveSSRNode$1(o4) {
  const d7 = typeof o4;
  if ("string" === d7)
    return o4;
  if (null == o4 || "boolean" === d7)
    return "";
  if (Array.isArray(o4)) {
    let d8 = {}, f5 = "";
    for (let v6 = 0, b5 = o4.length; v6 < b5; v6++)
      "object" != typeof d8 && "object" != typeof o4[v6] && (f5 += "<!--!$-->"), f5 += resolveSSRNode$1(d8 = o4[v6]);
    return f5;
  }
  return "object" === d7 ? o4.t : "function" === d7 ? resolveSSRNode$1(o4()) : String(o4);
}
function setHydrateContext(o4) {
  sn.context = o4;
}
function createUniqueId() {
  const o4 = sn.context;
  if (!o4)
    throw new Error("createUniqueId cannot be used under non-hydrating context");
  return `${o4.id}${o4.count++}`;
}
function createComponent(o4, d7) {
  if (sn.context && !sn.context.noHydrate) {
    const f5 = sn.context;
    setHydrateContext(sn.context ? { ...sn.context, id: `${sn.context.id}${sn.context.count++}-`, count: 0 } : void 0);
    const v6 = o4(d7 || {});
    return setHydrateContext(f5), v6;
  }
  return o4(d7 || {});
}
function mergeProps(...o4) {
  const d7 = {};
  for (let f5 = 0; f5 < o4.length; f5++) {
    let v6 = o4[f5];
    if ("function" == typeof v6 && (v6 = v6()), v6) {
      const f6 = Object.getOwnPropertyDescriptors(v6);
      for (const v7 in f6)
        v7 in d7 || Object.defineProperty(d7, v7, { enumerable: true, get() {
          for (let d8 = o4.length - 1; d8 >= 0; d8--) {
            let f7, b5 = o4[d8];
            if ("function" == typeof b5 && (b5 = b5()), f7 = (b5 || {})[v7], void 0 !== f7)
              return f7;
          }
        } });
    }
  }
  return d7;
}
function Show(o4) {
  let d7;
  return o4.when ? "function" == typeof (d7 = o4.children) ? d7(o4.keyed ? o4.when : () => o4.when) : d7 : o4.fallback || "";
}
function ErrorBoundary(o4) {
  let d7, f5, v6, b5 = true;
  const w6 = sn.context, E4 = w6.id + w6.count;
  function displayFallback() {
    cleanNode(v6), w6.serialize(E4, d7), setHydrateContext({ ...w6, count: 0 });
    const f6 = o4.fallback;
    return "function" == typeof f6 && f6.length ? f6(d7, () => {
    }) : f6;
  }
  return createMemo(() => (v6 = tn, catchError(() => f5 = o4.children, (o5) => {
    d7 = o5, !b5 && w6.replace("e" + E4, displayFallback), b5 = true;
  }))), d7 ? displayFallback() : (b5 = false, { t: `<!--!$e${E4}-->${resolveSSRNode$1(f5)}<!--!$/e${E4}-->` });
}
function createResource(o4, d7, f5 = {}) {
  2 === arguments.length ? "object" == typeof d7 && (f5 = d7, d7 = o4, o4 = true) : 1 === arguments.length && (d7 = o4, o4 = true);
  const v6 = /* @__PURE__ */ new Set(), b5 = sn.context.id + sn.context.count++;
  let w6, E4, S6 = {}, _3 = f5.storage ? f5.storage(f5.initialValue)[0]() : f5.initialValue;
  if (sn.context.async && "initial" !== f5.ssrLoadFrom && (S6 = sn.context.resources[b5] || (sn.context.resources[b5] = {}), S6.ref))
    return S6.data || S6.ref[0].loading || S6.ref[0].error || S6.ref[1].refetch(), S6.ref;
  const read2 = () => {
    if (E4)
      throw E4;
    const o5 = "initial" !== f5.ssrLoadFrom && sn.context.async && "data" in sn.context.resources[b5];
    if (!o5 && read2.loading) {
      const o6 = useContext(nn);
      o6 && (o6.resources.set(b5, read2), v6.add(o6));
    }
    return o5 ? sn.context.resources[b5].data : _3;
  };
  function load() {
    const S7 = sn.context;
    if (!S7.async)
      return read2.loading = !!("function" == typeof o4 ? o4() : o4);
    if (S7.resources && b5 in S7.resources && "data" in S7.resources[b5])
      return void (_3 = S7.resources[b5].data);
    const A3 = "function" == typeof o4 ? o4() : o4;
    if (!w6) {
      if (null == A3 || false === A3)
        return;
      w6 = d7(A3, { value: _3 });
    }
    return null != w6 && "object" == typeof w6 && "then" in w6 ? (read2.loading = true, read2.state = "pending", w6 = w6.then((o5) => (read2.loading = false, read2.state = "ready", S7.resources[b5].data = o5, w6 = null, notifySuspense(v6), o5)).catch((o5) => {
      throw read2.loading = false, read2.state = "errored", read2.error = E4 = castError(o5), w6 = null, notifySuspense(v6), E4;
    }), S7.serialize && S7.serialize(b5, w6, f5.deferStream), w6) : (S7.resources[b5].data = w6, S7.serialize && S7.serialize(b5, w6), w6 = null, S7.resources[b5].data);
  }
  return read2.loading = false, read2.error = void 0, read2.state = "initialValue" in f5 ? "ready" : "unresolved", Object.defineProperty(read2, "latest", { get: () => read2() }), "initial" !== f5.ssrLoadFrom && load(), S6.ref = [read2, { refetch: load, mutate: (o5) => _3 = o5 }];
}
function lazy(o4) {
  let d7, load = (f6) => (d7 || (d7 = o4(), d7.then((o5) => d7.resolved = o5.default), f6 && (sn.context.lazy[f6] = d7)), d7);
  const f5 = /* @__PURE__ */ new Set(), wrap = (o5) => {
    const v6 = sn.context.id.slice(0, -1);
    let b5 = sn.context.lazy[v6];
    if (b5 ? d7 = b5 : load(v6), d7.resolved)
      return d7.resolved(o5);
    const w6 = useContext(nn), E4 = { loading: true, error: void 0 };
    return w6 && (w6.resources.set(v6, E4), f5.add(w6)), sn.context.async && sn.context.block(d7.then(() => {
      E4.loading = false, notifySuspense(f5);
    })), "";
  };
  return wrap.preload = load, wrap;
}
function suspenseComplete(o4) {
  for (const d7 of o4.resources.values())
    if (d7.loading)
      return false;
  return true;
}
function notifySuspense(o4) {
  for (const d7 of o4)
    suspenseComplete(d7) && (d7.completed(), o4.delete(d7));
}
function startTransition(o4) {
  o4();
}
function Suspense(o4) {
  let d7;
  const f5 = sn.context, v6 = f5.id + f5.count, b5 = createOwner(), w6 = f5.suspense[v6] || (f5.suspense[v6] = { resources: /* @__PURE__ */ new Map(), completed: () => {
    const o5 = runSuspense();
    suspenseComplete(w6) && d7(resolveSSRNode$1(o5));
  } });
  function suspenseError(o5) {
    d7 && d7(void 0, o5) || runWithOwner(b5.owner, () => {
      throw o5;
    });
  }
  function runSuspense() {
    return setHydrateContext({ ...f5, count: 0 }), cleanNode(b5), runWithOwner(b5, () => createComponent(nn.Provider, { value: w6, get children() {
      return catchError(() => o4.children, suspenseError);
    } }));
  }
  const E4 = runSuspense();
  return suspenseComplete(w6) ? (delete f5.suspense[v6], E4) : (d7 = f5.async ? f5.registerFragment(v6) : void 0, catchError(() => {
    if (f5.async) {
      setHydrateContext({ ...f5, count: 0, id: f5.id + "0-f", noHydrate: true });
      const d8 = { t: `<template id="pl-${v6}"></template>${resolveSSRNode$1(o4.fallback)}<!--pl-${v6}-->` };
      return setHydrateContext(f5), d8;
    }
    return setHydrateContext({ ...f5, count: 0, id: f5.id + "0-f" }), f5.serialize(v6, "$$f"), o4.fallback;
  }, suspenseError));
}
function mr$2(o4) {
  switch (o4) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function d$3(o4) {
  let d7, f5 = "", v6 = 0;
  for (let b5 = 0, w6 = o4.length; b5 < w6; b5++)
    d7 = mr$2(o4[b5]), d7 && (f5 += o4.slice(v6, b5) + d7, v6 = b5 + 1);
  return 0 === v6 ? f5 = o4 : f5 += o4.slice(v6), f5;
}
function f$4(o4, d7) {
  if (!o4)
    throw d7;
}
function re$1(o4) {
  return dn.has(o4);
}
function Me$1(o4) {
  return f$4(re$1(o4), new Cn(o4)), dn.get(o4);
}
function We$1(o4, d7) {
  for (let f5 = 0, v6 = d7.length; f5 < v6; f5++) {
    let v7 = d7[f5];
    o4.has(v7) || (o4.add(v7), v7.extends && We$1(o4, v7.extends));
  }
}
function c$1(o4) {
  if (o4) {
    let d7 = /* @__PURE__ */ new Set();
    return We$1(d7, o4), [...d7];
  }
}
function y6(o4) {
  return { t: 2, i: void 0, s: o4, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function le$1(o4) {
  return o4 instanceof EvalError ? 1 : o4 instanceof RangeError ? 2 : o4 instanceof ReferenceError ? 3 : o4 instanceof SyntaxError ? 4 : o4 instanceof TypeError ? 5 : o4 instanceof URIError ? 6 : 0;
}
function T$2(o4, d7) {
  let f5 = function(o5) {
    let d8 = yn[le$1(o5)];
    return o5.name !== d8 ? { name: o5.name } : o5.constructor.name !== d8 ? { name: o5.constructor.name } : {};
  }(o4), v6 = Object.getOwnPropertyNames(o4);
  for (let b5, w6 = 0, E4 = v6.length; w6 < E4; w6++)
    b5 = v6[w6], "name" !== b5 && "message" !== b5 && ("stack" === b5 ? 4 & d7 && (f5 = f5 || {}, f5[b5] = o4[b5]) : (f5 = f5 || {}, f5[b5] = o4[b5]));
  return f5;
}
function ue$1(o4) {
  return Object.isFrozen(o4) ? 3 : Object.isSealed(o4) ? 2 : Object.isExtensible(o4) ? 0 : 1;
}
function b$2(o4) {
  return { t: 1, i: void 0, s: d$3(o4), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Qe2(o4) {
  return { t: 4, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Ve$1(o4, d7) {
  return { t: 18, i: o4, s: d$3(Me$1(d7)), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function k$1(o4, d7, f5) {
  return { t: 25, i: o4, s: f5, l: void 0, c: d$3(d7), m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function F$3(o4, d7) {
  return { t: 28, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [o4, d7], f: void 0, b: void 0, o: void 0 };
}
function V$3(o4, d7) {
  return { t: 30, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [o4, d7], f: void 0, b: void 0, o: void 0 };
}
function D$2(o4, d7, f5) {
  return { t: 31, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: f5, f: d7, b: void 0, o: void 0 };
}
function _$4() {
  let o4 = /* @__PURE__ */ new Set(), d7 = [], f5 = true, v6 = true;
  return { __SEROVAL_STREAM__: true, on(b5) {
    f5 && o4.add(b5);
    for (let o5 = 0, w6 = d7.length; o5 < w6; o5++) {
      let E4 = d7[o5];
      o5 !== w6 - 1 || f5 ? b5.next(E4) : v6 ? b5.return(E4) : b5.throw(E4);
    }
    return () => {
      f5 && o4.delete(b5);
    };
  }, next(v7) {
    f5 && (d7.push(v7), function(d8) {
      for (let f6 of o4.keys())
        f6.next(d8);
    }(v7));
  }, throw(b5) {
    f5 && (d7.push(b5), function(d8) {
      for (let f6 of o4.keys())
        f6.throw(d8);
    }(b5), f5 = false, v6 = false, o4.clear());
  }, return(b5) {
    f5 && (d7.push(b5), function(d8) {
      for (let f6 of o4.keys())
        f6.return(d8);
    }(b5), f5 = false, v6 = true, o4.clear());
  } };
}
function M$3(o4) {
  let d7 = [], f5 = -1, v6 = -1, b5 = o4[Symbol.iterator]();
  for (; ; )
    try {
      let o5 = b5.next();
      if (d7.push(o5.value), o5.done) {
        v6 = d7.length - 1;
        break;
      }
    } catch (o5) {
      f5 = d7.length, d7.push(o5);
    }
  return { v: d7, t: f5, d: v6 };
}
function je$2(o4) {
  let d7 = o4[0];
  return ("$" === d7 || "_" === d7 || d7 >= "A" && d7 <= "Z" || d7 >= "a" && d7 <= "z") && Ln.test(o4);
}
function Z$3(o4) {
  switch (o4.t) {
    case 0:
      return o4.s + "=" + o4.v;
    case 2:
      return o4.s + ".set(" + o4.k + "," + o4.v + ")";
    case 1:
      return o4.s + ".add(" + o4.v + ")";
    case 3:
      return o4.s + ".delete(" + o4.k + ")";
  }
}
function lr$2(o4) {
  if (o4.length) {
    let d7 = "", f5 = function(o5) {
      let d8 = [], f6 = o5[0];
      for (let v6, b5 = 1, w6 = o5.length, E4 = f6; b5 < w6; b5++)
        v6 = o5[b5], 0 === v6.t && v6.v === E4.v ? f6 = { t: 0, s: v6.s, k: void 0, v: Z$3(f6) } : 2 === v6.t && v6.s === E4.s ? f6 = { t: 2, s: Z$3(f6), k: v6.k, v: v6.v } : 1 === v6.t && v6.s === E4.s ? f6 = { t: 1, s: Z$3(f6), k: void 0, v: v6.v } : 3 === v6.t && v6.s === E4.s ? f6 = { t: 3, s: Z$3(f6), k: v6.k, v: void 0 } : (d8.push(f6), f6 = v6), E4 = v6;
      return d8.push(f6), d8;
    }(o4);
    for (let o5 = 0, v6 = f5.length; o5 < v6; o5++)
      d7 += Z$3(f5[o5]) + ",";
    return d7;
  }
}
function p$2(o4) {
  return { detail: o4.detail, bubbles: o4.bubbles, cancelable: o4.cancelable, composed: o4.composed };
}
function u$2(o4) {
  return { bubbles: o4.bubbles, cancelable: o4.cancelable, composed: o4.composed };
}
function f$3(o4) {
  let d7 = [];
  return o4.forEach((o5, f5) => {
    d7.push([f5, o5]);
  }), d7;
}
function m$1(o4) {
  let d7 = [];
  return o4.forEach((o5, f5) => {
    d7.push([f5, o5]);
  }), d7;
}
function g$2(o4) {
  let d7 = _$4(), f5 = o4.getReader();
  return async function a() {
    try {
      let o5 = await f5.read();
      o5.done ? d7.return(o5.value) : (d7.next(o5.value), await a());
    } catch (o5) {
      d7.throw(o5);
    }
  }().catch(() => {
  }), d7;
}
function z$2(o4, d7) {
  return { body: d7, cache: o4.cache, credentials: o4.credentials, headers: o4.headers, integrity: o4.integrity, keepalive: o4.keepalive, method: o4.method, mode: o4.mode, redirect: o4.redirect, referrer: o4.referrer, referrerPolicy: o4.referrerPolicy };
}
function S$1(o4) {
  return { headers: o4.headers, status: o4.status, statusText: o4.statusText };
}
function createSerializer({ onData: o4, onDone: d7, scopeId: f5, onError: v6 }) {
  return new Wn({ scopeId: f5, plugins: [Kn, Yn, Qn, ni, oi, ui, hi, pi, mi, vi], globalIdentifier: Si, disabledFeatures: xi, onData: o4, onDone: d7, onError: v6 });
}
function getLocalHeaderScript(o4) {
  return function(o5) {
    return null == o5 ? `${un}=${un}||[]` : `(${un}=${un}||{})["${d$3(o5)}"]=[]`;
  }(o4) + ";";
}
function renderToString(o4, d7 = {}) {
  const { renderId: f5 } = d7;
  let v6 = "";
  const b5 = createSerializer({ scopeId: f5, onData(o5) {
    v6 || (v6 = getLocalHeaderScript(f5)), v6 += o5;
  }, onError: d7.onError });
  sn.context = { id: f5 || "", count: 0, suspense: {}, lazy: {}, assets: [], nonce: d7.nonce, serialize(o5, d8) {
    !sn.context.noHydrate && b5.write(o5, d8);
  }, roots: 0, nextRoot() {
    return this.renderId + "i-" + this.roots++;
  } };
  let w6 = createRoot((d8) => (setTimeout(d8), resolveSSRNode(escape(o4()))));
  return sn.context.noHydrate = true, b5.close(), w6 = injectAssets(sn.context.assets, w6), v6.length && (w6 = injectScripts(w6, v6, d7.nonce)), w6;
}
function HydrationScript(o4) {
  const { nonce: d7 } = sn.context;
  return ssr(function({ eventNames: o5 = ["click", "input"], nonce: d8 } = {}) {
    return `<script${d8 ? ` nonce="${d8}"` : ""}>window._$HY||(e=>{let t=e=>e&&e.hasAttribute&&(e.hasAttribute("data-hk")?e:t(e.host&&e.host.nodeType?e.host:e.parentNode));["${o5.join('", "')}"].forEach((o=>document.addEventListener(o,(o=>{let a=o.composedPath&&o.composedPath()[0]||o.target,s=t(a);s&&!e.completed.has(s)&&e.events.push([s,o])}))))})(_$HY={events:[],completed:new WeakSet,r:{},fe(){}});<\/script><!--xs-->`;
  }({ nonce: d7, ...o4 }));
}
function ssr(o4, ...d7) {
  if (d7.length) {
    let f5 = "";
    for (let v6 = 0; v6 < d7.length; v6++) {
      f5 += o4[v6];
      const b5 = d7[v6];
      void 0 !== b5 && (f5 += resolveSSRNode(b5));
    }
    o4 = f5 + o4[d7.length];
  }
  return { t: o4 };
}
function ssrClassList(o4) {
  if (!o4)
    return "";
  let d7 = Object.keys(o4), f5 = "";
  for (let v6 = 0, b5 = d7.length; v6 < b5; v6++) {
    const b6 = d7[v6], w6 = !!o4[b6];
    b6 && "undefined" !== b6 && w6 && (v6 && (f5 += " "), f5 += escape(b6));
  }
  return f5;
}
function ssrStyle(o4) {
  if (!o4)
    return "";
  if ("string" == typeof o4)
    return escape(o4, true);
  let d7 = "";
  const f5 = Object.keys(o4);
  for (let v6 = 0; v6 < f5.length; v6++) {
    const b5 = f5[v6], w6 = o4[b5];
    null != w6 && (v6 && (d7 += ";"), d7 += `${b5}:${escape(w6, true)}`);
  }
  return d7;
}
function ssrElement(o4, d7, f5, v6) {
  null == d7 ? d7 = {} : "function" == typeof d7 && (d7 = d7());
  const b5 = _i.test(o4), w6 = Object.keys(d7);
  let E4, S6 = `<${o4}${ssrHydrationKey()} `;
  for (let o5 = 0; o5 < w6.length; o5++) {
    const v7 = w6[o5];
    if (wi.has(v7)) {
      void 0 !== f5 || b5 || (f5 = "innerHTML" === v7 ? d7[v7] : escape(d7[v7]));
      continue;
    }
    const _3 = d7[v7];
    if ("style" === v7)
      S6 += `style="${ssrStyle(_3)}"`;
    else if ("class" === v7 || "className" === v7 || "classList" === v7) {
      if (E4)
        continue;
      let o6;
      S6 += `class="${escape(((o6 = d7.class) ? o6 + " " : "") + ((o6 = d7.className) ? o6 + " " : ""), true) + ssrClassList(d7.classList)}"`, E4 = true;
    } else if (bi.has(v7)) {
      if (!_3)
        continue;
      S6 += v7;
    } else {
      if (null == _3 || "ref" === v7 || "on" === v7.slice(0, 2))
        continue;
      S6 += `${Ei[v7] || escape(v7)}="${escape(_3, true)}"`;
    }
    o5 !== w6.length - 1 && (S6 += " ");
  }
  return b5 ? { t: S6 + "/>" } : ("function" == typeof f5 && (f5 = f5()), { t: S6 + `>${resolveSSRNode(f5, true)}</${o4}>` });
}
function ssrAttribute(o4, d7, f5) {
  return f5 ? d7 ? " " + o4 : "" : null != d7 ? ` ${o4}="${d7}"` : "";
}
function ssrHydrationKey() {
  const o4 = function() {
    const o5 = sn.context;
    return o5 && !o5.noHydrate && `${o5.id}${o5.count++}`;
  }();
  return o4 ? ` data-hk="${o4}"` : "";
}
function escape(o4, d7) {
  const f5 = typeof o4;
  if ("string" !== f5) {
    if (!d7 && "function" === f5)
      return escape(o4());
    if (!d7 && Array.isArray(o4)) {
      for (let d8 = 0; d8 < o4.length; d8++)
        o4[d8] = escape(o4[d8]);
      return o4;
    }
    return d7 && "boolean" === f5 ? String(o4) : o4;
  }
  const v6 = d7 ? '"' : "<", b5 = d7 ? "&quot;" : "&lt;";
  let w6 = o4.indexOf(v6), E4 = o4.indexOf("&");
  if (w6 < 0 && E4 < 0)
    return o4;
  let S6 = 0, _3 = "";
  for (; w6 >= 0 && E4 >= 0; )
    w6 < E4 ? (S6 < w6 && (_3 += o4.substring(S6, w6)), _3 += b5, S6 = w6 + 1, w6 = o4.indexOf(v6, S6)) : (S6 < E4 && (_3 += o4.substring(S6, E4)), _3 += "&amp;", S6 = E4 + 1, E4 = o4.indexOf("&", S6));
  if (w6 >= 0)
    do {
      S6 < w6 && (_3 += o4.substring(S6, w6)), _3 += b5, S6 = w6 + 1, w6 = o4.indexOf(v6, S6);
    } while (w6 >= 0);
  else
    for (; E4 >= 0; )
      S6 < E4 && (_3 += o4.substring(S6, E4)), _3 += "&amp;", S6 = E4 + 1, E4 = o4.indexOf("&", S6);
  return S6 < o4.length ? _3 + o4.substring(S6) : _3;
}
function resolveSSRNode(o4, d7) {
  const f5 = typeof o4;
  if ("string" === f5)
    return o4;
  if (null == o4 || "boolean" === f5)
    return "";
  if (Array.isArray(o4)) {
    let f6 = {}, v6 = "";
    for (let b5 = 0, w6 = o4.length; b5 < w6; b5++)
      d7 || "object" == typeof f6 || "object" == typeof o4[b5] || (v6 += "<!--!$-->"), v6 += resolveSSRNode(f6 = o4[b5]);
    return v6;
  }
  return "object" === f5 ? o4.t : "function" === f5 ? resolveSSRNode(o4()) : String(o4);
}
function useAssets(o4) {
  sn.context.assets.push(() => resolveSSRNode(o4()));
}
function Hydration(o4) {
  if (!sn.context.noHydrate)
    return o4.children;
  const d7 = sn.context;
  sn.context = { ...d7, count: 0, id: `${d7.id}${d7.count++}-`, noHydrate: false };
  const f5 = o4.children;
  return sn.context = d7, f5;
}
function NoHydration(o4) {
  return sn.context.noHydrate = true, o4.children;
}
function queue(o4) {
  return Promise.resolve().then(o4);
}
function allSettled(o4) {
  let d7 = o4.length;
  return Promise.allSettled(o4).then(() => {
    if (o4.length !== d7)
      return allSettled(o4);
  });
}
function injectAssets(o4, d7) {
  if (!o4 || !o4.length)
    return d7;
  let f5 = "";
  for (let d8 = 0, v6 = o4.length; d8 < v6; d8++)
    f5 += o4[d8]();
  return d7.replace("</head>", f5 + "</head>");
}
function injectScripts(o4, d7, f5) {
  const v6 = `<script${f5 ? ` nonce="${f5}"` : ""}>${d7}<\/script>`, b5 = o4.indexOf("<!--xs-->");
  return b5 > -1 ? o4.slice(0, b5) + v6 + o4.slice(b5) : o4 + v6;
}
function getRequestEvent() {
  return globalThis[$i] ? globalThis[$i].getStore() || sn.context && sn.context.event || console.log("RequestEvent is missing. This is most likely due to accessing `getRequestEvent` non-managed async scope in a partially polyfilled environment. Try moving it above all `await` calls.") : void 0;
}
function provideRequestEvent(d7, f5) {
  return (globalThis[$i] = globalThis[$i] || new o3()).run(d7, f5);
}
function Rt$1(o4) {
  switch (o4) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function p$12(o4) {
  let d7, f5 = "", v6 = 0;
  for (let b5 = 0, w6 = o4.length; b5 < w6; b5++)
    d7 = Rt$1(o4[b5]), d7 && (f5 += o4.slice(v6, b5) + d7, v6 = b5 + 1);
  return 0 === v6 ? f5 = o4 : f5 += o4.slice(v6), f5;
}
function xt$1(o4) {
  switch (o4) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return "\n";
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return o4;
  }
}
function m10(o4) {
  return o4.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, xt$1);
}
function v$1(o4, d7) {
  if (!o4)
    throw d7;
}
function B(o4) {
  return Ci.has(o4);
}
function It$1(o4) {
  return v$1(B(o4), new io(o4)), Ci.get(o4);
}
function Pt$1(o4) {
  return v$1(function(o5) {
    return Pi.has(o5);
  }(o4), new oo(o4)), Pi.get(o4);
}
function Oe3(o4, d7) {
  for (let f5 = 0, v6 = d7.length; f5 < v6; f5++) {
    let v7 = d7[f5];
    o4.has(v7) || (o4.add(v7), v7.extends && Oe3(o4, v7.extends));
  }
}
function je$1(o4) {
  if (o4) {
    let d7 = /* @__PURE__ */ new Set();
    return Oe3(d7, o4), [...d7];
  }
}
function g$1(o4) {
  return { t: 2, i: void 0, s: o4, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function ie$1(o4) {
  return o4 instanceof EvalError ? 1 : o4 instanceof RangeError ? 2 : o4 instanceof ReferenceError ? 3 : o4 instanceof SyntaxError ? 4 : o4 instanceof TypeError ? 5 : o4 instanceof URIError ? 6 : 0;
}
function de$2(o4, d7) {
  let f5 = function(o5) {
    let d8 = Ni[ie$1(o5)];
    return o5.name !== d8 ? { name: o5.name } : o5.constructor.name !== d8 ? { name: o5.constructor.name } : {};
  }(o4), v6 = Object.getOwnPropertyNames(o4);
  for (let b5, w6 = 0, E4 = v6.length; w6 < E4; w6++)
    b5 = v6[w6], "name" !== b5 && "message" !== b5 && ("stack" === b5 ? 4 & d7 && (f5 = f5 || {}, f5[b5] = o4[b5]) : (f5 = f5 || {}, f5[b5] = o4[b5]));
  return f5;
}
function De$1(o4) {
  return Object.isFrozen(o4) ? 3 : Object.isSealed(o4) ? 2 : Object.isExtensible(o4) ? 0 : 1;
}
function G$1(o4) {
  return { t: 1, i: void 0, s: p$12(o4), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Ht$1(o4) {
  return { t: 4, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function he$1(o4, d7) {
  return { t: 18, i: o4, s: p$12(It$1(d7)), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function _e$1(o4, d7, f5) {
  return { t: 25, i: o4, s: f5, l: void 0, c: p$12(d7), m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Me2(o4, d7) {
  return { t: 28, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [o4, d7], f: void 0, b: void 0, o: void 0 };
}
function Ue3(o4, d7) {
  return { t: 30, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [o4, d7], f: void 0, b: void 0, o: void 0 };
}
function Le2(o4, d7, f5) {
  return { t: 31, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: f5, f: d7, b: void 0, o: void 0 };
}
function X$1() {
  let o4, d7;
  return { promise: new Promise((f5, v6) => {
    o4 = f5, d7 = v6;
  }), resolve(d8) {
    o4(d8);
  }, reject(o5) {
    d7(o5);
  } };
}
function P4() {
  let o4 = /* @__PURE__ */ new Set(), d7 = [], f5 = true, v6 = true;
  return { __SEROVAL_STREAM__: true, on(b5) {
    f5 && o4.add(b5);
    for (let o5 = 0, w6 = d7.length; o5 < w6; o5++) {
      let E4 = d7[o5];
      o5 !== w6 - 1 || f5 ? b5.next(E4) : v6 ? b5.return(E4) : b5.throw(E4);
    }
    return () => {
      f5 && o4.delete(b5);
    };
  }, next(v7) {
    f5 && (d7.push(v7), function(d8) {
      for (let f6 of o4.keys())
        f6.next(d8);
    }(v7));
  }, throw(b5) {
    f5 && (d7.push(b5), function(d8) {
      for (let f6 of o4.keys())
        f6.throw(d8);
    }(b5), f5 = false, v6 = false, o4.clear());
  }, return(b5) {
    f5 && (d7.push(b5), function(d8) {
      for (let f6 of o4.keys())
        f6.return(d8);
    }(b5), f5 = false, v6 = true, o4.clear());
  } };
}
function mr$1(o4) {
  return () => {
    let d7 = [], f5 = [], v6 = 0, b5 = -1, w6 = false;
    function n3() {
      for (let o5 = 0, d8 = f5.length; o5 < d8; o5++)
        f5[o5].resolve({ done: true, value: void 0 });
    }
    return o4.on({ next(o5) {
      let v7 = f5.shift();
      v7 && v7.resolve({ done: false, value: o5 }), d7.push(o5);
    }, throw(o5) {
      let v7 = f5.shift();
      v7 && v7.reject(o5), n3(), b5 = d7.length, d7.push(o5), w6 = true;
    }, return(o5) {
      let v7 = f5.shift();
      v7 && v7.resolve({ done: true, value: o5 }), n3(), b5 = d7.length, d7.push(o5);
    } }), { [Symbol.asyncIterator]() {
      return this;
    }, async next() {
      if (-1 === b5) {
        let o5 = v6++;
        if (o5 >= d7.length) {
          let o6 = X$1();
          return f5.push(o6), await o6.promise;
        }
        return { done: false, value: d7[o5] };
      }
      return v6 > b5 ? { done: true, value: void 0 } : function() {
        let o5 = v6++, f6 = d7[o5];
        if (o5 !== b5)
          return { done: false, value: f6 };
        if (w6)
          throw f6;
        return { done: true, value: f6 };
      }();
    } };
  };
}
function Be2(o4) {
  let d7 = [], f5 = -1, v6 = -1, b5 = o4[Symbol.iterator]();
  for (; ; )
    try {
      let o5 = b5.next();
      if (d7.push(o5.value), o5.done) {
        v6 = d7.length - 1;
        break;
      }
    } catch (o5) {
      f5 = d7.length, d7.push(o5);
    }
  return { v: d7, t: f5, d: v6 };
}
function fe$1(o4, d7) {
  switch (d7) {
    case 3:
      return Object.freeze(o4);
    case 1:
      return Object.preventExtensions(o4);
    case 2:
      return Object.seal(o4);
    default:
      return o4;
  }
}
function pe$2(o4) {
  let d7 = o4[0];
  return ("$" === d7 || "_" === d7 || d7 >= "A" && d7 <= "Z" || d7 >= "a" && d7 <= "z") && go.test(o4);
}
function R3(o4) {
  switch (o4.t) {
    case 0:
      return o4.s + "=" + o4.v;
    case 2:
      return o4.s + ".set(" + o4.k + "," + o4.v + ")";
    case 1:
      return o4.s + ".add(" + o4.v + ")";
    case 3:
      return o4.s + ".delete(" + o4.k + ")";
  }
}
function ve$1(o4) {
  if (o4.length) {
    let d7 = "", f5 = function(o5) {
      let d8 = [], f6 = o5[0];
      for (let v6, b5 = 1, w6 = o5.length, E4 = f6; b5 < w6; b5++)
        v6 = o5[b5], 0 === v6.t && v6.v === E4.v ? f6 = { t: 0, s: v6.s, k: void 0, v: R3(f6) } : 2 === v6.t && v6.s === E4.s ? f6 = { t: 2, s: R3(f6), k: v6.k, v: v6.v } : 1 === v6.t && v6.s === E4.s ? f6 = { t: 1, s: R3(f6), k: void 0, v: v6.v } : 3 === v6.t && v6.s === E4.s ? f6 = { t: 3, s: R3(f6), k: v6.k, v: void 0 } : (d8.push(f6), f6 = v6), E4 = v6;
      return d8.push(f6), d8;
    }(o4);
    for (let o5 = 0, v6 = f5.length; o5 < v6; o5++)
      d7 += R3(f5[o5]) + ",";
    return d7;
  }
}
function ge$1(o4, d7 = {}) {
  let f5 = je$1(d7.plugins);
  return new po({ plugins: f5, markedRefs: o4.m }).deserialize(o4.t);
}
function N$1(o4) {
  return { detail: o4.detail, bubbles: o4.bubbles, cancelable: o4.cancelable, composed: o4.composed };
}
function D$1(o4) {
  return { bubbles: o4.bubbles, cancelable: o4.cancelable, composed: o4.composed };
}
function _$2(o4) {
  let d7 = [];
  return o4.forEach((o5, f5) => {
    d7.push([f5, o5]);
  }), d7;
}
function M$1(o4) {
  let d7 = [];
  return o4.forEach((o5, f5) => {
    d7.push([f5, o5]);
  }), d7;
}
function me$1(o4) {
  let d7 = P4(), f5 = o4.getReader();
  return async function s4() {
    try {
      let o5 = await f5.read();
      o5.done ? d7.return(o5.value) : (d7.next(o5.value), await s4());
    } catch (o5) {
      d7.throw(o5);
    }
  }().catch(() => {
  }), d7;
}
function ye$1(o4, d7) {
  return { body: d7, cache: o4.cache, credentials: o4.credentials, headers: o4.headers, integrity: o4.integrity, keepalive: o4.keepalive, method: o4.method, mode: o4.mode, redirect: o4.redirect, referrer: o4.referrer, referrerPolicy: o4.referrerPolicy };
}
function be$1(o4) {
  return { headers: o4.headers, status: o4.status, statusText: o4.statusText };
}
function ts(o4) {
  let d7;
  const f5 = ea(o4), v6 = { duplex: "half", method: o4.method, headers: o4.headers };
  return o4.node.req.body instanceof ArrayBuffer ? new Request(f5, { ...v6, body: o4.node.req.body }) : new Request(f5, { ...v6, get body() {
    return d7 || (d7 = ha(o4), d7);
  } });
}
function ss() {
  return es("nitro-app", { asyncContext: !!globalThis.app.config.server.experimental?.asyncContext, AsyncLocalStorage: o3 }).use().event;
}
function h5(o4) {
  return function(...d7) {
    let f5 = d7[0];
    if (function(o5) {
      return "object" == typeof o5 && (o5 instanceof H3Event || o5?.[Xo] instanceof H3Event || true === o5?.__is_event__);
    }(f5))
      d7[0] = f5 instanceof H3Event || f5.__is_event__ ? f5 : f5[Xo];
    else {
      if (!globalThis.app.config.server.experimental?.asyncContext)
        throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (f5 = ss(), !f5)
        throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      d7.unshift(f5);
    }
    return o4(...d7);
  };
}
function bs(o4) {
  if (!o4[ya]) {
    const d7 = function(o5) {
      return { request: pa(o5), response: ws(o5), clientAddress: ta(o5), locals: {}, nativeEvent: o5 };
    }(o4);
    o4[ya] = d7;
  }
  return o4[ya];
}
function Ae$1(o4, d7) {
  for (const [f5, v6] of d7.entries())
    ca(o4, f5, v6);
}
function ws(o4) {
  return { get status() {
    return sa(o4);
  }, set status(d7) {
    ra(o4, d7);
  }, get statusText() {
    return na(o4);
  }, set statusText(d7) {
    ra(o4, sa(o4), d7);
  }, headers: new zs(o4) };
}
function Ee$1(o4, d7, f5) {
  let v6 = true;
  const b5 = d7.split("/");
  let w6 = o4.rootNode, E4 = 0;
  const S6 = [w6];
  for (const o5 of b5) {
    let d8;
    if (d8 = w6.children.get(o5))
      w6 = d8;
    else {
      const f6 = As(o5);
      d8 = Xe2({ type: f6, parent: w6 }), w6.children.set(o5, d8), f6 === va.PLACEHOLDER ? (d8.paramName = "*" === o5 ? "_" + E4++ : o5.slice(1), w6.placeholderChildren.push(d8), v6 = false) : f6 === va.WILDCARD && (w6.wildcardChildNode = d8, d8.paramName = o5.slice(3) || "_", v6 = false), S6.push(d8), w6 = d8;
    }
  }
  for (const [o5, d8] of S6.entries())
    d8.maxDepth = Math.max(S6.length - o5, d8.maxDepth || 0);
  return w6.data = f5, true === v6 && (o4.staticRoutesMap[d7] = w6), w6;
}
function Xe2(o4 = {}) {
  return { type: o4.type || va.NORMAL, maxDepth: 0, parent: o4.parent || null, children: /* @__PURE__ */ new Map(), data: o4.data || null, paramName: o4.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function As(o4) {
  return o4.startsWith("**") ? va.WILDCARD : ":" === o4[0] || "*" === o4 ? va.PLACEHOLDER : va.NORMAL;
}
function $s(o4, d7, f5, v6 = "default") {
  return lazy(async () => {
    {
      const f6 = (await o4.import())[v6], b5 = (await d7.inputs?.[o4.src].assets()).filter((o5) => "style" === o5.tag || "stylesheet" === o5.attrs.rel);
      return { default: (o5) => [...b5.map((o6) => function(o7, d8) {
        let { tag: f7, attrs: { key: v7, ...b6 } = { key: void 0 }, children: w6 } = o7;
        return Ea[f7]({ attrs: { ...b6, nonce: d8 }, key: v7, children: w6 });
      }(o6)), createComponent(f6, o5)] };
    }
  });
}
function Os(o4) {
  const d7 = la(o4.nativeEvent, "flash");
  if (!d7)
    return;
  let f5 = JSON.parse(d7);
  if (!f5 || !f5.result)
    return;
  const v6 = [...f5.input.slice(0, -1), new Map(f5.input[f5.input.length - 1])];
  ua(o4.nativeEvent, "flash", "", { maxAge: 0 });
  const b5 = f5.error ? new Error(f5.result) : f5.result;
  return { input: v6, url: f5.url, pending: false, result: f5.thrown ? void 0 : b5, error: f5.thrown ? b5 : void 0 };
}
function Pe$1(o4, d7) {
  return new ReadableStream({ start(f5) {
    !function(o5, d8) {
      let f6 = je$1(d8.plugins), v6 = new Eo({ plugins: f6, refs: d8.refs, disabledFeatures: d8.disabledFeatures, onParse(o6, b5) {
        let w6, E4 = new bo({ plugins: f6, features: v6.features, scopeId: d8.scopeId, markedRefs: v6.marked });
        try {
          w6 = E4.serializeTop(o6);
        } catch (o7) {
          return void (d8.onError && d8.onError(o7));
        }
        d8.onSerialize(w6, b5);
      }, onError: d8.onError, onDone: d8.onDone });
      v6.start(o5);
    }(d7, { scopeId: o4, plugins: [So, Ao, Ro, Co, Oo, Uo, Fo, Ho, Wo, Ko], onSerialize(d8, v6) {
      f5.enqueue(function(o5) {
        const d9 = new TextEncoder().encode(o5), f6 = d9.length, v7 = f6.toString(16), b5 = "00000000".substring(0, 8 - v7.length) + v7, w6 = new TextEncoder().encode(`;0x${b5};`), E4 = new Uint8Array(12 + f6);
        return E4.set(w6), E4.set(d9, 12), E4;
      }(v6 ? `(${function(o5) {
        return null == o5 ? `${Ti}=${Ti}||[]` : `(${Ti}=${Ti}||{})["${p$12(o5)}"]=[]`;
      }(o4)},${d8})` : d8));
    }, onDone() {
      f5.close();
    }, onError(o5) {
      f5.error(o5);
    } });
  } });
}
function ke$1(o4, d7, f5, v6) {
  const b5 = new URL(d7.url), w6 = o4 instanceof Error;
  let E4 = new URL(d7.headers.get("referer")).toString(), S6 = 302;
  return o4 instanceof Response && o4.headers.has("Location") && (E4 = new URL(o4.headers.get("Location"), b5.origin + "").toString(), S6 = function(o5) {
    return o5.status && xa.has(o5.status) ? o5.status : 302;
  }(o4)), new Response(null, { status: S6, headers: { Location: E4, ...o4 ? { "Set-Cookie": `flash=${JSON.stringify({ url: b5.pathname + encodeURIComponent(b5.search), result: w6 ? o4.message : o4, thrown: v6, error: w6, input: [...f5.slice(0, -1), [...f5[f5.length - 1].entries()]] })}; Secure; HttpOnly;` } : {} } });
}
async function Fe2(o4, d7) {
  let f5, v6 = new URL(o4.request.headers.get("referer")).toString();
  d7 instanceof Response && (d7.headers.has("X-Revalidate") && (f5 = d7.headers.get("X-Revalidate").split(",")), d7.headers.has("Location") && (v6 = new URL(d7.headers.get("Location"), new URL(o4.request.url).origin + "").toString()));
  const b5 = function(o5) {
    return { ...o5 };
  }(o4);
  return b5.request = new Request(v6), await provideRequestEvent(b5, async () => {
    await async function(o5) {
      const d8 = globalThis.MANIFEST.client;
      return globalThis.MANIFEST.ssr, o5.response.headers.set("Content-Type", "text/html"), Object.assign(o5, { manifest: await d8.json(), assets: [...await d8.inputs[d8.handler].assets()], router: { submission: Os(o5) }, routes: wa.map(function e(o6) {
        return { ...o6, ...o6.$$route ? o6.$$route.require().route : void 0, info: { ...o6.$$route ? o6.$$route.require().route.info : {}, filesystem: true }, component: o6.$component && $s(o6.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: o6.children ? o6.children.map(e) : void 0 };
      }), complete: false, $islands: /* @__PURE__ */ new Set() });
    }(b5), Sa || (Sa = (await Promise.resolve().then(() => (init_app(), app_exports))).default), b5.router.dataOnly = f5 || true, b5.router.previousUrl = o4.request.headers.get("referer");
    try {
      renderToString(() => {
        sn.context.event = b5, Sa();
      });
    } catch (o5) {
      console.log(o5);
    }
    const v7 = b5.router.data;
    if (!v7)
      return d7;
    let w6 = false;
    for (const o5 in v7)
      void 0 === v7[o5] ? delete v7[o5] : w6 = true;
    return w6 && (d7 instanceof Response ? d7.customBody && (v7._$value = d7.customBody()) : (v7._$value = d7, d7 = new Response(null, { status: 200 })), d7.customBody = () => v7, d7.headers.set("X-Single-Flight", "true")), d7;
  });
}
function isClientError(o4) {
  return o4 instanceof AuthError && Aa.has(o4.type);
}
function setLogger(o4 = {}, d7) {
  d7 || (ka.debug = () => {
  }), o4.error && (ka.error = o4.error), o4.warn && (ka.warn = o4.warn), o4.debug && (ka.debug = o4.debug);
}
function setEnvDefaults(o4, d7) {
  try {
    const f5 = o4.AUTH_URL;
    f5 && !d7.basePath && (d7.basePath = new URL(f5).pathname);
  } catch {
  } finally {
    d7.basePath ?? (d7.basePath = "/auth");
  }
  if (!d7.secret?.length) {
    d7.secret = [];
    const f5 = o4.AUTH_SECRET;
    f5 && d7.secret.push(f5);
    for (const f6 of [1, 2, 3]) {
      const v6 = o4[`AUTH_SECRET_${f6}`];
      v6 && d7.secret.unshift(v6);
    }
  }
  if (!d7.secret?.length)
    throw new MissingSecret("Missing secret, please set AUTH_SECRET or config.secret");
  d7.redirectProxyUrl ?? (d7.redirectProxyUrl = o4.AUTH_REDIRECT_PROXY_URL), d7.trustHost ?? (d7.trustHost = !!(o4.AUTH_URL ?? o4.AUTH_TRUST_HOST ?? o4.VERCEL ?? o4.CF_PAGES ?? "production" !== o4.NODE_ENV)), d7.providers = d7.providers.map((d8) => {
    const f5 = "function" == typeof d8 ? d8({}) : d8, v6 = f5.id.toUpperCase().replace(/-/g, "_");
    return "oauth" === f5.type || "oidc" === f5.type ? (f5.clientId ?? (f5.clientId = o4[`AUTH_${v6}_ID`]), f5.clientSecret ?? (f5.clientSecret = o4[`AUTH_${v6}_SECRET`]), "oidc" === f5.type && (f5.issuer ?? (f5.issuer = o4[`AUTH_${v6}_ISSUER`]))) : "email" === f5.type && (f5.apiKey ?? (f5.apiKey = o4[`AUTH_${v6}_KEY`])), f5;
  });
}
function createActionURL(o4, d7, f5, v6, b5) {
  let w6, E4 = v6.AUTH_URL ?? v6.NEXTAUTH_URL;
  if (E4)
    w6 = new URL(E4), b5 && "/" !== b5 && "/" !== w6.pathname && (ka.warn(w6.pathname === b5 ? "env-url-basepath-redundant" : "env-url-basepath-mismatch"), w6.pathname = "/");
  else {
    const o5 = f5.get("x-forwarded-host") ?? f5.get("host"), v7 = f5.get("x-forwarded-proto") ?? d7 ?? "https", b6 = v7.endsWith(":") ? v7 : v7 + ":";
    w6 = new URL(`${b6}//${o5}`);
  }
  const S6 = w6.toString().replace(/\/$/, "");
  if (b5) {
    const d8 = b5?.replace(/(^\/|\/$)/g, "") ?? "";
    return new URL(`${S6}/${d8}/${o4}`);
  }
  return new URL(`${S6}/${o4}`);
}
function c2(o4) {
  const d7 = new URL("http://localhost:3000/api/auth");
  o4 && !o4.toString().startsWith("http") && (o4 = `https://${o4}`);
  const f5 = new URL(null != o4 ? o4 : d7), v6 = ("/" === f5.pathname ? d7.pathname : f5.pathname).replace(/\/$/, ""), b5 = `${f5.origin}${v6}`;
  return { origin: f5.origin, host: f5.host, path: v6, base: b5, toString: () => b5 };
}
function T5() {
  return Math.floor(Date.now() / 1e3);
}
function f$2(o4, d7) {
  setEnvDefaults(o4, d7), null != d7.trustHost || (d7.trustHost = ki), d7.basePath = E$2();
}
function H2() {
  return useContext(ja);
}
function C3(o4) {
  var d7;
  const f5 = getRequestEvent();
  za._session = null == (d7 = null == f5 ? void 0 : f5.locals) ? void 0 : d7.session;
  const [v6, { refetch: b5 }] = createResource(async (o5, d8) => {
    var v7;
    const b6 = null == (v7 = null == d8 ? void 0 : d8.refetching) ? void 0 : v7.event;
    return "init" === b6 || void 0 === b6 || "storage" === b6 || void 0 === za._session ? (za._lastSync = T5(), za._session = await d$1(f5), za._session) : (!b6 || null === za._session || T5() < za._lastSync || (za._lastSync = T5(), za._session = await d$1(f5)), za._session);
  }, { initialValue: za._session });
  return createComponent(ja.Provider, { value: v6, get children() {
    return o4.children;
  } });
}
function E$1(o4, d7 = false) {
  const f5 = o4.replace(Ca, "$1");
  return f5 ? d7 || /^[?#]/.test(f5) ? f5 : "/" + f5 : "";
}
function F2(o4, d7, f5) {
  if (Ta.test(d7))
    return;
  const v6 = E$1(o4), b5 = f5 && E$1(f5);
  let w6 = "";
  return w6 = !b5 || d7.startsWith("/") ? v6 : 0 !== b5.toLowerCase().indexOf(v6.toLowerCase()) ? v6 + b5 : b5, (w6 || "/") + E$1(d7, !w6);
}
function ve3(o4, d7) {
  return E$1(o4).replace(/\/*(\*.*)?$/g, "") + E$1(d7);
}
function G3(o4) {
  const d7 = {};
  return o4.searchParams.forEach((o5, f5) => {
    d7[f5] = o5;
  }), d7;
}
function we3(o4, d7, f5) {
  const [v6, b5] = o4.split("/*", 2), w6 = v6.split("/").filter(Boolean), E4 = w6.length;
  return (o5) => {
    const v7 = o5.split("/").filter(Boolean), S6 = v7.length - E4;
    if (S6 < 0 || S6 > 0 && void 0 === b5 && !d7)
      return null;
    const _3 = { path: E4 ? "" : "/", params: {} }, y7 = (o6) => void 0 === f5 ? void 0 : f5[o6];
    for (let o6 = 0; o6 < E4; o6++) {
      const d8 = w6[o6], f6 = v7[o6], b6 = ":" === d8[0], E5 = b6 ? d8.slice(1) : d8;
      if (b6 && $4(f6, y7(E5)))
        _3.params[E5] = f6;
      else if (b6 || !$4(f6, d8))
        return null;
      _3.path += `/${f6}`;
    }
    if (b5) {
      const o6 = S6 ? v7.slice(-S6).join("/") : "";
      if (!$4(o6, y7(b5)))
        return null;
      _3.params[b5] = o6;
    }
    return _3;
  };
}
function $4(o4, d7) {
  const n3 = (d8) => 0 === d8.localeCompare(o4, void 0, { sensitivity: "base" });
  return void 0 === d7 || ("string" == typeof d7 ? n3(d7) : "function" == typeof d7 ? d7(o4) : Array.isArray(d7) ? d7.some(n3) : d7 instanceof RegExp && d7.test(o4));
}
function Re3(o4) {
  const [d7, f5] = o4.pattern.split("/*", 2), v6 = d7.split("/").filter(Boolean);
  return v6.reduce((o5, d8) => o5 + (d8.startsWith(":") ? 2 : 3), v6.length - (void 0 === f5 ? 0 : 1));
}
function J$1(o4) {
  const d7 = /* @__PURE__ */ new Map(), f5 = getOwner();
  return new Proxy({}, { get: (v6, b5) => (d7.has(b5) || runWithOwner(f5, () => d7.set(b5, createMemo(() => o4()[b5]))), d7.get(b5)()), getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }), ownKeys: () => Reflect.ownKeys(o4()) });
}
function Q$1(o4) {
  let d7 = /(\/?\:[^\/]+)\?/.exec(o4);
  if (!d7)
    return [o4];
  let f5 = o4.slice(0, d7.index), v6 = o4.slice(d7.index + d7[0].length);
  const b5 = [f5, f5 += d7[1]];
  for (; d7 = /^(\/\:[^\/]+)\?/.exec(v6); )
    b5.push(f5 += d7[1]), v6 = v6.slice(d7[0].length);
  return Q$1(v6).reduce((o5, d8) => [...o5, ...b5.map((o6) => o6 + d8)], []);
}
function Ee3(o4, d7 = "") {
  const { component: f5, preload: v6, load: b5, children: w6, info: E4 } = o4, S6 = !w6 || Array.isArray(w6) && !w6.length, _3 = { key: o4, component: f5, preload: v6 || b5, info: E4 };
  return Y$1(o4.path).reduce((f6, v7) => {
    for (const b6 of Q$1(v7)) {
      const w7 = ve3(d7, b6);
      let E5 = S6 ? w7 : w7.split("/*", 1)[0];
      E5 = E5.split("/").map((o5) => o5.startsWith(":") || o5.startsWith("*") ? o5 : encodeURIComponent(o5)).join("/"), f6.push({ ..._3, originalPath: v7, pattern: E5, matcher: we3(E5, !S6, o4.matchFilters) });
    }
    return f6;
  }, []);
}
function Ce4(o4, d7 = 0) {
  return { routes: o4, score: 1e4 * Re3(o4[o4.length - 1]) - d7, matcher(d8) {
    const f5 = [];
    for (let v6 = o4.length - 1; v6 >= 0; v6--) {
      const b5 = o4[v6], w6 = b5.matcher(d8);
      if (!w6)
        return null;
      f5.unshift({ ...w6, route: b5 });
    }
    return f5;
  } };
}
function Y$1(o4) {
  return Array.isArray(o4) ? o4 : [o4];
}
function Se3(o4, d7 = "", f5 = [], v6 = []) {
  const b5 = Y$1(o4);
  for (let o5 = 0, w6 = b5.length; o5 < w6; o5++) {
    const w7 = b5[o5];
    if (w7 && "object" == typeof w7) {
      w7.hasOwnProperty("path") || (w7.path = "");
      const o6 = Ee3(w7, d7);
      for (const d8 of o6) {
        f5.push(d8);
        const o7 = Array.isArray(w7.children) && 0 === w7.children.length;
        if (w7.children && !o7)
          Se3(w7.children, d8.pattern, f5, v6);
        else {
          const o8 = Ce4([...f5], v6.length);
          v6.push(o8);
        }
        f5.pop();
      }
    }
  }
  return f5.length ? v6 : v6.sort((o5, d8) => d8.score - o5.score);
}
function k3(o4, d7) {
  for (let f5 = 0, v6 = o4.length; f5 < v6; f5++) {
    const v7 = o4[f5].matcher(d7);
    if (v7)
      return v7;
  }
  return [];
}
function ke4(o4, d7, f5, v6 = {}) {
  const { signal: [b5, w6], utils: E4 = {} } = o4, S6 = E4.parsePath || ((o5) => o5), _3 = E4.renderPath || ((o5) => o5), A3 = E4.beforeLeave || function() {
    let o5 = /* @__PURE__ */ new Set(), d8 = false;
    return { subscribe: function(d9) {
      return o5.add(d9), () => o5.delete(d9);
    }, confirm: function(f6, v7) {
      if (d8)
        return !(d8 = false);
      const b6 = { to: f6, options: v7, defaultPrevented: false, preventDefault: () => b6.defaultPrevented = true };
      for (const w7 of o5)
        w7.listener({ ...b6, from: w7.location, retry: (o6) => {
          o6 && (d8 = true), w7.navigate(f6, { ...v7, resolve: false });
        } });
      return !b6.defaultPrevented;
    } };
  }(), I2 = F2("", v6.base || "");
  if (void 0 === I2)
    throw new Error(`${I2} is not a valid base path`);
  I2 && !b5().value && w6({ value: I2, replace: true, scroll: false });
  const [M2, L3] = createSignal(false);
  let U3;
  const [N4, q3] = createSignal(b5().value), [W2, K3] = createSignal(b5().state), Z3 = function(o5, d8) {
    const f6 = new URL(Pa), v7 = createMemo((d9) => {
      const v8 = o5();
      try {
        return new URL(v8, f6);
      } catch {
        return console.error(`Invalid path ${v8}`), d9;
      }
    }, f6), b6 = createMemo(() => v7().pathname), w7 = createMemo(() => v7().search, true), E5 = createMemo(() => v7().hash);
    return { get pathname() {
      return b6();
    }, get search() {
      return w7();
    }, get hash() {
      return E5();
    }, get state() {
      return d8();
    }, get key() {
      return "";
    }, query: J$1(on(w7, () => G3(v7()))) };
  }(N4, W2), Y4 = [], Q4 = createSignal(function() {
    const o5 = getRequestEvent();
    return o5 && o5.router && o5.router.submission ? [o5.router.submission] : [];
  }()), X3 = createMemo(() => "function" == typeof v6.transformUrl ? k3(d7(), v6.transformUrl(Z3.pathname)) : k3(d7(), Z3.pathname)), re3 = J$1(() => {
    const o5 = X3(), d8 = {};
    for (let f6 = 0; f6 < o5.length; f6++)
      Object.assign(d8, o5[f6].params);
    return d8;
  }), se5 = { pattern: I2, path: () => I2, outlet: () => null, resolvePath: (o5) => F2(I2, o5) };
  return createRenderEffect(on(b5, (o5) => ((o6, d8) => {
    d8.value === N4() && d8.state === W2() || (void 0 === U3 && L3(true), Ma = o6, U3 = d8, startTransition(() => {
      U3 === d8 && (q3(U3.value), K3(U3.state));
    }).finally(() => {
      U3 === d8 && batch(() => {
        Ma = void 0, L3(false), U3 = void 0;
      });
    }));
  })("native", o5), { defer: true })), { base: se5, location: Z3, params: re3, isRouting: M2, renderPath: _3, parsePath: S6, navigatorFactory: function(o5) {
    return o5 = o5 || useContext(Ba) || se5, (d8, f6) => function(o6, d9, f7) {
      rn(() => {
        if ("number" == typeof d9)
          return void (d9 && (E4.go ? E4.go(d9) : console.warn("Router integration does not support relative routing")));
        const { replace: v7, resolve: b6, scroll: S7, state: _4 } = { replace: false, resolve: true, scroll: true, ...f7 }, A4 = b6 ? o6.resolvePath(d9) : F2("", d9);
        if (void 0 === A4)
          throw new Error(`Path '${d9}' is not a routable path`);
        if (Y4.length >= 100)
          throw new Error("Too many redirects");
        if (A4 !== N4() || _4 !== W2()) {
          const o7 = getRequestEvent();
          o7 && (o7.response = { status: 302, headers: new Headers({ Location: A4 }) }), w6({ value: A4, replace: v7, scroll: S7, state: _4 });
        }
      });
    }(o5, d8, f6);
  }, matches: X3, beforeLeave: A3, preloadRoute: function(o5, v7 = {}) {
    const b6 = k3(d7(), o5.pathname), w7 = Ma;
    Ma = "preload";
    for (let d8 in b6) {
      const { route: w8, params: E5 } = b6[d8];
      w8.component && w8.component.preload && w8.component.preload();
      const { preload: S7 } = w8;
      v7.preloadData && S7 && runWithOwner(f5(), () => S7({ params: E5, location: { pathname: o5.pathname, search: o5.search, hash: o5.hash, query: G3(o5), state: null, key: "" }, intent: "preload" }));
    }
    Ma = w7;
  }, singleFlight: void 0 === v6.singleFlight || v6.singleFlight, submissions: Q4 };
}
function De3(o4, d7, f5, v6) {
  const { base: b5, location: w6, params: E4 } = o4, { pattern: S6, component: _3, preload: A3 } = v6().route, I2 = createMemo(() => v6().path);
  _3 && _3.preload && _3.preload();
  const M2 = A3 ? A3({ params: E4, location: w6, intent: Ma || "initial" }) : void 0;
  return { parent: d7, pattern: S6, path: I2, outlet: () => _3 ? createComponent(_3, { params: E4, location: w6, data: M2, get children() {
    return f5();
  } }) : f5(), resolvePath: (o5) => F2(b5.path(), o5, I2()) };
}
function ft2() {
  const o4 = [];
  return useAssets(() => ssr(function(o5) {
    return o5.map((o6) => {
      var d7, f5;
      const v6 = Object.keys(o6.props).map((d8) => "children" === d8 ? "" : ` ${d8}="${escape(o6.props[d8], true)}"`).join("");
      let b5 = o6.props.children;
      return Array.isArray(b5) && (b5 = b5.join("")), (null == (d7 = o6.setting) ? void 0 : d7.close) ? `<${o6.tag} data-sm="${o6.id}"${v6}>${(null == (f5 = o6.setting) ? void 0 : f5.escape) ? escape(b5) : b5 || ""}</${o6.tag}>` : `<${o6.tag} data-sm="${o6.id}"${v6}/>`;
    }).join("");
  }(o4))), { addTag(d7) {
    if (-1 !== Wa.indexOf(d7.tag)) {
      const f5 = "title" === d7.tag ? Va : Ka, v6 = O(d7, f5), b5 = o4.findIndex((o5) => o5.tag === d7.tag && O(o5, f5) === v6);
      -1 !== b5 && o4.splice(b5, 1);
    }
    return o4.push(d7), o4.length;
  }, removeTag(o5, d7) {
  } };
}
function vt(o4) {
  const d7 = o4.routerState.location, f5 = o4.routerState.params, v6 = createMemo(() => o4.preload && rn(() => {
    o4.preload({ params: f5, location: d7, intent: Ma || "initial" });
  }));
  return createComponent(Show, { get when() {
    return o4.root;
  }, keyed: true, get fallback() {
    return o4.children;
  }, children: (b5) => createComponent(b5, { params: f5, location: d7, get data() {
    return v6();
  }, get children() {
    return o4.children;
  } }) });
}
function Rt(o4) {
  {
    const d8 = getRequestEvent();
    if (d8 && d8.router && d8.router.dataOnly)
      return void function(o5, d9, f6) {
        const v7 = new URL(o5.request.url), b5 = k3(f6, new URL(o5.router.previousUrl || o5.request.url).pathname), w6 = k3(f6, v7.pathname);
        for (let f7 = 0; f7 < w6.length; f7++) {
          (!b5[f7] || w6[f7].route !== b5[f7].route) && (o5.router.dataOnly = true);
          const { route: v8, params: E4 } = w6[f7];
          v8.preload && v8.preload({ params: E4, location: d9.location, intent: "preload" });
        }
      }(d8, o4.routerState, o4.branches);
    d8 && ((d8.router || (d8.router = {})).matches || (d8.router.matches = o4.routerState.matches().map(({ route: o5, path: d9, params: f6 }) => ({ path: o5.originalPath, pattern: o5.pattern, match: d9, params: f6, info: o5.info }))));
  }
  const d7 = [];
  let f5;
  const v6 = createMemo(on(o4.routerState.matches, (b5, w6, E4) => {
    let S6 = w6 && b5.length === w6.length;
    const _3 = [];
    for (let f6 = 0, A3 = b5.length; f6 < A3; f6++) {
      const A4 = w6 && w6[f6], I2 = b5[f6];
      E4 && A4 && I2.route.key === A4.route.key ? _3[f6] = E4[f6] : (S6 = false, d7[f6] && d7[f6](), createRoot((b6) => {
        d7[f6] = b6, _3[f6] = De3(o4.routerState, _3[f6 - 1] || o4.routerState.base, z(() => v6()[f6 + 1]), () => o4.routerState.matches()[f6]);
      }));
    }
    return d7.splice(b5.length).forEach((o5) => o5()), E4 && S6 ? E4 : (f5 = _3[0], _3);
  }));
  return z(() => v6() && f5)();
}
function Pt(o4) {
  let d7;
  const f5 = o4.url || (d7 = getRequestEvent()) && function(o5) {
    const d8 = new URL(o5);
    return d8.pathname + d8.search;
  }(d7.request.url) || "", v6 = { value: o4.transformUrl ? o4.transformUrl(f5) : f5 };
  return ie2({ signal: [() => v6, (o5) => Object.assign(v6, o5)] })(o4);
}
function Lt(o4) {
  return Pt(o4);
}
function j3(o4, d7) {
  let { tag: f5, attrs: { key: v6, ...b5 } = { key: void 0 }, children: w6 } = o4;
  return Za[f5]({ attrs: { ...b5, nonce: d7 }, key: v6, children: w6 });
}
function It(o4, d7, f5, v6 = "default") {
  return lazy(async () => {
    var f6;
    {
      const b5 = (await o4.import())[v6], w6 = (await (null == (f6 = d7.inputs) ? void 0 : f6[o4.src].assets())).filter((o5) => "style" === o5.tag || "stylesheet" === o5.attrs.rel);
      return { default: (o5) => [...w6.map((o6) => j3(o6)), createComponent(b5, o5)] };
    }
  });
}
function J2(o4, d7, f5) {
  let v6 = true;
  const b5 = d7.split("/");
  let w6 = o4.rootNode, E4 = 0;
  const S6 = [w6];
  for (const o5 of b5) {
    let d8;
    if (d8 = w6.children.get(o5))
      w6 = d8;
    else {
      const f6 = Ut(o5);
      d8 = ce2({ type: f6, parent: w6 }), w6.children.set(o5, d8), f6 === Ya.PLACEHOLDER ? (d8.paramName = "*" === o5 ? "_" + E4++ : o5.slice(1), w6.placeholderChildren.push(d8), v6 = false) : f6 === Ya.WILDCARD && (w6.wildcardChildNode = d8, d8.paramName = o5.slice(3) || "_", v6 = false), S6.push(d8), w6 = d8;
    }
  }
  for (const [o5, d8] of S6.entries())
    d8.maxDepth = Math.max(S6.length - o5, d8.maxDepth || 0);
  return w6.data = f5, true === v6 && (o4.staticRoutesMap[d7] = w6), w6;
}
function ce2(o4 = {}) {
  return { type: o4.type || Ya.NORMAL, maxDepth: 0, parent: o4.parent || null, children: /* @__PURE__ */ new Map(), data: o4.data || null, paramName: o4.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function Ut(o4) {
  return o4.startsWith("**") ? Ya.WILDCARD : ":" === o4[0] || "*" === o4 ? Ya.PLACEHOLDER : Ya.NORMAL;
}
function Vt() {
  return createComponent(Lt, { root: (o4) => createComponent(mt, { get children() {
    return [createComponent(bt, { children: "SolidStart - Basic" }), ssr(Xa, ssrHydrationKey()), ssr(ec, ssrHydrationKey()), createComponent(Suspense, { get children() {
      return createComponent(C3, { get children() {
        return [o4.children, " "];
      } });
    } })];
  } }), get children() {
    return createComponent(Gt, {});
  } });
}
function he3(o4, d7, f5 = []) {
  for (let v6 = 0; v6 < d7.length; v6++) {
    const b5 = d7[v6];
    if (b5.path !== o4[0].path)
      continue;
    let w6 = [...f5, b5];
    if (b5.children) {
      const d8 = o4.slice(1);
      if (0 === d8.length || (w6 = he3(d8, b5.children, w6), !w6))
        continue;
    }
    return w6;
  }
}
function nr(o4) {
  const d7 = getRequestEvent(), f5 = d7.nonce;
  let v6 = [];
  return Promise.resolve().then(async () => {
    let o5 = [];
    if (d7.router && d7.router.matches) {
      const f6 = [...d7.router.matches];
      for (; f6.length && (!f6[0].info || !f6[0].info.filesystem); )
        f6.shift();
      const v7 = f6.length && he3(f6, d7.routes);
      if (v7) {
        const d8 = globalThis.MANIFEST.client.inputs;
        for (let f7 = 0; f7 < v7.length; f7++) {
          const b5 = d8[v7[f7].$component.src];
          o5.push(b5.assets());
        }
      }
    }
    v6 = await Promise.all(o5).then((o6) => [...new Map(o6.flat().map((o7) => [o7.attrs.key, o7])).values()].filter((o7) => "modulepreload" === o7.attrs.rel && !d7.assets.find((d8) => d8.attrs.key === o7.attrs.key)));
  }), useAssets(() => v6.length ? v6.map((o5) => j3(o5)) : void 0), createComponent(NoHydration, { get children() {
    return [oc, createComponent(Zt, { get children() {
      return createComponent(o4.document, { get assets() {
        return [createComponent(HydrationScript, {}), d7.assets.map((o5) => j3(o5, f5))];
      }, get scripts() {
        return f5 ? [ssr(sc, ssrHydrationKey() + ssrAttribute("nonce", escape(f5, true), false), `window.manifest = ${JSON.stringify(d7.manifest)}`), ssr(nc, ssrHydrationKey(), ssrAttribute("nonce", escape(f5, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(sc, ssrHydrationKey(), `window.manifest = ${JSON.stringify(d7.manifest)}`), ssr(ic, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
      }, get children() {
        return createComponent(Hydration, { get children() {
          return createComponent(Xt, { get children() {
            return createComponent(Vt, {});
          } });
        } });
      } });
    } })];
  } });
}
function or(o4) {
  let d7;
  const f5 = cc(o4), v6 = { duplex: "half", method: o4.method, headers: o4.headers };
  return o4.node.req.body instanceof ArrayBuffer ? new Request(f5, { ...v6, body: o4.node.req.body }) : new Request(f5, { ...v6, get body() {
    return d7 || (d7 = Ec(o4), d7);
  } });
}
function ar() {
  return x("nitro-app", { asyncContext: !!(null == (d7 = globalThis.app.config.server.experimental) ? void 0 : d7.asyncContext), AsyncLocalStorage: o3 }).use().event;
  var d7;
}
function g5(o4) {
  return function(...d7) {
    var f5;
    let v6 = d7[0];
    if (function(o5) {
      return "object" == typeof o5 && (o5 instanceof H3Event || (null == o5 ? void 0 : o5[ac]) instanceof H3Event || true === (null == o5 ? void 0 : o5.__is_event__));
    }(v6))
      d7[0] = v6 instanceof H3Event || v6.__is_event__ ? v6 : v6[ac];
    else {
      if (!(null == (f5 = globalThis.app.config.server.experimental) ? void 0 : f5.asyncContext))
        throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (v6 = ar(), !v6)
        throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      d7.unshift(v6);
    }
    return o4(...d7);
  };
}
function Rr(o4) {
  if (!o4[_c]) {
    const d7 = function(o5) {
      return { request: Sc(o5), response: Er(o5), clientAddress: lc(o5), locals: {}, nativeEvent: o5 };
    }(o4);
    o4[_c] = d7;
  }
  return o4[_c];
}
function Er(o4) {
  return { get status() {
    return dc(o4);
  }, set status(d7) {
    uc(o4, d7);
  }, get statusText() {
    return hc(o4);
  }, set statusText(d7) {
    uc(o4, dc(o4), d7);
  }, headers: new Sr(o4) };
}
function $r(o4) {
  const d7 = vc(o4.nativeEvent, "flash");
  if (!d7)
    return;
  let f5 = JSON.parse(d7);
  if (!f5 || !f5.result)
    return;
  const v6 = [...f5.input.slice(0, -1), new Map(f5.input[f5.input.length - 1])];
  bc(o4.nativeEvent, "flash", "", { maxAge: 0 });
  const b5 = f5.error ? new Error(f5.result) : f5.result;
  return { input: v6, url: f5.url, pending: false, result: f5.thrown ? void 0 : b5, error: f5.thrown ? b5 : void 0 };
}
async function Cr(o4) {
  const d7 = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, o4.response.headers.set("Content-Type", "text/html"), Object.assign(o4, { manifest: await d7.json(), assets: [...await d7.inputs[d7.handler].assets()], router: { submission: $r(o4) }, routes: Qa.map(function e(o5) {
    return { ...o5, ...o5.$$route ? o5.$$route.require().route : void 0, info: { ...o5.$$route ? o5.$$route.require().route.info : {}, filesystem: true }, component: o5.$component && It(o5.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: o5.children ? o5.children.map(e) : void 0 };
  }), complete: false, $islands: /* @__PURE__ */ new Set() });
}
function D(o4) {
  return o4.status && Ac.has(o4.status) ? o4.status : 302;
}
function Ar(o4, d7, f5 = {}) {
  return Ur({ handler: (v6) => {
    const b5 = Rr(v6);
    return provideRequestEvent(b5, async () => {
      const w6 = function(o5, d8) {
        const f6 = Ja.lookup(o5);
        if (f6 && f6.route) {
          const o6 = f6.route[`$${d8}`];
          return void 0 === o6 ? void 0 : { handler: o6, params: f6.params };
        }
      }(new URL(b5.request.url).pathname, b5.request.method);
      if (w6) {
        const o5 = (await w6.handler.import())[b5.request.method];
        b5.params = w6.params || {}, sn.context = { event: b5 };
        const d8 = await o5(b5);
        if (void 0 !== d8)
          return d8;
        if ("GET" !== b5.request.method)
          throw new Error(`API handler for ${b5.request.method} "${b5.request.url}" did not return a response.`);
      }
      const E4 = await d7(b5), S6 = "function" == typeof f5 ? await f5(E4) : { ...f5 }, _3 = S6.mode || "stream";
      if (S6.nonce && (E4.nonce = S6.nonce), "sync" === _3) {
        const d8 = renderToString(() => (sn.context.event = E4, o4(E4)), S6);
        if (E4.complete = true, E4.response && E4.response.headers.get("Location")) {
          const o5 = D(E4.response);
          return yc(v6, E4.response.headers.get("Location"), o5);
        }
        return d8;
      }
      if (S6.onCompleteAll) {
        const o5 = S6.onCompleteAll;
        S6.onCompleteAll = (d8) => {
          te2(E4)(d8), o5(d8);
        };
      } else
        S6.onCompleteAll = te2(E4);
      if (S6.onCompleteShell) {
        const o5 = S6.onCompleteShell;
        S6.onCompleteShell = (d8) => {
          ee2(E4, v6)(), o5(d8);
        };
      } else
        S6.onCompleteShell = ee2(E4, v6);
      const A3 = function(o5, d8 = {}) {
        let f6, { nonce: v7, onCompleteShell: b6, onCompleteAll: w7, renderId: E5, noScripts: S7 } = d8;
        const _4 = [], pushTask = (o6) => {
          S7 || (N4 || q3 || (N4 = getLocalHeaderScript(E5)), N4 += o6 + ";", !Y4 && q3 && (Y4 = setTimeout(writeTasks)));
        }, A4 = createSerializer({ scopeId: d8.renderId, onData: pushTask, onDone: () => {
          writeTasks(), doShell(), w7 && w7({ write(o6) {
            !W2 && Q4.write(o6);
          } }), L3 && L3.end(), W2 = true, q3 && f6();
        }, onError: d8.onError }), flushEnd = () => {
          I3.size || queue(() => queue(() => A4.flush()));
        }, I3 = /* @__PURE__ */ new Map(), writeTasks = () => {
          N4.length && !W2 && q3 && (Q4.write(`<script${v7 ? ` nonce="${v7}"` : ""}>${N4}<\/script>`), N4 = ""), Y4 && clearTimeout(Y4), Y4 = null;
        };
        let M3, L3, U3 = "", N4 = "", q3 = false, W2 = false, K3 = false, Z3 = false, Y4 = null, Q4 = { write(o6) {
          U3 += o6;
        } };
        sn.context = M3 = { id: E5 || "", count: 0, async: true, resources: {}, lazy: {}, suspense: {}, assets: [], nonce: v7, block(o6) {
          q3 || _4.push(o6);
        }, replace(o6, d9) {
          if (q3)
            return;
          const f7 = `<!--!$${o6}-->`, v8 = X3.indexOf(f7);
          if (-1 === v8)
            return;
          const b7 = X3.indexOf(`<!--!$/${o6}-->`, v8 + f7.length);
          X3 = X3.replace(X3.slice(v8, b7 + f7.length + 1), resolveSSRNode(d9()));
        }, serialize(o6, d9, f7) {
          const v8 = sn.context.noHydrate;
          !q3 && f7 && "object" == typeof d9 && "then" in d9 ? (_4.push(d9), !v8 && d9.then((d10) => {
            A4.write(o6, d10);
          }).catch((d10) => {
            A4.write(o6, d10);
          })) : v8 || A4.write(o6, d9);
        }, roots: 0, nextRoot() {
          return this.renderId + "i-" + this.roots++;
        }, registerFragment(o6) {
          if (!I3.has(o6)) {
            let d9, f7;
            const v8 = new Promise((o7, v9) => (d9 = o7, f7 = v9));
            I3.set(o6, (o7) => queue(() => queue(() => {
              o7 ? f7(o7) : d9(true), queue(flushEnd);
            }))), A4.write(o6, v8);
          }
          return (d9, f7) => {
            if (I3.has(o6)) {
              const v8 = I3.get(o6);
              if (I3.delete(o6), function(o7, d10) {
                for (const f8 of [...o7.keys()].reverse())
                  if (d10.startsWith(f8))
                    return true;
                return false;
              }(I3, o6))
                return void v8();
              W2 || (q3 ? (Q4.write(`<template id="${o6}">${void 0 !== d9 ? d9 : " "}</template>`), pushTask(`$df("${o6}")${Z3 ? "" : ";" + Ai}`), v8(f7), Z3 = true) : (queue(() => X3 = function(o7, d10, f8) {
                const v9 = `<template id="pl-${d10}">`, b7 = `<!--pl-${d10}-->`, w8 = o7.indexOf(v9);
                if (-1 === w8)
                  return o7;
                const E6 = o7.indexOf(b7, w8 + v9.length);
                return o7.slice(0, w8) + f8 + o7.slice(E6 + b7.length);
              }(X3, o6, void 0 !== d9 ? d9 : "")), v8(f7)));
            }
            return q3;
          };
        } };
        let X3 = createRoot((d9) => (f6 = d9, resolveSSRNode(escape(o5()))));
        function doShell() {
          K3 || (sn.context = M3, M3.noHydrate = true, X3 = injectAssets(M3.assets, X3), N4.length && (X3 = injectScripts(X3, N4, v7)), Q4.write(X3), N4 = "", b6 && b6({ write(o6) {
            !W2 && Q4.write(o6);
          } }), K3 = true);
        }
        return { then(o6) {
          function complete() {
            f6(), o6(U3);
          }
          if (w7) {
            let o7 = w7;
            w7 = (d9) => {
              o7(d9), complete();
            };
          } else
            w7 = complete;
          queue(flushEnd);
        }, pipe(o6) {
          allSettled(_4).then(() => {
            setTimeout(() => {
              doShell(), Q4 = L3 = o6, Q4.write(U3), q3 = true, W2 ? (f6(), L3.end()) : flushEnd();
            });
          });
        }, pipeTo: (o6) => allSettled(_4).then(() => {
          let d9;
          const v8 = new Promise((o7) => d9 = o7);
          return setTimeout(() => {
            doShell();
            const v9 = new TextEncoder(), b7 = o6.getWriter();
            L3 = { end() {
              b7.releaseLock(), o6.close(), d9();
            } }, Q4 = { write(o7) {
              b7.write(v9.encode(o7));
            } }, Q4.write(U3), q3 = true, W2 ? (f6(), L3.end()) : flushEnd();
          }), v8;
        }) };
      }(() => (sn.context.event = E4, o4(E4)), S6);
      if (E4.response && E4.response.headers.get("Location")) {
        const o5 = D(E4.response);
        return yc(v6, E4.response.headers.get("Location"), o5);
      }
      if ("async" === _3)
        return A3;
      const { writable: I2, readable: M2 } = new TransformStream();
      return A3.pipeTo(I2), M2;
    });
  } });
}
function ee2(o4, d7) {
  return () => {
    if (o4.response && o4.response.headers.get("Location")) {
      const f5 = D(o4.response);
      uc(d7, f5), wc(d7, "Location", o4.response.headers.get("Location"));
    }
  };
}
function te2(o4) {
  return ({ write: d7 }) => {
    o4.complete = true;
    const f5 = o4.response && o4.response.headers.get("Location");
    f5 && d7(`<script>window.location="${f5}"<\/script>`);
  };
}
function hasReqHeader(o4, d7, f5) {
  const v6 = getRequestHeader(o4, d7);
  return v6 && "string" == typeof v6 && v6.toLowerCase().includes(f5);
}
function joinHeaders(o4) {
  return Array.isArray(o4) ? o4.join(", ") : String(o4);
}
function normalizeCookieHeader(o4 = "") {
  return splitCookiesString(joinHeaders(o4));
}
function normalizeCookieHeaders(o4) {
  const d7 = new Headers();
  for (const [f5, v6] of o4)
    if ("set-cookie" === f5)
      for (const o5 of normalizeCookieHeader(v6))
        d7.append("set-cookie", o5);
    else
      d7.set(f5, joinHeaders(v6));
  return d7;
}
var d6, f4, v5, b4, w5, E3, S5, _2, A2, I, M, fn, L2, U2, N3, q2, _getEnv$1, W, K2, Z2, Y3, Q3, X2, re2, se4, ne2, ae2, le2, ue2, fe2, pe3, ge2, me2, ye2, be2, xe2, Ae3, $e3, Ie2, ze2, Te3, Pe2, Ne2, He2, qe2, We2, Ve2, Ke2, Ze2, Ye2, Ge2, Je2, et2, tt2, rt2, st2, nt2, it2, ot2, at2, ct2, lt2, ut2, dt2, ht2, pt2, yt, wt, Et, xt, St, _t, At, $t, kt, zt, jt, Tt, Ct, Ot, Bt, Mt, Nt, Ft, Dt, Ht, qt, Wt, Kt, Yt, Qt, Jt, WordArray, er, tr, rr, sr, BufferedBlockAlgorithm, Hasher, ir, cr, lr, SHA256, ur, dr, hr, fr, defu, pr, gr, mr, yr, _Readable, vr, br, wr, xr, _r, Socket, IncomingMessage, ServerResponse, kr, __publicField$2, H3Error, Ir, zr, jr, Tr, Pr, setHeaders, Or, Br, Mr, Lr, __publicField$1, H3Event, Ur, lazyEventHandler, Nr, Fr, Dr, Hr, qr, Wr, Vr, Kr, Zr, Yr, _getEnv, Gr, Qr, Jr, FetchError, Xr, rs, ns, is, os, as, cs, ls, us, ds, hs, fs, Hookable, ps, gs, ms, ys, vs, Es, xs, Ss, _s, Rs, memory, ks, normalizeKey, Is, js, Ts, cachedFunction, cachedEventHandler, Cs, Ps, Bs, Ms, Ls, Us, Ns, Fs, Ds, Hs, qs, Ws, InvariantError, Vs, Ks, Zs, Ys, normalize, join, isAbsolute, Gs, pathToFileURL, Qs, Js, errorHandler, Xs, en, tn, createRenderEffect, rn, sn, nn, an, cn, ln, un, dn, hn, pn, gn, mn, yn, vn, bn, wn, En, xn, Sn, _n, An, $n, Rn, kn, In, zn, jn, Tn, Cn, Pn, On, Bn, Mn, Ln, Un, Nn, Fn, Dn, Hn, qn, Wn, Vn, Kn, Zn, Yn, Gn, Qn, Jn, Xn, ei, ri, si, ni, ii, oi, ai, ci, li, ui, di, hi, fi, pi, gi, mi, yi, vi, bi, wi, Ei, xi, Si, _i, Ai, $i, ki, Ii, zi, ji, Ti, Ci, Pi, Oi, Bi, Mi, Li, Ui, Ni, Fi, Di, Hi, qi, Wi, Vi, Ki, Zi, Yi, Gi, Qi, Ji, Xi, eo, to, ro, so, no, io, oo, ao, co, lo, uo, ho, fo, po, go, mo, yo, vo, bo, wo, Eo, xo, So, _o, Ao, $o, Ro, ko, Io, zo, jo, To, Co, Po, Oo, Bo, Mo, Lo, Uo, No, Fo, Do, Ho, qo, Wo, Vo, Ko, Zo, Yo, Go, es, Qo, Jo, Xo, ea, ta, ra, sa, na, ia, oa, aa, ca, la, ua, da, ha, fa, pa, ga, ma, oe2, ya, zs, va, ba, wa, Ea, ti, xa, Sa, _a, AuthError, SignInError, AdapterError, AccessDenied, CallbackRouteError, ErrorPageLoop, EventError, InvalidCallbackUrl, CredentialsSignin, InvalidEndpoints, InvalidCheck, JWTSessionError, MissingAdapter, MissingAdapterMethods, MissingAuthorize, MissingSecret, OAuthAccountNotLinked, OAuthCallbackError, OAuthProfileParseError, SessionTokenError, SignOutError, UnknownAction, UnsupportedStrategy, InvalidProvider, UntrustedHost, Verification, MissingCSRF, Aa, DuplicateConditionalUI, MissingWebAuthnAutocomplete, WebAuthnVerificationError, AccountNotLinked, ExperimentalFeatureNotEnabled, $a, Ra, ka, Ia, p5, u$1, E$2, za, ja, d$1, Ta, Ca, Pa, Oa, Ba, V4, je3, _e4, Ma, La, Ua, Na, x, Fa, Da, Ha, __publicField, qa, Wa, Va, Ka, O, mt, gt, bt, ie2, z, Za, Ya, Ga, Qa, Ja, Gt, Xa, ec, de2, tc, rc, Xt, Zt, sc, nc, ic, oc, ac, cc, lc, uc, dc, hc, fc, pc, gc, mc, yc, vc, bc, wc, Ec, xc, Sc, _c, Sr, Ac, $c, Rc, kc, Ic, zc, useNitroApp, jc, Tc, Cc, Pc;
var init_runtime = __esm({
  ".wrangler/tmp/pages-9PkRin/chunks/runtime.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    d6 = [];
    f4 = [];
    v5 = "undefined" == typeof Uint8Array ? Array : Uint8Array;
    b4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (let o4 = 0, v6 = 64; o4 < v6; ++o4)
      d6[o4] = b4[o4], f4[b4.charCodeAt(o4)] = o4;
    f4["-".charCodeAt(0)] = 62, f4["_".charCodeAt(0)] = 63;
    w5 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    E3 = 2147483647;
    Buffer$1.TYPED_ARRAY_SUPPORT = function() {
      try {
        const o4 = new Uint8Array(1), d7 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(d7, Uint8Array.prototype), Object.setPrototypeOf(o4, d7), 42 === o4.foo();
      } catch {
        return false;
      }
    }(), Buffer$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Buffer$1.prototype, "parent", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.buffer;
    } }), Object.defineProperty(Buffer$1.prototype, "offset", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.byteOffset;
    } }), Buffer$1.poolSize = 8192, Buffer$1.from = function(o4, d7, f5) {
      return from(o4, d7, f5);
    }, Object.setPrototypeOf(Buffer$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(Buffer$1, Uint8Array), Buffer$1.alloc = function(o4, d7, f5) {
      return function(o5, d8, f6) {
        return assertSize(o5), o5 <= 0 ? createBuffer(o5) : void 0 !== d8 ? "string" == typeof f6 ? createBuffer(o5).fill(d8, f6) : createBuffer(o5).fill(d8) : createBuffer(o5);
      }(o4, d7, f5);
    }, Buffer$1.allocUnsafe = function(o4) {
      return allocUnsafe(o4);
    }, Buffer$1.allocUnsafeSlow = function(o4) {
      return allocUnsafe(o4);
    }, Buffer$1.isBuffer = function(o4) {
      return null != o4 && true === o4._isBuffer && o4 !== Buffer$1.prototype;
    }, Buffer$1.compare = function(o4, d7) {
      if (isInstance(o4, Uint8Array) && (o4 = Buffer$1.from(o4, o4.offset, o4.byteLength)), isInstance(d7, Uint8Array) && (d7 = Buffer$1.from(d7, d7.offset, d7.byteLength)), !Buffer$1.isBuffer(o4) || !Buffer$1.isBuffer(d7))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (o4 === d7)
        return 0;
      let f5 = o4.length, v6 = d7.length;
      for (let b5 = 0, w6 = Math.min(f5, v6); b5 < w6; ++b5)
        if (o4[b5] !== d7[b5]) {
          f5 = o4[b5], v6 = d7[b5];
          break;
        }
      return f5 < v6 ? -1 : v6 < f5 ? 1 : 0;
    }, Buffer$1.isEncoding = function(o4) {
      switch (String(o4).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, Buffer$1.concat = function(o4, d7) {
      if (!Array.isArray(o4))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === o4.length)
        return Buffer$1.alloc(0);
      let f5;
      if (void 0 === d7)
        for (d7 = 0, f5 = 0; f5 < o4.length; ++f5)
          d7 += o4[f5].length;
      const v6 = Buffer$1.allocUnsafe(d7);
      let b5 = 0;
      for (f5 = 0; f5 < o4.length; ++f5) {
        let d8 = o4[f5];
        if (isInstance(d8, Uint8Array))
          b5 + d8.length > v6.length ? (Buffer$1.isBuffer(d8) || (d8 = Buffer$1.from(d8.buffer, d8.byteOffset, d8.byteLength)), d8.copy(v6, b5)) : Uint8Array.prototype.set.call(v6, d8, b5);
        else {
          if (!Buffer$1.isBuffer(d8))
            throw new TypeError('"list" argument must be an Array of Buffers');
          d8.copy(v6, b5);
        }
        b5 += d8.length;
      }
      return v6;
    }, Buffer$1.byteLength = byteLength, Buffer$1.prototype._isBuffer = true, Buffer$1.prototype.swap16 = function() {
      const o4 = this.length;
      if (o4 % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let d7 = 0; d7 < o4; d7 += 2)
        swap(this, d7, d7 + 1);
      return this;
    }, Buffer$1.prototype.swap32 = function() {
      const o4 = this.length;
      if (o4 % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let d7 = 0; d7 < o4; d7 += 4)
        swap(this, d7, d7 + 3), swap(this, d7 + 1, d7 + 2);
      return this;
    }, Buffer$1.prototype.swap64 = function() {
      const o4 = this.length;
      if (o4 % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let d7 = 0; d7 < o4; d7 += 8)
        swap(this, d7, d7 + 7), swap(this, d7 + 1, d7 + 6), swap(this, d7 + 2, d7 + 5), swap(this, d7 + 3, d7 + 4);
      return this;
    }, Buffer$1.prototype.toString = function() {
      const o4 = this.length;
      return 0 === o4 ? "" : 0 === arguments.length ? utf8Slice(this, 0, o4) : Reflect.apply(slowToString, this, arguments);
    }, Buffer$1.prototype.toLocaleString = Buffer$1.prototype.toString, Buffer$1.prototype.equals = function(o4) {
      if (!Buffer$1.isBuffer(o4))
        throw new TypeError("Argument must be a Buffer");
      return this === o4 || 0 === Buffer$1.compare(this, o4);
    }, Buffer$1.prototype.inspect = function() {
      let o4 = "";
      return o4 = this.toString("hex", 0, 50).replace(/(.{2})/g, "$1 ").trim(), this.length > 50 && (o4 += " ... "), "<Buffer " + o4 + ">";
    }, w5 && (Buffer$1.prototype[w5] = Buffer$1.prototype.inspect), Buffer$1.prototype.compare = function(o4, d7, f5, v6, b5) {
      if (isInstance(o4, Uint8Array) && (o4 = Buffer$1.from(o4, o4.offset, o4.byteLength)), !Buffer$1.isBuffer(o4))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o4);
      if (void 0 === d7 && (d7 = 0), void 0 === f5 && (f5 = o4 ? o4.length : 0), void 0 === v6 && (v6 = 0), void 0 === b5 && (b5 = this.length), d7 < 0 || f5 > o4.length || v6 < 0 || b5 > this.length)
        throw new RangeError("out of range index");
      if (v6 >= b5 && d7 >= f5)
        return 0;
      if (v6 >= b5)
        return -1;
      if (d7 >= f5)
        return 1;
      if (this === o4)
        return 0;
      let w6 = (b5 >>>= 0) - (v6 >>>= 0), E4 = (f5 >>>= 0) - (d7 >>>= 0);
      const S6 = Math.min(w6, E4), _3 = this.slice(v6, b5), A3 = o4.slice(d7, f5);
      for (let o5 = 0; o5 < S6; ++o5)
        if (_3[o5] !== A3[o5]) {
          w6 = _3[o5], E4 = A3[o5];
          break;
        }
      return w6 < E4 ? -1 : E4 < w6 ? 1 : 0;
    }, Buffer$1.prototype.includes = function(o4, d7, f5) {
      return -1 !== this.indexOf(o4, d7, f5);
    }, Buffer$1.prototype.indexOf = function(o4, d7, f5) {
      return bidirectionalIndexOf(this, o4, d7, f5, true);
    }, Buffer$1.prototype.lastIndexOf = function(o4, d7, f5) {
      return bidirectionalIndexOf(this, o4, d7, f5, false);
    }, Buffer$1.prototype.write = function(o4, d7, f5, v6) {
      if (void 0 === d7)
        v6 = "utf8", f5 = this.length, d7 = 0;
      else if (void 0 === f5 && "string" == typeof d7)
        v6 = d7, f5 = this.length, d7 = 0;
      else {
        if (!Number.isFinite(d7))
          throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        d7 >>>= 0, Number.isFinite(f5) ? (f5 >>>= 0, void 0 === v6 && (v6 = "utf8")) : (v6 = f5, f5 = void 0);
      }
      const b5 = this.length - d7;
      if ((void 0 === f5 || f5 > b5) && (f5 = b5), o4.length > 0 && (f5 < 0 || d7 < 0) || d7 > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      v6 || (v6 = "utf8");
      let w6 = false;
      for (; ; )
        switch (v6) {
          case "hex":
            return hexWrite(this, o4, d7, f5);
          case "utf8":
          case "utf-8":
            return utf8Write(this, o4, d7, f5);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, o4, d7, f5);
          case "base64":
            return base64Write(this, o4, d7, f5);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, o4, d7, f5);
          default:
            if (w6)
              throw new TypeError("Unknown encoding: " + v6);
            v6 = ("" + v6).toLowerCase(), w6 = true;
        }
    }, Buffer$1.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    S5 = 4096;
    Buffer$1.prototype.slice = function(o4, d7) {
      const f5 = this.length;
      (o4 = Math.trunc(o4)) < 0 ? (o4 += f5) < 0 && (o4 = 0) : o4 > f5 && (o4 = f5), (d7 = void 0 === d7 ? f5 : Math.trunc(d7)) < 0 ? (d7 += f5) < 0 && (d7 = 0) : d7 > f5 && (d7 = f5), d7 < o4 && (d7 = o4);
      const v6 = this.subarray(o4, d7);
      return Object.setPrototypeOf(v6, Buffer$1.prototype), v6;
    }, Buffer$1.prototype.readUintLE = Buffer$1.prototype.readUIntLE = function(o4, d7, f5) {
      o4 >>>= 0, d7 >>>= 0, f5 || checkOffset(o4, d7, this.length);
      let v6 = this[o4], b5 = 1, w6 = 0;
      for (; ++w6 < d7 && (b5 *= 256); )
        v6 += this[o4 + w6] * b5;
      return v6;
    }, Buffer$1.prototype.readUintBE = Buffer$1.prototype.readUIntBE = function(o4, d7, f5) {
      o4 >>>= 0, d7 >>>= 0, f5 || checkOffset(o4, d7, this.length);
      let v6 = this[o4 + --d7], b5 = 1;
      for (; d7 > 0 && (b5 *= 256); )
        v6 += this[o4 + --d7] * b5;
      return v6;
    }, Buffer$1.prototype.readUint8 = Buffer$1.prototype.readUInt8 = function(o4, d7) {
      return o4 >>>= 0, d7 || checkOffset(o4, 1, this.length), this[o4];
    }, Buffer$1.prototype.readUint16LE = Buffer$1.prototype.readUInt16LE = function(o4, d7) {
      return o4 >>>= 0, d7 || checkOffset(o4, 2, this.length), this[o4] | this[o4 + 1] << 8;
    }, Buffer$1.prototype.readUint16BE = Buffer$1.prototype.readUInt16BE = function(o4, d7) {
      return o4 >>>= 0, d7 || checkOffset(o4, 2, this.length), this[o4] << 8 | this[o4 + 1];
    }, Buffer$1.prototype.readUint32LE = Buffer$1.prototype.readUInt32LE = function(o4, d7) {
      return o4 >>>= 0, d7 || checkOffset(o4, 4, this.length), (this[o4] | this[o4 + 1] << 8 | this[o4 + 2] << 16) + 16777216 * this[o4 + 3];
    }, Buffer$1.prototype.readUint32BE = Buffer$1.prototype.readUInt32BE = function(o4, d7) {
      return o4 >>>= 0, d7 || checkOffset(o4, 4, this.length), 16777216 * this[o4] + (this[o4 + 1] << 16 | this[o4 + 2] << 8 | this[o4 + 3]);
    }, Buffer$1.prototype.readBigUInt64LE = defineBigIntMethod(function(o4) {
      validateNumber(o4 >>>= 0, "offset");
      const d7 = this[o4], f5 = this[o4 + 7];
      void 0 !== d7 && void 0 !== f5 || boundsError(o4, this.length - 8);
      const v6 = d7 + 256 * this[++o4] + 65536 * this[++o4] + this[++o4] * 2 ** 24, b5 = this[++o4] + 256 * this[++o4] + 65536 * this[++o4] + f5 * 2 ** 24;
      return BigInt(v6) + (BigInt(b5) << BigInt(32));
    }), Buffer$1.prototype.readBigUInt64BE = defineBigIntMethod(function(o4) {
      validateNumber(o4 >>>= 0, "offset");
      const d7 = this[o4], f5 = this[o4 + 7];
      void 0 !== d7 && void 0 !== f5 || boundsError(o4, this.length - 8);
      const v6 = d7 * 2 ** 24 + 65536 * this[++o4] + 256 * this[++o4] + this[++o4], b5 = this[++o4] * 2 ** 24 + 65536 * this[++o4] + 256 * this[++o4] + f5;
      return (BigInt(v6) << BigInt(32)) + BigInt(b5);
    }), Buffer$1.prototype.readIntLE = function(o4, d7, f5) {
      o4 >>>= 0, d7 >>>= 0, f5 || checkOffset(o4, d7, this.length);
      let v6 = this[o4], b5 = 1, w6 = 0;
      for (; ++w6 < d7 && (b5 *= 256); )
        v6 += this[o4 + w6] * b5;
      return b5 *= 128, v6 >= b5 && (v6 -= Math.pow(2, 8 * d7)), v6;
    }, Buffer$1.prototype.readIntBE = function(o4, d7, f5) {
      o4 >>>= 0, d7 >>>= 0, f5 || checkOffset(o4, d7, this.length);
      let v6 = d7, b5 = 1, w6 = this[o4 + --v6];
      for (; v6 > 0 && (b5 *= 256); )
        w6 += this[o4 + --v6] * b5;
      return b5 *= 128, w6 >= b5 && (w6 -= Math.pow(2, 8 * d7)), w6;
    }, Buffer$1.prototype.readInt8 = function(o4, d7) {
      return o4 >>>= 0, d7 || checkOffset(o4, 1, this.length), 128 & this[o4] ? -1 * (255 - this[o4] + 1) : this[o4];
    }, Buffer$1.prototype.readInt16LE = function(o4, d7) {
      o4 >>>= 0, d7 || checkOffset(o4, 2, this.length);
      const f5 = this[o4] | this[o4 + 1] << 8;
      return 32768 & f5 ? 4294901760 | f5 : f5;
    }, Buffer$1.prototype.readInt16BE = function(o4, d7) {
      o4 >>>= 0, d7 || checkOffset(o4, 2, this.length);
      const f5 = this[o4 + 1] | this[o4] << 8;
      return 32768 & f5 ? 4294901760 | f5 : f5;
    }, Buffer$1.prototype.readInt32LE = function(o4, d7) {
      return o4 >>>= 0, d7 || checkOffset(o4, 4, this.length), this[o4] | this[o4 + 1] << 8 | this[o4 + 2] << 16 | this[o4 + 3] << 24;
    }, Buffer$1.prototype.readInt32BE = function(o4, d7) {
      return o4 >>>= 0, d7 || checkOffset(o4, 4, this.length), this[o4] << 24 | this[o4 + 1] << 16 | this[o4 + 2] << 8 | this[o4 + 3];
    }, Buffer$1.prototype.readBigInt64LE = defineBigIntMethod(function(o4) {
      validateNumber(o4 >>>= 0, "offset");
      const d7 = this[o4], f5 = this[o4 + 7];
      void 0 !== d7 && void 0 !== f5 || boundsError(o4, this.length - 8);
      const v6 = this[o4 + 4] + 256 * this[o4 + 5] + 65536 * this[o4 + 6] + (f5 << 24);
      return (BigInt(v6) << BigInt(32)) + BigInt(d7 + 256 * this[++o4] + 65536 * this[++o4] + this[++o4] * 2 ** 24);
    }), Buffer$1.prototype.readBigInt64BE = defineBigIntMethod(function(o4) {
      validateNumber(o4 >>>= 0, "offset");
      const d7 = this[o4], f5 = this[o4 + 7];
      void 0 !== d7 && void 0 !== f5 || boundsError(o4, this.length - 8);
      const v6 = (d7 << 24) + 65536 * this[++o4] + 256 * this[++o4] + this[++o4];
      return (BigInt(v6) << BigInt(32)) + BigInt(this[++o4] * 2 ** 24 + 65536 * this[++o4] + 256 * this[++o4] + f5);
    }), Buffer$1.prototype.readFloatLE = function(o4, d7) {
      return o4 >>>= 0, d7 || checkOffset(o4, 4, this.length), read(this, o4, true, 23, 4);
    }, Buffer$1.prototype.readFloatBE = function(o4, d7) {
      return o4 >>>= 0, d7 || checkOffset(o4, 4, this.length), read(this, o4, false, 23, 4);
    }, Buffer$1.prototype.readDoubleLE = function(o4, d7) {
      return o4 >>>= 0, d7 || checkOffset(o4, 8, this.length), read(this, o4, true, 52, 8);
    }, Buffer$1.prototype.readDoubleBE = function(o4, d7) {
      return o4 >>>= 0, d7 || checkOffset(o4, 8, this.length), read(this, o4, false, 52, 8);
    }, Buffer$1.prototype.writeUintLE = Buffer$1.prototype.writeUIntLE = function(o4, d7, f5, v6) {
      if (o4 = +o4, d7 >>>= 0, f5 >>>= 0, !v6) {
        checkInt(this, o4, d7, f5, Math.pow(2, 8 * f5) - 1, 0);
      }
      let b5 = 1, w6 = 0;
      for (this[d7] = 255 & o4; ++w6 < f5 && (b5 *= 256); )
        this[d7 + w6] = o4 / b5 & 255;
      return d7 + f5;
    }, Buffer$1.prototype.writeUintBE = Buffer$1.prototype.writeUIntBE = function(o4, d7, f5, v6) {
      if (o4 = +o4, d7 >>>= 0, f5 >>>= 0, !v6) {
        checkInt(this, o4, d7, f5, Math.pow(2, 8 * f5) - 1, 0);
      }
      let b5 = f5 - 1, w6 = 1;
      for (this[d7 + b5] = 255 & o4; --b5 >= 0 && (w6 *= 256); )
        this[d7 + b5] = o4 / w6 & 255;
      return d7 + f5;
    }, Buffer$1.prototype.writeUint8 = Buffer$1.prototype.writeUInt8 = function(o4, d7, f5) {
      return o4 = +o4, d7 >>>= 0, f5 || checkInt(this, o4, d7, 1, 255, 0), this[d7] = 255 & o4, d7 + 1;
    }, Buffer$1.prototype.writeUint16LE = Buffer$1.prototype.writeUInt16LE = function(o4, d7, f5) {
      return o4 = +o4, d7 >>>= 0, f5 || checkInt(this, o4, d7, 2, 65535, 0), this[d7] = 255 & o4, this[d7 + 1] = o4 >>> 8, d7 + 2;
    }, Buffer$1.prototype.writeUint16BE = Buffer$1.prototype.writeUInt16BE = function(o4, d7, f5) {
      return o4 = +o4, d7 >>>= 0, f5 || checkInt(this, o4, d7, 2, 65535, 0), this[d7] = o4 >>> 8, this[d7 + 1] = 255 & o4, d7 + 2;
    }, Buffer$1.prototype.writeUint32LE = Buffer$1.prototype.writeUInt32LE = function(o4, d7, f5) {
      return o4 = +o4, d7 >>>= 0, f5 || checkInt(this, o4, d7, 4, 4294967295, 0), this[d7 + 3] = o4 >>> 24, this[d7 + 2] = o4 >>> 16, this[d7 + 1] = o4 >>> 8, this[d7] = 255 & o4, d7 + 4;
    }, Buffer$1.prototype.writeUint32BE = Buffer$1.prototype.writeUInt32BE = function(o4, d7, f5) {
      return o4 = +o4, d7 >>>= 0, f5 || checkInt(this, o4, d7, 4, 4294967295, 0), this[d7] = o4 >>> 24, this[d7 + 1] = o4 >>> 16, this[d7 + 2] = o4 >>> 8, this[d7 + 3] = 255 & o4, d7 + 4;
    }, Buffer$1.prototype.writeBigUInt64LE = defineBigIntMethod(function(o4, d7 = 0) {
      return wrtBigUInt64LE(this, o4, d7, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeBigUInt64BE = defineBigIntMethod(function(o4, d7 = 0) {
      return wrtBigUInt64BE(this, o4, d7, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeIntLE = function(o4, d7, f5, v6) {
      if (o4 = +o4, d7 >>>= 0, !v6) {
        const v7 = Math.pow(2, 8 * f5 - 1);
        checkInt(this, o4, d7, f5, v7 - 1, -v7);
      }
      let b5 = 0, w6 = 1, E4 = 0;
      for (this[d7] = 255 & o4; ++b5 < f5 && (w6 *= 256); )
        o4 < 0 && 0 === E4 && 0 !== this[d7 + b5 - 1] && (E4 = 1), this[d7 + b5] = Math.trunc(o4 / w6) - E4 & 255;
      return d7 + f5;
    }, Buffer$1.prototype.writeIntBE = function(o4, d7, f5, v6) {
      if (o4 = +o4, d7 >>>= 0, !v6) {
        const v7 = Math.pow(2, 8 * f5 - 1);
        checkInt(this, o4, d7, f5, v7 - 1, -v7);
      }
      let b5 = f5 - 1, w6 = 1, E4 = 0;
      for (this[d7 + b5] = 255 & o4; --b5 >= 0 && (w6 *= 256); )
        o4 < 0 && 0 === E4 && 0 !== this[d7 + b5 + 1] && (E4 = 1), this[d7 + b5] = Math.trunc(o4 / w6) - E4 & 255;
      return d7 + f5;
    }, Buffer$1.prototype.writeInt8 = function(o4, d7, f5) {
      return o4 = +o4, d7 >>>= 0, f5 || checkInt(this, o4, d7, 1, 127, -128), o4 < 0 && (o4 = 255 + o4 + 1), this[d7] = 255 & o4, d7 + 1;
    }, Buffer$1.prototype.writeInt16LE = function(o4, d7, f5) {
      return o4 = +o4, d7 >>>= 0, f5 || checkInt(this, o4, d7, 2, 32767, -32768), this[d7] = 255 & o4, this[d7 + 1] = o4 >>> 8, d7 + 2;
    }, Buffer$1.prototype.writeInt16BE = function(o4, d7, f5) {
      return o4 = +o4, d7 >>>= 0, f5 || checkInt(this, o4, d7, 2, 32767, -32768), this[d7] = o4 >>> 8, this[d7 + 1] = 255 & o4, d7 + 2;
    }, Buffer$1.prototype.writeInt32LE = function(o4, d7, f5) {
      return o4 = +o4, d7 >>>= 0, f5 || checkInt(this, o4, d7, 4, 2147483647, -2147483648), this[d7] = 255 & o4, this[d7 + 1] = o4 >>> 8, this[d7 + 2] = o4 >>> 16, this[d7 + 3] = o4 >>> 24, d7 + 4;
    }, Buffer$1.prototype.writeInt32BE = function(o4, d7, f5) {
      return o4 = +o4, d7 >>>= 0, f5 || checkInt(this, o4, d7, 4, 2147483647, -2147483648), o4 < 0 && (o4 = 4294967295 + o4 + 1), this[d7] = o4 >>> 24, this[d7 + 1] = o4 >>> 16, this[d7 + 2] = o4 >>> 8, this[d7 + 3] = 255 & o4, d7 + 4;
    }, Buffer$1.prototype.writeBigInt64LE = defineBigIntMethod(function(o4, d7 = 0) {
      return wrtBigUInt64LE(this, o4, d7, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeBigInt64BE = defineBigIntMethod(function(o4, d7 = 0) {
      return wrtBigUInt64BE(this, o4, d7, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeFloatLE = function(o4, d7, f5) {
      return writeFloat(this, o4, d7, true, f5);
    }, Buffer$1.prototype.writeFloatBE = function(o4, d7, f5) {
      return writeFloat(this, o4, d7, false, f5);
    }, Buffer$1.prototype.writeDoubleLE = function(o4, d7, f5) {
      return writeDouble(this, o4, d7, true, f5);
    }, Buffer$1.prototype.writeDoubleBE = function(o4, d7, f5) {
      return writeDouble(this, o4, d7, false, f5);
    }, Buffer$1.prototype.copy = function(o4, d7, f5, v6) {
      if (!Buffer$1.isBuffer(o4))
        throw new TypeError("argument should be a Buffer");
      if (f5 || (f5 = 0), v6 || 0 === v6 || (v6 = this.length), d7 >= o4.length && (d7 = o4.length), d7 || (d7 = 0), v6 > 0 && v6 < f5 && (v6 = f5), v6 === f5)
        return 0;
      if (0 === o4.length || 0 === this.length)
        return 0;
      if (d7 < 0)
        throw new RangeError("targetStart out of bounds");
      if (f5 < 0 || f5 >= this.length)
        throw new RangeError("Index out of range");
      if (v6 < 0)
        throw new RangeError("sourceEnd out of bounds");
      v6 > this.length && (v6 = this.length), o4.length - d7 < v6 - f5 && (v6 = o4.length - d7 + f5);
      const b5 = v6 - f5;
      return this === o4 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(d7, f5, v6) : Uint8Array.prototype.set.call(o4, this.subarray(f5, v6), d7), b5;
    }, Buffer$1.prototype.fill = function(o4, d7, f5, v6) {
      if ("string" == typeof o4) {
        if ("string" == typeof d7 ? (v6 = d7, d7 = 0, f5 = this.length) : "string" == typeof f5 && (v6 = f5, f5 = this.length), void 0 !== v6 && "string" != typeof v6)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof v6 && !Buffer$1.isEncoding(v6))
          throw new TypeError("Unknown encoding: " + v6);
        if (1 === o4.length) {
          const d8 = o4.charCodeAt(0);
          ("utf8" === v6 && d8 < 128 || "latin1" === v6) && (o4 = d8);
        }
      } else
        "number" == typeof o4 ? o4 &= 255 : "boolean" == typeof o4 && (o4 = Number(o4));
      if (d7 < 0 || this.length < d7 || this.length < f5)
        throw new RangeError("Out of range index");
      if (f5 <= d7)
        return this;
      let b5;
      if (d7 >>>= 0, f5 = void 0 === f5 ? this.length : f5 >>> 0, o4 || (o4 = 0), "number" == typeof o4)
        for (b5 = d7; b5 < f5; ++b5)
          this[b5] = o4;
      else {
        const w6 = Buffer$1.isBuffer(o4) ? o4 : Buffer$1.from(o4, v6), E4 = w6.length;
        if (0 === E4)
          throw new TypeError('The value "' + o4 + '" is invalid for argument "value"');
        for (b5 = 0; b5 < f5 - d7; ++b5)
          this[b5 + d7] = w6[b5 % E4];
      }
      return this;
    };
    _2 = {};
    E$5("ERR_BUFFER_OUT_OF_BOUNDS", function(o4) {
      return o4 ? `${o4} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), E$5("ERR_INVALID_ARG_TYPE", function(o4, d7) {
      return `The "${o4}" argument must be of type number. Received type ${typeof d7}`;
    }, TypeError), E$5("ERR_OUT_OF_RANGE", function(o4, d7, f5) {
      let v6 = `The value of "${o4}" is out of range.`, b5 = f5;
      return Number.isInteger(f5) && Math.abs(f5) > 2 ** 32 ? b5 = addNumericalSeparator(String(f5)) : "bigint" == typeof f5 && (b5 = String(f5), (f5 > BigInt(2) ** BigInt(32) || f5 < -(BigInt(2) ** BigInt(32))) && (b5 = addNumericalSeparator(b5)), b5 += "n"), v6 += ` It must be ${d7}. Received ${b5}`, v6;
    }, RangeError);
    A2 = /[^\w+/-]/g;
    I = function() {
      const o4 = "0123456789abcdef", d7 = Array.from({ length: 256 });
      for (let f5 = 0; f5 < 16; ++f5) {
        const v6 = 16 * f5;
        for (let b5 = 0; b5 < 16; ++b5)
          d7[v6 + b5] = o4[f5] + o4[b5];
      }
      return d7;
    }();
    M = globalThis.Buffer || Buffer$1;
    notImplemented$1("buffer.resolveObjectURL"), notImplemented$1("buffer.transcode"), notImplemented$1("buffer.isUtf8"), notImplemented$1("buffer.isAscii");
    fn = function() {
    };
    L2 = function createMock(o4, d7 = {}) {
      fn.prototype.name = o4;
      const f5 = {};
      return new Proxy(fn, { get: (v6, b5) => "caller" === b5 ? null : "__createMock__" === b5 ? createMock : "__unenv__" === b5 || (b5 in d7 ? d7[b5] : f5[b5] = f5[b5] || createMock(`${o4}.${b5.toString()}`)), apply: (d8, f6, v6) => createMock(`${o4}()`), construct: (d8, f6, v6) => createMock(`[${o4}]`), enumerate: () => [] });
    }("mock");
    U2 = Object.freeze(Object.create(null, { __unenv__: { get: () => true } }));
    N3 = /* @__PURE__ */ Object.create(null);
    q2 = globalThis.process?.env;
    _getEnv$1 = (o4) => q2 || globalThis.__env__ || (o4 ? N3 : globalThis);
    W = new Proxy(N3, { get: (o4, d7) => _getEnv$1()[d7] ?? N3[d7], has: (o4, d7) => d7 in _getEnv$1() || d7 in N3, set: (o4, d7, f5) => (_getEnv$1(true)[d7] = f5, true), deleteProperty: (o4, d7) => (delete _getEnv$1(true)[d7], true), ownKeys() {
      const o4 = _getEnv$1();
      return Object.keys(o4);
    } });
    K2 = Object.assign(function(o4) {
      const d7 = Date.now(), f5 = Math.trunc(d7 / 1e3), v6 = d7 % 1e3 * 1e6;
      if (o4) {
        let d8 = f5 - o4[0], b5 = v6 - o4[0];
        return b5 < 0 && (d8 -= 1, b5 = 1e9 + b5), [d8, b5];
      }
      return [f5, v6];
    }, { bigint: function() {
      return BigInt(1e6 * Date.now());
    } });
    Z2 = globalThis.queueMicrotask ? (o4, ...d7) => {
      globalThis.queueMicrotask(o4.bind(void 0, ...d7));
    } : function() {
      let o4, d7 = [], f5 = false, v6 = -1;
      function cleanUpNextTick2() {
        f5 && o4 && (f5 = false, o4.length > 0 ? d7 = [...o4, ...d7] : v6 = -1, d7.length > 0 && drainQueue2());
      }
      function drainQueue2() {
        if (f5)
          return;
        const b5 = setTimeout(cleanUpNextTick2);
        f5 = true;
        let w6 = d7.length;
        for (; w6; ) {
          for (o4 = d7, d7 = []; ++v6 < w6; )
            o4 && o4[v6]();
          v6 = -1, w6 = d7.length;
        }
        o4 = void 0, f5 = false, clearTimeout(b5);
      }
      return (o5, ...v7) => {
        d7.push(o5.bind(void 0, ...v7)), 1 !== d7.length || f5 || setTimeout(drainQueue2);
      };
    }();
    Y3 = noop$1;
    Q3 = noop$1;
    X2 = noop$1;
    re2 = noop$1;
    se4 = noop$1;
    ne2 = noop$1;
    ae2 = noop$1;
    le2 = noop$1;
    ue2 = "/";
    fe2 = notImplemented("process.abort");
    pe3 = /* @__PURE__ */ new Set();
    ge2 = U2;
    me2 = notImplemented("process.cpuUsage");
    ye2 = notImplemented("process.dlopen");
    be2 = noop$1;
    xe2 = noop$1;
    Ae3 = notImplemented("process.eventNames");
    $e3 = notImplemented("process.exit");
    Ie2 = /* @__PURE__ */ Object.create({ inspector: void 0, debug: void 0, uv: void 0, ipv6: void 0, tls_alpn: void 0, tls_sni: void 0, tls_ocsp: void 0, tls: void 0, cached_builtins: void 0 });
    ze2 = notImplemented("process.getMaxListeners");
    Te3 = notImplemented("process.kill");
    Pe2 = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: () => 0 });
    Ne2 = notImplemented("process.rawListeners");
    He2 = /* @__PURE__ */ Object.create({ name: "", lts: "", sourceUrl: void 0, headersUrl: void 0 });
    qe2 = /* @__PURE__ */ Object.create({ compact: void 0, directory: void 0, filename: void 0, getReport: notImplemented("process.report.getReport"), reportOnFatalError: void 0, reportOnSignal: void 0, reportOnUncaughtException: void 0, signal: void 0, writeReport: notImplemented("process.report.writeReport") });
    We2 = notImplemented("process.resourceUsage");
    Ve2 = notImplemented("process.setegid");
    Ke2 = notImplemented("process.seteuid");
    Ze2 = notImplemented("process.setgid");
    Ye2 = notImplemented("process.setgroups");
    Ge2 = notImplemented("process.setuid");
    Je2 = notImplemented("process.setMaxListeners");
    et2 = notImplemented("process.setSourceMapsEnabled");
    tt2 = L2.__createMock__("process.stdout");
    rt2 = L2.__createMock__("process.stderr");
    st2 = L2.__createMock__("process.stdin");
    nt2 = notImplemented("process.setUncaughtExceptionCaptureCallback");
    it2 = notImplemented("process.loadEnvFile");
    ot2 = { ref() {
    }, unref() {
    } };
    at2 = notImplemented("process.assert");
    ct2 = notImplemented("process.openStdin");
    lt2 = notImplemented("process._debugEnd");
    ut2 = notImplemented("process._debugProcess");
    dt2 = notImplemented("process._fatalException");
    ht2 = notImplemented("process._getActiveHandles");
    pt2 = notImplemented("process._getActiveRequests");
    yt = notImplemented("process._kill");
    wt = notImplemented("process._rawDebug");
    Et = notImplemented("process._startProfilerIdleNotifier");
    xt = notImplemented("process.__stopProfilerIdleNotifier");
    St = notImplemented("process._tickCallback");
    notImplemented("process._linkedBinding");
    _t = { _events: [], _eventsCount: 0, _exiting: false, _maxListeners: 0, _debugEnd: lt2, _debugProcess: ut2, _fatalException: dt2, _getActiveHandles: ht2, _getActiveRequests: pt2, _kill: yt, _preload_modules: [], _rawDebug: wt, _startProfilerIdleNotifier: Et, _stopProfilerIdleNotifier: xt, _tickCallback: St, domain: L2.__createMock__("process.domain"), initgroups: notImplemented("process.initgroups"), moduleLoadList: [], reallyExit: noop$1, exitCode: 0, abort: fe2, addListener: Q3, allowedNodeEnvironmentFlags: pe3, hasUncaughtExceptionCaptureCallback: () => false, setUncaughtExceptionCaptureCallback: nt2, loadEnvFile: it2, sourceMapsEnabled: false, throwDeprecation: false, mainModule: void 0, permission: { has: () => false }, channel: ot2, arch: "", argv: [], argv0: "", assert: at2, binding: function(o4) {
      throw new Error("[unenv] process.binding is not supported");
    }, chdir: function(o4) {
      ue2 = o4;
    }, config: ge2, connected: false, constrainedMemory: () => 0, availableMemory: () => 0, cpuUsage: me2, cwd: function() {
      return ue2;
    }, debugPort: 0, dlopen: ye2, disconnect: be2, emit: function(o4) {
      return ("message" === o4 || "multipleResolves" === o4) && _t;
    }, emitWarning: xe2, env: W, eventNames: Ae3, execArgv: [], execPath: "", exit: $e3, features: Ie2, getBuiltinModule: (o4) => {
    }, getegid: function() {
      return 1e3;
    }, geteuid: function() {
      return 1e3;
    }, getgid: function() {
      return 1e3;
    }, getgroups: function() {
      return [];
    }, getuid: function() {
      return 1e3;
    }, getActiveResourcesInfo: () => [], getMaxListeners: ze2, hrtime: K2, kill: Te3, listeners: function(o4) {
      return [];
    }, listenerCount: () => 0, memoryUsage: Pe2, nextTick: Z2, on: Y3, off: re2, once: X2, openStdin: ct2, pid: 1e3, platform: "", ppid: 1e3, prependListener: ae2, prependOnceListener: le2, rawListeners: Ne2, release: He2, removeAllListeners: ne2, removeListener: se4, report: qe2, resourceUsage: We2, setegid: Ve2, seteuid: Ke2, setgid: Ze2, setgroups: Ye2, setuid: Ge2, setMaxListeners: Je2, setSourceMapsEnabled: et2, stderr: rt2, stdin: st2, stdout: tt2, title: "unenv", traceDeprecation: false, umask: function() {
      return 0;
    }, uptime: () => 0, version: "", versions: { ares: "", http_parser: "", icu: "", modules: "", node: "", openssl: "", uv: "", v8: "", zlib: "" } };
    Object.assign(globalThis.process, { ..._t, ...globalThis.process });
    At = globalThis.process;
    $t = /#/g;
    kt = /&/g;
    zt = /\//g;
    jt = /=/g;
    Tt = /\+/g;
    Ct = /%5e/gi;
    Ot = /%60/gi;
    Bt = /%7c/gi;
    Mt = /%20/gi;
    Nt = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    Ft = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    Dt = /^([/\\]\s*){2,}[^/\\]/;
    Ht = /^\.?\//;
    qt = Symbol.for("ufo:protocolRelative");
    Wt = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
    Kt = Object.freeze({ ignoreUnknown: false, respectType: false, respectFunctionNames: false, respectFunctionProperties: false, unorderedObjects: true, unorderedArrays: false, unorderedSets: false, excludeKeys: void 0, excludeValues: void 0, replacer: void 0 });
    Yt = Object.freeze(["prototype", "__proto__", "constructor"]);
    Qt = "[native code] }";
    Jt = Qt.length;
    WordArray = class {
      constructor(o4, d7) {
        o4 = this.words = o4 || [], this.sigBytes = void 0 === d7 ? 4 * o4.length : d7;
      }
      toString(o4) {
        return (o4 || er).stringify(this);
      }
      concat(o4) {
        if (this.clamp(), this.sigBytes % 4)
          for (let d7 = 0; d7 < o4.sigBytes; d7++) {
            const f5 = o4.words[d7 >>> 2] >>> 24 - d7 % 4 * 8 & 255;
            this.words[this.sigBytes + d7 >>> 2] |= f5 << 24 - (this.sigBytes + d7) % 4 * 8;
          }
        else
          for (let d7 = 0; d7 < o4.sigBytes; d7 += 4)
            this.words[this.sigBytes + d7 >>> 2] = o4.words[d7 >>> 2];
        return this.sigBytes += o4.sigBytes, this;
      }
      clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4);
      }
      clone() {
        return new WordArray([...this.words]);
      }
    };
    er = { stringify(o4) {
      const d7 = [];
      for (let f5 = 0; f5 < o4.sigBytes; f5++) {
        const v6 = o4.words[f5 >>> 2] >>> 24 - f5 % 4 * 8 & 255;
        d7.push((v6 >>> 4).toString(16), (15 & v6).toString(16));
      }
      return d7.join("");
    } };
    tr = { stringify(o4) {
      const d7 = [];
      for (let f5 = 0; f5 < o4.sigBytes; f5 += 3) {
        const v6 = (o4.words[f5 >>> 2] >>> 24 - f5 % 4 * 8 & 255) << 16 | (o4.words[f5 + 1 >>> 2] >>> 24 - (f5 + 1) % 4 * 8 & 255) << 8 | o4.words[f5 + 2 >>> 2] >>> 24 - (f5 + 2) % 4 * 8 & 255;
        for (let b5 = 0; b5 < 4 && 8 * f5 + 6 * b5 < 8 * o4.sigBytes; b5++)
          d7.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(v6 >>> 6 * (3 - b5) & 63));
      }
      return d7.join("");
    } };
    rr = { parse(o4) {
      const d7 = o4.length, f5 = [];
      for (let v6 = 0; v6 < d7; v6++)
        f5[v6 >>> 2] |= (255 & o4.charCodeAt(v6)) << 24 - v6 % 4 * 8;
      return new WordArray(f5, d7);
    } };
    sr = { parse: (o4) => rr.parse(unescape(encodeURIComponent(o4))) };
    BufferedBlockAlgorithm = class {
      constructor() {
        this._data = new WordArray(), this._nDataBytes = 0, this._minBufferSize = 0, this.blockSize = 16;
      }
      reset() {
        this._data = new WordArray(), this._nDataBytes = 0;
      }
      _append(o4) {
        "string" == typeof o4 && (o4 = sr.parse(o4)), this._data.concat(o4), this._nDataBytes += o4.sigBytes;
      }
      _doProcessBlock(o4, d7) {
      }
      _process(o4) {
        let d7, f5 = this._data.sigBytes / (4 * this.blockSize);
        f5 = o4 ? Math.ceil(f5) : Math.max((0 | f5) - this._minBufferSize, 0);
        const v6 = f5 * this.blockSize, b5 = Math.min(4 * v6, this._data.sigBytes);
        if (v6) {
          for (let o5 = 0; o5 < v6; o5 += this.blockSize)
            this._doProcessBlock(this._data.words, o5);
          d7 = this._data.words.splice(0, v6), this._data.sigBytes -= b5;
        }
        return new WordArray(d7, b5);
      }
    };
    Hasher = class extends BufferedBlockAlgorithm {
      update(o4) {
        return this._append(o4), this._process(), this;
      }
      finalize(o4) {
        o4 && this._append(o4);
      }
    };
    ir = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    cr = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    lr = [];
    SHA256 = class extends Hasher {
      constructor() {
        super(...arguments), this._hash = new WordArray([...ir]);
      }
      reset() {
        super.reset(), this._hash = new WordArray([...ir]);
      }
      _doProcessBlock(o4, d7) {
        const f5 = this._hash.words;
        let v6 = f5[0], b5 = f5[1], w6 = f5[2], E4 = f5[3], S6 = f5[4], _3 = f5[5], A3 = f5[6], I2 = f5[7];
        for (let f6 = 0; f6 < 64; f6++) {
          if (f6 < 16)
            lr[f6] = 0 | o4[d7 + f6];
          else {
            const o5 = lr[f6 - 15], d8 = (o5 << 25 | o5 >>> 7) ^ (o5 << 14 | o5 >>> 18) ^ o5 >>> 3, v7 = lr[f6 - 2], b6 = (v7 << 15 | v7 >>> 17) ^ (v7 << 13 | v7 >>> 19) ^ v7 >>> 10;
            lr[f6] = d8 + lr[f6 - 7] + b6 + lr[f6 - 16];
          }
          const M2 = v6 & b5 ^ v6 & w6 ^ b5 & w6, L3 = (v6 << 30 | v6 >>> 2) ^ (v6 << 19 | v6 >>> 13) ^ (v6 << 10 | v6 >>> 22), U3 = I2 + ((S6 << 26 | S6 >>> 6) ^ (S6 << 21 | S6 >>> 11) ^ (S6 << 7 | S6 >>> 25)) + (S6 & _3 ^ ~S6 & A3) + cr[f6] + lr[f6];
          I2 = A3, A3 = _3, _3 = S6, S6 = E4 + U3 | 0, E4 = w6, w6 = b5, b5 = v6, v6 = U3 + (L3 + M2) | 0;
        }
        f5[0] = f5[0] + v6 | 0, f5[1] = f5[1] + b5 | 0, f5[2] = f5[2] + w6 | 0, f5[3] = f5[3] + E4 | 0, f5[4] = f5[4] + S6 | 0, f5[5] = f5[5] + _3 | 0, f5[6] = f5[6] + A3 | 0, f5[7] = f5[7] + I2 | 0;
      }
      finalize(o4) {
        super.finalize(o4);
        const d7 = 8 * this._nDataBytes, f5 = 8 * this._data.sigBytes;
        return this._data.words[f5 >>> 5] |= 128 << 24 - f5 % 32, this._data.words[14 + (f5 + 64 >>> 9 << 4)] = Math.floor(d7 / 4294967296), this._data.words[15 + (f5 + 64 >>> 9 << 4)] = d7, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
    };
    ur = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
    dr = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    hr = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    fr = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    defu = (...o4) => o4.reduce((o5, d7) => _defu$1(o5, d7, "", pr), {});
    gr = 10;
    mr = class {
      __unenv__ = true;
      _events = /* @__PURE__ */ Object.create(null);
      _maxListeners;
      static get defaultMaxListeners() {
        return gr;
      }
      static set defaultMaxListeners(o4) {
        if ("number" != typeof o4 || o4 < 0 || Number.isNaN(o4))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + o4 + ".");
        gr = o4;
      }
      setMaxListeners(o4) {
        if ("number" != typeof o4 || o4 < 0 || Number.isNaN(o4))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + o4 + ".");
        return this._maxListeners = o4, this;
      }
      getMaxListeners() {
        return _getMaxListeners(this);
      }
      emit(o4, ...d7) {
        if (!this._events[o4] || 0 === this._events[o4].length)
          return false;
        if ("error" === o4) {
          let o5;
          if (d7.length > 0 && (o5 = d7[0]), o5 instanceof Error)
            throw o5;
          const f5 = new Error("Unhandled error." + (o5 ? " (" + o5.message + ")" : ""));
          throw f5.context = o5, f5;
        }
        for (const f5 of this._events[o4])
          (f5.listener || f5).apply(this, d7);
        return true;
      }
      addListener(o4, d7) {
        return _addListener(this, o4, d7, false);
      }
      on(o4, d7) {
        return _addListener(this, o4, d7, false);
      }
      prependListener(o4, d7) {
        return _addListener(this, o4, d7, true);
      }
      once(o4, d7) {
        return this.on(o4, _wrapOnce(this, o4, d7));
      }
      prependOnceListener(o4, d7) {
        return this.prependListener(o4, _wrapOnce(this, o4, d7));
      }
      removeListener(o4, d7) {
        return function(o5, d8, f5) {
          if (_checkListener(f5), !o5._events[d8] || 0 === o5._events[d8].length)
            return o5;
          const v6 = o5._events[d8].length;
          if (o5._events[d8] = o5._events[d8].filter((o6) => o6 !== f5), v6 === o5._events[d8].length)
            return o5;
          o5._events.removeListener && o5.emit("removeListener", d8, f5.listener || f5);
          0 === o5._events[d8].length && delete o5._events[d8];
          return o5;
        }(this, o4, d7);
      }
      off(o4, d7) {
        return this.removeListener(o4, d7);
      }
      removeAllListeners(o4) {
        return function(o5, d7) {
          if (!o5._events[d7] || 0 === o5._events[d7].length)
            return o5;
          if (o5._events.removeListener)
            for (const f5 of o5._events[d7])
              o5.emit("removeListener", d7, f5.listener || f5);
          return delete o5._events[d7], o5;
        }(this, o4);
      }
      listeners(o4) {
        return _listeners(this, o4, true);
      }
      rawListeners(o4) {
        return _listeners(this, o4, false);
      }
      listenerCount(o4) {
        return this.rawListeners(o4).length;
      }
      eventNames() {
        return Object.keys(this._events);
      }
    };
    yr = globalThis.EventEmitter || mr;
    _Readable = class extends yr {
      __unenv__ = true;
      readableEncoding = null;
      readableEnded = true;
      readableFlowing = false;
      readableHighWaterMark = 0;
      readableLength = 0;
      readableObjectMode = false;
      readableAborted = false;
      readableDidRead = false;
      closed = false;
      errored = null;
      readable = false;
      destroyed = false;
      static from(o4, d7) {
        return new _Readable(d7);
      }
      constructor(o4) {
        super();
      }
      _read(o4) {
      }
      read(o4) {
      }
      setEncoding(o4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      isPaused() {
        return true;
      }
      unpipe(o4) {
        return this;
      }
      unshift(o4, d7) {
      }
      wrap(o4) {
        return this;
      }
      push(o4, d7) {
        return false;
      }
      _destroy(o4, d7) {
        this.removeAllListeners();
      }
      destroy(o4) {
        return this.destroyed = true, this._destroy(o4), this;
      }
      pipe(o4, d7) {
        return {};
      }
      compose(o4, d7) {
        throw new Error("[unenv] Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw createNotImplementedError$1("Readable.asyncIterator");
      }
      iterator(o4) {
        throw createNotImplementedError$1("Readable.iterator");
      }
      map(o4, d7) {
        throw createNotImplementedError$1("Readable.map");
      }
      filter(o4, d7) {
        throw createNotImplementedError$1("Readable.filter");
      }
      forEach(o4, d7) {
        throw createNotImplementedError$1("Readable.forEach");
      }
      reduce(o4, d7, f5) {
        throw createNotImplementedError$1("Readable.reduce");
      }
      find(o4, d7) {
        throw createNotImplementedError$1("Readable.find");
      }
      findIndex(o4, d7) {
        throw createNotImplementedError$1("Readable.findIndex");
      }
      some(o4, d7) {
        throw createNotImplementedError$1("Readable.some");
      }
      toArray(o4) {
        throw createNotImplementedError$1("Readable.toArray");
      }
      every(o4, d7) {
        throw createNotImplementedError$1("Readable.every");
      }
      flatMap(o4, d7) {
        throw createNotImplementedError$1("Readable.flatMap");
      }
      drop(o4, d7) {
        throw createNotImplementedError$1("Readable.drop");
      }
      take(o4, d7) {
        throw createNotImplementedError$1("Readable.take");
      }
      asIndexedPairs(o4) {
        throw createNotImplementedError$1("Readable.asIndexedPairs");
      }
    };
    vr = globalThis.Readable || _Readable;
    br = globalThis.Writable || class extends yr {
      __unenv__ = true;
      writable = true;
      writableEnded = false;
      writableFinished = false;
      writableHighWaterMark = 0;
      writableLength = 0;
      writableObjectMode = false;
      writableCorked = 0;
      closed = false;
      errored = null;
      writableNeedDrain = false;
      destroyed = false;
      _data;
      _encoding = "utf-8";
      constructor(o4) {
        super();
      }
      pipe(o4, d7) {
        return {};
      }
      _write(o4, d7, f5) {
        if (this.writableEnded)
          f5 && f5();
        else {
          if (void 0 === this._data)
            this._data = o4;
          else {
            const f6 = "string" == typeof this._data ? M.from(this._data, this._encoding || d7 || "utf8") : this._data, v6 = "string" == typeof o4 ? M.from(o4, d7 || this._encoding || "utf8") : o4;
            this._data = M.concat([f6, v6]);
          }
          this._encoding = d7, f5 && f5();
        }
      }
      _writev(o4, d7) {
      }
      _destroy(o4, d7) {
      }
      _final(o4) {
      }
      write(o4, d7, f5) {
        const v6 = "string" == typeof d7 ? this._encoding : "utf-8", b5 = "function" == typeof d7 ? d7 : "function" == typeof f5 ? f5 : void 0;
        return this._write(o4, v6, b5), true;
      }
      setDefaultEncoding(o4) {
        return this;
      }
      end(o4, d7, f5) {
        const v6 = "function" == typeof o4 ? o4 : "function" == typeof d7 ? d7 : "function" == typeof f5 ? f5 : void 0;
        if (this.writableEnded)
          return v6 && v6(), this;
        const b5 = o4 === v6 ? void 0 : o4;
        if (b5) {
          const o5 = d7 === v6 ? void 0 : d7;
          this.write(b5, o5, v6);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(o4) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(o4, d7) {
        throw new Error("[h3] Method not implemented.");
      }
    };
    wr = class {
      allowHalfOpen = true;
      _destroy;
      constructor(o4 = new vr(), d7 = new br()) {
        Object.assign(this, o4), Object.assign(this, d7), this._destroy = function(...o5) {
          return function(...d8) {
            for (const f5 of o5)
              f5(...d8);
          };
        }(o4._destroy, d7._destroy);
      }
    };
    xr = getDuplex();
    _r = globalThis.Duplex || xr;
    Socket = class extends _r {
      __unenv__ = true;
      bufferSize = 0;
      bytesRead = 0;
      bytesWritten = 0;
      connecting = false;
      destroyed = false;
      pending = false;
      localAddress = "";
      localPort = 0;
      remoteAddress = "";
      remoteFamily = "";
      remotePort = 0;
      autoSelectFamilyAttemptedAddresses = [];
      readyState = "readOnly";
      constructor(o4) {
        super();
      }
      write(o4, d7, f5) {
        return false;
      }
      connect(o4, d7, f5) {
        return this;
      }
      end(o4, d7, f5) {
        return this;
      }
      setEncoding(o4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(o4, d7) {
        return this;
      }
      setNoDelay(o4) {
        return this;
      }
      setKeepAlive(o4, d7) {
        return this;
      }
      address() {
        return {};
      }
      unref() {
        return this;
      }
      ref() {
        return this;
      }
      destroySoon() {
        this.destroy();
      }
      resetAndDestroy() {
        const o4 = new Error("ERR_SOCKET_CLOSED");
        return o4.code = "ERR_SOCKET_CLOSED", this.destroy(o4), this;
      }
    };
    IncomingMessage = class extends vr {
      __unenv__ = {};
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(o4) {
        super(), this.socket = this.connection = o4 || new Socket();
      }
      get rawHeaders() {
        return function(o4) {
          const d7 = [];
          for (const f5 in o4)
            if (Array.isArray(o4[f5]))
              for (const v6 of o4[f5])
                d7.push(f5, v6);
            else
              d7.push(f5, o4[f5]);
          return d7;
        }(this.headers);
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(o4, d7) {
        return this;
      }
      get headersDistinct() {
        return _distinct(this.headers);
      }
      get trailersDistinct() {
        return _distinct(this.trailers);
      }
    };
    ServerResponse = class extends br {
      __unenv__ = true;
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(o4) {
        super(), this.req = o4;
      }
      assignSocket(o4) {
        o4._httpMessage = this, this.socket = o4, this.connection = o4, this.emit("socket", o4), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(o4) {
      }
      writeContinue(o4) {
      }
      writeHead(o4, d7, f5) {
        o4 && (this.statusCode = o4), "string" == typeof d7 && (this.statusMessage = d7, d7 = void 0);
        const v6 = f5 || d7;
        if (v6)
          if (Array.isArray(v6))
            ;
          else
            for (const o5 in v6)
              this.setHeader(o5, v6[o5]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(o4, d7) {
        return this;
      }
      appendHeader(o4, d7) {
        o4 = o4.toLowerCase();
        const f5 = this._headers[o4], v6 = [...Array.isArray(f5) ? f5 : [f5], ...Array.isArray(d7) ? d7 : [d7]].filter(Boolean);
        return this._headers[o4] = v6.length > 1 ? v6 : v6[0], this;
      }
      setHeader(o4, d7) {
        return this._headers[o4.toLowerCase()] = d7, this;
      }
      getHeader(o4) {
        return this._headers[o4.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(o4) {
        return o4.toLowerCase() in this._headers;
      }
      removeHeader(o4) {
        delete this._headers[o4.toLowerCase()];
      }
      addTrailers(o4) {
      }
      flushHeaders() {
      }
      writeEarlyHints(o4, d7) {
        "function" == typeof d7 && d7();
      }
    };
    kr = Object.defineProperty;
    __publicField$2 = (o4, d7, f5) => (((o5, d8, f6) => {
      d8 in o5 ? kr(o5, d8, { enumerable: true, configurable: true, writable: true, value: f6 }) : o5[d8] = f6;
    })(o4, "symbol" != typeof d7 ? d7 + "" : d7, f5), f5);
    H3Error = class extends Error {
      constructor(o4, d7 = {}) {
        super(o4, d7), __publicField$2(this, "statusCode", 500), __publicField$2(this, "fatal", false), __publicField$2(this, "unhandled", false), __publicField$2(this, "statusMessage"), __publicField$2(this, "data"), __publicField$2(this, "cause"), d7.cause && !this.cause && (this.cause = d7.cause);
      }
      toJSON() {
        const o4 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (o4.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (o4.data = this.data), o4;
      }
    };
    __publicField$2(H3Error, "__h3_error__", true);
    Ir = Symbol.for("h3RawBody");
    zr = ["PATCH", "POST", "PUT", "DELETE"];
    jr = { html: "text/html", json: "application/json" };
    Tr = /[^\u0009\u0020-\u007E]/g;
    Pr = "undefined" == typeof setImmediate ? (o4) => o4() : setImmediate;
    setHeaders = function(o4, d7) {
      for (const [f5, v6] of Object.entries(d7))
        o4.node.res.setHeader(f5, v6);
    };
    Or = setResponseHeader;
    Br = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    Mr = /* @__PURE__ */ new Set(["transfer-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    Lr = Object.defineProperty;
    __publicField$1 = (o4, d7, f5) => (((o5, d8, f6) => {
      d8 in o5 ? Lr(o5, d8, { enumerable: true, configurable: true, writable: true, value: f6 }) : o5[d8] = f6;
    })(o4, "symbol" != typeof d7 ? d7 + "" : d7, f5), f5);
    H3Event = class {
      constructor(o4, d7) {
        __publicField$1(this, "__is_event__", true), __publicField$1(this, "node"), __publicField$1(this, "web"), __publicField$1(this, "context", {}), __publicField$1(this, "_method"), __publicField$1(this, "_path"), __publicField$1(this, "_headers"), __publicField$1(this, "_requestBody"), __publicField$1(this, "_handled", false), this.node = { req: o4, res: d7 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(o4) {
          const d7 = new Headers();
          for (const [f5, v6] of Object.entries(o4))
            if (Array.isArray(v6))
              for (const o5 of v6)
                d7.append(f5, o5);
            else
              v6 && d7.set(f5, v6);
          return d7;
        }(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(o4) {
        return Promise.resolve(o4).then((o5) => sendWebResponse(this, o5));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    Ur = defineEventHandler;
    lazyEventHandler = function(o4) {
      let d7, f5;
      const resolveHandler = () => f5 ? Promise.resolve(f5) : (d7 || (d7 = Promise.resolve(o4()).then((o5) => {
        const d8 = o5.default || o5;
        if ("function" != typeof d8)
          throw new TypeError("Invalid lazy handler result. It should be a function:", d8);
        return f5 = { handler: toEventHandler(o5.default || o5) }, f5;
      })), d7), v6 = Ur((o5) => f5 ? f5.handler(o5) : resolveHandler().then((d8) => d8.handler(o5)));
      return v6.__resolve__ = resolveHandler, v6;
    };
    Nr = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    Fr = {};
    !function() {
      try {
        Dr = "function" == typeof setTimeout ? setTimeout : defaultSetTimeout;
      } catch {
        Dr = defaultSetTimeout;
      }
      try {
        Hr = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch {
        Hr = defaultClearTimeout;
      }
    }();
    Wr = [];
    Vr = false;
    Kr = -1;
    Fr.nextTick = function(o4) {
      const d7 = Array.from({ length: arguments.length - 1 });
      if (arguments.length > 1)
        for (let o5 = 1; o5 < arguments.length; o5++)
          d7[o5 - 1] = arguments[o5];
      Wr.push(new Item(o4, d7)), 1 !== Wr.length || Vr || runTimeout(drainQueue);
    }, Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, Fr.title = "unenv";
    Zr = /* @__PURE__ */ Object.create(null);
    Yr = globalThis.process?.env;
    _getEnv = (o4) => Yr || globalThis.__env__ || (o4 ? Zr : globalThis);
    Fr.env = new Proxy(Zr, { get: (o4, d7) => _getEnv()[d7] ?? Zr[d7], has: (o4, d7) => d7 in _getEnv() || d7 in Zr, set: (o4, d7, f5) => (_getEnv(true)[d7] = f5, true), deleteProperty(o4, d7) {
      delete _getEnv(true)[d7];
    }, ownKeys() {
      const o4 = _getEnv();
      return Object.keys(o4);
    } }), Fr.argv = [], Fr.version = "", Fr.versions = {}, Fr.on = noop, Fr.addListener = noop, Fr.once = noop, Fr.off = noop, Fr.removeListener = noop, Fr.removeAllListeners = noop, Fr.emit = noop, Fr.prependListener = noop, Fr.prependOnceListener = noop, Fr.listeners = function(o4) {
      return [];
    }, Fr.binding = function(o4) {
      throw new Error("[unenv] process.binding is not supported");
    };
    Gr = "/";
    Fr.cwd = function() {
      return Gr;
    }, Fr.chdir = function(o4) {
      Gr = o4;
    }, Fr.umask = function() {
      return 0;
    };
    Qr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    Qr.process = Qr.process || Fr;
    Jr = Qr.process;
    FetchError = class extends Error {
      constructor(o4, d7) {
        super(o4, d7), this.name = "FetchError", d7?.cause && !this.cause && (this.cause = d7.cause);
      }
    };
    Xr = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    rs = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    ns = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    is = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    os = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    as = function() {
      if ("undefined" != typeof globalThis)
        return globalThis;
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof global)
        return global;
      throw new Error("unable to locate global object");
    }();
    cs = as.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!")));
    ls = as.Headers;
    us = as.AbortController;
    createFetch$1({ fetch: cs, Headers: ls, AbortController: us });
    ds = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    hs = { run: (o4) => o4() };
    fs = void 0 !== console.createTask ? console.createTask : () => hs;
    Hookable = class {
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(o4, d7, f5 = {}) {
        if (!o4 || "function" != typeof d7)
          return () => {
          };
        const v6 = o4;
        let b5;
        for (; this._deprecatedHooks[o4]; )
          b5 = this._deprecatedHooks[o4], o4 = b5.to;
        if (b5 && !f5.allowDeprecated) {
          let o5 = b5.message;
          o5 || (o5 = `${v6} hook has been deprecated` + (b5.to ? `, please use ${b5.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(o5) || (console.warn(o5), this._deprecatedMessages.add(o5));
        }
        if (!d7.name)
          try {
            Object.defineProperty(d7, "name", { get: () => "_" + o4.replace(/\W+/g, "_") + "_hook_cb", configurable: true });
          } catch {
          }
        return this._hooks[o4] = this._hooks[o4] || [], this._hooks[o4].push(d7), () => {
          d7 && (this.removeHook(o4, d7), d7 = void 0);
        };
      }
      hookOnce(o4, d7) {
        let f5, _function = (...o5) => ("function" == typeof f5 && f5(), f5 = void 0, _function = void 0, d7(...o5));
        return f5 = this.hook(o4, _function), f5;
      }
      removeHook(o4, d7) {
        if (this._hooks[o4]) {
          const f5 = this._hooks[o4].indexOf(d7);
          -1 !== f5 && this._hooks[o4].splice(f5, 1), 0 === this._hooks[o4].length && delete this._hooks[o4];
        }
      }
      deprecateHook(o4, d7) {
        this._deprecatedHooks[o4] = "string" == typeof d7 ? { to: d7 } : d7;
        const f5 = this._hooks[o4] || [];
        delete this._hooks[o4];
        for (const d8 of f5)
          this.hook(o4, d8);
      }
      deprecateHooks(o4) {
        Object.assign(this._deprecatedHooks, o4);
        for (const d7 in o4)
          this.deprecateHook(d7, o4[d7]);
      }
      addHooks(o4) {
        const d7 = flatHooks(o4), f5 = Object.keys(d7).map((o5) => this.hook(o5, d7[o5]));
        return () => {
          for (const o5 of f5.splice(0, f5.length))
            o5();
        };
      }
      removeHooks(o4) {
        const d7 = flatHooks(o4);
        for (const o5 in d7)
          this.removeHook(o5, d7[o5]);
      }
      removeAllHooks() {
        for (const o4 in this._hooks)
          delete this._hooks[o4];
      }
      callHook(o4, ...d7) {
        return d7.unshift(o4), this.callHookWith(serialTaskCaller, o4, ...d7);
      }
      callHookParallel(o4, ...d7) {
        return d7.unshift(o4), this.callHookWith(parallelTaskCaller, o4, ...d7);
      }
      callHookWith(o4, d7, ...f5) {
        const v6 = this._before || this._after ? { name: d7, args: f5, context: {} } : void 0;
        this._before && callEachWith(this._before, v6);
        const b5 = o4(d7 in this._hooks ? [...this._hooks[d7]] : [], f5);
        return b5 instanceof Promise ? b5.finally(() => {
          this._after && v6 && callEachWith(this._after, v6);
        }) : (this._after && v6 && callEachWith(this._after, v6), b5);
      }
      beforeEach(o4) {
        return this._before = this._before || [], this._before.push(o4), () => {
          if (void 0 !== this._before) {
            const d7 = this._before.indexOf(o4);
            -1 !== d7 && this._before.splice(d7, 1);
          }
        };
      }
      afterEach(o4) {
        return this._after = this._after || [], this._after.push(o4), () => {
          if (void 0 !== this._after) {
            const d7 = this._after.indexOf(o4);
            -1 !== d7 && this._after.splice(d7, 1);
          }
        };
      }
    };
    ps = /\d/;
    gs = ["-", "_", "/", "."];
    ms = /{{(.*?)}}/g;
    ys = function(o4) {
      return (...d7) => d7.reduce((d8, f5) => _defu(d8, f5, "", o4), {});
    }((o4, d7, f5) => {
      if (void 0 !== o4[d7] && "function" == typeof f5)
        return o4[d7] = f5(o4[d7]), true;
    });
    vs = ys({});
    Es = { app: { baseURL: "/" }, nitro: { routeRules: { "/_build/assets/**": { headers: { "cache-control": "public, immutable, max-age=31536000" } } } } };
    xs = { prefix: "NITRO_", altPrefix: Es.nitro.envPrefix ?? Jr.env.NITRO_ENV_PREFIX ?? "_", envExpansion: Es.nitro.envExpansion ?? Jr.env.NITRO_ENV_EXPANSION ?? false };
    Ss = _deepFreeze(function applyEnv(o4, d7, f5 = "") {
      for (const v6 in o4) {
        const b5 = f5 ? `${f5}_${v6}` : v6, w6 = getEnv(b5, d7);
        _isObject(o4[v6]) ? _isObject(w6) ? (o4[v6] = { ...o4[v6], ...w6 }, applyEnv(o4[v6], d7, b5)) : void 0 === w6 ? applyEnv(o4[v6], d7, b5) : o4[v6] = w6 ?? o4[v6] : o4[v6] = w6 ?? o4[v6], d7.envExpansion && "string" == typeof o4[v6] && (o4[v6] = o4[v6].replace(ms, (o5, d8) => Jr.env[d8] || o5));
      }
      return o4;
    }(klona(Es), xs));
    _deepFreeze(klona(vs)), new Proxy(/* @__PURE__ */ Object.create(null), { get: (o4, d7) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const f5 = useRuntimeConfig();
      if (d7 in f5)
        return f5[d7];
    } });
    _s = "base64:";
    Rs = ["hasItem", "getItem", "getItemRaw", "setItem", "setItemRaw", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    memory = () => {
      const o4 = /* @__PURE__ */ new Map();
      return { name: "memory", options: {}, hasItem: (d7) => o4.has(d7), getItem: (d7) => o4.get(d7) ?? null, getItemRaw: (d7) => o4.get(d7) ?? null, setItem(d7, f5) {
        o4.set(d7, f5);
      }, setItemRaw(d7, f5) {
        o4.set(d7, f5);
      }, removeItem(d7) {
        o4.delete(d7);
      }, getKeys: () => Array.from(o4.keys()), clear() {
        o4.clear();
      }, dispose() {
        o4.clear();
      } };
    };
    ks = {};
    normalizeKey = function(o4) {
      return o4 ? o4.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
    };
    Is = { getKeys: () => Promise.resolve(Object.keys(ks)), hasItem: (o4) => (o4 = normalizeKey(o4), Promise.resolve(o4 in ks)), getItem: (o4) => (o4 = normalizeKey(o4), Promise.resolve(ks[o4] ? ks[o4].import() : null)), getMeta: (o4) => (o4 = normalizeKey(o4), Promise.resolve(ks[o4] ? ks[o4].meta : {})) };
    js = function(o4 = {}) {
      const d7 = { mounts: { "": o4.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = (o5) => {
        for (const f6 of d7.mountpoints)
          if (o5.startsWith(f6))
            return { base: f6, relativeKey: o5.slice(f6.length), driver: d7.mounts[f6] };
        return { base: "", relativeKey: o5, driver: d7.mounts[""] };
      }, getMounts = (o5, f6) => d7.mountpoints.filter((d8) => d8.startsWith(o5) || f6 && o5.startsWith(d8)).map((f7) => ({ relativeBase: o5.length > f7.length ? o5.slice(f7.length) : void 0, mountpoint: f7, driver: d7.mounts[f7] })), onChange = (o5, f6) => {
        if (d7.watching) {
          f6 = normalizeKey$1(f6);
          for (const v6 of d7.watchListeners)
            v6(o5, f6);
        }
      }, stopWatch = async () => {
        if (d7.watching) {
          for (const o5 in d7.unwatch)
            await d7.unwatch[o5]();
          d7.unwatch = {}, d7.watching = false;
        }
      }, runBatch = (o5, d8, f6) => {
        const v6 = /* @__PURE__ */ new Map(), getBatch = (o6) => {
          let d9 = v6.get(o6.base);
          return d9 || (d9 = { driver: o6.driver, base: o6.base, items: [] }, v6.set(o6.base, d9)), d9;
        };
        for (const f7 of o5) {
          const o6 = "string" == typeof f7, v7 = normalizeKey$1(o6 ? f7 : f7.key), b5 = o6 ? void 0 : f7.value, w6 = o6 || !f7.options ? d8 : { ...d8, ...f7.options }, E4 = getMount(v7);
          getBatch(E4).items.push({ key: v7, value: b5, relativeKey: E4.relativeKey, options: w6 });
        }
        return Promise.all([...v6.values()].map((o6) => f6(o6))).then((o6) => o6.flat());
      }, f5 = { hasItem(o5, d8 = {}) {
        o5 = normalizeKey$1(o5);
        const { relativeKey: f6, driver: v6 } = getMount(o5);
        return asyncCall(v6.hasItem, f6, d8);
      }, getItem(o5, d8 = {}) {
        o5 = normalizeKey$1(o5);
        const { relativeKey: f6, driver: v6 } = getMount(o5);
        return asyncCall(v6.getItem, f6, d8).then((o6) => destr(o6));
      }, getItems: (o5, d8) => runBatch(o5, d8, (o6) => o6.driver.getItems ? asyncCall(o6.driver.getItems, o6.items.map((o7) => ({ key: o7.relativeKey, options: o7.options })), d8).then((d9) => d9.map((d10) => ({ key: joinKeys(o6.base, d10.key), value: destr(d10.value) }))) : Promise.all(o6.items.map((d9) => asyncCall(o6.driver.getItem, d9.relativeKey, d9.options).then((o7) => ({ key: d9.key, value: destr(o7) }))))), getItemRaw(o5, d8 = {}) {
        o5 = normalizeKey$1(o5);
        const { relativeKey: f6, driver: v6 } = getMount(o5);
        return v6.getItemRaw ? asyncCall(v6.getItemRaw, f6, d8) : asyncCall(v6.getItem, f6, d8).then((o6) => function(o7) {
          return "string" != typeof o7 ? o7 : o7.startsWith(_s) ? (checkBufferSupport(), M.from(o7.slice(_s.length), "base64")) : o7;
        }(o6));
      }, async setItem(o5, d8, v6 = {}) {
        if (void 0 === d8)
          return f5.removeItem(o5);
        o5 = normalizeKey$1(o5);
        const { relativeKey: b5, driver: w6 } = getMount(o5);
        w6.setItem && (await asyncCall(w6.setItem, b5, stringify(d8), v6), w6.watch || onChange("update", o5));
      }, async setItems(o5, d8) {
        await runBatch(o5, d8, async (o6) => {
          if (o6.driver.setItems)
            return asyncCall(o6.driver.setItems, o6.items.map((o7) => ({ key: o7.relativeKey, value: stringify(o7.value), options: o7.options })), d8);
          o6.driver.setItem && await Promise.all(o6.items.map((d9) => asyncCall(o6.driver.setItem, d9.relativeKey, stringify(d9.value), d9.options)));
        });
      }, async setItemRaw(o5, d8, v6 = {}) {
        if (void 0 === d8)
          return f5.removeItem(o5, v6);
        o5 = normalizeKey$1(o5);
        const { relativeKey: b5, driver: w6 } = getMount(o5);
        if (w6.setItemRaw)
          await asyncCall(w6.setItemRaw, b5, d8, v6);
        else {
          if (!w6.setItem)
            return;
          await asyncCall(w6.setItem, b5, function(o6) {
            if ("string" == typeof o6)
              return o6;
            checkBufferSupport();
            const d9 = M.from(o6).toString("base64");
            return _s + d9;
          }(d8), v6);
        }
        w6.watch || onChange("update", o5);
      }, async removeItem(o5, d8 = {}) {
        "boolean" == typeof d8 && (d8 = { removeMeta: d8 }), o5 = normalizeKey$1(o5);
        const { relativeKey: f6, driver: v6 } = getMount(o5);
        v6.removeItem && (await asyncCall(v6.removeItem, f6, d8), (d8.removeMeta || d8.removeMata) && await asyncCall(v6.removeItem, f6 + "$", d8), v6.watch || onChange("remove", o5));
      }, async getMeta(o5, d8 = {}) {
        "boolean" == typeof d8 && (d8 = { nativeOnly: d8 }), o5 = normalizeKey$1(o5);
        const { relativeKey: f6, driver: v6 } = getMount(o5), b5 = /* @__PURE__ */ Object.create(null);
        if (v6.getMeta && Object.assign(b5, await asyncCall(v6.getMeta, f6, d8)), !d8.nativeOnly) {
          const o6 = await asyncCall(v6.getItem, f6 + "$", d8).then((o7) => destr(o7));
          o6 && "object" == typeof o6 && ("string" == typeof o6.atime && (o6.atime = new Date(o6.atime)), "string" == typeof o6.mtime && (o6.mtime = new Date(o6.mtime)), Object.assign(b5, o6));
        }
        return b5;
      }, setMeta(o5, d8, f6 = {}) {
        return this.setItem(o5 + "$", d8, f6);
      }, removeMeta(o5, d8 = {}) {
        return this.removeItem(o5 + "$", d8);
      }, async getKeys(o5, d8 = {}) {
        o5 = normalizeBaseKey(o5);
        const f6 = getMounts(o5, true);
        let v6 = [];
        const b5 = [];
        for (const o6 of f6) {
          const f7 = (await asyncCall(o6.driver.getKeys, o6.relativeBase, d8)).map((d9) => o6.mountpoint + normalizeKey$1(d9)).filter((o7) => !v6.some((d9) => o7.startsWith(d9)));
          b5.push(...f7), v6 = [o6.mountpoint, ...v6.filter((d9) => !d9.startsWith(o6.mountpoint))];
        }
        return o5 ? b5.filter((d9) => d9.startsWith(o5) && !d9.endsWith("$")) : b5.filter((o6) => !o6.endsWith("$"));
      }, async clear(o5, d8 = {}) {
        o5 = normalizeBaseKey(o5), await Promise.all(getMounts(o5, false).map(async (o6) => {
          if (o6.driver.clear)
            return asyncCall(o6.driver.clear, o6.relativeBase, d8);
          if (o6.driver.removeItem) {
            const f6 = await o6.driver.getKeys(o6.relativeBase || "", d8);
            return Promise.all(f6.map((f7) => o6.driver.removeItem(f7, d8)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(d7.mounts).map((o5) => dispose(o5)));
      }, watch: async (o5) => (await (async () => {
        if (!d7.watching) {
          d7.watching = true;
          for (const o6 in d7.mounts)
            d7.unwatch[o6] = await watch(d7.mounts[o6], onChange, o6);
        }
      })(), d7.watchListeners.push(o5), async () => {
        d7.watchListeners = d7.watchListeners.filter((d8) => d8 !== o5), 0 === d7.watchListeners.length && await stopWatch();
      }), async unwatch() {
        d7.watchListeners = [], await stopWatch();
      }, mount(o5, v6) {
        if ((o5 = normalizeBaseKey(o5)) && d7.mounts[o5])
          throw new Error(`already mounted at ${o5}`);
        return o5 && (d7.mountpoints.push(o5), d7.mountpoints.sort((o6, d8) => d8.length - o6.length)), d7.mounts[o5] = v6, d7.watching && Promise.resolve(watch(v6, onChange, o5)).then((f6) => {
          d7.unwatch[o5] = f6;
        }).catch(console.error), f5;
      }, async unmount(o5, f6 = true) {
        (o5 = normalizeBaseKey(o5)) && d7.mounts[o5] && (d7.watching && o5 in d7.unwatch && (d7.unwatch[o5](), delete d7.unwatch[o5]), f6 && await dispose(d7.mounts[o5]), d7.mountpoints = d7.mountpoints.filter((d8) => d8 !== o5), delete d7.mounts[o5]);
      }, getMount(o5 = "") {
        o5 = normalizeKey$1(o5) + ":";
        const d8 = getMount(o5);
        return { driver: d8.driver, base: d8.base };
      }, getMounts(o5 = "", d8 = {}) {
        o5 = normalizeKey$1(o5);
        return getMounts(o5, d8.parents).map((o6) => ({ driver: o6.driver, base: o6.mountpoint }));
      } };
      return f5;
    }({});
    js.mount("/assets", Is);
    Ts = { name: "_", base: "/cache", swr: true, maxAge: 1 };
    cachedFunction = function(o4, d7 = {}) {
      d7 = { ...Ts, ...d7 };
      const f5 = {}, v6 = d7.group || "nitro/functions", b5 = d7.name || o4.name || "_", w6 = d7.integrity || hash([o4, d7]), E4 = d7.validate || ((o5) => void 0 !== o5.value);
      return async (...S6) => {
        if (await d7.shouldBypassCache?.(...S6))
          return o4(...S6);
        const _3 = await (d7.getKey || getKey)(...S6), A3 = await d7.shouldInvalidateCache?.(...S6), I2 = await async function(o5, S7, _4, A4) {
          const I3 = [d7.base, v6, b5, o5 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
          let M3 = await useStorage().getItem(I3) || {};
          if ("object" != typeof M3) {
            M3 = {};
            const o6 = new Error("Malformed data read from cache.");
            console.error("[nitro] [cache]", o6), useNitroApp().captureError(o6, { event: A4, tags: ["cache"] });
          }
          const L3 = 1e3 * (d7.maxAge ?? d7.maxAge ?? 0);
          L3 && (M3.expires = Date.now() + L3);
          const U3 = _4 || M3.integrity !== w6 || L3 && Date.now() - (M3.mtime || 0) > L3 || false === E4(M3), N4 = U3 ? (async () => {
            const v7 = f5[o5];
            v7 || (void 0 !== M3.value && (d7.staleMaxAge || 0) >= 0 && false === d7.swr && (M3.value = void 0, M3.integrity = void 0, M3.mtime = void 0, M3.expires = void 0), f5[o5] = Promise.resolve(S7()));
            try {
              M3.value = await f5[o5];
            } catch (d8) {
              throw v7 || delete f5[o5], d8;
            }
            if (!v7 && (M3.mtime = Date.now(), M3.integrity = w6, delete f5[o5], false !== E4(M3))) {
              const o6 = useStorage().setItem(I3, M3).catch((o7) => {
                console.error("[nitro] [cache] Cache write error.", o7), useNitroApp().captureError(o7, { event: A4, tags: ["cache"] });
              });
              A4 && A4.waitUntil && A4.waitUntil(o6);
            }
          })() : Promise.resolve();
          return void 0 === M3.value ? await N4 : U3 && A4 && A4.waitUntil && A4.waitUntil(N4), d7.swr && false !== E4(M3) ? (N4.catch((o6) => {
            console.error("[nitro] [cache] SWR handler error.", o6), useNitroApp().captureError(o6, { event: A4, tags: ["cache"] });
          }), M3) : N4.then(() => M3);
        }(_3, () => o4(...S6), A3, S6[0] && isEvent(S6[0]) ? S6[0] : void 0);
        let M2 = I2.value;
        return d7.transform && (M2 = await d7.transform(I2, ...S6) || M2), M2;
      };
    };
    cachedEventHandler = function(o4, d7 = Ts) {
      const f5 = (d7.varies || []).filter(Boolean).map((o5) => o5.toLowerCase()).sort(), v6 = { ...d7, getKey: async (o5) => {
        const v7 = await d7.getKey?.(o5);
        if (v7)
          return escapeKey(v7);
        const b6 = o5.node.req.originalUrl || o5.node.req.url || o5.path;
        return [`${escapeKey(decodeURI(parseURL(b6).pathname)).slice(0, 16) || "index"}.${hash(b6)}`, ...f5.map((d8) => [d8, o5.node.req.headers[d8]]).map(([o6, d8]) => `${escapeKey(o6)}.${hash(d8)}`)].join(":");
      }, validate: (o5) => !!o5.value && (!(o5.value.code >= 400) && (void 0 !== o5.value.body && ("undefined" !== o5.value.headers.etag && "undefined" !== o5.value.headers["last-modified"]))), group: d7.group || "nitro/handlers", integrity: d7.integrity || hash([o4, d7]) }, b5 = cachedFunction(async (v7) => {
        const b6 = {};
        for (const o5 of f5)
          b6[o5] = v7.node.req.headers[o5];
        const w6 = cloneWithProxy(v7.node.req, { headers: b6 }), E4 = {};
        let S6;
        const _3 = createEvent(w6, cloneWithProxy(v7.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: (o5) => E4[o5], setHeader(o5, d8) {
          return E4[o5] = d8, this;
        }, getHeaderNames: () => Object.keys(E4), hasHeader: (o5) => o5 in E4, removeHeader(o5) {
          delete E4[o5];
        }, getHeaders: () => E4, end(o5, d8, f6) {
          return "string" == typeof o5 && (S6 = o5), "function" == typeof d8 && d8(), "function" == typeof f6 && f6(), this;
        }, write(o5, d8, f6) {
          return "string" == typeof o5 && (S6 = o5), "function" == typeof d8 && d8(), "function" == typeof f6 && f6(), this;
        }, writeHead(o5, d8) {
          if (this.statusCode = o5, d8)
            for (const o6 in d8)
              this.setHeader(o6, d8[o6]);
          return this;
        } }));
        _3.fetch = (o5, d8) => fetchWithEvent(_3, o5, d8, { fetch: useNitroApp().localFetch }), _3.$fetch = (o5, d8) => fetchWithEvent(_3, o5, d8, { fetch: globalThis.$fetch }), _3.context = v7.context;
        const A3 = await o4(_3) || S6, I2 = _3.node.res.getHeaders();
        I2.etag = String(I2.Etag || I2.etag || `W/"${hash(A3)}"`), I2["last-modified"] = String(I2["Last-Modified"] || I2["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const M2 = [];
        d7.swr ? (d7.maxAge && M2.push(`s-maxage=${d7.maxAge}`), d7.staleMaxAge ? M2.push(`stale-while-revalidate=${d7.staleMaxAge}`) : M2.push("stale-while-revalidate")) : d7.maxAge && M2.push(`max-age=${d7.maxAge}`), M2.length > 0 && (I2["cache-control"] = M2.join(", "));
        return { code: _3.node.res.statusCode, headers: I2, body: A3 };
      }, v6);
      return defineEventHandler(async (f6) => {
        if (d7.headersOnly) {
          if (handleCacheHeaders(f6, { maxAge: d7.maxAge }))
            return;
          return o4(f6);
        }
        const v7 = await b5(f6);
        if (f6.node.res.headersSent || f6.node.res.writableEnded)
          return v7.body;
        if (!handleCacheHeaders(f6, { modifiedTime: new Date(v7.headers["last-modified"]), etag: v7.headers.etag, maxAge: d7.maxAge })) {
          f6.node.res.statusCode = v7.code;
          for (const o5 in v7.headers) {
            const d8 = v7.headers[o5];
            "set-cookie" === o5 ? f6.node.res.appendHeader(o5, splitCookiesString(d8)) : f6.node.res.setHeader(o5, d8);
          }
          return v7.body;
        }
      });
    };
    Cs = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
    Ps = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    Bs = "__unctx__";
    Ms = Ps[Bs] || (Ps[Bs] = function(o4 = {}) {
      const d7 = {};
      return { get: (f5, v6 = {}) => (d7[f5] || (d7[f5] = function(o5 = {}) {
        let d8, f6 = false;
        const checkConflict = (o6) => {
          if (d8 && d8 !== o6)
            throw new Error("Context conflict");
        };
        let v7;
        if (o5.asyncContext) {
          const d9 = o5.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          d9 ? v7 = new d9() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = () => {
          if (v7 && void 0 === d8) {
            const o6 = v7.getStore();
            if (void 0 !== o6)
              return o6;
          }
          return d8;
        };
        return { use: () => {
          const o6 = _getCurrentInstance();
          if (void 0 === o6)
            throw new Error("Context is not available");
          return o6;
        }, tryUse: () => _getCurrentInstance(), set: (o6, v8) => {
          v8 || checkConflict(o6), d8 = o6, f6 = true;
        }, unset: () => {
          d8 = void 0, f6 = false;
        }, call: (o6, b5) => {
          checkConflict(o6), d8 = o6;
          try {
            return v7 ? v7.run(o6, b5) : b5();
          } finally {
            f6 || (d8 = void 0);
          }
        }, async callAsync(o6, b5) {
          d8 = o6;
          const onRestore = () => {
            d8 = o6;
          }, onLeave = () => d8 === o6 ? onRestore : void 0;
          Us.add(onLeave);
          try {
            const w6 = v7 ? v7.run(o6, b5) : b5();
            return f6 || (d8 = void 0), await w6;
          } finally {
            Us.delete(onLeave);
          }
        } };
      }({ ...o4, ...v6 })), d7[f5], d7[f5]) };
    }());
    Ls = "__unctx_async_handlers__";
    Us = Ps[Ls] || (Ps[Ls] = /* @__PURE__ */ new Set());
    Ns = ((o4, d7 = {}) => Ms.get(o4, d7))("nitro-app", { asyncContext: true, AsyncLocalStorage: o3 });
    Fs = { name: "vinxi", routers: [{ name: "public", type: "static", base: "/", dir: "./public", root: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs", order: 0, outDir: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/.vinxi/build/public" }, { name: "ssr", type: "http", link: { client: "client" }, handler: "src/entry-server.tsx", extensions: ["js", "jsx", "ts", "tsx"], target: "server", root: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs", base: "/", outDir: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/.vinxi/build/ssr", order: 1 }, { name: "client", type: "client", base: "/_build", handler: "src/entry-client.tsx", extensions: ["js", "jsx", "ts", "tsx"], target: "browser", root: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs", outDir: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/.vinxi/build/client", order: 2 }, { name: "server-fns", type: "http", base: "/_server", handler: "../../node_modules/.pnpm/@solidjs+start@1.0.6_@testing-library+jest-dom@6.4.5_vitest@1.6.0_@types+node@20.12.12_@vites_g7q73gmexpgjyzdyyqrs7p6bee/node_modules/@solidjs/start/dist/runtime/server-handler.js", target: "server", root: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs", outDir: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/.vinxi/build/server-fns", order: 3 }], server: { compressPublicAssets: { brotli: true }, routeRules: { "/_build/assets/**": { headers: { "cache-control": "public, immutable, max-age=31536000" } } }, experimental: { asyncContext: true }, preset: "cloudflare-pages", rollupConfig: { external: ["__STATIC_CONTENT_MANIFEST", "node:async_hooks"] } }, root: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs" };
    Ds = { ssr: { "_auth-5VKwSiTq.js": { file: "assets/auth-5VKwSiTq.js", name: "auth", imports: ["_index-CrM3W-L8.js", "_utils-Cz4PRbC3.js"] }, "_client-CMZyFppd.js": { file: "assets/client-CMZyFppd.js", name: "client", imports: ["_utils-Cz4PRbC3.js"] }, "_index-CrM3W-L8.js": { file: "assets/index-CrM3W-L8.js", name: "index" }, "_routing-bDZhm0Q2.js": { file: "assets/routing-bDZhm0Q2.js", name: "routing" }, "_utils-Cz4PRbC3.js": { file: "assets/utils-Cz4PRbC3.js", name: "utils" }, "src/routes/[...404].tsx?pick=default&pick=$css": { file: "_...404_.js", name: "_...404_", src: "src/routes/[...404].tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true }, "src/routes/api/auth/[...solidauth].ts?pick=GET": { file: "_...solidauth_.js", name: "_...solidauth_", src: "src/routes/api/auth/[...solidauth].ts?pick=GET", isEntry: true, isDynamicEntry: true, imports: ["_auth-5VKwSiTq.js", "_index-CrM3W-L8.js", "_utils-Cz4PRbC3.js"] }, "src/routes/api/auth/[...solidauth].ts?pick=POST": { file: "_...solidauth_2.js", name: "_...solidauth_", src: "src/routes/api/auth/[...solidauth].ts?pick=POST", isEntry: true, isDynamicEntry: true, imports: ["_auth-5VKwSiTq.js", "_index-CrM3W-L8.js", "_utils-Cz4PRbC3.js"] }, "src/routes/index.tsx?pick=default&pick=$css": { file: "index.js", name: "index", src: "src/routes/index.tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true, imports: ["_client-CMZyFppd.js", "_routing-bDZhm0Q2.js", "_utils-Cz4PRbC3.js"] }, "src/routes/protected.tsx?pick=default&pick=$css": { file: "protected.js", name: "protected", src: "src/routes/protected.tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true, imports: ["_client-CMZyFppd.js", "_utils-Cz4PRbC3.js"] }, "virtual:$vinxi/handler/ssr": { file: "ssr.js", name: "ssr", src: "virtual:$vinxi/handler/ssr", isEntry: true, imports: ["_client-CMZyFppd.js", "_routing-bDZhm0Q2.js", "_index-CrM3W-L8.js", "_utils-Cz4PRbC3.js"], dynamicImports: ["src/routes/[...404].tsx?pick=default&pick=$css", "src/routes/[...404].tsx?pick=default&pick=$css", "src/routes/index.tsx?pick=default&pick=$css", "src/routes/index.tsx?pick=default&pick=$css", "src/routes/protected.tsx?pick=default&pick=$css", "src/routes/protected.tsx?pick=default&pick=$css", "src/routes/api/auth/[...solidauth].ts?pick=GET", "src/routes/api/auth/[...solidauth].ts?pick=GET", "src/routes/api/auth/[...solidauth].ts?pick=POST", "src/routes/api/auth/[...solidauth].ts?pick=POST"], css: ["assets/ssr-BKBk4KIp.css"] } }, client: { "_client-C1GYr_Eu.js": { file: "assets/client-C1GYr_Eu.js", name: "client", imports: ["_web-Dhx91zgx.js"] }, "_routing-tKwY40Eo.js": { file: "assets/routing-tKwY40Eo.js", name: "routing", imports: ["_web-Dhx91zgx.js"] }, "_web-Dhx91zgx.js": { file: "assets/web-Dhx91zgx.js", name: "web" }, "src/routes/[...404].tsx?pick=default&pick=$css": { file: "assets/_...404_-0fZBRhDp.js", name: "_...404_", src: "src/routes/[...404].tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true, imports: ["_web-Dhx91zgx.js"] }, "src/routes/index.tsx?pick=default&pick=$css": { file: "assets/index-_FEB4ok9.js", name: "index", src: "src/routes/index.tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true, imports: ["_web-Dhx91zgx.js", "_client-C1GYr_Eu.js", "_routing-tKwY40Eo.js"] }, "src/routes/protected.tsx?pick=default&pick=$css": { file: "assets/protected-Ca01e5qM.js", name: "protected", src: "src/routes/protected.tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true, imports: ["_web-Dhx91zgx.js", "_client-C1GYr_Eu.js"] }, "virtual:$vinxi/handler/client": { file: "assets/client-CcV6Y21W.js", name: "client", src: "virtual:$vinxi/handler/client", isEntry: true, imports: ["_web-Dhx91zgx.js", "_client-C1GYr_Eu.js", "_routing-tKwY40Eo.js"], dynamicImports: ["src/routes/[...404].tsx?pick=default&pick=$css", "src/routes/index.tsx?pick=default&pick=$css", "src/routes/protected.tsx?pick=default&pick=$css"], css: ["assets/client-BKBk4KIp.css"] } }, "server-fns": { "_auth.mjs": { file: "auth.mjs", name: "auth", imports: ["_server-fns.mjs", "_utils.mjs"] }, "_client.mjs": { file: "client.mjs", name: "client", imports: ["_utils.mjs"] }, "_routing.mjs": { file: "routing.mjs", name: "routing" }, "_server-fns.mjs": { file: "server-fns.mjs", name: "server-fns", dynamicImports: ["src/routes/[...404].tsx?pick=default&pick=$css", "src/routes/[...404].tsx?pick=default&pick=$css", "src/routes/index.tsx?pick=default&pick=$css", "src/routes/index.tsx?pick=default&pick=$css", "src/routes/protected.tsx?pick=default&pick=$css", "src/routes/protected.tsx?pick=default&pick=$css", "src/routes/api/auth/[...solidauth].ts?pick=GET", "src/routes/api/auth/[...solidauth].ts?pick=GET", "src/routes/api/auth/[...solidauth].ts?pick=POST", "src/routes/api/auth/[...solidauth].ts?pick=POST", "src/app.tsx"] }, "_utils.mjs": { file: "utils.mjs", name: "utils" }, "src/app.tsx": { file: "app.mjs", name: "app", src: "src/app.tsx", isDynamicEntry: true, imports: ["_client.mjs", "_server-fns.mjs", "_routing.mjs", "_utils.mjs"], css: ["assets/app-BKBk4KIp.css"] }, "src/routes/[...404].tsx?pick=default&pick=$css": { file: "_...404_.mjs", name: "_...404_", src: "src/routes/[...404].tsx?pick=default&pick=$css", isDynamicEntry: true }, "src/routes/api/auth/[...solidauth].ts?pick=GET": { file: "_...solidauth_.mjs", name: "_...solidauth_", src: "src/routes/api/auth/[...solidauth].ts?pick=GET", isDynamicEntry: true, imports: ["_auth.mjs", "_server-fns.mjs", "_utils.mjs"] }, "src/routes/api/auth/[...solidauth].ts?pick=POST": { file: "_...solidauth_2.mjs", name: "_...solidauth_", src: "src/routes/api/auth/[...solidauth].ts?pick=POST", isDynamicEntry: true, imports: ["_auth.mjs", "_server-fns.mjs", "_utils.mjs"] }, "src/routes/index.tsx?pick=default&pick=$css": { file: "index.mjs", name: "index", src: "src/routes/index.tsx?pick=default&pick=$css", isDynamicEntry: true, imports: ["_client.mjs", "_routing.mjs", "_utils.mjs"] }, "src/routes/protected.tsx?pick=default&pick=$css": { file: "protected.mjs", name: "protected", src: "src/routes/protected.tsx?pick=default&pick=$css", isDynamicEntry: true, imports: ["_client.mjs", "_utils.mjs"] }, "virtual:$vinxi/handler/server-fns": { file: "entry.mjs", name: "entry", src: "virtual:$vinxi/handler/server-fns", isEntry: true, imports: ["_server-fns.mjs"] } } };
    Hs = { ssr: {}, client: {}, "server-fns": {} };
    qs = "Invariant Violation";
    ({ setPrototypeOf: Ws = function(o4, d7) {
      return o4.__proto__ = d7, o4;
    } } = Object);
    InvariantError = class extends Error {
      framesToPop = 1;
      name = qs;
      constructor(o4 = qs) {
        super("number" == typeof o4 ? `${qs}: ${o4} (see https://github.com/apollographql/invariant-packages)` : o4), Ws(this, InvariantError.prototype);
      }
    };
    Vs = /^[A-Za-z]:\//;
    Ks = /^[/\\]{2}/;
    Zs = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
    Ys = /^[A-Za-z]:$/;
    normalize = function(o4) {
      if (0 === o4.length)
        return ".";
      const d7 = (o4 = function(o5 = "") {
        return o5 ? o5.replace(/\\/g, "/").replace(Vs, (o6) => o6.toUpperCase()) : o5;
      }(o4)).match(Ks), f5 = isAbsolute(o4), v6 = "/" === o4[o4.length - 1];
      return 0 === (o4 = function(o5, d8) {
        let f6 = "", v7 = 0, b5 = -1, w6 = 0, E4 = null;
        for (let S6 = 0; S6 <= o5.length; ++S6) {
          if (S6 < o5.length)
            E4 = o5[S6];
          else {
            if ("/" === E4)
              break;
            E4 = "/";
          }
          if ("/" === E4) {
            if (b5 === S6 - 1 || 1 === w6)
              ;
            else if (2 === w6) {
              if (f6.length < 2 || 2 !== v7 || "." !== f6[f6.length - 1] || "." !== f6[f6.length - 2]) {
                if (f6.length > 2) {
                  const o6 = f6.lastIndexOf("/");
                  -1 === o6 ? (f6 = "", v7 = 0) : (f6 = f6.slice(0, o6), v7 = f6.length - 1 - f6.lastIndexOf("/")), b5 = S6, w6 = 0;
                  continue;
                }
                if (f6.length > 0) {
                  f6 = "", v7 = 0, b5 = S6, w6 = 0;
                  continue;
                }
              }
              d8 && (f6 += f6.length > 0 ? "/.." : "..", v7 = 2);
            } else
              f6.length > 0 ? f6 += `/${o5.slice(b5 + 1, S6)}` : f6 = o5.slice(b5 + 1, S6), v7 = S6 - b5 - 1;
            b5 = S6, w6 = 0;
          } else
            "." === E4 && -1 !== w6 ? ++w6 : w6 = -1;
        }
        return f6;
      }(o4, !f5)).length ? f5 ? "/" : v6 ? "./" : "." : (v6 && (o4 += "/"), Ys.test(o4) && (o4 += "/"), d7 ? f5 ? `//${o4}` : `//./${o4}` : f5 && !isAbsolute(o4) ? `/${o4}` : o4);
    };
    join = function(...o4) {
      if (0 === o4.length)
        return ".";
      let d7;
      for (const f5 of o4)
        f5 && f5.length > 0 && (void 0 === d7 ? d7 = f5 : d7 += `/${f5}`);
      return void 0 === d7 ? "." : normalize(d7.replace(/\/\/+/g, "/"));
    };
    isAbsolute = function(o4) {
      return Zs.test(o4);
    };
    Gs = globalThis.URL;
    pathToFileURL = function(o4) {
      return new Gs(o4);
    };
    Qs = {};
    Js = [function(o4) {
      const d7 = function(o5) {
        return { config: { ...o5, buildManifest: Ds, routeManifest: Hs }, getRouter: (d8) => o5.routers.find((o6) => o6.name === d8) };
      }(Fs);
      globalThis.app = d7;
    }, function(o4) {
      globalThis.$handle = (d7) => o4.h3App.handler(d7);
    }, function() {
      globalThis.MANIFEST = function(o4) {
        const d7 = new Proxy({}, { get(d8, f5) {
          invariant("string" == typeof f5, "Bundler name expected");
          const v6 = o4.getRouter(f5), b5 = o4.config.buildManifest[f5];
          return invariant("static" !== v6.type, "manifest not available for static router"), { handler: v6.handler, async assets() {
            let o5 = {};
            o5[v6.handler] = await this.inputs[v6.handler].assets();
            for (const d9 of await v6.internals.routes?.getRoutes() ?? [])
              o5[d9.filePath] = await this.inputs[d9.filePath].assets();
            return o5;
          }, routes: async () => await v6.internals.routes?.getRoutes() ?? [], async json() {
            let o5 = {};
            for (const d9 of Object.keys(this.inputs))
              o5[d9] = { output: this.inputs[d9].output.path, assets: await this.inputs[d9].assets() };
            return o5;
          }, chunks: new Proxy({}, { get(o5, d9) {
            invariant("string" == typeof d9, "Chunk expected");
            const f6 = join(v6.outDir, v6.base, d9 + ".mjs");
            return { import: () => globalThis.$$chunks[d9 + ".mjs"] ? globalThis.$$chunks[d9 + ".mjs"] : import(pathToFileURL(f6).href), output: { path: f6 } };
          } }), inputs: new Proxy({}, { ownKeys: (o5) => Object.keys(b5).filter((o6) => b5[o6].isEntry).map((o6) => o6), getOwnPropertyDescriptor: (o5) => ({ enumerable: true, configurable: true }), get(d9, f6) {
            if (invariant("string" == typeof f6, "Input expected"), "server" === v6.target) {
              const d10 = f6 === v6.handler ? virtualId(handlerModule(v6)) : f6;
              return { assets: () => createHtmlTagsForAssets(v6, o4, findAssetsInViteManifest(b5, d10)), output: { path: join(v6.outDir, v6.base, b5[d10].file) } };
            }
            if ("browser" === v6.target) {
              const d10 = f6 !== v6.handler || f6.endsWith(".html") ? f6 : virtualId(handlerModule(v6));
              return { import: () => import(joinURL(o4.config.server.baseURL ?? "", v6.base, b5[d10].file)), assets: () => createHtmlTagsForAssets(v6, o4, findAssetsInViteManifest(b5, d10)), output: { path: joinURL(o4.config.server.baseURL ?? "", v6.base, b5[d10].file) } };
            }
          } }) };
        } });
        return d7;
      }(globalThis.app);
    }, function() {
      globalThis.$$chunks = Qs;
    }];
    errorHandler = function(o4, d7) {
      const { stack: f5, statusCode: v6, statusMessage: b5, message: w6 } = function(o5) {
        const d8 = "function" == typeof Jr.cwd ? Jr.cwd() : "/", f6 = (o5.stack || "").split("\n").splice(1).filter((o6) => o6.includes("at ")).map((o6) => ({ text: o6.replace(d8 + "/", "./").replace("webpack:/", "").replace("file://", "").trim(), internal: o6.includes("node_modules") && !o6.includes(".cache") || o6.includes("internal") || o6.includes("new Promise") })), v7 = o5.statusCode || 500, b6 = o5.statusMessage ?? (404 === v7 ? "Not Found" : ""), w7 = o5.message || o5.toString();
        return { stack: f6, statusCode: v7, statusMessage: b6, message: w7 };
      }(o4), E4 = { url: d7.path || "", statusCode: v6, statusMessage: b5, message: w6, stack: void 0 };
      if (o4.unhandled || o4.fatal) {
        const d8 = ["[nitro]", "[request error]", o4.unhandled && "[unhandled]", o4.fatal && "[fatal]"].filter(Boolean).join(" ");
        console.error(d8, o4.message + "\n" + f5.map((o5) => "  " + o5.text).join("  \n"));
      }
      return setResponseStatus(d7, v6, b5), function(o5) {
        if (hasReqHeader(o5, "accept", "text/html"))
          return false;
        return hasReqHeader(o5, "accept", "application/json") || hasReqHeader(o5, "user-agent", "curl/") || hasReqHeader(o5, "user-agent", "httpie/") || hasReqHeader(o5, "sec-fetch-mode", "cors") || o5.path.startsWith("/api/") || o5.path.endsWith(".json");
      }(d7) ? (setResponseHeader(d7, "Content-Type", "application/json"), send2(d7, JSON.stringify(E4))) : (setResponseHeader(d7, "Content-Type", "text/html"), send2(d7, function(o5) {
        const d8 = o5.statusCode || 500, f6 = o5.statusMessage || "Request Error";
        return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${d8} ${f6}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${d8} ${f6}</h2>
          </header>
          <code>
            ${o5.message}<br><br>
            ${"\n" + (o5.stack || []).map((o6) => `&nbsp;&nbsp;${o6}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
      }(E4)));
    };
    Xs = Symbol("error");
    en = { context: null, owner: null, owned: null, cleanups: null };
    tn = null;
    createRenderEffect = function(o4, d7) {
      tn = createOwner();
      try {
        o4(d7);
      } catch (o5) {
        handleError(o5);
      } finally {
        tn = tn.owner;
      }
    };
    rn = batch;
    sn = {};
    nn = createContext();
    an = ((o4) => (o4[o4.AggregateError = 1] = "AggregateError", o4[o4.ArrowFunction = 2] = "ArrowFunction", o4[o4.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", o4[o4.ObjectAssign = 8] = "ObjectAssign", o4[o4.BigIntTypedArray = 16] = "BigIntTypedArray", o4))(an || {});
    cn = "__SEROVAL_REFS__";
    ln = "$R";
    un = `self.${ln}`;
    dn = /* @__PURE__ */ new Map();
    hn = /* @__PURE__ */ new Map();
    "undefined" != typeof globalThis ? Object.defineProperty(globalThis, cn, { value: hn, configurable: true, writable: false, enumerable: false }) : "undefined" != typeof self ? Object.defineProperty(self, cn, { value: hn, configurable: true, writable: false, enumerable: false }) : "undefined" != typeof global && Object.defineProperty(global, cn, { value: hn, configurable: true, writable: false, enumerable: false });
    pn = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" };
    gn = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 };
    mn = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" };
    yn = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" };
    vn = y6(2);
    bn = y6(3);
    wn = y6(1);
    En = y6(0);
    xn = y6(4);
    Sn = y6(5);
    _n = y6(6);
    An = y6(7);
    ({ toString: $n } = Object.prototype);
    Rn = class extends Error {
      constructor(o4, d7) {
        super(function(o5, d8) {
          return d8 instanceof Error ? `Seroval caught an error during the ${o5} process.
  
${d8.name}
${d8.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${o5} process.

"${$n.call(d8)}"

For more information, please check the "cause" property of this error.`;
        }(o4, d7)), this.cause = d7;
      }
    };
    kn = class extends Rn {
      constructor(o4) {
        super("parsing", o4);
      }
    };
    In = class extends Rn {
      constructor(o4) {
        super("serialization", o4);
      }
    };
    zn = class extends Error {
      constructor(o4) {
        super(`The value ${$n.call(o4)} of type "${typeof o4}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`), this.value = o4;
      }
    };
    jn = class extends Error {
      constructor(o4) {
        super('Unsupported node type "' + o4.t + '".');
      }
    };
    Tn = class extends Error {
      constructor(o4) {
        super('Missing plugin for tag "' + o4 + '".');
      }
    };
    Cn = class extends Error {
      constructor(o4) {
        super('Missing reference for the value "' + $n.call(o4) + '" of type "' + typeof o4 + '"'), this.value = o4;
      }
    };
    Pn = {};
    On = {};
    Bn = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
    Mn = class {
      constructor(o4) {
        this.marked = /* @__PURE__ */ new Set(), this.plugins = o4.plugins, this.features = 31 ^ (o4.disabledFeatures || 0), this.refs = o4.refs || /* @__PURE__ */ new Map();
      }
      markRef(o4) {
        this.marked.add(o4);
      }
      isMarked(o4) {
        return this.marked.has(o4);
      }
      getIndexedValue(o4) {
        let d7 = this.refs.get(o4);
        if (null != d7)
          return this.markRef(d7), { type: 1, value: Qe2(d7) };
        let f5 = this.refs.size;
        return this.refs.set(o4, f5), { type: 0, value: f5 };
      }
      getReference(o4) {
        let d7 = this.getIndexedValue(o4);
        return 1 === d7.type ? d7 : re$1(o4) ? { type: 2, value: Ve$1(d7.value, o4) } : d7;
      }
      getStrictReference(o4) {
        f$4(re$1(o4), new zn(o4));
        let d7 = this.getIndexedValue(o4);
        return 1 === d7.type ? d7.value : Ve$1(d7.value, o4);
      }
      parseFunction(o4) {
        return this.getStrictReference(o4);
      }
      parseWellKnownSymbol(o4) {
        let d7 = this.getReference(o4);
        return 0 !== d7.type ? d7.value : (f$4(o4 in gn, new zn(o4)), function(o5, d8) {
          return { t: 17, i: o5, s: gn[d8], l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
        }(d7.value, o4));
      }
      parseSpecialReference(o4) {
        let d7 = this.getIndexedValue(Bn[o4]);
        return 1 === d7.type ? d7.value : { t: 26, i: d7.value, s: o4, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
      }
      parseIteratorFactory() {
        let o4 = this.getIndexedValue(Pn);
        return 1 === o4.type ? o4.value : { t: 27, i: o4.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseWellKnownSymbol(Symbol.iterator), b: void 0, o: void 0 };
      }
      parseAsyncIteratorFactory() {
        let o4 = this.getIndexedValue(On);
        return 1 === o4.type ? o4.value : { t: 29, i: o4.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], f: void 0, b: void 0, o: void 0 };
      }
      createObjectNode(o4, d7, f5, v6) {
        return { t: f5 ? 11 : 10, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: v6, e: void 0, a: void 0, f: void 0, b: void 0, o: ue$1(d7) };
      }
      createMapNode(o4, d7, f5, v6) {
        return { t: 8, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: { k: d7, v: f5, s: v6 }, a: void 0, f: this.parseSpecialReference(0), b: void 0, o: void 0 };
      }
      createPromiseConstructorNode(o4) {
        return { t: 22, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseSpecialReference(1), b: void 0, o: void 0 };
      }
    };
    Ln = /^[$A-Z_][0-9A-Z_$]*$/i;
    Un = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: void 0 };
    Nn = class {
      constructor(o4) {
        this.stack = [], this.flags = [], this.assignments = [], this.plugins = o4.plugins, this.features = o4.features, this.marked = new Set(o4.markedRefs);
      }
      createFunction(o4, d7) {
        return 2 & this.features ? (1 === o4.length ? o4[0] : "(" + o4.join(",") + ")") + "=>" + d7 : "function(" + o4.join(",") + "){return " + d7 + "}";
      }
      createEffectfulFunction(o4, d7) {
        return 2 & this.features ? (1 === o4.length ? o4[0] : "(" + o4.join(",") + ")") + "=>{" + d7 + "}" : "function(" + o4.join(",") + "){" + d7 + "}";
      }
      markRef(o4) {
        this.marked.add(o4);
      }
      isMarked(o4) {
        return this.marked.has(o4);
      }
      pushObjectFlag(o4, d7) {
        0 !== o4 && (this.markRef(d7), this.flags.push({ type: o4, value: this.getRefParam(d7) }));
      }
      resolveFlags() {
        let o4 = "";
        for (let d7 = 0, f5 = this.flags, v6 = f5.length; d7 < v6; d7++) {
          let v7 = f5[d7];
          o4 += Un[v7.type] + "(" + v7.value + "),";
        }
        return o4;
      }
      resolvePatches() {
        let o4 = lr$2(this.assignments), d7 = this.resolveFlags();
        return o4 ? d7 ? o4 + d7 : o4 : d7;
      }
      createAssignment(o4, d7) {
        this.assignments.push({ t: 0, s: o4, k: void 0, v: d7 });
      }
      createAddAssignment(o4, d7) {
        this.assignments.push({ t: 1, s: this.getRefParam(o4), k: void 0, v: d7 });
      }
      createSetAssignment(o4, d7, f5) {
        this.assignments.push({ t: 2, s: this.getRefParam(o4), k: d7, v: f5 });
      }
      createDeleteAssignment(o4, d7) {
        this.assignments.push({ t: 3, s: this.getRefParam(o4), k: d7, v: void 0 });
      }
      createArrayAssign(o4, d7, f5) {
        this.createAssignment(this.getRefParam(o4) + "[" + d7 + "]", f5);
      }
      createObjectAssign(o4, d7, f5) {
        this.createAssignment(this.getRefParam(o4) + "." + d7, f5);
      }
      isIndexedValueInStack(o4) {
        return 4 === o4.t && this.stack.includes(o4.i);
      }
      serializeReference(o4) {
        return this.assignIndexedValue(o4.i, cn + '.get("' + o4.s + '")');
      }
      serializeArrayItem(o4, d7, f5) {
        return d7 ? this.isIndexedValueInStack(d7) ? (this.markRef(o4), this.createArrayAssign(o4, f5, this.getRefParam(d7.i)), "") : this.serialize(d7) : "";
      }
      serializeArray(o4) {
        let d7 = o4.i;
        if (o4.l) {
          this.stack.push(d7);
          let f5 = o4.a, v6 = this.serializeArrayItem(d7, f5[0], 0), b5 = "" === v6;
          for (let w6, E4 = 1, S6 = o4.l; E4 < S6; E4++)
            w6 = this.serializeArrayItem(d7, f5[E4], E4), v6 += "," + w6, b5 = "" === w6;
          return this.stack.pop(), this.pushObjectFlag(o4.o, o4.i), this.assignIndexedValue(d7, "[" + v6 + (b5 ? ",]" : "]"));
        }
        return this.assignIndexedValue(d7, "[]");
      }
      serializeProperty(o4, d7, f5) {
        if ("string" == typeof d7) {
          let v6 = Number(d7), b5 = v6 >= 0 && v6.toString() === d7 || je$2(d7);
          if (this.isIndexedValueInStack(f5)) {
            let w6 = this.getRefParam(f5.i);
            return this.markRef(o4.i), b5 && v6 != v6 ? this.createObjectAssign(o4.i, d7, w6) : this.createArrayAssign(o4.i, b5 ? d7 : '"' + d7 + '"', w6), "";
          }
          return (b5 ? d7 : '"' + d7 + '"') + ":" + this.serialize(f5);
        }
        return "[" + this.serialize(d7) + "]:" + this.serialize(f5);
      }
      serializeProperties(o4, d7) {
        let f5 = d7.s;
        if (f5) {
          let v6 = d7.k, b5 = d7.v;
          this.stack.push(o4.i);
          let w6 = this.serializeProperty(o4, v6[0], b5[0]);
          for (let d8 = 1, E4 = w6; d8 < f5; d8++)
            E4 = this.serializeProperty(o4, v6[d8], b5[d8]), w6 += (E4 && w6 && ",") + E4;
          return this.stack.pop(), "{" + w6 + "}";
        }
        return "{}";
      }
      serializeObject(o4) {
        return this.pushObjectFlag(o4.o, o4.i), this.assignIndexedValue(o4.i, this.serializeProperties(o4, o4.p));
      }
      serializeWithObjectAssign(o4, d7, f5) {
        let v6 = this.serializeProperties(o4, d7);
        return "{}" !== v6 ? "Object.assign(" + f5 + "," + v6 + ")" : f5;
      }
      serializeStringKeyAssignment(o4, d7, f5, v6) {
        let b5 = this.serialize(v6), w6 = Number(f5), E4 = w6 >= 0 && w6.toString() === f5 || je$2(f5);
        if (this.isIndexedValueInStack(v6))
          E4 && w6 != w6 ? this.createObjectAssign(o4.i, f5, b5) : this.createArrayAssign(o4.i, E4 ? f5 : '"' + f5 + '"', b5);
        else {
          let v7 = this.assignments;
          this.assignments = d7, E4 && w6 != w6 ? this.createObjectAssign(o4.i, f5, b5) : this.createArrayAssign(o4.i, E4 ? f5 : '"' + f5 + '"', b5), this.assignments = v7;
        }
      }
      serializeAssignment(o4, d7, f5, v6) {
        if ("string" == typeof f5)
          this.serializeStringKeyAssignment(o4, d7, f5, v6);
        else {
          let b5 = this.stack;
          this.stack = [];
          let w6 = this.serialize(v6);
          this.stack = b5;
          let E4 = this.assignments;
          this.assignments = d7, this.createArrayAssign(o4.i, this.serialize(f5), w6), this.assignments = E4;
        }
      }
      serializeAssignments(o4, d7) {
        let f5 = d7.s;
        if (f5) {
          let v6 = [], b5 = d7.k, w6 = d7.v;
          this.stack.push(o4.i);
          for (let d8 = 0; d8 < f5; d8++)
            this.serializeAssignment(o4, v6, b5[d8], w6[d8]);
          return this.stack.pop(), lr$2(v6);
        }
      }
      serializeDictionary(o4, d7) {
        if (o4.p)
          if (8 & this.features)
            d7 = this.serializeWithObjectAssign(o4, o4.p, d7);
          else {
            this.markRef(o4.i);
            let f5 = this.serializeAssignments(o4, o4.p);
            if (f5)
              return "(" + this.assignIndexedValue(o4.i, d7) + "," + f5 + this.getRefParam(o4.i) + ")";
          }
        return this.assignIndexedValue(o4.i, d7);
      }
      serializeNullConstructor(o4) {
        return this.pushObjectFlag(o4.o, o4.i), this.serializeDictionary(o4, "Object.create(null)");
      }
      serializeDate(o4) {
        return this.assignIndexedValue(o4.i, 'new Date("' + o4.s + '")');
      }
      serializeRegExp(o4) {
        return this.assignIndexedValue(o4.i, "/" + o4.c + "/" + o4.m);
      }
      serializeSetItem(o4, d7) {
        return this.isIndexedValueInStack(d7) ? (this.markRef(o4), this.createAddAssignment(o4, this.getRefParam(d7.i)), "") : this.serialize(d7);
      }
      serializeSet(o4) {
        let d7 = "new Set", f5 = o4.l, v6 = o4.i;
        if (f5) {
          let b5 = o4.a;
          this.stack.push(v6);
          let w6 = this.serializeSetItem(v6, b5[0]);
          for (let o5 = 1, d8 = w6; o5 < f5; o5++)
            d8 = this.serializeSetItem(v6, b5[o5]), w6 += (d8 && w6 && ",") + d8;
          this.stack.pop(), w6 && (d7 += "([" + w6 + "])");
        }
        return this.assignIndexedValue(v6, d7);
      }
      serializeMapEntry(o4, d7, f5, v6) {
        if (this.isIndexedValueInStack(d7)) {
          let b5 = this.getRefParam(d7.i);
          if (this.markRef(o4), this.isIndexedValueInStack(f5)) {
            let d8 = this.getRefParam(f5.i);
            return this.createSetAssignment(o4, b5, d8), "";
          }
          if (4 !== f5.t && null != f5.i && this.isMarked(f5.i)) {
            let d8 = "(" + this.serialize(f5) + ",[" + v6 + "," + v6 + "])";
            return this.createSetAssignment(o4, b5, this.getRefParam(f5.i)), this.createDeleteAssignment(o4, v6), d8;
          }
          let w6 = this.stack;
          return this.stack = [], this.createSetAssignment(o4, b5, this.serialize(f5)), this.stack = w6, "";
        }
        if (this.isIndexedValueInStack(f5)) {
          let b5 = this.getRefParam(f5.i);
          if (this.markRef(o4), 4 !== d7.t && null != d7.i && this.isMarked(d7.i)) {
            let f6 = "(" + this.serialize(d7) + ",[" + v6 + "," + v6 + "])";
            return this.createSetAssignment(o4, this.getRefParam(d7.i), b5), this.createDeleteAssignment(o4, v6), f6;
          }
          let w6 = this.stack;
          return this.stack = [], this.createSetAssignment(o4, this.serialize(d7), b5), this.stack = w6, "";
        }
        return "[" + this.serialize(d7) + "," + this.serialize(f5) + "]";
      }
      serializeMap(o4) {
        let d7 = "new Map", f5 = o4.e.s, v6 = o4.i, b5 = o4.f, w6 = this.getRefParam(b5.i);
        if (f5) {
          let b6 = o4.e.k, E4 = o4.e.v;
          this.stack.push(v6);
          let S6 = this.serializeMapEntry(v6, b6[0], E4[0], w6);
          for (let o5 = 1, d8 = S6; o5 < f5; o5++)
            d8 = this.serializeMapEntry(v6, b6[o5], E4[o5], w6), S6 += (d8 && S6 && ",") + d8;
          this.stack.pop(), S6 && (d7 += "([" + S6 + "])");
        }
        return 26 === b5.t && (this.markRef(b5.i), d7 = "(" + this.serialize(b5) + "," + d7 + ")"), this.assignIndexedValue(v6, d7);
      }
      serializeArrayBuffer(o4) {
        let d7 = "new Uint8Array(", f5 = o4.s, v6 = f5.length;
        if (v6) {
          d7 += "[" + f5[0];
          for (let o5 = 1; o5 < v6; o5++)
            d7 += "," + f5[o5];
          d7 += "]";
        }
        return this.assignIndexedValue(o4.i, d7 + ").buffer");
      }
      serializeTypedArray(o4) {
        return this.assignIndexedValue(o4.i, "new " + o4.c + "(" + this.serialize(o4.f) + "," + o4.b + "," + o4.l + ")");
      }
      serializeDataView(o4) {
        return this.assignIndexedValue(o4.i, "new DataView(" + this.serialize(o4.f) + "," + o4.b + "," + o4.l + ")");
      }
      serializeAggregateError(o4) {
        let d7 = o4.i;
        this.stack.push(d7);
        let f5 = this.serializeDictionary(o4, 'new AggregateError([],"' + o4.m + '")');
        return this.stack.pop(), f5;
      }
      serializeError(o4) {
        return this.serializeDictionary(o4, "new " + yn[o4.s] + '("' + o4.m + '")');
      }
      serializePromise(o4) {
        let d7, f5 = o4.f, v6 = o4.i, b5 = o4.s ? "Promise.resolve" : "Promise.reject";
        if (this.isIndexedValueInStack(f5)) {
          let v7 = this.getRefParam(f5.i);
          d7 = b5 + (o4.s ? "().then(" + this.createFunction([], v7) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + v7) + ")");
        } else {
          this.stack.push(v6);
          let o5 = this.serialize(f5);
          this.stack.pop(), d7 = b5 + "(" + o5 + ")";
        }
        return this.assignIndexedValue(v6, d7);
      }
      serializeWellKnownSymbol(o4) {
        return this.assignIndexedValue(o4.i, pn[o4.s]);
      }
      serializeBoxed(o4) {
        return this.assignIndexedValue(o4.i, "Object(" + this.serialize(o4.f) + ")");
      }
      serializePlugin(o4) {
        let d7 = this.plugins;
        if (d7)
          for (let f5 = 0, v6 = d7.length; f5 < v6; f5++) {
            let v7 = d7[f5];
            if (v7.tag === o4.c)
              return this.assignIndexedValue(o4.i, v7.serialize(o4.s, this, { id: o4.i }));
          }
        throw new Tn(o4.c);
      }
      getConstructor(o4) {
        let d7 = this.serialize(o4);
        return d7 === this.getRefParam(o4.i) ? d7 : "(" + d7 + ")";
      }
      serializePromiseConstructor(o4) {
        return this.assignIndexedValue(o4.i, this.getConstructor(o4.f) + "()");
      }
      serializePromiseResolve(o4) {
        return this.getConstructor(o4.a[0]) + "(" + this.getRefParam(o4.i) + "," + this.serialize(o4.a[1]) + ")";
      }
      serializePromiseReject(o4) {
        return this.getConstructor(o4.a[0]) + "(" + this.getRefParam(o4.i) + "," + this.serialize(o4.a[1]) + ")";
      }
      serializeSpecialReferenceValue(o4) {
        switch (o4) {
          case 0:
            return "[]";
          case 1:
            return this.createFunction(["s", "f", "p"], "((p=new Promise(" + this.createEffectfulFunction(["a", "b"], "s=a,f=b") + ")).s=s,p.f=f,p)");
          case 2:
            return this.createEffectfulFunction(["p", "d"], 'p.s(d),p.status="success",p.value=d;delete p.s;delete p.f');
          case 3:
            return this.createEffectfulFunction(["p", "d"], 'p.f(d),p.status="failure",p.value=d;delete p.s;delete p.f');
          case 4:
            return this.createFunction(["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],p=0,f=" + this.createEffectfulFunction(["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") + ",n=" + this.createEffectfulFunction(["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))') + ",e=" + this.createFunction(["o", "t"], "(a&&(l[t=p++]=o),n(o)," + this.createEffectfulFunction([], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + this.createFunction(["o"], "e(o)") + ",next:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
          default:
            return "";
        }
      }
      serializeSpecialReference(o4) {
        return this.assignIndexedValue(o4.i, this.serializeSpecialReferenceValue(o4.s));
      }
      serializeIteratorFactory(o4) {
        let d7 = "", f5 = false;
        return 4 !== o4.f.t && (this.markRef(o4.f.i), d7 = "(" + this.serialize(o4.f) + ",", f5 = true), d7 += this.assignIndexedValue(o4.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(o4.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), f5 && (d7 += ")"), d7;
      }
      serializeIteratorFactoryInstance(o4) {
        return this.getConstructor(o4.a[0]) + "(" + this.serialize(o4.a[1]) + ")";
      }
      serializeAsyncIteratorFactory(o4) {
        let d7 = o4.a[0], f5 = o4.a[1], v6 = "";
        4 !== d7.t && (this.markRef(d7.i), v6 += "(" + this.serialize(d7)), 4 !== f5.t && (this.markRef(f5.i), v6 += (v6 ? "," : "(") + this.serialize(f5)), v6 && (v6 += ",");
        let b5 = this.assignIndexedValue(o4.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(f5.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(p.push(t=" + this.getRefParam(d7.i) + "()),t):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
        return v6 ? v6 + b5 + ")" : b5;
      }
      serializeAsyncIteratorFactoryInstance(o4) {
        return this.getConstructor(o4.a[0]) + "(" + this.serialize(o4.a[1]) + ")";
      }
      serializeStreamConstructor(o4) {
        let d7 = this.assignIndexedValue(o4.i, this.getConstructor(o4.f) + "()"), f5 = o4.a.length;
        if (f5) {
          let v6 = this.serialize(o4.a[0]);
          for (let d8 = 1; d8 < f5; d8++)
            v6 += "," + this.serialize(o4.a[d8]);
          return "(" + d7 + "," + v6 + "," + this.getRefParam(o4.i) + ")";
        }
        return d7;
      }
      serializeStreamNext(o4) {
        return this.getRefParam(o4.i) + ".next(" + this.serialize(o4.f) + ")";
      }
      serializeStreamThrow(o4) {
        return this.getRefParam(o4.i) + ".throw(" + this.serialize(o4.f) + ")";
      }
      serializeStreamReturn(o4) {
        return this.getRefParam(o4.i) + ".return(" + this.serialize(o4.f) + ")";
      }
      serialize(o4) {
        try {
          switch (o4.t) {
            case 2:
              return mn[o4.s];
            case 0:
              return "" + o4.s;
            case 1:
              return '"' + o4.s + '"';
            case 3:
              return o4.s + "n";
            case 4:
              return this.getRefParam(o4.i);
            case 18:
              return this.serializeReference(o4);
            case 9:
              return this.serializeArray(o4);
            case 10:
              return this.serializeObject(o4);
            case 11:
              return this.serializeNullConstructor(o4);
            case 5:
              return this.serializeDate(o4);
            case 6:
              return this.serializeRegExp(o4);
            case 7:
              return this.serializeSet(o4);
            case 8:
              return this.serializeMap(o4);
            case 19:
              return this.serializeArrayBuffer(o4);
            case 16:
            case 15:
              return this.serializeTypedArray(o4);
            case 20:
              return this.serializeDataView(o4);
            case 14:
              return this.serializeAggregateError(o4);
            case 13:
              return this.serializeError(o4);
            case 12:
              return this.serializePromise(o4);
            case 17:
              return this.serializeWellKnownSymbol(o4);
            case 21:
              return this.serializeBoxed(o4);
            case 22:
              return this.serializePromiseConstructor(o4);
            case 23:
              return this.serializePromiseResolve(o4);
            case 24:
              return this.serializePromiseReject(o4);
            case 25:
              return this.serializePlugin(o4);
            case 26:
              return this.serializeSpecialReference(o4);
            case 27:
              return this.serializeIteratorFactory(o4);
            case 28:
              return this.serializeIteratorFactoryInstance(o4);
            case 29:
              return this.serializeAsyncIteratorFactory(o4);
            case 30:
              return this.serializeAsyncIteratorFactoryInstance(o4);
            case 31:
              return this.serializeStreamConstructor(o4);
            case 32:
              return this.serializeStreamNext(o4);
            case 33:
              return this.serializeStreamThrow(o4);
            case 34:
              return this.serializeStreamReturn(o4);
            default:
              throw new jn(o4);
          }
        } catch (o5) {
          throw new In(o5);
        }
      }
    };
    Fn = class extends Mn {
      parseItems(o4) {
        let d7 = [];
        for (let f5 = 0, v6 = o4.length; f5 < v6; f5++)
          f5 in o4 && (d7[f5] = this.parse(o4[f5]));
        return d7;
      }
      parseArray(o4, d7) {
        return function(o5, d8, f5) {
          return { t: 9, i: o5, s: void 0, l: d8.length, c: void 0, m: void 0, p: void 0, e: void 0, a: f5, f: void 0, b: void 0, o: ue$1(d8) };
        }(o4, d7, this.parseItems(d7));
      }
      parseProperties(o4) {
        let d7 = Object.entries(o4), f5 = [], v6 = [];
        for (let o5 = 0, b6 = d7.length; o5 < b6; o5++)
          f5.push(d$3(d7[o5][0])), v6.push(this.parse(d7[o5][1]));
        let b5 = Symbol.iterator;
        return b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(F$3(this.parseIteratorFactory(), this.parse(M$3(o4))))), b5 = Symbol.asyncIterator, b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(V$3(this.parseAsyncIteratorFactory(), this.parse(_$4())))), b5 = Symbol.toStringTag, b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(b$2(o4[b5]))), b5 = Symbol.isConcatSpreadable, b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(o4[b5] ? vn : bn)), { k: f5, v: v6, s: f5.length };
      }
      parsePlainObject(o4, d7, f5) {
        return this.createObjectNode(o4, d7, f5, this.parseProperties(d7));
      }
      parseBoxed(o4, d7) {
        return function(o5, d8) {
          return { t: 21, i: o5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: d8, b: void 0, o: void 0 };
        }(o4, this.parse(d7.valueOf()));
      }
      parseTypedArray(o4, d7) {
        return function(o5, d8, f5) {
          return { t: 15, i: o5, s: void 0, l: d8.length, c: d8.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: f5, b: d8.byteOffset, o: void 0 };
        }(o4, d7, this.parse(d7.buffer));
      }
      parseBigIntTypedArray(o4, d7) {
        return function(o5, d8, f5) {
          return { t: 16, i: o5, s: void 0, l: d8.length, c: d8.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: f5, b: d8.byteOffset, o: void 0 };
        }(o4, d7, this.parse(d7.buffer));
      }
      parseDataView(o4, d7) {
        return function(o5, d8, f5) {
          return { t: 20, i: o5, s: void 0, l: d8.byteLength, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: f5, b: d8.byteOffset, o: void 0 };
        }(o4, d7, this.parse(d7.buffer));
      }
      parseError(o4, d7) {
        let f5 = T$2(d7, this.features);
        return function(o5, d8, f6) {
          return { t: 13, i: o5, s: le$1(d8), l: void 0, c: void 0, m: d$3(d8.message), p: f6, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
        }(o4, d7, f5 ? this.parseProperties(f5) : void 0);
      }
      parseAggregateError(o4, d7) {
        let f5 = T$2(d7, this.features);
        return function(o5, d8, f6) {
          return { t: 14, i: o5, s: le$1(d8), l: void 0, c: void 0, m: d$3(d8.message), p: f6, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
        }(o4, d7, f5 ? this.parseProperties(f5) : void 0);
      }
      parseMap(o4, d7) {
        let f5 = [], v6 = [];
        for (let [o5, b5] of d7.entries())
          f5.push(this.parse(o5)), v6.push(this.parse(b5));
        return this.createMapNode(o4, f5, v6, d7.size);
      }
      parseSet(o4, d7) {
        let f5 = [];
        for (let o5 of d7.keys())
          f5.push(this.parse(o5));
        return function(o5, d8, f6) {
          return { t: 7, i: o5, s: void 0, l: d8, c: void 0, m: void 0, p: void 0, e: void 0, a: f6, f: void 0, b: void 0, o: void 0 };
        }(o4, d7.size, f5);
      }
      parsePlugin(o4, d7) {
        let f5 = this.plugins;
        if (f5)
          for (let v6 = 0, b5 = f5.length; v6 < b5; v6++) {
            let b6 = f5[v6];
            if (b6.parse.sync && b6.test(d7))
              return k$1(o4, b6.tag, b6.parse.sync(d7, this, { id: o4 }));
          }
      }
      parseStream(o4, d7) {
        return D$2(o4, this.parseSpecialReference(4), []);
      }
      parsePromise(o4, d7) {
        return this.createPromiseConstructorNode(o4);
      }
      parseObject(o4, d7) {
        if (Array.isArray(d7))
          return this.parseArray(o4, d7);
        if (function(o5) {
          return "__SEROVAL_STREAM__" in o5;
        }(d7))
          return this.parseStream(o4, d7);
        let f5 = this.parsePlugin(o4, d7);
        if (f5)
          return f5;
        let v6 = d7.constructor;
        switch (v6) {
          case Object:
            return this.parsePlainObject(o4, d7, false);
          case void 0:
            return this.parsePlainObject(o4, d7, true);
          case Date:
            return function(o5, d8) {
              return { t: 5, i: o5, s: d8.toISOString(), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, f: void 0, a: void 0, b: void 0, o: void 0 };
            }(o4, d7);
          case RegExp:
            return function(o5, d8) {
              return { t: 6, i: o5, s: void 0, l: void 0, c: d$3(d8.source), m: d8.flags, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
            }(o4, d7);
          case Error:
          case EvalError:
          case RangeError:
          case ReferenceError:
          case SyntaxError:
          case TypeError:
          case URIError:
            return this.parseError(o4, d7);
          case Number:
          case Boolean:
          case String:
          case BigInt:
            return this.parseBoxed(o4, d7);
          case ArrayBuffer:
            return function(o5, d8) {
              let f6 = new Uint8Array(d8), v7 = f6.length, b6 = new Array(v7);
              for (let o6 = 0; o6 < v7; o6++)
                b6[o6] = f6[o6];
              return { t: 19, i: o5, s: b6, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
            }(o4, d7);
          case Int8Array:
          case Int16Array:
          case Int32Array:
          case Uint8Array:
          case Uint16Array:
          case Uint32Array:
          case Uint8ClampedArray:
          case Float32Array:
          case Float64Array:
            return this.parseTypedArray(o4, d7);
          case DataView:
            return this.parseDataView(o4, d7);
          case Map:
            return this.parseMap(o4, d7);
          case Set:
            return this.parseSet(o4, d7);
        }
        if (v6 === Promise || d7 instanceof Promise)
          return this.parsePromise(o4, d7);
        let b5 = this.features;
        if (16 & b5)
          switch (v6) {
            case BigInt64Array:
            case BigUint64Array:
              return this.parseBigIntTypedArray(o4, d7);
          }
        if (1 & b5 && "undefined" != typeof AggregateError && (v6 === AggregateError || d7 instanceof AggregateError))
          return this.parseAggregateError(o4, d7);
        if (d7 instanceof Error)
          return this.parseError(o4, d7);
        if (Symbol.iterator in d7 || Symbol.asyncIterator in d7)
          return this.parsePlainObject(o4, d7, !!v6);
        throw new zn(d7);
      }
      parse(o4) {
        try {
          switch (typeof o4) {
            case "boolean":
              return o4 ? vn : bn;
            case "undefined":
              return wn;
            case "string":
              return b$2(o4);
            case "number":
              return function(o5) {
                switch (o5) {
                  case Number.POSITIVE_INFINITY:
                    return Sn;
                  case Number.NEGATIVE_INFINITY:
                    return _n;
                }
                return o5 != o5 ? An : Object.is(o5, -0) ? xn : { t: 0, i: void 0, s: o5, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
              }(o4);
            case "bigint":
              return function(o5) {
                return { t: 3, i: void 0, s: "" + o5, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
              }(o4);
            case "object":
              if (o4) {
                let d7 = this.getReference(o4);
                return 0 === d7.type ? this.parseObject(d7.value, o4) : d7.value;
              }
              return En;
            case "symbol":
              return this.parseWellKnownSymbol(o4);
            case "function":
              return this.parseFunction(o4);
            default:
              throw new zn(o4);
          }
        } catch (o5) {
          throw new kn(o5);
        }
      }
    };
    Dn = class extends Nn {
      constructor(o4) {
        super(o4), this.mode = "cross", this.scopeId = o4.scopeId;
      }
      getRefParam(o4) {
        return "$R[" + o4 + "]";
      }
      assignIndexedValue(o4, d7) {
        return this.getRefParam(o4) + "=" + d7;
      }
      serializeTop(o4) {
        let d7 = this.serialize(o4), f5 = o4.i;
        if (null == f5)
          return d7;
        let v6 = this.resolvePatches(), b5 = this.getRefParam(f5), w6 = null == this.scopeId ? "" : ln, E4 = v6 ? d7 + "," + v6 + b5 : d7;
        if ("" === w6)
          return v6 ? "(" + E4 + ")" : E4;
        let S6 = null == this.scopeId ? "()" : '($R["' + d$3(this.scopeId) + '"])';
        return "(" + this.createFunction([w6], E4) + ")" + S6;
      }
    };
    Hn = class extends Fn {
      constructor(o4) {
        super(o4), this.alive = true, this.pending = 0, this.initial = true, this.buffer = [], this.onParseCallback = o4.onParse, this.onErrorCallback = o4.onError, this.onDoneCallback = o4.onDone;
      }
      onParseInternal(o4, d7) {
        try {
          this.onParseCallback(o4, d7);
        } catch (o5) {
          this.onError(o5);
        }
      }
      flush() {
        for (let o4 = 0, d7 = this.buffer.length; o4 < d7; o4++)
          this.onParseInternal(this.buffer[o4], false);
      }
      onParse(o4) {
        this.initial ? this.buffer.push(o4) : this.onParseInternal(o4, false);
      }
      onError(o4) {
        if (!this.onErrorCallback)
          throw o4;
        this.onErrorCallback(o4);
      }
      onDone() {
        this.onDoneCallback && this.onDoneCallback();
      }
      pushPendingState() {
        this.pending++;
      }
      popPendingState() {
        --this.pending <= 0 && this.onDone();
      }
      parseProperties(o4) {
        let d7 = Object.entries(o4), f5 = [], v6 = [];
        for (let o5 = 0, b6 = d7.length; o5 < b6; o5++)
          f5.push(d$3(d7[o5][0])), v6.push(this.parse(d7[o5][1]));
        let b5 = Symbol.iterator;
        return b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(F$3(this.parseIteratorFactory(), this.parse(M$3(o4))))), b5 = Symbol.asyncIterator, b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(V$3(this.parseAsyncIteratorFactory(), this.parse(function(o5) {
          let d8 = _$4(), f6 = o5[Symbol.asyncIterator]();
          return async function t3() {
            try {
              let o6 = await f6.next();
              o6.done ? d8.return(o6.value) : (d8.next(o6.value), await t3());
            } catch (o6) {
              d8.throw(o6);
            }
          }().catch(() => {
          }), d8;
        }(o4))))), b5 = Symbol.toStringTag, b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(b$2(o4[b5]))), b5 = Symbol.isConcatSpreadable, b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(o4[b5] ? vn : bn)), { k: f5, v: v6, s: f5.length };
      }
      parsePromise(o4, d7) {
        return d7.then((d8) => {
          let f5 = this.parseWithError(d8);
          f5 && this.onParse({ t: 23, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(2), f5], f: void 0, b: void 0, o: void 0 }), this.popPendingState();
        }, (d8) => {
          if (this.alive) {
            let f5 = this.parseWithError(d8);
            f5 && this.onParse({ t: 24, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(3), f5], f: void 0, b: void 0, o: void 0 });
          }
          this.popPendingState();
        }), this.pushPendingState(), this.createPromiseConstructorNode(o4);
      }
      parsePlugin(o4, d7) {
        let f5 = this.plugins;
        if (f5)
          for (let v6 = 0, b5 = f5.length; v6 < b5; v6++) {
            let b6 = f5[v6];
            if (b6.parse.stream && b6.test(d7))
              return k$1(o4, b6.tag, b6.parse.stream(d7, this, { id: o4 }));
          }
      }
      parseStream(o4, d7) {
        let f5 = D$2(o4, this.parseSpecialReference(4), []);
        return this.pushPendingState(), d7.on({ next: (d8) => {
          if (this.alive) {
            let f6 = this.parseWithError(d8);
            f6 && this.onParse(function(o5, d9) {
              return { t: 32, i: o5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: d9, b: void 0, o: void 0 };
            }(o4, f6));
          }
        }, throw: (d8) => {
          if (this.alive) {
            let f6 = this.parseWithError(d8);
            f6 && this.onParse(function(o5, d9) {
              return { t: 33, i: o5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: d9, b: void 0, o: void 0 };
            }(o4, f6));
          }
          this.popPendingState();
        }, return: (d8) => {
          if (this.alive) {
            let f6 = this.parseWithError(d8);
            f6 && this.onParse(function(o5, d9) {
              return { t: 34, i: o5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: d9, b: void 0, o: void 0 };
            }(o4, f6));
          }
          this.popPendingState();
        } }), f5;
      }
      parseWithError(o4) {
        try {
          return this.parse(o4);
        } catch (o5) {
          return void this.onError(o5);
        }
      }
      start(o4) {
        let d7 = this.parseWithError(o4);
        d7 && (this.onParseInternal(d7, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
      }
      destroy() {
        this.alive && (this.onDone(), this.alive = false);
      }
      isAlive() {
        return this.alive;
      }
    };
    qn = class extends Hn {
      constructor() {
        super(...arguments), this.mode = "cross";
      }
    };
    Wn = class {
      constructor(o4) {
        this.options = o4, this.alive = true, this.flushed = false, this.done = false, this.pending = 0, this.cleanups = [], this.refs = /* @__PURE__ */ new Map(), this.keys = /* @__PURE__ */ new Set(), this.ids = 0, this.plugins = c$1(o4.plugins);
      }
      write(o4, d7) {
        this.alive && !this.flushed && (this.pending++, this.keys.add(o4), this.cleanups.push(function(o5, d8) {
          let f5 = c$1(d8.plugins), v6 = new qn({ plugins: f5, refs: d8.refs, disabledFeatures: d8.disabledFeatures, onParse(o6, b5) {
            let w6, E4 = new Dn({ plugins: f5, features: v6.features, scopeId: d8.scopeId, markedRefs: v6.marked });
            try {
              w6 = E4.serializeTop(o6);
            } catch (o7) {
              return void (d8.onError && d8.onError(o7));
            }
            d8.onSerialize(w6, b5);
          }, onError: d8.onError, onDone: d8.onDone });
          return v6.start(o5), () => {
            v6.destroy();
          };
        }(d7, { plugins: this.plugins, scopeId: this.options.scopeId, refs: this.refs, disabledFeatures: this.options.disabledFeatures, onError: this.options.onError, onSerialize: (d8, f5) => {
          this.alive && this.options.onData(f5 ? this.options.globalIdentifier + '["' + d$3(o4) + '"]=' + d8 : d8);
        }, onDone: () => {
          this.alive && (this.pending--, this.pending <= 0 && this.flushed && !this.done && this.options.onDone && (this.options.onDone(), this.done = true));
        } })));
      }
      getNextID() {
        for (; this.keys.has("" + this.ids); )
          this.ids++;
        return "" + this.ids;
      }
      push(o4) {
        let d7 = this.getNextID();
        return this.write(d7, o4), d7;
      }
      flush() {
        this.alive && (this.flushed = true, this.pending <= 0 && !this.done && this.options.onDone && (this.options.onDone(), this.done = true));
      }
      close() {
        if (this.alive) {
          for (let o4 = 0, d7 = this.cleanups.length; o4 < d7; o4++)
            this.cleanups[o4]();
          !this.done && this.options.onDone && (this.options.onDone(), this.done = true), this.alive = false;
        }
      }
    };
    Vn = { tag: "seroval-plugins/web/CustomEvent", test: (o4) => "undefined" != typeof CustomEvent && o4 instanceof CustomEvent, parse: { sync: (o4, d7) => ({ type: d7.parse(o4.type), options: d7.parse(p$2(o4)) }), async: async (o4, d7) => ({ type: await d7.parse(o4.type), options: await d7.parse(p$2(o4)) }), stream: (o4, d7) => ({ type: d7.parse(o4.type), options: d7.parse(p$2(o4)) }) }, serialize: (o4, d7) => "new CustomEvent(" + d7.serialize(o4.type) + "," + d7.serialize(o4.options) + ")", deserialize: (o4, d7) => new CustomEvent(d7.deserialize(o4.type), d7.deserialize(o4.options)) };
    Kn = Vn;
    Zn = { tag: "seroval-plugins/web/DOMException", test: (o4) => "undefined" != typeof DOMException && o4 instanceof DOMException, parse: { sync: (o4, d7) => ({ name: d7.parse(o4.name), message: d7.parse(o4.message) }), async: async (o4, d7) => ({ name: await d7.parse(o4.name), message: await d7.parse(o4.message) }), stream: (o4, d7) => ({ name: d7.parse(o4.name), message: d7.parse(o4.message) }) }, serialize: (o4, d7) => "new DOMException(" + d7.serialize(o4.message) + "," + d7.serialize(o4.name) + ")", deserialize: (o4, d7) => new DOMException(d7.deserialize(o4.message), d7.deserialize(o4.name)) };
    Yn = Zn;
    Gn = { tag: "seroval-plugins/web/Event", test: (o4) => "undefined" != typeof Event && o4 instanceof Event, parse: { sync: (o4, d7) => ({ type: d7.parse(o4.type), options: d7.parse(u$2(o4)) }), async: async (o4, d7) => ({ type: await d7.parse(o4.type), options: await d7.parse(u$2(o4)) }), stream: (o4, d7) => ({ type: d7.parse(o4.type), options: d7.parse(u$2(o4)) }) }, serialize: (o4, d7) => "new Event(" + d7.serialize(o4.type) + "," + d7.serialize(o4.options) + ")", deserialize: (o4, d7) => new Event(d7.deserialize(o4.type), d7.deserialize(o4.options)) };
    Qn = Gn;
    Jn = { tag: "seroval-plugins/web/File", test: (o4) => "undefined" != typeof File && o4 instanceof File, parse: { async: async (o4, d7) => ({ name: await d7.parse(o4.name), options: await d7.parse({ type: o4.type, lastModified: o4.lastModified }), buffer: await d7.parse(await o4.arrayBuffer()) }) }, serialize: (o4, d7) => "new File([" + d7.serialize(o4.buffer) + "]," + d7.serialize(o4.name) + "," + d7.serialize(o4.options) + ")", deserialize: (o4, d7) => new File([d7.deserialize(o4.buffer)], d7.deserialize(o4.name), d7.deserialize(o4.options)) };
    Xn = Jn;
    ei = {};
    ri = { tag: "seroval-plugins/web/FormDataFactory", test: (o4) => o4 === ei, parse: { sync() {
    }, async: async () => await Promise.resolve(void 0), stream() {
    } }, serialize: (o4, d7) => d7.createEffectfulFunction(["e", "f", "i", "s", "t"], "f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f"), deserialize: () => ei };
    si = { tag: "seroval-plugins/web/FormData", extends: [Xn, ri], test: (o4) => "undefined" != typeof FormData && o4 instanceof FormData, parse: { sync: (o4, d7) => ({ factory: d7.parse(ei), entries: d7.parse(f$3(o4)) }), async: async (o4, d7) => ({ factory: await d7.parse(ei), entries: await d7.parse(f$3(o4)) }), stream: (o4, d7) => ({ factory: d7.parse(ei), entries: d7.parse(f$3(o4)) }) }, serialize: (o4, d7) => "(" + d7.serialize(o4.factory) + ")(" + d7.serialize(o4.entries) + ")", deserialize(o4, d7) {
      let f5 = new FormData(), v6 = d7.deserialize(o4.entries);
      for (let o5 = 0, d8 = v6.length; o5 < d8; o5++) {
        let d9 = v6[o5];
        f5.append(d9[0], d9[1]);
      }
      return f5;
    } };
    ni = si;
    ii = { tag: "seroval-plugins/web/Headers", test: (o4) => "undefined" != typeof Headers && o4 instanceof Headers, parse: { sync: (o4, d7) => d7.parse(m$1(o4)), async: async (o4, d7) => await d7.parse(m$1(o4)), stream: (o4, d7) => d7.parse(m$1(o4)) }, serialize: (o4, d7) => "new Headers(" + d7.serialize(o4) + ")", deserialize: (o4, d7) => new Headers(d7.deserialize(o4)) };
    oi = ii;
    ai = {};
    ci = { tag: "seroval-plugins/web/ReadableStreamFactory", test: (o4) => o4 === ai, parse: { sync() {
    }, async: async () => await Promise.resolve(void 0), stream() {
    } }, serialize: (o4, d7) => d7.createFunction(["d"], "new ReadableStream({start:" + d7.createEffectfulFunction(["c"], "d.on({next:" + d7.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + d7.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + d7.createEffectfulFunction([], "c.close()") + "})") + "})"), deserialize: () => ai };
    li = { tag: "seroval/plugins/web/ReadableStream", extends: [ci], test: (o4) => "undefined" != typeof ReadableStream && o4 instanceof ReadableStream, parse: { sync: (o4, d7) => ({ factory: d7.parse(ai), stream: d7.parse(_$4()) }), async: async (o4, d7) => ({ factory: await d7.parse(ai), stream: await d7.parse(g$2(o4)) }), stream: (o4, d7) => ({ factory: d7.parse(ai), stream: d7.parse(g$2(o4)) }) }, serialize: (o4, d7) => "(" + d7.serialize(o4.factory) + ")(" + d7.serialize(o4.stream) + ")", deserialize(o4, d7) {
      let f5 = d7.deserialize(o4.stream);
      return new ReadableStream({ start(o5) {
        f5.on({ next(d8) {
          o5.enqueue(d8);
        }, throw(d8) {
          o5.error(d8);
        }, return() {
          o5.close();
        } });
      } });
    } };
    ui = li;
    di = { tag: "seroval-plugins/web/Request", extends: [ui, oi], test: (o4) => "undefined" != typeof Request && o4 instanceof Request, parse: { async: async (o4, d7) => ({ url: await d7.parse(o4.url), options: await d7.parse(z$2(o4, o4.body ? await o4.clone().arrayBuffer() : null)) }), stream: (o4, d7) => ({ url: d7.parse(o4.url), options: d7.parse(z$2(o4, o4.clone().body)) }) }, serialize: (o4, d7) => "new Request(" + d7.serialize(o4.url) + "," + d7.serialize(o4.options) + ")", deserialize: (o4, d7) => new Request(d7.deserialize(o4.url), d7.deserialize(o4.options)) };
    hi = di;
    fi = { tag: "seroval-plugins/web/Response", extends: [ui, oi], test: (o4) => "undefined" != typeof Response && o4 instanceof Response, parse: { async: async (o4, d7) => ({ body: await d7.parse(o4.body ? await o4.clone().arrayBuffer() : null), options: await d7.parse(S$1(o4)) }), stream: (o4, d7) => ({ body: d7.parse(o4.clone().body), options: d7.parse(S$1(o4)) }) }, serialize: (o4, d7) => "new Response(" + d7.serialize(o4.body) + "," + d7.serialize(o4.options) + ")", deserialize: (o4, d7) => new Response(d7.deserialize(o4.body), d7.deserialize(o4.options)) };
    pi = fi;
    gi = { tag: "seroval-plugins/web/URLSearchParams", test: (o4) => "undefined" != typeof URLSearchParams && o4 instanceof URLSearchParams, parse: { sync: (o4, d7) => d7.parse(o4.toString()), async: async (o4, d7) => await d7.parse(o4.toString()), stream: (o4, d7) => d7.parse(o4.toString()) }, serialize: (o4, d7) => "new URLSearchParams(" + d7.serialize(o4) + ")", deserialize: (o4, d7) => new URLSearchParams(d7.deserialize(o4)) };
    mi = gi;
    yi = { tag: "seroval-plugins/web/URL", test: (o4) => "undefined" != typeof URL && o4 instanceof URL, parse: { sync: (o4, d7) => d7.parse(o4.href), async: async (o4, d7) => await d7.parse(o4.href), stream: (o4, d7) => d7.parse(o4.href) }, serialize: (o4, d7) => "new URL(" + d7.serialize(o4) + ")", deserialize: (o4, d7) => new URL(d7.deserialize(o4)) };
    vi = yi;
    bi = /* @__PURE__ */ new Set(["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"]);
    wi = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]);
    Ei = Object.assign(/* @__PURE__ */ Object.create(null), { className: "class", htmlFor: "for" });
    xi = an.AggregateError | an.BigIntTypedArray;
    Si = "_$HY.r";
    _i = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
    Ai = 'function $df(e,n,o,t){if(n=document.getElementById(e),o=document.getElementById("pl-"+e)){for(;o&&8!==o.nodeType&&o.nodeValue!=="pl-"+e;)t=o.nextSibling,o.remove(),o=t;_$HY.done?o.remove():o.replaceWith(n.content)}n.remove(),_$HY.fe(e)}';
    $i = Symbol();
    ki = false;
    Ii = ((o4) => (o4[o4.AggregateError = 1] = "AggregateError", o4[o4.ArrowFunction = 2] = "ArrowFunction", o4[o4.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", o4[o4.ObjectAssign = 8] = "ObjectAssign", o4[o4.BigIntTypedArray = 16] = "BigIntTypedArray", o4))(Ii || {});
    zi = "__SEROVAL_REFS__";
    ji = "$R";
    Ti = `self.${ji}`;
    Ci = /* @__PURE__ */ new Map();
    Pi = /* @__PURE__ */ new Map();
    typeof globalThis < "u" ? Object.defineProperty(globalThis, zi, { value: Pi, configurable: true, writable: false, enumerable: false }) : typeof self < "u" ? Object.defineProperty(self, zi, { value: Pi, configurable: true, writable: false, enumerable: false }) : typeof global < "u" && Object.defineProperty(global, zi, { value: Pi, configurable: true, writable: false, enumerable: false });
    Oi = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" };
    Bi = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 };
    Mi = { 0: Symbol.asyncIterator, 1: Symbol.hasInstance, 2: Symbol.isConcatSpreadable, 3: Symbol.iterator, 4: Symbol.match, 5: Symbol.matchAll, 6: Symbol.replace, 7: Symbol.search, 8: Symbol.species, 9: Symbol.split, 10: Symbol.toPrimitive, 11: Symbol.toStringTag, 12: Symbol.unscopables };
    Li = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" };
    Ui = { 2: true, 3: false, 1: void 0, 0: null, 4: -0, 5: Number.POSITIVE_INFINITY, 6: Number.NEGATIVE_INFINITY, 7: Number.NaN };
    Ni = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" };
    Fi = { 0: Error, 1: EvalError, 2: RangeError, 3: ReferenceError, 4: SyntaxError, 5: TypeError, 6: URIError };
    Di = g$1(2);
    Hi = g$1(3);
    qi = g$1(1);
    Wi = g$1(0);
    Vi = g$1(4);
    Ki = g$1(5);
    Zi = g$1(6);
    Yi = g$1(7);
    ({ toString: Gi } = Object.prototype);
    Qi = class extends Error {
      constructor(o4, d7) {
        super(function(o5, d8) {
          return d8 instanceof Error ? `Seroval caught an error during the ${o5} process.
  
${d8.name}
${d8.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${o5} process.

"${Gi.call(d8)}"

For more information, please check the "cause" property of this error.`;
        }(o4, d7)), this.cause = d7;
      }
    };
    Ji = class extends Qi {
      constructor(o4) {
        super("parsing", o4);
      }
    };
    Xi = class extends Qi {
      constructor(o4) {
        super("serialization", o4);
      }
    };
    eo = class extends Qi {
      constructor(o4) {
        super("deserialization", o4);
      }
    };
    to = class extends Error {
      constructor(o4) {
        super(`The value ${Gi.call(o4)} of type "${typeof o4}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`), this.value = o4;
      }
    };
    ro = class extends Error {
      constructor(o4) {
        super('Unsupported node type "' + o4.t + '".');
      }
    };
    so = class extends Error {
      constructor(o4) {
        super('Missing plugin for tag "' + o4 + '".');
      }
    };
    no = class extends Error {
      constructor(o4) {
        super('Missing "' + o4 + '" instance.');
      }
    };
    io = class extends Error {
      constructor(o4) {
        super('Missing reference for the value "' + Gi.call(o4) + '" of type "' + typeof o4 + '"'), this.value = o4;
      }
    };
    oo = class extends Error {
      constructor(o4) {
        super('Missing reference for id "' + p$12(o4) + '"');
      }
    };
    ao = class extends Error {
      constructor(o4) {
        super('Unknown TypedArray "' + o4 + '"');
      }
    };
    co = {};
    lo = {};
    uo = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
    ho = class {
      constructor(o4) {
        this.marked = /* @__PURE__ */ new Set(), this.plugins = o4.plugins, this.features = 31 ^ (o4.disabledFeatures || 0), this.refs = o4.refs || /* @__PURE__ */ new Map();
      }
      markRef(o4) {
        this.marked.add(o4);
      }
      isMarked(o4) {
        return this.marked.has(o4);
      }
      getIndexedValue(o4) {
        let d7 = this.refs.get(o4);
        if (null != d7)
          return this.markRef(d7), { type: 1, value: Ht$1(d7) };
        let f5 = this.refs.size;
        return this.refs.set(o4, f5), { type: 0, value: f5 };
      }
      getReference(o4) {
        let d7 = this.getIndexedValue(o4);
        return 1 === d7.type ? d7 : B(o4) ? { type: 2, value: he$1(d7.value, o4) } : d7;
      }
      getStrictReference(o4) {
        v$1(B(o4), new to(o4));
        let d7 = this.getIndexedValue(o4);
        return 1 === d7.type ? d7.value : he$1(d7.value, o4);
      }
      parseFunction(o4) {
        return this.getStrictReference(o4);
      }
      parseWellKnownSymbol(o4) {
        let d7 = this.getReference(o4);
        return 0 !== d7.type ? d7.value : (v$1(o4 in Bi, new to(o4)), function(o5, d8) {
          return { t: 17, i: o5, s: Bi[d8], l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
        }(d7.value, o4));
      }
      parseSpecialReference(o4) {
        let d7 = this.getIndexedValue(uo[o4]);
        return 1 === d7.type ? d7.value : { t: 26, i: d7.value, s: o4, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
      }
      parseIteratorFactory() {
        let o4 = this.getIndexedValue(co);
        return 1 === o4.type ? o4.value : { t: 27, i: o4.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseWellKnownSymbol(Symbol.iterator), b: void 0, o: void 0 };
      }
      parseAsyncIteratorFactory() {
        let o4 = this.getIndexedValue(lo);
        return 1 === o4.type ? o4.value : { t: 29, i: o4.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], f: void 0, b: void 0, o: void 0 };
      }
      createObjectNode(o4, d7, f5, v6) {
        return { t: f5 ? 11 : 10, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: v6, e: void 0, a: void 0, f: void 0, b: void 0, o: De$1(d7) };
      }
      createMapNode(o4, d7, f5, v6) {
        return { t: 8, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: { k: d7, v: f5, s: v6 }, a: void 0, f: this.parseSpecialReference(0), b: void 0, o: void 0 };
      }
      createPromiseConstructorNode(o4) {
        return { t: 22, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseSpecialReference(1), b: void 0, o: void 0 };
      }
    };
    fo = class {
      constructor(o4) {
        this.plugins = o4.plugins, this.refs = o4.refs || /* @__PURE__ */ new Map();
      }
      deserializeReference(o4) {
        return this.assignIndexedValue(o4.i, Pt$1(m10(o4.s)));
      }
      deserializeArray(o4) {
        let d7, f5 = o4.l, v6 = this.assignIndexedValue(o4.i, new Array(f5));
        for (let b5 = 0; b5 < f5; b5++)
          d7 = o4.a[b5], d7 && (v6[b5] = this.deserialize(d7));
        return fe$1(v6, o4.o), v6;
      }
      deserializeProperties(o4, d7) {
        let f5 = o4.s;
        if (f5) {
          let v6 = o4.k, b5 = o4.v;
          for (let o5, w6 = 0; w6 < f5; w6++)
            o5 = v6[w6], "string" == typeof o5 ? d7[m10(o5)] = this.deserialize(b5[w6]) : d7[this.deserialize(o5)] = this.deserialize(b5[w6]);
        }
        return d7;
      }
      deserializeObject(o4) {
        let d7 = this.assignIndexedValue(o4.i, 10 === o4.t ? {} : /* @__PURE__ */ Object.create(null));
        return this.deserializeProperties(o4.p, d7), fe$1(d7, o4.o), d7;
      }
      deserializeDate(o4) {
        return this.assignIndexedValue(o4.i, new Date(o4.s));
      }
      deserializeRegExp(o4) {
        return this.assignIndexedValue(o4.i, new RegExp(m10(o4.c), o4.m));
      }
      deserializeSet(o4) {
        let d7 = this.assignIndexedValue(o4.i, /* @__PURE__ */ new Set()), f5 = o4.a;
        for (let v6 = 0, b5 = o4.l; v6 < b5; v6++)
          d7.add(this.deserialize(f5[v6]));
        return d7;
      }
      deserializeMap(o4) {
        let d7 = this.assignIndexedValue(o4.i, /* @__PURE__ */ new Map()), f5 = o4.e.k, v6 = o4.e.v;
        for (let b5 = 0, w6 = o4.e.s; b5 < w6; b5++)
          d7.set(this.deserialize(f5[b5]), this.deserialize(v6[b5]));
        return d7;
      }
      deserializeArrayBuffer(o4) {
        let d7 = new Uint8Array(o4.s);
        return this.assignIndexedValue(o4.i, d7.buffer);
      }
      deserializeTypedArray(o4) {
        let d7 = function(o5) {
          switch (o5) {
            case "Int8Array":
              return Int8Array;
            case "Int16Array":
              return Int16Array;
            case "Int32Array":
              return Int32Array;
            case "Uint8Array":
              return Uint8Array;
            case "Uint16Array":
              return Uint16Array;
            case "Uint32Array":
              return Uint32Array;
            case "Uint8ClampedArray":
              return Uint8ClampedArray;
            case "Float32Array":
              return Float32Array;
            case "Float64Array":
              return Float64Array;
            case "BigInt64Array":
              return BigInt64Array;
            case "BigUint64Array":
              return BigUint64Array;
            default:
              throw new ao(o5);
          }
        }(o4.c), f5 = this.deserialize(o4.f);
        return this.assignIndexedValue(o4.i, new d7(f5, o4.b, o4.l));
      }
      deserializeDataView(o4) {
        let d7 = this.deserialize(o4.f);
        return this.assignIndexedValue(o4.i, new DataView(d7, o4.b, o4.l));
      }
      deserializeDictionary(o4, d7) {
        if (o4.p) {
          let f5 = this.deserializeProperties(o4.p, {});
          Object.assign(d7, f5);
        }
        return d7;
      }
      deserializeAggregateError(o4) {
        let d7 = this.assignIndexedValue(o4.i, new AggregateError([], m10(o4.m)));
        return this.deserializeDictionary(o4, d7);
      }
      deserializeError(o4) {
        let d7 = Fi[o4.s], f5 = this.assignIndexedValue(o4.i, new d7(m10(o4.m)));
        return this.deserializeDictionary(o4, f5);
      }
      deserializePromise(o4) {
        let d7 = X$1(), f5 = this.assignIndexedValue(o4.i, d7), v6 = this.deserialize(o4.f);
        return o4.s ? d7.resolve(v6) : d7.reject(v6), f5.promise;
      }
      deserializeBoxed(o4) {
        return this.assignIndexedValue(o4.i, Object(this.deserialize(o4.f)));
      }
      deserializePlugin(o4) {
        let d7 = this.plugins;
        if (d7) {
          let f5 = m10(o4.c);
          for (let v6 = 0, b5 = d7.length; v6 < b5; v6++) {
            let b6 = d7[v6];
            if (b6.tag === f5)
              return this.assignIndexedValue(o4.i, b6.deserialize(o4.s, this, { id: o4.i }));
          }
        }
        throw new so(o4.c);
      }
      deserializePromiseConstructor(o4) {
        return this.assignIndexedValue(o4.i, X$1()).promise;
      }
      deserializePromiseResolve(o4) {
        let d7 = this.refs.get(o4.i);
        v$1(d7, new no("Promise")), d7.resolve(this.deserialize(o4.a[1]));
      }
      deserializePromiseReject(o4) {
        let d7 = this.refs.get(o4.i);
        v$1(d7, new no("Promise")), d7.reject(this.deserialize(o4.a[1]));
      }
      deserializeIteratorFactoryInstance(o4) {
        return this.deserialize(o4.a[0]), function(o5) {
          return () => {
            let d7 = 0;
            return { [Symbol.iterator]() {
              return this;
            }, next() {
              if (d7 > o5.d)
                return { done: true, value: void 0 };
              let f5 = d7++, v6 = o5.v[f5];
              if (f5 === o5.t)
                throw v6;
              return { done: f5 === o5.d, value: v6 };
            } };
          };
        }(this.deserialize(o4.a[1]));
      }
      deserializeAsyncIteratorFactoryInstance(o4) {
        return this.deserialize(o4.a[0]), mr$1(this.deserialize(o4.a[1]));
      }
      deserializeStreamConstructor(o4) {
        let d7 = this.assignIndexedValue(o4.i, P4()), f5 = o4.a.length;
        if (f5)
          for (let d8 = 0; d8 < f5; d8++)
            this.deserialize(o4.a[d8]);
        return d7;
      }
      deserializeStreamNext(o4) {
        let d7 = this.refs.get(o4.i);
        v$1(d7, new no("Stream")), d7.next(this.deserialize(o4.f));
      }
      deserializeStreamThrow(o4) {
        let d7 = this.refs.get(o4.i);
        v$1(d7, new no("Stream")), d7.throw(this.deserialize(o4.f));
      }
      deserializeStreamReturn(o4) {
        let d7 = this.refs.get(o4.i);
        v$1(d7, new no("Stream")), d7.return(this.deserialize(o4.f));
      }
      deserializeIteratorFactory(o4) {
        this.deserialize(o4.f);
      }
      deserializeAsyncIteratorFactory(o4) {
        this.deserialize(o4.a[1]);
      }
      deserialize(o4) {
        try {
          switch (o4.t) {
            case 2:
              return Ui[o4.s];
            case 0:
              return o4.s;
            case 1:
              return m10(o4.s);
            case 3:
              return BigInt(o4.s);
            case 4:
              return this.refs.get(o4.i);
            case 18:
              return this.deserializeReference(o4);
            case 9:
              return this.deserializeArray(o4);
            case 10:
            case 11:
              return this.deserializeObject(o4);
            case 5:
              return this.deserializeDate(o4);
            case 6:
              return this.deserializeRegExp(o4);
            case 7:
              return this.deserializeSet(o4);
            case 8:
              return this.deserializeMap(o4);
            case 19:
              return this.deserializeArrayBuffer(o4);
            case 16:
            case 15:
              return this.deserializeTypedArray(o4);
            case 20:
              return this.deserializeDataView(o4);
            case 14:
              return this.deserializeAggregateError(o4);
            case 13:
              return this.deserializeError(o4);
            case 12:
              return this.deserializePromise(o4);
            case 17:
              return Mi[o4.s];
            case 21:
              return this.deserializeBoxed(o4);
            case 25:
              return this.deserializePlugin(o4);
            case 22:
              return this.deserializePromiseConstructor(o4);
            case 23:
              return this.deserializePromiseResolve(o4);
            case 24:
              return this.deserializePromiseReject(o4);
            case 28:
              return this.deserializeIteratorFactoryInstance(o4);
            case 30:
              return this.deserializeAsyncIteratorFactoryInstance(o4);
            case 31:
              return this.deserializeStreamConstructor(o4);
            case 32:
              return this.deserializeStreamNext(o4);
            case 33:
              return this.deserializeStreamThrow(o4);
            case 34:
              return this.deserializeStreamReturn(o4);
            case 27:
              return this.deserializeIteratorFactory(o4);
            case 29:
              return this.deserializeAsyncIteratorFactory(o4);
            default:
              throw new ro(o4);
          }
        } catch (o5) {
          throw new eo(o5);
        }
      }
    };
    po = class extends fo {
      constructor(o4) {
        super(o4), this.mode = "vanilla", this.marked = new Set(o4.markedRefs);
      }
      assignIndexedValue(o4, d7) {
        return this.marked.has(o4) && this.refs.set(o4, d7), d7;
      }
    };
    go = /^[$A-Z_][0-9A-Z_$]*$/i;
    mo = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: void 0 };
    yo = class {
      constructor(o4) {
        this.stack = [], this.flags = [], this.assignments = [], this.plugins = o4.plugins, this.features = o4.features, this.marked = new Set(o4.markedRefs);
      }
      createFunction(o4, d7) {
        return 2 & this.features ? (1 === o4.length ? o4[0] : "(" + o4.join(",") + ")") + "=>" + d7 : "function(" + o4.join(",") + "){return " + d7 + "}";
      }
      createEffectfulFunction(o4, d7) {
        return 2 & this.features ? (1 === o4.length ? o4[0] : "(" + o4.join(",") + ")") + "=>{" + d7 + "}" : "function(" + o4.join(",") + "){" + d7 + "}";
      }
      markRef(o4) {
        this.marked.add(o4);
      }
      isMarked(o4) {
        return this.marked.has(o4);
      }
      pushObjectFlag(o4, d7) {
        0 !== o4 && (this.markRef(d7), this.flags.push({ type: o4, value: this.getRefParam(d7) }));
      }
      resolveFlags() {
        let o4 = "";
        for (let d7 = 0, f5 = this.flags, v6 = f5.length; d7 < v6; d7++) {
          let v7 = f5[d7];
          o4 += mo[v7.type] + "(" + v7.value + "),";
        }
        return o4;
      }
      resolvePatches() {
        let o4 = ve$1(this.assignments), d7 = this.resolveFlags();
        return o4 ? d7 ? o4 + d7 : o4 : d7;
      }
      createAssignment(o4, d7) {
        this.assignments.push({ t: 0, s: o4, k: void 0, v: d7 });
      }
      createAddAssignment(o4, d7) {
        this.assignments.push({ t: 1, s: this.getRefParam(o4), k: void 0, v: d7 });
      }
      createSetAssignment(o4, d7, f5) {
        this.assignments.push({ t: 2, s: this.getRefParam(o4), k: d7, v: f5 });
      }
      createDeleteAssignment(o4, d7) {
        this.assignments.push({ t: 3, s: this.getRefParam(o4), k: d7, v: void 0 });
      }
      createArrayAssign(o4, d7, f5) {
        this.createAssignment(this.getRefParam(o4) + "[" + d7 + "]", f5);
      }
      createObjectAssign(o4, d7, f5) {
        this.createAssignment(this.getRefParam(o4) + "." + d7, f5);
      }
      isIndexedValueInStack(o4) {
        return 4 === o4.t && this.stack.includes(o4.i);
      }
      serializeReference(o4) {
        return this.assignIndexedValue(o4.i, zi + '.get("' + o4.s + '")');
      }
      serializeArrayItem(o4, d7, f5) {
        return d7 ? this.isIndexedValueInStack(d7) ? (this.markRef(o4), this.createArrayAssign(o4, f5, this.getRefParam(d7.i)), "") : this.serialize(d7) : "";
      }
      serializeArray(o4) {
        let d7 = o4.i;
        if (o4.l) {
          this.stack.push(d7);
          let f5 = o4.a, v6 = this.serializeArrayItem(d7, f5[0], 0), b5 = "" === v6;
          for (let w6, E4 = 1, S6 = o4.l; E4 < S6; E4++)
            w6 = this.serializeArrayItem(d7, f5[E4], E4), v6 += "," + w6, b5 = "" === w6;
          return this.stack.pop(), this.pushObjectFlag(o4.o, o4.i), this.assignIndexedValue(d7, "[" + v6 + (b5 ? ",]" : "]"));
        }
        return this.assignIndexedValue(d7, "[]");
      }
      serializeProperty(o4, d7, f5) {
        if ("string" == typeof d7) {
          let v6 = Number(d7), b5 = v6 >= 0 && v6.toString() === d7 || pe$2(d7);
          if (this.isIndexedValueInStack(f5)) {
            let w6 = this.getRefParam(f5.i);
            return this.markRef(o4.i), b5 && v6 != v6 ? this.createObjectAssign(o4.i, d7, w6) : this.createArrayAssign(o4.i, b5 ? d7 : '"' + d7 + '"', w6), "";
          }
          return (b5 ? d7 : '"' + d7 + '"') + ":" + this.serialize(f5);
        }
        return "[" + this.serialize(d7) + "]:" + this.serialize(f5);
      }
      serializeProperties(o4, d7) {
        let f5 = d7.s;
        if (f5) {
          let v6 = d7.k, b5 = d7.v;
          this.stack.push(o4.i);
          let w6 = this.serializeProperty(o4, v6[0], b5[0]);
          for (let d8 = 1, E4 = w6; d8 < f5; d8++)
            E4 = this.serializeProperty(o4, v6[d8], b5[d8]), w6 += (E4 && w6 && ",") + E4;
          return this.stack.pop(), "{" + w6 + "}";
        }
        return "{}";
      }
      serializeObject(o4) {
        return this.pushObjectFlag(o4.o, o4.i), this.assignIndexedValue(o4.i, this.serializeProperties(o4, o4.p));
      }
      serializeWithObjectAssign(o4, d7, f5) {
        let v6 = this.serializeProperties(o4, d7);
        return "{}" !== v6 ? "Object.assign(" + f5 + "," + v6 + ")" : f5;
      }
      serializeStringKeyAssignment(o4, d7, f5, v6) {
        let b5 = this.serialize(v6), w6 = Number(f5), E4 = w6 >= 0 && w6.toString() === f5 || pe$2(f5);
        if (this.isIndexedValueInStack(v6))
          E4 && w6 != w6 ? this.createObjectAssign(o4.i, f5, b5) : this.createArrayAssign(o4.i, E4 ? f5 : '"' + f5 + '"', b5);
        else {
          let v7 = this.assignments;
          this.assignments = d7, E4 && w6 != w6 ? this.createObjectAssign(o4.i, f5, b5) : this.createArrayAssign(o4.i, E4 ? f5 : '"' + f5 + '"', b5), this.assignments = v7;
        }
      }
      serializeAssignment(o4, d7, f5, v6) {
        if ("string" == typeof f5)
          this.serializeStringKeyAssignment(o4, d7, f5, v6);
        else {
          let b5 = this.stack;
          this.stack = [];
          let w6 = this.serialize(v6);
          this.stack = b5;
          let E4 = this.assignments;
          this.assignments = d7, this.createArrayAssign(o4.i, this.serialize(f5), w6), this.assignments = E4;
        }
      }
      serializeAssignments(o4, d7) {
        let f5 = d7.s;
        if (f5) {
          let v6 = [], b5 = d7.k, w6 = d7.v;
          this.stack.push(o4.i);
          for (let d8 = 0; d8 < f5; d8++)
            this.serializeAssignment(o4, v6, b5[d8], w6[d8]);
          return this.stack.pop(), ve$1(v6);
        }
      }
      serializeDictionary(o4, d7) {
        if (o4.p)
          if (8 & this.features)
            d7 = this.serializeWithObjectAssign(o4, o4.p, d7);
          else {
            this.markRef(o4.i);
            let f5 = this.serializeAssignments(o4, o4.p);
            if (f5)
              return "(" + this.assignIndexedValue(o4.i, d7) + "," + f5 + this.getRefParam(o4.i) + ")";
          }
        return this.assignIndexedValue(o4.i, d7);
      }
      serializeNullConstructor(o4) {
        return this.pushObjectFlag(o4.o, o4.i), this.serializeDictionary(o4, "Object.create(null)");
      }
      serializeDate(o4) {
        return this.assignIndexedValue(o4.i, 'new Date("' + o4.s + '")');
      }
      serializeRegExp(o4) {
        return this.assignIndexedValue(o4.i, "/" + o4.c + "/" + o4.m);
      }
      serializeSetItem(o4, d7) {
        return this.isIndexedValueInStack(d7) ? (this.markRef(o4), this.createAddAssignment(o4, this.getRefParam(d7.i)), "") : this.serialize(d7);
      }
      serializeSet(o4) {
        let d7 = "new Set", f5 = o4.l, v6 = o4.i;
        if (f5) {
          let b5 = o4.a;
          this.stack.push(v6);
          let w6 = this.serializeSetItem(v6, b5[0]);
          for (let o5 = 1, d8 = w6; o5 < f5; o5++)
            d8 = this.serializeSetItem(v6, b5[o5]), w6 += (d8 && w6 && ",") + d8;
          this.stack.pop(), w6 && (d7 += "([" + w6 + "])");
        }
        return this.assignIndexedValue(v6, d7);
      }
      serializeMapEntry(o4, d7, f5, v6) {
        if (this.isIndexedValueInStack(d7)) {
          let b5 = this.getRefParam(d7.i);
          if (this.markRef(o4), this.isIndexedValueInStack(f5)) {
            let d8 = this.getRefParam(f5.i);
            return this.createSetAssignment(o4, b5, d8), "";
          }
          if (4 !== f5.t && null != f5.i && this.isMarked(f5.i)) {
            let d8 = "(" + this.serialize(f5) + ",[" + v6 + "," + v6 + "])";
            return this.createSetAssignment(o4, b5, this.getRefParam(f5.i)), this.createDeleteAssignment(o4, v6), d8;
          }
          let w6 = this.stack;
          return this.stack = [], this.createSetAssignment(o4, b5, this.serialize(f5)), this.stack = w6, "";
        }
        if (this.isIndexedValueInStack(f5)) {
          let b5 = this.getRefParam(f5.i);
          if (this.markRef(o4), 4 !== d7.t && null != d7.i && this.isMarked(d7.i)) {
            let f6 = "(" + this.serialize(d7) + ",[" + v6 + "," + v6 + "])";
            return this.createSetAssignment(o4, this.getRefParam(d7.i), b5), this.createDeleteAssignment(o4, v6), f6;
          }
          let w6 = this.stack;
          return this.stack = [], this.createSetAssignment(o4, this.serialize(d7), b5), this.stack = w6, "";
        }
        return "[" + this.serialize(d7) + "," + this.serialize(f5) + "]";
      }
      serializeMap(o4) {
        let d7 = "new Map", f5 = o4.e.s, v6 = o4.i, b5 = o4.f, w6 = this.getRefParam(b5.i);
        if (f5) {
          let b6 = o4.e.k, E4 = o4.e.v;
          this.stack.push(v6);
          let S6 = this.serializeMapEntry(v6, b6[0], E4[0], w6);
          for (let o5 = 1, d8 = S6; o5 < f5; o5++)
            d8 = this.serializeMapEntry(v6, b6[o5], E4[o5], w6), S6 += (d8 && S6 && ",") + d8;
          this.stack.pop(), S6 && (d7 += "([" + S6 + "])");
        }
        return 26 === b5.t && (this.markRef(b5.i), d7 = "(" + this.serialize(b5) + "," + d7 + ")"), this.assignIndexedValue(v6, d7);
      }
      serializeArrayBuffer(o4) {
        let d7 = "new Uint8Array(", f5 = o4.s, v6 = f5.length;
        if (v6) {
          d7 += "[" + f5[0];
          for (let o5 = 1; o5 < v6; o5++)
            d7 += "," + f5[o5];
          d7 += "]";
        }
        return this.assignIndexedValue(o4.i, d7 + ").buffer");
      }
      serializeTypedArray(o4) {
        return this.assignIndexedValue(o4.i, "new " + o4.c + "(" + this.serialize(o4.f) + "," + o4.b + "," + o4.l + ")");
      }
      serializeDataView(o4) {
        return this.assignIndexedValue(o4.i, "new DataView(" + this.serialize(o4.f) + "," + o4.b + "," + o4.l + ")");
      }
      serializeAggregateError(o4) {
        let d7 = o4.i;
        this.stack.push(d7);
        let f5 = this.serializeDictionary(o4, 'new AggregateError([],"' + o4.m + '")');
        return this.stack.pop(), f5;
      }
      serializeError(o4) {
        return this.serializeDictionary(o4, "new " + Ni[o4.s] + '("' + o4.m + '")');
      }
      serializePromise(o4) {
        let d7, f5 = o4.f, v6 = o4.i, b5 = o4.s ? "Promise.resolve" : "Promise.reject";
        if (this.isIndexedValueInStack(f5)) {
          let v7 = this.getRefParam(f5.i);
          d7 = b5 + (o4.s ? "().then(" + this.createFunction([], v7) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + v7) + ")");
        } else {
          this.stack.push(v6);
          let o5 = this.serialize(f5);
          this.stack.pop(), d7 = b5 + "(" + o5 + ")";
        }
        return this.assignIndexedValue(v6, d7);
      }
      serializeWellKnownSymbol(o4) {
        return this.assignIndexedValue(o4.i, Oi[o4.s]);
      }
      serializeBoxed(o4) {
        return this.assignIndexedValue(o4.i, "Object(" + this.serialize(o4.f) + ")");
      }
      serializePlugin(o4) {
        let d7 = this.plugins;
        if (d7)
          for (let f5 = 0, v6 = d7.length; f5 < v6; f5++) {
            let v7 = d7[f5];
            if (v7.tag === o4.c)
              return this.assignIndexedValue(o4.i, v7.serialize(o4.s, this, { id: o4.i }));
          }
        throw new so(o4.c);
      }
      getConstructor(o4) {
        let d7 = this.serialize(o4);
        return d7 === this.getRefParam(o4.i) ? d7 : "(" + d7 + ")";
      }
      serializePromiseConstructor(o4) {
        return this.assignIndexedValue(o4.i, this.getConstructor(o4.f) + "()");
      }
      serializePromiseResolve(o4) {
        return this.getConstructor(o4.a[0]) + "(" + this.getRefParam(o4.i) + "," + this.serialize(o4.a[1]) + ")";
      }
      serializePromiseReject(o4) {
        return this.getConstructor(o4.a[0]) + "(" + this.getRefParam(o4.i) + "," + this.serialize(o4.a[1]) + ")";
      }
      serializeSpecialReferenceValue(o4) {
        switch (o4) {
          case 0:
            return "[]";
          case 1:
            return this.createFunction(["s", "f", "p"], "((p=new Promise(" + this.createEffectfulFunction(["a", "b"], "s=a,f=b") + ")).s=s,p.f=f,p)");
          case 2:
            return this.createEffectfulFunction(["p", "d"], 'p.s(d),p.status="success",p.value=d;delete p.s;delete p.f');
          case 3:
            return this.createEffectfulFunction(["p", "d"], 'p.f(d),p.status="failure",p.value=d;delete p.s;delete p.f');
          case 4:
            return this.createFunction(["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],p=0,f=" + this.createEffectfulFunction(["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") + ",n=" + this.createEffectfulFunction(["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))') + ",e=" + this.createFunction(["o", "t"], "(a&&(l[t=p++]=o),n(o)," + this.createEffectfulFunction([], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + this.createFunction(["o"], "e(o)") + ",next:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
          default:
            return "";
        }
      }
      serializeSpecialReference(o4) {
        return this.assignIndexedValue(o4.i, this.serializeSpecialReferenceValue(o4.s));
      }
      serializeIteratorFactory(o4) {
        let d7 = "", f5 = false;
        return 4 !== o4.f.t && (this.markRef(o4.f.i), d7 = "(" + this.serialize(o4.f) + ",", f5 = true), d7 += this.assignIndexedValue(o4.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(o4.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), f5 && (d7 += ")"), d7;
      }
      serializeIteratorFactoryInstance(o4) {
        return this.getConstructor(o4.a[0]) + "(" + this.serialize(o4.a[1]) + ")";
      }
      serializeAsyncIteratorFactory(o4) {
        let d7 = o4.a[0], f5 = o4.a[1], v6 = "";
        4 !== d7.t && (this.markRef(d7.i), v6 += "(" + this.serialize(d7)), 4 !== f5.t && (this.markRef(f5.i), v6 += (v6 ? "," : "(") + this.serialize(f5)), v6 && (v6 += ",");
        let b5 = this.assignIndexedValue(o4.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(f5.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(p.push(t=" + this.getRefParam(d7.i) + "()),t):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
        return v6 ? v6 + b5 + ")" : b5;
      }
      serializeAsyncIteratorFactoryInstance(o4) {
        return this.getConstructor(o4.a[0]) + "(" + this.serialize(o4.a[1]) + ")";
      }
      serializeStreamConstructor(o4) {
        let d7 = this.assignIndexedValue(o4.i, this.getConstructor(o4.f) + "()"), f5 = o4.a.length;
        if (f5) {
          let v6 = this.serialize(o4.a[0]);
          for (let d8 = 1; d8 < f5; d8++)
            v6 += "," + this.serialize(o4.a[d8]);
          return "(" + d7 + "," + v6 + "," + this.getRefParam(o4.i) + ")";
        }
        return d7;
      }
      serializeStreamNext(o4) {
        return this.getRefParam(o4.i) + ".next(" + this.serialize(o4.f) + ")";
      }
      serializeStreamThrow(o4) {
        return this.getRefParam(o4.i) + ".throw(" + this.serialize(o4.f) + ")";
      }
      serializeStreamReturn(o4) {
        return this.getRefParam(o4.i) + ".return(" + this.serialize(o4.f) + ")";
      }
      serialize(o4) {
        try {
          switch (o4.t) {
            case 2:
              return Li[o4.s];
            case 0:
              return "" + o4.s;
            case 1:
              return '"' + o4.s + '"';
            case 3:
              return o4.s + "n";
            case 4:
              return this.getRefParam(o4.i);
            case 18:
              return this.serializeReference(o4);
            case 9:
              return this.serializeArray(o4);
            case 10:
              return this.serializeObject(o4);
            case 11:
              return this.serializeNullConstructor(o4);
            case 5:
              return this.serializeDate(o4);
            case 6:
              return this.serializeRegExp(o4);
            case 7:
              return this.serializeSet(o4);
            case 8:
              return this.serializeMap(o4);
            case 19:
              return this.serializeArrayBuffer(o4);
            case 16:
            case 15:
              return this.serializeTypedArray(o4);
            case 20:
              return this.serializeDataView(o4);
            case 14:
              return this.serializeAggregateError(o4);
            case 13:
              return this.serializeError(o4);
            case 12:
              return this.serializePromise(o4);
            case 17:
              return this.serializeWellKnownSymbol(o4);
            case 21:
              return this.serializeBoxed(o4);
            case 22:
              return this.serializePromiseConstructor(o4);
            case 23:
              return this.serializePromiseResolve(o4);
            case 24:
              return this.serializePromiseReject(o4);
            case 25:
              return this.serializePlugin(o4);
            case 26:
              return this.serializeSpecialReference(o4);
            case 27:
              return this.serializeIteratorFactory(o4);
            case 28:
              return this.serializeIteratorFactoryInstance(o4);
            case 29:
              return this.serializeAsyncIteratorFactory(o4);
            case 30:
              return this.serializeAsyncIteratorFactoryInstance(o4);
            case 31:
              return this.serializeStreamConstructor(o4);
            case 32:
              return this.serializeStreamNext(o4);
            case 33:
              return this.serializeStreamThrow(o4);
            case 34:
              return this.serializeStreamReturn(o4);
            default:
              throw new ro(o4);
          }
        } catch (o5) {
          throw new Xi(o5);
        }
      }
    };
    vo = class extends ho {
      parseItems(o4) {
        let d7 = [];
        for (let f5 = 0, v6 = o4.length; f5 < v6; f5++)
          f5 in o4 && (d7[f5] = this.parse(o4[f5]));
        return d7;
      }
      parseArray(o4, d7) {
        return function(o5, d8, f5) {
          return { t: 9, i: o5, s: void 0, l: d8.length, c: void 0, m: void 0, p: void 0, e: void 0, a: f5, f: void 0, b: void 0, o: De$1(d8) };
        }(o4, d7, this.parseItems(d7));
      }
      parseProperties(o4) {
        let d7 = Object.entries(o4), f5 = [], v6 = [];
        for (let o5 = 0, b6 = d7.length; o5 < b6; o5++)
          f5.push(p$12(d7[o5][0])), v6.push(this.parse(d7[o5][1]));
        let b5 = Symbol.iterator;
        return b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(Me2(this.parseIteratorFactory(), this.parse(Be2(o4))))), b5 = Symbol.asyncIterator, b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(Ue3(this.parseAsyncIteratorFactory(), this.parse(P4())))), b5 = Symbol.toStringTag, b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(G$1(o4[b5]))), b5 = Symbol.isConcatSpreadable, b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(o4[b5] ? Di : Hi)), { k: f5, v: v6, s: f5.length };
      }
      parsePlainObject(o4, d7, f5) {
        return this.createObjectNode(o4, d7, f5, this.parseProperties(d7));
      }
      parseBoxed(o4, d7) {
        return function(o5, d8) {
          return { t: 21, i: o5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: d8, b: void 0, o: void 0 };
        }(o4, this.parse(d7.valueOf()));
      }
      parseTypedArray(o4, d7) {
        return function(o5, d8, f5) {
          return { t: 15, i: o5, s: void 0, l: d8.length, c: d8.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: f5, b: d8.byteOffset, o: void 0 };
        }(o4, d7, this.parse(d7.buffer));
      }
      parseBigIntTypedArray(o4, d7) {
        return function(o5, d8, f5) {
          return { t: 16, i: o5, s: void 0, l: d8.length, c: d8.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: f5, b: d8.byteOffset, o: void 0 };
        }(o4, d7, this.parse(d7.buffer));
      }
      parseDataView(o4, d7) {
        return function(o5, d8, f5) {
          return { t: 20, i: o5, s: void 0, l: d8.byteLength, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: f5, b: d8.byteOffset, o: void 0 };
        }(o4, d7, this.parse(d7.buffer));
      }
      parseError(o4, d7) {
        let f5 = de$2(d7, this.features);
        return function(o5, d8, f6) {
          return { t: 13, i: o5, s: ie$1(d8), l: void 0, c: void 0, m: p$12(d8.message), p: f6, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
        }(o4, d7, f5 ? this.parseProperties(f5) : void 0);
      }
      parseAggregateError(o4, d7) {
        let f5 = de$2(d7, this.features);
        return function(o5, d8, f6) {
          return { t: 14, i: o5, s: ie$1(d8), l: void 0, c: void 0, m: p$12(d8.message), p: f6, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
        }(o4, d7, f5 ? this.parseProperties(f5) : void 0);
      }
      parseMap(o4, d7) {
        let f5 = [], v6 = [];
        for (let [o5, b5] of d7.entries())
          f5.push(this.parse(o5)), v6.push(this.parse(b5));
        return this.createMapNode(o4, f5, v6, d7.size);
      }
      parseSet(o4, d7) {
        let f5 = [];
        for (let o5 of d7.keys())
          f5.push(this.parse(o5));
        return function(o5, d8, f6) {
          return { t: 7, i: o5, s: void 0, l: d8, c: void 0, m: void 0, p: void 0, e: void 0, a: f6, f: void 0, b: void 0, o: void 0 };
        }(o4, d7.size, f5);
      }
      parsePlugin(o4, d7) {
        let f5 = this.plugins;
        if (f5)
          for (let v6 = 0, b5 = f5.length; v6 < b5; v6++) {
            let b6 = f5[v6];
            if (b6.parse.sync && b6.test(d7))
              return _e$1(o4, b6.tag, b6.parse.sync(d7, this, { id: o4 }));
          }
      }
      parseStream(o4, d7) {
        return Le2(o4, this.parseSpecialReference(4), []);
      }
      parsePromise(o4, d7) {
        return this.createPromiseConstructorNode(o4);
      }
      parseObject(o4, d7) {
        if (Array.isArray(d7))
          return this.parseArray(o4, d7);
        if (function(o5) {
          return "__SEROVAL_STREAM__" in o5;
        }(d7))
          return this.parseStream(o4, d7);
        let f5 = this.parsePlugin(o4, d7);
        if (f5)
          return f5;
        let v6 = d7.constructor;
        switch (v6) {
          case Object:
            return this.parsePlainObject(o4, d7, false);
          case void 0:
            return this.parsePlainObject(o4, d7, true);
          case Date:
            return function(o5, d8) {
              return { t: 5, i: o5, s: d8.toISOString(), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, f: void 0, a: void 0, b: void 0, o: void 0 };
            }(o4, d7);
          case RegExp:
            return function(o5, d8) {
              return { t: 6, i: o5, s: void 0, l: void 0, c: p$12(d8.source), m: d8.flags, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
            }(o4, d7);
          case Error:
          case EvalError:
          case RangeError:
          case ReferenceError:
          case SyntaxError:
          case TypeError:
          case URIError:
            return this.parseError(o4, d7);
          case Number:
          case Boolean:
          case String:
          case BigInt:
            return this.parseBoxed(o4, d7);
          case ArrayBuffer:
            return function(o5, d8) {
              let f6 = new Uint8Array(d8), v7 = f6.length, b6 = new Array(v7);
              for (let o6 = 0; o6 < v7; o6++)
                b6[o6] = f6[o6];
              return { t: 19, i: o5, s: b6, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
            }(o4, d7);
          case Int8Array:
          case Int16Array:
          case Int32Array:
          case Uint8Array:
          case Uint16Array:
          case Uint32Array:
          case Uint8ClampedArray:
          case Float32Array:
          case Float64Array:
            return this.parseTypedArray(o4, d7);
          case DataView:
            return this.parseDataView(o4, d7);
          case Map:
            return this.parseMap(o4, d7);
          case Set:
            return this.parseSet(o4, d7);
        }
        if (v6 === Promise || d7 instanceof Promise)
          return this.parsePromise(o4, d7);
        let b5 = this.features;
        if (16 & b5)
          switch (v6) {
            case BigInt64Array:
            case BigUint64Array:
              return this.parseBigIntTypedArray(o4, d7);
          }
        if (1 & b5 && typeof AggregateError < "u" && (v6 === AggregateError || d7 instanceof AggregateError))
          return this.parseAggregateError(o4, d7);
        if (d7 instanceof Error)
          return this.parseError(o4, d7);
        if (Symbol.iterator in d7 || Symbol.asyncIterator in d7)
          return this.parsePlainObject(o4, d7, !!v6);
        throw new to(d7);
      }
      parse(o4) {
        try {
          switch (typeof o4) {
            case "boolean":
              return o4 ? Di : Hi;
            case "undefined":
              return qi;
            case "string":
              return G$1(o4);
            case "number":
              return function(o5) {
                switch (o5) {
                  case Number.POSITIVE_INFINITY:
                    return Ki;
                  case Number.NEGATIVE_INFINITY:
                    return Zi;
                }
                return o5 != o5 ? Yi : Object.is(o5, -0) ? Vi : { t: 0, i: void 0, s: o5, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
              }(o4);
            case "bigint":
              return function(o5) {
                return { t: 3, i: void 0, s: "" + o5, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
              }(o4);
            case "object":
              if (o4) {
                let d7 = this.getReference(o4);
                return 0 === d7.type ? this.parseObject(d7.value, o4) : d7.value;
              }
              return Wi;
            case "symbol":
              return this.parseWellKnownSymbol(o4);
            case "function":
              return this.parseFunction(o4);
            default:
              throw new to(o4);
          }
        } catch (o5) {
          throw new Ji(o5);
        }
      }
    };
    bo = class extends yo {
      constructor(o4) {
        super(o4), this.mode = "cross", this.scopeId = o4.scopeId;
      }
      getRefParam(o4) {
        return "$R[" + o4 + "]";
      }
      assignIndexedValue(o4, d7) {
        return this.getRefParam(o4) + "=" + d7;
      }
      serializeTop(o4) {
        let d7 = this.serialize(o4), f5 = o4.i;
        if (null == f5)
          return d7;
        let v6 = this.resolvePatches(), b5 = this.getRefParam(f5), w6 = null == this.scopeId ? "" : ji, E4 = v6 ? d7 + "," + v6 + b5 : d7;
        if ("" === w6)
          return v6 ? "(" + E4 + ")" : E4;
        let S6 = null == this.scopeId ? "()" : '($R["' + p$12(this.scopeId) + '"])';
        return "(" + this.createFunction([w6], E4) + ")" + S6;
      }
    };
    wo = class extends vo {
      constructor(o4) {
        super(o4), this.alive = true, this.pending = 0, this.initial = true, this.buffer = [], this.onParseCallback = o4.onParse, this.onErrorCallback = o4.onError, this.onDoneCallback = o4.onDone;
      }
      onParseInternal(o4, d7) {
        try {
          this.onParseCallback(o4, d7);
        } catch (o5) {
          this.onError(o5);
        }
      }
      flush() {
        for (let o4 = 0, d7 = this.buffer.length; o4 < d7; o4++)
          this.onParseInternal(this.buffer[o4], false);
      }
      onParse(o4) {
        this.initial ? this.buffer.push(o4) : this.onParseInternal(o4, false);
      }
      onError(o4) {
        if (!this.onErrorCallback)
          throw o4;
        this.onErrorCallback(o4);
      }
      onDone() {
        this.onDoneCallback && this.onDoneCallback();
      }
      pushPendingState() {
        this.pending++;
      }
      popPendingState() {
        --this.pending <= 0 && this.onDone();
      }
      parseProperties(o4) {
        let d7 = Object.entries(o4), f5 = [], v6 = [];
        for (let o5 = 0, b6 = d7.length; o5 < b6; o5++)
          f5.push(p$12(d7[o5][0])), v6.push(this.parse(d7[o5][1]));
        let b5 = Symbol.iterator;
        return b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(Me2(this.parseIteratorFactory(), this.parse(Be2(o4))))), b5 = Symbol.asyncIterator, b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(Ue3(this.parseAsyncIteratorFactory(), this.parse(function(o5) {
          let d8 = P4(), f6 = o5[Symbol.asyncIterator]();
          return async function s4() {
            try {
              let o6 = await f6.next();
              o6.done ? d8.return(o6.value) : (d8.next(o6.value), await s4());
            } catch (o6) {
              d8.throw(o6);
            }
          }().catch(() => {
          }), d8;
        }(o4))))), b5 = Symbol.toStringTag, b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(G$1(o4[b5]))), b5 = Symbol.isConcatSpreadable, b5 in o4 && (f5.push(this.parseWellKnownSymbol(b5)), v6.push(o4[b5] ? Di : Hi)), { k: f5, v: v6, s: f5.length };
      }
      parsePromise(o4, d7) {
        return d7.then((d8) => {
          let f5 = this.parseWithError(d8);
          f5 && this.onParse({ t: 23, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(2), f5], f: void 0, b: void 0, o: void 0 }), this.popPendingState();
        }, (d8) => {
          if (this.alive) {
            let f5 = this.parseWithError(d8);
            f5 && this.onParse({ t: 24, i: o4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(3), f5], f: void 0, b: void 0, o: void 0 });
          }
          this.popPendingState();
        }), this.pushPendingState(), this.createPromiseConstructorNode(o4);
      }
      parsePlugin(o4, d7) {
        let f5 = this.plugins;
        if (f5)
          for (let v6 = 0, b5 = f5.length; v6 < b5; v6++) {
            let b6 = f5[v6];
            if (b6.parse.stream && b6.test(d7))
              return _e$1(o4, b6.tag, b6.parse.stream(d7, this, { id: o4 }));
          }
      }
      parseStream(o4, d7) {
        let f5 = Le2(o4, this.parseSpecialReference(4), []);
        return this.pushPendingState(), d7.on({ next: (d8) => {
          if (this.alive) {
            let f6 = this.parseWithError(d8);
            f6 && this.onParse(function(o5, d9) {
              return { t: 32, i: o5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: d9, b: void 0, o: void 0 };
            }(o4, f6));
          }
        }, throw: (d8) => {
          if (this.alive) {
            let f6 = this.parseWithError(d8);
            f6 && this.onParse(function(o5, d9) {
              return { t: 33, i: o5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: d9, b: void 0, o: void 0 };
            }(o4, f6));
          }
          this.popPendingState();
        }, return: (d8) => {
          if (this.alive) {
            let f6 = this.parseWithError(d8);
            f6 && this.onParse(function(o5, d9) {
              return { t: 34, i: o5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: d9, b: void 0, o: void 0 };
            }(o4, f6));
          }
          this.popPendingState();
        } }), f5;
      }
      parseWithError(o4) {
        try {
          return this.parse(o4);
        } catch (o5) {
          return void this.onError(o5);
        }
      }
      start(o4) {
        let d7 = this.parseWithError(o4);
        d7 && (this.onParseInternal(d7, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
      }
      destroy() {
        this.alive && (this.onDone(), this.alive = false);
      }
      isAlive() {
        return this.alive;
      }
    };
    Eo = class extends wo {
      constructor() {
        super(...arguments), this.mode = "cross";
      }
    };
    xo = { tag: "seroval-plugins/web/CustomEvent", test: (o4) => !(typeof CustomEvent > "u") && o4 instanceof CustomEvent, parse: { sync: (o4, d7) => ({ type: d7.parse(o4.type), options: d7.parse(N$1(o4)) }), async: async (o4, d7) => ({ type: await d7.parse(o4.type), options: await d7.parse(N$1(o4)) }), stream: (o4, d7) => ({ type: d7.parse(o4.type), options: d7.parse(N$1(o4)) }) }, serialize: (o4, d7) => "new CustomEvent(" + d7.serialize(o4.type) + "," + d7.serialize(o4.options) + ")", deserialize: (o4, d7) => new CustomEvent(d7.deserialize(o4.type), d7.deserialize(o4.options)) };
    So = xo;
    _o = { tag: "seroval-plugins/web/DOMException", test: (o4) => !(typeof DOMException > "u") && o4 instanceof DOMException, parse: { sync: (o4, d7) => ({ name: d7.parse(o4.name), message: d7.parse(o4.message) }), async: async (o4, d7) => ({ name: await d7.parse(o4.name), message: await d7.parse(o4.message) }), stream: (o4, d7) => ({ name: d7.parse(o4.name), message: d7.parse(o4.message) }) }, serialize: (o4, d7) => "new DOMException(" + d7.serialize(o4.message) + "," + d7.serialize(o4.name) + ")", deserialize: (o4, d7) => new DOMException(d7.deserialize(o4.message), d7.deserialize(o4.name)) };
    Ao = _o;
    $o = { tag: "seroval-plugins/web/Event", test: (o4) => !(typeof Event > "u") && o4 instanceof Event, parse: { sync: (o4, d7) => ({ type: d7.parse(o4.type), options: d7.parse(D$1(o4)) }), async: async (o4, d7) => ({ type: await d7.parse(o4.type), options: await d7.parse(D$1(o4)) }), stream: (o4, d7) => ({ type: d7.parse(o4.type), options: d7.parse(D$1(o4)) }) }, serialize: (o4, d7) => "new Event(" + d7.serialize(o4.type) + "," + d7.serialize(o4.options) + ")", deserialize: (o4, d7) => new Event(d7.deserialize(o4.type), d7.deserialize(o4.options)) };
    Ro = $o;
    ko = { tag: "seroval-plugins/web/File", test: (o4) => !(typeof File > "u") && o4 instanceof File, parse: { async: async (o4, d7) => ({ name: await d7.parse(o4.name), options: await d7.parse({ type: o4.type, lastModified: o4.lastModified }), buffer: await d7.parse(await o4.arrayBuffer()) }) }, serialize: (o4, d7) => "new File([" + d7.serialize(o4.buffer) + "]," + d7.serialize(o4.name) + "," + d7.serialize(o4.options) + ")", deserialize: (o4, d7) => new File([d7.deserialize(o4.buffer)], d7.deserialize(o4.name), d7.deserialize(o4.options)) };
    Io = ko;
    zo = {};
    jo = { tag: "seroval-plugins/web/FormDataFactory", test: (o4) => o4 === zo, parse: { sync() {
    }, async: async () => await Promise.resolve(void 0), stream() {
    } }, serialize: (o4, d7) => d7.createEffectfulFunction(["e", "f", "i", "s", "t"], "f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f"), deserialize: () => zo };
    To = { tag: "seroval-plugins/web/FormData", extends: [Io, jo], test: (o4) => !(typeof FormData > "u") && o4 instanceof FormData, parse: { sync: (o4, d7) => ({ factory: d7.parse(zo), entries: d7.parse(_$2(o4)) }), async: async (o4, d7) => ({ factory: await d7.parse(zo), entries: await d7.parse(_$2(o4)) }), stream: (o4, d7) => ({ factory: d7.parse(zo), entries: d7.parse(_$2(o4)) }) }, serialize: (o4, d7) => "(" + d7.serialize(o4.factory) + ")(" + d7.serialize(o4.entries) + ")", deserialize(o4, d7) {
      let f5 = new FormData(), v6 = d7.deserialize(o4.entries);
      for (let o5 = 0, d8 = v6.length; o5 < d8; o5++) {
        let d9 = v6[o5];
        f5.append(d9[0], d9[1]);
      }
      return f5;
    } };
    Co = To;
    Po = { tag: "seroval-plugins/web/Headers", test: (o4) => !(typeof Headers > "u") && o4 instanceof Headers, parse: { sync: (o4, d7) => d7.parse(M$1(o4)), async: async (o4, d7) => await d7.parse(M$1(o4)), stream: (o4, d7) => d7.parse(M$1(o4)) }, serialize: (o4, d7) => "new Headers(" + d7.serialize(o4) + ")", deserialize: (o4, d7) => new Headers(d7.deserialize(o4)) };
    Oo = Po;
    Bo = {};
    Mo = { tag: "seroval-plugins/web/ReadableStreamFactory", test: (o4) => o4 === Bo, parse: { sync() {
    }, async: async () => await Promise.resolve(void 0), stream() {
    } }, serialize: (o4, d7) => d7.createFunction(["d"], "new ReadableStream({start:" + d7.createEffectfulFunction(["c"], "d.on({next:" + d7.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + d7.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + d7.createEffectfulFunction([], "c.close()") + "})") + "})"), deserialize: () => Bo };
    Lo = { tag: "seroval/plugins/web/ReadableStream", extends: [Mo], test: (o4) => !(typeof ReadableStream > "u") && o4 instanceof ReadableStream, parse: { sync: (o4, d7) => ({ factory: d7.parse(Bo), stream: d7.parse(P4()) }), async: async (o4, d7) => ({ factory: await d7.parse(Bo), stream: await d7.parse(me$1(o4)) }), stream: (o4, d7) => ({ factory: d7.parse(Bo), stream: d7.parse(me$1(o4)) }) }, serialize: (o4, d7) => "(" + d7.serialize(o4.factory) + ")(" + d7.serialize(o4.stream) + ")", deserialize(o4, d7) {
      let f5 = d7.deserialize(o4.stream);
      return new ReadableStream({ start(o5) {
        f5.on({ next(d8) {
          o5.enqueue(d8);
        }, throw(d8) {
          o5.error(d8);
        }, return() {
          o5.close();
        } });
      } });
    } };
    Uo = Lo;
    No = { tag: "seroval-plugins/web/Request", extends: [Uo, Oo], test: (o4) => !(typeof Request > "u") && o4 instanceof Request, parse: { async: async (o4, d7) => ({ url: await d7.parse(o4.url), options: await d7.parse(ye$1(o4, o4.body ? await o4.clone().arrayBuffer() : null)) }), stream: (o4, d7) => ({ url: d7.parse(o4.url), options: d7.parse(ye$1(o4, o4.clone().body)) }) }, serialize: (o4, d7) => "new Request(" + d7.serialize(o4.url) + "," + d7.serialize(o4.options) + ")", deserialize: (o4, d7) => new Request(d7.deserialize(o4.url), d7.deserialize(o4.options)) };
    Fo = No;
    Do = { tag: "seroval-plugins/web/Response", extends: [Uo, Oo], test: (o4) => !(typeof Response > "u") && o4 instanceof Response, parse: { async: async (o4, d7) => ({ body: await d7.parse(o4.body ? await o4.clone().arrayBuffer() : null), options: await d7.parse(be$1(o4)) }), stream: (o4, d7) => ({ body: d7.parse(o4.clone().body), options: d7.parse(be$1(o4)) }) }, serialize: (o4, d7) => "new Response(" + d7.serialize(o4.body) + "," + d7.serialize(o4.options) + ")", deserialize: (o4, d7) => new Response(d7.deserialize(o4.body), d7.deserialize(o4.options)) };
    Ho = Do;
    qo = { tag: "seroval-plugins/web/URLSearchParams", test: (o4) => !(typeof URLSearchParams > "u") && o4 instanceof URLSearchParams, parse: { sync: (o4, d7) => d7.parse(o4.toString()), async: async (o4, d7) => await d7.parse(o4.toString()), stream: (o4, d7) => d7.parse(o4.toString()) }, serialize: (o4, d7) => "new URLSearchParams(" + d7.serialize(o4) + ")", deserialize: (o4, d7) => new URLSearchParams(d7.deserialize(o4)) };
    Wo = qo;
    Vo = { tag: "seroval-plugins/web/URL", test: (o4) => !(typeof URL > "u") && o4 instanceof URL, parse: { sync: (o4, d7) => d7.parse(o4.href), async: async (o4, d7) => await d7.parse(o4.href), stream: (o4, d7) => d7.parse(o4.href) }, serialize: (o4, d7) => "new URL(" + d7.serialize(o4) + ")", deserialize: (o4, d7) => new URL(d7.deserialize(o4)) };
    Ko = Vo;
    Zo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {};
    Yo = "__unctx__";
    Go = Zo[Yo] || (Zo[Yo] = function(o4 = {}) {
      const d7 = {};
      return { get: (f5, v6 = {}) => (d7[f5] || (d7[f5] = function(o5 = {}) {
        let d8, f6 = false;
        const s4 = (o6) => {
          if (d8 && d8 !== o6)
            throw new Error("Context conflict");
        };
        let v7;
        if (o5.asyncContext) {
          const d9 = o5.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          d9 ? v7 = new d9() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const a = () => {
          if (v7 && void 0 === d8) {
            const o6 = v7.getStore();
            if (void 0 !== o6)
              return o6;
          }
          return d8;
        };
        return { use: () => {
          const o6 = a();
          if (void 0 === o6)
            throw new Error("Context is not available");
          return o6;
        }, tryUse: () => a(), set: (o6, v8) => {
          v8 || s4(o6), d8 = o6, f6 = true;
        }, unset: () => {
          d8 = void 0, f6 = false;
        }, call: (o6, b5) => {
          s4(o6), d8 = o6;
          try {
            return v7 ? v7.run(o6, b5) : b5();
          } finally {
            f6 || (d8 = void 0);
          }
        }, async callAsync(o6, b5) {
          d8 = o6;
          const l6 = () => {
            d8 = o6;
          }, u4 = () => d8 === o6 ? l6 : void 0;
          Jo.add(u4);
          try {
            const w6 = v7 ? v7.run(o6, b5) : b5();
            return f6 || (d8 = void 0), await w6;
          } finally {
            Jo.delete(u4);
          }
        } };
      }({ ...o4, ...v6 })), d7[f5], d7[f5]) };
    }());
    es = (o4, d7 = {}) => Go.get(o4, d7);
    Qo = "__unctx_async_handlers__";
    Jo = Zo[Qo] || (Zo[Qo] = /* @__PURE__ */ new Set());
    Xo = Symbol("$HTTPEvent");
    ea = h5(getRequestURL);
    ta = h5(getRequestIP);
    ra = h5(setResponseStatus);
    sa = h5(getResponseStatus);
    na = h5(getResponseStatusText);
    ia = h5(getResponseHeaders);
    oa = h5(getResponseHeader);
    aa = h5(setResponseHeader);
    ca = h5(appendResponseHeader);
    la = h5(getCookie);
    ua = h5(setCookie);
    da = h5(Or);
    ha = h5(getRequestWebStream);
    fa = h5(removeResponseHeader);
    pa = h5(function(o4) {
      return o4.web ??= { request: ts(o4), url: ea(o4) }, o4.web.request;
    });
    ga = "Invariant Violation";
    ({ setPrototypeOf: ma = function(o4, d7) {
      return o4.__proto__ = d7, o4;
    } } = Object);
    oe2 = class extends Error {
      framesToPop = 1;
      name = ga;
      constructor(o4 = ga) {
        super("number" == typeof o4 ? `${ga}: ${o4} (see https://github.com/apollographql/invariant-packages)` : o4), ma(this, oe2.prototype);
      }
    };
    ya = Symbol("fetchEvent");
    zs = class {
      event;
      constructor(o4) {
        this.event = o4;
      }
      get(o4) {
        const d7 = oa(this.event, o4);
        return Array.isArray(d7) ? d7.join(", ") : d7 || null;
      }
      has(o4) {
        return void 0 !== this.get(o4);
      }
      set(o4, d7) {
        return aa(this.event, o4, d7);
      }
      delete(o4) {
        return fa(this.event, o4);
      }
      append(o4, d7) {
        ca(this.event, o4, d7);
      }
      getSetCookie() {
        const o4 = oa(this.event, "Set-Cookie");
        return Array.isArray(o4) ? o4 : [o4];
      }
      forEach(o4) {
        return Object.entries(ia(this.event)).forEach(([d7, f5]) => o4(Array.isArray(f5) ? f5.join(", ") : f5, d7, this));
      }
      entries() {
        return Object.entries(ia(this.event)).map(([o4, d7]) => [o4, Array.isArray(d7) ? d7.join(", ") : d7])[Symbol.iterator]();
      }
      keys() {
        return Object.keys(ia(this.event))[Symbol.iterator]();
      }
      values() {
        return Object.values(ia(this.event)).map((o4) => Array.isArray(o4) ? o4.join(", ") : o4)[Symbol.iterator]();
      }
      [Symbol.iterator]() {
        return this.entries()[Symbol.iterator]();
      }
    };
    va = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
    ba = [{ page: true, $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init__(), __exports)), import: () => Promise.resolve().then(() => (init__(), __exports)) }, path: "/*404", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/src/routes/[...404].tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init_build(), build_exports)), import: () => Promise.resolve().then(() => (init_build(), build_exports)) }, path: "/", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/src/routes/index.tsx" }, { page: true, $component: { src: "src/routes/protected.tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init_protected(), protected_exports)), import: () => Promise.resolve().then(() => (init_protected(), protected_exports)) }, path: "/protected", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/src/routes/protected.tsx" }, { page: false, $GET: { src: "src/routes/api/auth/[...solidauth].ts?pick=GET", build: () => Promise.resolve().then(() => (init_solidauth(), solidauth_exports)), import: () => Promise.resolve().then(() => (init_solidauth(), solidauth_exports)) }, $POST: { src: "src/routes/api/auth/[...solidauth].ts?pick=POST", build: () => Promise.resolve().then(() => (init_solidauth_2(), solidauth_2_exports)), import: () => Promise.resolve().then(() => (init_solidauth_2(), solidauth_2_exports)) }, path: "/api/auth/*solidauth", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/src/routes/api/auth/[...solidauth].ts" }];
    wa = function(o4) {
      function t3(o5, d7, f5, v6) {
        const b5 = Object.values(o5).find((o6) => f5.startsWith(o6.id + "/"));
        return b5 ? (t3(b5.children || (b5.children = []), d7, f5.slice(b5.id.length)), o5) : (o5.push({ ...d7, id: f5, path: f5.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "") }), o5);
      }
      return o4.sort((o5, d7) => o5.path.length - d7.path.length).reduce((o5, d7) => t3(o5, d7, d7.path, d7.path), []);
    }(ba.filter((o4) => o4.page));
    !function(o4 = {}) {
      const d7 = { options: o4, rootNode: Xe2(), staticRoutesMap: {} }, r3 = (d8) => o4.strictTrailingSlash ? d8 : d8.replace(/\/$/, "") || "/";
      if (o4.routes)
        for (const f5 in o4.routes)
          Ee$1(d7, r3(f5), o4.routes[f5]);
    }({ routes: ba.reduce((o4, d7) => {
      if (!function(o5) {
        return o5.$GET || o5.$POST || o5.$PUT || o5.$PATCH || o5.$DELETE;
      }(d7))
        return o4;
      let f5 = d7.path.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "").replace(/\*([^/]*)/g, (o5, d8) => `**:${d8}`);
      if (/:[^/]*\?/g.test(f5))
        throw new Error(`Optional parameters are not supported in API routes: ${f5}`);
      if (o4[f5])
        throw new Error(`Duplicate API routes for "${f5}" found at "${o4[f5].route.path}" and "${d7.path}"`);
      return o4[f5] = { route: d7 }, o4;
    }, {}) });
    Ea = { style: (o4) => ssrElement("style", o4.attrs, () => escape(o4.children)), link: (o4) => ssrElement("link", o4.attrs, void 0), script: (o4) => o4.attrs.src ? ssrElement("script", mergeProps(() => o4.attrs, { get id() {
      return o4.key;
    } }), () => ssr(" ")) : null, noscript: (o4) => ssrElement("noscript", o4.attrs, () => escape(o4.children)) };
    ti = () => getRequestEvent().routes;
    xa = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    _a = Ur(async function(o4) {
      const d7 = bs(o4), f5 = d7.request, v6 = f5.headers.get("X-Server-Id"), b5 = f5.headers.get("X-Server-Instance"), w6 = f5.headers.has("X-Single-Flight"), E4 = new URL(f5.url);
      let S6, _3;
      if (v6)
        (function(o5, d8) {
          if (!o5)
            throw new oe2(d8);
        })("string" == typeof v6, "Invalid server function"), [S6, _3] = v6.split("#");
      else if (S6 = E4.searchParams.get("id"), _3 = E4.searchParams.get("name"), !S6 || !_3)
        throw new Error("Invalid request");
      const A3 = (await globalThis.MANIFEST["server-fns"].chunks[S6].import())[_3];
      let I2 = [];
      if (!b5 || "GET" === o4.method) {
        const o5 = E4.searchParams.get("args");
        if (o5) {
          const d8 = JSON.parse(o5);
          (d8.t ? ge$1(d8, { plugins: [So, Ao, Ro, Co, Oo, Uo, Fo, Ho, Wo, Ko] }) : d8).forEach((o6) => I2.push(o6));
        }
      }
      if ("POST" === o4.method) {
        const d8 = f5.headers.get("content-type"), v7 = o4.node.req, b6 = v7 instanceof ReadableStream, w7 = b6 && v7.locked, E5 = b6 ? v7 : v7.body;
        if (d8?.startsWith("multipart/form-data") || d8?.startsWith("application/x-www-form-urlencoded"))
          I2.push(await (w7 ? f5 : new Request(f5, { ...f5, body: E5 })).formData());
        else if (d8?.startsWith("application/json")) {
          const o5 = w7 ? f5 : new Request(f5, { ...f5, body: E5 });
          I2 = ge$1(await o5.json(), { plugins: [So, Ao, Ro, Co, Oo, Uo, Fo, Ho, Wo, Ko] });
        }
      }
      try {
        let v7 = await provideRequestEvent(d7, async () => (sn.context = { event: d7 }, d7.locals.serverFunctionMeta = { id: S6 + "#" + _3 }, A3(...I2)));
        if (w6 && b5 && (v7 = await Fe2(d7, v7)), v7 instanceof Response) {
          if (v7.headers && v7.headers.has("X-Content-Raw"))
            return v7;
          b5 && (v7.headers && Ae$1(o4, v7.headers), v7.status && (v7.status < 300 || v7.status >= 400) && ra(o4, v7.status), v7.customBody ? v7 = await v7.customBody() : null == v7.body && (v7 = null));
        }
        return b5 ? (da(o4, "content-type", "text/javascript"), Pe$1(b5, v7)) : ke$1(v7, f5, I2);
      } catch (v7) {
        if (v7 instanceof Response)
          w6 && b5 && (v7 = await Fe2(d7, v7)), v7.headers && Ae$1(o4, v7.headers), v7.status && (!b5 || v7.status < 300 || v7.status >= 400) && ra(o4, v7.status), v7.customBody ? v7 = v7.customBody() : null == v7.body && (v7 = null), da(o4, "X-Error", "true");
        else if (b5) {
          const d8 = v7 instanceof Error ? v7.message : "string" == typeof v7 ? v7 : "true";
          da(o4, "X-Error", d8.replace(/[\r\n]+/g, ""));
        } else
          v7 = ke$1(v7, f5, I2, true);
        return b5 ? (da(o4, "content-type", "text/javascript"), Pe$1(b5, v7)) : v7;
      }
    });
    AuthError = class extends Error {
      constructor(o4, d7) {
        o4 instanceof Error ? super(void 0, { cause: { err: o4, ...o4.cause, ...d7 } }) : "string" == typeof o4 ? (d7 instanceof Error && (d7 = { err: d7, ...d7.cause }), super(o4, d7)) : super(void 0, o4), this.name = this.constructor.name, this.type = this.constructor.type ?? "AuthError", this.kind = this.constructor.kind ?? "error", Error.captureStackTrace?.(this, this.constructor);
        const f5 = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
        this.message += `${this.message ? ". " : ""}Read more at ${f5}`;
      }
    };
    SignInError = class extends AuthError {
    };
    SignInError.kind = "signIn";
    AdapterError = class extends AuthError {
    };
    AdapterError.type = "AdapterError";
    AccessDenied = class extends AuthError {
    };
    AccessDenied.type = "AccessDenied";
    CallbackRouteError = class extends AuthError {
    };
    CallbackRouteError.type = "CallbackRouteError";
    ErrorPageLoop = class extends AuthError {
    };
    ErrorPageLoop.type = "ErrorPageLoop";
    EventError = class extends AuthError {
    };
    EventError.type = "EventError";
    InvalidCallbackUrl = class extends AuthError {
    };
    InvalidCallbackUrl.type = "InvalidCallbackUrl";
    CredentialsSignin = class extends SignInError {
      constructor() {
        super(...arguments), this.code = "credentials";
      }
    };
    CredentialsSignin.type = "CredentialsSignin";
    InvalidEndpoints = class extends AuthError {
    };
    InvalidEndpoints.type = "InvalidEndpoints";
    InvalidCheck = class extends AuthError {
    };
    InvalidCheck.type = "InvalidCheck";
    JWTSessionError = class extends AuthError {
    };
    JWTSessionError.type = "JWTSessionError";
    MissingAdapter = class extends AuthError {
    };
    MissingAdapter.type = "MissingAdapter";
    MissingAdapterMethods = class extends AuthError {
    };
    MissingAdapterMethods.type = "MissingAdapterMethods";
    MissingAuthorize = class extends AuthError {
    };
    MissingAuthorize.type = "MissingAuthorize";
    MissingSecret = class extends AuthError {
    };
    MissingSecret.type = "MissingSecret";
    OAuthAccountNotLinked = class extends SignInError {
    };
    OAuthAccountNotLinked.type = "OAuthAccountNotLinked";
    OAuthCallbackError = class extends SignInError {
    };
    OAuthCallbackError.type = "OAuthCallbackError";
    OAuthProfileParseError = class extends AuthError {
    };
    OAuthProfileParseError.type = "OAuthProfileParseError";
    SessionTokenError = class extends AuthError {
    };
    SessionTokenError.type = "SessionTokenError";
    (class extends SignInError {
    }).type = "OAuthSignInError";
    (class extends SignInError {
    }).type = "EmailSignInError";
    SignOutError = class extends AuthError {
    };
    SignOutError.type = "SignOutError";
    UnknownAction = class extends AuthError {
    };
    UnknownAction.type = "UnknownAction";
    UnsupportedStrategy = class extends AuthError {
    };
    UnsupportedStrategy.type = "UnsupportedStrategy";
    InvalidProvider = class extends AuthError {
    };
    InvalidProvider.type = "InvalidProvider";
    UntrustedHost = class extends AuthError {
    };
    UntrustedHost.type = "UntrustedHost";
    Verification = class extends AuthError {
    };
    Verification.type = "Verification";
    MissingCSRF = class extends SignInError {
    };
    MissingCSRF.type = "MissingCSRF";
    Aa = /* @__PURE__ */ new Set(["CredentialsSignin", "OAuthAccountNotLinked", "OAuthCallbackError", "AccessDenied", "Verification", "MissingCSRF", "AccountNotLinked", "WebAuthnVerificationError"]);
    DuplicateConditionalUI = class extends AuthError {
    };
    DuplicateConditionalUI.type = "DuplicateConditionalUI";
    MissingWebAuthnAutocomplete = class extends AuthError {
    };
    MissingWebAuthnAutocomplete.type = "MissingWebAuthnAutocomplete";
    WebAuthnVerificationError = class extends AuthError {
    };
    WebAuthnVerificationError.type = "WebAuthnVerificationError";
    AccountNotLinked = class extends SignInError {
    };
    AccountNotLinked.type = "AccountNotLinked";
    ExperimentalFeatureNotEnabled = class extends AuthError {
    };
    ExperimentalFeatureNotEnabled.type = "ExperimentalFeatureNotEnabled";
    $a = "\x1B[31m";
    Ra = "\x1B[0m";
    ka = { error(o4) {
      const d7 = o4 instanceof AuthError ? o4.type : o4.name;
      if (console.error(`${$a}[auth][error]${Ra} ${d7}: ${o4.message}`), o4.cause && "object" == typeof o4.cause && "err" in o4.cause && o4.cause.err instanceof Error) {
        const { err: d8, ...f5 } = o4.cause;
        console.error(`${$a}[auth][cause]${Ra}:`, d8.stack), f5 && console.error(`${$a}[auth][details]${Ra}:`, JSON.stringify(f5, null, 2));
      } else
        o4.stack && console.error(o4.stack.replace(/.*/, "").substring(1));
    }, warn(o4) {
      const d7 = `https://warnings.authjs.dev#${o4}`;
      console.warn(`\x1B[33m[auth][warn][${o4}]${Ra}`, `Read more: ${d7}`);
    }, debug(o4, d7) {
      console.log(`\x1B[90m[auth][debug]:${Ra} ${o4}`, JSON.stringify(d7, null, 2));
    } };
    Ia = { BASE_URL: "/_build", CWD: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs", DEV: false, DEVTOOLS: false, MANIFEST: globalThis.MANIFEST, MODE: "production", PROD: true, ROUTERS: ["public", "ssr", "client", "server-fns"], ROUTER_HANDLER: "src/entry-server.tsx", ROUTER_NAME: "ssr", ROUTER_TYPE: "http", SERVER_BASE_URL: "", SSR: true, START_APP: "./src/app.tsx", START_DEV_OVERLAY: true, START_ISLANDS: false, START_SSR: true };
    p5 = (o4) => typeof At < "u" && typeof At.env < "u" && !o4.startsWith("VITE_") ? At.env[o4] : o4.startsWith("VITE_") ? Ia[o4] : void 0;
    u$1 = (...o4) => {
      for (const d7 of o4) {
        const o5 = p5(d7);
        if (o5)
          return o5;
      }
    };
    E$2 = () => {
      var o4;
      return null != (o4 = u$1("AUTH_URL_INTERNAL", "VITE_AUTH_PATH")) ? o4 : "/api/auth";
    };
    za = { baseUrl: c2(u$1("AUTH_URL", "VERCEL_URL")).origin, basePath: c2(p5("AUTH_URL")).path, baseUrlServer: c2(u$1("AUTH_URL_INTERNAL", "AUTH_URL", "VERCEL_URL")).origin, basePathServer: c2(u$1("AUTH_URL_INTERNAL", "AUTH_URL")).path, _lastSync: 0, _session: void 0, _getSession: () => {
    } };
    ja = createContext(void 0);
    d$1 = async (o4) => {
      let d7;
      if (null == o4 ? void 0 : o4.request) {
        const f6 = o4.request.headers.get("cookie");
        f6 && (d7 = { headers: { cookie: f6 } });
      }
      const f5 = await fetch(((o5) => `${za.baseUrlServer}${o5}`)(`${E$2()}/session`), d7);
      if ((null == o4 ? void 0 : o4.request) && (null == o4 ? void 0 : o4.response)) {
        const d8 = f5.headers.get("set-cookie");
        if (d8)
          try {
            o4.response.headers.append("set-cookie", null != d8 ? d8 : "");
          } catch {
          }
      }
      const v6 = await f5.json();
      if (!f5.ok)
        throw new Error(v6.error);
      return v6 && 0 !== Object.keys(v6).length ? v6 : null;
    };
    Ta = /^(?:[a-z0-9]+:)?\/\//i;
    Ca = /^\/+|(\/)\/+$/g;
    Pa = "http://sr";
    Oa = createContext();
    Ba = createContext();
    V4 = () => function(o4, d7) {
      if (null == o4)
        throw new Error(d7);
      return o4;
    }(useContext(Oa), "<A> and 'use' router primitives can be only used inside a Route.");
    je3 = () => V4().navigatorFactory();
    _e4 = () => V4().location;
    La = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {};
    Ua = "__unctx__";
    Na = La[Ua] || (La[Ua] = function(o4 = {}) {
      const d7 = {};
      return { get: (f5, v6 = {}) => (d7[f5] || (d7[f5] = function(o5 = {}) {
        let d8, f6 = false;
        const c3 = (o6) => {
          if (d8 && d8 !== o6)
            throw new Error("Context conflict");
        };
        let v7;
        if (o5.asyncContext) {
          const d9 = o5.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          d9 ? v7 = new d9() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const a = () => {
          if (v7 && void 0 === d8) {
            const o6 = v7.getStore();
            if (void 0 !== o6)
              return o6;
          }
          return d8;
        };
        return { use: () => {
          const o6 = a();
          if (void 0 === o6)
            throw new Error("Context is not available");
          return o6;
        }, tryUse: () => a(), set: (o6, v8) => {
          v8 || c3(o6), d8 = o6, f6 = true;
        }, unset: () => {
          d8 = void 0, f6 = false;
        }, call: (o6, b5) => {
          c3(o6), d8 = o6;
          try {
            return v7 ? v7.run(o6, b5) : b5();
          } finally {
            f6 || (d8 = void 0);
          }
        }, async callAsync(o6, b5) {
          d8 = o6;
          const g6 = () => {
            d8 = o6;
          }, i3 = () => d8 === o6 ? g6 : void 0;
          Da.add(i3);
          try {
            const w6 = v7 ? v7.run(o6, b5) : b5();
            return f6 || (d8 = void 0), await w6;
          } finally {
            Da.delete(i3);
          }
        } };
      }({ ...o4, ...v6 })), d7[f5], d7[f5]) };
    }());
    x = (o4, d7 = {}) => Na.get(o4, d7);
    Fa = "__unctx_async_handlers__";
    Da = La[Fa] || (La[Fa] = /* @__PURE__ */ new Set());
    Ha = Object.defineProperty;
    __publicField = (o4, d7, f5) => (((o5, d8, f6) => {
      d8 in o5 ? Ha(o5, d8, { enumerable: true, configurable: true, writable: true, value: f6 }) : o5[d8] = f6;
    })(o4, d7 + "", f5), f5);
    qa = createContext();
    Wa = ["title", "meta"];
    Va = [];
    Ka = ["name", "http-equiv", "content", "charset", "media"].concat(["property"]);
    O = (o4, d7) => {
      const f5 = Object.fromEntries(Object.entries(o4.props).filter(([o5]) => d7.includes(o5)).sort());
      return (Object.hasOwn(f5, "name") || Object.hasOwn(f5, "property")) && (f5.name = f5.name || f5.property, delete f5.property), o4.tag + JSON.stringify(f5);
    };
    mt = (o4) => {
      const d7 = ft2();
      return createComponent(qa.Provider, { value: d7, get children() {
        return o4.children;
      } });
    };
    gt = (o4, d7, f5) => (function(o5) {
      const d8 = useContext(qa);
      if (!d8)
        throw new Error("<MetaProvider /> should be in the tree");
      createRenderEffect(() => {
        const f6 = d8.addTag(o5);
        onCleanup(() => d8.removeTag(o5, f6));
      });
    }({ tag: o4, props: d7, setting: f5, id: createUniqueId(), get name() {
      return d7.name || d7.property;
    } }), null);
    bt = (o4) => gt("title", o4, { escape: true, close: true });
    ie2 = (o4) => (d7) => {
      const { base: f5 } = d7, v6 = children(() => d7.children), b5 = createMemo(() => Se3(v6(), d7.base || ""));
      let w6;
      const E4 = ke4(o4, b5, () => w6, { base: f5, singleFlight: d7.singleFlight, transformUrl: d7.transformUrl });
      return o4.create && o4.create(E4), createComponent(Oa.Provider, { value: E4, get children() {
        return createComponent(vt, { routerState: E4, get root() {
          return d7.root;
        }, get preload() {
          return d7.rootPreload || d7.rootLoad;
        }, get children() {
          return [(w6 = getOwner()) && null, createComponent(Rt, { routerState: E4, get branches() {
            return b5();
          } })];
        } });
      } });
    };
    z = (o4) => () => createComponent(Show, { get when() {
      return o4();
    }, keyed: true, children: (o5) => createComponent(Ba.Provider, { value: o5, get children() {
      return o5.outlet();
    } }) });
    Za = { style: (o4) => ssrElement("style", o4.attrs, () => escape(o4.children)), link: (o4) => ssrElement("link", o4.attrs, void 0), script: (o4) => o4.attrs.src ? ssrElement("script", mergeProps(() => o4.attrs, { get id() {
      return o4.key;
    } }), () => ssr(" ")) : null, noscript: (o4) => ssrElement("noscript", o4.attrs, () => escape(o4.children)) };
    Ya = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
    Ga = [{ page: true, $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init__2(), __exports2)), import: () => Promise.resolve().then(() => (init__2(), __exports2)) }, path: "/*404", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/src/routes/[...404].tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init_index2(), index2_exports)), import: () => Promise.resolve().then(() => (init_index2(), index2_exports)) }, path: "/", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/src/routes/index.tsx" }, { page: true, $component: { src: "src/routes/protected.tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init_protected2(), protected2_exports)), import: () => Promise.resolve().then(() => (init_protected2(), protected2_exports)) }, path: "/protected", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/src/routes/protected.tsx" }, { page: false, $GET: { src: "src/routes/api/auth/[...solidauth].ts?pick=GET", build: () => Promise.resolve().then(() => (init_solidauth_3(), solidauth_3_exports)), import: () => Promise.resolve().then(() => (init_solidauth_3(), solidauth_3_exports)) }, $POST: { src: "src/routes/api/auth/[...solidauth].ts?pick=POST", build: () => Promise.resolve().then(() => (init_solidauth_22(), solidauth_22_exports)), import: () => Promise.resolve().then(() => (init_solidauth_22(), solidauth_22_exports)) }, path: "/api/auth/*solidauth", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-authjs/src/routes/api/auth/[...solidauth].ts" }];
    Qa = function(o4) {
      function t3(o5, d7, f5, v6) {
        const b5 = Object.values(o5).find((o6) => f5.startsWith(o6.id + "/"));
        return b5 ? (t3(b5.children || (b5.children = []), d7, f5.slice(b5.id.length)), o5) : (o5.push({ ...d7, id: f5, path: f5.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "") }), o5);
      }
      return o4.sort((o5, d7) => o5.path.length - d7.path.length).reduce((o5, d7) => t3(o5, d7, d7.path, d7.path), []);
    }(Ga.filter((o4) => o4.page));
    Ja = function(o4 = {}) {
      const d7 = { options: o4, rootNode: ce2(), staticRoutesMap: {} }, r3 = (d8) => o4.strictTrailingSlash ? d8 : d8.replace(/\/$/, "") || "/";
      if (o4.routes)
        for (const f5 in o4.routes)
          J2(d7, r3(f5), o4.routes[f5]);
      return { ctx: d7, lookup: (o5) => function(o6, d8) {
        const f5 = o6.staticRoutesMap[d8];
        if (f5)
          return f5.data;
        const v6 = d8.split("/"), b5 = {};
        let w6 = false, E4 = null, S6 = o6.rootNode, _3 = null;
        for (let o7 = 0; o7 < v6.length; o7++) {
          const d9 = v6[o7];
          null !== S6.wildcardChildNode && (E4 = S6.wildcardChildNode, _3 = v6.slice(o7).join("/"));
          const f6 = S6.children.get(d9);
          if (void 0 === f6) {
            if (S6 && S6.placeholderChildren.length > 1) {
              const d10 = v6.length - o7;
              S6 = S6.placeholderChildren.find((o8) => o8.maxDepth === d10) || null;
            } else
              S6 = S6.placeholderChildren[0] || null;
            if (!S6)
              break;
            S6.paramName && (b5[S6.paramName] = d9), w6 = true;
          } else
            S6 = f6;
        }
        return (null === S6 || null === S6.data) && null !== E4 && (S6 = E4, b5[S6.paramName || "_"] = _3, w6 = true), S6 ? w6 ? { ...S6.data, params: w6 ? b5 : void 0 } : S6.data : null;
      }(d7, r3(o5)), insert: (o5, f5) => J2(d7, r3(o5), f5), remove: (o5) => function(o6, d8) {
        let f5 = false;
        const v6 = d8.split("/");
        let b5 = o6.rootNode;
        for (const o7 of v6)
          if (b5 = b5.children.get(o7), !b5)
            return f5;
        if (b5.data) {
          const o7 = v6.at(-1) || "";
          b5.data = null, 0 === Object.keys(b5.children).length && b5.parent && (b5.parent.children.delete(o7), b5.parent.wildcardChildNode = null, b5.parent.placeholderChildren = []), f5 = true;
        }
        return f5;
      }(d7, r3(o5)) };
    }({ routes: Ga.reduce((o4, d7) => {
      if (!function(o5) {
        return o5.$GET || o5.$POST || o5.$PUT || o5.$PATCH || o5.$DELETE;
      }(d7))
        return o4;
      let f5 = d7.path.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "").replace(/\*([^/]*)/g, (o5, d8) => `**:${d8}`);
      if (/:[^/]*\?/g.test(f5))
        throw new Error(`Optional parameters are not supported in API routes: ${f5}`);
      if (o4[f5])
        throw new Error(`Duplicate API routes for "${f5}" found at "${o4[f5].route.path}" and "${d7.path}"`);
      return o4[f5] = { route: d7 }, o4;
    }, {}) });
    Gt = () => getRequestEvent().routes;
    Xa = ["<a", ' href="/">Index</a>'];
    ec = ["<a", ' href="/protected">Protected</a>'];
    de2 = (o4) => {
      const d7 = getRequestEvent();
      return d7.response.status = o4.code, d7.response.statusText = o4.text, onCleanup(() => !d7.nativeEvent.handled && !d7.complete && (d7.response.status = 200)), null;
    };
    tc = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"];
    rc = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];
    Xt = (o4) => createComponent(ErrorBoundary, { fallback: (o5) => (console.error(o5), [ssr(tc, ssrHydrationKey(), escape("500 | Internal Server Error")), createComponent(de2, { code: 500 })]), get children() {
      return o4.children;
    } });
    Zt = (o4) => {
      let d7 = false;
      const f5 = catchError(() => o4.children, (o5) => {
        console.error(o5), d7 = !!o5;
      });
      return d7 ? [ssr(rc, ssrHydrationKey()), createComponent(de2, { code: 500 })] : f5;
    };
    sc = ["<script", ">", "<\/script>"];
    nc = ["<script", ' type="module"', " async", "><\/script>"];
    ic = ["<script", ' type="module" async', "><\/script>"];
    oc = ssr("<!DOCTYPE html>");
    ac = Symbol("$HTTPEvent");
    cc = g5(getRequestURL);
    lc = g5(getRequestIP);
    uc = g5(setResponseStatus);
    dc = g5(getResponseStatus);
    hc = g5(getResponseStatusText);
    fc = g5(getResponseHeaders);
    pc = g5(getResponseHeader);
    gc = g5(setResponseHeader);
    mc = g5(appendResponseHeader);
    yc = g5(sendRedirect);
    vc = g5(getCookie);
    bc = g5(setCookie);
    wc = g5(Or);
    Ec = g5(getRequestWebStream);
    xc = g5(removeResponseHeader);
    Sc = g5(function(o4) {
      return null != o4.web || (o4.web = { request: or(o4), url: cc(o4) }), o4.web.request;
    });
    _c = Symbol("fetchEvent");
    Sr = class {
      constructor(o4) {
        __publicField(this, "event"), this.event = o4;
      }
      get(o4) {
        const d7 = pc(this.event, o4);
        return Array.isArray(d7) ? d7.join(", ") : d7 || null;
      }
      has(o4) {
        return void 0 !== this.get(o4);
      }
      set(o4, d7) {
        return gc(this.event, o4, d7);
      }
      delete(o4) {
        return xc(this.event, o4);
      }
      append(o4, d7) {
        mc(this.event, o4, d7);
      }
      getSetCookie() {
        const o4 = pc(this.event, "Set-Cookie");
        return Array.isArray(o4) ? o4 : [o4];
      }
      forEach(o4) {
        return Object.entries(fc(this.event)).forEach(([d7, f5]) => o4(Array.isArray(f5) ? f5.join(", ") : f5, d7, this));
      }
      entries() {
        return Object.entries(fc(this.event)).map(([o4, d7]) => [o4, Array.isArray(d7) ? d7.join(", ") : d7])[Symbol.iterator]();
      }
      keys() {
        return Object.keys(fc(this.event))[Symbol.iterator]();
      }
      values() {
        return Object.values(fc(this.event)).map((o4) => Array.isArray(o4) ? o4.join(", ") : o4)[Symbol.iterator]();
      }
      [Symbol.iterator]() {
        return this.entries()[Symbol.iterator]();
      }
    };
    Ac = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    $c = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"];
    Rc = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
    kc = function(o4, d7) {
      return Ar(o4, Cr, d7);
    }(() => createComponent(nr, { document: ({ assets: o4, children: d7, scripts: f5 }) => ssr(Rc, ssrHydrationKey(), createComponent(NoHydration, { get children() {
      return ssr($c, escape(o4));
    } }), escape(d7), escape(f5)) }));
    Ic = [{ route: "/_server", handler: _a, lazy: false, middleware: true, method: void 0 }, { route: "/", handler: kc, lazy: false, middleware: true, method: void 0 }];
    zc = function() {
      const o4 = useRuntimeConfig(), d7 = new Hookable(), captureError = (o5, f6 = {}) => {
        const v7 = d7.callHookParallel("error", o5, f6).catch((o6) => {
          console.error("Error while capturing another error", o6);
        });
        if (f6.event && isEvent(f6.event)) {
          const d8 = f6.event.context.nitro?.errors;
          d8 && d8.push({ error: o5, context: f6 }), f6.event.waitUntil && f6.event.waitUntil(v7);
        }
      }, f5 = createApp({ debug: destr(false), onError: (o5, d8) => (captureError(o5, { event: d8, tags: ["request"] }), errorHandler(o5, d8)), onRequest: async (o5) => {
        await zc.hooks.callHook("request", o5).catch((d8) => {
          captureError(d8, { event: o5, tags: ["request"] });
        });
      }, onBeforeResponse: async (o5, d8) => {
        await zc.hooks.callHook("beforeResponse", o5, d8).catch((d9) => {
          captureError(d9, { event: o5, tags: ["request", "response"] });
        });
      }, onAfterResponse: async (o5, d8) => {
        await zc.hooks.callHook("afterResponse", o5, d8).catch((d9) => {
          captureError(d9, { event: o5, tags: ["request", "response"] });
        });
      } }), v6 = function(o5 = {}) {
        const d8 = createRouter$1({}), f6 = {};
        let v7;
        const b6 = {}, addRoute = (o6, v8, w8) => {
          let E5 = f6[o6];
          if (E5 || (f6[o6] = E5 = { path: o6, handlers: {} }, d8.insert(o6, E5)), Array.isArray(w8))
            for (const d9 of w8)
              addRoute(o6, v8, d9);
          else
            E5.handlers[w8] = toEventHandler(v8, 0, o6);
          return b6;
        };
        b6.use = b6.add = (o6, d9, f7) => addRoute(o6, d9, f7 || "all");
        for (const o6 of Nr)
          b6[o6] = (d9, f7) => b6.add(d9, f7, o6);
        const matchHandler = (o6 = "/", f7 = "get") => {
          const b7 = o6.indexOf("?");
          -1 !== b7 && (o6 = o6.slice(0, Math.max(0, b7)));
          const w8 = d8.lookup(o6);
          if (!w8 || !w8.handlers)
            return { error: createError({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${o6 || "/"}.` }) };
          let E5 = w8.handlers[f7] || w8.handlers.all;
          if (!E5) {
            v7 || (v7 = toRouteMatcher(d8));
            const b8 = v7.matchAll(o6).reverse();
            for (const o7 of b8) {
              if (o7.handlers[f7]) {
                E5 = o7.handlers[f7], w8.handlers[f7] = w8.handlers[f7] || E5;
                break;
              }
              if (o7.handlers.all) {
                E5 = o7.handlers.all, w8.handlers.all = w8.handlers.all || E5;
                break;
              }
            }
          }
          return E5 ? { matched: w8, handler: E5 } : { error: createError({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${f7} is not allowed on this route.` }) };
        }, w7 = o5.preemptive || o5.preemtive;
        return b6.handler = Ur((o6) => {
          const d9 = matchHandler(o6.path, o6.method.toLowerCase());
          if ("error" in d9) {
            if (w7)
              throw d9.error;
            return;
          }
          o6.context.matchedRoute = d9.matched;
          const f7 = d9.matched.params || {};
          return o6.context.params = f7, Promise.resolve(d9.handler(o6)).then((o7) => void 0 === o7 && w7 ? null : o7);
        }), b6.handler.__resolve__ = async (o6) => {
          o6 = function(o7 = "") {
            return function(o8 = "") {
              return o8.startsWith("/");
            }(o7) ? o7 : "/" + o7;
          }(o6);
          const d9 = matchHandler(o6);
          if ("error" in d9)
            return;
          let f7 = { route: d9.matched.path, handler: d9.handler };
          if (d9.handler.__resolve__) {
            const v8 = await d9.handler.__resolve__(o6);
            if (!v8)
              return;
            f7 = { ...f7, ...v8 };
          }
          return f7;
        }, b6;
      }({ preemptive: true }), b5 = (w6 = toNodeListener(f5), function(o5) {
        const d8 = new IncomingMessage(), f6 = new ServerResponse(d8);
        if (d8.url = o5.url || "/", d8.method = o5.method || "GET", d8.headers = {}, o5.headers) {
          const f7 = "function" == typeof o5.headers.entries ? o5.headers.entries() : Object.entries(o5.headers);
          for (const [o6, v7] of f7)
            v7 && (d8.headers[o6.toLowerCase()] = v7);
        }
        return d8.headers.host = d8.headers.host || o5.host || "localhost", d8.connection.encrypted = d8.connection.encrypted || "https" === o5.protocol, d8.body = o5.body || null, d8.__unenv__ = o5.context, w6(d8, f6).then(() => {
          let o6 = f6._data;
          (ds.has(f6.statusCode) || "HEAD" === d8.method.toUpperCase()) && (o6 = null, delete f6._headers["content-length"]);
          const v7 = { body: o6, headers: f6._headers, status: f6.statusCode, statusText: f6.statusMessage };
          return d8.destroy(), f6.destroy(), v7;
        });
      });
      var w6;
      const E4 = function(o5, d8 = global.fetch) {
        return async function(f6, v7) {
          const b6 = f6.toString();
          if (!b6.startsWith("/"))
            return d8(b6, v7);
          try {
            const d9 = await o5({ url: b6, ...v7 });
            return new Response(d9.body, { status: d9.status, statusText: d9.statusText, headers: Object.fromEntries(Object.entries(d9.headers).map(([o6, d10]) => [o6, Array.isArray(d10) ? d10.join(",") : String(d10) || ""])) });
          } catch (o6) {
            return new Response(o6.toString(), { status: Number.parseInt(o6.statusCode || o6.code) || 500, statusText: o6.statusText });
          }
        };
      }(b5, globalThis.fetch), localFetch = (o5, d8) => E4(o5, d8).then((o6) => function(o7) {
        if (!o7.headers.has("set-cookie"))
          return o7;
        return new Response(o7.body, { status: o7.status, statusText: o7.statusText, headers: normalizeCookieHeaders(o7.headers) });
      }(o6)), S6 = createFetch$1({ fetch: localFetch, Headers: ls, defaults: { baseURL: o4.app.baseURL } });
      globalThis.$fetch = S6, f5.use(createRouteRulesHandler({ localFetch })), f5.use(Ur((o5) => {
        o5.context.nitro = o5.context.nitro || { errors: [] };
        const d8 = o5.node.req?.__unenv__;
        d8 && Object.assign(o5.context, d8), o5.fetch = (d9, f6) => fetchWithEvent(o5, d9, f6, { fetch: localFetch }), o5.$fetch = (d9, f6) => fetchWithEvent(o5, d9, f6, { fetch: S6 }), o5.waitUntil = (f6) => {
          o5.context.nitro._waitUntilPromises || (o5.context.nitro._waitUntilPromises = []), o5.context.nitro._waitUntilPromises.push(f6), d8?.waitUntil && d8.waitUntil(f6);
        }, o5.captureError = (d9, f6) => {
          captureError(d9, { event: o5, ...f6 });
        };
      }));
      for (const d8 of Ic) {
        let b6 = d8.lazy ? lazyEventHandler(d8.handler) : d8.handler;
        if (d8.middleware || !d8.route) {
          const v7 = (o4.app.baseURL + (d8.route || "/")).replace(/\/+/g, "/");
          f5.use(v7, b6);
        } else {
          const o5 = getRouteRulesForPath(d8.route.replace(/:\w+|\*\*/g, "_"));
          o5.cache && (b6 = cachedEventHandler(b6, { group: "nitro/routes", ...o5.cache })), v6.use(d8.route, b6, d8.method);
        }
      }
      f5.use(o4.app.baseURL, v6.handler);
      {
        const o5 = f5.handler;
        f5.handler = (d8) => {
          const f6 = { event: d8 };
          return Ns.callAsync(f6, () => o5(d8));
        };
      }
      const _3 = { hooks: d7, h3App: f5, router: v6, localCall: b5, localFetch, captureError };
      for (const o5 of Js)
        try {
          o5(_3);
        } catch (o6) {
          throw captureError(o6, { tags: ["plugin"] }), o6;
        }
      return _3;
    }();
    useNitroApp = () => zc;
    jc = /post|put|patch/i;
    Tc = { "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"298-hdW7/pL89QptiszdYCHH67XxLxs"', mtime: "2024-09-20T03:21:16.249Z", size: 664, path: "../favicon.ico" }, "/_build/server-functions-manifest.json": { type: "application/json", etag: '"19-U+evudgPW1yE9kGumdxd/vtvk2s"', mtime: "2024-09-20T03:21:16.253Z", size: 25, path: "../_build/server-functions-manifest.json" }, "/assets/auth-5VKwSiTq.js": { type: "text/javascript; charset=utf-8", etag: '"1a8a-AMDuYCAQkziTqctsMXZqKumKE6g"', mtime: "2024-09-20T03:21:16.251Z", size: 6794, path: "../assets/auth-5VKwSiTq.js" }, "/assets/auth-5VKwSiTq.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"9cd-cqQL/drVKqE+GiOv54v1AEP/TaA"', mtime: "2024-09-20T03:21:16.281Z", size: 2509, path: "../assets/auth-5VKwSiTq.js.br" }, "/assets/auth-5VKwSiTq.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"b0f-ydvMQIox9ner/gpRpl4RXAj5xu4"', mtime: "2024-09-20T03:21:16.281Z", size: 2831, path: "../assets/auth-5VKwSiTq.js.gz" }, "/assets/client-CMZyFppd.js": { type: "text/javascript; charset=utf-8", etag: '"71c-k9QjaztfwK5fRCsV70uW6x0qjfU"', mtime: "2024-09-20T03:21:16.251Z", size: 1820, path: "../assets/client-CMZyFppd.js" }, "/assets/client-CMZyFppd.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"308-Bp8EaT4bON3CgcQEy+1qX3cJo4s"', mtime: "2024-09-20T03:21:16.281Z", size: 776, path: "../assets/client-CMZyFppd.js.br" }, "/assets/client-CMZyFppd.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"36f-nal+mZDjwcg4dHGPVi/im8K2eA0"', mtime: "2024-09-20T03:21:16.281Z", size: 879, path: "../assets/client-CMZyFppd.js.gz" }, "/assets/index-CrM3W-L8.js": { type: "text/javascript; charset=utf-8", etag: '"420-SsKk10dzXHykvR5tId0M/TRNo0c"', mtime: "2024-09-20T03:21:16.251Z", size: 1056, path: "../assets/index-CrM3W-L8.js" }, "/assets/index-CrM3W-L8.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"1f8-J0MK+KmOMUU4jYI/XxSYHnVyhWI"', mtime: "2024-09-20T03:21:16.281Z", size: 504, path: "../assets/index-CrM3W-L8.js.br" }, "/assets/index-CrM3W-L8.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"229-VGoVRc2gNUECINsFXOrtyK0O3oQ"', mtime: "2024-09-20T03:21:16.281Z", size: 553, path: "../assets/index-CrM3W-L8.js.gz" }, "/assets/routing-bDZhm0Q2.js": { type: "text/javascript; charset=utf-8", etag: '"1d35-MMYt+b5WRz0slrBoSfV0kDurpWk"', mtime: "2024-09-20T03:21:16.251Z", size: 7477, path: "../assets/routing-bDZhm0Q2.js" }, "/assets/routing-bDZhm0Q2.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"c7b-8ybku4puTc9YLnAZ+HQ3y4TwYpo"', mtime: "2024-09-20T03:21:16.281Z", size: 3195, path: "../assets/routing-bDZhm0Q2.js.br" }, "/assets/routing-bDZhm0Q2.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"dba-m+iaRtXVC9CJcgEC3SfAT7M/MPM"', mtime: "2024-09-20T03:21:16.281Z", size: 3514, path: "../assets/routing-bDZhm0Q2.js.gz" }, "/assets/ssr-BKBk4KIp.css": { type: "text/css; charset=utf-8", etag: '"2ba-xwJ3kqp8Z6mB1D4bmRBQswBpEl0"', mtime: "2024-09-20T03:21:16.251Z", size: 698, path: "../assets/ssr-BKBk4KIp.css" }, "/assets/utils-Cz4PRbC3.js": { type: "text/javascript; charset=utf-8", etag: '"4a1-+ti7J5vlSm26Zz7KXsktNIDJsZc"', mtime: "2024-09-20T03:21:16.251Z", size: 1185, path: "../assets/utils-Cz4PRbC3.js" }, "/assets/utils-Cz4PRbC3.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"283-fgqrtgB4PbT49Qa5x+Y4tVDzHkQ"', mtime: "2024-09-20T03:21:16.281Z", size: 643, path: "../assets/utils-Cz4PRbC3.js.br" }, "/assets/utils-Cz4PRbC3.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"2e1-oq0TYS8oL9/55MeZSUje9upQ1kY"', mtime: "2024-09-20T03:21:16.281Z", size: 737, path: "../assets/utils-Cz4PRbC3.js.gz" }, "/_build/.vite/manifest.json": { type: "application/json", etag: '"72c-+2fBTkhbWX+UJ/nKhXPDQq2PMv8"', mtime: "2024-09-20T03:21:16.253Z", size: 1836, path: "../_build/.vite/manifest.json" }, "/_build/.vite/manifest.json.br": { type: "application/json", encoding: "br", etag: '"168-8mCTLIzakuzM+WDs8aLFoL3gk4A"', mtime: "2024-09-20T03:21:16.281Z", size: 360, path: "../_build/.vite/manifest.json.br" }, "/_build/.vite/manifest.json.gz": { type: "application/json", encoding: "gzip", etag: '"19b-9MOSW3lQ5ySpN0XmHVoCgIRzbpI"', mtime: "2024-09-20T03:21:16.281Z", size: 411, path: "../_build/.vite/manifest.json.gz" }, "/_server/assets/app-BKBk4KIp.css": { type: "text/css; charset=utf-8", etag: '"2ba-xwJ3kqp8Z6mB1D4bmRBQswBpEl0"', mtime: "2024-09-20T03:21:16.255Z", size: 698, path: "../_server/assets/app-BKBk4KIp.css" }, "/_build/assets/_...404_-0fZBRhDp.js": { type: "text/javascript; charset=utf-8", etag: '"b7-bXaAuoXyEwjo+ax/IIG3+jNzCHM"', mtime: "2024-09-20T03:21:16.253Z", size: 183, path: "../_build/assets/_...404_-0fZBRhDp.js" }, "/_build/assets/client-BKBk4KIp.css": { type: "text/css; charset=utf-8", etag: '"2ba-xwJ3kqp8Z6mB1D4bmRBQswBpEl0"', mtime: "2024-09-20T03:21:16.253Z", size: 698, path: "../_build/assets/client-BKBk4KIp.css" }, "/_build/assets/client-C1GYr_Eu.js": { type: "text/javascript; charset=utf-8", etag: '"32c0-dwKhUYtT10ThvymrlwKoZbUHsRo"', mtime: "2024-09-20T03:21:16.253Z", size: 12992, path: "../_build/assets/client-C1GYr_Eu.js" }, "/_build/assets/client-C1GYr_Eu.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"131b-Nv7znbxb/KxwZTtOUoGiMdI8bc0"', mtime: "2024-09-20T03:21:16.282Z", size: 4891, path: "../_build/assets/client-C1GYr_Eu.js.br" }, "/_build/assets/client-C1GYr_Eu.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"1556-7QgnuZUc/clTRBvu8ulj80hDYE8"', mtime: "2024-09-20T03:21:16.281Z", size: 5462, path: "../_build/assets/client-C1GYr_Eu.js.gz" }, "/_build/assets/client-CcV6Y21W.js": { type: "text/javascript; charset=utf-8", etag: '"4416-ahWkHHO+Gozb9vVSYTr065Geslk"', mtime: "2024-09-20T03:21:16.253Z", size: 17430, path: "../_build/assets/client-CcV6Y21W.js" }, "/_build/assets/client-CcV6Y21W.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"1837-tYKu0fPwoykIw9rlj1FQIqtQIS4"', mtime: "2024-09-20T03:21:16.287Z", size: 6199, path: "../_build/assets/client-CcV6Y21W.js.br" }, "/_build/assets/client-CcV6Y21W.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"1aea-2H/FW4xjDoPqbyeSF3Ml+iRvTeE"', mtime: "2024-09-20T03:21:16.281Z", size: 6890, path: "../_build/assets/client-CcV6Y21W.js.gz" }, "/_build/assets/index-_FEB4ok9.js": { type: "text/javascript; charset=utf-8", etag: '"426-+DJRohuuLsXqm+mRbb+ECJ3BlHI"', mtime: "2024-09-20T03:21:16.253Z", size: 1062, path: "../_build/assets/index-_FEB4ok9.js" }, "/_build/assets/index-_FEB4ok9.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"229-D8OKSGW0bAF9p87p7Kb1d7gZ7go"', mtime: "2024-09-20T03:21:16.281Z", size: 553, path: "../_build/assets/index-_FEB4ok9.js.br" }, "/_build/assets/index-_FEB4ok9.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"265-ReoOrI1+LMvHIVbmexMo60gIHGY"', mtime: "2024-09-20T03:21:16.281Z", size: 613, path: "../_build/assets/index-_FEB4ok9.js.gz" }, "/_build/assets/protected-Ca01e5qM.js": { type: "text/javascript; charset=utf-8", etag: '"35d-6sb277TsEBle+JyrYBA6wsZSb0c"', mtime: "2024-09-20T03:21:16.253Z", size: 861, path: "../_build/assets/protected-Ca01e5qM.js" }, "/_build/assets/routing-tKwY40Eo.js": { type: "text/javascript; charset=utf-8", etag: '"1bae-pLgHZ7geznfDW5kUJWjN9cQndIY"', mtime: "2024-09-20T03:21:16.253Z", size: 7086, path: "../_build/assets/routing-tKwY40Eo.js" }, "/_build/assets/routing-tKwY40Eo.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"bf1-0UaUpGNtlJUkY017apvjig9CqUY"', mtime: "2024-09-20T03:21:16.281Z", size: 3057, path: "../_build/assets/routing-tKwY40Eo.js.br" }, "/_build/assets/routing-tKwY40Eo.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"d19-bclNSCtvozJt9heiBCsBf2eMYvc"', mtime: "2024-09-20T03:21:16.281Z", size: 3353, path: "../_build/assets/routing-tKwY40Eo.js.gz" }, "/_build/assets/web-Dhx91zgx.js": { type: "text/javascript; charset=utf-8", etag: '"57ea-ST9j7WRr3jicjDvSRNEjmzXi1l8"', mtime: "2024-09-20T03:21:16.253Z", size: 22506, path: "../_build/assets/web-Dhx91zgx.js" }, "/_build/assets/web-Dhx91zgx.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"1efe-XFQrpQ3d1c5LajTcMtNS0ZpakYE"', mtime: "2024-09-20T03:21:16.296Z", size: 7934, path: "../_build/assets/web-Dhx91zgx.js.br" }, "/_build/assets/web-Dhx91zgx.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"221a-SmkH9U2bpnyhvL4z/2JATmIgR9E"', mtime: "2024-09-20T03:21:16.282Z", size: 8730, path: "../_build/assets/web-Dhx91zgx.js.gz" } };
    Cc = {};
    Pc = { async fetch(o4, d7, f5) {
      const v6 = new URL(o4.url);
      if (d7.ASSETS && function(o5 = "") {
        if (Tc[o5])
          return true;
        for (const d8 in Cc)
          if (o5.startsWith(d8))
            return true;
        return false;
      }(v6.pathname))
        return d7.ASSETS.fetch(o4);
      let b5;
      return function(o5) {
        return jc.test(o5.method);
      }(o4) && (b5 = M.from(await o4.arrayBuffer())), globalThis.__env__ = d7, zc.localFetch(v6.pathname + v6.search, { context: { cf: o4.cf, waitUntil: (o5) => f5.waitUntil(o5), cloudflare: { request: o4, env: d7, context: f5 } }, host: v6.hostname, protocol: v6.protocol, method: o4.method, headers: o4.headers, body: b5 });
    }, scheduled(o4, d7, f5) {
    } };
  }
});

// .wrangler/tmp/bundle-1S1dzv/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-1S1dzv/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-9PkRin/jmnyaj5rreg.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-9PkRin/bundledWorker-0.8279507538354902.mjs
init_checked_fetch();
init_modules_watch_stub();
init_runtime();
import "node:async_hooks";
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };

// node_modules/wrangler/templates/pages-dev-util.ts
init_checked_fetch();
init_modules_watch_stub();
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-9PkRin/jmnyaj5rreg.js
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
        if (Pc.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return Pc.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-1S1dzv/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-1S1dzv/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init2) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init2.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init2) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init2.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=jmnyaj5rreg.js.map
