import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export interface SlashCommand<Interaction = ChatInputCommandInteraction> {
  data: SlashCommandBuilder;
  execute: (interaction: Interaction) => Promise<void>;
}
