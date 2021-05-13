var numOfWave = 3
var noiseVal = 0.02

function setup() {
    createCanvas(700, 700)
    colorMode(HSB, 100, 100, 100, 100)
    background(0, 80)
}

function draw() {
    for (var i = 0; i < numOfWave; i++) {
        push()
        translate(0, random(0, height))
        var amplitude = random(50, 100)
        drawWave(amplitude);
        pop()
    }

    noLoop()
}

function drawWave(amplitude) {
    strokeWeight(1)

    var hue = map(amplitude, 50, 100, 0, 100)
    stroke(hue, 50, 80, 60)

    var x = random(-100, 0)

    beginShape()
    while (x < width + amplitude) {
        vertex(x, sin(x) * amplitude)
        x += 1
    }
    endShape()
}