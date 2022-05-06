class DyingSquare {
    constructor(corner, size) {
        this.corner = corner;
        this.size = size;
        this.color = color(floor(random(0, 255)));
        this.pos = createVector(this.corner.x-this.size/2, this.corner.y-this.size/2);
        this.vel = createVector(random(-1, 1), -random(0, 5));
        this.acc = createVector(0, 0.91);
        //
        this.alive = true;
        setTimeout(() => {
            this.alive = false;
        }, 5000);
    }
    draw() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        fill(this.color);
        rect(this.pos.x, this.pos.y, this.size, this.size);
    }
}
