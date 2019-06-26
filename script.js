const canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.width = canvas.width
ctx.height = canvas.height

let tri = ['F','-','G','-','G
let incr = 1
let angle = 0
const length = 10
let tx = window.innerWidth / 2
let ty = window.innerHeight / 2

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
  
  console.log(tri)
}

function render() {
  
  switch (t) {
    case '-':
      // right
      angle -= 120
      break
    case '+':
      // left
      angle += 120
      break
    default:
      tx += length
      ty += length
  }
}

init()