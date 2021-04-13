from turtle import *

t = Turtle()
t.shape('classic')
t.speed(10)

def draw_star(sidelength=100):
    for i in range(5):
        t.forward(sidelength)
        t.right(135)

def draw_rotated_stars(count=90, sidelength=5):
    for i in range(count):
        t.right(5)
        draw_star(sidelength)
        sidelength += 5

draw_rotated_stars()