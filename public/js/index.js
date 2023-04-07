/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/Camera.ts":
/*!**********************!*\
  !*** ./ts/Camera.ts ***!
  \**********************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
var Camera = /** @class */ (function () {
    function Camera(_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Camera.prototype.innerLeftBoundary = function () {
        return this.x + (this.width * 0.25);
    };
    Camera.prototype.innerTopBoundary = function () {
        return this.y + (this.height * 0.25);
    };
    Camera.prototype.innerRightBoundary = function () {
        return this.x + (this.width * 0.75);
    };
    Camera.prototype.innerBottomBoundary = function () {
        return this.y + (this.height * 0.75);
    };
    return Camera;
}());



/***/ }),

/***/ "./ts/Canvas.ts":
/*!**********************!*\
  !*** ./ts/Canvas.ts ***!
  \**********************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
var Canvas = /** @class */ (function () {
    function Canvas(_a) {
        var ctx = _a.ctx, maze = _a.maze, width = _a.width, height = _a.height, camera = _a.camera, image = _a.image;
        this.ctx = ctx;
        this.maze = maze;
        this.width = width,
            this.height = height;
        this.camera = camera;
        this.image = image;
    }
    Canvas.prototype.render = function (_a) {
        var _this = this;
        var player = _a.player;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.save();
        this.ctx.translate(-this.camera.x, -this.camera.y);
        this.maze.matrix.forEach(function (row, i) {
            row.forEach(function (column, j) {
                var tile = column;
                var x = j * _this.maze.tileSize;
                var y = i * _this.maze.tileSize;
                _this.ctx.drawImage(_this.image, tile * _this.maze.tileSrcSize, 0, _this.maze.tileSrcSize, _this.maze.tileSrcSize, x, y, _this.maze.tileSize, _this.maze.tileSize);
            });
        });
        //desenha o personagem
        this.ctx.drawImage(this.image, player.srcX, player.srcY, player.width, player.height, player.x, player.y, player.width, player.height);
        this.ctx.restore();
    };
    return Canvas;
}());



/***/ }),

/***/ "./ts/EventHandler.ts":
/*!****************************!*\
  !*** ./ts/EventHandler.ts ***!
  \****************************/
/*! exports provided: EventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return EventHandler; });
var LEFT = 'ArrowLeft';
var UP = 'ArrowUp';
var RIGHT = 'ArrowRight';
var DOWN = 'ArrowDown';
var EventHandler = /** @class */ (function () {
    function EventHandler() {
        window.addEventListener("keydown", this.keydownHandler.bind(this), false);
        window.addEventListener("keyup", this.keyupHandler.bind(this), false);
        this.mvLeft = false;
        this.mvUp = false;
        this.mvRight = false;
        this.mvDown = false;
    }
    EventHandler.prototype.keydownHandler = function (e) {
        switch (e.key) {
            case LEFT:
                this.mvLeft = true;
                break;
            case UP:
                this.mvUp = true;
                break;
            case RIGHT:
                this.mvRight = true;
                break;
            case DOWN:
                this.mvDown = true;
                break;
        }
    };
    EventHandler.prototype.keyupHandler = function (e) {
        switch (e.key) {
            case LEFT:
                this.mvLeft = false;
                break;
            case UP:
                this.mvUp = false;
                break;
            case RIGHT:
                this.mvRight = false;
                break;
            case DOWN:
                this.mvDown = false;
                break;
        }
    };
    return EventHandler;
}());



/***/ }),

/***/ "./ts/Game.ts":
/*!********************!*\
  !*** ./ts/Game.ts ***!
  \********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
var Game = /** @class */ (function () {
    function Game(_a) {
        var player = _a.player, canvas = _a.canvas, maze = _a.maze, eventHandler = _a.eventHandler, camera = _a.camera;
        this.player = player;
        this.canvas = canvas;
        this.maze = maze;
        this.eventHandler = eventHandler;
        this.camera = camera;
    }
    Game.prototype.update = function () {
        var _this = this;
        this.player.move(this.eventHandler.mvLeft, this.eventHandler.mvUp, this.eventHandler.mvRight, this.eventHandler.mvDown);
        this.maze.walls.forEach(function (wall) {
            wall.blockRectangle(_this.player);
        });
        if (this.player.x < this.camera.innerLeftBoundary()) {
            this.camera.x = this.player.x - (this.camera.width * 0.25);
        }
        if (this.player.y < this.camera.innerTopBoundary()) {
            this.camera.y = this.player.y - (this.camera.height * 0.25);
        }
        if (this.player.x + this.player.width > this.camera.innerRightBoundary()) {
            this.camera.x = this.player.x + this.player.width - (this.camera.width * 0.75);
        }
        if (this.player.y + this.player.height > this.camera.innerBottomBoundary()) {
            this.camera.y = this.player.y + this.player.height - (this.camera.height * 0.75);
        }
        this.camera.x = Math.max(0, Math.min(this.maze.width - this.camera.width, this.camera.x));
        this.camera.y = Math.max(0, Math.min(this.maze.height - this.camera.height, this.camera.y));
    };
    Game.prototype.loop = function () {
        this.update();
        this.canvas.render({
            player: this.player
        });
        requestAnimationFrame(this.loop.bind(this));
    };
    return Game;
}());



/***/ }),

/***/ "./ts/Maze.ts":
/*!********************!*\
  !*** ./ts/Maze.ts ***!
  \********************/
/*! exports provided: Maze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Maze", function() { return Maze; });
/* harmony import */ var _Wall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wall */ "./ts/Wall.ts");

var Maze = /** @class */ (function () {
    function Maze(_a) {
        var tileSize = _a.tileSize, tileSrcSize = _a.tileSrcSize;
        this.tileSize = tileSize;
        this.tileSrcSize = tileSrcSize;
        this.matrix = this.generateMatrix();
        this.walls = this.generateWalls();
        this.width = this.matrix[0].length * tileSize;
        this.height = this.matrix.length * tileSize;
    }
    Maze.prototype.generateMatrix = function () {
        return [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];
    };
    Maze.prototype.generateWalls = function () {
        var walls = [];
        for (var row in this.matrix) {
            for (var column in this.matrix[row]) {
                var tile = this.matrix[row][column];
                if (tile === 1) {
                    var wall = new _Wall__WEBPACK_IMPORTED_MODULE_0__["Wall"]({
                        x: this.tileSize * parseInt(column),
                        y: this.tileSize * parseInt(row),
                        width: this.tileSize,
                        height: this.tileSize
                    });
                    walls.push(wall);
                }
            }
        }
        return walls;
    };
    return Maze;
}());



/***/ }),

/***/ "./ts/Player.ts":
/*!**********************!*\
  !*** ./ts/Player.ts ***!
  \**********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height, speed = _a.speed, srcX = _a.srcX, srcY = _a.srcY, countAnim = _a.countAnim, maze = _a.maze;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.srcX = srcX;
        this.srcY = srcY;
        this.countAnim = countAnim;
        this.maze = maze;
    }
    //Método para movimentar o jogador
    Player.prototype.move = function (mvLeft, mvUp, mvRight, mvDown) {
        if (mvLeft && !mvRight) {
            this.x -= this.speed;
            //ajuste de orientação da animação para esquerda
            this.srcY = this.maze.tileSrcSize + this.height * 2;
        }
        else if (mvRight && !mvLeft) {
            this.x += this.speed;
            //ajuste de orientação da animação para direita
            this.srcY = this.maze.tileSrcSize + this.height * 3;
        }
        if (mvUp && !mvDown) {
            this.y -= this.speed;
            //ajuste de orientação da animação para cima
            this.srcY = this.maze.tileSrcSize + this.height * 1;
        }
        else if (mvDown && !mvUp) {
            this.y += this.speed;
            //ajuste de orientação da animação para baixo
            this.srcY = this.maze.tileSrcSize + this.height * 0;
        }
        //processo de animação
        if (mvLeft || mvRight || mvUp || mvDown) {
            this.countAnim++;
            if (this.countAnim >= 40) {
                this.countAnim = 0;
            }
            this.srcX = Math.floor(this.countAnim / 5) * this.width;
        }
        else {
            this.srcX = 0;
            this.countAnim = 0;
        }
    };
    //Método para detectar colisões com paredes
    Player.prototype.collide = function (walls) {
        for (var i in walls) {
            var wall = walls[i];
            if (wall.x < this.x + this.width &&
                wall.x + wall.width > this.x &&
                wall.y < this.y + this.height &&
                wall.y + wall.height > this.y) {
                var distX = (this.x + this.width / 2) - (wall.x + wall.width / 2);
                var distY = (this.y + this.height / 2) - (wall.y + wall.height / 2);
                var overlapX = (this.width + wall.width) / 2 - Math.abs(distX);
                var overlapY = (this.height + wall.height) / 2 - Math.abs(distY);
                if (overlapX > overlapY) {
                    this.y = distY > 0 ? this.y + overlapY : this.y - overlapY;
                }
                else {
                    this.x = distX > 0 ? this.x + overlapX : this.x - overlapX;
                }
            }
        }
    };
    return Player;
}());



/***/ }),

/***/ "./ts/Wall.ts":
/*!********************!*\
  !*** ./ts/Wall.ts ***!
  \********************/
/*! exports provided: Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return Wall; });
var Wall = /** @class */ (function () {
    function Wall(_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Wall.prototype.blockRectangle = function (obj) {
        var distX = (obj.x + obj.width / 2) - (this.x + this.width / 2);
        var distY = (obj.y + obj.height / 2) - (this.y + this.height / 2);
        var sumWidth = (obj.width + this.width) / 2;
        var sumHeight = (obj.height + this.height) / 2;
        if (Math.abs(distX) < sumWidth && Math.abs(distY) < sumHeight) {
            var overlapX = sumWidth - Math.abs(distX);
            var overlapY = sumHeight - Math.abs(distY);
            if (overlapX > overlapY) {
                obj.y = distY > 0 ? obj.y + overlapY : obj.y - overlapY;
            }
            else {
                obj.x = distX > 0 ? obj.x + overlapX : obj.x - overlapX;
            }
        }
    };
    return Wall;
}());



/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera */ "./ts/Camera.ts");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ "./ts/Canvas.ts");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventHandler */ "./ts/EventHandler.ts");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game */ "./ts/Game.ts");
/* harmony import */ var _Maze__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Maze */ "./ts/Maze.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Player */ "./ts/Player.ts");






//Criação das instâncias das entidades
var htmlCanvas = document.querySelector("canvas");
var ctx = htmlCanvas.getContext("2d");
var WIDTH = htmlCanvas.width;
var HEIGHT = htmlCanvas.height;
var TILE_SIZE = 64;
var TILE_SRC_SIZE = 96;
var image = new Image();
image.src = "img/img.png";
var maze = new _Maze__WEBPACK_IMPORTED_MODULE_4__["Maze"]({
    tileSize: TILE_SIZE,
    tileSrcSize: TILE_SRC_SIZE,
});
var player = new _Player__WEBPACK_IMPORTED_MODULE_5__["Player"]({
    x: TILE_SIZE + 2,
    y: TILE_SIZE + 2,
    width: 24,
    height: 32,
    speed: 2,
    srcX: 0,
    srcY: TILE_SRC_SIZE,
    countAnim: 0,
    maze: maze
});
var camera = new _Camera__WEBPACK_IMPORTED_MODULE_0__["Camera"]({
    x: 0,
    y: 0,
    width: WIDTH,
    height: HEIGHT
});
var canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_1__["Canvas"]({
    ctx: ctx,
    maze: maze,
    camera: camera,
    image: image,
    width: WIDTH,
    height: HEIGHT,
});
var eventHandler = new _EventHandler__WEBPACK_IMPORTED_MODULE_2__["EventHandler"]();
var game = new _Game__WEBPACK_IMPORTED_MODULE_3__["Game"]({
    player: player,
    canvas: canvas,
    maze: maze,
    eventHandler: eventHandler,
    camera: camera
});
image.addEventListener("load", function () {
    requestAnimationFrame(game.loop.bind(game));
}, false);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL3RzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi90cy9FdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi90cy9NYXplLnRzIiwid2VicGFjazovLy8uL3RzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi90cy9XYWxsLnRzIiwid2VicGFjazovLy8uL3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0lBT0ksZ0JBQVksRUFBZ0M7WUFBOUIsQ0FBQyxTQUFFLENBQUMsU0FBRSxLQUFLLGFBQUUsTUFBTTtRQUM3QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FB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LENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQzVDLENBQUM7SUFDTixDQUFDO0lBRUQsNEJBQWEsR0FBYjtRQUNJLElBQUksS0FBSyxH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QUFDO0lBQ1AsSUFBSSxFQUFFLGFBQWE7SUFDbkIsU0FBUyxFQUFFLENBQUM7SUFDVCxJQUFJLEVBQUUsSUFBSTtDQUNiLENBQUM7QUFFRixJQUFNLE1BQU0sR0FBRyxJQUFJLDhDQUFNLENBQUM7SUFDdEIsQ0FBQyxFQUFFLENBQUM7SUFDUCxDQUFDLEVBQUUsQ0FBQztJQUNKLEtBQUssRUFBRSxLQUFLO0lBQ1osTUFBTSxFQUFFLE1BQU07Q0FDZCxDQUFDO0FBRUYsSUFBTSxNQUFNLEdBQUcsSUFBSSw4Q0FBTSxDQUFDO0lBQ3RCLEdBQUc7SUFDSCxJQUFJO0lBQ1AsTUFBTTtJQUNOLEtBQUs7SUFDRixLQUFLLEVBQUUsS0FBSztJQUNaLE1BQU0sRUFBRSxNQUFNO0NBQ2pCLENBQUM7QUFHRixJQUFNLFlBQVksR0FBRyxJQUFJLDBEQUFZLEVBQUU7QUFFdkMsSUFBTSxJQUFJLEdBQUcsSUFBSSwwQ0FBSSxDQUFDO0lBQ2xCLE1BQU07SUFDTixNQUFNO0lBQ04sSUFBSTtJQUNQLFlBQVksRUFBRSxZQUFZO0lBQzFCLE1BQU07Q0FDTixDQUFDO0FBRUYsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtJQUM5QixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzdDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvaW5kZXgudHNcIik7XG4iLCJpbnRlcmZhY2UgSUNhbWVyYSB7IFxyXG4gICAgeDogbnVtYmVyLFxyXG4gICAgeTogbnVtYmVyLFxyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmEge1xyXG4gICAgeDogbnVtYmVyXHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcih7IHgsIHksIHdpZHRoLCBoZWlnaHQgfTogSUNhbWVyYSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5uZXJMZWZ0Qm91bmRhcnkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCArICh0aGlzLndpZHRoICogMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5uZXJUb3BCb3VuZGFyeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55ICsgKHRoaXMuaGVpZ2h0ICogMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5uZXJSaWdodEJvdW5kYXJ5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKyAodGhpcy53aWR0aCAqIDAuNzUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlubmVyQm90dG9tQm91bmRhcnkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueSArICh0aGlzLmhlaWdodCAqIDAuNzUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4vQ2FtZXJhXCI7XHJcbmltcG9ydCB7IE1hemUgfSBmcm9tIFwiLi9NYXplXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5cclxuaW50ZXJmYWNlIElDYW52YXMge1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuICAgIG1hemU6IE1hemVcclxuICAgIHdpZHRoOiBudW1iZXJcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbiAgICBjYW1lcmE6IENhbWVyYVxyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIG1hemU6IE1hemVcclxuICAgIHdpZHRoOiBudW1iZXJcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbiAgICBjYW1lcmE6IENhbWVyYVxyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7IGN0eCwgbWF6ZSwgd2lkdGgsIGhlaWdodCwgY2FtZXJhLCBpbWFnZSB9OiBJQ2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLm1hemUgPSBtYXplXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoLCBcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHsgcGxheWVyIH06IHsgcGxheWVyOiBQbGF5ZXIgfSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC10aGlzLmNhbWVyYS54LC10aGlzLmNhbWVyYS55KTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXplLm1hdHJpeC5mb3JFYWNoKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbHVtbiwgaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpbGUgPSBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGogKiB0aGlzLm1hemUudGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IGkgKiB0aGlzLm1hemUudGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUgKiB0aGlzLm1hemUudGlsZVNyY1NpemUsIDAsIHRoaXMubWF6ZS50aWxlU3JjU2l6ZSwgdGhpcy5tYXplLnRpbGVTcmNTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHgsIHksIHRoaXMubWF6ZS50aWxlU2l6ZSwgdGhpcy5tYXplLnRpbGVTaXplXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy9kZXNlbmhhIG8gcGVyc29uYWdlbVxyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAgICAgcGxheWVyLnNyY1gsIHBsYXllci5zcmNZLCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQsXHJcbiAgICAgICAgICAgIHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVyLndpZHRoLCBwbGF5ZXIuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBMRUZUID0gJ0Fycm93TGVmdCdcclxuY29uc3QgVVAgPSAnQXJyb3dVcCdcclxuY29uc3QgUklHSFQgPSAnQXJyb3dSaWdodCdcclxuY29uc3QgRE9XTiA9ICdBcnJvd0Rvd24nXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50SGFuZGxlciB7XHJcblxyXG4gIG12TGVmdDogYm9vbGVhblxyXG4gIG12VXA6IGJvb2xlYW5cclxuICBtdlJpZ2h0OiBib29sZWFuXHJcbiAgbXZEb3duOiBib29sZWFuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bkhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5tdkxlZnQgPSBmYWxzZVxyXG4gICAgdGhpcy5tdlVwID0gZmFsc2VcclxuICAgIHRoaXMubXZSaWdodCA9IGZhbHNlXHJcbiAgICB0aGlzLm12RG93biA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBrZXlkb3duSGFuZGxlcihlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBzd2l0Y2ggKGUua2V5KSB7XHJcbiAgICAgIGNhc2UgTEVGVDpcclxuICAgICAgICB0aGlzLm12TGVmdCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVA6XHJcbiAgICAgICAgdGhpcy5tdlVwID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSSUdIVDpcclxuICAgICAgICB0aGlzLm12UmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV046XHJcbiAgICAgICAgdGhpcy5tdkRvd24gPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5dXBIYW5kbGVyKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgY2FzZSBMRUZUOlxyXG4gICAgICAgIHRoaXMubXZMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVA6XHJcbiAgICAgICAgdGhpcy5tdlVwID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUklHSFQ6XHJcbiAgICAgICAgdGhpcy5tdlJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRE9XTjpcclxuICAgICAgICB0aGlzLm12RG93biA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuL0NhbWVyYVwiO1xyXG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9DYW52YXNcIjtcclxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IE1hemUgfSBmcm9tIFwiLi9NYXplXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5cclxuaW50ZXJmYWNlIElHYW1lIHtcclxuICAgIHBsYXllcjogUGxheWVyXHJcbiAgICBjYW52YXM6IENhbnZhc1xyXG4gICAgbWF6ZTogTWF6ZVxyXG4gICAgZXZlbnRIYW5kbGVyOiBFdmVudEhhbmRsZXJcclxuICAgIGNhbWVyYTogQ2FtZXJhXHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBwbGF5ZXI6IFBsYXllclxyXG4gICAgY2FudmFzOiBDYW52YXNcclxuICAgIG1hemU6IE1hemVcclxuICAgIGV2ZW50SGFuZGxlcjogRXZlbnRIYW5kbGVyXHJcbiAgICBjYW1lcmE6IENhbWVyYVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7IHBsYXllciwgY2FudmFzLCBtYXplLCBldmVudEhhbmRsZXIsIGNhbWVyYSB9OiBJR2FtZSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyXHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcclxuICAgICAgICB0aGlzLm1hemUgPSBtYXplXHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXJcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMucGxheWVyLm1vdmUodGhpcy5ldmVudEhhbmRsZXIubXZMZWZ0LCB0aGlzLmV2ZW50SGFuZGxlci5tdlVwLCB0aGlzLmV2ZW50SGFuZGxlci5tdlJpZ2h0LCB0aGlzLmV2ZW50SGFuZGxlci5tdkRvd24pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubWF6ZS53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xyXG4gICAgICAgICAgICB3YWxsLmJsb2NrUmVjdGFuZ2xlKHRoaXMucGxheWVyKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLnggPCB0aGlzLmNhbWVyYS5pbm5lckxlZnRCb3VuZGFyeSgpKXtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEueCA9IHRoaXMucGxheWVyLnggLSAodGhpcy5jYW1lcmEud2lkdGggKiAwLjI1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIueSA8IHRoaXMuY2FtZXJhLmlubmVyVG9wQm91bmRhcnkoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgPSB0aGlzLnBsYXllci55IC0gKHRoaXMuY2FtZXJhLmhlaWdodCAqIDAuMjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnBsYXllci54ICsgdGhpcy5wbGF5ZXIud2lkdGggPiB0aGlzLmNhbWVyYS5pbm5lclJpZ2h0Qm91bmRhcnkoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggPSB0aGlzLnBsYXllci54ICsgdGhpcy5wbGF5ZXIud2lkdGggLSAodGhpcy5jYW1lcmEud2lkdGggKiAwLjc1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmhlaWdodCA+IHRoaXMuY2FtZXJhLmlubmVyQm90dG9tQm91bmRhcnkoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgPSB0aGlzLnBsYXllci55ICsgdGhpcy5wbGF5ZXIuaGVpZ2h0IC0gKHRoaXMuY2FtZXJhLmhlaWdodCAqIDAuNzUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNhbWVyYS54ID0gTWF0aC5tYXgoMCxNYXRoLm1pbih0aGlzLm1hemUud2lkdGggLSB0aGlzLmNhbWVyYS53aWR0aCwgdGhpcy5jYW1lcmEueCkpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnkgPSBNYXRoLm1heCgwLE1hdGgubWluKHRoaXMubWF6ZS5oZWlnaHQgLSB0aGlzLmNhbWVyYS5oZWlnaHQsIHRoaXMuY2FtZXJhLnkpKTtcclxuICAgIH1cclxuXHJcbiAgICBsb29wKCl7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKVxyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbmRlcih7IFxyXG4gICAgICAgICAgICBwbGF5ZXI6IHRoaXMucGxheWVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFdhbGwgfSBmcm9tIFwiLi9XYWxsXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXplIHtcclxuICAgIHRpbGVTaXplOiBudW1iZXJcclxuICAgIHRpbGVTcmNTaXplOiBudW1iZXJcclxuICAgIG1hdHJpeDogbnVtYmVyW11bXVxyXG4gICAgd2FsbHM6IFdhbGxbXVxyXG4gICAgd2lkdGg6IG51bWJlclxyXG4gICAgaGVpZ2h0OiBudW1iZXJcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7IHRpbGVTaXplLCB0aWxlU3JjU2l6ZSB9OiB7IHRpbGVTaXplOiBudW1iZXIsIHRpbGVTcmNTaXplOiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aWxlU2l6ZVxyXG4gICAgICAgIHRoaXMudGlsZVNyY1NpemUgPSB0aWxlU3JjU2l6ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWF0cml4ID0gdGhpcy5nZW5lcmF0ZU1hdHJpeCgpXHJcbiAgICAgICAgdGhpcy53YWxscyA9IHRoaXMuZ2VuZXJhdGVXYWxscygpXHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1hdHJpeFswXS5sZW5ndGggKiB0aWxlU2l6ZVxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXRyaXgubGVuZ3RoICogdGlsZVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVNYXRyaXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwxLDEsMSwwLDAsMSwwLDAsMCwxLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDAsMCwwLDEsMCwxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDAsMCwwLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwwLDAsMCwxLDAsMCwxLDAsMCwwLDAsMSwwLDAsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDEsMSwxLDEsMSwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwxLDAsMCwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMSwxLDEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDEsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwxLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMSwwLDAsMSwxLDEsMCwxLDEsMSwxLDEsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDEsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMSwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVXYWxscygpIHtcclxuICAgICAgICBsZXQgd2FsbHMgPSBbXVxyXG4gICAgICAgIGZvcihsZXQgcm93IGluIHRoaXMubWF0cml4KXtcclxuICAgICAgICAgICAgZm9yKHZhciBjb2x1bW4gaW4gdGhpcy5tYXRyaXhbcm93XSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGlsZSA9IHRoaXMubWF0cml4W3Jvd11bY29sdW1uXTtcclxuICAgICAgICAgICAgICAgIGlmKHRpbGUgPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3YWxsID0gbmV3IFdhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnRpbGVTaXplICogcGFyc2VJbnQoY29sdW1uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy50aWxlU2l6ZSAqIHBhcnNlSW50KHJvdyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnRpbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMudGlsZVNpemVcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3YWxscy5wdXNoKHdhbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd2FsbHNcclxuICAgIH1cclxufSIsImltcG9ydCB7IE1hemUgfSBmcm9tIFwiLi9NYXplXCI7XHJcbmltcG9ydCB7IFdhbGwgfSBmcm9tIFwiLi9XYWxsXCI7XHJcblxyXG5pbnRlcmZhY2UgSVBsYXllciB7IFxyXG4gICAgeDogbnVtYmVyLFxyXG4gICAgeTogbnVtYmVyLFxyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgc3BlZWQ6IG51bWJlcixcclxuICAgIHNyY1g6IG51bWJlcixcclxuICAgIHNyY1k6IG51bWJlcixcclxuICAgIGNvdW50QW5pbTogbnVtYmVyLFxyXG4gICAgbWF6ZTogTWF6ZVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHNwZWVkOiBudW1iZXI7XHJcbiAgICBzcmNYOiBudW1iZXI7XHJcbiAgICBzcmNZOiBudW1iZXI7XHJcbiAgICBjb3VudEFuaW06IG51bWJlcjtcclxuICAgIG1hemU6IE1hemU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeyB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzcGVlZCwgc3JjWCwgc3JjWSwgY291bnRBbmltLCBtYXplIH06IElQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLnNyY1ggPSBzcmNYO1xyXG4gICAgICAgIHRoaXMuc3JjWSA9IHNyY1k7XHJcbiAgICAgICAgdGhpcy5jb3VudEFuaW0gPSBjb3VudEFuaW07XHJcbiAgICAgICAgdGhpcy5tYXplID0gbWF6ZVxyXG4gICAgfVxyXG5cclxuICAgIC8vTcOpdG9kbyBwYXJhIG1vdmltZW50YXIgbyBqb2dhZG9yXHJcbiAgICBtb3ZlKG12TGVmdDogYm9vbGVhbiwgbXZVcDogYm9vbGVhbiwgbXZSaWdodDogYm9vbGVhbiwgbXZEb3duOiBib29sZWFuKSB7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmIChtdkxlZnQgJiYgIW12UmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIC8vYWp1c3RlIGRlIG9yaWVudGHDp8OjbyBkYSBhbmltYcOnw6NvIHBhcmEgZXNxdWVyZGFcclxuICAgICAgICAgICAgdGhpcy5zcmNZID0gdGhpcy5tYXplLnRpbGVTcmNTaXplICsgdGhpcy5oZWlnaHQgKiAyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobXZSaWdodCAmJiAhbXZMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAvL2FqdXN0ZSBkZSBvcmllbnRhw6fDo28gZGEgYW5pbWHDp8OjbyBwYXJhIGRpcmVpdGFcclxuICAgICAgICAgICAgdGhpcy5zcmNZID0gdGhpcy5tYXplLnRpbGVTcmNTaXplICsgdGhpcy5oZWlnaHQgKiAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobXZVcCAmJiAhbXZEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAvL2FqdXN0ZSBkZSBvcmllbnRhw6fDo28gZGEgYW5pbWHDp8OjbyBwYXJhIGNpbWFcclxuICAgICAgICAgICAgdGhpcy5zcmNZID0gdGhpcy5tYXplLnRpbGVTcmNTaXplICsgdGhpcy5oZWlnaHQgKiAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobXZEb3duICYmICFtdlVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAvL2FqdXN0ZSBkZSBvcmllbnRhw6fDo28gZGEgYW5pbWHDp8OjbyBwYXJhIGJhaXhvXHJcbiAgICAgICAgICAgIHRoaXMuc3JjWSA9IHRoaXMubWF6ZS50aWxlU3JjU2l6ZSArIHRoaXMuaGVpZ2h0ICogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vcHJvY2Vzc28gZGUgYW5pbWHDp8Ojb1xyXG4gICAgICAgIGlmIChtdkxlZnQgfHwgbXZSaWdodCB8fCBtdlVwIHx8IG12RG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50QW5pbSsrO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY291bnRBbmltID49IDQwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50QW5pbSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3JjWCA9IE1hdGguZmxvb3IodGhpcy5jb3VudEFuaW0gLyA1KSAqIHRoaXMud2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zcmNYID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jb3VudEFuaW0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL03DqXRvZG8gcGFyYSBkZXRlY3RhciBjb2xpc8O1ZXMgY29tIHBhcmVkZXNcclxuICAgIGNvbGxpZGUod2FsbHM6IFdhbGxbXSkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gd2FsbHMpIHtcclxuICAgICAgICAgICAgdmFyIHdhbGwgPSB3YWxsc1tpXTtcclxuICAgICAgICAgICAgaWYgKHdhbGwueCA8IHRoaXMueCArIHRoaXMud2lkdGggJiZcclxuICAgICAgICAgICAgICAgIHdhbGwueCArIHdhbGwud2lkdGggPiB0aGlzLnggJiZcclxuICAgICAgICAgICAgICAgIHdhbGwueSA8IHRoaXMueSArIHRoaXMuaGVpZ2h0ICYmXHJcbiAgICAgICAgICAgICAgICB3YWxsLnkgKyB3YWxsLmhlaWdodCA+IHRoaXMueSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpc3RYID0gKHRoaXMueCArIHRoaXMud2lkdGggLyAyKSAtICh3YWxsLnggKyB3YWxsLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlzdFkgPSAodGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyKSAtICh3YWxsLnkgKyB3YWxsLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG92ZXJsYXBYID0gKHRoaXMud2lkdGggKyB3YWxsLndpZHRoKSAvIDIgLSBNYXRoLmFicyhkaXN0WCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcFkgPSAodGhpcy5oZWlnaHQgKyB3YWxsLmhlaWdodCkgLyAyIC0gTWF0aC5hYnMoZGlzdFkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvdmVybGFwWCA+IG92ZXJsYXBZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gZGlzdFkgPiAwID8gdGhpcy55ICsgb3ZlcmxhcFkgOiB0aGlzLnkgLSBvdmVybGFwWTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gZGlzdFggPiAwID8gdGhpcy54ICsgb3ZlcmxhcFggOiB0aGlzLnggLSBvdmVybGFwWDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vQ2xhc3NlIHBhcmEgcmVwcmVzZW50YXIgYXMgcGFyZWRlcyBkbyBsYWJpcmludG9cclxuaW50ZXJmYWNlIElXYWxsIHtcclxuICAgIHg6IG51bWJlclxyXG4gICAgeTogbnVtYmVyXHJcbiAgICB3aWR0aDogbnVtYmVyXHJcbiAgICBoZWlnaHQ6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2FsbCB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH06IElXYWxsKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBibG9ja1JlY3RhbmdsZShvYmo6IGFueSl7XHJcbiAgICAgICAgdmFyIGRpc3RYID0gKG9iai54ICsgb2JqLndpZHRoLzIpIC0gKHRoaXMueCArIHRoaXMud2lkdGgvMik7XHJcbiAgICAgICAgdmFyIGRpc3RZID0gKG9iai55ICsgb2JqLmhlaWdodC8yKSAtICh0aGlzLnkgKyB0aGlzLmhlaWdodC8yKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgc3VtV2lkdGggPSAob2JqLndpZHRoICsgdGhpcy53aWR0aCkvMjtcclxuICAgICAgICB2YXIgc3VtSGVpZ2h0ID0gKG9iai5oZWlnaHQgKyB0aGlzLmhlaWdodCkvMjtcclxuICAgICAgICBcclxuICAgICAgICBpZihNYXRoLmFicyhkaXN0WCkgPCBzdW1XaWR0aCAmJiBNYXRoLmFicyhkaXN0WSkgPCBzdW1IZWlnaHQpe1xyXG4gICAgICAgICAgICB2YXIgb3ZlcmxhcFggPSBzdW1XaWR0aCAtIE1hdGguYWJzKGRpc3RYKTtcclxuICAgICAgICAgICAgdmFyIG92ZXJsYXBZID0gc3VtSGVpZ2h0IC0gTWF0aC5hYnMoZGlzdFkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYob3ZlcmxhcFggPiBvdmVybGFwWSl7XHJcbiAgICAgICAgICAgICAgICBvYmoueSA9IGRpc3RZID4gMCA/IG9iai55ICsgb3ZlcmxhcFkgOiBvYmoueSAtIG92ZXJsYXBZO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqLnggPSBkaXN0WCA+IDAgPyBvYmoueCArIG92ZXJsYXBYIDogb2JqLnggLSBvdmVybGFwWDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuL0NhbWVyYVwiO1xyXG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9DYW52YXNcIjtcclxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XHJcbmltcG9ydCB7IE1hemUgfSBmcm9tIFwiLi9NYXplXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5cclxuLy9Dcmlhw6fDo28gZGFzIGluc3TDom5jaWFzIGRhcyBlbnRpZGFkZXNcclxuY29uc3QgaHRtbENhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnRcclxuY29uc3QgY3R4ID0gaHRtbENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXHJcblxyXG5jb25zdCBXSURUSCA9IGh0bWxDYW52YXMud2lkdGhcclxuY29uc3QgSEVJR0hUID0gaHRtbENhbnZhcy5oZWlnaHRcclxuY29uc3QgVElMRV9TSVpFID0gNjQ7XHJcbmNvbnN0IFRJTEVfU1JDX1NJWkUgPSA5NjtcclxuXHJcbmNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbmltYWdlLnNyYyA9IFwiaW1nL2ltZy5wbmdcIjtcclxuXHJcbmNvbnN0IG1hemUgPSBuZXcgTWF6ZSh7XHJcbiAgICB0aWxlU2l6ZTogVElMRV9TSVpFLFxyXG4gICAgdGlsZVNyY1NpemU6IFRJTEVfU1JDX1NJWkUsXHJcbn0pXHJcblxyXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHtcclxuXHR4OiBUSUxFX1NJWkUgKyAyLFxyXG5cdHk6IFRJTEVfU0laRSArIDIsXHJcblx0d2lkdGg6IDI0LFxyXG5cdGhlaWdodDogMzIsXHJcblx0c3BlZWQ6IDIsXHJcblx0c3JjWDogMCxcclxuXHRzcmNZOiBUSUxFX1NSQ19TSVpFLFxyXG5cdGNvdW50QW5pbTogMCxcclxuICAgIG1hemU6IG1hemVcclxufSlcclxuXHJcbmNvbnN0IGNhbWVyYSA9IG5ldyBDYW1lcmEoe1xyXG4gICAgeDogMCxcclxuXHR5OiAwLFxyXG5cdHdpZHRoOiBXSURUSCxcclxuXHRoZWlnaHQ6IEhFSUdIVFxyXG59KVxyXG5cclxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcyh7IFxyXG4gICAgY3R4LCBcclxuICAgIG1hemUsIFxyXG5cdGNhbWVyYSxcclxuXHRpbWFnZSxcclxuICAgIHdpZHRoOiBXSURUSCwgXHJcbiAgICBoZWlnaHQ6IEhFSUdIVCxcclxufSlcclxuXHJcblxyXG5jb25zdCBldmVudEhhbmRsZXIgPSBuZXcgRXZlbnRIYW5kbGVyKClcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSh7IFxyXG4gICAgcGxheWVyLCBcclxuICAgIGNhbnZhcywgXHJcbiAgICBtYXplLFxyXG5cdGV2ZW50SGFuZGxlcjogZXZlbnRIYW5kbGVyLFxyXG5cdGNhbWVyYVxyXG59KVxyXG5cclxuaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWUubG9vcC5iaW5kKGdhbWUpKTtcclxufSwgZmFsc2UpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==