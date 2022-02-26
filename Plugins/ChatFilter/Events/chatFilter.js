const { Client, Message } = require("discord.js")
const fs = require('fs');

module.exports = {
  name: "messageCreate",
  once: false,

  /**
   * @param {Client} client
   * @param {message} msg
   * @param {fs} fs
   */
  execute(message) {
    if (message.author.bot) return; // Ignore all bots

    // Banned Word List

    //var temp = fs.readFileSync('Config/ChatFilter.txt', 'utf8');
    //console.log(temp);

    // Intitializing the readFileLines with the file
    const readFileLines = filename =>
      fs.readFileSync(filename)
        .toString('UTF8')
        .split('\n');
    // Calling the readFiles function with file name
    let chatFilterB = readFileLines('Config/ChatFilter.txt');
    // Printing the response array
    //console.log(chatFilterB);

    // Gets The length of the List
    const n = chatFilterB.length;

    // Testing / Old Code
    // console.log(`message sent.`);
    // looping from i = 1 to 5

    // For loop to check messages sent with the baned word list
    for (let i = 1; i <= n; i++) {
      if (message.content.includes(chatFilterB[i])) {
        message.delete();
        console.log(`[ChatFilter] A Bad word was sent in a Channel!`);
        return
      }

    }

  }

}