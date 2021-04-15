def setup():
    size(600, 600)
    noStroke()
    colorMode(HSB)
    
def draw():
    background(255)
    translate(width / 2, height / 2)
    
    t = 0
    points = []
    
    while t < 100:
        points.append(harmonograph(t))
        t += 0.01
    
    for i, p in enumerate(points):
        stroke(0)
        if i < len(points) - 1:
            stroke(i * 0.03, 120, 230) # rainbow
            line(p[0], p[1], points[i+ 1][0], points[i + 1][1])
    
def harmonograph(t):
    a1, a2, a3, a4 = 100, 100, 100, 100 # amplitude
    f1, f2, f3, f4 = 2.01, 7, 4, 2 # frequency
    # p1, p2, p3, p4 = PI / 2, 0, -PI / 8, 0 # phase shift
    p1, p2, p3, p4 = 0, 0, 0, 0
    d1, d2, d3, d4 = 0.00085, 0.0065, 0, 0 # attenuation constant
    
    pushMatrix()
    fill(0)
    translate(-width / 2, -height / 2)
    text('amplitude: ' + str(a1) + ', ' + str(a2) + ', ' + str(a3) + ', ' + str(a4), 20, 20)
    text('frequency: ' + str(f1) + ', ' + str(f2) + ', ' + str(f3) + ', ' + str(f4), 20, 35)
    text('phase shift: ' + str(p1) + ', ' + str(p2) + ', ' + str(p3) + ', ' + str(p4), 20, 50)
    text('attenuation constant: ' + str(d1) + ', ' + str(d2) + ', ' + str(d3) + ', ' + str(d4), 20, 65)
    popMatrix()
    
    x = a1 * cos(f1 * t + p1) * exp(-d1 * t) + a3 * cos(f3 * t + p3) * exp(-d3 * t)
    y = a2 * sin(f2 * t + p2) * exp(-d2 * t) + a4 * sin(f4 * t + p4) * exp(-d4 * t)
    return [x, y]