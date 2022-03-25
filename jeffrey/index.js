console.clear();

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token }           = require('./config.json');
const cron                = require("cron");

// role and channel IDs
const FFXIV_role      = '887131481871351820';
const FR_role         = '887131539891175435';
const remind_channel  = '888345534513958923';

// messages
const FFXIV_SAT       = '<@&' + FFXIV_role + '> -- dont forget about cactpot drawing at 6PM PST/7PM PDT and fasion report'
const fashion_report  = '!frinfo'

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	var t = new Date();
	console.log(`Logged in as ${client.user.tag}!`);
	console.log('Ready @ ' + t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds());
});

// ping pong basics
client.on('messageCreate', msg => {
	console.log(msg.content);
	if (msg.content === 'ping') {
		client.channels.cache.get(remind_channel).send('<@&' + FFXIV_role + '> -- pong');
	}
});

// reminder ping functions
// cactpot
let cactpot = new cron.CronJob('45 18 * * Sat', () => {
	client.channels.cache.get(remind_channel).send(FFXIV_SAT);
	client.channels.cache.get(remind_channel).send(fashion_report).then(msg => msg.delete());
})

// start reminder ping functions
cactpot.start();

// Login to Discord with your client's token
client.login(token);
