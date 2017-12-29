/**
 * @author Moquo (Moritz Maier)
 */

// Get the configuration
const config = require('./config.json')

// discord.js library
const Discord = require('discord.js');

// Client
const client = new Discord.Client();

// On ready
client.on('ready', () => {
    console.log('Ready.');
    client.user.setGame('https://github.com/Moquo/discord-reaction-bot')
});

// On message
client.on('message', (msg) => {
    // Is the sender a bot? If it is, cancel
    if(msg.author.bot) return;

    // Check if information command was called
    if(msg.content === 'reaction-bot') {
        msg.channel.send({
            embed: {
                color: 0x37dbd0,
                author: {
                    name: client.user.name,
                    icon_url: client.user.avatarURL
                },
                title: 'Reaction bot by Moquo',
                url: 'https://github.com/Moquo/discord-reaction-bot',
                description: 'Reaction bot adds reactions to messages'
            }
        });
        return;
    }

    // React to the message
    if(config.rankCheck.enabled && !(msg.member.roles.some(role => config.rankCheck.roles.includes(role.name)))) return;
    msg.react(config.react_emoji);
});

// Login with bot token
client.login(config.token);
