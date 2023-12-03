import { BackgroundMusic } from "./music/BackgroundMusic.js";
import { GameStartScene } from "./scene/GameStartScene.js";

export class GameManager {
    //private
    static instance;

    backgroundMusicVolume = 0;
    victoryVolume = 0.3;
    dotSoundVolume = 0.7;
    dot = 0;
    lastDots;
    time;

    //private
    constructor() {
        if (GameManager.instance == null) {
            GameManager.instance = this;
        }
        return GameManager.instance;
    }
    gameStart() {
        let gameStart = new GameStartScene();
        gameStart.loadView();
    }

    startBackgroundMusic() {
        let backgroundMusic = BackgroundMusic.getInstance();
        backgroundMusic.changeVolume(GameManager.instance.backgroundMusicVolume);
        backgroundMusic.loop(true);
        backgroundMusic.autoPlay(true);
        console.log(backgroundMusic);
    }
}

let game = new GameManager();
game.gameStart();
game.startBackgroundMusic();