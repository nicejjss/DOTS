import { color } from "../../../constants.js";
import { WindowTrait } from "../../../traits/WindowTrait.js";

let title = [
    'D', 'O', 'T', 'S'
];

let colorPicked = [];
title.forEach(function (e, k) {
    let gameTitle = document.getElementById('game-title');
    let text = document.createElement('span');
    text.id = e;
    text.classList.add('stroke');
    let textColor = Math.floor(Math.random() * color.length);
    colorPicked.push(textColor);
    while (colorPicked.includes(textColor)) {
        textColor = Math.floor(Math.random() * color.length);
    }
    colorPicked.push(textColor);
    text.style.color = color[textColor];
    text.textContent = e;
    gameTitle.appendChild(text);
});

function loadData() {
    let gameManager = WindowTrait.getWindowData('gameManager');
    let gameInfo = WindowTrait.getWindowData('gameInfo');

    let backgroundMusic = document.getElementById('background-music');
    backgroundMusic.value = gameManager.backgroundMusic * 100;

    let dotSound = document.getElementById('dot-sound');
    dotSound.value = gameManager.dotSound * 100;

    let btnStart = document.getElementById('dot-number');
    btnStart.value = gameInfo.dotNumber;
}

loadData();