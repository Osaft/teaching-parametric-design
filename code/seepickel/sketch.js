let anzahlpocken = 20;
let res = 20;
const width = 400;
const height = 400;
const csstart = 25;
let circlesize = csstart;
let innen = [0,1];

function setup() {
  createCanvas(width,height);
}

function draw() {
  background(250);

  strokeWeight(0);
  noLoop();



  // mehrere kreise
  for (let i = 0; i < anzahlpocken; i++) {
    push();
    translate(random(width),random(height));

    fill(0)

    
    
    
    
    // für jeden Kreis
    for (let w = 0; w < res; w++) {
      fill(255-(w*res/2));
      
      circle(0,0,circlesize-(0.5*w*circlesize/res));

      
    }
      shuffle(innen,true);

      fill(255)
      circle(0,0,circlesize/2.5)
    pop()
    circlesize = csstart;
    circlesize=circlesize + random(0,15)

  }
}