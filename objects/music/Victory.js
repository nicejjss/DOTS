import { victory } from "../../constants.js";
import { Music } from "./Music.js";

export class Victory extends Music {
    constructor(name = victory['name'],src = victory['src']) {
        super(name, src);
    }
}