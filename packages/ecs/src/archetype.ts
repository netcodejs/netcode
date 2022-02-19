import { COMPONENT_TYPES } from ".";
import { Entity } from "./concept";
import { SparseSet } from "./util";

let layoutConstCount = 0;
const LAYOUT_BYTEPERELEMENT = layoutConstCount++;
const LAYOUT_COMP_COUNT = layoutConstCount++;
const LAYOUT_COMP_ID_BASE = layoutConstCount++;

export class Archetype {
    set = new SparseSet();
    layout = new Uint32Array(layoutConstCount + 32);
    readonly mask: number;

    constructor(mask: number) {
        this.mask = mask;

        let byteLength = 0;
        let bit = 0;
        let compCount = 0;

        while (mask > 0) {
            if ((mask & 1) > 0) {
                const type = COMPONENT_TYPES[bit];
                byteLength += type.alignedByteLength;
                this.layout[LAYOUT_COMP_ID_BASE + compCount++] = bit;
            }
            mask >>= 1;
            bit++;
        }

        this.layout[LAYOUT_BYTEPERELEMENT] = byteLength;
        this.layout[LAYOUT_COMP_COUNT] = compCount;
    }

    get(entity: Entity) {
        return this.set.sparse[entity.id];
    }

    has(entity: Entity) {
        return this.set.has(entity.id);
    }

    translate(entity: Entity, from: Archetype) {
        // const newIndex = this.set.add(entity.id);
        // const oldIndex = from.get(entity);
        // for (let typeId in this.components) {
        //     const newBuffer = this.components[typeId];
        //     const oldBuffer = from.components[typeId];
        //     if (!newBuffer || oldBuffer) continue;
        //     newBuffer[newIndex] = oldBuffer[oldIndex];
        // }
        // from.set.remove(entity.id);
    }
}
