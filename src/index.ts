import { ActivityType, ChannelType, Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on(Events.ClientReady, async (client) => {
    function setActivity() {
        client.user.setPresence({ activities: [{ name: `${client.guilds.cache.size.toLocaleString()} servers`, type: ActivityType.Watching }]});
    }

    setActivity();

    console.log(`[Publisher] Login with ${client.user.tag}!`);

    setInterval(setActivity, 30 * 1000);
});

client.on(Events.MessageCreate, async (message) => {
    if (message.channel.type != ChannelType.GuildAnnouncement) return;

    try {
        await message.crosspost();
    } catch (err) {
        console.error(err);
    }
});

client.login(process.env.TOKEN);