let grid;
let drawables = [];
let marching;
let marching2;
let sourceA;
// P5JS preload
function preload() {
    sourceA = loadImage("assets/hh.png");
}
// user input
function mousePressed() {
    grid.toggleVisibility();
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight);
    sourceA.loadPixels();

    pixelDensity(1);
    rectMode(CORNERS);
    grid = new Grid(200, 400);
    marching = new MarchingSquares(200, 400);
    // marching2 = new MarchingSquares(20, 40);
        // drawOnce();
}
// P5JS draw
function draw() {
    drawOnce();
}
// P5JS drawOnce
function drawOnce() {
    background(255);
    stroke(0);
    strokeWeight(5);
    marching.draw();
    // marching2.draw();
    strokeWeight(1);
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
