var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.radius = 20;
        this.color = 'green';
        this.radius = radius;
        this.color = color;
    }
    return Circle;
}());
var circleList = [];
circleList.push(new Circle("yellow", 10));
circleList.push(new Circle("green", 15));
circleList.push(new Circle("blue", 20));
function showCircle(circle) {
    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
}
circleList.forEach(showCircle);
