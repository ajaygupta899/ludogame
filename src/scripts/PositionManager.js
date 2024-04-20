class PositionManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    setPlayerPosition(nColor) {
        switch (nColor) {
            case '0': // Blue
                this.blueColor();
                break;
            case '1': // Red
                this.redColor();
                break;
            case '2': // Yellow
                this.yellowColor();
                break;
            case '3': // Green
                this.greenColor();
                break;
            default: // Red
                this.redColor();
                break;
        }
    }

    blueColor() {
        this.oScene.gameBoard.board.angle = 90;
        
    }
    redColor() {
        this.oScene.gameBoard.board.angle = 0;
    }
    yellowColor() {
        this.oScene.gameBoard.board.angle = -90;
    }
    greenColor() {
        this.oScene.gameBoard.board.angle = 180;
    }
}