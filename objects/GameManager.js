import { backgroundMusic } from "../constants.js";
import { GameInfo } from "./GameInfo.js";
import { BackgroundMusic } from "./music/BackgroundMusic.js";
import { Music } from "./music/Music.js";
import { GameStartScene } from "./scene/GameStartScene.js";
import { WindowTrait } from "./traits/WindowTrait.js";

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
        // let backgroundMusic = new BackgroundMusic();
        // backgroundMusic.loop(true);
        // backgroundMusic.autoPlay(true);
        // backgroundMusic.changeVolume(1);
        WindowTrait.pushtoWindowData('backgroundMusic', backgroundMusic);
    }
}


let game = new GameManager();
game.gameStart();