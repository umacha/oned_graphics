import random

NUM_OF_CITIES = 100
cities = []
NUM_OF_POPULATION = 1000
population = []

def setup():
    global cities, best_route, best_distance, first, population
    size(600, 600)

    # generate random cities
    for i in range(NUM_OF_CITIES):
        city = City(random.randint(50, width - 50), random.randint(50, height - 50), i)
        cities.append(city)
        
    # add empty route to population list
    for i in range(NUM_OF_POPULATION):
        population.append(Route())
        
    # initiate best data
    best_route = random.choice(population)
    best_distance = best_route.calcLength()
    first = best_distance
    
def draw():
    # not displayed - todo
    textSize(20)
    fill(255)
    text('Best distance: ' + str(best_distance), 50, 50)
    
    global best_route, best_distance, population
    background(0)
    
    # display current best route
    best_route.display()
    
    # sort population list by length
    population.sort(key = Route.calcLength)
    population = population[:NUM_OF_POPULATION] # cut population list. list is enlarged because of the operation below
    distance = population[0].calcLength() # total length of the first route in population list
    # update best distance if first route length is shorter than it
    if distance < best_distance:
        best_distance = distance
        best_route = population[0]
        
    # generate better routes from current population list
    for i in range(NUM_OF_POPULATION):
        parentA, parentB = random.sample(population, 2) # pick random two parents (routes) from population list
        child = parentA.crossover(parentB) # combine the parents
        population.append(child)
    
    # improve best route and append it to population
    for i in range(3, 25):
        if i < NUM_OF_CITIES:
            new = best_route.mutate(i)
            population.append(new)
            
    # improve random population and append it to population
    for i in range(3, 25):
        if i < NUM_OF_CITIES:
            new = random.choice(population)
            new = new.mutate(i)
            population.append(new)

class City:
    def __init__(self, x, y, num):
        self.x = x
        self.y = y
        self.num = num
        
    def display(self):
        fill(255)
        textSize(20)
        text(self.num, self.x - 10, self.y - 10)
        ellipse(self.x, self.y, 10, 10)
        noFill()
        
class Route:
    def __init__(self):
        self.distance = 0
        self.city_nums = random.sample(list(range(NUM_OF_CITIES)), NUM_OF_CITIES)
        
    def display(self):
        strokeWeight(3)
        stroke(255)
        beginShape()
        for i in self.city_nums:
            vertex(cities[i].x, cities[i].y)
            cities[i].display()
        endShape(CLOSE)
        
    # calculate total length of self
    def calcLength(self):
        self.distance = 0
        for i, num in enumerate(self.city_nums):
            self.distance += dist(cities[num].x, cities[num].y, cities[self.city_nums[i - 1]].x, cities[self.city_nums[i - 1]].y)
        return self.distance
    
    # swap random city nums
    def mutate(self, num):
        indices = random.sample(list(range(NUM_OF_CITIES)), num)
        child = Route()
        child.city_nums = self.city_nums[::] # hard copy
        for i in range(num - 1):
            child.city_nums[indices[i]], child.city_nums[indices[(i + 1) % num]] = child.city_nums[indices[(i + 1) % num]], child.city_nums[indices[i]]
        return child
    
    def crossover(self, partner):
        child = Route()
        index = random.randint(1, NUM_OF_CITIES - 2)
        child.city_nums = self.city_nums[:index]
        if random.random() < 0.5:
            child.city_nums = child.city_nums[::-1] # invert at 50 percent chance
        notinslice = [x for x in partner.city_nums if x not in child.city_nums] # partner cities which is not overlapped with self cities
        
        child.city_nums += notinslice
        return child