import { Camera } from "./Camera";
import { Maze } from "./Maze";
import { Player } from "./Player";

interface ICanvas {
    ctx: CanvasRenderingContext2D
    maze: Maze
    width: number
    height: number
    camera: Camera
    image: HTMLImageElement
}

export class Canvas {
    ctx: CanvasRenderingContext2D;
    maze: Maze
    width: number
    height: number
    camera: Camera
    image: HTMLImageElement

    constructor({ ctx, maze, width, height, camera, image }: ICanvas) {
        this.ctx = ctx
        this.maze = maze
        this.width = width, 
        this.height = height
        this.camera = camera
        this.image = image
    }

    render({ player }: { player: Player }){
        
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.save();
        this.ctx.translate(-this.camera.x,-this.camera.y);

        // for(var row in this.maze.matrix){

        //     for(var column in this.maze.matrix[row]){
        //         var tile = this.maze.matrix[row][column];
        //         var x = column * this.maze.tileSize;
        //         var y = row * this.maze.tileSize;
                
        //         this.ctx.drawImage(
        //             img,
        //             tile * this.maze.tileSrcSize, 0, this.maze.tileSrcSize, this.maze.tileSrcSize,
        //             x, y, this.maze.tileSize, this.maze.tileSize
        //         )
        //     }
        // }

        this.maze.matrix.forEach((row, i) => {
            row.forEach((column, j) => {
                var tile = column;
                var x = j * this.maze.tileSize;
                var y = i * this.maze.tileSize;
                
                this.ctx.drawImage(
                    this.image,
                    tile * this.maze.tileSrcSize, 0, this.maze.tileSrcSize, this.maze.tileSrcSize,
                    x, y, this.maze.tileSize, this.maze.tileSize
                )
            })
        })


        //desenha o personagem
        this.ctx.drawImage(
            this.image,
            player.srcX, player.srcY, player.width, player.height,
            player.x, player.y, player.width, player.height
        );
        this.ctx.restore();
    }

    // blockRectangle(objA, objB){
    //     var distX = (objA.x + objA.width/2) - (objB.x + objB.width/2);
    //     var distY = (objA.y + objA.height/2) - (objB.y + objB.height/2);
        
    //     var sumWidth = (objA.width + objB.width)/2;
    //     var sumHeight = (objA.height + objB.height)/2;
        
    //     if(Math.abs(distX) < sumWidth && Math.abs(distY) < sumHeight){
    //         var overlapX = sumWidth - Math.abs(distX);
    //         var overlapY = sumHeight - Math.abs(distY);
            
    //         if(overlapX > overlapY){
    //             objA.y = distY > 0 ? objA.y + overlapY : objA.y - overlapY;
    //         } else {
    //             objA.x = distX > 0 ? objA.x + overlapX : objA.x - overlapX;
    //         }
    //     }
    // }
}