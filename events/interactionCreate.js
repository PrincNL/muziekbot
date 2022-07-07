module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Er wordt op dit moment geen muziek afgespeeld!... probeer het opnieuw! ❌`, ephemeral: true, components: [] });

            int.member.send(`U heeft deze track opgeslagen. ${queue.current.title} | ${queue.current.author} van de server ${int.member.guild.name} ✅ Gemaakt door Princ!`).then(() => {
                return int.reply({ content: `Ik heb de info in je dm gestuurd! ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Je moet even je dm open zetten of mij unblocken! ...probeer het opnieuw! ❌`, ephemeral: true, components: [] });
            });
        }
    }
};