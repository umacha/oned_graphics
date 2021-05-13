var joinedText;
var charSet;

// a〜zそれぞれの登場回数リスト
var counters = [];

var posX;
var posY;
var tracking = 29;

function preload() {
	// 1文字ずつ入っている。配列の0番目は「T」
	joinedText = loadStrings("../data/bigbranhypothesis.txt");
}

function setup() {
	createCanvas(650, 650);
	colorMode(HSB, 360, 100, 100, 100);

	textFont("monospace", 20);
	noStroke();

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
	// background(48, 65, 97);

	posX = 60;
	posY = 30;

    textPosX = 60
    textPosY = height - 30
    graphPosX = 60
    graphPosY = textPosY - 30

    for (var i = 0; i < counters.length; i++) {
        if (i == 0) {
            graphPosX += textWidth(charSet[i]) / 2
        }

        // テキストを表示
        fill(counters[i] * 2, 50, 80)
        strokeWeight(1)
        text(charSet[i], textPosX, textPosY)

        // 棒グラフを表示
        stroke(counters[i] * 2, 50, 80)
        strokeWeight(5)
        line(graphPosX, graphPosY, graphPosX, graphPosY - counters[i])

        diffX = textWidth(charSet[i]) * 2
        textPosX += diffX
        graphPosX += diffX
    }

    for (var i = 0; i < joinedText.length; i++) {
        var upperCaseChar = joinedText.charAt(i).toUpperCase();
        var index = charSet.indexOf(upperCaseChar)
        fill(counters[index] * 2, 50, 80)
        strokeWeight(0.1)
        text(joinedText[i], posX, posY)

        posX += textWidth(joinedText[i]);
		// 横の位置が一定のラインを超えていたら、改行する
		if (posX >= width - 140 && upperCaseChar == "␣") {
			posY += 30
			posX = 60;
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