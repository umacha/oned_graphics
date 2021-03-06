var noiseVal = 50;
var gridCount = 70
var gridSize
var gridPadding = 1.5
var zseed = 0;

var margin = 50
 
function setup() {
    createCanvas(700, 700);
    colorMode(HSB);
    background(255);
    noStroke();

    // gridSize = width / gridCount
    gridSize = 1
}
 
function draw() {
    let marginCount = margin / gridSize

    for (var y = marginCount; y < height - marginCount; y += gridPadding) {
        for (var x = marginCount; x < width - marginCount; x += gridPadding) {
            var hue = noise(x / noiseVal, y / noiseVal, zseed) * 100;
            // fill(hue, 50, 80, 1);
            fill(hue, 1);
            push()
            translate(x * gridSize + gridSize / 2, y * gridSize + gridSize / 2)
            ellipse(0, 0, gridSize, gridSize);
            pop()
        }
    }
    zseed += 0.005;

    noLoop()
}