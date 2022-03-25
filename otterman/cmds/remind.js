const Command = require('../structs/cmd.js');

// remind command
// send a reminder
// input: $remind
// output: your reminder

module.exports = new Command({
    name: 'remind',
    description: 'send a reminder',
    permission: 'SEND_MESSAGES',

    async run(msg, args, client) {
        msg.reply('remind');
    }
})
