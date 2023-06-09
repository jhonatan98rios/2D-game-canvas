import { Camera } from "./application/models/Camera";
import { Canvas } from "./application/models/Canvas";
import { EventHandler } from "./application/models/EventHandler";
import { Game } from "./application/models/Game";
import { Scenario } from "./application/models/Scenario";
import { Player } from "./application/models/Player";

import { SCREEN_WIDTH, SCREEN_HEIGHT, BLOCK_IMAGE_SIZE, BLOCK_SIZE } from "./constants"
import { PlayerEventService } from "./application/services/PlayerEventService";
import { SocketAdapter } from "./infra/http/SocketAdapter";
import { ActorEventService } from "./application/services/ActorEventService";

const htmlCanvas = document.querySelector("canvas") as HTMLCanvasElement
htmlCanvas.width = SCREEN_WIDTH
htmlCanvas.height = SCREEN_HEIGHT

const context = htmlCanvas.getContext("2d") as CanvasRenderingContext2D


const playerSpritesheet = new Image()
playerSpritesheet.src = "img/spritesheet.png"

const background = new Image();
background.src = "img/layers/floor.png"

const housesBase = new Image();
housesBase.src = "img/layers/houses-base.png"

const housesTop = new Image();
housesTop.src = "img/layers/houses-top.png"





const scenario = new Scenario({
    blockSize: BLOCK_SIZE,
    blockImageSize: BLOCK_IMAGE_SIZE,
})

const player = new Player({
	x: SCREEN_WIDTH / 2, 
	y: SCREEN_HEIGHT / 2,
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
	housesBase,
	housesTop,
    width: SCREEN_WIDTH, 
    height: SCREEN_HEIGHT,
})

const eventHandler = new EventHandler()


const socketAdapter = SocketAdapter.getInstance(player)
const playerEventService = new PlayerEventService(socketAdapter, eventHandler, player)

const game = new Game({ 
    player, 
    canvas, 
    scenario,
	eventHandler,
	camera,
	playerEventService
})

const actorEventService = new ActorEventService(socketAdapter, game, scenario)

playerSpritesheet.addEventListener("load", function() {
	requestAnimationFrame(game.loop.bind(game));
}, false);

