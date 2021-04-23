var gridCount = 12

function setup() {
    createCanvas(700, 700)
    background(209, 241, 204)
}

function draw() {
    var gridLength = width / gridCount

    noStroke()
    fill(0, 159, 140, 120)

    for (i = 0; i < gridCount; i++) {
        for (j = 0; j < gridCount; j++) {
            var x = width / gridCount * i + gridLength / 2
            var y = height / gridCount * j + gridLength / 2

            var gapX = random(-20, 20)
            var gapY = random(-30, 30)

            ellipse(x + gapX, y + gapY, gridLength / 2 + 20, gridLength / 2 + 20)
        }
    }

    noLoop()
}