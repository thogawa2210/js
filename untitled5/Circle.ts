class Circle{
    public radius = 20;
    public color = 'green';
    constructor(color: string,radius: number) {
        this.radius = radius;
        this.color = color;
    }

}

let circleList : Circle[] = [];
circleList.push(new Circle("yellow", 10));

circleList.push(new Circle("green", 15));

circleList.push(new Circle("blue", 20));

function showCircle(circle: Circle) {
    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
}

circleList.forEach(showCircle);