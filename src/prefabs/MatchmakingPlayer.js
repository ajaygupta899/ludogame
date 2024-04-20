
// You can write more code here

/* START OF COMPILED CODE */

class MatchmakingPlayer extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.visible = false;

		// playerAvatarSprite
		const playerAvatarSprite = scene.add.sprite(0, 0, "player-1-avatar");
		playerAvatarSprite.scaleX = 0.9;
		playerAvatarSprite.scaleY = 0.9;
		this.add(playerAvatarSprite);

		// time_round_box
		const time_round_box = scene.add.image(17, 283, "time-round-box");
		time_round_box.visible = false;
		this.add(time_round_box);

		// rupee_coin
		const rupee_coin = scene.add.image(-83, 283, "rupee-coin");
		rupee_coin.scaleX = 0.8;
		rupee_coin.scaleY = 0.8;
		rupee_coin.visible = false;
		this.add(rupee_coin);

		// playerEntryAmountText
		const playerEntryAmountText = scene.add.text(30, 283, "", {});
		playerEntryAmountText.setOrigin(0.5, 0.5);
		playerEntryAmountText.visible = false;
		playerEntryAmountText.setStyle({ "fontFamily": "Montserrat-Bold", "fontSize": "28px", "fontStyle": "bold" });
		this.add(playerEntryAmountText);

		// profile_name_bar
		const profile_name_bar = scene.add.image(0, 184, "profile-name-bar");
		this.add(profile_name_bar);

		// playerTempNameText
		const playerTempNameText = scene.add.text(0, 185, "", {});
		playerTempNameText.setOrigin(0.5, 0.5);
		playerTempNameText.text = "???";
		playerTempNameText.setStyle({ "fontFamily": "myriadpro", "fontSize": "40px" });
		this.add(playerTempNameText);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(0, 0, 260, 260);
		rectangle_1.isStroked = true;
		rectangle_1.lineWidth = 2;
		this.add(rectangle_1);

		// ownPlayerBorder
		const ownPlayerBorder = scene.add.image(0, 0, "yellow_border");
		ownPlayerBorder.scaleX = 1.1;
		ownPlayerBorder.scaleY = 1.1;
		ownPlayerBorder.visible = false;
		this.add(ownPlayerBorder);

		this.playerAvatarSprite = playerAvatarSprite;
		this.playerEntryAmountText = playerEntryAmountText;
		this.playerTempNameText = playerTempNameText;
		this.ownPlayerBorder = ownPlayerBorder;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.oScene = scene;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	playerAvatarSprite;
	/** @type {Phaser.GameObjects.Text} */
	playerEntryAmountText;
	/** @type {Phaser.GameObjects.Text} */
	playerTempNameText;
	/** @type {Phaser.GameObjects.Image} */
	ownPlayerBorder;

	/* START-USER-CODE */

	// Write your code here.
	startAwake(oSceneObj, nFees) {
		const roundedRectWidth = oSceneObj.playerAvatarSprite.displayWidth;
		const roundedRectHeight = oSceneObj.playerAvatarSprite.displayHeight;
		const roundedRectRadius = 40;

		const mask = this.createRoundedRectMask(
			this.oScene,
			oSceneObj.playerAvatarSprite.parentContainer.x - (roundedRectWidth / 2),
			oSceneObj.playerAvatarSprite.parentContainer.y - (roundedRectHeight / 2),
			roundedRectWidth,
			roundedRectHeight,
			roundedRectRadius
		);
		this.playerAvatarSprite.setMask(mask);

		this.playerEntryAmountText.setText('₹' + nFees);

		this.setVisible(true);
	}

	setUserJoinedInfo(sUserName,id) {
		if(id === this.oScene.oSocketManager.oRootSocketConn.id){
			this.ownPlayerBorder.setVisible(true)
		}
		this.playerTempNameText.setText("Guest"+sUserName);
	}

	createRoundedRectMask = (scene, x, y, width, height, radius) => {
		const mask = scene.make.graphics();
		mask.fillStyle(0xffffff); // Set the mask color (white)
		mask.fillRoundedRect(x, y, width, height, radius);
		return mask.createGeometryMask();
	};


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
