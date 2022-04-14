let balls;

let stars = [];
let numStars = 50;
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    noStroke();
    pixelDensity(1);

    balls = new Balls();

    for(let i = 0; i<numStars; i++){
        stars[i] = new Balls();
    }
    

}
// P5JS draw
function draw() {
    background(10);

    for(let s = 0; s<stars.length; s++){
        stars[s].move();
        stars[s].show();
    }

    // balls.show();
    // balls.move();
}

// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
