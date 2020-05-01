'use strict';

const stepIts = document.querySelectorAll('.main_wrapper__outer__info_box__outer__settings_box__text_box__list__item');
const img = document.querySelector('.main_wrapper__outer__info_box__outer__settings_box__phone_box__phone');
const text = document.querySelector('.main_wrapper__outer__info_box__outer__settings_box__text_box__list__item__text');


// check device on start 

window.onload = function() {
    img.src = 'img/_' + checkPlat() + '_1.gif';
    text.innerHTML += checkPlat() === 'android' ? 'Android' : 'Iphone';
}


// click on step items

for (let i = 0; i < stepIts.length; i++) {

    stepIts[i].addEventListener('click', function () {

        let it = stepIts[0];

        while (it) {
            if (it.className === 'main_wrapper__outer__info_box__outer__settings_box__text_box__list__item') {
                it.children[0].classList.remove('clicked');
            }
            it = it.nextElementSibling;
        }

        img.src = changePhImg(i + 1);
        this.children[0].classList.toggle('clicked');
    })

};


// show phone gif

function changePhImg(val) {
    const str = img.src;
    const arr = str.split('_');
    const newNum = arr[2].replace(arr[2], val + '.gif');
    const nstr = 'img/' + '_' + checkPlat() + '_' + newNum;
    return nstr;
}


// check current platform

function checkPlat() {
    if (/Macintosh|iPhone|iPod|iPad|MacIntel|MacPPC|Mac68K|Pike/i.test(navigator.platform)) {
        return 'apple';
    } else {
        return 'android';
    }
}
