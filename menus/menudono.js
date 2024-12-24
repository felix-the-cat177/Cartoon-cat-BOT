const menudono = (prefix, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender) => {
return `
╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╮
│𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╯
╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╮
┃✾➛ *Bot:* ${nomeBot}
┃✾➛ *Dono* ${nomeDono}
┃✾➛ *Número dono:* ${numeroDono}
┃✾➛ *Você:* @${pushname}
┃✾➛ *Prefixo:* ${prefix}
┃✾➛ *Hora:* ${hora}
┃✾➛ *Data:* ${data}
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╯
╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╮
│𝐁𝐎𝐓
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╯
╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╮
┃✾➛${prefix}reiniciar
┃✾➛${prefix}infocmd_add
┃✾➛${prefix}infocmd_del
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╯
`
}
exports.menudono = menudono
