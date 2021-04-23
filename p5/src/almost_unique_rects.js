var gridCount = 20

function setup() {
    createCanvas(700, 700)
    background(255)
}

function draw() {
    var gridLength = width / gridCount

    noStroke()
    fill(224, 106, 59, 180)

    var gapRange = 5

    for (i = 0; i < gridCount; i++) {
        for (j = 0; j < gridCount; j++) {
            var x = width / gridCount * i
            var y = height / gridCount * j

            var gapULX = random(-gapRange, gapRange)
            var gapULY = random(-gapRange, gapRange)
            var gapURX = random(-gapRange, gapRange)
            var gapURY = random(-gapRange, gapRange)
            var gapBLX = random(-gapRange, gapRange)
            var gapBLY = random(-gapRange, gapRange)
            var gapBRX = random(-gapRange, gapRange)
            var gapBRY = random(-gapRange, gapRange)

            push()
            translate(x, y)

            beginShape()
            vertex(gapULX, gapULY)
            vertex(gridLength + gapURX, gapURY)
            vertex(gridLength + gapBRX, gridLength + gapBRY)
            vertex(gapBLX, gridLength + gapBLY)
            endShape(CLOSE)

            pop()
        }
    }

    noLoop()
}