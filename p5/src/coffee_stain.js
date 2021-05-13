var points = []
var circleRadius = 200
var noiseValX = 0.1
var noiseValY = 0.5
var noiseMax = 20
var lineRadius = 50

function setup() {
    createCanvas(700, 700)
    colorMode(HSB, 255, 100, 100)
    background(25, 5, 100)
}

function draw() {
    translate(random() * (width - 200), random() * (height - 200))

    stroke(30, 80, 20)

    points = calcPoints()
    drawPoints(points)

    noLoop()
}

function calcPoints() {
    var points = []

    for (angle = 0; angle < 360; angle += 1) {
        var x = sin(radians(angle)) * circleRadius
        var y = cos(radians(angle)) * circleRadius
        points.push(createVector(x, y))

        var noiseX = noise(noiseValX) * noiseMax
        var noiseY = noise(noiseValY) * noiseMax
        
        if (0 <= angle && angle < 90) {
            points.push(createVector(x + noiseX, y + noiseY))
        } else if (90 <= angle && angle < 180) {
            points.push(createVector(x + noiseX, y - noiseY))
        } else if (180 <= angle && angle < 270) {
            points.push(createVector(x - noiseX, y - noiseY))
        } else {
            points.push(createVector(x - noiseX, y + noiseY))
        }

        // points.push(createVector(x + noiseX, y + noiseY))

        noiseValX += 0.1
        noiseValY += 0.1
    }

    return points
}

function drawPoints(points) {
    strokeWeight(0.1)

    // beginShape()
    // for (i = 0; i < points.length; i += 2) {
    //     curveVertex(points[i].x, points[i].y)
    // }
    // endShape(CLOSE)

    // beginShape()
    // for (i = 1; i < points.length; i += 2) {
    //     curveVertex(points[i].x, points[i].y)
    // }
    // endShape(CLOSE)
    
    // beginShape()
    for (i = 0; i < points.length; i++) {
        for (j = 0; j < i; j++) {
            var distance = dist(points[i].x, points[i].y, points[j].x, points[j].y)
            if (distance < lineRadius) {
                line(points[i].x, points[i].y, points[j].x, points[j].y)
                // curveVertex(points[i].x, points[i].y)
                // curveVertex(points[j].x, points[j].y)
            }
        }
    }
    // endShape(CLOSE)
}