import { compName2ctr, hash2compName, SchemaClass } from "./component-variable";
import { IDataBuffer, ISerable, SupportNetDataType } from "./data/serializable";
import { Entity } from "./entity";
import { NULL_NUM } from "./macro";
import { MessageManager } from "./message-manager";
import { asSerable } from "./misc";

class EntityNotValidError extends Error {}
class EntityRepeatRegisteredError extends Error {}
class EntityGroupOutOfRangeYouCanOpenAutoResize extends Error {}
class DomainDuplicated extends Error {}

export type DomainConstructorParamters<
    TT extends new (...args: any) => any
> = TT extends new (_: any, ...args: infer P) => Domain ? P : never;
export class Domain<T extends SupportNetDataType = any> {
    private static _domainMap: Record<string, Domain> = Object.create(null);

    static Create<T extends SupportNetDataType = any>(
        name: string,
        dataBufferType: new (...args: any) => IDataBuffer<T>,
        ...args: DomainConstructorParamters<typeof Domain>
    ) {
        if (this._domainMap[name]) {
            throw new DomainDuplicated(name);
        }
        return (this._domainMap[name] = new Domain(
            dataBufferType,
            ...args
        )) as Domain<T>;
    }

    static Get<T extends SupportNetDataType>(name: string = "main") {
        return this._domainMap[name] as Domain<T>;
    }

    static Clear() {
        this._domainMap = Object.create(null);
    }

    private _entities: (Entity | null)[];
    public get entities() {
        return this._entities;
    }
    private _entityVersion: number[];
    private _destroyEntityId: number[];
    private _entityIdCursor = 0;
    private _internalMsgMng: MessageManager<T>;

    public constructor(
        public dataBufCtr: { new (...args: any[]): IDataBuffer<T> },
        public capacity = 50,
        public autoResize = true
    ) {
        this._entities = new Array<Entity>(capacity);
        this._entityVersion = new Array<number>(capacity);
        this._entityVersion.fill(0);
        this._destroyEntityId = new Array<number>();
        this._internalMsgMng = new MessageManager(new dataBufCtr());
    }

    reg(entity: Entity) {
        if (this.isValid(entity))
            throw new EntityRepeatRegisteredError(entity.toString());
        if (this._entityIdCursor == this.capacity) {
            if (this.autoResize) {
                this.resize(Math.ceil(this.capacity * 1.5));
            } else
                throw new EntityGroupOutOfRangeYouCanOpenAutoResize(
                    `Domain: capacity: ${this.capacity}; ` + entity.toString()
                );
        }

        const id = this._getEntityId();
        const version = this._entityVersion[id];
        this._reg(entity, id, version);
    }

    private _reg(entity: Entity, id: number, version: number) {
        entity.id = id;
        entity.version = version;
        this._entities[entity.id] = entity;
    }

    unreg(entity: Entity) {
        if (!this.isValid(entity))
            throw new EntityNotValidError(entity.toString());
        this._entityVersion[entity.id]++;
        this._destroyEntityId.push(entity.id);
        this._entities[entity.id] = null;
    }

    get(id: number) {
        return this._entities[id];
    }

    resize(newSize: number) {
        const oldSize = this.capacity;
        this._entities.length = newSize;
        this._entityVersion.length = newSize;
        this._entityVersion.fill(0, oldSize, newSize);
        this.capacity = newSize;
    }

    isValid(entity: Entity) {
        return (
            entity.id != NULL_NUM &&
            entity.version != NULL_NUM &&
            entity.version == this._entityVersion[entity.id]
        );
    }

    protected _ser() {
        for (let ent of this._entities) {
            if (!ent) continue;
            const comps = ent.comps;
            for (
                let compIdx = 0, len = comps.length;
                compIdx < len;
                compIdx++
            ) {
                const comp = comps[compIdx] as SchemaClass<{}>;
                const serableComp = asSerable(comp);
                if (!serableComp) {
                    console.warn(
                        `[Domain#_ser(compIdx: ${compIdx}, entity: ${ent})]comp is not Serable!`
                    );
                    continue;
                }
                this._internalMsgMng.sendComp(
                    ent.id,
                    ent.version,
                    compIdx,
                    comp,
                    false
                );
            }
        }
    }

    protected _der() {
        let params: ReturnType<MessageManager<T>["revcComp"]>;
        while ((params = this._internalMsgMng.revcComp())) {
            let ent = this._entities[params.entityId];
            if (
                ent &&
                (params.toDestory || ent.version !== params.entityVersion)
            ) {
                this.unreg(ent);
            }

            if (!ent && !params.toDestory) {
                ent = new Entity();
                this._reg(ent, params.entityId, params.entityVersion);
            }

            if (!ent) continue;

            let comp = ent.comps[params.compIdx] as ISerable;
            if (!comp) {
                const compName = hash2compName[params.hash];
                if (!compName) {
                    console.warn(
                        `[Domain#_deser]Cannot find compName by hash(${params.hash})!`
                    );
                    continue;
                }
                const ctr = compName2ctr[compName];
                comp = ent.add(ctr, params.compIdx);
            }
            comp.deser(this._internalMsgMng.dataBuffer);
        }
    }

    asData() {
        this._internalMsgMng.startSend();
        this._ser();
        return this._internalMsgMng.endSend();
    }

    setData(source: T) {
        this._internalMsgMng.startRecv(source);
        this._der();
        this._internalMsgMng.endRecv();
    }

    private _getEntityId() {
        return this._destroyEntityId.length > 0
            ? this._destroyEntityId.unshift()
            : this._entityIdCursor++;
    }
}
