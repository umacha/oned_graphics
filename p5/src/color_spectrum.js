var segmentCount = 360
var radius = 300
var segments = [6, 12, 24, 45]
var stepPointer = 0

function setup() {
    createCanvas(700, 700)
}

function draw() {
    colorMode(HSB, 360, width, height)
    background(360, 0, height)
    frameRate(2)

    var angleStep = 360 / segments[stepPointer % 4]

    beginShape(TRIANGLE_FAN)
    vertex(width / 2, height / 2)

    for (var angle = 0; angle <= 360; angle += angleStep) {
        var vx = width / 2 + cos(radians(angle)) * radius
        var vy = height / 2 + sin(radians(angle)) * radius
        vertex(vx, vy)
        fill(angle, 200, 600)
    }

    endShape()

    stepPointer += 1
}

function keyPressed() {
    switch(key) {
        case '1':
            segmentCount = 360
            break
        case '2':
            segmentCount = 45
            break
        case '3':
            segmentCount = 24
            break
        case '4':
            segmentCount = 12
            break
        case '5':
            segmentCount = 6
            break
    }
}