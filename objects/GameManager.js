import { timeout } from "../constants.js";
import { BackgroundMusic } from "./music/BackgroundMusic.js";
import { Dot } from "./music/Dot.js";
import { GameStartScene } from "./scene/GameStartScene.js";

export class GameManager {
    //private
    static instance;
    backgroundMusic;

    backgroundMusicVolume = 0;
    victoryVolume = 0.3;
    dotSoundVolume = 0.7;
    dots = 0;
    lastDots;
    time = 0;

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
        let gameStart = new GameStartScene();
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