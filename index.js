//｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼☆｡
//.        ESSE BOT FOI FEITO PELA BASE DO SANDRO MD CASO EU FAZER UMA VERSÃO CRIPTOGRADO VOU ESTAR DANDO CREDITO A ELE!

// Eu Félix PROÍBO REPASSAR OU VENDER ESSE BOT!!!! CASO EU SABIA QUE VC VENDEU E VIM PEDIR SUPORTE VOU MANDAR TOMAR NO OLHO DO C*!
//｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼☆｡



const {default: AnyWASocket,
delay,templateMessage,makeInMemoryStore,downloadContentFromMessage,DisconnectReason,
makeWASocket,
sleep,
useMultiFileAuthState,
fetchLatestBaileysVersion,
prepareWAMessageMedia,
useSingleFileAuthState } = require ('@whiskeysockets/baileys')
const fs = require("fs")
const chalk = require("chalk")
const P = require("pino")
const axios = require('axios')
const readline = require('readline')
const clui = require("clui")
const cfonts = require('cfonts')
const NodeCache = require('node-cache')
const util = require("util")
const fetch = require("node-fetch")
const yts = require("yt-search")
const Crypto = require("crypto")
const infoSystem = require('os')
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")
const googleImage = require("g-i-s")
const cheerio = require("cheerio")
const BodyForm = require("form-data")
const mimetype = require("mime-types")
const speed = require("performance-now")
const { color } = require("./database/lib/color")
const { fetchJson } = require("./database/lib/fetcher")
const { fromBuffer } = require("file-type")
const { banner, banner2 } = require("./database/lib/functions")
const { tmpdir } = require("os")
// DATA E HORA //
const moment = require("moment-timezone")
const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss")
const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY")

//APIS AQUI 🥱❤️
const SANDRO_MD = "SANDRO_MD_BOT"
const SANDRO_API = "ToonForce"
const CARTOON_CAT_API = "ToonForce"

/// ⚜️ARQUIVOS JSON ⚜️ ////
const config = JSON.parse(fs.readFileSync("./settings/dono.json"))
const upload = require("./database/lib/functions")
const TelegraPh = require("./database/lib/functions")
const img = JSON.parse(fs.readFileSync("./database/imagens/logo.json"))
const antilink = JSON.parse(fs.readFileSync('./database/grupos/antilink.json'))
const { menu } = require("./menus/menu.js")
const { menudono } = require("./menus/menudono.js")

const { menuadm } = require("./menus/menuadm.js")
const { infomestre } = require("./menus/infomestre.js")

///  prefixo e dono aqui ///
const logo = img.logo
const nomeBot = config.nomeBot
const numeroBot = config.numeroBot
const nomeDono = config.nomeDono
const numeroDono = config.numeroDono
const dono = config.numeroDono
const prefix = config.prefix
const prefixo = config.prefix
//

// Você tem que atualizar quando for editar o bot!
const versaoBot = "1.0.0"
const totalcmd = "142"

let girastamp = speed()
let latensi = speed() - girastamp

const usePairingCode = process.argv.includes('--use-pairing-code')
const msgRetryCounterCache = new NodeCache();
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

async function startbot() {
        const { state, saveCreds } = await useMultiFileAuthState('./database/ToonForce-qr-code')
        const { version } = await fetchLatestBaileysVersion();
        const question = (text) => new Promise((resolve) => rl.question(text, resolve));
        const store = makeInMemoryStore({
            logger: P().child({
                level: 'debug',
                stream: 'store'
            })
        })


        const cartoon = makeWASocket({
            version,
            logger: P({ level: "silent" }),
            usePairingCode,
            mobile: false,
            browser: ["FireFox (linux)"],
            auth: state,
            msgRetryCounterCache,
            defaultQueryTimeoutMs: undefined,
            getMessage: async (key) => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id)
                    return msg.message || undefined
                } return {
                    conversation: "bot"
                }
            },
      patchMessageBeforeSending: (message) => {
         const requiresPatch = !!(
            message?.interactiveMessage
         );
         if (requiresPatch) {
            message = {
               viewOnceMessage: {
                  message: {
                     messageContextInfo: {
                        deviceListMetadataVersion: 2,
                        deviceListMetadata: {},
                     },
                     ...message,
                  },
               },
            };
         }
         return message;
      }
        });

        function limparNumero(entrada) {
            const numeros = entrada.replace(/\D/g, '');
            const numeroLimpo = numeros.replace(/^(\d{2})(9)?(\d{8,9})$/, '$1$3');
            return numeroLimpo;
        }

        if (!cartoon.authState.creds.registered) {
            const phoneNumber = await question(`\nDigite seu número do WhatsApp:\nEx: ("553172595934")\n `);
            const numeroLimpo = limparNumero(phoneNumber);
            const code = await cartoon.requestPairingCode(numeroLimpo);
            console.log(`Seu código de conexão é: \n\n${code}\n~>`);
            console.log(`Abra seu WhatsApp, vá em ("Aparelhos Conectados > Conectar um novo Aparelho > Conectar usando Número.")`)
        } else {
            console.log(                     'Conectado...')
        }

const banner = cfonts.render(("TOONFORCE +JAVASCRIPT"), {
font: "tiny",
align: "center",
colors: [`red`,`white`,`red`],
})

        console.log('[ BOT ]')
        store.bind(cartoon.ev)

        cartoon.ev.on("creds.update", saveCreds)
        store.bind(cartoon.ev)
        cartoon.ev.on("chats.set", () => {
            console.log("Tem conversas", store.chats.all())
        })
        cartoon.ev.on("contacts.set", () => {
            console.log("Tem contatos", Object.values(store.contacts))
        })

        cartoon.ev.on("connection.update", (update) => {
            const { connection, lastDisconnect } = update
            if (connection === "close") {
                const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
                console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
                if (shouldReconnect) {
                    startkirito()                    
                }

} else if(connection === "open") {
console.log(banner.string)
console.log(`${color(`${nomeBot} [ Conectado com sucesso ]`,'red')}`)
}
})
        async function getMessage(key) {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg?.message
            }
            return {
                conversation: "aaa"
            }
        }

store.bind(cartoon.ev)
cartoon.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})

cartoon.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})

cartoon.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);

if(shouldReconnect) {
startbot()
}

} else if(connection === "open") {
console.log(`${color(`BOT CONECTADO COM SUCESSO`,'green')}`)
}

})


cartoon.ev.on('messages.upsert', async (msg) => {
m = msg
  try {
//*******************************************//
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
 }
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
//***************[ FUNÇÕES ]***************//
const info = msg.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''


const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
bidy =  budy.toLowerCase()


///////////////
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? cartoon.sendMessage(from, {text: teks.trim(), mentions: memberr}) : cartoon.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == "admin") admins.push(i.id)
if(i.admin == "superadmin") admins.push(i.id)
}
return admins
}
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const arg = body.substring(body.indexOf(" ") + 1)
const numeroBot = cartoon.user.id.split(":")[0]+"@s.whatsapp.net"
const argss = body.split(/ +/g)
const testat = body
const ants = body
const isGroup = info.key.remoteJid.endsWith("@g.us")
const tescuk = ["0@s.whatsapp.net"]
const reagir = async (idgp, emj) => {
cartoon.sendMessage(idgp, {react: {text: emj, key: info.key}} )
}
const q = args.join(" ")
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const sender = isGroup ? info.key.participant : info.key.remoteJid
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await cartoon.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ""
const groupDesc = isGroup ? groupMetadata.desc : ""
const groupMembers = isGroup ? groupMetadata.participants : ""
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ""
const canal = config.canal
const grupo = config.grupo
const text = args.join(" ")
const c = args.join(' ')
const reply = (texto) => {
cartoon.sendMessage(from, { text: texto }, {quoted: contato})
} 

function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }

// VERIFICADOS ⭐️
const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName:`${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}



//configruracao de dono, adm etc...
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isCreator = sender.includes(numeroDono)
//const isCreator = numeroDono.includes(numeroDono)
const groupId = isGroup ? groupMetadata.jid : ''
banChats = true
const argis = bidy.trim().split(/ +/)

///





// Consts isQuoted
const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage")
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isModobn = type === "extendedTextMessage" && content.includes("jogosGpMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")
const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

outrasVariavel = "bot"

let {name, urlMinhaApikey, aurlSexo, compreSuaApikey, cdd, crtt, baterai, charging, autoHourActivate, emoji_bot, blocked, multi, nopref, variosPrefixo, leitor} = outrasVariavel


// FUNCAO DE ANTILINK \\
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
cartoon.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
cartoon.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
cartoon.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }




// RESPOSTAS DOS COMANDOS \\
msg = {
registro: "_[❗] Para ver o menu você precisa se registrar use /login_",
botadm: "[❗] bot precisa ser adm",
aguarde: "[❗] aguarde uns minutinho estou processado👨‍🦯",
dono: "[❗] este comando so podera ser usado pelo meu dono💣",
grupo: "[❗] este comando so pode ser usado em grupo🫂",
private: "[❗] este comando so pode ser usado no privado👀",
premium: "[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*",
adm: "este comando so pode ser usado por um adm",
botadm: "[❗] bot precisa ser adm pra executar esse comando",
erro: "[❗] ocorreu uma falha no comando por favor aguarde ate meu dono ajeitar", 
dono: "[❗] Esse comando so pode ser usado pelo meu dono!!!",
abrindomenu: "_[❗]Carregando menu aguarde..._",
}


////////////////////////////////////
 if (!isGroup && isCmd) console.log(
color(`𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐍𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','red'),color(nomeBot, 'red'),'\n',
color('⪼ USUÁRIO:','red'),color(pushname,'red'),'\n',
color('⪼ COMANDO:','red'),color(budy, 'red'),'\n',
color('⪼ HORÁRIO:','red'),color(hora,'red'),'\n',
color('⪼ DAТA:','red'),color(data,'red'),'\n')

if (!isCmd && !isGroup) console.log(
color(`𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐍𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','red'),color(nomeBot, 'red'),'\n',
color('⪼ USUÁRIO:','red'),color(pushname,'red'),'\n',
color('⪼ MENSAGEM:','red'),color(budy,'red'),'\n',
color('⪼ HORÁRIO:','red'),color(hora,'red'),'\n',
color('⪼ DATA:','red'),color(data,'red'),'\n')

if (isCmd && isGroup) console.log(
color(`𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎`,'yellow'),'\n',
color('⪼ NOME DO BOT:','yellow'),color(nomeBot, 'red'),'\n',
color('⪼ NOME DO GRUPO:','yellow'),color(groupName,'red'),'\n',
color('⪼ USUÁRIO:','yellow'),color(pushname,'red'),'\n',
color('⪼ COMANDO:','yellow'),color(budy,'red'),'\n',
color('⪼ HORÁRIO:','yellow'),color(hora,'red'),'\n',
color('⪼ DATA:','yellow'),color(data,'red'),'\n')

if (!isCmd && isGroup) console.log(
color(`𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎`,'yellow'),'\n',
color('⪼ NOME DO BOT:','yellow'),color(nomeBot, 'red'),'\n',
color('⪼ NOME DO GRUPO:','yellow'),color(groupName,'red'),'\n',
color('⪼ USUÁRIO:','yellow'),color(pushname,'red'),'\n',
color('⪼ MENSAGEM:','yellow'),color(budy,'red'),'\n',
color('⪼ HORÁRIO:','yellow'),color(hora,'red'),'\n',
color('⪼ DATA:','yellow'),color(data,'red'),'\n')

switch (comando) {
// Começo dos comandos com prefix //
//     /\/\                              
//    (° v °)                             
//    /|    |\                            
//     V---V                             
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//


case "menudono":
reagir(from, "🌟")
templateMassage = {
image: {url:"./database/imagens/menu.jpg",
quoted: contato},
caption: menudono(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.reagir1,
mediaType:2,
//templateButtons: templateButtons
}}
}
cartoon.sendMessage(from, templateMassage)
break

case "menu":
await cartoon.sendMessage(from, { react: { text: `🕛`, key: info.key } });
        await cartoon.sendMessage(from, { react: { text: `🕒`, key: info.key } });
        await cartoon.sendMessage(from, { react: { text: `🕕`, key: info.key } });
        await cartoon.sendMessage(from, { react: { text: `🕘`, key: info.key } });
        await cartoon.sendMessage(from, { react: { text: `🕛`, key: info.key } });
        await cartoon.sendMessage(from, { react: { text: `🖤`, key: info.key } });
        await cartoon.sendMessage(from, { react: { text: `🖤`, key: info.key } });
templateMassage = {
image: {url:"./database/imagens/menu.jpg",
quoted: contato},
caption: menu(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, totalcmd, versaoBot, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.reagir1,
mediaType:2,
//templateButtons: templateButtons
}}
}
cartoon.sendMessage(from, templateMassage)
break

case "menuadm":
reagir(from, "👑")
templateMassage = {
image: {url:"./database/imagens/menu.jpg",
quoted: contato},
caption: menuadm(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
cartoon.sendMessage(from, templateMassage)
break

case "infomestre":
case 'infodono':
reagir(from, "ℹ️")
templateMassage = {
image: {url:"./database/imagens/menu.jpg",
quoted: contato},
caption: infomestre(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
cartoon.sendMessage(from, templateMassage)
break

case "menu18":
reagir(from, "🔞")
menu18 = `╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━╮
│   𝐌𝐄𝐍𝐔 𝟏𝟖+
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━╯
╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╮
┃✾➛ *Bot:* ${nomeBot}
┃✾➛ *Dono* ${nomeDono}
┃✾➛ *Número dono:* ${numeroDono}
┃✾➛ *Você:* @${pushname}
┃✾➛ *Prefixo:* ${prefix}
┃✾➛ *Hora:* ${hora}
┃✾➛ *Data:* ${data}
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╯
╭━━━━𖧹ٜ⛩ٜ𖧹•━━━╮
│ 𝐏𝐋𝐀𝐐𝐔𝐈𝐍𝐇𝐀𝐒
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━╯
╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╮
┃✾➛${prefix}plaq
┃✾➛${prefix}plaq1
┃✾➛${prefix}plaq2
┃✾➛${prefix}plaq3
┃✾➛${prefix}plaq4
┃✾➛${prefix}plaq5
┃✾➛${prefix}plaq6
┃✾➛${prefix}plaq7
┃✾➛${prefix}plaq8
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╯`
await cartoon.sendMessage(from, { image: { url: "./database/imagens/menu.jpg"}, caption: menu18, mentions: [sender]}, {quoted: info}) 
break

case "menubrincadeira":
case "menubrincadeiras":
case "brincadeira":
case "brincadeiras":
reagir(from, "🤡")
menubrincadeira = `╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━╮
│   𝐌𝐄𝐍𝐔 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━╯
╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╮
┃✾➛ *Bot:* ${nomeBot}
┃✾➛ *Dono* ${nomeDono}
┃✾➛ *Número dono:* ${numeroDono}
┃✾➛ *Você:* @${pushname}
┃✾➛ *Prefixo:* ${prefix}
┃✾➛ *Hora:* ${hora}
┃✾➛ *Data:* ${data}
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╯

╭━━━━𖧹ٜ⛩ٜ𖧹•━━━╮
│𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━╯
╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╮
┃✾➛${prefix}corno
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╯

╭━━━━𖧹ٜ⛩ٜ𖧹•━━━╮
│𝐄𝐔 𝐀𝐌𝐎 𝐓𝐔𝐃𝐎
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━╯
╭━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╮
┃✾➛${prefix}euamor_cachorro
┃✾➛${prefix}euamor_mae
┃✾➛${prefix}euamor_pai
┃✾➛${prefix}euamor_gato
┃✾➛${prefix}euamor_cavalo
┃✾➛${prefix}euamor_carro
┃✾➛${prefix}euamor_natureza
┃✾➛${prefix}euamor_comida
┃✾➛${prefix}euamor_viagens
┃✾➛${prefix}euamor_musica
┃✾➛${prefix}euamor_futebol
┃✾➛${prefix}euamor_tecnologia
┃✾➛${prefix}euamor_esporte
┃✾➛${prefix}euamor_ciencia
┃✾➛${prefix}euamor_filmes
┃✾➛${prefix}euamor_series
┃✾➛${prefix}euamor_amigos
┃✾➛${prefix}euamor_livros
┃✾➛${prefix}euamor_chocolate
┃✾➛${prefix}euamor_pizza
┃✾➛${prefix}euamor_sol
┃✾➛${prefix}euamor_chuva
┃✾➛${prefix}euamor_festas
┃✾➛${prefix}euamor_artes
┃✾➛${prefix}euamor_novelas
┃✾➛${prefix}euamor_aventura
┃✾➛${prefix}euamor_teatro
┃✾➛${prefix}euamor_cozinhar
┃✾➛${prefix}euamor_animais
┃✾➛${prefix}euamor_familia
┃✾➛${prefix}euamor_flor
╰━━━━𖧹ٜ⛩ٜ𖧹•━━━━━╯`
await cartoon.sendMessage(from, { image: { url: "./database/imagens/menu.jpg"}, caption: menubrincadeira, mentions: [sender]}, {quoted: info})
break


case "transmição": 
case "transmitir": {
if (!isCreator) return reply(resposta.dono)
if (!args.join(" ")) return reply(`kd o texto amiguinho?`)
const tm = args.join(' ')
let getGroups = await cartoon.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Transmitido para os grupos com sucesso`)
waifuzdd = await axios.get('https://waifu.pics/api/sfw/neko')
for (let i of anu) {
await delay(1500)
templateButtons = [
{index: 1, urlButton: {displayText: 'Criador', url: canal}},
{index: 2, urlButton: {displayText: 'Dono', url: grupo}},
]
templateMessago = {
image: {url:waifuzdd.data.url,
quoted: contato},
caption: tm,
footer: 'transmissão',
//templateButtons: templateButtons
}
cartoon.sendMessage(i, templateMessago)
}
reply("✔️pronto...")
}
break


case "ppt": 
if (!isGroup) return reply(resposta.grupo)
if (args.length < 1) return reply('exemplo: /ppt pedra')
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 50)
pptb = ppy
pph = `Você ganhou ${ppg} em money`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(linguagem.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do bot"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case "bot": 
{cartoon.sendMessage(
from, {audio: fs.readFileSync('./audio/xandao.mp3'), mimetype: 'audio/mp4', ptt: true 
},
{quoted: contato}
)
}
break

case "linkgp":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
const link = await cartoon.groupInviteCode(from)
reply(`https://chat.whatsapp.com/${link} `)
break

case "resetlinkgp":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
try {
await cartoon.groupRevokeInvite(from)
reply("Link do grupo resetado com sucesso  ")
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "sair":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
reply("Meu dono Pxz mandou eu sair kkkk")
await delay(1000)
try {
await cartoon.groupLeave(from)
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "idgp":
reply(`Id : ${from}`)
break

case 'totalcmd2': 
case 'totalcmd':
case 'totalcomando':
if(!isCreator) reply ("Apenas o criador")
reply(`*Ola ${pushname}*

ATUALMENTE EU TENHO UM TOTAL DE: ${totalcmd} COMANDOS✅`);
break

case 'nick': case 'gerarnick':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
try {
nick = args.join(' ')
if(!q) return reply(`Escreveva um nome para eu enviar ele com letras modificadas.\n*Exemplo:* ${prefix+command}LB Bot`);
axios.get(`https://cartooncatapi.xyz/api/fazernick?nome=${q}&apikey=${CARTOON_CAT_API}`)
.then(dados => {
var emoji = `😺`
nicks = dados.data
txt = '[ Nicks Gerados Com Sucesso! ]\n\n'
for (let i = 0; i < nicks.length; i++) {
txt += `${emoji} ${nicks[i]}\n`
}
txt += `\n
𝐂𝐀𝐑𝐓𝐎𝐎𝐍 𝐂𝐀𝐓 𝐀𝐏𝐈`
reply(`${txt.trim()}`)
}).catch(e => {
reply('Acho que a api caiu, mas volta logo logo...')  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou noo foi possivel executar esta ação, espere retornar")   
} else {
reply("Erro ao gerar as fontes modificadas!") 
}
}
break

case 'pinterest':
reply("*Aguarde um momento.*") 
try {
if(!q) return reply(`Exemplo: ${prefix+command} Thais Carla`)
reply(`*Aguarde enviando* _CARTOON CAT API_`)
await cartoon.sendMessage(from, {image: {url: (`https://cartooncatapi.xyz/api/pinterest?text=${q}&apikey=${CARTOON_CAT_API}`)}, caption: 'Aqui esta sua imagem.'}, {quoted:info})
} catch (e) {
reply(`alguma coisa deu errado entre em contato com o Félix para descobrir.`)
}
break

case 'rebaixar': case 'demote':
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply('mamaco sem adm 🤠')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsepm = await cartoon.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????')
else if (responsepm[0].status === "200") return reply('Vacilou perdeu o adm kkkkk')
else if (responsepm[0].status === "404") return reply('Esse cara nem ta no grupo')
else return reply('tente dnv')
break

case 'metadinha':
try {
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/metadinha?apikey=${SANDRO_MD}`);
cartoon.sendMessage(from, {image: {url: ABC.link1}}).catch(e => {
return reply("Erro..")
})
cartoon.sendMessage(from, {image: {url: ABC.link2}}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

// área de brincadeiras 😜 BY FÉLIX

// ANTI NOME MODIFICADA / EMOJI
function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

case 'chance':
if(!isGroup)
var avb = body.slice(7)
if(args.length < 1) return cartoon.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`}, {quoted: info})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)} é de... ${random}%`
cartoon.sendMessage(from, {text: hasil, mentions: [sender]}, {quoted: info})
break

function gerarnum() {
  return Math.floor(Math.random() * 100) + 1;
  }
  
    case 'euamor_cachorro':
 reply(`💖 *${gerarnum()}% de amor por cachorro* 👈\n\n Você ama cachorro!`);
    break;
  
  case 'euamor_mae':
 reply(`💖 *${gerarnum()}% de amor por sua mãe* 👈\n\n Você ama muito sua mãe!`);
    break;
  
  case 'euamor_pai':
  reply(`💖 *${gerarnum()}% de amor por seu pai* 👈\n\n Você ama muito seu pai!`);
    break;
  
  case 'euamor_gato':
 reply(`💖 *${gerarnum()}% de amor por gato* 👈\n\n Você ama muito os gatos!`);
    break;
  
  case 'euamor_cavalo':
  reply(`💖 *${gerarnum()}% de amor por cavalos* 👈\n\n Você ama muito os cavalos!`);
    break;
  
  case 'euamor_carro':
  reply(`💖 *${gerarnum()}% de amor por carros* 👈\n\n Você ama muito os carros!`);
    break;

  case 'euamor_natureza':
 reply(`💖 *${gerarnum()}% de amor pela natureza* 👈\n\n Você ama muito a natureza!`);
    break;

  case 'euamor_comida':
   reply(`💖 *${gerarnum()}% de amor por comida* 👈\n\n Você ama muito comer!`);
    break;

  case 'euamor_viagens':
   reply(`💖 *${gerarnum()}% de amor por viajar* 👈\n\n Você ama muito viajar!`);
    break;

  case 'euamor_musica':
   reply(`💖 *${gerarnum()}% de amor por música* 👈\n\n Você ama muito a música!`);
    break;

  case 'euamor_futebol':
  reply(`💖 *${gerarnum()}% de amor por futebol* 👈\n\n Você ama muito o futebol!`);
    break;

  case 'euamor_tecnologia':
 reply(`💖 *${gerarnum()}% de amor por tecnologia* 👈\n\n Você ama muito a tecnologia!`);
    break;

  case 'euamor_esporte':
 reply(`💖 *${gerarnum()}% de amor por esportes* 👈\n\n Você ama muito os esportes!`);
    break;

  case 'euamor_ciencia':
  reply(`💖 *${gerarnum()}% de amor por ciência* 👈\n\n Você ama muito a ciência!`);
    break;

  case 'euamor_filmes':
  reply(`💖 *${gerarnum()}% de amor por filmes* 👈\n\n Você ama muito os filmes!`);
    break;

  case 'euamor_series':
  reply(`💖 *${gerarnum()}% de amor por séries* 👈\n\n Você ama muito as séries!`);
    break;

  case 'euamor_amigos':
   reply(`💖 *${gerarnum()}% de amor por amigos* 👈\n\n Você ama muito seus amigos!`);
    break;

  case 'euamor_livros':
 reply(`💖 *${gerarnum()}% de amor por livros* 👈\n\n Você ama muito ler livros!`);
    break;

  case 'euamor_chocolate':
 reply(`💖 *${gerarnum()}% de amor por chocolate* 👈\n\n Você ama muito o chocolate!`);
    break;

  case 'euamor_pizza':
  reply(`💖 *${gerarnum()}% de amor por pizza* 👈\n\n Você ama muito pizza!`);
    break;

  case 'euamor_sol':
  reply(`💖 *${gerarnum()}% de amor pelo sol* 👈\n\n Você ama muito o sol!`);
    break;

  case 'euamor_chuva':
  reply(`💖 *${gerarnum()}% de amor pela chuva* 👈\n\n Você ama muito a chuva!`);
    break;

  case 'euamor_festas':
 reply(`💖 *${gerarnum()}% de amor por festas* 👈\n\n Você ama muito festas!`);
    break;

  case 'euamor_artes':
 reply(`💖 *${gerarnum()}% de amor por artes* 👈\n\n Você ama muito as artes!`);
    break;

  case 'euamor_novelas':
reply(`💖 *${gerarnum()}% de amor por novelas* 👈\n\n Você ama muito as novelas!`);
    break;

  case 'euamor_aventura':
  reply(`💖 *${gerarnum()}% de amor por aventura* 👈\n\n Você ama muito a aventura!`);
    break;

  case 'euamor_teatro':
  reply(`💖 *${gerarnum()}% de amor pelo teatro* 👈\n\n Você ama muito o teatro!`);
    break;

  case 'euamor_cozinhar':
  reply(`💖 *${gerarnum()}% de amor por cozinhar* 👈\n\n Você ama muito cozinhar!`);
    break;

  case 'euamor_animais':
  reply(`💖 *${gerarnum()}% de amor por animais* 👈\n\n Você ama muito os animais!`);
    break;

  case 'euamor_familia':
  reply(`💖 *${gerarnum()}% de amor pela família* 👈\n\n Você ama muito sua família!`);
    break;

  case 'euamor_flor':
  reply(`💖 *${gerarnum()}% de amor por flores* 👈\n\n Você ama muito as flores!`);
    break;

// FIM DA ÁREA DE BRINCADEIRAS 😜 

//área de porno 😈🥵

case 'plaq': 
try {
reply(`Enviando no PV... caso demore de mais nao consegui te enviar `)
buffer = await getBuffer(`https://cartooncatapi.xyz/api/plaq?texto=${q}&apikey=${CARTOON_CAT_API}`)
cartoon.sendMessage(sender, {image: buffer, caption: `Ola aqui esta sua plaquinha 😈 seu punhetero 🥵 `}, {quoted: info})
} catch {
reply(`Erro`)
} 
break

case 'plaq1': 
try {
reply(`Enviando no PV... caso demore de mais nao consegui te enviar `)
buffer = await getBuffer(`https://cartooncatapi.xyz/api/plaq1?texto=${q}&apikey=${CARTOON_CAT_API}`)
cartoon.sendMessage(sender, {image: buffer, caption: `Ola aqui esta sua plaquinha 😈 seu punhetero 🥵 `}, {quoted: info})
} catch {
reply(`Erro`)
} 
break

case 'plaq2': 
try {
reply(`Enviando no PV... caso demore de mais nao consegui te enviar `)
buffer = await getBuffer(`https://cartooncatapi.xyz/api/plaq2?texto=${q}&apikey=${CARTOON_CAT_API}`)
cartoon.sendMessage(sender, {image: buffer, caption: `Ola aqui esta sua plaquinha 😈 seu punhetero 🥵 `}, {quoted: info})
} catch {
reply(`Erro`)
} 
break

case 'plaq3': 
try {
reply(`Enviando no PV... caso demore de mais nao consegui te enviar `)
buffer = await getBuffer(`https://cartooncatapi.xyz/api/plaq3?texto=${q}&apikey=${CARTOON_CAT_API}`)
cartoon.sendMessage(sender, {image: buffer, caption: `Ola aqui esta sua plaquinha 😈 seu punhetero 🥵 `}, {quoted: info})
} catch {
reply(`Erro`)
} 
break

case 'plaq4': 
try {
reply(`Enviando no PV... caso demore de mais nao consegui te enviar `)
buffer = await getBuffer(`https://cartooncatapi.xyz/api/plaq4?texto=${q}&apikey=${CARTOON_CAT_API}`)
cartoon.sendMessage(sender, {image: buffer, caption: `Ola aqui esta sua plaquinha 😈 seu punhetero 🥵 `}, {quoted: info})
} catch {
reply(`Erro`)
} 
break

case 'plaq5': 
try {
reply(`Enviando no PV... caso demore de mais nao consegui te enviar `)
buffer = await getBuffer(`https://cartooncatapi.xyz/api/plaq5?texto=${q}&apikey=${CARTOON_CAT_API}`)
cartoon.sendMessage(sender, {image: buffer, caption: `Ola aqui esta sua plaquinha 😈 seu punhetero 🥵 `}, {quoted: info})
} catch {
reply(`Erro`)
} 
break

case 'plaq6': 
try {
reply(`Enviando no PV... caso demore de mais nao consegui te enviar `)
buffer = await getBuffer(`https://cartooncatapi.xyz/api/plaq6?texto=${q}&apikey=${CARTOON_CAT_API}`)
cartoon.sendMessage(sender, {image: buffer, caption: `Ola aqui esta sua plaquinha 😈 seu punhetero 🥵 `}, {quoted: info})
} catch {
reply(`Erro`)
} 
break

case 'plaq7': 
try {
reply(`Enviando no PV... caso demore de mais nao consegui te enviar `)
buffer = await getBuffer(`https://cartooncatapi.xyz/api/plaq7?texto=${q}&apikey=${CARTOON_CAT_API}`)
cartoon.sendMessage(sender, {image: buffer, caption: `Ola aqui esta sua plaquinha 😈 seu punhetero 🥵 `}, {quoted: info})
} catch {
reply(`Erro`)
} 
break

case 'plaq8': 
try {
reply(`Enviando no PV... caso demore de mais nao consegui te enviar `)
buffer = await getBuffer(`https://cartooncatapi.xyz/api/plaq8?texto=${q}&apikey=${CARTOON_CAT_API}`)
cartoon.sendMessage(sender, {image: buffer, caption: `Ola aqui esta sua plaquinha 😈 seu punhetero 🥵 `}, {quoted: info})
} catch {
reply(`Erro`)
} 
break

//fim da área de porno 😈🥵

case 'playstore':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
try {
if(!q) return reply(mess.noArgsSearch()+`use como exemplo: *${prefix+command} minecraft*`);
AB = await fetchJson(`http://br4.bronxyshost.com:4059/api/playstore?nome=${q}&apikey=${SANDRO_MD}`)
ABC = `😺*Pesquisa:* ${q} - *[ PlayStore ]*\nTotal de aplicativos encontrados: ${AB.pesquisa.resultado.length}\n${"-\t".repeat(24)}\n`
for (var i of AB.pesquisa.resultado) {
ABC += `*😺Aplicativo:* ${i.nome}\n*😺 Desenvolvedor do App:* ${i.desenvolvedor}\n*😺 Avaliação do Aplicativo:* ${i.estrelas}\n*😺 Link do Aplicativo:* ${i.link}\n`;
ABC += `${"-\t".repeat(24)}\n`
}
cartoon.sendMessage(from, {image:{url: AB.pesquisa.resultado[0].imagem}, caption: ABC});
} catch (e) {
return reply(mess.error())
}
break

case 'infocmd': 
case 'info': 
if(!q) return reply(`Coloque um comando para conhecer o uso do comando que você almeja usar, por exemplo: ${prefix+command} play`)
const CMD_P = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
const searchCmds = CMD_P.map(i => i.command).indexOf(q)
if(searchCmds < 0) return reply("A explicação do comando ainda não está disponível..")
const returnMessage = CMD_P[searchCmds].info.replace(/#prefixo#/g, prefix)
reply(returnMessage)
break

case 'infocmd_add': case 'add_infocmd':
if(!isCreator) return reply(enviar.msg.donosmt)
const CMD_S = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
dirInfoCmd = "./settings/media/infocmd.json"
var [y, x] = q.split('|')
if(!q.includes("|")) return reply(`Faltando a primeira |\nExemplo: ${prefix+command} comando|info`)
if(q.lastIndexOf("|") < 0) return reply(`Faltando a segunda |\nExemplo: ${prefix+command} comando|info`)
kirv = []
for (i of CMD_S) {kirv.push(i.command)}
if(kirv.indexOf(y) >= 0) return reply("A informação sobre este comando já foi adicionada, ou seja, já é existente...")
CMD_S.push({command: y, info: x})
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_S, null, 2))
reply(`Informação sobre o comando ${y} foi atribuida a ele com sucesso...`)
break 

case 'infocmd_del': case 'del_infocmd':
if(!isCreator) return reply(enviar.msg.donosmt) 
const CMD_D = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
var i7 = CMD_D.map(i => i.command).indexOf(q.trim())
dirInfoCmd = "./settings/media/infocmd.json"
CMD_D.splice(i7, 1)
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_D, null, 2))
reply(`A informação sobre o comando ${q} foi removida com sucesso...`)
break

case 'promover': case 'promote':
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply('mamaco sem adm 🤠')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Vai colocar o vento como adm???')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsedm = await cartoon.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") return reply('Temos um novo admir')
else if (responsedm[0].status === "404") return reply('Esse maluco nem ta no grupo 🤔')
else return reply('Tenta dnv '-'')
break

case 'ping':
sendMsg = await cartoon.sendMessage(from, {react: {text: `,🏓`, key: info.key}})
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = `*PONG! 🏓🐱*\n\n
*Hora:* ${hora1}
*Velocidade:* ${String(r.toFixed(3))}
*Tempo Ativo:* ${kyun(uptime)}
`
await cartoon.sendMessage(from, {text: bla}, {quoted: info})
break

case 'infosistema':
case 'sistema':
case 'infosystem':
case 'system': {
reagir(from, "⚙️")
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
respon = `⏱️ *Velocidade de Resposta:* ${String(r.toFixed(3))} _segundos._\n🤖 *O bot se encontra online por:* ${kyun(uptime)}\n💻 *Sistema Operacional:* ${infoSystem.type()}\n📂 *Versão:* ${infoSystem.release()}\n💾 *Memoria RAM total:* ${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB\n💾 *Memoria RAM disponível:* ${(infoSystem.freemem()/Math.pow(1024, 3)).toFixed(2)}GB`.trim()
await cartoon.sendMessage(from, { image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE%20DO%20CARTOON%20CAT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(r.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` }, caption: respon, mentions: [sender]}, {quoted: info}) 
}
break

case 'marcar':
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
members_id = []
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? cartoon.sendMessage(from, {
text: '@12345678901', contextInfo: {
"mentionedJid": memberr
}}): cartoon.sendMessage(from, {
text: teks.trim(), contextInfo: {
"mentionedJid": memberr
}}, {
quoted: contato
})
}
teks = `\n\n${args.length > 0 ? `\n ➣ [${q}]\n\n`: ''}𝑀𝐴𝑅𝐶𝐴𝐶𝐴𝑂 𝐷𝑂 𝐴𝐷𝑀:\n`
for (let mem of groupMembers) {
teks += `@${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
break

case 'cita':
case 'hidetag':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "Marcação do(a) Adm: "+q :pink.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${nomeDono}\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
cartoon.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'resetarlink':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
try {
await cartoon.groupRevokeInvite(from)
reply("*LINK DO GRUPO RESETADO COM SUCESSO✅*")
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break


case 'ban': case 'kick':
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply('mamaco sem adm 🤠')
{
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Vai tirar o adm do vento???')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responseb = await cartoon.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") return reply('*Alá foi banido troxa kkk*')
else if (responseb[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????')
else if (responseb[0].status === "404") return reply('*Esse maluco nem ta aqui '-'*')
else return reply('tenta dnv')
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai arquivar msm??`)
sexocomrato = 0
for (let banned of mentioned) {
let responseb2 = await cartoon.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
return reply('Se ele mandou ta mandado')
} else {
let responseb3 = await cartoon.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") return reply('tchau troxa kkkk')
else if (responseb3[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????')
else if (responseb3[0].status === "404") return reply('Cara nem desse grupo e')
else return reply('Tenta dnv')
}
}
}
break

case "grupo":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
try {
if (q == "a") {
await cartoon.groupSettingUpdate(from, "not_announcement")
reply("Grupo aberto com sucesso")
}
if (q == "f") {
await cartoon.groupSettingUpdate(from, "announcement")
reply("Grupo fechado com sucesso ")
}
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "infogp":
if (!isGroup) return reply(resposta.grupo)
if (!isBotGroupAdmins) return reply(resposta.botadm)
reply(`
 Nome : ${groupName}
 Descrição : ${groupDesc}
 Id : ${from}
 Data : ${data}
 Horário : ${hora}
`)
break

case "descgp":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
try {
await cartoon.groupUpdateDescription(from, `${q}`)
reply("Descrição do grupo alterada com sucesso ")
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "nomegp":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
try {
await cartoon.groupUpdateSubject(from, `${q}`)
reply(`*Nome do alterado com sucesso*`)
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'listadm':
				if (!isGroup) return reply(resposta.grupo)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case 'antilink':
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
					if (args.length < 1) return reply('digite 1 para ativar ou 0 para desativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./database/grupos/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi ativo no grupo ✔️')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./database/grupos/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi desativado com sucesso neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
					
case 'report':
case 'bug':
if (!q) return reply('Ex: bug no menu..')
reply(`Obrigada pela colaboração, o bug foi reportado ao meu criador...
<♨️>bugs falsos nao serão respondidos`)
let templateMesssage = {
image: {url: './database/imagens/menu.jpg',
quoted: contato},
caption: `♨️𝗨𝗺 𝗕𝘂𝗴♨️\nDo Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
footer: 'Noelle_cartoon'
}
cartoon.sendMessage("5512996605918@s.whatsapp.net",templateMesssage)
break

case 'novocmd':
if (!q) return reply('Ex: novocmd coloca antilink')
reply(`Obrigada pela colaboração, a sua idea foi reportada ao meu criador 😊`)
const qp = args.join(" ")
let templateMessage = {
image: {url: './database/imagens/menu.jpg',
quoted: contato},
caption: `♨️IDEIA DE CMD♨️\nDo Número: @${sender.split('@')[0]},\nA Ideia É:\n ${q}`,
footer: 'Noelle_cartoon'
}
cartoon.sendMessage("5512996605918@s.whatsapp.net",templateMessage)
break


//******comandos de imagens**********\\
    
case 'loli' :{
reply("aguarde um momento, eu vou reply no seu pv se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'vc e um(a) lolicon?🤔!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await cartoon.sendMessage(sender, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'neko':{
reply("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'neko!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await cartoon.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'waifu':{
reply("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'waifu!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await cartoon.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'megumin':{
reply("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/cartoon')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'cartoon!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await cartoon.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'beijo':{
reply("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/kiss')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'kiss!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await cartoon.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

// sticker/figurinhas \\
case 'st':
case 'stk':
case 'sticker':
case 's':
const { sendVideoAsSticker, sendImageAsSticker } = require('./arquivos/sticker/rename.js');
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./arquivos/sticker/rename2.js');
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2) {
var pack = `Criado por:\n• ${nomeBot}\n—\nProprietário:\n• ${nomeDono}`
var author2 = `Solicitado por:\n• ${pushname}\n—\nCanal YT :\n• CARTOON CAT BOT`
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(cartoon, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = `𝐂𝐫𝐢𝐚𝐝𝐚 𝐩𝐨𝐫:\n• ${nomeBot}\n—\n𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨:\n• ${nomeDono}`
var author2 = `𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐩𝐨𝐫:\n• ${pushname}\n—\nCanal yt: Felix the cat oficial\n• CARTOON CAT BOT`
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(cartoon, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
reply(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando: ${prefix+command} (mencionando a mídia)`)
}
break

case 'attp': 
case 'attp1': 
case 'attp2': 
case 'attp3': 
case 'attp4': 
case 'attp5': 
case 'attp6': 
case 'attp7': 
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} cartoon cat`);
reply(`aguarde um momento`)
var Fontes = command === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono"
cartoon.sendMessage(from, {sticker: {url: `https://api.bronxyshost.com.br/api-bronxys/attp_edit?texto=${encodeURIComponent(q)}&fonte=${Fontes}&apikey=${SANDRO_MD}`}}, {quoted: info}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'reiniciar':
if(!isCreator) return reply("*APENAS DONO*")
reply("Reiniciando o sistema, em segundos já estarei de volta senhor(a) as suas ordens!")
setTimeout(async() => {process.exit()}, 1200)
break

case 'meme':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const buffyy = await getBuffer(`http://br4.bronxyshost.com:4059/random/loli?apikey=${SANDRO_MD}`);
cartoon.sendMessage(from, {image: buffyy}, {quoted: info});
break;

case 'yumeko':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const bufferImg = await getBuffer(`http://br4.bronxyshost.com:4059/random/yumeko?apikey=${SANDRO_MD}`);
cartoon.sendMessage(from, {image: bufferImg}, {quoted: info});
break;

case 'waifu':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const bufferIg = await getBuffer(`http://br4.bronxyshost.com:4059/random/waifu?apikey=${SANDRO_MD}`);
cartoon.sendMessage(from, {image: bufferIg}, {quoted: info});
break;

case 'waifu2':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const opa = await getBuffer(`http://br4.bronxyshost.com:4059/random/waifu2?apikey=${SANDRO_MD}`);
cartoon.sendMessage(from, {image: opa}, {quoted: info});
break;

case 'cosplay':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const sla = await getBuffer(`http://br4.bronxyshost.com:4059/random/cosplay?apikey=${SANDRO_MD}`);
cartoon.sendMessage(from, {image: sla}, {quoted: info});
break;

case 'hinata':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const ab = await getBuffer(`https://cartooncatapi.xyz/random/hinata?apikey=${CARTOON_CAT_API}`);
cartoon.sendMessage(from, {image: ab}, {quoted: info});
break;

case 'figualeatoria':
reply(`- Estou gerando sua figurinha, aguarde um pouco...`)
fg = await getBuffer(`https://cartooncatapi.xyz/api/figurinhas?apikey=${CARTOON_CAT_API}`)
cartoon.sendMessage(from, {sticker: fg})
break

case "imgpralink":
            try {
              if (isQuotedImage) {
                boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
                const fetch = require('node-fetch');
                const FormData = require('form-data');
                const fs = require('fs');
                async function uploadImageToTelegraph(imageBuffer) {
                  const form = new FormData();
                  form.append('file', imageBuffer, { filename: 'image.jpg' });

                  const response = await fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: form,
                  });
                  const data = await response.json();
                  if (data && data[0] && data[0].src) {
                    return 'https://telegra.ph' + data[0].src;
                  } else {
                    throw new Error('Failed to retrieve the image URL from the response.');
                  }
                }
                const owgi = await getFileBuffer(boij, "image");
                const imageUrl = await uploadImageToTelegraph(owgi);
                reply(imageUrl);
              } else {
                reply('marque a ft')
              }
            } catch (e) {
              console.log(e)
              reply('error...')
            }
            break
            
          case 'videopralink':
          case 'gerarvideo':
            try {
              if (isQuotedVideo) {
                boij = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
                  : info.message.videoMessage;
                const fetch = require('node-fetch');
                const FormData = require('form-data');
                const fs = require('fs');
                async function uploadVideoToTelegraph(videoBuffer) {
                  const form = new FormData();
                  form.append('file', videoBuffer, { filename: 'media' });

                  const response = await fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: form,
                  });
                  const data = await response.json();
                  if (data && data[0] && data[0].src) {
                    return 'https://telegra.ph' + data[0].src;
                  } else {
                    throw new Error('Failed to retrieve the image URL from the response.');
                  }
                }
                const owgi = await getFileBuffer(boij, "video");
                const imageUrl = await uploadVideoToTelegraph(owgi);
                reply(imageUrl);
              } else {
                reply('marque o video')
              }
            } catch (e) {
              console.log(e)
              reply('error...')
            }
            break

case 'marcarwa':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╼⊳⊰ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
cartoon.sendMessage(from, {text: teks}, {quoted: contato})
} catch {
reply('ERROR!!')
}
break

case 'repetir': 
{if(!q) return reply(`Texto?`)
cartoon.sendMessage(from,
{text: q},
{quoted: contato})
}
break

case 'xvideos':
if (!c) return reply('Quer pesquisar oq??');
reply('Isso pode demorar um pouco')
dlk = await fetchJson(`https://api.brizaloka-api.tk/porn/xvideos?apikey=brizaloka&query=${q}`);
Op = dlk.dl_link
cartoon.sendMessage(sender, { video: { url: Op }}, {quoted: contato});   
break

case 'hentai1':
if (!isGroup) return reply(resposta.grupo)
reply('*Estou enviando no seu privado*')
const bufferImg11 = await getBuffer("https://api.brizaloka-api.tk/random/hentai/boobs?apikey=brizaloka");
cartoon.sendMessage(sender, {image: bufferImg11}, {quoted: contato});
break;

/////
case 'video' : 
{cartoon.sendMessage(
from, 
{video: fs.readFileSync('./database/video/sandro.mp4')
},
{quoted : contato}
)
}
break

case 'play50':  {
                if (!text) return reply(`Asim que usa:\n\n${prefix + comando} Amar amei gosta gostei`)
                try {
                    let dataa = await fetchJson(`http://br4.bronxyshost.com:4059/youtube/play?query=${q}&apikey=${SANDRO_MD}`)
                    ytbrt = `━「 PLAY AUDIO 」
  🥂∆𝐁𝐄𝐌✰𝐕𝐈𝐍𝐃𝐎∆🥂     ♬
⸺͟͞ꪶ${pushname}      ♪  
  
➤ۣۜۜ͜͡📌 𝚃𝚒́𝚝𝚞𝚕𝚘: ${dataa.resultado[0].title}
➤ۣۜۜ͜͡🎯 Tempo⧽${dataa.resultado[0].timestamp}
➤ۣۜۜ͜͡🦊 Descrição⧽ ${dataa.resultado[0].description}

 0:35 ━❍──────── -5:32 ↻ ⊲ Ⅱ ⊳ ↺ VOLUME: ▁▂▃▄▅▆▇ 100%

Bom diaa🤙🏻
ılı.lıllılı.ıllı..ılı.lıllılı.ıllı\n\n━━━━━━━━━━━━━`
                    cartoon.sendMessage(from, { image: { url: `${dataa.resultado[0].image}` }, caption: ytbrt }, { quoted: info })
                    sabrina.sendMessage(from, { audio: { url: `http://br4.bronxyshost.com:4059/youtube/mp3?url=${api.Link}&apikey=${SANDRO_MD}` }, mimetype: "audio/mpeg", fileName: `${dataa.resultado[0].title}.mp4` }, { quoted: info })
                } catch (err) {
                    reply(' 𝙴𝚛𝚛𝚘 𝚊𝚘 𝚘𝚋𝚝𝚎𝚛 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜!')
                    console.log(err)
                }
            }
break

case 'playvid':
case 'playvideo':
try {
if(!q) return reply(`Exemplo: ${prefix+command} Amor hospitalar`);
await reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const api = await fetchJson(`http://br4.bronxyshost.com:4059/youtube/play?query=${q}&apikey=${SANDRO_MD}`)
cartoon.sendMessage(from, {video: {url: (`http://br4.bronxyshost.com:4059/youtube/mp4?url=${api.Link}&apikey=${SANDRO_MD}`)}, mimetype: "video/mp4"})
} catch (erro) {
console.log(erro)
}
break

// área de downloads By Félix o gato
case 'play': 
if(!q) return reply(`${pushname} Cade o nome da musica?\n Exemplo: ${prefix}${command} CARTOON CAT RUN AWAY`)
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
try {
ytbr = await fetchJson(`https://cartooncatapi.xyz/youtube/play?query=${q}&apikey=${CARTOON_CAT_API}`)
ytbrt = `「🎵𝐏𝐋𝐀𝐘 𝐀𝐔𝐃𝐈𝐎🎵」
🥂∆𝐁𝐄𝐌✰𝐕𝐈𝐍𝐃𝐎∆🥂

> • *Título*: ${ytbr.Title}
> • *Author*: ${ytbr.Author} 
> • *Duração*: ${ytbr.Duration}
> • *Views*: ${ytbr.Viewer}
> • *Descrição*: ${ytbr.Description}
> • *Link*: ${ytbr.Link}
> • *Site-api*: ${ytbr.site}

> 0:35 ━❍──────── -${ytbr.Duration} ↻ ⊲ Ⅱ ⊳ ↺ VOLUME: ▁▂▃▄▅▆▇ 100%`
cartoon.sendMessage(from, {image: {url: `${ytbr.Thumb}`}, caption: ytbrt}, {quoted: info})
cartoon.sendMessage(from, {audio: {url: `https://cartooncatapi.xyz/youtube/mp3?url=${ytbr.Link}&apikey=${CARTOON_CAT_API}` }, mimetype: "audio/mpeg"}, {quoted: info})
} catch (err) {
reply(`alguma coisa deu errado entre em contato com o Sandro para descobrir.`)
console.log(err)
} 
break

case 'playvid':
case 'playvideo':
try {
if(!q) return reply(`Exemplo: ${prefix+command} Cartoon Cat`);
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const api = await fetchJson(`https://cartooncatapi.xyz/youtube/play?query=${q}&apikey=${CARTOON_CAT_API}`)
cartoon.sendMessage(from, {video: {url: (`https://cartooncatapi.xyz/youtube/mp4?url=${data.Link}&apikey=${CARTOON_CAT_API}`)}, mimetype: "video/mp4"})
} catch (erro) {
reply(`alguma coisa deu errado entre em contato com o Félix para descobrir.`)
}
break

case 'playmp4':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
pau = await fetchJson(`https://cartooncatapi.xyz/youtube/play?query=${q}&apikey=${CARTOON_CAT_API}`)
cartoon.sendMessage(from, {video: { url: (`https://cartooncatapi.xyz/youtube/mp4?url=${pau.Link}&apikey=${CARTOON_CAT_API}`)}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply(mess.error())
})
break
// fim da área de Downloads by Félix o gato

case 'ytmp3':
if(!q) return reply(`Cadê o link do vídeo para eu baixar no formato de áudio?\n\nExemplo: *${prefix+command} https://www.youtube.com/watch?v=hmBAvAugQqA&t=160s*`)
reagir(from, "✅")
reply(`*Aguarde enviando* _SANDRO API_`)
cartoon.sendMessage(from, {audio: {url: (`http://br4.bronxyshost.com:4059/youtube/mp3?url=${q}&apikey=${SANDRO_MD}`)}, mimetype: "audio/mpeg"}).catch(err => {
return reply(mess.error())
})
break


default:

if (isCmd) {
reply(`Esse comando nao esta no meu menu.`)
}

}

} catch (e) {
console.log(e)
}

})

}
startbot()
