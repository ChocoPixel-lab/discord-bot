# discord-bot


We use: 
1. Node JS 
2. discord.js 
3. VS code 

Installation: 

1. Download and install NodeJS for the PC. 
2. Open VS code. 
3. Create a new project for the bot development. 
2. Open terminal with " Ctrl+ ` ". 
3. Install discord.js package with " npm install ---save discord.js " or " npm install discord.js " 
        It'll install all the required tools and package for developing this bot. 
4. In the main JS file type the bot code : 
        const Discord = require('discord.js');
        const client = new Discord.Client();

        client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
        });

        client.on('message', msg => {
        if (msg.content === 'ping') {
        msg.reply('Pong!');
        }
      });

      client.login('token');
