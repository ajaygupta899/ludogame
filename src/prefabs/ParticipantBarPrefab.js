
// You can write more code here

/* START OF COMPILED CODE */

class ParticipantBarPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// normalContainer
		const normalContainer = scene.add.container(0, 0);
		normalContainer.visible = false;
		this.add(normalContainer);

		// result_table_normal
		const result_table_normal = scene.add.image(0, 0, "result-table-normal");
		normalContainer.add(result_table_normal);

		// crownNormal
		const crownNormal = scene.add.image(-360, 0, "crown");
		crownNormal.scaleX = 0.6;
		crownNormal.scaleY = 0.6;
		crownNormal.visible = false;
		normalContainer.add(crownNormal);

		// sRankingNormal
		const sRankingNormal = scene.add.text(-360, 10, "", {});
		sRankingNormal.setOrigin(0.5, 0.5);
		sRankingNormal.visible = false;
		sRankingNormal.setStyle({ "color": "#000", "fontFamily": "LeagueSpartan", "fontSize": "36px", "fontStyle": "bold" });
		normalContainer.add(sRankingNormal);

		// profileNormal
		const profileNormal = scene.add.image(-250, 0, "profile");
		profileNormal.scaleX = 0.5;
		profileNormal.scaleY = 0.5;
		normalContainer.add(profileNormal);

		// sUserNameNormal
		const sUserNameNormal = scene.add.text(-200, 0, "", {});
		sUserNameNormal.setOrigin(0, 0.5);
		sUserNameNormal.setStyle({ "fontFamily": "LeagueSpartan", "fontSize": "40px", "fontStyle": "bold" });
		normalContainer.add(sUserNameNormal);

		// coinsNormal
		const coinsNormal = scene.add.image(150, 0, "coins");
		coinsNormal.scaleX = 0.5;
		coinsNormal.scaleY = 0.5;
		normalContainer.add(coinsNormal);

		// sWinAmountNormal
		const sWinAmountNormal = scene.add.text(200, 0, "", {});
		sWinAmountNormal.setOrigin(0, 0.5);
		sWinAmountNormal.setStyle({ "fontFamily": "LeagueSpartan", "fontSize": "40px", "fontStyle": "bold" });
		normalContainer.add(sWinAmountNormal);

		// winnerContainer
		const winnerContainer = scene.add.container(0, 0);
		winnerContainer.visible = false;
		this.add(winnerContainer);

		// result_table_winner
		const result_table_winner = scene.add.image(0, 0, "result-table-winner");
		winnerContainer.add(result_table_winner);

		// crownWinner
		const crownWinner = scene.add.image(-360, 0, "crown");
		crownWinner.scaleX = 0.6;
		crownWinner.scaleY = 0.6;
		winnerContainer.add(crownWinner);

		// sRankingWinner
		const sRankingWinner = scene.add.text(-360, 10, "", {});
		sRankingWinner.setOrigin(0.5, 0.5);
		sRankingWinner.setStyle({ "color": "#000", "fontFamily": "LeagueSpartan", "fontSize": "36px", "fontStyle": "bold" });
		winnerContainer.add(sRankingWinner);

		// profileWinner
		const profileWinner = scene.add.image(-250, 0, "profile");
		profileWinner.scaleX = 0.5;
		profileWinner.scaleY = 0.5;
		winnerContainer.add(profileWinner);

		// sUserNameWinner
		const sUserNameWinner = scene.add.text(-200, 0, "", {});
		sUserNameWinner.setOrigin(0, 0.5);
		sUserNameWinner.setStyle({ "fontFamily": "LeagueSpartan", "fontSize": "40px", "fontStyle": "bold" });
		winnerContainer.add(sUserNameWinner);

		// coinsWinner
		const coinsWinner = scene.add.image(150, 0, "coins");
		coinsWinner.scaleX = 0.5;
		coinsWinner.scaleY = 0.5;
		winnerContainer.add(coinsWinner);

		// sWinAmountWinner
		const sWinAmountWinner = scene.add.text(200, 0, "", {});
		sWinAmountWinner.setOrigin(0, 0.5);
		sWinAmountWinner.setStyle({ "fontFamily": "LeagueSpartan", "fontSize": "40px", "fontStyle": "bold" });
		winnerContainer.add(sWinAmountWinner);

		this.crownNormal = crownNormal;
		this.sRankingNormal = sRankingNormal;
		this.sUserNameNormal = sUserNameNormal;
		this.sWinAmountNormal = sWinAmountNormal;
		this.normalContainer = normalContainer;
		this.sRankingWinner = sRankingWinner;
		this.sUserNameWinner = sUserNameWinner;
		this.sWinAmountWinner = sWinAmountWinner;
		this.winnerContainer = winnerContainer;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	crownNormal;
	/** @type {Phaser.GameObjects.Text} */
	sRankingNormal;
	/** @type {Phaser.GameObjects.Text} */
	sUserNameNormal;
	/** @type {Phaser.GameObjects.Text} */
	sWinAmountNormal;
	/** @type {Phaser.GameObjects.Container} */
	normalContainer;
	/** @type {Phaser.GameObjects.Text} */
	sRankingWinner;
	/** @type {Phaser.GameObjects.Text} */
	sUserNameWinner;
	/** @type {Phaser.GameObjects.Text} */
	sWinAmountWinner;
	/** @type {Phaser.GameObjects.Container} */
	winnerContainer;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
