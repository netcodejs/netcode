import { Component, IComponent, Param, ParamType, ComponentClassType } from "./component";

@Component
export class ViewComponrnt implements IComponent {
    @Param(ParamType.int)
    width: number = 0;
    @Param(ParamType.int)
    height: number = 0;

    onLoad() {

    }
}

@Component
export class LogicComponent {
    @Param(ParamType.bool)
    alive: boolean = false
}

let v1 = new ViewComponrnt();
let v2 = new ViewComponrnt();

let l1 = new LogicComponent();
// @ts-ignore
console.log(v1.__schema__, v2.__schema__, v1.__schema__ === v2.__schema__, l1.__schema__, ComponentClassType);