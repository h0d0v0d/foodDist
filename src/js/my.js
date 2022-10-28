'use strict';

/* const but = document.createElement('button');
document.body.appendChild(but); */
//let but1 = null;

class CreateElement {
    constructor (height, width, color, text) {
        this.height = height;
        this.width = width;
        this.color = color;
        this.text = text;
    }

    createbutton (x) {
        x = document.createElement('button');
        x.textContent =  this.text;
        x.style.height = this.height;
        x.style.width = this.width;
        x.style.backgroundColor = this.color;
        document.body.appendChild(x);
    }
}

const but = new CreateElement('200px', '200px', 'red', 'Я люблю эту страну');
but.createbutton(but);

const but1 = new CreateElement('200px', '200px', 'yellow', 'нажми');
but1.createbutton(but1);

const di = document.createElement('img');
di.src = 'img/tabs/vegy.jpg';
document.body.appendChild(di);

function summ(a, b, ...rest) {
    console.log(a + b);
    if (rest.length != 0) {
        console.log(true);
    } else {
        console.log(false);
    } 

}

summ(1,2, 3);

// дполнительно про динамическое создание карточек // 

// 1) сначала нам нужна инфа с сервера 
const getResources = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Не получается отправитть запрос на сервер ${url}, стастуч ошибки - ${res.status}`);
    }

    return await res.json();
};
// функция гет запроса на сервер

//2) теперь нужно создать функцию которая будет с ними рабоать 

function newCard (data, parentSelector) {
    data.forEach(({img, altimg, title, descr, price}) => {
        const c = document.createElement('div');
        c.classList.add(menu__item);
        c.innerHTML = 
        `
        <img class = 'myimg' src=${img} alt=${altimg}>
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${price}</span> грн/день</div>
        </div>
        `;
        document.querySelector(parentSelector).append(c);
    });
}

// 3) соединяем все 
getResources('http://localhost:3000/menu')
.then((data) => {
    newCard(data, '.menu .container');
});


// slider 

 const butPrev = document.querySelector('.offer__slider-prev'),
       butNext = document.querySelector('.offer__slider-next'),
       sliderImg = document.querySelectorAll('.offer__slide');
let current = document.getElementById('current'),
    total = document.getElementById('total'),
    index = 1;
showImgSlide(1);
total.textContent = getZero(sliderImg.length);
function showImgSlide(i) {
    if (i > 4) {
        index = 1;
    } 
    if (i == 0) {
        index = sliderImg.length;
    }
    current.textContent = getZero(index);
    sliderImg.forEach(item => item.style.display = 'none');
    sliderImg[index - 1].style.display = 'block';
    console.log(index);
}
function plusSlides(n) {
    showImgSlide(index += n);
}
butNext.addEventListener('click', () => {
    plusSlides(1);
});
butPrev.addEventListener('click', () => {
    plusSlides(-1);
}); 

////////////////

const con = document.querySelectorAll('.tabcontent'),
      tabs =document.querySelectorAll('.tabheader__item');
      

function noneCon() {
    con.forEach((item) => {
        item.style.display = 'none';
    });

    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active');
    });
}
noneCon();

window.addEventListener('scroll', () => {
    if (window.pageXOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
        console.log(true);
    }
});

////////////////




