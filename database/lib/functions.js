const fs = require('fs');
const cfonts = require("cfonts")
const moment = require("moment-timezone")
const { color } = require('./color')
const config = JSON.parse(fs.readFileSync("./settings/dono.json"))
prefix = config.prefix
prefixo = config.prefix

// ATUALIZAR AUTOMÁTICO QUANDO A INDEX OU O MENU FOR ALTERADO🥱
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./menus/menu.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('o menu foi editada, irei reiniciar...');
process.exit()
}
})

 let file = require.resolve(__filename);
 fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`${color(`Atualizando: ${__filename} \n ~>Cartooncatbot`,'red')}`)
delete require.cache[file];
require(file);
 })