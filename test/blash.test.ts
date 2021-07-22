import {
    ARR_CONTAINER,
    compName2ctr,
    composeVersion,
    DataType,
    DataTypeObect,
    decomposeVersion,
    Domain,
    Entity,
    hash2compName,
    NetArr,
    NetComp,
    NetVar,
    NONE_CONTAINER,
    Rpc,
    RpcType,
    ISchema,
    getSchemaByPrototype,
    IComp,
} from "../src";
import {
    IDataBufferReader,
    IDatabufferWriter,
    ISerable,
} from "../src/data/serializable";
import { StringDataBuffer } from "../src/data/string-databuffer";

@NetComp("view")
export class ViewComponent implements IComp {
    @NetVar(DataType.INT)
    width: number = 0;
    @NetVar(DataType.INT)
    height: number = 0;

    fixedUpdate(
        entity: Entity<any>,
        domain: Domain<any>,
        compIdx: number
    ): void {}
}

@NetComp("reverseView")
export class ReverseViewComponent implements IComp {
    @NetVar(DataType.INT)
    height: number = 0;
    @NetVar(DataType.INT)
    width: number = 0;

    fixedUpdate(
        entity: Entity<any>,
        domain: Domain<any>,
        compIdx: number
    ): void {}
}

//@Component
export class ViewComponentNoDecoration implements IComp {
    @NetVar(DataType.INT)
    width: number = 0;
    @NetVar(DataType.INT)
    height: number = 0;

    fixedUpdate(
        entity: Entity<any>,
        domain: Domain<any>,
        compIdx: number
    ): void {}
}

@NetComp("vec")
export class VectorComponent implements IComp {
    @NetVar(DataType.FLOAT)
    x: number = 0;
    @NetVar(DataType.FLOAT)
    y: number = 0;
    fixedUpdate(
        entity: Entity<any>,
        domain: Domain<any>,
        compIdx: number
    ): void {}
}

@NetComp("logic")
export class LogicComponent implements IComp {
    @NetVar(DataType.BOOL)
    alive: boolean = false;
    @NetVar(VectorComponent)
    pos: VectorComponent = new VectorComponent();
    @NetArr(DataType.STRING)
    ze: string[] = [];

    @Rpc(RpcType.SERVER)
    abcv() {
        this.alive = true;
    }

    fixedUpdate(
        entity: Entity<any>,
        domain: Domain<any>,
        compIdx: number
    ): void {}
}

@NetComp("arr")
class ArrComp implements IComp {
    @NetArr(DataType.FLOAT)
    arr: number[] = [];
    fixedUpdate(
        entity: Entity<any>,
        domain: Domain<any>,
        compIdx: number
    ): void {}
}

@NetComp("lenArr")
class LengthArrComp extends ArrComp implements IComp {
    @NetVar(DataType.INT)
    length: number = 0;
    fixedUpdate(
        entity: Entity<any>,
        domain: Domain<any>,
        compIdx: number
    ): void {}
}

@NetComp("lenArr")
class DynamicArrComp extends LengthArrComp implements IComp {
    @NetVar(DataType.INT)
    opcaity: number = 10;
    fixedUpdate(
        entity: Entity<any>,
        domain: Domain<any>,
        compIdx: number
    ): void {}
}

beforeEach(() => {
    Domain.Clear();
});

describe("SchemaAndClassId", () => {
    test("basic", () => {
        let v1 = new ViewComponent() as ISchema & ViewComponent;
        let v2 = new ViewComponent() as ISchema & ViewComponent;

        let l1 = new LogicComponent() as ISchema & LogicComponent;
        expect(v1.__schema__).toStrictEqual(v2.__schema__);
        expect((ReverseViewComponent.prototype as any).__schema__.name).toEqual(
            "reverseView"
        );
        // expect(Object.keys(hash2compName).length).toEqual(5);
        // expect(Object.keys(compName2ctr).length).toEqual(5);
        expect(l1.__schema__).toMatchObject({
            count: 3,
            props: {
                0: {
                    type: { dataType: DataType.BOOL },
                    paramIndex: 0,
                    propertyKey: "alive",
                },
                alive: {
                    type: { dataType: DataType.BOOL },
                    paramIndex: 0,
                    propertyKey: "alive",
                },
                1: {
                    type: {
                        dataType: DataTypeObect,
                        refCtr: VectorComponent,
                        container: NONE_CONTAINER,
                    },
                    paramIndex: 1,
                    propertyKey: "pos",
                },
                pos: {
                    type: { refCtr: VectorComponent },
                },
                2: {
                    type: {
                        dataType: DataType.STRING,
                        container: ARR_CONTAINER,
                    },
                },
            },
        });
    });

    test("PropertyKeySort", () => {
        const viewProto = ViewComponent.prototype as any;
        const reverseViewProtp = ReverseViewComponent.prototype as any;
        const fakeSchema = {
            count: 2,
            props: {
                0: { propertyKey: "height" },
                1: { propertyKey: "width" },
            },
        };
        expect(viewProto.__schema__).toMatchObject(fakeSchema);
        expect(reverseViewProtp.__schema__).toMatchObject(fakeSchema);
    });
});

describe("entity-componrnt", () => {
    test("rmComp/hasComp/getComp-black", () => {
        const view = new ViewComponent();
        const logic = new LogicComponent();
        const newLogic = new LogicComponent();
        const ent = new Entity(view, logic, newLogic);
        const hasView = ent.has(ViewComponent);
        const getView = ent.get(ViewComponent);

        expect(newLogic).toBeTruthy();
        expect(newLogic === logic).not.toBeTruthy();
        // expect(hasView).not.toBeTruthy();
        expect(hasView).toBeTruthy();
        // expect(getView).not.toBeTruthy();
        expect(getView).toBeTruthy();
    });
    test("addComp-white-no-decoration", () => {
        expect(() => {
            new Entity(new ViewComponentNoDecoration());
        }).toThrowError();
    });
});

describe("Quick-Access", () => {
    interface QuickAccess {
        logic: LogicComponent;
        view: ViewComponent;
    }
    test("basic", () => {
        const logic = new LogicComponent();
        const ent = new Entity<QuickAccess>(logic);
        expect(ent.$comps.logic).toBeTruthy();
        expect(logic === ent.$comps.logic).toBeTruthy();
    });
});

describe("Version-Check", () => {
    test("compose-and-decompose", () => {
        const version = 12345;
        const destroyed = true;
        const Version = composeVersion(version, destroyed);
        const [outVersion, outDestroyed] = decomposeVersion(Version);
        expect(version).toEqual(outVersion);
        expect(destroyed).toEqual(outDestroyed);
    });

    test("compose-and-decompose-1", () => {
        const version = 12345;
        const destroyed = false;
        const Version = composeVersion(version, destroyed);
        const [outVersion, outDestroyed] = decomposeVersion(Version);
        expect(version).toEqual(outVersion);
        expect(destroyed).toEqual(outDestroyed);
    });

    test("compose-and-decompose-overfull", () => {
        const version = 1 << 30;
        const destroyed = false;
        const Version = composeVersion(version, destroyed);
        const [outVersion, outDestroyed] = decomposeVersion(Version);
        expect(version % ((1 << 30) - 1)).toEqual(outVersion);
        expect(destroyed).toEqual(outDestroyed);
    });

    test("compose-and-decompose-overfull-2", () => {
        const version = (1 << 30) + 1;
        const destroyed = false;
        const Version = composeVersion(version, destroyed);
        const [outVersion, outDestroyed] = decomposeVersion(Version);
        expect(version % ((1 << 30) - 1)).toEqual(outVersion);
        expect(destroyed).toEqual(outDestroyed);
    });
});

describe("Domain-instance", () => {
    test("Domain-main", () => {
        Domain.Create("main", StringDataBuffer, 50);

        // expect(Domain.main).toBeTruthy();
    });

    test("Domain-create/get", () => {
        const domain1 = Domain.Create(
            "other",
            StringDataBuffer,
            RpcType.CLIENT
        );
        const domain2 = Domain.Get("other");
        expect(domain1 === domain2).toBeTruthy();
    });

    test("Domain-create-duplicate", () => {
        const domainName = "Domain-create-duplicate-other";
        const domain1 = Domain.Create(
            domainName,
            StringDataBuffer,
            RpcType.CLIENT
        );
        expect(domain1).toBeTruthy();
        expect(() => {
            const domain2 = Domain.Create(
                domainName,
                StringDataBuffer,
                RpcType.CLIENT
            );
        }).toThrow();
    });
});

describe("Serable", () => {
    test("ser-deser", () => {
        // ser
        const ent = new Entity();
        const view = ent.add(ViewComponent)!;
        const domain = Domain.Create("main", StringDataBuffer, RpcType.SERVER);
        view.width = 123;
        view.height = 456;
        domain.reg(ent);

        const template = JSON.stringify([
            1, 6, 0, 0, 0, 0, -16929906, 456, 123,
        ]);
        expect(domain.asData()).toEqual(template);

        // deser
        const otherDomain = Domain.Create<string>(
            "other-main",
            StringDataBuffer,
            RpcType.CLIENT
        );
        otherDomain.setData(template);
        const otherEnt = otherDomain.get(0)!!;
        expect(otherEnt).toBeTruthy();
        const otherView = otherEnt.get(ViewComponent);
        expect(otherView).toBeTruthy();
        expect(otherView!.width).toEqual(view!.width);
        expect(otherView!.height).toEqual(view!.height);
    });

    test("ser-deser-array", () => {
        const serDomain = Domain.Create(
            "ser-domain",
            StringDataBuffer,
            RpcType.SERVER
        );
        const serEnt0 = new Entity();
        serDomain.reg(serEnt0);
        const serEnt1 = new Entity();
        serDomain.reg(serEnt1);
        const serArr = serEnt1.add(ArrComp);
        serArr.arr.push(1, 2, 3, 4);
        const data = serDomain.asData();

        const deserDomain = Domain.Create(
            "deser-domain",
            StringDataBuffer,
            RpcType.CLIENT
        );
        deserDomain.setData(data);
        const deserEnt1 = deserDomain.get(serEnt1.id)!;
        expect(deserEnt1.$comps.arr.arr).toMatchObject(serArr.arr);
        expect(deserEnt1.$comps.arr.arr).toEqual([1, 2, 3, 4]);

        serArr.arr.push(5, 9);
        deserDomain.setData(serDomain.asData());
        expect(deserEnt1.$comps.arr.arr).toMatchObject(serArr.arr);
        expect(deserEnt1.$comps.arr.arr).toEqual([1, 2, 3, 4, 5, 9]);
    });

    test("ser-deser-obj", () => {
        const serDomain = Domain.Create(
            "ser-domain",
            StringDataBuffer,
            RpcType.SERVER
        );
        const serEnt0 = new Entity();
        serDomain.reg(serEnt0);
        const serEnt1 = new Entity();
        serDomain.reg(serEnt1);
        const serLogic = serEnt1.add(LogicComponent);
        serLogic.pos.x = 123;
        serLogic.pos.y = 456;

        const data = serDomain.asData();

        const deserDomain = Domain.Create(
            "deser-domain",
            StringDataBuffer,
            RpcType.CLIENT
        );
        deserDomain.setData(data);
        const deserEnt1 = deserDomain.get(serEnt1.id)!;
        expect(deserEnt1.$comps.logic.alive).toEqual(serLogic.alive);
        expect(deserEnt1.$comps.logic.pos).toMatchObject(serLogic.pos);
        expect(deserEnt1.$comps.logic.ze).toEqual(serLogic.ze);
        expect(deserEnt1.$comps.logic).toMatchObject({
            pos: {
                x: 123,
                y: 456,
            },
        });
    });
});

// describe("benchmark", () => {
//     const serDomain = Domain.Create("ser-domain", StringDataBuffer);
//     const deserDomain = Domain.Create("deser-domain", StringDataBuffer);
//     const serEnt0 = new Entity();
//     serDomain.reg(serEnt0);
//     const serEnt1 = new Entity();
//     serDomain.reg(serEnt1);
//     const serArr = serEnt1.add(ArrComp);
//     serArr.arr.push(1, 2, 3, 4);

//     const start = Date.now();
//     for (let i = 0; i < 1000000; i++) {
//         deserDomain.setData(serDomain.asData());
//     }
//     expect(Date.now() - start).toBeLessThan(2000);
// });

describe("rpc", () => {
    test("valid", () => {
        const server = Domain.Create(
            "ser-domain",
            StringDataBuffer,
            RpcType.SERVER
        );
        const serverEnt0 = new Entity();
        const serverLogic0 = serverEnt0.add(LogicComponent);
        server.reg(serverEnt0);

        serverLogic0.abcv();

        const client = Domain.Create(
            "deser-domain",
            StringDataBuffer,
            RpcType.CLIENT
        );
        client.setData(server.asData());
        const clientEnt0 = client.get(0)!;
        const clientLogic0 = clientEnt0.get(LogicComponent)!;
        expect(clientLogic0.alive).toEqual(serverLogic0.alive);

        serverLogic0.alive = false;
        client.setData(server.asData());
        expect(clientLogic0.alive).toEqual(false);

        clientLogic0.abcv();
        // cs
        server.setData(client.asData());
        // sc
        client.setData(server.asData());
        expect(clientLogic0.alive).toEqual(true);
    });
});

describe("inherit", () => {
    test("class", () => {
        const ArrCompSchema = getSchemaByPrototype(ArrComp.prototype)!!;
        expect(ArrCompSchema.name).toEqual("arr");

        const LenArrCompSchema = getSchemaByPrototype(
            LengthArrComp.prototype
        )!!;
        const DynamicArrCompSchema = getSchemaByPrototype(
            DynamicArrComp.prototype
        )!!;
        expect(LenArrCompSchema.name).toEqual("lenArr");
        expect(LenArrCompSchema.raw).toEqual(
            expect.arrayContaining(ArrCompSchema.raw)
        );

        expect(LenArrCompSchema.count).toEqual(2);
        expect(ArrCompSchema.count).toEqual(1);

        expect(LenArrCompSchema).not.toStrictEqual(ArrCompSchema);

        expect(DynamicArrCompSchema.raw).toEqual(
            expect.arrayContaining(ArrCompSchema.raw)
        );
        expect(DynamicArrCompSchema.raw).toEqual(
            expect.arrayContaining(LenArrCompSchema.raw)
        );
    });
});
