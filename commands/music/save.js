module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Er werd geen muziek afgespeeld ${message.author}... probeer het opnieuw! ❌`);

        message.author.send(`U heeft de track ${queue.current.title} opgeslagen | ${queue.current.author} van de server ${message.guild.name} Deze bot is gemaakt door Princ ;)✅`).then(() => {
            message.channel.send(`Ik heb je een dm gestuurd met info of het liedje! ✅`);
        }).catch(error => {
            message.channel.send(`Oeps. Hoogswaarschijnlijk staan je dm's gesloten. ${message.author}... probeer het opnieuw! ❌`);
        });
    },
};