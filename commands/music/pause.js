module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Er werd geen muziek afgespeeld! ${message.author}... Probeer het opnieuw! ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Het lied  ${queue.current.title} is gepauzeerd ✅` : `Oeps. dat ging fout! ${message.author}... Probeer het opnieuw! ❌`);
    },
};