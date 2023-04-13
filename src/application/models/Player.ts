import { Actor } from "./Actor";
import { Game } from "./Game";
import { Scenario } from "./Scenario";

interface IPlayer {
    x: number,
    y: number,
    width: number,
    height: number,
    speed: number,
    srcX: number,
    srcY: number,
    scenario: Scenario
}

export class Player {
    id?: string
    x: number
    y: number
    width: number
    height: number
    speed: number
    srcX: number
    srcY: number
    countAnim: number
    scenario: Scenario
    game?: Game

    constructor({ x, y, width, height, speed, srcX, srcY, scenario }: IPlayer) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
        this.srcX = srcX
        this.srcY = srcY
        this.scenario = scenario
        this.countAnim = 0
    }

    move(mvLeft: boolean, mvUp: boolean, mvRight: boolean, mvDown: boolean) {
        
        this.positionAnimation(mvLeft, mvUp, mvRight, mvDown)
        this.setDirection(mvLeft, mvUp, mvRight, mvDown)
        this.spriteAnimation(mvLeft, mvUp, mvRight, mvDown)
    }

    private positionAnimation(mvLeft: boolean, mvUp: boolean, mvRight: boolean, mvDown: boolean) {

        
        if (mvLeft && !mvRight) {
            let newPosition = {x: this.x - this.speed, y: this.y}

            if (!this.verifyCollision(newPosition)) {
                this.x = newPosition.x
            }
            
        } else if (mvRight && !mvLeft) {
            let newPosition = {x: this.x + this.speed, y: this.y}

            if (!this.verifyCollision(newPosition)) {
                this.x = newPosition.x
            }
        }

        if (mvUp && !mvDown) {
            let newPosition = {y: this.y - this.speed, x: this.x}

            if (!this.verifyCollision(newPosition)) {
                this.y = newPosition.y
            }

        } else if (mvDown && !mvUp) {
             let newPosition = {y: this.y + this.speed, x: this.x}

            if (!this.verifyCollision(newPosition)) {
                this.y = newPosition.y
            }
        }
    }

    private setDirection(mvLeft: boolean, mvUp: boolean, mvRight: boolean, mvDown: boolean) {
        if (mvLeft && !mvRight) {
            this.srcY = this.scenario.blockImageSize + this.height * 2

        } else if (mvRight && !mvLeft) {
            this.srcY = this.scenario.blockImageSize + this.height * 3
        }

        if (mvUp && !mvDown) {
            this.srcY = this.scenario.blockImageSize + this.height * 1

        } else if (mvDown && !mvUp) {
            this.srcY = this.scenario.blockImageSize + this.height * 0
        }
    }

    private spriteAnimation(mvLeft: boolean, mvUp: boolean, mvRight: boolean, mvDown: boolean) {
        if (mvLeft || mvRight || mvUp || mvDown) {
            this.countAnim++;

            if (this.countAnim >= 40) {
                this.countAnim = 0;
            }

            this.srcX = Math.floor(this.countAnim / 5) * this.width;
        } else {
            this.srcX = 0;
            this.countAnim = 0;
        }
    }

    private verifyCollision(newPosition: {x: number, y: number}) {
        
        let hadCollision = false
        
        if (this.game && this.game.player) {
            let player = this.game.player as Player

            this.game.actors.forEach(actor => {

                
                let playerCollisionBox = this.getCollisionBox({ x: newPosition.x, y: newPosition.y, width: player.width, height: player.height })
                let actorCollisionBox = this.getCollisionBox({ x: actor.x, y: actor.y, width: actor.width, height: actor.height })
                
                this.moveWhenCollide(player, actor)

        
                if (playerCollisionBox.left < actorCollisionBox.right && playerCollisionBox.right > actorCollisionBox.left && playerCollisionBox.top < actorCollisionBox.bottom && playerCollisionBox.bottom > actorCollisionBox.top) {
                    hadCollision = true
                }
                
            })
        }

        return hadCollision
    }

    moveWhenCollide(player: Player, actor: Actor) {
        if (actor.y == player.y && actor.x == player.x) {
            player.x += actor.width
        }
    }


    getCollisionBox({ x, y, width, height }: any) {
        return {
            left: x,
            right: x + (width * 0.75),
            top: y,
            bottom: y + (height * 0.5),
        }
    }
}