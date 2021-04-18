def setup():
    size(600, 600)
    noStroke()
    
def draw():
    background(230, 230, 230)
    translate(50, 50)
    fill(50, 50, 50)
    squareFractal(500, 5)
    translate(500, 500)
    rotate(radians(180))
    fill(150, 150, 150)
    squareFractal(500, 5)
    
def squareFractal(sz, level):
    if level == 0:
        rect(0, 0, sz, sz)
    else:
        pushMatrix()
        squareFractal(sz / 2.0, level - 1)
        translate(sz / 2.0, 0.0)
        squareFractal(sz / 2.0, level - 1)
        translate(-sz / 2.0, sz / 2.0)
        squareFractal(sz / 2.0, level - 1)
        popMatrix()