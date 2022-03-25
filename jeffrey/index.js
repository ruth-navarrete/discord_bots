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
const FR_NEST         = '<@&' + FR_role + '> -- dont forget to incubate nests'
const FR_PUSH         = '<@&' + FR_role + '> -- its a push week, are you able to attend?'
const ROOMS_W         = '<@&' + FR_role + '> -- bababooey\nits time to steal rooms in rivera for **wednesday**\nreserve room **320** in rivera\n'
const ROOMS_A         = '<@&' + FR_role + '> -- bababooey\nits time to steal rooms in rivera for the **week** in rivera 320\n\nruth please make sure you have: S 2-5 | M 4-7 | T 12-2 | R 12-2\n\nfahed please make sure you have W 5-8'

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

// nesting
let nesting = new cron.CronJob('00 9 * * *', () => {
	client.channels.cache.get(remind_channel).send(FR_NEST);
})

// rooms wednesday reminder
let res_w = new cron.CronJob('01 0 * * Thu', () => {
	client.channels.cache.get(remind_channel).send(ROOMS_W);
})

// rooms weekly reminder
let res_a = new cron.CronJob('01 0 * * Sat', () => {
	client.channels.cache.get(remind_channel).send(ROOMS_A);
})

// start reminder ping functions
cactpot.start();
nesting.start();
res_w.start();
res_a.start();

// Login to Discord with your client's token
client.login(token);
