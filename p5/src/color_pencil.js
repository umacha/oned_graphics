var agents1 = []
var agents2 = []
var agents3 = []
var noiseVals = []
var numOfAgents = 100
var angle = 0

function setup() {
    createCanvas(700, 700)
    background(255)
    colorMode(HSB, 100, 100, 100)

    for (i = 0; i < numOfAgents; i++) {
        agents1.push([random(width), random(height)])
        agents2.push([random(width), random(height)])
        agents3.push([random(width), random(height)])
        noiseVals.push([Math.random(), Math.random()])
    }
}

function draw() {
    stroke(0)
    strokeWeight(0.1)

    draw_agents()

    for (i = 0; i < numOfAgents; i++) {
        noiseVals[i][0] += 0.05
        noiseVals[i][1] += 0.05
    }

    rotate(radians(angle))
    angle += 5
}

function draw_agents() {
    // beginShape()

    for (i = 0; i < numOfAgents; i++) {
        let randX = random(0, 1)
        let randY = random(0, 1)
        if (randX < 0.5) {
            agents1[i][0] -= noise(noiseVals[i][0])
            agents2[i][0] -= noise(noiseVals[i][0])
            agents3[i][0] -= noise(noiseVals[i][0])
        } else {
            agents1[i][0] += noise(noiseVals[i][0])
            agents2[i][0] += noise(noiseVals[i][0])
            agents3[i][0] += noise(noiseVals[i][0])
        }
        if (randY < 0.5) {
            agents1[i][1] -= noise(noiseVals[i][1])
            agents2[i][1] -= noise(noiseVals[i][1])
            agents3[i][1] -= noise(noiseVals[i][1])
        } else {
            agents1[i][1] += noise(noiseVals[i][1])
            agents2[i][1] += noise(noiseVals[i][1])
            agents3[i][1] += noise(noiseVals[i][1])
        }

        // curveVertex(agents1[i][0], agents1[i][1])
        
        stroke(0)
        line(agents1[i][0], agents1[i][1], agents1[i][0] + 1, agents1[i][1] + 1)
        stroke(50, 50, 80)
        line(agents2[i][0], agents2[i][1], agents2[i][0] + 1, agents2[i][1] + 1)
        stroke(100, 50, 80)
        line(agents3[i][0], agents3[i][1], agents3[i][0] + 1, agents3[i][1] + 1)
    }

    // endShape()
}