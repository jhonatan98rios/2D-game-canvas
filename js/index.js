//Criação das instâncias das entidades
const htmlCanvas = document.querySelector("canvas")
const ctx = htmlCanvas.getContext("2d")

const WIDTH = htmlCanvas.width
const HEIGHT = htmlCanvas.height


var mvLeft = mvUp = mvRight = mvDown = false;

var tileSize = 64;
var tileSrcSize = 96;

const player = new Player({
	x: tileSize + 2,
	y: tileSize + 2,
	width: 24,
	height: 32,
	speed: 2,
	srcX: 0,
	srcY: tileSrcSize,
	countAnim: 0
})

const camera = new Camera({
    x: 0,
	y: 0,
	width: WIDTH,
	height: HEIGHT
})

function update(){
	if(mvLeft && !mvRight){
		player.x -= player.speed;
		//ajuste de orientação da animação para esquerda
		player.srcY = tileSrcSize + player.height * 2;
	} else 
	if(mvRight && !mvLeft){
		player.x += player.speed;
		//ajuste de orientação da animação para direita
		player.srcY = tileSrcSize + player.height * 3;
	}
	if(mvUp && !mvDown){
		player.y -= player.speed;
		//ajuste de orientação da animação para cima
		player.srcY = tileSrcSize + player.height * 1;
	} else 
	if(mvDown && !mvUp){
		player.y += player.speed;
		//ajuste de orientação da animação para baixo
		player.srcY = tileSrcSize + player.height * 0;
	}
	
	//processo de animação
	if(mvLeft || mvRight || mvUp || mvDown){
		player.countAnim++;
		
		if(player.countAnim >= 40){
			player.countAnim = 0;
		}
		
		player.srcX = Math.floor(player.countAnim/5) * player.width;
	} else {
		player.srcX = 0;
		player.countAnim = 0;
	}
	
	for(var i in walls){
		var wall = walls[i];
		wall.blockRectangle(player);
	}
	
	if(player.x < camera.innerLeftBoundary()){
		camera.x = player.x - (camera.width * 0.25);
	}
	if(player.y < camera.innerTopBoundary()){
		camera.y = player.y - (camera.height * 0.25);
	}
	if(player.x + player.width > camera.innerRightBoundary()){
		camera.x = player.x + player.width - (camera.width * 0.75);
	}
	if(player.y + player.height > camera.innerBottomBoundary()){
		camera.y = player.y + player.height - (camera.height * 0.75);
	}
	
	camera.x = Math.max(0,Math.min(T_WIDTH - camera.width,camera.x));
	camera.y = Math.max(0,Math.min(T_HEIGHT - camera.height,camera.y));
}

const canvas = new Canvas({ ctx })

function loop(){
	update();
	canvas.render({ player, maze });
	requestAnimationFrame(loop, htmlCanvas);
}

var maze = [
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
	[1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1],
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

const T_WIDTH = maze[0].length * tileSize
const T_HEIGHT = maze.length * tileSize;

let walls = []

for(var row in maze){
    for(var column in maze[row]){
        var tile = maze[row][column];
        if(tile === 1){
            var wall = new Wall({
                x: tileSize*column,
                y: tileSize*row,
                width: tileSize,
                height: tileSize
            })

            walls.push(wall);
        }
    }
}

var img = new Image();
img.src = "img/img.png";

img.addEventListener("load", function() {
	requestAnimationFrame(loop, htmlCanvas);
}, false);


const eventHandler = new EventHandler()