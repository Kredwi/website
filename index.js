"use strict";
const h1Bio = document.getElementById('h1-bio');
const img = document.querySelectorAll(".bio-status")[0];
const typedCategory = new Typed('.bio-typing', {
    strings: [
        '<a href="https://www.youtube.com/channel/UCH-f_szwD2msRXhwMmePeiA" class="bio-text red" target="_blank"><i class="fab fa-youtube"> Ютубер</i></a>',
        '<a href="https://www.twitch.tv/kredwi" class="bio-text purple" target="_blank"><i class="fab fa-twitch"> Стример</i></a>',
        '🎮 Немного геймер',
    ],
    typeSpeed: 150,
    backSpeed: 100,
    startDelay: 1000,
    showCursor: true,
    loop: true
})
const h1Words = [
    'Kredwi - Нубик в любой сфере',
    'Kredwi - Ну етить колотить!!',
    'Kredwi - Нубик в любой сфере',
    '🤔 Шо как оно?',
    '☝️ Вообще-то у меня есть новый сайт',
    '🧐 А ты шо думал?'
]
h1Bio.innerHTML = h1Words[Math.floor(Math.random() * (h1Words.length - 0) + 0)];
setInterval(() => img.src = img.src, 1 * 60 * 1000);
// window.onload = function() {
//     snowStorm.flakesMaxActive = 30;
//     snowStorm.snowCharacter = '<i class="fas fa-snowflake"></i>';
//     snowStorm.vMaxX = 2;
//     snowStorm.vMaxY = 1;
//     snowStorm.zIndex = -99999;
//     snowStorm.useTwinkleEffect = true;
//     snowStorm.followMouse = false;
//     snowStorm.flakeWidth = 20;
//     snowStorm.flakeHeight = 20;
//     snowStorm.start();
// };
