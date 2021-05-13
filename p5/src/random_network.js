var points = []
var lineRadius = 30

var pointsCount = 3000
var noiseValX = 0.1
var noiseValY = 0.5

var drawCount = 0
var drawMax = 3

function setup() {
    createCanvas(700, 700)
    colorMode(HSB, 100, 100, 100)
    // background(255)
    // background(15, 40, 90)
    background(0)
}

function draw() {
    points = generatePoints()
    // var hue = map(drawCount, 0, drawMax, 0, 100)
    // stroke(hue, 50, 80)
    // stroke(0)
    stroke(50, 50, 60)
    // stroke(15, 40, 90)
    drawPoints(points)

    // drawCount += 1

    // if (drawCount == drawMax) {
    //     noLoop()
    // }

    noLoop()
}

function generatePoints() {
    var array = []
    for (i = 0; i < pointsCount; i++) {
        var x = noise(noiseValX) * width
        var y = noise(noiseValY) * height
        // var x = random(0, 1) * width
        // var y = random(0, 1) * height

        array.push(createVector(x, y))
        point(x, y)

        noiseValX += 0.01
        noiseValY += 0.01
    }
    return array
}

function drawPoints(points) {
    strokeWeight(0.1)
    // stroke(0)
    for (i = 0; i < points.length; i++) {
        // var hue = map(i, 0, points.length, 0, 100)
        // stroke(hue, 50, 80)
        for (j = 0; j < i; j++) {
            var distance = dist(points[i].x, points[i].y, points[j].x, points[j].y)
            if (distance < lineRadius) {
                line(points[i].x, points[i].y, points[j].x, points[j].y)
            }
        }
    }
}