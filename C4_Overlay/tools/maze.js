//
class Maze {
    constructor(img, upLeft, bottomRight, qttX, qttY, time) {
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
        this.img.loadPixels();
        //
        this.grid = new Grid(this.qttX, this.qttY, this.w, this.h);

        this.time = time;
    }

    getPixelFromNormalizedXY(x, y, img) {
        let finalX = floor(x*img.width);
        let finalY = floor(y*img.height);
        return (finalY*img.width+finalX)*4;
    }

    draw() {
        this.surface.clear();
        this.time += 0.1;
        let variation = Math.sin(this.time);
        for(let x=0; x<this.grid.qttX; x++) {
            for(let y=0; y<this.grid.qttY; y++) {
                let normX = x/this.grid.qttX;
                let normY = y/this.grid.qttY;
                let pxl = this.getPixelFromNormalizedXY(normX, normY, this.img);
                // get rgba values
                let r = this.img.pixels[pxl];
                let g = this.img.pixels[pxl+1];
                let b = this.img.pixels[pxl+2];
                let a = this.img.pixels[pxl+3];
                let scale = r/10+variation*10;
                this.surface.ellipse(x*this.grid.getW()+this.grid.getW()/2, y*this.grid.getH()+this.grid.getH()/2, scale, scale);
            }
        }
        image(this.surface, this.upLeft.x, this.upLeft.y);
    }
}
