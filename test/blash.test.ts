import {
    Component,
    IComponent,
    Param,
    ParamType,
    ComponentClassType,
    Domain,
    Entity,
} from "../src";

@Component
export class ViewComponent /* implements IComponent */ {
    @Param(ParamType.int)
    width: number = 0;
    @Param(ParamType.int)
    height: number = 0;

    // onLoad() {}
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

type SchemaClass<T> = T & { __schema__: any };

test("basic", () => {
    let v1 = new ViewComponent() as SchemaClass<ViewComponent>;
    let v2 = new ViewComponent() as SchemaClass<ViewComponent>;

    let l1 = new LogicComponent() as SchemaClass<LogicComponent>;
    expect(v1.__schema__).toStrictEqual(v2.__schema__);
    expect(ComponentClassType.length).toEqual(2);
    expect(l1.__schema__).toMatchObject({
        count: 1,
        props: {
            0: { type: ParamType.bool, paramIndex: 0, propertyKey: "alive" },
            alive: {
                type: ParamType.bool,
                paramIndex: 0,
                propertyKey: "alive",
            },
        },
    });
});

describe("entity-componrnt", () => {
    test("addComp-black", () => {
        const ent = new Entity();
        const view = ent.addComp(ViewComponent)!;
        const logic = ent.addComp(LogicComponent)!;

        expect(view).toBeTruthy();
        expect(logic).toBeTruthy();
    });
    test("rmComp/hasComp/getComp-black", () => {
        const ent = new Entity();
        const view = ent.addComp(ViewComponent)!;
        const logic = ent.addComp(LogicComponent)!;

        ent.rmComp(view);
        ent.rmComp(logic);
        const newLogic = ent.addComp(LogicComponent);
        const hasView = ent.hasComp(ViewComponent);
        const getView = ent.getComp(ViewComponent);

        expect(newLogic).toBeTruthy();
        expect(newLogic === logic).not.toBeTruthy();
        expect(hasView).not.toBeTruthy();
        expect(getView).not.toBeTruthy();
    });
    test("addComp-white-no-decoration", () => {
        const entity = new Entity();
        const view = entity.addComp(ViewComponentNoDecoration);
        expect(view).not.toBeTruthy();
    });
});
