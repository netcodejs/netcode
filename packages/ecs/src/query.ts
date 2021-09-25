import { ComponentConstructor, ComponentSchema, Type } from "./component";
import { BitArray } from "./custom-typed-array";

export interface IMatcher {
    match(mask: number): boolean;
}

export interface INoneOfMatcher extends IMatcher {}

export interface IAnyOfMatcher extends INoneOfMatcher {
    noneOf(...compCtrArr: ComponentConstructor[]): INoneOfMatcher;
}

export interface IAllOfMatcher extends IAnyOfMatcher {
    anyOf(...compCtrArr: ComponentConstructor[]): IAnyOfMatcher;
}

export interface IComposedMatcher extends IAllOfMatcher {
    allOf(...compCtrArr: ComponentConstructor[]): IAnyOfMatcher;
}

export class Matcher
    implements IComposedMatcher, IAllOfMatcher, IAnyOfMatcher, INoneOfMatcher
{
    allOfBitset = new BitArray(16);
    anyOfBitset = new BitArray(16);
    noneOfBitset = new BitArray(16);

    allOf(
        ...compCtrArr: ComponentConstructor<ComponentSchema, any>[]
    ): IAnyOfMatcher {
        const bs = this.allOfBitset;
        for (let ctr of compCtrArr) {
            bs.set(ctr.typeId, true);
        }
        return this;
    }

    anyOf(
        ...compCtrArr: ComponentConstructor<ComponentSchema, any>[]
    ): IAnyOfMatcher {
        const bs = this.anyOfBitset;
        for (let ctr of compCtrArr) {
            bs.set(ctr.typeId, true);
        }
        return this;
    }

    noneOf(
        ...compCtrArr: ComponentConstructor<ComponentSchema, any>[]
    ): INoneOfMatcher {
        const bs = this.noneOfBitset;
        for (let ctr of compCtrArr) {
            bs.set(ctr.typeId, true);
        }
        return this;
    }

    match(mask: number): boolean {
        throw "";
    }

    static _singleMatcher: Matcher[] = [];
    static single(compCtr: ComponentConstructor): Matcher {
        let matcher = this._singleMatcher[compCtr.typeId];
        if (!matcher) {
            matcher = this._singleMatcher[compCtr.typeId] = new Matcher();
            matcher.allOf(compCtr);
        }
        return matcher;
    }
}
