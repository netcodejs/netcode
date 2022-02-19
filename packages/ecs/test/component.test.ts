import { component, struct, StructType, Types, COMPONENT_TYPES } from "../src";
describe("component", () => {
    beforeEach(() => {
        // @ts-ignore
        COMPONENT_TYPES.length = 0;
    });
    test("id", () => {
        const AComp = component({
            i32: Types.i32,
        });
        const BComp = component({
            i8: Types.i8,
            a: AComp,
        });
        expect(AComp.id).toBe(0);
        expect(BComp.id).toBe(1);
    });
});
