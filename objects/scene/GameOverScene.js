import { Scene } from "./Scene.js";

export class GameOverScene extends Scene {
    view = '../../view/gameOver.html';

    constructor(view) {
        super(view);
    }

    static getInstance() {
        if (GameOverScene.instance == null) {
            GameOverScene.instance = new GameOverScene();
        }
        
        return GameOverScene.instance;
    }


}