// classe qui permet de créer des textes masqués
// avec rotation
class AnimatedText {
    constructor(text="", x, y, w, h, time) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.time = time;
        this.surface = createGraphics(this.w, this.h, P2D);
        this.surface.textAlign(CENTER, CENTER);
        this.surface.fill("black");
        this.surface.textSize(this.h);
        // this.surface.background(255, 0, 0);
    }
    draw() {
        // this.surface.textSize(this.time);
        this.time+=0.01;
        this.surface.clear();
        this.surface.push();
        this.surface.translate(this.w/2, this.h/2);
        this.surface.rotate(this.time);
        this.surface.text(this.text, 0, 0);
        this.surface.pop();

        image(this.surface, this.x, this.y, this.w, this.h);
    }
}
