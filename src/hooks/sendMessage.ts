import type {Message} from 'discord.js';

export function sendMessage(channel: Message['channel'], message: string, delay = 2000) {
    channel.sendTyping();

    setTimeout(() => {
        channel.send(message);
    }, delay);
}

export function sendReply(channel: Message['channel'], reply: Message['reply'], message: string, delay = 2000) {
    channel.sendTyping();
    setTimeout(async () => {
        await reply(message);
    }, delay);
}