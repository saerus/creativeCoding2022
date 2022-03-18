let grid;
let font;
let drawables = [];
let imgA;
// P5JS preload
function preload() {
    font = loadFont('assets/Graphik-Bold.otf');
    imgA = loadImage("assets/hh.png");
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
    grid = new Grid(10, 10);
    drawables.push(new Glitch(imgA, 10, 10));

}
// P5JS draw
function draw() {
    drawOnce();
}
// P5JS drawOnce
function drawOnce() {
    background(255);
    noStroke();
    // stroke(0, 255, 0);
    drawables.forEach((t)=>{
        t.draw();
    });
    stroke(255, 0, 0);
    grid.draw();
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
