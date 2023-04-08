import { Camera } from "./Camera";
import { Scenario } from "./Scenario";
import { Player } from "./Player";

interface ICanvas {
    context: CanvasRenderingContext2D
    scenario: Scenario
    width: number
    height: number
    camera: Camera
    playerSpritesheet: HTMLImageElement
    background: HTMLImageElement
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
    background: HTMLImageElement
    

    constructor({ context, scenario, width, height, camera, player, playerSpritesheet, background }: ICanvas) {
        this.context = context
        this.scenario = scenario
        this.width = width, 
        this.height = height
        this.camera = camera
        this.player = player
        this.playerSpritesheet = playerSpritesheet
        this.background = background
    }

    render(){
        
        this.clearCanvas()
        this.renderScenario()
        this.renderPlayer(this.player)
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

    private renderScenario() {
        this.context.translate(-this.camera.x,-this.camera.y);

        this.context.drawImage(
            this.background,
            0,
            0,
            this.scenario.matrix[0].length * this.scenario.blockSize,
            this.scenario.matrix.length * this.scenario.blockSize
        )
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
}