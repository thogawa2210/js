import {Circle} from './Circle';

export class Cylinder extends Circle {
    private height: number
    constructor(height: number, radius: number, color: string) {
        super(radius, color);
        this.height = height;
    }
    getArea(){
        return super.getRadius()*2*Math.PI*this.height;
    }
    getVolume(){
        return super.getArea()*this.height;
    }
}