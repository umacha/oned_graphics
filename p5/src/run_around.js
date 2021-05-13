// An array with nodes
var nodes = [];

var nodeCount = 100;

function setup() {
	createCanvas(700, 700);
	noStroke();
	background(255);
    colorMode(HSB, 100, 100, 100, 255)

	nodes = createNodes();
}

function draw() {
	fill(0, 5);
	rect(0, 0, width, height);

	for (var i = 0; i < nodes.length; i++) {
        fill(i, 50, 70)
		ellipse(nodes[i].x, nodes[i].y, 10, 10);
        nodes[i].x += random(-5, 5)
        nodes[i].y += random(-5, 5)
	}
}

function createNodes() {
	nodes = [];
	for (var i = 0; i < nodeCount; i++) {
		nodes.push(
            createVector(width / 2 + random(-1, 1), height / 2 + random(-5, 5))
		);
	}
	return nodes;
}
