def setup():
    size(600, 600)
    
def draw():
    background(255)
    translate(100, 100)
    snowflake(500, 5)
    
def snowflake(sz, level):
    for i in range(3):
        segment(sz, level)
        rotate(radians(120))
        
def segment(sz, level):
    if level == 0:
        line(0, 0, sz, 0)
        translate(sz, 0)
    else:
        segment(sz / 3, level - 1)
        rotate(radians(-60))
        segment(sz / 3, level - 1)
        rotate(radians(120))
        segment(sz / 3, level - 1)
        rotate(radians(-60))
        segment(sz / 3, level - 1)