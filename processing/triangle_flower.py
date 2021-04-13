def setup():
    size(600, 600)
    rectMode(CENTER)
    
t = 0
    
def draw():
    global t
    background(255)
    translate(width / 2, height / 2)
    
    for i in range(90):
        rotate(radians(360/90))
        draw_triangle_circle(200, 70, i)
        
    t += 0.5
    
def draw_triangle_circle(posX, length, i):
    global t
    pushMatrix()
    translate(posX, 0)
    rotate(radians(t + 3 * i * 360 / 90))
    draw_triangle(length)
    popMatrix()
    
def draw_triangle(length):
    noFill()
    triangle(0, -length, -length * sqrt(3) / 2, length / 2, length * sqrt(3) / 2, length / 2)