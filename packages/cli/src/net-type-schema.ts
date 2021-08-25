import { TypeSchema } from "esbuild-plugin-type-schema";

export function NetTypeSchema() {
    return TypeSchema({
        onProgress(o, clsInfo) {
            console.log(clsInfo.target.getName());
        },
    });
}
