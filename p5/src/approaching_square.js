pointX = 0
pointY = 0

function setup() {
  createCanvas(720, 720)
  colorMode(HSB, 360, 100, 100)
  rectMode(CENTER)
  noStroke()
  frameRate(30)
}

function draw() {
  background(pointX / 2, 50, 80)
  fill(360 - pointY / 2, 50, 80)
  rect(width / 2, height / 2, pointX + 1, pointX + 1)

  pointX += 1
  pointY += 1
}