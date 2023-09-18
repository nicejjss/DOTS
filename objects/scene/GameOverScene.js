import { Scene } from "./Scene.js";

export class GameOverScene extends Scene {
    //Dot Object
    dot;

    //Injectt Dot Object
    constructor(dot) {
        super();
        this.view = '../../view/gameRun.html';
        this.dot = dot;
    }


}