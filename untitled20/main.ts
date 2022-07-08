import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let circle = new Circle('Hình tròn', 10);
let cylinder = new Cylinder('Hình tụ', 10 , 20);
let rectangle = new Rectangle(20, 30, 'Hình chữ nhật');
let square = new Square('Hình vuông', 50);

// console.log(circle.show());
// console.log(circle.calculateArea());
// circle.resizeable(2);
// console.log(circle.calculateArea());

// console.log(cylinder.show());
// console.log(cylinder.calculateVolume());
// cylinder.resizeable(2);
// console.log(cylinder.calculateVolume());


// console.log(rectangle.show());
//
console.log(square.show());
console.log(square.calculatePerimeter());
console.log(square.calculateArea());
square.resizeable(2);
console.log(square.calculatePerimeter());
console.log(square.calculateArea());
