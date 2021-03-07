// import { NetComp, NetVar, Rpc, RpcType, RpcVar } from "./component";
// import { DataType } from "./misc";

// @NetComp("vec")
// export class VecComp {
//     @NetVar(DataType.int)
//     x = 0;
//     @NetVar(DataType.int)
//     y = 0;

//     hello(str: string) {
//         console.log("hello!");
//     }

//     @Rpc(RpcType.SERVER)
//     hiServer(@RpcVar(DataType.string) str: string) {
//         console.log("hi in server: " + str);
//     }

//     @Rpc(RpcType.CLIENT)
//     hiClient(@RpcVar(DataType.string) str: string) {
//         console.log("hi in client: " + str);
//     }
// }

// @NetComp("view")
// export class ViewComp {
//     @NetVar(VecComp)
//     pos = new VecComp();
// }
