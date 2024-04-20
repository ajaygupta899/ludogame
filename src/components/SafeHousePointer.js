
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class SafeHousePointer {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__SafeHousePointer"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {SafeHousePointer} */
	static getComponent(gameObject) {
		return gameObject["__SafeHousePointer"];
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameObject;
	/** @type {boolean} */
	isSafeHouse = false;
	/** @type {boolean} */
	isAtHome = false;
	/** @type {boolean} */
	shouldPlaySound = true;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
