// Require the necessary discord.js classes
const Discord = require('discord.js');
const Client  = require('./client.js');

/**
 * 
 * @param {Discord.Message} msg 
 * @param {string[]} args 
 * @param {Client} client 
 */

function RunFunction(msg, args, client) {}

class Command {
    /**
     * @typedef { {name: string, description: string, permission: Discord.PermissionString, run: RunFunction} } CommandOptions
     * @param {CommandOptions} options 
     */
    constructor(options) {
        this.name        = options.name;
        this.description = options.description;
        this.permission  = options.permission;
        this.run         = options.run;
    }
}

module.exports = Command;