r1 = 250.0 # radius of large circle
r2 = 175.0 # radius of small circle
r3 = 5.0 # radius of moving point

# position of large circle
x1 = 0
y1 = 0

t = 0 # time
points = [] # position history of moving point

prop = 0.9 # ratio between center of small circle and outer circumference

def setup():
    size(600, 600)
    
def draw():
    global r1, r2, x1, y1, t, points, prop
    translate(width / 2, height / 2)
    background(255)
    noFill()
    
    # draw large circle
    stroke(0)
    ellipse(x1, y1, 2 * r1, 2 * r1)
    
    # draw small circle
    x2 = (r1 - r2) * cos(t)
    y2 = (r1 - r2) * sin(t)
    ellipse(x2, y2, 2 * r2, 2 * r2)
    
    # draw moving point
    x3 = x2 + prop * (r2 - r3) * cos(-((r1 - r2) / r2) * t)
    y3 = y2 + prop * (r2 - r3) * sin(-((r1 - r2) / r2) * t)
    fill(0)
    ellipse(x3, y3, 2 * r3, 2 * r3)
    
    # add point history to list
    points = [[x3, y3]] + points[:2000]
    for i, p in enumerate(points):
        if i < len(points) - 1:
            stroke(100, 100, 100)
            line(p[0], p[1], points[i + 1][0], points[i + 1][1])
            
    t += 0.05