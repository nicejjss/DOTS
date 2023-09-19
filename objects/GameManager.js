import { BackgroundMusic } from "./music/BackgroundMusic.js";
import { GameStartScene } from "./scene/GameStartScene.js";
import { WindowTrait } from "../traits/WindowTrait.js";

export class GameManager {
    //private
    static instance;

    backgroundMusic = 0.3;
    dotSound = 0.7;

    //private
    constructor() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = this;
    }

    gameStart() {
        // the second call
        // console.log('game start');
        let scene = new GameStartScene();
        scene.sceneCreate();
    }

    startBackgroundMusic() {
        let backgroundMusic = new BackgroundMusic();
        backgroundMusic.loop(true);
        backgroundMusic.autoPlay(true);
        backgroundMusic.changeVolume(this.backgroundMusic);
        WindowTrait.pushtoWindowData('backgroundMusic', backgroundMusic);
    }
}
let game = new GameManager();
game.gameStart();

window.onload = function () {
    game.startBackgroundMusic();
}

WindowTrait.pushtoWindowData('gameManager', game);