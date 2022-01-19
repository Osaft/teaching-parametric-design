const width = 1000;
const height = 1000;
let res = 20
const ebenen = 40;
function setup() {
  createCanvas(width,height);
}


function draw() {
  background(255);
  noLoop();
  fill(0);
  strokeWeight(0);
  for (let x = 0; x < res; x++) {
    for (let y = 0; y < res; y++) {
      push()
      translate((width*x)/res,(height*y)/res)
      for (let z = 0; z < ebenen; z++) {
        fill(255-z*5)
        circle(res+random(20),res+random(20),45-z)
       
        
      }
      circle(res,res,10);
      pop();
    }
}
save();
}
