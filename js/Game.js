class Game {

    constructor({ player, canvas, maze, eventHandler }) {
        this.player = player
        this.canvas = canvas
        this.maze = maze
        this.eventHandler = eventHandler
    }

    update(){
        this.player.move(mvLeft, mvUp, mvRight, mvDown)
        
        for(var i in this.maze.walls){
            var wall = this.maze.walls[i];
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
        
        camera.x = Math.max(0,Math.min(this.maze.width - camera.width,camera.x));
        camera.y = Math.max(0,Math.min(this.maze.height - camera.height,camera.y));
    }

    loop(){
        this.update()
        canvas.render({ 
            player: this.player
        });
        requestAnimationFrame(this.loop.bind(this), htmlCanvas);
    }
}