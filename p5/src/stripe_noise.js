var noiseVal = 0.02
var gridCount = 100

function setup() {
    createCanvas(700, 700)
    colorMode(HSB, 100, 100, 100)
    background(100)
}

function draw() {
    var gridSize = width / gridCount
    for (var x = 0; x < width; x += gridSize) {
        for (var y = 0; y < height; y += gridSize) {
            noStroke()
            fill(noise(noiseVal) * 100, 40, 70)
            rect(x, y, gridSize, gridSize)

            let r = random([0, 1])
            var sign = 1

            if (random == 0) {
                sign = -1
            }
            noiseVal += sign * 0.01
        }
    }
    noLoop()
}