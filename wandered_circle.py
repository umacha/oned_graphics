from turtle import *
from random import randint

t = Turtle()
t.shape('circle')
t.speed(10)

def wandered():
    while True:
        t.forward(3)
        if 100 <= t.xcor() or t.xcor() <= -100 or 100 <= t.ycor() or t.ycor() <= -100:
            t.left(randint(90, 180))

wandered()