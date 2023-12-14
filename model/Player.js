import { Model } from "./Model.js";

export class Player extends Model {
    connection = 'local'
    fields = [
        'dots',
        'time',
    ];
}