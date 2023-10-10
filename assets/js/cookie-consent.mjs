(function(){"use strict";try{if(typeof document<"u"){var c=document.createElement("style");c.appendChild(document.createTextNode('.cc__main__content.svelte-1yokycz.svelte-1yokycz{padding:2em 0}.cc__category.svelte-1yokycz+.cc__category.svelte-1yokycz{margin-top:1em;padding-top:1em;border-top:1px solid var(--cc-secondary-color)}.cc__policy.svelte-1yokycz.svelte-1yokycz{font-size:.8em;padding-top:.8em;display:flex;align-items:flex-start;justify-content:flex-start}.cc__policy__switch.svelte-1yokycz.svelte-1yokycz{flex:0 0 4em;padding-top:.2em;display:flex}.cc__policy__content.svelte-1yokycz.svelte-1yokycz{flex:1}input[type=checkbox].cc__policy__switchinput.svelte-1yokycz.svelte-1yokycz{height:0;width:0;visibility:hidden}label.svelte-1yokycz.svelte-1yokycz{cursor:pointer}label.cc__policy__switchlabel.svelte-1yokycz.svelte-1yokycz{cursor:pointer;text-indent:-9999px;width:3em;height:1.5em;background:var(--cc-secondary-color);display:block;border-radius:100px;position:relative}label.cc__policy__switchlabel.svelte-1yokycz.svelte-1yokycz:after{content:"";position:absolute;top:.2em;left:.2em;width:1.1em;height:1.1em;background:var(--cc-background);border-radius:1.1em;transition:.3s}input.cc__policy__switchinput.svelte-1yokycz:checked+label.cc__policy__switchlabel.svelte-1yokycz{background:var(--cc-primary-color)}input.cc__policy__switchinput.svelte-1yokycz:checked+label.cc__policy__switchlabel.svelte-1yokycz:after{left:calc(100% - .2em);transform:translate(-100%)}label.cc__policy__switchlabel.svelte-1yokycz.svelte-1yokycz:active:after{width:2em}:root{--cc-primary-color:hsl(103, 88%, 47%);--cc-primary-color-invert:white;--cc-primary-color-dark:hsl(103, 88%, 34%);--cc-primary-color-dark-invert:white;--cc-secondary-color:lightgray;--cc-secondary-color-invert:black;--cc-secondary-color-dark:rgb(161, 160, 160);--cc-secondary-color-dark-invert:black;--cc-background:white;--cc-text:black;--cc-overlay-background:rgba(255, 255, 255, .5);--cc-font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--cc-font-size:14px}#cookie-consent{z-index:999}body.cc-open{height:100vh;overflow-y:hidden}.cc_title.svelte-1imznib{font-size:1.25em}.cookie-consent__inner__background.svelte-1imznib{display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:2;background-color:var(--cc-overlay-background)}.cookie-consent__inner.svelte-1imznib{position:fixed;z-index:3;bottom:2em;right:2em;width:100%;max-width:560px;max-height:100vh;overflow-y:scroll;padding:2em;font-family:var(--cc-font-family);font-size:var(--cc-font-size);background:var(--cc-background);border-radius:.2em;box-shadow:0 0 2.3em -.2em #0000004d;box-sizing:border-box}@media screen and (max-width: 560px){.cookie-consent__inner.svelte-1imznib{bottom:0;right:0}}.cookie-consent__inner.cookie-consent__inner--centered.svelte-1imznib{bottom:auto;right:auto;top:50%;left:50%;transform:translate(-50%,-50%)}.cc__main__header{padding-bottom:.5em}.cc__main__footer{padding-top:1em;display:grid;grid-template-columns:1fr 3fr;grid-template-rows:1fr;width:100%;grid-gap:.5em}.cc__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--cc-secondary-color);border:1px solid var(--cc-secondary-color);color:var(--cc-secondary-color-invert);outline:none;padding:.5em 1em;border-radius:.2em;cursor:pointer;transition:all .15s ease-in;box-sizing:border-box;grid-row:span 1;font-family:var(--cc-font-family);font-size:.9em;display:block}button.cc__button:hover,button.cc__button:focus,button.cc__button:active,button.cc__button:visited{background-color:var(--cc-secondary-color-dark);border-color:var(--cc-secondary-color-dark)}button.cc__button.cc__button--accept:hover,button.cc__button.cc__button--accept:focus,button.cc__button.cc__button--accept:active,button.cc__button.cc__button--accept:visited{background-color:var(--cc-primary-color-dark);border-color:var(--cc-primary-color-dark)}button.cc__button.cc__button--settings{grid-column:1/3;background-color:transparent}button.cc__button.cc__button--decline{grid-column:1/2}button.cc__button.cc__button--accept{grid-column:2/3;background-color:var(--cc-primary-color);border-color:var(--cc-primary-color);color:var(--cc-primary-color-invert)}')),document.head.appendChild(c)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var Ln = Object.defineProperty;
var Mn = (e, t, r) => t in e ? Ln(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ke = (e, t, r) => (Mn(e, typeof t != "symbol" ? t + "" : t, r), r);
const ye = (e, t, r = "") => {
  try {
    return JSON.parse(e);
  } catch {
    return console.warn(`Cookie Consent: Error while parsing ${r || "json"}.`), t;
  }
};
function G() {
}
const Rn = (e) => e;
function Un(e, t) {
  for (const r in t)
    e[r] = t[r];
  return (
    /** @type {T & S} */
    e
  );
}
function zt(e) {
  return e();
}
function dt() {
  return /* @__PURE__ */ Object.create(null);
}
function j(e) {
  e.forEach(zt);
}
function Le(e) {
  return typeof e == "function";
}
function Me(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Dn(e) {
  return Object.keys(e).length === 0;
}
function Wt(e, ...t) {
  if (e == null) {
    for (const n of t)
      n(void 0);
    return G;
  }
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function K(e, t, r) {
  e.$$.on_destroy.push(Wt(t, r));
}
function Zt(e, t, r, n) {
  if (e) {
    const i = qt(e, t, r, n);
    return e[0](i);
  }
}
function qt(e, t, r, n) {
  return e[1] && n ? Un(r.ctx.slice(), e[1](n(t))) : r.ctx;
}
function Jt(e, t, r, n) {
  if (e[2] && n) {
    const i = e[2](n(r));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const o = [], s = Math.max(t.dirty.length, i.length);
      for (let a = 0; a < s; a += 1)
        o[a] = t.dirty[a] | i[a];
      return o;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function Qt(e, t, r, n, i, o) {
  if (i) {
    const s = qt(t, r, n, o);
    e.p(s, i);
  }
}
function Yt(e) {
  if (e.ctx.length > 32) {
    const t = [], r = e.ctx.length / 32;
    for (let n = 0; n < r; n++)
      t[n] = -1;
    return t;
  }
  return -1;
}
function _t(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
const Kt = typeof window < "u";
let Gn = Kt ? () => window.performance.now() : () => Date.now(), it = Kt ? (e) => requestAnimationFrame(e) : G;
const q = /* @__PURE__ */ new Set();
function en(e) {
  q.forEach((t) => {
    t.c(e) || (q.delete(t), t.f());
  }), q.size !== 0 && it(en);
}
function kn(e) {
  let t;
  return q.size === 0 && it(en), {
    promise: new Promise((r) => {
      q.add(t = { c: e, f: r });
    }),
    abort() {
      q.delete(t);
    }
  };
}
function x(e, t) {
  e.appendChild(t);
}
function tn(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function Fn(e) {
  const t = B("style");
  return t.textContent = "/* empty */", jn(tn(e), t), t.sheet;
}
function jn(e, t) {
  return x(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function N(e, t, r) {
  e.insertBefore(t, r || null);
}
function P(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function nn(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function B(e) {
  return document.createElement(e);
}
function L(e) {
  return document.createTextNode(e);
}
function M() {
  return L(" ");
}
function _e() {
  return L("");
}
function J(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function H(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function Vn(e) {
  return Array.from(e.childNodes);
}
function D(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function rn(e, t, { bubbles: r = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: r, cancelable: n });
}
const Pe = /* @__PURE__ */ new Map();
let Oe = 0;
function $n(e) {
  let t = 5381, r = e.length;
  for (; r--; )
    t = (t << 5) - t ^ e.charCodeAt(r);
  return t >>> 0;
}
function Xn(e, t) {
  const r = { stylesheet: Fn(t), rules: {} };
  return Pe.set(e, r), r;
}
function bt(e, t, r, n, i, o, s, a = 0) {
  const f = 16.666 / n;
  let l = `{
`;
  for (let E = 0; E <= 1; E += f) {
    const d = t + (r - t) * o(E);
    l += E * 100 + `%{${s(d, 1 - d)}}
`;
  }
  const u = l + `100% {${s(r, 1 - r)}}
}`, h = `__svelte_${$n(u)}_${a}`, c = tn(e), { stylesheet: p, rules: m } = Pe.get(c) || Xn(c, e);
  m[h] || (m[h] = !0, p.insertRule(`@keyframes ${h} ${u}`, p.cssRules.length));
  const _ = e.style.animation || "";
  return e.style.animation = `${_ ? `${_}, ` : ""}${h} ${n}ms linear ${i}ms 1 both`, Oe += 1, h;
}
function zn(e, t) {
  const r = (e.style.animation || "").split(", "), n = r.filter(
    t ? (o) => o.indexOf(t) < 0 : (o) => o.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), i = r.length - n.length;
  i && (e.style.animation = n.join(", "), Oe -= i, Oe || Wn());
}
function Wn() {
  it(() => {
    Oe || (Pe.forEach((e) => {
      const { ownerNode: t } = e.stylesheet;
      t && P(t);
    }), Pe.clear());
  });
}
let he;
function ce(e) {
  he = e;
}
function ot() {
  if (!he)
    throw new Error("Function called outside component initialization");
  return he;
}
function Zn(e) {
  ot().$$.on_mount.push(e);
}
function qn(e) {
  ot().$$.after_update.push(e);
}
function on() {
  const e = ot();
  return (t, r, { cancelable: n = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const o = rn(
        /** @type {string} */
        t,
        r,
        { cancelable: n }
      );
      return i.slice().forEach((s) => {
        s.call(e, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const Z = [], gt = [];
let Q = [];
const vt = [], Jn = /* @__PURE__ */ Promise.resolve();
let Ze = !1;
function Qn() {
  Ze || (Ze = !0, Jn.then(sn));
}
function me(e) {
  Q.push(e);
}
const Fe = /* @__PURE__ */ new Set();
let X = 0;
function sn() {
  if (X !== 0)
    return;
  const e = he;
  do {
    try {
      for (; X < Z.length; ) {
        const t = Z[X];
        X++, ce(t), Yn(t.$$);
      }
    } catch (t) {
      throw Z.length = 0, X = 0, t;
    }
    for (ce(null), Z.length = 0, X = 0; gt.length; )
      gt.pop()();
    for (let t = 0; t < Q.length; t += 1) {
      const r = Q[t];
      Fe.has(r) || (Fe.add(r), r());
    }
    Q.length = 0;
  } while (Z.length);
  for (; vt.length; )
    vt.pop()();
  Ze = !1, Fe.clear(), ce(e);
}
function Yn(e) {
  if (e.fragment !== null) {
    e.update(), j(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(me);
  }
}
function Kn(e) {
  const t = [], r = [];
  Q.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach((n) => n()), Q = t;
}
let le;
function er() {
  return le || (le = Promise.resolve(), le.then(() => {
    le = null;
  })), le;
}
function je(e, t, r) {
  e.dispatchEvent(rn(`${t ? "intro" : "outro"}${r}`));
}
const He = /* @__PURE__ */ new Set();
let F;
function be() {
  F = {
    r: 0,
    c: [],
    p: F
    // parent group
  };
}
function ge() {
  F.r || j(F.c), F = F.p;
}
function w(e, t) {
  e && e.i && (He.delete(e), e.i(t));
}
function R(e, t, r, n) {
  if (e && e.o) {
    if (He.has(e))
      return;
    He.add(e), F.c.push(() => {
      He.delete(e), n && (r && e.d(1), n());
    }), e.o(t);
  } else
    n && n();
}
const tr = { duration: 0 };
function Et(e, t, r, n) {
  let o = t(e, r, { direction: "both" }), s = n ? 0 : 1, a = null, f = null, l = null, u;
  function h() {
    l && zn(e, l);
  }
  function c(m, _) {
    const E = (
      /** @type {Program['d']} */
      m.b - s
    );
    return _ *= Math.abs(E), {
      a: s,
      b: m.b,
      d: E,
      duration: _,
      start: m.start,
      end: m.start + _,
      group: m.group
    };
  }
  function p(m) {
    const {
      delay: _ = 0,
      duration: E = 300,
      easing: d = Rn,
      tick: y = G,
      css: b
    } = o || tr, v = {
      start: Gn() + _,
      b: m
    };
    m || (v.group = F, F.r += 1), "inert" in e && (m ? u !== void 0 && (e.inert = u) : (u = /** @type {HTMLElement} */
    e.inert, e.inert = !0)), a || f ? f = v : (b && (h(), l = bt(e, s, m, E, _, d, b)), m && y(0, 1), a = c(v, E), me(() => je(e, m, "start")), kn((g) => {
      if (f && g > f.start && (a = c(f, E), f = null, je(e, a.b, "start"), b && (h(), l = bt(
        e,
        s,
        a.b,
        a.duration,
        0,
        d,
        o.css
      ))), a) {
        if (g >= a.end)
          y(s = a.b, 1 - s), je(e, a.b, "end"), f || (a.b ? h() : --a.group.r || j(a.group.c)), a = null;
        else if (g >= a.start) {
          const I = g - a.start;
          s = a.a + a.d * d(I / a.duration), y(s, 1 - s);
        }
      }
      return !!(a || f);
    }));
  }
  return {
    run(m) {
      Le(o) ? er().then(() => {
        o = o({ direction: m ? "in" : "out" }), p(m);
      }) : p(m);
    },
    end() {
      h(), a = f = null;
    }
  };
}
function Ne(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function an(e) {
  e && e.c();
}
function st(e, t, r) {
  const { fragment: n, after_update: i } = e.$$;
  n && n.m(t, r), me(() => {
    const o = e.$$.on_mount.map(zt).filter(Le);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : j(o), e.$$.on_mount = [];
  }), i.forEach(me);
}
function at(e, t) {
  const r = e.$$;
  r.fragment !== null && (Kn(r.after_update), j(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function nr(e, t) {
  e.$$.dirty[0] === -1 && (Z.push(e), Qn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function lt(e, t, r, n, i, o, s = null, a = [-1]) {
  const f = he;
  ce(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: G,
    not_equal: i,
    bound: dt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: dt(),
    dirty: a,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  s && s(l.root);
  let u = !1;
  if (l.ctx = r ? r(e, t.props || {}, (h, c, ...p) => {
    const m = p.length ? p[0] : c;
    return l.ctx && i(l.ctx[h], l.ctx[h] = m) && (!l.skip_bound && l.bound[h] && l.bound[h](m), u && nr(e, h)), c;
  }) : [], l.update(), u = !0, j(l.before_update), l.fragment = n ? n(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = Vn(t.target);
      l.fragment && l.fragment.l(h), h.forEach(P);
    } else
      l.fragment && l.fragment.c();
    t.intro && w(e.$$.fragment), st(e, t.target, t.anchor), sn();
  }
  ce(f);
}
class ut {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ke(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ke(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    at(this, 1), this.$destroy = G;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, r) {
    if (!Le(r))
      return G;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(r), () => {
      const i = n.indexOf(r);
      i !== -1 && n.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Dn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const rr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(rr);
const z = [];
function ir(e, t) {
  return {
    subscribe: Re(e, t).subscribe
  };
}
function Re(e, t = G) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function i(a) {
    if (Me(e, a) && (e = a, r)) {
      const f = !z.length;
      for (const l of n)
        l[1](), z.push(l, e);
      if (f) {
        for (let l = 0; l < z.length; l += 2)
          z[l][0](z[l + 1]);
        z.length = 0;
      }
    }
  }
  function o(a) {
    i(a(e));
  }
  function s(a, f = G) {
    const l = [a, f];
    return n.add(l), n.size === 1 && (r = t(i, o) || G), a(e), () => {
      n.delete(l), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function ie(e, t, r) {
  const n = !Array.isArray(e), i = n ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const o = t.length < 2;
  return ir(r, (s, a) => {
    let f = !1;
    const l = [];
    let u = 0, h = G;
    const c = () => {
      if (u)
        return;
      h();
      const m = t(n ? l[0] : l, s, a);
      o ? s(m) : h = Le(m) ? m : G;
    }, p = i.map(
      (m, _) => Wt(
        m,
        (E) => {
          l[_] = E, u &= ~(1 << _), f && c();
        },
        () => {
          u |= 1 << _;
        }
      )
    );
    return f = !0, c(), function() {
      j(p), h(), f = !1;
    };
  });
}
function or(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sr = function(t) {
  return ar(t) && !lr(t);
};
function ar(e) {
  return !!e && typeof e == "object";
}
function lr(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || cr(e);
}
var ur = typeof Symbol == "function" && Symbol.for, fr = ur ? Symbol.for("react.element") : 60103;
function cr(e) {
  return e.$$typeof === fr;
}
function hr(e) {
  return Array.isArray(e) ? [] : {};
}
function pe(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? ee(hr(e), e, t) : e;
}
function mr(e, t, r) {
  return e.concat(t).map(function(n) {
    return pe(n, r);
  });
}
function pr(e, t) {
  if (!t.customMerge)
    return ee;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : ee;
}
function dr(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return e.propertyIsEnumerable(t);
  }) : [];
}
function yt(e) {
  return Object.keys(e).concat(dr(e));
}
function ln(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function _r(e, t) {
  return ln(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function br(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && yt(e).forEach(function(i) {
    n[i] = pe(e[i], r);
  }), yt(t).forEach(function(i) {
    _r(e, i) || (ln(e, i) && r.isMergeableObject(t[i]) ? n[i] = pr(i, r)(e[i], t[i], r) : n[i] = pe(t[i], r));
  }), n;
}
function ee(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || mr, r.isMergeableObject = r.isMergeableObject || sr, r.cloneUnlessOtherwiseSpecified = pe;
  var n = Array.isArray(t), i = Array.isArray(e), o = n === i;
  return o ? n ? r.arrayMerge(e, t, r) : br(e, t, r) : pe(t, r);
}
ee.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, i) {
    return ee(n, i, r);
  }, {});
};
var gr = ee, vr = gr;
const Er = /* @__PURE__ */ or(vr);
var qe = function(e, t) {
  return qe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, qe(e, t);
};
function Ue(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  qe(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var A = function() {
  return A = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, A.apply(this, arguments);
};
function Ve(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var S;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(S || (S = {}));
var O;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(O || (O = {}));
var te;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(te || (te = {}));
function xt(e) {
  return e.type === O.literal;
}
function yr(e) {
  return e.type === O.argument;
}
function un(e) {
  return e.type === O.number;
}
function fn(e) {
  return e.type === O.date;
}
function cn(e) {
  return e.type === O.time;
}
function hn(e) {
  return e.type === O.select;
}
function mn(e) {
  return e.type === O.plural;
}
function xr(e) {
  return e.type === O.pound;
}
function pn(e) {
  return e.type === O.tag;
}
function dn(e) {
  return !!(e && typeof e == "object" && e.type === te.number);
}
function Je(e) {
  return !!(e && typeof e == "object" && e.type === te.dateTime);
}
var _n = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Sr = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Tr(e) {
  var t = {};
  return e.replace(Sr, function(r) {
    var n = r.length;
    switch (r[0]) {
      case "G":
        t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = n === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][n - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = n === 4 ? "short" : n === 5 ? "narrow" : "short";
        break;
      case "e":
        if (n < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "c":
        if (n < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][n - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][n - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = n < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var Hr = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Br(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Hr).filter(function(c) {
    return c.length > 0;
  }), r = [], n = 0, i = t; n < i.length; n++) {
    var o = i[n], s = o.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = s[0], f = s.slice(1), l = 0, u = f; l < u.length; l++) {
      var h = u[l];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    r.push({ stem: a, options: f });
  }
  return r;
}
function Ar(e) {
  return e.replace(/^(.*?)-/, "");
}
var St = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, bn = /^(@+)?(\+|#+)?[rs]?$/g, Pr = /(\*)(0+)|(#+)(0+)|(0+)/g, gn = /^(0+)$/;
function Tt(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(bn, function(r, n, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : i === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function vn(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function Or(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !gn.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Ht(e) {
  var t = {}, r = vn(e);
  return r || t;
}
function Nr(e) {
  for (var t = {}, r = 0, n = e; r < n.length; r++) {
    var i = n[r];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = Ar(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = A(A(A({}, t), { notation: "scientific" }), i.options.reduce(function(f, l) {
          return A(A({}, f), Ht(l));
        }, {}));
        continue;
      case "engineering":
        t = A(A(A({}, t), { notation: "engineering" }), i.options.reduce(function(f, l) {
          return A(A({}, f), Ht(l));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(i.options[0]);
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(Pr, function(f, l, u, h, c, p) {
          if (l)
            t.minimumIntegerDigits = u.length;
          else {
            if (h && c)
              throw new Error("We currently do not support maximum integer digits");
            if (p)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (gn.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (St.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(St, function(f, l, u, h, c, p) {
        return u === "*" ? t.minimumFractionDigits = l.length : h && h[0] === "#" ? t.maximumFractionDigits = h.length : c && p ? (t.minimumFractionDigits = c.length, t.maximumFractionDigits = c.length + p.length) : (t.minimumFractionDigits = l.length, t.maximumFractionDigits = l.length), "";
      });
      var o = i.options[0];
      o === "w" ? t = A(A({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = A(A({}, t), Tt(o)));
      continue;
    }
    if (bn.test(i.stem)) {
      t = A(A({}, t), Tt(i.stem));
      continue;
    }
    var s = vn(i.stem);
    s && (t = A(A({}, t), s));
    var a = Or(i.stem);
    a && (t = A(A({}, t), a));
  }
  return t;
}
var xe = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function wr(e, t) {
  for (var r = "", n = 0; n < e.length; n++) {
    var i = e.charAt(n);
    if (i === "j") {
      for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i; )
        o++, n++;
      var s = 1 + (o & 1), a = o < 2 ? 1 : 3 + (o >> 1), f = "a", l = Ir(t);
      for ((l == "H" || l == "k") && (a = 0); a-- > 0; )
        r += f;
      for (; s-- > 0; )
        r = l + r;
    } else
      i === "J" ? r += "H" : r += i;
  }
  return r;
}
function Ir(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var r = e.language, n;
  r !== "root" && (n = e.maximize().region);
  var i = xe[n || ""] || xe[r || ""] || xe["".concat(r, "-001")] || xe["001"];
  return i[0];
}
var $e, Cr = new RegExp("^".concat(_n.source, "*")), Lr = new RegExp("".concat(_n.source, "*$"));
function T(e, t) {
  return { start: e, end: t };
}
var Mr = !!String.prototype.startsWith, Rr = !!String.fromCodePoint, Ur = !!Object.fromEntries, Dr = !!String.prototype.codePointAt, Gr = !!String.prototype.trimStart, kr = !!String.prototype.trimEnd, Fr = !!Number.isSafeInteger, jr = Fr ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Qe = !0;
try {
  var Vr = yn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Qe = (($e = Vr.exec("a")) === null || $e === void 0 ? void 0 : $e[0]) === "a";
} catch {
  Qe = !1;
}
var Bt = Mr ? (
  // Native
  function(t, r, n) {
    return t.startsWith(r, n);
  }
) : (
  // For IE11
  function(t, r, n) {
    return t.slice(n, n + r.length) === r;
  }
), Ye = Rr ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    for (var n = "", i = t.length, o = 0, s; i > o; ) {
      if (s = t[o++], s > 1114111)
        throw RangeError(s + " is not a valid code point");
      n += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
    }
    return n;
  }
), At = (
  // native
  Ur ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var r = {}, n = 0, i = t; n < i.length; n++) {
        var o = i[n], s = o[0], a = o[1];
        r[s] = a;
      }
      return r;
    }
  )
), En = Dr ? (
  // Native
  function(t, r) {
    return t.codePointAt(r);
  }
) : (
  // IE 11
  function(t, r) {
    var n = t.length;
    if (!(r < 0 || r >= n)) {
      var i = t.charCodeAt(r), o;
      return i < 55296 || i > 56319 || r + 1 === n || (o = t.charCodeAt(r + 1)) < 56320 || o > 57343 ? i : (i - 55296 << 10) + (o - 56320) + 65536;
    }
  }
), $r = Gr ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Cr, "");
  }
), Xr = kr ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Lr, "");
  }
);
function yn(e, t) {
  return new RegExp(e, t);
}
var Ke;
if (Qe) {
  var Pt = yn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ke = function(t, r) {
    var n;
    Pt.lastIndex = r;
    var i = Pt.exec(t);
    return (n = i[1]) !== null && n !== void 0 ? n : "";
  };
} else
  Ke = function(t, r) {
    for (var n = []; ; ) {
      var i = En(t, r);
      if (i === void 0 || xn(i) || qr(i))
        break;
      n.push(i), r += i >= 65536 ? 2 : 1;
    }
    return Ye.apply(void 0, n);
  };
var zr = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!r.ignoreTag, this.locale = r.locale, this.requiresOtherClause = !!r.requiresOtherClause, this.shouldParseSkeletons = !!r.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, r, n) {
      for (var i = []; !this.isEOF(); ) {
        var o = this.char();
        if (o === 123) {
          var s = this.parseArgument(t, n);
          if (s.err)
            return s;
          i.push(s.val);
        } else {
          if (o === 125 && t > 0)
            break;
          if (o === 35 && (r === "plural" || r === "selectordinal")) {
            var a = this.clonePosition();
            this.bump(), i.push({
              type: O.pound,
              location: T(a, this.clonePosition())
            });
          } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(S.UNMATCHED_CLOSING_TAG, T(this.clonePosition(), this.clonePosition()));
          } else if (o === 60 && !this.ignoreTag && et(this.peek() || 0)) {
            var s = this.parseTag(t, r);
            if (s.err)
              return s;
            i.push(s.val);
          } else {
            var s = this.parseLiteral(t, r);
            if (s.err)
              return s;
            i.push(s.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, r) {
      var n = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: O.literal,
            value: "<".concat(i, "/>"),
            location: T(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var o = this.parseMessage(t + 1, r, !0);
        if (o.err)
          return o;
        var s = o.val, a = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !et(this.char()))
            return this.error(S.INVALID_TAG, T(a, this.clonePosition()));
          var f = this.clonePosition(), l = this.parseTagName();
          return i !== l ? this.error(S.UNMATCHED_CLOSING_TAG, T(f, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: O.tag,
              value: i,
              children: s,
              location: T(n, this.clonePosition())
            },
            err: null
          } : this.error(S.INVALID_TAG, T(a, this.clonePosition())));
        } else
          return this.error(S.UNCLOSED_TAG, T(n, this.clonePosition()));
      } else
        return this.error(S.INVALID_TAG, T(n, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Zr(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, r) {
      for (var n = this.clonePosition(), i = ""; ; ) {
        var o = this.tryParseQuote(r);
        if (o) {
          i += o;
          continue;
        }
        var s = this.tryParseUnquoted(t, r);
        if (s) {
          i += s;
          continue;
        }
        var a = this.tryParseLeftAngleBracket();
        if (a) {
          i += a;
          continue;
        }
        break;
      }
      var f = T(n, this.clonePosition());
      return {
        val: { type: O.literal, value: i, location: f },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Wr(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var r = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var n = this.char();
        if (n === 39)
          if (this.peek() === 39)
            r.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          r.push(n);
        this.bump();
      }
      return Ye.apply(void 0, r);
    }, e.prototype.tryParseUnquoted = function(t, r) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), Ye(n));
    }, e.prototype.parseArgument = function(t, r) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE, T(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(S.EMPTY_ARGUMENT, T(n, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(S.MALFORMED_ARGUMENT, T(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE, T(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: O.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: T(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE, T(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
        default:
          return this.error(S.MALFORMED_ARGUMENT, T(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), r = this.offset(), n = Ke(this.message, r), i = r + n.length;
      this.bumpTo(i);
      var o = this.clonePosition(), s = T(t, o);
      return { value: n, location: s };
    }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
      var o, s = this.clonePosition(), a = this.parseIdentifierIfPossible().value, f = this.clonePosition();
      switch (a) {
        case "":
          return this.error(S.EXPECT_ARGUMENT_TYPE, T(s, f));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var l = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var u = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var c = Xr(h.val);
            if (c.length === 0)
              return this.error(S.EXPECT_ARGUMENT_STYLE, T(this.clonePosition(), this.clonePosition()));
            var p = T(u, this.clonePosition());
            l = { style: c, styleLocation: p };
          }
          var m = this.tryParseArgumentClose(i);
          if (m.err)
            return m;
          var _ = T(i, this.clonePosition());
          if (l && Bt(l == null ? void 0 : l.style, "::", 0)) {
            var E = $r(l.style.slice(2));
            if (a === "number") {
              var h = this.parseNumberSkeletonFromString(E, l.styleLocation);
              return h.err ? h : {
                val: { type: O.number, value: n, location: _, style: h.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(S.EXPECT_DATE_TIME_SKELETON, _);
              var d = E;
              this.locale && (d = wr(E, this.locale));
              var c = {
                type: te.dateTime,
                pattern: d,
                location: l.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Tr(d) : {}
              }, y = a === "date" ? O.date : O.time;
              return {
                val: { type: y, value: n, location: _, style: c },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? O.number : a === "date" ? O.date : O.time,
              value: n,
              location: _,
              style: (o = l == null ? void 0 : l.style) !== null && o !== void 0 ? o : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var b = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(S.EXPECT_SELECT_ARGUMENT_OPTIONS, T(b, A({}, b)));
          this.bumpSpace();
          var v = this.parseIdentifierIfPossible(), g = 0;
          if (a !== "select" && v.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(S.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, T(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(S.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, S.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), v = this.parseIdentifierIfPossible(), g = h.val;
          }
          var I = this.tryParsePluralOrSelectOptions(t, a, r, v);
          if (I.err)
            return I;
          var m = this.tryParseArgumentClose(i);
          if (m.err)
            return m;
          var ae = T(i, this.clonePosition());
          return a === "select" ? {
            val: {
              type: O.select,
              value: n,
              options: At(I.val),
              location: ae
            },
            err: null
          } : {
            val: {
              type: O.plural,
              value: n,
              options: At(I.val),
              offset: g,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: ae
            },
            err: null
          };
        }
        default:
          return this.error(S.INVALID_ARGUMENT_TYPE, T(s, f));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE, T(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(S.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, T(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(r.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(r.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, r) {
      var n = [];
      try {
        n = Br(t);
      } catch {
        return this.error(S.INVALID_NUMBER_SKELETON, r);
      }
      return {
        val: {
          type: te.number,
          tokens: n,
          location: r,
          parsedOptions: this.shouldParseSkeletons ? Nr(n) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, r, n, i) {
      for (var o, s = !1, a = [], f = /* @__PURE__ */ new Set(), l = i.value, u = i.location; ; ) {
        if (l.length === 0) {
          var h = this.clonePosition();
          if (r !== "select" && this.bumpIf("=")) {
            var c = this.tryParseDecimalInteger(S.EXPECT_PLURAL_ARGUMENT_SELECTOR, S.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (c.err)
              return c;
            u = T(h, this.clonePosition()), l = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (f.has(l))
          return this.error(r === "select" ? S.DUPLICATE_SELECT_ARGUMENT_SELECTOR : S.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
        l === "other" && (s = !0), this.bumpSpace();
        var p = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? S.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : S.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, T(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(t + 1, r, n);
        if (m.err)
          return m;
        var _ = this.tryParseArgumentClose(p);
        if (_.err)
          return _;
        a.push([
          l,
          {
            value: m.val,
            location: T(p, this.clonePosition())
          }
        ]), f.add(l), this.bumpSpace(), o = this.parseIdentifierIfPossible(), l = o.value, u = o.location;
      }
      return a.length === 0 ? this.error(r === "select" ? S.EXPECT_SELECT_ARGUMENT_SELECTOR : S.EXPECT_PLURAL_ARGUMENT_SELECTOR, T(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(S.MISSING_OTHER_CLAUSE, T(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, r) {
      var n = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var o = !1, s = 0; !this.isEOF(); ) {
        var a = this.char();
        if (a >= 48 && a <= 57)
          o = !0, s = s * 10 + (a - 48), this.bump();
        else
          break;
      }
      var f = T(i, this.clonePosition());
      return o ? (s *= n, jr(s) ? { val: s, err: null } : this.error(r, f)) : this.error(t, f);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var r = En(this.message, t);
      if (r === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return r;
    }, e.prototype.error = function(t, r) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: r
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (Bt(this.message, t, this.offset())) {
        for (var r = 0; r < t.length; r++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var r = this.offset(), n = this.message.indexOf(t, r);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var r = this.offset();
        if (r === t)
          break;
        if (r > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && xn(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), r = this.offset(), n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
      return n ?? null;
    }, e;
  }()
);
function et(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Wr(e) {
  return et(e) || e === 47;
}
function Zr(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function xn(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function qr(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function tt(e) {
  e.forEach(function(t) {
    if (delete t.location, hn(t) || mn(t))
      for (var r in t.options)
        delete t.options[r].location, tt(t.options[r].value);
    else
      un(t) && dn(t.style) || (fn(t) || cn(t)) && Je(t.style) ? delete t.style.location : pn(t) && tt(t.children);
  });
}
function Jr(e, t) {
  t === void 0 && (t = {}), t = A({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new zr(e, t).parse();
  if (r.err) {
    var n = SyntaxError(S[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return t != null && t.captureLocation || tt(r.val), r.val;
}
function Xe(e, t) {
  var r = t && t.cache ? t.cache : ni, n = t && t.serializer ? t.serializer : ti, i = t && t.strategy ? t.strategy : Yr;
  return i(e, {
    cache: r,
    serializer: n
  });
}
function Qr(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Sn(e, t, r, n) {
  var i = Qr(n) ? n : r(n), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, n), t.set(i, o)), o;
}
function Tn(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3), i = r(n), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, n), t.set(i, o)), o;
}
function ft(e, t, r, n, i) {
  return r.bind(t, e, n, i);
}
function Yr(e, t) {
  var r = e.length === 1 ? Sn : Tn;
  return ft(e, this, r, t.cache.create(), t.serializer);
}
function Kr(e, t) {
  return ft(e, this, Tn, t.cache.create(), t.serializer);
}
function ei(e, t) {
  return ft(e, this, Sn, t.cache.create(), t.serializer);
}
var ti = function() {
  return JSON.stringify(arguments);
};
function ct() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
ct.prototype.get = function(e) {
  return this.cache[e];
};
ct.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var ni = {
  create: function() {
    return new ct();
  }
}, ze = {
  variadic: Kr,
  monadic: ei
}, ne;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(ne || (ne = {}));
var De = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(r, n, i) {
      var o = e.call(this, r) || this;
      return o.code = n, o.originalMessage = i, o;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Ot = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(r, n, i, o) {
      return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), ne.INVALID_VALUE, o) || this;
    }
    return t;
  }(De)
), ri = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(r, n, i) {
      return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), ne.INVALID_VALUE, i) || this;
    }
    return t;
  }(De)
), ii = (
  /** @class */
  function(e) {
    Ue(t, e);
    function t(r, n) {
      return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), ne.MISSING_VALUE, n) || this;
    }
    return t;
  }(De)
), C;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(C || (C = {}));
function oi(e) {
  return e.length < 2 ? e : e.reduce(function(t, r) {
    var n = t[t.length - 1];
    return !n || n.type !== C.literal || r.type !== C.literal ? t.push(r) : n.value += r.value, t;
  }, []);
}
function si(e) {
  return typeof e == "function";
}
function Be(e, t, r, n, i, o, s) {
  if (e.length === 1 && xt(e[0]))
    return [
      {
        type: C.literal,
        value: e[0].value
      }
    ];
  for (var a = [], f = 0, l = e; f < l.length; f++) {
    var u = l[f];
    if (xt(u)) {
      a.push({
        type: C.literal,
        value: u.value
      });
      continue;
    }
    if (xr(u)) {
      typeof o == "number" && a.push({
        type: C.literal,
        value: r.getNumberFormat(t).format(o)
      });
      continue;
    }
    var h = u.value;
    if (!(i && h in i))
      throw new ii(h, s);
    var c = i[h];
    if (yr(u)) {
      (!c || typeof c == "string" || typeof c == "number") && (c = typeof c == "string" || typeof c == "number" ? String(c) : ""), a.push({
        type: typeof c == "string" ? C.literal : C.object,
        value: c
      });
      continue;
    }
    if (fn(u)) {
      var p = typeof u.style == "string" ? n.date[u.style] : Je(u.style) ? u.style.parsedOptions : void 0;
      a.push({
        type: C.literal,
        value: r.getDateTimeFormat(t, p).format(c)
      });
      continue;
    }
    if (cn(u)) {
      var p = typeof u.style == "string" ? n.time[u.style] : Je(u.style) ? u.style.parsedOptions : n.time.medium;
      a.push({
        type: C.literal,
        value: r.getDateTimeFormat(t, p).format(c)
      });
      continue;
    }
    if (un(u)) {
      var p = typeof u.style == "string" ? n.number[u.style] : dn(u.style) ? u.style.parsedOptions : void 0;
      p && p.scale && (c = c * (p.scale || 1)), a.push({
        type: C.literal,
        value: r.getNumberFormat(t, p).format(c)
      });
      continue;
    }
    if (pn(u)) {
      var m = u.children, _ = u.value, E = i[_];
      if (!si(E))
        throw new ri(_, "function", s);
      var d = Be(m, t, r, n, i, o), y = E(d.map(function(g) {
        return g.value;
      }));
      Array.isArray(y) || (y = [y]), a.push.apply(a, y.map(function(g) {
        return {
          type: typeof g == "string" ? C.literal : C.object,
          value: g
        };
      }));
    }
    if (hn(u)) {
      var b = u.options[c] || u.options.other;
      if (!b)
        throw new Ot(u.value, c, Object.keys(u.options), s);
      a.push.apply(a, Be(b.value, t, r, n, i));
      continue;
    }
    if (mn(u)) {
      var b = u.options["=".concat(c)];
      if (!b) {
        if (!Intl.PluralRules)
          throw new De(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ne.MISSING_INTL_API, s);
        var v = r.getPluralRules(t, { type: u.pluralType }).select(c - (u.offset || 0));
        b = u.options[v] || u.options.other;
      }
      if (!b)
        throw new Ot(u.value, c, Object.keys(u.options), s);
      a.push.apply(a, Be(b.value, t, r, n, i, c - (u.offset || 0)));
      continue;
    }
  }
  return oi(a);
}
function ai(e, t) {
  return t ? A(A(A({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
    return r[n] = A(A({}, e[n]), t[n] || {}), r;
  }, {})) : e;
}
function li(e, t) {
  return t ? Object.keys(e).reduce(function(r, n) {
    return r[n] = ai(e[n], t[n]), r;
  }, A({}, e)) : e;
}
function We(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, r) {
          e[t] = r;
        }
      };
    }
  };
}
function ui(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Xe(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, Ve([void 0], r, !1)))();
    }, {
      cache: We(e.number),
      strategy: ze.variadic
    }),
    getDateTimeFormat: Xe(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Ve([void 0], r, !1)))();
    }, {
      cache: We(e.dateTime),
      strategy: ze.variadic
    }),
    getPluralRules: Xe(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, Ve([void 0], r, !1)))();
    }, {
      cache: We(e.pluralRules),
      strategy: ze.variadic
    })
  };
}
var Hn = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      var o = this;
      if (r === void 0 && (r = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(s) {
        var a = o.formatToParts(s);
        if (a.length === 1)
          return a[0].value;
        var f = a.reduce(function(l, u) {
          return !l.length || u.type !== C.literal || typeof l[l.length - 1] != "string" ? l.push(u.value) : l[l.length - 1] += u.value, l;
        }, []);
        return f.length <= 1 ? f[0] || "" : f;
      }, this.formatToParts = function(s) {
        return Be(o.ast, o.locales, o.formatters, o.formats, s, void 0, o.message);
      }, this.resolvedOptions = function() {
        return {
          locale: o.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return o.ast;
      }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = e.__parse(t, {
          ignoreTag: i == null ? void 0 : i.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = li(e.formats, n), this.formatters = i && i.formatters || ui(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      var r = Intl.NumberFormat.supportedLocalesOf(t);
      return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
    }, e.__parse = Jr, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
);
function fi(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const r = t.split(".");
  let n = e;
  for (let i = 0; i < r.length; i++)
    if (typeof n == "object") {
      if (i > 0) {
        const o = r.slice(i, r.length).join(".");
        if (o in n) {
          n = n[o];
          break;
        }
      }
      n = n[r[i]];
    } else
      n = void 0;
  return n;
}
const V = {}, ci = (e, t, r) => r && (t in V || (V[t] = {}), e in V[t] || (V[t][e] = r), r), Bn = (e, t) => {
  if (t == null)
    return;
  if (t in V && e in V[t])
    return V[t][e];
  const r = Ee(t);
  for (let n = 0; n < r.length; n++) {
    const i = r[n], o = mi(i, e);
    if (o)
      return ci(e, t, o);
  }
};
let ht;
const ve = Re({});
function hi(e) {
  return ht[e] || null;
}
function An(e) {
  return e in ht;
}
function mi(e, t) {
  if (!An(e))
    return null;
  const r = hi(e);
  return fi(r, t);
}
function pi(e) {
  if (e == null)
    return;
  const t = Ee(e);
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (An(n))
      return n;
  }
}
function Pn(e, ...t) {
  delete V[e], ve.update((r) => (r[e] = Er.all([r[e] || {}, ...t]), r));
}
ie(
  [ve],
  ([e]) => Object.keys(e)
);
ve.subscribe((e) => ht = e);
const Ae = {};
function di(e, t) {
  Ae[e].delete(t), Ae[e].size === 0 && delete Ae[e];
}
function On(e) {
  return Ae[e];
}
function _i(e) {
  return Ee(e).map((t) => {
    const r = On(t);
    return [t, r ? [...r] : []];
  }).filter(([, t]) => t.length > 0);
}
function we(e) {
  return e == null ? !1 : Ee(e).some(
    (t) => {
      var r;
      return (r = On(t)) == null ? void 0 : r.size;
    }
  );
}
function bi(e, t) {
  return Promise.all(
    t.map((n) => (di(e, n), n().then((i) => i.default || i)))
  ).then((n) => Pn(e, ...n));
}
const ue = {};
function Nn(e) {
  if (!we(e))
    return e in ue ? ue[e] : Promise.resolve();
  const t = _i(e);
  return ue[e] = Promise.all(
    t.map(
      ([r, n]) => bi(r, n)
    )
  ).then(() => {
    if (we(e))
      return Nn(e);
    delete ue[e];
  }), ue[e];
}
var Nt = Object.getOwnPropertySymbols, gi = Object.prototype.hasOwnProperty, vi = Object.prototype.propertyIsEnumerable, Ei = (e, t) => {
  var r = {};
  for (var n in e)
    gi.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && Nt)
    for (var n of Nt(e))
      t.indexOf(n) < 0 && vi.call(e, n) && (r[n] = e[n]);
  return r;
};
const yi = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
};
function xi({ locale: e, id: t }) {
  console.warn(
    `[svelte-i18n] The message "${t}" was not found in "${Ee(
      e
    ).join('", "')}".${we($()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Si = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: yi,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, fe = Si;
function re() {
  return fe;
}
function Ti(e) {
  const t = e, { formats: r } = t, n = Ei(t, ["formats"]);
  let i = e.fallbackLocale;
  if (e.initialLocale)
    try {
      Hn.resolveLocale(e.initialLocale) && (i = e.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${e.initialLocale}" is not a valid locale.`
      );
    }
  return n.warnOnMissingMessages && (delete n.warnOnMissingMessages, n.handleMissingMessage == null ? n.handleMissingMessage = xi : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(fe, n, { initialLocale: i }), r && ("number" in r && Object.assign(fe.formats.number, r.number), "date" in r && Object.assign(fe.formats.date, r.date), "time" in r && Object.assign(fe.formats.time, r.time)), oe.set(i);
}
const Y = Re(!1);
var Hi = Object.defineProperty, Bi = Object.defineProperties, Ai = Object.getOwnPropertyDescriptors, wt = Object.getOwnPropertySymbols, Pi = Object.prototype.hasOwnProperty, Oi = Object.prototype.propertyIsEnumerable, It = (e, t, r) => t in e ? Hi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ni = (e, t) => {
  for (var r in t || (t = {}))
    Pi.call(t, r) && It(e, r, t[r]);
  if (wt)
    for (var r of wt(t))
      Oi.call(t, r) && It(e, r, t[r]);
  return e;
}, wi = (e, t) => Bi(e, Ai(t));
let nt;
const Ie = Re(null);
function Ct(e) {
  return e.split("-").map((t, r, n) => n.slice(0, r + 1).join("-")).reverse();
}
function Ee(e, t = re().fallbackLocale) {
  const r = Ct(e);
  return t ? [.../* @__PURE__ */ new Set([...r, ...Ct(t)])] : r;
}
function $() {
  return nt ?? void 0;
}
Ie.subscribe((e) => {
  nt = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const Ii = (e) => {
  if (e && pi(e) && we(e)) {
    const { loadingDelay: t } = re();
    let r;
    return typeof window < "u" && $() != null && t ? r = window.setTimeout(
      () => Y.set(!0),
      t
    ) : Y.set(!0), Nn(e).then(() => {
      Ie.set(e);
    }).finally(() => {
      clearTimeout(r), Y.set(!1);
    });
  }
  return Ie.set(e);
}, oe = wi(Ni({}, Ie), {
  set: Ii
}), Ge = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => {
    const i = JSON.stringify(n);
    return i in t ? t[i] : t[i] = e(n);
  };
};
var Ci = Object.defineProperty, Ce = Object.getOwnPropertySymbols, wn = Object.prototype.hasOwnProperty, In = Object.prototype.propertyIsEnumerable, Lt = (e, t, r) => t in e ? Ci(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, mt = (e, t) => {
  for (var r in t || (t = {}))
    wn.call(t, r) && Lt(e, r, t[r]);
  if (Ce)
    for (var r of Ce(t))
      In.call(t, r) && Lt(e, r, t[r]);
  return e;
}, se = (e, t) => {
  var r = {};
  for (var n in e)
    wn.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && Ce)
    for (var n of Ce(e))
      t.indexOf(n) < 0 && In.call(e, n) && (r[n] = e[n]);
  return r;
};
const de = (e, t) => {
  const { formats: r } = re();
  if (e in r && t in r[e])
    return r[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, Li = Ge(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = se(t, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return n && (i = de("number", n)), new Intl.NumberFormat(r, i);
  }
), Mi = Ge(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = se(t, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return n ? i = de("date", n) : Object.keys(i).length === 0 && (i = de("date", "short")), new Intl.DateTimeFormat(r, i);
  }
), Ri = Ge(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = se(t, ["locale", "format"]);
    if (r == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return n ? i = de("time", n) : Object.keys(i).length === 0 && (i = de("time", "short")), new Intl.DateTimeFormat(r, i);
  }
), Ui = (e = {}) => {
  var t = e, {
    locale: r = $()
  } = t, n = se(t, [
    "locale"
  ]);
  return Li(mt({ locale: r }, n));
}, Di = (e = {}) => {
  var t = e, {
    locale: r = $()
  } = t, n = se(t, [
    "locale"
  ]);
  return Mi(mt({ locale: r }, n));
}, Gi = (e = {}) => {
  var t = e, {
    locale: r = $()
  } = t, n = se(t, [
    "locale"
  ]);
  return Ri(mt({ locale: r }, n));
}, ki = Ge(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = $()) => new Hn(e, t, re().formats, {
    ignoreTag: re().ignoreTag
  })
), Fi = (e, t = {}) => {
  var r, n, i, o;
  let s = t;
  typeof e == "object" && (s = e, e = s.id);
  const {
    values: a,
    locale: f = $(),
    default: l
  } = s;
  if (f == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let u = Bn(e, f);
  if (!u)
    u = (o = (i = (n = (r = re()).handleMissingMessage) == null ? void 0 : n.call(r, { locale: f, id: e, defaultValue: l })) != null ? i : l) != null ? o : e;
  else if (typeof u != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof u}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), u;
  if (!a)
    return u;
  let h = u;
  try {
    h = ki(u, f).format(a);
  } catch (c) {
    c instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      c.message
    );
  }
  return h;
}, ji = (e, t) => Gi(t).format(e), Vi = (e, t) => Di(t).format(e), $i = (e, t) => Ui(t).format(e), Xi = (e, t = $()) => Bn(e, t), pt = ie([oe, ve], () => Fi);
ie([oe], () => ji);
ie([oe], () => Vi);
ie([oe], () => $i);
ie([oe, ve], () => Xi);
function zi(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Mt(e, { delay: t = 0, duration: r = 400, easing: n = zi, x: i = 0, y: o = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(e), f = +a.opacity, l = a.transform === "none" ? "" : a.transform, u = f * (1 - s), [h, c] = _t(i), [p, m] = _t(o);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (_, E) => `
			transform: ${l} translate(${(1 - _) * h}${c}, ${(1 - _) * p}${m});
			opacity: ${f - u * E}`
  };
}
/*! js-cookie v3.0.5 | MIT */
function Se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      e[n] = r[n];
  }
  return e;
}
var Wi = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function rt(e, t) {
  function r(i, o, s) {
    if (!(typeof document > "u")) {
      s = Se({}, t, s), typeof s.expires == "number" && (s.expires = new Date(Date.now() + s.expires * 864e5)), s.expires && (s.expires = s.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var a = "";
      for (var f in s)
        s[f] && (a += "; " + f, s[f] !== !0 && (a += "=" + s[f].split(";")[0]));
      return document.cookie = i + "=" + e.write(o, i) + a;
    }
  }
  function n(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var o = document.cookie ? document.cookie.split("; ") : [], s = {}, a = 0; a < o.length; a++) {
        var f = o[a].split("="), l = f.slice(1).join("=");
        try {
          var u = decodeURIComponent(f[0]);
          if (s[u] = e.read(l, u), i === u)
            break;
        } catch {
        }
      }
      return i ? s[i] : s;
    }
  }
  return Object.create(
    {
      set: r,
      get: n,
      remove: function(i, o) {
        r(
          i,
          "",
          Se({}, o, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return rt(this.converter, Se({}, this.attributes, i));
      },
      withConverter: function(i) {
        return rt(Se({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var Te = rt(Wi, { path: "/" });
function Rt(e) {
  let t, r, n, i, o = (
    /*$t*/
    e[1]("femundfilou.cookie-consent.buttons.decline") + ""
  ), s, a, f, l = (
    /*$t*/
    e[1]("femundfilou.cookie-consent.buttons.acceptall") + ""
  ), u, h, c, p = (
    /*$t*/
    e[1]("femundfilou.cookie-consent.buttons.settings") + ""
  ), m, _, E, d;
  const y = (
    /*#slots*/
    e[4].default
  ), b = Zt(
    y,
    e,
    /*$$scope*/
    e[3],
    null
  );
  return {
    c() {
      t = B("div"), b && b.c(), r = M(), n = B("div"), i = B("button"), s = L(o), a = M(), f = B("button"), u = L(l), h = M(), c = B("button"), m = L(p), H(t, "class", "cc__main__header"), H(i, "class", "cc__button cc__button--decline"), H(f, "class", "cc__button cc__button--accept"), H(c, "class", "cc__button cc__button--settings"), H(n, "class", "cc__main__footer");
    },
    m(v, g) {
      N(v, t, g), b && b.m(t, null), N(v, r, g), N(v, n, g), x(n, i), x(i, s), x(n, a), x(n, f), x(f, u), x(n, h), x(n, c), x(c, m), _ = !0, E || (d = [
        J(
          i,
          "click",
          /*click_handler*/
          e[5]
        ),
        J(
          f,
          "click",
          /*click_handler_1*/
          e[6]
        ),
        J(
          c,
          "click",
          /*click_handler_2*/
          e[7]
        )
      ], E = !0);
    },
    p(v, g) {
      b && b.p && (!_ || g & /*$$scope*/
      8) && Qt(
        b,
        y,
        v,
        /*$$scope*/
        v[3],
        _ ? Jt(
          y,
          /*$$scope*/
          v[3],
          g,
          null
        ) : Yt(
          /*$$scope*/
          v[3]
        ),
        null
      ), (!_ || g & /*$t*/
      2) && o !== (o = /*$t*/
      v[1]("femundfilou.cookie-consent.buttons.decline") + "") && D(s, o), (!_ || g & /*$t*/
      2) && l !== (l = /*$t*/
      v[1]("femundfilou.cookie-consent.buttons.acceptall") + "") && D(u, l), (!_ || g & /*$t*/
      2) && p !== (p = /*$t*/
      v[1]("femundfilou.cookie-consent.buttons.settings") + "") && D(m, p);
    },
    i(v) {
      _ || (w(b, v), _ = !0);
    },
    o(v) {
      R(b, v), _ = !1;
    },
    d(v) {
      v && (P(t), P(r), P(n)), b && b.d(v), E = !1, j(d);
    }
  };
}
function Zi(e) {
  let t, r, n = !/*$isLoading*/
  e[0] && Rt(e);
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(i, o) {
      n && n.m(i, o), N(i, t, o), r = !0;
    },
    p(i, [o]) {
      /*$isLoading*/
      i[0] ? n && (be(), R(n, 1, 1, () => {
        n = null;
      }), ge()) : n ? (n.p(i, o), o & /*$isLoading*/
      1 && w(n, 1)) : (n = Rt(i), n.c(), w(n, 1), n.m(t.parentNode, t));
    },
    i(i) {
      r || (w(n), r = !0);
    },
    o(i) {
      R(n), r = !1;
    },
    d(i) {
      i && P(t), n && n.d(i);
    }
  };
}
function qi(e, t, r) {
  let n, i;
  K(e, Y, (h) => r(0, n = h)), K(e, pt, (h) => r(1, i = h));
  let { $$slots: o = {}, $$scope: s } = t;
  const a = on(), f = () => {
    a("acceptRequired");
  }, l = () => {
    a("acceptAll");
  }, u = () => {
    a("openSettings");
  };
  return e.$$set = (h) => {
    "$$scope" in h && r(3, s = h.$$scope);
  }, [
    n,
    i,
    a,
    s,
    o,
    f,
    l,
    u
  ];
}
class Ji extends ut {
  constructor(t) {
    super(), lt(this, t, qi, Zi, Me, {});
  }
}
function Ut(e, t, r) {
  const n = e.slice();
  return n[14] = t[r], n;
}
function Dt(e, t, r) {
  const n = e.slice();
  return n[17] = t[r], n;
}
function Gt(e) {
  let t, r, n, i, o, s, a = (
    /*$t*/
    e[3]("femundfilou.cookie-consent.buttons.cancel") + ""
  ), f, l, u, h = (
    /*$t*/
    e[3]("femundfilou.cookie-consent.buttons.save") + ""
  ), c, p, m, _;
  const E = (
    /*#slots*/
    e[10].default
  ), d = Zt(
    E,
    e,
    /*$$scope*/
    e[9],
    null
  );
  let y = (
    /*categories*/
    e[1] && kt(e)
  );
  return {
    c() {
      t = B("div"), d && d.c(), r = M(), n = B("div"), y && y.c(), i = M(), o = B("div"), s = B("button"), f = L(a), l = M(), u = B("button"), c = L(h), H(t, "class", "cc__main__header"), H(n, "class", "cc__main__content svelte-1yokycz"), H(s, "class", "cc__button cc__button--decline"), H(u, "class", "cc__button cc__button--accept"), H(o, "class", "cc__main__footer");
    },
    m(b, v) {
      N(b, t, v), d && d.m(t, null), N(b, r, v), N(b, n, v), y && y.m(n, null), N(b, i, v), N(b, o, v), x(o, s), x(s, f), x(o, l), x(o, u), x(u, c), p = !0, m || (_ = [
        J(
          s,
          "click",
          /*click_handler*/
          e[12]
        ),
        J(
          u,
          "click",
          /*click_handler_1*/
          e[13]
        )
      ], m = !0);
    },
    p(b, v) {
      d && d.p && (!p || v & /*$$scope*/
      512) && Qt(
        d,
        E,
        b,
        /*$$scope*/
        b[9],
        p ? Jt(
          E,
          /*$$scope*/
          b[9],
          v,
          null
        ) : Yt(
          /*$$scope*/
          b[9]
        ),
        null
      ), /*categories*/
      b[1] ? y ? y.p(b, v) : (y = kt(b), y.c(), y.m(n, null)) : y && (y.d(1), y = null), (!p || v & /*$t*/
      8) && a !== (a = /*$t*/
      b[3]("femundfilou.cookie-consent.buttons.cancel") + "") && D(f, a), (!p || v & /*$t*/
      8) && h !== (h = /*$t*/
      b[3]("femundfilou.cookie-consent.buttons.save") + "") && D(c, h);
    },
    i(b) {
      p || (w(d, b), p = !0);
    },
    o(b) {
      R(d, b), p = !1;
    },
    d(b) {
      b && (P(t), P(r), P(n), P(i), P(o)), d && d.d(b), y && y.d(), m = !1, j(_);
    }
  };
}
function kt(e) {
  let t, r = Ne(
    /*categories*/
    e[1]
  ), n = [];
  for (let i = 0; i < r.length; i += 1)
    n[i] = jt(Ut(e, r, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      t = _e();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      N(i, t, o);
    },
    p(i, o) {
      if (o & /*policies, categories, currentUserSelection, updateUserSelection*/
      99) {
        r = Ne(
          /*categories*/
          i[1]
        );
        let s;
        for (s = 0; s < r.length; s += 1) {
          const a = Ut(i, r, s);
          n[s] ? n[s].p(a, o) : (n[s] = jt(a), n[s].c(), n[s].m(t.parentNode, t));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = r.length;
      }
    },
    d(i) {
      i && P(t), nn(n, i);
    }
  };
}
function Ft(e) {
  let t, r, n, i, o, s, a, f, l, u, h, c, p, m, _ = (
    /*policy*/
    e[17].label + ""
  ), E, d, y, b, v = (
    /*policy*/
    e[17].description + ""
  ), g, I, ae;
  return {
    c() {
      t = B("div"), r = B("div"), n = B("input"), a = M(), f = B("label"), h = M(), c = B("div"), p = B("label"), m = B("strong"), E = L(_), y = M(), b = B("p"), g = L(v), H(n, "data-policy-id", i = /*policy*/
      e[17].id), H(n, "class", "cc__policy__switchinput svelte-1yokycz"), H(n, "id", o = `ccp--${/*policy*/
      e[17].id}`), H(n, "type", "checkbox"), n.checked = s = /*currentUserSelection*/
      e[5].indexOf(
        /*policy*/
        e[17].id
      ) > -1, H(f, "class", "cc__policy__switchlabel svelte-1yokycz"), H(f, "for", l = `ccp--${/*policy*/
      e[17].id}`), H(f, "aria-label", u = /*policy*/
      e[17].label), H(r, "class", "cc__policy__switch svelte-1yokycz"), H(p, "for", d = `ccp--${/*policy*/
      e[17].id}`), H(p, "class", "svelte-1yokycz"), H(c, "class", "cc__policy__content svelte-1yokycz"), H(t, "class", "cc__policy svelte-1yokycz");
    },
    m(U, k) {
      N(U, t, k), x(t, r), x(r, n), x(r, a), x(r, f), x(t, h), x(t, c), x(c, p), x(p, m), x(m, E), x(c, y), x(c, b), x(b, g), I || (ae = J(
        n,
        "input",
        /*updateUserSelection*/
        e[6]
      ), I = !0);
    },
    p(U, k) {
      k & /*policies, categories*/
      3 && i !== (i = /*policy*/
      U[17].id) && H(n, "data-policy-id", i), k & /*policies, categories*/
      3 && o !== (o = `ccp--${/*policy*/
      U[17].id}`) && H(n, "id", o), k & /*policies, categories*/
      3 && s !== (s = /*currentUserSelection*/
      U[5].indexOf(
        /*policy*/
        U[17].id
      ) > -1) && (n.checked = s), k & /*policies, categories*/
      3 && l !== (l = `ccp--${/*policy*/
      U[17].id}`) && H(f, "for", l), k & /*policies, categories*/
      3 && u !== (u = /*policy*/
      U[17].label) && H(f, "aria-label", u), k & /*policies, categories*/
      3 && _ !== (_ = /*policy*/
      U[17].label + "") && D(E, _), k & /*policies, categories*/
      3 && d !== (d = `ccp--${/*policy*/
      U[17].id}`) && H(p, "for", d), k & /*policies, categories*/
      3 && v !== (v = /*policy*/
      U[17].description + "") && D(g, v);
    },
    d(U) {
      U && P(t), I = !1, ae();
    }
  };
}
function jt(e) {
  let t, r, n, i = (
    /*category*/
    e[14].label + ""
  ), o, s, a, f = (
    /*category*/
    e[14].description + ""
  ), l, u, h;
  function c(..._) {
    return (
      /*func*/
      e[11](
        /*category*/
        e[14],
        ..._
      )
    );
  }
  let p = Ne(
    /*policies*/
    e[0].filter(c)
  ), m = [];
  for (let _ = 0; _ < p.length; _ += 1)
    m[_] = Ft(Dt(e, p, _));
  return {
    c() {
      t = B("div"), r = B("p"), n = B("strong"), o = L(i), s = M(), a = B("p"), l = L(f), u = M();
      for (let _ = 0; _ < m.length; _ += 1)
        m[_].c();
      h = M(), H(t, "class", "cc__category svelte-1yokycz");
    },
    m(_, E) {
      N(_, t, E), x(t, r), x(r, n), x(n, o), x(t, s), x(t, a), x(a, l), x(t, u);
      for (let d = 0; d < m.length; d += 1)
        m[d] && m[d].m(t, null);
      x(t, h);
    },
    p(_, E) {
      if (e = _, E & /*categories*/
      2 && i !== (i = /*category*/
      e[14].label + "") && D(o, i), E & /*categories*/
      2 && f !== (f = /*category*/
      e[14].description + "") && D(l, f), E & /*policies, categories, currentUserSelection, updateUserSelection*/
      99) {
        p = Ne(
          /*policies*/
          e[0].filter(c)
        );
        let d;
        for (d = 0; d < p.length; d += 1) {
          const y = Dt(e, p, d);
          m[d] ? m[d].p(y, E) : (m[d] = Ft(y), m[d].c(), m[d].m(t, h));
        }
        for (; d < m.length; d += 1)
          m[d].d(1);
        m.length = p.length;
      }
    },
    d(_) {
      _ && P(t), nn(m, _);
    }
  };
}
function Qi(e) {
  let t, r, n = !/*$isLoading*/
  e[2] && Gt(e);
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(i, o) {
      n && n.m(i, o), N(i, t, o), r = !0;
    },
    p(i, [o]) {
      /*$isLoading*/
      i[2] ? n && (be(), R(n, 1, 1, () => {
        n = null;
      }), ge()) : n ? (n.p(i, o), o & /*$isLoading*/
      4 && w(n, 1)) : (n = Gt(i), n.c(), w(n, 1), n.m(t.parentNode, t));
    },
    i(i) {
      r || (w(n), r = !0);
    },
    o(i) {
      R(n), r = !1;
    },
    d(i) {
      i && P(t), n && n.d(i);
    }
  };
}
function Yi(e, t, r) {
  let n, i;
  K(e, Y, (d) => r(2, n = d)), K(e, pt, (d) => r(3, i = d));
  let { $$slots: o = {}, $$scope: s } = t;
  const a = on();
  let { policies: f } = t, { categories: l } = t, { requiredCategories: u } = t, { userSelection: h } = t, c = !h || (h == null ? void 0 : h.length) === 0 ? [...u] : [...h], p = (d) => {
    const y = d.target.checked, b = d.target.dataset.policyId;
    y ? c.push(b) : c.splice(c.indexOf(b), 1);
  };
  const m = (d, y) => y.category === d.id, _ = () => {
    a("openStart");
  }, E = () => {
    a("saveSelection", c);
  };
  return e.$$set = (d) => {
    "policies" in d && r(0, f = d.policies), "categories" in d && r(1, l = d.categories), "requiredCategories" in d && r(7, u = d.requiredCategories), "userSelection" in d && r(8, h = d.userSelection), "$$scope" in d && r(9, s = d.$$scope);
  }, [
    f,
    l,
    n,
    i,
    a,
    c,
    p,
    u,
    h,
    s,
    o,
    m,
    _,
    E
  ];
}
class Ki extends ut {
  constructor(t) {
    super(), lt(this, t, Yi, Qi, Me, {
      policies: 0,
      categories: 1,
      requiredCategories: 7,
      userSelection: 8
    });
  }
}
function Vt(e) {
  let t, r, n = (
    /*modalOpen*/
    e[3] && $t(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(i, o) {
      n && n.m(i, o), N(i, t, o), r = !0;
    },
    p(i, o) {
      /*modalOpen*/
      i[3] ? n ? (n.p(i, o), o & /*modalOpen*/
      8 && w(n, 1)) : (n = $t(i), n.c(), w(n, 1), n.m(t.parentNode, t)) : n && (be(), R(n, 1, 1, () => {
        n = null;
      }), ge());
    },
    i(i) {
      r || (w(n), r = !0);
    },
    o(i) {
      R(n), r = !1;
    },
    d(i) {
      i && P(t), n && n.d(i);
    }
  };
}
function $t(e) {
  let t, r, n, i, o, s, a, f = (
    /*options*/
    e[0].blockPage && Xt()
  );
  const l = [to, eo], u = [];
  function h(c, p) {
    return (
      /*settingsOpen*/
      c[4] ? 0 : 1
    );
  }
  return n = h(e), i = u[n] = l[n](e), {
    c() {
      f && f.c(), t = M(), r = B("div"), i.c(), H(r, "class", o = "cookie-consent__inner " + /*options*/
      (e[0].position === "center" ? "cookie-consent__inner--centered" : "") + " svelte-1imznib");
    },
    m(c, p) {
      f && f.m(c, p), N(c, t, p), N(c, r, p), u[n].m(r, null), a = !0;
    },
    p(c, p) {
      /*options*/
      c[0].blockPage ? f || (f = Xt(), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null);
      let m = n;
      n = h(c), n === m ? u[n].p(c, p) : (be(), R(u[m], 1, 1, () => {
        u[m] = null;
      }), ge(), i = u[n], i ? i.p(c, p) : (i = u[n] = l[n](c), i.c()), w(i, 1), i.m(r, null)), (!a || p & /*options*/
      1 && o !== (o = "cookie-consent__inner " + /*options*/
      (c[0].position === "center" ? "cookie-consent__inner--centered" : "") + " svelte-1imznib")) && H(r, "class", o);
    },
    i(c) {
      a || (w(i), c && me(() => {
        a && (s || (s = Et(r, Mt, { duration: 200, y: 100 }, !0)), s.run(1));
      }), a = !0);
    },
    o(c) {
      R(i), c && (s || (s = Et(r, Mt, { duration: 200, y: 100 }, !1)), s.run(0)), a = !1;
    },
    d(c) {
      c && (P(t), P(r)), f && f.d(c), u[n].d(), c && s && s.end();
    }
  };
}
function Xt(e) {
  let t;
  return {
    c() {
      t = B("div"), H(t, "class", "cookie-consent__inner__background svelte-1imznib");
    },
    m(r, n) {
      N(r, t, n);
    },
    d(r) {
      r && P(t);
    }
  };
}
function eo(e) {
  let t, r;
  return t = new Ji({
    props: {
      translation: (
        /*translation*/
        e[8]
      ),
      $$slots: { default: [no] },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "acceptAll",
    /*acceptAll*/
    e[10]
  ), t.$on(
    "acceptRequired",
    /*acceptRequired*/
    e[11]
  ), t.$on(
    "openSettings",
    /*openSettings*/
    e[13]
  ), {
    c() {
      an(t.$$.fragment);
    },
    m(n, i) {
      st(t, n, i), r = !0;
    },
    p(n, i) {
      const o = {};
      i & /*$$scope, $t*/
      262272 && (o.$$scope = { dirty: i, ctx: n }), t.$set(o);
    },
    i(n) {
      r || (w(t.$$.fragment, n), r = !0);
    },
    o(n) {
      R(t.$$.fragment, n), r = !1;
    },
    d(n) {
      at(t, n);
    }
  };
}
function to(e) {
  let t, r;
  return t = new Ki({
    props: {
      categories: (
        /*categories*/
        e[2]
      ),
      policies: (
        /*policies*/
        e[1]
      ),
      requiredCategories: (
        /*requiredCategories*/
        e[9]
      ),
      userSelection: (
        /*userSelection*/
        e[5]
      ),
      $$slots: { default: [ro] },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "openStart",
    /*openStart*/
    e[14]
  ), t.$on(
    "saveSelection",
    /*saveSelection*/
    e[12]
  ), {
    c() {
      an(t.$$.fragment);
    },
    m(n, i) {
      st(t, n, i), r = !0;
    },
    p(n, i) {
      const o = {};
      i & /*categories*/
      4 && (o.categories = /*categories*/
      n[2]), i & /*policies*/
      2 && (o.policies = /*policies*/
      n[1]), i & /*userSelection*/
      32 && (o.userSelection = /*userSelection*/
      n[5]), i & /*$$scope, $t*/
      262272 && (o.$$scope = { dirty: i, ctx: n }), t.$set(o);
    },
    i(n) {
      r || (w(t.$$.fragment, n), r = !0);
    },
    o(n) {
      R(t.$$.fragment, n), r = !1;
    },
    d(n) {
      at(t, n);
    }
  };
}
function no(e) {
  let t, r, n = (
    /*$t*/
    e[7]("femundfilou.cookie-consent.start.headline") + ""
  ), i, o, s, a = (
    /*$t*/
    e[7]("femundfilou.cookie-consent.start.text") + ""
  ), f;
  return {
    c() {
      t = B("p"), r = B("strong"), i = L(n), o = M(), s = B("p"), f = L(a), H(t, "class", "cc_title svelte-1imznib");
    },
    m(l, u) {
      N(l, t, u), x(t, r), x(r, i), N(l, o, u), N(l, s, u), x(s, f);
    },
    p(l, u) {
      u & /*$t*/
      128 && n !== (n = /*$t*/
      l[7]("femundfilou.cookie-consent.start.headline") + "") && D(i, n), u & /*$t*/
      128 && a !== (a = /*$t*/
      l[7]("femundfilou.cookie-consent.start.text") + "") && D(f, a);
    },
    d(l) {
      l && (P(t), P(o), P(s));
    }
  };
}
function ro(e) {
  let t, r, n = (
    /*$t*/
    e[7]("femundfilou.cookie-consent.settings.headline") + ""
  ), i, o, s, a = (
    /*$t*/
    e[7]("femundfilou.cookie-consent.settings.text") + ""
  ), f;
  return {
    c() {
      t = B("p"), r = B("strong"), i = L(n), o = M(), s = B("p"), f = L(a), H(t, "class", "cc_title svelte-1imznib");
    },
    m(l, u) {
      N(l, t, u), x(t, r), x(r, i), N(l, o, u), N(l, s, u), x(s, f);
    },
    p(l, u) {
      u & /*$t*/
      128 && n !== (n = /*$t*/
      l[7]("femundfilou.cookie-consent.settings.headline") + "") && D(i, n), u & /*$t*/
      128 && a !== (a = /*$t*/
      l[7]("femundfilou.cookie-consent.settings.text") + "") && D(f, a);
    },
    d(l) {
      l && (P(t), P(o), P(s));
    }
  };
}
function io(e) {
  let t, r, n = !/*$isLoading*/
  e[6] && Vt(e);
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(i, o) {
      n && n.m(i, o), N(i, t, o), r = !0;
    },
    p(i, [o]) {
      /*$isLoading*/
      i[6] ? n && (be(), R(n, 1, 1, () => {
        n = null;
      }), ge()) : n ? (n.p(i, o), o & /*$isLoading*/
      64 && w(n, 1)) : (n = Vt(i), n.c(), w(n, 1), n.m(t.parentNode, t));
    },
    i(i) {
      r || (w(n), r = !0);
    },
    o(i) {
      R(n), r = !1;
    },
    d(i) {
      i && P(t), n && n.d(i);
    }
  };
}
function oo(e, t, r) {
  let n, i;
  K(e, Y, (g) => r(6, n = g)), K(e, pt, (g) => r(7, i = g));
  let { options: o } = t, { policies: s } = t, { categories: a } = t, { translations: f } = t, l = !1, u = !1, h, c = a.filter((g) => s.filter((I) => I.category === g.id).length === 0).map((g) => g.id), p = [];
  try {
    if (!f)
      throw new Error("Cookie Consent: Translations missing.");
  } catch (g) {
    console.error(g.message);
  }
  let m = () => {
    Object.entries(f).forEach(([g, I]) => {
      Pn(g, I);
    }), Ti({
      fallbackLocale: "en",
      initialLocale: o.locale ?? "en"
    });
  }, _ = () => {
    r(3, l = !1), Te.set(o.cookieName, JSON.stringify(s.map((g) => g.id)), {
      expires: o.expires,
      sameSite: "Strict"
    }), location.reload();
  }, E = () => {
    r(3, l = !1), Te.set(o.cookieName, JSON.stringify([...c]), {
      expires: o.expires,
      sameSite: "Strict"
    });
  }, d = (g) => {
    const I = g.detail;
    Te.set(o.cookieName, JSON.stringify(I), {
      expires: o.expires,
      sameSite: "Strict"
    }), r(3, l = !1), location.reload();
  }, y = () => (r(3, l = !0), r(4, u = !0), !0), b = () => {
    r(3, l = !0), r(4, u = !1);
  }, v = () => {
    const g = Te.get(o.cookieName);
    return g ? JSON.parse(g) : null;
  };
  return qn(() => {
    l && o.blockPage ? document.body.classList.add("cc-open") : document.body.classList.remove("cc-open");
  }), window.CookieConsent = {
    policies: s.map((g) => g.id),
    getUserConsent: v,
    openSettings: y
  }, Zn(() => {
    f && (m(), r(5, p = v()), p || setTimeout(
      () => {
        r(3, l = !0);
      },
      400
    ));
  }), e.$$set = (g) => {
    "options" in g && r(0, o = g.options), "policies" in g && r(1, s = g.policies), "categories" in g && r(2, a = g.categories), "translations" in g && r(15, f = g.translations);
  }, [
    o,
    s,
    a,
    l,
    u,
    p,
    n,
    i,
    h,
    c,
    _,
    E,
    d,
    y,
    b,
    f
  ];
}
class so extends ut {
  constructor(t) {
    super(), lt(this, t, oo, io, Me, {
      options: 0,
      policies: 1,
      categories: 2,
      translations: 15
    });
  }
}
const W = document.getElementById("cookie-consent");
let Cn;
W && (Cn = new so({
  target: W,
  props: {
    options: ye(W.dataset.options, null, "options"),
    policies: ye(W.dataset.policies, [], "policies"),
    categories: ye(W.dataset.categories, [], "categories"),
    translations: ye(W.dataset.translations, [], "translations")
  }
}));
const lo = Cn;
export {
  lo as default
};
