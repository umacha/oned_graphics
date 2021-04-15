from math import sqrt

# range of x
xmin = -2
xmax = 2

# range of y
ymin = -2
ymax = 2

rangex = xmax - xmin
rangey = ymax - ymin

def setup():
    global xscl, yscl
    size(600, 600)
    colorMode(HSB)
    noStroke()
    xscl = float(rangex) / width
    yscl = float(rangey) / height
    
def draw():
    c = [-0.74, 0.083]
    
    for x in range(width):
        for y in range(height):
            z = [(xmin + x * xscl), (ymin + y * yscl)]
            col = julia(z, c, 100)
            if col == 100:
                fill(0, 50, 80)
            else:
                fill(3 * col, 3 * col, 200)
            rect(x, y, 1, 1)
            
    fill(0)
    text('c: ' + str(c[0]) + ', ' + str(c[1]), 20, 20)

# sum two complex numbers
def addComplex(a, b):
    return [a[0] + b[0], a[1] + b[1]]

# multiply two complex numbers
def multiComplex(a, b):
    return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]]

# pythagorean theorem
# length from coordinate origin to the point
def magnitude(z):
    return sqrt(z[0] ** 2 + z[1] ** 2)

def julia(z, c, num):
    count = 0
    z1 = z
    while count <= num:
        if magnitude(z1) > 2.0:
            return count
        z1 = addComplex(multiComplex(z1, z1), c)
        count += 1
    return num