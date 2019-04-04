const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("525993809977278497")
setInterval(function() {
channel.send(`سبيتني هااااا ابلع يا خرا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
