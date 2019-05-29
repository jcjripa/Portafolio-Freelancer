/* ---------- Active Smooth-Scroll ---------*/
const scroll = new SmoothScroll('a[href*="#"]',{
  speed: 500,
  speedAsDuration: true
})

/* ---------- Active Toggle Menú ---------*/
const nav = document.getElementById('nav-list'),
      btnBurger = document.getElementById('btnBurger'),
      container = document.getElementById('wrapper'),
      iconBurger = document.getElementById('iconBurger'),
      body = document.getElementById('body'),
      header = document.getElementById('header')

btnBurger.addEventListener('click', ()=>{
  nav.classList.toggle('nav-list--active')
  container.classList.toggle('wrapper--active')
  body.classList.toggle('body--active')
  iconBurger.classList.toggle('fa-times')
})
/* ---------- Active Menu Fixed Top Bar ---------*/
window.addEventListener('scroll', ()=>{
  if ( scrollY > 0 ){
    header.classList.add('header--active')
  }else{
    header.classList.remove('header--active')
  }
})
