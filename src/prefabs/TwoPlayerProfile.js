
// You can write more code here

/* START OF COMPILED CODE */

class TwoPlayerProfile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// twoPlayerTimerRing
		const twoPlayerTimerRing = scene.add.image(0, 0, "Green-Timeline-Sibstracted");
		twoPlayerTimerRing.scaleX = 1.3;
		twoPlayerTimerRing.scaleY = 1.3;
		this.add(twoPlayerTimerRing);

		// twoPlayerAvatar
		const twoPlayerAvatar = scene.add.image(0, 0, "player-1-avatar");
		twoPlayerAvatar.scaleX = 0.65;
		twoPlayerAvatar.scaleY = 0.65;
		this.add(twoPlayerAvatar);

		// twoPlayerEarth
		const twoPlayerEarth = scene.add.image(167, 46, "Earth");
		twoPlayerEarth.scaleX = 0.33;
		twoPlayerEarth.scaleY = 0.33;
		this.add(twoPlayerEarth);

		this.twoPlayerTimerRing = twoPlayerTimerRing;
		this.twoPlayerAvatar = twoPlayerAvatar;
		this.twoPlayerEarth = twoPlayerEarth;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = scene;

		this.shape = this.scene.add.graphics();
		this.shape.visible = false;

		const maskShape = this.shape.createGeometryMask();
		this.twoPlayerTimerRing.setMask(maskShape);
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	twoPlayerTimerRing;
	/** @type {Phaser.GameObjects.Image} */
	twoPlayerAvatar;
	/** @type {Phaser.GameObjects.Image} */
	twoPlayerEarth;

	/* START-USER-CODE */

	// Write your code here.

	startTimerInit(x, y, nTotalTurnTime, ttl, playerId, isOwnPlayer, dTimeEvenSend) {

		this.intervalTimeResetTwoPlayer();

		if (isOwnPlayer) {
			this.ownPlayerTimer(x, y, nTotalTurnTime, ttl, playerId, dTimeEvenSend);
			clearTimeout(this.opponentPlayerTimeOut);
			clearTimeout(this.ownPlayerTimeOut);
			this.ownPlayerTimeOut = setTimeout(() => {
				history.back();
			}, 1000 * 90);
		}
		else {
			this.oppoPlayerTimer(x, y, nTotalTurnTime, ttl, playerId, dTimeEvenSend)
			const millis = Date.now()
			clearTimeout(this.ownPlayerTimeOut);
			clearTimeout(this.opponentPlayerTimeOut);
			this.opponentPlayerTimeOut = setTimeout(() => {
				history.back();
			}, 1000 * 90);
		}


	}

	ownPlayerTimer(x, y, nTotalTurnTime, ttl, playerId, dTimeEvenSend) {
		const millis = Date.now()
		let difftime = (dTimeEvenSend - millis) / 1000;
		console.log("Timer", difftime);

		this.twoPlayerTimerRing.visible = true;

		this.shape.x = this.twoPlayerTimerRing.x;
		this.shape.y = this.twoPlayerTimerRing.y;

		let ttleave = nTotalTurnTime;
		let totalTime = ttleave;

		let startAngle = 270;
		const endAngle = -90;

		let useAngle = 0;

		if (ttl != nTotalTurnTime) {
			totalTime = ttl;
			useAngle = ((startAngle + 90) * (nTotalTurnTime - ttl)) / nTotalTurnTime
		}

		startAngle -= useAngle
		const angleIncrement = ((360 - useAngle) / totalTime);

		let currentAngle = startAngle;
		let timerWarning = true;
		this.timer = setInterval(() => {
			this.shape.clear();
			this.shape.fillStyle(0xffffff);
			// Draw a filled arc
			this.shape.beginPath();
			this.shape.moveTo(x, y);
			this.shape.arc(x, y, 200, Phaser.Math.DegToRad(currentAngle), Phaser.Math.DegToRad(endAngle), true);
			this.shape.closePath();
			this.shape.fill();

			if (currentAngle <= -90) {
				this.intervalTimeResetTwoPlayer();
				this.scene.gameBoard.makeDisableInteractivePawn();
				this.scene.gameBoard.hideRings();
				this.scene.twoPlayerDice.dice.disableInteractive();
				this.scene.diceRectangle.disableInteractive();
				this.scene.down_arrow_Small.visible = false;
			} else {
				currentAngle -= angleIncrement / 10;

				if (currentAngle <= -60 && timerWarning) {
					timerWarning = false
					this.beepSound();
					this.twoPlayerTimerRing.tintFill = true;
					this.twoPlayerTimerRing.tintTopLeft = 16711680;
					this.twoPlayerTimerRing.tintTopRight = 16711680;
					this.twoPlayerTimerRing.tintBottomLeft = 16711680;
					this.twoPlayerTimerRing.tintBottomRight = 16711680;
				}
			}
		}, 100);
	}

	oppoPlayerTimer(x, y, nTotalTurnTime, ttl, playerId, dTimeEvenSend) {

		const millis = Date.now()
		let difftime = (dTimeEvenSend - millis) / 1000;
		console.log("Timer", difftime);

		this.twoPlayerTimerRing.visible = true;

		this.shape.x = this.twoPlayerTimerRing.x;
		this.shape.y = this.twoPlayerTimerRing.y;

		let ttleave = nTotalTurnTime;
		let totalTime = ttleave;

		let startAngle = -90; // Start from the top
		let endAngle = 270; // End at the bottom

		let useAngle = 0;

		if (ttl != nTotalTurnTime) {
			totalTime = ttl;

			useAngle = ((endAngle + 90) * (nTotalTurnTime - ttl)) / nTotalTurnTime;
		}

		startAngle += useAngle; // Update the end angle

		const angleIncrement = ((360 - useAngle) / totalTime);

		let currentAngle = startAngle;
		let timerWarning = true;
		this.timer = setInterval(() => {
			this.shape.clear();
			this.shape.fillStyle(0xffffff);
			// Draw a filled arc
			this.shape.beginPath();
			this.shape.moveTo(x, y);
			this.shape.arc(x, y, 200, Phaser.Math.DegToRad(currentAngle), Phaser.Math.DegToRad(endAngle), false); // Set the last parameter to false to draw counter-clockwise
			this.shape.closePath();
			this.shape.fill();

			if (currentAngle >= 270) { // Check if we reached the top
				this.intervalTimeResetTwoPlayer();

			} else {
				currentAngle += angleIncrement / 10;

				if (currentAngle >= 240 && timerWarning) { // Check if we reached the warning point
					timerWarning = false;
					this.beepSound();
					this.twoPlayerTimerRing.tintFill = true;
					this.twoPlayerTimerRing.tintTopLeft = 16711680;
					this.twoPlayerTimerRing.tintTopRight = 16711680;
					this.twoPlayerTimerRing.tintBottomLeft = 16711680;
					this.twoPlayerTimerRing.tintBottomRight = 16711680;
				}
			}
		}, 100);
	}


	beepSound() {
		this.scene.oSoundManager.playSound(this.scene.oSoundManager.timerBeepSound, false);
		this.beepSoundInterval = setInterval(() => {
			this.scene.oSoundManager.playSound(this.scene.oSoundManager.timerBeepSound, false);
		}, 1000)
	}

	intervalTimeResetTwoPlayer() {
		this.shape.clear();
		this.twoPlayerTimerRing.setVisible(false);
		clearInterval(this.timer);
		clearInterval(this.beepSoundInterval);
		this.twoPlayerTimerRing.tintFill = false;
		this.twoPlayerTimerRing.tintTopLeft = 0;
		this.twoPlayerTimerRing.tintTopRight = 0;
		this.twoPlayerTimerRing.tintBottomLeft = 0;
		this.twoPlayerTimerRing.tintBottomRight = 0;
		this.twoPlayerTimerRing.clearTint();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
