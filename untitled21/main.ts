import {Square} from "./Square";
import {Cylinder} from "./Cylinder";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let shape = [];
let cylinder = new Cylinder('Hình trụ', 5, 20);
let circle = new Circle('Hình tròn', 10);
let rectangle = new Rectangle(10,20, 'Hình chũ nhật');
let square = new Square('Hình vuông', 10);
shape.push(square);
shape.push(cylinder);
shape.push(circle);
shape.push(rectangle);
for (let i = 0; i < shape.length; i++) {
    console.log(shape[i].show());
    console.log('Diện tích: ' + shape[i].calculateArea());
    if(shape[i].howtocolor){
        console.log(shape[i].howToColor());
    }
    if(shape[i].volume){
        console.log('Thể tích: ' + shape[i].calculateVolume());
    }
}
