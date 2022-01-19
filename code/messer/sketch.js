let slider = 0;


const width = 1000;
const height = 1000;
function setup() {
  createCanvas(width,height,WEBGL);

  slider = createSlider(-30,30,0,1);
  slider.position(10, 10);
  slider.style('width', '80px');
}

function draw() {
  background(200);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // box(50,50,50);


  let val = slider.value();
  
fill(255,100,100,255)

  background(230);
  beginShape()

  vertex(width/10*8,height/10*6);
  vertex(width/10*8,height/10*5);
  vertex(width/10*6,height/10*5);
  vertex(width/10*6,height/10*6);
  endShape(CLOSE);
fill("grey")
  beginShape();

  curveVertex(width/10*6,height/10*5);
  curveVertex(width/10*2+val,height/10*5);
  curveVertex(width/10*3,height/10*7);
  curveVertex(width/10*5,height/10*7);
  curveVertex(width/10*6,height/10*6);
  

  endShape(CLOSE);

}
