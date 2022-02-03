# NFT sales Discord Bot

An open source NFT sales bot for Discord.

This bot was inspired by [Pixelglyph sales bot](https://github.com/nftboi/discord-nft-sales-bot)

**Creating a bot**

See the https://github.com/0xEssential/opensea-discord-bot README for a good explanation of setting up your bot in the Discord developer portal.

---

### **This package requires Node 16.6.0 or greater**

---

**Installation**

```
yarn install yeti-discord-nft-sales-bot
```

**Usage**

Simple example:

```js
import nftSalesBot from "yeti-discord-nft-sales-bot";

nftSalesBot({
  // Websocket connection to Ethereum)
  websocketURI: process.env.WEBSOCKET_URI!,

  // NFT smart contract address
  contractAddress: process.env.CONTRACT_ADDRESS!,

  // Bot token set up in Discord developer portal
  discordBotToken: process.env.DISCORD_BOT_TOKEN!,

  // ID of channel (turn on Developer mode in Discord to get this)
  discordChannelId: process.env.DISCORD_CHANNEL_ID!,

  discordBotName: process.env.DISCORD_BOT_NAME!,

  discordBotColor: Number(process.env.DISCORD_BOT_COLOR!),

  discordBotImage: process.env.DISCORD_BOT_IMAGE!,

  discordBotLink: process.env.DISCORD_BOT_LINK!,

}).catch((e) => {
  console.log("Error: "+e);
  // something went wrong
});
```

## Options

The default export takes one argument which is an object with the following keys and values:

- `websocketURI` - Required. This is a websocket connection to Ethereum. You can easily get one of these by signing up for [Infura](https://infura.io).
- `contractAddress` - Required. The smart contract address for your ERC-721 smart contract.
- `discordBotToken` - Required. The Discord bot token for you bot. Create an application within the [Discord developer portal](https://discord.com/developers/applications) and then create a bot within that application that can has permissions to post messages. You can reveal the token from the bot screen.
- `discordChannelId` - Required. The ID of the channel you want to bot to post in. You can get this by turning on Developer mode in Discord and then clicking the settings icon of the channel.
- `discordBotName` - Required. The name of the bot that will post in the channel.
- `discordBotImage` - Required. The profile image that the bot will have when it posts in the channel. 
- `discordBotColor` - Required. The number value of the color that the bot will post with. [converter](https://gist.github.com/thomasbnt/b6f455e2c7d743b796917fa3c205f812)
- `discordBotLink` - Required. The URL that the bot name will link back to. 
- `metadataCb` - Optional. A function that receives the raw NFT metadata as the first argument. Must return an object of the following type `{ name: string; image: string }`
