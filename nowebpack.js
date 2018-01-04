function Furry() {
  this.x = 0,
    this.y = 0,
    this.direction = "right"
}

function Coin() {
  this.x = Math.floor(Math.random() * 10),
    this.y = Math.floor(Math.random() * 10)
}

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

        this.showCoin = function() {
          this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
        },

        this.hideVisibleFurry = function() {
          if (document.querySelector('.furry') != null) {
            document.querySelector('.furry').classList.remove('furry');
          }
        }

        self = this;

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

        this.checkCoinCollision = function() {
          document.querySelector('.coin').classList.remove('coin'),
            self.score++,
            document.querySelector('strong').innerHTML = self.score,
            self.coin = new Coin,
            self.showCoin()
        },

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

var game = new Game();

game.showFurry();
game.showCoin();
game.startGame();
