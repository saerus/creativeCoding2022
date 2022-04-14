class MirrorThing {
    constructor(vitesse,frequence,texte2) {
        this.vitesse = vitesse;
        this.canvas = canvas;
        this.frequence = frequence;

        this.texte2 = texte2;
    }
    drawTheThing(){
        let newHeight=300//(width/5)/2+50;
        this.canvas = createGraphics(width, newHeight);
        this.canvas.textSize(width / 5);
        this.canvas.textAlign(CENTER, CENTER);
        this.canvas.push();
        this.canvas.translate(width/2,(width/5)/2+50);
        this.canvas.text(this.texte2, 0,0);
        this.canvas.pop();
        //this.canvas.background(255,0,0,100)
        let d = map(sin(this.vitesse * this.frequence), -1, 1, 70, -5);
        let imgTop = this.canvas.get(0, 0, this.canvas.width, this.canvas.height / 2);
        let imgBottom = this.canvas.get(0, this.canvas.height / 2, this.canvas.width, this.canvas.height / 2);
        let imgMiddle = this.canvas.get(0, this.canvas.height / 1.93, this.canvas.width, 1);
        imageMode(CORNER);
        image(imgTop, 0, -d);
        image(imgMiddle, 0, imgTop.height - d, imgMiddle.width, d * 1);
        image(imgBottom, 0, newHeight/2+d);
    }
    //GRID
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
}
