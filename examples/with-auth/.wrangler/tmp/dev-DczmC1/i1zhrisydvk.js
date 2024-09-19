var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// .wrangler/tmp/bundle-bZQs3V/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
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
  ".wrangler/tmp/bundle-bZQs3V/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
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

// ../../node_modules/.pnpm/wrangler@3.78.4/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../node_modules/.pnpm/wrangler@3.78.4/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// .wrangler/tmp/pages-7iUYXe/chunks/build/_...404_.mjs
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
  ".wrangler/tmp/pages-7iUYXe/chunks/build/_...404_.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    s = ["<main", ' class="w-full p-4 space-y-2"><h1 class="font-bold text-xl">Page Not Found</h1></main>'];
  }
});

// .wrangler/tmp/pages-7iUYXe/chunks/build/about.mjs
var about_exports = {};
__export(about_exports, {
  default: () => n2
});
import "node:async_hooks";
function n2() {
  return ssr(r, ssrHydrationKey());
}
var r;
var init_about = __esm({
  ".wrangler/tmp/pages-7iUYXe/chunks/build/about.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    r = ["<main", "><h1>About page</h1></main>"];
  }
});

// .wrangler/tmp/pages-7iUYXe/chunks/build/index.mjs
var build_exports = {};
__export(build_exports, {
  default: () => j
});
import "node:async_hooks";
function j() {
  const c2 = function(t, o) {
    let e, s4 = () => e && "unresolved" !== e.state ? e.latest : void 0;
    return [e] = createResource(() => function(t2, o2) {
      return t2(o2);
    }(t, Yr(s4)), (t2) => t2, o), () => e();
  }(() => Vi(), { deferStream: true });
  return ssr(m, ssrHydrationKey(), escape(c2()?.username), ssrAttribute("action", escape(Zi, true), false));
}
var m;
var init_build = __esm({
  ".wrangler/tmp/pages-7iUYXe/chunks/build/index.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    m = ["<main", ' class="w-full p-4 space-y-2"><h2 class="font-bold text-3xl">Hello <!--$-->', '<!--/--></h2><h3 class="font-bold text-xl">Message board</h3><form', ' method="post"><button name="logout" type="submit">Logout</button></form></main>'];
  }
});

// .wrangler/tmp/pages-7iUYXe/chunks/build/login.mjs
var login_exports = {};
__export(login_exports, {
  default: () => w
});
import "node:async_hooks";
function w(p2) {
  const u2 = Un$1(Ki);
  return ssr(d, ssrHydrationKey(), ssrAttribute("action", escape(Ki, true), false), ssrAttribute("value", escape(p2.params.redirectTo, true) ?? "/", false), escape(createComponent(Show, { get when() {
    return u2.result;
  }, get children() {
    return ssr(l, ssrHydrationKey(), "color:red", escape(u2.result.message));
  } })));
}
var l, d;
var init_login = __esm({
  ".wrangler/tmp/pages-7iUYXe/chunks/build/login.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    l = ["<p", ' style="', '" role="alert" id="error-message">', "</p>"];
    d = ["<main", "><h1>Login</h1><form", ' method="post"><input type="hidden" name="redirectTo"', '><fieldset><legend>Login or Register?</legend><label><input type="radio" name="loginType" value="login" checked=""> Login</label><label><input type="radio" name="loginType" value="register"> Register</label></fieldset><div><label for="username-input">Username</label><input name="username" placeholder="kody"></div><div><label for="password-input">Password</label><input name="password" type="password" placeholder="twixrox"></div><button type="submit">Login</button><!--$-->', "<!--/--></form></main>"];
  }
});

// .wrangler/tmp/pages-7iUYXe/chunks/build/app.mjs
var app_exports = {};
__export(app_exports, {
  default: () => Et
});
import "node:async_hooks";
function nt(r3) {
  const e = r3.routerState.location, a = r3.routerState.params, n5 = createMemo(() => r3.preload && Yr(() => {
    Ln$1(true), r3.preload({ params: a, location: e, intent: Gt$2() || "initial" }), Ln$1(false);
  }));
  return createComponent(Show, { get when() {
    return r3.root;
  }, keyed: true, get fallback() {
    return r3.children;
  }, children: (o) => createComponent(o, { params: a, location: e, get data() {
    return n5();
  }, get children() {
    return r3.children;
  } }) });
}
function rt(t) {
  {
    const r4 = getRequestEvent();
    if (r4 && r4.router && r4.router.dataOnly)
      return void function(t2, r5, e2) {
        const a2 = new URL(t2.request.url), n5 = J$3(e2, new URL(t2.router.previousUrl || t2.request.url).pathname), o = J$3(e2, a2.pathname);
        for (let e3 = 0; e3 < o.length; e3++) {
          (!n5[e3] || o[e3].route !== n5[e3].route) && (t2.router.dataOnly = true);
          const { route: a3, params: s4 } = o[e3];
          a3.preload && a3.preload({ params: s4, location: r5.location, intent: "preload" });
        }
      }(r4, t.routerState, t.branches);
    r4 && ((r4.router || (r4.router = {})).matches || (r4.router.matches = t.routerState.matches().map(({ route: t2, path: r5, params: e2 }) => ({ path: t2.originalPath, pattern: t2.pattern, match: r5, params: e2, info: t2.info }))));
  }
  const r3 = [];
  let e;
  const a = createMemo(on$2(t.routerState.matches, (n5, o, s4) => {
    let u2 = o && n5.length === o.length;
    const l3 = [];
    for (let e2 = 0, c2 = n5.length; e2 < c2; e2++) {
      const c3 = o && o[e2], i2 = n5[e2];
      s4 && c3 && i2.route.key === c3.route.key ? l3[e2] = s4[e2] : (u2 = false, r3[e2] && r3[e2](), createRoot((n6) => {
        r3[e2] = n6, l3[e2] = In$1(t.routerState, l3[e2 - 1] || t.routerState.base, C(() => a()[e2 + 1]), () => t.routerState.matches()[e2]);
      }));
    }
    return r3.splice(n5.length).forEach((t2) => t2()), s4 && u2 ? s4 : (e = l3[0], l3);
  }));
  return C(() => a() && e)();
}
function ht(t) {
  let r3;
  const e = t.url || (r3 = getRequestEvent()) && function(t2) {
    const r4 = new URL(t2);
    return r4.pathname + r4.search;
  }(r3.request.url) || "", a = { value: t.transformUrl ? t.transformUrl(e) : e };
  return D({ signal: [() => a, (t2) => Object.assign(a, t2)] })(t);
}
function ft(t) {
  return ht(t);
}
function Et() {
  return createComponent(ft, { root: (n5) => [ssr(y, ssrHydrationKey()), ssr(k, ssrHydrationKey()), createComponent(Suspense, { get children() {
    return n5.children;
  } })], get children() {
    return createComponent(di, {});
  } });
}
var D, C, y, k;
var init_app = __esm({
  ".wrangler/tmp/pages-7iUYXe/chunks/build/app.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    D = (r3) => (e) => {
      const { base: a } = e, n5 = children(() => e.children), o = createMemo(() => Xt$2(n5(), e.base || ""));
      let d3;
      const m4 = qn$1(r3, o, () => d3, { base: a, singleFlight: e.singleFlight, transformUrl: e.transformUrl });
      return r3.create && r3.create(m4), createComponent(Oi.Provider, { value: m4, get children() {
        return createComponent(nt, { routerState: m4, get root() {
          return e.root;
        }, get preload() {
          return e.rootPreload || e.rootLoad;
        }, get children() {
          return [(d3 = getOwner()) && null, createComponent(rt, { routerState: m4, get branches() {
            return o();
          } })];
        } });
      } });
    };
    C = (r3) => () => createComponent(Show, { get when() {
      return r3();
    }, keyed: true, children: (r4) => createComponent(Bi.Provider, { value: r4, get children() {
      return r4.outlet();
    } }) });
    y = ["<a", ' href="/">Index</a>'];
    k = ["<a", ' href="/about">About</a>'];
  }
});

// .wrangler/tmp/pages-7iUYXe/chunks/build/_...404_2.mjs
var __exports2 = {};
__export(__exports2, {
  default: () => n3
});
import "node:async_hooks";
function n3() {
  return ssr(s2, ssrHydrationKey());
}
var s2;
var init__2 = __esm({
  ".wrangler/tmp/pages-7iUYXe/chunks/build/_...404_2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    s2 = ["<main", ' class="w-full p-4 space-y-2"><h1 class="font-bold text-xl">Page Not Found</h1></main>'];
  }
});

// .wrangler/tmp/pages-7iUYXe/chunks/build/about2.mjs
var about2_exports = {};
__export(about2_exports, {
  default: () => n4
});
import "node:async_hooks";
function n4() {
  return ssr(r2, ssrHydrationKey());
}
var r2;
var init_about2 = __esm({
  ".wrangler/tmp/pages-7iUYXe/chunks/build/about2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    r2 = ["<main", "><h1>About page</h1></main>"];
  }
});

// .wrangler/tmp/pages-7iUYXe/chunks/build/index2.mjs
var index2_exports = {};
__export(index2_exports, {
  default: () => $
});
import "node:async_hooks";
function $() {
  var c2;
  const i2 = function(t, o) {
    let e, s4 = () => e && "unresolved" !== e.state ? e.latest : void 0;
    return [e] = createResource(() => function(t2, o2) {
      return t2(o2);
    }(t, Yr(s4)), (t2) => t2, o), () => e();
  }(() => fc(), { deferStream: true });
  return ssr(m2, ssrHydrationKey(), escape(null == (c2 = i2()) ? void 0 : c2.username), ssrAttribute("action", escape(hc, true), false));
}
var m2;
var init_index2 = __esm({
  ".wrangler/tmp/pages-7iUYXe/chunks/build/index2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    m2 = ["<main", ' class="w-full p-4 space-y-2"><h2 class="font-bold text-3xl">Hello <!--$-->', '<!--/--></h2><h3 class="font-bold text-xl">Message board</h3><form', ' method="post"><button name="logout" type="submit">Logout</button></form></main>'];
  }
});

// .wrangler/tmp/pages-7iUYXe/chunks/build/login2.mjs
var login2_exports = {};
__export(login2_exports, {
  default: () => w2
});
import "node:async_hooks";
function w2(p2) {
  var u2;
  const m4 = On(dc);
  return ssr(d2, ssrHydrationKey(), ssrAttribute("action", escape(dc, true), false), ssrAttribute("value", null != (u2 = escape(p2.params.redirectTo, true)) ? u2 : "/", false), escape(createComponent(Show, { get when() {
    return m4.result;
  }, get children() {
    return ssr(i, ssrHydrationKey(), "color:red", escape(m4.result.message));
  } })));
}
var i, d2;
var init_login2 = __esm({
  ".wrangler/tmp/pages-7iUYXe/chunks/build/login2.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    i = ["<p", ' style="', '" role="alert" id="error-message">', "</p>"];
    d2 = ["<main", "><h1>Login</h1><form", ' method="post"><input type="hidden" name="redirectTo"', '><fieldset><legend>Login or Register?</legend><label><input type="radio" name="loginType" value="login" checked=""> Login</label><label><input type="radio" name="loginType" value="register"> Register</label></fieldset><div><label for="username-input">Username</label><input name="username" placeholder="kody"></div><div><label for="password-input">Password</label><input name="password" type="password" placeholder="twixrox"></div><button type="submit">Login</button><!--$-->', "<!--/--></form></main>"];
  }
});

// .wrangler/tmp/pages-7iUYXe/chunks/runtime.mjs
import { AsyncLocalStorage as s3 } from "node:async_hooks";
function createNotImplementedError(s4) {
  throw new Error(`[unenv] ${s4} is not implemented yet!`);
}
function notImplemented(s4) {
  return Object.assign(() => {
    throw createNotImplementedError(s4);
  }, { __unenv__: true });
}
function toByteArray(s4) {
  let l3;
  const b2 = function(s5) {
    const l4 = s5.length;
    if (l4 % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    let h2 = s5.indexOf("=");
    return -1 === h2 && (h2 = l4), [h2, h2 === l4 ? 0 : 4 - h2 % 4];
  }(s4), w4 = b2[0], S2 = b2[1], E2 = new y2(function(s5, l4, h2) {
    return 3 * (l4 + h2) / 4 - h2;
  }(0, w4, S2));
  let $3 = 0;
  const T2 = S2 > 0 ? w4 - 4 : w4;
  let O2;
  for (O2 = 0; O2 < T2; O2 += 4)
    l3 = h[s4.charCodeAt(O2)] << 18 | h[s4.charCodeAt(O2 + 1)] << 12 | h[s4.charCodeAt(O2 + 2)] << 6 | h[s4.charCodeAt(O2 + 3)], E2[$3++] = l3 >> 16 & 255, E2[$3++] = l3 >> 8 & 255, E2[$3++] = 255 & l3;
  return 2 === S2 && (l3 = h[s4.charCodeAt(O2)] << 2 | h[s4.charCodeAt(O2 + 1)] >> 4, E2[$3++] = 255 & l3), 1 === S2 && (l3 = h[s4.charCodeAt(O2)] << 10 | h[s4.charCodeAt(O2 + 1)] << 4 | h[s4.charCodeAt(O2 + 2)] >> 2, E2[$3++] = l3 >> 8 & 255, E2[$3++] = 255 & l3), E2;
}
function encodeChunk(s4, h2, y3) {
  let b2;
  const w4 = [];
  for (let E2 = h2; E2 < y3; E2 += 3)
    b2 = (s4[E2] << 16 & 16711680) + (s4[E2 + 1] << 8 & 65280) + (255 & s4[E2 + 2]), w4.push(l2[(S2 = b2) >> 18 & 63] + l2[S2 >> 12 & 63] + l2[S2 >> 6 & 63] + l2[63 & S2]);
  var S2;
  return w4.join("");
}
function fromByteArray(s4) {
  let h2;
  const y3 = s4.length, b2 = y3 % 3, w4 = [], S2 = 16383;
  for (let l3 = 0, h3 = y3 - b2; l3 < h3; l3 += S2)
    w4.push(encodeChunk(s4, l3, l3 + S2 > h3 ? h3 : l3 + S2));
  return 1 === b2 ? (h2 = s4[y3 - 1], w4.push(l2[h2 >> 2] + l2[h2 << 4 & 63] + "==")) : 2 === b2 && (h2 = (s4[y3 - 2] << 8) + s4[y3 - 1], w4.push(l2[h2 >> 10] + l2[h2 >> 4 & 63] + l2[h2 << 2 & 63] + "=")), w4.join("");
}
function read(s4, l3, h2, y3, b2) {
  let w4, S2;
  const E2 = 8 * b2 - y3 - 1, $3 = (1 << E2) - 1, T2 = $3 >> 1;
  let O2 = -7, B2 = h2 ? b2 - 1 : 0;
  const F2 = h2 ? -1 : 1;
  let L2 = s4[l3 + B2];
  for (B2 += F2, w4 = L2 & (1 << -O2) - 1, L2 >>= -O2, O2 += E2; O2 > 0; )
    w4 = 256 * w4 + s4[l3 + B2], B2 += F2, O2 -= 8;
  for (S2 = w4 & (1 << -O2) - 1, w4 >>= -O2, O2 += y3; O2 > 0; )
    S2 = 256 * S2 + s4[l3 + B2], B2 += F2, O2 -= 8;
  if (0 === w4)
    w4 = 1 - T2;
  else {
    if (w4 === $3)
      return S2 ? Number.NaN : (L2 ? -1 : 1) * Number.POSITIVE_INFINITY;
    S2 += Math.pow(2, y3), w4 -= T2;
  }
  return (L2 ? -1 : 1) * S2 * Math.pow(2, w4 - y3);
}
function write(s4, l3, h2, y3, b2, w4) {
  let S2, E2, $3, T2 = 8 * w4 - b2 - 1;
  const O2 = (1 << T2) - 1, B2 = O2 >> 1, F2 = 23 === b2 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  let L2 = y3 ? 0 : w4 - 1;
  const U2 = y3 ? 1 : -1, D3 = l3 < 0 || 0 === l3 && 1 / l3 < 0 ? 1 : 0;
  for (l3 = Math.abs(l3), Number.isNaN(l3) || l3 === Number.POSITIVE_INFINITY ? (E2 = Number.isNaN(l3) ? 1 : 0, S2 = O2) : (S2 = Math.floor(Math.log2(l3)), l3 * ($3 = Math.pow(2, -S2)) < 1 && (S2--, $3 *= 2), (l3 += S2 + B2 >= 1 ? F2 / $3 : F2 * Math.pow(2, 1 - B2)) * $3 >= 2 && (S2++, $3 /= 2), S2 + B2 >= O2 ? (E2 = 0, S2 = O2) : S2 + B2 >= 1 ? (E2 = (l3 * $3 - 1) * Math.pow(2, b2), S2 += B2) : (E2 = l3 * Math.pow(2, B2 - 1) * Math.pow(2, b2), S2 = 0)); b2 >= 8; )
    s4[h2 + L2] = 255 & E2, L2 += U2, E2 /= 256, b2 -= 8;
  for (S2 = S2 << b2 | E2, T2 += b2; T2 > 0; )
    s4[h2 + L2] = 255 & S2, L2 += U2, S2 /= 256, T2 -= 8;
  s4[h2 + L2 - U2] |= 128 * D3;
}
function createBuffer(s4) {
  if (s4 > S)
    throw new RangeError('The value "' + s4 + '" is invalid for option "size"');
  const l3 = new Uint8Array(s4);
  return Object.setPrototypeOf(l3, Buffer$1.prototype), l3;
}
function Buffer$1(s4, l3, h2) {
  if ("number" == typeof s4) {
    if ("string" == typeof l3)
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return allocUnsafe(s4);
  }
  return from(s4, l3, h2);
}
function from(s4, l3, h2) {
  if ("string" == typeof s4)
    return function(s5, l4) {
      "string" == typeof l4 && "" !== l4 || (l4 = "utf8");
      if (!Buffer$1.isEncoding(l4))
        throw new TypeError("Unknown encoding: " + l4);
      const h3 = 0 | byteLength(s5, l4);
      let y4 = createBuffer(h3);
      const b3 = y4.write(s5, l4);
      b3 !== h3 && (y4 = y4.slice(0, b3));
      return y4;
    }(s4, l3);
  if (ArrayBuffer.isView(s4))
    return function(s5) {
      if (isInstance(s5, Uint8Array)) {
        const l4 = new Uint8Array(s5);
        return fromArrayBuffer(l4.buffer, l4.byteOffset, l4.byteLength);
      }
      return fromArrayLike(s5);
    }(s4);
  if (null == s4)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof s4);
  if (isInstance(s4, ArrayBuffer) || s4 && isInstance(s4.buffer, ArrayBuffer))
    return fromArrayBuffer(s4, l3, h2);
  if ("undefined" != typeof SharedArrayBuffer && (isInstance(s4, SharedArrayBuffer) || s4 && isInstance(s4.buffer, SharedArrayBuffer)))
    return fromArrayBuffer(s4, l3, h2);
  if ("number" == typeof s4)
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  const y3 = s4.valueOf && s4.valueOf();
  if (null != y3 && y3 !== s4)
    return Buffer$1.from(y3, l3, h2);
  const b2 = function(s5) {
    if (Buffer$1.isBuffer(s5)) {
      const l4 = 0 | checked(s5.length), h3 = createBuffer(l4);
      return 0 === h3.length || s5.copy(h3, 0, 0, l4), h3;
    }
    if (void 0 !== s5.length)
      return "number" != typeof s5.length || numberIsNaN(s5.length) ? createBuffer(0) : fromArrayLike(s5);
    if ("Buffer" === s5.type && Array.isArray(s5.data))
      return fromArrayLike(s5.data);
  }(s4);
  if (b2)
    return b2;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof s4[Symbol.toPrimitive])
    return Buffer$1.from(s4[Symbol.toPrimitive]("string"), l3, h2);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof s4);
}
function assertSize(s4) {
  if ("number" != typeof s4)
    throw new TypeError('"size" argument must be of type number');
  if (s4 < 0)
    throw new RangeError('The value "' + s4 + '" is invalid for option "size"');
}
function allocUnsafe(s4) {
  return assertSize(s4), createBuffer(s4 < 0 ? 0 : 0 | checked(s4));
}
function fromArrayLike(s4) {
  const l3 = s4.length < 0 ? 0 : 0 | checked(s4.length), h2 = createBuffer(l3);
  for (let y3 = 0; y3 < l3; y3 += 1)
    h2[y3] = 255 & s4[y3];
  return h2;
}
function fromArrayBuffer(s4, l3, h2) {
  if (l3 < 0 || s4.byteLength < l3)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (s4.byteLength < l3 + (h2 || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  let y3;
  return y3 = void 0 === l3 && void 0 === h2 ? new Uint8Array(s4) : void 0 === h2 ? new Uint8Array(s4, l3) : new Uint8Array(s4, l3, h2), Object.setPrototypeOf(y3, Buffer$1.prototype), y3;
}
function checked(s4) {
  if (s4 >= S)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + S.toString(16) + " bytes");
  return 0 | s4;
}
function byteLength(s4, l3) {
  if (Buffer$1.isBuffer(s4))
    return s4.length;
  if (ArrayBuffer.isView(s4) || isInstance(s4, ArrayBuffer))
    return s4.byteLength;
  if ("string" != typeof s4)
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof s4);
  const h2 = s4.length, y3 = arguments.length > 2 && true === arguments[2];
  if (!y3 && 0 === h2)
    return 0;
  let b2 = false;
  for (; ; )
    switch (l3) {
      case "ascii":
      case "latin1":
      case "binary":
        return h2;
      case "utf8":
      case "utf-8":
        return utf8ToBytes(s4).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * h2;
      case "hex":
        return h2 >>> 1;
      case "base64":
        return base64ToBytes(s4).length;
      default:
        if (b2)
          return y3 ? -1 : utf8ToBytes(s4).length;
        l3 = ("" + l3).toLowerCase(), b2 = true;
    }
}
function slowToString(s4, l3, h2) {
  let y3 = false;
  if ((void 0 === l3 || l3 < 0) && (l3 = 0), l3 > this.length)
    return "";
  if ((void 0 === h2 || h2 > this.length) && (h2 = this.length), h2 <= 0)
    return "";
  if ((h2 >>>= 0) <= (l3 >>>= 0))
    return "";
  for (s4 || (s4 = "utf8"); ; )
    switch (s4) {
      case "hex":
        return hexSlice(this, l3, h2);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, l3, h2);
      case "ascii":
        return asciiSlice(this, l3, h2);
      case "latin1":
      case "binary":
        return latin1Slice(this, l3, h2);
      case "base64":
        return base64Slice(this, l3, h2);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, l3, h2);
      default:
        if (y3)
          throw new TypeError("Unknown encoding: " + s4);
        s4 = (s4 + "").toLowerCase(), y3 = true;
    }
}
function swap(s4, l3, h2) {
  const y3 = s4[l3];
  s4[l3] = s4[h2], s4[h2] = y3;
}
function bidirectionalIndexOf(s4, l3, h2, y3, b2) {
  if (0 === s4.length)
    return -1;
  if ("string" == typeof h2 ? (y3 = h2, h2 = 0) : h2 > 2147483647 ? h2 = 2147483647 : h2 < -2147483648 && (h2 = -2147483648), numberIsNaN(h2 = +h2) && (h2 = b2 ? 0 : s4.length - 1), h2 < 0 && (h2 = s4.length + h2), h2 >= s4.length) {
    if (b2)
      return -1;
    h2 = s4.length - 1;
  } else if (h2 < 0) {
    if (!b2)
      return -1;
    h2 = 0;
  }
  if ("string" == typeof l3 && (l3 = Buffer$1.from(l3, y3)), Buffer$1.isBuffer(l3))
    return 0 === l3.length ? -1 : arrayIndexOf(s4, l3, h2, y3, b2);
  if ("number" == typeof l3)
    return l3 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? b2 ? Uint8Array.prototype.indexOf.call(s4, l3, h2) : Uint8Array.prototype.lastIndexOf.call(s4, l3, h2) : arrayIndexOf(s4, [l3], h2, y3, b2);
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(s4, l3, h2, y3, b2) {
  let w4, S2 = 1, E2 = s4.length, $3 = l3.length;
  if (void 0 !== y3 && ("ucs2" === (y3 = String(y3).toLowerCase()) || "ucs-2" === y3 || "utf16le" === y3 || "utf-16le" === y3)) {
    if (s4.length < 2 || l3.length < 2)
      return -1;
    S2 = 2, E2 /= 2, $3 /= 2, h2 /= 2;
  }
  function read2(s5, l4) {
    return 1 === S2 ? s5[l4] : s5.readUInt16BE(l4 * S2);
  }
  if (b2) {
    let y4 = -1;
    for (w4 = h2; w4 < E2; w4++)
      if (read2(s4, w4) === read2(l3, -1 === y4 ? 0 : w4 - y4)) {
        if (-1 === y4 && (y4 = w4), w4 - y4 + 1 === $3)
          return y4 * S2;
      } else
        -1 !== y4 && (w4 -= w4 - y4), y4 = -1;
  } else
    for (h2 + $3 > E2 && (h2 = E2 - $3), w4 = h2; w4 >= 0; w4--) {
      let h3 = true;
      for (let y4 = 0; y4 < $3; y4++)
        if (read2(s4, w4 + y4) !== read2(l3, y4)) {
          h3 = false;
          break;
        }
      if (h3)
        return w4;
    }
  return -1;
}
function hexWrite(s4, l3, h2, y3) {
  h2 = Number(h2) || 0;
  const b2 = s4.length - h2;
  y3 ? (y3 = Number(y3)) > b2 && (y3 = b2) : y3 = b2;
  const w4 = l3.length;
  let S2;
  for (y3 > w4 / 2 && (y3 = w4 / 2), S2 = 0; S2 < y3; ++S2) {
    const y4 = Number.parseInt(l3.slice(2 * S2, 2 * S2 + 2), 16);
    if (numberIsNaN(y4))
      return S2;
    s4[h2 + S2] = y4;
  }
  return S2;
}
function utf8Write(s4, l3, h2, y3) {
  return blitBuffer(utf8ToBytes(l3, s4.length - h2), s4, h2, y3);
}
function asciiWrite(s4, l3, h2, y3) {
  return blitBuffer(function(s5) {
    const l4 = [];
    for (let h3 = 0; h3 < s5.length; ++h3)
      l4.push(255 & s5.charCodeAt(h3));
    return l4;
  }(l3), s4, h2, y3);
}
function base64Write(s4, l3, h2, y3) {
  return blitBuffer(base64ToBytes(l3), s4, h2, y3);
}
function ucs2Write(s4, l3, h2, y3) {
  return blitBuffer(function(s5, l4) {
    let h3, y4, b2;
    const w4 = [];
    for (let S2 = 0; S2 < s5.length && !((l4 -= 2) < 0); ++S2)
      h3 = s5.charCodeAt(S2), y4 = h3 >> 8, b2 = h3 % 256, w4.push(b2, y4);
    return w4;
  }(l3, s4.length - h2), s4, h2, y3);
}
function base64Slice(s4, l3, h2) {
  return 0 === l3 && h2 === s4.length ? fromByteArray(s4) : fromByteArray(s4.slice(l3, h2));
}
function utf8Slice(s4, l3, h2) {
  h2 = Math.min(s4.length, h2);
  const y3 = [];
  let b2 = l3;
  for (; b2 < h2; ) {
    const l4 = s4[b2];
    let w4 = null, S2 = l4 > 239 ? 4 : l4 > 223 ? 3 : l4 > 191 ? 2 : 1;
    if (b2 + S2 <= h2) {
      let h3, y4, E2, $3;
      switch (S2) {
        case 1:
          l4 < 128 && (w4 = l4);
          break;
        case 2:
          h3 = s4[b2 + 1], 128 == (192 & h3) && ($3 = (31 & l4) << 6 | 63 & h3, $3 > 127 && (w4 = $3));
          break;
        case 3:
          h3 = s4[b2 + 1], y4 = s4[b2 + 2], 128 == (192 & h3) && 128 == (192 & y4) && ($3 = (15 & l4) << 12 | (63 & h3) << 6 | 63 & y4, $3 > 2047 && ($3 < 55296 || $3 > 57343) && (w4 = $3));
          break;
        case 4:
          h3 = s4[b2 + 1], y4 = s4[b2 + 2], E2 = s4[b2 + 3], 128 == (192 & h3) && 128 == (192 & y4) && 128 == (192 & E2) && ($3 = (15 & l4) << 18 | (63 & h3) << 12 | (63 & y4) << 6 | 63 & E2, $3 > 65535 && $3 < 1114112 && (w4 = $3));
      }
    }
    null === w4 ? (w4 = 65533, S2 = 1) : w4 > 65535 && (w4 -= 65536, y3.push(w4 >>> 10 & 1023 | 55296), w4 = 56320 | 1023 & w4), y3.push(w4), b2 += S2;
  }
  return function(s5) {
    const l4 = s5.length;
    if (l4 <= E)
      return String.fromCharCode.apply(String, s5);
    let h3 = "", y4 = 0;
    for (; y4 < l4; )
      h3 += String.fromCharCode.apply(String, s5.slice(y4, y4 += E));
    return h3;
  }(y3);
}
function asciiSlice(s4, l3, h2) {
  let y3 = "";
  h2 = Math.min(s4.length, h2);
  for (let b2 = l3; b2 < h2; ++b2)
    y3 += String.fromCharCode(127 & s4[b2]);
  return y3;
}
function latin1Slice(s4, l3, h2) {
  let y3 = "";
  h2 = Math.min(s4.length, h2);
  for (let b2 = l3; b2 < h2; ++b2)
    y3 += String.fromCharCode(s4[b2]);
  return y3;
}
function hexSlice(s4, l3, h2) {
  const y3 = s4.length;
  (!l3 || l3 < 0) && (l3 = 0), (!h2 || h2 < 0 || h2 > y3) && (h2 = y3);
  let b2 = "";
  for (let y4 = l3; y4 < h2; ++y4)
    b2 += O[s4[y4]];
  return b2;
}
function utf16leSlice(s4, l3, h2) {
  const y3 = s4.slice(l3, h2);
  let b2 = "";
  for (let s5 = 0; s5 < y3.length - 1; s5 += 2)
    b2 += String.fromCharCode(y3[s5] + 256 * y3[s5 + 1]);
  return b2;
}
function checkOffset(s4, l3, h2) {
  if (s4 % 1 != 0 || s4 < 0)
    throw new RangeError("offset is not uint");
  if (s4 + l3 > h2)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(s4, l3, h2, y3, b2, w4) {
  if (!Buffer$1.isBuffer(s4))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (l3 > b2 || l3 < w4)
    throw new RangeError('"value" argument is out of bounds');
  if (h2 + y3 > s4.length)
    throw new RangeError("Index out of range");
}
function wrtBigUInt64LE(s4, l3, h2, y3, b2) {
  checkIntBI(l3, y3, b2, s4, h2, 7);
  let w4 = Number(l3 & BigInt(4294967295));
  s4[h2++] = w4, w4 >>= 8, s4[h2++] = w4, w4 >>= 8, s4[h2++] = w4, w4 >>= 8, s4[h2++] = w4;
  let S2 = Number(l3 >> BigInt(32) & BigInt(4294967295));
  return s4[h2++] = S2, S2 >>= 8, s4[h2++] = S2, S2 >>= 8, s4[h2++] = S2, S2 >>= 8, s4[h2++] = S2, h2;
}
function wrtBigUInt64BE(s4, l3, h2, y3, b2) {
  checkIntBI(l3, y3, b2, s4, h2, 7);
  let w4 = Number(l3 & BigInt(4294967295));
  s4[h2 + 7] = w4, w4 >>= 8, s4[h2 + 6] = w4, w4 >>= 8, s4[h2 + 5] = w4, w4 >>= 8, s4[h2 + 4] = w4;
  let S2 = Number(l3 >> BigInt(32) & BigInt(4294967295));
  return s4[h2 + 3] = S2, S2 >>= 8, s4[h2 + 2] = S2, S2 >>= 8, s4[h2 + 1] = S2, S2 >>= 8, s4[h2] = S2, h2 + 8;
}
function checkIEEE754(s4, l3, h2, y3, b2, w4) {
  if (h2 + y3 > s4.length)
    throw new RangeError("Index out of range");
  if (h2 < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(s4, l3, h2, y3, b2) {
  return l3 = +l3, h2 >>>= 0, b2 || checkIEEE754(s4, 0, h2, 4), write(s4, l3, h2, y3, 23, 4), h2 + 4;
}
function writeDouble(s4, l3, h2, y3, b2) {
  return l3 = +l3, h2 >>>= 0, b2 || checkIEEE754(s4, 0, h2, 8), write(s4, l3, h2, y3, 52, 8), h2 + 8;
}
function E$2(s4, l3, h2) {
  $2[s4] = class extends h2 {
    constructor() {
      super(), Object.defineProperty(this, "message", { value: Reflect.apply(l3, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${s4}]`, this.stack, delete this.name;
    }
    get code() {
      return s4;
    }
    set code(s5) {
      Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: s5, writable: true });
    }
    toString() {
      return `${this.name} [${s4}]: ${this.message}`;
    }
  };
}
function addNumericalSeparator(s4) {
  let l3 = "", h2 = s4.length;
  const y3 = "-" === s4[0] ? 1 : 0;
  for (; h2 >= y3 + 4; h2 -= 3)
    l3 = `_${s4.slice(h2 - 3, h2)}${l3}`;
  return `${s4.slice(0, h2)}${l3}`;
}
function checkIntBI(s4, l3, h2, y3, b2, w4) {
  if (s4 > h2 || s4 < l3) {
    const h3 = "bigint" == typeof l3 ? "n" : "";
    let y4;
    throw y4 = 0 === l3 || l3 === BigInt(0) ? `>= 0${h3} and < 2${h3} ** ${8 * (w4 + 1)}${h3}` : `>= -(2${h3} ** ${8 * (w4 + 1) - 1}${h3}) and < 2 ** ${8 * (w4 + 1) - 1}${h3}`, new $2.ERR_OUT_OF_RANGE("value", y4, s4);
  }
  !function(s5, l4, h3) {
    validateNumber(l4, "offset"), void 0 !== s5[l4] && void 0 !== s5[l4 + h3] || boundsError(l4, s5.length - (h3 + 1));
  }(y3, b2, w4);
}
function validateNumber(s4, l3) {
  if ("number" != typeof s4)
    throw new $2.ERR_INVALID_ARG_TYPE(l3, "number", s4);
}
function boundsError(s4, l3, h2) {
  if (Math.floor(s4) !== s4)
    throw validateNumber(s4, h2), new $2.ERR_OUT_OF_RANGE("offset", "an integer", s4);
  if (l3 < 0)
    throw new $2.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new $2.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${l3}`, s4);
}
function utf8ToBytes(s4, l3) {
  let h2;
  l3 = l3 || Number.POSITIVE_INFINITY;
  const y3 = s4.length;
  let b2 = null;
  const w4 = [];
  for (let S2 = 0; S2 < y3; ++S2) {
    if (h2 = s4.charCodeAt(S2), h2 > 55295 && h2 < 57344) {
      if (!b2) {
        if (h2 > 56319) {
          (l3 -= 3) > -1 && w4.push(239, 191, 189);
          continue;
        }
        if (S2 + 1 === y3) {
          (l3 -= 3) > -1 && w4.push(239, 191, 189);
          continue;
        }
        b2 = h2;
        continue;
      }
      if (h2 < 56320) {
        (l3 -= 3) > -1 && w4.push(239, 191, 189), b2 = h2;
        continue;
      }
      h2 = 65536 + (b2 - 55296 << 10 | h2 - 56320);
    } else
      b2 && (l3 -= 3) > -1 && w4.push(239, 191, 189);
    if (b2 = null, h2 < 128) {
      if ((l3 -= 1) < 0)
        break;
      w4.push(h2);
    } else if (h2 < 2048) {
      if ((l3 -= 2) < 0)
        break;
      w4.push(h2 >> 6 | 192, 63 & h2 | 128);
    } else if (h2 < 65536) {
      if ((l3 -= 3) < 0)
        break;
      w4.push(h2 >> 12 | 224, h2 >> 6 & 63 | 128, 63 & h2 | 128);
    } else {
      if (!(h2 < 1114112))
        throw new Error("Invalid code point");
      if ((l3 -= 4) < 0)
        break;
      w4.push(h2 >> 18 | 240, h2 >> 12 & 63 | 128, h2 >> 6 & 63 | 128, 63 & h2 | 128);
    }
  }
  return w4;
}
function base64ToBytes(s4) {
  return toByteArray(function(s5) {
    if ((s5 = (s5 = s5.split("=")[0]).trim().replace(T, "")).length < 2)
      return "";
    for (; s5.length % 4 != 0; )
      s5 += "=";
    return s5;
  }(s4));
}
function blitBuffer(s4, l3, h2, y3) {
  let b2;
  for (b2 = 0; b2 < y3 && !(b2 + h2 >= l3.length || b2 >= s4.length); ++b2)
    l3[b2 + h2] = s4[b2];
  return b2;
}
function isInstance(s4, l3) {
  return s4 instanceof l3 || null != s4 && null != s4.constructor && null != s4.constructor.name && s4.constructor.name === l3.name;
}
function numberIsNaN(s4) {
  return s4 != s4;
}
function defineBigIntMethod(s4) {
  return "undefined" == typeof BigInt ? BufferBigIntNotDefined : s4;
}
function BufferBigIntNotDefined() {
  throw new Error("BigInt not supported");
}
function defaultSetTimeout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function runTimeout(s4) {
  if (L === setTimeout)
    return setTimeout(s4, 0);
  if ((L === defaultSetTimeout || !L) && setTimeout)
    return L = setTimeout, setTimeout(s4, 0);
  try {
    return L(s4, 0);
  } catch {
    try {
      return L.call(null, s4, 0);
    } catch {
      return L.call(this, s4, 0);
    }
  }
}
function cleanUpNextTick() {
  K && D2 && (K = false, D2.length > 0 ? q = [...D2, ...q] : Y = -1, q.length > 0 && drainQueue());
}
function drainQueue() {
  if (K)
    return;
  const s4 = runTimeout(cleanUpNextTick);
  K = true;
  let l3 = q.length;
  for (; l3; ) {
    for (D2 = q, q = []; ++Y < l3; )
      D2 && D2[Y].run();
    Y = -1, l3 = q.length;
  }
  D2 = null, K = false, function(s5) {
    if (U === clearTimeout)
      return clearTimeout(s5);
    if ((U === defaultClearTimeout || !U) && clearTimeout)
      return U = clearTimeout, clearTimeout(s5);
    try {
      return U(s5);
    } catch {
      try {
        return U.call(null, s5);
      } catch {
        return U.call(this, s5);
      }
    }
  }(s4);
}
function Item(s4, l3) {
  this.fun = s4, this.array = l3;
}
function noop() {
  return F;
}
function encodeQueryValue(s4) {
  return (l3 = "string" == typeof s4 ? s4 : JSON.stringify(s4), encodeURI("" + l3).replace(xe, "|")).replace(pe, "%2B").replace(Re, "+").replace(ue, "%23").replace(fe, "%26").replace(we, "`").replace(ge, "^").replace(de, "%2F");
  var l3;
}
function encodeQueryKey(s4) {
  return encodeQueryValue(s4).replace(he, "%3D");
}
function decode$1(s4 = "") {
  try {
    return decodeURIComponent("" + s4);
  } catch {
    return "" + s4;
  }
}
function decodeQueryValue(s4) {
  return decode$1(s4.replace(pe, " "));
}
function parseQuery(s4 = "") {
  const l3 = {};
  "?" === s4[0] && (s4 = s4.slice(1));
  for (const h2 of s4.split("&")) {
    const s5 = h2.match(/([^=]+)=?(.*)/) || [];
    if (s5.length < 2)
      continue;
    const y3 = decode$1(s5[1].replace(pe, " "));
    if ("__proto__" === y3 || "constructor" === y3)
      continue;
    const b2 = decodeQueryValue(s5[2] || "");
    void 0 === l3[y3] ? l3[y3] = b2 : Array.isArray(l3[y3]) ? l3[y3].push(b2) : l3[y3] = [l3[y3], b2];
  }
  return l3;
}
function stringifyQuery(s4) {
  return Object.keys(s4).filter((l3) => void 0 !== s4[l3]).map((l3) => {
    return h2 = l3, "number" != typeof (y3 = s4[l3]) && "boolean" != typeof y3 || (y3 = String(y3)), y3 ? Array.isArray(y3) ? y3.map((s5) => `${encodeQueryKey(h2)}=${encodeQueryValue(s5)}`).join("&") : `${encodeQueryKey(h2)}=${encodeQueryValue(y3)}` : encodeQueryKey(h2);
    var h2, y3;
  }).filter(Boolean).join("&");
}
function hasProtocol(s4, l3 = {}) {
  return "boolean" == typeof l3 && (l3 = { acceptRelative: l3 }), l3.strict ? ze.test(s4) : Oe.test(s4) || !!l3.acceptRelative && Be.test(s4);
}
function withoutTrailingSlash(s4 = "", l3) {
  return (function(s5 = "", l4) {
    return s5.endsWith("/");
  }(s4) ? s4.slice(0, -1) : s4) || "/";
}
function withTrailingSlash(s4 = "", l3) {
  return s4.endsWith("/") ? s4 : s4 + "/";
}
function withoutBase(s4, l3) {
  if (isEmptyURL(l3))
    return s4;
  const h2 = withoutTrailingSlash(l3);
  if (!s4.startsWith(h2))
    return s4;
  const y3 = s4.slice(h2.length);
  return "/" === y3[0] ? y3 : "/" + y3;
}
function withQuery(s4, l3) {
  const h2 = parseURL(s4), y3 = { ...parseQuery(h2.search), ...l3 };
  return h2.search = stringifyQuery(y3), function(s5) {
    const l4 = s5.pathname || "", h3 = s5.search ? (s5.search.startsWith("?") ? "" : "?") + s5.search : "", y4 = s5.hash || "", b2 = s5.auth ? s5.auth + "@" : "", w4 = s5.host || "", S2 = s5.protocol || s5[Le] ? (s5.protocol || "") + "//" : "";
    return S2 + b2 + w4 + l4 + h3 + y4;
  }(h2);
}
function getQuery(s4) {
  return parseQuery(parseURL(s4).search);
}
function isEmptyURL(s4) {
  return !s4 || "/" === s4;
}
function joinURL(s4, ...l3) {
  let h2 = s4 || "";
  for (const s5 of l3.filter((s6) => function(s7) {
    return s7 && "/" !== s7;
  }(s6)))
    if (h2) {
      const l4 = s5.replace(Ne, "");
      h2 = withTrailingSlash(h2) + l4;
    } else
      h2 = s5;
  return h2;
}
function parseURL(s4 = "", l3) {
  const h2 = s4.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (h2) {
    const [, s5, l4 = ""] = h2;
    return { protocol: s5.toLowerCase(), pathname: l4, href: s5 + l4, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(s4, { acceptRelative: true }))
    return l3 ? parseURL(l3 + s4) : parsePath(s4);
  const [, y3 = "", b2, w4 = ""] = s4.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, S2 = "", E2 = ""] = w4.match(/([^#/?]*)(.*)?/) || [], { pathname: $3, search: T2, hash: O2 } = parsePath(E2.replace(/\/(?=[A-Za-z]:)/, ""));
  return { protocol: y3.toLowerCase(), auth: b2 ? b2.slice(0, Math.max(0, b2.length - 1)) : "", host: S2, pathname: $3, search: T2, hash: O2, [Le]: !y3 };
}
function parsePath(s4 = "") {
  const [l3 = "", h2 = "", y3 = ""] = (s4.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: l3, search: h2, hash: y3 };
}
function parse(s4, l3) {
  if ("string" != typeof s4)
    throw new TypeError("argument str must be a string");
  const h2 = {}, y3 = {}.decode || decode;
  let b2 = 0;
  for (; b2 < s4.length; ) {
    const l4 = s4.indexOf("=", b2);
    if (-1 === l4)
      break;
    let w4 = s4.indexOf(";", b2);
    if (-1 === w4)
      w4 = s4.length;
    else if (w4 < l4) {
      b2 = s4.lastIndexOf(";", l4 - 1) + 1;
      continue;
    }
    const S2 = s4.slice(b2, l4).trim();
    if (void 0 === h2[S2]) {
      let b3 = s4.slice(l4 + 1, w4).trim();
      34 === b3.codePointAt(0) && (b3 = b3.slice(1, -1)), h2[S2] = tryDecode(b3, y3);
    }
    b2 = w4 + 1;
  }
  return h2;
}
function serialize(s4, l3, h2) {
  const y3 = h2 || {}, b2 = y3.encode || encode;
  if ("function" != typeof b2)
    throw new TypeError("option encode is invalid");
  if (!He.test(s4))
    throw new TypeError("argument name is invalid");
  const w4 = b2(l3);
  if (w4 && !He.test(w4))
    throw new TypeError("argument val is invalid");
  let S2 = s4 + "=" + w4;
  if (void 0 !== y3.maxAge && null !== y3.maxAge) {
    const s5 = y3.maxAge - 0;
    if (Number.isNaN(s5) || !Number.isFinite(s5))
      throw new TypeError("option maxAge is invalid");
    S2 += "; Max-Age=" + Math.floor(s5);
  }
  if (y3.domain) {
    if (!He.test(y3.domain))
      throw new TypeError("option domain is invalid");
    S2 += "; Domain=" + y3.domain;
  }
  if (y3.path) {
    if (!He.test(y3.path))
      throw new TypeError("option path is invalid");
    S2 += "; Path=" + y3.path;
  }
  if (y3.expires) {
    if (E2 = y3.expires, !("[object Date]" === Object.prototype.toString.call(E2) || E2 instanceof Date) || Number.isNaN(y3.expires.valueOf()))
      throw new TypeError("option expires is invalid");
    S2 += "; Expires=" + y3.expires.toUTCString();
  }
  var E2;
  if (y3.httpOnly && (S2 += "; HttpOnly"), y3.secure && (S2 += "; Secure"), y3.priority) {
    switch ("string" == typeof y3.priority ? y3.priority.toLowerCase() : y3.priority) {
      case "low":
        S2 += "; Priority=Low";
        break;
      case "medium":
        S2 += "; Priority=Medium";
        break;
      case "high":
        S2 += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (y3.sameSite) {
    switch ("string" == typeof y3.sameSite ? y3.sameSite.toLowerCase() : y3.sameSite) {
      case true:
        S2 += "; SameSite=Strict";
        break;
      case "lax":
        S2 += "; SameSite=Lax";
        break;
      case "strict":
        S2 += "; SameSite=Strict";
        break;
      case "none":
        S2 += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return y3.partitioned && (S2 += "; Partitioned"), S2;
}
function tryDecode(s4, l3) {
  try {
    return l3(s4);
  } catch {
    return s4;
  }
}
function decode(s4) {
  return s4.includes("%") ? decodeURIComponent(s4) : s4;
}
function encode(s4) {
  return encodeURIComponent(s4);
}
function objectHash(s4, l3) {
  const h2 = createHasher(l3 = l3 ? { ...De, ...l3 } : De);
  return h2.dispatch(s4), h2.toString();
}
function createHasher(s4) {
  let l3 = "", h2 = /* @__PURE__ */ new Map();
  const write2 = (s5) => {
    l3 += s5;
  };
  return { toString: () => l3, getContext: () => h2, dispatch(l4) {
    s4.replacer && (l4 = s4.replacer(l4));
    return this[null === l4 ? "null" : typeof l4](l4);
  }, object(l4) {
    if (l4 && "function" == typeof l4.toJSON)
      return this.object(l4.toJSON());
    const y3 = Object.prototype.toString.call(l4);
    let b2 = "";
    const w4 = y3.length;
    b2 = w4 < 10 ? "unknown:[" + y3 + "]" : y3.slice(8, w4 - 1), b2 = b2.toLowerCase();
    let S2 = null;
    if (void 0 !== (S2 = h2.get(l4)))
      return this.dispatch("[CIRCULAR:" + S2 + "]");
    if (h2.set(l4, h2.size), void 0 !== B && B.isBuffer && B.isBuffer(l4))
      return write2("buffer:"), write2(l4.toString("utf8"));
    if ("object" !== b2 && "function" !== b2 && "asyncfunction" !== b2)
      this[b2] ? this[b2](l4) : s4.ignoreUnknown || this.unkown(l4, b2);
    else {
      let h3 = Object.keys(l4);
      s4.unorderedObjects && (h3 = h3.sort());
      let y4 = [];
      false === s4.respectType || isNativeFunction(l4) || (y4 = Ge), s4.excludeKeys && (h3 = h3.filter((l5) => !s4.excludeKeys(l5)), y4 = y4.filter((l5) => !s4.excludeKeys(l5))), write2("object:" + (h3.length + y4.length) + ":");
      const dispatchForKey = (h4) => {
        this.dispatch(h4), write2(":"), s4.excludeValues || this.dispatch(l4[h4]), write2(",");
      };
      for (const s5 of h3)
        dispatchForKey(s5);
      for (const s5 of y4)
        dispatchForKey(s5);
    }
  }, array(l4, y3) {
    if (y3 = void 0 === y3 ? false !== s4.unorderedArrays : y3, write2("array:" + l4.length + ":"), !y3 || l4.length <= 1) {
      for (const s5 of l4)
        this.dispatch(s5);
      return;
    }
    const b2 = /* @__PURE__ */ new Map(), w4 = l4.map((l5) => {
      const h3 = createHasher(s4);
      h3.dispatch(l5);
      for (const [s5, l6] of h3.getContext())
        b2.set(s5, l6);
      return h3.toString();
    });
    return h2 = b2, w4.sort(), this.array(w4, false);
  }, date: (s5) => write2("date:" + s5.toJSON()), symbol: (s5) => write2("symbol:" + s5.toString()), unkown(s5, l4) {
    if (write2(l4), s5)
      return write2(":"), s5 && "function" == typeof s5.entries ? this.array(Array.from(s5.entries()), true) : void 0;
  }, error: (s5) => write2("error:" + s5.toString()), boolean: (s5) => write2("bool:" + s5), string(s5) {
    write2("string:" + s5.length + ":"), write2(s5);
  }, function(l4) {
    write2("fn:"), isNativeFunction(l4) ? this.dispatch("[native]") : this.dispatch(l4.toString()), false !== s4.respectFunctionNames && this.dispatch("function-name:" + String(l4.name)), s4.respectFunctionProperties && this.object(l4);
  }, number: (s5) => write2("number:" + s5), xml: (s5) => write2("xml:" + s5.toString()), null: () => write2("Null"), undefined: () => write2("Undefined"), regexp: (s5) => write2("regex:" + s5.toString()), uint8array(s5) {
    return write2("uint8array:"), this.dispatch(Array.prototype.slice.call(s5));
  }, uint8clampedarray(s5) {
    return write2("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(s5));
  }, int8array(s5) {
    return write2("int8array:"), this.dispatch(Array.prototype.slice.call(s5));
  }, uint16array(s5) {
    return write2("uint16array:"), this.dispatch(Array.prototype.slice.call(s5));
  }, int16array(s5) {
    return write2("int16array:"), this.dispatch(Array.prototype.slice.call(s5));
  }, uint32array(s5) {
    return write2("uint32array:"), this.dispatch(Array.prototype.slice.call(s5));
  }, int32array(s5) {
    return write2("int32array:"), this.dispatch(Array.prototype.slice.call(s5));
  }, float32array(s5) {
    return write2("float32array:"), this.dispatch(Array.prototype.slice.call(s5));
  }, float64array(s5) {
    return write2("float64array:"), this.dispatch(Array.prototype.slice.call(s5));
  }, arraybuffer(s5) {
    return write2("arraybuffer:"), this.dispatch(new Uint8Array(s5));
  }, url: (s5) => write2("url:" + s5.toString()), map(l4) {
    write2("map:");
    const h3 = [...l4];
    return this.array(h3, false !== s4.unorderedSets);
  }, set(l4) {
    write2("set:");
    const h3 = [...l4];
    return this.array(h3, false !== s4.unorderedSets);
  }, file(s5) {
    return write2("file:"), this.dispatch([s5.name, s5.size, s5.type, s5.lastModfied]);
  }, blob() {
    if (s4.ignoreUnknown)
      return write2("[blob]");
    throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
  }, domwindow: () => write2("domwindow"), bigint: (s5) => write2("bigint:" + s5.toString()), process: () => write2("process"), timer: () => write2("timer"), pipe: () => write2("pipe"), tcp: () => write2("tcp"), udp: () => write2("udp"), tty: () => write2("tty"), statwatcher: () => write2("statwatcher"), securecontext: () => write2("securecontext"), connection: () => write2("connection"), zlib: () => write2("zlib"), context: () => write2("context"), nodescript: () => write2("nodescript"), httpparser: () => write2("httpparser"), dataview: () => write2("dataview"), signal: () => write2("signal"), fsevent: () => write2("fsevent"), tlswrap: () => write2("tlswrap") };
}
function isNativeFunction(s4) {
  return "function" == typeof s4 && Function.prototype.toString.call(s4).slice(-Xe) === Ye;
}
function hash(s4, l3 = {}) {
  const h2 = "string" == typeof s4 ? s4 : objectHash(s4, l3);
  return (y3 = h2, new SHA256().finalize(y3).toString(Qe)).slice(0, 10);
  var y3;
}
function createRouter$1(s4 = {}) {
  const l3 = { options: s4, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = (l4) => s4.strictTrailingSlash ? l4 : l4.replace(/\/$/, "") || "/";
  if (s4.routes)
    for (const h2 in s4.routes)
      insert(l3, normalizeTrailingSlash(h2), s4.routes[h2]);
  return { ctx: l3, lookup: (s5) => function(s6, l4) {
    const h2 = s6.staticRoutesMap[l4];
    if (h2)
      return h2.data;
    const y3 = l4.split("/"), b2 = {};
    let w4 = false, S2 = null, E2 = s6.rootNode, $3 = null;
    for (let s7 = 0; s7 < y3.length; s7++) {
      const l5 = y3[s7];
      null !== E2.wildcardChildNode && (S2 = E2.wildcardChildNode, $3 = y3.slice(s7).join("/"));
      const h3 = E2.children.get(l5);
      if (void 0 === h3) {
        if (E2 && E2.placeholderChildren.length > 1) {
          const l6 = y3.length - s7;
          E2 = E2.placeholderChildren.find((s8) => s8.maxDepth === l6) || null;
        } else
          E2 = E2.placeholderChildren[0] || null;
        if (!E2)
          break;
        E2.paramName && (b2[E2.paramName] = l5), w4 = true;
      } else
        E2 = h3;
    }
    null !== E2 && null !== E2.data || null === S2 || (E2 = S2, b2[E2.paramName || "_"] = $3, w4 = true);
    if (!E2)
      return null;
    if (w4)
      return { ...E2.data, params: w4 ? b2 : void 0 };
    return E2.data;
  }(l3, normalizeTrailingSlash(s5)), insert: (s5, h2) => insert(l3, normalizeTrailingSlash(s5), h2), remove: (s5) => function(s6, l4) {
    let h2 = false;
    const y3 = l4.split("/");
    let b2 = s6.rootNode;
    for (const s7 of y3)
      if (b2 = b2.children.get(s7), !b2)
        return h2;
    if (b2.data) {
      const s7 = y3.at(-1) || "";
      b2.data = null, 0 === Object.keys(b2.children).length && b2.parent && (b2.parent.children.delete(s7), b2.parent.wildcardChildNode = null, b2.parent.placeholderChildren = []), h2 = true;
    }
    return h2;
  }(l3, normalizeTrailingSlash(s5)) };
}
function insert(s4, l3, h2) {
  let y3 = true;
  const b2 = l3.split("/");
  let w4 = s4.rootNode, S2 = 0;
  const E2 = [w4];
  for (const s5 of b2) {
    let l4;
    if (l4 = w4.children.get(s5))
      w4 = l4;
    else {
      const h3 = getNodeType(s5);
      l4 = createRadixNode({ type: h3, parent: w4 }), w4.children.set(s5, l4), h3 === ot.PLACEHOLDER ? (l4.paramName = "*" === s5 ? "_" + S2++ : s5.slice(1), w4.placeholderChildren.push(l4), y3 = false) : h3 === ot.WILDCARD && (w4.wildcardChildNode = l4, l4.paramName = s5.slice(3) || "_", y3 = false), E2.push(l4), w4 = l4;
    }
  }
  for (const [s5, l4] of E2.entries())
    l4.maxDepth = Math.max(E2.length - s5, l4.maxDepth || 0);
  return w4.data = h2, true === y3 && (s4.staticRoutesMap[l3] = w4), w4;
}
function createRadixNode(s4 = {}) {
  return { type: s4.type || ot.NORMAL, maxDepth: 0, parent: s4.parent || null, children: /* @__PURE__ */ new Map(), data: s4.data || null, paramName: s4.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(s4) {
  return s4.startsWith("**") ? ot.WILDCARD : ":" === s4[0] || "*" === s4 ? ot.PLACEHOLDER : ot.NORMAL;
}
function toRouteMatcher(s4) {
  return function(s5, l3) {
    return { ctx: { table: s5 }, matchAll: (h2) => _matchRoutes(h2, s5, l3) };
  }(_routerNodeToTable("", s4.ctx.rootNode), s4.ctx.options.strictTrailingSlash);
}
function _matchRoutes(s4, l3, h2) {
  true !== h2 && s4.endsWith("/") && (s4 = s4.slice(0, -1) || "/");
  const y3 = [];
  for (const [h3, b3] of _sortRoutesMap(l3.wildcard))
    (s4 === h3 || s4.startsWith(h3 + "/")) && y3.push(b3);
  for (const [h3, b3] of _sortRoutesMap(l3.dynamic))
    if (s4.startsWith(h3 + "/")) {
      const l4 = "/" + s4.slice(h3.length).split("/").splice(2).join("/");
      y3.push(..._matchRoutes(l4, b3));
    }
  const b2 = l3.static.get(s4);
  return b2 && y3.push(b2), y3.filter(Boolean);
}
function _sortRoutesMap(s4) {
  return [...s4.entries()].sort((s5, l3) => s5[0].length - l3[0].length);
}
function _routerNodeToTable(s4, l3) {
  const h2 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return function _addNode(s5, l4) {
    if (s5)
      if (l4.type !== ot.NORMAL || s5.includes("*") || s5.includes(":")) {
        if (l4.type === ot.WILDCARD)
          h2.wildcard.set(s5.replace("/**", ""), l4.data);
        else if (l4.type === ot.PLACEHOLDER) {
          const y3 = _routerNodeToTable("", l4);
          return l4.data && y3.static.set("/", l4.data), void h2.dynamic.set(s5.replace(/\/\*|\/:\w+/, ""), y3);
        }
      } else
        l4.data && h2.static.set(s5, l4.data);
    for (const [h3, y3] of l4.children.entries())
      _addNode(`${s5}/${h3}`.replace("//", "/"), y3);
  }(s4, l3), h2;
}
function jsonParseTransform(s4, l3) {
  if (!("__proto__" === s4 || "constructor" === s4 && l3 && "object" == typeof l3 && "prototype" in l3))
    return l3;
  !function(s5) {
    console.warn(`[destr] Dropping "${s5}" key to prevent prototype pollution.`);
  }(s4);
}
function destr(s4, l3 = {}) {
  if ("string" != typeof s4)
    return s4;
  const h2 = s4.trim();
  if ('"' === s4[0] && s4.endsWith('"') && !s4.includes("\\"))
    return h2.slice(1, -1);
  if (h2.length <= 9) {
    const s5 = h2.toLowerCase();
    if ("true" === s5)
      return true;
    if ("false" === s5)
      return false;
    if ("undefined" === s5)
      return;
    if ("null" === s5)
      return null;
    if ("nan" === s5)
      return Number.NaN;
    if ("infinity" === s5)
      return Number.POSITIVE_INFINITY;
    if ("-infinity" === s5)
      return Number.NEGATIVE_INFINITY;
  }
  if (!lt.test(s4)) {
    if (l3.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return s4;
  }
  try {
    if (at.test(s4) || ct.test(s4)) {
      if (l3.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(s4, jsonParseTransform);
    }
    return JSON.parse(s4);
  } catch (h3) {
    if (l3.strict)
      throw h3;
    return s4;
  }
}
function isPlainObject(s4) {
  if (null === s4 || "object" != typeof s4)
    return false;
  const l3 = Object.getPrototypeOf(s4);
  return (null === l3 || l3 === Object.prototype || null === Object.getPrototypeOf(l3)) && (!(Symbol.iterator in s4) && (!(Symbol.toStringTag in s4) || "[object Module]" === Object.prototype.toString.call(s4)));
}
function _defu(s4, l3, h2 = ".", y3) {
  if (!isPlainObject(l3))
    return _defu(s4, {}, h2, y3);
  const b2 = Object.assign({}, l3);
  for (const l4 in s4) {
    if ("__proto__" === l4 || "constructor" === l4)
      continue;
    const w4 = s4[l4];
    null != w4 && (y3 && y3(b2, l4, w4, h2) || (Array.isArray(w4) && Array.isArray(b2[l4]) ? b2[l4] = [...w4, ...b2[l4]] : isPlainObject(w4) && isPlainObject(b2[l4]) ? b2[l4] = _defu(w4, b2[l4], (h2 ? `${h2}.` : "") + l4.toString(), y3) : b2[l4] = w4));
  }
  return b2;
}
function createDefu(s4) {
  return (...l3) => l3.reduce((l4, h2) => _defu(l4, h2, "", s4), {});
}
function _addListener(s4, l3, h2, y3) {
  _checkListener(h2), void 0 !== s4._events.newListener && s4.emit("newListener", l3, h2.listener || h2), s4._events[l3] || (s4._events[l3] = []), y3 ? s4._events[l3].unshift(h2) : s4._events[l3].push(h2);
  const b2 = _getMaxListeners(s4);
  if (b2 > 0 && s4._events[l3].length > b2 && !s4._events[l3].warned) {
    s4._events[l3].warned = true;
    const h3 = new Error(`[unenv] Possible EventEmitter memory leak detected. ${s4._events[l3].length} ${l3} listeners added. Use emitter.setMaxListeners() to increase limit`);
    h3.name = "MaxListenersExceededWarning", h3.emitter = s4, h3.type = l3, h3.count = s4._events[l3]?.length, console.warn(h3);
  }
  return s4;
}
function _wrapOnce(s4, l3, h2) {
  let y3 = false;
  const wrapper = (...b2) => {
    if (!y3)
      return s4.removeListener(l3, wrapper), y3 = true, 0 === b2.length ? h2.call(s4) : h2.apply(s4, b2);
  };
  return wrapper.listener = h2, wrapper;
}
function _getMaxListeners(s4) {
  return s4._maxListeners ?? At.defaultMaxListeners;
}
function _listeners(s4, l3, h2) {
  let y3 = s4._events[l3];
  return "function" == typeof y3 && (y3 = [y3]), h2 ? y3.map((s5) => s5.listener || s5) : y3;
}
function _checkListener(s4) {
  if ("function" != typeof s4)
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof s4);
}
function getDuplex() {
  return Object.assign(Ot.prototype, Tt.prototype), Object.assign(Ot.prototype, jt.prototype), Ot;
}
function _distinct(s4) {
  const l3 = {};
  for (const [h2, y3] of Object.entries(s4))
    h2 && (l3[h2] = (Array.isArray(y3) ? y3 : [y3]).filter(Boolean));
  return l3;
}
function hasProp(s4, l3) {
  try {
    return l3 in s4;
  } catch {
    return false;
  }
}
function createError$1(s4) {
  if ("string" == typeof s4)
    return new H3Error(s4);
  if (isError(s4))
    return s4;
  const l3 = new H3Error(s4.message ?? s4.statusMessage ?? "", { cause: s4.cause || s4 });
  if (hasProp(s4, "stack"))
    try {
      Object.defineProperty(l3, "stack", { get: () => s4.stack });
    } catch {
      try {
        l3.stack = s4.stack;
      } catch {
      }
    }
  if (s4.data && (l3.data = s4.data), s4.statusCode ? l3.statusCode = sanitizeStatusCode(s4.statusCode, l3.statusCode) : s4.status && (l3.statusCode = sanitizeStatusCode(s4.status, l3.statusCode)), s4.statusMessage ? l3.statusMessage = s4.statusMessage : s4.statusText && (l3.statusMessage = s4.statusText), l3.statusMessage) {
    const s5 = l3.statusMessage;
    sanitizeStatusMessage(l3.statusMessage) !== s5 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== s4.fatal && (l3.fatal = s4.fatal), void 0 !== s4.unhandled && (l3.unhandled = s4.unhandled), l3;
}
function isError(s4) {
  return true === s4?.constructor?.__h3_error__;
}
function getRequestHeaders(s4) {
  const l3 = {};
  for (const h2 in s4.node.req.headers) {
    const y3 = s4.node.req.headers[h2];
    l3[h2] = Array.isArray(y3) ? y3.filter(Boolean).join(", ") : y3;
  }
  return l3;
}
function getRequestHeader(s4, l3) {
  return getRequestHeaders(s4)[l3.toLowerCase()];
}
function getRequestURL(s4, l3 = {}) {
  const h2 = function(s5, l4 = {}) {
    if (l4.xForwardedHost) {
      const l5 = s5.node.req.headers["x-forwarded-host"];
      if (l5)
        return l5;
    }
    return s5.node.req.headers.host || "localhost";
  }(s4, l3), y3 = function(s5, l4 = {}) {
    return false !== l4.xForwardedProto && "https" === s5.node.req.headers["x-forwarded-proto"] || s5.node.req.connection?.encrypted ? "https" : "http";
  }(s4), b2 = (s4.node.req.originalUrl || s4.path).replace(/^[/\\]+/g, "/");
  return new URL(b2, `${y3}://${h2}`);
}
function getRequestIP(s4, l3 = {}) {
  if (s4.context.clientAddress)
    return s4.context.clientAddress;
  if (l3.xForwardedFor) {
    const l4 = getRequestHeader(s4, "x-forwarded-for")?.split(",").shift()?.trim();
    if (l4)
      return l4;
  }
  return s4.node.req.socket.remoteAddress ? s4.node.req.socket.remoteAddress : void 0;
}
function readRawBody(s4, l3 = "utf8") {
  !function(s5, l4, h3) {
    if (!function(s6, l5, h4) {
      if ("string" == typeof l5) {
        if (s6.method === l5)
          return true;
      } else if (l5.includes(s6.method))
        return true;
      return false;
    }(s5, l4))
      throw createError$1({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }(s4, Lt);
  const h2 = s4._requestBody || s4.web?.request?.body || s4.node.req[Nt] || s4.node.req.rawBody || s4.node.req.body;
  if (h2) {
    const s5 = Promise.resolve(h2).then((s6) => B.isBuffer(s6) ? s6 : "function" == typeof s6.pipeTo ? new Promise((l4, h3) => {
      const y4 = [];
      s6.pipeTo(new WritableStream({ write(s7) {
        y4.push(s7);
      }, close() {
        l4(B.concat(y4));
      }, abort(s7) {
        h3(s7);
      } })).catch(h3);
    }) : "function" == typeof s6.pipe ? new Promise((l4, h3) => {
      const y4 = [];
      s6.on("data", (s7) => {
        y4.push(s7);
      }).on("end", () => {
        l4(B.concat(y4));
      }).on("error", h3);
    }) : s6.constructor === Object ? B.from(JSON.stringify(s6)) : B.from(s6));
    return l3 ? s5.then((s6) => s6.toString(l3)) : s5;
  }
  if (!Number.parseInt(s4.node.req.headers["content-length"] || ""))
    return Promise.resolve(void 0);
  const y3 = s4.node.req[Nt] = new Promise((l4, h3) => {
    const y4 = [];
    s4.node.req.on("error", (s5) => {
      h3(s5);
    }).on("data", (s5) => {
      y4.push(s5);
    }).on("end", () => {
      l4(B.concat(y4));
    });
  });
  return l3 ? y3.then((s5) => s5.toString(l3)) : y3;
}
function getRequestWebStream(s4) {
  if (!Lt.includes(s4.method))
    return;
  const l3 = s4.web?.request?.body || s4._requestBody;
  if (l3)
    return l3;
  return Nt in s4.node.req || "rawBody" in s4.node.req || "body" in s4.node.req || "__unenv__" in s4.node.req ? new ReadableStream({ async start(l4) {
    const h2 = await readRawBody(s4, false);
    h2 && l4.enqueue(h2), l4.close();
  } }) : new ReadableStream({ start: (l4) => {
    s4.node.req.on("data", (s5) => {
      l4.enqueue(s5);
    }), s4.node.req.on("end", () => {
      l4.close();
    }), s4.node.req.on("error", (s5) => {
      l4.error(s5);
    });
  } });
}
function handleCacheHeaders(s4, l3) {
  const h2 = ["public", ...l3.cacheControls || []];
  let y3 = false;
  if (void 0 !== l3.maxAge && h2.push("max-age=" + +l3.maxAge, "s-maxage=" + +l3.maxAge), l3.modifiedTime) {
    const h3 = new Date(l3.modifiedTime), b2 = s4.node.req.headers["if-modified-since"];
    s4.node.res.setHeader("last-modified", h3.toUTCString()), b2 && new Date(b2) >= l3.modifiedTime && (y3 = true);
  }
  if (l3.etag) {
    s4.node.res.setHeader("etag", l3.etag);
    s4.node.req.headers["if-none-match"] === l3.etag && (y3 = true);
  }
  return s4.node.res.setHeader("cache-control", h2.join(", ")), !!y3 && (s4.node.res.statusCode = 304, s4.handled || s4.node.res.end(), true);
}
function sanitizeStatusMessage(s4 = "") {
  return s4.replace(Ht, "");
}
function sanitizeStatusCode(s4, l3 = 200) {
  return s4 ? ("string" == typeof s4 && (s4 = Number.parseInt(s4, 10)), s4 < 100 || s4 > 999 ? l3 : s4) : l3;
}
function getCookie(s4, l3) {
  return function(s5) {
    return parse(s5.node.req.headers.cookie || "");
  }(s4)[l3];
}
function setCookie(s4, l3, h2, y3) {
  const b2 = serialize(l3, h2, y3 = { path: "/", ...y3 });
  let w4 = s4.node.res.getHeader("set-cookie");
  Array.isArray(w4) || (w4 = [w4]);
  const S2 = objectHash(y3);
  w4 = w4.filter((s5) => s5 && S2 !== objectHash(parse(s5))), s4.node.res.setHeader("set-cookie", [...w4, b2]);
}
function splitCookiesString(s4) {
  if (Array.isArray(s4))
    return s4.flatMap((s5) => splitCookiesString(s5));
  if ("string" != typeof s4)
    return [];
  const l3 = [];
  let h2, y3, b2, w4, S2, E2 = 0;
  const skipWhitespace = () => {
    for (; E2 < s4.length && /\s/.test(s4.charAt(E2)); )
      E2 += 1;
    return E2 < s4.length;
  };
  for (; E2 < s4.length; ) {
    for (h2 = E2, S2 = false; skipWhitespace(); )
      if (y3 = s4.charAt(E2), "," === y3) {
        for (b2 = E2, E2 += 1, skipWhitespace(), w4 = E2; E2 < s4.length && (y3 = s4.charAt(E2), "=" !== y3 && ";" !== y3 && "," !== y3); )
          E2 += 1;
        E2 < s4.length && "=" === s4.charAt(E2) ? (S2 = true, E2 = w4, l3.push(s4.slice(h2, b2)), h2 = E2) : E2 = b2 + 1;
      } else
        E2 += 1;
    (!S2 || E2 >= s4.length) && l3.push(s4.slice(h2, s4.length));
  }
  return l3;
}
function send(s4, l3, h2) {
  return h2 && function(s5, l4) {
    l4 && 304 !== s5.node.res.statusCode && !s5.node.res.getHeader("content-type") && s5.node.res.setHeader("content-type", l4);
  }(s4, h2), new Promise((h3) => {
    qt(() => {
      s4.handled || s4.node.res.end(l3), h3();
    });
  });
}
function setResponseStatus(s4, l3, h2) {
  l3 && (s4.node.res.statusCode = sanitizeStatusCode(l3, s4.node.res.statusCode)), h2 && (s4.node.res.statusMessage = sanitizeStatusMessage(h2));
}
function getResponseStatus(s4) {
  return s4.node.res.statusCode;
}
function getResponseStatusText(s4) {
  return s4.node.res.statusMessage;
}
function sendRedirect(s4, l3, h2 = 302) {
  s4.node.res.statusCode = sanitizeStatusCode(h2, s4.node.res.statusCode), s4.node.res.setHeader("location", l3);
  return send(s4, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${l3.replace(/"/g, "%22")}"></head></html>`, Ut.html);
}
function getResponseHeaders(s4) {
  return s4.node.res.getHeaders();
}
function getResponseHeader(s4, l3) {
  return s4.node.res.getHeader(l3);
}
function setResponseHeader(s4, l3, h2) {
  s4.node.res.setHeader(l3, h2);
}
function appendResponseHeader(s4, l3, h2) {
  let y3 = s4.node.res.getHeader(l3);
  y3 ? (Array.isArray(y3) || (y3 = [y3.toString()]), s4.node.res.setHeader(l3, [...y3, h2])) : s4.node.res.setHeader(l3, h2);
}
function removeResponseHeader(s4, l3) {
  return s4.node.res.removeHeader(l3);
}
function sendStream(s4, l3) {
  if (!l3 || "object" != typeof l3)
    throw new Error("[h3] Invalid stream provided.");
  if (s4.node.res._data = l3, !s4.node.res.socket)
    return s4._handled = true, Promise.resolve();
  if (hasProp(l3, "pipeTo") && "function" == typeof l3.pipeTo)
    return l3.pipeTo(new WritableStream({ write(l4) {
      s4.node.res.write(l4);
    } })).then(() => {
      s4.node.res.end();
    });
  if (hasProp(l3, "pipe") && "function" == typeof l3.pipe)
    return new Promise((h2, y3) => {
      l3.pipe(s4.node.res), l3.on && (l3.on("end", () => {
        s4.node.res.end(), h2();
      }), l3.on("error", (s5) => {
        y3(s5);
      })), s4.node.res.on("close", () => {
        l3.abort && l3.abort();
      });
    });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(s4, l3) {
  for (const [h2, y3] of l3.headers)
    "set-cookie" === h2 ? s4.node.res.appendHeader(h2, splitCookiesString(y3)) : s4.node.res.setHeader(h2, y3);
  if (l3.status && (s4.node.res.statusCode = sanitizeStatusCode(l3.status, s4.node.res.statusCode)), l3.statusText && (s4.node.res.statusMessage = sanitizeStatusMessage(l3.statusText)), l3.redirected && s4.node.res.setHeader("location", l3.url), l3.body)
    return sendStream(s4, l3.body);
  s4.node.res.end();
}
async function proxyRequest(s4, l3, h2 = {}) {
  let y3, b2;
  Vt.has(s4.method) && (h2.streamRequest ? (y3 = getRequestWebStream(s4), b2 = "half") : y3 = await readRawBody(s4, false).catch(() => {
  }));
  const w4 = h2.fetchOptions?.method || s4.method, S2 = function(s5, ...l4) {
    const h3 = l4.filter(Boolean);
    if (0 === h3.length)
      return s5;
    const y4 = new Headers(s5);
    for (const s6 of h3)
      for (const [l5, h4] of Object.entries(s6))
        void 0 !== h4 && y4.set(l5, h4);
    return y4;
  }(getProxyRequestHeaders(s4), h2.fetchOptions?.headers, h2.headers);
  return async function(s5, l4, h3 = {}) {
    const y4 = await _getFetch(h3.fetch)(l4, { headers: h3.headers, ignoreResponseError: true, ...h3.fetchOptions });
    s5.node.res.statusCode = sanitizeStatusCode(y4.status, s5.node.res.statusCode), s5.node.res.statusMessage = sanitizeStatusMessage(y4.statusText);
    const b3 = [];
    for (const [l5, h4] of y4.headers.entries())
      "content-encoding" !== l5 && "content-length" !== l5 && ("set-cookie" !== l5 ? s5.node.res.setHeader(l5, h4) : b3.push(...splitCookiesString(h4)));
    b3.length > 0 && s5.node.res.setHeader("set-cookie", b3.map((s6) => (h3.cookieDomainRewrite && (s6 = rewriteCookieProperty(s6, h3.cookieDomainRewrite, "domain")), h3.cookiePathRewrite && (s6 = rewriteCookieProperty(s6, h3.cookiePathRewrite, "path")), s6)));
    h3.onResponse && await h3.onResponse(s5, y4);
    if (void 0 !== y4._data)
      return y4._data;
    if (s5.handled)
      return;
    if (false === h3.sendStream) {
      const l5 = new Uint8Array(await y4.arrayBuffer());
      return s5.node.res.end(l5);
    }
    if (y4.body)
      for await (const l5 of y4.body)
        s5.node.res.write(l5);
    return s5.node.res.end();
  }(s4, l3, { ...h2, fetchOptions: { method: w4, body: y3, duplex: b2, ...h2.fetchOptions, headers: S2 } });
}
function getProxyRequestHeaders(s4) {
  const l3 = /* @__PURE__ */ Object.create(null), h2 = getRequestHeaders(s4);
  for (const s5 in h2)
    Zt.has(s5) || (l3[s5] = h2[s5]);
  return l3;
}
function fetchWithEvent(s4, l3, h2, y3) {
  return _getFetch(y3?.fetch)(l3, { ...h2, context: h2?.context || s4.context, headers: { ...getProxyRequestHeaders(s4), ...h2?.headers } });
}
function _getFetch(s4) {
  if (s4)
    return s4;
  if (globalThis.fetch)
    return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(s4, l3, h2) {
  const y3 = "string" == typeof l3 ? { "*": l3 } : l3;
  return s4.replace(new RegExp(`(;\\s*${h2}=)([^;]+)`, "gi"), (s5, l4, h3) => {
    let b2;
    if (h3 in y3)
      b2 = y3[h3];
    else {
      if (!("*" in y3))
        return s5;
      b2 = y3["*"];
    }
    return b2 ? l4 + b2 : "";
  });
}
async function useSession(s4, l3) {
  const h2 = l3.name || Yt;
  await getSession(s4, l3);
  const y3 = { get id() {
    return s4.context.sessions?.[h2]?.id;
  }, get data() {
    return s4.context.sessions?.[h2]?.data || {};
  }, update: async (h3) => (await updateSession(s4, l3, h3), y3), clear: async () => (await async function(s5, l4) {
    const h3 = l4.name || Yt;
    s5.context.sessions?.[h3] && delete s5.context.sessions[h3];
    await setCookie(s5, h3, "", { ...Xt, ...l4.cookie });
  }(s4, l3), y3) };
  return y3;
}
async function getSession(s4, l3) {
  const h2 = l3.name || Yt;
  s4.context.sessions || (s4.context.sessions = /* @__PURE__ */ Object.create(null));
  const y3 = s4.context.sessions[h2];
  if (y3)
    return y3[Gt] || y3;
  const b2 = { id: "", createdAt: 0, data: /* @__PURE__ */ Object.create(null) };
  let w4;
  if (s4.context.sessions[h2] = b2, false !== l3.sessionHeader) {
    const y4 = "string" == typeof l3.sessionHeader ? l3.sessionHeader.toLowerCase() : `x-${h2.toLowerCase()}-session`, b3 = s4.node.req.headers[y4];
    "string" == typeof b3 && (w4 = b3);
  }
  if (w4 || (w4 = getCookie(s4, h2)), w4) {
    const y4 = async function(s5, l4, h3) {
      const y5 = await unseal(l4.crypto || mt, h3, l4.password, { ...bt, ttl: l4.maxAge ? 1e3 * l4.maxAge : 0, ...l4.seal });
      if (l4.maxAge) {
        if (Date.now() - (y5.createdAt || Number.NEGATIVE_INFINITY) > 1e3 * l4.maxAge)
          throw new Error("Session expired!");
      }
      return y5;
    }(0, l3, w4).catch(() => {
    }).then((l4) => (Object.assign(b2, l4), delete s4.context.sessions[h2][Gt], b2));
    s4.context.sessions[h2][Gt] = y4, await y4;
  }
  return b2.id || (b2.id = l3.generateId?.() ?? (l3.crypto || mt).randomUUID(), b2.createdAt = Date.now(), await updateSession(s4, l3)), b2;
}
async function updateSession(s4, l3, h2) {
  const y3 = l3.name || Yt, b2 = s4.context.sessions?.[y3] || await getSession(s4, l3);
  if ("function" == typeof h2 && (h2 = h2(b2.data)), h2 && Object.assign(b2.data, h2), false !== l3.cookie) {
    const h3 = await async function(s5, l4) {
      const h4 = l4.name || Yt, y4 = s5.context.sessions?.[h4] || await getSession(s5, l4), b3 = await seal(l4.crypto || mt, y4, l4.password, { ...bt, ttl: l4.maxAge ? 1e3 * l4.maxAge : 0, ...l4.seal });
      return b3;
    }(s4, l3);
    setCookie(s4, y3, h3, { ...Xt, expires: l3.maxAge ? new Date(b2.createdAt + 1e3 * l3.maxAge) : void 0, ...l3.cookie });
  }
  return b2;
}
function isEvent(s4) {
  return hasProp(s4, "__is_event__");
}
function createEvent(s4, l3) {
  return new H3Event(s4, l3);
}
function defineEventHandler(s4) {
  if ("function" == typeof s4)
    return s4.__is_handler__ = true, s4;
  const l3 = { onRequest: _normalizeArray(s4.onRequest), onBeforeResponse: _normalizeArray(s4.onBeforeResponse) }, _handler = (h2) => async function(s5, l4, h3) {
    if (h3.onRequest) {
      for (const l5 of h3.onRequest)
        if (await l5(s5), s5.handled)
          return;
    }
    const y3 = await l4(s5), b2 = { body: y3 };
    if (h3.onBeforeResponse)
      for (const l5 of h3.onBeforeResponse)
        await l5(s5, b2);
    return b2.body;
  }(h2, s4.handler, l3);
  return _handler.__is_handler__ = true, _handler.__resolve__ = s4.handler.__resolve__, _handler.__websocket__ = s4.websocket, _handler;
}
function _normalizeArray(s4) {
  return s4 ? Array.isArray(s4) ? s4 : [s4] : void 0;
}
function isEventHandler(s4) {
  return hasProp(s4, "__is_handler__");
}
function toEventHandler(s4, l3, h2) {
  return isEventHandler(s4) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", h2 && "/" !== h2 ? `
     Route: ${h2}` : "", `
     Handler: ${s4}`), s4;
}
function createApp(s4 = {}) {
  const l3 = [], h2 = function(s5, l4) {
    const h3 = l4.debug ? 2 : void 0;
    return Qt(async (y4) => {
      y4.node.req.originalUrl = y4.node.req.originalUrl || y4.node.req.url || "/";
      const b3 = y4._path || y4.node.req.url || "/";
      let w5;
      l4.onRequest && await l4.onRequest(y4);
      for (const S2 of s5) {
        if (S2.route.length > 1) {
          if (!b3.startsWith(S2.route))
            continue;
          w5 = b3.slice(S2.route.length) || "/";
        } else
          w5 = b3;
        if (S2.match && !S2.match(w5, y4))
          continue;
        y4._path = w5, y4.node.req.url = w5;
        const s6 = await S2.handler(y4), E2 = void 0 === s6 ? void 0 : await s6;
        if (void 0 !== E2) {
          const s7 = { body: E2 };
          return l4.onBeforeResponse && await l4.onBeforeResponse(y4, s7), await handleHandlerResponse(y4, s7.body, h3), void (l4.onAfterResponse && await l4.onAfterResponse(y4, s7));
        }
        if (y4.handled)
          return void (l4.onAfterResponse && await l4.onAfterResponse(y4, void 0));
      }
      if (!y4.handled)
        throw createError$1({ statusCode: 404, statusMessage: `Cannot find any path matching ${y4.path || "/"}.` });
      l4.onAfterResponse && await l4.onAfterResponse(y4, void 0);
    });
  }(l3, s4), y3 = function(s5) {
    return async (l4) => {
      let h3;
      for (const y4 of s5) {
        if ("/" === y4.route && !y4.handler.__resolve__)
          continue;
        if (!l4.startsWith(y4.route))
          continue;
        if (h3 = l4.slice(y4.route.length) || "/", y4.match && !y4.match(h3, void 0))
          continue;
        let s6 = { route: y4.route, handler: y4.handler };
        if (s6.handler.__resolve__) {
          const l5 = await s6.handler.__resolve__(h3);
          if (!l5)
            continue;
          s6 = { ...s6, ...l5, route: joinURL(s6.route || "/", l5.route || "/") };
        }
        return s6;
      }
    };
  }(l3);
  h2.__resolve__ = y3;
  const b2 = function(s5) {
    let l4;
    return () => (l4 || (l4 = s5()), l4);
  }(() => {
    return l4 = y3, { ...s4.websocket, async resolve(s5) {
      const { pathname: h3 } = parseURL(s5.url || "/"), y4 = await l4(h3);
      return y4?.handler?.__websocket__ || {};
    } };
    var l4;
  }), w4 = { use: (s5, l4, h3) => use(w4, s5, l4, h3), resolve: y3, handler: h2, stack: l3, options: s4, get websocket() {
    return b2();
  } };
  return w4;
}
function use(s4, l3, h2, y3) {
  if (Array.isArray(l3))
    for (const b2 of l3)
      use(s4, b2, h2, y3);
  else if (Array.isArray(h2))
    for (const b2 of h2)
      use(s4, l3, b2, y3);
  else
    "string" == typeof l3 ? s4.stack.push(normalizeLayer({ ...y3, route: l3, handler: h2 })) : "function" == typeof l3 ? s4.stack.push(normalizeLayer({ ...h2, handler: l3 })) : s4.stack.push(normalizeLayer({ ...l3 }));
  return s4;
}
function normalizeLayer(s4) {
  let l3 = s4.handler;
  return l3.handler && (l3 = l3.handler), s4.lazy ? l3 = lazyEventHandler(l3) : isEventHandler(l3) || (l3 = toEventHandler(l3, 0, s4.route)), { route: withoutTrailingSlash(s4.route), match: s4.match, handler: l3 };
}
function handleHandlerResponse(s4, l3, h2) {
  if (null === l3)
    return function(s5, l4) {
      if (s5.handled)
        return;
      l4 || 200 === s5.node.res.statusCode || (l4 = s5.node.res.statusCode);
      const h3 = sanitizeStatusCode(l4, 204);
      204 === h3 && s5.node.res.removeHeader("content-length"), s5.node.res.writeHead(h3), s5.node.res.end();
    }(s4);
  if (l3) {
    if (y3 = l3, "undefined" != typeof Response && y3 instanceof Response)
      return sendWebResponse(s4, l3);
    if (function(s5) {
      if (!s5 || "object" != typeof s5)
        return false;
      if ("function" == typeof s5.pipe) {
        if ("function" == typeof s5._read)
          return true;
        if ("function" == typeof s5.abort)
          return true;
      }
      return "function" == typeof s5.pipeTo;
    }(l3))
      return sendStream(s4, l3);
    if (l3.buffer)
      return send(s4, l3);
    if (l3.arrayBuffer && "function" == typeof l3.arrayBuffer)
      return l3.arrayBuffer().then((h3) => send(s4, B.from(h3), l3.type));
    if (l3 instanceof Error)
      throw createError$1(l3);
    if ("function" == typeof l3.end)
      return true;
  }
  var y3;
  const b2 = typeof l3;
  if ("string" === b2)
    return send(s4, l3, Ut.html);
  if ("object" === b2 || "boolean" === b2 || "number" === b2)
    return send(s4, JSON.stringify(l3, void 0, h2), Ut.json);
  if ("bigint" === b2)
    return send(s4, l3.toString(), Ut.json);
  throw createError$1({ statusCode: 500, statusMessage: `[h3] Cannot send ${b2} as response.` });
}
function toNodeListener(s4) {
  return async function(l3, h2) {
    const y3 = createEvent(l3, h2);
    try {
      await s4.handler(y3);
    } catch (l4) {
      const h3 = createError$1(l4);
      if (isError(l4) || (h3.unhandled = true), s4.options.onError && await s4.options.onError(h3, y3), y3.handled)
        return;
      (h3.unhandled || h3.fatal) && console.error("[h3]", h3.fatal ? "[fatal]" : "[unhandled]", h3), await function(s5, l5, h4) {
        if (s5.handled)
          return;
        const y4 = isError(l5) ? l5 : createError$1(l5), b2 = { statusCode: y4.statusCode, statusMessage: y4.statusMessage, stack: [], data: y4.data };
        if (h4 && (b2.stack = (y4.stack || "").split("\n").map((s6) => s6.trim())), s5.handled)
          return;
        setResponseStatus(s5, Number.parseInt(y4.statusCode), y4.statusMessage), s5.node.res.setHeader("content-type", Ut.json), s5.node.res.end(JSON.stringify(b2, void 0, 2));
      }(y3, h3, !!s4.options.debug);
    }
  };
}
function isPayloadMethod(s4 = "GET") {
  return tr.has(s4.toUpperCase());
}
function mergeFetchOptions(s4, l3, h2 = globalThis.Headers) {
  const y3 = { ...l3, ...s4 };
  if (l3?.params && s4?.params && (y3.params = { ...l3?.params, ...s4?.params }), l3?.query && s4?.query && (y3.query = { ...l3?.query, ...s4?.query }), l3?.headers && s4?.headers) {
    y3.headers = new h2(l3?.headers || {});
    for (const [l4, b2] of new h2(s4?.headers || {}))
      y3.headers.set(l4, b2);
  }
  return y3;
}
function createFetch$1(s4 = {}) {
  const { fetch: l3 = globalThis.fetch, Headers: h2 = globalThis.Headers, AbortController: y3 = globalThis.AbortController } = s4;
  async function onError(s5) {
    const l4 = s5.error && "AbortError" === s5.error.name && !s5.options.timeout || false;
    if (false !== s5.options.retry && !l4) {
      let l5;
      l5 = "number" == typeof s5.options.retry ? s5.options.retry : isPayloadMethod(s5.options.method) ? 0 : 1;
      const h4 = s5.response && s5.response.status || 500;
      if (l5 > 0 && (Array.isArray(s5.options.retryStatusCodes) ? s5.options.retryStatusCodes.includes(h4) : sr.has(h4))) {
        const h5 = s5.options.retryDelay || 0;
        return h5 > 0 && await new Promise((s6) => setTimeout(s6, h5)), $fetchRaw(s5.request, { ...s5.options, retry: l5 - 1 });
      }
    }
    const h3 = function(s6) {
      const l5 = s6.error?.message || s6.error?.toString() || "", h4 = s6.request?.method || s6.options?.method || "GET", y4 = s6.request?.url || String(s6.request) || "/", b2 = `[${h4}] ${JSON.stringify(y4)}`, w4 = s6.response ? `${s6.response.status} ${s6.response.statusText}` : "<no response>", S2 = new FetchError(`${b2}: ${w4}${l5 ? ` ${l5}` : ""}`, s6.error ? { cause: s6.error } : void 0);
      for (const l6 of ["request", "options", "response"])
        Object.defineProperty(S2, l6, { get: () => s6[l6] });
      for (const [l6, h5] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(S2, l6, { get: () => s6.response && s6.response[h5] });
      return S2;
    }(s5);
    throw Error.captureStackTrace && Error.captureStackTrace(h3, $fetchRaw), h3;
  }
  const $fetchRaw = async function(b2, w4 = {}) {
    const S2 = { request: b2, options: mergeFetchOptions(w4, s4.defaults, h2), response: void 0, error: void 0 };
    let E2;
    if (S2.options.method = S2.options.method?.toUpperCase(), S2.options.onRequest && await S2.options.onRequest(S2), "string" == typeof S2.request && (S2.options.baseURL && (S2.request = function(s5, l4) {
      if (isEmptyURL(l4) || hasProtocol(s5))
        return s5;
      const h3 = withoutTrailingSlash(l4);
      return s5.startsWith(h3) ? s5 : joinURL(h3, s5);
    }(S2.request, S2.options.baseURL)), (S2.options.query || S2.options.params) && (S2.request = withQuery(S2.request, { ...S2.options.params, ...S2.options.query }))), S2.options.body && isPayloadMethod(S2.options.method) && (!function(s5) {
      if (void 0 === s5)
        return false;
      const l4 = typeof s5;
      return "string" === l4 || "number" === l4 || "boolean" === l4 || null === l4 || "object" === l4 && (!!Array.isArray(s5) || !s5.buffer && (s5.constructor && "Object" === s5.constructor.name || "function" == typeof s5.toJSON));
    }(S2.options.body) ? ("pipeTo" in S2.options.body && "function" == typeof S2.options.body.pipeTo || "function" == typeof S2.options.body.pipe) && ("duplex" in S2.options || (S2.options.duplex = "half")) : (S2.options.body = "string" == typeof S2.options.body ? S2.options.body : JSON.stringify(S2.options.body), S2.options.headers = new h2(S2.options.headers || {}), S2.options.headers.has("content-type") || S2.options.headers.set("content-type", "application/json"), S2.options.headers.has("accept") || S2.options.headers.set("accept", "application/json"))), !S2.options.signal && S2.options.timeout) {
      const s5 = new y3();
      E2 = setTimeout(() => s5.abort(), S2.options.timeout), S2.options.signal = s5.signal;
    }
    try {
      S2.response = await l3(S2.request, S2.options);
    } catch (s5) {
      return S2.error = s5, S2.options.onRequestError && await S2.options.onRequestError(S2), await onError(S2);
    } finally {
      E2 && clearTimeout(E2);
    }
    if (S2.response.body && !ir.has(S2.response.status) && "HEAD" !== S2.options.method) {
      const s5 = (S2.options.parseResponse ? "json" : S2.options.responseType) || function(s6 = "") {
        if (!s6)
          return "json";
        const l4 = s6.split(";").shift() || "";
        return nr.test(l4) ? "json" : rr.has(l4) || l4.startsWith("text/") ? "text" : "blob";
      }(S2.response.headers.get("content-type") || "");
      switch (s5) {
        case "json": {
          const s6 = await S2.response.text(), l4 = S2.options.parseResponse || destr;
          S2.response._data = l4(s6);
          break;
        }
        case "stream":
          S2.response._data = S2.response.body;
          break;
        default:
          S2.response._data = await S2.response[s5]();
      }
    }
    return S2.options.onResponse && await S2.options.onResponse(S2), !S2.options.ignoreResponseError && S2.response.status >= 400 && S2.response.status < 600 ? (S2.options.onResponseError && await S2.options.onResponseError(S2), await onError(S2)) : S2.response;
  }, $fetch = async function(s5, l4) {
    return (await $fetchRaw(s5, l4))._data;
  };
  return $fetch.raw = $fetchRaw, $fetch.native = (...s5) => l3(...s5), $fetch.create = (l4 = {}) => createFetch$1({ ...s4, defaults: { ...s4.defaults, ...l4 } }), $fetch;
}
function flatHooks(s4, l3 = {}, h2) {
  for (const y3 in s4) {
    const b2 = s4[y3], w4 = h2 ? `${h2}:${y3}` : y3;
    "object" == typeof b2 && null !== b2 ? flatHooks(b2, l3, w4) : "function" == typeof b2 && (l3[w4] = b2);
  }
  return l3;
}
function serialTaskCaller(s4, l3) {
  const h2 = l3.shift(), y3 = dr(h2);
  return s4.reduce((s5, h3) => s5.then(() => y3.run(() => h3(...l3))), Promise.resolve());
}
function parallelTaskCaller(s4, l3) {
  const h2 = l3.shift(), y3 = dr(h2);
  return Promise.all(s4.map((s5) => y3.run(() => s5(...l3))));
}
function callEachWith(s4, l3) {
  for (const h2 of [...s4])
    h2(l3);
}
function klona(s4) {
  if ("object" != typeof s4)
    return s4;
  var l3, h2, y3 = Object.prototype.toString.call(s4);
  if ("[object Object]" === y3) {
    if (s4.constructor !== Object && "function" == typeof s4.constructor)
      for (l3 in h2 = new s4.constructor(), s4)
        s4.hasOwnProperty(l3) && h2[l3] !== s4[l3] && (h2[l3] = klona(s4[l3]));
    else
      for (l3 in h2 = {}, s4)
        "__proto__" === l3 ? Object.defineProperty(h2, l3, { value: klona(s4[l3]), configurable: true, enumerable: true, writable: true }) : h2[l3] = klona(s4[l3]);
    return h2;
  }
  if ("[object Array]" === y3) {
    for (l3 = s4.length, h2 = Array(l3); l3--; )
      h2[l3] = klona(s4[l3]);
    return h2;
  }
  return "[object Set]" === y3 ? (h2 = /* @__PURE__ */ new Set(), s4.forEach(function(s5) {
    h2.add(klona(s5));
  }), h2) : "[object Map]" === y3 ? (h2 = /* @__PURE__ */ new Map(), s4.forEach(function(s5, l4) {
    h2.set(klona(l4), klona(s5));
  }), h2) : "[object Date]" === y3 ? /* @__PURE__ */ new Date(+s4) : "[object RegExp]" === y3 ? ((h2 = new RegExp(s4.source, s4.flags)).lastIndex = s4.lastIndex, h2) : "[object DataView]" === y3 ? new s4.constructor(klona(s4.buffer)) : "[object ArrayBuffer]" === y3 ? s4.slice(0) : "Array]" === y3.slice(-6) ? new s4.constructor(s4) : s4;
}
function isUppercase(s4 = "") {
  if (!hr.test(s4))
    return s4 !== s4.toLowerCase();
}
function kebabCase(s4, l3) {
  return s4 ? (Array.isArray(s4) ? s4 : function(s5, l4) {
    const h2 = pr, y3 = [];
    if (!s5 || "string" != typeof s5)
      return y3;
    let b2, w4, S2 = "";
    for (const l5 of s5) {
      const s6 = h2.includes(l5);
      if (true === s6) {
        y3.push(S2), S2 = "", b2 = void 0;
        continue;
      }
      const E2 = isUppercase(l5);
      if (false === w4) {
        if (false === b2 && true === E2) {
          y3.push(S2), S2 = l5, b2 = E2;
          continue;
        }
        if (true === b2 && false === E2 && S2.length > 1) {
          const s7 = S2.at(-1);
          y3.push(S2.slice(0, Math.max(0, S2.length - 1))), S2 = s7 + l5, b2 = E2;
          continue;
        }
      }
      S2 += l5, b2 = E2, w4 = s6;
    }
    return y3.push(S2), y3;
  }(s4)).map((s5) => s5.toLowerCase()).join(l3) : "";
}
function getEnv(s4, l3) {
  const h2 = (y3 = s4, kebabCase(y3 || "", "_")).toUpperCase();
  var y3;
  return destr(le.env[l3.prefix + h2] ?? le.env[l3.altPrefix + h2]);
}
function _isObject(s4) {
  return "object" == typeof s4 && !Array.isArray(s4);
}
function useRuntimeConfig(s4) {
  return br;
}
function _deepFreeze(s4) {
  const l3 = Object.getOwnPropertyNames(s4);
  for (const h2 of l3) {
    const l4 = s4[h2];
    l4 && "object" == typeof l4 && _deepFreeze(l4);
  }
  return Object.freeze(s4);
}
function asyncCall(s4, ...l3) {
  try {
    return (h2 = s4(...l3)) && "function" == typeof h2.then ? h2 : Promise.resolve(h2);
  } catch (s5) {
    return Promise.reject(s5);
  }
  var h2;
}
function stringify(s4) {
  if (function(s5) {
    const l3 = typeof s5;
    return null === s5 || "object" !== l3 && "function" !== l3;
  }(s4))
    return String(s4);
  if (function(s5) {
    const l3 = Object.getPrototypeOf(s5);
    return !l3 || l3.isPrototypeOf(Object);
  }(s4) || Array.isArray(s4))
    return JSON.stringify(s4);
  if ("function" == typeof s4.toJSON)
    return stringify(s4.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (void 0 === typeof B)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
function normalizeKey$1(s4) {
  return s4 ? s4.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function joinKeys(...s4) {
  return normalizeKey$1(s4.join(":"));
}
function normalizeBaseKey(s4) {
  return (s4 = normalizeKey$1(s4)) ? s4 + ":" : "";
}
function createStorage(s4 = {}) {
  const l3 = { mounts: { "": s4.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = (s5) => {
    for (const h3 of l3.mountpoints)
      if (s5.startsWith(h3))
        return { base: h3, relativeKey: s5.slice(h3.length), driver: l3.mounts[h3] };
    return { base: "", relativeKey: s5, driver: l3.mounts[""] };
  }, getMounts = (s5, h3) => l3.mountpoints.filter((l4) => l4.startsWith(s5) || h3 && s5.startsWith(l4)).map((h4) => ({ relativeBase: s5.length > h4.length ? s5.slice(h4.length) : void 0, mountpoint: h4, driver: l3.mounts[h4] })), onChange = (s5, h3) => {
    if (l3.watching) {
      h3 = normalizeKey$1(h3);
      for (const y3 of l3.watchListeners)
        y3(s5, h3);
    }
  }, stopWatch = async () => {
    if (l3.watching) {
      for (const s5 in l3.unwatch)
        await l3.unwatch[s5]();
      l3.unwatch = {}, l3.watching = false;
    }
  }, runBatch = (s5, l4, h3) => {
    const y3 = /* @__PURE__ */ new Map(), getBatch = (s6) => {
      let l5 = y3.get(s6.base);
      return l5 || (l5 = { driver: s6.driver, base: s6.base, items: [] }, y3.set(s6.base, l5)), l5;
    };
    for (const h4 of s5) {
      const s6 = "string" == typeof h4, y4 = normalizeKey$1(s6 ? h4 : h4.key), b2 = s6 ? void 0 : h4.value, w4 = s6 || !h4.options ? l4 : { ...l4, ...h4.options }, S2 = getMount(y4);
      getBatch(S2).items.push({ key: y4, value: b2, relativeKey: S2.relativeKey, options: w4 });
    }
    return Promise.all([...y3.values()].map((s6) => h3(s6))).then((s6) => s6.flat());
  }, h2 = { hasItem(s5, l4 = {}) {
    s5 = normalizeKey$1(s5);
    const { relativeKey: h3, driver: y3 } = getMount(s5);
    return asyncCall(y3.hasItem, h3, l4);
  }, getItem(s5, l4 = {}) {
    s5 = normalizeKey$1(s5);
    const { relativeKey: h3, driver: y3 } = getMount(s5);
    return asyncCall(y3.getItem, h3, l4).then((s6) => destr(s6));
  }, getItems: (s5, l4) => runBatch(s5, l4, (s6) => s6.driver.getItems ? asyncCall(s6.driver.getItems, s6.items.map((s7) => ({ key: s7.relativeKey, options: s7.options })), l4).then((l5) => l5.map((l6) => ({ key: joinKeys(s6.base, l6.key), value: destr(l6.value) }))) : Promise.all(s6.items.map((l5) => asyncCall(s6.driver.getItem, l5.relativeKey, l5.options).then((s7) => ({ key: l5.key, value: destr(s7) }))))), getItemRaw(s5, l4 = {}) {
    s5 = normalizeKey$1(s5);
    const { relativeKey: h3, driver: y3 } = getMount(s5);
    return y3.getItemRaw ? asyncCall(y3.getItemRaw, h3, l4) : asyncCall(y3.getItem, h3, l4).then((s6) => function(s7) {
      return "string" != typeof s7 ? s7 : s7.startsWith(wr) ? (checkBufferSupport(), B.from(s7.slice(wr.length), "base64")) : s7;
    }(s6));
  }, async setItem(s5, l4, y3 = {}) {
    if (void 0 === l4)
      return h2.removeItem(s5);
    s5 = normalizeKey$1(s5);
    const { relativeKey: b2, driver: w4 } = getMount(s5);
    w4.setItem && (await asyncCall(w4.setItem, b2, stringify(l4), y3), w4.watch || onChange("update", s5));
  }, async setItems(s5, l4) {
    await runBatch(s5, l4, async (s6) => {
      if (s6.driver.setItems)
        return asyncCall(s6.driver.setItems, s6.items.map((s7) => ({ key: s7.relativeKey, value: stringify(s7.value), options: s7.options })), l4);
      s6.driver.setItem && await Promise.all(s6.items.map((l5) => asyncCall(s6.driver.setItem, l5.relativeKey, stringify(l5.value), l5.options)));
    });
  }, async setItemRaw(s5, l4, y3 = {}) {
    if (void 0 === l4)
      return h2.removeItem(s5, y3);
    s5 = normalizeKey$1(s5);
    const { relativeKey: b2, driver: w4 } = getMount(s5);
    if (w4.setItemRaw)
      await asyncCall(w4.setItemRaw, b2, l4, y3);
    else {
      if (!w4.setItem)
        return;
      await asyncCall(w4.setItem, b2, function(s6) {
        if ("string" == typeof s6)
          return s6;
        checkBufferSupport();
        const l5 = B.from(s6).toString("base64");
        return wr + l5;
      }(l4), y3);
    }
    w4.watch || onChange("update", s5);
  }, async removeItem(s5, l4 = {}) {
    "boolean" == typeof l4 && (l4 = { removeMeta: l4 }), s5 = normalizeKey$1(s5);
    const { relativeKey: h3, driver: y3 } = getMount(s5);
    y3.removeItem && (await asyncCall(y3.removeItem, h3, l4), (l4.removeMeta || l4.removeMata) && await asyncCall(y3.removeItem, h3 + "$", l4), y3.watch || onChange("remove", s5));
  }, async getMeta(s5, l4 = {}) {
    "boolean" == typeof l4 && (l4 = { nativeOnly: l4 }), s5 = normalizeKey$1(s5);
    const { relativeKey: h3, driver: y3 } = getMount(s5), b2 = /* @__PURE__ */ Object.create(null);
    if (y3.getMeta && Object.assign(b2, await asyncCall(y3.getMeta, h3, l4)), !l4.nativeOnly) {
      const s6 = await asyncCall(y3.getItem, h3 + "$", l4).then((s7) => destr(s7));
      s6 && "object" == typeof s6 && ("string" == typeof s6.atime && (s6.atime = new Date(s6.atime)), "string" == typeof s6.mtime && (s6.mtime = new Date(s6.mtime)), Object.assign(b2, s6));
    }
    return b2;
  }, setMeta(s5, l4, h3 = {}) {
    return this.setItem(s5 + "$", l4, h3);
  }, removeMeta(s5, l4 = {}) {
    return this.removeItem(s5 + "$", l4);
  }, async getKeys(s5, l4 = {}) {
    s5 = normalizeBaseKey(s5);
    const h3 = getMounts(s5, true);
    let y3 = [];
    const b2 = [];
    for (const s6 of h3) {
      const h4 = (await asyncCall(s6.driver.getKeys, s6.relativeBase, l4)).map((l5) => s6.mountpoint + normalizeKey$1(l5)).filter((s7) => !y3.some((l5) => s7.startsWith(l5)));
      b2.push(...h4), y3 = [s6.mountpoint, ...y3.filter((l5) => !l5.startsWith(s6.mountpoint))];
    }
    return s5 ? b2.filter((l5) => l5.startsWith(s5) && !l5.endsWith("$")) : b2.filter((s6) => !s6.endsWith("$"));
  }, async clear(s5, l4 = {}) {
    s5 = normalizeBaseKey(s5), await Promise.all(getMounts(s5, false).map(async (s6) => {
      if (s6.driver.clear)
        return asyncCall(s6.driver.clear, s6.relativeBase, l4);
      if (s6.driver.removeItem) {
        const h3 = await s6.driver.getKeys(s6.relativeBase || "", l4);
        return Promise.all(h3.map((h4) => s6.driver.removeItem(h4, l4)));
      }
    }));
  }, async dispose() {
    await Promise.all(Object.values(l3.mounts).map((s5) => dispose(s5)));
  }, watch: async (s5) => (await (async () => {
    if (!l3.watching) {
      l3.watching = true;
      for (const s6 in l3.mounts)
        l3.unwatch[s6] = await watch$1(l3.mounts[s6], onChange, s6);
    }
  })(), l3.watchListeners.push(s5), async () => {
    l3.watchListeners = l3.watchListeners.filter((l4) => l4 !== s5), 0 === l3.watchListeners.length && await stopWatch();
  }), async unwatch() {
    l3.watchListeners = [], await stopWatch();
  }, mount(s5, y3) {
    if ((s5 = normalizeBaseKey(s5)) && l3.mounts[s5])
      throw new Error(`already mounted at ${s5}`);
    return s5 && (l3.mountpoints.push(s5), l3.mountpoints.sort((s6, l4) => l4.length - s6.length)), l3.mounts[s5] = y3, l3.watching && Promise.resolve(watch$1(y3, onChange, s5)).then((h3) => {
      l3.unwatch[s5] = h3;
    }).catch(console.error), h2;
  }, async unmount(s5, h3 = true) {
    (s5 = normalizeBaseKey(s5)) && l3.mounts[s5] && (l3.watching && s5 in l3.unwatch && (l3.unwatch[s5](), delete l3.unwatch[s5]), h3 && await dispose(l3.mounts[s5]), l3.mountpoints = l3.mountpoints.filter((l4) => l4 !== s5), delete l3.mounts[s5]);
  }, getMount(s5 = "") {
    s5 = normalizeKey$1(s5) + ":";
    const l4 = getMount(s5);
    return { driver: l4.driver, base: l4.base };
  }, getMounts(s5 = "", l4 = {}) {
    s5 = normalizeKey$1(s5);
    return getMounts(s5, l4.parents).map((s6) => ({ driver: s6.driver, base: s6.mountpoint }));
  } };
  return h2;
}
function watch$1(s4, l3, h2) {
  return s4.watch ? s4.watch((s5, y3) => l3(s5, h2 + y3)) : () => {
  };
}
async function dispose(s4) {
  "function" == typeof s4.dispose && await asyncCall(s4.dispose);
}
function useStorage(s4 = "") {
  return s4 ? function(s5, l3) {
    if (!(l3 = normalizeBaseKey(l3)))
      return s5;
    const h2 = { ...s5 };
    for (const y3 of xr)
      h2[y3] = (h3 = "", ...b2) => s5[y3](l3 + h3, ...b2);
    return h2.getKeys = (h3 = "", ...y3) => s5.getKeys(l3 + h3, ...y3).then((s6) => s6.map((s7) => s7.slice(l3.length))), h2;
  }($r, s4) : $r;
}
function getKey(...s4) {
  return s4.length > 0 ? hash(s4, {}) : "";
}
function escapeKey(s4) {
  return String(s4).replace(/\W/g, "");
}
function cloneWithProxy(s4, l3) {
  return new Proxy(s4, { get: (s5, h2, y3) => h2 in l3 ? l3[h2] : Reflect.get(s5, h2, y3), set: (s5, h2, y3, b2) => h2 in l3 ? (l3[h2] = y3, true) : Reflect.set(s5, h2, y3, b2) });
}
function createRouteRulesHandler(s4) {
  return Qt((l3) => {
    const h2 = function(s5) {
      s5.context._nitro = s5.context._nitro || {}, s5.context._nitro.routeRules || (s5.context._nitro.routeRules = getRouteRulesForPath(withoutBase(s5.path.split("?")[0], useRuntimeConfig().app.baseURL)));
      return s5.context._nitro.routeRules;
    }(l3);
    if (h2.headers && setHeaders(l3, h2.headers), h2.redirect) {
      let s5 = h2.redirect.to;
      if (s5.endsWith("/**")) {
        let y3 = l3.path;
        const b2 = h2.redirect._redirectStripBase;
        b2 && (y3 = withoutBase(y3, b2)), s5 = joinURL(s5.slice(0, -3), y3);
      } else if (l3.path.includes("?")) {
        s5 = withQuery(s5, getQuery(l3.path));
      }
      return sendRedirect(l3, s5, h2.redirect.statusCode);
    }
    if (h2.proxy) {
      let y3 = h2.proxy.to;
      if (y3.endsWith("/**")) {
        let s5 = l3.path;
        const b2 = h2.proxy._proxyStripBase;
        b2 && (s5 = withoutBase(s5, b2)), y3 = joinURL(y3.slice(0, -3), s5);
      } else if (l3.path.includes("?")) {
        y3 = withQuery(y3, getQuery(l3.path));
      }
      return proxyRequest(l3, y3, { fetch: s4.localFetch, ...h2.proxy });
    }
  });
}
function getRouteRulesForPath(s4) {
  return dt({}, ...Rr.matchAll(s4).reverse());
}
function invariant(s4, l3) {
  if (!s4)
    throw new InvariantError(l3);
}
function normalizeWindowsPath(s4 = "") {
  return s4 ? s4.replace(/\\/g, "/").replace(Ur, (s5) => s5.toUpperCase()) : s4;
}
function normalizeString(s4, l3) {
  let h2 = "", y3 = 0, b2 = -1, w4 = 0, S2 = null;
  for (let E2 = 0; E2 <= s4.length; ++E2) {
    if (E2 < s4.length)
      S2 = s4[E2];
    else {
      if ("/" === S2)
        break;
      S2 = "/";
    }
    if ("/" === S2) {
      if (b2 === E2 - 1 || 1 === w4)
        ;
      else if (2 === w4) {
        if (h2.length < 2 || 2 !== y3 || "." !== h2[h2.length - 1] || "." !== h2[h2.length - 2]) {
          if (h2.length > 2) {
            const s5 = h2.lastIndexOf("/");
            -1 === s5 ? (h2 = "", y3 = 0) : (h2 = h2.slice(0, s5), y3 = h2.length - 1 - h2.lastIndexOf("/")), b2 = E2, w4 = 0;
            continue;
          }
          if (h2.length > 0) {
            h2 = "", y3 = 0, b2 = E2, w4 = 0;
            continue;
          }
        }
        l3 && (h2 += h2.length > 0 ? "/.." : "..", y3 = 2);
      } else
        h2.length > 0 ? h2 += `/${s4.slice(b2 + 1, E2)}` : h2 = s4.slice(b2 + 1, E2), y3 = E2 - b2 - 1;
      b2 = E2, w4 = 0;
    } else
      "." === S2 && -1 !== w4 ? ++w4 : w4 = -1;
  }
  return h2;
}
function virtualId(s4) {
  return `virtual:${s4}`;
}
function handlerModule(s4) {
  return s4.handler?.endsWith(".html") ? isAbsolute(s4.handler) ? s4.handler : join(s4.root, s4.handler) : `$vinxi/handler/${s4.name}`;
}
function findAssetsInViteManifest(s4, l3, h2 = /* @__PURE__ */ new Map(), y3 = []) {
  if (y3.includes(l3))
    return [];
  const b2 = h2.get(l3);
  if (b2)
    return b2;
  const w4 = s4[l3];
  if (!w4)
    return [];
  const S2 = [...w4.assets?.filter(Boolean) || [], ...w4.css?.filter(Boolean) || []];
  if (w4.imports) {
    y3.push(l3);
    for (let l4 = 0, b3 = w4.imports.length; l4 < b3; l4++)
      S2.push(...findAssetsInViteManifest(s4, w4.imports[l4], h2, y3));
    y3.pop();
  }
  S2.push(w4.file);
  const E2 = Array.from(new Set(S2));
  return h2.set(l3, E2), E2;
}
function createHtmlTagsForAssets(s4, l3, h2) {
  return h2.filter((s5) => s5.endsWith(".css") || s5.endsWith(".js") || s5.endsWith(".mjs")).map((h3) => ({ tag: "link", attrs: { href: joinURL(l3.config.server.baseURL ?? "/", s4.base, h3), key: join(l3.config.server.baseURL ?? "", s4.base, h3), ...h3.endsWith(".css") ? { rel: "stylesheet", fetchPriority: "high" } : { rel: "modulepreload" } } }));
}
function castError(s4) {
  return s4 instanceof Error ? s4 : new Error("string" == typeof s4 ? s4 : "Unknown error", { cause: s4 });
}
function handleError(s4, l3 = Gr) {
  const h2 = l3 && l3.context && l3.context[Kr], y3 = castError(s4);
  if (!h2)
    throw y3;
  try {
    for (const s5 of h2)
      s5(y3);
  } catch (s5) {
    handleError(s5, l3 && l3.owner || null);
  }
}
function createOwner() {
  const s4 = { owner: Gr, context: Gr ? Gr.context : null, owned: null, cleanups: null };
  return Gr && (Gr.owned ? Gr.owned.push(s4) : Gr.owned = [s4]), s4;
}
function createRoot(s4, l3) {
  const h2 = Gr, y3 = h2, b2 = 0 === s4.length ? Zr : { context: y3 ? y3.context : null, owner: y3, owned: null, cleanups: null };
  let w4;
  Gr = b2;
  try {
    w4 = s4(0 === s4.length ? () => {
    } : () => cleanNode(b2));
  } catch (s5) {
    handleError(s5);
  } finally {
    Gr = h2;
  }
  return w4;
}
function createSignal(s4, l3) {
  return [() => s4, (l4) => s4 = "function" == typeof l4 ? l4(s4) : l4];
}
function createMemo(s4, l3) {
  let h2;
  Gr = createOwner();
  try {
    h2 = s4(l3);
  } catch (s5) {
    handleError(s5);
  } finally {
    Gr = Gr.owner;
  }
  return () => h2;
}
function batch(s4) {
  return s4();
}
function on$2(s4, l3, h2 = {}) {
  const y3 = Array.isArray(s4), b2 = h2.defer;
  return () => {
    if (b2)
      return;
    let h3;
    if (y3) {
      h3 = [];
      for (let l4 = 0; l4 < s4.length; l4++)
        h3.push(s4[l4]());
    } else
      h3 = s4();
    return l3(h3);
  };
}
function cleanNode(s4) {
  if (s4.owned) {
    for (let l3 = 0; l3 < s4.owned.length; l3++)
      cleanNode(s4.owned[l3]);
    s4.owned = null;
  }
  if (s4.cleanups) {
    for (let l3 = 0; l3 < s4.cleanups.length; l3++)
      s4.cleanups[l3]();
    s4.cleanups = null;
  }
}
function catchError(s4, l3) {
  const h2 = createOwner();
  h2.context = { ...h2.context, [Kr]: [l3] }, Gr = h2;
  try {
    return s4();
  } catch (s5) {
    handleError(s5);
  } finally {
    Gr = Gr.owner;
  }
}
function createContext(s4) {
  const l3 = Symbol("context");
  return { id: l3, Provider: createProvider(l3), defaultValue: s4 };
}
function useContext(s4) {
  return Gr && Gr.context && void 0 !== Gr.context[s4.id] ? Gr.context[s4.id] : s4.defaultValue;
}
function getOwner() {
  return Gr;
}
function children(s4) {
  const l3 = createMemo(() => resolveChildren(s4()));
  return l3.toArray = () => {
    const s5 = l3();
    return Array.isArray(s5) ? s5 : null != s5 ? [s5] : [];
  }, l3;
}
function runWithOwner(s4, l3) {
  const h2 = Gr;
  Gr = s4;
  try {
    return l3();
  } catch (s5) {
    handleError(s5);
  } finally {
    Gr = h2;
  }
}
function resolveChildren(s4) {
  if ("function" == typeof s4 && !s4.length)
    return resolveChildren(s4());
  if (Array.isArray(s4)) {
    const l3 = [];
    for (let h2 = 0; h2 < s4.length; h2++) {
      const y3 = resolveChildren(s4[h2]);
      Array.isArray(y3) ? l3.push.apply(l3, y3) : l3.push(y3);
    }
    return l3;
  }
  return s4;
}
function createProvider(s4) {
  return function(l3) {
    return createMemo(() => (Gr.context = { ...Gr.context, [s4]: l3.value }, children(() => l3.children)));
  };
}
function resolveSSRNode$1(s4) {
  const l3 = typeof s4;
  if ("string" === l3)
    return s4;
  if (null == s4 || "boolean" === l3)
    return "";
  if (Array.isArray(s4)) {
    let l4 = {}, h2 = "";
    for (let y3 = 0, b2 = s4.length; y3 < b2; y3++)
      "object" != typeof l4 && "object" != typeof s4[y3] && (h2 += "<!--!$-->"), h2 += resolveSSRNode$1(l4 = s4[y3]);
    return h2;
  }
  return "object" === l3 ? s4.t : "function" === l3 ? resolveSSRNode$1(s4()) : String(s4);
}
function setHydrateContext(s4) {
  Xr.context = s4;
}
function createComponent(s4, l3) {
  if (Xr.context && !Xr.context.noHydrate) {
    const h2 = Xr.context;
    setHydrateContext(Xr.context ? { ...Xr.context, id: `${Xr.context.id}${Xr.context.count++}-`, count: 0 } : void 0);
    const y3 = s4(l3 || {});
    return setHydrateContext(h2), y3;
  }
  return s4(l3 || {});
}
function mergeProps(...s4) {
  const l3 = {};
  for (let h2 = 0; h2 < s4.length; h2++) {
    let y3 = s4[h2];
    if ("function" == typeof y3 && (y3 = y3()), y3) {
      const h3 = Object.getOwnPropertyDescriptors(y3);
      for (const y4 in h3)
        y4 in l3 || Object.defineProperty(l3, y4, { enumerable: true, get() {
          for (let l4 = s4.length - 1; l4 >= 0; l4--) {
            let h4, b2 = s4[l4];
            if ("function" == typeof b2 && (b2 = b2()), h4 = (b2 || {})[y4], void 0 !== h4)
              return h4;
          }
        } });
    }
  }
  return l3;
}
function Show(s4) {
  let l3;
  return s4.when ? "function" == typeof (l3 = s4.children) ? l3(s4.keyed ? s4.when : () => s4.when) : l3 : s4.fallback || "";
}
function ErrorBoundary(s4) {
  let l3, h2, y3, b2 = true;
  const w4 = Xr.context, S2 = w4.id + w4.count;
  function displayFallback() {
    cleanNode(y3), w4.serialize(S2, l3), setHydrateContext({ ...w4, count: 0 });
    const h3 = s4.fallback;
    return "function" == typeof h3 && h3.length ? h3(l3, () => {
    }) : h3;
  }
  return createMemo(() => (y3 = Gr, catchError(() => h2 = s4.children, (s5) => {
    l3 = s5, !b2 && w4.replace("e" + S2, displayFallback), b2 = true;
  }))), l3 ? displayFallback() : (b2 = false, { t: `<!--!$e${S2}-->${resolveSSRNode$1(h2)}<!--!$/e${S2}-->` });
}
function createResource(s4, l3, h2 = {}) {
  2 === arguments.length ? "object" == typeof l3 && (h2 = l3, l3 = s4, s4 = true) : 1 === arguments.length && (l3 = s4, s4 = true);
  const y3 = /* @__PURE__ */ new Set(), b2 = Xr.context.id + Xr.context.count++;
  let w4, S2, E2 = {}, $3 = h2.storage ? h2.storage(h2.initialValue)[0]() : h2.initialValue;
  if (Xr.context.async && "initial" !== h2.ssrLoadFrom && (E2 = Xr.context.resources[b2] || (Xr.context.resources[b2] = {}), E2.ref))
    return E2.data || E2.ref[0].loading || E2.ref[0].error || E2.ref[1].refetch(), E2.ref;
  const read2 = () => {
    if (S2)
      throw S2;
    const s5 = "initial" !== h2.ssrLoadFrom && Xr.context.async && "data" in Xr.context.resources[b2];
    if (!s5 && read2.loading) {
      const s6 = useContext(Jr);
      s6 && (s6.resources.set(b2, read2), y3.add(s6));
    }
    return s5 ? Xr.context.resources[b2].data : $3;
  };
  function load() {
    const E3 = Xr.context;
    if (!E3.async)
      return read2.loading = !!("function" == typeof s4 ? s4() : s4);
    if (E3.resources && b2 in E3.resources && "data" in E3.resources[b2])
      return void ($3 = E3.resources[b2].data);
    const T2 = "function" == typeof s4 ? s4() : s4;
    if (!w4) {
      if (null == T2 || false === T2)
        return;
      w4 = l3(T2, { value: $3 });
    }
    return null != w4 && "object" == typeof w4 && "then" in w4 ? (read2.loading = true, read2.state = "pending", w4 = w4.then((s5) => (read2.loading = false, read2.state = "ready", E3.resources[b2].data = s5, w4 = null, notifySuspense(y3), s5)).catch((s5) => {
      throw read2.loading = false, read2.state = "errored", read2.error = S2 = castError(s5), w4 = null, notifySuspense(y3), S2;
    }), E3.serialize && E3.serialize(b2, w4, h2.deferStream), w4) : (E3.resources[b2].data = w4, E3.serialize && E3.serialize(b2, w4), w4 = null, E3.resources[b2].data);
  }
  return read2.loading = false, read2.error = void 0, read2.state = "initialValue" in h2 ? "ready" : "unresolved", Object.defineProperty(read2, "latest", { get: () => read2() }), "initial" !== h2.ssrLoadFrom && load(), E2.ref = [read2, { refetch: load, mutate: (s5) => $3 = s5 }];
}
function lazy(s4) {
  let l3, load = (h3) => (l3 || (l3 = s4(), l3.then((s5) => l3.resolved = s5.default), h3 && (Xr.context.lazy[h3] = l3)), l3);
  const h2 = /* @__PURE__ */ new Set(), wrap = (s5) => {
    const y3 = Xr.context.id.slice(0, -1);
    let b2 = Xr.context.lazy[y3];
    if (b2 ? l3 = b2 : load(y3), l3.resolved)
      return l3.resolved(s5);
    const w4 = useContext(Jr), S2 = { loading: true, error: void 0 };
    return w4 && (w4.resources.set(y3, S2), h2.add(w4)), Xr.context.async && Xr.context.block(l3.then(() => {
      S2.loading = false, notifySuspense(h2);
    })), "";
  };
  return wrap.preload = load, wrap;
}
function suspenseComplete(s4) {
  for (const l3 of s4.resources.values())
    if (l3.loading)
      return false;
  return true;
}
function notifySuspense(s4) {
  for (const l3 of s4)
    suspenseComplete(l3) && (l3.completed(), s4.delete(l3));
}
function startTransition(s4) {
  s4();
}
function Suspense(s4) {
  let l3;
  const h2 = Xr.context, y3 = h2.id + h2.count, b2 = createOwner(), w4 = h2.suspense[y3] || (h2.suspense[y3] = { resources: /* @__PURE__ */ new Map(), completed: () => {
    const s5 = runSuspense();
    suspenseComplete(w4) && l3(resolveSSRNode$1(s5));
  } });
  function suspenseError(s5) {
    l3 && l3(void 0, s5) || runWithOwner(b2.owner, () => {
      throw s5;
    });
  }
  function runSuspense() {
    return setHydrateContext({ ...h2, count: 0 }), cleanNode(b2), runWithOwner(b2, () => createComponent(Jr.Provider, { value: w4, get children() {
      return catchError(() => s4.children, suspenseError);
    } }));
  }
  const S2 = runSuspense();
  return suspenseComplete(w4) ? (delete h2.suspense[y3], S2) : (l3 = h2.async ? h2.registerFragment(y3) : void 0, catchError(() => {
    if (h2.async) {
      setHydrateContext({ ...h2, count: 0, id: h2.id + "0-f", noHydrate: true });
      const l4 = { t: `<template id="pl-${y3}"></template>${resolveSSRNode$1(s4.fallback)}<!--pl-${y3}-->` };
      return setHydrateContext(h2), l4;
    }
    return setHydrateContext({ ...h2, count: 0, id: h2.id + "0-f" }), h2.serialize(y3, "$$f"), s4.fallback;
  }, suspenseError));
}
function mr$1(s4) {
  switch (s4) {
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
function d$1(s4) {
  let l3, h2 = "", y3 = 0;
  for (let b2 = 0, w4 = s4.length; b2 < w4; b2++)
    l3 = mr$1(s4[b2]), l3 && (h2 += s4.slice(y3, b2) + l3, y3 = b2 + 1);
  return 0 === y3 ? h2 = s4 : h2 += s4.slice(y3), h2;
}
function f$2(s4, l3) {
  if (!s4)
    throw l3;
}
function re(s4) {
  return nn.has(s4);
}
function Me(s4) {
  return f$2(re(s4), new kn(s4)), nn.get(s4);
}
function We(s4, l3) {
  for (let h2 = 0, y3 = l3.length; h2 < y3; h2++) {
    let y4 = l3[h2];
    s4.has(y4) || (s4.add(y4), y4.extends && We(s4, y4.extends));
  }
}
function c(s4) {
  if (s4) {
    let l3 = /* @__PURE__ */ new Set();
    return We(l3, s4), [...l3];
  }
}
function y$1(s4) {
  return { t: 2, i: void 0, s: s4, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function le$3(s4) {
  return s4 instanceof EvalError ? 1 : s4 instanceof RangeError ? 2 : s4 instanceof ReferenceError ? 3 : s4 instanceof SyntaxError ? 4 : s4 instanceof TypeError ? 5 : s4 instanceof URIError ? 6 : 0;
}
function T$3(s4, l3) {
  let h2 = function(s5) {
    let l4 = dn[le$3(s5)];
    return s5.name !== l4 ? { name: s5.name } : s5.constructor.name !== l4 ? { name: s5.constructor.name } : {};
  }(s4), y3 = Object.getOwnPropertyNames(s4);
  for (let b2, w4 = 0, S2 = y3.length; w4 < S2; w4++)
    b2 = y3[w4], "name" !== b2 && "message" !== b2 && ("stack" === b2 ? 4 & l3 && (h2 = h2 || {}, h2[b2] = s4[b2]) : (h2 = h2 || {}, h2[b2] = s4[b2]));
  return h2;
}
function ue$3(s4) {
  return Object.isFrozen(s4) ? 3 : Object.isSealed(s4) ? 2 : Object.isExtensible(s4) ? 0 : 1;
}
function b$1(s4) {
  return { t: 1, i: void 0, s: d$1(s4), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Qe$2(s4) {
  return { t: 4, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Ve$2(s4, l3) {
  return { t: 18, i: s4, s: d$1(Me(l3)), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function k2(s4, l3, h2) {
  return { t: 25, i: s4, s: h2, l: void 0, c: d$1(l3), m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function F$2(s4, l3) {
  return { t: 28, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [s4, l3], f: void 0, b: void 0, o: void 0 };
}
function V$5(s4, l3) {
  return { t: 30, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [s4, l3], f: void 0, b: void 0, o: void 0 };
}
function D$3(s4, l3, h2) {
  return { t: 31, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: h2, f: l3, b: void 0, o: void 0 };
}
function _$3() {
  let s4 = /* @__PURE__ */ new Set(), l3 = [], h2 = true, y3 = true;
  return { __SEROVAL_STREAM__: true, on(b2) {
    h2 && s4.add(b2);
    for (let s5 = 0, w4 = l3.length; s5 < w4; s5++) {
      let S2 = l3[s5];
      s5 !== w4 - 1 || h2 ? b2.next(S2) : y3 ? b2.return(S2) : b2.throw(S2);
    }
    return () => {
      h2 && s4.delete(b2);
    };
  }, next(y4) {
    h2 && (l3.push(y4), function(l4) {
      for (let h3 of s4.keys())
        h3.next(l4);
    }(y4));
  }, throw(b2) {
    h2 && (l3.push(b2), function(l4) {
      for (let h3 of s4.keys())
        h3.throw(l4);
    }(b2), h2 = false, y3 = false, s4.clear());
  }, return(b2) {
    h2 && (l3.push(b2), function(l4) {
      for (let h3 of s4.keys())
        h3.return(l4);
    }(b2), h2 = false, y3 = true, s4.clear());
  } };
}
function M$4(s4) {
  let l3 = [], h2 = -1, y3 = -1, b2 = s4[Symbol.iterator]();
  for (; ; )
    try {
      let s5 = b2.next();
      if (l3.push(s5.value), s5.done) {
        y3 = l3.length - 1;
        break;
      }
    } catch (s5) {
      h2 = l3.length, l3.push(s5);
    }
  return { v: l3, t: h2, d: y3 };
}
function je$1(s4) {
  let l3 = s4[0];
  return ("$" === l3 || "_" === l3 || l3 >= "A" && l3 <= "Z" || l3 >= "a" && l3 <= "z") && Bn.test(s4);
}
function Z$5(s4) {
  switch (s4.t) {
    case 0:
      return s4.s + "=" + s4.v;
    case 2:
      return s4.s + ".set(" + s4.k + "," + s4.v + ")";
    case 1:
      return s4.s + ".add(" + s4.v + ")";
    case 3:
      return s4.s + ".delete(" + s4.k + ")";
  }
}
function lr$1(s4) {
  if (s4.length) {
    let l3 = "", h2 = function(s5) {
      let l4 = [], h3 = s5[0];
      for (let y3, b2 = 1, w4 = s5.length, S2 = h3; b2 < w4; b2++)
        y3 = s5[b2], 0 === y3.t && y3.v === S2.v ? h3 = { t: 0, s: y3.s, k: void 0, v: Z$5(h3) } : 2 === y3.t && y3.s === S2.s ? h3 = { t: 2, s: Z$5(h3), k: y3.k, v: y3.v } : 1 === y3.t && y3.s === S2.s ? h3 = { t: 1, s: Z$5(h3), k: void 0, v: y3.v } : 3 === y3.t && y3.s === S2.s ? h3 = { t: 3, s: Z$5(h3), k: y3.k, v: void 0 } : (l4.push(h3), h3 = y3), S2 = y3;
      return l4.push(h3), l4;
    }(s4);
    for (let s5 = 0, y3 = h2.length; s5 < y3; s5++)
      l3 += Z$5(h2[s5]) + ",";
    return l3;
  }
}
function p$1(s4) {
  return { detail: s4.detail, bubbles: s4.bubbles, cancelable: s4.cancelable, composed: s4.composed };
}
function u(s4) {
  return { bubbles: s4.bubbles, cancelable: s4.cancelable, composed: s4.composed };
}
function f$1(s4) {
  let l3 = [];
  return s4.forEach((s5, h2) => {
    l3.push([h2, s5]);
  }), l3;
}
function m$1(s4) {
  let l3 = [];
  return s4.forEach((s5, h2) => {
    l3.push([h2, s5]);
  }), l3;
}
function g(s4) {
  let l3 = _$3(), h2 = s4.getReader();
  return async function a() {
    try {
      let s5 = await h2.read();
      s5.done ? l3.return(s5.value) : (l3.next(s5.value), await a());
    } catch (s5) {
      l3.throw(s5);
    }
  }().catch(() => {
  }), l3;
}
function z$3(s4, l3) {
  return { body: l3, cache: s4.cache, credentials: s4.credentials, headers: s4.headers, integrity: s4.integrity, keepalive: s4.keepalive, method: s4.method, mode: s4.mode, redirect: s4.redirect, referrer: s4.referrer, referrerPolicy: s4.referrerPolicy };
}
function S$2(s4) {
  return { headers: s4.headers, status: s4.status, statusText: s4.statusText };
}
function createSerializer({ onData: s4, onDone: l3, scopeId: h2, onError: y3 }) {
  return new Wn({ scopeId: h2, plugins: [Kn, Gn, Xn, ns, is, ls, fs, hs, ms, gs], globalIdentifier: Ss, disabledFeatures: xs, onData: s4, onDone: l3, onError: y3 });
}
function getLocalHeaderScript(s4) {
  return function(s5) {
    return null == s5 ? `${rn}=${rn}||[]` : `(${rn}=${rn}||{})["${d$1(s5)}"]=[]`;
  }(s4) + ";";
}
function renderToString(s4, l3 = {}) {
  const { renderId: h2 } = l3;
  let y3 = "";
  const b2 = createSerializer({ scopeId: h2, onData(s5) {
    y3 || (y3 = getLocalHeaderScript(h2)), y3 += s5;
  }, onError: l3.onError });
  Xr.context = { id: h2 || "", count: 0, suspense: {}, lazy: {}, assets: [], nonce: l3.nonce, serialize(s5, l4) {
    !Xr.context.noHydrate && b2.write(s5, l4);
  }, roots: 0, nextRoot() {
    return this.renderId + "i-" + this.roots++;
  } };
  let w4 = createRoot((l4) => (setTimeout(l4), resolveSSRNode(escape(s4()))));
  return Xr.context.noHydrate = true, b2.close(), w4 = injectAssets(Xr.context.assets, w4), y3.length && (w4 = injectScripts(w4, y3, l3.nonce)), w4;
}
function HydrationScript(s4) {
  const { nonce: l3 } = Xr.context;
  return ssr(function({ eventNames: s5 = ["click", "input"], nonce: l4 } = {}) {
    return `<script${l4 ? ` nonce="${l4}"` : ""}>window._$HY||(e=>{let t=e=>e&&e.hasAttribute&&(e.hasAttribute("data-hk")?e:t(e.host&&e.host.nodeType?e.host:e.parentNode));["${s5.join('", "')}"].forEach((o=>document.addEventListener(o,(o=>{let a=o.composedPath&&o.composedPath()[0]||o.target,s=t(a);s&&!e.completed.has(s)&&e.events.push([s,o])}))))})(_$HY={events:[],completed:new WeakSet,r:{},fe(){}});<\/script><!--xs-->`;
  }({ nonce: l3, ...s4 }));
}
function ssr(s4, ...l3) {
  if (l3.length) {
    let h2 = "";
    for (let y3 = 0; y3 < l3.length; y3++) {
      h2 += s4[y3];
      const b2 = l3[y3];
      void 0 !== b2 && (h2 += resolveSSRNode(b2));
    }
    s4 = h2 + s4[l3.length];
  }
  return { t: s4 };
}
function ssrClassList(s4) {
  if (!s4)
    return "";
  let l3 = Object.keys(s4), h2 = "";
  for (let y3 = 0, b2 = l3.length; y3 < b2; y3++) {
    const b3 = l3[y3], w4 = !!s4[b3];
    b3 && "undefined" !== b3 && w4 && (y3 && (h2 += " "), h2 += escape(b3));
  }
  return h2;
}
function ssrStyle(s4) {
  if (!s4)
    return "";
  if ("string" == typeof s4)
    return escape(s4, true);
  let l3 = "";
  const h2 = Object.keys(s4);
  for (let y3 = 0; y3 < h2.length; y3++) {
    const b2 = h2[y3], w4 = s4[b2];
    null != w4 && (y3 && (l3 += ";"), l3 += `${b2}:${escape(w4, true)}`);
  }
  return l3;
}
function ssrElement(s4, l3, h2, y3) {
  null == l3 ? l3 = {} : "function" == typeof l3 && (l3 = l3());
  const b2 = Es.test(s4), w4 = Object.keys(l3);
  let S2, E2 = `<${s4}${ssrHydrationKey()} `;
  for (let s5 = 0; s5 < w4.length; s5++) {
    const y4 = w4[s5];
    if (bs.has(y4)) {
      void 0 !== h2 || b2 || (h2 = "innerHTML" === y4 ? l3[y4] : escape(l3[y4]));
      continue;
    }
    const $3 = l3[y4];
    if ("style" === y4)
      E2 += `style="${ssrStyle($3)}"`;
    else if ("class" === y4 || "className" === y4 || "classList" === y4) {
      if (S2)
        continue;
      let s6;
      E2 += `class="${escape(((s6 = l3.class) ? s6 + " " : "") + ((s6 = l3.className) ? s6 + " " : ""), true) + ssrClassList(l3.classList)}"`, S2 = true;
    } else if (vs.has(y4)) {
      if (!$3)
        continue;
      E2 += y4;
    } else {
      if (null == $3 || "ref" === y4 || "on" === y4.slice(0, 2))
        continue;
      E2 += `${ws[y4] || escape(y4)}="${escape($3, true)}"`;
    }
    s5 !== w4.length - 1 && (E2 += " ");
  }
  return b2 ? { t: E2 + "/>" } : ("function" == typeof h2 && (h2 = h2()), { t: E2 + `>${resolveSSRNode(h2, true)}</${s4}>` });
}
function ssrAttribute(s4, l3, h2) {
  return h2 ? l3 ? " " + s4 : "" : null != l3 ? ` ${s4}="${l3}"` : "";
}
function ssrHydrationKey() {
  const s4 = function() {
    const s5 = Xr.context;
    return s5 && !s5.noHydrate && `${s5.id}${s5.count++}`;
  }();
  return s4 ? ` data-hk="${s4}"` : "";
}
function escape(s4, l3) {
  const h2 = typeof s4;
  if ("string" !== h2) {
    if (!l3 && "function" === h2)
      return escape(s4());
    if (!l3 && Array.isArray(s4)) {
      for (let l4 = 0; l4 < s4.length; l4++)
        s4[l4] = escape(s4[l4]);
      return s4;
    }
    return l3 && "boolean" === h2 ? String(s4) : s4;
  }
  const y3 = l3 ? '"' : "<", b2 = l3 ? "&quot;" : "&lt;";
  let w4 = s4.indexOf(y3), S2 = s4.indexOf("&");
  if (w4 < 0 && S2 < 0)
    return s4;
  let E2 = 0, $3 = "";
  for (; w4 >= 0 && S2 >= 0; )
    w4 < S2 ? (E2 < w4 && ($3 += s4.substring(E2, w4)), $3 += b2, E2 = w4 + 1, w4 = s4.indexOf(y3, E2)) : (E2 < S2 && ($3 += s4.substring(E2, S2)), $3 += "&amp;", E2 = S2 + 1, S2 = s4.indexOf("&", E2));
  if (w4 >= 0)
    do {
      E2 < w4 && ($3 += s4.substring(E2, w4)), $3 += b2, E2 = w4 + 1, w4 = s4.indexOf(y3, E2);
    } while (w4 >= 0);
  else
    for (; S2 >= 0; )
      E2 < S2 && ($3 += s4.substring(E2, S2)), $3 += "&amp;", E2 = S2 + 1, S2 = s4.indexOf("&", E2);
  return E2 < s4.length ? $3 + s4.substring(E2) : $3;
}
function resolveSSRNode(s4, l3) {
  const h2 = typeof s4;
  if ("string" === h2)
    return s4;
  if (null == s4 || "boolean" === h2)
    return "";
  if (Array.isArray(s4)) {
    let h3 = {}, y3 = "";
    for (let b2 = 0, w4 = s4.length; b2 < w4; b2++)
      l3 || "object" == typeof h3 || "object" == typeof s4[b2] || (y3 += "<!--!$-->"), y3 += resolveSSRNode(h3 = s4[b2]);
    return y3;
  }
  return "object" === h2 ? s4.t : "function" === h2 ? resolveSSRNode(s4()) : String(s4);
}
function Hydration(s4) {
  if (!Xr.context.noHydrate)
    return s4.children;
  const l3 = Xr.context;
  Xr.context = { ...l3, count: 0, id: `${l3.id}${l3.count++}-`, noHydrate: false };
  const h2 = s4.children;
  return Xr.context = l3, h2;
}
function NoHydration(s4) {
  return Xr.context.noHydrate = true, s4.children;
}
function queue(s4) {
  return Promise.resolve().then(s4);
}
function allSettled(s4) {
  let l3 = s4.length;
  return Promise.allSettled(s4).then(() => {
    if (s4.length !== l3)
      return allSettled(s4);
  });
}
function injectAssets(s4, l3) {
  if (!s4 || !s4.length)
    return l3;
  let h2 = "";
  for (let l4 = 0, y3 = s4.length; l4 < y3; l4++)
    h2 += s4[l4]();
  return l3.replace("</head>", h2 + "</head>");
}
function injectScripts(s4, l3, h2) {
  const y3 = `<script${h2 ? ` nonce="${h2}"` : ""}>${l3}<\/script>`, b2 = s4.indexOf("<!--xs-->");
  return b2 > -1 ? s4.slice(0, b2) + y3 + s4.slice(b2) : s4 + y3;
}
function getRequestEvent() {
  return globalThis[Is] ? globalThis[Is].getStore() || Xr.context && Xr.context.event || console.log("RequestEvent is missing. This is most likely due to accessing `getRequestEvent` non-managed async scope in a partially polyfilled environment. Try moving it above all `await` calls.") : void 0;
}
function provideRequestEvent(l3, h2) {
  return (globalThis[Is] = globalThis[Is] || new s3()).run(l3, h2);
}
function notImplementedAsync(s4) {
  const l3 = notImplemented(s4);
  return l3.__promisify__ = () => notImplemented(s4 + ".__promisify__"), l3.native = l3, l3;
}
function callbackify(s4) {
  const fnc = function(...l3) {
    const h2 = l3.pop();
    s4().catch((s5) => h2(s5)).then((s5) => h2(void 0, s5));
  };
  return fnc.__promisify__ = s4, fnc.native = fnc, fnc;
}
function createError(s4, l3, h2) {
  return new Error(`[unstorage] [${s4}] ${l3}`, h2);
}
function ignoreNotfound(s4) {
  return "ENOENT" === s4.code || "EISDIR" === s4.code ? null : s4;
}
function ignoreExists(s4) {
  return "EEXIST" === s4.code ? null : s4;
}
async function writeFile(s4, l3, h2) {
  return await ensuredir(dirname(s4)), ii.writeFile(s4, l3, h2);
}
function readFile(s4, l3) {
  return ii.readFile(s4, l3).catch(ignoreNotfound);
}
function readdir(s4) {
  return ii.readdir(s4, { withFileTypes: true }).catch(ignoreNotfound).then((s5) => s5 || []);
}
async function ensuredir(s4) {
  await ensuredir(dirname(s4)).catch(ignoreExists), await ii.mkdir(s4).catch(ignoreExists);
}
async function readdirRecursive(s4, l3) {
  if (l3 && l3(s4))
    return [];
  const h2 = await readdir(s4), y3 = [];
  return await Promise.all(h2.map(async (h3) => {
    const b2 = resolve(s4, h3.name);
    if (h3.isDirectory()) {
      const s5 = await readdirRecursive(b2, l3);
      y3.push(...s5.map((s6) => h3.name + "/" + s6));
    } else
      l3 && l3(h3.name) || y3.push(h3.name);
  })), y3;
}
async function rmRecursive(s4) {
  const l3 = await readdir(s4);
  await Promise.all(l3.map((l4) => {
    const h2 = resolve(s4, l4.name);
    return l4.isDirectory() ? rmRecursive(h2).then(() => ii.rmdir(h2)) : ii.unlink(h2);
  }));
}
function mt$3(s4) {
  let l3;
  const h2 = mi(s4), y3 = { duplex: "half", method: s4.method, headers: s4.headers };
  return s4.node.req.body instanceof ArrayBuffer ? new Request(h2, { ...y3, body: s4.node.req.body }) : new Request(h2, { ...y3, get body() {
    return l3 || (l3 = Ri(s4), l3);
  } });
}
function vt$3() {
  return xe$2("nitro-app", { asyncContext: !!globalThis.app.config.server.experimental?.asyncContext, AsyncLocalStorage: s3 }).use().event;
}
function x$2(s4) {
  return function(...l3) {
    let h2 = l3[0];
    if (function(s5) {
      return "object" == typeof s5 && (s5 instanceof H3Event || s5?.[pi] instanceof H3Event || true === s5?.__is_event__);
    }(h2))
      l3[0] = h2 instanceof H3Event || h2.__is_event__ ? h2 : h2[pi];
    else {
      if (!globalThis.app.config.server.experimental?.asyncContext)
        throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (h2 = vt$3(), !h2)
        throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      l3.unshift(h2);
    }
    return s4(...l3);
  };
}
function Tt$2(s4) {
  return { ...s4 };
}
function An$1(s4) {
  if (!s4[zi]) {
    const l3 = function(s5) {
      return { request: Ai(s5), response: Ot$1(s5), clientAddress: yi(s5), locals: {}, nativeEvent: s5 };
    }(s4);
    s4[zi] = l3;
  }
  return s4[zi];
}
function Tn$1(s4, l3) {
  for (const [h2, y3] of l3.entries())
    Ei(s4, h2, y3);
}
function Ot$1(s4) {
  return { get status() {
    return vi(s4);
  }, set status(l3) {
    gi(s4, l3);
  }, get statusText() {
    return bi(s4);
  }, set statusText(l3) {
    gi(s4, vi(s4), l3);
  }, headers: new Ci(s4) };
}
function Z$3(s4, l3, h2) {
  if ("function" != typeof s4)
    throw new Error("Export from a 'use server' module must be a function");
  return new Proxy(s4, { get: (s5, y3, b2) => "url" === y3 ? `/_server?id=${encodeURIComponent(l3)}&name=${encodeURIComponent(h2)}` : "GET" === y3 ? b2 : s5[y3], apply(y3, b2, w4) {
    const S2 = getRequestEvent();
    if (!S2)
      throw new Error("Cannot call server function outside of a request");
    const E2 = Tt$2(S2);
    return E2.locals.serverFunctionMeta = { id: l3 + "#" + h2 }, E2.serverOnly = true, provideRequestEvent(E2, () => s4.apply(b2, w4));
  } });
}
function I$2(s4, l3 = false) {
  const h2 = s4.replace(Ti, "$1");
  return h2 ? l3 || /^[?#]/.test(h2) ? h2 : "/" + h2 : "";
}
function M$2(s4, l3, h2) {
  if (Pi.test(l3))
    return;
  const y3 = I$2(s4), b2 = h2 && I$2(h2);
  let w4 = "";
  return w4 = !b2 || l3.startsWith("/") ? y3 : 0 !== b2.toLowerCase().indexOf(y3.toLowerCase()) ? y3 + b2 : b2, (w4 || "/") + I$2(l3, !w4);
}
function Ft$2(s4, l3) {
  return I$2(s4).replace(/\/*(\*.*)?$/g, "") + I$2(l3);
}
function Pe$2(s4) {
  const l3 = {};
  return s4.searchParams.forEach((s5, h2) => {
    l3[h2] = s5;
  }), l3;
}
function kt$2(s4, l3, h2) {
  const [y3, b2] = s4.split("/*", 2), w4 = y3.split("/").filter(Boolean), S2 = w4.length;
  return (s5) => {
    const y4 = s5.split("/").filter(Boolean), E2 = y4.length - S2;
    if (E2 < 0 || E2 > 0 && void 0 === b2 && !l3)
      return null;
    const $3 = { path: S2 ? "" : "/", params: {} }, c2 = (s6) => void 0 === h2 ? void 0 : h2[s6];
    for (let s6 = 0; s6 < S2; s6++) {
      const l4 = w4[s6], h3 = y4[s6], b3 = ":" === l4[0], S3 = b3 ? l4.slice(1) : l4;
      if (b3 && G$3(h3, c2(S3)))
        $3.params[S3] = h3;
      else if (b3 || !G$3(h3, l4))
        return null;
      $3.path += `/${h3}`;
    }
    if (b2) {
      const s6 = E2 ? y4.slice(-E2).join("/") : "";
      if (!G$3(s6, c2(b2)))
        return null;
      $3.params[b2] = s6;
    }
    return $3;
  };
}
function G$3(s4, l3) {
  const n5 = (l4) => 0 === l4.localeCompare(s4, void 0, { sensitivity: "base" });
  return void 0 === l3 || ("string" == typeof l3 ? n5(l3) : "function" == typeof l3 ? l3(s4) : Array.isArray(l3) ? l3.some(n5) : l3 instanceof RegExp && l3.test(s4));
}
function jt$2(s4) {
  const [l3, h2] = s4.pattern.split("/*", 2), y3 = l3.split("/").filter(Boolean);
  return y3.reduce((s5, l4) => s5 + (l4.startsWith(":") ? 2 : 3), y3.length - (void 0 === h2 ? 0 : 1));
}
function $e$2(s4) {
  const l3 = /* @__PURE__ */ new Map(), h2 = getOwner();
  return new Proxy({}, { get: (y3, b2) => (l3.has(b2) || runWithOwner(h2, () => l3.set(b2, createMemo(() => s4()[b2]))), l3.get(b2)()), getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }), ownKeys: () => Reflect.ownKeys(s4()) });
}
function Ae$2(s4) {
  let l3 = /(\/?\:[^\/]+)\?/.exec(s4);
  if (!l3)
    return [s4];
  let h2 = s4.slice(0, l3.index), y3 = s4.slice(l3.index + l3[0].length);
  const b2 = [h2, h2 += l3[1]];
  for (; l3 = /^(\/\:[^\/]+)\?/.exec(y3); )
    b2.push(h2 += l3[1]), y3 = y3.slice(l3[0].length);
  return Ae$2(y3).reduce((s5, l4) => [...s5, ...b2.map((s6) => s6 + l4)], []);
}
function Nt$2(s4, l3 = "") {
  const { component: h2, preload: y3, load: b2, children: w4, info: S2 } = s4, E2 = !w4 || Array.isArray(w4) && !w4.length, $3 = { key: s4, component: h2, preload: y3 || b2, info: S2 };
  return He$2(s4.path).reduce((h3, y4) => {
    for (const b3 of Ae$2(y4)) {
      const w5 = Ft$2(l3, b3);
      let S3 = E2 ? w5 : w5.split("/*", 1)[0];
      S3 = S3.split("/").map((s5) => s5.startsWith(":") || s5.startsWith("*") ? s5 : encodeURIComponent(s5)).join("/"), h3.push({ ...$3, originalPath: y4, pattern: S3, matcher: kt$2(S3, !E2, s4.matchFilters) });
    }
    return h3;
  }, []);
}
function Kt$2(s4, l3 = 0) {
  return { routes: s4, score: 1e4 * jt$2(s4[s4.length - 1]) - l3, matcher(l4) {
    const h2 = [];
    for (let y3 = s4.length - 1; y3 >= 0; y3--) {
      const b2 = s4[y3], w4 = b2.matcher(l4);
      if (!w4)
        return null;
      h2.unshift({ ...w4, route: b2 });
    }
    return h2;
  } };
}
function He$2(s4) {
  return Array.isArray(s4) ? s4 : [s4];
}
function Xt$2(s4, l3 = "", h2 = [], y3 = []) {
  const b2 = He$2(s4);
  for (let s5 = 0, w4 = b2.length; s5 < w4; s5++) {
    const w5 = b2[s5];
    if (w5 && "object" == typeof w5) {
      w5.hasOwnProperty("path") || (w5.path = "");
      const s6 = Nt$2(w5, l3);
      for (const l4 of s6) {
        h2.push(l4);
        const s7 = Array.isArray(w5.children) && 0 === w5.children.length;
        if (w5.children && !s7)
          Xt$2(w5.children, l4.pattern, h2, y3);
        else {
          const s8 = Kt$2([...h2], y3.length);
          y3.push(s8);
        }
        h2.pop();
      }
    }
  }
  return h2.length ? y3 : y3.sort((s5, l4) => l4.score - s5.score);
}
function J$3(s4, l3) {
  for (let h2 = 0, y3 = s4.length; h2 < y3; h2++) {
    const y4 = s4[h2].matcher(l3);
    if (y4)
      return y4;
  }
  return [];
}
function Gt$2() {
  return Fi;
}
function Ln$1(s4) {
  Mi = s4;
}
function qn$1(s4, l3, h2, y3 = {}) {
  const { signal: [b2, w4], utils: S2 = {} } = s4, E2 = S2.parsePath || ((s5) => s5), $3 = S2.renderPath || ((s5) => s5), T2 = S2.beforeLeave || function() {
    let s5 = /* @__PURE__ */ new Set(), l4 = false;
    return { subscribe: function(l5) {
      return s5.add(l5), () => s5.delete(l5);
    }, confirm: function(h3, y4) {
      if (l4)
        return !(l4 = false);
      const b3 = { to: h3, options: y4, defaultPrevented: false, preventDefault: () => b3.defaultPrevented = true };
      for (const w5 of s5)
        w5.listener({ ...b3, from: w5.location, retry: (s6) => {
          s6 && (l4 = true), w5.navigate(h3, { ...y4, resolve: false });
        } });
      return !b3.defaultPrevented;
    } };
  }(), O2 = M$2("", y3.base || "");
  if (void 0 === O2)
    throw new Error(`${O2} is not a valid base path`);
  O2 && !b2().value && w4({ value: O2, replace: true, scroll: false });
  const [B2, F2] = createSignal(false);
  let L2;
  const [U2, D3] = createSignal(b2().value), [q2, K2] = createSignal(b2().state), Y2 = function(s5, l4) {
    const h3 = new URL(ji), y4 = createMemo((l5) => {
      const y5 = s5();
      try {
        return new URL(y5, h3);
      } catch {
        return console.error(`Invalid path ${y5}`), l5;
      }
    }, h3), b3 = createMemo(() => y4().pathname), w5 = createMemo(() => y4().search, true), S3 = createMemo(() => y4().hash);
    return { get pathname() {
      return b3();
    }, get search() {
      return w5();
    }, get hash() {
      return S3();
    }, get state() {
      return l4();
    }, get key() {
      return "";
    }, query: $e$2(on$2(w5, () => Pe$2(y4()))) };
  }(U2, q2), Q2 = [], se2 = createSignal(function() {
    const s5 = getRequestEvent();
    return s5 && s5.router && s5.router.submission ? [s5.router.submission] : [];
  }()), ie2 = createMemo(() => "function" == typeof y3.transformUrl ? J$3(l3(), y3.transformUrl(Y2.pathname)) : J$3(l3(), Y2.pathname)), ae2 = $e$2(() => {
    const s5 = ie2(), l4 = {};
    for (let h3 = 0; h3 < s5.length; h3++)
      Object.assign(l4, s5[h3].params);
    return l4;
  }), le2 = { pattern: O2, path: () => O2, outlet: () => null, resolvePath: (s5) => M$2(O2, s5) };
  return createRenderEffect(on$2(b2, (s5) => ((s6, l4) => {
    l4.value === U2() && l4.state === q2() || (void 0 === L2 && F2(true), Fi = s6, L2 = l4, startTransition(() => {
      L2 === l4 && (D3(L2.value), K2(L2.state));
    }).finally(() => {
      L2 === l4 && batch(() => {
        Fi = void 0, F2(false), L2 = void 0;
      });
    }));
  })("native", s5), { defer: true })), { base: le2, location: Y2, params: ae2, isRouting: B2, renderPath: $3, parsePath: E2, navigatorFactory: function(s5) {
    return s5 = s5 || useContext(Bi) || le2, (l4, h3) => function(s6, l5, h4) {
      Yr(() => {
        if ("number" == typeof l5)
          return void (l5 && (S2.go ? S2.go(l5) : console.warn("Router integration does not support relative routing")));
        const { replace: y4, resolve: b3, scroll: E3, state: $4 } = { replace: false, resolve: true, scroll: true, ...h4 }, T3 = b3 ? s6.resolvePath(l5) : M$2("", l5);
        if (void 0 === T3)
          throw new Error(`Path '${l5}' is not a routable path`);
        if (Q2.length >= 100)
          throw new Error("Too many redirects");
        if (T3 !== U2() || $4 !== q2()) {
          const s7 = getRequestEvent();
          s7 && (s7.response = { status: 302, headers: new Headers({ Location: T3 }) }), w4({ value: T3, replace: y4, scroll: E3, state: $4 });
        }
      });
    }(s5, l4, h3);
  }, matches: ie2, beforeLeave: T2, preloadRoute: function(s5, y4 = {}) {
    const b3 = J$3(l3(), s5.pathname), w5 = Fi;
    Fi = "preload";
    for (let l4 in b3) {
      const { route: w6, params: S3 } = b3[l4];
      w6.component && w6.component.preload && w6.component.preload();
      const { preload: E3 } = w6;
      Mi = true, y4.preloadData && E3 && runWithOwner(h2(), () => E3({ params: S3, location: { pathname: s5.pathname, search: s5.search, hash: s5.hash, query: Pe$2(s5), state: null, key: "" }, intent: "preload" })), Mi = false;
    }
    Fi = w5;
  }, singleFlight: void 0 === y3.singleFlight || y3.singleFlight, submissions: se2 };
}
function In$1(s4, l3, h2, y3) {
  const { base: b2, location: w4, params: S2 } = s4, { pattern: E2, component: $3, preload: T2 } = y3().route, O2 = createMemo(() => y3().path);
  $3 && $3.preload && $3.preload(), Mi = true;
  const B2 = T2 ? T2({ params: S2, location: w4, intent: Fi || "initial" }) : void 0;
  return Mi = false, { parent: l3, pattern: E2, path: O2, outlet: () => $3 ? createComponent($3, { params: S2, location: w4, data: B2, get children() {
    return h2();
  } }) : h2(), resolvePath: (s5) => M$2(b2.path(), s5, O2()) };
}
function ee$2() {
  const s4 = getRequestEvent();
  if (!s4)
    throw new Error("Cannot find cache context");
  return (s4.router || (s4.router = {})).cache || (s4.router.cache = /* @__PURE__ */ new Map());
}
function Oe$2(s4, l3) {
  s4 && !Array.isArray(s4) && (s4 = [s4]);
  for (let h2 of Li.keys())
    (void 0 === s4 || en$1(h2, s4)) && l3(Li.get(h2));
}
function N$2(s4, l3) {
  s4.GET && (s4 = s4.GET);
  const n5 = (...h2) => {
    const y3 = ee$2(), b2 = Gt$2(), w4 = Mi, S2 = getOwner() ? Dt$2() : void 0, E2 = Date.now(), $3 = l3 + V$3(h2);
    let T2 = y3.get($3);
    {
      const s5 = getRequestEvent();
      if (s5) {
        const l4 = (s5.router || (s5.router = {})).dataOnly;
        if (l4) {
          const h3 = s5 && (s5.router.data || (s5.router.data = {}));
          if (h3 && $3 in h3)
            return h3[$3];
          if (Array.isArray(l4) && !l4.includes($3))
            return h3[$3] = void 0, Promise.resolve();
        }
      }
    }
    if (T2 && T2[0] && _s) {
      "preload" === T2[2] && "preload" !== b2 && (T2[0] = E2);
      let s5 = T2[1];
      return "preload" !== b2 && (s5 = "then" in T2[1] ? T2[1].then(g2(false), g2(true)) : g2(false)(T2[1])), w4 && "then" in s5 && s5.catch(() => {
      }), s5;
    }
    let O2 = s4(...h2);
    if (T2 ? (T2[0] = E2, T2[1] = O2, T2[2] = b2) : (y3.set($3, T2 = [E2, O2, b2, createSignal(E2)]), T2[3].count = 0), _s) {
      const s5 = getRequestEvent();
      if (s5 && s5.router.dataOnly)
        return s5.router.data[$3] = O2;
    }
    if ("preload" !== b2 && (O2 = "then" in O2 ? O2.then(g2(false), g2(true)) : g2(false)(O2)), w4 && "then" in O2 && O2.catch(() => {
    }), Xr.context && Xr.context.async && !Xr.context.noHydrate) {
      const s5 = getRequestEvent();
      (!s5 || !s5.serverOnly) && Xr.context.serialize($3, O2);
    }
    return O2;
    function g2(s5) {
      return async (l4) => {
        if (l4 instanceof Response) {
          const s6 = l4.headers.get(Ni);
          if (null !== s6) {
            if (S2 && s6.startsWith("/"))
              startTransition(() => {
                S2(s6, { replace: true });
              });
            else {
              const l5 = getRequestEvent();
              l5 && (l5.response = { status: 302, headers: new Headers({ Location: s6 }) });
            }
            return;
          }
          l4.customBody && (l4 = await l4.customBody());
        }
        if (s5)
          throw l4;
        return l4;
      };
    }
  };
  return n5.keyFor = (...s5) => l3 + V$3(s5), n5.key = l3, n5;
}
function en$1(s4, l3) {
  for (let h2 of l3)
    if (s4.startsWith(h2))
      return true;
  return false;
}
function V$3(s4) {
  return JSON.stringify(s4, (s5, l3) => function(s6) {
    let l4;
    return null != s6 && "object" == typeof s6 && (!(l4 = Object.getPrototypeOf(s6)) || l4 === Object.prototype);
  }(l3) ? Object.keys(l3).sort().reduce((s6, h2) => (s6[h2] = l3[h2], s6), {}) : l3);
}
function Un$1(s4, l3) {
  const h2 = function(s5, l4) {
    const h3 = Te$2(), y3 = createMemo(() => h3.submissions[0]().filter((h4) => h4.url === s5.toString() && !l4));
    return new Proxy([], { get: (s6, l5) => l5 === Vr ? y3() : "pending" === l5 ? y3().some((s7) => !s7.result) : y3()[l5] });
  }(s4, l3);
  return new Proxy({}, { get: (s5, l4) => 0 === h2.length && "clear" === l4 || "retry" === l4 ? () => {
  } : h2[h2.length - 1]?.[l4] });
}
function Le$1(s4, l3) {
  const h2 = s4.url || l3 || "";
  return qe$2(function(...l4) {
    const y3 = this.r, b2 = this.f, w4 = (y3.singleFlight && s4.withOptions ? s4.withOptions({ headers: { "X-Single-Flight": "true" } }) : s4)(...l4), [S2, E2] = createSignal();
    let $3;
    function c2(s5) {
      return async (l5) => {
        const h3 = await async function(s6, l6, h4) {
          let y4, b3, w5, S3;
          if (s6 instanceof Response) {
            if (s6.headers.has("X-Revalidate") && (w5 = s6.headers.get("X-Revalidate").split(",")), s6.customBody && (y4 = b3 = await s6.customBody(), s6.headers.has("X-Single-Flight") && (y4 = y4._$value, delete b3._$value, S3 = Object.keys(b3))), s6.headers.has("Location")) {
              const l7 = s6.headers.get("Location") || "/";
              l7.startsWith("http") ? window.location.href = l7 : h4(l7);
            }
          } else {
            if (l6)
              return { error: s6 };
            y4 = s6;
          }
          return Oe$2(w5, (s7) => s7[0] = 0), S3 && S3.forEach((s7) => N$2.set(s7, b3[s7])), await function(s7, l7 = true) {
            return startTransition(() => {
              const h5 = Date.now();
              Oe$2(s7, (s8) => {
                l7 && (s8[0] = 0), s8[3][1](h5);
              });
            });
          }(w5, false), null != y4 ? { data: y4 } : void 0;
        }(l5, s5, y3.navigatorFactory());
        if (!h3)
          return $3.clear();
        if (E2(h3), h3.error && !b2)
          throw h3.error;
        return h3.data;
      };
    }
    return y3.submissions[1]((b3) => [...b3, $3 = { input: l4, url: h2, get result() {
      return S2()?.data;
    }, get error() {
      return S2()?.error;
    }, get pending() {
      return !S2();
    }, clear() {
      y3.submissions[1]((s5) => s5.filter((s6) => s6.input !== l4));
    }, retry: () => (E2(void 0), s4(...l4).then(c2(), c2(true))) }]), w4.then(c2(), c2(true));
  }, h2);
}
function qe$2(s4, l3) {
  return s4.toString = () => {
    if (!l3)
      throw new Error("Client Actions need explicit names if server rendered");
    return l3;
  }, s4.with = function(...h2) {
    const y3 = new URL(l3, ji);
    return y3.searchParams.set("args", V$3(h2)), qe$2(function(...l4) {
      return s4.call(this, ...h2, ...l4);
    }, ("https://action" === y3.origin ? y3.origin : "") + y3.pathname + y3.search);
  }, s4.url = l3, s4;
}
function te$2(s4, l3 = 302) {
  let h2, y3;
  "number" == typeof l3 ? h2 = { status: l3 } : ({ revalidate: y3, ...h2 } = l3, typeof h2.status > "u" && (h2.status = 302));
  const b2 = new Headers(h2.headers);
  return b2.set("Location", s4), y3 && b2.set("X-Revalidate", y3.toString()), new Response(null, { ...h2, headers: b2 });
}
function on$1() {
  return xe$2("nitro-app", { asyncContext: !!globalThis.app.config.server.experimental?.asyncContext, AsyncLocalStorage: s3 }).use().event;
}
async function Ue() {
  await (await ne$1()).update((s4) => {
    s4.userId = void 0;
  });
}
function ne$1() {
  return qi({ password: le.env.SESSION_SECRET ?? "areallylongsecretthatyoushouldreplace" });
}
async function yn$1() {
  try {
    const s4 = (await ne$1()).data.userId;
    if (void 0 === s4)
      throw new Error("User not found");
    const l3 = await Hi.user.findUnique({ where: { id: s4 } });
    if (!l3)
      throw new Error("User not found");
    return { id: l3.id, username: l3.username };
  } catch {
    await Ue(), te$2("/login");
  }
}
async function mn$1(s4) {
  const l3 = String(s4.get("username")), h2 = String(s4.get("password")), y3 = String(s4.get("loginType"));
  let b2 = function(s5) {
    if ("string" != typeof s5 || s5.length < 3)
      return "Usernames must be at least 3 characters long";
  }(l3) || function(s5) {
    if ("string" != typeof s5 || s5.length < 6)
      return "Passwords must be at least 6 characters long";
  }(h2);
  if (b2)
    return new Error(b2);
  try {
    const s5 = await ("login" !== y3 ? async function(s6, l4) {
      if (await Hi.user.findUnique({ where: { username: s6 } }))
        throw new Error("User already exists");
      return Hi.user.create({ data: { username: s6, password: l4 } });
    }(l3, h2) : async function(s6, l4) {
      const h3 = await Hi.user.findUnique({ where: { username: s6 } });
      if (!h3 || l4 !== h3.password)
        throw new Error("Invalid login");
      return h3;
    }(l3, h2));
    await (await ne$1()).update((l4) => {
      l4.userId = s5.id;
    });
  } catch (s5) {
    return s5;
  }
  return te$2("/");
}
async function wn$1() {
  return await Ue(), te$2("/login");
}
function et$1(s4) {
  switch (s4) {
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
function f(s4) {
  let l3, h2 = "", y3 = 0;
  for (let b2 = 0, w4 = s4.length; b2 < w4; b2++)
    l3 = et$1(s4[b2]), l3 && (h2 += s4.slice(y3, b2) + l3, y3 = b2 + 1);
  return 0 === y3 ? h2 = s4 : h2 += s4.slice(y3), h2;
}
function tt$1(s4) {
  switch (s4) {
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
      return s4;
  }
}
function m3(s4) {
  return s4.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, tt$1);
}
function p(s4, l3) {
  if (!s4)
    throw l3;
}
function M$1(s4) {
  return ro.has(s4);
}
function st$1(s4) {
  return p(M$1(s4), new Ao(s4)), ro.get(s4);
}
function at$1(s4) {
  return p(function(s5) {
    return no.has(s5);
  }(s4), new zo(s4)), no.get(s4);
}
function Ie$1(s4, l3) {
  for (let h2 = 0, y3 = l3.length; h2 < y3; h2++) {
    let y4 = l3[h2];
    s4.has(y4) || (s4.add(y4), y4.extends && Ie$1(s4, y4.extends));
  }
}
function xe$1(s4) {
  if (s4) {
    let l3 = /* @__PURE__ */ new Set();
    return Ie$1(l3, s4), [...l3];
  }
}
function v(s4) {
  return { t: 2, i: void 0, s: s4, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Z$2(s4) {
  return s4 instanceof EvalError ? 1 : s4 instanceof RangeError ? 2 : s4 instanceof ReferenceError ? 3 : s4 instanceof SyntaxError ? 4 : s4 instanceof TypeError ? 5 : s4 instanceof URIError ? 6 : 0;
}
function oe(s4, l3) {
  let h2 = function(s5) {
    let l4 = lo[Z$2(s5)];
    return s5.name !== l4 ? { name: s5.name } : s5.constructor.name !== l4 ? { name: s5.constructor.name } : {};
  }(s4), y3 = Object.getOwnPropertyNames(s4);
  for (let b2, w4 = 0, S2 = y3.length; w4 < S2; w4++)
    b2 = y3[w4], "name" !== b2 && "message" !== b2 && ("stack" === b2 ? 4 & l3 && (h2 = h2 || {}, h2[b2] = s4[b2]) : (h2 = h2 || {}, h2[b2] = s4[b2]));
  return h2;
}
function Pe$1(s4) {
  return Object.isFrozen(s4) ? 3 : Object.isSealed(s4) ? 2 : Object.isExtensible(s4) ? 0 : 1;
}
function _$1(s4) {
  return { t: 1, i: void 0, s: f(s4), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function zt$1(s4) {
  return { t: 4, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function le$1(s4, l3) {
  return { t: 18, i: s4, s: f(st$1(l3)), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function ke(s4, l3, h2) {
  return { t: 25, i: s4, s: h2, l: void 0, c: f(l3), m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
}
function Fe$1(s4, l3) {
  return { t: 28, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [s4, l3], f: void 0, b: void 0, o: void 0 };
}
function Oe$1(s4, l3) {
  return { t: 30, i: void 0, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [s4, l3], f: void 0, b: void 0, o: void 0 };
}
function $e$1(s4, l3, h2) {
  return { t: 31, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: h2, f: l3, b: void 0, o: void 0 };
}
function B$2() {
  let s4, l3;
  return { promise: new Promise((h2, y3) => {
    s4 = h2, l3 = y3;
  }), resolve(l4) {
    s4(l4);
  }, reject(s5) {
    l3(s5);
  } };
}
function A() {
  let s4 = /* @__PURE__ */ new Set(), l3 = [], h2 = true, y3 = true;
  return { __SEROVAL_STREAM__: true, on(b2) {
    h2 && s4.add(b2);
    for (let s5 = 0, w4 = l3.length; s5 < w4; s5++) {
      let S2 = l3[s5];
      s5 !== w4 - 1 || h2 ? b2.next(S2) : y3 ? b2.return(S2) : b2.throw(S2);
    }
    return () => {
      h2 && s4.delete(b2);
    };
  }, next(y4) {
    h2 && (l3.push(y4), function(l4) {
      for (let h3 of s4.keys())
        h3.next(l4);
    }(y4));
  }, throw(b2) {
    h2 && (l3.push(b2), function(l4) {
      for (let h3 of s4.keys())
        h3.throw(l4);
    }(b2), h2 = false, y3 = false, s4.clear());
  }, return(b2) {
    h2 && (l3.push(b2), function(l4) {
      for (let h3 of s4.keys())
        h3.return(l4);
    }(b2), h2 = false, y3 = true, s4.clear());
  } };
}
function Gt$1(s4) {
  return () => {
    let l3 = [], h2 = [], y3 = 0, b2 = -1, w4 = false;
    function n5() {
      for (let s5 = 0, l4 = h2.length; s5 < l4; s5++)
        h2[s5].resolve({ done: true, value: void 0 });
    }
    return s4.on({ next(s5) {
      let y4 = h2.shift();
      y4 && y4.resolve({ done: false, value: s5 }), l3.push(s5);
    }, throw(s5) {
      let y4 = h2.shift();
      y4 && y4.reject(s5), n5(), b2 = l3.length, l3.push(s5), w4 = true;
    }, return(s5) {
      let y4 = h2.shift();
      y4 && y4.resolve({ done: true, value: s5 }), n5(), b2 = l3.length, l3.push(s5);
    } }), { [Symbol.asyncIterator]() {
      return this;
    }, async next() {
      if (-1 === b2) {
        let s5 = y3++;
        if (s5 >= l3.length) {
          let s6 = B$2();
          return h2.push(s6), await s6.promise;
        }
        return { done: false, value: l3[s5] };
      }
      return y3 > b2 ? { done: true, value: void 0 } : function() {
        let s5 = y3++, h3 = l3[s5];
        if (s5 !== b2)
          return { done: false, value: h3 };
        if (w4)
          throw h3;
        return { done: true, value: h3 };
      }();
    } };
  };
}
function je(s4) {
  let l3 = [], h2 = -1, y3 = -1, b2 = s4[Symbol.iterator]();
  for (; ; )
    try {
      let s5 = b2.next();
      if (l3.push(s5.value), s5.done) {
        y3 = l3.length - 1;
        break;
      }
    } catch (s5) {
      h2 = l3.length, l3.push(s5);
    }
  return { v: l3, t: h2, d: y3 };
}
function ue$1(s4, l3) {
  switch (l3) {
    case 3:
      return Object.freeze(s4);
    case 1:
      return Object.preventExtensions(s4);
    case 2:
      return Object.seal(s4);
    default:
      return s4;
  }
}
function ce(s4) {
  let l3 = s4[0];
  return ("$" === l3 || "_" === l3 || l3 >= "A" && l3 <= "Z" || l3 >= "a" && l3 <= "z") && Mo.test(s4);
}
function S$1(s4) {
  switch (s4.t) {
    case 0:
      return s4.s + "=" + s4.v;
    case 2:
      return s4.s + ".set(" + s4.k + "," + s4.v + ")";
    case 1:
      return s4.s + ".add(" + s4.v + ")";
    case 3:
      return s4.s + ".delete(" + s4.k + ")";
  }
}
function de$1(s4) {
  if (s4.length) {
    let l3 = "", h2 = function(s5) {
      let l4 = [], h3 = s5[0];
      for (let y3, b2 = 1, w4 = s5.length, S2 = h3; b2 < w4; b2++)
        y3 = s5[b2], 0 === y3.t && y3.v === S2.v ? h3 = { t: 0, s: y3.s, k: void 0, v: S$1(h3) } : 2 === y3.t && y3.s === S2.s ? h3 = { t: 2, s: S$1(h3), k: y3.k, v: y3.v } : 1 === y3.t && y3.s === S2.s ? h3 = { t: 1, s: S$1(h3), k: void 0, v: y3.v } : 3 === y3.t && y3.s === S2.s ? h3 = { t: 3, s: S$1(h3), k: y3.k, v: void 0 } : (l4.push(h3), h3 = y3), S2 = y3;
      return l4.push(h3), l4;
    }(s4);
    for (let s5 = 0, y3 = h2.length; s5 < y3; s5++)
      l3 += S$1(h2[s5]) + ",";
    return l3;
  }
}
function he$1(s4, l3 = {}) {
  let h2 = xe$1(l3.plugins);
  return new Fo({ plugins: h2, markedRefs: s4.m }).deserialize(s4.t);
}
function C2(s4) {
  return { detail: s4.detail, bubbles: s4.bubbles, cancelable: s4.cancelable, composed: s4.composed };
}
function V$2(s4) {
  return { bubbles: s4.bubbles, cancelable: s4.cancelable, composed: s4.composed };
}
function j2(s4) {
  let l3 = [];
  return s4.forEach((s5, h2) => {
    l3.push([h2, s5]);
  }), l3;
}
function T$1(s4) {
  let l3 = [];
  return s4.forEach((s5, h2) => {
    l3.push([h2, s5]);
  }), l3;
}
function fe$1(s4) {
  let l3 = A(), h2 = s4.getReader();
  return async function i2() {
    try {
      let s5 = await h2.read();
      s5.done ? l3.return(s5.value) : (l3.next(s5.value), await i2());
    } catch (s5) {
      l3.throw(s5);
    }
  }().catch(() => {
  }), l3;
}
function pe$1(s4, l3) {
  return { body: l3, cache: s4.cache, credentials: s4.credentials, headers: s4.headers, integrity: s4.integrity, keepalive: s4.keepalive, method: s4.method, mode: s4.mode, redirect: s4.redirect, referrer: s4.referrer, referrerPolicy: s4.referrerPolicy };
}
function ve(s4) {
  return { headers: s4.headers, status: s4.status, statusText: s4.statusText };
}
function me(s4, l3, h2) {
  let y3 = true;
  const b2 = l3.split("/");
  let w4 = s4.rootNode, S2 = 0;
  const E2 = [w4];
  for (const s5 of b2) {
    let l4;
    if (l4 = w4.children.get(s5))
      w4 = l4;
    else {
      const h3 = Cr(s5);
      l4 = Te$1({ type: h3, parent: w4 }), w4.children.set(s5, l4), h3 === wa.PLACEHOLDER ? (l4.paramName = "*" === s5 ? "_" + S2++ : s5.slice(1), w4.placeholderChildren.push(l4), y3 = false) : h3 === wa.WILDCARD && (w4.wildcardChildNode = l4, l4.paramName = s5.slice(3) || "_", y3 = false), E2.push(l4), w4 = l4;
    }
  }
  for (const [s5, l4] of E2.entries())
    l4.maxDepth = Math.max(E2.length - s5, l4.maxDepth || 0);
  return w4.data = h2, true === y3 && (s4.staticRoutesMap[l3] = w4), w4;
}
function Te$1(s4 = {}) {
  return { type: s4.type || wa.NORMAL, maxDepth: 0, parent: s4.parent || null, children: /* @__PURE__ */ new Map(), data: s4.data || null, paramName: s4.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function Cr(s4) {
  return s4.startsWith("**") ? wa.WILDCARD : ":" === s4[0] || "*" === s4 ? wa.PLACEHOLDER : wa.NORMAL;
}
function _r(s4, l3, h2, y3 = "default") {
  return lazy(async () => {
    {
      const h3 = (await s4.import())[y3], b2 = (await l3.inputs?.[s4.src].assets()).filter((s5) => "style" === s5.tag || "stylesheet" === s5.attrs.rel);
      return { default: (s5) => [...b2.map((s6) => function(s7, l4) {
        let { tag: h4, attrs: { key: y4, ...b3 } = { key: void 0 }, children: w4 } = s7;
        return $a[h4]({ attrs: { ...b3, nonce: l4 }, key: y4, children: w4 });
      }(s6)), createComponent(h3, s5)] };
    }
  });
}
function Br(s4) {
  const l3 = $i(s4.nativeEvent, "flash");
  if (!l3)
    return;
  let h2 = JSON.parse(l3);
  if (!h2 || !h2.result)
    return;
  const y3 = [...h2.input.slice(0, -1), new Map(h2.input[h2.input.length - 1])];
  Ii(s4.nativeEvent, "flash", "", { maxAge: 0 });
  const b2 = h2.error ? new Error(h2.result) : h2.result;
  return { input: y3, url: h2.url, pending: false, result: h2.thrown ? void 0 : b2, error: h2.thrown ? b2 : void 0 };
}
function ye(s4, l3) {
  return new ReadableStream({ start(h2) {
    !function(s5, l4) {
      let h3 = xe$1(l4.plugins), y3 = new qo({ plugins: h3, refs: l4.refs, disabledFeatures: l4.disabledFeatures, onParse(s6, b2) {
        let w4, S2 = new Ho({ plugins: h3, features: y3.features, scopeId: l4.scopeId, markedRefs: y3.marked });
        try {
          w4 = S2.serializeTop(s6);
        } catch (s7) {
          return void (l4.onError && l4.onError(s7));
        }
        l4.onSerialize(w4, b2);
      }, onError: l4.onError, onDone: l4.onDone });
      y3.start(s5);
    }(l3, { scopeId: s4, plugins: [Vo, Zo, Yo, ra, sa, ca, ua, da, pa, ya], onSerialize(l4, y3) {
      h2.enqueue(function(s5) {
        const l5 = new TextEncoder().encode(s5), h3 = l5.length, y4 = h3.toString(16), b2 = "00000000".substring(0, 8 - y4.length) + y4, w4 = new TextEncoder().encode(`;0x${b2};`), S2 = new Uint8Array(12 + h3);
        return S2.set(w4), S2.set(l5, 12), S2;
      }(y3 ? `(${function(s5) {
        return null == s5 ? `${to}=${to}||[]` : `(${to}=${to}||{})["${f(s5)}"]=[]`;
      }(s4)},${l4})` : l4));
    }, onDone() {
      h2.close();
    }, onError(s5) {
      h2.error(s5);
    } });
  } });
}
function be(s4, l3, h2, y3) {
  const b2 = new URL(l3.url), w4 = s4 instanceof Error;
  let S2 = new URL(l3.headers.get("referer")).toString(), E2 = 302;
  return s4 instanceof Response && s4.headers.has("Location") && (S2 = new URL(s4.headers.get("Location"), b2.origin + "").toString(), E2 = function(s5) {
    return s5.status && Ia.has(s5.status) ? s5.status : 302;
  }(s4)), new Response(null, { status: E2, headers: { Location: S2, ...s4 ? { "Set-Cookie": `flash=${JSON.stringify({ url: b2.pathname + encodeURIComponent(b2.search), result: w4 ? s4.message : s4, thrown: y3, error: w4, input: [...h2.slice(0, -1), [...h2[h2.length - 1].entries()]] })}; Secure; HttpOnly;` } : {} } });
}
async function ze$1(s4, l3) {
  let h2, y3 = new URL(s4.request.headers.get("referer")).toString();
  l3 instanceof Response && (l3.headers.has("X-Revalidate") && (h2 = l3.headers.get("X-Revalidate").split(",")), l3.headers.has("Location") && (y3 = new URL(l3.headers.get("Location"), new URL(s4.request.url).origin + "").toString()));
  const b2 = Tt$2(s4);
  return b2.request = new Request(y3), await provideRequestEvent(b2, async () => {
    await async function(s5) {
      const l4 = globalThis.MANIFEST.client;
      return globalThis.MANIFEST.ssr, s5.response.headers.set("Content-Type", "text/html"), Object.assign(s5, { manifest: await l4.json(), assets: [...await l4.inputs[l4.handler].assets()], router: { submission: Br(s5) }, routes: Ea.map(function e(s6) {
        return { ...s6, ...s6.$$route ? s6.$$route.require().route : void 0, info: { ...s6.$$route ? s6.$$route.require().route.info : {}, filesystem: true }, component: s6.$component && _r(s6.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: s6.children ? s6.children.map(e) : void 0 };
      }), complete: false, $islands: /* @__PURE__ */ new Set() });
    }(b2), _a || (_a = (await Promise.resolve().then(() => (init_app(), app_exports))).default), b2.router.dataOnly = h2 || true, b2.router.previousUrl = s4.request.headers.get("referer");
    try {
      renderToString(() => {
        Xr.context.event = b2, _a();
      });
    } catch (s5) {
      console.log(s5);
    }
    const y4 = b2.router.data;
    if (!y4)
      return l3;
    let w4 = false;
    for (const s5 in y4)
      void 0 === y4[s5] ? delete y4[s5] : w4 = true;
    return w4 && (l3 instanceof Response ? l3.customBody && (y4._$value = l3.customBody()) : (y4._$value = l3, l3 = new Response(null, { status: 200 })), l3.customBody = () => y4, l3.headers.set("X-Single-Flight", "true")), l3;
  });
}
function I(s4, l3 = false) {
  const h2 = s4.replace(za, "$1");
  return h2 ? l3 || /^[?#]/.test(h2) ? h2 : "/" + h2 : "";
}
function M(s4, l3, h2) {
  if (Aa.test(l3))
    return;
  const y3 = I(s4), b2 = h2 && I(h2);
  let w4 = "";
  return w4 = !b2 || l3.startsWith("/") ? y3 : 0 !== b2.toLowerCase().indexOf(y3.toLowerCase()) ? y3 + b2 : b2, (w4 || "/") + I(l3, !w4);
}
function wt$1(s4, l3) {
  return I(s4).replace(/\/*(\*.*)?$/g, "") + I(l3);
}
function Se(s4) {
  const l3 = {};
  return s4.searchParams.forEach((s5, h2) => {
    l3[h2] = s5;
  }), l3;
}
function vt$1(s4, l3, h2) {
  const [y3, b2] = s4.split("/*", 2), w4 = y3.split("/").filter(Boolean), S2 = w4.length;
  return (s5) => {
    const y4 = s5.split("/").filter(Boolean), E2 = y4.length - S2;
    if (E2 < 0 || E2 > 0 && void 0 === b2 && !l3)
      return null;
    const $3 = { path: S2 ? "" : "/", params: {} }, c2 = (s6) => void 0 === h2 ? void 0 : h2[s6];
    for (let s6 = 0; s6 < S2; s6++) {
      const l4 = w4[s6], h3 = y4[s6], b3 = ":" === l4[0], S3 = b3 ? l4.slice(1) : l4;
      if (b3 && z(h3, c2(S3)))
        $3.params[S3] = h3;
      else if (b3 || !z(h3, l4))
        return null;
      $3.path += `/${h3}`;
    }
    if (b2) {
      const s6 = E2 ? y4.slice(-E2).join("/") : "";
      if (!z(s6, c2(b2)))
        return null;
      $3.params[b2] = s6;
    }
    return $3;
  };
}
function z(s4, l3) {
  const n5 = (l4) => 0 === l4.localeCompare(s4, void 0, { sensitivity: "base" });
  return void 0 === l3 || ("string" == typeof l3 ? n5(l3) : "function" == typeof l3 ? l3(s4) : Array.isArray(l3) ? l3.some(n5) : l3 instanceof RegExp && l3.test(s4));
}
function Rt$1(s4) {
  const [l3, h2] = s4.pattern.split("/*", 2), y3 = l3.split("/").filter(Boolean);
  return y3.reduce((s5, l4) => s5 + (l4.startsWith(":") ? 2 : 3), y3.length - (void 0 === h2 ? 0 : 1));
}
function Ee(s4) {
  const l3 = /* @__PURE__ */ new Map(), h2 = getOwner();
  return new Proxy({}, { get: (y3, b2) => (l3.has(b2) || runWithOwner(h2, () => l3.set(b2, createMemo(() => s4()[b2]))), l3.get(b2)()), getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }), ownKeys: () => Reflect.ownKeys(s4()) });
}
function Ce(s4) {
  let l3 = /(\/?\:[^\/]+)\?/.exec(s4);
  if (!l3)
    return [s4];
  let h2 = s4.slice(0, l3.index), y3 = s4.slice(l3.index + l3[0].length);
  const b2 = [h2, h2 += l3[1]];
  for (; l3 = /^(\/\:[^\/]+)\?/.exec(y3); )
    b2.push(h2 += l3[1]), y3 = y3.slice(l3[0].length);
  return Ce(y3).reduce((s5, l4) => [...s5, ...b2.map((s6) => s6 + l4)], []);
}
function Ct$1(s4, l3 = "") {
  const { component: h2, preload: y3, load: b2, children: w4, info: S2 } = s4, E2 = !w4 || Array.isArray(w4) && !w4.length, $3 = { key: s4, component: h2, preload: y3 || b2, info: S2 };
  return Pe(s4.path).reduce((h3, y4) => {
    for (const b3 of Ce(y4)) {
      const w5 = wt$1(l3, b3);
      let S3 = E2 ? w5 : w5.split("/*", 1)[0];
      S3 = S3.split("/").map((s5) => s5.startsWith(":") || s5.startsWith("*") ? s5 : encodeURIComponent(s5)).join("/"), h3.push({ ...$3, originalPath: y4, pattern: S3, matcher: vt$1(S3, !E2, s4.matchFilters) });
    }
    return h3;
  }, []);
}
function _t(s4, l3 = 0) {
  return { routes: s4, score: 1e4 * Rt$1(s4[s4.length - 1]) - l3, matcher(l4) {
    const h2 = [];
    for (let y3 = s4.length - 1; y3 >= 0; y3--) {
      const b2 = s4[y3], w4 = b2.matcher(l4);
      if (!w4)
        return null;
      h2.unshift({ ...w4, route: b2 });
    }
    return h2;
  } };
}
function Pe(s4) {
  return Array.isArray(s4) ? s4 : [s4];
}
function Pt(s4, l3 = "", h2 = [], y3 = []) {
  const b2 = Pe(s4);
  for (let s5 = 0, w4 = b2.length; s5 < w4; s5++) {
    const w5 = b2[s5];
    if (w5 && "object" == typeof w5) {
      w5.hasOwnProperty("path") || (w5.path = "");
      const s6 = Ct$1(w5, l3);
      for (const l4 of s6) {
        h2.push(l4);
        const s7 = Array.isArray(w5.children) && 0 === w5.children.length;
        if (w5.children && !s7)
          Pt(w5.children, l4.pattern, h2, y3);
        else {
          const s8 = _t([...h2], y3.length);
          y3.push(s8);
        }
        h2.pop();
      }
    }
  }
  return h2.length ? y3 : y3.sort((s5, l4) => l4.score - s5.score);
}
function G$1(s4, l3) {
  for (let h2 = 0, y3 = s4.length; h2 < y3; h2++) {
    const y4 = s4[h2].matcher(l3);
    if (y4)
      return y4;
  }
  return [];
}
function At$1() {
  return ja;
}
function An(s4) {
  Oa = s4;
}
function Tn(s4, l3, h2, y3 = {}) {
  const { signal: [b2, w4], utils: S2 = {} } = s4, E2 = S2.parsePath || ((s5) => s5), $3 = S2.renderPath || ((s5) => s5), T2 = S2.beforeLeave || function() {
    let s5 = /* @__PURE__ */ new Set(), l4 = false;
    return { subscribe: function(l5) {
      return s5.add(l5), () => s5.delete(l5);
    }, confirm: function(h3, y4) {
      if (l4)
        return !(l4 = false);
      const b3 = { to: h3, options: y4, defaultPrevented: false, preventDefault: () => b3.defaultPrevented = true };
      for (const w5 of s5)
        w5.listener({ ...b3, from: w5.location, retry: (s6) => {
          s6 && (l4 = true), w5.navigate(h3, { ...y4, resolve: false });
        } });
      return !b3.defaultPrevented;
    } };
  }(), O2 = M("", y3.base || "");
  if (void 0 === O2)
    throw new Error(`${O2} is not a valid base path`);
  O2 && !b2().value && w4({ value: O2, replace: true, scroll: false });
  const [B2, F2] = createSignal(false);
  let L2;
  const [U2, D3] = createSignal(b2().value), [q2, K2] = createSignal(b2().state), Y2 = function(s5, l4) {
    const h3 = new URL(Ca), y4 = createMemo((l5) => {
      const y5 = s5();
      try {
        return new URL(y5, h3);
      } catch {
        return console.error(`Invalid path ${y5}`), l5;
      }
    }, h3), b3 = createMemo(() => y4().pathname), w5 = createMemo(() => y4().search, true), S3 = createMemo(() => y4().hash);
    return { get pathname() {
      return b3();
    }, get search() {
      return w5();
    }, get hash() {
      return S3();
    }, get state() {
      return l4();
    }, get key() {
      return "";
    }, query: Ee(on$2(w5, () => Se(y4()))) };
  }(U2, q2), Q2 = [], se2 = createSignal(function() {
    const s5 = getRequestEvent();
    return s5 && s5.router && s5.router.submission ? [s5.router.submission] : [];
  }()), ie2 = createMemo(() => "function" == typeof y3.transformUrl ? G$1(l3(), y3.transformUrl(Y2.pathname)) : G$1(l3(), Y2.pathname)), ae2 = Ee(() => {
    const s5 = ie2(), l4 = {};
    for (let h3 = 0; h3 < s5.length; h3++)
      Object.assign(l4, s5[h3].params);
    return l4;
  }), le2 = { pattern: O2, path: () => O2, outlet: () => null, resolvePath: (s5) => M(O2, s5) };
  return createRenderEffect(on$2(b2, (s5) => ((s6, l4) => {
    l4.value === U2() && l4.state === q2() || (void 0 === L2 && F2(true), ja = s6, L2 = l4, startTransition(() => {
      L2 === l4 && (D3(L2.value), K2(L2.state));
    }).finally(() => {
      L2 === l4 && batch(() => {
        ja = void 0, F2(false), L2 = void 0;
      });
    }));
  })("native", s5), { defer: true })), { base: le2, location: Y2, params: ae2, isRouting: B2, renderPath: $3, parsePath: E2, navigatorFactory: function(s5) {
    return s5 = s5 || useContext(Ta) || le2, (l4, h3) => function(s6, l5, h4) {
      Yr(() => {
        if ("number" == typeof l5)
          return void (l5 && (S2.go ? S2.go(l5) : console.warn("Router integration does not support relative routing")));
        const { replace: y4, resolve: b3, scroll: E3, state: $4 } = { replace: false, resolve: true, scroll: true, ...h4 }, T3 = b3 ? s6.resolvePath(l5) : M("", l5);
        if (void 0 === T3)
          throw new Error(`Path '${l5}' is not a routable path`);
        if (Q2.length >= 100)
          throw new Error("Too many redirects");
        if (T3 !== U2() || $4 !== q2()) {
          const s7 = getRequestEvent();
          s7 && (s7.response = { status: 302, headers: new Headers({ Location: T3 }) }), w4({ value: T3, replace: y4, scroll: E3, state: $4 });
        }
      });
    }(s5, l4, h3);
  }, matches: ie2, beforeLeave: T2, preloadRoute: function(s5, y4 = {}) {
    const b3 = G$1(l3(), s5.pathname), w5 = ja;
    ja = "preload";
    for (let l4 in b3) {
      const { route: w6, params: S3 } = b3[l4];
      w6.component && w6.component.preload && w6.component.preload();
      const { preload: E3 } = w6;
      Oa = true, y4.preloadData && E3 && runWithOwner(h2(), () => E3({ params: S3, location: { pathname: s5.pathname, search: s5.search, hash: s5.hash, query: Se(s5), state: null, key: "" }, intent: "preload" })), Oa = false;
    }
    ja = w5;
  }, singleFlight: void 0 === y3.singleFlight || y3.singleFlight, submissions: se2 };
}
function Hn(s4, l3, h2, y3) {
  const { base: b2, location: w4, params: S2 } = s4, { pattern: E2, component: $3, preload: T2 } = y3().route, O2 = createMemo(() => y3().path);
  $3 && $3.preload && $3.preload(), Oa = true;
  const B2 = T2 ? T2({ params: S2, location: w4, intent: ja || "initial" }) : void 0;
  return Oa = false, { parent: l3, pattern: E2, path: O2, outlet: () => $3 ? createComponent($3, { params: S2, location: w4, data: B2, get children() {
    return h2();
  } }) : h2(), resolvePath: (s5) => M(b2.path(), s5, O2()) };
}
function Z$1() {
  const s4 = getRequestEvent();
  if (!s4)
    throw new Error("Cannot find cache context");
  return (s4.router || (s4.router = {})).cache || (s4.router.cache = /* @__PURE__ */ new Map());
}
function $e(s4, l3) {
  s4 && !Array.isArray(s4) && (s4 = [s4]);
  for (let h2 of Fa.keys())
    (void 0 === s4 || It(h2, s4)) && l3(Fa.get(h2));
}
function N(s4, l3) {
  s4.GET && (s4 = s4.GET);
  const n5 = (...h2) => {
    const y3 = Z$1(), b2 = At$1(), w4 = Oa, S2 = getOwner() ? Et$1() : void 0, E2 = Date.now(), $3 = l3 + V$1(h2);
    let T2 = y3.get($3);
    {
      const s5 = getRequestEvent();
      if (s5) {
        const l4 = (s5.router || (s5.router = {})).dataOnly;
        if (l4) {
          const h3 = s5 && (s5.router.data || (s5.router.data = {}));
          if (h3 && $3 in h3)
            return h3[$3];
          if (Array.isArray(l4) && !l4.includes($3))
            return h3[$3] = void 0, Promise.resolve();
        }
      }
    }
    if (T2 && T2[0] && _s) {
      "preload" === T2[2] && "preload" !== b2 && (T2[0] = E2);
      let s5 = T2[1];
      return "preload" !== b2 && (s5 = "then" in T2[1] ? T2[1].then(g2(false), g2(true)) : g2(false)(T2[1])), w4 && "then" in s5 && s5.catch(() => {
      }), s5;
    }
    let O2 = s4(...h2);
    if (T2 ? (T2[0] = E2, T2[1] = O2, T2[2] = b2) : (y3.set($3, T2 = [E2, O2, b2, createSignal(E2)]), T2[3].count = 0), _s) {
      const s5 = getRequestEvent();
      if (s5 && s5.router.dataOnly)
        return s5.router.data[$3] = O2;
    }
    if ("preload" !== b2 && (O2 = "then" in O2 ? O2.then(g2(false), g2(true)) : g2(false)(O2)), w4 && "then" in O2 && O2.catch(() => {
    }), Xr.context && Xr.context.async && !Xr.context.noHydrate) {
      const s5 = getRequestEvent();
      (!s5 || !s5.serverOnly) && Xr.context.serialize($3, O2);
    }
    return O2;
    function g2(s5) {
      return async (l4) => {
        if (l4 instanceof Response) {
          const s6 = l4.headers.get(Ba);
          if (null !== s6) {
            if (S2 && s6.startsWith("/"))
              startTransition(() => {
                S2(s6, { replace: true });
              });
            else {
              const l5 = getRequestEvent();
              l5 && (l5.response = { status: 302, headers: new Headers({ Location: s6 }) });
            }
            return;
          }
          l4.customBody && (l4 = await l4.customBody());
        }
        if (s5)
          throw l4;
        return l4;
      };
    }
  };
  return n5.keyFor = (...s5) => l3 + V$1(s5), n5.key = l3, n5;
}
function It(s4, l3) {
  for (let h2 of l3)
    if (s4.startsWith(h2))
      return true;
  return false;
}
function V$1(s4) {
  return JSON.stringify(s4, (s5, l3) => function(s6) {
    let l4;
    return null != s6 && "object" == typeof s6 && (!(l4 = Object.getPrototypeOf(s6)) || l4 === Object.prototype);
  }(l3) ? Object.keys(l3).sort().reduce((s6, h2) => (s6[h2] = l3[h2], s6), {}) : l3);
}
function On(s4, l3) {
  const h2 = function(s5, l4) {
    const h3 = _e(), y3 = createMemo(() => h3.submissions[0]().filter((h4) => h4.url === s5.toString() && !l4));
    return new Proxy([], { get: (s6, l5) => l5 === Vr ? y3() : "pending" === l5 ? y3().some((s7) => !s7.result) : y3()[l5] });
  }(s4, l3);
  return new Proxy({}, { get(s5, l4) {
    var y3;
    return 0 === h2.length && "clear" === l4 || "retry" === l4 ? () => {
    } : null == (y3 = h2[h2.length - 1]) ? void 0 : y3[l4];
  } });
}
function Ae(s4, l3) {
  const h2 = s4.url || l3 || "";
  return Te(function(...l4) {
    const y3 = this.r, b2 = this.f, w4 = (y3.singleFlight && s4.withOptions ? s4.withOptions({ headers: { "X-Single-Flight": "true" } }) : s4)(...l4), [S2, E2] = createSignal();
    let $3;
    function c2(s5) {
      return async (l5) => {
        const h3 = await async function(s6, l6, h4) {
          let y4, b3, w5, S3;
          if (s6 instanceof Response) {
            if (s6.headers.has("X-Revalidate") && (w5 = s6.headers.get("X-Revalidate").split(",")), s6.customBody && (y4 = b3 = await s6.customBody(), s6.headers.has("X-Single-Flight") && (y4 = y4._$value, delete b3._$value, S3 = Object.keys(b3))), s6.headers.has("Location")) {
              const l7 = s6.headers.get("Location") || "/";
              l7.startsWith("http") ? window.location.href = l7 : h4(l7);
            }
          } else {
            if (l6)
              return { error: s6 };
            y4 = s6;
          }
          return $e(w5, (s7) => s7[0] = 0), S3 && S3.forEach((s7) => N.set(s7, b3[s7])), await function(s7, l7 = true) {
            return startTransition(() => {
              const h5 = Date.now();
              $e(s7, (s8) => {
                l7 && (s8[0] = 0), s8[3][1](h5);
              });
            });
          }(w5, false), null != y4 ? { data: y4 } : void 0;
        }(l5, s5, y3.navigatorFactory());
        if (!h3)
          return $3.clear();
        if (E2(h3), h3.error && !b2)
          throw h3.error;
        return h3.data;
      };
    }
    return y3.submissions[1]((b3) => [...b3, $3 = { input: l4, url: h2, get result() {
      var s5;
      return null == (s5 = S2()) ? void 0 : s5.data;
    }, get error() {
      var s5;
      return null == (s5 = S2()) ? void 0 : s5.error;
    }, get pending() {
      return !S2();
    }, clear() {
      y3.submissions[1]((s5) => s5.filter((s6) => s6.input !== l4));
    }, retry: () => (E2(void 0), s4(...l4).then(c2(), c2(true))) }]), w4.then(c2(), c2(true));
  }, h2);
}
function Te(s4, l3) {
  return s4.toString = () => {
    if (!l3)
      throw new Error("Client Actions need explicit names if server rendered");
    return l3;
  }, s4.with = function(...h2) {
    const y3 = new URL(l3, Ca);
    return y3.searchParams.set("args", V$1(h2)), Te(function(...l4) {
      return s4.call(this, ...h2, ...l4);
    }, ("https://action" === y3.origin ? y3.origin : "") + y3.pathname + y3.search);
  }, s4.url = l3, s4;
}
function ee(s4, l3 = 302) {
  let h2, y3;
  "number" == typeof l3 ? h2 = { status: l3 } : ({ revalidate: y3, ...h2 } = l3, typeof h2.status > "u" && (h2.status = 302));
  const b2 = new Headers(h2.headers);
  return b2.set("Location", s4), y3 && b2.set("X-Revalidate", y3.toString()), new Response(null, { ...h2, headers: b2 });
}
function Dt(s4) {
  let l3;
  const h2 = qa(s4), y3 = { duplex: "half", method: s4.method, headers: s4.headers };
  return s4.node.req.body instanceof ArrayBuffer ? new Request(h2, { ...y3, body: s4.node.req.body }) : new Request(h2, { ...y3, get body() {
    return l3 || (l3 = nc(s4), l3);
  } });
}
function Kt() {
  return He$1("nitro-app", { asyncContext: !!(null == (l3 = globalThis.app.config.server.experimental) ? void 0 : l3.asyncContext), AsyncLocalStorage: s3 }).use().event;
  var l3;
}
function R(s4) {
  return function(...l3) {
    var h2;
    let y3 = l3[0];
    if (function(s5) {
      return "object" == typeof s5 && (s5 instanceof H3Event || (null == s5 ? void 0 : s5[Da]) instanceof H3Event || true === (null == s5 ? void 0 : s5.__is_event__));
    }(y3))
      l3[0] = y3 instanceof H3Event || y3.__is_event__ ? y3 : y3[Da];
    else {
      if (!(null == (h2 = globalThis.app.config.server.experimental) ? void 0 : h2.asyncContext))
        throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (y3 = Kt(), !y3)
        throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      l3.unshift(y3);
    }
    return s4(...l3);
  };
}
function Fn(s4) {
  if (!s4[oc]) {
    const l3 = function(s5) {
      return { request: ic(s5), response: on(s5), clientAddress: Wa(s5), locals: {}, nativeEvent: s5 };
    }(s4);
    s4[oc] = l3;
  }
  return s4[oc];
}
function on(s4) {
  return { get status() {
    return Ka(s4);
  }, set status(l3) {
    Va(s4, l3);
  }, get statusText() {
    return Za(s4);
  }, set statusText(l3) {
    Va(s4, Ka(s4), l3);
  }, headers: new sn(s4) };
}
function te2(s4, l3, h2) {
  if ("function" != typeof s4)
    throw new Error("Export from a 'use server' module must be a function");
  return new Proxy(s4, { get: (s5, y3, b2) => "url" === y3 ? `/_server?id=${encodeURIComponent(l3)}&name=${encodeURIComponent(h2)}` : "GET" === y3 ? b2 : s5[y3], apply(y3, b2, w4) {
    const S2 = getRequestEvent();
    if (!S2)
      throw new Error("Cannot call server function outside of a request");
    const E2 = function(s5) {
      return { ...s5 };
    }(S2);
    return E2.locals.serverFunctionMeta = { id: l3 + "#" + h2 }, E2.serverOnly = true, provideRequestEvent(E2, () => s4.apply(b2, w4));
  } });
}
function an() {
  return He$1("nitro-app", { asyncContext: !!(null == (l3 = globalThis.app.config.server.experimental) ? void 0 : l3.asyncContext), AsyncLocalStorage: s3 }).use().event;
  var l3;
}
async function Ie() {
  await (await ne()).update((s4) => {
    s4.userId = void 0;
  });
}
function ne() {
  var s4;
  return uc({ password: null != (s4 = le.env.SESSION_SECRET) ? s4 : "areallylongsecretthatyoushouldreplace" });
}
function Fe(s4) {
  const l3 = s4.routerState.location, h2 = s4.routerState.params, y3 = createMemo(() => s4.preload && Yr(() => {
    An(true), s4.preload({ params: h2, location: l3, intent: At$1() || "initial" }), An(false);
  }));
  return createComponent(Show, { get when() {
    return s4.root;
  }, keyed: true, get fallback() {
    return s4.children;
  }, children: (b2) => createComponent(b2, { params: h2, location: l3, get data() {
    return y3();
  }, get children() {
    return s4.children;
  } }) });
}
function qe(s4) {
  {
    const l4 = getRequestEvent();
    if (l4 && l4.router && l4.router.dataOnly)
      return void function(s5, l5, h3) {
        const y4 = new URL(s5.request.url), b2 = G$1(h3, new URL(s5.router.previousUrl || s5.request.url).pathname), w4 = G$1(h3, y4.pathname);
        for (let h4 = 0; h4 < w4.length; h4++) {
          (!b2[h4] || w4[h4].route !== b2[h4].route) && (s5.router.dataOnly = true);
          const { route: y5, params: S2 } = w4[h4];
          y5.preload && y5.preload({ params: S2, location: l5.location, intent: "preload" });
        }
      }(l4, s4.routerState, s4.branches);
    l4 && ((l4.router || (l4.router = {})).matches || (l4.router.matches = s4.routerState.matches().map(({ route: s5, path: l5, params: h3 }) => ({ path: s5.originalPath, pattern: s5.pattern, match: l5, params: h3, info: s5.info }))));
  }
  const l3 = [];
  let h2;
  const y3 = createMemo(on$2(s4.routerState.matches, (b2, w4, S2) => {
    let E2 = w4 && b2.length === w4.length;
    const $3 = [];
    for (let h3 = 0, T2 = b2.length; h3 < T2; h3++) {
      const T3 = w4 && w4[h3], O2 = b2[h3];
      S2 && T3 && O2.route.key === T3.route.key ? $3[h3] = S2[h3] : (E2 = false, l3[h3] && l3[h3](), createRoot((b3) => {
        l3[h3] = b3, $3[h3] = Hn(s4.routerState, $3[h3 - 1] || s4.routerState.base, H(() => y3()[h3 + 1]), () => s4.routerState.matches()[h3]);
      }));
    }
    return l3.splice(b2.length).forEach((s5) => s5()), S2 && E2 ? S2 : (h2 = $3[0], $3);
  }));
  return H(() => y3() && h2)();
}
function Ke(s4) {
  let l3;
  const h2 = s4.url || (l3 = getRequestEvent()) && function(s5) {
    const l4 = new URL(s5);
    return l4.pathname + l4.search;
  }(l3.request.url) || "", y3 = { value: s4.transformUrl ? s4.transformUrl(h2) : h2 };
  return J({ signal: [() => y3, (s5) => Object.assign(y3, s5)] })(s4);
}
function Ve(s4) {
  return Ke(s4);
}
function P(s4, l3) {
  let { tag: h2, attrs: { key: y3, ...b2 } = { key: void 0 }, children: w4 } = s4;
  return pc[h2]({ attrs: { ...b2, nonce: l3 }, key: y3, children: w4 });
}
function Ze(s4, l3, h2, y3 = "default") {
  return lazy(async () => {
    var h3;
    {
      const b2 = (await s4.import())[y3], w4 = (await (null == (h3 = l3.inputs) ? void 0 : h3[s4.src].assets())).filter((s5) => "style" === s5.tag || "stylesheet" === s5.attrs.rel);
      return { default: (s5) => [...w4.map((s6) => P(s6)), createComponent(b2, s5)] };
    }
  });
}
function _(s4, l3, h2) {
  let y3 = true;
  const b2 = l3.split("/");
  let w4 = s4.rootNode, S2 = 0;
  const E2 = [w4];
  for (const s5 of b2) {
    let l4;
    if (l4 = w4.children.get(s5))
      w4 = l4;
    else {
      const h3 = nt2(s5);
      l4 = V({ type: h3, parent: w4 }), w4.children.set(s5, l4), h3 === mc.PLACEHOLDER ? (l4.paramName = "*" === s5 ? "_" + S2++ : s5.slice(1), w4.placeholderChildren.push(l4), y3 = false) : h3 === mc.WILDCARD && (w4.wildcardChildNode = l4, l4.paramName = s5.slice(3) || "_", y3 = false), E2.push(l4), w4 = l4;
    }
  }
  for (const [s5, l4] of E2.entries())
    l4.maxDepth = Math.max(E2.length - s5, l4.maxDepth || 0);
  return w4.data = h2, true === y3 && (s4.staticRoutesMap[l3] = w4), w4;
}
function V(s4 = {}) {
  return { type: s4.type || mc.NORMAL, maxDepth: 0, parent: s4.parent || null, children: /* @__PURE__ */ new Map(), data: s4.data || null, paramName: s4.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function nt2(s4) {
  return s4.startsWith("**") ? mc.WILDCARD : ":" === s4[0] || "*" === s4 ? mc.PLACEHOLDER : mc.NORMAL;
}
function ft2() {
  return createComponent(Ve, { root: (s4) => [ssr(wc, ssrHydrationKey()), ssr(xc, ssrHydrationKey()), createComponent(Suspense, { get children() {
    return s4.children;
  } })], get children() {
    return createComponent(ut, {});
  } });
}
function Z(s4, l3, h2 = []) {
  for (let y3 = 0; y3 < l3.length; y3++) {
    const b2 = l3[y3];
    if (b2.path !== s4[0].path)
      continue;
    let w4 = [...h2, b2];
    if (b2.children) {
      const l4 = s4.slice(1);
      if (0 === l4.length || (w4 = Z(l4, b2.children, w4), !w4))
        continue;
    }
    return w4;
  }
}
function Et2(s4) {
  const l3 = getRequestEvent(), h2 = l3.nonce;
  let y3 = [];
  return Promise.resolve().then(async () => {
    let s5 = [];
    if (l3.router && l3.router.matches) {
      const h3 = [...l3.router.matches];
      for (; h3.length && (!h3[0].info || !h3[0].info.filesystem); )
        h3.shift();
      const y4 = h3.length && Z(h3, l3.routes);
      if (y4) {
        const l4 = globalThis.MANIFEST.client.inputs;
        for (let h4 = 0; h4 < y4.length; h4++) {
          const b2 = l4[y4[h4].$component.src];
          s5.push(b2.assets());
        }
      }
    }
    y3 = await Promise.all(s5).then((s6) => [...new Map(s6.flat().map((s7) => [s7.attrs.key, s7])).values()].filter((s7) => "modulepreload" === s7.attrs.rel && !l3.assets.find((l4) => l4.attrs.key === s7.attrs.key)));
  }), function(s5) {
    Xr.context.assets.push(() => resolveSSRNode(s5()));
  }(() => y3.length ? y3.map((s5) => P(s5)) : void 0), createComponent(NoHydration, { get children() {
    return [Rc, createComponent(wt, { get children() {
      return createComponent(s4.document, { get assets() {
        return [createComponent(HydrationScript, {}), l3.assets.map((s5) => P(s5, h2))];
      }, get scripts() {
        return h2 ? [ssr($c, ssrHydrationKey() + ssrAttribute("nonce", escape(h2, true), false), `window.manifest = ${JSON.stringify(l3.manifest)}`), ssr(Ic, ssrHydrationKey(), ssrAttribute("nonce", escape(h2, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr($c, ssrHydrationKey(), `window.manifest = ${JSON.stringify(l3.manifest)}`), ssr(_c, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
      }, get children() {
        return createComponent(Hydration, { get children() {
          return createComponent(gt, { get children() {
            return createComponent(ft2, {});
          } });
        } });
      } });
    } })];
  } });
}
function St(s4) {
  const l3 = ec(s4.nativeEvent, "flash");
  if (!l3)
    return;
  let h2 = JSON.parse(l3);
  if (!h2 || !h2.result)
    return;
  const y3 = [...h2.input.slice(0, -1), new Map(h2.input[h2.input.length - 1])];
  tc(s4.nativeEvent, "flash", "", { maxAge: 0 });
  const b2 = h2.error ? new Error(h2.result) : h2.result;
  return { input: y3, url: h2.url, pending: false, result: h2.thrown ? void 0 : b2, error: h2.thrown ? b2 : void 0 };
}
async function $t(s4) {
  const l3 = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, s4.response.headers.set("Content-Type", "text/html"), Object.assign(s4, { manifest: await l3.json(), assets: [...await l3.inputs[l3.handler].assets()], router: { submission: St(s4) }, routes: vc.map(function e(s5) {
    return { ...s5, ...s5.$$route ? s5.$$route.require().route : void 0, info: { ...s5.$$route ? s5.$$route.require().route.info : {}, filesystem: true }, component: s5.$component && Ze(s5.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: s5.children ? s5.children.map(e) : void 0 };
  }), complete: false, $islands: /* @__PURE__ */ new Set() });
}
function x(s4) {
  return s4.status && kc.has(s4.status) ? s4.status : 302;
}
function Ct(s4, l3, h2 = {}) {
  return Qt({ handler: (y3) => {
    const b2 = Fn(y3);
    return provideRequestEvent(b2, async () => {
      const w4 = function(s5, l4) {
        const h3 = bc.lookup(s5);
        if (h3 && h3.route) {
          const s6 = h3.route[`$${l4}`];
          return void 0 === s6 ? void 0 : { handler: s6, params: h3.params };
        }
      }(new URL(b2.request.url).pathname, b2.request.method);
      if (w4) {
        const s5 = (await w4.handler.import())[b2.request.method];
        b2.params = w4.params || {}, Xr.context = { event: b2 };
        const l4 = await s5(b2);
        if (void 0 !== l4)
          return l4;
        if ("GET" !== b2.request.method)
          throw new Error(`API handler for ${b2.request.method} "${b2.request.url}" did not return a response.`);
      }
      const S2 = await l3(b2), E2 = "function" == typeof h2 ? await h2(S2) : { ...h2 }, $3 = E2.mode || "stream";
      if (E2.nonce && (S2.nonce = E2.nonce), "sync" === $3) {
        const l4 = renderToString(() => (Xr.context.event = S2, s4(S2)), E2);
        if (S2.complete = true, S2.response && S2.response.headers.get("Location")) {
          const s5 = x(S2.response);
          return Qa(y3, S2.response.headers.get("Location"), s5);
        }
        return l4;
      }
      if (E2.onCompleteAll) {
        const s5 = E2.onCompleteAll;
        E2.onCompleteAll = (l4) => {
          G(S2)(l4), s5(l4);
        };
      } else
        E2.onCompleteAll = G(S2);
      if (E2.onCompleteShell) {
        const s5 = E2.onCompleteShell;
        E2.onCompleteShell = (l4) => {
          W(S2, y3)(), s5(l4);
        };
      } else
        E2.onCompleteShell = W(S2, y3);
      const T2 = function(s5, l4 = {}) {
        let h3, { nonce: y4, onCompleteShell: b3, onCompleteAll: w5, renderId: S3, noScripts: E3 } = l4;
        const $4 = [], pushTask = (s6) => {
          E3 || (U2 || D3 || (U2 = getLocalHeaderScript(S3)), U2 += s6 + ";", !Q2 && D3 && (Q2 = setTimeout(writeTasks)));
        }, T3 = createSerializer({ scopeId: l4.renderId, onData: pushTask, onDone: () => {
          writeTasks(), doShell(), w5 && w5({ write(s6) {
            !q2 && se2.write(s6);
          } }), F2 && F2.end(), q2 = true, D3 && h3();
        }, onError: l4.onError }), flushEnd = () => {
          O3.size || queue(() => queue(() => T3.flush()));
        }, O3 = /* @__PURE__ */ new Map(), writeTasks = () => {
          U2.length && !q2 && D3 && (se2.write(`<script${y4 ? ` nonce="${y4}"` : ""}>${U2}<\/script>`), U2 = ""), Q2 && clearTimeout(Q2), Q2 = null;
        };
        let B3, F2, L2 = "", U2 = "", D3 = false, q2 = false, K2 = false, Y2 = false, Q2 = null, se2 = { write(s6) {
          L2 += s6;
        } };
        Xr.context = B3 = { id: S3 || "", count: 0, async: true, resources: {}, lazy: {}, suspense: {}, assets: [], nonce: y4, block(s6) {
          D3 || $4.push(s6);
        }, replace(s6, l5) {
          if (D3)
            return;
          const h4 = `<!--!$${s6}-->`, y5 = ie2.indexOf(h4);
          if (-1 === y5)
            return;
          const b4 = ie2.indexOf(`<!--!$/${s6}-->`, y5 + h4.length);
          ie2 = ie2.replace(ie2.slice(y5, b4 + h4.length + 1), resolveSSRNode(l5()));
        }, serialize(s6, l5, h4) {
          const y5 = Xr.context.noHydrate;
          !D3 && h4 && "object" == typeof l5 && "then" in l5 ? ($4.push(l5), !y5 && l5.then((l6) => {
            T3.write(s6, l6);
          }).catch((l6) => {
            T3.write(s6, l6);
          })) : y5 || T3.write(s6, l5);
        }, roots: 0, nextRoot() {
          return this.renderId + "i-" + this.roots++;
        }, registerFragment(s6) {
          if (!O3.has(s6)) {
            let l5, h4;
            const y5 = new Promise((s7, y6) => (l5 = s7, h4 = y6));
            O3.set(s6, (s7) => queue(() => queue(() => {
              s7 ? h4(s7) : l5(true), queue(flushEnd);
            }))), T3.write(s6, y5);
          }
          return (l5, h4) => {
            if (O3.has(s6)) {
              const y5 = O3.get(s6);
              if (O3.delete(s6), function(s7, l6) {
                for (const h5 of [...s7.keys()].reverse())
                  if (l6.startsWith(h5))
                    return true;
                return false;
              }(O3, s6))
                return void y5();
              q2 || (D3 ? (se2.write(`<template id="${s6}">${void 0 !== l5 ? l5 : " "}</template>`), pushTask(`$df("${s6}")${Y2 ? "" : ";" + $s}`), y5(h4), Y2 = true) : (queue(() => ie2 = function(s7, l6, h5) {
                const y6 = `<template id="pl-${l6}">`, b4 = `<!--pl-${l6}-->`, w6 = s7.indexOf(y6);
                if (-1 === w6)
                  return s7;
                const S4 = s7.indexOf(b4, w6 + y6.length);
                return s7.slice(0, w6) + h5 + s7.slice(S4 + b4.length);
              }(ie2, s6, void 0 !== l5 ? l5 : "")), y5(h4)));
            }
            return D3;
          };
        } };
        let ie2 = createRoot((l5) => (h3 = l5, resolveSSRNode(escape(s5()))));
        function doShell() {
          K2 || (Xr.context = B3, B3.noHydrate = true, ie2 = injectAssets(B3.assets, ie2), U2.length && (ie2 = injectScripts(ie2, U2, y4)), se2.write(ie2), U2 = "", b3 && b3({ write(s6) {
            !q2 && se2.write(s6);
          } }), K2 = true);
        }
        return { then(s6) {
          function complete() {
            h3(), s6(L2);
          }
          if (w5) {
            let s7 = w5;
            w5 = (l5) => {
              s7(l5), complete();
            };
          } else
            w5 = complete;
          queue(flushEnd);
        }, pipe(s6) {
          allSettled($4).then(() => {
            setTimeout(() => {
              doShell(), se2 = F2 = s6, se2.write(L2), D3 = true, q2 ? (h3(), F2.end()) : flushEnd();
            });
          });
        }, pipeTo: (s6) => allSettled($4).then(() => {
          let l5;
          const y5 = new Promise((s7) => l5 = s7);
          return setTimeout(() => {
            doShell();
            const y6 = new TextEncoder(), b4 = s6.getWriter();
            F2 = { end() {
              b4.releaseLock(), s6.close(), l5();
            } }, se2 = { write(s7) {
              b4.write(y6.encode(s7));
            } }, se2.write(L2), D3 = true, q2 ? (h3(), F2.end()) : flushEnd();
          }), y5;
        }) };
      }(() => (Xr.context.event = S2, s4(S2)), E2);
      if (S2.response && S2.response.headers.get("Location")) {
        const s5 = x(S2.response);
        return Qa(y3, S2.response.headers.get("Location"), s5);
      }
      if ("async" === $3)
        return T2;
      const { writable: O2, readable: B2 } = new TransformStream();
      return T2.pipeTo(O2), B2;
    });
  } });
}
function W(s4, l3) {
  return () => {
    if (s4.response && s4.response.headers.get("Location")) {
      const h2 = x(s4.response);
      Va(l3, h2), rc(l3, "Location", s4.response.headers.get("Location"));
    }
  };
}
function G(s4) {
  return ({ write: l3 }) => {
    s4.complete = true;
    const h2 = s4.response && s4.response.headers.get("Location");
    h2 && l3(`<script>window.location="${h2}"<\/script>`);
  };
}
function hasReqHeader(s4, l3, h2) {
  const y3 = getRequestHeader(s4, l3);
  return y3 && "string" == typeof y3 && y3.toLowerCase().includes(h2);
}
function joinHeaders(s4) {
  return Array.isArray(s4) ? s4.join(", ") : String(s4);
}
function normalizeCookieHeader(s4 = "") {
  return splitCookiesString(joinHeaders(s4));
}
function normalizeCookieHeaders(s4) {
  const l3 = new Headers();
  for (const [h2, y3] of s4)
    if ("set-cookie" === h2)
      for (const s5 of normalizeCookieHeader(y3))
        l3.append("set-cookie", s5);
    else
      l3.set(h2, joinHeaders(y3));
  return l3;
}
var l2, h, y2, b, w3, S, E, $2, T, O, B, F, L, U, D2, q, K, Y, Q, se, _getEnv, ie, ae, le, ue, fe, de, he, pe, ge, we, xe, Re, ze, Oe, Be, Ne, Le, He, De, Ge, Ye, Xe, WordArray, Je, Qe, et, tt, BufferedBlockAlgorithm, Hasher, rt2, st, it, SHA256, ot, at, ct, lt, dt, ht2, pt, mt, yt, vt, stringToBuffer, base64urlDecode, base64urlEncode, bt, clone, xt, Rt, randomBits, generateKey, getEncryptParams, decrypt, hmacWithPassword, normalizePassword, seal, unseal, kt, At, zt, _Readable, Tt, jt, Ot, Bt, Ft, Socket, IncomingMessage, ServerResponse, Mt, __publicField$2, H3Error, Nt, Lt, Ut, Ht, qt, setHeaders, Wt, Vt, Zt, Gt, Yt, Xt, Jt, __publicField$1, H3Event, Qt, lazyEventHandler, er, FetchError, tr, rr, nr, sr, ir, or, ar, cr, lr, ur, fr, dr, Hookable, hr, pr, mr, yr, gr, vr, br, wr, xr, memory, Sr, normalizeKey, Er, $r, Ir, cachedFunction, cachedEventHandler, Rr, kr, Ar, zr, Pr, Tr, jr, Or, Fr, Mr, Nr, Lr, InvariantError, Ur, Hr, Dr, qr, join, resolve, isAbsolute, dirname, Wr, pathToFileURL, Vr, Kr, Zr, Gr, createRenderEffect, Yr, Xr, Jr, Qr, en, tn, rn, nn, cn, ln, un, fn, dn, hn, pn, mn, yn, gn, vn, bn, wn, xn, Sn, En, $n, In, _n, Rn, kn, zn, Cn, Pn, jn, Bn, Mn, Nn, Ln, Un, Dn, qn, Wn, Vn, Kn, Zn, Gn, Yn, Xn, Jn, Qn, es, ts, rs, ns, ss, is, os, as, cs, ls, us, fs, ds, hs, ps, ms, ys, gs, vs, bs, ws, xs, Ss, Es, $s, Is, _s, Rs, ks, As, zs, Cs, Ps, Ts, js, Os, Bs, Fs, Ms, Ns, Ls, Us, Hs, Ds, qs, Ws, Vs, Ks, Zs, Gs, Ys, Xs, Js, Qs, ei, ti, ri, ni, si, ii, oi, ai, at$2, ci, li, ui, xe$2, fi, hi, pi, mi, yi, gi, vi, bi, wi, xi, Si, Ei, $i, Ii, _i, Ri, ki, Ai, zi, Ci, Pi, Ti, ji, Oi, Bi, Te$2, Dt$2, Fi, Mi, Ni, Li, Ui, Hi, Di, qi, Wi, Vi, Ki, Zi, Gi, Yi, Xi, errorHandler, Ji, Qi, eo, to, ro, no, so, io, oo, ao, co, lo, uo, fo, ho, po, mo, yo, go, vo, bo, wo, xo, So, Eo, $o, Io, _o, Ro, ko, Ao, zo, Co, Po, To, jo, Oo, Bo, Fo, Mo, No, Lo, Uo, Ho, Do, qo, Wo, Vo, Ko, Zo, Go, Yo, Xo, Jo, Qo, ea, ta, ra, na, sa, ia, oa, aa, ca, la, ua, fa, da, ha, pa, ma, ya, ga, va, ba, wa, xa, Sa, Ea, $a, di, Ia, _a, Ra, ka, __publicField, Aa, za, Ca, Pa, Ta, _e, Et$1, ja, Oa, Ba, Fa, Ma, Na, La, He$1, Ua, Ha, Da, qa, Wa, Va, Ka, Za, Ga, Ya, Xa, Ja, Qa, ec, tc, rc, nc, sc, ic, oc, sn, ac, cc, lc, uc, fc, dc, hc, J, H, pc, mc, yc, gc, vc, bc, ut, wc, xc, X, Sc, Ec, gt, wt, $c, Ic, _c, Rc, kc, Ac, zc, Cc, Pc, Tc, useNitroApp, jc, Oc, Bc, Fc;
var init_runtime = __esm({
  ".wrangler/tmp/pages-7iUYXe/chunks/runtime.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    l2 = [];
    h = [];
    y2 = "undefined" == typeof Uint8Array ? Array : Uint8Array;
    b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (let s4 = 0, y3 = 64; s4 < y3; ++s4)
      l2[s4] = b[s4], h[b.charCodeAt(s4)] = s4;
    h["-".charCodeAt(0)] = 62, h["_".charCodeAt(0)] = 63;
    w3 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    S = 2147483647;
    Buffer$1.TYPED_ARRAY_SUPPORT = function() {
      try {
        const s4 = new Uint8Array(1), l3 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(l3, Uint8Array.prototype), Object.setPrototypeOf(s4, l3), 42 === s4.foo();
      } catch {
        return false;
      }
    }(), Buffer$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Buffer$1.prototype, "parent", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.buffer;
    } }), Object.defineProperty(Buffer$1.prototype, "offset", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.byteOffset;
    } }), Buffer$1.poolSize = 8192, Buffer$1.from = function(s4, l3, h2) {
      return from(s4, l3, h2);
    }, Object.setPrototypeOf(Buffer$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(Buffer$1, Uint8Array), Buffer$1.alloc = function(s4, l3, h2) {
      return function(s5, l4, h3) {
        return assertSize(s5), s5 <= 0 ? createBuffer(s5) : void 0 !== l4 ? "string" == typeof h3 ? createBuffer(s5).fill(l4, h3) : createBuffer(s5).fill(l4) : createBuffer(s5);
      }(s4, l3, h2);
    }, Buffer$1.allocUnsafe = function(s4) {
      return allocUnsafe(s4);
    }, Buffer$1.allocUnsafeSlow = function(s4) {
      return allocUnsafe(s4);
    }, Buffer$1.isBuffer = function(s4) {
      return null != s4 && true === s4._isBuffer && s4 !== Buffer$1.prototype;
    }, Buffer$1.compare = function(s4, l3) {
      if (isInstance(s4, Uint8Array) && (s4 = Buffer$1.from(s4, s4.offset, s4.byteLength)), isInstance(l3, Uint8Array) && (l3 = Buffer$1.from(l3, l3.offset, l3.byteLength)), !Buffer$1.isBuffer(s4) || !Buffer$1.isBuffer(l3))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (s4 === l3)
        return 0;
      let h2 = s4.length, y3 = l3.length;
      for (let b2 = 0, w4 = Math.min(h2, y3); b2 < w4; ++b2)
        if (s4[b2] !== l3[b2]) {
          h2 = s4[b2], y3 = l3[b2];
          break;
        }
      return h2 < y3 ? -1 : y3 < h2 ? 1 : 0;
    }, Buffer$1.isEncoding = function(s4) {
      switch (String(s4).toLowerCase()) {
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
    }, Buffer$1.concat = function(s4, l3) {
      if (!Array.isArray(s4))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === s4.length)
        return Buffer$1.alloc(0);
      let h2;
      if (void 0 === l3)
        for (l3 = 0, h2 = 0; h2 < s4.length; ++h2)
          l3 += s4[h2].length;
      const y3 = Buffer$1.allocUnsafe(l3);
      let b2 = 0;
      for (h2 = 0; h2 < s4.length; ++h2) {
        let l4 = s4[h2];
        if (isInstance(l4, Uint8Array))
          b2 + l4.length > y3.length ? (Buffer$1.isBuffer(l4) || (l4 = Buffer$1.from(l4.buffer, l4.byteOffset, l4.byteLength)), l4.copy(y3, b2)) : Uint8Array.prototype.set.call(y3, l4, b2);
        else {
          if (!Buffer$1.isBuffer(l4))
            throw new TypeError('"list" argument must be an Array of Buffers');
          l4.copy(y3, b2);
        }
        b2 += l4.length;
      }
      return y3;
    }, Buffer$1.byteLength = byteLength, Buffer$1.prototype._isBuffer = true, Buffer$1.prototype.swap16 = function() {
      const s4 = this.length;
      if (s4 % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let l3 = 0; l3 < s4; l3 += 2)
        swap(this, l3, l3 + 1);
      return this;
    }, Buffer$1.prototype.swap32 = function() {
      const s4 = this.length;
      if (s4 % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let l3 = 0; l3 < s4; l3 += 4)
        swap(this, l3, l3 + 3), swap(this, l3 + 1, l3 + 2);
      return this;
    }, Buffer$1.prototype.swap64 = function() {
      const s4 = this.length;
      if (s4 % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let l3 = 0; l3 < s4; l3 += 8)
        swap(this, l3, l3 + 7), swap(this, l3 + 1, l3 + 6), swap(this, l3 + 2, l3 + 5), swap(this, l3 + 3, l3 + 4);
      return this;
    }, Buffer$1.prototype.toString = function() {
      const s4 = this.length;
      return 0 === s4 ? "" : 0 === arguments.length ? utf8Slice(this, 0, s4) : Reflect.apply(slowToString, this, arguments);
    }, Buffer$1.prototype.toLocaleString = Buffer$1.prototype.toString, Buffer$1.prototype.equals = function(s4) {
      if (!Buffer$1.isBuffer(s4))
        throw new TypeError("Argument must be a Buffer");
      return this === s4 || 0 === Buffer$1.compare(this, s4);
    }, Buffer$1.prototype.inspect = function() {
      let s4 = "";
      return s4 = this.toString("hex", 0, 50).replace(/(.{2})/g, "$1 ").trim(), this.length > 50 && (s4 += " ... "), "<Buffer " + s4 + ">";
    }, w3 && (Buffer$1.prototype[w3] = Buffer$1.prototype.inspect), Buffer$1.prototype.compare = function(s4, l3, h2, y3, b2) {
      if (isInstance(s4, Uint8Array) && (s4 = Buffer$1.from(s4, s4.offset, s4.byteLength)), !Buffer$1.isBuffer(s4))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s4);
      if (void 0 === l3 && (l3 = 0), void 0 === h2 && (h2 = s4 ? s4.length : 0), void 0 === y3 && (y3 = 0), void 0 === b2 && (b2 = this.length), l3 < 0 || h2 > s4.length || y3 < 0 || b2 > this.length)
        throw new RangeError("out of range index");
      if (y3 >= b2 && l3 >= h2)
        return 0;
      if (y3 >= b2)
        return -1;
      if (l3 >= h2)
        return 1;
      if (this === s4)
        return 0;
      let w4 = (b2 >>>= 0) - (y3 >>>= 0), S2 = (h2 >>>= 0) - (l3 >>>= 0);
      const E2 = Math.min(w4, S2), $3 = this.slice(y3, b2), T2 = s4.slice(l3, h2);
      for (let s5 = 0; s5 < E2; ++s5)
        if ($3[s5] !== T2[s5]) {
          w4 = $3[s5], S2 = T2[s5];
          break;
        }
      return w4 < S2 ? -1 : S2 < w4 ? 1 : 0;
    }, Buffer$1.prototype.includes = function(s4, l3, h2) {
      return -1 !== this.indexOf(s4, l3, h2);
    }, Buffer$1.prototype.indexOf = function(s4, l3, h2) {
      return bidirectionalIndexOf(this, s4, l3, h2, true);
    }, Buffer$1.prototype.lastIndexOf = function(s4, l3, h2) {
      return bidirectionalIndexOf(this, s4, l3, h2, false);
    }, Buffer$1.prototype.write = function(s4, l3, h2, y3) {
      if (void 0 === l3)
        y3 = "utf8", h2 = this.length, l3 = 0;
      else if (void 0 === h2 && "string" == typeof l3)
        y3 = l3, h2 = this.length, l3 = 0;
      else {
        if (!Number.isFinite(l3))
          throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        l3 >>>= 0, Number.isFinite(h2) ? (h2 >>>= 0, void 0 === y3 && (y3 = "utf8")) : (y3 = h2, h2 = void 0);
      }
      const b2 = this.length - l3;
      if ((void 0 === h2 || h2 > b2) && (h2 = b2), s4.length > 0 && (h2 < 0 || l3 < 0) || l3 > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      y3 || (y3 = "utf8");
      let w4 = false;
      for (; ; )
        switch (y3) {
          case "hex":
            return hexWrite(this, s4, l3, h2);
          case "utf8":
          case "utf-8":
            return utf8Write(this, s4, l3, h2);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, s4, l3, h2);
          case "base64":
            return base64Write(this, s4, l3, h2);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, s4, l3, h2);
          default:
            if (w4)
              throw new TypeError("Unknown encoding: " + y3);
            y3 = ("" + y3).toLowerCase(), w4 = true;
        }
    }, Buffer$1.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    E = 4096;
    Buffer$1.prototype.slice = function(s4, l3) {
      const h2 = this.length;
      (s4 = Math.trunc(s4)) < 0 ? (s4 += h2) < 0 && (s4 = 0) : s4 > h2 && (s4 = h2), (l3 = void 0 === l3 ? h2 : Math.trunc(l3)) < 0 ? (l3 += h2) < 0 && (l3 = 0) : l3 > h2 && (l3 = h2), l3 < s4 && (l3 = s4);
      const y3 = this.subarray(s4, l3);
      return Object.setPrototypeOf(y3, Buffer$1.prototype), y3;
    }, Buffer$1.prototype.readUintLE = Buffer$1.prototype.readUIntLE = function(s4, l3, h2) {
      s4 >>>= 0, l3 >>>= 0, h2 || checkOffset(s4, l3, this.length);
      let y3 = this[s4], b2 = 1, w4 = 0;
      for (; ++w4 < l3 && (b2 *= 256); )
        y3 += this[s4 + w4] * b2;
      return y3;
    }, Buffer$1.prototype.readUintBE = Buffer$1.prototype.readUIntBE = function(s4, l3, h2) {
      s4 >>>= 0, l3 >>>= 0, h2 || checkOffset(s4, l3, this.length);
      let y3 = this[s4 + --l3], b2 = 1;
      for (; l3 > 0 && (b2 *= 256); )
        y3 += this[s4 + --l3] * b2;
      return y3;
    }, Buffer$1.prototype.readUint8 = Buffer$1.prototype.readUInt8 = function(s4, l3) {
      return s4 >>>= 0, l3 || checkOffset(s4, 1, this.length), this[s4];
    }, Buffer$1.prototype.readUint16LE = Buffer$1.prototype.readUInt16LE = function(s4, l3) {
      return s4 >>>= 0, l3 || checkOffset(s4, 2, this.length), this[s4] | this[s4 + 1] << 8;
    }, Buffer$1.prototype.readUint16BE = Buffer$1.prototype.readUInt16BE = function(s4, l3) {
      return s4 >>>= 0, l3 || checkOffset(s4, 2, this.length), this[s4] << 8 | this[s4 + 1];
    }, Buffer$1.prototype.readUint32LE = Buffer$1.prototype.readUInt32LE = function(s4, l3) {
      return s4 >>>= 0, l3 || checkOffset(s4, 4, this.length), (this[s4] | this[s4 + 1] << 8 | this[s4 + 2] << 16) + 16777216 * this[s4 + 3];
    }, Buffer$1.prototype.readUint32BE = Buffer$1.prototype.readUInt32BE = function(s4, l3) {
      return s4 >>>= 0, l3 || checkOffset(s4, 4, this.length), 16777216 * this[s4] + (this[s4 + 1] << 16 | this[s4 + 2] << 8 | this[s4 + 3]);
    }, Buffer$1.prototype.readBigUInt64LE = defineBigIntMethod(function(s4) {
      validateNumber(s4 >>>= 0, "offset");
      const l3 = this[s4], h2 = this[s4 + 7];
      void 0 !== l3 && void 0 !== h2 || boundsError(s4, this.length - 8);
      const y3 = l3 + 256 * this[++s4] + 65536 * this[++s4] + this[++s4] * 2 ** 24, b2 = this[++s4] + 256 * this[++s4] + 65536 * this[++s4] + h2 * 2 ** 24;
      return BigInt(y3) + (BigInt(b2) << BigInt(32));
    }), Buffer$1.prototype.readBigUInt64BE = defineBigIntMethod(function(s4) {
      validateNumber(s4 >>>= 0, "offset");
      const l3 = this[s4], h2 = this[s4 + 7];
      void 0 !== l3 && void 0 !== h2 || boundsError(s4, this.length - 8);
      const y3 = l3 * 2 ** 24 + 65536 * this[++s4] + 256 * this[++s4] + this[++s4], b2 = this[++s4] * 2 ** 24 + 65536 * this[++s4] + 256 * this[++s4] + h2;
      return (BigInt(y3) << BigInt(32)) + BigInt(b2);
    }), Buffer$1.prototype.readIntLE = function(s4, l3, h2) {
      s4 >>>= 0, l3 >>>= 0, h2 || checkOffset(s4, l3, this.length);
      let y3 = this[s4], b2 = 1, w4 = 0;
      for (; ++w4 < l3 && (b2 *= 256); )
        y3 += this[s4 + w4] * b2;
      return b2 *= 128, y3 >= b2 && (y3 -= Math.pow(2, 8 * l3)), y3;
    }, Buffer$1.prototype.readIntBE = function(s4, l3, h2) {
      s4 >>>= 0, l3 >>>= 0, h2 || checkOffset(s4, l3, this.length);
      let y3 = l3, b2 = 1, w4 = this[s4 + --y3];
      for (; y3 > 0 && (b2 *= 256); )
        w4 += this[s4 + --y3] * b2;
      return b2 *= 128, w4 >= b2 && (w4 -= Math.pow(2, 8 * l3)), w4;
    }, Buffer$1.prototype.readInt8 = function(s4, l3) {
      return s4 >>>= 0, l3 || checkOffset(s4, 1, this.length), 128 & this[s4] ? -1 * (255 - this[s4] + 1) : this[s4];
    }, Buffer$1.prototype.readInt16LE = function(s4, l3) {
      s4 >>>= 0, l3 || checkOffset(s4, 2, this.length);
      const h2 = this[s4] | this[s4 + 1] << 8;
      return 32768 & h2 ? 4294901760 | h2 : h2;
    }, Buffer$1.prototype.readInt16BE = function(s4, l3) {
      s4 >>>= 0, l3 || checkOffset(s4, 2, this.length);
      const h2 = this[s4 + 1] | this[s4] << 8;
      return 32768 & h2 ? 4294901760 | h2 : h2;
    }, Buffer$1.prototype.readInt32LE = function(s4, l3) {
      return s4 >>>= 0, l3 || checkOffset(s4, 4, this.length), this[s4] | this[s4 + 1] << 8 | this[s4 + 2] << 16 | this[s4 + 3] << 24;
    }, Buffer$1.prototype.readInt32BE = function(s4, l3) {
      return s4 >>>= 0, l3 || checkOffset(s4, 4, this.length), this[s4] << 24 | this[s4 + 1] << 16 | this[s4 + 2] << 8 | this[s4 + 3];
    }, Buffer$1.prototype.readBigInt64LE = defineBigIntMethod(function(s4) {
      validateNumber(s4 >>>= 0, "offset");
      const l3 = this[s4], h2 = this[s4 + 7];
      void 0 !== l3 && void 0 !== h2 || boundsError(s4, this.length - 8);
      const y3 = this[s4 + 4] + 256 * this[s4 + 5] + 65536 * this[s4 + 6] + (h2 << 24);
      return (BigInt(y3) << BigInt(32)) + BigInt(l3 + 256 * this[++s4] + 65536 * this[++s4] + this[++s4] * 2 ** 24);
    }), Buffer$1.prototype.readBigInt64BE = defineBigIntMethod(function(s4) {
      validateNumber(s4 >>>= 0, "offset");
      const l3 = this[s4], h2 = this[s4 + 7];
      void 0 !== l3 && void 0 !== h2 || boundsError(s4, this.length - 8);
      const y3 = (l3 << 24) + 65536 * this[++s4] + 256 * this[++s4] + this[++s4];
      return (BigInt(y3) << BigInt(32)) + BigInt(this[++s4] * 2 ** 24 + 65536 * this[++s4] + 256 * this[++s4] + h2);
    }), Buffer$1.prototype.readFloatLE = function(s4, l3) {
      return s4 >>>= 0, l3 || checkOffset(s4, 4, this.length), read(this, s4, true, 23, 4);
    }, Buffer$1.prototype.readFloatBE = function(s4, l3) {
      return s4 >>>= 0, l3 || checkOffset(s4, 4, this.length), read(this, s4, false, 23, 4);
    }, Buffer$1.prototype.readDoubleLE = function(s4, l3) {
      return s4 >>>= 0, l3 || checkOffset(s4, 8, this.length), read(this, s4, true, 52, 8);
    }, Buffer$1.prototype.readDoubleBE = function(s4, l3) {
      return s4 >>>= 0, l3 || checkOffset(s4, 8, this.length), read(this, s4, false, 52, 8);
    }, Buffer$1.prototype.writeUintLE = Buffer$1.prototype.writeUIntLE = function(s4, l3, h2, y3) {
      if (s4 = +s4, l3 >>>= 0, h2 >>>= 0, !y3) {
        checkInt(this, s4, l3, h2, Math.pow(2, 8 * h2) - 1, 0);
      }
      let b2 = 1, w4 = 0;
      for (this[l3] = 255 & s4; ++w4 < h2 && (b2 *= 256); )
        this[l3 + w4] = s4 / b2 & 255;
      return l3 + h2;
    }, Buffer$1.prototype.writeUintBE = Buffer$1.prototype.writeUIntBE = function(s4, l3, h2, y3) {
      if (s4 = +s4, l3 >>>= 0, h2 >>>= 0, !y3) {
        checkInt(this, s4, l3, h2, Math.pow(2, 8 * h2) - 1, 0);
      }
      let b2 = h2 - 1, w4 = 1;
      for (this[l3 + b2] = 255 & s4; --b2 >= 0 && (w4 *= 256); )
        this[l3 + b2] = s4 / w4 & 255;
      return l3 + h2;
    }, Buffer$1.prototype.writeUint8 = Buffer$1.prototype.writeUInt8 = function(s4, l3, h2) {
      return s4 = +s4, l3 >>>= 0, h2 || checkInt(this, s4, l3, 1, 255, 0), this[l3] = 255 & s4, l3 + 1;
    }, Buffer$1.prototype.writeUint16LE = Buffer$1.prototype.writeUInt16LE = function(s4, l3, h2) {
      return s4 = +s4, l3 >>>= 0, h2 || checkInt(this, s4, l3, 2, 65535, 0), this[l3] = 255 & s4, this[l3 + 1] = s4 >>> 8, l3 + 2;
    }, Buffer$1.prototype.writeUint16BE = Buffer$1.prototype.writeUInt16BE = function(s4, l3, h2) {
      return s4 = +s4, l3 >>>= 0, h2 || checkInt(this, s4, l3, 2, 65535, 0), this[l3] = s4 >>> 8, this[l3 + 1] = 255 & s4, l3 + 2;
    }, Buffer$1.prototype.writeUint32LE = Buffer$1.prototype.writeUInt32LE = function(s4, l3, h2) {
      return s4 = +s4, l3 >>>= 0, h2 || checkInt(this, s4, l3, 4, 4294967295, 0), this[l3 + 3] = s4 >>> 24, this[l3 + 2] = s4 >>> 16, this[l3 + 1] = s4 >>> 8, this[l3] = 255 & s4, l3 + 4;
    }, Buffer$1.prototype.writeUint32BE = Buffer$1.prototype.writeUInt32BE = function(s4, l3, h2) {
      return s4 = +s4, l3 >>>= 0, h2 || checkInt(this, s4, l3, 4, 4294967295, 0), this[l3] = s4 >>> 24, this[l3 + 1] = s4 >>> 16, this[l3 + 2] = s4 >>> 8, this[l3 + 3] = 255 & s4, l3 + 4;
    }, Buffer$1.prototype.writeBigUInt64LE = defineBigIntMethod(function(s4, l3 = 0) {
      return wrtBigUInt64LE(this, s4, l3, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeBigUInt64BE = defineBigIntMethod(function(s4, l3 = 0) {
      return wrtBigUInt64BE(this, s4, l3, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeIntLE = function(s4, l3, h2, y3) {
      if (s4 = +s4, l3 >>>= 0, !y3) {
        const y4 = Math.pow(2, 8 * h2 - 1);
        checkInt(this, s4, l3, h2, y4 - 1, -y4);
      }
      let b2 = 0, w4 = 1, S2 = 0;
      for (this[l3] = 255 & s4; ++b2 < h2 && (w4 *= 256); )
        s4 < 0 && 0 === S2 && 0 !== this[l3 + b2 - 1] && (S2 = 1), this[l3 + b2] = Math.trunc(s4 / w4) - S2 & 255;
      return l3 + h2;
    }, Buffer$1.prototype.writeIntBE = function(s4, l3, h2, y3) {
      if (s4 = +s4, l3 >>>= 0, !y3) {
        const y4 = Math.pow(2, 8 * h2 - 1);
        checkInt(this, s4, l3, h2, y4 - 1, -y4);
      }
      let b2 = h2 - 1, w4 = 1, S2 = 0;
      for (this[l3 + b2] = 255 & s4; --b2 >= 0 && (w4 *= 256); )
        s4 < 0 && 0 === S2 && 0 !== this[l3 + b2 + 1] && (S2 = 1), this[l3 + b2] = Math.trunc(s4 / w4) - S2 & 255;
      return l3 + h2;
    }, Buffer$1.prototype.writeInt8 = function(s4, l3, h2) {
      return s4 = +s4, l3 >>>= 0, h2 || checkInt(this, s4, l3, 1, 127, -128), s4 < 0 && (s4 = 255 + s4 + 1), this[l3] = 255 & s4, l3 + 1;
    }, Buffer$1.prototype.writeInt16LE = function(s4, l3, h2) {
      return s4 = +s4, l3 >>>= 0, h2 || checkInt(this, s4, l3, 2, 32767, -32768), this[l3] = 255 & s4, this[l3 + 1] = s4 >>> 8, l3 + 2;
    }, Buffer$1.prototype.writeInt16BE = function(s4, l3, h2) {
      return s4 = +s4, l3 >>>= 0, h2 || checkInt(this, s4, l3, 2, 32767, -32768), this[l3] = s4 >>> 8, this[l3 + 1] = 255 & s4, l3 + 2;
    }, Buffer$1.prototype.writeInt32LE = function(s4, l3, h2) {
      return s4 = +s4, l3 >>>= 0, h2 || checkInt(this, s4, l3, 4, 2147483647, -2147483648), this[l3] = 255 & s4, this[l3 + 1] = s4 >>> 8, this[l3 + 2] = s4 >>> 16, this[l3 + 3] = s4 >>> 24, l3 + 4;
    }, Buffer$1.prototype.writeInt32BE = function(s4, l3, h2) {
      return s4 = +s4, l3 >>>= 0, h2 || checkInt(this, s4, l3, 4, 2147483647, -2147483648), s4 < 0 && (s4 = 4294967295 + s4 + 1), this[l3] = s4 >>> 24, this[l3 + 1] = s4 >>> 16, this[l3 + 2] = s4 >>> 8, this[l3 + 3] = 255 & s4, l3 + 4;
    }, Buffer$1.prototype.writeBigInt64LE = defineBigIntMethod(function(s4, l3 = 0) {
      return wrtBigUInt64LE(this, s4, l3, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeBigInt64BE = defineBigIntMethod(function(s4, l3 = 0) {
      return wrtBigUInt64BE(this, s4, l3, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeFloatLE = function(s4, l3, h2) {
      return writeFloat(this, s4, l3, true, h2);
    }, Buffer$1.prototype.writeFloatBE = function(s4, l3, h2) {
      return writeFloat(this, s4, l3, false, h2);
    }, Buffer$1.prototype.writeDoubleLE = function(s4, l3, h2) {
      return writeDouble(this, s4, l3, true, h2);
    }, Buffer$1.prototype.writeDoubleBE = function(s4, l3, h2) {
      return writeDouble(this, s4, l3, false, h2);
    }, Buffer$1.prototype.copy = function(s4, l3, h2, y3) {
      if (!Buffer$1.isBuffer(s4))
        throw new TypeError("argument should be a Buffer");
      if (h2 || (h2 = 0), y3 || 0 === y3 || (y3 = this.length), l3 >= s4.length && (l3 = s4.length), l3 || (l3 = 0), y3 > 0 && y3 < h2 && (y3 = h2), y3 === h2)
        return 0;
      if (0 === s4.length || 0 === this.length)
        return 0;
      if (l3 < 0)
        throw new RangeError("targetStart out of bounds");
      if (h2 < 0 || h2 >= this.length)
        throw new RangeError("Index out of range");
      if (y3 < 0)
        throw new RangeError("sourceEnd out of bounds");
      y3 > this.length && (y3 = this.length), s4.length - l3 < y3 - h2 && (y3 = s4.length - l3 + h2);
      const b2 = y3 - h2;
      return this === s4 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(l3, h2, y3) : Uint8Array.prototype.set.call(s4, this.subarray(h2, y3), l3), b2;
    }, Buffer$1.prototype.fill = function(s4, l3, h2, y3) {
      if ("string" == typeof s4) {
        if ("string" == typeof l3 ? (y3 = l3, l3 = 0, h2 = this.length) : "string" == typeof h2 && (y3 = h2, h2 = this.length), void 0 !== y3 && "string" != typeof y3)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof y3 && !Buffer$1.isEncoding(y3))
          throw new TypeError("Unknown encoding: " + y3);
        if (1 === s4.length) {
          const l4 = s4.charCodeAt(0);
          ("utf8" === y3 && l4 < 128 || "latin1" === y3) && (s4 = l4);
        }
      } else
        "number" == typeof s4 ? s4 &= 255 : "boolean" == typeof s4 && (s4 = Number(s4));
      if (l3 < 0 || this.length < l3 || this.length < h2)
        throw new RangeError("Out of range index");
      if (h2 <= l3)
        return this;
      let b2;
      if (l3 >>>= 0, h2 = void 0 === h2 ? this.length : h2 >>> 0, s4 || (s4 = 0), "number" == typeof s4)
        for (b2 = l3; b2 < h2; ++b2)
          this[b2] = s4;
      else {
        const w4 = Buffer$1.isBuffer(s4) ? s4 : Buffer$1.from(s4, y3), S2 = w4.length;
        if (0 === S2)
          throw new TypeError('The value "' + s4 + '" is invalid for argument "value"');
        for (b2 = 0; b2 < h2 - l3; ++b2)
          this[b2 + l3] = w4[b2 % S2];
      }
      return this;
    };
    $2 = {};
    E$2("ERR_BUFFER_OUT_OF_BOUNDS", function(s4) {
      return s4 ? `${s4} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), E$2("ERR_INVALID_ARG_TYPE", function(s4, l3) {
      return `The "${s4}" argument must be of type number. Received type ${typeof l3}`;
    }, TypeError), E$2("ERR_OUT_OF_RANGE", function(s4, l3, h2) {
      let y3 = `The value of "${s4}" is out of range.`, b2 = h2;
      return Number.isInteger(h2) && Math.abs(h2) > 2 ** 32 ? b2 = addNumericalSeparator(String(h2)) : "bigint" == typeof h2 && (b2 = String(h2), (h2 > BigInt(2) ** BigInt(32) || h2 < -(BigInt(2) ** BigInt(32))) && (b2 = addNumericalSeparator(b2)), b2 += "n"), y3 += ` It must be ${l3}. Received ${b2}`, y3;
    }, RangeError);
    T = /[^\w+/-]/g;
    O = function() {
      const s4 = "0123456789abcdef", l3 = Array.from({ length: 256 });
      for (let h2 = 0; h2 < 16; ++h2) {
        const y3 = 16 * h2;
        for (let b2 = 0; b2 < 16; ++b2)
          l3[y3 + b2] = s4[h2] + s4[b2];
      }
      return l3;
    }();
    B = globalThis.Buffer || Buffer$1;
    notImplemented("buffer.resolveObjectURL"), notImplemented("buffer.transcode"), notImplemented("buffer.isUtf8"), notImplemented("buffer.isAscii");
    F = {};
    !function() {
      try {
        L = "function" == typeof setTimeout ? setTimeout : defaultSetTimeout;
      } catch {
        L = defaultSetTimeout;
      }
      try {
        U = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch {
        U = defaultClearTimeout;
      }
    }();
    q = [];
    K = false;
    Y = -1;
    F.nextTick = function(s4) {
      const l3 = Array.from({ length: arguments.length - 1 });
      if (arguments.length > 1)
        for (let s5 = 1; s5 < arguments.length; s5++)
          l3[s5 - 1] = arguments[s5];
      q.push(new Item(s4, l3)), 1 !== q.length || K || runTimeout(drainQueue);
    }, Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, F.title = "unenv";
    Q = /* @__PURE__ */ Object.create(null);
    se = globalThis.process?.env;
    _getEnv = (s4) => se || globalThis.__env__ || (s4 ? Q : globalThis);
    F.env = new Proxy(Q, { get: (s4, l3) => _getEnv()[l3] ?? Q[l3], has: (s4, l3) => l3 in _getEnv() || l3 in Q, set: (s4, l3, h2) => (_getEnv(true)[l3] = h2, true), deleteProperty(s4, l3) {
      delete _getEnv(true)[l3];
    }, ownKeys() {
      const s4 = _getEnv();
      return Object.keys(s4);
    } }), F.argv = [], F.version = "", F.versions = {}, F.on = noop, F.addListener = noop, F.once = noop, F.off = noop, F.removeListener = noop, F.removeAllListeners = noop, F.emit = noop, F.prependListener = noop, F.prependOnceListener = noop, F.listeners = function(s4) {
      return [];
    }, F.binding = function(s4) {
      throw new Error("[unenv] process.binding is not supported");
    };
    ie = "/";
    F.cwd = function() {
      return ie;
    }, F.chdir = function(s4) {
      ie = s4;
    }, F.umask = function() {
      return 0;
    };
    ae = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    ae.process = ae.process || F;
    le = ae.process;
    ue = /#/g;
    fe = /&/g;
    de = /\//g;
    he = /=/g;
    pe = /\+/g;
    ge = /%5e/gi;
    we = /%60/gi;
    xe = /%7c/gi;
    Re = /%20/gi;
    ze = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    Oe = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    Be = /^([/\\]\s*){2,}[^/\\]/;
    Ne = /^\.?\//;
    Le = Symbol.for("ufo:protocolRelative");
    He = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
    De = Object.freeze({ ignoreUnknown: false, respectType: false, respectFunctionNames: false, respectFunctionProperties: false, unorderedObjects: true, unorderedArrays: false, unorderedSets: false, excludeKeys: void 0, excludeValues: void 0, replacer: void 0 });
    Ge = Object.freeze(["prototype", "__proto__", "constructor"]);
    Ye = "[native code] }";
    Xe = Ye.length;
    WordArray = class {
      constructor(s4, l3) {
        s4 = this.words = s4 || [], this.sigBytes = void 0 === l3 ? 4 * s4.length : l3;
      }
      toString(s4) {
        return (s4 || Je).stringify(this);
      }
      concat(s4) {
        if (this.clamp(), this.sigBytes % 4)
          for (let l3 = 0; l3 < s4.sigBytes; l3++) {
            const h2 = s4.words[l3 >>> 2] >>> 24 - l3 % 4 * 8 & 255;
            this.words[this.sigBytes + l3 >>> 2] |= h2 << 24 - (this.sigBytes + l3) % 4 * 8;
          }
        else
          for (let l3 = 0; l3 < s4.sigBytes; l3 += 4)
            this.words[this.sigBytes + l3 >>> 2] = s4.words[l3 >>> 2];
        return this.sigBytes += s4.sigBytes, this;
      }
      clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4);
      }
      clone() {
        return new WordArray([...this.words]);
      }
    };
    Je = { stringify(s4) {
      const l3 = [];
      for (let h2 = 0; h2 < s4.sigBytes; h2++) {
        const y3 = s4.words[h2 >>> 2] >>> 24 - h2 % 4 * 8 & 255;
        l3.push((y3 >>> 4).toString(16), (15 & y3).toString(16));
      }
      return l3.join("");
    } };
    Qe = { stringify(s4) {
      const l3 = [];
      for (let h2 = 0; h2 < s4.sigBytes; h2 += 3) {
        const y3 = (s4.words[h2 >>> 2] >>> 24 - h2 % 4 * 8 & 255) << 16 | (s4.words[h2 + 1 >>> 2] >>> 24 - (h2 + 1) % 4 * 8 & 255) << 8 | s4.words[h2 + 2 >>> 2] >>> 24 - (h2 + 2) % 4 * 8 & 255;
        for (let b2 = 0; b2 < 4 && 8 * h2 + 6 * b2 < 8 * s4.sigBytes; b2++)
          l3.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(y3 >>> 6 * (3 - b2) & 63));
      }
      return l3.join("");
    } };
    et = { parse(s4) {
      const l3 = s4.length, h2 = [];
      for (let y3 = 0; y3 < l3; y3++)
        h2[y3 >>> 2] |= (255 & s4.charCodeAt(y3)) << 24 - y3 % 4 * 8;
      return new WordArray(h2, l3);
    } };
    tt = { parse: (s4) => et.parse(unescape(encodeURIComponent(s4))) };
    BufferedBlockAlgorithm = class {
      constructor() {
        this._data = new WordArray(), this._nDataBytes = 0, this._minBufferSize = 0, this.blockSize = 16;
      }
      reset() {
        this._data = new WordArray(), this._nDataBytes = 0;
      }
      _append(s4) {
        "string" == typeof s4 && (s4 = tt.parse(s4)), this._data.concat(s4), this._nDataBytes += s4.sigBytes;
      }
      _doProcessBlock(s4, l3) {
      }
      _process(s4) {
        let l3, h2 = this._data.sigBytes / (4 * this.blockSize);
        h2 = s4 ? Math.ceil(h2) : Math.max((0 | h2) - this._minBufferSize, 0);
        const y3 = h2 * this.blockSize, b2 = Math.min(4 * y3, this._data.sigBytes);
        if (y3) {
          for (let s5 = 0; s5 < y3; s5 += this.blockSize)
            this._doProcessBlock(this._data.words, s5);
          l3 = this._data.words.splice(0, y3), this._data.sigBytes -= b2;
        }
        return new WordArray(l3, b2);
      }
    };
    Hasher = class extends BufferedBlockAlgorithm {
      update(s4) {
        return this._append(s4), this._process(), this;
      }
      finalize(s4) {
        s4 && this._append(s4);
      }
    };
    rt2 = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    st = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    it = [];
    SHA256 = class extends Hasher {
      constructor() {
        super(...arguments), this._hash = new WordArray([...rt2]);
      }
      reset() {
        super.reset(), this._hash = new WordArray([...rt2]);
      }
      _doProcessBlock(s4, l3) {
        const h2 = this._hash.words;
        let y3 = h2[0], b2 = h2[1], w4 = h2[2], S2 = h2[3], E2 = h2[4], $3 = h2[5], T2 = h2[6], O2 = h2[7];
        for (let h3 = 0; h3 < 64; h3++) {
          if (h3 < 16)
            it[h3] = 0 | s4[l3 + h3];
          else {
            const s5 = it[h3 - 15], l4 = (s5 << 25 | s5 >>> 7) ^ (s5 << 14 | s5 >>> 18) ^ s5 >>> 3, y4 = it[h3 - 2], b3 = (y4 << 15 | y4 >>> 17) ^ (y4 << 13 | y4 >>> 19) ^ y4 >>> 10;
            it[h3] = l4 + it[h3 - 7] + b3 + it[h3 - 16];
          }
          const B2 = y3 & b2 ^ y3 & w4 ^ b2 & w4, F2 = (y3 << 30 | y3 >>> 2) ^ (y3 << 19 | y3 >>> 13) ^ (y3 << 10 | y3 >>> 22), L2 = O2 + ((E2 << 26 | E2 >>> 6) ^ (E2 << 21 | E2 >>> 11) ^ (E2 << 7 | E2 >>> 25)) + (E2 & $3 ^ ~E2 & T2) + st[h3] + it[h3];
          O2 = T2, T2 = $3, $3 = E2, E2 = S2 + L2 | 0, S2 = w4, w4 = b2, b2 = y3, y3 = L2 + (F2 + B2) | 0;
        }
        h2[0] = h2[0] + y3 | 0, h2[1] = h2[1] + b2 | 0, h2[2] = h2[2] + w4 | 0, h2[3] = h2[3] + S2 | 0, h2[4] = h2[4] + E2 | 0, h2[5] = h2[5] + $3 | 0, h2[6] = h2[6] + T2 | 0, h2[7] = h2[7] + O2 | 0;
      }
      finalize(s4) {
        super.finalize(s4);
        const l3 = 8 * this._nDataBytes, h2 = 8 * this._data.sigBytes;
        return this._data.words[h2 >>> 5] |= 128 << 24 - h2 % 32, this._data.words[14 + (h2 + 64 >>> 9 << 4)] = Math.floor(l3 / 4294967296), this._data.words[15 + (h2 + 64 >>> 9 << 4)] = l3, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
    };
    ot = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
    at = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    ct = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    lt = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    dt = createDefu();
    ht2 = createDefu((s4, l3, h2) => {
      if (void 0 !== s4[l3] && "function" == typeof h2)
        return s4[l3] = h2(s4[l3]), true;
    });
    pt = globalThis.crypto;
    mt = { randomUUID: () => pt.randomUUID(), getRandomValues: (s4) => pt.getRandomValues(s4), subtle: pt.subtle };
    yt = {};
    vt = Array.from({ length: 64 });
    for (let s4 = 0, l3 = "A".charCodeAt(0), h2 = "Z".charCodeAt(0); s4 + l3 <= h2; s4++) {
      const h3 = String.fromCharCode(s4 + l3);
      yt[h3] = s4, vt[s4] = h3;
    }
    for (let s4 = 0, l3 = "a".charCodeAt(0), h2 = "z".charCodeAt(0); s4 + l3 <= h2; s4++) {
      const h3 = String.fromCharCode(s4 + l3), y3 = s4 + 26;
      yt[h3] = y3, vt[y3] = h3;
    }
    for (let s4 = 0; s4 < 10; s4++) {
      yt[s4.toString(10)] = s4 + 52;
      const l3 = s4.toString(10), h2 = s4 + 52;
      yt[l3] = h2, vt[h2] = l3;
    }
    yt["-"] = 62, vt[62] = "-", yt._ = 63, vt[63] = "_";
    stringToBuffer = (s4) => new TextEncoder().encode(s4);
    base64urlDecode = (s4) => {
      const l3 = s4 + "=".repeat((4 - s4.length % 4) % 4);
      let h2 = l3.length / 4 * 3;
      l3.endsWith("==") ? h2 -= 2 : l3.endsWith("=") && h2--;
      const y3 = new ArrayBuffer(h2), b2 = new DataView(y3);
      for (let s5 = 0; s5 < l3.length; s5 += 4) {
        let h3 = 0, y4 = 0;
        for (let b3 = s5, w5 = s5 + 3; b3 <= w5; b3++)
          if ("=" === l3[b3])
            h3 >>= 6;
          else {
            if (!(l3[b3] in yt))
              throw new TypeError(`Invalid character ${l3[b3]} in base64 string.`);
            h3 |= yt[l3[b3]] << 6 * (w5 - b3), y4 += 6;
          }
        const w4 = s5 / 4 * 3;
        h3 >>= y4 % 8;
        const S2 = Math.floor(y4 / 8);
        for (let s6 = 0; s6 < S2; s6++) {
          const l4 = 8 * (S2 - s6 - 1);
          b2.setUint8(w4 + s6, (h3 & 255 << l4) >> l4);
        }
      }
      return new Uint8Array(y3);
    };
    base64urlEncode = (s4) => {
      const l3 = "string" == typeof s4 ? stringToBuffer(s4) : s4;
      let h2 = "";
      for (let s5 = 0; s5 < l3.length; s5 += 3) {
        let y3 = 0, b2 = 0;
        for (let h3 = s5, w5 = Math.min(s5 + 3, l3.length); h3 < w5; h3++)
          y3 |= l3[h3] << 8 * (w5 - h3 - 1), b2 += 8;
        const w4 = Math.ceil(b2 / 6);
        y3 <<= 6 * w4 - b2;
        for (let s6 = 1; s6 <= w4; s6++) {
          const l4 = 6 * (w4 - s6);
          h2 += vt[(y3 & 63 << l4) >> l4];
        }
      }
      return h2;
    };
    bt = { encryption: { saltBits: 256, algorithm: "aes-256-cbc", iterations: 1, minPasswordlength: 32 }, integrity: { saltBits: 256, algorithm: "sha256", iterations: 1, minPasswordlength: 32 }, ttl: 0, timestampSkewSec: 60, localtimeOffsetMsec: 0 };
    clone = (s4) => ({ ...s4, encryption: { ...s4.encryption }, integrity: { ...s4.integrity } });
    xt = { "aes-128-ctr": { keyBits: 128, ivBits: 128, name: "AES-CTR" }, "aes-256-cbc": { keyBits: 256, ivBits: 128, name: "AES-CBC" }, sha256: { keyBits: 256, name: "SHA-256" } };
    Rt = "Fe26.2";
    randomBits = (s4, l3) => {
      if (l3 < 1)
        throw new Error("Invalid random bits count");
      return ((s5, l4) => {
        const h2 = new Uint8Array(l4);
        return s5.getRandomValues(h2), h2;
      })(s4, Math.ceil(l3 / 8));
    };
    generateKey = async (s4, l3, h2) => {
      var y3;
      if (!(null == l3 ? void 0 : l3.length))
        throw new Error("Empty password");
      if (null == h2 || "object" != typeof h2)
        throw new Error("Bad options");
      if (!(h2.algorithm in xt))
        throw new Error(`Unknown algorithm: ${h2.algorithm}`);
      const b2 = xt[h2.algorithm], w4 = {}, S2 = null != (y3 = h2.hmac) && y3, E2 = S2 ? { name: "HMAC", hash: b2.name } : { name: b2.name }, $3 = S2 ? ["sign", "verify"] : ["encrypt", "decrypt"];
      if ("string" == typeof l3) {
        if (l3.length < h2.minPasswordlength)
          throw new Error(`Password string too short (min ${h2.minPasswordlength} characters required)`);
        let { salt: y4 = "" } = h2;
        if (!y4) {
          const { saltBits: l4 = 0 } = h2;
          if (!l4)
            throw new Error("Missing salt and saltBits options");
          const b3 = randomBits(s4, l4);
          y4 = [...new Uint8Array(b3)].map((s5) => s5.toString(16).padStart(2, "0")).join("");
        }
        const S3 = await (async (s5, l4, h3, y5, b3, w5) => {
          const S4 = stringToBuffer(l4), E3 = await s5.subtle.importKey("raw", S4, { name: "PBKDF2" }, false, ["deriveBits"]), $4 = { name: "PBKDF2", hash: w5, salt: stringToBuffer(h3), iterations: y5 };
          return await s5.subtle.deriveBits($4, E3, 8 * b3);
        })(s4, l3, y4, h2.iterations, b2.keyBits / 8, "SHA-1"), T2 = await s4.subtle.importKey("raw", S3, E2, false, $3);
        w4.key = T2, w4.salt = y4;
      } else {
        if (l3.length < b2.keyBits / 8)
          throw new Error("Key buffer (password) too small");
        w4.key = await s4.subtle.importKey("raw", l3, E2, false, $3), w4.salt = "";
      }
      return h2.iv ? w4.iv = h2.iv : "ivBits" in b2 && (w4.iv = randomBits(s4, b2.ivBits)), w4;
    };
    getEncryptParams = (s4, l3, h2) => ["aes-128-ctr" === s4 ? { name: "AES-CTR", counter: l3.iv, length: 128 } : { name: "AES-CBC", iv: l3.iv }, l3.key, "string" == typeof h2 ? stringToBuffer(h2) : h2];
    decrypt = async (s4, l3, h2, y3) => {
      const b2 = await generateKey(s4, l3, h2), w4 = await s4.subtle.decrypt(...getEncryptParams(h2.algorithm, b2, y3));
      return S2 = new Uint8Array(w4), new TextDecoder().decode(S2);
      var S2;
    };
    hmacWithPassword = async (s4, l3, h2, y3) => {
      const b2 = await generateKey(s4, l3, { ...h2, hmac: true }), w4 = stringToBuffer(y3), S2 = await s4.subtle.sign({ name: "HMAC" }, b2.key, w4);
      return { digest: base64urlEncode(new Uint8Array(S2)), salt: b2.salt };
    };
    normalizePassword = (s4) => "string" == typeof s4 || s4 instanceof Uint8Array ? { encryption: s4, integrity: s4 } : "secret" in s4 ? { id: s4.id, encryption: s4.secret, integrity: s4.secret } : { id: s4.id, encryption: s4.encryption, integrity: s4.integrity };
    seal = async (s4, l3, h2, y3) => {
      if (!h2)
        throw new Error("Empty password");
      const b2 = clone(y3), w4 = Date.now() + (b2.localtimeOffsetMsec || 0), S2 = JSON.stringify(l3), E2 = normalizePassword(h2), { id: $3 = "", encryption: T2, integrity: O2 } = E2;
      if ($3 && !/^\w+$/.test($3))
        throw new Error("Invalid password id");
      const { encrypted: B2, key: F2 } = await (async (s5, l4, h3, y4) => {
        const b3 = await generateKey(s5, l4, h3), w5 = await s5.subtle.encrypt(...getEncryptParams(h3.algorithm, b3, y4));
        return { encrypted: new Uint8Array(w5), key: b3 };
      })(s4, T2, b2.encryption, S2), L2 = base64urlEncode(new Uint8Array(B2)), U2 = base64urlEncode(F2.iv), D3 = b2.ttl ? w4 + b2.ttl : "", q2 = `${Rt}*${$3}*${F2.salt}*${U2}*${L2}*${D3}`, K2 = await hmacWithPassword(s4, O2, b2.integrity, q2);
      return `${q2}*${K2.salt}*${K2.digest}`;
    };
    unseal = async (s4, l3, h2, y3) => {
      if (!h2)
        throw new Error("Empty password");
      const b2 = clone(y3), w4 = Date.now() + (b2.localtimeOffsetMsec || 0), S2 = l3.split("*");
      if (8 !== S2.length)
        throw new Error("Incorrect number of sealed components");
      const E2 = S2[0];
      let $3 = S2[1];
      const T2 = S2[2], O2 = S2[3], B2 = S2[4], F2 = S2[5], L2 = S2[6], U2 = S2[7], D3 = `${E2}*${$3}*${T2}*${O2}*${B2}*${F2}`;
      if (Rt !== E2)
        throw new Error("Wrong mac prefix");
      if (F2) {
        if (!/^\d+$/.test(F2))
          throw new Error("Invalid expiration");
        if (Number.parseInt(F2, 10) <= w4 - 1e3 * b2.timestampSkewSec)
          throw new Error("Expired seal");
      }
      let q2 = "";
      if ($3 = $3 || "default", "string" == typeof h2 || h2 instanceof Uint8Array)
        q2 = h2;
      else {
        if (!($3 in h2))
          throw new Error(`Cannot find password: ${$3}`);
        q2 = h2[$3];
      }
      q2 = normalizePassword(q2);
      const K2 = b2.integrity;
      K2.salt = L2;
      if (!((s5, l4) => {
        let h3 = s5.length === l4.length ? 0 : 1;
        h3 && (l4 = s5);
        for (let y4 = 0; y4 < s5.length; y4 += 1)
          h3 |= s5.charCodeAt(y4) ^ l4.charCodeAt(y4);
        return 0 === h3;
      })((await hmacWithPassword(s4, q2.integrity, K2, D3)).digest, U2))
        throw new Error("Bad hmac value");
      const Y2 = base64urlDecode(B2), Q2 = b2.encryption;
      Q2.salt = T2, Q2.iv = base64urlDecode(O2);
      const se2 = await decrypt(s4, q2.encryption, Q2, Y2);
      return se2 ? JSON.parse(se2) : null;
    };
    kt = 10;
    At = class {
      __unenv__ = true;
      _events = /* @__PURE__ */ Object.create(null);
      _maxListeners;
      static get defaultMaxListeners() {
        return kt;
      }
      static set defaultMaxListeners(s4) {
        if ("number" != typeof s4 || s4 < 0 || Number.isNaN(s4))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + s4 + ".");
        kt = s4;
      }
      setMaxListeners(s4) {
        if ("number" != typeof s4 || s4 < 0 || Number.isNaN(s4))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + s4 + ".");
        return this._maxListeners = s4, this;
      }
      getMaxListeners() {
        return _getMaxListeners(this);
      }
      emit(s4, ...l3) {
        if (!this._events[s4] || 0 === this._events[s4].length)
          return false;
        if ("error" === s4) {
          let s5;
          if (l3.length > 0 && (s5 = l3[0]), s5 instanceof Error)
            throw s5;
          const h2 = new Error("Unhandled error." + (s5 ? " (" + s5.message + ")" : ""));
          throw h2.context = s5, h2;
        }
        for (const h2 of this._events[s4])
          (h2.listener || h2).apply(this, l3);
        return true;
      }
      addListener(s4, l3) {
        return _addListener(this, s4, l3, false);
      }
      on(s4, l3) {
        return _addListener(this, s4, l3, false);
      }
      prependListener(s4, l3) {
        return _addListener(this, s4, l3, true);
      }
      once(s4, l3) {
        return this.on(s4, _wrapOnce(this, s4, l3));
      }
      prependOnceListener(s4, l3) {
        return this.prependListener(s4, _wrapOnce(this, s4, l3));
      }
      removeListener(s4, l3) {
        return function(s5, l4, h2) {
          if (_checkListener(h2), !s5._events[l4] || 0 === s5._events[l4].length)
            return s5;
          const y3 = s5._events[l4].length;
          if (s5._events[l4] = s5._events[l4].filter((s6) => s6 !== h2), y3 === s5._events[l4].length)
            return s5;
          s5._events.removeListener && s5.emit("removeListener", l4, h2.listener || h2);
          0 === s5._events[l4].length && delete s5._events[l4];
          return s5;
        }(this, s4, l3);
      }
      off(s4, l3) {
        return this.removeListener(s4, l3);
      }
      removeAllListeners(s4) {
        return function(s5, l3) {
          if (!s5._events[l3] || 0 === s5._events[l3].length)
            return s5;
          if (s5._events.removeListener)
            for (const h2 of s5._events[l3])
              s5.emit("removeListener", l3, h2.listener || h2);
          return delete s5._events[l3], s5;
        }(this, s4);
      }
      listeners(s4) {
        return _listeners(this, s4, true);
      }
      rawListeners(s4) {
        return _listeners(this, s4, false);
      }
      listenerCount(s4) {
        return this.rawListeners(s4).length;
      }
      eventNames() {
        return Object.keys(this._events);
      }
    };
    zt = globalThis.EventEmitter || At;
    _Readable = class extends zt {
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
      static from(s4, l3) {
        return new _Readable(l3);
      }
      constructor(s4) {
        super();
      }
      _read(s4) {
      }
      read(s4) {
      }
      setEncoding(s4) {
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
      unpipe(s4) {
        return this;
      }
      unshift(s4, l3) {
      }
      wrap(s4) {
        return this;
      }
      push(s4, l3) {
        return false;
      }
      _destroy(s4, l3) {
        this.removeAllListeners();
      }
      destroy(s4) {
        return this.destroyed = true, this._destroy(s4), this;
      }
      pipe(s4, l3) {
        return {};
      }
      compose(s4, l3) {
        throw new Error("[unenv] Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw createNotImplementedError("Readable.asyncIterator");
      }
      iterator(s4) {
        throw createNotImplementedError("Readable.iterator");
      }
      map(s4, l3) {
        throw createNotImplementedError("Readable.map");
      }
      filter(s4, l3) {
        throw createNotImplementedError("Readable.filter");
      }
      forEach(s4, l3) {
        throw createNotImplementedError("Readable.forEach");
      }
      reduce(s4, l3, h2) {
        throw createNotImplementedError("Readable.reduce");
      }
      find(s4, l3) {
        throw createNotImplementedError("Readable.find");
      }
      findIndex(s4, l3) {
        throw createNotImplementedError("Readable.findIndex");
      }
      some(s4, l3) {
        throw createNotImplementedError("Readable.some");
      }
      toArray(s4) {
        throw createNotImplementedError("Readable.toArray");
      }
      every(s4, l3) {
        throw createNotImplementedError("Readable.every");
      }
      flatMap(s4, l3) {
        throw createNotImplementedError("Readable.flatMap");
      }
      drop(s4, l3) {
        throw createNotImplementedError("Readable.drop");
      }
      take(s4, l3) {
        throw createNotImplementedError("Readable.take");
      }
      asIndexedPairs(s4) {
        throw createNotImplementedError("Readable.asIndexedPairs");
      }
    };
    Tt = globalThis.Readable || _Readable;
    jt = globalThis.Writable || class extends zt {
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
      constructor(s4) {
        super();
      }
      pipe(s4, l3) {
        return {};
      }
      _write(s4, l3, h2) {
        if (this.writableEnded)
          h2 && h2();
        else {
          if (void 0 === this._data)
            this._data = s4;
          else {
            const h3 = "string" == typeof this._data ? B.from(this._data, this._encoding || l3 || "utf8") : this._data, y3 = "string" == typeof s4 ? B.from(s4, l3 || this._encoding || "utf8") : s4;
            this._data = B.concat([h3, y3]);
          }
          this._encoding = l3, h2 && h2();
        }
      }
      _writev(s4, l3) {
      }
      _destroy(s4, l3) {
      }
      _final(s4) {
      }
      write(s4, l3, h2) {
        const y3 = "string" == typeof l3 ? this._encoding : "utf-8", b2 = "function" == typeof l3 ? l3 : "function" == typeof h2 ? h2 : void 0;
        return this._write(s4, y3, b2), true;
      }
      setDefaultEncoding(s4) {
        return this;
      }
      end(s4, l3, h2) {
        const y3 = "function" == typeof s4 ? s4 : "function" == typeof l3 ? l3 : "function" == typeof h2 ? h2 : void 0;
        if (this.writableEnded)
          return y3 && y3(), this;
        const b2 = s4 === y3 ? void 0 : s4;
        if (b2) {
          const s5 = l3 === y3 ? void 0 : l3;
          this.write(b2, s5, y3);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(s4) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(s4, l3) {
        throw new Error("[h3] Method not implemented.");
      }
    };
    Ot = class {
      allowHalfOpen = true;
      _destroy;
      constructor(s4 = new Tt(), l3 = new jt()) {
        Object.assign(this, s4), Object.assign(this, l3), this._destroy = function(...s5) {
          return function(...l4) {
            for (const h2 of s5)
              h2(...l4);
          };
        }(s4._destroy, l3._destroy);
      }
    };
    Bt = getDuplex();
    Ft = globalThis.Duplex || Bt;
    Socket = class extends Ft {
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
      constructor(s4) {
        super();
      }
      write(s4, l3, h2) {
        return false;
      }
      connect(s4, l3, h2) {
        return this;
      }
      end(s4, l3, h2) {
        return this;
      }
      setEncoding(s4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(s4, l3) {
        return this;
      }
      setNoDelay(s4) {
        return this;
      }
      setKeepAlive(s4, l3) {
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
        const s4 = new Error("ERR_SOCKET_CLOSED");
        return s4.code = "ERR_SOCKET_CLOSED", this.destroy(s4), this;
      }
    };
    IncomingMessage = class extends Tt {
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
      constructor(s4) {
        super(), this.socket = this.connection = s4 || new Socket();
      }
      get rawHeaders() {
        return function(s4) {
          const l3 = [];
          for (const h2 in s4)
            if (Array.isArray(s4[h2]))
              for (const y3 of s4[h2])
                l3.push(h2, y3);
            else
              l3.push(h2, s4[h2]);
          return l3;
        }(this.headers);
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(s4, l3) {
        return this;
      }
      get headersDistinct() {
        return _distinct(this.headers);
      }
      get trailersDistinct() {
        return _distinct(this.trailers);
      }
    };
    ServerResponse = class extends jt {
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
      constructor(s4) {
        super(), this.req = s4;
      }
      assignSocket(s4) {
        s4._httpMessage = this, this.socket = s4, this.connection = s4, this.emit("socket", s4), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(s4) {
      }
      writeContinue(s4) {
      }
      writeHead(s4, l3, h2) {
        s4 && (this.statusCode = s4), "string" == typeof l3 && (this.statusMessage = l3, l3 = void 0);
        const y3 = h2 || l3;
        if (y3)
          if (Array.isArray(y3))
            ;
          else
            for (const s5 in y3)
              this.setHeader(s5, y3[s5]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(s4, l3) {
        return this;
      }
      appendHeader(s4, l3) {
        s4 = s4.toLowerCase();
        const h2 = this._headers[s4], y3 = [...Array.isArray(h2) ? h2 : [h2], ...Array.isArray(l3) ? l3 : [l3]].filter(Boolean);
        return this._headers[s4] = y3.length > 1 ? y3 : y3[0], this;
      }
      setHeader(s4, l3) {
        return this._headers[s4.toLowerCase()] = l3, this;
      }
      getHeader(s4) {
        return this._headers[s4.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(s4) {
        return s4.toLowerCase() in this._headers;
      }
      removeHeader(s4) {
        delete this._headers[s4.toLowerCase()];
      }
      addTrailers(s4) {
      }
      flushHeaders() {
      }
      writeEarlyHints(s4, l3) {
        "function" == typeof l3 && l3();
      }
    };
    Mt = Object.defineProperty;
    __publicField$2 = (s4, l3, h2) => (((s5, l4, h3) => {
      l4 in s5 ? Mt(s5, l4, { enumerable: true, configurable: true, writable: true, value: h3 }) : s5[l4] = h3;
    })(s4, "symbol" != typeof l3 ? l3 + "" : l3, h2), h2);
    H3Error = class extends Error {
      constructor(s4, l3 = {}) {
        super(s4, l3), __publicField$2(this, "statusCode", 500), __publicField$2(this, "fatal", false), __publicField$2(this, "unhandled", false), __publicField$2(this, "statusMessage"), __publicField$2(this, "data"), __publicField$2(this, "cause"), l3.cause && !this.cause && (this.cause = l3.cause);
      }
      toJSON() {
        const s4 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (s4.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (s4.data = this.data), s4;
      }
    };
    __publicField$2(H3Error, "__h3_error__", true);
    Nt = Symbol.for("h3RawBody");
    Lt = ["PATCH", "POST", "PUT", "DELETE"];
    Ut = { html: "text/html", json: "application/json" };
    Ht = /[^\u0009\u0020-\u007E]/g;
    qt = "undefined" == typeof setImmediate ? (s4) => s4() : setImmediate;
    setHeaders = function(s4, l3) {
      for (const [h2, y3] of Object.entries(l3))
        s4.node.res.setHeader(h2, y3);
    };
    Wt = setResponseHeader;
    Vt = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    Zt = /* @__PURE__ */ new Set(["transfer-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    Gt = Symbol("getSession");
    Yt = "h3";
    Xt = { path: "/", secure: true, httpOnly: true };
    Jt = Object.defineProperty;
    __publicField$1 = (s4, l3, h2) => (((s5, l4, h3) => {
      l4 in s5 ? Jt(s5, l4, { enumerable: true, configurable: true, writable: true, value: h3 }) : s5[l4] = h3;
    })(s4, "symbol" != typeof l3 ? l3 + "" : l3, h2), h2);
    H3Event = class {
      constructor(s4, l3) {
        __publicField$1(this, "__is_event__", true), __publicField$1(this, "node"), __publicField$1(this, "web"), __publicField$1(this, "context", {}), __publicField$1(this, "_method"), __publicField$1(this, "_path"), __publicField$1(this, "_headers"), __publicField$1(this, "_requestBody"), __publicField$1(this, "_handled", false), this.node = { req: s4, res: l3 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(s4) {
          const l3 = new Headers();
          for (const [h2, y3] of Object.entries(s4))
            if (Array.isArray(y3))
              for (const s5 of y3)
                l3.append(h2, s5);
            else
              y3 && l3.set(h2, y3);
          return l3;
        }(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(s4) {
        return Promise.resolve(s4).then((s5) => sendWebResponse(this, s5));
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
    Qt = defineEventHandler;
    lazyEventHandler = function(s4) {
      let l3, h2;
      const resolveHandler = () => h2 ? Promise.resolve(h2) : (l3 || (l3 = Promise.resolve(s4()).then((s5) => {
        const l4 = s5.default || s5;
        if ("function" != typeof l4)
          throw new TypeError("Invalid lazy handler result. It should be a function:", l4);
        return h2 = { handler: toEventHandler(s5.default || s5) }, h2;
      })), l3), y3 = Qt((s5) => h2 ? h2.handler(s5) : resolveHandler().then((l4) => l4.handler(s5)));
      return y3.__resolve__ = resolveHandler, y3;
    };
    er = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    FetchError = class extends Error {
      constructor(s4, l3) {
        super(s4, l3), this.name = "FetchError", l3?.cause && !this.cause && (this.cause = l3.cause);
      }
    };
    tr = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    rr = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    nr = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    sr = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    ir = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    or = function() {
      if ("undefined" != typeof globalThis)
        return globalThis;
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof global)
        return global;
      throw new Error("unable to locate global object");
    }();
    ar = or.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!")));
    cr = or.Headers;
    lr = or.AbortController;
    createFetch$1({ fetch: ar, Headers: cr, AbortController: lr });
    ur = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    fr = { run: (s4) => s4() };
    dr = void 0 !== console.createTask ? console.createTask : () => fr;
    Hookable = class {
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(s4, l3, h2 = {}) {
        if (!s4 || "function" != typeof l3)
          return () => {
          };
        const y3 = s4;
        let b2;
        for (; this._deprecatedHooks[s4]; )
          b2 = this._deprecatedHooks[s4], s4 = b2.to;
        if (b2 && !h2.allowDeprecated) {
          let s5 = b2.message;
          s5 || (s5 = `${y3} hook has been deprecated` + (b2.to ? `, please use ${b2.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(s5) || (console.warn(s5), this._deprecatedMessages.add(s5));
        }
        if (!l3.name)
          try {
            Object.defineProperty(l3, "name", { get: () => "_" + s4.replace(/\W+/g, "_") + "_hook_cb", configurable: true });
          } catch {
          }
        return this._hooks[s4] = this._hooks[s4] || [], this._hooks[s4].push(l3), () => {
          l3 && (this.removeHook(s4, l3), l3 = void 0);
        };
      }
      hookOnce(s4, l3) {
        let h2, _function = (...s5) => ("function" == typeof h2 && h2(), h2 = void 0, _function = void 0, l3(...s5));
        return h2 = this.hook(s4, _function), h2;
      }
      removeHook(s4, l3) {
        if (this._hooks[s4]) {
          const h2 = this._hooks[s4].indexOf(l3);
          -1 !== h2 && this._hooks[s4].splice(h2, 1), 0 === this._hooks[s4].length && delete this._hooks[s4];
        }
      }
      deprecateHook(s4, l3) {
        this._deprecatedHooks[s4] = "string" == typeof l3 ? { to: l3 } : l3;
        const h2 = this._hooks[s4] || [];
        delete this._hooks[s4];
        for (const l4 of h2)
          this.hook(s4, l4);
      }
      deprecateHooks(s4) {
        Object.assign(this._deprecatedHooks, s4);
        for (const l3 in s4)
          this.deprecateHook(l3, s4[l3]);
      }
      addHooks(s4) {
        const l3 = flatHooks(s4), h2 = Object.keys(l3).map((s5) => this.hook(s5, l3[s5]));
        return () => {
          for (const s5 of h2.splice(0, h2.length))
            s5();
        };
      }
      removeHooks(s4) {
        const l3 = flatHooks(s4);
        for (const s5 in l3)
          this.removeHook(s5, l3[s5]);
      }
      removeAllHooks() {
        for (const s4 in this._hooks)
          delete this._hooks[s4];
      }
      callHook(s4, ...l3) {
        return l3.unshift(s4), this.callHookWith(serialTaskCaller, s4, ...l3);
      }
      callHookParallel(s4, ...l3) {
        return l3.unshift(s4), this.callHookWith(parallelTaskCaller, s4, ...l3);
      }
      callHookWith(s4, l3, ...h2) {
        const y3 = this._before || this._after ? { name: l3, args: h2, context: {} } : void 0;
        this._before && callEachWith(this._before, y3);
        const b2 = s4(l3 in this._hooks ? [...this._hooks[l3]] : [], h2);
        return b2 instanceof Promise ? b2.finally(() => {
          this._after && y3 && callEachWith(this._after, y3);
        }) : (this._after && y3 && callEachWith(this._after, y3), b2);
      }
      beforeEach(s4) {
        return this._before = this._before || [], this._before.push(s4), () => {
          if (void 0 !== this._before) {
            const l3 = this._before.indexOf(s4);
            -1 !== l3 && this._before.splice(l3, 1);
          }
        };
      }
      afterEach(s4) {
        return this._after = this._after || [], this._after.push(s4), () => {
          if (void 0 !== this._after) {
            const l3 = this._after.indexOf(s4);
            -1 !== l3 && this._after.splice(l3, 1);
          }
        };
      }
    };
    hr = /\d/;
    pr = ["-", "_", "/", "."];
    mr = /{{(.*?)}}/g;
    yr = ht2({});
    gr = { app: { baseURL: "/" }, nitro: { routeRules: { "/_build/assets/**": { headers: { "cache-control": "public, immutable, max-age=31536000" } } } } };
    vr = { prefix: "NITRO_", altPrefix: gr.nitro.envPrefix ?? le.env.NITRO_ENV_PREFIX ?? "_", envExpansion: gr.nitro.envExpansion ?? le.env.NITRO_ENV_EXPANSION ?? false };
    br = _deepFreeze(function applyEnv(s4, l3, h2 = "") {
      for (const y3 in s4) {
        const b2 = h2 ? `${h2}_${y3}` : y3, w4 = getEnv(b2, l3);
        _isObject(s4[y3]) ? _isObject(w4) ? (s4[y3] = { ...s4[y3], ...w4 }, applyEnv(s4[y3], l3, b2)) : void 0 === w4 ? applyEnv(s4[y3], l3, b2) : s4[y3] = w4 ?? s4[y3] : s4[y3] = w4 ?? s4[y3], l3.envExpansion && "string" == typeof s4[y3] && (s4[y3] = s4[y3].replace(mr, (s5, l4) => le.env[l4] || s5));
      }
      return s4;
    }(klona(gr), vr));
    _deepFreeze(klona(yr)), new Proxy(/* @__PURE__ */ Object.create(null), { get: (s4, l3) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const h2 = useRuntimeConfig();
      if (l3 in h2)
        return h2[l3];
    } });
    wr = "base64:";
    xr = ["hasItem", "getItem", "getItemRaw", "setItem", "setItemRaw", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    memory = () => {
      const s4 = /* @__PURE__ */ new Map();
      return { name: "memory", options: {}, hasItem: (l3) => s4.has(l3), getItem: (l3) => s4.get(l3) ?? null, getItemRaw: (l3) => s4.get(l3) ?? null, setItem(l3, h2) {
        s4.set(l3, h2);
      }, setItemRaw(l3, h2) {
        s4.set(l3, h2);
      }, removeItem(l3) {
        s4.delete(l3);
      }, getKeys: () => Array.from(s4.keys()), clear() {
        s4.clear();
      }, dispose() {
        s4.clear();
      } };
    };
    Sr = {};
    normalizeKey = function(s4) {
      return s4 ? s4.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
    };
    Er = { getKeys: () => Promise.resolve(Object.keys(Sr)), hasItem: (s4) => (s4 = normalizeKey(s4), Promise.resolve(s4 in Sr)), getItem: (s4) => (s4 = normalizeKey(s4), Promise.resolve(Sr[s4] ? Sr[s4].import() : null)), getMeta: (s4) => (s4 = normalizeKey(s4), Promise.resolve(Sr[s4] ? Sr[s4].meta : {})) };
    $r = createStorage({});
    $r.mount("/assets", Er);
    Ir = { name: "_", base: "/cache", swr: true, maxAge: 1 };
    cachedFunction = function(s4, l3 = {}) {
      l3 = { ...Ir, ...l3 };
      const h2 = {}, y3 = l3.group || "nitro/functions", b2 = l3.name || s4.name || "_", w4 = l3.integrity || hash([s4, l3]), S2 = l3.validate || ((s5) => void 0 !== s5.value);
      return async (...E2) => {
        if (await l3.shouldBypassCache?.(...E2))
          return s4(...E2);
        const $3 = await (l3.getKey || getKey)(...E2), T2 = await l3.shouldInvalidateCache?.(...E2), O2 = await async function(s5, E3, $4, T3) {
          const O3 = [l3.base, y3, b2, s5 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
          let B3 = await useStorage().getItem(O3) || {};
          if ("object" != typeof B3) {
            B3 = {};
            const s6 = new Error("Malformed data read from cache.");
            console.error("[nitro] [cache]", s6), useNitroApp().captureError(s6, { event: T3, tags: ["cache"] });
          }
          const F2 = 1e3 * (l3.maxAge ?? l3.maxAge ?? 0);
          F2 && (B3.expires = Date.now() + F2);
          const L2 = $4 || B3.integrity !== w4 || F2 && Date.now() - (B3.mtime || 0) > F2 || false === S2(B3), U2 = L2 ? (async () => {
            const y4 = h2[s5];
            y4 || (void 0 !== B3.value && (l3.staleMaxAge || 0) >= 0 && false === l3.swr && (B3.value = void 0, B3.integrity = void 0, B3.mtime = void 0, B3.expires = void 0), h2[s5] = Promise.resolve(E3()));
            try {
              B3.value = await h2[s5];
            } catch (l4) {
              throw y4 || delete h2[s5], l4;
            }
            if (!y4 && (B3.mtime = Date.now(), B3.integrity = w4, delete h2[s5], false !== S2(B3))) {
              const s6 = useStorage().setItem(O3, B3).catch((s7) => {
                console.error("[nitro] [cache] Cache write error.", s7), useNitroApp().captureError(s7, { event: T3, tags: ["cache"] });
              });
              T3 && T3.waitUntil && T3.waitUntil(s6);
            }
          })() : Promise.resolve();
          return void 0 === B3.value ? await U2 : L2 && T3 && T3.waitUntil && T3.waitUntil(U2), l3.swr && false !== S2(B3) ? (U2.catch((s6) => {
            console.error("[nitro] [cache] SWR handler error.", s6), useNitroApp().captureError(s6, { event: T3, tags: ["cache"] });
          }), B3) : U2.then(() => B3);
        }($3, () => s4(...E2), T2, E2[0] && isEvent(E2[0]) ? E2[0] : void 0);
        let B2 = O2.value;
        return l3.transform && (B2 = await l3.transform(O2, ...E2) || B2), B2;
      };
    };
    cachedEventHandler = function(s4, l3 = Ir) {
      const h2 = (l3.varies || []).filter(Boolean).map((s5) => s5.toLowerCase()).sort(), y3 = { ...l3, getKey: async (s5) => {
        const y4 = await l3.getKey?.(s5);
        if (y4)
          return escapeKey(y4);
        const b3 = s5.node.req.originalUrl || s5.node.req.url || s5.path;
        return [`${escapeKey(decodeURI(parseURL(b3).pathname)).slice(0, 16) || "index"}.${hash(b3)}`, ...h2.map((l4) => [l4, s5.node.req.headers[l4]]).map(([s6, l4]) => `${escapeKey(s6)}.${hash(l4)}`)].join(":");
      }, validate: (s5) => !!s5.value && (!(s5.value.code >= 400) && (void 0 !== s5.value.body && ("undefined" !== s5.value.headers.etag && "undefined" !== s5.value.headers["last-modified"]))), group: l3.group || "nitro/handlers", integrity: l3.integrity || hash([s4, l3]) }, b2 = cachedFunction(async (y4) => {
        const b3 = {};
        for (const s5 of h2)
          b3[s5] = y4.node.req.headers[s5];
        const w4 = cloneWithProxy(y4.node.req, { headers: b3 }), S2 = {};
        let E2;
        const $3 = createEvent(w4, cloneWithProxy(y4.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: (s5) => S2[s5], setHeader(s5, l4) {
          return S2[s5] = l4, this;
        }, getHeaderNames: () => Object.keys(S2), hasHeader: (s5) => s5 in S2, removeHeader(s5) {
          delete S2[s5];
        }, getHeaders: () => S2, end(s5, l4, h3) {
          return "string" == typeof s5 && (E2 = s5), "function" == typeof l4 && l4(), "function" == typeof h3 && h3(), this;
        }, write(s5, l4, h3) {
          return "string" == typeof s5 && (E2 = s5), "function" == typeof l4 && l4(), "function" == typeof h3 && h3(), this;
        }, writeHead(s5, l4) {
          if (this.statusCode = s5, l4)
            for (const s6 in l4)
              this.setHeader(s6, l4[s6]);
          return this;
        } }));
        $3.fetch = (s5, l4) => fetchWithEvent($3, s5, l4, { fetch: useNitroApp().localFetch }), $3.$fetch = (s5, l4) => fetchWithEvent($3, s5, l4, { fetch: globalThis.$fetch }), $3.context = y4.context;
        const T2 = await s4($3) || E2, O2 = $3.node.res.getHeaders();
        O2.etag = String(O2.Etag || O2.etag || `W/"${hash(T2)}"`), O2["last-modified"] = String(O2["Last-Modified"] || O2["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const B2 = [];
        l3.swr ? (l3.maxAge && B2.push(`s-maxage=${l3.maxAge}`), l3.staleMaxAge ? B2.push(`stale-while-revalidate=${l3.staleMaxAge}`) : B2.push("stale-while-revalidate")) : l3.maxAge && B2.push(`max-age=${l3.maxAge}`), B2.length > 0 && (O2["cache-control"] = B2.join(", "));
        return { code: $3.node.res.statusCode, headers: O2, body: T2 };
      }, y3);
      return defineEventHandler(async (h3) => {
        if (l3.headersOnly) {
          if (handleCacheHeaders(h3, { maxAge: l3.maxAge }))
            return;
          return s4(h3);
        }
        const y4 = await b2(h3);
        if (h3.node.res.headersSent || h3.node.res.writableEnded)
          return y4.body;
        if (!handleCacheHeaders(h3, { modifiedTime: new Date(y4.headers["last-modified"]), etag: y4.headers.etag, maxAge: l3.maxAge })) {
          h3.node.res.statusCode = y4.code;
          for (const s5 in y4.headers) {
            const l4 = y4.headers[s5];
            "set-cookie" === s5 ? h3.node.res.appendHeader(s5, splitCookiesString(l4)) : h3.node.res.setHeader(s5, l4);
          }
          return y4.body;
        }
      });
    };
    Rr = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
    kr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    Ar = "__unctx__";
    zr = kr[Ar] || (kr[Ar] = function(s4 = {}) {
      const l3 = {};
      return { get: (h2, y3 = {}) => (l3[h2] || (l3[h2] = function(s5 = {}) {
        let l4, h3 = false;
        const checkConflict = (s6) => {
          if (l4 && l4 !== s6)
            throw new Error("Context conflict");
        };
        let y4;
        if (s5.asyncContext) {
          const l5 = s5.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          l5 ? y4 = new l5() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = () => {
          if (y4 && void 0 === l4) {
            const s6 = y4.getStore();
            if (void 0 !== s6)
              return s6;
          }
          return l4;
        };
        return { use: () => {
          const s6 = _getCurrentInstance();
          if (void 0 === s6)
            throw new Error("Context is not available");
          return s6;
        }, tryUse: () => _getCurrentInstance(), set: (s6, y5) => {
          y5 || checkConflict(s6), l4 = s6, h3 = true;
        }, unset: () => {
          l4 = void 0, h3 = false;
        }, call: (s6, b2) => {
          checkConflict(s6), l4 = s6;
          try {
            return y4 ? y4.run(s6, b2) : b2();
          } finally {
            h3 || (l4 = void 0);
          }
        }, async callAsync(s6, b2) {
          l4 = s6;
          const onRestore = () => {
            l4 = s6;
          }, onLeave = () => l4 === s6 ? onRestore : void 0;
          Tr.add(onLeave);
          try {
            const w4 = y4 ? y4.run(s6, b2) : b2();
            return h3 || (l4 = void 0), await w4;
          } finally {
            Tr.delete(onLeave);
          }
        } };
      }({ ...s4, ...y3 })), l3[h2], l3[h2]) };
    }());
    Pr = "__unctx_async_handlers__";
    Tr = kr[Pr] || (kr[Pr] = /* @__PURE__ */ new Set());
    jr = ((s4, l3 = {}) => zr.get(s4, l3))("nitro-app", { asyncContext: true, AsyncLocalStorage: s3 });
    Or = { name: "vinxi", routers: [{ name: "public", type: "static", base: "/", dir: "./public", root: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth", order: 0, outDir: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/.vinxi/build/public" }, { name: "ssr", type: "http", link: { client: "client" }, handler: "src/entry-server.tsx", extensions: ["js", "jsx", "ts", "tsx"], target: "server", root: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth", base: "/", outDir: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/.vinxi/build/ssr", order: 1 }, { name: "client", type: "client", base: "/_build", handler: "src/entry-client.tsx", extensions: ["js", "jsx", "ts", "tsx"], target: "browser", root: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth", outDir: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/.vinxi/build/client", order: 2 }, { name: "server-fns", type: "http", base: "/_server", handler: "../../node_modules/.pnpm/@solidjs+start@1.0.6_@testing-library+jest-dom@6.4.5_vitest@1.6.0_@types+node@20.12.12_@vites_juko2m6z6ve43uahm523j5vrhy/node_modules/@solidjs/start/dist/runtime/server-handler.js", target: "server", root: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth", outDir: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/.vinxi/build/server-fns", order: 3 }], server: { compressPublicAssets: { brotli: true }, routeRules: { "/_build/assets/**": { headers: { "cache-control": "public, immutable, max-age=31536000" } } }, experimental: { asyncContext: true }, preset: "cloudflare-pages", rollupConfig: { external: ["__STATIC_CONTENT_MANIFEST", "node:async_hooks"] } }, root: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth" };
    Fr = { ssr: { "_index-CW85aRig.js": { file: "assets/index-CW85aRig.js", name: "index" }, "src/routes/[...404].tsx?pick=default&pick=$css": { file: "_...404_.js", name: "_...404_", src: "src/routes/[...404].tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true }, "src/routes/about.tsx?pick=default&pick=$css": { file: "about.js", name: "about", src: "src/routes/about.tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true }, "src/routes/index.tsx?pick=default&pick=$css": { file: "index.js", name: "index", src: "src/routes/index.tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true, imports: ["_index-CW85aRig.js"] }, "src/routes/login.tsx?pick=default&pick=$css": { file: "login.js", name: "login", src: "src/routes/login.tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true, imports: ["_index-CW85aRig.js"] }, "virtual:$vinxi/handler/ssr": { file: "ssr.js", name: "ssr", src: "virtual:$vinxi/handler/ssr", isEntry: true, imports: ["_index-CW85aRig.js"], dynamicImports: ["src/routes/[...404].tsx?pick=default&pick=$css", "src/routes/[...404].tsx?pick=default&pick=$css", "src/routes/about.tsx?pick=default&pick=$css", "src/routes/about.tsx?pick=default&pick=$css", "src/routes/index.tsx?pick=default&pick=$css", "src/routes/index.tsx?pick=default&pick=$css", "src/routes/login.tsx?pick=default&pick=$css", "src/routes/login.tsx?pick=default&pick=$css"], css: ["assets/ssr-DK2sKxCa.css"] } }, client: { "_index-Dg2R-_Vj.js": { file: "assets/index-Dg2R-_Vj.js", name: "index", imports: ["_web-C6mMHEeS.js"] }, "_web-C6mMHEeS.js": { file: "assets/web-C6mMHEeS.js", name: "web" }, "src/routes/[...404].tsx?pick=default&pick=$css": { file: "assets/_...404_-BhV6neIA.js", name: "_...404_", src: "src/routes/[...404].tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true, imports: ["_web-C6mMHEeS.js"] }, "src/routes/about.tsx?pick=default&pick=$css": { file: "assets/about-Bz-YQ_D-.js", name: "about", src: "src/routes/about.tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true, imports: ["_web-C6mMHEeS.js"] }, "src/routes/index.tsx?pick=default&pick=$css": { file: "assets/index-76sbc7Fz.js", name: "index", src: "src/routes/index.tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true, imports: ["_web-C6mMHEeS.js", "_index-Dg2R-_Vj.js"] }, "src/routes/login.tsx?pick=default&pick=$css": { file: "assets/login-BnuTWnH4.js", name: "login", src: "src/routes/login.tsx?pick=default&pick=$css", isEntry: true, isDynamicEntry: true, imports: ["_web-C6mMHEeS.js", "_index-Dg2R-_Vj.js"] }, "virtual:$vinxi/handler/client": { file: "assets/client-CtjwUMax.js", name: "client", src: "virtual:$vinxi/handler/client", isEntry: true, imports: ["_web-C6mMHEeS.js", "_index-Dg2R-_Vj.js"], dynamicImports: ["src/routes/[...404].tsx?pick=default&pick=$css", "src/routes/about.tsx?pick=default&pick=$css", "src/routes/index.tsx?pick=default&pick=$css", "src/routes/login.tsx?pick=default&pick=$css"], css: ["assets/client-DK2sKxCa.css"] } }, "server-fns": { "_index2.mjs": { file: "index2.mjs", name: "index" }, "_server-fns.mjs": { file: "server-fns.mjs", name: "server-fns", imports: ["_index2.mjs"], dynamicImports: ["src/routes/[...404].tsx?pick=default&pick=$css", "src/routes/[...404].tsx?pick=default&pick=$css", "src/routes/about.tsx?pick=default&pick=$css", "src/routes/about.tsx?pick=default&pick=$css", "src/routes/index.tsx?pick=default&pick=$css", "src/routes/index.tsx?pick=default&pick=$css", "src/routes/login.tsx?pick=default&pick=$css", "src/routes/login.tsx?pick=default&pick=$css", "src/app.tsx"] }, "src/app.tsx": { file: "app.mjs", name: "app", src: "src/app.tsx", isDynamicEntry: true, imports: ["_server-fns.mjs", "_index2.mjs"], css: ["assets/app-DK2sKxCa.css"] }, "src/lib/index.ts": { file: "c_7576.mjs", name: "c_7576", src: "src/lib/index.ts", isEntry: true, imports: ["_index2.mjs"] }, "src/routes/[...404].tsx?pick=default&pick=$css": { file: "_...404_.mjs", name: "_...404_", src: "src/routes/[...404].tsx?pick=default&pick=$css", isDynamicEntry: true }, "src/routes/about.tsx?pick=default&pick=$css": { file: "about.mjs", name: "about", src: "src/routes/about.tsx?pick=default&pick=$css", isDynamicEntry: true }, "src/routes/index.tsx?pick=default&pick=$css": { file: "index.mjs", name: "index", src: "src/routes/index.tsx?pick=default&pick=$css", isDynamicEntry: true, imports: ["_index2.mjs"] }, "src/routes/login.tsx?pick=default&pick=$css": { file: "login.mjs", name: "login", src: "src/routes/login.tsx?pick=default&pick=$css", isDynamicEntry: true, imports: ["_index2.mjs"] }, "virtual:$vinxi/handler/server-fns": { file: "entry.mjs", name: "entry", src: "virtual:$vinxi/handler/server-fns", isEntry: true, imports: ["_server-fns.mjs", "_index2.mjs"] } } };
    Mr = { ssr: {}, client: {}, "server-fns": {} };
    Nr = "Invariant Violation";
    ({ setPrototypeOf: Lr = function(s4, l3) {
      return s4.__proto__ = l3, s4;
    } } = Object);
    InvariantError = class extends Error {
      framesToPop = 1;
      name = Nr;
      constructor(s4 = Nr) {
        super("number" == typeof s4 ? `${Nr}: ${s4} (see https://github.com/apollographql/invariant-packages)` : s4), Lr(this, InvariantError.prototype);
      }
    };
    Ur = /^[A-Za-z]:\//;
    Hr = /^[/\\]{2}/;
    Dr = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
    qr = /^[A-Za-z]:$/;
    join = function(...s4) {
      if (0 === s4.length)
        return ".";
      let l3;
      for (const h2 of s4)
        h2 && h2.length > 0 && (void 0 === l3 ? l3 = h2 : l3 += `/${h2}`);
      return void 0 === l3 ? "." : function(s5) {
        if (0 === s5.length)
          return ".";
        const l4 = (s5 = normalizeWindowsPath(s5)).match(Hr), h2 = isAbsolute(s5), y3 = "/" === s5[s5.length - 1];
        return 0 === (s5 = normalizeString(s5, !h2)).length ? h2 ? "/" : y3 ? "./" : "." : (y3 && (s5 += "/"), qr.test(s5) && (s5 += "/"), l4 ? h2 ? `//${s5}` : `//./${s5}` : h2 && !isAbsolute(s5) ? `/${s5}` : s5);
      }(l3.replace(/\/\/+/g, "/"));
    };
    resolve = function(...s4) {
      let l3 = "", h2 = false;
      for (let y3 = (s4 = s4.map((s5) => normalizeWindowsPath(s5))).length - 1; y3 >= -1 && !h2; y3--) {
        const b2 = y3 >= 0 ? s4[y3] : void 0 !== le && "function" == typeof le.cwd ? le.cwd().replace(/\\/g, "/") : "/";
        b2 && 0 !== b2.length && (l3 = `${b2}/${l3}`, h2 = isAbsolute(b2));
      }
      return l3 = normalizeString(l3, !h2), h2 && !isAbsolute(l3) ? `/${l3}` : l3.length > 0 ? l3 : ".";
    };
    isAbsolute = function(s4) {
      return Dr.test(s4);
    };
    dirname = function(s4) {
      const l3 = normalizeWindowsPath(s4).replace(/\/$/, "").split("/").slice(0, -1);
      return 1 === l3.length && qr.test(l3[0]) && (l3[0] += "/"), l3.join("/") || (isAbsolute(s4) ? "/" : ".");
    };
    Wr = globalThis.URL;
    pathToFileURL = function(s4) {
      return new Wr(s4);
    };
    Vr = Symbol("solid-track");
    Kr = Symbol("error");
    Zr = { context: null, owner: null, owned: null, cleanups: null };
    Gr = null;
    createRenderEffect = function(s4, l3) {
      Gr = createOwner();
      try {
        s4(l3);
      } catch (s5) {
        handleError(s5);
      } finally {
        Gr = Gr.owner;
      }
    };
    Yr = batch;
    Xr = {};
    Jr = createContext();
    Qr = ((s4) => (s4[s4.AggregateError = 1] = "AggregateError", s4[s4.ArrowFunction = 2] = "ArrowFunction", s4[s4.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", s4[s4.ObjectAssign = 8] = "ObjectAssign", s4[s4.BigIntTypedArray = 16] = "BigIntTypedArray", s4))(Qr || {});
    en = "__SEROVAL_REFS__";
    tn = "$R";
    rn = `self.${tn}`;
    nn = /* @__PURE__ */ new Map();
    cn = /* @__PURE__ */ new Map();
    "undefined" != typeof globalThis ? Object.defineProperty(globalThis, en, { value: cn, configurable: true, writable: false, enumerable: false }) : "undefined" != typeof self ? Object.defineProperty(self, en, { value: cn, configurable: true, writable: false, enumerable: false }) : "undefined" != typeof global && Object.defineProperty(global, en, { value: cn, configurable: true, writable: false, enumerable: false });
    ln = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" };
    un = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 };
    fn = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" };
    dn = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" };
    hn = y$1(2);
    pn = y$1(3);
    mn = y$1(1);
    yn = y$1(0);
    gn = y$1(4);
    vn = y$1(5);
    bn = y$1(6);
    wn = y$1(7);
    ({ toString: xn } = Object.prototype);
    Sn = class extends Error {
      constructor(s4, l3) {
        super(function(s5, l4) {
          return l4 instanceof Error ? `Seroval caught an error during the ${s5} process.
  
${l4.name}
${l4.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${s5} process.

"${xn.call(l4)}"

For more information, please check the "cause" property of this error.`;
        }(s4, l3)), this.cause = l3;
      }
    };
    En = class extends Sn {
      constructor(s4) {
        super("parsing", s4);
      }
    };
    $n = class extends Sn {
      constructor(s4) {
        super("serialization", s4);
      }
    };
    In = class extends Error {
      constructor(s4) {
        super(`The value ${xn.call(s4)} of type "${typeof s4}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`), this.value = s4;
      }
    };
    _n = class extends Error {
      constructor(s4) {
        super('Unsupported node type "' + s4.t + '".');
      }
    };
    Rn = class extends Error {
      constructor(s4) {
        super('Missing plugin for tag "' + s4 + '".');
      }
    };
    kn = class extends Error {
      constructor(s4) {
        super('Missing reference for the value "' + xn.call(s4) + '" of type "' + typeof s4 + '"'), this.value = s4;
      }
    };
    zn = {};
    Cn = {};
    Pn = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
    jn = class {
      constructor(s4) {
        this.marked = /* @__PURE__ */ new Set(), this.plugins = s4.plugins, this.features = 31 ^ (s4.disabledFeatures || 0), this.refs = s4.refs || /* @__PURE__ */ new Map();
      }
      markRef(s4) {
        this.marked.add(s4);
      }
      isMarked(s4) {
        return this.marked.has(s4);
      }
      getIndexedValue(s4) {
        let l3 = this.refs.get(s4);
        if (null != l3)
          return this.markRef(l3), { type: 1, value: Qe$2(l3) };
        let h2 = this.refs.size;
        return this.refs.set(s4, h2), { type: 0, value: h2 };
      }
      getReference(s4) {
        let l3 = this.getIndexedValue(s4);
        return 1 === l3.type ? l3 : re(s4) ? { type: 2, value: Ve$2(l3.value, s4) } : l3;
      }
      getStrictReference(s4) {
        f$2(re(s4), new In(s4));
        let l3 = this.getIndexedValue(s4);
        return 1 === l3.type ? l3.value : Ve$2(l3.value, s4);
      }
      parseFunction(s4) {
        return this.getStrictReference(s4);
      }
      parseWellKnownSymbol(s4) {
        let l3 = this.getReference(s4);
        return 0 !== l3.type ? l3.value : (f$2(s4 in un, new In(s4)), function(s5, l4) {
          return { t: 17, i: s5, s: un[l4], l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
        }(l3.value, s4));
      }
      parseSpecialReference(s4) {
        let l3 = this.getIndexedValue(Pn[s4]);
        return 1 === l3.type ? l3.value : { t: 26, i: l3.value, s: s4, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
      }
      parseIteratorFactory() {
        let s4 = this.getIndexedValue(zn);
        return 1 === s4.type ? s4.value : { t: 27, i: s4.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseWellKnownSymbol(Symbol.iterator), b: void 0, o: void 0 };
      }
      parseAsyncIteratorFactory() {
        let s4 = this.getIndexedValue(Cn);
        return 1 === s4.type ? s4.value : { t: 29, i: s4.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], f: void 0, b: void 0, o: void 0 };
      }
      createObjectNode(s4, l3, h2, y3) {
        return { t: h2 ? 11 : 10, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: y3, e: void 0, a: void 0, f: void 0, b: void 0, o: ue$3(l3) };
      }
      createMapNode(s4, l3, h2, y3) {
        return { t: 8, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: { k: l3, v: h2, s: y3 }, a: void 0, f: this.parseSpecialReference(0), b: void 0, o: void 0 };
      }
      createPromiseConstructorNode(s4) {
        return { t: 22, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseSpecialReference(1), b: void 0, o: void 0 };
      }
    };
    Bn = /^[$A-Z_][0-9A-Z_$]*$/i;
    Mn = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: void 0 };
    Nn = class {
      constructor(s4) {
        this.stack = [], this.flags = [], this.assignments = [], this.plugins = s4.plugins, this.features = s4.features, this.marked = new Set(s4.markedRefs);
      }
      createFunction(s4, l3) {
        return 2 & this.features ? (1 === s4.length ? s4[0] : "(" + s4.join(",") + ")") + "=>" + l3 : "function(" + s4.join(",") + "){return " + l3 + "}";
      }
      createEffectfulFunction(s4, l3) {
        return 2 & this.features ? (1 === s4.length ? s4[0] : "(" + s4.join(",") + ")") + "=>{" + l3 + "}" : "function(" + s4.join(",") + "){" + l3 + "}";
      }
      markRef(s4) {
        this.marked.add(s4);
      }
      isMarked(s4) {
        return this.marked.has(s4);
      }
      pushObjectFlag(s4, l3) {
        0 !== s4 && (this.markRef(l3), this.flags.push({ type: s4, value: this.getRefParam(l3) }));
      }
      resolveFlags() {
        let s4 = "";
        for (let l3 = 0, h2 = this.flags, y3 = h2.length; l3 < y3; l3++) {
          let y4 = h2[l3];
          s4 += Mn[y4.type] + "(" + y4.value + "),";
        }
        return s4;
      }
      resolvePatches() {
        let s4 = lr$1(this.assignments), l3 = this.resolveFlags();
        return s4 ? l3 ? s4 + l3 : s4 : l3;
      }
      createAssignment(s4, l3) {
        this.assignments.push({ t: 0, s: s4, k: void 0, v: l3 });
      }
      createAddAssignment(s4, l3) {
        this.assignments.push({ t: 1, s: this.getRefParam(s4), k: void 0, v: l3 });
      }
      createSetAssignment(s4, l3, h2) {
        this.assignments.push({ t: 2, s: this.getRefParam(s4), k: l3, v: h2 });
      }
      createDeleteAssignment(s4, l3) {
        this.assignments.push({ t: 3, s: this.getRefParam(s4), k: l3, v: void 0 });
      }
      createArrayAssign(s4, l3, h2) {
        this.createAssignment(this.getRefParam(s4) + "[" + l3 + "]", h2);
      }
      createObjectAssign(s4, l3, h2) {
        this.createAssignment(this.getRefParam(s4) + "." + l3, h2);
      }
      isIndexedValueInStack(s4) {
        return 4 === s4.t && this.stack.includes(s4.i);
      }
      serializeReference(s4) {
        return this.assignIndexedValue(s4.i, en + '.get("' + s4.s + '")');
      }
      serializeArrayItem(s4, l3, h2) {
        return l3 ? this.isIndexedValueInStack(l3) ? (this.markRef(s4), this.createArrayAssign(s4, h2, this.getRefParam(l3.i)), "") : this.serialize(l3) : "";
      }
      serializeArray(s4) {
        let l3 = s4.i;
        if (s4.l) {
          this.stack.push(l3);
          let h2 = s4.a, y3 = this.serializeArrayItem(l3, h2[0], 0), b2 = "" === y3;
          for (let w4, S2 = 1, E2 = s4.l; S2 < E2; S2++)
            w4 = this.serializeArrayItem(l3, h2[S2], S2), y3 += "," + w4, b2 = "" === w4;
          return this.stack.pop(), this.pushObjectFlag(s4.o, s4.i), this.assignIndexedValue(l3, "[" + y3 + (b2 ? ",]" : "]"));
        }
        return this.assignIndexedValue(l3, "[]");
      }
      serializeProperty(s4, l3, h2) {
        if ("string" == typeof l3) {
          let y3 = Number(l3), b2 = y3 >= 0 && y3.toString() === l3 || je$1(l3);
          if (this.isIndexedValueInStack(h2)) {
            let w4 = this.getRefParam(h2.i);
            return this.markRef(s4.i), b2 && y3 != y3 ? this.createObjectAssign(s4.i, l3, w4) : this.createArrayAssign(s4.i, b2 ? l3 : '"' + l3 + '"', w4), "";
          }
          return (b2 ? l3 : '"' + l3 + '"') + ":" + this.serialize(h2);
        }
        return "[" + this.serialize(l3) + "]:" + this.serialize(h2);
      }
      serializeProperties(s4, l3) {
        let h2 = l3.s;
        if (h2) {
          let y3 = l3.k, b2 = l3.v;
          this.stack.push(s4.i);
          let w4 = this.serializeProperty(s4, y3[0], b2[0]);
          for (let l4 = 1, S2 = w4; l4 < h2; l4++)
            S2 = this.serializeProperty(s4, y3[l4], b2[l4]), w4 += (S2 && w4 && ",") + S2;
          return this.stack.pop(), "{" + w4 + "}";
        }
        return "{}";
      }
      serializeObject(s4) {
        return this.pushObjectFlag(s4.o, s4.i), this.assignIndexedValue(s4.i, this.serializeProperties(s4, s4.p));
      }
      serializeWithObjectAssign(s4, l3, h2) {
        let y3 = this.serializeProperties(s4, l3);
        return "{}" !== y3 ? "Object.assign(" + h2 + "," + y3 + ")" : h2;
      }
      serializeStringKeyAssignment(s4, l3, h2, y3) {
        let b2 = this.serialize(y3), w4 = Number(h2), S2 = w4 >= 0 && w4.toString() === h2 || je$1(h2);
        if (this.isIndexedValueInStack(y3))
          S2 && w4 != w4 ? this.createObjectAssign(s4.i, h2, b2) : this.createArrayAssign(s4.i, S2 ? h2 : '"' + h2 + '"', b2);
        else {
          let y4 = this.assignments;
          this.assignments = l3, S2 && w4 != w4 ? this.createObjectAssign(s4.i, h2, b2) : this.createArrayAssign(s4.i, S2 ? h2 : '"' + h2 + '"', b2), this.assignments = y4;
        }
      }
      serializeAssignment(s4, l3, h2, y3) {
        if ("string" == typeof h2)
          this.serializeStringKeyAssignment(s4, l3, h2, y3);
        else {
          let b2 = this.stack;
          this.stack = [];
          let w4 = this.serialize(y3);
          this.stack = b2;
          let S2 = this.assignments;
          this.assignments = l3, this.createArrayAssign(s4.i, this.serialize(h2), w4), this.assignments = S2;
        }
      }
      serializeAssignments(s4, l3) {
        let h2 = l3.s;
        if (h2) {
          let y3 = [], b2 = l3.k, w4 = l3.v;
          this.stack.push(s4.i);
          for (let l4 = 0; l4 < h2; l4++)
            this.serializeAssignment(s4, y3, b2[l4], w4[l4]);
          return this.stack.pop(), lr$1(y3);
        }
      }
      serializeDictionary(s4, l3) {
        if (s4.p)
          if (8 & this.features)
            l3 = this.serializeWithObjectAssign(s4, s4.p, l3);
          else {
            this.markRef(s4.i);
            let h2 = this.serializeAssignments(s4, s4.p);
            if (h2)
              return "(" + this.assignIndexedValue(s4.i, l3) + "," + h2 + this.getRefParam(s4.i) + ")";
          }
        return this.assignIndexedValue(s4.i, l3);
      }
      serializeNullConstructor(s4) {
        return this.pushObjectFlag(s4.o, s4.i), this.serializeDictionary(s4, "Object.create(null)");
      }
      serializeDate(s4) {
        return this.assignIndexedValue(s4.i, 'new Date("' + s4.s + '")');
      }
      serializeRegExp(s4) {
        return this.assignIndexedValue(s4.i, "/" + s4.c + "/" + s4.m);
      }
      serializeSetItem(s4, l3) {
        return this.isIndexedValueInStack(l3) ? (this.markRef(s4), this.createAddAssignment(s4, this.getRefParam(l3.i)), "") : this.serialize(l3);
      }
      serializeSet(s4) {
        let l3 = "new Set", h2 = s4.l, y3 = s4.i;
        if (h2) {
          let b2 = s4.a;
          this.stack.push(y3);
          let w4 = this.serializeSetItem(y3, b2[0]);
          for (let s5 = 1, l4 = w4; s5 < h2; s5++)
            l4 = this.serializeSetItem(y3, b2[s5]), w4 += (l4 && w4 && ",") + l4;
          this.stack.pop(), w4 && (l3 += "([" + w4 + "])");
        }
        return this.assignIndexedValue(y3, l3);
      }
      serializeMapEntry(s4, l3, h2, y3) {
        if (this.isIndexedValueInStack(l3)) {
          let b2 = this.getRefParam(l3.i);
          if (this.markRef(s4), this.isIndexedValueInStack(h2)) {
            let l4 = this.getRefParam(h2.i);
            return this.createSetAssignment(s4, b2, l4), "";
          }
          if (4 !== h2.t && null != h2.i && this.isMarked(h2.i)) {
            let l4 = "(" + this.serialize(h2) + ",[" + y3 + "," + y3 + "])";
            return this.createSetAssignment(s4, b2, this.getRefParam(h2.i)), this.createDeleteAssignment(s4, y3), l4;
          }
          let w4 = this.stack;
          return this.stack = [], this.createSetAssignment(s4, b2, this.serialize(h2)), this.stack = w4, "";
        }
        if (this.isIndexedValueInStack(h2)) {
          let b2 = this.getRefParam(h2.i);
          if (this.markRef(s4), 4 !== l3.t && null != l3.i && this.isMarked(l3.i)) {
            let h3 = "(" + this.serialize(l3) + ",[" + y3 + "," + y3 + "])";
            return this.createSetAssignment(s4, this.getRefParam(l3.i), b2), this.createDeleteAssignment(s4, y3), h3;
          }
          let w4 = this.stack;
          return this.stack = [], this.createSetAssignment(s4, this.serialize(l3), b2), this.stack = w4, "";
        }
        return "[" + this.serialize(l3) + "," + this.serialize(h2) + "]";
      }
      serializeMap(s4) {
        let l3 = "new Map", h2 = s4.e.s, y3 = s4.i, b2 = s4.f, w4 = this.getRefParam(b2.i);
        if (h2) {
          let b3 = s4.e.k, S2 = s4.e.v;
          this.stack.push(y3);
          let E2 = this.serializeMapEntry(y3, b3[0], S2[0], w4);
          for (let s5 = 1, l4 = E2; s5 < h2; s5++)
            l4 = this.serializeMapEntry(y3, b3[s5], S2[s5], w4), E2 += (l4 && E2 && ",") + l4;
          this.stack.pop(), E2 && (l3 += "([" + E2 + "])");
        }
        return 26 === b2.t && (this.markRef(b2.i), l3 = "(" + this.serialize(b2) + "," + l3 + ")"), this.assignIndexedValue(y3, l3);
      }
      serializeArrayBuffer(s4) {
        let l3 = "new Uint8Array(", h2 = s4.s, y3 = h2.length;
        if (y3) {
          l3 += "[" + h2[0];
          for (let s5 = 1; s5 < y3; s5++)
            l3 += "," + h2[s5];
          l3 += "]";
        }
        return this.assignIndexedValue(s4.i, l3 + ").buffer");
      }
      serializeTypedArray(s4) {
        return this.assignIndexedValue(s4.i, "new " + s4.c + "(" + this.serialize(s4.f) + "," + s4.b + "," + s4.l + ")");
      }
      serializeDataView(s4) {
        return this.assignIndexedValue(s4.i, "new DataView(" + this.serialize(s4.f) + "," + s4.b + "," + s4.l + ")");
      }
      serializeAggregateError(s4) {
        let l3 = s4.i;
        this.stack.push(l3);
        let h2 = this.serializeDictionary(s4, 'new AggregateError([],"' + s4.m + '")');
        return this.stack.pop(), h2;
      }
      serializeError(s4) {
        return this.serializeDictionary(s4, "new " + dn[s4.s] + '("' + s4.m + '")');
      }
      serializePromise(s4) {
        let l3, h2 = s4.f, y3 = s4.i, b2 = s4.s ? "Promise.resolve" : "Promise.reject";
        if (this.isIndexedValueInStack(h2)) {
          let y4 = this.getRefParam(h2.i);
          l3 = b2 + (s4.s ? "().then(" + this.createFunction([], y4) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + y4) + ")");
        } else {
          this.stack.push(y3);
          let s5 = this.serialize(h2);
          this.stack.pop(), l3 = b2 + "(" + s5 + ")";
        }
        return this.assignIndexedValue(y3, l3);
      }
      serializeWellKnownSymbol(s4) {
        return this.assignIndexedValue(s4.i, ln[s4.s]);
      }
      serializeBoxed(s4) {
        return this.assignIndexedValue(s4.i, "Object(" + this.serialize(s4.f) + ")");
      }
      serializePlugin(s4) {
        let l3 = this.plugins;
        if (l3)
          for (let h2 = 0, y3 = l3.length; h2 < y3; h2++) {
            let y4 = l3[h2];
            if (y4.tag === s4.c)
              return this.assignIndexedValue(s4.i, y4.serialize(s4.s, this, { id: s4.i }));
          }
        throw new Rn(s4.c);
      }
      getConstructor(s4) {
        let l3 = this.serialize(s4);
        return l3 === this.getRefParam(s4.i) ? l3 : "(" + l3 + ")";
      }
      serializePromiseConstructor(s4) {
        return this.assignIndexedValue(s4.i, this.getConstructor(s4.f) + "()");
      }
      serializePromiseResolve(s4) {
        return this.getConstructor(s4.a[0]) + "(" + this.getRefParam(s4.i) + "," + this.serialize(s4.a[1]) + ")";
      }
      serializePromiseReject(s4) {
        return this.getConstructor(s4.a[0]) + "(" + this.getRefParam(s4.i) + "," + this.serialize(s4.a[1]) + ")";
      }
      serializeSpecialReferenceValue(s4) {
        switch (s4) {
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
      serializeSpecialReference(s4) {
        return this.assignIndexedValue(s4.i, this.serializeSpecialReferenceValue(s4.s));
      }
      serializeIteratorFactory(s4) {
        let l3 = "", h2 = false;
        return 4 !== s4.f.t && (this.markRef(s4.f.i), l3 = "(" + this.serialize(s4.f) + ",", h2 = true), l3 += this.assignIndexedValue(s4.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(s4.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), h2 && (l3 += ")"), l3;
      }
      serializeIteratorFactoryInstance(s4) {
        return this.getConstructor(s4.a[0]) + "(" + this.serialize(s4.a[1]) + ")";
      }
      serializeAsyncIteratorFactory(s4) {
        let l3 = s4.a[0], h2 = s4.a[1], y3 = "";
        4 !== l3.t && (this.markRef(l3.i), y3 += "(" + this.serialize(l3)), 4 !== h2.t && (this.markRef(h2.i), y3 += (y3 ? "," : "(") + this.serialize(h2)), y3 && (y3 += ",");
        let b2 = this.assignIndexedValue(s4.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(h2.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(p.push(t=" + this.getRefParam(l3.i) + "()),t):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
        return y3 ? y3 + b2 + ")" : b2;
      }
      serializeAsyncIteratorFactoryInstance(s4) {
        return this.getConstructor(s4.a[0]) + "(" + this.serialize(s4.a[1]) + ")";
      }
      serializeStreamConstructor(s4) {
        let l3 = this.assignIndexedValue(s4.i, this.getConstructor(s4.f) + "()"), h2 = s4.a.length;
        if (h2) {
          let y3 = this.serialize(s4.a[0]);
          for (let l4 = 1; l4 < h2; l4++)
            y3 += "," + this.serialize(s4.a[l4]);
          return "(" + l3 + "," + y3 + "," + this.getRefParam(s4.i) + ")";
        }
        return l3;
      }
      serializeStreamNext(s4) {
        return this.getRefParam(s4.i) + ".next(" + this.serialize(s4.f) + ")";
      }
      serializeStreamThrow(s4) {
        return this.getRefParam(s4.i) + ".throw(" + this.serialize(s4.f) + ")";
      }
      serializeStreamReturn(s4) {
        return this.getRefParam(s4.i) + ".return(" + this.serialize(s4.f) + ")";
      }
      serialize(s4) {
        try {
          switch (s4.t) {
            case 2:
              return fn[s4.s];
            case 0:
              return "" + s4.s;
            case 1:
              return '"' + s4.s + '"';
            case 3:
              return s4.s + "n";
            case 4:
              return this.getRefParam(s4.i);
            case 18:
              return this.serializeReference(s4);
            case 9:
              return this.serializeArray(s4);
            case 10:
              return this.serializeObject(s4);
            case 11:
              return this.serializeNullConstructor(s4);
            case 5:
              return this.serializeDate(s4);
            case 6:
              return this.serializeRegExp(s4);
            case 7:
              return this.serializeSet(s4);
            case 8:
              return this.serializeMap(s4);
            case 19:
              return this.serializeArrayBuffer(s4);
            case 16:
            case 15:
              return this.serializeTypedArray(s4);
            case 20:
              return this.serializeDataView(s4);
            case 14:
              return this.serializeAggregateError(s4);
            case 13:
              return this.serializeError(s4);
            case 12:
              return this.serializePromise(s4);
            case 17:
              return this.serializeWellKnownSymbol(s4);
            case 21:
              return this.serializeBoxed(s4);
            case 22:
              return this.serializePromiseConstructor(s4);
            case 23:
              return this.serializePromiseResolve(s4);
            case 24:
              return this.serializePromiseReject(s4);
            case 25:
              return this.serializePlugin(s4);
            case 26:
              return this.serializeSpecialReference(s4);
            case 27:
              return this.serializeIteratorFactory(s4);
            case 28:
              return this.serializeIteratorFactoryInstance(s4);
            case 29:
              return this.serializeAsyncIteratorFactory(s4);
            case 30:
              return this.serializeAsyncIteratorFactoryInstance(s4);
            case 31:
              return this.serializeStreamConstructor(s4);
            case 32:
              return this.serializeStreamNext(s4);
            case 33:
              return this.serializeStreamThrow(s4);
            case 34:
              return this.serializeStreamReturn(s4);
            default:
              throw new _n(s4);
          }
        } catch (s5) {
          throw new $n(s5);
        }
      }
    };
    Ln = class extends jn {
      parseItems(s4) {
        let l3 = [];
        for (let h2 = 0, y3 = s4.length; h2 < y3; h2++)
          h2 in s4 && (l3[h2] = this.parse(s4[h2]));
        return l3;
      }
      parseArray(s4, l3) {
        return function(s5, l4, h2) {
          return { t: 9, i: s5, s: void 0, l: l4.length, c: void 0, m: void 0, p: void 0, e: void 0, a: h2, f: void 0, b: void 0, o: ue$3(l4) };
        }(s4, l3, this.parseItems(l3));
      }
      parseProperties(s4) {
        let l3 = Object.entries(s4), h2 = [], y3 = [];
        for (let s5 = 0, b3 = l3.length; s5 < b3; s5++)
          h2.push(d$1(l3[s5][0])), y3.push(this.parse(l3[s5][1]));
        let b2 = Symbol.iterator;
        return b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(F$2(this.parseIteratorFactory(), this.parse(M$4(s4))))), b2 = Symbol.asyncIterator, b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(V$5(this.parseAsyncIteratorFactory(), this.parse(_$3())))), b2 = Symbol.toStringTag, b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(b$1(s4[b2]))), b2 = Symbol.isConcatSpreadable, b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(s4[b2] ? hn : pn)), { k: h2, v: y3, s: h2.length };
      }
      parsePlainObject(s4, l3, h2) {
        return this.createObjectNode(s4, l3, h2, this.parseProperties(l3));
      }
      parseBoxed(s4, l3) {
        return function(s5, l4) {
          return { t: 21, i: s5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: l4, b: void 0, o: void 0 };
        }(s4, this.parse(l3.valueOf()));
      }
      parseTypedArray(s4, l3) {
        return function(s5, l4, h2) {
          return { t: 15, i: s5, s: void 0, l: l4.length, c: l4.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: h2, b: l4.byteOffset, o: void 0 };
        }(s4, l3, this.parse(l3.buffer));
      }
      parseBigIntTypedArray(s4, l3) {
        return function(s5, l4, h2) {
          return { t: 16, i: s5, s: void 0, l: l4.length, c: l4.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: h2, b: l4.byteOffset, o: void 0 };
        }(s4, l3, this.parse(l3.buffer));
      }
      parseDataView(s4, l3) {
        return function(s5, l4, h2) {
          return { t: 20, i: s5, s: void 0, l: l4.byteLength, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: h2, b: l4.byteOffset, o: void 0 };
        }(s4, l3, this.parse(l3.buffer));
      }
      parseError(s4, l3) {
        let h2 = T$3(l3, this.features);
        return function(s5, l4, h3) {
          return { t: 13, i: s5, s: le$3(l4), l: void 0, c: void 0, m: d$1(l4.message), p: h3, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
        }(s4, l3, h2 ? this.parseProperties(h2) : void 0);
      }
      parseAggregateError(s4, l3) {
        let h2 = T$3(l3, this.features);
        return function(s5, l4, h3) {
          return { t: 14, i: s5, s: le$3(l4), l: void 0, c: void 0, m: d$1(l4.message), p: h3, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
        }(s4, l3, h2 ? this.parseProperties(h2) : void 0);
      }
      parseMap(s4, l3) {
        let h2 = [], y3 = [];
        for (let [s5, b2] of l3.entries())
          h2.push(this.parse(s5)), y3.push(this.parse(b2));
        return this.createMapNode(s4, h2, y3, l3.size);
      }
      parseSet(s4, l3) {
        let h2 = [];
        for (let s5 of l3.keys())
          h2.push(this.parse(s5));
        return function(s5, l4, h3) {
          return { t: 7, i: s5, s: void 0, l: l4, c: void 0, m: void 0, p: void 0, e: void 0, a: h3, f: void 0, b: void 0, o: void 0 };
        }(s4, l3.size, h2);
      }
      parsePlugin(s4, l3) {
        let h2 = this.plugins;
        if (h2)
          for (let y3 = 0, b2 = h2.length; y3 < b2; y3++) {
            let b3 = h2[y3];
            if (b3.parse.sync && b3.test(l3))
              return k2(s4, b3.tag, b3.parse.sync(l3, this, { id: s4 }));
          }
      }
      parseStream(s4, l3) {
        return D$3(s4, this.parseSpecialReference(4), []);
      }
      parsePromise(s4, l3) {
        return this.createPromiseConstructorNode(s4);
      }
      parseObject(s4, l3) {
        if (Array.isArray(l3))
          return this.parseArray(s4, l3);
        if (function(s5) {
          return "__SEROVAL_STREAM__" in s5;
        }(l3))
          return this.parseStream(s4, l3);
        let h2 = this.parsePlugin(s4, l3);
        if (h2)
          return h2;
        let y3 = l3.constructor;
        switch (y3) {
          case Object:
            return this.parsePlainObject(s4, l3, false);
          case void 0:
            return this.parsePlainObject(s4, l3, true);
          case Date:
            return function(s5, l4) {
              return { t: 5, i: s5, s: l4.toISOString(), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, f: void 0, a: void 0, b: void 0, o: void 0 };
            }(s4, l3);
          case RegExp:
            return function(s5, l4) {
              return { t: 6, i: s5, s: void 0, l: void 0, c: d$1(l4.source), m: l4.flags, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
            }(s4, l3);
          case Error:
          case EvalError:
          case RangeError:
          case ReferenceError:
          case SyntaxError:
          case TypeError:
          case URIError:
            return this.parseError(s4, l3);
          case Number:
          case Boolean:
          case String:
          case BigInt:
            return this.parseBoxed(s4, l3);
          case ArrayBuffer:
            return function(s5, l4) {
              let h3 = new Uint8Array(l4), y4 = h3.length, b3 = new Array(y4);
              for (let s6 = 0; s6 < y4; s6++)
                b3[s6] = h3[s6];
              return { t: 19, i: s5, s: b3, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
            }(s4, l3);
          case Int8Array:
          case Int16Array:
          case Int32Array:
          case Uint8Array:
          case Uint16Array:
          case Uint32Array:
          case Uint8ClampedArray:
          case Float32Array:
          case Float64Array:
            return this.parseTypedArray(s4, l3);
          case DataView:
            return this.parseDataView(s4, l3);
          case Map:
            return this.parseMap(s4, l3);
          case Set:
            return this.parseSet(s4, l3);
        }
        if (y3 === Promise || l3 instanceof Promise)
          return this.parsePromise(s4, l3);
        let b2 = this.features;
        if (16 & b2)
          switch (y3) {
            case BigInt64Array:
            case BigUint64Array:
              return this.parseBigIntTypedArray(s4, l3);
          }
        if (1 & b2 && "undefined" != typeof AggregateError && (y3 === AggregateError || l3 instanceof AggregateError))
          return this.parseAggregateError(s4, l3);
        if (l3 instanceof Error)
          return this.parseError(s4, l3);
        if (Symbol.iterator in l3 || Symbol.asyncIterator in l3)
          return this.parsePlainObject(s4, l3, !!y3);
        throw new In(l3);
      }
      parse(s4) {
        try {
          switch (typeof s4) {
            case "boolean":
              return s4 ? hn : pn;
            case "undefined":
              return mn;
            case "string":
              return b$1(s4);
            case "number":
              return function(s5) {
                switch (s5) {
                  case Number.POSITIVE_INFINITY:
                    return vn;
                  case Number.NEGATIVE_INFINITY:
                    return bn;
                }
                return s5 != s5 ? wn : Object.is(s5, -0) ? gn : { t: 0, i: void 0, s: s5, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
              }(s4);
            case "bigint":
              return function(s5) {
                return { t: 3, i: void 0, s: "" + s5, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
              }(s4);
            case "object":
              if (s4) {
                let l3 = this.getReference(s4);
                return 0 === l3.type ? this.parseObject(l3.value, s4) : l3.value;
              }
              return yn;
            case "symbol":
              return this.parseWellKnownSymbol(s4);
            case "function":
              return this.parseFunction(s4);
            default:
              throw new In(s4);
          }
        } catch (s5) {
          throw new En(s5);
        }
      }
    };
    Un = class extends Nn {
      constructor(s4) {
        super(s4), this.mode = "cross", this.scopeId = s4.scopeId;
      }
      getRefParam(s4) {
        return "$R[" + s4 + "]";
      }
      assignIndexedValue(s4, l3) {
        return this.getRefParam(s4) + "=" + l3;
      }
      serializeTop(s4) {
        let l3 = this.serialize(s4), h2 = s4.i;
        if (null == h2)
          return l3;
        let y3 = this.resolvePatches(), b2 = this.getRefParam(h2), w4 = null == this.scopeId ? "" : tn, S2 = y3 ? l3 + "," + y3 + b2 : l3;
        if ("" === w4)
          return y3 ? "(" + S2 + ")" : S2;
        let E2 = null == this.scopeId ? "()" : '($R["' + d$1(this.scopeId) + '"])';
        return "(" + this.createFunction([w4], S2) + ")" + E2;
      }
    };
    Dn = class extends Ln {
      constructor(s4) {
        super(s4), this.alive = true, this.pending = 0, this.initial = true, this.buffer = [], this.onParseCallback = s4.onParse, this.onErrorCallback = s4.onError, this.onDoneCallback = s4.onDone;
      }
      onParseInternal(s4, l3) {
        try {
          this.onParseCallback(s4, l3);
        } catch (s5) {
          this.onError(s5);
        }
      }
      flush() {
        for (let s4 = 0, l3 = this.buffer.length; s4 < l3; s4++)
          this.onParseInternal(this.buffer[s4], false);
      }
      onParse(s4) {
        this.initial ? this.buffer.push(s4) : this.onParseInternal(s4, false);
      }
      onError(s4) {
        if (!this.onErrorCallback)
          throw s4;
        this.onErrorCallback(s4);
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
      parseProperties(s4) {
        let l3 = Object.entries(s4), h2 = [], y3 = [];
        for (let s5 = 0, b3 = l3.length; s5 < b3; s5++)
          h2.push(d$1(l3[s5][0])), y3.push(this.parse(l3[s5][1]));
        let b2 = Symbol.iterator;
        return b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(F$2(this.parseIteratorFactory(), this.parse(M$4(s4))))), b2 = Symbol.asyncIterator, b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(V$5(this.parseAsyncIteratorFactory(), this.parse(function(s5) {
          let l4 = _$3(), h3 = s5[Symbol.asyncIterator]();
          return async function t() {
            try {
              let s6 = await h3.next();
              s6.done ? l4.return(s6.value) : (l4.next(s6.value), await t());
            } catch (s6) {
              l4.throw(s6);
            }
          }().catch(() => {
          }), l4;
        }(s4))))), b2 = Symbol.toStringTag, b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(b$1(s4[b2]))), b2 = Symbol.isConcatSpreadable, b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(s4[b2] ? hn : pn)), { k: h2, v: y3, s: h2.length };
      }
      parsePromise(s4, l3) {
        return l3.then((l4) => {
          let h2 = this.parseWithError(l4);
          h2 && this.onParse({ t: 23, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(2), h2], f: void 0, b: void 0, o: void 0 }), this.popPendingState();
        }, (l4) => {
          if (this.alive) {
            let h2 = this.parseWithError(l4);
            h2 && this.onParse({ t: 24, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(3), h2], f: void 0, b: void 0, o: void 0 });
          }
          this.popPendingState();
        }), this.pushPendingState(), this.createPromiseConstructorNode(s4);
      }
      parsePlugin(s4, l3) {
        let h2 = this.plugins;
        if (h2)
          for (let y3 = 0, b2 = h2.length; y3 < b2; y3++) {
            let b3 = h2[y3];
            if (b3.parse.stream && b3.test(l3))
              return k2(s4, b3.tag, b3.parse.stream(l3, this, { id: s4 }));
          }
      }
      parseStream(s4, l3) {
        let h2 = D$3(s4, this.parseSpecialReference(4), []);
        return this.pushPendingState(), l3.on({ next: (l4) => {
          if (this.alive) {
            let h3 = this.parseWithError(l4);
            h3 && this.onParse(function(s5, l5) {
              return { t: 32, i: s5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: l5, b: void 0, o: void 0 };
            }(s4, h3));
          }
        }, throw: (l4) => {
          if (this.alive) {
            let h3 = this.parseWithError(l4);
            h3 && this.onParse(function(s5, l5) {
              return { t: 33, i: s5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: l5, b: void 0, o: void 0 };
            }(s4, h3));
          }
          this.popPendingState();
        }, return: (l4) => {
          if (this.alive) {
            let h3 = this.parseWithError(l4);
            h3 && this.onParse(function(s5, l5) {
              return { t: 34, i: s5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: l5, b: void 0, o: void 0 };
            }(s4, h3));
          }
          this.popPendingState();
        } }), h2;
      }
      parseWithError(s4) {
        try {
          return this.parse(s4);
        } catch (s5) {
          return void this.onError(s5);
        }
      }
      start(s4) {
        let l3 = this.parseWithError(s4);
        l3 && (this.onParseInternal(l3, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
      }
      destroy() {
        this.alive && (this.onDone(), this.alive = false);
      }
      isAlive() {
        return this.alive;
      }
    };
    qn = class extends Dn {
      constructor() {
        super(...arguments), this.mode = "cross";
      }
    };
    Wn = class {
      constructor(s4) {
        this.options = s4, this.alive = true, this.flushed = false, this.done = false, this.pending = 0, this.cleanups = [], this.refs = /* @__PURE__ */ new Map(), this.keys = /* @__PURE__ */ new Set(), this.ids = 0, this.plugins = c(s4.plugins);
      }
      write(s4, l3) {
        this.alive && !this.flushed && (this.pending++, this.keys.add(s4), this.cleanups.push(function(s5, l4) {
          let h2 = c(l4.plugins), y3 = new qn({ plugins: h2, refs: l4.refs, disabledFeatures: l4.disabledFeatures, onParse(s6, b2) {
            let w4, S2 = new Un({ plugins: h2, features: y3.features, scopeId: l4.scopeId, markedRefs: y3.marked });
            try {
              w4 = S2.serializeTop(s6);
            } catch (s7) {
              return void (l4.onError && l4.onError(s7));
            }
            l4.onSerialize(w4, b2);
          }, onError: l4.onError, onDone: l4.onDone });
          return y3.start(s5), () => {
            y3.destroy();
          };
        }(l3, { plugins: this.plugins, scopeId: this.options.scopeId, refs: this.refs, disabledFeatures: this.options.disabledFeatures, onError: this.options.onError, onSerialize: (l4, h2) => {
          this.alive && this.options.onData(h2 ? this.options.globalIdentifier + '["' + d$1(s4) + '"]=' + l4 : l4);
        }, onDone: () => {
          this.alive && (this.pending--, this.pending <= 0 && this.flushed && !this.done && this.options.onDone && (this.options.onDone(), this.done = true));
        } })));
      }
      getNextID() {
        for (; this.keys.has("" + this.ids); )
          this.ids++;
        return "" + this.ids;
      }
      push(s4) {
        let l3 = this.getNextID();
        return this.write(l3, s4), l3;
      }
      flush() {
        this.alive && (this.flushed = true, this.pending <= 0 && !this.done && this.options.onDone && (this.options.onDone(), this.done = true));
      }
      close() {
        if (this.alive) {
          for (let s4 = 0, l3 = this.cleanups.length; s4 < l3; s4++)
            this.cleanups[s4]();
          !this.done && this.options.onDone && (this.options.onDone(), this.done = true), this.alive = false;
        }
      }
    };
    Vn = { tag: "seroval-plugins/web/CustomEvent", test: (s4) => "undefined" != typeof CustomEvent && s4 instanceof CustomEvent, parse: { sync: (s4, l3) => ({ type: l3.parse(s4.type), options: l3.parse(p$1(s4)) }), async: async (s4, l3) => ({ type: await l3.parse(s4.type), options: await l3.parse(p$1(s4)) }), stream: (s4, l3) => ({ type: l3.parse(s4.type), options: l3.parse(p$1(s4)) }) }, serialize: (s4, l3) => "new CustomEvent(" + l3.serialize(s4.type) + "," + l3.serialize(s4.options) + ")", deserialize: (s4, l3) => new CustomEvent(l3.deserialize(s4.type), l3.deserialize(s4.options)) };
    Kn = Vn;
    Zn = { tag: "seroval-plugins/web/DOMException", test: (s4) => "undefined" != typeof DOMException && s4 instanceof DOMException, parse: { sync: (s4, l3) => ({ name: l3.parse(s4.name), message: l3.parse(s4.message) }), async: async (s4, l3) => ({ name: await l3.parse(s4.name), message: await l3.parse(s4.message) }), stream: (s4, l3) => ({ name: l3.parse(s4.name), message: l3.parse(s4.message) }) }, serialize: (s4, l3) => "new DOMException(" + l3.serialize(s4.message) + "," + l3.serialize(s4.name) + ")", deserialize: (s4, l3) => new DOMException(l3.deserialize(s4.message), l3.deserialize(s4.name)) };
    Gn = Zn;
    Yn = { tag: "seroval-plugins/web/Event", test: (s4) => "undefined" != typeof Event && s4 instanceof Event, parse: { sync: (s4, l3) => ({ type: l3.parse(s4.type), options: l3.parse(u(s4)) }), async: async (s4, l3) => ({ type: await l3.parse(s4.type), options: await l3.parse(u(s4)) }), stream: (s4, l3) => ({ type: l3.parse(s4.type), options: l3.parse(u(s4)) }) }, serialize: (s4, l3) => "new Event(" + l3.serialize(s4.type) + "," + l3.serialize(s4.options) + ")", deserialize: (s4, l3) => new Event(l3.deserialize(s4.type), l3.deserialize(s4.options)) };
    Xn = Yn;
    Jn = { tag: "seroval-plugins/web/File", test: (s4) => "undefined" != typeof File && s4 instanceof File, parse: { async: async (s4, l3) => ({ name: await l3.parse(s4.name), options: await l3.parse({ type: s4.type, lastModified: s4.lastModified }), buffer: await l3.parse(await s4.arrayBuffer()) }) }, serialize: (s4, l3) => "new File([" + l3.serialize(s4.buffer) + "]," + l3.serialize(s4.name) + "," + l3.serialize(s4.options) + ")", deserialize: (s4, l3) => new File([l3.deserialize(s4.buffer)], l3.deserialize(s4.name), l3.deserialize(s4.options)) };
    Qn = Jn;
    es = {};
    ts = { tag: "seroval-plugins/web/FormDataFactory", test: (s4) => s4 === es, parse: { sync() {
    }, async: async () => await Promise.resolve(void 0), stream() {
    } }, serialize: (s4, l3) => l3.createEffectfulFunction(["e", "f", "i", "s", "t"], "f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f"), deserialize: () => es };
    rs = { tag: "seroval-plugins/web/FormData", extends: [Qn, ts], test: (s4) => "undefined" != typeof FormData && s4 instanceof FormData, parse: { sync: (s4, l3) => ({ factory: l3.parse(es), entries: l3.parse(f$1(s4)) }), async: async (s4, l3) => ({ factory: await l3.parse(es), entries: await l3.parse(f$1(s4)) }), stream: (s4, l3) => ({ factory: l3.parse(es), entries: l3.parse(f$1(s4)) }) }, serialize: (s4, l3) => "(" + l3.serialize(s4.factory) + ")(" + l3.serialize(s4.entries) + ")", deserialize(s4, l3) {
      let h2 = new FormData(), y3 = l3.deserialize(s4.entries);
      for (let s5 = 0, l4 = y3.length; s5 < l4; s5++) {
        let l5 = y3[s5];
        h2.append(l5[0], l5[1]);
      }
      return h2;
    } };
    ns = rs;
    ss = { tag: "seroval-plugins/web/Headers", test: (s4) => "undefined" != typeof Headers && s4 instanceof Headers, parse: { sync: (s4, l3) => l3.parse(m$1(s4)), async: async (s4, l3) => await l3.parse(m$1(s4)), stream: (s4, l3) => l3.parse(m$1(s4)) }, serialize: (s4, l3) => "new Headers(" + l3.serialize(s4) + ")", deserialize: (s4, l3) => new Headers(l3.deserialize(s4)) };
    is = ss;
    os = {};
    as = { tag: "seroval-plugins/web/ReadableStreamFactory", test: (s4) => s4 === os, parse: { sync() {
    }, async: async () => await Promise.resolve(void 0), stream() {
    } }, serialize: (s4, l3) => l3.createFunction(["d"], "new ReadableStream({start:" + l3.createEffectfulFunction(["c"], "d.on({next:" + l3.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + l3.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + l3.createEffectfulFunction([], "c.close()") + "})") + "})"), deserialize: () => os };
    cs = { tag: "seroval/plugins/web/ReadableStream", extends: [as], test: (s4) => "undefined" != typeof ReadableStream && s4 instanceof ReadableStream, parse: { sync: (s4, l3) => ({ factory: l3.parse(os), stream: l3.parse(_$3()) }), async: async (s4, l3) => ({ factory: await l3.parse(os), stream: await l3.parse(g(s4)) }), stream: (s4, l3) => ({ factory: l3.parse(os), stream: l3.parse(g(s4)) }) }, serialize: (s4, l3) => "(" + l3.serialize(s4.factory) + ")(" + l3.serialize(s4.stream) + ")", deserialize(s4, l3) {
      let h2 = l3.deserialize(s4.stream);
      return new ReadableStream({ start(s5) {
        h2.on({ next(l4) {
          s5.enqueue(l4);
        }, throw(l4) {
          s5.error(l4);
        }, return() {
          s5.close();
        } });
      } });
    } };
    ls = cs;
    us = { tag: "seroval-plugins/web/Request", extends: [ls, is], test: (s4) => "undefined" != typeof Request && s4 instanceof Request, parse: { async: async (s4, l3) => ({ url: await l3.parse(s4.url), options: await l3.parse(z$3(s4, s4.body ? await s4.clone().arrayBuffer() : null)) }), stream: (s4, l3) => ({ url: l3.parse(s4.url), options: l3.parse(z$3(s4, s4.clone().body)) }) }, serialize: (s4, l3) => "new Request(" + l3.serialize(s4.url) + "," + l3.serialize(s4.options) + ")", deserialize: (s4, l3) => new Request(l3.deserialize(s4.url), l3.deserialize(s4.options)) };
    fs = us;
    ds = { tag: "seroval-plugins/web/Response", extends: [ls, is], test: (s4) => "undefined" != typeof Response && s4 instanceof Response, parse: { async: async (s4, l3) => ({ body: await l3.parse(s4.body ? await s4.clone().arrayBuffer() : null), options: await l3.parse(S$2(s4)) }), stream: (s4, l3) => ({ body: l3.parse(s4.clone().body), options: l3.parse(S$2(s4)) }) }, serialize: (s4, l3) => "new Response(" + l3.serialize(s4.body) + "," + l3.serialize(s4.options) + ")", deserialize: (s4, l3) => new Response(l3.deserialize(s4.body), l3.deserialize(s4.options)) };
    hs = ds;
    ps = { tag: "seroval-plugins/web/URLSearchParams", test: (s4) => "undefined" != typeof URLSearchParams && s4 instanceof URLSearchParams, parse: { sync: (s4, l3) => l3.parse(s4.toString()), async: async (s4, l3) => await l3.parse(s4.toString()), stream: (s4, l3) => l3.parse(s4.toString()) }, serialize: (s4, l3) => "new URLSearchParams(" + l3.serialize(s4) + ")", deserialize: (s4, l3) => new URLSearchParams(l3.deserialize(s4)) };
    ms = ps;
    ys = { tag: "seroval-plugins/web/URL", test: (s4) => "undefined" != typeof URL && s4 instanceof URL, parse: { sync: (s4, l3) => l3.parse(s4.href), async: async (s4, l3) => await l3.parse(s4.href), stream: (s4, l3) => l3.parse(s4.href) }, serialize: (s4, l3) => "new URL(" + l3.serialize(s4) + ")", deserialize: (s4, l3) => new URL(l3.deserialize(s4)) };
    gs = ys;
    vs = /* @__PURE__ */ new Set(["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"]);
    bs = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]);
    ws = Object.assign(/* @__PURE__ */ Object.create(null), { className: "class", htmlFor: "for" });
    xs = Qr.AggregateError | Qr.BigIntTypedArray;
    Ss = "_$HY.r";
    Es = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
    $s = 'function $df(e,n,o,t){if(n=document.getElementById(e),o=document.getElementById("pl-"+e)){for(;o&&8!==o.nodeType&&o.nodeValue!=="pl-"+e;)t=o.nextSibling,o.remove(),o=t;_$HY.done?o.remove():o.replaceWith(n.content)}n.remove(),_$HY.fe(e)}';
    Is = Symbol();
    _s = true;
    Rs = /* @__PURE__ */ Object.create({ UV_FS_SYMLINK_DIR: 1, UV_FS_SYMLINK_JUNCTION: 2, O_RDONLY: 0, O_WRONLY: 1, O_RDWR: 2, UV_DIRENT_UNKNOWN: 0, UV_DIRENT_FILE: 1, UV_DIRENT_DIR: 2, UV_DIRENT_LINK: 3, UV_DIRENT_FIFO: 4, UV_DIRENT_SOCKET: 5, UV_DIRENT_CHAR: 6, UV_DIRENT_BLOCK: 7, S_IFMT: 61440, S_IFREG: 32768, S_IFDIR: 16384, S_IFCHR: 8192, S_IFBLK: 24576, S_IFIFO: 4096, S_IFLNK: 40960, S_IFSOCK: 49152, O_CREAT: 64, O_EXCL: 128, UV_FS_O_FILEMAP: 0, O_NOCTTY: 256, O_TRUNC: 512, O_APPEND: 1024, O_DIRECTORY: 65536, O_NOATIME: 262144, O_NOFOLLOW: 131072, O_SYNC: 1052672, O_DSYNC: 4096, O_DIRECT: 16384, O_NONBLOCK: 2048, S_IRWXU: 448, S_IRUSR: 256, S_IWUSR: 128, S_IXUSR: 64, S_IRWXG: 56, S_IRGRP: 32, S_IWGRP: 16, S_IXGRP: 8, S_IRWXO: 7, S_IROTH: 4, S_IWOTH: 2, S_IXOTH: 1, F_OK: 0, R_OK: 4, W_OK: 2, X_OK: 1, UV_FS_COPYFILE_EXCL: 1, COPYFILE_EXCL: 1, UV_FS_COPYFILE_FICLONE: 2, COPYFILE_FICLONE: 2, UV_FS_COPYFILE_FICLONE_FORCE: 4, COPYFILE_FICLONE_FORCE: 4 });
    ks = notImplemented("fs.access");
    As = notImplemented("fs.copyFile");
    zs = notImplemented("fs.cp");
    Cs = notImplemented("fs.open");
    Ps = notImplemented("fs.opendir");
    Ts = notImplemented("fs.rename");
    js = notImplemented("fs.truncate");
    Os = notImplemented("fs.rm");
    Bs = notImplemented("fs.rmdir");
    Fs = notImplemented("fs.mkdir");
    Ms = notImplemented("fs.readdir");
    Ns = notImplemented("fs.readlink");
    Ls = notImplemented("fs.symlink");
    Us = notImplemented("fs.lstat");
    Hs = notImplemented("fs.stat");
    Ds = notImplemented("fs.link");
    qs = notImplemented("fs.unlink");
    Ws = notImplemented("fs.chmod");
    Vs = notImplemented("fs.lchmod");
    Ks = notImplemented("fs.lchown");
    Zs = notImplemented("fs.chown");
    Gs = notImplemented("fs.utimes");
    Ys = notImplemented("fs.lutimes");
    Xs = notImplemented("fs.realpath");
    Js = notImplemented("fs.mkdtemp");
    Qs = notImplemented("fs.writeFile");
    ei = notImplemented("fs.appendFile");
    ti = notImplemented("fs.readFile");
    ri = notImplemented("fs.watch");
    ni = notImplemented("fs.statfs");
    si = Object.freeze(Object.defineProperty({ __proto__: null, access: ks, appendFile: ei, chmod: Ws, chown: Zs, constants: Rs, copyFile: As, cp: zs, default: {}, lchmod: Vs, lchown: Ks, link: Ds, lstat: Us, lutimes: Ys, mkdir: Fs, mkdtemp: Js, open: Cs, opendir: Ps, readFile: ti, readdir: Ms, readlink: Ns, realpath: Xs, rename: Ts, rm: Os, rmdir: Bs, stat: Hs, statfs: ni, symlink: Ls, truncate: js, unlink: qs, utimes: Gs, watch: ri, writeFile: Qs }, Symbol.toStringTag, { value: "Module" }));
    callbackify(ks), callbackify(ei), callbackify(Zs), callbackify(Ws), callbackify(As), callbackify(zs), callbackify(Ks), callbackify(Vs), callbackify(Ds), callbackify(Us), callbackify(Ys), callbackify(Fs), callbackify(Js), callbackify(Xs), callbackify(Cs), callbackify(Ps), callbackify(Ms), callbackify(ti), callbackify(Ns), callbackify(Ts), callbackify(Os), callbackify(Bs), callbackify(Hs), callbackify(Ls), callbackify(js), callbackify(qs), callbackify(Gs), callbackify(Qs), callbackify(ni), notImplementedAsync("fs.close"), notImplementedAsync("fs.createReadStream"), notImplementedAsync("fs.createWriteStream"), notImplementedAsync("fs.exists"), notImplementedAsync("fs.fchown"), notImplementedAsync("fs.fchmod"), notImplementedAsync("fs.fdatasync"), notImplementedAsync("fs.fstat"), notImplementedAsync("fs.fsync"), notImplementedAsync("fs.ftruncate"), notImplementedAsync("fs.futimes"), notImplementedAsync("fs.lstatSync"), notImplementedAsync("fs.read"), notImplementedAsync("fs.readv"), notImplementedAsync("fs.realpathSync"), notImplementedAsync("fs.statSync"), notImplementedAsync("fs.unwatchFile"), notImplementedAsync("fs.watch"), notImplementedAsync("fs.watchFile"), notImplementedAsync("fs.write"), notImplementedAsync("fs.writev"), notImplementedAsync("fs._toUnixTimestamp"), notImplementedAsync("fs.openAsBlob"), notImplemented("fs.appendFileSync"), notImplemented("fs.accessSync"), notImplemented("fs.chownSync"), notImplemented("fs.chmodSync"), notImplemented("fs.closeSync"), notImplemented("fs.copyFileSync"), notImplemented("fs.cpSync");
    notImplemented("fs.fchownSync"), notImplemented("fs.fchmodSync"), notImplemented("fs.fdatasyncSync"), notImplemented("fs.fstatSync"), notImplemented("fs.fsyncSync"), notImplemented("fs.ftruncateSync"), notImplemented("fs.futimesSync"), notImplemented("fs.lchownSync"), notImplemented("fs.lchmodSync"), notImplemented("fs.linkSync"), notImplemented("fs.lutimesSync"), notImplemented("fs.mkdirSync"), notImplemented("fs.mkdtempSync"), notImplemented("fs.openSync"), notImplemented("fs.opendirSync"), notImplemented("fs.readdirSync"), notImplemented("fs.readSync"), notImplemented("fs.readvSync"), notImplemented("fs.readFileSync"), notImplemented("fs.readlinkSync"), notImplemented("fs.renameSync"), notImplemented("fs.rmSync"), notImplemented("fs.rmdirSync"), notImplemented("fs.symlinkSync"), notImplemented("fs.truncateSync"), notImplemented("fs.unlinkSync"), notImplemented("fs.utimesSync"), notImplemented("fs.writeFileSync"), notImplemented("fs.writeSync"), notImplemented("fs.writevSync"), notImplemented("fs.statfsSync");
    ii = si;
    oi = /\.\.\:|\.\.$/;
    ai = "fs-lite";
    at$2 = (s4 = {}) => {
      if (!s4.base)
        throw l3 = ai, h2 = "base", Array.isArray(h2) ? createError(l3, `Missing some of the required options ${h2.map((s5) => "`" + s5 + "`").join(", ")}`) : createError(l3, `Missing required option \`${h2}\`.`);
      var l3, h2;
      s4.base = resolve(s4.base);
      const r3 = (l4) => {
        if (oi.test(l4))
          throw createError(ai, `Invalid key: ${JSON.stringify(l4)}. It should not contain .. segments`);
        return join(s4.base, l4.replace(/:/g, "/"));
      };
      return { name: ai, options: s4, hasItem: (s5) => (r3(s5), false), getItem: (s5) => readFile(r3(s5), "utf8"), getItemRaw: (s5) => readFile(r3(s5)), async getMeta(s5) {
        const { atime: l4, mtime: h3, size: y3, birthtime: b2, ctime: w4 } = await ii.stat(r3(s5)).catch(() => ({}));
        return { atime: l4, mtime: h3, size: y3, birthtime: b2, ctime: w4 };
      }, setItem(l4, h3) {
        if (!s4.readOnly)
          return writeFile(r3(l4), h3, "utf8");
      }, setItemRaw(l4, h3) {
        if (!s4.readOnly)
          return writeFile(r3(l4), h3);
      }, removeItem(l4) {
        var h3;
        if (!s4.readOnly)
          return h3 = r3(l4), ii.unlink(h3).catch(ignoreNotfound);
      }, getKeys: () => readdirRecursive(r3("."), s4.ignore), async clear() {
        s4.readOnly || s4.noClear || await rmRecursive(r3("."));
      } };
    };
    ci = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {};
    li = "__unctx__";
    ui = ci[li] || (ci[li] = function(s4 = {}) {
      const l3 = {};
      return { get: (h2, y3 = {}) => (l3[h2] || (l3[h2] = function(s5 = {}) {
        let l4, h3 = false;
        const r3 = (s6) => {
          if (l4 && l4 !== s6)
            throw new Error("Context conflict");
        };
        let y4;
        if (s5.asyncContext) {
          const l5 = s5.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          l5 ? y4 = new l5() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const o = () => {
          if (y4 && void 0 === l4) {
            const s6 = y4.getStore();
            if (void 0 !== s6)
              return s6;
          }
          return l4;
        };
        return { use: () => {
          const s6 = o();
          if (void 0 === s6)
            throw new Error("Context is not available");
          return s6;
        }, tryUse: () => o(), set: (s6, y5) => {
          y5 || r3(s6), l4 = s6, h3 = true;
        }, unset: () => {
          l4 = void 0, h3 = false;
        }, call: (s6, b2) => {
          r3(s6), l4 = s6;
          try {
            return y4 ? y4.run(s6, b2) : b2();
          } finally {
            h3 || (l4 = void 0);
          }
        }, async callAsync(s6, b2) {
          l4 = s6;
          const f2 = () => {
            l4 = s6;
          }, d3 = () => l4 === s6 ? f2 : void 0;
          hi.add(d3);
          try {
            const w4 = y4 ? y4.run(s6, b2) : b2();
            return h3 || (l4 = void 0), await w4;
          } finally {
            hi.delete(d3);
          }
        } };
      }({ ...s4, ...y3 })), l3[h2], l3[h2]) };
    }());
    xe$2 = (s4, l3 = {}) => ui.get(s4, l3);
    fi = "__unctx_async_handlers__";
    hi = ci[fi] || (ci[fi] = /* @__PURE__ */ new Set());
    pi = Symbol("$HTTPEvent");
    mi = x$2(getRequestURL);
    yi = x$2(getRequestIP);
    gi = x$2(setResponseStatus);
    vi = x$2(getResponseStatus);
    bi = x$2(getResponseStatusText);
    wi = x$2(getResponseHeaders);
    xi = x$2(getResponseHeader);
    Si = x$2(setResponseHeader);
    Ei = x$2(appendResponseHeader);
    $i = x$2(getCookie);
    Ii = x$2(setCookie);
    _i = x$2(Wt);
    Ri = x$2(getRequestWebStream);
    ki = x$2(removeResponseHeader);
    Ai = x$2(function(s4) {
      return s4.web ??= { request: mt$3(s4), url: mi(s4) }, s4.web.request;
    });
    zi = Symbol("fetchEvent");
    Ci = class {
      event;
      constructor(s4) {
        this.event = s4;
      }
      get(s4) {
        const l3 = xi(this.event, s4);
        return Array.isArray(l3) ? l3.join(", ") : l3 || null;
      }
      has(s4) {
        return void 0 !== this.get(s4);
      }
      set(s4, l3) {
        return Si(this.event, s4, l3);
      }
      delete(s4) {
        return ki(this.event, s4);
      }
      append(s4, l3) {
        Ei(this.event, s4, l3);
      }
      getSetCookie() {
        const s4 = xi(this.event, "Set-Cookie");
        return Array.isArray(s4) ? s4 : [s4];
      }
      forEach(s4) {
        return Object.entries(wi(this.event)).forEach(([l3, h2]) => s4(Array.isArray(h2) ? h2.join(", ") : h2, l3, this));
      }
      entries() {
        return Object.entries(wi(this.event)).map(([s4, l3]) => [s4, Array.isArray(l3) ? l3.join(", ") : l3])[Symbol.iterator]();
      }
      keys() {
        return Object.keys(wi(this.event))[Symbol.iterator]();
      }
      values() {
        return Object.values(wi(this.event)).map((s4) => Array.isArray(s4) ? s4.join(", ") : s4)[Symbol.iterator]();
      }
      [Symbol.iterator]() {
        return this.entries()[Symbol.iterator]();
      }
    };
    Pi = /^(?:[a-z0-9]+:)?\/\//i;
    Ti = /^\/+|(\/)\/+$/g;
    ji = "http://sr";
    Oi = createContext();
    Bi = createContext();
    Te$2 = () => function(s4, l3) {
      if (null == s4)
        throw new Error(l3);
      return s4;
    }(useContext(Oi), "<A> and 'use' router primitives can be only used inside a Route.");
    Dt$2 = () => Te$2().navigatorFactory();
    Mi = false;
    Ni = "Location";
    Li = /* @__PURE__ */ new Map();
    N$2.set = (s4, l3) => {
      const h2 = ee$2(), y3 = Date.now();
      let b2 = h2.get(s4);
      b2 ? (b2[0] = y3, b2[1] = l3, b2[2] = "preload") : (h2.set(s4, b2 = [y3, l3, , createSignal(y3)]), b2[3].count = 0);
    }, N$2.clear = () => ee$2().clear();
    Ui = createStorage({ driver: at$2({ base: "./.data" }) });
    Ui.setItem("users:data", [{ id: 0, username: "kody", password: "twixrox" }]), Ui.setItem("users:counter", 1);
    Hi = { user: { async create({ data: s4 }) {
      const [{ value: l3 }, { value: h2 }] = await Ui.getItems(["users:data", "users:counter"]), y3 = { ...s4, id: h2 };
      return await Promise.all([Ui.setItem("users:data", [...l3, y3]), Ui.setItem("users:counter", h2 + 1)]), y3;
    }, async findUnique({ where: { username: s4, id: l3 } }) {
      const h2 = await Ui.getItem("users:data");
      return void 0 !== l3 ? h2.find((s5) => s5.id === l3) : h2.find((l4) => l4.username === s4);
    } } };
    Di = Symbol("$HTTPEvent");
    qi = (Wi = useSession, function(...s4) {
      let l3 = s4[0];
      if (function(s5) {
        return "object" == typeof s5 && (s5 instanceof H3Event || s5?.[Di] instanceof H3Event || true === s5?.__is_event__);
      }(l3))
        s4[0] = l3 instanceof H3Event || l3.__is_event__ ? l3 : l3[Di];
      else {
        if (!globalThis.app.config.server.experimental?.asyncContext)
          throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
        if (l3 = on$1(), !l3)
          throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
        s4.unshift(l3);
      }
      return Wi(...s4);
    });
    Vi = N$2(Z$3(yn$1, "c_7576", "$$function0"), "user");
    Ki = Le$1(Z$3(mn$1, "c_7576", "$$function1"));
    Zi = Le$1(Z$3(wn$1, "c_7576", "$$function2"));
    Gi = Object.freeze(Object.defineProperty({ __proto__: null, $$function0: yn$1, $$function1: mn$1, $$function2: wn$1, getUser: Vi, loginOrRegister: Ki, logout: Zi }, Symbol.toStringTag, { value: "Module" }));
    Yi = {};
    Yi["c_7576.mjs"] = Gi;
    Xi = [function(s4) {
      const l3 = function(s5) {
        return { config: { ...s5, buildManifest: Fr, routeManifest: Mr }, getRouter: (l4) => s5.routers.find((s6) => s6.name === l4) };
      }(Or);
      globalThis.app = l3;
    }, function(s4) {
      globalThis.$handle = (l3) => s4.h3App.handler(l3);
    }, function() {
      globalThis.MANIFEST = function(s4) {
        const l3 = new Proxy({}, { get(l4, h2) {
          invariant("string" == typeof h2, "Bundler name expected");
          const y3 = s4.getRouter(h2), b2 = s4.config.buildManifest[h2];
          return invariant("static" !== y3.type, "manifest not available for static router"), { handler: y3.handler, async assets() {
            let s5 = {};
            s5[y3.handler] = await this.inputs[y3.handler].assets();
            for (const l5 of await y3.internals.routes?.getRoutes() ?? [])
              s5[l5.filePath] = await this.inputs[l5.filePath].assets();
            return s5;
          }, routes: async () => await y3.internals.routes?.getRoutes() ?? [], async json() {
            let s5 = {};
            for (const l5 of Object.keys(this.inputs))
              s5[l5] = { output: this.inputs[l5].output.path, assets: await this.inputs[l5].assets() };
            return s5;
          }, chunks: new Proxy({}, { get(s5, l5) {
            invariant("string" == typeof l5, "Chunk expected");
            const h3 = join(y3.outDir, y3.base, l5 + ".mjs");
            return { import: () => globalThis.$$chunks[l5 + ".mjs"] ? globalThis.$$chunks[l5 + ".mjs"] : import(pathToFileURL(h3).href), output: { path: h3 } };
          } }), inputs: new Proxy({}, { ownKeys: (s5) => Object.keys(b2).filter((s6) => b2[s6].isEntry).map((s6) => s6), getOwnPropertyDescriptor: (s5) => ({ enumerable: true, configurable: true }), get(l5, h3) {
            if (invariant("string" == typeof h3, "Input expected"), "server" === y3.target) {
              const l6 = h3 === y3.handler ? virtualId(handlerModule(y3)) : h3;
              return { assets: () => createHtmlTagsForAssets(y3, s4, findAssetsInViteManifest(b2, l6)), output: { path: join(y3.outDir, y3.base, b2[l6].file) } };
            }
            if ("browser" === y3.target) {
              const l6 = h3 !== y3.handler || h3.endsWith(".html") ? h3 : virtualId(handlerModule(y3));
              return { import: () => import(joinURL(s4.config.server.baseURL ?? "", y3.base, b2[l6].file)), assets: () => createHtmlTagsForAssets(y3, s4, findAssetsInViteManifest(b2, l6)), output: { path: joinURL(s4.config.server.baseURL ?? "", y3.base, b2[l6].file) } };
            }
          } }) };
        } });
        return l3;
      }(globalThis.app);
    }, function() {
      globalThis.$$chunks = Yi;
    }];
    errorHandler = function(s4, l3) {
      const { stack: h2, statusCode: y3, statusMessage: b2, message: w4 } = function(s5) {
        const l4 = "function" == typeof le.cwd ? le.cwd() : "/", h3 = (s5.stack || "").split("\n").splice(1).filter((s6) => s6.includes("at ")).map((s6) => ({ text: s6.replace(l4 + "/", "./").replace("webpack:/", "").replace("file://", "").trim(), internal: s6.includes("node_modules") && !s6.includes(".cache") || s6.includes("internal") || s6.includes("new Promise") })), y4 = s5.statusCode || 500, b3 = s5.statusMessage ?? (404 === y4 ? "Not Found" : ""), w5 = s5.message || s5.toString();
        return { stack: h3, statusCode: y4, statusMessage: b3, message: w5 };
      }(s4), S2 = { url: l3.path || "", statusCode: y3, statusMessage: b2, message: w4, stack: void 0 };
      if (s4.unhandled || s4.fatal) {
        const l4 = ["[nitro]", "[request error]", s4.unhandled && "[unhandled]", s4.fatal && "[fatal]"].filter(Boolean).join(" ");
        console.error(l4, s4.message + "\n" + h2.map((s5) => "  " + s5.text).join("  \n"));
      }
      return setResponseStatus(l3, y3, b2), function(s5) {
        if (hasReqHeader(s5, "accept", "text/html"))
          return false;
        return hasReqHeader(s5, "accept", "application/json") || hasReqHeader(s5, "user-agent", "curl/") || hasReqHeader(s5, "user-agent", "httpie/") || hasReqHeader(s5, "sec-fetch-mode", "cors") || s5.path.startsWith("/api/") || s5.path.endsWith(".json");
      }(l3) ? (setResponseHeader(l3, "Content-Type", "application/json"), send(l3, JSON.stringify(S2))) : (setResponseHeader(l3, "Content-Type", "text/html"), send(l3, function(s5) {
        const l4 = s5.statusCode || 500, h3 = s5.statusMessage || "Request Error";
        return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${l4} ${h3}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${l4} ${h3}</h2>
          </header>
          <code>
            ${s5.message}<br><br>
            ${"\n" + (s5.stack || []).map((s6) => `&nbsp;&nbsp;${s6}`).join("<br>")}
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
      }(S2)));
    };
    Ji = ((s4) => (s4[s4.AggregateError = 1] = "AggregateError", s4[s4.ArrowFunction = 2] = "ArrowFunction", s4[s4.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", s4[s4.ObjectAssign = 8] = "ObjectAssign", s4[s4.BigIntTypedArray = 16] = "BigIntTypedArray", s4))(Ji || {});
    Qi = "__SEROVAL_REFS__";
    eo = "$R";
    to = `self.${eo}`;
    ro = /* @__PURE__ */ new Map();
    no = /* @__PURE__ */ new Map();
    typeof globalThis < "u" ? Object.defineProperty(globalThis, Qi, { value: no, configurable: true, writable: false, enumerable: false }) : typeof self < "u" ? Object.defineProperty(self, Qi, { value: no, configurable: true, writable: false, enumerable: false }) : typeof global < "u" && Object.defineProperty(global, Qi, { value: no, configurable: true, writable: false, enumerable: false });
    so = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" };
    io = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 };
    oo = { 0: Symbol.asyncIterator, 1: Symbol.hasInstance, 2: Symbol.isConcatSpreadable, 3: Symbol.iterator, 4: Symbol.match, 5: Symbol.matchAll, 6: Symbol.replace, 7: Symbol.search, 8: Symbol.species, 9: Symbol.split, 10: Symbol.toPrimitive, 11: Symbol.toStringTag, 12: Symbol.unscopables };
    ao = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" };
    co = { 2: true, 3: false, 1: void 0, 0: null, 4: -0, 5: Number.POSITIVE_INFINITY, 6: Number.NEGATIVE_INFINITY, 7: Number.NaN };
    lo = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" };
    uo = { 0: Error, 1: EvalError, 2: RangeError, 3: ReferenceError, 4: SyntaxError, 5: TypeError, 6: URIError };
    fo = v(2);
    ho = v(3);
    po = v(1);
    mo = v(0);
    yo = v(4);
    go = v(5);
    vo = v(6);
    bo = v(7);
    ({ toString: wo } = Object.prototype);
    xo = class extends Error {
      constructor(s4, l3) {
        super(function(s5, l4) {
          return l4 instanceof Error ? `Seroval caught an error during the ${s5} process.
  
${l4.name}
${l4.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${s5} process.

"${wo.call(l4)}"

For more information, please check the "cause" property of this error.`;
        }(s4, l3)), this.cause = l3;
      }
    };
    So = class extends xo {
      constructor(s4) {
        super("parsing", s4);
      }
    };
    Eo = class extends xo {
      constructor(s4) {
        super("serialization", s4);
      }
    };
    $o = class extends xo {
      constructor(s4) {
        super("deserialization", s4);
      }
    };
    Io = class extends Error {
      constructor(s4) {
        super(`The value ${wo.call(s4)} of type "${typeof s4}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`), this.value = s4;
      }
    };
    _o = class extends Error {
      constructor(s4) {
        super('Unsupported node type "' + s4.t + '".');
      }
    };
    Ro = class extends Error {
      constructor(s4) {
        super('Missing plugin for tag "' + s4 + '".');
      }
    };
    ko = class extends Error {
      constructor(s4) {
        super('Missing "' + s4 + '" instance.');
      }
    };
    Ao = class extends Error {
      constructor(s4) {
        super('Missing reference for the value "' + wo.call(s4) + '" of type "' + typeof s4 + '"'), this.value = s4;
      }
    };
    zo = class extends Error {
      constructor(s4) {
        super('Missing reference for id "' + f(s4) + '"');
      }
    };
    Co = class extends Error {
      constructor(s4) {
        super('Unknown TypedArray "' + s4 + '"');
      }
    };
    Po = {};
    To = {};
    jo = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
    Oo = class {
      constructor(s4) {
        this.marked = /* @__PURE__ */ new Set(), this.plugins = s4.plugins, this.features = 31 ^ (s4.disabledFeatures || 0), this.refs = s4.refs || /* @__PURE__ */ new Map();
      }
      markRef(s4) {
        this.marked.add(s4);
      }
      isMarked(s4) {
        return this.marked.has(s4);
      }
      getIndexedValue(s4) {
        let l3 = this.refs.get(s4);
        if (null != l3)
          return this.markRef(l3), { type: 1, value: zt$1(l3) };
        let h2 = this.refs.size;
        return this.refs.set(s4, h2), { type: 0, value: h2 };
      }
      getReference(s4) {
        let l3 = this.getIndexedValue(s4);
        return 1 === l3.type ? l3 : M$1(s4) ? { type: 2, value: le$1(l3.value, s4) } : l3;
      }
      getStrictReference(s4) {
        p(M$1(s4), new Io(s4));
        let l3 = this.getIndexedValue(s4);
        return 1 === l3.type ? l3.value : le$1(l3.value, s4);
      }
      parseFunction(s4) {
        return this.getStrictReference(s4);
      }
      parseWellKnownSymbol(s4) {
        let l3 = this.getReference(s4);
        return 0 !== l3.type ? l3.value : (p(s4 in io, new Io(s4)), function(s5, l4) {
          return { t: 17, i: s5, s: io[l4], l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
        }(l3.value, s4));
      }
      parseSpecialReference(s4) {
        let l3 = this.getIndexedValue(jo[s4]);
        return 1 === l3.type ? l3.value : { t: 26, i: l3.value, s: s4, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
      }
      parseIteratorFactory() {
        let s4 = this.getIndexedValue(Po);
        return 1 === s4.type ? s4.value : { t: 27, i: s4.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseWellKnownSymbol(Symbol.iterator), b: void 0, o: void 0 };
      }
      parseAsyncIteratorFactory() {
        let s4 = this.getIndexedValue(To);
        return 1 === s4.type ? s4.value : { t: 29, i: s4.value, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], f: void 0, b: void 0, o: void 0 };
      }
      createObjectNode(s4, l3, h2, y3) {
        return { t: h2 ? 11 : 10, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: y3, e: void 0, a: void 0, f: void 0, b: void 0, o: Pe$1(l3) };
      }
      createMapNode(s4, l3, h2, y3) {
        return { t: 8, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: { k: l3, v: h2, s: y3 }, a: void 0, f: this.parseSpecialReference(0), b: void 0, o: void 0 };
      }
      createPromiseConstructorNode(s4) {
        return { t: 22, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: this.parseSpecialReference(1), b: void 0, o: void 0 };
      }
    };
    Bo = class {
      constructor(s4) {
        this.plugins = s4.plugins, this.refs = s4.refs || /* @__PURE__ */ new Map();
      }
      deserializeReference(s4) {
        return this.assignIndexedValue(s4.i, at$1(m3(s4.s)));
      }
      deserializeArray(s4) {
        let l3, h2 = s4.l, y3 = this.assignIndexedValue(s4.i, new Array(h2));
        for (let b2 = 0; b2 < h2; b2++)
          l3 = s4.a[b2], l3 && (y3[b2] = this.deserialize(l3));
        return ue$1(y3, s4.o), y3;
      }
      deserializeProperties(s4, l3) {
        let h2 = s4.s;
        if (h2) {
          let y3 = s4.k, b2 = s4.v;
          for (let s5, w4 = 0; w4 < h2; w4++)
            s5 = y3[w4], "string" == typeof s5 ? l3[m3(s5)] = this.deserialize(b2[w4]) : l3[this.deserialize(s5)] = this.deserialize(b2[w4]);
        }
        return l3;
      }
      deserializeObject(s4) {
        let l3 = this.assignIndexedValue(s4.i, 10 === s4.t ? {} : /* @__PURE__ */ Object.create(null));
        return this.deserializeProperties(s4.p, l3), ue$1(l3, s4.o), l3;
      }
      deserializeDate(s4) {
        return this.assignIndexedValue(s4.i, new Date(s4.s));
      }
      deserializeRegExp(s4) {
        return this.assignIndexedValue(s4.i, new RegExp(m3(s4.c), s4.m));
      }
      deserializeSet(s4) {
        let l3 = this.assignIndexedValue(s4.i, /* @__PURE__ */ new Set()), h2 = s4.a;
        for (let y3 = 0, b2 = s4.l; y3 < b2; y3++)
          l3.add(this.deserialize(h2[y3]));
        return l3;
      }
      deserializeMap(s4) {
        let l3 = this.assignIndexedValue(s4.i, /* @__PURE__ */ new Map()), h2 = s4.e.k, y3 = s4.e.v;
        for (let b2 = 0, w4 = s4.e.s; b2 < w4; b2++)
          l3.set(this.deserialize(h2[b2]), this.deserialize(y3[b2]));
        return l3;
      }
      deserializeArrayBuffer(s4) {
        let l3 = new Uint8Array(s4.s);
        return this.assignIndexedValue(s4.i, l3.buffer);
      }
      deserializeTypedArray(s4) {
        let l3 = function(s5) {
          switch (s5) {
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
              throw new Co(s5);
          }
        }(s4.c), h2 = this.deserialize(s4.f);
        return this.assignIndexedValue(s4.i, new l3(h2, s4.b, s4.l));
      }
      deserializeDataView(s4) {
        let l3 = this.deserialize(s4.f);
        return this.assignIndexedValue(s4.i, new DataView(l3, s4.b, s4.l));
      }
      deserializeDictionary(s4, l3) {
        if (s4.p) {
          let h2 = this.deserializeProperties(s4.p, {});
          Object.assign(l3, h2);
        }
        return l3;
      }
      deserializeAggregateError(s4) {
        let l3 = this.assignIndexedValue(s4.i, new AggregateError([], m3(s4.m)));
        return this.deserializeDictionary(s4, l3);
      }
      deserializeError(s4) {
        let l3 = uo[s4.s], h2 = this.assignIndexedValue(s4.i, new l3(m3(s4.m)));
        return this.deserializeDictionary(s4, h2);
      }
      deserializePromise(s4) {
        let l3 = B$2(), h2 = this.assignIndexedValue(s4.i, l3), y3 = this.deserialize(s4.f);
        return s4.s ? l3.resolve(y3) : l3.reject(y3), h2.promise;
      }
      deserializeBoxed(s4) {
        return this.assignIndexedValue(s4.i, Object(this.deserialize(s4.f)));
      }
      deserializePlugin(s4) {
        let l3 = this.plugins;
        if (l3) {
          let h2 = m3(s4.c);
          for (let y3 = 0, b2 = l3.length; y3 < b2; y3++) {
            let b3 = l3[y3];
            if (b3.tag === h2)
              return this.assignIndexedValue(s4.i, b3.deserialize(s4.s, this, { id: s4.i }));
          }
        }
        throw new Ro(s4.c);
      }
      deserializePromiseConstructor(s4) {
        return this.assignIndexedValue(s4.i, B$2()).promise;
      }
      deserializePromiseResolve(s4) {
        let l3 = this.refs.get(s4.i);
        p(l3, new ko("Promise")), l3.resolve(this.deserialize(s4.a[1]));
      }
      deserializePromiseReject(s4) {
        let l3 = this.refs.get(s4.i);
        p(l3, new ko("Promise")), l3.reject(this.deserialize(s4.a[1]));
      }
      deserializeIteratorFactoryInstance(s4) {
        return this.deserialize(s4.a[0]), function(s5) {
          return () => {
            let l3 = 0;
            return { [Symbol.iterator]() {
              return this;
            }, next() {
              if (l3 > s5.d)
                return { done: true, value: void 0 };
              let h2 = l3++, y3 = s5.v[h2];
              if (h2 === s5.t)
                throw y3;
              return { done: h2 === s5.d, value: y3 };
            } };
          };
        }(this.deserialize(s4.a[1]));
      }
      deserializeAsyncIteratorFactoryInstance(s4) {
        return this.deserialize(s4.a[0]), Gt$1(this.deserialize(s4.a[1]));
      }
      deserializeStreamConstructor(s4) {
        let l3 = this.assignIndexedValue(s4.i, A()), h2 = s4.a.length;
        if (h2)
          for (let l4 = 0; l4 < h2; l4++)
            this.deserialize(s4.a[l4]);
        return l3;
      }
      deserializeStreamNext(s4) {
        let l3 = this.refs.get(s4.i);
        p(l3, new ko("Stream")), l3.next(this.deserialize(s4.f));
      }
      deserializeStreamThrow(s4) {
        let l3 = this.refs.get(s4.i);
        p(l3, new ko("Stream")), l3.throw(this.deserialize(s4.f));
      }
      deserializeStreamReturn(s4) {
        let l3 = this.refs.get(s4.i);
        p(l3, new ko("Stream")), l3.return(this.deserialize(s4.f));
      }
      deserializeIteratorFactory(s4) {
        this.deserialize(s4.f);
      }
      deserializeAsyncIteratorFactory(s4) {
        this.deserialize(s4.a[1]);
      }
      deserialize(s4) {
        try {
          switch (s4.t) {
            case 2:
              return co[s4.s];
            case 0:
              return s4.s;
            case 1:
              return m3(s4.s);
            case 3:
              return BigInt(s4.s);
            case 4:
              return this.refs.get(s4.i);
            case 18:
              return this.deserializeReference(s4);
            case 9:
              return this.deserializeArray(s4);
            case 10:
            case 11:
              return this.deserializeObject(s4);
            case 5:
              return this.deserializeDate(s4);
            case 6:
              return this.deserializeRegExp(s4);
            case 7:
              return this.deserializeSet(s4);
            case 8:
              return this.deserializeMap(s4);
            case 19:
              return this.deserializeArrayBuffer(s4);
            case 16:
            case 15:
              return this.deserializeTypedArray(s4);
            case 20:
              return this.deserializeDataView(s4);
            case 14:
              return this.deserializeAggregateError(s4);
            case 13:
              return this.deserializeError(s4);
            case 12:
              return this.deserializePromise(s4);
            case 17:
              return oo[s4.s];
            case 21:
              return this.deserializeBoxed(s4);
            case 25:
              return this.deserializePlugin(s4);
            case 22:
              return this.deserializePromiseConstructor(s4);
            case 23:
              return this.deserializePromiseResolve(s4);
            case 24:
              return this.deserializePromiseReject(s4);
            case 28:
              return this.deserializeIteratorFactoryInstance(s4);
            case 30:
              return this.deserializeAsyncIteratorFactoryInstance(s4);
            case 31:
              return this.deserializeStreamConstructor(s4);
            case 32:
              return this.deserializeStreamNext(s4);
            case 33:
              return this.deserializeStreamThrow(s4);
            case 34:
              return this.deserializeStreamReturn(s4);
            case 27:
              return this.deserializeIteratorFactory(s4);
            case 29:
              return this.deserializeAsyncIteratorFactory(s4);
            default:
              throw new _o(s4);
          }
        } catch (s5) {
          throw new $o(s5);
        }
      }
    };
    Fo = class extends Bo {
      constructor(s4) {
        super(s4), this.mode = "vanilla", this.marked = new Set(s4.markedRefs);
      }
      assignIndexedValue(s4, l3) {
        return this.marked.has(s4) && this.refs.set(s4, l3), l3;
      }
    };
    Mo = /^[$A-Z_][0-9A-Z_$]*$/i;
    No = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: void 0 };
    Lo = class {
      constructor(s4) {
        this.stack = [], this.flags = [], this.assignments = [], this.plugins = s4.plugins, this.features = s4.features, this.marked = new Set(s4.markedRefs);
      }
      createFunction(s4, l3) {
        return 2 & this.features ? (1 === s4.length ? s4[0] : "(" + s4.join(",") + ")") + "=>" + l3 : "function(" + s4.join(",") + "){return " + l3 + "}";
      }
      createEffectfulFunction(s4, l3) {
        return 2 & this.features ? (1 === s4.length ? s4[0] : "(" + s4.join(",") + ")") + "=>{" + l3 + "}" : "function(" + s4.join(",") + "){" + l3 + "}";
      }
      markRef(s4) {
        this.marked.add(s4);
      }
      isMarked(s4) {
        return this.marked.has(s4);
      }
      pushObjectFlag(s4, l3) {
        0 !== s4 && (this.markRef(l3), this.flags.push({ type: s4, value: this.getRefParam(l3) }));
      }
      resolveFlags() {
        let s4 = "";
        for (let l3 = 0, h2 = this.flags, y3 = h2.length; l3 < y3; l3++) {
          let y4 = h2[l3];
          s4 += No[y4.type] + "(" + y4.value + "),";
        }
        return s4;
      }
      resolvePatches() {
        let s4 = de$1(this.assignments), l3 = this.resolveFlags();
        return s4 ? l3 ? s4 + l3 : s4 : l3;
      }
      createAssignment(s4, l3) {
        this.assignments.push({ t: 0, s: s4, k: void 0, v: l3 });
      }
      createAddAssignment(s4, l3) {
        this.assignments.push({ t: 1, s: this.getRefParam(s4), k: void 0, v: l3 });
      }
      createSetAssignment(s4, l3, h2) {
        this.assignments.push({ t: 2, s: this.getRefParam(s4), k: l3, v: h2 });
      }
      createDeleteAssignment(s4, l3) {
        this.assignments.push({ t: 3, s: this.getRefParam(s4), k: l3, v: void 0 });
      }
      createArrayAssign(s4, l3, h2) {
        this.createAssignment(this.getRefParam(s4) + "[" + l3 + "]", h2);
      }
      createObjectAssign(s4, l3, h2) {
        this.createAssignment(this.getRefParam(s4) + "." + l3, h2);
      }
      isIndexedValueInStack(s4) {
        return 4 === s4.t && this.stack.includes(s4.i);
      }
      serializeReference(s4) {
        return this.assignIndexedValue(s4.i, Qi + '.get("' + s4.s + '")');
      }
      serializeArrayItem(s4, l3, h2) {
        return l3 ? this.isIndexedValueInStack(l3) ? (this.markRef(s4), this.createArrayAssign(s4, h2, this.getRefParam(l3.i)), "") : this.serialize(l3) : "";
      }
      serializeArray(s4) {
        let l3 = s4.i;
        if (s4.l) {
          this.stack.push(l3);
          let h2 = s4.a, y3 = this.serializeArrayItem(l3, h2[0], 0), b2 = "" === y3;
          for (let w4, S2 = 1, E2 = s4.l; S2 < E2; S2++)
            w4 = this.serializeArrayItem(l3, h2[S2], S2), y3 += "," + w4, b2 = "" === w4;
          return this.stack.pop(), this.pushObjectFlag(s4.o, s4.i), this.assignIndexedValue(l3, "[" + y3 + (b2 ? ",]" : "]"));
        }
        return this.assignIndexedValue(l3, "[]");
      }
      serializeProperty(s4, l3, h2) {
        if ("string" == typeof l3) {
          let y3 = Number(l3), b2 = y3 >= 0 && y3.toString() === l3 || ce(l3);
          if (this.isIndexedValueInStack(h2)) {
            let w4 = this.getRefParam(h2.i);
            return this.markRef(s4.i), b2 && y3 != y3 ? this.createObjectAssign(s4.i, l3, w4) : this.createArrayAssign(s4.i, b2 ? l3 : '"' + l3 + '"', w4), "";
          }
          return (b2 ? l3 : '"' + l3 + '"') + ":" + this.serialize(h2);
        }
        return "[" + this.serialize(l3) + "]:" + this.serialize(h2);
      }
      serializeProperties(s4, l3) {
        let h2 = l3.s;
        if (h2) {
          let y3 = l3.k, b2 = l3.v;
          this.stack.push(s4.i);
          let w4 = this.serializeProperty(s4, y3[0], b2[0]);
          for (let l4 = 1, S2 = w4; l4 < h2; l4++)
            S2 = this.serializeProperty(s4, y3[l4], b2[l4]), w4 += (S2 && w4 && ",") + S2;
          return this.stack.pop(), "{" + w4 + "}";
        }
        return "{}";
      }
      serializeObject(s4) {
        return this.pushObjectFlag(s4.o, s4.i), this.assignIndexedValue(s4.i, this.serializeProperties(s4, s4.p));
      }
      serializeWithObjectAssign(s4, l3, h2) {
        let y3 = this.serializeProperties(s4, l3);
        return "{}" !== y3 ? "Object.assign(" + h2 + "," + y3 + ")" : h2;
      }
      serializeStringKeyAssignment(s4, l3, h2, y3) {
        let b2 = this.serialize(y3), w4 = Number(h2), S2 = w4 >= 0 && w4.toString() === h2 || ce(h2);
        if (this.isIndexedValueInStack(y3))
          S2 && w4 != w4 ? this.createObjectAssign(s4.i, h2, b2) : this.createArrayAssign(s4.i, S2 ? h2 : '"' + h2 + '"', b2);
        else {
          let y4 = this.assignments;
          this.assignments = l3, S2 && w4 != w4 ? this.createObjectAssign(s4.i, h2, b2) : this.createArrayAssign(s4.i, S2 ? h2 : '"' + h2 + '"', b2), this.assignments = y4;
        }
      }
      serializeAssignment(s4, l3, h2, y3) {
        if ("string" == typeof h2)
          this.serializeStringKeyAssignment(s4, l3, h2, y3);
        else {
          let b2 = this.stack;
          this.stack = [];
          let w4 = this.serialize(y3);
          this.stack = b2;
          let S2 = this.assignments;
          this.assignments = l3, this.createArrayAssign(s4.i, this.serialize(h2), w4), this.assignments = S2;
        }
      }
      serializeAssignments(s4, l3) {
        let h2 = l3.s;
        if (h2) {
          let y3 = [], b2 = l3.k, w4 = l3.v;
          this.stack.push(s4.i);
          for (let l4 = 0; l4 < h2; l4++)
            this.serializeAssignment(s4, y3, b2[l4], w4[l4]);
          return this.stack.pop(), de$1(y3);
        }
      }
      serializeDictionary(s4, l3) {
        if (s4.p)
          if (8 & this.features)
            l3 = this.serializeWithObjectAssign(s4, s4.p, l3);
          else {
            this.markRef(s4.i);
            let h2 = this.serializeAssignments(s4, s4.p);
            if (h2)
              return "(" + this.assignIndexedValue(s4.i, l3) + "," + h2 + this.getRefParam(s4.i) + ")";
          }
        return this.assignIndexedValue(s4.i, l3);
      }
      serializeNullConstructor(s4) {
        return this.pushObjectFlag(s4.o, s4.i), this.serializeDictionary(s4, "Object.create(null)");
      }
      serializeDate(s4) {
        return this.assignIndexedValue(s4.i, 'new Date("' + s4.s + '")');
      }
      serializeRegExp(s4) {
        return this.assignIndexedValue(s4.i, "/" + s4.c + "/" + s4.m);
      }
      serializeSetItem(s4, l3) {
        return this.isIndexedValueInStack(l3) ? (this.markRef(s4), this.createAddAssignment(s4, this.getRefParam(l3.i)), "") : this.serialize(l3);
      }
      serializeSet(s4) {
        let l3 = "new Set", h2 = s4.l, y3 = s4.i;
        if (h2) {
          let b2 = s4.a;
          this.stack.push(y3);
          let w4 = this.serializeSetItem(y3, b2[0]);
          for (let s5 = 1, l4 = w4; s5 < h2; s5++)
            l4 = this.serializeSetItem(y3, b2[s5]), w4 += (l4 && w4 && ",") + l4;
          this.stack.pop(), w4 && (l3 += "([" + w4 + "])");
        }
        return this.assignIndexedValue(y3, l3);
      }
      serializeMapEntry(s4, l3, h2, y3) {
        if (this.isIndexedValueInStack(l3)) {
          let b2 = this.getRefParam(l3.i);
          if (this.markRef(s4), this.isIndexedValueInStack(h2)) {
            let l4 = this.getRefParam(h2.i);
            return this.createSetAssignment(s4, b2, l4), "";
          }
          if (4 !== h2.t && null != h2.i && this.isMarked(h2.i)) {
            let l4 = "(" + this.serialize(h2) + ",[" + y3 + "," + y3 + "])";
            return this.createSetAssignment(s4, b2, this.getRefParam(h2.i)), this.createDeleteAssignment(s4, y3), l4;
          }
          let w4 = this.stack;
          return this.stack = [], this.createSetAssignment(s4, b2, this.serialize(h2)), this.stack = w4, "";
        }
        if (this.isIndexedValueInStack(h2)) {
          let b2 = this.getRefParam(h2.i);
          if (this.markRef(s4), 4 !== l3.t && null != l3.i && this.isMarked(l3.i)) {
            let h3 = "(" + this.serialize(l3) + ",[" + y3 + "," + y3 + "])";
            return this.createSetAssignment(s4, this.getRefParam(l3.i), b2), this.createDeleteAssignment(s4, y3), h3;
          }
          let w4 = this.stack;
          return this.stack = [], this.createSetAssignment(s4, this.serialize(l3), b2), this.stack = w4, "";
        }
        return "[" + this.serialize(l3) + "," + this.serialize(h2) + "]";
      }
      serializeMap(s4) {
        let l3 = "new Map", h2 = s4.e.s, y3 = s4.i, b2 = s4.f, w4 = this.getRefParam(b2.i);
        if (h2) {
          let b3 = s4.e.k, S2 = s4.e.v;
          this.stack.push(y3);
          let E2 = this.serializeMapEntry(y3, b3[0], S2[0], w4);
          for (let s5 = 1, l4 = E2; s5 < h2; s5++)
            l4 = this.serializeMapEntry(y3, b3[s5], S2[s5], w4), E2 += (l4 && E2 && ",") + l4;
          this.stack.pop(), E2 && (l3 += "([" + E2 + "])");
        }
        return 26 === b2.t && (this.markRef(b2.i), l3 = "(" + this.serialize(b2) + "," + l3 + ")"), this.assignIndexedValue(y3, l3);
      }
      serializeArrayBuffer(s4) {
        let l3 = "new Uint8Array(", h2 = s4.s, y3 = h2.length;
        if (y3) {
          l3 += "[" + h2[0];
          for (let s5 = 1; s5 < y3; s5++)
            l3 += "," + h2[s5];
          l3 += "]";
        }
        return this.assignIndexedValue(s4.i, l3 + ").buffer");
      }
      serializeTypedArray(s4) {
        return this.assignIndexedValue(s4.i, "new " + s4.c + "(" + this.serialize(s4.f) + "," + s4.b + "," + s4.l + ")");
      }
      serializeDataView(s4) {
        return this.assignIndexedValue(s4.i, "new DataView(" + this.serialize(s4.f) + "," + s4.b + "," + s4.l + ")");
      }
      serializeAggregateError(s4) {
        let l3 = s4.i;
        this.stack.push(l3);
        let h2 = this.serializeDictionary(s4, 'new AggregateError([],"' + s4.m + '")');
        return this.stack.pop(), h2;
      }
      serializeError(s4) {
        return this.serializeDictionary(s4, "new " + lo[s4.s] + '("' + s4.m + '")');
      }
      serializePromise(s4) {
        let l3, h2 = s4.f, y3 = s4.i, b2 = s4.s ? "Promise.resolve" : "Promise.reject";
        if (this.isIndexedValueInStack(h2)) {
          let y4 = this.getRefParam(h2.i);
          l3 = b2 + (s4.s ? "().then(" + this.createFunction([], y4) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + y4) + ")");
        } else {
          this.stack.push(y3);
          let s5 = this.serialize(h2);
          this.stack.pop(), l3 = b2 + "(" + s5 + ")";
        }
        return this.assignIndexedValue(y3, l3);
      }
      serializeWellKnownSymbol(s4) {
        return this.assignIndexedValue(s4.i, so[s4.s]);
      }
      serializeBoxed(s4) {
        return this.assignIndexedValue(s4.i, "Object(" + this.serialize(s4.f) + ")");
      }
      serializePlugin(s4) {
        let l3 = this.plugins;
        if (l3)
          for (let h2 = 0, y3 = l3.length; h2 < y3; h2++) {
            let y4 = l3[h2];
            if (y4.tag === s4.c)
              return this.assignIndexedValue(s4.i, y4.serialize(s4.s, this, { id: s4.i }));
          }
        throw new Ro(s4.c);
      }
      getConstructor(s4) {
        let l3 = this.serialize(s4);
        return l3 === this.getRefParam(s4.i) ? l3 : "(" + l3 + ")";
      }
      serializePromiseConstructor(s4) {
        return this.assignIndexedValue(s4.i, this.getConstructor(s4.f) + "()");
      }
      serializePromiseResolve(s4) {
        return this.getConstructor(s4.a[0]) + "(" + this.getRefParam(s4.i) + "," + this.serialize(s4.a[1]) + ")";
      }
      serializePromiseReject(s4) {
        return this.getConstructor(s4.a[0]) + "(" + this.getRefParam(s4.i) + "," + this.serialize(s4.a[1]) + ")";
      }
      serializeSpecialReferenceValue(s4) {
        switch (s4) {
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
      serializeSpecialReference(s4) {
        return this.assignIndexedValue(s4.i, this.serializeSpecialReferenceValue(s4.s));
      }
      serializeIteratorFactory(s4) {
        let l3 = "", h2 = false;
        return 4 !== s4.f.t && (this.markRef(s4.f.i), l3 = "(" + this.serialize(s4.f) + ",", h2 = true), l3 += this.assignIndexedValue(s4.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(s4.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), h2 && (l3 += ")"), l3;
      }
      serializeIteratorFactoryInstance(s4) {
        return this.getConstructor(s4.a[0]) + "(" + this.serialize(s4.a[1]) + ")";
      }
      serializeAsyncIteratorFactory(s4) {
        let l3 = s4.a[0], h2 = s4.a[1], y3 = "";
        4 !== l3.t && (this.markRef(l3.i), y3 += "(" + this.serialize(l3)), 4 !== h2.t && (this.markRef(h2.i), y3 += (y3 ? "," : "(") + this.serialize(h2)), y3 && (y3 += ",");
        let b2 = this.assignIndexedValue(s4.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(h2.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(p.push(t=" + this.getRefParam(l3.i) + "()),t):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
        return y3 ? y3 + b2 + ")" : b2;
      }
      serializeAsyncIteratorFactoryInstance(s4) {
        return this.getConstructor(s4.a[0]) + "(" + this.serialize(s4.a[1]) + ")";
      }
      serializeStreamConstructor(s4) {
        let l3 = this.assignIndexedValue(s4.i, this.getConstructor(s4.f) + "()"), h2 = s4.a.length;
        if (h2) {
          let y3 = this.serialize(s4.a[0]);
          for (let l4 = 1; l4 < h2; l4++)
            y3 += "," + this.serialize(s4.a[l4]);
          return "(" + l3 + "," + y3 + "," + this.getRefParam(s4.i) + ")";
        }
        return l3;
      }
      serializeStreamNext(s4) {
        return this.getRefParam(s4.i) + ".next(" + this.serialize(s4.f) + ")";
      }
      serializeStreamThrow(s4) {
        return this.getRefParam(s4.i) + ".throw(" + this.serialize(s4.f) + ")";
      }
      serializeStreamReturn(s4) {
        return this.getRefParam(s4.i) + ".return(" + this.serialize(s4.f) + ")";
      }
      serialize(s4) {
        try {
          switch (s4.t) {
            case 2:
              return ao[s4.s];
            case 0:
              return "" + s4.s;
            case 1:
              return '"' + s4.s + '"';
            case 3:
              return s4.s + "n";
            case 4:
              return this.getRefParam(s4.i);
            case 18:
              return this.serializeReference(s4);
            case 9:
              return this.serializeArray(s4);
            case 10:
              return this.serializeObject(s4);
            case 11:
              return this.serializeNullConstructor(s4);
            case 5:
              return this.serializeDate(s4);
            case 6:
              return this.serializeRegExp(s4);
            case 7:
              return this.serializeSet(s4);
            case 8:
              return this.serializeMap(s4);
            case 19:
              return this.serializeArrayBuffer(s4);
            case 16:
            case 15:
              return this.serializeTypedArray(s4);
            case 20:
              return this.serializeDataView(s4);
            case 14:
              return this.serializeAggregateError(s4);
            case 13:
              return this.serializeError(s4);
            case 12:
              return this.serializePromise(s4);
            case 17:
              return this.serializeWellKnownSymbol(s4);
            case 21:
              return this.serializeBoxed(s4);
            case 22:
              return this.serializePromiseConstructor(s4);
            case 23:
              return this.serializePromiseResolve(s4);
            case 24:
              return this.serializePromiseReject(s4);
            case 25:
              return this.serializePlugin(s4);
            case 26:
              return this.serializeSpecialReference(s4);
            case 27:
              return this.serializeIteratorFactory(s4);
            case 28:
              return this.serializeIteratorFactoryInstance(s4);
            case 29:
              return this.serializeAsyncIteratorFactory(s4);
            case 30:
              return this.serializeAsyncIteratorFactoryInstance(s4);
            case 31:
              return this.serializeStreamConstructor(s4);
            case 32:
              return this.serializeStreamNext(s4);
            case 33:
              return this.serializeStreamThrow(s4);
            case 34:
              return this.serializeStreamReturn(s4);
            default:
              throw new _o(s4);
          }
        } catch (s5) {
          throw new Eo(s5);
        }
      }
    };
    Uo = class extends Oo {
      parseItems(s4) {
        let l3 = [];
        for (let h2 = 0, y3 = s4.length; h2 < y3; h2++)
          h2 in s4 && (l3[h2] = this.parse(s4[h2]));
        return l3;
      }
      parseArray(s4, l3) {
        return function(s5, l4, h2) {
          return { t: 9, i: s5, s: void 0, l: l4.length, c: void 0, m: void 0, p: void 0, e: void 0, a: h2, f: void 0, b: void 0, o: Pe$1(l4) };
        }(s4, l3, this.parseItems(l3));
      }
      parseProperties(s4) {
        let l3 = Object.entries(s4), h2 = [], y3 = [];
        for (let s5 = 0, b3 = l3.length; s5 < b3; s5++)
          h2.push(f(l3[s5][0])), y3.push(this.parse(l3[s5][1]));
        let b2 = Symbol.iterator;
        return b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(Fe$1(this.parseIteratorFactory(), this.parse(je(s4))))), b2 = Symbol.asyncIterator, b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(Oe$1(this.parseAsyncIteratorFactory(), this.parse(A())))), b2 = Symbol.toStringTag, b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(_$1(s4[b2]))), b2 = Symbol.isConcatSpreadable, b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(s4[b2] ? fo : ho)), { k: h2, v: y3, s: h2.length };
      }
      parsePlainObject(s4, l3, h2) {
        return this.createObjectNode(s4, l3, h2, this.parseProperties(l3));
      }
      parseBoxed(s4, l3) {
        return function(s5, l4) {
          return { t: 21, i: s5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: l4, b: void 0, o: void 0 };
        }(s4, this.parse(l3.valueOf()));
      }
      parseTypedArray(s4, l3) {
        return function(s5, l4, h2) {
          return { t: 15, i: s5, s: void 0, l: l4.length, c: l4.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: h2, b: l4.byteOffset, o: void 0 };
        }(s4, l3, this.parse(l3.buffer));
      }
      parseBigIntTypedArray(s4, l3) {
        return function(s5, l4, h2) {
          return { t: 16, i: s5, s: void 0, l: l4.length, c: l4.constructor.name, m: void 0, p: void 0, e: void 0, a: void 0, f: h2, b: l4.byteOffset, o: void 0 };
        }(s4, l3, this.parse(l3.buffer));
      }
      parseDataView(s4, l3) {
        return function(s5, l4, h2) {
          return { t: 20, i: s5, s: void 0, l: l4.byteLength, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: h2, b: l4.byteOffset, o: void 0 };
        }(s4, l3, this.parse(l3.buffer));
      }
      parseError(s4, l3) {
        let h2 = oe(l3, this.features);
        return function(s5, l4, h3) {
          return { t: 13, i: s5, s: Z$2(l4), l: void 0, c: void 0, m: f(l4.message), p: h3, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
        }(s4, l3, h2 ? this.parseProperties(h2) : void 0);
      }
      parseAggregateError(s4, l3) {
        let h2 = oe(l3, this.features);
        return function(s5, l4, h3) {
          return { t: 14, i: s5, s: Z$2(l4), l: void 0, c: void 0, m: f(l4.message), p: h3, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
        }(s4, l3, h2 ? this.parseProperties(h2) : void 0);
      }
      parseMap(s4, l3) {
        let h2 = [], y3 = [];
        for (let [s5, b2] of l3.entries())
          h2.push(this.parse(s5)), y3.push(this.parse(b2));
        return this.createMapNode(s4, h2, y3, l3.size);
      }
      parseSet(s4, l3) {
        let h2 = [];
        for (let s5 of l3.keys())
          h2.push(this.parse(s5));
        return function(s5, l4, h3) {
          return { t: 7, i: s5, s: void 0, l: l4, c: void 0, m: void 0, p: void 0, e: void 0, a: h3, f: void 0, b: void 0, o: void 0 };
        }(s4, l3.size, h2);
      }
      parsePlugin(s4, l3) {
        let h2 = this.plugins;
        if (h2)
          for (let y3 = 0, b2 = h2.length; y3 < b2; y3++) {
            let b3 = h2[y3];
            if (b3.parse.sync && b3.test(l3))
              return ke(s4, b3.tag, b3.parse.sync(l3, this, { id: s4 }));
          }
      }
      parseStream(s4, l3) {
        return $e$1(s4, this.parseSpecialReference(4), []);
      }
      parsePromise(s4, l3) {
        return this.createPromiseConstructorNode(s4);
      }
      parseObject(s4, l3) {
        if (Array.isArray(l3))
          return this.parseArray(s4, l3);
        if (function(s5) {
          return "__SEROVAL_STREAM__" in s5;
        }(l3))
          return this.parseStream(s4, l3);
        let h2 = this.parsePlugin(s4, l3);
        if (h2)
          return h2;
        let y3 = l3.constructor;
        switch (y3) {
          case Object:
            return this.parsePlainObject(s4, l3, false);
          case void 0:
            return this.parsePlainObject(s4, l3, true);
          case Date:
            return function(s5, l4) {
              return { t: 5, i: s5, s: l4.toISOString(), l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, f: void 0, a: void 0, b: void 0, o: void 0 };
            }(s4, l3);
          case RegExp:
            return function(s5, l4) {
              return { t: 6, i: s5, s: void 0, l: void 0, c: f(l4.source), m: l4.flags, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
            }(s4, l3);
          case Error:
          case EvalError:
          case RangeError:
          case ReferenceError:
          case SyntaxError:
          case TypeError:
          case URIError:
            return this.parseError(s4, l3);
          case Number:
          case Boolean:
          case String:
          case BigInt:
            return this.parseBoxed(s4, l3);
          case ArrayBuffer:
            return function(s5, l4) {
              let h3 = new Uint8Array(l4), y4 = h3.length, b3 = new Array(y4);
              for (let s6 = 0; s6 < y4; s6++)
                b3[s6] = h3[s6];
              return { t: 19, i: s5, s: b3, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
            }(s4, l3);
          case Int8Array:
          case Int16Array:
          case Int32Array:
          case Uint8Array:
          case Uint16Array:
          case Uint32Array:
          case Uint8ClampedArray:
          case Float32Array:
          case Float64Array:
            return this.parseTypedArray(s4, l3);
          case DataView:
            return this.parseDataView(s4, l3);
          case Map:
            return this.parseMap(s4, l3);
          case Set:
            return this.parseSet(s4, l3);
        }
        if (y3 === Promise || l3 instanceof Promise)
          return this.parsePromise(s4, l3);
        let b2 = this.features;
        if (16 & b2)
          switch (y3) {
            case BigInt64Array:
            case BigUint64Array:
              return this.parseBigIntTypedArray(s4, l3);
          }
        if (1 & b2 && typeof AggregateError < "u" && (y3 === AggregateError || l3 instanceof AggregateError))
          return this.parseAggregateError(s4, l3);
        if (l3 instanceof Error)
          return this.parseError(s4, l3);
        if (Symbol.iterator in l3 || Symbol.asyncIterator in l3)
          return this.parsePlainObject(s4, l3, !!y3);
        throw new Io(l3);
      }
      parse(s4) {
        try {
          switch (typeof s4) {
            case "boolean":
              return s4 ? fo : ho;
            case "undefined":
              return po;
            case "string":
              return _$1(s4);
            case "number":
              return function(s5) {
                switch (s5) {
                  case Number.POSITIVE_INFINITY:
                    return go;
                  case Number.NEGATIVE_INFINITY:
                    return vo;
                }
                return s5 != s5 ? bo : Object.is(s5, -0) ? yo : { t: 0, i: void 0, s: s5, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
              }(s4);
            case "bigint":
              return function(s5) {
                return { t: 3, i: void 0, s: "" + s5, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: void 0, b: void 0, o: void 0 };
              }(s4);
            case "object":
              if (s4) {
                let l3 = this.getReference(s4);
                return 0 === l3.type ? this.parseObject(l3.value, s4) : l3.value;
              }
              return mo;
            case "symbol":
              return this.parseWellKnownSymbol(s4);
            case "function":
              return this.parseFunction(s4);
            default:
              throw new Io(s4);
          }
        } catch (s5) {
          throw new So(s5);
        }
      }
    };
    Ho = class extends Lo {
      constructor(s4) {
        super(s4), this.mode = "cross", this.scopeId = s4.scopeId;
      }
      getRefParam(s4) {
        return "$R[" + s4 + "]";
      }
      assignIndexedValue(s4, l3) {
        return this.getRefParam(s4) + "=" + l3;
      }
      serializeTop(s4) {
        let l3 = this.serialize(s4), h2 = s4.i;
        if (null == h2)
          return l3;
        let y3 = this.resolvePatches(), b2 = this.getRefParam(h2), w4 = null == this.scopeId ? "" : eo, S2 = y3 ? l3 + "," + y3 + b2 : l3;
        if ("" === w4)
          return y3 ? "(" + S2 + ")" : S2;
        let E2 = null == this.scopeId ? "()" : '($R["' + f(this.scopeId) + '"])';
        return "(" + this.createFunction([w4], S2) + ")" + E2;
      }
    };
    Do = class extends Uo {
      constructor(s4) {
        super(s4), this.alive = true, this.pending = 0, this.initial = true, this.buffer = [], this.onParseCallback = s4.onParse, this.onErrorCallback = s4.onError, this.onDoneCallback = s4.onDone;
      }
      onParseInternal(s4, l3) {
        try {
          this.onParseCallback(s4, l3);
        } catch (s5) {
          this.onError(s5);
        }
      }
      flush() {
        for (let s4 = 0, l3 = this.buffer.length; s4 < l3; s4++)
          this.onParseInternal(this.buffer[s4], false);
      }
      onParse(s4) {
        this.initial ? this.buffer.push(s4) : this.onParseInternal(s4, false);
      }
      onError(s4) {
        if (!this.onErrorCallback)
          throw s4;
        this.onErrorCallback(s4);
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
      parseProperties(s4) {
        let l3 = Object.entries(s4), h2 = [], y3 = [];
        for (let s5 = 0, b3 = l3.length; s5 < b3; s5++)
          h2.push(f(l3[s5][0])), y3.push(this.parse(l3[s5][1]));
        let b2 = Symbol.iterator;
        return b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(Fe$1(this.parseIteratorFactory(), this.parse(je(s4))))), b2 = Symbol.asyncIterator, b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(Oe$1(this.parseAsyncIteratorFactory(), this.parse(function(s5) {
          let l4 = A(), h3 = s5[Symbol.asyncIterator]();
          return async function i2() {
            try {
              let s6 = await h3.next();
              s6.done ? l4.return(s6.value) : (l4.next(s6.value), await i2());
            } catch (s6) {
              l4.throw(s6);
            }
          }().catch(() => {
          }), l4;
        }(s4))))), b2 = Symbol.toStringTag, b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(_$1(s4[b2]))), b2 = Symbol.isConcatSpreadable, b2 in s4 && (h2.push(this.parseWellKnownSymbol(b2)), y3.push(s4[b2] ? fo : ho)), { k: h2, v: y3, s: h2.length };
      }
      parsePromise(s4, l3) {
        return l3.then((l4) => {
          let h2 = this.parseWithError(l4);
          h2 && this.onParse({ t: 23, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(2), h2], f: void 0, b: void 0, o: void 0 }), this.popPendingState();
        }, (l4) => {
          if (this.alive) {
            let h2 = this.parseWithError(l4);
            h2 && this.onParse({ t: 24, i: s4, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: [this.parseSpecialReference(3), h2], f: void 0, b: void 0, o: void 0 });
          }
          this.popPendingState();
        }), this.pushPendingState(), this.createPromiseConstructorNode(s4);
      }
      parsePlugin(s4, l3) {
        let h2 = this.plugins;
        if (h2)
          for (let y3 = 0, b2 = h2.length; y3 < b2; y3++) {
            let b3 = h2[y3];
            if (b3.parse.stream && b3.test(l3))
              return ke(s4, b3.tag, b3.parse.stream(l3, this, { id: s4 }));
          }
      }
      parseStream(s4, l3) {
        let h2 = $e$1(s4, this.parseSpecialReference(4), []);
        return this.pushPendingState(), l3.on({ next: (l4) => {
          if (this.alive) {
            let h3 = this.parseWithError(l4);
            h3 && this.onParse(function(s5, l5) {
              return { t: 32, i: s5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: l5, b: void 0, o: void 0 };
            }(s4, h3));
          }
        }, throw: (l4) => {
          if (this.alive) {
            let h3 = this.parseWithError(l4);
            h3 && this.onParse(function(s5, l5) {
              return { t: 33, i: s5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: l5, b: void 0, o: void 0 };
            }(s4, h3));
          }
          this.popPendingState();
        }, return: (l4) => {
          if (this.alive) {
            let h3 = this.parseWithError(l4);
            h3 && this.onParse(function(s5, l5) {
              return { t: 34, i: s5, s: void 0, l: void 0, c: void 0, m: void 0, p: void 0, e: void 0, a: void 0, f: l5, b: void 0, o: void 0 };
            }(s4, h3));
          }
          this.popPendingState();
        } }), h2;
      }
      parseWithError(s4) {
        try {
          return this.parse(s4);
        } catch (s5) {
          return void this.onError(s5);
        }
      }
      start(s4) {
        let l3 = this.parseWithError(s4);
        l3 && (this.onParseInternal(l3, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
      }
      destroy() {
        this.alive && (this.onDone(), this.alive = false);
      }
      isAlive() {
        return this.alive;
      }
    };
    qo = class extends Do {
      constructor() {
        super(...arguments), this.mode = "cross";
      }
    };
    Wo = { tag: "seroval-plugins/web/CustomEvent", test: (s4) => !(typeof CustomEvent > "u") && s4 instanceof CustomEvent, parse: { sync: (s4, l3) => ({ type: l3.parse(s4.type), options: l3.parse(C2(s4)) }), async: async (s4, l3) => ({ type: await l3.parse(s4.type), options: await l3.parse(C2(s4)) }), stream: (s4, l3) => ({ type: l3.parse(s4.type), options: l3.parse(C2(s4)) }) }, serialize: (s4, l3) => "new CustomEvent(" + l3.serialize(s4.type) + "," + l3.serialize(s4.options) + ")", deserialize: (s4, l3) => new CustomEvent(l3.deserialize(s4.type), l3.deserialize(s4.options)) };
    Vo = Wo;
    Ko = { tag: "seroval-plugins/web/DOMException", test: (s4) => !(typeof DOMException > "u") && s4 instanceof DOMException, parse: { sync: (s4, l3) => ({ name: l3.parse(s4.name), message: l3.parse(s4.message) }), async: async (s4, l3) => ({ name: await l3.parse(s4.name), message: await l3.parse(s4.message) }), stream: (s4, l3) => ({ name: l3.parse(s4.name), message: l3.parse(s4.message) }) }, serialize: (s4, l3) => "new DOMException(" + l3.serialize(s4.message) + "," + l3.serialize(s4.name) + ")", deserialize: (s4, l3) => new DOMException(l3.deserialize(s4.message), l3.deserialize(s4.name)) };
    Zo = Ko;
    Go = { tag: "seroval-plugins/web/Event", test: (s4) => !(typeof Event > "u") && s4 instanceof Event, parse: { sync: (s4, l3) => ({ type: l3.parse(s4.type), options: l3.parse(V$2(s4)) }), async: async (s4, l3) => ({ type: await l3.parse(s4.type), options: await l3.parse(V$2(s4)) }), stream: (s4, l3) => ({ type: l3.parse(s4.type), options: l3.parse(V$2(s4)) }) }, serialize: (s4, l3) => "new Event(" + l3.serialize(s4.type) + "," + l3.serialize(s4.options) + ")", deserialize: (s4, l3) => new Event(l3.deserialize(s4.type), l3.deserialize(s4.options)) };
    Yo = Go;
    Xo = { tag: "seroval-plugins/web/File", test: (s4) => !(typeof File > "u") && s4 instanceof File, parse: { async: async (s4, l3) => ({ name: await l3.parse(s4.name), options: await l3.parse({ type: s4.type, lastModified: s4.lastModified }), buffer: await l3.parse(await s4.arrayBuffer()) }) }, serialize: (s4, l3) => "new File([" + l3.serialize(s4.buffer) + "]," + l3.serialize(s4.name) + "," + l3.serialize(s4.options) + ")", deserialize: (s4, l3) => new File([l3.deserialize(s4.buffer)], l3.deserialize(s4.name), l3.deserialize(s4.options)) };
    Jo = Xo;
    Qo = {};
    ea = { tag: "seroval-plugins/web/FormDataFactory", test: (s4) => s4 === Qo, parse: { sync() {
    }, async: async () => await Promise.resolve(void 0), stream() {
    } }, serialize: (s4, l3) => l3.createEffectfulFunction(["e", "f", "i", "s", "t"], "f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f"), deserialize: () => Qo };
    ta = { tag: "seroval-plugins/web/FormData", extends: [Jo, ea], test: (s4) => !(typeof FormData > "u") && s4 instanceof FormData, parse: { sync: (s4, l3) => ({ factory: l3.parse(Qo), entries: l3.parse(j2(s4)) }), async: async (s4, l3) => ({ factory: await l3.parse(Qo), entries: await l3.parse(j2(s4)) }), stream: (s4, l3) => ({ factory: l3.parse(Qo), entries: l3.parse(j2(s4)) }) }, serialize: (s4, l3) => "(" + l3.serialize(s4.factory) + ")(" + l3.serialize(s4.entries) + ")", deserialize(s4, l3) {
      let h2 = new FormData(), y3 = l3.deserialize(s4.entries);
      for (let s5 = 0, l4 = y3.length; s5 < l4; s5++) {
        let l5 = y3[s5];
        h2.append(l5[0], l5[1]);
      }
      return h2;
    } };
    ra = ta;
    na = { tag: "seroval-plugins/web/Headers", test: (s4) => !(typeof Headers > "u") && s4 instanceof Headers, parse: { sync: (s4, l3) => l3.parse(T$1(s4)), async: async (s4, l3) => await l3.parse(T$1(s4)), stream: (s4, l3) => l3.parse(T$1(s4)) }, serialize: (s4, l3) => "new Headers(" + l3.serialize(s4) + ")", deserialize: (s4, l3) => new Headers(l3.deserialize(s4)) };
    sa = na;
    ia = {};
    oa = { tag: "seroval-plugins/web/ReadableStreamFactory", test: (s4) => s4 === ia, parse: { sync() {
    }, async: async () => await Promise.resolve(void 0), stream() {
    } }, serialize: (s4, l3) => l3.createFunction(["d"], "new ReadableStream({start:" + l3.createEffectfulFunction(["c"], "d.on({next:" + l3.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + l3.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + l3.createEffectfulFunction([], "c.close()") + "})") + "})"), deserialize: () => ia };
    aa = { tag: "seroval/plugins/web/ReadableStream", extends: [oa], test: (s4) => !(typeof ReadableStream > "u") && s4 instanceof ReadableStream, parse: { sync: (s4, l3) => ({ factory: l3.parse(ia), stream: l3.parse(A()) }), async: async (s4, l3) => ({ factory: await l3.parse(ia), stream: await l3.parse(fe$1(s4)) }), stream: (s4, l3) => ({ factory: l3.parse(ia), stream: l3.parse(fe$1(s4)) }) }, serialize: (s4, l3) => "(" + l3.serialize(s4.factory) + ")(" + l3.serialize(s4.stream) + ")", deserialize(s4, l3) {
      let h2 = l3.deserialize(s4.stream);
      return new ReadableStream({ start(s5) {
        h2.on({ next(l4) {
          s5.enqueue(l4);
        }, throw(l4) {
          s5.error(l4);
        }, return() {
          s5.close();
        } });
      } });
    } };
    ca = aa;
    la = { tag: "seroval-plugins/web/Request", extends: [ca, sa], test: (s4) => !(typeof Request > "u") && s4 instanceof Request, parse: { async: async (s4, l3) => ({ url: await l3.parse(s4.url), options: await l3.parse(pe$1(s4, s4.body ? await s4.clone().arrayBuffer() : null)) }), stream: (s4, l3) => ({ url: l3.parse(s4.url), options: l3.parse(pe$1(s4, s4.clone().body)) }) }, serialize: (s4, l3) => "new Request(" + l3.serialize(s4.url) + "," + l3.serialize(s4.options) + ")", deserialize: (s4, l3) => new Request(l3.deserialize(s4.url), l3.deserialize(s4.options)) };
    ua = la;
    fa = { tag: "seroval-plugins/web/Response", extends: [ca, sa], test: (s4) => !(typeof Response > "u") && s4 instanceof Response, parse: { async: async (s4, l3) => ({ body: await l3.parse(s4.body ? await s4.clone().arrayBuffer() : null), options: await l3.parse(ve(s4)) }), stream: (s4, l3) => ({ body: l3.parse(s4.clone().body), options: l3.parse(ve(s4)) }) }, serialize: (s4, l3) => "new Response(" + l3.serialize(s4.body) + "," + l3.serialize(s4.options) + ")", deserialize: (s4, l3) => new Response(l3.deserialize(s4.body), l3.deserialize(s4.options)) };
    da = fa;
    ha = { tag: "seroval-plugins/web/URLSearchParams", test: (s4) => !(typeof URLSearchParams > "u") && s4 instanceof URLSearchParams, parse: { sync: (s4, l3) => l3.parse(s4.toString()), async: async (s4, l3) => await l3.parse(s4.toString()), stream: (s4, l3) => l3.parse(s4.toString()) }, serialize: (s4, l3) => "new URLSearchParams(" + l3.serialize(s4) + ")", deserialize: (s4, l3) => new URLSearchParams(l3.deserialize(s4)) };
    pa = ha;
    ma = { tag: "seroval-plugins/web/URL", test: (s4) => !(typeof URL > "u") && s4 instanceof URL, parse: { sync: (s4, l3) => l3.parse(s4.href), async: async (s4, l3) => await l3.parse(s4.href), stream: (s4, l3) => l3.parse(s4.href) }, serialize: (s4, l3) => "new URL(" + l3.serialize(s4) + ")", deserialize: (s4, l3) => new URL(l3.deserialize(s4)) };
    ya = ma;
    ga = "Invariant Violation";
    ({ setPrototypeOf: va = function(s4, l3) {
      return s4.__proto__ = l3, s4;
    } } = Object);
    ba = class te extends Error {
      framesToPop = 1;
      name = ga;
      constructor(s4 = ga) {
        super("number" == typeof s4 ? `${ga}: ${s4} (see https://github.com/apollographql/invariant-packages)` : s4), va(this, te.prototype);
      }
    };
    wa = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
    xa = { preload() {
      Vi();
    } };
    Sa = [{ page: true, $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init__(), __exports)), import: () => Promise.resolve().then(() => (init__(), __exports)) }, path: "/*404", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/src/routes/[...404].tsx" }, { page: true, $component: { src: "src/routes/about.tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init_about(), about_exports)), import: () => Promise.resolve().then(() => (init_about(), about_exports)) }, path: "/about", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/src/routes/about.tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init_build(), build_exports)), import: () => Promise.resolve().then(() => (init_build(), build_exports)) }, $$route: { require: () => ({ route: xa }), src: "src/routes/index.tsx?pick=route" }, path: "/", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/src/routes/index.tsx" }, { page: true, $component: { src: "src/routes/login.tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init_login(), login_exports)), import: () => Promise.resolve().then(() => (init_login(), login_exports)) }, path: "/login", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/src/routes/login.tsx" }];
    Ea = function(s4) {
      function t(s5, l3, h2, y3) {
        const b2 = Object.values(s5).find((s6) => h2.startsWith(s6.id + "/"));
        return b2 ? (t(b2.children || (b2.children = []), l3, h2.slice(b2.id.length)), s5) : (s5.push({ ...l3, id: h2, path: h2.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "") }), s5);
      }
      return s4.sort((s5, l3) => s5.path.length - l3.path.length).reduce((s5, l3) => t(s5, l3, l3.path, l3.path), []);
    }(Sa.filter((s4) => s4.page));
    !function(s4 = {}) {
      const l3 = { options: s4, rootNode: Te$1(), staticRoutesMap: {} }, r3 = (l4) => s4.strictTrailingSlash ? l4 : l4.replace(/\/$/, "") || "/";
      if (s4.routes)
        for (const h2 in s4.routes)
          me(l3, r3(h2), s4.routes[h2]);
    }({ routes: Sa.reduce((s4, l3) => {
      if (!function(s5) {
        return s5.$GET || s5.$POST || s5.$PUT || s5.$PATCH || s5.$DELETE;
      }(l3))
        return s4;
      let h2 = l3.path.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "").replace(/\*([^/]*)/g, (s5, l4) => `**:${l4}`);
      if (/:[^/]*\?/g.test(h2))
        throw new Error(`Optional parameters are not supported in API routes: ${h2}`);
      if (s4[h2])
        throw new Error(`Duplicate API routes for "${h2}" found at "${s4[h2].route.path}" and "${l3.path}"`);
      return s4[h2] = { route: l3 }, s4;
    }, {}) });
    $a = { style: (s4) => ssrElement("style", s4.attrs, () => escape(s4.children)), link: (s4) => ssrElement("link", s4.attrs, void 0), script: (s4) => s4.attrs.src ? ssrElement("script", mergeProps(() => s4.attrs, { get id() {
      return s4.key;
    } }), () => ssr(" ")) : null, noscript: (s4) => ssrElement("noscript", s4.attrs, () => escape(s4.children)) };
    di = () => getRequestEvent().routes;
    Ia = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    Ra = Qt(async function(s4) {
      const l3 = An$1(s4), h2 = l3.request, y3 = h2.headers.get("X-Server-Id"), b2 = h2.headers.get("X-Server-Instance"), w4 = h2.headers.has("X-Single-Flight"), S2 = new URL(h2.url);
      let E2, $3;
      if (y3)
        (function(s5, l4) {
          if (!s5)
            throw new ba(l4);
        })("string" == typeof y3, "Invalid server function"), [E2, $3] = y3.split("#");
      else if (E2 = S2.searchParams.get("id"), $3 = S2.searchParams.get("name"), !E2 || !$3)
        throw new Error("Invalid request");
      const T2 = (await globalThis.MANIFEST["server-fns"].chunks[E2].import())[$3];
      let O2 = [];
      if (!b2 || "GET" === s4.method) {
        const s5 = S2.searchParams.get("args");
        if (s5) {
          const l4 = JSON.parse(s5);
          (l4.t ? he$1(l4, { plugins: [Vo, Zo, Yo, ra, sa, ca, ua, da, pa, ya] }) : l4).forEach((s6) => O2.push(s6));
        }
      }
      if ("POST" === s4.method) {
        const l4 = h2.headers.get("content-type"), y4 = s4.node.req, b3 = y4 instanceof ReadableStream, w5 = b3 && y4.locked, S3 = b3 ? y4 : y4.body;
        if (l4?.startsWith("multipart/form-data") || l4?.startsWith("application/x-www-form-urlencoded"))
          O2.push(await (w5 ? h2 : new Request(h2, { ...h2, body: S3 })).formData());
        else if (l4?.startsWith("application/json")) {
          const s5 = w5 ? h2 : new Request(h2, { ...h2, body: S3 });
          O2 = he$1(await s5.json(), { plugins: [Vo, Zo, Yo, ra, sa, ca, ua, da, pa, ya] });
        }
      }
      try {
        let y4 = await provideRequestEvent(l3, async () => (Xr.context = { event: l3 }, l3.locals.serverFunctionMeta = { id: E2 + "#" + $3 }, T2(...O2)));
        if (w4 && b2 && (y4 = await ze$1(l3, y4)), y4 instanceof Response) {
          if (y4.headers && y4.headers.has("X-Content-Raw"))
            return y4;
          b2 && (y4.headers && Tn$1(s4, y4.headers), y4.status && (y4.status < 300 || y4.status >= 400) && gi(s4, y4.status), y4.customBody ? y4 = await y4.customBody() : null == y4.body && (y4 = null));
        }
        return b2 ? (_i(s4, "content-type", "text/javascript"), ye(b2, y4)) : be(y4, h2, O2);
      } catch (y4) {
        if (y4 instanceof Response)
          w4 && b2 && (y4 = await ze$1(l3, y4)), y4.headers && Tn$1(s4, y4.headers), y4.status && (!b2 || y4.status < 300 || y4.status >= 400) && gi(s4, y4.status), y4.customBody ? y4 = y4.customBody() : null == y4.body && (y4 = null), _i(s4, "X-Error", "true");
        else if (b2) {
          const l4 = y4 instanceof Error ? y4.message : "string" == typeof y4 ? y4 : "true";
          _i(s4, "X-Error", l4.replace(/[\r\n]+/g, ""));
        } else
          y4 = be(y4, h2, O2, true);
        return b2 ? (_i(s4, "content-type", "text/javascript"), ye(b2, y4)) : y4;
      }
    });
    ka = Object.defineProperty;
    __publicField = (s4, l3, h2) => (((s5, l4, h3) => {
      l4 in s5 ? ka(s5, l4, { enumerable: true, configurable: true, writable: true, value: h3 }) : s5[l4] = h3;
    })(s4, l3 + "", h2), h2);
    Aa = /^(?:[a-z0-9]+:)?\/\//i;
    za = /^\/+|(\/)\/+$/g;
    Ca = "http://sr";
    Pa = createContext();
    Ta = createContext();
    _e = () => function(s4, l3) {
      if (null == s4)
        throw new Error(l3);
      return s4;
    }(useContext(Pa), "<A> and 'use' router primitives can be only used inside a Route.");
    Et$1 = () => _e().navigatorFactory();
    Oa = false;
    Ba = "Location";
    Fa = /* @__PURE__ */ new Map();
    N.set = (s4, l3) => {
      const h2 = Z$1(), y3 = Date.now();
      let b2 = h2.get(s4);
      b2 ? (b2[0] = y3, b2[1] = l3, b2[2] = "preload") : (h2.set(s4, b2 = [y3, l3, , createSignal(y3)]), b2[3].count = 0);
    }, N.clear = () => Z$1().clear();
    Ma = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {};
    Na = "__unctx__";
    La = Ma[Na] || (Ma[Na] = function(s4 = {}) {
      const l3 = {};
      return { get: (h2, y3 = {}) => (l3[h2] || (l3[h2] = function(s5 = {}) {
        let l4, h3 = false;
        const r3 = (s6) => {
          if (l4 && l4 !== s6)
            throw new Error("Context conflict");
        };
        let y4;
        if (s5.asyncContext) {
          const l5 = s5.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          l5 ? y4 = new l5() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const o = () => {
          if (y4 && void 0 === l4) {
            const s6 = y4.getStore();
            if (void 0 !== s6)
              return s6;
          }
          return l4;
        };
        return { use: () => {
          const s6 = o();
          if (void 0 === s6)
            throw new Error("Context is not available");
          return s6;
        }, tryUse: () => o(), set: (s6, y5) => {
          y5 || r3(s6), l4 = s6, h3 = true;
        }, unset: () => {
          l4 = void 0, h3 = false;
        }, call: (s6, b2) => {
          r3(s6), l4 = s6;
          try {
            return y4 ? y4.run(s6, b2) : b2();
          } finally {
            h3 || (l4 = void 0);
          }
        }, async callAsync(s6, b2) {
          l4 = s6;
          const f2 = () => {
            l4 = s6;
          }, d3 = () => l4 === s6 ? f2 : void 0;
          Ha.add(d3);
          try {
            const w4 = y4 ? y4.run(s6, b2) : b2();
            return h3 || (l4 = void 0), await w4;
          } finally {
            Ha.delete(d3);
          }
        } };
      }({ ...s4, ...y3 })), l3[h2], l3[h2]) };
    }());
    He$1 = (s4, l3 = {}) => La.get(s4, l3);
    Ua = "__unctx_async_handlers__";
    Ha = Ma[Ua] || (Ma[Ua] = /* @__PURE__ */ new Set());
    Da = Symbol("$HTTPEvent");
    qa = R(getRequestURL);
    Wa = R(getRequestIP);
    Va = R(setResponseStatus);
    Ka = R(getResponseStatus);
    Za = R(getResponseStatusText);
    Ga = R(getResponseHeaders);
    Ya = R(getResponseHeader);
    Xa = R(setResponseHeader);
    Ja = R(appendResponseHeader);
    Qa = R(sendRedirect);
    ec = R(getCookie);
    tc = R(setCookie);
    rc = R(Wt);
    nc = R(getRequestWebStream);
    sc = R(removeResponseHeader);
    ic = R(function(s4) {
      return null != s4.web || (s4.web = { request: Dt(s4), url: qa(s4) }), s4.web.request;
    });
    oc = Symbol("fetchEvent");
    sn = class {
      constructor(s4) {
        __publicField(this, "event"), this.event = s4;
      }
      get(s4) {
        const l3 = Ya(this.event, s4);
        return Array.isArray(l3) ? l3.join(", ") : l3 || null;
      }
      has(s4) {
        return void 0 !== this.get(s4);
      }
      set(s4, l3) {
        return Xa(this.event, s4, l3);
      }
      delete(s4) {
        return sc(this.event, s4);
      }
      append(s4, l3) {
        Ja(this.event, s4, l3);
      }
      getSetCookie() {
        const s4 = Ya(this.event, "Set-Cookie");
        return Array.isArray(s4) ? s4 : [s4];
      }
      forEach(s4) {
        return Object.entries(Ga(this.event)).forEach(([l3, h2]) => s4(Array.isArray(h2) ? h2.join(", ") : h2, l3, this));
      }
      entries() {
        return Object.entries(Ga(this.event)).map(([s4, l3]) => [s4, Array.isArray(l3) ? l3.join(", ") : l3])[Symbol.iterator]();
      }
      keys() {
        return Object.keys(Ga(this.event))[Symbol.iterator]();
      }
      values() {
        return Object.values(Ga(this.event)).map((s4) => Array.isArray(s4) ? s4.join(", ") : s4)[Symbol.iterator]();
      }
      [Symbol.iterator]() {
        return this.entries()[Symbol.iterator]();
      }
    };
    ac = createStorage({ driver: at$2({ base: "./.data" }) });
    ac.setItem("users:data", [{ id: 0, username: "kody", password: "twixrox" }]), ac.setItem("users:counter", 1);
    cc = { user: { async create({ data: s4 }) {
      const [{ value: l3 }, { value: h2 }] = await ac.getItems(["users:data", "users:counter"]), y3 = { ...s4, id: h2 };
      return await Promise.all([ac.setItem("users:data", [...l3, y3]), ac.setItem("users:counter", h2 + 1)]), y3;
    }, async findUnique({ where: { username: s4, id: l3 } }) {
      const h2 = await ac.getItem("users:data");
      return void 0 !== l3 ? h2.find((s5) => s5.id === l3) : h2.find((l4) => l4.username === s4);
    } } };
    lc = Symbol("$HTTPEvent");
    uc = function(s4) {
      return function(...l3) {
        var h2;
        let y3 = l3[0];
        if (function(s5) {
          return "object" == typeof s5 && (s5 instanceof H3Event || (null == s5 ? void 0 : s5[lc]) instanceof H3Event || true === (null == s5 ? void 0 : s5.__is_event__));
        }(y3))
          l3[0] = y3 instanceof H3Event || y3.__is_event__ ? y3 : y3[lc];
        else {
          if (!(null == (h2 = globalThis.app.config.server.experimental) ? void 0 : h2.asyncContext))
            throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
          if (y3 = an(), !y3)
            throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
          l3.unshift(y3);
        }
        return s4(...l3);
      };
    }(useSession);
    fc = N(te2(async function() {
      try {
        const s4 = (await ne()).data.userId;
        if (void 0 === s4)
          throw new Error("User not found");
        const l3 = await cc.user.findUnique({ where: { id: s4 } });
        if (!l3)
          throw new Error("User not found");
        return { id: l3.id, username: l3.username };
      } catch {
        await Ie(), ee("/login");
      }
    }, "c_7576", "$$function0"), "user");
    dc = Ae(te2(async function(s4) {
      const l3 = String(s4.get("username")), h2 = String(s4.get("password")), y3 = String(s4.get("loginType"));
      let b2 = function(s5) {
        if ("string" != typeof s5 || s5.length < 3)
          return "Usernames must be at least 3 characters long";
      }(l3) || function(s5) {
        if ("string" != typeof s5 || s5.length < 6)
          return "Passwords must be at least 6 characters long";
      }(h2);
      if (b2)
        return new Error(b2);
      try {
        const s5 = await ("login" !== y3 ? async function(s6, l4) {
          if (await cc.user.findUnique({ where: { username: s6 } }))
            throw new Error("User already exists");
          return cc.user.create({ data: { username: s6, password: l4 } });
        }(l3, h2) : async function(s6, l4) {
          const h3 = await cc.user.findUnique({ where: { username: s6 } });
          if (!h3 || l4 !== h3.password)
            throw new Error("Invalid login");
          return h3;
        }(l3, h2));
        await (await ne()).update((l4) => {
          l4.userId = s5.id;
        });
      } catch (s5) {
        return s5;
      }
      return ee("/");
    }, "c_7576", "$$function1"));
    hc = Ae(te2(async function() {
      return await Ie(), ee("/login");
    }, "c_7576", "$$function2"));
    J = (s4) => (l3) => {
      const { base: h2 } = l3, y3 = children(() => l3.children), b2 = createMemo(() => Pt(y3(), l3.base || ""));
      let w4;
      const S2 = Tn(s4, b2, () => w4, { base: h2, singleFlight: l3.singleFlight, transformUrl: l3.transformUrl });
      return s4.create && s4.create(S2), createComponent(Pa.Provider, { value: S2, get children() {
        return createComponent(Fe, { routerState: S2, get root() {
          return l3.root;
        }, get preload() {
          return l3.rootPreload || l3.rootLoad;
        }, get children() {
          return [(w4 = getOwner()) && null, createComponent(qe, { routerState: S2, get branches() {
            return b2();
          } })];
        } });
      } });
    };
    H = (s4) => () => createComponent(Show, { get when() {
      return s4();
    }, keyed: true, children: (s5) => createComponent(Ta.Provider, { value: s5, get children() {
      return s5.outlet();
    } }) });
    pc = { style: (s4) => ssrElement("style", s4.attrs, () => escape(s4.children)), link: (s4) => ssrElement("link", s4.attrs, void 0), script: (s4) => s4.attrs.src ? ssrElement("script", mergeProps(() => s4.attrs, { get id() {
      return s4.key;
    } }), () => ssr(" ")) : null, noscript: (s4) => ssrElement("noscript", s4.attrs, () => escape(s4.children)) };
    mc = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
    yc = { preload() {
      fc();
    } };
    gc = [{ page: true, $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init__2(), __exports2)), import: () => Promise.resolve().then(() => (init__2(), __exports2)) }, path: "/*404", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/src/routes/[...404].tsx" }, { page: true, $component: { src: "src/routes/about.tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init_about2(), about2_exports)), import: () => Promise.resolve().then(() => (init_about2(), about2_exports)) }, path: "/about", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/src/routes/about.tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init_index2(), index2_exports)), import: () => Promise.resolve().then(() => (init_index2(), index2_exports)) }, $$route: { require: () => ({ route: yc }), src: "src/routes/index.tsx?pick=route" }, path: "/", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/src/routes/index.tsx" }, { page: true, $component: { src: "src/routes/login.tsx?pick=default&pick=$css", build: () => Promise.resolve().then(() => (init_login2(), login2_exports)), import: () => Promise.resolve().then(() => (init_login2(), login2_exports)) }, path: "/login", filePath: "/Users/k.orban/Developer/GitHub/solid-start/examples/with-auth/src/routes/login.tsx" }];
    vc = function(s4) {
      function t(s5, l3, h2, y3) {
        const b2 = Object.values(s5).find((s6) => h2.startsWith(s6.id + "/"));
        return b2 ? (t(b2.children || (b2.children = []), l3, h2.slice(b2.id.length)), s5) : (s5.push({ ...l3, id: h2, path: h2.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "") }), s5);
      }
      return s4.sort((s5, l3) => s5.path.length - l3.path.length).reduce((s5, l3) => t(s5, l3, l3.path, l3.path), []);
    }(gc.filter((s4) => s4.page));
    bc = function(s4 = {}) {
      const l3 = { options: s4, rootNode: V(), staticRoutesMap: {} }, r3 = (l4) => s4.strictTrailingSlash ? l4 : l4.replace(/\/$/, "") || "/";
      if (s4.routes)
        for (const h2 in s4.routes)
          _(l3, r3(h2), s4.routes[h2]);
      return { ctx: l3, lookup: (s5) => function(s6, l4) {
        const h2 = s6.staticRoutesMap[l4];
        if (h2)
          return h2.data;
        const y3 = l4.split("/"), b2 = {};
        let w4 = false, S2 = null, E2 = s6.rootNode, $3 = null;
        for (let s7 = 0; s7 < y3.length; s7++) {
          const l5 = y3[s7];
          null !== E2.wildcardChildNode && (S2 = E2.wildcardChildNode, $3 = y3.slice(s7).join("/"));
          const h3 = E2.children.get(l5);
          if (void 0 === h3) {
            if (E2 && E2.placeholderChildren.length > 1) {
              const l6 = y3.length - s7;
              E2 = E2.placeholderChildren.find((s8) => s8.maxDepth === l6) || null;
            } else
              E2 = E2.placeholderChildren[0] || null;
            if (!E2)
              break;
            E2.paramName && (b2[E2.paramName] = l5), w4 = true;
          } else
            E2 = h3;
        }
        return (null === E2 || null === E2.data) && null !== S2 && (E2 = S2, b2[E2.paramName || "_"] = $3, w4 = true), E2 ? w4 ? { ...E2.data, params: w4 ? b2 : void 0 } : E2.data : null;
      }(l3, r3(s5)), insert: (s5, h2) => _(l3, r3(s5), h2), remove: (s5) => function(s6, l4) {
        let h2 = false;
        const y3 = l4.split("/");
        let b2 = s6.rootNode;
        for (const s7 of y3)
          if (b2 = b2.children.get(s7), !b2)
            return h2;
        if (b2.data) {
          const s7 = y3.at(-1) || "";
          b2.data = null, 0 === Object.keys(b2.children).length && b2.parent && (b2.parent.children.delete(s7), b2.parent.wildcardChildNode = null, b2.parent.placeholderChildren = []), h2 = true;
        }
        return h2;
      }(l3, r3(s5)) };
    }({ routes: gc.reduce((s4, l3) => {
      if (!function(s5) {
        return s5.$GET || s5.$POST || s5.$PUT || s5.$PATCH || s5.$DELETE;
      }(l3))
        return s4;
      let h2 = l3.path.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "").replace(/\*([^/]*)/g, (s5, l4) => `**:${l4}`);
      if (/:[^/]*\?/g.test(h2))
        throw new Error(`Optional parameters are not supported in API routes: ${h2}`);
      if (s4[h2])
        throw new Error(`Duplicate API routes for "${h2}" found at "${s4[h2].route.path}" and "${l3.path}"`);
      return s4[h2] = { route: l3 }, s4;
    }, {}) });
    ut = () => getRequestEvent().routes;
    wc = ["<a", ' href="/">Index</a>'];
    xc = ["<a", ' href="/about">About</a>'];
    X = (s4) => {
      const l3 = getRequestEvent();
      return l3.response.status = s4.code, l3.response.statusText = s4.text, function(s5) {
        Gr && (Gr.cleanups ? Gr.cleanups.push(s5) : Gr.cleanups = [s5]);
      }(() => !l3.nativeEvent.handled && !l3.complete && (l3.response.status = 200)), null;
    };
    Sc = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"];
    Ec = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];
    gt = (s4) => createComponent(ErrorBoundary, { fallback: (s5) => (console.error(s5), [ssr(Sc, ssrHydrationKey(), escape("500 | Internal Server Error")), createComponent(X, { code: 500 })]), get children() {
      return s4.children;
    } });
    wt = (s4) => {
      let l3 = false;
      const h2 = catchError(() => s4.children, (s5) => {
        console.error(s5), l3 = !!s5;
      });
      return l3 ? [ssr(Ec, ssrHydrationKey()), createComponent(X, { code: 500 })] : h2;
    };
    $c = ["<script", ">", "<\/script>"];
    Ic = ["<script", ' type="module"', " async", "><\/script>"];
    _c = ["<script", ' type="module" async', "><\/script>"];
    Rc = ssr("<!DOCTYPE html>");
    kc = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    Ac = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"];
    zc = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
    Cc = function(s4, l3) {
      return Ct(s4, $t, l3);
    }(() => createComponent(Et2, { document: ({ assets: s4, children: l3, scripts: h2 }) => ssr(zc, ssrHydrationKey(), createComponent(NoHydration, { get children() {
      return ssr(Ac, escape(s4));
    } }), escape(l3), escape(h2)) }));
    Pc = [{ route: "/_server", handler: Ra, lazy: false, middleware: true, method: void 0 }, { route: "/", handler: Cc, lazy: false, middleware: true, method: void 0 }];
    Tc = function() {
      const s4 = useRuntimeConfig(), l3 = new Hookable(), captureError = (s5, h3 = {}) => {
        const y4 = l3.callHookParallel("error", s5, h3).catch((s6) => {
          console.error("Error while capturing another error", s6);
        });
        if (h3.event && isEvent(h3.event)) {
          const l4 = h3.event.context.nitro?.errors;
          l4 && l4.push({ error: s5, context: h3 }), h3.event.waitUntil && h3.event.waitUntil(y4);
        }
      }, h2 = createApp({ debug: destr(false), onError: (s5, l4) => (captureError(s5, { event: l4, tags: ["request"] }), errorHandler(s5, l4)), onRequest: async (s5) => {
        await Tc.hooks.callHook("request", s5).catch((l4) => {
          captureError(l4, { event: s5, tags: ["request"] });
        });
      }, onBeforeResponse: async (s5, l4) => {
        await Tc.hooks.callHook("beforeResponse", s5, l4).catch((l5) => {
          captureError(l5, { event: s5, tags: ["request", "response"] });
        });
      }, onAfterResponse: async (s5, l4) => {
        await Tc.hooks.callHook("afterResponse", s5, l4).catch((l5) => {
          captureError(l5, { event: s5, tags: ["request", "response"] });
        });
      } }), y3 = function(s5 = {}) {
        const l4 = createRouter$1({}), h3 = {};
        let y4;
        const b3 = {}, addRoute = (s6, y5, w6) => {
          let S3 = h3[s6];
          if (S3 || (h3[s6] = S3 = { path: s6, handlers: {} }, l4.insert(s6, S3)), Array.isArray(w6))
            for (const l5 of w6)
              addRoute(s6, y5, l5);
          else
            S3.handlers[w6] = toEventHandler(y5, 0, s6);
          return b3;
        };
        b3.use = b3.add = (s6, l5, h4) => addRoute(s6, l5, h4 || "all");
        for (const s6 of er)
          b3[s6] = (l5, h4) => b3.add(l5, h4, s6);
        const matchHandler = (s6 = "/", h4 = "get") => {
          const b4 = s6.indexOf("?");
          -1 !== b4 && (s6 = s6.slice(0, Math.max(0, b4)));
          const w6 = l4.lookup(s6);
          if (!w6 || !w6.handlers)
            return { error: createError$1({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${s6 || "/"}.` }) };
          let S3 = w6.handlers[h4] || w6.handlers.all;
          if (!S3) {
            y4 || (y4 = toRouteMatcher(l4));
            const b5 = y4.matchAll(s6).reverse();
            for (const s7 of b5) {
              if (s7.handlers[h4]) {
                S3 = s7.handlers[h4], w6.handlers[h4] = w6.handlers[h4] || S3;
                break;
              }
              if (s7.handlers.all) {
                S3 = s7.handlers.all, w6.handlers.all = w6.handlers.all || S3;
                break;
              }
            }
          }
          return S3 ? { matched: w6, handler: S3 } : { error: createError$1({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${h4} is not allowed on this route.` }) };
        }, w5 = s5.preemptive || s5.preemtive;
        return b3.handler = Qt((s6) => {
          const l5 = matchHandler(s6.path, s6.method.toLowerCase());
          if ("error" in l5) {
            if (w5)
              throw l5.error;
            return;
          }
          s6.context.matchedRoute = l5.matched;
          const h4 = l5.matched.params || {};
          return s6.context.params = h4, Promise.resolve(l5.handler(s6)).then((s7) => void 0 === s7 && w5 ? null : s7);
        }), b3.handler.__resolve__ = async (s6) => {
          s6 = function(s7 = "") {
            return function(s8 = "") {
              return s8.startsWith("/");
            }(s7) ? s7 : "/" + s7;
          }(s6);
          const l5 = matchHandler(s6);
          if ("error" in l5)
            return;
          let h4 = { route: l5.matched.path, handler: l5.handler };
          if (l5.handler.__resolve__) {
            const y5 = await l5.handler.__resolve__(s6);
            if (!y5)
              return;
            h4 = { ...h4, ...y5 };
          }
          return h4;
        }, b3;
      }({ preemptive: true }), b2 = (w4 = toNodeListener(h2), function(s5) {
        const l4 = new IncomingMessage(), h3 = new ServerResponse(l4);
        if (l4.url = s5.url || "/", l4.method = s5.method || "GET", l4.headers = {}, s5.headers) {
          const h4 = "function" == typeof s5.headers.entries ? s5.headers.entries() : Object.entries(s5.headers);
          for (const [s6, y4] of h4)
            y4 && (l4.headers[s6.toLowerCase()] = y4);
        }
        return l4.headers.host = l4.headers.host || s5.host || "localhost", l4.connection.encrypted = l4.connection.encrypted || "https" === s5.protocol, l4.body = s5.body || null, l4.__unenv__ = s5.context, w4(l4, h3).then(() => {
          let s6 = h3._data;
          (ur.has(h3.statusCode) || "HEAD" === l4.method.toUpperCase()) && (s6 = null, delete h3._headers["content-length"]);
          const y4 = { body: s6, headers: h3._headers, status: h3.statusCode, statusText: h3.statusMessage };
          return l4.destroy(), h3.destroy(), y4;
        });
      });
      var w4;
      const S2 = function(s5, l4 = global.fetch) {
        return async function(h3, y4) {
          const b3 = h3.toString();
          if (!b3.startsWith("/"))
            return l4(b3, y4);
          try {
            const l5 = await s5({ url: b3, ...y4 });
            return new Response(l5.body, { status: l5.status, statusText: l5.statusText, headers: Object.fromEntries(Object.entries(l5.headers).map(([s6, l6]) => [s6, Array.isArray(l6) ? l6.join(",") : String(l6) || ""])) });
          } catch (s6) {
            return new Response(s6.toString(), { status: Number.parseInt(s6.statusCode || s6.code) || 500, statusText: s6.statusText });
          }
        };
      }(b2, globalThis.fetch), localFetch = (s5, l4) => S2(s5, l4).then((s6) => function(s7) {
        if (!s7.headers.has("set-cookie"))
          return s7;
        return new Response(s7.body, { status: s7.status, statusText: s7.statusText, headers: normalizeCookieHeaders(s7.headers) });
      }(s6)), E2 = createFetch$1({ fetch: localFetch, Headers: cr, defaults: { baseURL: s4.app.baseURL } });
      globalThis.$fetch = E2, h2.use(createRouteRulesHandler({ localFetch })), h2.use(Qt((s5) => {
        s5.context.nitro = s5.context.nitro || { errors: [] };
        const l4 = s5.node.req?.__unenv__;
        l4 && Object.assign(s5.context, l4), s5.fetch = (l5, h3) => fetchWithEvent(s5, l5, h3, { fetch: localFetch }), s5.$fetch = (l5, h3) => fetchWithEvent(s5, l5, h3, { fetch: E2 }), s5.waitUntil = (h3) => {
          s5.context.nitro._waitUntilPromises || (s5.context.nitro._waitUntilPromises = []), s5.context.nitro._waitUntilPromises.push(h3), l4?.waitUntil && l4.waitUntil(h3);
        }, s5.captureError = (l5, h3) => {
          captureError(l5, { event: s5, ...h3 });
        };
      }));
      for (const l4 of Pc) {
        let b3 = l4.lazy ? lazyEventHandler(l4.handler) : l4.handler;
        if (l4.middleware || !l4.route) {
          const y4 = (s4.app.baseURL + (l4.route || "/")).replace(/\/+/g, "/");
          h2.use(y4, b3);
        } else {
          const s5 = getRouteRulesForPath(l4.route.replace(/:\w+|\*\*/g, "_"));
          s5.cache && (b3 = cachedEventHandler(b3, { group: "nitro/routes", ...s5.cache })), y3.use(l4.route, b3, l4.method);
        }
      }
      h2.use(s4.app.baseURL, y3.handler);
      {
        const s5 = h2.handler;
        h2.handler = (l4) => {
          const h3 = { event: l4 };
          return jr.callAsync(h3, () => s5(l4));
        };
      }
      const $3 = { hooks: l3, h3App: h2, router: y3, localCall: b2, localFetch, captureError };
      for (const s5 of Xi)
        try {
          s5($3);
        } catch (s6) {
          throw captureError(s6, { tags: ["plugin"] }), s6;
        }
      return $3;
    }();
    useNitroApp = () => Tc;
    jc = /post|put|patch/i;
    Oc = { "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"298-hdW7/pL89QptiszdYCHH67XxLxs"', mtime: "2024-09-18T11:43:15.698Z", size: 664, path: "../favicon.ico" }, "/_build/server-functions-manifest.json": { type: "application/json", etag: '"6a-HZchbNRCRYLHbewTzWoEo3XmN5g"', mtime: "2024-09-18T11:43:15.701Z", size: 106, path: "../_build/server-functions-manifest.json" }, "/assets/index-CW85aRig.js": { type: "text/javascript; charset=utf-8", etag: '"4d71-D9yJpqbmYvNUnZwSyfg7Y0U5iUE"', mtime: "2024-09-18T11:43:15.699Z", size: 19825, path: "../assets/index-CW85aRig.js" }, "/assets/index-CW85aRig.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"1c27-A1Bwc7wfeN6NIzrgvCDhi32l0g0"', mtime: "2024-09-18T11:43:15.729Z", size: 7207, path: "../assets/index-CW85aRig.js.br" }, "/assets/index-CW85aRig.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"1f2f-43VZJVBCpek49Vtvd7Bfpe3rpGk"', mtime: "2024-09-18T11:43:15.728Z", size: 7983, path: "../assets/index-CW85aRig.js.gz" }, "/assets/ssr-DK2sKxCa.css": { type: "text/css; charset=utf-8", etag: '"1b6f-DQrXd8P80kITEVmCQLBQn1hMHZw"', mtime: "2024-09-18T11:43:15.699Z", size: 7023, path: "../assets/ssr-DK2sKxCa.css" }, "/assets/ssr-DK2sKxCa.css.br": { type: "text/css; charset=utf-8", encoding: "br", etag: '"6a7-Z+fFtmwrGj9ypGkDryJAWFuj3Uk"', mtime: "2024-09-18T11:43:15.728Z", size: 1703, path: "../assets/ssr-DK2sKxCa.css.br" }, "/assets/ssr-DK2sKxCa.css.gz": { type: "text/css; charset=utf-8", encoding: "gzip", etag: '"7dc-cpsdsSd1quXdut5RLAyYdfAX4AA"', mtime: "2024-09-18T11:43:15.728Z", size: 2012, path: "../assets/ssr-DK2sKxCa.css.gz" }, "/_build/.vite/manifest.json": { type: "application/json", etag: '"789-OqHqZVikqJUqdp3pY8n/6C4nXDY"', mtime: "2024-09-18T11:43:15.701Z", size: 1929, path: "../_build/.vite/manifest.json" }, "/_build/.vite/manifest.json.br": { type: "application/json", encoding: "br", etag: '"165-FDyfy9lH+whpvYs61ZRUGDcG3dU"', mtime: "2024-09-18T11:43:15.728Z", size: 357, path: "../_build/.vite/manifest.json.br" }, "/_build/.vite/manifest.json.gz": { type: "application/json", encoding: "gzip", etag: '"19b-0HbwJdCoqkfZdJZGqDEKJ/OOmkI"', mtime: "2024-09-18T11:43:15.728Z", size: 411, path: "../_build/.vite/manifest.json.gz" }, "/_build/assets/_...404_-BhV6neIA.js": { type: "text/javascript; charset=utf-8", etag: '"b7-YUNjad4bp0f5rhwyHRiOXxFrJ54"', mtime: "2024-09-18T11:43:15.701Z", size: 183, path: "../_build/assets/_...404_-BhV6neIA.js" }, "/_build/assets/about-Bz-YQ_D-.js": { type: "text/javascript; charset=utf-8", etag: '"7c-p2MugVrHPlpquTcSS/YZOEO8uLk"', mtime: "2024-09-18T11:43:15.701Z", size: 124, path: "../_build/assets/about-Bz-YQ_D-.js" }, "/_build/assets/client-CtjwUMax.js": { type: "text/javascript; charset=utf-8", etag: '"3d6a-cOZxhgVw6bknQkIHuf27CB2T2/0"', mtime: "2024-09-18T11:43:15.701Z", size: 15722, path: "../_build/assets/client-CtjwUMax.js" }, "/_build/assets/client-CtjwUMax.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"1593-EXyBsT1QztSH+nh0x4HRF4e80JA"', mtime: "2024-09-18T11:43:15.729Z", size: 5523, path: "../_build/assets/client-CtjwUMax.js.br" }, "/_build/assets/client-CtjwUMax.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"181e-adBH9vEfIEluPPh6peOj6LRmcCY"', mtime: "2024-09-18T11:43:15.729Z", size: 6174, path: "../_build/assets/client-CtjwUMax.js.gz" }, "/_build/assets/client-DK2sKxCa.css": { type: "text/css; charset=utf-8", etag: '"1b6f-DQrXd8P80kITEVmCQLBQn1hMHZw"', mtime: "2024-09-18T11:43:15.701Z", size: 7023, path: "../_build/assets/client-DK2sKxCa.css" }, "/_build/assets/client-DK2sKxCa.css.br": { type: "text/css; charset=utf-8", encoding: "br", etag: '"6a7-Z+fFtmwrGj9ypGkDryJAWFuj3Uk"', mtime: "2024-09-18T11:43:15.729Z", size: 1703, path: "../_build/assets/client-DK2sKxCa.css.br" }, "/_build/assets/client-DK2sKxCa.css.gz": { type: "text/css; charset=utf-8", encoding: "gzip", etag: '"7dc-cpsdsSd1quXdut5RLAyYdfAX4AA"', mtime: "2024-09-18T11:43:15.728Z", size: 2012, path: "../_build/assets/client-DK2sKxCa.css.gz" }, "/_build/assets/index-76sbc7Fz.js": { type: "text/javascript; charset=utf-8", etag: '"444-JzPTOG6/Lyaq9WkQPozwHgXO3xI"', mtime: "2024-09-18T11:43:15.701Z", size: 1092, path: "../_build/assets/index-76sbc7Fz.js" }, "/_build/assets/index-76sbc7Fz.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"203-f5AMyUqt1kYHYfiRiKLIzmpmXBY"', mtime: "2024-09-18T11:43:15.728Z", size: 515, path: "../_build/assets/index-76sbc7Fz.js.br" }, "/_build/assets/index-76sbc7Fz.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"255-InbtQvlKKEkDMclw0bcVs69pFDA"', mtime: "2024-09-18T11:43:15.729Z", size: 597, path: "../_build/assets/index-76sbc7Fz.js.gz" }, "/_build/assets/index-Dg2R-_Vj.js": { type: "text/javascript; charset=utf-8", etag: '"87ad-LdiLFCnhMpW9c5Iay5Ds2iDlMXE"', mtime: "2024-09-18T11:43:15.701Z", size: 34733, path: "../_build/assets/index-Dg2R-_Vj.js" }, "/_build/assets/index-Dg2R-_Vj.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"2736-PJYRvFFiquimzdb8i8rHnqJNbMg"', mtime: "2024-09-18T11:43:15.749Z", size: 10038, path: "../_build/assets/index-Dg2R-_Vj.js.br" }, "/_build/assets/index-Dg2R-_Vj.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"2b70-K4eUiwUBwAXLn51HL7cHejysG1s"', mtime: "2024-09-18T11:43:15.729Z", size: 11120, path: "../_build/assets/index-Dg2R-_Vj.js.gz" }, "/_build/assets/login-BnuTWnH4.js": { type: "text/javascript; charset=utf-8", etag: '"4ab-7psZkf1sU6ivXI91mc/7S2Nu0uI"', mtime: "2024-09-18T11:43:15.701Z", size: 1195, path: "../_build/assets/login-BnuTWnH4.js" }, "/_build/assets/login-BnuTWnH4.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"207-jtMaGROOcBFyx1by9N8DBjjlOno"', mtime: "2024-09-18T11:43:15.729Z", size: 519, path: "../_build/assets/login-BnuTWnH4.js.br" }, "/_build/assets/login-BnuTWnH4.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"277-2FAKh/Yfd5BTweelMeSdjhZZBtY"', mtime: "2024-09-18T11:43:15.729Z", size: 631, path: "../_build/assets/login-BnuTWnH4.js.gz" }, "/_build/assets/web-C6mMHEeS.js": { type: "text/javascript; charset=utf-8", etag: '"55b2-rzcpT7oH/48qIpGgCu/9SW+2o4A"', mtime: "2024-09-18T11:43:15.701Z", size: 21938, path: "../_build/assets/web-C6mMHEeS.js" }, "/_build/assets/web-C6mMHEeS.js.br": { type: "text/javascript; charset=utf-8", encoding: "br", etag: '"1e3c-lVlm7UvIftoAp/GhuI+s78IM3NA"', mtime: "2024-09-18T11:43:15.740Z", size: 7740, path: "../_build/assets/web-C6mMHEeS.js.br" }, "/_build/assets/web-C6mMHEeS.js.gz": { type: "text/javascript; charset=utf-8", encoding: "gzip", etag: '"2133-2rl329mTIyAs45b4udrye8+rK7k"', mtime: "2024-09-18T11:43:15.729Z", size: 8499, path: "../_build/assets/web-C6mMHEeS.js.gz" }, "/_server/assets/app-DK2sKxCa.css": { type: "text/css; charset=utf-8", etag: '"1b6f-DQrXd8P80kITEVmCQLBQn1hMHZw"', mtime: "2024-09-18T11:43:15.702Z", size: 7023, path: "../_server/assets/app-DK2sKxCa.css" }, "/_server/assets/app-DK2sKxCa.css.br": { type: "text/css; charset=utf-8", encoding: "br", etag: '"6a7-Z+fFtmwrGj9ypGkDryJAWFuj3Uk"', mtime: "2024-09-18T11:43:15.729Z", size: 1703, path: "../_server/assets/app-DK2sKxCa.css.br" }, "/_server/assets/app-DK2sKxCa.css.gz": { type: "text/css; charset=utf-8", encoding: "gzip", etag: '"7dc-cpsdsSd1quXdut5RLAyYdfAX4AA"', mtime: "2024-09-18T11:43:15.729Z", size: 2012, path: "../_server/assets/app-DK2sKxCa.css.gz" } };
    Bc = {};
    Fc = { async fetch(s4, l3, h2) {
      const y3 = new URL(s4.url);
      if (l3.ASSETS && function(s5 = "") {
        if (Oc[s5])
          return true;
        for (const l4 in Bc)
          if (s5.startsWith(l4))
            return true;
        return false;
      }(y3.pathname))
        return l3.ASSETS.fetch(s4);
      let b2;
      return function(s5) {
        return jc.test(s5.method);
      }(s4) && (b2 = B.from(await s4.arrayBuffer())), globalThis.__env__ = l3, Tc.localFetch(y3.pathname + y3.search, { context: { cf: s4.cf, waitUntil: (s5) => h2.waitUntil(s5), cloudflare: { request: s4, env: l3, context: h2 } }, host: y3.hostname, protocol: y3.protocol, method: s4.method, headers: s4.headers, body: b2 });
    }, scheduled(s4, l3, h2) {
    } };
  }
});

// .wrangler/tmp/bundle-bZQs3V/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-bZQs3V/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-7iUYXe/i1zhrisydvk.js
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/pages-7iUYXe/bundledWorker-0.9456143383571711.mjs
init_checked_fetch();
init_modules_watch_stub();
init_runtime();
import "node:async_hooks";
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };

// ../../node_modules/.pnpm/wrangler@3.78.4/node_modules/wrangler/templates/pages-dev-util.ts
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

// .wrangler/tmp/pages-7iUYXe/i1zhrisydvk.js
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
        if (Fc.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return Fc.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// ../../node_modules/.pnpm/wrangler@3.78.4/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
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

// ../../node_modules/.pnpm/wrangler@3.78.4/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
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

// .wrangler/tmp/bundle-bZQs3V/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_dev_pipeline_default;

// ../../node_modules/.pnpm/wrangler@3.78.4/node_modules/wrangler/templates/middleware/common.ts
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

// .wrangler/tmp/bundle-bZQs3V/middleware-loader.entry.ts
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
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
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
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
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
//# sourceMappingURL=i1zhrisydvk.js.map
