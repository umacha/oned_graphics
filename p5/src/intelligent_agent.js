var NORTH = 0;
var EAST = 1;
var SOUTH = 2;
var WEST = 3;
var direction = SOUTH;

var stepSize = 3;
var minLength = 10;
var angleCount = 7;
var angle;
var reachedBorder = false;
var reachedLine = false;

var posX;
var posY;
var posXCrossed;
var posYCrossed;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  background(360);

  angle = getRandomAngle(direction);
  posX = floor(random(width));
  posY = 0;
  posXCrossed = posX;
  posYCrossed = posY;
}

function draw() {
  var speed = int(map(mouseX, 0, width, 0, 20));
  for (var i = 0; i <= speed; i++) {
    strokeWeight(1);
    stroke(0, 0, 0);
    point(posX, posY);

    posX += cos(radians(angle)) * stepSize;
    posY += sin(radians(angle)) * stepSize;

    reachedBorder = checkIfReachedBorder();
    reachedLine = checkIfReachedLine();

    turnIfReachedBorder();
    changeAngleAndDrawLine();
  }
}

function checkIfReachedLine() {
  loadPixels();
  var currentPixel = get(floor(posX), floor(posY));
  if (
    currentPixel[0] != 255 &&
    currentPixel[1] != 255 &&
    currentPixel[2] != 255
  ) {
    return true;
  }
  return false;
}

function checkIfReachedBorder() {
  if (posX < 0 || width < posX || posY < 0 || height < posY) {
    // direction = (direction + 2) % 4
    return true;
  }
  return false;
}

function turnIfReachedBorder(reachedBorder) {
  direction = (direction + 2) % 4;
}

function changeAngleAndDrawLine() {
  if (reachedBorder || reachedLine) {
    angle = getRandomAngle(direction);

    var distance = dist(posX, posY, posXCrossed, posYCrossed);
    if (distance >= minLength) {
      strokeWeight(1);
      stroke(0, 0, 0);
      line(posX, posY, posXCrossed, posYCrossed);
    }

    posXCrossed = posX;
    posYCrossed = posY;
  }
}

function getRandomAngle(currentDirection) {
  var a = ((floor(random(-angleCount, angleCount)) + 0.5) * 90) / angleCount;
  if (currentDirection == NORTH) return a - 90;
  if (currentDirection == EAST) return a;
  if (currentDirection == SOUTH) return a + 90;
  if (currentDirection == WEST) return a + 180;
  return 0;
}
