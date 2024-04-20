class SoundManager {
    constructor(oScene) {
        this.oScene = oScene;

        this.diceRollSound = this.oScene.sound.add("dice-roll-sound").setVolume(0.75); //
        this.gameStartSound = this.oScene.sound.add("game-start-sound").setVolume(0.75); //
        this.buttonToggleSound = this.oScene.sound.add("ludo-button-toggle-sound").setVolume(0.75); //
        this.pawnDieSound = this.oScene.sound.add("pawn-die-sound").setVolume(0.75); //
        this.pawnMoveSound = this.oScene.sound.add("pawn-move-sound").setVolume(0.75); //
        this.pawnReachHomeSound = this.oScene.sound.add("pawn-reach-home-sound").setVolume(0.75); //
        this.pawnSafeHouseSound = this.oScene.sound.add("pawn-reach-safe-house-sound").setVolume(0.75); //
        this.timerBeepSound = this.oScene.sound.add("timer-beep-sound").setVolume(0.75); //

        this.gameSoundArray = [this.diceRollSound, this.gameStartSound, this.buttonToggleSound, this.pawnDieSound, this.pawnMoveSound, this.pawnReachHomeSound, this.pawnSafeHouseSound, this.timerBeepSound];
    }

    playSound(key, loop) {
        key.play();
        key.loop = loop;

    }
    stopSound(key, loop) {
        // this.toggleSound(0);
        key.stop();
        key.loop = loop
    }

    toggleSound(volume) {
        for(var i = 0; i < this.gameSoundArray.length; i++)
        {
            this.gameSoundArray[i].volume = volume;
        }
    }
}