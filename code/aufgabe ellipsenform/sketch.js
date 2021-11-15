let height = 400;
let width = 400;
let drehung = [a[0,Math.PI*1],b[Math.PI*1,0]];


function setup() {
  createCanvas(height, width);
}

function draw() {
  noLoop();
  background(250);
  
  push()
  translate(height/2,width/2);
  rotate(10);
  fill("#1C00ff00");
  stroke(0);

  for (let schichten = 4; schichten < 10; schichten++) {
    strokeWeight(random(1,4));
    arc(0,0,20*schichten/2.5,50*schichten/2.5,0,Math.PI*1);

  }
  pop();
  push();
  translate(200,200);
  fill("#1C00ff00");
  rotate(10);

  for (let aussen = 6; aussen < 10; aussen++) {
    
    strokeWeight(random(3,6));
    arc(0,0,20*aussen,aussen*50,0,Math.PI*1);
}
pop();

push();
fill(250);
strokeWeight(0);
  translate(0,0);
  // erase(); 
// triangle(0,0,0,400,400,400)
push()
translate(400/2,400/2);
rotate(10);
fill("#1C00ff00");

stroke(0);
for (let schichten2 = 1; schichten2 < 4; schichten2++) {
  strokeWeight(random(1,3));
  arc(0,0,20*schichten2/2.5,50*schichten2/2.5,Math.PI*1,0);
}

pop();

push();
translate(200,200);
fill("#1C00ff00");
rotate(10);

for (let aussen3 = 4; aussen3 < 6; aussen3++) {
  
  strokeWeight(random(3,6));
  arc(0,0,20*aussen3,aussen3*50,Math.PI*1,0);


}
pop();
push();
fill(100);
strokeWeight(0);



//   translate(0,0);
//   erase(); 
// triangle(0,0,400,0,400,400)

// noErase();
hide();

pop();
// strokeWeight(3);
// stroke(100);
// background(200);
// fill("#1C00ff00");

// push();
// translate(200,200);
// rotate(45);
// arc(0,0,30,40,0,Math.PI*2/360*180);
// pop();




}