class Bullet{
    constructor(x,y,color,speed){
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = speed;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw(){
        this.ctx.beginPath();
        this.x += this.speed;
        this.ctx.arc(this.x, this.y,3,0,Math.PI * 2);
        this.ctx.fillStyle = this.color
        this.ctx.fill();
        this.ctx.closePath();
    }
    moveRight(){
        this.x += this.speed;
    }
}