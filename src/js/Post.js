import {hideM} from './Modal'
import {showM} from './Modal'
import {timerId} from './Modal'

function Post() {
// отправляем POST-запрос на сервер

function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    showM('.modal');

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.classList.add('show');
    thanksModal.innerHTML = `
    <div class="modal__content">
        <div class="modal__close" data-close>&times;</div>
        <div class="modal__title">${message}</div>
    </div>
    `;
    modal.append(thanksModal);

    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.remove('hide');
        prevModalDialog.classList.add('show');
        hideM('.modal');
    }, 5000);
}
// которая создает и показывает информационное модельное окно 
// она примнемат параметр message - это текст модельного окна 

const forms = document.querySelectorAll('form');

const infoForClient = {
    succes: 'Ваши данные успешно отправлены. Мы вам перезвоним.',
    fail: 'Что то пошло не так. Повторите попытку.',
    loading: 'img/tabs/spinner.svg'
};

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json();
};
// тут в любом случае асинхронный код
// как сказал один очень умный человек ассинхронным он и останется просто на более высоком уровне вложенности

// asinc говорит что внутри асинхроннный код
// await говорит что функция будет ждать выполнение запроса и потом код будет работать дальше
// второй await нужен чтоб дождаться полной загрузки json файла

function sendDataForm (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('img');
        statusMessage.src = infoForClient.loading;
        statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);
        // метод insertAdjacentElement() позволяет болле точно определять(выбирать) место расположеня элемента

        const dataForm = new FormData(form);
        // собираем данные

        const json = JSON.stringify(Object.fromEntries(dataForm.entries()));
        // работаем с форматами 

        postData('http://localhost:3000/requests',json)
        .then((data) => {
            console.log(data);
            showThanksModal(infoForClient.succes);
            statusMessage.remove();
        })
        .catch(() => { 
            showThanksModal(infoForClient.fail);
        })
        .finally(() => {
            form.reset(); // сбрасывает форму
        });
    });
}
// работаем
forms.forEach( (f) => {
    sendDataForm(f);
});
}

export default Post