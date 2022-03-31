let grid;
let font;
let shaderA;
let hh;
// P5JS preload
function preload() {
    font = loadFont('assets/Graphik-Bold.otf');
    hh = loadImage("assets/hh.png");
    shaderA = loadShader('assets/shader.vert', 'assets/shader.frag');
}
// user input
function mousePressed() {
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    // hh.resize(width, height);
    shader(shaderA);
    shaderA.setUniform("buffer", hh);
}
// P5JS draw
function draw() {
    drawOnce();
}
// P5JS drawOnce
function drawOnce() {
    shaderA.setUniform("res", [width, height]);
    shaderA.setUniform("mouse", [mouseX, mouseY]);
    // image(hh, 0, 0, width, height);
    // quad(-1, -1, 1, -1, 1, 1, -1, 1);
    quad(0, 0, 1, 0, 1, 1, 0, 1);
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
