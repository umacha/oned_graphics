balls = []

class Ball:
    def __init__(self, x, y):
        self.xcor = x
        self.ycor = y
        self.xvel = random(-2, 2)
        self.yvel = random(-2, 2)
        self.fillColor = color(random(255), random(255), random(255))
        
    def update(self):
        self.xcor += self.xvel
        self.ycor += self.yvel
        if width < self.xcor or self.xcor < 0:
            self.xvel = -self.xvel
        if height < self.ycor or self.ycor < 0:
            self.yvel = -self.yvel
        fill(self.fillColor)
        ellipse(self.xcor, self.ycor, 10, 10)

def setup():
    size(600, 600)
    for i in range(100):
        balls.append(Ball(random(width), random(height)))
    
def draw():
    global xcor, ycor, xvel, yvel
    background(0)
    for ball in balls:
        ball.update()