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
        this.img.loadPixels();
        //
        this.grid = new Grid(90, 80, this.w, this.h);
    }
    
    getPixelFromNormalizedXY(x, y, img) {
        let finalX = floor(x*img.width);
        let finalY = floor(y*img.height);
        return (finalY*img.width+finalX)*4;
    }

    draw() {
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
                let s = r/10;
                this.surface.ellipse(x*this.grid.getW()+this.grid.getW()/2, y*this.grid.getH()+this.grid.getH()/2, s, s);
            }
        }


        

        
        image(this.surface, this.upLeft.x, this.upLeft.y);
    }
}
