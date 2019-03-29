const Discord = require('discord.js');
const {prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!')
})

client.on('message', message => {
	console.log(message.content);
	if(message.content.startsWith('Ayee! You reached level 5,')){
		let member = message.mentions.members.first();
		let lvl5 = message.member.guild.roles.find('name', 'level 5');
		console.log("lvl5 role code ran")
		member.addRole(lvl5);
	}
	if(message.content.startsWith('Ayee! You reached level 10,')){
		let member = message.mentions.members.first();
		let lvl10 = message.member.guild.roles.find('name', 'level 10');
		console.log("lvl10 role code ran")
		member.addRole(lvl10);
	}
	if(message.content.startsWith('Ayee! You reached level 20,')){
		let member = message.mentions.members.first();
		let lvl20 = message.member.guild.roles.find('name', 'level 20');
		console.log("lvl20 role code ran")
		member.addRole(lvl20);
	}
	 
})

client.login(token);
