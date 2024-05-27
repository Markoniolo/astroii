const loginCode = document.querySelector('[data-element="login-code"]')

if (loginCode) loginCodeInit()

function loginCodeInit () {
  const loginArea = document.querySelector('[data-element="lk-layout__code-area"]')
  loginArea.addEventListener('click', setCurrentFocus)

  const loginInputs = document.querySelectorAll('[data-element="lk-layout__code-input"]')

  let activeIndex = 0

  for (let i = 0; i < loginInputs.length; i++) {
    loginInputs[i].addEventListener('input', nextInput)
  }

  function nextInput () {
    if (activeIndex === loginInputs.length - 1) {
      disabledInputs()
      sendCode()
    } else {
      activeIndex += 1
      loginInputs[activeIndex].focus()
    }
  }

  function setCurrentFocus (e) {
    e.preventDefault()
    loginInputs[activeIndex].focus()
  }

  function disabledInputs () {
    for (let i = 0; i < loginInputs.length; i++) {
      loginInputs[i].disabled = true
    }
  }

  function sendCode () {
    let codeValue = ''
    for (let i = 0; i < loginInputs.length; i++) {
      codeValue += loginInputs[i].value
    }
    fetchCode(codeValue)
    alert('send code ' + codeValue)
  }

  async function fetchCode (codeValue) {
    const url = loginCode.getAttribute('action')
    const data = { code: codeValue }
    fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
    })
      .then(res => { return res.json() })
      .then(data => {})
      .catch(() => {
        console.log('error')
      })
  }
}
