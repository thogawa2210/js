class Monster{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }
    draw(){
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'monster.jpg';
        this.ctx.drawImage(image, this.x, this.y,50,60);
        this.ctx.closePath();
    }
    moveLeft(){
        this.x -= 5;
    }
}