!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10)},function(e,t){const n=document.querySelectorAll('[data-element="faq-top"]');n.length&&function(){for(let t=0;t<n.length;t++)n[t].addEventListener("click",e);function e(){const e=this.closest(".faq__item"),t=e.querySelector(".faq__box");e.classList.contains("faq__item_active")?(e.classList.remove("faq__item_active"),t.style.maxHeight=0):(e.classList.add("faq__item_active"),t.style.maxHeight=t.scrollHeight+"px")}}()},function(e,t){const n=document.querySelector('[data-element="advantages__inner"]'),o=document.querySelector('[data-element="advantages__slider"]'),c=document.querySelectorAll('[data-element="advantages__item"]');n&&o&&c.length&&function(){let e,t;t=new Swiper(o,{speed:500,spaceBetween:20,initialSlide:1,effect:"fade"}),e=new Swiper(n,{speed:500,spaceBetween:20,initialSlide:1,centeredSlides:!0,slidesPerView:"auto"}),t.controller.control=e,e.controller.control=t;for(let n=0;n<c.length;n++)c[n].addEventListener("click",()=>{e.slideTo(n),t.slideTo(n)})}()},function(e,t){const n=document.querySelector('[data-element="header__burger"]'),o=document.querySelector(".header");n&&(n.addEventListener("click",(function(e){e.stopPropagation(),o.classList.toggle("header_mobile-active")})),window.addEventListener("click",(function(){o.classList.remove("header_mobile-active")})))},function(e,t){function n(e){let t;e.preventDefault(),t=this.dataset.link?this.dataset.link.substr(1):this.hash.substr(1);const n=document.getElementById(t);n&&function(e){const t=window.pageYOffset,n=e.getBoundingClientRect().top+pageYOffset-80,o=n-t,c=performance.now();requestAnimationFrame((function e(i){const r=i-c;r>300?window.scrollTo(0,n):(window.scrollTo(0,t+o*(r/300)),requestAnimationFrame(e))}))}(n)}document.querySelector('[data-role="scroll-to-anchor"]')&&function(){const e=document.querySelectorAll('[data-role="scroll-to-anchor"]');for(let o=0,c=e.length;o<c;o++)t=e[o],t.addEventListener("click",n);var t}()},function(e,t){const n=document.querySelector('[data-element="login-code"]');n&&function(){document.querySelector('[data-element="lk-layout__code-area"]').addEventListener("click",(function(n){n.preventDefault(),e[t].focus()}));const e=document.querySelectorAll('[data-element="lk-layout__code-input"]');let t=0;for(let t=0;t<e.length;t++)e[t].addEventListener("input",o);function o(){t===e.length-1?(function(){for(let t=0;t<e.length;t++)e[t].disabled=!0}(),function(){let t="";for(let n=0;n<e.length;n++)t+=e[n].value;(async function(e){const t=n.getAttribute("action"),o={code:e};fetch(t,{method:"post",body:JSON.stringify(o)}).then(e=>e.json()).then(e=>{}).catch(()=>{console.log("error")})})(t),alert("send code "+t)}()):(t+=1,e[t].focus())}}()},function(e,t){document.querySelector('[data-element="sidebar"]')&&function(){const e=document.querySelector('[data-element="office__sidebar-open"]'),t=document.querySelector('[data-element="office__burger"]'),n=document.querySelector('[data-element="sidebar__arrow-close"]'),o=document.querySelector('[data-element="sidebar__close"]'),c=document.querySelector('[data-element="sidebar__layer"]'),i=document.querySelector('[data-element="office-wrap"]');function r(){i.classList.add("office-wrap_sidebar-active")}function a(){i.classList.remove("office-wrap_sidebar-active")}e.addEventListener("click",r),t.addEventListener("click",r),n.addEventListener("click",a),o.addEventListener("click",a),c.addEventListener("click",a)}()},function(e,t){Fancybox.bind("[data-fancybox]",{});const n=document.querySelectorAll("[data-fancybox-close-current]");function o(){Fancybox.close()}n.length&&function(){for(let e=0;e<n.length;e++)n[e].addEventListener("click",o)}();document.querySelector(".office")&&Fancybox.show([{src:"#start",type:"inline"}])},function(e,t){const n=document.querySelector('[data-element="office__user"]');n&&function(){const e=document.querySelector('[data-element="office__popup"]');n.addEventListener("click",(function(t){t.stopPropagation(),e.classList.toggle("active")})),window.addEventListener("click",(function(){e.classList.remove("active")}))}()},function(e,t){const n=document.querySelectorAll('[data-element="faq-title"]');n.length&&function(){for(let t=0;t<n.length;t++)n[t].addEventListener("click",e);function e(){const e=this.closest('[data-element="faq-item"]'),t=e.querySelector('[data-element="faq-box"]');e.classList.contains("active")?(e.classList.remove("active"),t.style.maxHeight=0):(e.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}}()},function(e,t){const n=document.querySelector('[data-element="office__search"]');n&&function(){const e=document.querySelector('[data-element="office__search-submit"]'),t=document.querySelector('[data-element="office__search-textarea"]');t.addEventListener("input",(function(){t.value?e.disabled=!1:e.disabled=!0})),t.addEventListener("input",(function(){t.style.height="5px",t.style.height=t.scrollHeight+2+"px"})),n.addEventListener("submit",(function(e){e.preventDefault(),Fancybox.show([{src:"#confirm-question",type:"inline"}])}))}()}]);