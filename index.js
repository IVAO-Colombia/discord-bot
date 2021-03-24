const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setActivity("As Real as It Gets", { type: "WATCHING" });
  console.log("Listo!");
});

let prefix = process.env.PREFIX;
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || !message.guild) return;
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content.startsWith(prefix + "info")) {
    message.reply({
      embed: {
        description: `# Hola Malditos Mancos
        |Comandos|
        |----------------|
        |inop|
        |cora|
        |pedra|
        |urss|
        |mwif|
        |mnov|
        |gfrc|
        |pats|
        |skinner|
        |kpi|
        |btss|
        |t18v|
        |tchk|
        |typc|
        |cpetr|
        |mcap|
        |lmzn|
        |ldtv|
        |lmch|
        |cnpi|
        |lcal|
        |peng|
        |fcpe|
        |fcata|
        |fcura|
        |flive|
        |fpoli|
        |rcop|
        |ridc|
        |rnhp|
        |rrgr|
        |rrej|
        |rwrl|`,
      },
    });
  }
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
  if (message.content.startsWith(prefix + "pedra")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/pedra.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "urss")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/urss.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "gfrc")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/Gutenberg/gfrc.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "pats")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/pats.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "skinner")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/skinner.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "kpi")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/kpi.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "btss")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/Gutenberg/btss.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "t18v")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/Triana/t18v.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "tchk")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/Triana/tchk.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "typc")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/Triana/typc.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "fcpe")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/fcpe.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "mwif")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/Comandante/mwif.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "cpetr")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/Comandante/cpetr.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "mcap")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/mcap.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "lmzn")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/lmzn.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "cnpi")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/Comandante/cnpi.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "lcal")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/lcal.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "lmch")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/lmch.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "ldtv")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/ldtv.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "peng")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/pedraza/peng.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "fcata")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/federico/fcata.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "fcura")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/federico/fcura.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "flive")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/federico/flive.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "fpoli")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/federico/fpoli.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "rcop")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/restrepo/rcop.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "ridc")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/restrepo/ridc.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "rnhp")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/restrepo/rnhp.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "rrgr")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/restrepo/rrgr.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "rrej")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/restrepo/rrej.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "rwrl")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/restrepo/rwrl.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
  if (message.content.startsWith(prefix + "mnov")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/Comandante/mnov.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }

  if (message.content.startsWith(prefix + "cora")) {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./audios/llamas/cora.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
});

client.login(process.env.TOKEN);
