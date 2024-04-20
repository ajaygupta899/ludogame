
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class TokenHomes {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__TokenHomes"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {TokenHomes} */
	static getComponent(gameObject) {
		return gameObject["__TokenHomes"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {number} */
	index = 0;
	/** @type {boolean} */
	isHome = true;
	/** @type {boolean} */
	isAtSafeHouse = false;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
