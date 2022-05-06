// V5
class Grid {
    //   A ----- B
    //   |       |
    //   |       |
    //   D ----- C
    constructor(qttX, qttY, w, h) {
        this.visible = false;
        this.qttX = qttX;
        this.qttY = qttY;
        this.width = w;
        this.height = h;
        console.log(this.width);
    }
    toggleVisibility() {
        this.visible = !this.visible;
    }
    getW() {
        return this.width / this.qttX;
    }
    getH() {
        return this.height / this.qttY;
    }
    getXfrom01(x) {
        return floor(x*this.qttX);
    }
    getYfrom01(y) {
        return floor(y*this.qttY);
    }
    getCornerA(x, y) {
        x = floor(x);
        y = floor(y);
        return createVector(x * this.getW(), y * this.getH());
    }
    getCornerB(x, y) {
        x = floor(x);
        y = floor(y);
        return createVector((x+1) * this.getW(), y * this.getH());
    }
    getCornerC(x, y) {
        x = floor(x);
        y = floor(y);
        return createVector((x+1) * this.getW(), (y+1) * this.getH());
    }
    getCornerD(x, y) {
        x = floor(x);
        y = floor(y);
        return createVector(x * this.getW(), (y+1) * this.getH());
    }
    getMiddle(x, y) {
        x = floor(x);
        y = floor(y);
        return createVector((x+0.5) * this.getW(), (y+0.5) * this.getH());
    }
    getCornersAC(x, y) {
        x = floor(x);
        y = floor(y);
        return {
            a: this.getCornerA(x, y),
            c: this.getCornerC(x, y),
        }
    }
    getCornersABCD(x, y) {
        x = floor(x);
        y = floor(y);
        return {
            a: this.getCornerA(x, y),
            b: this.getCornerB(x, y),
            c: this.getCornerC(x, y),
            d: this.getCornerD(x, y),
        }
    }
    draw() {
        if(this.visible) {
            // console.log(this.getW());
            for (let x = 0; x < this.qttX + 1; x++) {
                line(x*this.getW(), 0, x*this.getW(), this.height);
                // ellipse(x*this.getW(), 0, 10, 10);
            }
            for (let y = 0; y < this.qttY + 1; y++) {
                line(0, y*this.getH(), this.width, y*this.getH());
                // ellipse(0, y*this.getH(), 10, 10);
            }
        }
    }
    draw2() {
        if(this.visible) {
            for (let x = 0; x < this.qttX + 1; x++) {
                line(x*this.getW(), 0, x*this.getW(), this.height);
            }
        }
    }
}
