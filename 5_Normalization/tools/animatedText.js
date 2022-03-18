class AnimatedText {
    constructor(string, x1, y1, x2, y2, rotationBase) {
        this.srcX1 = x1;
        this.srcY1 = y1;
        this.srcX2 = x2;
        this.srcY2 = y2;
        this.string = string;
        this.surface = createGraphics(1, 1);
        this.surface.textAlign(CENTER, CENTER);
        this.rotation = rotationBase;
    }
    draw() {
        this.x1 = grid.gridX(this.srcX1);
        this.y1 = grid.gridY(this.srcY1);
        this.x2 = grid.gridX(this.srcX2);
        this.y2 = grid.gridY(this.srcY2);
        this.w = this.x2-this.x1;
        this.h = this.y2-this.y1;
        if(this.w <= 0) {
            this.w = 1;
        }
        if(this.h <= 0) {
            this.h = 1;
        }
        this.surface.textSize(this.h*2);
        this.surface.resizeCanvas(this.w, this.h);
        this.rotation+=0.005;
        this.surface.clear();
        // this.surface.background(255, 0, 0);
        this.surface.push();
        this.surface.translate(this.w/2, this.h/2);
        this.surface.rotate(this.rotation);
        this.surface.text(this.string, 0, 0);
        this.surface.pop();
        image(this.surface, this.x1, this.y1);
    }
}
