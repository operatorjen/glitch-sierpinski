const canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.width = canvas.width = 400
ctx.height = canvas.height = 400

let tri = 'F-G-G'
let incr = 5
let angle = 0
const length = 1
let tx = 0
let ty = 0

const rules = {
  F: 'F-G+F+G-F',
  G: 'GG'
}

function init() {
  tri.split('').map(t => {
    if (rules[t]) {
      tri += rules[t]  
    }
  })
}

function render() {
  ctx.beginPath()
  tri.split('').map(t => {
    switch (t) {
      case '-':
        // right
        angle = 120
        ctx.rotate(angle * (Math.PI / 180))
        break
      case '+':
        // left
        angle = 120
        ctx.rotate(angle * (Math.PI / 180))
        break
      case 'F':
      case 'G':
        tx += incr
        ty += incr
      
        ctx.lineTo(tx, ty)
        ctx.stroke()
      
        break
      default:
        break
    }
    
    
  })

 //window.requestAnimationFrame(render)
}

init()

ctx.moveTo(0, 0)

render()