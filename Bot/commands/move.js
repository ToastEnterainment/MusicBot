const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if (message.member.voiceChannel) {        
        let queue = client.queues[message.guild.id];

        if (!queue) {
            const embed = new Discord.RichEmbed();
            embed.setDescription(client.messages.get("noQueue"));
            embed.setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16));
            message.channel.send(embed);
            return;
        }        
        
        if (args[0] === "0" || args[1] === "0") {
            const embed = new Discord.RichEmbed();
            embed.setDescription(client.messages.get("useCurrentTrack"));
            embed.setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16));
            message.channel.send(embed);
            return;
        }

        const temp = queue[args[1]];
        queue[args[1]] = queue[args[0]];
        queue[args[0]] = temp;

        console.log(queue);

    } else {
        const embed = new Discord.RichEmbed();
        embed.setDescription(client.messages.get("noVoiceChannel"));
        embed.setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16));
        message.channel.send(embed);
        return;
    }
}

exports.requirements = [
    
];

exports.permissions = [
    
];

exports.aliases = [
    "m"
]