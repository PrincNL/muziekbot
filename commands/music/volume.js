const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Er wordt op dit moment geen muziek afgespeeld! ${message.author}... probeer het opnieuw! ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Het volume op dit moment is. ${queue.volume} 🔊\n*Om het volume te veranderen moet u een numer tussen de  **1** en  **${maxVol}** invullen.*`);

        if (queue.volume === vol) return message.channel.send(`Oeps. Het volume waar u het probeerd te veranderen is op dit moment al in gebruik! ${message.author}... probeer het opnieuw! ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`Dat is geen nummer dat wij gebruiken. Kies iets tussen de  **1** en **${maxVol}** ${message.author}... probeer het opnieuw! ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Het volume is succesvol aangepast naar **${vol}**/**${maxVol}**% 🔊` : `Oeps. Er ging iets fout! ${message.author}... probeer het opnieuw! ❌`);
    },
};