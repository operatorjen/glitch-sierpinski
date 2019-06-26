const canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.width = 400
ctx.height = 400

let tri = 'F-G-G'
let incr = 1
let angle = 0
const length = 10
let tx = 10
let ty = 10

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
  tri.split('').map(t => {
    switch (t) {
      case '-':
        // right
        angle -= 120
        ctx.rotate(angle * (Math.PI / 180))
        break
      case '+':
        // left
        angle += 120
        ctx.rotate(angle * (Math.PI / 180))
        break
      default:
        tx += incr
        ty += incr
        
        ctx.lineTo(tx, ty)
        ctx.stroke()
        
        break
    }
    
    
  })
  
 // window.requestAnimationFrame(render)
}

init()
ctx.beginPath()
ctx.moveTo(10, 10)

render()