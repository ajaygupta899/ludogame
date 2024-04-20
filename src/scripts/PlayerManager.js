class PlayerManager {
  constructor(oScene) {
    this.oScene = oScene;
    this.playersList = [];

    this.oListOfPlayer = [];
    this.updatedSeatList = new Map();
    this.oPlayerList = new Map();

    this.playerPrefabList = new Map();
    this.allPlayerList = [];

    this.isRollByUser = false
    this.currentColor;
  }

  setNewUserJoined(oData) {
    if (oData.iUserId != this.oScene.oGameManager.ownPlayerId) {
      let seatNo = this.updateSeatNo(oData.nSeat)
      this.addSeatNo(oData.iUserId, seatNo);
      this.addPlayerToList(oData.iUserId, this.oListOfPlayer[seatNo]);
    }
  }

  updateSeatNo(seatNo) {
    return (((seatNo - this.ownSeatNo) + this.oScene.oGameManager.nMaxPlayer) % this.oScene.oGameManager.nMaxPlayer);
  }

  addSeatNo(iUserId, nSeatNo) {
    this.updatedSeatList.set(iUserId, nSeatNo);
  }

  addPlayerToList(iUserId, player) {
    this.oPlayerList.set(iUserId, player);
  }

  getPlayerList(iUserId) {
    return this.oPlayerList.get(iUserId);
  }

  setUsersData(oData) {
    for (let i = 0; i < oData.aParticipant.length; i++) {
      if (oData.aParticipant[i].iUserId == this.oScene.oGameManager.sOwnPlayerId) {
        this.ownSeatNo = oData.aParticipant[i].nSeat;
        this.oScene.own_coin_text.setText(oData.aParticipant[i].nChips);
        this.addSeatNo(oData.aParticipant[i].iUserId, 0);
        this.addPlayerToList(oData.aParticipant[i].iUserId, this.oListOfPlayer[0]);
        this.setOurPlayer(oData.aParticipant[i]);
        for (let j = 0; j < oData.aPlayer.length; j++) {
          if(oData.aParticipant[i].iUserId == oData.aPlayer[j].user_id) {
            this.oScene.two_player_own_name.setText("Guest"+oData.aPlayer[j].sToken);
            for (let z = 0; z < this.oScene.arrayOfAvatars.length; z++) {
              if(oData.aPlayer[i].image === this.oScene.arrayOfAvatars[z]) {
                let one = this.oScene.playerOnePrefab.playerAvatarSprite.setTexture(oData.aPlayer[j].image);
                let two = this.oScene.twoPlayerProfile.twoPlayerAvatar.setTexture(oData.aPlayer[j].image);
                break;
              }
              else {
                this.oScene.playerOnePrefab.playerAvatarSprite.setTexture('player-1-avatar');
                this.oScene.twoPlayerProfile.twoPlayerAvatar.setTexture('player-1-avatar');
              }
            }
          }
        }
      }
    }

    for (let i = 0; i < oData.aParticipant.length; i++) {
      if (oData.aParticipant[i].iUserId != this.oScene.oGameManager.sOwnPlayerId) {
        let seatNo = this.updateSeatNo(oData.aParticipant[i].nSeat);
        this.oScene.opp_coin_text.setText(oData.aParticipant[i].nChips);
        this.addSeatNo(oData.aParticipant[i].iUserId, seatNo);
        this.addPlayerToList(oData.aParticipant[i].iUserId, this.oListOfPlayer[seatNo]);
        this.setOppPlayer(oData.aParticipant[i], seatNo);
        for (let j = 0; j < oData.aPlayer.length; j++) {
          if(oData.aParticipant[i].iUserId == oData.aPlayer[j].user_id) {
            this.oScene.oGameManager.sOppPlayerId = oData.aPlayer[j].user_id;
            this.oScene.two_player_opponent_name.setText("Guest"+oData.aPlayer[j].sToken);
            for (let z = 0; z < this.oScene.arrayOfAvatars.length; z++) {
              if(oData.aPlayer[i].image === this.oScene.arrayOfAvatars[z]) {
                let one = this.oScene.playerTwoPrefab.playerAvatarSprite.setTexture(oData.aPlayer[j].image);
                let two = this.oScene.opponent_twoPlayerProfile.twoPlayerAvatar.setTexture(oData.aPlayer[j].image);
                break;
              }
              else {
                this.oScene.playerTwoPrefab.playerAvatarSprite.setTexture('player-1-avatar');
                this.oScene.opponent_twoPlayerProfile.twoPlayerAvatar.setTexture('player-1-avatar');
              }
            }
          }
        }
      }
    }

    for (let i = 0; i < oData.aParticipant.length; i++) {
      if (oData.aParticipant[i].nTurnMissed > 0) {
        let c = oData.aParticipant[i].nTurnMissed;
        while (c) {
          oData.aParticipant[i].nTurnMissed = c;
          this.setPlayerTurnMiss(oData.aParticipant[i]);
          c--;
        }
      }
    }
  }

  setOurPlayer(playerData) {
    if (this.oScene.oGameManager.nMaxPlayer === 2) {
      this.oScene.container_two_players.setVisible(true);
      this.oScene.container_own_profile.setVisible(true);
      this.oScene.container_sound.setPosition(980, 150);
      this.oScene.leave_icon.setPosition(100, 150);
      this.oScene.exit_icon.setPosition(280, 150);
      this.oScene.gameBoard.redTokensGroup.children.entries.forEach((pawn) => {
        pawn.setVisible(true);
      });
      this.oScene.gameBoard.redRingsGroup.children.entries.forEach((ring) => {
        ring.setVisible(true);
      });

      switch (this.oScene.oGameManager.nBoardColor) {
        case 0:
          this.oScene.own_pawn_without_ring.setTexture('blue-without-ring')
          break;
        case 2:
          this.oScene.own_pawn_without_ring.setTexture('yellow-without-ring')
          break;
        case 3:
          this.oScene.own_pawn_without_ring.setTexture('green-without-ring')
          break;
        default:
          this.oScene.own_pawn_without_ring.setTexture('yellow-without-ring')
          break;
      }

      this.oScene.twoPlayerProfile.setName(playerData.iUserId);
      this.playerPrefabList.set(playerData.iUserId, this.oScene.twoPlayerProfile);
      if (this.playersList.length === 0) {
        this.playersList.push(this.oScene.twoPlayerProfile);
        this.oListOfPlayer.push(this.oScene.twoPlayerProfile);
      }
    }
    else {
      if (playerData.eState === "playing") {
        this.oScene.ownPlayer.setVisible(true);
        this.oScene.ownPlayer.setPlayerUsername(playerData.sUserName);
        this.oScene.ownPlayer.setName(playerData.iUserId);
        if (this.oScene.oGameManager.eGameType === "classic") {
          this.oScene.gameBoard.redTokensGroup.children.entries.forEach((pawn) => {
            pawn.setVisible(true);
          });
          this.oScene.gameBoard.redRingsGroup.children.entries.forEach((ring) => {
            ring.setVisible(true);
          });
        }
        this.playerPrefabList.set(playerData.iUserId, this.oScene.ownPlayer);
        this.playersList.push(this.oScene.ownPlayer);
        this.oListOfPlayer.push(this.oScene.ownPlayer);
      }
    }
  }

  setOppPlayer(playerData, nSeat) {
    switch (this.oScene.oGameManager.nMaxPlayer) {
      case 2:
        this.oScene.gameBoard.setPosition(0, -100);

        if (this.oScene.oGameManager.eGameType === "classic") {
          this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((pawn) => {
            pawn.setVisible(true);
          });
          this.oScene.gameBoard.greenRingsGroup.children.entries.forEach((ring) => {
            ring.setVisible(true);
          });
        }
        
        this.oScene.container_two_players.setVisible(true);
        this.oScene.container_opponent_profile.setVisible(true);
        // this.oScene.two_player_opponent_name.setText("Guest5468");
        this.oScene.opponent_twoPlayerProfile.twoPlayerEarth.x = -167;

        this.oScene.opponent_twoPlayerProfile.setName(playerData.iUserId);
        this.playerPrefabList.set(playerData.iUserId, this.oScene.opponent_twoPlayerProfile);
        this.playersList.push(this.oScene.opponent_twoPlayerProfile);
        this.oListOfPlayer.push(this.oScene.opponent_twoPlayerProfile);
        break;

      case 3:
        if (nSeat === 1) {
          this.oScene.oppPlayerOne.setPosition(220, 290);
          this.oScene.oppPlayerOne.setPlayerUsername(playerData.sUserName);
          this.oScene.oppPlayerOne.setName(playerData.iUserId);
          this.oScene.oppPlayerOne.dicePrefab.dice.setTexture("dice-1");
          this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
          if (this.oScene.oGameManager.eGameType === "classic") {
            this.oScene.gameBoard.yellowTokensGroup.children.entries.forEach((pawn) => {
              pawn.setVisible(true);
            });
            this.oScene.gameBoard.yellowRingsGroup.children.entries.forEach((ring) => {
              ring.setVisible(true);
            });
          }
          this.playerPrefabList.set(playerData.iUserId, this.oScene.oppPlayerOne);
          this.playersList.push(this.oScene.oppPlayerOne);
          this.oListOfPlayer.push(this.oScene.oppPlayerOne);
          this.oScene.oppPlayerOne.setVisible(true);
        }
        if (nSeat === 2) {
          this.oScene.oppPlayerTwo.setPosition(860, 290);
          this.oScene.oppPlayerTwo.setPlayerUsername(playerData.sUserName);
          this.oScene.oppPlayerTwo.setName(playerData.iUserId);
          this.oScene.oppPlayerTwo.playerProfileBackground.flipX = true;
          this.oScene.oppPlayerTwo.dicePrefab.dice.setTexture("dice-1");
          this.oScene.oppPlayerTwo.dicePrefab.getDiceTexture();
          this.oScene.oppPlayerTwo.timer_ring.x = -this.oScene.oppPlayerTwo.timer_ring.x;
          this.oScene.oppPlayerTwo.dicePrefab.x = -this.oScene.oppPlayerTwo.dicePrefab.x;
          this.oScene.oppPlayerTwo.playerAvatar.x = -this.oScene.oppPlayerTwo.playerAvatar.x;
          this.oScene.oppPlayerTwo.earth.x = -this.oScene.oppPlayerTwo.earth.x;
          this.oScene.oppPlayerTwo.profile_Avtar.x = -this.oScene.oppPlayerTwo.profile_Avtar.x;
          this.oScene.oppPlayerTwo.dice_box.x = -this.oScene.oppPlayerTwo.dice_box.x;
          this.oScene.oppPlayerTwo.lifeOne.x = -this.oScene.oppPlayerTwo.lifeOne.x - 10;
          this.oScene.oppPlayerTwo.lifeTwo.x = -this.oScene.oppPlayerTwo.lifeTwo.x - 10;
          this.oScene.oppPlayerTwo.lifeThree.x = -this.oScene.oppPlayerTwo.lifeThree.x - 10;
          this.oScene.oppPlayerTwo.lifeFour.x = -this.oScene.oppPlayerTwo.lifeFour.x - 10;
          this.oScene.oppPlayerTwo.lifeFive.x = -this.oScene.oppPlayerTwo.lifeFive.x - 10;
          this.oScene.oppPlayerTwo.blackDotOne.x = -this.oScene.oppPlayerTwo.blackDotOne.x - 10;
          this.oScene.oppPlayerTwo.blackDotTwo.x = -this.oScene.oppPlayerTwo.blackDotTwo.x - 10;
          this.oScene.oppPlayerTwo.blackDotThree.x = -this.oScene.oppPlayerTwo.blackDotThree.x - 10;
          this.oScene.oppPlayerTwo.blackDotFour.x = -this.oScene.oppPlayerTwo.blackDotFour.x - 10;
          this.oScene.oppPlayerTwo.blackDotFive.x = -this.oScene.oppPlayerTwo.blackDotFive.x - 10;
          this.oScene.oppPlayerTwo.playerNameText.x = -this.oScene.oppPlayerTwo.playerNameText.x;
          if (this.oScene.oGameManager.eGameType === "classic") {
            this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((pawn) => {
              pawn.setVisible(true);
            });
            this.oScene.gameBoard.greenRingsGroup.children.entries.forEach((ring) => {
              ring.setVisible(true);
            });
          }
          this.playerPrefabList.set(playerData.iUserId, this.oScene.oppPlayerTwo);
          this.playersList.push(this.oScene.oppPlayerTwo);
          this.oListOfPlayer.push(this.oScene.oppPlayerTwo);
          this.oScene.oppPlayerTwo.setVisible(true);
        }
        break;

      case 4:
        if (nSeat === 1) {
          this.oScene.oppPlayerOne.setPosition(220, 290);
          this.oScene.oppPlayerOne.setPlayerUsername(playerData.sUserName);
          this.oScene.oppPlayerOne.setName(playerData.iUserId);
          this.oScene.oppPlayerOne.dicePrefab.dice.setTexture("blue1");
          this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
          if (this.oScene.oGameManager.eGameType === "classic") {
            this.oScene.gameBoard.yellowTokensGroup.children.entries.forEach((pawn) => {
              pawn.setVisible(true);
            });
            this.oScene.gameBoard.yellowRingsGroup.children.entries.forEach((ring) => {
              ring.setVisible(true);
            });
          }
          this.playerPrefabList.set(playerData.iUserId, this.oScene.oppPlayerOne);
          this.playersList.push(this.oScene.oppPlayerOne);
          this.oListOfPlayer.push(this.oScene.oppPlayerOne);
          this.oScene.oppPlayerOne.setVisible(true);
        }
        if (nSeat === 2) {
          this.oScene.oppPlayerTwo.setPosition(860, 290);
          this.oScene.oppPlayerTwo.setPlayerUsername(playerData.sUserName);
          this.oScene.oppPlayerTwo.setName(playerData.iUserId);
          this.oScene.oppPlayerTwo.playerProfileBackground.flipX = true;
          this.oScene.oppPlayerTwo.dicePrefab.dice.setTexture("red1");
          this.oScene.oppPlayerTwo.dicePrefab.getDiceTexture();
          this.oScene.oppPlayerTwo.timer_ring.x = -this.oScene.oppPlayerTwo.timer_ring.x;
          this.oScene.oppPlayerTwo.dicePrefab.x = -this.oScene.oppPlayerTwo.dicePrefab.x;
          this.oScene.oppPlayerTwo.playerAvatar.x = -this.oScene.oppPlayerTwo.playerAvatar.x;
          this.oScene.oppPlayerTwo.earth.x = -this.oScene.oppPlayerTwo.earth.x;
          this.oScene.oppPlayerTwo.profile_Avtar.x = -this.oScene.oppPlayerTwo.profile_Avtar.x;
          this.oScene.oppPlayerTwo.dice_box.x = -this.oScene.oppPlayerTwo.dice_box.x;
          this.oScene.oppPlayerTwo.lifeOne.x = -this.oScene.oppPlayerTwo.lifeOne.x - 10;
          this.oScene.oppPlayerTwo.lifeTwo.x = -this.oScene.oppPlayerTwo.lifeTwo.x - 10;
          this.oScene.oppPlayerTwo.lifeThree.x = -this.oScene.oppPlayerTwo.lifeThree.x - 10;
          this.oScene.oppPlayerTwo.lifeFour.x = -this.oScene.oppPlayerTwo.lifeFour.x - 10;
          this.oScene.oppPlayerTwo.lifeFive.x = -this.oScene.oppPlayerTwo.lifeFive.x - 10;
          this.oScene.oppPlayerTwo.blackDotOne.x = -this.oScene.oppPlayerTwo.blackDotOne.x - 10;
          this.oScene.oppPlayerTwo.blackDotTwo.x = -this.oScene.oppPlayerTwo.blackDotTwo.x - 10;
          this.oScene.oppPlayerTwo.blackDotThree.x = -this.oScene.oppPlayerTwo.blackDotThree.x - 10;
          this.oScene.oppPlayerTwo.blackDotFour.x = -this.oScene.oppPlayerTwo.blackDotFour.x - 10;
          this.oScene.oppPlayerTwo.blackDotFive.x = -this.oScene.oppPlayerTwo.blackDotFive.x - 10;
          this.oScene.oppPlayerTwo.playerNameText.x = -this.oScene.oppPlayerTwo.playerNameText.x;
          if (this.oScene.oGameManager.eGameType === "classic") {
            this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((pawn) => {
              pawn.setVisible(true);
            });
            this.oScene.gameBoard.greenRingsGroup.children.entries.forEach((ring) => {
              ring.setVisible(true);
            });
          }

          this.playerPrefabList.set(playerData.iUserId, this.oScene.oppPlayerTwo);
          this.playersList.push(this.oScene.oppPlayerTwo);
          this.oListOfPlayer.push(this.oScene.oppPlayerTwo);
          this.oScene.oppPlayerTwo.setVisible(true);
        }
        if (nSeat === 3) {
          this.oScene.oppPlayerThree.setPosition(860, 1630);
          this.oScene.oppPlayerThree.setPlayerUsername(playerData.sUserName);
          this.oScene.oppPlayerThree.setName(playerData.iUserId);
          this.oScene.oppPlayerThree.playerProfileBackground.flipX = true;
          this.oScene.oppPlayerThree.dicePrefab.dice.setTexture("green1");
          this.oScene.oppPlayerThree.dicePrefab.getDiceTexture();
          this.oScene.oppPlayerThree.timer_ring.x = -this.oScene.oppPlayerThree.timer_ring.x;
          this.oScene.oppPlayerThree.dicePrefab.x = -this.oScene.oppPlayerThree.dicePrefab.x;
          this.oScene.oppPlayerThree.playerAvatar.x = -this.oScene.oppPlayerThree.playerAvatar.x;
          this.oScene.oppPlayerThree.earth.x = -this.oScene.oppPlayerThree.earth.x;
          this.oScene.oppPlayerThree.profile_Avtar.x = -this.oScene.oppPlayerThree.profile_Avtar.x;
          this.oScene.oppPlayerThree.dice_box.x = -this.oScene.oppPlayerThree.dice_box.x;
          this.oScene.oppPlayerThree.lifeOne.x = -this.oScene.oppPlayerThree.lifeOne.x - 10;
          this.oScene.oppPlayerThree.lifeTwo.x = -this.oScene.oppPlayerThree.lifeTwo.x - 10;
          this.oScene.oppPlayerThree.lifeThree.x = -this.oScene.oppPlayerThree.lifeThree.x - 10;
          this.oScene.oppPlayerThree.lifeFour.x = -this.oScene.oppPlayerThree.lifeFour.x - 10;
          this.oScene.oppPlayerThree.lifeFive.x = -this.oScene.oppPlayerThree.lifeFive.x - 10;
          this.oScene.oppPlayerThree.blackDotOne.x = -this.oScene.oppPlayerThree.blackDotOne.x - 10;
          this.oScene.oppPlayerThree.blackDotTwo.x = -this.oScene.oppPlayerThree.blackDotTwo.x - 10;
          this.oScene.oppPlayerThree.blackDotThree.x = -this.oScene.oppPlayerThree.blackDotThree.x - 10;
          this.oScene.oppPlayerThree.blackDotFour.x = -this.oScene.oppPlayerThree.blackDotFour.x - 10;
          this.oScene.oppPlayerThree.blackDotFive.x = -this.oScene.oppPlayerThree.blackDotFive.x - 10;
          this.oScene.oppPlayerThree.playerNameText.x = -this.oScene.oppPlayerThree.playerNameText.x;
          if (this.oScene.oGameManager.eGameType === "classic") {
            this.oScene.gameBoard.blueTokensGroup.children.entries.forEach((pawn) => {
              pawn.setVisible(true);
            });
            this.oScene.gameBoard.blueRingsGroup.children.entries.forEach((ring) => {
              ring.setVisible(true);
            });
          }

          this.playerPrefabList.set(playerData.iUserId, this.oScene.oppPlayerThree);
          this.playersList.push(this.oScene.oppPlayerThree);
          this.oListOfPlayer.push(this.oScene.oppPlayerThree);
          this.oScene.oppPlayerThree.setVisible(true);
        }
        break;
    }
    this.setPlayerColor(this.oScene.oGameManager.nColor);
  }

  setPlayerColor(nColor) {
    switch (nColor) {
      case 0:
        //Blue Color
        this.oScene.gameBoard.boardContainer.setAngle(90);
        this.setBoardTextures(nColor);
        break;

      case 1:
        //Red Color
        this.oScene.gameBoard.boardContainer.setAngle(0);
        this.setBoardTextures(nColor);
        break;

      case 2:
        //Yellow Color // Change for Naresh Ludo
        this.oScene.gameBoard.boardContainer.setAngle(-180);
        this.setBoardTextures(nColor);
        break;

      case 3:
        //Green Color
        this.oScene.gameBoard.boardContainer.setAngle(-180);
        this.setBoardTextures(nColor);
        break;
    }
    this.oScene.gameBoard.boardContainer.setVisible(true);
  }

  setBoardTextures(nColor) {
    if (this.oScene.oGameManager.eGameType === "classic") {
      switch (nColor) {
        case 0:
          switch (this.oScene.oGameManager.nMaxPlayer) {
            case 2:
              this.oScene.gameBoard.redTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('blue');
              });

              this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('green');
              });

              this.oScene.ownPlayer.dicePrefab.dice.setTexture('dice-1');
              this.oScene.ownPlayer.dicePrefab.getDiceTexture();
              this.oScene.ownPlayer.tokenColor = 'b';
              this.oScene.ownPlayer.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerOne.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerOne.tokenColor = 'y';
              this.oScene.oppPlayerOne.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });
              break;

            case 3:
              this.oScene.gameBoard.redTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('blue');
              });

              this.oScene.gameBoard.yellowTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('red');
              });

              this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('yellow');
              });

              this.oScene.ownPlayer.dicePrefab.dice.setTexture('dice-1');
              this.oScene.ownPlayer.dicePrefab.getDiceTexture();
              this.oScene.ownPlayer.tokenColor = 'b';
              this.oScene.ownPlayer.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerOne.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerOne.tokenColor = 'r';
              this.oScene.oppPlayerOne.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerTwo.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerTwo.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerTwo.tokenColor = 'y';
              this.oScene.oppPlayerTwo.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });
              break;

            case 4:
              this.oScene.gameBoard.redTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('blue');
              });

              this.oScene.gameBoard.yellowTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('red');
              });

              this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('green');
              });

              this.oScene.gameBoard.blueTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('yellow');
              });

              this.oScene.ownPlayer.dicePrefab.dice.setTexture('dice-1');
              this.oScene.ownPlayer.dicePrefab.getDiceTexture();
              this.oScene.ownPlayer.tokenColor = 'b';
              this.oScene.ownPlayer.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerOne.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerOne.tokenColor = 'r';
              this.oScene.oppPlayerOne.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerTwo.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerTwo.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerTwo.tokenColor = 'y';
              this.oScene.oppPlayerTwo.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerThree.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerThree.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerThree.tokenColor = 'g';
              this.oScene.oppPlayerThree.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });
              break;
          }
          break;

        case 1:
          switch (this.oScene.oGameManager.nMaxPlayer) {
            case 2:
              this.oScene.gameBoard.redTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('red');
              });

              this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('green');
              });

              this.oScene.ownPlayer.dicePrefab.dice.setTexture('dice-1');
              this.oScene.ownPlayer.dicePrefab.getDiceTexture();
              this.oScene.ownPlayer.tokenColor = 'r';
              this.oScene.ownPlayer.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerOne.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerOne.tokenColor = 'g';
              this.oScene.oppPlayerOne.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });
              break;

            case 3:
              this.oScene.gameBoard.redTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('red');
              });

              this.oScene.gameBoard.yellowTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('yellow');
              });

              this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('green');
              });

              this.oScene.ownPlayer.dicePrefab.dice.setTexture('dice-1');
              this.oScene.ownPlayer.dicePrefab.getDiceTexture();
              this.oScene.ownPlayer.tokenColor = 'r';
              this.oScene.ownPlayer.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerOne.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerOne.tokenColor = 'y';
              this.oScene.oppPlayerOne.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerTwo.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerTwo.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerTwo.tokenColor = 'g';
              this.oScene.oppPlayerTwo.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });
              break;

            case 4:
              this.oScene.gameBoard.redTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('red');
              });

              this.oScene.gameBoard.yellowTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('yellow');
              });

              this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('green');
              });

              this.oScene.gameBoard.blueTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('blue');
              });

              this.oScene.ownPlayer.dicePrefab.dice.setTexture('dice-1');
              this.oScene.ownPlayer.dicePrefab.getDiceTexture();
              this.oScene.ownPlayer.tokenColor = 'r';
              this.oScene.ownPlayer.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerOne.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerOne.tokenColor = 'y';
              this.oScene.oppPlayerOne.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerTwo.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerTwo.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerTwo.tokenColor = 'g';
              this.oScene.oppPlayerTwo.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerThree.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerThree.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerThree.tokenColor = 'b';
              this.oScene.oppPlayerThree.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });
              break;
          }
          break;

        case 2:
          switch (this.oScene.oGameManager.nMaxPlayer) {
            case 2:
              this.oScene.gameBoard.redTokensGroup.children.entries.forEach((tokens) => {
                switch (this.oScene.oGameManager.nBoardColor) {
                  case 0:
                    tokens.setTexture('blue');
                    break;
                  case 2:
                    tokens.setTexture('yellow');
                    break;
                  case 3:
                    tokens.setTexture('green');
                    break;
                  default:
                    tokens.setTexture('yellow');
                    break;
                }
              });

              this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('red');
              });

              this.oScene.twoPlayerProfile.tokenColor = 'g';
              this.oScene.opponent_twoPlayerProfile.tokenColor = 'r';
              break;

            case 3:
              this.oScene.gameBoard.redTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('yellow');
              });

              this.oScene.gameBoard.yellowTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('green');
              });

              this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('blue');
              });

              this.oScene.ownPlayer.dicePrefab.dice.setTexture('dice-1');
              this.oScene.ownPlayer.dicePrefab.getDiceTexture();
              this.oScene.ownPlayer.tokenColor = 'y';
              this.oScene.ownPlayer.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerOne.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerOne.tokenColor = 'g';
              this.oScene.oppPlayerOne.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerTwo.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerTwo.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerTwo.tokenColor = 'b';
              this.oScene.oppPlayerTwo.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });
              break;

            case 4:
              this.oScene.gameBoard.redTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('yellow');
              });

              this.oScene.gameBoard.yellowTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('blue');
              });

              this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('red');
              });

              this.oScene.gameBoard.blueTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('green');
              });

              this.oScene.ownPlayer.dicePrefab.dice.setTexture('yellow1');
              this.oScene.ownPlayer.dicePrefab.getDiceTexture();
              this.oScene.ownPlayer.currentColor = 'yellow';
              this.oScene.ownPlayer.tokenColor = 'g';
              this.oScene.ownPlayer.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerOne.dicePrefab.dice.setTexture('blue1');
              this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerOne.currentColor = 'green';
              this.oScene.oppPlayerOne.tokenColor = 'b';
              this.oScene.oppPlayerOne.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerTwo.dicePrefab.dice.setTexture('red1');
              this.oScene.oppPlayerTwo.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerTwo.currentColor = 'blue';
              this.oScene.oppPlayerTwo.tokenColor = 'r';
              this.oScene.oppPlayerTwo.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerThree.dicePrefab.dice.setTexture('green1');
              this.oScene.oppPlayerThree.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerThree.currentColor = 'red';
              this.oScene.oppPlayerThree.tokenColor = 'y';
              this.oScene.oppPlayerThree.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });
              break;
          }
          break;

        case 3:
          switch (this.oScene.oGameManager.nMaxPlayer) {
            case 2:
              this.oScene.gameBoard.redTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('green');
              });

              this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('red');
              });

              this.oScene.ownPlayer.dicePrefab.dice.setTexture('dice-1');
              this.oScene.ownPlayer.dicePrefab.getDiceTexture();
              this.oScene.ownPlayer.tokenColor = 'g';
              this.oScene.ownPlayer.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerOne.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerOne.tokenColor = 'r';
              this.oScene.oppPlayerOne.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });
              break;

            case 3:
              this.oScene.gameBoard.redTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('green');
              });

              this.oScene.gameBoard.yellowTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('blue');
              });

              this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('red');
              });

              this.oScene.ownPlayer.dicePrefab.dice.setTexture('dice-1');
              this.oScene.ownPlayer.dicePrefab.getDiceTexture();
              this.oScene.ownPlayer.tokenColor = 'g';
              this.oScene.ownPlayer.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerOne.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerOne.tokenColor = 'b';
              this.oScene.oppPlayerOne.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerTwo.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerTwo.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerTwo.tokenColor = 'r';
              this.oScene.oppPlayerTwo.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });
              break;

            case 4:
              this.oScene.gameBoard.redTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('green');
              });

              this.oScene.gameBoard.yellowTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('blue');
              });

              this.oScene.gameBoard.greenTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('red');
              });

              this.oScene.gameBoard.blueTokensGroup.children.entries.forEach((tokens) => {
                tokens.setTexture('yellow');
              });

              this.oScene.ownPlayer.dicePrefab.dice.setTexture('dice-1');
              this.oScene.ownPlayer.dicePrefab.getDiceTexture();
              this.oScene.ownPlayer.tokenColor = 'g';
              this.oScene.ownPlayer.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerOne.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerOne.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerOne.tokenColor = 'b';
              this.oScene.oppPlayerOne.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerTwo.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerTwo.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerTwo.tokenColor = 'r';
              this.oScene.oppPlayerTwo.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });

              this.oScene.oppPlayerThree.dicePrefab.dice.setTexture('dice-1');
              this.oScene.oppPlayerThree.dicePrefab.getDiceTexture();
              this.oScene.oppPlayerThree.tokenColor = 'y';
              this.oScene.oppPlayerThree.playerLifeContainer.list.forEach(life => {
                life.setTexture('green-life');
              });
              break;
          }
          break;
      }
    }
    this.oScene.gameBoard.container_board_star.setVisible(true);
  }

  ownPlayerArrowAnimation() {
    this.oScene.ownTurnArrow.setVisible(true);
    this.ownPlayerArrowTween = this.oScene.tweens.add({
      targets: this.oScene.ownTurnArrow,
      x: { from: 436, to: 460 },
      y: 1626,
      duration: 250,
      repeat: -1,
      yoyo: true
    })
  }

  ownTwoPlayerArrowAnimation() {
    this.oScene.down_arrow_Small.visible = true;
    this.ownTwoPlayerArrowTween = this.oScene.tweens.add({
      targets: this.oScene.down_arrow_Small,
      x: 545,
      y: { from: 1602, to: 1680 },
      duration: 250,
      repeat: -1,
      yoyo: true
    })
  }

  setTwoPlayerTurn({ iUserId, nTotalTurnTime, ttl, bDiceRolled, nDice, dTimeEvenSend, aMovablePawns, sHashToken }) {
    this.oScene.twoPlayerDice.setPosition(540, 1811);
    this.oScene.twoPlayerDice.dice.setPosition(0, 0);

    if(this.oScene.oGameManager.sOwnPlayerId === iUserId) {
      this.oScene.oGameManager.sHashToken = sHashToken;
      switch (this.oScene.oGameManager.nBoardColor) {
        case 0:
          this.oScene.twoPlayerDice.dice.setTexture('blue1');
          break;
        case 2:
          this.oScene.twoPlayerDice.dice.setTexture('yellow1');
          break;
        case 3:
          this.oScene.twoPlayerDice.dice.setTexture('green1');
          break;
        default:
          this.oScene.twoPlayerDice.dice.setTexture('yellow1');
          break;
      }
    }
    else {
      this.oScene.twoPlayerDice.dice.setTexture('red1')
    }

    this.oScene.down_arrow_Small.visible = true;
    this.oScene.oTweenManager.setTokenTween(iUserId);
    if (iUserId === this.oScene.twoPlayerProfile.name) {
      if (this.ownTwoPlayerArrowTween !== undefined) this.ownTwoPlayerArrowTween.stop();
      if(bDiceRolled === false) {
        this.ownTwoPlayerArrowAnimation();
      }
      else if (bDiceRolled === true && nDice !== undefined) {
        this.oScene.twoPlayerDice.dice.disableInteractive();
        this.oScene.diceRectangle.disableInteractive();
        let initDice = this.oScene.twoPlayerDice.dice.texture.key.replace(/\d/g, '');
        let newTexture = initDice + nDice;
        this.oScene.twoPlayerDice.dice.setTexture(newTexture);
        this.oScene.down_arrow_Small.visible = false;
        aMovablePawns.forEach((i) => {
          this.oScene.twoPlayerDice.dice.disableInteractive();
          this.oScene.diceRectangle.disableInteractive();
						if (this.oScene.gameBoard.redTokensGroup.children.entries[i].__TokenHomes.isHome) {
							this.oScene.gameBoard.redTokensGroup.children.entries[i].setScale(1);
							this.oScene.gameBoard.redRingsGroup.children.entries[i].setScale(1);
            }
            else {
              this.oScene.gameBoard.redTokensGroup.children.entries[i].setScale(0.9);
              this.oScene.gameBoard.redRingsGroup.children.entries[i].setScale(0.9);
            }
						this.getScalePosition(this.oScene.gameBoard.redTokensGroup.children.entries[i].scale);
						this.oScene.gameBoard.container_rings.list[i].setPosition(
							this.oScene.gameBoard.redTokensGroup.children.entries[i].x,
							this.oScene.gameBoard.redTokensGroup.children.entries[i].y + this.addPosition
						);
						this.oScene.gameBoard.redTokensGroup.children.entries[i].setInteractive();
						this.oScene.gameBoard.container_rings.list[i].setScale(this.newScale);
						this.oScene.gameBoard.container_rings.list[i].visible = true;
				});
      }
    }
    else {
      if (this.ownTwoPlayerArrowTween !== undefined) {
        this.ownTwoPlayerArrowTween.stop();
      }
      this.oScene.down_arrow_Small.visible = false;
    }

    for (let i = 0; i < this.playerPrefabList.size; i++) {
      if (this.playersList[i].name !== iUserId) {
        this.playersList[i].intervalTimeResetTwoPlayer();
      }
    }

    let player;
    this.oScene.gameBoard.highlighterAnimationStop();

    if(this.oScene.oGameManager.sOwnPlayerId === iUserId) {
      this.oScene.gameBoard.highlighterAnimation(this.oScene.twoPlayerProfile.tokenColor);
      if(bDiceRolled === false) {
        this.oScene.diceRectangle.setInteractive();
        this.oScene.twoPlayerDice.dice.setInteractive();
      }
      player = this.playerPrefabList.get(iUserId);
      // player.startTimerInit(player.x, player.y, (nTotalTurnTime / 1000) + 1.5, (ttl / 1000) + 1.5, player, true , dTimeEvenSend);
      player.startTimerInit(player.x, player.y, (nTotalTurnTime / 1000), (ttl / 1000), player, true , dTimeEvenSend);
    }
    else {
      this.oScene.twoPlayerDice.dice.disableInteractive();
      this.oScene.diceRectangle.disableInteractive();
      this.oScene.gameBoard.highlighterAnimation(this.oScene.opponent_twoPlayerProfile.tokenColor);
      player = this.playerPrefabList.get(iUserId);
      // player.startTimerInit(player.x, player.y, (nTotalTurnTime / 1000) + 1.5, (ttl / 1000) + 1.5, player, false ,dTimeEvenSend);
      player.startTimerInit(player.x, player.y, (nTotalTurnTime / 1000), (ttl / 1000), player, false ,dTimeEvenSend);
    }
  }

  setPlayerTurn({ iUserId, nTotalTurnTime, ttl }) {
    this.oScene.down_arrow_Small.visible = false;
    if (iUserId === this.oScene.ownPlayer.name) {
      if (this.ownPlayerArrowTween !== undefined) this.ownPlayerArrowTween.stop();
        this.ownPlayerArrowAnimation();
        this.oScene.down_arrow_Small.visible = false;
    }
    else {
      if (this.ownPlayerArrowTween !== undefined) {
        this.ownPlayerArrowTween.stop();
        this.oScene.ownTurnArrow.setVisible(false);
      }
    }

    for (let i = 0; i < this.playerPrefabList.size; i++) {
      if (this.playersList[i].name !== iUserId) {
        this.playersList[i].intervalTimeReset();
      }
    }

    let player;
    this.oScene.gameBoard.highlighterAnimationStop();

    switch (iUserId) {
      case this.oScene.ownPlayer.name:
        this.oScene.gameBoard.highlighterAnimation(this.oScene.ownPlayer.tokenColor);
        this.oScene.ownPlayer.dicePrefab.dice.setInteractive();
        player = this.playerPrefabList.get(iUserId);
        player.startTimerInit(player.x, player.y, nTotalTurnTime / 1000, ttl / 1000, player);
        break;
      case this.oScene.oppPlayerOne.name:
        this.oScene.gameBoard.highlighterAnimation(this.oScene.oppPlayerOne.tokenColor);
        player = this.playerPrefabList.get(iUserId)
        player.startTimerInit(player.x, player.y, nTotalTurnTime / 1000, ttl / 1000, player);
        break;
      case this.oScene.oppPlayerTwo.name:
        this.oScene.gameBoard.highlighterAnimation(this.oScene.oppPlayerTwo.tokenColor);
        player = this.playerPrefabList.get(iUserId);
        player.startTimerInit(player.x, player.y, nTotalTurnTime / 1000, ttl / 1000, player);
        break;
      case this.oScene.oppPlayerThree.name:
        this.oScene.gameBoard.highlighterAnimation(this.oScene.oppPlayerThree.tokenColor);
        player = this.playerPrefabList.get(iUserId);
        player.startTimerInit(player.x, player.y, nTotalTurnTime / 1000, ttl / 1000, player);
        break;
    }
  }

  setPlayerTurnMiss({ iUserId, nTurnMissed }) {
    if (iUserId == this.oScene.twoPlayerProfile.name) {
      // this.oScene.oTweenManager.missingTurnPopUp();
    }
    if (this.oScene.oGameManager.nMaxPlayer === 2) {
      switch (iUserId) {
        case this.oScene.twoPlayerProfile.name:
          this.setOwnTurnMissed(nTurnMissed);
          break;
        case this.oScene.opponent_twoPlayerProfile.name:
          this.setOpponentTurnMissed(nTurnMissed);
          break;
      }
    }
    else {
      switch (iUserId) {
        case this.oScene.ownPlayer.name:
          this.oScene.ownPlayer.setTurnMissed(nTurnMissed);
          break;
        case this.oScene.oppPlayerOne.name:
          this.oScene.oppPlayerOne.setTurnMissed(nTurnMissed);
          break;
        case this.oScene.oppPlayerTwo.name:
          this.oScene.oppPlayerTwo.setTurnMissed(nTurnMissed);
          break;
        case this.oScene.oppPlayerThree.name:
          this.oScene.oppPlayerThree.setTurnMissed(nTurnMissed);
          break;
      }
    }
  }

  playDisappearTween(targetLife) {
    this.oScene.tweens.add({
      targets: targetLife,
      duration: 500,
      yoyo: true,
      repeat: 2,
      scaleX: 0.4,
      scaleY: 0.4,
      onComplete: () => {
        targetLife.setTexture('red-life');
      }
    })
  }

  setOwnTurnMissed(nTurnMissed) {
    switch (nTurnMissed) {
      case 1:
        this.playDisappearTween(this.oScene.ownLifeOne);
        break;
      case 2:
        this.playDisappearTween(this.oScene.ownLifeTwo);
        break;
      case 3:
        this.playDisappearTween(this.oScene.ownLifeThree);
        break;
      case 4:
        this.playDisappearTween(this.oScene.ownLifeFour);
        break;
      case 5:
        this.playDisappearTween(this.oScene.ownLifeFive);
        break;
    }
  }
  setOpponentTurnMissed(nTurnMissed) {
    switch (nTurnMissed) {
      case 1:
        this.oScene.opponentLifeOne.setTexture('red-life');
        break;
      case 2:
        this.oScene.opponentLifeTwo.setTexture('red-life');
        break;
      case 3:
        this.oScene.opponentLifeThree.setTexture('red-life');
        break;
      case 4:
        this.oScene.opponentLifeFour.setTexture('red-life');
        break;
      case 5:
        this.oScene.opponentLifeFive.setTexture('red-life');
        break;
    }
  }

  setPlayerScore({ iUserId, nScore, nScoreInc }) {
    
  }

  setPlayerInitalScore(oData) {

  }


  setPlayerLeft({ iUserId }) {
    this.oScene.gameBoard.container_rings.setVisible(false);
    if (this.oScene.oGameManager.nMaxPlayer === 2) {
      this.playerPrefabList.get(iUserId).intervalTimeResetTwoPlayer();

      switch (this.oScene.oGameManager.nBoardColor) {
        case 0:
          this.oScene.gameBoard.yellow_exit.setTexture('blue_exit');
          break;
        case 2:
          this.oScene.gameBoard.yellow_exit.setTexture('yellow_exit');
          break;
        case 3:
          this.oScene.gameBoard.yellow_exit.setTexture('green_exit');
          break;
        default:
          this.oScene.gameBoard.yellow_exit.setTexture('yellow_exit');
          break;
      }
    }
    else {
      this.playerPrefabList.get(iUserId).intervalTimeReset();
    }

    switch (iUserId) {
      case this.oScene.ownPlayer.name:
        this.oScene.ownPlayer.destroy();
        break;
      case this.oScene.oppPlayerOne.name:
        this.oScene.oppPlayerOne.destroy();
        break;
      case this.oScene.oppPlayerTwo.name:
        this.oScene.oppPlayerTwo.destroy();
        break;
      case this.oScene.oppPlayerThree.name:
        this.oScene.oppPlayerThree.destroy();
        break;
    }

    switch (this.playerPrefabList.get(iUserId).tokenColor) {
      case 'b': // blue
        this.oScene.gameBoard.blue_exit.setVisible(true);
        this.oScene.gameBoard.yellowTokensGroup.destroy(true);
        this.oScene.gameBoard.yellowRingsGroup.destroy(true);
        break;
      case 'r': // red
        this.oScene.gameBoard.red_exit.setVisible(true);
        this.oScene.gameBoard.greenTokensGroup.destroy(true);
        this.oScene.gameBoard.greenRingsGroup.destroy(true);
        break;
      case 'y': // green
        this.oScene.gameBoard.green_exit.setVisible(true);
        this.oScene.gameBoard.blueTokensGroup.destroy(true);
        this.oScene.gameBoard.blueRingsGroup.destroy(true);
        break;
      case 'g': // yellow
        this.oScene.gameBoard.yellow_exit.setVisible(true);
        this.oScene.gameBoard.redTokensGroup.destroy(true);
        this.oScene.gameBoard.redRingsGroup.destroy(true);
        break;
    }

  }

  setRollDice({ nDice, iUserTurn, aMovablePawns, bAutoMove, sHashToken }) {
    this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.diceRollSound, false);
    this.oScene.oGameManager.sHashToken = sHashToken;

    if (this.oScene.oGameManager.nMaxPlayer === 2) {
      switch (iUserTurn) {
        case this.oScene.twoPlayerProfile.name:
          this.oScene.twoPlayerDice.dice.setInteractive();
          this.oScene.diceRectangle.setInteractive();
          switch (this.oScene.oGameManager.nBoardColor) {
            case 0:
              this.setTwoPlayerDiceValue(true, nDice, aMovablePawns, bAutoMove, 'blue');
              break;
            case 2:
              this.setTwoPlayerDiceValue(true, nDice, aMovablePawns, bAutoMove, 'yellow');
              break;
            case 3:
              this.setTwoPlayerDiceValue(true, nDice, aMovablePawns, bAutoMove, 'green');
              break;
            default:
              this.setTwoPlayerDiceValue(true, nDice, aMovablePawns, bAutoMove, 'yellow');
              break;
          }
          break;
        case this.oScene.opponent_twoPlayerProfile.name:
          this.oScene.twoPlayerDice.dice.disableInteractive();
          this.oScene.diceRectangle.disableInteractive();
          this.setTwoPlayerDiceValue(false, nDice, aMovablePawns, bAutoMove, 'red')
          break;
      }
    }
    else {
      switch (iUserTurn) {
        case this.oScene.ownPlayer.name:
          this.oScene.ownPlayer.setDiceValue(true, nDice, aMovablePawns, bAutoMove, this.oScene.ownPlayer.tokenColor);
          break;
        case this.oScene.oppPlayerOne.name:
          this.oScene.oppPlayerOne.dicePrefab.dice.disableInteractive();
          this.oScene.oppPlayerOne.setDiceValue(false, nDice, aMovablePawns, bAutoMove, this.oScene.oppPlayerOne.tokenColor);
          break;
        case this.oScene.oppPlayerTwo.name:
          this.oScene.oppPlayerTwo.dicePrefab.dice.disableInteractive();
          this.oScene.oppPlayerTwo.setDiceValue(false, nDice, aMovablePawns, bAutoMove, this.oScene.oppPlayerTwo.tokenColor);
          break;
        case this.oScene.oppPlayerThree.name:
          this.oScene.oppPlayerThree.dicePrefab.dice.disableInteractive();
          this.oScene.oppPlayerThree.setDiceValue(false, nDice, aMovablePawns, bAutoMove, this.oScene.oppPlayerThree.tokenColor);
          break;
      }
    }
  }

  setTwoPlayerDiceValue(isOverPlayer, nDice, aMovablePawns, bAutoMove, currentColor) {
    if (this.isRollByUser) {
      this.isRollByUser = false;
      this.diceAnim(isOverPlayer, nDice, aMovablePawns, bAutoMove, currentColor);
    } else {
      this.diceAnim(isOverPlayer, nDice, aMovablePawns, bAutoMove, currentColor);
    }
  }

  diceAnim(isOverPlayer, nDice, aMovablePawns, bAutoMove, currentColor) {

    this.oScene.twoPlayerDice.dice.disableInteractive();
    this.oScene.diceRectangle.disableInteractive();
    switch (currentColor) {
      case 'yellow':
        this.oScene.twoPlayerDice.dice.anims.play("yellowDiceRoll", true);
        break;
      case 'red':
        this.oScene.twoPlayerDice.dice.anims.play("redDiceRoll", true);
        break;
      case 'green':
        this.oScene.twoPlayerDice.dice.anims.play("greenDiceRoll", true);
        break;
      case 'blue':
        this.oScene.twoPlayerDice.dice.anims.play("blueDiceRoll", true);
        break;
    }

    this.twoDiceTween = this.oScene.tweens.add({
      targets: this.oScene.twoPlayerDice.dice,
      scaleX: 1.1,
      scaleY: 1.1,
      duration: 130,
      y: this.oScene.twoPlayerDice.dice.y - 30,
      yoyo: true,
      onComplete: () => {
        this.oScene.twoPlayerDice.dice.anims.stop();
        this.setDiceTexture(isOverPlayer, nDice, aMovablePawns, bAutoMove, currentColor);
      }
    });
  }

  setDiceTexture(isOverPlayer, nDice, aMovablePawns, bAutoMove, currentColor) {
    this.oScene.prevToken = [];
    this.oScene.prevScale = [];
    this.oScene.twoPlayerDice.dice.setTexture(currentColor + nDice);
    this.oScene.twoPlayerDice.setScale(1);
    this.oScene.twoPlayerDice.dice.setScale(0.8);
    this.oScene.twoPlayerDice.dice.disableInteractive();
    this.oScene.diceRectangle.disableInteractive();
    this.oScene.twoPlayerDice.setPosition(540, 1811);
    this.oScene.twoPlayerDice.dice.setPosition(0, 0);
    this.oScene.diceRectangle.disableInteractive();

    if (isOverPlayer) {
      if (bAutoMove) {
        this.oScene.gameBoard.makeDisableInteractivePawn();
      } else if (aMovablePawns.length) {
        aMovablePawns.forEach((i) => {
          if (this.oScene.oGameManager.eGameType === "classic") {
            if (this.oScene.gameBoard.redTokensGroup.children.entries[i].__TokenHomes.isHome) {
              this.oScene.gameBoard.redTokensGroup.children.entries[i].setScale(1);
              this.oScene.gameBoard.redRingsGroup.children.entries[i].setScale(1);
            }
            else {
              this.oScene.gameBoard.redTokensGroup.children.entries[i].setScale(0.9);
              this.oScene.gameBoard.redRingsGroup.children.entries[i].setScale(0.9);
            }
            this.getScalePosition(this.oScene.gameBoard.redTokensGroup.children.entries[i].scale);
            this.oScene.gameBoard.container_rings.list[i].setPosition(
              this.oScene.gameBoard.redTokensGroup.children.entries[i].x,
              this.oScene.gameBoard.redTokensGroup.children.entries[i].y + this.addPosition
            );
            this.oScene.gameBoard.redTokensGroup.children.entries[i].setInteractive();
            this.oScene.gameBoard.container_rings.list[i].setScale(this.newScale);
            this.oScene.gameBoard.container_rings.list[i].visible = true;
          }
        });
      }
    }
  }

  getScalePosition(currentPawnScale) {
    this.addPosition;
    this.newScale;

    switch (currentPawnScale) {
      case 1:
        this.addPosition = -2;
        this.newScale = 0.7;
        break;

      case 0.9:
        this.addPosition = -2;
        this.newScale = 0.6;
        break;
    }
  }


  setMovePawn({ iUserId, nDestination, nMove, nIndex, isExit }) {
    if (this.oScene.oGameManager.eGameType === "classic") {
      if (this.oScene.oGameManager.nMaxPlayer === 2) {
        switch (iUserId) {
          case this.oScene.twoPlayerProfile.name:
            this.oScene.gameBoard.movePawn(this.oScene.gameBoard.redTokensGroup.children.entries[nIndex], nMove, nDestination, this.oScene.gameBoard.redRingsGroup.children.entries[nIndex]);
            this.oScene.gameBoard.hideRings();
            this.oScene.gameBoard.makeDisableInteractivePawn();
            break;
          case this.oScene.opponent_twoPlayerProfile.name:
            this.oScene.gameBoard.movePawn(this.oScene.gameBoard.greenTokensGroup.children.entries[nIndex], nMove, nDestination, this.oScene.gameBoard.greenRingsGroup.children.entries[nIndex]);
            break;
        }
      }
    }
  }

  setMovePawnRefresh(iUserId, nDestination, nMove, nIndex) {
    if (this.oScene.oGameManager.eGameType === "classic") {
      if (this.oScene.oGameManager.nMaxPlayer === 2) {
        switch (iUserId) {
          case this.oScene.twoPlayerProfile.name:
            this.oScene.gameBoard.redTokensGroup.children.entries[nIndex].__TokenHomes.isHome = false;
            this.oScene.gameBoard.movePawn(this.oScene.gameBoard.redTokensGroup.children.entries[nIndex], nMove, nDestination, this.oScene.gameBoard.redRingsGroup.children.entries[nIndex]);
            this.oScene.gameBoard.hideRings();
            this.oScene.gameBoard.makeDisableInteractivePawn();
            break;
          case this.oScene.opponent_twoPlayerProfile.name:
            this.oScene.gameBoard.greenTokensGroup.children.entries[nIndex].__TokenHomes.isHome = false;
            this.oScene.gameBoard.movePawn(this.oScene.gameBoard.greenTokensGroup.children.entries[nIndex], nMove, nDestination, this.oScene.gameBoard.greenRingsGroup.children.entries[nIndex]);
            break;
        }
      }
    }
    this.oScene.gameBoard.arrangeDepth();
  }

  setSendToHome({ iUserId, nIndex, nScore, nScoreDcr }) {
    if (this.oScene.oGameManager.eGameType === "classic") {
      if (this.oScene.oGameManager.nMaxPlayer === 2) {
        switch (iUserId) {
          case this.oScene.twoPlayerProfile.name:
            this.oScene.gameBoard.sendToHome(
              this.oScene.gameBoard.redTokensGroup.children.entries[nIndex], this.oScene.gameBoard.redRingsGroup.children.entries[nIndex]
            );
            break;
          case this.oScene.opponent_twoPlayerProfile.name:
            this.oScene.gameBoard.sendToHome(
              this.oScene.gameBoard.greenTokensGroup.children.entries[nIndex], this.oScene.gameBoard.greenRingsGroup.children.entries[nIndex]
            );
            break;
        }
      }
    }
  }
}