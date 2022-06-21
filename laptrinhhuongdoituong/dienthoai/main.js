let iPhone = new Phone('iPhone',30,'On');
let nokia = new Phone('nokia',30,'On');
function checkPower(phone){
    if (phone.getPower() === 'Off'){
        return false;
    }else {
        return true;
    }
}
function getBattery(phone) {
    if(checkPower(phone)){
        alert(phone.battery);
    }
    else {
        alert('Please turn power on!');
    }
}
function setPower(phone){
    phone.setPower();
    alert('Power is ' + phone.power);
}
function charge(phone){
    phone.charge();
    alert('Battery is ' + phone.battery);
}
function setMessage(phone){
    this.message = prompt("Nhập tin nhắn");
}
function sendMessage(phone){
    if(phone === iPhone) {
        phone.sendMessage(this.message, nokia);
    }else{
        phone.sendMessage(this.message, iPhone);
    }
}

function getMessage(phone){
    alert(phone.getMessage());
}