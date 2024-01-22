import dotenv from 'dotenv';
import { ActivityType, Events } from 'discord.js';
import { client } from './client.js';
import { handleMessage } from './handlers/message.handler.js';
import { handleInteraction } from './handlers/interaction.handler.js';

dotenv.config();

client.once(Events.ClientReady, (readyClient) => {
  console.info(`Logged in as ${readyClient.user?.tag}`);

  readyClient.user?.setPresence({
    activities: [
      {
        name: 'Visual Paradigm',
        type: ActivityType.Playing,
      },
    ],
    status: 'dnd',

  });

  readyClient.guilds.cache.forEach((guild) => {
    console.info(`Logged in ${guild.name}`);
  });
});

client.on(Events.MessageCreate, handleMessage).on(Events.InteractionCreate, handleInteraction);

client.login(process.env.DISCORD_TOKEN);
