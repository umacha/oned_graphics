var loopPoints = []
var circlePoints = []
var lineRadius = 50
var ellipseRadius = 35

function setup() {
    createCanvas(700, 700)
    colorMode(HSB, 100, 100, 100)
    background(20, 50, 80)
}

function draw() {
    var centerX = width / 2
    var centerY = height / 2
    translate(centerX, centerY)

    loopPoints = calculateLoopPoints()
    circlePoints = calculateCirclePoints()
    drawPoints(loopPoints)
    rotate(radians(60))
    drawPoints(loopPoints)
    rotate(radians(60))
    drawPoints(loopPoints)
    drawPoints(circlePoints)

    noLoop()
}

function calculateLoopPoints() {
    var minRadius = 70
    var maxRadius = 300
    var array = []

    for (angle = 0; angle < 360; angle += 5) {
        var x = sin(radians(angle)) * minRadius
        var y = Math.sqrt(maxRadius ** 2 * (minRadius ** 2 - x ** 2) / minRadius ** 2)
        array.push(createVector(x, y))
        array.push(createVector(x, -y))
        var x = sin(radians(angle)) * (minRadius + 10)
        var y = Math.sqrt((maxRadius + 10) ** 2 * ((minRadius + 10) ** 2 - x ** 2) / (minRadius + 10) ** 2)
        array.push(createVector(x, y))
        array.push(createVector(x, -y))
    }

    return array
}

function calculateCirclePoints() {
    var array = []
    for (angle = 0; angle < 360; angle += 15) {
        var x = sin(radians(angle)) * ellipseRadius
        var y = cos(radians(angle)) * ellipseRadius
        array.push(createVector(x, y))
        var x = sin(radians(angle)) * (ellipseRadius + 10)
        var y = cos(radians(angle)) * (ellipseRadius + 10)
        array.push(createVector(x, y))
    }
    return array
}

function drawPoints(points) {
    strokeWeight(0.05)
    for (i = 0; i < points.length; i++) {
        for (j = 0; j < i; j++) {
            var distance = dist(points[i].x, points[i].y, points[j].x, points[j].y)
            if (distance < lineRadius) {
                line(points[i].x, points[i].y, points[j].x, points[j].y)
            }
        }
    }
}