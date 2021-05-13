var count = 500;
var tileCountX = 3;
var tileCountY = 4;

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
}

function draw() {
	clear();
	noFill();
    background(0)

	var tileWidth = width / tileCountX;
	var tileHeight = height / tileCountY;

	for (var gridY = 0; gridY <= tileCountY; gridY++) {
		for (var gridX = 0; gridX <= tileCountX; gridX++) {
			var posX = tileWidth * gridX + tileWidth / 2;
			var posY = tileHeight * gridY + tileHeight / 2;

			push();
            // グリッドの中心に移動
			translate(posX, posY);

            noStroke();
            for (var i = 0; i < count; i++) {
                var gradient = lerpColor(
                    color(0, 0),
                    color(166, 141, 5),
                    i / count
                );
                fill(gradient, (i / count) * 200);
                ellipse(0, 0, tileWidth, tileHeight);
                scale(1 - 3 / count);
                rotate(300);
            }

			pop();
		}
	}
}