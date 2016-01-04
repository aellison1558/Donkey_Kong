
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
      this.platforms;
      this.pauline;
      this.player;
      this.ladders;

      this.game.physics.startSystem(Phaser.Physics.ARCADE);


      this.platforms = this.game.add.group();
      this.platforms.enableBody = true;

      this.ladders = this.game.add.group();
      this.ladders.enableBody = true;


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

      for (var i = 0; i < 20; i++) {
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

      for (var i = 0; i < 20; i++) {
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

      for (var i = 0; i < 2; i++) {
        var ladder = this.ladders.create(280, 360 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 4; i++) {
        var ladder = this.ladders.create(180, 320 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 2; i++) {
        var ladder = this.ladders.create(80, 310 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 4; i++) {
        var ladder = this.ladders.create(220, 270 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 2; i++) {
        var ladder = this.ladders.create(307, 260 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(130, 215 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 2; i++) {
        var ladder = this.ladders.create(70, 210 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 2; i++) {
        var ladder = this.ladders.create(307, 160 - 12 * i, 'ladder');
        ladder.body.immovable = true;
      }


      this.pauline = this.game.add.sprite(130, 90, 'pauline');
      this.player = this.game.add.sprite(0, 350, 'mario');

      this.game.physics.enable(this.player);
      this.player.body.gravity.y = 300;
      this.player.body.collideWorldBounds = true;

      this.player.animations.add('left', [0, 1], 10, true);
      this.player.animations.add('right', [4, 5], 10, true);

      cursors = this.game.input.keyboard.createCursorKeys();
    },

    update: function () {

      this.game.physics.arcade.collide(this.player, this.platforms);

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
      if (cursors.up.isDown && this.player.body.touching.down)
      {
          this.player.body.velocity.y = -130;
      }

    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');

    }

};
