let grid;
let font;
let halfTop;
let halfBottom;
let imgA;
let imgB;
// P5JS preload
function preload() {
    font = loadFont('assets/Graphik-Bold.otf');
    imgA = loadImage("assets/hh.png");
    imgB = loadImage("assets/deg.png");
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
    halfTop = new ImgPixels(grid.getCornerA(0, 0), grid.getCornerA(10, 5), imgA);
    halfBottom = new ImgPixels(grid.getCornerA(0, 5), grid.getCornerA(10, 10), imgB);
}
// P5JS draw
function draw() {
    drawOnce();
}
// P5JS drawOnce
function drawOnce() {
    background(255);
    grid.draw();
    halfTop.draw();
    halfBottom.draw();
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
