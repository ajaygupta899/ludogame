
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class UserHandler {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__UserHandler"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {UserHandler} */
	static getComponent(gameObject) {
		return gameObject["__UserHandler"];
	}

	/** @type {Phaser.GameObjects.Container} */
	gameObject;
	/** @type {string} */
	iUserId = "";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
