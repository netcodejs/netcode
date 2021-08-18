export const logTrace = console.log.bind(console);

export const logWarn = console.log.bind(console);

export const logError = console.log.bind(console);

export const pringStack = console.log.bind(console);

export function logThrow(msg: string): void {
  throw new Error(msg);
}
