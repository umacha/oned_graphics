var NORTH = 0;
var NORTHEAST = 1;
var EAST = 2;
var SOUTHEAST = 3;
var SOUTH = 4;
var SOUTHWEST = 5;
var WEST = 6;
var NORTHWEST = 7;

var direction;

var stepSize = 10;
var diameter = 5;

var posX;
var posY;

function setup() {
  createCanvas(700, 700);
  colorMode(HSB, 360, 100, 100, 100);
  background(255);

  posX = width / 2;
  posY = height / 2;
}

function draw() {
  direction = int(random(7));

  advance(direction);

  draw_agent()
}

function advance(direction) {
  if (direction == NORTH) {
    posY -= stepSize;
  } else if (direction == NORTHEAST) {
    posX += stepSize;
    posY -= stepSize;
  } else if (direction == EAST) {
    posX += stepSize;
  } else if (direction == SOUTHEAST) {
    posX += stepSize;
    posY += stepSize;
  } else if (direction == SOUTH) {
    posY += stepSize;
  } else if (direction == SOUTHWEST) {
    posX -= stepSize;
    posY += stepSize;
  } else if (direction == WEST) {
    posX -= stepSize;
  } else if (direction == NORTHWEST) {
    posX -= stepSize;
    posY -= stepSize;
  }

  if (posX > width) posX = 0;
  if (posX < 0) posX = width;
  if (posY < 0) posY = height;
  if (posY > height) posY = 0;
}

function draw_agent() {
    fill(0, 40);
    noStroke();
    ellipse(posX + stepSize / 2, posY + stepSize / 2, diameter, diameter);
}