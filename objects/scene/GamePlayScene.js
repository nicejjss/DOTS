import { WindowTrait } from "../../traits/WindowTrait.js";
import { Dot } from "../dot/Dot.js";
import { Scene } from "./Scene.js";

export class GamePlayScene extends Scene {

    //Injectt Dot Object
    constructor() {
        super();
        this.view = '../../view/gamePlay.html';
    }

    sceneLoad(childView) {
        childView.src = this.view;
    }

    dotClick() {
        let gameInfo = WindowTrait.getWindowData('gameInfo');
        gameInfo.lastDots--;
        console.log(gameInfo.lastDots);
        let dot = new Dot();
        dot.playMusic();
    }
}


//add event
let gamePlayScene = new GamePlayScene();
let dot = document.getElementById('ready-text');
if (dot) {
    dot.addEventListener('click', function () {
        gamePlayScene.dotClick();
    })
}