class Obstacle{
    constructor(){
        this.x = Math.floor(Math.random() * 1000);
        this.y = Math.floor(Math.random() * 600);
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw() {
        this.ctx.beginPath();
        let image = new Image(10,20);
        image.src = 'obstacle.jpg';
        this.ctx.drawImage(image, this.x, this.y, 100, 100);
        this.ctx.closePath();
    }
}