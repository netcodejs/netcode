import { IComp } from "../comp-interface";
import { Short } from "../base-dirty-data";
import { NetSerable, NetVar, Rpc } from "../comp-decorator";
import {
    IDataBufferReader,
    IDatabufferWriter,
    ISerable,
} from "../data/serializable";
import { DataType, RpcType } from "../comp-schema";

export enum Role {
    AUTHORITY = 0,
    SIMULATED_PROXY,
    AUTONMOUS_PROXY,
}

@NetSerable("role")
export class RoleComp extends IComp implements ISerable {
    //#region property
    @NetVar(Short)
    $local = new Short(Role.AUTHORITY);
    get local(): Role {
        return this.$local.value;
    }
    set local(value: Role) {
        this.$local.value = value;
    }

    @NetVar(Short)
    $remote = new Short(Role.SIMULATED_PROXY);
    get remote(): Role {
        return this.$remote.value;
    }
    set remote(value: Role) {
        this.$remote.value = value;
    }
    //#endregion

    //#region interface ISerable implement
    ser(buffer: IDatabufferWriter<any>): void {
        this.$local.ser(buffer);
        this.$remote.ser(buffer);
    }

    deser(buffer: IDataBufferReader<any>): void {
        this.$remote.deser(buffer);
        this.$local.deser(buffer);
    }
    //#endregion

    @Rpc(RpcType.SERVER, DataType.BOOL)
    async upgrade() {
        if (
            this.local != Role.AUTHORITY &&
            this.remote != Role.AUTONMOUS_PROXY
        ) {
            this.remote = Role.AUTONMOUS_PROXY;
            return true;
        }
        return false;
    }

    @Rpc(RpcType.SERVER, DataType.BOOL)
    async downgrade() {
        if (
            this.local != Role.AUTHORITY &&
            this.remote != Role.SIMULATED_PROXY
        ) {
            this.remote = Role.SIMULATED_PROXY;
            return true;
        }
        return false;
    }
}
