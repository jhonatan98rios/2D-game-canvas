interface Three {
    sx: number
    sy: number
    swidth: number
    sheight: number
    dx: number
    dy: number
    dwidth:number
    dheight: number
}

type CollisionBox = {
    left: number
    right: number
    top: number
    bottom: number
}

export class Tree {

    sx: number
    sy: number
    swidth: number
    sheight: number
    dx: number
    dy: number
    dwidth:number
    dheight: number
    collisionBox: CollisionBox

    constructor({ sx, sy, swidth, sheight, dx, dy, dwidth, dheight }: Three) {
        this.sx = sx
        this.sy = sy
        this.swidth = swidth
        this.sheight = sheight
        this.dx = dx
        this.dy = dy
        this.dwidth = dwidth
        this.dheight = dheight

        this.collisionBox = {
            left: sx + (dwidth / 2),
            right: sx + (dwidth * 0.75),
            top: sy + (dheight / 2),
            bottom: sy + dheight
        }
    }
}