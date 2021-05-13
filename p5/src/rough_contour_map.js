var agents = [];
var agentCount = 1000;
var noiseScale = 300;
var noiseStrength = 10;
var overlayAlpha = 10;
var agentAlpha = 90;
var strokeWidth = 0.3;
var outsideCount = 0

var setup = function () {
	createCanvas(700, 700);
    background(166, 227, 157)

	for (var i = 0; i < agentCount; i++) {
		agents[i] = new Agent();
	}
}

var draw = function () {
    stroke(255, agentAlpha)

	for (var i = 0; i < agentCount; i++) {
        agents[i].update2()
	}

    if (outsideCount == 100) {
        noLoop()
    }
}

// classの扱い。
// コンストラクタをthisで表す。
var Agent = function () {
	this.vector = createVector(
		random(width),
		random(height)
	);
	this.vectorOld = this.vector.copy();
    // 各エージェントに、ランダムなステップサイズを定義
	this.stepSize = random(1, 5);
	this.isOutside = false;
	this.angle;
};

// クラスのメソッドはprototype.メソッド名で定義する。
Agent.prototype.update = function () {
	this.vector.x += cos(this.angle) * this.stepSize;
	this.vector.y += sin(this.angle) * this.stepSize;
    // キャンバスから外側にいったかどうかのフラグ
	this.isOutside =
		this.vector.x < 0 ||
		this.vector.x > width ||
		this.vector.y < 0 ||
		this.vector.y > height;
    // もしキャンバスの外側にいたら
	if (this.isOutside) {
        outsideCount += 1
        // 改めて適当な場所に配置する
		this.vector.set(random(width), random(height));
        // 古い座標として、現在の座標をコピーする
        // このときだけ、古い座標の値を更新する
		this.vectorOld = this.vector.copy();
	}
    // エージェントごとに線の太さを設定する
	strokeWeight(strokeWidth * this.stepSize);
	line(this.vectorOld.x, this.vectorOld.y, this.vector.x, this.vector.y);
    // lineを引き終わったら、今回新しくしたベクターの値を古い方として保存する
	this.vectorOld = this.vector.copy();
	this.isOutside = false;
};

// drawmode == 1の時に発動
Agent.prototype.update1 = function () {
	// クラスの変数が更新される・・？
    // noiseの引数について、xとyでは変化量が大きすぎるため、noiseScaleという値で割っている
    // noiseScale = 300, noiseStrength = 10
    this.angle =
		noise(this.vector.x / noiseScale, this.vector.y / noiseScale) *
		noiseStrength;
    this.update();
};

// drawmode == 2の時に発動
Agent.prototype.update2 = function () {
	this.angle =
		noise(this.vector.x / noiseScale, this.vector.y / noiseScale) * 24;
	this.angle = (this.angle - floor(this.angle)) * noiseStrength;
	this.update();
};
