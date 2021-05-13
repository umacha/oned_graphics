var joinedText;
var charSet;
var gridCount = 20
var gridSize;

// a〜zそれぞれの登場回数リスト
var counters = [];

var posX;
var posY;
var tracking = 29;

var rects = []

function preload() {
	// 1文字ずつ入っている。配列の0番目は「T」
	joinedText = loadStrings("../data/bigbranhypothesis.txt");
}

function setup() {
	createCanvas(650, 650);
	colorMode(HSB, 360, 100, 100, 100);

	textFont("monospace", 20);
	noStroke();

	gridSize = width / gridCount

	joinedText = joinedText.join(joinedText, " ");

    // 文章中に登場する文字のリストを作る
	charSet = getUniqCharacters();
	for (var i = 0; i < charSet.length; i++) {
		counters[i] = 0;
	}

    // 各文字の出現回数を調べる
	countCharacters();
}

function draw() {
	background(360);

	posX = 0;
	posY = gridSize;

	// go through all characters in the text to draw them
	for (var i = 0; i < joinedText.length; i++) {
		var charWidth = textWidth(joinedText[i])
		// again, find the index of the current letter in the character set
		var upperCaseChar = joinedText.charAt(i).toUpperCase();
		var index = charSet.indexOf(upperCaseChar);
		if (index < 0) continue;

		// calculate parameters
		// 文字の出現回数が多いほど、文字が濃くなる
		var charAlpha = counters[index];

		my = 0.5
		var charSize = counters[index] * my * 3;

		var mx = 0.5
		var lineLength = charSize;
		var lineAngle = charSize * 0.5

		push();

		// 各文字の描画位置へ移動
		translate(posX, posY);

		// グリッドを描画
		fill(max(counters) - charAlpha - 30, 50, 80)
		rect(0, 0, gridSize, -gridSize)

		// テキストを描画
		fill(0)
		text(joinedText[i], gridSize / 2 - charWidth / 2, -gridSize / 2 + charWidth / 2)
		pop();

		posX += gridSize

		if (posX == width) {
			posX = 0
			posY += gridSize
		}
	}
}

function getUniqCharacters() {
	var charsArray = joinedText.toUpperCase().split("");
	var uniqCharsArray = charsArray
		.filter(function (char, index) {
            // 文字列の中で、いまいる文字が最初に出てきた
			return charsArray.indexOf(char) == index;
		})
		.sort();
	return uniqCharsArray.join("");
}

function countCharacters() {
	for (var i = 0; i < joinedText.length; i++) {
		// get one character from the text and turn it to uppercase
		var index = charSet.indexOf(joinedText.charAt(i).toUpperCase());
		// increacre the respective counter

		if (index >= 0) counters[index]++;
	}
}