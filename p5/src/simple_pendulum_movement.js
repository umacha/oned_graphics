var shape;

var joints = 7;
var lineLength = 80;
var speedRelation = 2;
// var joints = 15;
// var lineLength = 40;
// var speedRelation = 2;
var center;
var pendulumPath;
var angle = 0;
var maxAngle = 360;
var speed;

var showPendulum = true;
var showPendulumPath = true;

var noiseValX = Math.random()
var noiseValY = Math.random()

function setup() {
	createCanvas(700, 700);
	colorMode(HSB, 360, 100, 100, 100);
	noFill();
	strokeWeight(1);

	center = createVector(width / 2, height / 2);

	startDrawing();
}

function startDrawing() {
	pendulumPath = [];
    pendulumPathReverse = []
	// new empty array for each joint
	for (var i = 0; i < joints; i++) {
		pendulumPath.push([]);
        pendulumPathReverse.push([])
	}

	angle = 0;
	speed = 8 / pow(1.75, joints - 1) / pow(2, speedRelation - 1);
}

function draw() {
	// background(0, 0, 100);
    background(255)

	angle += speed;

	// each frame, create new positions for each joint
	if (angle <= maxAngle + speed) {
		// start at the center position
        // posは、各ジョイントの回転の中心となるポイント
        // 最初のジョイントは中心をベースに回るが、次のジョイントは、最初のジョイントの先っぽをベースに回るため、ジョイントごとにposを切り替えられるようにしておく
		// var pos = center.copy();
		var pos = createVector(noise(noiseValX) * width, noise(noiseValY) * height)

		for (var i = 0; i < joints; i++) {
            // i番目のジョイントの角度を決める（外側ほど角度が大きくなるようにする）
			var a = angle * pow(speedRelation, i);
            // 奇数番目のジョイントなら、角度を反転する（逆方向に回るようにする）
			if (i % 2 == 1) a = -a;
            // 角度aだけ回転した、次のポジションを計算する
			var nextPos = p5.Vector.fromAngle(radians(a));
            // setMagは、ベクトルが指定した長さになるように、座標を設定する
            // この時点では、キャンバスの原点（左上）を根元としたベクトルになる
			nextPos.setMag(((joints - i) / joints) * lineLength);
            // キャンバスの中心を根元にしたいため、キャンバスの中心のベクトルを加算して移動させる
			nextPos.add(pos);

            // showPendulumフラグがonなら、ジョイントと接続線を丸と線で表示する
			if (showPendulum) {
				noStroke();
				fill(0, 10);
				ellipse(pos.x, pos.y, 4, 4);
				noFill();
				stroke(0, 10);
				line(pos.x, pos.y, nextPos.x, nextPos.y);
			}

            // 振り子のポジションリストに、次のポジションを追加する
			pendulumPath[i].push(nextPos);
            // 次のジョイントの、回転の中心位置を更新する
			pos = nextPos;
		}
	}

	// showPendulumPathフラグがonなら、ジョイントが通った軌跡を可視化する
	if (showPendulumPath) {
		// strokeWeight(1.6);
        // strokeWeight(0.5)
        // ジョイントごとに、全てのパスをvertexで接続する
		for (var i = 0; i < pendulumPath.length; i++) {
			var path = pendulumPath[i];

			beginShape();
			// var hue = map(i, 0, joints, 120, 360);
			// stroke(hue, 80, 60, 50);
            var hue = map(i, 0, joints, 1, 100);
            strokeWeight(0.4 * i)
			stroke(200, hue, 60, 50);
            // stroke(0)
			for (var j = 0; j < path.length; j++) {
				vertex(path[j].x, path[j].y);
			}
			endShape();
		}
	}

	noiseValX += 0.05
	noiseValY += 0.05
}

// function keyPressed() {
// 	if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");

// 	if (keyCode == DELETE || keyCode == BACKSPACE) startDrawing();

// 	if (keyCode == UP_ARROW) {
// 		lineLength += 2;
// 		startDrawing();
// 	}
// 	if (keyCode == DOWN_ARROW) {
// 		lineLength -= 2;
// 		startDrawing();
// 	}
// 	if (keyCode == LEFT_ARROW) {
// 		joints--;
// 		if (joints < 1) joints = 1;
// 		startDrawing();
// 	}
// 	if (keyCode == RIGHT_ARROW) {
// 		joints++;
// 		if (joints > 10) joints = 10;
// 		startDrawing();
// 	}

// 	if (key == "+") {
// 		speedRelation += 0.5;
// 		if (speedRelation > 5) speedRelation = 5;
// 		startDrawing();
// 	}
// 	if (key == "-") {
// 		speedRelation -= 0.5;
// 		if (speedRelation < 2) speedRelation = 2;
// 		startDrawing();
// 	}

// 	if (key == "1") showPendulum = !showPendulum;
// 	if (key == "2") showPendulumPath = !showPendulumPath;
// }
