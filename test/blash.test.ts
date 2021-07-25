import {
    ARR_CONTAINER,
    composeVersion,
    DataType,
    DataTypeObect,
    decomposeVersion,
    Domain,
    Entity,
    NetArr,
    NetComp,
    NetVar,
    NONE_CONTAINER,
    Rpc,
    RpcType,
    ISchema,
    getSchemaByPrototype,
    IComp,
    StringDataBuffer,
} from "../src";

@NetComp("view")
export class ViewComponent extends IComp {
    @NetVar(DataType.INT)
    width: number = 0;
    @NetVar(DataType.INT)
    height: number = 0;
}

@NetComp("reverseView")
export class ReverseViewComponent extends IComp {
    @NetVar(DataType.INT)
    height: number = 0;
    @NetVar(DataType.INT)
    width: number = 0;
}

//@Component
export class ViewComponentNoDecoration extends IComp {
    @NetVar(DataType.INT)
    width: number = 0;
    @NetVar(DataType.INT)
    height: number = 0;
}

@NetComp("vec")
export class VectorComponent extends IComp {
    @NetVar(DataType.FLOAT)
    x: number = 0;
    @NetVar(DataType.FLOAT)
    y: number = 0;
}

@NetComp("logic")
export class LogicComponent extends IComp {
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
}

@NetComp("arr")
class ArrComp extends IComp {
    @NetArr(DataType.FLOAT)
    arr: number[] = [];
}

@NetComp("lenArr")
class LengthArrComp extends ArrComp {
    @NetVar(DataType.INT)
    length: number = 0;
}

@NetComp("lenArr")
class DynamicArrComp extends LengthArrComp {
    @NetVar(DataType.INT)
    opcaity: number = 10;
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
        Domain.Create("main", {
            type: RpcType.CLIENT,
            dataBufCtr: StringDataBuffer,
            capacity: 50,
        });
        // expect(Domain.main).toBeTruthy();
    });

    test("Domain-create/get", () => {
        const domain1 = Domain.Create("other", {
            type: RpcType.CLIENT,
            dataBufCtr: StringDataBuffer,
        });
        const domain2 = Domain.Get("other");
        expect(domain1).toStrictEqual(domain2);
    });

    test("Domain-create-duplicate", () => {
        const domainName = "Domain-create-duplicate-other";
        const domain1 = Domain.Create(domainName, {
            type: RpcType.CLIENT,
            dataBufCtr: StringDataBuffer,
        });
        expect(domain1).toBeTruthy();
        expect(() => {
            const domain2 = Domain.Create(domainName, {
                type: RpcType.CLIENT,
                dataBufCtr: StringDataBuffer,
            });
        }).toThrow();
    });
});

describe("Serable", () => {
    test("ser-deser", () => {
        // ser
        const view = new ViewComponent();
        const ent = new Entity(view);
        const domain = Domain.Create("main", {
            type: RpcType.SERVER,
            dataBufCtr: StringDataBuffer,
        });
        view.width = 123;
        view.height = 456;
        domain.reg(ent);

        const template = JSON.stringify([
            1, 7, 0, 0, 0, 1, 0, -16929906, 456, 123,
        ]);
        expect(domain.asData()).toEqual(template);

        // deser
        const otherDomain = Domain.Create<string>("other-main", {
            type: RpcType.CLIENT,
            dataBufCtr: StringDataBuffer,
        });
        otherDomain.setData(template);
        const otherEnt = otherDomain.getWithoutCheck(0)!!;
        expect(otherEnt).toBeTruthy();
        const otherView = otherEnt.get(ViewComponent);
        expect(otherView).toBeTruthy();
        expect(otherView !== view);
        expect(otherView!.width).toEqual(view!.width);
        expect(otherView!.height).toEqual(view!.height);
    });

    test("ser-deser-array", () => {
        const serDomain = Domain.Create("ser-domain", {
            type: RpcType.SERVER,
            dataBufCtr: StringDataBuffer,
        });
        const serEnt0 = new Entity();
        serDomain.reg(serEnt0);
        const serArr = new ArrComp();
        const serEnt1 = new Entity(serArr);
        serDomain.reg(serEnt1);
        serArr.arr.push(1, 2, 3, 4);
        const data = serDomain.asData();

        const deserDomain = Domain.Create("deser-domain", {
            type: RpcType.CLIENT,
            dataBufCtr: StringDataBuffer,
        });
        deserDomain.setData(data);
        const deserEnt1 = deserDomain.getWithoutCheck(serEnt1.id)!;
        expect(deserEnt1.$comps.arr.arr).toMatchObject(serArr.arr);
        expect(deserEnt1.$comps.arr.arr).toEqual([1, 2, 3, 4]);

        serArr.arr.push(5, 9);
        deserDomain.setData(serDomain.asData());
        expect(deserEnt1.$comps.arr.arr).toMatchObject(serArr.arr);
        expect(deserEnt1.$comps.arr.arr).toEqual([1, 2, 3, 4, 5, 9]);
    });

    test("ser-deser-obj", () => {
        const serDomain = Domain.Create("ser-domain", {
            type: RpcType.SERVER,
            dataBufCtr: StringDataBuffer,
        });
        const serEnt0 = new Entity();
        serDomain.reg(serEnt0);
        const serLogic = new LogicComponent();
        const serEnt1 = new Entity(serLogic);
        serDomain.reg(serEnt1);
        serLogic.pos.x = 123;
        serLogic.pos.y = 456;

        const data = serDomain.asData();

        const deserDomain = Domain.Create("deser-domain", {
            type: RpcType.CLIENT,
            dataBufCtr: StringDataBuffer,
        });
        deserDomain.setData(data);
        const deserEnt1 = deserDomain.getWithoutCheck(serEnt1.id)!;
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

describe("rpc", () => {
    test("valid", () => {
        const server = Domain.Create("ser-domain", {
            type: RpcType.SERVER,
            dataBufCtr: StringDataBuffer,
        });
        const serverLogic0 = new LogicComponent();
        const serverEnt0 = new Entity(serverLogic0);
        server.reg(serverEnt0);

        serverLogic0.abcv();

        const client = Domain.Create("deser-domain", {
            type: RpcType.CLIENT,
            dataBufCtr: StringDataBuffer,
        });
        client.setData(server.asData());
        const clientEnt0 = client.getWithoutCheck(0)!;
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
