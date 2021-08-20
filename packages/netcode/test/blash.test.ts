import {
    ARR_CONTAINER,
    composeVersion,
    DataType,
    DataTypeObect,
    decomposeVersion,
    Domain,
    Entity,
    NetArr,
    NetSerable,
    NetVar,
    NONE_CONTAINER,
    RpcType,
    ISchema,
    getSchemaByPrototype,
    IComp,
    Float,
} from "../src";
import { StringDomainOption } from "../src/data/string-domain-option";

@NetSerable("view")
export class ViewComponent extends IComp {
    @NetVar(DataType.INT)
    width: number = 0;
    @NetVar(DataType.INT)
    height: number = 0;
}

@NetSerable("reverseView")
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

@NetSerable("vec")
export class Vector {
    @NetVar(DataType.FLOAT)
    x: number = 0;
    @NetVar(Float)
    y: Float = new Float(0);
}

@NetSerable("logic")
export class LogicComponent extends IComp {
    @NetVar(DataType.BOOL)
    alive: boolean = false;
    @NetVar(Vector)
    pos: Vector = new Vector();
    @NetArr(DataType.STRING)
    ze: string[] = [];
}

@NetSerable("arr")
class ArrComp extends IComp {
    @NetArr(DataType.FLOAT)
    arr: number[] = [];
}

@NetSerable("lenArr")
class LengthArrComp extends ArrComp {
    @NetVar(DataType.INT)
    length: number = 0;
}

@NetSerable("lenArr")
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
                        refCtr: Vector,
                        container: NONE_CONTAINER,
                    },
                    paramIndex: 1,
                    propertyKey: "pos",
                },
                pos: {
                    type: { refCtr: Vector },
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
        expect(view.get(ViewComponent)).toBe(view);
        expect(ent.mget(ViewComponent)).toStrictEqual([view]);
        expect(ent.get(LogicComponent)).toBe(newLogic);
        expect(ent.mget(LogicComponent)).toStrictEqual([logic, newLogic]);
        expect(view.get(ViewComponentNoDecoration)).toBeNull();
        expect(ent.mget(ViewComponentNoDecoration)).toStrictEqual([]);
        expect(view.get(ArrComp)).toBeNull();
        expect(ent.has(ViewComponentNoDecoration)).toBeFalsy();
        expect(view.$comps.view === view);

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
        Domain.Create("main", new StringDomainOption(RpcType.SERVER));
        // expect(Domain.main).toBeTruthy();
    });

    test("Domain-create/get", () => {
        const domain1 = Domain.Create(
            "other",
            new StringDomainOption(RpcType.CLIENT)
        );
        const domain2 = Domain.Get("other");
        expect(domain1).toStrictEqual(domain2);
    });

    test("Domain-create-duplicate", () => {
        const domainName = "Domain-create-duplicate-other";
        const domain1 = Domain.Create(
            domainName,
            new StringDomainOption(RpcType.CLIENT)
        );
        expect(domain1).toBeTruthy();
        expect(() => {
            Domain.Create(domainName, new StringDomainOption(RpcType.CLIENT));
        }).toThrow();
    });
});

describe("Serable", () => {
    test("ser-deser", () => {
        // ser
        const view = new ViewComponent();
        const ent = new Entity(view);
        const domain = Domain.Create(
            "main",
            new StringDomainOption(RpcType.SERVER)
        );
        view.width = 123;
        view.height = 456;
        domain.reg(ent);

        expect(ent.toString()).toBe("Entity: id=1,version=0");

        // const template = JSON.stringify([
        //     1, 7, 0, 0, 0, 1, 0, -16929906, 456, 123,
        // ]);
        // expect(domain.asData()).toEqual(template);
        // deser
        const otherDomain = Domain.Create<string>(
            "other-main",
            new StringDomainOption(RpcType.CLIENT)
        );
        otherDomain.setData(domain.asData());
        const otherEnt = otherDomain.get(ent.id)!!;
        expect(otherEnt).toBeTruthy();
        const otherView = otherEnt.get(ViewComponent);
        expect(otherView).toBeTruthy();
        expect(otherView !== view);
        expect(otherView!.width).toEqual(view!.width);
        expect(otherView!.height).toEqual(view!.height);
    });

    test("ser-deser-array", () => {
        const serDomain = Domain.Create(
            "ser-domain",
            new StringDomainOption(RpcType.SERVER)
        );
        const serEnt0 = new Entity();
        serDomain.reg(serEnt0);
        const serArr = new ArrComp();
        const serEnt1 = new Entity(serArr);
        serDomain.reg(serEnt1);
        serArr.arr.push(1, 2, 3, 4);
        const data = serDomain.asData();

        const deserDomain = Domain.Create(
            "deser-domain",
            new StringDomainOption(RpcType.CLIENT)
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
            new StringDomainOption(RpcType.SERVER)
        );
        const serEnt0 = new Entity();
        serDomain.reg(serEnt0);
        const serLogic = new LogicComponent();
        const serEnt1 = new Entity(serLogic);
        serDomain.reg(serEnt1);
        serLogic.pos.x = 123;
        serLogic.pos.y.value = 456;

        const data = serDomain.asData();

        const deserDomain = Domain.Create(
            "deser-domain",
            new StringDomainOption(RpcType.CLIENT)
        );
        deserDomain.setData(data);
        const deserEnt1 = deserDomain.get(serEnt1.id)!;
        expect(deserEnt1.$comps.logic.alive).toEqual(serLogic.alive);
        expect(deserEnt1.$comps.logic.pos.x).toEqual(serLogic.pos.x);
        expect(deserEnt1.$comps.logic.pos.y.value).toEqual(
            serLogic.pos.y.value
        );
        expect(deserEnt1.$comps.logic.ze).toEqual(serLogic.ze);
        expect(deserEnt1.$comps.logic).toMatchObject({
            pos: {
                x: 123,
                y: { value: 456 },
            },
        });
    });

    let hasLogicUpdate = false;
    let logicTime = 0;
    let hasRenderUpdate = false;
    let renderTime = 0;
    let hasInit = false;
    let hasDestroy = false;
    @NetSerable("test-lifecycle")
    class LifecycleTestComp extends IComp {
        logicUpdate() {
            hasLogicUpdate = true;
            logicTime = this.logicTime.duration;
        }

        renderUpdate() {
            hasRenderUpdate = true;
            renderTime = this.renderTime.duration;
        }

        init() {
            hasInit = true;
        }

        destroy() {
            hasDestroy = true;
        }
    }

    test("lifecycle", () => {
        const d = Domain.Create(
            "default",
            new StringDomainOption(RpcType.SERVER)
        );
        const lifecycle = new LifecycleTestComp();
        const e = new Entity(lifecycle);
        d.reg(e);
        d.update(1);
        d.unreg(e);
        expect(hasLogicUpdate).toBe(true);
        expect(hasRenderUpdate).toBe(true);
        expect(renderTime).toBe(1);
        expect(logicTime).toBe(1);
        expect(hasInit).toBe(true);
        expect(hasDestroy).toBe(true);
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
