let player = new Player(0,300,50,50);
let monster = new Monster(1300,300,50,50);
let bullet = new Bullet(50,300,'red',20);
function clearCanvas(){
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function play(){
    clearCanvas();
    player.draw();
    monster.draw();
    monster.moveLeft();
}
setInterval(play, 100);

window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 37:
            player.moveLeft();
            break;
        case 39:
            player.moveRight();
            break;
        case 38:
            player.moveUp();
            break
        case 40:
            player.moveDown();
            break
        case 32:
            player.fire(bullet);
    }
})