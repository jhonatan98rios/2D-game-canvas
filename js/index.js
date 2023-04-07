//Criação das instâncias das entidades
const htmlCanvas = document.querySelector("canvas")
const ctx = htmlCanvas.getContext("2d")

const WIDTH = htmlCanvas.width
const HEIGHT = htmlCanvas.height
const TILE_SIZE = 64;
const TILE_SRC_SIZE = 96;

var mvLeft = mvUp = mvRight = mvDown = false;

/* var tileSize = 64;
var tileSrcSize = 96; */

const maze = new Maze({
    tileSize: TILE_SIZE,
    tileSrcSize: TILE_SRC_SIZE
})

const player = new Player({
	x: TILE_SIZE + 2,
	y: TILE_SIZE + 2,
	width: 24,
	height: 32,
	speed: 2,
	srcX: 0,
	srcY: TILE_SRC_SIZE,
	countAnim: 0,
    maze: maze
})

const camera = new Camera({
    x: 0,
	y: 0,
	width: WIDTH,
	height: HEIGHT
})



const canvas = new Canvas({ ctx, maze })
const game = new Game({ player, canvas })

const walls = []

const T_WIDTH = maze.matrix[0].length * TILE_SIZE
const T_HEIGHT = maze.matrix.length * TILE_SIZE;

for(var row in maze.matrix){
    for(var column in maze.matrix[row]){
        var tile = maze.matrix[row][column];
        if(tile === 1){
            var wall = new Wall({
                x: TILE_SIZE * column,
                y: TILE_SIZE * row,
                width: TILE_SIZE,
                height: TILE_SIZE
            })

            walls.push(wall);
        }
    }
}

var img = new Image();
img.src = "img/img.png";

img.addEventListener("load", function() {
	requestAnimationFrame(game.loop.bind(game), htmlCanvas);
}, false);


const eventHandler = new EventHandler()