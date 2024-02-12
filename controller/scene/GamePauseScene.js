import { Scene } from "./Scene.js";
import { Dot } from "../music/Dot.js";
import { GamePlayScene } from "./GamePlayScene.js";
import { GameStartScene } from "./GameStartScene.js";

export class GamePauseScene extends Scene {
    view = '../../view/gamePause.html';

    constructor(view) {
        super(view);
        this.gamePlayScene = GamePlayScene.getInstance();
        this.gameStartScene = GameStartScene.getInstance();
    }

    static getInstance() {
        if (GamePauseScene.instance == null) {
            GamePauseScene.instance = new GamePauseScene();
        }
        
        return GamePauseScene.instance;
    }

    loadData() {
        let backgroundMusic = document.getElementById('background-music');
        backgroundMusic.value = this.gameManager.backgroundMusicVolume * 100;

        let dotSound = document.getElementById('dot-sound');
        dotSound.value = this.gameManager.dotSoundVolume * 100;
    }


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

    btnContinueClick() {
        this.destroyStack();
        this.gamePlayScene.showReadyBackground()
    }

    btnMenuClick() {
        if (confirm('Data will not be saved')) {
            this.destroyStack();
            let gamePlay = GamePlayScene.getInstance();
            gamePlay = null;
            this.gameStartScene.loadView();
        }
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

        let btnContinue = document.getElementById('btn-continue');

        btnContinue.addEventListener('click', function () {
            scene.btnContinueClick();
        })

        let btnMenu = document.getElementById('btn-menu');

        btnMenu.addEventListener('click', function () {
            scene.btnMenuClick();
        })
    }
}