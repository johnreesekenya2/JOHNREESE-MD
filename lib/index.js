
const { getContentType } = require('@whiskeysockets/baileys')

function sms(conn, m) {
    return {
        message: m,
        react: (emoji) => {
            conn.sendMessage(m.key.remoteJid, { react: { text: emoji, key: m.key } })
        },
        reply: (text) => {
            conn.sendMessage(m.key.remoteJid, { text }, { quoted: m })
        }
    }
}

function downloadMediaMessage(message) {
    return Buffer.from('')
}

function AntiDelete(conn, updates) {
    console.log('Anti-delete feature triggered')
}

module.exports = { sms, downloadMediaMessage, AntiDelete }
