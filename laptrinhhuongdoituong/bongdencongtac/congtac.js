class SwitchButton{
    constructor(status,lamp){
        this.status = status;
        this.lamp = lamp;
    }
    connectToLamp(ElectricLamp){
        this.lamp = ElectricLamp;
    }
    switchOn(){
        this.lamp.status = true;
    }
    switchOff(){
        this.lamp.status = false;
    }
}