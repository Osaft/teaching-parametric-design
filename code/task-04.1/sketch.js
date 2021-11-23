let xoff = 0;
let yoff = 0;
let res = 40;
let zoff = 0;
let ii = 400

function setup() {
  createCanvas(ii,ii,SVG);
}

function draw() {
  background(255);
  noLoop();
  stroke("red");
  strokeWeight(1);
  rectMode(CENTER);
  angleMode(DEGREES);
  frameRate(5);

noFill();

push()
zoff = 0;



for (let ebenen = 0; ebenen < 1; ebenen++) {
  

  for (let x = 0; x < res; x++) {
    xoff = 0;
    for (let y = 0; y < res; y++) {
      push()
      translate(width/res*x,height/res*y);

      rotate(noise(xoff,yoff)*360);
      line(0,0,7,7);
      xoff = xoff+0.1;
    

      pop();
      
    }
    yoff = yoff+0.1;
  }

zoff = zoff + 1;
}
// save();
}
