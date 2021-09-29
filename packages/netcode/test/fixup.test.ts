import {
    DataType,
    Domain,
    Entity,
    IComp,
    NetSerable,
    NetVar,
    RpcType,
} from "../src";
import { genLoop } from "./util";
import { StringDomainOption } from "@netcodejs/string-data-buffer";

beforeEach(() => {
    Domain.Clear();
});

describe("fixup", () => {
    @NetSerable("sub-alltype")
    class SubAllTypeComp extends IComp {
        @NetVar(DataType.INT)
        int = 0;
        @NetVar(DataType.I32)
        i32 = 0;
        @NetVar(DataType.FLOAT)
        float = 0;
        @NetVar(DataType.F32)
        f32 = 0;
        @NetVar(DataType.DOUBLE)
        double = 0;
        @NetVar(DataType.F64)
        f64 = 0;
        @NetVar(DataType.BOOL)
        bool = false;
    }

    @NetSerable("alltype")
    class AllTypeComp extends IComp {
        @NetVar(DataType.INT)
        int = 0;
        @NetVar(DataType.I32)
        i32 = 0;
        @NetVar(DataType.FLOAT)
        float = 0;
        @NetVar(DataType.F32)
        f32 = 0;
        @NetVar(DataType.DOUBLE)
        double = 0;
        @NetVar(DataType.F64)
        f64 = 0;
        @NetVar(DataType.BOOL)
        bool = false;
        @NetVar(SubAllTypeComp)
        obj = new SubAllTypeComp();
    }

    test("all-type", async () => {
        const server = Domain.Create(
            "server",
            new StringDomainOption(RpcType.SERVER)
        );
        const client = Domain.Create(
            "client",
            new StringDomainOption(RpcType.CLIENT)
        );

        const loop = genLoop(server, client);

        const allTypeComp = new AllTypeComp();
        allTypeComp.int = 123;
        allTypeComp.i32 = 124;
        allTypeComp.float = 123.1;
        allTypeComp.f32 = 124.1;
        allTypeComp.double = 125.1;
        allTypeComp.f64 = 126.1;
        allTypeComp.bool = true;

        allTypeComp.obj.int = 223;
        allTypeComp.obj.i32 = 224;
        allTypeComp.obj.float = 223.1;
        allTypeComp.obj.f32 = 224.1;
        allTypeComp.obj.double = 225.1;
        allTypeComp.obj.f64 = 226.1;
        allTypeComp.obj.bool = true;
        const payload = new Entity(allTypeComp);
        server.reg(payload);

        await loop();

        const payloadClient = client.get(payload.id)!;
        const allTypeClient = payloadClient.get(AllTypeComp)!;
        expect(allTypeClient.int).toBe(123);
        expect(allTypeClient.i32).toBe(124);
        // TODO: float32 precision
        // expect(allTypeClient.float).toBe(123.1);
        // expect(allTypeClient.f32).toBe(124.1);
        expect(allTypeClient.double).toBe(125.1);
        expect(allTypeClient.f64).toBe(126.1);
        expect(allTypeClient.bool).toBe(true);

        expect(allTypeClient.obj.int).toBe(223);
        expect(allTypeClient.obj.i32).toBe(224);
        // TODO: float32 precision
        // expect(allTypeClient.obj.float).toBe(223.1);
        // expect(allTypeClient.obj.f32).toBe(224.1);
        expect(allTypeClient.obj.double).toBe(225.1);
        expect(allTypeClient.obj.f64).toBe(226.1);
        expect(allTypeClient.obj.bool).toBe(true);
    });
});
