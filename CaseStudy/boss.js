class Boss{
    constructor(x,y,speed,health){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.health = health;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw(Monster){
        if (Monster.length === 0){
            this.ctx.beginPath();
            const image = new Image();
            image.src = 'boss.png';
            this.ctx.drawImage(image, this.x, this.y,200,300);
            this.ctx.closePath();
            this.ctx.fillStyle = 'red';
            this.ctx.fillRect(this.x, this.y - 20, this.health*2, 20);
        }
    }
}