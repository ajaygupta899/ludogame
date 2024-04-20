// You can write more code here
/* START OF COMPILED CODE */

class Game extends Phaser.Scene {

	constructor() {
		super("Game");

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.isRollByUser = true;
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_background
		const container_background = this.add.container(0, 0);

		// background
		const background = this.add.image(540, 960, "game-background");
		background.visible = false;
		container_background.add(background);

		// ownTurnArrow
		const ownTurnArrow = this.add.image(436, 1626, "Left-Arrow-");
		ownTurnArrow.visible = false;
		container_background.add(ownTurnArrow);

		// container_general
		const container_general = this.add.container(0, 0);
		container_general.visible = false;
		container_background.add(container_general);

		// prize_Pot
		const prize_Pot = this.add.image(540, 76, "prize-pot");
		container_general.add(prize_Pot);

		// text_prize_pot_lable
		const text_prize_pot_lable = this.add.text(509, 76, "", {});
		text_prize_pot_lable.setOrigin(0.5, 0.5);
		text_prize_pot_lable.text = "Prize Pot";
		text_prize_pot_lable.setStyle({ "align": "center", "fontFamily": "Montserrat-Bold", "fontSize": "28px" });
		container_general.add(text_prize_pot_lable);

		// trophy_icon
		const trophy_icon = this.add.image(407, 76, "trophy");
		trophy_icon.scaleX = 1.1;
		container_general.add(trophy_icon);

		// text_prize_pot
		const text_prize_pot = this.add.text(634, 76, "", {});
		text_prize_pot.setOrigin(0.5, 0.5);
		text_prize_pot.setStyle({ "align": "center", "fontFamily": "Montserrat-Bold", "fontSize": "30px" });
		container_general.add(text_prize_pot);

		// container_board
		const container_board = this.add.container(540, 960);
		container_background.add(container_board);

		// gameBoard
		const gameBoard = new GameBoard(this, 0, 0);
		gameBoard.scaleX = 1.05;
		gameBoard.scaleY = 1.05;
		gameBoard.visible = true;
		container_board.add(gameBoard);

		// container_two_players
		const container_two_players = this.add.container(0, -15);
		container_two_players.visible = false;
		container_background.add(container_two_players);

		// two_player_bar
		const two_player_bar = this.add.image(540, 1811, "two-player-bar");
		container_two_players.add(two_player_bar);

		// twoPlayerDice
		const twoPlayerDice = new Dice(this, 540, 1811);
		twoPlayerDice.scaleX = 1;
		twoPlayerDice.scaleY = 1;
		container_two_players.add(twoPlayerDice);

		// tokenBorder
		const tokenBorder = this.add.image(995, 1792, "tokenBorder");
		tokenBorder.scaleX = 1.2;
		tokenBorder.scaleY = 1.2;
		tokenBorder.visible = false;
		container_two_players.add(tokenBorder);

		// container_own_profile
		const container_own_profile = this.add.container(0, 0);
		container_two_players.add(container_own_profile);

		// twoPlayerProfile
		const twoPlayerProfile = new TwoPlayerProfile(this, 143, 1628);
		container_own_profile.add(twoPlayerProfile);

		// two_player_own_name
		const two_player_own_name = this.add.text(170, 1791, "", {});
		two_player_own_name.setOrigin(0, 0.5);
		two_player_own_name.text = "Dhruvil";
		two_player_own_name.setStyle({ "fontFamily": "VerioxBold", "fontSize": "35px" });
		container_own_profile.add(two_player_own_name);

		// own_pawn_without_ring
		const own_pawn_without_ring = this.add.image(87, 1790, "yellow-without-ring");
		own_pawn_without_ring.scaleX = 0.9;
		own_pawn_without_ring.scaleY = 0.9;
		container_own_profile.add(own_pawn_without_ring);

		// down_arrow_Small
		const down_arrow_Small = this.add.image(545, 1602, "down_arrow Small");
		down_arrow_Small.scaleY = 0.8;
		down_arrow_Small.visible = false;
		container_own_profile.add(down_arrow_Small);

		// own_coin
		const own_coin = this.add.image(203, 1842, "Coin");
		own_coin.scaleX = 0.5;
		own_coin.scaleY = 0.5;
		container_own_profile.add(own_coin);

		// own_coin_text
		const own_coin_text = this.add.text(247, 1846, "", {});
		own_coin_text.setOrigin(0, 0.5);
		own_coin_text.text = "2300";
		own_coin_text.setStyle({ "fontFamily": "VerioxBold", "fontSize": "30px" });
		container_own_profile.add(own_coin_text);

		// container_own_life_container
		const container_own_life_container = this.add.container(88, 1855);
		container_own_profile.add(container_own_life_container);

		// ownLifeFive
		const ownLifeFive = this.add.image(-40, 0, "green-life");
		ownLifeFive.scaleX = 0.25;
		ownLifeFive.scaleY = 0.25;
		container_own_life_container.add(ownLifeFive);

		// ownLifeFour
		const ownLifeFour = this.add.image(-20, 0, "green-life");
		ownLifeFour.scaleX = 0.25;
		ownLifeFour.scaleY = 0.25;
		container_own_life_container.add(ownLifeFour);

		// ownLifeThree
		const ownLifeThree = this.add.image(0, 0, "green-life");
		ownLifeThree.scaleX = 0.25;
		ownLifeThree.scaleY = 0.25;
		container_own_life_container.add(ownLifeThree);

		// ownLifeTwo
		const ownLifeTwo = this.add.image(20, 0, "green-life");
		ownLifeTwo.scaleX = 0.25;
		ownLifeTwo.scaleY = 0.25;
		container_own_life_container.add(ownLifeTwo);

		// ownLifeOne
		const ownLifeOne = this.add.image(40, 0, "green-life");
		ownLifeOne.scaleX = 0.25;
		ownLifeOne.scaleY = 0.25;
		container_own_life_container.add(ownLifeOne);

		// container_opponent_profile
		const container_opponent_profile = this.add.container(0, 0);
		container_two_players.add(container_opponent_profile);

		// opponent_twoPlayerProfile
		const opponent_twoPlayerProfile = new TwoPlayerProfile(this, 937, 1628);
		container_opponent_profile.add(opponent_twoPlayerProfile);

		// two_player_opponent_name
		const two_player_opponent_name = this.add.text(681, 1791, "", {});
		two_player_opponent_name.setOrigin(0, 0.5);
		two_player_opponent_name.text = "Harshal";
		two_player_opponent_name.setStyle({ "fontFamily": "VerioxBold", "fontSize": "35px" });
		container_opponent_profile.add(two_player_opponent_name);

		// opponent_pawn_without_ring
		const opponent_pawn_without_ring = this.add.image(993, 1790, "red-without-ring");
		opponent_pawn_without_ring.scaleX = 0.9;
		opponent_pawn_without_ring.scaleY = 0.9;
		container_opponent_profile.add(opponent_pawn_without_ring);

		// opp_coin
		const opp_coin = this.add.image(708, 1842, "Coin");
		opp_coin.scaleX = 0.5;
		opp_coin.scaleY = 0.5;
		container_opponent_profile.add(opp_coin);

		// opp_coin_text
		const opp_coin_text = this.add.text(752, 1846, "", {});
		opp_coin_text.setOrigin(0, 0.5);
		opp_coin_text.text = "2300";
		opp_coin_text.setStyle({ "fontFamily": "VerioxBold", "fontSize": "30px" });
		container_opponent_profile.add(opp_coin_text);

		// container_opponent_life_container
		const container_opponent_life_container = this.add.container(992, 1855);
		container_opponent_profile.add(container_opponent_life_container);

		// opponentLifeFive
		const opponentLifeFive = this.add.image(-40, 0, "green-life");
		opponentLifeFive.scaleX = 0.25;
		opponentLifeFive.scaleY = 0.25;
		container_opponent_life_container.add(opponentLifeFive);

		// opponentLifeFour
		const opponentLifeFour = this.add.image(-20, 0, "green-life");
		opponentLifeFour.scaleX = 0.25;
		opponentLifeFour.scaleY = 0.25;
		container_opponent_life_container.add(opponentLifeFour);

		// opponentLifeThree
		const opponentLifeThree = this.add.image(0, 0, "green-life");
		opponentLifeThree.scaleX = 0.25;
		opponentLifeThree.scaleY = 0.25;
		container_opponent_life_container.add(opponentLifeThree);

		// opponentLifeTwo
		const opponentLifeTwo = this.add.image(20, 0, "green-life");
		opponentLifeTwo.scaleX = 0.25;
		opponentLifeTwo.scaleY = 0.25;
		container_opponent_life_container.add(opponentLifeTwo);

		// opponentLifeOne
		const opponentLifeOne = this.add.image(40, 0, "green-life");
		opponentLifeOne.scaleX = 0.25;
		opponentLifeOne.scaleY = 0.25;
		container_opponent_life_container.add(opponentLifeOne);

		// diceRectangle
		const diceRectangle = this.add.rectangle(542, 1809, 200, 170);
		container_two_players.add(diceRectangle);

		// container_players
		const container_players = this.add.container(0, 0);
		container_background.add(container_players);

		// ownPlayer
		const ownPlayer = new PlayerProfile(this, 205, 1626);
		ownPlayer.visible = false;
		container_players.add(ownPlayer);

		// oppPlayerOne
		const oppPlayerOne = new PlayerProfile(this, 217, 1634);
		oppPlayerOne.visible = false;
		container_players.add(oppPlayerOne);

		// oppPlayerTwo
		const oppPlayerTwo = new PlayerProfile(this, 221, 1630);
		oppPlayerTwo.visible = false;
		container_players.add(oppPlayerTwo);

		// oppPlayerThree
		const oppPlayerThree = new PlayerProfile(this, 221, 1630);
		oppPlayerThree.visible = false;
		container_players.add(oppPlayerThree);

		// container_rush_game
		const container_rush_game = this.add.container(0, 0);
		container_rush_game.visible = false;
		container_background.add(container_rush_game);

		// time_Round_Box
		const time_Round_Box = this.add.image(894, 80, "time-round-box");
		time_Round_Box.scaleX = 0.7;
		time_Round_Box.scaleY = 0.7;
		container_rush_game.add(time_Round_Box);

		// time_clock_icon
		const time_clock_icon = this.add.image(820, 72, "time-clock");
		time_clock_icon.scaleX = 0.7;
		time_clock_icon.scaleY = 0.7;
		container_rush_game.add(time_clock_icon);

		// text_rush_timer
		const text_rush_timer = this.add.text(903, 82, "", {});
		text_rush_timer.setOrigin(0.5, 0.5);
		text_rush_timer.setStyle({ "color": "#04ff13ff", "fontFamily": "Montserrat-Bold", "fontSize": "30px", "fontStyle": "bold" });
		container_rush_game.add(text_rush_timer);

		// container_button_group
		const container_button_group = this.add.container(0, -1);
		container_button_group.visible = false;
		container_background.add(container_button_group);

		// exit_icon
		const exit_icon = this.add.image(280, 100, "exit_icon");
		exit_icon.scaleX = 0.6;
		exit_icon.scaleY = 0.6;
		container_button_group.add(exit_icon);

		// leave_icon
		const leave_icon = this.add.image(100, 100, "Leave-icon");
		leave_icon.scaleX = 0.6;
		leave_icon.scaleY = 0.6;
		container_button_group.add(leave_icon);

		// container_sound
		const container_sound = this.add.container(980, 100);
		container_button_group.add(container_sound);

		// sound_off
		const sound_off = this.add.image(0, 0, "Sound-off");
		sound_off.scaleX = 0.91;
		sound_off.scaleY = 0.91;
		sound_off.visible = false;
		container_sound.add(sound_off);

		// sound_button_on
		const sound_button_on = this.add.image(0, 0, "Sound-button-01");
		sound_button_on.scaleX = 0.91;
		sound_button_on.scaleY = 0.91;
		container_sound.add(sound_button_on);

		// container_player_waiting
		const container_player_waiting = this.add.container(0, 0);
		container_player_waiting.visible = false;
		container_background.add(container_player_waiting);

		// gradient_background
		const gradient_background = this.add.image(540, 960, "gradient-background");
		container_player_waiting.add(gradient_background);

		// defytext_1
		const defytext_1 = this.add.text(540, 1765, "", {});
		defytext_1.setOrigin(0.5, 0.5);
		defytext_1.visible = false;
		defytext_1.text = "You'll lose the game & entry fee\nif you leave now or close the app";
		defytext_1.setStyle({ "align": "center", "fontFamily": "Montserrat-Medium", "fontSize": "34px" });
		container_player_waiting.add(defytext_1);

		// vs_Shine
		const vs_Shine = this.add.image(540, 1063, "vs_Shine");
		vs_Shine.scaleX = 1.5;
		vs_Shine.scaleY = 1.5;
		container_player_waiting.add(vs_Shine);

		// vs_base
		const vs_base = this.add.image(540, 1063, "vs_base");
		vs_base.scaleX = 0.8;
		vs_base.scaleY = 0.8;
		container_player_waiting.add(vs_base);

		// text_2
		const text_2 = this.add.text(538, 1063, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "VS";
		text_2.setStyle({ "fontFamily": "CarterOne-Regular", "fontSize": "45px", "stroke": "#000000ff", "strokeThickness": 5 });
		container_player_waiting.add(text_2);

		// new_user
		const new_user = this.add.image(540, 1368, "new_user");
		new_user.scaleX = 1.43;
		new_user.scaleY = 1.43;
		container_player_waiting.add(new_user);

		// new_user_1
		const new_user_1 = this.add.image(240, 1368, "new_user");
		new_user_1.scaleX = 1.43;
		new_user_1.scaleY = 1.43;
		container_player_waiting.add(new_user_1);

		// new_user_2
		const new_user_2 = this.add.image(840, 1368, "new_user");
		new_user_2.scaleX = 1.43;
		new_user_2.scaleY = 1.43;
		container_player_waiting.add(new_user_2);

		// playerOnePrefab
		const playerOnePrefab = new MatchmakingPlayer(this, 540, 683);
		playerOnePrefab.visible = false;
		container_player_waiting.add(playerOnePrefab);

		// playerTwoPrefab
		const playerTwoPrefab = new MatchmakingPlayer(this, 240, 1368);
		playerTwoPrefab.visible = false;
		container_player_waiting.add(playerTwoPrefab);

		// playerThreePrefab
		const playerThreePrefab = new MatchmakingPlayer(this, 540, 1368);
		playerThreePrefab.visible = false;
		container_player_waiting.add(playerThreePrefab);

		// playerFourPrefab
		const playerFourPrefab = new MatchmakingPlayer(this, 840, 1368);
		playerFourPrefab.visible = false;
		container_player_waiting.add(playerFourPrefab);

		// player_waiting_sound_button
		const player_waiting_sound_button = this.add.image(1000, 180, "sound_on");
		player_waiting_sound_button.visible = false;
		container_player_waiting.add(player_waiting_sound_button);

		// round_board
		const round_board = this.add.image(540, 250, "round_board");
		round_board.scaleX = 0.9;
		round_board.scaleY = 0.9;
		container_player_waiting.add(round_board);

		// text_1
		const text_1 = this.add.text(540, 238, "", {});
		text_1.scaleX = 0.6;
		text_1.setOrigin(0.5, 0.5);
		text_1.visible = false;
		text_1.text = "REAL TIME MULTIPLAYER";
		text_1.setStyle({ "color": "#f0c900", "fontFamily": "CarterOne-Regular", "fontSize": "40px", "stroke": "#000000ff", "strokeThickness": 5 });
		container_player_waiting.add(text_1);

		// room_code_bar
		const room_code_bar = this.add.image(540, 388, "room_code_bar");
		container_player_waiting.add(room_code_bar);

		// txtRoomCode
		const txtRoomCode = this.add.text(654, 391, "", {});
		txtRoomCode.setOrigin(0.5, 0.5);
		txtRoomCode.setStyle({ "color": "#f0c900", "fontFamily": "myriadpro", "fontSize": "45px", "stroke": "#000", "strokeThickness": 5 });
		container_player_waiting.add(txtRoomCode);

		// prizePotContainer
		const prizePotContainer = this.add.container(540, 389);
		container_player_waiting.add(prizePotContainer);

		// text_waiting_screen
		const text_waiting_screen = this.add.text(0, 100, "", {});
		text_waiting_screen.setOrigin(0.5, 0.5);
		text_waiting_screen.setStyle({ "color": "#00ec33ff", "fontFamily": "myriadpro", "fontSize": "40px" });
		prizePotContainer.add(text_waiting_screen);

		// container_searching_player
		const container_searching_player = this.add.container(540, 1650);
		container_searching_player.scaleX = 0.8;
		container_searching_player.scaleY = 0.8;
		container_player_waiting.add(container_searching_player);

		// search_player_bar
		const search_player_bar = this.add.image(0, 124, "search-player-bar");
		container_searching_player.add(search_player_bar);

		// search_player_bar_text
		const search_player_bar_text = this.add.image(0, 124, "search-player-bar-text");
		search_player_bar_text.scaleX = 0.82;
		search_player_bar_text.scaleY = 0.82;
		search_player_bar_text.visible = false;
		container_searching_player.add(search_player_bar_text);

		// text_player_waiting
		const text_player_waiting = this.add.text(0, 124, "", {});
		text_player_waiting.setOrigin(0.5, 0.5);
		text_player_waiting.visible = false;
		text_player_waiting.text = "Searching for player ...";
		text_player_waiting.setStyle({ "fontFamily": "CarterOne-Regular", "fontSize": "40px", "stroke": "#000000ff", "strokeThickness": 5 });
		container_searching_player.add(text_player_waiting);

		// exitIconBtn
		const exitIconBtn = this.add.image(100, 250, "exit_icon");
		exitIconBtn.scaleX = 0.5;
		exitIconBtn.scaleY = 0.5;
		exitIconBtn.visible = false;
		container_player_waiting.add(exitIconBtn);

		// gameExitButton
		const gameExitButton = new ExitButtonPrefab(this, 100, 250);
		gameExitButton.scaleX = 0.5;
		gameExitButton.scaleY = 0.5;
		container_player_waiting.add(gameExitButton);

		// container_quit_popup
		const container_quit_popup = this.add.container(0, 0);
		container_quit_popup.visible = false;
		container_background.add(container_quit_popup);

		// quit_popup_dark_background
		const quit_popup_dark_background = this.add.rectangle(540, 960, 1080, 1920);
		quit_popup_dark_background.visible = false;
		quit_popup_dark_background.alpha = 0.6;
		quit_popup_dark_background.isFilled = true;
		quit_popup_dark_background.fillColor = 0;
		container_quit_popup.add(quit_popup_dark_background);

		// container_quit
		const container_quit = this.add.container(540, 960);
		container_quit.scaleX = 0;
		container_quit.scaleY = 0;
		container_quit_popup.add(container_quit);

		// quit_popup_box
		const quit_popup_box = this.add.image(4, -53, "Pop-up-box-with-out-glow");
		quit_popup_box.scaleX = 1.18;
		quit_popup_box.scaleY = 1.1;
		container_quit.add(quit_popup_box);

		// text_quit_message
		const text_quit_message = this.add.text(10, -84, "", {});
		text_quit_message.setOrigin(0.5, 0.5);
		text_quit_message.text = "Your opponent will win if you quit!";
		text_quit_message.setStyle({ "align": "center", "fontFamily": "Montserrat-Bold", "fontSize": "45px", "fontStyle": "bold" });
		text_quit_message.setLineSpacing(10);
		container_quit.add(text_quit_message);

		// text_quit_message_1
		const text_quit_message_1 = this.add.text(11, -199, "", {});
		text_quit_message_1.setOrigin(0.5, 0.5);
		text_quit_message_1.text = "QUIT GAME?";
		text_quit_message_1.setStyle({ "align": "center", "color": "#f2c900", "fontFamily": "CarterOne-Regular", "fontSize": "55px" });
		text_quit_message_1.setLineSpacing(10);
		container_quit.add(text_quit_message_1);

		// button_yes
		const button_yes = this.add.image(-241, 83, "Yes-button-01");
		button_yes.scaleX = 0.9;
		button_yes.scaleY = 0.9;
		container_quit.add(button_yes);

		// button_no
		const button_no = this.add.image(241, 83, "no-button-01");
		button_no.scaleX = 0.9;
		button_no.scaleY = 0.9;
		container_quit.add(button_no);

		// container_Sound
		const container_Sound = this.add.container(0, 85);
		container_quit.add(container_Sound);

		// button_Soundon
		const button_Soundon = this.add.image(0, 0, "Sound-button-01");
		button_Soundon.scaleX = 0.9;
		button_Soundon.scaleY = 0.9;
		container_Sound.add(button_Soundon);

		// button_soundOff
		const button_soundOff = this.add.image(0, 0, "Sound-off");
		button_soundOff.visible = false;
		container_Sound.add(button_soundOff);

		// container_game_finished
		const container_game_finished = this.add.container(0, 0);
		container_game_finished.visible = false;
		container_background.add(container_game_finished);

		// quit_popup_dark_background_3
		const quit_popup_dark_background_3 = this.add.rectangle(540, 960, 1080, 1920);
		quit_popup_dark_background_3.alpha = 0.6;
		quit_popup_dark_background_3.isFilled = true;
		quit_popup_dark_background_3.fillColor = 0;
		container_game_finished.add(quit_popup_dark_background_3);

		// quit_popup_box_2
		const quit_popup_box_2 = this.add.image(540, 975, "Pop-up-box-with-out-glow");
		quit_popup_box_2.scaleX = 0.93;
		quit_popup_box_2.scaleY = 0.3;
		container_game_finished.add(quit_popup_box_2);

		// text_quit_message_2
		const text_quit_message_2 = this.add.text(540, 976, "", {});
		text_quit_message_2.setOrigin(0.5, 0.5);
		text_quit_message_2.text = "GAME HAS BEEN FINISHED";
		text_quit_message_2.setStyle({ "align": "center", "fontFamily": "Montserrat-Bold", "fontSize": "50px", "fontStyle": "bold" });
		text_quit_message_2.setLineSpacing(10);
		container_game_finished.add(text_quit_message_2);

		// container_missingTurnPopup
		const container_missingTurnPopup = this.add.container(542, 1767);
		container_missingTurnPopup.visible = false;
		container_background.add(container_missingTurnPopup);

		// blue_prompt
		const blue_prompt = this.add.image(0, 0, "blue_prompt");
		container_missingTurnPopup.add(blue_prompt);

		// missingTurn_text
		const missingTurn_text = this.add.text(0, 0, "", {});
		missingTurn_text.setOrigin(0.5, 0.5);
		missingTurn_text.text = "You ran out of the time!";
		missingTurn_text.setStyle({ "fontFamily": "veriox-rg-4", "fontSize": "30px" });
		container_missingTurnPopup.add(missingTurn_text);

		// container_result_popup
		const container_result_popup = this.add.container(0, 0);
		container_result_popup.visible = false;
		container_background.add(container_result_popup);

		// gradient_background_popup_1
		const gradient_background_popup_1 = this.add.image(540, 960, "gradient_background_popup");
		gradient_background_popup_1.alpha = 0.2;
		gradient_background_popup_1.alphaTopLeft = 0.2;
		gradient_background_popup_1.alphaTopRight = 0.2;
		gradient_background_popup_1.alphaBottomLeft = 0.2;
		gradient_background_popup_1.alphaBottomRight = 0.2;
		container_result_popup.add(gradient_background_popup_1);

		// gradient_background_popup
		const gradient_background_popup = this.add.image(540, 960, "gradient_background_popup");
		container_result_popup.add(gradient_background_popup);

		// container_firework
		const container_firework = this.add.container(0, 0);
		container_result_popup.add(container_firework);

		// pop_up_box
		const pop_up_box = this.add.image(540, 1503, "Pop-Up-box");
		pop_up_box.scaleX = 1.1;
		pop_up_box.scaleY = 1.1;
		container_result_popup.add(pop_up_box);

		// congratulations_text
		const congratulations_text = this.add.image(526, 1159, "Congratulations-text");
		congratulations_text.visible = false;
		container_result_popup.add(congratulations_text);

		// text_roomCode
		const text_roomCode = this.add.text(524, 1698, "", {});
		text_roomCode.setOrigin(0.5, 0.5);
		text_roomCode.text = "Room Code : ";
		text_roomCode.setStyle({ "fontFamily": "adobeclean", "fontSize": "40px", "fontStyle": "bold", "shadow.offsetX": 1, "shadow.offsetY": -1, "shadow.stroke": true });
		container_result_popup.add(text_roomCode);

		// text_youLost
		const text_youLost = this.add.text(540, 1174, "", {});
		text_youLost.setOrigin(0.5, 0.5);
		text_youLost.visible = false;
		text_youLost.text = "You Lost";
		text_youLost.setStyle({ "color": "#f1d454", "fontFamily": "CarterOne-Regular", "fontSize": "60px", "stroke": "#000000ff", "strokeThickness": 5 });
		container_result_popup.add(text_youLost);

		// container_icones
		const container_icones = this.add.container(540, 1600);
		container_icones.scaleX = 1.2;
		container_icones.scaleY = 1.2;
		container_result_popup.add(container_icones);

		// medal
		const medal = this.add.image(-281, -27, "Medal");
		medal.scaleX = 0.85;
		medal.scaleY = 0.85;
		container_icones.add(medal);

		// catch_token
		const catch_token = this.add.image(-140, -25, "Catch_token");
		catch_token.scaleX = 0.85;
		catch_token.scaleY = 0.85;
		container_icones.add(catch_token);

		// blast_token
		const blast_token = this.add.image(0, -27, "Blast_token");
		blast_token.scaleX = 0.85;
		blast_token.scaleY = 0.85;
		container_icones.add(blast_token);

		// like
		const like = this.add.image(141, -25, "Like");
		like.scaleX = 0.85;
		like.scaleY = 0.85;
		container_icones.add(like);

		// dislike
		const dislike = this.add.image(281, -26, "dislike");
		dislike.scaleX = 0.85;
		dislike.scaleY = 0.85;
		container_icones.add(dislike);

		// text_dislike
		const text_dislike = this.add.text(281, 26, "", {});
		text_dislike.setOrigin(0.5, 0.5);
		text_dislike.text = "0";
		text_dislike.setStyle({ "fontFamily": "adobeclean", "fontSize": "25px", "fontStyle": "bold", "shadow.offsetX": 1, "shadow.offsetY": -1, "shadow.stroke": true });
		container_icones.add(text_dislike);

		// text_like
		const text_like = this.add.text(141, 26, "", {});
		text_like.setOrigin(0.5, 0.5);
		text_like.text = "0";
		text_like.setStyle({ "fontFamily": "adobeclean", "fontSize": "25px", "fontStyle": "bold", "shadow.offsetX": 1, "shadow.offsetY": -1, "shadow.stroke": true });
		container_icones.add(text_like);

		// text_killPwon
		const text_killPwon = this.add.text(0, 26, "", {});
		text_killPwon.setOrigin(0.5, 0.5);
		text_killPwon.text = "20";
		text_killPwon.setStyle({ "fontFamily": "adobeclean", "fontSize": "25px", "fontStyle": "bold", "shadow.offsetX": 1, "shadow.offsetY": -1, "shadow.stroke": true });
		container_icones.add(text_killPwon);

		// text_catch
		const text_catch = this.add.text(-140, 26, "", {});
		text_catch.setOrigin(0.5, 0.5);
		text_catch.text = "13";
		text_catch.setStyle({ "fontFamily": "adobeclean", "fontSize": "25px", "fontStyle": "bold", "shadow.offsetX": 1, "shadow.offsetY": -1, "shadow.stroke": true });
		container_icones.add(text_catch);

		// text_madel
		const text_madel = this.add.text(-281, 26, "", {});
		text_madel.setOrigin(0.5, 0.5);
		text_madel.text = "1";
		text_madel.setStyle({ "fontFamily": "adobeclean", "fontSize": "25px", "fontStyle": "bold", "shadow.offsetX": 1, "shadow.offsetY": -1, "shadow.stroke": true });
		container_icones.add(text_madel);

		// container_buttons
		const container_buttons = this.add.container(517, 1786);
		container_result_popup.add(container_buttons);

		// f_Share_Btn
		const f_Share_Btn = this.add.image(255, 0, "F_Share_Btn");
		f_Share_Btn.scaleX = 0.8;
		f_Share_Btn.scaleY = 0.8;
		container_buttons.add(f_Share_Btn);

		// share_btn
		const share_btn = this.add.image(45, 0, "Share_btn");
		share_btn.scaleX = 0.9;
		share_btn.scaleY = 0.9;
		container_buttons.add(share_btn);

		// home
		const home = this.add.image(-236, 0, "Menu_Btn");
		home.scaleX = 0.8;
		home.scaleY = 0.8;
		container_buttons.add(home);

		// resultScreenSoundBtn
		const resultScreenSoundBtn = this.add.image(-66, 0, "sound_on");
		resultScreenSoundBtn.scaleX = 0.9;
		resultScreenSoundBtn.scaleY = 0.9;
		container_buttons.add(resultScreenSoundBtn);

		// container_wifi
		const container_wifi = this.add.container(0, 0);
		container_wifi.visible = false;
		container_background.add(container_wifi);

		// gradient_background_popup_2
		const gradient_background_popup_2 = this.add.image(540, 960, "gradient_background_popup");
		container_wifi.add(gradient_background_popup_2);

		// wifi_icon
		const wifi_icon = this.add.image(540, 960, "wifi-icon");
		wifi_icon.scaleX = 0.8;
		wifi_icon.scaleY = 0.8;
		container_wifi.add(wifi_icon);

		// network_loading
		const network_loading = this.add.image(540, 960, "network-loading");
		container_wifi.add(network_loading);

		// container_ping _high
		const container_ping__high = this.add.container(0, 0);
		container_ping__high.visible = false;
		container_background.add(container_ping__high);

		// gradient_background_popup_3
		const gradient_background_popup_3 = this.add.image(540, 960, "gradient_background_popup");
		container_ping__high.add(gradient_background_popup_3);

		// pop_up_box_3
		const pop_up_box_3 = this.add.image(540, 960, "Pop-up-box");
		pop_up_box_3.scaleY = 0.5;
		container_ping__high.add(pop_up_box_3);

		// networkUnstableText
		const networkUnstableText = this.add.text(540, 960, "", {});
		networkUnstableText.setOrigin(0.5, 0.5);
		networkUnstableText.text = "Your Network seems Unstable! Please Join Back...";
		networkUnstableText.setStyle({ "align": "center", "fontFamily": "VerioxBold", "fontSize": "30px", "fontStyle": "bold" });
		container_ping__high.add(networkUnstableText);

		// warningText
		const warningText = this.add.text(540, 880, "", {});
		warningText.setOrigin(0.5, 0.5);
		warningText.text = "OOPS!";
		warningText.setStyle({ "align": "center", "color": "#f1d454", "fontFamily": "VerioxBold", "fontSize": "60px", "fontStyle": "bold", "stroke": "#f1d454" });
		container_ping__high.add(warningText);

		// lobbyIconBtn
		const lobbyIconBtn = this.add.image(540, 1060, "Leave-icon");
		lobbyIconBtn.scaleX = 0.5;
		lobbyIconBtn.scaleY = 0.5;
		container_ping__high.add(lobbyIconBtn);

		this.background = background;
		this.ownTurnArrow = ownTurnArrow;
		this.text_prize_pot = text_prize_pot;
		this.container_board = container_board;
		this.gameBoard = gameBoard;
		this.container_two_players = container_two_players;
		this.twoPlayerDice = twoPlayerDice;
		this.tokenBorder = tokenBorder;
		this.container_own_profile = container_own_profile;
		this.twoPlayerProfile = twoPlayerProfile;
		this.two_player_own_name = two_player_own_name;
		this.own_pawn_without_ring = own_pawn_without_ring;
		this.down_arrow_Small = down_arrow_Small;
		this.own_coin = own_coin;
		this.own_coin_text = own_coin_text;
		this.ownLifeFive = ownLifeFive;
		this.ownLifeFour = ownLifeFour;
		this.ownLifeThree = ownLifeThree;
		this.ownLifeTwo = ownLifeTwo;
		this.ownLifeOne = ownLifeOne;
		this.container_opponent_profile = container_opponent_profile;
		this.opponent_twoPlayerProfile = opponent_twoPlayerProfile;
		this.two_player_opponent_name = two_player_opponent_name;
		this.opponent_pawn_without_ring = opponent_pawn_without_ring;
		this.opp_coin = opp_coin;
		this.opp_coin_text = opp_coin_text;
		this.container_opponent_life_container = container_opponent_life_container;
		this.opponentLifeFive = opponentLifeFive;
		this.opponentLifeFour = opponentLifeFour;
		this.opponentLifeThree = opponentLifeThree;
		this.opponentLifeTwo = opponentLifeTwo;
		this.opponentLifeOne = opponentLifeOne;
		this.diceRectangle = diceRectangle;
		this.container_players = container_players;
		this.ownPlayer = ownPlayer;
		this.oppPlayerOne = oppPlayerOne;
		this.oppPlayerTwo = oppPlayerTwo;
		this.oppPlayerThree = oppPlayerThree;
		this.container_rush_game = container_rush_game;
		this.text_rush_timer = text_rush_timer;
		this.container_button_group = container_button_group;
		this.exit_icon = exit_icon;
		this.leave_icon = leave_icon;
		this.container_sound = container_sound;
		this.sound_off = sound_off;
		this.sound_button_on = sound_button_on;
		this.container_player_waiting = container_player_waiting;
		this.vs_Shine = vs_Shine;
		this.playerOnePrefab = playerOnePrefab;
		this.playerTwoPrefab = playerTwoPrefab;
		this.playerThreePrefab = playerThreePrefab;
		this.playerFourPrefab = playerFourPrefab;
		this.player_waiting_sound_button = player_waiting_sound_button;
		this.txtRoomCode = txtRoomCode;
		this.text_waiting_screen = text_waiting_screen;
		this.container_searching_player = container_searching_player;
		this.search_player_bar = search_player_bar;
		this.search_player_bar_text = search_player_bar_text;
		this.text_player_waiting = text_player_waiting;
		this.exitIconBtn = exitIconBtn;
		this.gameExitButton = gameExitButton;
		this.container_quit_popup = container_quit_popup;
		this.quit_popup_dark_background = quit_popup_dark_background;
		this.container_quit = container_quit;
		this.text_quit_message = text_quit_message;
		this.button_yes = button_yes;
		this.button_no = button_no;
		this.container_Sound = container_Sound;
		this.button_Soundon = button_Soundon;
		this.button_soundOff = button_soundOff;
		this.container_game_finished = container_game_finished;
		this.quit_popup_dark_background_3 = quit_popup_dark_background_3;
		this.container_missingTurnPopup = container_missingTurnPopup;
		this.missingTurn_text = missingTurn_text;
		this.container_result_popup = container_result_popup;
		this.gradient_background_popup_1 = gradient_background_popup_1;
		this.gradient_background_popup = gradient_background_popup;
		this.container_firework = container_firework;
		this.congratulations_text = congratulations_text;
		this.text_roomCode = text_roomCode;
		this.text_youLost = text_youLost;
		this.container_icones = container_icones;
		this.text_dislike = text_dislike;
		this.text_like = text_like;
		this.text_killPwon = text_killPwon;
		this.text_catch = text_catch;
		this.text_madel = text_madel;
		this.container_buttons = container_buttons;
		this.f_Share_Btn = f_Share_Btn;
		this.share_btn = share_btn;
		this.home = home;
		this.resultScreenSoundBtn = resultScreenSoundBtn;
		this.container_wifi = container_wifi;
		this.wifi_icon = wifi_icon;
		this.network_loading = network_loading;
		this.container_ping__high = container_ping__high;
		this.lobbyIconBtn = lobbyIconBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	ownTurnArrow;
	/** @type {Phaser.GameObjects.Text} */
	text_prize_pot;
	/** @type {Phaser.GameObjects.Container} */
	container_board;
	/** @type {GameBoard} */
	gameBoard;
	/** @type {Phaser.GameObjects.Container} */
	container_two_players;
	/** @type {Dice} */
	twoPlayerDice;
	/** @type {Phaser.GameObjects.Image} */
	tokenBorder;
	/** @type {Phaser.GameObjects.Container} */
	container_own_profile;
	/** @type {TwoPlayerProfile} */
	twoPlayerProfile;
	/** @type {Phaser.GameObjects.Text} */
	two_player_own_name;
	/** @type {Phaser.GameObjects.Image} */
	own_pawn_without_ring;
	/** @type {Phaser.GameObjects.Image} */
	down_arrow_Small;
	/** @type {Phaser.GameObjects.Image} */
	own_coin;
	/** @type {Phaser.GameObjects.Text} */
	own_coin_text;
	/** @type {Phaser.GameObjects.Image} */
	ownLifeFive;
	/** @type {Phaser.GameObjects.Image} */
	ownLifeFour;
	/** @type {Phaser.GameObjects.Image} */
	ownLifeThree;
	/** @type {Phaser.GameObjects.Image} */
	ownLifeTwo;
	/** @type {Phaser.GameObjects.Image} */
	ownLifeOne;
	/** @type {Phaser.GameObjects.Container} */
	container_opponent_profile;
	/** @type {TwoPlayerProfile} */
	opponent_twoPlayerProfile;
	/** @type {Phaser.GameObjects.Text} */
	two_player_opponent_name;
	/** @type {Phaser.GameObjects.Image} */
	opponent_pawn_without_ring;
	/** @type {Phaser.GameObjects.Image} */
	opp_coin;
	/** @type {Phaser.GameObjects.Text} */
	opp_coin_text;
	/** @type {Phaser.GameObjects.Container} */
	container_opponent_life_container;
	/** @type {Phaser.GameObjects.Image} */
	opponentLifeFive;
	/** @type {Phaser.GameObjects.Image} */
	opponentLifeFour;
	/** @type {Phaser.GameObjects.Image} */
	opponentLifeThree;
	/** @type {Phaser.GameObjects.Image} */
	opponentLifeTwo;
	/** @type {Phaser.GameObjects.Image} */
	opponentLifeOne;
	/** @type {Phaser.GameObjects.Rectangle} */
	diceRectangle;
	/** @type {Phaser.GameObjects.Container} */
	container_players;
	/** @type {PlayerProfile} */
	ownPlayer;
	/** @type {PlayerProfile} */
	oppPlayerOne;
	/** @type {PlayerProfile} */
	oppPlayerTwo;
	/** @type {PlayerProfile} */
	oppPlayerThree;
	/** @type {Phaser.GameObjects.Container} */
	container_rush_game;
	/** @type {Phaser.GameObjects.Text} */
	text_rush_timer;
	/** @type {Phaser.GameObjects.Container} */
	container_button_group;
	/** @type {Phaser.GameObjects.Image} */
	exit_icon;
	/** @type {Phaser.GameObjects.Image} */
	leave_icon;
	/** @type {Phaser.GameObjects.Container} */
	container_sound;
	/** @type {Phaser.GameObjects.Image} */
	sound_off;
	/** @type {Phaser.GameObjects.Image} */
	sound_button_on;
	/** @type {Phaser.GameObjects.Container} */
	container_player_waiting;
	/** @type {Phaser.GameObjects.Image} */
	vs_Shine;
	/** @type {MatchmakingPlayer} */
	playerOnePrefab;
	/** @type {MatchmakingPlayer} */
	playerTwoPrefab;
	/** @type {MatchmakingPlayer} */
	playerThreePrefab;
	/** @type {MatchmakingPlayer} */
	playerFourPrefab;
	/** @type {Phaser.GameObjects.Image} */
	player_waiting_sound_button;
	/** @type {Phaser.GameObjects.Text} */
	txtRoomCode;
	/** @type {Phaser.GameObjects.Text} */
	text_waiting_screen;
	/** @type {Phaser.GameObjects.Container} */
	container_searching_player;
	/** @type {Phaser.GameObjects.Image} */
	search_player_bar;
	/** @type {Phaser.GameObjects.Image} */
	search_player_bar_text;
	/** @type {Phaser.GameObjects.Text} */
	text_player_waiting;
	/** @type {Phaser.GameObjects.Image} */
	exitIconBtn;
	/** @type {ExitButtonPrefab} */
	gameExitButton;
	/** @type {Phaser.GameObjects.Container} */
	container_quit_popup;
	/** @type {Phaser.GameObjects.Rectangle} */
	quit_popup_dark_background;
	/** @type {Phaser.GameObjects.Container} */
	container_quit;
	/** @type {Phaser.GameObjects.Text} */
	text_quit_message;
	/** @type {Phaser.GameObjects.Image} */
	button_yes;
	/** @type {Phaser.GameObjects.Image} */
	button_no;
	/** @type {Phaser.GameObjects.Container} */
	container_Sound;
	/** @type {Phaser.GameObjects.Image} */
	button_Soundon;
	/** @type {Phaser.GameObjects.Image} */
	button_soundOff;
	/** @type {Phaser.GameObjects.Container} */
	container_game_finished;
	/** @type {Phaser.GameObjects.Rectangle} */
	quit_popup_dark_background_3;
	/** @type {Phaser.GameObjects.Container} */
	container_missingTurnPopup;
	/** @type {Phaser.GameObjects.Text} */
	missingTurn_text;
	/** @type {Phaser.GameObjects.Container} */
	container_result_popup;
	/** @type {Phaser.GameObjects.Image} */
	gradient_background_popup_1;
	/** @type {Phaser.GameObjects.Image} */
	gradient_background_popup;
	/** @type {Phaser.GameObjects.Container} */
	container_firework;
	/** @type {Phaser.GameObjects.Image} */
	congratulations_text;
	/** @type {Phaser.GameObjects.Text} */
	text_roomCode;
	/** @type {Phaser.GameObjects.Text} */
	text_youLost;
	/** @type {Phaser.GameObjects.Container} */
	container_icones;
	/** @type {Phaser.GameObjects.Text} */
	text_dislike;
	/** @type {Phaser.GameObjects.Text} */
	text_like;
	/** @type {Phaser.GameObjects.Text} */
	text_killPwon;
	/** @type {Phaser.GameObjects.Text} */
	text_catch;
	/** @type {Phaser.GameObjects.Text} */
	text_madel;
	/** @type {Phaser.GameObjects.Container} */
	container_buttons;
	/** @type {Phaser.GameObjects.Image} */
	f_Share_Btn;
	/** @type {Phaser.GameObjects.Image} */
	share_btn;
	/** @type {Phaser.GameObjects.Image} */
	home;
	/** @type {Phaser.GameObjects.Image} */
	resultScreenSoundBtn;
	/** @type {Phaser.GameObjects.Container} */
	container_wifi;
	/** @type {Phaser.GameObjects.Image} */
	wifi_icon;
	/** @type {Phaser.GameObjects.Image} */
	network_loading;
	/** @type {Phaser.GameObjects.Container} */
	container_ping__high;
	/** @type {Phaser.GameObjects.Image} */
	lobbyIconBtn;

	/* START-USER-CODE */

	// Write your code here

	// PROD CHANGE PROFILE (UC)
	init(data) {
		this.gameId = data.gameId.replace(/"/g, '');
		this.sRootUrl = data.sRootUrl.replace(/"/g, ''); // Remove double-quotes from the URL
		this.userToken = data.userToken.replace(/"/g, ''); // Remove double-quotes from the userToken

		console.log(this.gameId);
		console.log(this.sRootUrl);
		console.log(this.userToken);
		window.parent.postMessage('Hello from iframe!', '*');
	}

	create() {
		this.pingCounter = 0;
		this.pingflag = true;
		this.oGameManager = new GameManager(this);
		// this.instantiateSocketManager();

		// PROD CHANGE PROFILE (C)
		// this.instantiateNewSocketManager();

		// PROD CHANGE PROFILE (UC)
		if (this.gameId != undefined && this.userToken != undefined && this.sRootUrl != undefined) {
			this.oSocketManager = new NewSocketManager(this, this.gameId, this.userToken, this.sRootUrl);
		}
		this.oPlayerManager = new PlayerManager(this);
		this.oInputManager = new InputManager(this);
		this.oSoundManager = new SoundManager(this);
		this.oTweenManager = new TweenManager(this);
		this.oPositionManager = new PositionManager(this);
		// this.oSoundManager.playSound(this.oSoundManager.backgroundMusic, true);
		// this.oSoundManager.stopSound(this.oSoundManager.backgroundMusic, false);
		this.editorCreate();
		this.versionNumber = this.add.text(1020, 40, "", {});
		this.versionNumber.setOrigin(0.5, 0.5);
		this.versionNumber.alpha = 0.5;
		this.versionNumber.alphaTopLeft = 0.5;
		this.versionNumber.alphaTopRight = 0.5;
		this.versionNumber.alphaBottomLeft = 0.5;
		this.versionNumber.alphaBottomRight = 0.5;
		this.versionNumber.text = "v1.9.2";
		this.versionNumber.setStyle({ "color": "#eed000", "fontFamily": "VerioxBold", "fontSize": "32px" });

		this.pingText = this.add.text(540, 40, "", {});
		this.pingText.setOrigin(0.5, 0.5);
		this.pingText.alpha = 0.5;
		this.pingText.alphaTopLeft = 0.5;
		this.pingText.alphaTopRight = 0.5;
		this.pingText.alphaBottomLeft = 0.5;
		this.pingText.alphaBottomRight = 0.5;
		this.pingText.setStyle({ "color": "#eed000", "fontFamily": "VerioxBold", "fontSize": "32px" });

		this.roomCodeText = this.add.text(30, 40, "", {});
		this.roomCodeText.setOrigin(0, 0.5);
		this.roomCodeText.alpha = 0.5;
		this.roomCodeText.alphaTopLeft = 0.5;
		this.roomCodeText.alphaTopRight = 0.5;
		this.roomCodeText.alphaBottomLeft = 0.5;
		this.roomCodeText.alphaBottomRight = 0.5;
		this.roomCodeText.setStyle({ "color": "#eed000", "fontFamily": "VerioxBold", "fontSize": "32px" });

		this.GameMode = this.add.text(540, 80, "", {});
		this.GameMode.setOrigin(0.5, 0.5);
		this.GameMode.alpha = 0.5;
		this.GameMode.alphaTopLeft = 0.5;
		this.GameMode.alphaTopRight = 0.5;
		this.GameMode.alphaBottomLeft = 0.5;
		this.GameMode.alphaBottomRight = 0.5;
		this.GameMode.text = "Classic";
		this.GameMode.setStyle({ "color": "#eed000", "fontFamily": "VerioxBold", "fontSize": "32px" });

		this.arrayOfAvatars = ['avatar-f-1', 'avatar-f-2', 'avatar-f-3', 'avatar-f-4', 'avatar-f-5', 'avatar-f-6', 'avatar-m-1', 'avatar-m-2', 'avatar-m-3', 'avatar-m-4', 'avatar-m-5', 'avatar-m-6'];
		this.pingTest();
		this.pingValue = null;
		this.startNetworkTween();
		this.oInputManager.popupShow();

		this.opponent_twoPlayerProfile.twoPlayerEarth.x = -167

		// console.log(this.opponent_twoPlayerProfile.twoPlayerEarth.x);

		this.diceRoll = () => {
			this.oGameManager.reqRollDice();
			this.down_arrow_Small.visible = false;
			this.diceTexture = this.twoPlayerDice.dice.texture.key;
		}

		this.diceRectangle.setInteractive().on('pointerdown', () => {
			this.twoPlayerDice.dice.disableInteractive();
			this.diceRectangle.disableInteractive();
			this.diceRoll();
		});

		this.twoPlayerDice.dice.setInteractive().on("pointerdown", () => {
			this.twoPlayerDice.dice.disableInteractive();
			this.diceRectangle.disableInteractive();
			this.diceRoll();
		});

		// vs rotation animation
		this.tweens.add({
			targets: this.vs_Shine,
			angle: -360,
			duration: 3000,
			repeat: -1
		});

		window.addEventListener('message', function (event) {
			// console.log("Message received from the parent: ", event.data); // Message received from parent
		});

		this.leave_icon.setInteractive().on("pointerdown", () => {
			history.back();
		});
		this.home.setInteractive().on("pointerdown", () => {
			history.back();
		});
		document.querySelector("canvas").onblur = function () {
			var me = this;
			setTimeout(function () {
				me.focus();
			}, 5000);
		}

	}
	reqPawnCheck() {
		this.oSocketManager.emit("reqPawnCheck", {}, (error, response) => {
		});
	}
	pingTest() {
		let pinger = document.getElementById('pingTester');
		let start = new Date().getTime();

		console.log("Current Ping Counter:- ", this.pingCounter);
		pinger.setAttribute('src', this.sRootUrl + '/ping');
		pinger.onerror = () => {
			let end = new Date().getTime();
			let pingVal = end - start;
			this.pingText.setText(pingVal + 'ms');
			if (pingVal < 300) {
				this.pingCounter = 0;
			}
			if (pingVal > 300) {
				this.pingCounter++;
				console.log("Current Ping Counter:- ", this.pingCounter);
				this.pingflag = false;
				if (this.pingCounter === 2) {
					// this.container_ping__high.setVisible(true);
					// console.log("Current Ping High:- " ,pingVal);
					this.container_wifi.setVisible(true);
					this.oSocketManager.oRootSocketConn.emit(
						"reqJoinBoard",
						{ iBoardId: this.oSocketManager.iGameId },
						(error, data) => {
							// window.location.reload();
							history.back();
						});
				}
			}
		}
		if (!window.navigator.onLine) {
			this.container_wifi.setVisible(true);
			this.oSocketManager.oRootSocketConn.emit(
				"reqJoinBoard",
				{ iBoardId: this.oSocketManager.iGameId },
				(error, data) => {
					history.back();
				});
		}
		var self = this;
		if (this.pingflag === true) {
			setTimeout(() => {
				self.pingTest();
			}, 2000);
		}
		else {
			setTimeout(() => {
				self.pingTest();
			}, 1000);
		}

	}

	startNetworkTween() {
		this.tweens.add({
			targets: this.wifi_icon,
			alpha: 0,
			duration: 200,
			yoyo: true,
			repeat: -1
		});

		this.tweens.add({
			targets: this.network_loading,
			rotation: 360,
			duration: 48000,
			repeat: -1
		})
	}

	// instantiateSocketManager() {
	// 	const queryString = window.location.search;
	// 	const urlParams = new URLSearchParams(queryString);
	// 	const iBoardId = urlParams.get("iBoardId");
	// 	const sAuthToken = urlParams.get("sAuthToken");
	// 	const sRootUrl = urlParams.get("sRootUrl");
	// 	const nChips = urlParams.get("nChips");
	// 	this.oSocketManager = new SocketManager(this, iBoardId, sAuthToken, sRootUrl, nChips);
	// }

	instantiateNewSocketManager() {
		// const queryString = window.location.search;
		// const urlParams = new URLSearchParams(queryString);
		// const gameId = urlParams.get("sGameId");
		// const userToken = urlParams.get("sUserToken");
		// const sRootUrl = urlParams.get("sRoot");
		// this.oSocketManager = new NewSocketManager(this, gameId, userToken, sRootUrl);


		// Get query parameters from the URL


		window.addEventListener('message', function (event) {
			// 	console.log("Message received from the parent: ", event.data); // Message received from parent
		});

		const params = new URLSearchParams(location.search);
		const userToken = params.get('sUserToken');
		const gameId = params.get('sGameId');
		const sRootUrl = params.get('sRoot');
		if (userToken && gameId) {
			// Clear local storage and set new values
			localStorage.clear();
			localStorage.setItem("gameId", gameId);
			localStorage.setItem("userToken", userToken);
			localStorage.setItem("sRoot", sRootUrl);

			// Update the URL without query parameters
			if ('URLSearchParams' in window) {
				const stateObj = { Title: "New title", Url: window.location.href.split('?')[0] };
				history.pushState(stateObj, stateObj.Title, stateObj.Url);
			}

			// Start the game using userToken and gameId
			// startGame(auth_token, iProtoId);
			this.oSocketManager = new NewSocketManager(this, gameId, userToken, sRootUrl);

		} else {
			// Check if gameId and userToken are stored in local storage
			const storedGameId = localStorage.getItem("gameId");
			const storedUserToken = localStorage.getItem("userToken");
			const storedRootUrl = localStorage.getItem("sRoot");

			if (storedGameId !== null && storedUserToken !== null) {
				console.log(storedGameId, storedUserToken);
				// Start the game using storedUserToken and storedGameId
				this.oSocketManager = new NewSocketManager(this, storedGameId, storedUserToken, storedRootUrl);
			}
		}
	}

	hideResultScreenButton() {
		this.resultScreenSoundBtn.setVisible(false);
		this.share_btn.setVisible(false);
		this.f_Share_Btn.setVisible(false);
		this.home.x = 0;
	}
	// dataURLtoBlob(dataurl) {
	//     var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
	//         bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
	//     while(n--){
	//         u8arr[n] = bstr.charCodeAt(n);
	//     }
	//     return new Blob([u8arr], {type:mime});
	// }
	// downloadScreenshot(dataUrl) {
	//     // Create a temporary anchor element
	//     var downloadLink = document.createElement('a');
	//     downloadLink.href = dataUrl;
	//     downloadLink.download = 'screenshot.png'; // Name of the downloaded file

	//     // Append the link to the document, trigger a click, and then remove it
	//     document.body.appendChild(downloadLink);
	//     downloadLink.click();
	//     document.body.removeChild(downloadLink);
	// }
	compressImage(dataURL, callback) {
		const MAX_WIDTH = 720;  // You can adjust this value as needed
		const QUALITY = 0.5;   // Quality for JPEG compression (0.0 to 1.0)

		const img = new Image();
		img.src = dataURL;

		img.onload = () => {
			let width = img.width;
			let height = img.height;

			// Reduce dimensions proportionally, if necessary
			if (width > MAX_WIDTH) {
				height *= MAX_WIDTH / width;
				width = MAX_WIDTH;
			}

			const canvas = document.createElement('canvas');
			canvas.width = width;
			canvas.height = height;

			const ctx = canvas.getContext('2d');
			ctx.drawImage(img, 0, 0, width, height);

			// Convert to JPEG with specified quality
			const compressedDataURL = canvas.toDataURL('image/jpeg', QUALITY);

			callback(compressedDataURL);
		};
	}


	dataURLtoBlob(dataURL, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', dataURL, true);
		xhr.responseType = 'blob';
		xhr.onload = function (e) {
			if (this.status == 200) {
				var blob = new Blob([this.response], { type: 'image/png' });
				callback(blob);
			}
		};
		xhr.send();
	}

	uploadToS3(blob) {

		// // Initialize the AWS SDK
		AWS.config.update({
			region: 'ap-south-1', // For example, 'us-west-1'
			accessKeyId: '',
			secretAccessKey: ''
		});
		var s3 = new AWS.S3();
		let fileName = this.oSocketManager.iGameId + '.png';

		// Define the parameters for the S3 upload
		var params = {
			Bucket: 'webgame-screenshoots',
			Key: fileName, // Name of file to be saved
			Body: blob,
			ContentType: 'image/png',
			ACL: 'private' // or 'private' depending on your needs
		};

		// Upload to S3
		let hasRetried = false;
		s3.upload(params, function (err, data) {
			if (err) {
				console.error("Error Uploading to S3 Bucket", err);
				if (!hasRetried) {
					hasRetried = true;
					uploadToS3(blob); // Call uploadToS3 when an error occurs
				}
			} else {
				console.log("S3 Success :: ", data.Location);
			}
		});
	}

	// Now, use the function to offer the screenshot for download

	showResultPopup(oData) {
		console.log("result data :: ", oData);
		let playerData = oData.aPlayer;
		this.gameBoard.highlighterAnimationStop();
		this.text_roomCode.text += this.oGameManager.iRoomId;

		for (let i = 0; i < oData.aParticipant.length; i++) {
			if (oData.aParticipant[i].sRootSocket === this.oSocketManager.ownSocketId) {
				this.text_madel.text = oData.aParticipant[i].nRank;
				this.text_killPwon.text = oData.aParticipant[i].nDeath === 0 ? oData.aParticipant[i].nDeath : "-" + oData.aParticipant[i].nDeath;
				this.text_catch.text = oData.aParticipant[i].nKills === 0 ? oData.aParticipant[i].nKills : "+" + oData.aParticipant[i].nKills;
				if (oData.aParticipant[i].eState === "winner") {
					this.congratulations_text.visible = true;
					setTimeout(() => {
						this.game.renderer.snapshot((image) => {
							this.compressImage(image.src, (compressedDataURL) => {
								this.dataURLtoBlob(compressedDataURL, (blob) => {
									this.uploadToS3(blob);
								});
							});
						});
					}, 200);


					// this.setFirework()
				} else if (oData.aParticipant[i].eState === "lost") {
					this.hideResultScreenButton();
					this.congratulations_text.visible = false;
					this.text_youLost.visible = true;
				} else if (oData.aParticipant[i].eState === "playing") {
					this.hideResultScreenButton();
					this.congratulations_text.visible = false;
					this.text_youLost.visible = true;
				} else if (oData.aParticipant[i].eState === "left") {
					this.hideResultScreenButton();
					this.congratulations_text.visible = false;
					this.text_youLost.visible = true;
				} else if (oData.aParticipant[i].eState === "ame") {
					this.hideResultScreenButton();
					this.congratulations_text.visible = false;
					this.text_youLost.visible = true;
					this.text_youLost.setText('Auto Move Exhausted');
				}
			}
			if (oData.aParticipant[i].eState === "winner") {

				if (this.oGameManager.nMaxPlayer === 2) {
					this.gameBoard.setPosition(0, -200);
				}

				let user = this.oPlayerManager.playerPrefabList.get(oData.aParticipant[i].iUserId);

				switch (user.tokenColor) {
					case 'b': // blue
						this.gameBoard.oppPlayerOneCrown.setVisible(true);
						break;
					case 'r': // red
						this.gameBoard.oppPlayerTwoCrown.setVisible(true);
						break;
					case 'y': // green
						this.gameBoard.oppPlayerThreeCrown.setVisible(true);
						break;
					case 'g': // yellow
						this.gameBoard.ownPlayerCrown.setVisible(true);
						break;
				}

			}
		}

		this.container_result_popup.visible = true;
		let xPos = 595, yPos = 1313;
		let flag = false;
		// Sound Stop
		for (let i = 0; i < this.sound.sounds.length; i++) {
			this.oSoundManager.stopSound(this.sound.sounds[i], false);
		}

		for (let i = 0; i < oData.aParticipant.length; i++) {
			this.resultPrefab = new ResultPrefab(this, xPos, yPos + (i * 106));
			this.container_result_popup.add(this.resultPrefab);
			this.resultPrefab.setResultData(oData.aParticipant[i], i, playerData);
			if (oData.aParticipant[i].nRank == 1 && oData.aParticipant[i].iUserId == this.ownPlayer.name) {
				flag = true;
			}
		}
		if (flag == true) {
			// Sound Play
			// this.oSoundManager.playSound(this.oSoundManager.youWinSound, false);
		} else {
			// Sound Play
			// this.oSoundManager.playSound(this.oSoundManager.youLoseSound, false);
		}
	}

	setPlayerDashBoardInfo(data) {
		if (this.oGameManager.eGameType === "classic") {
			for (let i = 0; i < data.aParticipant.length; i++) {
				if (data.aParticipant[i].sRootSocket === this.oSocketManager.oRootSocketConn.id) {
					for (let j = 0; j < data.aParticipant[i].aPawn.length; j++) {
						if (data.aParticipant[i].aPawn[j] != 0) {
							this.oPlayerManager.setMovePawnRefresh(data.aParticipant[i].iUserId, data.aParticipant[i].aPawn[j], data.aParticipant[i].aPawn[j], j);
						}
					}
				}
				else {
					for (let j = 0; j < data.aParticipant[i].aPawn.length; j++) {
						if (data.aParticipant[i].aPawn[j] != 0) {
							this.oPlayerManager.setMovePawnRefresh(data.aParticipant[i].iUserId, data.aParticipant[i].aPawn[j], data.aParticipant[i].aPawn[j], j);
						}
					}
				}
			}
		}
	}

	playerState(data) {
		console.log("Game State:- ", data.eState)
		if (data.eState === "playing") {
			this.container_player_waiting.visible = false;
			this.container_game_finished.visible = false;

			// Sound
			// this.oSoundManager.stopSound(this.oSoundManager.ludoKingMusicSound, true);
			// this.oSoundManager.backgroundMusic.setVolume(0.1); // volume: 0 to 1

		}

		if (data.eState === "initialized" || data.eState === "playing") {
			this.matchPlayerCounter = 0;
			this.container_game_finished.visible = false;
			this.showMatchMakingScreen(data);
			for (let i = 0; i < data.aParticipant.length; i++) {
				if (data.aParticipant[i].sRootSocket === this.oSocketManager.oRootSocketConn.id) {
					this.oGameManager.sOwnPlayerId = data.aParticipant[i].iUserId;
				}
			}
			let oUserData = data.aParticipant.find(item => item?.iUserId === this.oGameManager.sOwnPlayerId);
			let oTokenData = data.aPlayer.find(item => item?.user_id === oUserData.iUserId);
			this.setMatchOurData(oUserData, oTokenData);
			let oOppoData = data.aParticipant.find(item => item?.iUserId !== this.oGameManager.sOwnPlayerId);
			let oOppoTokenData = data.aPlayer.find(item => item?.user_id === oOppoData.iUserId);
			this.setMatchOpponentData(oOppoData, oOppoTokenData);
		}

		if (data.eState === "waiting") {
			this.container_searching_player.visible = true
			this.container_player_waiting.visible = true;
			this.container_game_finished.visible = false;
			this.matchPlayerCounter = 0;
			this.showMatchMakingScreen(data);
			// Sound
			// this.oSoundManager.playSound(this.oSoundManager.ludoKingMusicSound, true);
			// this.oSoundManager.ludoKingMusicSound.setVolume(0.5); // volume: 0 to 1
		}
	}

	setMatchOurData({ sUserName, sRootSocket }, { sToken }) {
		this.playerOnePrefab.setUserJoinedInfo(sToken, sRootSocket);
		this.playerOnePrefab.setVisible(true);
	}
	setMatchOpponentData({ sUserName, sRootSocket }, { sToken }) {
		this.playerTwoPrefab.setUserJoinedInfo(sToken, sRootSocket);
		this.playerTwoPrefab.setVisible(true);
		this.hideMatchMakingPopup();
	}

	hideMatchMakingPopup() {
		let tempSecond = 3;
		this.gameExitButton.setVisible(false);
		this.search_player_bar_text.setVisible(true);
		this.search_player_bar.setVisible(false);
		this.text_player_waiting.setVisible(true);
		this.text_player_waiting.setText(`Game will Start in ${tempSecond}s ...`);
		tempSecond--;
		let hideMatchMakingPopupInterval = setInterval(() => {
			this.text_player_waiting.setText(`Game will Start in ${tempSecond}s ...`);
			tempSecond--;
			if (tempSecond < 0) {
				this.text_player_waiting.setText(`Game is Starting...`);
				clearInterval(hideMatchMakingPopupInterval);
			}
		}, 1000)
	}

	sendMatchMakingData({ sUserName, sRootSocket, iUserId }, sToken) {
		console.log("Inside MM");
		if (iUserId === this.oGameManager.sOwnPlayerId && this.matchPlayerCounter === 0) {
			console.log("P1 Set");
			this.playerOnePrefab.setUserJoinedInfo(sToken, sRootSocket);
			this.playerOnePrefab.setVisible(true);
			this.matchPlayerCounter++;
			return;
		}
		if (this.matchPlayerCounter === 1 && this.oGameManager.nMaxPlayer === 2) {
			console.log("P2 Set");
			this.playerTwoPrefab.setUserJoinedInfo(sToken, sRootSocket);
			this.hideMatchMakingPopup();
			this.playerTwoPrefab.setVisible(true);
			this.matchPlayerCounter++;
			return;
		}
		if (this.matchPlayerCounter === 1 && this.oGameManager.nMaxPlayer === 3) {
			this.playerThreePrefab.setUserJoinedInfo(sToken);
			this.matchPlayerCounter++;
			return;
		}
		if (this.matchPlayerCounter === 2 && this.oGameManager.nMaxPlayer === 3) {
			this.playerFourPrefab.setUserJoinedInfo(sToken);
			this.matchPlayerCounter++;
			return;
		}
		if (this.matchPlayerCounter === 1 && this.oGameManager.nMaxPlayer === 4) {
			this.playerTwoPrefab.setUserJoinedInfo(sToken);
			this.matchPlayerCounter++;
			return;
		}
		if (this.matchPlayerCounter === 2 && this.oGameManager.nMaxPlayer === 4) {
			this.playerThreePrefab.setUserJoinedInfo(sToken);
			this.matchPlayerCounter++;
			return;
		}
		if (this.matchPlayerCounter === 3 && this.oGameManager.nMaxPlayer === 4) {
			this.playerFourPrefab.setUserJoinedInfo(sToken);
			this.matchPlayerCounter++;
			return;
		}
	}

	showMatchMakingScreen({ nMaxPlayer }) {
		this.gameExitButton.startTimerInitReverse(this.gameExitButton.x, this.gameExitButton.y, 30)

		setTimeout(() => {
			switch (nMaxPlayer) {
				case 2:
					// this.playerOnePrefab.startAwake(this.playerOnePrefab, this.oGameManager.nBoardFee);
					// this.playerTwoPrefab.playerAvatarSprite.setTexture('player-2-avatar');
					// this.playerTwoPrefab.startAwake(this.playerTwoPrefab, this.oGameManager.nBoardFee);
					break;

				case 3:
					// this.playerOnePrefab.startAwake(this.playerOnePrefab, this.oGameManager.nBoardFee);
					this.playerThreePrefab.playerAvatarSprite.setTexture('player-2-avatar');
					this.playerThreePrefab.startAwake(this.playerThreePrefab, this.oGameManager.nBoardFee);
					this.playerFourPrefab.playerAvatarSprite.setTexture('player-3-avatar');
					// this.playerFourPrefab.startAwake(this.playerFourPrefab, this.oGameManager.nBoardFee);
					break;

				case 4:
					// this.playerOnePrefab.startAwake(this.playerOnePrefab, this.oGameManager.nBoardFee);
					this.playerTwoPrefab.playerAvatarSprite.setTexture('player-2-avatar');
					// this.playerTwoPrefab.startAwake(this.playerTwoPrefab, this.oGameManager.nBoardFee);
					this.playerThreePrefab.playerAvatarSprite.setTexture('player-3-avatar');
					// this.playerThreePrefab.startAwake(this.playerThreePrefab, this.oGameManager.nBoardFee);
					this.playerFourPrefab.playerAvatarSprite.setTexture('player-4-avatar');
					// this.playerFourPrefab.startAwake(this.playerFourPrefab, this.oGameManager.nBoardFee);
					break;
			}
		}, 500);
	}

	setFirework() {
		let particleColorArr = ["yellow-particle", "red-particle", "green-particle", "blue-particle"];
		this.fireInterval = setInterval(() => {
			this.tweenFire(Phaser.Math.Between(240, 840), Phaser.Math.Between(460, 760), Phaser.Math.Between(0, 100), `${particleColorArr[Math.floor(Math.random() * particleColorArr.length)]}`);
		}, 800)
	}

	tweenFire(setX, setY, setDelay, particleColor) {
		let fire = this.add.image(setX, setY, `${particleColor}`);
		fire.setScale(0)
		this.container_firework.add(fire);

		this.tweens.add({
			targets: fire,
			scaleX: { from: 0.2, to: 0.05 },
			scaleY: { from: 0.2, to: 0.05 },
			x: setX,
			y: { from: setY + 800, to: setY },
			duration: 600,
			delay: setDelay,
			onComplete: () => {
				fire.destroy();
				this.particlesFire(setX, setY, particleColor);
			}
		})
	}

	particlesFire(x, y, particleColor) {

		let fireParticles = this.add.particles(`${particleColor}`);
		this.container_firework.add(fireParticles);

		let emitter = fireParticles.createEmitter({
			speed: { min: 10, max: 600 },
			angle: { min: 360, max: 0 },
			lifespan: { min: 700, max: 1200 },
			gravityY: 1000,
			scale: { start: 0.15, end: 0 },
			quantity: 100,
			on: false
		});

		// Position the emitter where you want the firework to explode
		emitter.setPosition(x, y);

		// Explode once
		emitter.explode(200, x, y);

		setTimeout(() => {
			emitter.stop();
		}, 2000);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
