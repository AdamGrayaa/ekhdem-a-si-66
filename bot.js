
require('events').EventEmitter.defaultMaxListeners = 20;

const Discord = require("discord.js");
const db = require("quick.db");
const hastebin = require("hastebin-gen");
const client = new Discord.Client();
const Canvas = require("canvas");
const fs = require("fs");
const getYoutubeID = require("get-youtube-id");
const moment = require("moment");
const { Client, Util } = require("discord.js");
const UserBlocked = new Set();
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
const figlet = require("figlet");
const queue = new Map();
const zalgo = require("zalgolize");
const fetchVideoInfo = require("youtube-info");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require("dateformat");
const pretty = require("pretty-ms"),
  ti = {},
  spee = {};

client.on("message", function(message) {
  if (message.content.startsWith(prefix + "help")) {
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageRPS = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    let arrayRPS = ["**# - Rock**", "**# - Paper**", "**# - Scissors**"];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setTitle(":robot: ⊃ BOT HELP Menu :")
      .setDescription(
        `**
      > ╸ 🌍 <:2042_FeelsGoodMan:670708308990099476>┞ ● Public Commands <a:x3:669831450014777344> الاوامر العامه
      
      > ╸ 👑 <a:3863_gearz:670706744695062581>┞ ● Admin Commands <a:x3:669831450014777344> الاوامر الإدارية
    
      > ╸ 🎮 <:9925_RubiksCube:670708001543553083>┞ ● Games Commands <a:x3:669831450014777344> اوامر الألعاب
     
      > ╸ 🌀 <:5197_catface_grin_whiskers_kawai:670707623879770117>┞ ● Orders Commands <a:x3:669831450014777344> الأوامر المميزة
     
      > ╸ 🔒 <a:603846328229036034:670703238550519874>┞ ● Protection Commands <a:x3:669831450014777344> أوامر الحماية
   **`
      )
      .setFooter(
        "All Copy Right Reserved For: Joker D.Shelby | Holanda - 2020"
      );
    message.channel.send(RpsEmbed).then(msg => {
      msg.react("🌍");
      msg.react("👑");
      msg.react("🎮");
      msg.react("🌀");
      msg
        .react("🔒")
        .then(() => msg.react("🌍"))
        .then(() => msg.react("👑"))
        .then(() => msg.react("🎮"))
        .then(() => msg.react("🌀"))
        .then(() => msg.react("🔒"));
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "🌍" && user.id === message.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "👑" && user.id === message.author.id;
      let reaction3Filter = (reaction, user) =>
        reaction.emoji.name === "🎮" && user.id === message.author.id;
      let reaction4Filter = (reaction, user) =>
        reaction.emoji.name === "🌀" && user.id === message.author.id;
      let reaction5Filter = (reaction, user) =>
        reaction.emoji.name === "🔒" && user.id === message.author.id;

      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: 20000
      });
      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: 18000
      });
      let reaction3 = msg.createReactionCollector(reaction3Filter, {
        time: 16000
      });
      let reaction4 = msg.createReactionCollector(reaction4Filter, {
        time: 14000
      });
      let reaction5 = msg.createReactionCollector(reaction5Filter, {
        time: 12000
      });
      reaction1.on("collect", r => {
        const embed = new Discord.RichEmbed().setColor("#000000")
          .setDescription(`**
<a:x4:669851082733912064> | __ Public Commands - اوامر عامة __
  
    ✴ -sug =====> To Suggest | لعمل اقتراح
    ✴ -2id ======> To Show Your ID | ايدي حسابك في صورة
    ✴ -id ======> To Show Your ID | ايدي حسابك
    ✴ -profile ====> Probot Profile | بروفايلك في بروبوت
    ✴ -allbots => Show All Bots In The Server | لاضهار جميع البوتات
    ✴ -bot =====> Information Of The Bot | معلومات البوت
    ✴ -toptext ==> Top Text List | التوب تيكست
    ✴ -topvoice ==> Top Voice List | التوب فويس
    ✴ -top ==> Top List | التوب فويس و تيكتس
    ✴ -server ==> Information Of The Server | معلومات السيرفر
    ✴ -report =====> To Report A Person | للتبليغ عن شخص 
    ✴ -count ===> Member Count | عدد الاشخاص في السيرفر
    ✴ -cal =====> To Calculate | اله لحاسبة 
    ✴ -points =====> Know Your Points |نقاطك زي برووبت
    ✴ -tag =====> To Tag A Word | لعمل تاق لكلمة 
    ✴ -rooms ===> Show Rooms Of Server | اضهار الرومات الي في السيرفر
    ✴ -za5 =====> To decorate Some Word | لزخرفة الكلمات
    ✴ -roles ===> Show Roles Of The Server | اضهار الرانكات
    ✴ -emojis ==> Emoji Of Server | ايموجيات السيرفر   
    ✴ -say =====> The Bot Say Any Thing | تكرار اي شي كتبتو
    ✴ -image ===> To Show Image Of Server | لاضهار صورة السيرف 
    ✴ -contact => To Contact Owners Bot | مراسلة صاحب البوت
    ✴ -invite \ -inv => Invite Bot | لدعوة البوت
    ✴ -embed ===> To Embed | لتكرار اي شي كتبتو بطريقة حلوة
    ✴ -avatar ==> Your Avatar | صورتك الشخصية
    ✴ -support => Server Support | سيرفر الدعم الفني
`);
        message.author.sendEmbed(embed);
      });
      reaction2.on("collect", r => {
        const embed = new Discord.RichEmbed().setColor("#000000")
          .setDescription(`**
<a:x5:669851115939954698> | __ Admin Commands - اوامر ادارية : __

    ❖ -move @user => Move User To Your Room Voice | لسحب الشخص الى روومك
    ❖ -mvall => Move All To Your Room Voice | لسحب الجميع الي روومك
    ❖ -setLog => تحديد روم اللوق
    ❖ -accept => لقبول تقديم
    ❖ -refuse => لرفوض تقديم
    ❖ -vb => لتبنيد شخص فويس
    ❖ -uvb => لفك باند فويس عن شخص
    ❖ -toggleLog => تفعيل او الغاء اللوق
    ❖ -bc => Broadcast | رسالة جماعية الى كل اعضاء السيرفر
    ❖ -role @user <rank> => Give User Rank | لأعطاء رتبة لعضو معين
    ❖ -roleremove @user <rank> => remove Rank From User | لازالة الرتبة من شخص معين
    ❖ -role all <rank> => Give All Rank | لأعطاء رتبة للجميع
    ❖ -role humans <rank> => Give Humans Rank | لأعطاء رتبة للاشخاص فقط
    ❖ -role bots <rank> => Give Bots Rank | لأعطاء رتبة لجميع البوتات
    ❖ -hchannel => Hide Channel | اخفاء الشات
    ❖ -schannel => Show The Hidden Channel | اضهار الشات المخفية
    ❖ -clr <numbr> => Clear Chat With Number | مسح الشات بعدد
    ❖ -clear => Clear Chat | مسح الشات
    ❖ -mute @user <reason> => Mute User | اعطاء العضو ميوت لازم رتبة <Muted>
    ❖ -unmute @user> Unmute User | لفك الميوت عن الشخص 
    ❖ -kick @user <reason> => Kick User From Server | طرد الشخص من السيرفر
    ❖ -ban @user <reason> => Ban User From Server | حضر الشخص من السيرفر
    ❖ -mutechannel => Mute Channel | تقفيل الشات
    ❖ -unmutechannel => Unmute Channel | فتح الشات
    ❖ -setac => Create An Accepted/Refused Room | انشاء روم للمقبولين و المرفوضين
    ❖ -setreport => Creating A Report Room | انشاء روم التبليغات 
    ❖ -dc => Delete All Rooms |  مسح كل الرومات
    ❖ -dr => Delete All Rank <مسح كل الرانكات <لازم تكون رانك البوت فوق كل الرانكات
    ❖ -ccolors <number> => Create Colors | ينشا لك الوان مع كم الوان تبي
    ❖ -kv @user => Voice Kick | يطرد شخص من الرووم
    ❖ -add.r => Create A Role | انشاء رتبة
    ❖ -warn => Warn A Member | تحذير شخص
    ❖ -vonline => Create Channel Voice Online | انشاء روم بعدد الفويس اونلاين
**

`);
        message.author.sendEmbed(embed);
      });
      reaction3.on("collect", r => {
        const embed = new Discord.RichEmbed().setColor("#000000")
          .setDescription(`**
:dart: | __  Games Commands - اوامر الالعاب : __ 

💠 -xo @user => Game XO | لعب اكس او
    💠 -rps => Rock & Paper & Scissors | لعبة حجر ورقة مقص
    💠 -slots => Game Of Fruits | لعبة الفواكه
    💠 -marry @user => لعبة الزواج
    💠 -speed => لعبة سرعة كتابة 
    💠 -لعبة فكك <= فكك
    💠 -لعبة عواصم <= عواصم
    💠 -البوت يعطيك نصائح <= هل تعلم
		قريييب نضيف بعض الالعاب واذا تبون اي لعبة تعالو سيرفر المساعد
`);
        message.author.sendEmbed(embed);
      });
      reaction4.on("collect", r => {
        const embed = new Discord.RichEmbed().setColor("#000000")
          .setDescription(`**
<a:x6:669863191139844125> | __ Speacial Commands - اوامر المميزة __ 

     ❖ -new         => لانشاء تيكت
     ❖ -close            => لاغلاق تيكت
     ❖ -confirm            =>لتكيد اغلاق تيكت
     ❖ -giveaway         => لانشاء قيف اواي
**

`);
        message.author.sendEmbed(embed);
      });
      reaction5.on("collect", r => {
        const embed = new Discord.RichEmbed().setColor("#000000")
          .setDescription(`**
<a:x7:669873017014452234> | __ Protection Commands - اوامر الحمايه : __

💠 -settings limitsban      => كم شخص يبندو شخص من شان يتبند
💠 -settings limitskick     => كم شخص يسويلو كيك شخص من شان يتبند
💠 -settings limitsroleD    => كم رتبة يحذفها شخص من شان يتبند
💠 -settings limitsroleC    => كم رتبة يسويها شخص من شان يتبند
💠 -settings limitschannelD => كم روم يحذفو شخص من شان يتبند
💠 -antibots on             => تشغيل مانع البوتات
💠 -antibots off            => ابطال مانع البوتات
💠 -settings limitstime     => في كم ثانية شخص يسوي اي شي من الاشياء السابقة من شان يتبند
**
`);
        message.author.sendEmbed(embed);
      });
    });
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "xo")) {
    let array_of_mentions = message.mentions.users.array();
    let symbols = [":o:", ":heavy_multiplication_x:"];
    var grid_message;

    if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
      let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      let random2 = Math.abs(random1 - 1);
      if (array_of_mentions.length == 1) {
        random1 = 0;
        random2 = 0;
      }
      var player1_id = message.author.id;
      let player2_id = array_of_mentions[random2].id;
      var turn_id = player1_id;
      var symbol = symbols[0];
      let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
      if (player1_id == player2_id) {
        initial_message += "\n_( ألعب مع نفسك)_";
      }
      message.channel
        .send(`Xo ${initial_message}`)
        .then(console.log("Successful tictactoe introduction"))
        .catch(console.error);
      message.channel
        .send(
          ":one::two::three:" +
            "\n" +
            ":four::five::six:" +
            "\n" +
            ":seven::eight::nine:"
        )
        .then(new_message => {
          grid_message = new_message;
        })
        .then(console.log("Successful tictactoe game initialization"))
        .catch(console.error);
      message.channel
        .send("يجب الانتضار حيث ما يتم الموافقه")
        .then(async new_message => {
          await new_message.react("1⃣");
          await new_message.react("2⃣");
          await new_message.react("3⃣");
          await new_message.react("4⃣");
          await new_message.react("5⃣");
          await new_message.react("6⃣");
          await new_message.react("7⃣");
          await new_message.react("8⃣");
          await new_message.react("9⃣");
          await new_message.react("🆗");
          await new_message
            .edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
            .then(new_new_message => {
              require("./xo.js")(
                client,
                message,
                new_new_message,
                player1_id,
                player2_id,
                turn_id,
                symbol,
                symbols,
                grid_message
              );
            })
            .then(console.log("Successful tictactoe listener initialization"))
            .catch(console.error);
        })
        .then(console.log("Successful tictactoe react initialization"))
        .catch(console.error);
    } else {
      message
        .reply(`منشن مع من تريد ألعب`)
        .then(console.log("Successful error reply"))
        .catch(console.error);
    }
  }
});


client.on("message", message => {
  var prefix = "-";
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong...").then(msg => {
      msg.edit(
        `\`\`\`javascript\nTime taken: ${msg.createdTimestamp -
          message.createdTimestamp} ms.\nDiscord API: ${Math.round(
          client.ping
        )} ms.\`\`\``
      );
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "2id")) {
    if (!message.channel.guild) return;
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    moment.locale("ar");
    const w = ["./id1.png", "./id2.png", "./id3.png", "./id4.png", "./id5.png"];
    let Image = Canvas.Image,
      canvas = new Canvas(500, 500),
      ctx = canvas.getContext("2d");
    ctx.patternQuality = "bilinear";
    ctx.filter = "bilinear";
    ctx.antialias = "subpixel";
    ctx.shadowColor = "rgba(0, 0, 0, 0)";
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function(
      err,
      Background
    ) {
      if (err) return console.log(err);
      let BG = Canvas.Image;
      let ground = new Image();
      ground.src = Background;
      ctx.drawImage(ground, 0, 0, 500, 500);
    });
    let url = h.user.displayAvatarURL.endsWith(".webp")
      ? h.user.displayAvatarURL.slice(5, -20) + ".png"
      : h.user.displayAvatarURL;
    jimp.read(url, (err, ava) => {
      if (err) return console.log(err);
      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
        if (err) return console.log(err);
        //time dateformet
        const millis = new Date().getTime() - h.user.createdAt.getTime();
        const now = new Date();
        dateFormat(now, "dddd, mmmm dS, yyyy");
        const stats2 = ["online", "Low", "Medium", "Insane"];
        const days = millis / 1000 / 60 / 60 / 24;
        dateFormat(now, "dddd, mmmm dS, yyyy");

        //دخولك الديسكورد
        var day = `From ${days.toFixed(0)} Day`;
        ctx.font = "27px Arial Bold";
        ctx.fontSize = "30px";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(day, 109, 97);
        //wl
        var millis1;
        if (mentionned) {
          var millis1 = new Date().getTime() - mentionned.joinedAt;
        } else {
          var millis1 = new Date().getTime() - moment(message.member.joinedAt);
        }

        const days1 = millis1 / 1000 / 60 / 60 / 24;

        //دخولك السيرفر
        var day2 = `From ${days1.toFixed(0)} Day`;
        ctx.font = "27px Arial Bold";
        ctx.fontSize = "20px";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(day2, 388, 97);

        //ur name
        ctx.font = "27px BlowBrush";
        ctx.fontSize = "30px";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "center";
        ctx.fillText(h.user.username, 245, 365);
        //tag
        ctx.font = "27px Arial Bold";
        ctx.fontSize = "45px";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(`#${heg.discriminator}`, 120, 450);

        //حالتك
        let status;
        if (h.presence.status === "online") {
          status = "Online";
        } else if (h.presence.status === "dnd") {
          status = "DND";
        } else if (h.presence.status === "idle") {
          status = "Idle";
        } else if (h.presence.status === "offline") {
          status = "Offline";
        }
        ctx.font = "27px Arial Bold";
        ctx.fontSize = "30px";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(`${status}`, 380, 450);

        //Avatar
        let Avatar = Canvas.Image;
        let ava = new Avatar();
        ava.src = buf;
        ctx.beginPath();
        ctx.arc(250, 238, 64, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(ava, 185, 172, 130, 130);

        message.channel.sendFile(canvas.toBuffer());
      });
    });
  }
});

client.on("message", msg => {
  var prefix = "-";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

  if (command === "clr") {
    const emoji = client.emojis.find("name", "wastebasket");
    let textxt = args.slice(0).join("");
    if (msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == "") {
        msg.delete().then;
        msg.channel
          .send("***```Supply A Number```***")
          .then(m => m.delete(3000));
      } else {
        msg.delete().then;
        msg.delete().then;
        msg.channel.bulkDelete(textxt);
        msg.channel
          .send("```Cleard: " + textxt + " Messages```")
          .then(m => m.delete(3000));
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content.startsWith("-play")) {
    msg.channel.send("Use >play");
  }
});

client.on("guildCreate", guild => {
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("Click Here To Add Bot .!")
    .setURL(
      "https://discordapp.com/oauth2/authorize?client_id=400489866573512705&permissions=8&scope=bot"
    ).setDescription(`**
  New Server Add Holanda Bot ✅
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
  client.channels.get("467833183254347797").sendEmbed(embed);
});

client.on("guildDelete", guild => {
  const embed = new Discord.RichEmbed()
    .setColor("GOLD")
    .setTitle("Click Here To Add Bot .!")
    .setURL(
      "https://discordapp.com/oauth2/authorize?client_id=400489866573512705&permissions=8&scope=bot"
    ).setDescription(`**
   Server kicked Holanda Bot :cry:
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
  client.channels.get("467833183254347797").sendEmbed(embed);
});

const prefix = "-";
client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;
  const args = msg.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command === `play`) {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) return msg.channel.send("يجب ان تكون بروم صوتي ");
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send("ما عندي صلاحيات للدخول في هاد الرروم");
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.send("ما عندي صلاحيات للتكلم في هاد الرروم");
    }

    if (!permissions.has("EMBED_LINKS")) {
      return msg.channel.sendMessage("**`EMBED LINKS يجب ان اتوفر برمشن **");
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();

      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, msg, voiceChannel, true);
      }
      return msg.channel.send(
        ` **${playlist.title}** تم الضافة الي قائمة التشغبل`
      );
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 5);
          let index = 0;
          const embed1 = new Discord.RichEmbed()
            .setDescription(
              `**الرجاء اختيار رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join("\n")}`
            )

            .setFooter("Holanda Bot");
          msg.channel.sendEmbed(embed1).then(message => {
            message.delete(20000);
          });

          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                maxMatches: 1,
                time: 15000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return msg.channel.send("لم يتم إختيآر اي مقطع صوتي");
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send(":X: لا يتوفر نتآئج بحث ");
        }
      }

      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === `skip`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("أنت لست بروم صوتي .");
    if (!serverQueue) return msg.channel.send("مافي اي مقطع لتجاوزه");
    serverQueue.connection.dispatcher.end("تم تجاوز المقطع");
    return undefined;
  } else if (command === `stop`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("أنت لست بروم صوتي .");
    if (!serverQueue) return msg.channel.send("لمافي اي مقطع لايقافه");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("تم إيقاف المقطع");
    return undefined;
  } else if (command === `vol`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("أنت لست بروم صوتي .");
    if (!serverQueue) return msg.channel.send("لا يوجد شيء شغآل.");
    if (!args[1])
      return msg.channel.send(
        `:loud_sound: مستوى الصوت **${serverQueue.volume}**`
      );
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
    return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
  } else if (command === `np`) {
    if (!serverQueue) return msg.channel.send("لا يوجد شيء حالي فالعمل.");
    const embedNP = new Discord.RichEmbed().setDescription(
      `:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`
    );
    return msg.channel.sendEmbed(embedNP);
  } else if (command === `queue`) {
    if (!serverQueue) return msg.channel.send("لا يوجد شيء حالي فالعمل.");
    let index = 0;

    const embedqu = new Discord.RichEmbed().setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join("\n")}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`);
    return msg.channel.sendEmbed(embedqu);
  } else if (command === `pause`) {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.send("تم إيقاف الموسيقى مؤقتا!");
    }
    return msg.channel.send("لا يوجد شيء حالي ف العمل.");
  } else if (command === "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.send("استأنفت الموسيقى بالنسبة لك !");
    }
    return msg.channel.send("لا يوجد شيء حالي في العمل.");
  }

  return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  console.log(video);

  //	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
  const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      queue.delete(msg.guild.id);
      return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else
      return msg.channel.send(
        ` **${song.title}** تم اضافه الاغنية الي القائمة!`
      );
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", reason => {
      if (reason === "Stream is not generating quickly enough.")
        console.log("Song ended.");
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}
const adminprefix = "-";
const devs = ["385850714666303489"];
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!devs.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + "setname")) {
    client.user.setUsername(argresult).then;
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`);
    return message.reply(
      "**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **"
    );
  } else if (message.content.startsWith(adminprefix + "setavatar")) {
    client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
  }
});

client.on("message", ra3d => {
  var prefix = "-";
  let args = ra3d.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (ra3d.content.startsWith(prefix + "ccolors")) {
    if (!args) return ra3d.channel.send("`How Many Colors??`");
    if (!ra3d.member.hasPermission("MANAGE_ROLES"))
      return ra3d.channel.sendMessage(
        "**You Dont Have Permission `MANAGE_ROLES`**"
      );
    ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < `${parseInt(args) + 1}`; x++) {
      ra3d.guild.createRole({ name: x, color: "RANDOM" });
    }
  }
});

client.on("message", message => {
  var prefix = "-";
  var cats = [
    "http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg",
    "https://haltaalam.info/wp-content/uploads/2015/05/0.208.png",
    "https://haltaalam.info/wp-content/uploads/2015/05/266.png",
    "https://haltaalam.info/wp-content/uploads/2015/05/250.png",
    "https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png",
    "https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png",
    "http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg",
    "http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg",
    "https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png",
    "https://pbs.twimg.com/media/B18VworIcAIMGsE.png"
  ];
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "هل تعلم")) {
    var cat = new Discord.RichEmbed().setImage(
      cats[Math.floor(Math.random() * cats.length)]
    );
    message.channel.sendEmbed(cat);
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  var prefix = "-";
  if (message.content.startsWith(prefix + "allbots")) {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setDescription(
        `**Found ${
          message.guild.members.filter(m => m.user.bot).size
        } bots in this Server**
${botssize.join("\n")}`
      )
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp();
    message.channel.send(embed);
  }
});

client.on("message", function(message) {
  var prefix = "-";
  if (message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageRPS = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    let arrayRPS = ["**# - Rock**", "**# - Paper**", "**# - Scissors**"];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .addField("Rock", "🇷", true)
      .addField("Paper", "🇵", true)
      .addField("Scissors", "🇸", true);
    message.channel.send(RpsEmbed).then(msg => {
      msg.react(" 🇷");
      msg.react("🇸");
      msg
        .react("🇵")
        .then(() => msg.react("🇷"))
        .then(() => msg.react("🇸"))
        .then(() => msg.react("🇵"));
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "🇷" && user.id === message.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "🇸" && user.id === message.author.id;
      let reaction3Filter = (reaction, user) =>
        reaction.emoji.name === "🇵" && user.id === message.author.id;
      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: 12000
      });

      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: 12000
      });
      let reaction3 = msg.createReactionCollector(reaction3Filter, {
        time: 12000
      });
      reaction1.on("collect", r => {
        message.channel.send(result);
      });
      reaction2.on("collect", r => {
        message.channel.send(result);
      });
      reaction3.on("collect", r => {
        message.channel.send(result);
      });
    });
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.content.startsWith(prefix + "server")) {
    if (!message.channel.guild) return message.reply(" ");
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("**🆔 Server ID:**", message.guild.id, true)
      .addField(
        "**📅 Created On**",
        message.guild.createdAt.toLocaleString(),
        true
      )
      .addField(
        "**👑 Owned by**",
        `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`
      )
      .addField("👥 Members ", `[${message.guild.memberCount}]`, true)
      .addField(
        "**💬 Channels **",
        `**${message.guild.channels.filter(m => m.type === "text").size}**` +
          " text | Voice  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField("**🌍 Others **", message.guild.region, true)
      .addField(
        "** 🔐 Roles **",
        `**[${message.guild.roles.size}]** Role `,
        true
      )
      .setColor("#000000");
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith("-bot")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle("``INFO Holanda Bot`` ")
        .addField(
          "``My Ping``",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField(
          "``RAM Usage``",
          `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`,
          true
        )
        .addField("``servers``", [client.guilds.size], true)
        .addField("``channels``", `[ ${client.channels.size} ]`, true)
        .addField("``Users``", `[ ${client.users.size} ]`, true)
        .addField("``My Name``", `[ ${client.user.tag} ]`, true)
        .addField("``My ID``", `[ ${client.user.id} ]`, true)
        .addField("``My Prefix``", `[ - ]`, true)
        .addField("``My Language``", `[ Java Script ]`, true)
        .setFooter("By | Thomas Shelby")
    });
  }
});

client.on("message", async Epic => {
  var prefix = "-";
  if (Epic.content.startsWith(prefix + "vonline")) {
    if (!Epic.guild.member(Epic.author).hasPermissions("MANAGE_CHANNELS"))
      return Epic.reply(":x: **I Dont Have Permissions**");
    if (
      !Epic.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return Epic.reply(":x: **You Dont Have Permissions**");
    Epic.guild
      .createChannel(
        `Voice Online : [ ${
          Epic.guild.members.filter(m => m.voiceChannel).size
        } ]`,
        "voice"
      )
      .then(c => {
        console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
        c.overwritePermissions(Epic.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(() => {
          c.setName(
            `Voice Online :  ${
              Epic.guild.members.filter(m => m.voiceChannel).size
            } .`
          );
        }, 1000);
      });
  }
});

client.on("message", message => {
  var prefix = "-";
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("``Use : " + prefix + "move @User``");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(
              `✅ You Have Moved <@${usermentioned}> To Your Channel`
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name}`)
            .setColor("RANDOM")
            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "`You Cant Move" +
              message.mentions.members.first() +
              " `The User Should Be In channel To Move It`"
          );
        }
      } else {
        message.channel.send(
          "**``You Should Be In Room Voice To Move SomeOne``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == "-count")
    var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle("🌍| Members info")
      .addBlankField(true)
      .addField("Mmeber Count", `${message.guild.memberCount}`);
  message.channel.send(IzRo);
});

client.on("message", msg => {
  var prefix = "-";
  if (msg.content.startsWith(prefix + "cal")) {
    let args = msg.content.split(" ").slice(1);
    const question = args.join(" ");
    if (args.length < 1) {
      msg.reply("Specify a equation, please.");
    } else {
      let answer;
      try {
        answer = math.eval(question);
      } catch (err) {
        msg.reply(`Error: ${err}`);
      }

      const embed = new Discord.RichEmbed()
        .addField("**Input**: ", `**${question}**`, true)
        .addField("**Output**: ", `**${answer}**`, true);
      msg.channel.send(embed);
    }
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.content.startsWith(prefix + "tag")) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) return message.reply("Write Some Things");

    figlet(args.join(" "), (err, data) => {
      message.channel.send("```" + data + "```");
    });
  }
});

client.on("message", message => {
  var prefix = "-";
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "bc")) {
    if (!message.channel.guild)
      return message.channel
        .send("**This Command Only For Servers**")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**You Dont Have perms** `ADMINISTRATOR`");
    let args = message.content
      .split(" ")
      .join(" ")
      .slice(2 + prefix.length);
    let copy = "Holanda Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply("**Write Some Things To Broadcast**");
    message.channel
      .send(`**Are You Sure \nThe Broadcast: ** \` ${args}\``)
      .then(msg => {
        msg
          .react("✅")
          .then(() => msg.react("❌"))
          .then(() => msg.react("✅"));

        let reaction1Filter = (reaction, user) =>
          reaction.emoji.name === "✅" && user.id === message.author.id;
        let reaction2Filter = (reaction, user) =>
          reaction.emoji.name === "❌" && user.id === message.author.id;

        let reaction1 = msg.createReactionCollector(reaction1Filter, {
          time: 12000
        });
        let reaction2 = msg.createReactionCollector(reaction2Filter, {
          time: 12000
        });
        reaction1.on("collect", r => {
          message.channel
            .send(
              `**☑ | Done ... The Broadcast Message Has Been Sent To __${message.guild.members.size}__ Members**`
            )
            .then(m => m.delete(5000));
          message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle("Broadcast")
              .addField("Server", message.guild.name)
              .addField("Sender", message.author.username)
              .addField("Message", args)
              .setThumbnail(message.author.avatarURL)
              .setFooter(copy, client.user.avatarURL);
            m.send({ embed: bc });
            msg.delete();
          });
        });
        reaction2.on("collect", r => {
          message.channel
            .send(`**Broadcast Canceled.**`)
            .then(m => m.delete(5000));
          msg.delete();
        });
      });
  }
});

let points = {};
const type = [
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
    answers: ["البرازيل"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
    answers: ["السعودية"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
    answers: ["القسطنطينية"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
    answers: ["النهاية"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
    answers: ["امازون"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
    answers: ["جافاسكربت"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
    answers: ["سهله مو صعبه"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
    answers: ["طبق رطب مرق بقر"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
    answers: ["متجر"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
    answers: ["شجرة الأوغيري"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
    answers: ["عش العصفور"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
    answers: ["قم بكتابة"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
    answers: ["كانيكي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
    answers: ["ليوبليانا"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
    answers: ["هواوي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
    answers: ["ياخرا"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
    answers: ["يوم الخميس"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
    answers: ["DO YOU KNOW THE WAY"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
    answers: ["الأرض"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
    answers: ["البوابة"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
    answers: ["الجمل ابو راسين"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
    answers: ["الحوت الأزرقء"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
    answers: ["القارب المكسور"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
    answers: ["المدرسة"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
    answers: ["اليابان"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
    answers: ["بلايستايشن"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
    answers: ["جزر القمر"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
    answers: ["حشيش"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
    answers: ["سوبراشي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
    answers: ["قوتشي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
    answers: ["ايفون"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
    answers: ["تيستا لاغوسا"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
    answers: ["بسكوت ابو ولد"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
    answers: ["تكأكأتم"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
    answers: ["الجملة المفيدة"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
    answers: ["الأوسكار"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
    answers: ["كنت امشي وأمشي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
    answers: ["لااااق بوتء"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
    answers: ["ابو ناصر سرى ليله"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
    answers: ["عدد اللي برمجوني 2"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
    answers: ["Dark_Neet"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
    answers: ["بابا سنفور متعاطي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
    answers: ["ميرندا حمضيات يلد"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
    answers: ["هل الدمع من عينه"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
    answers: ["طارت الطياره طارت"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
    answers: ["أنا فوق راسي ريشه"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
    answers: ["فريق النجمة"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
    answers: ["خالد عبدالرحمن"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
    answers: ["حبيت مره من قلبي"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
    answers: ["كرستيانو يزق"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
    answers: ["أنت قمر يا قمر"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
    answers: ["انا اجمل مخلوق"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
    answers: ["دونت تاتش"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
    answers: ["توم وجيري"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
    answers: ["دباب اربع كفرات"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
    answers: ["القرش الأسودد"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
    answers: ["ددسن موديل 85"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
    answers: ["الحارثيء"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
    answers: ["عزازي مسرع"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
    answers: ["جاكي شاان"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
    answers: ["دارك نت"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
    answers: ["فانتاستيك"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
    answers: ["زباله متنقلة"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
    answers: ["اكس بوكس يلد"]
  },
  {
    type:
      "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
    answers: ["بكسل يالوصخخ"]
  }
];

client.on("message", message => {
  if (!points[message.author.id])
    points[message.author.id] = {
      points: 0
    };
  if (!message.guild) return;
  let id = message.author.id,
    prefix = "-";
  if (spee[id] && new Date().getTime() - spee[id] < 15 * 1000) {
    let r = new Date().getTime() - spee[id];
    r = 15 * 1000 - r;
    message.channel
      .send(`**Sorry, Please Wait ${pretty(r, { verbose: true })}...**`)
      .then(m => m.delete(5000));
    return;
  }
  if (message.content == prefix + "speed") {
    try {
    } catch (e) {}

    if (!message.channel.guild)
      return message
        .reply("**هذا الأمر للسيرفرات فقط**")
        .then(m => m.delete(3000));

    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
      return item.answers.some(
        answer => answer.toLowerCase() === response.content.toLowerCase()
      );
    };
    message.channel.send("**Game is Start now...!**").then(msg => {
      const embed = new Discord.RichEmbed()
        .setColor("0054dd")
        .setAuthor(`⏳ |You have »15« seconds to type the word`)
        .setImage(`${item.type}`)
        .setFooter(`${message.author.tag}`, message.author.avatarURL);

      msg.channel.send(embed).then(() => {
        message.channel
          .awaitMessages(filter, {
            maxMatches: 1,
            time: 15000,
            errors: ["time"]
          })
          .then(collected => {
            const sh = new Discord.RichEmbed()
              .setColor("04791c")
              .setDescription("**✅ |Good Job +1P**")
              .setFooter(`${collected.first().author}`);
            message.channel.sendEmbed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => {
            // في حال لم يقم أحد بالإجابة
            message.channel.send(`🔚 |**Time Is End**`);
          });
      });
    });
    spee[id] = new Date().getTime();
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "za5") {
    let say = new Discord.RichEmbed().setTitle("Text emboss :");
    message.channel.send(`**#** \n ${zalgo(args.join(" "))}`);
  }
});

client.on("message", message => {
  var prefix = "-";
  var args = message.content.split(" ").slice(1);
  var msg = message.content.toLowerCase();
  if (!message.guild) return;
  if (!msg.startsWith(prefix + "role")) return;
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(" **__You Dont Have Permissions__**");
  if (msg.toLowerCase().startsWith(prefix + "roleremove")) {
    if (!args[0]) return message.reply("**:x: Mention User**");
    if (!args[1])
      return message.reply(
        "**:x: Write Name Of Role To Remove it From The User**"
      );
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: Mention Role To Remove it From The User**");
    if (message.mentions.members.first()) {
      message.mentions.members.first().removeRole(role1);
      return message.reply(
        "**:white_check_mark: Success Removed Role [ " +
          role1.name +
          " ] From [ " +
          args[0] +
          " ]**"
      );
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.removeRole(role1));
      return message.reply(
        "**:white_check_mark: Succes Removed Rank [ " +
          role1.name +
          " ]  From All**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.removeRole(role1));
      return message.reply(
        "**:white_check_mark: Succes Removed Rank [ " +
          role1.name +
          " ] From All Bots**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.removeRole(role1));
      return message.reply(
        "**:white_check_mark: Succes Removed Rank [ " +
          role1.name +
          " ] From All Humans**"
      );
    }
  } else {
    if (!args[0]) return message.reply("**:x: Mention User**");
    if (!args[1])
      return message.reply("**:x: Write Name Of Role To Give It To User**");
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: Write Name Of Role To Give It To User**");
    if (message.mentions.members.first()) {
      message.mentions.members.first().addRole(role1);
      return message.reply(
        "**:white_check_mark:Success Gived Rank [ " +
          role1.name +
          " ] To [ " +
          args[0] +
          " ]**"
      );
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: Success Gived All Rank [ " + role1.name + " ]**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: Success Gived All Bots Rank [ " +
          role1.name +
          " ] **"
      );
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: Success Gived All Humans Rank [ " +
          role1.name +
          " ]**"
      );
    }
  }
});

client.on("message", message => {
  if (message.content === "-rooms") {
    if (message.author.bot) return;
    if (!message.guild) return;

    var channels = message.guild.channels
      .map(channels => `${channels.name}, `)
      .join(" ");
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`${message.guild.name}`, `**Rooms:white_check_mark:**`)
      .addField(
        ":arrow_down: Rooms Number. :heavy_check_mark:",
        `** ${message.guild.channels.size}**`
      )

      .addField(
        ":arrow_down:Rooms  Name. :heavy_check_mark::",
        `**[${channels}]**`
      );
    message.channel.sendEmbed(embed);
  }
});

var AsciiTable = require("ascii-data-table").default;
client.on("message", message => {
  if (message.content == "-roles") {
    var ros = message.guild.roles.size,
      data = [["Rank", "RoleName"]];
    for (let i = 0; i < ros; i++) {
      if (message.guild.roles.array()[i].id !== message.guild.id) {
        data.push([
          i,
          `${message.guild.roles
            .filter(r => r.position == ros - i)
            .map(r => r.name)}`
        ]);
      }
    }
    let res = AsciiTable.table(data);

    message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
  }
});

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  var prefix = "-";
  if (message.content === prefix + "hchannel") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("You Dont Have Perms :x:");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: false
    });
    message.channel.send("Channel Hided Successfully ! :white_check_mark:  ");
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.content === prefix + "schannel") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(":x:");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: true
    });
    message.channel.send("Done  ");
  }
});

client.on("message", message => {
  let prefix = "-";
  if (message.content.startsWith(prefix + "emojis")) {
    const List = message.guild.emojis.map(e => e.toString()).join(" ");

    const EmojiList = new Discord.RichEmbed()
      .setTitle("➡ Emojis")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setColor("RANDOM")
      .setDescription(List)
      .setFooter(message.guild.name);
    message.channel.send(EmojiList);
  }
});

client.on("message", function(message) {
  let prefix = "-";
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say")) {
    if (!args) return;
    message.channel.send(`**# ${args}**`);
  }
});

client.on("message", async message => {
  if (message.author.boss) return;
  var prefix = "-";

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "mute") {
    if (!message.channel.guild) return;
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
      return message
        .reply(":x: You Dont Have Perms `MANAGE_MESSAGES`")
        .then(msg => msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message
        .reply("The Bot Haven't Perms `MANAGE_MESSAGES`")
        .then(msg => msg.delete(5000));
    let user = message.mentions.users.first();
    let muteRole = message.guild.roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("**You Should Create A Rank Name `Muted`**")
        .then(msg => {
          msg.delete(5000);
        });
    if (message.mentions.users.size < 1)
      return message.reply("**You Have To Mention SomeOne**").then(msg => {
        msg.delete(5000);
      });
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    message.guild.member(user).addRole(muteRole);
    const muteembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .addField(
        "**:busts_in_silhouette:  User**",
        "**[ " + `${user.tag}` + " ]**",
        true
      )
      .addField(
        "**:hammer:  By**",
        "**[ " + `${message.author.tag}` + " ]**",
        true
      )
      .addField("**:book:  Reason**", "**[ " + `${reason}` + " ]**", true)
      .addField("User", user, true);
    message.channel.send({ embed: muteembed });
    var muteembeddm = new Discord.RichEmbed()
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setDescription(
        `      
${user} You Are Muted Because You Broke Rules 
${message.author.tag} By
[ ${reason} ] : Reason
If You Didnt Any Thing GGO To Staff
`
      )
      .setFooter(`Server : ${message.guild.name}`)
      .setColor("RANDOM");
    user.send(muteembeddm);
  }
  if (command === `unmute`) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel
        .sendMessage(":x: You Dont Have Perms `MANAGE_MESSAGES`")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message
        .reply("The Bot Haven't Perms `MANAGE_MESSAGES`")
        .then(msg => msg.delete(6000));

    let toMute =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!toMute)
      return message.channel.sendMessage(":x: You Have To Mention SomeOne ");

    let role = message.guild.roles.find(r => r.name === "Muted");

    if (!role || !toMute.roles.has(role.id))
      return message.channel.sendMessage(":x: This User In Not Muted");

    await toMute.removeRole(role);
    message.channel.sendMessage(
      ":white_check_mark: Succes Has Been Unmuted The User"
    );

    return;
  }
});

client.on("guildCreate", guild => {
  var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(
      `**Thank You For Adding The Bot To Your Server If You Need Any Help In The Bot Go To Suuport Server** https://discord.gg/htNpU3J`
    );
  guild.owner.send(embed);
});

var fkk = [
  {
    f: "فكك بسم الله الرحمن الرحيم",
    k: "ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"
  },
  { f: "فكك باص", k: "ب ا ص" },
  { f: "فكك عربة ", k: "ع ر ب ة" },
  { f: "فكك سيارة", k: "س ي ا ر ة" },
  { f: "فكك سيرفرنا احلى سيرفر", k: "س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر" },
  { f: "فكك العنود ", k: "ا ل ع ن و د" },
  { f: "فكك المستتكعكبتيه", k: "ا ل م س ت ت ك ع ك ب ت ي ه" },
  { f: "فكك دحوم", k: "د ح و م" },
  { f: "فكك اونرنا احلى اونر", k: "ا و ن ر ن ا ا ح ل ى ا و ن ر" },
  { f: "فكك الحياة حلوة", k: "ا ل ح ي ا ة ح ل و ة" },
  { f: "فكك كازخستان ", k: "ك ا ز خ س ت ا ن" },
  {
    f: "لحم الحمام حلال ولحم الحمار حرام ",
    k: "ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"
  },
  { f: "فكك استونيا ", k: "ا س ت و ن ي ا" },
  { f: "فكك لقمة وجغمه ", k: "ل ق م ة و ج غ م ه" },
  { f: "فكك زنديق  ", k: "ز ن د ي ق" },
  { f: "فكك استراليا ", k: "ا س ت ر ا ل ي ا" },
  { f: "فكك سوريا ", k: "س و ر ي ا" },
  { f: "فكك الاردن ", k: "ا ل ا ر د ن" },
  { f: "فكك طماطم ", k: "ط م ا ط م" },
  { f: "فكك سارة ", k: "س ا ر ة" },
  { f: "فكك دراجون ", k: "د ر ا ج و ن" },
  { f: "فكك سيرفر ", k: "س ي ر ف ر" },
  { n: "فكك الجبل", m: "ا ل ج ب ل" },
  { n: "فكك هضبة", m: "ه ض ب ة" },
  { n: "فكك خواطر", m: "خ و ا ط ر" },
  { n: "فكك ارحبو", m: "ا ر ح ب و" },
  { n: "فكك اطنخ سيرفر", m: "ا ط ن خ س ي ف ر" },
  { n: "فكك احبك", m: "ا ح ب ك" },
  { n: "فكك سبرايز", m: "س ب ر ا ي ز" },
  { n: "فكك ولي على أمتك", m: "و ل ي ع ل ى أ م ت ك" },
  { n: "فكك الو محد", m: "ا ل و م ح م د" }
];

client.on("message", async message => {
  var prefix = "-";
  if (message.content == prefix + "فكك") {
    if (UserBlocked.has(message.guild.id))
      return message.channel.send("هناك جلسة .");
    UserBlocked.add(message.guild.id);
    var ask = fkk[Math.floor(Math.random() * fkk.length)];
    let embed = new Discord.RichEmbed()
      .setTitle("لعبة فكك")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setDescription(ask.f);
    message.channel.sendEmbed(embed).then(msg => msg.delete(200000));
    const msgs = await message.channel.awaitMessages(
      msg => msg.author.id !== client.user.id,
      { maxMatches: 1, time: 100000 }
    );
    UserBlocked.delete(message.guild.id);
    msgs.forEach(result => {
      if (result.author.id == client.user.id) return;
      if (result.content == "فكك") return;
      if (result.content == ask.k) {
        let embeds = new Discord.RichEmbed()
          .setTitle(":white_check_mark: اجابة صحيحة")
          .setAuthor(message.author.username, message.author.avatarURL)
          .setColor("RANDOM")
          .setDescription(`**${result.author.username}** الإجابة صحيحة`);
        message.channel.sendEmbed(embeds);
        return;
      } else {
        var embedx = new Discord.RichEmbed()
          .setTitle(":x:خطاء")
          .setAuthor(message.author.username, message.author.avatarURL)
          .setColor("RANDOM")
          .setDescription(`**${result.author.username}** الإجابة خاطئة`);

        message.channel.sendEmbed(embedx);
      }
    });
  }
});

client.on("message", async message => {
  var prefix = "-";
  var aoasm = [
    { q: "ما عاصمة **المغرب**", a: "الرباط" },
    { q: "ما عاصمة **افغانستان**", a: "كبل" },
    { q: "ما عاصمة ** البانيا**", a: "تيران" },
    { q: "ما عاصمة **الجزائر **", a: "الجزائر" },
    { q: "ما عاصمة ** **", a: "الجزائر" },
    { q: "ما عاصمة **اندورا لا فيلا **", a: "اندورا" },
    { q: "ما عاصمة **انجولا**", a: "لواندا" },
    { q: "ما عاصمة **انتيجوا وباربودا**", a: "سان جونز" },
    { q: "ما عاصمة **الارجنتين**", a: "بوينس ايرس" },
    { q: "ما عاصمة **ارمينيا**", a: "يريفان" },
    { q: "ما عاصمة ** مصر**", a: "القاهرة" },
    { q: "ما عاصمة ** استراليا**", a: "كانبرا" },
    { q: "ما عاصمة **النمسا**", a: "فيينا" },
    { q: "ما عاصمة ** اذربيجان**", a: "باكو" },
    { q: "ما عاصمة **جزر البهاما**", a: "ناساو" },
    { q: "ما عاصمة **البحرين**", a: "المنامة" },
    { q: "ما عاصمة ** بنجلاد��ش**", a: "دكـا" },
    { q: "ما عاصمة **باربادوس **", a: "بريدجتاون" },
    { q: "ما عاصمة **بيلا روسيا**", a: "مينسك" },
    { q: "ما عاصمة ** بلجيكا**", a: "بروكسل" },
    { q: "ما عاصمة ** بيليز**", a: "بلوم بان" },
    { q: "ما عاصمة ** بنين**", a: "بورتو نوفو" },
    { q: "ما عاصمة ** بوتان**", a: "ثيمفو" },
    { q: "ما عاصمة **بوليفيا **", a: "لاباز" },
    { q: "ما عاصمة ** البوسنة والهرسك**", a: "سراييفو" },
    { q: "ما عاصمة ** بوتسوانا**", a: "جابورون" },
    { q: "ما عاصمة ** البرازيل**", a: "برازيليا" },
    { q: "ما عاصمة ** بروناى**", a: "بندر سرى بيجاوان" },
    { q: "ما عاصمة ** بلغاريا**", a: "صوفيا" },
    { q: "ما عاصمة ** بوركينا فاسو**", a: "واجادوجو" },
    { q: "ما عاصمة **بوروندى **", a: "بوجومبورا" },
    { q: "ما عاصمة **كمبوديا **", a: "بنوم بنـه" },
    { q: "ما عاصمة ** الكاميرون**", a: "ياوندى" },
    { q: "ما عاصمة ** كندا**", a: "اوتاوا" },
    { q: "ما عاصمة ** الرأس الاخضر**", a: "برايا" },
    { q: "ما عاصمة **تشاد **", a: "نجامينا" },
    { q: "ما عاصمة ** شيلى**", a: "سانتياجو" },
    { q: "ما عاصمة **الصين **", a: "بكين" },
    { q: "ما عاصمة ** **", a: "مورونى" },
    { q: "ما عاصمة **كوستاريكا **", a: "سان خوسيه" },
    { q: "ما عاصمة ** كوت ديفوار**", a: "ابيدجان" },
    { q: "ما عاصمة **كرواتيا **", a: "زغرب" },
    { q: "ما عاصمة ** كوبا**", a: "هافانا" },
    { q: "ما عاصمة ** قبرص**", a: " " },
    { q: "ما عاصمة ** جمهورية التشيك**", a: "براغ" },
    { q: "ما عاصمة **الدنمارك **", a: "كوبنهاجن" },
    { q: "ما عاصمة ** جيبوتى**", a: "جيبوتى" },
    { q: "ما عاصمة ** دومينيكا**", a: "روسيو" },
    { q: "ما عاصمة **الدومينيكان **", a: "سان دومينجو" },
    { q: "ما عاصمة **تيمور الشرقية **", a: "ديلى" },
    { q: "ما عاصمة **قطر  **", a: "الدوحة" },
    { q: "ما عاصمة **السعودية  **", a: "الرياض" },
    { q: "ما عاصمة **سوريا  **", a: "دمشق" },
    { q: "ما عاصمة **تركيا  **", a: "انقرة" },
    { q: "ما عاصمة **العراق  **", a: "بغداد" },
    { q: "ما عاصمة **البنان  **", a: "بيروت" },
    { q: "ما عاصمة **فلسطين  **", a: "القدس" },
    { q: "ما عاصمة **امريكا  **", a: "واشنطن" },
    { q: "ما عاصمة **الاردن  **", a: "عمان" },
    { q: "ما عاصمة **السودان  **", a: "خرطوم" },
    { q: "ما عاصمة **الما��يا  **", a: "برلين" },
    { q: "ما عاصمة **كندا  **", a: "اوتاوا" },
    { q: "ما عاصمة **البرازيل  **", a: "برازيليا" }
  ];
  if (message.content == prefix + "عواصم") {
    if (UserBlocked.has(message.guild.id))
      return message.channel.send("هناك جلسة .");
    UserBlocked.add(message.guild.id);
    var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
    let embed = new Discord.RichEmbed()
      .setTitle("سؤال عواصم")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setDescription(ask.q);
    message.channel.sendEmbed(embed).then(msg => msg.delete(20000));
    const msgs = await message.channel.awaitMessages(
      msg => msg.author.id !== client.user.id,
      { maxMatches: 1, time: 10000 }
    );
    UserBlocked.delete(message.guild.id);
    msgs.forEach(result => {
      if (result.author.id == client.user.id) return;
      if (result.content == "عاصمة") return;
      if (result.content == ask.a) {
        let embeds = new Discord.RichEmbed()
          .setTitle(":white_check_mark: اجابة صحيحة")
          .setAuthor(message.author.username, message.author.avatarURL)
          .setColor("RANDOM")
          .setDescription(`**${result.author.username}** الإجابة صحيحة`);
        message.channel.sendEmbed(embeds);
        return;
      } else {
        var embedx = new Discord.RichEmbed()
          .setTitle(":x:خطاء")
          .setAuthor(message.author.username, message.author.avatarURL)
          .setColor("RANDOM")
          .setDescription(`**${result.author.username}** الإجابة خاطئة`);
        message.channel.sendEmbed(embedx);
      }
    });
  }
});

client.on("message", message => {
  const prefix = "-";

  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.content === prefix + "image") {
    const embed = new Discord.RichEmbed()

      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
      .setAuthor(message.author.username, message.guild.iconrURL)
      .setColor(0x164fe3)
      .setImage(message.guild.iconURL)
      .setURL(message.guild.iconrURL)
      .setTimestamp();

    message.channel.send({ embed });
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "contact")) {
    if (!message.channel.guild) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    client.users
      .get("349616310734553088")
      .send(
        "\n" +
          "**" +
          "● السيرفر :" +
          "**" +
          "\n" +
          "**" +
          "» " +
          message.guild.name +
          "**" +
          "\n" +
          "**" +
          " ● المرسل : " +
          "**" +
          "\n" +
          "**" +
          "» " +
          message.author.tag +
          "**" +
          "\n" +
          "**" +
          " ● الرسالة : " +
          "**" +
          "\n" +
          "**" +
          args +
          "**"
      );
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.content.startsWith(prefix + "mvall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**:x: You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null)
      return message.channel.send(`**You Have To Be In Room Voice**`);
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send(
      `**:white_check_mark: Success Moved All To Your Channel**`
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith("-slots")) {
    let slot1 = ["🍏", "🍇", "🍒", "🍍", "🍅", "🍆", "🍑", "🍓"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1 === slots2 && slots2 === slots3) {
      we = "Win!";
    } else {
      we = "Lose!";
    }
    message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`);
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "contact")) {
    if (!message.channel.guild)
      return message.reply("This Command Only For Servers");
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    client.users
      .get("385850714666303489")
      .send(
        "\n" +
          "**" +
          "● السيرفر :" +
          "**" +
          "\n" +
          "**" +
          "» " +
          message.guild.name +
          "**" +
          "\n" +
          "**" +
          " ● المرسل : " +
          "**" +
          "\n" +
          "**" +
          "» " +
          message.author.tag +
          "**" +
          "\n" +
          "**" +
          " ● الرسالة : " +
          "**" +
          "\n" +
          "**" +
          args +
          "**"
      );

    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(
        ":mailbox_with_mail: Succes The Message Has Been Sent To The Owners"
      )
      .setThumbnail(message.author.avatarURL)
      .setFooter("Holanda Bot");

    message.channel.send(embed);
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1)
      return message.reply("**Mention SomeOne**");
    if (!reason) return message.reply("**Write A Reason**");
    if (!message.guild.member(user).bannable)
      return message.reply("**I Cant BAN SomeOne High Than My Rank**");

    message.guild.member(user).ban(7, user);

    const banembed = new Discord.RichEmbed()
      .setAuthor(`BANNED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: banembed
    });
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1)
      return message.reply("**Mention SomeOne**");
    if (!reason) return message.reply("**Write A Reason**");
    if (!message.guild.member(user).kickable)
      return message.reply("**I Cant Kick SomeOne High Than My Rank**");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: kickembed
    });
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.content === prefix + "mutechannel") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" **You Dont Have Perms**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**:white_check_mark: Success Has Been Locked Channel**");
      });
  }
  if (message.content === prefix + "unmutechannel") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("**You Dont Have Perms**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply(
          "**:white_check_mark: Success Has Been UnLocked Channel**"
        );
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith("-id")) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    var mentionned = message.mentions.users.first();
    var mentionavatar;
    if (mentionned) {
      var mentionavatar = mentionned;
    } else {
      var mentionavatar = message.author;
    }
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(`${mentionavatar.avatarURL}`)
      .addField("Name:", `<@` + `${mentionavatar.id}` + `>`, true)
      .addField("Discrim:", "#" + `${mentionavatar.discriminator}`, true)
      .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
      .addField(
        "Create At:",
        "**[" + `${mentionavatar.createdAt}` + "]**",
        true
      );

    message.channel.sendEmbed(embed);
    console.log("[id] Send By: " + message.author.username);
  }
});

client.on("message", message => {
  if (message.content === "-invite") {
    if (!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
      .setAuthor(` ${message.author.username} `, message.author.avatarURL)
      .setTitle(`➡ Click Here `)
      .setURL(
        `https://discordapp.com/oauth2/authorize?client_id=400489866573512705&permissions=8&scope=bot`
      )
      .setThumbnail(
        " https://discordapp.com/api/oauth2/authorize?client_id=661594076877029386&permissions=8&scope=bot"
      );
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === "-inv") {
    if (!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
      .setAuthor(` ${message.author.username} `, message.author.avatarURL)
      .setTitle(`➡ Click Here `)
      .setURL(
        `https://discordapp.com/oauth2/authorize?client_id=400489866573512705&permissions=8&scope=bot`
      )
      .setThumbnail(
        " https://discordapp.com/api/oauth2/authorize?client_id=661594076877029386&permissions=8&scope=bot"
      );
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith("-avatar")) {
    if (!message.channel.guild) return;
    var mentionned = message.mentions.users.first();
    var client;
    if (mentionned) {
      var client = mentionned;
    } else {
      var client = message.author;
    }
    const embed = new Discord.RichEmbed()
      .addField("Requested by:", "<@" + message.author.id + ">")
      .setColor(000000)
      .setImage(`${client.avatarURL}`);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  var prefix = "-";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "embed") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers **");
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(0x23b2d6);
    message.channel.sendEmbed(say);
    message.delete();
  }
});

client.on("message", message => {
  if (message.content === "-support") {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#9B59B6")
      .addField(
        " ** :gear: Server Support :gear: **",
        "  **https://discord.gg/jfvY2GU**"
      );

    message.channel.sendEmbed(embed);
  }
});
client.on("message", omar => {
  var prefix = "-";
  if (omar.content.split(" ")[0] == prefix + "dc") {
    // delete all channels
    if (!omar.channel.guild) return;
    if (!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS"))
      return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
    if (!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
    omar.guild.channels.forEach(m => {
      m.delete();
    }); // omar jedol / Codes
  } // omar jedol / Codes
  if (omar.content.split(" ")[0] == prefix + "dr") {
    // delete all roles
    if (!omar.channel.guild) return;
    if (
      !omar.guild
        .member(omar.author)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return omar.reply(
        "**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**"
      );
    if (
      !omar.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return omar.reply(
        "**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**"
      );
    omar.guild.roles.forEach(m => {
      m.delete();
    }); // omar jedol / Codes
    omar.reply("✅ `Success Deleted All Roles - Ranks`");
  } // omar jedol / Codes
});

client.on("message", message => {
  var prefix = "-";
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "clear")) {
    if (!message.channel.guild)
      return message.channel
        .send("**This Command is Just For Servers**")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "**You Do not have permission** `MANAGE_MESSAGES`"
      );
    let args = message.content
      .split(" ")
      .join(" ")
      .slice(2 + prefix.length);
    let request = `Requested By ${message.author.username}`;
    message.channel
      .send(`**Are You sure you want to clear the chat?**`)
      .then(msg => {
        msg
          .react("✅")
          .then(() => msg.react("❌"))
          .then(() => msg.react("✅"));

        let reaction1Filter = (reaction, user) =>
          reaction.emoji.name === "✅" && user.id === message.author.id;
        let reaction2Filter = (reaction, user) =>
          reaction.emoji.name === "❌" && user.id === message.author.id;

        let reaction1 = msg.createReactionCollector(reaction1Filter, {
          time: 12000
        });
        let reaction2 = msg.createReactionCollector(reaction2Filter, {
          time: 12000
        });
        reaction1.on("collect", r => {
          message.channel.send(`Chat will delete`).then(m => m.delete(5000));
          var msg;
          msg = parseInt();

          message.channel
            .fetchMessages({ limit: msg })
            .then(messages => message.channel.bulkDelete(messages))
            .catch(console.error);
          message.channel
            .sendMessage("", {
              embed: {
                title: "`` Chat Deleted ``",
                color: 0x06df00,
                footer: {}
              }
            })
            .then(msg => {
              msg.delete(3000);
            });
        });
        reaction2.on("collect", r => {
          message.channel
            .send(`**Chat deletion cancelled**`)
            .then(m => m.delete(5000));
          msg.delete();
        });
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith("-marry")) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers **");
    var proposed = message.mentions.members.first();

    if (!message.mentions.members.first())
      return message.reply(" 😏 **لازم تطلب ايد وحدة**").catch(console.error);
    if (message.mentions.users.size > 1)
      return message
        .reply(" 😳 **ولد ما يصحلك الا حرمة وحدة كل مرة**")
        .catch(console.error);
    if (proposed === message.author) return message.reply(`**خنثى ؟ **`);
    if (proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
    message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author} 
 العرض لمدة 15 ثانية  
 اكتبي موافقة او لا**`);

    const filter = m => m.content.startsWith("موافقة");
    message.channel
      .awaitMessages(filter, { max: 1, time: 15000, errors: ["time"] })
      .then(collected => {
        message.channel.send(
          ` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `
        );
      });

    const filte = m => m.content.startsWith("لا");
    message.channel
      .awaitMessages(filte, { max: 1, time: 15000, errors: ["time"] })
      .then(collected => {
        message.channel.send(`  **${message.author} تم رفض عرضك** `);
      });
  }
});

client.on("message", message => {
  var prefix = "-";
  const command = message.content.split(" ")[0];

  if (command == prefix + "kv") {
    if (
      !message.guild.member(message.author).hasPermission("MOVE_MEMBERS") ||
      !message.guild.member(message.author).hasPermission("ADMINISTRATOR")
    ) {
      return message.reply(
        "you do not have permission to perform this action!"
      );
    }

    var member = message.guild.members.get(
      message.mentions.users.array()[0].id
    );
    if (!message.mentions.users) {
      message.reply("please mention the member");
      return;
    }

    if (!member.voiceChannel) {
      message.reply("i can't include voice channel for member!");
      return;
    }
    message.guild.createChannel("voicekick", "voice").then(c => {
      member.setVoiceChannel(c).then(() => {
        c.delete(305).catch(console.log);
      });
    });
  }
});

// THIS  MUST  BE  THIS  WAY

let anti = JSON.parse(fs.readFileSync("./antihack.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
  var prefix = "-";
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "settings limits")) {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (message.content.startsWith(prefix + "settings limitsban")) {
      if (!num) return message.channel.send(":shield:  | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send(":shield:  | أرقام فقط ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `:lock: | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "settings limitskick")) {
      if (!num) return message.channel.send(":shield:  | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send(":shield:  | أرقام فقط ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `:lock: | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleD")) {
      if (!num) return message.channel.send(":shield:  | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send(":shield:  | أرقام فقط ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `:lock: | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleC")) {
      if (!num) return message.channel.send(":shield:  | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send(":shield:  | أرقام فقط ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `:lock: | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschannelD")) {
      if (!num) return message.channel.send(":shield:  | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send(":shield:  | أرقام فقط ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `:lock: | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitstime")) {
      if (!num) return message.channel.send(":shield:  | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send(":shield:  | أرقام فقط ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `:lock: | تم التغيير اِلي : ${config[message.guild.id].time}**`
      );
    }
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(e) {
      if (e) throw e;
    });
  }
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**? | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**? | ${entry.username} قام بمسح الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**? | ${entry.username} قام بأنشاء الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      channel.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.owner.send(`**? | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await channel
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      channel.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.owner.send(`**? | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**? | ${entry.username} حاول حظر جميع الأعضاء **`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antihack.json", JSON.stringify(anti, null, 2), function(e) {
      if (e) throw e;
    });
  }
});

let log = JSON.parse(fs.readFileSync("./log.json", "utf8"));
client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setLog")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __On__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __Off__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});

client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});

client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[user.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[user.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[guild.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`His Orginal Name`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`His Orginal Name`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }
});



client["on"]('message', message => {
if(message["author"]["bot"]) return undefined;
require("quick.db")["fetch"](`count${message["guild"]["id"]}`)
require("quick.db")["add"](`count${message["guild"]["id"]}`, 1)
let args = message["content"]["split"](" ");
if(args[0]["toLowerCase"]() == prefix + `setticket`) {
if(!args[1]) return message["channel"]["send"](`**✅ | Using: \`\`${prefix}setticket [Message]\`\`**`)
let e = new Discord.RichEmbed()
.setAuthor(message.guild.name,message.guild.iconURL)
.setColor("BLUE")
.setDescription(`**${args[1]}
لصنع تيكت اضغط علي 📩**`)
.setFooter(message.author.username,message.author.avatarURL)
message["channel"]["send"](e)["then"](o => {
o["react"]("📩")
let c = (react,user) => react["emoji"]["name"] === "📩" && user["id"] === message["author"]["id"];
let cc = o["createReactionCollector"](c, { time: 0})
cc["on"]("collect", r => {
if(!message["guild"]["member"](client["user"])["hasPermission"]("ADMINISTRATOR")) return message["channel"]["send"](`**❌ | I do not have permission.**`);
if(message["guild"]["channels"]["exists"]("name", "ticket-" + require("quick.db")["fetch"](`count${message["guild"]["id"]}`))) return message["channel"]["send"](`**❌ | You already opened a ticket.**`);
message["guild"]["createChannel"](`ticket-` + require("quick.db")["fetch"](`count${message["guild"]["id"]}`), "text")["then"](c => {
let role = message["guild"]["roles"]["find"]("name", "هنا اسم رتبة الدعم الفني");
let role2 = message["guild"]["roles"]["find"]("name", "@everyone");
c["overwritePermissions"](role, {
SEND_MESSAGES: true,
READ_MESSAGES: true
});
c["overwritePermissions"](role2, {
SEND_MESSAGES: false,
READ_MESSAGES: false
});
c["overwritePermissions"](message["author"], {
SEND_MESSAGES: true,
READ_MESSAGES: true
});
const new1 = new Discord.RichEmbed()
.setColor("BLUE")
.setAuthor(message["author"]["username"],message["author"]["avatarURL"])
.setDescription(`**✅ | Done Open your Ticket: <#${c.id}>**`)
.setFooter(client["user"]["username"],client["user"]["avatarURL"])
.setTimestamp();
message["author"]["send"](new1);
require("quick.db")["add"](`count${message["guild"]["id"]}`, 1)
c.send(`${message["author"]}`)
})
})
})
}
});

//const antibots = JSON.parse(fs.readFileSync("./antibots.json"));
let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf-8")); //require antihack.json file
client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots on")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**:lock:  | \`ON\`.**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots off")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**:unlock:   | \`OFF\`.**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});

client.on("message", rw => {
  if (rw.content.startsWith("-vb")) {
    if (!rw.member.hasPermission("MOVE_MEMBERS"))
      return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
    let men = rw.mentions.users.first();
    let mas = rw.author;
    if (!men) return rw.channel.send("``");
    rw.guild.channels.forEach(c => {
      c.overwritePermissions(men.id, {
        CONNECT: false
      });
    });
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(
        `**
ما تقدر  تخش الروم لانك متبند فويس
اللي بندك : <@${rw.author.id}> **`
      )
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png"
      );

    client.users.get(men.id).sendEmbed(embed);
    const Embed11 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(rw.guild.name, rw.guild.iconURL)
      .setDescription(
        `          <@${men.id}>
Banner : <@${rw.author.id}> `
      )
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png"
      );
    rw.channel.sendEmbed(Embed11).then(rw => {
      rw.delete(10000);
    });
  }
});

client.on("message", rw => {
  if (rw.content.startsWith("-uvb")) {
    if (!rw.member.hasPermission("MOVE_MEMBERS"))
      return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
    let men = rw.mentions.users.first();
    let mas = rw.author;
    if (!men) return rw.channel.send("`MANTION THE MEMBER `");
    rw.guild.channels.forEach(c => {
      c.overwritePermissions(men.id, {
        CONNECT: true
      });
    });

    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(
        `**
 <@${men.id}>
 تم فك الباند فويس
شال منك الباند : <@${rw.author.id}> **`
      )
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png"
      );

    client.users.get(men.id).sendEmbed(embed);
    const Embed11 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(rw.guild.name, rw.guild.iconURL)
      .setDescription(
        `          <@${men.id}>
الحين تقدر تخش
With : <@${rw.author.id}>//
`
      )
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png"
      );
    rw.channel.sendEmbed(Embed11).then(rw => {
      rw.delete(15000);
    });
  }
});

     client.on("message", message => {
            if(message.content.startsWith(prefix + "apply")) {
		if(!message.channel.guild) return;
                if(message.author.bot) return;
	    let channel = message.guild.channels.find("name", "🔹التقديمات-الإدارية🔹")
            if(!channel) return message.reply("**لانشاء روم التقديمات  setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى بالكامل ✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **عندك كام سنة 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **هل ستتفاعل فى الرومات الصوتيه و الكتابية ؟ 🎙**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', ** ماهي الرتبة الذي تريدها و لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً 🤔**' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`هل سيتفاعل ؟`**',`${ask}`)
                        .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**`ماهي الرتبة الذي يريدها و لماذا يجب علينا قبوله ؟ `**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        client.on('message', message=>{
            if(message.content.startsWith(prefix+"setsubmissions")) {
		    if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("🔹التقديمات-الإدارية🔹", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false

                          })
                })
    message.channel.send("**✅ تم انشاء روم التقديمات بنجاح**")
            }
            })

  client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  if(message.content.startsWith(prefix + "accept")) {
    let acRoom = message.guild.channels.find('name', '🔹المقبولين-و-المرفوضين🔹');
    if(!acRoom) return message.reply(" setac من فضلك انشاء روم **🔹المقبولين_إداريا🔹** او اكتب الامر");
    if(acRoom) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');
 
    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
}
});

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith(prefix + "refuse")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', '🔹المقبولين-و-المرفوضين🔹');
  if(!acRoom) return message.reply(" setac من فضلك انشاء روم **🔹المرفوضين_إداريا🔹** او اكتب الامر");
  if(!message.guild.member(messae.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});

    client.on('message', message=>{
            if(message.content.startsWith(prefix+"setac")) {
		 if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("🔹المقبولين-و-المرفوضين🔹", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false

                          })
                })
    message.channel.send("**✅ تم انشاء روم القبول والرفض بنجاح**")
            }
            })


let sWlc = JSON.parse(fs.readFileSync("./setWlc.json", "UTF8"));
client.on("message", message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!sWlc[message.guild.id])
    sWlc[message.guild.id] = {
      channel: "welcome"
    };
  const channel = sWlc[message.guild.id].channel;
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if (!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!newChannel)
      return message.reply(`**${prefix}setwelcomer <channel name>**`);
    sWlc[message.guild.id].channel = newChannel;
    message.channel.send(
      `**${message.guild.name}'s channel has been changed to ${newChannel}**`
    );
  }
  fs.writeFile("./setWlc.json", JSON.stringify(sWlc), err => {
    if (err) console.error(err);
  });
});
client.on("guildMemberAdd", member => {
  if (!sWlc[member.guild.id])
    sWlc[member.guild.id] = {
      channel: "welcome"
    };
  const channel = sWlc[member.guild.id].channel;
  const sChannel = sWlc[member.guild.id].channel;
  let welcomer = member.guild.channels.find("name", sChannel);
  let memberavatar = member.user.avatarURL;
  if (!welcomer) return;
  if (welcomer) {
    member.guild.fetchInvites().then(guildInvites => {
      const ei = invites[member.guild.id];
      const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
      const inviter = client.users.get(invite.inviter.id);
      const yumz = member.guild.channels.find("name", `${sChannel}`);
      yumz.send(`<@${member.user.id}> joined by <@${inviter.id}>`);
      //  yumz.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
    });
    var Canvas = require("canvas");
    var jimp = require("jimp");

    const w = ["./w1.png"];

    let Image = Canvas.Image,
      canvas = new Canvas(400, 200),
      ctx = canvas.getContext("2d");

    fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function(
      err,
      Background
    ) {
      if (err) return console.log(err);
      let BG = Canvas.Image;
      let ground = new Image();
      ground.src = Background;
      ctx.drawImage(ground, 0, 0, 400, 200);
    });

    let url = member.user.displayAvatarURL.endsWith(".webp")
      ? member.user.displayAvatarURL.slice(5, -20) + ".gif"
      : member.user.displayAvatarURL;
    jimp.read(url, (err, ava) => {
      if (err) return console.log(err);
      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
        if (err) return console.log(err);

        ctx.font = "bold 12px Arial";
        ctx.fontSize = "20px";
        ctx.fillStyle = "#f1f1f1";
        ctx.fillText(member.user.username, 200, 150);

        //NAMEً
        ctx.font = "bold 12px Arial";
        ctx.fontSize = "20px";
        ctx.fillStyle = "#f1f1f1";
        ctx.fillText(`Welcome To Holanda`, 260, 125);

        //AVATARً
        let Avatar = Canvas.Image;
        let ava = new Avatar();
        ava.src = buf;
        ctx.beginPath();
        ctx.arc(77, 101, 62, 0, Math.PI * 2);
        ctx.stroke();
        ctx.clip();
        ctx.drawImage(ava, 13, 38, 128, 126);

        welcomer.sendFile(canvas.toBuffer());
      });
    });
  }
});

client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!devs.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + "setgame")) {
    client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`);
  } else if (message.content.startsWith(adminprefix + "setname")) {
    client.user.setUsername(argresult).then;
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`);
    return message.reply("**غيير أسم البوت إلى**");
  } else if (message.content.startsWith(adminprefix + "setavatar")) {
    client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
  } else if (message.content.startsWith(adminprefix + "setT")) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`);
  }
});

client.on("ready", function() {
  var ms = 60000;
  var setGame = ["-help", "Joker D. Shelby", "RMGC Server", "System"];
  var i = -1;
  var j = 0;
  setInterval(function() {
    if (i == -1) {
      j = 1;
    }
    if (i == setGame.length - 1) {
      j = -1;
    }
    i = i + j;
    client.user.setGame(setGame[i], `http://www.twitch.tv/idk`);
  }, ms);
  console.log(` Joker D. Shelby |> Name: ${client.user.username}`);
  console.log(` Joker D. Shelby |> Servers: ${client.guilds.size}`);
  console.log(` Joker D. Shelby |> Members: ${client.users.size}`);
  console.log(` Joker D. Shelby |> Channels: ${client.channels.size}`);
  console.log(` Joker D. Shelby|> Channels: ${client.channels.size}`);
  console.log(` Joker D. Shelby|> Id: ${client.user.id}`);
  console.log(` Joker D. Shelby`);
});

client.on("message", async message => {
  //alpha codes & @!                    D5aaN , off#٥٥٩٩
  if (message.content.startsWith(prefix + "add.r")) {
    //alpha codes & @!                    D5aaN , off#٥٥٩٩
    let args = message.content.split(" ").slice(1); //alpha codes & @!                    D5aaN , off#٥٥٩٩
    if (!args) return message.reply("Type Name Role"); //alpha codes & @!                    D5aaN , off#٥٥٩٩
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
    await message.channel
      .sendMessage(
        `➕ | To Create Role
:x: | To Cancel the process`
      )
      .then(e => {
        //alpha codes & @!                    D5aaN , off#٥٥٩٩
        e.react("➕") //alpha codes & @!                    D5aaN , off#٥٥٩٩
          .then(() => e.react("➕")) //alpha codes & @!                    D5aaN , off#٥٥٩٩
          .then(() => e.react("❌"))
          .then(() => c.delete(12000)); //alpha codes & @!                    D5aaN , off#٥٥٩٩
        let reaction1Filter = (reaction, user) =>
          reaction.emoji.name === "➕" && user.id === message.author.id; //alpha codes & @!                    D5aaN , off#٥٥٩٩
        let reaction2Filter = (reaction, user) =>
          reaction.emoji.name === "❌" && user.id === message.author.id; //alpha codes & @!                    D5aaN , off#٥٥٩٩
        let reaction1 = e.createReactionCollector(reaction1Filter, {
          time: 12000
        }); //alpha codes & @!                    D5aaN , off#٥٥٩٩
        let reaction2 = e.createReactionCollector(reaction2Filter, {
          time: 12000
        }); //alpha codes & @!                    D5aaN , off#٥٥٩٩
        reaction1.on("collect", c => {
          //alpha codes & @!                    D5aaN , off#٥٥٩٩
          message.guild.createRole({
            name: args.join(" "),
            permissions: [1]
          });
          e.edit(`Role Created ! :heavy_check_mark:`).then(g => {
            g.delete(5000);
            message.delete();
          });
        }); //alpha codes & @!                    D5aaN , off#٥٥٩٩
        reaction2.on("collect", c => {
          //alpha codes & @!                    D5aaN , off#٥٥٩٩
          e.edit("**Successfully Canceled :x:**").then(c => {
            c.delete(5000);
            message.delete();
          });
        });
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith("-new")) {
    const reason = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.guild.roles.exists("name", "𝑯𝑳 |Ticket_Team✨"))
      return message.channel.send(
        `This server doesn't have a \`𝑯𝑳 |Ticket_Team✨\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`
      );
    if (
      message.guild.channels.exists(
        "name",
        "ticket-{message.author.id}" + message.author.id
      )
    )
      return message.channel.send(`You already have a ticket open.`);
    message.guild
      .createChannel(`ticket-${message.author.username}`, "text")
      .then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        message.channel.send(
          `:white_check_mark: Your ticket has been created, #${c.name}.`
        );
        const embed = new Discord.RichEmbed()
          .setColor(0xcf40fa)
          .addField(
            `Hey ${message.author.username}!`,
            `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`
          )
          .setTimestamp();
        c.send({
          embed: embed
        });
      })
      .catch(console.error);
  }

  if (message.content.startsWith("-close")) {
    if (!message.channel.name.startsWith(`ticket-`))
      return message.channel.send(
        `You can't use the close command outside of a ticket channel.`
      );

    message.channel
      .send(
        `Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`
      )
      .then(m => {
        message.channel
          .awaitMessages(response => response.content === "-confirm", {
            max: 1,
            time: 10000,
            errors: ["time"]
          })
          .then(collected => {
            message.channel.delete();
          })
          .catch(() => {
            m.edit("Ticket close timed out, the ticket was not closed.").then(
              m2 => {
                m2.delete();
              },
              3000
            );
          });
      });
  }
});




client.on("guildMemberRemove", member => {
  var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`الله معاك ✋ 😔`)
    .setDescription(`مع السلامه تشرفنا بك ✋😔 `)
    .addField("👤   تبقي", `**[ ${member.guild.memberCount} ]**`, true)
    .setColor("RED")
    .setFooter(
      `==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`,
      "https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png"
    );

  var channel = member.guild.channels.find("name", "👋مع-السلامة👋");
  if (!channel) return;
  channel.send({ embed: embed });
});

var top = require("./top.json");
function save() {
  fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
  if (newMember.user.bot) return;
  if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
  if (!top[newMember.guild.id][newMember.user.id])
    top[newMember.guild.id][newMember.user.id] = {
      text: 0,
      voice: parseInt(Math.random() * 10),
      msgs: 0,
      id: newMember.user.id
    };
  save();
  if (!oldMember.voiceChannel && newMember.voiceChannel) {
    var addXP = setInterval(async function() {
      top[newMember.guild.id][newMember.user.id].voice += parseInt(
        Math.random() * 4
      );
      save();
      if (!newMember.voiceChannel) {
        clearInterval(addXP);
      }
    }, 60000);
  }
});
client.on("message", async function(message) {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!top[message.guild.id]) top[message.guild.id] = {};
  if (!top[message.guild.id][message.author.id])
    top[message.guild.id][message.author.id] = {
      text: parseInt(Math.random() * 10),
      voice: 0,
      msgs: 0,
      id: message.author.id
    };
  if (top[message.guild.id][message.author.id].msgs > 10) {
    top[message.guild.id][message.author.id].text += parseInt(
      Math.random() * 4
    );
    top[message.guild.id][message.author.id].msgs = 0;
  }
  save();
  var args = message.content.split(" ");
  var cmd = args[0].slice(prefix.length).toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  switch (cmd) {
    case "top":
      var topArray = Object.values(top[message.guild.id]);
      var num = 0;
      var textStr = `${topArray
        .sort((a, b) => b.text - a.text)
        .slice(0, 10)
        .filter(user => user.text > 0 && message.guild.members.get(user.id))
        .map(function(user) {
          if (user.text > 0) {
            return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.text})\` **`;
          }
        })
        .join("\n")}`;
      num = 0;
      var voiceStr = `${topArray
        .sort((a, b) => b.voice - a.voice)
        .slice(0, 10)
        .filter(user => user.voice > 0 && message.guild.members.get(user.id))
        .map(function(user) {
          if (user.voice > 0) {
            return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.voice})\` **`;
          }
        })
        .join("\n")}`;
      var embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .addField(
          `» TOP 10 TEXT`,
          textStr.length > 1 ? textStr : "» NO TOP TEXT",
          true
        )
        .addField(
          `» TOP 10 VOICE`,
          voiceStr.length > 1 ? voiceStr : "» NO TOP VOICE",
          true
        )
        .setFooter(client.user.tag, client.user.displayAvatarURL)
        .setColor("BLUE");
      message.channel.send({
        embed: embed
      });
      break;
    case "topvoice":
      var topArray = Object.values(top[message.guild.id]);
      var num = 0;
      var voiceStr = `${topArray
        .sort((a, b) => b.voice - a.voice)
        .slice(0, 5)
        .filter(user => user.voice > 0 && message.guild.members.get(user.id))
        .map(function(user) {
          if (user.voice > 0) {
            return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.voice})\` **`;
          }
        })
        .join("\n")}`;
      var embed = new Discord.RichEmbed()
        .setTitle("» TOP 5 VOICE")
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(voiceStr.length > 1 ? voiceStr : "» NO TOP VOICE")
        .setFooter(client.user.tag, client.user.displayAvatarURL)
        .setColor("BLUE");
      message.channel.send({
        embed: embed
      });
      break;
    case "toptext":
      var topArray = Object.values(top[message.guild.id]);
      var num = 0;
      var textStr = `${topArray
        .sort((a, b) => b.text - a.text)
        .slice(0, 5)
        .filter(user => user.text > 0 && message.guild.members.get(user.id))
        .map(function(user) {
          if (user.text > 0) {
            return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.text})\` **`;
          }
        })
        .join("\n")}`;
      var embed = new Discord.RichEmbed()
        .setTitle("» TOP 5 TEXT")
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(textStr.length > 1 ? textStr : "» NO TOP TEXT")
        .setFooter(client.user.tag, client.user.displayAvatarURL)
        .setColor("BLUE");
      message.channel.send({
        embed: embed
      });
      break;
  }
});




client.on('message', message => {
    if (message.content.startsWith(prefix + 'sug')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})
        var args =  message.content.split(' ').slice(1).join(' ')
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})
        let Room = message.guild.channels.find(`name`, "💕الاقتراحات💕")
        if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('❌'))
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)
       .addField('**Suggestion**',`${args}`)
       .setThumbnail(message.author.avatarURL)
       .setFooter(`ID: ${message.author.id}`)
       Room.sendEmbed(embed).then(c => {
           c.react('✅').then(() =>
               c.react('❌'))
           
       }).catch(e => console.error(e)
       )
   }
});


client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const xkiller = member.guild.channels.find("name", "⭐تم_دعوته_بواسطة🌠");
     xkiller.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
  });
});


 client.on('message', message =>{
        var id = message.author.id;
        if(message.content.startsWith(prefix+"report")) {
		if(!message.channel.guild) return;
                let report = message.guild.channels.find("name", "التبليغات");

        if (!message.channel.guild) return;
        if (message.author.bot) return;
        if(!report) return message.channel.send("**لانشاء روم او اطلب من احد اعضاء الادارة @Zee5#2700 setreport لايوجد روم اقتراحات من فضلك اكتب**")
        if(report) {
          let args = message.content.split(" ").slice(1).join(' ');
          if(!args) return message.reply('من فضلك اكتب بلاغك بالتفصيل بعد الامر')
          let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('**`المبلغ`**', `<@${id}>` , true)
        .addField('**`البلاغ`**', `${args}` , true)
        .setFooter('Reported By '+message.author.username, message.author.avatarURL)
        message.guild.channels.find('name', 'التبليغات').send(embed).then(r => {
            args.delete;
        })

          }
        }
        });
        client.on('message', message=>{
        if(message.content.startsWith(prefix+"setreport")) {
			let reports = message.guild.channels.find("name", "التبليغات")
	if(!message.channel.guild) return;
	    if(reports) return message.channel.send("**الروم موجودة بالفعل**");
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
            message.guild.createChannel("التبليغات", "text").then(c =>{
                c.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: false

                      })
            })
    message.channel.send("**✅ تم انشاء روم البلاغات بنجاح**")
        }
        })


client.on('message', async message => {
if(!points) points = {}
 
    if(message.channel.type !== 'text') return;
   
   
    var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.toLowerCase().split(" ");
    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id == args[1]));
      const embed  = new Discord.RichEmbed()
.setDescription(`
**لم يتم تسجيل أي نقطة حتى الأن **
** أمثلة للأوامر: **
**:small_orange_diamond:** #points ${message.author} 1 \`لتغيير نقاط شخص معين \`
**:small_orange_diamond:** #points ${message.author} +1 \`لزيادة نقاط شخص معين\`
**:small_orange_diamond:** #points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
**:small_orange_diamond:** #points ${message.author} 0 \`لتصفير نقاط شخص معين \`
**:small_orange_diamond:** #points reset \`لتصفير جميع النقاط\``)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor(`#e60909`)
  const error  = new Discord.RichEmbed()
.setDescription(`
**:x: | يجب كتابة الأمر بشكل صحيح. **
** أمثلة للأوامر: **
**:small_orange_diamond:** #points ${message.author} 1 \`لتغيير نقاط شخص معين \`
**:small_orange_diamond:** #points ${message.author} +1 \`لزيادة نقاط شخص معين\`
**:small_orange_diamond:** #points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
**:small_orange_diamond:** #points ${message.author} 0 \`لتصفير نقاط شخص معين \`
**:small_orange_diamond:** #points reset \`لتصفير جميع النقاط\``)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor(`#e60909`)
if(command == prefix + 'points') {
     
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
        if(!args[1]) {
            if(!points) return message.channel.send(embed);
            var members = Object.values(points);
            var memb = members.filter(m => m.points >= 1);
            if(memb.length == 0) return message.channel.send(embed);
            var x = 1;
            let pointsTop = new Discord.RichEmbed()
            .setAuthor('Points:')
            .setColor('#FBFBFB')
            .setDescription(memb.sort((second, first) => first.points > second.points).slice(0, 10).map(m => `**:small_blue_diamond:** <@${m.id}> \`${m.points}\``).join('\n'))
            .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL);
            message.channel.send({
                embed: pointsTop
            });
        }else if(args[1] == 'reset') {
            let pointsReset = new Discord.RichEmbed()
            .setDescription('**:white_check_mark: | تم تصفير جميع النقاط بنجاح**')
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("You dont have Manage Server permission.");
            if(!points) return message.channel.send(pointsReset);
            var members = Object.values(points);
            var memb = members.filter(m => m.points >= 1);
            if(memb.length == 0) return message.channel.send(pointsReset);
            points = {};
            message.channel.send(pointsReset);
        }else if(userM) {
            if(!message.member.hasPermission('MANAGE_GUILD')) return  message.channel.send("You dont have Manage Server permission.");
            if(!points[userM.user.id]) points[userM.user.id] = {
                points: 0,
                id: userM.user.id
            };
            if(!args[2]) {
                if(points[userM.user.id].points == 0) return message.channel.send( `${userM.user.username} Not have any points.`);
                var userPoints = new Discord.RichEmbed()
                .setColor('#d3c325')
                .setAuthor(`${userM.user.username} have ${points[userM.user.id].points} points.`);
                message.channel.send({
                    embed: userPoints
                });
            }else if(args[2] == 'reset') {
                if(points[userM.user.id].points == 0) return message.channel.send(error);
                points[userM.user.id].points = 0;
                message.channel.send(`Successfully reset ${userM.user.username} points.`);
            }else if(args[2].startsWith('+')) {
                args[2] = args[2].slice(1);
                args[2] = parseInt(Math.floor(args[2]));
                if(points[userM.user.id].points == 1000000) return message.channel.send(error);
                if(!args[2]) return message.channel.send(error);
                if(isNaN(args[2])) return message.channel.send(error);
                if(args[2] > 1000000) return message.channel.send(error);
                if(args[2] < 1) return message.channel.send(error);
                if((points[userM.user.id].points + args[2]) > 1000000) args[2] = 1000000 - points[userM.user.id].points;
                points[userM.user.id].points += args[2];
                let add = new Discord.RichEmbed()
                .setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
                .setAuthor('Points:')
                .setColor('#FBFBFB')
                .setFooter('Requested by' + message.author.username, message.author.avatarURL)
                message.channel.send(add);
            }else if(args[2].startsWith('-')) {
                args[2] = args[2].slice(1);
                args[2] = parseInt(Math.floor(args[2]));
                if(points[userM.user.id].points == 0) return message.channel.send(error);
                if(!args[2]) return message.channel.send(error);
                if(isNaN(args[2])) return message.channel.send(error);
                if(args[2] > 1000000) return message.channel.send(error);
                if(args[2] < 1) return message.channel.send(error);
                if((points[userM.user.id].points - args[2]) < 0) args[2] = points[userM.user.id].points;
                points[userM.user.id].points -= args[2];
                    let rem = new Discord.RichEmbed()
                .setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
                .setAuthor('Points:')
                .setColor('#FBFBFB')
                .setFooter('Requested by' + message.author.username, message.author.avatarURL)
                message.channel.send(rem);
            }else if(!args[2].startsWith('+') || !args[2].startsWith('-')) {
                args[2] = parseInt(Math.floor(args[2]));
                if(isNaN(args[2])) return message.channel.send(error);
                if(args[2] > 1000000) return message.channel.send(error);
                if(args[2] < 1) return message.channel.send(error);
                if(points[userM.user.id].points == args[2]) return message.channel.send(`${userM.user.username} points is already ${args[2]}.`);
                points[userM.user.id].points = args[2];
                    let set = new Discord.RichEmbed()
                .setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
                .setAuthor('Points:')
                .setColor('#FBFBFB')
                .setFooter('Requested by' + message.author.username, message.author.avatarURL)
                message.channel.send(set);
            }
            }
            }
 
});


let warning = JSON.parse(fs.readFileSync('./warning.json' , 'utf8'));
client.on('message',message=>{
if(message.author.bot || message.channel.type == "dm"||!message.channel.guild) return;
let prefix = '-';
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
if(command == 'warn'){if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]}
let T = warning[message.guild.id].warns;
let user = message.mentions.users.first();if(!user)return message.channel.send(`**:rolling_eyes: I can't find this member**`)
let reason = message.content.split(" ").slice(2).join(" ");if(!reason) return message.channel.send(`**:rolling_eyes: Please specify a reason.**`)
let W = warning[message.guild.id].warns;
let ID = 0;let leng = 0;
W.forEach(w =>{ID++;
if(w.id !== undefined) leng++;
})
if(leng === 90) return message.channel.send(`** You Can't Give More than \`90\` Warns**, please reset the warn list.`)
T.push({user:user.id,by:message.author.id,reason:reason,time:moment(Date.now()).format('llll'),id:ID+1})
message.channel.send(`**✅ @${user.username} warned!**`);
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)});
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)});
user.send(new Discord.RichEmbed().addField('**:warning: You were warned!**',reason)
.setFooter(message.guild.name,message.guild.iconURL).setTimestamp().setColor('#fffe62'));return;}
if(command == 'warnings') {
if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]}
let count = 0;let page = message.content.split(" ")[1];if(!page || isNaN(page)) page = 1;if(page > 4) return message.channel.send('**Warnings are only recorded on 4 pages!**')
let embed = new Discord.RichEmbed().setFooter(message.author.username,message.author.avatarURL)
let W = warning[message.guild.id].warns;
W.forEach(w =>{if(!w.id) return;count++;
if(page == 1) {if(count > 24) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 24) embed.addField('**:sparkles: More ?**',`${message.content.split(" ")[0]} 2`);
}if(page == 2) {if(count <= 24) return null;if(count > 45) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 45) embed.addField('**:sparkles: More ?**',`${message.content.split(" ")[0]} 3`);
}if(page == 3) {if(count <= 45) return null;if(count > 69) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 69) embed.addField('**:sparkles: More ?**',`${message.content.split(" ")[0]} 4`);
}if(page == 4) {if(count <= 69) return null;if(count > 92) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 64) embed.addField('**FULL**',`** **`);}});
embed.setTitle(`**${count} Warnings** [ ${page}/4 ]`)
message.channel.send(embed)};
if(command == 'removewarn' || command == 'rm') {
if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]};
let args = message.content.split(" ")[1];if(!args) return message.channel.send(
`**:rolling_eyes: Please specify warning number or user mention or (all) to delete all warnings.**`);
let user = message.mentions.members.first();
if(user) {
let C = 0;let a = warning[message.guild.id].warns
a.forEach(w=>{
if(w.user !== user.id) return
delete w.user;delete w.reason;delete w.id;delete w.by;delete w.time;
C++;
})
if(C === 0) return message.channel.send(`**:mag: I can't find the warning that you're looking for.**`)
return message.channel.send('**✅ '+C+' warnings has been removed.**');
};
if(args == 'all') {
let c = 0;let W = warning[message.guild.id].warns; 
W.forEach(w =>{if(w.id !== undefined) c++;})
warning[message.guild.id] = {warns:[]};
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)})
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)})
return message.channel.send('**✅ '+c+' warnings has been removed.**')
}if(isNaN(args)) return message.channel.send(
    `**:rolling_eyes: Please specify warning number or user mention or (all) to delete all warnings.**`);
let W = warning[message.guild.id].warns;
let find = false;
W.forEach(w =>{
if(w.id == args) {
delete w.user;delete w.reason;delete w.id;delete w.by;delete w.time;
find = true;return message.channel.send('**✅ 1 warnings has been removed.**')
}});if(find == false) return message.channel.send(`**:mag: I can't find the warning that you're looking for.**`)}});

const path = require('path');
sql.open(path.join(__dirname, 'credits.sql')) // read sql file
.then(() => { // then ?
    console.log('Opened') // if the sql opened
    sql.run(`CREATE TABLE IF NOT EXISTS creditSysteme (id VARCHAR(30), credits BIGINT, timeDaily BIGINT)`) // create new table if the table does'nt exosts
})
.catch(err => console.error(err)) // if the sql file does'nt exists
 


//58 line :) -

var voiceonline = require ("./voiceonline.json");
client .on ("message", async (Message) => {
    if (!Message ["guild"] ||
    Message ["author"].bot) return false;

    if (Message ["content"].startsWith (prefix + "setvc")) {
        if (!Message ["member"].hasPermission ("MANAGE_CHANNELS")) return Message ["reply"] ("**You need `MANAGE CHANNELS` Permissions to execute this command.**");
        var name = Message ["content"].split (" ").slice (1).join (" ");
        if (!name) return Message ["reply"] ("**Specify a name. please type %vo% for voiceonline numbers\nExample: " + prefix + "setvc Voice Online [%vo%]**");
        var onlines = Message ["guild"].members.filter (m => m.voiceChannel).size;
        Message ["guild"].createChannel (name ["replace"] ("%vo%", onlines), "voice") .then (async (voice) => {
            voiceonline [Message ["guild"].id] = {
                "ch": (voice ["id"]),
                "name": (name)
            };
            saveVoiceOnline ();
            Message ["channel"].send ("**Successfully created voiceonline **")
        });
    }
})
.on ("voiceStateUpdate", async (Steve, Akame) => {
    if (!voiceonline [Steve ["guild"].id]) return console.log ("nope");
    var channel = Akame ["guild"].channels.get (voiceonline [Steve ["guild"].id].ch);
    if (!channel) return console.log ("no channel");
    channel ["setName"] (voiceonline [Steve ["guild"].id].name.replace ("%vo%", Steve ["guild"].members.filter (m => m.voiceChannel).size));
})

function saveVoiceOnline() {
    (require ("fs")) ["writeFileSync"] ("./voiceonline.json", JSON ["stringify"] (voiceonline, null, 4))
}

 client.on('message', msg => {  
    if (msg.content === 'wtf') {  
      msg.reply('<a:2223_wtf:670709065415917568>');  
    }
  });

client.on("message", async message => {
  
  if (message.content.toLowerCase() === prefix + "profile") {
        message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
         message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}?bg=default.png`
          }
          
        ]
      }) 
      )
    }
});


client.on('message',async message => {
  if(message.content.startsWith(prefix + "setmember")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
    console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`Members Count : [ ${message.guild.members.size} ]`)
    },1000);
  });
  }
});//ToxicCodes CopyRights
 
 
client.on('message',async message => {
  if(message.content.startsWith(prefix + "settime")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel("🕐 - Time  00", 'voice').then((c) => {
    console.log(`Time channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });//ToxicCodes CopyRights
        setInterval(function() {
 
      var currentTime = new Date(),
      hours = currentTime.getHours() + 3 ,
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth(),
      day = currentTime.getDate(),
      week = currentTime.getDay();
 
      if (minutes < 10) {
          minutes = "0" + minutes;
      }
      var suffix = "AM";
      if (hours >= 12) {
          suffix = "PM";
          hours = hours - 12;
      }
      if (hours == 0) {
          hours = 12;
      }
 
      c.setName("🕐 - Time   「" + hours + ":" + minutes  +" " + suffix + "」");
    },1000);
  });
  }
});//ToxicCodes CopyRights
 
 
 
client.on('message',async message => {
  if(message.content.startsWith(prefix + "setdate")) {
      var currentTime = new Date(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      week = currentTime.getDay();
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
    console.log(`Date channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName("📅 - Date " + "「" + day + "-" + month + "-" + years + "」")
    },1000);
  });
  }
});//ToxicCodes CopyRights
 
 
client.on('message',async message => {
  var moment = require('moment');
    if(message.content.startsWith(prefix + "setdays")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Day : ${moment().format('dddd')}` , 'voice').then(c => {
      console.log(`Day channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`📅 - Day : 「${moment().format('dddd')}」`);
      },1000);
    });//ToxicCodes CopyRights
    }
  })

var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
 
client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }    
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
     if(done) reaction.remove(user);
   } else {
     var request = reactionRoles[reaction.message.id];
     if(!request) return;
     if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
     reaction.message.guild.members.get(user.id).addRole(request.role);
   }
})

let ar = JSON.parse(fs.readFileSync(`./AutoRole.json`, `utf8`))
client.on('guildMemberAdd', member => {
if(!ar[member.guild.id]) ar[member.guild.id] = {
onoff: 'Off',
role: 'Member'
}
if(ar[member.guild.id].onoff === 'Off') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})
client.on('message', message => {
if(!message.guild) return
if(!ar[message.guild.id]) ar[message.guild.id] = {
onoff: 'Off',
role: 'Member'
}
if(message.content.startsWith(prefix + `autorole`)) {
let perms = message.member.hasPermission(`MANAGE_ROLES`)
if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
let args = message.content.split(" ").slice(1)
if(!args.join(" ")) return message.reply(`${prefix}autorole toggle/set [ROLE NAME]`)
let state = args[0]
if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`)
if(state.trim().toLowerCase() == 'toggle') {
if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
}
if(state.trim().toLowerCase() == 'set') {
let newRole = message.content.split(" ").slice(2).join(" ")
if(!newRole) return message.reply(`${prefix}autorole setrole [ROLE NAME]`)
if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
ar[message.guild.id].role = newRole
message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
}
  }
if(message.content === prefix + 'info') {
let perms = message.member.hasPermission(`MANAGE_GUILD`)
if(!perms) return message.reply(`You don't have permissions.`)
var embed = new Discord.RichEmbed()
.addField(`Autorole : :sparkles:  `, `
State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`)
.setColor(`BLUE`)
message.channel.send({embed})
}
fs.writeFile("./AutoRole.json", JSON.stringify(ar), (err) => {
if (err) console.error(err)
});
})

client.on('message', msg => {  
    if (msg.content === 'ip') {  
      msg.reply('قريبا');  
    }
  });
var userid = "409430101160099840",
    category = "670931542834544650",
    rolename = "bought",
    price = 100;//السعر
client.on ("message",async message => {
 
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
 
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
 
 
    if(cmd === "private") {
   
    let room = args.join(" ");
 
    let embed = new Discord.RichEmbed()
    .setTitle(`**${message.author.username} - Welcome**`)
    .setDescription(`**Please Transfer ${price} Probot
To : <@${userid}>**`)
    message.channel.send(embed)
      let P2 = Math.floor (price - (price * (5 / 100))) // xD
  let filter = response => response.author.id == "385850714666303489" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P2}\` to <@${userid}> **`)
  message.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
  .then( collected =>{
     
        let filter2 = m => m.author.id === message.author.id;
   
      let thisMessage;
 
    let thisFalse;
 
        message.channel.send('📝 **| من فضلك اكتب اسم الروم الان... ✏ **').then(msg => {
 
     message.channel.awaitMessages(filter2, {
 
      max: 1,
 
      time: 180000,
 
      errors: ['time']
 
    })
           
             .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
  message.channel.send(`done !`)
   var role = message.guild.roles.find(role => role.name === rolename);
message.member.addRole(role);
       let room = collected.first().content
     message.guild.createChannel(room, "text").then(c => {
            let role2 = message.guild.roles.find("name", "@everyone");
 
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
              MENTION_EVERYONE:true
            });
 
            let embed2 = new RichEmbed()
            .setTitle(`**${message.author.username}**`)
            .setDescription(`Done, Your Private room was created in <#${c.id}>`)
            .setTimestamp()
            message.channel.send(embed2);
           
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .setTitle(`Room For ${message.author.username}`)
                .setDescription(`Enjoy !`)
                .setTimestamp()
                c.send({
                    embed: embed
                });
              c.setParent(category)
 
        }).catch(console.error);
       
       message.reply("Done !").then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
         })
 })
          })
   
   
         
       
 
  });
   
 }
 
 
   
 
 
 
  });


client.on("message", async m =>{
  if(m.author.bot || !m.guild) return;
    var prefix = "-"
  var args = m.content.split(" ");
  var command = args[0].slice(prefix.length);
  if(!m.content.startsWith(prefix)) return;
  var all = ["-"]
  switch (command) {
    case 'drake':
      if(!args[1] && !args[2]) return m.channel.send(new Discord.RichEmbed().setDescription(`<a:no:651123754558291988> Usage \`${prefix}drake <bad> <good>\``));
      if(!args[2]) return m.channel.send(new Discord.RichEmbed().setDescription("<a:no:651123754558291988> Unable to resolve the ``good`` argument."));
      let canvas = Canvas.createCanvas(299, 291);
      const applybad = (canvas, text) => {const ctx = canvas.getContext("2d");let fontSize = 40;do {ctx.font = `${(fontSize -= 5)}px Comic SANS`;}while(ctx.measureText(text).width > canvas.width - 150);return ctx.font;};
      const applygood = (canvas, text) => {const ctx = canvas.getContext("2d");let fontSize = 40;do {ctx.font = `${(fontSize -= 5)}px Comic SANS`;}while(ctx.measureText(text).width > canvas.width - 150);return ctx.font;};
      let ctx = canvas.getContext("2d");
      ctx.fillStyle = "#000000";
      ctx.textAlign = "center";
      const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/662049225944596512/667320767565922304/Drakeposting.jpg");
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);  
      ///////////////////////////////////bad//////////////////////////////
      ctx.font = applybad(canvas,args[1].split("-").join(" "));
      ctx.fillText(args[1].split("-").join(" "), 225, 80.8333333333);
      ////////////////////////////good///////////////////
      ctx.font = applygood(canvas,args[2].split("-").join(" "));
      ctx.fillText(args[2].split("-").join(" "), 225, 225);
      const attachment = new Discord.Attachment(canvas.toBuffer());
      m.channel.send(attachment);
      break
  }
});

var Token = '';
var categoryID = '670931542834544650';
var voiceID = '';

client.on('ready',()=>console.log(`${client.user.tag} is ready`));
client.on('voiceStateUpdate',(Old,New)=>
{
    if(New.user.bot) return;
    if(Old.user.bot) return;

    if(New.voiceChannelID == voiceID)
    {
        New.guild.createChannel(New.user.username,'voice').then(set=>
        {
            New.setVoiceChannel(New.guild.channels.get(set.id)).then(()=>
            {
                set.setParent(New.guild.channels.get(categoryID));
            });
            set.overwritePermissions(New.user,
                {
                    'CONNECT':true,'SPEAK':true,
                    'MOVE_MEMBERS':true,'VIEW_CHANNEL':true,
                    'MANAGE_CHANNELS':true,'MANAGE_ROLES_OR_PERMISSIONS':true,
                    'USE_VAD':true,'PRIORITY_SPEAKER':true
                });
        });
    }

    if(Old.voiceChannel)
    {
        Old.guild.channels.forEach(channels=>
            {
                if(channels.parentID == categoryID)
                {
                    if(channels.id == voiceID) return;
                    if(Old.voiceChannelID == channels.id)
                    {
                        if(Old.voiceChannel.members.size == 0)
                        {
                            channels.delete();
                        }
                    }
                }
            });
    }

});




                                        

function forEachObject(obj, func) {
  Object.keys(obj).forEach(function(key) {
    func(key, obj[key]);
    var dat = JSON.parse("{}");
  });
}


const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on("message", message => {
 const args = message.content.split(' ');
  const credits = require('./creditsCode.json');
  const path = './creditsCode.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
  }
 
  }
        if(args[0].toLowerCase() === `${prefix}daily`) {  
     
if(credits[message.author.id].daily != moment().format('L')) {
 
       credits[message.author.id].daily = moment().format('L');
           
 
          let ammount = (300, 500, 100, 200, 120, 150, 350, 320,220,250);
          credits[author].credits += ammount;
       
       
          message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
        fs.writeFile("./creditsCode.json", JSON.stringify(credits), function(e) {
            if (e) throw e;
        })
 
      }else{
      message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
      }
   
        }
         
   
 
});






let vipKeys = JSON.parse(fs.readFileSync("./vipKeys.json", "utf8"));
client.on("message", msg=>{
let id = "385850714666303489"; // ايديك
let role = "𝑯𝑳 Vip"; // اسم رتبة الفيب
let Price = 10000; السعر
let Price2 = Math.floor(Price-(Price*(5/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
let embedvip = new Discord.RichEmbed()
.setColor("#42f4f4")
.setAuthor(msg.author.username, msg.author.displayAvatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle("**اختر الطريقة المناسبة لك**")
.addField("ل شراء الفي اي بي لنفسك","🔱",true )
.addField("ل شراء الفي اي بي ك هدية","🎁",true)
.setTimestamp()
.setFooter(client.user.username,client.user.displayAvatarURL);
msg.channel.send(embedvip).then(msgs2 =>{
msgs2.react("🔱").then(()=>{
  msgs2.react("🎁").then(()=>{
    const me = (reaction, user) => reaction.emoji.name === '🔱' && user.id === msg.author.id;
    const gift = (reaction, user) => reaction.emoji.name === '🎁' && user.id === msg.author.id;
    const mec = msgs2.createReactionCollector(me, {time: 120000});
    const giftc = msgs2.createReactionCollector(gift, {time: 120000});
mec.on("collect", r=>{  
msgs2.delete()
if(msg.member.roles.find(r=>r.name == role)) return msg.reply("انت تمتلك الرتبة مسبقًا");
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)
msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل
إلى ${msg.guild.members.get(id)}
`).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
msg.reply(`تم اعطائك رتبة \`${role}\``);
msg.member.addRole(roleW);
}).catch(e => {});
})})
giftc.on("collect", r=>{
  msgs2.delete()
  let roleW = msg.guild.roles.find(r=>r.name == role);
  if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)
msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل
إلى ${msg.guild.members.get(id)}
`).then( msgs =>{
  const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
  msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
  .then( collected =>{
  msgs.delete()
  genKey(msg,roleW);
  }).catch(e => {});
  })
})
})})})
///
}
if(cmd === `${prefix}used`){
  let args = msg.content.split(" ").slice(1)[0];
  if(!args) {  
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
  let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(vipKeys[args]){
    let hav = msg.member.roles.find(`name`, vipKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(vipKeys[args]);
    delete vipKeys[args]
    save()
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
}
});
 
function genKey(msg,role){
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  vipKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",vipKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
  save()
}
 
function save(){
  fs.writeFile("./vipKeys.json", JSON.stringify(vipKeys), (err) => {
    if (err) console.log(err)
  });
 
}

client.on("message", message => {
if(message.author.bot) return undefined;
let args = message.content.split(" ");
if(args[0].toLowerCase() === prefix + "getinfo") {
if(!args[1]) return message.channel.send(`**✅ | Using: \`\`${prefix}getinfo [IDSERVER]\`\`**`)
let g = client.guilds.get(args[1])
if(!g) return message.channel.send(`**❌ | I can't find this server**`)
message.channel.send(`**${g.name} :**
Voice : ${g.channels.filter(e => e.type === "voice").size} | Bot : ${g.members.filter(e => e.user.bot).size}
Member : ${g.memberCount} (Online: ${g.members.filter(e => e.presence.status === "online")}) (Offline: ${g.members.filter(e => e.presence.status === "offline")}) (Idle: ${g.members.filter(e => e.presence.status === "idle")}) (Dnd: ${g.members.filter(e => e.presence.status === "dnd")})`)
}
})

client.login("NjYxNTk0MDc2ODc3MDI5Mzg2.XjHSYg.N5zz4dqVv_4yeBt5A5ro5Feq9BU");