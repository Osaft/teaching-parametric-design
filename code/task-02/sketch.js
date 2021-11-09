const Width = 400;
const Height = 400;
const gridcells = 5
let x
let y

function setup() {
  createCanvas(Width,Height);
}

function draw() {
  background(255);
  frameRate(3);
  // noLoop();
  rectMode(CENTER);
  for (let x = 0; x < gridcells; x++) {
    for (let y = 0; y < gridcells; y++) {
      const shapeType = Math.floor(random(3));
      strokeWeight(5);
      noFill()

    if (shapeType === 0){
      // circle(40+x*80,40+y*80,50);
      triangle(40+x*80,20+y*80,20+x*80,60+y*80,60+x*80,60+y*80);
    }
    if (shapeType === 1){
      strokeWeight(5);
      circle(40+x*80,40+y*80,50);
    }
      else if (shapeType === 2){
        square(40+x*80,40+y*80,40);


    }

    }
    
  }
}
