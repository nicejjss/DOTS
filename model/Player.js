import { Model } from "./Model.js";

export class Player extends Model {
    // $connection default is local
    
    fields = [
        'dots',
        'time',
    ];
}