function startGame(sUserToken, sGameId, sRoot) {
  game = new Phaser.Game({
    width: 1080,
    height: 1920,
    type: Phaser.AUTO,
    backgroundColor: "#000000",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    parent: "game-division",
    dom: {
      createContainer: true
    }
  });

  game.scene.add("Preload", Preload);
  game.scene.add("Boot", Boot, true);
  game.scene.start("Boot", {
    sUserToken: sUserToken,
    sGameId: sGameId,
    sRoot: sRoot
  });

    console.log = function(){}; // PROD CHANGE PROFILE (UC)
  //   openFullscreen();
}

class Boot extends Phaser.Scene {
  init(data) {
    this.gameId = data.sGameId;
    this.userToken = data.sUserToken;
    this.sRootUrl = data.sRoot;
  }
  preload() {
    this.load.pack("pack", "assets/preload-asset-pack.json");

    // PROD CHANGE PROFILE (C)
    // this.load.on(Phaser.Loader.Events.COMPLETE, () =>
    //   this.scene.start("Preload")
    // );

    // PROD CHANGE PROFILE (UC)
    this.load.on(Phaser.Loader.Events.COMPLETE, () =>
      this.scene.start("Preload", {
        sRootUrl: this.sRootUrl,
        gameId: this.gameId,
        userToken: this.userToken
      })
    );
  }
}

// startGame(); // PROD CHANGE PROFILE (C)

// PROD CHANGE PROFILE (UC)
window.addEventListener("message", function (event) {
  const userToken = JSON.stringify(event.data.sUserToken);
  const gameId = JSON.stringify(event.data.sGameId);
  const sRootUrl = JSON.stringify(event.data.sRootUrl);
  if (userToken != undefined && gameId != undefined && sRootUrl != undefined) {
    startGame(userToken, gameId, sRootUrl);
  }
});
