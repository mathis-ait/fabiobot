import { SlashCommandBuilder } from 'discord.js';
import type { SlashCommand } from './types/slash-command.type.js';

const ping: SlashCommand = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  },
};

export default ping;
