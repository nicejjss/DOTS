import { Object } from "../../classes/components/Object";
import { dotMusic } from "../../constants";
import { GameInfo } from "../GameInfo";
import { Music } from "../music/Music";

class Dot extends Object {
    //Color dot
    color;

    //Dot
    width = '55px';
    height = '55px';
    
    //music
    music;

    constructor() {
        //DI music
        this.music = new Music(dotMusic['name'], dotMusic['src']);
        this.gameInfor = GameInfo.getInstance();
    }

    playMusic() {
        this.music.play();
    }
}