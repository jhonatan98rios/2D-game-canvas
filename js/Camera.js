//Classe para representar a câmera
class Camera {
    constructor({ x, y, width, height }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    innerLeftBoundary() {
        return this.x + (this.width * 0.25);
    }

    innerTopBoundary() {
        return this.y + (this.height * 0.25);
    }

    innerRightBoundary() {
        return this.x + (this.width * 0.75);
    }

    innerBottomBoundary() {
        return this.y + (this.height * 0.75);
    }
}