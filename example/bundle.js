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

    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }

    var NULL_NUM = -1;
    var NULL_STR = "";
    var NONE_CONTAINER = 0;

    var RpcType;
    (function (RpcType) {
        RpcType[(RpcType["SERVER"] = 0)] = "SERVER";
        RpcType[(RpcType["CLIENT"] = 1)] = "CLIENT";
    })(RpcType || (RpcType = {}));
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

    var ComponentHasNotDecorated = /** @class */ (function (_super) {
        __extends(ComponentHasNotDecorated, _super);
        function ComponentHasNotDecorated() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return ComponentHasNotDecorated;
    })(Error);
    var IComp = /** @class */ (function () {
        function IComp() {}
        Object.defineProperty(IComp.prototype, "entity", {
            get: function () {
                return this._entity;
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
            this._comps = _comps;
            var map = new Map();
            for (var i = 0, len = this._comps.length; i < len; i++) {
                var c = this._comps[i];
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
            }
            this._compMap = map;
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
        Object.defineProperty(Entity.prototype, "comps", {
            get: function () {
                return this._comps;
            },
            enumerable: false,
            configurable: true,
        });
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
        Entity.prototype._init = function (domain) {
            for (var i = 0, len = this._comps.length; i < len; i++) {
                var c = this._comps[i];
                c.init && c.init(domain, i);
            }
        };
        Entity.prototype._update = function (dt, domain) {
            for (var i = 0, len = this._comps.length; i < len; i++) {
                var c = this._comps[i];
                c.update && c.update(dt, domain, i);
            }
        };
        Entity.prototype._fixedUpdate = function (dt, domain) {
            for (var i = 0, len = this._comps.length; i < len; i++) {
                var c = this._comps[i];
                c.fixedUpdate && c.fixedUpdate(dt, domain, i);
            }
        };
        Entity.prototype._destroy = function (domain) {
            for (var i = 0, len = this._comps.length; i < len; i++) {
                var c = this._comps[i];
                c.destroy && c.destroy(domain, i);
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

    var LogicTime = /** @class */ (function (_super) {
        __extends(LogicTime, _super);
        function LogicTime() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.delta = 0;
            _this.duration = 0;
            return _this;
        }
        __decorate(
            [NetVar(DataType.FLOAT)],
            LogicTime.prototype,
            "delta",
            void 0
        );
        __decorate(
            [NetVar(DataType.DOUBLE)],
            LogicTime.prototype,
            "duration",
            void 0
        );
        LogicTime = __decorate([NetSerable("logic_time")], LogicTime);
        return LogicTime;
    })(IComp);
    var RenderTime = /** @class */ (function (_super) {
        __extends(RenderTime, _super);
        function RenderTime() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.delta = 0;
            _this.duration = 0;
            return _this;
        }
        RenderTime = __decorate([NetSerable("render_time")], RenderTime);
        return RenderTime;
    })(IComp);

    var MessageType;
    (function (MessageType) {
        MessageType[(MessageType["UPDATE_COMPONENT"] = 0)] = "UPDATE_COMPONENT";
        MessageType[(MessageType["RPC"] = 1)] = "RPC";
    })(MessageType || (MessageType = {}));
    var MessageManager = /** @class */ (function () {
        function MessageManager(inoutbuffer, statebuffer, rpcbuffer) {
            this.inoutbuffer = inoutbuffer;
            this.statebuffer = statebuffer;
            this.rpcbuffer = rpcbuffer;
            this._rpcCalls = [];
        }
        MessageManager.prototype.startSendEntityAndComps = function () {
            this.statebuffer.reset();
        };
        MessageManager.prototype.sendEntity = function (entity, toDestroy) {
            var buf = this.statebuffer;
            // entity id
            buf.writeInt(entity.id);
            // entity compuse version
            buf.writeInt(composeVersion(entity.version, toDestroy));
            // component count
            buf.writeInt(entity.comps.length);
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
                toDestory: toDestory,
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
            params
        ) {
            var comp = component;
            var entity = comp.entity;
            var buf = this.rpcbuffer;
            // schema
            var s = comp.__schema__;
            // method schema
            var ms = s.methods[methodName];
            // entity id
            buf.writeInt(entity.id);
            // comp index
            buf.writeUshort(entity.indexOf(component));
            // method hash
            buf.writeLong(ms.hash);
            // param
            component["ser" + ms.hash](buf, params);
        };
        MessageManager.prototype.endSendRpc = function () {
            this.rpcbuffer.reset();
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
            return {
                entityId: entityId,
                compIdx: compIdx,
                methodHash: methodHash,
            };
        };
        MessageManager.prototype.endRecvRpc = function () {};
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
    var DomainLengthLimit = /** @class */ (function (_super) {
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
    var DOMAIN_INDEX_BITS = 2;
    var DOMAIN_MAX_INDEX = (1 << DOMAIN_INDEX_BITS) - 1;
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
        function Domain(option) {
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
                new requiredOption.dataBufCtr(),
                new requiredOption.dataBufCtr(),
                new requiredOption.dataBufCtr()
            );
            this.readonlyInternalMsgMng = this._internalMsgMng;
            this.time = new Entity(new LogicTime(), new RenderTime());
            this.reg(this.time);
        }
        //#region static methods
        Domain.Create = function (name, option) {
            if (this._name2domainMap.has(name)) {
                throw new DomainDuplicated(name);
            }
            if (
                this._name2domainMap.readonlyValues.length >= DOMAIN_MAX_INDEX
            ) {
                throw new DomainLengthLimit();
            }
            var news = new Domain(option);
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
            var domainIndex = entity.id & DOMAIN_MAX_INDEX;
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
            entity["_init"](this);
        };
        Domain.prototype.hasReg = function (entity) {
            return this.isValid(entity);
        };
        Domain.prototype.unregWithoutValidation = function (entity) {
            var index = this._getEntityIndexById(entity.id);
            this._entityVersion[index]++;
            this._unreg(entity);
            this._destroyEntityId.push(entity.id);
            this._entities[index] = null;
            entity["_destroy"](this);
        };
        Domain.prototype.unreg = function (entity) {
            if (!this.isValid(entity))
                throw new EntityNotValidError(entity.toString());
            this.unregWithoutValidation(entity);
        };
        Domain.prototype.get = function (id) {
            var domainId = id & DOMAIN_MAX_INDEX;
            if (domainId != this._index) return null;
            return this.getWithoutCheck(id);
        };
        Domain.prototype.getWithoutCheck = function (id) {
            return this._entities[this._getEntityIndexById(id)];
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
                entity.version ==
                    this._entityVersion[this._getEntityIndexById(entity.id)]
            );
        };
        Domain.prototype.asData = function () {
            var isServer = this._option.type == RpcType.SERVER;
            var outBuf = this._internalMsgMng.inoutbuffer;
            var stateBuf = this._internalMsgMng.statebuffer;
            var rpcBuf = this._internalMsgMng.rpcbuffer;
            outBuf.reset();
            if (isServer) {
                this._internalMsgMng.startSendEntityAndComps();
                this._internalMsgMng.startSendRpc();
                this._serEntityAndComps();
                var stateLen = stateBuf.writerCursor;
                var rpcLen = rpcBuf.writerCursor;
                outBuf
                    .writeBoolean(isServer)
                    .writeUlong(stateLen)
                    .writeUlong(rpcLen)
                    .append(stateBuf)
                    .append(rpcBuf);
                this._internalMsgMng.endSendEntityAndComps();
                this._internalMsgMng.endSendRpc();
            } else {
                this._internalMsgMng.startSendRpc();
                var rpcLen = rpcBuf.writerCursor;
                outBuf.writeBoolean(isServer).writeUlong(rpcLen).append(rpcBuf);
                this._internalMsgMng.endSendRpc();
            }
            return outBuf.get();
        };
        Domain.prototype.setData = function (source) {
            var inBuf = this._internalMsgMng.inoutbuffer;
            var stateBuf = this._internalMsgMng.statebuffer;
            var rpcBuf = this._internalMsgMng.rpcbuffer;
            inBuf.set(source);
            var isServer = inBuf.readBoolean();
            if (isServer) {
                var stateLen = inBuf.readUlong();
                var rpcLen = inBuf.readUlong();
                var stateStart = inBuf.readerCursor;
                var stateEnd = stateStart + stateLen;
                var rpcStart = stateEnd;
                var rpcEnd = rpcStart + rpcLen;
                stateBuf.set(source, stateStart, stateEnd);
                rpcBuf.set(source, rpcStart, rpcEnd);
                this._internalMsgMng.startRecvEntityAndComps();
                this._derEntityAndComps();
                this._internalMsgMng.endRecvEntityAndComps();
                this._internalMsgMng.startRecvRpc();
                this._deserRpcs();
                this._internalMsgMng.endRecvRpc();
            } else {
                var rpcLen = inBuf.readUlong();
                var rpcStart = inBuf.readerCursor;
                var rpcEnd = rpcStart + rpcLen + 1;
                rpcBuf.set(source, rpcStart, rpcEnd);
                this._internalMsgMng.startRecvRpc();
                this._deserRpcs();
                this._internalMsgMng.endRecvRpc();
            }
        };
        Domain.prototype.update = function (dtSec) {
            this._fixedSecAccumulator += dtSec;
            while (this._fixedSecAccumulator > this.option.fixedTimeSec) {
                this._fixedSecAccumulator -= this.option.fixedTimeSec;
                for (var i = 0, len = this._entitiesLength; i < len; i++) {
                    var ent = this._entities[i];
                    if (!ent) continue;
                    ent["_fixedUpdate"](this.option.fixedTimeSec, this);
                }
            }
            for (var i = 0, len = this._entitiesLength; i < len; i++) {
                var ent = this._entities[i];
                if (!ent) continue;
                ent["_update"](dtSec, this);
            }
        };
        //#endregion
        //#region protected methods
        Domain.prototype._reg = function (entity, id, version) {
            entity["_id"] = id;
            entity["_version"] = version;
            var index = this._getEntityIndexById(entity.id);
            this._entities[index] = entity;
            if (index >= this._entitiesLength) {
                this._entitiesLength = index + 1;
            }
        };
        Domain.prototype._unreg = function (entity) {
            entity["_id"] = NULL_NUM;
            entity["_version"] = NULL_NUM;
        };
        Domain.prototype._serEntityAndComps = function () {
            for (var i = 0, len = this._entitiesLength; i < len; i++) {
                var ent = this._entities[i];
                if (!ent) continue;
                this._internalMsgMng.sendEntity(ent, false);
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
            }
        };
        Domain.prototype._derEntityAndComps = function () {
            var params;
            while ((params = this._internalMsgMng.recvEntity())) {
                var ent =
                    this._entities[this._getEntityIndexById(params.entityId)];
                if (ent && ent.version != params.entityVersion) {
                    this.unreg(ent);
                    ent = null;
                }
                ent = ent
                    ? this._derEntityAndCompsUnderExisted(params, ent)
                    : this._derEntityAndCompsUnderUnExsited(params);
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
            this.reg(e);
            return e;
        };
        Domain.prototype._deserRpcs = function () {
            var param;
            while ((param = this._internalMsgMng.recvRpc())) {
                var ent = this.getWithoutCheck(param.entityId);
                if (!ent) continue;
                var comp = ent.comps[param.compIdx];
                if (!comp) continue;
                var argus = comp["deser" + param.methodHash](
                    this._internalMsgMng.rpcbuffer
                );
                var methodName = hash2RpcName[param.methodHash];
                comp[methodName].apply(comp, argus);
            }
        };
        Domain.prototype._getEntityIndexById = function (id) {
            return id >> DOMAIN_INDEX_BITS;
        };
        Domain.prototype._getEntityId = function () {
            return this._destroyEntityId.length > 0
                ? this._destroyEntityId.unshift()
                : (this._entityIdCursor++ << DOMAIN_INDEX_BITS) + this._index;
        };
        Domain._name2domainMap = new ArrayMap();
        return Domain;
    })();

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
                    switch (ms.paramTypes[j]) {
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
                        case DataTypeObect:
                            value.ser(buffer);
                            break;
                    }
                }
            };
            prototype["deser" + ms.hash] = function (buffer) {
                var args = new Array(ms.paramCount);
                for (var j = 0, len_2 = ms.paramCount; j < len_2; j++) {
                    switch (ms.paramTypes[j]) {
                        case DataType.INT:
                        case DataType.I32:
                            args[j] = buffer.readInt();
                            break;
                        case DataType.FLOAT:
                        case DataType.F32:
                            args[j] = buffer.readFloat();
                            break;
                        case DataType.DOUBLE:
                        case DataType.F64:
                            args[j] = buffer.readDouble();
                            break;
                        case DataTypeObect:
                            args[j] = new ms.paramTypes[j]();
                            args[j].ser(buffer);
                            break;
                    }
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
                var domain = Domain.GetByEntity(this.entity);
                if (domain == null) {
                    console.warn("Domain is not valid!");
                    return;
                }
                if (domain.option.type == ms.type) {
                    this[privateName].apply(this, args);
                } else {
                    domain.readonlyInternalMsgMng.sendRpc(name_2, this, args);
                }
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
                ms.returnType = returnType;
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
    var Int = /** @class */ (function (_super) {
        __extends(Int, _super);
        function Int(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = false;
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
        Int = __decorate([NetSerable("Int")], Int);
        return Int;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Float, _super);
        function Float(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = false;
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
        Float = __decorate([NetSerable("Float")], Float);
        return Float;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Long, _super);
        function Long(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = false;
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
        Long = __decorate([NetSerable("Long")], Long);
        return Long;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Uint, _super);
        function Uint(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = false;
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
        Uint = __decorate([NetSerable("Uint")], Uint);
        return Uint;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Double, _super);
        function Double(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = false;
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
        Double = __decorate([NetSerable("Double")], Double);
        return Double;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Ulong, _super);
        function Ulong(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = false;
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
        Ulong = __decorate([NetSerable("Ulong")], Ulong);
        return Ulong;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Short, _super);
        function Short(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = false;
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
        Short = __decorate([NetSerable("Short")], Short);
        return Short;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Ushort, _super);
        function Ushort(value) {
            if (value === void 0) {
                value = 0;
            }
            var _this = _super.call(this) || this;
            _this.dirty = false;
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
        Ushort = __decorate([NetSerable("Ulong")], Ushort);
        return Ushort;
    })(ADirty);

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
                recv: function (func, context) {
                    promise.then(function (res) {
                        func.call(context, res);
                    });
                },
            };
        };
        Net.delay = 0;
        Net.jitter = 0;
        return Net;
    })();

    var Vector = /** @class */ (function (_super) {
        __extends(Vector, _super);
        function Vector() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.x = 0;
            _this.y = 0;
            return _this;
        }
        __decorate([NetVar(DataType.INT)], Vector.prototype, "x", void 0);
        __decorate([NetVar(DataType.INT)], Vector.prototype, "y", void 0);
        Vector = __decorate([NetSerable("vec")], Vector);
        return Vector;
    })(IComp);
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
                Rpc(RpcType.SERVER),
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
        View.prototype.update = function () {
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
            [Rpc(RpcType.SERVER), __param(0, RpcVar(DataType.INT))],
            View.prototype,
            "changeColor",
            null
        );
        View = View_1 = __decorate([NetSerable("view")], View);
        return View;
    })(IComp);
    var ServerTime = /** @class */ (function (_super) {
        __extends(ServerTime, _super);
        function ServerTime() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.timestamp = 0;
            _this.deltaTime = new Int();
            return _this;
        }
        __decorate(
            [NetVar(DataType.INT)],
            ServerTime.prototype,
            "timestamp",
            void 0
        );
        __decorate([NetVar(Int)], ServerTime.prototype, "deltaTime", void 0);
        ServerTime = __decorate([NetSerable("time")], ServerTime);
        return ServerTime;
    })(IComp);

    var Time = /** @class */ (function () {
        function Time() {
            this.deltaTime = 0;
            this.fixedDeltaTime = (1 / 10) * 1000;
            this.fixedTimestamp = 0;
            this.timestamp = 0;
        }
        return Time;
    })();
    var Base = /** @class */ (function () {
        function Base(name, canvas, rpcType) {
            this.canvas = canvas;
            this.bg = "#947A6D";
            this.yelloBall = 0xf7d94c;
            this.whiteBall = 0xf8c3cd;
            this.time = new Time();
            this.doInterpolating = false;
            this.isPrediction = false;
            this.isInterpolation = false;
            this.isRollback = false;
            this._preTimestamp = 0;
            this._fixedTimeAccumulator = 0;
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
            this.render();
        }
        Base.prototype.update = function () {};
        Base.prototype.fixedUpdate = function () {};
        Base.prototype.lateUpdate = function () {};
        Base.prototype.loop = function (timestamp) {
            var Time = this.time;
            if (this._preTimestamp === 0) {
                Time.deltaTime = (1 / 60) * 1000;
            } else {
                Time.deltaTime = timestamp - this._preTimestamp;
            }
            Time.timestamp += Time.deltaTime;
            this.update();
            this._preTimestamp = timestamp;
            this._fixedTimeAccumulator += Time.deltaTime;
            var count = 0;
            while (
                this._fixedTimeAccumulator >= Time.fixedDeltaTime &&
                count < 3
            ) {
                count++;
                this._fixedTimeAccumulator -= Time.fixedDeltaTime;
                Time.fixedTimestamp += Time.fixedDeltaTime;
                this.fixedUpdate();
            }
            this.render();
            this.lateUpdate();
        };
        Base.prototype.render = function () {
            requestAnimationFrame(this.myLoop);
            this.time;
            this.domain;
            this.canvas.width = this.canvas.width;
            var ctx = this.ctx;
            ctx.fillStyle = this.bg;
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            var c1 = this.c1;
            if (c1) {
                var p1 = c1.$comps.trans;
                var v1 = c1.$comps.view;
                this._drawBall(ctx, p1.pos, "#" + v1.color.toString(16));
            }
            var c2 = this.c2;
            if (c2) {
                var p2 = c2.$comps.trans;
                var v2 = c2.$comps.view;
                this._drawBall(ctx, p2.pos, "#" + v2.color.toString(16));
            }
        };
        Base.prototype._drawBall = function (ctx, pos, color) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 26, 0, 2 * Math.PI);
            ctx.fill();
        };
        Base.prototype.initScene = function () {
            var trans1 = new Transform();
            trans1.pos.y = 35;
            trans1.pos.x = 50;
            var view1 = new View();
            var ent1 = new Entity(trans1, view1);
            var trans2 = new Transform();
            trans2.pos.y = 35;
            trans2.pos.x = 30;
            var view2 = new View();
            var ent2 = new Entity(trans2, view2);
            var remote = new Entity(new ServerTime());
            this.c1 = ent1;
            this.c2 = ent2;
            this.remote = remote;
            this.domain.reg(remote);
            this.domain.reg(ent1);
            this.domain.reg(ent2);
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
            this.c1.$comps.trans;
            this.c2.$comps.trans;
        };
        Server.prototype.fixedUpdate = function () {
            var Time = this.time;
            var serverTime = this.remote.get(ServerTime);
            serverTime.timestamp = Time.fixedTimestamp;
            var c1 = Net.client1;
            var c2 = Net.client2;
            var data = this.domain.asData();
            Net.send(data).recv(c1.receive, c1);
            Net.send(data).recv(c2.receive, c2);
        };
        return Server;
    })(Base);
    var Client = /** @class */ (function (_super) {
        __extends(Client, _super);
        function Client(index, canvas, controlMap) {
            var _this =
                _super.call(this, "client" + index, canvas, RpcType.CLIENT) ||
                this;
            _this.index = index;
            _this.canvas = canvas;
            _this.controlMap = controlMap;
            _this._input = { isLeft: false, isRight: false };
            _this.mine.$comps.view.changeColor(_this.color);
            window.addEventListener("keydown", _this.onKeyDown.bind(_this));
            window.addEventListener("keyup", _this.onKeyUp.bind(_this));
            return _this;
        }
        Object.defineProperty(Client.prototype, "mine", {
            get: function () {
                return this.index == 1 ? this.c1 : this.c2;
            },
            enumerable: false,
            configurable: true,
        });
        Object.defineProperty(Client.prototype, "color", {
            get: function () {
                return this.index == 1 ? this.yelloBall : this.whiteBall;
            },
            enumerable: false,
            configurable: true,
        });
        Client.prototype.onKeyDown = function (ev) {
            var map = this.controlMap;
            if (ev.key === map.left) {
                this._input.isLeft = true;
            } else if (ev.key === map.right) {
                this._input.isRight = true;
            }
        };
        Client.prototype.onKeyUp = function (ev) {
            var map = this.controlMap;
            if (ev.key === map.left) {
                this._input.isLeft = false;
            } else if (ev.key === map.right) {
                this._input.isRight = false;
            }
        };
        Client.prototype.fixedUpdate = function () {
            var input = this._input;
            var trans = this.mine.get(Transform);
            var dirX = (input.isLeft ? -1 : 0) + (input.isRight ? 1 : 0);
            trans.serverMove(dirX * this.time.fixedDeltaTime * 0.1, 0);
            var data = this.domain.asData();
            Net.send(data).recv(Net.server.receive, Net.server);
            var serverTime = this.remote.get(ServerTime);
            this.time.timestamp =
                this.time.timestamp * 0.5 + serverTime.timestamp * 0.5;
            console.log(serverTime.timestamp - this.time.timestamp);
        };
        return Client;
    })(Base);

    exports.Base = Base;
    exports.Client = Client;
    exports.Net = Net;
    exports.Server = Server;
    exports.ServerTime = ServerTime;
    exports.Time = Time;
    exports.Transform = Transform;
    exports.Vector = Vector;
    exports.View = View;

    Object.defineProperty(exports, "__esModule", { value: true });

    return exports;
})({});
