/*! hotkeys-js v3.9.4 | MIT © 2022 kenny wong <wowohoo@qq.com> http://jaywcjlove.github.io/hotkeys */
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).hotkeys = t()
}(this, function() {
  "use strict";
  var e = "undefined" != typeof navigator && 0 < navigator.userAgent.toLowerCase().indexOf("firefox");
  function p(e, t, n, o) {
    e.addEventListener ? e.addEventListener(t, n, o) : e.attachEvent && e.attachEvent("on".concat(t), function() {
      n(window.event)
    })
  }
  function d(e, t) {
    for (var n = t.slice(0, t.length - 1), o = 0; o < n.length; o++)
      n[o] = e[n[o].toLowerCase()];
    return n
  }
  function y(e) {
    for (var t = (e = (e = "string" != typeof e ? "" : e).replace(/\s/g, "")).split(","), n = t.lastIndexOf(""); 0 <= n; )
      t[n - 1] += ",",
      t.splice(n, 1),
      n = t.lastIndexOf("");
    return t
  }
  for (var t = {
    backspace: 8,
    tab: 9,
    clear: 12,
    enter: 13,
    return: 13,
    esc: 27,
    escape: 27,
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    del: 46,
    delete: 46,
    ins: 45,
    insert: 45,
    home: 36,
    end: 35,
    pageup: 33,
    pagedown: 34,
    capslock: 20,
    num_0: 96,
    num_1: 97,
    num_2: 98,
    num_3: 99,
    num_4: 100,
    num_5: 101,
    num_6: 102,
    num_7: 103,
    num_8: 104,
    num_9: 105,
    num_multiply: 106,
    num_add: 107,
    num_enter: 108,
    num_subtract: 109,
    num_decimal: 110,
    num_divide: 111,
    "\u21ea": 20,
    ",": 188,
    ".": 190,
    "/": 191,
    "`": 192,
    "-": e ? 173 : 189,
    "=": e ? 61 : 187,
    ";": e ? 59 : 186,
    "'": 222,
    "[": 219,
    "]": 221,
    "\\": 220
  }, h = {
    "\u21e7": 16,
    shift: 16,
    "\u2325": 18,
    alt: 18,
    option: 18,
    "\u2303": 17,
    ctrl: 17,
    control: 17,
    "\u2318": 91,
    cmd: 91,
    command: 91
  }, m = {
    16: "shiftKey",
    18: "altKey",
    17: "ctrlKey",
    91: "metaKey",
    shiftKey: 16,
    ctrlKey: 17,
    altKey: 18,
    metaKey: 91
  }, g = {
    16: !1,
    18: !1,
    17: !1,
    91: !1
  }, v = {}, n = 1; n < 20; n++)
    t["f".concat(n)] = 111 + n;
  var k = []
    , w = !1
    , o = "all"
    , O = []
    , K = function(e) {
    return t[e.toLowerCase()] || h[e.toLowerCase()] || e.toUpperCase().charCodeAt(0)
  };
  function r(e) {
    o = e || "all"
  }
  function b() {
    return o || "all"
  }
  function f(e) {
    var i = e.scope
      , r = e.method
      , t = e.splitKey
      , f = void 0 === t ? "+" : t;
    y(e.key).forEach(function(e) {
      var t, e = e.split(f), n = e.length, o = e[n - 1], o = "*" === o ? "*" : K(o);
      v[o] && (i = i || b(),
      t = 1 < n ? d(h, e) : [],
      v[o] = v[o].filter(function(e) {
        return !((!r || e.method === r) && e.scope === i && function(e, t) {
          for (var n = e.length < t.length ? t : e, o = e.length < t.length ? e : t, i = !0, r = 0; r < n.length; r++)
            ~o.indexOf(n[r]) || (i = !1);
          return i
        }(e.mods, t))
      }))
    })
  }
  function x(e, t, n, o) {
    var i;
    if (t.element === o && (t.scope === n || "all" === t.scope)) {
      for (var r in i = 0 < t.mods.length,
      g)
        Object.prototype.hasOwnProperty.call(g, r) && (!g[r] && ~t.mods.indexOf(+r) || g[r] && !~t.mods.indexOf(+r)) && (i = !1);
      (0 !== t.mods.length || g[16] || g[18] || g[17] || g[91]) && !i && "*" !== t.shortcut || !1 === t.method(e, t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
      e.stopPropagation && e.stopPropagation(),
      e.cancelBubble && (e.cancelBubble = !0))
    }
  }
  function _(n, e) {
    var t = v["*"]
      , o = n.keyCode || n.which || n.charCode;
    if (C.filter.call(this, n)) {
      if (~k.indexOf(o = 93 !== o && 224 !== o ? o : 91) || 229 === o || k.push(o),
      ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(e) {
        var t = m[e];
        n[e] && !~k.indexOf(t) ? k.push(t) : !n[e] && ~k.indexOf(t) ? k.splice(k.indexOf(t), 1) : "metaKey" !== e || !n[e] || 3 !== k.length || n.ctrlKey || n.shiftKey || n.altKey || (k = k.slice(k.indexOf(t)))
      }),
      o in g) {
        for (var i in g[o] = !0,
        h)
          h[i] === o && (C[i] = !0);
        if (!t)
          return
      }
      for (var r in g)
        Object.prototype.hasOwnProperty.call(g, r) && (g[r] = n[m[r]]);
      n.getModifierState && (!n.altKey || n.ctrlKey) && n.getModifierState("AltGraph") && (~k.indexOf(17) || k.push(17),
      ~k.indexOf(18) || k.push(18),
      g[17] = !0,
      g[18] = !0);
      var f = b();
      if (t)
        for (var a = 0; a < t.length; a++)
          t[a].scope === f && ("keydown" === n.type && t[a].keydown || "keyup" === n.type && t[a].keyup) && x(n, t[a], f, e);
      if (o in v)
        for (var c = 0; c < v[o].length; c++)
          if (("keydown" === n.type && v[o][c].keydown || "keyup" === n.type && v[o][c].keyup) && v[o][c].key) {
            for (var l = v[o][c], s = l.key.split(l.splitKey), u = [], p = 0; p < s.length; p++)
              u.push(K(s[p]));
            u.sort().join("") === k.sort().join("") && x(n, l, f, e)
          }
    }
  }
  function C(e, t, n) {
    k = [];
    var o = y(e)
      , i = []
      , r = "all"
      , f = document
      , a = 0
      , c = !1
      , l = !0
      , s = "+"
      , u = !1;
    for (void 0 === n && "function" == typeof t && (n = t),
    "[object Object]" === Object.prototype.toString.call(t) && (t.scope && (r = t.scope),
    t.element && (f = t.element),
    t.keyup && (c = t.keyup),
    void 0 !== t.keydown && (l = t.keydown),
    void 0 !== t.capture && (u = t.capture),
    "string" == typeof t.splitKey && (s = t.splitKey)),
    "string" == typeof t && (r = t); a < o.length; a++)
      i = [],
      1 < (e = o[a].split(s)).length && (i = d(h, e)),
      (e = "*" === (e = e[e.length - 1]) ? "*" : K(e))in v || (v[e] = []),
      v[e].push({
        keyup: c,
        keydown: l,
        scope: r,
        mods: i,
        shortcut: o[a],
        method: n,
        key: o[a],
        splitKey: s,
        element: f
      });
    void 0 !== f && (t = f,
    !~O.indexOf(t)) && window && (O.push(f),
    p(f, "keydown", function(e) {
      _(e, f)
    }, u),
    w || (w = !0,
    p(window, "focus", function() {
      k = []
    }, u)),
    p(f, "keyup", function(e) {
      _(e, f);
      var t = e.keyCode || e.which || e.charCode
        , n = k.indexOf(t);
      if (n < 0 || k.splice(n, 1),
      e.key && "meta" == e.key.toLowerCase() && k.splice(0, k.length),
      (t = 93 !== t && 224 !== t ? t : 91)in g)
        for (var o in g[t] = !1,
        h)
          h[o] === t && (C[o] = !1)
    }, u))
  }
  var i, a, c = {
    setScope: r,
    getScope: b,
    deleteScope: function(e, t) {
      var n, o, i;
      for (i in e = e || b(),
      v)
        if (Object.prototype.hasOwnProperty.call(v, i))
          for (n = v[i],
          o = 0; o < n.length; )
            n[o].scope === e ? n.splice(o, 1) : o++;
      b() === e && r(t || "all")
    },
    getPressedKeyCodes: function() {
      return k.slice(0)
    },
    isPressed: function(e) {
      return "string" == typeof e && (e = K(e)),
      !!~k.indexOf(e)
    },
    filter: function(e) {
      var t = (e = e.target || e.srcElement).tagName;
      return !e.isContentEditable && ("INPUT" !== t && "TEXTAREA" !== t && "SELECT" !== t || e.readOnly) ? !0 : !1
    },
    trigger: function(t) {
      var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "all";
      Object.keys(v).forEach(function(e) {
        e = v[e].find(function(e) {
          return e.scope === n && e.shortcut === t
        });
        e && e.method && e.method()
      })
    },
    unbind: function(e) {
      if (void 0 === e)
        Object.keys(v).forEach(function(e) {
          return delete v[e]
        });
      else if (Array.isArray(e))
        e.forEach(function(e) {
          e.key && f(e)
        });
      else if ("object" == typeof e)
        e.key && f(e);
      else if ("string" == typeof e) {
        for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        var i = n[0]
          , r = n[1];
        "function" == typeof i && (r = i,
        i = ""),
        f({
          key: e,
          scope: i,
          method: r,
          splitKey: "+"
        })
      }
    },
    keyMap: t,
    modifier: h,
    modifierMap: m
  };
  for (i in c)
    Object.prototype.hasOwnProperty.call(c, i) && (C[i] = c[i]);
  return "undefined" != typeof window && (a = window.hotkeys,
  C.noConflict = function(e) {
    return e && window.hotkeys === C && (window.hotkeys = a),
    C
  }
  ,
  window.hotkeys = C),
  C
});
