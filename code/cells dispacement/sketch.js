var points = [];
let cellcount = 40;
function setup() {
  createCanvas(400,400);
  noStroke()
  colorMode(HSL)
  for (let i = 0.1; i < 2; i++) {
    points.push(createVector(random(width), random(height)));
  }
  drawNoise()
	}

 
function mouseClicked() {
  for (let c = 0; c < cellcount; c++) {
    points.push(createVector(random(width), random(height)));
    drawNoise()
    
  }
  save();
}

function draw() {
  points[0].x = mouseX;
  points[0].y = mouseY;
  drawNoise()
}

function dist2(x1, y1, x2, y2) {
  return abs(x2 - x1 + y2 - y1)

}

function drawNoise() {
  let rand = random(points);
  rand.add(p5.Vector.random2D().mult(50))

  var res = 3;
  for (let x = 0; x < width; x += res) {
    for (let y = 0; y < height; y += res) {
      let close = 1000;
      let closeP;
      for (let p of points) {
        if (dist(x, y, p.x, p.y) < close) {
          close = dist(x, y, p.x, p.y)
          closeP = p;
        }
      }
      let col = 255;
      if (close < 75) col = 0
      fill(close)
      //fill(closeP.x, 100, 50)
      rect(x, y, res, res)

    }
  }
}