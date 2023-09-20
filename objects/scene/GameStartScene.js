import { Scene } from "./Scene.js";
import { WindowTrait } from "../../traits/WindowTrait.js";
import { Dot } from "../music/Dot.js"
import { GamePlayScene } from "./GamePlayScene.js";
import { GameInfo } from "../GameInfo.js";

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

        let gameManager = WindowTrait.getWindowData('gameManager');
        gameManager.backgroundMusic = volume;
    }

    dotSoundClick() {
        let startBtn = document.getElementById('dot-sound');
        let volume = startBtn.value / 100;
        let dotSound = new Dot();
        dotSound.changeVolume(volume);
        dotSound.play();

        let gameManager = WindowTrait.getWindowData('gameManager');
        gameManager.dotSound = volume;
    }

    btnStartClick() {
        let gameInfo = new GameInfo();
        let dotNumber = document.getElementById('dot-number');
        if (this.checkdotNumber(dotNumber.value)) {
            gameInfo.dotNumber = dotNumber.value;
            WindowTrait.pushtoWindowData('gameInfo', gameInfo);
            let gamePlayScene = new GamePlayScene();
            gamePlayScene.changeScene();
        }
    }

    checkdotNumber(dotNumber) {
        if (dotNumber > 0 && Number.isInteger(Number(dotNumber))) {
            return true;
        }
        alert('dot number must more than 0 and be integer');
        return false;
    }

    loadData() {
        let gameManager = WindowTrait.getWindowData('gameManager');
        let gameInfo = WindowTrait.getWindowData('gameInfo');

        let backgroundMusic = document.getElementById('background-music');
        backgroundMusic.value = gameManager.backgroundMusic * 100;

        let dotSound = document.getElementById('dot-sound');
        dotSound.value = gameManager.dotSound * 100;

        let btnStart = document.getElementById('dot-number');
        btnStart.value = gameInfo.dotNumber == null ? 0 : gameInfo.dotNumber;
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
    dotSoundInput.addEventListener('click', function () {
        gameStartScene.dotSoundClick();
    })
}

let btnStart = document.getElementById('btn-start');
if (btnStart) {
    btnStart.addEventListener('click', function () {
        gameStartScene.btnStartClick();
    })
}

window.onload = function () {
    gameStartScene.loadData();
}