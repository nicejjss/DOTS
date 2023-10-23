import { countDown, endCount } from "../../../constants.js";

let i = countDown;

let ready = setInterval(() => {
    if (i-1 >= endCount) {
        displayReady(i-1);
        i--;
    } else{
        clearInterval(ready);
    }
    
}, 1000);

function displayReady(value) {
    let ready = document.getElementById('ready-count');
    ready.textContent = value;
}