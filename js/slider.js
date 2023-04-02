/* const slider = document.querySelector('.slider');
const wrapper = document.querySelector('.slider__wrapper');
const inner = document.querySelector(".slider__inner");
const leftArrow = document.querySelector(".fa-chevron-left");
const rightArrow = document.querySelector(".fa-chevron-right");
const items = document.querySelectorAll(".slider__item");
const width = wrapper.offsetWidth;

let offset = 0;

init();

function init() {
    inner.style.width = width*items.length + 'px';
}

leftArrow.addEventListener('click', prev);
rightArrow.addEventListener('click', next);

function prev() {
    if(offset === 0) {
        offset = width*items.length-width;
    } else {
        offset -= width;
    }
    setTranslate();
}

function next() {
    if(offset === width*items.length-width) {
        offset = 0;
    } else {
        offset += width;
    }
    setTranslate();
}

function setTranslate() {
    inner.style.transform = `translateX(-${offset}px)`
} */

const https = require('https');
const axios = require('axios');
axios.get('https://restcountries.eu/rest/v2/name/turkey').then(res => {
    console.log(res.data[0].transaltions.de);
});
