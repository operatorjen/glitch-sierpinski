const canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.width = canvas.width
ctx.height = canvas.height

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
        ctx.rotate(angle * Math.PI / 180)
        break
      case '+':
        // left
        angle += 120
        ctx.rotate(angle * Math.PI / 180)
        break
      default:
        tx += length
        ty += length
        
        ctx.lineTo(tx, ty)
        ctx.stroke()
        
        tx = 0
        ty = 0
        break
    }
  })
}

init()
ctx.beginPath()
ctx.moveTo(0, 0)

render()