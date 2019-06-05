

/* ---------- Active Toggle Menú ---------*/
const nav = document.getElementById('nav-list'),
  btnBurger = document.getElementById('btnBurger'),
  container = document.getElementById('wrapper'),
  iconBurger = document.getElementById('iconBurger'),
  body = document.getElementById('body'),
  header = document.getElementById('header'),
  links = Array.from(document.querySelectorAll('.nav-link')),
  logo = document.getElementById('logo'),
  backtotop = document.getElementById('backtotop')


btnBurger.addEventListener('click', () => navActive())

window.addEventListener('scroll', () => {
  if (scrollY > 0) {
    header.classList.add('header--active')
    backtotop.classList.add('backtotop--active')


  } else {
    header.classList.remove('header--active')
    backtotop.classList.remove('backtotop--active')
  }
})

function navActive() {
  if (matchMedia('(max-width:991px)').matches) {
    nav.classList.toggle('nav-list--active')
    container.classList.toggle('wrapper--active')
    body.classList.toggle('body--active')
    iconBurger.classList.toggle('fa-times')
    btnBurger.classList.toggle('active')
    logo.classList.toggle('active')
    }
};

const closeNav = () => {
  nav.classList.remove('nav-list--active')
  container.classList.remove('wrapper--active')
  body.classList.remove('body--active')
  iconBurger.classList.remove('fa-times')
  btnBurger.classList.remove('active')
  logo.classList.remove('active')
}
container.addEventListener('click', closeNav)



if (matchMedia('(max-width:991px)').matches) {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => navActive())
  }
}
