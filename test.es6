import tape from 'tape'
import createCanvas from 'create-canvas'
import drawToCanvas from './'

let canvasFrom = null
let canvasTo = null
let ctxFrom = null
let compareCanvas = null

function drawTriangle (ctx, start=[0, 0]) {
  ctx.beginPath()
  ctx.moveTo((10 + start[0]), (10 + start[1]))
  ctx.lineTo((50 + start[0]), (10 + start[1]))
  ctx.lineTo((35 + start[0]), (35 + start[1]))
  ctx.closePath()
  ctx.stroke()
}

function test (description, fn) {
  tape(description, function (t) {

    // beforeEach
    canvasFrom = createCanvas(200, 200)
    canvasTo = createCanvas(200, 200)
    compareCanvas = createCanvas(200, 200)
    ctxFrom = canvasFrom.getContext('2d')
    drawTriangle(ctxFrom)

    // test
    fn(t)

    // afterEach
    canvasFrom = canvasTo = ctxFrom = compareCanvas = null
  })
}

test('should accurately draw from on canvas to the other', function (t) {
  drawToCanvas(canvasFrom, canvasTo, [0, 0])
  t.equal(canvasTo.toDataURL('image/png'), canvasFrom.toDataURL('image/png'))
  t.end()
})

test('should default to [0, 0]', function (t) {
  drawToCanvas(canvasFrom, canvasTo)
  t.equal(canvasTo.toDataURL('image/png'), canvasFrom.toDataURL('image/png'))
  t.end()
})

test('should draw at specified position', function (t) {
  drawToCanvas(canvasFrom, canvasTo, [10, 20])
  drawTriangle(compareCanvas.getContext('2d'), [10, 20])
  t.equal(canvasTo.toDataURL('image/png'), compareCanvas.toDataURL('image/png'))
  t.end()
})

// test('should work with different sized canvas', function (t) {
//   drawToCanvas(canvasFrom, canvasTo)
//   t.equal(canvasTo.toDataURL('image/png'), canvasFrom.toDataURL('image/png'))
//   t.end()
// })
