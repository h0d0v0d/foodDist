function Timer() {

const deadline = new Date('2022-09-20');

function getTimeRemaining (endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor (t / (1000 * 60 * 60) % 24),
          minutes = Math.floor (t / (1000 * 60) %  60),
          seconds = Math.floor ((t / 1000) % 60);
    return {
            'total': t,
            'd': days,
            'h': hours,
            'm': minutes,
            's': seconds
    };
}
// функция, которая считает сколько осталось до дедлайна в днях часах минутах секундах

function setClock (selector, endtime) {
    const parent = document.querySelector(selector),
          days = parent.querySelector('#days'),
          hours = parent.querySelector('#hours'),
          minutes = parent.querySelector('#minutes'),
          seconds = parent.querySelector('#seconds'),
          timeInterval = setInterval(upperTime, 1000);
    upperTime();

    function upperTime () {
        const func = getTimeRemaining(endtime);
        days.textContent = getZero(func.d);
        hours.textContent = getZero(func.h);
        minutes.textContent = getZero(func.m);
        seconds.textContent = getZero(func.s);

        if (deadline == 0) {
            clearInterval(timeInterval);
        }
    }
}
// сначал находим наши элементы взаимодействия(нашего)
// создаем функцию котрая меняет значение найденных элементов на значения из функции GetTimerRemaining()
// внутри которой создаем условия очистки еще не созданного таймера
// вызываем дочернюю функцию в области видимости материнской функии через setInterval
    // чтобы убрать баг задержки изменения таймера при перезагрузки страницы
    // таким образом изменения запускаются не спутся 1000 милисекунд как в setInterval
    // а сразу во время чтения кода

setClock('.timer', deadline);
}

export function getZero (num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
} 
// добавлят 0 к числу если оно меньше 10

export default Timer