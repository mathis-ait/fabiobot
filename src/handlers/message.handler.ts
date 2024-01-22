import type { Message } from 'discord.js';

export function handleMessage(message: Message<boolean>) {
  if (message.content.includes("l'informatique c'est magique ?")) {
    message.channel.send("Non l'informatique c'est pas magique !");
  }
  if (message.content.toLowerCase().includes("on t'as pas parlé toi")) {
    message.channel.send("Y'a quelque chose qui s'est brisé là, ça va mettre du temps à se reconstruire...");
  }
  if (message.content.toLowerCase().includes('pense du bitcoin')) {
    message.channel.send("C'est de la fumisterie, c'est une bulle qui va exploser !");
  }
  if (message.content.toLowerCase().includes('je vais dodo')) {
    if (new Date().getHours() < 21) {
      message.reply({
        content: "Non c'est pas l'heure :pouting_cat:",
      });
    } else {
      message.reply({
        content: 'Bonne nuit :heart:',
      });
    }
  }
  if (message.content.toLowerCase().includes('il est ou fabi')) {
    message.reply({
      content: 'Il est là :slight_smile:',
    });
  }
}
