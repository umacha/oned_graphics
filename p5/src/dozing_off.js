var count = 8

var colorStep = 20
var lineWeight = 0
var strokeColor = 0
var backgroundColor = 0

var drawMode = 1

var roundCount = 0

function setup() {
  createCanvas(700, 700)
}

function draw() {
  background(backgroundColor)

  var tileCountX = 10
  var tileCountY = 10
  var tileWidth = width / tileCountX
  var tileHeight = height / tileCountY

  var fakeMouseX = 250 * sin(radians(roundCount))
  var fakeMouseY = 250 * cos(radians(roundCount))

  for (var gridY = 0; gridY <= tileCountY; gridY++) {
    for (var gridX = 0; gridX <= tileCountX; gridX++) {
      var posX = tileWidth * gridX
      var posY = tileHeight * gridY

      var x1 = map(fakeMouseX, -250, 250, 0, tileWidth)
      var y1 = map(fakeMouseY, -250, 250, 0, tileHeight)
      var x2 = 0
      var y2 = 0

      push()
      translate(posX, posY)

      for (var side = 0; side < 4; side++) {
        for (var i = 0; i < count; i++) {
          switch (side) {
            case 0:
              x2 += tileWidth / count
              y2 = 0
              break
            case 1:
              x2 = tileWidth
              y2 += tileHeight / count
              break
            case 2:
              x2 -= tileWidth / count
              y2 = tileHeight
              break
            case 3:
              x2 = 0
              y2 -= tileHeight / count
              break
          }

          if (i < count / 2) {
            lineWeight += 1
            strokeColor += 60
          } else {
            lineWeight -= 1
            strokeColor -= 60
          }

          backgroundColor = 0
          stroke(strokeColor)
          strokeWeight(fakeMouseX / 100)

          // draw the line
          line(x1, y1, x2, y2)
        }
      }
      pop()
    }
  }

  roundCount += 1
}
