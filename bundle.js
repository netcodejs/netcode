var netcode = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // example/index.ts
  var example_exports = {};
  __export(example_exports, {
    Base: () => Base,
    Client: () => Client,
    Controller: () => Controller,
    MockTcp: () => MockTcp,
    Net: () => Net,
    Server: () => Server,
    Transform: () => Transform,
    Vector: () => Vector,
    View: () => View
  });

  // src/comp-interface.ts
  var IComp = class {
    get entity() {
      return this._entity;
    }
    get domain() {
      return this._entity.domain;
    }
    get $comps() {
      return this._entity.$comps;
    }
    get(ctr) {
      return this._entity.get(ctr);
    }
  };

  // src/builtin.ts
  var NULL_NUM = -1;
  var NULL_STR = "";
  var NONE_CONTAINER = 0;
  var RPC_MAX_UUID = (1 << 8) - 1;

  // src/comp-schema.ts
  var RpcType;
  (function(RpcType3) {
    RpcType3[RpcType3["SERVER"] = 0] = "SERVER";
    RpcType3[RpcType3["CLIENT"] = 1] = "CLIENT";
  })(RpcType || (RpcType = {}));
  var Role;
  (function(Role3) {
    Role3[Role3["AUTHORITY"] = 1] = "AUTHORITY";
    Role3[Role3["SIMULATED_PROXY"] = 2] = "SIMULATED_PROXY";
    Role3[Role3["AUTONMOUS_PROXY"] = 3] = "AUTONMOUS_PROXY";
  })(Role || (Role = {}));
  var DataType;
  (function(DataType2) {
    DataType2[DataType2["NONE"] = 0] = "NONE";
    DataType2[DataType2["I8"] = 1] = "I8";
    DataType2[DataType2["U8"] = 2] = "U8";
    DataType2[DataType2["I16"] = 3] = "I16";
    DataType2[DataType2["U16"] = 4] = "U16";
    DataType2[DataType2["I32"] = 5] = "I32";
    DataType2[DataType2["U32"] = 6] = "U32";
    DataType2[DataType2["F32"] = 7] = "F32";
    DataType2[DataType2["F64"] = 8] = "F64";
    DataType2[DataType2["SHORT"] = 9] = "SHORT";
    DataType2[DataType2["ushort"] = 10] = "ushort";
    DataType2[DataType2["INT"] = 11] = "INT";
    DataType2[DataType2["uint"] = 12] = "uint";
    DataType2[DataType2["LONG"] = 13] = "LONG";
    DataType2[DataType2["ulong"] = 14] = "ulong";
    DataType2[DataType2["FLOAT"] = 15] = "FLOAT";
    DataType2[DataType2["DOUBLE"] = 16] = "DOUBLE";
    DataType2[DataType2["STRING"] = 17] = "STRING";
    DataType2[DataType2["BOOL"] = 18] = "BOOL";
  })(DataType || (DataType = {}));
  var DataTypeObect = 99;
  var DataTypeVoid = 98;
  function genSchema(o = Object.create(null)) {
    o.hash = NULL_NUM;
    o.name = NULL_STR;
    o.count = 0;
    o.props = Object.create(null);
    o.methods = Object.create(null);
    o.raw = [];
    return o;
  }
  function genMethodSchema(o = Object.create(null)) {
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
    const s = genSchema();
    prototype[SCHEME_KEY] = s;
    const superCtr = Object.getPrototypeOf(prototype);
    const superSchema = superCtr[SCHEME_KEY];
    if (superSchema) {
      s.raw.push.apply(s.raw, superSchema.raw);
    }
    return s;
  }

  // src/array-map.ts
  var ArrayMap = class {
    constructor(source) {
      this._name2indexRecord = Object.create(null);
      this._values = [];
      if (source != null) {
        this._values.length = source.length;
        for (let i = 0, len = source.length; i < len; i++) {
          let [key, value] = source[i];
          this._name2indexRecord[key] = i;
          this._values[i] = value;
        }
      }
    }
    get(key) {
      const idx = this.getIndex(key);
      if (idx > -1) {
        return this._values[idx];
      }
      return null;
    }
    getIndex(key) {
      var _a;
      return (_a = this._name2indexRecord[key]) != null ? _a : -1;
    }
    getByIndex(index) {
      return this._values[index];
    }
    has(key) {
      var _a;
      return ((_a = this._name2indexRecord[key]) != null ? _a : -1) > -1;
    }
    set(key, value) {
      let index = this._name2indexRecord[key];
      if (index == null) {
        index = this._values.length;
        this._name2indexRecord[key] = index;
      }
      this._values[index] = value;
      return index;
    }
    delete(key) {
      const index = this.getIndex(key);
      if (index < 0) {
        return [null, -1];
      }
      const deleted = [this._values[index], index];
      this._values[index] = null;
      delete this._name2indexRecord[key];
      return deleted;
    }
    clear() {
      this._name2indexRecord = Object.create(null);
      this._values.length = 0;
    }
    get values() {
      return Array.from(this._values);
    }
    get readonlyValues() {
      return this._values;
    }
  };

  // src/misc.ts
  var MAX_VERSION = (1 << 30) - 1;
  function composeVersion(num, destoryed) {
    num = num % MAX_VERSION;
    return destoryed ? -num : num;
  }
  function decomposeVersion(version) {
    return [version > 0 ? version : -version, version < 0];
  }
  function asSerable(obj) {
    if (!obj)
      return null;
    return typeof obj.ser === "function" && typeof obj.deser === "function" ? obj : null;
  }
  function assert(b, errrorClass) {
    if (!b) {
      throw new errrorClass();
    }
  }
  var Deferred = class {
    get value() {
      return this._value;
    }
    constructor() {
      this.state = "pending";
      this.fate = "unresolved";
      this.promise = new Promise((resolve, reject) => {
        this._resolve = resolve;
        this._reject = reject;
      });
      this.promise.then((res) => {
        this.state = "fulfilled";
        this._value = res;
      }, () => this.state = "rejected");
    }
    resolve(value) {
      if (this.fate === "resolved") {
        throw "Deferred cannot be resolved twice";
      }
      this.fate = "resolved";
      this._resolve(value);
    }
    reject(reason) {
      if (this.fate === "resolved") {
        throw "Deferred cannot be resolved twice";
      }
      this.fate = "resolved";
      this._reject(reason);
    }
    isResolved() {
      return this.fate === "resolved";
    }
    isPending() {
      return this.state === "pending";
    }
    isFulfilled() {
      return this.state === "fulfilled";
    }
    isRejected() {
      return this.state === "rejected";
    }
  };

  // src/lib/crc-32/index.ts
  function signed_crc_table() {
    let c = 0, table = new Array(256);
    for (let n = 0; n != 256; ++n) {
      c = n;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      table[n] = c;
    }
    return typeof Int32Array !== "undefined" ? new Int32Array(table) : table;
  }
  var T = signed_crc_table();
  function str(str2, seed = 0) {
    let C = seed ^ -1;
    for (let i = 0, L = str2.length, c, d; i < L; ) {
      c = str2.charCodeAt(i++);
      if (c < 128) {
        C = C >>> 8 ^ T[(C ^ c) & 255];
      } else if (c < 2048) {
        C = C >>> 8 ^ T[(C ^ (192 | c >> 6 & 31)) & 255];
        C = C >>> 8 ^ T[(C ^ (128 | c & 63)) & 255];
      } else if (c >= 55296 && c < 57344) {
        c = (c & 1023) + 64;
        d = str2.charCodeAt(i++) & 1023;
        C = C >>> 8 ^ T[(C ^ (240 | c >> 8 & 7)) & 255];
        C = C >>> 8 ^ T[(C ^ (128 | c >> 2 & 63)) & 255];
        C = C >>> 8 ^ T[(C ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 255];
        C = C >>> 8 ^ T[(C ^ (128 | d & 63)) & 255];
      } else {
        C = C >>> 8 ^ T[(C ^ (224 | c >> 12 & 15)) & 255];
        C = C >>> 8 ^ T[(C ^ (128 | c >> 6 & 63)) & 255];
        C = C >>> 8 ^ T[(C ^ (128 | c & 63)) & 255];
      }
    }
    return C ^ -1;
  }

  // src/config.ts
  var Config = {
    JIT: typeof eval !== "undefined" && typeof Function !== "undefined"
  };

  // src/global-record.ts
  var hash2compName = Object.create(null);
  var compName2ctr = Object.create(null);
  var hash2RpcName = {};

  // src/comp-fixup.ts
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
  function genSerValueJit(type, valueStr, bufferStr) {
    switch (type) {
      case DataType.INT:
      case DataType.I32:
        return `${bufferStr}.writeInt(${valueStr});`;
      case DataType.FLOAT:
      case DataType.F32:
        return `${bufferStr}.writeFloat(${valueStr});`;
      case DataType.DOUBLE:
      case DataType.F64:
        return `${bufferStr}.writeDouble(${valueStr});`;
      case DataType.BOOL:
        return `${bufferStr}.writeBoolean(${valueStr});`;
      case DataTypeObect:
        return `${valueStr}.ser(${bufferStr});`;
      default:
        return "";
    }
  }
  function genForeachSerValueJit(type, from, to, arrStr, bufferStr) {
    let outStr = "";
    for (let i = from; i < to; i++) {
      outStr += genSerValueJit(type[i], `${arrStr}[${i}]`, bufferStr);
    }
    return outStr;
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
        if (!ref)
          ref = new refCtr();
        ref.deser(buffer);
        return ref;
    }
  }
  function genForeachDeserValueJit(type, from, to, recevierStr, bufferStr) {
    let outStr = "";
    for (let i = from; i < to; i++) {
      outStr += genDeserValueJit(type[i], bufferStr, `${recevierStr}[${i}]`);
    }
    return outStr;
  }
  function genDeserValueJit(type, bufferStr, recevierStr) {
    switch (type) {
      case DataType.INT:
      case DataType.I32:
        return `${recevierStr} = ${bufferStr}.readInt();`;
      case DataType.FLOAT:
      case DataType.F32:
        return `${recevierStr} = ${bufferStr}.readFloat();`;
      case DataType.DOUBLE:
      case DataType.F64:
        return `${recevierStr} = ${bufferStr}.readDouble();`;
      case DataType.BOOL:
        return `${recevierStr} = ${bufferStr}.readBoolean();`;
      case DataTypeObect:
        return `
${recevierStr}.deser(${bufferStr})
            `;
      default:
        return "";
    }
  }
  function fixupSerable(prototype) {
    const schema = prototype[SCHEME_KEY];
    fixedupSerableState(prototype, schema);
    fixedupSerableRpc(prototype, schema);
  }
  function fixupSerableWithoutState(prototype) {
    const schema = prototype[SCHEME_KEY];
    fixedupSerableRpc(prototype, schema);
  }
  function fixedupSerableState(prototype, schema) {
    prototype.ser = function(buffer) {
      for (let i = 0, count = schema.count; i < count; i++) {
        const prop = schema.props[i];
        const type = prop.type;
        const key = prop.propertyKey;
        const value = this[key];
        if (type.container === NONE_CONTAINER) {
          serValue(type.dataType, value, buffer);
        } else {
          buffer.writeInt(value.length);
          for (let i2 = 0, j = value.length; i2 < j; i2++) {
            serValue(type.dataType, value[i2], buffer);
          }
        }
      }
    };
    prototype.deser = function(buffer) {
      for (let i = 0, count = schema.count; i < count; i++) {
        const prop = schema.props[i];
        const type = prop.type;
        const key = prop.propertyKey;
        if (type.container === NONE_CONTAINER) {
          this[key] = deserValue(type.dataType, buffer, this[key], prop.type.refCtr);
        } else {
          if (!this[key]) {
            this[key] = [];
          }
          const arr = this[key];
          arr.length = buffer.readInt();
          for (let i2 = 0, j = arr.length; i2 < j; i2++) {
            arr[i2] = deserValue(type.dataType, buffer, arr[i2], prop.type.refCtr);
          }
        }
      }
    };
  }
  function fixedupSerableRpc(prototype, schema) {
    const rpcNames = Object.keys(schema.methods);
    for (let i = 0, len = rpcNames.length; i < len; i++) {
      const name = rpcNames[i];
      const ms = schema.methods[name];
      prototype["ser" + ms.hash] = function(buffer, args) {
        for (let j = 0, len2 = ms.paramCount; j < len2; j++) {
          const value = args[j];
          serValue(ms.paramTypes[j], value, buffer);
        }
      };
      prototype["deser" + ms.hash] = function(buffer) {
        const args = new Array(ms.paramCount);
        for (let j = 0, len2 = ms.paramCount; j < len2; j++) {
          args[j] = deserValue(ms.paramTypes[j], buffer, args[j], ms.paramTypes[j]);
        }
        return args;
      };
      const privateName = "__" + name + "__";
      prototype[privateName] = prototype[name];
      prototype[name] = function(...args) {
        if (this.entity.role.local == ms.type) {
          return this[privateName](...args);
        } else {
          const domain = this.domain;
          if (domain == null) {
            return Promise.reject("Domain is not valid!");
          }
          return domain.readonlyInternalMsgMng.sendRpc(name, this, args, domain.logicTime.duration);
        }
      };
    }
  }
  function fixupSerableJIT(prototype) {
    const schema = prototype[SCHEME_KEY];
    fixedupSerableStateJit(prototype, schema);
    fixedupSerableRpcJit(prototype, schema);
  }
  function fixupSerableJITWithoutState(prototype) {
    const schema = prototype[SCHEME_KEY];
    fixedupSerableRpcJit(prototype, schema);
  }
  function fixedupSerableStateJit(prototype, schema) {
    let serJitStr = "";
    for (let i = 0, count = schema.count; i < count; i++) {
      const prop = schema.props[i];
      const type = prop.type;
      const key = prop.propertyKey;
      if (type.container === NONE_CONTAINER) {
        switch (type.dataType) {
          case DataType.INT:
          case DataType.I32:
            serJitStr += `buffer.writeInt(this.${key});`;
            break;
          case DataType.FLOAT:
          case DataType.F32:
            serJitStr += `buffer.writeFloat(this.${key});`;
            break;
          case DataType.DOUBLE:
          case DataType.F64:
            serJitStr += `buffer.writeDouble(this.${key});`;
            break;
          case DataType.BOOL:
            serJitStr += `buffer.writeBoolean(this.${key});`;
            break;
          case DataTypeObect:
            serJitStr += `this.${key}.ser(buffer);`;
            break;
        }
      } else {
        serJitStr += `buffer.writeInt(this.${key}.length);`;
        let itemSerFuncStr = "";
        switch (type.dataType) {
          case DataType.INT:
          case DataType.I32:
            itemSerFuncStr = `buffer.writeInt(arr[i]);`;
            break;
          case DataType.FLOAT:
          case DataType.F32:
            itemSerFuncStr = `buffer.writeFloat(arr[i]);`;
            break;
          case DataType.DOUBLE:
          case DataType.F64:
            itemSerFuncStr = `buffer.writeDouble(arr[i]);`;
            break;
          case DataType.BOOL:
            serJitStr += `buffer.writeBoolean(this.${key});`;
            break;
          case DataTypeObect:
            itemSerFuncStr = `arr[i].ser(buffer);`;
            break;
        }
        serJitStr += `
            var arr = this.${key}
            for (let i = 0, j = arr.length; i < j; i++) {
                ${itemSerFuncStr}
            }
            `;
      }
    }
    prototype.ser = Function("buffer", serJitStr);
    let deserJitStr = "";
    for (let i = 0, count = schema.count; i < count; i++) {
      const prop = schema.props[i];
      const type = prop.type;
      const key = prop.propertyKey;
      if (type.container === NONE_CONTAINER) {
        switch (type.dataType) {
          case DataType.INT:
          case DataType.I32:
            deserJitStr += `this.${key}=buffer.readInt();`;
            break;
          case DataType.FLOAT:
          case DataType.F32:
            deserJitStr += `this.${key}=buffer.readFloat();`;
            break;
          case DataType.DOUBLE:
          case DataType.F64:
            deserJitStr += `this.${key}=buffer.readDouble();`;
            break;
          case DataType.BOOL:
            deserJitStr += `this.${key}=buffer.readBoolean();`;
            break;
          case DataTypeObect:
            deserJitStr += `this.${key}.deser(buffer);`;
            break;
        }
      } else {
        deserJitStr += `
            if(!this.${key})this.${key}=[];
            var arr=this.${key};
            arr.length=buffer.readInt();`;
        let itemSerFuncStr = "";
        switch (type.dataType) {
          case DataType.INT:
          case DataType.I32:
            itemSerFuncStr = `arr[i]=buffer.readInt();`;
            break;
          case DataType.FLOAT:
          case DataType.F32:
            itemSerFuncStr = `arr[i]=buffer.readFloat();`;
            break;
          case DataType.DOUBLE:
          case DataType.F64:
            itemSerFuncStr = `arr[i]=buffer.readDouble();`;
            break;
          case DataType.BOOL:
            deserJitStr += `arr[i]=buffer.readBoolean();`;
            break;
          case DataTypeObect:
            itemSerFuncStr = `arr[i].deser(buffer);`;
            break;
        }
        deserJitStr += `
            for (let i = 0, j = arr.length; i < j; i++) {
                ${itemSerFuncStr}
            }
            `;
      }
    }
    prototype.deser = Function("buffer", deserJitStr);
  }
  function fixedupSerableRpcJit(prototype, schema) {
    const rpcNames = Object.keys(schema.methods);
    for (let i = 0, len = rpcNames.length; i < len; i++) {
      const name = rpcNames[i];
      const ms = schema.methods[name];
      let serJitStr = `
${genForeachSerValueJit(ms.paramTypes, 0, ms.paramCount, "args", "buffer")}
        `;
      prototype["ser" + ms.hash] = Function("buffer", "args", serJitStr);
      let deserJitStr = `
const args = new Array(${ms.paramCount});
${genForeachDeserValueJit(ms.paramTypes, 0, ms.paramCount, "args", "buffer")}
return args;
        `;
      prototype["deser" + ms.hash] = Function("buffer", deserJitStr);
      const privateName = "__" + name + "__";
      prototype[privateName] = prototype[name];
      let jitStr = `
if (this.entity.role.local == ${ms.type}) {
    return this["${privateName}"](...args);
} else {
    const domain = this.domain;
    if (domain == null) {
        return Promise.reject("Domain is not valid!")
    }
    return domain.readonlyInternalMsgMng.sendRpc(
        "${name}",
        this,
        args,
        domain.logicTime.duration
    );
}
        `;
      prototype[name] = Function("...args", jitStr);
    }
  }

  // src/comp-decorator.ts
  var WhyPropertyKeyHasTheSameError = class extends Error {
  };
  function sortComponentPropertyKey(a, b) {
    const akey = a.propertyKey;
    const bkey = b.propertyKey;
    if (akey == bkey)
      throw new WhyPropertyKeyHasTheSameError();
    return akey > bkey ? 1 : -1;
  }
  function NetSerable(name, genSerable = true) {
    return function(target) {
      const s = getOrCreateScheme(target.prototype);
      s.name = name;
      s.hash = str(name);
      hash2compName[s.hash] = s.name;
      compName2ctr[s.name] = target;
      s.count = s.raw.length;
      if (s.count > 0) {
        s.raw.sort(sortComponentPropertyKey);
        for (let paramIndex = 0; paramIndex < s.count; paramIndex++) {
          const v = s.raw[paramIndex];
          v.paramIndex = paramIndex;
          s.props[paramIndex] = v;
          s.props[v.propertyKey] = v;
        }
      }
      if (genSerable) {
        if (Config.JIT) {
          fixupSerableJIT(target.prototype);
        } else {
          fixupSerable(target.prototype);
        }
      } else {
        if (Config.JIT) {
          fixupSerableJITWithoutState(target.prototype);
        } else {
          fixupSerableWithoutState(target.prototype);
        }
      }
    };
  }
  function NetVar(type) {
    return function(t, propertyKey) {
      const s = getOrCreateScheme(t);
      s.raw.push({
        paramIndex: -1,
        propertyKey: String(propertyKey),
        type: {
          container: NONE_CONTAINER,
          dataType: typeof type === "number" ? type : DataTypeObect,
          refCtr: typeof type === "number" ? void 0 : type
        }
      });
    };
  }
  var Crc32PropertyKeyHashConflict = class extends Error {
  };
  function Rpc(type, returnType) {
    return function(t, propertyKey) {
      const s = getOrCreateScheme(t);
      if (!s.methods[propertyKey]) {
        s.methods[propertyKey] = genMethodSchema();
      }
      const ms = s.methods[propertyKey];
      ms.hash = str(propertyKey);
      ms.name = propertyKey;
      ms.type = type;
      if (hash2RpcName[ms.hash] && hash2RpcName[ms.hash] != ms.name) {
        throw new Crc32PropertyKeyHashConflict();
      }
      hash2RpcName[ms.hash] = ms.name;
      if (typeof returnType === "undefined") {
        ms.returnType = DataTypeVoid;
      } else {
        ms.returnType = typeof returnType === "number" ? returnType : DataTypeObect;
        ms.returnRefCtr = typeof returnType === "number" ? void 0 : returnType;
      }
      ms.paramCount = ms.paramTypes.length;
      for (let i = 0, len = ms.paramCount; i < len; i++) {
        if (!ms.paramTypes[i]) {
          console.warn(`[Netcode]Rpc function ${propertyKey} at paramIndex(${i}) set the default type DataType.double`);
          ms.paramTypes[i] = DataType.DOUBLE;
        }
      }
    };
  }
  function RpcVar(type) {
    return function(t, propertyKey, parameterIndex) {
      const s = getOrCreateScheme(t);
      if (!s.methods[propertyKey]) {
        s.methods[propertyKey] = genMethodSchema();
      }
      const ms = s.methods[propertyKey];
      ms.paramTypes[parameterIndex] = type;
    };
  }

  // src/base-dirty-data.ts
  var ADirty = class {
    getsetDirty() {
      const old = this.dirty;
      this.dirty = false;
      return old;
    }
  };
  var Int = class extends ADirty {
    constructor(value = 0) {
      super();
      this.dirty = true;
      this._value = 0;
      this._value = value;
    }
    get value() {
      return this._value;
    }
    set value(inValue) {
      if (this._value !== inValue) {
        this._value = inValue;
        this.dirty = true;
      }
    }
    ser(buffer) {
      const dirty = this.getsetDirty();
      buffer.writeBoolean(dirty);
      if (dirty) {
        buffer.writeInt(this._value);
      }
    }
    deser(buffer) {
      this.dirty = buffer.readBoolean();
      if (this.dirty) {
        this._value = buffer.readInt();
      }
    }
  };
  __decorateClass([
    NetVar(DataType.BOOL)
  ], Int.prototype, "dirty", 2);
  __decorateClass([
    NetVar(DataType.INT)
  ], Int.prototype, "value", 1);
  Int = __decorateClass([
    NetSerable("Int", false)
  ], Int);
  var Float = class extends ADirty {
    constructor(value = 0) {
      super();
      this.dirty = true;
      this._value = 0;
      this._value = value;
    }
    get value() {
      return this._value;
    }
    set value(inValue) {
      if (this._value !== inValue) {
        this._value = inValue;
        this.dirty = true;
      }
    }
    ser(buffer) {
      const dirty = this.getsetDirty();
      buffer.writeBoolean(dirty);
      if (dirty) {
        buffer.writeFloat(this._value);
      }
    }
    deser(buffer) {
      this.dirty = buffer.readBoolean();
      if (this.dirty) {
        this._value = buffer.readFloat();
      }
    }
  };
  __decorateClass([
    NetVar(DataType.BOOL)
  ], Float.prototype, "dirty", 2);
  __decorateClass([
    NetVar(DataType.FLOAT)
  ], Float.prototype, "value", 1);
  Float = __decorateClass([
    NetSerable("Float", false)
  ], Float);
  var Long = class extends ADirty {
    constructor(value = 0) {
      super();
      this.dirty = true;
      this._value = 0;
      this._value = value;
    }
    get value() {
      return this._value;
    }
    set value(inValue) {
      if (this._value !== inValue) {
        this._value = inValue;
        this.dirty = true;
      }
    }
    ser(buffer) {
      const dirty = this.getsetDirty();
      buffer.writeBoolean(dirty);
      if (dirty) {
        buffer.writeLong(this._value);
      }
    }
    deser(buffer) {
      this.dirty = buffer.readBoolean();
      if (this.dirty) {
        this._value = buffer.readLong();
      }
    }
  };
  __decorateClass([
    NetVar(DataType.BOOL)
  ], Long.prototype, "dirty", 2);
  __decorateClass([
    NetVar(DataType.LONG)
  ], Long.prototype, "value", 1);
  Long = __decorateClass([
    NetSerable("Long", false)
  ], Long);
  var Uint = class extends ADirty {
    constructor(value = 0) {
      super();
      this.dirty = true;
      this._value = 0;
      this._value = value;
    }
    get value() {
      return this._value;
    }
    set value(inValue) {
      if (this._value !== inValue) {
        this._value = inValue;
        this.dirty = true;
      }
    }
    ser(buffer) {
      const dirty = this.getsetDirty();
      buffer.writeBoolean(dirty);
      if (dirty) {
        buffer.writeUint(this._value);
      }
    }
    deser(buffer) {
      this.dirty = buffer.readBoolean();
      if (this.dirty) {
        this._value = buffer.readUint();
      }
    }
  };
  __decorateClass([
    NetVar(DataType.BOOL)
  ], Uint.prototype, "dirty", 2);
  __decorateClass([
    NetVar(DataType.uint)
  ], Uint.prototype, "value", 1);
  Uint = __decorateClass([
    NetSerable("Uint", false)
  ], Uint);
  var Double = class extends ADirty {
    constructor(value = 0) {
      super();
      this.dirty = true;
      this._value = 0;
      this._value = value;
    }
    get value() {
      return this._value;
    }
    set value(inValue) {
      if (this._value !== inValue) {
        this._value = inValue;
        this.dirty = true;
      }
    }
    ser(buffer) {
      const dirty = this.getsetDirty();
      buffer.writeBoolean(dirty);
      if (dirty) {
        buffer.writeDouble(this._value);
      }
    }
    deser(buffer) {
      this.dirty = buffer.readBoolean();
      if (this.dirty) {
        this._value = buffer.readDouble();
      }
    }
  };
  __decorateClass([
    NetVar(DataType.BOOL)
  ], Double.prototype, "dirty", 2);
  __decorateClass([
    NetVar(DataType.DOUBLE)
  ], Double.prototype, "value", 1);
  Double = __decorateClass([
    NetSerable("Double", false)
  ], Double);
  var Ulong = class extends ADirty {
    constructor(value = 0) {
      super();
      this.dirty = true;
      this._value = 0;
      this._value = value;
    }
    get value() {
      return this._value;
    }
    set value(inValue) {
      if (this._value !== inValue) {
        this._value = inValue;
        this.dirty = true;
      }
    }
    ser(buffer) {
      const dirty = this.getsetDirty();
      buffer.writeBoolean(dirty);
      if (dirty) {
        buffer.writeUlong(this._value);
      }
    }
    deser(buffer) {
      this.dirty = buffer.readBoolean();
      if (this.dirty) {
        this._value = buffer.readUlong();
      }
    }
  };
  __decorateClass([
    NetVar(DataType.BOOL)
  ], Ulong.prototype, "dirty", 2);
  __decorateClass([
    NetVar(DataType.ulong)
  ], Ulong.prototype, "value", 1);
  Ulong = __decorateClass([
    NetSerable("Ulong", false)
  ], Ulong);
  var Short = class extends ADirty {
    constructor(value = 0) {
      super();
      this.dirty = true;
      this._value = 0;
      this._value = value;
    }
    get value() {
      return this._value;
    }
    set value(inValue) {
      if (this._value !== inValue) {
        this._value = inValue;
        this.dirty = true;
      }
    }
    ser(buffer) {
      const dirty = this.getsetDirty();
      buffer.writeBoolean(dirty);
      if (dirty) {
        buffer.writeShort(this._value);
      }
    }
    deser(buffer) {
      this.dirty = buffer.readBoolean();
      if (this.dirty) {
        this._value = buffer.readShort();
      }
    }
  };
  __decorateClass([
    NetVar(DataType.BOOL)
  ], Short.prototype, "dirty", 2);
  __decorateClass([
    NetVar(DataType.SHORT)
  ], Short.prototype, "value", 1);
  Short = __decorateClass([
    NetSerable("Short", false)
  ], Short);
  var Ushort = class extends ADirty {
    constructor(value = 0) {
      super();
      this.dirty = true;
      this._value = 0;
      this._value = value;
    }
    get value() {
      return this._value;
    }
    set value(inValue) {
      if (this._value !== inValue) {
        this._value = inValue;
        this.dirty = true;
      }
    }
    ser(buffer) {
      const dirty = this.getsetDirty();
      buffer.writeBoolean(dirty);
      if (dirty) {
        buffer.writeUshort(this._value);
      }
    }
    deser(buffer) {
      this.dirty = buffer.readBoolean();
      if (this.dirty) {
        this._value = buffer.readUshort();
      }
    }
  };
  __decorateClass([
    NetVar(DataType.BOOL)
  ], Ushort.prototype, "dirty", 2);
  __decorateClass([
    NetVar(DataType.ushort)
  ], Ushort.prototype, "value", 1);
  Ushort = __decorateClass([
    NetSerable("Ulong", false)
  ], Ushort);

  // src/builtin-comp/time.ts
  var LogicTimeComp = class extends IComp {
    constructor() {
      super(...arguments);
      this.$delta = new Float(0);
      this.duration = 0;
    }
    get delta() {
      return this.$delta.value;
    }
    set delta(value) {
      this.$delta.value = value;
    }
  };
  __decorateClass([
    NetVar(Float)
  ], LogicTimeComp.prototype, "$delta", 2);
  __decorateClass([
    NetVar(DataType.DOUBLE)
  ], LogicTimeComp.prototype, "duration", 2);
  LogicTimeComp = __decorateClass([
    NetSerable("logic_time")
  ], LogicTimeComp);
  var RenderTimeComp = class extends IComp {
    constructor() {
      super(...arguments);
      this.delta = 0;
      this.duration = 0;
    }
  };
  RenderTimeComp = __decorateClass([
    NetSerable("render_time")
  ], RenderTimeComp);

  // src/builtin-comp/role.ts
  var RoleComp = class extends IComp {
    constructor() {
      super(...arguments);
      this.$local = new Short(Role.AUTHORITY);
      this.$remote = new Short(Role.SIMULATED_PROXY);
    }
    get local() {
      return this.$local.value;
    }
    get remote() {
      return this.$remote.value;
    }
    set remote(value) {
      this.$remote.value = value;
    }
    ser(buffer) {
      this.$local.ser(buffer);
      this.$remote.ser(buffer);
    }
    deser(buffer) {
      this.$remote.deser(buffer);
      this.$local.deser(buffer);
    }
    upgrade() {
      return __async(this, null, function* () {
        if (this.local == Role.AUTHORITY && this.remote != Role.AUTONMOUS_PROXY) {
          this.remote = Role.AUTONMOUS_PROXY;
          return true;
        }
        return false;
      });
    }
    downgrade() {
      return __async(this, null, function* () {
        if (this.local == Role.AUTHORITY && this.remote != Role.SIMULATED_PROXY) {
          this.remote = Role.SIMULATED_PROXY;
          return true;
        }
        return false;
      });
    }
    init() {
      const type = this.domain.option.type;
      this.$local.value = type === RpcType.SERVER ? Role.AUTHORITY : Role.SIMULATED_PROXY;
      this.$remote.value = type === RpcType.SERVER ? Role.SIMULATED_PROXY : Role.AUTHORITY;
    }
  };
  __decorateClass([
    NetVar(Short)
  ], RoleComp.prototype, "$local", 2);
  __decorateClass([
    NetVar(Short)
  ], RoleComp.prototype, "$remote", 2);
  __decorateClass([
    Rpc(Role.AUTHORITY, DataType.BOOL)
  ], RoleComp.prototype, "upgrade", 1);
  __decorateClass([
    Rpc(Role.AUTHORITY, DataType.BOOL)
  ], RoleComp.prototype, "downgrade", 1);
  RoleComp = __decorateClass([
    NetSerable("role", false)
  ], RoleComp);

  // src/entity.ts
  var ComponentHasNotDecorated = class extends Error {
  };
  var _Entity = class {
    constructor(..._comps) {
      this.$comps = new Proxy(this, {
        get(target, p, _receiver) {
          return target.get(compName2ctr[String(p)]);
        }
      });
      this._id = NULL_NUM;
      this._version = NULL_NUM;
      this._compMap = new Map();
      this.role = new RoleComp();
      this._comps = [this.role, ..._comps];
      for (let i = 0, len = this._comps.length; i < len; i++) {
        this._initComp(this._comps[i]);
      }
    }
    get id() {
      return this._id;
    }
    get version() {
      return this._version;
    }
    get domain() {
      return this._domain;
    }
    get comps() {
      return this._comps;
    }
    static NewWithoutRole(..._comps) {
      const ent = Object.create(_Entity.prototype);
      ent._id = NULL_NUM;
      ent._version = NULL_NUM;
      ent.$comps = new Proxy(ent, {
        get(target, p, _receiver) {
          return target.get(compName2ctr[String(p)]);
        }
      });
      ent._compMap = new Map();
      ent.role = _comps[0];
      ent._comps = _comps;
      for (let i = 0, len = ent._comps.length; i < len; i++) {
        ent._initComp(ent._comps[i]);
      }
      return ent;
    }
    _initComp(c) {
      const map = this._compMap;
      c["_entity"] = this;
      if (!c.__schema__ || c.__schema__.hash == NULL_NUM) {
        throw new ComponentHasNotDecorated("Component must use @NetComp");
      }
      const hash = c.__schema__.hash;
      if (map.has(hash)) {
        map.set(hash, [map.get(hash), c]);
      } else {
        map.set(hash, c);
      }
    }
    toString() {
      return `Entity: id=${this._id},version=${this._version}`;
    }
    get(ctr) {
      const schema = ctr.prototype.__schema__;
      if (!(schema && schema.name)) {
        console.error("Componrnt must use @NetComp");
        return null;
      }
      if (!this._compMap.has(schema.hash))
        return null;
      const insOrArr = this._compMap.get(schema.hash);
      if (!Array.isArray(insOrArr))
        return insOrArr;
      return insOrArr[insOrArr.length - 1];
    }
    mget(ctr) {
      const schema = ctr.prototype.__schema__;
      if (!(schema && schema.name)) {
        console.error("Componrnt must use @NetComp");
        return [];
      }
      if (!this._compMap.has(schema.hash))
        return [];
      const insOrArr = this._compMap.get(schema.hash);
      if (!Array.isArray(insOrArr))
        return [insOrArr];
      return insOrArr;
    }
    has(ctr) {
      const schema = ctr.prototype.__schema__;
      if (!(schema && schema.name)) {
        console.error("Componrnt must use @NetComp");
        return false;
      }
      return this._compMap.has(schema.hash);
    }
    indexOf(ins) {
      if (ins == null)
        return -1;
      return this._comps.indexOf(ins);
    }
    _init() {
      for (let i = 0, len = this._comps.length; i < len; i++) {
        const c = this._comps[i];
        c.init && c.init(i);
      }
    }
    _renderUpdate() {
      for (let i = 0, len = this._comps.length; i < len; i++) {
        const c = this._comps[i];
        c.renderUpdate && c.renderUpdate(i);
      }
    }
    _logicUpdate() {
      for (let i = 0, len = this._comps.length; i < len; i++) {
        const c = this._comps[i];
        c.logicUpdate && c.logicUpdate(i);
      }
    }
    _destroy() {
      for (let i = 0, len = this._comps.length; i < len; i++) {
        const c = this._comps[i];
        c.destroy && c.destroy(i);
        c["_entity"] = null;
      }
      this._comps.length = 0;
      this._compMap.clear();
    }
  };
  var Entity = _Entity;
  Entity.Event = {
    REG_ENTITY: "reg-entity",
    UNREG_ENTITY: "unreg-entity"
  };

  // src/message-manager.ts
  var MessageType;
  (function(MessageType2) {
    MessageType2[MessageType2["UPDATE_COMPONENT"] = 0] = "UPDATE_COMPONENT";
    MessageType2[MessageType2["RPC"] = 1] = "RPC";
  })(MessageType || (MessageType = {}));
  var RpcCallbackUuidOutOfRange = class extends Error {
  };
  var MessageManagerBufferType;
  (function(MessageManagerBufferType2) {
    MessageManagerBufferType2[MessageManagerBufferType2["IN_OR_OUT"] = 0] = "IN_OR_OUT";
    MessageManagerBufferType2[MessageManagerBufferType2["STATE"] = 1] = "STATE";
    MessageManagerBufferType2[MessageManagerBufferType2["RPC"] = 2] = "RPC";
    MessageManagerBufferType2[MessageManagerBufferType2["RPC_CALLBACK"] = 3] = "RPC_CALLBACK";
  })(MessageManagerBufferType || (MessageManagerBufferType = {}));
  var MessageManager = class {
    constructor(initializer) {
      this._rpcCalls = [];
      this._rpcDeferred = new Map();
      this._uuid = 0;
      this.inbufferReader = initializer.newBufferReader(0);
      this.statebufferReader = initializer.newBufferReader(1);
      this.rpcbufferReader = initializer.newBufferReader(2);
      this.rpcCallbackBufferReader = initializer.newBufferReader(3);
      this.outbufferWriter = initializer.newBufferWriter(0);
      this.statebufferWriter = initializer.newBufferWriter(1);
      this.rpcbufferWriter = initializer.newBufferWriter(2);
      this.rpcCallbackBufferWriter = initializer.newBufferWriter(3);
    }
    _getUuid() {
      if (this._uuid >= RPC_MAX_UUID) {
        console.warn("[MessageManager#_getUuid]UUID is great than " + RPC_MAX_UUID);
        return 0;
      }
      return ++this._uuid;
    }
    startSendEntityAndComps() {
      this.statebufferWriter.reset();
    }
    sendEntity(entityId, entityVersion, compsLen, toDestroy) {
      const buf = this.statebufferWriter;
      buf.writeInt(entityId);
      buf.writeInt(composeVersion(entityVersion, toDestroy));
      buf.writeInt(compsLen);
    }
    sendComp(compIdx, comp) {
      const buf = this.statebufferWriter;
      buf.writeInt(compIdx);
      buf.writeLong(comp.__schema__.hash);
      comp.ser(buf);
      return true;
    }
    endSendEntityAndComps() {
      this.statebufferWriter.reset();
    }
    startRecvEntityAndComps() {
    }
    recvEntity() {
      const buf = this.statebufferReader;
      if (!buf.hasNext())
        return null;
      const entityId = buf.readInt();
      const [entityVersion, toDestory] = decomposeVersion(buf.readInt());
      const compCount = buf.readInt();
      return {
        entityId,
        entityVersion,
        destoryed: toDestory,
        compCount
      };
    }
    recvCompHeader() {
      const buf = this.statebufferReader;
      const compIdx = buf.readInt();
      const hash = buf.readLong();
      return {
        compIdx,
        hash
      };
    }
    recvCompBody(comp) {
      const buf = this.statebufferReader;
      comp.deser(buf);
    }
    endRecvEntityAndComps() {
    }
    startSendRpc() {
    }
    sendRpc(methodName, component, params, timestamp) {
      const uuid = this._getUuid();
      if (uuid < 0) {
        return Promise.reject(new RpcCallbackUuidOutOfRange());
      }
      const comp = component;
      const entity = comp.entity;
      const compIdx = entity.indexOf(component);
      const buf = this.rpcbufferWriter;
      const s = comp.__schema__;
      const ms = s.methods[methodName];
      buf.writeInt(entity.id);
      buf.writeUshort(compIdx);
      buf.writeLong(ms.hash);
      buf.writeLong(timestamp);
      buf.writeUint(uuid);
      component["ser" + ms.hash](buf, params);
      if (ms.returnType == DataTypeVoid) {
        return;
      } else {
        const deferred = new Deferred();
        this._rpcDeferred.set(`${entity.id}|${compIdx}|${ms.hash}|${uuid}`, {
          deferred,
          timestamp
        });
        return deferred.promise;
      }
    }
    endSendRpc() {
      this.rpcbufferWriter.reset();
      this._uuid = 0;
    }
    startRecvRpc() {
    }
    recvRpc() {
      if (!this.rpcbufferReader.hasNext())
        return null;
      const buf = this.rpcbufferReader;
      const entityId = buf.readInt();
      const compIdx = buf.readUshort();
      const methodHash = buf.readLong();
      const timestamp = buf.readLong();
      const uuid = buf.readUint();
      return { entityId, compIdx, methodHash, timestamp, uuid };
    }
    endRecvRpc() {
    }
    startSendRpcCallback() {
    }
    sendRpcCallback(info) {
      const buf = this.rpcCallbackBufferWriter;
      buf.writeInt(info.entityId);
      buf.writeUshort(info.compIdx);
      buf.writeLong(info.methodHash);
      buf.writeUint(info.uuid);
    }
    endSendRpcCallback() {
      this.rpcCallbackBufferWriter.reset();
    }
    startRecvRpcCallback() {
    }
    recvRpcCallback() {
      if (!this.rpcCallbackBufferReader.hasNext())
        return null;
      const buf = this.rpcCallbackBufferReader;
      const entityId = buf.readInt();
      const compIdx = buf.readUshort();
      const methodHash = buf.readLong();
      const uuid = buf.readUint();
      return { entityId, compIdx, methodHash, uuid };
    }
    endRecvRpcCallback() {
    }
    getRpcCallbackRecord(param) {
      return this._rpcDeferred.get(`${param.entityId}|${param.compIdx}|${param.methodHash}|${param.uuid}`);
    }
  };

  // src/domain.ts
  var EntityNotValidError = class extends Error {
  };
  var EntityRepeatRegisteredError = class extends Error {
  };
  var EntityGroupOutOfRangeYouCanOpenAutoResize = class extends Error {
  };
  var DomainDuplicated = class extends Error {
  };
  var DomainCompCountNotMatch = class extends Error {
  };
  var DomainOption = class {
    constructor(initializer, type) {
      this.initializer = initializer;
      this.type = type;
      this.capacity = 50;
      this.autoResize = true;
      this.fixedTimeSec = 0.2;
    }
  };
  var _Domain = class {
    constructor(name, option, uuid) {
      this.name = name;
      this.uuid = uuid;
      this._index = -1;
      this._entitiesLength = 0;
      this._entityIdCursor = 0;
      this._fixedSecAccumulator = 0;
      this._option = option;
      this._entities = new Array(option.capacity);
      this._entityVersion = new Array(option.capacity);
      this._entityVersion.fill(0);
      this._destroyEntityId = new Array();
      this._internalMsgMng = new MessageManager(option.initializer);
      this.readonlyInternalMsgMng = this._internalMsgMng;
      this.logicTime = new LogicTimeComp();
      this.renderTime = new RenderTimeComp();
      this.time = new Entity(this.logicTime, this.renderTime);
      this.logicTime.delta = this.option.fixedTimeSec;
      this.reg(this.time);
    }
    static Create(name, option, uuid = str(name)) {
      if (this._name2domainMap.has(name)) {
        throw new DomainDuplicated(name);
      }
      const news = new _Domain(name, option, uuid);
      const domainIndex = this._name2domainMap.set(name, news);
      news._index = domainIndex;
      return news;
    }
    static Get(name = "main") {
      return this._name2domainMap.get(name);
    }
    static GetByEntity(entity) {
      const domainIndex = entity.id;
      const domain = this._name2domainMap.values[domainIndex];
      if (domain.isValid(entity)) {
        return domain;
      }
      return null;
    }
    static Clear() {
      this._name2domainMap.clear();
    }
    get index() {
      return this._index;
    }
    get entities() {
      return this._entities;
    }
    get length() {
      return this._entitiesLength;
    }
    get option() {
      return this._option;
    }
    reg(entity) {
      if (this.isValid(entity))
        throw new EntityRepeatRegisteredError(entity.toString());
      if (this._entityIdCursor == this._option.capacity) {
        if (this._option.autoResize) {
          this.resize(Math.ceil(this._option.capacity * 1.5));
        } else
          throw new EntityGroupOutOfRangeYouCanOpenAutoResize(`Domain: capacity: ${this._option.capacity}; ` + entity.toString());
      }
      const id = this._getEntityId();
      const version = this._entityVersion[id];
      this._reg(entity, id, version);
      entity["_init"]();
    }
    hasReg(entity) {
      return this.isValid(entity);
    }
    unregWithoutValidation(entity) {
      const index = entity.id;
      this._entityVersion[index]++;
      this._unreg(entity);
      this._destroyEntityId.push(entity.id);
      this._entities[index] = null;
      entity["_destroy"]();
    }
    unreg(entity) {
      if (!this.isValid(entity))
        throw new EntityNotValidError(entity.toString());
      this.unregWithoutValidation(entity);
    }
    get(id) {
      return this._entities[id];
    }
    resize(newSize) {
      const oldSize = this._option.capacity;
      this._entities.length = newSize;
      this._entityVersion.length = newSize;
      this._entityVersion.fill(0, oldSize, newSize);
      this._option.capacity = newSize;
    }
    isValid(entity) {
      return entity.id != NULL_NUM && entity.version != NULL_NUM && entity.version == this._entityVersion[entity.id];
    }
    asData() {
      const isServer = this._option.type == RpcType.SERVER;
      const outBuf = this._internalMsgMng.outbufferWriter;
      const stateBuf = this._internalMsgMng.statebufferWriter;
      const rpcBuf = this._internalMsgMng.rpcbufferWriter;
      const rpcCbBuf = this._internalMsgMng.rpcCallbackBufferWriter;
      outBuf.reset();
      outBuf.writeInt(this.uuid).writeBoolean(isServer);
      if (isServer) {
        this._internalMsgMng.startSendEntityAndComps();
        this._internalMsgMng.startSendRpc();
        this._internalMsgMng.startSendRpcCallback();
        this._serEntityAndComps();
        const stateLen = stateBuf.writerCursor;
        const rpcLen = rpcBuf.writerCursor;
        const rpcCbLen = rpcCbBuf.writerCursor;
        outBuf.writeUlong(stateLen).writeUlong(rpcLen).writeUlong(rpcCbLen).append(stateBuf).append(rpcBuf).append(rpcCbBuf);
        this._internalMsgMng.endSendEntityAndComps();
        this._internalMsgMng.endSendRpc();
        this._internalMsgMng.endSendRpcCallback();
      } else {
        this._internalMsgMng.startSendRpc();
        this._internalMsgMng.startSendRpcCallback();
        const rpcLen = rpcBuf.writerCursor;
        const rpcCbLen = rpcCbBuf.writerCursor;
        outBuf.writeUlong(rpcLen).writeUlong(rpcCbLen).append(rpcBuf).append(rpcCbBuf);
        this._internalMsgMng.endSendRpc();
        this._internalMsgMng.endSendRpcCallback();
      }
      return outBuf.flush();
    }
    setData(source) {
      const inBuf = this._internalMsgMng.inbufferReader;
      const stateBuf = this._internalMsgMng.statebufferReader;
      const rpcBuf = this._internalMsgMng.rpcbufferReader;
      const rpcCbBuf = this._internalMsgMng.rpcCallbackBufferReader;
      inBuf.set(source);
      inBuf.readInt();
      const isServer = inBuf.readBoolean();
      if (isServer) {
        const stateLen = inBuf.readUlong();
        const rpcLen = inBuf.readUlong();
        const rpcCbLen = inBuf.readUlong();
        const stateStart = inBuf.readerCursor;
        const stateEnd = stateStart + stateLen;
        const rpcStart = stateEnd;
        const rpcEnd = rpcStart + rpcLen;
        const rpcCbStart = rpcEnd;
        const rpcCbEnd = rpcCbStart + rpcCbLen;
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
        const rpcLen = inBuf.readUlong();
        const rpcCbLen = inBuf.readUlong();
        const rpcStart = inBuf.readerCursor;
        const rpcEnd = rpcStart + rpcLen;
        const rpcCbStart = rpcEnd;
        const rpcCbEnd = rpcCbStart + rpcCbLen;
        rpcBuf.set(source, rpcStart, rpcEnd);
        rpcCbBuf.set(source, rpcCbStart, rpcCbEnd);
        this._internalMsgMng.startRecvRpc();
        this._deserRpcs();
        this._internalMsgMng.endRecvRpc();
        this._internalMsgMng.startRecvRpcCallback();
        this._deserRpcCallbacks();
        this._internalMsgMng.endRecvRpcCallback();
      }
    }
    update(dtSec) {
      this._fixedSecAccumulator += dtSec;
      const fixedDeltaTime = this.logicTime.delta;
      while (this._fixedSecAccumulator > fixedDeltaTime) {
        this._fixedSecAccumulator -= fixedDeltaTime;
        this.logicTime.duration += fixedDeltaTime;
        for (let i = 0, len = this._entitiesLength; i < len; i++) {
          const ent = this._entities[i];
          if (!ent)
            continue;
          if (ent.role.local === Role.AUTHORITY || ent.role.local === Role.AUTONMOUS_PROXY) {
            ent["_logicUpdate"]();
          }
        }
      }
      this.renderTime.delta = dtSec;
      this.renderTime.duration += dtSec;
      for (let i = 0, len = this._entitiesLength; i < len; i++) {
        const ent = this._entities[i];
        if (!ent)
          continue;
        ent["_renderUpdate"]();
      }
    }
    _reg(entity, id, version) {
      entity["_id"] = id;
      entity["_version"] = version;
      entity["_domain"] = this;
      const index = entity.id;
      this._entities[index] = entity;
      if (index >= this._entitiesLength) {
        this._entitiesLength = index + 1;
      }
    }
    _unreg(entity) {
      entity["_id"] = NULL_NUM;
      entity["_version"] = NULL_NUM;
      entity["_domain"] = void 0;
    }
    _serEntityAndComps() {
      for (let i = 0, len = this._entitiesLength; i < len; i++) {
        const ent = this._entities[i];
        if (!ent) {
          this._internalMsgMng.sendEntity(i, this._entityVersion[i], 0, true);
          continue;
        }
        this._internalMsgMng.sendEntity(ent.id, ent.version, ent.comps.length, false);
        const comps = ent.comps;
        for (let compIdx = 0, len2 = comps.length; compIdx < len2; compIdx++) {
          const comp = comps[compIdx];
          const serableComp = asSerable(comp);
          if (!serableComp) {
            console.warn(`[Domain#_ser(compIdx: ${compIdx}, entity: ${ent})]comp is not Serable!`);
            continue;
          }
          this._internalMsgMng.sendComp(compIdx, serableComp);
        }
      }
    }
    _derEntityAndComps() {
      let params;
      while (params = this._internalMsgMng.recvEntity()) {
        let ent = this._entities[params.entityId];
        if (ent && (ent.version != params.entityVersion || params.destoryed)) {
          this.unreg(ent);
          ent = null;
        }
        if (!params.destoryed) {
          ent = ent ? this._derEntityAndCompsUnderExisted(params, ent) : this._derEntityAndCompsUnderUnExsited(params);
        }
      }
    }
    _derEntityAndCompsUnderExisted(params, entity) {
      const entComps = entity.comps;
      assert(params.compCount == entComps.length, DomainCompCountNotMatch);
      for (let i = 0, len = params.compCount; i < len; i++) {
        const compHeaderInfo = this._internalMsgMng.recvCompHeader();
        const comp = asSerable(entComps[compHeaderInfo.compIdx]);
        if (!comp)
          continue;
        this._internalMsgMng.recvCompBody(comp);
      }
      return entity;
    }
    _derEntityAndCompsUnderUnExsited(params) {
      const compArr = new Array(params.compCount);
      for (let i = 0, len = params.compCount; i < len; i++) {
        const compHeaderInfo = this._internalMsgMng.recvCompHeader();
        const compName = hash2compName[compHeaderInfo.hash];
        const CompCtr = compName2ctr[compName];
        const comp = new CompCtr();
        this._internalMsgMng.recvCompBody(comp);
        compArr[compHeaderInfo.compIdx] = comp;
      }
      const e = Entity.NewWithoutRole(...compArr);
      this.reg(e);
      return e;
    }
    _deserRpcs() {
      let param;
      while (param = this._internalMsgMng.recvRpc()) {
        const ent = this.get(param.entityId);
        if (!ent)
          continue;
        const comp = ent.comps[param.compIdx];
        if (!comp)
          continue;
        const argus = comp["deser" + param.methodHash](this._internalMsgMng.rpcbufferReader);
        const methodName = hash2RpcName[param.methodHash];
        const unknown = comp[methodName].apply(comp, argus);
        const s = comp[SCHEME_KEY];
        const ms = s.methods[methodName];
        if (ms.returnType != DataTypeVoid) {
          const w = param;
          unknown == null ? void 0 : unknown.then((result) => {
            this._internalMsgMng.sendRpcCallback(w);
            serValue(ms.returnType, result, this._internalMsgMng.rpcCallbackBufferWriter);
          });
        }
      }
    }
    _deserRpcCallbacks() {
      let param;
      while (param = this._internalMsgMng.recvRpcCallback()) {
        const ent = this.get(param.entityId);
        if (!ent)
          continue;
        const comp = ent.comps[param.compIdx];
        if (!comp)
          continue;
        const s = comp[SCHEME_KEY];
        const methodName = hash2RpcName[param.methodHash];
        const ms = s.methods[methodName];
        let result;
        if (ms.returnType != DataTypeVoid) {
          result = deserValue(ms.returnType, this._internalMsgMng.rpcCallbackBufferReader, void 0, ms.returnRefCtr);
        }
        const callbackRecord = this._internalMsgMng.getRpcCallbackRecord(param);
        if (!callbackRecord)
          continue;
        callbackRecord.deferred.resolve(result);
      }
    }
    _getEntityId() {
      return this._destroyEntityId.length > 0 ? this._destroyEntityId.unshift() : this._entityIdCursor++;
    }
  };
  var Domain = _Domain;
  Domain._name2domainMap = new ArrayMap();

  // src/data/string-databuffer.ts
  var tempTypedBuffer = {
    int: new Int32Array(1),
    uint: new Uint32Array(1),
    short: new Int16Array(1),
    ushort: new Uint16Array(1),
    long: new Int32Array(1),
    ulong: new Uint32Array(1),
    float: new Float32Array(1),
    double: new Float64Array(1)
  };
  var StringDataBufferOutOfRange = class extends Error {
  };
  var StringDataBuffer = class {
    constructor() {
      this.writeBuffer = [];
      this.writerCursor = 0;
      this.readBuffer = [];
      this.readerCursor = 0;
      this.readerStart = 0;
      this.readerEnd = 0;
    }
    check(increment = 0) {
      if (this.writerCursor + increment >= this.readBuffer.length && this.writerCursor + increment >= this.readerEnd) {
        throw new StringDataBufferOutOfRange(`Cursor: (${this.writerCursor}), buffer's length: (${this.writeBuffer.length})`);
      }
    }
    reset() {
      this.writerCursor = 0;
      this.readerCursor = 0;
      this.readBuffer.length = 0;
      this.writeBuffer.length = 0;
    }
    readInt() {
      this.check();
      const temp = tempTypedBuffer.int;
      temp[0] = this.readBuffer[this.readerCursor++];
      return temp[0];
    }
    readUint() {
      this.check();
      const temp = tempTypedBuffer.uint;
      temp[0] = this.readBuffer[this.readerCursor++];
      return temp[0];
    }
    readShort() {
      this.check();
      const temp = tempTypedBuffer.short;
      temp[0] = this.readBuffer[this.readerCursor++];
      return temp[0];
    }
    readUshort() {
      this.check();
      const temp = tempTypedBuffer.ushort;
      temp[0] = this.readBuffer[this.readerCursor++];
      return temp[0];
    }
    readLong() {
      this.check();
      const temp = tempTypedBuffer.long;
      temp[0] = this.readBuffer[this.readerCursor++];
      return temp[0];
    }
    readUlong() {
      this.check();
      const temp = tempTypedBuffer.ulong;
      temp[0] = this.readBuffer[this.readerCursor++];
      return temp[0];
    }
    readFloat() {
      this.check();
      const temp = tempTypedBuffer.float;
      temp[0] = this.readBuffer[this.readerCursor++];
      return temp[0];
    }
    readDouble() {
      this.check();
      const temp = tempTypedBuffer.double;
      temp[0] = this.readBuffer[this.readerCursor++];
      return temp[0];
    }
    readBoolean() {
      this.check();
      return Boolean(this.readBuffer[this.readerCursor++]);
    }
    set(source, start = 0, end = -1) {
      this.writerCursor = 0;
      const dst = JSON.parse(source);
      let dstChecked = Array.isArray(dst) ? dst : [];
      if (end < 0) {
        end += dstChecked.length;
      }
      this.readerStart = this.readerCursor = start;
      this.readerEnd = end;
      this.readBuffer = dstChecked;
    }
    writeInt(source) {
      const temp = tempTypedBuffer.int;
      temp[0] = source;
      this.writeBuffer[this.writerCursor++] = source;
      return this;
    }
    writeUint(source) {
      const temp = tempTypedBuffer.uint;
      temp[0] = source;
      this.writeBuffer[this.writerCursor++] = source;
      return this;
    }
    writeShort(source) {
      const temp = tempTypedBuffer.short;
      temp[0] = source;
      this.writeBuffer[this.writerCursor++] = source;
      return this;
    }
    writeUshort(source) {
      const temp = tempTypedBuffer.ushort;
      temp[0] = source;
      this.writeBuffer[this.writerCursor++] = source;
      return this;
    }
    writeLong(source) {
      const temp = tempTypedBuffer.long;
      temp[0] = source;
      this.writeBuffer[this.writerCursor++] = source;
      return this;
    }
    writeUlong(source) {
      const temp = tempTypedBuffer.ulong;
      temp[0] = source;
      this.writeBuffer[this.writerCursor++] = source;
      return this;
    }
    writeFloat(source) {
      const temp = tempTypedBuffer.float;
      temp[0] = source;
      this.writeBuffer[this.writerCursor++] = source;
      return this;
    }
    writeDouble(source) {
      const temp = tempTypedBuffer.double;
      temp[0] = source;
      this.writeBuffer[this.writerCursor++] = source;
      return this;
    }
    writeBoolean(source) {
      this.writeBuffer[this.writerCursor++] = source ? 1 : 0;
      return this;
    }
    flush() {
      this.writeBuffer.length = this.writerCursor;
      const outValue = JSON.stringify(this.writeBuffer);
      this.reset();
      return outValue;
    }
    hasNext() {
      return this.readerCursor < this.readBuffer.length && this.readerCursor < this.readerEnd;
    }
    append(other) {
      this.writeBuffer.push.apply(this.writeBuffer, other.writeBuffer);
      this.writerCursor += other.writerCursor;
      other.reset();
      return this;
    }
  };

  // src/data/string-domain-option.ts
  var stringInitializer = {
    newBufferReader(_type) {
      return new StringDataBuffer();
    },
    newBufferWriter(_type) {
      return new StringDataBuffer();
    }
  };
  var StringDomainOption = class extends DomainOption {
    constructor(type) {
      super(stringInitializer, type);
    }
  };

  // example/mock-net.ts
  var MockTcp = class {
    constructor() {
      this._arr = [];
    }
    send(defer) {
      this._arr.push(defer);
    }
    update() {
      var _a;
      let defer;
      while (this._arr.length >= 1 && (defer = this._arr[0]).isFulfilled()) {
        (_a = this.receiver) == null ? void 0 : _a.receive(defer.value);
        this._arr.shift();
      }
    }
  };
  var Net = class {
    static set server(value) {
      this._serverTcp.receiver = value;
    }
    static set client1(value) {
      this._client1Tcp.receiver = value;
    }
    static set client2(value) {
      this._client2Tcp.receiver = value;
    }
    static clone(src) {
      return src;
    }
    static send(obj) {
      return {
        server: () => {
          const defer = new Deferred();
          setTimeout(() => defer.resolve(this.clone(obj)), this.delay + Math.random() * this.jitter);
          this._serverTcp.send(defer);
        },
        c1: () => {
          const defer = new Deferred();
          setTimeout(() => defer.resolve(this.clone(obj)), this.delay + Math.random() * this.jitter);
          this._client1Tcp.send(defer);
        },
        c2: () => {
          const defer = new Deferred();
          setTimeout(() => defer.resolve(this.clone(obj)), this.delay + Math.random() * this.jitter);
          this._client2Tcp.send(defer);
        }
      };
    }
    static startUpdate() {
      setTimeout(() => this.startUpdate());
      this._serverTcp.update();
      this._client1Tcp.update();
      this._client2Tcp.update();
    }
  };
  Net.delay = 0;
  Net.jitter = 0;
  Net._serverTcp = new MockTcp();
  Net._client1Tcp = new MockTcp();
  Net._client2Tcp = new MockTcp();

  // example/net-comp.ts
  var Vector = class {
    constructor() {
      this.x = 0;
      this.y = 0;
    }
  };
  __decorateClass([
    NetVar(DataType.INT)
  ], Vector.prototype, "x", 2);
  __decorateClass([
    NetVar(DataType.INT)
  ], Vector.prototype, "y", 2);
  Vector = __decorateClass([
    NetSerable("vec")
  ], Vector);
  var Transform = class extends IComp {
    constructor() {
      super(...arguments);
      this.pos = new Vector();
    }
    serverMove(x, y) {
      if (x != 0 || y != 0) {
        console.log(`${x} : ${y}`);
      }
      this.pos.x += x;
      this.pos.y += y;
    }
  };
  __decorateClass([
    NetVar(Vector)
  ], Transform.prototype, "pos", 2);
  __decorateClass([
    Rpc(Role.AUTHORITY),
    __decorateParam(0, RpcVar(DataType.FLOAT)),
    __decorateParam(1, RpcVar(DataType.FLOAT))
  ], Transform.prototype, "serverMove", 1);
  Transform = __decorateClass([
    NetSerable("trans")
  ], Transform);
  var View = class extends IComp {
    constructor() {
      super(...arguments);
      this.color = 16777215;
    }
    changeColor(inColor) {
      this.color = inColor;
    }
    bindCanvas(ctx) {
      this._ctx = ctx;
    }
    renderUpdate() {
      const trs = this.get(Transform);
      const view = this.get(View);
      if (!this._ctx || !trs || !view)
        return;
      this.drawBall(this._ctx, trs.pos, "#" + view.color.toString(16));
    }
    drawBall(ctx, pos, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 26, 0, 2 * Math.PI);
      ctx.fill();
    }
  };
  __decorateClass([
    NetVar(DataType.INT)
  ], View.prototype, "color", 2);
  __decorateClass([
    Rpc(Role.AUTHORITY),
    __decorateParam(0, RpcVar(DataType.INT))
  ], View.prototype, "changeColor", 1);
  View = __decorateClass([
    NetSerable("view")
  ], View);
  var Controller = class extends IComp {
    constructor() {
      super();
      this._input = { isLeft: false, isRight: false };
      this._enable = false;
      this._onKeyDownDel = this.onKeyDown.bind(this);
      this._onKeyUpDel = this.onKeyUp.bind(this);
    }
    getEnable() {
      return this._enable;
    }
    setEnable(value, controlMap) {
      if (this._enable == value)
        return;
      this.controlMap = controlMap;
      if (value) {
        window.addEventListener("keydown", this._onKeyDownDel);
        window.addEventListener("keyup", this._onKeyUpDel);
      } else {
        window.removeEventListener("keydown", this._onKeyDownDel);
        window.removeEventListener("keyup", this._onKeyUpDel);
      }
      this._enable = value;
    }
    onKeyDown(ev) {
      const map = this.controlMap;
      if (ev.key === map.left) {
        this._input.isLeft = true;
      } else if (ev.key === map.right) {
        this._input.isRight = true;
      }
    }
    onKeyUp(ev) {
      const map = this.controlMap;
      if (ev.key === map.left) {
        this._input.isLeft = false;
      } else if (ev.key === map.right) {
        this._input.isRight = false;
      }
    }
    renderUpdate() {
      if (!this._enable)
        return;
      const input = this._input;
      const trans = this.get(Transform);
      const dirX = (input.isLeft ? -1 : 0) + (input.isRight ? 1 : 0);
      trans.serverMove(dirX * this.domain.renderTime.delta * 100, 0);
    }
  };
  Controller = __decorateClass([
    NetSerable("controller")
  ], Controller);

  // example/index.ts
  var COLOR_YELLOW = 16243020;
  var COLOR_WHITE = 16303053;
  var CONTROLLER_MAP = {
    1: { left: "a", right: "d" },
    2: { left: "ArrowLeft", right: "ArrowRight" }
  };
  var Base = class {
    constructor(name, canvas, rpcType) {
      this.canvas = canvas;
      this.bg = "#947A6D";
      this.isPrediction = false;
      this.isInterpolation = false;
      this.isRollback = false;
      this.lastTimeStamp = 0;
      this.actorArr = [];
      this.domain = Domain.Create(name, new StringDomainOption(rpcType));
      this.ctx = canvas.getContext("2d");
      this.canvas.width = 950;
      this.canvas.height = 70;
      this.ctx.fillStyle = this.bg;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.myLoop = this.loop.bind(this);
      this.initScene();
      this.loop(0);
    }
    loop(timestamp) {
      const dt = this.lastTimeStamp == 0 ? 0 : timestamp - this.lastTimeStamp;
      this.lastTimeStamp = timestamp;
      this.renderBg();
      this.domain.update(dt / 1e3);
    }
    initScene() {
      const v1 = new View();
      v1.bindCanvas(this.ctx);
      const t1 = new Transform();
      t1.pos.x = 30;
      t1.pos.y = 35;
      const c1 = new Entity(v1, t1, new Controller());
      const v2 = new View();
      v2.bindCanvas(this.ctx);
      const t2 = new Transform();
      t2.pos.x = 50;
      t2.pos.y = 35;
      const c2 = new Entity(v2, t2, new Controller());
      this.domain.reg(c1);
      this.domain.reg(c2);
      v1.changeColor(COLOR_YELLOW);
      v2.changeColor(COLOR_WHITE);
      this.actorArr.push(c1, c2);
    }
    renderBg() {
      this.canvas.width = this.canvas.width;
      const ctx = this.ctx;
      ctx.fillStyle = this.bg;
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    receive(data) {
      if (this.isPrediction)
        return;
      this.domain.setData(data);
    }
  };
  var Server = class extends Base {
    constructor(canvas) {
      super("server", canvas, RpcType.SERVER);
      this.canvas = canvas;
      this.sendAccumulator = 0;
    }
    loop(dt) {
      super.loop(dt);
      this.sendAccumulator += this.domain.renderTime.delta;
      if (this.sendAccumulator >= 1 / 20) {
        const outData = this.domain.asData();
        Net.send(outData).c1();
        Net.send(outData).c2();
        this.sendAccumulator = 0;
      }
    }
  };
  var Client = class extends Base {
    constructor(index, canvas) {
      super("client" + index, canvas, RpcType.CLIENT);
      this.index = index;
      this.canvas = canvas;
      var _a;
      (_a = this.actorArr[index - 1].get(Controller)) == null ? void 0 : _a.setEnable(true, CONTROLLER_MAP[index]);
    }
    loop(dt) {
      super.loop(dt);
      const outData = this.domain.asData();
      Net.send(outData).server();
    }
  };
  return example_exports;
})();
//# sourceMappingURL=bundle.js.map
