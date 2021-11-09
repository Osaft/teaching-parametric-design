let width = 400;
let height = 400;
let gridcells = 10;
function setup() {
  createCanvas(400,400);

}

function draw() {
  
  angleMode(DEGREES);
  ellipseMode(CENTER);
  strokeWeight(1);
  noLoop();
for (let x = 0; x < gridcells; x++) {
  for (let y = 0; y < gridcells; y++) {
    // let a = atan2(mouseY - height / 2, mouseX - width / 2);
    
    push();

    translate(x*width/gridcells,
    y*height/gridcells);

    // rotate(random(30));

    ellipse(width/gridcells-15,
      height/gridcells-15,
      width/gridcells/2,
      height/gridcells/2);

      line(random(Math.floor(20)),
        random(Math.floor(20)),
        random(Math.floor(20)),
        random(Math.floor(20))
    )
    

    pop()
  }
  
}

}
       
    
  
  
  

