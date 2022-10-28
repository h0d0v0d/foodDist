function Tabs() {
    
const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

function noneTabsContent () {
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    tabs.forEach(tab => {
        tab.classList.remove('tabheader__item_active');
    });
}
noneTabsContent();
// функция, которая перебирает контент табов, навешивает скласс hide то есть скрывает 
// удаляет класс show и fade то есть не показывает и убирает стиль появления
// так же эта функция удаляет клас активности с табов

function showTabsContent (i) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');

    tabs[i].classList.add('tabheader__item_active');
}
// функция, кторая делает наоборот функции сверху
// только работает с одним элемнтом



tabsParent.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (item == t) {
                noneTabsContent();
                showTabsContent(i);
            }
        });
    }
});
// создаем обработчик события клика родителя табов
// первый иф работает если пользователь одновременно нажал на родителя и один из табов
// второй иф сравниват таб с элемнтом на который нажал пользователь
// если есть совпадение то он запускает две функции 

}

export default Tabs