// Marching Squares
// Coding in the Cabana
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/challenges/coding-in-the-cabana/005-marching-squares.html
// https://youtu.be/0ZONMNUKTfU
// p5 port: https://editor.p5js.org/codingtrain/sketches/g6-zufS8c
class MarchingSquares {
    constructor(qttX, qttY) {
        this.field = [];
        this.increment = 1;
        this.zoff = 0;
        //
        // createCanvas(300, 300);
        this.noise = new OpenSimplexNoise(Date.now()/10.0);
        // this.cols = 1 + width / this.rez;
        // this.rows = 1 + height / this.rez;
        this.cols = qttX+1;
        this.rows = qttY+1;
        this.w = width/(this.cols-1);
        this.h = height/(this.rows-1);
        // let rez = 5;
        for (let i = 0; i < this.cols; i++) {
            let k = [];
            for (let j = 0; j < this.rows; j++) {
                k.push(0);
            }
            this.field.push(k);
        }
    }

    drawLine(v1, v2) {
        line(v1.x, v1.y, v2.x, v2.y);
    }

    draw() {
        // background(0);
        let xoff = 0;
        for (let i = 0; i < this.cols; i++) {
            let iNormalized = i/this.cols;
            xoff += this.increment;
            let yoff = 0;
            for (let j = 0; j < this.rows; j++) {
                let jNormalized = j/this.rows;
                // this.field[i][j] = float(this.noise.noise3D(xoff, yoff, this.zoff));
                let x = floor(iNormalized*hh.width);
                let y = floor(jNormalized*hh.height);
                let index = (x + y * width) * 4;
                let col = hh.pixels[index+0]/255.0;
                this.field[i][j] = col-mouseY/height;
                // console.log(col);
                // this.field[i][j] = hh.get(10, 10);
                yoff += this.increment;
            }
        }
        // console.log(hh.get(10, 10)[0]);
        this.zoff += 0.001;

        //for (let i = 0; i < cols; i++) {
        //  for (let j = 0; j < rows; j++) {
        //    fill(field[i][j]*255);
        //    noStroke();
        //    rect(i*rez, j*rez, rez, rez);
        //  }
        //}

        for (let i = 0; i < this.cols - 1; i++) {
            for (let j = 0; j < this.rows - 1; j++) {
                let x = i * this.w;
                let y = j * this.h;
                let a = createVector(x + this.w * 0.5, y);
                let b = createVector(x + this.w, y + this.h * 0.5);
                let c = createVector(x + this.w * 0.5, y + this.h);
                let d = createVector(x, y + this.h * 0.5);
                let state = this.getState(
                    ceil(this.field[i][j]),
                    ceil(this.field[i + 1][j]),
                    ceil(this.field[i + 1][j + 1]),
                    ceil(this.field[i][j + 1])
                );
                // stroke(255);
                // strokeWeight(5);
                switch (state) {
                    case 1:
                        this.drawLine(c, d);
                        break;
                    case 2:
                        this.drawLine(b, c);
                        break;
                    case 3:
                        this.drawLine(b, d);
                        break;
                    case 4:
                        this.drawLine(a, b);
                        break;
                    case 5:
                        this.drawLine(a, d);
                        this.drawLine(b, c);
                        break;
                    case 6:
                        this.drawLine(a, c);
                        break;
                    case 7:
                        this.drawLine(a, d);
                        break;
                    case 8:
                        this.drawLine(a, d);
                        break;
                    case 9:
                        this.drawLine(a, c);
                        break;
                    case 10:
                        this.drawLine(a, b);
                        this.drawLine(c, d);
                        break;
                    case 11:
                        this.drawLine(a, b);
                        break;
                    case 12:
                        this.drawLine(b, d);
                        break;
                    case 13:
                        this.drawLine(b, c);
                        break;
                    case 14:
                        this.drawLine(c, d);
                        break;
                }
            }
        }
    }

    getState(a, b, c, d) {
        return a * 8 + b * 4 + c * 2 + d * 1;
    }
}
