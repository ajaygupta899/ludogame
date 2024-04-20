// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorPreload() {
    this.load.pack("asset-pack", "assets/asset-pack.json");
  }

  /** @returns {void} */
  editorCreate() {
    // progress
    const progress = this.add.text(540, 1291, "", {});
    progress.setOrigin(0.5, 0.5);
    progress.text = "0%";
    progress.setStyle({ fontFamily: "Montserrat-Bold", fontSize: "70px" });

    // logo
    const logo = this.add.image(540, 960, "game-logo");
    logo.scaleX = 0;
    logo.scaleY = 0;

    // progress (components)
    new PreloadText(progress);

    this.events.emit("scene-awake");
  }

  /* START-USER-CODE */

  // Write your code here

  // PROD CHANGE PROFILE (UC)
  init(data) {
  	this.gameId = data.gameId;
  	this.userToken = data.userToken;
  	this.sRootUrl = data.sRootUrl;
  	console.log(data)
  }

  preload() {
    this.editorCreate();

    this.editorPreload();

    // PROD CHANGE PROFILE (C)
    // this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Game"));

    //PROD CHANGE PROFILE (UC)
    if (
      this.gameId != undefined &&
      this.userToken != undefined &&
      this.sRootUrl != undefined
    ) {
      this.load.on(Phaser.Loader.Events.COMPLETE, () =>
        this.scene.start("Game", {
          sRootUrl: this.sRootUrl,
          gameId: this.gameId,
          userToken: this.userToken
        })
      );
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
