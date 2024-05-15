const burger = document.querySelector('[data-element="header__burger"]')
const header = document.querySelector('.header')

if (burger) burgerInit()

function burgerInit () {
  burger.addEventListener('click', toggleMenu)
  window.addEventListener('click', closeMenu)

  function toggleMenu (e) {
    e.stopPropagation()
    header.classList.toggle('header_mobile-active')
  }

  function closeMenu () {
    header.classList.remove('header_mobile-active')
  }
}
