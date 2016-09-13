'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "2.2.4",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
      return e.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    }, pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a) {
      return n.each(this, a);
    }, map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === n.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    }, isPlainObject: function isPlainObject(a) {
      var b;if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;for (b in a) {}return void 0 === b || k.call(a, b);
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? i[j.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      var b,
          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    }, camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (s(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : h.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];if (s(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }return f.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function f() {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) {
              r[h] = l + " " + qa(r[h]);
            }s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(Q, "$1"), b, d, e);
    }function ga() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ha(a) {
      return a[u] = !0, a;
    }function ia(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ja(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }), contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return Y.test(a.nodeName);
        }, input: function input(a) {
          return X.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: na(function () {
          return [0];
        }), last: na(function (a, b) {
          return [b - 1];
        }), eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = la(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = ma(b);
    }function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fa(a, b[d], c);
      }return c;
    }function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
          }m.push(c);
        }
      }return sa(m);
    }function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }u = ua(u);
          }H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ha(f) : f;
    }return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, xa(e, d)), f.selector = a;
      }return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }n.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({ find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (n.contains(e[b], this)) return !0;
        }
      }));for (b = 0; c > b; b++) {
        n.find(a, e[b], d);
      }return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    }, filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    }, is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    } });var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function has(a) {
      var b = n(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) {
          if (n.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }n.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return u(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    }, next: function next(a) {
      return F(a, "nextSibling");
    }, prev: function prev(a) {
      return F(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return v(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
    };
  });var G = /\S+/g;function H(a) {
    var b = {};return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  }, n.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var I;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    } });function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
  }n.ready.promise = function (b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
  }, n.ready.promise();var K = function K(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) {
        K(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      L = function L(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function M() {
    this.expando = n.expando + M.uid++;
  }M.uid = 1, M.prototype = { register: function register(a, b) {
      var c = b || {};return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
    }, cache: function cache(a) {
      if (!L(a)) return {};var b = a[this.expando];return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[b] = c;else for (d in b) {
        e[d] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
    }, access: function access(a, b, c) {
      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d,
          e,
          f = a[this.expando];if (void 0 !== f) {
        if (void 0 === b) this.register(a);else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;while (c--) {
            delete f[d[c]];
          }
        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !n.isEmptyObject(b);
    } };var N = new M(),
      O = new M(),
      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;function R(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}O.set(a, b, c);
    } else c = void 0;return c;
  }n.extend({ hasData: function hasData(a) {
      return O.hasData(a) || N.hasData(a);
    }, data: function data(a, b, c) {
      return O.access(a, b, c);
    }, removeData: function removeData(a, b) {
      O.remove(a, b);
    }, _data: function _data(a, b, c) {
      return N.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      N.remove(a, b);
    } }), n.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
          }N.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        O.set(this, a);
      }) : K(this, function (b) {
        var c, d;if (f && void 0 === b) {
          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;if (c = R(f, d, void 0), void 0 !== c) return c;
        } else d = n.camelCase(a), this.each(function () {
          var c = O.get(this, d);O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        O.remove(this, a);
      });
    } }), n.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c]);
        }) });
    } }), n.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function V(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };function W(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var X = /^(?:checkbox|radio)$/i,
      Y = /<([\w:-]+)/,
      Z = /^$|\/(?:java|ecma)script/i,
      $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };$.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
    }
  }var ba = /<|&#?\w+;/;function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) {
      if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", o = 0;while (f = m[o++]) {
      if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
        k = 0;while (f = g[k++]) {
          Z.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var da = /^key/,
      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fa = /^([^.]*)(?:\.(.+)|)/;function ga() {
    return !0;
  }function ha() {
    return !1;
  }function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ja(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ja(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }n.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(G) || [""], j = b.length;while (j--) {
          h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.hasData(a) && N.get(a);if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;while (j--) {
          if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else for (o in i) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      a = n.event.fix(a);var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (N.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }d.length && g.push({ elem: i, handlers: d });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      } }, fix: function fix(a) {
      if (a[n.expando]) return a;var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) {
        c = e[b], a[c] = g[c];
      }return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), n.fn.extend({ on: function on(a, b, c, d) {
      return ja(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ja(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    } });var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      la = /<script|<style|<link/i,
      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
      na = /^true\/(.*)/,
      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function ra(a) {
    var b = na.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function sa(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            n.event.add(b, e, j[e][c]);
          }
        }
      }O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
    }
  }function ta(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function ua(a, b, c, d) {
    b = f.apply([], b);var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
    });if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) {
        j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
      }if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) {
        j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
      }
    }return a;
  }function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }n.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ka, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) {
        ta(f[d], g[d]);
      }if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) {
        sa(f[d], g[d]);
      } else sa(a, h);return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (L(c)) {
          if (b = c[N.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            }c[N.expando] = void 0;
          }c[O.expando] && (c[O.expando] = void 0);
        }
      }
    } }), n.fn.extend({ domManip: ua, detach: function detach(a) {
      return va(this, a, !0);
    }, remove: function remove(a) {
      return va(this, a);
    }, text: function text(a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function html(a) {
      return K(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return ua(this, arguments, function (b) {
        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
      }, a);
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) {
        c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var wa,
      xa = { HTML: "block", BODY: "block" };function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");return c.detach(), d;
  }function za(a) {
    var b = d,
        c = xa[a];return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
  }var Aa = /^margin/,
      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ca = function Ca(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  },
      Da = function Da(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  },
      Ea = d.documentElement;!function () {
    var b,
        c,
        e,
        f,
        g = d.createElement("div"),
        h = d.createElement("div");if (h.style) {
      (function () {
        var i = function i() {
          h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
        };

        h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);n.extend(l, { pixelPosition: function pixelPosition() {
            return i(), b;
          }, boxSizingReliable: function boxSizingReliable() {
            return null == c && i(), c;
          }, pixelMarginRight: function pixelMarginRight() {
            return null == c && i(), e;
          }, reliableMarginLeft: function reliableMarginLeft() {
            return null == c && i(), f;
          }, reliableMarginRight: function reliableMarginRight() {
            var b,
                c = h.appendChild(d.createElement("div"));return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
          } });
      })();
    }
  }();function Fa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
  }function Ga(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Ha = /^(none|table(?!-c[ea]).+)/,
      Ia = { position: "absolute", visibility: "hidden", display: "block" },
      Ja = { letterSpacing: "0", fontWeight: "400" },
      Ka = ["Webkit", "O", "Moz", "ms"],
      La = d.createElement("div").style;function Ma(a) {
    if (a in La) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ka.length;while (c--) {
      if (a = Ka[c] + b, a in La) return a;
    }
  }function Na(a, b, c) {
    var d = T.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    }return g;
  }function Pa(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ca(a),
        g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Fa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function get(a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d);
        }) : Pa(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e,
            f = d && Ca(a),
            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
      } };
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
  }), n.fn.extend({ css: function css(a, b) {
      return K(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return Qa(this, !0);
    }, hide: function hide() {
      return Qa(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    } });function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Ra.propHooks[this.prop];return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Ra.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
    } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};var Sa,
      Ta,
      Ua = /^(?:toggle|show|hide)$/,
      Va = /queueHooks$/;function Wa() {
    return a.setTimeout(function () {
      Sa = void 0;
    }), Sa = n.now();
  }function Xa(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
      c = U[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function Za(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && V(a),
        q = N.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], Ua.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }m[d] = q && q[d] || n.style(a, d);
      } else j = void 0;
    }if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;N.remove(a, "fxshow");for (b in m) {
          n.style(a, b, m[b]);
        }
      });for (d in m) {
        g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function $a(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function _a(a, b, c) {
    var d,
        e,
        f = 0,
        g = _a.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for ($a(k, j.opts.specialEasing); g > f; f++) {
      if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(_a, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return W(c.elem, a, T.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
      }
    }, prefilters: [Za], prefilter: function prefilter(a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = _a(this, n.extend({}, a), f);(e || N.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && Va.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || n.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
    };
  }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;for (Sa = n.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || n.fx.stop(), Sa = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(Ta), Ta = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  }();var ab,
      bb = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      }
    } }), ab = { set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = bb[b] || n.find.attr;bb[b] = function (a, b, d) {
      var e, f;return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
    };
  });var cb = /^(?:input|select|textarea|button)$/i,
      db = /^(?:a|area)$/i;n.fn.extend({ prop: function prop(a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    } }), n.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.optSelected || (n.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });var eb = /[\t\r\n\f]/g;function fb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }n.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, fb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, fb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var gb = /\r/g,
      hb = /[\x20\t\r\n\f]+/g;n.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function get(a) {
          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      } }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var ib = /^(?:focusinfocus|focusoutblur)$/;n.extend(n.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) {
            p.push(h), i = h;
          }i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = p[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b);
    } }), n.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };n.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = N.access(d, b);e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = N.access(d, b) - 1;e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
      } };
  });var jb = a.location,
      kb = n.now(),
      lb = /\?/;n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };var mb = /#.*$/,
      nb = /([?&])_=[^&]*/,
      ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      qb = /^(?:GET|HEAD)$/,
      rb = /^\/\//,
      sb = {},
      tb = {},
      ub = "*/".concat("*"),
      vb = d.createElement("a");vb.href = jb.href;function wb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function xb(a, b, c, d) {
    var e = {},
        f = a === tb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function yb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && n.extend(!0, a, d), a;
  }function zb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function Ab(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: jb.href, type: "GET", isLocal: pb.test(jb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
    }, ajaxPrefilter: wb(sb), ajaxTransport: wb(tb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = n.ajaxSetup({}, c),
          o = m.context || m,
          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
          q = n.Deferred(),
          r = n.Callbacks("once memory"),
          s = m.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === v) {
            if (!h) {
              h = {};while (b = ob.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === v ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return v || (a = u[c] = u[c] || a, t[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return v || (m.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > v) for (b in a) {
            s[b] = [s[b], a[b]];
          } else x.always(a[x.status]);return this;
        }, abort: function abort(a) {
          var b = a || w;return e && e.abort(b), z(0, b), this;
        } };if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");try {
          j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host;
        } catch (y) {
          m.crossDomain = !0;
        }
      }if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);for (l in m.headers) {
        x.setRequestHeader(l, m.headers[l]);
      }if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();w = "abort";for (l in { success: 1, error: 1, complete: 1 }) {
        x[l](m[l]);
      }if (e = xb(tb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          x.abort("timeout");
        }, m.timeout));try {
          v = 1, e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;z(-1, y);
        }
      } else z(-1, "No Transport");function z(b, c, d, h) {
        var j,
            l,
            t,
            u,
            w,
            y = c;2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
      }return x;
    }, getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, n.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this);
    }, wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = n.isFunction(a);return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    } }), n.expr.filters.hidden = function (a) {
    return !n.expr.filters.visible(a);
  }, n.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
  };var Bb = /%20/g,
      Cb = /\[\]$/,
      Db = /\r?\n/g,
      Eb = /^(?:submit|button|image|reset|file)$/i,
      Fb = /^(?:input|select|textarea|keygen)/i;function Gb(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      Gb(a + "[" + e + "]", b[e], c, d);
    }
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Gb(c, a[c], b, e);
    }return d.join("&").replace(Bb, "+");
  }, n.fn.extend({ serialize: function serialize() {
      return n.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(Db, "\r\n") };
        }) : { name: b.name, value: c.replace(Db, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Hb = { 0: 200, 1223: 204 },
      Ib = n.ajaxSettings.xhr();l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function (b) {
    var _c, d;return l.cors || Ib && !b.crossDomain ? { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } } : void 0;
  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Jb = [],
      Kb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Jb.pop() || n.expando + "_" + kb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || d;var e = x.exec(a),
        f = !c && [];return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };var Lb = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Mb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }n.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }return a || Ea;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;n.fn[a] = function (d) {
      return K(this, function (a, d, e) {
        var f = Mb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return K(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }, size: function size() {
      return this.length;
    } }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });var Nb = a.jQuery,
      Ob = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
  }, b || (a.jQuery = a.$ = n), n;
});

/**@license
 *       __ _____                     ________                              __
 *      / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /
 *  __ / // // // // // _  // _// // / / // _  // _//     // //  \/ // _ \/ /
 * /  / // // // // // ___// / / // / / // ___// / / / / // // /\  // // / /__
 * \___//____ \\___//____//_/ _\_  / /_//____//_/ /_/ /_//_//_/ /_/ \__\_\___/
 *           \/              /____/                              version 0.11.5
 *
 * This file is part of jQuery Terminal. http://terminal.jcubic.pl
 *
 * Copyright (c) 2010-2016 Jakub Jankiewicz <http://jcubic.pl>
 * Released under the MIT license
 *
 * Contains:
 *
 * Storage plugin Distributed under the MIT License
 * Copyright (c) 2010 Dave Schindler
 *
 * jQuery Timers licenced with the WTFPL
 * <http://jquery.offput.ca/timers/>
 *
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 *
 * jQuery Caret
 * Copyright (c) 2009, Gideon Sireling
 * 3 clause BSD License
 *
 * sprintf.js
 * Copyright (c) 2007-2013 Alexandru Marasteanu <hello at alexei dot ro>
 * licensed under 3 clause BSD license
 *
 * Date: Sun, 11 Sep 2016 10:16:02 +0000
 */
(function (e) {
  var n = function n() {
    if (!n.cache.hasOwnProperty(arguments[0])) {
      n.cache[arguments[0]] = n.parse(arguments[0]);
    }return n.format.call(null, n.cache[arguments[0]], arguments);
  };n.format = function (e, r) {
    var o = 1,
        a = e.length,
        s = "",
        l,
        f = [],
        c,
        u,
        h,
        p,
        m,
        g;for (c = 0; c < a; c++) {
      s = t(e[c]);if (s === "string") {
        f.push(e[c]);
      } else if (s === "array") {
        h = e[c];if (h[2]) {
          l = r[o];for (u = 0; u < h[2].length; u++) {
            if (!l.hasOwnProperty(h[2][u])) {
              throw n('[sprintf] property "%s" does not exist', h[2][u]);
            }l = l[h[2][u]];
          }
        } else if (h[1]) {
          l = r[h[1]];
        } else {
          l = r[o++];
        }if (/[^s]/.test(h[8]) && t(l) != "number") {
          throw n("[sprintf] expecting number but found %s", t(l));
        }switch (h[8]) {case "b":
            l = l.toString(2);break;case "c":
            l = String.fromCharCode(l);break;case "d":
            l = parseInt(l, 10);break;case "e":
            l = h[7] ? l.toExponential(h[7]) : l.toExponential();break;case "f":
            l = h[7] ? parseFloat(l).toFixed(h[7]) : parseFloat(l);break;case "o":
            l = l.toString(8);break;case "s":
            l = (l = String(l)) && h[7] ? l.substring(0, h[7]) : l;break;case "u":
            l = l >>> 0;break;case "x":
            l = l.toString(16);break;case "X":
            l = l.toString(16).toUpperCase();break;}l = /[def]/.test(h[8]) && h[3] && l >= 0 ? "+" + l : l;m = h[4] ? h[4] == "0" ? "0" : h[4].charAt(1) : " ";g = h[6] - String(l).length;p = h[6] ? i(m, g) : "";f.push(h[5] ? l + p : p + l);
      }
    }return f.join("");
  };n.cache = {};n.parse = function (e) {
    var n = e,
        r = [],
        t = [],
        i = 0;while (n) {
      if ((r = /^[^\x25]+/.exec(n)) !== null) {
        t.push(r[0]);
      } else if ((r = /^\x25{2}/.exec(n)) !== null) {
        t.push("%");
      } else if ((r = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(n)) !== null) {
        if (r[2]) {
          i |= 1;var o = [],
              a = r[2],
              s = [];if ((s = /^([a-z_][a-z_\d]*)/i.exec(a)) !== null) {
            o.push(s[1]);while ((a = a.substring(s[0].length)) !== "") {
              if ((s = /^\.([a-z_][a-z_\d]*)/i.exec(a)) !== null) {
                o.push(s[1]);
              } else if ((s = /^\[(\d+)\]/.exec(a)) !== null) {
                o.push(s[1]);
              } else {
                throw "[sprintf] huh?";
              }
            }
          } else {
            throw "[sprintf] huh?";
          }r[2] = o;
        } else {
          i |= 2;
        }if (i === 3) {
          throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
        }t.push(r);
      } else {
        throw "[sprintf] huh?";
      }n = n.substring(r[0].length);
    }return t;
  };var r = function r(e, _r, t) {
    t = _r.slice(0);t.splice(0, 0, e);return n.apply(null, t);
  };function t(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }function i(e, n) {
    for (var r = []; n > 0; r[--n] = e) {}return r.join("");
  }e.sprintf = n;e.vsprintf = r;
})(typeof global != "undefined" ? global : window);(function (e, n) {
  "use strict";
  e.omap = function (n, r) {
    var t = {};e.each(n, function (e, i) {
      t[e] = r.call(n, e, i);
    });return t;
  };var r = { clone_object: function clone_object(n) {
      var r = {};if ((typeof n === "undefined" ? "undefined" : _typeof(n)) == "object") {
        if (e.isArray(n)) {
          return this.clone_array(n);
        } else if (n === null) {
          return n;
        } else {
          for (var t in n) {
            if (e.isArray(n[t])) {
              r[t] = this.clone_array(n[t]);
            } else if (_typeof(n[t]) == "object") {
              r[t] = this.clone_object(n[t]);
            } else {
              r[t] = n[t];
            }
          }
        }
      }return r;
    }, clone_array: function clone_array(n) {
      if (!e.isFunction(Array.prototype.map)) {
        throw new Error("You'r browser don't support ES5 array map " + "use es5-shim");
      }return n.slice(0).map(function (e) {
        if ((typeof e === "undefined" ? "undefined" : _typeof(e)) == "object") {
          return this.clone_object(e);
        } else {
          return e;
        }
      }.bind(this));
    } };var t = function t(e) {
    return r.clone_object(e);
  };var i = function i() {
    var e = "test",
        n = window.localStorage;try {
      n.setItem(e, "1");n.removeItem(e);return true;
    } catch (r) {
      return false;
    }
  };var o = i();function a(e, n) {
    var r;if (typeof e === "string" && typeof n === "string") {
      localStorage[e] = n;return true;
    } else if ((typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" && typeof n === "undefined") {
      for (r in e) {
        if (e.hasOwnProperty(r)) {
          localStorage[r] = e[r];
        }
      }return true;
    }return false;
  }function s(e, n) {
    var r, t, i;r = new Date();r.setTime(r.getTime() + 31536e6);t = "; expires=" + r.toGMTString();if (typeof e === "string" && typeof n === "string") {
      document.cookie = e + "=" + n + t + "; path=/";return true;
    } else if ((typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" && typeof n === "undefined") {
      for (i in e) {
        if (e.hasOwnProperty(i)) {
          document.cookie = i + "=" + e[i] + t + "; path=/";
        }
      }return true;
    }return false;
  }function l(e) {
    return localStorage[e];
  }function f(e) {
    var n, r, t, i;n = e + "=";r = document.cookie.split(";");for (t = 0; t < r.length; t++) {
      i = r[t];while (i.charAt(0) === " ") {
        i = i.substring(1, i.length);
      }if (i.indexOf(n) === 0) {
        return i.substring(n.length, i.length);
      }
    }return null;
  }function c(e) {
    return delete localStorage[e];
  }function u(e) {
    return s(e, "", -1);
  }e.extend({ Storage: { set: o ? a : s, get: o ? l : f, remove: o ? c : u } });var h = e;h.fn.extend({ everyTime: function everyTime(e, n, r, t, i) {
      return this.each(function () {
        h.timer.add(this, e, n, r, t, i);
      });
    }, oneTime: function oneTime(e, n, r) {
      return this.each(function () {
        h.timer.add(this, e, n, r, 1);
      });
    }, stopTime: function stopTime(e, n) {
      return this.each(function () {
        h.timer.remove(this, e, n);
      });
    } });h.extend({ timer: { guid: 1, global: {}, regex: /^([0-9]+)\s*(.*s)?$/, powers: { ms: 1, cs: 10, ds: 100, s: 1e3, das: 1e4, hs: 1e5, ks: 1e6 }, timeParse: function timeParse(e) {
        if (e === n || e === null) {
          return null;
        }var r = this.regex.exec(h.trim(e.toString()));if (r[2]) {
          var t = parseInt(r[1], 10);var i = this.powers[r[2]] || 1;return t * i;
        } else {
          return e;
        }
      }, add: function add(e, n, r, t, i, o) {
        var a = 0;if (h.isFunction(r)) {
          if (!i) {
            i = t;
          }t = r;r = n;
        }n = h.timer.timeParse(n);if (typeof n !== "number" || isNaN(n) || n <= 0) {
          return;
        }if (i && i.constructor !== Number) {
          o = !!i;i = 0;
        }i = i || 0;o = o || false;if (!e.$timers) {
          e.$timers = {};
        }if (!e.$timers[r]) {
          e.$timers[r] = {};
        }t.$timerID = t.$timerID || this.guid++;var s = function s() {
          if (o && s.inProgress) {
            return;
          }s.inProgress = true;if (++a > i && i !== 0 || t.call(e, a) === false) {
            h.timer.remove(e, r, t);
          }s.inProgress = false;
        };s.$timerID = t.$timerID;if (!e.$timers[r][t.$timerID]) {
          e.$timers[r][t.$timerID] = window.setInterval(s, n);
        }if (!this.global[r]) {
          this.global[r] = [];
        }this.global[r].push(e);
      }, remove: function remove(e, n, r) {
        var t = e.$timers,
            i;if (t) {
          if (!n) {
            for (var o in t) {
              if (t.hasOwnProperty(o)) {
                this.remove(e, o, r);
              }
            }
          } else if (t[n]) {
            if (r) {
              if (r.$timerID) {
                window.clearInterval(t[n][r.$timerID]);delete t[n][r.$timerID];
              }
            } else {
              for (var a in t[n]) {
                if (t[n].hasOwnProperty(a)) {
                  window.clearInterval(t[n][a]);delete t[n][a];
                }
              }
            }for (i in t[n]) {
              if (t[n].hasOwnProperty(i)) {
                break;
              }
            }if (!i) {
              i = null;delete t[n];
            }
          }for (i in t) {
            if (t.hasOwnProperty(i)) {
              break;
            }
          }if (!i) {
            e.$timers = null;
          }
        }
      } } });if (/(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase())) {
    h(window).one("unload", function () {
      var e = h.timer.global;for (var n in e) {
        if (e.hasOwnProperty(n)) {
          var r = e[n],
              t = r.length;while (--t) {
            h.timer.remove(r[t], n);
          }
        }
      }
    });
  }(function (e) {
    if (!String.prototype.split.toString().match(/\[native/)) {
      return;
    }var n = String.prototype.split,
        r = /()??/.exec("")[1] === e,
        t;t = function t(_t, i, o) {
      if (Object.prototype.toString.call(i) !== "[object RegExp]") {
        return n.call(_t, i, o);
      }var a = [],
          s = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.extended ? "x" : "") + (i.sticky ? "y" : ""),
          l = 0,
          f,
          c,
          u,
          h;i = new RegExp(i.source, s + "g");_t += "";if (!r) {
        f = new RegExp("^" + i.source + "$(?!\\s)", s);
      }o = o === e ? -1 >>> 0 : o >>> 0;while (c = i.exec(_t)) {
        u = c.index + c[0].length;if (u > l) {
          a.push(_t.slice(l, c.index));if (!r && c.length > 1) {
            c[0].replace(f, function () {
              for (var n = 1; n < arguments.length - 2; n++) {
                if (arguments[n] === e) {
                  c[n] = e;
                }
              }
            });
          }if (c.length > 1 && c.index < _t.length) {
            Array.prototype.push.apply(a, c.slice(1));
          }h = c[0].length;l = u;if (a.length >= o) {
            break;
          }
        }if (i.lastIndex === c.index) {
          i.lastIndex++;
        }
      }if (l === _t.length) {
        if (h || !i.test("")) {
          a.push("");
        }
      } else {
        a.push(_t.slice(l));
      }return a.length > o ? a.slice(0, o) : a;
    };String.prototype.split = function (e, n) {
      return t(this, e, n);
    };return t;
  })();e.fn.caret = function (e) {
    var n = this[0];var r = n.contentEditable === "true";if (arguments.length == 0) {
      if (window.getSelection) {
        if (r) {
          n.focus();var t = window.getSelection().getRangeAt(0),
              i = t.cloneRange();i.selectNodeContents(n);i.setEnd(t.endContainer, t.endOffset);return i.toString().length;
        }return n.selectionStart;
      }if (document.selection) {
        n.focus();if (r) {
          var t = document.selection.createRange(),
              i = document.body.createTextRange();i.moveToElementText(n);i.setEndPoint("EndToEnd", t);return i.text.length;
        }var e = 0,
            o = n.createTextRange(),
            i = document.selection.createRange().duplicate(),
            a = i.getBookmark();o.moveToBookmark(a);while (o.moveStart("character", -1) !== 0) {
          e++;
        }return e;
      }return 0;
    }if (e == -1) e = this[r ? "text" : "val"]().length;if (window.getSelection) {
      if (r) {
        n.focus();window.getSelection().collapse(n.firstChild, e);
      } else n.setSelectionRange(e, e);
    } else if (document.body.createTextRange) {
      var o = document.body.createTextRange();o.moveToElementText(n);o.moveStart("character", e);o.collapse(true);o.select();
    }if (!r) n.focus();return e;
  };function p(e, n) {
    var r = [];var t = e.length;if (t < n) {
      return [e];
    } else if (n < 0) {
      throw new Error("str_parts: length can't be negative");
    }for (var i = 0; i < t; i += n) {
      r.push(e.substring(i, i + n));
    }return r;
  }function m(n) {
    var r = n ? [n] : [];var t = 0;e.extend(this, { get: function get() {
        return r;
      }, rotate: function rotate() {
        if (!r.filter(Boolean).length) {
          return;
        }if (r.length === 1) {
          return r[0];
        } else {
          if (t === r.length - 1) {
            t = 0;
          } else {
            ++t;
          }if (r[t]) {
            return r[t];
          } else {
            return this.rotate();
          }
        }
      }, length: function length() {
        return r.length;
      }, remove: function remove(e) {
        delete r[e];
      }, set: function set(e) {
        for (var n = r.length; n--;) {
          if (r[n] === e) {
            t = n;return;
          }
        }this.append(e);
      }, front: function front() {
        if (r.length) {
          var e = t;var n = false;while (!r[e]) {
            e++;if (e > r.length) {
              if (n) {
                break;
              }e = 0;n = true;
            }
          }return r[e];
        }
      }, append: function append(e) {
        r.push(e);
      } });
  }function g(n) {
    var r = n instanceof Array ? n : n ? [n] : [];e.extend(this, { data: function data() {
        return r;
      }, map: function map(n) {
        return e.map(r, n);
      }, size: function size() {
        return r.length;
      }, pop: function pop() {
        if (r.length === 0) {
          return null;
        } else {
          var e = r[r.length - 1];r = r.slice(0, r.length - 1);return e;
        }
      }, push: function push(e) {
        r = r.concat([e]);return e;
      }, top: function top() {
        return r.length > 0 ? r[r.length - 1] : null;
      }, clone: function clone() {
        return new g(r.slice(0));
      } });
  }e.json_stringify = function (r, t) {
    var i = "",
        o;t = t === n ? 1 : t;var a = typeof r === "undefined" ? "undefined" : _typeof(r);switch (a) {case "function":
        i += r;break;case "boolean":
        i += r ? "true" : "false";break;case "object":
        if (r === null) {
          i += "null";
        } else if (r instanceof Array) {
          i += "[";var s = r.length;for (o = 0; o < s - 1; ++o) {
            i += e.json_stringify(r[o], t + 1);
          }i += e.json_stringify(r[s - 1], t + 1) + "]";
        } else {
          i += "{";for (var l in r) {
            if (r.hasOwnProperty(l)) {
              i += '"' + l + '":' + e.json_stringify(r[l], t + 1);
            }
          }i += "}";
        }break;case "string":
        var f = r;var c = { "\\\\": "\\\\", '"': '\\"', "/": "\\/", "\\n": "\\n", "\\r": "\\r", "\\t": "\\t" };for (o in c) {
          if (c.hasOwnProperty(o)) {
            f = f.replace(new RegExp(o, "g"), c[o]);
          }
        }i += '"' + f + '"';break;case "number":
        i += String(r);break;}i += t > 1 ? "," : "";if (t === 1) {
      i = i.replace(/,([\]}])/g, "$1");
    }return i.replace(/([\[{]),/g, "$1");
  };function d(n, r) {
    var t = true;var i = "";if (typeof n === "string" && n !== "") {
      i = n + "_";
    }i += "commands";var o = e.Storage.get(i);o = o ? e.parseJSON(o) : [];var a = o.length - 1;e.extend(this, { append: function append(n) {
        if (t) {
          if (o[o.length - 1] !== n) {
            o.push(n);if (r && o.length > r) {
              o = o.slice(-r);
            }a = o.length - 1;e.Storage.set(i, e.json_stringify(o));
          }
        }
      }, data: function data() {
        return o;
      }, reset: function reset() {
        a = o.length - 1;
      }, last: function last() {
        return o[length - 1];
      }, end: function end() {
        return a === o.length - 1;
      }, position: function position() {
        return a;
      }, current: function current() {
        return o[a];
      }, next: function next() {
        if (a < o.length - 1) {
          ++a;
        }if (a !== -1) {
          return o[a];
        }
      }, previous: function previous() {
        var e = a;if (a > 0) {
          --a;
        }if (e !== -1) {
          return o[a];
        }
      }, clear: function clear() {
        o = [];this.purge();
      }, enabled: function enabled() {
        return t;
      }, enable: function enable() {
        t = true;
      }, purge: function purge() {
        e.Storage.remove(i);
      }, disable: function disable() {
        t = false;
      } });
  }var v = function () {
    var e = document.createElement("div");e.setAttribute("onpaste", "return;");return typeof e.onpaste == "function";
  }();var y = true;e.fn.cmd = function (r) {
    var t = this;var i = t.data("cmd");if (i) {
      return i;
    }t.addClass("cmd");t.append('<span class="prompt"></span><span></span>' + '<span class="cursor">&nbsp;</span><span></span>');var o = e("<textarea>").addClass("clipboard").appendTo(t);if (r.width) {
      t.width(r.width);
    }var a;var s;var l = t.find(".prompt");var f = false;var c = "";var u = null;var h;var m = r.mask || false;var g = "";var y;var _ = "";var w = "";var C = 0;var S;var T;var F = r.historySize || 60;var A, j;var E = t.find(".cursor");var R;var $ = 0;function I() {
      var e = o.is(":focus");if (T) {
        if (!e) {
          o.focus();t.oneTime(10, function () {
            o.focus();
          });
        }
      } else {
        if (e) {
          o.blur();
        }
      }
    }function z() {
      if (x) {
        t.oneTime(10, function () {
          o.val(g);t.oneTime(10, function () {
            o.caret(C);
          });
        });
      }
    }if (b && !k) {
      R = function R(e) {
        if (e) {
          E.addClass("blink");
        } else {
          E.removeClass("blink");
        }
      };
    } else {
      var O = false;R = function R(e) {
        if (e && !O) {
          O = true;E.addClass("inverted blink");t.everyTime(500, "blink", K);
        } else if (O && !e) {
          O = false;t.stopTime("blink", K);E.removeClass("inverted blink");
        }
      };
    }function K(e) {
      E.toggleClass("inverted");
    }function N() {
      S = "(reverse-i-search)`" + c + "': ";q();
    }function P() {
      S = h;f = false;u = null;c = "";
    }function L(n) {
      var r = j.data();var i, o;var a = r.length;if (n && u > 0) {
        a -= u;
      }if (c.length > 0) {
        for (var s = c.length; s > 0; s--) {
          o = e.terminal.escape_regex(c.substring(0, s));i = new RegExp(o);for (var l = a; l--;) {
            if (i.test(r[l])) {
              u = r.length - l;t.position(r[l].indexOf(o));t.set(r[l], true);H();if (c.length !== s) {
                c = c.substring(0, s);N();
              }return;
            }
          }
        }
      }c = "";
    }function D() {
      var e = t.width();var n = E[0].getBoundingClientRect().width;a = Math.floor(e / n);
    }function B(e) {
      var n = e.substring(0, a - s);var r = e.substring(a - s);return [n].concat(p(r, a));
    }var H = function (n) {
      var r = E.prev();var t = E.next();function i(n, i) {
        var o = n.length;if (i === o) {
          r.html(e.terminal.encode(n));E.html("&nbsp;");t.html("");
        } else if (i === 0) {
          r.html("");E.html(e.terminal.encode(n.slice(0, 1)));t.html(e.terminal.encode(n.slice(1)));
        } else {
          var a = n.slice(0, i);r.html(e.terminal.encode(a));var s = n.slice(i, i + 1);E.html(e.terminal.encode(s));if (i === n.length - 1) {
            t.html("");
          } else {
            t.html(e.terminal.encode(n.slice(i + 1)));
          }
        }
      }function o(n) {
        return "<div>" + e.terminal.encode(n) + "</div>";
      }function l(n) {
        var r = t;e.each(n, function (n, t) {
          r = e(o(t)).insertAfter(r).addClass("clear");
        });
      }function f(n) {
        e.each(n, function (e, n) {
          r.before(o(n));
        });
      }var c = 0;return function () {
        var c;var u;switch (typeof m === "undefined" ? "undefined" : _typeof(m)) {case "boolean":
            c = m ? g.replace(/./g, "*") : g;break;case "string":
            c = g.replace(/./g, m);break;}var h, d;n.find("div").remove();r.html("");if (c.length > a - s - 1 || c.match(/\n/)) {
          var v;var y = c.match(/\t/g);var _ = y ? y.length * 3 : 0;if (y) {
            c = c.replace(/\t/g, "\x00\x00\x00\x00");
          }if (c.match(/\n/)) {
            var w = c.split("\n");d = a - s - 1;for (h = 0; h < w.length - 1; ++h) {
              w[h] += " ";
            }if (w[0].length > d) {
              v = [w[0].substring(0, d)];u = w[0].substring(d);v = v.concat(p(u, a));
            } else {
              v = [w[0]];
            }for (h = 1; h < w.length; ++h) {
              if (w[h].length > a) {
                v = v.concat(p(w[h], a));
              } else {
                v.push(w[h]);
              }
            }
          } else {
            v = B(c);
          }if (y) {
            v = e.map(v, function (e) {
              return e.replace(/\x00\x00\x00\x00/g, "	");
            });
          }d = v[0].length;if (d === 0 && v.length === 1) {} else if (C < d) {
            i(v[0], C);l(v.slice(1));
          } else if (C === d) {
            r.before(o(v[0]));i(v[1], 0);l(v.slice(2));
          } else {
            var b = v.length;var k = 0;if (C < d) {
              i(v[0], C);l(v.slice(1));
            } else if (C === d) {
              r.before(o(v[0]));i(v[1], 0);l(v.slice(2));
            } else {
              var x = v.slice(-1)[0];var S = c.length - C - _;var T = x.length;var F = 0;if (S <= T) {
                f(v.slice(0, -1));if (T === S) {
                  F = 0;
                } else {
                  F = T - S;
                }i(x, F);
              } else {
                if (b === 3) {
                  u = e.terminal.encode(v[0]);r.before("<div>" + u + "</div>");i(v[1], C - d - 1);u = e.terminal.encode(v[2]);t.after('<div class="clear">' + u + "</div>");
                } else {
                  var A;var j;F = C;for (h = 0; h < v.length; ++h) {
                    var R = v[h].length;if (F > R) {
                      F -= R;
                    } else {
                      break;
                    }
                  }j = v[h];A = h;if (F === j.length) {
                    F = 0;j = v[++A];
                  }i(j, F);f(v.slice(0, A));l(v.slice(A + 1));
                }
              }
            }
          }
        } else {
          if (c === "") {
            r.html("");E.html("&nbsp;");t.html("");
          } else {
            i(c, C);
          }
        }
      };
    }(t);var q = function () {
      function n(n) {
        l.html(e.terminal.format(e.terminal.encode(n)));s = l.text().length;
      }return function () {
        switch (typeof S === "undefined" ? "undefined" : _typeof(S)) {case "string":
            n(S);break;case "function":
            S(n);break;}
      };
    }();function J(e) {
      if ($++ > 0) {
        return;
      }if (e.originalEvent) {
        e = e.originalEvent;
      }if (t.isenabled()) {
        var n = t.find("textarea");if (!n.is(":focus")) {
          n.focus();
        }t.oneTime(100, function () {
          t.insert(n.val());n.val("");z();
        });
      }
    }var M = true;var U = false;var Y;function G(i) {
      var a, s, l;if (T) {
        if (e.isFunction(r.keydown)) {
          a = r.keydown(i);if (a !== n) {
            return a;
          }
        }if (i.which !== 38 && !(i.which === 80 && i.ctrlKey)) {
          M = true;
        }if (f && (i.which === 35 || i.which === 36 || i.which === 37 || i.which === 38 || i.which === 39 || i.which === 40 || i.which === 13 || i.which === 27)) {
          P();q();if (i.which === 27) {
            t.set("");
          }H();G.call(this, i);
        } else if (i.altKey) {
          if (i.which === 68) {
            t.set(g.slice(0, C) + g.slice(C).replace(/ *[^ ]+ *(?= )|[^ ]+$/, ""), true);return false;
          }return true;
        } else if (i.keyCode === 13) {
          if (i.shiftKey) {
            t.insert("\n");
          } else {
            if (j && g && !m && e.isFunction(r.historyFilter) && r.historyFilter(g) || r.historyFilter instanceof RegExp && g.match(r.historyFilter) || !r.historyFilter) {
              j.append(g);
            }var u = g;j.reset();t.set("");if (r.commands) {
              r.commands(u);
            }if (e.isFunction(S)) {
              q();
            }
          }
        } else if (i.which === 8) {
          if (f) {
            c = c.slice(0, -1);N();
          } else {
            if (g !== "" && C > 0) {
              t["delete"](-1);
            }
          }if (x) {
            return true;
          }
        } else if (i.which === 67 && i.ctrlKey && i.shiftKey) {
          _ = W();
        } else if (i.which === 86 && i.ctrlKey && i.shiftKey) {
          if (_ !== "") {
            t.insert(_);
          }
        } else if (i.which === 9 && !(i.ctrlKey || i.altKey)) {
          t.insert("	");
        } else if (i.which === 46) {
          t["delete"](1);return;
        } else if (j && i.which === 38 && !i.ctrlKey || i.which === 80 && i.ctrlKey) {
          if (M) {
            y = g;t.set(j.current());
          } else {
            t.set(j.previous());
          }M = false;
        } else if (j && i.which === 40 && !i.ctrlKey || i.which === 78 && i.ctrlKey) {
          t.set(j.end() ? y : j.next());
        } else if (i.which === 37 || i.which === 66 && i.ctrlKey) {
          if (i.ctrlKey && i.which !== 66) {
            l = C - 1;s = 0;if (g[l] === " ") {
              --l;
            }for (var p = l; p > 0; --p) {
              if (g[p] === " " && g[p + 1] !== " ") {
                s = p + 1;break;
              } else if (g[p] === "\n" && g[p + 1] !== "\n") {
                s = p;break;
              }
            }t.position(s);
          } else {
            if (C > 0) {
              t.position(-1, true);H();
            }
          }
        } else if (i.which === 82 && i.ctrlKey) {
          if (f) {
            L(true);
          } else {
            h = S;N();y = g;t.set("");H();f = true;
          }
        } else if (i.which == 71 && i.ctrlKey) {
          if (f) {
            S = h;q();t.set(y);H();f = false;c = "";
          }
        } else if (i.which === 39 || i.which === 70 && i.ctrlKey) {
          if (i.ctrlKey && i.which !== 70) {
            if (g[C] === " ") {
              ++C;
            }var d = /\S[\n\s]{2,}|[\n\s]+\S?/;var b = g.slice(C).match(d);if (!b || b[0].match(/^\s+$/)) {
              t.position(g.length);
            } else {
              if (b[0][0] !== " ") {
                C += b.index + 1;
              } else {
                C += b.index + b[0].length - 1;if (b[0][b[0].length - 1] !== " ") {
                  --C;
                }
              }
            }H();
          } else {
            if (C < g.length) {
              t.position(1, true);
            }
          }
        } else if (i.which === 123) {
          return;
        } else if (i.which === 36) {
          t.position(0);
        } else if (i.which === 35) {
          t.position(g.length);
        } else if (i.shiftKey && i.which == 45) {
          o.val("");$ = 0;if (!v) {
            J(i);
          } else {
            o.focus();
          }return;
        } else if (i.ctrlKey || i.metaKey) {
          if (i.which === 192) {
            return;
          }if (i.metaKey) {
            if (i.which === 82) {
              return;
            } else if (i.which === 76) {
              return;
            }
          }if (i.shiftKey) {
            if (i.which === 84) {
              return;
            }
          } else {
            if (i.which === 81) {
              if (g !== "" && C !== 0) {
                var k = g.slice(0, C).match(/([^ ]+ *$)/);w = t["delete"](-k[0].length);
              }return false;
            } else if (i.which === 72) {
              if (g !== "" && C > 0) {
                t["delete"](-1);
              }return false;
            } else if (i.which === 65) {
              t.position(0);
            } else if (i.which === 69) {
              t.position(g.length);
            } else if (i.which === 88 || i.which === 67 || i.which === 84) {
              return;
            } else if (i.which === 89) {
              if (w !== "") {
                t.insert(w);
              }
            } else if (i.which === 86 || i.which === 118) {
              o.val("");$ = 0;if (!v) {
                J(i);
              } else {
                o.focus();o.on("input", function F(e) {
                  J(e);o.off("input", F);
                });
              }return;
            } else if (i.which === 75) {
              w = t["delete"](g.length - C);
            } else if (i.which === 85) {
              if (g !== "" && C !== 0) {
                w = t["delete"](-C);
              }
            } else if (i.which === 17) {
              return false;
            }
          }
        } else {
          U = false;Y = true;return;
        }i.preventDefault();
      }
    }function Q() {
      if (e.isFunction(r.onCommandChange)) {
        r.onCommandChange(g);
      }
    }e.extend(t, { name: function name(e) {
        if (e !== n) {
          A = e;var r = j && j.enabled() || !j;j = new d(e, F);if (!r) {
            j.disable();
          }return t;
        } else {
          return A;
        }
      }, purge: function purge() {
        j.clear();return t;
      }, history: function history() {
        return j;
      }, "delete": function _delete(e, n) {
        var r;if (e === 0) {
          return t;
        } else if (e < 0) {
          if (C > 0) {
            r = g.slice(0, C).slice(e);g = g.slice(0, C + e) + g.slice(C, g.length);if (!n) {
              t.position(C + e);
            } else {
              Q();
            }
          }
        } else {
          if (g !== "" && C < g.length) {
            r = g.slice(C).slice(0, e);g = g.slice(0, C) + g.slice(C + e, g.length);Q();
          }
        }H();z();return r;
      }, set: function set(e, r) {
        if (e !== n) {
          g = e;if (!r) {
            t.position(g.length);
          }H();z();Q();
        }return t;
      }, insert: function insert(e, n) {
        if (C === g.length) {
          g += e;
        } else if (C === 0) {
          g = e + g;
        } else {
          g = g.slice(0, C) + e + g.slice(C);
        }if (!n) {
          t.position(e.length, true);
        } else {
          z();
        }H();Q();return t;
      }, get: function get() {
        return g;
      }, commands: function commands(e) {
        if (e) {
          r.commands = e;return t;
        } else {
          return e;
        }
      }, destroy: function destroy() {
        Z.unbind("keypress.cmd", V);Z.unbind("keydown.cmd", G);Z.unbind("paste.cmd", J);Z.unbind("input.cmd", en);t.stopTime("blink", K);t.find(".cursor").next().remove().end().prev().remove().end().remove();t.find(".prompt, .clipboard").remove();t.removeClass("cmd").removeData("cmd");return t;
      }, prompt: function prompt(e) {
        if (e === n) {
          return S;
        } else {
          if (typeof e === "string" || typeof e === "function") {
            S = e;
          } else {
            throw new Error("prompt must be a function or string");
          }q();H();return t;
        }
      }, kill_text: function kill_text() {
        return w;
      }, position: function position(n, i) {
        if (typeof n === "number") {
          if (i) {
            C += n;
          } else {
            if (n < 0) {
              C = 0;
            } else if (n > g.length) {
              C = g.length;
            } else {
              C = n;
            }
          }if (e.isFunction(r.onPositionChange)) {
            r.onPositionChange(C);
          }H();z();return t;
        } else {
          return C;
        }
      }, visible: function () {
        var e = t.visible;return function () {
          e.apply(t, []);H();q();
        };
      }(), show: function () {
        var e = t.show;return function () {
          e.apply(t, []);H();q();
        };
      }(), resize: function resize(e) {
        if (e) {
          a = e;
        } else {
          D();
        }H();return t;
      }, enable: function enable() {
        T = true;t.addClass("enabled");R(true);I();return t;
      }, isenabled: function isenabled() {
        return T;
      }, disable: function disable() {
        T = false;t.removeClass("enabled");R(false);I();return t;
      }, mask: function mask(e) {
        if (typeof e === "undefined") {
          return m;
        } else {
          m = e;H();return t;
        }
      } });t.name(r.name || r.prompt || "");if (typeof r.prompt == "string") {
      S = r.prompt;
    } else {
      S = "> ";
    }q();if (r.enabled === n || r.enabled === true) {
      t.enable();
    }var X;var Z = e(document.documentElement || window);function V(i) {
      var o;Y = false;if ((i.ctrlKey || i.metaKey) && [99, 118, 86].indexOf(i.which) !== -1) {
        return;
      }if (U) {
        return;
      }if (!f && e.isFunction(r.keypress)) {
        o = r.keypress(i);
      }if (o === n || o) {
        if (T) {
          if (e.inArray(i.which, [38, 13, 0, 8]) > -1 && !(i.which === 38 && i.shiftKey)) {
            if (i.keyCode == 123) {
              return;
            }return false;
          } else if (!i.ctrlKey && !(i.altKey && i.which === 100) || i.altKey) {
            if (f) {
              c += String.fromCharCode(i.which);L();N();
            } else {
              t.insert(String.fromCharCode(i.which));
            }return false;
          }
        }
      } else {
        return o;
      }
    }function en(e) {
      if (Y) {
        var n = o.val();if (n || e.which == 8) {
          t.set(n);
        }
      }
    }Z.bind("keypress.cmd", V).bind("keydown.cmd", G).bind("input.cmd", en);t.data("cmd", t);return t;
  };function _(n) {
    return e("<div>" + e.terminal.strip(n) + "</div>").text().length;
  }function w(e) {
    return e.length - _(e);
  }var b = function () {
    var e = false,
        r = "animation",
        t = "",
        i = "Webkit Moz O ms Khtml".split(" "),
        o = "",
        a = document.createElement("div");if (a.style.animationName) {
      e = true;
    }if (e === false) {
      for (var s = 0; s < i.length; s++) {
        var l = i[s] + "AnimationName";if (a.style[l] !== n) {
          o = i[s];r = o + "Animation";t = "-" + o.toLowerCase() + "-";e = true;break;
        }
      }
    }return e;
  }();var k = navigator.userAgent.toLowerCase().indexOf("android") != -1;var x = function () {
    return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
  }();function C(n, r) {
    var t = r(n);if (t.length) {
      var i = t.shift();var o = new RegExp("^" + e.terminal.escape_regex(i));var a = n.replace(o, "").trim();return { command: n, name: i, args: t, rest: a };
    } else {
      return { command: n, name: "", args: [], rest: "" };
    }
  }var S = /(\[\[[!gbiuso]*;[^;]*;[^\]]*\](?:[^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?)/i;var T = /\[\[([!gbiuso]*);([^;]*);([^;\]]*);?([^;\]]*);?([^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?/gi;var F = /\[\[([!gbiuso]*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?/gi;var A = /\[\[([!gbiuso]*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]/gi;var j = /^\[\[([!gbiuso]*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]$/gi;var E = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;var R = /(\bhttps?:\/\/(?:(?:(?!&[^;]+;)|(?=&amp;))[^\s"'<>\]\[)])+\b)/gi;var $ = /\b(https?:\/\/(?:(?:(?!&[^;]+;)|(?=&amp;))[^\s"'<>\][)])+)\b(?![^[\]]*])/gi;var I = /((([^<>('")[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))/g;var z = /('[^']*'|"(\\"|[^"])*"|(?:\/(\\\/|[^\/])+\/[gimy]*)(?=:? |$)|(\\ |[^ ])+|[\w-]+)/gi;var O = /(\[\[[!gbiuso]*;[^;]*;[^\]]*\])/i;var K = /^(\[\[[!gbiuso]*;[^;]*;[^\]]*\])/i;var N = /\[\[[!gbiuso]*;[^;]*;[^\]]*\]?$/i;var P = /(\[\[(?:[^\]]|\\\])*\]\])/;e.terminal = { version: "0.11.5", color_names: ["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"], valid_color: function valid_color(n) {
      if (n.match(E)) {
        return true;
      } else {
        return e.inArray(n.toLowerCase(), e.terminal.color_names) !== -1;
      }
    }, escape_regex: function escape_regex(e) {
      if (typeof e == "string") {
        var n = /([-\\\^$\[\]()+{}?*.|])/g;return e.replace(n, "\\$1");
      }
    }, have_formatting: function have_formatting(e) {
      return typeof e == "string" && !!e.match(A);
    }, is_formatting: function is_formatting(e) {
      return typeof e == "string" && !!e.match(j);
    }, format_split: function format_split(e) {
      return e.split(S);
    }, split_equal: function split_equal(n, r, t) {
      var i = false;var o = false;var a = "";var s = [];var l = n.replace(F, function (e, n, r) {
        var t = n.match(/;/g).length;if (t >= 4) {
          return e;
        } else if (t == 2) {
          t = ";;";
        } else if (t == 3) {
          t = ";";
        } else {
          t = "";
        }var i = r.replace(/\\\]/g, "&#93;").replace(/\n/g, "\\n").replace(/&nbsp;/g, " ");return "[[" + n + t + i + "]" + r + "]";
      }).split(/\n/g);function f() {
        return h.substring(d - 6, d) == "&nbsp;" || h.substring(d - 1, d) == " ";
      }for (var c = 0, u = l.length; c < u; ++c) {
        if (l[c] === "") {
          s.push("");continue;
        }var h = l[c];var p = 0;var m = 0;var g = -1;for (var d = 0, v = h.length; d < v; ++d) {
          if (h.substring(d).match(K)) {
            i = true;o = false;
          } else if (i && h[d] === "]") {
            if (o) {
              i = false;o = false;
            } else {
              o = true;
            }
          } else if (i && o || !i) {
            if (h[d] === "&") {
              var y = h.substring(d).match(/^(&[^;]+;)/);if (!y) {
                throw new Error("Unclosed html entity in line " + (c + 1) + " at char " + (d + 1));
              }d += y[1].length - 2;if (d === v - 1) {
                s.push(_ + y[1]);
              }continue;
            } else if (h[d] === "]" && h[d - 1] === "\\") {
              --m;
            } else {
              ++m;
            }
          }if (f() && (i && o || !i || h[d] === "[" && h[d + 1] === "[")) {
            g = d;
          }if ((m === r || d === v - 1) && (i && o || !i)) {
            var _;var w = e.terminal.strip(h.substring(g));w = e("<span>" + w + "</span>").text();var b = w.length;w = w.substring(0, d + r + 1);var k = !!w.match(/\s/) || d + r + 1 > b;if (t && g != -1 && d !== v - 1 && k) {
              _ = h.substring(p, g);d = g - 1;
            } else {
              _ = h.substring(p, d + 1);
            }if (t) {
              _ = _.replace(/(&nbsp;|\s)+$/g, "");
            }g = -1;p = d + 1;m = 0;if (a) {
              _ = a + _;if (_.match("]")) {
                a = "";
              }
            }var x = _.match(F);if (x) {
              var C = x[x.length - 1];if (C[C.length - 1] !== "]") {
                a = C.match(O)[1];_ += "]";
              } else if (_.match(N)) {
                var S = _.length;_ = _.replace(N, "");a = C.match(O)[1];
              }
            }s.push(_);
          }
        }
      }return s;
    }, encode: function encode(e) {
      e = e.replace(/&(?!#[0-9]+;|[a-zA-Z]+;)/g, "&amp;");return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    }, escape_formatting: function escape_formatting(n) {
      return e.terminal.escape_brackets(e.terminal.encode(n));
    }, format: function format(n, r) {
      var t = e.extend({}, { linksNoReferrer: false }, r || {});if (typeof n === "string") {
        var i = e.terminal.format_split(n);n = e.map(i, function (n) {
          if (n === "") {
            return n;
          } else if (e.terminal.is_formatting(n)) {
            n = n.replace(/\[\[[^\]]+\]/, function (e) {
              return e.replace(/&nbsp;/g, " ");
            });return n.replace(T, function (n, r, i, o, a, s, l) {
              if (l === "") {
                return "";
              }l = l.replace(/\\]/g, "]");var f = "";if (r.indexOf("b") !== -1) {
                f += "font-weight:bold;";
              }var c = [];if (r.indexOf("u") !== -1) {
                c.push("underline");
              }if (r.indexOf("s") !== -1) {
                c.push("line-through");
              }if (r.indexOf("o") !== -1) {
                c.push("overline");
              }if (c.length) {
                f += "text-decoration:" + c.join(" ") + ";";
              }if (r.indexOf("i") !== -1) {
                f += "font-style:italic;";
              }if (e.terminal.valid_color(i)) {
                f += "color:" + i + ";";if (r.indexOf("g") !== -1) {
                  f += "text-shadow:0 0 5px " + i + ";";
                }
              }if (e.terminal.valid_color(o)) {
                f += "background-color:" + o;
              }var u;if (s === "") {
                u = l;
              } else {
                u = s.replace(/&#93;/g, "]");
              }var h;if (r.indexOf("!") !== -1) {
                if (u.match(I)) {
                  h = '<a href="mailto:' + u + '" ';
                } else {
                  h = '<a target="_blank" href="' + u + '" ';if (t.linksNoReferrer) {
                    h += 'rel="noreferrer" ';
                  }
                }
              } else {
                h = "<span";
              }if (f !== "") {
                h += ' style="' + f + '"';
              }if (a !== "") {
                h += ' class="' + a + '"';
              }if (r.indexOf("!") !== -1) {
                h += ">" + l + "</a>";
              } else {
                h += ' data-text="' + u.replace('"', "&quote;") + '">' + l + "</span>";
              }return h;
            });
          } else {
            return "<span>" + n.replace(/\\\]/g, "]") + "</span>";
          }
        }).join("");return n.replace(/<span><br\s*\/?><\/span>/gi, "<br/>");
      } else {
        return "";
      }
    }, escape_brackets: function escape_brackets(e) {
      return e.replace(/\[/g, "&#91;").replace(/\]/g, "&#93;");
    }, strip: function strip(e) {
      return e.replace(T, "$6");
    }, active: function active() {
      return Z.front();
    }, parseArguments: function parseArguments(n) {
      return e.terminal.parse_arguments(n);
    }, splitArguments: function splitArguments(n) {
      return e.terminal.split_arguments(n);
    }, parseCommand: function parseCommand(n) {
      return e.terminal.parse_command(n);
    }, splitCommand: function splitCommand(n) {
      return e.terminal.split_command(n);
    }, parse_arguments: function parse_arguments(n) {
      var r = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;return e.map(n.match(z) || [], function (e) {
        if (e[0] === "'" && e[e.length - 1] === "'") {
          return e.replace(/^'|'$/g, "");
        } else if (e[0] === '"' && e[e.length - 1] === '"') {
          e = e.replace(/^"|"$/g, "").replace(/\\([" ])/g, "$1");return e.replace(/\\\\|\\t|\\n/g, function (e) {
            if (e[1] === "t") {
              return "	";
            } else if (e[1] === "n") {
              return "\n";
            } else {
              return "\\";
            }
          }).replace(/\\x([0-9a-f]+)/gi, function (e, n) {
            return String.fromCharCode(parseInt(n, 16));
          }).replace(/\\0([0-7]+)/g, function (e, n) {
            return String.fromCharCode(parseInt(n, 8));
          });
        } else if (e.match(/^\/(\\\/|[^\/])+\/[gimy]*$/)) {
          var n = e.match(/^\/([^\/]+)\/([^\/]*)$/);return new RegExp(n[1], n[2]);
        } else if (e.match(/^-?[0-9]+$/)) {
          return parseInt(e, 10);
        } else if (e.match(r)) {
          return parseFloat(e);
        } else {
          return e.replace(/\\ /g, " ");
        }
      });
    }, split_arguments: function split_arguments(n) {
      return e.map(n.match(z) || [], function (e) {
        if (e[0] === "'" && e[e.length - 1] === "'") {
          return e.replace(/^'|'$/g, "");
        } else if (e[0] === '"' && e[e.length - 1] === '"') {
          return e.replace(/^"|"$/g, "").replace(/\\([" ])/g, "$1");
        } else if (e.match(/\/.*\/[gimy]*$/)) {
          return e;
        } else {
          return e.replace(/\\ /g, " ");
        }
      });
    }, parse_command: function parse_command(n) {
      return C(n, e.terminal.parse_arguments);
    }, split_command: function split_command(n) {
      return C(n, e.terminal.split_arguments);
    }, extended_command: function extended_command(e, n) {
      try {
        nn = false;e.exec(n, true).then(function () {
          nn = true;
        });
      } catch (r) {}
    } };e.fn.visible = function () {
    return this.css("visibility", "visible");
  };e.fn.hidden = function () {
    return this.css("visibility", "hidden");
  };var L = {};e.jrpc = function (n, r, t, i, o) {
    L[n] = L[n] || 0;var a = e.json_stringify({ jsonrpc: "2.0", method: r, params: t, id: ++L[n] });return e.ajax({ url: n, data: a, success: function success(n, r, t) {
        var a = t.getResponseHeader("Content-Type");if (!a.match(/application\/json/)) {
          var s = "Response Content-Type is not application/json";if (console && console.warn) {
            console.warn(s);
          } else {
            throw new Error("WARN: " + s);
          }
        }var l;try {
          l = e.parseJSON(n);
        } catch (f) {
          if (o) {
            o(t, "Invalid JSON", f);
          } else {
            throw new Error("Invalid JSON");
          }return;
        }i(l, r, t);
      }, error: o, contentType: "application/json", dataType: "text", async: true, cache: false, type: "POST" });
  };function D() {
    var n = e('<div class="terminal temp"><div class="cmd"><span cla' + 'ss="cursor">&nbsp;</span></div></div>').appendTo("body");var r = n.find("span");var t = { width: r.width(), height: r.outerHeight() };n.remove();return t;
  }function B(n) {
    var r = e('<div class="terminal wrap"><span class="cursor">' + "&nbsp;</span></div>").appendTo("body").css("padding", 0);var t = r.find("span");var i = t[0].getBoundingClientRect().width;var o = Math.floor(n.width() / i);r.remove();if (q(n)) {
      var a = 20;var s = n.innerWidth() - n.width();o -= Math.ceil((a - s / 2) / (i - 1));
    }return o;
  }function H(e) {
    return Math.floor(e.height() / D().height);
  }function W() {
    if (window.getSelection || document.getSelection) {
      var e = (window.getSelection || document.getSelection)();if (e.text) {
        return e.text;
      } else {
        return e.toString();
      }
    } else if (document.selection) {
      return document.selection.createRange().text;
    }
  }function q(n) {
    if (n.css("overflow") == "scroll" || n.css("overflow-y") == "scroll") {
      return true;
    } else if (n.is("body")) {
      return e("body").height() > e(window).height();
    } else {
      return n.get(0).scrollHeight > n.innerHeight();
    }
  }var J = !e.terminal.version.match(/^\{\{/);var M = "Copyright (c) 2011-2016 Jakub Jankiewicz <http://jcubic" + ".pl>";var U = J ? " v. " + e.terminal.version : " ";var Y = new RegExp(" {" + U.length + "}$");var G = "jQuery Terminal Emulator" + (J ? U : "");var Q = [["jQuery Terminal", "(c) 2011-2016 jcubic"], [G, M.replace(/^Copyright | *<.*>/g, "")], [G, M.replace(/^Copyright /, "")], ["      _______                 ________                        __", "     / / _  /_ ____________ _/__  ___/______________  _____  / /", " __ / / // / // / _  / _/ // / / / _  / _/     / /  \\/ / _ \\/ /", "/  / / // / // / ___/ // // / / / ___/ // / / / / /\\  / // / /__", "\\___/____ \\\\__/____/_/ \\__ / /_/____/_//_/_/_/ /_/  \\/\\__\\_\\___/", "         \\/          /____/                                   ".replace(Y, " ") + U, M], ["      __ _____                     ________                              __", "     / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /", " __ / // // // // // _  // _// // / / // _  // _//     // //  \\/ // _ \\/ /", "/  / // // // // // ___// / / // / / // ___// / / / / // // /\\  // // / /__", "\\___//____ \\\\___//____//_/ _\\_  / /_//____//_/ /_/ /_//_//_/ /_/ \\__\\_\\___/", "          \\/              /____/                                          ".replace(Y, "") + U, M]];
  e.terminal.defaults = { prompt: "> ", history: true, exit: true, clear: true, enabled: true, historySize: 60, maskChar: "*", checkArity: true, raw: false, exceptionHandler: null, cancelableAjax: true, processArguments: true, linksNoReferrer: false, processRPCResponse: null, Token: true, convertLinks: true, historyState: false, echoCommand: true, login: null, outputLimit: -1, formatters: [], onAjaxError: null, onRPCError: null, completion: false, historyFilter: null, onInit: e.noop, onClear: e.noop, onBlur: e.noop, onFocus: e.noop, onTerminalChange: e.noop, onExit: e.noop, keypress: e.noop, keydown: e.noop, strings: { wrongPasswordTryAgain: "Wrong password try again!", wrongPassword: "Wrong password!", ajaxAbortError: "Error while aborting ajax call!", wrongArity: "Wrong number of arguments. Function '%s' expects %s got" + " %s!", commandNotFound: "Command '%s' Not Found!", oneRPCWithIgnore: "You can use only one rpc with ignoreSystemDescr" + "ibe", oneInterpreterFunction: "You can't use more than one function (rpc" + "with ignoreSystemDescribe counts as one)", loginFunctionMissing: "You didn't specify a login function", noTokenError: "Access denied (no token)", serverResponse: "Server responded", wrongGreetings: "Wrong value of greetings parameter", notWhileLogin: "You can't call `%s' function while in login", loginIsNotAFunction: "Authenticate must be a function", canExitError: "You can't exit from main interpreter", invalidCompletion: "Invalid completion", invalidSelector: 'Sorry, but terminal said that "%s" is not valid ' + "selector!", invalidTerminalId: "Invalid Terminal ID", login: "login", password: "password", recursiveCall: "Recursive call detected, skip" } };var X = [];var Z = new m();var V = [];var en;var nn = false;var rn = true;var tn = true;e.fn.terminal = function (r, i) {
    function o(n) {
      if (e.isFunction(Fn.processArguments)) {
        return C(n, Fn.processArguments);
      } else if (Fn.processArguments) {
        return e.terminal.parse_command(n);
      } else {
        return e.terminal.split_command(n);
      }
    }function a(n) {
      if (typeof n === "string") {
        ln.echo(n);
      } else if (n instanceof Array) {
        ln.echo(e.map(n, function (n) {
          return e.json_stringify(n);
        }).join(" "));
      } else if ((typeof n === "undefined" ? "undefined" : _typeof(n)) === "object") {
        ln.echo(e.json_stringify(n));
      } else {
        ln.echo(n);
      }
    }function s(n) {
      var r = /(.*):([0-9]+):([0-9]+)$/;var t = n.match(r);if (t) {
        ln.pause();e.get(t[1], function (n) {
          var r = location.href.replace(/[^\/]+$/, "");var i = t[1].replace(r, "");ln.echo("[[b;white;]" + i + "]");var o = n.split("\n");var a = +t[2] - 1;ln.echo(o.slice(a - 2, a + 3).map(function (n, r) {
            if (r == 2) {
              n = "[[;#f00;]" + e.terminal.escape_brackets(n) + "]";
            }return "[" + (a + r) + "]: " + n;
          }).join("\n")).resume();
        }, "text");
      }
    }function l(n) {
      if (e.isFunction(Fn.onRPCError)) {
        Fn.onRPCError.call(ln, n);
      } else {
        ln.error("&#91;RPC&#93; " + n.message);if (n.error && n.error.message) {
          n = n.error;var r = "	" + n.message;if (n.file) {
            r += ' in file "' + n.file.replace(/.*\//, "") + '"';
          }if (n.at) {
            r += " at line " + n.at;
          }ln.error(r);
        }
      }
    }function f(n, r) {
      var t = function t(r, _t2) {
        ln.pause();e.jrpc(n, r, _t2, function (n) {
          if (n.error) {
            l(n.error);
          } else {
            if (e.isFunction(Fn.processRPCResponse)) {
              Fn.processRPCResponse.call(ln, n.result, ln);
            } else {
              a(n.result);
            }
          }ln.resume();
        }, u);
      };return function (e, n) {
        if (e === "") {
          return;
        }try {
          e = o(e);
        } catch (i) {
          n.error(i.toString());return;
        }if (!r || e.name === "help") {
          t(e.name, e.args);
        } else {
          var a = n.token();if (a) {
            t(e.name, [a].concat(e.args));
          } else {
            n.error("&#91;AUTH&#93; " + An.noTokenError);
          }
        }
      };
    }function c(r, t, i, a) {
      return function (s, l) {
        if (s === "") {
          return;
        }var f;try {
          f = o(s);
        } catch (u) {
          ln.error(u.toString());return;
        }var h = r[f.name];var p = e.type(h);if (p === "function") {
          if (t && h.length !== f.args.length) {
            ln.error("&#91;Arity&#93; " + sprintf(An.wrongArity, f.name, h.length, f.args.length));
          } else {
            return h.apply(ln, f.args);
          }
        } else if (p === "object" || p === "string") {
          var m = [];if (p === "object") {
            m = Object.keys(h);h = c(h, t, i);
          }l.push(h, { prompt: f.name + "> ", name: f.name, completion: p === "object" ? m : n });
        } else {
          if (e.isFunction(a)) {
            a(s, ln);
          } else if (e.isFunction(Fn.onCommandNotFound)) {
            Fn.onCommandNotFound(s, ln);
          } else {
            l.error(sprintf(An.commandNotFound, f.name));
          }
        }
      };
    }function u(n, r, t) {
      ln.resume();if (e.isFunction(Fn.onAjaxError)) {
        Fn.onAjaxError.call(ln, n, r, t);
      } else if (r !== "abort") {
        ln.error("&#91;AJAX&#93; " + r + " - " + An.serverResponse + ": \n" + e.terminal.escape_brackets(n.responseText));
      }
    }function h(n, r, t) {
      e.jrpc(n, "system.describe", [], function (i) {
        var o = [];if (i.procs) {
          var s = {};e.each(i.procs, function (t, i) {
            s[i.name] = function () {
              var t = r && i.name != "help";var o = Array.prototype.slice.call(arguments);var s = o.length + (t ? 1 : 0);if (Fn.checkArity && i.params && i.params.length !== s) {
                ln.error("&#91;Arity&#93; " + sprintf(An.wrongArity, i.name, i.params.length, s));
              } else {
                ln.pause();if (t) {
                  var f = ln.token(true);if (f) {
                    o = [f].concat(o);
                  } else {
                    ln.error("&#91;AUTH&#93; " + An.noTokenError);
                  }
                }e.jrpc(n, i.name, o, function (n) {
                  if (n.error) {
                    l(n.error);
                  } else {
                    if (e.isFunction(Fn.processRPCResponse)) {
                      Fn.processRPCResponse.call(ln, n.result, ln);
                    } else {
                      a(n.result);
                    }
                  }ln.resume();
                }, u);
              }
            };
          });s.help = s.help || function (n) {
            if (typeof n == "undefined") {
              ln.echo("Available commands: " + i.procs.map(function (e) {
                return e.name;
              }).join(", ") + ", help");
            } else {
              var r = false;e.each(i.procs, function (e, t) {
                if (t.name == n) {
                  r = true;var i = "";i += "[[bu;#fff;]" + t.name + "]";if (t.params) {
                    i += " " + t.params.join(" ");
                  }if (t.help) {
                    i += "\n" + t.help;
                  }ln.echo(i);return false;
                }
              });if (!r) {
                if (n == "help") {
                  ln.echo("[[bu;#fff;]help] [method]\ndisplay help " + "for the method or list of methods if not" + " specified");
                } else {
                  var t = "Method `" + n.toString() + "' not found ";ln.error(t);
                }
              }
            }
          };t(s);
        } else {
          t(null);
        }
      }, function () {
        t(null);
      });
    }function p(n, r, t) {
      t = t || e.noop;var i = e.type(n);var o;var a = {};var s = 0;var l;if (i === "array") {
        o = {};(function u(n, t) {
          if (n.length) {
            var i = n[0];var a = n.slice(1);var c = e.type(i);if (c === "string") {
              s++;ln.pause();if (Fn.ignoreSystemDescribe) {
                if (s === 1) {
                  l = f(i, r);
                } else {
                  ln.error(An.oneRPCWithIgnore);
                }u(a, t);
              } else {
                h(i, r, function (n) {
                  if (n) {
                    e.extend(o, n);
                  }ln.resume();u(a, t);
                });
              }
            } else if (c === "function") {
              if (l) {
                ln.error(An.oneInterpreterFunction);
              } else {
                l = i;
              }u(a, t);
            } else if (c === "object") {
              e.extend(o, i);u(a, t);
            }
          } else {
            t();
          }
        })(n, function () {
          t({ interpreter: c(o, false, r, l), completion: Object.keys(o) });
        });
      } else if (i === "string") {
        if (Fn.ignoreSystemDescribe) {
          o = { interpreter: f(n, r) };if (e.isArray(Fn.completion)) {
            o.completion = Fn.completion;
          }t(o);
        } else {
          ln.pause();h(n, r, function (e) {
            if (e) {
              a.interpreter = c(e, false, r);a.completion = Object.keys(e);
            } else {
              a.interpreter = f(n, r);
            }t(a);ln.resume();
          });
        }
      } else if (i === "object") {
        t({ interpreter: c(n, Fn.checkArity), completion: Object.keys(n) });
      } else {
        if (i === "undefined") {
          n = e.noop;
        } else if (i !== "function") {
          throw i + " is invalid interpreter value";
        }t({ interpreter: n, completion: Fn.completion });
      }
    }function m(n, r) {
      var t = e.type(r) === "boolean" ? "login" : r;return function (r, i, o, a) {
        ln.pause();e.jrpc(n, t, [r, i], function (e) {
          if (!e.error && e.result) {
            o(e.result);
          } else {
            o(null);
          }ln.resume();
        }, u);
      };
    }function d(e) {
      if (typeof e === "string") {
        return e;
      } else if (typeof e.fileName === "string") {
        return e.fileName + ": " + e.message;
      } else {
        return e.message;
      }
    }function v(n, r) {
      if (e.isFunction(Fn.exceptionHandler)) {
        Fn.exceptionHandler.call(ln, n);
      } else {
        ln.exception(n, r);
      }
    }function y() {
      var e;if (fn.prop) {
        e = fn.prop("scrollHeight");
      } else {
        e = fn.attr("scrollHeight");
      }fn.scrollTop(e);
    }function _(n, r) {
      try {
        if (e.isFunction(r)) {
          r(function () {});
        } else if (typeof r !== "string") {
          var t = n + " must be string or function";throw t;
        }
      } catch (i) {
        v(i, n.toUpperCase());return false;
      }return true;
    }var w = [];var b = 1;function k(n, r) {
      if (Fn.convertLinks) {
        n = n.replace(I, "[[!;;]$1]").replace($, "[[!;;]$1]");
      }var t = e.terminal.defaults.formatters;var i, o;if (!r.raw) {
        for (i = 0; i < t.length; ++i) {
          try {
            if (typeof t[i] == "function") {
              var a = t[i](n);if (typeof a == "string") {
                n = a;
              }
            }
          } catch (s) {
            alert("formatting error at formatters[" + i + "]\n" + (s.stack ? s.stack : s));
          }
        }n = e.terminal.encode(n);
      }w.push(b);if (!r.raw && (n.length > dn || n.match(/\n/))) {
        var l = r.keepWords;var f = e.terminal.split_equal(n, dn, l);for (i = 0, o = f.length; i < o; ++i) {
          if (f[i] === "" || f[i] === "\r") {
            w.push("<span></span>");
          } else {
            if (r.raw) {
              w.push(f[i]);
            } else {
              w.push(e.terminal.format(f[i], { linksNoReferrer: Fn.linksNoReferrer }));
            }
          }
        }
      } else {
        if (!r.raw) {
          n = e.terminal.format(n, { linksNoReferrer: Fn.linksNoReferrer });
        }w.push(n);
      }w.push(r.finalize);
    }function S(n, r) {
      try {
        var t = e.extend({ exec: true, raw: false, finalize: e.noop }, r || {});var i = e.type(n) === "function" ? n() : n;i = e.type(i) === "string" ? i : String(i);if (i !== "") {
          if (t.exec) {
            i = e.map(i.split(P), function (n) {
              if (n.match(P) && !e.terminal.is_formatting(n)) {
                n = n.replace(/^\[\[|\]\]$/g, "");if (cn && cn.command == n) {
                  ln.error(An.recursiveCall);
                } else {
                  e.terminal.extended_command(ln, n);
                }return "";
              } else {
                return n;
              }
            }).join("");if (i !== "") {
              k(i, t);
            }
          } else {
            k(i, t);
          }
        }
      } catch (o) {
        w = [];alert("[Internal Exception(process_line)]:" + d(o) + "\n" + o.stack);
      }
    }function T() {
      Bn.resize(dn);var n = mn.empty().detach();var r;if (Fn.outputLimit >= 0) {
        var t = Fn.outputLimit === 0 ? ln.rows() : Fn.outputLimit;r = pn.slice(pn.length - t - 1);
      } else {
        r = pn;
      }try {
        w = [];e.each(r, function (e, n) {
          S.apply(null, n);
        });Bn.before(n);ln.flush();
      } catch (i) {
        alert("Exception in redraw\n" + i.stack);
      }
    }function F() {
      if (Fn.greetings === n) {
        ln.echo(ln.signature);
      } else if (Fn.greetings) {
        var e = _typeof(Fn.greetings);if (e === "string") {
          ln.echo(Fn.greetings);
        } else if (e === "function") {
          Fn.greetings.call(ln, ln.echo);
        } else {
          ln.error(An.wrongGreetings);
        }
      }
    }function A(n) {
      var r = Bn.prompt();var t = Bn.mask();switch (typeof t === "undefined" ? "undefined" : _typeof(t)) {case "string":
          n = n.replace(/./g, t);break;case "boolean":
          if (t) {
            n = n.replace(/./g, Fn.maskChar);
          } else {
            n = e.terminal.escape_formatting(n);
          }break;}var i = { finalize: function finalize(e) {
          e.addClass("command");
        } };if (e.isFunction(r)) {
        r(function (e) {
          ln.echo(e + n, i);
        });
      } else {
        ln.echo(r + n, i);
      }
    }function j(e) {
      var n = Z.get()[e[0]];if (!n) {
        throw new Error(An.invalidTerminalId);
      }var r = e[1];if (V[r]) {
        n.import_view(V[r]);
      } else {
        nn = false;var t = e[2];if (t) {
          n.exec(t).then(function () {
            nn = true;V[r] = n.export_view();
          });
        }
      }
    }function E() {
      if (nn) {
        rn = false;location.hash = "#" + e.json_stringify(en);setTimeout(function () {
          rn = true;
        }, 100);
      }
    }var z = true;var O;var K = [];var N = false;function L(r, t, i) {
      O = r;if (z) {
        z = false;if (Fn.historyState || Fn.execHash && i) {
          if (!V.length) {
            ln.save_state();
          } else {
            ln.save_state(null);
          }
        }
      }function o() {
        if (!i) {
          nn = true;if (Fn.historyState) {
            ln.save_state(r, false);
          }nn = f;
        }l.resolve();if (e.isFunction(Fn.onAfterCommand)) {
          Fn.onAfterCommand(ln, r);
        }
      }try {
        if (e.isFunction(Fn.onBeforeCommand)) {
          if (Fn.onBeforeCommand(ln, r) === false) {
            return;
          }
        }if (!i) {
          cn = e.terminal.split_command(r);
        }if (!an()) {
          if (i && (e.isFunction(Fn.historyFilter) && Fn.historyFilter(r) || r.match(Fn.historyFilter))) {
            Bn.history().append(r);
          }
        }var s = Dn.top();if (!t && Fn.echoCommand) {
          A(r);
        }var l = new e.Deferred();var f = nn;if (r.match(/^\s*login\s*$/) && ln.token(true)) {
          if (ln.level() > 1) {
            ln.logout(true);
          } else {
            ln.logout();
          }o();
        } else if (Fn.exit && r.match(/^\s*exit\s*$/) && !kn) {
          var c = ln.level();if (c == 1 && ln.get_token() || c > 1) {
            if (ln.get_token(true)) {
              ln.set_token(n, true);
            }ln.pop();
          }o();
        } else if (Fn.clear && r.match(/^\s*clear\s*$/) && !kn) {
          ln.clear();o();
        } else {
          var u = pn.length - 1;var h = s.interpreter.call(ln, r, ln);if (h !== n) {
            ln.pause(true);return e.when(h).then(function (e) {
              if (e && u === pn.length - 1) {
                a(e);
              }o();ln.resume();
            });
          } else if (Rn) {
            var p = r;K.push(function () {
              o();
            });
          } else {
            o();
          }
        }return l.promise();
      } catch (m) {
        v(m, "USER");ln.resume();throw m;
      }
    }function D() {
      if (e.isFunction(Fn.onBeforeLogout)) {
        try {
          if (Fn.onBeforeLogout(ln) === false) {
            return;
          }
        } catch (n) {
          v(n, "onBeforeLogout");
        }
      }J();if (e.isFunction(Fn.onAfterLogout)) {
        try {
          Fn.onAfterLogout(ln);
        } catch (n) {
          v(n, "onAfterlogout");
        }
      }ln.login(Fn.login, true, G);
    }function J() {
      var n = ln.prefix_name(true) + "_";e.Storage.remove(n + "token");e.Storage.remove(n + "login");
    }function M(n) {
      var r = ln.prefix_name() + "_interpreters";var t = e.Storage.get(r);if (t) {
        t = e.parseJSON(t);
      } else {
        t = [];
      }if (e.inArray(n, t) == -1) {
        t.push(n);e.Storage.set(r, e.json_stringify(t));
      }
    }function U(n) {
      var r = Dn.top();var t = ln.prefix_name(true);if (!an()) {
        M(t);
      }Bn.name(t);if (e.isFunction(r.prompt)) {
        Bn.prompt(function (e) {
          r.prompt(e, ln);
        });
      } else {
        Bn.prompt(r.prompt);
      }Bn.set("");if (!n && e.isFunction(r.onStart)) {
        r.onStart(ln);
      }
    }var Y;function G() {
      U();F();var n = false;if (e.isFunction(Fn.onInit)) {
        xn = function xn() {
          n = true;
        };try {
          Fn.onInit(ln);
        } catch (r) {
          v(r, "OnInit");
        } finally {
          xn = e.noop;if (!n) {
            ln.resume();
          }
        }
      }function t() {
        if (rn && Fn.execHash) {
          try {
            if (location.hash) {
              var n = location.hash.replace(/^#/, "");en = e.parseJSON(decodeURIComponent(n));
            } else {
              en = [];
            }if (en.length) {
              j(en[en.length - 1]);
            } else if (V[0]) {
              ln.import_view(V[0]);
            }
          } catch (r) {
            v(r, "TERMINAL");
          }
        }
      }if (tn) {
        tn = false;if (e.fn.hashchange) {
          e(window).hashchange(t);
        } else {
          e(window).bind("hashchange", t);
        }
      }
    }function on(n, r, t) {
      if (Fn.clear && e.inArray("clear", t) == -1) {
        t.push("clear");
      }if (Fn.exit && e.inArray("exit", t) == -1) {
        t.push("exit");
      }var i = Bn.get().substring(0, Bn.position());if (i !== n) {
        return;
      }var o = new RegExp("^" + e.terminal.escape_regex(r));var a = [];for (var s = t.length; s--;) {
        if (o.test(t[s])) {
          a.push(t[s]);
        }
      }if (a.length === 1) {
        ln.insert(a[0].replace(o, ""));
      } else if (a.length > 1) {
        if (hn >= 2) {
          A(n);var l = a.reverse().join("	");ln.echo(e.terminal.escape_brackets(l), { keepWords: true });hn = 0;
        } else {
          var f = false;var c;var u;e: for (u = r.length; u < a[0].length; ++u) {
            for (s = 1; s < a.length; ++s) {
              if (a[0].charAt(u) !== a[s].charAt(u)) {
                break e;
              }
            }f = true;
          }if (f) {
            ln.insert(a[0].slice(0, u).replace(o, ""));
          }
        }
      }
    }function an() {
      return kn || Bn.mask() !== false;
    }function sn(r) {
      var t,
          i,
          o = Dn.top(),
          a;if (!ln.paused() && ln.enabled()) {
        if (e.isFunction(o.keydown)) {
          t = o.keydown(r, ln);if (t !== n) {
            return t;
          }
        } else if (e.isFunction(Fn.keydown)) {
          t = Fn.keydown(r, ln);if (t !== n) {
            return t;
          }
        }if (Fn.completion && e.type(Fn.completion) != "boolean" && (o.completion === n || o.completion == "settings")) {
          a = Fn.completion;
        } else {
          a = o.completion;
        }ln.oneTime(10, function () {
          In();
        });if (r.which !== 9) {
          hn = 0;
        }if (r.which === 68 && r.ctrlKey) {
          if (!kn) {
            if (Bn.get() === "") {
              if (Dn.size() > 1 || Fn.login !== n) {
                ln.pop("");
              } else {
                ln.resume();ln.echo("");
              }
            } else {
              ln.set_command("");
            }
          }return false;
        } else if (r.which === 76 && r.ctrlKey) {
          ln.clear();
        } else if (a && r.which === 9) {
          ++hn;var s = Bn.position();var l = Bn.get().substring(0, s);var f = l.split(" ");var c;if (An.length == 1) {
            c = f[0];
          } else {
            c = f[f.length - 1];for (i = f.length - 1; i > 0; i--) {
              if (f[i - 1][f[i - 1].length - 1] == "\\") {
                c = f[i - 1] + " " + c;
              } else {
                break;
              }
            }
          }switch (e.type(a)) {case "function":
              a(ln, c, function (e) {
                on(l, c, e);
              });break;case "array":
              on(l, c, a);break;default:
              throw new Error(An.invalidCompletion);}return false;
        } else if ((r.which === 118 || r.which === 86) && (r.ctrlKey || r.metaKey)) {
          ln.oneTime(1, function () {
            y();
          });return;
        } else if (r.which === 9 && r.ctrlKey) {
          if (Z.length() > 1) {
            ln.focus(false);return false;
          }
        } else if (r.which === 34) {
          ln.scroll(ln.height());
        } else if (r.which === 33) {
          ln.scroll(-ln.height());
        } else {
          ln.attr({ scrollTop: ln.attr("scrollHeight") });
        }
      } else if (r.which === 68 && r.ctrlKey) {
        if (X.length) {
          for (i = X.length; i--;) {
            var u = X[i];if (4 !== u.readyState) {
              try {
                u.abort();
              } catch (h) {
                ln.error(An.ajaxAbortError);
              }
            }
          }X = [];ln.resume();
        }return false;
      }
    }var ln = this;if (this.length > 1) {
      return this.each(function () {
        e.fn.terminal.call(e(this), r, e.extend({ name: ln.selector }, i));
      });
    }if (ln.data("terminal")) {
      return ln.data("terminal");
    }if (ln.length === 0) {
      throw sprintf(e.terminal.defaults.strings.invalidSelector, ln.selector);
    }var fn;var cn;var un = false;var hn = 0;var pn = [];var mn;var gn = Z.length();var dn;var vn;var yn = [];var _n;var wn = new g();var bn = e.Deferred();var kn = false;var xn = e.noop;var Cn, Sn;var Tn = [];var Fn = e.extend({}, e.terminal.defaults, { name: ln.selector }, i || {});var An = e.terminal.defaults.strings;var jn = Fn.enabled,
        En;var Rn = false;var $n = true;e.extend(ln, e.omap({ id: function id() {
        return gn;
      }, clear: function clear() {
        mn.html("");pn = [];try {
          Fn.onClear(ln);
        } catch (e) {
          v(e, "onClear");
        }ln.attr({ scrollTop: 0 });return ln;
      }, export_view: function export_view() {
        var n = {};if (e.isFunction(Fn.onExport)) {
          try {
            n = Fn.onExport();
          } catch (r) {
            v(r, "onExport");
          }
        }return e.extend({}, { focus: jn, mask: Bn.mask(), prompt: ln.get_prompt(), command: ln.get_command(), position: Bn.position(), lines: t(pn), interpreters: Dn.clone() }, n);
      }, import_view: function import_view(n) {
        if (kn) {
          throw new Error(sprintf(An.notWhileLogin, "import_view"));
        }if (e.isFunction(Fn.onImport)) {
          try {
            Fn.onImport(n);
          } catch (r) {
            v(r, "onImport");
          }
        }bn.then(function () {
          ln.set_prompt(n.prompt);ln.set_command(n.command);Bn.position(n.position);Bn.mask(n.mask);if (n.focus) {
            ln.focus();
          }pn = t(n.lines);Dn = n.interpreters;T();
        });return ln;
      }, save_state: function save_state(r, t, i) {
        if (typeof i != "undefined") {
          V[i] = ln.export_view();
        } else {
          V.push(ln.export_view());
        }if (!e.isArray(en)) {
          en = [];
        }if (r !== n && !t) {
          var o = [gn, V.length - 1, r];en.push(o);E();
        }
      }, exec: function exec(n, r, t) {
        var i = t || new e.Deferred();function o() {
          if (e.isArray(n)) {
            (function t() {
              var e = n.shift();if (e) {
                ln.exec(e, r).then(t);
              } else {
                i.resolve();
              }
            })();
          } else if (Rn) {
            Tn.push([n, r, i]);
          } else {
            L(n, r, true).then(function () {
              i.resolve(ln);
            });
          }
        }if (bn.state() != "resolved") {
          bn.then(o);
        } else {
          o();
        }return i.promise();
      }, autologin: function autologin(e, n, r) {
        ln.trigger("terminal.autologin", [e, n, r]);return ln;
      }, login: function login(n, r, t, i) {
        wn.push([].slice.call(arguments));if (kn) {
          throw new Error(sprintf(An.notWhileLogin, "login"));
        }if (!e.isFunction(n)) {
          throw new Error(An.loginIsNotAFunction);
        }kn = true;if (ln.token() && ln.level() == 1 && !$n) {
          kn = false;ln.logout(true);
        } else {
          if (ln.token(true) && ln.login_name(true)) {
            kn = false;if (e.isFunction(t)) {
              t();
            }return ln;
          }
        }var o = null;if (Fn.history) {
          Bn.history().disable();
        }var a = ln.level();function s(n, o, s, l) {
          if (o) {
            while (ln.level() > a) {
              ln.pop();
            }if (Fn.history) {
              Bn.history().enable();
            }var f = ln.prefix_name(true) + "_";e.Storage.set(f + "token", o);e.Storage.set(f + "login", n);kn = false;if (e.isFunction(t)) {
              t();
            }
          } else {
            if (r) {
              if (!s) {
                ln.error(An.wrongPasswordTryAgain);
              }ln.pop().set_mask(false);
            } else {
              kn = false;if (!s) {
                ln.error(An.wrongPassword);
              }ln.pop().pop();
            }if (e.isFunction(i)) {
              i();
            }
          }ln.off("terminal.autologin");
        }ln.on("terminal.autologin", function (e, n, r, t) {
          s(n, r, t);
        });ln.push(function (e) {
          ln.set_mask(Fn.maskChar).push(function (r) {
            try {
              n.call(ln, e, r, function (n, r) {
                s(e, n, r);
              });
            } catch (t) {
              v(t, "AUTH");
            }
          }, { prompt: An.password + ": ", name: "password" });
        }, { prompt: An.login + ": ", name: "login" });return ln;
      }, settings: function settings() {
        return Fn;
      }, commands: function commands() {
        return Dn.top().interpreter;
      }, setInterpreter: function setInterpreter() {
        if (window.console && console.warn) {
          console.warn("This function is deprecated, use set_inte" + "rpreter insead!");
        }return ln.set_interpreter.apply(ln, arguments);
      }, set_interpreter: function set_interpreter(n, r) {
        function t() {
          ln.pause();p(n, !!r, function (n) {
            ln.resume();var r = Dn.top();e.extend(r, n);U(true);
          });
        }if (e.type(n) == "string" && r) {
          ln.login(m(n, r), true, t);
        } else {
          t();
        }return ln;
      }, greetings: function greetings() {
        F();return ln;
      }, paused: function paused() {
        return Rn;
      }, pause: function pause(n) {
        xn();if (!Rn && Bn) {
          bn.then(function () {
            Rn = true;Bn.disable();if (!n) {
              Bn.hidden();
            }if (e.isFunction(Fn.onPause)) {
              Fn.onPause();
            }
          });
        }return ln;
      }, resume: function resume() {
        function n() {
          Rn = false;if (Z.front() == ln) {
            Bn.enable();
          }Bn.visible();var n = Tn;Tn = [];for (var r = 0; r < n.length; ++r) {
            ln.exec.apply(ln, n[r]);
          }ln.trigger("resume");var t = K.shift();if (t) {
            t();
          }y();if (e.isFunction(Fn.onResume)) {
            Fn.onResume();
          }
        }if (Rn && Bn) {
          if (bn.state() != "resolved") {
            bn.then(n);
          } else {
            n();
          }
        }return ln;
      }, cols: function cols() {
        return Fn.numChars ? Fn.numChars : B(ln);
      }, rows: function rows() {
        return Fn.numRows ? Fn.numRows : H(ln);
      }, history: function history() {
        return Bn.history();
      }, history_state: function history_state(e) {
        if (e) {
          ln.oneTime(1, function () {
            Fn.historyState = true;if (!V.length) {
              ln.save_state();
            } else if (Z.length() > 1) {
              ln.save_state(null);
            }
          });
        } else {
          Fn.historyState = false;
        }return ln;
      }, clear_history_state: function clear_history_state() {
        en = [];V = [];
      }, next: function next() {
        if (Z.length() === 1) {
          return ln;
        } else {
          var n = ln.offset().top;var r = ln.height();var t = ln.scrollTop();Z.front().disable();var i = Z.rotate().enable();var o = i.offset().top - 50;e("html,body").animate({ scrollTop: o }, 500);try {
            Fn.onTerminalChange(i);
          } catch (a) {
            v(a, "onTerminalChange");
          }return i;
        }
      }, focus: function focus(e, n) {
        bn.then(function () {
          if (Z.length() === 1) {
            if (e === false) {
              try {
                if (!n && Fn.onBlur(ln) !== false || n) {
                  ln.disable();
                }
              } catch (r) {
                v(r, "onBlur");
              }
            } else {
              try {
                if (!n && Fn.onFocus(ln) !== false || n) {
                  ln.enable();
                }
              } catch (r) {
                v(r, "onFocus");
              }
            }
          } else {
            if (e === false) {
              ln.next();
            } else {
              var t = Z.front();if (t != ln) {
                t.disable();if (!n) {
                  try {
                    Fn.onTerminalChange(ln);
                  } catch (r) {
                    v(r, "onTerminalChange");
                  }
                }
              }Z.set(ln);ln.enable();
            }
          }
        });return ln;
      }, freeze: function freeze(e) {
        bn.then(function () {
          if (e) {
            ln.disable();En = true;
          } else {
            En = false;ln.enable();
          }
        });
      }, frozen: function frozen() {
        return En;
      }, enable: function enable() {
        if (!jn && !En) {
          if (dn === n) {
            ln.resize();
          }bn.then(function () {
            Bn.enable();jn = true;
          });
        }return ln;
      }, disable: function disable() {
        if (jn && !En) {
          bn.then(function () {
            jn = false;Bn.disable();
          });
        }return ln;
      }, enabled: function enabled() {
        return jn;
      }, signature: function signature() {
        var e = ln.cols();var n = e < 15 ? null : e < 35 ? 0 : e < 55 ? 1 : e < 64 ? 2 : e < 75 ? 3 : 4;if (n !== null) {
          return Q[n].join("\n") + "\n";
        } else {
          return "";
        }
      }, version: function version() {
        return e.terminal.version;
      }, cmd: function cmd() {
        return Bn;
      }, get_command: function get_command() {
        return Bn.get();
      }, set_command: function set_command(e) {
        bn.then(function () {
          Bn.set(e);
        });return ln;
      }, insert: function insert(e) {
        if (typeof e === "string") {
          bn.then(function () {
            Bn.insert(e);
          });return ln;
        } else {
          throw "insert function argument is not a string";
        }
      }, set_prompt: function set_prompt(n) {
        bn.then(function () {
          if (_("prompt", n)) {
            if (e.isFunction(n)) {
              Bn.prompt(function (e) {
                n(e, ln);
              });
            } else {
              Bn.prompt(n);
            }Dn.top().prompt = n;
          }
        });return ln;
      }, get_prompt: function get_prompt() {
        return Dn.top().prompt;
      }, set_mask: function set_mask(e) {
        bn.then(function () {
          Bn.mask(e === true ? Fn.maskChar : e);
        });return ln;
      }, get_output: function get_output(n) {
        if (n) {
          return pn;
        } else {
          return e.map(pn, function (n) {
            return e.isFunction(n[0]) ? n[0]() : n[0];
          }).join("\n");
        }
      }, resize: function resize(n, r) {
        if (!ln.is(":visible")) {
          ln.stopTime("resize");ln.oneTime(500, "resize", function () {
            ln.resize(n, r);
          });
        } else {
          if (n && r) {
            ln.width(n);ln.height(r);
          }n = ln.width();r = ln.height();var t = ln.cols();var i = ln.rows();if (t !== dn || i !== vn) {
            dn = t;vn = i;T();var o = Dn.top();if (e.isFunction(o.resize)) {
              o.resize(ln);
            } else if (e.isFunction(Fn.onResize)) {
              Fn.onResize(ln);
            }Sn = r;Cn = n;y();
          }
        }return ln;
      }, flush: function flush() {
        try {
          var n;e.each(w, function (r, t) {
            if (t === b) {
              n = e("<div></div>");
            } else if (e.isFunction(t)) {
              n.appendTo(mn);try {
                t(n);
              } catch (i) {
                v(i, "USER:echo(finalize)");
              }
            } else {
              e("<div/>").html(t).appendTo(n).width("100%");
            }
          });if (Fn.outputLimit >= 0) {
            var r = Fn.outputLimit === 0 ? ln.rows() : Fn.outputLimit;var t = mn.find("div div");if (t.length > r) {
              var i = pn.length - r + 1;var o = t.slice(0, i);var a = o.parent();o.remove();a.each(function () {
                var n = e(this);if (n.is(":empty")) {
                  n.remove();
                }
              });
            }
          }y();w = [];
        } catch (s) {
          alert("[Flush] " + d(s) + "\n" + s.stack);
        }return ln;
      }, update: function update(e, n) {
        bn.then(function () {
          if (e < 0) {
            e = pn.length + e;
          }if (!pn[e]) {
            ln.error("Invalid line number " + e);
          } else {
            if (n == null) {
              pn.splice(e, 1);
            } else {
              pn[e][0] = n;
            }T();
          }
        });return ln;
      }, last_index: function last_index() {
        return pn.length - 1;
      }, echo: function echo(n, r) {
        n = n || "";e.when(n).then(function (n) {
          try {
            w = [];var t = e.extend({ flush: true, raw: Fn.raw, finalize: e.noop, keepWords: false }, r || {});S(n, t);pn.push([n, e.extend(t, { exec: false })]);if (t.flush) {
              ln.flush();
            }vn = H(ln);In();
          } catch (i) {
            alert("[Terminal.echo] " + d(i) + "\n" + i.stack);
          }
        });return ln;
      }, error: function error(n, r) {
        var t = e.terminal.escape_brackets(n).replace(/\\$/, "&#92;").replace(R, "]$1[[;;;error]");return ln.echo("[[;;;error]" + t + "]", r);
      }, exception: function exception(n, r) {
        var t = d(n);if (r) {
          t = "&#91;" + r + "&#93;: " + t;
        }if (t) {
          ln.error(t, { finalize: function finalize(e) {
              e.addClass("exception message");
            } });
        }if (typeof n.fileName === "string") {
          ln.pause();e.get(n.fileName, function (e) {
            ln.resume();var r = n.lineNumber - 1;var t = e.split("\n")[r];if (t) {
              ln.error("[" + n.lineNumber + "]: " + t);
            }
          });
        }if (n.stack) {
          var i = e.terminal.escape_brackets(n.stack);ln.echo(i.split(/\n/g).map(function (e) {
            return "[[;;;error]" + e.replace(R, function (e) {
              return "]" + e + "[[;;;error]";
            }) + "]";
          }).join("\n"), { finalize: function finalize(e) {
              e.addClass("exception stack-trace");
            } });
        }
      }, scroll: function scroll(e) {
        var n;e = Math.round(e);if (fn.prop) {
          if (e > fn.prop("scrollTop") && e > 0) {
            fn.prop("scrollTop", 0);
          }n = fn.prop("scrollTop");fn.scrollTop(n + e);
        } else {
          if (e > fn.attr("scrollTop") && e > 0) {
            fn.attr("scrollTop", 0);
          }n = fn.attr("scrollTop");fn.scrollTop(n + e);
        }return ln;
      }, logout: function logout(e) {
        if (kn) {
          throw new Error(sprintf(An.notWhileLogin, "logout"));
        }bn.then(function () {
          if (e) {
            var r = wn.pop();ln.set_token(n, true);ln.login.apply(ln, r);
          } else {
            while (Dn.size() > 0) {
              if (ln.pop()) {
                break;
              }
            }
          }
        });return ln;
      }, token: function token(n) {
        return e.Storage.get(ln.prefix_name(n) + "_token");
      }, set_token: function set_token(n, r) {
        var t = ln.prefix_name(r) + "_token";if (typeof n == "undefined") {
          e.Storage.remove(t, n);
        } else {
          e.Storage.set(t, n);
        }return ln;
      }, get_token: function get_token(n) {
        return e.Storage.get(ln.prefix_name(n) + "_token");
      }, login_name: function login_name(n) {
        return e.Storage.get(ln.prefix_name(n) + "_login");
      }, name: function name() {
        return Dn.top().name;
      }, prefix_name: function prefix_name(e) {
        var n = (Fn.name ? Fn.name + "_" : "") + gn;if (e && Dn.size() > 1) {
          var r = Dn.map(function (e) {
            return e.name;
          }).slice(1).join("_");if (r) {
            n += "_" + r;
          }
        }return n;
      }, read: function read(n, r) {
        var t = new e.Deferred();ln.push(function (n) {
          ln.pop();if (e.isFunction(r)) {
            r(n);
          }t.resolve(n);
        }, { prompt: n });return t.promise();
      }, push: function push(r, t) {
        bn.then(function () {
          t = t || {};var i = { infiniteLogin: false };var o = e.extend({}, i, t);if (!o.name && cn) {
            o.name = cn.name;
          }if (o.prompt === n) {
            o.prompt = (o.name || ">") + " ";
          }var a = Dn.top();if (a) {
            a.mask = Bn.mask();
          }var s = Rn;p(r, !!t.login, function (n) {
            Dn.push(e.extend({}, n, o));if (e.isArray(n.completion) && o.completion === true) {
              Dn.top().completion = n.completion;
            } else if (!n.completion && o.completion === true) {
              Dn.top().completion = false;
            }if (o.login) {
              var t = e.type(o.login);if (t == "function") {
                ln.login(o.login, o.infiniteLogin, U, o.infiniteLogin ? e.noop : ln.pop);
              } else if (e.type(r) == "string" && t == "string" || t == "boolean") {
                ln.login(m(r, o.login), o.infiniteLogin, U, o.infiniteLogin ? e.noop : ln.pop);
              }
            } else {
              U();
            }if (!s) {
              ln.resume();
            }
          });
        });return ln;
      }, pop: function pop(r) {
        if (r !== n) {
          A(r);
        }var t = ln.token(true);if (Dn.size() == 1) {
          if (Fn.login) {
            D();if (e.isFunction(Fn.onExit)) {
              try {
                Fn.onExit(ln);
              } catch (i) {
                v(i, "onExit");
              }
            }return true;
          } else {
            ln.error(An.canExitError);
          }
        } else {
          if (ln.token(true)) {
            J();
          }var o = Dn.pop();U();if (kn && ln.get_prompt() != An.login + ": ") {
            kn = false;
          }if (e.isFunction(o.onExit)) {
            try {
              o.onExit(ln);
            } catch (i) {
              v(i, "onExit");
            }
          }ln.set_mask(Dn.top().mask);
        }return ln;
      }, option: function option(n, r) {
        if (typeof r == "undefined") {
          if (typeof n == "string") {
            return Fn[n];
          } else if ((typeof n === "undefined" ? "undefined" : _typeof(n)) == "object") {
            e.each(n, function (e, n) {
              Fn[e] = n;
            });
          }
        } else {
          Fn[n] = r;
        }return ln;
      }, level: function level() {
        return Dn.size();
      }, reset: function reset() {
        bn.then(function () {
          ln.clear();while (Dn.size() > 1) {
            Dn.pop();
          }G();
        });return ln;
      }, purge: function purge() {
        bn.then(function () {
          var n = ln.prefix_name() + "_";var r = e.Storage.get(n + "interpreters");e.each(e.parseJSON(r), function (n, r) {
            e.Storage.remove(r + "_commands");e.Storage.remove(r + "_token");e.Storage.remove(r + "_login");
          });Bn.purge();e.Storage.remove(n + "interpreters");
        });return ln;
      }, destroy: function destroy() {
        bn.then(function () {
          Bn.destroy().remove();mn.remove();e(document).unbind(".terminal");e(window).unbind(".terminal");ln.unbind("click mousewheel mousedown mouseup");ln.removeData("terminal").removeClass("terminal");if (Fn.width) {
            ln.css("width", "");
          }if (Fn.height) {
            ln.css("height", "");
          }e(window).off("blur", qn).off("focus", Wn);Z.remove(gn);
        });return ln;
      } }, function (e, n) {
      return function () {
        try {
          return n.apply(ln, [].slice.apply(arguments));
        } catch (r) {
          if (e !== "exec" && e !== "resume") {
            v(r, "TERMINAL");
          }throw r;
        }
      };
    }));var In = function () {
      var e = q(ln);return function () {
        if (e !== q(ln)) {
          ln.resize();e = q(ln);
        }
      };
    }();if (Fn.width) {
      ln.width(Fn.width);
    }if (Fn.height) {
      ln.height(Fn.height);
    }var zn = navigator.userAgent.toLowerCase();if (!zn.match(/(webkit)[ \/]([\w.]+)/) && ln[0].tagName.toLowerCase() == "body") {
      fn = e("html");
    } else {
      fn = ln;
    }e(document).bind("ajaxSend.terminal", function (e, n, r) {
      X.push(n);
    });mn = e("<div>").addClass("terminal-output").appendTo(ln);ln.addClass("terminal");if (Fn.login && e.isFunction(Fn.onBeforeLogin)) {
      try {
        if (Fn.onBeforeLogin(ln) === false) {
          $n = false;
        }
      } catch (On) {
        v(On, "onBeforeLogin");throw On;
      }
    }var Kn = Fn.login;var Nn;if (typeof r == "string") {
      Nn = r;
    } else if (r instanceof Array) {
      for (var Pn = 0, Ln = r.length; Pn < Ln; ++Pn) {
        if (typeof r[Pn] == "string") {
          Nn = r[Pn];break;
        }
      }
    }if (Nn && (typeof Fn.login === "string" || Fn.login === true)) {
      Fn.login = m(Nn, Fn.login);
    }Z.append(ln);var Dn;var Bn;var Hn;function Wn() {
      if (Hn) {
        ln.focus();
      }
    }function qn() {
      Hn = jn;ln.disable();
    }p(r, !!Fn.login, function (r) {
      if (Fn.completion && typeof Fn.completion != "boolean" || !Fn.completion) {
        r.completion = "settings";
      }Dn = new g(e.extend({ name: Fn.name, prompt: Fn.prompt, keypress: Fn.keypress, keydown: Fn.keydown, resize: Fn.onResize, greetings: Fn.greetings, mousewheel: Fn.mousewheel }, r));Bn = e("<div/>").appendTo(ln).cmd({ prompt: Fn.prompt, history: Fn.history, historyFilter: Fn.historyFilter, historySize: Fn.historySize, width: "100%", enabled: jn && !x, keydown: sn, keypress: function keypress(n) {
          var r,
              t,
              i = Dn.top();if (e.isFunction(i.keypress)) {
            return i.keypress(n, ln);
          } else if (e.isFunction(Fn.keypress)) {
            return Fn.keypress(n, ln);
          }
        }, onCommandChange: function onCommandChange(n) {
          if (e.isFunction(Fn.onCommandChange)) {
            try {
              Fn.onCommandChange(n, ln);
            } catch (r) {
              v(r, "onCommandChange");throw r;
            }
          }y();
        }, commands: L });if (jn && ln.is(":visible") && !x) {
        ln.focus(n, true);
      } else {
        ln.disable();
      }ln.oneTime(100, function () {
        function n(n) {
          var r = e(n.target);if (!r.closest(".terminal").length && ln.enabled() && Fn.onBlur(ln) !== false) {
            ln.disable();
          }
        }e(document).bind("click.terminal", n).bind("contextmenu.terminal", n);
      });var t = e(window);if (!x) {
        t.on("focus", Wn).on("blur", qn);
      } else {}(function () {
        var n = 0;var r = false;ln.mousedown(function () {
          e(window).mousemove(function () {
            r = true;n = 0;e(window).unbind("mousemove");
          });
        }).mouseup(function () {
          var t = r;r = false;e(window).unbind("mousemove");if (!t && n++ == 1) {
            if (!ln.enabled()) {
              ln.focus();Bn.enable();
            }
          }
        });
      })();if (x) {
        ln.click(function () {
          if (!ln.enabled()) {
            ln.focus();Bn.enable();
          } else {
            ln.focus(false);
          }
        });
      }ln.delegate(".exception a", "click", function (n) {
        var r = e(this).attr("href");if (r.match(/:[0-9]+$/)) {
          n.preventDefault();s(r);
        }
      });if (!navigator.platform.match(/linux/i)) {
        ln.mousedown(function (e) {
          if (e.which == 2) {
            var n = W();ln.insert(n);
          }
        });
      }if (ln.is(":visible")) {
        dn = ln.cols();Bn.resize(dn);vn = H(ln);
      }if (Fn.login) {
        ln.login(Fn.login, true, G);
      } else {
        G();
      }ln.oneTime(100, function () {
        t.bind("resize.terminal", function () {
          if (ln.is(":visible")) {
            var e = ln.width();var n = ln.height();if (Sn !== n || Cn !== e) {
              ln.resize();
            }
          }
        });
      });function i(n) {
        var r = Z.get()[n[0]];if (r && gn == r.id()) {
          if (n[2]) {
            try {
              if (Rn) {
                var t = e.Deferred();K.push(function () {
                  return r.exec(n[2]).then(function (e, i) {
                    r.save_state(n[2], true, n[1]);t.resolve();
                  });
                });return t.promise();
              } else {
                return r.exec(n[2]).then(function (e, t) {
                  r.save_state(n[2], true, n[1]);
                });
              }
            } catch (i) {
              var o = e.terminal.escape_brackets(command);var a = "Error while exec with command " + o;r.error(a).exception(i);
            }
          }
        }
      }if (Fn.execHash) {
        if (location.hash) {
          setTimeout(function () {
            try {
              var n = location.hash.replace(/^#/, "");en = e.parseJSON(decodeURIComponent(n));var r = 0;(function o() {
                var e = en[r++];if (e) {
                  i(e).then(o);
                } else {
                  nn = true;
                }
              })();
            } catch (t) {}
          });
        } else {
          nn = true;
        }
      } else {
        nn = true;
      }if (e.event.special.mousewheel) {
        var o = false;e(document).bind("keydown.terminal", function (e) {
          if (e.shiftKey) {
            o = true;
          }
        }).bind("keyup.terminal", function (e) {
          if (e.shiftKey || e.which == 16) {
            o = false;
          }
        });ln.mousewheel(function (n, r) {
          if (!o) {
            var t = Dn.top();if (e.isFunction(t.mousewheel)) {
              var i = t.mousewheel(n, r, ln);if (i === false) {
                return;
              }
            } else if (e.isFunction(Fn.mousewheel)) {
              Fn.mousewheel(n, r, ln);
            }if (r > 0) {
              ln.scroll(-40);
            } else {
              ln.scroll(40);
            }
          }
        });
      }bn.resolve();
    });ln.data("terminal", ln);return ln;
  };
})(jQuery);

(function (c) {
  function g(a) {
    var b = a || window.event,
        i = [].slice.call(arguments, 1),
        e = 0,
        h = 0,
        f = 0;a = c.event.fix(b);a.type = "mousewheel";if (b.wheelDelta) e = b.wheelDelta / 120;if (b.detail) e = -b.detail / 3;f = e;if (b.axis !== undefined && b.axis === b.HORIZONTAL_AXIS) {
      f = 0;h = -1 * e;
    }if (b.wheelDeltaY !== undefined) f = b.wheelDeltaY / 120;if (b.wheelDeltaX !== undefined) h = -1 * b.wheelDeltaX / 120;i.unshift(a, e, h, f);return (c.event.dispatch || c.event.handle).apply(this, i);
  }var d = ["DOMMouseScroll", "mousewheel"];if (c.event.fixHooks) for (var j = d.length; j;) {
    c.event.fixHooks[d[--j]] = c.event.mouseHooks;
  }c.event.special.mousewheel = { setup: function setup() {
      if (this.addEventListener) for (var a = d.length; a;) {
        this.addEventListener(d[--a], g, false);
      } else this.onmousewheel = g;
    }, teardown: function teardown() {
      if (this.removeEventListener) for (var a = d.length; a;) {
        this.removeEventListener(d[--a], g, false);
      } else this.onmousewheel = null;
    } };c.fn.extend({ mousewheel: function mousewheel(a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    }, unmousewheel: function unmousewheel(a) {
      return this.unbind("mousewheel", a);
    } });
})(jQuery);

/*!
jQuery JSONView.
Licensed under the MIT License.
 */
(function (jQuery) {
  var $, Collapser, JSONFormatter, JSONView;
  JSONFormatter = function () {
    function JSONFormatter(options) {
      if (options == null) {
        options = {};
      }
      this.options = options;
    }

    JSONFormatter.prototype.htmlEncode = function (html) {
      if (html !== null) {
        return html.toString().replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      } else {
        return '';
      }
    };

    JSONFormatter.prototype.jsString = function (s) {
      s = JSON.stringify(s).slice(1, -1);
      return this.htmlEncode(s);
    };

    JSONFormatter.prototype.decorateWithSpan = function (value, className) {
      return "<span class=\"" + className + "\">" + this.htmlEncode(value) + "</span>";
    };

    JSONFormatter.prototype.valueToHTML = function (value, level) {
      var valueType;
      if (level == null) {
        level = 0;
      }
      valueType = Object.prototype.toString.call(value).match(/\s(.+)]/)[1].toLowerCase();
      return this["" + valueType + "ToHTML"].call(this, value, level);
    };

    JSONFormatter.prototype.nullToHTML = function (value) {
      return this.decorateWithSpan('null', 'null');
    };

    JSONFormatter.prototype.numberToHTML = function (value) {
      return this.decorateWithSpan(value, 'num');
    };

    JSONFormatter.prototype.stringToHTML = function (value) {
      var multilineClass, newLinePattern;
      if (/^(http|https|file):\/\/[^\s]+$/i.test(value)) {
        return "<a href=\"" + this.htmlEncode(value) + "\"><span class=\"q\">\"</span>" + this.jsString(value) + "<span class=\"q\">\"</span></a>";
      } else {
        multilineClass = '';
        value = this.jsString(value);
        if (this.options.nl2br) {
          newLinePattern = /([^>\\r\\n]?)(\\r\\n|\\n\\r|\\r|\\n)/g;
          if (newLinePattern.test(value)) {
            multilineClass = ' multiline';
            value = (value + '').replace(newLinePattern, '$1' + '<br />');
          }
        }
        return "<span class=\"string" + multilineClass + "\">\"" + value + "\"</span>";
      }
    };

    JSONFormatter.prototype.booleanToHTML = function (value) {
      return this.decorateWithSpan(value, 'bool');
    };

    JSONFormatter.prototype.arrayToHTML = function (array, level) {
      var collapsible, hasContents, index, numProps, output, value, _i, _len;
      if (level == null) {
        level = 0;
      }
      hasContents = false;
      output = '';
      numProps = array.length;
      for (index = _i = 0, _len = array.length; _i < _len; index = ++_i) {
        value = array[index];
        hasContents = true;
        output += '<li>' + this.valueToHTML(value, level + 1);
        if (numProps > 1) {
          output += ',';
        }
        output += '</li>';
        numProps--;
      }
      if (hasContents) {
        collapsible = level === 0 ? '' : ' collapsible';
        return "[<ul class=\"array level" + level + collapsible + "\">" + output + "</ul>]";
      } else {
        return '[ ]';
      }
    };

    JSONFormatter.prototype.objectToHTML = function (object, level) {
      var collapsible, hasContents, key, numProps, output, prop, value;
      if (level == null) {
        level = 0;
      }
      hasContents = false;
      output = '';
      numProps = 0;
      for (prop in object) {
        numProps++;
      }
      for (prop in object) {
        value = object[prop];
        hasContents = true;
        key = this.options.escape ? this.jsString(prop) : prop;
        output += "<li><span class=\"prop\"><span class=\"q\">\"</span>" + key + "<span class=\"q\">\"</span></span>: " + this.valueToHTML(value, level + 1);
        if (numProps > 1) {
          output += ',';
        }
        output += '</li>';
        numProps--;
      }
      if (hasContents) {
        collapsible = level === 0 ? '' : ' collapsible';
        return "{<ul class=\"obj level" + level + collapsible + "\">" + output + "</ul>}";
      } else {
        return '{ }';
      }
    };

    JSONFormatter.prototype.jsonToHTML = function (json) {
      return "<div class=\"jsonview\">" + this.valueToHTML(json) + "</div>";
    };

    return JSONFormatter;
  }();
  typeof module !== "undefined" && module !== null && (module.exports = JSONFormatter);
  Collapser = function () {
    function Collapser() {}

    Collapser.bindEvent = function (item, options) {
      var collapser;
      collapser = document.createElement('div');
      collapser.className = 'collapser';
      collapser.innerHTML = options.collapsed ? '+' : '-';
      collapser.addEventListener('click', function (_this) {
        return function (event) {
          return _this.toggle(event.target, options);
        };
      }(this));
      item.insertBefore(collapser, item.firstChild);
      if (options.collapsed) {
        return this.collapse(collapser);
      }
    };

    Collapser.expand = function (collapser) {
      var ellipsis, target;
      target = this.collapseTarget(collapser);
      if (target.style.display === '') {
        return;
      }
      ellipsis = target.parentNode.getElementsByClassName('ellipsis')[0];
      target.parentNode.removeChild(ellipsis);
      target.style.display = '';
      return collapser.innerHTML = '-';
    };

    Collapser.collapse = function (collapser) {
      var ellipsis, target;
      target = this.collapseTarget(collapser);
      if (target.style.display === 'none') {
        return;
      }
      target.style.display = 'none';
      ellipsis = document.createElement('span');
      ellipsis.className = 'ellipsis';
      ellipsis.innerHTML = ' &hellip; ';
      target.parentNode.insertBefore(ellipsis, target);
      return collapser.innerHTML = '+';
    };

    Collapser.toggle = function (collapser, options) {
      var action, collapsers, target, _i, _len, _results;
      if (options == null) {
        options = {};
      }
      target = this.collapseTarget(collapser);
      action = target.style.display === 'none' ? 'expand' : 'collapse';
      if (options.recursive_collapser) {
        collapsers = collapser.parentNode.getElementsByClassName('collapser');
        _results = [];
        for (_i = 0, _len = collapsers.length; _i < _len; _i++) {
          collapser = collapsers[_i];
          _results.push(this[action](collapser));
        }
        return _results;
      } else {
        return this[action](collapser);
      }
    };

    Collapser.collapseTarget = function (collapser) {
      var target, targets;
      targets = collapser.parentNode.getElementsByClassName('collapsible');
      if (!targets.length) {
        return;
      }
      return target = targets[0];
    };

    return Collapser;
  }();
  $ = jQuery;
  JSONView = {
    collapse: function collapse(el) {
      if (el.innerHTML === '-') {
        return Collapser.collapse(el);
      }
    },
    expand: function expand(el) {
      if (el.innerHTML === '+') {
        return Collapser.expand(el);
      }
    },
    toggle: function toggle(el) {
      return Collapser.toggle(el);
    }
  };
  return $.fn.JSONView = function () {
    var args, defaultOptions, formatter, json, method, options, outputDoc;
    args = arguments;
    if (JSONView[args[0]] != null) {
      method = args[0];
      return this.each(function () {
        var $this, level;
        $this = $(this);
        if (args[1] != null) {
          level = args[1];
          return $this.find(".jsonview .collapsible.level" + level).siblings('.collapser').each(function () {
            return JSONView[method](this);
          });
        } else {
          return $this.find('.jsonview > ul > li .collapsible').siblings('.collapser').each(function () {
            return JSONView[method](this);
          });
        }
      });
    } else {
      json = args[0];
      options = args[1] || {};
      defaultOptions = {
        collapsed: false,
        nl2br: false,
        recursive_collapser: false,
        escape: true
      };
      options = $.extend(defaultOptions, options);
      formatter = new JSONFormatter({
        nl2br: options.nl2br,
        escape: options.escape
      });
      if (Object.prototype.toString.call(json) === '[object String]') {
        json = JSON.parse(json);
      }
      outputDoc = formatter.jsonToHTML(json);
      return this.each(function () {
        var $this, item, items, _i, _len, _results;
        $this = $(this);
        $this.html(outputDoc);
        items = $this[0].getElementsByClassName('collapsible');
        _results = [];
        for (_i = 0, _len = items.length; _i < _len; _i++) {
          item = items[_i];
          if (item.parentNode.nodeName === 'LI') {
            _results.push(Collapser.bindEvent(item.parentNode, options));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      });
    }
  };
})(jQuery);

/**
 * @license
 * lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function () {
  function t(t, n) {
    return t.set(n[0], n[1]), t;
  }function n(t, n) {
    return t.add(n), t;
  }function r(t, n, r) {
    switch (r.length) {case 0:
        return t.call(n);case 1:
        return t.call(n, r[0]);case 2:
        return t.call(n, r[0], r[1]);case 3:
        return t.call(n, r[0], r[1], r[2]);}return t.apply(n, r);
  }function e(t, n, r, e) {
    for (var u = -1, o = t ? t.length : 0; ++u < o;) {
      var i = t[u];n(e, i, r(i), t);
    }return e;
  }function u(t, n) {
    for (var r = -1, e = t ? t.length : 0; ++r < e && false !== n(t[r], r, t);) {}return t;
  }function o(t, n) {
    for (var r = t ? t.length : 0; r-- && false !== n(t[r], r, t);) {}
    return t;
  }function i(t, n) {
    for (var r = -1, e = t ? t.length : 0; ++r < e;) {
      if (!n(t[r], r, t)) return false;
    }return true;
  }function f(t, n) {
    for (var r = -1, e = t ? t.length : 0, u = 0, o = []; ++r < e;) {
      var i = t[r];n(i, r, t) && (o[u++] = i);
    }return o;
  }function c(t, n) {
    return !(!t || !t.length) && -1 < d(t, n, 0);
  }function a(t, n, r) {
    for (var e = -1, u = t ? t.length : 0; ++e < u;) {
      if (r(n, t[e])) return true;
    }return false;
  }function l(t, n) {
    for (var r = -1, e = t ? t.length : 0, u = Array(e); ++r < e;) {
      u[r] = n(t[r], r, t);
    }return u;
  }function s(t, n) {
    for (var r = -1, e = n.length, u = t.length; ++r < e;) {
      t[u + r] = n[r];
    }return t;
  }function h(t, n, r, e) {
    var u = -1,
        o = t ? t.length : 0;for (e && o && (r = t[++u]); ++u < o;) {
      r = n(r, t[u], u, t);
    }return r;
  }function p(t, n, r, e) {
    var u = t ? t.length : 0;for (e && u && (r = t[--u]); u--;) {
      r = n(r, t[u], u, t);
    }return r;
  }function _(t, n) {
    for (var r = -1, e = t ? t.length : 0; ++r < e;) {
      if (n(t[r], r, t)) return true;
    }return false;
  }function v(t, n, r) {
    var e;return r(t, function (t, r, u) {
      if (n(t, r, u)) return e = r, false;
    }), e;
  }function g(t, n, r, e) {
    var u = t.length;for (r += e ? 1 : -1; e ? r-- : ++r < u;) {
      if (n(t[r], r, t)) return r;
    }return -1;
  }function d(t, n, r) {
    if (n !== n) return g(t, b, r);--r;for (var e = t.length; ++r < e;) {
      if (t[r] === n) return r;
    }return -1;
  }function y(t, n, r, e) {
    --r;for (var u = t.length; ++r < u;) {
      if (e(t[r], n)) return r;
    }return -1;
  }function b(t) {
    return t !== t;
  }function x(t, n) {
    var r = t ? t.length : 0;return r ? k(t, n) / r : q;
  }function j(t) {
    return function (n) {
      return null == n ? P : n[t];
    };
  }function w(t) {
    return function (n) {
      return null == t ? P : t[n];
    };
  }function m(t, n, r, e, u) {
    return u(t, function (t, u, o) {
      r = e ? (e = false, t) : n(r, t, u, o);
    }), r;
  }function A(t, n) {
    var r = t.length;for (t.sort(n); r--;) {
      t[r] = t[r].c;
    }return t;
  }function k(t, n) {
    for (var r, e = -1, u = t.length; ++e < u;) {
      var o = n(t[e]);o !== P && (r = r === P ? o : r + o);
    }return r;
  }function E(t, n) {
    for (var r = -1, e = Array(t); ++r < t;) {
      e[r] = n(r);
    }return e;
  }function O(t, n) {
    return l(n, function (n) {
      return [n, t[n]];
    });
  }function S(t) {
    return function (n) {
      return t(n);
    };
  }function I(t, n) {
    return l(n, function (n) {
      return t[n];
    });
  }function R(t, n) {
    return t.has(n);
  }function W(t, n) {
    for (var r = -1, e = t.length; ++r < e && -1 < d(n, t[r], 0);) {}return r;
  }function B(t, n) {
    for (var r = t.length; r-- && -1 < d(n, t[r], 0);) {}return r;
  }function L(t) {
    return "\\" + Ft[t];
  }function C(t) {
    var n = false;if (null != t && typeof t.toString != "function") try {
      n = !!(t + "");
    } catch (t) {}return n;
  }function U(t) {
    var n = -1,
        r = Array(t.size);return t.forEach(function (t, e) {
      r[++n] = [e, t];
    }), r;
  }function M(t, n) {
    return function (r) {
      return t(n(r));
    };
  }function z(t, n) {
    for (var r = -1, e = t.length, u = 0, o = []; ++r < e;) {
      var i = t[r];i !== n && "__lodash_placeholder__" !== i || (t[r] = "__lodash_placeholder__", o[u++] = r);
    }return o;
  }function D(t) {
    var n = -1,
        r = Array(t.size);return t.forEach(function (t) {
      r[++n] = t;
    }), r;
  }function T(t) {
    var n = -1,
        r = Array(t.size);return t.forEach(function (t) {
      r[++n] = [t, t];
    }), r;
  }function $(t) {
    if (Ut.test(t)) {
      for (var n = Lt.lastIndex = 0; Lt.test(t);) {
        n++;
      }t = n;
    } else t = en(t);return t;
  }function F(t) {
    return Ut.test(t) ? t.match(Lt) || [] : t.split("");
  }function N(w) {
    function St(t) {
      return Hu.call(t);
    }function It(t) {
      if (ou(t) && !Fi(t) && !(t instanceof $t)) {
        if (t instanceof Lt) return t;if (Gu.call(t, "__wrapped__")) return Oe(t);
      }return new Lt(t);
    }function Rt() {}function Lt(t, n) {
      this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = P;
    }function $t(t) {
      this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
    }function Ft(t) {
      var n = -1,
          r = t ? t.length : 0;for (this.clear(); ++n < r;) {
        var e = t[n];this.set(e[0], e[1]);
      }
    }function Zt(t) {
      var n = -1,
          r = t ? t.length : 0;for (this.clear(); ++n < r;) {
        var e = t[n];this.set(e[0], e[1]);
      }
    }function qt(t) {
      var n = -1,
          r = t ? t.length : 0;for (this.clear(); ++n < r;) {
        var e = t[n];this.set(e[0], e[1]);
      }
    }function Kt(t) {
      var n = -1,
          r = t ? t.length : 0;for (this.__data__ = new qt(); ++n < r;) {
        this.add(t[n]);
      }
    }function Gt(t) {
      this.__data__ = new Zt(t);
    }function Yt(t, n) {
      var r,
          e = Fi(t) || He(t) ? E(t.length, Fu) : [],
          u = e.length,
          o = !!u;for (r in t) {
        !n && !Gu.call(t, r) || o && ("length" == r || ge(r, u)) || e.push(r);
      }return e;
    }function en(t, n, r, e) {
      return t === P || Ye(t, Zu[r]) && !Gu.call(e, r) ? n : t;
    }function an(t, n, r) {
      (r === P || Ye(t[n], r)) && (typeof n != "number" || r !== P || n in t) || (t[n] = r);
    }function ln(t, n, r) {
      var e = t[n];Gu.call(t, n) && Ye(e, r) && (r !== P || n in t) || (t[n] = r);
    }function sn(t, n) {
      for (var r = t.length; r--;) {
        if (Ye(t[r][0], n)) return r;
      }return -1;
    }function hn(t, n, r, e) {
      return Po(t, function (t, u, o) {
        n(e, t, r(t), o);
      }), e;
    }function pn(t, n) {
      return t && Br(n, bu(n), t);
    }function _n(t, n) {
      for (var r = -1, e = null == t, u = n.length, o = Cu(u); ++r < u;) {
        o[r] = e ? P : du(t, n[r]);
      }return o;
    }function vn(t, n, r) {
      return t === t && (r !== P && (t = t <= r ? t : r), n !== P && (t = t >= n ? t : n)), t;
    }function gn(t, n, r, e, o, i, f) {
      var c;if (e && (c = i ? e(t, o, i, f) : e(t)), c !== P) return c;if (!uu(t)) return t;if (o = Fi(t)) {
        if (c = he(t), !n) return Wr(t, c);
      } else {
        var a = St(t),
            l = "[object Function]" == a || "[object GeneratorFunction]" == a;if (Pi(t)) return Er(t, n);if ("[object Object]" == a || "[object Arguments]" == a || l && !i) {
          if (C(t)) return i ? t : {};if (c = pe(l ? {} : t), !n) return Lr(t, pn(c, t));
        } else {
          if (!Tt[a]) return i ? t : {};c = _e(t, a, gn, n);
        }
      }if (f || (f = new Gt()), i = f.get(t)) return i;if (f.set(t, c), !o) var s = r ? Rn(t, bu, Ho) : bu(t);return u(s || t, function (u, o) {
        s && (o = u, u = t[o]), ln(c, o, gn(u, n, r, e, o, t, f));
      }), c;
    }function dn(t) {
      var n = bu(t);return function (r) {
        return yn(r, t, n);
      };
    }function yn(t, n, r) {
      var e = r.length;if (null == t) return !e;for (t = Tu(t); e--;) {
        var u = r[e],
            o = n[u],
            i = t[u];if (i === P && !(u in t) || !o(i)) return false;
      }return true;
    }function bn(t) {
      return uu(t) ? oo(t) : {};
    }function xn(t, n, r) {
      if (typeof t != "function") throw new Nu("Expected a function");return ni(function () {
        t.apply(P, r);
      }, n);
    }function jn(t, n, r, e) {
      var u = -1,
          o = c,
          i = true,
          f = t.length,
          s = [],
          h = n.length;if (!f) return s;r && (n = l(n, S(r))), e ? (o = a, i = false) : 200 <= n.length && (o = R, i = false, n = new Kt(n));t: for (; ++u < f;) {
        var p = t[u],
            _ = r ? r(p) : p,
            p = e || 0 !== p ? p : 0;if (i && _ === _) {
          for (var v = h; v--;) {
            if (n[v] === _) continue t;
          }s.push(p);
        } else o(n, _, e) || s.push(p);
      }return s;
    }function wn(t, n) {
      var r = true;return Po(t, function (t, e, u) {
        return r = !!n(t, e, u);
      }), r;
    }function mn(t, n, r) {
      for (var e = -1, u = t.length; ++e < u;) {
        var o = t[e],
            i = n(o);if (null != i && (f === P ? i === i && !au(i) : r(i, f))) var f = i,
            c = o;
      }return c;
    }function An(t, n) {
      var r = [];return Po(t, function (t, e, u) {
        n(t, e, u) && r.push(t);
      }), r;
    }function kn(t, n, r, e, u) {
      var o = -1,
          i = t.length;for (r || (r = ve), u || (u = []); ++o < i;) {
        var f = t[o];0 < n && r(f) ? 1 < n ? kn(f, n - 1, r, e, u) : s(u, f) : e || (u[u.length] = f);
      }return u;
    }function En(t, n) {
      return t && qo(t, n, bu);
    }function On(t, n) {
      return t && Vo(t, n, bu);
    }function Sn(t, n) {
      return f(n, function (n) {
        return nu(t[n]);
      });
    }function In(t, n) {
      n = ye(n, t) ? [n] : Ar(n);
      for (var r = 0, e = n.length; null != t && r < e;) {
        t = t[Ae(n[r++])];
      }return r && r == e ? t : P;
    }function Rn(t, n, r) {
      return n = n(t), Fi(t) ? n : s(n, r(t));
    }function Wn(t, n) {
      return t > n;
    }function Bn(t, n) {
      return null != t && Gu.call(t, n);
    }function Ln(t, n) {
      return null != t && n in Tu(t);
    }function Cn(t, n, r) {
      for (var e = r ? a : c, u = t[0].length, o = t.length, i = o, f = Cu(o), s = 1 / 0, h = []; i--;) {
        var p = t[i];i && n && (p = l(p, S(n))), s = jo(p.length, s), f[i] = !r && (n || 120 <= u && 120 <= p.length) ? new Kt(i && p) : P;
      }var p = t[0],
          _ = -1,
          v = f[0];t: for (; ++_ < u && h.length < s;) {
        var g = p[_],
            d = n ? n(g) : g,
            g = r || 0 !== g ? g : 0;
        if (v ? !R(v, d) : !e(h, d, r)) {
          for (i = o; --i;) {
            var y = f[i];if (y ? !R(y, d) : !e(t[i], d, r)) continue t;
          }v && v.push(d), h.push(g);
        }
      }return h;
    }function Un(t, n, r) {
      var e = {};return En(t, function (t, u, o) {
        n(e, r(t), u, o);
      }), e;
    }function Mn(t, n, e) {
      return ye(n, t) || (n = Ar(n), t = me(t, n), n = We(n)), n = null == t ? t : t[Ae(n)], null == n ? P : r(n, t, e);
    }function zn(t) {
      return ou(t) && "[object ArrayBuffer]" == Hu.call(t);
    }function Dn(t) {
      return ou(t) && "[object Date]" == Hu.call(t);
    }function Tn(t, n, r, e, u) {
      if (t === n) n = true;else if (null == t || null == n || !uu(t) && !ou(n)) n = t !== t && n !== n;else t: {
        var o = Fi(t),
            i = Fi(n),
            f = "[object Array]",
            c = "[object Array]";o || (f = St(t), f = "[object Arguments]" == f ? "[object Object]" : f), i || (c = St(n), c = "[object Arguments]" == c ? "[object Object]" : c);var a = "[object Object]" == f && !C(t),
            i = "[object Object]" == c && !C(n);if ((c = f == c) && !a) u || (u = new Gt()), n = o || Gi(t) ? ee(t, n, Tn, r, e, u) : ue(t, n, f, Tn, r, e, u);else {
          if (!(2 & e) && (o = a && Gu.call(t, "__wrapped__"), f = i && Gu.call(n, "__wrapped__"), o || f)) {
            t = o ? t.value() : t, n = f ? n.value() : n, u || (u = new Gt()), n = Tn(t, n, r, e, u);break t;
          }if (c) {
            n: if (u || (u = new Gt()), o = 2 & e, f = bu(t), i = f.length, c = bu(n).length, i == c || o) {
              for (a = i; a--;) {
                var l = f[a];if (!(o ? l in n : Gu.call(n, l))) {
                  n = false;break n;
                }
              }if ((c = u.get(t)) && u.get(n)) n = c == n;else {
                c = true, u.set(t, n), u.set(n, t);for (var s = o; ++a < i;) {
                  var l = f[a],
                      h = t[l],
                      p = n[l];if (r) var _ = o ? r(p, h, l, n, t, u) : r(h, p, l, t, n, u);if (_ === P ? h !== p && !Tn(h, p, r, e, u) : !_) {
                    c = false;break;
                  }s || (s = "constructor" == l);
                }c && !s && (r = t.constructor, e = n.constructor, r != e && "constructor" in t && "constructor" in n && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (c = false)), u.delete(t), u.delete(n), n = c;
              }
            } else n = false;
          } else n = false;
        }
      }return n;
    }function $n(t) {
      return ou(t) && "[object Map]" == St(t);
    }function Fn(t, n, r, e) {
      var u = r.length,
          o = u,
          i = !e;if (null == t) return !o;for (t = Tu(t); u--;) {
        var f = r[u];if (i && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return false;
      }for (; ++u < o;) {
        var f = r[u],
            c = f[0],
            a = t[c],
            l = f[1];if (i && f[2]) {
          if (a === P && !(c in t)) return false;
        } else {
          if (f = new Gt(), e) var s = e(a, l, c, t, n, f);if (s === P ? !Tn(l, a, e, 3, f) : !s) return false;
        }
      }return true;
    }function Nn(t) {
      return !(!uu(t) || Vu && Vu in t) && (nu(t) || C(t) ? Xu : wt).test(ke(t));
    }function Pn(t) {
      return uu(t) && "[object RegExp]" == Hu.call(t);
    }function Zn(t) {
      return ou(t) && "[object Set]" == St(t);
    }function qn(t) {
      return ou(t) && eu(t.length) && !!Dt[Hu.call(t)];
    }function Vn(t) {
      return typeof t == "function" ? t : null == t ? Ou : (typeof t === "undefined" ? "undefined" : _typeof(t)) == "object" ? Fi(t) ? Qn(t[0], t[1]) : Hn(t) : Wu(t);
    }function Kn(t) {
      if (!xe(t)) return bo(t);var n,
          r = [];for (n in Tu(t)) {
        Gu.call(t, n) && "constructor" != n && r.push(n);
      }return r;
    }function Gn(t) {
      if (!uu(t)) {
        var n = [];if (null != t) for (var r in Tu(t)) {
          n.push(r);
        }return n;
      }r = xe(t);var e = [];for (n in t) {
        ("constructor" != n || !r && Gu.call(t, n)) && e.push(n);
      }return e;
    }function Jn(t, n) {
      return t < n;
    }function Yn(t, n) {
      var r = -1,
          e = Qe(t) ? Cu(t.length) : [];return Po(t, function (t, u, o) {
        e[++r] = n(t, u, o);
      }), e;
    }function Hn(t) {
      var n = ae(t);return 1 == n.length && n[0][2] ? je(n[0][0], n[0][1]) : function (r) {
        return r === t || Fn(r, t, n);
      };
    }function Qn(t, n) {
      return ye(t) && n === n && !uu(n) ? je(Ae(t), n) : function (r) {
        var e = du(r, t);return e === P && e === n ? yu(r, t) : Tn(n, e, P, 3);
      };
    }function Xn(t, n, r, e, o) {
      if (t !== n) {
        if (!Fi(n) && !Gi(n)) var i = Gn(n);u(i || n, function (u, f) {
          if (i && (f = u, u = n[f]), uu(u)) {
            o || (o = new Gt());var c = f,
                a = o,
                l = t[c],
                s = n[c],
                h = a.get(s);
            if (h) an(t, c, h);else {
              var h = e ? e(l, s, c + "", t, n, a) : P,
                  p = h === P;p && (h = s, Fi(s) || Gi(s) ? Fi(l) ? h = l : Xe(l) ? h = Wr(l) : (p = false, h = gn(s, true)) : fu(s) || He(s) ? He(l) ? h = vu(l) : !uu(l) || r && nu(l) ? (p = false, h = gn(s, true)) : h = l : p = false), p && (a.set(s, h), Xn(h, s, r, e, a), a.delete(s)), an(t, c, h);
            }
          } else c = e ? e(t[f], u, f + "", t, n, o) : P, c === P && (c = u), an(t, f, c);
        });
      }
    }function tr(t, n) {
      var r = t.length;if (r) return n += 0 > n ? r : 0, ge(n, r) ? t[n] : P;
    }function nr(t, n, r) {
      var e = -1;return n = l(n.length ? n : [Ou], S(fe())), t = Yn(t, function (t) {
        return { a: l(n, function (n) {
            return n(t);
          }), b: ++e, c: t
        };
      }), A(t, function (t, n) {
        var e;t: {
          e = -1;for (var u = t.a, o = n.a, i = u.length, f = r.length; ++e < i;) {
            var c = Sr(u[e], o[e]);if (c) {
              e = e >= f ? c : c * ("desc" == r[e] ? -1 : 1);break t;
            }
          }e = t.b - n.b;
        }return e;
      });
    }function rr(t, n) {
      return t = Tu(t), er(t, n, function (n, r) {
        return r in t;
      });
    }function er(t, n, r) {
      for (var e = -1, u = n.length, o = {}; ++e < u;) {
        var i = n[e],
            f = t[i];r(f, i) && (o[i] = f);
      }return o;
    }function ur(t) {
      return function (n) {
        return In(n, t);
      };
    }function or(t, n, r, e) {
      var u = e ? y : d,
          o = -1,
          i = n.length,
          f = t;for (t === n && (n = Wr(n)), r && (f = l(t, S(r))); ++o < i;) {
        for (var c = 0, a = n[o], a = r ? r(a) : a; -1 < (c = u(f, a, c, e));) {
          f !== t && fo.call(f, c, 1), fo.call(t, c, 1);
        }
      }return t;
    }function ir(t, n) {
      for (var r = t ? n.length : 0, e = r - 1; r--;) {
        var u = n[r];if (r == e || u !== o) {
          var o = u;if (ge(u)) fo.call(t, u, 1);else if (ye(u, t)) delete t[Ae(u)];else {
            var u = Ar(u),
                i = me(t, u);null != i && delete i[Ae(We(u))];
          }
        }
      }
    }function fr(t, n) {
      return t + po(mo() * (n - t + 1));
    }function cr(t, n) {
      var r = "";if (!t || 1 > n || 9007199254740991 < n) return r;do {
        n % 2 && (r += t), (n = po(n / 2)) && (t += t);
      } while (n);return r;
    }function ar(t, n) {
      return n = xo(n === P ? t.length - 1 : n, 0), function () {
        for (var e = arguments, u = -1, o = xo(e.length - n, 0), i = Cu(o); ++u < o;) {
          i[u] = e[n + u];
        }for (u = -1, o = Cu(n + 1); ++u < n;) {
          o[u] = e[u];
        }return o[n] = i, r(t, this, o);
      };
    }function lr(t, n, r, e) {
      if (!uu(t)) return t;n = ye(n, t) ? [n] : Ar(n);for (var u = -1, o = n.length, i = o - 1, f = t; null != f && ++u < o;) {
        var c = Ae(n[u]),
            a = r;if (u != i) {
          var l = f[c],
              a = e ? e(l, c, f) : P;a === P && (a = uu(l) ? l : ge(n[u + 1]) ? [] : {});
        }ln(f, c, a), f = f[c];
      }return t;
    }function sr(t, n, r) {
      var e = -1,
          u = t.length;for (0 > n && (n = -n > u ? 0 : u + n), r = r > u ? u : r, 0 > r && (r += u), u = n > r ? 0 : r - n >>> 0, n >>>= 0, r = Cu(u); ++e < u;) {
        r[e] = t[e + n];
      }return r;
    }function hr(t, n) {
      var r;return Po(t, function (t, e, u) {
        return r = n(t, e, u), !r;
      }), !!r;
    }function pr(t, n, r) {
      var e = 0,
          u = t ? t.length : e;if (typeof n == "number" && n === n && 2147483647 >= u) {
        for (; e < u;) {
          var o = e + u >>> 1,
              i = t[o];null !== i && !au(i) && (r ? i <= n : i < n) ? e = o + 1 : u = o;
        }return u;
      }return _r(t, n, Ou, r);
    }function _r(t, n, r, e) {
      n = r(n);for (var u = 0, o = t ? t.length : 0, i = n !== n, f = null === n, c = au(n), a = n === P; u < o;) {
        var l = po((u + o) / 2),
            s = r(t[l]),
            h = s !== P,
            p = null === s,
            _ = s === s,
            v = au(s);(i ? e || _ : a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : p || v ? 0 : e ? s <= n : s < n) ? u = l + 1 : o = l;
      }return jo(o, 4294967294);
    }function vr(t, n) {
      for (var r = -1, e = t.length, u = 0, o = []; ++r < e;) {
        var i = t[r],
            f = n ? n(i) : i;if (!r || !Ye(f, c)) {
          var c = f;o[u++] = 0 === i ? 0 : i;
        }
      }return o;
    }function gr(t) {
      return typeof t == "number" ? t : au(t) ? q : +t;
    }function dr(t) {
      if (typeof t == "string") return t;if (au(t)) return No ? No.call(t) : "";var n = t + "";return "0" == n && 1 / t == -Z ? "-0" : n;
    }function yr(t, n, r) {
      var e = -1,
          u = c,
          o = t.length,
          i = true,
          f = [],
          l = f;if (r) i = false, u = a;else if (200 <= o) {
        if (u = n ? null : Jo(t)) return D(u);i = false, u = R, l = new Kt();
      } else l = n ? [] : f;t: for (; ++e < o;) {
        var s = t[e],
            h = n ? n(s) : s,
            s = r || 0 !== s ? s : 0;if (i && h === h) {
          for (var p = l.length; p--;) {
            if (l[p] === h) continue t;
          }n && l.push(h), f.push(s);
        } else u(l, h, r) || (l !== f && l.push(h), f.push(s));
      }return f;
    }function br(t, n, r, e) {
      for (var u = t.length, o = e ? u : -1; (e ? o-- : ++o < u) && n(t[o], o, t);) {}return r ? sr(t, e ? 0 : o, e ? o + 1 : u) : sr(t, e ? o + 1 : 0, e ? u : o);
    }function xr(t, n) {
      var r = t;return r instanceof $t && (r = r.value()), h(n, function (t, n) {
        return n.func.apply(n.thisArg, s([t], n.args));
      }, r);
    }function jr(t, n, r) {
      for (var e = -1, u = t.length; ++e < u;) {
        var o = o ? s(jn(o, t[e], n, r), jn(t[e], o, n, r)) : t[e];
      }return o && o.length ? yr(o, n, r) : [];
    }function wr(t, n, r) {
      for (var e = -1, u = t.length, o = n.length, i = {}; ++e < u;) {
        r(i, t[e], e < o ? n[e] : P);
      }return i;
    }function mr(t) {
      return Xe(t) ? t : [];
    }function Ar(t) {
      return Fi(t) ? t : ei(t);
    }function kr(t, n, r) {
      var e = t.length;return r = r === P ? e : r, !n && r >= e ? t : sr(t, n, r);
    }function Er(t, n) {
      if (n) return t.slice();var r = new t.constructor(t.length);return t.copy(r), r;
    }function Or(t) {
      var n = new t.constructor(t.byteLength);return new ro(n).set(new ro(t)), n;
    }function Sr(t, n) {
      if (t !== n) {
        var r = t !== P,
            e = null === t,
            u = t === t,
            o = au(t),
            i = n !== P,
            f = null === n,
            c = n === n,
            a = au(n);if (!f && !a && !o && t > n || o && i && c && !f && !a || e && i && c || !r && c || !u) return 1;if (!e && !o && !a && t < n || a && r && u && !e && !o || f && r && u || !i && u || !c) return -1;
      }return 0;
    }function Ir(t, n, r, e) {
      var u = -1,
          o = t.length,
          i = r.length,
          f = -1,
          c = n.length,
          a = xo(o - i, 0),
          l = Cu(c + a);for (e = !e; ++f < c;) {
        l[f] = n[f];
      }for (; ++u < i;) {
        (e || u < o) && (l[r[u]] = t[u]);
      }for (; a--;) {
        l[f++] = t[u++];
      }return l;
    }function Rr(t, n, r, e) {
      var u = -1,
          o = t.length,
          i = -1,
          f = r.length,
          c = -1,
          a = n.length,
          l = xo(o - f, 0),
          s = Cu(l + a);for (e = !e; ++u < l;) {
        s[u] = t[u];
      }for (l = u; ++c < a;) {
        s[l + c] = n[c];
      }for (; ++i < f;) {
        (e || u < o) && (s[l + r[i]] = t[u++]);
      }return s;
    }function Wr(t, n) {
      var r = -1,
          e = t.length;for (n || (n = Cu(e)); ++r < e;) {
        n[r] = t[r];
      }return n;
    }function Br(t, n, r, e) {
      r || (r = {});
      for (var u = -1, o = n.length; ++u < o;) {
        var i = n[u],
            f = e ? e(r[i], t[i], i, r, t) : P;ln(r, i, f === P ? t[i] : f);
      }return r;
    }function Lr(t, n) {
      return Br(t, Ho(t), n);
    }function Cr(t, n) {
      return function (r, u) {
        var o = Fi(r) ? e : hn,
            i = n ? n() : {};return o(r, t, fe(u, 2), i);
      };
    }function Ur(t) {
      return ar(function (n, r) {
        var e = -1,
            u = r.length,
            o = 1 < u ? r[u - 1] : P,
            i = 2 < u ? r[2] : P,
            o = 3 < t.length && typeof o == "function" ? (u--, o) : P;for (i && de(r[0], r[1], i) && (o = 3 > u ? P : o, u = 1), n = Tu(n); ++e < u;) {
          (i = r[e]) && t(n, i, e, o);
        }return n;
      });
    }function Mr(t, n) {
      return function (r, e) {
        if (null == r) return r;
        if (!Qe(r)) return t(r, e);for (var u = r.length, o = n ? u : -1, i = Tu(r); (n ? o-- : ++o < u) && false !== e(i[o], o, i);) {}return r;
      };
    }function zr(t) {
      return function (n, r, e) {
        var u = -1,
            o = Tu(n);e = e(n);for (var i = e.length; i--;) {
          var f = e[t ? i : ++u];if (false === r(o[f], f, o)) break;
        }return n;
      };
    }function Dr(t, n, r) {
      function e() {
        return (this && this !== Vt && this instanceof e ? o : t).apply(u ? r : this, arguments);
      }var u = 1 & n,
          o = Fr(t);return e;
    }function Tr(t) {
      return function (n) {
        n = gu(n);var r = Ut.test(n) ? F(n) : P,
            e = r ? r[0] : n.charAt(0);return n = r ? kr(r, 1).join("") : n.slice(1), e[t]() + n;
      };
    }function $r(t) {
      return function (n) {
        return h(ku(Au(n).replace(Wt, "")), t, "");
      };
    }function Fr(t) {
      return function () {
        var n = arguments;switch (n.length) {case 0:
            return new t();case 1:
            return new t(n[0]);case 2:
            return new t(n[0], n[1]);case 3:
            return new t(n[0], n[1], n[2]);case 4:
            return new t(n[0], n[1], n[2], n[3]);case 5:
            return new t(n[0], n[1], n[2], n[3], n[4]);case 6:
            return new t(n[0], n[1], n[2], n[3], n[4], n[5]);case 7:
            return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);}var r = bn(t.prototype),
            n = t.apply(r, n);return uu(n) ? n : r;
      };
    }function Nr(t, n, e) {
      function u() {
        for (var i = arguments.length, f = Cu(i), c = i, a = ie(u); c--;) {
          f[c] = arguments[c];
        }return c = 3 > i && f[0] !== a && f[i - 1] !== a ? [] : z(f, a), i -= c.length, i < e ? Xr(t, n, qr, u.placeholder, P, f, c, P, P, e - i) : r(this && this !== Vt && this instanceof u ? o : t, this, f);
      }var o = Fr(t);return u;
    }function Pr(t) {
      return function (n, r, e) {
        var u = Tu(n);if (!Qe(n)) {
          var o = fe(r, 3);n = bu(n), r = function r(t) {
            return o(u[t], t, u);
          };
        }return r = t(n, r, e), -1 < r ? u[o ? n[r] : r] : P;
      };
    }function Zr(t) {
      return ar(function (n) {
        n = kn(n, 1);var r = n.length,
            e = r,
            u = Lt.prototype.thru;
        for (t && n.reverse(); e--;) {
          var o = n[e];if (typeof o != "function") throw new Nu("Expected a function");if (u && !i && "wrapper" == oe(o)) var i = new Lt([], true);
        }for (e = i ? e : r; ++e < r;) {
          var o = n[e],
              u = oe(o),
              f = "wrapper" == u ? Yo(o) : P,
              i = f && be(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? i[oe(f[0])].apply(i, f[3]) : 1 == o.length && be(o) ? i[u]() : i.thru(o);
        }return function () {
          var t = arguments,
              e = t[0];if (i && 1 == t.length && Fi(e) && 200 <= e.length) return i.plant(e).value();for (var u = 0, t = r ? n[u].apply(this, t) : e; ++u < r;) {
            t = n[u].call(this, t);
          }return t;
        };
      });
    }function qr(t, n, r, e, u, o, i, f, c, a) {
      function l() {
        for (var d = arguments.length, y = Cu(d), b = d; b--;) {
          y[b] = arguments[b];
        }if (_) {
          var x,
              j = ie(l),
              b = y.length;for (x = 0; b--;) {
            y[b] === j && x++;
          }
        }if (e && (y = Ir(y, e, u, _)), o && (y = Rr(y, o, i, _)), d -= x, _ && d < a) return j = z(y, j), Xr(t, n, qr, l.placeholder, r, y, j, f, c, a - d);if (j = h ? r : this, b = p ? j[t] : t, d = y.length, f) {
          x = y.length;for (var w = jo(f.length, x), m = Wr(y); w--;) {
            var A = f[w];y[w] = ge(A, x) ? m[A] : P;
          }
        } else v && 1 < d && y.reverse();return s && c < d && (y.length = c), this && this !== Vt && this instanceof l && (b = g || Fr(b)), b.apply(j, y);
      }var s = 128 & n,
          h = 1 & n,
          p = 2 & n,
          _ = 24 & n,
          v = 512 & n,
          g = p ? P : Fr(t);
      return l;
    }function Vr(t, n) {
      return function (r, e) {
        return Un(r, t, n(e));
      };
    }function Kr(t, n) {
      return function (r, e) {
        var u;if (r === P && e === P) return n;if (r !== P && (u = r), e !== P) {
          if (u === P) return e;typeof r == "string" || typeof e == "string" ? (r = dr(r), e = dr(e)) : (r = gr(r), e = gr(e)), u = t(r, e);
        }return u;
      };
    }function Gr(t) {
      return ar(function (n) {
        return n = 1 == n.length && Fi(n[0]) ? l(n[0], S(fe())) : l(kn(n, 1), S(fe())), ar(function (e) {
          var u = this;return t(n, function (t) {
            return r(t, u, e);
          });
        });
      });
    }function Jr(t, n) {
      n = n === P ? " " : dr(n);var r = n.length;return 2 > r ? r ? cr(n, t) : n : (r = cr(n, ho(t / $(n))), Ut.test(n) ? kr(F(r), 0, t).join("") : r.slice(0, t));
    }function Yr(t, n, e, u) {
      function o() {
        for (var n = -1, c = arguments.length, a = -1, l = u.length, s = Cu(l + c), h = this && this !== Vt && this instanceof o ? f : t; ++a < l;) {
          s[a] = u[a];
        }for (; c--;) {
          s[a++] = arguments[++n];
        }return r(h, i ? e : this, s);
      }var i = 1 & n,
          f = Fr(t);return o;
    }function Hr(t) {
      return function (n, r, e) {
        e && typeof e != "number" && de(n, r, e) && (r = e = P), n = su(n), r === P ? (r = n, n = 0) : r = su(r), e = e === P ? n < r ? 1 : -1 : su(e);var u = -1;r = xo(ho((r - n) / (e || 1)), 0);for (var o = Cu(r); r--;) {
          o[t ? r : ++u] = n, n += e;
        }return o;
      };
    }function Qr(t) {
      return function (n, r) {
        return typeof n == "string" && typeof r == "string" || (n = _u(n), r = _u(r)), t(n, r);
      };
    }function Xr(t, n, r, e, u, o, i, f, c, a) {
      var l = 8 & n,
          s = l ? i : P;i = l ? P : i;var h = l ? o : P;return o = l ? P : o, n = (n | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & n || (n &= -4), u = [t, n, u, h, s, o, i, f, c, a], r = r.apply(P, u), be(t) && ti(r, u), r.placeholder = e, ri(r, t, n);
    }function te(t) {
      var n = Du[t];return function (t, r) {
        if (t = _u(t), r = jo(hu(r), 292)) {
          var e = (gu(t) + "e").split("e"),
              e = n(e[0] + "e" + (+e[1] + r)),
              e = (gu(e) + "e").split("e");return +(e[0] + "e" + (+e[1] - r));
        }return n(t);
      };
    }function ne(t) {
      return function (n) {
        var r = St(n);return "[object Map]" == r ? U(n) : "[object Set]" == r ? T(n) : O(n, t(n));
      };
    }function re(t, n, r, e, u, o, i, f) {
      var c = 2 & n;if (!c && typeof t != "function") throw new Nu("Expected a function");var a = e ? e.length : 0;if (a || (n &= -97, e = u = P), i = i === P ? i : xo(hu(i), 0), f = f === P ? f : hu(f), a -= u ? u.length : 0, 64 & n) {
        var l = e,
            s = u;e = u = P;
      }var h = c ? P : Yo(t);return o = [t, n, r, e, u, l, s, o, i, f], h && (r = o[1], t = h[1], n = r | t, e = 128 == t && 8 == r || 128 == t && 256 == r && o[7].length <= h[8] || 384 == t && h[7].length <= h[8] && 8 == r, 131 > n || e) && (1 & t && (o[2] = h[2], n |= 1 & r ? 0 : 4), (r = h[3]) && (e = o[3], o[3] = e ? Ir(e, r, h[4]) : r, o[4] = e ? z(o[3], "__lodash_placeholder__") : h[4]), (r = h[5]) && (e = o[5], o[5] = e ? Rr(e, r, h[6]) : r, o[6] = e ? z(o[5], "__lodash_placeholder__") : h[6]), (r = h[7]) && (o[7] = r), 128 & t && (o[8] = null == o[8] ? h[8] : jo(o[8], h[8])), null == o[9] && (o[9] = h[9]), o[0] = h[0], o[1] = n), t = o[0], n = o[1], r = o[2], e = o[3], u = o[4], f = o[9] = null == o[9] ? c ? 0 : t.length : xo(o[9] - a, 0), !f && 24 & n && (n &= -25), ri((h ? Ko : ti)(n && 1 != n ? 8 == n || 16 == n ? Nr(t, n, f) : 32 != n && 33 != n || u.length ? qr.apply(P, o) : Yr(t, n, r, e) : Dr(t, n, r), o), t, n);
    }function ee(t, n, r, e, u, o) {
      var i = 2 & u,
          f = t.length,
          c = n.length;if (f != c && !(i && c > f)) return false;if ((c = o.get(t)) && o.get(n)) return c == n;var c = -1,
          a = true,
          l = 1 & u ? new Kt() : P;for (o.set(t, n), o.set(n, t); ++c < f;) {
        var s = t[c],
            h = n[c];if (e) var p = i ? e(h, s, c, n, t, o) : e(s, h, c, t, n, o);if (p !== P) {
          if (p) continue;a = false;break;
        }if (l) {
          if (!_(n, function (t, n) {
            if (!l.has(n) && (s === t || r(s, t, e, u, o))) return l.add(n);
          })) {
            a = false;break;
          }
        } else if (s !== h && !r(s, h, e, u, o)) {
          a = false;break;
        }
      }return o.delete(t), o.delete(n), a;
    }function ue(t, n, r, e, u, o, i) {
      switch (r) {case "[object DataView]":
          if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) break;
          t = t.buffer, n = n.buffer;case "[object ArrayBuffer]":
          if (t.byteLength != n.byteLength || !e(new ro(t), new ro(n))) break;return true;case "[object Boolean]":case "[object Date]":case "[object Number]":
          return Ye(+t, +n);case "[object Error]":
          return t.name == n.name && t.message == n.message;case "[object RegExp]":case "[object String]":
          return t == n + "";case "[object Map]":
          var f = U;case "[object Set]":
          if (f || (f = D), t.size != n.size && !(2 & o)) break;return (r = i.get(t)) ? r == n : (o |= 1, i.set(t, n), n = ee(f(t), f(n), e, u, o, i), i.delete(t), n);case "[object Symbol]":
          if (Fo) return Fo.call(t) == Fo.call(n);}return false;
    }function oe(t) {
      for (var n = t.name + "", r = Co[n], e = Gu.call(Co, n) ? r.length : 0; e--;) {
        var u = r[e],
            o = u.func;if (null == o || o == t) return u.name;
      }return n;
    }function ie(t) {
      return (Gu.call(It, "placeholder") ? It : t).placeholder;
    }function fe() {
      var t = It.iteratee || Su,
          t = t === Su ? Vn : t;return arguments.length ? t(arguments[0], arguments[1]) : t;
    }function ce(t, n) {
      var r = t.__data__,
          e = typeof n === "undefined" ? "undefined" : _typeof(n);return ("string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== n : null === n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
    }function ae(t) {
      for (var n = bu(t), r = n.length; r--;) {
        var e = n[r],
            u = t[e];n[r] = [e, u, u === u && !uu(u)];
      }return n;
    }function le(t, n) {
      var r = null == t ? P : t[n];return Nn(r) ? r : P;
    }function se(t, n, r) {
      n = ye(n, t) ? [n] : Ar(n);for (var e, u = -1, o = n.length; ++u < o;) {
        var i = Ae(n[u]);if (!(e = null != t && r(t, i))) break;t = t[i];
      }return e ? e : (o = t ? t.length : 0, !!o && eu(o) && ge(i, o) && (Fi(t) || He(t)));
    }function he(t) {
      var n = t.length,
          r = t.constructor(n);return n && "string" == typeof t[0] && Gu.call(t, "index") && (r.index = t.index, r.input = t.input), r;
    }function pe(t) {
      return typeof t.constructor != "function" || xe(t) ? {} : bn(eo(t));
    }function _e(r, e, u, o) {
      var i = r.constructor;switch (e) {case "[object ArrayBuffer]":
          return Or(r);case "[object Boolean]":case "[object Date]":
          return new i(+r);case "[object DataView]":
          return e = o ? Or(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.byteLength);case "[object Float32Array]":case "[object Float64Array]":case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
          return e = o ? Or(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.length);case "[object Map]":
          return e = o ? u(U(r), true) : U(r), h(e, t, new r.constructor());case "[object Number]":case "[object String]":
          return new i(r);case "[object RegExp]":
          return e = new r.constructor(r.source, yt.exec(r)), e.lastIndex = r.lastIndex, e;case "[object Set]":
          return e = o ? u(D(r), true) : D(r), h(e, n, new r.constructor());case "[object Symbol]":
          return Fo ? Tu(Fo.call(r)) : {};}
    }function ve(t) {
      return Fi(t) || He(t) || !!(co && t && t[co]);
    }function ge(t, n) {
      return n = null == n ? 9007199254740991 : n, !!n && (typeof t == "number" || At.test(t)) && -1 < t && 0 == t % 1 && t < n;
    }function de(t, n, r) {
      if (!uu(r)) return false;var e = typeof n === "undefined" ? "undefined" : _typeof(n);return !!("number" == e ? Qe(r) && ge(n, r.length) : "string" == e && n in r) && Ye(r[n], t);
    }function ye(t, n) {
      if (Fi(t)) return false;var r = typeof t === "undefined" ? "undefined" : _typeof(t);return !("number" != r && "symbol" != r && "boolean" != r && null != t && !au(t)) || ut.test(t) || !et.test(t) || null != n && t in Tu(n);
    }function be(t) {
      var n = oe(t),
          r = It[n];return typeof r == "function" && n in $t.prototype && (t === r || (n = Yo(r), !!n && t === n[0]));
    }function xe(t) {
      var n = t && t.constructor;
      return t === (typeof n == "function" && n.prototype || Zu);
    }function je(t, n) {
      return function (r) {
        return null != r && r[t] === n && (n !== P || t in Tu(r));
      };
    }function we(t, n, r, e, u, o) {
      return uu(t) && uu(n) && (o.set(n, t), Xn(t, n, P, we, o), o.delete(n)), t;
    }function me(t, n) {
      return 1 == n.length ? t : In(t, sr(n, 0, -1));
    }function Ae(t) {
      if (typeof t == "string" || au(t)) return t;var n = t + "";return "0" == n && 1 / t == -Z ? "-0" : n;
    }function ke(t) {
      if (null != t) {
        try {
          return Ku.call(t);
        } catch (t) {}return t + "";
      }return "";
    }function Ee(t, n) {
      return u(V, function (r) {
        var e = "_." + r[0];
        n & r[1] && !c(t, e) && t.push(e);
      }), t.sort();
    }function Oe(t) {
      if (t instanceof $t) return t.clone();var n = new Lt(t.__wrapped__, t.__chain__);return n.__actions__ = Wr(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
    }function Se(t, n, r) {
      var e = t ? t.length : 0;return e ? (r = null == r ? 0 : hu(r), 0 > r && (r = xo(e + r, 0)), g(t, fe(n, 3), r)) : -1;
    }function Ie(t, n, r) {
      var e = t ? t.length : 0;if (!e) return -1;var u = e - 1;return r !== P && (u = hu(r), u = 0 > r ? xo(e + u, 0) : jo(u, e - 1)), g(t, fe(n, 3), u, true);
    }function Re(t) {
      return t && t.length ? t[0] : P;
    }function We(t) {
      var n = t ? t.length : 0;return n ? t[n - 1] : P;
    }function Be(t, n) {
      return t && t.length && n && n.length ? or(t, n) : t;
    }function Le(t) {
      return t ? Ao.call(t) : t;
    }function Ce(t) {
      if (!t || !t.length) return [];var n = 0;return t = f(t, function (t) {
        if (Xe(t)) return n = xo(t.length, n), true;
      }), E(n, function (n) {
        return l(t, j(n));
      });
    }function Ue(t, n) {
      if (!t || !t.length) return [];var e = Ce(t);return null == n ? e : l(e, function (t) {
        return r(n, P, t);
      });
    }function Me(t) {
      return t = It(t), t.__chain__ = true, t;
    }function ze(t, n) {
      return n(t);
    }function De() {
      return this;
    }function Te(t, n) {
      return (Fi(t) ? u : Po)(t, fe(n, 3));
    }function $e(t, n) {
      return (Fi(t) ? o : Zo)(t, fe(n, 3));
    }function Fe(t, n) {
      return (Fi(t) ? l : Yn)(t, fe(n, 3));
    }function Ne(t, n, r) {
      var e = -1,
          u = lu(t),
          o = u.length,
          i = o - 1;for (n = (r ? de(t, n, r) : n === P) ? 1 : vn(hu(n), 0, o); ++e < n;) {
        t = fr(e, i), r = u[t], u[t] = u[e], u[e] = r;
      }return u.length = n, u;
    }function Pe(t, n, r) {
      return n = r ? P : n, n = t && null == n ? t.length : n, re(t, 128, P, P, P, P, n);
    }function Ze(t, n) {
      var r;if (typeof n != "function") throw new Nu("Expected a function");return t = hu(t), function () {
        return 0 < --t && (r = n.apply(this, arguments)), 1 >= t && (n = P), r;
      };
    }function qe(t, n, r) {
      return n = r ? P : n, t = re(t, 8, P, P, P, P, P, n), t.placeholder = qe.placeholder, t;
    }function Ve(t, n, r) {
      return n = r ? P : n, t = re(t, 16, P, P, P, P, P, n), t.placeholder = Ve.placeholder, t;
    }function Ke(t, n, r) {
      function e(n) {
        var r = c,
            e = a;return c = a = P, _ = n, s = t.apply(e, r);
      }function u(t) {
        var r = t - p;return t -= _, p === P || r >= n || 0 > r || g && t >= l;
      }function o() {
        var t = Ri();if (u(t)) return i(t);var r,
            e = ni;r = t - _, t = n - (t - p), r = g ? jo(t, l - r) : t, h = e(o, r);
      }function i(t) {
        return h = P, d && c ? e(t) : (c = a = P, s);
      }function f() {
        var t = Ri(),
            r = u(t);if (c = arguments, a = this, p = t, r) {
          if (h === P) return _ = t = p, h = ni(o, n), v ? e(t) : s;if (g) return h = ni(o, n), e(p);
        }return h === P && (h = ni(o, n)), s;
      }var c,
          a,
          l,
          s,
          h,
          p,
          _ = 0,
          v = false,
          g = false,
          d = true;if (typeof t != "function") throw new Nu("Expected a function");return n = _u(n) || 0, uu(r) && (v = !!r.leading, l = (g = "maxWait" in r) ? xo(_u(r.maxWait) || 0, n) : l, d = "trailing" in r ? !!r.trailing : d), f.cancel = function () {
        h !== P && Go(h), _ = 0, c = p = a = h = P;
      }, f.flush = function () {
        return h === P ? s : i(Ri());
      }, f;
    }function Ge(t, n) {
      function r() {
        var e = arguments,
            u = n ? n.apply(this, e) : e[0],
            o = r.cache;return o.has(u) ? o.get(u) : (e = t.apply(this, e), r.cache = o.set(u, e), e);
      }if (typeof t != "function" || n && typeof n != "function") throw new Nu("Expected a function");return r.cache = new (Ge.Cache || qt)(), r;
    }function Je(t) {
      if (typeof t != "function") throw new Nu("Expected a function");return function () {
        var n = arguments;switch (n.length) {case 0:
            return !t.call(this);case 1:
            return !t.call(this, n[0]);case 2:
            return !t.call(this, n[0], n[1]);case 3:
            return !t.call(this, n[0], n[1], n[2]);}return !t.apply(this, n);
      };
    }function Ye(t, n) {
      return t === n || t !== t && n !== n;
    }function He(t) {
      return Xe(t) && Gu.call(t, "callee") && (!io.call(t, "callee") || "[object Arguments]" == Hu.call(t));
    }function Qe(t) {
      return null != t && eu(t.length) && !nu(t);
    }function Xe(t) {
      return ou(t) && Qe(t);
    }function tu(t) {
      return !!ou(t) && ("[object Error]" == Hu.call(t) || typeof t.message == "string" && typeof t.name == "string");
    }function nu(t) {
      return t = uu(t) ? Hu.call(t) : "", "[object Function]" == t || "[object GeneratorFunction]" == t;
    }function ru(t) {
      return typeof t == "number" && t == hu(t);
    }function eu(t) {
      return typeof t == "number" && -1 < t && 0 == t % 1 && 9007199254740991 >= t;
    }function uu(t) {
      var n = typeof t === "undefined" ? "undefined" : _typeof(t);return !!t && ("object" == n || "function" == n);
    }function ou(t) {
      return !!t && (typeof t === "undefined" ? "undefined" : _typeof(t)) == "object";
    }function iu(t) {
      return typeof t == "number" || ou(t) && "[object Number]" == Hu.call(t);
    }function fu(t) {
      return !(!ou(t) || "[object Object]" != Hu.call(t) || C(t)) && (t = eo(t), null === t || (t = Gu.call(t, "constructor") && t.constructor, typeof t == "function" && t instanceof t && Ku.call(t) == Yu));
    }function cu(t) {
      return typeof t == "string" || !Fi(t) && ou(t) && "[object String]" == Hu.call(t);
    }function au(t) {
      return (typeof t === "undefined" ? "undefined" : _typeof(t)) == "symbol" || ou(t) && "[object Symbol]" == Hu.call(t);
    }function lu(t) {
      if (!t) return [];if (Qe(t)) return cu(t) ? F(t) : Wr(t);
      if (uo && t[uo]) {
        t = t[uo]();for (var n, r = []; !(n = t.next()).done;) {
          r.push(n.value);
        }return r;
      }return n = St(t), ("[object Map]" == n ? U : "[object Set]" == n ? D : wu)(t);
    }function su(t) {
      return t ? (t = _u(t), t === Z || t === -Z ? 1.7976931348623157e308 * (0 > t ? -1 : 1) : t === t ? t : 0) : 0 === t ? t : 0;
    }function hu(t) {
      t = su(t);var n = t % 1;return t === t ? n ? t - n : t : 0;
    }function pu(t) {
      return t ? vn(hu(t), 0, 4294967295) : 0;
    }function _u(t) {
      if (typeof t == "number") return t;if (au(t)) return q;if (uu(t) && (t = typeof t.valueOf == "function" ? t.valueOf() : t, t = uu(t) ? t + "" : t), typeof t != "string") return 0 === t ? t : +t;
      t = t.replace(at, "");var n = jt.test(t);return n || mt.test(t) ? Pt(t.slice(2), n ? 2 : 8) : xt.test(t) ? q : +t;
    }function vu(t) {
      return Br(t, xu(t));
    }function gu(t) {
      return null == t ? "" : dr(t);
    }function du(t, n, r) {
      return t = null == t ? P : In(t, n), t === P ? r : t;
    }function yu(t, n) {
      return null != t && se(t, n, Ln);
    }function bu(t) {
      return Qe(t) ? Yt(t) : Kn(t);
    }function xu(t) {
      return Qe(t) ? Yt(t, true) : Gn(t);
    }function ju(t, n) {
      return null == t ? {} : er(t, Rn(t, xu, Qo), fe(n));
    }function wu(t) {
      return t ? I(t, bu(t)) : [];
    }function mu(t) {
      return jf(gu(t).toLowerCase());
    }function Au(t) {
      return (t = gu(t)) && t.replace(kt, un).replace(Bt, "");
    }function ku(t, n, r) {
      return t = gu(t), n = r ? P : n, n === P ? Mt.test(t) ? t.match(Ct) || [] : t.match(vt) || [] : t.match(n) || [];
    }function Eu(t) {
      return function () {
        return t;
      };
    }function Ou(t) {
      return t;
    }function Su(t) {
      return Vn(typeof t == "function" ? t : gn(t, true));
    }function Iu(t, n, r) {
      var e = bu(n),
          o = Sn(n, e);null != r || uu(n) && (o.length || !e.length) || (r = n, n = t, t = this, o = Sn(n, bu(n)));var i = !(uu(r) && "chain" in r && !r.chain),
          f = nu(t);return u(o, function (r) {
        var e = n[r];t[r] = e, f && (t.prototype[r] = function () {
          var n = this.__chain__;if (i || n) {
            var r = t(this.__wrapped__);return (r.__actions__ = Wr(this.__actions__)).push({ func: e, args: arguments, thisArg: t }), r.__chain__ = n, r;
          }return e.apply(t, s([this.value()], arguments));
        });
      }), t;
    }function Ru() {}function Wu(t) {
      return ye(t) ? j(Ae(t)) : ur(t);
    }function Bu() {
      return [];
    }function Lu() {
      return false;
    }w = w ? cn.defaults(Vt.Object(), w, cn.pick(Vt, zt)) : Vt;var Cu = w.Array,
        Uu = w.Date,
        Mu = w.Error,
        zu = w.Function,
        Du = w.Math,
        Tu = w.Object,
        $u = w.RegExp,
        Fu = w.String,
        Nu = w.TypeError,
        Pu = Cu.prototype,
        Zu = Tu.prototype,
        qu = w["__core-js_shared__"],
        Vu = function () {
      var t = /[^.]+$/.exec(qu && qu.keys && qu.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
    }(),
        Ku = zu.prototype.toString,
        Gu = Zu.hasOwnProperty,
        Ju = 0,
        Yu = Ku.call(Tu),
        Hu = Zu.toString,
        Qu = Vt._,
        Xu = $u("^" + Ku.call(Gu).replace(ft, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        to = Jt ? w.Buffer : P,
        no = w.Symbol,
        ro = w.Uint8Array,
        eo = M(Tu.getPrototypeOf, Tu),
        uo = no ? no.iterator : P,
        oo = Tu.create,
        io = Zu.propertyIsEnumerable,
        fo = Pu.splice,
        co = no ? no.isConcatSpreadable : P,
        ao = w.clearTimeout !== Vt.clearTimeout && w.clearTimeout,
        lo = Uu && Uu.now !== Vt.Date.now && Uu.now,
        so = w.setTimeout !== Vt.setTimeout && w.setTimeout,
        ho = Du.ceil,
        po = Du.floor,
        _o = Tu.getOwnPropertySymbols,
        vo = to ? to.isBuffer : P,
        go = w.isFinite,
        yo = Pu.join,
        bo = M(Tu.keys, Tu),
        xo = Du.max,
        jo = Du.min,
        wo = w.parseInt,
        mo = Du.random,
        Ao = Pu.reverse,
        ko = le(w, "DataView"),
        Eo = le(w, "Map"),
        Oo = le(w, "Promise"),
        So = le(w, "Set"),
        Io = le(w, "WeakMap"),
        Ro = le(Tu, "create"),
        Wo = function () {
      var t = le(Tu, "defineProperty"),
          n = le.name;return n && 2 < n.length ? t : P;
    }(),
        Bo = Io && new Io(),
        Lo = !io.call({ valueOf: 1 }, "valueOf"),
        Co = {},
        Uo = ke(ko),
        Mo = ke(Eo),
        zo = ke(Oo),
        Do = ke(So),
        To = ke(Io),
        $o = no ? no.prototype : P,
        Fo = $o ? $o.valueOf : P,
        No = $o ? $o.toString : P;It.templateSettings = { escape: tt, evaluate: nt, interpolate: rt, variable: "", imports: { _: It } }, It.prototype = Rt.prototype, It.prototype.constructor = It, Lt.prototype = bn(Rt.prototype), Lt.prototype.constructor = Lt, $t.prototype = bn(Rt.prototype), $t.prototype.constructor = $t, Ft.prototype.clear = function () {
      this.__data__ = Ro ? Ro(null) : {};
    }, Ft.prototype.delete = function (t) {
      return this.has(t) && delete this.__data__[t];
    }, Ft.prototype.get = function (t) {
      var n = this.__data__;return Ro ? (t = n[t], "__lodash_hash_undefined__" === t ? P : t) : Gu.call(n, t) ? n[t] : P;
    }, Ft.prototype.has = function (t) {
      var n = this.__data__;return Ro ? n[t] !== P : Gu.call(n, t);
    }, Ft.prototype.set = function (t, n) {
      return this.__data__[t] = Ro && n === P ? "__lodash_hash_undefined__" : n, this;
    }, Zt.prototype.clear = function () {
      this.__data__ = [];
    }, Zt.prototype.delete = function (t) {
      var n = this.__data__;
      return t = sn(n, t), !(0 > t) && (t == n.length - 1 ? n.pop() : fo.call(n, t, 1), true);
    }, Zt.prototype.get = function (t) {
      var n = this.__data__;return t = sn(n, t), 0 > t ? P : n[t][1];
    }, Zt.prototype.has = function (t) {
      return -1 < sn(this.__data__, t);
    }, Zt.prototype.set = function (t, n) {
      var r = this.__data__,
          e = sn(r, t);return 0 > e ? r.push([t, n]) : r[e][1] = n, this;
    }, qt.prototype.clear = function () {
      this.__data__ = { hash: new Ft(), map: new (Eo || Zt)(), string: new Ft() };
    }, qt.prototype.delete = function (t) {
      return ce(this, t).delete(t);
    }, qt.prototype.get = function (t) {
      return ce(this, t).get(t);
    }, qt.prototype.has = function (t) {
      return ce(this, t).has(t);
    }, qt.prototype.set = function (t, n) {
      return ce(this, t).set(t, n), this;
    }, Kt.prototype.add = Kt.prototype.push = function (t) {
      return this.__data__.set(t, "__lodash_hash_undefined__"), this;
    }, Kt.prototype.has = function (t) {
      return this.__data__.has(t);
    }, Gt.prototype.clear = function () {
      this.__data__ = new Zt();
    }, Gt.prototype.delete = function (t) {
      return this.__data__.delete(t);
    }, Gt.prototype.get = function (t) {
      return this.__data__.get(t);
    }, Gt.prototype.has = function (t) {
      return this.__data__.has(t);
    }, Gt.prototype.set = function (t, n) {
      var r = this.__data__;if (r instanceof Zt) {
        if (r = r.__data__, !Eo || 199 > r.length) return r.push([t, n]), this;r = this.__data__ = new qt(r);
      }return r.set(t, n), this;
    };var Po = Mr(En),
        Zo = Mr(On, true),
        qo = zr(),
        Vo = zr(true),
        Ko = Bo ? function (t, n) {
      return Bo.set(t, n), t;
    } : Ou,
        Go = ao || function (t) {
      return Vt.clearTimeout(t);
    },
        Jo = So && 1 / D(new So([, -0]))[1] == Z ? function (t) {
      return new So(t);
    } : Ru,
        Yo = Bo ? function (t) {
      return Bo.get(t);
    } : Ru,
        Ho = _o ? M(_o, Tu) : Bu,
        Qo = _o ? function (t) {
      for (var n = []; t;) {
        s(n, Ho(t)), t = eo(t);
      }return n;
    } : Bu;(ko && "[object DataView]" != St(new ko(new ArrayBuffer(1))) || Eo && "[object Map]" != St(new Eo()) || Oo && "[object Promise]" != St(Oo.resolve()) || So && "[object Set]" != St(new So()) || Io && "[object WeakMap]" != St(new Io())) && (St = function St(t) {
      var n = Hu.call(t);if (t = (t = "[object Object]" == n ? t.constructor : P) ? ke(t) : P) switch (t) {case Uo:
          return "[object DataView]";case Mo:
          return "[object Map]";case zo:
          return "[object Promise]";case Do:
          return "[object Set]";case To:
          return "[object WeakMap]";}return n;
    });var Xo = qu ? nu : Lu,
        ti = function () {
      var t = 0,
          n = 0;return function (r, e) {
        var u = Ri(),
            o = 16 - (u - n);if (n = u, 0 < o) {
          if (150 <= ++t) return r;
        } else t = 0;return Ko(r, e);
      };
    }(),
        ni = so || function (t, n) {
      return Vt.setTimeout(t, n);
    },
        ri = Wo ? function (t, n, r) {
      n += "";var e;e = (e = n.match(pt)) ? e[1].split(_t) : [], r = Ee(e, r), e = r.length;var u = e - 1;return r[u] = (1 < e ? "& " : "") + r[u], r = r.join(2 < e ? ", " : " "), n = n.replace(ht, "{\n/* [wrapped with " + r + "] */\n"), Wo(t, "toString", { configurable: true, enumerable: false, value: Eu(n) });
    } : Ou,
        ei = Ge(function (t) {
      t = gu(t);var n = [];return ot.test(t) && n.push(""), t.replace(it, function (t, r, e, u) {
        n.push(e ? u.replace(gt, "$1") : r || t);
      }), n;
    }),
        ui = ar(function (t, n) {
      return Xe(t) ? jn(t, kn(n, 1, Xe, true)) : [];
    }),
        oi = ar(function (t, n) {
      var r = We(n);return Xe(r) && (r = P), Xe(t) ? jn(t, kn(n, 1, Xe, true), fe(r, 2)) : [];
    }),
        ii = ar(function (t, n) {
      var r = We(n);return Xe(r) && (r = P), Xe(t) ? jn(t, kn(n, 1, Xe, true), P, r) : [];
    }),
        fi = ar(function (t) {
      var n = l(t, mr);return n.length && n[0] === t[0] ? Cn(n) : [];
    }),
        ci = ar(function (t) {
      var n = We(t),
          r = l(t, mr);return n === We(r) ? n = P : r.pop(), r.length && r[0] === t[0] ? Cn(r, fe(n, 2)) : [];
    }),
        ai = ar(function (t) {
      var n = We(t),
          r = l(t, mr);return n === We(r) ? n = P : r.pop(), r.length && r[0] === t[0] ? Cn(r, P, n) : [];
    }),
        li = ar(Be),
        si = ar(function (t, n) {
      n = kn(n, 1);var r = t ? t.length : 0,
          e = _n(t, n);return ir(t, l(n, function (t) {
        return ge(t, r) ? +t : t;
      }).sort(Sr)), e;
    }),
        hi = ar(function (t) {
      return yr(kn(t, 1, Xe, true));
    }),
        pi = ar(function (t) {
      var n = We(t);return Xe(n) && (n = P), yr(kn(t, 1, Xe, true), fe(n, 2));
    }),
        _i = ar(function (t) {
      var n = We(t);return Xe(n) && (n = P), yr(kn(t, 1, Xe, true), P, n);
    }),
        vi = ar(function (t, n) {
      return Xe(t) ? jn(t, n) : [];
    }),
        gi = ar(function (t) {
      return jr(f(t, Xe));
    }),
        di = ar(function (t) {
      var n = We(t);return Xe(n) && (n = P), jr(f(t, Xe), fe(n, 2));
    }),
        yi = ar(function (t) {
      var n = We(t);return Xe(n) && (n = P), jr(f(t, Xe), P, n);
    }),
        bi = ar(Ce),
        xi = ar(function (t) {
      var n = t.length,
          n = 1 < n ? t[n - 1] : P,
          n = typeof n == "function" ? (t.pop(), n) : P;return Ue(t, n);
    }),
        ji = ar(function (t) {
      function n(n) {
        return _n(n, t);
      }t = kn(t, 1);var r = t.length,
          e = r ? t[0] : 0,
          u = this.__wrapped__;return !(1 < r || this.__actions__.length) && u instanceof $t && ge(e) ? (u = u.slice(e, +e + (r ? 1 : 0)), u.__actions__.push({ func: ze, args: [n], thisArg: P }), new Lt(u, this.__chain__).thru(function (t) {
        return r && !t.length && t.push(P), t;
      })) : this.thru(n);
    }),
        wi = Cr(function (t, n, r) {
      Gu.call(t, r) ? ++t[r] : t[r] = 1;
    }),
        mi = Pr(Se),
        Ai = Pr(Ie),
        ki = Cr(function (t, n, r) {
      Gu.call(t, r) ? t[r].push(n) : t[r] = [n];
    }),
        Ei = ar(function (t, n, e) {
      var u = -1,
          o = typeof n == "function",
          i = ye(n),
          f = Qe(t) ? Cu(t.length) : [];return Po(t, function (t) {
        var c = o ? n : i && null != t ? t[n] : P;f[++u] = c ? r(c, t, e) : Mn(t, n, e);
      }), f;
    }),
        Oi = Cr(function (t, n, r) {
      t[r] = n;
    }),
        Si = Cr(function (t, n, r) {
      t[r ? 0 : 1].push(n);
    }, function () {
      return [[], []];
    }),
        Ii = ar(function (t, n) {
      if (null == t) return [];var r = n.length;return 1 < r && de(t, n[0], n[1]) ? n = [] : 2 < r && de(n[0], n[1], n[2]) && (n = [n[0]]), nr(t, kn(n, 1), []);
    }),
        Ri = lo || function () {
      return Vt.Date.now();
    },
        Wi = ar(function (t, n, r) {
      var e = 1;if (r.length) var u = z(r, ie(Wi)),
          e = 32 | e;return re(t, e, n, r, u);
    }),
        Bi = ar(function (t, n, r) {
      var e = 3;if (r.length) var u = z(r, ie(Bi)),
          e = 32 | e;return re(n, e, t, r, u);
    }),
        Li = ar(function (t, n) {
      return xn(t, 1, n);
    }),
        Ci = ar(function (t, n, r) {
      return xn(t, _u(n) || 0, r);
    });Ge.Cache = qt;var Ui = ar(function (t, n) {
      n = 1 == n.length && Fi(n[0]) ? l(n[0], S(fe())) : l(kn(n, 1), S(fe()));var e = n.length;return ar(function (u) {
        for (var o = -1, i = jo(u.length, e); ++o < i;) {
          u[o] = n[o].call(this, u[o]);
        }return r(t, this, u);
      });
    }),
        Mi = ar(function (t, n) {
      var r = z(n, ie(Mi));return re(t, 32, P, n, r);
    }),
        zi = ar(function (t, n) {
      var r = z(n, ie(zi));return re(t, 64, P, n, r);
    }),
        Di = ar(function (t, n) {
      return re(t, 256, P, P, P, kn(n, 1));
    }),
        Ti = Qr(Wn),
        $i = Qr(function (t, n) {
      return t >= n;
    }),
        Fi = Cu.isArray,
        Ni = Ht ? S(Ht) : zn,
        Pi = vo || Lu,
        Zi = Qt ? S(Qt) : Dn,
        qi = Xt ? S(Xt) : $n,
        Vi = tn ? S(tn) : Pn,
        Ki = nn ? S(nn) : Zn,
        Gi = rn ? S(rn) : qn,
        Ji = Qr(Jn),
        Yi = Qr(function (t, n) {
      return t <= n;
    }),
        Hi = Ur(function (t, n) {
      if (Lo || xe(n) || Qe(n)) Br(n, bu(n), t);else for (var r in n) {
        Gu.call(n, r) && ln(t, r, n[r]);
      }
    }),
        Qi = Ur(function (t, n) {
      Br(n, xu(n), t);
    }),
        Xi = Ur(function (t, n, r, e) {
      Br(n, xu(n), t, e);
    }),
        tf = Ur(function (t, n, r, e) {
      Br(n, bu(n), t, e);
    }),
        nf = ar(function (t, n) {
      return _n(t, kn(n, 1));
    }),
        rf = ar(function (t) {
      return t.push(P, en), r(Xi, P, t);
    }),
        ef = ar(function (t) {
      return t.push(P, we), r(af, P, t);
    }),
        uf = Vr(function (t, n, r) {
      t[n] = r;
    }, Eu(Ou)),
        of = Vr(function (t, n, r) {
      Gu.call(t, n) ? t[n].push(r) : t[n] = [r];
    }, fe),
        ff = ar(Mn),
        cf = Ur(function (t, n, r) {
      Xn(t, n, r);
    }),
        af = Ur(function (t, n, r, e) {
      Xn(t, n, r, e);
    }),
        lf = ar(function (t, n) {
      return null == t ? {} : (n = l(kn(n, 1), Ae), rr(t, jn(Rn(t, xu, Qo), n)));
    }),
        sf = ar(function (t, n) {
      return null == t ? {} : rr(t, l(kn(n, 1), Ae));
    }),
        hf = ne(bu),
        pf = ne(xu),
        _f = $r(function (t, n, r) {
      return n = n.toLowerCase(), t + (r ? mu(n) : n);
    }),
        vf = $r(function (t, n, r) {
      return t + (r ? "-" : "") + n.toLowerCase();
    }),
        gf = $r(function (t, n, r) {
      return t + (r ? " " : "") + n.toLowerCase();
    }),
        df = Tr("toLowerCase"),
        yf = $r(function (t, n, r) {
      return t + (r ? "_" : "") + n.toLowerCase();
    }),
        bf = $r(function (t, n, r) {
      return t + (r ? " " : "") + jf(n);
    }),
        xf = $r(function (t, n, r) {
      return t + (r ? " " : "") + n.toUpperCase();
    }),
        jf = Tr("toUpperCase"),
        wf = ar(function (t, n) {
      try {
        return r(t, P, n);
      } catch (t) {
        return tu(t) ? t : new Mu(t);
      }
    }),
        mf = ar(function (t, n) {
      return u(kn(n, 1), function (n) {
        n = Ae(n), t[n] = Wi(t[n], t);
      }), t;
    }),
        Af = Zr(),
        kf = Zr(true),
        Ef = ar(function (t, n) {
      return function (r) {
        return Mn(r, t, n);
      };
    }),
        Of = ar(function (t, n) {
      return function (r) {
        return Mn(t, r, n);
      };
    }),
        Sf = Gr(l),
        If = Gr(i),
        Rf = Gr(_),
        Wf = Hr(),
        Bf = Hr(true),
        Lf = Kr(function (t, n) {
      return t + n;
    }, 0),
        Cf = te("ceil"),
        Uf = Kr(function (t, n) {
      return t / n;
    }, 1),
        Mf = te("floor"),
        zf = Kr(function (t, n) {
      return t * n;
    }, 1),
        Df = te("round"),
        Tf = Kr(function (t, n) {
      return t - n;
    }, 0);return It.after = function (t, n) {
      if (typeof n != "function") throw new Nu("Expected a function");return t = hu(t), function () {
        if (1 > --t) return n.apply(this, arguments);
      };
    }, It.ary = Pe, It.assign = Hi, It.assignIn = Qi, It.assignInWith = Xi, It.assignWith = tf, It.at = nf, It.before = Ze, It.bind = Wi, It.bindAll = mf, It.bindKey = Bi, It.castArray = function () {
      if (!arguments.length) return [];var t = arguments[0];return Fi(t) ? t : [t];
    }, It.chain = Me, It.chunk = function (t, n, r) {
      if (n = (r ? de(t, n, r) : n === P) ? 1 : xo(hu(n), 0), r = t ? t.length : 0, !r || 1 > n) return [];for (var e = 0, u = 0, o = Cu(ho(r / n)); e < r;) {
        o[u++] = sr(t, e, e += n);
      }return o;
    }, It.compact = function (t) {
      for (var n = -1, r = t ? t.length : 0, e = 0, u = []; ++n < r;) {
        var o = t[n];o && (u[e++] = o);
      }return u;
    }, It.concat = function () {
      for (var t = arguments.length, n = Cu(t ? t - 1 : 0), r = arguments[0], e = t; e--;) {
        n[e - 1] = arguments[e];
      }return t ? s(Fi(r) ? Wr(r) : [r], kn(n, 1)) : [];
    }, It.cond = function (t) {
      var n = t ? t.length : 0,
          e = fe();return t = n ? l(t, function (t) {
        if ("function" != typeof t[1]) throw new Nu("Expected a function");return [e(t[0]), t[1]];
      }) : [], ar(function (e) {
        for (var u = -1; ++u < n;) {
          var o = t[u];if (r(o[0], this, e)) return r(o[1], this, e);
        }
      });
    }, It.conforms = function (t) {
      return dn(gn(t, true));
    }, It.constant = Eu, It.countBy = wi, It.create = function (t, n) {
      var r = bn(t);return n ? pn(r, n) : r;
    }, It.curry = qe, It.curryRight = Ve, It.debounce = Ke, It.defaults = rf, It.defaultsDeep = ef, It.defer = Li, It.delay = Ci, It.difference = ui, It.differenceBy = oi, It.differenceWith = ii, It.drop = function (t, n, r) {
      var e = t ? t.length : 0;return e ? (n = r || n === P ? 1 : hu(n), sr(t, 0 > n ? 0 : n, e)) : [];
    }, It.dropRight = function (t, n, r) {
      var e = t ? t.length : 0;return e ? (n = r || n === P ? 1 : hu(n), n = e - n, sr(t, 0, 0 > n ? 0 : n)) : [];
    }, It.dropRightWhile = function (t, n) {
      return t && t.length ? br(t, fe(n, 3), true, true) : [];
    }, It.dropWhile = function (t, n) {
      return t && t.length ? br(t, fe(n, 3), true) : [];
    }, It.fill = function (t, n, r, e) {
      var u = t ? t.length : 0;if (!u) return [];for (r && typeof r != "number" && de(t, n, r) && (r = 0, e = u), u = t.length, r = hu(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === P || e > u ? u : hu(e), 0 > e && (e += u), e = r > e ? 0 : pu(e); r < e;) {
        t[r++] = n;
      }return t;
    }, It.filter = function (t, n) {
      return (Fi(t) ? f : An)(t, fe(n, 3));
    }, It.flatMap = function (t, n) {
      return kn(Fe(t, n), 1);
    }, It.flatMapDeep = function (t, n) {
      return kn(Fe(t, n), Z);
    }, It.flatMapDepth = function (t, n, r) {
      return r = r === P ? 1 : hu(r), kn(Fe(t, n), r);
    }, It.flatten = function (t) {
      return t && t.length ? kn(t, 1) : [];
    }, It.flattenDeep = function (t) {
      return t && t.length ? kn(t, Z) : [];
    }, It.flattenDepth = function (t, n) {
      return t && t.length ? (n = n === P ? 1 : hu(n), kn(t, n)) : [];
    }, It.flip = function (t) {
      return re(t, 512);
    }, It.flow = Af, It.flowRight = kf, It.fromPairs = function (t) {
      for (var n = -1, r = t ? t.length : 0, e = {}; ++n < r;) {
        var u = t[n];e[u[0]] = u[1];
      }return e;
    }, It.functions = function (t) {
      return null == t ? [] : Sn(t, bu(t));
    }, It.functionsIn = function (t) {
      return null == t ? [] : Sn(t, xu(t));
    }, It.groupBy = ki, It.initial = function (t) {
      return t && t.length ? sr(t, 0, -1) : [];
    }, It.intersection = fi, It.intersectionBy = ci, It.intersectionWith = ai, It.invert = uf, It.invertBy = of, It.invokeMap = Ei, It.iteratee = Su, It.keyBy = Oi, It.keys = bu, It.keysIn = xu, It.map = Fe, It.mapKeys = function (t, n) {
      var r = {};return n = fe(n, 3), En(t, function (t, e, u) {
        r[n(t, e, u)] = t;
      }), r;
    }, It.mapValues = function (t, n) {
      var r = {};return n = fe(n, 3), En(t, function (t, e, u) {
        r[e] = n(t, e, u);
      }), r;
    }, It.matches = function (t) {
      return Hn(gn(t, true));
    }, It.matchesProperty = function (t, n) {
      return Qn(t, gn(n, true));
    }, It.memoize = Ge, It.merge = cf, It.mergeWith = af, It.method = Ef, It.methodOf = Of, It.mixin = Iu, It.negate = Je, It.nthArg = function (t) {
      return t = hu(t), ar(function (n) {
        return tr(n, t);
      });
    }, It.omit = lf, It.omitBy = function (t, n) {
      return ju(t, Je(fe(n)));
    }, It.once = function (t) {
      return Ze(2, t);
    }, It.orderBy = function (t, n, r, e) {
      return null == t ? [] : (Fi(n) || (n = null == n ? [] : [n]), r = e ? P : r, Fi(r) || (r = null == r ? [] : [r]), nr(t, n, r));
    }, It.over = Sf, It.overArgs = Ui, It.overEvery = If, It.overSome = Rf, It.partial = Mi, It.partialRight = zi, It.partition = Si, It.pick = sf, It.pickBy = ju, It.property = Wu, It.propertyOf = function (t) {
      return function (n) {
        return null == t ? P : In(t, n);
      };
    }, It.pull = li, It.pullAll = Be, It.pullAllBy = function (t, n, r) {
      return t && t.length && n && n.length ? or(t, n, fe(r, 2)) : t;
    }, It.pullAllWith = function (t, n, r) {
      return t && t.length && n && n.length ? or(t, n, P, r) : t;
    }, It.pullAt = si, It.range = Wf, It.rangeRight = Bf, It.rearg = Di, It.reject = function (t, n) {
      return (Fi(t) ? f : An)(t, Je(fe(n, 3)));
    }, It.remove = function (t, n) {
      var r = [];if (!t || !t.length) return r;var e = -1,
          u = [],
          o = t.length;for (n = fe(n, 3); ++e < o;) {
        var i = t[e];n(i, e, t) && (r.push(i), u.push(e));
      }return ir(t, u), r;
    }, It.rest = function (t, n) {
      if (typeof t != "function") throw new Nu("Expected a function");return n = n === P ? n : hu(n), ar(t, n);
    }, It.reverse = Le, It.sampleSize = Ne, It.set = function (t, n, r) {
      return null == t ? t : lr(t, n, r);
    }, It.setWith = function (t, n, r, e) {
      return e = typeof e == "function" ? e : P, null == t ? t : lr(t, n, r, e);
    }, It.shuffle = function (t) {
      return Ne(t, 4294967295);
    }, It.slice = function (t, n, r) {
      var e = t ? t.length : 0;return e ? (r && typeof r != "number" && de(t, n, r) ? (n = 0, r = e) : (n = null == n ? 0 : hu(n), r = r === P ? e : hu(r)), sr(t, n, r)) : [];
    }, It.sortBy = Ii, It.sortedUniq = function (t) {
      return t && t.length ? vr(t) : [];
    }, It.sortedUniqBy = function (t, n) {
      return t && t.length ? vr(t, fe(n, 2)) : [];
    }, It.split = function (t, n, r) {
      return r && typeof r != "number" && de(t, n, r) && (n = r = P), r = r === P ? 4294967295 : r >>> 0, r ? (t = gu(t)) && (typeof n == "string" || null != n && !Vi(n)) && (n = dr(n), !n && Ut.test(t)) ? kr(F(t), 0, r) : t.split(n, r) : [];
    }, It.spread = function (t, n) {
      if (typeof t != "function") throw new Nu("Expected a function");return n = n === P ? 0 : xo(hu(n), 0), ar(function (e) {
        var u = e[n];return e = kr(e, 0, n), u && s(e, u), r(t, this, e);
      });
    }, It.tail = function (t) {
      var n = t ? t.length : 0;return n ? sr(t, 1, n) : [];
    }, It.take = function (t, n, r) {
      return t && t.length ? (n = r || n === P ? 1 : hu(n), sr(t, 0, 0 > n ? 0 : n)) : [];
    }, It.takeRight = function (t, n, r) {
      var e = t ? t.length : 0;return e ? (n = r || n === P ? 1 : hu(n), n = e - n, sr(t, 0 > n ? 0 : n, e)) : [];
    }, It.takeRightWhile = function (t, n) {
      return t && t.length ? br(t, fe(n, 3), false, true) : [];
    }, It.takeWhile = function (t, n) {
      return t && t.length ? br(t, fe(n, 3)) : [];
    }, It.tap = function (t, n) {
      return n(t), t;
    }, It.throttle = function (t, n, r) {
      var e = true,
          u = true;if (typeof t != "function") throw new Nu("Expected a function");return uu(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), Ke(t, n, { leading: e, maxWait: n, trailing: u });
    }, It.thru = ze, It.toArray = lu, It.toPairs = hf, It.toPairsIn = pf, It.toPath = function (t) {
      return Fi(t) ? l(t, Ae) : au(t) ? [t] : Wr(ei(t));
    }, It.toPlainObject = vu, It.transform = function (t, n, r) {
      var e = Fi(t) || Gi(t);if (n = fe(n, 4), null == r) if (e || uu(t)) {
        var o = t.constructor;r = e ? Fi(t) ? new o() : [] : nu(o) ? bn(eo(t)) : {};
      } else r = {};return (e ? u : En)(t, function (t, e, u) {
        return n(r, t, e, u);
      }), r;
    }, It.unary = function (t) {
      return Pe(t, 1);
    }, It.union = hi, It.unionBy = pi, It.unionWith = _i, It.uniq = function (t) {
      return t && t.length ? yr(t) : [];
    }, It.uniqBy = function (t, n) {
      return t && t.length ? yr(t, fe(n, 2)) : [];
    }, It.uniqWith = function (t, n) {
      return t && t.length ? yr(t, P, n) : [];
    }, It.unset = function (t, n) {
      var r;if (null == t) r = true;else {
        r = t;var e = n,
            e = ye(e, r) ? [e] : Ar(e);r = me(r, e), e = Ae(We(e)), r = !(null != r && Gu.call(r, e)) || delete r[e];
      }return r;
    }, It.unzip = Ce, It.unzipWith = Ue, It.update = function (t, n, r) {
      return null == t ? t : lr(t, n, (typeof r == "function" ? r : Ou)(In(t, n)), void 0);
    }, It.updateWith = function (t, n, r, e) {
      return e = typeof e == "function" ? e : P, null != t && (t = lr(t, n, (typeof r == "function" ? r : Ou)(In(t, n)), e)), t;
    }, It.values = wu, It.valuesIn = function (t) {
      return null == t ? [] : I(t, xu(t));
    }, It.without = vi, It.words = ku, It.wrap = function (t, n) {
      return n = null == n ? Ou : n, Mi(n, t);
    }, It.xor = gi, It.xorBy = di, It.xorWith = yi, It.zip = bi, It.zipObject = function (t, n) {
      return wr(t || [], n || [], ln);
    }, It.zipObjectDeep = function (t, n) {
      return wr(t || [], n || [], lr);
    }, It.zipWith = xi, It.entries = hf, It.entriesIn = pf, It.extend = Qi, It.extendWith = Xi, Iu(It, It), It.add = Lf, It.attempt = wf, It.camelCase = _f, It.capitalize = mu, It.ceil = Cf, It.clamp = function (t, n, r) {
      return r === P && (r = n, n = P), r !== P && (r = _u(r), r = r === r ? r : 0), n !== P && (n = _u(n), n = n === n ? n : 0), vn(_u(t), n, r);
    }, It.clone = function (t) {
      return gn(t, false, true);
    }, It.cloneDeep = function (t) {
      return gn(t, true, true);
    }, It.cloneDeepWith = function (t, n) {
      return gn(t, true, true, n);
    }, It.cloneWith = function (t, n) {
      return gn(t, false, true, n);
    }, It.conformsTo = function (t, n) {
      return null == n || yn(t, n, bu(n));
    }, It.deburr = Au, It.defaultTo = function (t, n) {
      return null == t || t !== t ? n : t;
    }, It.divide = Uf, It.endsWith = function (t, n, r) {
      t = gu(t), n = dr(n);var e = t.length,
          e = r = r === P ? e : vn(hu(r), 0, e);return r -= n.length, 0 <= r && t.slice(r, e) == n;
    }, It.eq = Ye, It.escape = function (t) {
      return (t = gu(t)) && X.test(t) ? t.replace(H, on) : t;
    }, It.escapeRegExp = function (t) {
      return (t = gu(t)) && ct.test(t) ? t.replace(ft, "\\$&") : t;
    }, It.every = function (t, n, r) {
      var e = Fi(t) ? i : wn;return r && de(t, n, r) && (n = P), e(t, fe(n, 3));
    }, It.find = mi, It.findIndex = Se, It.findKey = function (t, n) {
      return v(t, fe(n, 3), En);
    }, It.findLast = Ai, It.findLastIndex = Ie, It.findLastKey = function (t, n) {
      return v(t, fe(n, 3), On);
    }, It.floor = Mf, It.forEach = Te, It.forEachRight = $e, It.forIn = function (t, n) {
      return null == t ? t : qo(t, fe(n, 3), xu);
    }, It.forInRight = function (t, n) {
      return null == t ? t : Vo(t, fe(n, 3), xu);
    }, It.forOwn = function (t, n) {
      return t && En(t, fe(n, 3));
    }, It.forOwnRight = function (t, n) {
      return t && On(t, fe(n, 3));
    }, It.get = du, It.gt = Ti, It.gte = $i, It.has = function (t, n) {
      return null != t && se(t, n, Bn);
    }, It.hasIn = yu, It.head = Re, It.identity = Ou, It.includes = function (t, n, r, e) {
      return t = Qe(t) ? t : wu(t), r = r && !e ? hu(r) : 0, e = t.length, 0 > r && (r = xo(e + r, 0)), cu(t) ? r <= e && -1 < t.indexOf(n, r) : !!e && -1 < d(t, n, r);
    }, It.indexOf = function (t, n, r) {
      var e = t ? t.length : 0;return e ? (r = null == r ? 0 : hu(r), 0 > r && (r = xo(e + r, 0)), d(t, n, r)) : -1;
    }, It.inRange = function (t, n, r) {
      return n = su(n), r === P ? (r = n, n = 0) : r = su(r), t = _u(t), t >= jo(n, r) && t < xo(n, r);
    }, It.invoke = ff, It.isArguments = He, It.isArray = Fi, It.isArrayBuffer = Ni, It.isArrayLike = Qe, It.isArrayLikeObject = Xe, It.isBoolean = function (t) {
      return true === t || false === t || ou(t) && "[object Boolean]" == Hu.call(t);
    }, It.isBuffer = Pi, It.isDate = Zi, It.isElement = function (t) {
      return !!t && 1 === t.nodeType && ou(t) && !fu(t);
    }, It.isEmpty = function (t) {
      if (Qe(t) && (Fi(t) || typeof t == "string" || typeof t.splice == "function" || Pi(t) || He(t))) return !t.length;var n = St(t);if ("[object Map]" == n || "[object Set]" == n) return !t.size;if (Lo || xe(t)) return !bo(t).length;for (var r in t) {
        if (Gu.call(t, r)) return false;
      }return true;
    }, It.isEqual = function (t, n) {
      return Tn(t, n);
    }, It.isEqualWith = function (t, n, r) {
      var e = (r = typeof r == "function" ? r : P) ? r(t, n) : P;return e === P ? Tn(t, n, r) : !!e;
    }, It.isError = tu, It.isFinite = function (t) {
      return typeof t == "number" && go(t);
    }, It.isFunction = nu, It.isInteger = ru, It.isLength = eu, It.isMap = qi, It.isMatch = function (t, n) {
      return t === n || Fn(t, n, ae(n));
    }, It.isMatchWith = function (t, n, r) {
      return r = typeof r == "function" ? r : P, Fn(t, n, ae(n), r);
    }, It.isNaN = function (t) {
      return iu(t) && t != +t;
    }, It.isNative = function (t) {
      if (Xo(t)) throw new Mu("This method is not supported with core-js. Try https://github.com/es-shims.");return Nn(t);
    }, It.isNil = function (t) {
      return null == t;
    }, It.isNull = function (t) {
      return null === t;
    }, It.isNumber = iu, It.isObject = uu, It.isObjectLike = ou, It.isPlainObject = fu, It.isRegExp = Vi, It.isSafeInteger = function (t) {
      return ru(t) && -9007199254740991 <= t && 9007199254740991 >= t;
    }, It.isSet = Ki, It.isString = cu, It.isSymbol = au, It.isTypedArray = Gi, It.isUndefined = function (t) {
      return t === P;
    }, It.isWeakMap = function (t) {
      return ou(t) && "[object WeakMap]" == St(t);
    }, It.isWeakSet = function (t) {
      return ou(t) && "[object WeakSet]" == Hu.call(t);
    }, It.join = function (t, n) {
      return t ? yo.call(t, n) : "";
    }, It.kebabCase = vf, It.last = We, It.lastIndexOf = function (t, n, r) {
      var e = t ? t.length : 0;if (!e) return -1;var u = e;if (r !== P && (u = hu(r), u = (0 > u ? xo(e + u, 0) : jo(u, e - 1)) + 1), n !== n) return g(t, b, u - 1, true);for (; u--;) {
        if (t[u] === n) return u;
      }return -1;
    }, It.lowerCase = gf, It.lowerFirst = df, It.lt = Ji, It.lte = Yi, It.max = function (t) {
      return t && t.length ? mn(t, Ou, Wn) : P;
    }, It.maxBy = function (t, n) {
      return t && t.length ? mn(t, fe(n, 2), Wn) : P;
    }, It.mean = function (t) {
      return x(t, Ou);
    }, It.meanBy = function (t, n) {
      return x(t, fe(n, 2));
    }, It.min = function (t) {
      return t && t.length ? mn(t, Ou, Jn) : P;
    }, It.minBy = function (t, n) {
      return t && t.length ? mn(t, fe(n, 2), Jn) : P;
    }, It.stubArray = Bu, It.stubFalse = Lu, It.stubObject = function () {
      return {};
    }, It.stubString = function () {
      return "";
    }, It.stubTrue = function () {
      return true;
    }, It.multiply = zf, It.nth = function (t, n) {
      return t && t.length ? tr(t, hu(n)) : P;
    }, It.noConflict = function () {
      return Vt._ === this && (Vt._ = Qu), this;
    }, It.noop = Ru, It.now = Ri, It.pad = function (t, n, r) {
      t = gu(t);var e = (n = hu(n)) ? $(t) : 0;return !n || e >= n ? t : (n = (n - e) / 2, Jr(po(n), r) + t + Jr(ho(n), r));
    }, It.padEnd = function (t, n, r) {
      t = gu(t);var e = (n = hu(n)) ? $(t) : 0;return n && e < n ? t + Jr(n - e, r) : t;
    }, It.padStart = function (t, n, r) {
      t = gu(t);var e = (n = hu(n)) ? $(t) : 0;return n && e < n ? Jr(n - e, r) + t : t;
    }, It.parseInt = function (t, n, r) {
      return r || null == n ? n = 0 : n && (n = +n), t = gu(t).replace(at, ""), wo(t, n || (bt.test(t) ? 16 : 10));
    }, It.random = function (t, n, r) {
      if (r && typeof r != "boolean" && de(t, n, r) && (n = r = P), r === P && (typeof n == "boolean" ? (r = n, n = P) : typeof t == "boolean" && (r = t, t = P)), t === P && n === P ? (t = 0, n = 1) : (t = su(t), n === P ? (n = t, t = 0) : n = su(n)), t > n) {
        var e = t;t = n, n = e;
      }return r || t % 1 || n % 1 ? (r = mo(), jo(t + r * (n - t + Nt("1e-" + ((r + "").length - 1))), n)) : fr(t, n);
    }, It.reduce = function (t, n, r) {
      var e = Fi(t) ? h : m,
          u = 3 > arguments.length;return e(t, fe(n, 4), r, u, Po);
    }, It.reduceRight = function (t, n, r) {
      var e = Fi(t) ? p : m,
          u = 3 > arguments.length;return e(t, fe(n, 4), r, u, Zo);
    }, It.repeat = function (t, n, r) {
      return n = (r ? de(t, n, r) : n === P) ? 1 : hu(n), cr(gu(t), n);
    }, It.replace = function () {
      var t = arguments,
          n = gu(t[0]);return 3 > t.length ? n : n.replace(t[1], t[2]);
    }, It.result = function (t, n, r) {
      n = ye(n, t) ? [n] : Ar(n);var e = -1,
          u = n.length;for (u || (t = P, u = 1); ++e < u;) {
        var o = null == t ? P : t[Ae(n[e])];o === P && (e = u, o = r), t = nu(o) ? o.call(t) : o;
      }return t;
    }, It.round = Df, It.runInContext = N, It.sample = function (t) {
      t = Qe(t) ? t : wu(t);var n = t.length;
      return 0 < n ? t[fr(0, n - 1)] : P;
    }, It.size = function (t) {
      if (null == t) return 0;if (Qe(t)) return cu(t) ? $(t) : t.length;var n = St(t);return "[object Map]" == n || "[object Set]" == n ? t.size : Kn(t).length;
    }, It.snakeCase = yf, It.some = function (t, n, r) {
      var e = Fi(t) ? _ : hr;return r && de(t, n, r) && (n = P), e(t, fe(n, 3));
    }, It.sortedIndex = function (t, n) {
      return pr(t, n);
    }, It.sortedIndexBy = function (t, n, r) {
      return _r(t, n, fe(r, 2));
    }, It.sortedIndexOf = function (t, n) {
      var r = t ? t.length : 0;if (r) {
        var e = pr(t, n);if (e < r && Ye(t[e], n)) return e;
      }return -1;
    }, It.sortedLastIndex = function (t, n) {
      return pr(t, n, true);
    }, It.sortedLastIndexBy = function (t, n, r) {
      return _r(t, n, fe(r, 2), true);
    }, It.sortedLastIndexOf = function (t, n) {
      if (t && t.length) {
        var r = pr(t, n, true) - 1;if (Ye(t[r], n)) return r;
      }return -1;
    }, It.startCase = bf, It.startsWith = function (t, n, r) {
      return t = gu(t), r = vn(hu(r), 0, t.length), n = dr(n), t.slice(r, r + n.length) == n;
    }, It.subtract = Tf, It.sum = function (t) {
      return t && t.length ? k(t, Ou) : 0;
    }, It.sumBy = function (t, n) {
      return t && t.length ? k(t, fe(n, 2)) : 0;
    }, It.template = function (t, n, r) {
      var e = It.templateSettings;r && de(t, n, r) && (n = P), t = gu(t), n = Xi({}, n, e, en), r = Xi({}, n.imports, e.imports, en);var u,
          o,
          i = bu(r),
          f = I(r, i),
          c = 0;r = n.interpolate || Et;var a = "__p+='";r = $u((n.escape || Et).source + "|" + r.source + "|" + (r === rt ? dt : Et).source + "|" + (n.evaluate || Et).source + "|$", "g");var l = "sourceURL" in n ? "//# sourceURL=" + n.sourceURL + "\n" : "";if (t.replace(r, function (n, r, e, i, f, l) {
        return e || (e = i), a += t.slice(c, l).replace(Ot, L), r && (u = true, a += "'+__e(" + r + ")+'"), f && (o = true, a += "';" + f + ";\n__p+='"), e && (a += "'+((__t=(" + e + "))==null?'':__t)+'"), c = l + n.length, n;
      }), a += "';", (n = n.variable) || (a = "with(obj){" + a + "}"), a = (o ? a.replace(K, "") : a).replace(G, "$1").replace(J, "$1;"), a = "function(" + (n || "obj") + "){" + (n ? "" : "obj||(obj={});") + "var __t,__p=''" + (u ? ",__e=_.escape" : "") + (o ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + a + "return __p}", n = wf(function () {
        return zu(i, l + "return " + a).apply(P, f);
      }), n.source = a, tu(n)) throw n;return n;
    }, It.times = function (t, n) {
      if (t = hu(t), 1 > t || 9007199254740991 < t) return [];var r = 4294967295,
          e = jo(t, 4294967295);for (n = fe(n), t -= 4294967295, e = E(e, n); ++r < t;) {
        n(r);
      }return e;
    }, It.toFinite = su, It.toInteger = hu, It.toLength = pu, It.toLower = function (t) {
      return gu(t).toLowerCase();
    }, It.toNumber = _u, It.toSafeInteger = function (t) {
      return vn(hu(t), -9007199254740991, 9007199254740991);
    }, It.toString = gu, It.toUpper = function (t) {
      return gu(t).toUpperCase();
    }, It.trim = function (t, n, r) {
      return (t = gu(t)) && (r || n === P) ? t.replace(at, "") : t && (n = dr(n)) ? (t = F(t), r = F(n), n = W(t, r), r = B(t, r) + 1, kr(t, n, r).join("")) : t;
    }, It.trimEnd = function (t, n, r) {
      return (t = gu(t)) && (r || n === P) ? t.replace(st, "") : t && (n = dr(n)) ? (t = F(t), n = B(t, F(n)) + 1, kr(t, 0, n).join("")) : t;
    }, It.trimStart = function (t, n, r) {
      return (t = gu(t)) && (r || n === P) ? t.replace(lt, "") : t && (n = dr(n)) ? (t = F(t), n = W(t, F(n)), kr(t, n).join("")) : t;
    }, It.truncate = function (t, n) {
      var r = 30,
          e = "...";if (uu(n)) var u = "separator" in n ? n.separator : u,
          r = "length" in n ? hu(n.length) : r,
          e = "omission" in n ? dr(n.omission) : e;t = gu(t);var o = t.length;if (Ut.test(t)) var i = F(t),
          o = i.length;if (r >= o) return t;if (o = r - $(e), 1 > o) return e;if (r = i ? kr(i, 0, o).join("") : t.slice(0, o), u === P) return r + e;if (i && (o += r.length - o), Vi(u)) {
        if (t.slice(o).search(u)) {
          var f = r;for (u.global || (u = $u(u.source, gu(yt.exec(u)) + "g")), u.lastIndex = 0; i = u.exec(f);) {
            var c = i.index;
          }r = r.slice(0, c === P ? o : c);
        }
      } else t.indexOf(dr(u), o) != o && (u = r.lastIndexOf(u), -1 < u && (r = r.slice(0, u)));return r + e;
    }, It.unescape = function (t) {
      return (t = gu(t)) && Q.test(t) ? t.replace(Y, fn) : t;
    }, It.uniqueId = function (t) {
      var n = ++Ju;return gu(t) + n;
    }, It.upperCase = xf, It.upperFirst = jf, It.each = Te, It.eachRight = $e, It.first = Re, Iu(It, function () {
      var t = {};return En(It, function (n, r) {
        Gu.call(It.prototype, r) || (t[r] = n);
      }), t;
    }(), { chain: false }), It.VERSION = "4.15.0", u("bind bindKey curry curryRight partial partialRight".split(" "), function (t) {
      It[t].placeholder = It;
    }), u(["drop", "take"], function (t, n) {
      $t.prototype[t] = function (r) {
        var e = this.__filtered__;if (e && !n) return new $t(this);r = r === P ? 1 : xo(hu(r), 0);var u = this.clone();return e ? u.__takeCount__ = jo(r, u.__takeCount__) : u.__views__.push({ size: jo(r, 4294967295), type: t + (0 > u.__dir__ ? "Right" : "") }), u;
      }, $t.prototype[t + "Right"] = function (n) {
        return this.reverse()[t](n).reverse();
      };
    }), u(["filter", "map", "takeWhile"], function (t, n) {
      var r = n + 1,
          e = 1 == r || 3 == r;$t.prototype[t] = function (t) {
        var n = this.clone();return n.__iteratees__.push({
          iteratee: fe(t, 3), type: r }), n.__filtered__ = n.__filtered__ || e, n;
      };
    }), u(["head", "last"], function (t, n) {
      var r = "take" + (n ? "Right" : "");$t.prototype[t] = function () {
        return this[r](1).value()[0];
      };
    }), u(["initial", "tail"], function (t, n) {
      var r = "drop" + (n ? "" : "Right");$t.prototype[t] = function () {
        return this.__filtered__ ? new $t(this) : this[r](1);
      };
    }), $t.prototype.compact = function () {
      return this.filter(Ou);
    }, $t.prototype.find = function (t) {
      return this.filter(t).head();
    }, $t.prototype.findLast = function (t) {
      return this.reverse().find(t);
    }, $t.prototype.invokeMap = ar(function (t, n) {
      return typeof t == "function" ? new $t(this) : this.map(function (r) {
        return Mn(r, t, n);
      });
    }), $t.prototype.reject = function (t) {
      return this.filter(Je(fe(t)));
    }, $t.prototype.slice = function (t, n) {
      t = hu(t);var r = this;return r.__filtered__ && (0 < t || 0 > n) ? new $t(r) : (0 > t ? r = r.takeRight(-t) : t && (r = r.drop(t)), n !== P && (n = hu(n), r = 0 > n ? r.dropRight(-n) : r.take(n - t)), r);
    }, $t.prototype.takeRightWhile = function (t) {
      return this.reverse().takeWhile(t).reverse();
    }, $t.prototype.toArray = function () {
      return this.take(4294967295);
    }, En($t.prototype, function (t, n) {
      var r = /^(?:filter|find|map|reject)|While$/.test(n),
          e = /^(?:head|last)$/.test(n),
          u = It[e ? "take" + ("last" == n ? "Right" : "") : n],
          o = e || /^find/.test(n);u && (It.prototype[n] = function () {
        function n(t) {
          return t = u.apply(It, s([t], f)), e && h ? t[0] : t;
        }var i = this.__wrapped__,
            f = e ? [1] : arguments,
            c = i instanceof $t,
            a = f[0],
            l = c || Fi(i);l && r && typeof a == "function" && 1 != a.length && (c = l = false);var h = this.__chain__,
            p = !!this.__actions__.length,
            a = o && !h,
            c = c && !p;return !o && l ? (i = c ? i : new $t(this), i = t.apply(i, f), i.__actions__.push({
          func: ze, args: [n], thisArg: P }), new Lt(i, h)) : a && c ? t.apply(this, f) : (i = this.thru(n), a ? e ? i.value()[0] : i.value() : i);
      });
    }), u("pop push shift sort splice unshift".split(" "), function (t) {
      var n = Pu[t],
          r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
          e = /^(?:pop|shift)$/.test(t);It.prototype[t] = function () {
        var t = arguments;if (e && !this.__chain__) {
          var u = this.value();return n.apply(Fi(u) ? u : [], t);
        }return this[r](function (r) {
          return n.apply(Fi(r) ? r : [], t);
        });
      };
    }), En($t.prototype, function (t, n) {
      var r = It[n];if (r) {
        var e = r.name + "";
        (Co[e] || (Co[e] = [])).push({ name: n, func: r });
      }
    }), Co[qr(P, 2).name] = [{ name: "wrapper", func: P }], $t.prototype.clone = function () {
      var t = new $t(this.__wrapped__);return t.__actions__ = Wr(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Wr(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Wr(this.__views__), t;
    }, $t.prototype.reverse = function () {
      if (this.__filtered__) {
        var t = new $t(this);t.__dir__ = -1, t.__filtered__ = true;
      } else t = this.clone(), t.__dir__ *= -1;return t;
    }, $t.prototype.value = function () {
      var t,
          n = this.__wrapped__.value(),
          r = this.__dir__,
          e = Fi(n),
          u = 0 > r,
          o = e ? n.length : 0;t = o;for (var i = this.__views__, f = 0, c = -1, a = i.length; ++c < a;) {
        var l = i[c],
            s = l.size;switch (l.type) {case "drop":
            f += s;break;case "dropRight":
            t -= s;break;case "take":
            t = jo(t, f + s);break;case "takeRight":
            f = xo(f, t - s);}
      }if (t = { start: f, end: t }, i = t.start, f = t.end, t = f - i, u = u ? f : i - 1, i = this.__iteratees__, f = i.length, c = 0, a = jo(t, this.__takeCount__), !e || 200 > o || o == t && a == t) return xr(n, this.__actions__);e = [];t: for (; t-- && c < a;) {
        for (u += r, o = -1, l = n[u]; ++o < f;) {
          var h = i[o],
              s = h.type,
              h = (0, h.iteratee)(l);if (2 == s) l = h;else if (!h) {
            if (1 == s) continue t;break t;
          }
        }e[c++] = l;
      }return e;
    }, It.prototype.at = ji, It.prototype.chain = function () {
      return Me(this);
    }, It.prototype.commit = function () {
      return new Lt(this.value(), this.__chain__);
    }, It.prototype.next = function () {
      this.__values__ === P && (this.__values__ = lu(this.value()));var t = this.__index__ >= this.__values__.length,
          n = t ? P : this.__values__[this.__index__++];return { done: t, value: n };
    }, It.prototype.plant = function (t) {
      for (var n, r = this; r instanceof Rt;) {
        var e = Oe(r);e.__index__ = 0, e.__values__ = P, n ? u.__wrapped__ = e : n = e;var u = e,
            r = r.__wrapped__;
      }return u.__wrapped__ = t, n;
    }, It.prototype.reverse = function () {
      var t = this.__wrapped__;return t instanceof $t ? (this.__actions__.length && (t = new $t(this)), t = t.reverse(), t.__actions__.push({ func: ze, args: [Le], thisArg: P }), new Lt(t, this.__chain__)) : this.thru(Le);
    }, It.prototype.toJSON = It.prototype.valueOf = It.prototype.value = function () {
      return xr(this.__wrapped__, this.__actions__);
    }, It.prototype.first = It.prototype.head, uo && (It.prototype[uo] = De), It;
  }var P,
      Z = 1 / 0,
      q = NaN,
      V = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]],
      K = /\b__p\+='';/g,
      G = /\b(__p\+=)''\+/g,
      J = /(__e\(.*?\)|\b__t\))\+'';/g,
      Y = /&(?:amp|lt|gt|quot|#39|#96);/g,
      H = /[&<>"'`]/g,
      Q = RegExp(Y.source),
      X = RegExp(H.source),
      tt = /<%-([\s\S]+?)%>/g,
      nt = /<%([\s\S]+?)%>/g,
      rt = /<%=([\s\S]+?)%>/g,
      et = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      ut = /^\w*$/,
      ot = /^\./,
      it = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      ft = /[\\^$.*+?()[\]{}|]/g,
      ct = RegExp(ft.source),
      at = /^\s+|\s+$/g,
      lt = /^\s+/,
      st = /\s+$/,
      ht = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      pt = /\{\n\/\* \[wrapped with (.+)\] \*/,
      _t = /,? & /,
      vt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      gt = /\\(\\)?/g,
      dt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      yt = /\w*$/,
      bt = /^0x/i,
      xt = /^[-+]0x[0-9a-f]+$/i,
      jt = /^0b[01]+$/i,
      wt = /^\[object .+?Constructor\]$/,
      mt = /^0o[0-7]+$/i,
      At = /^(?:0|[1-9]\d*)$/,
      kt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Et = /($^)/,
      Ot = /['\n\r\u2028\u2029\\]/g,
      St = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*",
      It = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + St,
      Rt = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
      Wt = RegExp("['’]", "g"),
      Bt = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]", "g"),
      Lt = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Rt + St, "g"),
      Ct = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d+", It].join("|"), "g"),
      Ut = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
      Mt = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      zt = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),
      Dt = {};
  Dt["[object Float32Array]"] = Dt["[object Float64Array]"] = Dt["[object Int8Array]"] = Dt["[object Int16Array]"] = Dt["[object Int32Array]"] = Dt["[object Uint8Array]"] = Dt["[object Uint8ClampedArray]"] = Dt["[object Uint16Array]"] = Dt["[object Uint32Array]"] = true, Dt["[object Arguments]"] = Dt["[object Array]"] = Dt["[object ArrayBuffer]"] = Dt["[object Boolean]"] = Dt["[object DataView]"] = Dt["[object Date]"] = Dt["[object Error]"] = Dt["[object Function]"] = Dt["[object Map]"] = Dt["[object Number]"] = Dt["[object Object]"] = Dt["[object RegExp]"] = Dt["[object Set]"] = Dt["[object String]"] = Dt["[object WeakMap]"] = false;
  var Tt = {};Tt["[object Arguments]"] = Tt["[object Array]"] = Tt["[object ArrayBuffer]"] = Tt["[object DataView]"] = Tt["[object Boolean]"] = Tt["[object Date]"] = Tt["[object Float32Array]"] = Tt["[object Float64Array]"] = Tt["[object Int8Array]"] = Tt["[object Int16Array]"] = Tt["[object Int32Array]"] = Tt["[object Map]"] = Tt["[object Number]"] = Tt["[object Object]"] = Tt["[object RegExp]"] = Tt["[object Set]"] = Tt["[object String]"] = Tt["[object Symbol]"] = Tt["[object Uint8Array]"] = Tt["[object Uint8ClampedArray]"] = Tt["[object Uint16Array]"] = Tt["[object Uint32Array]"] = true, Tt["[object Error]"] = Tt["[object Function]"] = Tt["[object WeakMap]"] = false;var $t,
      Ft = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
      Nt = parseFloat,
      Pt = parseInt,
      Zt = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global,
      qt = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
      Vt = Zt || qt || Function("return this")(),
      Kt = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
      Gt = Kt && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
      Jt = Gt && Gt.exports === Kt,
      Yt = Jt && Zt.g;
  t: {
    try {
      $t = Yt && Yt.f("util");break t;
    } catch (t) {}$t = void 0;
  }var Ht = $t && $t.isArrayBuffer,
      Qt = $t && $t.isDate,
      Xt = $t && $t.isMap,
      tn = $t && $t.isRegExp,
      nn = $t && $t.isSet,
      rn = $t && $t.isTypedArray,
      en = j("length"),
      un = w({ "\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\xe3": "a", "\xe4": "a", "\xe5": "a", "\xc7": "C", "\xe7": "c", "\xd0": "D", "\xf0": "d", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xcc": "I", "\xcd": "I", "\xce": "I", "\xcf": "I",
    "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xd1": "N", "\xf1": "n", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O", "\xd8": "O", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xdd": "Y", "\xfd": "y", "\xff": "y", "\xc6": "Ae", "\xe6": "ae", "\xde": "Th", "\xfe": "th", "\xdf": "ss", "Ā": "A", "Ă": "A", "Ą": "A", "ā": "a", "ă": "a", "ą": "a", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C",
    "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "Ď": "D", "Đ": "D", "ď": "d", "đ": "d", "Ē": "E", "Ĕ": "E", "Ė": "E", "Ę": "E", "Ě": "E", "ē": "e", "ĕ": "e", "ė": "e", "ę": "e", "ě": "e", "Ĝ": "G", "Ğ": "G", "Ġ": "G", "Ģ": "G", "ĝ": "g", "ğ": "g", "ġ": "g", "ģ": "g", "Ĥ": "H", "Ħ": "H", "ĥ": "h", "ħ": "h", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "Į": "I", "İ": "I", "ĩ": "i", "ī": "i", "ĭ": "i", "į": "i",
    "ı": "i", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "ĸ": "k", "Ĺ": "L", "Ļ": "L", "Ľ": "L", "Ŀ": "L", "Ł": "L", "ĺ": "l", "ļ": "l", "ľ": "l", "ŀ": "l", "ł": "l", "Ń": "N", "Ņ": "N", "Ň": "N", "Ŋ": "N", "ń": "n", "ņ": "n", "ň": "n", "ŋ": "n", "Ō": "O", "Ŏ": "O", "Ő": "O", "ō": "o", "ŏ": "o", "ő": "o", "Ŕ": "R", "Ŗ": "R", "Ř": "R", "ŕ": "r", "ŗ": "r", "ř": "r", "Ś": "S", "Ŝ": "S", "Ş": "S",
    "Š": "S", "ś": "s", "ŝ": "s", "ş": "s", "š": "s", "Ţ": "T", "Ť": "T", "Ŧ": "T", "ţ": "t", "ť": "t", "ŧ": "t", "Ũ": "U", "Ū": "U", "Ŭ": "U", "Ů": "U", "Ű": "U", "Ų": "U", "ũ": "u", "ū": "u", "ŭ": "u", "ů": "u", "ű": "u", "ų": "u", "Ŵ": "W", "ŵ": "w", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Ź": "Z", "Ż": "Z", "Ž": "Z", "ź": "z", "ż": "z", "ž": "z", "Ĳ": "IJ", "ĳ": "ij", "Œ": "Oe", "œ": "oe", "ŉ": "'n",
    "ſ": "ss" }),
      on = w({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;" }),
      fn = w({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#96;": "`" }),
      cn = N();typeof define == "function" && _typeof(define.amd) == "object" && define.amd ? (Vt._ = cn, define(function () {
    return cn;
  })) : Gt ? ((Gt.exports = cn)._ = cn, Kt._ = cn) : Vt._ = cn;
}).call(undefined);

(function(f){if((typeof exports==="undefined"?"undefined":_typeof(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.io=f();}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(_dereq_,module,exports){/**
 * Module dependencies.
 */var url=_dereq_('./url');var parser=_dereq_('socket.io-parser');var Manager=_dereq_('./manager');var debug=_dereq_('debug')('socket.io-client');/**
 * Module exports.
 */module.exports=exports=lookup;/**
 * Managers cache.
 */var cache=exports.managers={};/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */function lookup(uri,opts){if((typeof uri==="undefined"?"undefined":_typeof(uri))=='object'){opts=uri;uri=undefined;}opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var path=parsed.path;var sameNamespace=cache[id]&&path in cache[id].nsps;var newConnection=opts.forceNew||opts['force new connection']||false===opts.multiplex||sameNamespace;var io;if(newConnection){debug('ignoring socket cache for %s',source);io=Manager(source,opts);}else{if(!cache[id]){debug('new io instance for %s',source);cache[id]=Manager(source,opts);}io=cache[id];}return io.socket(parsed.path);}/**
 * Protocol version.
 *
 * @api public
 */exports.protocol=parser.protocol;/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */exports.connect=lookup;/**
 * Expose constructors for standalone build.
 *
 * @api public
 */exports.Manager=_dereq_('./manager');exports.Socket=_dereq_('./socket');},{"./manager":2,"./socket":4,"./url":5,"debug":14,"socket.io-parser":40}],2:[function(_dereq_,module,exports){/**
 * Module dependencies.
 */var eio=_dereq_('engine.io-client');var Socket=_dereq_('./socket');var Emitter=_dereq_('component-emitter');var parser=_dereq_('socket.io-parser');var on=_dereq_('./on');var bind=_dereq_('component-bind');var debug=_dereq_('debug')('socket.io-client:manager');var indexOf=_dereq_('indexof');var Backoff=_dereq_('backo2');/**
 * IE6+ hasOwnProperty
 */var has=Object.prototype.hasOwnProperty;/**
 * Module exports
 */module.exports=Manager;/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */function Manager(uri,opts){if(!(this instanceof Manager))return new Manager(uri,opts);if(uri&&'object'==(typeof uri==="undefined"?"undefined":_typeof(uri))){opts=uri;uri=undefined;}opts=opts||{};opts.path=opts.path||'/socket.io';this.nsps={};this.subs=[];this.opts=opts;this.reconnection(opts.reconnection!==false);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1000);this.reconnectionDelayMax(opts.reconnectionDelayMax||5000);this.randomizationFactor(opts.randomizationFactor||0.5);this.backoff=new Backoff({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()});this.timeout(null==opts.timeout?20000:opts.timeout);this.readyState='closed';this.uri=uri;this.connecting=[];this.lastPing=null;this.encoding=false;this.packetBuffer=[];this.encoder=new parser.Encoder();this.decoder=new parser.Decoder();this.autoConnect=opts.autoConnect!==false;if(this.autoConnect)this.open();}/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */Manager.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].emit.apply(this.nsps[nsp],arguments);}}};/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */Manager.prototype.updateSocketIds=function(){for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].id=this.engine.id;}}};/**
 * Mix in `Emitter`.
 */Emitter(Manager.prototype);/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this;};/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this;};/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;this.backoff&&this.backoff.setMin(v);return this;};Manager.prototype.randomizationFactor=function(v){if(!arguments.length)return this._randomizationFactor;this._randomizationFactor=v;this.backoff&&this.backoff.setJitter(v);return this;};/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;this.backoff&&this.backoff.setMax(v);return this;};/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this;};/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */Manager.prototype.maybeReconnectOnOpen=function(){// Only try to reconnect if it's the first time we're connecting
if(!this.reconnecting&&this._reconnection&&this.backoff.attempts===0){// keeps reconnection from firing twice for the same reconnection loop
this.reconnect();}};/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */Manager.prototype.open=Manager.prototype.connect=function(fn){debug('readyState %s',this.readyState);if(~this.readyState.indexOf('open'))return this;debug('opening %s',this.uri);this.engine=eio(this.uri,this.opts);var socket=this.engine;var self=this;this.readyState='opening';this.skipReconnect=false;// emit `open`
var openSub=on(socket,'open',function(){self.onopen();fn&&fn();});// emit `connect_error`
var errorSub=on(socket,'error',function(data){debug('connect_error');self.cleanup();self.readyState='closed';self.emitAll('connect_error',data);if(fn){var err=new Error('Connection error');err.data=data;fn(err);}else{// Only do this if there is no fn to handle the error
self.maybeReconnectOnOpen();}});// emit `connect_timeout`
if(false!==this._timeout){var timeout=this._timeout;debug('connect attempt will timeout after %d',timeout);// set timer
var timer=setTimeout(function(){debug('connect attempt timed out after %d',timeout);openSub.destroy();socket.close();socket.emit('error','timeout');self.emitAll('connect_timeout',timeout);},timeout);this.subs.push({destroy:function destroy(){clearTimeout(timer);}});}this.subs.push(openSub);this.subs.push(errorSub);return this;};/**
 * Called upon transport open.
 *
 * @api private
 */Manager.prototype.onopen=function(){debug('open');// clear old subs
this.cleanup();// mark as open
this.readyState='open';this.emit('open');// add new subs
var socket=this.engine;this.subs.push(on(socket,'data',bind(this,'ondata')));this.subs.push(on(socket,'ping',bind(this,'onping')));this.subs.push(on(socket,'pong',bind(this,'onpong')));this.subs.push(on(socket,'error',bind(this,'onerror')));this.subs.push(on(socket,'close',bind(this,'onclose')));this.subs.push(on(this.decoder,'decoded',bind(this,'ondecoded')));};/**
 * Called upon a ping.
 *
 * @api private
 */Manager.prototype.onping=function(){this.lastPing=new Date();this.emitAll('ping');};/**
 * Called upon a packet.
 *
 * @api private
 */Manager.prototype.onpong=function(){this.emitAll('pong',new Date()-this.lastPing);};/**
 * Called with data.
 *
 * @api private
 */Manager.prototype.ondata=function(data){this.decoder.add(data);};/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */Manager.prototype.ondecoded=function(packet){this.emit('packet',packet);};/**
 * Called upon socket error.
 *
 * @api private
 */Manager.prototype.onerror=function(err){debug('error',err);this.emitAll('error',err);};/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket;var self=this;socket.on('connecting',onConnecting);socket.on('connect',function(){socket.id=self.engine.id;});if(this.autoConnect){// manually call here since connecting evnet is fired before listening
onConnecting();}}function onConnecting(){if(!~indexOf(self.connecting,socket)){self.connecting.push(socket);}}return socket;};/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */Manager.prototype.destroy=function(socket){var index=indexOf(this.connecting,socket);if(~index)this.connecting.splice(index,1);if(this.connecting.length)return;this.close();};/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */Manager.prototype.packet=function(packet){debug('writing packet %j',packet);var self=this;if(!self.encoding){// encode, then write to engine with result
self.encoding=true;this.encoder.encode(packet,function(encodedPackets){for(var i=0;i<encodedPackets.length;i++){self.engine.write(encodedPackets[i],packet.options);}self.encoding=false;self.processPacketQueue();});}else{// add packet to the queue
self.packetBuffer.push(packet);}};/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */Manager.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var pack=this.packetBuffer.shift();this.packet(pack);}};/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */Manager.prototype.cleanup=function(){debug('cleanup');var sub;while(sub=this.subs.shift()){sub.destroy();}this.packetBuffer=[];this.encoding=false;this.lastPing=null;this.decoder.destroy();};/**
 * Close the current socket.
 *
 * @api private
 */Manager.prototype.close=Manager.prototype.disconnect=function(){debug('disconnect');this.skipReconnect=true;this.reconnecting=false;if('opening'==this.readyState){// `onclose` will not fire because
// an open event never happened
this.cleanup();}this.backoff.reset();this.readyState='closed';if(this.engine)this.engine.close();};/**
 * Called upon engine close.
 *
 * @api private
 */Manager.prototype.onclose=function(reason){debug('onclose');this.cleanup();this.backoff.reset();this.readyState='closed';this.emit('close',reason);if(this._reconnection&&!this.skipReconnect){this.reconnect();}};/**
 * Attempt a reconnection.
 *
 * @api private
 */Manager.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var self=this;if(this.backoff.attempts>=this._reconnectionAttempts){debug('reconnect failed');this.backoff.reset();this.emitAll('reconnect_failed');this.reconnecting=false;}else{var delay=this.backoff.duration();debug('will wait %dms before reconnect attempt',delay);this.reconnecting=true;var timer=setTimeout(function(){if(self.skipReconnect)return;debug('attempting reconnect');self.emitAll('reconnect_attempt',self.backoff.attempts);self.emitAll('reconnecting',self.backoff.attempts);// check again for the case socket closed in above events
if(self.skipReconnect)return;self.open(function(err){if(err){debug('reconnect attempt error');self.reconnecting=false;self.reconnect();self.emitAll('reconnect_error',err.data);}else{debug('reconnect success');self.onreconnect();}});},delay);this.subs.push({destroy:function destroy(){clearTimeout(timer);}});}};/**
 * Called upon successful reconnect.
 *
 * @api private
 */Manager.prototype.onreconnect=function(){var attempt=this.backoff.attempts;this.reconnecting=false;this.backoff.reset();this.updateSocketIds();this.emitAll('reconnect',attempt);};},{"./on":3,"./socket":4,"backo2":8,"component-bind":11,"component-emitter":12,"debug":14,"engine.io-client":16,"indexof":32,"socket.io-parser":40}],3:[function(_dereq_,module,exports){/**
 * Module exports.
 */module.exports=on;/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */function on(obj,ev,fn){obj.on(ev,fn);return{destroy:function destroy(){obj.removeListener(ev,fn);}};}},{}],4:[function(_dereq_,module,exports){/**
 * Module dependencies.
 */var parser=_dereq_('socket.io-parser');var Emitter=_dereq_('component-emitter');var toArray=_dereq_('to-array');var on=_dereq_('./on');var bind=_dereq_('component-bind');var debug=_dereq_('debug')('socket.io-client:socket');var hasBin=_dereq_('has-binary');/**
 * Module exports.
 */module.exports=exports=Socket;/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */var events={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1};/**
 * Shortcut to `Emitter#emit`.
 */var emit=Emitter.prototype.emit;/**
 * `Socket` constructor.
 *
 * @api public
 */function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;// compat
this.ids=0;this.acks={};this.receiveBuffer=[];this.sendBuffer=[];this.connected=false;this.disconnected=true;if(this.io.autoConnect)this.open();}/**
 * Mix in `Emitter`.
 */Emitter(Socket.prototype);/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */Socket.prototype.subEvents=function(){if(this.subs)return;var io=this.io;this.subs=[on(io,'open',bind(this,'onopen')),on(io,'packet',bind(this,'onpacket')),on(io,'close',bind(this,'onclose'))];};/**
 * "Opens" the socket.
 *
 * @api public
 */Socket.prototype.open=Socket.prototype.connect=function(){if(this.connected)return this;this.subEvents();this.io.open();// ensure open
if('open'==this.io.readyState)this.onopen();this.emit('connecting');return this;};/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */Socket.prototype.send=function(){var args=toArray(arguments);args.unshift('message');this.emit.apply(this,args);return this;};/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */Socket.prototype.emit=function(ev){if(events.hasOwnProperty(ev)){emit.apply(this,arguments);return this;}var args=toArray(arguments);var parserType=parser.EVENT;// default
if(hasBin(args)){parserType=parser.BINARY_EVENT;}// binary
var packet={type:parserType,data:args};packet.options={};packet.options.compress=!this.flags||false!==this.flags.compress;// event ack callback
if('function'==typeof args[args.length-1]){debug('emitting packet with ack id %d',this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++;}if(this.connected){this.packet(packet);}else{this.sendBuffer.push(packet);}delete this.flags;return this;};/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.packet(packet);};/**
 * Called upon engine `open`.
 *
 * @api private
 */Socket.prototype.onopen=function(){debug('transport is open - connecting');// write connect packet if necessary
if('/'!=this.nsp){this.packet({type:parser.CONNECT});}};/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */Socket.prototype.onclose=function(reason){debug('close (%s)',reason);this.connected=false;this.disconnected=true;delete this.id;this.emit('disconnect',reason);};/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.BINARY_EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.BINARY_ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit('error',packet.data);break;}};/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */Socket.prototype.onevent=function(packet){var args=packet.data||[];debug('emitting event %j',args);if(null!=packet.id){debug('attaching ack callback to event');args.push(this.ack(packet.id));}if(this.connected){emit.apply(this,args);}else{this.receiveBuffer.push(args);}};/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */Socket.prototype.ack=function(id){var self=this;var sent=false;return function(){// prevent double callbacks
if(sent)return;sent=true;var args=toArray(arguments);debug('sending ack %j',args);var type=hasBin(args)?parser.BINARY_ACK:parser.ACK;self.packet({type:type,id:id,data:args});};};/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */Socket.prototype.onack=function(packet){var ack=this.acks[packet.id];if('function'==typeof ack){debug('calling ack %s with %j',packet.id,packet.data);ack.apply(this,packet.data);delete this.acks[packet.id];}else{debug('bad ack %s',packet.id);}};/**
 * Called upon server connect.
 *
 * @api private
 */Socket.prototype.onconnect=function(){this.connected=true;this.disconnected=false;this.emit('connect');this.emitBuffered();};/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */Socket.prototype.emitBuffered=function(){var i;for(i=0;i<this.receiveBuffer.length;i++){emit.apply(this,this.receiveBuffer[i]);}this.receiveBuffer=[];for(i=0;i<this.sendBuffer.length;i++){this.packet(this.sendBuffer[i]);}this.sendBuffer=[];};/**
 * Called upon server disconnect.
 *
 * @api private
 */Socket.prototype.ondisconnect=function(){debug('server disconnect (%s)',this.nsp);this.destroy();this.onclose('io server disconnect');};/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */Socket.prototype.destroy=function(){if(this.subs){// clean subscriptions to avoid reconnections
for(var i=0;i<this.subs.length;i++){this.subs[i].destroy();}this.subs=null;}this.io.destroy(this);};/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */Socket.prototype.close=Socket.prototype.disconnect=function(){if(this.connected){debug('performing disconnect (%s)',this.nsp);this.packet({type:parser.DISCONNECT});}// remove socket from pool
this.destroy();if(this.connected){// fire events
this.onclose('io client disconnect');}return this;};/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */Socket.prototype.compress=function(compress){this.flags=this.flags||{};this.flags.compress=compress;return this;};},{"./on":3,"component-bind":11,"component-emitter":12,"debug":14,"has-binary":30,"socket.io-parser":40,"to-array":43}],5:[function(_dereq_,module,exports){(function(global){/**
 * Module dependencies.
 */var parseuri=_dereq_('parseuri');var debug=_dereq_('debug')('socket.io-client:url');/**
 * Module exports.
 */module.exports=url;/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */function url(uri,loc){var obj=uri;// default to window.location
var loc=loc||global.location;if(null==uri)uri=loc.protocol+'//'+loc.host;// relative path support
if('string'==typeof uri){if('/'==uri.charAt(0)){if('/'==uri.charAt(1)){uri=loc.protocol+uri;}else{uri=loc.host+uri;}}if(!/^(https?|wss?):\/\//.test(uri)){debug('protocol-less url %s',uri);if('undefined'!=typeof loc){uri=loc.protocol+'//'+uri;}else{uri='https://'+uri;}}// parse
debug('parse %s',uri);obj=parseuri(uri);}// make sure we treat `localhost:80` and `localhost` equally
if(!obj.port){if(/^(http|ws)$/.test(obj.protocol)){obj.port='80';}else if(/^(http|ws)s$/.test(obj.protocol)){obj.port='443';}}obj.path=obj.path||'/';var ipv6=obj.host.indexOf(':')!==-1;var host=ipv6?'['+obj.host+']':obj.host;// define unique id
obj.id=obj.protocol+'://'+host+':'+obj.port;// define href
obj.href=obj.protocol+'://'+host+(loc&&loc.port==obj.port?'':':'+obj.port);return obj;}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{"debug":14,"parseuri":38}],6:[function(_dereq_,module,exports){module.exports=after;function after(count,callback,err_cb){var bail=false;err_cb=err_cb||noop;proxy.count=count;return count===0?callback():proxy;function proxy(err,result){if(proxy.count<=0){throw new Error('after called too many times');}--proxy.count;// after first error, rest are passed to err_cb
if(err){bail=true;callback(err);// future error callbacks will go to error handler
callback=err_cb;}else if(proxy.count===0&&!bail){callback(null,result);}}}function noop(){}},{}],7:[function(_dereq_,module,exports){/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end);}if(start<0){start+=bytes;}if(end<0){end+=bytes;}if(end>bytes){end=bytes;}if(start>=bytes||start>=end||bytes===0){return new ArrayBuffer(0);}var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i<end;i++,ii++){result[ii]=abv[i];}return result.buffer;};},{}],8:[function(_dereq_,module,exports){/**
 * Expose `Backoff`.
 */module.exports=Backoff;/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */function Backoff(opts){opts=opts||{};this.ms=opts.min||100;this.max=opts.max||10000;this.factor=opts.factor||2;this.jitter=opts.jitter>0&&opts.jitter<=1?opts.jitter:0;this.attempts=0;}/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */Backoff.prototype.duration=function(){var ms=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var rand=Math.random();var deviation=Math.floor(rand*this.jitter*ms);ms=(Math.floor(rand*10)&1)==0?ms-deviation:ms+deviation;}return Math.min(ms,this.max)|0;};/**
 * Reset the number of attempts.
 *
 * @api public
 */Backoff.prototype.reset=function(){this.attempts=0;};/**
 * Set the minimum duration
 *
 * @api public
 */Backoff.prototype.setMin=function(min){this.ms=min;};/**
 * Set the maximum duration
 *
 * @api public
 */Backoff.prototype.setMax=function(max){this.max=max;};/**
 * Set the jitter
 *
 * @api public
 */Backoff.prototype.setJitter=function(jitter){this.jitter=jitter;};},{}],9:[function(_dereq_,module,exports){/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */(function(){"use strict";var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";// Use a lookup table to find the index.
var lookup=new Uint8Array(256);for(var i=0;i<chars.length;i++){lookup[chars.charCodeAt(i)]=i;}exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.length,base64="";for(i=0;i<len;i+=3){base64+=chars[bytes[i]>>2];base64+=chars[(bytes[i]&3)<<4|bytes[i+1]>>4];base64+=chars[(bytes[i+1]&15)<<2|bytes[i+2]>>6];base64+=chars[bytes[i+2]&63];}if(len%3===2){base64=base64.substring(0,base64.length-1)+"=";}else if(len%3===1){base64=base64.substring(0,base64.length-2)+"==";}return base64;};exports.decode=function(base64){var bufferLength=base64.length*0.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]==="="){bufferLength--;if(base64[base64.length-2]==="="){bufferLength--;}}var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i<len;i+=4){encoded1=lookup[base64.charCodeAt(i)];encoded2=lookup[base64.charCodeAt(i+1)];encoded3=lookup[base64.charCodeAt(i+2)];encoded4=lookup[base64.charCodeAt(i+3)];bytes[p++]=encoded1<<2|encoded2>>4;bytes[p++]=(encoded2&15)<<4|encoded3>>2;bytes[p++]=(encoded3&3)<<6|encoded4&63;}return arraybuffer;};})();},{}],10:[function(_dereq_,module,exports){(function(global){/**
 * Create a blob builder even when vendor prefixes exist
 */var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;/**
 * Check if Blob constructor is supported
 */var blobSupported=function(){try{var a=new Blob(['hi']);return a.size===2;}catch(e){return false;}}();/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */var blobSupportsArrayBufferView=blobSupported&&function(){try{var b=new Blob([new Uint8Array([1,2])]);return b.size===2;}catch(e){return false;}}();/**
 * Check if BlobBuilder is supported
 */var blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */function mapArrayBufferViews(ary){for(var i=0;i<ary.length;i++){var chunk=ary[i];if(chunk.buffer instanceof ArrayBuffer){var buf=chunk.buffer;// if this is a subarray, make a copy so we only
// include the subarray region from the underlying buffer
if(chunk.byteLength!==buf.byteLength){var copy=new Uint8Array(chunk.byteLength);copy.set(new Uint8Array(buf,chunk.byteOffset,chunk.byteLength));buf=copy.buffer;}ary[i]=buf;}}}function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder();mapArrayBufferViews(ary);for(var i=0;i<ary.length;i++){bb.append(ary[i]);}return options.type?bb.getBlob(options.type):bb.getBlob();};function BlobConstructor(ary,options){mapArrayBufferViews(ary);return new Blob(ary,options||{});};module.exports=function(){if(blobSupported){return blobSupportsArrayBufferView?global.Blob:BlobConstructor;}else if(blobBuilderSupported){return BlobBuilderConstructor;}else{return undefined;}}();}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{}],11:[function(_dereq_,module,exports){/**
 * Slice reference.
 */var slice=[].slice;/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */module.exports=function(obj,fn){if('string'==typeof fn)fn=obj[fn];if('function'!=typeof fn)throw new Error('bind() requires a function');var args=slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)));};};},{}],12:[function(_dereq_,module,exports){/**
 * Expose `Emitter`.
 */module.exports=Emitter;/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */function Emitter(obj){if(obj)return mixin(obj);};/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key];}return obj;}/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks['$'+event]=this._callbacks['$'+event]||[]).push(fn);return this;};/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */Emitter.prototype.once=function(event,fn){function on(){this.off(event,on);fn.apply(this,arguments);}on.fn=fn;this.on(event,on);return this;};/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};// all
if(0==arguments.length){this._callbacks={};return this;}// specific event
var callbacks=this._callbacks['$'+event];if(!callbacks)return this;// remove all handlers
if(1==arguments.length){delete this._callbacks['$'+event];return this;}// remove specific handler
var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break;}}return this;};/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks['$'+event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args);}}return this;};/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks['$'+event]||[];};/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length;};},{}],13:[function(_dereq_,module,exports){module.exports=function(a,b){var fn=function fn(){};fn.prototype=b.prototype;a.prototype=new fn();a.prototype.constructor=a;};},{}],14:[function(_dereq_,module,exports){/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */exports=module.exports=_dereq_('./debug');exports.log=log;exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;exports.storage='undefined'!=typeof chrome&&'undefined'!=typeof chrome.storage?chrome.storage.local:localstorage();/**
 * Colors.
 */exports.colors=['lightseagreen','forestgreen','goldenrod','dodgerblue','darkorchid','crimson'];/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */function useColors(){// is webkit? http://stackoverflow.com/a/16459606/376773
return'WebkitAppearance'in document.documentElement.style||// is firebug? http://stackoverflow.com/a/398120/376773
window.console&&(console.firebug||console.exception&&console.table)||// is firefox >= v31?
// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31;}/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */exports.formatters.j=function(v){return JSON.stringify(v);};/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */function formatArgs(){var args=arguments;var useColors=this.useColors;args[0]=(useColors?'%c':'')+this.namespace+(useColors?' %c':' ')+args[0]+(useColors?'%c ':' ')+'+'+exports.humanize(this.diff);if(!useColors)return args;var c='color: '+this.color;args=[args[0],c,'color: inherit'].concat(Array.prototype.slice.call(args,1));// the final "%c" is somewhat tricky, because there could be other
// arguments passed either before or after the %c, so we need to
// figure out the correct index to insert the CSS into
var index=0;var lastC=0;args[0].replace(/%[a-z%]/g,function(match){if('%%'===match)return;index++;if('%c'===match){// we only are interested in the *last* %c
// (the user may have provided their own)
lastC=index;}});args.splice(lastC,0,c);return args;}/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */function log(){// this hackery is required for IE8/9, where
// the `console.log` function doesn't have 'apply'
return'object'===(typeof console==="undefined"?"undefined":_typeof(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments);}/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */function save(namespaces){try{if(null==namespaces){exports.storage.removeItem('debug');}else{exports.storage.debug=namespaces;}}catch(e){}}/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */function load(){var r;try{r=exports.storage.debug;}catch(e){}return r;}/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */exports.enable(load());/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */function localstorage(){try{return window.localStorage;}catch(e){}}},{"./debug":15}],15:[function(_dereq_,module,exports){/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */exports=module.exports=debug;exports.coerce=coerce;exports.disable=disable;exports.enable=enable;exports.enabled=enabled;exports.humanize=_dereq_('ms');/**
 * The currently active debug mode names, and names to skip.
 */exports.names=[];exports.skips=[];/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lowercased letter, i.e. "n".
 */exports.formatters={};/**
 * Previously assigned color.
 */var prevColor=0;/**
 * Previous log timestamp.
 */var prevTime;/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */function selectColor(){return exports.colors[prevColor++%exports.colors.length];}/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */function debug(namespace){// define the `disabled` version
function disabled(){}disabled.enabled=false;// define the `enabled` version
function enabled(){var self=enabled;// set `diff` timestamp
var curr=+new Date();var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr;// add the `color` if not set
if(null==self.useColors)self.useColors=exports.useColors();if(null==self.color&&self.useColors)self.color=selectColor();var args=Array.prototype.slice.call(arguments);args[0]=exports.coerce(args[0]);if('string'!==typeof args[0]){// anything else let's inspect with %o
args=['%o'].concat(args);}// apply any `formatters` transformations
var index=0;args[0]=args[0].replace(/%([a-z%])/g,function(match,format){// if we encounter an escaped % then don't increase the array index
if(match==='%%')return match;index++;var formatter=exports.formatters[format];if('function'===typeof formatter){var val=args[index];match=formatter.call(self,val);// now we need to remove `args[index]` since it's inlined in the `format`
args.splice(index,1);index--;}return match;});if('function'===typeof exports.formatArgs){args=exports.formatArgs.apply(self,args);}var logFn=enabled.log||exports.log||console.log.bind(console);logFn.apply(self,args);}enabled.enabled=true;var fn=exports.enabled(namespace)?enabled:disabled;fn.namespace=namespace;return fn;}/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */function enable(namespaces){exports.save(namespaces);var split=(namespaces||'').split(/[\s,]+/);var len=split.length;for(var i=0;i<len;i++){if(!split[i])continue;// ignore empty strings
namespaces=split[i].replace(/\*/g,'.*?');if(namespaces[0]==='-'){exports.skips.push(new RegExp('^'+namespaces.substr(1)+'$'));}else{exports.names.push(new RegExp('^'+namespaces+'$'));}}}/**
 * Disable debug output.
 *
 * @api public
 */function disable(){exports.enable('');}/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++){if(exports.skips[i].test(name)){return false;}}for(i=0,len=exports.names.length;i<len;i++){if(exports.names[i].test(name)){return true;}}return false;}/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */function coerce(val){if(val instanceof Error)return val.stack||val.message;return val;}},{"ms":35}],16:[function(_dereq_,module,exports){module.exports=_dereq_('./lib/');},{"./lib/":17}],17:[function(_dereq_,module,exports){module.exports=_dereq_('./socket');/**
 * Exports parser
 *
 * @api public
 *
 */module.exports.parser=_dereq_('engine.io-parser');},{"./socket":18,"engine.io-parser":27}],18:[function(_dereq_,module,exports){(function(global){/**
 * Module dependencies.
 */var transports=_dereq_('./transports');var Emitter=_dereq_('component-emitter');var debug=_dereq_('debug')('engine.io-client:socket');var index=_dereq_('indexof');var parser=_dereq_('engine.io-parser');var parseuri=_dereq_('parseuri');var parsejson=_dereq_('parsejson');var parseqs=_dereq_('parseqs');/**
 * Module exports.
 */module.exports=Socket;/**
 * Noop function.
 *
 * @api private
 */function noop(){}/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&&'object'==(typeof uri==="undefined"?"undefined":_typeof(uri))){opts=uri;uri=null;}if(uri){uri=parseuri(uri);opts.hostname=uri.host;opts.secure=uri.protocol=='https'||uri.protocol=='wss';opts.port=uri.port;if(uri.query)opts.query=uri.query;}else if(opts.host){opts.hostname=parseuri(opts.host).host;}this.secure=null!=opts.secure?opts.secure:global.location&&'https:'==location.protocol;if(opts.hostname&&!opts.port){// if no port is specified manually, use the protocol default
opts.port=this.secure?'443':'80';}this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:'localhost');this.port=opts.port||(global.location&&location.port?location.port:this.secure?443:80);this.query=opts.query||{};if('string'==typeof this.query)this.query=parseqs.decode(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||'/engine.io').replace(/\/$/,'')+'/';this.forceJSONP=!!opts.forceJSONP;this.jsonp=false!==opts.jsonp;this.forceBase64=!!opts.forceBase64;this.enablesXDR=!!opts.enablesXDR;this.timestampParam=opts.timestampParam||'t';this.timestampRequests=opts.timestampRequests;this.transports=opts.transports||['polling','websocket'];this.readyState='';this.writeBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades;this.perMessageDeflate=false!==opts.perMessageDeflate?opts.perMessageDeflate||{}:false;if(true===this.perMessageDeflate)this.perMessageDeflate={};if(this.perMessageDeflate&&null==this.perMessageDeflate.threshold){this.perMessageDeflate.threshold=1024;}// SSL options for Node.js client
this.pfx=opts.pfx||null;this.key=opts.key||null;this.passphrase=opts.passphrase||null;this.cert=opts.cert||null;this.ca=opts.ca||null;this.ciphers=opts.ciphers||null;this.rejectUnauthorized=opts.rejectUnauthorized===undefined?true:opts.rejectUnauthorized;// other options for Node.js client
var freeGlobal=(typeof global==="undefined"?"undefined":_typeof(global))=='object'&&global;if(freeGlobal.global===freeGlobal){if(opts.extraHeaders&&Object.keys(opts.extraHeaders).length>0){this.extraHeaders=opts.extraHeaders;}}this.open();}Socket.priorWebsocketSuccess=false;/**
 * Mix in `Emitter`.
 */Emitter(Socket.prototype);/**
 * Protocol version.
 *
 * @api public
 */Socket.protocol=parser.protocol;// this is an int
/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */Socket.Socket=Socket;Socket.Transport=_dereq_('./transport');Socket.transports=_dereq_('./transports');Socket.parser=_dereq_('engine.io-parser');/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */Socket.prototype.createTransport=function(name){debug('creating transport "%s"',name);var query=clone(this.query);// append engine.io protocol identifier
query.EIO=parser.protocol;// transport name
query.transport=name;// session id if we already have one
if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders});return transport;};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i];}}return o;}/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&&Socket.priorWebsocketSuccess&&this.transports.indexOf('websocket')!=-1){transport='websocket';}else if(0===this.transports.length){// Emit error on next tick so it can be listened to
var self=this;setTimeout(function(){self.emit('error','No transports available');},0);return;}else{transport=this.transports[0];}this.readyState='opening';// Retry with the next transport if the transport is disabled (jsonp: false)
try{transport=this.createTransport(transport);}catch(e){this.transports.shift();this.open();return;}transport.open();this.setTransport(transport);};/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */Socket.prototype.setTransport=function(transport){debug('setting transport %s',transport.name);var self=this;if(this.transport){debug('clearing existing transport %s',this.transport.name);this.transport.removeAllListeners();}// set up transport
this.transport=transport;// set up transport listeners
transport.on('drain',function(){self.onDrain();}).on('packet',function(packet){self.onPacket(packet);}).on('error',function(e){self.onError(e);}).on('close',function(){self.onClose('transport close');});};/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */Socket.prototype.probe=function(name){debug('probing transport "%s"',name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;function onTransportOpen(){if(self.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&&self.transport.supportsBinary;failed=failed||upgradeLosesBinary;}if(failed)return;debug('probe transport "%s" opened',name);transport.send([{type:'ping',data:'probe'}]);transport.once('packet',function(msg){if(failed)return;if('pong'==msg.type&&'probe'==msg.data){debug('probe transport "%s" pong',name);self.upgrading=true;self.emit('upgrading',transport);if(!transport)return;Socket.priorWebsocketSuccess='websocket'==transport.name;debug('pausing current transport "%s"',self.transport.name);self.transport.pause(function(){if(failed)return;if('closed'==self.readyState)return;debug('changing transport and sending upgrade packet');cleanup();self.setTransport(transport);transport.send([{type:'upgrade'}]);self.emit('upgrade',transport);transport=null;self.upgrading=false;self.flush();});}else{debug('probe transport "%s" failed',name);var err=new Error('probe error');err.transport=transport.name;self.emit('upgradeError',err);}});}function freezeTransport(){if(failed)return;// Any callback called by transport should be ignored since now
failed=true;cleanup();transport.close();transport=null;}//Handle any error that happens while probing
function onerror(err){var error=new Error('probe error: '+err);error.transport=transport.name;freezeTransport();debug('probe transport "%s" failed because of error: %s',name,err);self.emit('upgradeError',error);}function onTransportClose(){onerror("transport closed");}//When the socket is closed while we're probing
function onclose(){onerror("socket closed");}//When the socket is upgraded while we're probing
function onupgrade(to){if(transport&&to.name!=transport.name){debug('"%s" works - aborting "%s"',to.name,transport.name);freezeTransport();}}//Remove all listeners on the transport and on self
function cleanup(){transport.removeListener('open',onTransportOpen);transport.removeListener('error',onerror);transport.removeListener('close',onTransportClose);self.removeListener('close',onclose);self.removeListener('upgrading',onupgrade);}transport.once('open',onTransportOpen);transport.once('error',onerror);transport.once('close',onTransportClose);this.once('close',onclose);this.once('upgrading',onupgrade);transport.open();};/**
 * Called when connection is deemed open.
 *
 * @api public
 */Socket.prototype.onOpen=function(){debug('socket open');this.readyState='open';Socket.priorWebsocketSuccess='websocket'==this.transport.name;this.emit('open');this.flush();// we check for `readyState` in case an `open`
// listener already closed the socket
if('open'==this.readyState&&this.upgrade&&this.transport.pause){debug('starting upgrade probes');for(var i=0,l=this.upgrades.length;i<l;i++){this.probe(this.upgrades[i]);}}};/**
 * Handles a packet.
 *
 * @api private
 */Socket.prototype.onPacket=function(packet){if('opening'==this.readyState||'open'==this.readyState){debug('socket receive: type "%s", data "%s"',packet.type,packet.data);this.emit('packet',packet);// Socket is live - any packet counts
this.emit('heartbeat');switch(packet.type){case'open':this.onHandshake(parsejson(packet.data));break;case'pong':this.setPing();this.emit('pong');break;case'error':var err=new Error('server error');err.code=packet.data;this.onError(err);break;case'message':this.emit('data',packet.data);this.emit('message',packet.data);break;}}else{debug('packet received with socket readyState "%s"',this.readyState);}};/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */Socket.prototype.onHandshake=function(data){this.emit('handshake',data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();// In case open handler closes socket
if('closed'==this.readyState)return;this.setPing();// Prolong liveness of socket on heartbeat
this.removeListener('heartbeat',this.onHeartbeat);this.on('heartbeat',this.onHeartbeat);};/**
 * Resets ping timeout.
 *
 * @api private
 */Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if('closed'==self.readyState)return;self.onClose('ping timeout');},timeout||self.pingInterval+self.pingTimeout);};/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug('writing ping packet - expecting pong within %sms',self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout);},self.pingInterval);};/**
* Sends a ping packet.
*
* @api private
*/Socket.prototype.ping=function(){var self=this;this.sendPacket('ping',function(){self.emit('ping');});};/**
 * Called on `drain` event
 *
 * @api private
 */Socket.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen);// setting prevBufferLen = 0 is very important
// for example, when upgrading, upgrade packet is sent over,
// and a nonzero prevBufferLen could cause problems on `drain`
this.prevBufferLen=0;if(0===this.writeBuffer.length){this.emit('drain');}else{this.flush();}};/**
 * Flush write buffers.
 *
 * @api private
 */Socket.prototype.flush=function(){if('closed'!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){debug('flushing %d packets in socket',this.writeBuffer.length);this.transport.send(this.writeBuffer);// keep track of current length of writeBuffer
// splice writeBuffer and callbackBuffer on `drain`
this.prevBufferLen=this.writeBuffer.length;this.emit('flush');}};/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */Socket.prototype.write=Socket.prototype.send=function(msg,options,fn){this.sendPacket('message',msg,options,fn);return this;};/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */Socket.prototype.sendPacket=function(type,data,options,fn){if('function'==typeof data){fn=data;data=undefined;}if('function'==typeof options){fn=options;options=null;}if('closing'==this.readyState||'closed'==this.readyState){return;}options=options||{};options.compress=false!==options.compress;var packet={type:type,data:data,options:options};this.emit('packetCreate',packet);this.writeBuffer.push(packet);if(fn)this.once('flush',fn);this.flush();};/**
 * Closes the connection.
 *
 * @api private
 */Socket.prototype.close=function(){if('opening'==this.readyState||'open'==this.readyState){this.readyState='closing';var self=this;if(this.writeBuffer.length){this.once('drain',function(){if(this.upgrading){waitForUpgrade();}else{close();}});}else if(this.upgrading){waitForUpgrade();}else{close();}}function close(){self.onClose('forced close');debug('socket closing - telling transport to close');self.transport.close();}function cleanupAndClose(){self.removeListener('upgrade',cleanupAndClose);self.removeListener('upgradeError',cleanupAndClose);close();}function waitForUpgrade(){// wait for upgrade to finish since we can't send packets while pausing a transport
self.once('upgrade',cleanupAndClose);self.once('upgradeError',cleanupAndClose);}return this;};/**
 * Called upon transport error
 *
 * @api private
 */Socket.prototype.onError=function(err){debug('socket error %j',err);Socket.priorWebsocketSuccess=false;this.emit('error',err);this.onClose('transport error',err);};/**
 * Called upon transport close.
 *
 * @api private
 */Socket.prototype.onClose=function(reason,desc){if('opening'==this.readyState||'open'==this.readyState||'closing'==this.readyState){debug('socket close with reason: "%s"',reason);var self=this;// clear timers
clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);// stop event from firing again for transport
this.transport.removeAllListeners('close');// ensure transport won't stay open
this.transport.close();// ignore further transport communication
this.transport.removeAllListeners();// set ready state
this.readyState='closed';// clear session id
this.id=null;// emit close event
this.emit('close',reason,desc);// clean buffers after, so users can still
// grab the buffers on `close` event
self.writeBuffer=[];self.prevBufferLen=0;}};/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i<j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i]);}return filteredUpgrades;};}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{"./transport":19,"./transports":20,"component-emitter":26,"debug":14,"engine.io-parser":27,"indexof":32,"parsejson":36,"parseqs":37,"parseuri":38}],19:[function(_dereq_,module,exports){/**
 * Module dependencies.
 */var parser=_dereq_('engine.io-parser');var Emitter=_dereq_('component-emitter');/**
 * Module exports.
 */module.exports=Transport;/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState='';this.agent=opts.agent||false;this.socket=opts.socket;this.enablesXDR=opts.enablesXDR;// SSL options for Node.js client
this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;// other options for Node.js client
this.extraHeaders=opts.extraHeaders;}/**
 * Mix in `Emitter`.
 */Emitter(Transport.prototype);/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type='TransportError';err.description=desc;this.emit('error',err);return this;};/**
 * Opens the transport.
 *
 * @api public
 */Transport.prototype.open=function(){if('closed'==this.readyState||''==this.readyState){this.readyState='opening';this.doOpen();}return this;};/**
 * Closes the transport.
 *
 * @api private
 */Transport.prototype.close=function(){if('opening'==this.readyState||'open'==this.readyState){this.doClose();this.onClose();}return this;};/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */Transport.prototype.send=function(packets){if('open'==this.readyState){this.write(packets);}else{throw new Error('Transport not open');}};/**
 * Called upon open
 *
 * @api private
 */Transport.prototype.onOpen=function(){this.readyState='open';this.writable=true;this.emit('open');};/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */Transport.prototype.onData=function(data){var packet=parser.decodePacket(data,this.socket.binaryType);this.onPacket(packet);};/**
 * Called with a decoded packet.
 */Transport.prototype.onPacket=function(packet){this.emit('packet',packet);};/**
 * Called upon close.
 *
 * @api private
 */Transport.prototype.onClose=function(){this.readyState='closed';this.emit('close');};},{"component-emitter":26,"engine.io-parser":27}],20:[function(_dereq_,module,exports){(function(global){/**
 * Module dependencies
 */var XMLHttpRequest=_dereq_('xmlhttprequest-ssl');var XHR=_dereq_('./polling-xhr');var JSONP=_dereq_('./polling-jsonp');var websocket=_dereq_('./websocket');/**
 * Export transports.
 */exports.polling=polling;exports.websocket=websocket;/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */function polling(opts){var xhr;var xd=false;var xs=false;var jsonp=false!==opts.jsonp;if(global.location){var isSSL='https:'==location.protocol;var port=location.port;// some user agents have empty `location.port`
if(!port){port=isSSL?443:80;}xd=opts.hostname!=location.hostname||port!=opts.port;xs=opts.secure!=isSSL;}opts.xdomain=xd;opts.xscheme=xs;xhr=new XMLHttpRequest(opts);if('open'in xhr&&!opts.forceJSONP){return new XHR(opts);}else{if(!jsonp)throw new Error('JSONP disabled');return new JSONP(opts);}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{"./polling-jsonp":21,"./polling-xhr":22,"./websocket":24,"xmlhttprequest-ssl":25}],21:[function(_dereq_,module,exports){(function(global){/**
 * Module requirements.
 */var Polling=_dereq_('./polling');var inherit=_dereq_('component-inherit');/**
 * Module exports.
 */module.exports=JSONPPolling;/**
 * Cached regular expressions.
 */var rNewline=/\n/g;var rEscapedNewline=/\\n/g;/**
 * Global JSONP callbacks.
 */var callbacks;/**
 * Callbacks count.
 */var index=0;/**
 * Noop.
 */function empty(){}/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */function JSONPPolling(opts){Polling.call(this,opts);this.query=this.query||{};// define global callbacks array if not present
// we do this here (lazily) to avoid unneeded global pollution
if(!callbacks){// we need to consider multiple engines in the same page
if(!global.___eio)global.___eio=[];callbacks=global.___eio;}// callback identifier
this.index=callbacks.length;// add callback to jsonp global
var self=this;callbacks.push(function(msg){self.onData(msg);});// append to query string
this.query.j=this.index;// prevent spurious errors from being emitted when the window is unloaded
if(global.document&&global.addEventListener){global.addEventListener('beforeunload',function(){if(self.script)self.script.onerror=empty;},false);}}/**
 * Inherits from Polling.
 */inherit(JSONPPolling,Polling);/*
 * JSONP only supports binary as base64 encoded strings
 */JSONPPolling.prototype.supportsBinary=false;/**
 * Closes the socket.
 *
 * @api private
 */JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null;}if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;this.iframe=null;}Polling.prototype.doClose.call(this);};/**
 * Starts a poll cycle.
 *
 * @api private
 */JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement('script');if(this.script){this.script.parentNode.removeChild(this.script);this.script=null;}script.async=true;script.src=this.uri();script.onerror=function(e){self.onError('jsonp poll error',e);};var insertAt=document.getElementsByTagName('script')[0];if(insertAt){insertAt.parentNode.insertBefore(script,insertAt);}else{(document.head||document.body).appendChild(script);}this.script=script;var isUAgecko='undefined'!=typeof navigator&&/gecko/i.test(navigator.userAgent);if(isUAgecko){setTimeout(function(){var iframe=document.createElement('iframe');document.body.appendChild(iframe);document.body.removeChild(iframe);},100);}};/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement('form');var area=document.createElement('textarea');var id=this.iframeId='eio_iframe_'+this.index;var iframe;form.className='socketio';form.style.position='absolute';form.style.top='-1000px';form.style.left='-1000px';form.target=id;form.method='POST';form.setAttribute('accept-charset','utf-8');area.name='d';form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area;}this.form.action=this.uri();function complete(){initIframe();fn();}function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe);}catch(e){self.onError('jsonp polling iframe removal error',e);}}try{// ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
var html='<iframe src="javascript:0" name="'+self.iframeId+'">';iframe=document.createElement(html);}catch(e){iframe=document.createElement('iframe');iframe.name=self.iframeId;iframe.src='javascript:0';}iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe;}initIframe();// escape \n to prevent it from being converted into \r\n by some UAs
// double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
data=data.replace(rEscapedNewline,'\\\n');this.area.value=data.replace(rNewline,'\\n');try{this.form.submit();}catch(e){}if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState=='complete'){complete();}};}else{this.iframe.onload=complete;}};}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{"./polling":23,"component-inherit":13}],22:[function(_dereq_,module,exports){(function(global){/**
 * Module requirements.
 */var XMLHttpRequest=_dereq_('xmlhttprequest-ssl');var Polling=_dereq_('./polling');var Emitter=_dereq_('component-emitter');var inherit=_dereq_('component-inherit');var debug=_dereq_('debug')('engine.io-client:polling-xhr');/**
 * Module exports.
 */module.exports=XHR;module.exports.Request=Request;/**
 * Empty function
 */function empty(){}/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL='https:'==location.protocol;var port=location.port;// some user agents have empty `location.port`
if(!port){port=isSSL?443:80;}this.xd=opts.hostname!=global.location.hostname||port!=opts.port;this.xs=opts.secure!=isSSL;}else{this.extraHeaders=opts.extraHeaders;}}/**
 * Inherits from Polling.
 */inherit(XHR,Polling);/**
 * XHR supports binary
 */XHR.prototype.supportsBinary=true;/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.xs=this.xs;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;opts.enablesXDR=this.enablesXDR;// SSL options for Node.js client
opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;// other options for Node.js client
opts.extraHeaders=this.extraHeaders;return new Request(opts);};/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!=='string'&&data!==undefined;var req=this.request({method:'POST',data:data,isBinary:isBinary});var self=this;req.on('success',fn);req.on('error',function(err){self.onError('xhr post error',err);});this.sendXhr=req;};/**
 * Starts a poll cycle.
 *
 * @api private
 */XHR.prototype.doPoll=function(){debug('xhr poll');var req=this.request();var self=this;req.on('data',function(data){self.onData(data);});req.on('error',function(err){self.onError('xhr poll error',err);});this.pollXhr=req;};/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */function Request(opts){this.method=opts.method||'GET';this.uri=opts.uri;this.xd=!!opts.xd;this.xs=!!opts.xs;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.isBinary=opts.isBinary;this.supportsBinary=opts.supportsBinary;this.enablesXDR=opts.enablesXDR;// SSL options for Node.js client
this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;// other options for Node.js client
this.extraHeaders=opts.extraHeaders;this.create();}/**
 * Mix in `Emitter`.
 */Emitter(Request.prototype);/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */Request.prototype.create=function(){var opts={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};// SSL options for Node.js client
opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;var xhr=this.xhr=new XMLHttpRequest(opts);var self=this;try{debug('xhr open %s: %s',this.method,this.uri);xhr.open(this.method,this.uri,this.async);try{if(this.extraHeaders){xhr.setDisableHeaderCheck(true);for(var i in this.extraHeaders){if(this.extraHeaders.hasOwnProperty(i)){xhr.setRequestHeader(i,this.extraHeaders[i]);}}}}catch(e){}if(this.supportsBinary){// This has to be done after open because Firefox is stupid
// http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
xhr.responseType='arraybuffer';}if('POST'==this.method){try{if(this.isBinary){xhr.setRequestHeader('Content-type','application/octet-stream');}else{xhr.setRequestHeader('Content-type','text/plain;charset=UTF-8');}}catch(e){}}// ie6 check
if('withCredentials'in xhr){xhr.withCredentials=true;}if(this.hasXDR()){xhr.onload=function(){self.onLoad();};xhr.onerror=function(){self.onError(xhr.responseText);};}else{xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){self.onLoad();}else{// make sure the `error` event handler that's user-set
// does not throw in the same tick and gets caught here
setTimeout(function(){self.onError(xhr.status);},0);}};}debug('xhr data %s',this.data);xhr.send(this.data);}catch(e){// Need to defer since .create() is called directly fhrom the constructor
// and thus the 'error' event can only be only bound *after* this exception
// occurs.  Therefore, also, we cannot throw here at all.
setTimeout(function(){self.onError(e);},0);return;}if(global.document){this.index=Request.requestsCount++;Request.requests[this.index]=this;}};/**
 * Called upon successful response.
 *
 * @api private
 */Request.prototype.onSuccess=function(){this.emit('success');this.cleanup();};/**
 * Called if we have data.
 *
 * @api private
 */Request.prototype.onData=function(data){this.emit('data',data);this.onSuccess();};/**
 * Called upon error.
 *
 * @api private
 */Request.prototype.onError=function(err){this.emit('error',err);this.cleanup(true);};/**
 * Cleans up house.
 *
 * @api private
 */Request.prototype.cleanup=function(fromError){if('undefined'==typeof this.xhr||null===this.xhr){return;}// xmlhttprequest
if(this.hasXDR()){this.xhr.onload=this.xhr.onerror=empty;}else{this.xhr.onreadystatechange=empty;}if(fromError){try{this.xhr.abort();}catch(e){}}if(global.document){delete Request.requests[this.index];}this.xhr=null;};/**
 * Called upon load.
 *
 * @api private
 */Request.prototype.onLoad=function(){var data;try{var contentType;try{contentType=this.xhr.getResponseHeader('Content-Type').split(';')[0];}catch(e){}if(contentType==='application/octet-stream'){data=this.xhr.response;}else{if(!this.supportsBinary){data=this.xhr.responseText;}else{try{data=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response));}catch(e){var ui8Arr=new Uint8Array(this.xhr.response);var dataArray=[];for(var idx=0,length=ui8Arr.length;idx<length;idx++){dataArray.push(ui8Arr[idx]);}data=String.fromCharCode.apply(null,dataArray);}}}}catch(e){this.onError(e);}if(null!=data){this.onData(data);}};/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */Request.prototype.hasXDR=function(){return'undefined'!==typeof global.XDomainRequest&&!this.xs&&this.enablesXDR;};/**
 * Aborts the request.
 *
 * @api public
 */Request.prototype.abort=function(){this.cleanup();};/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */if(global.document){Request.requestsCount=0;Request.requests={};if(global.attachEvent){global.attachEvent('onunload',unloadHandler);}else if(global.addEventListener){global.addEventListener('beforeunload',unloadHandler,false);}}function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort();}}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{"./polling":23,"component-emitter":26,"component-inherit":13,"debug":14,"xmlhttprequest-ssl":25}],23:[function(_dereq_,module,exports){/**
 * Module dependencies.
 */var Transport=_dereq_('../transport');var parseqs=_dereq_('parseqs');var parser=_dereq_('engine.io-parser');var inherit=_dereq_('component-inherit');var yeast=_dereq_('yeast');var debug=_dereq_('debug')('engine.io-client:polling');/**
 * Module exports.
 */module.exports=Polling;/**
 * Is XHR2 supported?
 */var hasXHR2=function(){var XMLHttpRequest=_dereq_('xmlhttprequest-ssl');var xhr=new XMLHttpRequest({xdomain:false});return null!=xhr.responseType;}();/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */function Polling(opts){var forceBase64=opts&&opts.forceBase64;if(!hasXHR2||forceBase64){this.supportsBinary=false;}Transport.call(this,opts);}/**
 * Inherits from Transport.
 */inherit(Polling,Transport);/**
 * Transport name.
 */Polling.prototype.name='polling';/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */Polling.prototype.doOpen=function(){this.poll();};/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState='pausing';function pause(){debug('paused');self.readyState='paused';onPause();}if(this.polling||!this.writable){var total=0;if(this.polling){debug('we are currently polling - waiting to pause');total++;this.once('pollComplete',function(){debug('pre-pause polling complete');--total||pause();});}if(!this.writable){debug('we are currently writing - waiting to pause');total++;this.once('drain',function(){debug('pre-pause writing complete');--total||pause();});}}else{pause();}};/**
 * Starts polling cycle.
 *
 * @api public
 */Polling.prototype.poll=function(){debug('polling');this.polling=true;this.doPoll();this.emit('poll');};/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */Polling.prototype.onData=function(data){var self=this;debug('polling got data %s',data);var callback=function callback(packet,index,total){// if its the first message we consider the transport open
if('opening'==self.readyState){self.onOpen();}// if its a close packet, we close the ongoing requests
if('close'==packet.type){self.onClose();return false;}// otherwise bypass onData and handle the message
self.onPacket(packet);};// decode payload
parser.decodePayload(data,this.socket.binaryType,callback);// if an event did not trigger closing
if('closed'!=this.readyState){// if we got data we're not polling
this.polling=false;this.emit('pollComplete');if('open'==this.readyState){this.poll();}else{debug('ignoring poll - transport state "%s"',this.readyState);}}};/**
 * For polling, send a close packet.
 *
 * @api private
 */Polling.prototype.doClose=function(){var self=this;function close(){debug('writing close packet');self.write([{type:'close'}]);}if('open'==this.readyState){debug('transport open - closing');close();}else{// in case we're trying to close while
// handshaking is in progress (GH-164)
debug('transport not open - deferring close');this.once('open',close);}};/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function callbackfn(){self.writable=true;self.emit('drain');};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn);});};/**
 * Generates uri for connection.
 *
 * @api private
 */Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?'https':'http';var port='';// cache busting is forced
if(false!==this.timestampRequests){query[this.timestampParam]=yeast();}if(!this.supportsBinary&&!query.sid){query.b64=1;}query=parseqs.encode(query);// avoid port if default for schema
if(this.port&&('https'==schema&&this.port!=443||'http'==schema&&this.port!=80)){port=':'+this.port;}// prepend ? to query
if(query.length){query='?'+query;}var ipv6=this.hostname.indexOf(':')!==-1;return schema+'://'+(ipv6?'['+this.hostname+']':this.hostname)+port+this.path+query;};},{"../transport":19,"component-inherit":13,"debug":14,"engine.io-parser":27,"parseqs":37,"xmlhttprequest-ssl":25,"yeast":45}],24:[function(_dereq_,module,exports){(function(global){/**
 * Module dependencies.
 */var Transport=_dereq_('../transport');var parser=_dereq_('engine.io-parser');var parseqs=_dereq_('parseqs');var inherit=_dereq_('component-inherit');var yeast=_dereq_('yeast');var debug=_dereq_('debug')('engine.io-client:websocket');var BrowserWebSocket=global.WebSocket||global.MozWebSocket;/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */var WebSocket=BrowserWebSocket;if(!WebSocket&&typeof window==='undefined'){try{WebSocket=_dereq_('ws');}catch(e){}}/**
 * Module exports.
 */module.exports=WS;/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */function WS(opts){var forceBase64=opts&&opts.forceBase64;if(forceBase64){this.supportsBinary=false;}this.perMessageDeflate=opts.perMessageDeflate;Transport.call(this,opts);}/**
 * Inherits from Transport.
 */inherit(WS,Transport);/**
 * Transport name.
 *
 * @api public
 */WS.prototype.name='websocket';/*
 * WebSockets support binary
 */WS.prototype.supportsBinary=true;/**
 * Opens socket.
 *
 * @api private
 */WS.prototype.doOpen=function(){if(!this.check()){// let probe timeout
return;}var self=this;var uri=this.uri();var protocols=void 0;var opts={agent:this.agent,perMessageDeflate:this.perMessageDeflate};// SSL options for Node.js client
opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;if(this.extraHeaders){opts.headers=this.extraHeaders;}this.ws=BrowserWebSocket?new WebSocket(uri):new WebSocket(uri,protocols,opts);if(this.ws.binaryType===undefined){this.supportsBinary=false;}if(this.ws.supports&&this.ws.supports.binary){this.supportsBinary=true;this.ws.binaryType='buffer';}else{this.ws.binaryType='arraybuffer';}this.addEventListeners();};/**
 * Adds event listeners to the socket
 *
 * @api private
 */WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen();};this.ws.onclose=function(){self.onClose();};this.ws.onmessage=function(ev){self.onData(ev.data);};this.ws.onerror=function(e){self.onError('websocket error',e);};};/**
 * Override `onData` to use a timer on iOS.
 * See: https://gist.github.com/mloughran/2052006
 *
 * @api private
 */if('undefined'!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data);},0);};}/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */WS.prototype.write=function(packets){var self=this;this.writable=false;// encodePacket efficient as it uses WS framing
// no need for encodePayload
var total=packets.length;for(var i=0,l=total;i<l;i++){(function(packet){parser.encodePacket(packet,self.supportsBinary,function(data){if(!BrowserWebSocket){// always create a new object (GH-437)
var opts={};if(packet.options){opts.compress=packet.options.compress;}if(self.perMessageDeflate){var len='string'==typeof data?global.Buffer.byteLength(data):data.length;if(len<self.perMessageDeflate.threshold){opts.compress=false;}}}//Sometimes the websocket has already been closed but the browser didn't
//have a chance of informing us about it yet, in that case send will
//throw an error
try{if(BrowserWebSocket){// TypeError is thrown when passing the second argument on Safari
self.ws.send(data);}else{self.ws.send(data,opts);}}catch(e){debug('websocket closed before onclose event');}--total||done();});})(packets[i]);}function done(){self.emit('flush');// fake drain
// defer to next tick to allow Socket to clear writeBuffer
setTimeout(function(){self.writable=true;self.emit('drain');},0);}};/**
 * Called upon close
 *
 * @api private
 */WS.prototype.onClose=function(){Transport.prototype.onClose.call(this);};/**
 * Closes socket.
 *
 * @api private
 */WS.prototype.doClose=function(){if(typeof this.ws!=='undefined'){this.ws.close();}};/**
 * Generates uri for connection.
 *
 * @api private
 */WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?'wss':'ws';var port='';// avoid port if default for schema
if(this.port&&('wss'==schema&&this.port!=443||'ws'==schema&&this.port!=80)){port=':'+this.port;}// append timestamp to URI
if(this.timestampRequests){query[this.timestampParam]=yeast();}// communicate binary support capabilities
if(!this.supportsBinary){query.b64=1;}query=parseqs.encode(query);// prepend ? to query
if(query.length){query='?'+query;}var ipv6=this.hostname.indexOf(':')!==-1;return schema+'://'+(ipv6?'['+this.hostname+']':this.hostname)+port+this.path+query;};/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */WS.prototype.check=function(){return!!WebSocket&&!('__initialize'in WebSocket&&this.name===WS.prototype.name);};}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{"../transport":19,"component-inherit":13,"debug":14,"engine.io-parser":27,"parseqs":37,"ws":undefined,"yeast":45}],25:[function(_dereq_,module,exports){// browser shim for xmlhttprequest module
var hasCORS=_dereq_('has-cors');module.exports=function(opts){var xdomain=opts.xdomain;// scheme must be same when usign XDomainRequest
// http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
var xscheme=opts.xscheme;// XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
// https://github.com/Automattic/engine.io-client/pull/217
var enablesXDR=opts.enablesXDR;// XMLHttpRequest can be disabled on IE
try{if('undefined'!=typeof XMLHttpRequest&&(!xdomain||hasCORS)){return new XMLHttpRequest();}}catch(e){}// Use XDomainRequest for IE8 if enablesXDR is true
// because loading bar keeps flashing when using jsonp-polling
// https://github.com/yujiosaka/socke.io-ie8-loading-example
try{if('undefined'!=typeof XDomainRequest&&!xscheme&&enablesXDR){return new XDomainRequest();}}catch(e){}if(!xdomain){try{return new ActiveXObject('Microsoft.XMLHTTP');}catch(e){}}};},{"has-cors":31}],26:[function(_dereq_,module,exports){/**
 * Expose `Emitter`.
 */module.exports=Emitter;/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */function Emitter(obj){if(obj)return mixin(obj);};/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key];}return obj;}/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this;};/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments);}on.fn=fn;this.on(event,on);return this;};/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};// all
if(0==arguments.length){this._callbacks={};return this;}// specific event
var callbacks=this._callbacks[event];if(!callbacks)return this;// remove all handlers
if(1==arguments.length){delete this._callbacks[event];return this;}// remove specific handler
var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break;}}return this;};/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args);}}return this;};/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[];};/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length;};},{}],27:[function(_dereq_,module,exports){(function(global){/**
 * Module dependencies.
 */var keys=_dereq_('./keys');var hasBinary=_dereq_('has-binary');var sliceBuffer=_dereq_('arraybuffer.slice');var base64encoder=_dereq_('base64-arraybuffer');var after=_dereq_('after');var utf8=_dereq_('utf8');/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */var isAndroid=navigator.userAgent.match(/Android/i);/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */var isPhantomJS=/PhantomJS/i.test(navigator.userAgent);/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */var dontSendBlobs=isAndroid||isPhantomJS;/**
 * Current protocol version.
 */exports.protocol=3;/**
 * Packet types.
 */var packets=exports.packets={open:0// non-ws
,close:1// non-ws
,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);/**
 * Premade error packet.
 */var err={type:'error',data:'parser error'};/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */var Blob=_dereq_('blob');/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */exports.encodePacket=function(packet,supportsBinary,utf8encode,callback){if('function'==typeof supportsBinary){callback=supportsBinary;supportsBinary=false;}if('function'==typeof utf8encode){callback=utf8encode;utf8encode=null;}var data=packet.data===undefined?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&&data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback);}else if(Blob&&data instanceof global.Blob){return encodeBlob(packet,supportsBinary,callback);}// might be an object with { base64: true, data: dataAsBase64String }
if(data&&data.base64){return encodeBase64Object(packet,callback);}// Sending data as a utf-8 string
var encoded=packets[packet.type];// data fragment is optional
if(undefined!==packet.data){encoded+=utf8encode?utf8.encode(String(packet.data)):String(packet.data);}return callback(''+encoded);};function encodeBase64Object(packet,callback){// packet data is an object { base64: true, data: dataAsBase64String }
var message='b'+exports.packets[packet.type]+packet.data.data;return callback(message);}/**
 * Encode packet helpers for binary types
 */function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback);}var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i<contentArray.length;i++){resultBuffer[i+1]=contentArray[i];}return callback(resultBuffer.buffer);}function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback);}var fr=new FileReader();fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,true,callback);};return fr.readAsArrayBuffer(packet.data);}function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback);}if(dontSendBlobs){return encodeBlobAsArrayBuffer(packet,supportsBinary,callback);}var length=new Uint8Array(1);length[0]=packets[packet.type];var blob=new Blob([length.buffer,packet.data]);return callback(blob);}/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */exports.encodeBase64Packet=function(packet,callback){var message='b'+exports.packets[packet.type];if(Blob&&packet.data instanceof global.Blob){var fr=new FileReader();fr.onload=function(){var b64=fr.result.split(',')[1];callback(message+b64);};return fr.readAsDataURL(packet.data);}var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data));}catch(e){// iPhone Safari doesn't let you apply with typed arrays
var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i];}b64data=String.fromCharCode.apply(null,basic);}message+=global.btoa(b64data);return callback(message);};/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */exports.decodePacket=function(data,binaryType,utf8decode){// String data
if(typeof data=='string'||data===undefined){if(data.charAt(0)=='b'){return exports.decodeBase64Packet(data.substr(1),binaryType);}if(utf8decode){try{data=utf8.decode(data);}catch(e){return err;}}var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err;}if(data.length>1){return{type:packetslist[type],data:data.substring(1)};}else{return{type:packetslist[type]};}}var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(Blob&&binaryType==='blob'){rest=new Blob([rest]);}return{type:packetslist[type],data:rest};};/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}};}var data=base64encoder.decode(msg.substr(1));if(binaryType==='blob'&&Blob){data=new Blob([data]);}return{type:type,data:data};};/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary=='function'){callback=supportsBinary;supportsBinary=null;}var isBinary=hasBinary(packets);if(supportsBinary&&isBinary){if(Blob&&!dontSendBlobs){return exports.encodePayloadAsBlob(packets,callback);}return exports.encodePayloadAsArrayBuffer(packets,callback);}if(!packets.length){return callback('0:');}function setLengthHeader(message){return message.length+':'+message;}function encodeOne(packet,doneCallback){exports.encodePacket(packet,!isBinary?false:supportsBinary,true,function(message){doneCallback(null,setLengthHeader(message));});}map(packets,encodeOne,function(err,results){return callback(results.join(''));});};/**
 * Async array map using after
 */function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function eachWithIndex(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result);});};for(var i=0;i<ary.length;i++){eachWithIndex(i,ary[i],next);}}/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */exports.decodePayload=function(data,binaryType,callback){if(typeof data!='string'){return exports.decodePayloadAsBinary(data,binaryType,callback);}if(typeof binaryType==='function'){callback=binaryType;binaryType=null;}var packet;if(data==''){// parser error - ignoring payload
return callback(err,0,1);}var length='',n,msg;for(var i=0,l=data.length;i<l;i++){var chr=data.charAt(i);if(':'!=chr){length+=chr;}else{if(''==length||length!=(n=Number(length))){// parser error - ignoring payload
return callback(err,0,1);}msg=data.substr(i+1,n);if(length!=msg.length){// parser error - ignoring payload
return callback(err,0,1);}if(msg.length){packet=exports.decodePacket(msg,binaryType,true);if(err.type==packet.type&&err.data==packet.data){// parser error in individual packet - ignoring payload
return callback(err,0,1);}var ret=callback(packet,i+n,l);if(false===ret)return;}// advance cursor
i+=n;length='';}}if(length!=''){// parser error - ignoring payload
return callback(err,0,1);}};/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0));}function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(data){return doneCallback(null,data);});}map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p==='string'){len=p.length;}else{len=p.byteLength;}return acc+len.toString().length+len+2;// string/binary identifier + separator = 2
},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p==='string';var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i<p.length;i++){view[i]=p.charCodeAt(i);}ab=view.buffer;}if(isString){// not true binary
resultArray[bufferIndex++]=0;}else{// true binary
resultArray[bufferIndex++]=1;}var lenStr=ab.byteLength.toString();for(var i=0;i<lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i]);}resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i<view.length;i++){resultArray[bufferIndex++]=view[i];}});return callback(resultArray.buffer);});};/**
 * Encode as Blob
 */exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded==='string'){var view=new Uint8Array(encoded.length);for(var i=0;i<encoded.length;i++){view[i]=encoded.charCodeAt(i);}encoded=view.buffer;binaryIdentifier[0]=0;}var len=encoded instanceof ArrayBuffer?encoded.byteLength:encoded.size;var lenStr=len.toString();var lengthAry=new Uint8Array(lenStr.length+1);for(var i=0;i<lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i]);}lengthAry[lenStr.length]=255;if(Blob){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob);}});}map(packets,encodeOne,function(err,results){return callback(new Blob(results));});};/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType==='function'){callback=binaryType;binaryType=null;}var bufferTail=data;var buffers=[];var numberTooLong=false;while(bufferTail.byteLength>0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]===0;var msgLength='';for(var i=1;;i++){if(tailArray[i]==255)break;if(msgLength.length>310){numberTooLong=true;break;}msgLength+=tailArray[i];}if(numberTooLong)return callback(err,0,1);bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg));}catch(e){// iPhone Safari doesn't let you apply to typed arrays
var typed=new Uint8Array(msg);msg='';for(var i=0;i<typed.length;i++){msg+=String.fromCharCode(typed[i]);}}}buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength);}var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType,true),i,total);});};}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{"./keys":28,"after":6,"arraybuffer.slice":7,"base64-arraybuffer":9,"blob":10,"has-binary":29,"utf8":44}],28:[function(_dereq_,module,exports){/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i);}}return arr;};},{}],29:[function(_dereq_,module,exports){(function(global){/*
 * Module requirements.
 */var isArray=_dereq_('isarray');/**
 * Module exports.
 */module.exports=hasBinary;/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true;}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true;}}}else if(obj&&'object'==(typeof obj==="undefined"?"undefined":_typeof(obj))){if(obj.toJSON){obj=obj.toJSON();}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true;}}}return false;}return _hasBinary(data);}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{"isarray":33}],30:[function(_dereq_,module,exports){(function(global){/*
 * Module requirements.
 */var isArray=_dereq_('isarray');/**
 * Module exports.
 */module.exports=hasBinary;/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true;}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true;}}}else if(obj&&'object'==(typeof obj==="undefined"?"undefined":_typeof(obj))){// see: https://github.com/Automattic/has-binary/pull/4
if(obj.toJSON&&'function'==typeof obj.toJSON){obj=obj.toJSON();}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true;}}}return false;}return _hasBinary(data);}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{"isarray":33}],31:[function(_dereq_,module,exports){/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */try{module.exports=typeof XMLHttpRequest!=='undefined'&&'withCredentials'in new XMLHttpRequest();}catch(err){// if XMLHttp support is disabled in IE then it will throw
// when trying to create
module.exports=false;}},{}],32:[function(_dereq_,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i;}return-1;};},{}],33:[function(_dereq_,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)=='[object Array]';};},{}],34:[function(_dereq_,module,exports){(function(global){/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */;(function(){// Detect the `define` function exposed by asynchronous module loaders. The
// strict `define` check is necessary for compatibility with `r.js`.
var isLoader=typeof define==="function"&&define.amd;// A set of types used to distinguish objects from primitives.
var objectTypes={"function":true,"object":true};// Detect the `exports` object exposed by CommonJS implementations.
var freeExports=objectTypes[typeof exports==="undefined"?"undefined":_typeof(exports)]&&exports&&!exports.nodeType&&exports;// Use the `global` object exposed by Node (including Browserify via
// `insert-module-globals`), Narwhal, and Ringo as the default context,
// and the `window` object in browsers. Rhino exports a `global` function
// instead.
var root=objectTypes[typeof window==="undefined"?"undefined":_typeof(window)]&&window||this,freeGlobal=freeExports&&objectTypes[typeof module==="undefined"?"undefined":_typeof(module)]&&module&&!module.nodeType&&(typeof global==="undefined"?"undefined":_typeof(global))=="object"&&global;if(freeGlobal&&(freeGlobal["global"]===freeGlobal||freeGlobal["window"]===freeGlobal||freeGlobal["self"]===freeGlobal)){root=freeGlobal;}// Public: Initializes JSON 3 using the given `context` object, attaching the
// `stringify` and `parse` functions to the specified `exports` object.
function runInContext(context,exports){context||(context=root["Object"]());exports||(exports=root["Object"]());// Native constructor aliases.
var Number=context["Number"]||root["Number"],String=context["String"]||root["String"],Object=context["Object"]||root["Object"],Date=context["Date"]||root["Date"],SyntaxError=context["SyntaxError"]||root["SyntaxError"],TypeError=context["TypeError"]||root["TypeError"],Math=context["Math"]||root["Math"],nativeJSON=context["JSON"]||root["JSON"];// Delegate to the native `stringify` and `parse` implementations.
if((typeof nativeJSON==="undefined"?"undefined":_typeof(nativeJSON))=="object"&&nativeJSON){exports.stringify=nativeJSON.stringify;exports.parse=nativeJSON.parse;}// Convenience aliases.
var objectProto=Object.prototype,getClass=objectProto.toString,_isProperty,_forEach,undef;// Test the `Date#getUTC*` methods. Based on work by @Yaffle.
var isExtended=new Date(-3509827334573292);try{// The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
// results for certain dates in Opera >= 10.53.
isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&// Safari < 2.0.2 stores the internal millisecond time value correctly,
// but clips the values returned by the date methods to the range of
// signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708;}catch(exception){}// Internal: Determines whether the native `JSON.stringify` and `parse`
// implementations are spec-compliant. Based on work by Ken Snyder.
function has(name){if(has[name]!==undef){// Return cached feature test result.
return has[name];}var isSupported;if(name=="bug-string-char-index"){// IE <= 7 doesn't support accessing string characters using square
// bracket notation. IE 8 only supports this for primitives.
isSupported="a"[0]!="a";}else if(name=="json"){// Indicates whether both `JSON.stringify` and `JSON.parse` are
// supported.
isSupported=has("json-stringify")&&has("json-parse");}else{var value,serialized="{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}";// Test `JSON.stringify`.
if(name=="json-stringify"){var stringify=exports.stringify,stringifySupported=typeof stringify=="function"&&isExtended;if(stringifySupported){// A test function object with a custom `toJSON` method.
(value=function value(){return 1;}).toJSON=value;try{stringifySupported=// Firefox 3.1b1 and b2 serialize string, number, and boolean
// primitives as object literals.
stringify(0)==="0"&&// FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
// literals.
stringify(new Number())==="0"&&stringify(new String())=='""'&&// FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
// does not define a canonical JSON representation (this applies to
// objects with `toJSON` properties as well, *unless* they are nested
// within an object or array).
stringify(getClass)===undef&&// IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
// FF 3.1b3 pass this test.
stringify(undef)===undef&&// Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
// respectively, if the value is omitted entirely.
stringify()===undef&&// FF 3.1b1, 2 throw an error if the given value is not a number,
// string, array, object, Boolean, or `null` literal. This applies to
// objects with custom `toJSON` methods as well, unless they are nested
// inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
// methods entirely.
stringify(value)==="1"&&stringify([value])=="[1]"&&// Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
// `"[null]"`.
stringify([undef])=="[null]"&&// YUI 3.0.0b1 fails to serialize `null` literals.
stringify(null)=="null"&&// FF 3.1b1, 2 halts serialization if an array contains a function:
// `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
// elides non-JSON values from objects and arrays, unless they
// define custom `toJSON` methods.
stringify([undef,getClass,null])=="[null,null,null]"&&// Simple serialization test. FF 3.1b1 uses Unicode escape sequences
// where character escape codes are expected (e.g., `\b` => `\u0008`).
stringify({"a":[value,true,false,null,"\x00\b\n\f\r\t"]})==serialized&&// FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
stringify(null,value)==="1"&&stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&// JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
// serialize extended years.
stringify(new Date(-8.64e15))=='"-271821-04-20T00:00:00.000Z"'&&// The milliseconds are optional in ES 5, but required in 5.1.
stringify(new Date(8.64e15))=='"+275760-09-13T00:00:00.000Z"'&&// Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
// four-digit years instead of six-digit years. Credits: @Yaffle.
stringify(new Date(-621987552e5))=='"-000001-01-01T00:00:00.000Z"'&&// Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
// values less than 1000. Credits: @Yaffle.
stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"';}catch(exception){stringifySupported=false;}}isSupported=stringifySupported;}// Test `JSON.parse`.
if(name=="json-parse"){var parse=exports.parse;if(typeof parse=="function"){try{// FF 3.1b1, b2 will throw an exception if a bare literal is provided.
// Conforming implementations should also coerce the initial argument to
// a string prior to parsing.
if(parse("0")===0&&!parse(false)){// Simple parsing test.
value=parse(serialized);var parseSupported=value["a"].length==5&&value["a"][0]===1;if(parseSupported){try{// Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
parseSupported=!parse('"\t"');}catch(exception){}if(parseSupported){try{// FF 4.0 and 4.0.1 allow leading `+` signs and leading
// decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
// certain octal literals.
parseSupported=parse("01")!==1;}catch(exception){}}if(parseSupported){try{// FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
// points. These environments, along with FF 3.1b1 and 2,
// also allow trailing commas in JSON objects and arrays.
parseSupported=parse("1.")!==1;}catch(exception){}}}}}catch(exception){parseSupported=false;}}isSupported=parseSupported;}}return has[name]=!!isSupported;}if(!has("json")){// Common `[[Class]]` name aliases.
var functionClass="[object Function]",dateClass="[object Date]",numberClass="[object Number]",stringClass="[object String]",arrayClass="[object Array]",booleanClass="[object Boolean]";// Detect incomplete support for accessing string characters by index.
var charIndexBuggy=has("bug-string-char-index");// Define additional utility methods if the `Date` methods are buggy.
if(!isExtended){var floor=Math.floor;// A mapping between the months of the year and the number of days between
// January 1st and the first of the respective month.
var Months=[0,31,59,90,120,151,181,212,243,273,304,334];// Internal: Calculates the number of days between the Unix epoch and the
// first day of the given month.
var getDay=function getDay(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400);};}// Internal: Determines if a property is a direct property of the given
// object. Delegates to the native `Object#hasOwnProperty` method.
if(!(_isProperty=objectProto.hasOwnProperty)){_isProperty=function isProperty(property){var members={},constructor;if((members.__proto__=null,members.__proto__={// The *proto* property cannot be set multiple times in recent
// versions of Firefox and SeaMonkey.
"toString":1},members).toString!=getClass){// Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
// supports the mutable *proto* property.
_isProperty=function isProperty(property){// Capture and break the object's prototype chain (see section 8.6.2
// of the ES 5.1 spec). The parenthesized expression prevents an
// unsafe transformation by the Closure Compiler.
var original=this.__proto__,result=property in(this.__proto__=null,this);// Restore the original prototype chain.
this.__proto__=original;return result;};}else{// Capture a reference to the top-level `Object` constructor.
constructor=members.constructor;// Use the `constructor` property to simulate `Object#hasOwnProperty` in
// other environments.
_isProperty=function isProperty(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property]);};}members=null;return _isProperty.call(this,property);};}// Internal: Normalizes the `for...in` iteration algorithm across
// environments. Each enumerated key is yielded to a `callback` function.
_forEach=function forEach(object,callback){var size=0,Properties,members,property;// Tests for bugs in the current environment's `for...in` algorithm. The
// `valueOf` property inherits the non-enumerable flag from
// `Object.prototype` in older versions of IE, Netscape, and Mozilla.
(Properties=function Properties(){this.valueOf=0;}).prototype.valueOf=0;// Iterate over a new instance of the `Properties` class.
members=new Properties();for(property in members){// Ignore all properties inherited from `Object.prototype`.
if(_isProperty.call(members,property)){size++;}}Properties=members=null;// Normalize the iteration algorithm.
if(!size){// A list of non-enumerable properties inherited from `Object.prototype`.
members=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];// IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
// properties.
_forEach=function forEach(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!="function"&&objectTypes[_typeof(object.hasOwnProperty)]&&object.hasOwnProperty||_isProperty;for(property in object){// Gecko <= 1.0 enumerates the `prototype` property of functions under
// certain conditions; IE does not.
if(!(isFunction&&property=="prototype")&&hasProperty.call(object,property)){callback(property);}}// Manually invoke the callback for each non-enumerable property.
for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property)){}};}else if(size==2){// Safari <= 2.0.4 enumerates shadowed properties twice.
_forEach=function forEach(object,callback){// Create a set of iterated properties.
var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){// Store each property name to prevent double enumeration. The
// `prototype` property of functions is not enumerated due to cross-
// environment inconsistencies.
if(!(isFunction&&property=="prototype")&&!_isProperty.call(members,property)&&(members[property]=1)&&_isProperty.call(object,property)){callback(property);}}};}else{// No bugs detected; use the standard `for...in` algorithm.
_forEach=function forEach(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property=="prototype")&&_isProperty.call(object,property)&&!(isConstructor=property==="constructor")){callback(property);}}// Manually invoke the callback for the `constructor` property due to
// cross-environment inconsistencies.
if(isConstructor||_isProperty.call(object,property="constructor")){callback(property);}};}return _forEach(object,callback);};// Public: Serializes a JavaScript `value` as a JSON string. The optional
// `filter` argument may specify either a function that alters how object and
// array members are serialized, or an array of strings and numbers that
// indicates which properties should be serialized. The optional `width`
// argument may be either a string or number that specifies the indentation
// level of the output.
if(!has("json-stringify")){// Internal: A map of control characters and their escaped equivalents.
var Escapes={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"};// Internal: Converts `value` into a zero-padded string such that its
// length is at least equal to `width`. The `width` must be <= 6.
var leadingZeroes="000000";var toPaddedString=function toPaddedString(width,value){// The `|| 0` expression is necessary to work around a bug in
// Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
return(leadingZeroes+(value||0)).slice(-width);};// Internal: Double-quotes a string `value`, replacing all ASCII control
// characters (characters with code unit values between 0 and 31) with
// their escaped equivalents. This is an implementation of the
// `Quote(value)` operation defined in ES 5.1 section 15.12.3.
var unicodePrefix="\\u00";var quote=function quote(value){var result='"',index=0,length=value.length,useCharIndex=!charIndexBuggy||length>10;var symbols=useCharIndex&&(charIndexBuggy?value.split(""):value);for(;index<length;index++){var charCode=value.charCodeAt(index);// If the character is a control character, append its Unicode or
// shorthand escape sequence; otherwise, append the character as-is.
switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break;}result+=useCharIndex?symbols[index]:value.charAt(index);}}return result+'"';};// Internal: Recursively serializes an object. Implements the
// `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
var serialize=function serialize(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{// Necessary for host object support.
value=object[property];}catch(exception){}if((typeof value==="undefined"?"undefined":_typeof(value))=="object"&&value){className=getClass.call(value);if(className==dateClass&&!_isProperty.call(value,"toJSON")){if(value>-1/0&&value<1/0){// Dates are serialized according to the `Date#toJSON` method
// specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
// for the ISO 8601 date time string format.
if(getDay){// Manually compute the year, month, date, hours, minutes,
// seconds, and milliseconds if the `getUTC*` methods are
// buggy. Adapted from @Yaffle's `date-shim` project.
date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++){}for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++){}date=1+date-getDay(year,month);// The `time` value specifies the time within the day (see ES
// 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
// to compute `A modulo B`, as the `%` operator does not
// correspond to the `modulo` operation for negative numbers.
time=(value%864e5+864e5)%864e5;// The hours, minutes, seconds, and milliseconds are obtained by
// decomposing the time within the day. See section 15.9.1.10.
hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3;}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds();}// Serialize extended years correctly.
value=(year<=0||year>=1e4?(year<0?"-":"+")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+"-"+toPaddedString(2,month+1)+"-"+toPaddedString(2,date)+// Months, dates, hours, minutes, and seconds should have two
// digits; milliseconds should have three.
"T"+toPaddedString(2,hours)+":"+toPaddedString(2,minutes)+":"+toPaddedString(2,seconds)+// Milliseconds are optional in ES 5.0, but required in 5.1.
"."+toPaddedString(3,milliseconds)+"Z";}else{value=null;}}else if(typeof value.toJSON=="function"&&(className!=numberClass&&className!=stringClass&&className!=arrayClass||_isProperty.call(value,"toJSON"))){// Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
// `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
// ignores all `toJSON` methods on these objects unless they are
// defined directly on an instance.
value=value.toJSON(property);}}if(callback){// If a replacement function was provided, call it to obtain the value
// for serialization.
value=callback.call(object,property,value);}if(value===null){return"null";}className=getClass.call(value);if(className==booleanClass){// Booleans are represented literally.
return""+value;}else if(className==numberClass){// JSON numbers must be finite. `Infinity` and `NaN` are serialized as
// `"null"`.
return value>-1/0&&value<1/0?""+value:"null";}else if(className==stringClass){// Strings are double-quoted and escaped.
return quote(""+value);}// Recursively serialize objects and arrays.
if((typeof value==="undefined"?"undefined":_typeof(value))=="object"){// Check for cyclic structures. This is a linear search; performance
// is inversely proportional to the number of unique nested objects.
for(length=stack.length;length--;){if(stack[length]===value){// Cyclic structures cannot be serialized by `JSON.stringify`.
throw TypeError();}}// Add the object to the stack of traversed objects.
stack.push(value);results=[];// Save the current indentation level and indent one additional level.
prefix=indentation;indentation+=whitespace;if(className==arrayClass){// Recursively serialize array elements.
for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?"null":element);}result=results.length?whitespace?"[\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"]":"["+results.join(",")+"]":"[]";}else{// Recursively serialize object members. Members are selected from
// either a user-specified list of property names, or the object
// itself.
_forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){// According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
// is not the empty string, let `member` {quote(property) + ":"}
// be the concatenation of `member` and the `space` character."
// The "`space` character" refers to the literal space
// character, not the `space` {width} argument provided to
// `JSON.stringify`.
results.push(quote(property)+":"+(whitespace?" ":"")+element);}});result=results.length?whitespace?"{\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"}":"{"+results.join(",")+"}":"{}";}// Remove the object from the traversed object stack.
stack.pop();return result;}};// Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
exports.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(objectTypes[typeof filter==="undefined"?"undefined":_typeof(filter)]&&filter){if((className=getClass.call(filter))==functionClass){callback=filter;}else if(className==arrayClass){// Convert the property names array into a makeshift set.
properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],(className=getClass.call(value),className==stringClass||className==numberClass)&&(properties[value]=1)){}}}if(width){if((className=getClass.call(width))==numberClass){// Convert the `width` to an integer and create a string containing
// `width` number of space characters.
if((width-=width%1)>0){for(whitespace="",width>10&&(width=10);whitespace.length<width;whitespace+=" "){}}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10);}}// Opera <= 7.54u2 discards the values associated with empty string keys
// (`""`) only if they are used directly within an object member list
// (e.g., `!("" in { "": 1})`).
return serialize("",(value={},value[""]=source,value),callback,properties,whitespace,"",[]);};}// Public: Parses a JSON source string.
if(!has("json-parse")){var fromCharCode=String.fromCharCode;// Internal: A map of escaped control characters and their unescaped
// equivalents.
var Unescapes={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"};// Internal: Stores the parser state.
var Index,Source;// Internal: Resets the parser state and throws a `SyntaxError`.
var abort=function abort(){Index=Source=null;throw SyntaxError();};// Internal: Returns the next token, or `"$"` if the parser has reached
// the end of the source string. A token may be a string, number, `null`
// literal, or Boolean literal.
var lex=function lex(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:// Skip whitespace tokens, including tabs, carriage returns, line
// feeds, and space characters.
Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:// Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
// the current position.
value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:// `"` delimits a JSON string; advance to the next character and
// begin parsing the string. String tokens are prefixed with the
// sentinel `@` character to distinguish them from punctuators and
// end-of-string tokens.
for(value="@",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){// Unescaped ASCII control characters (those with a code unit
// less than the space character) are not permitted.
abort();}else if(charCode==92){// A reverse solidus (`\`) marks the beginning of an escaped
// control character (including `"`, `\`, and `/`) or Unicode
// escape sequence.
charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:// Revive escaped control characters.
value+=Unescapes[charCode];Index++;break;case 117:// `\u` marks the beginning of a Unicode escape sequence.
// Advance to the first character and validate the
// four-digit code point.
begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);// A valid sequence comprises four hexdigits (case-
// insensitive) that form a single hexadecimal value.
if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){// Invalid Unicode escape sequence.
abort();}}// Revive the escaped character.
value+=fromCharCode("0x"+source.slice(begin,Index));break;default:// Invalid escape sequence.
abort();}}else{if(charCode==34){// An unescaped double-quote character marks the end of the
// string.
break;}charCode=source.charCodeAt(Index);begin=Index;// Optimize for the common case where a string is valid.
while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index);}// Append the string as-is.
value+=source.slice(begin,Index);}}if(source.charCodeAt(Index)==34){// Advance to the next character and return the revived string.
Index++;return value;}// Unterminated string.
abort();default:// Parse numbers and literals.
begin=Index;// Advance past the negative sign, if one is specified.
if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index);}// Parse an integer or floating-point value.
if(charCode>=48&&charCode<=57){// Leading zeroes are interpreted as octal literals.
if(charCode==48&&(charCode=source.charCodeAt(Index+1),charCode>=48&&charCode<=57)){// Illegal octal literal.
abort();}isSigned=false;// Parse the integer component.
for(;Index<length&&(charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57);Index++){}// Floats cannot contain a leading decimal point; however, this
// case is already accounted for by the parser.
if(source.charCodeAt(Index)==46){position=++Index;// Parse the decimal component.
for(;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++){}if(position==Index){// Illegal trailing decimal.
abort();}Index=position;}// Parse exponents. The `e` denoting the exponent is
// case-insensitive.
charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);// Skip past the sign following the exponent, if one is
// specified.
if(charCode==43||charCode==45){Index++;}// Parse the exponential component.
for(position=Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++){}if(position==Index){// Illegal empty exponent.
abort();}Index=position;}// Coerce the parsed value to a JavaScript number.
return+source.slice(begin,Index);}// A negative sign may only precede numbers.
if(isSigned){abort();}// `true`, `false`, and `null` literals.
if(source.slice(Index,Index+4)=="true"){Index+=4;return true;}else if(source.slice(Index,Index+5)=="false"){Index+=5;return false;}else if(source.slice(Index,Index+4)=="null"){Index+=4;return null;}// Unrecognized token.
abort();}}// Return the sentinel `$` character if the parser has reached the end
// of the source string.
return"$";};// Internal: Parses a JSON `value` token.
var get=function get(value){var results,hasMembers;if(value=="$"){// Unexpected end of input.
abort();}if(typeof value=="string"){if((charIndexBuggy?value.charAt(0):value[0])=="@"){// Remove the sentinel `@` character.
return value.slice(1);}// Parse object and array literals.
if(value=="["){// Parses a JSON array, returning a new JavaScript array.
results=[];for(;;hasMembers||(hasMembers=true)){value=lex();// A closing square bracket marks the end of the array literal.
if(value=="]"){break;}// If the array literal contains elements, the current token
// should be a comma separating the previous element from the
// next.
if(hasMembers){if(value==","){value=lex();if(value=="]"){// Unexpected trailing `,` in array literal.
abort();}}else{// A `,` must separate each array element.
abort();}}// Elisions and leading commas are not permitted.
if(value==","){abort();}results.push(get(value));}return results;}else if(value=="{"){// Parses a JSON object, returning a new JavaScript object.
results={};for(;;hasMembers||(hasMembers=true)){value=lex();// A closing curly brace marks the end of the object literal.
if(value=="}"){break;}// If the object literal contains members, the current token
// should be a comma separator.
if(hasMembers){if(value==","){value=lex();if(value=="}"){// Unexpected trailing `,` in object literal.
abort();}}else{// A `,` must separate each object member.
abort();}}// Leading commas are not permitted, object property names must be
// double-quoted strings, and a `:` must separate each property
// name and value.
if(value==","||typeof value!="string"||(charIndexBuggy?value.charAt(0):value[0])!="@"||lex()!=":"){abort();}results[value.slice(1)]=get(lex());}return results;}// Unexpected token encountered.
abort();}return value;};// Internal: Updates a traversed object member.
var update=function update(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property];}else{source[property]=element;}};// Internal: Recursively traverses a parsed JSON object, invoking the
// `callback` function for each value. This is an implementation of the
// `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
var walk=function walk(source,property,callback){var value=source[property],length;if((typeof value==="undefined"?"undefined":_typeof(value))=="object"&&value){// `forEach` can't be used to traverse an array in Opera <= 8.54
// because its `Object#hasOwnProperty` implementation returns `false`
// for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback);}}else{_forEach(value,function(property){update(value,property,callback);});}}return callback.call(source,property,value);};// Public: `JSON.parse`. See ES 5.1 section 15.12.2.
exports.parse=function(source,callback){var result,value;Index=0;Source=""+source;result=get(lex());// If a JSON string contains multiple tokens, it is invalid.
if(lex()!="$"){abort();}// Reset the parser state.
Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[""]=result,value),"",callback):result;};}}exports["runInContext"]=runInContext;return exports;}if(freeExports&&!isLoader){// Export for CommonJS environments.
runInContext(root,freeExports);}else{// Export for web browsers and JavaScript engines.
var nativeJSON=root.JSON,previousJSON=root["JSON3"],isRestored=false;var JSON3=runInContext(root,root["JSON3"]={// Public: Restores the original value of the global `JSON` object and
// returns a reference to the `JSON3` object.
"noConflict":function noConflict(){if(!isRestored){isRestored=true;root.JSON=nativeJSON;root["JSON3"]=previousJSON;nativeJSON=previousJSON=null;}return JSON3;}});root.JSON={"parse":JSON3.parse,"stringify":JSON3.stringify};}// Export for asynchronous module loaders.
if(isLoader){define(function(){return JSON3;});}}).call(this);}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{}],35:[function(_dereq_,module,exports){/**
 * Helpers.
 */var s=1000;var m=s*60;var h=m*60;var d=h*24;var y=d*365.25;/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @return {String|Number}
 * @api public
 */module.exports=function(val,options){options=options||{};if('string'==typeof val)return parse(val);return options.long?long(val):short(val);};/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */function parse(str){str=''+str;if(str.length>10000)return;var match=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);var type=(match[2]||'ms').toLowerCase();switch(type){case'years':case'year':case'yrs':case'yr':case'y':return n*y;case'days':case'day':case'd':return n*d;case'hours':case'hour':case'hrs':case'hr':case'h':return n*h;case'minutes':case'minute':case'mins':case'min':case'm':return n*m;case'seconds':case'second':case'secs':case'sec':case's':return n*s;case'milliseconds':case'millisecond':case'msecs':case'msec':case'ms':return n;}}/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */function short(ms){if(ms>=d)return Math.round(ms/d)+'d';if(ms>=h)return Math.round(ms/h)+'h';if(ms>=m)return Math.round(ms/m)+'m';if(ms>=s)return Math.round(ms/s)+'s';return ms+'ms';}/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */function long(ms){return plural(ms,d,'day')||plural(ms,h,'hour')||plural(ms,m,'minute')||plural(ms,s,'second')||ms+' ms';}/**
 * Pluralization helper.
 */function plural(ms,n,name){if(ms<n)return;if(ms<n*1.5)return Math.floor(ms/n)+' '+name;return Math.ceil(ms/n)+' '+name+'s';}},{}],36:[function(_dereq_,module,exports){(function(global){/**
 * JSON parse.
 *
 * @see Based on jQuery#parseJSON (MIT) and JSON2
 * @api private
 */var rvalidchars=/^[\],:{}\s]*$/;var rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g;var rtrimLeft=/^\s+/;var rtrimRight=/\s+$/;module.exports=function parsejson(data){if('string'!=typeof data||!data){return null;}data=data.replace(rtrimLeft,'').replace(rtrimRight,'');// Attempt to parse using the native JSON parser first
if(global.JSON&&JSON.parse){return JSON.parse(data);}if(rvalidchars.test(data.replace(rvalidescape,'@').replace(rvalidtokens,']').replace(rvalidbraces,''))){return new Function('return '+data)();}};}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{}],37:[function(_dereq_,module,exports){/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */exports.encode=function(obj){var str='';for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+='&';str+=encodeURIComponent(i)+'='+encodeURIComponent(obj[i]);}}return str;};/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */exports.decode=function(qs){var qry={};var pairs=qs.split('&');for(var i=0,l=pairs.length;i<l;i++){var pair=pairs[i].split('=');qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]);}return qry;};},{}],38:[function(_dereq_,module,exports){/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor'];module.exports=function parseuri(str){var src=str,b=str.indexOf('['),e=str.indexOf(']');if(b!=-1&&e!=-1){str=str.substring(0,b)+str.substring(b,e).replace(/:/g,';')+str.substring(e,str.length);}var m=re.exec(str||''),uri={},i=14;while(i--){uri[parts[i]]=m[i]||'';}if(b!=-1&&e!=-1){uri.source=src;uri.host=uri.host.substring(1,uri.host.length-1).replace(/;/g,':');uri.authority=uri.authority.replace('[','').replace(']','').replace(/;/g,':');uri.ipv6uri=true;}return uri;};},{}],39:[function(_dereq_,module,exports){(function(global){/*global Blob,File*//**
 * Module requirements
 */var isArray=_dereq_('isarray');var isBuf=_dereq_('./is-buffer');/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */exports.deconstructPacket=function(packet){var buffers=[];var packetData=packet.data;function _deconstructPacket(data){if(!data)return data;if(isBuf(data)){var placeholder={_placeholder:true,num:buffers.length};buffers.push(data);return placeholder;}else if(isArray(data)){var newData=new Array(data.length);for(var i=0;i<data.length;i++){newData[i]=_deconstructPacket(data[i]);}return newData;}else if('object'==(typeof data==="undefined"?"undefined":_typeof(data))&&!(data instanceof Date)){var newData={};for(var key in data){newData[key]=_deconstructPacket(data[key]);}return newData;}return data;}var pack=packet;pack.data=_deconstructPacket(packetData);pack.attachments=buffers.length;// number of binary 'attachments'
return{packet:pack,buffers:buffers};};/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */exports.reconstructPacket=function(packet,buffers){var curPlaceHolder=0;function _reconstructPacket(data){if(data&&data._placeholder){var buf=buffers[data.num];// appropriate buffer (should be natural order anyway)
return buf;}else if(isArray(data)){for(var i=0;i<data.length;i++){data[i]=_reconstructPacket(data[i]);}return data;}else if(data&&'object'==(typeof data==="undefined"?"undefined":_typeof(data))){for(var key in data){data[key]=_reconstructPacket(data[key]);}return data;}return data;}packet.data=_reconstructPacket(packet.data);packet.attachments=undefined;// no longer useful
return packet;};/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */exports.removeBlobs=function(data,callback){function _removeBlobs(obj,curKey,containingObject){if(!obj)return obj;// convert any blob
if(global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){pendingBlobs++;// async filereader
var fileReader=new FileReader();fileReader.onload=function(){// this.result == arraybuffer
if(containingObject){containingObject[curKey]=this.result;}else{bloblessData=this.result;}// if nothing pending its callback time
if(! --pendingBlobs){callback(bloblessData);}};fileReader.readAsArrayBuffer(obj);// blob -> arraybuffer
}else if(isArray(obj)){// handle array
for(var i=0;i<obj.length;i++){_removeBlobs(obj[i],i,obj);}}else if(obj&&'object'==(typeof obj==="undefined"?"undefined":_typeof(obj))&&!isBuf(obj)){// and object
for(var key in obj){_removeBlobs(obj[key],key,obj);}}}var pendingBlobs=0;var bloblessData=data;_removeBlobs(bloblessData);if(!pendingBlobs){callback(bloblessData);}};}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{"./is-buffer":41,"isarray":33}],40:[function(_dereq_,module,exports){/**
 * Module dependencies.
 */var debug=_dereq_('debug')('socket.io-parser');var json=_dereq_('json3');var isArray=_dereq_('isarray');var Emitter=_dereq_('component-emitter');var binary=_dereq_('./binary');var isBuf=_dereq_('./is-buffer');/**
 * Protocol version.
 *
 * @api public
 */exports.protocol=4;/**
 * Packet types.
 *
 * @api public
 */exports.types=['CONNECT','DISCONNECT','EVENT','ACK','ERROR','BINARY_EVENT','BINARY_ACK'];/**
 * Packet type `connect`.
 *
 * @api public
 */exports.CONNECT=0;/**
 * Packet type `disconnect`.
 *
 * @api public
 */exports.DISCONNECT=1;/**
 * Packet type `event`.
 *
 * @api public
 */exports.EVENT=2;/**
 * Packet type `ack`.
 *
 * @api public
 */exports.ACK=3;/**
 * Packet type `error`.
 *
 * @api public
 */exports.ERROR=4;/**
 * Packet type 'binary event'
 *
 * @api public
 */exports.BINARY_EVENT=5;/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */exports.BINARY_ACK=6;/**
 * Encoder constructor.
 *
 * @api public
 */exports.Encoder=Encoder;/**
 * Decoder constructor.
 *
 * @api public
 */exports.Decoder=Decoder;/**
 * A socket.io Encoder instance
 *
 * @api public
 */function Encoder(){}/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */Encoder.prototype.encode=function(obj,callback){debug('encoding packet %j',obj);if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){encodeAsBinary(obj,callback);}else{var encoding=encodeAsString(obj);callback([encoding]);}};/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */function encodeAsString(obj){var str='';var nsp=false;// first is type
str+=obj.type;// attachments if we have them
if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){str+=obj.attachments;str+='-';}// if we have a namespace other than `/`
// we append it followed by a comma `,`
if(obj.nsp&&'/'!=obj.nsp){nsp=true;str+=obj.nsp;}// immediately followed by the id
if(null!=obj.id){if(nsp){str+=',';nsp=false;}str+=obj.id;}// json data
if(null!=obj.data){if(nsp)str+=',';str+=json.stringify(obj.data);}debug('encoded %j as %s',obj,str);return str;}/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */function encodeAsBinary(obj,callback){function writeEncoding(bloblessData){var deconstruction=binary.deconstructPacket(bloblessData);var pack=encodeAsString(deconstruction.packet);var buffers=deconstruction.buffers;buffers.unshift(pack);// add packet info to beginning of data list
callback(buffers);// write all the buffers
}binary.removeBlobs(obj,writeEncoding);}/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */function Decoder(){this.reconstructor=null;}/**
 * Mix in `Emitter` with Decoder.
 */Emitter(Decoder.prototype);/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */Decoder.prototype.add=function(obj){var packet;if('string'==typeof obj){packet=decodeString(obj);if(exports.BINARY_EVENT==packet.type||exports.BINARY_ACK==packet.type){// binary packet's json
this.reconstructor=new BinaryReconstructor(packet);// no attachments, labeled binary but no binary data to follow
if(this.reconstructor.reconPack.attachments===0){this.emit('decoded',packet);}}else{// non-binary full packet
this.emit('decoded',packet);}}else if(isBuf(obj)||obj.base64){// raw binary data
if(!this.reconstructor){throw new Error('got binary data when not reconstructing a packet');}else{packet=this.reconstructor.takeBinaryData(obj);if(packet){// received final buffer
this.reconstructor=null;this.emit('decoded',packet);}}}else{throw new Error('Unknown type: '+obj);}};/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */function decodeString(str){var p={};var i=0;// look up type
p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();// look up attachments if type binary
if(exports.BINARY_EVENT==p.type||exports.BINARY_ACK==p.type){var buf='';while(str.charAt(++i)!='-'){buf+=str.charAt(i);if(i==str.length)break;}if(buf!=Number(buf)||str.charAt(i)!='-'){throw new Error('Illegal attachments');}p.attachments=Number(buf);}// look up namespace (if any)
if('/'==str.charAt(i+1)){p.nsp='';while(++i){var c=str.charAt(i);if(','==c)break;p.nsp+=c;if(i==str.length)break;}}else{p.nsp='/';}// look up id
var next=str.charAt(i+1);if(''!==next&&Number(next)==next){p.id='';while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break;}p.id+=str.charAt(i);if(i==str.length)break;}p.id=Number(p.id);}// look up json data
if(str.charAt(++i)){try{p.data=json.parse(str.substr(i));}catch(e){return error();}}debug('decoded %s as %j',str,p);return p;}/**
 * Deallocates a parser's resources
 *
 * @api public
 */Decoder.prototype.destroy=function(){if(this.reconstructor){this.reconstructor.finishedReconstruction();}};/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */function BinaryReconstructor(packet){this.reconPack=packet;this.buffers=[];}/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */BinaryReconstructor.prototype.takeBinaryData=function(binData){this.buffers.push(binData);if(this.buffers.length==this.reconPack.attachments){// done with buffer list
var packet=binary.reconstructPacket(this.reconPack,this.buffers);this.finishedReconstruction();return packet;}return null;};/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */BinaryReconstructor.prototype.finishedReconstruction=function(){this.reconPack=null;this.buffers=[];};function error(data){return{type:exports.ERROR,data:'parser error'};}},{"./binary":39,"./is-buffer":41,"component-emitter":42,"debug":14,"isarray":33,"json3":34}],41:[function(_dereq_,module,exports){(function(global){module.exports=isBuf;/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */function isBuf(obj){return global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer;}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{}],42:[function(_dereq_,module,exports){arguments[4][26][0].apply(exports,arguments);},{"dup":26}],43:[function(_dereq_,module,exports){module.exports=toArray;function toArray(list,index){var array=[];index=index||0;for(var i=index||0;i<list.length;i++){array[i-index]=list[i];}return array;}},{}],44:[function(_dereq_,module,exports){(function(global){/*! https://mths.be/utf8js v2.0.0 by @mathias */;(function(root){// Detect free variables `exports`
var freeExports=(typeof exports==="undefined"?"undefined":_typeof(exports))=='object'&&exports;// Detect free variable `module`
var freeModule=(typeof module==="undefined"?"undefined":_typeof(module))=='object'&&module&&module.exports==freeExports&&module;// Detect free variable `global`, from Node.js or Browserified code,
// and use it as `root`
var freeGlobal=(typeof global==="undefined"?"undefined":_typeof(global))=='object'&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal;}/*--------------------------------------------------------------------------*/var stringFromCharCode=String.fromCharCode;// Taken from https://mths.be/punycode
function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=0xD800&&value<=0xDBFF&&counter<length){// high surrogate, and there is a next character
extra=string.charCodeAt(counter++);if((extra&0xFC00)==0xDC00){// low surrogate
output.push(((value&0x3FF)<<10)+(extra&0x3FF)+0x10000);}else{// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
output.push(value);counter--;}}else{output.push(value);}}return output;}// Taken from https://mths.be/punycode
function ucs2encode(array){var length=array.length;var index=-1;var value;var output='';while(++index<length){value=array[index];if(value>0xFFFF){value-=0x10000;output+=stringFromCharCode(value>>>10&0x3FF|0xD800);value=0xDC00|value&0x3FF;}output+=stringFromCharCode(value);}return output;}function checkScalarValue(codePoint){if(codePoint>=0xD800&&codePoint<=0xDFFF){throw Error('Lone surrogate U+'+codePoint.toString(16).toUpperCase()+' is not a scalar value');}}/*--------------------------------------------------------------------------*/function createByte(codePoint,shift){return stringFromCharCode(codePoint>>shift&0x3F|0x80);}function encodeCodePoint(codePoint){if((codePoint&0xFFFFFF80)==0){// 1-byte sequence
return stringFromCharCode(codePoint);}var symbol='';if((codePoint&0xFFFFF800)==0){// 2-byte sequence
symbol=stringFromCharCode(codePoint>>6&0x1F|0xC0);}else if((codePoint&0xFFFF0000)==0){// 3-byte sequence
checkScalarValue(codePoint);symbol=stringFromCharCode(codePoint>>12&0x0F|0xE0);symbol+=createByte(codePoint,6);}else if((codePoint&0xFFE00000)==0){// 4-byte sequence
symbol=stringFromCharCode(codePoint>>18&0x07|0xF0);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6);}symbol+=stringFromCharCode(codePoint&0x3F|0x80);return symbol;}function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString='';while(++index<length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint);}return byteString;}/*--------------------------------------------------------------------------*/function readContinuationByte(){if(byteIndex>=byteCount){throw Error('Invalid byte index');}var continuationByte=byteArray[byteIndex]&0xFF;byteIndex++;if((continuationByte&0xC0)==0x80){return continuationByte&0x3F;}// If we end up here, itâ€™s not a continuation byte
throw Error('Invalid continuation byte');}function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex>byteCount){throw Error('Invalid byte index');}if(byteIndex==byteCount){return false;}// Read first byte
byte1=byteArray[byteIndex]&0xFF;byteIndex++;// 1-byte sequence (no continuation bytes)
if((byte1&0x80)==0){return byte1;}// 2-byte sequence
if((byte1&0xE0)==0xC0){var byte2=readContinuationByte();codePoint=(byte1&0x1F)<<6|byte2;if(codePoint>=0x80){return codePoint;}else{throw Error('Invalid continuation byte');}}// 3-byte sequence (may include unpaired surrogates)
if((byte1&0xF0)==0xE0){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=(byte1&0x0F)<<12|byte2<<6|byte3;if(codePoint>=0x0800){checkScalarValue(codePoint);return codePoint;}else{throw Error('Invalid continuation byte');}}// 4-byte sequence
if((byte1&0xF8)==0xF0){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=(byte1&0x0F)<<0x12|byte2<<0x0C|byte3<<0x06|byte4;if(codePoint>=0x010000&&codePoint<=0x10FFFF){return codePoint;}}throw Error('Invalid UTF-8 detected');}var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp);}return ucs2encode(codePoints);}/*--------------------------------------------------------------------------*/var utf8={'version':'2.0.0','encode':utf8encode,'decode':utf8decode};// Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if(typeof define=='function'&&_typeof(define.amd)=='object'&&define.amd){define(function(){return utf8;});}else if(freeExports&&!freeExports.nodeType){if(freeModule){// in Node.js or RingoJS v0.8.0+
freeModule.exports=utf8;}else{// in Narwhal or RingoJS v0.7.0-
var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&&(freeExports[key]=utf8[key]);}}}else{// in Rhino or a web browser
root.utf8=utf8;}})(this);}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{});},{}],45:[function(_dereq_,module,exports){'use strict';var alphabet='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),length=64,map={},seed=0,i=0,prev;/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */function encode(num){var encoded='';do{encoded=alphabet[num%length]+encoded;num=Math.floor(num/length);}while(num>0);return encoded;}/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */function decode(str){var decoded=0;for(i=0;i<str.length;i++){decoded=decoded*length+map[str.charAt(i)];}return decoded;}/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */function yeast(){var now=encode(+new Date());if(now!==prev)return seed=0,prev=now;return now+'.'+encode(seed++);}//
// Map each character to its index.
//
for(;i<length;i++){map[alphabet[i]]=i;}//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode=encode;yeast.decode=decode;module.exports=yeast;},{}]},{},[1])(1);});

var Socket = function () {
    function Socket(io, hostname) {
        classCallCheck(this, Socket);

        this.io = io;
        this.hostname = hostname;
        this.socketInstance = null;
    }

    createClass(Socket, [{
        key: "connect",
        value: function connect() {
            this.socketInstance = this.io.connect(this.hostname);
            return this;
        }
    }, {
        key: "on",
        value: function on(eventName, onResponseCallback) {
            this.socketInstance.on(eventName, onResponseCallback);
        }
    }, {
        key: "emit",
        value: function emit(eventName, emittedData) {
            this.socketInstance.emit(eventName, emittedData);
        }
    }]);
    return Socket;
}();

var Terminal = function () {
    function Terminal() {
        classCallCheck(this, Terminal);

        this.term = null;
        this.outputType = 'echo';
    }

    createClass(Terminal, [{
        key: 'setTerm',
        value: function setTerm(term) {
            this.term = term;
            return this;
        }
    }, {
        key: 'setOutputType',
        value: function setOutputType(responseStatus) {
            this.outputType = responseStatus ? 'echo' : 'error';
            return this;
        }
    }, {
        key: 'formatJson',
        value: function formatJson(jsonValue) {
            if ((typeof jsonValue === 'undefined' ? 'undefined' : _typeof(jsonValue)) !== 'object') {
                return this.output(jsonValue);
            }

            this.term[this.outputType]('<div class="executionResponse"></div>', {
                raw: true
            });

            var $executionResponse = $(".executionResponse");
            $($executionResponse[$executionResponse.length - 1]).JSONView(jsonValue, { collapsed: false });
        }
    }, {
        key: 'output',
        value: function output() {
            var _term;

            (_term = this.term)[this.outputType].apply(_term, arguments);
        }
    }]);
    return Terminal;
}();

var shell = Object.create({});
var socket = new Socket(io, 'http://localhost:9393').connect();
var terminal = new Terminal();
var $result = [];
var $result_ = [];
var _ = _;
socket.on('query_response', function (data) {
    terminal.setOutputType(data.success);

    shell.exec(function (term) {
        terminal.setTerm(term);

        if (data.success && _typeof(data.result) === 'object') {

            terminal.output('<b style="color:red">\n                Result is available on $result , lodash on _, and chained lodash on $result_\n                </b>', {
                raw: true
            });

            terminal.output('Total \n                    <b style="color:green">\n                    ' + data.result.length + '\n                    </b>\n                 Results.', {
                raw: true
            });

            $result = data.result;
            $result_ = _.chain(_.cloneDeep(data.result));
        }

        terminal.formatJson(data.result);
    });
});

jQuery(function ($) {
    $('#dbsole').terminal(function (command, term) {

        if (!command) return;

        if (command.startsWith('$') || command.startsWith('_')) {
            terminal.setTerm(term);
            try {
                var result = window.eval(command);

                if (result !== undefined) {
                    terminal.setOutputType(true);

                    if (Array.isArray(result)) {
                        terminal.formatJson(result);
                        return;
                    }

                    terminal.formatJson(JSON.parse(JSON.stringify(result)));
                }
            } catch (e) {
                terminal.setOutputType(false).output(new String(e));
            }
            return;
        }

        socket.emit('query', { query: command });
        shell.exec = function (cb) {
            return cb(term);
        };
    }, {
        greetings: 'Google Chrome Database Extension ',
        name: 'db_sole',
        height: 340,
        prompt: 'DBSole> '
    });
});