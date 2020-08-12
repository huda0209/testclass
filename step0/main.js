/*

created by huda0209
test-class for discord bot 

main.js :MAIN  'MAIN CODE'  <= this
 -reaction.js :CLASS  'react the message'

ran by node.js and discord.js

2020-8-13

*/


const dotenv = require('dotenv').config();
const fs = require('fs');
const discord = require("discord.js");

const client = new discord.Client();

var letter = [":zero:",":one:",":two:",":three:",":four:",":five:",":six:",":seven:",":eight:",":nine:",":keycap_ten:",":regional_indicator_a:",":regional_indicator_b:",":regional_indicator_c:",":regional_indicator_d:",":regional_indicator_e:",":regional_indicator_f:",":regional_indicator_g:",":regional_indicator_h:",":regional_indicator_i:",":regional_indicator_j:",":regional_indicator_k:",":regional_indicator_l:",":regional_indicator_m:",":regional_indicator_n:",":regional_indicator_o:",":regional_indicator_p:",":regional_indicator_q:",":regional_indicator_r:",":regional_indicator_s:",":regional_indicator_t:",":regional_indicator_u:",":regional_indicator_v:",":regional_indicator_w:",":regional_indicator_x:",":regional_indicator_y:",":regional_indicator_z:"]
var sign = ["0⃣","1⃣","2⃣","3⃣","4⃣","5⃣","6⃣","7⃣","8⃣","9⃣","🔟","🇦","🇧","🇨","🇩","🇪","🇫","🇬","🇭","🇮","🇯","🇰","🇱","🇲","🇳","🇴","🇵","🇶","🇷","🇸","🇹","🇺","🇻","🇼","🇽","🇾","🇿"]



client.on("ready", message => {
  console.log("bot is ready!");
});


client.on("message", async message => {
  if(message.content.startsWith("//stop")){
      console.log("server stop");
      await message.delete()
      process.exit(0);}
})


if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("please set ENV: DISCORD_BOT_TOKEN");
  process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);