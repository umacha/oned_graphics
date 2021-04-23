var res_max = 100
var res_count = res_max

function setup() {
    createCanvas(700, 700)
    strokeCap(SQUARE)
    colorMode(HSB, 50, 100, 100)
    background(255)
}
  
function draw() {
    translate(width / 2, height / 2)

    stroke(random(50), 50, 80)
    strokeWeight(1)
    noFill()

    var resolution = random(30, 50)
    var angle = TAU / resolution
    var radius = 3 * (res_max - res_count)
    draw_poly_circle(angle, radius, resolution)

    res_count -= 1
    if (res_count < 0) {
        noLoop()
    }
}

function draw_poly_circle(angle, radius, resolution) {
    beginShape()
    for (var i = 0; i <= resolution; i++) {
        var x = cos(angle * i) * radius
        var y = sin(angle * i) * radius
        vertex(x, y)
    }
    endShape()
}