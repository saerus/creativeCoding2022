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
        let distance = 500;
        for(let i = 4; i<this.surface.pixels.length; i++) {
            let pxPos = this.getXY(this.surface.width, i);
            let n = round(noise(round(pxPos.x/50), (pxPos.y/50))*distance-distance/2)*4;
            this.surface.pixels[i] = this.surface.pixels[i-n];
        }
    }


    getXY(w, i) {
        let px = i/4;
        let y = floor(px/w);
        let x = px-y*w;
        return {
            x, y,
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
