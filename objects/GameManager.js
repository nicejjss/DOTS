import { BackgroundMusic } from "./music/BackgroundMusic.js";
import { GameStartScene } from "./scene/GameStartScene.js";
import { WindowTrait } from "../traits/WindowTrait.js";

export class GameManager {
    //private
    constructor() {

    }

    gameStart() {
        let scene = new GameStartScene();
        scene.sceneCreate();
        this.startBackgroundMusic();
    }

    startBackgroundMusic() {
        let backgroundMusic = new BackgroundMusic();
        backgroundMusic.loop(true);
        backgroundMusic.autoPlay(true);
        backgroundMusic.changeVolume(0.03);
        WindowTrait.pushtoWindowData('backgroundMusic', backgroundMusic);
        console.log(backgroundMusic);
    }
}


let game = new GameManager();
game.gameStart();