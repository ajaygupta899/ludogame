class SocketManager {
    constructor(oScene, iBoardId, sAuthToken, sRootUrl, nChips) {
    this.oScene = oScene;   
    this.iBoardId = iBoardId;
    this.sAuthToken = sAuthToken;
    this.sRootUrl = sRootUrl;
    this.nChips = nChips;

    //Root Socket conenction
    this.oRootSocketConn = io(this.sRootUrl, {
      transports: ["websocket", "polling"],
      query: {
        authorization: this.sAuthToken,
      },
    });

    // Root Socket Connection Events - Start
    this.oRootSocketConn.on("connect", () => {
      this.ownSocketId = this.oRootSocketConn.id;
      console.log("Connected to Socket :: ", this.oRootSocketConn.id, "\nBoard ID: ", this.iBoardId);
      console.log("oRootSocketURL :: ", this.sRootUrl);
    });
    this.oRootSocketConn.on("disconnect", () => {
      console.log("Disconnected from Socket");
    });
    this.oRootSocketConn.on("reconnect", () => {
      console.log("Reconnecting to Socket");
    });
    this.oRootSocketConn.on("error", (error) => {
      console.log("Connection Error :: ", error);
    });
    // Root Socket Connection Events - End

    // Refresh Purpose
    this.oRootSocketConn.on(this.iBoardId, (data) => {
      this.onReceivedData(data);
    });

    // Socket Connection
    this.oRootSocketConn.emit(
      "reqJoinBoard",
      { iBoardId: this.iBoardId },
      (error, data) => {
        this.onReceivedData(data);
      }
    );

    // For Requesting Socket Emits
    this.emit = (sEventName, oData = {}, callback) => {
      this.oRootSocketConn.emit(this.iBoardId, { sEventName, oData }, callback);
    };
  }

  onReceivedData(data) {
    switch (data.sEventName) {
      case undefined:
        console.log(`${data.sEventName}` , data);
        this.playerState = data.oData;
        this.oScene.oGameManager.isRefresh = true;
        this.oScene.oGameManager.setGameData(data.oData);
        this.oScene.oPlayerManager.ownPlayerSet = false;
        break;
        
      case "resUserJoined":
        console.log(`${data.sEventName}` , data);
        this.oScene.sendMatchMakingData(data.oData);
        this.oScene.oPlayerManager.setUsersData(this.playerState);
        if(this.oScene.oGameManager.isRefresh === true) {
          this.oScene.setPlayerDashBoardInfo(this.playerState);
        }
      break;
        
      case "resBoardState":
        console.log(`${data.sEventName}` , data);
        this.oScene.oGameManager.isRefresh = false;
        this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.gameStartSound, false);
        this.oScene.oGameManager.setGameData(data.oData);
        this.oScene.oPlayerManager.ownPlayerSet = true;
        this.oScene.oPlayerManager.setUsersData(data.oData);
        break;

      case "resPlayerTurn":
        this.oScene.oGameManager.isRefresh = false;
        if (this.oScene.oGameManager.nMaxPlayer === 2) {
          this.oScene.container_player_waiting.visible = false;
          this.oScene.oPlayerManager.setTwoPlayerTurn(data.oData);
          break;
        }
        this.oScene.oPlayerManager.setPlayerTurn(data.oData);
        break;

      case "resTurnMissed":
        this.oScene.oPlayerManager.setPlayerTurnMiss(data.oData);
        break;

      case "resPlayerLeft":
        this.oScene.oPlayerManager.setPlayerLeft(data.oData);
        break;

      case "resRollDice":
        this.oScene.oPlayerManager.setRollDice(data.oData);
        break;

      case "resMovePawn":
        this.oScene.oPlayerManager.setMovePawn(data.oData);
        break;

      case "resSendToHome":
        this.oScene.oPlayerManager.setSendToHome(data.oData);
        break;

      case "resGameTimer":
        break;

      case "resResult":
        console.log("resResult ", data);
        setTimeout(() => {
          this.oScene.showResultPopup(data.oData);
        }, 3000);
        break;

      case "resWinner":
        if (this.oScene.oGameManager.nMaxPlayer == 2) {
          this.oScene.oPlayerManager.playerPrefabList.get(data.oData.iUserId).intervalTimeResetTwoPlayer();
        }
        else {
          this.oScene.oPlayerManager.playerPrefabList.get(data.oData.iUserId).intervalTimeReset();
        }
        break;

      default:
        console.log("%c New Event Detected", 'background:green;', data.sEventName, data);
        break;
    }
  }
}
