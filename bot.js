  
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);NjE5OTc0MjQyMzcyNDE5NTg0.XXT_9w.mMKBQ9ARQ1Qo6peQQsh8hCjRqV4
