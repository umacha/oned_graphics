var tileCountX = 50;
var tileCountY = 10;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	noStroke();
}

function draw() {
	background(0, 0, 100);

	var counter = 0;

	var tileWidth = width / (tileCountX - 5);
	var tileHeight = height / tileCountY;

	for (var gridY = 0; gridY < tileCountY; gridY++) {
		for (var gridX = 0; gridX < tileCountX; gridX++) {
			var posX = tileWidth * gridX;
			var posY = tileHeight * gridY;
			var index = counter % (tileCountX - 5);

			fill(index, 30, 70);
			rect(posX, posY, tileWidth, tileHeight);
			counter++;
		}
	}
}
