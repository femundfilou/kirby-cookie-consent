(function(){"use strict";try{if(typeof document!="undefined"){var c=document.createElement("style");c.appendChild(document.createTextNode('.cc__main__content.svelte-1gq42t5.svelte-1gq42t5{padding:2em 0}.cc__category.svelte-1gq42t5+.cc__category.svelte-1gq42t5{margin-top:1em;padding-top:1em;border-top:1px solid var(--cc-secondary-color)}.cc__policy.svelte-1gq42t5.svelte-1gq42t5{font-size:.8em;padding-top:.8em;display:flex;align-items:flex-start;justify-content:flex-start}.cc__policy__switch.svelte-1gq42t5.svelte-1gq42t5{flex:0 0 4em;padding-top:.2em;display:flex}.cc__policy__content.svelte-1gq42t5.svelte-1gq42t5{flex:1}input[type=checkbox].cc__policy__switchinput.svelte-1gq42t5.svelte-1gq42t5{height:0;width:0;visibility:hidden}label.svelte-1gq42t5.svelte-1gq42t5{cursor:pointer}label.cc__policy__switchlabel.svelte-1gq42t5.svelte-1gq42t5{cursor:pointer;text-indent:-9999px;width:3em;height:1.5em;background:var(--cc-secondary-color);display:block;border-radius:100px;position:relative}label.cc__policy__switchlabel.svelte-1gq42t5.svelte-1gq42t5:after{content:"";position:absolute;top:.2em;left:.2em;width:1.1em;height:1.1em;background:var(--cc-background);border-radius:1.1em;transition:.3s}input.cc__policy__switchinput.svelte-1gq42t5:checked+label.cc__policy__switchlabel.svelte-1gq42t5{background:var(--cc-primary-color)}input.cc__policy__switchinput.svelte-1gq42t5:checked+label.cc__policy__switchlabel.svelte-1gq42t5:after{left:calc(100% - .2em);transform:translate(-100%)}label.cc__policy__switchlabel.svelte-1gq42t5.svelte-1gq42t5:active:after{width:2em}:root{--cc-primary-color:hsl(103, 88%, 47%);--cc-primary-color-invert:white;--cc-primary-color-dark:hsl(103, 88%, 34%);--cc-primary-color-dark-invert:white;--cc-secondary-color:lightgray;--cc-secondary-color-invert:black;--cc-secondary-color-dark:rgb(161, 160, 160);--cc-secondary-color-dark-invert:black;--cc-background:white;--cc-text:black;--cc-overlay-background:rgba(255, 255, 255, .5);--cc-font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--cc-font-size:14px}#cookie-consent{z-index:999}body.cc-open{height:100vh;overflow-y:hidden}.cc_title.svelte-1jpoucl{font-size:1.25em}.cookie-consent__inner__background.svelte-1jpoucl{display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:2;background-color:var(--cc-overlay-background)}.cookie-consent__inner.svelte-1jpoucl{position:fixed;z-index:3;bottom:2em;right:2em;width:100%;max-width:560px;max-height:100vh;overflow-y:scroll;padding:2em;font-family:var(--cc-font-family);font-size:var(--cc-font-size);background:var(--cc-background);border-radius:.2em;box-shadow:0 0 2.3em -.2em #0000004d;box-sizing:border-box}@media screen and (max-width: 560px){.cookie-consent__inner.svelte-1jpoucl{bottom:0;right:0}}.cookie-consent__inner.cookie-consent__inner--centered.svelte-1jpoucl{bottom:auto;right:auto;top:50%;left:50%;transform:translate(-50%,-50%)}.cc__main__header{padding-bottom:.5em}.cc__main__footer{padding-top:1em;display:grid;grid-template-columns:1fr 3fr;grid-template-rows:1fr;width:100%;grid-gap:.5em}.cc__button{appearance:none;background-color:var(--cc-secondary-color);border:1px solid var(--cc-secondary-color);color:var(--cc-secondary-color-invert);outline:none;padding:.5em 1em;border-radius:.2em;cursor:pointer;transition:all .15s ease-in;box-sizing:border-box;grid-row:span 1;font-family:var(--cc-font-family);font-size:.9em;display:block}button.cc__button:hover,button.cc__button:focus,button.cc__button:active,button.cc__button:visited{background-color:var(--cc-secondary-color-dark);border-color:var(--cc-secondary-color-dark)}button.cc__button.cc__button--accept:hover,button.cc__button.cc__button--accept:focus,button.cc__button.cc__button--accept:active,button.cc__button.cc__button--accept:visited{background-color:var(--cc-primary-color-dark);border-color:var(--cc-primary-color-dark)}button.cc__button.cc__button--settings{grid-column:1/3;background-color:transparent}button.cc__button.cc__button--decline{grid-column:1/2}button.cc__button.cc__button--accept{grid-column:2/3;background-color:var(--cc-primary-color);border-color:var(--cc-primary-color);color:var(--cc-primary-color-invert)}')),document.head.appendChild(c)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const ve = (e, t, r = "") => {
  try {
    return JSON.parse(e);
  } catch {
    return console.warn(`Cookie Consent: Error while parsing ${r || "json"}.`), t;
  }
};
function D() {
}
const xn = (e) => e;
function Sn(e, t) {
  for (const r in t)
    e[r] = t[r];
  return e;
}
function Ut(e) {
  return e();
}
function ct() {
  return /* @__PURE__ */ Object.create(null);
}
function j(e) {
  e.forEach(Ut);
}
function Oe(e) {
  return typeof e == "function";
}
function we(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Hn(e) {
  return Object.keys(e).length === 0;
}
function Gt(e, ...t) {
  if (e == null)
    return D;
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function Y(e, t, r) {
  e.$$.on_destroy.push(Gt(t, r));
}
function Dt(e, t, r, n) {
  if (e) {
    const i = kt(e, t, r, n);
    return e[0](i);
  }
}
function kt(e, t, r, n) {
  return e[1] && n ? Sn(r.ctx.slice(), e[1](n(t))) : r.ctx;
}
function Ft(e, t, r, n) {
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
function jt(e, t, r, n, i, o) {
  if (i) {
    const s = kt(t, r, n, o);
    e.p(s, i);
  }
}
function Vt(e) {
  if (e.ctx.length > 32) {
    const t = [], r = e.ctx.length / 32;
    for (let n = 0; n < r; n++)
      t[n] = -1;
    return t;
  }
  return -1;
}
const Xt = typeof window < "u";
let Tn = Xt ? () => window.performance.now() : () => Date.now(), tt = Xt ? (e) => requestAnimationFrame(e) : D;
const Z = /* @__PURE__ */ new Set();
function qt(e) {
  Z.forEach((t) => {
    t.c(e) || (Z.delete(t), t.f());
  }), Z.size !== 0 && tt(qt);
}
function Bn(e) {
  let t;
  return Z.size === 0 && tt(qt), {
    promise: new Promise((r) => {
      Z.add(t = { c: e, f: r });
    }),
    abort() {
      Z.delete(t);
    }
  };
}
function x(e, t) {
  e.appendChild(t);
}
function $t(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && t.host ? t : e.ownerDocument;
}
function An(e) {
  const t = B("style");
  return Nn($t(e), t), t.sheet;
}
function Nn(e, t) {
  return x(e.head || e, t), t.sheet;
}
function C(e, t, r) {
  e.insertBefore(t, r || null);
}
function N(e) {
  e.parentNode.removeChild(e);
}
function zt(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function B(e) {
  return document.createElement(e);
}
function w(e) {
  return document.createTextNode(e);
}
function L() {
  return w(" ");
}
function pe() {
  return w("");
}
function J(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function y(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function In(e) {
  return Array.from(e.childNodes);
}
function G(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function Wt(e, t, { bubbles: r = !1, cancelable: n = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, r, n, t), i;
}
const Ie = /* @__PURE__ */ new Map();
let Ce = 0;
function Cn(e) {
  let t = 5381, r = e.length;
  for (; r--; )
    t = (t << 5) - t ^ e.charCodeAt(r);
  return t >>> 0;
}
function Pn(e, t) {
  const r = { stylesheet: An(t), rules: {} };
  return Ie.set(e, r), r;
}
function ft(e, t, r, n, i, o, s, a = 0) {
  const h = 16.666 / n;
  let l = `{
`;
  for (let S = 0; S <= 1; S += h) {
    const p = t + (r - t) * o(S);
    l += S * 100 + `%{${s(p, 1 - p)}}
`;
  }
  const u = l + `100% {${s(r, 1 - r)}}
}`, f = `__svelte_${Cn(u)}_${a}`, c = $t(e), { stylesheet: m, rules: b } = Ie.get(c) || Pn(c, e);
  b[f] || (b[f] = !0, m.insertRule(`@keyframes ${f} ${u}`, m.cssRules.length));
  const _ = e.style.animation || "";
  return e.style.animation = `${_ ? `${_}, ` : ""}${f} ${n}ms linear ${i}ms 1 both`, Ce += 1, f;
}
function On(e, t) {
  const r = (e.style.animation || "").split(", "), n = r.filter(
    t ? (o) => o.indexOf(t) < 0 : (o) => o.indexOf("__svelte") === -1
  ), i = r.length - n.length;
  i && (e.style.animation = n.join(", "), Ce -= i, Ce || wn());
}
function wn() {
  tt(() => {
    Ce || (Ie.forEach((e) => {
      const { ownerNode: t } = e.stylesheet;
      t && N(t);
    }), Ie.clear());
  });
}
let he;
function ue(e) {
  he = e;
}
function nt() {
  if (!he)
    throw new Error("Function called outside component initialization");
  return he;
}
function Ln(e) {
  nt().$$.on_mount.push(e);
}
function Mn(e) {
  nt().$$.after_update.push(e);
}
function Zt() {
  const e = nt();
  return (t, r, { cancelable: n = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const o = Wt(t, r, { cancelable: n });
      return i.slice().forEach((s) => {
        s.call(e, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const ae = [], mt = [], He = [], pt = [], Rn = Promise.resolve();
let qe = !1;
function Un() {
  qe || (qe = !0, Rn.then(Jt));
}
function ce(e) {
  He.push(e);
}
const Ge = /* @__PURE__ */ new Set();
let Ee = 0;
function Jt() {
  const e = he;
  do {
    for (; Ee < ae.length; ) {
      const t = ae[Ee];
      Ee++, ue(t), Gn(t.$$);
    }
    for (ue(null), ae.length = 0, Ee = 0; mt.length; )
      mt.pop()();
    for (let t = 0; t < He.length; t += 1) {
      const r = He[t];
      Ge.has(r) || (Ge.add(r), r());
    }
    He.length = 0;
  } while (ae.length);
  for (; pt.length; )
    pt.pop()();
  qe = !1, Ge.clear(), ue(e);
}
function Gn(e) {
  if (e.fragment !== null) {
    e.update(), j(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ce);
  }
}
let oe;
function Dn() {
  return oe || (oe = Promise.resolve(), oe.then(() => {
    oe = null;
  })), oe;
}
function De(e, t, r) {
  e.dispatchEvent(Wt(`${t ? "intro" : "outro"}${r}`));
}
const Te = /* @__PURE__ */ new Set();
let F;
function be() {
  F = {
    r: 0,
    c: [],
    p: F
  };
}
function de() {
  F.r || j(F.c), F = F.p;
}
function P(e, t) {
  e && e.i && (Te.delete(e), e.i(t));
}
function R(e, t, r, n) {
  if (e && e.o) {
    if (Te.has(e))
      return;
    Te.add(e), F.c.push(() => {
      Te.delete(e), n && (r && e.d(1), n());
    }), e.o(t);
  } else
    n && n();
}
const kn = { duration: 0 };
function bt(e, t, r, n) {
  let i = t(e, r), o = n ? 0 : 1, s = null, a = null, h = null;
  function l() {
    h && On(e, h);
  }
  function u(c, m) {
    const b = c.b - o;
    return m *= Math.abs(b), {
      a: o,
      b: c.b,
      d: b,
      duration: m,
      start: c.start,
      end: c.start + m,
      group: c.group
    };
  }
  function f(c) {
    const { delay: m = 0, duration: b = 300, easing: _ = xn, tick: S = D, css: p } = i || kn, E = {
      start: Tn() + m,
      b: c
    };
    c || (E.group = F, F.r += 1), s || a ? a = E : (p && (l(), h = ft(e, o, c, b, m, _, p)), c && S(0, 1), s = u(E, b), ce(() => De(e, c, "start")), Bn((d) => {
      if (a && d > a.start && (s = u(a, b), a = null, De(e, s.b, "start"), p && (l(), h = ft(e, o, s.b, s.duration, 0, _, i.css))), s) {
        if (d >= s.end)
          S(o = s.b, 1 - o), De(e, s.b, "end"), a || (s.b ? l() : --s.group.r || j(s.group.c)), s = null;
        else if (d >= s.start) {
          const v = d - s.start;
          o = s.a + s.d * _(v / s.duration), S(o, 1 - o);
        }
      }
      return !!(s || a);
    }));
  }
  return {
    run(c) {
      Oe(i) ? Dn().then(() => {
        i = i(), f(c);
      }) : f(c);
    },
    end() {
      l(), s = a = null;
    }
  };
}
function Qt(e) {
  e && e.c();
}
function rt(e, t, r, n) {
  const { fragment: i, after_update: o } = e.$$;
  i && i.m(t, r), n || ce(() => {
    const s = e.$$.on_mount.map(Ut).filter(Oe);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : j(s), e.$$.on_mount = [];
  }), o.forEach(ce);
}
function it(e, t) {
  const r = e.$$;
  r.fragment !== null && (j(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Fn(e, t) {
  e.$$.dirty[0] === -1 && (ae.push(e), Un(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ot(e, t, r, n, i, o, s, a = [-1]) {
  const h = he;
  ue(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: D,
    not_equal: i,
    bound: ct(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (h ? h.$$.context : [])),
    callbacks: ct(),
    dirty: a,
    skip_bound: !1,
    root: t.target || h.$$.root
  };
  s && s(l.root);
  let u = !1;
  if (l.ctx = r ? r(e, t.props || {}, (f, c, ...m) => {
    const b = m.length ? m[0] : c;
    return l.ctx && i(l.ctx[f], l.ctx[f] = b) && (!l.skip_bound && l.bound[f] && l.bound[f](b), u && Fn(e, f)), c;
  }) : [], l.update(), u = !0, j(l.before_update), l.fragment = n ? n(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = In(t.target);
      l.fragment && l.fragment.l(f), f.forEach(N);
    } else
      l.fragment && l.fragment.c();
    t.intro && P(e.$$.fragment), rt(e, t.target, t.anchor, t.customElement), Jt();
  }
  ue(h);
}
class st {
  $destroy() {
    it(this, 1), this.$destroy = D;
  }
  $on(t, r) {
    if (!Oe(r))
      return D;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(r), () => {
      const i = n.indexOf(r);
      i !== -1 && n.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !Hn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const z = [];
function jn(e, t) {
  return {
    subscribe: Le(e, t).subscribe
  };
}
function Le(e, t = D) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function i(a) {
    if (we(e, a) && (e = a, r)) {
      const h = !z.length;
      for (const l of n)
        l[1](), z.push(l, e);
      if (h) {
        for (let l = 0; l < z.length; l += 2)
          z[l][0](z[l + 1]);
        z.length = 0;
      }
    }
  }
  function o(a) {
    i(a(e));
  }
  function s(a, h = D) {
    const l = [a, h];
    return n.add(l), n.size === 1 && (r = t(i) || D), a(e), () => {
      n.delete(l), n.size === 0 && (r(), r = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function re(e, t, r) {
  const n = !Array.isArray(e), i = n ? [e] : e, o = t.length < 2;
  return jn(r, (s) => {
    let a = !1;
    const h = [];
    let l = 0, u = D;
    const f = () => {
      if (l)
        return;
      u();
      const m = t(n ? h[0] : h, s);
      o ? s(m) : u = Oe(m) ? m : D;
    }, c = i.map((m, b) => Gt(m, (_) => {
      h[b] = _, l &= ~(1 << b), a && f();
    }, () => {
      l |= 1 << b;
    }));
    return a = !0, f(), function() {
      j(c), u();
    };
  });
}
var Vn = function(t) {
  return Xn(t) && !qn(t);
};
function Xn(e) {
  return !!e && typeof e == "object";
}
function qn(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Wn(e);
}
var $n = typeof Symbol == "function" && Symbol.for, zn = $n ? Symbol.for("react.element") : 60103;
function Wn(e) {
  return e.$$typeof === zn;
}
function Zn(e) {
  return Array.isArray(e) ? [] : {};
}
function fe(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? K(Zn(e), e, t) : e;
}
function Jn(e, t, r) {
  return e.concat(t).map(function(n) {
    return fe(n, r);
  });
}
function Qn(e, t) {
  if (!t.customMerge)
    return K;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : K;
}
function Yn(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return e.propertyIsEnumerable(t);
  }) : [];
}
function dt(e) {
  return Object.keys(e).concat(Yn(e));
}
function Yt(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Kn(e, t) {
  return Yt(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function er(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && dt(e).forEach(function(i) {
    n[i] = fe(e[i], r);
  }), dt(t).forEach(function(i) {
    Kn(e, i) || (Yt(e, i) && r.isMergeableObject(t[i]) ? n[i] = Qn(i, r)(e[i], t[i], r) : n[i] = fe(t[i], r));
  }), n;
}
function K(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Jn, r.isMergeableObject = r.isMergeableObject || Vn, r.cloneUnlessOtherwiseSpecified = fe;
  var n = Array.isArray(t), i = Array.isArray(e), o = n === i;
  return o ? n ? r.arrayMerge(e, t, r) : er(e, t, r) : fe(t, r);
}
K.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, i) {
    return K(n, i, r);
  }, {});
};
var tr = K, nr = tr, $e = function(e, t) {
  return $e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, $e(e, t);
};
function Me(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  $e(e, t);
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
function ke(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var H;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(H || (H = {}));
var I;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(I || (I = {}));
var ee;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(ee || (ee = {}));
function _t(e) {
  return e.type === I.literal;
}
function rr(e) {
  return e.type === I.argument;
}
function Kt(e) {
  return e.type === I.number;
}
function en(e) {
  return e.type === I.date;
}
function tn(e) {
  return e.type === I.time;
}
function nn(e) {
  return e.type === I.select;
}
function rn(e) {
  return e.type === I.plural;
}
function ir(e) {
  return e.type === I.pound;
}
function on(e) {
  return e.type === I.tag;
}
function sn(e) {
  return !!(e && typeof e == "object" && e.type === ee.number);
}
function ze(e) {
  return !!(e && typeof e == "object" && e.type === ee.dateTime);
}
var an = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, or = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function sr(e) {
  var t = {};
  return e.replace(or, function(r) {
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
var ar = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function lr(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(ar).filter(function(c) {
    return c.length > 0;
  }), r = [], n = 0, i = t; n < i.length; n++) {
    var o = i[n], s = o.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = s[0], h = s.slice(1), l = 0, u = h; l < u.length; l++) {
      var f = u[l];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    r.push({ stem: a, options: h });
  }
  return r;
}
function ur(e) {
  return e.replace(/^(.*?)-/, "");
}
var gt = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ln = /^(@+)?(\+|#+)?[rs]?$/g, hr = /(\*)(0+)|(#+)(0+)|(0+)/g, un = /^(0+)$/;
function vt(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(ln, function(r, n, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : i === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function hn(e) {
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
function cr(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !un.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Et(e) {
  var t = {}, r = hn(e);
  return r || t;
}
function fr(e) {
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
        t.style = "unit", t.unit = ur(i.options[0]);
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
        t = A(A(A({}, t), { notation: "scientific" }), i.options.reduce(function(h, l) {
          return A(A({}, h), Et(l));
        }, {}));
        continue;
      case "engineering":
        t = A(A(A({}, t), { notation: "engineering" }), i.options.reduce(function(h, l) {
          return A(A({}, h), Et(l));
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
        i.options[0].replace(hr, function(h, l, u, f, c, m) {
          if (l)
            t.minimumIntegerDigits = u.length;
          else {
            if (f && c)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (un.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (gt.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(gt, function(h, l, u, f, c, m) {
        return u === "*" ? t.minimumFractionDigits = l.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : c && m ? (t.minimumFractionDigits = c.length, t.maximumFractionDigits = c.length + m.length) : (t.minimumFractionDigits = l.length, t.maximumFractionDigits = l.length), "";
      });
      var o = i.options[0];
      o === "w" ? t = A(A({}, t), { trailingZeroDisplay: "stripIfInteger" }) : o && (t = A(A({}, t), vt(o)));
      continue;
    }
    if (ln.test(i.stem)) {
      t = A(A({}, t), vt(i.stem));
      continue;
    }
    var s = hn(i.stem);
    s && (t = A(A({}, t), s));
    var a = cr(i.stem);
    a && (t = A(A({}, t), a));
  }
  return t;
}
var ye = {
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
function mr(e, t) {
  for (var r = "", n = 0; n < e.length; n++) {
    var i = e.charAt(n);
    if (i === "j") {
      for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i; )
        o++, n++;
      var s = 1 + (o & 1), a = o < 2 ? 1 : 3 + (o >> 1), h = "a", l = pr(t);
      for ((l == "H" || l == "k") && (a = 0); a-- > 0; )
        r += h;
      for (; s-- > 0; )
        r = l + r;
    } else
      i === "J" ? r += "H" : r += i;
  }
  return r;
}
function pr(e) {
  var t = e.hourCycle;
  if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t)
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
  var i = ye[n || ""] || ye[r || ""] || ye["".concat(r, "-001")] || ye["001"];
  return i[0];
}
var Fe, br = new RegExp("^".concat(an.source, "*")), dr = new RegExp("".concat(an.source, "*$"));
function T(e, t) {
  return { start: e, end: t };
}
var _r = !!String.prototype.startsWith, gr = !!String.fromCodePoint, vr = !!Object.fromEntries, Er = !!String.prototype.codePointAt, yr = !!String.prototype.trimStart, xr = !!String.prototype.trimEnd, Sr = !!Number.isSafeInteger, Hr = Sr ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, We = !0;
try {
  var Tr = fn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  We = ((Fe = Tr.exec("a")) === null || Fe === void 0 ? void 0 : Fe[0]) === "a";
} catch {
  We = !1;
}
var yt = _r ? function(t, r, n) {
  return t.startsWith(r, n);
} : function(t, r, n) {
  return t.slice(n, n + r.length) === r;
}, Ze = gr ? String.fromCodePoint : function() {
  for (var t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  for (var n = "", i = t.length, o = 0, s; i > o; ) {
    if (s = t[o++], s > 1114111)
      throw RangeError(s + " is not a valid code point");
    n += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
  }
  return n;
}, xt = vr ? Object.fromEntries : function(t) {
  for (var r = {}, n = 0, i = t; n < i.length; n++) {
    var o = i[n], s = o[0], a = o[1];
    r[s] = a;
  }
  return r;
}, cn = Er ? function(t, r) {
  return t.codePointAt(r);
} : function(t, r) {
  var n = t.length;
  if (!(r < 0 || r >= n)) {
    var i = t.charCodeAt(r), o;
    return i < 55296 || i > 56319 || r + 1 === n || (o = t.charCodeAt(r + 1)) < 56320 || o > 57343 ? i : (i - 55296 << 10) + (o - 56320) + 65536;
  }
}, Br = yr ? function(t) {
  return t.trimStart();
} : function(t) {
  return t.replace(br, "");
}, Ar = xr ? function(t) {
  return t.trimEnd();
} : function(t) {
  return t.replace(dr, "");
};
function fn(e, t) {
  return new RegExp(e, t);
}
var Je;
if (We) {
  var St = fn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Je = function(t, r) {
    var n;
    St.lastIndex = r;
    var i = St.exec(t);
    return (n = i[1]) !== null && n !== void 0 ? n : "";
  };
} else
  Je = function(t, r) {
    for (var n = []; ; ) {
      var i = cn(t, r);
      if (i === void 0 || mn(i) || Pr(i))
        break;
      n.push(i), r += i >= 65536 ? 2 : 1;
    }
    return Ze.apply(void 0, n);
  };
var Nr = function() {
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
            type: I.pound,
            location: T(a, this.clonePosition())
          });
        } else if (o === 60 && !this.ignoreTag && this.peek() === 47) {
          if (n)
            break;
          return this.error(H.UNMATCHED_CLOSING_TAG, T(this.clonePosition(), this.clonePosition()));
        } else if (o === 60 && !this.ignoreTag && Qe(this.peek() || 0)) {
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
          type: I.literal,
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
        if (this.isEOF() || !Qe(this.char()))
          return this.error(H.INVALID_TAG, T(a, this.clonePosition()));
        var h = this.clonePosition(), l = this.parseTagName();
        return i !== l ? this.error(H.UNMATCHED_CLOSING_TAG, T(h, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
          val: {
            type: I.tag,
            value: i,
            children: s,
            location: T(n, this.clonePosition())
          },
          err: null
        } : this.error(H.INVALID_TAG, T(a, this.clonePosition())));
      } else
        return this.error(H.UNCLOSED_TAG, T(n, this.clonePosition()));
    } else
      return this.error(H.INVALID_TAG, T(n, this.clonePosition()));
  }, e.prototype.parseTagName = function() {
    var t = this.offset();
    for (this.bump(); !this.isEOF() && Cr(this.char()); )
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
    var h = T(n, this.clonePosition());
    return {
      val: { type: I.literal, value: i, location: h },
      err: null
    };
  }, e.prototype.tryParseLeftAngleBracket = function() {
    return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Ir(this.peek() || 0)) ? (this.bump(), "<") : null;
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
    return Ze.apply(void 0, r);
  }, e.prototype.tryParseUnquoted = function(t, r) {
    if (this.isEOF())
      return null;
    var n = this.char();
    return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), Ze(n));
  }, e.prototype.parseArgument = function(t, r) {
    var n = this.clonePosition();
    if (this.bump(), this.bumpSpace(), this.isEOF())
      return this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, T(n, this.clonePosition()));
    if (this.char() === 125)
      return this.bump(), this.error(H.EMPTY_ARGUMENT, T(n, this.clonePosition()));
    var i = this.parseIdentifierIfPossible().value;
    if (!i)
      return this.error(H.MALFORMED_ARGUMENT, T(n, this.clonePosition()));
    if (this.bumpSpace(), this.isEOF())
      return this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, T(n, this.clonePosition()));
    switch (this.char()) {
      case 125:
        return this.bump(), {
          val: {
            type: I.argument,
            value: i,
            location: T(n, this.clonePosition())
          },
          err: null
        };
      case 44:
        return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, T(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
      default:
        return this.error(H.MALFORMED_ARGUMENT, T(n, this.clonePosition()));
    }
  }, e.prototype.parseIdentifierIfPossible = function() {
    var t = this.clonePosition(), r = this.offset(), n = Je(this.message, r), i = r + n.length;
    this.bumpTo(i);
    var o = this.clonePosition(), s = T(t, o);
    return { value: n, location: s };
  }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
    var o, s = this.clonePosition(), a = this.parseIdentifierIfPossible().value, h = this.clonePosition();
    switch (a) {
      case "":
        return this.error(H.EXPECT_ARGUMENT_TYPE, T(s, h));
      case "number":
      case "date":
      case "time": {
        this.bumpSpace();
        var l = null;
        if (this.bumpIf(",")) {
          this.bumpSpace();
          var u = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
          if (f.err)
            return f;
          var c = Ar(f.val);
          if (c.length === 0)
            return this.error(H.EXPECT_ARGUMENT_STYLE, T(this.clonePosition(), this.clonePosition()));
          var m = T(u, this.clonePosition());
          l = { style: c, styleLocation: m };
        }
        var b = this.tryParseArgumentClose(i);
        if (b.err)
          return b;
        var _ = T(i, this.clonePosition());
        if (l && yt(l == null ? void 0 : l.style, "::", 0)) {
          var S = Br(l.style.slice(2));
          if (a === "number") {
            var f = this.parseNumberSkeletonFromString(S, l.styleLocation);
            return f.err ? f : {
              val: { type: I.number, value: n, location: _, style: f.val },
              err: null
            };
          } else {
            if (S.length === 0)
              return this.error(H.EXPECT_DATE_TIME_SKELETON, _);
            var p = S;
            this.locale && (p = mr(S, this.locale));
            var c = {
              type: ee.dateTime,
              pattern: p,
              location: l.styleLocation,
              parsedOptions: this.shouldParseSkeletons ? sr(p) : {}
            }, E = a === "date" ? I.date : I.time;
            return {
              val: { type: E, value: n, location: _, style: c },
              err: null
            };
          }
        }
        return {
          val: {
            type: a === "number" ? I.number : a === "date" ? I.date : I.time,
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
        var d = this.clonePosition();
        if (this.bumpSpace(), !this.bumpIf(","))
          return this.error(H.EXPECT_SELECT_ARGUMENT_OPTIONS, T(d, A({}, d)));
        this.bumpSpace();
        var v = this.parseIdentifierIfPossible(), g = 0;
        if (a !== "select" && v.value === "offset") {
          if (!this.bumpIf(":"))
            return this.error(H.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, T(this.clonePosition(), this.clonePosition()));
          this.bumpSpace();
          var f = this.tryParseDecimalInteger(H.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, H.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
          if (f.err)
            return f;
          this.bumpSpace(), v = this.parseIdentifierIfPossible(), g = f.val;
        }
        var M = this.tryParsePluralOrSelectOptions(t, a, r, v);
        if (M.err)
          return M;
        var b = this.tryParseArgumentClose(i);
        if (b.err)
          return b;
        var q = T(i, this.clonePosition());
        return a === "select" ? {
          val: {
            type: I.select,
            value: n,
            options: xt(M.val),
            location: q
          },
          err: null
        } : {
          val: {
            type: I.plural,
            value: n,
            options: xt(M.val),
            offset: g,
            pluralType: a === "plural" ? "cardinal" : "ordinal",
            location: q
          },
          err: null
        };
      }
      default:
        return this.error(H.INVALID_ARGUMENT_TYPE, T(s, h));
    }
  }, e.prototype.tryParseArgumentClose = function(t) {
    return this.isEOF() || this.char() !== 125 ? this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, T(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
  }, e.prototype.parseSimpleArgStyleIfPossible = function() {
    for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
      var n = this.char();
      switch (n) {
        case 39: {
          this.bump();
          var i = this.clonePosition();
          if (!this.bumpUntil("'"))
            return this.error(H.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, T(i, this.clonePosition()));
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
      n = lr(t);
    } catch {
      return this.error(H.INVALID_NUMBER_SKELETON, r);
    }
    return {
      val: {
        type: ee.number,
        tokens: n,
        location: r,
        parsedOptions: this.shouldParseSkeletons ? fr(n) : {}
      },
      err: null
    };
  }, e.prototype.tryParsePluralOrSelectOptions = function(t, r, n, i) {
    for (var o, s = !1, a = [], h = /* @__PURE__ */ new Set(), l = i.value, u = i.location; ; ) {
      if (l.length === 0) {
        var f = this.clonePosition();
        if (r !== "select" && this.bumpIf("=")) {
          var c = this.tryParseDecimalInteger(H.EXPECT_PLURAL_ARGUMENT_SELECTOR, H.INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (c.err)
            return c;
          u = T(f, this.clonePosition()), l = this.message.slice(f.offset, this.offset());
        } else
          break;
      }
      if (h.has(l))
        return this.error(r === "select" ? H.DUPLICATE_SELECT_ARGUMENT_SELECTOR : H.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
      l === "other" && (s = !0), this.bumpSpace();
      var m = this.clonePosition();
      if (!this.bumpIf("{"))
        return this.error(r === "select" ? H.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : H.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, T(this.clonePosition(), this.clonePosition()));
      var b = this.parseMessage(t + 1, r, n);
      if (b.err)
        return b;
      var _ = this.tryParseArgumentClose(m);
      if (_.err)
        return _;
      a.push([
        l,
        {
          value: b.val,
          location: T(m, this.clonePosition())
        }
      ]), h.add(l), this.bumpSpace(), o = this.parseIdentifierIfPossible(), l = o.value, u = o.location;
    }
    return a.length === 0 ? this.error(r === "select" ? H.EXPECT_SELECT_ARGUMENT_SELECTOR : H.EXPECT_PLURAL_ARGUMENT_SELECTOR, T(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(H.MISSING_OTHER_CLAUSE, T(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
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
    var h = T(i, this.clonePosition());
    return o ? (s *= n, Hr(s) ? { val: s, err: null } : this.error(r, h)) : this.error(t, h);
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
    var r = cn(this.message, t);
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
    if (yt(this.message, t, this.offset())) {
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
    for (; !this.isEOF() && mn(this.char()); )
      this.bump();
  }, e.prototype.peek = function() {
    if (this.isEOF())
      return null;
    var t = this.char(), r = this.offset(), n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
    return n != null ? n : null;
  }, e;
}();
function Qe(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ir(e) {
  return Qe(e) || e === 47;
}
function Cr(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function mn(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Pr(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Ye(e) {
  e.forEach(function(t) {
    if (delete t.location, nn(t) || rn(t))
      for (var r in t.options)
        delete t.options[r].location, Ye(t.options[r].value);
    else
      Kt(t) && sn(t.style) || (en(t) || tn(t)) && ze(t.style) ? delete t.style.location : on(t) && Ye(t.children);
  });
}
function Or(e, t) {
  t === void 0 && (t = {}), t = A({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new Nr(e, t).parse();
  if (r.err) {
    var n = SyntaxError(H[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return t != null && t.captureLocation || Ye(r.val), r.val;
}
function je(e, t) {
  var r = t && t.cache ? t.cache : Gr, n = t && t.serializer ? t.serializer : Ur, i = t && t.strategy ? t.strategy : Lr;
  return i(e, {
    cache: r,
    serializer: n
  });
}
function wr(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function pn(e, t, r, n) {
  var i = wr(n) ? n : r(n), o = t.get(i);
  return typeof o > "u" && (o = e.call(this, n), t.set(i, o)), o;
}
function bn(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3), i = r(n), o = t.get(i);
  return typeof o > "u" && (o = e.apply(this, n), t.set(i, o)), o;
}
function at(e, t, r, n, i) {
  return r.bind(t, e, n, i);
}
function Lr(e, t) {
  var r = e.length === 1 ? pn : bn;
  return at(e, this, r, t.cache.create(), t.serializer);
}
function Mr(e, t) {
  return at(e, this, bn, t.cache.create(), t.serializer);
}
function Rr(e, t) {
  return at(e, this, pn, t.cache.create(), t.serializer);
}
var Ur = function() {
  return JSON.stringify(arguments);
};
function lt() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
lt.prototype.get = function(e) {
  return this.cache[e];
};
lt.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Gr = {
  create: function() {
    return new lt();
  }
}, Ve = {
  variadic: Mr,
  monadic: Rr
}, te;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(te || (te = {}));
var Re = function(e) {
  Me(t, e);
  function t(r, n, i) {
    var o = e.call(this, r) || this;
    return o.code = n, o.originalMessage = i, o;
  }
  return t.prototype.toString = function() {
    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
  }, t;
}(Error), Ht = function(e) {
  Me(t, e);
  function t(r, n, i, o) {
    return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), te.INVALID_VALUE, o) || this;
  }
  return t;
}(Re), Dr = function(e) {
  Me(t, e);
  function t(r, n, i) {
    return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), te.INVALID_VALUE, i) || this;
  }
  return t;
}(Re), kr = function(e) {
  Me(t, e);
  function t(r, n) {
    return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), te.MISSING_VALUE, n) || this;
  }
  return t;
}(Re), O;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(O || (O = {}));
function Fr(e) {
  return e.length < 2 ? e : e.reduce(function(t, r) {
    var n = t[t.length - 1];
    return !n || n.type !== O.literal || r.type !== O.literal ? t.push(r) : n.value += r.value, t;
  }, []);
}
function jr(e) {
  return typeof e == "function";
}
function Be(e, t, r, n, i, o, s) {
  if (e.length === 1 && _t(e[0]))
    return [
      {
        type: O.literal,
        value: e[0].value
      }
    ];
  for (var a = [], h = 0, l = e; h < l.length; h++) {
    var u = l[h];
    if (_t(u)) {
      a.push({
        type: O.literal,
        value: u.value
      });
      continue;
    }
    if (ir(u)) {
      typeof o == "number" && a.push({
        type: O.literal,
        value: r.getNumberFormat(t).format(o)
      });
      continue;
    }
    var f = u.value;
    if (!(i && f in i))
      throw new kr(f, s);
    var c = i[f];
    if (rr(u)) {
      (!c || typeof c == "string" || typeof c == "number") && (c = typeof c == "string" || typeof c == "number" ? String(c) : ""), a.push({
        type: typeof c == "string" ? O.literal : O.object,
        value: c
      });
      continue;
    }
    if (en(u)) {
      var m = typeof u.style == "string" ? n.date[u.style] : ze(u.style) ? u.style.parsedOptions : void 0;
      a.push({
        type: O.literal,
        value: r.getDateTimeFormat(t, m).format(c)
      });
      continue;
    }
    if (tn(u)) {
      var m = typeof u.style == "string" ? n.time[u.style] : ze(u.style) ? u.style.parsedOptions : n.time.medium;
      a.push({
        type: O.literal,
        value: r.getDateTimeFormat(t, m).format(c)
      });
      continue;
    }
    if (Kt(u)) {
      var m = typeof u.style == "string" ? n.number[u.style] : sn(u.style) ? u.style.parsedOptions : void 0;
      m && m.scale && (c = c * (m.scale || 1)), a.push({
        type: O.literal,
        value: r.getNumberFormat(t, m).format(c)
      });
      continue;
    }
    if (on(u)) {
      var b = u.children, _ = u.value, S = i[_];
      if (!jr(S))
        throw new Dr(_, "function", s);
      var p = Be(b, t, r, n, i, o), E = S(p.map(function(g) {
        return g.value;
      }));
      Array.isArray(E) || (E = [E]), a.push.apply(a, E.map(function(g) {
        return {
          type: typeof g == "string" ? O.literal : O.object,
          value: g
        };
      }));
    }
    if (nn(u)) {
      var d = u.options[c] || u.options.other;
      if (!d)
        throw new Ht(u.value, c, Object.keys(u.options), s);
      a.push.apply(a, Be(d.value, t, r, n, i));
      continue;
    }
    if (rn(u)) {
      var d = u.options["=".concat(c)];
      if (!d) {
        if (!Intl.PluralRules)
          throw new Re(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, te.MISSING_INTL_API, s);
        var v = r.getPluralRules(t, { type: u.pluralType }).select(c - (u.offset || 0));
        d = u.options[v] || u.options.other;
      }
      if (!d)
        throw new Ht(u.value, c, Object.keys(u.options), s);
      a.push.apply(a, Be(d.value, t, r, n, i, c - (u.offset || 0)));
      continue;
    }
  }
  return Fr(a);
}
function Vr(e, t) {
  return t ? A(A(A({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
    return r[n] = A(A({}, e[n]), t[n] || {}), r;
  }, {})) : e;
}
function Xr(e, t) {
  return t ? Object.keys(e).reduce(function(r, n) {
    return r[n] = Vr(e[n], t[n]), r;
  }, A({}, e)) : e;
}
function Xe(e) {
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
function qr(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: je(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, ke([void 0], r, !1)))();
    }, {
      cache: Xe(e.number),
      strategy: Ve.variadic
    }),
    getDateTimeFormat: je(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, ke([void 0], r, !1)))();
    }, {
      cache: Xe(e.dateTime),
      strategy: Ve.variadic
    }),
    getPluralRules: je(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, ke([void 0], r, !1)))();
    }, {
      cache: Xe(e.pluralRules),
      strategy: Ve.variadic
    })
  };
}
var $r = function() {
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
      var h = a.reduce(function(l, u) {
        return !l.length || u.type !== O.literal || typeof l[l.length - 1] != "string" ? l.push(u.value) : l[l.length - 1] += u.value, l;
      }, []);
      return h.length <= 1 ? h[0] || "" : h;
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
    this.formats = Xr(e.formats, n), this.formatters = i && i.formatters || qr(this.formatterCache);
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
  }, e.__parse = Or, e.formats = {
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
}();
const zr = $r, V = {}, Wr = (e, t, r) => r && (t in V || (V[t] = {}), e in V[t] || (V[t][e] = r), r), dn = (e, t) => {
  if (t == null)
    return;
  if (t in V && e in V[t])
    return V[t][e];
  const r = ge(t);
  for (let n = 0; n < r.length; n++) {
    const i = Zr(r[n], e);
    if (i)
      return Wr(e, t, i);
  }
};
let ut;
const _e = Le({});
function _n(e) {
  return e in ut;
}
function Zr(e, t) {
  if (!_n(e))
    return null;
  const r = function(n) {
    return ut[n] || null;
  }(e);
  return function(n, i) {
    if (i == null)
      return;
    if (i in n)
      return n[i];
    const o = i.split(".");
    let s = n;
    for (let a = 0; a < o.length; a++)
      if (typeof s == "object") {
        if (a > 0) {
          const h = o.slice(a, o.length).join(".");
          if (h in s) {
            s = s[h];
            break;
          }
        }
        s = s[o[a]];
      } else
        s = void 0;
    return s;
  }(r, t);
}
function gn(e, ...t) {
  delete V[e], _e.update((r) => (r[e] = nr.all([r[e] || {}, ...t]), r));
}
re([_e], ([e]) => Object.keys(e));
_e.subscribe((e) => ut = e);
const Ae = {};
function vn(e) {
  return Ae[e];
}
function Pe(e) {
  return e != null && ge(e).some((t) => {
    var r;
    return (r = vn(t)) === null || r === void 0 ? void 0 : r.size;
  });
}
function Jr(e, t) {
  return Promise.all(t.map((n) => (function(i, o) {
    Ae[i].delete(o), Ae[i].size === 0 && delete Ae[i];
  }(e, n), n().then((i) => i.default || i)))).then((n) => gn(e, ...n));
}
const se = {};
function En(e) {
  if (!Pe(e))
    return e in se ? se[e] : Promise.resolve();
  const t = function(r) {
    return ge(r).map((n) => {
      const i = vn(n);
      return [n, i ? [...i] : []];
    }).filter(([, n]) => n.length > 0);
  }(e);
  return se[e] = Promise.all(t.map(([r, n]) => Jr(r, n))).then(() => {
    if (Pe(e))
      return En(e);
    delete se[e];
  }), se[e];
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function $(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  }
  return r;
}
function Qr({ locale: e, id: t }) {
  console.warn(`[svelte-i18n] The message "${t}" was not found in "${ge(e).join('", "')}".${Pe(X()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`);
}
const le = { fallbackLocale: null, loadingDelay: 200, formats: { number: { scientific: { notation: "scientific" }, engineering: { notation: "engineering" }, compactLong: { notation: "compact", compactDisplay: "long" }, compactShort: { notation: "compact", compactDisplay: "short" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } }, warnOnMissingMessages: !0, handleMissingMessage: void 0, ignoreTag: !0 };
function ne() {
  return le;
}
function Yr(e) {
  const { formats: t } = e, r = $(e, ["formats"]), n = e.initialLocale || e.fallbackLocale;
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Qr : console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')), Object.assign(le, r, { initialLocale: n }), t && ("number" in t && Object.assign(le.formats.number, t.number), "date" in t && Object.assign(le.formats.date, t.date), "time" in t && Object.assign(le.formats.time, t.time)), ie.set(n);
}
const Q = Le(!1);
let Ke;
const Ne = Le(null);
function Tt(e) {
  return e.split("-").map((t, r, n) => n.slice(0, r + 1).join("-")).reverse();
}
function ge(e, t = ne().fallbackLocale) {
  const r = Tt(e);
  return t ? [.../* @__PURE__ */ new Set([...r, ...Tt(t)])] : r;
}
function X() {
  return Ke != null ? Ke : void 0;
}
Ne.subscribe((e) => {
  Ke = e != null ? e : void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const ie = Object.assign(Object.assign({}, Ne), { set: (e) => {
  if (e && function(t) {
    if (t == null)
      return;
    const r = ge(t);
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      if (_n(i))
        return i;
    }
  }(e) && Pe(e)) {
    const { loadingDelay: t } = ne();
    let r;
    return typeof window < "u" && X() != null && t ? r = window.setTimeout(() => Q.set(!0), t) : Q.set(!0), En(e).then(() => {
      Ne.set(e);
    }).finally(() => {
      clearTimeout(r), Q.set(!1);
    });
  }
  return Ne.set(e);
} }), Ue = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const n = JSON.stringify(r);
    return n in t ? t[n] : t[n] = e(r);
  };
}, me = (e, t) => {
  const { formats: r } = ne();
  if (e in r && t in r[e])
    return r[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, Kr = Ue((e) => {
  var { locale: t, format: r } = e, n = $(e, ["locale", "format"]);
  if (t == null)
    throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
  return r && (n = me("number", r)), new Intl.NumberFormat(t, n);
}), ei = Ue((e) => {
  var { locale: t, format: r } = e, n = $(e, ["locale", "format"]);
  if (t == null)
    throw new Error('[svelte-i18n] A "locale" must be set to format dates');
  return r ? n = me("date", r) : Object.keys(n).length === 0 && (n = me("date", "short")), new Intl.DateTimeFormat(t, n);
}), ti = Ue((e) => {
  var { locale: t, format: r } = e, n = $(e, ["locale", "format"]);
  if (t == null)
    throw new Error('[svelte-i18n] A "locale" must be set to format time values');
  return r ? n = me("time", r) : Object.keys(n).length === 0 && (n = me("time", "short")), new Intl.DateTimeFormat(t, n);
}), ni = (e = {}) => {
  var { locale: t = X() } = e, r = $(e, ["locale"]);
  return Kr(Object.assign({ locale: t }, r));
}, ri = (e = {}) => {
  var { locale: t = X() } = e, r = $(e, ["locale"]);
  return ei(Object.assign({ locale: t }, r));
}, ii = (e = {}) => {
  var { locale: t = X() } = e, r = $(e, ["locale"]);
  return ti(Object.assign({ locale: t }, r));
}, oi = Ue((e, t = X()) => new zr(e, t, ne().formats, { ignoreTag: ne().ignoreTag })), si = (e, t = {}) => {
  var r, n, i, o;
  let s = t;
  typeof e == "object" && (s = e, e = s.id);
  const { values: a, locale: h = X(), default: l } = s;
  if (h == null)
    throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
  let u = dn(e, h);
  if (u) {
    if (typeof u != "string")
      return console.warn(`[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof u}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`), u;
  } else
    u = (o = (i = (n = (r = ne()).handleMissingMessage) === null || n === void 0 ? void 0 : n.call(r, { locale: h, id: e, defaultValue: l })) !== null && i !== void 0 ? i : l) !== null && o !== void 0 ? o : e;
  if (!a)
    return u;
  let f = u;
  try {
    f = oi(u, h).format(a);
  } catch (c) {
    console.warn(`[svelte-i18n] Message "${e}" has syntax error:`, c.message);
  }
  return f;
}, ai = (e, t) => ii(t).format(e), li = (e, t) => ri(t).format(e), ui = (e, t) => ni(t).format(e), hi = (e, t = X()) => dn(e, t), ht = re([ie, _e], () => si);
re([ie], () => ai);
re([ie], () => li);
re([ie], () => ui);
re([ie, _e], () => hi);
function ci(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Bt(e, { delay: t = 0, duration: r = 400, easing: n = ci, x: i = 0, y: o = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(e), h = +a.opacity, l = a.transform === "none" ? "" : a.transform, u = h * (1 - s);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (f, c) => `
			transform: ${l} translate(${(1 - f) * i}px, ${(1 - f) * o}px);
			opacity: ${h - u * c}`
  };
}
/*! js-cookie v3.0.1 | MIT */
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      e[n] = r[n];
  }
  return e;
}
var fi = {
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
function et(e, t) {
  function r(i, o, s) {
    if (!(typeof document > "u")) {
      s = xe({}, t, s), typeof s.expires == "number" && (s.expires = new Date(Date.now() + s.expires * 864e5)), s.expires && (s.expires = s.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var a = "";
      for (var h in s)
        !s[h] || (a += "; " + h, s[h] !== !0 && (a += "=" + s[h].split(";")[0]));
      return document.cookie = i + "=" + e.write(o, i) + a;
    }
  }
  function n(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var o = document.cookie ? document.cookie.split("; ") : [], s = {}, a = 0; a < o.length; a++) {
        var h = o[a].split("="), l = h.slice(1).join("=");
        try {
          var u = decodeURIComponent(h[0]);
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
          xe({}, o, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return et(this.converter, xe({}, this.attributes, i));
      },
      withConverter: function(i) {
        return et(xe({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var Se = et(fi, { path: "/" });
function At(e) {
  let t, r, n, i, o = e[1]("femundfilou.cookie-consent.buttons.decline") + "", s, a, h, l = e[1]("femundfilou.cookie-consent.buttons.acceptall") + "", u, f, c, m = e[1]("femundfilou.cookie-consent.buttons.settings") + "", b, _, S, p;
  const E = e[4].default, d = Dt(E, e, e[3], null);
  return {
    c() {
      t = B("div"), d && d.c(), r = L(), n = B("div"), i = B("button"), s = w(o), a = L(), h = B("button"), u = w(l), f = L(), c = B("button"), b = w(m), y(t, "class", "cc__main__header"), y(i, "class", "cc__button cc__button--decline"), y(h, "class", "cc__button cc__button--accept"), y(c, "class", "cc__button cc__button--settings"), y(n, "class", "cc__main__footer");
    },
    m(v, g) {
      C(v, t, g), d && d.m(t, null), C(v, r, g), C(v, n, g), x(n, i), x(i, s), x(n, a), x(n, h), x(h, u), x(n, f), x(n, c), x(c, b), _ = !0, S || (p = [
        J(i, "click", e[5]),
        J(h, "click", e[6]),
        J(c, "click", e[7])
      ], S = !0);
    },
    p(v, g) {
      d && d.p && (!_ || g & 8) && jt(
        d,
        E,
        v,
        v[3],
        _ ? Ft(E, v[3], g, null) : Vt(v[3]),
        null
      ), (!_ || g & 2) && o !== (o = v[1]("femundfilou.cookie-consent.buttons.decline") + "") && G(s, o), (!_ || g & 2) && l !== (l = v[1]("femundfilou.cookie-consent.buttons.acceptall") + "") && G(u, l), (!_ || g & 2) && m !== (m = v[1]("femundfilou.cookie-consent.buttons.settings") + "") && G(b, m);
    },
    i(v) {
      _ || (P(d, v), _ = !0);
    },
    o(v) {
      R(d, v), _ = !1;
    },
    d(v) {
      v && N(t), d && d.d(v), v && N(r), v && N(n), S = !1, j(p);
    }
  };
}
function mi(e) {
  let t, r, n = !e[0] && At(e);
  return {
    c() {
      n && n.c(), t = pe();
    },
    m(i, o) {
      n && n.m(i, o), C(i, t, o), r = !0;
    },
    p(i, [o]) {
      i[0] ? n && (be(), R(n, 1, 1, () => {
        n = null;
      }), de()) : n ? (n.p(i, o), o & 1 && P(n, 1)) : (n = At(i), n.c(), P(n, 1), n.m(t.parentNode, t));
    },
    i(i) {
      r || (P(n), r = !0);
    },
    o(i) {
      R(n), r = !1;
    },
    d(i) {
      n && n.d(i), i && N(t);
    }
  };
}
function pi(e, t, r) {
  let n, i;
  Y(e, Q, (f) => r(0, n = f)), Y(e, ht, (f) => r(1, i = f));
  let { $$slots: o = {}, $$scope: s } = t;
  const a = Zt(), h = () => {
    a("acceptRequired");
  }, l = () => {
    a("acceptAll");
  }, u = () => {
    a("openSettings");
  };
  return e.$$set = (f) => {
    "$$scope" in f && r(3, s = f.$$scope);
  }, [
    n,
    i,
    a,
    s,
    o,
    h,
    l,
    u
  ];
}
class bi extends st {
  constructor(t) {
    super(), ot(this, t, pi, mi, we, {});
  }
}
function Nt(e, t, r) {
  const n = e.slice();
  return n[14] = t[r], n;
}
function It(e, t, r) {
  const n = e.slice();
  return n[17] = t[r], n;
}
function Ct(e) {
  let t, r, n, i, o, s, a = e[3]("femundfilou.cookie-consent.buttons.cancel") + "", h, l, u, f = e[3]("femundfilou.cookie-consent.buttons.save") + "", c, m, b, _;
  const S = e[10].default, p = Dt(S, e, e[9], null);
  let E = e[1] && Pt(e);
  return {
    c() {
      t = B("div"), p && p.c(), r = L(), n = B("div"), E && E.c(), i = L(), o = B("div"), s = B("button"), h = w(a), l = L(), u = B("button"), c = w(f), y(t, "class", "cc__main__header svelte-1gq42t5"), y(n, "class", "cc__main__content svelte-1gq42t5"), y(s, "class", "cc__button cc__button--decline svelte-1gq42t5"), y(u, "class", "cc__button cc__button--accept svelte-1gq42t5"), y(o, "class", "cc__main__footer svelte-1gq42t5");
    },
    m(d, v) {
      C(d, t, v), p && p.m(t, null), C(d, r, v), C(d, n, v), E && E.m(n, null), C(d, i, v), C(d, o, v), x(o, s), x(s, h), x(o, l), x(o, u), x(u, c), m = !0, b || (_ = [
        J(s, "click", e[12]),
        J(u, "click", e[13])
      ], b = !0);
    },
    p(d, v) {
      p && p.p && (!m || v & 512) && jt(
        p,
        S,
        d,
        d[9],
        m ? Ft(S, d[9], v, null) : Vt(d[9]),
        null
      ), d[1] ? E ? E.p(d, v) : (E = Pt(d), E.c(), E.m(n, null)) : E && (E.d(1), E = null), (!m || v & 8) && a !== (a = d[3]("femundfilou.cookie-consent.buttons.cancel") + "") && G(h, a), (!m || v & 8) && f !== (f = d[3]("femundfilou.cookie-consent.buttons.save") + "") && G(c, f);
    },
    i(d) {
      m || (P(p, d), m = !0);
    },
    o(d) {
      R(p, d), m = !1;
    },
    d(d) {
      d && N(t), p && p.d(d), d && N(r), d && N(n), E && E.d(), d && N(i), d && N(o), b = !1, j(_);
    }
  };
}
function Pt(e) {
  let t, r = e[1], n = [];
  for (let i = 0; i < r.length; i += 1)
    n[i] = wt(Nt(e, r, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      t = pe();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s].m(i, o);
      C(i, t, o);
    },
    p(i, o) {
      if (o & 99) {
        r = i[1];
        let s;
        for (s = 0; s < r.length; s += 1) {
          const a = Nt(i, r, s);
          n[s] ? n[s].p(a, o) : (n[s] = wt(a), n[s].c(), n[s].m(t.parentNode, t));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = r.length;
      }
    },
    d(i) {
      zt(n, i), i && N(t);
    }
  };
}
function Ot(e) {
  let t, r, n, i, o, s, a, h, l, u, f, c, m, b, _ = e[17].label + "", S, p, E, d, v = e[17].description + "", g, M, q;
  return {
    c() {
      t = B("div"), r = B("div"), n = B("input"), a = L(), h = B("label"), f = L(), c = B("div"), m = B("label"), b = B("strong"), S = w(_), E = L(), d = B("p"), g = w(v), y(n, "data-policy-id", i = e[17].id), y(n, "class", "cc__policy__switchinput svelte-1gq42t5"), y(n, "id", o = `ccp--${e[17].id}`), y(n, "type", "checkbox"), n.checked = s = e[5].indexOf(e[17].id) > -1, y(h, "class", "cc__policy__switchlabel svelte-1gq42t5"), y(h, "for", l = `ccp--${e[17].id}`), y(h, "aria-label", u = e[17].label), y(r, "class", "cc__policy__switch svelte-1gq42t5"), y(b, "class", "svelte-1gq42t5"), y(m, "for", p = `ccp--${e[17].id}`), y(m, "class", "svelte-1gq42t5"), y(d, "class", "svelte-1gq42t5"), y(c, "class", "cc__policy__content svelte-1gq42t5"), y(t, "class", "cc__policy svelte-1gq42t5");
    },
    m(U, k) {
      C(U, t, k), x(t, r), x(r, n), x(r, a), x(r, h), x(t, f), x(t, c), x(c, m), x(m, b), x(b, S), x(c, E), x(c, d), x(d, g), M || (q = J(n, "input", e[6]), M = !0);
    },
    p(U, k) {
      k & 3 && i !== (i = U[17].id) && y(n, "data-policy-id", i), k & 3 && o !== (o = `ccp--${U[17].id}`) && y(n, "id", o), k & 3 && s !== (s = U[5].indexOf(U[17].id) > -1) && (n.checked = s), k & 3 && l !== (l = `ccp--${U[17].id}`) && y(h, "for", l), k & 3 && u !== (u = U[17].label) && y(h, "aria-label", u), k & 3 && _ !== (_ = U[17].label + "") && G(S, _), k & 3 && p !== (p = `ccp--${U[17].id}`) && y(m, "for", p), k & 3 && v !== (v = U[17].description + "") && G(g, v);
    },
    d(U) {
      U && N(t), M = !1, q();
    }
  };
}
function wt(e) {
  let t, r, n, i = e[14].label + "", o, s, a, h = e[14].description + "", l, u, f;
  function c(..._) {
    return e[11](e[14], ..._);
  }
  let m = e[0].filter(c), b = [];
  for (let _ = 0; _ < m.length; _ += 1)
    b[_] = Ot(It(e, m, _));
  return {
    c() {
      t = B("div"), r = B("p"), n = B("strong"), o = w(i), s = L(), a = B("p"), l = w(h), u = L();
      for (let _ = 0; _ < b.length; _ += 1)
        b[_].c();
      f = L(), y(n, "class", "svelte-1gq42t5"), y(r, "class", "svelte-1gq42t5"), y(a, "class", "svelte-1gq42t5"), y(t, "class", "cc__category svelte-1gq42t5");
    },
    m(_, S) {
      C(_, t, S), x(t, r), x(r, n), x(n, o), x(t, s), x(t, a), x(a, l), x(t, u);
      for (let p = 0; p < b.length; p += 1)
        b[p].m(t, null);
      x(t, f);
    },
    p(_, S) {
      if (e = _, S & 2 && i !== (i = e[14].label + "") && G(o, i), S & 2 && h !== (h = e[14].description + "") && G(l, h), S & 99) {
        m = e[0].filter(c);
        let p;
        for (p = 0; p < m.length; p += 1) {
          const E = It(e, m, p);
          b[p] ? b[p].p(E, S) : (b[p] = Ot(E), b[p].c(), b[p].m(t, f));
        }
        for (; p < b.length; p += 1)
          b[p].d(1);
        b.length = m.length;
      }
    },
    d(_) {
      _ && N(t), zt(b, _);
    }
  };
}
function di(e) {
  let t, r, n = !e[2] && Ct(e);
  return {
    c() {
      n && n.c(), t = pe();
    },
    m(i, o) {
      n && n.m(i, o), C(i, t, o), r = !0;
    },
    p(i, [o]) {
      i[2] ? n && (be(), R(n, 1, 1, () => {
        n = null;
      }), de()) : n ? (n.p(i, o), o & 4 && P(n, 1)) : (n = Ct(i), n.c(), P(n, 1), n.m(t.parentNode, t));
    },
    i(i) {
      r || (P(n), r = !0);
    },
    o(i) {
      R(n), r = !1;
    },
    d(i) {
      n && n.d(i), i && N(t);
    }
  };
}
function _i(e, t, r) {
  let n, i;
  Y(e, Q, (p) => r(2, n = p)), Y(e, ht, (p) => r(3, i = p));
  let { $$slots: o = {}, $$scope: s } = t;
  const a = Zt();
  let { policies: h } = t, { categories: l } = t, { requiredCategories: u } = t, { userSelection: f } = t, c = !f || (f == null ? void 0 : f.length) === 0 ? [...u] : [...f], m = (p) => {
    const E = p.target.checked, d = p.target.dataset.policyId;
    E ? c.push(d) : c.splice(c.indexOf(d), 1);
  };
  const b = (p, E) => E.category === p.id, _ = () => {
    a("openStart");
  }, S = () => {
    a("saveSelection", c);
  };
  return e.$$set = (p) => {
    "policies" in p && r(0, h = p.policies), "categories" in p && r(1, l = p.categories), "requiredCategories" in p && r(7, u = p.requiredCategories), "userSelection" in p && r(8, f = p.userSelection), "$$scope" in p && r(9, s = p.$$scope);
  }, [
    h,
    l,
    n,
    i,
    a,
    c,
    m,
    u,
    f,
    s,
    o,
    b,
    _,
    S
  ];
}
class gi extends st {
  constructor(t) {
    super(), ot(this, t, _i, di, we, {
      policies: 0,
      categories: 1,
      requiredCategories: 7,
      userSelection: 8
    });
  }
}
function Lt(e) {
  let t, r, n = e[3] && Mt(e);
  return {
    c() {
      n && n.c(), t = pe();
    },
    m(i, o) {
      n && n.m(i, o), C(i, t, o), r = !0;
    },
    p(i, o) {
      i[3] ? n ? (n.p(i, o), o & 8 && P(n, 1)) : (n = Mt(i), n.c(), P(n, 1), n.m(t.parentNode, t)) : n && (be(), R(n, 1, 1, () => {
        n = null;
      }), de());
    },
    i(i) {
      r || (P(n), r = !0);
    },
    o(i) {
      R(n), r = !1;
    },
    d(i) {
      n && n.d(i), i && N(t);
    }
  };
}
function Mt(e) {
  let t, r, n, i, o, s, a, h = e[0].blockPage && Rt();
  const l = [Ei, vi], u = [];
  function f(c, m) {
    return c[4] ? 0 : 1;
  }
  return n = f(e), i = u[n] = l[n](e), {
    c() {
      h && h.c(), t = L(), r = B("div"), i.c(), y(r, "class", o = "cookie-consent__inner " + (e[0].position === "center" ? "cookie-consent__inner--centered" : "") + " svelte-1jpoucl");
    },
    m(c, m) {
      h && h.m(c, m), C(c, t, m), C(c, r, m), u[n].m(r, null), a = !0;
    },
    p(c, m) {
      c[0].blockPage ? h || (h = Rt(), h.c(), h.m(t.parentNode, t)) : h && (h.d(1), h = null);
      let b = n;
      n = f(c), n === b ? u[n].p(c, m) : (be(), R(u[b], 1, 1, () => {
        u[b] = null;
      }), de(), i = u[n], i ? i.p(c, m) : (i = u[n] = l[n](c), i.c()), P(i, 1), i.m(r, null)), (!a || m & 1 && o !== (o = "cookie-consent__inner " + (c[0].position === "center" ? "cookie-consent__inner--centered" : "") + " svelte-1jpoucl")) && y(r, "class", o);
    },
    i(c) {
      a || (P(i), ce(() => {
        s || (s = bt(r, Bt, { duration: 200, y: 100 }, !0)), s.run(1);
      }), a = !0);
    },
    o(c) {
      R(i), s || (s = bt(r, Bt, { duration: 200, y: 100 }, !1)), s.run(0), a = !1;
    },
    d(c) {
      h && h.d(c), c && N(t), c && N(r), u[n].d(), c && s && s.end();
    }
  };
}
function Rt(e) {
  let t;
  return {
    c() {
      t = B("div"), y(t, "class", "cookie-consent__inner__background svelte-1jpoucl");
    },
    m(r, n) {
      C(r, t, n);
    },
    d(r) {
      r && N(t);
    }
  };
}
function vi(e) {
  let t, r;
  return t = new bi({
    props: {
      translation: e[8],
      $$slots: { default: [yi] },
      $$scope: { ctx: e }
    }
  }), t.$on("acceptAll", e[10]), t.$on("acceptRequired", e[11]), t.$on("openSettings", e[13]), {
    c() {
      Qt(t.$$.fragment);
    },
    m(n, i) {
      rt(t, n, i), r = !0;
    },
    p(n, i) {
      const o = {};
      i & 262272 && (o.$$scope = { dirty: i, ctx: n }), t.$set(o);
    },
    i(n) {
      r || (P(t.$$.fragment, n), r = !0);
    },
    o(n) {
      R(t.$$.fragment, n), r = !1;
    },
    d(n) {
      it(t, n);
    }
  };
}
function Ei(e) {
  let t, r;
  return t = new gi({
    props: {
      categories: e[2],
      policies: e[1],
      requiredCategories: e[9],
      userSelection: e[5],
      $$slots: { default: [xi] },
      $$scope: { ctx: e }
    }
  }), t.$on("openStart", e[14]), t.$on("saveSelection", e[12]), {
    c() {
      Qt(t.$$.fragment);
    },
    m(n, i) {
      rt(t, n, i), r = !0;
    },
    p(n, i) {
      const o = {};
      i & 4 && (o.categories = n[2]), i & 2 && (o.policies = n[1]), i & 32 && (o.userSelection = n[5]), i & 262272 && (o.$$scope = { dirty: i, ctx: n }), t.$set(o);
    },
    i(n) {
      r || (P(t.$$.fragment, n), r = !0);
    },
    o(n) {
      R(t.$$.fragment, n), r = !1;
    },
    d(n) {
      it(t, n);
    }
  };
}
function yi(e) {
  let t, r, n = e[7]("femundfilou.cookie-consent.start.headline") + "", i, o, s, a = e[7]("femundfilou.cookie-consent.start.text") + "", h;
  return {
    c() {
      t = B("p"), r = B("strong"), i = w(n), o = L(), s = B("p"), h = w(a), y(r, "class", "svelte-1jpoucl"), y(t, "class", "cc_title svelte-1jpoucl"), y(s, "class", "svelte-1jpoucl");
    },
    m(l, u) {
      C(l, t, u), x(t, r), x(r, i), C(l, o, u), C(l, s, u), x(s, h);
    },
    p(l, u) {
      u & 128 && n !== (n = l[7]("femundfilou.cookie-consent.start.headline") + "") && G(i, n), u & 128 && a !== (a = l[7]("femundfilou.cookie-consent.start.text") + "") && G(h, a);
    },
    d(l) {
      l && N(t), l && N(o), l && N(s);
    }
  };
}
function xi(e) {
  let t, r, n = e[7]("femundfilou.cookie-consent.settings.headline") + "", i, o, s, a = e[7]("femundfilou.cookie-consent.settings.text") + "", h;
  return {
    c() {
      t = B("p"), r = B("strong"), i = w(n), o = L(), s = B("p"), h = w(a), y(r, "class", "svelte-1jpoucl"), y(t, "class", "cc_title svelte-1jpoucl"), y(s, "class", "svelte-1jpoucl");
    },
    m(l, u) {
      C(l, t, u), x(t, r), x(r, i), C(l, o, u), C(l, s, u), x(s, h);
    },
    p(l, u) {
      u & 128 && n !== (n = l[7]("femundfilou.cookie-consent.settings.headline") + "") && G(i, n), u & 128 && a !== (a = l[7]("femundfilou.cookie-consent.settings.text") + "") && G(h, a);
    },
    d(l) {
      l && N(t), l && N(o), l && N(s);
    }
  };
}
function Si(e) {
  let t, r, n = !e[6] && Lt(e);
  return {
    c() {
      n && n.c(), t = pe();
    },
    m(i, o) {
      n && n.m(i, o), C(i, t, o), r = !0;
    },
    p(i, [o]) {
      i[6] ? n && (be(), R(n, 1, 1, () => {
        n = null;
      }), de()) : n ? (n.p(i, o), o & 64 && P(n, 1)) : (n = Lt(i), n.c(), P(n, 1), n.m(t.parentNode, t));
    },
    i(i) {
      r || (P(n), r = !0);
    },
    o(i) {
      R(n), r = !1;
    },
    d(i) {
      n && n.d(i), i && N(t);
    }
  };
}
function Hi(e, t, r) {
  let n, i;
  Y(e, Q, (g) => r(6, n = g)), Y(e, ht, (g) => r(7, i = g));
  let { options: o } = t, { policies: s } = t, { categories: a } = t, { translations: h } = t, l = !1, u = !1, f, c = a.filter((g) => s.filter((M) => M.category === g.id).length === 0).map((g) => g.id), m = [];
  try {
    if (!h)
      throw new Error("Cookie Consent: Translations missing.");
  } catch (g) {
    console.error(g.message);
  }
  let b = () => {
    var g;
    Object.entries(h).forEach(([M, q]) => {
      gn(M, q);
    }), Yr({
      fallbackLocale: "en",
      initialLocale: (g = o.locale) != null ? g : "en"
    });
  }, _ = () => {
    r(3, l = !1), Se.set(o.cookieName, JSON.stringify(s.map((g) => g.id)), {
      expires: o.expires,
      sameSite: "Strict"
    }), location.reload();
  }, S = () => {
    r(3, l = !1), Se.set(o.cookieName, JSON.stringify([...c]), {
      expires: o.expires,
      sameSite: "Strict"
    });
  }, p = (g) => {
    const M = g.detail;
    Se.set(o.cookieName, JSON.stringify(M), {
      expires: o.expires,
      sameSite: "Strict"
    }), r(3, l = !1), location.reload();
  }, E = () => (r(3, l = !0), r(4, u = !0), !0), d = () => {
    r(3, l = !0), r(4, u = !1);
  }, v = () => {
    const g = Se.get(o.cookieName);
    return g ? JSON.parse(g) : null;
  };
  return Mn(() => {
    l && o.blockPage ? document.body.classList.add("cc-open") : document.body.classList.remove("cc-open");
  }), window.CookieConsent = {
    policies: s.map((g) => g.id),
    getUserConsent: v,
    openSettings: E
  }, Ln(() => {
    !h || (b(), r(5, m = v()), m || setTimeout(
      () => {
        r(3, l = !0);
      },
      400
    ));
  }), e.$$set = (g) => {
    "options" in g && r(0, o = g.options), "policies" in g && r(1, s = g.policies), "categories" in g && r(2, a = g.categories), "translations" in g && r(15, h = g.translations);
  }, [
    o,
    s,
    a,
    l,
    u,
    m,
    n,
    i,
    f,
    c,
    _,
    S,
    p,
    E,
    d,
    h
  ];
}
class Ti extends st {
  constructor(t) {
    super(), ot(this, t, Hi, Si, we, {
      options: 0,
      policies: 1,
      categories: 2,
      translations: 15
    });
  }
}
const W = document.getElementById("cookie-consent");
let yn;
W && (yn = new Ti({
  target: W,
  props: {
    options: ve(W.dataset.options, null, "options"),
    policies: ve(W.dataset.policies, [], "policies"),
    categories: ve(W.dataset.categories, [], "categories"),
    translations: ve(W.dataset.translations, [], "translations")
  }
}));
const Bi = yn;
export {
  Bi as default
};
