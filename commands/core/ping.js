const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`De laatste ping was ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} seconden geleden **${client.ws.ping}ms** 🛰️`);
    },
};