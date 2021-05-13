var lineLength = 100
var centerX
var centerY
var noiseValX = Math.random()
var noiseValY = Math.random()
var noiseLength
var angle = 0
var angleDiff = 5

function setup() {
    createCanvas(700, 700)
    background(255)
    stroke(0)
    strokeWeight(0.5)
    centerX = 0
    centerY = 0
    noiseLength = width
}

function draw() {
    var diffX = 0
    var diffY = noise(noiseValY) * noiseLength
    drawLine(diffX, diffY)
    angle += angleDiff
    noiseValX += 0.02
    noiseValY += 0.02
    centerX += 1
}

function drawLine(diffX, diffY) {
    let x = sin(radians(angle)) * lineLength
    let y = cos(radians(angle)) * lineLength
    let cX = centerX + diffX
    let cY = centerY + diffY
    line(cX, cY, cX + x, cY + y)
}