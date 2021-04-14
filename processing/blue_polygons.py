def setup():
    size(600, 600)
    colorMode(HSB)
    
def draw():
    cnt = 0
    background(255)
    for i in range(1, 6):
        for j in range(1, 6):
            # fill(10 * cnt, 150, 200)
            fill(150, 10 * cnt, 200)
            locate_polygon(100 * j, 100 * i, 3 + cnt, 40)
            cnt += 1
    
def polygon(sides, rad):
    beginShape()
    for i in range(sides):
        step = radians(360 / sides)
        vertex(rad * cos(i * step), rad * sin(i * step))
    endShape(CLOSE)
    
def locate_polygon(posX, posY, sides, rad):
    pushMatrix()
    translate(posX, posY)
    polygon(sides, rad)
    popMatrix()