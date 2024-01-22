import type { Client } from 'discord.js';
import path from 'node:path';
import fs from 'node:fs';
import type { SlashCommand } from '../types/slash-command.type.js';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export async function commandLoader(client: Client<boolean>) {
  const foldersPath = path.join(__dirname, 'commands');
  const commandFolders = fs.readdirSync(foldersPath);
  const files = commandFolders.filter((file) => fs.statSync(path.join(foldersPath, file)).isFile());

  for (const file of files) {
    const filePath = path.join(__dirname, 'commands', file);
    const command = (await import(filePath)).default as SlashCommand;
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
  }
}
