import { getZero } from "./Timer";

function Slider() {

 const butPrev = document.querySelector('.offer__slider-prev'),
 butNext = document.querySelector('.offer__slider-next'),
 sliderImg = document.querySelectorAll('.offer__slide'),
 current = document.getElementById('current'),
 total = document.getElementById('total'),
 sliderWrapper= document.querySelector('.offer__slider-wrapper'),
 sliderField = document.querySelector('.offer__slider-inner'),
 width = window.getComputedStyle(sliderWrapper).width,
 slider = document.querySelector('.offer__slider');

let index = 1,
offset = 0;

if (sliderImg.length < 10) {
total.textContent = getZero(sliderImg.length);
current.textContent = getZero(index);
} else {
total.textContent = sliderImg.length;
current.textContent = index;
}

// делаем возможнотсь перелистывания и создаем точки(динамически)
sliderField.style.width = 100 * sliderImg.length + '%';
// cначала делаем так чтоб в одну строку помещались наши 4 слайда
sliderField.style.display = 'flex';
// назачаем вторично обертке 
// способность гибкого элемента растягиваться или сжиматься
// для заполнения собой доступного свободного пространства
sliderField.style.transition = '0.5s all';
// ебу что это значит 
sliderWrapper.style.overflow = 'hidden';
sliderImg.forEach(slide => {
slide.style.width = width;
});
// каждому слайду устанавливаем ширину второй обертки

slider.style.position = 'relative';
// все абсолютно спозиционриванные элементы внутри будут норсально отображаться

// точки 
const pointsWrapper = document.createElement('ol');
pointsWrapper.classList.add('my__class');
const dots = [];

pointsWrapper.style.cssText = `
position: absolute;
right: 0;
bottom: 0;
left: 0;
z-index: 15;
display: flex;
justify-content: center;
margin-right: 15%;
margin-left: 15%;
list-style: none;
`;
slider.append(pointsWrapper);
for(let i = 0; i < sliderImg.length; i++) {
const p = document.createElement('li');
p.setAttribute('data-slide-to', i + 1);
p.style.cssText = `
box-sizing: content-box;
flex: 0 1 auto;
width: 30px;
height: 6px;
margin-right: 3px;
margin-left: 3px;
cursor: pointer;
background-color: #fff;
background-clip: padding-box;
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;
opacity: .5;
transition: opacity .6s ease;
`;

if (i == 0) {
  p.style.opacity = '1';
}
pointsWrapper.append(p);
dots.push(p);
}

dots.forEach((dot) => {
dot.addEventListener('click', (e) => {
  const slideTo = e.target.getAttribute('data-slide-to');

  index = slideTo;
  offset = deleteWord(width) * (slideTo - 1);

  sliderField.style.transform = `translateX(${-offset}px)`;

  dots.forEach(dot => dot.style.opacity = '.5');
  dots[index-1].style.opacity = '1';

  current.textContent = getZero(index);
});
});

function deleteWord (str) {
    return +str.replace(/\D/g, '');
}
// вырезает буквы

butNext.addEventListener('click', (event) => {
    event.preventDefault();
    if (offset == deleteWord(width) * (sliderImg.length - 1)) {
        offset = 0;
    } else {
        offset += deleteWord(width);
    }
    sliderField.style.transform = `translateX(${-offset}px)`;
    if (index == sliderImg.length) {
        index = 1;
    } else {
        index++;
    }
    current.textContent = getZero(index);
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[index-1].style.opacity = '1';
});

butPrev.addEventListener('click', (event) => {
    event.preventDefault();
    if (offset == 0) {
        offset = deleteWord(width) * (sliderImg.length - 1);
    } else {
        offset -= deleteWord(width);
    }
    sliderField.style.transform = `translateX(${-offset}px)`;
    if (index == 1) {
        index = sliderImg.length;
    } else {
        index--;
    }
    current.textContent = getZero(index); 
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[index-1].style.opacity = '1';


});

}

export default Slider


