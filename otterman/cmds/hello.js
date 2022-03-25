const Command = require('../structs/cmd.js');

module.exports = new Command({
    name: 'hello',
    description: 'hello world test',
    permission: 'SEND_MESSAGES',

    async run(msg, args, client) {
        msg.reply('hello');
    }
})