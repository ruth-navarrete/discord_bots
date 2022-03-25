const Command = require('../structs/cmd.js');

// hello command
// responds to message with hello
// input: $hello
// output: hello message

module.exports = new Command({
    name: 'hello',
    description: 'hello world test',
    permission: 'SEND_MESSAGES',

    async run(msg, args, client) {
        msg.reply('hello');
    }
})