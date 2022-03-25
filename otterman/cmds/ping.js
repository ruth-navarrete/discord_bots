const Command = require('../structs/cmd.js');

module.exports = new Command({
    name: 'ping',
    description: 'shows ping of bot',
    permission: 'SEND_MESSAGES',

    async run(msg, args, client) {
        const message = await msg.reply(`ping: ${client.ws.ping} ms`);

        message.edit(`ping: ${client.ws.ping} ms\nmessage ping: ${
            message.createdTimestamp - msg.createdTimestamp
        } ms`);
    }
})