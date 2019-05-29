const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

// Asumme the size of the current screen
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Defining the brush
ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round' 
ctx.lineWidth = 100

// this help that the brush just paint when we push the mouse
let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

function draw(e) {
  if (!isDrawing) return // stop when we don't clicked
  console.log(e)

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

  ctx.beginPath() // start from
  ctx.moveTo(lastX, lastY) // go to
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke();
  
  // lastX = e.offsetX
  // lastY = e.offsetY
  [lastX, lastY] = [e.offsetX, e.offsetY]
  
  
  hue++
  if (hue >= 360) {
    hue = 0
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction 
  }
  if (direction) {
    ctx.lineWidth++ // conical appearance
  } else {
    ctx.lineWidth--
  }

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)