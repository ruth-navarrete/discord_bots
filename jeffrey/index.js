// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const cron = require("cron");

// role and channel IDs
const FFXIV_role = '887131481871351820';
const FR_role = '887131539891175435';
const remind_channel = '888345534513958923';

// messages
const FFXIV_SAT = '<@&' + FFXIV_role + '> -- dont forget about cactpot drawing at 6PM PST/7PM PDT and fasion report'
const fashion_report = '!frinfo'
const FR_NEST = '<@&' + FR_role + '> -- dont forget to incubate nests'
const FR_PUSH = '<@&' + FR_role + '> -- its a push week, are you able to attend?'

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	console.log('Ready!');
});

// ping pond basics
client.on('messageCreate', msg => {
	console.log(msg.content);
	if (msg.content === 'ping') {
		client.channels.cache.get(remind_channel).send('<@&' + FFXIV_role + '> -- pong');
	}
});

// reminder ping functions
// cactpot
let cactpot = new cron.CronJob('58 15 * * *', () => {
	client.channels.cache.get('888345534513958923').send(FFXIV_SAT);
	client.channels.cache.get('888345534513958923').send(fashion_report).then(msg => msg.delete());
})

// nesting
let nesting = new cron.CronJob('00 9 * * *', () => {
	client.channels.cache.get('888345534513958923').send(FR_NEST);
})

// start reminder ping functions
cactpot.start();
nesting.start();

// Login to Discord with your client's token
client.login(token);