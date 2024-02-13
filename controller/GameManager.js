import { BackgroundMusic } from "./music/BackgroundMusic.js";
import { GameStartScene } from "./scene/GameStartScene.js";

export class GameManager {
    //private
    static instance;

    //public
    backgroundMusic;

    backgroundMusicVolume = 0;
    victoryVolume = 0.4;
    dotSoundVolume = 0.7;
    dots = 0;
    currentDots = 0;
    sec = 0;
    miliSec = 0;

    //private
    constructor() {
        if (GameManager.instance == null) {
            GameManager.instance = this;
            GameManager.instance.backgroundMusic = BackgroundMusic.getInstance();
        }

        return GameManager.instance;
    }
    gameStart() {
        this.startBackgroundMusic();
        let gameStart = GameStartScene.getInstance();
        gameStart.loadView();
    }

    startBackgroundMusic() {
        this.backgroundMusic.changeVolume(this.backgroundMusicVolume);
        this.backgroundMusic.loop(true);
        this.backgroundMusic.autoPlay(true);
    }
}

let game = new GameManager();
game.gameStart();