class Player{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.speed = 10
    }
    draw(){
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'player.jpg';
        this.ctx.drawImage(image, this.x, this.y,50,60);
        this.ctx.closePath();
    }
    moveUp(){
        this.y -= this.speed;
    }
    moveDown(){
        this.y += this.speed;
    }
    moveLeft(){
        this.x -= this.speed;
    }
    moveRight(){
        this.x += this.speed;
    }
    fire(Bullet){
        Bullet.draw();
    }
}