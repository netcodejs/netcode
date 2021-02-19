import { Macro } from "./macro";

export class Entity {
    id = Macro.NULL_NUM
    version = Macro.NULL_NUM
    constructor() {
        Object.seal(this);
    }

    toString() {
        return `Entity: id=${this.id},version=${this.version}`
    }
}