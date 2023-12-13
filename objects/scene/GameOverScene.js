import { Victory } from "../music/Victory.js";
import { Scene } from "./Scene.js";
import { GameStartScene } from "./GameStartScene.js";

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
        this.victoryMusic.play();
    }

    btnMenuClick() {
        this.destroyStack();
        let gameStartScene = GameStartScene.getInstance();
        gameStartScene.loadView();
    }

    loadData() {

    }

    viewEvent(scene) {
        let btnMenu = document.getElementById('re-play');

        btnMenu.addEventListener('click', function () {
            scene.btnMenuClick();
        })
    }
}