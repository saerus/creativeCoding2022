class Balls {

    constructor(){
        this.xPos = 0;
        this.yPos = random(height);
        this.w = random(5,20),
        this.col = random(255, 200);
        this.speed=random(1, 14);

    }

    move() {
        
        this.xPos = this.xPos + this.speed;
        if(this.xPos>width){
            this.xPos = 0 - this.w;
        }
    }

    show() {
        fill(this.col);
        ellipse(this.xPos, this.yPos, this.w+5, this.w+5);
    }
}
