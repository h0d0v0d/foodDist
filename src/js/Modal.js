function showM (modalSelector) {
  const modal = document.querySelector(modalSelector)
  modal.classList.add('show');
  modal.remove('hide');
  document.body.style.overflow = 'hidden';
  clearInterval(timerId);
}

function hideM (modalSelector) {
  const modal = document.querySelector(modalSelector)
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}
// функция которая убирает модельное окно 
// overflow отвечает за прокрутку страницы

const timerId = setTimeout(() => {showM('.modal')}, 150000);
// таймер если проходит 150 сек то показываем модельно окно
// но в вызываемой функции есть выключатель этого таймера
// и если функция будет вызвана самим пользователем то таймер удалиться/отключиться

function Modal(modalSelector, triggerSelector) {

const buttonShowModal = document.querySelectorAll(triggerSelector),
modal = document.querySelector(modalSelector);

function showMByScroll () {
if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
  showM('.modal');
  window.removeEventListener('scroll', showMByScroll);
}
}
// если сумма координаты у и длины того что видит равна всей скроловой длина документа 
// то показывам модельно окно
// и удаляем события чтобы оно не вызвалось при каждом скролинге до конца

buttonShowModal.forEach((i) => {
i.addEventListener('click', () => {showM('.modal')});
});
//на кнопки вешаем обработчик события для показа модельного окна

modal.addEventListener('click', (e) => {
if (e.target === modal || e.target.getAttribute('data-close') == '') {
  hideM('.modal');
}
});
// если пользователь вызвал модельное окно и хочет закрыть его путем нажатия на место не модельного окна

document.addEventListener('keydown', (e) => {
if (e.code === 'Enter' || e.code === 'Escape' && modal.classList.contains('show')) {
  hideM('.modal');
  console.log(true);
}
});
// если пользователь нажимает одну из этих трех кнопок и в модельном окне есть класс show
// то скрываем модельное окно 

window.addEventListener('scroll', showMByScroll) ;

}

export default Modal;
export {showM, hideM, timerId}