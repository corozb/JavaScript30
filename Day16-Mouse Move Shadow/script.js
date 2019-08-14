const hero = document.querySelector('.hero')
const text = document.querySelector('h1')
const walk = 100 //100px

function shadow(e) {
  // const width = hero.offsetWidth
  // const height = hero.offsetHeight
  // It's similar to

  const { offsetWidth: width,
          offsetHeight: height} = hero
  let { offsetX: x, offsetY: y } = e
  
  
  // console.log(this, e.target);
  // this = class='hero'
  // e.target = h1
  
  if (this !== e.target) {
    x = x + e.target.offsetLeft 
    y = y + e.target.offsetTop
  }

  // to become pixels:
  const xWalk = (x / width * walk) - (walk / 2)
  const yWalk = (y / width * walk) - (walk / 2)

  // text.style.textShadow = `10px 10px 0 rgba(0,0,0,0.3)`
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(0,0,0,0.2),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,0,0,0.5),
    ${yWalk * -1}px ${xWalk}px 0 rgba(255,0,255,0.7)
    `
}

hero.addEventListener('mousemove', shadow)