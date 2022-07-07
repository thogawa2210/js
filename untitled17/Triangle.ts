import {Shape}  from './Shape'

export class Triangle extends Shape {
    side1: number;
    side2: number;
    side3: number;
    constructor(side1: number, side2: number, side3: number, name: string, color: string) {
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    getPerimeter(): number {
        return this.side1 + this.side2 + this.side3;
    }
    getArea(): number {
        let p = this.getPerimeter()/2;
        return Math.sqrt(p*(p-this.side1)*(p-this.side2)*(p-this.side3));
    }
    display(): string {
        return this.name + ' có màu: '+ this.color  +' có 3 cạnh lần lượt là: '
            + this.side1 +','+ this.side2 + ',' + this.side3
        + ' Chu vi là: ' + this.getPerimeter() + ' Diện tích là: ' + this.getArea()
    }
}