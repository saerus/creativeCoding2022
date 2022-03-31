let grid;
let font;
let drawables = [];
let imgHH;
// P5JS preload
function preload() {
    font = loadFont('assets/Graphik-Bold.otf');
    imgHH = loadImage("assets/hh.png");
}
// user input
function mousePressed() {
    grid.toggleVisibility();
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    grid = new Grid(11, 11);

    let tempUpLeft = grid.getCornerA(1, 1);
    let tempBottomRight = grid.getCornerA(5, 10);
    let tempMaze = new Maze(imgHH, tempUpLeft, tempBottomRight, 10, 10);
    drawables.push(tempMaze);

    tempUpLeft = grid.getCornerA(6, 1);
    tempBottomRight = grid.getCornerA(10, 10);
    tempMaze = new Maze(imgHH, tempUpLeft, tempBottomRight, 10, 10);
    drawables.push(tempMaze);
}
// P5JS draw
function draw() {
    drawOnce();
}
// P5JS drawOnce
function drawOnce() {
    background(255);
    //
    drawables.forEach((d)=>{
        d.draw();
    });
    //
    grid.draw();
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
