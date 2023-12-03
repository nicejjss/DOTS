import { countDown, endCount } from "../../../constants.js";

let i = countDown;

displayReady(i);

let ready = setInterval(() => {
    if (i-1 >= endCount) {
        displayReady(i-1);
        i--;
    } else{
        let e = document.getElementById('ready-background');
        e.remove();
        clearInterval(ready);
    }
    
}, 1000);

function displayReady(value) {
    let ready = document.getElementById('ready-count');
    ready.textContent = value;
}