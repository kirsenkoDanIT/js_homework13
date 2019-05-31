'use strict'

const button = document.querySelector('.change-color-theme');
const item = document.querySelector('.about-us-item');
let neWColorTheme = `background-color: rgb(72, 94, 93); color: rgb(255, 255, 255); border-block-start: 7px solid rgb(255, 255, 255);`;
let colorTheme = localStorage.getItem('colorTheme');
item.style.cssText = colorTheme;
button.addEventListener('click', () => {
  if (item.style.cssText == ``) {
    item.style.cssText = neWColorTheme;
    localStorage.setItem('colorTheme', neWColorTheme);
  } else {
    item.style.cssText = ``;
    localStorage.setItem('colorTheme', ``);
  }
});