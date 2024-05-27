const officeUser = document.querySelector('[data-element="office__user"]')

if (officeUser) officeUserInit()

function officeUserInit () {
  const officePopup = document.querySelector('[data-element="office__popup"]')

  officeUser.addEventListener('click', toggleUserPopup)

  window.addEventListener('click', closeUserPopup)

  function toggleUserPopup (e) {
    e.stopPropagation()
    officePopup.classList.toggle('active')
  }

  function closeUserPopup () {
    officePopup.classList.remove('active')
  }
}
