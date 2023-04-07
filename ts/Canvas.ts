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
}