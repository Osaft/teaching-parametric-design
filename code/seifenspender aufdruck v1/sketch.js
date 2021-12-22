const resx = 20;
const resy = 40;
let noisew = 0;
let height = 400;
let width = 400;
let xoff = 0;
let yoff = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  noLoop();
  strokeWeight(1);
  stroke("black");
  
  

    for (let x = 0; x < resx; x++) {
      xoff = 0;
      for (let y = 0; y < resy; y++) {
        push()
        translate(width/resx*x,(height/resy*y)+yoff);
  
        rotate(noise(xoff,yoff)*180);
        line(0,0,0,height/resy);
        xoff = xoff+0.001;
      
  
        pop();
        
      }
      yoff = yoff+0.001;
    }
  



}