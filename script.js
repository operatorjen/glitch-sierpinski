const canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.width = canvas.width = 400
ctx.height = canvas.height = 400

let tri = 'F-G-G'
let incr = 6
let angle = 0
const length = 1
let tx = 100
let ty = 100

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
        angle -= 120
        ctx.translate(Math.cos(tx) * 400, Math.sin(ty) * 400)
        ctx.rotate(angle * (Math.PI / 180))
        ctx.translate(-Math.cos(tx) * 400, -Math.sin(ty) * 400)
        break
      case '+':
        // left
        angle += 120
        ctx.translate(Math.cos(tx) * 400, Math.sin(ty) * 400)
        ctx.rotate(angle * (Math.PI / 180))        
        ctx.translate(-Math.cos(tx) * 400, -Math.sin(ty) * 400)
        break
      default:
        tx += incr
        ty += incr
        ctx.lineTo(tx, ty)
        ctx.stroke()
        break
    }
  })

  //window.requestAnimationFrame(render)
}

init()
render()