class ClippedText {
    constructor(string, cornerA, cornerB) {
        this.string = string;
        this.cornerA = cornerA;
        this.cornerB = cornerB;
        this.w = this.cornerB.x-this.cornerA.x;
        this.h = this.cornerB.y-this.cornerA.y;
        this.surface = createGraphics(this.w, this.h);
        this.surface.textAlign(CENTER, CENTER);
        this.surface.textSize(this.h);
    }
    draw() {
        this.surface.clear();
        // this.surface.background(255, 0, 0);
        this.surface.push();
        this.surface.translate(this.w/2, this.h/2);
        // this.surface.rotate(this.rotation);
        for(let i=0; i<10; i++) {
            this.surface.fill(50+i*5);
            this.surface.scale(0.99);
            this.surface.text(this.string, 0, 0);
        }


        this.surface.pop();
        image(this.surface, this.cornerA.x, this.cornerA.y);
    }
}
