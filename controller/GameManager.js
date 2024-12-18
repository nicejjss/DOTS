import { BackgroundMusic } from "./music/BackgroundMusic.js";
import { GameStartScene } from "./scene/GameStartScene.js";
import { GamePlayScene } from "./scene/GamePlayScene.js";
import { GamePauseScene } from "./scene/GamePauseScene.js";
import { GameOverScene } from "./scene/GameOverScene.js";

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
        this.backgroundMusic = BackgroundMusic.getInstance();
    }

    static getInstance() {
        if (GameManager.instance == null) {
            GameManager.instance = new GameManager();
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

let gameStartScene = new GameStartScene();
let gamePlayScene = new GamePlayScene();
let gamePauseScene = new GamePauseScene();
let gameOverScene = new GameOverScene();

let game = GameManager.getInstance();
game.gameStart();