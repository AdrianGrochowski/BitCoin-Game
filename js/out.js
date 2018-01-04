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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function Furry() {
    this.x = 0,
    this.y = 0,
    this.direction = "right"
}

module.exports = Furry;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function Coin() {
    this.x = Math.floor(Math.random() * 10),
    this.y = Math.floor(Math.random() * 10)
}

module.exports = Coin;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener("DOMContentLoaded", function(){

var Furry = __webpack_require__(0);
var Coin = __webpack_require__(1);
var Game = __webpack_require__(3);

var game = new Game;
game.showFurry();
game.showCoin();
game.startGame();


});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Furry = __webpack_require__(0);
var Coin = __webpack_require__(1);

function Game() {
      this.board = document.querySelectorAll("#board div"),
        this.furry = new Furry,
        this.coin = new Coin,
        this.score = 0,
        this.index = function(x, y) {
          return x + (y * 10);
        },

        this.showFurry = function() {
          self.hideVisibleFurry();
          this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
        },

//wyświetlanie monety
        this.showCoin = function() {
          this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
        },

//czyszczenie starej pozycji Furry'ego
        this.hideVisibleFurry = function() {
          if (document.querySelector('.furry') != null) {
            document.querySelector('.furry').classList.remove('furry');
          }
        }

        self = this;

// określenie zmiany pozycji Furry
        this.moveFurry = function() {
          if (self.furry.x < 0 || self.furry.x > 9 || self.furry.y < 0 || self.furry.y > 9) {
            self.gameOver();
          };

          if (this.furry.direction == "right") {
            this.furry.x++;
          } else if (this.furry.direction == "left") {
            this.furry.x--;
          } else if (this.furry.direction == "up") {
            this.furry.y--;
          } else if (this.furry.direction == "down") {
            this.furry.y++;
          }
          self.showFurry();

          if (self.furry.x == self.coin.x && self.furry.y == self.coin.y) {
            self.checkCoinCollision();
          };

        },

//sprawdzanie kolizji z monetą
        this.checkCoinCollision = function() {
          document.querySelector('.coin').classList.remove('coin'),
            self.score++,
            document.querySelector('strong').innerHTML = self.score,
            self.coin = new Coin,
            self.showCoin()
        },

//sprawdzanie kolizji ze ścianą
        this.gameOver = function() {
          document.querySelector('#board').classList.add('hide'),
            document.querySelector('#score').classList.add('hide'),
            document.querySelector('#over').classList.remove('invisible'),
            document.querySelector('#over span').innerHTML = self.score,
            clearInterval(this.idSetInterval),
            this.hideVisibleFurry()
        },

        this.startGame = function() {
          this.idSetInterval = setInterval(function() {
            self.moveFurry();
          }, 200);
        },

//zmiana kierunku przy uzyciu klawiatury
        this.turnFurry = function(event) {
          switch (event.which) {
            case 37:
              self.furry.direction = 'left';
              break;
            case 38:
              self.furry.direction = "up";
              break;
            case 39:
              self.furry.direction = "right";
              break;
            case 40:
              self.furry.direction = "down";
          }
        },

        document.addEventListener('keydown', function(event) {
          self.turnFurry(event);
        })

}

module.exports = Game;


/***/ })
/******/ ]);