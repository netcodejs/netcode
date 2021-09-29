var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
    var result =
        kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if ((decorator = decorators[i]))
            result =
                (kind ? decorator(target, key, result) : decorator(result)) ||
                result;
    if (kind && result) __defProp(target, key, result);
    return result;
};
var __decorateParam = (index, decorator) => (target, key) =>
    decorator(target, key, index);

// test/abc.dec.ts
var auto = function () {};
function cls(className) {
    return function () {};
}
function param(name) {
    return function () {};
}

// test/heihei.ts
var Heihei = class {
    hello() {}
};

// test/index.ts
var Abcf = class {};
__decorateClass([auto], Abcf.prototype, "a", 2);
Abcf = __decorateClass([auto], Abcf);
var Abc = class {
    constructor() {
        this.a = 0;
        this.b = [1];
    }
};
__decorateClass([auto], Abc.prototype, "a", 2);
__decorateClass([auto], Abc.prototype, "b", 2);
Abc = __decorateClass([auto], Abc);
var Abcd = class {
    constructor() {
        this.a = 0;
    }
    heihei(nihao, hihi) {}
};
__decorateClass([auto], Abcd.prototype, "a", 2);
__decorateClass(
    [auto, __decorateParam(1, param("u16"))],
    Abcd.prototype,
    "heihei",
    1
);
Abcd = __decorateClass([cls("hhh")], Abcd);
var Abce = class {
    constructor() {
        this.a = 0;
    }
};
__decorateClass([auto], Abce.prototype, "a", 2);
Abce = __decorateClass([auto], Abce);
var Abcg = class {
    constructor() {
        this.a = 0;
    }
};
__decorateClass([auto], Abcg.prototype, "a", 2);
export { Abc, Abcd, Abce, Abcf, Abcg, Heihei };
