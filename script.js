const canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.width = canvas.width = window.innerWidth
ctx.height = canvas.height = window.innerHeight

let tri = ['F','-','G','-','G']
let angle = 0
let tx = 30
let ty = 30

const rules = {
  F: ['F','-','G','+','F','+','G','-','F'],
  G: ['G','G']
}

function getNext() {
  if (tri.length < max) {
    if (rules[tri[0]]) {
      tri = tri.concat(rules[tri[0]])
    } else {
      tri = tri.concat(tri[0])
    }
    plot(tri[0])
    tri.shift()
  }
  
  console.log(tri.length)
}

ctx.strokeStyle = 'rgba(20, 200, 230, 0.5)'
ctx.lineWidth = 10

let counter = 0
const max = 2000

function plot(t) {
  switch (t) {
    case '-':
      // right
      angle -= 120
      //ctx.translate(tx, ty)
      ctx.rotate(-angle * (Math.PI / 180))
      break
    case '+':
      // left
      angle += 120
      //ctx.translate(tx, ty)
      ctx.rotate(angle * (Math.PI / 180))
      break
    default:
      angle = 120
      ctx.translate(tx, ty)
      ctx.rotate(angle * (Math.PI / 180))
      ctx.lineTo(tx, ty)
      ctx.stroke()
      ctx.translate(-tx, -ty)
      break
  }
}

ctx.beginPath()

function render() {
  getNext()
  window.requestAnimationFrame(render)
  counter++
}

ctx.translate(ctx.width / 2, ctx.height / 2)
ctx.moveTo(0, 0)
render()