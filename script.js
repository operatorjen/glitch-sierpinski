const canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.width = canvas.width = 400
ctx.height = canvas.height = 400

let tri = 'F-G-G'
let incr = 1
let angle = 0
const length = 1
let tx = 0
let ty = 0

const rules = {
  F: 'F-G+F+G-F',
  G: 'GG'
}

function init() {
  for (let i = 0; i < 3; i++) {
    tri.split('').map(t => {
      if (rules[t]) {
        tri += rules[t]  
      }
    })
  }
}

ctx.beginPath()

function render() {
  tri.split('').map(t => {
    switch (t) {
      case '-':
        // right
        angle -= incr
        ctx.translate(tx, ty)
        ctx.rotate(angle * (Math.PI / 180))
        ctx.translate(-tx, -ty / 2)
        break
      case '+':
        // left
        angle += incr
        ctx.translate(tx / 2, ty / 2)
        ctx.rotate(angle * (Math.PI / 180))
        ctx.translate(-tx / 2, -ty / 2)
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

  window.requestAnimationFrame(render)
}

init()
render()