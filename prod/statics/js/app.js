!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4)},function(e,t){const n=document.querySelectorAll('[data-element="faq-top"]');n.length&&function(){for(let t=0;t<n.length;t++)n[t].addEventListener("click",e);function e(){const e=this.closest(".faq__item"),t=e.querySelector(".faq__box");e.classList.contains("faq__item_active")?(e.classList.remove("faq__item_active"),t.style.maxHeight=0):(e.classList.add("faq__item_active"),t.style.maxHeight=t.scrollHeight+"px")}}()},function(e,t){const n=document.querySelector('[data-element="advantages__inner"]'),o=document.querySelector('[data-element="advantages__slider"]'),r=document.querySelectorAll('[data-element="advantages__item"]');n&&o&&r.length&&function(){let e,t;t=new Swiper(o,{speed:500,spaceBetween:20,initialSlide:1,effect:"fade"}),e=new Swiper(n,{speed:500,spaceBetween:20,initialSlide:1,centeredSlides:!0,slidesPerView:"auto"}),t.controller.control=e,e.controller.control=t;for(let n=0;n<r.length;n++)r[n].addEventListener("click",()=>{e.slideTo(n),t.slideTo(n)})}()},function(e,t){const n=document.querySelector('[data-element="header__burger"]'),o=document.querySelector(".header");n&&(n.addEventListener("click",(function(e){e.stopPropagation(),o.classList.toggle("header_mobile-active")})),window.addEventListener("click",(function(){o.classList.remove("header_mobile-active")})))},function(e,t){function n(e){let t;e.preventDefault(),t=this.dataset.link?this.dataset.link.substr(1):this.hash.substr(1);const n=document.getElementById(t);n&&function(e){const t=window.pageYOffset,n=e.getBoundingClientRect().top+pageYOffset-80,o=n-t,r=performance.now();requestAnimationFrame((function e(i){const l=i-r;l>300?window.scrollTo(0,n):(window.scrollTo(0,t+o*(l/300)),requestAnimationFrame(e))}))}(n)}document.querySelector('[data-role="scroll-to-anchor"]')&&function(){const e=document.querySelectorAll('[data-role="scroll-to-anchor"]');for(let o=0,r=e.length;o<r;o++)t=e[o],t.addEventListener("click",n);var t}()}]);