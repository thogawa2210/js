class Skill1 {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw(){
        this.ctx.beginPath();
        const image = new Image();
        image.src = 'image/skill.png';
        this.ctx.drawImage(image, this.x, this.y,this.width, this.height);
        this.ctx.closePath();
    }
}