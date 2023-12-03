import { Music } from "./Music.js";
import { backgroundMusic } from "../../constants.js";

//Singleton
export class BackgroundMusic extends Music {
    //private
    static instance;
    constructor() {
        super(backgroundMusic['name'], backgroundMusic['src']);
    }

    static getInstance() {
        if (BackgroundMusic.instance == null) {
            BackgroundMusic.instance = new BackgroundMusic();
        }
        return BackgroundMusic.instance;
    }
}