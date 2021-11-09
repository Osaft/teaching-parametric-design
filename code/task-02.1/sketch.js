const canvasWidth = 400;
const canvasHeight = 400;
let gridcells = 20;
const colors = [
"#560bad","#f72585" ,"#f72585"];



function setup() {
  createCanvas(canvasWidth, canvasHeight);
  
}
function draw() {
  let a = atan2(mouseY,mouseX);

  // blendMode(BURN);
  gridcells = random(3,50);
  frameRate(7);
  // noLoop();
  colorMode(MULTIPLY);
  background(0);
  angleMode(DEGREES);
  // gridcells = random(60,100);
  for (let layers = 0; layers < 3; layers++) {
    
    
  
    // stroke = colors
    // stroke("#3d405b");
    
    stroke(colors[2-layers]);
    strokeWeight(3-layers);

    for (let x = 0; x < gridcells; x++) {
    

      
      for (let y = 0; y < gridcells; y++) {
        
        // strokeWeight(1);
        push();

        translate(x * canvasWidth / gridcells,
        y * canvasWidth / gridcells);
        rotate(y/x);
        rotate(x/y*300);
        // rotate(a);
        line(canvasWidth / gridcells / 10*layers,
          canvasHeight / gridcells / 10*layers,
          canvasWidth / gridcells*layers,
          canvasHeight / gridcells*layers);
    
        pop();
        
      }
    }

  }
}
