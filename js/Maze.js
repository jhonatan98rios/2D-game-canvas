class Maze {

    constructor({ tileSize, tileSrcSize }) {
        this.tileSize = tileSize
        this.tileSrcSize = tileSrcSize
        
        this.matrix = this.generateMatrix()
        this.walls = this.generateWalls()

        this.width = this.matrix[0].length * tileSize
        this.height = this.matrix.length * tileSize;
    }

    generateMatrix() {
        return [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
            [1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1],
            [1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1],
            [1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1],
            [1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
            [1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
            [1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
            [1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1],
            [1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
            [1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ];
    }

    generateWalls() {
        let walls = []
        for(var row in this.matrix){
            for(var column in this.matrix[row]){
                var tile = this.matrix[row][column];
                if(tile === 1){
                    var wall = new Wall({
                        x: this.tileSize * column,
                        y: this.tileSize * row,
                        width: this.tileSize,
                        height: this.tileSize
                    })

                    walls.push(wall);
                }
            }
        }
        return walls
    }
}