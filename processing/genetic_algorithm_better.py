import random

NUM_OF_CITIES = 100
cities = []
random_improvements = 0
mutated_improvements = 0
NUM_OF_POPULATION = 1000
population = []

def setup():
    global cities, best_route, best_distance, first, population
    size(600, 600)

    for i in range(NUM_OF_CITIES):
        city = City(random.randint(50, width - 50), random.randint(50, height - 50), i)
        cities.append(city)
    for i in range(NUM_OF_POPULATION):
        population.append(Route())
    best_route = random.choice(population)
    best_distance = best_route.calcLength()
    first = best_distance
    
def draw():
    textSize(20)
    fill(255)
    text('Best distance: ' + str(best_distance), 50, 50)
    
    # global best_route, best_distance, random_improvements, mutated_improvements
    global best_route, best_distance, population
    background(0)
    best_route.display()
    # print(best_distance)
    
    population.sort(key = Route.calcLength)
    population = population[:NUM_OF_POPULATION]
    distance_1 = population[0].calcLength()
    if distance_1 < best_distance:
        best_distance = distance_1
        best_route = population[0]
        
    for i in range(NUM_OF_POPULATION):
        parentA, parentB = random.sample(population, 2)
        child = parentA.crossover(parentB)
        population.append(child)
    for i in range(3, 25):
        if i < NUM_OF_CITIES:
            new = best_route.mutate(i)
            population.append(new)
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
        
    def calcLength(self):
        self.distance = 0
        for i, num in enumerate(self.city_nums):
            self.distance += dist(cities[num].x, cities[num].y, cities[self.city_nums[i - 1]].x, cities[self.city_nums[i - 1]].y)
        return self.distance
    
    def mutate(self, num):
        indices = random.sample(list(range(NUM_OF_CITIES)), num)
        child = Route()
        child.city_nums = self.city_nums[::]
        for i in range(num - 1):
            child.city_nums[indices[i]], child.city_nums[indices[(i + 1) % num]] = child.city_nums[indices[(i + 1) % num]], child.city_nums[indices[i]]
        return child
    
    def crossover(self, partner):
        child = Route()
        index = random.randint(1, NUM_OF_CITIES - 2)
        child.city_nums = self.city_nums[:index]
        if random.random() < 0.5:
            child.city_nums = child.city_nums[::-1]
        notinslice = [x for x in partner.city_nums if x not in child.city_nums]
        
        child.city_nums += notinslice
        return child