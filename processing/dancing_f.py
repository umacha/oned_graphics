xmin = -10
xmax = 10

ymin = -10
ymax = 10

rangex = xmax - xmin
rangey = ymax - ymin

def setup():
    global xscl, yscl
    size(600, 600)
    xscl = width / rangex
    yscl = -height / rangey
    noFill()
    
def draw():
    global xscl, yscl
    background(100, 150, 200)
    translate(width / 2 - 40, height / 2 + 50)
    # grid(xscl, yscl)
    
    rot1 = map(mouseX, 0, width, 0, TWO_PI)
    tilt1 = map(mouseY, 0, height, 0, PI / 2)
    rot2 = map(mouseX, 0, width, 0, TWO_PI)
    tilt2 = map(mouseY, 0, height * 2, 0, -PI)
    rot3 = map(mouseX, 0, width, 0, TWO_PI * 1.5)
    tilt3 = map(mouseY, 0, height * 2, 0, -PI)
    
    # draw F character on the grid
    # matrix = [[0, 0], [1, 0], [1, 2], [2, 2], [2, 3], [1, 3], [1, 4], [3, 4], [3, 5], [0, 5]]
    matrix = [[0, 0, 0], [1, 0, 0], [1, 2, 0], [2, 2, 0], [2, 3, 0], [1, 3, 0], [1, 4, 0], [3, 4, 0], [3, 5, 0], [0, 5, 0], 
              [0, 0, 1], [1, 0, 1], [1, 2, 1], [2, 2, 1], [2, 3, 1], [1, 3, 1], [1, 4, 1], [3, 4, 1], [3, 5, 1], [0, 5, 1]]
    edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 0],
             [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 18], [18, 19], [19, 10],
             [0, 10], [1, 11], [2, 12], [3, 13], [4, 14], [5, 15], [6, 16], [7, 17], [8, 18], [9, 19]]
    transformation_matrix = [[-1, 1], [1, 1]]
    new_matrix1 = transpose(multiMatrix(rotation(rot1, tilt1), transpose(matrix)))
    new_matrix2 = transpose(multiMatrix(rotation(rot2, tilt2), transpose(matrix)))
    new_matrix3 = transpose(multiMatrix(rotation(rot3, tilt3), transpose(matrix)))
    # new_matrix = transpose(multiMatrix(transformation_matrix, transpose(matrix))) # rotate counterclockwise
    strokeWeight(2)
    # stroke(0)
    # connectPoints(matrix)
    stroke(255, 0, 0)
    connectPoints(new_matrix1, edges)
    pushMatrix()
    translate(-width / 4, 0)
    connectPoints(new_matrix2, edges)
    popMatrix()
    pushMatrix()
    translate(width / 4, 0)
    connectPoints(new_matrix3, edges)
    popMatrix()
    
def transpose(matrix):
    result = []
    m = len(matrix)
    n = len(matrix[0])
    for i in range(n):
        result.append([])
        for j in range(m):
            result[i].append(matrix[j][i])
    return result

def rotation(rot, tilt):
    matrixY = [[cos(rot), 0.0, sin(rot)],
               [0.0, 1.0, 0.0],
               [-sin(rot), 0.0, cos(rot)]]
    matrixX = [[1.0, 0.0, 0.0],
               [0.0, cos(tilt), sin(tilt)],
               [0.0, -sin(tilt), cos(tilt)]]
    return multiMatrix(matrixY, matrixX)
    
# def connectPoints(matrix):
#     beginShape()
#     for pt in matrix:
#         vertex(pt[0] * xscl, pt[1] * yscl)
#     endShape(CLOSE)

def connectPoints(points, edges):
    for e in edges:
        line(points[e[0]][0] * xscl, points[e[0]][1] * yscl, points[e[1]][0] * xscl, points[e[1]][1] * yscl)
    
def grid(xscl, yscl):
    strokeWeight(1)
    stroke(0, 255, 255)
    for i in range(xmin, xmax + 1):
        line(i * xscl, ymin * yscl, i * xscl, ymax * yscl)
    for i in range(ymin, ymax + 1):
        line(xmin * xscl, i * yscl, xmax * xscl, i * yscl)
    stroke(0)
    line(0, ymin * yscl, 0, ymax * yscl)
    line(xmin * xscl, 0, xmax * xscl, 0)

def multiMatrix(a, b):
    m = len(a)
    n = len(b[0])
    matrix = []
    
    # row index in a
    for i in range(m):
        row = []
        # column index in b
        for j in range(n):
            sum1 = 0
            # deal with all elements in the current row/column
            for k in range(len(b)):
                sum1 += a[i][k] * b[k][j]
            row.append(sum1)
        matrix.append(row)
    return matrix