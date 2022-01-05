// Global gameState to allow all functions access to game objects.
const gameState = {
	speed: 3,
};

// there are 3 main functions for Phaser games, They HAVE TO BE in function ('function funcName()') syntax:
function preload() {
	this.load.image(
		'codey',
		'https://content.codecademy.com/courses/learn-phaser/codey.png'
	);
}

function create() {
	this.add.text(225, 100, 'Phaser Cheat Sheet');
	gameState.codey = this.add.sprite(30, 200, 'codey');

	// making a sprite interactive at game creation
	gameState.codey.setInteractive();
	gameState.codey.on('pointerdown', function () {
		gameState.codey.x -= Math.floor(Math.random() * 300);
	});

	// keyboard events!, keys are names in 'key<action>-<KEYNAME>' syntax
	this.input.keyboard.on('keydown-A', function () {
		gameState.codey.x = 0;
	});

	// you can also use createCursorKeys() syntax, uses the 'update' scene function
	gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
	// updates the game at a default fps of (60?).

	/* 
	you can do basic updates every frame: {
		gameState.codey.x += 2;
	}
	*/

	// keyboard events, update on keypress
	if (gameState.cursors.up.isDown) {
		gameState.codey.y -= gameState.speed;
	}

	if (gameState.cursors.left.isDown) {
		gameState.codey.x -= gameState.speed;
	}

	if (gameState.cursors.down.isDown) {
		gameState.codey.y += gameState.speed;
	}

	if (gameState.cursors.right.isDown) {
		gameState.codey.x += gameState.speed;
	}
}

// every phaser game has a config object
const config = {
	// required properties:
	type: Phaser.WEBGL, // also can take Phaser.CANVAS for simpler games // default is Phaser.AUTO
	width: 1280,
	height: 720,
	// optional properties:
	backgroundColor: 0x2f2f2f,
	//parent: body, // the html element to append canvas to.

	// scene property, required for game logic
	scene: {
		preload,
		create,
		update,
	},
	// more at docs: https://photonstorm.github.io/phaser3-docs/Phaser.Core.Config.html
};

// how to start the game, usually at end of file.
const game = new Phaser.Game(config);
