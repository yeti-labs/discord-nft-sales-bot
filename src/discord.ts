import { format } from "date-fns";
import Discord, { Intents, TextChannel } from "discord.js";

var botname: string;
var botimage: string;
var botcolor: number;
var botlink: string;

export const discordSetup = (
  discordBotToken: string,
  discordChannelId: string,
  discordBotName: string,
  discordBotLink: string,
  discordBotImage: string,
  discordBotColor: number,

): Promise<TextChannel> => {
  botname = discordBotName;
  botimage = discordBotImage;
  botlink = discordBotLink;
  botcolor = discordBotColor;

  const discordBot = new Discord.Client({
    intents: [Intents.FLAGS.GUILD_MESSAGES],
  });
  return new Promise<TextChannel>((resolve, reject) => {
    discordBot.login(discordBotToken);
    discordBot.on("ready", async () => {
      const channel = await discordBot.channels.fetch(discordChannelId);
      resolve(channel as TextChannel);
    });
  });
};

export const createMessage = (
  metadata: { name: string; image: string },
  value: string,
  buyer: string,
  seller: string,
  timestamp: string | number,
  contractAddress: string,
  tokenId: string
) =>
  new Discord.MessageEmbed()
    .setColor(botcolor)
    .setTitle(`${metadata.name} sold!`)
    .setAuthor(
      botname,
      botimage,
      botlink
    )
    .addFields(
      { name: "Name", value: metadata.name },
      { name: "Amount", value: `${value} Ξ` },
      { name: "Buyer", value: buyer },
      { name: "Seller", value: seller },
      {
        name: "Block Time",
        value: format(
          new Date(parseInt(timestamp as string) * 1000),
          "MMM do y h:mm a"
        ),
      }
    )
    .setURL(`https://opensea.io/assets/${contractAddress}/${tokenId}`)
    .setImage(metadata.image);
