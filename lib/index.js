import makeWASocket from './Socket/index.js';
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export { makeWASocket };
export default makeWASocket;

import chalk from "chalk";

const art = `
█▀ █▄░█ █ ▀█▀ █░█
▄█ █░▀█ █ ░█░ █▀█░

█▄▄ ▄▀█ █ █░  █▀
█▄█ █▀█ █ █▄▄ ▄█░
`;

console.log(art);
console.log("────────────────────────────────────────────");
console.log(
  chalk.whiteBright("launch • connect • enjoy") + "\n" +
  chalk.whiteBright("thank you") + chalk.blueBright("for using this baileys ✨") + "\n" +
  chalk.cyan("telegram: ") + chalk.blueBright("@Sniith")
);
console.log("────────────────────────────────────────────\n");
