import { color } from "../../../constants.js";

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