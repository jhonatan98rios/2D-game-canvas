//Criação das instâncias das entidades
const htmlCanvas = document.querySelector("canvas")
const ctx = htmlCanvas.getContext("2d")

const WIDTH = htmlCanvas.width
const HEIGHT = htmlCanvas.height
const TILE_SIZE = 64;
const TILE_SRC_SIZE = 96;

var mvLeft = mvUp = mvRight = mvDown = false;

const maze = new Maze({
    tileSize: TILE_SIZE,
    tileSrcSize: TILE_SRC_SIZE,
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

const canvas = new Canvas({ 
    ctx, 
    maze, 
    width: WIDTH, 
    height: HEIGHT,
})

const eventHandler = new EventHandler()

const game = new Game({ 
    player, 
    canvas, 
    maze,
	eventHandler
})

const img = new Image();
img.src = "img/img.png";

img.addEventListener("load", function() {
	requestAnimationFrame(game.loop.bind(game), htmlCanvas);
}, false);


