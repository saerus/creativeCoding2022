let grid;
let font;
let drawables = [];
// P5JS preload
function preload() {
    font = loadFont('assets/Graphik-Bold.otf');
}
// user input
function mousePressed() {
    grid.toggleVisibility();
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    rectMode(CORNERS);
    grid = new Grid(20, 100);
    for(i=0; i<100; i+=1) {
        let x = 5*sin(i/5)+7;
        let y = i;
        drawables.push(new Square(grid.getCornerA(x, y), grid.getCornerA(x+7, y+1)));
    }
}
// P5JS draw
function draw() {
    drawOnce();
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
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
