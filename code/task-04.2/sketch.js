let xoff = 0;
let yoff = 0;
let res = 400;
let zoff = 0;
let ii = 400

function setup() {
  createCanvas(ii,ii);
}

function draw() {
  background(255);
  noLoop();
  stroke(0);
  strokeWeight(0);
  rectMode(CENTER);
  angleMode(DEGREES);
  frameRate(5);

noFill();

push()
zoff = 0;



for (let ebenen = 0; ebenen < 2; ebenen++) {
  

  for (let x = 0; x < res; x++) {
    xoff = 0;
    
    for (let y = 0; y < res; y++) {
      push()
      translate(width/res*x,height/res*y);
      fill(noise(xoff,yoff)*255)
      // rotate(noise(xoff,yoff)*360);
      square(0,0,10)
      xoff = xoff+0.01;
    

      pop();
      
    }
    yoff = yoff+0.1;
    rotate(20);
    translate(200,200);
  }
  
zoff = zoff + 1;
}
// save();
}
