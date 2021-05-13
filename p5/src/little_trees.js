var circles = [];

var radius = 3;
var margin = 50;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	cursor(CROSS);
	ellipseMode(RADIUS);
	rectMode(RADIUS);
}

function draw() {
	background(100, 100, 100, 200);

	// 新しく描画する円の中心座標を、ランダムで決める
	var newX = random(margin, width - margin);
	var newY = random(margin, height - margin);

	var intersection = false; // 他の円と重なっているかどうか

	for (var i = 0; i < circles.length; i++) {
		var d = dist(newX, newY, circles[i].x, circles[i].y);
		intersection = d < circles[i].r + radius;
		if (intersection) {
			break;
		}
	}

    // 円が重なっていなければ、描画する
	if (!intersection) {
		circles.push(new Circle(newX, newY, radius));
	}

    // 最も近い円と、中心点同士を線でつなぐ
	for (var i = 0; i < circles.length; i++) {
        var closestCircle;
        for (var j = 0; j < circles.length; j++) {
            var d = dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
            if (d <= circles[i].r + circles[j].r + 30) {
                closestCircle = circles[j];
                break;
            }
        }
        if (closestCircle) {
            stroke(100, 230, 100);
            strokeWeight(0.75);
            line(circles[i].x, circles[i].y, closestCircle.x, closestCircle.y);
        }

		circles[i].draw();
	}
}

function Circle(x, y, r) {
	this.x = x;
	this.y = y;
	this.r = r;

	Circle.prototype.draw = function () {
		stroke(255, 230);
		strokeWeight(1);
		ellipse(this.x, this.y, this.r);
	};
}