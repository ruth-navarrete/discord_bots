const Event = require('../structs/event.js');

module.exports = new Event('messageCreate', (client, msg) => {
    if (!msg.content.startsWith(client.prefix)) return;

	const cmd_arg = msg.content.substring(client.prefix.length).split(/ +/);
	const args = msg.content.slice(client.prefix.length + cmd_arg[0].length).trim().split(' | ');

	const cmd = client.cmds.find(cmd => cmd.name == cmd_arg[0]);

	if (!cmd) return msg.reply(`${args[0]} is not a valid command`);

	const permission = msg.member.permissions.has(cmd.permission, true);

	if (!permission) return msg.reply(`you do not have the permission
		\'${cmd.permission}\' to run this command`);

	cmd.run(msg, args, client);
});