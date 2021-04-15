def setup():
    size(600, 600)
    noStroke()
    colorMode(HSB)
    
def draw():
    background(255)
    translate(width / 2, height / 2)
    
    t = 0
    points1 = []
    points2 = []
    
    while t < 100:
        points1.append(harmonograph1(t))
        points2.append(harmonograph2(t))
        t += 0.01
    
    for i, p in enumerate(points1):
        stroke(0)
        if i < len(points1) - 1:
            stroke(150, 100, 255)
            line(p[0], p[1], points1[i+ 1][0], points1[i + 1][1])
            
    for i, p in enumerate(points2):
        stroke(0)
        if i < len(points2) - 1:
            stroke(50, 100, 255)
            line(p[0], p[1], points2[i+ 1][0], points2[i + 1][1])
    
def harmonograph1(t):
    a1, a2, a3, a4 = 100, 100, 100, 100 # amplitude
    f1, f2, f3, f4 = 2.01, 7, 4, 2 # frequency
    p1, p2, p3, p4 = 0, 0, 0, 0
    d1, d2, d3, d4 = 0.00085, 0.0065, 0, 0 # attenuation constant
    
    pushMatrix()
    fill(0)
    translate(-width / 2, -height / 2)
    text('BLUE:', 20, 20)
    text('amplitude: ' + str(a1) + ', ' + str(a2) + ', ' + str(a3) + ', ' + str(a4), 20, 35)
    text('frequency: ' + str(f1) + ', ' + str(f2) + ', ' + str(f3) + ', ' + str(f4), 20, 50)
    text('phase shift: ' + str(p1) + ', ' + str(p2) + ', ' + str(p3) + ', ' + str(p4), 20, 65)
    text('attenuation constant: ' + str(d1) + ', ' + str(d2) + ', ' + str(d3) + ', ' + str(d4), 20, 80)
    popMatrix()
    
    x = a1 * cos(f1 * t + p1) * exp(-d1 * t) + a3 * cos(f3 * t + p3) * exp(-d3 * t)
    y = a2 * sin(f2 * t + p2) * exp(-d2 * t) + a4 * sin(f4 * t + p4) * exp(-d4 * t)
    return [x, y]

def harmonograph2(t):
    a1, a2, a3, a4 = 100, 100, 100, 100 # amplitude
    f1, f2, f3, f4 = 2.01, 5, 5, 2 # frequency
    p1, p2, p3, p4 = PI / 2, 0, -PI / 8, 0 # phase shift
    d1, d2, d3, d4 = 0.00085, 0.0065, 0, 0 # attenuation constant
    
    pushMatrix()
    fill(0)
    translate(-width / 12, height / 3)
    text('YELLOW:', 20, 20)
    text('amplitude: ' + str(a1) + ', ' + str(a2) + ', ' + str(a3) + ', ' + str(a4), 20, 35)
    text('frequency: ' + str(f1) + ', ' + str(f2) + ', ' + str(f3) + ', ' + str(f4), 20, 50)
    text('phase shift: ' + str(p1) + ', ' + str(p2) + ', ' + str(p3) + ', ' + str(p4), 20, 65)
    text('attenuation constant: ' + str(d1) + ', ' + str(d2) + ', ' + str(d3) + ', ' + str(d4), 20, 80)
    popMatrix()
    
    x = a1 * cos(f1 * t + p1) * exp(-d1 * t) + a3 * cos(f3 * t + p3) * exp(-d3 * t)
    y = a2 * sin(f2 * t + p2) * exp(-d2 * t) + a4 * sin(f4 * t + p4) * exp(-d4 * t)
    return [x, y]