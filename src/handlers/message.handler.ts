import type {Message} from 'discord.js';
import {sendMessage, sendReply} from "../hooks/sendMessage.js";

export function handleMessage(message: Message<boolean>) {
    if (message.content.includes("l'informatique c'est magique ?")) {
        if (Math.random() > 0.5) {
            sendMessage(message.channel, "Oui, c'est magique :mage:");
        } else {
            sendMessage(message.channel, "Non, c'est pas magique :mage:");
        }
    }
    if (message.content.toLowerCase().includes("on t'as pas parlé toi")) {
        sendMessage(message.channel, "Y'a quelque chose qui s'est brisé là, ça va mettre du temps à se reconstruire...");
    }
    if (message.content.toLowerCase().includes('pense du bitcoin')) {
        sendMessage(message.channel, "C'est de la fumisterie, c'est une bulle qui va exploser !");
    }
    if (message.content.toLowerCase().includes('je vais dodo')) {
        if (new Date().getHours() < 21) {
            sendReply(message.channel, message.reply, "Non c'est pas l'heure :pouting_cat:")
        } else {
            sendReply(message.channel, message.reply, "Bonne nuit :heart:");
        }
    }
    if (message.content.toLowerCase().includes('il est ou fabi')) {
        sendReply(message.channel, message.reply, "Il est là :slight_smile:");
    }
}
