class Canvas {

    constructor({ ctx, maze, width, height }) {
        this.ctx = ctx
        this.maze = maze
        this.width = width, 
        this.height = height
    }

    render({ player }){
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.save();
        this.ctx.translate(-camera.x,-camera.y);

        for(var row in this.maze.matrix){

            for(var column in this.maze.matrix[row]){
                var tile = this.maze.matrix[row][column];
                var x = column * this.maze.tileSize;
                var y = row * this.maze.tileSize;
                
                this.ctx.drawImage(
                    img,
                    tile * this.maze.tileSrcSize, 0, this.maze.tileSrcSize, this.maze.tileSrcSize,
                    x, y, this.maze.tileSize, this.maze.tileSize
                )
            }
        }
        //desenha o personagem
        this.ctx.drawImage(
            img,
            player.srcX, player.srcY, player.width, player.height,
            player.x, player.y, player.width, player.height
        );
        this.ctx.restore();
    }

    blockRectangle(objA, objB){
        var distX = (objA.x + objA.width/2) - (objB.x + objB.width/2);
        var distY = (objA.y + objA.height/2) - (objB.y + objB.height/2);
        
        var sumWidth = (objA.width + objB.width)/2;
        var sumHeight = (objA.height + objB.height)/2;
        
        if(Math.abs(distX) < sumWidth && Math.abs(distY) < sumHeight){
            var overlapX = sumWidth - Math.abs(distX);
            var overlapY = sumHeight - Math.abs(distY);
            
            if(overlapX > overlapY){
                objA.y = distY > 0 ? objA.y + overlapY : objA.y - overlapY;
            } else {
                objA.x = distX > 0 ? objA.x + overlapX : objA.x - overlapX;
            }
        }
    }
}