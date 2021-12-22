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

menge = 70
breite = 10
wert = 50
v = [0]
const main = () => {
const objects = []
for (let c = 1; c < menge; c++) {
  for (let d = 0; d < breite; d++) {
  
  

  let cubes= cube({
    center: [0,0,0]}
  );
  let cyl = cylinder({
    center: [0,0,0],
    segments: 20
  })
  
  v[0]= Math.round(Math.random())


if (v[0]===0) {
  

  const drehen = rotate ([d/10,c+1,c],
  cubes)


  const bewegen  = translate([0,d,c/2],drehen)
  
  const drehen2 = rotate([c/20,c/3,0],bewegen)


  
  objects.push(drehen2)
}
if (v[0]===1) {
  

  const drehena = rotate ([0,c+1,c],
  cyl)


  const bewegena  = translate([0,d/2,c/2],drehena)
  
  const drehen2a = rotate([d/10,c/20,c/20],bewegena)


  
  objects.push(drehen2a)
}
  
  }
}

return [objects];
}

module.exports = { main };