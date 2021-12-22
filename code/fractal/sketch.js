var angle = 45;
let menge = 20
let g = 0
const zufall = [0,1]
function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background(250);
  rectMode
  noLoop();
  stroke(0);
  beginShape()
  angleMode(DEGREES)
  // translate(width/2,height/2);
  translate(width/2,height/2)
  // for (let i = 0; i < menge; i++) {
  //   branch(100);
    
  
  // }

  endShape();
  

  branch(100);
  
  
}

function branch(len){
  

  
  
    
  

  
  if (zufall[0]=== 0){
    for (let x = 0; x < 12; x++) {
      
      
    
  
  len = 50 /x
  line(0,0,0, -len);
  translate(0, -len);
  rotate(angle);
  
    }
    x=0
    
    zufall[0] = 1
    branch(len)
  }
  if (zufall[0]=== 1){
    for (let y = 0; y < 12; y++) {
      
      
    
    
    line(0,0,0, -len);
    translate(0, -len);
    len = 2* y
    rotate(-angle);
    }
    y=0
    
    zufall[0] = 0
    branch(len)
  }

  
  
  
  
}