const canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.width = canvas.width = 400
ctx.height = canvas.height = 400

let tri = 'F-G-G'
let angle = 0
let tx = 30
let ty = 30

const rules = {
  F: 'F-G+F+G-F',
  G: 'GG'
}

function init() {
  for (let i = 0; i < 4; i++) {
    tri.split('').map(t => {
      if (rules[t]) {
        tri += rules[t]  
      } else {
        tri += t
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
        angle -= 120
        ctx.translate(tx, ty)
        ctx.rotate(angle * (Math.PI / 180))
        break
      case '+':
        // left
        angle += 120
        ctx.translate(tx, ty)
        ctx.rotate(-angle * (Math.PI / 180))
        break
      default:
        angle = 120
        ctx.translate(tx, ty)
        ctx.rotate(angle * (Math.PI / 180))
        ctx.lineTo(tx, ty)
        ctx.stroke()
        break
    } 
  })
}

init()
ctx.translate(10, 20)
ctx.moveTo(0, 0)
render()