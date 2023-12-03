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
        this.music.changeVolume(volume);
        this.music.play();
    }
}