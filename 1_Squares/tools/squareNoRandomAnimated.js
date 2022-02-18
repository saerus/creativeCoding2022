class SquareNoRandomAnimated {
    constructor(a, c, x, y) {
        this.a = a;
        this.c = c;
        this.x = x;
        this.y = y;
        this.time = 0;
        this.colors = [
            color("#425FB3"),
            color("#6F7380"),
            color("#6CCBE6"),
            color("#E9A682"),
            color("#B32400"),
        ];
        // let notRandom = ((sin(i/5)+1)*15)%(this.colors.length-1);
        this.sinX = (sin(this.x/50)+1)*12;
        this.sinY = (sin(this.y/25)+1)*5;
        // console.log(sinY);
        let notRandom = floor(this.sinX*this.sinY+this.time)%(this.colors.length);
        // console.log(notRandom);
        this.color = this.colors[notRandom];
    }
    update() {
        this.time+=0.1;
        let notRandom = floor(this.sinX*this.sinY+this.time)%(this.colors.length);
        this.color = this.colors[notRandom];
    }
    draw() {
        fill(this.color);
        rect(this.a.x, this.a.y, this.c.x, this.c.y);
    }
}
