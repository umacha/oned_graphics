var lineCount = 20
var setCount = 8

function setup() {
    createCanvas(700, 700)
    colorMode(HSB, 100, 100, 100)
    background(50, 10, 100)
}

function draw() {
    
    // stroke(0)

    for (var i = 0; i < setCount; i++) {
        stroke(i * 10, 50, 80)

        var x = random(-width / 2 + 100, width / 2 - 100)
        var y = random(-height / 2 + 100, height / 2 - 100)
        var angle = random(1, 360)

        push()
        translate(width / 2, height / 2)
        rotate(angle)
        drawLines(x, y)
        pop()
    }

    noLoop()
}

function drawLines(x, y) {
    for (var i = 0; i < lineCount; i++) {
        line(x + 3 * i, y, x + 3 * i, y + 600)
    }
}