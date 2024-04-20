
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class RingAnimation {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__RingAnimation"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.scene.tweens.add({
			targets: this.gameObject,
			rotation: -360,
			duration: 48000,
			repeat: -1
		});
		/* END-USER-CTR-CODE */
	}

	/** @returns {RingAnimation} */
	static getComponent(gameObject) {
		return gameObject["__RingAnimation"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
