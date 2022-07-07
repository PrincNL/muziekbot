module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Er wordt op dit moment geen muziek afgespeeld! ${message.author}... probeer het opnieuw! ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Na dit nummer is er helaas geen muziek meer in de queue! ${message.author}... probeer het opnieuw! ❌`);

        await queue.clear();

        message.channel.send(`Ik heb de queue geleegd! 🗑️`);
    },
};