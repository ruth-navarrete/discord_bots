// Require the necessary discord.js classes
const Discord = require('discord.js');
const Command = require('./cmd.js');
const Event   = require('./event.js');
const config = require('../data/config.json');
const intents = new Discord.Intents(32767);
const fs      = require('fs');

class Client extends Discord.Client {
    constructor() {
        super( { intents } );

        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.cmds = new Discord.Collection();
        this.prefix = config.prefix;
    }

    start (token) {
        // Directory of commands
        fs.readdirSync('./cmds')
            .filter(file => file.endsWith('.js'))
            .forEach(file => {
                /**
                 * @type {Command}
                 */
                const cmd = require(`../cmds/${file}`);
                console.log(`command ${cmd.name} loaded`);
                this.cmds.set(cmd.name, cmd);
            });
        
        fs.readdirSync('./events')
            .filter(file => file.endsWith('.js'))
            .forEach(file => {
                /**
                 * @type {Event}
                 */
                const event = require(`../events/${file}`);
                console.log(`event ${event.event} loaded`);
                this.on(event.event, event.run.bind(null, this));
            });

        this.login(token);
    }
}

module.exports = Client;