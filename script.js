const canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.width = canvas.width = 400
ctx.height = canvas.height = 400

let tri = 'F-G-G'
let incr = 10
let angle = 0
let tx = 150
let ty = 150

const rules = {
  F: 'F-G+F+G-F',
  G: 'GG'
}

function init() {
  for (let i = 0; i < 2; i++) {
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
       // ctx.translate(Math.cos(angle), Math.sin(angle))
        ctx.rotate(angle * (Math.PI / 180))
        break
      case '+':
        // left
        angle += 120
        
        ctx.rotate(angle * (Math.PI / 180))        
        break
      default:
        tx = incr
        ty = incr
        ctx.translate(tx, ty)
        ctx.lineTo(tx, ty)
        ctx.stroke()
        tx = 150
        ty = 150
        break
    }
  })
  console.log(tri)
  //window.requestAnimationFrame(render)
}

init()
render()