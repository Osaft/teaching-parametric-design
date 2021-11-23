rows=0
colors=[]

setup=()=>createCanvas(windowWidth, windowHeight)
draw=()=>{
  if(rows<height){
    rows++
    for(cols=width;cols--;){
      x=map(cols,0,width,-.1,-.03)
      y=map(rows,0,height,-.036,.015)
      for(i=0;i<5;i++){
        d=x*x+y*y
        newx=sin(y/d+x/sqrt(5))
        newy=sin(x/d+y/sqrt(5))
        x=newx
        y=newy
        colors[i]=abs(280-(x+y)**2*128)
      }
      stroke(colors[2],colors[3],colors[4])
      line(cols,rows,cols,rows+colors[3])
    }
  }
}