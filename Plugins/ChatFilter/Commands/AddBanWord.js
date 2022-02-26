const { CommandInteraction } = require("discord.js")

module.exports = {
  name: "addbanword",
  description: "Adds a word to the banned list",
  permission: "ADMINISTRATOR",
  /**
   * @param {CommandINteraction} interaction
   */
  execute(interaction) {
    interaction.reply({content: "Word Has Been Added!"})
  }
}