import { Wall } from "./Wall"

export class Maze {
    tileSize: number
    tileSrcSize: number
    matrix: number[][]
    walls: Wall[]
    width: number
    height: number

    constructor({ tileSize, tileSrcSize }: { tileSize: number, tileSrcSize: number }) {
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
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        ];
    }

    generateWalls() {
        let walls = []
        for(let row in this.matrix){
            for(var column in this.matrix[row]){
                var tile = this.matrix[row][column];
                if(tile === 1){
                    var wall = new Wall({
                        x: this.tileSize * parseInt(column),
                        y: this.tileSize * parseInt(row),
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