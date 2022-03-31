let grid;
let font;
let imgHH;
let imgDeg;
let drawables = [];
// P5JS preload
function preload() {
    font = loadFont('assets/Graphik-Bold.otf');
    imgHH = loadImage("assets/hh.png");
    imgDeg = loadImage("assets/deg.png");
}
// user input
function mousePressed() {
    grid.toggleVisibility();
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    grid = new Grid(11, 11, width, height);
    let upLeft = grid.getCornerA(1, 1);
    let bottomRight = grid.getCornerA(5, 5);
    let tempMaze = new Maze(imgHH, upLeft, bottomRight, 16, 16);
    drawables.push(tempMaze);

    upLeft = grid.getCornerA(6, 1);
    bottomRight = grid.getCornerA(10, 5);
    tempMaze = new Maze(imgHH, upLeft, bottomRight, 32, 32);
    drawables.push(tempMaze);

    upLeft = grid.getCornerA(1, 6);
    bottomRight = grid.getCornerA(5, 10);
    tempMaze = new Maze(imgDeg, upLeft, bottomRight, 16, 16);
    drawables.push(tempMaze);

    upLeft = grid.getCornerA(6, 6);
    bottomRight = grid.getCornerA(10, 10);
    tempMaze = new Maze(imgDeg, upLeft, bottomRight, 32, 32);
    drawables.push(tempMaze);
}
// P5JS draw
function draw() {
    drawOnce();
}
function mouseMoved() {
    let t = (mouseY/height)*255;
    drawables.forEach((d)=>{
        d.setThreshold(t);
    });
}
// P5JS drawOnce
function drawOnce() {
    background(255);
    grid.draw();
    drawables.forEach((d)=>{
        d.draw();
    });
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
