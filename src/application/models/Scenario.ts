import { collisions } from '../utils/collisions'
import { Wall } from "./Wall"

interface IScenario {
    blockSize: number, 
    blockImageSize: number
}

export class Scenario {
    blockSize: number
    blockImageSize: number
    matrix: number[][]
    walls: Wall[]
    width: number
    height: number

    constructor({ blockSize, blockImageSize }: IScenario) {
        this.blockSize = blockSize
        this.blockImageSize = blockImageSize
        
        this.matrix = this.generateMatrix()
        this.walls = this.generateWalls()

        this.width = this.matrix[0].length * blockSize
        this.height = this.matrix.length * blockSize;
    }

    generateMatrix() {
        return collisions
    }

    generateWalls() {
        let walls = []
        for(let row in this.matrix){
            for(var column in this.matrix[row]){
                var tile = this.matrix[row][column];
                if(tile === 1){
                    var wall = new Wall({
                        x: this.blockSize * parseInt(column),
                        y: this.blockSize * parseInt(row),
                        width: this.blockSize,
                        height: this.blockSize
                    })

                    walls.push(wall);
                }
            }
        }

        return walls
    }
}