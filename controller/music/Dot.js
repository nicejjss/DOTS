import { dotMusic } from "../../constants.js";
import { Music } from "./Music.js";

export class Dot extends Music {
    constructor() {
        super(dotMusic['name'], dotMusic['src']);
    }
}