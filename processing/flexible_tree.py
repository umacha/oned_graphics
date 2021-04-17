def setup():
    size(600, 600)
    
def draw():
    background(255)
    translate(300, 530)
    level = int(map(mouseX, 0, width, 0, 15))
    y(100, level)
    
def y(branch_length, level):
    if level == 0:
        fill(170, 230, 230)
        noStroke()
        ellipse(0, 0, 10, 10)
    if 0 < level:
        stroke(0)
        fill(0)
        line(0, 0, 0, -branch_length)
        translate(0, -branch_length)
        angle = map(mouseY, 0, height, 0, 180)
        rotate(radians(angle))
        y(0.8 * branch_length, level - 1)
        rotate(radians(-2 * angle))
        y(0.8 * branch_length, level - 1)
        rotate(radians(angle))
        translate(0, branch_length)