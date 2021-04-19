GRID_WIDTH = 51
GRID_HEIGHT = 51
# GRID_SZ = 18
generation = 0

def setup():
    global GRID_SZ, cell_list
    size(600, 600)
    GRID_SZ = width // GRID_WIDTH + 1
    cell_list = createCellList()
    
def draw():
    global generation, cell_list
    frameRate(10)
    cell_list = update(cell_list)
    for row in cell_list:
        for cell in row:
            cell.display()
    generation += 1
    if generation == 30:
        generation = 1
        cell_list = createCellList()

def update(cell_list):
    list = []
    for ri, row in enumerate(cell_list):
        list.append([])
        for ci, cell in enumerate(row):
            list[ri].append(Cell(ci, ri, cell.checkNeighbors()))
    return list[::]

class Cell:
    def __init__(self, col, row, state=0):
        self.col = col
        self.row = row
        self.state = state
        
    def display(self):
        if self.state == 1:
            fill(0)
        else:
            fill(255)
        rect(GRID_SZ * self.row, GRID_SZ * self.col, GRID_SZ, GRID_SZ)
        
    def checkNeighbors(self):
        if self.state == 1:
            return 1
        neighbors = 0
        for dr, dc in [[-1, 0], [1, 0], [0, -1], [0, 1]]:
            try:
                if cell_list[self.row + dr][self.col + dc].state == 1:
                    neighbors += 1
            except IndexError:
                continue
        if neighbors in [1]:
            return 1
        return 0
            
def createCellList():
    list = []
    for j in range(GRID_HEIGHT):
        list.append([])
        for i in range(GRID_WIDTH):
            list[j].append(Cell(i, j, 0))
    list[GRID_HEIGHT // 2][GRID_WIDTH // 2].state = 1
    return list    