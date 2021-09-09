# @netcodejs/cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@netcodejs/cli.svg)](https://npmjs.org/package/@netcodejs/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@netcodejs/cli.svg)](https://npmjs.org/package/@netcodejs/cli)
[![License](https://img.shields.io/npm/l/@netcodejs/cli.svg)](https://github.com/netcodejs/netcode/blob/master/package.json)

<!-- toc -->

-   [@netcodejs/cli](#netcodejscli)
-   [Usage](#usage)
-   [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @netcodejs/cli
$ netcode-cli COMMAND
running command...
$ netcode-cli (-v|--version|version)
@netcodejs/cli/0.0.1 linux-x64 node-v14.17.4
$ netcode-cli --help [COMMAND]
USAGE
  $ netcode-cli COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

-   [`netcode-cli build [FILE]`](#netcode-cli-build-file)
-   [`netcode-cli code-gen [FILEPATH]`](#netcode-cli-code-gen-filepath)
-   [`netcode-cli help [COMMAND]`](#netcode-cli-help-command)

## `netcode-cli build [FILE]`

Bundle your application

```
USAGE
  $ netcode-cli build [FILE]

OPTIONS
  -c, --tsconfig=tsconfig    path to tsconfig
  -d, --outdir=outdir        path to dictionary of output
  -f, --format=cjs|esm|iife  [default: esm] the foramt of output
  -h, --help                 show CLI help
  -o, --outfile=outfile      path to output

EXAMPLE
  $ netcode-cli build
```

_See code: [src/commands/build.ts](https://github.com/netcodejs/netcode/blob/v0.0.1/src/commands/build.ts)_

## `netcode-cli code-gen [FILEPATH]`

describe the command here

```
USAGE
  $ netcode-cli code-gen [FILEPATH]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ netcode-cli code-gen
```

_See code: [src/commands/code-gen.ts](https://github.com/netcodejs/netcode/blob/v0.0.1/src/commands/code-gen.ts)_

## `netcode-cli help [COMMAND]`

display help for netcode-cli

```
USAGE
  $ netcode-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

<!-- commandsstop -->
