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
		let lvl5 = message.member.guild.roles.find('name', 'Grunt (level 5)');
		console.log("lvl5 role code ran")
		member.addRole(lvl5);
	}
	if(message.content.startsWith('Ayee! You reached level 10,')){
		let member = message.mentions.members.first();
		let lvl10 = message.member.guild.roles.find('name', 'Jackal (level 10)');
		console.log("lvl10 role code ran")
		member.addRole(lvl10);
	}
	if(message.content.startsWith('Ayee! You reached level 20,')){
		let member = message.mentions.members.first();
		let lvl20 = message.member.guild.roles.find('name', 'Marine (level 20)');
		console.log("lvl20 role code ran")
		member.addRole(lvl20);
	}
	if(message.content.startsWith('Ayee! You reached level 30,')){
		let member = message.mentions.members.first();
		let lvl30 = message.member.guild.roles.find('name', 'Brute (level 30)');
		console.log("lvl30 role code ran")
		member.addRole(lvl30);
	}
	if(message.content.startsWith('Ayee! You reached level 40,')){
		let member = message.mentions.members.first();
		let lvl40 = message.member.guild.roles.find('name', 'Elite (level 40)');
		console.log("lvl40 role code ran")
		member.addRole(lvl40);
	}
	if(message.content.startsWith('Ayee! You reached level 50,')){
		let member = message.mentions.members.first();
		let lvl50 = message.member.guild.roles.find('name', 'Spartan 4 (level 50)');
		console.log("lvl50 role code ran")
		member.addRole(lvl50);
	}
	 
})

client.login(process.env.token)
