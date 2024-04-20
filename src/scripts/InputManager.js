class InputManager {
    constructor(oScene) {
        this.oScene = oScene;

    }

    popupShow() {
        this.oScene.lobbyIconBtn.setInteractive().on('pointerdown', () => {
            history.back();
        });
        this.oScene.quit_popup_dark_background_3.setInteractive().on('pointerdown', () => {
        }, this);
        this.oScene.gradient_background_popup.setInteractive().on('pointerdown', () => {
        }, this);
        this.oScene.quit_popup_dark_background.setInteractive().on('pointerdown', () => {
        }, this);
        this.oScene.leave_icon.setInteractive().on("pointerdown", () => {
            // this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.buttonToggleSound, false);
            // this.oScene.oTweenManager.popUpAnimation();
        });

        this.oScene.exit_icon.setInteractive().on('pointerdown', () => {
            this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.buttonToggleSound, false);
            this.oScene.text_quit_message.setText("Your opponent will win if you quit!");
            this.oScene.container_quit_popup.setVisible(true);
            this.oScene.oTweenManager.popUpAnimation();
        })
        this.oScene.home.setInteractive().on("pointerdown", () => {
            this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.buttonToggleSound, false);
            history.back();
            // window.close();
            // this.btnClickSound();
            // this.oScene.container_quit_popup.setVisible(true);
        });
        this.oScene.button_no.setInteractive().on("pointerdown", () => {
            this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.buttonToggleSound, false);
            // this.btnClickSound();
            this.oScene.oTweenManager.closePopUpAnimation()
            // this.oScene.container_quit_popup.setVisible(false);
        });
        this.oScene.button_yes.setInteractive().on("pointerdown", () => {
            this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.buttonToggleSound, false);
            this.oScene.oSocketManager.emit("reqLeave", {}, (error, response) => {
                console.log("HHH :: ", error, response);
            });
            history.back();
            this.oScene.container_quit_popup.setScale(0);
            this.oScene.container_quit_popup.setVisible(false);
        });
        this.oScene.resultScreenSoundBtn.setInteractive().on("pointerdown", () => {
            this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.buttonToggleSound, false);
            if (this.oScene.resultScreenSoundBtn.texture.key === "sound_on") { // sound_off
                this.oScene.oSoundManager.toggleSound(0);
                this.oScene.resultScreenSoundBtn.setTexture('mute_btn');
                this.oScene.button_soundOff.setVisible(true);
                this.oScene.button_Soundon.setVisible(false);
                this.oScene.sound_off.setVisible(true);
                this.oScene.sound_button_on.setVisible(false);
            }
            else if (this.oScene.resultScreenSoundBtn.texture.key === "mute_btn") { // sound_on
                this.oScene.oSoundManager.toggleSound(0.75);
                this.oScene.resultScreenSoundBtn.setTexture('sound_on');
                this.oScene.button_Soundon.setVisible(true);
                this.oScene.button_soundOff.setVisible(false);
                this.oScene.sound_button_on.setVisible(true);
                this.oScene.sound_off.setVisible(false);
            }
        });
        this.oScene.container_sound.setSize(80, 80);
        this.oScene.container_sound.setInteractive().on("pointerdown", () => {
            this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.buttonToggleSound, false);
            if (this.oScene.sound_button_on.visible) {
                this.oScene.oSoundManager.toggleSound(0);
                this.oScene.resultScreenSoundBtn.setTexture('mute_btn');
                this.oScene.button_soundOff.setVisible(true);
                this.oScene.button_Soundon.setVisible(false);
                this.oScene.sound_off.setVisible(true);
                this.oScene.sound_button_on.setVisible(false);
            }
            else {
                this.oScene.oSoundManager.toggleSound(0.75);
                this.oScene.resultScreenSoundBtn.setTexture('sound_on');
                this.oScene.button_Soundon.setVisible(true);
                this.oScene.button_soundOff.setVisible(false);
                this.oScene.sound_button_on.setVisible(true);
                this.oScene.sound_off.setVisible(false);
            }
        });
        this.oScene.container_Sound.setSize(100, 100);
        this.oScene.container_Sound.setInteractive().on("pointerdown", () => {
            this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.buttonToggleSound, false);
            if (this.oScene.button_Soundon.visible) {
                this.oScene.oSoundManager.toggleSound(0);
                this.oScene.resultScreenSoundBtn.setTexture('mute_btn');
                this.oScene.button_soundOff.setVisible(true);
                this.oScene.button_Soundon.setVisible(false);
                this.oScene.sound_off.setVisible(true);
                this.oScene.sound_button_on.setVisible(false);
            }
            else {
                this.oScene.oSoundManager.toggleSound(0.75);
                this.oScene.resultScreenSoundBtn.setTexture('sound_on');
                this.oScene.button_Soundon.setVisible(true);
                this.oScene.button_soundOff.setVisible(false);
                this.oScene.sound_button_on.setVisible(true);
                this.oScene.sound_off.setVisible(false);
            }
        });
        // this.oScene.music_on.setInteractive().on("pointerdown", () => {
        //     this.stopMusic();

        // });
        // this.oScene.music_button_off.setInteractive().on("pointerdown", () => {
        //     this.playMusic();

        // });
        // this.oScene.sound_off.setInteractive().on("pointerdown", () => {
        //     console.log("soundoffclicked")
        //     this.playSound();
        // });

        // this.oScene.sound_button_on.setInteractive().on("pointerdown", () => {
        //     this.stopSound();
        // });

        // this.oScene.playCancleButton.setInteractive().on('pointerdown', () => {
        //     this.btnClickSound();
        //     window.close();
        // }, this);
    }
    btnClickSound() {
        // Sound
        // this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.buttonSound, false);
        this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.buttonToggleSound, false);
    }
    stopMusic() {
        // let backgroundMusic = this.oScene.oSoundManager.backgroundMusic;
        // this.oScene.oSoundManager.stopSound(backgroundMusic, false);
        this.oScene.music_button_off.setVisible(true);
        this.oScene.music_on.setVisible(false);
        this.oScene.oSoundManager.stopAllMusic();
    }
    playMusic() {
        // let backgroundMusic = this.oScene.oSoundManager.backgroundMusic;
        // this.oScene.oSoundManager.playSound(backgroundMusic, true);
        this.oScene.music_on.setVisible(true);
        this.oScene.music_button_off.setVisible(false);
        this.oScene.oSoundManager.playAllMusic();
    }
    playSound() {
        // console.log("playSound");
        this.oScene.sound_button_on.setVisible(false);
        this.oScene.sound_off.setVisible(true)
        this.oScene.oSoundManager.stopAllMusic();
    }
    stopSound() {
        // console.log("StopSound");
        this.oScene.sound_button_on.setVisible(false);
        this.oScene.sound_off.setVisible(true);
        this.oScene.oSoundManager.playAllMusic();
    }

}