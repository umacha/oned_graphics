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

    gridSize = width / gridCount
}
 
function draw() {
    let marginCount = margin / gridSize

    for (var y = marginCount; y < gridCount - marginCount; y += gridPadding) {
        for (var x = marginCount; x < gridCount - marginCount; x += gridPadding) {
            var hue = noise(x / noiseVal, y / noiseVal, zseed) * 250;
            fill(hue, 50, 80, 1);
            push()
            translate(x * gridSize + gridSize / 2, y * gridSize + gridSize / 2)
            ellipse(0, 0, gridSize, gridSize);
            pop()
        }
    }
    zseed += 0.005;

    noLoop()
}