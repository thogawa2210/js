// let car = new Car('car.png',350,350,100,150);

// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext('2d');
// let img = new Image();
// img.src = 'image/car.png';
// ctx.drawImage(img,350,350);

let canvas = document.getElementById('myCanvas'),
    context = canvas.getContext('2d');

drawCar();

function drawCar(){
    let img = new Img('car.png') ;
    console.log(img.src)
    img.src = 'car.png';
    img.onload = function(){
        context.drawImage(img, 0, 0,100,150);
    }
}
