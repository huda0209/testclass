/*

created by huda0209
test-class for discord bot 

main.js :MAIN  'MAIN CODE'  
 -reaction.js :CLASS  'react the message'  <= this

ran by node.js and discord.js

2020-8-13

*/


const dotenv = require('dotenv').config();
const fs = require('fs');
const discord = require("discord.js");


class reaction {
    constructor(message) {
        this.message = message;
    }
    tell (){
        console.log(this)
        this.message.channel.send("aaaa")
    }
}


module.exports = reaction