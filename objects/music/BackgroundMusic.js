import { Music } from "./Music.js";
import { backgroundMusic } from "../../constants.js";

//Singleton
export class BackgroundMusic extends Music {
    //private
    static instance;
    constructor() {
        super(backgroundMusic['name'], backgroundMusic['src']);
        if (BackgroundMusic.instance) {
            return BackgroundMusic.instance;
        }
        BackgroundMusic.instance = this;
    }
}