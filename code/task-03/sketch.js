let width = 400;
let height = 400;
let rotorwert = 10
let angle = 0;
let radius = 0;
let green;
let red;
let blue;
let greeninc;
let blueinc;
let redinc;

let radiuswert;
let anglewert;

function setup() {
  createCanvas(width, height);

  anglewert = 91;
  radiuswert = random(0.05,0.05);
  

  red = random(255);
  blue = random(255);
  green = random(255);

  blueinc = random(30);
  redinc = random(30);
  greeninc = random(30);
}

function draw() {
  console.log(red,green,blue);
  angleMode(DEGREES);
  rectMode(CENTER);
  stroke("black");
  strokeWeight(5);
  // noLoop();
  frameRate(10000);

  for (let i = 0; i < 20; i++) {
 push();
  translate(width/2,height/2);
  red+=redinc;
  green+=greeninc;
  blue+=blueinc;

  rotate(angle);
  angle+=anglewert;
  radius+=radiuswert;
  stroke(red,blue,green)

  point(radius,0);

  if (red> 255){
    red = 0;
  }
  if (blue> 255){
    blue = 0;
  }
  if (green> 255){
    green = 0;
  }
  pop();




  }
}
function mousePressed() {
  redraw();
  
}