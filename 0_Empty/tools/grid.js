// V5
class Grid {
    //   A ----- B
    //   |       |
    //   |       |
    //   D ----- C
    constructor(qttX, qttY) {
        this.visible = false;
        this.qttX = qttX;
        this.qttY = qttY;
    }
    toggleVisibility() {
        this.visible = !this.visible;
    }
    getW() {
        return width / this.qttX;
    }
    getH() {
        return height / this.qttY;
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
            a: getCornerA(x, y),
            c: getCornerC(x, y),
        }
    }
    getCornersABCD(x, y) {
        x = floor(x);
        y = floor(y);
        return {
            a: getCornerA(x, y),
            b: getCornerB(x, y),
            c: getCornerC(x, y),
            d: getCornerD(x, y),
        }
    }
    draw() {
        if(this.visible) {
            for (let x = 0; x < this.qttX + 1; x++) {
                line(x*this.getW(), 0, x*this.getW(), height);
            }
            for (let y = 0; y < this.qttY + 1; y++) {
                line(0, y*this.getH(), width, y*this.getH());
            }
        }
    }
}
