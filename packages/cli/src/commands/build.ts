import { Command, flags } from "@oclif/command";
import { build, Format } from "esbuild";
import { TypeInfo } from "../esbuild-plugin-typeinfo";
import * as path from "path";

export default class Build extends Command {
    static description = "Bundle your application";

    static examples = [`$ netcode-cli build`];

    static flags = {
        help: flags.help({ char: "h" }),
        outfile: flags.string({ char: "o", description: "path to output" }),
        outdir: flags.string({
            char: "d",
            description: "path to dictionary of output",
        }),
        tsconfig: flags.string({
            char: "c",
            description: "path to tsconfig",
        }),
        format: flags.string({
            char: "f",
            description: "the foramt of output",
            options: ["cjs", "esm", "iife"],
            default: "esm",
        }),
    };

    static args = [{ name: "file" }];

    async run() {
        const { args, flags } = this.parse(Build);
        const p = path.join(process.cwd(), args.file);
        this.log(`handle entry file: ${p}`);
        await build({
            entryPoints: [p],
            plugins: [TypeInfo()],
            bundle: true,
            format: flags.format as Format,
        });
    }
}
