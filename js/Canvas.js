class Canvas {

    constructor({ ctx,  }) {
        this.ctx = ctx
    }

    render({ player, maze }){
        this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
        this.ctx.save();
        this.ctx.translate(-camera.x,-camera.y);

        for(var row in maze){
            for(var column in maze[row]){
                var tile = maze[row][column];
                var x = column*tileSize;
                var y = row*tileSize;
                
                this.ctx.drawImage(
                    img,
                    tile * tileSrcSize,0,tileSrcSize,tileSrcSize,
                    x,y,tileSize,tileSize
                );
                
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