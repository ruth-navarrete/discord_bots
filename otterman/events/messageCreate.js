const Event = require('../structs/event.js');

// command calling handler
module.exports = new Event('messageCreate', (client, msg) => {
	// fail safe for correct prefix
    if (!msg.content.startsWith(client.prefix)) return;

	// take in command
	// $embed create | title | description
	// cmd_arg = embed
	// args = [create, title, description]
	const cmd_arg = msg.content.substring(client.prefix.length).split(/ +/);
	const args = msg.content.slice(client.prefix.length + cmd_arg[0].length).trim().split(' | ');

	// cmd = cmd[0]
	// searches cmd folder for exact name
	const cmd = client.cmds.find(cmd => cmd.name == cmd_arg[0]);

	// fail safe for valid command
	if (!cmd) return msg.reply(`${args[0]} is not a valid command`);

	// gets permissions of caller
	const permission = msg.member.permissions.has(cmd.permission, true);

	// fail safe for permissions
	if (!permission) return msg.reply(`you do not have the permission
		\'${cmd.permission}\' to run this command`);

	cmd.run(msg, args, client);
});