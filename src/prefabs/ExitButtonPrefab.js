
// You can write more code here

/* START OF COMPILED CODE */

class ExitButtonPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// exit_icon_backside
		const exit_icon_backside = scene.add.image(0, 0, "timer_mask_bg");
		exit_icon_backside.scaleX = 1.05;
		exit_icon_backside.scaleY = 1.05;
		this.add(exit_icon_backside);

		// exit_icon_button
		const exit_icon_button = scene.add.image(0, 0, "exit_icon_disabled");
		this.add(exit_icon_button);

		this.exit_icon_backside = exit_icon_backside;
		this.exit_icon_button = exit_icon_button;

		/* START-USER-CTR-CODE */
		// Write your code here.

		this.oScene = scene;

		this.shape = this.scene.add.graphics();
		this.shape.visible = false;

		const mask = this.shape.createGeometryMask();
		this.exit_icon_backside.setMask(mask);
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	exit_icon_backside;
	/** @type {Phaser.GameObjects.Image} */
	exit_icon_button;

	/* START-USER-CODE */

	// Write your code here.
	intervalTimeReset() {
		this.exit_icon_button.setInteractive();
		this.exit_icon_button.setTexture('exit_icon');
		this.shape.clear();
		this.exit_icon_backside.visible = false
		clearInterval(this.timer);
	}

	startTimerInitReverse(x, y, nTotalTurnTime) {

		this.exit_icon_button.setInteractive().on('pointerdown',()=>{
			this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.buttonToggleSound, false);
			this.oScene.text_quit_message.setText("Are you sure?");
			this.oScene.container_quit_popup.setVisible(true);
            this.oScene.oTweenManager.popUpAnimation();
		})

		this.exit_icon_button.disableInteractive();

		this.exit_icon_backside.visible = true;

		this.shape.x = this.exit_icon_backside.x;
		this.shape.y = this.exit_icon_backside.y;

		let ttleave = 26;
		let totalTime = ttleave;
		console.log("HH", totalTime);

		let startAngle = -90; // Start from the top
		let endAngle = 270; // End at the bottom

		const angleIncrement = (360 / totalTime) * 2;

		let currentAngle = startAngle;
		this.timer = setInterval(() => {
			this.shape.clear();
			this.shape.fillStyle(0xffffff);
			// Draw a filled arc
			this.shape.beginPath();
			this.shape.moveTo(x, y);
			this.shape.arc(x, y, 140, Phaser.Math.DegToRad(currentAngle), Phaser.Math.DegToRad(endAngle), false); // Set the last parameter to false to draw counter-clockwise
			this.shape.closePath();
			this.shape.fill();

			if (currentAngle >= 270) { // Check if we reached the top
				this.intervalTimeReset();
			} else {
				currentAngle += angleIncrement / 10;
			}
		}, 100);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
