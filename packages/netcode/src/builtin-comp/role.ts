import { IComp } from "../comp-interface";
import { Short } from "../base-dirty-data";
import { NetSerable, NetVar, Rpc } from "../comp.dec";
import {
    IDataBufferReader,
    IDataBufferWriter,
    ISerable,
} from "@netcodejs/iser";
import { DataType, Role, RpcType } from "../comp-schema";

@NetSerable("role")
export class RoleComp extends IComp implements ISerable {
    //#region property
    @NetVar(Short)
    $local = new Short(Role.AUTHORITY);
    get local(): Role {
        return this.$local.value;
    }
    // set local(value: Role) {
    //     this.$local.value = value;
    // }

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
    ser(buffer: IDataBufferWriter<any>): void {
        this.$local.ser(buffer);
        this.$remote.ser(buffer);
    }

    deser(buffer: IDataBufferReader<any>): void {
        this.$remote.deser(buffer);
        this.$local.deser(buffer);
    }
    //#endregion

    @Rpc(Role.AUTHORITY, DataType.BOOL)
    async upgrade() {
        if (
            this.local == Role.AUTHORITY &&
            this.remote != Role.AUTONMOUS_PROXY
        ) {
            this.remote = Role.AUTONMOUS_PROXY;
            return true;
        }
        return false;
    }

    @Rpc(Role.AUTHORITY, DataType.BOOL)
    async downgrade() {
        if (
            this.local == Role.AUTHORITY &&
            this.remote != Role.SIMULATED_PROXY
        ) {
            this.remote = Role.SIMULATED_PROXY;
            return true;
        }
        return false;
    }

    init() {
        const type = this.domain.option.type;
        this.$local.value =
            type === RpcType.SERVER ? Role.AUTHORITY : Role.SIMULATED_PROXY;
        this.$remote.value =
            type === RpcType.SERVER ? Role.SIMULATED_PROXY : Role.AUTHORITY;
    }
}
