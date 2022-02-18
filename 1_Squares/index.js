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
    grid = new Grid(9, 200);
    for(let y=0; y<200; y+=1) {
        for(let x=0; x<9; x+=1) {
            let newDrawable = new Square(grid.getCornerA(x, y), grid.getCornerA(x+1, y+1));
            // let newDrawable = new SquareNoRandom(grid.getCornerA(x, y), grid.getCornerA(x+1, y+1), x, y);
            // let newDrawable = new SquareNoRandomAnimated(grid.getCornerA(x, y), grid.getCornerA(x+1, y+1), x, y);
            drawables.push(newDrawable);
        }
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
        // t.update();
        t.draw();
    });
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
