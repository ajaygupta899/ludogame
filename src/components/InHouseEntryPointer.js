
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class InHouseEntryPointer {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__InHouseEntryPointer"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {InHouseEntryPointer} */
	static getComponent(gameObject) {
		return gameObject["__InHouseEntryPointer"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {string} */
	tokenIdentifier = "";
	/** @type {string} */
	moveToBox = "";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
