var formResolution = 15;
var stepSize = 2;
var distortionFactor = 1;
var initRadius = 150;
var centerX;
var centerY;
var x = [];
var y = [];

var fakeMouseX = 0;
var fakeMouseY = 0;
var constantX = 0;

var noiseValX = Math.random();
var noiseValY = Math.random();

function setup() {
  createCanvas(700, 700);

  centerX = width / 2;
  centerY = height / 2;
  var angle = radians(360 / formResolution);
  for (var i = 0; i < formResolution; i++) {
    x.push(cos(angle * i) * initRadius);
    y.push(sin(angle * i) * initRadius);
  }

  stroke(255, 50);
  strokeWeight(0.75);
  background(0);
  noFill();
}

function draw() {
  fakeMouseX = noise(noiseValX) * width;
  fakeMouseY = noise(noiseValY) * height;
  centerX = constantX;
  centerY = fakeMouseY;

  for (var i = 0; i < formResolution; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize);
    if (10 < x[i]) x[i] - stepSize;
    if (10 < y[i]) y[i] - stepSize;
    if (x[i] < 0) x[i] + stepSize;
    if (y[i] < 0) y[i] + stepSize;
  }

  beginShape();
  curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);

  for (var i = 0; i < formResolution; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }
  curveVertex(x[0] + centerX, y[0] + centerY);

  curveVertex(x[1] + centerX, y[1] + centerY);
  endShape();

  noiseValX += 0.005;
  noiseValY += 0.005;

  constantX += 1;
}
