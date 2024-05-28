const faqTitles = document.querySelectorAll('[data-element="faq-title"]')

if (faqTitles.length) faqTitlesInit()

function faqTitlesInit () {
  for (let i = 0; i < faqTitles.length; i++) {
    faqTitles[i].addEventListener('click', toggleBox)
  }

  function toggleBox () {
    const item = this.closest('[data-element="faq-item"]')
    const content = item.querySelector('[data-element="faq-box"]')
    if (item.classList.contains('active')) {
      item.classList.remove('active')
      content.style.maxHeight = 0
    } else {
      item.classList.add('active')
      content.style.maxHeight = content.scrollHeight + "px"
    }
  }
}
