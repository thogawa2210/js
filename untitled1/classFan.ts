class Fan{
    SLOW: number = 1;
    MEDIUM:number = 2;
    HIGH:number = 3;
    constructor(private speed: number=1, private on : boolean = false, private radius:number =5, private color:string = 'white') {
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
    }
    getSpeed(){
        return this.speed;
    }
    getOn(){
        return this.on;
    }
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
    }
    setSpeed(speed:number){
        this.speed = speed;
    }
    setOn(on:boolean){
        this.on = on;
    }
    setRadius(radius:number){
        this.radius = radius;
    }
    setColor(color:string){
        this.color = color;
    }
    toSring() {
        if (this.getOn()) {
            console.log(this.getSpeed(),this.getRadius(),this.getColor(),'fan is on');
        } else {
            console.log(this.getSpeed(),this.getRadius(),this.getColor(),'fan is off')
        }
    }
}

let fan1 = new Fan();
fan1.toSring();