const{ Client, GatewayIntentBits, Partials, ActivityType } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences
    ],
    Partials: [
        Partials.Message,
        Partials.User,
        Partials.Channel,
        Partials.GuildMember
    ]
})

require('dotenv').config();

client.on('ready', () => {
        console.log('Logged in as $(client.user.tag)')

client.user.setActivity('Zyzz-The God', {
    type:ActivityType.Listening
})
})

client.login(process.env.TOKEN);