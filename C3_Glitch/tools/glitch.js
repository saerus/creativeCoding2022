class Glitch {
    constructor(recevoirImage) {
        this.recevoirImage = recevoirImage;
        this.surface = createGraphics(width, height);
        this.surface.image(this.recevoirImage, 0, 0);
        this.surface.loadPixels();
        this.modify();
        this.surface.updatePixels();
    }
    modify() {
        for(let i = 0; i<this.surface.pixels.length; i+=4) {
            this.surface.pixels[i] = 127; // reds
            this.surface.pixels[i+1] = 127; // greens
            this.surface.pixels[i+2] = 0; // blues
            this.surface.pixels[i+3] = 255; // alphas
        }
    }
    draw(){
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
