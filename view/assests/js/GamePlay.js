import { countDown, endCount } from "../../../constants.js";

let i = countDown;

let ready = setInterval(() => {
    if (i >= endCount) {
        displayReady(i);
        i--;
    } else{
        clearInterval(ready);
    }
    
}, 1000);

function displayReady(value) {
    let ready = document.getElementById('ready-count');
    ready.textContent = value;
}