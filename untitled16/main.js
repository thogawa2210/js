"use strict";
exports.__esModule = true;
var Point3D_1 = require("./Point3D");
var point = new Point3D_1.Point3D(10, 10, 10);
console.log(point.getX());
point.setXY(20, 20);
console.log(point.getXYZ());
