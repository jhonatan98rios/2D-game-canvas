import { Wall } from "./Wall"

export class Maze {
    tileSize: number
    tileSrcSize: number
    matrix: number[][]
    walls: any[]
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
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ];
    }

    generateWalls() {
        let walls = []
        // for(let row in this.matrix){
        //     for(var column in this.matrix[row]){
        //         var tile = this.matrix[row][column];
        //         if(tile === 1){
        //             var wall = new Wall({
        //                 x: this.tileSize * column,
        //                 y: this.tileSize * row,
        //                 width: this.tileSize,
        //                 height: this.tileSize
        //             })

        //             walls.push(wall);
        //         }
        //     }
        // }

        walls = this.matrix.map((row, i) => {
            return row.map((column, j) => {
                if (column === 1) {
                    return new Wall({
                        x: this.tileSize * j,
                        y: this.tileSize * i,
                        width: this.tileSize,
                        height: this.tileSize
                    })
                }
            })
        })


        return walls
    }
}