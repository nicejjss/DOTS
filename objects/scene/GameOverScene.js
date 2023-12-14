import { Victory } from "../music/Victory.js";
import { Scene } from "./Scene.js";
import { GameStartScene } from "./GameStartScene.js";
import { Player } from "../../model/Player.js";
import { GamePlayScene } from "./GamePlayScene.js";

export class GameOverScene extends Scene {
    view = '../../view/gameOver.html';
    victoryMusic;

    constructor(view) {
        super(view);
        this.victoryMusic = new Victory();
    }

    static getInstance() {
        if (GameOverScene.instance == null) {
            GameOverScene.instance = new GameOverScene();
        }

        return GameOverScene.instance;
    }

    viewCustom() {
        this.playVictoryMusic();
    }

    playVictoryMusic() {
        this.victoryMusic.changeVolume(this.gameManager.victoryVolume);
        this.saveData();
        this.victoryMusic.play();
    }

    btnMenuClick() {
        this.destroyStack();
        let gamePlayScene = GamePlayScene.getInstance();
        let gameStartScene = GameStartScene.getInstance();
        this.gameManager.sec = 0;
        this.gameManager.miliSec = 0;
        gamePlayScene.dot = null;
        gameStartScene.loadView();
    }

    saveData() {
        let currentStat = this.currentStat();
        let record = Player.get();

        if (record) {
            let recordStat = this.recordStat(record);
            if (currentStat > recordStat)
                Player.save({
                    'dots': this.gameManager.dots,
                    'time': this.gameManager.sec + ':' + this.gameManager.miliSec,
                })
        } else {
            Player.save({
                'dots': this.gameManager.dots,
                'time': this.gameManager.sec + ':' + this.gameManager.miliSec,
            })
        }

    }

    currentStat() {
        let sec = this.gameManager.sec + (this.gameManager.miliSec / 100);
        return this.gameManager.dots / sec;
    }

    recordStat(record) {
        let recordTime = record['time'].split(':');
        let recordSec = parseInt(recordTime[0]);
        let recordMili = parseFloat((recordTime[1] ?? 0) / 100);
        return record['dots'] / (recordSec + recordMili);
    }

    loadData() {
        let record = Player.get();
        if (record) {
            let recordDots = document.getElementById('record-dots');
            recordDots.innerHTML = record['dots'];
            let recordTime = document.getElementById('record-time');
            recordTime.innerHTML = record['time'] + 's';
        } else {
            let recordDots = document.getElementById('record-dots');
            recordDots.innerHTML = 0;
            let recordTime = document.getElementById('record-time');
            recordTime.innerHTML = '0:0' + 's';
        }


        let currentDots = document.getElementById('current-dots');
        currentDots.innerHTML = this.gameManager.dots;

        let currentTime = document.getElementById('current-time');
        currentTime.innerHTML = this.gameManager.sec + ':' + this.gameManager.miliSec + 's';
    }

    viewEvent(scene) {
        let btnMenu = document.getElementById('re-play');

        btnMenu.addEventListener('click', function () {
            scene.btnMenuClick();
        })
    }
}
