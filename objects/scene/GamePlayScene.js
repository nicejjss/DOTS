import { Dot } from "../dot/Dot.js";
import { Scene } from "./Scene.js";
import { color } from "../../constants.js";

export class GamePlayScene extends Scene {

    view = '../../view/gamePlay.html';

    //Injectt Dot Object
    constructor(view) {
        super(view);
        console.log(this.gameManager);
    }

    dotClick() {
        this.gameManager.dot--;
        let dot = new Dot();
        dot.playMusic();

        this.checkDot(gameInfo.lastDots);
        this.showDotNumber(gameInfo.lastDots);
    }

    checkDot(value) {
        if (value === 0) {
            console.log(this.gameManager);
        }
    }

    loadData() {
    }

    showDotNumber(value) {
        document.getElementById('dot-number').textContent = "Dot Number: " + value;

    }

    creatDot() {
        let dot = document.createElement('div');
        dot.id = 'dot';
        dot.height = this.height;
        dot.width = this.width;

        let textColor = Math.floor(Math.random() * color.length);
        dot.style.backgroundColor = color[textColor];
        return dot;
    }
}