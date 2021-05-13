var tileCount;
var zScale;

var noiseXRange;
var noiseYRange;
var octaves;
var falloff;

var strokeColor;

var noiseVal = random();

function setup() {
	createCanvas(600, 600, WEBGL);
	colorMode(HSB, 360, 100, 100);
	cursor(CROSS);

	tileCount = 80;
	zScale = 120;

	noiseXRange = 5;
	noiseYRange = 5;
	// ノイズの性質を設定するための値。
	octaves = 1000; // オクターブ：大きいほど、ノイズの変化が細かくなる
	falloff = 0.5; // 減衰係数：大きいほど、高いオクターブの影響がより強くなる

	strokeColor = color(180, 100, 100);
}

function draw() {
	background(210, 50, 50);
	ambientLight(150);

	// ------ set view ------
	push();

	rotateX(PI / 3);

	// ノイズの性質を設定する。
	// オクターブを大きくすると、ノイズの変化が細かくなる。
	// 減衰係数を大きくすると、高いオクターブの影響がより強くなる。
	noiseDetail(octaves, falloff);
	var noiseYMax = 0;

	var tileSizeY = height / tileCount;
	var noiseStepY = noiseYRange / tileCount;

	for (var meshY = 0; meshY <= tileCount; meshY++) {
		beginShape(TRIANGLE_STRIP);
		for (var meshX = 0; meshX <= tileCount; meshX++) {
			var x = map(meshX, 0, tileCount, -width, width);
			var y = map(meshY, 0, tileCount, -height / 2, height / 2);

			var noiseX = map(meshX, 0, tileCount, 0, noiseXRange);
			var noiseY = map(meshY, 0, tileCount, 0, noiseYRange);
			var z1 = noise(noiseX, noiseY);
			var z2 = noise(noiseX, noiseY + noiseStepY);

			noiseYMax = max(noiseYMax, z1);

			var b = map(z1 * zScale, 0, 120, 0, 100)
			fill(150, 50, 100 - b)
			stroke(strokeColor);
			strokeWeight(1);

			vertex(x, y, z1 * zScale);
			vertex(x, y + tileSizeY, z2 * zScale);
		}

		endShape();
	}
	pop();
	noiseVal += 0.01;
}