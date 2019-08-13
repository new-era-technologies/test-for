'use strict';

const wrapper = document.querySelector('.inter__box__wrapper');
const erMes = document.querySelector('.inter__box__error_box__message');
const submit = document.querySelector('.inter__box__error_box__form__submit');
const modal = document.querySelector('.inter__box__modal_box__modal_overlay__inner');
const overlay = document.querySelector('.inter__box__modal_box__modal_overlay');
const textRes = document.querySelector('.inter__box__modal_box__modal_overlay__inner__text_res');
const butOk = document.querySelector('.inter__box__modal_box__modal_overlay__inner__but');

let arr = [], sum = 0;

for (let i = 1; i < 6; i++) {
    let inner = document.createElement('div');
    inner.classList.add('inter__box__wrapper__inner');
    wrapper.appendChild(inner);

    let iNumber = document.createElement('p');
    iNumber.classList.add('inter__box__wrapper__inner__inum');
    iNumber.innerHTML = i;
    inner.appendChild(iNumber);

    let arrCard = [];
    arr.push(arrCard);

    for (let k = 1; k < 21; k++) {
        let butOut = document.createElement('div');
        butOut.classList.add('inter__box__wrapper__inner__outer');
        inner.appendChild(butOut);

        let number = document.createElement('button');
        number.classList.add('inter__box__wrapper__inner__outer__but');
        number.innerHTML = k;
        butOut.appendChild(number);

        let xNumber = document.createElement('p');
        xNumber.classList.add('inter__box__wrapper__inner__outer__xbut');
        xNumber.innerHTML = 'X';
        butOut.appendChild(xNumber);

        number.addEventListener('click', (e) => {
            e.preventDefault();
            checkItems(arrCard, k, inner);
            xNumber.classList.toggle('mark');
            for (let o = 0; o < 5; o++) {
                if (arr[o].length > 5) {
                    submit.style.display = 'none';
                }
            }
        })
    }
}

const checkItems = (arr, i, el) => {
    if (arr.includes(i)) {
        let index = arr.indexOf(i);
        arr.splice(index, 1);
    } else {
        arr.push(i);
    }

    if (arr.length > 5) {
        el.style.border = '1px solid red';
        el.style.boxShadow = '0 0 10px 1px';
        erMes.style.display = 'block';
    } else {
        el.style.border = 'none';
        el.style.boxShadow = '0 0 0 0';
        erMes.style.display = 'none';
    }

    if (arr.length === 5) {
        submit.style.display = 'block';
    } else {
        submit.style.display = 'none';
    }
};

const getRand = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const randNumz = () => {
    let arrNumzz = [
        [
            [getRand(1, 20), getRand(1, 20), getRand(1, 20), getRand(1, 20), getRand(1, 20)],
            [getRand(1, 20), getRand(1, 20), getRand(1, 20), getRand(1, 20), getRand(1, 20)],
            [getRand(1, 20), getRand(1, 20), getRand(1, 20), getRand(1, 20), getRand(1, 20)],
            [getRand(1, 20), getRand(1, 20), getRand(1, 20), getRand(1, 20), getRand(1, 20)],
            [getRand(1, 20), getRand(1, 20), getRand(1, 20), getRand(1, 20), getRand(1, 20)],
        ]
    ];

    let jsonContent = JSON.stringify(arrNumzz);
    let jsonContentParsed = JSON.parse(jsonContent);

    return getNum(jsonContentParsed);

    // const fs = require('fs');
    // fs.writeFileSync('data/data.JSON', jsonContent);
};

// let data = '../../data/data.JSON';
submit.addEventListener('click', (e) => {
    e.preventDefault();
    randNumz();
    // fetch(data)
    //     .then((response) => response.json())
    //     .then((response) => getNum(response));
});

const getNum = (res) => {
    let nums = document.querySelectorAll('.inter__box__wrapper__inner');

    for (let z = 0; z < res[0].length; z++) {
        for (let h = 0; h < 5; h++) {
            nums[z].getElementsByTagName('button')[res[0][z][h] - 1].style.backgroundColor = 'green';
        }
    }

    getDiff(arr, res[0]);

    overlay.style.display = 'block';
    modal.style.display = 'block';
    textRes.innerHTML += sum;
};

const getDiff = (array1, array2) => {
    for (let a = 0; a < array1.length; a++) {
        const diff = array1[a].filter(el => array2[a].includes(el));
        sum += diff.length;
    }

    return sum;
};

butOk.addEventListener('click', (e) => {
    document.querySelector('.inter__box__error_box__form').reset();
    overlay.style.display = 'none';
    textRes.innerHTML = '';
    sum = 0;

    const numzz = document.getElementsByClassName('inter__box__wrapper__inner__outer__but');

    for (let m = 0; m < numzz.length; m++) {
        numzz[m].style.backgroundColor = 'transparent';
    }
});