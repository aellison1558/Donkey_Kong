
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		// this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, swap them for your own.
		this.load.image('titlepage', 'images/main_menu.jpg');
		this.load.image('playButton', 'images/play.png');
		this.load.audio('titleMusic', ['audio/title_theme.mp3']);
		// this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');
		//	+ lots of other required assets here
		this.load.image('platform', 'images/platform1.png');
		this.load.image('ladder', 'images/ladder2.png');
		this.load.image('pauline', 'images/pauline1.png');
		this.load.image('hammer', 'images/hammer.gif');
		this.load.spritesheet('mario', 'images/mario.png', 21, 18);
		this.load.spritesheet('mario_hammer', 'images/mariohammerclean.png', 32, 29);
		this.load.spritesheet('barrel', 'images/side_barrel.png', 15, 13);
		this.load.spritesheet('oil_barrel', 'images/oil_barrel.png', 22, 25);
		this.load.spritesheet('donkey_kong', 'images/donkey_kong1.gif', 50, 33);
		this.load.spritesheet('fireball', 'images/fireball1.gif', 22, 19);
		this.load.image('mario_death', 'images/mariodeath.gif');
		this.load.image('falling_barrel', 'images/falling_barrel2.gif');
		this.load.image('standing_barrel', 'images/barrel.gif')
		this.load.audio('gameMusic', ['audio/bacmusic.wav']);
		this.load.audio('death', ['audio/death.wav']);
		this.load.audio('hammer', ['audio/hammer.wav']);
		this.load.audio('jump', ['audio/jump.wav']);
		this.load.audio('walking', ['audio/walking.wav']);
		this.load.audio('win', ['audio/win1.wav']);

	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.

		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.

		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}

	}

};
