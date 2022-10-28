(()=>{"use strict";function t(t){return t<10?`0${t}`:t}function e(t){const e=document.querySelector(t);e.classList.add("show"),e.remove("hide"),document.body.style.overflow="hidden",clearInterval(o)}function n(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}const o=setTimeout((()=>{e(".modal")}),15e4),s=function(){function t(t){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),e(".modal");const s=document.createElement("div");s.classList.add("modal__dialog"),s.classList.add("show"),s.innerHTML=`\n    <div class="modal__content">\n        <div class="modal__close" data-close>&times;</div>\n        <div class="modal__title">${t}</div>\n    </div>\n    `,modal.append(s),setTimeout((()=>{s.remove(),o.classList.remove("hide"),o.classList.add("show"),n(".modal")}),5e3)}const o=document.querySelectorAll("form");o.forEach((e=>{var n;(n=e).addEventListener("submit",(e=>{e.preventDefault();const o=document.createElement("img");o.src="img/tabs/spinner.svg",o.style.cssText="\n        display: block;\n        margin: 0 auto;\n        ",n.insertAdjacentElement("afterend",o);const s=new FormData(n);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(s.entries()))).then((e=>{console.log(e),t("Ваши данные успешно отправлены. Мы вам перезвоним."),o.remove()})).catch((()=>{t("Что то пошло не так. Повторите попытку.")})).finally((()=>{n.reset()}))}))}))};window.addEventListener("DOMContentLoaded",(()=>{(function(){const t=document.querySelectorAll(".tabheader__item"),e=document.querySelectorAll(".tabcontent"),n=document.querySelector(".tabheader__items");function o(){e.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),t.forEach((t=>{t.classList.remove("tabheader__item_active")}))}o(),n.addEventListener("click",(n=>{const s=n.target;s&&s.classList.contains("tabheader__item")&&t.forEach(((n,a)=>{n==s&&(o(),function(n){e[n].classList.add("show","fade"),e[n].classList.remove("hide"),t[n].classList.add("tabheader__item_active")}(a))}))}))})(),function(){const e=new Date("2022-09-20");!function(n,o){const s=document.querySelector(".timer"),a=s.querySelector("#days"),c=s.querySelector("#hours"),i=s.querySelector("#minutes"),r=s.querySelector("#seconds"),l=setInterval(d,1e3);function d(){const n=function(t){const e=Date.parse(t)-Date.parse(new Date);return{total:e,d:Math.floor(e/864e5),h:Math.floor(e/36e5%24),m:Math.floor(e/6e4%60),s:Math.floor(e/1e3%60)}}(o);a.textContent=t(n.d),c.textContent=t(n.h),i.textContent=t(n.m),r.textContent=t(n.s),0==e&&clearInterval(l)}d()}(0,e)}(),function(t,o){const s=document.querySelectorAll(o),a=document.querySelector(t);s.forEach((t=>{t.addEventListener("click",(()=>{e(".modal")}))})),a.addEventListener("click",(t=>{t.target!==a&&""!=t.target.getAttribute("data-close")||n(".modal")})),document.addEventListener("keydown",(t=>{("Enter"===t.code||"Escape"===t.code&&a.classList.contains("show"))&&(n(".modal"),console.log(!0))})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(e(".modal"),window.removeEventListener("scroll",t))}))}(".modal","[data-modal]"),function(){document.querySelectorAll(".menu__item").forEach((t=>t.remove()));class t{constructor(t,e,n,o,s,a,...c){this.src=t,this.alt=e,this.title=n,this.content=o,this.price=s,this.transfer=27,this.parent=document.querySelector(a),this.transformer(),this.rest=c}transformer(){this.price=this.price*this.transfer}verst(){const t=document.createElement("div");t.innerHTML=`\n            <img class = 'myimg' src=${this.src} alt=${this.alt}>\n            <h3 class="menu__item-subtitle">${this.title}</h3>\n            <div class="menu__item-descr">${this.content}</div>\n            <div class="menu__item-divider"></div>\n            <div class="menu__item-price">\n                <div class="menu__item-cost">Цена:</div>\n                <div class="menu__item-total"><span>${this.price}</span> бед руб</div>\n            </div>`,this.parent.append(t),0===this.rest.length?(this.element="menu__item",t.classList.add(this.element)):this.rest.forEach((e=>t.classList.add(e)))}}axios.get("http://localhost:3000/menu").then((e=>{e.data.forEach((({img:e,altimg:n,title:o,descr:s,price:a})=>{new t(e,n,o,s,a,".menu .container").verst()}))}))}(),s(),function(){const e=document.querySelector(".offer__slider-prev"),n=document.querySelector(".offer__slider-next"),o=document.querySelectorAll(".offer__slide"),s=document.getElementById("current"),a=document.getElementById("total"),c=document.querySelector(".offer__slider-wrapper"),i=document.querySelector(".offer__slider-inner"),r=window.getComputedStyle(c).width,l=document.querySelector(".offer__slider");let d=1,u=0;o.length<10?(a.textContent=t(o.length),s.textContent=t(d)):(a.textContent=o.length,s.textContent=d),i.style.width=100*o.length+"%",i.style.display="flex",i.style.transition="0.5s all",c.style.overflow="hidden",o.forEach((t=>{t.style.width=r})),l.style.position="relative";const m=document.createElement("ol");m.classList.add("my__class");const h=[];m.style.cssText="\nposition: absolute;\nright: 0;\nbottom: 0;\nleft: 0;\nz-index: 15;\ndisplay: flex;\njustify-content: center;\nmargin-right: 15%;\nmargin-left: 15%;\nlist-style: none;\n",l.append(m);for(let t=0;t<o.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\nbox-sizing: content-box;\nflex: 0 1 auto;\nwidth: 30px;\nheight: 6px;\nmargin-right: 3px;\nmargin-left: 3px;\ncursor: pointer;\nbackground-color: #fff;\nbackground-clip: padding-box;\nborder-top: 10px solid transparent;\nborder-bottom: 10px solid transparent;\nopacity: .5;\ntransition: opacity .6s ease;\n",0==t&&(e.style.opacity="1"),m.append(e),h.push(e)}function f(t){return+t.replace(/\D/g,"")}h.forEach((e=>{e.addEventListener("click",(e=>{const n=e.target.getAttribute("data-slide-to");d=n,u=f(r)*(n-1),i.style.transform=`translateX(${-u}px)`,h.forEach((t=>t.style.opacity=".5")),h[d-1].style.opacity="1",s.textContent=t(d)}))})),n.addEventListener("click",(e=>{e.preventDefault(),u==f(r)*(o.length-1)?u=0:u+=f(r),i.style.transform=`translateX(${-u}px)`,d==o.length?d=1:d++,s.textContent=t(d),h.forEach((t=>t.style.opacity=".5")),h[d-1].style.opacity="1"})),e.addEventListener("click",(e=>{e.preventDefault(),0==u?u=f(r)*(o.length-1):u-=f(r),i.style.transform=`translateX(${-u}px)`,1==d?d=o.length:d--,s.textContent=t(d),h.forEach((t=>t.style.opacity=".5")),h[d-1].style.opacity="1"}))}(),function(){const t=document.querySelector(".calculating__result span");let e,n,o,s="female",a="1.375";function c(t,e,n){const o=document.querySelectorAll(`${t} div`);i(o,e),o.forEach((t=>{(t.getAttribute("id")==n||t.getAttribute("data-ratio")==n)&&t.classList.add(e)}))}function i(t,e){t.forEach((t=>{t.classList.remove(e)}))}function r(){t.textContent=s&&e&&n&&o&&a?"female"==s?Math.round((447.6+9.2*n+3.1*e-4.3*o)*a):Math.round((88.36+13.4*n+4.8*e-5.7*o)*a):"____"}function l(t,e){const n=document.querySelectorAll(`${t} div`);n.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(a=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(s=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),i(n,e),t.target.classList.add(e),r()}))}))}function d(t){const s=document.querySelector(t);s.addEventListener("input",(()=>{switch(s.value.match(/\D/g)?s.style.border="1px solid red":s.style.border="none",s.getAttribute("id")){case"weight":n=s.value;break;case"age":o=s.value;break;case"height":e=s.value}r()}))}(localStorage.getItem("sex")||localStorage.getItem("ratio"))&&(s=localStorage.getItem("sex"),c("#gender","calculating__choose-item_active",s),a=localStorage.getItem("ratio"),c(".calculating__choose_big","calculating__choose-item_active",a)),r(),l("#gender","calculating__choose-item_active"),l(".calculating__choose_big","calculating__choose-item_active"),d("#height"),d("#weight"),d("#age")}()}))})();