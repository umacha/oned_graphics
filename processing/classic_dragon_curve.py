def setup():
    size(600, 600)
    strokeWeight(2)
    
def draw():
    background(254, 247, 213)
    translate(width / 2, height / 2)
    leftDragon(5, 15)
    
def leftDragon(sz, level):
    if level == 0:
        stroke(200, 150, 200)
        line(0, 0, sz, 0)
        translate(sz, 0)
    else:
        leftDragon(sz, level - 1)
        rotate(radians(-90))
        rightDragon(sz, level - 1)
        
def rightDragon(sz, level):
    if level == 0:
        stroke(100, 150, 200)
        line(0, 0, sz, 0)
        translate(sz, 0)
    else:
        leftDragon(sz, level - 1)
        rotate(radians(90))
        rightDragon(sz, level - 1)