class NewSocketManager {
  constructor(oScene, iGameId, sUserToken, sRootUrl) {
    this.oScene = oScene;
    this.iGameId = iGameId;
    this.sUserToken = sUserToken;
    this.sRootUrl = sRootUrl;
    //Root Socket conenction
    this.oRootSocketConn = io(this.sRootUrl, {
      transports: ["websocket", "polling"],
      query: {
        authorization: this.sUserToken,
        iGameId: this.iGameId,
      },
    });

    // Root Socket Connection Events - Start
    this.oRootSocketConn.on("connect", () => {
      this.ownSocketId = this.oRootSocketConn.id;
      console.log(
        "Connected to Socket :: ",
        this.oRootSocketConn.id,
        "\nGame ID: ",
        this.iGameId
      );
      console.log("oRootSocketURL :: ", this.sRootUrl);
    });
    this.oRootSocketConn.on("disconnect", () => {
      console.log("Disconnected from Socket");
    });
    this.oRootSocketConn.on("reconnect", () => {
      console.log("Reconnecting to Socket");
    });
    this.oRootSocketConn.on("connect_error", (error) => {
      console.error("Error while connecting to the server:", error.message);
      if (error.response) {
        console.error("Server Response:", error.response);
      }
    });
    // Root Socket Connection Events - End

    // Refresh Purpose
    this.oRootSocketConn.on(this.iGameId, (data) => {
      console.log("EE :: ", data);
      this.decryptMessage(data);
    });

    // Socket Connection
    this.oRootSocketConn.emit(
      "reqJoinBoard",
      { iBoardId: this.iGameId },
      (error, data) => {
        console.log("EE :: ", data);
        if (data.sEventName === undefined) {
          // this.onReceivedData(data);
          this.decryptMessage(data);
        } else {
          this.decryptMessage(data);
        }
      }
    );

    // For Requesting Socket Emits
    this.emit = (sEventName, oData = {}, callback) => {
      this.oRootSocketConn.emit(this.iGameId, { sEventName, oData }, callback);
    };
  }

  encryptMessage(text) {
    return text;
  }

  decryptMessage(hash) {
    var dc;
    try {
      dc = JSON.parse(hash);
    } catch (error) {
      dc = hash;
    }
    this.onReceivedData(dc);
  }

  onReceivedData(data) {
    switch (data.sEventName) {
      case undefined:
        console.log("resJoinBoard :: ", data.oData);
        this.iBoardId = data.iBoardId;
        if (!data.oData.isExit) {
          this.oScene.exit_icon.setVisible(false);
          this.oScene.container_quit.setScale(0);
          this.oScene.container_quit_popup.setVisible(false);
        } else {
          this.oScene.exit_icon.setVisible(true);
        }
        this.playerState = data.oData;
        this.oScene.oGameManager.isRefresh = true;
        this.oScene.container_player_waiting.visible = true;
        this.oScene.oGameManager.setGameData(data.oData);
        for (let i = 0; i < data.oData.aParticipant.length; i++) {
          for (let j = 0; j < data.oData.aPlayer.length; j++) {
            if (
              data.oData.aParticipant[i].sRootSocket === this.oRootSocketConn.id
            ) {
              if (
                data.oData.aParticipant[i].iUserId ===
                data.oData.aPlayer[j].user_id
              ) {
                for (let z = 0; z < this.oScene.arrayOfAvatars.length; z++) {
                  if (
                    data.oData.aPlayer[j].image ===
                    this.oScene.arrayOfAvatars[z]
                  ) {
                    this.oScene.playerOnePrefab.playerAvatarSprite.setTexture(
                      data.oData.aPlayer[i].image
                    );
                    this.oScene.twoPlayerProfile.twoPlayerAvatar.setTexture(
                      data.oData.aPlayer[i].image
                    );
                    break;
                  } else {
                    this.oScene.playerOnePrefab.playerAvatarSprite.setTexture(
                      "player-1-avatar"
                    );
                    this.oScene.twoPlayerProfile.twoPlayerAvatar.setTexture(
                      "player-1-avatar"
                    );
                  }
                }
              }
            }
          }
        }

        for (let i = 0; i < data.oData.aParticipant.length; i++) {
          for (let j = 0; j < data.oData.aPlayer.length; j++) {
            if (
              data.oData.aParticipant[i].sRootSocket !== this.oRootSocketConn.id
            ) {
              if (
                data.oData.aParticipant[i].iUserId ===
                data.oData.aPlayer[j].user_id
              ) {
                for (let z = 0; z < this.oScene.arrayOfAvatars.length; z++) {
                  if (
                    data.oData.aPlayer[j].image ===
                    this.oScene.arrayOfAvatars[z]
                  ) {
                    this.oScene.playerTwoPrefab.playerAvatarSprite.setTexture(
                      this.playerState.aPlayer[i].image
                    );
                    this.oScene.opponent_twoPlayerProfile.twoPlayerAvatar.setTexture(
                      this.playerState.aPlayer[i].image
                    );
                    break;
                  } else {
                    this.oScene.playerTwoPrefab.playerAvatarSprite.setTexture(
                      "player-1-avatar"
                    );
                    this.oScene.opponent_twoPlayerProfile.twoPlayerAvatar.setTexture(
                      "player-1-avatar"
                    );
                  }
                }
              }
            }
          }
        }
        this.oScene.oPlayerManager.ownPlayerSet = false;
        if (data.oData.eState !== "playing") {
          this.oScene.container_player_waiting.visible = true;
        }
        if (data.oData.eState === "finished") {
          this.oScene.container_player_waiting.visible = false;
          this.oScene.gameBoard.visible = false;
          this.oScene.container_button_group.visible = false;
        }
        break;

      case "resUserJoined":
        console.log("resUserJoined :: ", data.oData);
        if (this.oScene.container_quit_popup.visible === true) {
          this.oScene.oTweenManager.closePopUpAnimation();
        }
        if (data.oData.eState !== "finished") {
          this.oScene.container_button_group.visible = true;
        }
        if (
          this.playerState.aParticipant.length === 1 &&
          this.oScene.oGameManager.eGameType !== "classic"
        ) {
          if (data.oData.sRootSocket !== this.oRootSocketConn.id) {
            this.playerState.aParticipant.push(data.oData);
          }
        }
        this.oScene.background.visible = true;
        for (let i = 0; i < this.playerState.aPlayer.length; i++) {
          if (
            data.oData.sRootSocket === this.oRootSocketConn.id &&
            data.oData.iUserId === this.playerState.aPlayer[i].user_id
          ) {
            for (let z = 0; z < this.oScene.arrayOfAvatars.length; z++) {
              if (
                this.playerState.aPlayer[i].image ===
                this.oScene.arrayOfAvatars[z]
              ) {
                this.oScene.playerOnePrefab.playerAvatarSprite.setTexture(
                  this.playerState.aPlayer[i].image
                );
                this.oScene.twoPlayerProfile.twoPlayerAvatar.setTexture(
                  this.playerState.aPlayer[i].image
                );
                break;
              } else {
                this.oScene.playerOnePrefab.playerAvatarSprite.setTexture(
                  "player-1-avatar"
                );
                this.oScene.twoPlayerProfile.twoPlayerAvatar.setTexture(
                  "player-1-avatar"
                );
              }
            }
            this.oScene.sendMatchMakingData(
              data.oData,
              this.playerState.aPlayer[i].sToken
            );
          }
        }

        for (let i = 0; i < this.playerState.aPlayer.length; i++) {
          if (
            data.oData.sRootSocket !== this.oRootSocketConn.id &&
            data.oData.iUserId === this.playerState.aPlayer[i].user_id
          ) {
            this.oScene.oGameManager.sOppPlayerId =
              this.playerState.aPlayer[i].user_id;
            for (let z = 0; z < this.oScene.arrayOfAvatars.length; z++) {
              if (
                this.playerState.aPlayer[i].image ===
                this.oScene.arrayOfAvatars[z]
              ) {
                this.oScene.playerTwoPrefab.playerAvatarSprite.setTexture(
                  this.playerState.aPlayer[i].image
                );
                this.oScene.opponent_twoPlayerProfile.twoPlayerAvatar.setTexture(
                  this.playerState.aPlayer[i].image
                );
                break;
              } else {
                this.oScene.playerTwoPrefab.playerAvatarSprite.setTexture(
                  "player-1-avatar"
                );
                this.oScene.opponent_twoPlayerProfile.twoPlayerAvatar.setTexture(
                  "player-1-avatar"
                );
              }
            }
            this.oScene.sendMatchMakingData(
              data.oData,
              this.playerState.aPlayer[i].sToken
            );
          }
        }
        this.oScene.oPlayerManager.setUsersData(this.playerState);
        if (
          this.oScene.oGameManager.isRefresh === true &&
          this.playerState.aParticipant.length === 2
        ) {
          console.log("Inside isRefresh", this.playerState);
          this.oScene.setPlayerDashBoardInfo(this.playerState.aParticipant);
        }
        break;

      case "resBoardState":
        // console.log("resBoardState :: ", data.oData);
        this.oScene.oGameManager.isRefresh = false;
        this.oScene.container_button_group.visible = true;
        this.oScene.oSoundManager.playSound(
          this.oScene.oSoundManager.gameStartSound,
          false
        );
        this.oScene.oGameManager.setGameData(data.oData);
        this.oScene.oPlayerManager.ownPlayerSet = true;
        this.oScene.oPlayerManager.setUsersData(data.oData);
        this.oScene.container_player_waiting.visible = false;
        break;

      case "resPlayerTurn":
        // console.log("resPlayerTurn :: ", data.oData);
        this.oScene.reqPawnCheck();
        if (this.oScene.oPlayerManager.twoDiceTween != undefined) {
          this.oScene.twoPlayerDice.dice.anims.stop();
          this.oScene.oPlayerManager.twoDiceTween.stop();
        }
        this.oScene.container_player_waiting.visible = false;
        this.oScene.oGameManager.isRefresh = false;
        this.oScene.gameBoard.hideRings();
        if (this.oScene.oGameManager.nMaxPlayer === 2) {
          this.oScene.oPlayerManager.setTwoPlayerTurn(data.oData);
          break;
        } else {
          this.oScene.oPlayerManager.setPlayerTurn(data.oData);
        }
        break;

      case "resTurnMissed":
        // console.log("resTurnMissed :: ", data.oData);
        this.oScene.twoPlayerDice.dice.disableInteractive();
        this.oScene.oPlayerManager.setPlayerTurnMiss(data.oData);
        break;

      case "resPlayerLeft":
        // console.log("resPlayerLeft :: ", data.oData);
        this.oScene.oPlayerManager.setPlayerLeft(data.oData);
        break;

      case "resRollDice":
        // console.log("resRollDice :: ", data.oData, data.oData.isExit);
        if (!data.oData.isExit) {
          this.oScene.exit_icon.setVisible(false);
          this.oScene.container_quit.setScale(0);
          this.oScene.container_quit_popup.setVisible(false);
        } else {
          this.oScene.exit_icon.setVisible(true);
        }
        this.oScene.oPlayerManager.setRollDice(data.oData);
        break;

      case "resMovePawn":
        // console.log("resMovePawn :: ", data.oData, data.oData.isExit);
        this.oScene.oPlayerManager.setMovePawn(data.oData);
        break;
      case "resPawnCheck":
        console.log("resPawnCheck :: ", data.oData);
        this.pawnState = data.oData;
        setTimeout(() => {
          this.oScene.gameBoard.checkMisalignedPawns(data.oData);
        }, 250);
        break;
      case "resSendToHome":
        this.oScene.oPlayerManager.setSendToHome(data.oData);
        break;

      case "resGameTimer":
        break;

      case "resResult":
        // console.log("resResult :: ", data.oData);
        setTimeout(() => {
          this.oScene.showResultPopup(data.oData);
        }, 500);
        break;

      case "resWinner":
        // console.log("resWinner :: ", data.oData);
        if (this.oScene.oGameManager.nMaxPlayer == 2) {
          this.oScene.oPlayerManager.playerPrefabList
            .get(data.oData.iUserId)
            .intervalTimeResetTwoPlayer();
        } else {
          this.oScene.oPlayerManager.playerPrefabList
            .get(data.oData.iUserId)
            .intervalTimeReset();
        }
        break;

      default:
        console.log(
          "%c New Event Detected",
          "background:green;",
          data.sEventName,
          data
        );
        break;
    }
  }
}
