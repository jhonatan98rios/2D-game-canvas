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

    blockRectangle(obj: any){
        let distX = (obj.x + obj.width/2) - (this.x + this.width/2);
        let distY = (obj.y + obj.height/2) - (this.y + this.height/2);
        
        let sumWidth = (obj.width + this.width)/2;
        let sumHeight = (obj.height + this.height)/2;
        
        if(Math.abs(distX) < sumWidth && Math.abs(distY) < sumHeight){
            let overlapX = sumWidth - Math.abs(distX);
            let overlapY = sumHeight - Math.abs(distY);
            
            if(overlapX > overlapY){
                obj.y = distY > 0 ? obj.y + overlapY : obj.y - overlapY;
            } else {
                obj.x = distX > 0 ? obj.x + overlapX : obj.x - overlapX;
            }
        }
    }
}