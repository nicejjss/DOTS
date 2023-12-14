import { Player } from "../model/Player.js";

export function getcRecord() {
    let record = Player.get();
    let recordDots = document.getElementById('c-record-dot');
    let recordTime = document.getElementById('c-record-time');
    if (record) {
        recordDots.innerHTML = record['dots'];
        recordTime.innerHTML = record['time'];
    } else {
        recordDots.innerHTML = 0;
        recordTime.innerHTML = '0:0';
    }
}