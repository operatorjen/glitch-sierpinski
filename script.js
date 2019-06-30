const canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.width = canvas.width = window.innerWidth
ctx.height = canvas.height = window.innerHeight

let tri = ['F','-','G','-','G']
let angle = 0
let tx = 10
let ty = 10

const rules = {
  F: ['F','-','G','+','F','+','G','-','F'],
  G: ['G','G']
}

let switched = false
const max = 1000
let counter = 0

function getNext() {
  if (counter < max) {
    if (tri.length) {
      if (rules[tri[0]]) {
        tri = tri.concat(rules[tri[0]])
      } else {
        tri = tri.concat(tri[0])
      }
      plot(tri[0])
      tri.shift()
    }

    counter++
  }
}

ctx.strokeStyle = 'rgba(20, 200, 230, 0.9)'
ctx.lineWidth = 3

function plot(t) {
  switch (t) {
    case 'F':
    case 'G':
      angle = 120
      ctx.translate(tx, ty)
      ctx.rotate(angle * (Math.PI / 180))
      ctx.lineTo(tx, ty)
      ctx.stroke()
      //ctx.translate(-tx, -ty)
      break
    case '-':
      // right
      angle -= 120
      //ctx.translate(tx, ty)
      ctx.rotate(angle * (Math.PI / 180))
      break
    case '+':
      // left
      angle += 120
      //ctx.translate(tx, ty)
      ctx.rotate(angle * (Math.PI / 180))
      break
  }
}

ctx.beginPath()

function render() {
  getNext()
  window.requestAnimationFrame(render)
}

ctx.translate(ctx.width / 2, ctx.height / 2)
ctx.moveTo(0, 0)
render()