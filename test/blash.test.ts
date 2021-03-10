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
    SchemaClass,
} from "../src";
import {
    IDataBufferReader,
    IDatabufferWriter,
    ISerable,
} from "../src/data/serializable";
import { StringDataBuffer } from "../src/data/string-databuffer";

@NetComp("view")
export class ViewComponent /*  implements IComponent */ {
    // __schema__!: Readonly<Schema>;
    // entity!: Entity;

    @NetVar(DataType.int)
    width: number = 0;
    @NetVar(DataType.int)
    height: number = 0;

    // onLoad() {}
}

@NetComp("reverseView")
export class ReverseViewComponent {
    @NetVar(DataType.int)
    height: number = 0;
    @NetVar(DataType.int)
    width: number = 0;
}

//@Component
export class ViewComponentNoDecoration /* implements IComponent */ {
    @NetVar(DataType.int)
    width: number = 0;
    @NetVar(DataType.int)
    height: number = 0;

    // onLoad() {}
}

@NetComp("vec")
export class VectorComponent {
    @NetVar(DataType.float)
    x: number = 0;
    @NetVar(DataType.float)
    y: number = 0;
}

@NetComp("logic")
export class LogicComponent {
    @NetVar(DataType.bool)
    alive: boolean = false;
    @NetVar(VectorComponent)
    pos: VectorComponent = new VectorComponent();
    @NetArr(DataType.string)
    ze: string[] = [];
}

@NetComp("arr")
class ArrComp {
    @NetArr(DataType.float)
    arr: number[] = [];
}

beforeEach(() => {
    Domain.Clear();
});

describe("SchemaAndClassId", () => {
    test("basic", () => {
        let v1 = new ViewComponent() as SchemaClass<ViewComponent>;
        let v2 = new ViewComponent() as SchemaClass<ViewComponent>;

        let l1 = new LogicComponent() as SchemaClass<LogicComponent>;
        expect(v1.__schema__).toStrictEqual(v2.__schema__);
        expect((ReverseViewComponent.prototype as any).__schema__.name).toEqual(
            "reverseView"
        );
        expect(Object.keys(hash2compName).length).toEqual(5);
        expect(Object.keys(compName2ctr).length).toEqual(5);
        expect(l1.__schema__).toMatchObject({
            count: 3,
            props: {
                0: {
                    type: { dataType: DataType.bool },
                    paramIndex: 0,
                    propertyKey: "alive",
                },
                alive: {
                    type: { dataType: DataType.bool },
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
                        dataType: DataType.string,
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
    test("addComp-black", () => {
        const ent = new Entity();
        const view = ent.add(ViewComponent)!;
        const logic = ent.add(LogicComponent)!;

        expect(view).toBeTruthy();
        expect(logic).toBeTruthy();

        expect(ent.comps.length).toEqual(2);
        expect(ent.comps.indexOf(view)).toBeGreaterThan(-1);
        expect(ent.comps.indexOf(logic)).toBeGreaterThan(-1);

        const view2 = ent.add(ViewComponent)!;
        expect(view2).toBeTruthy();
        expect(ent.comps.indexOf(view2)).toBeGreaterThan(-1);
    });
    test("rmComp/hasComp/getComp-black", () => {
        const ent = new Entity();
        const view = ent.add(ViewComponent)!;
        const logic = ent.add(LogicComponent)!;

        // ent.rm(view);
        // ent.rm(logic);
        const newLogic = ent.add(LogicComponent);
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
        const entity = new Entity();
        expect(() => {
            entity.add(ViewComponentNoDecoration);
        }).toThrowError();
    });
});

describe("Quick-Access", () => {
    interface QuickAccess {
        logic: LogicComponent;
        view: ViewComponent;
    }
    test("basic", () => {
        const ent = new Entity<QuickAccess>();
        expect(ent.$comps.logic).not.toBeTruthy();
        const logic = ent.add(LogicComponent);
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
        const domain1 = Domain.Create("other", StringDataBuffer);
        const domain2 = Domain.Get("other");
        expect(domain1 === domain2).toBeTruthy();
    });

    test("Domain-create-duplicate", () => {
        const domainName = "Domain-create-duplicate-other";
        const domain1 = Domain.Create(domainName, StringDataBuffer);
        expect(domain1).toBeTruthy();
        expect(() => {
            const domain2 = Domain.Create(domainName, StringDataBuffer);
        }).toThrow();
    });
});

describe("Serable", () => {
    test("ser-deser", () => {
        // ser
        const ent = new Entity();
        const view = ent.add(ViewComponent)!;
        const domain = Domain.Create("main", StringDataBuffer);
        view.width = 123;
        view.height = 456;
        domain.reg(ent);

        expect(domain.asData()).toEqual(
            JSON.stringify([0, 0, 0, -16929906, 456, 123])
        );

        // deser
        const otherDomain = Domain.Create<string>(
            "other-main",
            StringDataBuffer
        );
        otherDomain.setData(JSON.stringify([0, 0, 0, -16929906, 456, 123]));
        const otherEnt = otherDomain.get(0)!!;
        expect(otherEnt).toBeTruthy();
        const otherView = otherEnt.get(ViewComponent);
        expect(otherView).toBeTruthy();
        expect(otherView).toMatchObject(view);
    });

    test("ser-deser-array", () => {
        const serDomain = Domain.Create("ser-domain", StringDataBuffer);
        const serEnt0 = new Entity();
        serDomain.reg(serEnt0);
        const serEnt1 = new Entity();
        serDomain.reg(serEnt1);
        const serArr = serEnt1.add(ArrComp);
        serArr.arr.push(1, 2, 3, 4);
        const data = serDomain.asData();

        const deserDomain = Domain.Create("deser-domain", StringDataBuffer);
        deserDomain.setData(data);
        const deserEnt1 = deserDomain.get(serEnt1.id)!;
        expect(deserEnt1.$comps.arr).toMatchObject(serArr);
        expect(deserEnt1.$comps.arr.arr).toEqual([1, 2, 3, 4]);

        serArr.arr.push(5, 9);
        deserDomain.setData(serDomain.asData());
        expect(deserEnt1.$comps.arr).toMatchObject(serArr);
        expect(deserEnt1.$comps.arr.arr).toEqual([1, 2, 3, 4, 5, 9]);
    });

    test("ser-deser-obj", () => {
        const serDomain = Domain.Create("ser-domain", StringDataBuffer);
        const serEnt0 = new Entity();
        serDomain.reg(serEnt0);
        const serEnt1 = new Entity();
        serDomain.reg(serEnt1);
        const serLogic = serEnt1.add(LogicComponent);
        serLogic.pos.x = 123;
        serLogic.pos.y = 456;

        const data = serDomain.asData();

        const deserDomain = Domain.Create("deser-domain", StringDataBuffer);
        deserDomain.setData(data);
        const deserEnt1 = deserDomain.get(serEnt1.id)!;
        expect(deserEnt1.$comps.logic).toMatchObject(serLogic);
        expect(deserEnt1.$comps.logic).toMatchObject({
            pos: {
                x: 123,
                y: 456,
            },
        });
    });
});

describe("benchmark", () => {
    const serDomain = Domain.Create("ser-domain", StringDataBuffer);
    const deserDomain = Domain.Create("deser-domain", StringDataBuffer);
    const serEnt0 = new Entity();
    serDomain.reg(serEnt0);
    const serEnt1 = new Entity();
    serDomain.reg(serEnt1);
    const serArr = serEnt1.add(ArrComp);
    serArr.arr.push(1, 2, 3, 4);

    const start = Date.now();
    for (let i = 0; i < 1000000; i++) {
        deserDomain.setData(serDomain.asData());
    }
    expect(Date.now() - start).toBeLessThan(2000);
});
