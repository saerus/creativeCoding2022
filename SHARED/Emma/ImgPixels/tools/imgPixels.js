class ImgPixels {
    constructor(cornerA, cornerB, image) {
        this.cornerA = cornerA;
        this.cornerB = cornerB;
        this.image = image;
        this.options = {
            noiseOffset: 0,
            noiseAmount: 1700,
            noiseFrequency: .7,
            divisions: 30,
        }
        this.w = this.cornerB.x-this.cornerA.x;
        this.h = this.cornerB.y-this.cornerA.y;
        this.surface = createGraphics(this.w, this.h, P2D);
        this.surface.background(255, 0, 0);
        // this.surface.image(this.image, 0, 0, this.w, this.h);
        this.deform();
    }
    deform() {
        for(let i = 0; i < this.options.divisions; i++){
            // let largeur = this.h/this.options.divisions
            //dessiner la bande de l'image sélectionnée
            let dwidth = this.w/this.options.divisions*1;
            let dx = i*this.w/this.options.divisions;
            let dy = ((noise((i*this.options.noiseFrequency)+this.options.noiseOffset)-0.5))*this.options.noiseAmount;
            let dheight = this.h;
            let sx = i*this.w/this.options.divisions;
            let sy = 0;
            let swidth = dwidth;
            let sheight = this.height;
            this.surface.image(this.image, dx,dy,dwidth,dheight,sx,sy,swidth,sheight)
        }
    }
    draw() {
        image(this.surface, this.cornerA.x, this.cornerA.y, this.w, this.h);
    }
}
