
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
      this.blueBarrel;
      this.fireball;
      this.fallingBarrel;
      this.hammers;
      this.hasHammer;
      this.score;
      this.scoreText;
      this.gameOver;
      this.standingBarrels;
      this.jumping;

      this.game.physics.startSystem(Phaser.Physics.ARCADE);


      this.platforms = this.game.add.group();
      this.platforms.enableBody = true;

      this.ladders = this.game.add.group();
      this.ladders.enableBody = true;

      this.barrels = this.game.add.group();
      this.barrels.enableBody = true;

      this.hammers = this.game.add.group();
      this.hammers.enableBody = true;

      this.standingBarrels = this.game.add.group();
      this.standingBarrels.enableBody = true;


      for (var i = 0; i < 14; i++) {
        var platform = this.platforms.create(0 + 30 * i, 610, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 10; i++) {
        var platform = this.platforms.create(420 + 30 * i, 610 - 2 * i, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 50; i++) {
        var platform = this.platforms.create(630 - 30 * i, 530 - 2 * i, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 20; i++) {
        var platform = this.platforms.create(130 + 30 * i, 430 - 2 * i, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 30; i++) {
        var platform = this.platforms.create(640 - 30 * i, 330 - 2 * i, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 20; i++) {
        var platform = this.platforms.create(130 + 30 * i, 230 - 2 * i, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 11; i++) {
        var platform = this.platforms.create(650 - 30 * i, 130 - 2 * i, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 12; i++) {
        var platform = this.platforms.create(0 + 30 * i, 110, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 4; i++) {
        var platform = this.platforms.create(300 + 30 * i, 50, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 2; i++) {
        var platform = this.platforms.create(240 + 30 * i, 70, 'platform');
        platform.body.immovable = true;
        platform.body.checkCollision.down = false;
        platform.body.checkCollision.left = false;
        platform.body.checkCollision.right = false;
      }

      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(560, 580 - 24 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(160, 480 - 24 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(614, 380 - 24 * i, 'ladder');
        ladder.body.immovable = true;
      }


      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(140, 280 - 24 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(614, 180 - 24 * i, 'ladder');
        ladder.body.immovable = true;
      }

      for (var i = 0; i < 3; i++) {
        var ladder = this.ladders.create(380, 100 - 24 * i, 'ladder');
        ladder.body.immovable = true;
      }

      var hammer = this.hammers.create(130, 350, 'hammer');
      hammer = this.hammers.create(130, 150, 'hammer');

      this.pauline = this.game.add.sprite(260, 30, 'pauline');
      this.game.physics.enable(this.pauline);

      this.donkeyKong = this.game.add.sprite(40, 50, 'donkey_kong');
      this.donkeyKong.animations.add('throw', [0, 3, 5, 2], 5, false);
      this.game.physics.enable(this.donkeyKong);

      var barrel = this.standingBarrels.create(20, 70, 'standing_barrel');
      barrel = this.standingBarrels.create(20, 50, 'standing_barrel');
      barrel = this.standingBarrels.create(0, 70, 'standing_barrel');
      barrel = this.standingBarrels.create(0, 50, 'standing_barrel');

      this.fallingBarrel = this.game.add.sprite(0, 50, 'falling_barrel');
      this.game.physics.enable(this.fallingBarrel);
      this.fallingBarrel.body.velocity.y = 200;

      this.oilBarrel = this.game.add.sprite(0, 560, 'oil_barrel');
      this.game.physics.enable(this.oilBarrel);

      this.player = this.game.add.sprite(0, 550, 'mario');

      this.game.physics.enable(this.player);
      this.player.body.gravity.y = 600;
      this.player.body.collideWorldBounds = true;

      this.player.animations.add('left', [0, 1], 10, true);
      this.player.animations.add('right', [4, 5], 10, true);



      cursors = this.game.input.keyboard.createCursorKeys();


      this.throwBarrelEvent = this.game.time.events.add(1000 + (3000 * Math.random()), this.throwBarrel, this);

      this.stateText = this.game.add.text(this.game.world.centerX,this.game.world.centerY,' ', { font: '48px Arial', fill: '#fff' });
      this.stateText.anchor.setTo(0.5, 0.5);
      this.stateText.visible = false;

      this.score = 0;
      this.scoreText = this.game.add.text(40,16,'score: ' + this.score, { font: '12px Arial', fill: '#fff' });

      this.music = this.add.audio('gameMusic');
  		this.music.play();
      this.music.loopFull();

      this.jumpSound = this.add.audio('jump');
      this.hammerSound = this.add.audio('hammer');
      this.winSound = this.add.audio('win');
      this.deathSound = this.add.audio('death');
      this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      this.rKey = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
      this.rKey.onDown.add(this.restart, this);


    },

    createFireball: function() {
      this.fallingBarrel.kill();
      this.fireball = this.game.add.sprite(0, 550, 'fireball');
      this.game.physics.enable(this.fireball);
      this.fireball.body.collideWorldBounds = true;
      this.fireball.body.bounce.setTo(1, 0);
      this.game.time.events.add(1000, this.moveFire, this);
    },

    moveFire: function() {
      var direction = Math.random();
      if (this.fireball.y - this.player.y > 100) {
        this.fireball.body.velocity.y = -40;
      } else if (this.fireball.y - this.player.y < -100) {
        this.fireball.body.velocity.y = 40;
      }
      else {
        if (direction < 0.5) {
          this.fireball.body.velocity.y = -40
        } else {
          this.fireball.body.velocity.y = 40
        }
      }
      if (direction < 0.5) {
        this.fireball.body.velocity.x = -40;
        this.fireball.frame = 0;
      } else {
        this.fireball.body.velocity.x = 40;
        this.fireball.frame = 1;
      }
      this.game.time.events.add(1000, this.moveFire, this);

    },

    killFire: function() {
      this.fireball.kill();

      this.score += 500;
      this.scoreText.text = 'score: ' + this.score;

      this.fallingBarrel = this.game.add.sprite(0, 200, 'falling_barrel');
      this.game.physics.enable(this.fallingBarrel);
      this.fallingBarrel.body.velocity.y = 200;
    },

    climb: function() {
      var ladders = this.ladders.children
      ladders.forEach(function(ladder) {
        var diffX = ladder.body.x - this.player.body.x;
        if (diffX < 0 && diffX > -24)
        {
          if (this.player.body.velocity.y === 0 && !this.jumping) {
            this.player.body.gravity.y = 0;
          }
          if (!this.hasHammer) {
            if (cursors.up.isDown) {
              this.player.body.velocity.y = -100;
            }
            if (cursors.down.isDown) {
              this.player.body.velocity.y = 100;
            }
          }
        }
      }.bind(this))

    },

    createBarrel: function() {
      var barrel = this.barrels.create(120, 70, 'barrel');
      this.game.physics.enable(barrel);
      barrel.animations.add('roll', [0, 1, 2, 3], 10, true)
      barrel.body.velocity.x = 150;
      barrel.body.gravity.y = 600;
      barrel.body.collideWorldBounds = true;
      barrel.body.bounce.setTo(1, 0);
    },

    collideBarrel: function(player, barrel) {
      var diffX = barrel.body.x - this.player.body.x;
      var diffY = barrel.body.y - this.player.body.y;
      if (diffX < 20 && diffX > -20 && diffY < 20 && diffY > -20) {
        this.quitGame();
      }
    },

    throwBarrel: function() {
      this.donkeyKong.animations.play('throw');
      this.game.time.events.add(500, this.createBarrel, this);

      this.throwBarrelEvent = this.game.time.events.add(1000 + (4000 * Math.random()), this.throwBarrel, this);


    },

    killBarrel: function(oilBarrel, barrel) {
      barrel.kill();
      if (this.hasHammer) {
        this.score += 500;
        this.hammerSound.play();
      }
      this.scoreText.text = 'score: ' + this.score;
    },

    pickUpHammer: function(player, hammer) {
      if (!this.gameOver) {
        hammer.kill();
        this.hasHammer = true;
        this.player.loadTexture('mario_hammer', 0);
        this.game.physics.enable(this.player);
        this.player.body.velocity.y = 0;
        this.player.body.gravity.y = 0;
        this.player.body.y -= 20;
        this.player.body.width = 56;
        this.player.body.height = 64;
        // this.music.stop()
        // this.hammerSound.play();
        // this.hammerSound.loopFull();
        this.game.time.events.add(5000, this.dropHammer, this);
      }
    },

    dropHammer: function() {
      this.hasHammer = false;
      this.player.loadTexture('mario', 0);
      this.player.body.width = 42;
      this.player.body.height = 36;
      // this.hammerSound.stop();
      // this.music.play();
      // this.music.loopFull();
    },

    jumpOverBarrel: function() {
      var barrels = this.barrels.children
      barrels.forEach(function(barrel) {
        var diffY = barrel.body.y - this.player.body.y;
        var diffX = barrel.body.x - this.player.body.x;
        if (diffY < 100 && diffY > 0 && diffX < 120 && diffX > -120) {
          if (!this.gameOver) {
            this.score += 100;
            this.scoreText.text = "score: " + this.score;
          }
        }
      }.bind(this))
    },

    update: function () {
      this.barrels.callAll('play', null, 'roll');

      this.player.body.gravity.y = 600;
      this.game.physics.arcade.collide(this.player, this.platforms);
      this.game.physics.arcade.collide(this.barrels, this.platforms);

      this.game.physics.arcade.overlap(this.barrels, this.oilBarrel, this.killBarrel.bind(this));
      this.game.physics.arcade.overlap(this.fallingBarrel, this.oilBarrel, this.createFireball.bind(this));
      this.game.physics.arcade.overlap(this.hammers, this.player, this.pickUpHammer.bind(this));

      if (this.hasHammer) {
        this.game.physics.arcade.overlap(this.barrels, this.player, this.killBarrel.bind(this));
        this.game.physics.arcade.overlap(this.fireball, this.player, this.killFire.bind(this));
      } else if (!this.gameOver) {
        this.game.physics.arcade.overlap(this.barrels, this.player, this.collideBarrel.bind(this));
        this.game.physics.arcade.overlap(this.fireball, this.player, this.quitGame.bind(this));
      }

      if (!this.jumping) {
        this.game.physics.arcade.overlap(this.player, this.ladders, this.climb.bind(this));
      }

      if (!this.gameOver) {
        this.game.physics.arcade.overlap(this.player, this.pauline, this.winGame.bind(this));
      }

      this.player.body.velocity.x = 0;
      if (cursors.left.isDown)
      {
          //  Move to the left
          this.player.body.velocity.x = -100;
          this.player.animations.play('left');
      }
      else if (cursors.right.isDown)
      {
          //  Move to the right
          this.player.body.velocity.x = 100;
          this.player.animations.play('right');
      }
      else
      {
          //  Stand still
          this.player.animations.stop();
      }

      //  Allow the this.player to jump if they are touching the ground.
      if (this.player.body.touching.down) {
        this.jumping = false;
      }

      if (this.spaceKey.isDown && this.player.body.touching.down && !this.hasHammer)
      {
          this.player.body.velocity.y = -250;
          this.jumping = true;
          this.jumpOverBarrel();
          this.jumpSound.play();
      }

    },

    restart: function() {
      this.gameOver = false;
      this.state.start('Game');
    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.
        this.music.stop();
        this.deathSound.play();
        this.player.loadTexture('mario_death');
        cursors.disable = true;
        this.gameOver = true;
        this.barrels.callAll('kill');

        finalScore = this.score;
        this.scoreText.text = "score: " + finalScore;
        this.stateText.text=" GAME OVER \n Hit 'R' to restart";
        this.stateText.visible = true;
        this.game.time.events.remove(this.throwBarrelEvent);
    },

    winGame: function() {
      this.game.time.events.remove(this.throwBarrelEvent);
      finalScore = this.score + 2000;
      this.scoreText.text = "score: " + finalScore;
      this.music.stop();
      this.winSound.play();
      this.gameOver = true;
      this.donkeyKong.frame = 2;
      this.game.time.events.add(3000, function(){this.donkeyKong.body.velocity.y = 400;}.bind(this));
      this.game.time.events.add(4500, function(){this.donkeyKong.kill()}.bind(this))
      this.stateText.text="     YOU WIN \n Hit 'R' to restart";
      this.stateText.visible = true;
      //  Then let's go back to the main menu.
      this.game.input.onTap.addOnce(this.restart.bind(this),this);
    }

};
