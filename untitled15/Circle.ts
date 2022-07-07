export class Circle{
    private radius: number
    private color: string

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }

    getRadius(): number{
        return this.radius;
    }
    getColor(): string {
        return this.color;
    }
    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}