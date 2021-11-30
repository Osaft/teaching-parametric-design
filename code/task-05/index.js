const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const t=1


// let circlevar = cylinder({
//   center: [0,0,0],
//   height: 5+Math.random()*10,
//   segments: 5
// }
// );

// let staebe = ellipsoid({
// radius: [0.5,0.5,10],
// segments: 4
// });

menge = 200
wert = 50
const main = () => {
const objects = []
const objects2 = []
const unionshape = []
for (let c = 1; c < menge; c++) {

  let circlevar = cylinder({
    center: [0,0,0],
    height: 5+Math.random()*20,
    segments: 5+ Math.random()*10
  }
  );
  const mittelkreis = translate([0,0,-5],circlevar)
  



  const drehen = rotate ([Math.random()*wert*c,Math.random()*wert*c,Math.random()*wert*c],mittelkreis)
  

  const farbe = 10/c
  
   const colorobject = colorize([0,farbe,0],drehen);
  
  objects.push(colorobject)
  
  let staebe = ellipsoid({
    radius: [0.5,0.5,1],
    segments: 4
    });
  

  
  const mittelkreis2 = translate([0,0,-20],staebe)
  const drehen2 = rotate ([Math.random()*wert*c,Math.random()*wert*c,Math.random()*wert*c],mittelkreis2)
  
  
  
  const colorobject2 = colorize([0,farbe,0],drehen2)
  objects2.push(colorobject2)
  
 
}
const both = union([objects2,objects])
unionshape.push(both)
return [objects2,objects];
}

module.exports = { main };