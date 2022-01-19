const width = 1000;
const height = 1000;
let res = 50
const ebenen = 400;
function setup() {
  createCanvas(width,height);
}


function draw() {
  background(255);
  noLoop();
  fill(0);
  strokeWeight(0);
  
  for (let x = 0; x < res; x++) {
  
      push()
      translate(random(width),random(height))
      noFill()
      stroke(random(255))
      strokeWeight(random(30))
  
      rect(random(width)-750,random(height)-750,random(1000)-x*2)
      

       
        
    
    
      pop();
    
}
// save();
}
