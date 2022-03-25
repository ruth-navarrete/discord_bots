const Event = require('../structs/event.js');

// prints to command line
// (1) who logged in
// (2) other set up prints (events and functions are ready)
// (3) what time client is ready

module.exports = new Event('ready', client => {
    var t = new Date();
	console.log(`logged in as ${client.user.tag}!`);
	console.log('ready @ ' + (t.getMonth() + 1) + '/' + t.getDate() +'/' +t.getFullYear()
                + ' ' + t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds());
});