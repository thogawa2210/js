let car = new Car(350,350,100,150,50);
let obstacle1 = new Obstacle();
let obstacle2 = new Obstacle();
let obstacle3 = new Obstacle();
function clearCanvas(){
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// function play(){
//     car.draw();
// }
// play();
function showSpeed(){
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Speed:"+car.speed,10,50);
}
function play(){
    clearCanvas();
    showSpeed();
    car.draw();
    obstacle1.draw();
    obstacle2.draw();
    obstacle3.draw();
}
setInterval(play, 100);

window.addEventListener('keydown', function(event){
    switch (event.keyCode) {
        case 37:
            car.moveLeft();
            break;
        case 39:
            car.moveRight();
            break;
        case 38:
            car.moveUp();
            break
        case 40:
            car.moveDown();
            break
        case 17:
            car.setSpeed();
    }
})