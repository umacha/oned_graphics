import random

NUM_OF_CITIES = 150
cities = []

visited = []
visiting = []
pointer = 0
edges = []

def setup():
    global cities
    size(800, 800)
    frameRate(10)

    # generate random cities
    for i in range(NUM_OF_CITIES):
        city = City(random.randint(50, width - 50), random.randint(50, height - 50), i, color(255))
        cities.append(city)
        if i == 0:
            visited.append(city)
    
def draw():
    textSize(10)
    fill(255)
    
    global pointer, visited, visiting
    background(0)
    
    setColor()
    updateGraph()
            
def visitNextClosest(visited_city):            
    global visited, visiting, cities, edges
    distance = 0
    
    for city in cities:
        if city in visited:
            continue
        distance = dist(city.x, city.y, visited_city.x, visited_city.y)
        if distance < 100:
            visiting.append(city)
            edge = Edge(city, visited_city)
            edges.append(edge)
            
def setColor():
    global visited, visiting
    
    for visited_city in visited:
        visited_city.node_color = color(255, 255, 0) # yellow
        
def updateGraph():
    global cities, edges, visited, visiting, pointer
    
    for city in cities:
        city.display()
        
    for edge in edges:
        edge.display()
        
    visited += visiting
    visiting = []
    
    try:
        visitNextClosest(visited[pointer])
        pointer += 1
    except IndexError:
        noLoop()
            
class Edge:
    def __init__(self, s_city, t_city):
        self.s_city = s_city
        self.t_city = t_city
        
    def display(self):
        stroke(255)
        line(self.s_city.x, self.s_city.y, self.t_city.x, self.t_city.y)

class City:
    def __init__(self, x, y, num, node_color):
        self.x = x
        self.y = y
        self.num = num
        self.node_color = node_color
        
    def display(self):
        fill(self.node_color)
        textSize(15)
        text(self.num, self.x - 10, self.y - 10)
        ellipse(self.x, self.y, 10, 10)
        noFill()