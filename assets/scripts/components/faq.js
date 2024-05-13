const faqTops = document.querySelectorAll('[data-element="faq-top"]')

if (faqTops.length) faqTopsInit()

function faqTopsInit () {
  for (let i = 0; i < faqTops.length; i++) {
    faqTops[i].addEventListener('click', toggleBox)
  }

  function toggleBox () {
    const item = this.closest('.faq__item')
    const content = item.querySelector('.faq__box')
    if (item.classList.contains('faq__item_active')) {
      item.classList.remove('faq__item_active')
      content.style.maxHeight = 0
    } else {
      item.classList.add('faq__item_active')
      content.style.maxHeight = content.scrollHeight + "px"
    }
  }
}
