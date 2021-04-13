t = 0

def setup():
    size(600, 600)
    rectMode(CENTER)
    
def draw():
    global t
    background(255)
    translate(width / 2, height / 2)
    
    rotated_clockwise(t)
    rotated_counterclockwise(t)
    t += 1
    
def rotated_square(p, s):
    pushMatrix()
    translate(p, 0)
    rotate(radians(3 * t))
    rect(0, 0, s, s)
    popMatrix()
    
def rotated_clockwise(t):
    rotate(radians(t))
    for i in range(12):
        rotated_square(50, 10)
        rotated_square(200, 30)
        rotate(radians(360 / 12))
        
def rotated_counterclockwise(t):
    rotate(radians(-2 * t))
    for i in range(12):
        rotated_square(100, 20)
        rotated_square(300, 40)
        rotate(radians(360 / 12))