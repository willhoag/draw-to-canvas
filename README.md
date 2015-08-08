# draw-to-canvas

draw from one canvas to another with some sanity checks

[![Build Status](https://travis-ci.org/willhoag/draw-to-canvas.svg)](https://travis-ci.org/willhoag/draw-to-canvas)
[![npm version](https://badge.fury.io/js/draw-to-canvas.svg)](http://badge.fury.io/js/draw-to-canvas)

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install draw-to-canvas --save
```

## Usage

```js
var moduleName = require('draw-to-canvas');

let canvas1 = document.createElement('canvas')
let canvas2 = document.createElement('canvas')

// draw from canvas1 to canvas2
drawToCanvas(canvas1, canvas2) // canvasTo

// draw from canvas1 to canvas2 at different origin
drawToCanvas(canvas1, canvas2, [20, 30]) // canvasTo
```

## API

`drawToCanvas(from:canvas/image, to:canvas/ctx, pos:arr)`

Arguments
- from - a canvas element or image
- to - a canvas element or canvas context

## License

MIT
