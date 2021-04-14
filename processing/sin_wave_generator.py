r1 = 100
r2 = 10
t = 0
circleList = []

def setup():
    size(600, 600)
    colorMode(HSB)
    
def draw():
    global t, circleList
    
    background(255)
    translate(width / 4, height / 2)
    fill(40, 150, 255)
    stroke(0)
    ellipse(0, 0, 2 * r1, 2 * r1)
    
    # rotating point
    fill(255, 0, 0)
    y = r1 * sin(t)
    x = r1 * cos(t)
    circleList = [y] + circleList[:249]
    ellipse(x, y, r2, r2)
    
    # green point and line
    stroke(150, 150, 200)
    line(x, y, 200, y)
    fill(150, 150, 200)
    ellipse(200, y, 10, 10)
    
    # history of green point
    for i in range(len(circleList)):
        ellipse(200 + i, circleList[i], 5, 5)
    
    t += 0.05