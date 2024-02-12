import { Dot as DotSound } from "../music/Dot.js";

export class Dot{
    //Color dot
    color;

    //Dot
    width = '55px';
    height = '55px';
    limited = 85;
    
    //music
    music;

    constructor(color, dotSound) {
        //DI music
        this.color = color;
        this.music = new DotSound();
        this.music.changeVolume(dotSound);
    }

    playMusic() {
        this.music.play();
    }

    createDot() {
        let dot = document.createElement('div');
        dot.style.height = this.height;
        dot.style.width = this.width;
        dot.style.backgroundColor = this.color;
        dot.style.top = Math.floor(Math.random() * (this.limited - 10 + 1) + 10) + '%';
        dot.style.left = Math.floor(Math.random() * (this.limited - 3 + 1) + 3) + '%';
        dot.id = 'dot';

        return dot;
    }

    destroyDot() {
        let dot = document.getElementById('dot');
        if (dot) {
            dot.remove();
        }   
    }
}