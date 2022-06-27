class Skill2{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw(){
        if(this.x < 1400){
        this.ctx.beginPath();
        const image = new Image();
        image.src = 'image/skill2.png';
        this.ctx.drawImage(image, this.x, this.y,50,50);
        this.x += 1;
        this.ctx.closePath();
        }
    }
}