// You can write more code here
/* START OF COMPILED CODE */

class GameBoard extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x ?? 0, y ?? 0);

    // boardContainer
    const boardContainer = scene.add.container(0, 0);
    boardContainer.visible = false;
    this.add(boardContainer);

    // boardBorderBackground
    const boardBorderBackground = scene.add.image(0, 0, "board-back-border");
    boardBorderBackground.scaleX = 1.04;
    boardBorderBackground.scaleY = 1.04;
    boardBorderBackground.visible = false;
    boardBorderBackground.alpha = 0.8;
    boardBorderBackground.alphaTopLeft = 0.8;
    boardBorderBackground.alphaTopRight = 0.8;
    boardBorderBackground.alphaBottomLeft = 0.8;
    boardBorderBackground.alphaBottomRight = 0.8;
    boardContainer.add(boardBorderBackground);

    // board
    const board = scene.add.image(0, 1, "board-classic-yellow");
    boardContainer.add(board);

    // turn_highlighter_blue
    const turn_highlighter_blue = scene.add.image(
      306,
      306,
      "turn_highlighter_blue"
    );
    turn_highlighter_blue.alpha = 0;
    turn_highlighter_blue.alphaTopLeft = 0;
    turn_highlighter_blue.alphaTopRight = 0;
    turn_highlighter_blue.alphaBottomLeft = 0;
    turn_highlighter_blue.alphaBottomRight = 0;
    boardContainer.add(turn_highlighter_blue);

    // turn_highlighter_green
    const turn_highlighter_green = scene.add.image(
      306,
      -306,
      "turn_highlighter_yellow"
    );
    turn_highlighter_green.alpha = 0;
    turn_highlighter_green.alphaTopLeft = 0;
    turn_highlighter_green.alphaTopRight = 0;
    turn_highlighter_green.alphaBottomLeft = 0;
    turn_highlighter_green.alphaBottomRight = 0;
    boardContainer.add(turn_highlighter_green);

    // turn_highlighter_red
    const turn_highlighter_red = scene.add.image(
      -306,
      306,
      "turn_highlighter_red"
    );
    turn_highlighter_red.alpha = 0;
    turn_highlighter_red.alphaTopLeft = 0;
    turn_highlighter_red.alphaTopRight = 0;
    turn_highlighter_red.alphaBottomLeft = 0;
    turn_highlighter_red.alphaBottomRight = 0;
    boardContainer.add(turn_highlighter_red);

    // turn_highlighter_yellow
    const turn_highlighter_yellow = scene.add.image(
      -306,
      -306,
      "turn_highlighter_green"
    );
    turn_highlighter_yellow.alpha = 0;
    turn_highlighter_yellow.alphaTopLeft = 0;
    turn_highlighter_yellow.alphaTopRight = 0;
    turn_highlighter_yellow.alphaBottomLeft = 0;
    turn_highlighter_yellow.alphaBottomRight = 0;
    boardContainer.add(turn_highlighter_yellow);

    // container_player_yellow_score
    const container_player_yellow_score = scene.add.container(-307, -305);
    boardContainer.add(container_player_yellow_score);

    // player_yellow_score
    const player_yellow_score = scene.add.text(0, 0, "", {});
    player_yellow_score.setOrigin(0.5, 0.5);
    player_yellow_score.visible = false;
    player_yellow_score.text = "Score\n0";
    player_yellow_score.setStyle({
      align: "center",
      fontFamily: "Montserrat-Bold",
      fontSize: "36px",
      fontStyle: "bold",
    });
    container_player_yellow_score.add(player_yellow_score);

    // player_yellow_score_inc
    const player_yellow_score_inc = scene.add.text(0, 0, "", {});
    player_yellow_score_inc.setOrigin(0.5, 0.5);
    player_yellow_score_inc.visible = false;
    player_yellow_score_inc.setStyle({
      align: "center",
      fontFamily: "Montserrat-Bold",
      fontSize: "60px",
      fontStyle: "bold",
    });
    container_player_yellow_score.add(player_yellow_score_inc);

    // container_player_green_score
    const container_player_green_score = scene.add.container(306, -305);
    boardContainer.add(container_player_green_score);

    // player_green_score
    const player_green_score = scene.add.text(0, 0, "", {});
    player_green_score.setOrigin(0.5, 0.5);
    player_green_score.visible = false;
    player_green_score.text = "Score\n0";
    player_green_score.setStyle({
      align: "center",
      fontFamily: "Montserrat-Bold",
      fontSize: "36px",
      fontStyle: "bold",
    });
    container_player_green_score.add(player_green_score);

    // player_green_score_inc
    const player_green_score_inc = scene.add.text(0, 0, "", {});
    player_green_score_inc.setOrigin(0.5, 0.5);
    player_green_score_inc.visible = false;
    player_green_score_inc.setStyle({
      align: "center",
      fontFamily: "Montserrat-Bold",
      fontSize: "60px",
      fontStyle: "bold",
    });
    container_player_green_score.add(player_green_score_inc);

    // container_player_blue_score
    const container_player_blue_score = scene.add.container(307, 308);
    boardContainer.add(container_player_blue_score);

    // player_blue_score
    const player_blue_score = scene.add.text(0, 0, "", {});
    player_blue_score.setOrigin(0.5, 0.5);
    player_blue_score.visible = false;
    player_blue_score.text = "Score\n0";
    player_blue_score.setStyle({
      align: "center",
      fontFamily: "Montserrat-Bold",
      fontSize: "36px",
      fontStyle: "bold",
    });
    container_player_blue_score.add(player_blue_score);

    // player_blue_score_inc
    const player_blue_score_inc = scene.add.text(0, 0, "", {});
    player_blue_score_inc.setOrigin(0.5, 0.5);
    player_blue_score_inc.visible = false;
    player_blue_score_inc.setStyle({
      align: "center",
      fontFamily: "Montserrat-Bold",
      fontSize: "60px",
      fontStyle: "bold",
    });
    container_player_blue_score.add(player_blue_score_inc);

    // container_player_red_score
    const container_player_red_score = scene.add.container(-308, 309);
    boardContainer.add(container_player_red_score);

    // player_red_score
    const player_red_score = scene.add.text(0, 0, "", {});
    player_red_score.setOrigin(0.5, 0.5);
    player_red_score.visible = false;
    player_red_score.text = "Score\n0";
    player_red_score.setStyle({
      align: "center",
      fontFamily: "Montserrat-Bold",
      fontSize: "36px",
      fontStyle: "bold",
    });
    container_player_red_score.add(player_red_score);

    // player_red_score_inc
    const player_red_score_inc = scene.add.text(0, 0, "", {});
    player_red_score_inc.setOrigin(0.5, 0.5);
    player_red_score_inc.visible = false;
    player_red_score_inc.setStyle({
      align: "center",
      fontFamily: "Montserrat-Bold",
      fontSize: "60px",
      fontStyle: "bold",
    });
    container_player_red_score.add(player_red_score_inc);

    // container_board_star
    const container_board_star = scene.add.container(0, 0);
    container_board_star.visible = false;
    this.add(container_board_star);

    // star1
    const star1 = scene.add.image(-341, 68, "star");
    container_board_star.add(star1);

    // star2
    const star2 = scene.add.image(-68, -340, "star");
    container_board_star.add(star2);

    // star3
    const star3 = scene.add.image(340, -68, "star");
    container_board_star.add(star3);

    // star4
    const star4 = scene.add.image(67, 341, "star");
    container_board_star.add(star4);

    // container_mapping_board
    const container_mapping_board = scene.add.container(0, 0);
    container_mapping_board.visible = false;
    this.add(container_mapping_board);

    // one
    const one = scene.add.rectangle(-68, 409, 60, 60);
    one.name = "one";
    one.fillColor = 12759024;
    one.isStroked = true;
    one.strokeColor = 0;
    one.strokeAlpha = 3;
    one.lineWidth = 3;
    container_mapping_board.add(one);

    // two
    const two = scene.add.rectangle(-68, 341, 60, 60);
    two.name = "two";
    two.fillColor = 12759024;
    two.isStroked = true;
    two.strokeColor = 0;
    two.strokeAlpha = 3;
    two.lineWidth = 3;
    container_mapping_board.add(two);

    // three
    const three = scene.add.rectangle(-68, 272, 60, 60);
    three.name = "three";
    three.fillColor = 12759024;
    three.isStroked = true;
    three.strokeColor = 0;
    three.strokeAlpha = 3;
    three.lineWidth = 3;
    container_mapping_board.add(three);

    // four
    const four = scene.add.rectangle(-68, 204, 60, 60);
    four.name = "four";
    four.fillColor = 12759024;
    four.isStroked = true;
    four.strokeColor = 0;
    four.strokeAlpha = 3;
    four.lineWidth = 3;
    container_mapping_board.add(four);

    // five
    const five = scene.add.rectangle(-68, 136, 60, 60);
    five.name = "five";
    five.fillColor = 12759024;
    five.isStroked = true;
    five.strokeColor = 0;
    five.strokeAlpha = 3;
    five.lineWidth = 3;
    container_mapping_board.add(five);

    // six
    const six = scene.add.rectangle(-135, 68, 60, 60);
    six.name = "six";
    six.fillColor = 12759024;
    six.isStroked = true;
    six.strokeColor = 0;
    six.strokeAlpha = 3;
    six.lineWidth = 3;
    container_mapping_board.add(six);

    // seven
    const seven = scene.add.rectangle(-204, 68, 60, 60);
    seven.name = "seven";
    seven.fillColor = 12759024;
    seven.isStroked = true;
    seven.strokeColor = 0;
    seven.strokeAlpha = 3;
    seven.lineWidth = 3;
    container_mapping_board.add(seven);

    // eight
    const eight = scene.add.rectangle(-272, 68, 60, 60);
    eight.name = "eight";
    eight.fillColor = 12759024;
    eight.isStroked = true;
    eight.strokeColor = 0;
    eight.strokeAlpha = 3;
    eight.lineWidth = 3;
    container_mapping_board.add(eight);

    // nine
    const nine = scene.add.rectangle(-341, 68, 60, 60);
    nine.name = "nine";
    nine.fillColor = 12759024;
    nine.isStroked = true;
    nine.strokeColor = 0;
    nine.strokeAlpha = 3;
    nine.lineWidth = 3;
    container_mapping_board.add(nine);

    // ten
    const ten = scene.add.rectangle(-408, 68, 60, 60);
    ten.name = "ten";
    ten.fillColor = 12759024;
    ten.isStroked = true;
    ten.strokeColor = 0;
    ten.strokeAlpha = 3;
    ten.lineWidth = 3;
    container_mapping_board.add(ten);

    // eleven
    const eleven = scene.add.rectangle(-478, 68, 60, 60);
    eleven.name = "eleven";
    eleven.fillColor = 12759024;
    eleven.isStroked = true;
    eleven.strokeColor = 0;
    eleven.strokeAlpha = 3;
    eleven.lineWidth = 3;
    container_mapping_board.add(eleven);

    // twelve
    const twelve = scene.add.rectangle(-478, 0, 60, 60);
    twelve.name = "twelve";
    twelve.fillColor = 12759024;
    twelve.isStroked = true;
    twelve.strokeColor = 0;
    twelve.strokeAlpha = 3;
    twelve.lineWidth = 3;
    container_mapping_board.add(twelve);

    // thirteen
    const thirteen = scene.add.rectangle(-478, -68, 60, 60);
    thirteen.name = "thirteen";
    thirteen.fillColor = 12759024;
    thirteen.isStroked = true;
    thirteen.strokeColor = 0;
    thirteen.strokeAlpha = 3;
    thirteen.lineWidth = 3;
    container_mapping_board.add(thirteen);

    // fourteen
    const fourteen = scene.add.rectangle(-409, -68, 60, 60);
    fourteen.name = "fourteen";
    fourteen.fillColor = 12759024;
    fourteen.isStroked = true;
    fourteen.strokeColor = 0;
    fourteen.strokeAlpha = 3;
    fourteen.lineWidth = 3;
    container_mapping_board.add(fourteen);

    // fifteen
    const fifteen = scene.add.rectangle(-341, -68, 60, 60);
    fifteen.name = "fifteen";
    fifteen.fillColor = 12759024;
    fifteen.isStroked = true;
    fifteen.strokeColor = 0;
    fifteen.strokeAlpha = 3;
    fifteen.lineWidth = 3;
    container_mapping_board.add(fifteen);

    // sixteen
    const sixteen = scene.add.rectangle(-272, -68, 60, 60);
    sixteen.name = "sixteen";
    sixteen.fillColor = 12759024;
    sixteen.isStroked = true;
    sixteen.strokeColor = 0;
    sixteen.strokeAlpha = 3;
    sixteen.lineWidth = 3;
    container_mapping_board.add(sixteen);

    // seventeen
    const seventeen = scene.add.rectangle(-204, -68, 60, 60);
    seventeen.name = "seventeen";
    seventeen.fillColor = 12759024;
    seventeen.isStroked = true;
    seventeen.strokeColor = 0;
    seventeen.strokeAlpha = 3;
    seventeen.lineWidth = 3;
    container_mapping_board.add(seventeen);

    // eighteen
    const eighteen = scene.add.rectangle(-135, -68, 60, 60);
    eighteen.name = "eighteen";
    eighteen.fillColor = 12759024;
    eighteen.isStroked = true;
    eighteen.strokeColor = 0;
    eighteen.strokeAlpha = 3;
    eighteen.lineWidth = 3;
    container_mapping_board.add(eighteen);

    // nineteen
    const nineteen = scene.add.rectangle(-68, -136, 60, 60);
    nineteen.name = "nineteen";
    nineteen.fillColor = 12759024;
    nineteen.isStroked = true;
    nineteen.strokeColor = 0;
    nineteen.strokeAlpha = 3;
    nineteen.lineWidth = 3;
    container_mapping_board.add(nineteen);

    // twenty
    const twenty = scene.add.rectangle(-68, -204, 60, 60);
    twenty.name = "twenty";
    twenty.fillColor = 12759024;
    twenty.isStroked = true;
    twenty.strokeColor = 0;
    twenty.strokeAlpha = 3;
    twenty.lineWidth = 3;
    container_mapping_board.add(twenty);

    // twentyOne
    const twentyOne = scene.add.rectangle(-68, -272, 60, 60);
    twentyOne.name = "twentyOne";
    twentyOne.fillColor = 12759024;
    twentyOne.isStroked = true;
    twentyOne.strokeColor = 0;
    twentyOne.strokeAlpha = 3;
    twentyOne.lineWidth = 3;
    container_mapping_board.add(twentyOne);

    // twentyTwo
    const twentyTwo = scene.add.rectangle(-68, -341, 60, 60);
    twentyTwo.name = "twentyTwo";
    twentyTwo.fillColor = 12759024;
    twentyTwo.isStroked = true;
    twentyTwo.strokeColor = 0;
    twentyTwo.strokeAlpha = 3;
    twentyTwo.lineWidth = 3;
    container_mapping_board.add(twentyTwo);

    // twentyThree
    const twentyThree = scene.add.rectangle(-68, -409, 60, 60);
    twentyThree.name = "twentyThree";
    twentyThree.fillColor = 12759024;
    twentyThree.isStroked = true;
    twentyThree.strokeColor = 0;
    twentyThree.strokeAlpha = 3;
    twentyThree.lineWidth = 3;
    container_mapping_board.add(twentyThree);

    // twentyFour
    const twentyFour = scene.add.rectangle(-68, -478, 60, 60);
    twentyFour.name = "twentyFour";
    twentyFour.fillColor = 12759024;
    twentyFour.isStroked = true;
    twentyFour.strokeColor = 0;
    twentyFour.strokeAlpha = 3;
    twentyFour.lineWidth = 3;
    container_mapping_board.add(twentyFour);

    // twentyFive
    const twentyFive = scene.add.rectangle(0, -478, 60, 60);
    twentyFive.name = "twentyFive";
    twentyFive.fillColor = 12759024;
    twentyFive.isStroked = true;
    twentyFive.strokeColor = 0;
    twentyFive.strokeAlpha = 3;
    twentyFive.lineWidth = 3;
    container_mapping_board.add(twentyFive);

    // twentySix
    const twentySix = scene.add.rectangle(68, -478, 60, 60);
    twentySix.name = "twentySix";
    twentySix.fillColor = 12759024;
    twentySix.isStroked = true;
    twentySix.strokeColor = 0;
    twentySix.strokeAlpha = 3;
    twentySix.lineWidth = 3;
    container_mapping_board.add(twentySix);

    // twentySeven
    const twentySeven = scene.add.rectangle(68, -409, 60, 60);
    twentySeven.name = "twentySeven";
    twentySeven.fillColor = 12759024;
    twentySeven.isStroked = true;
    twentySeven.strokeColor = 0;
    twentySeven.strokeAlpha = 3;
    twentySeven.lineWidth = 3;
    container_mapping_board.add(twentySeven);

    // twentyEight
    const twentyEight = scene.add.rectangle(68, -341, 60, 60);
    twentyEight.name = "twentyEight";
    twentyEight.fillColor = 12759024;
    twentyEight.isStroked = true;
    twentyEight.strokeColor = 0;
    twentyEight.strokeAlpha = 3;
    twentyEight.lineWidth = 3;
    container_mapping_board.add(twentyEight);

    // twentyNine
    const twentyNine = scene.add.rectangle(68, -272, 60, 60);
    twentyNine.name = "twentyNine";
    twentyNine.fillColor = 12759024;
    twentyNine.isStroked = true;
    twentyNine.strokeColor = 0;
    twentyNine.strokeAlpha = 3;
    twentyNine.lineWidth = 3;
    container_mapping_board.add(twentyNine);

    // thirty
    const thirty = scene.add.rectangle(68, -204, 60, 60);
    thirty.name = "thirty";
    thirty.fillColor = 12759024;
    thirty.isStroked = true;
    thirty.strokeColor = 0;
    thirty.strokeAlpha = 3;
    thirty.lineWidth = 3;
    container_mapping_board.add(thirty);

    // thirtyOne
    const thirtyOne = scene.add.rectangle(68, -135, 60, 60);
    thirtyOne.name = "thirtyOne";
    thirtyOne.fillColor = 12759024;
    thirtyOne.isStroked = true;
    thirtyOne.strokeColor = 0;
    thirtyOne.strokeAlpha = 3;
    thirtyOne.lineWidth = 3;
    container_mapping_board.add(thirtyOne);

    // thirtyTwo
    const thirtyTwo = scene.add.rectangle(135, -68, 60, 60);
    thirtyTwo.name = "thirtyTwo";
    thirtyTwo.fillColor = 12759024;
    thirtyTwo.isStroked = true;
    thirtyTwo.strokeColor = 0;
    thirtyTwo.strokeAlpha = 3;
    thirtyTwo.lineWidth = 3;
    container_mapping_board.add(thirtyTwo);

    // thirtyThree
    const thirtyThree = scene.add.rectangle(203, -68, 60, 60);
    thirtyThree.name = "thirtyThree";
    thirtyThree.fillColor = 12759024;
    thirtyThree.isStroked = true;
    thirtyThree.strokeColor = 0;
    thirtyThree.strokeAlpha = 3;
    thirtyThree.lineWidth = 3;
    container_mapping_board.add(thirtyThree);

    // thirtyFour
    const thirtyFour = scene.add.rectangle(272, -68, 60, 60);
    thirtyFour.name = "thirtyFour";
    thirtyFour.fillColor = 12759024;
    thirtyFour.isStroked = true;
    thirtyFour.strokeColor = 0;
    thirtyFour.strokeAlpha = 3;
    thirtyFour.lineWidth = 3;
    container_mapping_board.add(thirtyFour);

    // thirtyFive
    const thirtyFive = scene.add.rectangle(341, -68, 60, 60);
    thirtyFive.name = "thirtyFive";
    thirtyFive.fillColor = 12759024;
    thirtyFive.isStroked = true;
    thirtyFive.strokeColor = 0;
    thirtyFive.strokeAlpha = 3;
    thirtyFive.lineWidth = 3;
    container_mapping_board.add(thirtyFive);

    // thirtySix
    const thirtySix = scene.add.rectangle(409, -68, 60, 60);
    thirtySix.name = "thirtySix";
    thirtySix.fillColor = 12759024;
    thirtySix.isStroked = true;
    thirtySix.strokeColor = 0;
    thirtySix.strokeAlpha = 3;
    thirtySix.lineWidth = 3;
    container_mapping_board.add(thirtySix);

    // thirtySeven
    const thirtySeven = scene.add.rectangle(478, -68, 60, 60);
    thirtySeven.name = "thirtySeven";
    thirtySeven.fillColor = 12759024;
    thirtySeven.isStroked = true;
    thirtySeven.strokeColor = 0;
    thirtySeven.strokeAlpha = 3;
    thirtySeven.lineWidth = 3;
    container_mapping_board.add(thirtySeven);

    // thirtyEight
    const thirtyEight = scene.add.rectangle(478, 0, 60, 60);
    thirtyEight.name = "thirtyEight";
    thirtyEight.fillColor = 12759024;
    thirtyEight.isStroked = true;
    thirtyEight.strokeColor = 0;
    thirtyEight.strokeAlpha = 3;
    thirtyEight.lineWidth = 3;
    container_mapping_board.add(thirtyEight);

    // thirtyNine
    const thirtyNine = scene.add.rectangle(478, 68, 60, 60);
    thirtyNine.name = "thirtyNine";
    thirtyNine.fillColor = 12759024;
    thirtyNine.isStroked = true;
    thirtyNine.strokeColor = 0;
    thirtyNine.strokeAlpha = 3;
    thirtyNine.lineWidth = 3;
    container_mapping_board.add(thirtyNine);

    // fourty
    const fourty = scene.add.rectangle(409, 68, 60, 60);
    fourty.name = "fourty";
    fourty.fillColor = 12759024;
    fourty.isStroked = true;
    fourty.strokeColor = 0;
    fourty.strokeAlpha = 3;
    fourty.lineWidth = 3;
    container_mapping_board.add(fourty);

    // fourtyOne
    const fourtyOne = scene.add.rectangle(341, 68, 60, 60);
    fourtyOne.name = "fourtyOne";
    fourtyOne.fillColor = 12759024;
    fourtyOne.isStroked = true;
    fourtyOne.strokeColor = 0;
    fourtyOne.strokeAlpha = 3;
    fourtyOne.lineWidth = 3;
    container_mapping_board.add(fourtyOne);

    // fourtyTwo
    const fourtyTwo = scene.add.rectangle(272, 68, 60, 60);
    fourtyTwo.name = "fourtyTwo";
    fourtyTwo.fillColor = 12759024;
    fourtyTwo.isStroked = true;
    fourtyTwo.strokeColor = 0;
    fourtyTwo.strokeAlpha = 3;
    fourtyTwo.lineWidth = 3;
    container_mapping_board.add(fourtyTwo);

    // fourtyThree
    const fourtyThree = scene.add.rectangle(203, 68, 60, 60);
    fourtyThree.name = "fourtyThree";
    fourtyThree.fillColor = 12759024;
    fourtyThree.isStroked = true;
    fourtyThree.strokeColor = 0;
    fourtyThree.strokeAlpha = 3;
    fourtyThree.lineWidth = 3;
    container_mapping_board.add(fourtyThree);

    // fourtyFour
    const fourtyFour = scene.add.rectangle(135, 68, 60, 60);
    fourtyFour.name = "fourtyFour";
    fourtyFour.fillColor = 12759024;
    fourtyFour.isStroked = true;
    fourtyFour.strokeColor = 0;
    fourtyFour.strokeAlpha = 3;
    fourtyFour.lineWidth = 3;
    container_mapping_board.add(fourtyFour);

    // fourtyFive
    const fourtyFive = scene.add.rectangle(68, 136, 60, 60);
    fourtyFive.name = "fourtyFive";
    fourtyFive.fillColor = 12759024;
    fourtyFive.isStroked = true;
    fourtyFive.strokeColor = 0;
    fourtyFive.strokeAlpha = 3;
    fourtyFive.lineWidth = 3;
    container_mapping_board.add(fourtyFive);

    // fourtySix
    const fourtySix = scene.add.rectangle(68, 204, 60, 60);
    fourtySix.name = "fourtySix";
    fourtySix.fillColor = 12759024;
    fourtySix.isStroked = true;
    fourtySix.strokeColor = 0;
    fourtySix.strokeAlpha = 3;
    fourtySix.lineWidth = 3;
    container_mapping_board.add(fourtySix);

    // fourtySeven
    const fourtySeven = scene.add.rectangle(68, 272, 60, 60);
    fourtySeven.name = "fourtySeven";
    fourtySeven.fillColor = 12759024;
    fourtySeven.isStroked = true;
    fourtySeven.strokeColor = 0;
    fourtySeven.strokeAlpha = 3;
    fourtySeven.lineWidth = 3;
    container_mapping_board.add(fourtySeven);

    // fourtyEight
    const fourtyEight = scene.add.rectangle(68, 341, 60, 60);
    fourtyEight.name = "fourtyEight";
    fourtyEight.fillColor = 12759024;
    fourtyEight.isStroked = true;
    fourtyEight.strokeColor = 0;
    fourtyEight.strokeAlpha = 3;
    fourtyEight.lineWidth = 3;
    container_mapping_board.add(fourtyEight);

    // fourtyNine
    const fourtyNine = scene.add.rectangle(68, 409, 60, 60);
    fourtyNine.name = "fourtyNine";
    fourtyNine.fillColor = 12759024;
    fourtyNine.isStroked = true;
    fourtyNine.strokeColor = 0;
    fourtyNine.strokeAlpha = 3;
    fourtyNine.lineWidth = 3;
    container_mapping_board.add(fourtyNine);

    // fifty
    const fifty = scene.add.rectangle(68, 478, 60, 60);
    fifty.name = "fifty";
    fifty.fillColor = 12759024;
    fifty.isStroked = true;
    fifty.strokeColor = 0;
    fifty.strokeAlpha = 3;
    fifty.lineWidth = 3;
    container_mapping_board.add(fifty);

    // fiftyOne
    const fiftyOne = scene.add.rectangle(0, 478, 60, 60);
    fiftyOne.name = "fiftyOne";
    fiftyOne.fillColor = 12759024;
    fiftyOne.isStroked = true;
    fiftyOne.strokeColor = 0;
    fiftyOne.strokeAlpha = 3;
    fiftyOne.lineWidth = 3;
    container_mapping_board.add(fiftyOne);

    // fiftyTwo
    const fiftyTwo = scene.add.rectangle(-68, 478, 60, 60);
    fiftyTwo.name = "fiftyTwo";
    fiftyTwo.fillColor = 12759024;
    fiftyTwo.isStroked = true;
    fiftyTwo.strokeColor = 0;
    fiftyTwo.strokeAlpha = 3;
    fiftyTwo.lineWidth = 3;
    container_mapping_board.add(fiftyTwo);

    // fiftyThree
    const fiftyThree = scene.add.rectangle(0, 409, 60, 60);
    fiftyThree.name = "fiftyThree";
    fiftyThree.fillColor = 12759024;
    fiftyThree.isStroked = true;
    fiftyThree.strokeColor = 0;
    fiftyThree.strokeAlpha = 3;
    fiftyThree.lineWidth = 3;
    container_mapping_board.add(fiftyThree);

    // fiftyFour
    const fiftyFour = scene.add.rectangle(0, 341, 60, 60);
    fiftyFour.name = "fiftyFour";
    fiftyFour.fillColor = 12759024;
    fiftyFour.isStroked = true;
    fiftyFour.strokeColor = 0;
    fiftyFour.strokeAlpha = 3;
    fiftyFour.lineWidth = 3;
    container_mapping_board.add(fiftyFour);

    // fiftyFive
    const fiftyFive = scene.add.rectangle(0, 272, 60, 60);
    fiftyFive.name = "fiftyFive";
    fiftyFive.fillColor = 12759024;
    fiftyFive.isStroked = true;
    fiftyFive.strokeColor = 0;
    fiftyFive.strokeAlpha = 3;
    fiftyFive.lineWidth = 3;
    container_mapping_board.add(fiftyFive);

    // fiftySix
    const fiftySix = scene.add.rectangle(0, 204, 60, 60);
    fiftySix.name = "fiftySix";
    fiftySix.fillColor = 12759024;
    fiftySix.isStroked = true;
    fiftySix.strokeColor = 0;
    fiftySix.strokeAlpha = 3;
    fiftySix.lineWidth = 3;
    container_mapping_board.add(fiftySix);

    // fiftySeven
    const fiftySeven = scene.add.rectangle(0, 136, 60, 60);
    fiftySeven.name = "fiftySeven";
    fiftySeven.fillColor = 12759024;
    fiftySeven.isStroked = true;
    fiftySeven.strokeColor = 0;
    fiftySeven.strokeAlpha = 3;
    fiftySeven.lineWidth = 3;
    container_mapping_board.add(fiftySeven);

    // fiftyEight
    const fiftyEight = scene.add.rectangle(0, 68, 60, 60);
    fiftyEight.name = "fiftyEight";
    fiftyEight.fillColor = 12759024;
    fiftyEight.isStroked = true;
    fiftyEight.strokeColor = 0;
    fiftyEight.strokeAlpha = 3;
    fiftyEight.lineWidth = 3;
    container_mapping_board.add(fiftyEight);

    // fiftyNine
    const fiftyNine = scene.add.rectangle(-409, 0, 60, 60);
    fiftyNine.name = "fiftyNine";
    fiftyNine.fillColor = 12759024;
    fiftyNine.isStroked = true;
    fiftyNine.strokeColor = 0;
    fiftyNine.strokeAlpha = 3;
    fiftyNine.lineWidth = 3;
    container_mapping_board.add(fiftyNine);

    // sixty
    const sixty = scene.add.rectangle(-341, 0, 60, 60);
    sixty.name = "sixty";
    sixty.fillColor = 12759024;
    sixty.isStroked = true;
    sixty.strokeColor = 0;
    sixty.strokeAlpha = 3;
    sixty.lineWidth = 3;
    container_mapping_board.add(sixty);

    // sixtyOne
    const sixtyOne = scene.add.rectangle(-272, 0, 60, 60);
    sixtyOne.name = "sixtyOne";
    sixtyOne.fillColor = 12759024;
    sixtyOne.isStroked = true;
    sixtyOne.strokeColor = 0;
    sixtyOne.strokeAlpha = 3;
    sixtyOne.lineWidth = 3;
    container_mapping_board.add(sixtyOne);

    // sixtyTwo
    const sixtyTwo = scene.add.rectangle(-204, 0, 60, 60);
    sixtyTwo.name = "sixtyTwo";
    sixtyTwo.fillColor = 12759024;
    sixtyTwo.isStroked = true;
    sixtyTwo.strokeColor = 0;
    sixtyTwo.strokeAlpha = 3;
    sixtyTwo.lineWidth = 3;
    container_mapping_board.add(sixtyTwo);

    // sixtyThree
    const sixtyThree = scene.add.rectangle(-135, 0, 60, 60);
    sixtyThree.name = "sixtyThree";
    sixtyThree.fillColor = 12759024;
    sixtyThree.isStroked = true;
    sixtyThree.strokeColor = 0;
    sixtyThree.strokeAlpha = 3;
    sixtyThree.lineWidth = 3;
    container_mapping_board.add(sixtyThree);

    // sixtyFour
    const sixtyFour = scene.add.rectangle(-68, 0, 60, 60);
    sixtyFour.name = "sixtyFour";
    sixtyFour.fillColor = 12759024;
    sixtyFour.isStroked = true;
    sixtyFour.strokeColor = 0;
    sixtyFour.strokeAlpha = 3;
    sixtyFour.lineWidth = 3;
    container_mapping_board.add(sixtyFour);

    // sixtyFive
    const sixtyFive = scene.add.rectangle(0, -409, 60, 60);
    sixtyFive.name = "sixtyFive";
    sixtyFive.fillColor = 12759024;
    sixtyFive.isStroked = true;
    sixtyFive.strokeColor = 0;
    sixtyFive.strokeAlpha = 3;
    sixtyFive.lineWidth = 3;
    container_mapping_board.add(sixtyFive);

    // sixtySix
    const sixtySix = scene.add.rectangle(0, -341, 60, 60);
    sixtySix.name = "sixtySix";
    sixtySix.fillColor = 12759024;
    sixtySix.isStroked = true;
    sixtySix.strokeColor = 0;
    sixtySix.strokeAlpha = 3;
    sixtySix.lineWidth = 3;
    container_mapping_board.add(sixtySix);

    // sixtySeven
    const sixtySeven = scene.add.rectangle(0, -272, 60, 60);
    sixtySeven.name = "sixtySeven";
    sixtySeven.fillColor = 12759024;
    sixtySeven.isStroked = true;
    sixtySeven.strokeColor = 0;
    sixtySeven.strokeAlpha = 3;
    sixtySeven.lineWidth = 3;
    container_mapping_board.add(sixtySeven);

    // sixtyEight
    const sixtyEight = scene.add.rectangle(0, -204, 60, 60);
    sixtyEight.name = "sixtyEight";
    sixtyEight.fillColor = 12759024;
    sixtyEight.isStroked = true;
    sixtyEight.strokeColor = 0;
    sixtyEight.strokeAlpha = 3;
    sixtyEight.lineWidth = 3;
    container_mapping_board.add(sixtyEight);

    // sixtyNine
    const sixtyNine = scene.add.rectangle(0, -135, 60, 60);
    sixtyNine.name = "sixtyNine";
    sixtyNine.fillColor = 12759024;
    sixtyNine.isStroked = true;
    sixtyNine.strokeColor = 0;
    sixtyNine.strokeAlpha = 3;
    sixtyNine.lineWidth = 3;
    container_mapping_board.add(sixtyNine);

    // seventy
    const seventy = scene.add.rectangle(0, -68, 60, 60);
    seventy.name = "seventy";
    seventy.fillColor = 12759024;
    seventy.isStroked = true;
    seventy.strokeColor = 0;
    seventy.strokeAlpha = 3;
    seventy.lineWidth = 3;
    container_mapping_board.add(seventy);

    // seventyOne
    const seventyOne = scene.add.rectangle(409, 0, 60, 60);
    seventyOne.name = "seventyOne";
    seventyOne.fillColor = 12759024;
    seventyOne.isStroked = true;
    seventyOne.strokeColor = 0;
    seventyOne.strokeAlpha = 3;
    seventyOne.lineWidth = 3;
    container_mapping_board.add(seventyOne);

    // seventyTwo
    const seventyTwo = scene.add.rectangle(341, 0, 60, 60);
    seventyTwo.name = "seventyTwo";
    seventyTwo.fillColor = 12759024;
    seventyTwo.isStroked = true;
    seventyTwo.strokeColor = 0;
    seventyTwo.strokeAlpha = 3;
    seventyTwo.lineWidth = 3;
    container_mapping_board.add(seventyTwo);

    // seventyThree
    const seventyThree = scene.add.rectangle(272, 0, 60, 60);
    seventyThree.name = "seventyThree";
    seventyThree.fillColor = 12759024;
    seventyThree.isStroked = true;
    seventyThree.strokeColor = 0;
    seventyThree.strokeAlpha = 3;
    seventyThree.lineWidth = 3;
    container_mapping_board.add(seventyThree);

    // seventyFour
    const seventyFour = scene.add.rectangle(203, 0, 60, 60);
    seventyFour.name = "seventyFour";
    seventyFour.fillColor = 12759024;
    seventyFour.isStroked = true;
    seventyFour.strokeColor = 0;
    seventyFour.strokeAlpha = 3;
    seventyFour.lineWidth = 3;
    container_mapping_board.add(seventyFour);

    // seventyFive
    const seventyFive = scene.add.rectangle(135, 0, 60, 60);
    seventyFive.name = "seventyFive";
    seventyFive.fillColor = 12759024;
    seventyFive.isStroked = true;
    seventyFive.strokeColor = 0;
    seventyFive.strokeAlpha = 3;
    seventyFive.lineWidth = 3;
    container_mapping_board.add(seventyFive);

    // seventySix
    const seventySix = scene.add.rectangle(68, 0, 60, 60);
    seventySix.name = "seventySix";
    seventySix.fillColor = 12759024;
    seventySix.isStroked = true;
    seventySix.strokeColor = 0;
    seventySix.strokeAlpha = 3;
    seventySix.lineWidth = 3;
    container_mapping_board.add(seventySix);

    // home_red_0
    const home_red_0 = scene.add.ellipse(-375, 240, 71, 71);
    home_red_0.name = "home_red_0";
    home_red_0.fillColor = 0;
    home_red_0.isStroked = true;
    home_red_0.strokeColor = 0;
    home_red_0.strokeAlpha = 3;
    home_red_0.lineWidth = 3;
    container_mapping_board.add(home_red_0);

    // home_red_1
    const home_red_1 = scene.add.ellipse(-375, 375, 71, 71);
    home_red_1.name = "home_red_1";
    home_red_1.fillColor = 0;
    home_red_1.isStroked = true;
    home_red_1.strokeColor = 0;
    home_red_1.strokeAlpha = 3;
    home_red_1.lineWidth = 3;
    container_mapping_board.add(home_red_1);

    // home_red_2
    const home_red_2 = scene.add.ellipse(-238, 240, 71, 71);
    home_red_2.name = "home_red_2";
    home_red_2.fillColor = 0;
    home_red_2.isStroked = true;
    home_red_2.strokeColor = 0;
    home_red_2.strokeAlpha = 3;
    home_red_2.lineWidth = 3;
    container_mapping_board.add(home_red_2);

    // home_red_3
    const home_red_3 = scene.add.ellipse(-238, 375, 71, 71);
    home_red_3.name = "home_red_3";
    home_red_3.fillColor = 0;
    home_red_3.isStroked = true;
    home_red_3.strokeColor = 0;
    home_red_3.strokeAlpha = 3;
    home_red_3.lineWidth = 3;
    container_mapping_board.add(home_red_3);

    // home_green_0
    const home_green_0 = scene.add.ellipse(239, -373, 71, 71);
    home_green_0.name = "home_green_0";
    home_green_0.fillColor = 0;
    home_green_0.isStroked = true;
    home_green_0.strokeColor = 0;
    home_green_0.strokeAlpha = 3;
    home_green_0.lineWidth = 3;
    container_mapping_board.add(home_green_0);

    // home_green_1
    const home_green_1 = scene.add.ellipse(239, -237, 71, 71);
    home_green_1.name = "home_green_1";
    home_green_1.fillColor = 0;
    home_green_1.isStroked = true;
    home_green_1.strokeColor = 0;
    home_green_1.strokeAlpha = 3;
    home_green_1.lineWidth = 3;
    container_mapping_board.add(home_green_1);

    // home_green_2
    const home_green_2 = scene.add.ellipse(376, -373, 71, 71);
    home_green_2.name = "home_green_2";
    home_green_2.fillColor = 0;
    home_green_2.isStroked = true;
    home_green_2.strokeColor = 0;
    home_green_2.strokeAlpha = 3;
    home_green_2.lineWidth = 3;
    container_mapping_board.add(home_green_2);

    // home_green_3
    const home_green_3 = scene.add.ellipse(376, -237, 71, 71);
    home_green_3.name = "home_green_3";
    home_green_3.fillColor = 0;
    home_green_3.isStroked = true;
    home_green_3.strokeColor = 0;
    home_green_3.strokeAlpha = 3;
    home_green_3.lineWidth = 3;
    container_mapping_board.add(home_green_3);

    // home_yellow_0
    const home_yellow_0 = scene.add.ellipse(-375, -373, 71, 71);
    home_yellow_0.name = "home_yellow_0";
    home_yellow_0.fillColor = 0;
    home_yellow_0.isStroked = true;
    home_yellow_0.strokeColor = 0;
    home_yellow_0.strokeAlpha = 3;
    home_yellow_0.lineWidth = 3;
    container_mapping_board.add(home_yellow_0);

    // home_yellow_1
    const home_yellow_1 = scene.add.ellipse(-376, -237, 71, 71);
    home_yellow_1.name = "home_yellow_1";
    home_yellow_1.fillColor = 0;
    home_yellow_1.isStroked = true;
    home_yellow_1.strokeColor = 0;
    home_yellow_1.strokeAlpha = 3;
    home_yellow_1.lineWidth = 3;
    container_mapping_board.add(home_yellow_1);

    // home_yellow_2
    const home_yellow_2 = scene.add.ellipse(-239, -373, 71, 71);
    home_yellow_2.name = "home_yellow_2";
    home_yellow_2.fillColor = 0;
    home_yellow_2.isStroked = true;
    home_yellow_2.strokeColor = 0;
    home_yellow_2.strokeAlpha = 3;
    home_yellow_2.lineWidth = 3;
    container_mapping_board.add(home_yellow_2);

    // home_yellow_3
    const home_yellow_3 = scene.add.ellipse(-239, -237, 71, 71);
    home_yellow_3.name = "home_yellow_3";
    home_yellow_3.fillColor = 0;
    home_yellow_3.isStroked = true;
    home_yellow_3.strokeColor = 0;
    home_yellow_3.strokeAlpha = 3;
    home_yellow_3.lineWidth = 3;
    container_mapping_board.add(home_yellow_3);

    // home_blue_0
    const home_blue_0 = scene.add.ellipse(239, 239, 71, 71);
    home_blue_0.name = "home_blue_0";
    home_blue_0.fillColor = 0;
    home_blue_0.isStroked = true;
    home_blue_0.strokeColor = 0;
    home_blue_0.strokeAlpha = 3;
    home_blue_0.lineWidth = 3;
    container_mapping_board.add(home_blue_0);

    // home_blue_1
    const home_blue_1 = scene.add.ellipse(239, 375, 71, 71);
    home_blue_1.name = "home_blue_1";
    home_blue_1.fillColor = 0;
    home_blue_1.isStroked = true;
    home_blue_1.strokeColor = 0;
    home_blue_1.strokeAlpha = 3;
    home_blue_1.lineWidth = 3;
    container_mapping_board.add(home_blue_1);

    // home_blue_2
    const home_blue_2 = scene.add.ellipse(375, 239, 71, 71);
    home_blue_2.name = "home_blue_2";
    home_blue_2.fillColor = 0;
    home_blue_2.isStroked = true;
    home_blue_2.strokeColor = 0;
    home_blue_2.strokeAlpha = 3;
    home_blue_2.lineWidth = 3;
    container_mapping_board.add(home_blue_2);

    // home_blue_3
    const home_blue_3 = scene.add.ellipse(375, 375, 71, 71);
    home_blue_3.name = "home_blue_3";
    home_blue_3.fillColor = 0;
    home_blue_3.isStroked = true;
    home_blue_3.strokeColor = 0;
    home_blue_3.strokeAlpha = 3;
    home_blue_3.lineWidth = 3;
    container_mapping_board.add(home_blue_3);

    // container_particles
    const container_particles = scene.add.container(0, 0);
    this.add(container_particles);

    // container_rings
    const container_rings = scene.add.container(0, 0);
    this.add(container_rings);

    // ring_0
    const ring_0 = scene.add.image(0, 0, "movable-ring");
    ring_0.scaleX = 0.5;
    ring_0.scaleY = 0.5;
    ring_0.visible = false;
    container_rings.add(ring_0);

    // ring_1
    const ring_1 = scene.add.image(0, 0, "movable-ring");
    ring_1.scaleX = 0.5;
    ring_1.scaleY = 0.5;
    ring_1.visible = false;
    container_rings.add(ring_1);

    // ring_2
    const ring_2 = scene.add.image(0, 0, "movable-ring");
    ring_2.scaleX = 0.5;
    ring_2.scaleY = 0.5;
    ring_2.visible = false;
    container_rings.add(ring_2);

    // ring_3
    const ring_3 = scene.add.image(0, 0, "movable-ring");
    ring_3.scaleX = 0.5;
    ring_3.scaleY = 0.5;
    ring_3.visible = false;
    container_rings.add(ring_3);

    // container_classic_rings
    const container_classic_rings = scene.add.container(0, 0);
    container_classic_rings.visible = false;
    this.add(container_classic_rings);

    // classic_red_ring_0
    const classic_red_ring_0 = scene.add.sprite(-375, 240, "token_ring");
    classic_red_ring_0.name = "classic_red_ring_0";
    classic_red_ring_0.setOrigin(0.5, 0.55);
    classic_red_ring_0.visible = false;
    container_classic_rings.add(classic_red_ring_0);

    // classic_red_ring_1
    const classic_red_ring_1 = scene.add.sprite(-375, 375, "token_ring");
    classic_red_ring_1.name = "classic_red_ring_1";
    classic_red_ring_1.setOrigin(0.5, 0.55);
    classic_red_ring_1.visible = false;
    container_classic_rings.add(classic_red_ring_1);

    // classic_red_ring_2
    const classic_red_ring_2 = scene.add.sprite(-238, 240, "token_ring");
    classic_red_ring_2.name = "classic_red_ring_2";
    classic_red_ring_2.setOrigin(0.5, 0.55);
    classic_red_ring_2.visible = false;
    container_classic_rings.add(classic_red_ring_2);

    // classic_red_ring_3
    const classic_red_ring_3 = scene.add.sprite(-238, 376, "token_ring");
    classic_red_ring_3.name = "classic_red_ring_3";
    classic_red_ring_3.setOrigin(0.5, 0.55);
    classic_red_ring_3.visible = false;
    container_classic_rings.add(classic_red_ring_3);

    // classic_yellow_ring_0
    const classic_yellow_ring_0 = scene.add.sprite(-375, -374, "token_ring");
    classic_yellow_ring_0.name = "classic_yellow_ring_0";
    classic_yellow_ring_0.setOrigin(0.5, 0.55);
    classic_yellow_ring_0.visible = false;
    container_classic_rings.add(classic_yellow_ring_0);

    // classic_yellow_ring_1
    const classic_yellow_ring_1 = scene.add.sprite(-376, -237, "token_ring");
    classic_yellow_ring_1.name = "classic_yellow_ring_1";
    classic_yellow_ring_1.setOrigin(0.5, 0.55);
    classic_yellow_ring_1.visible = false;
    container_classic_rings.add(classic_yellow_ring_1);

    // classic_yellow_ring_2
    const classic_yellow_ring_2 = scene.add.sprite(-239, -373, "token_ring");
    classic_yellow_ring_2.name = "classic_yellow_ring_2";
    classic_yellow_ring_2.setOrigin(0.5, 0.55);
    classic_yellow_ring_2.visible = false;
    container_classic_rings.add(classic_yellow_ring_2);

    // classic_yellow_ring_3
    const classic_yellow_ring_3 = scene.add.sprite(-239, -237, "token_ring");
    classic_yellow_ring_3.name = "classic_yellow_ring_3";
    classic_yellow_ring_3.setOrigin(0.5, 0.55);
    classic_yellow_ring_3.visible = false;
    container_classic_rings.add(classic_yellow_ring_3);

    // classic_green_ring_0
    const classic_green_ring_0 = scene.add.sprite(239, -373, "token_ring");
    classic_green_ring_0.name = "classic_green_ring_0";
    classic_green_ring_0.setOrigin(0.5, 0.55);
    classic_green_ring_0.visible = false;
    container_classic_rings.add(classic_green_ring_0);

    // classic_green_ring_1
    const classic_green_ring_1 = scene.add.sprite(239, -237, "token_ring");
    classic_green_ring_1.name = "classic_green_ring_1";
    classic_green_ring_1.setOrigin(0.5, 0.55);
    classic_green_ring_1.visible = false;
    container_classic_rings.add(classic_green_ring_1);

    // classic_green_ring_2
    const classic_green_ring_2 = scene.add.sprite(376, -373, "token_ring");
    classic_green_ring_2.name = "classic_green_ring_2";
    classic_green_ring_2.setOrigin(0.5, 0.55);
    classic_green_ring_2.visible = false;
    container_classic_rings.add(classic_green_ring_2);

    // classic_green_ring_3
    const classic_green_ring_3 = scene.add.sprite(376, -237, "token_ring");
    classic_green_ring_3.name = "classic_green_ring_3";
    classic_green_ring_3.setOrigin(0.5, 0.55);
    classic_green_ring_3.visible = false;
    container_classic_rings.add(classic_green_ring_3);

    // classic_blue_ring_0
    const classic_blue_ring_0 = scene.add.sprite(239, 239, "token_ring");
    classic_blue_ring_0.name = "classic_blue_ring_0";
    classic_blue_ring_0.setOrigin(0.5, 0.55);
    classic_blue_ring_0.visible = false;
    container_classic_rings.add(classic_blue_ring_0);

    // classic_blue_ring_1
    const classic_blue_ring_1 = scene.add.sprite(239, 375, "token_ring");
    classic_blue_ring_1.name = "classic_blue_ring_1";
    classic_blue_ring_1.setOrigin(0.5, 0.55);
    classic_blue_ring_1.visible = false;
    container_classic_rings.add(classic_blue_ring_1);

    // classic_blue_ring_2
    const classic_blue_ring_2 = scene.add.sprite(375, 239, "token_ring");
    classic_blue_ring_2.name = "classic_blue_ring_2";
    classic_blue_ring_2.setOrigin(0.5, 0.55);
    classic_blue_ring_2.visible = false;
    container_classic_rings.add(classic_blue_ring_2);

    // classic_blue_ring_3
    const classic_blue_ring_3 = scene.add.sprite(376, 375, "token_ring");
    classic_blue_ring_3.name = "classic_blue_ring_3";
    classic_blue_ring_3.setOrigin(0.5, 0.55);
    classic_blue_ring_3.visible = false;
    container_classic_rings.add(classic_blue_ring_3);

    // container_classic
    const container_classic = scene.add.container(0, 0);
    container_classic.visible = false;
    this.add(container_classic);

    // classic_red_0
    const classic_red_0 = scene.add.sprite(-375, 240, "red");
    classic_red_0.name = "classic_red_0";
    classic_red_0.setOrigin(0.5, 0.95);
    classic_red_0.visible = false;
    container_classic.add(classic_red_0);

    // classic_red_1
    const classic_red_1 = scene.add.sprite(-375, 375, "red");
    classic_red_1.name = "classic_red_1";
    classic_red_1.setOrigin(0.5, 0.95);
    classic_red_1.visible = false;
    container_classic.add(classic_red_1);

    // classic_red_2
    const classic_red_2 = scene.add.sprite(-238, 240, "red");
    classic_red_2.name = "classic_red_2";
    classic_red_2.setOrigin(0.5, 0.95);
    classic_red_2.visible = false;
    container_classic.add(classic_red_2);

    // classic_red_3
    const classic_red_3 = scene.add.sprite(-238, 375, "red");
    classic_red_3.name = "classic_red_3";
    classic_red_3.setOrigin(0.5, 0.95);
    classic_red_3.visible = false;
    container_classic.add(classic_red_3);

    // classic_yellow_0
    const classic_yellow_0 = scene.add.sprite(-375, -373, "yellow");
    classic_yellow_0.name = "classic_yellow_0";
    classic_yellow_0.setOrigin(0.5, 0.95);
    classic_yellow_0.visible = false;
    container_classic.add(classic_yellow_0);

    // classic_yellow_1
    const classic_yellow_1 = scene.add.sprite(-376, -237, "yellow");
    classic_yellow_1.name = "classic_yellow_1";
    classic_yellow_1.setOrigin(0.5, 0.95);
    classic_yellow_1.visible = false;
    container_classic.add(classic_yellow_1);

    // classic_yellow_2
    const classic_yellow_2 = scene.add.sprite(-239, -373, "yellow");
    classic_yellow_2.name = "classic_yellow_2";
    classic_yellow_2.setOrigin(0.5, 0.95);
    classic_yellow_2.visible = false;
    container_classic.add(classic_yellow_2);

    // classic_yellow_3
    const classic_yellow_3 = scene.add.sprite(-239, -237, "yellow");
    classic_yellow_3.name = "classic_yellow_3";
    classic_yellow_3.setOrigin(0.5, 0.95);
    classic_yellow_3.visible = false;
    container_classic.add(classic_yellow_3);

    // classic_green_0
    const classic_green_0 = scene.add.sprite(239, -373, "green");
    classic_green_0.name = "classic_green_0";
    classic_green_0.setOrigin(0.5, 0.95);
    classic_green_0.visible = false;
    container_classic.add(classic_green_0);

    // classic_green_1
    const classic_green_1 = scene.add.sprite(239, -237, "green");
    classic_green_1.name = "classic_green_1";
    classic_green_1.setOrigin(0.5, 0.95);
    classic_green_1.visible = false;
    container_classic.add(classic_green_1);

    // classic_green_2
    const classic_green_2 = scene.add.sprite(376, -373, "green");
    classic_green_2.name = "classic_green_2";
    classic_green_2.setOrigin(0.5, 0.95);
    classic_green_2.visible = false;
    container_classic.add(classic_green_2);

    // classic_green_3
    const classic_green_3 = scene.add.sprite(376, -237, "green");
    classic_green_3.name = "classic_green_3";
    classic_green_3.setOrigin(0.5, 0.95);
    classic_green_3.visible = false;
    container_classic.add(classic_green_3);

    // classic_blue_0
    const classic_blue_0 = scene.add.sprite(239, 239, "blue");
    classic_blue_0.name = "classic_blue_0";
    classic_blue_0.setOrigin(0.5, 0.95);
    classic_blue_0.visible = false;
    container_classic.add(classic_blue_0);

    // classic_blue_1
    const classic_blue_1 = scene.add.sprite(239, 375, "blue");
    classic_blue_1.name = "classic_blue_1";
    classic_blue_1.setOrigin(0.5, 0.95);
    classic_blue_1.visible = false;
    container_classic.add(classic_blue_1);

    // classic_blue_2
    const classic_blue_2 = scene.add.sprite(375, 239, "blue");
    classic_blue_2.name = "classic_blue_2";
    classic_blue_2.setOrigin(0.5, 0.95);
    classic_blue_2.visible = false;
    container_classic.add(classic_blue_2);

    // classic_blue_3
    const classic_blue_3 = scene.add.sprite(375, 375, "blue");
    classic_blue_3.name = "classic_blue_3";
    classic_blue_3.setOrigin(0.5, 0.95);
    classic_blue_3.visible = false;
    container_classic.add(classic_blue_3);

    // container_rush
    const container_rush = scene.add.container(0, 0);
    container_rush.visible = false;
    this.add(container_rush);

    // container_rush_tokens
    const container_rush_tokens = scene.add.container(-1, 0);
    container_rush.add(container_rush_tokens);

    // container_rush_red
    const container_rush_red = scene.add.container(0, 2);
    container_rush_red.visible = false;
    container_rush_tokens.add(container_rush_red);

    // rush_red_0
    const rush_red_0 = scene.add.sprite(-65, 411, "red");
    rush_red_0.name = "rush_red_0";
    rush_red_0.scaleX = 0.4;
    rush_red_0.scaleY = 0.4;
    container_rush_red.add(rush_red_0);

    // rush_red_1
    const rush_red_1 = scene.add.sprite(-65, 411, "red");
    rush_red_1.name = "rush_red_1";
    rush_red_1.scaleX = 0.4;
    rush_red_1.scaleY = 0.4;
    container_rush_red.add(rush_red_1);

    // rush_red_2
    const rush_red_2 = scene.add.sprite(-65, 411, "red");
    rush_red_2.name = "rush_red_2";
    rush_red_2.scaleX = 0.4;
    rush_red_2.scaleY = 0.4;
    container_rush_red.add(rush_red_2);

    // rush_red_3
    const rush_red_3 = scene.add.sprite(-65, 411, "red");
    rush_red_3.name = "rush_red_3";
    rush_red_3.scaleX = 0.4;
    rush_red_3.scaleY = 0.4;
    container_rush_red.add(rush_red_3);

    // container_rush_yellow
    const container_rush_yellow = scene.add.container(0, -1);
    container_rush_yellow.visible = false;
    container_rush_tokens.add(container_rush_yellow);

    // rush_yellow_0
    const rush_yellow_0 = scene.add.sprite(-406, -65, "yellow");
    rush_yellow_0.name = "rush_yellow_0";
    rush_yellow_0.scaleX = 0.4;
    rush_yellow_0.scaleY = 0.4;
    container_rush_yellow.add(rush_yellow_0);

    // rush_yellow_1
    const rush_yellow_1 = scene.add.sprite(-406, -65, "yellow");
    rush_yellow_1.name = "rush_yellow_1";
    rush_yellow_1.scaleX = 0.4;
    rush_yellow_1.scaleY = 0.4;
    container_rush_yellow.add(rush_yellow_1);

    // rush_yellow_2
    const rush_yellow_2 = scene.add.sprite(-406, -65, "yellow");
    rush_yellow_2.name = "rush_yellow_2";
    rush_yellow_2.scaleX = 0.4;
    rush_yellow_2.scaleY = 0.4;
    container_rush_yellow.add(rush_yellow_2);

    // rush_yellow_3
    const rush_yellow_3 = scene.add.sprite(-406, -65, "yellow");
    rush_yellow_3.name = "rush_yellow_3";
    rush_yellow_3.scaleX = 0.4;
    rush_yellow_3.scaleY = 0.4;
    container_rush_yellow.add(rush_yellow_3);

    // container_rush_green
    const container_rush_green = scene.add.container(0, -1);
    container_rush_green.visible = false;
    container_rush_tokens.add(container_rush_green);

    // rush_green_0
    const rush_green_0 = scene.add.sprite(70, -406, "green");
    rush_green_0.name = "rush_green_0";
    rush_green_0.scaleX = 0.4;
    rush_green_0.scaleY = 0.4;
    container_rush_green.add(rush_green_0);

    // rush_green_1
    const rush_green_1 = scene.add.sprite(70, -406, "green");
    rush_green_1.name = "rush_green_1";
    rush_green_1.scaleX = 0.4;
    rush_green_1.scaleY = 0.4;
    container_rush_green.add(rush_green_1);

    // rush_green_2
    const rush_green_2 = scene.add.sprite(70, -406, "green");
    rush_green_2.name = "rush_green_2";
    rush_green_2.scaleX = 0.4;
    rush_green_2.scaleY = 0.4;
    container_rush_green.add(rush_green_2);

    // rush_green_3
    const rush_green_3 = scene.add.sprite(70, -406, "green");
    rush_green_3.name = "rush_green_3";
    rush_green_3.scaleX = 0.4;
    rush_green_3.scaleY = 0.4;
    container_rush_green.add(rush_green_3);

    // container_rush_blue
    const container_rush_blue = scene.add.container(0, -1);
    container_rush_blue.visible = false;
    container_rush_tokens.add(container_rush_blue);

    // rush_blue_0
    const rush_blue_0 = scene.add.sprite(411, 70, "blue");
    rush_blue_0.name = "rush_blue_0";
    rush_blue_0.scaleX = 0.4;
    rush_blue_0.scaleY = 0.4;
    container_rush_blue.add(rush_blue_0);

    // rush_blue_1
    const rush_blue_1 = scene.add.sprite(411, 70, "blue");
    rush_blue_1.name = "rush_blue_1";
    rush_blue_1.scaleX = 0.4;
    rush_blue_1.scaleY = 0.4;
    container_rush_blue.add(rush_blue_1);

    // rush_blue_2
    const rush_blue_2 = scene.add.sprite(411, 70, "blue");
    rush_blue_2.name = "rush_blue_2";
    rush_blue_2.scaleX = 0.4;
    rush_blue_2.scaleY = 0.4;
    container_rush_blue.add(rush_blue_2);

    // rush_blue_3
    const rush_blue_3 = scene.add.sprite(411, 70, "blue");
    rush_blue_3.name = "rush_blue_3";
    rush_blue_3.scaleX = 0.4;
    rush_blue_3.scaleY = 0.4;
    container_rush_blue.add(rush_blue_3);

    // container_crown
    const container_crown = scene.add.container(0, 0);
    this.add(container_crown);

    // ownPlayerCrown
    const ownPlayerCrown = scene.add.image(-308, 308, "crown1");
    ownPlayerCrown.scaleX = 0.6;
    ownPlayerCrown.scaleY = 0.6;
    ownPlayerCrown.visible = false;
    container_crown.add(ownPlayerCrown);

    // oppPlayerOneCrown
    const oppPlayerOneCrown = scene.add.image(-308, -308, "crown1");
    oppPlayerOneCrown.scaleX = 0.6;
    oppPlayerOneCrown.scaleY = 0.6;
    oppPlayerOneCrown.visible = false;
    container_crown.add(oppPlayerOneCrown);

    // oppPlayerTwoCrown
    const oppPlayerTwoCrown = scene.add.image(308, -308, "crown1");
    oppPlayerTwoCrown.scaleX = 0.6;
    oppPlayerTwoCrown.scaleY = 0.6;
    oppPlayerTwoCrown.visible = false;
    container_crown.add(oppPlayerTwoCrown);

    // oppPlayerThreeCrown
    const oppPlayerThreeCrown = scene.add.image(308, 308, "crown1");
    oppPlayerThreeCrown.scaleX = 0.6;
    oppPlayerThreeCrown.scaleY = 0.6;
    oppPlayerThreeCrown.visible = false;
    container_crown.add(oppPlayerThreeCrown);

    // container_player_left
    const container_player_left = scene.add.container(0, 0);
    this.add(container_player_left);

    // red_exit
    const red_exit = scene.add.image(308, -306, "red_exit");
    red_exit.scaleX = 1.1;
    red_exit.scaleY = 1.1;
    red_exit.visible = false;
    container_player_left.add(red_exit);

    // yellow_exit
    const yellow_exit = scene.add.image(-309, 307, "yellow_exit");
    yellow_exit.scaleX = 1.1;
    yellow_exit.scaleY = 1.1;
    yellow_exit.visible = false;
    container_player_left.add(yellow_exit);

    // green_exit
    const green_exit = scene.add.image(306, 307, "green_exit");
    green_exit.scaleX = 1.1;
    green_exit.scaleY = 1.1;
    green_exit.visible = false;
    container_player_left.add(green_exit);

    // blue_exit
    const blue_exit = scene.add.image(-308, -306, "blue_exit");
    blue_exit.scaleX = 1.1;
    blue_exit.scaleY = 1.1;
    blue_exit.visible = false;
    container_player_left.add(blue_exit);

    // one (components)
    const oneSafeHousePointer = new SafeHousePointer(one);
    oneSafeHousePointer.isSafeHouse = true;
    oneSafeHousePointer.shouldPlaySound = false;

    // nine (components)
    const nineSafeHousePointer = new SafeHousePointer(nine);
    nineSafeHousePointer.isSafeHouse = true;

    // thirteen (components)
    const thirteenInHouseEntryPointer = new InHouseEntryPointer(thirteen);
    thirteenInHouseEntryPointer.tokenIdentifier = "yellow";
    thirteenInHouseEntryPointer.moveToBox = "58";

    // fourteen (components)
    const fourteenSafeHousePointer = new SafeHousePointer(fourteen);
    fourteenSafeHousePointer.isSafeHouse = true;
    fourteenSafeHousePointer.shouldPlaySound = false;

    // twentyTwo (components)
    const twentyTwoSafeHousePointer = new SafeHousePointer(twentyTwo);
    twentyTwoSafeHousePointer.isSafeHouse = true;

    // twentySix (components)
    const twentySixInHouseEntryPointer = new InHouseEntryPointer(twentySix);
    twentySixInHouseEntryPointer.tokenIdentifier = "green";
    twentySixInHouseEntryPointer.moveToBox = "64";

    // twentySeven (components)
    const twentySevenSafeHousePointer = new SafeHousePointer(twentySeven);
    twentySevenSafeHousePointer.isSafeHouse = true;
    twentySevenSafeHousePointer.shouldPlaySound = false;

    // thirtyFive (components)
    const thirtyFiveSafeHousePointer = new SafeHousePointer(thirtyFive);
    thirtyFiveSafeHousePointer.isSafeHouse = true;

    // thirtyNine (components)
    const thirtyNineInHouseEntryPointer = new InHouseEntryPointer(thirtyNine);
    thirtyNineInHouseEntryPointer.tokenIdentifier = "blue";
    thirtyNineInHouseEntryPointer.moveToBox = "70";

    // fourty (components)
    const fourtySafeHousePointer = new SafeHousePointer(fourty);
    fourtySafeHousePointer.isSafeHouse = true;
    fourtySafeHousePointer.shouldPlaySound = false;

    // fourtyEight (components)
    const fourtyEightSafeHousePointer = new SafeHousePointer(fourtyEight);
    fourtyEightSafeHousePointer.isSafeHouse = true;

    // fiftyTwo (components)
    const fiftyTwoInHouseEntryPointer = new InHouseEntryPointer(fiftyTwo);
    fiftyTwoInHouseEntryPointer.tokenIdentifier = "red";
    fiftyTwoInHouseEntryPointer.moveToBox = "52";

    // fiftyEight (components)
    const fiftyEightSafeHousePointer = new SafeHousePointer(fiftyEight);
    fiftyEightSafeHousePointer.isAtHome = true;

    // sixtyFour (components)
    const sixtyFourSafeHousePointer = new SafeHousePointer(sixtyFour);
    sixtyFourSafeHousePointer.isAtHome = true;

    // seventy (components)
    const seventySafeHousePointer = new SafeHousePointer(seventy);
    seventySafeHousePointer.isAtHome = true;

    // seventySix (components)
    const seventySixSafeHousePointer = new SafeHousePointer(seventySix);
    seventySixSafeHousePointer.isAtHome = true;

    // ring_0 (components)
    new RingAnimation(ring_0);

    // ring_1 (components)
    new RingAnimation(ring_1);

    // ring_2 (components)
    new RingAnimation(ring_2);

    // ring_3 (components)
    new RingAnimation(ring_3);

    // classic_red_ring_0 (components)
    const classic_red_ring_0TokenHomes = new TokenHomes(classic_red_ring_0);
    classic_red_ring_0TokenHomes.index = 76;

    // classic_red_ring_1 (components)
    const classic_red_ring_1TokenHomes = new TokenHomes(classic_red_ring_1);
    classic_red_ring_1TokenHomes.index = 77;

    // classic_red_ring_2 (components)
    const classic_red_ring_2TokenHomes = new TokenHomes(classic_red_ring_2);
    classic_red_ring_2TokenHomes.index = 78;

    // classic_red_ring_3 (components)
    const classic_red_ring_3TokenHomes = new TokenHomes(classic_red_ring_3);
    classic_red_ring_3TokenHomes.index = 79;

    // classic_yellow_ring_0 (components)
    const classic_yellow_ring_0TokenHomes = new TokenHomes(
      classic_yellow_ring_0
    );
    classic_yellow_ring_0TokenHomes.index = 84;

    // classic_yellow_ring_1 (components)
    const classic_yellow_ring_1TokenHomes = new TokenHomes(
      classic_yellow_ring_1
    );
    classic_yellow_ring_1TokenHomes.index = 85;

    // classic_yellow_ring_2 (components)
    const classic_yellow_ring_2TokenHomes = new TokenHomes(
      classic_yellow_ring_2
    );
    classic_yellow_ring_2TokenHomes.index = 86;

    // classic_yellow_ring_3 (components)
    const classic_yellow_ring_3TokenHomes = new TokenHomes(
      classic_yellow_ring_3
    );
    classic_yellow_ring_3TokenHomes.index = 87;

    // classic_green_ring_0 (components)
    const classic_green_ring_0TokenHomes = new TokenHomes(classic_green_ring_0);
    classic_green_ring_0TokenHomes.index = 80;

    // classic_green_ring_1 (components)
    const classic_green_ring_1TokenHomes = new TokenHomes(classic_green_ring_1);
    classic_green_ring_1TokenHomes.index = 81;

    // classic_green_ring_2 (components)
    const classic_green_ring_2TokenHomes = new TokenHomes(classic_green_ring_2);
    classic_green_ring_2TokenHomes.index = 82;

    // classic_green_ring_3 (components)
    const classic_green_ring_3TokenHomes = new TokenHomes(classic_green_ring_3);
    classic_green_ring_3TokenHomes.index = 83;

    // classic_blue_ring_0 (components)
    const classic_blue_ring_0TokenHomes = new TokenHomes(classic_blue_ring_0);
    classic_blue_ring_0TokenHomes.index = 88;

    // classic_blue_ring_1 (components)
    const classic_blue_ring_1TokenHomes = new TokenHomes(classic_blue_ring_1);
    classic_blue_ring_1TokenHomes.index = 89;

    // classic_blue_ring_2 (components)
    const classic_blue_ring_2TokenHomes = new TokenHomes(classic_blue_ring_2);
    classic_blue_ring_2TokenHomes.index = 90;

    // classic_blue_ring_3 (components)
    const classic_blue_ring_3TokenHomes = new TokenHomes(classic_blue_ring_3);
    classic_blue_ring_3TokenHomes.index = 91;

    // classic_red_0 (components)
    const classic_red_0TokenHomes = new TokenHomes(classic_red_0);
    classic_red_0TokenHomes.index = 76;

    // classic_red_1 (components)
    const classic_red_1TokenHomes = new TokenHomes(classic_red_1);
    classic_red_1TokenHomes.index = 77;

    // classic_red_2 (components)
    const classic_red_2TokenHomes = new TokenHomes(classic_red_2);
    classic_red_2TokenHomes.index = 78;

    // classic_red_3 (components)
    const classic_red_3TokenHomes = new TokenHomes(classic_red_3);
    classic_red_3TokenHomes.index = 79;

    // classic_yellow_0 (components)
    const classic_yellow_0TokenHomes = new TokenHomes(classic_yellow_0);
    classic_yellow_0TokenHomes.index = 84;

    // classic_yellow_1 (components)
    const classic_yellow_1TokenHomes = new TokenHomes(classic_yellow_1);
    classic_yellow_1TokenHomes.index = 85;

    // classic_yellow_2 (components)
    const classic_yellow_2TokenHomes = new TokenHomes(classic_yellow_2);
    classic_yellow_2TokenHomes.index = 86;

    // classic_yellow_3 (components)
    const classic_yellow_3TokenHomes = new TokenHomes(classic_yellow_3);
    classic_yellow_3TokenHomes.index = 87;

    // classic_green_0 (components)
    const classic_green_0TokenHomes = new TokenHomes(classic_green_0);
    classic_green_0TokenHomes.index = 80;

    // classic_green_1 (components)
    const classic_green_1TokenHomes = new TokenHomes(classic_green_1);
    classic_green_1TokenHomes.index = 81;

    // classic_green_2 (components)
    const classic_green_2TokenHomes = new TokenHomes(classic_green_2);
    classic_green_2TokenHomes.index = 82;

    // classic_green_3 (components)
    const classic_green_3TokenHomes = new TokenHomes(classic_green_3);
    classic_green_3TokenHomes.index = 83;

    // classic_blue_0 (components)
    const classic_blue_0TokenHomes = new TokenHomes(classic_blue_0);
    classic_blue_0TokenHomes.index = 88;

    // classic_blue_1 (components)
    const classic_blue_1TokenHomes = new TokenHomes(classic_blue_1);
    classic_blue_1TokenHomes.index = 89;

    // classic_blue_2 (components)
    const classic_blue_2TokenHomes = new TokenHomes(classic_blue_2);
    classic_blue_2TokenHomes.index = 90;

    // classic_blue_3 (components)
    const classic_blue_3TokenHomes = new TokenHomes(classic_blue_3);
    classic_blue_3TokenHomes.index = 91;

    // rush_red_0 (components)
    new TokenHomes(rush_red_0);

    // rush_red_1 (components)
    new TokenHomes(rush_red_1);

    // rush_red_2 (components)
    new TokenHomes(rush_red_2);

    // rush_red_3 (components)
    new TokenHomes(rush_red_3);

    // rush_yellow_0 (components)
    const rush_yellow_0TokenHomes = new TokenHomes(rush_yellow_0);
    rush_yellow_0TokenHomes.index = 13;

    // rush_yellow_1 (components)
    const rush_yellow_1TokenHomes = new TokenHomes(rush_yellow_1);
    rush_yellow_1TokenHomes.index = 13;

    // rush_yellow_2 (components)
    const rush_yellow_2TokenHomes = new TokenHomes(rush_yellow_2);
    rush_yellow_2TokenHomes.index = 13;

    // rush_yellow_3 (components)
    const rush_yellow_3TokenHomes = new TokenHomes(rush_yellow_3);
    rush_yellow_3TokenHomes.index = 13;

    // rush_green_0 (components)
    const rush_green_0TokenHomes = new TokenHomes(rush_green_0);
    rush_green_0TokenHomes.index = 26;

    // rush_green_1 (components)
    const rush_green_1TokenHomes = new TokenHomes(rush_green_1);
    rush_green_1TokenHomes.index = 26;

    // rush_green_2 (components)
    const rush_green_2TokenHomes = new TokenHomes(rush_green_2);
    rush_green_2TokenHomes.index = 26;

    // rush_green_3 (components)
    const rush_green_3TokenHomes = new TokenHomes(rush_green_3);
    rush_green_3TokenHomes.index = 26;

    // rush_blue_0 (components)
    const rush_blue_0TokenHomes = new TokenHomes(rush_blue_0);
    rush_blue_0TokenHomes.index = 39;

    // rush_blue_1 (components)
    const rush_blue_1TokenHomes = new TokenHomes(rush_blue_1);
    rush_blue_1TokenHomes.index = 39;

    // rush_blue_2 (components)
    const rush_blue_2TokenHomes = new TokenHomes(rush_blue_2);
    rush_blue_2TokenHomes.index = 39;

    // rush_blue_3 (components)
    const rush_blue_3TokenHomes = new TokenHomes(rush_blue_3);
    rush_blue_3TokenHomes.index = 39;

    this.board = board;
    this.turn_highlighter_blue = turn_highlighter_blue;
    this.turn_highlighter_green = turn_highlighter_green;
    this.turn_highlighter_red = turn_highlighter_red;
    this.turn_highlighter_yellow = turn_highlighter_yellow;
    this.player_yellow_score = player_yellow_score;
    this.player_yellow_score_inc = player_yellow_score_inc;
    this.container_player_yellow_score = container_player_yellow_score;
    this.player_green_score = player_green_score;
    this.player_green_score_inc = player_green_score_inc;
    this.container_player_green_score = container_player_green_score;
    this.player_blue_score = player_blue_score;
    this.player_blue_score_inc = player_blue_score_inc;
    this.container_player_blue_score = container_player_blue_score;
    this.player_red_score = player_red_score;
    this.player_red_score_inc = player_red_score_inc;
    this.container_player_red_score = container_player_red_score;
    this.boardContainer = boardContainer;
    this.container_board_star = container_board_star;
    this.container_mapping_board = container_mapping_board;
    this.container_particles = container_particles;
    this.ring_0 = ring_0;
    this.ring_1 = ring_1;
    this.ring_2 = ring_2;
    this.ring_3 = ring_3;
    this.container_rings = container_rings;
    this.classic_red_ring_0 = classic_red_ring_0;
    this.classic_red_ring_1 = classic_red_ring_1;
    this.classic_red_ring_2 = classic_red_ring_2;
    this.classic_red_ring_3 = classic_red_ring_3;
    this.classic_yellow_ring_0 = classic_yellow_ring_0;
    this.classic_yellow_ring_1 = classic_yellow_ring_1;
    this.classic_yellow_ring_2 = classic_yellow_ring_2;
    this.classic_yellow_ring_3 = classic_yellow_ring_3;
    this.classic_green_ring_0 = classic_green_ring_0;
    this.classic_green_ring_1 = classic_green_ring_1;
    this.classic_green_ring_2 = classic_green_ring_2;
    this.classic_green_ring_3 = classic_green_ring_3;
    this.classic_blue_ring_0 = classic_blue_ring_0;
    this.classic_blue_ring_1 = classic_blue_ring_1;
    this.classic_blue_ring_2 = classic_blue_ring_2;
    this.classic_blue_ring_3 = classic_blue_ring_3;
    this.container_classic_rings = container_classic_rings;
    this.classic_red_0 = classic_red_0;
    this.classic_red_1 = classic_red_1;
    this.classic_red_2 = classic_red_2;
    this.classic_red_3 = classic_red_3;
    this.classic_yellow_0 = classic_yellow_0;
    this.classic_yellow_1 = classic_yellow_1;
    this.classic_yellow_2 = classic_yellow_2;
    this.classic_yellow_3 = classic_yellow_3;
    this.classic_green_0 = classic_green_0;
    this.classic_green_1 = classic_green_1;
    this.classic_green_2 = classic_green_2;
    this.classic_green_3 = classic_green_3;
    this.classic_blue_0 = classic_blue_0;
    this.classic_blue_1 = classic_blue_1;
    this.classic_blue_2 = classic_blue_2;
    this.classic_blue_3 = classic_blue_3;
    this.container_classic = container_classic;
    this.rush_red_0 = rush_red_0;
    this.rush_red_1 = rush_red_1;
    this.rush_red_2 = rush_red_2;
    this.rush_red_3 = rush_red_3;
    this.container_rush_red = container_rush_red;
    this.rush_yellow_0 = rush_yellow_0;
    this.rush_yellow_1 = rush_yellow_1;
    this.rush_yellow_2 = rush_yellow_2;
    this.rush_yellow_3 = rush_yellow_3;
    this.container_rush_yellow = container_rush_yellow;
    this.rush_green_0 = rush_green_0;
    this.rush_green_1 = rush_green_1;
    this.rush_green_2 = rush_green_2;
    this.rush_green_3 = rush_green_3;
    this.container_rush_green = container_rush_green;
    this.rush_blue_0 = rush_blue_0;
    this.rush_blue_1 = rush_blue_1;
    this.rush_blue_2 = rush_blue_2;
    this.rush_blue_3 = rush_blue_3;
    this.container_rush_blue = container_rush_blue;
    this.container_rush_tokens = container_rush_tokens;
    this.container_rush = container_rush;
    this.ownPlayerCrown = ownPlayerCrown;
    this.oppPlayerOneCrown = oppPlayerOneCrown;
    this.oppPlayerTwoCrown = oppPlayerTwoCrown;
    this.oppPlayerThreeCrown = oppPlayerThreeCrown;
    this.red_exit = red_exit;
    this.yellow_exit = yellow_exit;
    this.green_exit = green_exit;
    this.blue_exit = blue_exit;

    /* START-USER-CTR-CODE */
    // Write your code here.
    this.scene = scene;
    this.createPlayerGroups();
    this.createRingGroups();

    this.highlighterAnim;
    this.aPawnOnBoard = [];
    this.aRingOnBoard = [];

    this.classic_red_0.on("pointerdown", () => {
      this.makeDisableInteractivePawn();
      this.reqMovePawn(0);
      this.hideRings();
      this.resetPawnScale();
    });
    this.classic_red_1.on("pointerdown", () => {
      this.makeDisableInteractivePawn();
      this.reqMovePawn(1);
      this.hideRings();
      this.resetPawnScale();
    });
    this.classic_red_2.on("pointerdown", () => {
      this.makeDisableInteractivePawn();
      this.reqMovePawn(2);
      this.hideRings();
      this.resetPawnScale();
    });
    this.classic_red_3.on("pointerdown", () => {
      this.makeDisableInteractivePawn();
      this.reqMovePawn(3);
      this.hideRings();
      this.resetPawnScale();
    });

    /* END-USER-CTR-CODE */
  }

  /** @type {Phaser.GameObjects.Image} */
  board;
  /** @type {Phaser.GameObjects.Image} */
  turn_highlighter_blue;
  /** @type {Phaser.GameObjects.Image} */
  turn_highlighter_green;
  /** @type {Phaser.GameObjects.Image} */
  turn_highlighter_red;
  /** @type {Phaser.GameObjects.Image} */
  turn_highlighter_yellow;
  /** @type {Phaser.GameObjects.Text} */
  player_yellow_score;
  /** @type {Phaser.GameObjects.Text} */
  player_yellow_score_inc;
  /** @type {Phaser.GameObjects.Container} */
  container_player_yellow_score;
  /** @type {Phaser.GameObjects.Text} */
  player_green_score;
  /** @type {Phaser.GameObjects.Text} */
  player_green_score_inc;
  /** @type {Phaser.GameObjects.Container} */
  container_player_green_score;
  /** @type {Phaser.GameObjects.Text} */
  player_blue_score;
  /** @type {Phaser.GameObjects.Text} */
  player_blue_score_inc;
  /** @type {Phaser.GameObjects.Container} */
  container_player_blue_score;
  /** @type {Phaser.GameObjects.Text} */
  player_red_score;
  /** @type {Phaser.GameObjects.Text} */
  player_red_score_inc;
  /** @type {Phaser.GameObjects.Container} */
  container_player_red_score;
  /** @type {Phaser.GameObjects.Container} */
  boardContainer;
  /** @type {Phaser.GameObjects.Container} */
  container_board_star;
  /** @type {Phaser.GameObjects.Container} */
  container_mapping_board;
  /** @type {Phaser.GameObjects.Container} */
  container_particles;
  /** @type {Phaser.GameObjects.Image} */
  ring_0;
  /** @type {Phaser.GameObjects.Image} */
  ring_1;
  /** @type {Phaser.GameObjects.Image} */
  ring_2;
  /** @type {Phaser.GameObjects.Image} */
  ring_3;
  /** @type {Phaser.GameObjects.Container} */
  container_rings;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_red_ring_0;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_red_ring_1;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_red_ring_2;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_red_ring_3;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_yellow_ring_0;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_yellow_ring_1;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_yellow_ring_2;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_yellow_ring_3;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_green_ring_0;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_green_ring_1;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_green_ring_2;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_green_ring_3;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_blue_ring_0;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_blue_ring_1;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_blue_ring_2;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_blue_ring_3;
  /** @type {Phaser.GameObjects.Container} */
  container_classic_rings;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_red_0;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_red_1;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_red_2;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_red_3;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_yellow_0;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_yellow_1;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_yellow_2;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_yellow_3;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_green_0;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_green_1;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_green_2;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_green_3;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_blue_0;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_blue_1;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_blue_2;
  /** @type {Phaser.GameObjects.Sprite} */
  classic_blue_3;
  /** @type {Phaser.GameObjects.Container} */
  container_classic;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_red_0;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_red_1;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_red_2;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_red_3;
  /** @type {Phaser.GameObjects.Container} */
  container_rush_red;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_yellow_0;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_yellow_1;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_yellow_2;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_yellow_3;
  /** @type {Phaser.GameObjects.Container} */
  container_rush_yellow;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_green_0;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_green_1;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_green_2;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_green_3;
  /** @type {Phaser.GameObjects.Container} */
  container_rush_green;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_blue_0;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_blue_1;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_blue_2;
  /** @type {Phaser.GameObjects.Sprite} */
  rush_blue_3;
  /** @type {Phaser.GameObjects.Container} */
  container_rush_blue;
  /** @type {Phaser.GameObjects.Container} */
  container_rush_tokens;
  /** @type {Phaser.GameObjects.Container} */
  container_rush;
  /** @type {Phaser.GameObjects.Image} */
  ownPlayerCrown;
  /** @type {Phaser.GameObjects.Image} */
  oppPlayerOneCrown;
  /** @type {Phaser.GameObjects.Image} */
  oppPlayerTwoCrown;
  /** @type {Phaser.GameObjects.Image} */
  oppPlayerThreeCrown;
  /** @type {Phaser.GameObjects.Image} */
  red_exit;
  /** @type {Phaser.GameObjects.Image} */
  yellow_exit;
  /** @type {Phaser.GameObjects.Image} */
  green_exit;
  /** @type {Phaser.GameObjects.Image} */
  blue_exit;

  /* START-USER-CODE */
  createPlayerGroups() {
    this.redTokensGroup = this.scene.add.group();
    this.redTokensGroup.add(this.classic_red_0);
    this.redTokensGroup.add(this.classic_red_1);
    this.redTokensGroup.add(this.classic_red_2);
    this.redTokensGroup.add(this.classic_red_3);

    this.yellowTokensGroup = this.scene.add.group();
    this.yellowTokensGroup.add(this.classic_yellow_0);
    this.yellowTokensGroup.add(this.classic_yellow_1);
    this.yellowTokensGroup.add(this.classic_yellow_2);
    this.yellowTokensGroup.add(this.classic_yellow_3);

    this.blueTokensGroup = this.scene.add.group();
    this.blueTokensGroup.add(this.classic_blue_0);
    this.blueTokensGroup.add(this.classic_blue_1);
    this.blueTokensGroup.add(this.classic_blue_2);
    this.blueTokensGroup.add(this.classic_blue_3);

    this.greenTokensGroup = this.scene.add.group();
    this.greenTokensGroup.add(this.classic_green_0);
    this.greenTokensGroup.add(this.classic_green_1);
    this.greenTokensGroup.add(this.classic_green_2);
    this.greenTokensGroup.add(this.classic_green_3);
  }

  createRingGroups() {
    this.redRingsGroup = this.scene.add.group();
    this.redRingsGroup.add(this.classic_red_ring_0);
    this.redRingsGroup.add(this.classic_red_ring_1);
    this.redRingsGroup.add(this.classic_red_ring_2);
    this.redRingsGroup.add(this.classic_red_ring_3);

    this.yellowRingsGroup = this.scene.add.group();
    this.yellowRingsGroup.add(this.classic_yellow_ring_0);
    this.yellowRingsGroup.add(this.classic_yellow_ring_1);
    this.yellowRingsGroup.add(this.classic_yellow_ring_2);
    this.yellowRingsGroup.add(this.classic_yellow_ring_3);

    this.blueRingsGroup = this.scene.add.group();
    this.blueRingsGroup.add(this.classic_blue_ring_0);
    this.blueRingsGroup.add(this.classic_blue_ring_1);
    this.blueRingsGroup.add(this.classic_blue_ring_2);
    this.blueRingsGroup.add(this.classic_blue_ring_3);

    this.greenRingsGroup = this.scene.add.group();
    this.greenRingsGroup.add(this.classic_green_ring_0);
    this.greenRingsGroup.add(this.classic_green_ring_1);
    this.greenRingsGroup.add(this.classic_green_ring_2);
    this.greenRingsGroup.add(this.classic_green_ring_3);
  }

  setGameType(eGameType) {
    if (eGameType === "classic") {
      this.oTokens = this.scene.oGameManager.oTokensClassic;
      this.oTokensInitial = new GameManager().oTokensClassic;
    }
    // if (eGameType == "rush") {
    // 	this.oTokens = this.scene.oGameManager.oTokensRush;
    // 	this.oTokensInitial = new GameManager().oTokensRush;
    // }
  }
  hideRings() {
    this.container_rings.list.forEach((ring) => {
      ring.setVisible(false);
    });
  }
  makeDisableInteractivePawn() {
    if (this.scene.oGameManager.eGameType === "classic") {
      this.redTokensGroup.children.entries.forEach((pawn) => {
        pawn.disableInteractive();
      });
    }
  }

  resetPawnScale() {
    for (let i = 0; i < this.redTokensGroup.children.entries.length; i++) {
      if (!this.redTokensGroup.children.entries[i].__TokenHomes.isHome) {
        this.checkForSamePosition(
          this.redTokensGroup.children.entries[i],
          this.redRingsGroup.children.entries[i],
          this.oTokens[this.redTokensGroup.children.entries[i].name].position
        );
      }
    }
  }

  highlighterAnimationStop() {
    if (this.highlighterAnim !== undefined) {
      this.highlighterAnim.stop();
      this.turn_highlighter_blue.setAlpha(0);
      this.turn_highlighter_yellow.setAlpha(0);
      this.turn_highlighter_red.setAlpha(0);
      this.turn_highlighter_green.setAlpha(0);
    }
  }

  highlighterAnimation(tokenColor) {
    let txtTarget;

    switch (tokenColor) {
      case "b":
        txtTarget = this.turn_highlighter_blue;
        break;
      case "y":
        txtTarget = this.turn_highlighter_yellow;
        break;
      case "r":
        txtTarget = this.turn_highlighter_red;
        break;
      case "g":
        txtTarget = this.turn_highlighter_green;
        break;
    }

    if (this.scene.oGameManager.nMaxPlayer === 2) {
      switch (this.scene.oGameManager.nBoardColor) {
        case 0:
          this.turn_highlighter_green.setTexture("turn_highlighter_blue");
          break;
        case 2:
          this.turn_highlighter_green.setTexture("turn_highlighter_yellow");
          break;
        case 3:
          this.turn_highlighter_green.setTexture("turn_highlighter_green");
          break;
        default:
          this.turn_highlighter_green.setTexture("turn_highlighter_yellow");
          break;
      }
    }

    this.highlighterAnimationStop();

    this.highlighterAnim = this.scene.tweens.add({
      targets: txtTarget,
      alpha: { from: 0, to: 1, from: 1, to: 0 },
      duration: 200,
      repeat: -1,
      ease: "linear",
      yoyo: true,
    });
  }

  setScore(tokenColor, nScore, nScoreInc, nScoreDcr) {
    let newScoreText;

    if (nScoreInc != null) {
      // Score Come from resRollDice
      newScoreText = "+" + nScoreInc;
    } else if (nScoreDcr != null) {
      // Score Come from resSendToHome
      newScoreText = "-" + nScoreDcr;
    }

    switch (tokenColor) {
      case "b":
        this.player_blue_score.setVisible(true);
        this.player_blue_score.setText(`Score\n${nScore}`);
        if (nScoreInc >= 1) {
          this.player_blue_score_inc.setVisible(true);
          this.player_blue_score_inc.setText(newScoreText);
          this.ScoreIncTweenAnimation(
            this.player_blue_score_inc,
            this.player_blue_score
          );
        }
        break;
      case "y":
        this.player_yellow_score.setVisible(true);
        this.player_yellow_score.setText(`Score\n${nScore}`);
        if (nScoreInc >= 1) {
          this.player_yellow_score_inc.setVisible(true);
          this.player_yellow_score_inc.setText(newScoreText);
          this.ScoreIncTweenAnimation(
            this.player_yellow_score_inc,
            this.player_yellow_score
          );
        }
        break;
      case "r":
        this.player_red_score.setVisible(true);
        this.player_red_score.setText(`Score\n${nScore}`);
        if (nScoreInc >= 1) {
          this.player_red_score_inc.setVisible(true);
          this.player_red_score_inc.setText(newScoreText);
          this.ScoreIncTweenAnimation(
            this.player_red_score_inc,
            this.player_red_score
          );
        }
        break;
      case "g":
        this.player_green_score.setVisible(true);
        this.player_green_score.setText(`Score\n${nScore}`);
        if (nScoreInc >= 1) {
          this.player_green_score_inc.setVisible(true);
          this.player_green_score_inc.setText(newScoreText);
          this.ScoreIncTweenAnimation(
            this.player_green_score_inc,
            this.player_green_score
          );
        }
        break;
    }
  }

  ScoreIncTweenAnimation(textTarget, textParentTarget) {
    this.scene.tweens.add({
      targets: textTarget,
      // x: { from: textParentTarget.x, to: `+=100` },
      y: { from: textParentTarget.y, to: `-=100` },
      alpha: { from: 0, to: 1 },
      scaleX: { from: 0, to: 1 },
      scaleY: { from: 0, to: 1 },
      duration: 1000,
      ease: "Power2",
      onComplete: () => {
        textTarget.setVisible(false);
      },
    });
  }

  checkMisalignedPawns(data) {
    if (
      this.scene.oGameManager.eGameType === "classic" ||
      this.scene.oGameManager.eGameType === "twoToken" ||
      this.scene.oGameManager.eGameType === "threeToken"
    ) {
      for (let i = 0; i < data.aParticipant.length; i++) {
        if (
          data.aParticipant[i].sRootSocket ===
          this.scene.oSocketManager.oRootSocketConn.id
        ) {
          for (let j = 0; j < data.aParticipant[i].aPawn.length; j++) {
            if (data.aParticipant[i].aPawn[j] !== 0) {
              // console.log("Our Token :: classic_red_" + j, data.aParticipant[i].aPawn[j]);
              const oToken = eval(
                "this.oTokens." + this.redTokensGroup.children.entries[j].name
              );
              if (oToken.position > -1) {
                if (data.aParticipant[i].aPawn[j] < 52) {
                  if (data.aParticipant[i].aPawn[j] - 1 !== oToken.position) {
                    oToken.position = data.aParticipant[i].aPawn[j] - 1;
                  }
                  if (
                    this.redTokensGroup.children.entries[j].x >=
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].x -
                        30 &&
                    this.redTokensGroup.children.entries[j].x <=
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].x +
                        30 &&
                    this.redTokensGroup.children.entries[j].y >=
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].y -
                        30 &&
                    this.redTokensGroup.children.entries[j].y <=
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].y +
                        30
                  ) {
                    // console.log("All Aligned 1 :: ", this.redTokensGroup.children.entries[j].name, oToken.position);
                  } else {
                    console.log(
                      "Misaligned 1 :: ",
                      this.redTokensGroup.children.entries[j].name,
                      oToken.position
                    );
                    this.redTokensGroup.children.entries[j].x =
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].x;
                    this.redTokensGroup.children.entries[j].y =
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].y;
                    this.redRingsGroup.children.entries[j].x =
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].x;
                    this.redRingsGroup.children.entries[j].y =
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].y;
                    history.back();
                  }
                }
              }
            }
          }
        } else {
          for (let j = 0; j < data.aParticipant[i].aPawn.length; j++) {
            if (data.aParticipant[i].aPawn[j] !== 0) {
              // console.log("Opp Token :: classic_green_" + j, data.aParticipant[i].aPawn[j]);
              const oToken = eval(
                "this.oTokens." + this.greenTokensGroup.children.entries[j].name
              );
              if (oToken.position > -1) {
                if (data.aParticipant[i].aPawn[j] < 52) {
                  if (
                    data.aParticipant[i].aPawn[j] - 1 !== oToken.position &&
                    data.aParticipant[i].aPawn[j] < 26
                  ) {
                    oToken.position = data.aParticipant[i].aPawn[j] + 25;
                  } else if (
                    data.aParticipant[i].aPawn[j] - 1 !== oToken.position &&
                    data.aParticipant[i].aPawn[j] > 25
                  ) {
                    if (
                      this.greenTokensGroup.children.entries[j].x >=
                        this.scene.gameBoard.container_mapping_board.list[
                          data.aParticipant[i].aPawn[j] - 1
                        ].x -
                          30 &&
                      this.greenTokensGroup.children.entries[j].x <=
                        this.scene.gameBoard.container_mapping_board.list[
                          data.aParticipant[i].aPawn[j] - 1
                        ].x +
                          30 &&
                      this.greenTokensGroup.children.entries[j].y >=
                        this.scene.gameBoard.container_mapping_board.list[
                          data.aParticipant[i].aPawn[j] - 1
                        ].y -
                          30 &&
                      this.greenTokensGroup.children.entries[j].y <=
                        this.scene.gameBoard.container_mapping_board.list[
                          data.aParticipant[i].aPawn[j] - 1
                        ].y +
                          30
                    ) {
                      console.log(
                        "All Aligned 2 Else :: ",
                        this.greenTokensGroup.children.entries[j].name,
                        oToken.position
                      );
                    }
                  }
                  if (
                    this.greenTokensGroup.children.entries[j].x >=
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].x -
                        30 &&
                    this.greenTokensGroup.children.entries[j].x <=
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].x +
                        30 &&
                    this.greenTokensGroup.children.entries[j].y >=
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].y -
                        30 &&
                    this.greenTokensGroup.children.entries[j].y <=
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].y +
                        30
                  ) {
                    // console.log("All Aligned 2 :: ", this.greenTokensGroup.children.entries[j].name, oToken.position);
                  } else {
                    console.log(
                      "Misaligned 2 :: ",
                      this.greenTokensGroup.children.entries[j].name,
                      oToken.position
                    );
                    this.greenTokensGroup.children.entries[j].x =
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].x;
                    this.greenTokensGroup.children.entries[j].y =
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].y;
                    this.greenRingsGroup.children.entries[j].x =
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].x;
                    this.greenRingsGroup.children.entries[j].y =
                      this.scene.gameBoard.container_mapping_board.list[
                        oToken.position
                      ].y;
                    history.back();
                  }
                }
              }
            }
          }
        }
      }
    }
    this.checkTokenPosition(data);
  }
  checkTokenPosition(data) {
    if (
      this.scene.oGameManager.eGameType === "classic" ||
      this.scene.oGameManager.eGameType === "twoToken" ||
      this.scene.oGameManager.eGameType === "threeToken"
    ) {
      for (let i = 0; i < data.aParticipant.length; i++) {
        if (
          data.aParticipant[i].sRootSocket ===
          this.scene.oSocketManager.oRootSocketConn.id
        ) {
          for (let j = 0; j < data.aParticipant[i].aPawn.length; j++) {
            if (data.aParticipant[i].aPawn[j] !== 0) {
              const oToken = eval(
                "this.oTokens." + this.redTokensGroup.children.entries[j].name
              );
              console.log("HH OWN :: ", oToken.position);
              if (oToken.position > 57) {
                console.log("HH OWN Triggered");
                history.back();
              }
            }
          }
        } else {
          for (let j = 0; j < data.aParticipant[i].aPawn.length; j++) {
            if (data.aParticipant[i].aPawn[j] !== 0) {
              // console.log("Opp Token :: classic_green_" + j, data.aParticipant[i].aPawn[j]);
              const oToken = eval(
                "this.oTokens." + this.greenTokensGroup.children.entries[j].name
              );
              console.log("HH OPP :: ", oToken.position);
              if (oToken.position > 69) {
                console.log("HH OPP Triggered");
                history.back();
              }
            }
          }
        }
      }
    }
  }

  playMoveAnimation(nPawn, nMove, nDestination, nRing) {
    let delay = 0;
    let duration = 0;
    let pawnsAt48 = [];
    this.container_classic.bringToTop(nPawn);
    const oToken = eval("this.oTokens." + nPawn.name);
    let s = oToken.position + 1;
    for (let i = 1; i <= nMove; i++) {
      s = this.checkIsInHouseEntryPoint(s, nPawn);
      if (
        (nPawn.name.includes("green") && s == 52) ||
        (nPawn.name.includes("yellow") && s == 52) ||
        (nPawn.name.includes("blue") && s == 52)
      ) {
        s = 0;
      }
      if (this.scene.oGameManager.isRefresh === true) {
        nPawn.x = this.scene.gameBoard.container_mapping_board.list[s].x;
        nPawn.y = this.scene.gameBoard.container_mapping_board.list[s].y;
        nRing.x = this.scene.gameBoard.container_mapping_board.list[s].x;
        nRing.y = this.scene.gameBoard.container_mapping_board.list[s].y;
        if (i == nMove) {
          nPawn.__TokenHomes.isHome = false;
          oToken.finalPosition = nDestination;
          oToken.position = s;
          nPawn.setScale(0.9, 0.9);
          nRing.setScale(0.9, 0.9);
          this.checkForSamePosition(nPawn, nRing, oToken.position);
        }
      } else if (this.scene.oGameManager.isRefresh === false) {
        // particle code here
        if (nPawn.__TokenHomes.isHome) {
          this.scene.tweens.add({
            targets: [nPawn, nRing],
            x: this.scene.gameBoard.container_mapping_board.list[s].x,
            y: this.scene.gameBoard.container_mapping_board.list[s].y,
            scaleX: 0.9,
            scaleY: 0.9,
            ease: "Linear",
            duration: this.scene.oGameManager.nPawnMoveDelayAtHome,
            delay: delay,
            onComplete: () => {
              nPawn.__TokenHomes.isHome = false;
              this.addPositionParticles(nPawn.x, nPawn.y, nPawn.texture.key);
              oToken.position = s;
              if (i == nMove) {
                oToken.finalPosition = nDestination;
                nPawn.setScale(0.9, 0.9);
                nRing.setScale(0.9, 0.9);
                // this.scene.reqPawnCheck();
                this.checkOnSafeHouse(nPawn.name, s);
                this.checkForSamePosition(nPawn, nRing, s - nMove);
                this.checkForSamePosition(nPawn, nRing, s);
                this.arrangeDepth();
                this.resetPawnScale();
              }
            },
          });
        } else {
          this.scene.tweens.add({
            targets: [nPawn, nRing],
            x: this.scene.gameBoard.container_mapping_board.list[s].x,
            y: this.scene.gameBoard.container_mapping_board.list[s].y,
            scaleX: { from: 0.9, to: 1.015625, from: 1.015625, to: 0.9 },
            scaleY: { from: 0.9, to: 1.015625, from: 1.015625, to: 0.9 },
            ease: "Power2",
            duration: this.scene.oGameManager.nPawnMoveDelay - 100,
            delay: delay,
            onUpdate: () => {
              setTimeout(() => {
                this.arrangeDepth();
                this.checkForSamePosition(nPawn, nRing, s - nMove);
              }, 120);
            },
            onComplete: () => {
              if (
                (!nPawn.name.includes("classic_red") && s != 0) ||
                (!nPawn.name.includes("classic_yellow") && s != 13) ||
                (!nPawn.name.includes("classic_green") && s != 26) ||
                (!nPawn.name.includes("classic_blue") && s != 39)
              ) {
                this.scene.oSoundManager.playSound(
                  this.scene.oSoundManager.pawnMoveSound,
                  false
                );
              }
              oToken.position = s;
              this.addPositionParticles(nPawn.x, nPawn.y, nPawn.texture.key);
              if (i == nMove - 1) {
                this.arrangeDepth();
                this.checkForSamePosition(nPawn, nRing, s - nMove);
                this.checkForSamePosition(nPawn, nRing, s);
                this.resetPawnScale();
              }
              if (i == nMove) {
                oToken.finalPosition = nDestination;
                nPawn.__TokenHomes.isAtSafeHouse = false;
                this.arrangeDepth();
                nPawn.setScale(0.9, 0.9);
                nRing.setScale(0.9, 0.9);
                // this.scene.reqPawnCheck();
                this.checkOnSafeHouse(nPawn.name, s);
                this.checkForSamePosition(nPawn, nRing, s - nMove);
                this.checkForSamePosition(nPawn, nRing, s);
                this.resetPawnScale();
              }
            },
          });
        }
      }
      if (i != nMove) s++;
      delay += this.scene.oGameManager.nPawnMoveDelay - 120;
    }
  }

  arrangeDepth = () => {
    const tokenArray = [];
    this.newTokenPosition = [];
    for (const key in this.oTokens) {
      if (
        this.oTokens.hasOwnProperty(key) &&
        !key.includes("classic_blue") &&
        !key.includes("classic_yellow")
      ) {
        tokenArray.push({
          tokenKey: key,
          finalPosition: this.oTokens[key].finalPosition,
        });
      }
    }

    tokenArray.sort((a, b) => a.finalPosition - b.finalPosition);

    for (const tokenObj of tokenArray) {
      const tokenKey = tokenObj.tokenKey;
      const finalPosition = tokenObj.finalPosition;

      if (
        this[tokenKey].name.includes("classic_red") &&
        finalPosition < 26 &&
        finalPosition != 14
      ) {
        // console.log("1");
        this.container_classic.sendToBack(this[tokenKey]);
      }

      if (this[tokenKey].name.includes("classic_green") && finalPosition < 26) {
        // console.log("2", this[tokenKey].name, finalPosition);
        this.container_classic.bringToTop(this[tokenKey]);
      }

      if (
        this[tokenKey].name.includes("classic_red") &&
        finalPosition > 25 &&
        finalPosition < 51
      ) {
        // console.log("3");
        this.newTokenPosition.push({
          tokenKey: this[tokenKey].name,
          finalPosition: finalPosition - 25,
        });
        this.newPosition(this.newTokenPosition);
      }

      if (
        this[tokenKey].name.includes("classic_green") &&
        finalPosition > 25 &&
        finalPosition < 51 &&
        finalPosition != 40
      ) {
        // console.log("4", this[tokenKey].name, finalPosition);
        this.newTokenPosition.push({
          tokenKey: this[tokenKey].name,
          finalPosition: finalPosition - 25,
        });
        this.newPosition(this.newTokenPosition);
      }

      if (this[tokenKey].name.includes("classic_red") && finalPosition > 51) {
        // console.log("5");
        this.container_classic.sendToBack(this[tokenKey]);
      }

      if (this[tokenKey].name.includes("classic_green") && finalPosition > 51) {
        // console.log("6");
        this.container_classic.bringToTop(this[tokenKey]);
      }

      if (
        this[tokenKey].name.includes("classic_red") &&
        (finalPosition === 14 || finalPosition === 9)
      ) {
        // console.log("7", this[tokenKey].name);
        this.container_classic.sendToBack(this[tokenKey]);
      }

      if (
        this[tokenKey].name.includes("classic_green") &&
        (finalPosition === 40 || finalPosition === 35)
      ) {
        // console.log("8", this[tokenKey].name);
        this.container_classic.bringToTop(this[tokenKey]);
      }
    }
  };

  newPosition(aNewTokenPosition) {
    const newTokenArray = [];
    if (newTokenArray != null) {
      for (const key in this.oTokens) {
        if (
          this.oTokens.hasOwnProperty(key) &&
          !key.includes("classic_blue") &&
          !key.includes("classic_yellow")
        ) {
          for (let i = 0; i < aNewTokenPosition.length; i++) {
            if (key.includes(aNewTokenPosition[i].tokenKey)) {
              newTokenArray.push({
                tokenKey: key,
                finalPosition: aNewTokenPosition[i].finalPosition - 1,
                isNew: true,
              });
            } else {
              newTokenArray.push({
                tokenKey: key,
                finalPosition: this.oTokens[key].finalPosition,
                isNew: false,
              });
            }
          }
        }
      }

      newTokenArray.sort((a, b) => a.finalPosition - b.finalPosition);

      for (const tokenObj of newTokenArray) {
        const tokenKey = tokenObj.tokenKey;
        const finalPosition = tokenObj.finalPosition;
        const isNewTrue = tokenObj.isNew;
        let isRed = false;
        let isGreen = false;

        if (isRed && !isNewTrue) {
          this.container_classic.bringToTop(this[tokenKey]);
        }

        if (isGreen && !isNewTrue) {
          this.container_classic.sendToBack(this[tokenKey]);
        }

        if (
          this[tokenKey].name.includes("classic_green") &&
          finalPosition < 26 &&
          !isNewTrue &&
          !isRed
        ) {
          this.container_classic.bringToTop(this[tokenKey]);
        }

        if (
          this[tokenKey].name.includes("classic_red") &&
          finalPosition < 26 &&
          !isNewTrue &&
          !isRed
        ) {
          this.container_classic.sendToBack(this[tokenKey]);
        }

        if (
          this[tokenKey].name.includes("classic_red") &&
          isNewTrue &&
          !isRed
        ) {
          isRed = !isRed;
          this.container_classic.bringToTop(this[tokenKey]);
        }

        if (
          this[tokenKey].name.includes("classic_green") &&
          isNewTrue &&
          !isGreen
        ) {
          isGreen = !isGreen;
          this.container_classic.sendToBack(this[tokenKey]);
        }
      }
    }
  }

  addPositionParticles(posX, posY, color) {
    const particles = this.scene.add.particles(`${color}-particle`);

    this.container_particles.add(particles);

    const particleEmitter = particles.createEmitter({
      scale: { start: 0.2, end: 1 },
      maxVelocityX: 0,
      maxVelocityY: 0,
      quantity: 1,
      lifespan: 250,
    });

    particleEmitter.setPosition(posX, posY);
    particleEmitter.explode();
  }

  checkForSamePosition(nPawn, nRing, s) {
    if (s <= -5 || (s >= 48 && s <= 51)) {
      s = 47;
    }
    if (s == 60) {
      s = 21;
    }
    if (s == 61) {
      s = 22;
    }
    if (s == 62) {
      s = 23;
    }
    const aPawnWithSamePosition = [];
    const aRingWithSamePosition = [];

    if (this.scene.oGameManager.eGameType === "classic") {
      if (!this.aPawnOnBoard.includes(nPawn.name)) {
        this.aPawnOnBoard.push(nPawn.name);
        this.aRingOnBoard.push(nRing.name);
      }
    }
    if (this.aPawnOnBoard.length > 1) {
      this.aPawnOnBoard.forEach((pawnName) => {
        const checkPawnPosition = eval("this.oTokens." + pawnName);
        if (checkPawnPosition.position == s) {
          const samePawn = eval("this." + pawnName);
          aPawnWithSamePosition.push(samePawn);
        }
      });
    }
    if (this.aRingOnBoard.length > 1) {
      this.aRingOnBoard.forEach((ringName) => {
        const newRingName = ringName.replace(/_ring_/g, "_");
        const checkRingPosition = eval("this.oTokens." + newRingName);
        if (checkRingPosition.position == s) {
          const sameRing = eval("this." + ringName);
          aRingWithSamePosition.push(sameRing);
        }
      });
    }
    this.arrangePawns(aPawnWithSamePosition, aRingWithSamePosition, s);
  }

  arrangePawns(aPawnWithSamePosition, aRingWithSamePosition, s) {
    if (s < 0) {
      return;
    }

    const containsClassicRed = aPawnWithSamePosition.every((item) =>
      item.name.includes("classic_red")
    );
    const containsClassicGreen = aPawnWithSamePosition.every((item) =>
      item.name.includes("classic_green")
    );

    if (
      aPawnWithSamePosition.length == 3 &&
      aRingWithSamePosition.length == 3
    ) {
      let posX =
        this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s].x -
        20;
      let posY =
        this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s].y;

      let ringPosX =
        this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s].x -
        20;
      let ringPosY =
        this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s].y;

      aPawnWithSamePosition.sort((a, b) => {
        let numA = parseInt(a.name.split("_").pop());
        let numB = parseInt(b.name.split("_").pop());

        return numB - numA;
      });
      aRingWithSamePosition.sort((a, b) => {
        let numA = parseInt(a.name.split("_").pop());
        let numB = parseInt(b.name.split("_").pop());

        return numB - numA;
      });
      aPawnWithSamePosition.forEach((pawn) => {
        pawn.setScale(0.5, 0.5);
        pawn.setX(posX);
        pawn.setY(posY);
        posX += 20;
      });
      aRingWithSamePosition.forEach((ring) => {
        ring.setScale(0.5, 0.5);
        ring.setX(ringPosX);
        ring.setY(ringPosY);
        ringPosX += 20;
      });
    }

    if (
      (aPawnWithSamePosition.length == 4) &
      (aRingWithSamePosition.length == 4)
    ) {
      let posX =
        this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s].x;
      let posY =
        this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s].y;

      let ringPosX =
        this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s].x;
      let ringPosY =
        this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s].y;

      let tempCounter = 0;
      let ringTempCounter = 0;

      aPawnWithSamePosition.sort((a, b) => {
        let numA = parseInt(a.name.split("_").pop());
        let numB = parseInt(b.name.split("_").pop());

        return numB - numA;
      });
      aRingWithSamePosition.sort((a, b) => {
        let numA = parseInt(a.name.split("_").pop());
        let numB = parseInt(b.name.split("_").pop());

        return numB - numA;
      });
      aPawnWithSamePosition.forEach((pawn) => {
        pawn.setScale(0.4, 0.4);
        switch (tempCounter) {
          case 0:
            pawn.setX(posX - 30);
            pawn.setY(posY);
            break;
          case 1:
            pawn.setX(posX - 10);
            pawn.setY(posY);
            break;
          case 2:
            pawn.setX(posX + 10);
            pawn.setY(posY);
            break;
          case 3:
            pawn.setX(posX + 30);
            pawn.setY(posY);
            break;
        }
        tempCounter++;
      });
      aRingWithSamePosition.forEach((ring) => {
        ring.setScale(0.4, 0.4);
        switch (ringTempCounter) {
          case 0:
            ring.setX(ringPosX - 30);
            ring.setY(ringPosY);
            break;
          case 1:
            ring.setX(ringPosX - 10);
            ring.setY(ringPosY);
            break;
          case 2:
            ring.setX(ringPosX + 10);
            ring.setY(ringPosY);
            break;
          case 3:
            ring.setX(ringPosX + 30);
            ring.setY(ringPosY);
            break;
        }
        ringTempCounter++;
      });
    }

    if (
      containsClassicRed ||
      containsClassicGreen ||
      ((s == 0 ||
        s == 8 ||
        s == 13 ||
        s == 21 ||
        s == 26 ||
        s == 34 ||
        s == 39 ||
        s == 47) &&
        aPawnWithSamePosition !== undefined &&
        s >= 0)
    ) {
      if (
        aPawnWithSamePosition.length == 1 &&
        aRingWithSamePosition.length == 1
      ) {
        aPawnWithSamePosition[0].setScale(0.9, 0.9);
        aPawnWithSamePosition[0].setX(
          this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s].x
        );
        aPawnWithSamePosition[0].setY(
          this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s].y
        );

        aRingWithSamePosition[0].setScale(0.9, 0.9);
        aRingWithSamePosition[0].setX(
          this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s].x
        );
        aRingWithSamePosition[0].setY(
          this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s].y
        );
      }
      if (
        aPawnWithSamePosition.length == 2 &&
        aRingWithSamePosition.length == 2
      ) {
        if (s == 13 || s == 8) {
          let posY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y - 15;
          let ringPosY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y - 15;
          aPawnWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 2];
            let colorB = partsB[partsB.length - 2];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numB - numA;
            } else if (colorA === "green") {
              return 1;
            } else if (colorB === "green") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aRingWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 3];
            let colorB = partsB[partsB.length - 3];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numB - numA;
            } else if (colorA === "green") {
              return 1;
            } else if (colorB === "green") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aPawnWithSamePosition.forEach((pawn) => {
            pawn.setScale(0.6, 0.6);
            pawn.setY(posY);
            posY += 30;
          });
          aRingWithSamePosition.forEach((ring) => {
            ring.setScale(0.6, 0.6);
            ring.setY(ringPosY);
            ringPosY += 30;
          });
        } else if (s > 4 && s < 18 && s != 13) {
          let posY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y - 15;
          let ringPosY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y - 15;
          aPawnWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 2];
            let colorB = partsB[partsB.length - 2];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numB - numA;
            } else if (colorA === "red") {
              return 1;
            } else if (colorB === "red") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aRingWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 3];
            let colorB = partsB[partsB.length - 3];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numB - numA;
            } else if (colorA === "red") {
              return 1;
            } else if (colorB === "red") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aPawnWithSamePosition.forEach((pawn) => {
            console.log(pawn.name);
            pawn.setScale(0.6, 0.6);
            pawn.setY(posY);
            posY += 30;
          });
          aRingWithSamePosition.forEach((ring) => {
            console.log(ring.name);
            ring.setScale(0.6, 0.6);
            ring.setY(ringPosY);
            ringPosY += 30;
          });
        } else if (s > 30 && s < 44) {
          let posY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y - 15;
          let ringPosY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y - 15;

          aPawnWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 2];
            let colorB = partsB[partsB.length - 2];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numA - numB;
            } else if (colorA === "green") {
              return 1;
            } else if (colorB === "green") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aRingWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 3];
            let colorB = partsB[partsB.length - 3];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numA - numB;
            } else if (colorA === "green") {
              return 1;
            } else if (colorB === "green") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aPawnWithSamePosition.forEach((pawn) => {
            pawn.setScale(0.6, 0.6);
            pawn.setY(posY);
            posY += 30;
          });
          aRingWithSamePosition.forEach((ring) => {
            ring.setScale(0.6, 0.6);
            ring.setY(ringPosY);
            ringPosY += 30;
          });
        } else {
          let posX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x - 15;
          let ringPosX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x - 15;

          aPawnWithSamePosition.sort((a, b) => {
            let numA = parseInt(a.name.split("_").pop());
            let numB = parseInt(b.name.split("_").pop());

            return numB - numA;
          });
          aRingWithSamePosition.sort((a, b) => {
            let numA = parseInt(a.name.split("_").pop());
            let numB = parseInt(b.name.split("_").pop());

            return numB - numA;
          });
          aPawnWithSamePosition.forEach((pawn) => {
            pawn.setScale(0.6, 0.6);
            pawn.setX(posX);
            posX += 30;
          });
          aRingWithSamePosition.forEach((ring) => {
            ring.setScale(0.6, 0.6);
            ring.setX(ringPosX);
            ringPosX += 30;
          });
        }
      }

      if (
        aPawnWithSamePosition.length == 3 &&
        aRingWithSamePosition.length == 3
      ) {
        if (s > 4 && s < 18) {
          let posX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x;
          let posY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y - 20;

          let ringPosX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x;
          let ringPosY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y - 20;

          aPawnWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 2];
            let colorB = partsB[partsB.length - 2];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numB - numA;
            } else if (colorA === "red") {
              return 1;
            } else if (colorB === "red") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aRingWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 3];
            let colorB = partsB[partsB.length - 3];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numB - numA;
            } else if (colorA === "red") {
              return 1;
            } else if (colorB === "red") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aPawnWithSamePosition.forEach((pawn) => {
            pawn.setScale(0.5, 0.5);
            pawn.setX(posX);
            pawn.setY(posY);
            posY += 20;
          });
          aRingWithSamePosition.forEach((ring) => {
            ring.setScale(0.5, 0.5);
            ring.setX(ringPosX);
            ring.setY(ringPosY);
            ringPosY += 20;
          });
        } else if (s > 30 && s < 44) {
          let posX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x;
          let posY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y - 20;

          let ringPosX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x;
          let ringPosY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y - 20;

          aPawnWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 2];
            let colorB = partsB[partsB.length - 2];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numA - numB;
            } else if (colorA === "green") {
              return 1;
            } else if (colorB === "green") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aRingWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 3];
            let colorB = partsB[partsB.length - 3];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numA - numB;
            } else if (colorA === "green") {
              return 1;
            } else if (colorB === "green") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aPawnWithSamePosition.forEach((pawn) => {
            pawn.setScale(0.5, 0.5);
            pawn.setX(posX);
            pawn.setY(posY);
            posY += 20;
          });
          aRingWithSamePosition.forEach((ring) => {
            ring.setScale(0.5, 0.5);
            ring.setX(ringPosX);
            ring.setY(ringPosY);
            ringPosY += 20;
          });
        } else {
          let posX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x - 20;
          let posY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y;

          let ringPosX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x - 20;
          let ringPosY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y;

          aPawnWithSamePosition.sort((a, b) => {
            let numA = parseInt(a.name.split("_").pop());
            let numB = parseInt(b.name.split("_").pop());

            return numB - numA;
          });
          aRingWithSamePosition.sort((a, b) => {
            let numA = parseInt(a.name.split("_").pop());
            let numB = parseInt(b.name.split("_").pop());

            return numB - numA;
          });
          aPawnWithSamePosition.forEach((pawn) => {
            pawn.setScale(0.5, 0.5);
            pawn.setX(posX);
            pawn.setY(posY);
            posX += 20;
          });
          aRingWithSamePosition.forEach((ring) => {
            ring.setScale(0.5, 0.5);
            ring.setX(ringPosX);
            ring.setY(ringPosY);
            ringPosX += 20;
          });
        }
      }

      if (
        aPawnWithSamePosition.length == 4 &&
        aRingWithSamePosition.length == 4
      ) {
        if (s > 4 && s < 18) {
          let posX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x;
          let posY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y;

          let ringPosX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x;
          let ringPosY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y;

          let tempCounter = 0;
          let ringTempCounter = 0;
          aPawnWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 2];
            let colorB = partsB[partsB.length - 2];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numB - numA;
            } else if (colorA === "red") {
              return 1;
            } else if (colorB === "red") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aRingWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 3];
            let colorB = partsB[partsB.length - 3];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numB - numA;
            } else if (colorA === "red") {
              return 1;
            } else if (colorB === "red") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aPawnWithSamePosition.forEach((pawn) => {
            pawn.setScale(0.4, 0.4);
            switch (tempCounter) {
              case 0:
                pawn.setX(posX);
                pawn.setY(posY - 30);
                break;
              case 1:
                pawn.setX(posX);
                pawn.setY(posY - 10);
                break;
              case 2:
                pawn.setX(posX);
                pawn.setY(posY + 10);
                break;
              case 3:
                pawn.setX(posX);
                pawn.setY(posY + 30);
                break;
            }
            tempCounter++;
          });
          aRingWithSamePosition.forEach((ring) => {
            ring.setScale(0.4, 0.4);
            switch (ringTempCounter) {
              case 0:
                ring.setX(ringPosX);
                ring.setY(ringPosY - 30);
                break;
              case 1:
                ring.setX(ringPosX);
                ring.setY(ringPosY - 10);
                break;
              case 2:
                ring.setX(ringPosX);
                ring.setY(ringPosY + 10);
                break;
              case 3:
                ring.setX(ringPosX);
                ring.setY(ringPosY + 30);
                break;
            }
            ringTempCounter++;
          });
        } else if (s > 30 && s < 44) {
          let posX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x;
          let posY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y;

          let ringPosX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x;
          let ringPosY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y;

          let tempCounter = 0;
          let ringTempCounter = 0;

          aPawnWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 2];
            let colorB = partsB[partsB.length - 2];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numA - numB;
            } else if (colorA === "green") {
              return 1;
            } else if (colorB === "green") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aRingWithSamePosition.sort((a, b) => {
            let partsA = a.name.split("_");
            let partsB = b.name.split("_");

            let colorA = partsA[partsA.length - 3];
            let colorB = partsB[partsB.length - 3];

            let numA = parseInt(partsA.pop());
            let numB = parseInt(partsB.pop());

            if (colorA === colorB) {
              return numA - numB;
            } else if (colorA === "green") {
              return 1;
            } else if (colorB === "green") {
              return -1;
            } else {
              return colorA.localeCompare(colorB);
            }
          });
          aPawnWithSamePosition.forEach((pawn) => {
            pawn.setScale(0.4, 0.4);
            switch (tempCounter) {
              case 0:
                pawn.setX(posX);
                pawn.setY(posY - 30);
                break;
              case 1:
                pawn.setX(posX);
                pawn.setY(posY - 10);
                break;
              case 2:
                pawn.setX(posX);
                pawn.setY(posY + 10);
                break;
              case 3:
                pawn.setX(posX);
                pawn.setY(posY + 30);
                break;
            }
            tempCounter++;
          });
          aRingWithSamePosition.forEach((ring) => {
            ring.setScale(0.4, 0.4);
            switch (ringTempCounter) {
              case 0:
                ring.setX(ringPosX);
                ring.setY(ringPosY - 30);
                break;
              case 1:
                ring.setX(ringPosX);
                ring.setY(ringPosY - 10);
                break;
              case 2:
                ring.setX(ringPosX);
                ring.setY(ringPosY + 10);
                break;
              case 3:
                ring.setX(ringPosX);
                ring.setY(ringPosY + 30);
                break;
            }
            ringTempCounter++;
          });
        } else {
          let posX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x;
          let posY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y;

          let ringPosX =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .x;
          let ringPosY =
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
              .y;

          let tempCounter = 0;
          let ringTempCounter = 0;

          aPawnWithSamePosition.sort((a, b) => {
            let numA = parseInt(a.name.split("_").pop());
            let numB = parseInt(b.name.split("_").pop());

            return numB - numA;
          });
          aRingWithSamePosition.sort((a, b) => {
            let numA = parseInt(a.name.split("_").pop());
            let numB = parseInt(b.name.split("_").pop());

            return numB - numA;
          });
          aPawnWithSamePosition.forEach((pawn) => {
            pawn.setScale(0.4, 0.4);
            switch (tempCounter) {
              case 0:
                pawn.setX(posX - 30);
                pawn.setY(posY);
                break;
              case 1:
                pawn.setX(posX - 10);
                pawn.setY(posY);
                break;
              case 2:
                pawn.setX(posX + 10);
                pawn.setY(posY);
                break;
              case 3:
                pawn.setX(posX + 30);
                pawn.setY(posY);
                break;
            }
            tempCounter++;
          });
          aRingWithSamePosition.forEach((ring) => {
            ring.setScale(0.4, 0.4);
            switch (ringTempCounter) {
              case 0:
                ring.setX(ringPosX - 30);
                ring.setY(ringPosY);
                break;
              case 1:
                ring.setX(ringPosX - 10);
                ring.setY(ringPosY);
                break;
              case 2:
                ring.setX(ringPosX + 10);
                ring.setY(ringPosY);
                break;
              case 3:
                ring.setX(ringPosX + 30);
                ring.setY(ringPosY);
                break;
            }
            ringTempCounter++;
          });
        }
      }

      if (
        aPawnWithSamePosition.length == 5 &&
        aRingWithSamePosition.length == 5
      ) {
        let posX =
          this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
            .x;
        let posY =
          this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
            .y;

        let ringPosX =
          this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
            .x;
        let ringPosY =
          this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
            .y;

        let tempCounter = 0;
        let ringTempCounter = 0;

        aPawnWithSamePosition.forEach((pawn) => {
          pawn.setScale(0.4, 0.4);
          switch (tempCounter) {
            case 0:
              pawn.setX(posX - 10);
              pawn.setY(posY - 15);
              break;
            case 1:
              pawn.setX(posX + 10);
              pawn.setY(posY - 15);
              break;
            case 2:
              pawn.setX(posX - 15);
              pawn.setY(posY + 15);
              break;
            case 3:
              pawn.setX(posX);
              pawn.setY(posY + 15);
              break;
            case 4:
              pawn.setX(posX + 15);
              pawn.setY(posY + 15);
              break;
          }
          tempCounter++;
        });
        aRingWithSamePosition.forEach((ring) => {
          ring.setScale(0.4, 0.4);
          switch (ringTempCounter) {
            case 0:
              ring.setX(ringPosX - 10);
              ring.setY(ringPosY - 15);
              break;
            case 1:
              ring.setX(ringPosX + 10);
              ring.setY(ringPosY - 15);
              break;
            case 2:
              ring.setX(ringPosX - 15);
              ring.setY(ringPosY + 15);
              break;
            case 3:
              ring.setX(ringPosX);
              ring.setY(ringPosY + 15);
              break;
            case 4:
              ring.setX(ringPosX + 15);
              ring.setY(ringPosY + 15);
              break;
          }
          ringTempCounter++;
        });
      }
      if (
        aPawnWithSamePosition.length == 6 &&
        aRingWithSamePosition.length == 6
      ) {
        let posX =
          this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
            .x;
        let posY =
          this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
            .y;

        let ringPosX =
          this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
            .x;
        let ringPosY =
          this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[s]
            .y;

        let tempCounter = 0;
        let ringTempCounter = 0;

        aPawnWithSamePosition.forEach((pawn) => {
          pawn.setScale(0.4, 0.4);
          switch (tempCounter) {
            case 0:
              pawn.setX(posX - 20);
              pawn.setY(posY - 15);
              break;
            case 1:
              pawn.setX(posX);
              pawn.setY(posY - 15);
              break;
            case 2:
              pawn.setX(posX + 20);
              pawn.setY(posY - 15);
              break;
            case 3:
              pawn.setX(posX - 20);
              pawn.setY(posY + 15);
              break;
            case 4:
              pawn.setX(posX);
              pawn.setY(posY + 15);
              break;
            case 5:
              pawn.setX(posX + 20);
              pawn.setY(posY + 15);
              break;
          }
          tempCounter++;
        });
        aRingWithSamePosition.forEach((ring) => {
          ring.setScale(0.4, 0.4);
          switch (ringTempCounter) {
            case 0:
              ring.setX(ringPosX - 20);
              ring.setY(ringPosY - 15);
              break;
            case 1:
              ring.setX(ringPosX);
              ring.setY(ringPosY - 15);
              break;
            case 2:
              ring.setX(ringPosX + 20);
              ring.setY(ringPosY - 15);
              break;
            case 3:
              ring.setX(ringPosX - 20);
              ring.setY(ringPosY + 15);
              break;
            case 4:
              ring.setX(ringPosX);
              ring.setY(ringPosY + 15);
              break;
            case 5:
              ring.setX(ringPosX + 20);
              ring.setY(ringPosY + 15);
              break;
          }
          ringTempCounter++;
        });
      }
    } else {
      return;
    }
  }

  checkOnSafeHouse(pawnName, i) {
    if (
      this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[i]
        .__SafeHousePointer
    ) {
      if (
        this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[i]
          .__SafeHousePointer.isAtHome
      ) {
        if (this.scene.oGameManager.nMaxPlayer === 2) {
          this.isAtHomeParticlePosition(
            this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[i]
          );
        }
        this.scene.oSoundManager.playSound(
          this.scene.oSoundManager.pawnReachHomeSound,
          false
        );
      }
      if (
        this.scene.gameBoard.scene.gameBoard.container_mapping_board.list[i]
          .__SafeHousePointer.isSafeHouse
      ) {
        if (pawnName.includes("classic_red") && i === 0) {
          return;
        }
        if (pawnName.includes("classic_yellow") && i === 13) {
          return;
        }
        if (pawnName.includes("classic_green") && i === 26) {
          return;
        }
        if (pawnName.includes("classic_blue") && i === 39) {
          return;
        } else {
          this.scene.oSoundManager.playSound(
            this.scene.oSoundManager.pawnSafeHouseSound,
            false
          );
          return true;
        }
      }
    }
    return false;
  }

  isAtHomeParticlePosition(target) {
    let particleColor;
    if (target.name.includes("fiftyEight")) {
      switch (this.scene.oGameManager.nBoardColor) {
        case 0:
          particleColor = "blue-particle";
          break;
        case 2:
          particleColor = "yellow-particle";
          break;
        case 3:
          particleColor = "green-particle";
          break;
        default:
          particleColor = "yellow-particle";
          break;
      }
    } else {
      particleColor = "red-particle";
    }

    let particles = this.scene.add.particles(particleColor);

    let emitter = particles.createEmitter({
      speed: { min: 100, max: 300 },
      angle: { min: 360, max: 0 },
      lifespan: { min: 400, max: 500 },
      gravityY: 30,
      scale: { start: 0.2, end: 0 },
      quantity: 100,
      blendMode: "ADD",
      on: false,
    });

    emitter.setPosition(
      this.scene.container_board.x + target.x + this.scene.gameBoard.x,
      this.scene.container_board.y + target.y + this.scene.gameBoard.y
    );

    emitter.explode(
      200,
      this.scene.container_board.x + target.x + this.scene.gameBoard.x,
      this.scene.container_board.y + target.y + this.scene.gameBoard.y
    );

    setTimeout(() => {
      emitter.stop();
    }, 2000);
  }

  checkIsInHouseEntryPoint(i, nPawn) {
    if (
      this.scene.gameBoard.container_mapping_board.list[i].__InHouseEntryPointer
    ) {
      if (
        nPawn.name.includes("red") &&
        this.scene.gameBoard.container_mapping_board.list[i]
          .__InHouseEntryPointer.tokenIdentifier == "red"
      ) {
        return parseInt(
          this.scene.gameBoard.container_mapping_board.list[i]
            .__InHouseEntryPointer.moveToBox
        );
      } else if (
        nPawn.name.includes("green") &&
        this.scene.gameBoard.container_mapping_board.list[i]
          .__InHouseEntryPointer.tokenIdentifier == "green"
      ) {
        return parseInt(
          this.scene.gameBoard.container_mapping_board.list[i]
            .__InHouseEntryPointer.moveToBox
        );
      }
    }
    return i;
  }

  sendToHomeAnimation(nPawn, nRing) {
    const indexOfPawn = this.aPawnOnBoard.indexOf(nPawn.name);
    const indexOfRing = this.aRingOnBoard.indexOf(nRing.name);

    if (this.scene.oGameManager.eGameType === "classic") {
      if (indexOfPawn > -1) {
        this.aPawnOnBoard.splice(indexOfPawn, 1);
      }
      if (indexOfRing > -1) {
        this.aRingOnBoard.splice(indexOfRing, 1);
      }
    }
    let delay = 180;
    const oToken = eval("this.oTokens." + nPawn.name);
    const oInitialToken = eval("this.oTokensInitial." + nPawn.name);
    this.container_classic.bringToTop(nPawn);
    let nTotalSteps = oToken.finalPosition;
    let s = oToken.position - 1;
    for (let i = nTotalSteps; i > 0; i--) {
      if (s < 0) s = 51;
      if (i == 1) {
        s = nPawn.__TokenHomes.index;
      }
      if (s == nPawn.__TokenHomes.index) {
        this.scene.tweens.add({
          targets: [nPawn, nRing],
          x: this.scene.gameBoard.container_mapping_board.list[s].x,
          y: this.scene.gameBoard.container_mapping_board.list[s].y,
          ease: "Linear",
          duration: this.scene.oGameManager.nPawnMoveDelayAtHome,
          delay: delay,
          onComplete: () => {
            nPawn.__TokenHomes.isHome = true;
            oToken.position = oInitialToken.position;
            this.resetPawnScale();
            if (i === 1) {
              if (this.scene.oGameManager.eGameType === "classic") {
                nPawn.setScale(1, 1);
                nRing.setScale(1, 1);
              }
              this.scene.oSoundManager.stopSound(
                this.scene.oSoundManager.pawnDieSound,
                false
              );
              // this.scene.reqPawnCheck();
            }
          },
        });
      } else {
        this.scene.tweens.add({
          targets: [nPawn, nRing],
          x: this.scene.gameBoard.container_mapping_board.list[s].x,
          y: this.scene.gameBoard.container_mapping_board.list[s].y,
          duration: 50,
          delay: delay,
          onComplete: () => {
            nPawn.__TokenHomes.isHome = true;
            oToken.position = oInitialToken.position;
            this.resetPawnScale();
            if (i === 1) {
              if (this.scene.oGameManager.eGameType === "classic") {
                nPawn.setScale(1, 1);
                nRing.setScale(1, 1);
              }
              this.scene.oSoundManager.stopSound(
                this.scene.oSoundManager.pawnDieSound,
                false
              );
              // this.scene.reqPawnCheck();
            }
          },
        });
      }
      s--;
      delay += 30;
    }
  }
  reqMovePawn(nPawnNumber) {
    this.encData = JSON.stringify({
      nIndex: nPawnNumber,
      sHashToken: this.scene.oGameManager.sHashToken,
    });
    console.log("this.encData :: ", this.encData);
    this.encReqMovePawn = this.scene.oSocketManager.encryptMessage(
      this.encData
    );
    console.log("this.encReqMovePawn :: ", this.encReqMovePawn);
    this.scene.oSocketManager.emit(
      "reqMovePawn",
      JSON.parse(this.encReqMovePawn),
      (error, response) => {
        if (response) {
          this.scene.oGameManager.sHashToken = null;
        }
      }
    );
  }
  movePawn(nPawn, nMove, nDestination, nRing) {
    this.playMoveAnimation(nPawn, nMove, nDestination, nRing);
  }
  sendToHome(nPawn, nRing) {
    this.sendToHomeAnimation(nPawn, nRing);
    this.scene.oSoundManager.playSound(
      this.scene.oSoundManager.pawnDieSound,
      false
    );
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
