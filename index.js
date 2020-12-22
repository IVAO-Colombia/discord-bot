const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setActivity("As Reas as It Gets", { type: "WATCHING" });
  console.log("Listo!");
});

let prefix = process.env.PREFIX;
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || !message.guild) return;
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content.startsWith(prefix + "inop")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/inoperante.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
});

client.login(process.env.TOKEN);
