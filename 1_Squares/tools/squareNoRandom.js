class SquareNoRandom {
    constructor(a, c, x, y) {
        this.a = a;
        this.c = c;
        this.colors = [
            color("#425FB3"),
            color("#6F7380"),
            color("#6CCBE6"),
            color("#E9A682"),
            color("#B32400"),
        ];
        // let notRandom = ((sin(i/5)+1)*15)%(this.colors.length-1);
        let sinX = (sin(x/50)+1)*12;
        let sinY = (sin(y/25)+1)*5;
        // console.log(sinY);
        let notRandom = floor(sinX*sinY)%(this.colors.length);
        // console.log(notRandom);
        this.color = this.colors[notRandom];
    }
    draw() {
        fill(this.color);
        rect(this.a.x, this.a.y, this.c.x, this.c.y);
    }
}
