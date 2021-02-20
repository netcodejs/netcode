import {
    Component,
    IComponent,
    Param,
    ParamType,
    ComponentClassType,
} from "../src/component";

@Component
export class ViewComponent implements IComponent {
    @Param(ParamType.int)
    width: number = 0;
    @Param(ParamType.int)
    height: number = 0;

    onLoad() {}
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
