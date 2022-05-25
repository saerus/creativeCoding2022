let grid;
let font;

let pos;
let posTarget;
let s = 10;
let sTarget = 10;

// P5JS preload
function preload() {
    font = loadFont('assets/Graphik-Bold.otf');
}
// user input
function mousePressed() {
    grid.toggleVisibility();
    posTarget.x = random(0, width);
    posTarget.y = random(0, height);
    sTarget = random(10, 100);
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    grid = new Grid(10, 10);
    pos = createVector(0, 0);
    posTarget = createVector(0, 0);
}
// P5JS draw
function draw() {
    drawOnce();
}
// P5JS drawOnce
function drawOnce() {
    background(255);
    // grid.draw2();
    pos.lerp(posTarget, 0.5);
    s = lerp(s, sTarget, 0.1);
    ellipse(pos.x, pos.y, s, s);
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
