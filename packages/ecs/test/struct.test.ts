import { struct, StructType, Types } from "../src";

describe("struct", () => {
    test("definition: flag", () => {
        const UndefinedStruct = struct();
        const EmptyStruct = struct({});

        expect(UndefinedStruct).toStrictEqual({
            schema: [],
            byteLength: 0,
            alignedByteLength: 0,
            isFlag: true,
        } as StructType);

        expect(EmptyStruct).toStrictEqual({
            schema: [],
            byteLength: 0,
            alignedByteLength: 0,
            isFlag: true,
        } as StructType);
    });

    test("definition: non-flag", () => {
        const A = struct({
            i32: Types.i32,
            u8: Types.u8,
        });
        expect(A).toMatchObject({
            schema: [
                {
                    propertyKey: "i32",
                    type: Types.i32,
                    offset: 0,
                    typedOffset: 0,
                    isComplex: false,
                },
                {
                    propertyKey: "u8",
                    type: Types.u8,
                    offset: 4,
                    typedOffset: 4,
                    isComplex: false,
                },
            ],
            byteLength: 5,
            alignedByteLength: 8,
            isFlag: false,
        });
    });

    test("definition: schema resort", () => {
        const A = struct({
            u8: Types.u8,
            i32: Types.i32,
        });
        expect(A).toMatchObject({
            schema: [
                {
                    propertyKey: "i32",
                    type: Types.i32,
                    offset: 0,
                    typedOffset: 0,
                    isComplex: false,
                },
                {
                    propertyKey: "u8",
                    type: Types.u8,
                    offset: 4,
                    typedOffset: 4,
                    isComplex: false,
                },
            ],
            byteLength: 5,
            alignedByteLength: 8,
            isFlag: false,
        });
    });

    test("definition: inner struct", () => {
        const AStruct = struct({
            i32: Types.i32,
        });
        const BStruct = struct({
            i8: Types.i8,
            a: AStruct,
        });
        expect(BStruct).toMatchObject({
            schema: [
                { isComplex: true, type: AStruct },
                {
                    isComplex: false,
                    type: Types.i8,
                    offset: 8,
                    typedOffset: 8,
                },
            ],
        });
    });
});
