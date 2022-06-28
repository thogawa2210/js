// Gọi các đối tượng:
let player = new Player(0,300,50,50);

let monster = [];
for(let i=0; i<20; i++){
    monster.push(new Monster(i));
}

let skill1 = new Skill1(50,300,500,60);

let skill2 = [];

function drawSkill2(){
    for(let i=0; i<skill2.length; i++){
        player.skill2(skill2[i]);
    }
}

// Gọi các hàm:
let boss = new Boss(1000,250,10, 100);

function checkRemoveSkill2(){
    for(let i=0; i<skill2.length; i++){
        if(skill2[i].x >1400){
            skill2.splice(i,1);
        }
    }
}

function drawBackground(){
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    const image = new Image();
    image.src = 'image/background.png';
    ctx.drawImage(image, 0,0,canvas.width,canvas.height);
    ctx.closePath();
}

function clearCanvas(){
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function collisionSkill1(Monster,Skill) {
    if (Monster.x <= Skill.x + 500
        && Skill.y + 50 >= Monster.y
        && Skill.y <= Monster.y + 60) {
        monster.splice(0, 1);
    }
}

function collisionSkill2(Monster,Skill2) {
    for(let i=0; i<Skill2.length; i++) {
        if (Monster.x <= Skill2[i].x + 50
            && Skill2[i].y + 50 >= Monster.y
            && Skill2[i].y <= Monster.y + 50) {
            monster.splice(0, 1);
        }
    }
}

function collisionBoss1(Boss,Skill1){
    if(Boss.x <= Skill1.x +500
    && Skill1.y +50 >= Boss.y
    && Skill1.y <= Boss.y +300){
        Boss.health -=3;
    }
}

function collisionBoss2(Boss,Skill2){
    for(let i=0; i<Skill2.length; i++) {
        if (Boss.x <= Skill2[i].x + 50
            && Skill2[i].y + 50 >= Boss.y
            && Skill2[i].y <= Boss.y + 300) {
            Boss.health -= 1;
            skill2.splice(i, 1);
        }
    }
}

function collisionPlayer(Monster, Player){
    if(Player.x +50 >= Monster.x
        && Player.x -50 <= Monster.x
        && Monster.y + 60 >= Player.y
        && Monster.y <= Player.y +60){
        alert("You lose!");
    }
}

// Hàm play():
function play(){
    clearCanvas();
    drawBackground();
    player.draw();
    drawSkill2();
    if(monster.length !== 0) {
        monster[0].draw();
        collisionSkill1(monster[0],skill1);
        collisionSkill2(monster[0],skill2);
        collisionPlayer(monster[0],player);
    }
    boss.draw(monster);
    checkRemoveSkill2();
    win();
    requestAnimationFrame(play);
}

function win(){
    if(boss.health <= 0) {
        alert("You win!");
    }
}

// Các lệnh nhận phím từ HTML:
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
            player.skill1(skill1);
            if(boss.health>0){
                collisionBoss1(boss,skill1);
            }
            break
        case 74:
            skill2.push(new Skill2(0,300));
            for(let i=0; i<skill2.length; i++){
                collisionBoss2(boss,skill2);
            }
            break;
    }
})