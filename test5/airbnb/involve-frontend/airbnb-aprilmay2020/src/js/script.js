'use strict';

const selInp = document.getElementById('subject'),
    nameInp = document.getElementById('name'),
    telInp = document.getElementById('phone'),
    emailInp = document.getElementById('email'),
    mesInp = document.getElementById('message'),
    selBox = document.querySelector('.main_wrapper__outer__contactus_box__form_box__select_box__wrapper__inner__select'),
    selText = document.querySelector('.main_wrapper__outer__contactus_box__form_box__select_box__wrapper__inner__select__text'),
    selImg = document.querySelector('.main_wrapper__outer__contactus_box__form_box__select_box__wrapper__inner__select__arrow_box'),
    optBox = document.querySelector('.main_wrapper__outer__contactus_box__form_box__select_box__wrapper__inner__options_box'),
    options = document.getElementsByClassName('main_wrapper__outer__contactus_box__form_box__select_box__wrapper__inner__options_box__option'),
    form = document.getElementById('form'),
    loader = document.getElementById('loader'),
    submit = document.getElementById('submit'),
    great = document.getElementById('great'),
    cntUsBox = document.querySelector('.main_wrapper__outer__contactus_box'),
    rcvdBox = document.querySelector('.main_wrapper__outer__rcvd_box');


// show select options

selBox.addEventListener('click', function () {
    optBox.classList.toggle('open_opt_box');
    selBox.classList.toggle('sel_bor');
    selImg.classList.toggle('img_rotate');
});


// choose option in select box

for (let o = 0; o < options.length; o++) {
    options[o].addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.selected').classList.remove('selected');
            this.classList.add('selected');
            selText.innerHTML = this.textContent;
        }
    })
}


// close options box if click outside

self.addEventListener('click', function (e) {
    if (!selBox.contains(e.target)) {
        optBox.classList.remove('open_opt_box');
        selBox.classList.remove('sel_bor');
        selImg.classList.remove('img_rotate');
    }
});


// input event

nameInp.addEventListener('input', function (e) {
    validInpField(this, e.target.pattern);
});
telInp.addEventListener('input', function (e) {
    validInpField(this, e.target.pattern);
});
emailInp.addEventListener('input', function (e) {
    validInpField(this, e.target.pattern);
});


// check input valid

function validInpField(type, format) {
    if (!type.value.match(format)) {
        type.classList.add('err_mes');
        type.previousElementSibling.children[1].style.opacity = 1;
        return false;
    } else {
        type.classList.remove('err_mes');
        type.previousElementSibling.children[1].style.opacity = 0;
        return type.value;
    }
}


// submit on click

submit.addEventListener('click', function (e) {
    loaderStart();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
    // check message value
    if (!mesInp.value.length) {
        mesInp.value = 'Empty';
    }
    setTimeout(function () {
        if (validateForm()) {
            submitForm();
            rcvdBox.style.display = 'block';
            cntUsBox.style.display = 'none';
        }
    }, 2000);
});


//start loader

function loaderStart() {
    for (let i = 0; i < form.length - 1; i++) {
        form.children[i].children[0].children[0].style.color = 'rgba(0, 0, 0, 0.3)';
        form.children[i].children[1].style.color = 'rgba(0, 0, 0, 0.3)';
        selBox.children[0].style.color = 'rgba(0, 0, 0, 0.3)';
        selBox.children[1].style.backgroundPosition = '0 6px';
    }
    submit.style.display = 'none';
    loader.style.display = 'block';
}


// submit form ajax

function submitForm() {
    //check select value
    for (let l = 0; l < options.length; l++) {
        if (options[l].classList.contains('selected')) {
            selInp.value = options[l].dataset.value;
        }
    }
    let http = new XMLHttpRequest();
    http.open("POST", "#", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let params = 'subject=' + selInp.value + '&name=' + nameInp.value + '&tel=' + telInp.value + '&email=' + emailInp.value + '&message=' + mesInp.value;
    http.send(params);
    console.log(params);
}


//check form valid

function validateForm() {
    let valid = true;
    //check name
    valid = valid && validInpField(nameInp, nameInp.pattern);
    //check phone
    valid = valid && validInpField(telInp, telInp.pattern);
    // check email
    valid = valid && validInpField(emailInp, emailInp.pattern);

    // clear loader
    for (let j = 0; j < form.length - 1; j++) {
        form.children[j].children[0].children[0].style.color = 'rgba(0, 0, 0, 0.8)';
        form.children[j].children[1].style.color = 'rgba(0, 0, 0, 0.8)';
        selBox.children[0].style.color = 'rgba(0, 0, 0, 0.8)';
        selBox.children[1].style.backgroundPosition = '0 0';
    };
    loader.style.display = 'none';
    submit.style.display = 'block';

    return valid;
}


// close popup clear inputs

great.addEventListener('click', function () {
    rcvdBox.style.display = 'none';
    nameInp.value = '';
    telInp.value = '';
    emailInp.value = '';
    mesInp.value = '';
    cntUsBox.style.display = 'block';
})
