let height = 400;
let width = 400;
let anzahlRinge = 10
let faktor = [0,1,2];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  frameRate(2);
  push();
  translate(200,200);
  fill("#1C00ff00");
  strokeCap(SQUARE);
  stroke(0);
  // noLoop();
  
  angleMode(DEGREES);
rotate(random(0,180));
angleMode(RADIANS);

  for (let ringe = 1; ringe < anzahlRinge; ringe++) {
    strokeWeight(random(1,5));
    
    shuffle(faktor,true);
     if (faktor[0] === 0){
      arc(0,0,20*ringe,40*ringe,Math.PI,0);
    }
    if (faktor[0] === 1){
    arc(0,0,20*ringe,40*ringe,0,Math.PI);
    }
    if (faktor[0]=== 2){
      ringe +=1

    }
  }
}
function mousePressed() {
  redraw();
}