import { Camera } from "./Camera"
import { Canvas } from "./Canvas"
import { EventHandler } from "./EventHandler"
import { Scenario } from "./Scenario"
import { Player } from "./Player"
import { PlayerControlService } from "../services/PlayerControlService"

interface IGame {
    player: Player
    canvas: Canvas
    scenario: Scenario
    eventHandler: EventHandler
    camera: Camera
    playerControlService: PlayerControlService
}

export class Game {
    player: Player
    canvas: Canvas
    scenario: Scenario
    eventHandler: EventHandler
    camera: Camera
    playerControlService: PlayerControlService

    constructor({ player, canvas, scenario, eventHandler, camera, playerControlService }: IGame) {
        this.player = player
        this.canvas = canvas
        this.scenario = scenario
        this.eventHandler = eventHandler
        this.camera = camera
        this.playerControlService = playerControlService
    }

    update(){
        this.player.move(this.eventHandler.mvLeft, this.eventHandler.mvUp, this.eventHandler.mvRight, this.eventHandler.mvDown)
               
        this.scenario.walls.forEach(wall => {
            wall.blockRectangle(this.player)
        })
        
        if(this.player.x < this.camera.innerLeftBoundary()){
            this.camera.x = this.player.x - (this.camera.width * 0.25)
        }
        if(this.player.y < this.camera.innerTopBoundary()){
            this.camera.y = this.player.y - (this.camera.height * 0.25)
        }
        if(this.player.x + this.player.width > this.camera.innerRightBoundary()){
            this.camera.x = this.player.x + this.player.width - (this.camera.width * 0.75)
        }
        if(this.player.y + this.player.height > this.camera.innerBottomBoundary()){
            this.camera.y = this.player.y + this.player.height - (this.camera.height * 0.75)
        }
        
        this.camera.x = Math.max(0,Math.min(this.scenario.width - this.camera.width, this.camera.x))
        this.camera.y = Math.max(0,Math.min(this.scenario.height - this.camera.height, this.camera.y))
    }

    loop(){
        this.update()
        this.canvas.render()
        requestAnimationFrame(this.loop.bind(this))
        this.playerControlService.execute()
    }
}