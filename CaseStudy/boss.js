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
            image.src = 'image/boss.png';
            this.ctx.drawImage(image, this.x, this.y,200,300);
            this.ctx.fillStyle = 'red';
            this.ctx.fillRect(this.x, this.y - 20, this.health*2, 20);
            this.ctx.closePath();
            this.move();
        }
    }
    move() {
        if (this.y <= 0) {
            this.flag = 'DOWN';
        } else if (this.y + 300 >= 700) {
            this.flag = 'TOP';
        }

        switch (this.flag) {
            case 'TOP':
                this.moveTop();
                break;
            case 'DOWN':
                this.moveDown();
                break;
            default:
                this.moveTop();
        }
    }
    moveTop() {
        this.y -= 3;
    }
    moveDown() {
        this.y += 3;
    }
}