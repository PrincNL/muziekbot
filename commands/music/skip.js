module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Er werd geen muziek afgespeeld! ${message.author}... probeer het opnieuw! ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Op dit moment word ${queue.current.title} afgespeeld ik heb hem overgeslagen! ✅` : `Oeps. Dat had ik niet verwacht! ${message.author}... probeer het opnieuw! ❌`);
    },
};