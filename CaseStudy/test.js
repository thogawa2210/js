function drawBackground(){
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    const image = new Image();
    image.src = 'background.png';
    ctx.drawImage(image, 0,0,canvas.width,canvas.height);
    ctx.closePath();
}

setInterval(drawBackground,100);