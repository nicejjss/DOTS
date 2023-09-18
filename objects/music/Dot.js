import { dotMusic } from "../../constants.js";
import { Music } from "./Music.js";

export class Dot extends Music {
    constructor(name = dotMusic['name'],src = dotMusic['src']) {
        super(name, src);
    }

    play() {
        super.play();
        this.destroyMusic();
    }
}