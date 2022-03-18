class Glitch {
    constructor(img, qttX, qttY) {
        this.img = img;
        this.surface = createGraphics(img.width, img.height);
        this.surface.background(255);
        this.surface.image(this.img, 0, 0);
        this.t = 100;
        this.divX = img.width/qttX;
        this.divY = img.height/qttY;
        console.log(this.divY);

        this.surface.loadPixels();
        this.destruct();
        this.surface.updatePixels();
    }
    destruct() {
        this.noise = new OpenSimplexNoise(Date.now()/10.0);
        let qtt = 100;
        let xy, r;
        for(let i=qtt; i<this.surface.pixels.length; i++) {
            xy = this.getXY(this.img.width, i);
            // r = floor(this.noise.noise2D((xy.x/230), (xy.y/23))*qtt)*4;
            r = floor(this.noise.noise2D(xy.x/13.5, floor(xy.y/this.divY))*qtt)*4;
            // r = floor((xy.y/10)%10);

            this.surface.pixels[i] = this.surface.pixels[i-r];
        }
    }
    draw() {
        // fill(255, 0, 0);
        // ellipse(0, 0, 100, 100);
        // image(this.img, 0, 0);
        image(this.surface, 0, 0);
    }
    getXY(w, i) {
        let px = i/4;
        let y = floor(px/w);
        let x = px-y*w;
        return {
            x, y,
        }
    }
}
