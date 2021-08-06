var netcode = (function (t) {
    "use strict";
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
    ***************************************************************************** */ var e =
        function (t, r) {
            return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                            (t[r] = e[r]);
                })(t, r);
        };
    function r(t, r) {
        if ("function" != typeof r && null !== r)
            throw new TypeError(
                "Class extends value " +
                    String(r) +
                    " is not a constructor or null"
            );
        function n() {
            this.constructor = t;
        }
        e(t, r),
            (t.prototype =
                null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
    }
    function n(t, e, r, n) {
        var i,
            o = arguments.length,
            s =
                o < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, r))
                    : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s = Reflect.decorate(t, e, r, n);
        else
            for (var a = t.length - 1; a >= 0; a--)
                (i = t[a]) &&
                    (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s;
    }
    function i(t, e) {
        return function (r, n) {
            e(r, n, t);
        };
    }
    function o(t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
            function s(t) {
                try {
                    u(n.next(t));
                } catch (t) {
                    o(t);
                }
            }
            function a(t) {
                try {
                    u(n.throw(t));
                } catch (t) {
                    o(t);
                }
            }
            function u(t) {
                var e;
                t.done
                    ? i(t.value)
                    : ((e = t.value),
                      e instanceof r
                          ? e
                          : new r(function (t) {
                                t(e);
                            })).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
        });
    }
    function s(t, e) {
        var r,
            n,
            i,
            o,
            s = {
                label: 0,
                sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: [],
            };
        return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                    return this;
                }),
            o
        );
        function a(o) {
            return function (a) {
                return (function (o) {
                    if (r)
                        throw new TypeError("Generator is already executing.");
                    for (; s; )
                        try {
                            if (
                                ((r = 1),
                                n &&
                                    (i =
                                        2 & o[0]
                                            ? n.return
                                            : o[0]
                                            ? n.throw ||
                                              ((i = n.return) && i.call(n), 0)
                                            : n.next) &&
                                    !(i = i.call(n, o[1])).done)
                            )
                                return i;
                            switch (
                                ((n = 0), i && (o = [2 & o[0], i.value]), o[0])
                            ) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++, { value: o[1], done: !1 };
                                case 5:
                                    s.label++, (n = o[1]), (o = [0]);
                                    continue;
                                case 7:
                                    (o = s.ops.pop()), s.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !((i = s.trys),
                                        (i = i.length > 0 && i[i.length - 1]) ||
                                            (6 !== o[0] && 2 !== o[0]))
                                    ) {
                                        s = 0;
                                        continue;
                                    }
                                    if (
                                        3 === o[0] &&
                                        (!i || (o[1] > i[0] && o[1] < i[3]))
                                    ) {
                                        s.label = o[1];
                                        break;
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        (s.label = i[1]), (i = o);
                                        break;
                                    }
                                    if (i && s.label < i[2]) {
                                        (s.label = i[2]), s.ops.push(o);
                                        break;
                                    }
                                    i[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                            }
                            o = e.call(t, s);
                        } catch (t) {
                            (o = [6, t]), (n = 0);
                        } finally {
                            r = i = 0;
                        }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
            };
        }
    }
    var a,
        u,
        c,
        p = (function () {
            function t() {}
            return (
                Object.defineProperty(t.prototype, "entity", {
                    get: function () {
                        return this._entity;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "domain", {
                    get: function () {
                        return this._entity.domain;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "$comps", {
                    get: function () {
                        return this._entity.$comps;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.get = function (t) {
                    return this._entity.get(t);
                }),
                t
            );
        })(),
        h = -1;
    !(function (t) {
        (t[(t.SERVER = 0)] = "SERVER"), (t[(t.CLIENT = 1)] = "CLIENT");
    })(a || (a = {})),
        (function (t) {
            (t[(t.AUTHORITY = 1)] = "AUTHORITY"),
                (t[(t.SIMULATED_PROXY = 2)] = "SIMULATED_PROXY"),
                (t[(t.AUTONMOUS_PROXY = 3)] = "AUTONMOUS_PROXY");
        })(u || (u = {})),
        (function (t) {
            (t[(t.NONE = 0)] = "NONE"),
                (t[(t.I8 = 1)] = "I8"),
                (t[(t.U8 = 2)] = "U8"),
                (t[(t.I16 = 3)] = "I16"),
                (t[(t.U16 = 4)] = "U16"),
                (t[(t.I32 = 5)] = "I32"),
                (t[(t.U32 = 6)] = "U32"),
                (t[(t.F32 = 7)] = "F32"),
                (t[(t.F64 = 8)] = "F64"),
                (t[(t.SHORT = 9)] = "SHORT"),
                (t[(t.ushort = 10)] = "ushort"),
                (t[(t.INT = 11)] = "INT"),
                (t[(t.uint = 12)] = "uint"),
                (t[(t.LONG = 13)] = "LONG"),
                (t[(t.ulong = 14)] = "ulong"),
                (t[(t.FLOAT = 15)] = "FLOAT"),
                (t[(t.DOUBLE = 16)] = "DOUBLE"),
                (t[(t.STRING = 17)] = "STRING"),
                (t[(t.BOOL = 18)] = "BOOL");
        })(c || (c = {}));
    var l = 99;
    function f(t) {
        return (
            void 0 === t && (t = Object.create(null)),
            (t.hash = h),
            (t.name = ""),
            (t.paramCount = 0),
            (t.paramTypes = []),
            (t.returnType = 98),
            (t.type = -1),
            t
        );
    }
    var d = "__schema__";
    function y(t) {
        if (t.hasOwnProperty(d)) return t.__schema__;
        var e,
            r =
                (void 0 === e && (e = Object.create(null)),
                (e.hash = h),
                (e.name = ""),
                (e.count = 0),
                (e.props = Object.create(null)),
                (e.methods = Object.create(null)),
                (e.raw = []),
                e);
        t.__schema__ = r;
        var n = Object.getPrototypeOf(t).__schema__;
        return n && r.raw.push.apply(r.raw, n.raw), r;
    }
    var v = (function () {
        function t(t) {
            if (
                ((this._name2indexRecord = Object.create(null)),
                (this._values = []),
                null != t)
            ) {
                this._values.length = t.length;
                for (var e = 0, r = t.length; e < r; e++) {
                    var n = t[e],
                        i = n[0],
                        o = n[1];
                    (this._name2indexRecord[i] = e), (this._values[e] = o);
                }
            }
        }
        return (
            (t.prototype.get = function (t) {
                var e = this.getIndex(t);
                return e > -1 ? this._values[e] : null;
            }),
            (t.prototype.getIndex = function (t) {
                var e;
                return null !== (e = this._name2indexRecord[t]) && void 0 !== e
                    ? e
                    : -1;
            }),
            (t.prototype.getByIndex = function (t) {
                return this._values[t];
            }),
            (t.prototype.has = function (t) {
                var e;
                return (
                    (null !== (e = this._name2indexRecord[t]) && void 0 !== e
                        ? e
                        : -1) > -1
                );
            }),
            (t.prototype.set = function (t, e) {
                var r = this._name2indexRecord[t];
                return (
                    null == r &&
                        ((r = this._values.length),
                        (this._name2indexRecord[t] = r)),
                    (this._values[r] = e),
                    r
                );
            }),
            (t.prototype.delete = function (t) {
                var e = this.getIndex(t);
                return e < 0 ? [null, -1] : [this._values[e], e];
            }),
            (t.prototype.clear = function () {
                (this._name2indexRecord = Object.create(null)),
                    (this._values.length = 0);
            }),
            Object.defineProperty(t.prototype, "values", {
                get: function () {
                    return Array.from(this._values);
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(t.prototype, "readonlyValues", {
                get: function () {
                    return this._values;
                },
                enumerable: !1,
                configurable: !0,
            }),
            t
        );
    })();
    function _(t) {
        return t && "function" == typeof t.ser && "function" == typeof t.deser
            ? t
            : null;
    }
    var g = (function () {
        function t() {
            var t = this;
            (this.state = "pending"),
                (this.fate = "unresolved"),
                (this.promise = new Promise(function (e, r) {
                    (t._resolve = e), (t._reject = r);
                })),
                this.promise.then(
                    function (e) {
                        (t.state = "fulfilled"), (t._value = e);
                    },
                    function () {
                        return (t.state = "rejected");
                    }
                );
        }
        return (
            Object.defineProperty(t.prototype, "value", {
                get: function () {
                    return this._value;
                },
                enumerable: !1,
                configurable: !0,
            }),
            (t.prototype.resolve = function (t) {
                if ("resolved" === this.fate)
                    throw "Deferred cannot be resolved twice";
                (this.fate = "resolved"), this._resolve(t);
            }),
            (t.prototype.reject = function (t) {
                if ("resolved" === this.fate)
                    throw "Deferred cannot be resolved twice";
                (this.fate = "resolved"), this._reject(t);
            }),
            (t.prototype.isResolved = function () {
                return "resolved" === this.fate;
            }),
            (t.prototype.isPending = function () {
                return "pending" === this.state;
            }),
            (t.prototype.isFulfilled = function () {
                return "fulfilled" === this.state;
            }),
            (t.prototype.isRejected = function () {
                return "rejected" === this.state;
            }),
            t
        );
    })();
    var m,
        b =
            ((function (t, e) {
                var r;
                (r = function (t) {
                    t.version = "1.2.0";
                    var e = (function () {
                        for (
                            var t = 0, e = new Array(256), r = 0;
                            256 != r;
                            ++r
                        )
                            (t =
                                1 &
                                (t =
                                    1 &
                                    (t =
                                        1 &
                                        (t =
                                            1 &
                                            (t =
                                                1 &
                                                (t =
                                                    1 &
                                                    (t =
                                                        1 &
                                                        (t =
                                                            1 & (t = r)
                                                                ? -306674912 ^
                                                                  (t >>> 1)
                                                                : t >>> 1)
                                                            ? -306674912 ^
                                                              (t >>> 1)
                                                            : t >>> 1)
                                                        ? -306674912 ^ (t >>> 1)
                                                        : t >>> 1)
                                                    ? -306674912 ^ (t >>> 1)
                                                    : t >>> 1)
                                                ? -306674912 ^ (t >>> 1)
                                                : t >>> 1)
                                            ? -306674912 ^ (t >>> 1)
                                            : t >>> 1)
                                        ? -306674912 ^ (t >>> 1)
                                        : t >>> 1)
                                    ? -306674912 ^ (t >>> 1)
                                    : t >>> 1),
                                (e[r] = t);
                        return "undefined" != typeof Int32Array
                            ? new Int32Array(e)
                            : e;
                    })();
                    (t.table = e),
                        (t.bstr = function (t, r) {
                            for (
                                var n = -1 ^ r, i = t.length - 1, o = 0;
                                o < i;

                            )
                                n =
                                    ((n =
                                        (n >>> 8) ^
                                        e[255 & (n ^ t.charCodeAt(o++))]) >>>
                                        8) ^
                                    e[255 & (n ^ t.charCodeAt(o++))];
                            return (
                                o === i &&
                                    (n =
                                        (n >>> 8) ^
                                        e[255 & (n ^ t.charCodeAt(o))]),
                                -1 ^ n
                            );
                        }),
                        (t.buf = function (t, r) {
                            if (t.length > 1e4)
                                return (function (t, r) {
                                    for (
                                        var n = -1 ^ r, i = t.length - 7, o = 0;
                                        o < i;

                                    )
                                        n =
                                            ((n =
                                                ((n =
                                                    ((n =
                                                        ((n =
                                                            ((n =
                                                                ((n =
                                                                    ((n =
                                                                        (n >>>
                                                                            8) ^
                                                                        e[
                                                                            255 &
                                                                                (n ^
                                                                                    t[
                                                                                        o++
                                                                                    ])
                                                                        ]) >>>
                                                                        8) ^
                                                                    e[
                                                                        255 &
                                                                            (n ^
                                                                                t[
                                                                                    o++
                                                                                ])
                                                                    ]) >>>
                                                                    8) ^
                                                                e[
                                                                    255 &
                                                                        (n ^
                                                                            t[
                                                                                o++
                                                                            ])
                                                                ]) >>>
                                                                8) ^
                                                            e[
                                                                255 &
                                                                    (n ^ t[o++])
                                                            ]) >>>
                                                            8) ^
                                                        e[
                                                            255 & (n ^ t[o++])
                                                        ]) >>>
                                                        8) ^
                                                    e[255 & (n ^ t[o++])]) >>>
                                                    8) ^
                                                e[255 & (n ^ t[o++])]) >>>
                                                8) ^
                                            e[255 & (n ^ t[o++])];
                                    for (; o < i + 7; )
                                        n = (n >>> 8) ^ e[255 & (n ^ t[o++])];
                                    return -1 ^ n;
                                })(t, r);
                            for (
                                var n = -1 ^ r, i = t.length - 3, o = 0;
                                o < i;

                            )
                                n =
                                    ((n =
                                        ((n =
                                            ((n =
                                                (n >>> 8) ^
                                                e[255 & (n ^ t[o++])]) >>>
                                                8) ^
                                            e[255 & (n ^ t[o++])]) >>>
                                            8) ^
                                        e[255 & (n ^ t[o++])]) >>>
                                        8) ^
                                    e[255 & (n ^ t[o++])];
                            for (; o < i + 3; )
                                n = (n >>> 8) ^ e[255 & (n ^ t[o++])];
                            return -1 ^ n;
                        }),
                        (t.str = function (t, r) {
                            for (
                                var n, i, o = -1 ^ r, s = 0, a = t.length;
                                s < a;

                            )
                                (n = t.charCodeAt(s++)) < 128
                                    ? (o = (o >>> 8) ^ e[255 & (o ^ n)])
                                    : n < 2048
                                    ? (o =
                                          ((o =
                                              (o >>> 8) ^
                                              e[
                                                  255 &
                                                      (o ^
                                                          (192 |
                                                              ((n >> 6) & 31)))
                                              ]) >>>
                                              8) ^
                                          e[255 & (o ^ (128 | (63 & n)))])
                                    : n >= 55296 && n < 57344
                                    ? ((n = 64 + (1023 & n)),
                                      (i = 1023 & t.charCodeAt(s++)),
                                      (o =
                                          ((o =
                                              ((o =
                                                  ((o =
                                                      (o >>> 8) ^
                                                      e[
                                                          255 &
                                                              (o ^
                                                                  (240 |
                                                                      ((n >>
                                                                          8) &
                                                                          7)))
                                                      ]) >>>
                                                      8) ^
                                                  e[
                                                      255 &
                                                          (o ^
                                                              (128 |
                                                                  ((n >> 2) &
                                                                      63)))
                                                  ]) >>>
                                                  8) ^
                                              e[
                                                  255 &
                                                      (o ^
                                                          (128 |
                                                              ((i >> 6) & 15) |
                                                              ((3 & n) << 4)))
                                              ]) >>>
                                              8) ^
                                          e[255 & (o ^ (128 | (63 & i)))]))
                                    : (o =
                                          ((o =
                                              ((o =
                                                  (o >>> 8) ^
                                                  e[
                                                      255 &
                                                          (o ^
                                                              (224 |
                                                                  ((n >> 12) &
                                                                      15)))
                                                  ]) >>>
                                                  8) ^
                                              e[
                                                  255 &
                                                      (o ^
                                                          (128 |
                                                              ((n >> 6) & 63)))
                                              ]) >>>
                                              8) ^
                                          e[255 & (o ^ (128 | (63 & n)))]);
                            return -1 ^ o;
                        });
                }),
                    "undefined" == typeof DO_NOT_EXPORT_CRC ? r(e) : r({});
            })((m = { exports: {} }), m.exports),
            m.exports),
        w = typeof eval && typeof Function,
        O = Object.create(null),
        C = Object.create(null),
        T = {};
    function M(t, e, r) {
        switch (t) {
            case c.INT:
            case c.I32:
                r.writeInt(e);
                break;
            case c.FLOAT:
            case c.F32:
                r.writeFloat(e);
                break;
            case c.DOUBLE:
            case c.F64:
                r.writeDouble(e);
                break;
            case c.BOOL:
                r.writeBoolean(e);
                break;
            case l:
                e.ser(r);
        }
    }
    function R(t, e, r) {
        switch (t) {
            case c.INT:
            case c.I32:
                return r + ".writeInt(" + e + ");";
            case c.FLOAT:
            case c.F32:
                return r + ".writeFloat(" + e + ");";
            case c.DOUBLE:
            case c.F64:
                return r + ".writeDouble(" + e + ");";
            case c.BOOL:
                return r + ".writeBoolean(" + e + ");";
            case l:
                return e + ".ser(" + r + ");";
        }
    }
    function I(t, e, r, n, i) {
        for (var o = "", s = e; s < r; s++) o += R(t[s], n + "[" + s + "]", i);
        return o;
    }
    function B(t, e, r, n) {
        switch (t) {
            case c.INT:
            case c.I32:
                return e.readInt();
            case c.FLOAT:
            case c.F32:
                return e.readFloat();
            case c.DOUBLE:
            case c.F64:
                return e.readDouble();
            case c.BOOL:
                return e.readBoolean();
            case l:
                return r || (r = new n()), r.deser(e), r;
        }
    }
    function U(t, e, r, n, i) {
        for (var o = "", s = e; s < r; s++) o += E(t[s], i, n + "[" + s + "]");
        return o;
    }
    function E(t, e, r) {
        switch (t) {
            case c.INT:
            case c.I32:
                return r + " = " + e + ".readInt();";
            case c.FLOAT:
            case c.F32:
                return r + " = " + e + ".readFloat();";
            case c.DOUBLE:
            case c.F64:
                return r + " = " + e + ".readDouble();";
            case c.BOOL:
                return r + " = " + e + ".readBoolean();";
            case l:
                return "\n" + r + ".deser(" + e + ")\n            ";
        }
    }
    function A(t) {
        var e = t.__schema__;
        !(function (t, e) {
            (t.ser = function (t) {
                for (var r = 0, n = e.count; r < n; r++) {
                    var i = e.props[r],
                        o = i.type,
                        s = this[i.propertyKey];
                    if (0 === o.container) M(o.dataType, s, t);
                    else {
                        t.writeInt(s.length);
                        for (var a = 0, u = s.length; a < u; a++)
                            M(o.dataType, s[a], t);
                    }
                }
            }),
                (t.deser = function (t) {
                    for (var r = 0, n = e.count; r < n; r++) {
                        var i = e.props[r],
                            o = i.type,
                            s = i.propertyKey;
                        if (0 === o.container)
                            this[s] = B(o.dataType, t, this[s], i.type.refCtr);
                        else {
                            this[s] || (this[s] = []);
                            var a = this[s];
                            a.length = t.readInt();
                            for (var u = 0, c = a.length; u < c; u++)
                                a[u] = B(o.dataType, t, a[u], i.type.refCtr);
                        }
                    }
                });
        })(t, e),
            (function (t, e) {
                for (
                    var r = Object.keys(e.methods),
                        n = function (n, i) {
                            var o = r[n],
                                s = e.methods[o];
                            (t["ser" + s.hash] = function (t, e) {
                                for (var r = 0, n = s.paramCount; r < n; r++) {
                                    var i = e[r];
                                    M(s.paramTypes[r], i, t);
                                }
                            }),
                                (t["deser" + s.hash] = function (t) {
                                    for (
                                        var e = new Array(s.paramCount),
                                            r = 0,
                                            n = s.paramCount;
                                        r < n;
                                        r++
                                    )
                                        e[r] = B(
                                            s.paramTypes[r],
                                            t,
                                            e[r],
                                            s.paramTypes[r]
                                        );
                                    return e;
                                });
                            var a = "__" + o + "__";
                            (t[a] = t[o]),
                                (t[o] = function () {
                                    for (
                                        var t = [], e = 0;
                                        e < arguments.length;
                                        e++
                                    )
                                        t[e] = arguments[e];
                                    if (this.entity.role.local == s.type)
                                        return this[a].apply(this, t);
                                    var r = this.domain;
                                    return null == r
                                        ? Promise.reject("Domain is not valid!")
                                        : r.readonlyInternalMsgMng.sendRpc(
                                              o,
                                              this,
                                              t,
                                              r.logicTime.duration
                                          );
                                });
                        },
                        i = 0,
                        o = r.length;
                    i < o;
                    i++
                )
                    n(i);
            })(t, e);
    }
    function L(t) {
        var e = t.__schema__;
        !(function (t, e) {
            for (var r = "", n = 0, i = e.count; n < i; n++) {
                var o = (p = e.props[n]).type,
                    s = p.propertyKey;
                if (0 === o.container)
                    switch (o.dataType) {
                        case c.INT:
                        case c.I32:
                            r += "buffer.writeInt(this." + s + ");";
                            break;
                        case c.FLOAT:
                        case c.F32:
                            r += "buffer.writeFloat(this." + s + ");";
                            break;
                        case c.DOUBLE:
                        case c.F64:
                            r += "buffer.writeDouble(this." + s + ");";
                            break;
                        case c.BOOL:
                            r += "buffer.writeBoolean(this." + s + ");";
                            break;
                        case l:
                            r += "this." + s + ".ser(buffer);";
                    }
                else {
                    r += "buffer.writeInt(this." + s + ".length);";
                    var a = "";
                    switch (o.dataType) {
                        case c.INT:
                        case c.I32:
                            a = "buffer.writeInt(arr[i]);";
                            break;
                        case c.FLOAT:
                        case c.F32:
                            a = "buffer.writeFloat(arr[i]);";
                            break;
                        case c.DOUBLE:
                        case c.F64:
                            a = "buffer.writeDouble(arr[i]);";
                            break;
                        case c.BOOL:
                            r += "buffer.writeBoolean(this." + s + ");";
                            break;
                        case l:
                            a = "arr[i].ser(buffer);";
                    }
                    r +=
                        "\n            var arr = this." +
                        s +
                        "\n            for (let i = 0, j = arr.length; i < j; i++) {\n                " +
                        a +
                        "\n            }\n            ";
                }
            }
            t.ser = Function("buffer", r);
            var u = "";
            for (n = 0, i = e.count; n < i; n++) {
                var p;
                (o = (p = e.props[n]).type), (s = p.propertyKey);
                if (0 === o.container)
                    switch (o.dataType) {
                        case c.INT:
                        case c.I32:
                            u += "this." + s + "=buffer.readInt();";
                            break;
                        case c.FLOAT:
                        case c.F32:
                            u += "this." + s + "=buffer.readFloat();";
                            break;
                        case c.DOUBLE:
                        case c.F64:
                            u += "this." + s + "=buffer.readDouble();";
                            break;
                        case c.BOOL:
                            u += "this." + s + "=buffer.readBoolean();";
                            break;
                        case l:
                            u += "this." + s + ".deser(buffer);";
                    }
                else {
                    u +=
                        "\n            if(!this." +
                        s +
                        ")this." +
                        s +
                        "=[];\n            var arr=this." +
                        s +
                        ";\n            arr.length=buffer.readInt();";
                    a = "";
                    switch (o.dataType) {
                        case c.INT:
                        case c.I32:
                            a = "arr[i]=buffer.readInt();";
                            break;
                        case c.FLOAT:
                        case c.F32:
                            a = "arr[i]=buffer.readFloat();";
                            break;
                        case c.DOUBLE:
                        case c.F64:
                            a = "arr[i]=buffer.readDouble();";
                            break;
                        case c.BOOL:
                            u += "arr[i]=buffer.readBoolean();";
                            break;
                        case l:
                            a = "arr[i].deser(buffer);";
                    }
                    u +=
                        "\n            for (let i = 0, j = arr.length; i < j; i++) {\n                " +
                        a +
                        "\n            }\n            ";
                }
            }
            t.deser = Function("buffer", u);
        })(t, e),
            (function (t, e) {
                for (
                    var r = Object.keys(e.methods), n = 0, i = r.length;
                    n < i;
                    n++
                ) {
                    var o = r[n],
                        s = e.methods[o],
                        a =
                            "\n" +
                            I(s.paramTypes, 0, s.paramCount, "args", "buffer") +
                            "\n        ";
                    t["ser" + s.hash] = Function("buffer", "args", a);
                    var u =
                        "\nconst args = new Array(" +
                        s.paramCount +
                        ");\n" +
                        U(s.paramTypes, 0, s.paramCount, "args", "buffer") +
                        "\nreturn args;\n        ";
                    t["deser" + s.hash] = Function("buffer", u);
                    var c = "__" + o + "__";
                    t[c] = t[o];
                    var p =
                        "\nif (this.entity.role.local == " +
                        s.type +
                        ') {\n    return this["' +
                        c +
                        '"](...args);\n} else {\n    const domain = this.domain;\n    if (domain == null) {\n        return Promise.reject("Domain is not valid!")\n    }\n    return domain.readonlyInternalMsgMng.sendRpc(\n        "' +
                        o +
                        '",\n        this,\n        args,\n        domain.logicTime.duration\n    );\n}\n        ';
                    t[o] = Function("...args", p);
                }
            })(t, e);
    }
    var k = (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        return r(e, t), e;
    })(Error);
    function S(t, e) {
        var r = t.propertyKey,
            n = e.propertyKey;
        if (r == n) throw new k();
        return r > n ? 1 : -1;
    }
    function D(t, e) {
        return (
            void 0 === e && (e = !0),
            function (r) {
                var n = y(r.prototype);
                if (
                    ((n.name = t),
                    (n.hash = b.str(t)),
                    (O[n.hash] = n.name),
                    (C[n.name] = r),
                    (n.count = n.raw.length),
                    n.count > 0)
                ) {
                    n.raw.sort(S);
                    for (var i = 0; i < n.count; i++) {
                        var o = n.raw[i];
                        (o.paramIndex = i),
                            (n.props[i] = o),
                            (n.props[o.propertyKey] = o);
                    }
                }
                e && (w ? L(r.prototype) : A(r.prototype));
            }
        );
    }
    function x(t) {
        return function (e, r) {
            y(e).raw.push({
                paramIndex: -1,
                propertyKey: String(r),
                type: {
                    container: 0,
                    dataType: "number" == typeof t ? t : l,
                    refCtr: "number" == typeof t ? void 0 : t,
                },
            });
        };
    }
    var P = (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        return r(e, t), e;
    })(Error);
    function j(t, e) {
        return function (r, n) {
            var i = y(r);
            i.methods[n] || (i.methods[n] = f());
            var o = i.methods[n];
            if (
                ((o.hash = b.str(n)),
                (o.name = n),
                (o.type = t),
                T[o.hash] && T[o.hash] != o.name)
            )
                throw new P();
            (T[o.hash] = o.name),
                void 0 === e
                    ? (o.returnType = 98)
                    : ((o.returnType = "number" == typeof e ? e : l),
                      (o.returnRefCtr = "number" == typeof e ? void 0 : e)),
                (o.paramCount = o.paramTypes.length);
            for (var s = 0, a = o.paramCount; s < a; s++)
                o.paramTypes[s] ||
                    (console.warn(
                        "[Netcode]Rpc function " +
                            n +
                            " at paramIndex(" +
                            s +
                            ") set the default type DataType.double"
                    ),
                    (o.paramTypes[s] = c.DOUBLE));
        };
    }
    function F(t) {
        return function (e, r, n) {
            var i = y(e);
            i.methods[r] || (i.methods[r] = f()),
                (i.methods[r].paramTypes[n] = t);
        };
    }
    var N = (function () {
        function t() {}
        return (
            (t.prototype.getsetDirty = function () {
                var t = this.dirty;
                return (this.dirty = !1), t;
            }),
            t
        );
    })();
    !(function (t) {
        function e(e) {
            void 0 === e && (e = 0);
            var r = t.call(this) || this;
            return (r.dirty = !0), (r._value = 0), (r._value = e), r;
        }
        r(e, t),
            Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (t) {
                    this._value !== t && ((this._value = t), (this.dirty = !0));
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.ser = function (t) {
                var e = this.getsetDirty();
                t.writeBoolean(e), e && t.writeInt(this._value);
            }),
            (e.prototype.deser = function (t) {
                (this.dirty = t.readBoolean()),
                    this.dirty && (this._value = t.readInt());
            }),
            n([x(c.BOOL)], e.prototype, "dirty", void 0),
            n([x(c.INT)], e.prototype, "value", null),
            (e = n([D("Int", !1)], e));
    })(N);
    var V = (function (t) {
        function e(e) {
            void 0 === e && (e = 0);
            var r = t.call(this) || this;
            return (r.dirty = !0), (r._value = 0), (r._value = e), r;
        }
        return (
            r(e, t),
            Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (t) {
                    this._value !== t && ((this._value = t), (this.dirty = !0));
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.ser = function (t) {
                var e = this.getsetDirty();
                t.writeBoolean(e), e && t.writeFloat(this._value);
            }),
            (e.prototype.deser = function (t) {
                (this.dirty = t.readBoolean()),
                    this.dirty && (this._value = t.readFloat());
            }),
            n([x(c.BOOL)], e.prototype, "dirty", void 0),
            n([x(c.FLOAT)], e.prototype, "value", null),
            (e = n([D("Float", !1)], e))
        );
    })(N);
    !(function (t) {
        function e(e) {
            void 0 === e && (e = 0);
            var r = t.call(this) || this;
            return (r.dirty = !0), (r._value = 0), (r._value = e), r;
        }
        r(e, t),
            Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (t) {
                    this._value !== t && ((this._value = t), (this.dirty = !0));
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.ser = function (t) {
                var e = this.getsetDirty();
                t.writeBoolean(e), e && t.writeLong(this._value);
            }),
            (e.prototype.deser = function (t) {
                (this.dirty = t.readBoolean()),
                    this.dirty && (this._value = t.readLong());
            }),
            n([x(c.BOOL)], e.prototype, "dirty", void 0),
            n([x(c.LONG)], e.prototype, "value", null),
            (e = n([D("Long", !1)], e));
    })(N),
        (function (t) {
            function e(e) {
                void 0 === e && (e = 0);
                var r = t.call(this) || this;
                return (r.dirty = !0), (r._value = 0), (r._value = e), r;
            }
            r(e, t),
                Object.defineProperty(e.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (t) {
                        this._value !== t &&
                            ((this._value = t), (this.dirty = !0));
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.ser = function (t) {
                    var e = this.getsetDirty();
                    t.writeBoolean(e), e && t.writeUint(this._value);
                }),
                (e.prototype.deser = function (t) {
                    (this.dirty = t.readBoolean()),
                        this.dirty && (this._value = t.readUint());
                }),
                n([x(c.BOOL)], e.prototype, "dirty", void 0),
                n([x(c.uint)], e.prototype, "value", null),
                (e = n([D("Uint", !1)], e));
        })(N),
        (function (t) {
            function e(e) {
                void 0 === e && (e = 0);
                var r = t.call(this) || this;
                return (r.dirty = !0), (r._value = 0), (r._value = e), r;
            }
            r(e, t),
                Object.defineProperty(e.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (t) {
                        this._value !== t &&
                            ((this._value = t), (this.dirty = !0));
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.ser = function (t) {
                    var e = this.getsetDirty();
                    t.writeBoolean(e), e && t.writeDouble(this._value);
                }),
                (e.prototype.deser = function (t) {
                    (this.dirty = t.readBoolean()),
                        this.dirty && (this._value = t.readDouble());
                }),
                n([x(c.BOOL)], e.prototype, "dirty", void 0),
                n([x(c.DOUBLE)], e.prototype, "value", null),
                (e = n([D("Double", !1)], e));
        })(N),
        (function (t) {
            function e(e) {
                void 0 === e && (e = 0);
                var r = t.call(this) || this;
                return (r.dirty = !0), (r._value = 0), (r._value = e), r;
            }
            r(e, t),
                Object.defineProperty(e.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (t) {
                        this._value !== t &&
                            ((this._value = t), (this.dirty = !0));
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.ser = function (t) {
                    var e = this.getsetDirty();
                    t.writeBoolean(e), e && t.writeUlong(this._value);
                }),
                (e.prototype.deser = function (t) {
                    (this.dirty = t.readBoolean()),
                        this.dirty && (this._value = t.readUlong());
                }),
                n([x(c.BOOL)], e.prototype, "dirty", void 0),
                n([x(c.ulong)], e.prototype, "value", null),
                (e = n([D("Ulong", !1)], e));
        })(N);
    var Y = (function (t) {
        function e(e) {
            void 0 === e && (e = 0);
            var r = t.call(this) || this;
            return (r.dirty = !0), (r._value = 0), (r._value = e), r;
        }
        return (
            r(e, t),
            Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (t) {
                    this._value !== t && ((this._value = t), (this.dirty = !0));
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.ser = function (t) {
                var e = this.getsetDirty();
                t.writeBoolean(e), e && t.writeShort(this._value);
            }),
            (e.prototype.deser = function (t) {
                (this.dirty = t.readBoolean()),
                    this.dirty && (this._value = t.readShort());
            }),
            n([x(c.BOOL)], e.prototype, "dirty", void 0),
            n([x(c.SHORT)], e.prototype, "value", null),
            (e = n([D("Short", !1)], e))
        );
    })(N);
    !(function (t) {
        function e(e) {
            void 0 === e && (e = 0);
            var r = t.call(this) || this;
            return (r.dirty = !0), (r._value = 0), (r._value = e), r;
        }
        r(e, t),
            Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (t) {
                    this._value !== t && ((this._value = t), (this.dirty = !0));
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.ser = function (t) {
                var e = this.getsetDirty();
                t.writeBoolean(e), e && t.writeUshort(this._value);
            }),
            (e.prototype.deser = function (t) {
                (this.dirty = t.readBoolean()),
                    this.dirty && (this._value = t.readUshort());
            }),
            n([x(c.BOOL)], e.prototype, "dirty", void 0),
            n([x(c.ushort)], e.prototype, "value", null),
            (e = n([D("Ulong", !1)], e));
    })(N);
    var H,
        $ = (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.$delta = new V(0)), (e.duration = 0), e;
            }
            return (
                r(e, t),
                Object.defineProperty(e.prototype, "delta", {
                    get: function () {
                        return this.$delta.value;
                    },
                    set: function (t) {
                        this.$delta.value = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                n([x(V)], e.prototype, "$delta", void 0),
                n([x(c.DOUBLE)], e.prototype, "duration", void 0),
                (e = n([D("logic_time")], e))
            );
        })(p),
        K = (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.delta = 0), (e.duration = 0), e;
            }
            return r(e, t), (e = n([D("render_time")], e));
        })(p),
        X = (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                    (e.$local = new Y(u.AUTHORITY)),
                    (e.$remote = new Y(u.SIMULATED_PROXY)),
                    e
                );
            }
            return (
                r(e, t),
                Object.defineProperty(e.prototype, "local", {
                    get: function () {
                        return this.$local.value;
                    },
                    set: function (t) {
                        this.$local.value = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "remote", {
                    get: function () {
                        return this.$remote.value;
                    },
                    set: function (t) {
                        this.$remote.value = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.ser = function (t) {
                    this.$local.ser(t), this.$remote.ser(t);
                }),
                (e.prototype.deser = function (t) {
                    this.$remote.deser(t), this.$local.deser(t);
                }),
                (e.prototype.upgrade = function () {
                    return o(this, void 0, void 0, function () {
                        return s(this, function (t) {
                            return this.local != u.AUTHORITY &&
                                this.remote != u.AUTONMOUS_PROXY
                                ? ((this.remote = u.AUTONMOUS_PROXY), [2, !0])
                                : [2, !1];
                        });
                    });
                }),
                (e.prototype.downgrade = function () {
                    return o(this, void 0, void 0, function () {
                        return s(this, function (t) {
                            return this.local != u.AUTHORITY &&
                                this.remote != u.SIMULATED_PROXY
                                ? ((this.remote = u.SIMULATED_PROXY), [2, !0])
                                : [2, !1];
                        });
                    });
                }),
                (e.prototype.init = function () {
                    var t = this.domain.option.type;
                    (this.$local.value =
                        t === a.SERVER ? u.AUTHORITY : u.SIMULATED_PROXY),
                        (this.$remote.value =
                            t === a.SERVER ? u.SIMULATED_PROXY : u.AUTHORITY);
                }),
                n([x(Y)], e.prototype, "$local", void 0),
                n([x(Y)], e.prototype, "$remote", void 0),
                n([j(u.AUTHORITY, c.BOOL)], e.prototype, "upgrade", null),
                n([j(u.AUTHORITY, c.BOOL)], e.prototype, "downgrade", null),
                (e = n([D("role", !1)], e))
            );
        })(p),
        G = (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return r(e, t), e;
        })(Error),
        z = (function () {
            function t() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                (this._id = h),
                    (this._version = h),
                    (this.$comps = new Proxy(this, {
                        get: function (t, e, r) {
                            return t.get(C[String(e)]);
                        },
                    })),
                    (this.role = new X()),
                    (this._compMap = new Map()),
                    this._initComp(this.role),
                    (this._comps = t);
                for (var r = 0, n = this._comps.length; r < n; r++)
                    this._initComp(this._comps[r]);
            }
            return (
                Object.defineProperty(t.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "version", {
                    get: function () {
                        return this._version;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "domain", {
                    get: function () {
                        return this._domain;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "comps", {
                    get: function () {
                        return this._comps;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype._initComp = function (t) {
                    var e = this._compMap;
                    if (
                        ((t._entity = this),
                        !t.__schema__ || t.__schema__.hash == h)
                    )
                        throw new G("Component must use @NetComp");
                    var r = t.__schema__.hash;
                    e.has(r) ? e.set(r, [e.get(r), t]) : e.set(r, t);
                }),
                (t.prototype.toString = function () {
                    return (
                        "Entity: id=" + this._id + ",version=" + this._version
                    );
                }),
                (t.prototype.get = function (t) {
                    var e = t.prototype.__schema__;
                    if (!e || !e.name)
                        return (
                            console.error("Componrnt must use @NetComp"), null
                        );
                    if (!this._compMap.has(e.hash)) return null;
                    var r = this._compMap.get(e.hash);
                    return Array.isArray(r) ? r[r.length - 1] : r;
                }),
                (t.prototype.mget = function (t) {
                    var e,
                        r = t.prototype.__schema__;
                    return r && r.name
                        ? null !== (e = this._compMap.get(r.hash)) &&
                          void 0 !== e
                            ? e
                            : []
                        : (console.error("Componrnt must use @NetComp"), []);
                }),
                (t.prototype.has = function (t) {
                    var e = t.prototype.__schema__;
                    return e && e.name
                        ? this._compMap.has(e.hash)
                        : (console.error("Componrnt must use @NetComp"), !1);
                }),
                (t.prototype.indexOf = function (t) {
                    return null == t ? -1 : this._comps.indexOf(t);
                }),
                (t.prototype._init = function () {
                    for (var t = 0, e = this._comps.length; t < e; t++) {
                        var r = this._comps[t];
                        r.init && r.init(t);
                    }
                }),
                (t.prototype._renderUpdate = function () {
                    for (var t = 0, e = this._comps.length; t < e; t++) {
                        var r = this._comps[t];
                        r.renderUpdate && r.renderUpdate(t);
                    }
                }),
                (t.prototype._logicUpdate = function () {
                    for (var t = 0, e = this._comps.length; t < e; t++) {
                        var r = this._comps[t];
                        r.logicUpdate && r.logicUpdate(t);
                    }
                }),
                (t.prototype._destroy = function () {
                    for (var t = 0, e = this._comps.length; t < e; t++) {
                        var r = this._comps[t];
                        r.destroy && r.destroy(t), (r._entity = null);
                    }
                    (this._comps.length = 0), this._compMap.clear();
                }),
                (t.Event = {
                    REG_ENTITY: "reg-entity",
                    UNREG_ENTITY: "unreg-entity",
                }),
                t
            );
        })();
    !(function (t) {
        (t[(t.UPDATE_COMPONENT = 0)] = "UPDATE_COMPONENT"),
            (t[(t.RPC = 1)] = "RPC");
    })(H || (H = {}));
    var J = (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return r(e, t), e;
        })(Error),
        W = (function () {
            function t(t) {
                (this._rpcCalls = []),
                    (this._rpcDeferred = new Map()),
                    (this._uuid = 0),
                    (this.inoutbuffer = new t()),
                    (this.statebuffer = new t()),
                    (this.rpcbuffer = new t()),
                    (this.rpcCallbackBuffer = new t());
            }
            return (
                (t.prototype._getUuid = function () {
                    return this._uuid >= 255
                        ? (console.warn(
                              "[MessageManager#_getUuid]UUID is great than 255"
                          ),
                          0)
                        : ++this._uuid;
                }),
                (t.prototype.startSendEntityAndComps = function () {
                    this.statebuffer.reset();
                }),
                (t.prototype.sendEntity = function (t, e, r, n) {
                    var i,
                        o = this.statebuffer;
                    o.writeInt(t),
                        o.writeInt(((i = e), (i %= 1073741823), n ? -i : i)),
                        o.writeInt(r);
                }),
                (t.prototype.sendComp = function (t, e) {
                    var r = this.statebuffer;
                    return (
                        r.writeInt(t),
                        r.writeLong(e.__schema__.hash),
                        e.ser(r),
                        !0
                    );
                }),
                (t.prototype.endSendEntityAndComps = function () {
                    this.statebuffer.reset();
                }),
                (t.prototype.startRecvEntityAndComps = function () {}),
                (t.prototype.recvEntity = function () {
                    var t = this.statebuffer;
                    if (!t.hasNext()) return null;
                    var e,
                        r = t.readInt(),
                        n = [(e = t.readInt()) > 0 ? e : -e, e < 0];
                    return {
                        entityId: r,
                        entityVersion: n[0],
                        destoryed: n[1],
                        compCount: t.readInt(),
                    };
                }),
                (t.prototype.recvCompHeader = function () {
                    var t = this.statebuffer;
                    return { compIdx: t.readInt(), hash: t.readLong() };
                }),
                (t.prototype.recvCompBody = function (t) {
                    var e = this.statebuffer;
                    t.deser(e);
                }),
                (t.prototype.endRecvEntityAndComps = function () {}),
                (t.prototype.startSendRpc = function () {}),
                (t.prototype.sendRpc = function (t, e, r, n) {
                    var i = this._getUuid();
                    if (i < 0) return Promise.reject(new J());
                    var o = e,
                        s = o.entity,
                        a = s.indexOf(e),
                        u = this.rpcbuffer,
                        c = o.__schema__.methods[t];
                    if (
                        (u.writeInt(s.id),
                        u.writeUshort(a),
                        u.writeLong(c.hash),
                        u.writeLong(n),
                        u.writeUint(i),
                        e["ser" + c.hash](u, r),
                        98 != c.returnType)
                    ) {
                        var p = new g();
                        return (
                            this._rpcDeferred.set(
                                s.id + "|" + a + "|" + c.hash + "|" + i,
                                { deferred: p, timestamp: n }
                            ),
                            p.promise
                        );
                    }
                }),
                (t.prototype.endSendRpc = function () {
                    this.rpcbuffer.reset(), (this._uuid = 0);
                }),
                (t.prototype.startRecvRpc = function () {}),
                (t.prototype.recvRpc = function () {
                    if (!this.rpcbuffer.hasNext()) return null;
                    var t = this.rpcbuffer;
                    return {
                        entityId: t.readInt(),
                        compIdx: t.readUshort(),
                        methodHash: t.readLong(),
                        timestamp: t.readLong(),
                        uuid: t.readUint(),
                    };
                }),
                (t.prototype.endRecvRpc = function () {}),
                (t.prototype.startSendRpcCallback = function () {}),
                (t.prototype.sendRpcCallback = function (t) {
                    var e = this.rpcCallbackBuffer;
                    e.writeInt(t.entityId),
                        e.writeUshort(t.compIdx),
                        e.writeLong(t.methodHash),
                        e.writeUint(t.uuid);
                }),
                (t.prototype.endSendRpcCallback = function () {
                    this.rpcCallbackBuffer.reset();
                }),
                (t.prototype.startRecvRpcCallback = function () {}),
                (t.prototype.recvRpcCallback = function () {
                    if (!this.rpcCallbackBuffer.hasNext()) return null;
                    var t = this.rpcCallbackBuffer;
                    return {
                        entityId: t.readInt(),
                        compIdx: t.readUshort(),
                        methodHash: t.readLong(),
                        uuid: t.readUint(),
                    };
                }),
                (t.prototype.endRecvRpcCallback = function () {}),
                (t.prototype.getRpcCallbackRecord = function (t) {
                    return this._rpcDeferred.get(
                        t.entityId +
                            "|" +
                            t.compIdx +
                            "|" +
                            t.methodHash +
                            "|" +
                            t.uuid
                    );
                }),
                t
            );
        })(),
        q = {
            int: new Int32Array(1),
            uint: new Uint32Array(1),
            short: new Int16Array(1),
            ushort: new Uint16Array(1),
            long: new Int32Array(1),
            ulong: new Uint32Array(1),
            float: new Float32Array(1),
            double: new Float64Array(1),
        },
        Q = (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return r(e, t), e;
        })(Error),
        Z = (function () {
            function t() {
                (this.writeBuffer = []),
                    (this.writerCursor = 0),
                    (this.readBuffer = []),
                    (this.readerCursor = 0),
                    (this.readerStart = 0),
                    (this.readerEnd = 0);
            }
            return (
                (t.prototype.check = function (t) {
                    if (
                        (void 0 === t && (t = 0),
                        this.writerCursor + t >= this.readBuffer.length &&
                            this.writerCursor + t >= this.readerEnd)
                    )
                        throw new Q(
                            "Cursor: (" +
                                this.writerCursor +
                                "), buffer's length: (" +
                                this.writeBuffer.length +
                                ")"
                        );
                }),
                (t.prototype.reset = function () {
                    (this.writerCursor = 0),
                        (this.readerCursor = 0),
                        (this.readBuffer.length = 0),
                        (this.writeBuffer.length = 0);
                }),
                (t.prototype.readInt = function () {
                    this.check();
                    var t = q.int;
                    return (t[0] = this.readBuffer[this.readerCursor++]), t[0];
                }),
                (t.prototype.readUint = function () {
                    this.check();
                    var t = q.uint;
                    return (t[0] = this.readBuffer[this.readerCursor++]), t[0];
                }),
                (t.prototype.readShort = function () {
                    this.check();
                    var t = q.short;
                    return (t[0] = this.readBuffer[this.readerCursor++]), t[0];
                }),
                (t.prototype.readUshort = function () {
                    this.check();
                    var t = q.ushort;
                    return (t[0] = this.readBuffer[this.readerCursor++]), t[0];
                }),
                (t.prototype.readLong = function () {
                    this.check();
                    var t = q.long;
                    return (t[0] = this.readBuffer[this.readerCursor++]), t[0];
                }),
                (t.prototype.readUlong = function () {
                    this.check();
                    var t = q.ulong;
                    return (t[0] = this.readBuffer[this.readerCursor++]), t[0];
                }),
                (t.prototype.readFloat = function () {
                    this.check();
                    var t = q.float;
                    return (t[0] = this.readBuffer[this.readerCursor++]), t[0];
                }),
                (t.prototype.readDouble = function () {
                    this.check();
                    var t = q.double;
                    return (t[0] = this.readBuffer[this.readerCursor++]), t[0];
                }),
                (t.prototype.readBoolean = function () {
                    return (
                        this.check(),
                        Boolean(this.readBuffer[this.readerCursor++])
                    );
                }),
                (t.prototype.set = function (t, e, r) {
                    void 0 === e && (e = 0),
                        void 0 === r && (r = -1),
                        (this.writerCursor = 0);
                    var n = JSON.parse(t),
                        i = Array.isArray(n) ? n : [];
                    r < 0 && (r += i.length),
                        (this.readerStart = this.readerCursor = e),
                        (this.readerEnd = r),
                        (this.readBuffer = i);
                }),
                (t.prototype.writeInt = function (t) {
                    return (
                        (q.int[0] = t),
                        (this.writeBuffer[this.writerCursor++] = t),
                        this
                    );
                }),
                (t.prototype.writeUint = function (t) {
                    return (
                        (q.uint[0] = t),
                        (this.writeBuffer[this.writerCursor++] = t),
                        this
                    );
                }),
                (t.prototype.writeShort = function (t) {
                    return (
                        (q.short[0] = t),
                        (this.writeBuffer[this.writerCursor++] = t),
                        this
                    );
                }),
                (t.prototype.writeUshort = function (t) {
                    return (
                        (q.ushort[0] = t),
                        (this.writeBuffer[this.writerCursor++] = t),
                        this
                    );
                }),
                (t.prototype.writeLong = function (t) {
                    return (
                        (q.long[0] = t),
                        (this.writeBuffer[this.writerCursor++] = t),
                        this
                    );
                }),
                (t.prototype.writeUlong = function (t) {
                    return (
                        (q.ulong[0] = t),
                        (this.writeBuffer[this.writerCursor++] = t),
                        this
                    );
                }),
                (t.prototype.writeFloat = function (t) {
                    return (
                        (q.float[0] = t),
                        (this.writeBuffer[this.writerCursor++] = t),
                        this
                    );
                }),
                (t.prototype.writeDouble = function (t) {
                    return (
                        (q.double[0] = t),
                        (this.writeBuffer[this.writerCursor++] = t),
                        this
                    );
                }),
                (t.prototype.writeBoolean = function (t) {
                    return (
                        (this.writeBuffer[this.writerCursor++] = t ? 1 : 0),
                        this
                    );
                }),
                (t.prototype.get = function () {
                    return (
                        (this.writeBuffer.length = this.writerCursor),
                        JSON.stringify(this.writeBuffer)
                    );
                }),
                (t.prototype.hasNext = function () {
                    return (
                        this.readerCursor < this.readBuffer.length &&
                        this.readerCursor < this.readerEnd
                    );
                }),
                (t.prototype.append = function (t) {
                    return (
                        this.writeBuffer.push.apply(
                            this.writeBuffer,
                            t.writeBuffer
                        ),
                        (this.writerCursor += t.writerCursor),
                        this
                    );
                }),
                t
            );
        })(),
        tt = (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return r(e, t), e;
        })(Error),
        et = (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return r(e, t), e;
        })(Error),
        rt = (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return r(e, t), e;
        })(Error),
        nt = (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return r(e, t), e;
        })(Error);
    !(function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        r(e, t);
    })(Error);
    var it = (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        return r(e, t), e;
    })(Error);
    var ot = (function () {
            function t(t, e, r) {
                (this.name = t),
                    (this.uuid = r),
                    (this._index = -1),
                    (this._entitiesLength = 0),
                    (this._entityIdCursor = 0),
                    (this._fixedSecAccumulator = 0);
                var n = (function (t) {
                    return (
                        void 0 === t.dataBufCtr && (t.dataBufCtr = Z),
                        void 0 === t.capacity && (t.capacity = 50),
                        void 0 === t.autoResize && (t.autoResize = !0),
                        void 0 === t.fixedTimeSec && (t.fixedTimeSec = 0.2),
                        t
                    );
                })(e);
                (this._option = n),
                    (this._entities = new Array(n.capacity)),
                    (this._entityVersion = new Array(n.capacity)),
                    this._entityVersion.fill(0),
                    (this._destroyEntityId = new Array()),
                    (this._internalMsgMng = new W(n.dataBufCtr)),
                    (this.readonlyInternalMsgMng = this._internalMsgMng),
                    (this.logicTime = new $()),
                    (this.renderTime = new K()),
                    (this.time = new z(this.logicTime, this.renderTime)),
                    (this.logicTime.delta = this.option.fixedTimeSec),
                    this.reg(this.time);
            }
            return (
                (t.Create = function (e, r, n) {
                    if (
                        (void 0 === n && (n = b.str(e)),
                        this._name2domainMap.has(e))
                    )
                        throw new nt(e);
                    var i = new t(e, r, n),
                        o = this._name2domainMap.set(e, i);
                    return (i._index = o), i;
                }),
                (t.Get = function (t) {
                    return (
                        void 0 === t && (t = "main"),
                        this._name2domainMap.get(t)
                    );
                }),
                (t.GetByEntity = function (t) {
                    var e = t.id,
                        r = this._name2domainMap.values[e];
                    return r.isValid(t) ? r : null;
                }),
                (t.Clear = function () {
                    this._name2domainMap.clear();
                }),
                Object.defineProperty(t.prototype, "index", {
                    get: function () {
                        return this._index;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "entities", {
                    get: function () {
                        return this._entities;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "length", {
                    get: function () {
                        return this._entitiesLength;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "option", {
                    get: function () {
                        return this._option;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.reg = function (t) {
                    if (this.isValid(t)) throw new et(t.toString());
                    if (this._entityIdCursor == this._option.capacity) {
                        if (!this._option.autoResize)
                            throw new rt(
                                "Domain: capacity: " +
                                    this._option.capacity +
                                    "; " +
                                    t.toString()
                            );
                        this.resize(Math.ceil(1.5 * this._option.capacity));
                    }
                    var e = this._getEntityId(),
                        r = this._entityVersion[e];
                    this._reg(t, e, r), t._init();
                }),
                (t.prototype.hasReg = function (t) {
                    return this.isValid(t);
                }),
                (t.prototype.unregWithoutValidation = function (t) {
                    var e = t.id;
                    this._entityVersion[e]++,
                        this._unreg(t),
                        this._destroyEntityId.push(t.id),
                        (this._entities[e] = null),
                        t._destroy();
                }),
                (t.prototype.unreg = function (t) {
                    if (!this.isValid(t)) throw new tt(t.toString());
                    this.unregWithoutValidation(t);
                }),
                (t.prototype.get = function (t) {
                    return this._entities[t];
                }),
                (t.prototype.resize = function (t) {
                    var e = this._option.capacity;
                    (this._entities.length = t),
                        (this._entityVersion.length = t),
                        this._entityVersion.fill(0, e, t),
                        (this._option.capacity = t);
                }),
                (t.prototype.isValid = function (t) {
                    return (
                        t.id != h &&
                        t.version != h &&
                        t.version == this._entityVersion[t.id]
                    );
                }),
                (t.prototype.asData = function () {
                    var t = this._option.type == a.SERVER,
                        e = this._internalMsgMng.inoutbuffer,
                        r = this._internalMsgMng.statebuffer,
                        n = this._internalMsgMng.rpcbuffer,
                        i = this._internalMsgMng.rpcCallbackBuffer;
                    if ((e.reset(), e.writeInt(this.uuid).writeBoolean(t), t)) {
                        this._internalMsgMng.startSendEntityAndComps(),
                            this._internalMsgMng.startSendRpc(),
                            this._internalMsgMng.startSendRpcCallback(),
                            this._serEntityAndComps();
                        var o = r.writerCursor,
                            s = n.writerCursor,
                            u = i.writerCursor;
                        e
                            .writeUlong(o)
                            .writeUlong(s)
                            .writeUlong(u)
                            .append(r)
                            .append(n)
                            .append(i),
                            this._internalMsgMng.endSendEntityAndComps(),
                            this._internalMsgMng.endSendRpc(),
                            this._internalMsgMng.endSendRpcCallback();
                    } else {
                        this._internalMsgMng.startSendRpc(),
                            this._internalMsgMng.startSendRpcCallback();
                        (s = n.writerCursor), (u = i.writerCursor);
                        e.writeUlong(s).writeUlong(u).append(n).append(i),
                            this._internalMsgMng.endSendRpc(),
                            this._internalMsgMng.endSendRpcCallback();
                    }
                    return e.get();
                }),
                (t.prototype.setData = function (t) {
                    var e = this._internalMsgMng.inoutbuffer,
                        r = this._internalMsgMng.statebuffer,
                        n = this._internalMsgMng.rpcbuffer,
                        i = this._internalMsgMng.rpcCallbackBuffer;
                    if ((e.set(t), e.readInt(), e.readBoolean())) {
                        var o = e.readUlong(),
                            s = e.readUlong(),
                            a = e.readUlong(),
                            u = e.readerCursor,
                            c = u + o,
                            p = (f = l = (h = c) + s) + a;
                        r.set(t, u, c),
                            n.set(t, h, l),
                            i.set(t, f, p),
                            this._internalMsgMng.startRecvEntityAndComps(),
                            this._derEntityAndComps(),
                            this._internalMsgMng.endRecvEntityAndComps(),
                            this._internalMsgMng.startRecvRpc(),
                            this._deserRpcs(),
                            this._internalMsgMng.endRecvRpc(),
                            this._internalMsgMng.startRecvRpcCallback(),
                            this._deserRpcCallbacks(),
                            this._internalMsgMng.endRecvRpcCallback();
                    } else {
                        var h, l, f;
                        (s = e.readUlong()),
                            (a = e.readUlong()),
                            (p = (f = l = (h = e.readerCursor) + s) + a);
                        n.set(t, h, l),
                            i.set(t, f, p),
                            this._internalMsgMng.startRecvRpc(),
                            this._deserRpcs(),
                            this._internalMsgMng.endRecvRpc(),
                            this._internalMsgMng.startRecvRpcCallback(),
                            this._deserRpcCallbacks(),
                            this._internalMsgMng.endRecvRpcCallback();
                    }
                }),
                (t.prototype.update = function (t) {
                    this._fixedSecAccumulator += t;
                    for (
                        var e = this.logicTime.delta;
                        this._fixedSecAccumulator > e;

                    ) {
                        (this._fixedSecAccumulator -= e),
                            (this.logicTime.duration += e);
                        for (var r = 0, n = this._entitiesLength; r < n; r++) {
                            (i = this._entities[r]) &&
                                ((i.role.local !== u.AUTHORITY &&
                                    i.role.local !== u.AUTONMOUS_PROXY) ||
                                    i._logicUpdate());
                        }
                    }
                    (this.renderTime.delta = t),
                        (this.renderTime.duration += t);
                    for (r = 0, n = this._entitiesLength; r < n; r++) {
                        var i;
                        (i = this._entities[r]) && i._renderUpdate();
                    }
                }),
                (t.prototype._reg = function (t, e, r) {
                    (t._id = e), (t._version = r), (t._domain = this);
                    var n = t.id;
                    (this._entities[n] = t),
                        n >= this._entitiesLength &&
                            (this._entitiesLength = n + 1);
                }),
                (t.prototype._unreg = function (t) {
                    (t._id = h), (t._version = h), (t._domain = void 0);
                }),
                (t.prototype._serEntityAndComps = function () {
                    for (var t = 0, e = this._entitiesLength; t < e; t++) {
                        var r = this._entities[t];
                        if (r) {
                            this._internalMsgMng.sendEntity(
                                r.id,
                                r.version,
                                r.comps.length,
                                !1
                            );
                            for (
                                var n = r.comps, i = 0, o = n.length;
                                i < o;
                                i++
                            ) {
                                var s = _(n[i]);
                                s
                                    ? this._internalMsgMng.sendComp(i, s)
                                    : console.warn(
                                          "[Domain#_ser(compIdx: " +
                                              i +
                                              ", entity: " +
                                              r +
                                              ")]comp is not Serable!"
                                      );
                            }
                            r.role.ser(this._internalMsgMng.statebuffer);
                        } else
                            this._internalMsgMng.sendEntity(
                                t,
                                this._entityVersion[t],
                                0,
                                !0
                            );
                    }
                }),
                (t.prototype._derEntityAndComps = function () {
                    for (var t; (t = this._internalMsgMng.recvEntity()); ) {
                        var e = this._entities[t.entityId];
                        e &&
                            (e.version != t.entityVersion || t.destoryed) &&
                            (this.unreg(e), (e = null)),
                            t.destoryed ||
                                (e = e
                                    ? this._derEntityAndCompsUnderExisted(t, e)
                                    : this._derEntityAndCompsUnderUnExsited(t));
                    }
                }),
                (t.prototype._derEntityAndCompsUnderExisted = function (t, e) {
                    var r = e.comps;
                    !(function (t, e) {
                        if (!t) throw new e();
                    })(t.compCount == r.length, it);
                    for (var n = 0, i = t.compCount; n < i; n++) {
                        var o = _(
                            r[this._internalMsgMng.recvCompHeader().compIdx]
                        );
                        o && this._internalMsgMng.recvCompBody(o);
                    }
                    return e.role.deser(this._internalMsgMng.statebuffer), e;
                }),
                (t.prototype._derEntityAndCompsUnderUnExsited = function (t) {
                    for (
                        var e = new Array(t.compCount), r = 0, n = t.compCount;
                        r < n;
                        r++
                    ) {
                        var i = this._internalMsgMng.recvCompHeader(),
                            o = O[i.hash],
                            s = new (0, C[o])();
                        this._internalMsgMng.recvCompBody(s),
                            (e[i.compIdx] = s);
                    }
                    var a = new (z.bind.apply(
                        z,
                        (function (t, e) {
                            for (
                                var r = 0, n = e.length, i = t.length;
                                r < n;
                                r++, i++
                            )
                                t[i] = e[r];
                            return t;
                        })([void 0], e)
                    ))();
                    return (
                        a.role.deser(this._internalMsgMng.statebuffer),
                        this.reg(a),
                        a
                    );
                }),
                (t.prototype._deserRpcs = function () {
                    for (
                        var t,
                            e = this,
                            r = function () {
                                var r = n.get(t.entityId);
                                if (!r) return "continue";
                                var i = r.comps[t.compIdx];
                                if (!i) return "continue";
                                var o = i["deser" + t.methodHash](
                                        n._internalMsgMng.rpcbuffer
                                    ),
                                    s = T[t.methodHash],
                                    a = i[s].apply(i, o),
                                    u = i.__schema__.methods[s];
                                if (98 != u.returnType) {
                                    var c = t;
                                    null == a ||
                                        a.then(function (t) {
                                            e._internalMsgMng.sendRpcCallback(
                                                c
                                            ),
                                                M(
                                                    u.returnType,
                                                    t,
                                                    e._internalMsgMng
                                                        .rpcCallbackBuffer
                                                );
                                        });
                                }
                            },
                            n = this;
                        (t = this._internalMsgMng.recvRpc());

                    )
                        r();
                }),
                (t.prototype._deserRpcCallbacks = function () {
                    for (
                        var t;
                        (t = this._internalMsgMng.recvRpcCallback());

                    ) {
                        var e = this.get(t.entityId);
                        if (e) {
                            var r = e.comps[t.compIdx];
                            if (r) {
                                var n = r.__schema__,
                                    i = T[t.methodHash],
                                    o = n.methods[i],
                                    s = void 0;
                                98 != o.returnType &&
                                    (s = B(
                                        o.returnType,
                                        this._internalMsgMng.rpcCallbackBuffer,
                                        void 0,
                                        o.returnRefCtr
                                    ));
                                var a =
                                    this._internalMsgMng.getRpcCallbackRecord(
                                        t
                                    );
                                a && a.deferred.resolve(s);
                            }
                        }
                    }
                }),
                (t.prototype._getEntityId = function () {
                    return this._destroyEntityId.length > 0
                        ? this._destroyEntityId.unshift()
                        : this._entityIdCursor++;
                }),
                (t._name2domainMap = new v()),
                t
            );
        })(),
        st = (function () {
            function t() {
                this._arr = [];
            }
            return (
                (t.prototype.send = function (t) {
                    this._arr.push(t);
                }),
                (t.prototype.update = function () {
                    for (
                        var t, e;
                        this._arr.length >= 1 &&
                        (e = this._arr[0]).isFulfilled();

                    )
                        null === (t = this.receiver) ||
                            void 0 === t ||
                            t.receive(e.value),
                            this._arr.shift();
                }),
                t
            );
        })(),
        at = (function () {
            function t() {}
            return (
                Object.defineProperty(t, "server", {
                    set: function (t) {
                        this._serverTcp.receiver = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t, "client1", {
                    set: function (t) {
                        this._client1Tcp.receiver = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t, "client2", {
                    set: function (t) {
                        this._client2Tcp.receiver = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.clone = function (t) {
                    return t;
                }),
                (t.send = function (t) {
                    var e = this;
                    return {
                        server: function () {
                            var r = new g();
                            setTimeout(function () {
                                return r.resolve(e.clone(t));
                            }, e.delay + Math.random() * e.jitter),
                                e._serverTcp.send(r);
                        },
                        c1: function () {
                            var r = new g();
                            setTimeout(function () {
                                return r.resolve(e.clone(t));
                            }, e.delay + Math.random() * e.jitter),
                                e._client1Tcp.send(r);
                        },
                        c2: function () {
                            var r = new g();
                            setTimeout(function () {
                                return r.resolve(e.clone(t));
                            }, e.delay + Math.random() * e.jitter),
                                e._client2Tcp.send(r);
                        },
                    };
                }),
                (t.startUpdate = function () {
                    var t = this;
                    setTimeout(function () {
                        return t.startUpdate();
                    }),
                        this._serverTcp.update(),
                        this._client1Tcp.update(),
                        this._client2Tcp.update();
                }),
                (t.delay = 0),
                (t.jitter = 0),
                (t._serverTcp = new st()),
                (t._client1Tcp = new st()),
                (t._client2Tcp = new st()),
                t
            );
        })(),
        ut = (function () {
            function t() {
                (this.x = 0), (this.y = 0);
            }
            return (
                n([x(c.INT)], t.prototype, "x", void 0),
                n([x(c.INT)], t.prototype, "y", void 0),
                (t = n([D("vec")], t))
            );
        })(),
        ct = (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.pos = new ut()), e;
            }
            return (
                r(e, t),
                (e.prototype.serverMove = function (t, e) {
                    (0 == t && 0 == e) || console.log(t + " : " + e),
                        (this.pos.x += t),
                        (this.pos.y += e);
                }),
                n([x(ut)], e.prototype, "pos", void 0),
                n(
                    [j(u.AUTHORITY), i(0, F(c.FLOAT)), i(1, F(c.FLOAT))],
                    e.prototype,
                    "serverMove",
                    null
                ),
                (e = n([D("trans")], e))
            );
        })(p),
        pt = (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.color = 16777215), e;
            }
            var o;
            return (
                r(e, t),
                (o = e),
                (e.prototype.changeColor = function (t) {
                    this.color = t;
                }),
                (e.prototype.bindCanvas = function (t) {
                    this._ctx = t;
                }),
                (e.prototype.renderUpdate = function () {
                    var t = this.get(ct),
                        e = this.get(o);
                    this._ctx &&
                        t &&
                        e &&
                        this.drawBall(
                            this._ctx,
                            t.pos,
                            "#" + e.color.toString(16)
                        );
                }),
                (e.prototype.drawBall = function (t, e, r) {
                    (t.fillStyle = r),
                        t.beginPath(),
                        t.arc(e.x, e.y, 26, 0, 2 * Math.PI),
                        t.fill();
                }),
                n([x(c.INT)], e.prototype, "color", void 0),
                n(
                    [j(u.AUTHORITY), i(0, F(c.INT))],
                    e.prototype,
                    "changeColor",
                    null
                ),
                (e = o = n([D("view")], e))
            );
        })(p),
        ht = (function (t) {
            function e() {
                var e = t.call(this) || this;
                return (
                    (e._input = { isLeft: !1, isRight: !1 }),
                    (e._enable = !1),
                    (e._onKeyDownDel = e.onKeyDown.bind(e)),
                    (e._onKeyUpDel = e.onKeyUp.bind(e)),
                    e
                );
            }
            return (
                r(e, t),
                (e.prototype.getEnable = function () {
                    return this._enable;
                }),
                (e.prototype.setEnable = function (t, e) {
                    this._enable != t &&
                        ((this.controlMap = e),
                        t
                            ? (window.addEventListener(
                                  "keydown",
                                  this._onKeyDownDel
                              ),
                              window.addEventListener(
                                  "keyup",
                                  this._onKeyUpDel
                              ))
                            : (window.removeEventListener(
                                  "keydown",
                                  this._onKeyDownDel
                              ),
                              window.removeEventListener(
                                  "keyup",
                                  this._onKeyUpDel
                              )),
                        (this._enable = t));
                }),
                (e.prototype.onKeyDown = function (t) {
                    var e = this.controlMap;
                    t.key === e.left
                        ? (this._input.isLeft = !0)
                        : t.key === e.right && (this._input.isRight = !0);
                }),
                (e.prototype.onKeyUp = function (t) {
                    var e = this.controlMap;
                    t.key === e.left
                        ? (this._input.isLeft = !1)
                        : t.key === e.right && (this._input.isRight = !1);
                }),
                (e.prototype.renderUpdate = function () {
                    if (this._enable) {
                        var t = this._input,
                            e = this.get(ct),
                            r = (t.isLeft ? -1 : 0) + (t.isRight ? 1 : 0);
                        e.serverMove(r * this.domain.renderTime.delta * 100, 0);
                    }
                }),
                (e = n([D("controller")], e))
            );
        })(p),
        lt = { 1: { left: "a", right: "d" }, 2: { left: "", right: "" } },
        ft = (function () {
            function t(t, e, r) {
                (this.canvas = e),
                    (this.bg = "#947A6D"),
                    (this.isPrediction = !1),
                    (this.isInterpolation = !1),
                    (this.isRollback = !1),
                    (this.lastTimeStamp = 0),
                    (this.actorArr = []),
                    (this.domain = ot.Create(t, { dataBufCtr: Z, type: r })),
                    (this.ctx = e.getContext("2d")),
                    (this.canvas.width = 950),
                    (this.canvas.height = 70),
                    (this.ctx.fillStyle = this.bg),
                    this.ctx.fillRect(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height
                    ),
                    (this.myLoop = this.loop.bind(this)),
                    this.initScene(),
                    this.loop(0);
            }
            return (
                (t.prototype.loop = function (t) {
                    var e =
                        0 == this.lastTimeStamp ? 0 : t - this.lastTimeStamp;
                    (this.lastTimeStamp = t),
                        this.renderBg(),
                        this.domain.update(e / 1e3);
                }),
                (t.prototype.initScene = function () {
                    var t = new pt();
                    t.bindCanvas(this.ctx);
                    var e = new ct();
                    (e.pos.x = 30), (e.pos.y = 35);
                    var r = new z(t, e, new ht()),
                        n = new pt();
                    n.bindCanvas(this.ctx);
                    var i = new ct();
                    (i.pos.x = 50), (i.pos.y = 35);
                    var o = new z(n, i, new ht());
                    this.domain.reg(r),
                        this.domain.reg(o),
                        t.changeColor(16243020),
                        n.changeColor(16303053),
                        this.actorArr.push(r, o);
                }),
                (t.prototype.renderBg = function () {
                    this.canvas.width = this.canvas.width;
                    var t = this.ctx;
                    (t.fillStyle = this.bg),
                        t.fillRect(0, 0, this.canvas.width, this.canvas.height);
                }),
                (t.prototype.receive = function (t) {
                    this.isPrediction || this.domain.setData(t);
                }),
                t
            );
        })(),
        dt = (function (t) {
            function e(e) {
                var r = t.call(this, "server", e, a.SERVER) || this;
                return (r.canvas = e), (r.sendAccumulator = 0), r;
            }
            return (
                r(e, t),
                (e.prototype.loop = function (e) {
                    if (
                        (t.prototype.loop.call(this, e),
                        (this.sendAccumulator += this.domain.renderTime.delta),
                        this.sendAccumulator >= 0.05)
                    ) {
                        var r = this.domain.asData();
                        at.send(r).c1(),
                            at.send(r).c2(),
                            (this.sendAccumulator = 0);
                    }
                }),
                e
            );
        })(ft),
        yt = (function (t) {
            function e(e, r) {
                var n,
                    i = t.call(this, "client" + e, r, a.CLIENT) || this;
                return (
                    (i.index = e),
                    (i.canvas = r),
                    null === (n = i.actorArr[e - 1].get(ht)) ||
                        void 0 === n ||
                        n.setEnable(!0, lt[e]),
                    i
                );
            }
            return (
                r(e, t),
                (e.prototype.loop = function (e) {
                    t.prototype.loop.call(this, e);
                    var r = this.domain.asData();
                    at.send(r).server();
                }),
                e
            );
        })(ft);
    return (
        (t.Base = ft),
        (t.Client = yt),
        (t.Controller = ht),
        (t.MockTcp = st),
        (t.Net = at),
        (t.Server = dt),
        (t.Transform = ct),
        (t.Vector = ut),
        (t.View = pt),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        t
    );
})({});
//# sourceMappingURL=bundle.js.map
