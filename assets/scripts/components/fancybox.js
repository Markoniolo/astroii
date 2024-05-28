Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

const closeFancyboxArray = document.querySelectorAll('[data-fancybox-close-current]')

if (closeFancyboxArray.length) closeFancyboxArrayInit()

function closeFancyboxArrayInit () {
  for (let i = 0; i < closeFancyboxArray.length; i++) {
    closeFancyboxArray[i].addEventListener('click', closeFancybox)
  }
}

function closeFancybox () {
  Fancybox.close()
}

const office = document.querySelector('.office')
if (office) Fancybox.show([{ src: "#start", type: "inline" }])
