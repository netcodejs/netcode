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

    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var NULL_NUM = -1;
    var NULL_STR = "";

    // prettier-ignore
    var DataType;
    (function (DataType) {
        DataType[(DataType["none"] = 0)] = "none";
        DataType[(DataType["i8"] = 1)] = "i8";
        DataType[(DataType["u8"] = 2)] = "u8";
        DataType[(DataType["i16"] = 3)] = "i16";
        DataType[(DataType["u16"] = 4)] = "u16";
        DataType[(DataType["i32"] = 5)] = "i32";
        DataType[(DataType["u32"] = 6)] = "u32";
        DataType[(DataType["f32"] = 7)] = "f32";
        DataType[(DataType["f64"] = 8)] = "f64";
        DataType[(DataType["short"] = 9)] = "short";
        DataType[(DataType["ushort"] = 10)] = "ushort";
        DataType[(DataType["int"] = 11)] = "int";
        DataType[(DataType["uint"] = 12)] = "uint";
        DataType[(DataType["long"] = 13)] = "long";
        DataType[(DataType["ulong"] = 14)] = "ulong";
        DataType[(DataType["float"] = 15)] = "float";
        DataType[(DataType["double"] = 16)] = "double";
        DataType[(DataType["string"] = 17)] = "string";
        DataType[(DataType["bool"] = 18)] = "bool";
    })(DataType || (DataType = {}));
    var DataTypeObect = 99;
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
    function genSchema() {
        return {
            hash: NULL_NUM,
            name: NULL_STR,
            count: 0,
            props: {},
            methods: {},
            raw: [],
        };
    }
    var hash2compName = Object.create(null);
    var compName2ctr = Object.create(null);
    function NetComp(name, genSerable) {
        if (genSerable === void 0) {
            genSerable = true;
        }
        return function (target) {
            var s = target.prototype.__schema__;
            if (!s) {
                s = target.prototype.__schema__ = genSchema();
                return;
            }
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
                    fixupSerableJIT(target);
                }
            }
        };
    }
    var NONE_CONTAINER = 0;
    function NetVar(type) {
        return function (t, propertyKey) {
            var target = t;
            if (!target.__schema__) target.__schema__ = genSchema();
            var s = target.__schema__;
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
    function fixupSerableJIT(target) {
        var serJitStr = "";
        var schema = target.prototype.__schema__;
        for (var i = 0, count = schema.count; i < count; i++) {
            var prop = schema.props[i];
            var type = prop.type;
            var key = prop.propertyKey;
            if (type.container === NONE_CONTAINER) {
                switch (type.dataType) {
                    case DataType.int:
                    case DataType.i32:
                        serJitStr += "buffer.writeInt(this." + key + ");";
                        break;
                    case DataType.float:
                    case DataType.f32:
                        serJitStr += "buffer.writeFloat(this." + key + ");";
                        break;
                    case DataType.double:
                    case DataType.f64:
                        serJitStr += "buffer.writeDouble(this." + key + ");";
                        break;
                    case DataTypeObect:
                        serJitStr += "this." + key + ".ser(buffer);";
                        break;
                }
            } else {
                serJitStr += "buffer.writeInt(this." + key + ".length);";
                var itemSerFuncStr = "";
                switch (type.dataType) {
                    case DataType.int:
                    case DataType.i32:
                        itemSerFuncStr = "buffer.writeInt(arr[i]);";
                        break;
                    case DataType.float:
                    case DataType.f32:
                        itemSerFuncStr = "buffer.writeFloat(arr[i]);";
                        break;
                    case DataType.double:
                    case DataType.f64:
                        itemSerFuncStr = "buffer.writeDouble(arr[i]);";
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
        target.prototype.ser = Function("buffer", serJitStr);
        var deserJitStr = "";
        for (var i = 0, count = schema.count; i < count; i++) {
            var prop = schema.props[i];
            var type = prop.type;
            var key = prop.propertyKey;
            if (type.container === NONE_CONTAINER) {
                switch (type.dataType) {
                    case DataType.int:
                    case DataType.i32:
                        deserJitStr += "this." + key + "=buffer.readInt();";
                        break;
                    case DataType.float:
                    case DataType.f32:
                        deserJitStr += "this." + key + "=buffer.readFloat();";
                        break;
                    case DataType.double:
                    case DataType.f64:
                        deserJitStr += "this." + key + "=buffer.readDouble();";
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
                    case DataType.int:
                    case DataType.i32:
                        itemSerFuncStr = "arr[i]=buffer.readInt();";
                        break;
                    case DataType.float:
                    case DataType.f32:
                        itemSerFuncStr = "arr[i]=buffer.readFloat();";
                        break;
                    case DataType.double:
                    case DataType.f64:
                        itemSerFuncStr = "arr[i]=buffer.readDouble();";
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
        target.prototype.deser = Function("buffer", deserJitStr);
    }

    // import { fastRemove } from "./misc";
    var ComponentHasNotDecorated = /** @class */ (function (_super) {
        __extends(ComponentHasNotDecorated, _super);
        function ComponentHasNotDecorated() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return ComponentHasNotDecorated;
    })(Error);
    var ComponentNotMatchedWhenSetIndex = /** @class */ (function (_super) {
        __extends(ComponentNotMatchedWhenSetIndex, _super);
        function ComponentNotMatchedWhenSetIndex() {
            return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return ComponentNotMatchedWhenSetIndex;
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
            this.id = NULL_NUM;
            this.version = NULL_NUM;
            this.compMap = new Map();
            this.$comps = new Proxy(this, {
                get: function (target, p, receiver) {
                    return target.get(compName2ctr[String(p)]);
                },
            });
            this._comps = [];
            Object.seal(this);
        }
        Object.defineProperty(Entity.prototype, "comps", {
            get: function () {
                return this._comps;
            },
            enumerable: false,
            configurable: true,
        });
        Entity.prototype.toString = function () {
            return "Entity: id=" + this.id + ",version=" + this.version;
        };
        Entity.prototype.add = function (ctr, index) {
            if (index === void 0) {
                index = -1;
            }
            var schema = ctr.prototype.__schema__;
            if (!(schema && schema.name)) {
                throw new ComponentHasNotDecorated(
                    "Component must use @NetComp"
                );
            }
            if (index >= 0 && this._comps[index]) {
                throw new ComponentNotMatchedWhenSetIndex();
            }
            var ins = new ctr();
            if (this.compMap.has(schema.hash)) {
                var insOrArr = this.compMap.get(schema.hash);
                if (Array.isArray(insOrArr)) {
                    insOrArr.push(ins);
                } else {
                    this.compMap.set(schema.hash, [insOrArr, ins]);
                }
            } else {
                this.compMap.set(schema.hash, ins);
            }
            if (index < 0) {
                this._comps.push(ins);
            } else {
                this._comps[index] = ins;
            }
            return ins;
        };
        Entity.prototype.addIns = function (ctr, ins, index) {
            if (index === void 0) {
                index = -1;
            }
            var schema = ctr.prototype.__schema__;
            if (!(schema && schema.name)) {
                console.error("Componrnt must use @NetComp");
                return null;
            }
            if (index >= 0 && this._comps[index]) {
                throw new ComponentNotMatchedWhenSetIndex();
            }
            if (this.compMap.has(schema.hash)) {
                var insOrArr = this.compMap.get(schema.hash);
                if (Array.isArray(insOrArr)) {
                    insOrArr.push(ins);
                } else {
                    this.compMap.set(schema.hash, [insOrArr, ins]);
                }
            } else {
                this.compMap.set(schema.hash, ins);
            }
            if (index < 0) {
                this._comps.push(ins);
            } else {
                this._comps[index] = ins;
            }
            return ins;
        };
        // rm(comp: any): boolean {
        //     const schema = comp.__schema__;
        //     if (!(schema && schema.name)) {
        //         console.error("Componrnt must use @NetComp");
        //         return false;
        //     }
        //     if (this.compMap.has(schema.hash)) {
        //         const comps = this.compMap.get(schema.hash);
        //         if (Array.isArray(comps)) {
        //             const index = comps.lastIndexOf(comp);
        //             if (index > -1) {
        //                 fastRemove(comps, index);
        //                 return true;
        //             } else {
        //                 console.warn("Cannot find the comp: ", comp);
        //                 return false;
        //             }
        //         } else if (comp === comps) {
        //             return this.compMap.delete(schema.hash);
        //         }
        //     }
        //     return false;
        // }
        // mrm<T>(ctr: { new (): T }): boolean {
        //     const schema = ctr.prototype.__schema__;
        //     if (!(schema && schema.name)) {
        //         console.error("Componrnt must use @NetComp");
        //         return false;
        //     }
        //     return this.compMap.delete(schema.hash);
        // }
        Entity.prototype.get = function (ctr) {
            var schema = ctr.prototype.__schema__;
            if (!(schema && schema.name)) {
                console.error("Componrnt must use @NetComp");
                return null;
            }
            if (!this.compMap.has(schema.hash)) return null;
            var insOrArr = this.compMap.get(schema.hash);
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
            return (_a = this.compMap.get(schema.hash)) !== null &&
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
            return this.compMap.has(schema.hash);
        };
        Entity.Event = {
            ADD_COMP: "add-comp",
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
    var MessageManager = /** @class */ (function () {
        function MessageManager(dataBuffer) {
            this.dataBuffer = dataBuffer;
        }
        MessageManager.prototype.startSend = function () {
            this.dataBuffer.reset();
        };
        MessageManager.prototype.sendComp = function (
            entityId,
            entityVersion,
            compIdx,
            comp,
            toDestory
        ) {
            if (toDestory === void 0) {
                toDestory = false;
            }
            var buf = this.dataBuffer;
            // msg type -> compoent
            // entity id
            buf.writeInt(entityId);
            // entity compuse version
            buf.writeInt(composeVersion(entityVersion, toDestory));
            // comp index
            buf.writeInt(compIdx);
            // comp hash
            buf.writeLong(comp.__schema__.hash);
            // ser comp
            comp.ser(buf);
            return true;
        };
        MessageManager.prototype.endSend = function () {
            return this.dataBuffer.get();
        };
        MessageManager.prototype.startRecv = function (source) {
            this.dataBuffer.set(source);
        };
        MessageManager.prototype.revcComp = function () {
            if (!this.dataBuffer.hasNext()) return null;
            var buf = this.dataBuffer;
            // entity id
            var entityId = buf.readInt();
            // entity compuse version
            var _a = decomposeVersion(buf.readInt()),
                entityVersion = _a[0],
                toDestory = _a[1];
            // comp index
            var compIdx = buf.readInt();
            // comp hash
            var hash = buf.readLong();
            // deser comp
            return {
                entityId: entityId,
                entityVersion: entityVersion,
                toDestory: toDestory,
                compIdx: compIdx,
                hash: hash,
            };
        };
        MessageManager.prototype.endRecv = function () {};
        return MessageManager;
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
    var Domain = /** @class */ (function () {
        function Domain(dataBufCtr, capacity, autoResize) {
            if (capacity === void 0) {
                capacity = 50;
            }
            if (autoResize === void 0) {
                autoResize = true;
            }
            this.dataBufCtr = dataBufCtr;
            this.capacity = capacity;
            this.autoResize = autoResize;
            this._entityIdCursor = 0;
            this._entities = new Array(capacity);
            this._entityVersion = new Array(capacity);
            this._entityVersion.fill(0);
            this._destroyEntityId = new Array();
            this._internalMsgMng = new MessageManager(new dataBufCtr());
        }
        Domain.Create = function (name, dataBufferType) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            if (this._domainMap[name]) {
                throw new DomainDuplicated(name);
            }
            return (this._domainMap[name] = new (Domain.bind.apply(
                Domain,
                __spreadArrays([void 0, dataBufferType], args)
            ))());
        };
        Domain.Get = function (name) {
            if (name === void 0) {
                name = "main";
            }
            return this._domainMap[name];
        };
        Domain.Clear = function () {
            this._domainMap = Object.create(null);
        };
        Object.defineProperty(Domain.prototype, "entities", {
            get: function () {
                return this._entities;
            },
            enumerable: false,
            configurable: true,
        });
        Domain.prototype.reg = function (entity) {
            if (this.isValid(entity))
                throw new EntityRepeatRegisteredError(entity.toString());
            if (this._entityIdCursor == this.capacity) {
                if (this.autoResize) {
                    this.resize(Math.ceil(this.capacity * 1.5));
                } else
                    throw new EntityGroupOutOfRangeYouCanOpenAutoResize(
                        "Domain: capacity: " +
                            this.capacity +
                            "; " +
                            entity.toString()
                    );
            }
            var id = this._getEntityId();
            var version = this._entityVersion[id];
            this._reg(entity, id, version);
        };
        Domain.prototype._reg = function (entity, id, version) {
            entity.id = id;
            entity.version = version;
            this._entities[entity.id] = entity;
        };
        Domain.prototype.unreg = function (entity) {
            if (!this.isValid(entity))
                throw new EntityNotValidError(entity.toString());
            this._entityVersion[entity.id]++;
            this._destroyEntityId.push(entity.id);
            this._entities[entity.id] = null;
        };
        Domain.prototype.get = function (id) {
            return this._entities[id];
        };
        Domain.prototype.resize = function (newSize) {
            var oldSize = this.capacity;
            this._entities.length = newSize;
            this._entityVersion.length = newSize;
            this._entityVersion.fill(0, oldSize, newSize);
            this.capacity = newSize;
        };
        Domain.prototype.isValid = function (entity) {
            return (
                entity.id != NULL_NUM &&
                entity.version != NULL_NUM &&
                entity.version == this._entityVersion[entity.id]
            );
        };
        Domain.prototype._ser = function () {
            for (var _i = 0, _a = this._entities; _i < _a.length; _i++) {
                var ent = _a[_i];
                if (!ent) continue;
                var comps = ent.comps;
                for (
                    var compIdx = 0, len = comps.length;
                    compIdx < len;
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
                    this._internalMsgMng.sendComp(
                        ent.id,
                        ent.version,
                        compIdx,
                        comp,
                        false
                    );
                }
            }
        };
        Domain.prototype._der = function () {
            var params;
            while ((params = this._internalMsgMng.revcComp())) {
                var ent = this._entities[params.entityId];
                if (
                    ent &&
                    (params.toDestory || ent.version !== params.entityVersion)
                ) {
                    this.unreg(ent);
                }
                if (!ent && !params.toDestory) {
                    ent = new Entity();
                    this._reg(ent, params.entityId, params.entityVersion);
                }
                if (!ent) continue;
                var comp = ent.comps[params.compIdx];
                if (!comp) {
                    var compName = hash2compName[params.hash];
                    if (!compName) {
                        console.warn(
                            "[Domain#_deser]Cannot find compName by hash(" +
                                params.hash +
                                ")!"
                        );
                        continue;
                    }
                    var ctr = compName2ctr[compName];
                    comp = ent.add(ctr, params.compIdx);
                }
                comp.deser(this._internalMsgMng.dataBuffer);
            }
        };
        Domain.prototype.asData = function () {
            this._internalMsgMng.startSend();
            this._ser();
            return this._internalMsgMng.endSend();
        };
        Domain.prototype.setData = function (source) {
            this._internalMsgMng.startRecv(source);
            this._der();
            this._internalMsgMng.endRecv();
        };
        Domain.prototype._getEntityId = function () {
            return this._destroyEntityId.length > 0
                ? this._destroyEntityId.unshift()
                : this._entityIdCursor++;
        };
        Domain._domainMap = Object.create(null);
        return Domain;
    })();

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
        function Int() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.dirty = false;
            _this._value = 0;
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
        __decorate([NetVar(DataType.bool)], Int.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.int)], Int.prototype, "value", null);
        Int = __decorate([NetComp("Int")], Int);
        return Int;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Float, _super);
        function Float() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.dirty = false;
            _this._value = 0;
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
        __decorate([NetVar(DataType.bool)], Float.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.float)], Float.prototype, "value", null);
        Float = __decorate([NetComp("Float")], Float);
        return Float;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Long, _super);
        function Long() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.dirty = false;
            _this._value = 0;
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
        __decorate([NetVar(DataType.bool)], Long.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.long)], Long.prototype, "value", null);
        Long = __decorate([NetComp("Long")], Long);
        return Long;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Uint, _super);
        function Uint() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.dirty = false;
            _this._value = 0;
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
        __decorate([NetVar(DataType.bool)], Uint.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.uint)], Uint.prototype, "value", null);
        Uint = __decorate([NetComp("Uint")], Uint);
        return Uint;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Double, _super);
        function Double() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.dirty = false;
            _this._value = 0;
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
        __decorate([NetVar(DataType.bool)], Double.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.double)], Double.prototype, "value", null);
        Double = __decorate([NetComp("Double")], Double);
        return Double;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Ulong, _super);
        function Ulong() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.dirty = false;
            _this._value = 0;
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
        __decorate([NetVar(DataType.bool)], Ulong.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.ulong)], Ulong.prototype, "value", null);
        Ulong = __decorate([NetComp("Ulong")], Ulong);
        return Ulong;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Short, _super);
        function Short() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.dirty = false;
            _this._value = 0;
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
        __decorate([NetVar(DataType.bool)], Short.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.short)], Short.prototype, "value", null);
        Short = __decorate([NetComp("Short")], Short);
        return Short;
    })(ADirty);
    /** @class */ (function (_super) {
        __extends(Ushort, _super);
        function Ushort() {
            var _this =
                (_super !== null && _super.apply(this, arguments)) || this;
            _this.dirty = false;
            _this._value = 0;
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
        __decorate([NetVar(DataType.bool)], Ushort.prototype, "dirty", void 0);
        __decorate([NetVar(DataType.ushort)], Ushort.prototype, "value", null);
        Ushort = __decorate([NetComp("Ulong")], Ushort);
        return Ushort;
    })(ADirty);

    var tempTypedBuffer = {
        int: new Int16Array(1),
        uint: new Uint16Array(1),
        short: new Int8Array(1),
        ushort: new Uint8Array(1),
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
            this.readBuffer = [];
            this.cursor = 0;
        }
        StringDataBuffer.prototype.check = function (increment) {
            if (increment === void 0) {
                increment = 0;
            }
            if (this.cursor + increment >= this.readBuffer.length) {
                throw new StringDataBufferOutOfRange(
                    "Cursor: (" +
                        this.cursor +
                        "), buffer's length: (" +
                        this.writeBuffer.length +
                        ")"
                );
            }
        };
        StringDataBuffer.prototype.reset = function () {
            this.cursor = 0;
        };
        StringDataBuffer.prototype.readInt = function () {
            this.check();
            var temp = tempTypedBuffer.int;
            temp[0] = this.readBuffer[this.cursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readUint = function () {
            this.check();
            var temp = tempTypedBuffer.uint;
            temp[0] = this.readBuffer[this.cursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readShort = function () {
            this.check();
            var temp = tempTypedBuffer.short;
            temp[0] = this.readBuffer[this.cursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readUshort = function () {
            this.check();
            var temp = tempTypedBuffer.ushort;
            temp[0] = this.readBuffer[this.cursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readLong = function () {
            this.check();
            var temp = tempTypedBuffer.long;
            temp[0] = this.readBuffer[this.cursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readUlong = function () {
            this.check();
            var temp = tempTypedBuffer.ulong;
            temp[0] = this.readBuffer[this.cursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readFloat = function () {
            this.check();
            var temp = tempTypedBuffer.float;
            temp[0] = this.readBuffer[this.cursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readDouble = function () {
            this.check();
            var temp = tempTypedBuffer.double;
            temp[0] = this.readBuffer[this.cursor++];
            return temp[0];
        };
        StringDataBuffer.prototype.readBoolean = function () {
            this.check();
            return Boolean(this.readBuffer[this.cursor++]);
        };
        StringDataBuffer.prototype.set = function (source) {
            this.cursor = 0;
            var dst = JSON.parse(source);
            this.readBuffer = Array.isArray(dst) ? dst : [];
        };
        StringDataBuffer.prototype.writeInt = function (source) {
            var temp = tempTypedBuffer.int;
            temp[0] = source;
            this.writeBuffer[this.cursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeUint = function (source) {
            var temp = tempTypedBuffer.uint;
            temp[0] = source;
            this.writeBuffer[this.cursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeShort = function (source) {
            var temp = tempTypedBuffer.short;
            temp[0] = source;
            this.writeBuffer[this.cursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeUshort = function (source) {
            var temp = tempTypedBuffer.ushort;
            temp[0] = source;
            this.writeBuffer[this.cursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeLong = function (source) {
            var temp = tempTypedBuffer.long;
            temp[0] = source;
            this.writeBuffer[this.cursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeUlong = function (source) {
            var temp = tempTypedBuffer.ulong;
            temp[0] = source;
            this.writeBuffer[this.cursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeFloat = function (source) {
            var temp = tempTypedBuffer.float;
            temp[0] = source;
            this.writeBuffer[this.cursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeDouble = function (source) {
            var temp = tempTypedBuffer.double;
            temp[0] = source;
            this.writeBuffer[this.cursor++] = source;
            return this;
        };
        StringDataBuffer.prototype.writeBoolean = function (source) {
            this.writeBuffer[this.cursor++] = source ? 1 : 0;
            return this;
        };
        StringDataBuffer.prototype.get = function () {
            this.writeBuffer.length = this.cursor;
            return JSON.stringify(this.writeBuffer);
        };
        StringDataBuffer.prototype.hasNext = function () {
            return this.cursor < this.readBuffer.length;
        };
        return StringDataBuffer;
    })();

    var Vector = /** @class */ (function () {
        function Vector() {
            this.x = 0;
            this.y = 0;
        }
        __decorate([NetVar(DataType.int)], Vector.prototype, "x", void 0);
        __decorate([NetVar(DataType.int)], Vector.prototype, "y", void 0);
        Vector = __decorate([NetComp("vec")], Vector);
        return Vector;
    })();
    var Transform = /** @class */ (function () {
        function Transform() {
            this.pos = new Vector();
        }
        __decorate([NetVar(Vector)], Transform.prototype, "pos", void 0);
        Transform = __decorate([NetComp("trans")], Transform);
        return Transform;
    })();
    var Base = /** @class */ (function () {
        function Base(name, canvas) {
            this.canvas = canvas;
            this.bg = "#947A6D";
            this.yelloBall = "#F7D94C";
            this.whiteBall = "#F8C3CD";
            this.domain = Domain.Create(name, StringDataBuffer);
            this.ctx = canvas.getContext("2d");
            this.canvas.width = 1000;
            this.canvas.height = 70;
            this.ctx.fillStyle = this.bg;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.myLoop = this.loop.bind(this);
            this.render(0);
        }
        Base.prototype.loop = function (time) {
            this.render(time);
        };
        Base.prototype.render = function (time) {
            requestAnimationFrame(this.myLoop);
            this.canvas.width = this.canvas.width;
            var d = this.domain;
            var ctx = this.ctx;
            ctx.fillStyle = this.bg;
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            var c1 = d.get(0);
            if (c1) {
                var p1 = c1.$comps.trans;
                ctx.fillStyle = this.whiteBall;
                ctx.beginPath();
                ctx.arc(p1.pos.x, p1.pos.y, 26, 0, 2 * Math.PI);
                ctx.fill();
            }
            var c2 = d.get(1);
            if (c2) {
                var p2 = c2.$comps.trans;
                ctx.fillStyle = this.yelloBall;
                ctx.beginPath();
                ctx.arc(p2.pos.x, p2.pos.y, 26, 0, 2 * Math.PI);
                ctx.fill();
            }
        };
        return Base;
    })();
    var Server = /** @class */ (function (_super) {
        __extends(Server, _super);
        function Server(canvas) {
            var _this = _super.call(this, "server", canvas) || this;
            _this.canvas = canvas;
            _this.c1Dir = 5;
            var client1 = new Entity();
            _this.c1 = client1;
            var t1 = client1.add(Transform);
            t1.pos.y = 35;
            t1.pos.x = 50;
            var client2 = new Entity();
            _this.c2 = client2;
            var t2 = client2.add(Transform);
            t2.pos.y = 35;
            t2.pos.x = 30;
            _this.domain.reg(client1);
            _this.domain.reg(client2);
            return _this;
        }
        Server.prototype.loop = function (time) {
            this.c1.$comps.trans.pos.x += this.c1Dir;
            if (
                this.c1.$comps.trans.pos.x > 800 ||
                this.c1.$comps.trans.pos.x < 0
            ) {
                this.c1Dir = -this.c1Dir;
            }
            _super.prototype.loop.call(this, time);
        };
        return Server;
    })(Base);
    var Client = /** @class */ (function (_super) {
        __extends(Client, _super);
        function Client(canvas) {
            var _this =
                _super.call(this, "client" + Math.random(), canvas) || this;
            _this.canvas = canvas;
            return _this;
        }
        Client.clients = [];
        return Client;
    })(Base);

    exports.Base = Base;
    exports.Client = Client;
    exports.Server = Server;
    exports.Transform = Transform;
    exports.Vector = Vector;

    Object.defineProperty(exports, "__esModule", { value: true });

    return exports;
})({});
