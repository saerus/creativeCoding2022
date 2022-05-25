let grid;
let font;
let sourceA;
let drawables = [];
let mazeA;
// P5JS preload
function preload() {
    font = loadFont('assets/Graphik-Bold.otf');
    sourceA = loadImage("assets/hh.png");
}
// user input
function mousePressed() {
    grid.toggleVisibility();
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    rectMode(CORNERS);
    grid = new Grid(20, 50);
    for(i=0; i<50; i+=2) {
        let x = 5*sin(i/5)+0;
        let y = i;
        let newDrawable = new AnimatedText("open source", grid.getCornerA(x, y), grid.getCornerA(x+20, y+2), i/5);
        drawables.push(newDrawable);
    }
    mazeA = new Maze(sourceA, grid.getCornerA(2, 2), grid.getCornerA(4, 4), 10, 10);
}
// P5JS draw
function draw() {
    drawOnce();
    //   filter(BLUR, 3);
}
// P5JS drawOnce
function drawOnce() {
    background(255);
    stroke(0);
    grid.draw();
    noStroke();

    drawables.forEach((t)=>{
        t.draw();
    });
    // mazeA.drawSurface();
    // mazeA.draw();
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
