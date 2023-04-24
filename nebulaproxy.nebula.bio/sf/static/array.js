! function() {
    "use strict";

    function e(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function t(t) {
        for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2 ? e(Object(n), !0).forEach((function(e) {
                s(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function r(e) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(e)
    }

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function o(e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function s(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && u(e, t)
    }

    function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
    }

    function u(e, t) {
        return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        }, u(e, t)
    }

    function l(e, t) {
        if (null == e) return {};
        var r, n, i = function(e, t) {
            if (null == e) return {};
            var r, n, i = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
        }
        return i
    }

    function d(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e)
    }

    function p(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var r, n = c(e);
            if (t) {
                var i = c(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return d(this, r)
        }
    }

    function f(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == r) return;
            var n, i, o = [],
                s = !0,
                a = !1;
            try {
                for (r = r.call(e); !(s = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    s || null == r.return || r.return()
                } finally {
                    if (a) throw i
                }
            }
            return o
        }(e, t) || _(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function h(e) {
        return function(e) {
            if (Array.isArray(e)) return g(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || _(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function _(e, t) {
        if (e) {
            if ("string" == typeof e) return g(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? g(e, t) : void 0
        }
    }

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function v(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
            if (Array.isArray(e) || (r = _(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s = !0,
            a = !1;
        return {
            s: function() {
                r = r.call(e)
            },
            n: function() {
                var e = r.next();
                return s = e.done, e
            },
            e: function(e) {
                a = !0, o = e
            },
            f: function() {
                try {
                    s || null == r.return || r.return()
                } finally {
                    if (a) throw o
                }
            }
        }
    }
    var y = String.fromCharCode,
        m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
        w = {};

    function k(e, t) {
        if (!w[e]) {
            w[e] = {};
            for (var r = 0; r < e.length; r++) w[e][e.charAt(r)] = r
        }
        return w[e][t]
    }
    var S = {
            compressToBase64: function(e) {
                if (null == e) return "";
                var t = S._compress(e, 6, (function(e) {
                    return m.charAt(e)
                }));
                switch (t.length % 4) {
                    default:
                        case 0:
                        return t;
                    case 1:
                            return t + "===";
                    case 2:
                            return t + "==";
                    case 3:
                            return t + "="
                }
            },
            decompressFromBase64: function(e) {
                return null == e ? "" : "" == e ? null : S._decompress(e.length, 32, (function(t) {
                    return k(m, e.charAt(t))
                }))
            },
            compressToUTF16: function(e) {
                return null == e ? "" : S._compress(e, 15, (function(e) {
                    return y(e + 32)
                })) + " "
            },
            decompressFromUTF16: function(e) {
                return null == e ? "" : "" == e ? null : S._decompress(e.length, 16384, (function(t) {
                    return e.charCodeAt(t) - 32
                }))
            },
            compressToUint8Array: function(e) {
                for (var t = S.compress(e), r = new Uint8Array(2 * t.length), n = 0, i = t.length; n < i; n++) {
                    var o = t.charCodeAt(n);
                    r[2 * n] = o >>> 8, r[2 * n + 1] = o % 256
                }
                return r
            },
            decompressFromUint8Array: function(e) {
                if (null == e) return S.decompress(e);
                for (var t = new Array(e.length / 2), r = 0, n = t.length; r < n; r++) t[r] = 256 * e[2 * r] + e[2 * r + 1];
                var i = [];
                return t.forEach((function(e) {
                    i.push(y(e))
                })), S.decompress(i.join(""))
            },
            compressToEncodedURIComponent: function(e) {
                return null == e ? "" : S._compress(e, 6, (function(e) {
                    return b.charAt(e)
                }))
            },
            decompressFromEncodedURIComponent: function(e) {
                return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"), S._decompress(e.length, 32, (function(t) {
                    return k(b, e.charAt(t))
                })))
            },
            compress: function(e) {
                return S._compress(e, 16, (function(e) {
                    return y(e)
                }))
            },
            _compress: function(e, t, r) {
                if (null == e) return "";
                var n, i, o, s = "",
                    a = "",
                    c = "",
                    u = 2,
                    l = 3,
                    d = 2,
                    p = 0,
                    f = 0,
                    h = {},
                    _ = {},
                    g = [];
                for (o = 0; o < e.length; o += 1)
                    if (s = e.charAt(o), Object.prototype.hasOwnProperty.call(h, s) || (h[s] = l++, _[s] = !0), a = c + s, Object.prototype.hasOwnProperty.call(h, a)) c = a;
                    else {
                        if (Object.prototype.hasOwnProperty.call(_, c)) {
                            if (c.charCodeAt(0) < 256) {
                                for (n = 0; n < d; n++) p <<= 1, f == t - 1 ? (f = 0, g.push(r(p)), p = 0) : f++;
                                for (i = c.charCodeAt(0), n = 0; n < 8; n++) p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(r(p)), p = 0) : f++, i >>= 1
                            } else {
                                for (i = 1, n = 0; n < d; n++) p = p << 1 | i, f == t - 1 ? (f = 0, g.push(r(p)), p = 0) : f++, i = 0;
                                for (i = c.charCodeAt(0), n = 0; n < 16; n++) p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(r(p)), p = 0) : f++, i >>= 1
                            }
                            0 == --u && (u = Math.pow(2, d), d++), delete _[c]
                        } else
                            for (i = h[c], n = 0; n < d; n++) p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(r(p)), p = 0) : f++, i >>= 1;
                        0 == --u && (u = Math.pow(2, d), d++), h[a] = l++, c = String(s)
                    }
                if ("" !== c) {
                    if (Object.prototype.hasOwnProperty.call(_, c)) {
                        if (c.charCodeAt(0) < 256) {
                            for (n = 0; n < d; n++) p <<= 1, f == t - 1 ? (f = 0, g.push(r(p)), p = 0) : f++;
                            for (i = c.charCodeAt(0), n = 0; n < 8; n++) p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(r(p)), p = 0) : f++, i >>= 1
                        } else {
                            for (i = 1, n = 0; n < d; n++) p = p << 1 | i, f == t - 1 ? (f = 0, g.push(r(p)), p = 0) : f++, i = 0;
                            for (i = c.charCodeAt(0), n = 0; n < 16; n++) p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(r(p)), p = 0) : f++, i >>= 1
                        }
                        0 == --u && (u = Math.pow(2, d), d++), delete _[c]
                    } else
                        for (i = h[c], n = 0; n < d; n++) p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(r(p)), p = 0) : f++, i >>= 1;
                    0 == --u && (u = Math.pow(2, d), d++)
                }
                for (i = 2, n = 0; n < d; n++) p = p << 1 | 1 & i, f == t - 1 ? (f = 0, g.push(r(p)), p = 0) : f++, i >>= 1;
                for (;;) {
                    if (p <<= 1, f == t - 1) {
                        g.push(r(p));
                        break
                    }
                    f++
                }
                return g.join("")
            },
            decompress: function(e) {
                return null == e ? "" : "" == e ? null : S._decompress(e.length, 32768, (function(t) {
                    return e.charCodeAt(t)
                }))
            },
            _decompress: function(e, t, r) {
                var n, i, o, s, a, c, u, l = [],
                    d = [],
                    p = {
                        val: r(0),
                        position: t,
                        index: 1
                    },
                    f = 4,
                    h = 4,
                    _ = 3,
                    g = "";
                for (n = 0; n < 3; n += 1) l[n] = n;
                for (o = 0, a = Math.pow(2, 2), c = 1; c != a;) s = p.val & p.position, p.position >>= 1, 0 == p.position && (p.position = t, p.val = r(p.index++)), o |= (s > 0 ? 1 : 0) * c, c <<= 1;
                switch (o) {
                    case 0:
                        for (o = 0, a = Math.pow(2, 8), c = 1; c != a;) s = p.val & p.position, p.position >>= 1, 0 == p.position && (p.position = t, p.val = r(p.index++)), o |= (s > 0 ? 1 : 0) * c, c <<= 1;
                        u = y(o);
                        break;
                    case 1:
                        for (o = 0, a = Math.pow(2, 16), c = 1; c != a;) s = p.val & p.position, p.position >>= 1, 0 == p.position && (p.position = t, p.val = r(p.index++)), o |= (s > 0 ? 1 : 0) * c, c <<= 1;
                        u = y(o);
                        break;
                    case 2:
                        return ""
                }
                for (l[3] = u, i = u, d.push(u);;) {
                    if (p.index > e) return "";
                    for (o = 0, a = Math.pow(2, _), c = 1; c != a;) s = p.val & p.position, p.position >>= 1, 0 == p.position && (p.position = t, p.val = r(p.index++)), o |= (s > 0 ? 1 : 0) * c, c <<= 1;
                    switch (u = o) {
                        case 0:
                            for (o = 0, a = Math.pow(2, 8), c = 1; c != a;) s = p.val & p.position, p.position >>= 1, 0 == p.position && (p.position = t, p.val = r(p.index++)), o |= (s > 0 ? 1 : 0) * c, c <<= 1;
                            l[h++] = y(o), u = h - 1, f--;
                            break;
                        case 1:
                            for (o = 0, a = Math.pow(2, 16), c = 1; c != a;) s = p.val & p.position, p.position >>= 1, 0 == p.position && (p.position = t, p.val = r(p.index++)), o |= (s > 0 ? 1 : 0) * c, c <<= 1;
                            l[h++] = y(o), u = h - 1, f--;
                            break;
                        case 2:
                            return d.join("")
                    }
                    if (0 == f && (f = Math.pow(2, _), _++), l[u]) g = l[u];
                    else {
                        if (u !== h) return null;
                        g = i + i.charAt(0)
                    }
                    d.push(g), l[h++] = i + g.charAt(0), i = g, 0 == --f && (f = Math.pow(2, _), _++)
                }
            }
        },
        P = {
            DEBUG: !1,
            LIB_VERSION: "1.53.3"
        },
        F = Array.prototype,
        I = Object.prototype,
        E = I.toString,
        O = I.hasOwnProperty,
        A = "undefined" != typeof window ? window : {},
        x = A.navigator || {
            userAgent: ""
        },
        C = A.document || {},
        R = x.userAgent,
        T = ["localhost", "127.0.0.1"],
        $ = F.forEach,
        M = F.indexOf,
        j = Array.isArray,
        q = {},
        D = {
            log: function() {
                if (P.DEBUG && !G(window.console) && window.console) {
                    for (var e = ("__rrweb_original__" in window.console.log ? window.console.log.__rrweb_original__ : window.console.log), t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    try {
                        e.apply(window.console, r)
                    } catch (t) {
                        B(r, (function(t) {
                            e(t)
                        }))
                    }
                }
            },
            error: function() {
                if (P.DEBUG && !G(window.console) && window.console) {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = ["PostHog error:"].concat(t),
                        i = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
                    try {
                        i.apply(window.console, n)
                    } catch (e) {
                        B(n, (function(e) {
                            i(e)
                        }))
                    }
                }
            },
            critical: function() {
                if (!G(window.console) && window.console) {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = ["PostHog error:"].concat(t),
                        i = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
                    try {
                        i.apply(window.console, n)
                    } catch (e) {
                        B(n, (function(e) {
                            i(e)
                        }))
                    }
                }
            }
        },
        N = function(e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        };

    function L(e, t, r) {
        if (null != e)
            if ($ && Array.isArray(e) && e.forEach === $) e.forEach(t, r);
            else if ("length" in e && e.length === +e.length) {
            for (var n = 0, i = e.length; n < i; n++)
                if (n in e && t.call(r, e[n], n) === q) return
        } else
            for (var o in e)
                if (O.call(e, o) && t.call(r, e[o], o) === q) return
    }

    function B(e, t, r) {
        if (Array.isArray(e))
            if ($ && e.forEach === $) e.forEach(t, r);
            else if ("length" in e && e.length === +e.length)
            for (var n = 0, i = e.length; n < i; n++)
                if (n in e && t.call(r, e[n], n) === q) return
    }
    var H = function(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return B(r, (function(t) {
                for (var r in t) void 0 !== t[r] && (e[r] = t[r])
            })), e
        },
        U = j || function(e) {
            return "[object Array]" === E.call(e)
        },
        V = function(e) {
            try {
                return /^\s*\bfunction\b/.test(e)
            } catch (e) {
                return !1
            }
        };

    function W(e, t) {
        return -1 !== e.indexOf(t)
    }
    var Q = function(e) {
            return e === Object(e) && !U(e)
        },
        G = function(e) {
            return void 0 === e
        },
        z = function(e) {
            return "[object String]" == E.call(e)
        },
        J = function(e) {
            return "[object Number]" == E.call(e)
        },
        Z = function e(t) {
            return L(t, (function(r, n) {
                ! function(e) {
                    return "[object Date]" == E.call(e)
                }(r) ? Q(r) && (t[n] = e(r)): t[n] = X(r)
            })), t
        },
        X = function(e) {
            function t(e) {
                return e < 10 ? "0" + e : e
            }
            return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds())
        },
        Y = function(e) {
            return function() {
                try {
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return e.apply(this, r)
                } catch (e) {
                    D.critical("Implementation error. Please turn on debug and contact support@posthog.com."), D.critical(e)
                }
            }
        },
        K = function(e) {
            var t = {};
            return L(e, (function(e, r) {
                z(e) && e.length > 0 && (t[r] = e)
            })), t
        };
    var ee = ["$performance_raw"];

    function te(e, t) {
        return r = e, n = function(e, r) {
                return r && ee.indexOf(r) > -1 ? e : "string" == typeof e && null !== t ? e.slice(0, t) : e
            }, i = new Set,
            function e(t, r) {
                return t !== Object(t) ? n ? n(t, r) : t : i.has(t) ? void 0 : (i.add(t), U(t) ? (o = [], B(t, (function(t) {
                    o.push(e(t))
                }))) : (o = {}, L(t, (function(t, r) {
                    i.has(t) || (o[r] = e(t, r))
                }))), o);
                var o
            }(r);
        var r, n, i
    }

    function re(e) {
        var t, r, n, i, o, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            a = 0,
            c = 0,
            u = "",
            l = [];
        if (!e) return e;
        e = ie(e);
        do {
            t = (o = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, r = o >> 12 & 63, n = o >> 6 & 63, i = 63 & o, l[c++] = s.charAt(t) + s.charAt(r) + s.charAt(n) + s.charAt(i)
        } while (a < e.length);
        switch (u = l.join(""), e.length % 3) {
            case 1:
                u = u.slice(0, -2) + "==";
                break;
            case 2:
                u = u.slice(0, -1) + "="
        }
        return u
    }
    var ne, ie = function(e) {
            var t, r, n, i, o = "";
            for (t = r = 0, n = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, i = 0; i < n; i++) {
                var s = e.charCodeAt(i),
                    a = null;
                s < 128 ? r++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), null !== a && (r > t && (o += e.substring(t, r)), o += a, t = r = i + 1)
            }
            return r > t && (o += e.substring(t, e.length)), o
        },
        oe = (ne = function() {
            for (var e = (new Date).valueOf(), t = 0; e == (new Date).valueOf();) t++;
            return e.toString(16) + t.toString(16)
        }, function() {
            var e = "undefined" != typeof window ? (window.screen.height * window.screen.width).toString(16) : "0";
            return ne() + "-" + Math.random().toString(16).replace(".", "") + "-" + function() {
                var e, t, r = R,
                    n = 0,
                    i = [];

                function o(e, t) {
                    var r, n = 0;
                    for (r = 0; r < t.length; r++) n |= i[r] << 8 * r;
                    return e ^ n
                }
                for (e = 0; e < r.length; e++) t = r.charCodeAt(e), i.unshift(255 & t), i.length >= 4 && (n = o(n, i), i = []);
                return i.length > 0 && (n = o(n, i)), n.toString(16)
            }() + "-" + e + "-" + ne()
        }),
        se = function(e) {
            return !!/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp|ahrefsbot|facebookexternalhit|facebookcatalog|applebot|semrushbot|duckduckbot|twitterbot|rogerbot|linkedinbot|mj12bot|sitebulb|bot.htm|bot.php|hubspot|crawler)/i.test(e)
        },
        ae = function(e, t) {
            var r = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"),
                n = new RegExp("[\\?&]" + r + "=([^&#]*)").exec(e);
            if (null === n || n && "string" != typeof n[1] && n[1].length) return "";
            var i = n[1];
            try {
                i = decodeURIComponent(i)
            } catch (e) {
                D.error("Skipping decoding for malformed query param: " + i)
            }
            return i.replace(/\+/g, " ")
        },
        ce = function(e, t) {
            var r = e.match(new RegExp(t + "=([^&]*)"));
            return r ? r[1] : null
        },
        ue = function() {
            function e(t) {
                return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation), t
            }
            return e.preventDefault = function() {
                    this.returnValue = !1
                }, e.stopPropagation = function() {
                    this.cancelBubble = !0
                },
                function(t, r, n, i, o) {
                    if (t)
                        if (t.addEventListener && !i) t.addEventListener(r, n, !!o);
                        else {
                            var s = "on" + r,
                                a = t[s];
                            t[s] = function(t, r, n) {
                                return function(i) {
                                    if (i = i || e(window.event)) {
                                        var o, s = !0;
                                        V(n) && (o = n(i));
                                        var a = r.call(t, i);
                                        return !1 !== o && !1 !== a || (s = !1), s
                                    }
                                }
                            }(t, n, a)
                        }
                    else D.error("No valid element provided to register_event")
                }
        }(),
        le = {
            campaignParams: function(e) {
                var t = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid", "msclkid"].concat(e || []),
                    r = {};
                return L(t, (function(e) {
                    var t = ae(C.URL, e);
                    t.length && (r[e] = t)
                })), r
            },
            searchEngine: function() {
                var e = C.referrer;
                return e ? 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
            },
            searchInfo: function() {
                var e = le.searchEngine(),
                    t = "yahoo" != e ? "q" : "p",
                    r = {};
                if (null !== e) {
                    r.$search_engine = e;
                    var n = ae(C.referrer, t);
                    n.length && (r.ph_keyword = n)
                }
                return r
            },
            browser: function(e, t, r) {
                return t = t || "", r || W(e, " OPR/") ? W(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : W(e, "IEMobile") || W(e, "WPDesktop") ? "Internet Explorer Mobile" : W(e, "SamsungBrowser/") ? "Samsung Internet" : W(e, "Edge") || W(e, "Edg/") ? "Microsoft Edge" : W(e, "FBIOS") ? "Facebook Mobile" : W(e, "Chrome") ? "Chrome" : W(e, "CriOS") ? "Chrome iOS" : W(e, "UCWEB") || W(e, "UCBrowser") ? "UC Browser" : W(e, "FxiOS") ? "Firefox iOS" : W(t, "Apple") ? W(e, "Mobile") ? "Mobile Safari" : "Safari" : W(e, "Android") ? "Android Mobile" : W(e, "Konqueror") ? "Konqueror" : W(e, "Firefox") ? "Firefox" : W(e, "MSIE") || W(e, "Trident/") ? "Internet Explorer" : W(e, "Gecko") ? "Mozilla" : ""
            },
            browserVersion: function(e, t, r) {
                var n = {
                    "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                    "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                    Chrome: /Chrome\/(\d+(\.\d+)?)/,
                    "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                    "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                    Safari: /Version\/(\d+(\.\d+)?)/,
                    "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                    Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                    Firefox: /Firefox\/(\d+(\.\d+)?)/,
                    "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                    Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                    BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                    "Android Mobile": /android\s(\d+(\.\d+)?)/,
                    "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                    "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                    Mozilla: /rv:(\d+(\.\d+)?)/
                }[le.browser(e, t, r)];
                if (void 0 === n) return null;
                var i = e.match(n);
                return i ? parseFloat(i[i.length - 2]) : null
            },
            browserLanguage: function() {
                return x.language || x.userLanguage
            },
            os: function() {
                var e = R;
                return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "Chrome OS" : ""
            },
            device: function(e) {
                return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) && !/Mobile/.test(e) ? "Android Tablet" : /Android/.test(e) ? "Android" : ""
            },
            deviceType: function(e) {
                var t = this.device(e);
                return "iPad" === t || "Android Tablet" === t ? "Tablet" : t ? "Mobile" : "Desktop"
            },
            referrer: function() {
                return C.referrer || "$direct"
            },
            referringDomain: function() {
                if (!C.referrer) return "$direct";
                var e = C.createElement("a");
                return e.href = C.referrer, e.host
            },
            properties: function() {
                return H(K({
                    $os: le.os(),
                    $browser: le.browser(R, x.vendor, A.opera),
                    $device: le.device(R),
                    $device_type: le.deviceType(R)
                }), {
                    $current_url: null == A ? void 0 : A.location.href,
                    $host: null == A ? void 0 : A.location.host,
                    $pathname: null == A ? void 0 : A.location.pathname,
                    $browser_version: le.browserVersion(R, x.vendor, A.opera),
                    $browser_language: le.browserLanguage(),
                    $screen_height: null == A ? void 0 : A.screen.height,
                    $screen_width: null == A ? void 0 : A.screen.width,
                    $viewport_height: null == A ? void 0 : A.innerHeight,
                    $viewport_width: null == A ? void 0 : A.innerWidth,
                    $lib: "web",
                    $lib_version: P.LIB_VERSION,
                    $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                    $time: (Date.now = Date.now || function() {
                        return +new Date
                    }, Date.now() / 1e3)
                })
            },
            people_properties: function() {
                return H(K({
                    $os: le.os(),
                    $browser: le.browser(R, x.vendor, A.opera)
                }), {
                    $browser_version: le.browserVersion(R, x.vendor, A.opera)
                })
            }
        };

    function de(e) {
        switch (r(e.className)) {
            case "string":
                return e.className;
            case "object":
                return ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
            default:
                return ""
        }
    }

    function pe(e) {
        var t = "";
        return ye(e) && !me(e) && e.childNodes && e.childNodes.length && L(e.childNodes, (function(e) {
            _e(e) && e.textContent && (t += N(e.textContent).split(/(\s+)/).filter(be).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255))
        })), N(t)
    }

    function fe(e) {
        return !!e && 1 === e.nodeType
    }

    function he(e, t) {
        return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
    }

    function _e(e) {
        return !!e && 3 === e.nodeType
    }

    function ge(e) {
        return !!e && 11 === e.nodeType
    }
    var ve = ["a", "button", "form", "input", "select", "textarea", "label"];

    function ye(e) {
        for (var t = e; t.parentNode && !he(t, "body"); t = t.parentNode) {
            var r = de(t).split(" ");
            if (W(r, "ph-sensitive") || W(r, "ph-no-capture")) return !1
        }
        if (W(de(e).split(" "), "ph-include")) return !0;
        var n = e.type || "";
        if ("string" == typeof n) switch (n.toLowerCase()) {
            case "hidden":
            case "password":
                return !1
        }
        var i = e.name || e.id || "";
        if ("string" == typeof i) {
            if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, ""))) return !1
        }
        return !0
    }

    function me(e) {
        return !!(he(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type) || he(e, "select") || he(e, "textarea") || "true" === e.getAttribute("contenteditable"))
    }

    function be(e) {
        if (null === e || G(e)) return !1;
        if ("string" == typeof e) {
            e = N(e);
            if (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e || "").replace(/[- ]/g, ""))) return !1;
            if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e)) return !1
        }
        return !0
    }

    function we(e, t) {
        var r = document.createElement("script");
        r.type = "text/javascript", r.src = e, r.onload = t;
        var n, i = document.querySelectorAll("body > script");
        i.length > 0 ? null === (n = i[0].parentNode) || void 0 === n || n.insertBefore(r, i[0]) : document.body.appendChild(r)
    }

    function ke(e) {
        var t = pe(e);
        return be(t = "".concat(t, " ").concat(Se(e)).trim()) ? t : ""
    }

    function Se(e) {
        var t = "";
        return e && e.childNodes && e.childNodes.length && L(e.childNodes, (function(e) {
            var r;
            if (e && "span" === (null === (r = e.tagName) || void 0 === r ? void 0 : r.toLowerCase())) try {
                var n = pe(e);
                t = "".concat(t, " ").concat(n).trim(), e.childNodes && e.childNodes.length && (t = "".concat(t, " ").concat(Se(e)).trim())
            } catch (e) {
                console.error(e)
            }
        })), t
    }
    var Pe = function() {
            function e(t) {
                n(this, e), this.clicks = [], this.enabled = t
            }
            return o(e, [{
                key: "isRageClick",
                value: function(e, t, r) {
                    if (!this.enabled) return !1;
                    var n = this.clicks[this.clicks.length - 1];
                    if (n && Math.abs(e - n.x) + Math.abs(t - n.y) < 30 && r - n.timestamp < 1e3) {
                        if (this.clicks.push({
                                x: e,
                                y: t,
                                timestamp: r
                            }), 3 === this.clicks.length) return !0
                    } else this.clicks = [{
                        x: e,
                        y: t,
                        timestamp: r
                    }];
                    return !1
                }
            }]), e
        }(),
        Fe = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        Ie = {
            is_supported: function() {
                return !0
            },
            error: function(e) {
                D.error("cookieStore error: " + e)
            },
            get: function(e) {
                try {
                    for (var t = e + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
                        for (var i = r[n];
                            " " == i.charAt(0);) i = i.substring(1, i.length);
                        if (0 === i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length))
                    }
                } catch (e) {}
                return null
            },
            parse: function(e) {
                var t;
                try {
                    t = JSON.parse(Ie.get(e)) || {}
                } catch (e) {}
                return t
            },
            set: function(e, t, r, n, i) {
                try {
                    var o = "",
                        s = "",
                        a = "";
                    if (n) {
                        var c = document.location.hostname.match(Fe),
                            u = c ? c[0] : "";
                        o = u ? "; domain=." + u : ""
                    }
                    if (r) {
                        var l = new Date;
                        l.setTime(l.getTime() + 24 * r * 60 * 60 * 1e3), s = "; expires=" + l.toUTCString()
                    }
                    i && (a = "; secure");
                    var d = e + "=" + encodeURIComponent(JSON.stringify(t)) + s + "; SameSite=Lax; path=/" + o + a;
                    return document.cookie = d, d
                } catch (e) {
                    return
                }
            },
            remove: function(e, t) {
                try {
                    Ie.set(e, "", -1, t)
                } catch (e) {
                    return
                }
            }
        },
        Ee = null,
        Oe = {
            is_supported: function() {
                if (null !== Ee) return Ee;
                var e = !0;
                if ("undefined" != typeof window) try {
                    var t = "__mplssupport__";
                    Oe.set(t, "xyz"), '"xyz"' !== Oe.get(t) && (e = !1), Oe.remove(t)
                } catch (t) {
                    e = !1
                } else e = !1;
                return e || D.error("localStorage unsupported; falling back to cookie store"), Ee = e, e
            },
            error: function(e) {
                D.error("localStorage error: " + e)
            },
            get: function(e) {
                try {
                    return window.localStorage.getItem(e)
                } catch (e) {
                    Oe.error(e)
                }
                return null
            },
            parse: function(e) {
                try {
                    return JSON.parse(Oe.get(e)) || {}
                } catch (e) {}
                return null
            },
            set: function(e, t) {
                try {
                    window.localStorage.setItem(e, JSON.stringify(t))
                } catch (e) {
                    Oe.error(e)
                }
            },
            remove: function(e) {
                try {
                    window.localStorage.removeItem(e)
                } catch (e) {
                    Oe.error(e)
                }
            }
        },
        Ae = t(t({}, Oe), {}, {
            parse: function(e) {
                try {
                    var t = {};
                    try {
                        (t = Ie.parse(e) || {}).distinct_id && Ie.set(e, {
                            distinct_id: t.distinct_id
                        })
                    } catch (e) {}
                    var r = H(t, JSON.parse(Oe.get(e) || "{}"));
                    return Oe.set(e, r), r
                } catch (e) {}
                return null
            },
            set: function(e, t, r, n, i) {
                try {
                    Oe.set(e, t), t.distinct_id && Ie.set(e, {
                        distinct_id: t.distinct_id
                    }, r, n, i)
                } catch (e) {
                    Oe.error(e)
                }
            },
            remove: function(e, t) {
                try {
                    window.localStorage.removeItem(e), Ie.remove(e, t)
                } catch (e) {
                    Oe.error(e)
                }
            }
        }),
        xe = {},
        Ce = {
            is_supported: function() {
                return !0
            },
            error: function(e) {
                D.error("memoryStorage error: " + e)
            },
            get: function(e) {
                return xe[e] || null
            },
            parse: function(e) {
                return xe[e] || null
            },
            set: function(e, t) {
                xe[e] = t
            },
            remove: function(e) {
                delete xe[e]
            }
        },
        Re = null,
        Te = {
            is_supported: function() {
                if (null !== Re) return Re;
                if (Re = !0, "undefined" != typeof window) try {
                    var e = "__support__";
                    Te.set(e, "xyz"), '"xyz"' !== Te.get(e) && (Re = !1), Te.remove(e)
                } catch (e) {
                    Re = !1
                } else Re = !1;
                return Re
            },
            error: function(e) {
                P.DEBUG && D.error("sessionStorage error: ", e)
            },
            get: function(e) {
                try {
                    return window.sessionStorage.getItem(e)
                } catch (e) {
                    Te.error(e)
                }
                return null
            },
            parse: function(e) {
                try {
                    return JSON.parse(Te.get(e)) || null
                } catch (e) {}
                return null
            },
            set: function(e, t) {
                try {
                    window.sessionStorage.setItem(e, JSON.stringify(t))
                } catch (e) {
                    Te.error(e)
                }
            },
            remove: function(e) {
                try {
                    window.sessionStorage.removeItem(e)
                } catch (e) {
                    Te.error(e)
                }
            }
        },
        $e = "$people_distinct_id",
        Me = "__alias",
        je = "__timers",
        qe = "$autocapture_disabled_server_side",
        De = "$session_recording_enabled_server_side",
        Ne = "$console_log_recording_enabled_server_side",
        Le = "$session_recording_recorder_version_server_side",
        Be = "$sesid",
        He = "$enabled_feature_flags",
        Ue = "$user_state",
        Ve = [$e, Me, "__cmpns", je, De, Be, He, Ue],
        We = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
        Qe = function() {
            function e(t) {
                n(this, e);
                var r = "";
                t.token && (r = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), this.props = {}, this.campaign_params_saved = !1, this.custom_campaign_params = t.custom_campaign_params || [], t.persistence_name ? this.name = "ph_" + t.persistence_name : this.name = "ph_" + r + "_posthog", -1 === We.indexOf(t.persistence.toLowerCase()) && (D.critical("Unknown persistence type " + t.persistence + "; falling back to cookie"), t.persistence = "cookie");
                var i = t.persistence.toLowerCase();
                "localstorage" === i && Oe.is_supported() ? this.storage = Oe : "localstorage+cookie" === i && Ae.is_supported() ? this.storage = Ae : "sessionstorage" === i && Te.is_supported() ? this.storage = Te : this.storage = "memory" === i ? Ce : Ie, this.user_state = "anonymous", this.load(), this.update_config(t), this.save()
            }
            return o(e, [{
                key: "properties",
                value: function() {
                    var e = {};
                    return L(this.props, (function(t, n) {
                        if (n === He && "object" === r(t))
                            for (var i = Object.keys(t), o = 0; o < i.length; o++) e["$feature/".concat(i[o])] = t[i[o]];
                        else a = n, c = !1, (null === (s = Ve) ? c : M && s.indexOf === M ? -1 != s.indexOf(a) : (L(s, (function(e) {
                            if (c || (c = e === a)) return q
                        })), c)) || (e[n] = t);
                        var s, a, c
                    })), e
                }
            }, {
                key: "load",
                value: function() {
                    if (!this.disabled) {
                        var e = this.storage.parse(this.name);
                        e && (this.props = H({}, e))
                    }
                }
            }, {
                key: "save",
                value: function() {
                    this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure)
                }
            }, {
                key: "remove",
                value: function() {
                    this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
                }
            }, {
                key: "clear",
                value: function() {
                    this.remove(), this.props = {}
                }
            }, {
                key: "register_once",
                value: function(e, t, r) {
                    var n = this;
                    if (Q(e)) {
                        void 0 === t && (t = "None"), this.expire_days = void 0 === r ? this.default_expiry : r;
                        var i = !1;
                        if (L(e, (function(e, r) {
                                n.props.hasOwnProperty(r) && n.props[r] !== t || (n.props[r] = e, i = !0)
                            })), i) return this.save(), !0
                    }
                    return !1
                }
            }, {
                key: "register",
                value: function(e, t) {
                    var r = this;
                    if (Q(e)) {
                        this.expire_days = void 0 === t ? this.default_expiry : t;
                        var n = !1;
                        if (L(e, (function(t, i) {
                                e.hasOwnProperty(i) && r.props[i] !== t && (r.props[i] = t, n = !0)
                            })), n) return this.save(), !0
                    }
                    return !1
                }
            }, {
                key: "unregister",
                value: function(e) {
                    e in this.props && (delete this.props[e], this.save())
                }
            }, {
                key: "update_campaign_params",
                value: function() {
                    this.campaign_params_saved || (this.register(le.campaignParams(this.custom_campaign_params)), this.campaign_params_saved = !0)
                }
            }, {
                key: "update_search_keyword",
                value: function() {
                    this.register(le.searchInfo())
                }
            }, {
                key: "update_referrer_info",
                value: function() {
                    this.register({
                        $referrer: this.props.$referrer || le.referrer(),
                        $referring_domain: this.props.$referring_domain || le.referringDomain()
                    })
                }
            }, {
                key: "get_referrer_info",
                value: function() {
                    return K({
                        $referrer: this.props.$referrer,
                        $referring_domain: this.props.$referring_domain
                    })
                }
            }, {
                key: "safe_merge",
                value: function(e) {
                    return L(this.props, (function(t, r) {
                        r in e || (e[r] = t)
                    })), e
                }
            }, {
                key: "update_config",
                value: function(e) {
                    this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie)
                }
            }, {
                key: "set_disabled",
                value: function(e) {
                    this.disabled = e, this.disabled ? this.remove() : this.save()
                }
            }, {
                key: "set_cross_subdomain",
                value: function(e) {
                    e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
                }
            }, {
                key: "get_cross_subdomain",
                value: function() {
                    return !!this.cross_subdomain
                }
            }, {
                key: "set_secure",
                value: function(e) {
                    e !== this.secure && (this.secure = e, this.remove(), this.save())
                }
            }, {
                key: "set_event_timer",
                value: function(e, t) {
                    var r = this.props[je] || {};
                    r[e] = t, this.props[je] = r, this.save()
                }
            }, {
                key: "remove_event_timer",
                value: function(e) {
                    var t = (this.props[je] || {})[e];
                    return G(t) || (delete this.props[je][e], this.save()), t
                }
            }, {
                key: "get_user_state",
                value: function() {
                    return this.props[Ue] || "anonymous"
                }
            }, {
                key: "set_user_state",
                value: function(e) {
                    this.props[Ue] = e, this.save()
                }
            }]), e
        }(),
        Ge = {
            _initializedTokens: [],
            _isAutocaptureEnabled: !1,
            _setIsAutocaptureEnabled: function(e) {
                var t = !!e.get_property(qe),
                    r = !!e.get_config("autocapture");
                this._isAutocaptureEnabled = r && !t
            },
            _previousElementSibling: function(e) {
                if (e.previousElementSibling) return e.previousElementSibling;
                var t = e;
                do {
                    t = t.previousSibling
                } while (t && !fe(t));
                return t
            },
            _getAugmentPropertiesFromElement: function(e) {
                if (!ye(e)) return {};
                var t = {};
                return L(e.attributes, (function(e) {
                    if (e.name.startsWith("data-ph-capture-attribute")) {
                        var r = e.name.replace("data-ph-capture-attribute-", ""),
                            n = e.value;
                        r && n && be(n) && (t[r] = n)
                    }
                })), t
            },
            _getPropertiesFromElement: function(e, t, r) {
                var n = e.tagName.toLowerCase(),
                    i = {
                        tag_name: n
                    };
                ve.indexOf(n) > -1 && !r && ("a" === n.toLowerCase() || "button" === n.toLowerCase() ? i.$el_text = ke(e) : i.$el_text = pe(e));
                var o = de(e);
                o.length > 0 && (i.classes = o.split(" ").filter((function(e) {
                    return "" !== e
                }))), L(e.attributes, (function(r) {
                    var n;
                    me(e) && -1 === ["name", "id", "class"].indexOf(r.name) || !t && be(r.value) && ("string" != typeof(n = r.name) || "_ngcontent" !== n.substring(0, 10) && "_nghost" !== n.substring(0, 7)) && (i["attr__" + r.name] = r.value)
                }));
                for (var s = 1, a = 1, c = e; c = this._previousElementSibling(c);) s++, c.tagName === e.tagName && a++;
                return i.nth_child = s, i.nth_of_type = a, i
            },
            _getDefaultProperties: function(e) {
                return {
                    $event_type: e,
                    $ce_version: 1
                }
            },
            _extractCustomPropertyValue: function(e) {
                var t = [];
                return L(document.querySelectorAll(e.css_selector), (function(e) {
                    var r;
                    ["input", "select"].indexOf(e.tagName.toLowerCase()) > -1 ? r = e.value : e.textContent && (r = e.textContent), be(r) && t.push(r)
                })), t.join(", ")
            },
            _getCustomProperties: function(e) {
                var t = this,
                    r = {};
                return L(this._customProperties, (function(n) {
                    L(n.event_selectors, (function(i) {
                        L(document.querySelectorAll(i), (function(i) {
                            W(e, i) && ye(i) && (r[n.name] = t._extractCustomPropertyValue(n))
                        }))
                    }))
                })), r
            },
            _getEventTarget: function(e) {
                return void 0 === e.target ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
                var t
            },
            _captureEvent: function(e, t) {
                var r, n = this,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "$autocapture",
                    o = this._getEventTarget(e);
                (_e(o) && (o = o.parentNode || null), "$autocapture" === i && "click" === e.type && e instanceof MouseEvent) && (null !== (r = this.rageclicks) && void 0 !== r && r.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, t, "$rageclick"));
                if (o && function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                        if (!e || he(e, "html") || !fe(e)) return !1;
                        if (null != r && r.url_allowlist) {
                            var n = window.location.href,
                                i = r.url_allowlist;
                            if (i && !i.some((function(e) {
                                    return n.match(e)
                                }))) return !1
                        }
                        if (null != r && r.dom_event_allowlist) {
                            var o = r.dom_event_allowlist;
                            if (o && !o.some((function(e) {
                                    return t.type === e
                                }))) return !1
                        }
                        if (null != r && r.element_allowlist) {
                            var s = r.element_allowlist;
                            if (s && !s.some((function(t) {
                                    return e.tagName.toLowerCase() === t
                                }))) return !1
                        }
                        if (null != r && r.css_selector_allowlist) {
                            var a = r.css_selector_allowlist;
                            if (a && !a.some((function(t) {
                                    return e.matches(t)
                                }))) return !1
                        }
                        for (var c = !1, u = [e], l = !0, d = e; d.parentNode && !he(d, "body");)
                            if (ge(d.parentNode)) u.push(d.parentNode.host), d = d.parentNode.host;
                            else {
                                if (!(l = d.parentNode || !1)) break;
                                if (ve.indexOf(l.tagName.toLowerCase()) > -1) c = !0;
                                else {
                                    var p = window.getComputedStyle(l);
                                    p && "pointer" === p.getPropertyValue("cursor") && (c = !0)
                                }
                                u.push(l), d = l
                            }
                        var f = window.getComputedStyle(e);
                        if (f && "pointer" === f.getPropertyValue("cursor") && "click" === t.type) return !0;
                        var h = e.tagName.toLowerCase();
                        switch (h) {
                            case "html":
                                return !1;
                            case "form":
                                return "submit" === t.type;
                            case "input":
                            case "select":
                            case "textarea":
                                return "change" === t.type || "click" === t.type;
                            default:
                                return c ? "click" === t.type : "click" === t.type && (ve.indexOf(h) > -1 || "true" === e.getAttribute("contenteditable"))
                        }
                    }(o, e, this.config)) {
                    for (var s = [o], a = o; a.parentNode && !he(a, "body");) ge(a.parentNode) ? (s.push(a.parentNode.host), a = a.parentNode.host) : (s.push(a.parentNode), a = a.parentNode);
                    var c, u = [],
                        l = {},
                        d = !1;
                    if (L(s, (function(e) {
                            var r = ye(e);
                            "a" === e.tagName.toLowerCase() && (c = e.getAttribute("href"), c = r && be(c) && c), W(de(e).split(" "), "ph-no-capture") && (d = !0), u.push(n._getPropertiesFromElement(e, t.get_config("mask_all_element_attributes"), t.get_config("mask_all_text")));
                            var i = n._getAugmentPropertiesFromElement(e);
                            H(l, i)
                        })), t.get_config("mask_all_text") || ("a" === o.tagName.toLowerCase() || "button" === o.tagName.toLowerCase() ? u[0].$el_text = ke(o) : u[0].$el_text = pe(o)), c && (u[0].attr__href = c), d) return !1;
                    var p = H(this._getDefaultProperties(e.type), {
                        $elements: u
                    }, this._getCustomProperties(s), l);
                    return t.capture(i, p), !0
                }
            },
            _navigate: function(e) {
                window.location.href = e
            },
            _addDomEventHandlers: function(e) {
                var t = this,
                    r = function(r) {
                        r = r || window.event, t._captureEvent(r, e)
                    };
                ue(document, "submit", r, !1, !0), ue(document, "change", r, !1, !0), ue(document, "click", r, !1, !0)
            },
            _customProperties: [],
            rageclicks: null,
            config: void 0,
            init: function(e) {
                var t;
                "boolean" != typeof e.__autocapture && (this.config = e.__autocapture), null !== (t = this.config) && void 0 !== t && t.url_allowlist && (this.config.url_allowlist = this.config.url_allowlist.map((function(e) {
                    return new RegExp(e)
                }))), this.rageclicks = new Pe(e.get_config("rageclick"))
            },
            afterDecideResponse: function(e, t) {
                this._setIsAutocaptureEnabled(t);
                var r = t.get_config("token");
                this._initializedTokens.indexOf(r) > -1 ? D.log('autocapture already initialized for token "' + r + '"') : (t.persistence && t.persistence.register(s({}, qe, !!e.autocapture_opt_out)), this._initializedTokens.push(r), e && e.config && e.config.enable_collect_everything && this._isAutocaptureEnabled ? (e.custom_properties && (this._customProperties = e.custom_properties), this._addDomEventHandlers(t)) : t.__autocapture = !1)
            },
            enabledForProject: function(e, t, r) {
                if (!e) return !0;
                t = G(t) ? 10 : t, r = G(r) ? 10 : r;
                for (var n = 0, i = 0; i < e.length; i++) n += e.charCodeAt(i);
                return n % t < r
            },
            isBrowserSupported: function() {
                return V(document.querySelectorAll)
            }
        };
    ! function(e) {
        for (var t in e) "function" == typeof e[t] && (e[t] = e[t].bind(e))
    }(Ge),
    function(e) {
        for (var t in e) "function" == typeof e[t] && (e[t] = Y(e[t]))
    }(Ge);
    var ze = "__ph_opt_in_out_";

    function Je(e, t) {
        nt(!0, e, t)
    }

    function Ze(e, t) {
        nt(!1, e, t)
    }

    function Xe(e, t) {
        return "1" === rt(e, t)
    }

    function Ye(e, t) {
        return !! function(e) {
            if (e && e.respectDnt) {
                var t = e && e.window || A,
                    r = t.navigator || {},
                    n = !1;
                return L([r.doNotTrack, r.msDoNotTrack, t.doNotTrack], (function(e) {
                    W([!0, 1, "1", "yes"], e) && (n = !0)
                })), n
            }
            return !1
        }(t) || "0" === rt(e, t)
    }

    function Ke(e, t) {
        et(t = t || {}).remove(tt(e, t), !!t.crossSubdomainCookie)
    }

    function et(e) {
        return "localStorage" === (e = e || {}).persistenceType ? Oe : "localStorage+cookie" === e.persistenceType ? Ae : Ie
    }

    function tt(e, t) {
        return ((t = t || {}).persistencePrefix || ze) + e
    }

    function rt(e, t) {
        return et(t).get(tt(e, t))
    }

    function nt(e, t, r) {
        z(t) && t.length ? (et(r = r || {}).set(tt(t, r), e ? 1 : 0, J(r.cookieExpiration) ? r.cookieExpiration : null, r.crossSubdomainCookie, r.secureCookie), r.capture && e && r.capture(r.captureEventName || "$opt_in", r.captureProperties || {}, {
            send_instantly: !0
        })) : console.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token")
    }

    function it(e, t) {
        var r = !1;
        try {
            var n = e.get_config("token"),
                i = e.get_config("respect_dnt"),
                o = e.get_config("opt_out_capturing_persistence_type"),
                s = e.get_config("opt_out_capturing_cookie_prefix") || void 0,
                a = e.get_config("window");
            n && (r = Ye(n, {
                respectDnt: i,
                persistenceType: o,
                persistencePrefix: s,
                window: a
            }))
        } catch (e) {
            t || console.error("Unexpected error when checking capturing opt-out status: " + e)
        }
        return r
    }

    function ot(e, t, r) {
        return function() {
            for (var n = it(e, r), i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
            if (!n) return t.apply(this, o);
            var a = o[o.length - 1];
            "function" == typeof a && a(0)
        }
    }
    var st = "$set",
        at = function() {
            function e(t) {
                var r = this;
                n(this, e), this._posthog = t, this.set = ot(t, (function(e, t, n) {
                    var i = r.set_action(e, t);
                    return Q(e) && (n = t), r._get_config("save_referrer") && r._posthog.sessionPersistence.update_referrer_info(), i[st] = H({}, le.people_properties(), r._posthog.sessionPersistence.get_referrer_info(), i[st]), r._send_request(i, n)
                })), this.set_once = ot(t, (function(e, t, n) {
                    var i = r.set_once_action(e, t);
                    return Q(e) && (n = t), r._send_request(i, n)
                }))
            }
            return o(e, [{
                key: "toString",
                value: function() {
                    return this._posthog.toString() + ".people"
                }
            }, {
                key: "_send_request",
                value: function(e, t) {
                    e.$token = this._get_config("token"), e.$distinct_id = this._posthog.get_distinct_id();
                    var r = this._posthog.get_property("$device_id"),
                        n = this._posthog.get_property("$user_id"),
                        i = this._posthog.get_property("$had_persisted_distinct_id");
                    r && (e.$device_id = r), n && (e.$user_id = n), i && (e.$had_persisted_distinct_id = i);
                    var o = Z(e),
                        s = te(o, this._get_config("properties_string_max_length")),
                        a = re(JSON.stringify(o));
                    return this._posthog._send_request(this._get_config("api_host") + "/engage/", {
                        data: a
                    }, {}, this._posthog._prepare_callback(t, s)), s
                }
            }, {
                key: "_get_config",
                value: function(e) {
                    return this._posthog.get_config(e)
                }
            }, {
                key: "_is_reserved_property",
                value: function(e) {
                    return "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e
                }
            }, {
                key: "set_action",
                value: function(e, t) {
                    return this.apiActionParser(st, e, t)
                }
            }, {
                key: "set_once_action",
                value: function(e, t) {
                    return this.apiActionParser("$set_once", e, t)
                }
            }, {
                key: "apiActionParser",
                value: function(e, t, r) {
                    var n = this,
                        i = {},
                        o = {};
                    return Q(t) ? L(t, (function(e, t) {
                        n._is_reserved_property(t) || (o[t] = e)
                    })) : o[t] = r, i[e] = o, i
                }
            }]), e
        }(),
        ct = "$active_feature_flags",
        ut = "$enabled_feature_flags",
        lt = "$override_feature_flags",
        dt = "$feature_flag_payloads",
        pt = function() {
            function e(t) {
                n(this, e), this.instance = t, this._override_warning = !1, this.flagCallReported = {}, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1
            }
            return o(e, [{
                key: "getFlags",
                value: function() {
                    return Object.keys(this.getFlagVariants())
                }
            }, {
                key: "getFlagVariants",
                value: function() {
                    var e = this.instance.get_property(ut),
                        t = this.instance.get_property(lt);
                    if (!t) return e || {};
                    for (var r = H({}, e), n = Object.keys(t), i = 0; i < n.length; i++) !1 === t[n[i]] ? delete r[n[i]] : r[n[i]] = t[n[i]];
                    return this._override_warning || (console.warn("[PostHog] Overriding feature flags!", {
                        enabledFlags: e,
                        overriddenFlags: t,
                        finalFlags: r
                    }), this._override_warning = !0), r
                }
            }, {
                key: "getFlagPayloads",
                value: function() {
                    return this.instance.get_property(dt) || {}
                }
            }, {
                key: "reloadFeatureFlags",
                value: function() {
                    this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = !0, this._startReloadTimer())
                }
            }, {
                key: "setAnonymousDistinctId",
                value: function(e) {
                    this.$anon_distinct_id = e
                }
            }, {
                key: "setReloadingPaused",
                value: function(e) {
                    this.reloadFeatureFlagsInAction = e
                }
            }, {
                key: "resetRequestQueue",
                value: function() {
                    this.reloadFeatureFlagsQueued = !1
                }
            }, {
                key: "_startReloadTimer",
                value: function() {
                    var e = this;
                    this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout((function() {
                        !e.reloadFeatureFlagsInAction && e.reloadFeatureFlagsQueued && (e.reloadFeatureFlagsQueued = !1, e._reloadFeatureFlagsRequest())
                    }), 5)
                }
            }, {
                key: "_reloadFeatureFlagsRequest",
                value: function() {
                    var e = this;
                    this.setReloadingPaused(!0);
                    var t = this.instance.get_config("token"),
                        r = re(JSON.stringify({
                            token: t,
                            distinct_id: this.instance.get_distinct_id(),
                            groups: this.instance.getGroups(),
                            $anon_distinct_id: this.$anon_distinct_id
                        }));
                    this.instance._send_request(this.instance.get_config("api_host") + "/decide/?v=3", {
                        data: r
                    }, {
                        method: "POST"
                    }, this.instance._prepare_callback((function(t) {
                        e.$anon_distinct_id = void 0, e.receivedFeatureFlags(t), e.setReloadingPaused(!1), e._startReloadTimer()
                    })))
                }
            }, {
                key: "getFeatureFlag",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.getFlags()) return console.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time."), !1;
                    var r = this.getFlagVariants()[e];
                    return !t.send_event && "send_event" in t || this.flagCallReported[e] || (this.flagCallReported[e] = !0, this.instance.capture("$feature_flag_called", {
                        $feature_flag: e,
                        $feature_flag_response: r
                    })), r
                }
            }, {
                key: "getFeatureFlagPayload",
                value: function(e) {
                    return this.getFlagPayloads()[e]
                }
            }, {
                key: "isFeatureEnabled",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.getFlags() ? !!this.getFeatureFlag(e, t) : (console.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time."), !1)
                }
            }, {
                key: "addFeatureFlagsHandler",
                value: function(e) {
                    this.featureFlagEventHandlers.push(e)
                }
            }, {
                key: "removeFeatureFlagsHandler",
                value: function(e) {
                    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((function(t) {
                        return t !== e
                    }))
                }
            }, {
                key: "receivedFeatureFlags",
                value: function(e) {
                    this.instance.decideEndpointWasHit = !0;
                    var r = this.getFlagVariants(),
                        n = this.getFlagPayloads();
                    ! function(e, r) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            o = e.featureFlags,
                            a = e.featureFlagPayloads;
                        if (o)
                            if (Array.isArray(o)) {
                                var c, u = {};
                                if (o)
                                    for (var l = 0; l < o.length; l++) u[o[l]] = !0;
                                r && r.register((s(c = {}, ct, o), s(c, ut, u), c))
                            } else {
                                var d, p = o,
                                    f = a;
                                e.errorsWhileComputingFlags && (p = t(t({}, n), p), f = t(t({}, i), f)), r && r.register((s(d = {}, ct, Object.keys(p || {})), s(d, ut, p || {}), s(d, dt, f || {}), d))
                            }
                        else r && (r.unregister(ct), r.unregister(ut), r.unregister(dt))
                    }(e, this.instance.persistence, r, n);
                    var i = this._prepareFeatureFlagsForCallbacks(),
                        o = i.flags,
                        a = i.flagVariants;
                    this.featureFlagEventHandlers.forEach((function(e) {
                        return e(o, a)
                    }))
                }
            }, {
                key: "override",
                value: function(e) {
                    if (this._override_warning = !1, !1 === e) this.instance.persistence.unregister(lt);
                    else if (Array.isArray(e)) {
                        for (var t = {}, r = 0; r < e.length; r++) t[e[r]] = !0;
                        this.instance.persistence.register(s({}, lt, t))
                    } else this.instance.persistence.register(s({}, lt, e))
                }
            }, {
                key: "onFeatureFlags",
                value: function(e) {
                    var t = this;
                    if (this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit) {
                        var r = this._prepareFeatureFlagsForCallbacks(),
                            n = r.flags,
                            i = r.flagVariants;
                        e(n, i)
                    }
                    return function() {
                        return t.removeFeatureFlagsHandler(e)
                    }
                }
            }, {
                key: "_prepareFeatureFlagsForCallbacks",
                value: function() {
                    var e = this.getFlags(),
                        t = this.getFlagVariants();
                    return {
                        flags: e.filter((function(e) {
                            return t[e]
                        })),
                        flagVariants: Object.keys(t).filter((function(e) {
                            return t[e]
                        })).reduce((function(e, r) {
                            return e[r] = t[r], e
                        }), {})
                    }
                }
            }]), e
        }(),
        ft = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOCAwSDE2TDAgMTZWOEw4IDBaIiBmaWxsPSIjMkQyRDJEIi8+CjxwYXRoIGQ9Ik0xNiA4VjE2SDhMMTYgOFoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==",
        ht = 2,
        _t = 4,
        gt = 6;
    var vt = "rrweb/console@1";
    var yt = "/e/",
        mt = function() {
            function e(t) {
                n(this, e), this.instance = t, this.captureStarted = !1, this.snapshots = [], this.emit = !1, this.endpoint = yt, this.stopRrweb = void 0, this.windowId = null, this.sessionId = null, this.receivedDecide = !1
            }
            return o(e, [{
                key: "startRecordingIfEnabled",
                value: function() {
                    this.isRecordingEnabled() ? this.startCaptureAndTrySendingQueuedSnapshots() : this.stopRecording()
                }
            }, {
                key: "started",
                value: function() {
                    return this.captureStarted
                }
            }, {
                key: "stopRecording",
                value: function() {
                    this.captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this.captureStarted = !1)
                }
            }, {
                key: "isRecordingEnabled",
                value: function() {
                    var e = !!this.instance.get_property(De),
                        t = !this.instance.get_config("disable_session_recording");
                    return e && t
                }
            }, {
                key: "isConsoleLogCaptureEnabled",
                value: function() {
                    var e = !!this.instance.get_property(Ne),
                        t = this.instance.get_config("enable_recording_console_log");
                    return null != t ? t : e
                }
            }, {
                key: "getRecordingVersion",
                value: function() {
                    var e, t = this.instance.get_property(Le);
                    return (null === (e = this.instance.get_config("session_recording")) || void 0 === e ? void 0 : e.recorderVersion) || t || "v1"
                }
            }, {
                key: "afterDecideResponse",
                value: function(e) {
                    var t, r, n, i, o, a;
                    (this.receivedDecide = !0, this.instance.persistence) && this.instance.persistence.register((s(o = {}, De, !!e.sessionRecording), s(o, Ne, null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.consoleLogRecordingEnabled), s(o, Le, null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.recorderVersion), o));
                    null !== (t = e.sessionRecording) && void 0 !== t && t.endpoint && (this.endpoint = null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.endpoint);
                    null !== (r = e.sessionRecording) && void 0 !== r && r.recorderVersion && (this.recorderVersion = e.sessionRecording.recorderVersion), this.startRecordingIfEnabled()
                }
            }, {
                key: "startCaptureAndTrySendingQueuedSnapshots",
                value: function() {
                    var e = this;
                    this.receivedDecide && (this.emit = !0, this.snapshots.forEach((function(t) {
                        return e._captureSnapshot(t)
                    }))), this._startCapture()
                }
            }, {
                key: "_startCapture",
                value: function() {
                    if (void 0 !== Object.assign && !this.captureStarted && !this.instance.get_config("disable_session_recording")) {
                        this.captureStarted = !0;
                        var e = "v2" === this.getRecordingVersion() ? "recorder-v2.js" : "recorder.js";
                        this.instance.__loaded_recorder_version !== this.getRecordingVersion() ? we(this.instance.get_config("api_host") + "/static/".concat(e, "?v=").concat(P.LIB_VERSION), this._onScriptLoaded.bind(this)) : this._onScriptLoaded()
                    }
                }
            }, {
                key: "_updateWindowAndSessionIds",
                value: function(e) {
                    var t, r = 3 === e.type && 0 === (null === (t = e.data) || void 0 === t ? void 0 : t.source),
                        n = this.instance.sessionManager.checkAndGetSessionAndWindowId(r, e.timestamp),
                        i = n.windowId,
                        o = n.sessionId;
                    if (this.captureStarted && (this.windowId !== i || this.sessionId !== o) && -1 === [ht, _t].indexOf(e.type)) try {
                        var s;
                        null === (s = this.rrwebRecord) || void 0 === s || s.takeFullSnapshot()
                    } catch (e) {
                        D.error("Error taking full snapshot.", e)
                    }
                    this.windowId = i, this.sessionId = o
                }
            }, {
                key: "_onScriptLoaded",
                value: function() {
                    var e = this,
                        r = {
                            blockClass: "ph-no-capture",
                            blockSelector: void 0,
                            ignoreClass: "ph-ignore-input",
                            maskAllInputs: !0,
                            maskInputOptions: {},
                            maskInputFn: void 0,
                            slimDOMOptions: {},
                            collectFonts: !1,
                            inlineStylesheet: !0
                        };
                    this.rrwebRecord = window.rrweb ? window.rrweb.record : window.rrwebRecord;
                    for (var n = this.instance.get_config("session_recording"), i = 0, o = Object.entries(n || {}); i < o.length; i++) {
                        var s = f(o[i], 2),
                            a = s[0],
                            c = s[1];
                        a in r && (r[a] = c)
                    }
                    this.rrwebRecord ? (this.stopRrweb = this.rrwebRecord(t({
                        emit: function(t) {
                            e.onRRwebEmit(t)
                        },
                        plugins: window.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled() ? [window.rrwebConsoleRecord.getRecordConsolePlugin()] : []
                    }, r)), this.instance._addCaptureHook((function(t) {
                        try {
                            var r;
                            if ("$pageview" === t) null === (r = e.rrwebRecord) || void 0 === r || r.addCustomEvent("$pageview", {
                                href: window.location.href
                            })
                        } catch (e) {
                            D.error("Could not add $pageview to rrweb session", e)
                        }
                    }))) : D.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
                }
            }, {
                key: "onRRwebEmit",
                value: function(e) {
                    e = function(e) {
                        if (e && "object" === r(e) && e.type === gt && "object" === r(e.data) && e.data.plugin === vt) {
                            e.data.payload.payload.length > 10 && (e.data.payload.payload = e.data.payload.payload.slice(0, 10), e.data.payload.payload.push("...[truncated]"));
                            for (var t = [], n = 0; n < e.data.payload.payload.length; n++) e.data.payload.payload[n] && e.data.payload.payload[n].length > 2e3 ? t.push(e.data.payload.payload[n].slice(0, 2e3) + "...[truncated]") : t.push(e.data.payload.payload[n]);
                            return e.data.payload.payload = t, e
                        }
                        return e
                    }(function(e) {
                        if (e && "object" === r(e)) {
                            var t = JSON.stringify(e);
                            if (t.length > 5e6) {
                                var n, i = v(t.matchAll(/data:([\w\/\-\.]+);(\w+),([^)"]*)/gim));
                                try {
                                    for (i.s(); !(n = i.n()).done;) {
                                        var o = n.value;
                                        t = "image/" === o[1].toLocaleLowerCase().slice(0, 6) ? t.replace(o[0], ft) : t.replace(o[0], "")
                                    }
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                            }
                            return JSON.parse(t)
                        }
                        return e
                    }(e)), this._updateWindowAndSessionIds(e);
                    var t = {
                        $snapshot_data: e,
                        $session_id: this.sessionId,
                        $window_id: this.windowId
                    };
                    this.instance._captureMetrics.incr("rrweb-record"), this.instance._captureMetrics.incr("rrweb-record-".concat(e.type)), this.emit ? this._captureSnapshot(t) : this.snapshots.push(t)
                }
            }, {
                key: "_captureSnapshot",
                value: function(e) {
                    this.instance.capture("$snapshot", e, {
                        transport: "XHR",
                        method: "POST",
                        endpoint: this.endpoint,
                        _noTruncate: !0,
                        _batchKey: "sessionRecording",
                        _metrics: {
                            rrweb_full_snapshot: e.$snapshot_data.type === ht
                        }
                    })
                }
            }]), e
        }(),
        bt = {
            entryType: 0,
            timeOrigin: 1,
            name: 2,
            startTime: 3,
            redirectStart: 4,
            redirectEnd: 5,
            workerStart: 6,
            fetchStart: 7,
            domainLookupStart: 8,
            domainLookupEnd: 9,
            connectStart: 10,
            secureConnectionStart: 11,
            connectEnd: 12,
            requestStart: 13,
            responseStart: 14,
            responseEnd: 15,
            decodedBodySize: 16,
            encodedBodySize: 17,
            initiatorType: 18,
            nextHopProtocol: 19,
            renderBlockingStatus: 20,
            responseStatus: 21,
            transferSize: 22,
            element: 23,
            renderTime: 24,
            loadTime: 25,
            size: 26,
            id: 27,
            url: 28,
            domComplete: 29,
            domContentLoadedEvent: 30,
            domInteractive: 31,
            loadEventEnd: 32,
            loadEventStart: 33,
            redirectCount: 34,
            navigationType: 35,
            unloadEventEnd: 36,
            unloadEventStart: 37,
            duration: 39,
            timestamp: 40
        },
        wt = ["first-input", "navigation", "paint", "resource"],
        kt = ["/s/", "/e/"],
        St = function() {
            function e(t) {
                n(this, e), s(this, "_forceAllowLocalhost", !1), this.instance = t
            }
            return o(e, [{
                key: "startObservingIfEnabled",
                value: function() {
                    this.isEnabled() ? this.startObserving() : this.stopObserving()
                }
            }, {
                key: "startObserving",
                value: function() {
                    var e = this;
                    if (!this.observer)
                        if (!T.includes(location.hostname) || this._forceAllowLocalhost) try {
                            this.observer = new PerformanceObserver((function(t) {
                                t.getEntries().forEach((function(t) {
                                    e._capturePerformanceEvent(t)
                                }))
                            }));
                            var t = PerformanceObserver.supportedEntryTypes.filter((function(e) {
                                return wt.includes(e)
                            }));
                            t.forEach((function(t) {
                                var r;
                                null === (r = e.observer) || void 0 === r || r.observe({
                                    type: t,
                                    buffered: !0
                                })
                            }))
                        } catch (e) {
                            console.error("PostHog failed to start performance observer", e), this.stopObserving()
                        } else D.log("PostHog Peformance observer not started because we are on localhost.")
                }
            }, {
                key: "stopObserving",
                value: function() {
                    this.observer && (this.observer.disconnect(), this.observer = void 0)
                }
            }, {
                key: "isObserving",
                value: function() {
                    return !!this.observer
                }
            }, {
                key: "isEnabled",
                value: function() {
                    var e, t;
                    return null !== (e = null !== (t = this.instance.get_config("capture_performance")) && void 0 !== t ? t : this.remoteEnabled) && void 0 !== e && e
                }
            }, {
                key: "afterDecideResponse",
                value: function(e) {
                    this.remoteEnabled = e.capturePerformance || !1, this.isEnabled() && this.startObserving()
                }
            }, {
                key: "_capturePerformanceEvent",
                value: function(e) {
                    if (e.name.startsWith(this.instance.get_config("api_host"))) {
                        var t = e.name.replace(this.instance.get_config("api_host"), "");
                        if (kt.find((function(e) {
                                return t.startsWith(e)
                            }))) return
                    }
                    var r = e.toJSON(),
                        n = {},
                        i = Math.floor(Date.now() - performance.now());
                    for (var o in n[bt.timeOrigin] = i, n[bt.timestamp] = Math.floor(i + e.startTime), bt) void 0 !== r[o] && (n[bt[o]] = r[o]);
                    if (this.capturePerformanceEvent(n), Pt(e)) {
                        var a, c = v(e.serverTiming || []);
                        try {
                            for (c.s(); !(a = c.n()).done;) {
                                var u, l = a.value;
                                this.capturePerformanceEvent((s(u = {}, bt.timeOrigin, i), s(u, bt.timestamp, Math.floor(i + e.startTime)), s(u, bt.name, l.name), s(u, bt.duration, l.duration), s(u, bt.entryType, "serverTiming"), u))
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                    }
                }
            }, {
                key: "capturePerformanceEvent",
                value: function(e) {
                    var t, r = e[bt.timestamp];
                    null === (t = this.instance.sessionRecording) || void 0 === t || t.onRRwebEmit({
                        type: 6,
                        data: {
                            plugin: "posthog/network@1",
                            payload: e
                        },
                        timestamp: r
                    })
                }
            }]), e
        }(),
        Pt = function(e) {
            return "navigation" === e.entryType || "resource" === e.entryType
        },
        Ft = function() {
            function e(t) {
                n(this, e), this.instance = t, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags()
            }
            return o(e, [{
                key: "call",
                value: function() {
                    var e = this,
                        t = re(JSON.stringify({
                            token: this.instance.get_config("token"),
                            distinct_id: this.instance.get_distinct_id(),
                            groups: this.instance.getGroups()
                        }));
                    this.instance._send_request("".concat(this.instance.get_config("api_host"), "/decide/?v=3"), {
                        data: t,
                        verbose: !0
                    }, {
                        method: "POST"
                    }, (function(t) {
                        return e.parseDecideResponse(t)
                    }))
                }
            }, {
                key: "parseDecideResponse",
                value: function(e) {
                    var t, r, n = this;
                    if (0 !== (null == e ? void 0 : e.status)) {
                        if (this.instance.decideEndpointWasHit = !0, !document || !document.body) return console.log("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((function() {
                            n.parseDecideResponse(e)
                        }), 500);
                        if (this.instance.toolbar.afterDecideResponse(e), null === (t = this.instance.sessionRecording) || void 0 === t || t.afterDecideResponse(e), Ge.afterDecideResponse(e, this.instance), null === (r = this.instance.webPerformance) || void 0 === r || r.afterDecideResponse(e), this.instance.featureFlags.receivedFeatureFlags(e), this.instance.compression = {}, e.supportedCompression && !this.instance.get_config("disable_compression")) {
                            var i, o = {},
                                s = v(e.supportedCompression);
                            try {
                                for (s.s(); !(i = s.n()).done;) {
                                    o[i.value] = !0
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                            this.instance.compression = o
                        }
                        if (e.siteApps)
                            if (this.instance.get_config("opt_in_site_apps")) {
                                var a, c = this.instance.get_config("api_host"),
                                    u = v(e.siteApps);
                                try {
                                    var l = function() {
                                        var e = a.value,
                                            t = e.id,
                                            r = e.url,
                                            i = document.createElement("script");
                                        i.src = [c, "/" === c[c.length - 1] && "/" === r[0] ? r.substring(1) : r].join(""), i.onerror = function(e) {
                                            console.error("Error while initializing PostHog app with config id ".concat(t), e)
                                        }, window["__$$ph_site_app_".concat(t)] = n.instance, document.body.appendChild(i)
                                    };
                                    for (u.s(); !(a = u.n()).done;) l()
                                } catch (e) {
                                    u.e(e)
                                } finally {
                                    u.f()
                                }
                            } else e.siteApps.length > 0 && console.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
                    } else console.error("Failed to fetch feature flags from PostHog.")
                }
            }]), e
        }(),
        It = ["https://app.posthog.com", "https://eu.posthog.com"],
        Et = ["source"],
        Ot = function() {
            function e(t) {
                n(this, e), this.instance = t
            }
            return o(e, [{
                key: "afterDecideResponse",
                value: function(e) {
                    var r = e.toolbarParams || e.editorParams || (e.toolbarVersion ? {
                        toolbarVersion: e.toolbarVersion
                    } : {});
                    e.isAuthenticated && r.toolbarVersion && 0 === r.toolbarVersion.indexOf("toolbar") && this.loadToolbar(t(t({}, r), {}, {
                        apiURL: this.instance.get_config("api_host")
                    }))
                }
            }, {
                key: "maybeLoadToolbar",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.history;
                    try {
                        if (!t) {
                            try {
                                window.localStorage.setItem("test", "test"), window.localStorage.removeItem("test")
                            } catch (e) {
                                return !1
                            }
                            t = window.localStorage
                        }
                        var n, i = ce(e.hash, "__posthog") || ce(e.hash, "state"),
                            o = i ? JSON.parse(decodeURIComponent(i)) : null;
                        return o && "ph_authorize" === o.action ? ((n = o).source = "url", n && Object.keys(n).length > 0 && (o.desiredHash ? e.hash = o.desiredHash : r ? r.replaceState("", document.title, e.pathname + e.search) : e.hash = "")) : ((n = JSON.parse(t.getItem("_postHogToolbarParams") || "{}")).source = "localstorage", delete n.userIntent), n.apiURL || (n.apiURL = this.instance.get_config("api_host")), !(!n.token || this.instance.get_config("token") !== n.token) && (this.loadToolbar(n), !0)
                    } catch (e) {
                        return !1
                    }
                }
            }, {
                key: "loadToolbar",
                value: function(e) {
                    var r = this;
                    if (window._postHogToolbarLoaded) return !1;
                    window._postHogToolbarLoaded = !0;
                    var n = (null == e ? void 0 : e.apiURL) || this.instance.get_config("api_host"),
                        i = 3e4 * Math.floor(Date.now() / 3e4),
                        o = "".concat(n).concat(n.endsWith("/") ? "" : "/", "static/toolbar.js?_ts=").concat(i),
                        s = !It.includes(this.instance.get_config("api_host")) && this.instance.get_config("advanced_disable_toolbar_metrics"),
                        a = t(t({
                            apiURL: n,
                            jsURL: n,
                            token: this.instance.get_config("token")
                        }, e), s ? {
                            instrument: !1
                        } : {});
                    a.source;
                    var c = l(a, Et);
                    return window.localStorage.setItem("_postHogToolbarParams", JSON.stringify(c)), we(o, (function() {
                        (window.ph_load_toolbar || window.ph_load_editor)(a, r.instance)
                    })), ue(window, "turbolinks:load", (function() {
                        window._postHogToolbarLoaded = !1, r.loadToolbar(a)
                    })), !0
                }
            }, {
                key: "_loadEditor",
                value: function(e) {
                    return this.loadToolbar(e)
                }
            }, {
                key: "maybeLoadEditor",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.history;
                    return this.maybeLoadToolbar(e, t, r)
                }
            }]), e
        }(),
        At = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
                n(this, e), this.isPolling = !0, this._event_queue = [], this._empty_queue_count = 0, this._poller = void 0, this._pollInterval = t
            }
            return o(e, [{
                key: "setPollInterval",
                value: function(e) {
                    this._pollInterval = e, this.isPolling && this.poll()
                }
            }, {
                key: "poll",
                value: function() {}
            }, {
                key: "unload",
                value: function() {}
            }, {
                key: "getTime",
                value: function() {
                    return (new Date).getTime()
                }
            }]), e
        }(),
        xt = function(e) {
            a(i, e);
            var r = p(i);

            function i(e, t) {
                var o, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3;
                return n(this, i), (o = r.call(this, s)).handlePollRequest = t, o.captureMetrics = e, o
            }
            return o(i, [{
                key: "enqueue",
                value: function(e, t, r) {
                    this.captureMetrics.incr("batch-enqueue"), this._event_queue.push({
                        url: e,
                        data: t,
                        options: r
                    }), this.isPolling || (this.isPolling = !0, this.poll())
                }
            }, {
                key: "poll",
                value: function() {
                    var e = this;
                    clearTimeout(this._poller), this._poller = setTimeout((function() {
                        if (e._event_queue.length > 0) {
                            var t = e.formatQueue(),
                                r = function(r) {
                                    var n = t[r],
                                        i = n.url,
                                        o = n.data,
                                        s = n.options;
                                    L(o, (function(t, r) {
                                        o[r].offset = Math.abs(o[r].timestamp - e.getTime()), delete o[r].timestamp
                                    })), e.handlePollRequest(i, o, s), e.captureMetrics.incr("batch-requests"), e.captureMetrics.incr("batch-requests-".concat(i.slice(i.length - 2))), e.captureMetrics.incr("batch-handle", o.length), e.captureMetrics.incr("batch-handle-".concat(i.slice(i.length - 2)), o.length)
                                };
                            for (var n in t) r(n);
                            e._event_queue.length = 0, e._empty_queue_count = 0
                        } else e._empty_queue_count++;
                        e._empty_queue_count > 4 && (e.isPolling = !1, e._empty_queue_count = 0), e.isPolling && e.poll()
                    }), this._pollInterval)
                }
            }, {
                key: "updateUnloadMetrics",
                value: function() {
                    var e = this.formatQueue();
                    for (var t in e) {
                        var r = e[t],
                            n = r.url,
                            i = r.data;
                        this.captureMetrics.incr("batch-unload-requests"), this.captureMetrics.incr("batch-unload-requests-".concat(n.slice(n.length - 2))), this.captureMetrics.incr("batch-unload", i.length), this.captureMetrics.incr("batch-unload-".concat(n.slice(n.length - 2)), i.length)
                    }
                }
            }, {
                key: "unload",
                value: function() {
                    var e = this;
                    clearTimeout(this._poller);
                    var r = this._event_queue.length > 0 ? this.formatQueue() : {};
                    this._event_queue.length = 0;
                    var n = Object.values(r);
                    [].concat(h(n.filter((function(e) {
                        return 0 === e.url.indexOf("/e")
                    }))), h(n.filter((function(e) {
                        return 0 !== e.url.indexOf("/e")
                    })))).map((function(r) {
                        var n = r.url,
                            i = r.data,
                            o = r.options;
                        e.handlePollRequest(n, i, t(t({}, o), {}, {
                            transport: "sendBeacon"
                        }))
                    }))
                }
            }, {
                key: "formatQueue",
                value: function() {
                    var e = {};
                    return L(this._event_queue, (function(t) {
                        var r = t.url,
                            n = t.data,
                            i = t.options,
                            o = (i ? i._batchKey : null) || r;
                        void 0 === e[o] && (e[o] = {
                            data: [],
                            url: r,
                            options: i
                        }), i && e[o].options && e[o].options._metrics && !e[o].options._metrics.rrweb_full_snapshot && (e[o].options._metrics.rrweb_full_snapshot = i._metrics.rrweb_full_snapshot), e[o].data.push(n)
                    })), e
                }
            }]), i
        }(At),
        Ct = function() {
            function e(t) {
                n(this, e), this.enabled = t, this.metrics = {}
            }
            return o(e, [{
                key: "incr",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    this.enabled && (e = "phjs-".concat(e), this.metrics[e] = (this.metrics[e] || 0) + t)
                }
            }, {
                key: "decr",
                value: function(e) {
                    this.enabled && (e = "phjs-".concat(e), this.metrics[e] = (this.metrics[e] || 0) - 1)
                }
            }]), e
        }(),
        Rt = Uint8Array,
        Tt = Uint16Array,
        $t = Uint32Array,
        Mt = new Rt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        jt = new Rt([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        qt = new Rt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        Dt = function(e, t) {
            for (var r = new Tt(31), n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
            var i = new $t(r[30]);
            for (n = 1; n < 30; ++n)
                for (var o = r[n]; o < r[n + 1]; ++o) i[o] = o - r[n] << 5 | n;
            return [r, i]
        },
        Nt = Dt(Mt, 2),
        Lt = Nt[0],
        Bt = Nt[1];
    Lt[28] = 258, Bt[258] = 28;
    for (var Ht = Dt(jt, 0)[1], Ut = new Tt(32768), Vt = 0; Vt < 32768; ++Vt) {
        var Wt = (43690 & Vt) >>> 1 | (21845 & Vt) << 1;
        Wt = (61680 & (Wt = (52428 & Wt) >>> 2 | (13107 & Wt) << 2)) >>> 4 | (3855 & Wt) << 4, Ut[Vt] = ((65280 & Wt) >>> 8 | (255 & Wt) << 8) >>> 1
    }
    var Qt = function(e, t, r) {
            for (var n = e.length, i = 0, o = new Tt(t); i < n; ++i) ++o[e[i] - 1];
            var s, a = new Tt(t);
            for (i = 0; i < t; ++i) a[i] = a[i - 1] + o[i - 1] << 1;
            if (r) {
                s = new Tt(1 << t);
                var c = 15 - t;
                for (i = 0; i < n; ++i)
                    if (e[i])
                        for (var u = i << 4 | e[i], l = t - e[i], d = a[e[i] - 1]++ << l, p = d | (1 << l) - 1; d <= p; ++d) s[Ut[d] >>> c] = u
            } else
                for (s = new Tt(n), i = 0; i < n; ++i) s[i] = Ut[a[e[i] - 1]++] >>> 15 - e[i];
            return s
        },
        Gt = new Rt(288);
    for (Vt = 0; Vt < 144; ++Vt) Gt[Vt] = 8;
    for (Vt = 144; Vt < 256; ++Vt) Gt[Vt] = 9;
    for (Vt = 256; Vt < 280; ++Vt) Gt[Vt] = 7;
    for (Vt = 280; Vt < 288; ++Vt) Gt[Vt] = 8;
    var zt = new Rt(32);
    for (Vt = 0; Vt < 32; ++Vt) zt[Vt] = 5;
    var Jt, Zt = Qt(Gt, 9, 0),
        Xt = Qt(zt, 5, 0),
        Yt = function(e) {
            return (e / 8 >> 0) + (7 & e && 1)
        },
        Kt = function(e, t, r) {
            (null == t || t < 0) && (t = 0), (null == r || r > e.length) && (r = e.length);
            var n = new(e instanceof Tt ? Tt : e instanceof $t ? $t : Rt)(r - t);
            return n.set(e.subarray(t, r)), n
        },
        er = function(e, t, r) {
            r <<= 7 & t;
            var n = t / 8 >> 0;
            e[n] |= r, e[n + 1] |= r >>> 8
        },
        tr = function(e, t, r) {
            r <<= 7 & t;
            var n = t / 8 >> 0;
            e[n] |= r, e[n + 1] |= r >>> 8, e[n + 2] |= r >>> 16
        },
        rr = function(e, t) {
            for (var r = [], n = 0; n < e.length; ++n) e[n] && r.push({
                s: n,
                f: e[n]
            });
            var i = r.length,
                o = r.slice();
            if (!i) return [new Rt(0), 0];
            if (1 == i) {
                var s = new Rt(r[0].s + 1);
                return s[r[0].s] = 1, [s, 1]
            }
            r.sort((function(e, t) {
                return e.f - t.f
            })), r.push({
                s: -1,
                f: 25001
            });
            var a = r[0],
                c = r[1],
                u = 0,
                l = 1,
                d = 2;
            for (r[0] = {
                    s: -1,
                    f: a.f + c.f,
                    l: a,
                    r: c
                }; l != i - 1;) a = r[r[u].f < r[d].f ? u++ : d++], c = r[u != l && r[u].f < r[d].f ? u++ : d++], r[l++] = {
                s: -1,
                f: a.f + c.f,
                l: a,
                r: c
            };
            var p = o[0].s;
            for (n = 1; n < i; ++n) o[n].s > p && (p = o[n].s);
            var f = new Tt(p + 1),
                h = nr(r[l - 1], f, 0);
            if (h > t) {
                n = 0;
                var _ = 0,
                    g = h - t,
                    v = 1 << g;
                for (o.sort((function(e, t) {
                        return f[t.s] - f[e.s] || e.f - t.f
                    })); n < i; ++n) {
                    var y = o[n].s;
                    if (!(f[y] > t)) break;
                    _ += v - (1 << h - f[y]), f[y] = t
                }
                for (_ >>>= g; _ > 0;) {
                    var m = o[n].s;
                    f[m] < t ? _ -= 1 << t - f[m]++ - 1 : ++n
                }
                for (; n >= 0 && _; --n) {
                    var b = o[n].s;
                    f[b] == t && (--f[b], ++_)
                }
                h = t
            }
            return [new Rt(f), h]
        },
        nr = function e(t, r, n) {
            return -1 == t.s ? Math.max(e(t.l, r, n + 1), e(t.r, r, n + 1)) : r[t.s] = n
        },
        ir = function(e) {
            for (var t = e.length; t && !e[--t];);
            for (var r = new Tt(++t), n = 0, i = e[0], o = 1, s = function(e) {
                    r[n++] = e
                }, a = 1; a <= t; ++a)
                if (e[a] == i && a != t) ++o;
                else {
                    if (!i && o > 2) {
                        for (; o > 138; o -= 138) s(32754);
                        o > 2 && (s(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0)
                    } else if (o > 3) {
                        for (s(i), --o; o > 6; o -= 6) s(8304);
                        o > 2 && (s(o - 3 << 5 | 8208), o = 0)
                    }
                    for (; o--;) s(i);
                    o = 1, i = e[a]
                }
            return [r.subarray(0, n), t]
        },
        or = function(e, t) {
            for (var r = 0, n = 0; n < t.length; ++n) r += e[n] * t[n];
            return r
        },
        sr = function(e, t, r) {
            var n = r.length,
                i = Yt(t + 2);
            e[i] = 255 & n, e[i + 1] = n >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
            for (var o = 0; o < n; ++o) e[i + o + 4] = r[o];
            return 8 * (i + 4 + n)
        },
        ar = function(e, t, r, n, i, o, s, a, c, u, l) {
            er(t, l++, r), ++i[256];
            for (var d = rr(i, 15), p = d[0], f = d[1], h = rr(o, 15), _ = h[0], g = h[1], v = ir(p), y = v[0], m = v[1], b = ir(_), w = b[0], k = b[1], S = new Tt(19), P = 0; P < y.length; ++P) S[31 & y[P]]++;
            for (P = 0; P < w.length; ++P) S[31 & w[P]]++;
            for (var F = rr(S, 7), I = F[0], E = F[1], O = 19; O > 4 && !I[qt[O - 1]]; --O);
            var A, x, C, R, T = u + 5 << 3,
                $ = or(i, Gt) + or(o, zt) + s,
                M = or(i, p) + or(o, _) + s + 14 + 3 * O + or(S, I) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
            if (T <= $ && T <= M) return sr(t, l, e.subarray(c, c + u));
            if (er(t, l, 1 + (M < $)), l += 2, M < $) {
                A = Qt(p, f, 0), x = p, C = Qt(_, g, 0), R = _;
                var j = Qt(I, E, 0);
                er(t, l, m - 257), er(t, l + 5, k - 1), er(t, l + 10, O - 4), l += 14;
                for (P = 0; P < O; ++P) er(t, l + 3 * P, I[qt[P]]);
                l += 3 * O;
                for (var q = [y, w], D = 0; D < 2; ++D) {
                    var N = q[D];
                    for (P = 0; P < N.length; ++P) {
                        var L = 31 & N[P];
                        er(t, l, j[L]), l += I[L], L > 15 && (er(t, l, N[P] >>> 5 & 127), l += N[P] >>> 12)
                    }
                }
            } else A = Zt, x = Gt, C = Xt, R = zt;
            for (P = 0; P < a; ++P)
                if (n[P] > 255) {
                    L = n[P] >>> 18 & 31;
                    tr(t, l, A[L + 257]), l += x[L + 257], L > 7 && (er(t, l, n[P] >>> 23 & 31), l += Mt[L]);
                    var B = 31 & n[P];
                    tr(t, l, C[B]), l += R[B], B > 3 && (tr(t, l, n[P] >>> 5 & 8191), l += jt[B])
                } else tr(t, l, A[n[P]]), l += x[n[P]];
            return tr(t, l, A[256]), l + x[256]
        },
        cr = new $t([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        ur = new Rt(0),
        lr = function() {
            for (var e = new $t(256), t = 0; t < 256; ++t) {
                for (var r = t, n = 9; --n;) r = (1 & r && 3988292384) ^ r >>> 1;
                e[t] = r
            }
            return e
        }(),
        dr = function() {
            var e = 4294967295;
            return {
                p: function(t) {
                    for (var r = e, n = 0; n < t.length; ++n) r = lr[255 & r ^ t[n]] ^ r >>> 8;
                    e = r
                },
                d: function() {
                    return 4294967295 ^ e
                }
            }
        },
        pr = function(e, t, r, n, i) {
            return function(e, t, r, n, i, o) {
                var s = e.length,
                    a = new Rt(n + s + 5 * (1 + Math.floor(s / 7e3)) + i),
                    c = a.subarray(n, a.length - i),
                    u = 0;
                if (!t || s < 8)
                    for (var l = 0; l <= s; l += 65535) {
                        var d = l + 65535;
                        d < s ? u = sr(c, u, e.subarray(l, d)) : (c[l] = o, u = sr(c, u, e.subarray(l, s)))
                    } else {
                        for (var p = cr[t - 1], f = p >>> 13, h = 8191 & p, _ = (1 << r) - 1, g = new Tt(32768), v = new Tt(_ + 1), y = Math.ceil(r / 3), m = 2 * y, b = function(t) {
                                return (e[t] ^ e[t + 1] << y ^ e[t + 2] << m) & _
                            }, w = new $t(25e3), k = new Tt(288), S = new Tt(32), P = 0, F = 0, I = (l = 0, 0), E = 0, O = 0; l < s; ++l) {
                            var A = b(l),
                                x = 32767 & l,
                                C = v[A];
                            if (g[x] = C, v[A] = x, E <= l) {
                                var R = s - l;
                                if ((P > 7e3 || I > 24576) && R > 423) {
                                    u = ar(e, c, 0, w, k, S, F, I, O, l - O, u), I = P = F = 0, O = l;
                                    for (var T = 0; T < 286; ++T) k[T] = 0;
                                    for (T = 0; T < 30; ++T) S[T] = 0
                                }
                                var $ = 2,
                                    M = 0,
                                    j = h,
                                    q = x - C & 32767;
                                if (R > 2 && A == b(l - q))
                                    for (var D = Math.min(f, R) - 1, N = Math.min(32767, l), L = Math.min(258, R); q <= N && --j && x != C;) {
                                        if (e[l + $] == e[l + $ - q]) {
                                            for (var B = 0; B < L && e[l + B] == e[l + B - q]; ++B);
                                            if (B > $) {
                                                if ($ = B, M = q, B > D) break;
                                                var H = Math.min(q, B - 2),
                                                    U = 0;
                                                for (T = 0; T < H; ++T) {
                                                    var V = l - q + T + 32768 & 32767,
                                                        W = V - g[V] + 32768 & 32767;
                                                    W > U && (U = W, C = V)
                                                }
                                            }
                                        }
                                        q += (x = C) - (C = g[x]) + 32768 & 32767
                                    }
                                if (M) {
                                    w[I++] = 268435456 | Bt[$] << 18 | Ht[M];
                                    var Q = 31 & Bt[$],
                                        G = 31 & Ht[M];
                                    F += Mt[Q] + jt[G], ++k[257 + Q], ++S[G], E = l + $, ++P
                                } else w[I++] = e[l], ++k[e[l]]
                            }
                        }
                        u = ar(e, c, o, w, k, S, F, I, O, l - O, u), o || (u = sr(c, u, ur))
                    }
                return Kt(a, 0, n + Yt(u) + i)
            }(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, r, n, !i)
        },
        fr = function(e, t, r) {
            for (; r; ++t) e[t] = r, r >>>= 8
        },
        hr = function(e, t) {
            var r = t.filename;
            if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0, e[9] = 3, 0 != t.mtime && fr(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), r) {
                e[3] = 8;
                for (var n = 0; n <= r.length; ++n) e[n + 10] = r.charCodeAt(n)
            }
        },
        _r = function(e) {
            return 10 + (e.filename && e.filename.length + 1 || 0)
        };

    function gr(e, t) {
        void 0 === t && (t = {});
        var r = dr(),
            n = e.length;
        r.p(e);
        var i = pr(e, t, _r(t), 8),
            o = i.length;
        return hr(i, t), fr(i, o - 8, r.d()), fr(i, o - 4, n), i
    }

    function vr(e, t) {
        var r = e.length;
        if (!t && "undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
        for (var n = new Rt(e.length + (e.length >>> 1)), i = 0, o = function(e) {
                n[i++] = e
            }, s = 0; s < r; ++s) {
            if (i + 5 > n.length) {
                var a = new Rt(i + 8 + (r - s << 1));
                a.set(n), n = a
            }
            var c = e.charCodeAt(s);
            c < 128 || t ? o(c) : c < 2048 ? (o(192 | c >>> 6), o(128 | 63 & c)) : c > 55295 && c < 57344 ? (o(240 | (c = 65536 + (1047552 & c) | 1023 & e.charCodeAt(++s)) >>> 18), o(128 | c >>> 12 & 63), o(128 | c >>> 6 & 63), o(128 | 63 & c)) : (o(224 | c >>> 12), o(128 | c >>> 6 & 63), o(128 | 63 & c))
        }
        return Kt(n, 0, i)
    }! function(e) {
        e.GZipJS = "gzip-js", e.LZ64 = "lz64", e.Base64 = "base64"
    }(Jt || (Jt = {}));
    var yr, mr, br, wr = function(e, t, r) {
            var n = t || {};
            n.ip = r.ip ? 1 : 0, n._ = (new Date).getTime().toString(), n.ver = P.LIB_VERSION;
            var i = e.split("?");
            if (i.length > 1) {
                var o, s = v(i[1].split("&"));
                try {
                    for (s.s(); !(o = s.n()).done;) {
                        var a = o.value.split("=")[0];
                        n[a] && delete n[a]
                    }
                } catch (e) {
                    s.e(e)
                } finally {
                    s.f()
                }
            }
            var c = e.indexOf("?") > -1 ? "&" : "?";
            return e + c + function(e) {
                var t, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
                    i = [];
                return L(e, (function(e, n) {
                    t = encodeURIComponent(e.toString()), r = encodeURIComponent(n), i[i.length] = r + "=" + t
                })), i.join(n)
            }(n)
        },
        kr = function e(t, r) {
            if (r.blob && t.buffer) return new Blob([t.buffer], {
                type: "text/plain"
            });
            if (r.sendBeacon || r.blob) {
                var n = e(t, {
                    method: "POST"
                });
                return new Blob([n], {
                    type: "application/x-www-form-urlencoded"
                })
            }
            if ("POST" !== r.method) return null;
            var i, o;
            return i = Array.isArray(t) || (o = t, "[object Uint8Array]" === Object.prototype.toString.call(o)) ? "data=" + encodeURIComponent(t) : "data=" + encodeURIComponent(t.data), "compression" in t && t.compression && (i += "&compression=" + t.compression), i
        },
        Sr = function(e) {
            var t = e.url,
                r = e.data,
                n = e.headers,
                i = e.options,
                o = e.captureMetrics,
                s = e.callback,
                a = e.retriesPerformedSoFar,
                c = e.retryQueue,
                u = e.onXHRError,
                l = e.timeout,
                d = void 0 === l ? 1e4 : l,
                p = new XMLHttpRequest;
            p.open(i.method || "GET", t, !0);
            var f = kr(r, i);
            o.incr("_send_request"), o.incr("_send_request_inflight"), L(n, (function(e, t) {
                p.setRequestHeader(t, e)
            })), "POST" !== i.method || i.blob || p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), p.timeout = d, p.withCredentials = !0, p.onreadystatechange = function() {
                if (4 === p.readyState)
                    if (o.incr("xhr-response"), o.incr("xhr-response-".concat(p.status)), o.decr("_send_request_inflight"), 200 === p.status) {
                        if (s) {
                            var e;
                            try {
                                e = JSON.parse(p.responseText)
                            } catch (e) {
                                return void D.error(e)
                            }
                            s(e)
                        }
                    } else "function" == typeof u && u(p), [401, 403, 404, 500].indexOf(p.status) < 0 && c.enqueue({
                        url: t,
                        data: r,
                        options: i,
                        headers: n,
                        retriesPerformedSoFar: (a || 0) + 1,
                        callback: s
                    }), s && s({
                        status: 0
                    })
            }, p.send(f)
        },
        Pr = function(e) {
            a(i, e);
            var r = p(i);

            function i(e, t) {
                var o;
                return n(this, i), (o = r.call(this)).captureMetrics = e, o.isPolling = !1, o.queue = [], o.areWeOnline = !0, o.onXHRError = t, "undefined" != typeof window && "onLine" in window.navigator && (o.areWeOnline = window.navigator.onLine, window.addEventListener("online", (function() {
                    o._handleWeAreNowOnline()
                })), window.addEventListener("offline", (function() {
                    o.areWeOnline = !1
                }))), o
            }
            return o(i, [{
                key: "enqueue",
                value: function(e) {
                    var t = e.retriesPerformedSoFar || 0;
                    if (!(t >= 10)) {
                        var r = 3e3 * Math.pow(2, t),
                            n = new Date(Date.now() + r);
                        console.warn("Enqueued failed request for retry in ".concat(r)), this.queue.push({
                            retryAt: n,
                            requestData: e
                        }), this.isPolling || (this.isPolling = !0, this.poll())
                    }
                }
            }, {
                key: "poll",
                value: function() {
                    var e = this;
                    this._poller && clearTimeout(this._poller), this._poller = setTimeout((function() {
                        e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll()
                    }), this._pollInterval)
                }
            }, {
                key: "flush",
                value: function() {
                    var e = new Date(Date.now()),
                        t = this.queue.filter((function(t) {
                            return t.retryAt < e
                        }));
                    if (t.length > 0) {
                        this.queue = this.queue.filter((function(t) {
                            return t.retryAt >= e
                        }));
                        var r, n = v(t);
                        try {
                            for (n.s(); !(r = n.n()).done;) {
                                var i = r.value.requestData;
                                this._executeXhrRequest(i)
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }
                }
            }, {
                key: "unload",
                value: function() {
                    this._poller && (clearTimeout(this._poller), this._poller = void 0);
                    var e, r = v(this.queue);
                    try {
                        for (r.s(); !(e = r.n()).done;) {
                            var n = e.value.requestData,
                                i = n.url,
                                o = n.data,
                                s = n.options;
                            try {
                                window.navigator.sendBeacon(i, kr(o, t(t({}, s), {}, {
                                    sendBeacon: !0
                                })))
                            } catch (e) {
                                P.DEBUG && console.error(e)
                            }
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    this.queue = []
                }
            }, {
                key: "_executeXhrRequest",
                value: function(e) {
                    var t = e.url,
                        r = e.data,
                        n = e.options,
                        i = e.headers,
                        o = e.callback,
                        s = e.retriesPerformedSoFar;
                    Sr({
                        url: t,
                        data: r || {},
                        options: n || {},
                        headers: i || {},
                        retriesPerformedSoFar: s || 0,
                        callback: o,
                        captureMetrics: this.captureMetrics,
                        retryQueue: this,
                        onXHRError: this.onXHRError
                    })
                }
            }, {
                key: "_handleWeAreNowOnline",
                value: function() {
                    this.areWeOnline = !0, this.flush()
                }
            }]), i
        }(At),
        Fr = 18e5,
        Ir = 864e5,
        Er = function() {
            function e(t, r) {
                n(this, e), this.config = t, this.persistence = r, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null;
                var i = t.persistence_name || t.token;
                if (this.window_id_storage_key = "ph_" + i + "_window_id", this.primary_window_exists_storage_key = "ph_" + i + "_primary_window_exists", this._canUseSessionStorage()) {
                    var o = Te.parse(this.window_id_storage_key),
                        s = Te.parse(this.primary_window_exists_storage_key);
                    o && !s ? this._windowId = o : Te.remove(this.window_id_storage_key), Te.set(this.primary_window_exists_storage_key, !0)
                }
                this._listenToReloadWindow()
            }
            return o(e, [{
                key: "_canUseSessionStorage",
                value: function() {
                    return "memory" !== this.config.persistence && !this.persistence.disabled && Te.is_supported()
                }
            }, {
                key: "_setWindowId",
                value: function(e) {
                    e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && Te.set(this.window_id_storage_key, e))
                }
            }, {
                key: "_getWindowId",
                value: function() {
                    return this._windowId ? this._windowId : this._canUseSessionStorage() ? Te.parse(this.window_id_storage_key) : null
                }
            }, {
                key: "_setSessionId",
                value: function(e, t, r) {
                    e === this._sessionId && t === this._sessionActivityTimestamp && r === this._sessionStartTimestamp || (this._sessionStartTimestamp = r, this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register(s({}, Be, [t, e, r])))
                }
            }, {
                key: "_getSessionId",
                value: function() {
                    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
                    var e = this.persistence.props[Be];
                    return Array.isArray(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]
                }
            }, {
                key: "resetSessionId",
                value: function() {
                    this._setSessionId(null, null, null)
                }
            }, {
                key: "_listenToReloadWindow",
                value: function() {
                    var e = this;
                    window.addEventListener("beforeunload", (function() {
                        e._canUseSessionStorage() && Te.remove(e.primary_window_exists_storage_key)
                    }))
                }
            }, {
                key: "checkAndGetSessionAndWindowId",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (new Date).getTime(),
                        r = f(this._getSessionId(), 3),
                        n = r[0],
                        i = r[1],
                        o = r[2],
                        s = this._getWindowId(),
                        a = o && o > 0 && Math.abs(t - o) > Ir;
                    !i || !e && Math.abs(t - n) > Fr || a ? (i = oe(), s = oe(), o = t) : s || (s = oe());
                    var c = 0 === n || !e || a ? t : n,
                        u = 0 === o ? (new Date).getTime() : o;
                    return this._setWindowId(s), this._setSessionId(i, c, u), {
                        sessionId: i,
                        windowId: s
                    }
                }
            }]), e
        }(),
        Or = o((function e(t, r, i, o) {
            n(this, e), this.name = "posthog-js", this.setupOnce = function(e) {
                e((function(e) {
                    var n, s, a;
                    if ("error" !== e.level || !t.__loaded) return e;
                    e.tags || (e.tags = {});
                    var c = t.config.ui_host || t.config.api_host;
                    e.tags["PostHog Person URL"] = c + "/person/" + t.get_distinct_id(), t.sessionRecordingStarted() && (e.tags["PostHog Recording URL"] = c + "/recordings/" + t.sessionManager.checkAndGetSessionAndWindowId(!0).sessionId);
                    var u = (null === (n = e.exception) || void 0 === n ? void 0 : n.values) || [],
                        l = {
                            $sentry_event_id: e.event_id,
                            $sentry_exception: e.exception,
                            $sentry_exception_message: null === (s = u[0]) || void 0 === s ? void 0 : s.value,
                            $sentry_exception_type: null === (a = u[0]) || void 0 === a ? void 0 : a.type,
                            $sentry_tags: e.tags
                        };
                    return r && i && (l.$sentry_url = (o || "https://sentry.io/organizations/") + r + "/issues/?project=" + i + "&query=" + e.event_id), t.capture("$exception", l), e
                }))
            }
        })),
        Ar = function(e) {
            var t = function(t, r) {
                t.event.userId || t.event.anonymousId === e.get_distinct_id() || e.reset(), t.event.userId && t.event.userId !== e.get_distinct_id() && (e.register({
                    distinct_id: t.event.userId
                }), e.reloadFeatureFlags());
                var n = e._calculate_event_properties(r, t.event.properties);
                return t.event.properties = Object.assign({}, n, t.event.properties), t
            };
            return {
                name: "PostHog JS",
                type: "enrichment",
                version: "1.0.0",
                isLoaded: function() {
                    return !0
                },
                load: function() {
                    return Promise.resolve()
                },
                track: function(e) {
                    return t(e, e.event.event)
                },
                page: function(e) {
                    return t(e, "$pageview")
                },
                identify: function(e) {
                    return t(e, "$identify")
                },
                screen: function(e) {
                    return t(e, "$screen")
                }
            }
        },
        xr = function() {
            function e() {
                n(this, e), s(this, "_seenFirstPageView", !1)
            }
            return o(e, [{
                key: "onPageview",
                value: function() {
                    this._seenFirstPageView && (this._pageViewId = oe()), this._seenFirstPageView = !0
                }
            }, {
                key: "getPageViewId",
                value: function() {
                    return this._pageViewId || (this._pageViewId = oe()), this._pageViewId
                }
            }]), e
        }();
    ! function(e) {
        e[e.INIT_MODULE = 0] = "INIT_MODULE", e[e.INIT_SNIPPET = 1] = "INIT_SNIPPET"
    }(yr || (yr = {}));
    var Cr = function() {},
        Rr = {},
        Tr = "posthog",
        $r = A.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
        Mr = !$r && -1 === R.indexOf("MSIE") && -1 === R.indexOf("Mozilla"),
        jr = function() {
            var e, t, r;
            return {
                api_host: "https://app.posthog.com",
                api_method: "POST",
                api_transport: "XHR",
                ui_host: null,
                token: "",
                autocapture: !0,
                rageclick: !0,
                cross_subdomain_cookie: -1 === (null == C || null === (e = C.location) || void 0 === e || null === (t = e.hostname) || void 0 === t ? void 0 : t.indexOf("herokuapp.com")),
                persistence: "cookie",
                persistence_name: "",
                cookie_name: "",
                loaded: Cr,
                store_google: !0,
                custom_campaign_params: [],
                save_referrer: !0,
                test: !1,
                verbose: !1,
                img: !1,
                capture_pageview: !0,
                capture_pageleave: !0,
                debug: !1,
                cookie_expiration: 365,
                upgrade: !1,
                disable_session_recording: !1,
                disable_persistence: !1,
                disable_cookie: !1,
                enable_recording_console_log: void 0,
                secure_cookie: "https:" === (null == A || null === (r = A.location) || void 0 === r ? void 0 : r.protocol),
                ip: !0,
                opt_out_capturing_by_default: !1,
                opt_out_persistence_by_default: !1,
                opt_out_capturing_persistence_type: "localStorage",
                opt_out_capturing_cookie_prefix: null,
                opt_in_site_apps: !1,
                property_blacklist: [],
                respect_dnt: !1,
                sanitize_properties: null,
                xhr_headers: {},
                inapp_protocol: "//",
                inapp_link_new_window: !1,
                request_batching: !0,
                properties_string_max_length: 65535,
                session_recording: {
                    blockClass: "ph-no-capture",
                    blockSelector: null,
                    ignoreClass: "ph-ignore-input",
                    maskAllInputs: !0,
                    maskInputOptions: {},
                    maskInputFn: null,
                    slimDOMOptions: {},
                    collectFonts: !1,
                    inlineStylesheet: !0
                },
                mask_all_element_attributes: !1,
                mask_all_text: !1,
                advanced_disable_decide: !1,
                advanced_disable_toolbar_metrics: !1,
                on_xhr_error: function(e) {
                    var t = "Bad HTTP status: " + e.status + " " + e.statusText;
                    console.error(t)
                },
                get_device_id: function(e) {
                    return e
                },
                _onCapture: Cr,
                _capture_metrics: !1,
                capture_performance: void 0,
                name: "posthog",
                callback_fn: "posthog._jsc",
                bootstrap: {},
                disable_compression: !1
            }
        },
        qr = function(e, t, r, n) {
            var i, o = r !== Tr && br ? r ? br[r] : void 0 : br,
                s = {
                    initComplete: !1,
                    syncCode: !1
                },
                a = function(e) {
                    return function(t) {
                        s[e] || (s[e] = !0, s.initComplete && s.syncCode && (null == n || n(t)))
                    }
                };
            if (o && mr === yr.INIT_MODULE) i = o;
            else {
                if (o && !U(o)) return void console.error("You have already initialized " + r);
                i = new Dr
            }
            if (i._init(e, t, r, a("initComplete")), i.toolbar.maybeLoadToolbar(), i.sessionRecording = new mt(i), i.sessionRecording.startRecordingIfEnabled(), i.webPerformance = new St(i), i.webPerformance.startObservingIfEnabled(), i.__autocapture = i.get_config("autocapture"), Ge._setIsAutocaptureEnabled(i), Ge._isAutocaptureEnabled) {
                i.__autocapture = i.get_config("autocapture");
                Ge.enabledForProject(i.get_config("token"), 100, 100) ? Ge.isBrowserSupported() ? Ge.init(i) : (i.__autocapture = !1, D.log("Disabling Automatic Event Collection because this browser is not supported")) : (i.__autocapture = !1, D.log("Not in active bucket: disabling Automatic Event Collection."))
            }
            return P.DEBUG = P.DEBUG || i.get_config("debug"), void 0 !== o && U(o) && (i._execute_array.call(i.people, o.people), i._execute_array(o)), a("syncCode")(i), i
        },
        Dr = function() {
            function e() {
                var t = this;
                n(this, e), this.config = jr(), this.compression = {}, this.decideEndpointWasHit = !1, this.SentryIntegration = Or, this.segmentIntegration = function() {
                    return Ar(t)
                }, this.__captureHooks = [], this.__request_queue = [], this.__loaded = !1, this.__loaded_recorder_version = void 0, this.__autocapture = void 0, this._jsc = function() {}, this.people = new at(this), this.featureFlags = new pt(this), this.feature_flags = this.featureFlags, this.toolbar = new Ot(this), this.pageViewIdManager = new xr, this._captureMetrics = void 0, this._requestQueue = void 0, this._retryQueue = void 0, this.persistence = void 0, this.sessionPersistence = void 0, this.sessionManager = void 0
            }
            return o(e, [{
                key: "init",
                value: function(e, t, r) {
                    if (G(r)) console.error("You must name your new library: init(token, config, name)");
                    else {
                        if (r !== Tr) {
                            var n = qr(e, t, r, (function(e) {
                                br[r] = e, e._loaded()
                            }));
                            return br[r] = n, n
                        }
                        console.error("You must initialize the main posthog object right after you include the PostHog js snippet")
                    }
                }
            }, {
                key: "_init",
                value: function(e) {
                    var r, n, i = this,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = arguments.length > 2 ? arguments[2] : void 0,
                        a = arguments.length > 3 ? arguments[3] : void 0;
                    this.__loaded = !0, this.config = {}, this._triggered_notifs = [];
                    var c, u = {
                            segmentRegister: !1,
                            syncCode: !1
                        },
                        l = function(e) {
                            return function() {
                                u[e] || (u[e] = !0, u.segmentRegister && u.syncCode && (null == a || a(i)))
                            }
                        };
                    (this.set_config(H({}, jr(), o, {
                        name: s,
                        token: e,
                        callback_fn: (s === Tr ? s : Tr + "." + s) + "._jsc"
                    })), this._jsc = function() {}, null != A && null !== (r = A.rrweb) && void 0 !== r && r.record || null != A && A.rrwebRecord) && (this.__loaded_recorder_version = null == A || null === (c = A.rrweb) || void 0 === c ? void 0 : c.version);
                    if (this._captureMetrics = new Ct(this.get_config("_capture_metrics")), this._requestQueue = new xt(this._captureMetrics, this._handle_queued_event.bind(this)), this._retryQueue = new Pr(this._captureMetrics, this.get_config("on_xhr_error")), this.__captureHooks = [], this.__request_queue = [], this.persistence = new Qe(this.config), this.sessionManager = new Er(this.config, this.persistence), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new Qe(t(t({}, this.config), {}, {
                            persistence: "sessionStorage"
                        })), this._gdpr_init(), o.segment ? (this.config.get_device_id = function() {
                            return o.segment.user().anonymousId()
                        }, o.segment.user().id() && (this.register({
                            distinct_id: o.segment.user().id()
                        }), this.persistence.set_user_state("identified")), o.segment.register(this.segmentIntegration()).then(l("segmentRegister"))) : l("segmentRegister")(), void 0 !== (null === (n = o.bootstrap) || void 0 === n ? void 0 : n.distinctID)) {
                        var d, p, f = this.get_config("get_device_id")(oe()),
                            h = null !== (d = o.bootstrap) && void 0 !== d && d.isIdentifiedID ? f : o.bootstrap.distinctID;
                        this.persistence.set_user_state(null !== (p = o.bootstrap) && void 0 !== p && p.isIdentifiedID ? "identified" : "anonymous"), this.register({
                            distinct_id: o.bootstrap.distinctID,
                            $device_id: h
                        })
                    }
                    if (this._hasBootstrappedFeatureFlags()) {
                        var _, g, v = Object.keys((null === (_ = o.bootstrap) || void 0 === _ ? void 0 : _.featureFlags) || {}).filter((function(e) {
                                var t, r;
                                return !(null === (t = o.bootstrap) || void 0 === t || null === (r = t.featureFlags) || void 0 === r || !r[e])
                            })).reduce((function(e, t) {
                                var r, n;
                                return e[t] = (null === (r = o.bootstrap) || void 0 === r || null === (n = r.featureFlags) || void 0 === n ? void 0 : n[t]) || !1, e
                            }), {}),
                            y = Object.keys((null === (g = o.bootstrap) || void 0 === g ? void 0 : g.featureFlagPayloads) || {}).filter((function(e) {
                                return v[e]
                            })).reduce((function(e, t) {
                                var r, n, i, s;
                                null !== (r = o.bootstrap) && void 0 !== r && null !== (n = r.featureFlagPayloads) && void 0 !== n && n[t] && (e[t] = null === (i = o.bootstrap) || void 0 === i || null === (s = i.featureFlagPayloads) || void 0 === s ? void 0 : s[t]);
                                return e
                            }), {});
                        this.featureFlags.receivedFeatureFlags({
                            featureFlags: v,
                            featureFlagPayloads: y
                        })
                    }
                    if (!this.get_distinct_id()) {
                        var m = this.get_config("get_device_id")(oe());
                        this.register_once({
                            distinct_id: m,
                            $device_id: m
                        }, ""), this.persistence.set_user_state("anonymous")
                    }
                    A.addEventListener && A.addEventListener("onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), l("syncCode")()
                }
            }, {
                key: "_loaded",
                value: function() {
                    this.featureFlags.setReloadingPaused(!0);
                    try {
                        this.get_config("loaded")(this)
                    } catch (e) {
                        console.error("`loaded` function failed", e)
                    }
                    this._start_queue_if_opted_in(), this.get_config("capture_pageview") && this.capture("$pageview", {}, {
                        send_instantly: !0
                    }), this.get_config("advanced_disable_decide") || new Ft(this).call(), this.featureFlags.resetRequestQueue(), this.featureFlags.setReloadingPaused(!1)
                }
            }, {
                key: "_start_queue_if_opted_in",
                value: function() {
                    this.has_opted_out_capturing() || this.get_config("request_batching") && this._requestQueue.poll()
                }
            }, {
                key: "_dom_loaded",
                value: function() {
                    var e = this;
                    this.has_opted_out_capturing() || B(this.__request_queue, (function(t) {
                        e._send_request.apply(e, h(t))
                    })), this.__request_queue = [], this._start_queue_if_opted_in()
                }
            }, {
                key: "_prepare_callback",
                value: function(e, t) {
                    if (G(e)) return null;
                    if ($r) return function(r) {
                        e(r, t)
                    };
                    var r = this._jsc,
                        n = "" + Math.floor(1e8 * Math.random()),
                        i = this.get_config("callback_fn") + "[" + n + "]";
                    return r[n] = function(i) {
                        delete r[n], e(i, t)
                    }, i
                }
            }, {
                key: "_handle_unload",
                value: function() {
                    this.get_config("request_batching") ? (this.get_config("capture_pageview") && this.get_config("capture_pageleave") && this.capture("$pageleave"), this.get_config("_capture_metrics") && (this._requestQueue.updateUnloadMetrics(), this.capture("$capture_metrics", this._captureMetrics.metrics)), this._requestQueue.unload(), this._retryQueue.unload()) : this.get_config("capture_pageview") && this.get_config("capture_pageleave") && this.capture("$pageleave", null, {
                        transport: "sendBeacon"
                    })
                }
            }, {
                key: "_handle_queued_event",
                value: function(e, t, r) {
                    var n = JSON.stringify(t);
                    this.__compress_and_send_json_request(e, n, r || Rr, Cr)
                }
            }, {
                key: "__compress_and_send_json_request",
                value: function(e, r, n, i) {
                    var o, s = function(e, r, n) {
                            return e === Jt.LZ64 ? [{
                                data: S.compressToBase64(r),
                                compression: Jt.LZ64
                            }, n] : e === Jt.GZipJS ? [gr(vr(r), {
                                mtime: 0
                            }), t(t({}, n), {}, {
                                blob: !0,
                                urlQueryArgs: {
                                    compression: Jt.GZipJS
                                }
                            })] : [{
                                data: re(r)
                            }, n]
                        }((o = this.compression)[Jt.GZipJS] ? Jt.GZipJS : o[Jt.LZ64] ? Jt.LZ64 : Jt.Base64, r, n),
                        a = f(s, 2),
                        c = a[0],
                        u = a[1];
                    this._send_request(e, c, u, i)
                }
            }, {
                key: "_send_request",
                value: function(e, r, n, i) {
                    if (Mr) this.__request_queue.push([e, r, n, i]);
                    else {
                        var o = {
                            method: this.get_config("api_method"),
                            transport: this.get_config("api_transport"),
                            verbose: this.get_config("verbose")
                        };
                        n = H(o, n || {}), $r || (n.method = "GET");
                        var s = "sendBeacon" in A.navigator && "sendBeacon" === n.transport;
                        if (e = wr(e, n.urlQueryArgs || {}, {
                                ip: this.get_config("ip")
                            }), Q(r) && this.get_config("img")) {
                            var a = C.createElement("img");
                            a.src = e, C.body.appendChild(a)
                        } else if (s) try {
                            A.navigator.sendBeacon(e, kr(r, t(t({}, n), {}, {
                                sendBeacon: !0
                            })))
                        } catch (e) {
                            this.get_config("debug") && console.error(e)
                        } else if ($r) try {
                            Sr({
                                url: e,
                                data: r,
                                headers: this.get_config("xhr_headers"),
                                options: n,
                                captureMetrics: this._captureMetrics,
                                callback: i,
                                retriesPerformedSoFar: 0,
                                retryQueue: this._retryQueue,
                                onXHRError: this.get_config("on_xhr_error")
                            })
                        } catch (e) {
                            console.error(e)
                        } else {
                            var c, u = C.createElement("script");
                            u.type = "text/javascript", u.async = !0, u.defer = !0, u.src = e;
                            var l = C.getElementsByTagName("script")[0];
                            null === (c = l.parentNode) || void 0 === c || c.insertBefore(u, l)
                        }
                    }
                }
            }, {
                key: "_execute_array",
                value: function(e) {
                    var t, r = this,
                        n = [],
                        i = [],
                        o = [];
                    B(e, (function(e) {
                        e && (t = e[0], U(t) ? o.push(e) : "function" == typeof e ? e.call(r) : U(e) && "alias" === t ? n.push(e) : U(e) && -1 !== t.indexOf("capture") && "function" == typeof r[t] ? o.push(e) : i.push(e))
                    }));
                    var s = function(e, t) {
                        B(e, (function(e) {
                            if (U(e[0])) {
                                var r = t;
                                L(e, (function(e) {
                                    r = r[e[0]].apply(r, e.slice(1))
                                }))
                            } else this[e[0]].apply(this, e.slice(1))
                        }), t)
                    };
                    s(n, this), s(i, this), s(o, this)
                }
            }, {
                key: "_hasBootstrappedFeatureFlags",
                value: function() {
                    var e, t;
                    return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1
                }
            }, {
                key: "push",
                value: function(e) {
                    this._execute_array([e])
                }
            }, {
                key: "capture",
                value: function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rr;
                    if (this.__loaded && !it(this, !1)) {
                        this._captureMetrics.incr("capture"), "$snapshot" === e && this._captureMetrics.incr("snapshot");
                        var n = (r = r || Rr).transport;
                        if (n && (r.transport = n), G(e) || "string" != typeof e) console.error("No event name provided to posthog.capture");
                        else if (!se(R)) {
                            this.sessionPersistence.update_search_keyword(), this.get_config("store_google") && this.sessionPersistence.update_campaign_params(), this.get_config("save_referrer") && this.sessionPersistence.update_referrer_info();
                            var i = {
                                event: e,
                                properties: this._calculate_event_properties(e, t || {})
                            };
                            "$identify" === e && r.$set && (i.$set = r.$set), (i = te(i, r._noTruncate ? null : this.get_config("properties_string_max_length"))).timestamp = r.timestamp || new Date, this.get_config("debug") && D.log("PostHog.js send", i);
                            var o = JSON.stringify(i),
                                s = this.get_config("api_host") + (r.endpoint || "/e/"),
                                a = r !== Rr;
                            return !this.get_config("request_batching") || a && !r._batchKey || r.send_instantly ? this.__compress_and_send_json_request(s, o, r) : this._requestQueue.enqueue(s, i, r), this._invokeCaptureHooks(e, i), i
                        }
                    }
                }
            }, {
                key: "_addCaptureHook",
                value: function(e) {
                    this.__captureHooks.push(e)
                }
            }, {
                key: "_invokeCaptureHooks",
                value: function(e, t) {
                    this.config._onCapture(e, t), L(this.__captureHooks, (function(t) {
                        return t(e)
                    }))
                }
            }, {
                key: "_calculate_event_properties",
                value: function(e, r) {
                    var n, i = this.persistence.remove_event_timer(e),
                        o = t({}, r);
                    if (o.token = this.get_config("token"), "$snapshot" === e) {
                        var s = t(t({}, this.persistence.properties()), this.sessionPersistence.properties());
                        return o.distinct_id = s.distinct_id, o
                    }
                    var a = le.properties();
                    if (this.sessionManager) {
                        var c = this.sessionManager.checkAndGetSessionAndWindowId(),
                            u = c.sessionId,
                            l = c.windowId;
                        o.$session_id = u, o.$window_id = l
                    }
                    if (null !== (n = this.webPerformance) && void 0 !== n && n.isEnabled && ("$pageview" === e && this.pageViewIdManager.onPageview(), o = H(o, {
                            $pageview_id: this.pageViewIdManager.getPageViewId()
                        })), "$performance_event" === e) {
                        var d = this.persistence.properties();
                        return o.distinct_id = d.distinct_id, o.$current_url = a.$current_url, o
                    }
                    if (void 0 !== i) {
                        var p = (new Date).getTime() - i;
                        o.$duration = parseFloat((p / 1e3).toFixed(3))
                    }
                    o = H({}, le.properties(), this.persistence.properties(), this.sessionPersistence.properties(), o);
                    var f = this.get_config("property_blacklist");
                    U(f) ? L(f, (function(e) {
                        delete o[e]
                    })) : console.error("Invalid value for property_blacklist config: " + f);
                    var h = this.get_config("sanitize_properties");
                    return h && (o = h(o, e)), o
                }
            }, {
                key: "register",
                value: function(e, t) {
                    this.persistence.register(e, t)
                }
            }, {
                key: "register_once",
                value: function(e, t, r) {
                    this.persistence.register_once(e, t, r)
                }
            }, {
                key: "register_for_session",
                value: function(e) {
                    this.sessionPersistence.register(e)
                }
            }, {
                key: "unregister",
                value: function(e) {
                    this.persistence.unregister(e)
                }
            }, {
                key: "unregister_for_session",
                value: function(e) {
                    this.sessionPersistence.unregister(e)
                }
            }, {
                key: "_register_single",
                value: function(e, t) {
                    this.register(s({}, e, t))
                }
            }, {
                key: "getFeatureFlag",
                value: function(e, t) {
                    return this.featureFlags.getFeatureFlag(e, t)
                }
            }, {
                key: "getFeatureFlagPayload",
                value: function(e) {
                    var t = this.featureFlags.getFeatureFlagPayload(e);
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }
            }, {
                key: "isFeatureEnabled",
                value: function(e, t) {
                    return this.featureFlags.isFeatureEnabled(e, t)
                }
            }, {
                key: "reloadFeatureFlags",
                value: function() {
                    this.featureFlags.reloadFeatureFlags()
                }
            }, {
                key: "onFeatureFlags",
                value: function(e) {
                    return this.featureFlags.onFeatureFlags(e)
                }
            }, {
                key: "identify",
                value: function(e, t, r) {
                    if (e) {
                        this._captureMetrics.incr("identify");
                        var n = this.get_distinct_id();
                        if (this.register({
                                $user_id: e
                            }), !this.get_property("$device_id")) {
                            var i = n;
                            this.register_once({
                                $had_persisted_distinct_id: !0,
                                $device_id: i
                            }, "")
                        }
                        e !== n && e !== this.get_property(Me) && (this.unregister(Me), this.register({
                            distinct_id: e
                        }));
                        var o = "anonymous" === this.persistence.get_user_state();
                        e !== n && o ? (this.persistence.set_user_state("identified"), this.capture("$identify", {
                            distinct_id: e,
                            $anon_distinct_id: n
                        }, {
                            $set: t || {},
                            $set_once: r || {}
                        }), this.featureFlags.setAnonymousDistinctId(n)) : (t && this.people.set(t), r && this.people.set_once(r)), e !== n && this.reloadFeatureFlags()
                    } else console.error("Unique user id has not been set in posthog.identify")
                }
            }, {
                key: "group",
                value: function(e, r, n) {
                    if (e && r) {
                        this._captureMetrics.incr("group");
                        var i = this.getGroups();
                        this.register({
                            $groups: t(t({}, i), {}, s({}, e, r))
                        }), n && this.capture("$groupidentify", {
                            $group_type: e,
                            $group_key: r,
                            $group_set: n
                        }), i[e] !== r && this.reloadFeatureFlags()
                    } else console.error("posthog.group requires a group type and group key")
                }
            }, {
                key: "resetGroups",
                value: function() {
                    this.register({
                        $groups: {}
                    }), this.reloadFeatureFlags()
                }
            }, {
                key: "reset",
                value: function(e) {
                    var t = this.get_property("$device_id");
                    this.persistence.clear(), this.sessionPersistence.clear(), this.persistence.set_user_state("anonymous"), this.sessionManager.resetSessionId();
                    var r = this.get_config("get_device_id")(oe());
                    this.register_once({
                        distinct_id: r,
                        $device_id: e ? r : t
                    }, "")
                }
            }, {
                key: "get_distinct_id",
                value: function() {
                    return this.get_property("distinct_id")
                }
            }, {
                key: "getGroups",
                value: function() {
                    return this.get_property("$groups") || {}
                }
            }, {
                key: "alias",
                value: function(e, t) {
                    return e === this.get_property($e) ? (D.critical("Attempting to create alias for existing People user - aborting."), -2) : (G(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(Me, e), this.capture("$create_alias", {
                        alias: e,
                        distinct_id: t
                    })) : (console.error("alias matches current distinct_id - skipping api call."), this.identify(e), -1))
                }
            }, {
                key: "set_config",
                value: function(e) {
                    var r = t({}, this.config);
                    Q(e) && (H(this.config, e), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), this.sessionPersistence && this.sessionPersistence.update_config(this.config), Oe.is_supported() && "true" === Oe.get("ph_debug") && (this.config.debug = !0), this.get_config("debug") && (P.DEBUG = !0), this.sessionRecording && void 0 !== e.disable_session_recording && r.disable_session_recording !== e.disable_session_recording && (e.disable_session_recording ? this.sessionRecording.stopRecording() : this.sessionRecording.startRecordingIfEnabled()))
                }
            }, {
                key: "startSessionRecording",
                value: function() {
                    this.set_config({
                        disable_session_recording: !1
                    })
                }
            }, {
                key: "stopSessionRecording",
                value: function() {
                    this.set_config({
                        disable_session_recording: !0
                    })
                }
            }, {
                key: "sessionRecordingStarted",
                value: function() {
                    var e;
                    return !(null === (e = this.sessionRecording) || void 0 === e || !e.started())
                }
            }, {
                key: "loadToolbar",
                value: function(e) {
                    return this.toolbar.loadToolbar(e)
                }
            }, {
                key: "get_config",
                value: function(e) {
                    var t;
                    return null === (t = this.config) || void 0 === t ? void 0 : t[e]
                }
            }, {
                key: "get_property",
                value: function(e) {
                    return this.persistence.props[e]
                }
            }, {
                key: "getSessionProperty",
                value: function(e) {
                    return this.sessionPersistence.props[e]
                }
            }, {
                key: "toString",
                value: function() {
                    var e, t = null !== (e = this.get_config("name")) && void 0 !== e ? e : Tr;
                    return t !== Tr && (t = Tr + "." + t), t
                }
            }, {
                key: "_gdpr_init",
                value: function() {
                    "localStorage" === this.get_config("opt_out_capturing_persistence_type") && Oe.is_supported() && (!this.has_opted_in_capturing() && this.has_opted_in_capturing({
                        persistence_type: "cookie"
                    }) && this.opt_in_capturing({
                        enable_persistence: !1
                    }), !this.has_opted_out_capturing() && this.has_opted_out_capturing({
                        persistence_type: "cookie"
                    }) && this.opt_out_capturing({
                        clear_persistence: !1
                    }), this.clear_opt_in_out_capturing({
                        persistence_type: "cookie",
                        enable_persistence: !1
                    })), this.has_opted_out_capturing() ? this._gdpr_update_persistence({
                        clear_persistence: !0
                    }) : this.has_opted_in_capturing() || !this.get_config("opt_out_capturing_by_default") && !Ie.get("ph_optout") || (Ie.remove("ph_optout"), this.opt_out_capturing({
                        clear_persistence: this.get_config("opt_out_persistence_by_default")
                    }))
                }
            }, {
                key: "_gdpr_update_persistence",
                value: function(e) {
                    var t;
                    if (e && e.clear_persistence) t = !0;
                    else {
                        if (!e || !e.enable_persistence) return;
                        t = !1
                    }
                    this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t), this.get_config("disable_persistence") || this.sessionPersistence.disabled === t || this.sessionPersistence.set_disabled(t)
                }
            }, {
                key: "_gdpr_call_func",
                value: function(e, t) {
                    return t = H({
                        capture: this.capture.bind(this),
                        persistence_type: this.get_config("opt_out_capturing_persistence_type"),
                        cookie_prefix: this.get_config("opt_out_capturing_cookie_prefix"),
                        cookie_expiration: this.get_config("cookie_expiration"),
                        cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
                        secure_cookie: this.get_config("secure_cookie")
                    }, t || {}), Oe.is_supported() || "localStorage" !== t.persistence_type || (t.persistence_type = "cookie"), e(this.get_config("token"), {
                        capture: t.capture,
                        captureEventName: t.capture_event_name,
                        captureProperties: t.capture_properties,
                        persistenceType: t.persistence_type,
                        persistencePrefix: t.cookie_prefix,
                        cookieExpiration: t.cookie_expiration,
                        crossSubdomainCookie: t.cross_subdomain_cookie,
                        secureCookie: t.secure_cookie
                    })
                }
            }, {
                key: "opt_in_capturing",
                value: function(e) {
                    e = H({
                        enable_persistence: !0
                    }, e || {}), this._gdpr_call_func(Je, e), this._gdpr_update_persistence(e)
                }
            }, {
                key: "opt_out_capturing",
                value: function(e) {
                    var t = H({
                        clear_persistence: !0
                    }, e || {});
                    this._gdpr_call_func(Ze, t), this._gdpr_update_persistence(t)
                }
            }, {
                key: "has_opted_in_capturing",
                value: function(e) {
                    return this._gdpr_call_func(Xe, e)
                }
            }, {
                key: "has_opted_out_capturing",
                value: function(e) {
                    return this._gdpr_call_func(Ye, e)
                }
            }, {
                key: "clear_opt_in_out_capturing",
                value: function(e) {
                    var t = H({
                        enable_persistence: !0
                    }, null != e ? e : {});
                    this._gdpr_call_func(Ke, t), this._gdpr_update_persistence(t)
                }
            }, {
                key: "debug",
                value: function(e) {
                    !1 === e ? (A.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({
                        debug: !1
                    })) : (A.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
                        debug: !0
                    }))
                }
            }, {
                key: "decodeLZ64",
                value: function(e) {
                    return S.decompressFromBase64(e || null)
                }
            }]), e
        }();
    ! function(e, t) {
        for (var r = 0; r < t.length; r++) e.prototype[t[r]] = Y(e.prototype[t[r]])
    }(Dr, ["identify"]);
    var Nr = {},
        Lr = function() {
            br.init = function(e, t, r) {
                if (r) return br[r] || (br[r] = Nr[r] = qr(e || "", t || {}, r, (function(e) {
                    br[r] = Nr[r] = e, e._loaded()
                }))), br[r];
                var n = br;
                return Nr[Tr] ? n = Nr[Tr] : e && (n = qr(e, t || {}, Tr, (function(e) {
                    Nr[Tr] = e, e._loaded()
                })), Nr[Tr] = n), br = n, mr === yr.INIT_SNIPPET && (A[Tr] = br), L(Nr, (function(e, t) {
                    t !== Tr && (br[t] = e)
                })), n
            }
        },
        Br = function() {
            function e() {
                e.done || (e.done = !0, Mr = !1, L(Nr, (function(e) {
                    e._dom_loaded()
                })))
            }
            C.addEventListener && ("complete" === C.readyState ? e() : C.addEventListener("DOMContentLoaded", e, !1)), ue(A, "load", e, !0)
        };
    mr = yr.INIT_SNIPPET, G(A.posthog) && (A.posthog = []), (br = A.posthog).__loaded || br.config && br.persistence ? console.error("PostHog library has already been downloaded at least once.") : (L(br._i, (function(e) {
        e && U(e) && (Nr[e[2]] = qr.apply(void 0, h(e)))
    })), Lr(), br.init(), L(Nr, (function(e) {
        e._loaded()
    })), Br())
}();