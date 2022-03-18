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
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    rectMode(CORNERS);
    grid = new Grid(20, 60);
    let y = 0;
    let h = 0.25;
    for(i=0; i<20; i++) {
        // console.log(x, y, w, w);
        let newDrawable = new AnimatedText("-- think open source --", 0, y, 1, y+h, i/10);
        drawables.push(newDrawable);
        y+=h;
        h*=0.7;
    }
}
function mouseMoved() {
    if(grid) {
        grid.set(mouseX/width*500+1, mouseY/height*500+1);
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
