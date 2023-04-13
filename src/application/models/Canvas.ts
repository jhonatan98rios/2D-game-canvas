import { Camera } from "./Camera";
import { Scenario } from "./Scenario";
import { Player } from "./Player";
import { Actor } from "./Actor";
import { Game } from "./Game";
import { Element } from "../../database/scenarios/mock";

interface ICanvas {
    context: CanvasRenderingContext2D
    scenario: Scenario
    width: number
    height: number
    camera: Camera
    playerSpritesheet: HTMLImageElement
    player: Player
}

export class Canvas {
    context: CanvasRenderingContext2D;
    scenario: Scenario
    width: number
    height: number
    camera: Camera
    player: Player
    playerSpritesheet: HTMLImageElement
    game?: Game
    

    constructor({ context, scenario, width, height, camera, player, playerSpritesheet }: ICanvas) {
        this.context = context
        this.scenario = scenario
        this.width = width, 
        this.height = height
        this.camera = camera
        this.player = player
        this.playerSpritesheet = playerSpritesheet
    }

    render(){
        
        this.clearCanvas()
        this.moveCamera()

        this.scenario.layers.belowThePlayers.forEach(element => {
            this.renderElement(element)
        })


        if (this.game) {
            this.renderAllPlayers(this.player, this.game?.actors)
        }

        this.scenario.layers.sameLevelAsPlayers.forEach(element => {
            this.renderElement(element)
        })

        this.scenario.layers.aboveThePlayers.forEach(element => {
            this.renderElement(element)
        })

        this.context.restore()
    }

    private renderScenarioByBlock() {
        this.scenario.matrix.forEach((row, i) => {
            row.forEach((column, j) => {
                var x = j * this.scenario.blockSize;
                var y = i * this.scenario.blockSize;
                
                this.context.drawImage(
                    this.playerSpritesheet,
                    column * this.scenario.blockImageSize, 
                    0, 
                    this.scenario.blockImageSize, 
                    this.scenario.blockImageSize,
                    x, 
                    y, 
                    this.scenario.blockSize, 
                    this.scenario.blockSize
                )
            })
        }) 
    }

    private clearCanvas() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.save();
    }

    private moveCamera() {
        this.context.translate(-this.camera.x,-this.camera.y)
    }

    private renderScenario(background: HTMLImageElement) {

        this.context.drawImage(
            background,
            0,
            0,
            this.scenario.matrix[0].length * this.scenario.blockSize,
            this.scenario.matrix.length * this.scenario.blockSize
        )
    }

    private renderElement(element: Element) {
        this.context.drawImage(
            element.image as CanvasImageSource,
            element.x,
            element.y,
            element.width,
            element.height
        )
    }

    private renderAllPlayers(player: Player, actors: Actor[]) {

        let playerY = player.y

        let sortedActors = this.sortActors(actors)

        sortedActors
            .filter((actor: Actor) => actor.y <= playerY)
            .forEach((actor: Actor) => {
                this.renderActor(actor)
            })

        this.renderPlayer(player)

        sortedActors
            .filter((actor: Actor) => actor.y > playerY)
            .forEach((actor: Actor) => {
                this.renderActor(actor)
            })
    }

    private renderPlayer(player: Player) {
        this.context.drawImage(
            this.playerSpritesheet,
            player.srcX, 
            player.srcY, 
            player.width, 
            player.height,
            player.x, 
            player.y, 
            player.width, 
            player.height
        );
    }

    private renderActor(actor: Actor) {
        this.context.drawImage(
            this.playerSpritesheet,
            actor.srcX, 
            actor.srcY, 
            actor.width, 
            actor.height,
            actor.x, 
            actor.y, 
            actor.width, 
            actor.height
        );
    }

    private sortActors(actors: Actor[]) {
        return actors.sort((first: Actor, second: Actor) => (first.y > second.y) ? 1 : ((second.y > first.y) ? -1 : 0))
    }
}