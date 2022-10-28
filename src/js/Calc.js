function Calc() {
    
const result = document.querySelector('.calculating__result span');

let sex = 'female',
    height, 
    weight, 
    age, 
    ratio = '1.375';

if (localStorage.getItem('sex') || localStorage.getItem('ratio')) {
    sex = localStorage.getItem('sex');
    initLocalInfo('#gender', 'calculating__choose-item_active', sex);
    ratio = localStorage.getItem('ratio');
    initLocalInfo('.calculating__choose_big', 'calculating__choose-item_active', ratio);
}

function initLocalInfo (parent, activeClass, info) {
    const elements = document.querySelectorAll(`${parent} div`);
    offActiveClass(elements, activeClass);
    // используем функцию, котрая отключает активность 
    elements.forEach((elem) => {
        if (elem.getAttribute('id') == info) {
            elem.classList.add(activeClass);
        } else if (elem.getAttribute('data-ratio') == info){
            elem.classList.add(activeClass);
        }
    });
    // перебираем элементы и если находим елемент id или data-ratio котрого равно info - добавляем ему ксласс активности 
}
// функция, которая импортирует настройки используя localStorage

function offActiveClass(elements, activeClasss) {
    elements.forEach((element) => {
        element.classList.remove(activeClasss);
    });
    // убираем класс активности у каждого элемента 
}

function calcTotal () {
    if (!sex || !height || !weight || !age || !ratio) {
        result.textContent = '____';
        return;
    }
    // если хоть одно значение false - результат ____

    if (sex == 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
    // выбираем формулу расчета в зависимоти от пола 
}
calcTotal();

function getStaticInfo(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`);

    elements.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', e.target.getAttribute('id'));
            }
            
            offActiveClass(elements, activeClass);
            e.target.classList.add(activeClass);
     
            calcTotal();
        });
    });
    // вешаем событие клика которе опрделяет на какую из статических кнопок мы нажали и присваивает соотвестввующие значение 
}

getStaticInfo('#gender', 'calculating__choose-item_active');
getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');
// вызываем функцию на каждую формму статичной инфы, котрая обрабатывает дефствия пользователя 

function getDynamicInfo(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {

        if (input.value.match(/\D/g)) {
            input.style.border = '1px solid red';
        } else {
            input.style.border = 'none';
        }


        switch(input.getAttribute('id')) {
            case 'weight':
                weight = input.value;
                break;

            case 'age' :
                age = input.value;
                break;

            case 'height':
                height = input.value;
                break;
        }
        calcTotal();
    });
}
// функция которая сранивате импуты и устанавливет им значение 

getDynamicInfo('#height');
getDynamicInfo('#weight');
getDynamicInfo('#age');
// вызвыаем функию на каждый инпут и работаем с ней 

}

export default Calc