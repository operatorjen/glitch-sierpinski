const canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.width = canvas.width
ctx.height = canvas.height

const tri = 'F-G-G'
let incr = 1


function init() {
  tri = tri.split('').reduce((x, y) => {
    x + y
  })
  
  console.log(tri)
}

function render() {
  
  window.requestAnimationFrame(render)
}

init()