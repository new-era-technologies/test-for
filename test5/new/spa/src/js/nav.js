'use strict';

const items = document.getElementsByClassName('nav__hor-menu__list__item');
const links = document.getElementsByClassName('nav__hor-menu__list__item__link');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        hovered();
        e.currentTarget.className += ' hovered';
        e.currentTarget.parentNode.className += ' hovered';
    });
}

let hovered = () => {
    for (let i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" hovered", "");
        items[i].className = items[i].className.replace(" hovered", "");
    }
};