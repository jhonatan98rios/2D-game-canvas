import { Player } from "./Player";

interface IWall {
    x: number
    y: number
    width: number
    height: number
}

export class Wall {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor({ x, y, width, height }: IWall) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    blockRectangle(player: Player){
        let distX = (player.x + player.width/2) - (this.x + this.width/2);
        let distY = (player.y + player.height/2) - (this.y + this.height/2);
        
        let sumWidth = (player.width + this.width)/2;
        let sumHeight = (player.height + this.height)/2;
        
        if(Math.abs(distX) < sumWidth && Math.abs(distY) < sumHeight){
            let overlapX = sumWidth - Math.abs(distX);
            let overlapY = sumHeight - Math.abs(distY);
            
            if(overlapX > overlapY){
                player.y = distY > 0 ? player.y + overlapY : player.y - overlapY;
            } else {
                player.x = distX > 0 ? player.x + overlapX : player.x - overlapX;
            }
        }
    }
}