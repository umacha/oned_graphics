from random import choice

WHITE = color(255)
BROWN = color(102, 51, 0)
RED = color(255, 0, 0)
GREEN = color(0, 102, 0)
YELLOW = color(255, 255, 0)
PURPLE = color(102, 0, 204)
colors = [WHITE, RED, YELLOW, PURPLE]

class Sheep:
    def __init__(self, x, y, fill_color):
        self.x = x
        self.y = y
        self.radius = 10
        self.energy = 20
        self.fill_color = fill_color
        
    def update(self):
        move = 5
        if self.fill_color == PURPLE:
            move = 7
        self.energy -= 1
        if self.energy < 0:
            sheeps.remove(self)
        if 50 < self.energy:
            self.energy -= 30
            sheeps.append(Sheep(self.x, self.y, self.fill_color))
        self.x += random(-move, move)
        self.y += random(-move, move)
        
        # connect edges
        if width < self.x:
            self.x %= width
        if height < self.y:
            self.y %= height
        if self.x < 0:
            self.x += width
        if self.y < 0:
            self.y += height
            
        xscl = int(self.x / patch_size)
        yscl = int(self.y / patch_size)
        grass = grasses[xscl * rows_of_grass + yscl]
        if not grass.eaten:
            self.energy += grass.energy
            grass.eaten = True
        
        fill(self.fill_color)
        ellipse(self.x, self.y, self.radius, self.radius)
        
class Grass:
    def __init__(self, x, y, side_length):
        self.x = x
        self.y = y
        self.energy = 4
        self.eaten = False
        self.side_length = side_length
        
    def update(self):
        if self.eaten:
            if random(100) < 5:
                self.eaten = False
            else:
                fill(BROWN)
        else:
            fill(GREEN)
        rect(self.x, self.y, self.side_length, self.side_length)
        
sheeps = []
grasses = []
patch_size = 10
        
def setup():
    global patch_size, rows_of_grass
    size(600, 600)
    rows_of_grass = height / patch_size
    
    # generate sheeps
    for i in range(20):
        sheeps.append(Sheep(random(width), random(height), choice(colors)))
        
    # generate grasses
    for x in range(0, width, patch_size):
        for y in range(0, height, patch_size):
            grasses.append(Grass(x, y, patch_size))
    
def draw():
    background(255)
    
    # draw grasses
    for grass in grasses:
        grass.update()
    
    # draw sheeps
    for sheep in sheeps:
        sheep.update()