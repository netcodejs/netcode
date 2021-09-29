import { setBit } from "./util";
import { Chunk, ChunkConstructor, ChunkSchema } from "./chunk";

export interface IMatcher {
    match(mask: number): boolean;
    ctrs: ChunkConstructor[];
}

export type MatchTyple<T extends ChunkConstructor[]> =
    | INoneOfMatcher<T>
    | IAnyOfMatcher<T>
    | IAllOfMatcher<T>;

export interface INoneOfMatcher<T extends ChunkConstructor[]>
    extends IMatcher,
        IMatcher {}

export interface IAnyOfMatcher<T extends ChunkConstructor[]>
    extends INoneOfMatcher<T> {
    noneOf(...compCtrArr: ChunkConstructor[]): INoneOfMatcher<T>;
}

export interface IAllOfMatcher<T extends ChunkConstructor[]>
    extends IAnyOfMatcher<T> {
    anyOf(...compCtrArr: ChunkConstructor[]): IAnyOfMatcher<T>;
}

export class Matcher<AllOf extends ChunkConstructor[]>
    implements IAllOfMatcher<AllOf>
{
    allOfBitset = 0;
    anyOfBitset = 0;
    noneOfBitset = 0;
    ctrs: ChunkConstructor[] = [];

    private constructor() {}

    static allOf<AllOf extends ChunkConstructor[]>(
        ...compCtrArr: AllOf
    ): IAllOfMatcher<AllOf> {
        const matcher = new Matcher();
        for (let ctr of compCtrArr) {
            matcher.allOfBitset = setBit(matcher.allOfBitset, ctr.typeId);
            matcher.ctrs.push(ctr);
        }

        return matcher;
    }

    static anyOf(
        ...compCtrArr: ChunkConstructor<ChunkSchema, any>[]
    ): IAnyOfMatcher<[]> {
        const matcher = new Matcher();
        for (let ctr of compCtrArr) {
            matcher.anyOfBitset = setBit(matcher.anyOfBitset, ctr.typeId);
        }
        return matcher;
    }

    static noneOf(
        ...compCtrArr: ChunkConstructor<ChunkSchema, any>[]
    ): INoneOfMatcher<[]> {
        const matcher = new Matcher();
        for (let ctr of compCtrArr) {
            matcher.noneOfBitset = setBit(matcher.noneOfBitset, ctr.typeId);
        }
        return matcher;
    }

    anyOf(
        ...compCtrArr: ChunkConstructor<ChunkSchema, any>[]
    ): IAnyOfMatcher<AllOf> {
        for (let ctr of compCtrArr) {
            this.anyOfBitset = setBit(this.anyOfBitset, ctr.typeId);
        }
        return this;
    }

    noneOf(
        ...compCtrArr: ChunkConstructor<ChunkSchema, any>[]
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
