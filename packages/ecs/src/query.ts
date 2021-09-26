import { setBit } from "./util";
import { ComponentConstructor, ComponentSchema } from "./component";

export interface IMatcher {
    match(mask: number): boolean;
}

export interface INoneOfMatcher<T extends ComponentConstructor[]>
    extends IMatcher {}

export interface IAnyOfMatcher<T extends ComponentConstructor[]>
    extends INoneOfMatcher<T> {
    noneOf(...compCtrArr: ComponentConstructor[]): INoneOfMatcher<T>;
}

export interface IAllOfMatcher<T extends ComponentConstructor[]>
    extends IAnyOfMatcher<T> {
    anyOf(...compCtrArr: ComponentConstructor[]): IAnyOfMatcher<T>;
}

export class Matcher<AllOf extends ComponentConstructor[]>
    implements IAllOfMatcher<AllOf>
{
    allOfBitset = 0;
    anyOfBitset = 0;
    noneOfBitset = 0;

    private constructor() {}

    static allOf<AllOf extends ComponentConstructor[]>(
        ...compCtrArr: AllOf
    ): IAllOfMatcher<AllOf> {
        const matcher = new Matcher();
        for (let ctr of compCtrArr) {
            matcher.allOfBitset = setBit(matcher.allOfBitset, ctr.typeId);
        }
        return matcher;
    }

    static anyOf(
        ...compCtrArr: ComponentConstructor<ComponentSchema, any>[]
    ): IAnyOfMatcher<[]> {
        const matcher = new Matcher();
        for (let ctr of compCtrArr) {
            matcher.anyOfBitset = setBit(matcher.anyOfBitset, ctr.typeId);
        }
        return matcher;
    }

    static noneOf(
        ...compCtrArr: ComponentConstructor<ComponentSchema, any>[]
    ): INoneOfMatcher<[]> {
        const matcher = new Matcher();
        for (let ctr of compCtrArr) {
            matcher.noneOfBitset = setBit(matcher.noneOfBitset, ctr.typeId);
        }
        return matcher;
    }

    anyOf(
        ...compCtrArr: ComponentConstructor<ComponentSchema, any>[]
    ): IAnyOfMatcher<AllOf> {
        for (let ctr of compCtrArr) {
            this.anyOfBitset = setBit(this.anyOfBitset, ctr.typeId);
        }
        return this;
    }

    noneOf(
        ...compCtrArr: ComponentConstructor<ComponentSchema, any>[]
    ): INoneOfMatcher<AllOf> {
        for (let ctr of compCtrArr) {
            this.noneOfBitset = setBit(this.noneOfBitset, ctr.typeId);
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
