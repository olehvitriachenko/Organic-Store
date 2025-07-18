(function () {
  const d = document.createElement("link").relList;
  if (d && d.supports && d.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) f(h);
  new MutationObserver((h) => {
    for (const y of h)
      if (y.type === "childList")
        for (const x of y.addedNodes)
          x.tagName === "LINK" && x.rel === "modulepreload" && f(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(h) {
    const y = {};
    return (
      h.integrity && (y.integrity = h.integrity),
      h.referrerPolicy && (y.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (y.credentials = "include")
        : h.crossOrigin === "anonymous"
        ? (y.credentials = "omit")
        : (y.credentials = "same-origin"),
      y
    );
  }
  function f(h) {
    if (h.ep) return;
    h.ep = !0;
    const y = o(h);
    fetch(h.href, y);
  }
})();
function Qh(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var Sf = { exports: {} },
  Rn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var U1;
function Zh() {
  if (U1) return Rn;
  U1 = 1;
  var i = Symbol.for("react.transitional.element"),
    d = Symbol.for("react.fragment");
  function o(f, h, y) {
    var x = null;
    if (
      (y !== void 0 && (x = "" + y),
      h.key !== void 0 && (x = "" + h.key),
      "key" in h)
    ) {
      y = {};
      for (var j in h) j !== "key" && (y[j] = h[j]);
    } else y = h;
    return (
      (h = y.ref),
      { $$typeof: i, type: f, key: x, ref: h !== void 0 ? h : null, props: y }
    );
  }
  return (Rn.Fragment = d), (Rn.jsx = o), (Rn.jsxs = o), Rn;
}
var H1;
function Vh() {
  return H1 || ((H1 = 1), (Sf.exports = Zh())), Sf.exports;
}
var r = Vh(),
  xf = { exports: {} },
  et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B1;
function Kh() {
  if (B1) return et;
  B1 = 1;
  var i = Symbol.for("react.transitional.element"),
    d = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    h = Symbol.for("react.profiler"),
    y = Symbol.for("react.consumer"),
    x = Symbol.for("react.context"),
    j = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    A = Symbol.for("react.lazy"),
    L = Symbol.iterator;
  function z(g) {
    return g === null || typeof g != "object"
      ? null
      : ((g = (L && g[L]) || g["@@iterator"]),
        typeof g == "function" ? g : null);
  }
  var Y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    B = {};
  function Q(g, U, Z) {
    (this.props = g),
      (this.context = U),
      (this.refs = B),
      (this.updater = Z || Y);
  }
  (Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (g, U) {
      if (typeof g != "object" && typeof g != "function" && g != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, g, U, "setState");
    }),
    (Q.prototype.forceUpdate = function (g) {
      this.updater.enqueueForceUpdate(this, g, "forceUpdate");
    });
  function w() {}
  w.prototype = Q.prototype;
  function q(g, U, Z) {
    (this.props = g),
      (this.context = U),
      (this.refs = B),
      (this.updater = Z || Y);
  }
  var K = (q.prototype = new w());
  (K.constructor = q), H(K, Q.prototype), (K.isPureReactComponent = !0);
  var it = Array.isArray,
    F = { H: null, A: null, T: null, S: null, V: null },
    Mt = Object.prototype.hasOwnProperty;
  function Ct(g, U, Z, G, J, ft) {
    return (
      (Z = ft.ref),
      { $$typeof: i, type: g, key: U, ref: Z !== void 0 ? Z : null, props: ft }
    );
  }
  function At(g, U) {
    return Ct(g.type, U, void 0, void 0, void 0, g.props);
  }
  function bt(g) {
    return typeof g == "object" && g !== null && g.$$typeof === i;
  }
  function $t(g) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      g.replace(/[=:]/g, function (Z) {
        return U[Z];
      })
    );
  }
  var de = /\/+/g;
  function Zt(g, U) {
    return typeof g == "object" && g !== null && g.key != null
      ? $t("" + g.key)
      : U.toString(36);
  }
  function El() {}
  function Cl(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (
          (typeof g.status == "string"
            ? g.then(El, El)
            : ((g.status = "pending"),
              g.then(
                function (U) {
                  g.status === "pending" &&
                    ((g.status = "fulfilled"), (g.value = U));
                },
                function (U) {
                  g.status === "pending" &&
                    ((g.status = "rejected"), (g.reason = U));
                }
              )),
          g.status)
        ) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function Vt(g, U, Z, G, J) {
    var ft = typeof g;
    (ft === "undefined" || ft === "boolean") && (g = null);
    var tt = !1;
    if (g === null) tt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          tt = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case i:
            case d:
              tt = !0;
              break;
            case A:
              return (tt = g._init), Vt(tt(g._payload), U, Z, G, J);
          }
      }
    if (tt)
      return (
        (J = J(g)),
        (tt = G === "" ? "." + Zt(g, 0) : G),
        it(J)
          ? ((Z = ""),
            tt != null && (Z = tt.replace(de, "$&/") + "/"),
            Vt(J, U, Z, "", function (Fe) {
              return Fe;
            }))
          : J != null &&
            (bt(J) &&
              (J = At(
                J,
                Z +
                  (J.key == null || (g && g.key === J.key)
                    ? ""
                    : ("" + J.key).replace(de, "$&/") + "/") +
                  tt
              )),
            U.push(J)),
        1
      );
    tt = 0;
    var le = G === "" ? "." : G + ":";
    if (it(g))
      for (var St = 0; St < g.length; St++)
        (G = g[St]), (ft = le + Zt(G, St)), (tt += Vt(G, U, Z, ft, J));
    else if (((St = z(g)), typeof St == "function"))
      for (g = St.call(g), St = 0; !(G = g.next()).done; )
        (G = G.value), (ft = le + Zt(G, St++)), (tt += Vt(G, U, Z, ft, J));
    else if (ft === "object") {
      if (typeof g.then == "function") return Vt(Cl(g), U, Z, G, J);
      throw (
        ((U = String(g)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(g).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return tt;
  }
  function M(g, U, Z) {
    if (g == null) return g;
    var G = [],
      J = 0;
    return (
      Vt(g, G, "", "", function (ft) {
        return U.call(Z, ft, J++);
      }),
      G
    );
  }
  function X(g) {
    if (g._status === -1) {
      var U = g._result;
      (U = U()),
        U.then(
          function (Z) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 1), (g._result = Z));
          },
          function (Z) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 2), (g._result = Z));
          }
        ),
        g._status === -1 && ((g._status = 0), (g._result = U));
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var P =
    typeof reportError == "function"
      ? reportError
      : function (g) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var U = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof g == "object" &&
                g !== null &&
                typeof g.message == "string"
                  ? String(g.message)
                  : String(g),
              error: g,
            });
            if (!window.dispatchEvent(U)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", g);
            return;
          }
          console.error(g);
        };
  function vt() {}
  return (
    (et.Children = {
      map: M,
      forEach: function (g, U, Z) {
        M(
          g,
          function () {
            U.apply(this, arguments);
          },
          Z
        );
      },
      count: function (g) {
        var U = 0;
        return (
          M(g, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (g) {
        return (
          M(g, function (U) {
            return U;
          }) || []
        );
      },
      only: function (g) {
        if (!bt(g))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return g;
      },
    }),
    (et.Component = Q),
    (et.Fragment = o),
    (et.Profiler = h),
    (et.PureComponent = q),
    (et.StrictMode = f),
    (et.Suspense = b),
    (et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (et.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (g) {
        return F.H.useMemoCache(g);
      },
    }),
    (et.cache = function (g) {
      return function () {
        return g.apply(null, arguments);
      };
    }),
    (et.cloneElement = function (g, U, Z) {
      if (g == null)
        throw Error(
          "The argument must be a React element, but you passed " + g + "."
        );
      var G = H({}, g.props),
        J = g.key,
        ft = void 0;
      if (U != null)
        for (tt in (U.ref !== void 0 && (ft = void 0),
        U.key !== void 0 && (J = "" + U.key),
        U))
          !Mt.call(U, tt) ||
            tt === "key" ||
            tt === "__self" ||
            tt === "__source" ||
            (tt === "ref" && U.ref === void 0) ||
            (G[tt] = U[tt]);
      var tt = arguments.length - 2;
      if (tt === 1) G.children = Z;
      else if (1 < tt) {
        for (var le = Array(tt), St = 0; St < tt; St++)
          le[St] = arguments[St + 2];
        G.children = le;
      }
      return Ct(g.type, J, void 0, void 0, ft, G);
    }),
    (et.createContext = function (g) {
      return (
        (g = {
          $$typeof: x,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (g.Provider = g),
        (g.Consumer = { $$typeof: y, _context: g }),
        g
      );
    }),
    (et.createElement = function (g, U, Z) {
      var G,
        J = {},
        ft = null;
      if (U != null)
        for (G in (U.key !== void 0 && (ft = "" + U.key), U))
          Mt.call(U, G) &&
            G !== "key" &&
            G !== "__self" &&
            G !== "__source" &&
            (J[G] = U[G]);
      var tt = arguments.length - 2;
      if (tt === 1) J.children = Z;
      else if (1 < tt) {
        for (var le = Array(tt), St = 0; St < tt; St++)
          le[St] = arguments[St + 2];
        J.children = le;
      }
      if (g && g.defaultProps)
        for (G in ((tt = g.defaultProps), tt))
          J[G] === void 0 && (J[G] = tt[G]);
      return Ct(g, ft, void 0, void 0, null, J);
    }),
    (et.createRef = function () {
      return { current: null };
    }),
    (et.forwardRef = function (g) {
      return { $$typeof: j, render: g };
    }),
    (et.isValidElement = bt),
    (et.lazy = function (g) {
      return { $$typeof: A, _payload: { _status: -1, _result: g }, _init: X };
    }),
    (et.memo = function (g, U) {
      return { $$typeof: m, type: g, compare: U === void 0 ? null : U };
    }),
    (et.startTransition = function (g) {
      var U = F.T,
        Z = {};
      F.T = Z;
      try {
        var G = g(),
          J = F.S;
        J !== null && J(Z, G),
          typeof G == "object" &&
            G !== null &&
            typeof G.then == "function" &&
            G.then(vt, P);
      } catch (ft) {
        P(ft);
      } finally {
        F.T = U;
      }
    }),
    (et.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (et.use = function (g) {
      return F.H.use(g);
    }),
    (et.useActionState = function (g, U, Z) {
      return F.H.useActionState(g, U, Z);
    }),
    (et.useCallback = function (g, U) {
      return F.H.useCallback(g, U);
    }),
    (et.useContext = function (g) {
      return F.H.useContext(g);
    }),
    (et.useDebugValue = function () {}),
    (et.useDeferredValue = function (g, U) {
      return F.H.useDeferredValue(g, U);
    }),
    (et.useEffect = function (g, U, Z) {
      var G = F.H;
      if (typeof Z == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return G.useEffect(g, U);
    }),
    (et.useId = function () {
      return F.H.useId();
    }),
    (et.useImperativeHandle = function (g, U, Z) {
      return F.H.useImperativeHandle(g, U, Z);
    }),
    (et.useInsertionEffect = function (g, U) {
      return F.H.useInsertionEffect(g, U);
    }),
    (et.useLayoutEffect = function (g, U) {
      return F.H.useLayoutEffect(g, U);
    }),
    (et.useMemo = function (g, U) {
      return F.H.useMemo(g, U);
    }),
    (et.useOptimistic = function (g, U) {
      return F.H.useOptimistic(g, U);
    }),
    (et.useReducer = function (g, U, Z) {
      return F.H.useReducer(g, U, Z);
    }),
    (et.useRef = function (g) {
      return F.H.useRef(g);
    }),
    (et.useState = function (g) {
      return F.H.useState(g);
    }),
    (et.useSyncExternalStore = function (g, U, Z) {
      return F.H.useSyncExternalStore(g, U, Z);
    }),
    (et.useTransition = function () {
      return F.H.useTransition();
    }),
    (et.version = "19.1.0"),
    et
  );
}
var L1;
function Uf() {
  return L1 || ((L1 = 1), (xf.exports = Kh())), xf.exports;
}
var R = Uf();
const w1 = Qh(R);
var _f = { exports: {} },
  Mn = {},
  Ef = { exports: {} },
  Cf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var q1;
function kh() {
  return (
    q1 ||
      ((q1 = 1),
      (function (i) {
        function d(M, X) {
          var P = M.length;
          M.push(X);
          t: for (; 0 < P; ) {
            var vt = (P - 1) >>> 1,
              g = M[vt];
            if (0 < h(g, X)) (M[vt] = X), (M[P] = g), (P = vt);
            else break t;
          }
        }
        function o(M) {
          return M.length === 0 ? null : M[0];
        }
        function f(M) {
          if (M.length === 0) return null;
          var X = M[0],
            P = M.pop();
          if (P !== X) {
            M[0] = P;
            t: for (var vt = 0, g = M.length, U = g >>> 1; vt < U; ) {
              var Z = 2 * (vt + 1) - 1,
                G = M[Z],
                J = Z + 1,
                ft = M[J];
              if (0 > h(G, P))
                J < g && 0 > h(ft, G)
                  ? ((M[vt] = ft), (M[J] = P), (vt = J))
                  : ((M[vt] = G), (M[Z] = P), (vt = Z));
              else if (J < g && 0 > h(ft, P))
                (M[vt] = ft), (M[J] = P), (vt = J);
              else break t;
            }
          }
          return X;
        }
        function h(M, X) {
          var P = M.sortIndex - X.sortIndex;
          return P !== 0 ? P : M.id - X.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var y = performance;
          i.unstable_now = function () {
            return y.now();
          };
        } else {
          var x = Date,
            j = x.now();
          i.unstable_now = function () {
            return x.now() - j;
          };
        }
        var b = [],
          m = [],
          A = 1,
          L = null,
          z = 3,
          Y = !1,
          H = !1,
          B = !1,
          Q = !1,
          w = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function it(M) {
          for (var X = o(m); X !== null; ) {
            if (X.callback === null) f(m);
            else if (X.startTime <= M)
              f(m), (X.sortIndex = X.expirationTime), d(b, X);
            else break;
            X = o(m);
          }
        }
        function F(M) {
          if (((B = !1), it(M), !H))
            if (o(b) !== null) (H = !0), Mt || ((Mt = !0), Zt());
            else {
              var X = o(m);
              X !== null && Vt(F, X.startTime - M);
            }
        }
        var Mt = !1,
          Ct = -1,
          At = 5,
          bt = -1;
        function $t() {
          return Q ? !0 : !(i.unstable_now() - bt < At);
        }
        function de() {
          if (((Q = !1), Mt)) {
            var M = i.unstable_now();
            bt = M;
            var X = !0;
            try {
              t: {
                (H = !1), B && ((B = !1), q(Ct), (Ct = -1)), (Y = !0);
                var P = z;
                try {
                  e: {
                    for (
                      it(M), L = o(b);
                      L !== null && !(L.expirationTime > M && $t());

                    ) {
                      var vt = L.callback;
                      if (typeof vt == "function") {
                        (L.callback = null), (z = L.priorityLevel);
                        var g = vt(L.expirationTime <= M);
                        if (((M = i.unstable_now()), typeof g == "function")) {
                          (L.callback = g), it(M), (X = !0);
                          break e;
                        }
                        L === o(b) && f(b), it(M);
                      } else f(b);
                      L = o(b);
                    }
                    if (L !== null) X = !0;
                    else {
                      var U = o(m);
                      U !== null && Vt(F, U.startTime - M), (X = !1);
                    }
                  }
                  break t;
                } finally {
                  (L = null), (z = P), (Y = !1);
                }
                X = void 0;
              }
            } finally {
              X ? Zt() : (Mt = !1);
            }
          }
        }
        var Zt;
        if (typeof K == "function")
          Zt = function () {
            K(de);
          };
        else if (typeof MessageChannel < "u") {
          var El = new MessageChannel(),
            Cl = El.port2;
          (El.port1.onmessage = de),
            (Zt = function () {
              Cl.postMessage(null);
            });
        } else
          Zt = function () {
            w(de, 0);
          };
        function Vt(M, X) {
          Ct = w(function () {
            M(i.unstable_now());
          }, X);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (i.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (At = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return z;
          }),
          (i.unstable_next = function (M) {
            switch (z) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = z;
            }
            var P = z;
            z = X;
            try {
              return M();
            } finally {
              z = P;
            }
          }),
          (i.unstable_requestPaint = function () {
            Q = !0;
          }),
          (i.unstable_runWithPriority = function (M, X) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var P = z;
            z = M;
            try {
              return X();
            } finally {
              z = P;
            }
          }),
          (i.unstable_scheduleCallback = function (M, X, P) {
            var vt = i.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? vt + P : vt))
                : (P = vt),
              M)
            ) {
              case 1:
                var g = -1;
                break;
              case 2:
                g = 250;
                break;
              case 5:
                g = 1073741823;
                break;
              case 4:
                g = 1e4;
                break;
              default:
                g = 5e3;
            }
            return (
              (g = P + g),
              (M = {
                id: A++,
                callback: X,
                priorityLevel: M,
                startTime: P,
                expirationTime: g,
                sortIndex: -1,
              }),
              P > vt
                ? ((M.sortIndex = P),
                  d(m, M),
                  o(b) === null &&
                    M === o(m) &&
                    (B ? (q(Ct), (Ct = -1)) : (B = !0), Vt(F, P - vt)))
                : ((M.sortIndex = g),
                  d(b, M),
                  H || Y || ((H = !0), Mt || ((Mt = !0), Zt()))),
              M
            );
          }),
          (i.unstable_shouldYield = $t),
          (i.unstable_wrapCallback = function (M) {
            var X = z;
            return function () {
              var P = z;
              z = X;
              try {
                return M.apply(this, arguments);
              } finally {
                z = P;
              }
            };
          });
      })(Cf)),
    Cf
  );
}
var Y1;
function Jh() {
  return Y1 || ((Y1 = 1), (Ef.exports = kh())), Ef.exports;
}
var Tf = { exports: {} },
  Jt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var G1;
function $h() {
  if (G1) return Jt;
  G1 = 1;
  var i = Uf();
  function d(b) {
    var m = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var A = 2; A < arguments.length; A++)
        m += "&args[]=" + encodeURIComponent(arguments[A]);
    }
    return (
      "Minified React error #" +
      b +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var f = {
      d: {
        f: o,
        r: function () {
          throw Error(d(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    h = Symbol.for("react.portal");
  function y(b, m, A) {
    var L =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: L == null ? null : "" + L,
      children: b,
      containerInfo: m,
      implementation: A,
    };
  }
  var x = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function j(b, m) {
    if (b === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (Jt.createPortal = function (b, m) {
      var A =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(d(299));
      return y(b, m, null, A);
    }),
    (Jt.flushSync = function (b) {
      var m = x.T,
        A = f.p;
      try {
        if (((x.T = null), (f.p = 2), b)) return b();
      } finally {
        (x.T = m), (f.p = A), f.d.f();
      }
    }),
    (Jt.preconnect = function (b, m) {
      typeof b == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        f.d.C(b, m));
    }),
    (Jt.prefetchDNS = function (b) {
      typeof b == "string" && f.d.D(b);
    }),
    (Jt.preinit = function (b, m) {
      if (typeof b == "string" && m && typeof m.as == "string") {
        var A = m.as,
          L = j(A, m.crossOrigin),
          z = typeof m.integrity == "string" ? m.integrity : void 0,
          Y = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        A === "style"
          ? f.d.S(b, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: L,
              integrity: z,
              fetchPriority: Y,
            })
          : A === "script" &&
            f.d.X(b, {
              crossOrigin: L,
              integrity: z,
              fetchPriority: Y,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Jt.preinitModule = function (b, m) {
      if (typeof b == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var A = j(m.as, m.crossOrigin);
            f.d.M(b, {
              crossOrigin: A,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && f.d.M(b);
    }),
    (Jt.preload = function (b, m) {
      if (
        typeof b == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var A = m.as,
          L = j(A, m.crossOrigin);
        f.d.L(b, A, {
          crossOrigin: L,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (Jt.preloadModule = function (b, m) {
      if (typeof b == "string")
        if (m) {
          var A = j(m.as, m.crossOrigin);
          f.d.m(b, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: A,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else f.d.m(b);
    }),
    (Jt.requestFormReset = function (b) {
      f.d.r(b);
    }),
    (Jt.unstable_batchedUpdates = function (b, m) {
      return b(m);
    }),
    (Jt.useFormState = function (b, m, A) {
      return x.H.useFormState(b, m, A);
    }),
    (Jt.useFormStatus = function () {
      return x.H.useHostTransitionStatus();
    }),
    (Jt.version = "19.1.0"),
    Jt
  );
}
var X1;
function I1() {
  if (X1) return Tf.exports;
  X1 = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (d) {
        console.error(d);
      }
  }
  return i(), (Tf.exports = $h()), Tf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Q1;
function Wh() {
  if (Q1) return Mn;
  Q1 = 1;
  var i = Jh(),
    d = Uf(),
    o = I1();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function h(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function y(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function x(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function j(t) {
    if (y(t) !== t) throw Error(f(188));
  }
  function b(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = y(t)), e === null)) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return j(n), t;
          if (u === a) return j(n), e;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = n), (a = u);
      else {
        for (var c = !1, s = n.child; s; ) {
          if (s === l) {
            (c = !0), (l = n), (a = u);
            break;
          }
          if (s === a) {
            (c = !0), (a = n), (l = u);
            break;
          }
          s = s.sibling;
        }
        if (!c) {
          for (s = u.child; s; ) {
            if (s === l) {
              (c = !0), (l = u), (a = n);
              break;
            }
            if (s === a) {
              (c = !0), (a = u), (l = n);
              break;
            }
            s = s.sibling;
          }
          if (!c) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function m(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = m(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var A = Object.assign,
    L = Symbol.for("react.element"),
    z = Symbol.for("react.transitional.element"),
    Y = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    B = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    w = Symbol.for("react.provider"),
    q = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    Mt = Symbol.for("react.suspense_list"),
    Ct = Symbol.for("react.memo"),
    At = Symbol.for("react.lazy"),
    bt = Symbol.for("react.activity"),
    $t = Symbol.for("react.memo_cache_sentinel"),
    de = Symbol.iterator;
  function Zt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (de && t[de]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var El = Symbol.for("react.client.reference");
  function Cl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === El ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case H:
        return "Fragment";
      case Q:
        return "Profiler";
      case B:
        return "StrictMode";
      case F:
        return "Suspense";
      case Mt:
        return "SuspenseList";
      case bt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Y:
          return "Portal";
        case K:
          return (t.displayName || "Context") + ".Provider";
        case q:
          return (t._context.displayName || "Context") + ".Consumer";
        case it:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Ct:
          return (
            (e = t.displayName || null), e !== null ? e : Cl(t.type) || "Memo"
          );
        case At:
          (e = t._payload), (t = t._init);
          try {
            return Cl(t(e));
          } catch {}
      }
    return null;
  }
  var Vt = Array.isArray,
    M = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = { pending: !1, data: null, method: null, action: null },
    vt = [],
    g = -1;
  function U(t) {
    return { current: t };
  }
  function Z(t) {
    0 > g || ((t.current = vt[g]), (vt[g] = null), g--);
  }
  function G(t, e) {
    g++, (vt[g] = t.current), (t.current = e);
  }
  var J = U(null),
    ft = U(null),
    tt = U(null),
    le = U(null);
  function St(t, e) {
    switch ((G(tt, e), G(ft, t), G(J, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? f1(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = f1(e)), (t = r1(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Z(J), G(J, t);
  }
  function Fe() {
    Z(J), Z(ft), Z(tt);
  }
  function ni(t) {
    t.memoizedState !== null && G(le, t);
    var e = J.current,
      l = r1(e, t.type);
    e !== l && (G(ft, t), G(J, l));
  }
  function Ln(t) {
    ft.current === t && (Z(J), Z(ft)),
      le.current === t && (Z(le), (Cn._currentValue = P));
  }
  var ui = Object.prototype.hasOwnProperty,
    ii = i.unstable_scheduleCallback,
    ci = i.unstable_cancelCallback,
    xd = i.unstable_shouldYield,
    _d = i.unstable_requestPaint,
    je = i.unstable_now,
    Ed = i.unstable_getCurrentPriorityLevel,
    Gf = i.unstable_ImmediatePriority,
    Xf = i.unstable_UserBlockingPriority,
    wn = i.unstable_NormalPriority,
    Cd = i.unstable_LowPriority,
    Qf = i.unstable_IdlePriority,
    Td = i.log,
    jd = i.unstable_setDisableYieldValue,
    Oa = null,
    ae = null;
  function Pe(t) {
    if (
      (typeof Td == "function" && jd(t),
      ae && typeof ae.setStrictMode == "function")
    )
      try {
        ae.setStrictMode(Oa, t);
      } catch {}
  }
  var ne = Math.clz32 ? Math.clz32 : Rd,
    Ad = Math.log,
    Nd = Math.LN2;
  function Rd(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Ad(t) / Nd) | 0)) | 0;
  }
  var qn = 256,
    Yn = 4194304;
  function Tl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Gn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = t.suspendedLanes,
      c = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~u),
          a !== 0
            ? (n = Tl(a))
            : ((c &= s),
              c !== 0
                ? (n = Tl(c))
                : l || ((l = s & ~t), l !== 0 && (n = Tl(l)))))
        : ((s = a & ~u),
          s !== 0
            ? (n = Tl(s))
            : c !== 0
            ? (n = Tl(c))
            : l || ((l = a & ~t), l !== 0 && (n = Tl(l)))),
      n === 0
        ? 0
        : e !== 0 &&
          e !== n &&
          (e & u) === 0 &&
          ((u = n & -n),
          (l = e & -e),
          u >= l || (u === 32 && (l & 4194048) !== 0))
        ? e
        : n
    );
  }
  function za(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Md(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Zf() {
    var t = qn;
    return (qn <<= 1), (qn & 4194048) === 0 && (qn = 256), t;
  }
  function Vf() {
    var t = Yn;
    return (Yn <<= 1), (Yn & 62914560) === 0 && (Yn = 4194304), t;
  }
  function fi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Da(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Od(t, e, l, a, n, u) {
    var c = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var s = t.entanglements,
      v = t.expirationTimes,
      E = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var N = 31 - ne(l),
        D = 1 << N;
      (s[N] = 0), (v[N] = -1);
      var C = E[N];
      if (C !== null)
        for (E[N] = null, N = 0; N < C.length; N++) {
          var T = C[N];
          T !== null && (T.lane &= -536870913);
        }
      l &= ~D;
    }
    a !== 0 && Kf(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function Kf(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - ne(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function kf(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ne(l),
        n = 1 << a;
      (n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n);
    }
  }
  function ri(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function si(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Jf() {
    var t = X.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : N1(t.type));
  }
  function zd(t, e) {
    var l = X.p;
    try {
      return (X.p = t), e();
    } finally {
      X.p = l;
    }
  }
  var Ie = Math.random().toString(36).slice(2),
    Kt = "__reactFiber$" + Ie,
    Ft = "__reactProps$" + Ie,
    Ql = "__reactContainer$" + Ie,
    oi = "__reactEvents$" + Ie,
    Dd = "__reactListeners$" + Ie,
    Ud = "__reactHandles$" + Ie,
    $f = "__reactResources$" + Ie,
    Ua = "__reactMarker$" + Ie;
  function di(t) {
    delete t[Kt], delete t[Ft], delete t[oi], delete t[Dd], delete t[Ud];
  }
  function Zl(t) {
    var e = t[Kt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Ql] || l[Kt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = h1(t); t !== null; ) {
            if ((l = t[Kt])) return l;
            t = h1(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function Vl(t) {
    if ((t = t[Kt] || t[Ql])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ha(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function Kl(t) {
    var e = t[$f];
    return (
      e ||
        (e = t[$f] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Bt(t) {
    t[Ua] = !0;
  }
  var Wf = new Set(),
    Ff = {};
  function jl(t, e) {
    kl(t, e), kl(t + "Capture", e);
  }
  function kl(t, e) {
    for (Ff[t] = e, t = 0; t < e.length; t++) Wf.add(e[t]);
  }
  var Hd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Pf = {},
    If = {};
  function Bd(t) {
    return ui.call(If, t)
      ? !0
      : ui.call(Pf, t)
      ? !1
      : Hd.test(t)
      ? (If[t] = !0)
      : ((Pf[t] = !0), !1);
  }
  function Xn(t, e, l) {
    if (Bd(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Qn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function De(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  var hi, tr;
  function Jl(t) {
    if (hi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (hi = (e && e[1]) || ""),
          (tr =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      hi +
      t +
      tr
    );
  }
  var mi = !1;
  function yi(t, e) {
    if (!t || mi) return "";
    mi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var D = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(D.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(D, []);
                } catch (T) {
                  var C = T;
                }
                Reflect.construct(t, [], D);
              } else {
                try {
                  D.call();
                } catch (T) {
                  C = T;
                }
                t.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                C = T;
              }
              (D = t()) &&
                typeof D.catch == "function" &&
                D.catch(function () {});
            }
          } catch (T) {
            if (T && C && typeof T.stack == "string") return [T.stack, C.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        c = u[0],
        s = u[1];
      if (c && s) {
        var v = c.split(`
`),
          E = s.split(`
`);
        for (
          n = a = 0;
          a < v.length && !v[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < E.length && !E[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === v.length || n === E.length)
          for (
            a = v.length - 1, n = E.length - 1;
            1 <= a && 0 <= n && v[a] !== E[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (v[a] !== E[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || v[a] !== E[n])) {
                  var N =
                    `
` + v[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", t.displayName)),
                    N
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (mi = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? Jl(l) : "";
  }
  function Ld(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Jl(t.type);
      case 16:
        return Jl("Lazy");
      case 13:
        return Jl("Suspense");
      case 19:
        return Jl("SuspenseList");
      case 0:
      case 15:
        return yi(t.type, !1);
      case 11:
        return yi(t.type.render, !1);
      case 1:
        return yi(t.type, !0);
      case 31:
        return Jl("Activity");
      default:
        return "";
    }
  }
  function er(t) {
    try {
      var e = "";
      do (e += Ld(t)), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function he(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function lr(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function wd(t) {
    var e = lr(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        u = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            (a = "" + c), u.call(this, c);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Zn(t) {
    t._valueTracker || (t._valueTracker = wd(t));
  }
  function ar(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = lr(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Vn(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var qd = /[\n"\\]/g;
  function me(t) {
    return t.replace(qd, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function vi(t, e, l, a, n, u, c, s) {
    (t.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.type = c)
        : t.removeAttribute("type"),
      e != null
        ? c === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + he(e))
          : t.value !== "" + he(e) && (t.value = "" + he(e))
        : (c !== "submit" && c !== "reset") || t.removeAttribute("value"),
      e != null
        ? gi(t, c, he(e))
        : l != null
        ? gi(t, c, he(l))
        : a != null && t.removeAttribute("value"),
      n == null && u != null && (t.defaultChecked = !!u),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (t.name = "" + he(s))
        : t.removeAttribute("name");
  }
  function nr(t, e, l, a, n, u, c, s) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) return;
      (l = l != null ? "" + he(l) : ""),
        (e = e != null ? "" + he(e) : l),
        s || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = s ? t.checked : !!a),
      (t.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.name = c);
  }
  function gi(t, e, l) {
    (e === "number" && Vn(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function $l(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        (n = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + he(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          (t[n].selected = !0), a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ur(t, e, l) {
    if (
      e != null &&
      ((e = "" + he(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + he(l) : "";
  }
  function ir(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Vt(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = he(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a);
  }
  function Wl(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Yd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function cr(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || Yd.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function fr(t, e, l) {
    if (e != null && typeof e != "object") throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var n in e)
        (a = e[n]), e.hasOwnProperty(n) && l[n] !== a && cr(t, n, a);
    } else for (var u in e) e.hasOwnProperty(u) && cr(t, u, e[u]);
  }
  function pi(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Gd = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Xd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Kn(t) {
    return Xd.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var bi = null;
  function Si(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Fl = null,
    Pl = null;
  function rr(t) {
    var e = Vl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Ft] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (vi(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + me("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Ft] || null;
                if (!n) throw Error(f(90));
                vi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && ar(a);
          }
          break t;
        case "textarea":
          ur(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && $l(t, !!l.multiple, e, !1);
      }
    }
  }
  var xi = !1;
  function sr(t, e, l) {
    if (xi) return t(e, l);
    xi = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((xi = !1),
        (Fl !== null || Pl !== null) &&
          (Ou(), Fl && ((e = Fl), (t = Pl), (Pl = Fl = null), rr(e), t)))
      )
        for (e = 0; e < t.length; e++) rr(t[e]);
    }
  }
  function Ba(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Ft] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(f(231, e, typeof l));
    return l;
  }
  var Ue = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    _i = !1;
  if (Ue)
    try {
      var La = {};
      Object.defineProperty(La, "passive", {
        get: function () {
          _i = !0;
        },
      }),
        window.addEventListener("test", La, La),
        window.removeEventListener("test", La, La);
    } catch {
      _i = !1;
    }
  var tl = null,
    Ei = null,
    kn = null;
  function or() {
    if (kn) return kn;
    var t,
      e = Ei,
      l = e.length,
      a,
      n = "value" in tl ? tl.value : tl.textContent,
      u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var c = l - t;
    for (a = 1; a <= c && e[l - a] === n[u - a]; a++);
    return (kn = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Jn(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function $n() {
    return !0;
  }
  function dr() {
    return !1;
  }
  function Pt(t) {
    function e(l, a, n, u, c) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null);
      for (var s in t)
        t.hasOwnProperty(s) && ((l = t[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? $n
          : dr),
        (this.isPropagationStopped = dr),
        this
      );
    }
    return (
      A(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = $n));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = $n));
        },
        persist: function () {},
        isPersistent: $n,
      }),
      e
    );
  }
  var Al = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wn = Pt(Al),
    wa = A({}, Al, { view: 0, detail: 0 }),
    Qd = Pt(wa),
    Ci,
    Ti,
    qa,
    Fn = A({}, wa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ai,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== qa &&
              (qa && t.type === "mousemove"
                ? ((Ci = t.screenX - qa.screenX), (Ti = t.screenY - qa.screenY))
                : (Ti = Ci = 0),
              (qa = t)),
            Ci);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ti;
      },
    }),
    hr = Pt(Fn),
    Zd = A({}, Fn, { dataTransfer: 0 }),
    Vd = Pt(Zd),
    Kd = A({}, wa, { relatedTarget: 0 }),
    ji = Pt(Kd),
    kd = A({}, Al, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jd = Pt(kd),
    $d = A({}, Al, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Wd = Pt($d),
    Fd = A({}, Al, { data: 0 }),
    mr = Pt(Fd),
    Pd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Id = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    t0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function e0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = t0[t])
      ? !!e[t]
      : !1;
  }
  function Ai() {
    return e0;
  }
  var l0 = A({}, wa, {
      key: function (t) {
        if (t.key) {
          var e = Pd[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Jn(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? Id[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ai,
      charCode: function (t) {
        return t.type === "keypress" ? Jn(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Jn(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    a0 = Pt(l0),
    n0 = A({}, Fn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    yr = Pt(n0),
    u0 = A({}, wa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ai,
    }),
    i0 = Pt(u0),
    c0 = A({}, Al, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    f0 = Pt(c0),
    r0 = A({}, Fn, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    s0 = Pt(r0),
    o0 = A({}, Al, { newState: 0, oldState: 0 }),
    d0 = Pt(o0),
    h0 = [9, 13, 27, 32],
    Ni = Ue && "CompositionEvent" in window,
    Ya = null;
  Ue && "documentMode" in document && (Ya = document.documentMode);
  var m0 = Ue && "TextEvent" in window && !Ya,
    vr = Ue && (!Ni || (Ya && 8 < Ya && 11 >= Ya)),
    gr = " ",
    pr = !1;
  function br(t, e) {
    switch (t) {
      case "keyup":
        return h0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Sr(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Il = !1;
  function y0(t, e) {
    switch (t) {
      case "compositionend":
        return Sr(e);
      case "keypress":
        return e.which !== 32 ? null : ((pr = !0), gr);
      case "textInput":
        return (t = e.data), t === gr && pr ? null : t;
      default:
        return null;
    }
  }
  function v0(t, e) {
    if (Il)
      return t === "compositionend" || (!Ni && br(t, e))
        ? ((t = or()), (kn = Ei = tl = null), (Il = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return vr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var g0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function xr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!g0[t.type] : e === "textarea";
  }
  function _r(t, e, l, a) {
    Fl ? (Pl ? Pl.push(a) : (Pl = [a])) : (Fl = a),
      (e = Lu(e, "onChange")),
      0 < e.length &&
        ((l = new Wn("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var Ga = null,
    Xa = null;
  function p0(t) {
    a1(t, 0);
  }
  function Pn(t) {
    var e = Ha(t);
    if (ar(e)) return t;
  }
  function Er(t, e) {
    if (t === "change") return e;
  }
  var Cr = !1;
  if (Ue) {
    var Ri;
    if (Ue) {
      var Mi = "oninput" in document;
      if (!Mi) {
        var Tr = document.createElement("div");
        Tr.setAttribute("oninput", "return;"),
          (Mi = typeof Tr.oninput == "function");
      }
      Ri = Mi;
    } else Ri = !1;
    Cr = Ri && (!document.documentMode || 9 < document.documentMode);
  }
  function jr() {
    Ga && (Ga.detachEvent("onpropertychange", Ar), (Xa = Ga = null));
  }
  function Ar(t) {
    if (t.propertyName === "value" && Pn(Xa)) {
      var e = [];
      _r(e, Xa, t, Si(t)), sr(p0, e);
    }
  }
  function b0(t, e, l) {
    t === "focusin"
      ? (jr(), (Ga = e), (Xa = l), Ga.attachEvent("onpropertychange", Ar))
      : t === "focusout" && jr();
  }
  function S0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Pn(Xa);
  }
  function x0(t, e) {
    if (t === "click") return Pn(e);
  }
  function _0(t, e) {
    if (t === "input" || t === "change") return Pn(e);
  }
  function E0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ue = typeof Object.is == "function" ? Object.is : E0;
  function Qa(t, e) {
    if (ue(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!ui.call(e, n) || !ue(t[n], e[n])) return !1;
    }
    return !0;
  }
  function Nr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Rr(t, e) {
    var l = Nr(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Nr(l);
    }
  }
  function Mr(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Mr(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Or(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Vn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Vn(t.document);
    }
    return e;
  }
  function Oi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var C0 = Ue && "documentMode" in document && 11 >= document.documentMode,
    ta = null,
    zi = null,
    Za = null,
    Di = !1;
  function zr(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Di ||
      ta == null ||
      ta !== Vn(a) ||
      ((a = ta),
      "selectionStart" in a && Oi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Za && Qa(Za, a)) ||
        ((Za = a),
        (a = Lu(zi, "onSelect")),
        0 < a.length &&
          ((e = new Wn("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = ta))));
  }
  function Nl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var ea = {
      animationend: Nl("Animation", "AnimationEnd"),
      animationiteration: Nl("Animation", "AnimationIteration"),
      animationstart: Nl("Animation", "AnimationStart"),
      transitionrun: Nl("Transition", "TransitionRun"),
      transitionstart: Nl("Transition", "TransitionStart"),
      transitioncancel: Nl("Transition", "TransitionCancel"),
      transitionend: Nl("Transition", "TransitionEnd"),
    },
    Ui = {},
    Dr = {};
  Ue &&
    ((Dr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ea.animationend.animation,
      delete ea.animationiteration.animation,
      delete ea.animationstart.animation),
    "TransitionEvent" in window || delete ea.transitionend.transition);
  function Rl(t) {
    if (Ui[t]) return Ui[t];
    if (!ea[t]) return t;
    var e = ea[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Dr) return (Ui[t] = e[l]);
    return t;
  }
  var Ur = Rl("animationend"),
    Hr = Rl("animationiteration"),
    Br = Rl("animationstart"),
    T0 = Rl("transitionrun"),
    j0 = Rl("transitionstart"),
    A0 = Rl("transitioncancel"),
    Lr = Rl("transitionend"),
    wr = new Map(),
    Hi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Hi.push("scrollEnd");
  function _e(t, e) {
    wr.set(t, e), jl(e, [t]);
  }
  var qr = new WeakMap();
  function ye(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = qr.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: er(e) }), qr.set(t, e), e);
    }
    return { value: t, source: e, stack: er(e) };
  }
  var ve = [],
    la = 0,
    Bi = 0;
  function In() {
    for (var t = la, e = (Bi = la = 0); e < t; ) {
      var l = ve[e];
      ve[e++] = null;
      var a = ve[e];
      ve[e++] = null;
      var n = ve[e];
      ve[e++] = null;
      var u = ve[e];
      if (((ve[e++] = null), a !== null && n !== null)) {
        var c = a.pending;
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n);
      }
      u !== 0 && Yr(l, n, u);
    }
  }
  function tu(t, e, l, a) {
    (ve[la++] = t),
      (ve[la++] = e),
      (ve[la++] = l),
      (ve[la++] = a),
      (Bi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Li(t, e, l, a) {
    return tu(t, e, l, a), eu(t);
  }
  function aa(t, e) {
    return tu(t, null, null, e), eu(t);
  }
  function Yr(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      (u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = u),
        (u = u.return);
    return t.tag === 3
      ? ((u = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - ne(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null;
  }
  function eu(t) {
    if (50 < vn) throw ((vn = 0), (Qc = null), Error(f(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var na = {};
  function N0(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ie(t, e, l, a) {
    return new N0(t, e, l, a);
  }
  function wi(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function He(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = ie(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Gr(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function lu(t, e, l, a, n, u) {
    var c = 0;
    if (((a = t), typeof t == "function")) wi(t) && (c = 1);
    else if (typeof t == "string")
      c = Mh(t, l, J.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case bt:
          return (t = ie(31, l, e, n)), (t.elementType = bt), (t.lanes = u), t;
        case H:
          return Ml(l.children, n, u, e);
        case B:
          (c = 8), (n |= 24);
          break;
        case Q:
          return (
            (t = ie(12, l, e, n | 2)), (t.elementType = Q), (t.lanes = u), t
          );
        case F:
          return (t = ie(13, l, e, n)), (t.elementType = F), (t.lanes = u), t;
        case Mt:
          return (t = ie(19, l, e, n)), (t.elementType = Mt), (t.lanes = u), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case w:
              case K:
                c = 10;
                break t;
              case q:
                c = 9;
                break t;
              case it:
                c = 11;
                break t;
              case Ct:
                c = 14;
                break t;
              case At:
                (c = 16), (a = null);
                break t;
            }
          (c = 29),
            (l = Error(f(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = ie(c, l, e, n)), (e.elementType = t), (e.type = a), (e.lanes = u), e
    );
  }
  function Ml(t, e, l, a) {
    return (t = ie(7, t, a, e)), (t.lanes = l), t;
  }
  function qi(t, e, l) {
    return (t = ie(6, t, null, e)), (t.lanes = l), t;
  }
  function Yi(t, e, l) {
    return (
      (e = ie(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var ua = [],
    ia = 0,
    au = null,
    nu = 0,
    ge = [],
    pe = 0,
    Ol = null,
    Be = 1,
    Le = "";
  function zl(t, e) {
    (ua[ia++] = nu), (ua[ia++] = au), (au = t), (nu = e);
  }
  function Xr(t, e, l) {
    (ge[pe++] = Be), (ge[pe++] = Le), (ge[pe++] = Ol), (Ol = t);
    var a = Be;
    t = Le;
    var n = 32 - ne(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var u = 32 - ne(e) + n;
    if (30 < u) {
      var c = n - (n % 5);
      (u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (Be = (1 << (32 - ne(e) + n)) | (l << n) | a),
        (Le = u + t);
    } else (Be = (1 << u) | (l << n) | a), (Le = t);
  }
  function Gi(t) {
    t.return !== null && (zl(t, 1), Xr(t, 1, 0));
  }
  function Xi(t) {
    for (; t === au; )
      (au = ua[--ia]), (ua[ia] = null), (nu = ua[--ia]), (ua[ia] = null);
    for (; t === Ol; )
      (Ol = ge[--pe]),
        (ge[pe] = null),
        (Le = ge[--pe]),
        (ge[pe] = null),
        (Be = ge[--pe]),
        (ge[pe] = null);
  }
  var Wt = null,
    Tt = null,
    st = !1,
    Dl = null,
    Ae = !1,
    Qi = Error(f(519));
  function Ul(t) {
    var e = Error(f(418, ""));
    throw (ka(ye(e, t)), Qi);
  }
  function Qr(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Kt] = t), (e[Ft] = a), l)) {
      case "dialog":
        ut("cancel", e), ut("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < pn.length; l++) ut(pn[l], e);
        break;
      case "source":
        ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ut("error", e), ut("load", e);
        break;
      case "details":
        ut("toggle", e);
        break;
      case "input":
        ut("invalid", e),
          nr(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          Zn(e);
        break;
      case "select":
        ut("invalid", e);
        break;
      case "textarea":
        ut("invalid", e), ir(e, a.value, a.defaultValue, a.children), Zn(e);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      c1(e.textContent, l)
        ? (a.popover != null && (ut("beforetoggle", e), ut("toggle", e)),
          a.onScroll != null && ut("scroll", e),
          a.onScrollEnd != null && ut("scrollend", e),
          a.onClick != null && (e.onclick = wu),
          (e = !0))
        : (e = !1),
      e || Ul(t);
  }
  function Zr(t) {
    for (Wt = t.return; Wt; )
      switch (Wt.tag) {
        case 5:
        case 13:
          Ae = !1;
          return;
        case 27:
        case 3:
          Ae = !0;
          return;
        default:
          Wt = Wt.return;
      }
  }
  function Va(t) {
    if (t !== Wt) return !1;
    if (!st) return Zr(t), (st = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || uf(t.type, t.memoizedProps))),
        (l = !l)),
      l && Tt && Ul(t),
      Zr(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                Tt = Ce(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        Tt = null;
      }
    } else
      e === 27
        ? ((e = Tt), vl(t.type) ? ((t = sf), (sf = null), (Tt = t)) : (Tt = e))
        : (Tt = Wt ? Ce(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ka() {
    (Tt = Wt = null), (st = !1);
  }
  function Vr() {
    var t = Dl;
    return (
      t !== null &&
        (ee === null ? (ee = t) : ee.push.apply(ee, t), (Dl = null)),
      t
    );
  }
  function ka(t) {
    Dl === null ? (Dl = [t]) : Dl.push(t);
  }
  var Zi = U(null),
    Hl = null,
    we = null;
  function el(t, e, l) {
    G(Zi, e._currentValue), (e._currentValue = l);
  }
  function qe(t) {
    (t._currentValue = Zi.current), Z(Zi);
  }
  function Vi(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Ki(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var v = 0; v < e.length; v++)
            if (s.context === e[v]) {
              (u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                Vi(u.return, l, t),
                a || (c = null);
              break t;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(f(341));
        (c.lanes |= l),
          (u = c.alternate),
          u !== null && (u.lanes |= l),
          Vi(c, l, t),
          (c = null);
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            (n.return = c.return), (c = n);
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function Ja(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(f(387));
        if (((c = c.memoizedProps), c !== null)) {
          var s = n.type;
          ue(n.pendingProps.value, c.value) ||
            (t !== null ? t.push(s) : (t = [s]));
        }
      } else if (n === le.current) {
        if (((c = n.alternate), c === null)) throw Error(f(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(Cn) : (t = [Cn]));
      }
      n = n.return;
    }
    t !== null && Ki(e, t, l, a), (e.flags |= 262144);
  }
  function uu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ue(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Bl(t) {
    (Hl = t),
      (we = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function kt(t) {
    return Kr(Hl, t);
  }
  function iu(t, e) {
    return Hl === null && Bl(t), Kr(t, e);
  }
  function Kr(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), we === null)) {
      if (t === null) throw Error(f(308));
      (we = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else we = we.next = e;
    return l;
  }
  var R0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    M0 = i.unstable_scheduleCallback,
    O0 = i.unstable_NormalPriority,
    Dt = {
      $$typeof: K,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ki() {
    return { controller: new R0(), data: new Map(), refCount: 0 };
  }
  function $a(t) {
    t.refCount--,
      t.refCount === 0 &&
        M0(O0, function () {
          t.controller.abort();
        });
  }
  var Wa = null,
    Ji = 0,
    ca = 0,
    fa = null;
  function z0(t, e) {
    if (Wa === null) {
      var l = (Wa = []);
      (Ji = 0),
        (ca = Wc()),
        (fa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return Ji++, e.then(kr, kr), e;
  }
  function kr() {
    if (--Ji === 0 && Wa !== null) {
      fa !== null && (fa.status = "fulfilled");
      var t = Wa;
      (Wa = null), (ca = 0), (fa = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function D0(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var Jr = M.S;
  M.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      z0(t, e),
      Jr !== null && Jr(t, e);
  };
  var Ll = U(null);
  function $i() {
    var t = Ll.current;
    return t !== null ? t : pt.pooledCache;
  }
  function cu(t, e) {
    e === null ? G(Ll, Ll.current) : G(Ll, e.pool);
  }
  function $r() {
    var t = $i();
    return t === null ? null : { parent: Dt._currentValue, pool: t };
  }
  var Fa = Error(f(460)),
    Wr = Error(f(474)),
    fu = Error(f(542)),
    Wi = { then: function () {} };
  function Fr(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function ru() {}
  function Pr(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(ru, ru), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), ts(t), t);
      default:
        if (typeof e.status == "string") e.then(ru, ru);
        else {
          if (((t = pt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(f(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), ts(t), t);
        }
        throw ((Pa = e), Fa);
    }
  }
  var Pa = null;
  function Ir() {
    if (Pa === null) throw Error(f(459));
    var t = Pa;
    return (Pa = null), t;
  }
  function ts(t) {
    if (t === Fa || t === fu) throw Error(f(483));
  }
  var ll = !1;
  function Fi(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Pi(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function al(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function nl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ot & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = eu(t)),
        Yr(t, null, l),
        e
      );
    }
    return tu(t, a, e, l), eu(t);
  }
  function Ia(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), kf(t, l);
    }
  }
  function Ii(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = c) : (u = u.next = c), (l = l.next);
        } while (l !== null);
        u === null ? (n = u = e) : (u = u.next = e);
      } else n = u = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var tc = !1;
  function tn() {
    if (tc) {
      var t = fa;
      if (t !== null) throw t;
    }
  }
  function en(t, e, l, a) {
    tc = !1;
    var n = t.updateQueue;
    ll = !1;
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var v = s,
        E = v.next;
      (v.next = null), c === null ? (u = E) : (c.next = E), (c = v);
      var N = t.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (s = N.lastBaseUpdate),
        s !== c &&
          (s === null ? (N.firstBaseUpdate = E) : (s.next = E),
          (N.lastBaseUpdate = v)));
    }
    if (u !== null) {
      var D = n.baseState;
      (c = 0), (N = E = v = null), (s = u);
      do {
        var C = s.lane & -536870913,
          T = C !== s.lane;
        if (T ? (ct & C) === C : (a & C) === C) {
          C !== 0 && C === ca && (tc = !0),
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var I = t,
              $ = s;
            C = e;
            var yt = l;
            switch ($.tag) {
              case 1:
                if (((I = $.payload), typeof I == "function")) {
                  D = I.call(yt, D, C);
                  break t;
                }
                D = I;
                break t;
              case 3:
                I.flags = (I.flags & -65537) | 128;
              case 0:
                if (
                  ((I = $.payload),
                  (C = typeof I == "function" ? I.call(yt, D, C) : I),
                  C == null)
                )
                  break t;
                D = A({}, D, C);
                break t;
              case 2:
                ll = !0;
            }
          }
          (C = s.callback),
            C !== null &&
              ((t.flags |= 64),
              T && (t.flags |= 8192),
              (T = n.callbacks),
              T === null ? (n.callbacks = [C]) : T.push(C));
        } else
          (T = {
            lane: C,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            N === null ? ((E = N = T), (v = D)) : (N = N.next = T),
            (c |= C);
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          (T = s),
            (s = T.next),
            (T.next = null),
            (n.lastBaseUpdate = T),
            (n.shared.pending = null);
        }
      } while (!0);
      N === null && (v = D),
        (n.baseState = v),
        (n.firstBaseUpdate = E),
        (n.lastBaseUpdate = N),
        u === null && (n.shared.lanes = 0),
        (dl |= c),
        (t.lanes = c),
        (t.memoizedState = D);
    }
  }
  function es(t, e) {
    if (typeof t != "function") throw Error(f(191, t));
    t.call(e);
  }
  function ls(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) es(l[t], e);
  }
  var ra = U(null),
    su = U(0);
  function as(t, e) {
    (t = Ke), G(su, t), G(ra, e), (Ke = t | e.baseLanes);
  }
  function ec() {
    G(su, Ke), G(ra, ra.current);
  }
  function lc() {
    (Ke = su.current), Z(ra), Z(su);
  }
  var ul = 0,
    lt = null,
    ht = null,
    Ot = null,
    ou = !1,
    sa = !1,
    wl = !1,
    du = 0,
    ln = 0,
    oa = null,
    U0 = 0;
  function Nt() {
    throw Error(f(321));
  }
  function ac(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ue(t[l], e[l])) return !1;
    return !0;
  }
  function nc(t, e, l, a, n, u) {
    return (
      (ul = u),
      (lt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (M.H = t === null || t.memoizedState === null ? Ys : Gs),
      (wl = !1),
      (u = l(a, n)),
      (wl = !1),
      sa && (u = us(e, l, a, n)),
      ns(t),
      u
    );
  }
  function ns(t) {
    M.H = pu;
    var e = ht !== null && ht.next !== null;
    if (((ul = 0), (Ot = ht = lt = null), (ou = !1), (ln = 0), (oa = null), e))
      throw Error(f(300));
    t === null ||
      Lt ||
      ((t = t.dependencies), t !== null && uu(t) && (Lt = !0));
  }
  function us(t, e, l, a) {
    lt = t;
    var n = 0;
    do {
      if ((sa && (oa = null), (ln = 0), (sa = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (Ot = ht = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (M.H = G0), (u = e(l, a));
    } while (sa);
    return u;
  }
  function H0() {
    var t = M.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? an(e) : e),
      (t = t.useState()[0]),
      (ht !== null ? ht.memoizedState : null) !== t && (lt.flags |= 1024),
      e
    );
  }
  function uc() {
    var t = du !== 0;
    return (du = 0), t;
  }
  function ic(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function cc(t) {
    if (ou) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      ou = !1;
    }
    (ul = 0), (Ot = ht = lt = null), (sa = !1), (ln = du = 0), (oa = null);
  }
  function It() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ot === null ? (lt.memoizedState = Ot = t) : (Ot = Ot.next = t), Ot;
  }
  function zt() {
    if (ht === null) {
      var t = lt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ht.next;
    var e = Ot === null ? lt.memoizedState : Ot.next;
    if (e !== null) (Ot = e), (ht = t);
    else {
      if (t === null)
        throw lt.alternate === null ? Error(f(467)) : Error(f(310));
      (ht = t),
        (t = {
          memoizedState: ht.memoizedState,
          baseState: ht.baseState,
          baseQueue: ht.baseQueue,
          queue: ht.queue,
          next: null,
        }),
        Ot === null ? (lt.memoizedState = Ot = t) : (Ot = Ot.next = t);
    }
    return Ot;
  }
  function fc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function an(t) {
    var e = ln;
    return (
      (ln += 1),
      oa === null && (oa = []),
      (t = Pr(oa, t, e)),
      (e = lt),
      (Ot === null ? e.memoizedState : Ot.next) === null &&
        ((e = e.alternate),
        (M.H = e === null || e.memoizedState === null ? Ys : Gs)),
      t
    );
  }
  function hu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return an(t);
      if (t.$$typeof === K) return kt(t);
    }
    throw Error(f(438, String(t)));
  }
  function rc(t) {
    var e = null,
      l = lt.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = lt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = fc()), (lt.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = $t;
    return e.index++, l;
  }
  function Ye(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function mu(t) {
    var e = zt();
    return sc(e, ht, t);
  }
  function sc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        (n.next = u.next), (u.next = c);
      }
      (e.baseQueue = n = u), (a.pending = null);
    }
    if (((u = t.baseState), n === null)) t.memoizedState = u;
    else {
      e = n.next;
      var s = (c = null),
        v = null,
        E = e,
        N = !1;
      do {
        var D = E.lane & -536870913;
        if (D !== E.lane ? (ct & D) === D : (ul & D) === D) {
          var C = E.revertLane;
          if (C === 0)
            v !== null &&
              (v = v.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              D === ca && (N = !0);
          else if ((ul & C) === C) {
            (E = E.next), C === ca && (N = !0);
            continue;
          } else
            (D = {
              lane: 0,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              v === null ? ((s = v = D), (c = u)) : (v = v.next = D),
              (lt.lanes |= C),
              (dl |= C);
          (D = E.action),
            wl && l(u, D),
            (u = E.hasEagerState ? E.eagerState : l(u, D));
        } else
          (C = {
            lane: D,
            revertLane: E.revertLane,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            v === null ? ((s = v = C), (c = u)) : (v = v.next = C),
            (lt.lanes |= D),
            (dl |= D);
        E = E.next;
      } while (E !== null && E !== e);
      if (
        (v === null ? (c = u) : (v.next = s),
        !ue(u, t.memoizedState) && ((Lt = !0), N && ((l = fa), l !== null)))
      )
        throw l;
      (t.memoizedState = u),
        (t.baseState = c),
        (t.baseQueue = v),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function oc(t) {
    var e = zt(),
      l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = (n = n.next);
      do (u = t(u, c.action)), (c = c.next);
      while (c !== n);
      ue(u, e.memoizedState) || (Lt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u);
    }
    return [u, a];
  }
  function is(t, e, l) {
    var a = lt,
      n = zt(),
      u = st;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var c = !ue((ht || n).memoizedState, l);
    c && ((n.memoizedState = l), (Lt = !0)), (n = n.queue);
    var s = rs.bind(null, a, n, t);
    if (
      (nn(2048, 8, s, [t]),
      n.getSnapshot !== e || c || (Ot !== null && Ot.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        da(9, yu(), fs.bind(null, a, n, l, e), null),
        pt === null)
      )
        throw Error(f(349));
      u || (ul & 124) !== 0 || cs(a, e, l);
    }
    return l;
  }
  function cs(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = lt.updateQueue),
      e === null
        ? ((e = fc()), (lt.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function fs(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), ss(e) && os(t);
  }
  function rs(t, e, l) {
    return l(function () {
      ss(e) && os(t);
    });
  }
  function ss(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ue(t, l);
    } catch {
      return !0;
    }
  }
  function os(t) {
    var e = aa(t, 2);
    e !== null && oe(e, t, 2);
  }
  function dc(t) {
    var e = It();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), wl)) {
        Pe(!0);
        try {
          l();
        } finally {
          Pe(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ye,
        lastRenderedState: t,
      }),
      e
    );
  }
  function ds(t, e, l, a) {
    return (t.baseState = l), sc(t, ht, typeof a == "function" ? a : Ye);
  }
  function B0(t, e, l, a, n) {
    if (gu(t)) throw Error(f(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          u.listeners.push(c);
        },
      };
      M.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = e.pending),
        l === null
          ? ((u.next = e.pending = u), hs(e, u))
          : ((u.next = l.next), (e.pending = l.next = u));
    }
  }
  function hs(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var u = M.T,
        c = {};
      M.T = c;
      try {
        var s = l(n, a),
          v = M.S;
        v !== null && v(c, s), ms(t, e, s);
      } catch (E) {
        hc(t, e, E);
      } finally {
        M.T = u;
      }
    } else
      try {
        (u = l(n, a)), ms(t, e, u);
      } catch (E) {
        hc(t, e, E);
      }
  }
  function ms(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            ys(t, e, a);
          },
          function (a) {
            return hc(t, e, a);
          }
        )
      : ys(t, e, l);
  }
  function ys(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      vs(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), hs(t, l)));
  }
  function hc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), vs(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function vs(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function gs(t, e) {
    return e;
  }
  function ps(t, e) {
    if (st) {
      var l = pt.formState;
      if (l !== null) {
        t: {
          var a = lt;
          if (st) {
            if (Tt) {
              e: {
                for (var n = Tt, u = Ae; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (((n = Ce(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (Tt = Ce(n.nextSibling)), (a = n.data === "F!");
                break t;
              }
            }
            Ul(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = It()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gs,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Ls.bind(null, lt, a)),
      (a.dispatch = l),
      (a = dc(!1)),
      (u = pc.bind(null, lt, !1, a.queue)),
      (a = It()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = B0.bind(null, lt, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function bs(t) {
    var e = zt();
    return Ss(e, ht, t);
  }
  function Ss(t, e, l) {
    if (
      ((e = sc(t, e, gs)[0]),
      (t = mu(Ye)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = an(e);
      } catch (c) {
        throw c === Fa ? fu : c;
      }
    else a = e;
    e = zt();
    var n = e.queue,
      u = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((lt.flags |= 2048), da(9, yu(), L0.bind(null, n, l), null)),
      [a, u, t]
    );
  }
  function L0(t, e) {
    t.action = e;
  }
  function xs(t) {
    var e = zt(),
      l = ht;
    if (l !== null) return Ss(e, l, t);
    zt(), (e = e.memoizedState), (l = zt());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function da(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = lt.updateQueue),
      e === null && ((e = fc()), (lt.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function yu() {
    return { destroy: void 0, resource: void 0 };
  }
  function _s() {
    return zt().memoizedState;
  }
  function vu(t, e, l, a) {
    var n = It();
    (a = a === void 0 ? null : a),
      (lt.flags |= t),
      (n.memoizedState = da(1 | e, yu(), l, a));
  }
  function nn(t, e, l, a) {
    var n = zt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    ht !== null && a !== null && ac(a, ht.memoizedState.deps)
      ? (n.memoizedState = da(e, u, l, a))
      : ((lt.flags |= t), (n.memoizedState = da(1 | e, u, l, a)));
  }
  function Es(t, e) {
    vu(8390656, 8, t, e);
  }
  function Cs(t, e) {
    nn(2048, 8, t, e);
  }
  function Ts(t, e) {
    return nn(4, 2, t, e);
  }
  function js(t, e) {
    return nn(4, 4, t, e);
  }
  function As(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Ns(t, e, l) {
    (l = l != null ? l.concat([t]) : null), nn(4, 4, As.bind(null, e, t), l);
  }
  function mc() {}
  function Rs(t, e) {
    var l = zt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && ac(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Ms(t, e) {
    var l = zt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && ac(e, a[1])) return a[0];
    if (((a = t()), wl)) {
      Pe(!0);
      try {
        t();
      } finally {
        Pe(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function yc(t, e, l) {
    return l === void 0 || (ul & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Uo()), (lt.lanes |= t), (dl |= t), l);
  }
  function Os(t, e, l, a) {
    return ue(l, e)
      ? l
      : ra.current !== null
      ? ((t = yc(t, l, a)), ue(t, e) || (Lt = !0), t)
      : (ul & 42) === 0
      ? ((Lt = !0), (t.memoizedState = l))
      : ((t = Uo()), (lt.lanes |= t), (dl |= t), e);
  }
  function zs(t, e, l, a, n) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var c = M.T,
      s = {};
    (M.T = s), pc(t, !1, e, l);
    try {
      var v = n(),
        E = M.S;
      if (
        (E !== null && E(s, v),
        v !== null && typeof v == "object" && typeof v.then == "function")
      ) {
        var N = D0(v, a);
        un(t, e, N, se(t));
      } else un(t, e, a, se(t));
    } catch (D) {
      un(t, e, { then: function () {}, status: "rejected", reason: D }, se());
    } finally {
      (X.p = u), (M.T = c);
    }
  }
  function w0() {}
  function vc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = Ds(t).queue;
    zs(
      t,
      n,
      e,
      P,
      l === null
        ? w0
        : function () {
            return Us(t), l(a);
          }
    );
  }
  function Ds(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ye,
        lastRenderedState: P,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ye,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Us(t) {
    var e = Ds(t).next.queue;
    un(t, e, {}, se());
  }
  function gc() {
    return kt(Cn);
  }
  function Hs() {
    return zt().memoizedState;
  }
  function Bs() {
    return zt().memoizedState;
  }
  function q0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = se();
          t = al(l);
          var a = nl(e, t, l);
          a !== null && (oe(a, e, l), Ia(a, e, l)),
            (e = { cache: ki() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Y0(t, e, l) {
    var a = se();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      gu(t)
        ? ws(e, l)
        : ((l = Li(t, e, l, a)), l !== null && (oe(l, t, a), qs(l, e, a)));
  }
  function Ls(t, e, l) {
    var a = se();
    un(t, e, l, a);
  }
  function un(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (gu(t)) ws(e, n);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var c = e.lastRenderedState,
            s = u(c, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), ue(s, c)))
            return tu(t, e, n, 0), pt === null && In(), !1;
        } catch {
        } finally {
        }
      if (((l = Li(t, e, n, a)), l !== null))
        return oe(l, t, a), qs(l, e, a), !0;
    }
    return !1;
  }
  function pc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Wc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gu(t))
    ) {
      if (e) throw Error(f(479));
    } else (e = Li(t, l, a, 2)), e !== null && oe(e, t, 2);
  }
  function gu(t) {
    var e = t.alternate;
    return t === lt || (e !== null && e === lt);
  }
  function ws(t, e) {
    sa = ou = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function qs(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), kf(t, l);
    }
  }
  var pu = {
      readContext: kt,
      use: hu,
      useCallback: Nt,
      useContext: Nt,
      useEffect: Nt,
      useImperativeHandle: Nt,
      useLayoutEffect: Nt,
      useInsertionEffect: Nt,
      useMemo: Nt,
      useReducer: Nt,
      useRef: Nt,
      useState: Nt,
      useDebugValue: Nt,
      useDeferredValue: Nt,
      useTransition: Nt,
      useSyncExternalStore: Nt,
      useId: Nt,
      useHostTransitionStatus: Nt,
      useFormState: Nt,
      useActionState: Nt,
      useOptimistic: Nt,
      useMemoCache: Nt,
      useCacheRefresh: Nt,
    },
    Ys = {
      readContext: kt,
      use: hu,
      useCallback: function (t, e) {
        return (It().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: kt,
      useEffect: Es,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          vu(4194308, 4, As.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return vu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        vu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = It();
        e = e === void 0 ? null : e;
        var a = t();
        if (wl) {
          Pe(!0);
          try {
            t();
          } finally {
            Pe(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, l) {
        var a = It();
        if (l !== void 0) {
          var n = l(e);
          if (wl) {
            Pe(!0);
            try {
              l(e);
            } finally {
              Pe(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = Y0.bind(null, lt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = It();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = dc(t);
        var e = t.queue,
          l = Ls.bind(null, lt, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: mc,
      useDeferredValue: function (t, e) {
        var l = It();
        return yc(l, t, e);
      },
      useTransition: function () {
        var t = dc(!1);
        return (
          (t = zs.bind(null, lt, t.queue, !0, !1)),
          (It().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = lt,
          n = It();
        if (st) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = e()), pt === null)) throw Error(f(349));
          (ct & 124) !== 0 || cs(a, e, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: e };
        return (
          (n.queue = u),
          Es(rs.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          da(9, yu(), fs.bind(null, a, u, l, e), null),
          l
        );
      },
      useId: function () {
        var t = It(),
          e = pt.identifierPrefix;
        if (st) {
          var l = Le,
            a = Be;
          (l = (a & ~(1 << (32 - ne(a) - 1))).toString(32) + l),
            (e = "«" + e + "R" + l),
            (l = du++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "»");
        } else (l = U0++), (e = "«" + e + "r" + l.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: gc,
      useFormState: ps,
      useActionState: ps,
      useOptimistic: function (t) {
        var e = It();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = pc.bind(null, lt, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: rc,
      useCacheRefresh: function () {
        return (It().memoizedState = q0.bind(null, lt));
      },
    },
    Gs = {
      readContext: kt,
      use: hu,
      useCallback: Rs,
      useContext: kt,
      useEffect: Cs,
      useImperativeHandle: Ns,
      useInsertionEffect: Ts,
      useLayoutEffect: js,
      useMemo: Ms,
      useReducer: mu,
      useRef: _s,
      useState: function () {
        return mu(Ye);
      },
      useDebugValue: mc,
      useDeferredValue: function (t, e) {
        var l = zt();
        return Os(l, ht.memoizedState, t, e);
      },
      useTransition: function () {
        var t = mu(Ye)[0],
          e = zt().memoizedState;
        return [typeof t == "boolean" ? t : an(t), e];
      },
      useSyncExternalStore: is,
      useId: Hs,
      useHostTransitionStatus: gc,
      useFormState: bs,
      useActionState: bs,
      useOptimistic: function (t, e) {
        var l = zt();
        return ds(l, ht, t, e);
      },
      useMemoCache: rc,
      useCacheRefresh: Bs,
    },
    G0 = {
      readContext: kt,
      use: hu,
      useCallback: Rs,
      useContext: kt,
      useEffect: Cs,
      useImperativeHandle: Ns,
      useInsertionEffect: Ts,
      useLayoutEffect: js,
      useMemo: Ms,
      useReducer: oc,
      useRef: _s,
      useState: function () {
        return oc(Ye);
      },
      useDebugValue: mc,
      useDeferredValue: function (t, e) {
        var l = zt();
        return ht === null ? yc(l, t, e) : Os(l, ht.memoizedState, t, e);
      },
      useTransition: function () {
        var t = oc(Ye)[0],
          e = zt().memoizedState;
        return [typeof t == "boolean" ? t : an(t), e];
      },
      useSyncExternalStore: is,
      useId: Hs,
      useHostTransitionStatus: gc,
      useFormState: xs,
      useActionState: xs,
      useOptimistic: function (t, e) {
        var l = zt();
        return ht !== null
          ? ds(l, ht, t, e)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: rc,
      useCacheRefresh: Bs,
    },
    ha = null,
    cn = 0;
  function bu(t) {
    var e = cn;
    return (cn += 1), ha === null && (ha = []), Pr(ha, t, e);
  }
  function fn(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Su(t, e) {
    throw e.$$typeof === L
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          f(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Xs(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Qs(t) {
    function e(S, p) {
      if (t) {
        var _ = S.deletions;
        _ === null ? ((S.deletions = [p]), (S.flags |= 16)) : _.push(p);
      }
    }
    function l(S, p) {
      if (!t) return null;
      for (; p !== null; ) e(S, p), (p = p.sibling);
      return null;
    }
    function a(S) {
      for (var p = new Map(); S !== null; )
        S.key !== null ? p.set(S.key, S) : p.set(S.index, S), (S = S.sibling);
      return p;
    }
    function n(S, p) {
      return (S = He(S, p)), (S.index = 0), (S.sibling = null), S;
    }
    function u(S, p, _) {
      return (
        (S.index = _),
        t
          ? ((_ = S.alternate),
            _ !== null
              ? ((_ = _.index), _ < p ? ((S.flags |= 67108866), p) : _)
              : ((S.flags |= 67108866), p))
          : ((S.flags |= 1048576), p)
      );
    }
    function c(S) {
      return t && S.alternate === null && (S.flags |= 67108866), S;
    }
    function s(S, p, _, O) {
      return p === null || p.tag !== 6
        ? ((p = qi(_, S.mode, O)), (p.return = S), p)
        : ((p = n(p, _)), (p.return = S), p);
    }
    function v(S, p, _, O) {
      var V = _.type;
      return V === H
        ? N(S, p, _.props.children, O, _.key)
        : p !== null &&
          (p.elementType === V ||
            (typeof V == "object" &&
              V !== null &&
              V.$$typeof === At &&
              Xs(V) === p.type))
        ? ((p = n(p, _.props)), fn(p, _), (p.return = S), p)
        : ((p = lu(_.type, _.key, _.props, null, S.mode, O)),
          fn(p, _),
          (p.return = S),
          p);
    }
    function E(S, p, _, O) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== _.containerInfo ||
        p.stateNode.implementation !== _.implementation
        ? ((p = Yi(_, S.mode, O)), (p.return = S), p)
        : ((p = n(p, _.children || [])), (p.return = S), p);
    }
    function N(S, p, _, O, V) {
      return p === null || p.tag !== 7
        ? ((p = Ml(_, S.mode, O, V)), (p.return = S), p)
        : ((p = n(p, _)), (p.return = S), p);
    }
    function D(S, p, _) {
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return (p = qi("" + p, S.mode, _)), (p.return = S), p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case z:
            return (
              (_ = lu(p.type, p.key, p.props, null, S.mode, _)),
              fn(_, p),
              (_.return = S),
              _
            );
          case Y:
            return (p = Yi(p, S.mode, _)), (p.return = S), p;
          case At:
            var O = p._init;
            return (p = O(p._payload)), D(S, p, _);
        }
        if (Vt(p) || Zt(p))
          return (p = Ml(p, S.mode, _, null)), (p.return = S), p;
        if (typeof p.then == "function") return D(S, bu(p), _);
        if (p.$$typeof === K) return D(S, iu(S, p), _);
        Su(S, p);
      }
      return null;
    }
    function C(S, p, _, O) {
      var V = p !== null ? p.key : null;
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return V !== null ? null : s(S, p, "" + _, O);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case z:
            return _.key === V ? v(S, p, _, O) : null;
          case Y:
            return _.key === V ? E(S, p, _, O) : null;
          case At:
            return (V = _._init), (_ = V(_._payload)), C(S, p, _, O);
        }
        if (Vt(_) || Zt(_)) return V !== null ? null : N(S, p, _, O, null);
        if (typeof _.then == "function") return C(S, p, bu(_), O);
        if (_.$$typeof === K) return C(S, p, iu(S, _), O);
        Su(S, _);
      }
      return null;
    }
    function T(S, p, _, O, V) {
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return (S = S.get(_) || null), s(p, S, "" + O, V);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case z:
            return (
              (S = S.get(O.key === null ? _ : O.key) || null), v(p, S, O, V)
            );
          case Y:
            return (
              (S = S.get(O.key === null ? _ : O.key) || null), E(p, S, O, V)
            );
          case At:
            var at = O._init;
            return (O = at(O._payload)), T(S, p, _, O, V);
        }
        if (Vt(O) || Zt(O)) return (S = S.get(_) || null), N(p, S, O, V, null);
        if (typeof O.then == "function") return T(S, p, _, bu(O), V);
        if (O.$$typeof === K) return T(S, p, _, iu(p, O), V);
        Su(p, O);
      }
      return null;
    }
    function I(S, p, _, O) {
      for (
        var V = null, at = null, k = p, W = (p = 0), qt = null;
        k !== null && W < _.length;
        W++
      ) {
        k.index > W ? ((qt = k), (k = null)) : (qt = k.sibling);
        var rt = C(S, k, _[W], O);
        if (rt === null) {
          k === null && (k = qt);
          break;
        }
        t && k && rt.alternate === null && e(S, k),
          (p = u(rt, p, W)),
          at === null ? (V = rt) : (at.sibling = rt),
          (at = rt),
          (k = qt);
      }
      if (W === _.length) return l(S, k), st && zl(S, W), V;
      if (k === null) {
        for (; W < _.length; W++)
          (k = D(S, _[W], O)),
            k !== null &&
              ((p = u(k, p, W)),
              at === null ? (V = k) : (at.sibling = k),
              (at = k));
        return st && zl(S, W), V;
      }
      for (k = a(k); W < _.length; W++)
        (qt = T(k, S, W, _[W], O)),
          qt !== null &&
            (t &&
              qt.alternate !== null &&
              k.delete(qt.key === null ? W : qt.key),
            (p = u(qt, p, W)),
            at === null ? (V = qt) : (at.sibling = qt),
            (at = qt));
      return (
        t &&
          k.forEach(function (xl) {
            return e(S, xl);
          }),
        st && zl(S, W),
        V
      );
    }
    function $(S, p, _, O) {
      if (_ == null) throw Error(f(151));
      for (
        var V = null, at = null, k = p, W = (p = 0), qt = null, rt = _.next();
        k !== null && !rt.done;
        W++, rt = _.next()
      ) {
        k.index > W ? ((qt = k), (k = null)) : (qt = k.sibling);
        var xl = C(S, k, rt.value, O);
        if (xl === null) {
          k === null && (k = qt);
          break;
        }
        t && k && xl.alternate === null && e(S, k),
          (p = u(xl, p, W)),
          at === null ? (V = xl) : (at.sibling = xl),
          (at = xl),
          (k = qt);
      }
      if (rt.done) return l(S, k), st && zl(S, W), V;
      if (k === null) {
        for (; !rt.done; W++, rt = _.next())
          (rt = D(S, rt.value, O)),
            rt !== null &&
              ((p = u(rt, p, W)),
              at === null ? (V = rt) : (at.sibling = rt),
              (at = rt));
        return st && zl(S, W), V;
      }
      for (k = a(k); !rt.done; W++, rt = _.next())
        (rt = T(k, S, W, rt.value, O)),
          rt !== null &&
            (t &&
              rt.alternate !== null &&
              k.delete(rt.key === null ? W : rt.key),
            (p = u(rt, p, W)),
            at === null ? (V = rt) : (at.sibling = rt),
            (at = rt));
      return (
        t &&
          k.forEach(function (Xh) {
            return e(S, Xh);
          }),
        st && zl(S, W),
        V
      );
    }
    function yt(S, p, _, O) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === H &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case z:
            t: {
              for (var V = _.key; p !== null; ) {
                if (p.key === V) {
                  if (((V = _.type), V === H)) {
                    if (p.tag === 7) {
                      l(S, p.sibling),
                        (O = n(p, _.props.children)),
                        (O.return = S),
                        (S = O);
                      break t;
                    }
                  } else if (
                    p.elementType === V ||
                    (typeof V == "object" &&
                      V !== null &&
                      V.$$typeof === At &&
                      Xs(V) === p.type)
                  ) {
                    l(S, p.sibling),
                      (O = n(p, _.props)),
                      fn(O, _),
                      (O.return = S),
                      (S = O);
                    break t;
                  }
                  l(S, p);
                  break;
                } else e(S, p);
                p = p.sibling;
              }
              _.type === H
                ? ((O = Ml(_.props.children, S.mode, O, _.key)),
                  (O.return = S),
                  (S = O))
                : ((O = lu(_.type, _.key, _.props, null, S.mode, O)),
                  fn(O, _),
                  (O.return = S),
                  (S = O));
            }
            return c(S);
          case Y:
            t: {
              for (V = _.key; p !== null; ) {
                if (p.key === V)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === _.containerInfo &&
                    p.stateNode.implementation === _.implementation
                  ) {
                    l(S, p.sibling),
                      (O = n(p, _.children || [])),
                      (O.return = S),
                      (S = O);
                    break t;
                  } else {
                    l(S, p);
                    break;
                  }
                else e(S, p);
                p = p.sibling;
              }
              (O = Yi(_, S.mode, O)), (O.return = S), (S = O);
            }
            return c(S);
          case At:
            return (V = _._init), (_ = V(_._payload)), yt(S, p, _, O);
        }
        if (Vt(_)) return I(S, p, _, O);
        if (Zt(_)) {
          if (((V = Zt(_)), typeof V != "function")) throw Error(f(150));
          return (_ = V.call(_)), $(S, p, _, O);
        }
        if (typeof _.then == "function") return yt(S, p, bu(_), O);
        if (_.$$typeof === K) return yt(S, p, iu(S, _), O);
        Su(S, _);
      }
      return (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
        ? ((_ = "" + _),
          p !== null && p.tag === 6
            ? (l(S, p.sibling), (O = n(p, _)), (O.return = S), (S = O))
            : (l(S, p), (O = qi(_, S.mode, O)), (O.return = S), (S = O)),
          c(S))
        : l(S, p);
    }
    return function (S, p, _, O) {
      try {
        cn = 0;
        var V = yt(S, p, _, O);
        return (ha = null), V;
      } catch (k) {
        if (k === Fa || k === fu) throw k;
        var at = ie(29, k, null, S.mode);
        return (at.lanes = O), (at.return = S), at;
      } finally {
      }
    };
  }
  var ma = Qs(!0),
    Zs = Qs(!1),
    be = U(null),
    Ne = null;
  function il(t) {
    var e = t.alternate;
    G(Ut, Ut.current & 1),
      G(be, t),
      Ne === null &&
        (e === null || ra.current !== null || e.memoizedState !== null) &&
        (Ne = t);
  }
  function Vs(t) {
    if (t.tag === 22) {
      if ((G(Ut, Ut.current), G(be, t), Ne === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ne = t);
      }
    } else cl();
  }
  function cl() {
    G(Ut, Ut.current), G(be, be.current);
  }
  function Ge(t) {
    Z(be), Ne === t && (Ne = null), Z(Ut);
  }
  var Ut = U(0);
  function xu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || rf(l))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function bc(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : A({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Sc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = se(),
        n = al(a);
      (n.payload = e),
        l != null && (n.callback = l),
        (e = nl(t, n, a)),
        e !== null && (oe(e, t, a), Ia(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = se(),
        n = al(a);
      (n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = nl(t, n, a)),
        e !== null && (oe(e, t, a), Ia(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = se(),
        a = al(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = nl(t, a, l)),
        e !== null && (oe(e, t, l), Ia(e, t, l));
    },
  };
  function Ks(t, e, l, a, n, u, c) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, u, c)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Qa(l, a) || !Qa(n, u)
        : !0
    );
  }
  function ks(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Sc.enqueueReplaceState(e, e.state, null);
  }
  function ql(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = A({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  var _u =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Js(t) {
    _u(t);
  }
  function $s(t) {
    console.error(t);
  }
  function Ws(t) {
    _u(t);
  }
  function Eu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Fs(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function xc(t, e, l) {
    return (
      (l = al(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Eu(t, e);
      }),
      l
    );
  }
  function Ps(t) {
    return (t = al(t)), (t.tag = 3), t;
  }
  function Is(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          Fs(e, l, a);
        });
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (t.callback = function () {
        Fs(e, l, a),
          typeof n != "function" &&
            (hl === null ? (hl = new Set([this])) : hl.add(this));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function X0(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && Ja(e, l, n, !0),
        (l = be.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Ne === null ? Vc() : l.alternate === null && jt === 0 && (jt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Wi
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  kc(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Wi
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  kc(t, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return kc(t, a, n), Vc(), !1;
    }
    if (st)
      return (
        (e = be.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== Qi && ((t = Error(f(422), { cause: a })), ka(ye(t, l))))
          : (a !== Qi && ((e = Error(f(423), { cause: a })), ka(ye(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = ye(a, l)),
            (n = xc(t.stateNode, a, n)),
            Ii(t, n),
            jt !== 4 && (jt = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = ye(u, l)),
      yn === null ? (yn = [u]) : yn.push(u),
      jt !== 4 && (jt = 2),
      e === null)
    )
      return !0;
    (a = ye(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = xc(l.stateNode, a, t)),
            Ii(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (hl === null || !hl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Ps(n)),
              Is(n, t, l, a),
              Ii(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var to = Error(f(461)),
    Lt = !1;
  function Yt(t, e, l, a) {
    e.child = t === null ? Zs(e, null, l, a) : ma(e, t.child, l, a);
  }
  function eo(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var s in a) s !== "ref" && (c[s] = a[s]);
    } else c = a;
    return (
      Bl(e),
      (a = nc(t, e, l, c, u, n)),
      (s = uc()),
      t !== null && !Lt
        ? (ic(t, e, n), Xe(t, e, n))
        : (st && s && Gi(e), (e.flags |= 1), Yt(t, e, a, n), e.child)
    );
  }
  function lo(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" &&
        !wi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = u), ao(t, e, u, a, n))
        : ((t = lu(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Rc(t, n))) {
      var c = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Qa), l(c, a) && t.ref === e.ref)
      )
        return Xe(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = He(u, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function ao(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Qa(u, a) && t.ref === e.ref)
        if (((Lt = !1), (e.pendingProps = a = u), Rc(t, n)))
          (t.flags & 131072) !== 0 && (Lt = !0);
        else return (e.lanes = t.lanes), Xe(t, e, n);
    }
    return _c(t, e, l, a, n);
  }
  function no(t, e, l) {
    var a = e.pendingProps,
      n = a.children,
      u = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = u !== null ? u.baseLanes | l : l), t !== null)) {
          for (n = e.child = t.child, u = 0; n !== null; )
            (u = u | n.lanes | n.childLanes), (n = n.sibling);
          e.childLanes = u & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return uo(t, e, a, l);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && cu(e, u !== null ? u.cachePool : null),
          u !== null ? as(e, u) : ec(),
          Vs(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          uo(t, e, u !== null ? u.baseLanes | l : l, l)
        );
    } else
      u !== null
        ? (cu(e, u.cachePool), as(e, u), cl(), (e.memoizedState = null))
        : (t !== null && cu(e, null), ec(), cl());
    return Yt(t, e, n, l), e.child;
  }
  function uo(t, e, l, a) {
    var n = $i();
    return (
      (n = n === null ? null : { parent: Dt._currentValue, pool: n }),
      (e.memoizedState = { baseLanes: l, cachePool: n }),
      t !== null && cu(e, null),
      ec(),
      Vs(e),
      t !== null && Ja(t, e, a, !0),
      null
    );
  }
  function Cu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function _c(t, e, l, a, n) {
    return (
      Bl(e),
      (l = nc(t, e, l, a, void 0, n)),
      (a = uc()),
      t !== null && !Lt
        ? (ic(t, e, n), Xe(t, e, n))
        : (st && a && Gi(e), (e.flags |= 1), Yt(t, e, l, n), e.child)
    );
  }
  function io(t, e, l, a, n, u) {
    return (
      Bl(e),
      (e.updateQueue = null),
      (l = us(e, a, l, n)),
      ns(t),
      (a = uc()),
      t !== null && !Lt
        ? (ic(t, e, u), Xe(t, e, u))
        : (st && a && Gi(e), (e.flags |= 1), Yt(t, e, l, u), e.child)
    );
  }
  function co(t, e, l, a, n) {
    if ((Bl(e), e.stateNode === null)) {
      var u = na,
        c = l.contextType;
      typeof c == "object" && c !== null && (u = kt(c)),
        (u = new l(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Sc),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        Fi(e),
        (c = l.contextType),
        (u.context = typeof c == "object" && c !== null ? kt(c) : na),
        (u.state = e.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == "function" && (bc(e, l, c, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((c = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          c !== u.state && Sc.enqueueReplaceState(u, u.state, null),
          en(e, a, u, n),
          tn(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps,
        v = ql(l, s);
      u.props = v;
      var E = u.context,
        N = l.contextType;
      (c = na), typeof N == "object" && N !== null && (c = kt(N));
      var D = l.getDerivedStateFromProps;
      (N =
        typeof D == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (s = e.pendingProps !== s),
        N ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((s || E !== c) && ks(e, u, a, c)),
        (ll = !1);
      var C = e.memoizedState;
      (u.state = C),
        en(e, a, u, n),
        tn(),
        (E = e.memoizedState),
        s || C !== E || ll
          ? (typeof D == "function" && (bc(e, l, D, a), (E = e.memoizedState)),
            (v = ll || Ks(e, l, v, a, C, E, c))
              ? (N ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = E)),
            (u.props = a),
            (u.state = E),
            (u.context = c),
            (a = v))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (u = e.stateNode),
        Pi(t, e),
        (c = e.memoizedProps),
        (N = ql(l, c)),
        (u.props = N),
        (D = e.pendingProps),
        (C = u.context),
        (E = l.contextType),
        (v = na),
        typeof E == "object" && E !== null && (v = kt(E)),
        (s = l.getDerivedStateFromProps),
        (E =
          typeof s == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((c !== D || C !== v) && ks(e, u, a, v)),
        (ll = !1),
        (C = e.memoizedState),
        (u.state = C),
        en(e, a, u, n),
        tn();
      var T = e.memoizedState;
      c !== D ||
      C !== T ||
      ll ||
      (t !== null && t.dependencies !== null && uu(t.dependencies))
        ? (typeof s == "function" && (bc(e, l, s, a), (T = e.memoizedState)),
          (N =
            ll ||
            Ks(e, l, N, a, C, T, v) ||
            (t !== null && t.dependencies !== null && uu(t.dependencies)))
            ? (E ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, T, v),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, T, v)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = T)),
          (u.props = a),
          (u.state = T),
          (u.context = v),
          (a = N))
        : (typeof u.componentDidUpdate != "function" ||
            (c === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Cu(t, e),
      (a = (e.flags & 128) !== 0),
      u || a
        ? ((u = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = ma(e, t.child, null, n)),
              (e.child = ma(e, null, l, n)))
            : Yt(t, e, l, n),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = Xe(t, e, n)),
      t
    );
  }
  function fo(t, e, l, a) {
    return Ka(), (e.flags |= 256), Yt(t, e, l, a), e.child;
  }
  var Ec = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Cc(t) {
    return { baseLanes: t, cachePool: $r() };
  }
  function Tc(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= Se), t;
  }
  function ro(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c =
          t !== null && t.memoizedState === null ? !1 : (Ut.current & 2) !== 0),
      c && ((n = !0), (e.flags &= -129)),
      (c = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (st) {
        if ((n ? il(e) : cl(), st)) {
          var s = Tt,
            v;
          if ((v = s)) {
            t: {
              for (v = s, s = Ae; v.nodeType !== 8; ) {
                if (!s) {
                  s = null;
                  break t;
                }
                if (((v = Ce(v.nextSibling)), v === null)) {
                  s = null;
                  break t;
                }
              }
              s = v;
            }
            s !== null
              ? ((e.memoizedState = {
                  dehydrated: s,
                  treeContext: Ol !== null ? { id: Be, overflow: Le } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (v = ie(18, null, null, 0)),
                (v.stateNode = s),
                (v.return = e),
                (e.child = v),
                (Wt = e),
                (Tt = null),
                (v = !0))
              : (v = !1);
          }
          v || Ul(e);
        }
        if (
          ((s = e.memoizedState),
          s !== null && ((s = s.dehydrated), s !== null))
        )
          return rf(s) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        Ge(e);
      }
      return (
        (s = a.children),
        (a = a.fallback),
        n
          ? (cl(),
            (n = e.mode),
            (s = Tu({ mode: "hidden", children: s }, n)),
            (a = Ml(a, n, l, null)),
            (s.return = e),
            (a.return = e),
            (s.sibling = a),
            (e.child = s),
            (n = e.child),
            (n.memoizedState = Cc(l)),
            (n.childLanes = Tc(t, c, l)),
            (e.memoizedState = Ec),
            a)
          : (il(e), jc(e, s))
      );
    }
    if (
      ((v = t.memoizedState), v !== null && ((s = v.dehydrated), s !== null))
    ) {
      if (u)
        e.flags & 256
          ? (il(e), (e.flags &= -257), (e = Ac(t, e, l)))
          : e.memoizedState !== null
          ? (cl(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (cl(),
            (n = a.fallback),
            (s = e.mode),
            (a = Tu({ mode: "visible", children: a.children }, s)),
            (n = Ml(n, s, l, null)),
            (n.flags |= 2),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            ma(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = Cc(l)),
            (a.childLanes = Tc(t, c, l)),
            (e.memoizedState = Ec),
            (e = n));
      else if ((il(e), rf(s))) {
        if (((c = s.nextSibling && s.nextSibling.dataset), c)) var E = c.dgst;
        (c = E),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = c),
          ka({ value: a, source: null, stack: null }),
          (e = Ac(t, e, l));
      } else if (
        (Lt || Ja(t, e, l, !1), (c = (l & t.childLanes) !== 0), Lt || c)
      ) {
        if (
          ((c = pt),
          c !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : ri(a)),
            (a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== v.retryLane))
        )
          throw ((v.retryLane = a), aa(t, a), oe(c, t, a), to);
        s.data === "$?" || Vc(), (e = Ac(t, e, l));
      } else
        s.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = v.treeContext),
            (Tt = Ce(s.nextSibling)),
            (Wt = e),
            (st = !0),
            (Dl = null),
            (Ae = !1),
            t !== null &&
              ((ge[pe++] = Be),
              (ge[pe++] = Le),
              (ge[pe++] = Ol),
              (Be = t.id),
              (Le = t.overflow),
              (Ol = e)),
            (e = jc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (cl(),
        (n = a.fallback),
        (s = e.mode),
        (v = t.child),
        (E = v.sibling),
        (a = He(v, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = v.subtreeFlags & 65011712),
        E !== null ? (n = He(E, n)) : ((n = Ml(n, s, l, null)), (n.flags |= 2)),
        (n.return = e),
        (a.return = e),
        (a.sibling = n),
        (e.child = a),
        (a = n),
        (n = e.child),
        (s = t.child.memoizedState),
        s === null
          ? (s = Cc(l))
          : ((v = s.cachePool),
            v !== null
              ? ((E = Dt._currentValue),
                (v = v.parent !== E ? { parent: E, pool: E } : v))
              : (v = $r()),
            (s = { baseLanes: s.baseLanes | l, cachePool: v })),
        (n.memoizedState = s),
        (n.childLanes = Tc(t, c, l)),
        (e.memoizedState = Ec),
        a)
      : (il(e),
        (l = t.child),
        (t = l.sibling),
        (l = He(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((c = e.deletions),
          c === null ? ((e.deletions = [t]), (e.flags |= 16)) : c.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function jc(t, e) {
    return (
      (e = Tu({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Tu(t, e) {
    return (
      (t = ie(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Ac(t, e, l) {
    return (
      ma(e, t.child, null, l),
      (t = jc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function so(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Vi(t.return, e, l);
  }
  function Nc(t, e, l, a, n) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = l),
        (u.tailMode = n));
  }
  function oo(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    if ((Yt(t, e, a.children, l), (a = Ut.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && so(t, l, e);
          else if (t.tag === 19) so(t, l, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((G(Ut, a), n)) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          (t = l.alternate),
            t !== null && xu(t) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Nc(e, !1, n, l, u);
        break;
      case "backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && xu(t) === null)) {
            e.child = n;
            break;
          }
          (t = n.sibling), (n.sibling = l), (l = n), (n = t);
        }
        Nc(e, !0, l, null, u);
        break;
      case "together":
        Nc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Xe(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (dl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ja(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (
        t = e.child, l = He(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = He(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function Rc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && uu(t)));
  }
  function Q0(t, e, l) {
    switch (e.tag) {
      case 3:
        St(e, e.stateNode.containerInfo),
          el(e, Dt, t.memoizedState.cache),
          Ka();
        break;
      case 27:
      case 5:
        ni(e);
        break;
      case 4:
        St(e, e.stateNode.containerInfo);
        break;
      case 10:
        el(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (il(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? ro(t, e, l)
            : (il(e), (t = Xe(t, e, l)), t !== null ? t.sibling : null);
        il(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (Ja(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return oo(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          G(Ut, Ut.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), no(t, e, l);
      case 24:
        el(e, Dt, t.memoizedState.cache);
    }
    return Xe(t, e, l);
  }
  function ho(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Lt = !0;
      else {
        if (!Rc(t, l) && (e.flags & 128) === 0) return (Lt = !1), Q0(t, e, l);
        Lt = (t.flags & 131072) !== 0;
      }
    else (Lt = !1), st && (e.flags & 1048576) !== 0 && Xr(e, nu, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            n = a._init;
          if (((a = n(a._payload)), (e.type = a), typeof a == "function"))
            wi(a)
              ? ((t = ql(a, t)), (e.tag = 1), (e = co(null, e, a, t, l)))
              : ((e.tag = 0), (e = _c(null, e, a, t, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === it)) {
                (e.tag = 11), (e = eo(null, e, a, t, l));
                break t;
              } else if (n === Ct) {
                (e.tag = 14), (e = lo(null, e, a, t, l));
                break t;
              }
            }
            throw ((e = Cl(a) || a), Error(f(306, e, "")));
          }
        }
        return e;
      case 0:
        return _c(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (n = ql(a, e.pendingProps)), co(t, e, a, n, l);
      case 3:
        t: {
          if ((St(e, e.stateNode.containerInfo), t === null))
            throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          (n = u.element), Pi(t, e), en(e, a, null, l);
          var c = e.memoizedState;
          if (
            ((a = c.cache),
            el(e, Dt, a),
            a !== u.cache && Ki(e, [Dt], l, !0),
            tn(),
            (a = c.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: c.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = fo(t, e, a, l);
              break t;
            } else if (a !== n) {
              (n = ye(Error(f(424)), e)), ka(n), (e = fo(t, e, a, l));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Tt = Ce(t.firstChild),
                  Wt = e,
                  st = !0,
                  Dl = null,
                  Ae = !0,
                  l = Zs(e, null, a, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Ka(), a === n)) {
              e = Xe(t, e, l);
              break t;
            }
            Yt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Cu(t, e),
          t === null
            ? (l = g1(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : st ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = qu(tt.current).createElement(l)),
                (a[Kt] = e),
                (a[Ft] = t),
                Xt(a, l, t),
                Bt(a),
                (e.stateNode = a))
            : (e.memoizedState = g1(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ni(e),
          t === null &&
            st &&
            ((a = e.stateNode = m1(e.type, e.pendingProps, tt.current)),
            (Wt = e),
            (Ae = !0),
            (n = Tt),
            vl(e.type) ? ((sf = n), (Tt = Ce(a.firstChild))) : (Tt = n)),
          Yt(t, e, e.pendingProps.children, l),
          Cu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            st &&
            ((n = a = Tt) &&
              ((a = gh(a, e.type, e.pendingProps, Ae)),
              a !== null
                ? ((e.stateNode = a),
                  (Wt = e),
                  (Tt = Ce(a.firstChild)),
                  (Ae = !1),
                  (n = !0))
                : (n = !1)),
            n || Ul(e)),
          ni(e),
          (n = e.type),
          (u = e.pendingProps),
          (c = t !== null ? t.memoizedProps : null),
          (a = u.children),
          uf(n, u) ? (a = null) : c !== null && uf(n, c) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = nc(t, e, H0, null, null, l)), (Cn._currentValue = n)),
          Cu(t, e),
          Yt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            st &&
            ((t = l = Tt) &&
              ((l = ph(l, e.pendingProps, Ae)),
              l !== null
                ? ((e.stateNode = l), (Wt = e), (Tt = null), (t = !0))
                : (t = !1)),
            t || Ul(e)),
          null
        );
      case 13:
        return ro(t, e, l);
      case 4:
        return (
          St(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = ma(e, null, a, l)) : Yt(t, e, a, l),
          e.child
        );
      case 11:
        return eo(t, e, e.type, e.pendingProps, l);
      case 7:
        return Yt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Yt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Yt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          el(e, e.type, a.value),
          Yt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Bl(e),
          (n = kt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Yt(t, e, a, l),
          e.child
        );
      case 14:
        return lo(t, e, e.type, e.pendingProps, l);
      case 15:
        return ao(t, e, e.type, e.pendingProps, l);
      case 19:
        return oo(t, e, l);
      case 31:
        return (
          (a = e.pendingProps),
          (l = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((l = Tu(a, l)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l))
            : ((l = He(t.child, a)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l)),
          e
        );
      case 22:
        return no(t, e, l);
      case 24:
        return (
          Bl(e),
          (a = kt(Dt)),
          t === null
            ? ((n = $i()),
              n === null &&
                ((n = pt),
                (u = ki()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (e.memoizedState = { parent: a, cache: n }),
              Fi(e),
              el(e, Dt, n))
            : ((t.lanes & l) !== 0 && (Pi(t, e), en(e, null, null, l), tn()),
              (n = t.memoizedState),
              (u = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  el(e, Dt, a))
                : ((a = u.cache),
                  el(e, Dt, a),
                  a !== n.cache && Ki(e, [Dt], l, !0))),
          Yt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function Qe(t) {
    t.flags |= 4;
  }
  function mo(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !_1(e))) {
      if (
        ((e = be.current),
        e !== null &&
          ((ct & 4194048) === ct
            ? Ne !== null
            : ((ct & 62914560) !== ct && (ct & 536870912) === 0) || e !== Ne))
      )
        throw ((Pa = Wi), Wr);
      t.flags |= 8192;
    }
  }
  function ju(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Vf() : 536870912), (t.lanes |= e), (pa |= e));
  }
  function rn(t, e) {
    if (!st)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function _t(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling);
    else
      for (n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function Z0(t, e, l) {
    var a = e.pendingProps;
    switch ((Xi(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _t(e), null;
      case 1:
        return _t(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          qe(Dt),
          Fe(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Va(e)
              ? Qe(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Vr())),
          _t(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (Qe(e),
              l !== null ? (_t(e), mo(e, l)) : (_t(e), (e.flags &= -16777217)))
            : l
            ? l !== t.memoizedState
              ? (Qe(e), _t(e), mo(e, l))
              : (_t(e), (e.flags &= -16777217))
            : (t.memoizedProps !== a && Qe(e), _t(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Ln(e), (l = tt.current);
        var n = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && Qe(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return _t(e), null;
          }
          (t = J.current),
            Va(e) ? Qr(e) : ((t = m1(n, a, l)), (e.stateNode = t), Qe(e));
        }
        return _t(e), null;
      case 5:
        if ((Ln(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Qe(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return _t(e), null;
          }
          if (((t = J.current), Va(e))) Qr(e);
          else {
            switch (((n = qu(tt.current)), t)) {
              case 1:
                t = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (t = n.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            (t[Kt] = e), (t[Ft] = a);
            t: for (n = e.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === e) break t;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === e) break t;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            e.stateNode = t;
            t: switch ((Xt(t, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Qe(e);
          }
        }
        return _t(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Qe(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
          if (((t = tt.current), Va(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = Wt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (t[Kt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                c1(t.nodeValue, l)
              )),
              t || Ul(e);
          } else (t = qu(t).createTextNode(a)), (t[Kt] = e), (e.stateNode = t);
        }
        return _t(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = Va(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[Kt] = e;
            } else
              Ka(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            _t(e), (n = !1);
          } else
            (n = Vr()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return e.flags & 256 ? (Ge(e), e) : (Ge(e), null);
        }
        if ((Ge(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
        if (
          ((l = a !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          (a = e.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048);
        }
        return (
          l !== t && l && (e.child.flags |= 8192),
          ju(e, e.updateQueue),
          _t(e),
          null
        );
      case 4:
        return Fe(), t === null && tf(e.stateNode.containerInfo), _t(e), null;
      case 10:
        return qe(e.type), _t(e), null;
      case 19:
        if ((Z(Ut), (n = e.memoizedState), n === null)) return _t(e), null;
        if (((a = (e.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) rn(n, !1);
          else {
            if (jt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = xu(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      rn(n, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      ju(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    Gr(l, t), (l = l.sibling);
                  return G(Ut, (Ut.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null &&
              je() > Ru &&
              ((e.flags |= 128), (a = !0), rn(n, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = xu(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ju(e, t),
                rn(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !u.alternate &&
                  !st)
              )
                return _t(e), null;
            } else
              2 * je() - n.renderingStartTime > Ru &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), rn(n, !1), (e.lanes = 4194304));
          n.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = n.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (n.last = u));
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = je()),
            (e.sibling = null),
            (t = Ut.current),
            G(Ut, a ? (t & 1) | 2 : t & 1),
            e)
          : (_t(e), null);
      case 22:
      case 23:
        return (
          Ge(e),
          lc(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (_t(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : _t(e),
          (l = e.updateQueue),
          l !== null && ju(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && Z(Ll),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          qe(Dt),
          _t(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function V0(t, e) {
    switch ((Xi(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          qe(Dt),
          Fe(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ln(e), null;
      case 13:
        if (
          (Ge(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(f(340));
          Ka();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return Z(Ut), null;
      case 4:
        return Fe(), null;
      case 10:
        return qe(e.type), null;
      case 22:
      case 23:
        return (
          Ge(e),
          lc(),
          t !== null && Z(Ll),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return qe(Dt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function yo(t, e) {
    switch ((Xi(e), e.tag)) {
      case 3:
        qe(Dt), Fe();
        break;
      case 26:
      case 27:
      case 5:
        Ln(e);
        break;
      case 4:
        Fe();
        break;
      case 13:
        Ge(e);
        break;
      case 19:
        Z(Ut);
        break;
      case 10:
        qe(e.type);
        break;
      case 22:
      case 23:
        Ge(e), lc(), t !== null && Z(Ll);
        break;
      case 24:
        qe(Dt);
    }
  }
  function sn(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create,
              c = l.inst;
            (a = u()), (c.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      gt(e, e.return, s);
    }
  }
  function fl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst,
              s = c.destroy;
            if (s !== void 0) {
              (c.destroy = void 0), (n = e);
              var v = l,
                E = s;
              try {
                E();
              } catch (N) {
                gt(n, v, N);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (N) {
      gt(e, e.return, N);
    }
  }
  function vo(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        ls(e, l);
      } catch (a) {
        gt(t, t.return, a);
      }
    }
  }
  function go(t, e, l) {
    (l.props = ql(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      gt(t, e, a);
    }
  }
  function on(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      gt(t, e, n);
    }
  }
  function Re(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          gt(t, e, n);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          gt(t, e, n);
        }
      else l.current = null;
  }
  function po(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      gt(t, t.return, n);
    }
  }
  function Mc(t, e, l) {
    try {
      var a = t.stateNode;
      dh(a, t.type, l, e), (a[Ft] = e);
    } catch (n) {
      gt(t, t.return, n);
    }
  }
  function bo(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && vl(t.type)) ||
      t.tag === 4
    );
  }
  function Oc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || bo(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && vl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function zc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = wu));
    else if (
      a !== 4 &&
      (a === 27 && vl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (zc(t, e, l), t = t.sibling; t !== null; )
        zc(t, e, l), (t = t.sibling);
  }
  function Au(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && vl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (Au(t, e, l), t = t.sibling; t !== null; )
        Au(t, e, l), (t = t.sibling);
  }
  function So(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Xt(e, a, l), (e[Kt] = t), (e[Ft] = l);
    } catch (u) {
      gt(t, t.return, u);
    }
  }
  var Ze = !1,
    Rt = !1,
    Dc = !1,
    xo = typeof WeakSet == "function" ? WeakSet : Set,
    wt = null;
  function K0(t, e) {
    if (((t = t.containerInfo), (af = Vu), (t = Or(t)), Oi(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var c = 0,
              s = -1,
              v = -1,
              E = 0,
              N = 0,
              D = t,
              C = null;
            e: for (;;) {
              for (
                var T;
                D !== l || (n !== 0 && D.nodeType !== 3) || (s = c + n),
                  D !== u || (a !== 0 && D.nodeType !== 3) || (v = c + a),
                  D.nodeType === 3 && (c += D.nodeValue.length),
                  (T = D.firstChild) !== null;

              )
                (C = D), (D = T);
              for (;;) {
                if (D === t) break e;
                if (
                  (C === l && ++E === n && (s = c),
                  C === u && ++N === a && (v = c),
                  (T = D.nextSibling) !== null)
                )
                  break;
                (D = C), (C = D.parentNode);
              }
              D = T;
            }
            l = s === -1 || v === -1 ? null : { start: s, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      nf = { focusedElem: t, selectionRange: l }, Vu = !1, wt = e;
      wt !== null;

    )
      if (
        ((e = wt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (wt = t);
      else
        for (; wt !== null; ) {
          switch (((e = wt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                (t = void 0),
                  (l = e),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode);
                try {
                  var I = ql(l.type, n, l.elementType === l.type);
                  (t = a.getSnapshotBeforeUpdate(I, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch ($) {
                  gt(l, l.return, $);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  ff(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ff(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (wt = t);
            break;
          }
          wt = e.return;
        }
  }
  function _o(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        rl(t, l), a & 4 && sn(5, l);
        break;
      case 1:
        if ((rl(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (c) {
              gt(l, l.return, c);
            }
          else {
            var n = ql(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              gt(l, l.return, c);
            }
          }
        a & 64 && vo(l), a & 512 && on(l, l.return);
        break;
      case 3:
        if ((rl(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            ls(t, e);
          } catch (c) {
            gt(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && So(l);
      case 26:
      case 5:
        rl(t, l), e === null && a & 4 && po(l), a & 512 && on(l, l.return);
        break;
      case 12:
        rl(t, l);
        break;
      case 13:
        rl(t, l),
          a & 4 && To(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = eh.bind(null, l)), bh(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Ze), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Rt), (n = Ze);
          var u = Rt;
          (Ze = a),
            (Rt = e) && !u ? sl(t, l, (l.subtreeFlags & 8772) !== 0) : rl(t, l),
            (Ze = n),
            (Rt = u);
        }
        break;
      case 30:
        break;
      default:
        rl(t, l);
    }
  }
  function Eo(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Eo(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && di(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var xt = null,
    te = !1;
  function Ve(t, e, l) {
    for (l = l.child; l !== null; ) Co(t, e, l), (l = l.sibling);
  }
  function Co(t, e, l) {
    if (ae && typeof ae.onCommitFiberUnmount == "function")
      try {
        ae.onCommitFiberUnmount(Oa, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Rt || Re(l, e),
          Ve(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Rt || Re(l, e);
        var a = xt,
          n = te;
        vl(l.type) && ((xt = l.stateNode), (te = !1)),
          Ve(t, e, l),
          Sn(l.stateNode),
          (xt = a),
          (te = n);
        break;
      case 5:
        Rt || Re(l, e);
      case 6:
        if (
          ((a = xt),
          (n = te),
          (xt = null),
          Ve(t, e, l),
          (xt = a),
          (te = n),
          xt !== null)
        )
          if (te)
            try {
              (xt.nodeType === 9
                ? xt.body
                : xt.nodeName === "HTML"
                ? xt.ownerDocument.body
                : xt
              ).removeChild(l.stateNode);
            } catch (u) {
              gt(l, e, u);
            }
          else
            try {
              xt.removeChild(l.stateNode);
            } catch (u) {
              gt(l, e, u);
            }
        break;
      case 18:
        xt !== null &&
          (te
            ? ((t = xt),
              d1(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode
              ),
              Nn(t))
            : d1(xt, l.stateNode));
        break;
      case 4:
        (a = xt),
          (n = te),
          (xt = l.stateNode.containerInfo),
          (te = !0),
          Ve(t, e, l),
          (xt = a),
          (te = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Rt || fl(2, l, e), Rt || fl(4, l, e), Ve(t, e, l);
        break;
      case 1:
        Rt ||
          (Re(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && go(l, e, a)),
          Ve(t, e, l);
        break;
      case 21:
        Ve(t, e, l);
        break;
      case 22:
        (Rt = (a = Rt) || l.memoizedState !== null), Ve(t, e, l), (Rt = a);
        break;
      default:
        Ve(t, e, l);
    }
  }
  function To(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Nn(t);
      } catch (l) {
        gt(e, e.return, l);
      }
  }
  function k0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new xo()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new xo()),
          e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Uc(t, e) {
    var l = k0(t);
    e.forEach(function (a) {
      var n = lh.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function ce(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = t,
          c = e,
          s = c;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (vl(s.type)) {
                (xt = s.stateNode), (te = !1);
                break t;
              }
              break;
            case 5:
              (xt = s.stateNode), (te = !1);
              break t;
            case 3:
            case 4:
              (xt = s.stateNode.containerInfo), (te = !0);
              break t;
          }
          s = s.return;
        }
        if (xt === null) throw Error(f(160));
        Co(u, c, n),
          (xt = null),
          (te = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) jo(e, t), (e = e.sibling);
  }
  var Ee = null;
  function jo(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ce(e, t),
          fe(t),
          a & 4 && (fl(3, t, t.return), sn(3, t), fl(5, t, t.return));
        break;
      case 1:
        ce(e, t),
          fe(t),
          a & 512 && (Rt || l === null || Re(l, l.return)),
          a & 64 &&
            Ze &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = Ee;
        if (
          (ce(e, t),
          fe(t),
          a & 512 && (Rt || l === null || Re(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n);
                  e: switch (a) {
                    case "title":
                      (u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Ua] ||
                          u[Kt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title")
                          )),
                        Xt(u, a, l),
                        (u[Kt] = t),
                        Bt(u),
                        (a = u);
                      break t;
                    case "link":
                      var c = S1("link", "href", n).get(a + (l.href || ""));
                      if (c) {
                        for (var s = 0; s < c.length; s++)
                          if (
                            ((u = c[s]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(s, 1);
                            break e;
                          }
                      }
                      (u = n.createElement(a)),
                        Xt(u, a, l),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (c = S1("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (s = 0; s < c.length; s++)
                          if (
                            ((u = c[s]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(s, 1);
                            break e;
                          }
                      }
                      (u = n.createElement(a)),
                        Xt(u, a, l),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (u[Kt] = t), Bt(u), (a = u);
                }
                t.stateNode = a;
              } else x1(n, t.type, t.stateNode);
            else t.stateNode = b1(n, a, t.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? x1(n, t.type, t.stateNode)
                  : b1(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Mc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        ce(e, t),
          fe(t),
          a & 512 && (Rt || l === null || Re(l, l.return)),
          l !== null && a & 4 && Mc(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (ce(e, t),
          fe(t),
          a & 512 && (Rt || l === null || Re(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            Wl(n, "");
          } catch (T) {
            gt(t, t.return, T);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), Mc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Dc = !0);
        break;
      case 6:
        if ((ce(e, t), fe(t), a & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (T) {
            gt(t, t.return, T);
          }
        }
        break;
      case 3:
        if (
          ((Xu = null),
          (n = Ee),
          (Ee = Yu(e.containerInfo)),
          ce(e, t),
          (Ee = n),
          fe(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Nn(e.containerInfo);
          } catch (T) {
            gt(t, t.return, T);
          }
        Dc && ((Dc = !1), Ao(t));
        break;
      case 4:
        (a = Ee),
          (Ee = Yu(t.stateNode.containerInfo)),
          ce(e, t),
          fe(t),
          (Ee = a);
        break;
      case 12:
        ce(e, t), fe(t);
        break;
      case 13:
        ce(e, t),
          fe(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Yc = je()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Uc(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null,
          E = Ze,
          N = Rt;
        if (
          ((Ze = E || n),
          (Rt = N || v),
          ce(e, t),
          (Rt = N),
          (Ze = E),
          fe(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || v || Ze || Rt || Yl(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                v = l = e;
                try {
                  if (((u = v.stateNode), n))
                    (c = u.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    s = v.stateNode;
                    var D = v.memoizedProps.style,
                      C =
                        D != null && D.hasOwnProperty("display")
                          ? D.display
                          : null;
                    s.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (T) {
                  gt(v, v.return, T);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                v = e;
                try {
                  v.stateNode.nodeValue = n ? "" : v.memoizedProps;
                } catch (T) {
                  gt(v, v.return, T);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Uc(t, l))));
        break;
      case 19:
        ce(e, t),
          fe(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Uc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ce(e, t), fe(t);
    }
  }
  function fe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (bo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Oc(t);
            Au(t, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Wl(c, ""), (l.flags &= -33));
            var s = Oc(t);
            Au(t, s, c);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo,
              E = Oc(t);
            zc(t, E, v);
            break;
          default:
            throw Error(f(161));
        }
      } catch (N) {
        gt(t, t.return, N);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Ao(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Ao(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function rl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) _o(t, e.alternate, e), (e = e.sibling);
  }
  function Yl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          fl(4, e, e.return), Yl(e);
          break;
        case 1:
          Re(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && go(e, e.return, l),
            Yl(e);
          break;
        case 27:
          Sn(e.stateNode);
        case 26:
        case 5:
          Re(e, e.return), Yl(e);
          break;
        case 22:
          e.memoizedState === null && Yl(e);
          break;
        case 30:
          Yl(e);
          break;
        default:
          Yl(e);
      }
      t = t.sibling;
    }
  }
  function sl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        u = e,
        c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          sl(n, u, l), sn(4, u);
          break;
        case 1:
          if (
            (sl(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (E) {
              gt(a, a.return, E);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var v = n.shared.hiddenCallbacks;
              if (v !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < v.length; n++)
                  es(v[n], s);
            } catch (E) {
              gt(a, a.return, E);
            }
          }
          l && c & 64 && vo(u), on(u, u.return);
          break;
        case 27:
          So(u);
        case 26:
        case 5:
          sl(n, u, l), l && a === null && c & 4 && po(u), on(u, u.return);
          break;
        case 12:
          sl(n, u, l);
          break;
        case 13:
          sl(n, u, l), l && c & 4 && To(n, u);
          break;
        case 22:
          u.memoizedState === null && sl(n, u, l), on(u, u.return);
          break;
        case 30:
          break;
        default:
          sl(n, u, l);
      }
      e = e.sibling;
    }
  }
  function Hc(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && $a(l));
  }
  function Bc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && $a(t));
  }
  function Me(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) No(t, e, l, a), (e = e.sibling);
  }
  function No(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Me(t, e, l, a), n & 2048 && sn(9, e);
        break;
      case 1:
        Me(t, e, l, a);
        break;
      case 3:
        Me(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && $a(t)));
        break;
      case 12:
        if (n & 2048) {
          Me(t, e, l, a), (t = e.stateNode);
          try {
            var u = e.memoizedProps,
              c = u.id,
              s = u.onPostCommit;
            typeof s == "function" &&
              s(
                c,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (v) {
            gt(e, e.return, v);
          }
        } else Me(t, e, l, a);
        break;
      case 13:
        Me(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (u = e.stateNode),
          (c = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Me(t, e, l, a)
              : dn(t, e)
            : u._visibility & 2
            ? Me(t, e, l, a)
            : ((u._visibility |= 2),
              ya(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          n & 2048 && Hc(c, e);
        break;
      case 24:
        Me(t, e, l, a), n & 2048 && Bc(e.alternate, e);
        break;
      default:
        Me(t, e, l, a);
    }
  }
  function ya(t, e, l, a, n) {
    for (n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        c = e,
        s = l,
        v = a,
        E = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ya(u, c, s, v, n), sn(8, c);
          break;
        case 23:
          break;
        case 22:
          var N = c.stateNode;
          c.memoizedState !== null
            ? N._visibility & 2
              ? ya(u, c, s, v, n)
              : dn(u, c)
            : ((N._visibility |= 2), ya(u, c, s, v, n)),
            n && E & 2048 && Hc(c.alternate, c);
          break;
        case 24:
          ya(u, c, s, v, n), n && E & 2048 && Bc(c.alternate, c);
          break;
        default:
          ya(u, c, s, v, n);
      }
      e = e.sibling;
    }
  }
  function dn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            dn(l, a), n & 2048 && Hc(a.alternate, a);
            break;
          case 24:
            dn(l, a), n & 2048 && Bc(a.alternate, a);
            break;
          default:
            dn(l, a);
        }
        e = e.sibling;
      }
  }
  var hn = 8192;
  function va(t) {
    if (t.subtreeFlags & hn)
      for (t = t.child; t !== null; ) Ro(t), (t = t.sibling);
  }
  function Ro(t) {
    switch (t.tag) {
      case 26:
        va(t),
          t.flags & hn &&
            t.memoizedState !== null &&
            zh(Ee, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        va(t);
        break;
      case 3:
      case 4:
        var e = Ee;
        (Ee = Yu(t.stateNode.containerInfo)), va(t), (Ee = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = hn), (hn = 16777216), va(t), (hn = e))
            : va(t));
        break;
      default:
        va(t);
    }
  }
  function Mo(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function mn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (wt = a), zo(a, t);
        }
      Mo(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Oo(t), (t = t.sibling);
  }
  function Oo(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        mn(t), t.flags & 2048 && fl(9, t, t.return);
        break;
      case 3:
        mn(t);
        break;
      case 12:
        mn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Nu(t))
          : mn(t);
        break;
      default:
        mn(t);
    }
  }
  function Nu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (wt = a), zo(a, t);
        }
      Mo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          fl(8, e, e.return), Nu(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Nu(e));
          break;
        default:
          Nu(e);
      }
      t = t.sibling;
    }
  }
  function zo(t, e) {
    for (; wt !== null; ) {
      var l = wt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          fl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          $a(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (wt = a);
      else
        t: for (l = t; wt !== null; ) {
          a = wt;
          var n = a.sibling,
            u = a.return;
          if ((Eo(a), a === l)) {
            wt = null;
            break t;
          }
          if (n !== null) {
            (n.return = u), (wt = n);
            break t;
          }
          wt = u;
        }
    }
  }
  var J0 = {
      getCacheForType: function (t) {
        var e = kt(Dt),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
    },
    $0 = typeof WeakMap == "function" ? WeakMap : Map,
    ot = 0,
    pt = null,
    nt = null,
    ct = 0,
    dt = 0,
    re = null,
    ol = !1,
    ga = !1,
    Lc = !1,
    Ke = 0,
    jt = 0,
    dl = 0,
    Gl = 0,
    wc = 0,
    Se = 0,
    pa = 0,
    yn = null,
    ee = null,
    qc = !1,
    Yc = 0,
    Ru = 1 / 0,
    Mu = null,
    hl = null,
    Gt = 0,
    ml = null,
    ba = null,
    Sa = 0,
    Gc = 0,
    Xc = null,
    Do = null,
    vn = 0,
    Qc = null;
  function se() {
    if ((ot & 2) !== 0 && ct !== 0) return ct & -ct;
    if (M.T !== null) {
      var t = ca;
      return t !== 0 ? t : Wc();
    }
    return Jf();
  }
  function Uo() {
    Se === 0 && (Se = (ct & 536870912) === 0 || st ? Zf() : 536870912);
    var t = be.current;
    return t !== null && (t.flags |= 32), Se;
  }
  function oe(t, e, l) {
    ((t === pt && (dt === 2 || dt === 9)) || t.cancelPendingCommit !== null) &&
      (xa(t, 0), yl(t, ct, Se, !1)),
      Da(t, l),
      ((ot & 2) === 0 || t !== pt) &&
        (t === pt &&
          ((ot & 2) === 0 && (Gl |= l), jt === 4 && yl(t, ct, Se, !1)),
        Oe(t));
  }
  function Ho(t, e, l) {
    if ((ot & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || za(t, e),
      n = a ? P0(t, e) : Kc(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        ga && !a && yl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), u && !W0(l))) {
          (n = Kc(t, e, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var c = 0;
          else
            (c = t.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            e = c;
            t: {
              var s = t;
              n = yn;
              var v = s.current.memoizedState.isDehydrated;
              if ((v && (xa(s, c).flags |= 256), (c = Kc(s, c, !1)), c !== 2)) {
                if (Lc && !v) {
                  (s.errorRecoveryDisabledLanes |= u), (Gl |= u), (n = 4);
                  break t;
                }
                (u = ee),
                  (ee = n),
                  u !== null && (ee === null ? (ee = u) : ee.push.apply(ee, u));
              }
              n = c;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          xa(t, 0), yl(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              yl(a, e, Se, !ol);
              break t;
            case 2:
              ee = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && ((n = Yc + 300 - je()), 10 < n)) {
            if ((yl(a, e, Se, !ol), Gn(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = s1(
              Bo.bind(null, a, l, ee, Mu, qc, e, Se, Gl, pa, ol, u, 2, -0, 0),
              n
            );
            break t;
          }
          Bo(a, l, ee, Mu, qc, e, Se, Gl, pa, ol, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Oe(t);
  }
  function Bo(t, e, l, a, n, u, c, s, v, E, N, D, C, T) {
    if (
      ((t.timeoutHandle = -1),
      (D = e.subtreeFlags),
      (D & 8192 || (D & 16785408) === 16785408) &&
        ((En = { stylesheets: null, count: 0, unsuspend: Oh }),
        Ro(e),
        (D = Dh()),
        D !== null))
    ) {
      (t.cancelPendingCommit = D(
        Qo.bind(null, t, e, u, l, a, n, c, s, v, N, 1, C, T)
      )),
        yl(t, u, c, !E);
      return;
    }
    Qo(t, e, u, l, a, n, c, s, v);
  }
  function W0(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ue(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function yl(t, e, l, a) {
    (e &= ~wc),
      (e &= ~Gl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var n = e; 0 < n; ) {
      var u = 31 - ne(n),
        c = 1 << u;
      (a[u] = -1), (n &= ~c);
    }
    l !== 0 && Kf(t, l, e);
  }
  function Ou() {
    return (ot & 6) === 0 ? (gn(0), !1) : !0;
  }
  function Zc() {
    if (nt !== null) {
      if (dt === 0) var t = nt.return;
      else (t = nt), (we = Hl = null), cc(t), (ha = null), (cn = 0), (t = nt);
      for (; t !== null; ) yo(t.alternate, t), (t = t.return);
      nt = null;
    }
  }
  function xa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), mh(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Zc(),
      (pt = t),
      (nt = l = He(t.current, null)),
      (ct = e),
      (dt = 0),
      (re = null),
      (ol = !1),
      (ga = za(t, e)),
      (Lc = !1),
      (pa = Se = wc = Gl = dl = jt = 0),
      (ee = yn = null),
      (qc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ne(a),
          u = 1 << n;
        (e |= t[n]), (a &= ~u);
      }
    return (Ke = e), In(), l;
  }
  function Lo(t, e) {
    (lt = null),
      (M.H = pu),
      e === Fa || e === fu
        ? ((e = Ir()), (dt = 3))
        : e === Wr
        ? ((e = Ir()), (dt = 4))
        : (dt =
            e === to
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (re = e),
      nt === null && ((jt = 1), Eu(t, ye(e, t.current)));
  }
  function wo() {
    var t = M.H;
    return (M.H = pu), t === null ? pu : t;
  }
  function qo() {
    var t = M.A;
    return (M.A = J0), t;
  }
  function Vc() {
    (jt = 4),
      ol || ((ct & 4194048) !== ct && be.current !== null) || (ga = !0),
      ((dl & 134217727) === 0 && (Gl & 134217727) === 0) ||
        pt === null ||
        yl(pt, ct, Se, !1);
  }
  function Kc(t, e, l) {
    var a = ot;
    ot |= 2;
    var n = wo(),
      u = qo();
    (pt !== t || ct !== e) && ((Mu = null), xa(t, e)), (e = !1);
    var c = jt;
    t: do
      try {
        if (dt !== 0 && nt !== null) {
          var s = nt,
            v = re;
          switch (dt) {
            case 8:
              Zc(), (c = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              be.current === null && (e = !0);
              var E = dt;
              if (((dt = 0), (re = null), _a(t, s, v, E), l && ga)) {
                c = 0;
                break t;
              }
              break;
            default:
              (E = dt), (dt = 0), (re = null), _a(t, s, v, E);
          }
        }
        F0(), (c = jt);
        break;
      } catch (N) {
        Lo(t, N);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (we = Hl = null),
      (ot = a),
      (M.H = n),
      (M.A = u),
      nt === null && ((pt = null), (ct = 0), In()),
      c
    );
  }
  function F0() {
    for (; nt !== null; ) Yo(nt);
  }
  function P0(t, e) {
    var l = ot;
    ot |= 2;
    var a = wo(),
      n = qo();
    pt !== t || ct !== e
      ? ((Mu = null), (Ru = je() + 500), xa(t, e))
      : (ga = za(t, e));
    t: do
      try {
        if (dt !== 0 && nt !== null) {
          e = nt;
          var u = re;
          e: switch (dt) {
            case 1:
              (dt = 0), (re = null), _a(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Fr(u)) {
                (dt = 0), (re = null), Go(e);
                break;
              }
              (e = function () {
                (dt !== 2 && dt !== 9) || pt !== t || (dt = 7), Oe(t);
              }),
                u.then(e, e);
              break t;
            case 3:
              dt = 7;
              break t;
            case 4:
              dt = 5;
              break t;
            case 7:
              Fr(u)
                ? ((dt = 0), (re = null), Go(e))
                : ((dt = 0), (re = null), _a(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (nt.tag) {
                case 26:
                  c = nt.memoizedState;
                case 5:
                case 27:
                  var s = nt;
                  if (!c || _1(c)) {
                    (dt = 0), (re = null);
                    var v = s.sibling;
                    if (v !== null) nt = v;
                    else {
                      var E = s.return;
                      E !== null ? ((nt = E), zu(E)) : (nt = null);
                    }
                    break e;
                  }
              }
              (dt = 0), (re = null), _a(t, e, u, 5);
              break;
            case 6:
              (dt = 0), (re = null), _a(t, e, u, 6);
              break;
            case 8:
              Zc(), (jt = 6);
              break t;
            default:
              throw Error(f(462));
          }
        }
        I0();
        break;
      } catch (N) {
        Lo(t, N);
      }
    while (!0);
    return (
      (we = Hl = null),
      (M.H = a),
      (M.A = n),
      (ot = l),
      nt !== null ? 0 : ((pt = null), (ct = 0), In(), jt)
    );
  }
  function I0() {
    for (; nt !== null && !xd(); ) Yo(nt);
  }
  function Yo(t) {
    var e = ho(t.alternate, t, Ke);
    (t.memoizedProps = t.pendingProps), e === null ? zu(t) : (nt = e);
  }
  function Go(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = io(l, e, e.pendingProps, e.type, void 0, ct);
        break;
      case 11:
        e = io(l, e, e.pendingProps, e.type.render, e.ref, ct);
        break;
      case 5:
        cc(e);
      default:
        yo(l, e), (e = nt = Gr(e, Ke)), (e = ho(l, e, Ke));
    }
    (t.memoizedProps = t.pendingProps), e === null ? zu(t) : (nt = e);
  }
  function _a(t, e, l, a) {
    (we = Hl = null), cc(e), (ha = null), (cn = 0);
    var n = e.return;
    try {
      if (X0(t, n, e, l, ct)) {
        (jt = 1), Eu(t, ye(l, t.current)), (nt = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((nt = n), u);
      (jt = 1), Eu(t, ye(l, t.current)), (nt = null);
      return;
    }
    e.flags & 32768
      ? (st || a === 1
          ? (t = !0)
          : ga || (ct & 536870912) !== 0
          ? (t = !1)
          : ((ol = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = be.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Xo(e, t))
      : zu(e);
  }
  function zu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Xo(e, ol);
        return;
      }
      t = e.return;
      var l = Z0(e.alternate, e, Ke);
      if (l !== null) {
        nt = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        nt = e;
        return;
      }
      nt = e = t;
    } while (e !== null);
    jt === 0 && (jt = 5);
  }
  function Xo(t, e) {
    do {
      var l = V0(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (nt = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        nt = t;
        return;
      }
      nt = t = l;
    } while (t !== null);
    (jt = 6), (nt = null);
  }
  function Qo(t, e, l, a, n, u, c, s, v) {
    t.cancelPendingCommit = null;
    do Du();
    while (Gt !== 0);
    if ((ot & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Bi),
        Od(t, l, u, c, s, v),
        t === pt && ((nt = pt = null), (ct = 0)),
        (ba = e),
        (ml = t),
        (Sa = l),
        (Gc = u),
        (Xc = n),
        (Do = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            ah(wn, function () {
              return Jo(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = M.T), (M.T = null), (n = X.p), (X.p = 2), (c = ot), (ot |= 4);
        try {
          K0(t, e, l);
        } finally {
          (ot = c), (X.p = n), (M.T = a);
        }
      }
      (Gt = 1), Zo(), Vo(), Ko();
    }
  }
  function Zo() {
    if (Gt === 1) {
      Gt = 0;
      var t = ml,
        e = ba,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = M.T), (M.T = null);
        var a = X.p;
        X.p = 2;
        var n = ot;
        ot |= 4;
        try {
          jo(e, t);
          var u = nf,
            c = Or(t.containerInfo),
            s = u.focusedElem,
            v = u.selectionRange;
          if (
            c !== s &&
            s &&
            s.ownerDocument &&
            Mr(s.ownerDocument.documentElement, s)
          ) {
            if (v !== null && Oi(s)) {
              var E = v.start,
                N = v.end;
              if ((N === void 0 && (N = E), "selectionStart" in s))
                (s.selectionStart = E),
                  (s.selectionEnd = Math.min(N, s.value.length));
              else {
                var D = s.ownerDocument || document,
                  C = (D && D.defaultView) || window;
                if (C.getSelection) {
                  var T = C.getSelection(),
                    I = s.textContent.length,
                    $ = Math.min(v.start, I),
                    yt = v.end === void 0 ? $ : Math.min(v.end, I);
                  !T.extend && $ > yt && ((c = yt), (yt = $), ($ = c));
                  var S = Rr(s, $),
                    p = Rr(s, yt);
                  if (
                    S &&
                    p &&
                    (T.rangeCount !== 1 ||
                      T.anchorNode !== S.node ||
                      T.anchorOffset !== S.offset ||
                      T.focusNode !== p.node ||
                      T.focusOffset !== p.offset)
                  ) {
                    var _ = D.createRange();
                    _.setStart(S.node, S.offset),
                      T.removeAllRanges(),
                      $ > yt
                        ? (T.addRange(_), T.extend(p.node, p.offset))
                        : (_.setEnd(p.node, p.offset), T.addRange(_));
                  }
                }
              }
            }
            for (D = [], T = s; (T = T.parentNode); )
              T.nodeType === 1 &&
                D.push({ element: T, left: T.scrollLeft, top: T.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < D.length;
              s++
            ) {
              var O = D[s];
              (O.element.scrollLeft = O.left), (O.element.scrollTop = O.top);
            }
          }
          (Vu = !!af), (nf = af = null);
        } finally {
          (ot = n), (X.p = a), (M.T = l);
        }
      }
      (t.current = e), (Gt = 2);
    }
  }
  function Vo() {
    if (Gt === 2) {
      Gt = 0;
      var t = ml,
        e = ba,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = M.T), (M.T = null);
        var a = X.p;
        X.p = 2;
        var n = ot;
        ot |= 4;
        try {
          _o(t, e.alternate, e);
        } finally {
          (ot = n), (X.p = a), (M.T = l);
        }
      }
      Gt = 3;
    }
  }
  function Ko() {
    if (Gt === 4 || Gt === 3) {
      (Gt = 0), _d();
      var t = ml,
        e = ba,
        l = Sa,
        a = Do;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Gt = 5)
        : ((Gt = 0), (ba = ml = null), ko(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (hl = null),
        si(l),
        (e = e.stateNode),
        ae && typeof ae.onCommitFiberRoot == "function")
      )
        try {
          ae.onCommitFiberRoot(Oa, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = M.T), (n = X.p), (X.p = 2), (M.T = null);
        try {
          for (var u = t.onRecoverableError, c = 0; c < a.length; c++) {
            var s = a[c];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          (M.T = e), (X.p = n);
        }
      }
      (Sa & 3) !== 0 && Du(),
        Oe(t),
        (n = t.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? t === Qc
            ? vn++
            : ((vn = 0), (Qc = t))
          : (vn = 0),
        gn(0);
    }
  }
  function ko(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), $a(e)));
  }
  function Du(t) {
    return Zo(), Vo(), Ko(), Jo();
  }
  function Jo() {
    if (Gt !== 5) return !1;
    var t = ml,
      e = Gc;
    Gc = 0;
    var l = si(Sa),
      a = M.T,
      n = X.p;
    try {
      (X.p = 32 > l ? 32 : l), (M.T = null), (l = Xc), (Xc = null);
      var u = ml,
        c = Sa;
      if (((Gt = 0), (ba = ml = null), (Sa = 0), (ot & 6) !== 0))
        throw Error(f(331));
      var s = ot;
      if (
        ((ot |= 4),
        Oo(u.current),
        No(u, u.current, c, l),
        (ot = s),
        gn(0, !1),
        ae && typeof ae.onPostCommitFiberRoot == "function")
      )
        try {
          ae.onPostCommitFiberRoot(Oa, u);
        } catch {}
      return !0;
    } finally {
      (X.p = n), (M.T = a), ko(t, e);
    }
  }
  function $o(t, e, l) {
    (e = ye(l, e)),
      (e = xc(t.stateNode, e, 2)),
      (t = nl(t, e, 2)),
      t !== null && (Da(t, 2), Oe(t));
  }
  function gt(t, e, l) {
    if (t.tag === 3) $o(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          $o(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (hl === null || !hl.has(a)))
          ) {
            (t = ye(l, t)),
              (l = Ps(2)),
              (a = nl(e, l, 2)),
              a !== null && (Is(l, a, e, t), Da(a, 2), Oe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function kc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new $0();
      var n = new Set();
      a.set(e, n);
    } else (n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n));
    n.has(l) ||
      ((Lc = !0), n.add(l), (t = th.bind(null, t, e, l)), e.then(t, t));
  }
  function th(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      pt === t &&
        (ct & l) === l &&
        (jt === 4 || (jt === 3 && (ct & 62914560) === ct && 300 > je() - Yc)
          ? (ot & 2) === 0 && xa(t, 0)
          : (wc |= l),
        pa === ct && (pa = 0)),
      Oe(t);
  }
  function Wo(t, e) {
    e === 0 && (e = Vf()), (t = aa(t, e)), t !== null && (Da(t, e), Oe(t));
  }
  function eh(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), Wo(t, l);
  }
  function lh(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), Wo(t, l);
  }
  function ah(t, e) {
    return ii(t, e);
  }
  var Uu = null,
    Ea = null,
    Jc = !1,
    Hu = !1,
    $c = !1,
    Xl = 0;
  function Oe(t) {
    t !== Ea &&
      t.next === null &&
      (Ea === null ? (Uu = Ea = t) : (Ea = Ea.next = t)),
      (Hu = !0),
      Jc || ((Jc = !0), uh());
  }
  function gn(t, e) {
    if (!$c && Hu) {
      $c = !0;
      do
        for (var l = !1, a = Uu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes,
                s = a.pingedLanes;
              (u = (1 << (31 - ne(42 | t) + 1)) - 1),
                (u &= n & ~(c & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((l = !0), t1(a, u));
          } else
            (u = ct),
              (u = Gn(
                a,
                a === pt ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || za(a, u) || ((l = !0), t1(a, u));
          a = a.next;
        }
      while (l);
      $c = !1;
    }
  }
  function nh() {
    Fo();
  }
  function Fo() {
    Hu = Jc = !1;
    var t = 0;
    Xl !== 0 && (hh() && (t = Xl), (Xl = 0));
    for (var e = je(), l = null, a = Uu; a !== null; ) {
      var n = a.next,
        u = Po(a, e);
      u === 0
        ? ((a.next = null),
          l === null ? (Uu = n) : (l.next = n),
          n === null && (Ea = l))
        : ((l = a), (t !== 0 || (u & 3) !== 0) && (Hu = !0)),
        (a = n);
    }
    gn(t);
  }
  function Po(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var c = 31 - ne(u),
        s = 1 << c,
        v = n[c];
      v === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[c] = Md(s, e))
        : v <= e && (t.expiredLanes |= s),
        (u &= ~s);
    }
    if (
      ((e = pt),
      (l = ct),
      (l = Gn(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (dt === 2 || dt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && ci(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || za(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && ci(a), si(l))) {
        case 2:
        case 8:
          l = Xf;
          break;
        case 32:
          l = wn;
          break;
        case 268435456:
          l = Qf;
          break;
        default:
          l = wn;
      }
      return (
        (a = Io.bind(null, t)),
        (l = ii(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && ci(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Io(t, e) {
    if (Gt !== 0 && Gt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (Du() && t.callbackNode !== l) return null;
    var a = ct;
    return (
      (a = Gn(
        t,
        t === pt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Ho(t, a, e),
          Po(t, je()),
          t.callbackNode != null && t.callbackNode === l
            ? Io.bind(null, t)
            : null)
    );
  }
  function t1(t, e) {
    if (Du()) return null;
    Ho(t, e, !0);
  }
  function uh() {
    yh(function () {
      (ot & 6) !== 0 ? ii(Gf, nh) : Fo();
    });
  }
  function Wc() {
    return Xl === 0 && (Xl = Zf()), Xl;
  }
  function e1(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Kn("" + t);
  }
  function l1(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function ih(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = e1((n[Ft] || null).action),
        c = a.submitter;
      c &&
        ((e = (e = c[Ft] || null)
          ? e1(e.formAction)
          : c.getAttribute("formAction")),
        e !== null && ((u = e), (c = null)));
      var s = new Wn("action", "action", null, a, n);
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Xl !== 0) {
                  var v = c ? l1(n, c) : new FormData(n);
                  vc(
                    l,
                    { pending: !0, data: v, method: n.method, action: u },
                    null,
                    v
                  );
                }
              } else
                typeof u == "function" &&
                  (s.preventDefault(),
                  (v = c ? l1(n, c) : new FormData(n)),
                  vc(
                    l,
                    { pending: !0, data: v, method: n.method, action: u },
                    u,
                    v
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Fc = 0; Fc < Hi.length; Fc++) {
    var Pc = Hi[Fc],
      ch = Pc.toLowerCase(),
      fh = Pc[0].toUpperCase() + Pc.slice(1);
    _e(ch, "on" + fh);
  }
  _e(Ur, "onAnimationEnd"),
    _e(Hr, "onAnimationIteration"),
    _e(Br, "onAnimationStart"),
    _e("dblclick", "onDoubleClick"),
    _e("focusin", "onFocus"),
    _e("focusout", "onBlur"),
    _e(T0, "onTransitionRun"),
    _e(j0, "onTransitionStart"),
    _e(A0, "onTransitionCancel"),
    _e(Lr, "onTransitionEnd"),
    kl("onMouseEnter", ["mouseout", "mouseover"]),
    kl("onMouseLeave", ["mouseout", "mouseover"]),
    kl("onPointerEnter", ["pointerout", "pointerover"]),
    kl("onPointerLeave", ["pointerout", "pointerover"]),
    jl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    jl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    jl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    jl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    jl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    jl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var pn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    rh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(pn)
    );
  function a1(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c],
              v = s.instance,
              E = s.currentTarget;
            if (((s = s.listener), v !== u && n.isPropagationStopped()))
              break t;
            (u = s), (n.currentTarget = E);
            try {
              u(n);
            } catch (N) {
              _u(N);
            }
            (n.currentTarget = null), (u = v);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((s = a[c]),
              (v = s.instance),
              (E = s.currentTarget),
              (s = s.listener),
              v !== u && n.isPropagationStopped())
            )
              break t;
            (u = s), (n.currentTarget = E);
            try {
              u(n);
            } catch (N) {
              _u(N);
            }
            (n.currentTarget = null), (u = v);
          }
      }
    }
  }
  function ut(t, e) {
    var l = e[oi];
    l === void 0 && (l = e[oi] = new Set());
    var a = t + "__bubble";
    l.has(a) || (n1(e, t, 2, !1), l.add(a));
  }
  function Ic(t, e, l) {
    var a = 0;
    e && (a |= 4), n1(l, t, a, e);
  }
  var Bu = "_reactListening" + Math.random().toString(36).slice(2);
  function tf(t) {
    if (!t[Bu]) {
      (t[Bu] = !0),
        Wf.forEach(function (l) {
          l !== "selectionchange" && (rh.has(l) || Ic(l, !1, t), Ic(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Bu] || ((e[Bu] = !0), Ic("selectionchange", !1, e));
    }
  }
  function n1(t, e, l, a) {
    switch (N1(e)) {
      case 2:
        var n = Bh;
        break;
      case 8:
        n = Lh;
        break;
      default:
        n = yf;
    }
    (l = n.bind(null, e, l, t)),
      (n = void 0),
      !_i ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
        ? t.addEventListener(e, l, { passive: n })
        : t.addEventListener(e, l, !1);
  }
  function ef(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var v = c.tag;
              if ((v === 3 || v === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; s !== null; ) {
            if (((c = Zl(s)), c === null)) return;
            if (((v = c.tag), v === 5 || v === 6 || v === 26 || v === 27)) {
              a = u = c;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    sr(function () {
      var E = u,
        N = Si(l),
        D = [];
      t: {
        var C = wr.get(t);
        if (C !== void 0) {
          var T = Wn,
            I = t;
          switch (t) {
            case "keypress":
              if (Jn(l) === 0) break t;
            case "keydown":
            case "keyup":
              T = a0;
              break;
            case "focusin":
              (I = "focus"), (T = ji);
              break;
            case "focusout":
              (I = "blur"), (T = ji);
              break;
            case "beforeblur":
            case "afterblur":
              T = ji;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = hr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = Vd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = i0;
              break;
            case Ur:
            case Hr:
            case Br:
              T = Jd;
              break;
            case Lr:
              T = f0;
              break;
            case "scroll":
            case "scrollend":
              T = Qd;
              break;
            case "wheel":
              T = s0;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = Wd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = yr;
              break;
            case "toggle":
            case "beforetoggle":
              T = d0;
          }
          var $ = (e & 4) !== 0,
            yt = !$ && (t === "scroll" || t === "scrollend"),
            S = $ ? (C !== null ? C + "Capture" : null) : C;
          $ = [];
          for (var p = E, _; p !== null; ) {
            var O = p;
            if (
              ((_ = O.stateNode),
              (O = O.tag),
              (O !== 5 && O !== 26 && O !== 27) ||
                _ === null ||
                S === null ||
                ((O = Ba(p, S)), O != null && $.push(bn(p, O, _))),
              yt)
            )
              break;
            p = p.return;
          }
          0 < $.length &&
            ((C = new T(C, I, null, l, N)), D.push({ event: C, listeners: $ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((C = t === "mouseover" || t === "pointerover"),
            (T = t === "mouseout" || t === "pointerout"),
            C &&
              l !== bi &&
              (I = l.relatedTarget || l.fromElement) &&
              (Zl(I) || I[Ql]))
          )
            break t;
          if (
            (T || C) &&
            ((C =
              N.window === N
                ? N
                : (C = N.ownerDocument)
                ? C.defaultView || C.parentWindow
                : window),
            T
              ? ((I = l.relatedTarget || l.toElement),
                (T = E),
                (I = I ? Zl(I) : null),
                I !== null &&
                  ((yt = y(I)),
                  ($ = I.tag),
                  I !== yt || ($ !== 5 && $ !== 27 && $ !== 6)) &&
                  (I = null))
              : ((T = null), (I = E)),
            T !== I)
          ) {
            if (
              (($ = hr),
              (O = "onMouseLeave"),
              (S = "onMouseEnter"),
              (p = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                (($ = yr),
                (O = "onPointerLeave"),
                (S = "onPointerEnter"),
                (p = "pointer")),
              (yt = T == null ? C : Ha(T)),
              (_ = I == null ? C : Ha(I)),
              (C = new $(O, p + "leave", T, l, N)),
              (C.target = yt),
              (C.relatedTarget = _),
              (O = null),
              Zl(N) === E &&
                (($ = new $(S, p + "enter", I, l, N)),
                ($.target = _),
                ($.relatedTarget = yt),
                (O = $)),
              (yt = O),
              T && I)
            )
              e: {
                for ($ = T, S = I, p = 0, _ = $; _; _ = Ca(_)) p++;
                for (_ = 0, O = S; O; O = Ca(O)) _++;
                for (; 0 < p - _; ) ($ = Ca($)), p--;
                for (; 0 < _ - p; ) (S = Ca(S)), _--;
                for (; p--; ) {
                  if ($ === S || (S !== null && $ === S.alternate)) break e;
                  ($ = Ca($)), (S = Ca(S));
                }
                $ = null;
              }
            else $ = null;
            T !== null && u1(D, C, T, $, !1),
              I !== null && yt !== null && u1(D, yt, I, $, !0);
          }
        }
        t: {
          if (
            ((C = E ? Ha(E) : window),
            (T = C.nodeName && C.nodeName.toLowerCase()),
            T === "select" || (T === "input" && C.type === "file"))
          )
            var V = Er;
          else if (xr(C))
            if (Cr) V = _0;
            else {
              V = S0;
              var at = b0;
            }
          else
            (T = C.nodeName),
              !T ||
              T.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? E && pi(E.elementType) && (V = Er)
                : (V = x0);
          if (V && (V = V(t, E))) {
            _r(D, V, l, N);
            break t;
          }
          at && at(t, C, E),
            t === "focusout" &&
              E &&
              C.type === "number" &&
              E.memoizedProps.value != null &&
              gi(C, "number", C.value);
        }
        switch (((at = E ? Ha(E) : window), t)) {
          case "focusin":
            (xr(at) || at.contentEditable === "true") &&
              ((ta = at), (zi = E), (Za = null));
            break;
          case "focusout":
            Za = zi = ta = null;
            break;
          case "mousedown":
            Di = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Di = !1), zr(D, l, N);
            break;
          case "selectionchange":
            if (C0) break;
          case "keydown":
          case "keyup":
            zr(D, l, N);
        }
        var k;
        if (Ni)
          t: {
            switch (t) {
              case "compositionstart":
                var W = "onCompositionStart";
                break t;
              case "compositionend":
                W = "onCompositionEnd";
                break t;
              case "compositionupdate":
                W = "onCompositionUpdate";
                break t;
            }
            W = void 0;
          }
        else
          Il
            ? br(t, l) && (W = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (W = "onCompositionStart");
        W &&
          (vr &&
            l.locale !== "ko" &&
            (Il || W !== "onCompositionStart"
              ? W === "onCompositionEnd" && Il && (k = or())
              : ((tl = N),
                (Ei = "value" in tl ? tl.value : tl.textContent),
                (Il = !0))),
          (at = Lu(E, W)),
          0 < at.length &&
            ((W = new mr(W, t, null, l, N)),
            D.push({ event: W, listeners: at }),
            k ? (W.data = k) : ((k = Sr(l)), k !== null && (W.data = k)))),
          (k = m0 ? y0(t, l) : v0(t, l)) &&
            ((W = Lu(E, "onBeforeInput")),
            0 < W.length &&
              ((at = new mr("onBeforeInput", "beforeinput", null, l, N)),
              D.push({ event: at, listeners: W }),
              (at.data = k))),
          ih(D, t, E, l, N);
      }
      a1(D, e);
    });
  }
  function bn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Lu(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Ba(t, l)),
          n != null && a.unshift(bn(t, n, u)),
          (n = Ba(t, e)),
          n != null && a.push(bn(t, n, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Ca(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function u1(t, e, l, a, n) {
    for (var u = e._reactName, c = []; l !== null && l !== a; ) {
      var s = l,
        v = s.alternate,
        E = s.stateNode;
      if (((s = s.tag), v !== null && v === a)) break;
      (s !== 5 && s !== 26 && s !== 27) ||
        E === null ||
        ((v = E),
        n
          ? ((E = Ba(l, u)), E != null && c.unshift(bn(l, E, v)))
          : n || ((E = Ba(l, u)), E != null && c.push(bn(l, E, v)))),
        (l = l.return);
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var sh = /\r\n?/g,
    oh = /\u0000|\uFFFD/g;
  function i1(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        sh,
        `
`
      )
      .replace(oh, "");
  }
  function c1(t, e) {
    return (e = i1(e)), i1(t) === e;
  }
  function wu() {}
  function mt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Wl(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Wl(t, "" + a);
        break;
      case "className":
        Qn(t, "class", a);
        break;
      case "tabIndex":
        Qn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Qn(t, l, a);
        break;
      case "style":
        fr(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Qn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = Kn("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (e !== "input" && mt(t, e, "name", n.name, n, null),
                mt(t, e, "formEncType", n.formEncType, n, null),
                mt(t, e, "formMethod", n.formMethod, n, null),
                mt(t, e, "formTarget", n.formTarget, n, null))
              : (mt(t, e, "encType", n.encType, n, null),
                mt(t, e, "method", n.method, n, null),
                mt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Kn("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = wu);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = Kn("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        ut("beforetoggle", t), ut("toggle", t), Xn(t, "popover", a);
        break;
      case "xlinkActuate":
        De(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        De(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        De(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        De(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        De(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        De(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        De(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        De(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        De(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Xn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Gd.get(l) || l), Xn(t, l, a));
    }
  }
  function lf(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        fr(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Wl(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Wl(t, "" + a);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = wu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ff.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (u = t[Ft] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && t.removeEventListener(e, u, n),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : Xn(t, l, a);
          }
    }
  }
  function Xt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ut("error", t), ut("load", t);
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  mt(t, e, u, c, l, null);
              }
          }
        n && mt(t, e, "srcSet", l.srcSet, l, null),
          a && mt(t, e, "src", l.src, l, null);
        return;
      case "input":
        ut("invalid", t);
        var s = (u = c = n = null),
          v = null,
          E = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var N = l[a];
            if (N != null)
              switch (a) {
                case "name":
                  n = N;
                  break;
                case "type":
                  c = N;
                  break;
                case "checked":
                  v = N;
                  break;
                case "defaultChecked":
                  E = N;
                  break;
                case "value":
                  u = N;
                  break;
                case "defaultValue":
                  s = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null) throw Error(f(137, e));
                  break;
                default:
                  mt(t, e, a, N, l, null);
              }
          }
        nr(t, u, s, v, E, c, n, !1), Zn(t);
        return;
      case "select":
        ut("invalid", t), (a = c = u = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                c = s;
                break;
              case "multiple":
                a = s;
              default:
                mt(t, e, n, s, l, null);
            }
        (e = u),
          (l = c),
          (t.multiple = !!a),
          e != null ? $l(t, !!a, e, !1) : l != null && $l(t, !!a, l, !0);
        return;
      case "textarea":
        ut("invalid", t), (u = n = a = null);
        for (c in l)
          if (l.hasOwnProperty(c) && ((s = l[c]), s != null))
            switch (c) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(f(91));
                break;
              default:
                mt(t, e, c, s, l, null);
            }
        ir(t, a, n, u), Zn(t);
        return;
      case "option":
        for (v in l)
          if (l.hasOwnProperty(v) && ((a = l[v]), a != null))
            switch (v) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                mt(t, e, v, a, l, null);
            }
        return;
      case "dialog":
        ut("beforetoggle", t), ut("toggle", t), ut("cancel", t), ut("close", t);
        break;
      case "iframe":
      case "object":
        ut("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < pn.length; a++) ut(pn[a], t);
        break;
      case "image":
        ut("error", t), ut("load", t);
        break;
      case "details":
        ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ut("error", t), ut("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in l)
          if (l.hasOwnProperty(E) && ((a = l[E]), a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                mt(t, e, E, a, l, null);
            }
        return;
      default:
        if (pi(e)) {
          for (N in l)
            l.hasOwnProperty(N) &&
              ((a = l[N]), a !== void 0 && lf(t, e, N, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && mt(t, e, s, a, l, null));
  }
  function dh(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          c = null,
          s = null,
          v = null,
          E = null,
          N = null;
        for (T in l) {
          var D = l[T];
          if (l.hasOwnProperty(T) && D != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = D;
              default:
                a.hasOwnProperty(T) || mt(t, e, T, null, a, D);
            }
        }
        for (var C in a) {
          var T = a[C];
          if (((D = l[C]), a.hasOwnProperty(C) && (T != null || D != null)))
            switch (C) {
              case "type":
                u = T;
                break;
              case "name":
                n = T;
                break;
              case "checked":
                E = T;
                break;
              case "defaultChecked":
                N = T;
                break;
              case "value":
                c = T;
                break;
              case "defaultValue":
                s = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(f(137, e));
                break;
              default:
                T !== D && mt(t, e, C, T, a, D);
            }
        }
        vi(t, c, s, v, E, N, u, n);
        return;
      case "select":
        T = c = s = C = null;
        for (u in l)
          if (((v = l[u]), l.hasOwnProperty(u) && v != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                T = v;
              default:
                a.hasOwnProperty(u) || mt(t, e, u, null, a, v);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (v = l[n]),
            a.hasOwnProperty(n) && (u != null || v != null))
          )
            switch (n) {
              case "value":
                C = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== v && mt(t, e, n, u, a, v);
            }
        (e = s),
          (l = c),
          (a = T),
          C != null
            ? $l(t, !!l, C, !1)
            : !!a != !!l &&
              (e != null ? $l(t, !!l, e, !0) : $l(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        T = C = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                mt(t, e, s, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
            (u = l[c]),
            a.hasOwnProperty(c) && (n != null || u != null))
          )
            switch (c) {
              case "value":
                C = n;
                break;
              case "defaultValue":
                T = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && mt(t, e, c, n, a, u);
            }
        ur(t, C, T);
        return;
      case "option":
        for (var I in l)
          if (
            ((C = l[I]),
            l.hasOwnProperty(I) && C != null && !a.hasOwnProperty(I))
          )
            switch (I) {
              case "selected":
                t.selected = !1;
                break;
              default:
                mt(t, e, I, null, a, C);
            }
        for (v in a)
          if (
            ((C = a[v]),
            (T = l[v]),
            a.hasOwnProperty(v) && C !== T && (C != null || T != null))
          )
            switch (v) {
              case "selected":
                t.selected =
                  C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                mt(t, e, v, C, a, T);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var $ in l)
          (C = l[$]),
            l.hasOwnProperty($) &&
              C != null &&
              !a.hasOwnProperty($) &&
              mt(t, e, $, null, a, C);
        for (E in a)
          if (
            ((C = a[E]),
            (T = l[E]),
            a.hasOwnProperty(E) && C !== T && (C != null || T != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(f(137, e));
                break;
              default:
                mt(t, e, E, C, a, T);
            }
        return;
      default:
        if (pi(e)) {
          for (var yt in l)
            (C = l[yt]),
              l.hasOwnProperty(yt) &&
                C !== void 0 &&
                !a.hasOwnProperty(yt) &&
                lf(t, e, yt, void 0, a, C);
          for (N in a)
            (C = a[N]),
              (T = l[N]),
              !a.hasOwnProperty(N) ||
                C === T ||
                (C === void 0 && T === void 0) ||
                lf(t, e, N, C, a, T);
          return;
        }
    }
    for (var S in l)
      (C = l[S]),
        l.hasOwnProperty(S) &&
          C != null &&
          !a.hasOwnProperty(S) &&
          mt(t, e, S, null, a, C);
    for (D in a)
      (C = a[D]),
        (T = l[D]),
        !a.hasOwnProperty(D) ||
          C === T ||
          (C == null && T == null) ||
          mt(t, e, D, C, a, T);
  }
  var af = null,
    nf = null;
  function qu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function f1(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function r1(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function uf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cf = null;
  function hh() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === cf
        ? !1
        : ((cf = t), !0)
      : ((cf = null), !1);
  }
  var s1 = typeof setTimeout == "function" ? setTimeout : void 0,
    mh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    o1 = typeof Promise == "function" ? Promise : void 0,
    yh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof o1 < "u"
        ? function (t) {
            return o1.resolve(null).then(t).catch(vh);
          }
        : s1;
  function vh(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function vl(t) {
    return t === "head";
  }
  function d1(t, e) {
    var l = e,
      a = 0,
      n = 0;
    do {
      var u = l.nextSibling;
      if ((t.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var c = t.ownerDocument;
            if ((l & 1 && Sn(c.documentElement), l & 2 && Sn(c.body), l & 4))
              for (l = c.head, Sn(l), c = l.firstChild; c; ) {
                var s = c.nextSibling,
                  v = c.nodeName;
                c[Ua] ||
                  v === "SCRIPT" ||
                  v === "STYLE" ||
                  (v === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(c),
                  (c = s);
              }
          }
          if (n === 0) {
            t.removeChild(u), Nn(e);
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? n++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = u;
    } while (l);
    Nn(e);
  }
  function ff(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ff(l), di(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function gh(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Ua])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = Ce(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function ph(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Ce(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function rf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function bh(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") e();
    else {
      var a = function () {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Ce(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var sf = null;
  function h1(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function m1(t, e, l) {
    switch (((e = qu(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(f(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(f(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function Sn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    di(t);
  }
  var xe = new Map(),
    y1 = new Set();
  function Yu(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var ke = X.d;
  X.d = { f: Sh, r: xh, D: _h, C: Eh, L: Ch, m: Th, X: Ah, S: jh, M: Nh };
  function Sh() {
    var t = ke.f(),
      e = Ou();
    return t || e;
  }
  function xh(t) {
    var e = Vl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Us(e) : ke.r(t);
  }
  var Ta = typeof document > "u" ? null : document;
  function v1(t, e, l) {
    var a = Ta;
    if (a && typeof e == "string" && e) {
      var n = me(e);
      (n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        y1.has(n) ||
          (y1.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            Xt(e, "link", t),
            Bt(e),
            a.head.appendChild(e)));
    }
  }
  function _h(t) {
    ke.D(t), v1("dns-prefetch", t, null);
  }
  function Eh(t, e) {
    ke.C(t, e), v1("preconnect", t, e);
  }
  function Ch(t, e, l) {
    ke.L(t, e, l);
    var a = Ta;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + me(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + me(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + me(l.imageSizes) + '"]'))
        : (n += '[href="' + me(t) + '"]');
      var u = n;
      switch (e) {
        case "style":
          u = ja(t);
          break;
        case "script":
          u = Aa(t);
      }
      xe.has(u) ||
        ((t = A(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        xe.set(u, t),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(xn(u))) ||
          (e === "script" && a.querySelector(_n(u))) ||
          ((e = a.createElement("link")),
          Xt(e, "link", t),
          Bt(e),
          a.head.appendChild(e)));
    }
  }
  function Th(t, e) {
    ke.m(t, e);
    var l = Ta;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + me(a) + '"][href="' + me(t) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Aa(t);
      }
      if (
        !xe.has(u) &&
        ((t = A({ rel: "modulepreload", href: t }, e)),
        xe.set(u, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(_n(u))) return;
        }
        (a = l.createElement("link")),
          Xt(a, "link", t),
          Bt(a),
          l.head.appendChild(a);
      }
    }
  }
  function jh(t, e, l) {
    ke.S(t, e, l);
    var a = Ta;
    if (a && t) {
      var n = Kl(a).hoistableStyles,
        u = ja(t);
      e = e || "default";
      var c = n.get(u);
      if (!c) {
        var s = { loading: 0, preload: null };
        if ((c = a.querySelector(xn(u)))) s.loading = 5;
        else {
          (t = A({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = xe.get(u)) && of(t, l);
          var v = (c = a.createElement("link"));
          Bt(v),
            Xt(v, "link", t),
            (v._p = new Promise(function (E, N) {
              (v.onload = E), (v.onerror = N);
            })),
            v.addEventListener("load", function () {
              s.loading |= 1;
            }),
            v.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Gu(c, e, a);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: s }),
          n.set(u, c);
      }
    }
  }
  function Ah(t, e) {
    ke.X(t, e);
    var l = Ta;
    if (l && t) {
      var a = Kl(l).hoistableScripts,
        n = Aa(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(_n(n))),
        u ||
          ((t = A({ src: t, async: !0 }, e)),
          (e = xe.get(n)) && df(t, e),
          (u = l.createElement("script")),
          Bt(u),
          Xt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Nh(t, e) {
    ke.M(t, e);
    var l = Ta;
    if (l && t) {
      var a = Kl(l).hoistableScripts,
        n = Aa(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(_n(n))),
        u ||
          ((t = A({ src: t, async: !0, type: "module" }, e)),
          (e = xe.get(n)) && df(t, e),
          (u = l.createElement("script")),
          Bt(u),
          Xt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function g1(t, e, l, a) {
    var n = (n = tt.current) ? Yu(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = ja(l.href)),
            (l = Kl(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = ja(l.href);
          var u = Kl(n).hoistableStyles,
            c = u.get(t);
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, c),
              (u = n.querySelector(xn(t))) &&
                !u._p &&
                ((c.instance = u), (c.state.loading = 5)),
              xe.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                xe.set(t, l),
                u || Rh(n, t, l, c.state))),
            e && a === null)
          )
            throw Error(f(528, ""));
          return c;
        }
        if (e && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Aa(l)),
              (l = Kl(n).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function ja(t) {
    return 'href="' + me(t) + '"';
  }
  function xn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function p1(t) {
    return A({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Rh(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Xt(e, "link", l),
        Bt(e),
        t.head.appendChild(e));
  }
  function Aa(t) {
    return '[src="' + me(t) + '"]';
  }
  function _n(t) {
    return "script[async]" + t;
  }
  function b1(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + me(l.href) + '"]');
          if (a) return (e.instance = a), Bt(a), a;
          var n = A({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Bt(a),
            Xt(a, "style", n),
            Gu(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          n = ja(l.href);
          var u = t.querySelector(xn(n));
          if (u) return (e.state.loading |= 4), (e.instance = u), Bt(u), u;
          (a = p1(l)),
            (n = xe.get(n)) && of(a, n),
            (u = (t.ownerDocument || t).createElement("link")),
            Bt(u);
          var c = u;
          return (
            (c._p = new Promise(function (s, v) {
              (c.onload = s), (c.onerror = v);
            })),
            Xt(u, "link", a),
            (e.state.loading |= 4),
            Gu(u, l.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = Aa(l.src)),
            (n = t.querySelector(_n(u)))
              ? ((e.instance = n), Bt(n), n)
              : ((a = l),
                (n = xe.get(u)) && ((a = A({}, l)), df(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                Bt(n),
                Xt(n, "link", a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Gu(a, l.precedence, t));
    return e.instance;
  }
  function Gu(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var s = a[c];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function of(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function df(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Xu = null;
  function S1(t, e, l) {
    if (Xu === null) {
      var a = new Map(),
        n = (Xu = new Map());
      n.set(l, a);
    } else (n = Xu), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[Ua] ||
          u[Kt] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = u.getAttribute(e) || "";
        c = t + c;
        var s = a.get(c);
        s ? s.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function x1(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Mh(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function _1(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var En = null;
  function Oh() {}
  function zh(t, e, l) {
    if (En === null) throw Error(f(475));
    var a = En;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var n = ja(l.href),
          u = t.querySelector(xn(n));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Qu.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = u),
            Bt(u);
          return;
        }
        (u = t.ownerDocument || t),
          (l = p1(l)),
          (n = xe.get(n)) && of(l, n),
          (u = u.createElement("link")),
          Bt(u);
        var c = u;
        (c._p = new Promise(function (s, v) {
          (c.onload = s), (c.onerror = v);
        })),
          Xt(u, "link", l),
          (e.instance = u);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Qu.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Dh() {
    if (En === null) throw Error(f(475));
    var t = En;
    return (
      t.stylesheets && t.count === 0 && hf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && hf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function Qu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) hf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Zu = null;
  function hf(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Zu = new Map()),
        e.forEach(Uh, t),
        (Zu = null),
        Qu.call(t));
  }
  function Uh(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Zu.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Zu.set(t, l);
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      (n = e.instance),
        (c = n.getAttribute("data-precedence")),
        (u = l.get(c) || a),
        u === a && l.set(null, n),
        l.set(c, n),
        this.count++,
        (a = Qu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Cn = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0,
  };
  function Hh(t, e, l, a, n, u, c, s) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = fi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = fi(0)),
      (this.hiddenUpdates = fi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map());
  }
  function E1(t, e, l, a, n, u, c, s, v, E, N, D) {
    return (
      (t = new Hh(t, e, l, c, s, v, E, D)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = ie(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = ki()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      Fi(u),
      t
    );
  }
  function C1(t) {
    return t ? ((t = na), t) : na;
  }
  function T1(t, e, l, a, n, u) {
    (n = C1(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = al(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = nl(t, a, e)),
      l !== null && (oe(l, t, e), Ia(l, t, e));
  }
  function j1(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function mf(t, e) {
    j1(t, e), (t = t.alternate) && j1(t, e);
  }
  function A1(t) {
    if (t.tag === 13) {
      var e = aa(t, 67108864);
      e !== null && oe(e, t, 67108864), mf(t, 67108864);
    }
  }
  var Vu = !0;
  function Bh(t, e, l, a) {
    var n = M.T;
    M.T = null;
    var u = X.p;
    try {
      (X.p = 2), yf(t, e, l, a);
    } finally {
      (X.p = u), (M.T = n);
    }
  }
  function Lh(t, e, l, a) {
    var n = M.T;
    M.T = null;
    var u = X.p;
    try {
      (X.p = 8), yf(t, e, l, a);
    } finally {
      (X.p = u), (M.T = n);
    }
  }
  function yf(t, e, l, a) {
    if (Vu) {
      var n = vf(a);
      if (n === null) ef(t, e, a, Ku, l), R1(t, a);
      else if (qh(n, t, e, l, a)) a.stopPropagation();
      else if ((R1(t, a), e & 4 && -1 < wh.indexOf(t))) {
        for (; n !== null; ) {
          var u = Vl(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = Tl(u.pendingLanes);
                  if (c !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var v = 1 << (31 - ne(c));
                      (s.entanglements[1] |= v), (c &= ~v);
                    }
                    Oe(u), (ot & 6) === 0 && ((Ru = je() + 500), gn(0));
                  }
                }
                break;
              case 13:
                (s = aa(u, 2)), s !== null && oe(s, u, 2), Ou(), mf(u, 2);
            }
          if (((u = vf(a)), u === null && ef(t, e, a, Ku, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else ef(t, e, a, null, l);
    }
  }
  function vf(t) {
    return (t = Si(t)), gf(t);
  }
  var Ku = null;
  function gf(t) {
    if (((Ku = null), (t = Zl(t)), t !== null)) {
      var e = y(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = x(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Ku = t), null;
  }
  function N1(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ed()) {
          case Gf:
            return 2;
          case Xf:
            return 8;
          case wn:
          case Cd:
            return 32;
          case Qf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var pf = !1,
    gl = null,
    pl = null,
    bl = null,
    Tn = new Map(),
    jn = new Map(),
    Sl = [],
    wh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function R1(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        gl = null;
        break;
      case "dragenter":
      case "dragleave":
        pl = null;
        break;
      case "mouseover":
      case "mouseout":
        bl = null;
        break;
      case "pointerover":
      case "pointerout":
        Tn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        jn.delete(e.pointerId);
    }
  }
  function An(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = Vl(e)), e !== null && A1(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function qh(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return (gl = An(gl, t, e, l, a, n)), !0;
      case "dragenter":
        return (pl = An(pl, t, e, l, a, n)), !0;
      case "mouseover":
        return (bl = An(bl, t, e, l, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return Tn.set(u, An(Tn.get(u) || null, t, e, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), jn.set(u, An(jn.get(u) || null, t, e, l, a, n)), !0
        );
    }
    return !1;
  }
  function M1(t) {
    var e = Zl(t.target);
    if (e !== null) {
      var l = y(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = x(l)), e !== null)) {
            (t.blockedOn = e),
              zd(t.priority, function () {
                if (l.tag === 13) {
                  var a = se();
                  a = ri(a);
                  var n = aa(l, a);
                  n !== null && oe(n, l, a), mf(l, a);
                }
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ku(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = vf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (bi = a), l.target.dispatchEvent(a), (bi = null);
      } else return (e = Vl(l)), e !== null && A1(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function O1(t, e, l) {
    ku(t) && l.delete(e);
  }
  function Yh() {
    (pf = !1),
      gl !== null && ku(gl) && (gl = null),
      pl !== null && ku(pl) && (pl = null),
      bl !== null && ku(bl) && (bl = null),
      Tn.forEach(O1),
      jn.forEach(O1);
  }
  function Ju(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      pf ||
        ((pf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Yh)));
  }
  var $u = null;
  function z1(t) {
    $u !== t &&
      (($u = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        $u === t && ($u = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != "function") {
            if (gf(a || l) === null) continue;
            break;
          }
          var u = Vl(l);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            vc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Nn(t) {
    function e(v) {
      return Ju(v, t);
    }
    gl !== null && Ju(gl, t),
      pl !== null && Ju(pl, t),
      bl !== null && Ju(bl, t),
      Tn.forEach(e),
      jn.forEach(e);
    for (var l = 0; l < Sl.length; l++) {
      var a = Sl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Sl.length && ((l = Sl[0]), l.blockedOn === null); )
      M1(l), l.blockedOn === null && Sl.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          c = n[Ft] || null;
        if (typeof u == "function") c || z1(l);
        else if (c) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (c = u[Ft] || null))) s = c.formAction;
            else if (gf(n) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            z1(l);
        }
      }
  }
  function bf(t) {
    this._internalRoot = t;
  }
  (Wu.prototype.render = bf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = se();
      T1(l, a, t, e, null, null);
    }),
    (Wu.prototype.unmount = bf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          T1(t.current, 2, null, t, null, null), Ou(), (e[Ql] = null);
        }
      });
  function Wu(t) {
    this._internalRoot = t;
  }
  Wu.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Jf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Sl.length && e !== 0 && e < Sl[l].priority; l++);
      Sl.splice(l, 0, t), l === 0 && M1(t);
    }
  };
  var D1 = d.version;
  if (D1 !== "19.1.0") throw Error(f(527, D1, "19.1.0"));
  X.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(f(188))
        : ((t = Object.keys(t).join(",")), Error(f(268, t)));
    return (
      (t = b(e)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Gh = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fu.isDisabled && Fu.supportsFiber)
      try {
        (Oa = Fu.inject(Gh)), (ae = Fu);
      } catch {}
  }
  return (
    (Mn.createRoot = function (t, e) {
      if (!h(t)) throw Error(f(299));
      var l = !1,
        a = "",
        n = Js,
        u = $s,
        c = Ws,
        s = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (s = e.unstable_transitionCallbacks)),
        (e = E1(t, 1, !1, null, null, l, a, n, u, c, s, null)),
        (t[Ql] = e.current),
        tf(t),
        new bf(e)
      );
    }),
    (Mn.hydrateRoot = function (t, e, l) {
      if (!h(t)) throw Error(f(299));
      var a = !1,
        n = "",
        u = Js,
        c = $s,
        s = Ws,
        v = null,
        E = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (v = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (E = l.formState)),
        (e = E1(t, 1, !0, e, l ?? null, a, n, u, c, s, v, E)),
        (e.context = C1(null)),
        (l = e.current),
        (a = se()),
        (a = ri(a)),
        (n = al(a)),
        (n.callback = null),
        nl(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Da(e, l),
        Oe(e),
        (t[Ql] = e.current),
        tf(t),
        new Wu(e)
      );
    }),
    (Mn.version = "19.1.0"),
    Mn
  );
}
var Z1;
function Fh() {
  if (Z1) return _f.exports;
  Z1 = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (d) {
        console.error(d);
      }
  }
  return i(), (_f.exports = Wh()), _f.exports;
}
var Ph = Fh(),
  On = {},
  V1;
function Ih() {
  if (V1) return On;
  (V1 = 1),
    Object.defineProperty(On, "__esModule", { value: !0 }),
    (On.parse = x),
    (On.serialize = m);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    d = /^[\u0021-\u003A\u003C-\u007E]*$/,
    o =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    f = /^[\u0020-\u003A\u003D-\u007E]*$/,
    h = Object.prototype.toString,
    y = (() => {
      const z = function () {};
      return (z.prototype = Object.create(null)), z;
    })();
  function x(z, Y) {
    const H = new y(),
      B = z.length;
    if (B < 2) return H;
    const Q = (Y == null ? void 0 : Y.decode) || A;
    let w = 0;
    do {
      const q = z.indexOf("=", w);
      if (q === -1) break;
      const K = z.indexOf(";", w),
        it = K === -1 ? B : K;
      if (q > it) {
        w = z.lastIndexOf(";", q - 1) + 1;
        continue;
      }
      const F = j(z, w, q),
        Mt = b(z, q, F),
        Ct = z.slice(F, Mt);
      if (H[Ct] === void 0) {
        let At = j(z, q + 1, it),
          bt = b(z, it, At);
        const $t = Q(z.slice(At, bt));
        H[Ct] = $t;
      }
      w = it + 1;
    } while (w < B);
    return H;
  }
  function j(z, Y, H) {
    do {
      const B = z.charCodeAt(Y);
      if (B !== 32 && B !== 9) return Y;
    } while (++Y < H);
    return H;
  }
  function b(z, Y, H) {
    for (; Y > H; ) {
      const B = z.charCodeAt(--Y);
      if (B !== 32 && B !== 9) return Y + 1;
    }
    return H;
  }
  function m(z, Y, H) {
    const B = (H == null ? void 0 : H.encode) || encodeURIComponent;
    if (!i.test(z)) throw new TypeError(`argument name is invalid: ${z}`);
    const Q = B(Y);
    if (!d.test(Q)) throw new TypeError(`argument val is invalid: ${Y}`);
    let w = z + "=" + Q;
    if (!H) return w;
    if (H.maxAge !== void 0) {
      if (!Number.isInteger(H.maxAge))
        throw new TypeError(`option maxAge is invalid: ${H.maxAge}`);
      w += "; Max-Age=" + H.maxAge;
    }
    if (H.domain) {
      if (!o.test(H.domain))
        throw new TypeError(`option domain is invalid: ${H.domain}`);
      w += "; Domain=" + H.domain;
    }
    if (H.path) {
      if (!f.test(H.path))
        throw new TypeError(`option path is invalid: ${H.path}`);
      w += "; Path=" + H.path;
    }
    if (H.expires) {
      if (!L(H.expires) || !Number.isFinite(H.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${H.expires}`);
      w += "; Expires=" + H.expires.toUTCString();
    }
    if (
      (H.httpOnly && (w += "; HttpOnly"),
      H.secure && (w += "; Secure"),
      H.partitioned && (w += "; Partitioned"),
      H.priority)
    )
      switch (
        typeof H.priority == "string" ? H.priority.toLowerCase() : void 0
      ) {
        case "low":
          w += "; Priority=Low";
          break;
        case "medium":
          w += "; Priority=Medium";
          break;
        case "high":
          w += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${H.priority}`);
      }
    if (H.sameSite)
      switch (
        typeof H.sameSite == "string" ? H.sameSite.toLowerCase() : H.sameSite
      ) {
        case !0:
        case "strict":
          w += "; SameSite=Strict";
          break;
        case "lax":
          w += "; SameSite=Lax";
          break;
        case "none":
          w += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${H.sameSite}`);
      }
    return w;
  }
  function A(z) {
    if (z.indexOf("%") === -1) return z;
    try {
      return decodeURIComponent(z);
    } catch {
      return z;
    }
  }
  function L(z) {
    return h.call(z) === "[object Date]";
  }
  return On;
}
Ih();
var K1 = "popstate";
function tm(i = {}) {
  function d(f, h) {
    let { pathname: y, search: x, hash: j } = f.location;
    return Rf(
      "",
      { pathname: y, search: x, hash: j },
      (h.state && h.state.usr) || null,
      (h.state && h.state.key) || "default"
    );
  }
  function o(f, h) {
    return typeof h == "string" ? h : Dn(h);
  }
  return lm(d, o, null, i);
}
function Et(i, d) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(d);
}
function Te(i, d) {
  if (!i) {
    typeof console < "u" && console.warn(d);
    try {
      throw new Error(d);
    } catch {}
  }
}
function em() {
  return Math.random().toString(36).substring(2, 10);
}
function k1(i, d) {
  return { usr: i.state, key: i.key, idx: d };
}
function Rf(i, d, o = null, f) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof d == "string" ? Ra(d) : d),
    state: o,
    key: (d && d.key) || f || em(),
  };
}
function Dn({ pathname: i = "/", search: d = "", hash: o = "" }) {
  return (
    d && d !== "?" && (i += d.charAt(0) === "?" ? d : "?" + d),
    o && o !== "#" && (i += o.charAt(0) === "#" ? o : "#" + o),
    i
  );
}
function Ra(i) {
  let d = {};
  if (i) {
    let o = i.indexOf("#");
    o >= 0 && ((d.hash = i.substring(o)), (i = i.substring(0, o)));
    let f = i.indexOf("?");
    f >= 0 && ((d.search = i.substring(f)), (i = i.substring(0, f))),
      i && (d.pathname = i);
  }
  return d;
}
function lm(i, d, o, f = {}) {
  let { window: h = document.defaultView, v5Compat: y = !1 } = f,
    x = h.history,
    j = "POP",
    b = null,
    m = A();
  m == null && ((m = 0), x.replaceState({ ...x.state, idx: m }, ""));
  function A() {
    return (x.state || { idx: null }).idx;
  }
  function L() {
    j = "POP";
    let Q = A(),
      w = Q == null ? null : Q - m;
    (m = Q), b && b({ action: j, location: B.location, delta: w });
  }
  function z(Q, w) {
    j = "PUSH";
    let q = Rf(B.location, Q, w);
    m = A() + 1;
    let K = k1(q, m),
      it = B.createHref(q);
    try {
      x.pushState(K, "", it);
    } catch (F) {
      if (F instanceof DOMException && F.name === "DataCloneError") throw F;
      h.location.assign(it);
    }
    y && b && b({ action: j, location: B.location, delta: 1 });
  }
  function Y(Q, w) {
    j = "REPLACE";
    let q = Rf(B.location, Q, w);
    m = A();
    let K = k1(q, m),
      it = B.createHref(q);
    x.replaceState(K, "", it),
      y && b && b({ action: j, location: B.location, delta: 0 });
  }
  function H(Q) {
    return am(Q);
  }
  let B = {
    get action() {
      return j;
    },
    get location() {
      return i(h, x);
    },
    listen(Q) {
      if (b) throw new Error("A history only accepts one active listener");
      return (
        h.addEventListener(K1, L),
        (b = Q),
        () => {
          h.removeEventListener(K1, L), (b = null);
        }
      );
    },
    createHref(Q) {
      return d(h, Q);
    },
    createURL: H,
    encodeLocation(Q) {
      let w = H(Q);
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: z,
    replace: Y,
    go(Q) {
      return x.go(Q);
    },
  };
  return B;
}
function am(i, d = !1) {
  let o = "http://localhost";
  typeof window < "u" &&
    (o =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Et(o, "No window.location.(origin|href) available to create URL");
  let f = typeof i == "string" ? i : Dn(i);
  return (
    (f = f.replace(/ $/, "%20")),
    !d && f.startsWith("//") && (f = o + f),
    new URL(f, o)
  );
}
function td(i, d, o = "/") {
  return nm(i, d, o, !1);
}
function nm(i, d, o, f) {
  let h = typeof d == "string" ? Ra(d) : d,
    y = $e(h.pathname || "/", o);
  if (y == null) return null;
  let x = ed(i);
  um(x);
  let j = null;
  for (let b = 0; j == null && b < x.length; ++b) {
    let m = vm(y);
    j = mm(x[b], m, f);
  }
  return j;
}
function ed(i, d = [], o = [], f = "") {
  let h = (y, x, j) => {
    let b = {
      relativePath: j === void 0 ? y.path || "" : j,
      caseSensitive: y.caseSensitive === !0,
      childrenIndex: x,
      route: y,
    };
    b.relativePath.startsWith("/") &&
      (Et(
        b.relativePath.startsWith(f),
        `Absolute route path "${b.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (b.relativePath = b.relativePath.slice(f.length)));
    let m = Je([f, b.relativePath]),
      A = o.concat(b);
    y.children &&
      y.children.length > 0 &&
      (Et(
        y.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      ed(y.children, d, A, m)),
      !(y.path == null && !y.index) &&
        d.push({ path: m, score: dm(m, y.index), routesMeta: A });
  };
  return (
    i.forEach((y, x) => {
      var j;
      if (y.path === "" || !((j = y.path) != null && j.includes("?"))) h(y, x);
      else for (let b of ld(y.path)) h(y, x, b);
    }),
    d
  );
}
function ld(i) {
  let d = i.split("/");
  if (d.length === 0) return [];
  let [o, ...f] = d,
    h = o.endsWith("?"),
    y = o.replace(/\?$/, "");
  if (f.length === 0) return h ? [y, ""] : [y];
  let x = ld(f.join("/")),
    j = [];
  return (
    j.push(...x.map((b) => (b === "" ? y : [y, b].join("/")))),
    h && j.push(...x),
    j.map((b) => (i.startsWith("/") && b === "" ? "/" : b))
  );
}
function um(i) {
  i.sort((d, o) =>
    d.score !== o.score
      ? o.score - d.score
      : hm(
          d.routesMeta.map((f) => f.childrenIndex),
          o.routesMeta.map((f) => f.childrenIndex)
        )
  );
}
var im = /^:[\w-]+$/,
  cm = 3,
  fm = 2,
  rm = 1,
  sm = 10,
  om = -2,
  J1 = (i) => i === "*";
function dm(i, d) {
  let o = i.split("/"),
    f = o.length;
  return (
    o.some(J1) && (f += om),
    d && (f += fm),
    o
      .filter((h) => !J1(h))
      .reduce((h, y) => h + (im.test(y) ? cm : y === "" ? rm : sm), f)
  );
}
function hm(i, d) {
  return i.length === d.length && i.slice(0, -1).every((f, h) => f === d[h])
    ? i[i.length - 1] - d[d.length - 1]
    : 0;
}
function mm(i, d, o = !1) {
  let { routesMeta: f } = i,
    h = {},
    y = "/",
    x = [];
  for (let j = 0; j < f.length; ++j) {
    let b = f[j],
      m = j === f.length - 1,
      A = y === "/" ? d : d.slice(y.length) || "/",
      L = ei(
        { path: b.relativePath, caseSensitive: b.caseSensitive, end: m },
        A
      ),
      z = b.route;
    if (
      (!L &&
        m &&
        o &&
        !f[f.length - 1].route.index &&
        (L = ei(
          { path: b.relativePath, caseSensitive: b.caseSensitive, end: !1 },
          A
        )),
      !L)
    )
      return null;
    Object.assign(h, L.params),
      x.push({
        params: h,
        pathname: Je([y, L.pathname]),
        pathnameBase: Sm(Je([y, L.pathnameBase])),
        route: z,
      }),
      L.pathnameBase !== "/" && (y = Je([y, L.pathnameBase]));
  }
  return x;
}
function ei(i, d) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [o, f] = ym(i.path, i.caseSensitive, i.end),
    h = d.match(o);
  if (!h) return null;
  let y = h[0],
    x = y.replace(/(.)\/+$/, "$1"),
    j = h.slice(1);
  return {
    params: f.reduce((m, { paramName: A, isOptional: L }, z) => {
      if (A === "*") {
        let H = j[z] || "";
        x = y.slice(0, y.length - H.length).replace(/(.)\/+$/, "$1");
      }
      const Y = j[z];
      return (
        L && !Y ? (m[A] = void 0) : (m[A] = (Y || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: y,
    pathnameBase: x,
    pattern: i,
  };
}
function ym(i, d = !1, o = !0) {
  Te(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let f = [],
    h =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (x, j, b) => (
            f.push({ paramName: j, isOptional: b != null }),
            b ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    i.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (h += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
      ? (h += "\\/*$")
      : i !== "" && i !== "/" && (h += "(?:(?=\\/|$))"),
    [new RegExp(h, d ? void 0 : "i"), f]
  );
}
function vm(i) {
  try {
    return i
      .split("/")
      .map((d) => decodeURIComponent(d).replace(/\//g, "%2F"))
      .join("/");
  } catch (d) {
    return (
      Te(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`
      ),
      i
    );
  }
}
function $e(i, d) {
  if (d === "/") return i;
  if (!i.toLowerCase().startsWith(d.toLowerCase())) return null;
  let o = d.endsWith("/") ? d.length - 1 : d.length,
    f = i.charAt(o);
  return f && f !== "/" ? null : i.slice(o) || "/";
}
function gm(i, d = "/") {
  let {
    pathname: o,
    search: f = "",
    hash: h = "",
  } = typeof i == "string" ? Ra(i) : i;
  return {
    pathname: o ? (o.startsWith("/") ? o : pm(o, d)) : d,
    search: xm(f),
    hash: _m(h),
  };
}
function pm(i, d) {
  let o = d.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((h) => {
      h === ".." ? o.length > 1 && o.pop() : h !== "." && o.push(h);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function jf(i, d, o, f) {
  return `Cannot include a '${i}' character in a manually specified \`to.${d}\` field [${JSON.stringify(
    f
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function bm(i) {
  return i.filter(
    (d, o) => o === 0 || (d.route.path && d.route.path.length > 0)
  );
}
function ad(i) {
  let d = bm(i);
  return d.map((o, f) => (f === d.length - 1 ? o.pathname : o.pathnameBase));
}
function nd(i, d, o, f = !1) {
  let h;
  typeof i == "string"
    ? (h = Ra(i))
    : ((h = { ...i }),
      Et(
        !h.pathname || !h.pathname.includes("?"),
        jf("?", "pathname", "search", h)
      ),
      Et(
        !h.pathname || !h.pathname.includes("#"),
        jf("#", "pathname", "hash", h)
      ),
      Et(!h.search || !h.search.includes("#"), jf("#", "search", "hash", h)));
  let y = i === "" || h.pathname === "",
    x = y ? "/" : h.pathname,
    j;
  if (x == null) j = o;
  else {
    let L = d.length - 1;
    if (!f && x.startsWith("..")) {
      let z = x.split("/");
      for (; z[0] === ".."; ) z.shift(), (L -= 1);
      h.pathname = z.join("/");
    }
    j = L >= 0 ? d[L] : "/";
  }
  let b = gm(h, j),
    m = x && x !== "/" && x.endsWith("/"),
    A = (y || x === ".") && o.endsWith("/");
  return !b.pathname.endsWith("/") && (m || A) && (b.pathname += "/"), b;
}
var Je = (i) => i.join("/").replace(/\/\/+/g, "/"),
  Sm = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  xm = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  _m = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function Em(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var ud = ["POST", "PUT", "PATCH", "DELETE"];
new Set(ud);
var Cm = ["GET", ...ud];
new Set(Cm);
var Ma = R.createContext(null);
Ma.displayName = "DataRouter";
var li = R.createContext(null);
li.displayName = "DataRouterState";
var id = R.createContext({ isTransitioning: !1 });
id.displayName = "ViewTransition";
var Tm = R.createContext(new Map());
Tm.displayName = "Fetchers";
var jm = R.createContext(null);
jm.displayName = "Await";
var ze = R.createContext(null);
ze.displayName = "Navigation";
var Un = R.createContext(null);
Un.displayName = "Location";
var We = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
We.displayName = "Route";
var Hf = R.createContext(null);
Hf.displayName = "RouteError";
function Am(i, { relative: d } = {}) {
  Et(
    Hn(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: f } = R.useContext(ze),
    { hash: h, pathname: y, search: x } = Bn(i, { relative: d }),
    j = y;
  return (
    o !== "/" && (j = y === "/" ? o : Je([o, y])),
    f.createHref({ pathname: j, search: x, hash: h })
  );
}
function Hn() {
  return R.useContext(Un) != null;
}
function _l() {
  return (
    Et(
      Hn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    R.useContext(Un).location
  );
}
var cd =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function fd(i) {
  R.useContext(ze).static || R.useLayoutEffect(i);
}
function rd() {
  let { isDataRoute: i } = R.useContext(We);
  return i ? Ym() : Nm();
}
function Nm() {
  Et(
    Hn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = R.useContext(Ma),
    { basename: d, navigator: o } = R.useContext(ze),
    { matches: f } = R.useContext(We),
    { pathname: h } = _l(),
    y = JSON.stringify(ad(f)),
    x = R.useRef(!1);
  return (
    fd(() => {
      x.current = !0;
    }),
    R.useCallback(
      (b, m = {}) => {
        if ((Te(x.current, cd), !x.current)) return;
        if (typeof b == "number") {
          o.go(b);
          return;
        }
        let A = nd(b, JSON.parse(y), h, m.relative === "path");
        i == null &&
          d !== "/" &&
          (A.pathname = A.pathname === "/" ? d : Je([d, A.pathname])),
          (m.replace ? o.replace : o.push)(A, m.state, m);
      },
      [d, o, y, h, i]
    )
  );
}
R.createContext(null);
function Bn(i, { relative: d } = {}) {
  let { matches: o } = R.useContext(We),
    { pathname: f } = _l(),
    h = JSON.stringify(ad(o));
  return R.useMemo(() => nd(i, JSON.parse(h), f, d === "path"), [i, h, f, d]);
}
function Rm(i, d) {
  return sd(i, d);
}
function sd(i, d, o, f) {
  var w;
  Et(
    Hn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: h } = R.useContext(ze),
    { matches: y } = R.useContext(We),
    x = y[y.length - 1],
    j = x ? x.params : {},
    b = x ? x.pathname : "/",
    m = x ? x.pathnameBase : "/",
    A = x && x.route;
  {
    let q = (A && A.path) || "";
    od(
      b,
      !A || q.endsWith("*") || q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${
        q === "/" ? "*" : `${q}/*`
      }">.`
    );
  }
  let L = _l(),
    z;
  if (d) {
    let q = typeof d == "string" ? Ra(d) : d;
    Et(
      m === "/" || ((w = q.pathname) == null ? void 0 : w.startsWith(m)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${q.pathname}" was given in the \`location\` prop.`
    ),
      (z = q);
  } else z = L;
  let Y = z.pathname || "/",
    H = Y;
  if (m !== "/") {
    let q = m.replace(/^\//, "").split("/");
    H = "/" + Y.replace(/^\//, "").split("/").slice(q.length).join("/");
  }
  let B = td(i, { pathname: H });
  Te(
    A || B != null,
    `No routes matched location "${z.pathname}${z.search}${z.hash}" `
  ),
    Te(
      B == null ||
        B[B.length - 1].route.element !== void 0 ||
        B[B.length - 1].route.Component !== void 0 ||
        B[B.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let Q = Um(
    B &&
      B.map((q) =>
        Object.assign({}, q, {
          params: Object.assign({}, j, q.params),
          pathname: Je([
            m,
            h.encodeLocation
              ? h.encodeLocation(q.pathname).pathname
              : q.pathname,
          ]),
          pathnameBase:
            q.pathnameBase === "/"
              ? m
              : Je([
                  m,
                  h.encodeLocation
                    ? h.encodeLocation(q.pathnameBase).pathname
                    : q.pathnameBase,
                ]),
        })
      ),
    y,
    o,
    f
  );
  return d && Q
    ? R.createElement(
        Un.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...z,
            },
            navigationType: "POP",
          },
        },
        Q
      )
    : Q;
}
function Mm() {
  let i = qm(),
    d = Em(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    o = i instanceof Error ? i.stack : null,
    f = "rgba(200,200,200, 0.5)",
    h = { padding: "0.5rem", backgroundColor: f },
    y = { padding: "2px 4px", backgroundColor: f },
    x = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (x = R.createElement(
      R.Fragment,
      null,
      R.createElement("p", null, "💿 Hey developer 👋"),
      R.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        R.createElement("code", { style: y }, "ErrorBoundary"),
        " or",
        " ",
        R.createElement("code", { style: y }, "errorElement"),
        " prop on your route."
      )
    )),
    R.createElement(
      R.Fragment,
      null,
      R.createElement("h2", null, "Unexpected Application Error!"),
      R.createElement("h3", { style: { fontStyle: "italic" } }, d),
      o ? R.createElement("pre", { style: h }, o) : null,
      x
    )
  );
}
var Om = R.createElement(Mm, null),
  zm = class extends R.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, d) {
      return d.location !== i.location ||
        (d.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : d.error,
            location: d.location,
            revalidation: i.revalidation || d.revalidation,
          };
    }
    componentDidCatch(i, d) {
      console.error(
        "React Router caught the following error during render",
        i,
        d
      );
    }
    render() {
      return this.state.error !== void 0
        ? R.createElement(
            We.Provider,
            { value: this.props.routeContext },
            R.createElement(Hf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Dm({ routeContext: i, match: d, children: o }) {
  let f = R.useContext(Ma);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (d.route.errorElement || d.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = d.route.id),
    R.createElement(We.Provider, { value: i }, o)
  );
}
function Um(i, d = [], o = null, f = null) {
  if (i == null) {
    if (!o) return null;
    if (o.errors) i = o.matches;
    else if (d.length === 0 && !o.initialized && o.matches.length > 0)
      i = o.matches;
    else return null;
  }
  let h = i,
    y = o == null ? void 0 : o.errors;
  if (y != null) {
    let b = h.findIndex(
      (m) => m.route.id && (y == null ? void 0 : y[m.route.id]) !== void 0
    );
    Et(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        y
      ).join(",")}`
    ),
      (h = h.slice(0, Math.min(h.length, b + 1)));
  }
  let x = !1,
    j = -1;
  if (o)
    for (let b = 0; b < h.length; b++) {
      let m = h[b];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (j = b),
        m.route.id)
      ) {
        let { loaderData: A, errors: L } = o,
          z =
            m.route.loader &&
            !A.hasOwnProperty(m.route.id) &&
            (!L || L[m.route.id] === void 0);
        if (m.route.lazy || z) {
          (x = !0), j >= 0 ? (h = h.slice(0, j + 1)) : (h = [h[0]]);
          break;
        }
      }
    }
  return h.reduceRight((b, m, A) => {
    let L,
      z = !1,
      Y = null,
      H = null;
    o &&
      ((L = y && m.route.id ? y[m.route.id] : void 0),
      (Y = m.route.errorElement || Om),
      x &&
        (j < 0 && A === 0
          ? (od(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (z = !0),
            (H = null))
          : j === A &&
            ((z = !0), (H = m.route.hydrateFallbackElement || null))));
    let B = d.concat(h.slice(0, A + 1)),
      Q = () => {
        let w;
        return (
          L
            ? (w = Y)
            : z
            ? (w = H)
            : m.route.Component
            ? (w = R.createElement(m.route.Component, null))
            : m.route.element
            ? (w = m.route.element)
            : (w = b),
          R.createElement(Dm, {
            match: m,
            routeContext: { outlet: b, matches: B, isDataRoute: o != null },
            children: w,
          })
        );
      };
    return o && (m.route.ErrorBoundary || m.route.errorElement || A === 0)
      ? R.createElement(zm, {
          location: o.location,
          revalidation: o.revalidation,
          component: Y,
          error: L,
          children: Q(),
          routeContext: { outlet: null, matches: B, isDataRoute: !0 },
        })
      : Q();
  }, null);
}
function Bf(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Hm(i) {
  let d = R.useContext(Ma);
  return Et(d, Bf(i)), d;
}
function Bm(i) {
  let d = R.useContext(li);
  return Et(d, Bf(i)), d;
}
function Lm(i) {
  let d = R.useContext(We);
  return Et(d, Bf(i)), d;
}
function Lf(i) {
  let d = Lm(i),
    o = d.matches[d.matches.length - 1];
  return (
    Et(
      o.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    o.route.id
  );
}
function wm() {
  return Lf("useRouteId");
}
function qm() {
  var f;
  let i = R.useContext(Hf),
    d = Bm("useRouteError"),
    o = Lf("useRouteError");
  return i !== void 0 ? i : (f = d.errors) == null ? void 0 : f[o];
}
function Ym() {
  let { router: i } = Hm("useNavigate"),
    d = Lf("useNavigate"),
    o = R.useRef(!1);
  return (
    fd(() => {
      o.current = !0;
    }),
    R.useCallback(
      async (h, y = {}) => {
        Te(o.current, cd),
          o.current &&
            (typeof h == "number"
              ? i.navigate(h)
              : await i.navigate(h, { fromRouteId: d, ...y }));
      },
      [i, d]
    )
  );
}
var $1 = {};
function od(i, d, o) {
  !d && !$1[i] && (($1[i] = !0), Te(!1, o));
}
R.memo(Gm);
function Gm({ routes: i, future: d, state: o }) {
  return sd(i, void 0, o, d);
}
function Qt(i) {
  Et(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Xm({
  basename: i = "/",
  children: d = null,
  location: o,
  navigationType: f = "POP",
  navigator: h,
  static: y = !1,
}) {
  Et(
    !Hn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let x = i.replace(/^\/*/, "/"),
    j = R.useMemo(
      () => ({ basename: x, navigator: h, static: y, future: {} }),
      [x, h, y]
    );
  typeof o == "string" && (o = Ra(o));
  let {
      pathname: b = "/",
      search: m = "",
      hash: A = "",
      state: L = null,
      key: z = "default",
    } = o,
    Y = R.useMemo(() => {
      let H = $e(b, x);
      return H == null
        ? null
        : {
            location: { pathname: H, search: m, hash: A, state: L, key: z },
            navigationType: f,
          };
    }, [x, b, m, A, L, z, f]);
  return (
    Te(
      Y != null,
      `<Router basename="${x}"> is not able to match the URL "${b}${m}${A}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    Y == null
      ? null
      : R.createElement(
          ze.Provider,
          { value: j },
          R.createElement(Un.Provider, { children: d, value: Y })
        )
  );
}
function Qm({ children: i, location: d }) {
  return Rm(Mf(i), d);
}
function Mf(i, d = []) {
  let o = [];
  return (
    R.Children.forEach(i, (f, h) => {
      if (!R.isValidElement(f)) return;
      let y = [...d, h];
      if (f.type === R.Fragment) {
        o.push.apply(o, Mf(f.props.children, y));
        return;
      }
      Et(
        f.type === Qt,
        `[${
          typeof f.type == "string" ? f.type : f.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Et(
          !f.props.index || !f.props.children,
          "An index route cannot have child routes."
        );
      let x = {
        id: f.props.id || y.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      f.props.children && (x.children = Mf(f.props.children, y)), o.push(x);
    }),
    o
  );
}
var Iu = "get",
  ti = "application/x-www-form-urlencoded";
function ai(i) {
  return i != null && typeof i.tagName == "string";
}
function Zm(i) {
  return ai(i) && i.tagName.toLowerCase() === "button";
}
function Vm(i) {
  return ai(i) && i.tagName.toLowerCase() === "form";
}
function Km(i) {
  return ai(i) && i.tagName.toLowerCase() === "input";
}
function km(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Jm(i, d) {
  return i.button === 0 && (!d || d === "_self") && !km(i);
}
function Of(i = "") {
  return new URLSearchParams(
    typeof i == "string" || Array.isArray(i) || i instanceof URLSearchParams
      ? i
      : Object.keys(i).reduce((d, o) => {
          let f = i[o];
          return d.concat(Array.isArray(f) ? f.map((h) => [o, h]) : [[o, f]]);
        }, [])
  );
}
function $m(i, d) {
  let o = Of(i);
  return (
    d &&
      d.forEach((f, h) => {
        o.has(h) ||
          d.getAll(h).forEach((y) => {
            o.append(h, y);
          });
      }),
    o
  );
}
var Pu = null;
function Wm() {
  if (Pu === null)
    try {
      new FormData(document.createElement("form"), 0), (Pu = !1);
    } catch {
      Pu = !0;
    }
  return Pu;
}
var Fm = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Af(i) {
  return i != null && !Fm.has(i)
    ? (Te(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ti}"`
      ),
      null)
    : i;
}
function Pm(i, d) {
  let o, f, h, y, x;
  if (Vm(i)) {
    let j = i.getAttribute("action");
    (f = j ? $e(j, d) : null),
      (o = i.getAttribute("method") || Iu),
      (h = Af(i.getAttribute("enctype")) || ti),
      (y = new FormData(i));
  } else if (Zm(i) || (Km(i) && (i.type === "submit" || i.type === "image"))) {
    let j = i.form;
    if (j == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let b = i.getAttribute("formaction") || j.getAttribute("action");
    if (
      ((f = b ? $e(b, d) : null),
      (o = i.getAttribute("formmethod") || j.getAttribute("method") || Iu),
      (h =
        Af(i.getAttribute("formenctype")) ||
        Af(j.getAttribute("enctype")) ||
        ti),
      (y = new FormData(j, i)),
      !Wm())
    ) {
      let { name: m, type: A, value: L } = i;
      if (A === "image") {
        let z = m ? `${m}.` : "";
        y.append(`${z}x`, "0"), y.append(`${z}y`, "0");
      } else m && y.append(m, L);
    }
  } else {
    if (ai(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (o = Iu), (f = null), (h = ti), (x = i);
  }
  return (
    y && h === "text/plain" && ((x = y), (y = void 0)),
    { action: f, method: o.toLowerCase(), encType: h, formData: y, body: x }
  );
}
function wf(i, d) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(d);
}
async function Im(i, d) {
  if (i.id in d) return d[i.id];
  try {
    let o = await import(i.module);
    return (d[i.id] = o), o;
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function t2(i) {
  return i == null
    ? !1
    : i.href == null
    ? i.rel === "preload" &&
      typeof i.imageSrcSet == "string" &&
      typeof i.imageSizes == "string"
    : typeof i.rel == "string" && typeof i.href == "string";
}
async function e2(i, d, o) {
  let f = await Promise.all(
    i.map(async (h) => {
      let y = d.routes[h.route.id];
      if (y) {
        let x = await Im(y, o);
        return x.links ? x.links() : [];
      }
      return [];
    })
  );
  return u2(
    f
      .flat(1)
      .filter(t2)
      .filter((h) => h.rel === "stylesheet" || h.rel === "preload")
      .map((h) =>
        h.rel === "stylesheet"
          ? { ...h, rel: "prefetch", as: "style" }
          : { ...h, rel: "prefetch" }
      )
  );
}
function W1(i, d, o, f, h, y) {
  let x = (b, m) => (o[m] ? b.route.id !== o[m].route.id : !0),
    j = (b, m) => {
      var A;
      return (
        o[m].pathname !== b.pathname ||
        (((A = o[m].route.path) == null ? void 0 : A.endsWith("*")) &&
          o[m].params["*"] !== b.params["*"])
      );
    };
  return y === "assets"
    ? d.filter((b, m) => x(b, m) || j(b, m))
    : y === "data"
    ? d.filter((b, m) => {
        var L;
        let A = f.routes[b.route.id];
        if (!A || !A.hasLoader) return !1;
        if (x(b, m) || j(b, m)) return !0;
        if (b.route.shouldRevalidate) {
          let z = b.route.shouldRevalidate({
            currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
            currentParams: ((L = o[0]) == null ? void 0 : L.params) || {},
            nextUrl: new URL(i, window.origin),
            nextParams: b.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof z == "boolean") return z;
        }
        return !0;
      })
    : [];
}
function l2(i, d, { includeHydrateFallback: o } = {}) {
  return a2(
    i
      .map((f) => {
        let h = d.routes[f.route.id];
        if (!h) return [];
        let y = [h.module];
        return (
          h.clientActionModule && (y = y.concat(h.clientActionModule)),
          h.clientLoaderModule && (y = y.concat(h.clientLoaderModule)),
          o &&
            h.hydrateFallbackModule &&
            (y = y.concat(h.hydrateFallbackModule)),
          h.imports && (y = y.concat(h.imports)),
          y
        );
      })
      .flat(1)
  );
}
function a2(i) {
  return [...new Set(i)];
}
function n2(i) {
  let d = {},
    o = Object.keys(i).sort();
  for (let f of o) d[f] = i[f];
  return d;
}
function u2(i, d) {
  let o = new Set();
  return (
    new Set(d),
    i.reduce((f, h) => {
      let y = JSON.stringify(n2(h));
      return o.has(y) || (o.add(y), f.push({ key: y, link: h })), f;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var i2 = new Set([100, 101, 204, 205]);
function c2(i, d) {
  let o =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : i;
  return (
    o.pathname === "/"
      ? (o.pathname = "_root.data")
      : d && $e(o.pathname, d) === "/"
      ? (o.pathname = `${d.replace(/\/$/, "")}/_root.data`)
      : (o.pathname = `${o.pathname.replace(/\/$/, "")}.data`),
    o
  );
}
function dd() {
  let i = R.useContext(Ma);
  return (
    wf(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    i
  );
}
function f2() {
  let i = R.useContext(li);
  return (
    wf(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    i
  );
}
var qf = R.createContext(void 0);
qf.displayName = "FrameworkContext";
function hd() {
  let i = R.useContext(qf);
  return (
    wf(i, "You must render this element inside a <HydratedRouter> element"), i
  );
}
function r2(i, d) {
  let o = R.useContext(qf),
    [f, h] = R.useState(!1),
    [y, x] = R.useState(!1),
    {
      onFocus: j,
      onBlur: b,
      onMouseEnter: m,
      onMouseLeave: A,
      onTouchStart: L,
    } = d,
    z = R.useRef(null);
  R.useEffect(() => {
    if ((i === "render" && x(!0), i === "viewport")) {
      let B = (w) => {
          w.forEach((q) => {
            x(q.isIntersecting);
          });
        },
        Q = new IntersectionObserver(B, { threshold: 0.5 });
      return (
        z.current && Q.observe(z.current),
        () => {
          Q.disconnect();
        }
      );
    }
  }, [i]),
    R.useEffect(() => {
      if (f) {
        let B = setTimeout(() => {
          x(!0);
        }, 100);
        return () => {
          clearTimeout(B);
        };
      }
    }, [f]);
  let Y = () => {
      h(!0);
    },
    H = () => {
      h(!1), x(!1);
    };
  return o
    ? i !== "intent"
      ? [y, z, {}]
      : [
          y,
          z,
          {
            onFocus: zn(j, Y),
            onBlur: zn(b, H),
            onMouseEnter: zn(m, Y),
            onMouseLeave: zn(A, H),
            onTouchStart: zn(L, Y),
          },
        ]
    : [!1, z, {}];
}
function zn(i, d) {
  return (o) => {
    i && i(o), o.defaultPrevented || d(o);
  };
}
function s2({ page: i, ...d }) {
  let { router: o } = dd(),
    f = R.useMemo(() => td(o.routes, i, o.basename), [o.routes, i, o.basename]);
  return f ? R.createElement(d2, { page: i, matches: f, ...d }) : null;
}
function o2(i) {
  let { manifest: d, routeModules: o } = hd(),
    [f, h] = R.useState([]);
  return (
    R.useEffect(() => {
      let y = !1;
      return (
        e2(i, d, o).then((x) => {
          y || h(x);
        }),
        () => {
          y = !0;
        }
      );
    }, [i, d, o]),
    f
  );
}
function d2({ page: i, matches: d, ...o }) {
  let f = _l(),
    { manifest: h, routeModules: y } = hd(),
    { basename: x } = dd(),
    { loaderData: j, matches: b } = f2(),
    m = R.useMemo(() => W1(i, d, b, h, f, "data"), [i, d, b, h, f]),
    A = R.useMemo(() => W1(i, d, b, h, f, "assets"), [i, d, b, h, f]),
    L = R.useMemo(() => {
      if (i === f.pathname + f.search + f.hash) return [];
      let H = new Set(),
        B = !1;
      if (
        (d.forEach((w) => {
          var K;
          let q = h.routes[w.route.id];
          !q ||
            !q.hasLoader ||
            ((!m.some((it) => it.route.id === w.route.id) &&
              w.route.id in j &&
              (K = y[w.route.id]) != null &&
              K.shouldRevalidate) ||
            q.hasClientLoader
              ? (B = !0)
              : H.add(w.route.id));
        }),
        H.size === 0)
      )
        return [];
      let Q = c2(i, x);
      return (
        B &&
          H.size > 0 &&
          Q.searchParams.set(
            "_routes",
            d
              .filter((w) => H.has(w.route.id))
              .map((w) => w.route.id)
              .join(",")
          ),
        [Q.pathname + Q.search]
      );
    }, [x, j, f, h, m, d, i, y]),
    z = R.useMemo(() => l2(A, h), [A, h]),
    Y = o2(A);
  return R.createElement(
    R.Fragment,
    null,
    L.map((H) =>
      R.createElement("link", {
        key: H,
        rel: "prefetch",
        as: "fetch",
        href: H,
        ...o,
      })
    ),
    z.map((H) =>
      R.createElement("link", { key: H, rel: "modulepreload", href: H, ...o })
    ),
    Y.map(({ key: H, link: B }) => R.createElement("link", { key: H, ...B }))
  );
}
function h2(...i) {
  return (d) => {
    i.forEach((o) => {
      typeof o == "function" ? o(d) : o != null && (o.current = d);
    });
  };
}
var md =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  md && (window.__reactRouterVersion = "7.6.2");
} catch {}
function m2({ basename: i, children: d, window: o }) {
  let f = R.useRef();
  f.current == null && (f.current = tm({ window: o, v5Compat: !0 }));
  let h = f.current,
    [y, x] = R.useState({ action: h.action, location: h.location }),
    j = R.useCallback(
      (b) => {
        R.startTransition(() => x(b));
      },
      [x]
    );
  return (
    R.useLayoutEffect(() => h.listen(j), [h, j]),
    R.createElement(Xm, {
      basename: i,
      children: d,
      location: y.location,
      navigationType: y.action,
      navigator: h,
    })
  );
}
var yd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ht = R.forwardRef(function (
    {
      onClick: d,
      discover: o = "render",
      prefetch: f = "none",
      relative: h,
      reloadDocument: y,
      replace: x,
      state: j,
      target: b,
      to: m,
      preventScrollReset: A,
      viewTransition: L,
      ...z
    },
    Y
  ) {
    let { basename: H } = R.useContext(ze),
      B = typeof m == "string" && yd.test(m),
      Q,
      w = !1;
    if (typeof m == "string" && B && ((Q = m), md))
      try {
        let bt = new URL(window.location.href),
          $t = m.startsWith("//") ? new URL(bt.protocol + m) : new URL(m),
          de = $e($t.pathname, H);
        $t.origin === bt.origin && de != null
          ? (m = de + $t.search + $t.hash)
          : (w = !0);
      } catch {
        Te(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let q = Am(m, { relative: h }),
      [K, it, F] = r2(f, z),
      Mt = p2(m, {
        replace: x,
        state: j,
        target: b,
        preventScrollReset: A,
        relative: h,
        viewTransition: L,
      });
    function Ct(bt) {
      d && d(bt), bt.defaultPrevented || Mt(bt);
    }
    let At = R.createElement("a", {
      ...z,
      ...F,
      href: Q || q,
      onClick: w || y ? d : Ct,
      ref: h2(Y, it),
      target: b,
      "data-discover": !B && o === "render" ? "true" : void 0,
    });
    return K && !B
      ? R.createElement(R.Fragment, null, At, R.createElement(s2, { page: q }))
      : At;
  });
Ht.displayName = "Link";
var y2 = R.forwardRef(function (
  {
    "aria-current": d = "page",
    caseSensitive: o = !1,
    className: f = "",
    end: h = !1,
    style: y,
    to: x,
    viewTransition: j,
    children: b,
    ...m
  },
  A
) {
  let L = Bn(x, { relative: m.relative }),
    z = _l(),
    Y = R.useContext(li),
    { navigator: H, basename: B } = R.useContext(ze),
    Q = Y != null && C2(L) && j === !0,
    w = H.encodeLocation ? H.encodeLocation(L).pathname : L.pathname,
    q = z.pathname,
    K =
      Y && Y.navigation && Y.navigation.location
        ? Y.navigation.location.pathname
        : null;
  o ||
    ((q = q.toLowerCase()),
    (K = K ? K.toLowerCase() : null),
    (w = w.toLowerCase())),
    K && B && (K = $e(K, B) || K);
  const it = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
  let F = q === w || (!h && q.startsWith(w) && q.charAt(it) === "/"),
    Mt =
      K != null &&
      (K === w || (!h && K.startsWith(w) && K.charAt(w.length) === "/")),
    Ct = { isActive: F, isPending: Mt, isTransitioning: Q },
    At = F ? d : void 0,
    bt;
  typeof f == "function"
    ? (bt = f(Ct))
    : (bt = [
        f,
        F ? "active" : null,
        Mt ? "pending" : null,
        Q ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let $t = typeof y == "function" ? y(Ct) : y;
  return R.createElement(
    Ht,
    {
      ...m,
      "aria-current": At,
      className: bt,
      ref: A,
      style: $t,
      to: x,
      viewTransition: j,
    },
    typeof b == "function" ? b(Ct) : b
  );
});
y2.displayName = "NavLink";
var v2 = R.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: d,
      navigate: o,
      reloadDocument: f,
      replace: h,
      state: y,
      method: x = Iu,
      action: j,
      onSubmit: b,
      relative: m,
      preventScrollReset: A,
      viewTransition: L,
      ...z
    },
    Y
  ) => {
    let H = _2(),
      B = E2(j, { relative: m }),
      Q = x.toLowerCase() === "get" ? "get" : "post",
      w = typeof j == "string" && yd.test(j),
      q = (K) => {
        if ((b && b(K), K.defaultPrevented)) return;
        K.preventDefault();
        let it = K.nativeEvent.submitter,
          F = (it == null ? void 0 : it.getAttribute("formmethod")) || x;
        H(it || K.currentTarget, {
          fetcherKey: d,
          method: F,
          navigate: o,
          replace: h,
          state: y,
          relative: m,
          preventScrollReset: A,
          viewTransition: L,
        });
      };
    return R.createElement("form", {
      ref: Y,
      method: Q,
      action: B,
      onSubmit: f ? b : q,
      ...z,
      "data-discover": !w && i === "render" ? "true" : void 0,
    });
  }
);
v2.displayName = "Form";
function g2(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function vd(i) {
  let d = R.useContext(Ma);
  return Et(d, g2(i)), d;
}
function p2(
  i,
  {
    target: d,
    replace: o,
    state: f,
    preventScrollReset: h,
    relative: y,
    viewTransition: x,
  } = {}
) {
  let j = rd(),
    b = _l(),
    m = Bn(i, { relative: y });
  return R.useCallback(
    (A) => {
      if (Jm(A, d)) {
        A.preventDefault();
        let L = o !== void 0 ? o : Dn(b) === Dn(m);
        j(i, {
          replace: L,
          state: f,
          preventScrollReset: h,
          relative: y,
          viewTransition: x,
        });
      }
    },
    [b, j, m, o, f, d, i, h, y, x]
  );
}
function b2(i) {
  Te(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
  );
  let d = R.useRef(Of(i)),
    o = R.useRef(!1),
    f = _l(),
    h = R.useMemo(() => $m(f.search, o.current ? null : d.current), [f.search]),
    y = rd(),
    x = R.useCallback(
      (j, b) => {
        const m = Of(typeof j == "function" ? j(h) : j);
        (o.current = !0), y("?" + m, b);
      },
      [y, h]
    );
  return [h, x];
}
var S2 = 0,
  x2 = () => `__${String(++S2)}__`;
function _2() {
  let { router: i } = vd("useSubmit"),
    { basename: d } = R.useContext(ze),
    o = wm();
  return R.useCallback(
    async (f, h = {}) => {
      let { action: y, method: x, encType: j, formData: b, body: m } = Pm(f, d);
      if (h.navigate === !1) {
        let A = h.fetcherKey || x2();
        await i.fetch(A, o, h.action || y, {
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: m,
          formMethod: h.method || x,
          formEncType: h.encType || j,
          flushSync: h.flushSync,
        });
      } else
        await i.navigate(h.action || y, {
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: m,
          formMethod: h.method || x,
          formEncType: h.encType || j,
          replace: h.replace,
          state: h.state,
          fromRouteId: o,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition,
        });
    },
    [i, d, o]
  );
}
function E2(i, { relative: d } = {}) {
  let { basename: o } = R.useContext(ze),
    f = R.useContext(We);
  Et(f, "useFormAction must be used inside a RouteContext");
  let [h] = f.matches.slice(-1),
    y = { ...Bn(i || ".", { relative: d }) },
    x = _l();
  if (i == null) {
    y.search = x.search;
    let j = new URLSearchParams(y.search),
      b = j.getAll("index");
    if (b.some((A) => A === "")) {
      j.delete("index"),
        b.filter((L) => L).forEach((L) => j.append("index", L));
      let A = j.toString();
      y.search = A ? `?${A}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      h.route.index &&
      (y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (y.pathname = y.pathname === "/" ? o : Je([o, y.pathname])),
    Dn(y)
  );
}
function C2(i, d = {}) {
  let o = R.useContext(id);
  Et(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = vd("useViewTransitionState"),
    h = Bn(i, { relative: d.relative });
  if (!o.isTransitioning) return !1;
  let y = $e(o.currentLocation.pathname, f) || o.currentLocation.pathname,
    x = $e(o.nextLocation.pathname, f) || o.nextLocation.pathname;
  return ei(h.pathname, x) != null || ei(h.pathname, y) != null;
}
[...i2];
var T2 = I1();
function j2() {
  const [i, d] = R.useState(!1),
    o = () => {
      d(!1);
    };
  return r.jsxs("div", {
    className: `dropdown ${i ? "is-active" : ""}`,
    children: [
      r.jsxs("button", {
        onClick: () => d((f) => !f),
        className: "dropdown__button",
        children: ["Pages", r.jsx("span", { className: "dropdown__icon" })],
      }),
      r.jsxs("ul", {
        className: "dropdown__list",
        children: [
          r.jsx("li", {
            className: "dropdown__item",
            children: r.jsx(Ht, {
              to: "/shop",
              className: "dropdown__link",
              onClick: o,
              children: "Shop",
            }),
          }),
          r.jsx("li", {
            className: "dropdown__item",
            children: r.jsx(Ht, {
              to: "/about",
              className: "dropdown__link",
              onClick: o,
              children: "About",
            }),
          }),
          r.jsx("li", {
            className: "dropdown__item",
            children: r.jsx(Ht, {
              to: "/portfolio",
              className: "dropdown__link",
              onClick: o,
              children: "Portfolio",
            }),
          }),
          r.jsx("li", {
            className: "dropdown__item",
            children: r.jsx(Ht, {
              to: "/blog",
              className: "dropdown__link",
              onClick: o,
              children: "Blog",
            }),
          }),
        ],
      }),
    ],
  });
}
function A2({ onClick: i }) {
  const [d, o] = R.useState(!1);
  return r.jsxs("button", {
    onClick: () => {
      o((f) => f === !0), i();
    },
    className: `burger-button visible-tablet ${d ? "is-active" : ""}`,
    children: [
      r.jsx("span", { className: "burger-button__line" }),
      r.jsx("span", { className: "burger-button__line" }),
      r.jsx("span", { className: "burger-button__line" }),
    ],
  });
}
const N2 = ({ isOpen: i, children: d, className: o }) => {
  const f = R.useRef(null),
    h = f.current;
  R.useEffect(() => {
    h && (i ? h.showModal() : h.close());
  });
  const y = document.getElementById("modal-header");
  return y
    ? T2.createPortal(
        r.jsx("dialog", { ref: f, className: `modal ${o}`, children: d }),
        y
      )
    : null;
};
function R2({ onClickToClose: i }) {
  return r.jsx("button", {
    className: "modal__close",
    onClick: i,
    children: r.jsxs("span", {
      className: "modal__close-icon",
      children: [
        r.jsx("span", { className: "modal__close-line" }),
        r.jsx("span", { className: "modal__close-line" }),
      ],
    }),
  });
}
const M2 = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/shop", label: "Shop" },
    { to: "/shop/shop&single", label: "Shop Single" },
    { to: "/service", label: "Service" },
    { to: "/service/service&single", label: "Service Single" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/portfolio/portfolio&single", label: "Portfolio Single" },
    { to: "/team", label: "Team" },
    { to: "/blog", label: "Blog" },
    { to: "/blog/blog&single", label: "Blog Single" },
    { to: "/contact", label: "Contact" },
    { to: "/404", label: "Error404" },
    { to: "/licenses", label: "Licenses" },
    { to: "/changelog", label: "Changelog" },
    { to: "/passwordProtect", label: "Password Protect" },
  ],
  F1 = (i) => {
    let d;
    const o = new Set(),
      f = (m, A) => {
        const L = typeof m == "function" ? m(d) : m;
        if (!Object.is(L, d)) {
          const z = d;
          (d =
            A ?? (typeof L != "object" || L === null)
              ? L
              : Object.assign({}, d, L)),
            o.forEach((Y) => Y(d, z));
        }
      },
      h = () => d,
      j = {
        setState: f,
        getState: h,
        getInitialState: () => b,
        subscribe: (m) => (o.add(m), () => o.delete(m)),
      },
      b = (d = i(f, h, j));
    return j;
  },
  O2 = (i) => (i ? F1(i) : F1),
  z2 = (i) => i;
function D2(i, d = z2) {
  const o = w1.useSyncExternalStore(
    i.subscribe,
    () => d(i.getState()),
    () => d(i.getInitialState())
  );
  return w1.useDebugValue(o), o;
}
const U2 = (i) => {
    const d = O2(i),
      o = (f) => D2(d, f);
    return Object.assign(o, d), o;
  },
  H2 = (i) => U2;
function B2(i, d) {
  let o;
  try {
    o = i();
  } catch {
    return;
  }
  return {
    getItem: (h) => {
      var y;
      const x = (b) => (b === null ? null : JSON.parse(b, void 0)),
        j = (y = o.getItem(h)) != null ? y : null;
      return j instanceof Promise ? j.then(x) : x(j);
    },
    setItem: (h, y) => o.setItem(h, JSON.stringify(y, void 0)),
    removeItem: (h) => o.removeItem(h),
  };
}
const zf = (i) => (d) => {
    try {
      const o = i(d);
      return o instanceof Promise
        ? o
        : {
            then(f) {
              return zf(f)(o);
            },
            catch(f) {
              return this;
            },
          };
    } catch (o) {
      return {
        then(f) {
          return this;
        },
        catch(f) {
          return zf(f)(o);
        },
      };
    }
  },
  L2 = (i, d) => (o, f, h) => {
    let y = {
        storage: B2(() => localStorage),
        partialize: (B) => B,
        version: 0,
        merge: (B, Q) => ({ ...Q, ...B }),
        ...d,
      },
      x = !1;
    const j = new Set(),
      b = new Set();
    let m = y.storage;
    if (!m)
      return i(
        (...B) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${y.name}', the given storage is currently unavailable.`
          ),
            o(...B);
        },
        f,
        h
      );
    const A = () => {
        const B = y.partialize({ ...f() });
        return m.setItem(y.name, { state: B, version: y.version });
      },
      L = h.setState;
    h.setState = (B, Q) => {
      L(B, Q), A();
    };
    const z = i(
      (...B) => {
        o(...B), A();
      },
      f,
      h
    );
    h.getInitialState = () => z;
    let Y;
    const H = () => {
      var B, Q;
      if (!m) return;
      (x = !1),
        j.forEach((q) => {
          var K;
          return q((K = f()) != null ? K : z);
        });
      const w =
        ((Q = y.onRehydrateStorage) == null
          ? void 0
          : Q.call(y, (B = f()) != null ? B : z)) || void 0;
      return zf(m.getItem.bind(m))(y.name)
        .then((q) => {
          if (q)
            if (typeof q.version == "number" && q.version !== y.version) {
              if (y.migrate) {
                const K = y.migrate(q.state, q.version);
                return K instanceof Promise
                  ? K.then((it) => [!0, it])
                  : [!0, K];
              }
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, q.state];
          return [!1, void 0];
        })
        .then((q) => {
          var K;
          const [it, F] = q;
          if (((Y = y.merge(F, (K = f()) != null ? K : z)), o(Y, !0), it))
            return A();
        })
        .then(() => {
          w == null || w(Y, void 0),
            (Y = f()),
            (x = !0),
            b.forEach((q) => q(Y));
        })
        .catch((q) => {
          w == null || w(void 0, q);
        });
    };
    return (
      (h.persist = {
        setOptions: (B) => {
          (y = { ...y, ...B }), B.storage && (m = B.storage);
        },
        clearStorage: () => {
          m == null || m.removeItem(y.name);
        },
        getOptions: () => y,
        rehydrate: () => H(),
        hasHydrated: () => x,
        onHydrate: (B) => (
          j.add(B),
          () => {
            j.delete(B);
          }
        ),
        onFinishHydration: (B) => (
          b.add(B),
          () => {
            b.delete(B);
          }
        ),
      }),
      y.skipHydration || H(),
      Y || z
    );
  },
  w2 = L2,
  Yf = H2()(
    w2(
      (i, d) => ({
        items: [],
        totalPrice: 0,
        totalCount: 0,
        addItem: (o) => {
          const f = d().items,
            h = f.find((b) => b.id === o.id);
          let y;
          h
            ? (y = f.map((b) =>
                b.id === o.id ? { ...b, quantity: b.quantity + o.quantity } : b
              ))
            : (y = [...f, o]);
          const x = y.reduce((b, m) => b + m.price * m.quantity, 0),
            j = y.reduce((b, m) => b + m.quantity, 0);
          i({ items: y, totalPrice: x, totalCount: j });
        },
        removeItem: (o) => {
          const f = d().items.filter((x) => x.id !== o),
            h = f.reduce((x, j) => x + j.price * j.quantity, 0),
            y = f.reduce((x, j) => x + j.quantity, 0);
          i({ items: f, totalPrice: h, totalCount: y });
        },
        changeQuantity: (o, f) => {
          const h = d().items.map((j) =>
              j.id === o ? { ...j, quantity: f } : j
            ),
            y = h.reduce((j, b) => j + b.price * b.quantity, 0),
            x = h.reduce((j, b) => j + b.quantity, 0);
          i({ items: h, totalPrice: y, totalCount: x });
        },
        clearCart: () => i({ items: [], totalPrice: 0, totalCount: 0 }),
      }),
      { name: "cart" }
    )
  );
function Na({
  onClick: i,
  children: d,
  disabled: o,
  className: f,
  type: h = "button",
}) {
  return r.jsx("button", {
    onClick: i,
    disabled: o,
    className: `button ${f}`,
    type: h,
    children: d,
  });
}
function gd({ value: i, onChange: d, className: o }) {
  return r.jsx("select", {
    value: i,
    id: "quantity",
    onChange: (f) => d(Number(f.target.value)),
    className: `product-single__select select ${o}`,
    children: [...Array(10)].map((f, h) =>
      r.jsx(
        "option",
        { value: h + 1, className: "select__option", children: h + 1 },
        h + 1
      )
    ),
  });
}
function q2() {
  const {
    items: i,
    totalPrice: d,
    totalCount: o,
    removeItem: f,
    changeQuantity: h,
    clearCart: y,
  } = Yf();
  return r.jsxs("section", {
    className: "cart container",
    children: [
      r.jsx("header", {
        className: "cart__header",
        children: r.jsx("h1", {
          className: "cart__title",
          children: "Your Cart",
        }),
      }),
      r.jsx("div", {
        className: "cart__body",
        children: r.jsxs("div", {
          className: "cart__products",
          children: [
            r.jsxs("aside", {
              className: "cart__total purchase",
              children: [
                r.jsx(Na, {
                  onClick: y,
                  className: "button--clear",
                  children: "Clear Cart",
                }),
                r.jsxs("div", {
                  className: "cart__purchase",
                  children: [
                    r.jsxs("div", {
                      className: "cart__purchase-inner",
                      children: [
                        r.jsxs("p", {
                          className: "cart__purchase-value",
                          children: ["Price: ", `${d} $`],
                        }),
                        r.jsxs("p", {
                          className: "cart__purchase-value",
                          children: ["Quantity: ", o],
                        }),
                      ],
                    }),
                    r.jsx(Na, {
                      className: "button--purchase",
                      children: "Buy",
                    }),
                  ],
                }),
              ],
            }),
            r.jsx("ul", {
              className: "cart__products-list",
              children: i.map((x) =>
                r.jsx(
                  "li",
                  {
                    className: "cart__products-item total-product",
                    children: r.jsxs("div", {
                      className: "total-product__body",
                      children: [
                        r.jsx("div", {
                          className: "total-product__banner",
                          children: r.jsx("img", {
                            src: x.image,
                            alt: x.name,
                            className: "total-product__image",
                            width: 100,
                            height: 100,
                            loading: "lazy",
                          }),
                        }),
                        r.jsxs("div", {
                          className: "total-product__body-inner",
                          children: [
                            r.jsxs("div", {
                              className: "total-product__info",
                              children: [
                                r.jsxs("p", { children: ["Price: ", x.price] }),
                                r.jsxs("p", {
                                  children: ["Quantity: ", x.quantity],
                                }),
                              ],
                            }),
                            r.jsxs("div", {
                              className: "total-product__control",
                              children: [
                                r.jsx("h2", {
                                  className: "total-product__title",
                                  children: x.name,
                                }),
                                r.jsxs("div", {
                                  className: "total-product__buttons",
                                  children: [
                                    r.jsxs(Na, {
                                      className: "button--trash",
                                      onClick: () => f(x.id),
                                      children: [
                                        r.jsx("span", {
                                          className: "visually-hidden",
                                          children: "Remove Item",
                                        }),
                                        r.jsx("svg", {
                                          width: "800px",
                                          height: "800px",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: r.jsx("path", {
                                            d: "M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17",
                                            stroke: "currentColor",
                                            "stroke-width": "2",
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                          }),
                                        }),
                                      ],
                                    }),
                                    r.jsx(gd, {
                                      value: x.quantity,
                                      onChange: (j) => h(x.id, j),
                                      className: "select-cart",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  x.id
                )
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function Y2() {
  const i = Yf((y) => y.totalCount),
    [d, o] = R.useState(null),
    f = d !== null,
    h = () => {
      o(null);
    };
  return r.jsxs(r.Fragment, {
    children: [
      r.jsx("header", {
        className: "header",
        children: r.jsx("div", {
          className: "header__body",
          children: r.jsxs("div", {
            className: "header__body-inner container",
            children: [
              r.jsx("div", {
                className: "header__logo",
                children: r.jsxs(Ht, {
                  to: "/",
                  className: "header__logo-link",
                  children: [
                    r.jsxs("svg", {
                      width: "39",
                      height: "56",
                      viewBox: "0 0 39 56",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        r.jsx("path", {
                          d: "M1.85059 42.0684H19.2909H36.7312",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M5.79102 48.5L19.291 48.5L32.791 48.5",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M18.791 1.50002L18.791 8.50002L18.791 15.5",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M18.8652 14.7842V41.2158",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M29.9249 4.55275L18.8652 15.637",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M34.1787 8.81593L18.8652 24.1633",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M36.7309 15.6367L18.8652 32.6894",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M37.5817 23.3106L18.8652 42.0685",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M37.582 31.8369L27.373 42.0685",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M1 31.8369L11.209 42.0685",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M8.65625 4.55275L18.8652 15.637",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M4.40332 8.81593L18.866 24.1633",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M1.85059 14.7842L18.8655 32.6895",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M1 22.458L18.8657 41.2159",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                        r.jsx("path", {
                          d: "M19.291 54.8579C9.19019 54.8579 1 46.4056 1 35.9772V20.0228C1 9.5963 9.19019 1.14211 19.291 1.14211C29.3937 1.14211 37.5821 9.5963 37.5821 20.0228V35.9772C37.5839 46.4056 29.3937 54.8579 19.291 54.8579Z",
                          stroke: "#7EB693",
                          "stroke-width": "2",
                          "stroke-miterlimit": "10",
                        }),
                      ],
                    }),
                    r.jsx("p", { children: "Organik" }),
                  ],
                }),
              }),
              r.jsx("nav", {
                className: "header__menu hidden-tablet",
                children: r.jsxs("ul", {
                  className: "header__list",
                  children: [
                    r.jsx("li", {
                      className: "header__item",
                      children: r.jsx(Ht, {
                        to: "/",
                        className: "header__link",
                        children: "Home",
                      }),
                    }),
                    r.jsx("li", {
                      className: "header__item",
                      children: r.jsx(Ht, {
                        to: "/about",
                        className: "header__link",
                        children: "About",
                      }),
                    }),
                    r.jsx("li", {
                      className: "header__item",
                      children: r.jsx(j2, {}),
                    }),
                    r.jsx("li", {
                      className: "header__item",
                      children: r.jsx(Ht, {
                        to: "/shop",
                        className: "header__link",
                        children: "Shop",
                      }),
                    }),
                    r.jsx("li", {
                      className: "header__item",
                      children: r.jsx(Ht, {
                        to: "/portfolio",
                        className: "header__link",
                        children: "Portfolio",
                      }),
                    }),
                    r.jsx("li", {
                      className: "header__item",
                      children: r.jsx(Ht, {
                        to: "/blog",
                        className: "header__link",
                        children: "Blog",
                      }),
                    }),
                  ],
                }),
              }),
              r.jsxs("div", {
                className: "header__actions",
                children: [
                  r.jsx("div", {
                    className: "hidden-mobile",
                    children: r.jsx("label", {
                      htmlFor: "seacrh",
                      className: "header__label",
                      children: r.jsx("input", {
                        className: "header__search",
                        type: "text",
                        name: "",
                        id: "search",
                      }),
                    }),
                  }),
                  r.jsxs("div", {
                    className: "header__shop",
                    "aria-label": "Cart",
                    tabIndex: 0,
                    onClick: () => o("cart"),
                    children: [
                      r.jsx("span", { className: "header__shop-cart" }),
                      r.jsxs("p", {
                        className: "hidden-tablet",
                        children: ["Cart (", i, ")"],
                      }),
                    ],
                  }),
                  r.jsx(A2, { onClick: () => o("menu") }),
                ],
              }),
            ],
          }),
        }),
      }),
      r.jsxs(N2, {
        isOpen: f,
        className: "modal-header",
        children: [
          r.jsx(R2, { onClickToClose: h }),
          d === "cart" && r.jsx(q2, {}),
          d === "menu" &&
            r.jsxs(r.Fragment, {
              children: [
                r.jsx("header", {
                  className: "modal-header__header",
                  children: r.jsx("h1", { children: "Navigation" }),
                }),
                r.jsx("div", {
                  className: "modal-header__inner",
                  children: r.jsx("nav", {
                    className: "modal-header__navigation",
                    children: r.jsx("ul", {
                      className: "modal-header__list grid-list",
                      children: M2.map((y) =>
                        r.jsx(
                          "li",
                          {
                            className: "grid-list__item",
                            children: r.jsx(Ht, {
                              to: y.to,
                              className: "grid-list__item-link",
                              onClick: h,
                              children: y.label,
                            }),
                          },
                          y.to
                        )
                      ),
                    }),
                  }),
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function G2() {
  return r.jsx(r.Fragment, {
    children: r.jsx("div", { children: r.jsx("h1", { children: "Home" }) }),
  });
}
function X2() {
  return r.jsx(r.Fragment, {
    children: r.jsx("div", { children: r.jsx("h1", { children: "About" }) }),
  });
}
const Df = [
  {
    id: "1",
    name: "Calabrese Broccoli",
    price: 13,
    oldPrice: 20,
    currency: "$",
    badges: ["Vegetable"],
    image: "/assets/images/products/1.png",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "2",
    name: "Fresh Banana Fruites",
    price: 14,
    oldPrice: 20,
    currency: "$",
    badges: ["Fresh"],
    image: "/assets/images/products/2.jpg",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "3",
    name: "White Nuts",
    price: 15,
    oldPrice: 20,
    currency: "$",
    badges: ["Millets"],
    image: "/assets/images/products/3.jpg",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "4",
    name: "Vegan Red Tomato",
    price: 17,
    oldPrice: 20,
    currency: "$",
    badges: ["Vegetable"],
    image: "/assets/images/products/4.jpg",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "5",
    name: "Mung Bean",
    price: 11,
    oldPrice: 20,
    currency: "$",
    badges: ["Health"],
    image: "/assets/images/products/5.jpg",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "6",
    name: "Brown Hazelnut",
    price: 12,
    oldPrice: 20,
    currency: "$",
    badges: ["Nuts"],
    image: "/assets/images/products/6.jpg",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "7",
    name: "Eggs",
    price: 17,
    oldPrice: 20,
    currency: "$",
    badges: ["Fresh"],
    image: "/assets/images/products/7.jpg",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "8",
    name: "Zelco Suji Elaichi Rusk",
    price: 15,
    oldPrice: 20,
    currency: "$",
    badges: ["Fresh"],
    image: "/assets/images/products/8.jpg",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "9",
    name: "Mung Bean",
    price: 11,
    oldPrice: 20,
    currency: "$",
    badges: ["Health"],
    image: "/assets/images/products/9.jpg",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "10",
    name: "White Hazelnut",
    price: 12,
    oldPrice: 20,
    currency: "$",
    badges: ["Nuts"],
    image: "/assets/images/products/10.jpg",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "11",
    name: "Fresh Corn",
    price: 17,
    oldPrice: 20,
    currency: "$",
    badges: ["Fresh"],
    image: "/assets/images/products/11.jpg",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "12",
    name: "Organic Almonds",
    price: 15,
    oldPrice: 20,
    currency: "$",
    badges: ["Fresh"],
    image: "/assets/images/products/12.jpg",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
];
function pd({ items: i }) {
  const d = i || Df;
  return r.jsx(r.Fragment, {
    children: r.jsx("div", {
      className: "products container",
      children: r.jsx("ul", {
        className: "products__list",
        children: d.map((o) =>
          r.jsxs(
            "li",
            {
              className: "products__item",
              children: [
                o.badges &&
                  o.badges.map((f) =>
                    r.jsx(
                      "span",
                      { className: "products__item-badge badge", children: f },
                      f
                    )
                  ),
                r.jsx("img", {
                  className: "products__item-image",
                  src: o.image,
                  alt: o.name,
                  width: 335,
                  height: 335,
                }),
                r.jsxs("div", {
                  className: "products__item-body",
                  children: [
                    r.jsx("h2", {
                      className: "products__item-title h3",
                      children: r.jsx(Ht, {
                        to: `/shop/shop&single?id=${o.id}`,
                        className: "products__item-link",
                        children: o.name,
                      }),
                    }),
                    r.jsxs("div", {
                      className: "products__item-inner",
                      children: [
                        r.jsxs("div", {
                          className: "price",
                          children: [
                            o.oldPrice &&
                              r.jsxs("span", {
                                style: {
                                  textDecoration: "line-through",
                                  marginRight: 8,
                                },
                                className: "price__old",
                                children: [o.currency, o.oldPrice],
                              }),
                            r.jsxs("span", {
                              className: "price__new",
                              children: [o.currency, o.price],
                            }),
                          ],
                        }),
                        r.jsxs("div", {
                          className: "products__item-rating",
                          children: [
                            r.jsx("svg", {
                              width: "15",
                              height: "14",
                              viewBox: "0 0 15 14",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: r.jsx("path", {
                                d: "M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z",
                                fill: "#FFA858",
                              }),
                            }),
                            r.jsx("svg", {
                              width: "15",
                              height: "14",
                              viewBox: "0 0 15 14",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: r.jsx("path", {
                                d: "M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z",
                                fill: "#FFA858",
                              }),
                            }),
                            r.jsx("svg", {
                              width: "15",
                              height: "14",
                              viewBox: "0 0 15 14",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: r.jsx("path", {
                                d: "M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z",
                                fill: "#FFA858",
                              }),
                            }),
                            r.jsx("svg", {
                              width: "15",
                              height: "14",
                              viewBox: "0 0 15 14",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: r.jsx("path", {
                                d: "M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z",
                                fill: "#FFA858",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            o.id
          )
        ),
      }),
    }),
  });
}
function bd({ header: i, body: d, headerClass: o }) {
  return r.jsxs("section", {
    className: "hero",
    children: [
      r.jsx("header", {
        className: `hero__header ${o}`,
        children: r.jsx("div", {
          className: "header__body visually-hidden",
          children: i,
        }),
      }),
      r.jsx("div", { className: "hero__body", children: d }),
    ],
  });
}
function Sd() {
  return r.jsx("div", {
    className: "subscribe container",
    children: r.jsxs("div", {
      className: "subscribe__inner",
      children: [
        r.jsx("header", {
          className: "subscribe__header",
          children: r.jsxs("h2", {
            className: "subscribe__title",
            children: ["Subscribe to ", r.jsx("br", {}), "our Newsletter"],
          }),
        }),
        r.jsxs("form", {
          action: "",
          className: "subscribe__form",
          children: [
            r.jsx("input", {
              type: "email",
              className: "input input--subscribe",
              placeholder: "Your Email Address",
            }),
            r.jsx(Na, { type: "submit", children: "Subscribe" }),
          ],
        }),
      ],
    }),
  });
}
function Q2() {
  return r.jsxs(r.Fragment, {
    children: [
      r.jsx(bd, {
        header: r.jsx("h1", { children: "Shop" }),
        body: r.jsx(pd, {}),
        headerClass: "hero__shop",
      }),
      r.jsx(Sd, {}),
    ],
  });
}
function Z2({ product: i }) {
  const d = Yf((h) => h.addItem),
    [o, f] = R.useState(1);
  return r.jsxs("div", {
    className: "shop-single__product product-single",
    children: [
      r.jsxs("div", {
        className: "product-single__banner",
        children: [
          i.badges &&
            i.badges.map((h) =>
              r.jsx(
                "span",
                { className: "product-single__badge badge", children: h },
                h
              )
            ),
          r.jsx("img", {
            src: i.image,
            alt: i.name,
            className: "product-single__image",
          }),
        ],
      }),
      r.jsxs("div", {
        className: "product-single__body",
        children: [
          r.jsxs("header", {
            className: "product-single__body-header",
            children: [
              r.jsx("h2", {
                className: "product-single__title",
                children: i.name,
              }),
              r.jsxs("div", {
                className: "product-single__rating",
                children: [
                  r.jsx("svg", {
                    width: "15",
                    height: "14",
                    viewBox: "0 0 15 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: r.jsx("path", {
                      d: "M6.67806 1.59367C6.98566 0.689974 8.26378 0.689977 8.57138 1.59367L9.5549 4.48313C9.69285 4.8884 10.0735 5.16091 10.5016 5.16091H13.5818C14.5617 5.16091 14.9569 6.42416 14.1517 6.98263L11.7409 8.65456C11.3741 8.90901 11.2203 9.37584 11.3642 9.79851L12.3036 12.5586C12.6145 13.4718 11.5798 14.2523 10.7871 13.7025L8.19462 11.9046C7.85187 11.6668 7.39758 11.6668 7.05483 11.9046L4.46235 13.7025C3.66969 14.2523 2.63496 13.4718 2.9458 12.5586L3.88528 9.79851C4.02915 9.37584 3.87539 8.90901 3.50851 8.65456L1.09777 6.98263C0.292535 6.42416 0.687722 5.16091 1.66767 5.16091H4.74788C5.17598 5.16091 5.55659 4.8884 5.69454 4.48313L6.67806 1.59367Z",
                      fill: "#FFA858",
                    }),
                  }),
                  r.jsx("svg", {
                    width: "15",
                    height: "14",
                    viewBox: "0 0 15 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: r.jsx("path", {
                      d: "M6.67806 1.59367C6.98566 0.689974 8.26378 0.689977 8.57138 1.59367L9.5549 4.48313C9.69285 4.8884 10.0735 5.16091 10.5016 5.16091H13.5818C14.5617 5.16091 14.9569 6.42416 14.1517 6.98263L11.7409 8.65456C11.3741 8.90901 11.2203 9.37584 11.3642 9.79851L12.3036 12.5586C12.6145 13.4718 11.5798 14.2523 10.7871 13.7025L8.19462 11.9046C7.85187 11.6668 7.39758 11.6668 7.05483 11.9046L4.46235 13.7025C3.66969 14.2523 2.63496 13.4718 2.9458 12.5586L3.88528 9.79851C4.02915 9.37584 3.87539 8.90901 3.50851 8.65456L1.09777 6.98263C0.292535 6.42416 0.687722 5.16091 1.66767 5.16091H4.74788C5.17598 5.16091 5.55659 4.8884 5.69454 4.48313L6.67806 1.59367Z",
                      fill: "#FFA858",
                    }),
                  }),
                  r.jsx("svg", {
                    width: "15",
                    height: "14",
                    viewBox: "0 0 15 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: r.jsx("path", {
                      d: "M6.67806 1.59367C6.98566 0.689974 8.26378 0.689977 8.57138 1.59367L9.5549 4.48313C9.69285 4.8884 10.0735 5.16091 10.5016 5.16091H13.5818C14.5617 5.16091 14.9569 6.42416 14.1517 6.98263L11.7409 8.65456C11.3741 8.90901 11.2203 9.37584 11.3642 9.79851L12.3036 12.5586C12.6145 13.4718 11.5798 14.2523 10.7871 13.7025L8.19462 11.9046C7.85187 11.6668 7.39758 11.6668 7.05483 11.9046L4.46235 13.7025C3.66969 14.2523 2.63496 13.4718 2.9458 12.5586L3.88528 9.79851C4.02915 9.37584 3.87539 8.90901 3.50851 8.65456L1.09777 6.98263C0.292535 6.42416 0.687722 5.16091 1.66767 5.16091H4.74788C5.17598 5.16091 5.55659 4.8884 5.69454 4.48313L6.67806 1.59367Z",
                      fill: "#FFA858",
                    }),
                  }),
                  r.jsx("svg", {
                    width: "15",
                    height: "14",
                    viewBox: "0 0 15 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: r.jsx("path", {
                      d: "M6.67806 1.59367C6.98566 0.689974 8.26378 0.689977 8.57138 1.59367L9.5549 4.48313C9.69285 4.8884 10.0735 5.16091 10.5016 5.16091H13.5818C14.5617 5.16091 14.9569 6.42416 14.1517 6.98263L11.7409 8.65456C11.3741 8.90901 11.2203 9.37584 11.3642 9.79851L12.3036 12.5586C12.6145 13.4718 11.5798 14.2523 10.7871 13.7025L8.19462 11.9046C7.85187 11.6668 7.39758 11.6668 7.05483 11.9046L4.46235 13.7025C3.66969 14.2523 2.63496 13.4718 2.9458 12.5586L3.88528 9.79851C4.02915 9.37584 3.87539 8.90901 3.50851 8.65456L1.09777 6.98263C0.292535 6.42416 0.687722 5.16091 1.66767 5.16091H4.74788C5.17598 5.16091 5.55659 4.8884 5.69454 4.48313L6.67806 1.59367Z",
                      fill: "#FFA858",
                    }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "price",
                children: [
                  i.oldPrice &&
                    r.jsxs("span", {
                      style: { textDecoration: "line-through", marginLeft: 8 },
                      className: "price__old",
                      children: [i.currency, i.oldPrice],
                    }),
                  r.jsxs("span", {
                    className: "price__new",
                    children: [i.currency, i.price],
                  }),
                ],
              }),
            ],
          }),
          r.jsx("div", {
            className: "product-single__body-description",
            children: r.jsx("p", { children: i.description }),
          }),
          r.jsxs("div", {
            className: "product-single__purchase",
            children: [
              r.jsxs("div", {
                className: "product-single__quantity",
                children: [
                  r.jsx("label", {
                    htmlFor: "quantity",
                    className: "product-single__quantity select__label",
                    children: "Quantity :",
                  }),
                  r.jsx(gd, { value: o, onChange: f }),
                ],
              }),
              r.jsx(Na, {
                className: "button--primary",
                onClick: () => d({ ...i, quantity: o }),
                children: "Add To Cart",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function V2({ className: i, header: d, description: o }) {
  return r.jsxs("div", {
    className: `tabs ${i}`,
    children: [
      r.jsx("header", { className: "tabs__header", children: d }),
      r.jsx("div", {
        className: "tabs__body",
        children: r.jsx("p", { className: "tabs__description", children: o }),
      }),
    ],
  });
}
const Nf = [
  {
    key: 1,
    value: "first",
    name: "Product Description",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    key: 2,
    value: "second",
    name: "Additional Info",
    description:
      "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw. Lorem Ipsum dolor la.",
  },
];
function K2() {
  var y;
  const [i] = b2(),
    d = i.get("id"),
    o = Df.find((x) => x.id === d),
    [f, h] = R.useState(Nf[0].value);
  return o
    ? r.jsxs(r.Fragment, {
        children: [
          r.jsx(bd, {
            header: r.jsx("h1", { children: "ShopSingle" }),
            body: r.jsx(r.Fragment, {
              children: r.jsxs("section", {
                className: "shop-single container",
                children: [
                  r.jsx(Z2, { product: o }),
                  r.jsx("div", {
                    className: "shop-single__tabs",
                    children: r.jsx(V2, {
                      header: r.jsx(r.Fragment, {
                        children: Nf.map((x) =>
                          r.jsx(
                            Na,
                            {
                              onClick: () => h(x.value),
                              className: "button--pagination",
                              disabled: f === x.value,
                              children: x.name,
                            },
                            x.key
                          )
                        ),
                      }),
                      description: r.jsx(r.Fragment, {
                        children:
                          (y = Nf.find((x) => x.value === f)) == null
                            ? void 0
                            : y.description,
                      }),
                    }),
                  }),
                  r.jsxs("div", {
                    className: "shop-single__more",
                    children: [
                      r.jsx("h2", {
                        className: "shop-single__more-title",
                        children: "Related Products",
                      }),
                      r.jsx(pd, { items: Df.slice(0, 4) }),
                    ],
                  }),
                ],
              }),
            }),
            headerClass: "hero__buy",
          }),
          r.jsx(Sd, {}),
        ],
      })
    : r.jsx("div", { children: "Error, product is not founded" });
}
function k2() {
  return r.jsx(r.Fragment, {});
}
function J2() {
  return r.jsx(r.Fragment, {});
}
function $2() {
  return r.jsx(r.Fragment, {
    children: r.jsx("div", {
      children: r.jsx("h1", { children: "Portfolio" }),
    }),
  });
}
function W2() {
  return r.jsx(r.Fragment, {});
}
function F2() {
  return r.jsx(r.Fragment, {});
}
function P1() {
  return r.jsx(r.Fragment, {
    children: r.jsx("div", { children: r.jsx("h1", { children: "Blog" }) }),
  });
}
function P2() {
  return r.jsx(r.Fragment, {});
}
function I2() {
  return r.jsx(r.Fragment, {});
}
function t6() {
  return r.jsx(r.Fragment, {});
}
function e6() {
  return r.jsx(r.Fragment, {});
}
function l6() {
  return r.jsx(r.Fragment, {});
}
function a6({ className: i }) {
  return r.jsxs("ul", {
    className: `${i} soc1als`,
    children: [
      r.jsx("li", {
        className: "soc1als__item",
        children: r.jsxs("a", {
          href: "",
          className: "soc1als__link",
          children: [
            r.jsx("span", {
              className: "visually-hidden",
              children: "Instagram",
            }),
            r.jsxs("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                r.jsx("path", {
                  d: "M13.6585 2.26307C14.7231 2.26613 15.7431 2.67471 16.4958 3.39958C17.2486 4.12445 17.6729 5.1067 17.6761 6.13181V13.8685C17.6729 14.8936 17.2486 15.8758 16.4958 16.6007C15.7431 17.3256 14.7231 17.7342 13.6585 17.7372H5.6243C4.55976 17.7342 3.53973 17.3256 2.78698 16.6007C2.03423 15.8758 1.60994 14.8936 1.60676 13.8685V6.13181C1.60994 5.1067 2.03423 4.12445 2.78698 3.39958C3.53973 2.67471 4.55976 2.26613 5.6243 2.26307H13.6585ZM13.6585 0.71582H5.6243C2.53087 0.71582 0 3.15296 0 6.13181V13.8685C0 16.8473 2.53087 19.2845 5.6243 19.2845H13.6585C16.752 19.2845 19.2828 16.8473 19.2828 13.8685V6.13181C19.2828 3.15296 16.752 0.71582 13.6585 0.71582Z",
                  fill: "#274C5B",
                }),
                r.jsx("path", {
                  d: "M14.8638 6.1326C14.6254 6.1326 14.3924 6.06454 14.1942 5.93702C13.996 5.8095 13.8416 5.62824 13.7504 5.41618C13.6591 5.20412 13.6353 4.97078 13.6818 4.74565C13.7283 4.52053 13.8431 4.31374 14.0116 4.15144C14.1802 3.98913 14.3949 3.8786 14.6287 3.83382C14.8625 3.78904 15.1048 3.81203 15.325 3.89986C15.5452 3.9877 15.7334 4.13645 15.8659 4.3273C15.9983 4.51815 16.069 4.74253 16.069 4.97206C16.0693 5.12456 16.0384 5.27562 15.9779 5.41657C15.9175 5.55752 15.8287 5.68559 15.7167 5.79342C15.6048 5.90125 15.4718 5.98673 15.3254 6.04493C15.179 6.10314 15.0222 6.13293 14.8638 6.1326ZM9.64151 6.90602C10.2772 6.90602 10.8986 7.08754 11.4271 7.42761C11.9556 7.76768 12.3676 8.25104 12.6108 8.81656C12.8541 9.38209 12.9177 10.0044 12.7937 10.6047C12.6697 11.2051 12.3636 11.7565 11.9141 12.1894C11.4646 12.6222 10.892 12.917 10.2685 13.0364C9.64507 13.1558 8.99886 13.0945 8.41158 12.8603C7.82431 12.626 7.32236 12.2293 6.96921 11.7204C6.61606 11.2114 6.42756 10.6131 6.42756 10.0009C6.42847 9.18038 6.76738 8.39369 7.36991 7.81347C7.97245 7.23325 8.7894 6.9069 9.64151 6.90602ZM9.64151 5.35877C8.68806 5.35877 7.75603 5.63103 6.96327 6.14112C6.17051 6.65121 5.55263 7.37621 5.18776 8.22446C4.82289 9.0727 4.72742 10.0061 4.91343 10.9066C5.09944 11.8071 5.55857 12.6342 6.23275 13.2834C6.90694 13.9327 7.76591 14.3748 8.70104 14.5539C9.63616 14.733 10.6054 14.6411 11.4863 14.2897C12.3672 13.9384 13.1201 13.3434 13.6498 12.58C14.1795 11.8166 14.4622 10.9191 14.4622 10.0009C14.4622 8.76976 13.9543 7.58901 13.0503 6.71843C12.1462 5.84786 10.92 5.35877 9.64151 5.35877Z",
                  fill: "#274C5B",
                }),
              ],
            }),
          ],
        }),
      }),
      r.jsx("li", {
        className: "soc1als__item",
        children: r.jsxs("a", {
          href: "",
          className: "soc1als__link",
          children: [
            r.jsx("span", {
              className: "visually-hidden",
              children: "Facebook",
            }),
            r.jsx("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: r.jsx("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M19.2828 10.0001C19.2828 4.87304 14.9657 0.71582 9.64141 0.71582C4.31711 0.71582 0 4.87304 0 10.0001C0 14.634 3.52514 18.475 8.13494 19.1721V12.6847H5.68628V10.0001H8.13494V7.95469C8.13494 5.62822 9.5747 4.34209 11.7767 4.34209C12.8317 4.34209 13.9353 4.52364 13.9353 4.52364V6.80866H12.7189C11.5219 6.80866 11.1475 7.52405 11.1475 8.25933V10.0001H13.8212L13.3942 12.6847H11.1479V19.173C15.7577 18.4762 19.2828 14.6353 19.2828 10.0001Z",
                fill: "#274C5B",
              }),
            }),
          ],
        }),
      }),
      r.jsx("li", {
        className: "soc1als__item",
        children: r.jsxs("a", {
          href: "",
          className: "soc1als__link",
          children: [
            r.jsx("span", {
              className: "visually-hidden",
              children: "Twitter",
            }),
            r.jsx("svg", {
              width: "21",
              height: "18",
              viewBox: "0 0 21 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: r.jsx("path", {
                d: "M20.6602 2.67424C19.8852 3.01098 19.0652 3.23283 18.2261 3.33278C19.1079 2.81644 19.7711 1.99614 20.0912 1.02573C19.2575 1.51322 18.3469 1.85527 17.3984 2.03722C16.9991 1.61865 16.5187 1.28566 15.9866 1.0585C15.4546 0.831346 14.8818 0.714758 14.3033 0.715828C11.9609 0.715828 10.0654 2.58385 10.0654 4.8866C10.0637 5.2069 10.1004 5.52625 10.1747 5.83783C8.49507 5.75909 6.85036 5.33061 5.34581 4.57982C3.84126 3.82903 2.50999 2.77244 1.43717 1.47767C1.0608 2.11216 0.861758 2.8361 0.86084 3.57382C0.86084 5.02003 1.61537 6.29838 2.75469 7.04731C2.07967 7.03129 1.41849 6.85263 0.827268 6.5265V6.57815C0.827268 8.60112 2.2907 10.2841 4.22759 10.6671C3.86336 10.7642 3.48803 10.8134 3.11108 10.8135C2.84361 10.814 2.57674 10.788 2.31437 10.736C2.85283 12.3931 4.41999 13.5983 6.27639 13.6327C4.76793 14.7953 2.91593 15.4236 1.01149 15.419C0.673443 15.4185 0.335713 15.3984 0 15.3587C1.9374 16.5958 4.18947 17.2502 6.48815 17.244C14.2943 17.244 18.5589 10.8867 18.5589 5.37297C18.5589 5.1922 18.5541 5.01142 18.5455 4.83495C19.3733 4.24616 20.0893 3.51447 20.6602 2.67424Z",
                fill: "#274C5B",
              }),
            }),
          ],
        }),
      }),
      r.jsx("li", {
        className: "soc1als__item",
        children: r.jsxs("a", {
          href: "",
          className: "soc1als__link",
          children: [
            r.jsx("span", {
              className: "visually-hidden",
              children: "Pinterest",
            }),
            r.jsx("svg", {
              width: "20",
              height: "21",
              viewBox: "0 0 20 21",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: r.jsx("path", {
                d: "M9.79664 0.71582C4.38662 0.71582 0 5.10048 0 10.5081C0 14.5168 2.41417 17.9616 5.86486 19.4785C5.83862 18.7965 5.86049 17.9747 6.03543 17.2315C6.22349 16.4359 7.295 11.8939 7.295 11.8939C7.295 11.8939 6.9801 11.2687 6.9801 10.3463C6.9801 8.89499 7.81982 7.81084 8.86946 7.81084C9.76165 7.81084 10.1903 8.47969 10.1903 9.27968C10.1903 10.1758 9.61732 11.5135 9.3243 12.7551C9.07938 13.7955 9.84475 14.6392 10.8725 14.6392C12.7269 14.6392 13.9777 12.2567 13.9777 9.43269C13.9777 7.28626 12.5301 5.6819 9.9016 5.6819C6.932 5.6819 5.07763 7.89827 5.07763 10.3726C5.07763 11.225 5.3313 11.8283 5.72491 12.2917C5.90422 12.5059 5.93046 12.5933 5.86486 12.8381C5.81675 13.0174 5.71179 13.4501 5.66368 13.625C5.59808 13.8742 5.3969 13.9616 5.17385 13.8698C3.80494 13.3102 3.16641 11.8152 3.16641 10.1278C3.16641 7.34746 5.51498 4.01197 10.1684 4.01197C13.9077 4.01197 16.37 6.71795 16.37 9.62066C16.37 13.4633 14.2314 16.331 11.0824 16.331C10.0241 16.331 9.03128 15.7583 8.69014 15.1113C8.69014 15.1113 8.12159 17.367 7.99913 17.8042C7.79357 18.5605 7.38684 19.3124 7.01509 19.9025C7.91686 20.1684 8.85208 20.3039 9.79226 20.3047C15.2023 20.3047 19.5889 15.9201 19.5889 10.5125C19.5889 5.10485 15.2067 0.71582 9.79664 0.71582Z",
                fill: "#274C5B",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function n6() {
  return r.jsxs("footer", {
    className: "footer",
    children: [
      r.jsx("h1", { className: "visually-hidden", children: "Footer Section" }),
      r.jsxs("div", {
        className: "footer__body container",
        children: [
          r.jsxs("div", {
            className: "footer__contacts",
            children: [
              r.jsx("h2", {
                className: "footer__contacts-title",
                children: "Contact Us",
              }),
              r.jsxs("div", {
                className: "footer__contacts-body",
                children: [
                  r.jsxs("div", {
                    className: "footer__email",
                    children: [
                      r.jsx("h3", { children: "Email" }),
                      r.jsx("a", {
                        href: "mailto:needhelp@Organia.com",
                        children: "needhelp@Organia.com",
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "footer__phone",
                    children: [
                      r.jsx("h3", { children: "Phone" }),
                      r.jsx("a", {
                        href: "telto:666-888-888",
                        children: "666 888 888",
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "footer__address",
                    children: [
                      r.jsx("h3", { children: "Address" }),
                      r.jsx("address", {
                        children: "88 road, borklyn street, USA",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          r.jsxs("header", {
            className: "footer__header",
            children: [
              r.jsxs("h2", {
                className: "footer__logo",
                children: [
                  r.jsxs("svg", {
                    width: "39",
                    height: "56",
                    viewBox: "0 0 39 56",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      r.jsx("path", {
                        d: "M1.95508 41.9258H19.3954H36.8357",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M5.89551 48.3574L19.3955 48.3574L32.8955 48.3574",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M18.8955 1.35742L18.8955 8.35742L18.8955 15.3574",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M18.9702 14.6426V41.0742",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M30.0299 4.41016L18.9702 15.4944",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M34.2836 8.67383L18.9702 24.0212",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M36.8359 15.4941L18.9702 32.5468",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M37.6866 23.168L18.9702 41.9259",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M37.6865 31.6953L27.4775 41.9269",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M1.10449 31.6953L11.3134 41.9269",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M8.76123 4.41016L18.9702 15.4944",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M4.50732 8.67383L18.97 24.0212",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M1.95508 14.6426L18.97 32.5478",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M1.10449 22.3164L18.9702 41.0743",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                      r.jsx("path", {
                        d: "M19.3955 54.7158C9.29468 54.7158 1.10449 46.2635 1.10449 35.8351V19.8806C1.10449 9.45419 9.29468 1 19.3955 1C29.4982 1 37.6866 9.45419 37.6866 19.8806V35.8351C37.6884 46.2635 29.4982 54.7158 19.3955 54.7158Z",
                        stroke: "#7EB693",
                        "stroke-width": "2",
                        "stroke-miterlimit": "10",
                      }),
                    ],
                  }),
                  "Organic",
                ],
              }),
              r.jsx("div", {
                className: "footer__description",
                children: r.jsx("p", {
                  children:
                    "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing",
                }),
              }),
              r.jsx("div", {
                className: "footer__soc1als",
                children: r.jsx(a6, { className: "footer__soc1als-list" }),
              }),
            ],
          }),
          r.jsxs("div", {
            className: "footer__links",
            children: [
              r.jsx("h2", {
                className: "footer__navigate-title",
                children: "Utility Pages",
              }),
              r.jsx("nav", {
                className: "footer__navigate",
                children: r.jsxs("ul", {
                  className: "footer__navigate-list",
                  children: [
                    r.jsx("li", {
                      children: r.jsx(Ht, {
                        to: "/about",
                        children: "Style Guide",
                      }),
                    }),
                    r.jsx("li", {
                      children: r.jsx(Ht, {
                        to: "/404",
                        children: "404 Not Found",
                      }),
                    }),
                    r.jsx("li", {
                      children: r.jsx(Ht, {
                        to: "/passwordProtect",
                        children: "Password Protected",
                      }),
                    }),
                    r.jsx("li", {
                      children: r.jsx(Ht, {
                        to: "/licenses",
                        children: "Licences",
                      }),
                    }),
                    r.jsx("li", {
                      children: r.jsx(Ht, {
                        to: "/changelog",
                        children: "Changelog",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      r.jsxs("div", {
        className: "footer__copyright",
        children: ["Copyright © ", r.jsx("b", { children: "Organick" })],
      }),
    ],
  });
}
function u6() {
  return r.jsxs(r.Fragment, {
    children: [
      r.jsx(Y2, {}),
      r.jsxs(Qm, {
        children: [
          r.jsx(Qt, { path: "/", element: r.jsx(G2, {}) }),
          r.jsx(Qt, { path: "/about", element: r.jsx(X2, {}) }),
          r.jsx(Qt, { path: "/shop", element: r.jsx(Q2, {}) }),
          r.jsx(Qt, { path: "/shop/shop&single", element: r.jsx(K2, {}) }),
          r.jsx(Qt, { path: "/service", element: r.jsx(k2, {}) }),
          r.jsx(Qt, {
            path: "/service/service&single",
            element: r.jsx(J2, {}),
          }),
          r.jsx(Qt, { path: "/portfolio", element: r.jsx($2, {}) }),
          r.jsx(Qt, {
            path: "/portfolio/portfolio&single",
            element: r.jsx(W2, {}),
          }),
          r.jsx(Qt, { path: "/team", element: r.jsx(F2, {}) }),
          r.jsx(Qt, { path: "/blog", element: r.jsx(P1, {}) }),
          r.jsx(Qt, { path: "/blog/blog&single", element: r.jsx(P1, {}) }),
          r.jsx(Qt, { path: "/contact", element: r.jsx(P2, {}) }),
          r.jsx(Qt, { path: "/404", element: r.jsx(I2, {}) }),
          r.jsx(Qt, { path: "/licenses", element: r.jsx(t6, {}) }),
          r.jsx(Qt, { path: "/changelog", element: r.jsx(e6, {}) }),
          r.jsx(Qt, { path: "/passwordProtect", element: r.jsx(l6, {}) }),
        ],
      }),
      r.jsx(n6, {}),
    ],
  });
}
Ph.createRoot(document.getElementById("root")).render(
  r.jsx(R.StrictMode, { children: r.jsx(m2, { children: r.jsx(u6, {}) }) })
);
