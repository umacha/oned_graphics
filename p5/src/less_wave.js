var numOfWave = 5
var numOfSet = 10

function setup() {
    createCanvas(700, 700)
    colorMode(HSB, 330, 100, 100, 100)
    background(60, 0, 20)
    // background(0)
}

function draw() {
    for (var i = 0; i < numOfSet; i++) {
        var noiseVal = random()
        drawWaveSet(noiseVal)
    }

    noLoop()
}

function drawWaveSet(noiseVal) {
    for (var i = 0; i < numOfWave; i++) {
        push()
        translate(0, noise(noiseVal) * height)
        var amplitude = random(10, 50)
        drawWave(amplitude);
        pop()

        noiseVal += 0.1
    }
}

function drawWave(amplitude) {
    strokeWeight(1)
    noFill()

    var hue = map(amplitude, 10, 50, 0, 100)
    stroke(190, hue, 80, 60)
    // stroke(0)

    var x = random(-100, -50)
    // var dx = random(20, 50)
    var dx = 60

    beginShape()
    while (x < width + dx * 2) {
        curveVertex(x, sin(x) * amplitude)
        x += dx
    }
    endShape()
}