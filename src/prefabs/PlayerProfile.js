// You can write more code here

/* START OF COMPILED CODE */

class PlayerProfile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// playerProfileBackground
		const playerProfileBackground = scene.add.image(0, 0, "red-player-profile");
		playerProfileBackground.scaleX = 1.1;
		playerProfileBackground.scaleY = 1.1;
		this.add(playerProfileBackground);

		// playerDotsContainer
		const playerDotsContainer = scene.add.container(0, 0);
		this.add(playerDotsContainer);

		// blackDotFive
		const blackDotFive = scene.add.image(30, 72, "red-life");
		blackDotFive.scaleX = 0.3;
		blackDotFive.scaleY = 0.3;
		playerDotsContainer.add(blackDotFive);

		// blackDotFour
		const blackDotFour = scene.add.image(55, 72, "red-life");
		blackDotFour.scaleX = 0.3;
		blackDotFour.scaleY = 0.3;
		playerDotsContainer.add(blackDotFour);

		// blackDotThree
		const blackDotThree = scene.add.image(80, 72, "red-life");
		blackDotThree.scaleX = 0.3;
		blackDotThree.scaleY = 0.3;
		playerDotsContainer.add(blackDotThree);

		// blackDotTwo
		const blackDotTwo = scene.add.image(105, 72, "red-life");
		blackDotTwo.scaleX = 0.3;
		blackDotTwo.scaleY = 0.3;
		playerDotsContainer.add(blackDotTwo);

		// blackDotOne
		const blackDotOne = scene.add.image(130, 72, "red-life");
		blackDotOne.scaleX = 0.3;
		blackDotOne.scaleY = 0.3;
		playerDotsContainer.add(blackDotOne);

		// playerLifeContainer
		const playerLifeContainer = scene.add.container(0, 0);
		this.add(playerLifeContainer);

		// lifeFive
		const lifeFive = scene.add.image(30, 72, "green-life");
		lifeFive.scaleX = 0.3;
		lifeFive.scaleY = 0.3;
		playerLifeContainer.add(lifeFive);

		// lifeFour
		const lifeFour = scene.add.image(55, 72, "green-life");
		lifeFour.scaleX = 0.3;
		lifeFour.scaleY = 0.3;
		playerLifeContainer.add(lifeFour);

		// lifeThree
		const lifeThree = scene.add.image(80, 72, "green-life");
		lifeThree.scaleX = 0.3;
		lifeThree.scaleY = 0.3;
		playerLifeContainer.add(lifeThree);

		// lifeTwo
		const lifeTwo = scene.add.image(105, 72, "green-life");
		lifeTwo.scaleX = 0.3;
		lifeTwo.scaleY = 0.3;
		playerLifeContainer.add(lifeTwo);

		// lifeOne
		const lifeOne = scene.add.image(130, 72, "green-life");
		lifeOne.scaleX = 0.3;
		lifeOne.scaleY = 0.3;
		playerLifeContainer.add(lifeOne);

		// playerNameText
		const playerNameText = scene.add.text(-56, 100, "", {});
		playerNameText.setOrigin(0.5, 0.5);
		playerNameText.text = "Player Name";
		playerNameText.setStyle({ "fontFamily": "Monteserrat-Bold", "fontSize": "32px", "fontStyle": "bold" });
		this.add(playerNameText);

		// dice_box
		const dice_box = scene.add.image(79, -2, "Dice-box");
		this.add(dice_box);

		// dicePrefab
		const dicePrefab = new Dice(scene, 79, -3);
		dicePrefab.scaleX = 1;
		dicePrefab.scaleY = 1;
		this.add(dicePrefab);

		// profile_Avtar
		const profile_Avtar = scene.add.image(-62, 0, "Profile-Avtar");
		this.add(profile_Avtar);

		// timer_ring
		const timer_ring = scene.add.image(-63, 0, "Green-Timeline-Sibstracted");
		this.add(timer_ring);

		// playerAvatar
		const playerAvatar = scene.add.image(-63, 0, "player-2-avatar");
		playerAvatar.scaleX = 0.5;
		playerAvatar.scaleY = 0.5;
		this.add(playerAvatar);

		// earth
		const earth = scene.add.image(-93, -108, "Earth");
		earth.scaleX = 0.2;
		earth.scaleY = 0.2;
		this.add(earth);

		this.playerProfileBackground = playerProfileBackground;
		this.blackDotFive = blackDotFive;
		this.blackDotFour = blackDotFour;
		this.blackDotThree = blackDotThree;
		this.blackDotTwo = blackDotTwo;
		this.blackDotOne = blackDotOne;
		this.playerDotsContainer = playerDotsContainer;
		this.lifeFive = lifeFive;
		this.lifeFour = lifeFour;
		this.lifeThree = lifeThree;
		this.lifeTwo = lifeTwo;
		this.lifeOne = lifeOne;
		this.playerLifeContainer = playerLifeContainer;
		this.playerNameText = playerNameText;
		this.dice_box = dice_box;
		this.dicePrefab = dicePrefab;
		this.profile_Avtar = profile_Avtar;
		this.timer_ring = timer_ring;
		this.playerAvatar = playerAvatar;
		this.earth = earth;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = scene;
		this.isRollByUser = false;

		// this.diceRoll = () => {
		// 	this.diceTexture = this.dicePrefab.dice.texture.key;
		// 	this.dicePrefab.dice.disableInteractive();
		//  this.reqRollDice();
		// }

		// this.scene.diceRectangle.setInteractive().on('pointerdown',()=>{
		// 	this.diceRoll();
		// })

		// this.dicePrefab.dice.setInteractive().on("pointerdown", () => {
		// 	this.diceRoll();
		// });

		this.shape = this.scene.add.graphics();
		this.shape.visible = false;

		const maskShape = this.shape.createGeometryMask();
		this.timer_ring.setMask(maskShape);

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	playerProfileBackground;
	/** @type {Phaser.GameObjects.Image} */
	blackDotFive;
	/** @type {Phaser.GameObjects.Image} */
	blackDotFour;
	/** @type {Phaser.GameObjects.Image} */
	blackDotThree;
	/** @type {Phaser.GameObjects.Image} */
	blackDotTwo;
	/** @type {Phaser.GameObjects.Image} */
	blackDotOne;
	/** @type {Phaser.GameObjects.Container} */
	playerDotsContainer;
	/** @type {Phaser.GameObjects.Image} */
	lifeFive;
	/** @type {Phaser.GameObjects.Image} */
	lifeFour;
	/** @type {Phaser.GameObjects.Image} */
	lifeThree;
	/** @type {Phaser.GameObjects.Image} */
	lifeTwo;
	/** @type {Phaser.GameObjects.Image} */
	lifeOne;
	/** @type {Phaser.GameObjects.Container} */
	playerLifeContainer;
	/** @type {Phaser.GameObjects.Text} */
	playerNameText;
	/** @type {Phaser.GameObjects.Image} */
	dice_box;
	/** @type {Dice} */
	dicePrefab;
	/** @type {Phaser.GameObjects.Image} */
	profile_Avtar;
	/** @type {Phaser.GameObjects.Image} */
	timer_ring;
	/** @type {Phaser.GameObjects.Image} */
	playerAvatar;
	/** @type {Phaser.GameObjects.Image} */
	earth;

	/* START-USER-CODE */

	// Write your code here.
	intervalTimeReset() {
		this.shape.clear();
		this.timer_ring.setVisible(false);
		clearInterval(this.beepSoundInterval)
		clearInterval(this.intervalTimer);
		this.timer_ring.tintFill = false;
		this.timer_ring.tintTopLeft = 0;
		this.timer_ring.tintTopRight = 0;
		this.timer_ring.tintBottomLeft = 0;
		this.timer_ring.tintBottomRight = 0;
		this.timer_ring.clearTint();
	}

	startTimerInit(x, y, nTotalTurnTime, ttl, playerId) {

		this.intervalTimeReset();

		this.timer_ring.visible = true;

		this.shape.x = this.timer_ring.x;
		this.shape.y = this.timer_ring.y;

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
			} else {
				currentAngle -= angleIncrement / 10;

				if (currentAngle <= -60 && timerWarning) {
					this.beepSound();
					timerWarning = false
					this.timer_ring.tintFill = true;
					this.timer_ring.tintTopLeft = 16711680;
					this.timer_ring.tintTopRight = 16711680;
					this.timer_ring.tintBottomLeft = 16711680;
					this.timer_ring.tintBottomRight = 16711680;
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

	setPlayerUsername(sPlayerUsername) {
		this.playerNameText.setText(
			sPlayerUsername.length > 8
				? sPlayerUsername.slice(0, 7) + "..."
				: sPlayerUsername
		);
	}

	showDice() {
		this.dice.setVisible(true);
	}

	hideDice() {
		this.dice.setVisible(false);
	}

	getScalePosition(currentPawnScale) {
		this.addPosition;
		this.newScale;

		switch (currentPawnScale) {
			case 1:
				this.addPosition = 3;
				this.newScale = 0.7;
				break;

			case 0.9:
				this.addPosition = 2;
				this.newScale = 0.6;
				break;

			case 0.6:
				this.addPosition = 4;
				this.newScale = 0.35;
				break;

			case 0.5:
				this.addPosition = 3.5;
				this.newScale = 0.3;
				break;

			case 0.4:
				this.addPosition = 2;
				this.newScale = 0.25;
				break;
		}
	}

	setDiceTexture(isOverPlayer, nDice, aMovablePawns, bAutoMove, diceColor) {
		this.dicePrefab.dice.setTexture(diceColor + nDice);
		this.dicePrefab.setScale(1);
		this.dicePrefab.dice.setScale(0.8);
		this.dicePrefab.dice.disableInteractive();
		if (isOverPlayer) {
			if (bAutoMove) {
				this.scene.gameBoard.makeDisableInteractivePawn();
			} else if (aMovablePawns.length) {
				aMovablePawns.forEach((i) => {
					if (this.scene.oGameManager.eGameType === "classic") {
						if (this.oScene.gameBoard.redTokensGroup.children.entries[i].__TokenHomes.isHome) {
							this.oScene.gameBoard.redTokensGroup.children.entries[i].setScale(1);
							this.oScene.gameBoard.redRingsGroup.children.entries[i].setScale(1);
						}
						else {
							this.oScene.gameBoard.redTokensGroup.children.entries[i].setScale(0.9);
							this.oScene.gameBoard.redRingsGroup.children.entries[i].setScale(0.9);
						  }
						this.getScalePosition(this.scene.gameBoard.redTokensGroup.children.entries[i].scale);
						this.scene.gameBoard.container_rings.list[i].setPosition(
							this.scene.gameBoard.redTokensGroup.children.entries[i].x,
							this.scene.gameBoard.redTokensGroup.children.entries[i].y + this.addPosition
						);
						this.scene.gameBoard.redTokensGroup.children.entries[i].setInteractive();
						this.scene.gameBoard.container_rings.list[i].setScale(this.newScale);
						this.scene.gameBoard.container_rings.list[i].visible = true;
					}
					// if (this.scene.oGameManager.eGameType === "rush") {
					// 	this.getScalePosition(this.scene.gameBoard.container_rush_red.list[i].scale);
					// 	this.scene.gameBoard.container_rings.list[i].setPosition(
					// 		this.scene.gameBoard.container_rush_red.list[i].x,
					// 		this.scene.gameBoard.container_rush_red.list[i].y + this.addPosition
					// 	);
					// 	this.scene.gameBoard.container_rush_red.list[i].setInteractive();
					// 	this.scene.gameBoard.container_rings.list[i].setScale(this.newScale);
					// 	this.scene.gameBoard.container_rings.list[i].visible = true;
					// }
				});
			}
		}
	}

	setDiceValue(isOverPlayer, nDice, aMovablePawns, bAutoMove, tokenColor) {
		if (this.isRollByUser) {
			this.isRollByUser = false;
			this.diceAnim(isOverPlayer, nDice, aMovablePawns, bAutoMove, tokenColor);
			// this.dicePrefab.dice.anims.play("diceRole", true).once("animationcomplete", () => {
			// 	this.setDiceTexture(isOverPlayer, nDice, aMovablePawns, bAutoMove);
			// });
		} else {
			this.diceAnim(isOverPlayer, nDice, aMovablePawns, bAutoMove, tokenColor);
			// this.dicePrefab.dice.anims.play("diceRole", true).once("animationcomplete", () => {
			// 	this.setDiceTexture(isOverPlayer, nDice, aMovablePawns, bAutoMove);
			// });
		}
	}

	diceAnim(isOverPlayer, nDice, aMovablePawns, bAutoMove, tokenColor) {

		let diceColor
		switch (tokenColor) {
			case 'g': // anims for Yellow
				this.dicePrefab.dice.anims.play("yellowDiceRoll", true);
				diceColor = 'yellow'
				break;
			case 'b': // anims for Blue
				this.dicePrefab.dice.anims.play("blueDiceRoll", true);
				diceColor = 'blue'
				break;
			case 'r': // anims for Red
				this.dicePrefab.dice.anims.play("redDiceRoll", true);
				diceColor = 'red'
				break;
			case 'y': // anims for Green
				this.dicePrefab.dice.anims.play("greenDiceRoll", true);
				diceColor = 'green'
				break;
		}

		this.diceTween = this.scene.tweens.add({
			targets: this.dicePrefab.dice,
			scaleX: 1.04,
			scaleY: 1.04,
			duration: 240,
			yoyo: true,
			onComplete: () => {
				this.setDiceTexture(isOverPlayer, nDice, aMovablePawns, bAutoMove, diceColor);
			}
		});
	}

	playDisappearTween(targetLife) {
		this.scene.tweens.add({
			targets: targetLife,
			duration: 1000,
			yoyo: true,
			repeat: 2,
			scaleX: targetLife + 0.1,
			scaleY: targetLife + 0.1,
			onComplete: () => {
				targetLife.visible = false;
			}
		})
	}

	setTurnMissed(nTurnMissed) {
		switch (nTurnMissed) {
			case 1:
				this.playDisappearTween(this.lifeOne);
				break;
			case 2:
				this.playDisappearTween(this.lifeTwo);
				break;
			case 3:
				this.playDisappearTween(this.lifeThree);
				break;
			case 4:
				this.playDisappearTween(this.lifeFour);
				break;
			case 5:
				this.playDisappearTween(this.lifeFive);
				break;
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
