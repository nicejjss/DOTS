import { GameInfo } from "../GameInfo.js";
import { WindowTrait } from "../traits/WindowTrait.js";
import { Scene } from "./Scene.js";

export class GamePlayScene extends Scene {
    infor;

    //Injectt Dot Object
    constructor() {
        super();
        this.view = '../../view/gameRun.html';
        this.infor = window.parent.infor;
    }

    sceneLoad(childView) {
        childView.src = this.view;
    }

    btnClick() {
        let backgroundMusic = WindowTrait.getWindowData('backgroundMusic');
        backgroundMusic.changeVolume(0.2);
        let iframe = window.frameElement;
        iframe.src = '../../view/gameStart.html';
    }
}


//add event
let gameStartScene = new GamePlayScene();
let playBtn = document.getElementById('playtBtn');
if (playBtn) {
    playBtn.addEventListener('click', function () {
        gameStartScene.btnClick();
    })
}