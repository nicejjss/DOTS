import { WindowTrait } from "../../traits/WindowTrait.js";
import { Dot as DotMusic } from "../music/Dot.js";

export class Dot{
    //Color dot
    color;

    //Dot
    width = '55px';
    height = '55px';
    
    //music
    music;

    constructor() {
        //DI music
        this.music = new DotMusic();
    }

    playMusic() {
        let volume = WindowTrait.getWindowData('gameManager').dotSound;
        this.music.changeVolume(volume);
        this.music.play();
    }

    // creatDot() {
    //     let
    // }
}