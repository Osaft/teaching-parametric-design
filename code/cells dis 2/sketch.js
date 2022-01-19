const width = 1000;
const height = 1000;


function setup() {
  createCanvas(width,height);
}


const ak = 60;
const res = 30;
const lines = 10;

let minikreisres = 10;

// striche in einer zelle
let linecell = 6;
let circlesize = 1000;
const linesize = 10;


function draw() {
  angleMode(DEGREES);
  strokeWeight(0);
  noLoop();
  background(200);


  // mehrere kreise
  for (let i = 0; i < ak; i++) {
    push();
    translate(random(width),random(height));

    fill(0)

    
    
    
    
    // für jeden Kreis
    for (let w = 0; w < res; w++) {
      fill(255-(w*res/3));
      
      circle(0,0,circlesize-(0.5*w*circlesize/res));
    }



    rotate(random(360))
    linecell = round(random(15))
      // linien in mehrere Stärken
    for (let i = 0; i < lines; i++) {
       strokeWeight(0);
       fill(255/lines*i);
       // runde anordnung einer linienebene
       for (let x = 1; x < linecell; x++) {
          
        
          
          rotate(360/linecell);
          rect(0,i*0.5,0.5*circlesize,linesize-(i*linesize/lines));
          
         }
      }   

        // punkte random auf kreis
      let punktemenge = random(30,80);

    for (let v = 0; v < punktemenge; v++) {
      
      rotate(random(360));
    
      let verschiebungsfaktor = 0;
      let minikreissize = random(5,23);
      verschiebungsfaktor = verschiebungsfaktor + random(10)- random(20);
      fill("red")
      for (let b = 0; b < minikreisres; b++) {
  
      
        fill(255/minikreisres*b*1.2)
        circle(0,(0.5*circlesize)+verschiebungsfaktor,minikreissize-b*2);
      }
      }







    
    pop();
    circlesize = circlesize-20;
  }
  



// save()
}
