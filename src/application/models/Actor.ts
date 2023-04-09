import { Scenario } from "./Scenario";

interface IActor {
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    speed: number,
    srcX: number,
    srcY: number,
    scenario: Scenario
}

export class Actor {
    id: string
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    srcX: number;
    srcY: number;
    countAnim: number;
    scenario: Scenario;

    constructor({ id, x, y, width, height, speed, srcX, srcY, scenario }: IActor) {
        this.id = id
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.srcX = srcX;
        this.srcY = srcY;
        this.scenario = scenario
        this.countAnim = 0;
    }

    move(mvLeft: boolean, mvUp: boolean, mvRight: boolean, mvDown: boolean) {
        
        this.positionAnimation(mvLeft, mvUp, mvRight, mvDown)
        this.setDirection(mvLeft, mvUp, mvRight, mvDown)
        this.spriteAnimation(mvLeft, mvUp, mvRight, mvDown)
    }

    private positionAnimation(mvLeft: boolean, mvUp: boolean, mvRight: boolean, mvDown: boolean) {
        if (mvLeft && !mvRight) {
            this.x -= this.speed;

        } else if (mvRight && !mvLeft) {
            this.x += this.speed;
        }

        if (mvUp && !mvDown) {
            this.y -= this.speed;

        } else if (mvDown && !mvUp) {
            this.y += this.speed;
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
}