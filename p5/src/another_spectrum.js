function setup() {
    createCanvas(700, 700)
    strokeCap(SQUARE)
    colorMode(HSB, 50, 100, 100)
}
  
function draw() {
    background(0)
    translate(width / 2, height / 2)

    strokeWeight(1)
    var angle = TAU / 50

    var radius = 100
    draw_lines(angle, radius)

    rotate(radians(1))
    radius = 200
    draw_lines(angle, radius)

    rotate(radians(1))
    radius = 300
    draw_lines(angle, radius)

    rotate(radians(1))
    radius = 400
    draw_lines(angle, radius)

    rotate(radians(1))
    radius = 500
    draw_lines(angle, radius)
}

function draw_lines(angle, radius) {
    for (var i = 0; i <= 50; i++) {
        var x = cos(angle * i) * radius
        var y = sin(angle * i) * radius
        stroke(i, 50, 80)
        line(0, 0, x, y)
    }
}