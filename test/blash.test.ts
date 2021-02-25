import {
    Comp,
    IComponent,
    CompProp,
    DataType,
    Domain,
    Entity,
    Schema,
    hash2compName,
    compName2ctr,
} from "../src";

@Comp("view")
export class ViewComponent implements IComponent {
    @CompProp(DataType.int)
    width: number = 0;
    @CompProp(DataType.int)
    height: number = 0;

    entity!: Entity;
    // onLoad() {}
}

@Comp("reverseView")
export class ReverseViewComponent {
    @CompProp(DataType.int)
    height: number = 0;
    @CompProp(DataType.int)
    width: number = 0;
}

//@Component
export class ViewComponentNoDecoration /* implements IComponent */ {
    @CompProp(DataType.int)
    width: number = 0;
    @CompProp(DataType.int)
    height: number = 0;

    // onLoad() {}
}

@Comp("vec")
export class VectorComponent {
    @CompProp(DataType.float)
    x: number = 0;
    @CompProp(DataType.float)
    y: number = 0;
}

@Comp("logic")
export class LogicComponent {
    @CompProp(DataType.bool)
    alive: boolean = false;
    @CompProp(VectorComponent)
    pos: VectorComponent = new VectorComponent();
}

type SchemaClass<T> = T & { __schema__: Schema };
describe("SchemaAndClassId", () => {
    test("basic", () => {
        let v1 = new ViewComponent() as SchemaClass<ViewComponent>;
        let v2 = new ViewComponent() as SchemaClass<ViewComponent>;

        let l1 = new LogicComponent() as SchemaClass<LogicComponent>;
        expect(v1.__schema__).toStrictEqual(v2.__schema__);
        expect((ReverseViewComponent.prototype as any).__schema__.name).toEqual(
            "reverseView"
        );
        expect(Object.keys(hash2compName).length).toEqual(4);
        expect(Object.keys(compName2ctr).length).toEqual(4);
        expect(l1.__schema__).toMatchObject({
            count: 2,
            props: {
                0: {
                    type: DataType.bool,
                    paramIndex: 0,
                    propertyKey: "alive",
                },
                alive: {
                    type: DataType.bool,
                    paramIndex: 0,
                    propertyKey: "alive",
                },
                1: {
                    type: VectorComponent,
                    paramIndex: 1,
                    propertyKey: "pos",
                },
                pos: {
                    type: VectorComponent,
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
    });
    test("rmComp/hasComp/getComp-black", () => {
        const ent = new Entity();
        const view = ent.add(ViewComponent)!;
        const logic = ent.add(LogicComponent)!;

        ent.rm(view);
        ent.rm(logic);
        const newLogic = ent.add(LogicComponent);
        const hasView = ent.has(ViewComponent);
        const getView = ent.get(ViewComponent);

        expect(newLogic).toBeTruthy();
        expect(newLogic === logic).not.toBeTruthy();
        expect(hasView).not.toBeTruthy();
        expect(getView).not.toBeTruthy();
    });
    test("addComp-white-no-decoration", () => {
        const entity = new Entity();
        const view = entity.add(ViewComponentNoDecoration);
        expect(view).not.toBeTruthy();
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
