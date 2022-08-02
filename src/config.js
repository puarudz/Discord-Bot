const config = {
	ownerID: ['572034375848427532'],
	token: 'NTg4NjM4NTIzMDkxOTc2MjAy.GMVODB.UD-mAojoDVgsL9GKM3mcdnt2w-HTsObcVrqZTc',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://dev.twitch.tv/console/apps
		twitch: {
			clientID: 'hax4vsex1lv6nu1cfqgszyt7i70tgv',
			clientSecret: 'p069c3w9oj7fh7vd130xynvxms63dy',
		},
		// https://fortnitetracker.com/site-api
		//fortnite: '86a38517-cb16-4752-aed5-0c14d015e219',
		// https://steamcommunity.com/dev
		steam: 'AC7A3148BDDBDAE63FCCDB4359BAC235',
		// https://developer.spotify.com/documentation/web-api/
		spotify: {
			iD: '008ab999ffa048b4af3038b7cfd82959',
			secret: 'bc572cabd5d14e889260fce32bac450e',
		},
		// Your Ubisoft email and password (You don't need to enable anything)
		rainbow: {
			email: 'email',
			password: 'password',
		},
		// https://genius.com/developers
		genius: '6CDFy6T-aUQOK3xPIokG5ONctoq6V16TIcQKMlwtD9SsHAIwiI3b5O-Vc2fKol2s',
		// https://api.amethyste.moe/
		amethyste: 'd6de2b1d645d6211f88cf2fc5905a249908e79edd3234512bd0b89d31aa6f22184f257afa5848b41c9e24d5ac69f20b50e41e356c2f1c566a895c6a133227e10',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: 'http://45.62.247.109',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/AGUmZ3kEWv',
		// Your support's server ID
		GuildID: '900060522987290708',
		// This for using the suggestion command on your server
		ModRole: '900060522987290708',
		// What channel to post the suggestions
		SuggestionChannel: '900060522987290708',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '900060522987290708',
		// Where rate limits will be sent to, for investigation
		rateLimitChannelID: '900060522987290708',
	},
	API: {
		port: 3000,
		secure: true,
		token: '123456789',
	},
	LavalinkNodes: [
		{ host: 'localhost', port: 5000, password: 'youshallnotpass' },
	],
	// URL to mongodb
	MongoDBURl: 'mongodb+srv://puaruvn:zxczxc@cluster0.lujwmb1.mongodb.net/?retryWrites=true&w=majority',
	// embed colour
	embedColor: 'RANDOM',
	// This will spam your console if you enable this but will help with bug fixing
	debug: false,
};

module.exports = config;
