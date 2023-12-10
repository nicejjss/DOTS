import { Dot } from "../dot/Dot.js";
import { Scene } from "./Scene.js";
import { GamePauseScene } from "./GamePauseScene.js";
import { color, countDown, endCount, flagOff, flagOn, timeout } from "../../constants.js";

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
        
        return GamePlayScene.instance;
    }

    loadView() {
        super.loadView();
        this.showReadyBackground();
    }

    dotClick() {
        this.dotClicked();
        this.dot.destroyDot();
        this.displayDot();
    }

    dotClicked() {
        this.gameManager.currentDots--
        document.getElementById('dot-value').innerText =  this.gameManager.currentDots;
        this.checkDot(this.gameManager.currentDots);
    }

    checkDot(value) {
        if (value === 0) {
            console.log(this.gameManager);
        }
    }

    pauseClick() {
        this.gameRunning = flagOff;
        let readyBackground = document.getElementById('ready-background');
        document.getElementById('ready-count').innerText = '';
        if (readyBackground.getAttribute('flag') == flagOff) {
            readyBackground.style = 'display: block';
            readyBackground.setAttribute('flag', flagOn);
        }

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

        if (!this.dot) {
            this.displayDot();
        }
    }

    displayDot() {
        let scene = this;
        this.dot = new Dot(color[Math.floor(Math.random() * color.length)], this.gameManager.dotSoundVolume);
        let dot = this.dot.createDot();
        dot.style.top = Math.floor(Math.random() * (this.dot.limited - 10 + 1) + 10) + '%';
        dot.style.left = Math.floor(Math.random() * (this.dot.limited - 3 + 1) + 3) + '%';
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
        let readyBackground = document.getElementById('ready-background');

        if (readyBackground.getAttribute('flag') === flagOff) {
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