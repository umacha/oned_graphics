def setup():
    size(600, 600)
    colorMode(HSB)
    
def draw():
    background(240)
    level = 0
    for i in range(2):
        for j in range(2):
            x = 65 + j * 250
            y = 260 + i * 230
            translate(x, y)
            sierpinski(220, level)
            translate(-x, -y)
            level += 1
    
def sierpinski(sz, level):
    if level == 0:
        fill(255 - sz, 150, 200)
        noStroke()
        triangle(0, 0, sz, 0, sz / 2, -sz * sqrt(3) / 2)
    else:
        for i in range(3):
            sierpinski(sz / 2, level - 1)
            translate(sz / 2, -sz * sqrt(3) / 2)
            rotate(radians(120))