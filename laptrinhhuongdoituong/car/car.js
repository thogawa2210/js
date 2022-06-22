class Car{
    constructor(x,y,width,height,speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw(){
        this.ctx.beginPath();
        let image = new Image(this.width,this.height);
        image.src = 'car.png';
        this.ctx.drawImage(image, this.x, this.y,this.width, this.height);
        this.ctx.closePath();
    }
    setSpeed(){
        this.speed += 5;
    }
    moveUp(){
        this.y -= this.speed;
    }moveDown(){
        this.y += this.speed;
    }moveLeft(){
        this.x -= this.speed;
    }moveRight(){
        this.x += this.speed;
    }

}