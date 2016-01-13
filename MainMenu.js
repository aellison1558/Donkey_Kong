
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		this.music = this.add.audio('titleMusic');
		this.music.play();
		this.music.loopFull();

		this.add.sprite(150, 50, 'titlepage');
		this.rKey = this.input.keyboard.addKey(Phaser.Keyboard.R);
		this.rKey.onDown.add(this.startGame, this);
		this.stateText = this.game.add.text(240, 500,"Hit 'R' to start" , { font: '36px Arial', fill: '#fff' });

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		this.music.stop();

		//	And start the actual game
		this.state.start('Game');

	}

};
