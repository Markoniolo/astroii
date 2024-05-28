const officeSearch = document.querySelector('[data-element="office__search"]')

if (officeSearch) officeSearchInit()

function officeSearchInit () {
  const submit = document.querySelector('[data-element="office__search-submit"]')
  const textarea = document.querySelector('[data-element="office__search-textarea"]')

  textarea.addEventListener('input', checkSubmit)
  textarea.addEventListener('input', textareaResize)
  officeSearch.addEventListener('submit', openSubmitConfirm)

  function checkSubmit () {
    if (!textarea.value) {
      submit.disabled = true
    } else {
      submit.disabled = false
    }
  }

  function textareaResize () {
    textarea.style.height = "5px"
    textarea.style.height = (textarea.scrollHeight) + 2 + "px"
  }

  function openSubmitConfirm (e) {
    e.preventDefault()
    Fancybox.show([{ src: "#confirm-question", type: "inline" }])
  }
}
