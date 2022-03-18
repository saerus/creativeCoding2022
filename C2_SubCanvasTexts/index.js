let grid;
let font;
let drawables = [];
let sourceA;
let sourceB;
// P5JS preload
function preload() {
    font = loadFont("assets/Graphik-Bold.otf");
    sourceA = loadImage("assets/hh.png");
}
// user input
function mousePressed() {
    grid.toggleVisibility();
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    grid = new Grid(5, 50);
    //
    sourceB = createGraphics(width, height, P2D);
    sourceB.strokeWeight(100);
    sourceB.stroke(255, 0, 0);
    sourceB.line(0, 0, width, height);
    //
    // create new animatedText
    console.log(sourceA);
    for(let y=0; y<grid.qttY; y++) {
        // for(let x=0; x<grid.qttX; x++) {
            let a = grid.getCornerA(0, y);
            let w = grid.getW()*5; 
            let h = grid.getH();
            drawables.push(new SlitScan(sourceA, a.x, a.y, w, h, (y/10)));
        // }
    }
    // put in array
}
// P5JS draw
function draw() {
    drawOnce();
}
// P5JS drawOnce
function drawOnce() {
    background(255);
    grid.draw();
    for(let i=0; i<drawables.length; i++) {
        drawables[i].draw();
    }
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
