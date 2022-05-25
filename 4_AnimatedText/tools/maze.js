//
class Maze {
    constructor(img, upLeft, bottomRight, qttX, qttY) {
        this.img = img;
        this.upLeft = upLeft;
        this.bottomRight = bottomRight;
        this.qttX = qttX;
        this.qttY = qttY;
        //
        this.width = this.bottomRight.x-this.upLeft.x;
        this.height = this.bottomRight.y-this.upLeft.y;
        //
        this.grid = new Grid(this.qttX, this.qttY, this.width, this.height);
        this.surface = createGraphics(this.width, this.height, P2D);
        this.surface.strokeWeight(2);
        this.surface.stroke(255, 0, 0);
        this.threshold = 127;
        // this.surface.image(this.img, 0, 0, this.surface.width, this.surface.height);
        //
        this.img.loadPixels();
    }
    getPixelFromNormalizedXY(x, y, img) {
        let finalX = floor(x*img.width);
        let finalY = floor(y*img.height);
        return (finalY*img.width+finalX)*4;
    }
    drawSurface() {
        this.surface.clear();
        for(let y=0; y<this.grid.qttY; y++) {
            for(let x=0; x<this.grid.qttX; x++) {
                let corners = this.grid.getCornersABCD(x, y);
                let middle = this.grid.getMiddle(x, y);
                let pxl = this.getPixelFromNormalizedXY(x/this.grid.qttX, y/this.grid.qttY, this.img);
                let r = this.img.pixels[pxl];
                let g = this.img.pixels[pxl+1];
                let b = this.img.pixels[pxl+2];
                let a = this.img.pixels[pxl+3];
                this.surface.stroke(r, g, b, a);
                if(r > this.threshold) {
                    this.surface.line(corners.a.x, corners.a.y, corners.c.x, corners.c.y);
                } else {
                    this.surface.line(corners.b.x, corners.b.y, corners.d.x, corners.d.y);
                }
                // this.surface.ellipse(middle.x, middle.y, r/10);
            }
        }
    }
    setThreshold(t) {
        this.threshold = t;
    }
    draw() {
        this.drawSurface();
        image(this.surface, this.upLeft.x, this.upLeft.y);
    }
}
