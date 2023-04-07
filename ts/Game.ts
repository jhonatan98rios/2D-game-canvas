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
    player: Player;
    canvas: Canvas;
    maze: Maze;
    eventHandler: EventHandler
    camera: Camera

    constructor({ player, canvas, maze, eventHandler, camera }: IGame) {
        this.player = player
        this.canvas = canvas
        this.maze = maze
        this.eventHandler = eventHandler,
        this.camera = camera
    }

    update(){
        // if(this.eventHandler.mvLeft && !this.eventHandler.mvRight){
        //     this.player.x -= this.player.speed;
        //     //ajuste de orientação da animação para esquerda
        //     this.player.srcY = this.maze.tileSrcSize + this.player.height * 2;
        // } else 
        // if(this.eventHandler.mvRight && !this.eventHandler.mvLeft){
        //     this.player.x += this.player.speed;
        //     //ajuste de orientação da animação para direita
        //     this.player.srcY = this.maze.tileSrcSize + this.player.height * 3;
        // }
        // if(this.eventHandler.mvUp && !this.eventHandler.mvDown){
        //     this.player.y -= this.player.speed;
        //     //ajuste de orientação da animação para cima
        //     this.player.srcY = this.maze.tileSrcSize + this.player.height * 1;
        // } else 
        // if(this.eventHandler.mvDown && !this.eventHandler.mvUp){
        //     this.player.y += this.player.speed;
        //     //ajuste de orientação da animação para baixo
        //     this.player.srcY = this.maze.tileSrcSize + this.player.height * 0;
        // }
        
        // //processo de animação
        // if(this.eventHandler.mvLeft || this.eventHandler.mvRight || this.eventHandler.mvUp || this.eventHandler.mvDown){
        //     this.player.countAnim++;
            
        //     if(this.player.countAnim >= 40){
        //         this.player.countAnim = 0;
        //     }
            
        //     this.player.srcX = Math.floor(this.player.countAnim/5) * this.player.width;
        // } else {
        //     this.player.srcX = 0;
        //     this.player.countAnim = 0;
        // }

        this.player.move(this.eventHandler.mvLeft, this.eventHandler.mvUp, this.eventHandler.mvRight, this.eventHandler.mvDown)
        
        for(var i in this.maze.walls){
            var wall = this.maze.walls[i];
            wall.blockRectangle(this.player);
        }
        
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