module.exports = async (client) => {
    console.log(`Ik ben ready op ${client.user.username}\n-> Klaar op ${client.guilds.cache.size} Servers met ${client.users.cache.size} Gebruikers`);

    client.user.setActivity(client.config.app.playing);
};