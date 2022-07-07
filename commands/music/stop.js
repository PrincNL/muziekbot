module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Er werd geen muziek afgespeeld  ${message.author}... probeer het opnieuw! ❌`);

        queue.destroy();

        message.channel.send(`Muziek is gestopt tot de volgende keer ✅`);
    },
};