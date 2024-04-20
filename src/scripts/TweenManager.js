class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    setTokenTween(ownPlayerId) {
        // console.log(this.oScene.twoPlayerProfile.name, ownPlayerId);
        this.oScene.tokenBorder.visible = true;
        if (this.oScene.twoPlayerProfile.name == ownPlayerId) {
            var PosX = 89;
            this.setTokenAnimation(PosX);
        } else {
            var PosX = 995;
            this.setTokenAnimation(PosX);
        }
    }
    setTokenAnimation(pos) {
        this.tokenAnimation = this.oScene.tweens.add({
            targets: this.oScene.tokenBorder,
            x: pos,
            duration: 300,
        })
    }
    popUpAnimation() {
        this.oScene.quit_popup_dark_background.setVisible(true);
        this.oScene.tweens.add({
            targets: this.oScene.container_quit,
            scaleX: { from: 0, to: 1 },
            scaleY: { from: 0, to: 1 },
            ease: 'Bounce',
            duration: 200,
        })
    }
    closePopUpAnimation() {
        this.oScene.tweens.add({
            targets: this.oScene.container_quit,
            scaleX: { from: 1, to: 0 },
            scaleY: { from: 1, to: 0 },
            duration: 100,
            ease: 'Power0',
            onComplete: () => {
                this.oScene.quit_popup_dark_background.setVisible(false);
                this.oScene.container_quit_popup.setVisible(false);
            }
        })
    }
    missingTurnPopUp() {
        this.oScene.container_missingTurnPopup.visible = true;
        this.oScene.tweens.add({
            targets: this.oScene.container_missingTurnPopup,
            scaleX: { from: 0, to: 1 },
            scaleY: { from: 0, to: 1 },
            duration: 200,
            onComplete : () => {
                setTimeout(() => {
                    this.oScene.container_missingTurnPopup.visible = false;
                },2000);
            }
        })
    }

}