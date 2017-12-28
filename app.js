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
});

// On message
client.on('message', (msg) => {
    // Is the sender a bot? If it is, cancel
    if(msg.author.bot) return;
    // React to the message
    msg.react(config.react_emoji);
});

// Login with bot token
client.login(config.token);
