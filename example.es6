import drawToCanvas from './'

let canvas1 = document.createElement('canvas')
let canvas2 = document.createElement('canvas')

// draw from canvas1 to canvas2
drawToCanvas(canvas1, canvas2) // canvasTo

// draw from canvas1 to canvas2 at different origin
drawToCanvas(canvas1, canvas2, [20, 30]) // canvasTo
