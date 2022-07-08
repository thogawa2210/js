import {Circle} from "./Circle";

export class Cylinder extends Circle {
    height: number;
    volume: number

    constructor(name: string,
                radius: number,
                height: number) {
        super(name, radius);
        this.height = height;
        this.volume= super.calculateArea() * this.height
    }

    show(): string {
        return super.show() + ' và chiều cao: ' + this.height;
    }

    calculateArea(): number {
        return super.calculateArea() * 2 + super.calculatePerimeter() * this.height;
    }

    calculateVolume(): number {
        return this.volume;
    }

}