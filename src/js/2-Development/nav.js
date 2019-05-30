/* ---------- Active Smooth-Scroll ---------*/
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true
})

/* ---------- Active Toggle Menú ---------*/
const nav = document.getElementById('nav-list'),
  btnBurger = document.getElementById('btnBurger'),
  container = document.getElementById('wrapper'),
  iconBurger = document.getElementById('iconBurger'),
  body = document.getElementById('body'),
  header = document.getElementById('header'),
  links = Array.from(document.querySelectorAll('.nav-link'))

window.addEventListener('scroll', () => {
  if (scrollY > 0) {
    header.classList.add('header--active')
  } else {
    header.classList.remove('header--active')
  }
})

function navActive() {
  if (matchMedia('(max-width:991px)').matches) {
    nav.classList.toggle('nav-list--active')
    container.classList.toggle('wrapper--active')
    body.classList.toggle('body--active')
    iconBurger.classList.toggle('fa-times')
  }
};

const closeNav = () => {
  nav.classList.remove('nav-list--active')
  container.classList.remove('wrapper--active')
  body.classList.remove('body--active')
  iconBurger.classList.remove('fa-times')
}
container.addEventListener('click', closeNav)

btnBurger.addEventListener('click', () => {
  navActive()
  btnBurger.classList.toggle('active')
});

if (matchMedia('(max-width:991px)').matches) {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      navActive()
      btnBurger.classList.toggle('active')
    })
  }
}

/* ---------- Active Header Fixed Top Bar ---------*/