const { Client, MessageEmbed } = require("discord.js")
require("../../RequireBasic/Events/ready");

module.exports = {
  name: "status",
  description: "Displays the status of the client Connection.",
  permission: "ADMINISTRATOR",
  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client){

    const Response = new MessageEmbed()
    .setColor("AQUA")
    .setDescription(`**Client**: \` Online\` - \`${client.ws.ping}ms\``)

    interaction.reply({embeds: [Response]})
  }
}

