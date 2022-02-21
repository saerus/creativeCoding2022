class Square {




    constructor(cornerA, cornerC) {
        this.cornerA = cornerA;
        this.cornerC = cornerC;
        this.setColor(0);
    }
    setColor(time) {
        this.palette = [
            color("#425FB3"),
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
        let sinusA = sin(this.cornerA.x/12 + time);
        let sinusB = sin(this.cornerA.y/3 + time);
        let mappedSinus = map(sinusA*sinusB, -1, 1, 0, this.palette.length-1);
        let floorMapped = floor(mappedSinus);
        this.color = this.palette[floorMapped];
    }
    draw() {
        fill(this.color);
        rect(this.cornerA.x, this.cornerA.y, this.cornerC.x, this.cornerC.y);

    }





}
