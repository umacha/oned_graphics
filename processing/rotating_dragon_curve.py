RED = color(255, 0, 0)
BLACK = color(0)

def setup():
    global level, sz
    size(600, 600)
    level = 1
    sz = 40
    
def draw():
    global level
    background(254, 247, 213)
    translate(width / 2, height / 2)
    angle = map(mouseX, 0, width, 0, 2 * PI)
    stroke(RED)
    strokeWeight(3)
    pushMatrix()
    leftDragon(sz, level)
    popMatrix()
    leftDragon(sz, level - 1)
    rotate(angle)
    stroke(BLACK)
    rightDragon(sz, level - 1)
    
def leftDragon(sz, level):
    if level == 0:
        line(0, 0, sz, 0)
        translate(sz, 0)
    else:
        leftDragon(sz, level - 1)
        rotate(radians(-90))
        rightDragon(sz, level - 1)
        
def rightDragon(sz, level):
    if level == 0:
        line(0, 0, sz, 0)
        translate(sz, 0)
    else:
        leftDragon(sz, level - 1)
        rotate(radians(90))
        rightDragon(sz, level - 1)
        
def keyPressed():
    global level, sz
    if key == CODED:
        if keyCode == UP:
            level += 1
        if keyCode == DOWN:
            level -= 1
        if keyCode == LEFT:
            level -= 5
        if keyCode == RIGHT:
            level += 5