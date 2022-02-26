const { Client, Message } = require("discord.js")


module.exports = {
  name: "messageCreate",
  once: false,

  /**
   * @param {Client} client
   * @param {message} msg
   */
  execute(message) {
    if (message.author.bot) return; // Ignore all bots

    // Banned Word List
    const chatFilterA = [
      "",
      "pog"
    ];

    // Gets The length of the List
    const n = chatFilterA.length;

    // Testing / Old Code
    // console.log(`message sent.`);
    // looping from i = 1 to 5

    // For loop to check messages sent with the baned word list
    for (let i = 1; i <= n; i++) {
      if (message.content.includes(chatFilterA[i])) {
        message.delete();
        console.log(`A Bad word was sent in a Channel!`);
      }

    }

  }

}