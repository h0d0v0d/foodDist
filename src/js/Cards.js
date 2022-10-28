function Cards() {
    // CLASS

const kards = document.querySelectorAll('.menu__item');
kards.forEach(i => i.remove());

const getResources = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Не получается отправитть запрос на сервер ${url}, стастус ошибки - ${res.status}`);
    }
    return await res.json();
};

class NewCard {
    constructor (src, alt, title, content, price, parentSelector, ...rest) {
        this.src = src;
        this.alt = alt;
        this.title  = title;
        this.content = content;
        this.price = price;
        this.transfer = 27;
        this.parent = document.querySelector(parentSelector);
        this.transformer();
        this.rest = rest;
    }

    transformer () {
        this.price = this.price * this.transfer;
    }
    
    verst () {
        const element = document.createElement('div');
        element.innerHTML = `
            <img class = 'myimg' src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.content}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> бед руб</div>
            </div>`;
        this.parent.append(element);

        if (this.rest.length === 0) {
            this.element = 'menu__item';
            element.classList.add(this.element);
        } else {
            this.rest.forEach(className => element.classList.add(className));
        }
    }
}

/* getResources('http://localhost:3000/menu')
.then (data => {
    data.forEach(({img, altimg, title, descr, price}) => {
        new NewCard(img, altimg, title, descr, price, '.menu .container').verst();
    });
}); */
// используем функцию отправки гет запроса
// дестрктуризируем и перебираем получаемую с сервера дату 
// поммещаем ее данные в ранеее созданный класс через цикл
// еще есть прикалюха в my.js

axios.get('http://localhost:3000/menu')
.then(data => {
    data.data.forEach(({img, altimg, title, descr, price}) => {
        new NewCard( 
            img,
            altimg,
            title,
            descr, 
            price,
            '.menu .container'
        ).verst();
    });
});

}

export default Cards