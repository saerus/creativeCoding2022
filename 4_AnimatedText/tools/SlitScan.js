// classe qui permet de créer des textes masqués
// avec rotation
class SlitScan {
    constructor(img, x, y, w, h, time) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.time = time;
    }
    draw() {
        let sinus = sin(this.time);
        image(this.img, this.x, this.y, this.w, this.h, this.x-sinus*500, this.y, this.w+sinus*500, this.h);
        this.time+=0.01;
    }
}
