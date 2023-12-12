import { Victory } from "../music/Victory.js";
import { Scene } from "./Scene.js";

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
}