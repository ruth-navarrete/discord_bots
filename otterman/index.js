console.clear();

// Require the necessary discord.js classes
const Client  = require('./structs/client.js');
const config  = require('./data/config.json');
const client  = new Client();

client.start(config.token);