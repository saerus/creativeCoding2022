let grid;
let font;
let drawables = [];
let img;
let separateDrawable;
// P5JS preload
function preload() {
    font = loadFont('assets/Graphik-Bold.otf');
    img = loadImage("assets/beton.jpg");
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
    for(i=0; i<50; i+=4) {
        let x = 5*sin(i/5)+7;
        let y = i;
        let newDrawable = new ClippedText("***"+i, grid.getCornerA(x, y), grid.getCornerA(x+20, y+4), i);
        drawables.push(newDrawable);
    }
    separateDrawable = new ClippedText("***", grid.getCornerA(0, 0), grid.getCornerA(20, 50), 0);
}
// P5JS draw
function draw() {
    drawOnce();
}
// P5JS drawOnce
function drawOnce() {
    blendMode(BLEND);
    background(255);
    image(img, 0, 0, width, height);
    stroke(0);
    grid.draw();
    noStroke();
    separateDrawable.draw();
    blendMode(BURN);
    drawables.forEach((t)=>{
        t.draw();
    });

}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
