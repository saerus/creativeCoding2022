let grid;
let font;
let sourceImg;
let glitch;
// P5JS preload
function preload() {
    font = loadFont('assets/Graphik-Bold.otf');
    sourceImg = loadImage("assets/hh.png");
}
// user input
function mousePressed() {
    grid.toggleVisibility();
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    grid = new Grid(10, 10);
    glitch = new Glitch(sourceImg);
}
// P5JS draw
function draw() {
    drawOnce();
}
// P5JS drawOnce
function drawOnce() {
    background(255);
    grid.draw();
    glitch.draw();
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
