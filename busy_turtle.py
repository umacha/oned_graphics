from turtle import *

t = Turtle()
t.shape('turtle')
t.speed(10)

def draw_square(sidelength=100):
    for i in range(4):
        t.forward(sidelength)
        t.right(90)

def draw_squares(count=90):
    for i in range(count):
        t.right(5)
        draw_square()

draw_squares()