let lamp = new ElectricLamp(true);
let switchbutton = new SwitchButton(true,lamp);
switchbutton.switchOff();
console.log(lamp.status);
switchbutton.switchOn();
console.log(lamp.status);
for (let i = 0; i <10; i++) {
    switchbutton.switchOff();
    switchbutton.switchOn();
}