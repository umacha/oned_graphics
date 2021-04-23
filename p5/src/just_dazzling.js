var gridCount = 20

function setup() {
    createCanvas(700, 700)
    background(255)
    strokeCap(SQUARE)
}

function draw() {
    var gridLength = width / gridCount

    for (i = 0; i < gridCount; i++) {
        for (j = 0; j < gridCount; j++) {
            var x = width / gridCount * i
            var y = height / gridCount * j

            r_direction = int(random(0, 2))
            r_style = int(random(0, 2))

            if (r_style == 0) {
                stroke(249, 219, 87, 200)
                strokeWeight(50)
            } else {
                stroke(149, 223, 214, 100)
                strokeWeight(50)
            }

            line(x + 0, y + gridLength * r_direction, x + gridLength * 1, y + gridLength * (1 - r_direction))
        }
    }

    noLoop()
}