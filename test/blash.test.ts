import {
    Component,
    IComponent,
    Param,
    ParamType,
    ComponentClassType,
    Domain,
    Entity,
    Schema,
} from "../src";

@Component
export class ViewComponent /* implements IComponent */ {
    @Param(ParamType.int)
    width: number = 0;
    @Param(ParamType.int)
    height: number = 0;

    // onLoad() {}
}

@Component
export class ReverseViewComponent {
    @Param(ParamType.int)
    height: number = 0;
    @Param(ParamType.int)
    width: number = 0;
}

//@Component
export class ViewComponentNoDecoration /* implements IComponent */ {
    @Param(ParamType.int)
    width: number = 0;
    @Param(ParamType.int)
    height: number = 0;

    // onLoad() {}
}

@Component
export class LogicComponent {
    @Param(ParamType.bool)
    alive: boolean = false;
}

type SchemaClass<T> = T & { __schema__: Schema };

describe("SchemaAndClassId", () => {
    test("basic", () => {
        let v1 = new ViewComponent() as SchemaClass<ViewComponent>;
        let v2 = new ViewComponent() as SchemaClass<ViewComponent>;

        let l1 = new LogicComponent() as SchemaClass<LogicComponent>;
        expect(v1.__schema__).toStrictEqual(v2.__schema__);
        expect(ComponentClassType.length).toEqual(3);
        expect(l1.__schema__).toMatchObject({
            count: 1,
            props: {
                0: {
                    type: ParamType.bool,
                    paramIndex: 0,
                    propertyKey: "alive",
                },
                alive: {
                    type: ParamType.bool,
                    paramIndex: 0,
                    propertyKey: "alive",
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
