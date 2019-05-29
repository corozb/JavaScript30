function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  // Select the correspond key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  
  if(!audio) return //Stop the function from running all together
  audio.currentTime = 0 // rewind to the start. Over and over without delay
  audio.play()
  key.classList.add('playing')
}

window.addEventListener("keydown", playSound)

function removeTransition(e) {
  if(e.propertyName !== 'transform') return // skip it if it´s no a transform
  this.classList.remove('playing')
}

// To remove animation
const keys = document.querySelectorAll('.key') //select all class="key"
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
