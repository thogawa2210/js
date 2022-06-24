class Monster{
    constructor(index,x,y,width,height){
        this.index = index;
        this.width = width;
        this.height = height;
        this.x = Math.floor(Math.random()*700+700);
        this.y = Math.floor(Math.random()*700);
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
        this.x -= 1;
    }
}