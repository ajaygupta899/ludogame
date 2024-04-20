
// You can write more code here

/* START OF COMPILED CODE */

class Dice extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// dice
		const dice = scene.add.sprite(0, 0, "yellow1");
		dice.scaleX = 0.8;
		dice.scaleY = 0.8;
		this.add(dice);

		this.dice = dice;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	dice;

	/* START-USER-CODE */

	// Write your code here.
	getDiceTexture() {
		this.diceTexture = this.dice.texture.key;
	}

	clearDiceTimeout(){
		clearTimeout(this.resetDiceTimeout)
	}

	resetDiceTexture() {
		this.resetDiceTimeout = setTimeout(() => {
			this.dice.setTexture(this.diceTexture);
			this.dice.setScale(0.8);
		}, 500);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
