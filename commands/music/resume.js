module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Er wordt geen muziek afgespeeld! ${message.author}... probeer het opnieuw! ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Op dit moment word ${queue.current.title} hervat ✅` : `Oeps. Er ging iets fout ${message.author}... probeer het opnieuw! ❌`);
    },
};