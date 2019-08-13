'use strict';

const btnCity = document.getElementById('btn-city');
const contCity = document.getElementById('content-city');

btnCity.addEventListener('click', (e) => {
    e.preventDefault();
    contCity.classList.toggle('show');
});