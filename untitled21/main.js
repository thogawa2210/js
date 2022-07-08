"use strict";
exports.__esModule = true;
var Square_1 = require("./Square");
var Cylinder_1 = require("./Cylinder");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var shape = [];
var cylinder = new Cylinder_1.Cylinder('Hình trụ', 5, 20);
var circle = new Circle_1.Circle('Hình tròn', 10);
var rectangle = new Rectangle_1.Rectangle(10, 20, 'Hình chũ nhật');
var square = new Square_1.Square('Hình vuông', 10);
shape.push(square);
shape.push(cylinder);
shape.push(circle);
shape.push(rectangle);
for (var i = 0; i < shape.length; i++) {
    console.log(shape[i].show());
    console.log('Diện tích: ' + shape[i].calculateArea());
    if (shape[i].howtocolor) {
        console.log(shape[i].howToColor());
    }
    if (shape[i].volume) {
        console.log('Thể tích: ' + shape[i].calculateVolume());
    }
}
