import { setBit } from "./util";
import { ComponentType } from "./concept";

export interface IMatcher {
    match(mask: number): boolean;
    types: ComponentType[];
}

export interface INoneOfMatcher extends IMatcher, IMatcher {}

export interface IAnyOfMatcher extends INoneOfMatcher {
    noneOf(...types: ComponentType[]): INoneOfMatcher;
}

export interface IAllOfMatcher extends IAnyOfMatcher {
    anyOf(...types: ComponentType[]): IAnyOfMatcher;
}

export class Matcher implements IAllOfMatcher {
    allOfBitset = 0;
    anyOfBitset = 0;
    noneOfBitset = 0;
    types: ComponentType[] = [];

    private constructor() {}

    static allOf(...types: ComponentType[]): IAllOfMatcher {
        const matcher = new Matcher();
        for (let type of types) {
            matcher.allOfBitset = setBit(matcher.allOfBitset, type.id);
            matcher.types.push(type);
        }

        return matcher;
    }

    static anyOf(...types: ComponentType[]): IAnyOfMatcher {
        const matcher = new Matcher();
        for (let type of types) {
            matcher.anyOfBitset = setBit(matcher.anyOfBitset, type.id);
        }
        return matcher;
    }

    static noneOf(...types: ComponentType[]): INoneOfMatcher {
        const matcher = new Matcher();
        for (let type of types) {
            matcher.noneOfBitset = setBit(matcher.noneOfBitset, type.id);
        }
        return matcher;
    }

    anyOf(...types: ComponentType[]): IAnyOfMatcher {
        for (let type of types) {
            this.anyOfBitset = setBit(this.anyOfBitset, type.id);
        }
        return this;
    }

    noneOf(...types: ComponentType[]): INoneOfMatcher {
        for (let type of types) {
            this.noneOfBitset = setBit(this.noneOfBitset, type.id);
        }
        return this;
    }

    match(mask: number): boolean {
        return (
            // all of test
            (this.allOfBitset & mask) === this.allOfBitset &&
            // any of test
            !(this.anyOfBitset !== 0 && (this.anyOfBitset & mask) === 0) &&
            // none of test
            (this.noneOfBitset & mask) === 0
        );
    }
}
