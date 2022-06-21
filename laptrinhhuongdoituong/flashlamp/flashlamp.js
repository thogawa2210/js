class Flashlamp{
    constructor(status,battery){
        this.status = status;
        this.battery = battery;
    }
    setBattery(Battery){
        this.battery = Battery;
    }
    getBatteryInfo(){
        return this.battery.getEnergy();
    }
    light(){
        if(this.status){
            alert('Lighting')
        }else{
            alert('Not lighting')
        }
    }
    turnOn(){
        this.battery.decreaseEnergy();
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}