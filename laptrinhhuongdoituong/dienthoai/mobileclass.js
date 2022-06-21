class Phone{
    constructor(name,battery,power){
        this.name = name;
        this.battery = battery;
        this.power = power;
    }
    getPower = function() {
        this.battery -=1;
        return this.power;
    }
    setPower = function(){
        this.battery -=1;
        if(this.power === 'On'){
            this.power = 'Off';
        }else{
            this.power = 'On';
        }
    }

    charge = function(){
        this.battery =100;
    }

    setMessage = function(message){
        this.message = message;
    }
    getMessage = function(){
        return this.message;
    }
    sendMessage = function(message,mobile){
        mobile.setMessage(message);
    }

}