var StateSync = (function (exports) {
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
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function (d, b) {
        extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (d, b) {
                    d.__proto__ = b;
                }) ||
            function (d, b) {
                for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError(
                "Class extends value " +
                    String(b) +
                    " is not a constructor or null"
            );
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype =
            b === null
                ? Object.create(b)
                : ((__.prototype = b.prototype), new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r =
                c < 3
                    ? target
                    : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
            d;
        if (
            typeof Reflect === "object" &&
            typeof Reflect.decorate === "function"
        )
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                    r =
                        (c < 3
                            ? d(r)
                            : c > 3
                            ? d(target, key, r)
                            : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex);
        };
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    }

    function __generator(thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
                (g[Symbol.iterator] = function () {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y["return"]
                                    : op[0]
                                    ? y["throw"] ||
                                      ((t = y["return"]) && t.call(y), 0)
                                    : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (
                                !((t = _.trys),
                                (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0;
                                continue;
                            }
                            if (
                                op[0] === 3 &&
                                (!t || (op[1] > t[0] && op[1] < t[3]))
                            ) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }

    var IComp = /** @class */ (function () {
        function IComp() {}
        Object.defineProperty(IComp.prototype, "entity", {
            get: function () {
                return this._entity;
            },
            enumerable: false,
            configurable: true,
        });
        Object.defineProperty(IComp.prototype, "domain", {
            get: function () {
                return this._entity.domain;
            },
            enumerable: false,
            configurable: true,
        });
        Object.defineProperty(IComp.prototype, "$comps", {
            get: function () {
                return this._entity.$comps;
            },
            enumerable: false,
            configurable: true,
        });
        IComp.prototype.get = function (ctr) {
            return this._entity.get(ctr);
        };
        return IComp;
    })();

    var NULL_NUM = -1;
    var NULL_STR = "";
    var NONE_CONTAINER = 0;
    var RPC_MAX_UUID = (1 << 8) - 1;

    var RpcType;
    (function (RpcType) {
        RpcType[(RpcType["SERVER"] = 0)] = "SERVER";
        RpcType[(RpcType["CLIENT"] = 1)] = "CLIENT";
    })(RpcType || (RpcType = {}));
    var Role;
    (function (Role) {
        Role[(Role["AUTHORITY"] = 1)] = "AUTHORITY";
        Role[(Role["SIMULATED_PROXY"] = 2)] = "SIMULATED_PROXY";
        Role[(Role["AUTONMOUS_PROXY"] = 3)] = "AUTONMOUS_PROXY";
    })(Role || (Role = {}));
    // prettier-ignore
    var DataType;
    (function (DataType) {
        DataType[(DataType["NONE"] = 0)] = "NONE";
        DataType[(DataType["I8"] = 1)] = "I8";
        DataType[(DataType["U8"] = 2)] = "U8";
        DataType[(DataType["I16"] = 3)] = "I16";
        DataType[(DataType["U16"] = 4)] = "U16";
        DataType[(DataType["I32"] = 5)] = "I32";
        DataType[(DataType["U32"] = 6)] = "U32";
        DataType[(DataType["F32"] = 7)] = "F32";
        DataType[(DataType["F64"] = 8)] = "F64";
        DataType[(DataType["SHORT"] = 9)] = "SHORT";
        DataType[(DataType["ushort"] = 10)] = "ushort";
        DataType[(DataType["INT"] = 11)] = "INT";
        DataType[(DataType["uint"] = 12)] = "uint";
        DataType[(DataType["LONG"] = 13)] = "LONG";
        DataType[(DataType["ulong"] = 14)] = "ulong";
        DataType[(DataType["FLOAT"] = 15)] = "FLOAT";
        DataType[(DataType["DOUBLE"] = 16)] = "DOUBLE";
        DataType[(DataType["STRING"] = 17)] = "STRING";
        DataType[(DataType["BOOL"] = 18)] = "BOOL";
    })(DataType || (DataType = {}));
    var DataTypeObect = 99;
    var DataTypeVoid = 98;
    function genSchema(o) {
        if (o === void 0) {
            o = Object.create(null);
        }
        o.hash = NULL_NUM;
        o.name = NULL_STR;
        o.count = 0;
        o.props = Object.create(null);
        o.methods = Object.create(null);
        o.raw = [];
        return o;
    }
    function genMethodSchema(o) {
        if (o === void 0) {
            o = Object.create(null);
        }
        o.hash = NULL_NUM;
        o.name = NULL_STR;
        o.paramCount = 0;
        o.paramTypes = [];
        o.returnType = DataTypeVoid;
        o.type = -1;
        return o;
    }
    var SCHEME_KEY = "__schema__";
    function getOrCreateScheme(prototype) {
        if (prototype.hasOwnProperty(SCHEME_KEY)) {
            return prototype[SCHEME_KEY];
        }
        var s = genSchema();
        prototype[SCHEME_KEY] = s;
        var superCtr = Object.getPrototypeOf(prototype);
        var superSchema = superCtr[SCHEME_KEY];
        if (superSchema) {
            s.raw.push.apply(s.raw, superSchema.raw);
        }
        return s;
    }

    var ArrayMap = /** @class */ (function () {
        function ArrayMap(source) {
            this._name2indexRecord = Object.create(null);
            this._values = [];
            if (source != null) {
                this._values.length = source.length;
                for (var i = 0, len = source.length; i < len; i++) {
                    var _a = source[i],
                        key = _a[0],
                        value = _a[1];
                    this._name2indexRecord[key] = i;
                    this._values[i] = value;
                }
            }
        }
        ArrayMap.prototype.get = function (key) {
            var idx = this.getIndex(key);
            if (idx > -1) {
                return this._values[idx];
            }
            return null;
        };
        ArrayMap.prototype.getIndex = function (key) {
            var _a;
            return (_a = this._name2indexRecord[key]) !== null && _a !== void 0
                ? _a
                : -1;
        };
        ArrayMap.prototype.getByIndex = function (index) {
            return this._values[index];
        };
        ArrayMap.prototype.has = function (key) {
            var _a;
            return (
                ((_a = this._name2indexRecord[key]) !== null && _a !== void 0
                    ? _a
                    : -1) > -1
            );
        };
        ArrayMap.prototype.set = function (key, value) {
            var index = this._name2indexRecord[key];
            if (index == null) {
                index = this._values.length;
                this._name2indexRecord[key] = index;
            }
            this._values[index] = value;
            return index;
        };
        ArrayMap.prototype.delete = function (key) {
            var index = this.getIndex(key);
            if (index < 0) {
                return [null, -1];
            }
            return [this._values[index], index];
        };
        ArrayMap.prototype.clear = function () {
            this._name2indexRecord = Object.create(null);
            this._values.length = 0;
        };
        Object.defineProperty(ArrayMap.prototype, "values", {
            get: function () {
                return Array.from(this._values);
            },
            enumerable: false,
            configurable: true,
        });
        Object.defineProperty(ArrayMap.prototype, "readonlyValues", {
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true,
        });
        return ArrayMap;
    })();

    var MAX_VERSION = (1 << 30) - 1;
    function composeVersion(num, destoryed) {
        num = num % MAX_VERSION;
        return destoryed ? -num : num;
    }
    function decomposeVersion(version) {
        return [version > 0 ? version : -version, version < 0];
    }
    function asSerable(obj) {
        if (!obj) return null;
        // @ts-ignore
        return typeof obj.ser === "function" && typeof obj.deser === "function"
            ? obj
            : null;
    }
    function assert(b, errrorClass) {
        if (!b) {
            throw new errrorClass();
        }
    }
    var Deferred = /** @class */ (function () {
        function Deferred() {
            var _this = this;
            this.state = "pending";
            this.fate = "unresolved";
            this.promise = new Promise(function (resolve, reject) {
                _this._resolve = resolve;
                _this._reject = reject;
            });
            this.promise.then(
                function () {
                    return (_this.state = "fulfilled");
                },
                function () {
                    return (_this.state = "rejected");
                }
            );
        }
        Deferred.prototype.resolve = function (value) {
            if (this.fate === "resolved") {
                throw "Deferred cannot be resolved twice";
            }
            this.fate = "resolved";
            this._resolve(value);
        };
        Deferred.prototype.reject = function (reason) {
            if (this.fate === "resolved") {
                throw "Deferred cannot be resolved twice";
            }
            this.fate = "resolved";
            this._reject(reason);
        };
        Deferred.prototype.isResolved = function () {
            return this.fate === "resolved";
        };
        Deferred.prototype.isPending = function () {
            return this.state === "pending";
        };
        Deferred.prototype.isFulfilled = function () {
            return this.state === "fulfilled";
        };
        Deferred.prototype.isRejected = function () {
            return this.state === "rejected";
        };
        return Deferred;
    })();

    function createCommonjsModule(fn) {
        var module = { exports: {} };
        return fn(module, module.exports), module.exports;
    }

    /* crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */

    var crc32 = createCommonjsModule(function (module, exports) {
        (function (factory) {
            /*jshint ignore:start */
            /*eslint-disable */
            if (typeof DO_NOT_EXPORT_CRC === "undefined") {
                {
                    factory(exports);
                }
            } else {
                factory({});
            }
            /*eslint-enable */
            /*jshint ignore:end */
        })(function (CRC32) {
            CRC32.version = "1.2.0";
            /* see perf/crc32table.js */
            /*global Int32Array */
            function signed_crc_table() {
                var c = 0,
                    table = new Array(256);

                for (var n = 0; n != 256; ++n) {
                    c = n;
                    c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
                    c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
                    c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
                    c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
                    c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
                    c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
                    c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
                    c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
                    table[n] = c;
                }

                return typeof Int32Array !== "undefined"
                    ? new Int32Array(table)
                    : table;
            }

            var T = signed_crc_table();
            function crc32_bstr(bstr, seed) {
                var C = seed ^ -1,
                    L = bstr.length - 1;
                for (var i = 0; i < L; ) {
                    C = (C >>> 8) ^ T[(C ^ bstr.charCodeAt(i++)) & 0xff];
                    C = (C >>> 8) ^ T[(C ^ bstr.charCodeAt(i++)) & 0xff];
                }
                if (i === L) C = (C >>> 8) ^ T[(C ^ bstr.charCodeAt(i)) & 0xff];
                return C ^ -1;
            }

            function crc32_buf(buf, seed) {
                if (buf.length > 10000) return crc32_buf_8(buf, seed);
                var C = seed ^ -1,
                    L = buf.length - 3;
                for (var i = 0; i < L; ) {
                    C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                    C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                    C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                    C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                }
                while (i < L + 3) C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                return C ^ -1;
            }

            function crc32_buf_8(buf, seed) {
                var C = seed ^ -1,
                    L = buf.length - 7;
                for (var i = 0; i < L; ) {
                    C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                    C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                    C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                    C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                    C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                    C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                    C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                    C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                }
                while (i < L + 7) C = (C >>> 8) ^ T[(C ^ buf[i++]) & 0xff];
                return C ^ -1;
            }

            function crc32_str(str, seed) {
                var C = seed ^ -1;
                for (var i = 0, L = str.length, c, d; i < L; ) {
                    c = str.charCodeAt(i++);
                    if (c < 0x80) {
                        C = (C >>> 8) ^ T[(C ^ c) & 0xff];
                    } else if (c < 0x800) {
                        C = (C >>> 8) ^ T[(C ^ (192 | ((c >> 6) & 31))) & 0xff];
                        C = (C >>> 8) ^ T[(C ^ (128 | (c & 63))) & 0xff];
                    } else if (c >= 0xd800 && c < 0xe000) {
                        c = (c & 1023) + 64;
                        d = str.charCodeAt(i++) & 1023;
                        C = (C >>> 8) ^ T[(C ^ (240 | ((c >> 8) & 7))) & 0xff];
                        C = (C >>> 8) ^ T[(C ^ (128 | ((c >> 2) & 63))) & 0xff];
                        C =
                            (C >>> 8) ^
                            T[
                                (C ^ (128 | ((d >> 6) & 15) | ((c & 3) << 4))) &
                                    0xff
                            ];
                        C = (C >>> 8) ^ T[(C ^ (128 | (d & 63))) & 0xff];
                    } else {
                        C =
                            (C >>> 8) ^
                            T[(C ^ (224 | ((c >> 12) & 15))) & 0xff];
                        C = (C >>> 8) ^ T[(C ^ (128 | ((c >> 6) & 63))) & 0xff];
                        C = (C >>> 8) ^ T[(C ^ (128 | (c & 63))) & 0xff];
                    }
                }
                return C ^ -1;
            }
            CRC32.table = T;
            // $FlowIgnore
            CRC32.bstr = crc32_bstr;
            // $FlowIgnore
            CRC32.buf = crc32_buf;
            // $FlowIgnore
            CRC32.str = crc32_str;
        });
    });

    var hash2compName = Object.create(null);
    var compName2ctr = Object.create(null);
    var hash2RpcName = {};

    function serValue(type, value, buffer) {
        switch (type) {
            case DataType.INT:
            case DataType.I32:
                buffer.writeInt(value);
                break;
            case DataType.FLOAT:
            case DataType.F32:
                buffer.writeFloat(value);
                break;
            case DataType.DOUBLE:
            case DataType.F64:
                buffer.writeDouble(value);
                break;
            case DataType.BOOL:
                buffer.writeBoolean(value);
                break;
            case DataTypeObect:
                value.ser(buffer);
                break;
        }
    }
    function deserValue(type, buffer, ref, refCtr) {
        switch (type) {
            case DataType.INT:
            case DataType.I32:
                return buffer.readInt();
            case DataType.FLOAT:
            case DataType.F32:
                return buffer.readFloat();
            case DataType.DOUBLE:
            case DataType.F64:
                return buffer.readDouble();
            case DataType.BOOL:
                return buffer.readBoolean();
            case DataTypeObect:
                if (!ref) ref = new refCtr();
                ref.deser(buffer);
                return ref;
        }
    }
    function fixupSerableJIT(prototype) {
        var schema = prototype[SCHEME_KEY];
        fixedupSerableStateJit(prototype, schema);
        fixedupSerableRpc(prototype, schema);
    }
    function fixedupSerableStateJit(prototype, schema) {
        var serJitStr = "";
        for (var i = 0, count = schema.count; i < count; i++) {
            var prop = schema.props[i];
            var type = prop.type;
            var key = prop.propertyKey;
            if (type.container === NONE_CONTAINER) {
                switch (type.dataType) {
                    case DataType.INT:
                    case DataType.I32:
                        serJitStr += "buffer.writeInt(this." + key + ");";
                        break;
                    case DataType.FLOAT:
                    case DataType.F32:
                        serJitStr += "buffer.writeFloat(this." + key + ");";
                        break;
                    case DataType.DOUBLE:
                    case DataType.F64:
                        serJitStr += "buffer.writeDouble(this." + key + ");";
                        break;
                    case DataType.BOOL:
                        serJitStr += "buffer.writeBoolean(this." + key + ");";
                        break;
                    case DataTypeObect:
                        serJitStr += "this." + key + ".ser(buffer);";
                        break;
                }
            } else {
                serJitStr += "buffer.writeInt(this." + key + ".length);";
                var itemSerFuncStr = "";
                switch (type.dataType) {
                    case DataType.INT:
                    case DataType.I32:
                        itemSerFuncStr = "buffer.writeInt(arr[i]);";
                        break;
                    case DataType.FLOAT:
                    case DataType.F32:
                        itemSerFuncStr = "buffer.writeFloat(arr[i]);";
                        break;
                    case DataType.DOUBLE:
                    case DataType.F64:
                        itemSerFuncStr = "buffer.writeDouble(arr[i]);";
                        break;
                    case DataType.BOOL:
                        serJitStr += "buffer.writeBoolean(this." + key + ");";
                        break;
                    case DataTypeObect:
                        itemSerFuncStr = "arr[i].ser(buffer);";
                        break;
                }
                serJitStr +=
                    "\n            var arr = this." +
                    key +
                    "\n            for (let i = 0, j = arr.length; i < j; i++) {\n                " +
                    itemSerFuncStr +
                    "\n            }\n            ";
            }
        }
        prototype.ser = Function("buffer", serJitStr);
        var deserJitStr = "";
        for (var i = 0, count = schema.count; i < count; i++) {
            var prop = schema.props[i];
            var type = prop.type;
            var key = prop.propertyKey;
            if (type.container === NONE_CONTAINER) {
                switch (type.dataType) {
                    case DataType.INT:
                    case DataType.I32:
                        deserJitStr += "this." + key + "=buffer.readInt();";
                        break;
                    case DataType.FLOAT:
                    case DataType.F32:
                        deserJitStr += "this." + key + "=buffer.readFloat();";
                        break;
                    case DataType.DOUBLE:
                    case DataType.F64:
                        deserJitStr += "this." + key + "=buffer.readDouble();";
                        break;
                    case DataType.BOOL:
                        deserJitStr += "this." + key + "=buffer.readBoolean();";
                        break;
                    case DataTypeObect:
                        deserJitStr += "this." + key + ".deser(buffer);";
                        break;
                }
            } else {
                deserJitStr +=
                    "\n            if(!this." +
                    key +
                    ")this." +
                    key +
                    "=[];\n            var arr=this." +
                    key +
                    ";\n            arr.length=buffer.readInt();";
                var itemSerFuncStr = "";
                switch (type.dataType) {
                    case DataType.INT:
                    case DataType.I32:
                        itemSerFuncStr = "arr[i]=buffer.readInt();";
                        break;
                    case DataType.FLOAT:
                    case DataType.F32:
                        itemSerFuncStr = "arr[i]=buffer.readFloat();";
                        break;
                    case DataType.DOUBLE:
                    case DataType.F64:
                        itemSerFuncStr = "arr[i]=buffer.readDouble();";
                        break;
                    case DataType.BOOL:
                        deserJitStr += "arr[i]=buffer.readBoolean();";
                        break;
                    case DataTypeObect:
                        itemSerFuncStr = "arr[i].deser(buffer);";
                        break;
                }
                deserJitStr +=
                    "\n            for (let i = 0, j = arr.length; i < j; i++) {\n                " +
                    itemSerFuncStr +
                    "\n            }\n            ";
            }
        }
        prototype.deser = Function("buffer", deserJitStr);
    }
    function fixedupSerableRpc(prototype, schema) {
        var rpcNames = Object.keys(schema.methods);
        var _loop_1 = function (i, len) {
            var name_2 = rpcNames[i];
            var ms = schema.methods[name_2];
            prototype["ser" + ms.hash] = function (buffer, args) {
                for (var j = 0, len_1 = ms.paramCount; j < len_1; j++) {
                    var value = args[j];
                    serValue(ms.paramTypes[j], value, buffer);
                }
            };
            prototype["deser" + ms.hash] = function (buffer) {
                var args = new Array(ms.paramCount);
                for (var j = 0, len_2 = ms.paramCount; j < len_2; j++) {
                    args[j] = deserValue(
                        ms.paramTypes[j],
                        buffer,
                        args[j],
                        ms.paramTypes[j]
                    );
                }
                return args;
            };
            var privateName = "__" + name_2 + "__";
            prototype[privateName] = prototype[name_2];
            prototype[name_2] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var domain;
                    return __generator(this, function (_a) {
                        domain = this.domain;
                        if (domain == null) {
                            return [
                                2 /*return*/,
                                Promise.reject("Domain is not valid!"),
                            ];
                        }
                        if (this.entity.role.local == ms.type) {
                            return [
                                2 /*return*/,
                                this[privateName].apply(this, args),
                            ];
                        } else {
                            return [
                                2 /*return*/,
                                domain.readonlyInternalMsgMng.sendRpc(
                                    name_2,
                                    this,
                                    args,
                                    domain.logicTime.duration
                                ),
                            ];
                        }
                    });
                });
            };
        };
        for (var i = 0, len = rpcNames.length; i < len; i++) {
            _loop_1(i);
        }
    }

    var WhyPropertyKeyHasTheSameError = /** @class */ (function (_super) {
        __extends(WhyPropertyKeyHasTheSameError, _super);
        function WhyPropertyKeyHasTheSameError() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return WhyPropertyKeyHasTheSameError;
    })(Error);
    function sortComponentPropertyKey(a, b) {
        var akey = a.propertyKey;
        var bkey = b.propertyKey;
        if (akey == bkey) throw new WhyPropertyKeyHasTheSameError();
        return akey > bkey ? 1 : -1;
    }
    function NetSerable(name, genSerable) {
        if (genSerable === void 0) {
            genSerable = true;
        }
        return function (target) {
            var s = getOrCreateScheme(target.prototype);
            s.name = name;
            s.hash = crc32.str(name);
            hash2compName[s.hash] = s.name;
            compName2ctr[s.name] = target;
            s.count = s.raw.length;
            if (s.count > 0) {
                s.raw.sort(sortComponentPropertyKey);
                for (var paramIndex = 0; paramIndex < s.count; paramIndex++) {
                    var v = s.raw[paramIndex];
                    v.paramIndex = paramIndex;
                    s.props[paramIndex] = v;
                    s.props[v.propertyKey] = v;
                }
            }
            if (genSerable) {
                {
                    fixupSerableJIT(target.prototype);
                }
            }
        };
    }
    function NetVar(type) {
        return function (t, propertyKey) {
            var s = getOrCreateScheme(t);
            s.raw.push({
                paramIndex: -1,
                propertyKey: String(propertyKey),
                type: {
                    container: NONE_CONTAINER,
                    dataType: typeof type === "number" ? type : DataTypeObect,
                    refCtr: typeof type === "number" ? undefined : type,
                },
            });
        };
    }
    var Crc32PropertyKeyHashConflict = /** @class */ (function (_super) {
        __extends(Crc32PropertyKeyHashConflict, _super);
        function Crc32PropertyKeyHashConflict() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return Crc32PropertyKeyHashConflict;
    })(Error);
    function Rpc(type, returnType) {
        return function (t, propertyKey) {
            // gen schema
            var s = getOrCreateScheme(t);
            if (!s.methods[propertyKey]) {
                s.methods[propertyKey] = genMethodSchema();
            }
            var ms = s.methods[propertyKey];
            ms.hash = crc32.str(propertyKey);
            ms.name = propertyKey;
            ms.type = type;
            if (hash2RpcName[ms.hash] && hash2RpcName[ms.hash] != ms.name) {
                throw new Crc32PropertyKeyHashConflict();
            }
            hash2RpcName[ms.hash] = ms.name;
            if (typeof returnType === "undefined") {
                ms.returnType = DataTypeVoid;
            } else {
                ms.returnType =
                    typeof returnType === "number" ? returnType : DataTypeObect;
                ms.returnRefCtr =
                    typeof returnType === "number" ? undefined : returnType;
            }
            ms.paramCount = ms.paramTypes.length;
            for (var i = 0, len = ms.paramCount; i < len; i++) {
                if (!ms.paramTypes[i]) {
                    console.warn(
                        "[Netcode]Rpc function " +
                            propertyKey +
                            " at paramIndex(" +
                            i +
                            ") set the default type DataType.double"
                    );
                    ms.paramTypes[i] = DataType.DOUBLE;
                }
            }
        };
    }
    function RpcVar(type) {
        return function (t, propertyKey, parameterIndex) {
            var s = getOrCreateScheme(t);
            if (!s.methods[propertyKey]) {
                s.methods[propertyKey] = genMethodSchema();
            }
            var ms = s.methods[propertyKey];
            ms.paramTypes[parameterIndex] = type;
        };
    }

    var ADirty = /** @class */ (function () {
        function ADirty() {}
        ADirty.prototype.getsetDirty = function () {
            var old = this.dirty;
            this.dirty = false;
            return old;
        };
        return ADirty;
    })();
    /** @class */ (function (_super) {
        __extends(Int, _super);
        function Int(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = true;
            _this._value = 0;
            _this._value = value;
            return _this;
        }
        Object.defineProperty(Int.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (inValue) {
                if (this._value !== inValue) {
                    this._value = inValue;
                    this.dirty = true;
                }
            },
            enumerable: false,
            configurable: true,
        });
        Int.prototype.ser = function (buffer) {
            var dirty = this.getsetDirty();
            buffer.writeBoolean(dirty);
            if (dirty) {
                buffer.writeInt(this._value);
            }
        };
        Int.prototype.deser = function (buffer) {
            this.dirty = buffer.readBoolean();
            if (this.dirty) {
                this._value = buffer.readInt();
            }
        };
        __decorate([NetVar(DataType.BOOL)], Int.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.INT)], Int.prototype, "value", null);
        Int = __decorate([NetSerable("Int", false)], Int);
        return Int;
    })(ADirty);
    var Float = /** @class */ (function (_super) {
        __extends(Float, _super);
        function Float(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = true;
            _this._value = 0;
            _this._value = value;
            return _this;
        }
        Object.defineProperty(Float.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (inValue) {
                if (this._value !== inValue) {
                    this._value = inValue;
                    this.dirty = true;
                }
            },
            enumerable: false,
            configurable: true,
        });
        Float.prototype.ser = function (buffer) {
            var dirty = this.getsetDirty();
            buffer.writeBoolean(dirty);
            if (dirty) {
                buffer.writeFloat(this._value);
            }
        };
        Float.prototype.deser = function (buffer) {
            this.dirty = buffer.readBoolean();
            if (this.dirty) {
                this._value = buffer.readFloat();
            }
        };
        __decorate([NetVar(DataType.BOOL)], Float.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.FLOAT)], Float.prototype, "value", null);
        Float = __decorate([NetSerable("Float", false)], Float);
        return Float;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Long, _super);
        function Long(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = true;
            _this._value = 0;
            _this._value = value;
            return _this;
        }
        Object.defineProperty(Long.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (inValue) {
                if (this._value !== inValue) {
                    this._value = inValue;
                    this.dirty = true;
                }
            },
            enumerable: false,
            configurable: true,
        });
        Long.prototype.ser = function (buffer) {
            var dirty = this.getsetDirty();
            buffer.writeBoolean(dirty);
            if (dirty) {
                buffer.writeLong(this._value);
            }
        };
        Long.prototype.deser = function (buffer) {
            this.dirty = buffer.readBoolean();
            if (this.dirty) {
                this._value = buffer.readLong();
            }
        };
        __decorate([NetVar(DataType.BOOL)], Long.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.LONG)], Long.prototype, "value", null);
        Long = __decorate([NetSerable("Long", false)], Long);
        return Long;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Uint, _super);
        function Uint(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = true;
            _this._value = 0;
            _this._value = value;
            return _this;
        }
        Object.defineProperty(Uint.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (inValue) {
                if (this._value !== inValue) {
                    this._value = inValue;
                    this.dirty = true;
                }
            },
            enumerable: false,
            configurable: true,
        });
        Uint.prototype.ser = function (buffer) {
            var dirty = this.getsetDirty();
            buffer.writeBoolean(dirty);
            if (dirty) {
                buffer.writeUint(this._value);
            }
        };
        Uint.prototype.deser = function (buffer) {
            this.dirty = buffer.readBoolean();
            if (this.dirty) {
                this._value = buffer.readUint();
            }
        };
        __decorate([NetVar(DataType.BOOL)], Uint.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.uint)], Uint.prototype, "value", null);
        Uint = __decorate([NetSerable("Uint", false)], Uint);
        return Uint;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Double, _super);
        function Double(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = true;
            _this._value = 0;
            _this._value = value;
            return _this;
        }
        Object.defineProperty(Double.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (inValue) {
                if (this._value !== inValue) {
                    this._value = inValue;
                    this.dirty = true;
                }
            },
            enumerable: false,
            configurable: true,
        });
        Double.prototype.ser = function (buffer) {
            var dirty = this.getsetDirty();
            buffer.writeBoolean(dirty);
            if (dirty) {
                buffer.writeDouble(this._value);
            }
        };
        Double.prototype.deser = function (buffer) {
            this.dirty = buffer.readBoolean();
            if (this.dirty) {
                this._value = buffer.readDouble();
            }
        };
        __decorate([NetVar(DataType.BOOL)], Double.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.DOUBLE)], Double.prototype, "value", null);
        Double = __decorate([NetSerable("Double", false)], Double);
        return Double;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Ulong, _super);
        function Ulong(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = true;
            _this._value = 0;
            _this._value = value;
            return _this;
        }
        Object.defineProperty(Ulong.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (inValue) {
                if (this._value !== inValue) {
                    this._value = inValue;
                    this.dirty = true;
                }
            },
            enumerable: false,
            configurable: true,
        });
        Ulong.prototype.ser = function (buffer) {
            var dirty = this.getsetDirty();
            buffer.writeBoolean(dirty);
            if (dirty) {
                buffer.writeUlong(this._value);
            }
        };
        Ulong.prototype.deser = function (buffer) {
            this.dirty = buffer.readBoolean();
            if (this.dirty) {
                this._value = buffer.readUlong();
            }
        };
        __decorate([NetVar(DataType.BOOL)], Ulong.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.ulong)], Ulong.prototype, "value", null);
        Ulong = __decorate([NetSerable("Ulong", false)], Ulong);
        return Ulong;
    })(ADirty);
    var Short = /** @class */ (function (_super) {
        __extends(Short, _super);
        function Short(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = true;
            _this._value = 0;
            _this._value = value;
            return _this;
        }
        Object.defineProperty(Short.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (inValue) {
                if (this._value !== inValue) {
                    this._value = inValue;
                    this.dirty = true;
                }
            },
            enumerable: false,
            configurable: true,
        });
        Short.prototype.ser = function (buffer) {
            var dirty = this.getsetDirty();
            buffer.writeBoolean(dirty);
            if (dirty) {
                buffer.writeShort(this._value);
            }
        };
        Short.prototype.deser = function (buffer) {
            this.dirty = buffer.readBoolean();
            if (this.dirty) {
                this._value = buffer.readShort();
            }
        };
        __decorate([NetVar(DataType.BOOL)], Short.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.SHORT)], Short.prototype, "value", null);
        Short = __decorate([NetSerable("Short", false)], Short);
        return Short;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Ushort, _super);
        function Ushort(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = true;
            _this._value = 0;
            _this._value = value;
            return _this;
        }
        Object.defineProperty(Ushort.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (inValue) {
                if (this._value !== inValue) {
                    this._value = inValue;
                    this.dirty = true;
                }
            },
            enumerable: false,
            configurable: true,
        });
        Ushort.prototype.ser = function (buffer) {
            var dirty = this.getsetDirty();
            buffer.writeBoolean(dirty);
            if (dirty) {
                buffer.writeUshort(this._value);
            }
        };
        Ushort.prototype.deser = function (buffer) {
            this.dirty = buffer.readBoolean();
            if (this.dirty) {
                this._value = buffer.readUshort();
            }
        };
        __decorate([NetVar(DataType.BOOL)], Ushort.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.ushort)], Ushort.prototype, "value", null);
        Ushort = __decorate([NetSerable("Ulong", false)], Ushort);
        return Ushort;
    })(ADirty);

    var LogicTimeComp = /** @class */ (function (_super) {
        __extends(LogicTimeComp, _super);
        function LogicTimeComp() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.$delta = new Float(0);
            _this.duration = 0;
            return _this;
        }
        Object.defineProperty(LogicTimeComp.prototype, "delta", {
            get: function () {
                return this.$delta.value;
            },
            set: function (value) {
                this.$delta.value = value;
            },
            enumerable: false,
            configurable: true,
        });
        __decorate([NetVar(Float)], LogicTimeComp.prototype, "$delta", void 0);
        __decorate(
            [NetVar(DataType.DOUBLE)],
            LogicTimeComp.prototype,
            "duration",
            void 0
        );
        LogicTimeComp = __decorate([NetSerable("logic_time")], LogicTimeComp);
        return LogicTimeComp;
    })(IComp);
    var RenderTimeComp = /** @class */ (function (_super) {
        __extends(RenderTimeComp, _super);
        function RenderTimeComp() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.delta = 0;
            _this.duration = 0;
            return _this;
        }
        RenderTimeComp = __decorate(
            [NetSerable("render_time")],
            RenderTimeComp
        );
        return RenderTimeComp;
    })(IComp);

    var RoleComp = /** @class */ (function (_super) {
        __extends(RoleComp, _super);
        function RoleComp() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            //#region property
            _this.$local = new Short(Role.AUTHORITY);
            _this.$remote = new Short(Role.SIMULATED_PROXY);
            return _this;
        }
        Object.defineProperty(RoleComp.prototype, "local", {
            get: function () {
                return this.$local.value;
            },
            set: function (value) {
                this.$local.value = value;
            },
            enumerable: false,
            configurable: true,
        });
        Object.defineProperty(RoleComp.prototype, "remote", {
            get: function () {
                return this.$remote.value;
            },
            set: function (value) {
                this.$remote.value = value;
            },
            enumerable: false,
            configurable: true,
        });
        //#endregion
        //#region interface ISerable implement
        RoleComp.prototype.ser = function (buffer) {
            this.$local.ser(buffer);
            this.$remote.ser(buffer);
        };
        RoleComp.prototype.deser = function (buffer) {
            this.$remote.deser(buffer);
            this.$local.deser(buffer);
        };
        //#endregion
        RoleComp.prototype.upgrade = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (
                        this.local != Role.AUTHORITY &&
                        this.remote != Role.AUTONMOUS_PROXY
                    ) {
                        this.remote = Role.AUTONMOUS_PROXY;
                        return [2 /*return*/, true];
                    }
                    return [2 /*return*/, false];
                });
            });
        };
        RoleComp.prototype.downgrade = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (
                        this.local != Role.AUTHORITY &&
                        this.remote != Role.SIMULATED_PROXY
                    ) {
                        this.remote = Role.SIMULATED_PROXY;
                        return [2 /*return*/, true];
                    }
                    return [2 /*return*/, false];
                });
            });
        };
        __decorate([NetVar(Short)], RoleComp.prototype, "$local", void 0);
        __decorate([NetVar(Short)], RoleComp.prototype, "$remote", void 0);
        __decorate(
            [Rpc(Role.AUTHORITY, DataType.BOOL)],
            RoleComp.prototype,
            "upgrade",
            null
        );
        __decorate(
            [Rpc(Role.AUTHORITY, DataType.BOOL)],
            RoleComp.prototype,
            "downgrade",
            null
        );
        RoleComp = __decorate([NetSerable("role", false)], RoleComp);
        return RoleComp;
    })(IComp);

    var ComponentHasNotDecorated = /** @class */ (function (_super) {
        __extends(ComponentHasNotDecorated, _super);
        function ComponentHasNotDecorated() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return ComponentHasNotDecorated;
    })(Error);
    /**
     * The unit in a network.It can manager some component.
     * It include id and version, plz don't modify then if you are not undersanding!
     * It is sealed, PLZ NOT implement!!!
     * @example
     ```js
     // Must do decoration
     @NetComp
     class ViewComponent {
         @Param(DataType.bool)
         active = false
     }
     const ent = new Entity();
     ent.add(ViewComponent);
     ent.has(ViewComponent);
     ent.get(ViewComponent);
     Domain.ref(ent);
     ent.rm(ViewComponent);
     ```
     */
    var Entity = /** @class */ (function () {
        function Entity() {
            var _comps = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _comps[_i] = arguments[_i];
            }
            this._id = NULL_NUM;
            this._version = NULL_NUM;
            this.$comps = new Proxy(this, {
                get: function (target, p, receiver) {
                    return target.get(compName2ctr[String(p)]);
                },
            });
            this.role = new RoleComp();
            this._compMap = new Map();
            this._initComp(this.role);
            this._comps = _comps;
            for (var i = 0, len = this._comps.length; i < len; i++) {
                this._initComp(this._comps[i]);
            }
        }
        Object.defineProperty(Entity.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: false,
            configurable: true,
        });
        Object.defineProperty(Entity.prototype, "version", {
            get: function () {
                return this._version;
            },
            enumerable: false,
            configurable: true,
        });
        Object.defineProperty(Entity.prototype, "domain", {
            get: function () {
                return this._domain;
            },
            enumerable: false,
            configurable: true,
        });
        Object.defineProperty(Entity.prototype, "comps", {
            get: function () {
                return this._comps;
            },
            enumerable: false,
            configurable: true,
        });
        Entity.prototype._initComp = function (c) {
            var map = this._compMap;
            c["_entity"] = this;
            if (!c.__schema__ || c.__schema__.hash == NULL_NUM) {
                throw new ComponentHasNotDecorated(
                    "Component must use @NetComp"
                );
            }
            var hash = c.__schema__.hash;
            if (map.has(hash)) {
                map.set(hash, [map.get(hash), c]);
            } else {
                map.set(hash, c);
            }
        };
        Entity.prototype.toString = function () {
            return "Entity: id=" + this._id + ",version=" + this._version;
        };
        Entity.prototype.get = function (ctr) {
            var schema = ctr.prototype.__schema__;
            if (!(schema && schema.name)) {
                console.error("Componrnt must use @NetComp");
                return null;
            }
            if (!this._compMap.has(schema.hash)) return null;
            var insOrArr = this._compMap.get(schema.hash);
            if (!Array.isArray(insOrArr)) return insOrArr;
            return insOrArr[insOrArr.length - 1];
        };
        Entity.prototype.mget = function (ctr) {
            var _a;
            var schema = ctr.prototype.__schema__;
            if (!(schema && schema.name)) {
                console.error("Componrnt must use @NetComp");
                return [];
            }
            return (_a = this._compMap.get(schema.hash)) !== null &&
                _a !== void 0
                ? _a
                : [];
        };
        Entity.prototype.has = function (ctr) {
            var schema = ctr.prototype.__schema__;
            if (!(schema && schema.name)) {
                console.error("Componrnt must use @NetComp");
                return false;
            }
            return this._compMap.has(schema.hash);
        };
        Entity.prototype.indexOf = function (ins) {
            if (ins == null) return -1;
            return this._comps.indexOf(ins);
        };
        Entity.prototype._init = function () {
            for (var i = 0, len = this._comps.length; i < len; i++) {
                var c = this._comps[i];
                c.init && c.init(i);
            }
        };
        Entity.prototype._renderUpdate = function () {
            for (var i = 0, len = this._comps.length; i < len; i++) {
                var c = this._comps[i];
                c.renderUpdate && c.renderUpdate(i);
            }
        };
        Entity.prototype._logicUpdate = function () {
            for (var i = 0, len = this._comps.length; i < len; i++) {
                var c = this._comps[i];
                c.logicUpdate && c.logicUpdate(i);
            }
        };
        Entity.prototype._destroy = function () {
            for (var i = 0, len = this._comps.length; i < len; i++) {
                var c = this._comps[i];
                c.destroy && c.destroy(i);
                c["_entity"] = null;
            }
            this._comps.length = 0;
            this._compMap.clear();
        };
        Entity.Event = {
            REG_ENTITY: "reg-entity",
            UNREG_ENTITY: "unreg-entity",
        };
        return Entity;
    })();

    var MessageType;
    (function (MessageType) {
        MessageType[(MessageType["UPDATE_COMPONENT"] = 0)] = "UPDATE_COMPONENT";
        MessageType[(MessageType["RPC"] = 1)] = "RPC";
    })(MessageType || (MessageType = {}));
    var RpcCallbackUuidOutOfRange = /** @class */ (function (_super) {
        __extends(RpcCallbackUuidOutOfRange, _super);
        function RpcCallbackUuidOutOfRange() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return RpcCallbackUuidOutOfRange;
    })(Error);
    var MessageManager = /** @class */ (function () {
        function MessageManager(BufferCtr) {
            this._rpcCalls = [];
            this._rpcDeferred = new Map();
            this._uuid = 0;
            this.inoutbuffer = new BufferCtr();
            this.statebuffer = new BufferCtr();
            this.rpcbuffer = new BufferCtr();
            this.rpcCallbackBuffer = new BufferCtr();
        }
        MessageManager.prototype._getUuid = function () {
            if (this._uuid >= RPC_MAX_UUID) {
                console.warn(
                    "[MessageManager#_getUuid]UUID is great than " +
                        RPC_MAX_UUID
                );
                return 0;
            }
            return ++this._uuid;
        };
        MessageManager.prototype.startSendEntityAndComps = function () {
            this.statebuffer.reset();
        };
        MessageManager.prototype.sendEntity = function (
            entityId,
            entityVersion,
            compsLen,
            toDestroy
        ) {
            var buf = this.statebuffer;
            // entity id
            buf.writeInt(entityId);
            // entity compuse version
            buf.writeInt(composeVersion(entityVersion, toDestroy));
            // component count
            buf.writeInt(compsLen);
        };
        MessageManager.prototype.sendComp = function (compIdx, comp) {
            var buf = this.statebuffer;
            // msg type -> compoent
            // comp index
            buf.writeInt(compIdx);
            // comp hash
            buf.writeLong(comp.__schema__.hash);
            // ser comp
            comp.ser(buf);
            return true;
        };
        MessageManager.prototype.endSendEntityAndComps = function () {
            this.statebuffer.reset();
        };
        MessageManager.prototype.startRecvEntityAndComps = function () {};
        MessageManager.prototype.recvEntity = function () {
            var buf = this.statebuffer;
            if (!buf.hasNext()) return null;
            // entity id
            var entityId = buf.readInt();
            // entity compuse version
            var _a = decomposeVersion(buf.readInt()),
                entityVersion = _a[0],
                toDestory = _a[1];
            // component length
            var compCount = buf.readInt();
            return {
                entityId: entityId,
                entityVersion: entityVersion,
                destoryed: toDestory,
                compCount: compCount,
            };
        };
        MessageManager.prototype.recvCompHeader = function () {
            var buf = this.statebuffer;
            // comp index
            var compIdx = buf.readInt();
            // comp hash
            var hash = buf.readLong();
            // deser comp
            return {
                compIdx: compIdx,
                hash: hash,
            };
        };
        MessageManager.prototype.recvCompBody = function (comp) {
            var buf = this.statebuffer;
            comp.deser(buf);
        };
        MessageManager.prototype.endRecvEntityAndComps = function () {};
        // callRpc(methodName: number, component: any, ...args: any) {
        //     this._rpcCalls.push({ methodName, component, args });
        // }
        MessageManager.prototype.startSendRpc = function () {
            // this.rpcbuffer.reset();
        };
        MessageManager.prototype.sendRpc = function (
            methodName,
            component,
            params,
            timestamp
        ) {
            var uuid = this._getUuid();
            if (uuid < 0) {
                return Promise.reject(new RpcCallbackUuidOutOfRange());
            }
            var comp = component;
            var entity = comp.entity;
            var compIdx = entity.indexOf(component);
            var buf = this.rpcbuffer;
            // schema
            var s = comp.__schema__;
            // method schema
            var ms = s.methods[methodName];
            // entity id
            buf.writeInt(entity.id);
            // comp index
            buf.writeUshort(compIdx);
            // method hash
            buf.writeLong(ms.hash);
            // timestamp
            buf.writeLong(timestamp);
            // uuid
            buf.writeUint(uuid);
            // param
            component["ser" + ms.hash](buf, params);
            if (ms.returnType == DataTypeVoid) {
                return;
            } else {
                var deferred = new Deferred();
                this._rpcDeferred.set(
                    entity.id + "|" + compIdx + "|" + ms.hash + "|" + uuid,
                    {
                        deferred: deferred,
                        timestamp: timestamp,
                    }
                );
                return deferred.promise;
            }
        };
        MessageManager.prototype.endSendRpc = function () {
            this.rpcbuffer.reset();
            this._uuid = 0;
        };
        MessageManager.prototype.startRecvRpc = function () {};
        MessageManager.prototype.recvRpc = function () {
            if (!this.rpcbuffer.hasNext()) return null;
            var buf = this.rpcbuffer;
            // entity id
            var entityId = buf.readInt();
            // comp index
            var compIdx = buf.readUshort();
            // method hash
            var methodHash = buf.readLong();
            // timestamp
            var timestamp = buf.readLong();
            // uuid
            var uuid = buf.readUint();
            return {
                entityId: entityId,
                compIdx: compIdx,
                methodHash: methodHash,
                timestamp: timestamp,
                uuid: uuid,
            };
        };
        MessageManager.prototype.endRecvRpc = function () {};
        MessageManager.prototype.startSendRpcCallback = function () {};
        MessageManager.prototype.sendRpcCallback = function (info) {
            var buf = this.rpcCallbackBuffer;
            buf.writeInt(info.entityId);
            buf.writeUshort(info.compIdx);
            buf.writeLong(info.methodHash);
            buf.writeUint(info.uuid);
        };
        MessageManager.prototype.endSendRpcCallback = function () {
            this.rpcCallbackBuffer.reset();
        };
        MessageManager.prototype.startRecvRpcCallback = function () {};
        MessageManager.prototype.recvRpcCallback = function () {
            if (!this.rpcCallbackBuffer.hasNext()) return null;
            var buf = this.rpcCallbackBuffer;
            var entityId = buf.readInt();
            var compIdx = buf.readUshort();
            var methodHash = buf.readLong();
            var uuid = buf.readUint();
            return {
                entityId: entityId,
                compIdx: compIdx,
                methodHash: methodHash,
                uuid: uuid,
            };
        };
        MessageManager.prototype.endRecvRpcCallback = function () {};
        MessageManager.prototype.getRpcCallbackRecord = function (param) {
            return this._rpcDeferred.get(
                param.entityId +
                    "|" +
                    param.compIdx +
                    "|" +
                    param.methodHash +
                    "|" +
                    param.uuid
            );
        };
        return MessageManager;
    })();

    var tempTypedBuffer = {
        int: new Int32Array(1),
        uint: new Uint32Array(1),
        short: new Int16Array(1),
        ushort: new Uint16Array(1),
        long: new Int32Array(1),
        ulong: new Uint32Array(1),
        float: new Float32Array(1),
        double: new Float64Array(1),
    };
    var StringDataBufferOutOfRange = /** @class */ (function (_super) {
        __extends(StringDataBufferOutOfRange, _super);
        function StringDataBufferOutOfRange() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return StringDataBufferOutOfRange;
    })(Error);
    var StringDataBuffer = /** @class */ (function () {
        function StringDataBuffer() {
            this.writeBuffer = [];
            this.writerCursor = 0;
            this.readBuffer = [];
            this.readerCursor = 0;
            this.readerStart = 0;
            this.readerEnd = 0;
        }
        StringDataBuffer.prototype.check = function (increment) {
            if (increment === void 0) {
                increment = 0;
            }
            if (
                this.writerCursor + increment >= this.readBuffer.length &&
                this.writerCursor + increment >= this.readerEnd
            ) {
                throw new StringDataBufferOutOfRange(
                    "Cursor: (" +
                        this.writerCursor +
                        "), buffer's length: (" +
                        this.writeBuffer.length +
                        ")"
                );
            }
        };
        StringDataBuffer.prototype.reset = function () {
            this.writerCursor = 0;
            this.readerCursor = 0;
            this.readBuffer.length = 0;
            this.writeBuffer.length = 0;
        };
        StringDataBuffer.prototype.readInt = function () {
            this.check();
            var temp = tempTypedBuffer.int;
            temp[0] = this.readBuffer[this.readerCursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readUint = function () {
            this.check();
            var temp = tempTypedBuffer.uint;
            temp[0] = this.readBuffer[this.readerCursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readShort = function () {
            this.check();
            var temp = tempTypedBuffer.short;
            temp[0] = this.readBuffer[this.readerCursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readUshort = function () {
            this.check();
            var temp = tempTypedBuffer.ushort;
            temp[0] = this.readBuffer[this.readerCursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readLong = function () {
            this.check();
            var temp = tempTypedBuffer.long;
            temp[0] = this.readBuffer[this.readerCursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readUlong = function () {
            this.check();
            var temp = tempTypedBuffer.ulong;
            temp[0] = this.readBuffer[this.readerCursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readFloat = function () {
            this.check();
            var temp = tempTypedBuffer.float;
            temp[0] = this.readBuffer[this.readerCursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readDouble = function () {
            this.check();
            var temp = tempTypedBuffer.double;
            temp[0] = this.readBuffer[this.readerCursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readBoolean = function () {
            this.check();
            return Boolean(this.readBuffer[this.readerCursor++]);
        };
        StringDataBuffer.prototype.set = function (source, start, end) {
            if (start === void 0) {
                start = 0;
            }
            if (end === void 0) {
                end = -1;
            }
            this.writerCursor = 0;
            var dst = JSON.parse(source);
            var dstChecked = Array.isArray(dst) ? dst : [];
            if (end < 0) {
                end += dstChecked.length;
            }
            this.readerStart = this.readerCursor = start;
            this.readerEnd = end;
            this.readBuffer = dstChecked;
        };
        StringDataBuffer.prototype.writeInt = function (source) {
            var temp = tempTypedBuffer.int;
            temp[0] = source;
            this.writeBuffer[this.writerCursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeUint = function (source) {
            var temp = tempTypedBuffer.uint;
            temp[0] = source;
            this.writeBuffer[this.writerCursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeShort = function (source) {
            var temp = tempTypedBuffer.short;
            temp[0] = source;
            this.writeBuffer[this.writerCursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeUshort = function (source) {
            var temp = tempTypedBuffer.ushort;
            temp[0] = source;
            this.writeBuffer[this.writerCursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeLong = function (source) {
            var temp = tempTypedBuffer.long;
            temp[0] = source;
            this.writeBuffer[this.writerCursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeUlong = function (source) {
            var temp = tempTypedBuffer.ulong;
            temp[0] = source;
            this.writeBuffer[this.writerCursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeFloat = function (source) {
            var temp = tempTypedBuffer.float;
            temp[0] = source;
            this.writeBuffer[this.writerCursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeDouble = function (source) {
            var temp = tempTypedBuffer.double;
            temp[0] = source;
            this.writeBuffer[this.writerCursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeBoolean = function (source) {
            this.writeBuffer[this.writerCursor++] = source ? 1 : 0;
            return this;
        };
        StringDataBuffer.prototype.get = function () {
            this.writeBuffer.length = this.writerCursor;
            return JSON.stringify(this.writeBuffer);
        };
        StringDataBuffer.prototype.hasNext = function () {
            return (
                this.readerCursor < this.readBuffer.length &&
                this.readerCursor < this.readerEnd
            );
        };
        StringDataBuffer.prototype.append = function (other) {
            this.writeBuffer.push.apply(this.writeBuffer, other.writeBuffer);
            this.writerCursor += other.writerCursor;
            return this;
        };
        return StringDataBuffer;
    })();

    var EntityNotValidError = /** @class */ (function (_super) {
        __extends(EntityNotValidError, _super);
        function EntityNotValidError() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return EntityNotValidError;
    })(Error);
    var EntityRepeatRegisteredError = /** @class */ (function (_super) {
        __extends(EntityRepeatRegisteredError, _super);
        function EntityRepeatRegisteredError() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return EntityRepeatRegisteredError;
    })(Error);
    var EntityGroupOutOfRangeYouCanOpenAutoResize = /** @class */ (function (
        _super
    ) {
        __extends(EntityGroupOutOfRangeYouCanOpenAutoResize, _super);
        function EntityGroupOutOfRangeYouCanOpenAutoResize() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return EntityGroupOutOfRangeYouCanOpenAutoResize;
    })(Error);
    var DomainDuplicated = /** @class */ (function (_super) {
        __extends(DomainDuplicated, _super);
        function DomainDuplicated() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return DomainDuplicated;
    })(Error);
    /** @class */ (function (_super) {
        __extends(DomainLengthLimit, _super);
        function DomainLengthLimit() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return DomainLengthLimit;
    })(Error);
    var DomainCompCountNotMatch = /** @class */ (function (_super) {
        __extends(DomainCompCountNotMatch, _super);
        function DomainCompCountNotMatch() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return DomainCompCountNotMatch;
    })(Error);
    function HandleDomainDefautlValue(option) {
        if (typeof option.dataBufCtr === "undefined") {
            option.dataBufCtr = StringDataBuffer;
        }
        if (typeof option.capacity === "undefined") {
            option.capacity = 50;
        }
        if (typeof option.autoResize === "undefined") {
            option.autoResize = true;
        }
        if (typeof option.fixedTimeSec === "undefined") {
            option.fixedTimeSec = 0.2;
        }
        return option;
    }
    var Domain = /** @class */ (function () {
        //#endregion
        function Domain(name, option, uuid) {
            this.name = name;
            this.uuid = uuid;
            this._index = -1;
            this._entitiesLength = 0;
            this._entityIdCursor = 0;
            this._fixedSecAccumulator = 0;
            var requiredOption = HandleDomainDefautlValue(option);
            this._option = requiredOption;
            this._entities = new Array(requiredOption.capacity);
            this._entityVersion = new Array(requiredOption.capacity);
            this._entityVersion.fill(0);
            this._destroyEntityId = new Array();
            this._internalMsgMng = new MessageManager(
                requiredOption.dataBufCtr
            );
            this.readonlyInternalMsgMng = this._internalMsgMng;
            this.logicTime = new LogicTimeComp();
            this.renderTime = new RenderTimeComp();
            this.time = new Entity(this.logicTime, this.renderTime);
            this.logicTime.delta = this.option.fixedTimeSec;
            this.reg(this.time);
        }
        //#region static methods
        Domain.Create = function (name, option, uuid) {
            if (uuid === void 0) {
                uuid = crc32.str(name);
            }
            if (this._name2domainMap.has(name)) {
                throw new DomainDuplicated(name);
            }
            var news = new Domain(name, option, uuid);
            var domainIndex = this._name2domainMap.set(name, news);
            news._index = domainIndex;
            return news;
        };
        Domain.Get = function (name) {
            if (name === void 0) {
                name = "main";
            }
            return this._name2domainMap.get(name);
        };
        Domain.GetByEntity = function (entity) {
            var domainIndex = entity.id;
            var domain = this._name2domainMap.values[domainIndex];
            if (domain.isValid(entity)) {
                return domain;
            }
            return null;
        };
        Domain.Clear = function () {
            this._name2domainMap.clear();
        };
        Object.defineProperty(Domain.prototype, "index", {
            //#endregion
            //#region member variables
            get: function () {
                return this._index;
            },
            enumerable: false,
            configurable: true,
        });
        Object.defineProperty(Domain.prototype, "entities", {
            get: function () {
                return this._entities;
            },
            enumerable: false,
            configurable: true,
        });
        Object.defineProperty(Domain.prototype, "length", {
            get: function () {
                return this._entitiesLength;
            },
            enumerable: false,
            configurable: true,
        });
        Object.defineProperty(Domain.prototype, "option", {
            get: function () {
                return this._option;
            },
            enumerable: false,
            configurable: true,
        });
        //#region public methods
        Domain.prototype.reg = function (entity) {
            if (this.isValid(entity))
                throw new EntityRepeatRegisteredError(entity.toString());
            if (this._entityIdCursor == this._option.capacity) {
                if (this._option.autoResize) {
                    this.resize(Math.ceil(this._option.capacity * 1.5));
                } else
                    throw new EntityGroupOutOfRangeYouCanOpenAutoResize(
                        "Domain: capacity: " +
                            this._option.capacity +
                            "; " +
                            entity.toString()
                    );
            }
            var id = this._getEntityId();
            var version = this._entityVersion[id];
            this._reg(entity, id, version);
            entity["_init"]();
        };
        Domain.prototype.hasReg = function (entity) {
            return this.isValid(entity);
        };
        Domain.prototype.unregWithoutValidation = function (entity) {
            var index = entity.id;
            this._entityVersion[index]++;
            this._unreg(entity);
            this._destroyEntityId.push(entity.id);
            this._entities[index] = null;
            entity["_destroy"]();
        };
        Domain.prototype.unreg = function (entity) {
            if (!this.isValid(entity))
                throw new EntityNotValidError(entity.toString());
            this.unregWithoutValidation(entity);
        };
        Domain.prototype.get = function (id) {
            return this._entities[id];
        };
        Domain.prototype.resize = function (newSize) {
            var oldSize = this._option.capacity;
            this._entities.length = newSize;
            this._entityVersion.length = newSize;
            this._entityVersion.fill(0, oldSize, newSize);
            this._option.capacity = newSize;
        };
        Domain.prototype.isValid = function (entity) {
            return (
                entity.id != NULL_NUM &&
                entity.version != NULL_NUM &&
                entity.version == this._entityVersion[entity.id]
            );
        };
        Domain.prototype.asData = function () {
            var isServer = this._option.type == RpcType.SERVER;
            var outBuf = this._internalMsgMng.inoutbuffer;
            var stateBuf = this._internalMsgMng.statebuffer;
            var rpcBuf = this._internalMsgMng.rpcbuffer;
            var rpcCbBuf = this._internalMsgMng.rpcCallbackBuffer;
            outBuf.reset();
            outBuf.writeInt(this.uuid).writeBoolean(isServer);
            if (isServer) {
                this._internalMsgMng.startSendEntityAndComps();
                this._internalMsgMng.startSendRpc();
                this._internalMsgMng.startSendRpcCallback();
                this._serEntityAndComps();
                var stateLen = stateBuf.writerCursor;
                var rpcLen = rpcBuf.writerCursor;
                var rpcCbLen = rpcCbBuf.writerCursor;
                outBuf
                    .writeUlong(stateLen)
                    .writeUlong(rpcLen)
                    .writeUlong(rpcCbLen)
                    .append(stateBuf)
                    .append(rpcBuf)
                    .append(rpcCbBuf);
                this._internalMsgMng.endSendEntityAndComps();
                this._internalMsgMng.endSendRpc();
                this._internalMsgMng.endSendRpcCallback();
            } else {
                this._internalMsgMng.startSendRpc();
                this._internalMsgMng.startSendRpcCallback();
                var rpcLen = rpcBuf.writerCursor;
                var rpcCbLen = rpcCbBuf.writerCursor;
                outBuf
                    .writeUlong(rpcLen)
                    .writeUlong(rpcCbLen)
                    .append(rpcBuf)
                    .append(rpcCbBuf);
                this._internalMsgMng.endSendRpc();
                this._internalMsgMng.endSendRpcCallback();
            }
            return outBuf.get();
        };
        Domain.prototype.setData = function (source) {
            var inBuf = this._internalMsgMng.inoutbuffer;
            var stateBuf = this._internalMsgMng.statebuffer;
            var rpcBuf = this._internalMsgMng.rpcbuffer;
            var rpcCbBuf = this._internalMsgMng.rpcCallbackBuffer;
            inBuf.set(source);
            var uuid = inBuf.readInt();
            console.log(
                "uuid: " +
                    uuid +
                    ", type: " +
                    RpcType[this.option.type] +
                    ", bufLen: " +
                    inBuf.readerEnd
            );
            var isServer = inBuf.readBoolean();
            if (isServer) {
                var stateLen = inBuf.readUlong();
                var rpcLen = inBuf.readUlong();
                var rpcCbLen = inBuf.readUlong();
                var stateStart = inBuf.readerCursor;
                var stateEnd = stateStart + stateLen;
                var rpcStart = stateEnd;
                var rpcEnd = rpcStart + rpcLen;
                var rpcCbStart = rpcEnd;
                var rpcCbEnd = rpcCbStart + rpcCbLen;
                stateBuf.set(source, stateStart, stateEnd);
                rpcBuf.set(source, rpcStart, rpcEnd);
                rpcCbBuf.set(source, rpcCbStart, rpcCbEnd);
                this._internalMsgMng.startRecvEntityAndComps();
                this._derEntityAndComps();
                this._internalMsgMng.endRecvEntityAndComps();
                this._internalMsgMng.startRecvRpc();
                this._deserRpcs();
                this._internalMsgMng.endRecvRpc();
                this._internalMsgMng.startRecvRpcCallback();
                this._deserRpcCallbacks();
                this._internalMsgMng.endRecvRpcCallback();
            } else {
                var rpcLen = inBuf.readUlong();
                var rpcCbLen = inBuf.readUlong();
                var rpcStart = inBuf.readerCursor;
                var rpcEnd = rpcStart + rpcLen;
                var rpcCbStart = rpcEnd;
                var rpcCbEnd = rpcCbStart + rpcCbLen;
                rpcBuf.set(source, rpcStart, rpcEnd);
                rpcCbBuf.set(source, rpcCbStart, rpcCbEnd);
                this._internalMsgMng.startRecvRpc();
                this._deserRpcs();
                this._internalMsgMng.endRecvRpc();
                this._internalMsgMng.startRecvRpcCallback();
                this._deserRpcCallbacks();
                this._internalMsgMng.endRecvRpcCallback();
            }
        };
        Domain.prototype.update = function (dtSec) {
            this._fixedSecAccumulator += dtSec;
            var fixedDeltaTime = this.logicTime.delta;
            while (this._fixedSecAccumulator > fixedDeltaTime) {
                this._fixedSecAccumulator -= fixedDeltaTime;
                this.logicTime.duration += fixedDeltaTime;
                for (var i = 0, len = this._entitiesLength; i < len; i++) {
                    var ent = this._entities[i];
                    if (!ent) continue;
                    if (
                        ent.role.local === Role.AUTHORITY ||
                        ent.role.local === Role.AUTONMOUS_PROXY
                    ) {
                        ent["_logicUpdate"]();
                    }
                }
            }
            this.renderTime.delta = dtSec;
            this.renderTime.duration += dtSec;
            for (var i = 0, len = this._entitiesLength; i < len; i++) {
                var ent = this._entities[i];
                if (!ent) continue;
                ent["_renderUpdate"]();
            }
        };
        //#endregion
        //#region protected methods
        Domain.prototype._reg = function (entity, id, version) {
            entity["_id"] = id;
            entity["_version"] = version;
            entity["_domain"] = this;
            var index = entity.id;
            this._entities[index] = entity;
            if (index >= this._entitiesLength) {
                this._entitiesLength = index + 1;
            }
        };
        Domain.prototype._unreg = function (entity) {
            entity["_id"] = NULL_NUM;
            entity["_version"] = NULL_NUM;
            entity["_domain"] = undefined;
        };
        Domain.prototype._serEntityAndComps = function () {
            for (var i = 0, len = this._entitiesLength; i < len; i++) {
                var ent = this._entities[i];
                if (!ent) {
                    this._internalMsgMng.sendEntity(
                        i,
                        this._entityVersion[i],
                        0,
                        true
                    );
                    continue;
                }
                this._internalMsgMng.sendEntity(
                    ent.id,
                    ent.version,
                    ent.comps.length,
                    false
                );
                var comps = ent.comps;
                for (
                    var compIdx = 0, len_1 = comps.length;
                    compIdx < len_1;
                    compIdx++
                ) {
                    var comp = comps[compIdx];
                    var serableComp = asSerable(comp);
                    if (!serableComp) {
                        console.warn(
                            "[Domain#_ser(compIdx: " +
                                compIdx +
                                ", entity: " +
                                ent +
                                ")]comp is not Serable!"
                        );
                        continue;
                    }
                    this._internalMsgMng.sendComp(compIdx, serableComp);
                }
                ent.role.ser(this._internalMsgMng.statebuffer);
            }
        };
        Domain.prototype._derEntityAndComps = function () {
            var params;
            while ((params = this._internalMsgMng.recvEntity())) {
                var ent = this._entities[params.entityId];
                if (
                    ent &&
                    (ent.version != params.entityVersion || params.destoryed)
                ) {
                    this.unreg(ent);
                    ent = null;
                }
                if (!params.destoryed) {
                    ent = ent
                        ? this._derEntityAndCompsUnderExisted(params, ent)
                        : this._derEntityAndCompsUnderUnExsited(params);
                }
            }
        };
        Domain.prototype._derEntityAndCompsUnderExisted = function (
            params,
            entity
        ) {
            var entComps = entity.comps;
            assert(
                params.compCount == entComps.length,
                DomainCompCountNotMatch
            );
            for (var i = 0, len = params.compCount; i < len; i++) {
                var compHeaderInfo = this._internalMsgMng.recvCompHeader();
                var comp = asSerable(entComps[compHeaderInfo.compIdx]);
                if (!comp) continue;
                this._internalMsgMng.recvCompBody(comp);
            }
            entity.role.deser(this._internalMsgMng.statebuffer);
            return entity;
        };
        Domain.prototype._derEntityAndCompsUnderUnExsited = function (params) {
            var compArr = new Array(params.compCount);
            for (var i = 0, len = params.compCount; i < len; i++) {
                var compHeaderInfo = this._internalMsgMng.recvCompHeader();
                var compName = hash2compName[compHeaderInfo.hash];
                var CompCtr = compName2ctr[compName];
                var comp = new CompCtr();
                this._internalMsgMng.recvCompBody(comp);
                compArr[compHeaderInfo.compIdx] = comp;
            }
            var e = new (Entity.bind.apply(
                Entity,
                __spreadArray([void 0], compArr)
            ))();
            e.role.deser(this._internalMsgMng.statebuffer);
            this.reg(e);
            return e;
        };
        Domain.prototype._deserRpcs = function () {
            var _this = this;
            var param;
            var _loop_1 = function () {
                var ent = this_1.get(param.entityId);
                if (!ent) return "continue";
                var comp = ent.comps[param.compIdx];
                if (!comp) return "continue";
                var argus = comp["deser" + param.methodHash](
                    this_1._internalMsgMng.rpcbuffer
                );
                var methodName = hash2RpcName[param.methodHash];
                var unknown = comp[methodName].apply(comp, argus);
                var s = comp[SCHEME_KEY];
                var ms = s.methods[methodName];
                if (ms.returnType != DataTypeVoid) {
                    var w_1 = param;
                    unknown === null || unknown === void 0
                        ? void 0
                        : unknown.then(function (result) {
                              _this._internalMsgMng.sendRpcCallback(w_1);
                              serValue(
                                  ms.returnType,
                                  result,
                                  _this._internalMsgMng.rpcCallbackBuffer
                              );
                          });
                }
            };
            var this_1 = this;
            while ((param = this._internalMsgMng.recvRpc())) {
                _loop_1();
            }
        };
        Domain.prototype._deserRpcCallbacks = function () {
            var param;
            while ((param = this._internalMsgMng.recvRpcCallback())) {
                var ent = this.get(param.entityId);
                if (!ent) continue;
                var comp = ent.comps[param.compIdx];
                if (!comp) continue;
                var s = comp[SCHEME_KEY];
                var methodName = hash2RpcName[param.methodHash];
                var ms = s.methods[methodName];
                var result = void 0;
                if (ms.returnType != DataTypeVoid) {
                    result = deserValue(
                        ms.returnType,
                        this._internalMsgMng.rpcCallbackBuffer,
                        undefined,
                        ms.returnRefCtr
                    );
                }
                var callbackRecord =
                    this._internalMsgMng.getRpcCallbackRecord(param);
                if (!callbackRecord) continue;
                callbackRecord.deferred.resolve(result);
            }
        };
        Domain.prototype._getEntityId = function () {
            return this._destroyEntityId.length > 0
                ? this._destroyEntityId.unshift()
                : this._entityIdCursor++;
        };
        Domain._name2domainMap = new ArrayMap();
        return Domain;
    })();

    var Net = /** @class */ (function () {
        function Net() {}
        Net.send = function (obj) {
            var _this = this;
            var promise = new Promise(function (resolve) {
                setTimeout(
                    resolve,
                    _this.delay + Math.random() * _this.jitter,
                    obj
                );
            });
            return {
                server: function () {
                    return promise.then(function (res) {
                        _this.server.receive(res);
                    });
                },
                c1: function () {
                    return promise.then(function (res) {
                        _this.client1.receive(res);
                    });
                },
                c2: function () {
                    return promise.then(function (res) {
                        _this.client2.receive(res);
                    });
                },
            };
        };
        Net.delay = 0;
        Net.jitter = 0;
        return Net;
    })();

    var Vector = /** @class */ (function () {
        function Vector() {
            this.x = 0;
            this.y = 0;
        }
        __decorate([NetVar(DataType.INT)], Vector.prototype, "x", void 0);
        __decorate([NetVar(DataType.INT)], Vector.prototype, "y", void 0);
        Vector = __decorate([NetSerable("vec")], Vector);
        return Vector;
    })();
    var Transform = /** @class */ (function (_super) {
        __extends(Transform, _super);
        function Transform() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.pos = new Vector();
            return _this;
        }
        Transform.prototype.serverMove = function (x, y) {
            this.pos.x += x;
            this.pos.y += y;
        };
        __decorate([NetVar(Vector)], Transform.prototype, "pos", void 0);
        __decorate(
            [
                Rpc(Role.AUTHORITY),
                __param(0, RpcVar(DataType.INT)),
                __param(1, RpcVar(DataType.INT)),
            ],
            Transform.prototype,
            "serverMove",
            null
        );
        Transform = __decorate([NetSerable("trans")], Transform);
        return Transform;
    })(IComp);
    var View = /** @class */ (function (_super) {
        __extends(View, _super);
        function View() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.color = 0xffffff;
            return _this;
        }
        View_1 = View;
        View.prototype.changeColor = function (inColor) {
            this.color = inColor;
        };
        View.prototype.bindCanvas = function (ctx) {
            this._ctx = ctx;
        };
        View.prototype.renderUpdate = function () {
            var trs = this.get(Transform);
            var view = this.get(View_1);
            if (!this._ctx || !trs || !view) return;
            this.drawBall(this._ctx, trs.pos, "#" + view.color.toString(16));
        };
        View.prototype.drawBall = function (ctx, pos, color) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 26, 0, 2 * Math.PI);
            ctx.fill();
        };
        var View_1;
        __decorate([NetVar(DataType.INT)], View.prototype, "color", void 0);
        __decorate(
            [Rpc(Role.AUTHORITY), __param(0, RpcVar(DataType.INT))],
            View.prototype,
            "changeColor",
            null
        );
        View = View_1 = __decorate([NetSerable("view")], View);
        return View;
    })(IComp);
    var Controller = /** @class */ (function (_super) {
        __extends(Controller, _super);
        function Controller(controlMap) {
            var _this = _super.call(this) || this;
            _this.controlMap = controlMap;
            _this._input = { isLeft: false, isRight: false };
            window.addEventListener("keydown", _this.onKeyDown.bind(_this));
            window.addEventListener("keyup", _this.onKeyUp.bind(_this));
            return _this;
        }
        Controller.prototype.onKeyDown = function (ev) {
            var map = this.controlMap;
            if (ev.key === map.left) {
                this._input.isLeft = true;
            } else if (ev.key === map.right) {
                this._input.isRight = true;
            }
        };
        Controller.prototype.onKeyUp = function (ev) {
            var map = this.controlMap;
            if (ev.key === map.left) {
                this._input.isLeft = false;
            } else if (ev.key === map.right) {
                this._input.isRight = false;
            }
        };
        Controller.prototype.logicUpdate = function () {
            var input = this._input;
            var trans = this.get(Transform);
            var dirX = (input.isLeft ? -1 : 0) + (input.isRight ? 1 : 0);
            trans.serverMove(dirX * this.domain.logicTime.delta * 0.1, 0);
        };
        return Controller;
    })(IComp);

    var Base = /** @class */ (function () {
        function Base(name, canvas, rpcType) {
            this.canvas = canvas;
            this.bg = "#947A6D";
            this.isPrediction = false;
            this.isInterpolation = false;
            this.isRollback = false;
            this.lastTimeStamp = 0;
            this.actorArr = [];
            this.domain = Domain.Create(name, {
                dataBufCtr: StringDataBuffer,
                type: rpcType,
            });
            this.ctx = canvas.getContext("2d");
            this.canvas.width = 950;
            this.canvas.height = 70;
            this.ctx.fillStyle = this.bg;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.myLoop = this.loop.bind(this);
            this.initScene();
            this.loop(0);
        }
        Base.prototype.loop = function (timestamp) {
            requestAnimationFrame(this.myLoop);
            var dt =
                this.lastTimeStamp == 0 ? 0 : timestamp - this.lastTimeStamp;
            this.lastTimeStamp = timestamp;
            this.renderBg();
            this.domain.update(dt / 1000);
        };
        Base.prototype.initScene = function () {
            var v1 = new View();
            v1.bindCanvas(this.ctx);
            var t1 = new Transform();
            t1.pos.x = 30;
            t1.pos.y = 35;
            var c1 = new Entity(v1, t1);
            var v2 = new View();
            v2.bindCanvas(this.ctx);
            var t2 = new Transform();
            t2.pos.x = 50;
            t2.pos.y = 35;
            var c2 = new Entity(v2, t2);
            this.domain.reg(c1);
            this.domain.reg(c2);
            this.actorArr.push(c1, c2);
        };
        Base.prototype.renderBg = function () {
            this.canvas.width = this.canvas.width;
            var ctx = this.ctx;
            ctx.fillStyle = this.bg;
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        };
        Base.prototype.onKeyDown = function (ev) {};
        Base.prototype.onKeyUp = function (ev) {};
        Base.prototype.receive = function (data) {
            if (this.isPrediction) return;
            this.domain.setData(data);
        };
        return Base;
    })();
    var Server = /** @class */ (function (_super) {
        __extends(Server, _super);
        function Server(canvas) {
            var _this =
                _super.call(this, "server", canvas, RpcType.SERVER) || this;
            _this.canvas = canvas;
            return _this;
        }
        Server.prototype.loop = function (dt) {
            _super.prototype.loop.call(this, dt);
            var outData = this.domain.asData();
            Net.send(outData).c1();
            Net.send(outData).c2();
        };
        return Server;
    })(Base);
    var Client = /** @class */ (function (_super) {
        __extends(Client, _super);
        function Client(index, canvas) {
            var _this =
                _super.call(this, "client" + index, canvas, RpcType.CLIENT) ||
                this;
            _this.index = index;
            _this.canvas = canvas;
            return _this;
        }
        Client.prototype.loop = function (dt) {
            _super.prototype.loop.call(this, dt);
            var outData = this.domain.asData();
            Net.send(outData).server();
        };
        return Client;
    })(Base);

    exports.Base = Base;
    exports.Client = Client;
    exports.Controller = Controller;
    exports.Net = Net;
    exports.Server = Server;
    exports.Transform = Transform;
    exports.Vector = Vector;
    exports.View = View;

    Object.defineProperty(exports, "__esModule", { value: true });

    return exports;
})({});
