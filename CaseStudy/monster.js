class Monster {
    constructor(index, x, y, width, height) {
        this.index = index;
        this.width = width;
        this.height = height;
        this.x = Math.floor(Math.random() * 700 + 700);
        this.y = Math.floor(Math.random() * 600);
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

    draw() {
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image/monster.png';
        this.ctx.drawImage(image, this.x, this.y, 50, 60);
        this.ctx.closePath();
        this.move();
    }

    move() {
        if (this.x <= 0) {
            this.flag = 'RIGHT';
        } else if (this.x >= 1400) {
            this.flag = 'LEFT';
        }
        switch (this.flag) {
            case 'LEFT':
                this.moveLeft();
                break;
            case 'RIGHT':
                this.moveRight();
                break;
            default:
                this.moveLeft();
                break
        }
    }
    moveLeft()
    {
        this.x -= 1;
    }
    moveRight()
    {
        this.x += 1;
    }
}