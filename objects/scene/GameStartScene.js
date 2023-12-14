import { Scene } from "./Scene.js";
import { Dot } from "../music/Dot.js";
import { GamePlayScene } from "./GamePlayScene.js"
import { createTitle } from "../../view/assests/js/GameStart.js"
import { getcRecord } from "../../traits/SceneTraits.js"

export class GameStartScene extends Scene {

    view = '../../view/gameStart.html';

    constructor(view) {
        super(view);
    }

    static getInstance() {
        if (GameStartScene.instance == null) {
            GameStartScene.instance = new GameStartScene();
        }
        
        return GameStartScene.instance;
    }

    //add infomation to game and change to game run
    backgroundMusicInput() {
        let startBtn = document.getElementById('background-music');
        let volume = startBtn.value / 100;
        this.gameManager.backgroundMusic.changeVolume(volume);
        this.gameManager.backgroundMusicVolume = volume;
    }

    dotSoundClick() {
        let startBtn = document.getElementById('dot-sound');
        let volume = startBtn.value / 100;
        let dotSound = new Dot();
        dotSound.changeVolume(volume);
        dotSound.play();
        this.gameManager.dotSoundVolume = volume;
    }

    btnStartClick() {
        let dotNumber = document.getElementById('dot-number');
        if (this.checkdotNumber(dotNumber.value)) {
            this.gameManager.dots = parseInt(dotNumber.value);
            this.gameManager.currentDots = this.gameManager.dots;
            let gamePlayScene = GamePlayScene.getInstance();
            gamePlayScene.loadView();
        }
    }

    checkdotNumber(dotNumber) {
        if (dotNumber > 0 && Number.isInteger(Number(dotNumber))) {
            return true;
        }

        this.showErrorDot();
        return false;
    }

    showErrorDot() {
        let error = document.getElementById('dot-error') ?? document.createElement('p');
        error.style.color = 'red';
        error.id = 'dot-error';
        error.textContent = '*The number of dots must be greater than 0 and be an integer';

        let itemNumber = document.getElementById('item-number');
        itemNumber.insertAdjacentElement("afterend", error);
    }

    loadData() {
        getcRecord();

        let backgroundMusic = document.getElementById('background-music');
        backgroundMusic.value = this.gameManager.backgroundMusicVolume * 100;

        let dotSound = document.getElementById('dot-sound');
        dotSound.value = this.gameManager.dotSoundVolume * 100;

        let btnStart = document.getElementById('dot-number');
        btnStart.value = this.gameManager.dots;
    }

    viewEvent(scene) {
        let backgroundMusicInput = document.getElementById('background-music');
        backgroundMusicInput.addEventListener('input', function () {
            scene.backgroundMusicInput();
        })

        let dotSoundInput = document.getElementById('dot-sound');

        dotSoundInput.addEventListener('mouseup', function () {
            scene.dotSoundClick();
        });

        dotSoundInput.addEventListener('touchend', function () {
            scene.dotSoundClick();
        })

        let btnStart = document.getElementById('btn-start');

        btnStart.addEventListener('click', function () {
            scene.btnStartClick();
        })

        window.addEventListener('keydown', function (event) {
            if (event.key == 'Enter') {
                scene.btnStartClick();
            }
        });
    }

    viewCustom() {
        createTitle();
    }
}