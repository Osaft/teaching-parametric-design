const jscad = require('@jscad/modeling')

const {
  circle
} = jscad.primitives;

const {translate,
  rotate,
  scale,
  align
} = jscad.transforms;

const {
  extrudeLinear,
  extrudeRotate
} = jscad.extrusions;



// abrufen der primitives

const menge = 40;



let circlevar = circle({
  center: [0,0],
  radius: 1,
  segments: 6
}
);

const main = () => {

  const objects = []
  

  for (let c = 0; c < menge; c++) {
    
    const drehen = rotate([0,0,Math.PI/6*c],circlevar)

    const extrudieren = extrudeLinear({height: Math.random()*10},drehen)
    
    objects.push(
      translate(
      [Math.random()*10,Math.random()*10,0],
      extrudieren))



   
     
  }
  

// const verschieben = translate([1,1,0],circlevar)
  



  


  return objects;

};

module.exports = { main };