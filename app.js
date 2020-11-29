const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot Online ! ');
});

client.on('message', message => {
    if (message.content === `${prefix}ping`) {
        // send back "Pong." to the channel the message was sent in
        message.channel.send(`pong`);
    } else if (message.content === `${prefix}help`) {
        message.channel.send('This is a test server. Try these commands: ping, about, server');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name:  ${message.guild.name}\n Total members:  ${message.guild.memberCount} \n Premium count: ${message.guild.premiumSubscriptionCount} \n Server creater: ${message.guild.createdAt} \n Server Region: ${message.guild.region}`);
    } else if (message.content === `${prefix}about`) {
        message.channel.send(`Test server designed by ${client.user.tag}`);
    } else if (message.content === `${prefix}games`) {
        message.channel.send(`${message.guild.name} plays Amongus. We're upgrading everyday`);
    } else if (message.content === `${prefix}au`) {
        message.channel.send('Create a AmongUs game using the format \n <Game code> \n <Game server> \n <Map>');
    } else if (message.content === `${prefix}userinfo`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    } 
});


client.login(token);
