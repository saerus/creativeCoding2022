let grid;
let font;
let drawables = [];
let time = 0;
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
    grid = new Grid(10, 200);
    rectMode(CORNERS);
    for(let i = 0; i<grid.qttX; i++){
        for(let j= 0; j<grid.qttY; j++){

        let cornerA = grid.getCornerA(i,j);
        let cornerC = grid.getCornerC(i,j)
        let s = new Square(cornerA, cornerC);
        drawables.push(s);

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
    stroke(0)
    grid.draw();
    noStroke()
    time+=0.1;
    drawables.forEach((d)=>{
        d.setColor(time);
        d.draw();
    });



}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
