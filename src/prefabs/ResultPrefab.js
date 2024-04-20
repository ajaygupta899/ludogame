
// You can write more code here

/* START OF COMPILED CODE */

class ResultPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// number_box
		const number_box = scene.add.image(0, 0, "Bar-Selected-player");
		number_box.scaleX = 1.02;
		number_box.scaleY = 0.9;
		this.add(number_box);

		// text_player_name
		const text_player_name = scene.add.text(-266, 0, "", {});
		text_player_name.setOrigin(0, 0.5);
		text_player_name.setStyle({ "color": "#ffffffff", "fontFamily": "veriox-rg-4", "fontSize": "35px", "fontStyle": "bold", "stroke": "#000000", "strokeThickness":3,"shadow.stroke":true,"shadow.fill":true});
		this.add(text_player_name);

		// text_win
		const text_win = scene.add.text(175, 5, "", {});
		text_win.setOrigin(0, 0.5);
		text_win.visible = false;
		text_win.text = "300";
		text_win.setStyle({ "color": "#ffffffff", "fontFamily": "veriox-rg-4", "fontSize": "35px", "fontStyle": "bold", "stroke": "#000000ff" });
		this.add(text_win);

		// crown
		const crown = scene.add.image(-425, 0, "Crown");
		crown.scaleX = 0.13;
		crown.scaleY = 0.13;
		this.add(crown);

		// winning_text
		const winning_text = scene.add.text(194, 0, "", {});
		winning_text.setOrigin(0, 0.5);
		winning_text.setStyle({ "color": "#ffffffff", "fontFamily": "CarterOne-Regular", "fontSize": "35px", "fontStyle": "bold", "stroke": "#000000", "strokeThickness":3});
		this.add(winning_text);

		// resultAvatar
		const resultAvatar = scene.add.image(-314, 0, "player-1-avatar");
		resultAvatar.scaleX = 0.2;
		resultAvatar.scaleY = 0.2;
		this.add(resultAvatar);

		// coin
		const coin = scene.add.image(132, 0, "Coin");
		coin.scaleX = 0.5;
		coin.scaleY = 0.5;
		coin.visible = false;
		this.add(coin);

		// txtRank
		const txtRank = scene.add.text(-426, 12, "", {});
		txtRank.setOrigin(0.5, 0.5);
		txtRank.text = "1";
		txtRank.setStyle({ "color": "#000000", "fontFamily": "veriox-rg-4", "fontSize": "20px" });
		this.add(txtRank);

		this.number_box = number_box;
		this.text_player_name = text_player_name;
		this.text_win = text_win;
		this.crown = crown;
		this.winning_text = winning_text;
		this.resultAvatar = resultAvatar;
		this.txtRank = txtRank;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.oScene = scene;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	number_box;
	/** @type {Phaser.GameObjects.Text} */
	text_player_name;
	/** @type {Phaser.GameObjects.Text} */
	text_win;
	/** @type {Phaser.GameObjects.Image} */
	crown;
	/** @type {Phaser.GameObjects.Text} */
	winning_text;
	/** @type {Phaser.GameObjects.Image} */
	resultAvatar;
	/** @type {Phaser.GameObjects.Text} */
	txtRank;

	/* START-USER-CODE */

	// Write your code here.
	setResultData(oData, playerIndex, playerData) {
		this.text_player_name.text = oData.sUserName.length > 10 ? oData.sUserName.slice(0, 10) + "..." : oData.sUserName; // player name;
		for(let i = 0; i < playerData.length; i++) {
			if(oData.iUserId === playerData[i].user_id) {
				for (let z = 0; z < this.oScene.arrayOfAvatars.length; z++) {
					if(playerData[i].image === this.oScene.arrayOfAvatars[z]) {
						this.resultAvatar.setTexture(playerData[i].image);
						break;
					}
					else {
						this.resultAvatar.setTexture('player-1-avatar');
					}
				}
			}
		}

		// this.text_score.setText('100');
		// this.text_win.setText(oData.nWinningAmount);
		switch (playerIndex) {
			case 0:
				if (oData.sRootSocket === this.oScene.oSocketManager.ownSocketId) {
					this.number_box.setTexture('Bar-Selected-player');
				}
				else {
					this.number_box.setTexture('Unselected-player-bar');
				}
				this.txtRank.setText('1');
				this.winning_text.setText("First");
				break;
			case 1:
				if (oData.sRootSocket === this.oScene.oSocketManager.ownSocketId) {
					this.number_box.setTexture('Bar-Selected-player');
				}
				else {
					this.number_box.setTexture('Unselected-player-bar');
				}
				switch (oData.eState) {
					case 'left':
						this.winning_text.setText("Left");
						break;
					case 'Second':
						this.winning_text.setText("Second");
						break;
					case 'ame':
						this.winning_text.setText("AutoExit");
						break;
					default:
						this.winning_text.setText("Second");
						break;
				}
				this.txtRank.setText('2');

				if(oData.eState !== 'winner'){
					this.txtRank.setVisible(false);
					this.crown.setVisible(false);
				}
				if(oData.eState === 'playing'){
					this.txtRank.setVisible(true);
					this.crown.setVisible(true);
				}
				break;
			case 2:
				this.number_box.setTexture('Unselected-player-bar');
				this.crown.visible = false;
				this.winning_text.setText("Third");
				break;
			case 3:
				this.number_box.setTexture('Unselected-player-bar');
				this.crown.visible = false;
				this.winning_text.setText("Forth");
				break;
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
