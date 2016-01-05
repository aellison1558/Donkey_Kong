
BasicGame.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

    create: function () {
      this.stateText;
      this.platforms;
      this.pauline;
      this.player;
      this.ladders;
      this.barrels;
      this.oilBarrel;
      this.donkeyKong;
      this.spaceKey;

      this.game.physics.startSystem(Phaser.Physics.ARCADE);


      this.platforms = this.game.add.group();
      this.platforms.enableBody = true;

      this.ladders = this.game.add.group();
      this.ladders.enableBody = true;

      this.barrels = this.game.add.group();
      this.barrels.enableBody = true;


      for (var i = 0; i < 14; i++) {
        var platform = this.platforms.create(0 + 15 * i, 380, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 10; i++) {
        var platform = this.platforms.create(200 + 15 * i, 380 - 1 * i, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 30; i++) {
        var platform = this.platforms.create(315 - 15 * i, 340 - 1 * i, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 20; i++) {
        var platform = this.platforms.create(65 + 15 * i, 290 - 1 * i, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 30; i++) {
        var platform = this.platforms.create(320 - 15 * i, 240 - 1 * i, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 20; i++) {
        var platform = this.platforms.create(65 + 15 * i, 190 - 1 * i, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 11; i++) {
        var platform = this.platforms.create(325 - 15 * i, 140 - 1 * i, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 12; i++) {
        var platform = this.platforms.create(0 + 15 * i, 130, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 4; i++) {
        var platform = this.platforms.create(150 + 15 * i, 100, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 2; i++) {
        var platform = this.platforms.create(120 + 15 * i, 110, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(280, 365 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 4; i++) {
        var ladder = this.ladders.create(150, 320 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(80, 315 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 4; i++) {
        var ladder = this.ladders.create(240, 270 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(307, 265 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(130, 215 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(70, 215 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(307, 165 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }


      this.pauline = this.game.add.sprite(130, 90, 'pauline');
      this.game.physics.enable(this.pauline);

      this.donkeyKong = this.game.add.sprite(60, 100, 'donkey_kong');
      this.donkeyKong.animations.add('throw', [2, 4, 1], 5, false);

      this.oilBarrel = this.game.add.sprite(0, 350, 'oil_barrel');
      this.game.physics.enable(this.oilBarrel);
      // this.oilBarrel.animations.add('fire', [0, 1], 10, true);

      this.player = this.game.add.sprite(0, 350, 'mario');

      this.game.physics.enable(this.player);
      this.player.body.gravity.y = 300;
      this.player.body.collideWorldBounds = true;

      this.player.animations.add('left', [0, 1], 10, true);
      this.player.animations.add('right', [4, 5], 10, true);

      cursors = this.game.input.keyboard.createCursorKeys();

      this.game.time.events.add(5000 + (5000 * Math.random()), this.throwBarrel, this);

      this.stateText = this.game.add.text(this.game.world.centerX,this.game.world.centerY,' ', { font: '48px Arial', fill: '#fff' });
      this.stateText.anchor.setTo(0.5, 0.5);
      this.stateText.visible = false;

      this.music = this.add.audio('gameMusic');
  		this.music.play();
      this.music.loopFull();
      this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    },

    climb: function() {


      if (cursors.up.isDown) {
        this.player.body.velocity.y = -50;
      }
      if (cursors.down.isDown) {
        this.player.body.velocity.y = 50;
      }

    },

    throwBarrel: function() {
      this.donkeyKong.animations.play('throw');
      var barrel = this.barrels.create(90, 110, 'barrel');
      this.game.physics.enable(barrel);
      barrel.animations.add('roll', [0, 1, 2, 3], 10, true)
      barrel.body.velocity.x = 50;
      barrel.body.gravity.y = 300;
      barrel.body.collideWorldBounds = true;
      barrel.body.bounce.setTo(1, 0);

      this.game.time.events.add(5000 + (5000 * Math.random()), this.throwBarrel, this);


    },

    killBarrel: function(oilBarrel, barrel) {
      barrel.kill();
    },

    update: function () {

      this.barrels.callAll('play', null, 'roll');

      // this.oilBarrel.animations.play('fire');

      this.player.body.gravity.y = 300;
      this.game.physics.arcade.collide(this.player, this.platforms);
      this.game.physics.arcade.collide(this.barrels, this.platforms);

      this.game.physics.arcade.overlap(this.barrels, this.oilBarrel, this.killBarrel.bind(this));
      this.game.physics.arcade.overlap(this.barrels, this.player, this.quitGame.bind(this));

      this.game.physics.arcade.overlap(this.player, this.ladders, this.climb.bind(this));
      this.game.physics.arcade.overlap(this.player, this.pauline, this.winGame.bind(this));

      this.player.body.velocity.x = 0;
      if (cursors.left.isDown)
      {
          //  Move to the left
          this.player.body.velocity.x = -50;
          this.player.animations.play('left');
      }
      else if (cursors.right.isDown)
      {
          //  Move to the right
          this.player.body.velocity.x = 50;
          this.player.animations.play('right');
      }
      else
      {
          //  Stand still
          this.player.animations.stop();
      }

      //  Allow the this.player to jump if they are touching the ground.
      if (this.spaceKey.isDown && this.player.body.touching.down)
      {
          this.player.body.velocity.y = -125;
      }

    },

    restart: function() {
      this.state.start('MainMenu');
    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.
        this.player.kill();
        this.barrels.callAll('kill');
        this.stateText.text=" GAME OVER \n Click to restart";
        this.stateText.visible = true;
        //  Then let's go back to the main menu.
        this.game.input.onTap.addOnce(this.restart.bind(this),this);


    },

    winGame: function() {
      this.stateText.text=" YOU WIN \n Click to restart";
      this.stateText.visible = true;
      //  Then let's go back to the main menu.
      this.game.input.onTap.addOnce(this.restart.bind(this),this);
    }

};
