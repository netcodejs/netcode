import {
    DataType,
    Domain,
    Entity,
    IComp,
    NetArr,
    NetSerable,
    NetVar,
    Role,
    Rpc,
    RpcType,
    RpcVar,
} from "../src";
import { StringDomainOption } from "../src/data/string-domain-option";
import { wait } from "./util";

beforeEach(() => {
    Domain.Clear();
});

describe("rpc", () => {
    @NetSerable("logic")
    class LogicComponent extends IComp {
        @NetVar(DataType.BOOL)
        alive: boolean = false;
        @NetArr(DataType.STRING)
        ze: string[] = [];

        @Rpc(Role.AUTHORITY)
        activate() {
            this.alive = true;
        }

        @Rpc(Role.AUTHORITY)
        setActive(@RpcVar(DataType.BOOL) inActive: boolean) {
            this.alive = inActive;
        }
    }

    test("valid", () => {
        const server = Domain.Create(
            "ser-domain",
            new StringDomainOption(RpcType.SERVER)
        );
        const serverLogic0 = new LogicComponent();
        const serverEnt0 = new Entity(serverLogic0);
        server.reg(serverEnt0);

        serverLogic0.activate();

        const client = Domain.Create(
            "deser-domain",
            new StringDomainOption(RpcType.CLIENT)
        );
        client.setData(server.asData());
        const clientEnt0 = client.get(serverEnt0.id)!;
        const clientLogic0 = clientEnt0.get(LogicComponent)!;
        expect(clientLogic0.alive).toEqual(serverLogic0.alive);

        serverLogic0.alive = false;
        client.setData(server.asData());
        expect(clientLogic0.alive).toEqual(false);

        clientLogic0.activate();
        // cs
        server.setData(client.asData());
        // sc
        client.setData(server.asData());
        expect(clientLogic0.alive).toEqual(true);

        clientLogic0.setActive(false);
        expect(clientLogic0.alive).toEqual(true);
        // cs
        server.setData(client.asData());
        // sc
        client.setData(server.asData());
        expect(clientLogic0.alive).toEqual(false);
    });
});

describe("rpc-return-type", () => {
    @NetSerable("consolee")
    class Console extends IComp {
        @NetVar(DataType.F32)
        callCount = 0;

        @Rpc(Role.AUTHORITY, DataType.BOOL)
        log(@RpcVar(DataType.INT) value: number) {
            if (value <= 0) return Promise.resolve(false);
            console.log(`[${this.domain.name}]I am number: ${value}`);
            return Promise.resolve(true);
        }
    }

    test("pure", async () => {
        const server = Domain.Create(
            "server-domain",
            new StringDomainOption(RpcType.SERVER)
        );
        const client = Domain.Create(
            "client-domain",
            new StringDomainOption(RpcType.CLIENT)
        );
        const serverLogic = new Console();
        const serverEnt = new Entity(serverLogic);
        server.reg(serverEnt);

        client.setData(server.asData());
        const clientLogic = client.get(serverEnt.id)!.get(Console)!;
        let check = false;

        clientLogic.log(1).then((result) => {
            check = result;
        });
        server.setData(client.asData());
        await wait();
        client.setData(server.asData());
        await wait();
        expect(check).toEqual(true);

        clientLogic.log(0).then((result) => {
            check = result;
        });
        server.setData(client.asData());
        await wait();
        client.setData(server.asData());
        await wait();
        expect(check).toEqual(false);
    });
});
