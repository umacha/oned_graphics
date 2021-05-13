var balls = new Array(10000);
var r = 250;
var select;
function setup() {
	createCanvas(700, 700);
	generatePoints();
	colorMode(HSB, 100, 100, 100)
}

function draw() {
	background(20, 10, 90);

	push();
	translate(width / 2, height / 2);
	noStroke();
	for (var i = 0; i < balls.length - 1; i++) {
		balls[i].drawPoint()
	}
	pop();
}

function generatePoints() {
	for (i = 0; i < balls.length; i++) {
        var s1 = r;
		var s2 = (TWO_PI / 360) * random(360);
		var s3 = (TWO_PI / 360) * random(360);
		balls[i] = new Ball(s1 * cos(s2), s1 * sin(s2), s3)
	}
}

class Ball {
	constructor(x, y, z) {
		this.x = x
		this.y = y
		this.z = z
	}

	drawPoint() {
		var x = this.x * sin(frameCount / 100 + this.z);
		var y = this.y;
		fill(50, 20 + y / 5, 80)
		ellipse(x, y, 2);
	}
}