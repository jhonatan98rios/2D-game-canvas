//Classe para representar a câmera
class Camera {
    constructor({ x, y, width, height }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    //Métodos para calcular as bordas internas da câmera
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

    //Método para limitar a posição da câmera dentro do labirinto
    limitPosition() {
        this.x = Math.max(0, Math.min(T_WIDTH - this.width, this.x));
        this.y = Math.max(0, Math.min(T_HEIGHT - this.height, this.y));
    }
}