var maxCount = 5000;
var currentCount = 1;
var x = [];
var y = [];
var r = [];

var closestDist = Number.MAX_VALUE;
var closestIndex = 0;

function setup() {
  createCanvas(700, 700);
  strokeWeight(0.5);
  colorMode(HSB, width, 100, 100);

  x[0] = width / 2;
  y[0] = height / 2;
  r[0] = 10;
}

function draw() {
  clear();
  background(255);
  noStroke();

  var newR = random(1, 7);
  var newX = random(newR, width - newR);
  var newY = random(newR, height - newR);

  closestDist = Number.MAX_VALUE;
  closestIndex = 0;

  updateClosest(newX, newY);

  addNewCircle(newR, newX, newY);

  drawCircles();

  if (maxCount <= currentCount) noLoop();
}

function updateClosest(newX, newY) {
  for (var i = 0; i < currentCount; i++) {
    var newDist = dist(newX, newY, x[i], y[i]);
    if (newDist < closestDist) {
      closestDist = newDist;
      closestIndex = i;
    }
  }
}

function addNewCircle(newR, newX, newY) {
  var angle = atan2(newY - y[closestIndex], newX - x[closestIndex]);

  x[currentCount] = x[closestIndex] + cos(angle) * (r[closestIndex] + newR);
  y[currentCount] = y[closestIndex] + sin(angle) * (r[closestIndex] + newR);
  r[currentCount] = newR;
  currentCount++;
}

function drawCircles() {
  for (var i = 0; i < currentCount; i++) {
    color = map(x[i], 0, width, 0, 255);
    fill(color, 50, 80);
    ellipse(x[i], y[i], r[i] * 2, r[i] * 2);
  }
}
