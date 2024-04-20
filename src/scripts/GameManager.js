class GameManager {
  constructor(oScene) {
    this.oScene = oScene;
    this.nPawnMoveDelay = 250;
    this.nPawnMoveDelayAtHome = 420;
    this.isRefresh = false;
    this.__lockStore = true;
    this.__keyStore = false;
    this.pingValue = null;

    this.oTokensClassic = {
      classic_blue_0: {
        position: 38,
        finalPosition: 38,
      },
      classic_blue_1: {
        position: 38,
        finalPosition: 38,
      },
      classic_blue_2: {
        position: 38,
        finalPosition: 38,
      },
      classic_blue_3: {
        position: 38,
        finalPosition: 38,
      },
      classic_red_0: {
        position: -1,
        finalPosition: -1,
      },
      classic_red_1: {
        position: -1,
        finalPosition: -1,
      },
      classic_red_2: {
        position: -1,
        finalPosition: -1,
      },
      classic_red_3: {
        position: -1,
        finalPosition: -1,
      },
      classic_green_0: {
        position: 25,
        finalPosition: 25,
      },
      classic_green_1: {
        position: 25,
        finalPosition: 25,
      },
      classic_green_2: {
        position: 25,
        finalPosition: 25,
      },
      classic_green_3: {
        position: 25,
        finalPosition: 25,
      },
      classic_yellow_0: {
        position: 12,
        finalPosition: 12,
      },
      classic_yellow_1: {
        position: 12,
        finalPosition: 12,
      },
      classic_yellow_2: {
        position: 12,
        finalPosition: 12,
      },
      classic_yellow_3: {
        position: 12,
        finalPosition: 12,
      },
    };
  }

  setGameData(oData) {
    // console.log("GameManager :: setGameData :: ", oData);
    if (oData.eState === "finished") {
      this.oScene.container_player_waiting.visible = false;
      this.oScene.container_game_finished.visible = true;
      return;
    }

    this.nBoardColor = oData.nBoardColor;

    this.oScene.playerState(oData);

    this.aWinAmount = [...oData.aWinningAmount];

    this.oScene.text_prize_pot.setText('₹' + this.aWinAmount.reduce((a, b) => {
      return a + b;
    }));

    this.oScene.txtRoomCode.setText(`${oData.iRoomId}`)
    this.oScene.text_waiting_screen.setText(`Classic > Entry Amount : ${oData.nBoardFee}`)

    for (let i = 0; i < oData.aParticipant.length; i++) {
      if (oData.aParticipant[i].sRootSocket === this.oScene.oSocketManager.oRootSocketConn.id) {
        this.sOwnPlayerId = oData.aParticipant[i].iUserId;
        this.nColor = 2;
      }
    }

    for(let i = 0; i < oData.aPlayer.length; i++) {
      if(oData.aPlayer[i].user_id !== this.sOwnPlayerId) {
        this.sOppPlayerId = oData.aPlayer[i].iUserId;
      }
    }
    
    this.nMaxPlayer = oData.nMaxPlayer;
    this.iProtoId = oData.iProtoId;
    this.nAmountIn = oData.nAmountIn;
    this.nAmountFee = oData.nAmountFee;
    this.nBoardFee = oData.nBoardFee;
    this.eBoardType = oData.eBoardType;
    this.eGameType = oData.eGameType;
    this.iRoomId = oData.iRoomId;
    this.oScene.roomCodeText.setText("Room Code: " + this.iRoomId);

    if (this.eGameType === "classic") {
      this.oScene.gameBoard.container_classic.setVisible(true);
      this.oScene.gameBoard.container_classic_rings.setVisible(true);

      switch (this.nBoardColor) {
        case 0:
          this.oScene.gameBoard.board.setTexture('board-classic-blue');
          break;
        case 2:
          this.oScene.gameBoard.board.setTexture('board-classic-yellow');
          break;
        case 3:
          this.oScene.gameBoard.board.setTexture('board-classic-green');
          break;
        default:
          this.oScene.gameBoard.board.setTexture('board-classic-yellow');
          break;
      }
    }
    this.oScene.gameBoard.setGameType(this.eGameType);
    this.aPublicPosition = oData.aPublicPosition;
    this.nInitializeTimer = oData.oSetting.nInitializeTimer;
    this.nMaxTurnMissAllowed = oData.oSetting.nMaxTurnMissAllowed;
    this.nMaxWaitingTime = oData.oSetting.nMaxWaitingTime;
    this.nPawnMoveDelay = oData.oSetting.nPawnMoveDelay;
    this.nTurnBuffer = oData.oSetting.nTurnBuffer;
    this.nTurnTime = oData.oSetting.nTurnTime;
    this.oScene.container_rush_game.visible = this.eGameType == "classic" ? false : true;
  }

  reqRollDice() {
		this.oScene.oSocketManager.emit("reqRollDice", this.pingValue ? this.__lockStore === this.__keyStore ? { nDice: this.pingValue, sHashToken: this.sHashToken } : { sHashToken: this.sHashToken } : { sHashToken: this.sHashToken }, (error, response) => {
		});
	}
}
