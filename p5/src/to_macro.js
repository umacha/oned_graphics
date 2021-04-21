var stepX = 800
var stepY = 400

function setup() {
    createCanvas(800, 400)
    noStroke()
    colorMode(HSB, width, height, 100)
}

function draw() {
    stepX -= 2
    stepY -= 1

    for (var gridY = 0; gridY < height; gridY += stepY) {
        for (var gridX = 0; gridX < width; gridX += stepX) {
            fill(gridX, height - gridY, 70)
            rect(gridX, gridY, stepX, stepY)
        }
    }
}