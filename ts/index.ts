import { Camera } from "./Camera";
import { Canvas } from "./Canvas";
import { EventHandler } from "./EventHandler";
import { Game } from "./Game";
import { Maze } from "./Maze";
import { Player } from "./Player";

//Criação das instâncias das entidades
const htmlCanvas = document.querySelector("canvas") as HTMLCanvasElement
htmlCanvas.width = window.innerWidth - 16
htmlCanvas.height = window.innerHeight - 16

const ctx = htmlCanvas.getContext("2d") as CanvasRenderingContext2D

const WIDTH = htmlCanvas.width
const HEIGHT = htmlCanvas.height
const TILE_SIZE = 60;
const TILE_SRC_SIZE = 96;

const image = new Image();
image.src = "img/img.png";

const maze = new Maze({
    tileSize: TILE_SIZE,
    tileSrcSize: TILE_SRC_SIZE,
})

const player = new Player({
	x: TILE_SIZE + 2,
	y: TILE_SIZE + 2,
	width: 24,
	height: 32,
	speed: 4,
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
	camera,
	image,
    width: WIDTH, 
    height: HEIGHT,
})


const eventHandler = new EventHandler()

const game = new Game({ 
    player, 
    canvas, 
    maze,
	eventHandler: eventHandler,
	camera
})

image.addEventListener("load", function() {
	requestAnimationFrame(game.loop.bind(game));
}, false);

