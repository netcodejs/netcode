export class ArrayMap<k extends string | number, v> {
    private _name2indexRecord: Record<k, number>;
    private _values: v[];

    constructor(source?: [k, v][]) {
        this._name2indexRecord = Object.create(null) as Record<k, number>;
        this._values = [];
        if (source != null) {
            this._values.length = source.length;
            for (let i = 0, len = source.length; i < len; i++) {
                let [key, value] = source[i];
                this._name2indexRecord[key] = i;
                this._values[i] = value;
            }
        }
    }

    get(key: k): v | null {
        const idx = this.getIndex(key);
        if (idx > -1) {
            return this._values[idx];
        }
        return null;
    }

    getIndex(key: k): number {
        return this._name2indexRecord[key] ?? -1;
    }

    getByIndex(index: number): v | null {
        return this._values[index];
    }

    has(key: k): boolean {
        return (this._name2indexRecord[key] ?? -1) > -1;
    }

    set(key: k, value: v) {
        let index = this._name2indexRecord[key];
        if (index == null) {
            index = this._values.length;
            this._name2indexRecord[key] = index;
        }
        this._values[index] = value;
        return index;
    }

    delete(key: k): [v | null, number] {
        const index = this.getIndex(key);
        if (index < 0) {
            return [null, -1];
        }
        return [this._values[index], index];
    }

    clear() {
        this._name2indexRecord = Object.create(null);
        this._values.length = 0;
    }

    get values(): v[] {
        return Array.from(this._values);
    }

    get readonlyValues(): readonly v[] {
        return this._values;
    }
}
