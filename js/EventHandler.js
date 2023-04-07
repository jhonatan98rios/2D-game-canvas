const LEFT = 37
const UP = 38
const RIGHT = 39
const DOWN = 40

class EventHandler {

  constructor() {
    window.addEventListener("keydown", this.keydownHandler, false);
    window.addEventListener("keyup", this.keyupHandler, false);
  }

  keydownHandler(e) {
    var key = e.keyCode;
    switch (key) {
      case LEFT:
        mvLeft = true;
        break;
      case UP:
        mvUp = true;
        break;
      case RIGHT:
        mvRight = true;
        break;
      case DOWN:
        mvDown = true;
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