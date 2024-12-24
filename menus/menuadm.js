
const menuadm = (prefix, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender) => {
return `
╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╮
│𝐌𝐄𝐍𝐔 𝐀𝐃𝐌𝐈𝐍𝐒
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
│𝐆𝐑𝐔𝐏𝐎𝐒
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╯
╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╮
┃✾➛${prefix}resetarlink
┃✾➛${prefix}ban @ 
┃✾➛${prefix}promover @ 
┃✾➛${prefix}rebaixar @
┃✾➛${prefix}kick @
┃✾➛${prefix}antilink 1/0
┃✾➛${prefix}grupo a/f
┃✾➛${prefix}hidetag 
┃✾➛${prefix}cita 
┃✾➛${prefix}infogp
┃✾➛${prefix}marcar (todos)
┃✾➛${prefix}marcarwa (todos)
┃✾➛${prefix}grupo a/f
┃✾➛${prefix}descgp
┃✾➛${prefix}nomegp
┃✾➛${prefix}resetarlink
┃✾➛${prefix}linkgp
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╯
`
}
exports.menuadm = menuadm