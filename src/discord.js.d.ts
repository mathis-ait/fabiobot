import { Collection } from 'discord.js';
import type { SlashCommand } from './commands/types/slash-command.type.js';

declare module 'discord.js' {
  export interface Client {
    commands: Collection<string, SlashCommand>;
  }
}
