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

// Login with bot token
client.login(config.token);
