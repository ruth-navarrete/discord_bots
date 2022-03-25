const Command = require('../structs/cmd.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: 'embed',
    description: 'shows',
    permission: 'SEND_MESSAGES',

    async run(msg, args, client) {
        const embed = new Discord.MessageEmbed();
        msg.channel.send(args[0]);
        switch (args[0]) {
            case "create":
                embed
                    .setColor('DARK_PURPLE')
                    .setTitle(args[1])
                    .setAuthor(
                        'Goop Mother',
                        'https://www1.flightrising.com/static/media_icons/shadowbinder_100x100.jpg',
                        msg.author.avatarURL({ dynamic:true })
                    )
                    .setDescription(args[2])
                    .setTimestamp()
                    .setFooter(`created by ${msg.author.username}`);
        
                msg.channel.send({embeds: [embed]});
                break;
            case "edit":
                msg.channel.send("testing sec param");
                embed
                    .setColor('DARK_PURPLE')
                    .setTitle(args[1])
                    .setAuthor(
                        'Goop Mother',
                        'https://www1.flightrising.com/static/media_icons/shadowbinder_100x100.jpg',
                        msg.author.avatarURL({ dynamic:true })
                    )
                    .setDescription(args[2])
                    .setTimestamp()
                    .setFooter(`last updated by ${msg.author.username}`);
        
                msg.channel.send({embeds: [embed]});
                break;
            default:
                msg.channel.send("not a valid argument, please enter a valid argument: create, edit");
                break;

        }

    }
});