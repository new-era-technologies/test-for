'use strict';

const slides = document.querySelectorAll('.slider__box__list__item');
const slideWidth = document.querySelector('.slider__box__list__item').offsetWidth;

const prevSlide = document.querySelector('.slider__box__control--prev');
const nextSlide = document.querySelector('.slider__box__control--next');

const slidesList = document.querySelector('.slider__box__list');
const slidesListWidth = slideWidth * slides.length;

slidesList.style.width = slidesListWidth + 'px';

let timer, slideIndex = 0;

nextSlide.addEventListener('click', () => {
    slideIndex++;
    clearTimeout(timer);
    switchSlide();
});
prevSlide.addEventListener('click', () => {
    slideIndex--;
    clearTimeout(timer);
    switchSlide();
});

const switchSlide = () => {
    showSlides(slideIndex);
    timer = setTimeout(autoSlide, 2000);
};

const getRand = (min, max) => {
    return Math.random() * (max - min) + min;
};

const showSlides = (n) => {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].style.backgroundColor = 'rgb' + '(' + getRand(0, 256) + ',' + getRand(0, 256) + ',' + getRand(0, 256) + ')';
};

const autoSlide = () => {
    slideIndex++;
    switchSlide();
};

autoSlide();