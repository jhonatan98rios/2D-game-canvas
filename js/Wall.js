//Classe para representar as paredes do labirinto
class Wall {
    constructor({ x, y, width, height }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    blockRectangle(obj){
        var distX = (obj.x + obj.width/2) - (this.x + this.width/2);
        var distY = (obj.y + obj.height/2) - (this.y + this.height/2);
        
        var sumWidth = (obj.width + this.width)/2;
        var sumHeight = (obj.height + this.height)/2;
        
        if(Math.abs(distX) < sumWidth && Math.abs(distY) < sumHeight){
            var overlapX = sumWidth - Math.abs(distX);
            var overlapY = sumHeight - Math.abs(distY);
            
            if(overlapX > overlapY){
                obj.y = distY > 0 ? obj.y + overlapY : obj.y - overlapY;
            } else {
                obj.x = distX > 0 ? obj.x + overlapX : obj.x - overlapX;
            }
        }
    }
}