class Glitch {
    constructor(image) {
        this.image = image;
        this.surface = createGraphics(width, height);
        this.surface.image(this.image, 0, 0);
        this.surface.loadPixels();
        this.modify();
        this.surface.updatePixels();
    }
    modify() {
        let distance = 500;
        // for(let i = 4; i<this.surface.pixels.length; i++) {
        //     let pxPos = this.getXY(this.surface.width, i);
        //     let n = round(noise(round(pxPos.x/50), (pxPos.y/50))*distance-distance/2)*4;
        //     this.surface.pixels[i] = this.surface.pixels[i-n];
        // }
        for(let y = 0; y<this.surface.height; y++) {
            let glitchLine = false;

            for(let x = 1; x<this.surface.width; x++) {
                let p1 = this.getPx(this.surface.width, x, y);
                let brightness = (this.surface.pixels[p1]+this.surface.pixels[p1+1]+this.surface.pixels[p1+2])/3;
                if(brightness>240) {
                    glitchLine = true;
                }
                if(glitchLine) {
                    let p2 = this.getPx(this.surface.width, x-1, y);
                    //
                    this.surface.pixels[p1] = this.surface.pixels[p2];
                    this.surface.pixels[p1+1] = this.surface.pixels[p2+1];
                    this.surface.pixels[p1+2] = this.surface.pixels[p2+2];
                    this.surface.pixels[p1+3] = this.surface.pixels[p2+3];
                }
            }
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

    getPx(w, x, y) {
        let p = (x+y*w)*4;
        // let r = p;
        // let g = p+1;
        // let b = p+2;
        // let a = p+3;
        return p;
    }

    draw(){
        image(this.surface, 0, 0);
    }
}
