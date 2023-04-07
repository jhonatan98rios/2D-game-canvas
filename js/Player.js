class Player {
    constructor({ x, y, width, height, speed, srcX, srcY, countAnim, maze }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.srcX = srcX;
        this.srcY = srcY;
        this.countAnim = countAnim;
        this.maze = maze
    }

    //Método para movimentar o jogador
    move(mvLeft, mvUp, mvRight, mvDown) {
        if (mvLeft && !mvRight) {
            this.x -= this.speed;
            //ajuste de orientação da animação para esquerda
            this.srcY = this.maze.tileSrcSize + this.height * 2;
        } else if (mvRight && !mvLeft) {
            this.x += this.speed;
            //ajuste de orientação da animação para direita
            this.srcY = this.maze.tileSrcSize + this.height * 3;
        }
        if (mvUp && !mvDown) {
            this.y -= this.speed;
            //ajuste de orientação da animação para cima
            this.srcY = this.maze.tileSrcSize + this.height * 1;
        } else if (mvDown && !mvUp) {
            this.y += this.speed;
            //ajuste de orientação da animação para baixo
            this.srcY = this.maze.tileSrcSize + this.height * 0;
        }

        //processo de animação
        if (mvLeft || mvRight || mvUp || mvDown) {
            this.countAnim++;

            if (this.countAnim >= 40) {
                this.countAnim = 0;
            }

            this.srcX = Math.floor(this.countAnim / 5) * this.width;
        } else {
            this.srcX = 0;
            this.countAnim = 0;
        }
    }

    //Método para detectar colisões com paredes
    collide(walls) {
        for (var i in walls) {
            var wall = walls[i];
            if (wall.x < this.x + this.width &&
                wall.x + wall.width > this.x &&
                wall.y < this.y + this.height &&
                wall.y + wall.height > this.y) {
                var distX = (this.x + this.width / 2) - (wall.x + wall.width / 2);
                var distY = (this.y + this.height / 2) - (wall.y + wall.height / 2);
                var overlapX = (this.width + wall.width) / 2 - Math.abs(distX);
                var overlapY = (this.height + wall.height) / 2 - Math.abs(distY);

                if (overlapX > overlapY) {
                    this.y = distY > 0 ? this.y + overlapY : this.y - overlapY;
                } else {
                    this.x = distX > 0 ? this.x + overlapX : this.x - overlapX;
                }
            }
        }
    }
}