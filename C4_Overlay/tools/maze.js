//
class Maze {
    constructor(img, upLeft, bottomRight, qttX, qttY) {
        this.img = img;
        this.upLeft = upLeft;
        this.bottomRight = bottomRight;
        this.qttX = qttX;
        this.qttY = qttY;
        //
        this.w = this.bottomRight.x-this.upLeft.x;
        this.h = this.bottomRight.y-this.upLeft.y;
        this.surface = createGraphics(this.w, this.h, P2D);
        this.surface.background(255, 0, 0);
    }
    draw() {
        image(this.surface, this.upLeft.x, this.upLeft.y);
    }
}
