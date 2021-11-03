function setup() {
  createCanvas(400, 400);
}

/*function draw() {
  background(255);
  stroke(255,0,0);
  point(200, 50);
  strokeWeight(10);
  fill("blue");
  ellipse(50, 300,30,30);
  line(50,80,100,200);
  fill(0,0,0,0);
  square(0,0,400);
  stroke("green");
  strokeWeight(4);
  rect(50,50,200,200);
  circle(120,400,60);
  arc()
}*/
function draw() {
  background("#e63946");
  strokeWeight(0);
  fill("#f1faee");
  circle(380,300,500);
  fill("rgba(168, 218, 220, 0.9)");
  square(-30,-50,250);
  fill("rgba(69, 123, 157, 0.5)");
  circle(50,200,250)
  fill("rgba(0,0,0,0)");
  strokeWeight(50);
  stroke("rgba(29, 53, 87, 0.5)");
  arc(199,
     200, 
     300, 
     300, 
     0, 
     Math.PI, OPEN);
}
