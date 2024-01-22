import { SlashCommandBuilder } from 'discord.js';
import type { SlashCommand } from './types/slash-command.type.js';

const ANSWER_RESPONSE = {
  whatdoing: {
    question: 'Que fais-tu ?',
    answer: 'Petite nocture sur Visual Paradigm !',
  },
  bestartist: {
    question: 'Qui est le ou la meilleur(e) artiste ?',
    answer: 'Wejdene ! :heart:',
  },
} as const;

const askFabi: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName('ask-fabi')
    .setDescription('Posez une question à Fabi !')
    .addStringOption((option) =>
      option.setName('question').setDescription('La question à poser à Fabi ?').setRequired(true).addChoices(
        {
          name: 'Que fais-tu ?',
          value: 'whatdoing',
        },
        {
          name: 'Qui est le ou la meilleur(e) artiste ?',
          value: 'bestartist',
        },
      ),
    ) as SlashCommandBuilder,
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;
    const question = interaction.options.getString('question');
    if (question === 'bestartist') {
      await interaction.reply('Wejdene ! :heart:');
    } else {
      await interaction.reply('Petite nocture sur Visual Paradigm !');
    }
  },
};

export default askFabi;
