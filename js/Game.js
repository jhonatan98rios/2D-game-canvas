class Game {

    constructor({ player, canvas }) {
        this.player = player
        this.canvas = canvas
    }

    update(){
        if(mvLeft && !mvRight){
            this.player.x -= this.player.speed;
            //ajuste de orientação da animação para esquerda
            this.player.srcY = this.canvas.maze.tileSrcSize + this.player.height * 2;
        } else 
        if(mvRight && !mvLeft){
            this.player.x += this.player.speed;
            //ajuste de orientação da animação para direita
            this.player.srcY = this.canvas.maze.tileSrcSize + this.player.height * 3;
        }
        if(mvUp && !mvDown){
            this.player.y -= this.player.speed;
            //ajuste de orientação da animação para cima
            this.player.srcY = this.canvas.maze.tileSrcSize + this.player.height * 1;
        } else 
        if(mvDown && !mvUp){
            this.player.y += this.player.speed;
            //ajuste de orientação da animação para baixo
            this.player.srcY = this.canvas.maze.tileSrcSize + this.player.height * 0;
        }
        
        //processo de animação
        if(mvLeft || mvRight || mvUp || mvDown){
            this.player.countAnim++;
            
            if(this.player.countAnim >= 40){
                this.player.countAnim = 0;
            }
            
            this.player.srcX = Math.floor(this.player.countAnim/5) * this.player.width;
        } else {
            this.player.srcX = 0;
            this.player.countAnim = 0;
        }
        
        for(var i in walls){
            var wall = walls[i];
            wall.blockRectangle(this.player);
        }
        
        if(this.player.x < camera.innerLeftBoundary()){
            camera.x = this.player.x - (camera.width * 0.25);
        }
        if(this.player.y < camera.innerTopBoundary()){
            camera.y = this.player.y - (camera.height * 0.25);
        }
        if(this.player.x + this.player.width > camera.innerRightBoundary()){
            camera.x = this.player.x + this.player.width - (camera.width * 0.75);
        }
        if(this.player.y + this.player.height > camera.innerBottomBoundary()){
            camera.y = this.player.y + this.player.height - (camera.height * 0.75);
        }
        
        camera.x = Math.max(0,Math.min(T_WIDTH - camera.width,camera.x));
        camera.y = Math.max(0,Math.min(T_HEIGHT - camera.height,camera.y));
    }

    loop(){
        this.update()
        canvas.render({ 
            player: this.player
        });
        requestAnimationFrame(this.loop.bind(this), htmlCanvas);
    }
}