const { CommandInteraction } = require("discord.js");
const fs = require('fs');


module.exports = {
  name: "removebanword",
  description: "Removes a word to the banned list",
  permission: "ADMINISTRATOR",
  options: [
    {
      name: "type",
      description: "Enter a Word.",
      required: true,
      type: "STRING"
    },
  ],
  
  /**
   * @param {CommandInteraction} interaction
   * @oaram {fs} fs
   */

  async execute(interaction) {
    const { options } = interaction

    const mainInput = options.getString("type");
    const FormatInput = ("\n");
    const content = FormatInput + mainInput;

    // Removes data to file
    fs.appendFile('Config/ChatFilter.txt',content, 'utf8',
      // callback function
      function(err) {     
        if (err) throw err;
        // if no error
        console.log("[ChatFilter] Word Has Been Added!")
        interaction.reply({content: "Word Has Been Added!"});
    });
  }
}