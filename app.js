// movement to happen
const card = document.querySelector('.card')
const container = document.querySelector('.container')
// Items
const title = document.querySelector('.title')
const car = document.querySelector('.car img')
const reserve = document.querySelector('.reserve-button')
const info = document.querySelector('.info h3')
const features = document.querySelector('.features')

// Moving Animation Event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
// Animate in
container.addEventListener('mouseenter', e => {
  card.style.transition = 'none'
  // Popup
  title.style.transform = 'translateZ(150px)'
  car.style.transform = 'translateZ(150px)'
  reserve.style.transform = 'translateZ(150px)'
  info.style.transform = 'translateZ(150px)'
  features.style.transform = 'translateZ(150px)'
})
// Animate out
container.addEventListener('mouseleave', () => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  // back to flat
  title.style.transform = 'translateZ(0px)'
  car.style.transform = 'translateZ(0px)'
  reserve.style.transform = 'translateZ(0px)'
  info.style.transform = 'translateZ(0px)'
  features.style.transform = 'translateZ(0px)'
})