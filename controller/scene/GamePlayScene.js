import { Dot } from "../dot/Dot.js";
import { Scene } from "./Scene.js";
import { GamePauseScene } from "./GamePauseScene.js";
import { color, countDown, endCount, flagOff, flagOn, timeout } from "../../constants.js";
import { GameOverScene } from "./GameOverScene.js";
import { getcRecord } from "../../traits/SceneTraits.js";

export class GamePlayScene extends Scene {

    view = '../../view/gamePlay.html';
    gameRunning = flagOff;
    dot;

    //Injectt Dot Object
    constructor(view) {
        super(view);
    }

    static getInstance() {
        if (GamePlayScene.instance == null) {
            GamePlayScene.instance = new GamePlayScene();

        }
        GamePlayScene.instance.dot = null;
        return GamePlayScene.instance;
    }

    loadView() {
        super.loadView();
        this.showReadyBackground();
    }

    dotClick() {
        this.dot.destroyDot();
        this.displayDot();
        this.dotClicked();
    }

    dotClicked() {
        this.gameManager.currentDots--;
        document.getElementById('dot-value').innerText = this.gameManager.currentDots;
        this.checkDot(this.gameManager.currentDots);
    }

    checkDot(value) {
        if (value === 0) {
            this.displayGameOver();
        }
    }

    displayGameOver() {
        document.getElementById('ready-text').innerText = '';
        this.readyBackgroundStart();
        this.dot = null;
        let overScene = GameOverScene.getInstance();
        overScene.stackView();
    }

    pauseClick() {
        this.readyBackgroundStart();
        let pauseScene = GamePauseScene.getInstance();
        pauseScene.stackView();
    }

    showReadyBackground() {
        let scene = this;
        let i = countDown + 1;
        let ready = setInterval(() => {
            if (i - 1 >= endCount) {
                scene.displayReady(i - 1);
                i--;
            } else {
                let e = document.getElementById('ready-background');
                e.style = 'display: none;';
                e.setAttribute('flag', 0);
                clearInterval(ready);

                if (scene.gameRunning == flagOff) {
                    scene.runGame();
                }
            }

        }, timeout * 10);
    }

    runGame() {
        this.gameRunning = flagOn;
        this.runTime();

        this.clearDots();
        this.displayDot();
    }

    clearDots() {
        let dot = document.getElementById('dot');
        if (dot) {
            dot.remove();
        } 
    }

    displayDot() {
        let scene = this;
        this.dot = new Dot(color[Math.floor(Math.random() * color.length)], this.gameManager.dotSoundVolume);
        let dot = this.dot.createDot();
        document.getElementById('dot-zone').appendChild(dot);

        dot.addEventListener('mouseup', function () {
            scene.dotClick();
        })
    }

    runTime() {
        let scene = this;

        if (this.gameRunning) {
            this.gameManager.miliSec++;

            let secString = this.gameManager.sec;
            let miliSecString = this.gameManager.miliSec;

            if (this.gameManager.miliSec == 100) {
                this.gameManager.sec++;
                this.gameManager.miliSec = 0;
            }


            if (this.gameManager.sec < 10) {
                secString = "0" + secString;
            }

            if (this.gameManager.miliSec < 10) {
                miliSecString = "0" + miliSecString;
            }

            document.getElementById('time-second').innerText = secString;
            document.getElementById('time-milisecond').innerText = miliSecString;
            setTimeout(function () {
                scene.runTime();
            }, 10)
        }
    }


    displayReady(value) {
        let ready = document.getElementById('ready-count');
        ready.textContent = value;
    }

    readyBackgroundStart() {
        this.gameRunning = flagOff;
        document.getElementById('ready-count').innerText = '';
        let readyBackground = document.getElementById('ready-background');
        if (readyBackground.getAttribute('flag') == flagOff) {
            readyBackground.style = 'display: block';
            readyBackground.setAttribute('flag', flagOn);
        }
    }

    loadData() {
        let dotValue = document.getElementById('dot-value');
        dotValue.innerText = this.gameManager.currentDots;
    }

    viewEvent(scene) {
        let pause = document.getElementById('pause-btn');
        pause.addEventListener('click', function () {
            scene.pauseClick();
        })
    }
}