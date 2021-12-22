const jscad = require('@jscad/modeling')
const {polygon,line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const objects = [];
const main = () => {
  
  const striche = polygon({
points: [
  [0,0]


]
  });

  objects.push(striche);
  
  return[objects]
};

module.exports = { main };