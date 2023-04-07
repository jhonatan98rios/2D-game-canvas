const LEFT = 37
const UP = 38
const RIGHT = 39
const DOWN = 40

export class EventHandler {
  mvLeft: boolean
  mvUp: boolean
  mvRight: boolean
  mvDown: boolean

  constructor() {
    this.mvLeft = false
    this.mvUp = false
    this.mvRight = false
    this.mvDown = false

    window.addEventListener("keydown", this.keydownHandler, false);
    window.addEventListener("keyup", this.keyupHandler, false);
  }

  keydownHandler(e: KeyboardEvent) {
    var key = e.key || e.keyCode;
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

  keyupHandler(e: KeyboardEvent) {
    var key = e.key || e.keyCode;
    switch (key) {
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
  }
}