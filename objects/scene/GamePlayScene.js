// import { WindowTrait } from "../traits/WindowTrait.js";
import { WindowTrait } from "../../traits/WindowTrait.js";
import { Scene } from "./Scene.js";

export class GamePlayScene extends Scene {
    infor;

    //Injectt Dot Object
    constructor() {
        super();
        this.view = '../../view/gamePlay.html';
        this.infor = window.parent.infor;
    }

    sceneLoad(childView) {
        childView.src = this.view;
    }

    dotClick() {
        let gameInfo = WindowTrait.getWindowData('gameInfo');
        gameInfo.dotNumber--;
        console.log(gameInfo.dotNumber);
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