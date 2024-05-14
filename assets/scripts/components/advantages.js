const advantagesInner = document.querySelector('[data-element="advantages__inner"]')
const advantagesSlider = document.querySelector('[data-element="advantages__slider"]')
const advantagesItems = document.querySelectorAll('[data-element="advantages__item"]')

if (advantagesInner && advantagesSlider && advantagesItems.length) advantagesInit()

function advantagesInit () {
  let innerSwiper, sliderSwiper

  initAdvantagesSlider()
  initAdvantagesInner()

  sliderSwiper.controller.control = innerSwiper
  innerSwiper.controller.control = sliderSwiper

  for (let i = 0; i < advantagesItems.length; i++) {
    advantagesItems[i].addEventListener('click', () => {
      innerSwiper.slideTo(i)
      sliderSwiper.slideTo(i)
    })
  }

  function initAdvantagesInner () {
    innerSwiper = new Swiper(advantagesInner, {
      speed: 500,
      spaceBetween: 20,
      initialSlide: 1,
      centeredSlides: true,
      slidesPerView: 'auto',
    })
  }

  function initAdvantagesSlider () {
    sliderSwiper = new Swiper(advantagesSlider, {
      speed: 500,
      spaceBetween: 20,
      initialSlide: 1,
      effect: 'fade'
    })
  }
}
