import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs';
import type { SlashCommand } from '../commands/types/slash-command.type.js';

dotenv.config();

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);
const files = commandFolders.filter((file) => fs.statSync(path.join(foldersPath, file)).isFile());

const commands = [];

for (const file of files) {
  const filePath = path.join(__dirname, 'commands', file);
  const command = (await import(filePath)).default as SlashCommand;
  commands.push(command.data.toJSON());
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN as string);

try {
  console.log(`Started refreshing ${commands.length} application (/) commands.`);

  await rest.put(
    Routes.applicationGuildCommands(process.env.DISCORD_CLIENTID as string, process.env.DISCORD_GUILDID as string),
    { body: commands },
  );

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
