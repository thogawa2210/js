class Skill2{
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
        image.src = 'skill2.png';
        this.ctx.drawImage(image, this.x, this.y,50,50);
        this.ctx.closePath();
        this.x += this.speed;
    }
}