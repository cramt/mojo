const Discord = require("discord.js");
const bot = new Discord.Client();

var admins = [
  "135444732917579776", // Pat
  "149996010314137600"  // Mads
];

var botID = "240455381703196682";
var token = "MjQwNDU1MzgxNzAzMTk2Njgy.CvD5nQ.wH122esxbrOYVdpsoG6263_GvFY";

var contains = {
  "hentai" : function(message) {
    message.channel.sendMessage("hentai aka besttai");
  },
  "anime" : function(message) {
    message.reply("take this weeb");
    message.channel.sendFile("https://images-na.ssl-images-amazon.com/images/I/510DjIxtKPL.jpg");
  },
  "patrick" : function(message) {
    message.channel.sendMessage(`<@${admins[0]}>, <@${message.author.id}> talked about you`);
  },
  "cock" : function(message) {
    message.channel.sendMessage("8=:fist:=D:sweat_drops:");
    message.channel.sendMessage(':sweat:');
  },
  "mojo": function(message) {
	message.channel.sendMessage("SCIENCE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  },
  "din mor": function(message) {
	message.channel.sendMessage("oh snap!!!");
  }
}

var commands = {
  "--id" : function(message) {
    message.reply(`Your Discord user ID is ${message.author.id}`);
  }
}

var adminCommands = {
  "--stop" : function(message) {
    message.channel.sendMessage("Shutting down...");
    message.channel.sendMessage("beep");
    message.channel.sendMessage("boop");
    message.channel.sendMessage('☮');
    setTimeout( function() {
      bot.destroy();
      process.exit();
    }, 1000);
  },
  "--kick" : function(message) {

  }
}

bot.on("ready", () => {
  console.log("MOJO ready for science!");
  
});

bot.on("message", message => {
  if (message.author.id == botID) { return false; }
  for (var k in contains) {
    if (message.content.toLowerCase().includes(k)) {
      contains[k](message);
    }
  }
  for (var k in commands) {
    if (message.content.substring(0, k.length) == k) {
      commands[k](message);
    }
  }

  for (var k in adminCommands) {
    if (message.content.substring(0, k.length) == k) {
      if (!isAdmin(message)) { return false; }
      adminCommands[k](message);
    }
  }
})

function isAdmin(message) {
  var id = message.author.id;

  var allow = false;
  for (var k in admins) {
    if (id == admins[k]) {
      allow = true;
      break;
    }
  }

  if (!allow) {
    message.reply("You do not have permission to do that.");
  }
  return allow;
}

bot.login(token);
