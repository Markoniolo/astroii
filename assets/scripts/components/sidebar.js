const sidebar = document.querySelector('[data-element="sidebar"]')

if (sidebar) sidebarInit()

function sidebarInit () {
  const sidebarOpen = document.querySelector('[data-element="office__sidebar-open"]')
  const sidebarBurger = document.querySelector('[data-element="office__burger"]')
  const sidebarArrowClose = document.querySelector('[data-element="sidebar__arrow-close"]')
  const sidebarClose = document.querySelector('[data-element="sidebar__close"]')
  const sidebarLayer = document.querySelector('[data-element="sidebar__layer"]')
  const officeWrap = document.querySelector('[data-element="office-wrap"]')

  sidebarOpen.addEventListener('click', openSidebar)
  sidebarBurger.addEventListener('click', openSidebar)
  sidebarArrowClose.addEventListener('click', closeSidebar)
  sidebarClose.addEventListener('click', closeSidebar)
  sidebarLayer.addEventListener('click', closeSidebar)

  function openSidebar () {
    officeWrap.classList.add('office-wrap_sidebar-active')
  }

  function closeSidebar () {
    officeWrap.classList.remove('office-wrap_sidebar-active')
  }
}
