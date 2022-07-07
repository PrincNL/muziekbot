module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Er werd geen muziek afgespeeld. ${message.author}... probeer het opnieuw! ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`There was no music played before ${message.author}... probeer het opnieuw! ❌`);

        await queue.back();

        message.channel.send(`De **vorige** track word afgespeeld.✅`);
    },
};