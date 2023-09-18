import { Scene } from "./Scene.js";
import { WindowTrait } from "../../traits/WindowTrait.js";
import { Dot } from "../music/Dot.js"
import { GamePlayScene } from  "./GamePlayScene.js";

export class GameStartScene extends Scene {

    constructor() {
        super();
        this.view = '../../view/gameStart.html';
    }

    sceneLoad(childView) {
        childView.src = this.view;
    }

    //add infomation to game and change to game run
    backgroundMusicInput() {
        let startBtn = document.getElementById('background-music');
        let volume = startBtn.value / 100;
        let backgroundMusic = WindowTrait.getWindowData('backgroundMusic');
        backgroundMusic.changeVolume(volume);
        console.log(volume);
    }

    dotSoundChange() {
        let startBtn = document.getElementById('dot-sound');
        let volume = startBtn.value / 100;
        let dotSound = new Dot();
        dotSound.changeVolume(volume);
        dotSound.play();
        console.log(volume);
    }

    btnStartClick() {
        let gamePlayScene = new GamePlayScene();
        gamePlayScene.changeScene();
    }
}


//add event
let gameStartScene = new GameStartScene();

let backgroundMusicInput = document.getElementById('background-music');
if (backgroundMusicInput) {
    backgroundMusicInput.addEventListener('input', function () {
        gameStartScene.backgroundMusicInput();
    })
}

let dotSoundInput = document.getElementById('dot-sound');
if (dotSoundInput) {
    dotSoundInput.addEventListener('change', function () {
        gameStartScene.dotSoundChange();
    })
}

let btnStart = document.getElementById('btn-start');
if (btnStart) {
    btnStart.addEventListener('click', function () {
        gameStartScene.btnStartClick();
    })
}