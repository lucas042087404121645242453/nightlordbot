const Discord = require('discord.js')
const bot = new Discord.Client();

bot.login('MzY2MjcxNjM1MDcxNjk2OTA3.DLv4Hw.GflRI146Q1cdEhbrXyiejrtPmGc');

bot.on('message', message => {
let responseObject = {
    "!testarbot" : "**BOT ONLINE - OLA MUNDO!**",
    "!faustao" : "Ta pegando fogo bicho:fire:",
    "!ryca" : "Eu não vou acabar presa sabe por que?Por que sou rica eu sou ricaaaaaaaaaaaaaaaaaaaaaaaaaa:joy:",
    "!ajuda" : "!testarbot:Testa Para Ver Se o Bot Esta Online!                                                                                                                                                             !faustao:Imita sabe que sabe quem o nosso querido Faustão ta pegando fogo bichoooo :fire:                                                                                                                  !ryca:Sabe quem esse tambem esse bot imita?Sou Rycaaaaaaaaaaaaaaaaaaaaaaa!Isso mesmo ele tambem imita a famosa sou ryca:joy:"
};

if(responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
}

if (message.content.startsWith("!roleta")){
    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    if(randomNumber == 5){
        message.reply("Você Perdeu!Tente Novamente!");
    }
    else{
        message.reply("Você ganhou!Parabens!:grinning:");
    }
}
});
