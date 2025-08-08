
const { commands } = require('../command')

commands.push({
    pattern: 'ping',
    react: '🏓',
    function: async (conn, mek, m, { reply }) => {
        const start = new Date().getTime()
        await reply('Pinging...')
        const end = new Date().getTime()
        const ping = end - start
        reply(`🏓 Pong!\nLatency: ${ping}ms`)
    }
})
