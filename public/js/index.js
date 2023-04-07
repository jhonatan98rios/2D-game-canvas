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
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
htmlCanvas.width = window.innerWidth - 16;
htmlCanvas.height = window.innerHeight - 16;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL3RzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi90cy9FdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi90cy9NYXplLnRzIiwid2VicGFjazovLy8uL3RzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi90cy9XYWxsLnRzIiwid2VicGFjazovLy8uL3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0lBT0ksZ0JBQVksRUFBZ0M7WUFBOUIsQ0FBQyxTQUFFLENBQUMsU0FBRSxLQUFLLGFBQUUsTUFBTTtRQUM3QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFpQixHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGlDQUFnQixHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELG1DQUFrQixHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELG9DQUFtQixHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUFBO0FBQUE7SUFRSSxnQkFBWSxFQUFvRDtZQUFsRCxHQUFHLFdBQUUsSUFBSSxZQUFFLEtBQUssYUFBRSxNQUFNLGNBQUUsTUFBTSxjQUFFLEtBQUs7UUFDakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztJQUN0QixDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEVBQThCO1FBQXJDLGlCQTJCQztZQTNCUSxNQUFNO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFFL0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ2QsS0FBSSxDQUFDLEtBQUssRUFDVixJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUM3RSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUMvQztZQUNMLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztRQUVGLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FDZCxJQUFJLENBQUMsS0FBSyxFQUNWLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQ3JELE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQ2xELENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMxREQ7QUFBQTtBQUFBLElBQU0sSUFBSSxHQUFHLFdBQVc7QUFDeEIsSUFBTSxFQUFFLEdBQUcsU0FBUztBQUNwQixJQUFNLEtBQUssR0FBRyxZQUFZO0FBQzFCLElBQU0sSUFBSSxHQUFHLFdBQVc7QUFHeEI7SUFPRTtRQUNFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUs7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUs7SUFDckIsQ0FBQztJQUVELHFDQUFjLEdBQWQsVUFBZSxDQUFnQjtRQUM3QixRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDYixLQUFLLElBQUk7Z0JBQ1AsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLE1BQU07WUFDUixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLE1BQU07WUFDUixLQUFLLElBQUk7Z0JBQ1AsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLE1BQU07U0FDVDtJQUNILENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsQ0FBZ0I7UUFDM0IsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ2IsS0FBSyxJQUFJO2dCQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixNQUFNO1lBQ1IsS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUNsQixNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixNQUFNO1lBQ1IsS0FBSyxJQUFJO2dCQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzFDRDtBQUFBO0FBQUE7SUFPSSxjQUFZLEVBQXFEO1lBQW5ELE1BQU0sY0FBRSxNQUFNLGNBQUUsSUFBSSxZQUFFLFlBQVksb0JBQUUsTUFBTTtRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVk7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNO0lBQ3hCLENBQUM7SUFFRCxxQkFBTSxHQUFOO1FBQUEsaUJBc0JDO1FBckJHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBRXZILElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFJO1lBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQztRQUVGLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDOUQ7UUFDRCxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsRUFBQztZQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLEVBQUM7WUFDcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNsRjtRQUNELElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxFQUFDO1lBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDcEY7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsbUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN0QixDQUFDLENBQUM7UUFDSCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM1REQ7QUFBQTtBQUFBO0FBQTZCO0FBRTdCO0lBUUksY0FBWSxFQUFvRTtZQUFsRSxRQUFRLGdCQUFFLFdBQVc7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVztRQUU5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBRWpDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBUTtRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLE9BQU87WUFDSCxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFD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QUFDO0FBRUYsSUFBTSxNQUFNLEdBQUcsSUFBSSw4Q0FBTSxDQUFDO0lBQ3RCLEdBQUc7SUFDSCxJQUFJO0lBQ1AsTUFBTTtJQUNOLEtBQUs7SUFDRixLQUFLLEVBQUUsS0FBSztJQUNaLE1BQU0sRUFBRSxNQUFNO0NBQ2pCLENBQUM7QUFHRixJQUFNLFlBQVksR0FBRyxJQUFJLDBEQUFZLEVBQUU7QUFFdkMsSUFBTSxJQUFJLEdBQUcsSUFBSSwwQ0FBSSxDQUFDO0lBQ2xCLE1BQU07SUFDTixNQUFNO0lBQ04sSUFBSTtJQUNQLFlBQVksRUFBRSxZQUFZO0lBQzFCLE1BQU07Q0FDTixDQUFDO0FBRUYsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtJQUM5QixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzdDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvaW5kZXgudHNcIik7XG4iLCJpbnRlcmZhY2UgSUNhbWVyYSB7IFxyXG4gICAgeDogbnVtYmVyLFxyXG4gICAgeTogbnVtYmVyLFxyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmEge1xyXG4gICAgeDogbnVtYmVyXHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcih7IHgsIHksIHdpZHRoLCBoZWlnaHQgfTogSUNhbWVyYSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5uZXJMZWZ0Qm91bmRhcnkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCArICh0aGlzLndpZHRoICogMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5uZXJUb3BCb3VuZGFyeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55ICsgKHRoaXMuaGVpZ2h0ICogMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5uZXJSaWdodEJvdW5kYXJ5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKyAodGhpcy53aWR0aCAqIDAuNzUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlubmVyQm90dG9tQm91bmRhcnkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueSArICh0aGlzLmhlaWdodCAqIDAuNzUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4vQ2FtZXJhXCI7XHJcbmltcG9ydCB7IE1hemUgfSBmcm9tIFwiLi9NYXplXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5cclxuaW50ZXJmYWNlIElDYW52YXMge1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuICAgIG1hemU6IE1hemVcclxuICAgIHdpZHRoOiBudW1iZXJcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbiAgICBjYW1lcmE6IENhbWVyYVxyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIG1hemU6IE1hemVcclxuICAgIHdpZHRoOiBudW1iZXJcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbiAgICBjYW1lcmE6IENhbWVyYVxyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7IGN0eCwgbWF6ZSwgd2lkdGgsIGhlaWdodCwgY2FtZXJhLCBpbWFnZSB9OiBJQ2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLm1hemUgPSBtYXplXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoLCBcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHsgcGxheWVyIH06IHsgcGxheWVyOiBQbGF5ZXIgfSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC10aGlzLmNhbWVyYS54LC10aGlzLmNhbWVyYS55KTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXplLm1hdHJpeC5mb3JFYWNoKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbHVtbiwgaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpbGUgPSBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGogKiB0aGlzLm1hemUudGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IGkgKiB0aGlzLm1hemUudGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUgKiB0aGlzLm1hemUudGlsZVNyY1NpemUsIDAsIHRoaXMubWF6ZS50aWxlU3JjU2l6ZSwgdGhpcy5tYXplLnRpbGVTcmNTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHgsIHksIHRoaXMubWF6ZS50aWxlU2l6ZSwgdGhpcy5tYXplLnRpbGVTaXplXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy9kZXNlbmhhIG8gcGVyc29uYWdlbVxyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAgICAgcGxheWVyLnNyY1gsIHBsYXllci5zcmNZLCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQsXHJcbiAgICAgICAgICAgIHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVyLndpZHRoLCBwbGF5ZXIuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBMRUZUID0gJ0Fycm93TGVmdCdcclxuY29uc3QgVVAgPSAnQXJyb3dVcCdcclxuY29uc3QgUklHSFQgPSAnQXJyb3dSaWdodCdcclxuY29uc3QgRE9XTiA9ICdBcnJvd0Rvd24nXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50SGFuZGxlciB7XHJcblxyXG4gIG12TGVmdDogYm9vbGVhblxyXG4gIG12VXA6IGJvb2xlYW5cclxuICBtdlJpZ2h0OiBib29sZWFuXHJcbiAgbXZEb3duOiBib29sZWFuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bkhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5tdkxlZnQgPSBmYWxzZVxyXG4gICAgdGhpcy5tdlVwID0gZmFsc2VcclxuICAgIHRoaXMubXZSaWdodCA9IGZhbHNlXHJcbiAgICB0aGlzLm12RG93biA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBrZXlkb3duSGFuZGxlcihlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBzd2l0Y2ggKGUua2V5KSB7XHJcbiAgICAgIGNhc2UgTEVGVDpcclxuICAgICAgICB0aGlzLm12TGVmdCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVA6XHJcbiAgICAgICAgdGhpcy5tdlVwID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSSUdIVDpcclxuICAgICAgICB0aGlzLm12UmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV046XHJcbiAgICAgICAgdGhpcy5tdkRvd24gPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5dXBIYW5kbGVyKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgY2FzZSBMRUZUOlxyXG4gICAgICAgIHRoaXMubXZMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVA6XHJcbiAgICAgICAgdGhpcy5tdlVwID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUklHSFQ6XHJcbiAgICAgICAgdGhpcy5tdlJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRE9XTjpcclxuICAgICAgICB0aGlzLm12RG93biA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuL0NhbWVyYVwiO1xyXG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9DYW52YXNcIjtcclxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IE1hemUgfSBmcm9tIFwiLi9NYXplXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5cclxuaW50ZXJmYWNlIElHYW1lIHtcclxuICAgIHBsYXllcjogUGxheWVyXHJcbiAgICBjYW52YXM6IENhbnZhc1xyXG4gICAgbWF6ZTogTWF6ZVxyXG4gICAgZXZlbnRIYW5kbGVyOiBFdmVudEhhbmRsZXJcclxuICAgIGNhbWVyYTogQ2FtZXJhXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIHBsYXllcjogUGxheWVyXHJcbiAgICBjYW52YXM6IENhbnZhc1xyXG4gICAgbWF6ZTogTWF6ZVxyXG4gICAgZXZlbnRIYW5kbGVyOiBFdmVudEhhbmRsZXJcclxuICAgIGNhbWVyYTogQ2FtZXJhXHJcblxyXG4gICAgY29uc3RydWN0b3IoeyBwbGF5ZXIsIGNhbnZhcywgbWF6ZSwgZXZlbnRIYW5kbGVyLCBjYW1lcmEgfTogSUdhbWUpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllclxyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXHJcbiAgICAgICAgdGhpcy5tYXplID0gbWF6ZVxyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICB0aGlzLnBsYXllci5tb3ZlKHRoaXMuZXZlbnRIYW5kbGVyLm12TGVmdCwgdGhpcy5ldmVudEhhbmRsZXIubXZVcCwgdGhpcy5ldmVudEhhbmRsZXIubXZSaWdodCwgdGhpcy5ldmVudEhhbmRsZXIubXZEb3duKVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLm1hemUud2FsbHMuZm9yRWFjaCh3YWxsID0+IHtcclxuICAgICAgICAgICAgd2FsbC5ibG9ja1JlY3RhbmdsZSh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnBsYXllci54IDwgdGhpcy5jYW1lcmEuaW5uZXJMZWZ0Qm91bmRhcnkoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggPSB0aGlzLnBsYXllci54IC0gKHRoaXMuY2FtZXJhLndpZHRoICogMC4yNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLnkgPCB0aGlzLmNhbWVyYS5pbm5lclRvcEJvdW5kYXJ5KCkpe1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS55ID0gdGhpcy5wbGF5ZXIueSAtICh0aGlzLmNhbWVyYS5oZWlnaHQgKiAwLjI1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLndpZHRoID4gdGhpcy5jYW1lcmEuaW5uZXJSaWdodEJvdW5kYXJ5KCkpe1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS54ID0gdGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLndpZHRoIC0gKHRoaXMuY2FtZXJhLndpZHRoICogMC43NSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5oZWlnaHQgPiB0aGlzLmNhbWVyYS5pbm5lckJvdHRvbUJvdW5kYXJ5KCkpe1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS55ID0gdGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmhlaWdodCAtICh0aGlzLmNhbWVyYS5oZWlnaHQgKiAwLjc1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYW1lcmEueCA9IE1hdGgubWF4KDAsTWF0aC5taW4odGhpcy5tYXplLndpZHRoIC0gdGhpcy5jYW1lcmEud2lkdGgsIHRoaXMuY2FtZXJhLngpKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS55ID0gTWF0aC5tYXgoMCxNYXRoLm1pbih0aGlzLm1hemUuaGVpZ2h0IC0gdGhpcy5jYW1lcmEuaGVpZ2h0LCB0aGlzLmNhbWVyYS55KSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9vcCgpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlKClcclxuICAgICAgICB0aGlzLmNhbnZhcy5yZW5kZXIoeyBcclxuICAgICAgICAgICAgcGxheWVyOiB0aGlzLnBsYXllclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBXYWxsIH0gZnJvbSBcIi4vV2FsbFwiXHJcblxyXG5leHBvcnQgY2xhc3MgTWF6ZSB7XHJcbiAgICB0aWxlU2l6ZTogbnVtYmVyXHJcbiAgICB0aWxlU3JjU2l6ZTogbnVtYmVyXHJcbiAgICBtYXRyaXg6IG51bWJlcltdW11cclxuICAgIHdhbGxzOiBXYWxsW11cclxuICAgIHdpZHRoOiBudW1iZXJcclxuICAgIGhlaWdodDogbnVtYmVyXHJcblxyXG4gICAgY29uc3RydWN0b3IoeyB0aWxlU2l6ZSwgdGlsZVNyY1NpemUgfTogeyB0aWxlU2l6ZTogbnVtYmVyLCB0aWxlU3JjU2l6ZTogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLnRpbGVTaXplID0gdGlsZVNpemVcclxuICAgICAgICB0aGlzLnRpbGVTcmNTaXplID0gdGlsZVNyY1NpemVcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IHRoaXMuZ2VuZXJhdGVNYXRyaXgoKVxyXG4gICAgICAgIHRoaXMud2FsbHMgPSB0aGlzLmdlbmVyYXRlV2FsbHMoKVxyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tYXRyaXhbMF0ubGVuZ3RoICogdGlsZVNpemVcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWF0cml4Lmxlbmd0aCAqIHRpbGVTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlTWF0cml4KCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMSwxLDEsMCwwLDEsMCwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwwLDAsMCwxLDAsMSwxLDEsMSwxLDEsMCwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwwLDAsMCwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMCwwLDAsMSwwLDAsMSwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwxLDEsMSwxLDEsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDEsMSwxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwxLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMSwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDEsMCwwLDEsMSwxLDAsMSwxLDEsMSwxLDAsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwxLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDEsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlV2FsbHMoKSB7XHJcbiAgICAgICAgbGV0IHdhbGxzID0gW11cclxuICAgICAgICBmb3IobGV0IHJvdyBpbiB0aGlzLm1hdHJpeCl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgY29sdW1uIGluIHRoaXMubWF0cml4W3Jvd10pe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpbGUgPSB0aGlzLm1hdHJpeFtyb3ddW2NvbHVtbl07XHJcbiAgICAgICAgICAgICAgICBpZih0aWxlID09PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2FsbCA9IG5ldyBXYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy50aWxlU2l6ZSAqIHBhcnNlSW50KGNvbHVtbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMudGlsZVNpemUgKiBwYXJzZUludChyb3cpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy50aWxlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnRpbGVTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2FsbHMucHVzaCh3YWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdhbGxzXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNYXplIH0gZnJvbSBcIi4vTWF6ZVwiO1xyXG5pbXBvcnQgeyBXYWxsIH0gZnJvbSBcIi4vV2FsbFwiO1xyXG5cclxuaW50ZXJmYWNlIElQbGF5ZXIgeyBcclxuICAgIHg6IG51bWJlcixcclxuICAgIHk6IG51bWJlcixcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgIHNwZWVkOiBudW1iZXIsXHJcbiAgICBzcmNYOiBudW1iZXIsXHJcbiAgICBzcmNZOiBudW1iZXIsXHJcbiAgICBjb3VudEFuaW06IG51bWJlcixcclxuICAgIG1hemU6IE1hemVcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG4gICAgc3JjWDogbnVtYmVyO1xyXG4gICAgc3JjWTogbnVtYmVyO1xyXG4gICAgY291bnRBbmltOiBudW1iZXI7XHJcbiAgICBtYXplOiBNYXplO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHsgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3BlZWQsIHNyY1gsIHNyY1ksIGNvdW50QW5pbSwgbWF6ZSB9OiBJUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5zcmNYID0gc3JjWDtcclxuICAgICAgICB0aGlzLnNyY1kgPSBzcmNZO1xyXG4gICAgICAgIHRoaXMuY291bnRBbmltID0gY291bnRBbmltO1xyXG4gICAgICAgIHRoaXMubWF6ZSA9IG1hemVcclxuICAgIH1cclxuXHJcbiAgICAvL03DqXRvZG8gcGFyYSBtb3ZpbWVudGFyIG8gam9nYWRvclxyXG4gICAgbW92ZShtdkxlZnQ6IGJvb2xlYW4sIG12VXA6IGJvb2xlYW4sIG12UmlnaHQ6IGJvb2xlYW4sIG12RG93bjogYm9vbGVhbikge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZiAobXZMZWZ0ICYmICFtdlJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAvL2FqdXN0ZSBkZSBvcmllbnRhw6fDo28gZGEgYW5pbWHDp8OjbyBwYXJhIGVzcXVlcmRhXHJcbiAgICAgICAgICAgIHRoaXMuc3JjWSA9IHRoaXMubWF6ZS50aWxlU3JjU2l6ZSArIHRoaXMuaGVpZ2h0ICogMjtcclxuICAgICAgICB9IGVsc2UgaWYgKG12UmlnaHQgJiYgIW12TGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgLy9hanVzdGUgZGUgb3JpZW50YcOnw6NvIGRhIGFuaW1hw6fDo28gcGFyYSBkaXJlaXRhXHJcbiAgICAgICAgICAgIHRoaXMuc3JjWSA9IHRoaXMubWF6ZS50aWxlU3JjU2l6ZSArIHRoaXMuaGVpZ2h0ICogMztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG12VXAgJiYgIW12RG93bikge1xyXG4gICAgICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgLy9hanVzdGUgZGUgb3JpZW50YcOnw6NvIGRhIGFuaW1hw6fDo28gcGFyYSBjaW1hXHJcbiAgICAgICAgICAgIHRoaXMuc3JjWSA9IHRoaXMubWF6ZS50aWxlU3JjU2l6ZSArIHRoaXMuaGVpZ2h0ICogMTtcclxuICAgICAgICB9IGVsc2UgaWYgKG12RG93biAmJiAhbXZVcCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgLy9hanVzdGUgZGUgb3JpZW50YcOnw6NvIGRhIGFuaW1hw6fDo28gcGFyYSBiYWl4b1xyXG4gICAgICAgICAgICB0aGlzLnNyY1kgPSB0aGlzLm1hemUudGlsZVNyY1NpemUgKyB0aGlzLmhlaWdodCAqIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3Byb2Nlc3NvIGRlIGFuaW1hw6fDo29cclxuICAgICAgICBpZiAobXZMZWZ0IHx8IG12UmlnaHQgfHwgbXZVcCB8fCBtdkRvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudEFuaW0rKztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50QW5pbSA+PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudEFuaW0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNyY1ggPSBNYXRoLmZsb29yKHRoaXMuY291bnRBbmltIC8gNSkgKiB0aGlzLndpZHRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3JjWCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRBbmltID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9Nw6l0b2RvIHBhcmEgZGV0ZWN0YXIgY29saXPDtWVzIGNvbSBwYXJlZGVzXHJcbiAgICBjb2xsaWRlKHdhbGxzOiBXYWxsW10pIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHdhbGxzKSB7XHJcbiAgICAgICAgICAgIHZhciB3YWxsID0gd2FsbHNbaV07XHJcbiAgICAgICAgICAgIGlmICh3YWxsLnggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmXHJcbiAgICAgICAgICAgICAgICB3YWxsLnggKyB3YWxsLndpZHRoID4gdGhpcy54ICYmXHJcbiAgICAgICAgICAgICAgICB3YWxsLnkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJlxyXG4gICAgICAgICAgICAgICAgd2FsbC55ICsgd2FsbC5oZWlnaHQgPiB0aGlzLnkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkaXN0WCA9ICh0aGlzLnggKyB0aGlzLndpZHRoIC8gMikgLSAod2FsbC54ICsgd2FsbC53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpc3RZID0gKHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMikgLSAod2FsbC55ICsgd2FsbC5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwWCA9ICh0aGlzLndpZHRoICsgd2FsbC53aWR0aCkgLyAyIC0gTWF0aC5hYnMoZGlzdFgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG92ZXJsYXBZID0gKHRoaXMuaGVpZ2h0ICsgd2FsbC5oZWlnaHQpIC8gMiAtIE1hdGguYWJzKGRpc3RZKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcFggPiBvdmVybGFwWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IGRpc3RZID4gMCA/IHRoaXMueSArIG92ZXJsYXBZIDogdGhpcy55IC0gb3ZlcmxhcFk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IGRpc3RYID4gMCA/IHRoaXMueCArIG92ZXJsYXBYIDogdGhpcy54IC0gb3ZlcmxhcFg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL0NsYXNzZSBwYXJhIHJlcHJlc2VudGFyIGFzIHBhcmVkZXMgZG8gbGFiaXJpbnRvXHJcbmludGVyZmFjZSBJV2FsbCB7XHJcbiAgICB4OiBudW1iZXJcclxuICAgIHk6IG51bWJlclxyXG4gICAgd2lkdGg6IG51bWJlclxyXG4gICAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdhbGwge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9OiBJV2FsbCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYmxvY2tSZWN0YW5nbGUob2JqOiBhbnkpe1xyXG4gICAgICAgIHZhciBkaXN0WCA9IChvYmoueCArIG9iai53aWR0aC8yKSAtICh0aGlzLnggKyB0aGlzLndpZHRoLzIpO1xyXG4gICAgICAgIHZhciBkaXN0WSA9IChvYmoueSArIG9iai5oZWlnaHQvMikgLSAodGhpcy55ICsgdGhpcy5oZWlnaHQvMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHN1bVdpZHRoID0gKG9iai53aWR0aCArIHRoaXMud2lkdGgpLzI7XHJcbiAgICAgICAgdmFyIHN1bUhlaWdodCA9IChvYmouaGVpZ2h0ICsgdGhpcy5oZWlnaHQpLzI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoTWF0aC5hYnMoZGlzdFgpIDwgc3VtV2lkdGggJiYgTWF0aC5hYnMoZGlzdFkpIDwgc3VtSGVpZ2h0KXtcclxuICAgICAgICAgICAgdmFyIG92ZXJsYXBYID0gc3VtV2lkdGggLSBNYXRoLmFicyhkaXN0WCk7XHJcbiAgICAgICAgICAgIHZhciBvdmVybGFwWSA9IHN1bUhlaWdodCAtIE1hdGguYWJzKGRpc3RZKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKG92ZXJsYXBYID4gb3ZlcmxhcFkpe1xyXG4gICAgICAgICAgICAgICAgb2JqLnkgPSBkaXN0WSA+IDAgPyBvYmoueSArIG92ZXJsYXBZIDogb2JqLnkgLSBvdmVybGFwWTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iai54ID0gZGlzdFggPiAwID8gb2JqLnggKyBvdmVybGFwWCA6IG9iai54IC0gb3ZlcmxhcFg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi9DYW1lcmFcIjtcclxuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vQ2FudmFzXCI7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0V2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vR2FtZVwiO1xyXG5pbXBvcnQgeyBNYXplIH0gZnJvbSBcIi4vTWF6ZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuXHJcbi8vQ3JpYcOnw6NvIGRhcyBpbnN0w6JuY2lhcyBkYXMgZW50aWRhZGVzXHJcbmNvbnN0IGh0bWxDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50XHJcbmh0bWxDYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDE2XHJcbmh0bWxDYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMTZcclxuXHJcbmNvbnN0IGN0eCA9IGh0bWxDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxyXG5cclxuY29uc3QgV0lEVEggPSBodG1sQ2FudmFzLndpZHRoXHJcbmNvbnN0IEhFSUdIVCA9IGh0bWxDYW52YXMuaGVpZ2h0XHJcbmNvbnN0IFRJTEVfU0laRSA9IDY0O1xyXG5jb25zdCBUSUxFX1NSQ19TSVpFID0gOTY7XHJcblxyXG5jb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5pbWFnZS5zcmMgPSBcImltZy9pbWcucG5nXCI7XHJcblxyXG5jb25zdCBtYXplID0gbmV3IE1hemUoe1xyXG4gICAgdGlsZVNpemU6IFRJTEVfU0laRSxcclxuICAgIHRpbGVTcmNTaXplOiBUSUxFX1NSQ19TSVpFLFxyXG59KVxyXG5cclxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcih7XHJcblx0eDogVElMRV9TSVpFICsgMixcclxuXHR5OiBUSUxFX1NJWkUgKyAyLFxyXG5cdHdpZHRoOiAyNCxcclxuXHRoZWlnaHQ6IDMyLFxyXG5cdHNwZWVkOiAyLFxyXG5cdHNyY1g6IDAsXHJcblx0c3JjWTogVElMRV9TUkNfU0laRSxcclxuXHRjb3VudEFuaW06IDAsXHJcbiAgICBtYXplOiBtYXplXHJcbn0pXHJcblxyXG5jb25zdCBjYW1lcmEgPSBuZXcgQ2FtZXJhKHtcclxuICAgIHg6IDAsXHJcblx0eTogMCxcclxuXHR3aWR0aDogV0lEVEgsXHJcblx0aGVpZ2h0OiBIRUlHSFRcclxufSlcclxuXHJcbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoeyBcclxuICAgIGN0eCwgXHJcbiAgICBtYXplLCBcclxuXHRjYW1lcmEsXHJcblx0aW1hZ2UsXHJcbiAgICB3aWR0aDogV0lEVEgsIFxyXG4gICAgaGVpZ2h0OiBIRUlHSFQsXHJcbn0pXHJcblxyXG5cclxuY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcigpXHJcblxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoeyBcclxuICAgIHBsYXllciwgXHJcbiAgICBjYW52YXMsIFxyXG4gICAgbWF6ZSxcclxuXHRldmVudEhhbmRsZXI6IGV2ZW50SGFuZGxlcixcclxuXHRjYW1lcmFcclxufSlcclxuXHJcbmltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xyXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lLmxvb3AuYmluZChnYW1lKSk7XHJcbn0sIGZhbHNlKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=