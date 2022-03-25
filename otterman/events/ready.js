const Event = require('../structs/event.js');

module.exports = new Event('ready', client => {
    var t = new Date();
	console.log(`logged in as ${client.user.tag}!`);
	console.log('ready @ ' + (t.getMonth() + 1) + '/' + t.getDate() +'/' +t.getFullYear()
                + ' ' + t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds());
});