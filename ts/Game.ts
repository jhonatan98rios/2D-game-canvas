import { Camera } from "./Camera";
import { Canvas } from "./Canvas";
import { EventHandler } from "./EventHandler";
import { Maze } from "./Maze";
import { Player } from "./Player";

interface IGame {
    player: Player
    canvas: Canvas
    maze: Maze
    eventHandler: EventHandler
    camera: Camera
}

export class Game {
    player: Player
    canvas: Canvas
    maze: Maze
    eventHandler: EventHandler
    camera: Camera

    constructor({ player, canvas, maze, eventHandler, camera }: IGame) {
        this.player = player
        this.canvas = canvas
        this.maze = maze
        this.eventHandler = eventHandler
        this.camera = camera
    }

    update(){
        this.player.move(this.eventHandler.mvLeft, this.eventHandler.mvUp, this.eventHandler.mvRight, this.eventHandler.mvDown)
               
        this.maze.walls.forEach(wall => {
            wall.blockRectangle(this.player);
        })
        
        if(this.player.x < this.camera.innerLeftBoundary()){
            this.camera.x = this.player.x - (this.camera.width * 0.25);
        }
        if(this.player.y < this.camera.innerTopBoundary()){
            this.camera.y = this.player.y - (this.camera.height * 0.25);
        }
        if(this.player.x + this.player.width > this.camera.innerRightBoundary()){
            this.camera.x = this.player.x + this.player.width - (this.camera.width * 0.75);
        }
        if(this.player.y + this.player.height > this.camera.innerBottomBoundary()){
            this.camera.y = this.player.y + this.player.height - (this.camera.height * 0.75);
        }
        
        this.camera.x = Math.max(0,Math.min(this.maze.width - this.camera.width, this.camera.x));
        this.camera.y = Math.max(0,Math.min(this.maze.height - this.camera.height, this.camera.y));
    }

    loop(){
        this.update()
        this.canvas.render({ 
            player: this.player
        });
        requestAnimationFrame(this.loop.bind(this));
    }
}