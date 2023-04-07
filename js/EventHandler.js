const LEFT = 37
const UP = 38
const RIGHT = 39
const DOWN = 40

class EventHandler {

  constructor() {
    window.addEventListener("keydown", this.keydownHandler.bind(this), false);
    window.addEventListener("keyup", this.keyupHandler.bind(this), false);

    this.mvLeft = false
    this.mvUp = false
    this.mvRight = false
    this.mvDown = false
  }

  keydownHandler(e) {
    var key = e.keyCode;
    switch (key) {
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
  }

  keyupHandler(e) {
    var key = e.keyCode;
    switch (key) {
      case LEFT:
        mvLeft = false;
        break;
      case UP:
        mvUp = false;
        break;
      case RIGHT:
        mvRight = false;
        break;
      case DOWN:
        mvDown = false;
        break;
    }
  }
}