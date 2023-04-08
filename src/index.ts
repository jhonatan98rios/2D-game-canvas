import { Camera } from "./application/models/Camera";
import { Canvas } from "./application/models/Canvas";
import { EventHandler } from "./application/models/EventHandler";
import { Game } from "./application/models/Game";
import { Scenario } from "./application/models/Scenario";
import { Player } from "./application/models/Player";

import { SCREEN_WIDTH, SCREEN_HEIGHT, BLOCK_IMAGE_SIZE, BLOCK_SIZE } from "./constants"

const htmlCanvas = document.querySelector("canvas") as HTMLCanvasElement
htmlCanvas.width = SCREEN_WIDTH
htmlCanvas.height = SCREEN_HEIGHT

const context = htmlCanvas.getContext("2d") as CanvasRenderingContext2D


const playerSpritesheet = new Image()
playerSpritesheet.src = "img/spritesheet.png"

const background = new Image();
background.src = "img/background.png"

const scenario = new Scenario({
    blockSize: BLOCK_SIZE,
    blockImageSize: BLOCK_IMAGE_SIZE,
})

const player = new Player({
	x: htmlCanvas.width / 2, 
	y: htmlCanvas.height / 2,
	width: 48,
	height: 64,
	speed: 4,
	srcX: 0,
	srcY: BLOCK_IMAGE_SIZE,
    scenario: scenario
})

const camera = new Camera({
    x: 0,
	y: 0,
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT
})

const canvas = new Canvas({ 
	context, 
    scenario, 
	camera,
	player,
	playerSpritesheet,
	background,
    width: SCREEN_WIDTH, 
    height: SCREEN_HEIGHT,
})

const eventHandler = new EventHandler()

const game = new Game({ 
    player, 
    canvas, 
    scenario,
	eventHandler,
	camera,
})

playerSpritesheet.addEventListener("load", function() {
	requestAnimationFrame(game.loop.bind(game));
}, false);
