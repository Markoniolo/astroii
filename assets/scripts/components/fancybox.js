Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

const closeFancyboxArray = document.querySelectorAll('[data-close-fancybox]')

if (closeFancyboxArray.length) closeFancyboxArrayInit()

function closeFancyboxArrayInit () {
  for (let i = 0; i < closeFancyboxArray.length; i++) {
    closeFancyboxArray[i].addEventListener('click', closeFancybox)
  }
}

function closeFancybox () {
  const content = this.closest('.fancybox__content')
  const closeBtn = content.querySelector('.is-close-btn')
  if (closeBtn) closeBtn.click()
}
