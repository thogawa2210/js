let player = new Player(0,300,50,50);

let monster = [];
for(let i=0; i<5; i++){
    monster.push(new Monster(i));
    console.log(monster);
}

let bullet = new Bullet(50,300,'red',20);
let skill2 = new Skill2(0, 300, 3);
let boss = new Boss(1000,250,10);

function drawBackground(){
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    const image = new Image();
    image.src = 'background.png';
    ctx.drawImage(image, 0,0,canvas.width,canvas.height);
    ctx.closePath();
}

function clearCanvas(){
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function collision(Monster,Bullet){
    if(Monster.x <=Bullet.x+ 500
        && Bullet.y +50 >= Monster.y
        && Bullet.y <= Monster.y+60){
        monster.splice(0,1);
    }
}

function play(){
    clearCanvas();
    drawBackground();
    player.draw();
    boss.draw(monster);
    skill2.draw();
    if(monster.length !== 0) {
        monster[0].draw();
        monster[0].moveLeft();
        collision(monster[0],bullet);
    }
    // requestAnimationFrame(play);
}
// play();
setInterval(play, 300);


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
            break
    }
})