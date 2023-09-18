import { Scene } from "./Scene.js";
import { GameInfo } from "../GameInfo.js";
import { backgroundMusic, dotMusic } from "../../constants.js";
import { Music } from "../music/Music.js";
import { WindowTrait } from "../traits/WindowTrait.js";

export class GameStartScene extends Scene {

    constructor() {
        super();
        this.view = '../../view/gameStart.html';
    }

    sceneLoad(childView) {
        childView.src = this.view;
    }

    //add infomation to game and change to game run
    btnClick() {
        let backgroundMusic = WindowTrait.getWindowData('backgroundMusic');
        backgroundMusic.changeVolume(1);
        let iframe = window.frameElement;
        iframe.src = '../../view/gamePlay.html';
    }
}


//add event
let gameStartScene = new GameStartScene();
let startBtn = document.getElementById('game-title');
if (startBtn) {
    startBtn.addEventListener('click', function () {
        gameStartScene.btnClick();
    })
}