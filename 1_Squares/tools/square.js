class Square {
    constructor(a, c) {
        this.a = a;
        this.c = c;
        this.colors = [
            color("#425FB3"),
            color("#425FB3"),
            color("#425FB3"),
            color("#425FB3"),
            color("#425FB3"),
            color("#425FB3"),
            color("#6F7380"),
            color("#6CCBE6"),
            color("#E9A682"),
            color("#B32400"),
        ];
        this.color = random(this.colors);
    }
    draw() {
        fill(this.color);
        rect(this.a.x, this.a.y, this.c.x, this.c.y);
    }
}
