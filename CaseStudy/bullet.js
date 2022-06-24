class Bullet{
    constructor(x,y,speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw(){
        this.ctx.beginPath();
        const image = new Image();
        image.src = 'skill.png';
        this.ctx.drawImage(image, this.x, this.y,500,60);
        this.ctx.closePath();
    }
}