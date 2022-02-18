class AnimatedText {
    constructor(string, cornerA, cornerB, rotationBase) {
        this.string = string;
        this.cornerA = cornerA;
        this.cornerB = cornerB;
        this.w = this.cornerB.x-this.cornerA.x;
        this.h = this.cornerB.y-this.cornerA.y;
        this.surface = createGraphics(this.w, this.h);
        this.surface.textAlign(CENTER, CENTER);
        this.surface.textSize(this.h*2);
        this.rotation = rotationBase;
    }
    draw() {
        this.rotation+=0.005;
        this.surface.clear();
        // this.surface.background(255, 0, 0);
        this.surface.push();
        this.surface.translate(this.w/2, this.h/2);
        this.surface.rotate(this.rotation);
        this.surface.text(this.string, 0, 0);
        this.surface.pop();
        image(this.surface, this.cornerA.x, this.cornerA.y);
    }
}
